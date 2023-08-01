import axios from 'axios';
import { FakeTimersFixture } from '../../utils/tests/fake-timers-fixture';
import { getTestInitPromise, MetadataTokenService, setTestInitializeTimerAdvance } from '../../token-service/metadata-token-service';
import Mock = jest.Mock;
import { buildTestLogger } from '../../utils/test-logger';
import { HRInterval } from '../../utils/hr-interval';

const TTL = 10 * 60 * 60;

describe('MetadataTokenService.getToken', () => {
    const fakeTimersFixture = new FakeTimersFixture();

    setTestInitializeTimerAdvance(async (duration) => {
        await fakeTimersFixture.advanceTimer(duration);
    });

    const {
        testLogger,
        testLoggerFn,
    } = buildTestLogger();

    beforeEach(() => {
        fakeTimersFixture.setup();
        jest.spyOn(axios, 'get');
        jest.spyOn(Math, 'random');
        (Math.random as Mock).mockReturnValue(1);
        testLoggerFn.mockReset(); // clear constructor log
    });

    afterEach(async () => {
        testLoggerFn.mockReset();
        jest.restoreAllMocks();
        await fakeTimersFixture.dispose();
    });

    it('the first time the token is requested immediately when the service is created', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        const metadataTokenService = new MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });

        await getTestInitPromise(); // wait till background tocken will be received

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'debug',
                    MetadataTokenService.Messages.debug_ctor,
                    MetadataTokenService.DEFAULT_URL,
                    true,
                    MetadataTokenService.DEFAULT_OPTIONS,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_getToken,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace__getToken,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_initialize,
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
                [
                    'trace',
                    MetadataTokenService.Messages.trace_setTimer,
                ],
            ]);

        await metadataTokenService.dispose();
    });

    it('the first time the token request has failed', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        const metadataTokenService = new MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });

        await getTestInitPromise(); // wait till background error will be received

        testLoggerFn.mockReset(); // clear log

        await expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    MetadataTokenService.Messages.trace_getToken,
                ],
            ]);

        await metadataTokenService.dispose();
    });

    it('if getToken() is called until an initial response or an error is received, getToken() will wait for a response', async () => {
        let getResolve: (data: unknown) => void;

        // eslint-disable-next-line no-promise-executor-return
        (axios.get as Mock).mockImplementation(async () => new Promise((resolve) => {
            getResolve = resolve;
        }));

        const metadataTokenService = new MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });

        const getTokenPromise1 = metadataTokenService.getToken();

        const getTokenPromise2 = metadataTokenService.getToken();

        // @ts-ignore
        getResolve({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        await getTestInitPromise(); // wait till background error will be received

        expect(await getTokenPromise1)
            .toBe('123');

        expect(await getTokenPromise2)
            .toBe('123');

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'debug',
                    MetadataTokenService.Messages.debug_ctor,
                    MetadataTokenService.DEFAULT_URL,
                    true,
                    MetadataTokenService.DEFAULT_OPTIONS,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_getToken,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace__getToken,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_initialize,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_fetchToken,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_getToken,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_getToken,
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
                [
                    'trace',
                    MetadataTokenService.Messages.trace_setTimer,
                ],
            ]);
    });

    it('the token is regularly requested by timer, even if it not used - ok responses', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        const metadataTokenService = new MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });

        await getTestInitPromise(); // wait till background error will be received

        testLoggerFn.mockReset();

        const N = 5;

        for (let i = 0; i < N; i++) {
            // @ts-ignore
            // eslint-disable-next-line no-await-in-loop
            await fakeTimersFixture.advanceTimer((metadataTokenService as unknown).tokenRefreshAt - Date.now());
        }

        expect(testLoggerFn.mock.calls)
            .toEqual((() => {
                const res: unknown[] = [];

                for (let i = 0; i < N; i++) {
                    res.push(
                        [
                            'trace',
                            MetadataTokenService.Messages.trace__getToken,
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
                        [
                            'trace',
                            MetadataTokenService.Messages.trace_setTimer,
                        ],
                    );
                }

                return res;
            })());
    });

    it('the token is regularly requested by timer, even if it not used - error responses', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        const metadataTokenService = new MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });

        await getTestInitPromise(); // wait till background error will be received

        testLoggerFn.mockReset();

        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        const N = 5;

        for (let i = 0; i < N; i++) {
            // @ts-ignore
            // eslint-disable-next-line no-await-in-loop
            await fakeTimersFixture.advanceTimer((metadataTokenService as unknown).tokenRefreshAt - Date.now());
        }

        expect(testLoggerFn.mock.calls)
            .toEqual((() => {
                const res: unknown[] = [];

                for (let i = 0; i < N; i++) {
                    res.push(
                        [
                            'trace',
                            MetadataTokenService.Messages.trace__getToken,
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
                            MetadataTokenService.Messages.trace_setTimer,
                        ],
                    );
                }

                return res;
            })());
    });

    it('when getToken() is called, no fetchToken() called, even if it\'s about time', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        // intentionally disable timer
        // @ts-ignore
        jest.spyOn(MetadataTokenService.prototype, 'setTimer');
        // @ts-ignore
        ((MetadataTokenService.prototype as unknown).setTimer as Mock).mockReturnValue();

        const metadataTokenService = new MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });

        await getTestInitPromise(); // wait till background error will be received

        testLoggerFn.mockReset(); // clear log

        await expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));

        // @ts-ignore
        fakeTimersFixture.advanceTimer((metadataTokenService as unknown).tokenRefreshAt * 2);

        await expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    MetadataTokenService.Messages.trace_getToken,
                ],
                [
                    'trace',
                    MetadataTokenService.Messages.trace_getToken,
                ],
            ]);
    });

    it('dispose stops the timer and getToken() starts to throw an error', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        const metadataTokenService = new MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });

        await getTestInitPromise(); // wait till background error will be received

        expect(await metadataTokenService.getToken())
            .toBe('123');

        await expect(metadataTokenService.dispose())
            .resolves
            .toBeUndefined();

        await expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error(MetadataTokenService.Messages.err_service_is_disposed));

        await expect(metadataTokenService.dispose())
            .rejects
            .toThrow(new Error(MetadataTokenService.Messages.err_service_is_disposed));
    });

    it('dispose() while initialize() is not complete', async () => {
        let getResolve: (data: unknown) => void;

        // eslint-disable-next-line no-promise-executor-return
        (axios.get as Mock).mockImplementation(async () => new Promise((resolve) => {
            getResolve = resolve;
        }));

        const metadataTokenService = new MetadataTokenService({
            logger: testLogger,
            doUpdateTokenInBackground: true,
        });

        await metadataTokenService.dispose();

        // @ts-ignore
        getResolve({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        await getTestInitPromise();

        // @ts-ignore
        expect((metadataTokenService as unknown).timer)
            .toBeUndefined();
    });
});
