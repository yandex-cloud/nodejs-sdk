import axios from 'axios';
import { FakeTimersFixture } from '../../utils/tests/fake-timers-fixture';
import { MetadataTokenService, setTestInitializeTimerAdvance } from '../../token-service/metadata-token-service';
import { ERROR_REPORT_INTERVAL_MS, INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN } from '../../token-service/metadata-token-service.consts';
import Mock = jest.Mock;
import { buildTestLogger } from '../../utils/test-logger';
import { HRInterval } from '../../utils/hr-interval';

const TTL = 10 * 60 * 60;
const RANDOM = 0.7;

describe('MetadataTokenService.initialize', () => {
    const fakeTimersFixture = new FakeTimersFixture();

    setTestInitializeTimerAdvance(async (duration) => {
        await fakeTimersFixture.advanceTimer(duration);
    });

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
        metadataTokenService = new MetadataTokenService({ logger: testLogger });
        testLoggerFn.mockReset(); // clear constructor log
    });

    afterEach(async () => {
        testLoggerFn.mockReset();
        jest.restoreAllMocks();
        await fakeTimersFixture.dispose();
    });

    it('token was successfully obtained from the beginning', async () => {
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
        await (metadataTokenService as unknown).initialize();

        // @ts-ignore
        expect((metadataTokenService as unknown).token)
            .toBe('123');
    });

    it('the token was not successfully obtained on the first attempt', async () => {
        const N = Math.trunc(INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN / 2);

        const nextReturn = (function* nextReturn() {
            for (let i = 0; i < N; i++) {
                yield {
                    status: 400,
                    statusText: 'error',
                };
            }

            return {
                status: 200,
                statusText: 'ok',
                data: {
                    token_type: 'Bearer',
                    access_token: '123',
                    expires_in: TTL,
                },
            };
        }());

        (axios.get as Mock).mockImplementation(() => nextReturn.next().value);

        // @ts-ignore
        await (metadataTokenService as unknown).initialize();

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    MetadataTokenService.Messages.trace_initialize,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_fetchToken,
                ],
                [
                    'error',
                    'failed to fetch token: 400 error',
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_fetchToken,
                ],
                [
                    'error',
                    'failed to fetch token: 400 error',
                ],
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

    it('all attempts failed', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        // @ts-ignore
        await expect((metadataTokenService as unknown).initialize())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));
    });
});
