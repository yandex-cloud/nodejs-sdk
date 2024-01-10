import { buildTestLogger } from '../../utils/test-logger';
import { MetadataTokenService } from '../../token-service/metadata-token-service';
import { FakeTimersFixture } from '../../utils/tests/fake-timers-fixture';
import { HRInterval } from '../../utils/hr-interval';
import IamGetTokenResponse = MetadataTokenService.IamToken;
import {
    TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT,
    TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT,
    TOKEN_MINIMUM_LIFETIME_MARGIN_MS,
    Messages,
} from '../../token-service/metadata-token-service.consts';

describe('MetadataTokenService.setIamResponse', () => {
    const fakeTimersFixture = new FakeTimersFixture();

    const {
        testLogger,
        testLoggerFn,
    } = buildTestLogger();

    let metadataTokenService: MetadataTokenService;

    beforeEach(() => {
        fakeTimersFixture.setup();
        metadataTokenService = new MetadataTokenService({ logger: testLogger });
        testLoggerFn.mockReset();
    });

    afterEach(() => {
        testLoggerFn.mockReset();
        fakeTimersFixture.dispose();
    });

    it('general', async () => {
        const TTL = 10 * 60 * 60; // sec

        metadataTokenService.setIamToken({
            token_type: 'Bearer',
            access_token: '123',
            expires_in: TTL,
        });

        // @ts-ignore
        expect((metadataTokenService as unknown).token)
            .toBe('123');
        // @ts-ignore
        expect((metadataTokenService as unknown).tokenExpiresAt)
            .toBe(Date.now() + (TTL * 1000) - TOKEN_MINIMUM_LIFETIME_MARGIN_MS);
        // @ts-ignore
        expect((metadataTokenService as unknown).tokenRefreshAt)
            .toBe(Date.now() + (TTL * 1000) * (1 - TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100));
        // @ts-ignore
        expect((metadataTokenService as unknown).tokenStartReportTTLAt)
            .toBe(Date.now() + (TTL * 1000) * (1 - TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT / 100));

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    Messages.trace_setIamResponse,
                ],
                [
                    'debug',
                    Messages.debug_new_token_was_received,
                    new HRInterval(36_000_000),
                    '',
                ],
            ]);
    });

    it('new token received after an error', async () => {
        const TTL = 10 * 60 * 60; // sec

        // @ts-ignore
        (metadataTokenService as unknown).tokenLastError = {};

        metadataTokenService.setIamToken({
            token_type: 'Bearer',
            access_token: '123',
            expires_in: TTL,
        });

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    Messages.trace_setIamResponse,
                ],
                [
                    'info', // it's info, there was an error
                    Messages.debug_new_token_was_received,
                    new HRInterval(36_000_000),
                    '',
                ],
            ]);
    });

    it('token with TTL less than allowed', async () => {
        expect(() => metadataTokenService.setIamToken({
            token_type: 'Bearer',
            access_token: '123',
            expires_in: TOKEN_MINIMUM_LIFETIME_MARGIN_MS / 1000 / 2,
        }))
            .toThrow(new Error('insufficient lifetime: 00:07:30'));

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    Messages.trace_setIamResponse,
                ],
                [
                    'debug',
                    Messages.debug_new_token_was_received,
                    new HRInterval(450_000),
                    ' (too small TTL)',
                ],
            ]);
    });

    it('invalid token structure', async () => {
        expect(() => metadataTokenService.setIamToken(undefined as unknown as IamGetTokenResponse))
            .toThrow(new Error('invalid iam token: undefined'));

        expect(() => metadataTokenService.setIamToken(null as unknown as IamGetTokenResponse))
            .toThrow(new Error('invalid iam token: null'));

        expect(() => metadataTokenService.setIamToken({} as IamGetTokenResponse))
            .toThrow(new Error('invalid iam token: {}'));

        expect(() => metadataTokenService.setIamToken({
            token_type: 'Bearer',
            expires_in: 'str',
        } as unknown as IamGetTokenResponse))
            .toThrow(new Error('invalid iam token: { token_type: \'Bearer\', expires_in: \'str\' }'));

        expect(() => metadataTokenService.setIamToken({
            token_type: 'Bearer',
            expires_in: -1,
        } as unknown as IamGetTokenResponse))
            .toThrow(new Error('invalid iam token: { token_type: \'Bearer\', expires_in: -1 }'));

        expect(() => metadataTokenService.setIamToken({
            token_type: 'Bearer',
            expires_in: 10 * 60 * 60,
            access_token: 111,
        } as unknown as IamGetTokenResponse))
            .toThrow(new Error('invalid iam token: { token_type: \'Bearer\', expires_in: 36000, access_token: 111 }'));

        expect(() => metadataTokenService.setIamToken({
            token_type: 'Bearer',
            expires_in: 10 * 60 * 60,
            access_token: '123',
        } as unknown as IamGetTokenResponse))
            .not
            .toThrow();
    });
});
