import axios from 'axios';
import {FakeTimersFixture} from '../../utils/tests/fake-timers-fixture';
import {MetadataTokenService, setTestInitializeTimerAdvance} from '../../token-service/metadata-token-service';
import {
    GET_TOKEN_BACKOFF_CEILING, GET_TOKEN_BACKOFF_SLOT_DURATION, GET_TOKEN_BACKOFF_UNCERTAIN_RATIO,
} from '../../token-service/metadata-token-service.consts';
import Mock = jest.Mock;
import {buildTestLogger} from '../../utils/test-logger';
import {HRInterval} from '../../utils/hr-interval';

const TTL = 10 * 60 * 60;
const RANDOM = 0.7;

describe('MetadataTokenService.fetchToken', () => {
    const fakeTimersFixture = new FakeTimersFixture();

    const {
        testLogger,
        testLoggerFn,
    } = buildTestLogger();

    let metadataTokenService: MetadataTokenService;

    beforeEach(() => {
        fakeTimersFixture.setup();
        jest.spyOn(axios, 'get');
        jest.spyOn(Math, 'random');
        (Math.random as Mock).mockReturnValue(RANDOM);
        metadataTokenService = new MetadataTokenService({logger: testLogger});
        testLoggerFn.mockReset(); // clear constructor log
    });

    afterEach(async () => {
        testLoggerFn.mockReset();
        jest.restoreAllMocks();
        await fakeTimersFixture.dispose();
    });

    it('successfully fetching token', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        // @ts-ignore
        expect(await (metadataTokenService as unknown).fetchToken())
            .toBe('123');

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    MetadataTokenService.Messages.trace_fetchToken,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_setIamResponse,
                ],
                [
                    'debug',
                    MetadataTokenService.Messages.debug_new_token_was_received,
                    new HRInterval(TTL * 1000),
                    '',
                ],
            ]);
    });

    it('error when fetching token, with increasing delay between attempts', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        // @ts-ignore
        (metadataTokenService as unknown).tokenExpiresAt = Date.now() + TTL;
        // @ts-ignore
        (metadataTokenService as unknown).token = '123';
        // @ts-ignore
        (metadataTokenService as unknown).tokenStartReportTTLAt = Date.now() + TTL + 24;

        for (let i = 0; i < GET_TOKEN_BACKOFF_CEILING + 2; i++) {
            // @ts-ignore
            // eslint-disable-next-line no-await-in-loop
            await expect((metadataTokenService as unknown).fetchToken())
                .rejects
                .toThrow(new Error('failed to fetch token: 400 error'));

            // @ts-ignore
            // eslint-disable-next-line no-bitwise
            const slotsCount = 1 << Math.min((metadataTokenService as unknown).tokenErrorCount - 1, GET_TOKEN_BACKOFF_CEILING);
            const maxDuration = slotsCount * GET_TOKEN_BACKOFF_SLOT_DURATION;

            // @ts-ignore
            expect((metadataTokenService as unknown).tokenRefreshAt)
                .toBe(Date.now() + maxDuration * (1 - RANDOM * GET_TOKEN_BACKOFF_UNCERTAIN_RATIO));

            // @ts-ignore
            // after error remains the same
            expect((metadataTokenService as unknown).token)
                .toBe('123');
            // @ts-ignore
            expect((metadataTokenService as unknown).tokenExpiresAt)
                .toBe(Date.now() + TTL);
            // @ts-ignore
            expect((metadataTokenService as unknown).tokenStartReportTTLAt)
                .toBe(Date.now() + TTL + 24);

            expect(testLoggerFn.mock.calls)
                .toEqual([
                    [
                        'trace',
                        MetadataTokenService.Messages.trace_fetchToken,
                    ],
                    [
                        'error',
                        'failed to fetch token: 400 error',
                    ]]);
            testLoggerFn.mockReset();
        }
    });
});
