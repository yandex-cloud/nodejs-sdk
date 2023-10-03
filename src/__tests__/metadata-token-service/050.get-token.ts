import axios from 'axios';
import { FakeTimersFixture } from '../../utils/tests/fake-timers-fixture';
import { MetadataTokenService, setTestInitializeTimerAdvance } from '../../token-service/metadata-token-service';
import Mock = jest.Mock;
import { buildTestLogger } from '../../utils/test-logger';
import { HRInterval } from '../../utils/hr-interval';
import {
    INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN,
    Messages,
} from '../../token-service/metadata-token-service.consts';

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

    let metadataTokenService: MetadataTokenService;

    beforeEach(() => {
        fakeTimersFixture.setup();
        jest.spyOn(axios, 'get');
        jest.spyOn(Math, 'random');
        (Math.random as Mock).mockReturnValue(1);
        metadataTokenService = new MetadataTokenService({ logger: testLogger });
        testLoggerFn.mockReset(); // clear constructor log
    });

    afterEach(async () => {
        testLoggerFn.mockReset();
        jest.restoreAllMocks();
        await fakeTimersFixture.dispose();
    });

    it('initial state, successfully fetching token', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        expect(await metadataTokenService.getToken())
            .toBe('123');

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    Messages.trace_getToken,
                ],
                [
                    'trace',
                    Messages.trace__getToken,
                ],
                [
                    'trace',
                    Messages.trace_initialize,
                ],
                [
                    'trace',
                    Messages.trace_fetchToken,
                ],
                [
                    'trace',
                    Messages.trace_setIamResponse,
                ],
                [
                    'debug',
                    Messages.debug_new_token_was_received,
                    new HRInterval(TTL * 1000),
                    '',
                ],
            ]);
    });

    it('initial state, error when fetching token', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        await expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));

        expect(testLoggerFn.mock.calls)
            .toEqual((() => {
                const res = [
                    [
                        'trace',
                        Messages.trace_getToken,
                    ],
                    [
                        'trace',
                        Messages.trace__getToken,
                    ],
                    [
                        'trace',
                        Messages.trace_initialize,
                    ],
                ];

                for (let i = 0; i < INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN; i++) {
                    res.push(
                        [
                            'trace',
                            Messages.trace_fetchToken,
                        ],
                        [
                            'error',
                            'failed to fetch token: 400 error',
                        ],
                    );
                }

                return res;
            })());
    });

    it('there is a token, but at the next fetchToken() an error is received', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        expect(await metadataTokenService.getToken())
            .toBe('123');

        testLoggerFn.mockReset(); // log starts from here

        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        // @ts-ignore
        await fakeTimersFixture.advanceTimer((metadataTokenService as unknown).tokenRefreshAt - Date.now());

        expect(await metadataTokenService.getToken())
            .toBe('123');

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    Messages.trace_getToken,
                ],
                [
                    'trace',
                    Messages.trace__getToken,
                ],
                [
                    'trace',
                    Messages.trace_fetchToken,
                ],
                [
                    'error',
                    'failed to fetch token: 400 error',
                ]]);
    });

    it('token expired, successfully fetch new token', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        expect(await metadataTokenService.getToken())
            .toBe('123');

        testLoggerFn.mockReset(); // log starts from here

        // @ts-ignore
        await fakeTimersFixture.advanceTimer((metadataTokenService as unknown).tokenExpiresAt - Date.now());

        expect(await metadataTokenService.getToken())
            .toBe('123');

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    Messages.trace_getToken,
                ],
                [
                    'trace',
                    Messages.trace__getToken,
                ],
                [
                    'trace',
                    Messages.trace_initialize,
                ],
                [
                    'trace',
                    Messages.trace_fetchToken,
                ],
                [
                    'trace',
                    Messages.trace_setIamResponse,
                ],
                [
                    'debug',
                    Messages.debug_new_token_was_received,
                    new HRInterval(TTL * 1000),
                    '',
                ]]);
    });

    it('token expired, error when fetching new token', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 200,
            statusText: 'ok',
            data: {
                token_type: 'Bearer',
                access_token: '123',
                expires_in: TTL,
            },
        });

        expect(await metadataTokenService.getToken())
            .toBe('123');

        testLoggerFn.mockReset(); // log starts from here

        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        // @ts-ignore
        await fakeTimersFixture.advanceTimer((metadataTokenService as unknown).tokenExpiresAt - Date.now());

        await expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));

        expect(testLoggerFn.mock.calls)
            .toEqual((() => {
                const res = [
                    [
                        'trace',
                        Messages.trace_getToken,
                    ],
                    [
                        'trace',
                        Messages.trace__getToken,
                    ],
                    [
                        'trace',
                        Messages.trace_initialize,
                    ],
                ];

                for (let i = 0; i < INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN; i++) {
                    res.push(
                        [
                            'trace',
                            Messages.trace_fetchToken,
                        ],
                        [
                            'error',
                            'failed to fetch token: 400 error',
                        ],
                    );
                }

                return res;
            })());
    });

    it('one _getToken() in a time', async () => {
        let getResolve: (data: unknown) => void;

        // eslint-disable-next-line no-promise-executor-return
        (axios.get as Mock).mockImplementation(async () => new Promise((resolve) => {
            getResolve = resolve;
        }));

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

        expect(await getTokenPromise1)
            .toBe('123');

        expect(await getTokenPromise2)
            .toBe('123');

        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    Messages.trace_getToken,
                ],
                [
                    'trace',
                    Messages.trace__getToken,
                ],
                [
                    'trace',
                    Messages.trace_initialize,
                ],
                [
                    'trace',
                    Messages.trace_fetchToken,
                ],
                [
                    'trace',
                    Messages.trace_getToken,
                ],
                [
                    'trace',
                    Messages.trace_setIamResponse,
                ],
                [
                    'debug',
                    Messages.debug_new_token_was_received,
                    new HRInterval(TTL * 1000),
                    '',
                ]]);
    });

    it('fetchToken() is not invoked again till tokenRefreshAt, even if there was an error', async () => {
        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        await expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));

        // @ts-ignore
        await fakeTimersFixture.advanceTimer((metadataTokenService as unknown).tokenRefreshAt - 20 - Date.now());

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
        await expect(metadataTokenService.getToken())
            .rejects
            .toThrow(new Error('failed to fetch token: 400 error'));

        await fakeTimersFixture.advanceTimer(20); // it's time to update

        // @ts-ignore
        expect(await metadataTokenService.getToken()).toBe('123');
    });

    it('in a while starts to report token TTL left', async () => {
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
        expect(await metadataTokenService.getToken())
            .toBe('123');

        testLoggerFn.mockReset();

        (axios.get as Mock).mockReturnValue({
            status: 400,
            statusText: 'error',
        });

        // @ts-ignore
        await fakeTimersFixture.advanceTimer((metadataTokenService as unknown).tokenStartReportTTLAt - Date.now());

        // @ts-ignore
        expect(await metadataTokenService.getToken())
            .toBe('123');

        // @ts-ignore
        expect(testLoggerFn.mock.calls)
            .toEqual([
                [
                    'trace',
                    Messages.trace_getToken,
                ],
                [
                    'trace',
                    Messages.trace__getToken,
                ],
                [
                    'trace',
                    Messages.trace_fetchToken,
                ],
                [
                    'error',
                    'failed to fetch token: 400 error',
                ],
                [
                    'warn',
                    Messages.warn_emaining_token_TTL,
                    // @ts-ignore
                    new HRInterval((metadataTokenService as unknown).tokenExpiresAt - Date.now()),
                ],
            ]);
    });
});
