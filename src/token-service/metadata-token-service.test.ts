import axios from 'axios';
import {MetadataTokenService} from './metadata-token-service';
import Mock = jest.Mock;
import {
    MAX_ATTEMPTS_NUMBER_TO_GET_TOKEN_IN_INITIALIZE,
    TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT,
    TOKEN_MINIMUM_LIFETIME_MARGIN_MS,
} from './metadata-token-service.consts';

describe('metadata-token-service', () => {
    const oldGet = axios.get;

    beforeEach(() => {
        axios.get = jest.fn();
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        jest.spyOn(global, 'setInterval');
    });

    afterEach(() => {
        axios.get = oldGet;
        jest.useRealTimers();
    });

    it('simple scenario', async () => {
        const metadataTokenService = new MetadataTokenService();

        // set token
        (axios.get as Mock).mockReturnValue({
            status: 200,
            data: {
                access_token: '123',
                expires_in: 10 * 60 * 60, // secs
            },
        });

        // first time
        const t1 = await metadataTokenService.getToken();

        expect(t1)
            .toBe('123');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(1);

        // second time - no extra token request
        const t2 = await metadataTokenService.getToken();

        expect(t2)
            .toBe('123');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(1);
    });

    for (const tokenLifetimeSec of [30 * 60 * 60, 60 * 60, 12 * 60 * 60]) {
        it(`provider work long time, token gets occasionally updated: period ${tokenLifetimeSec} mins`, async () => {
            const metadataTokenService = new MetadataTokenService();
            const nextTokenTimeSec = tokenLifetimeSec * (1 - TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100);

            let expectGetCalls = 0;

            for (const token of ['123', '456', '789']) {

                // set token
                (axios.get as Mock).mockReturnValue({
                    status: 200,
                    data: {
                        access_token: token,
                        expires_in: tokenLifetimeSec,
                    },
                });

                jest.advanceTimersByTime(10); // to overcome numbers rounding mistakes

                // 1st token call in the TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT period

                // eslint-disable-next-line no-await-in-loop
                let t = await metadataTokenService.getToken();

                expect(t)
                    .toBe(token);
                expect((axios.get as Mock).mock.calls)
                    .toHaveLength(++expectGetCalls);

                // 2nd token call in the same time

                // eslint-disable-next-line no-await-in-loop
                t = await metadataTokenService.getToken();

                expect(t)
                    .toBe(token);
                expect((axios.get as Mock).mock.calls)
                    .toHaveLength(expectGetCalls); // increase is not expected

                jest.advanceTimersByTime((nextTokenTimeSec / 2) * 1000); // still same token is good

                // 3rd token call in the TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT period with some time advance

                // eslint-disable-next-line no-await-in-loop
                t = await metadataTokenService.getToken();

                expect(t)
                    .toBe(token);
                expect((axios.get as Mock).mock.calls)
                    .toHaveLength(expectGetCalls); // increase is not expected

                jest.advanceTimersByTime((nextTokenTimeSec - (nextTokenTimeSec / 2)) * 1000); // still same token is good
            }

            // due to the specifics of serverless functions - setTimeout and setInterval should not be used
            expect(setTimeout)
                .toHaveBeenCalledTimes(0);
            expect(setInterval)
                .toHaveBeenCalledTimes(0);
        });
    }

    it('Iam always returns an error', async () => {
        const metadataTokenService = new MetadataTokenService();

        // return an error
        (axios.get as Mock).mockReturnValue({
            status: 400,
        });

        await expect(() => metadataTokenService.getToken())
            .rejects
            .toThrow();
    });

    it('Iam occasionally returns an error while .initialize()', async () => {
        const metadataTokenService = new MetadataTokenService();

        // return token on 4th attempt - tests initialize()
        const nextResp = (function* () {
            for (let i = 0; i < 3; i++) {
                yield {
                    status: 400,
                };
            }

            return {
                status: 200,
                data: {
                    access_token: '123',
                    expires_in: 10 * 60 * 60, // secs
                },
            };
        }());

        (axios.get as Mock).mockImplementation(() => nextResp.next().value);

        // first time - return token, even if it was returned only on 4th attempt
        let t = await metadataTokenService.getToken();

        expect(t)
            .toBe('123');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(4);

        // after 1 hour, return on an error use old token and make only one attempt to get token
        (axios.get as Mock).mockReturnValue({
            status: 400,
        });

        // after 1 hour,
        jest.advanceTimersByTime(60 * 60 * 1000);

        // Iam returns an error on 1st attempt, so we use the old token
        t = await metadataTokenService.getToken();
        expect(t)
            .toBe('123');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(5);

        // on next attempt we receive new token, and use this one
        (axios.get as Mock).mockReturnValue({
            status: 200,
            data: {
                access_token: '456',
                expires_in: 10 * 60 * 60, // secs
            },
        });

        t = await metadataTokenService.getToken();
        expect(t)
            .toBe('456');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(6);
    });

    it('use old token, if .getFetch() return an error', async () => {
        const metadataTokenService = new MetadataTokenService();
        const TOKEN_LIFETIME_MINS = 100;

        // set token
        (axios.get as Mock).mockReturnValue({
            status: 200,
            data: {
                access_token: '123',
                expires_in: TOKEN_LIFETIME_MINS * 60,
            },
        });

        let t = await metadataTokenService.getToken();

        jest.advanceTimersByTime(10); // to overcome numbers rounding mistakes

        expect(t)
            .toBe('123');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(1);

        // return an error
        (axios.get as Mock).mockReturnValue({
            status: 400,
        });

        jest.advanceTimersByTime(TOKEN_LIFETIME_MINS * 60 * 1000 * (1 - TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100));

        t = await metadataTokenService.getToken();

        expect(t)
            .toBe('123');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(2);
    });

    it('parallel fetch token', async () => {
        const metadataTokenService = new MetadataTokenService();

        let responseResolve: () => void;
        let responsePromise: Promise<void>;

        (axios.get as Mock).mockImplementation(async () => {
            responsePromise = new Promise((resolve) => {
                responseResolve = resolve;
            });

            await responsePromise;

            return {
                status: 200,
                data: {
                    access_token: '123',
                    expires_in: 10 * 60 * 60, // secs
                },
            };
        });

        const t1 = metadataTokenService.getToken();
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(1);

        const t2 = metadataTokenService.getToken();
        const t3 = metadataTokenService.getToken();

        // @ts-ignore
        responseResolve?.();

        // @ts-ignore
        await responsePromise;

        expect(await t1)
            .toBe('123');
        expect(await t2)
            .toBe('123');
        expect(await t3)
            .toBe('123');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(1);
    });

    it('if less then TOKEN_MINIMUM_LIFETIME_MARGIN_MS min left use .initialize() not .getToken()', async () => {
        const metadataTokenService = new MetadataTokenService();
        const TOKEN_LIFETIME_MINS = 100;

        // set token
        (axios.get as Mock).mockReturnValue({
            status: 200,
            data: {
                access_token: '123',
                expires_in: TOKEN_LIFETIME_MINS * 60,
            },
        });

        let t = await metadataTokenService.getToken();

        jest.advanceTimersByTime(10); // to overcome numbers rounding mistakes

        expect(t)
            .toBe('123');
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(1);

        // return an error
        (axios.get as Mock).mockReturnValue({
            status: 400,
        });

        jest.advanceTimersByTime(TOKEN_LIFETIME_MINS * 60 * 1000);

        await expect(() => metadataTokenService.getToken())
            .rejects
            .toThrow();
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(1 + MAX_ATTEMPTS_NUMBER_TO_GET_TOKEN_IN_INITIALIZE);
    });

    it('if always returned token with less then TOKEN_MINIMUM_LIFETIME_MARGIN_MS left', async () => {
        const metadataTokenService = new MetadataTokenService();

        // set token
        (axios.get as Mock).mockReturnValue({
            status: 200,
            data: {
                access_token: '123',
                expires_in: (TOKEN_MINIMUM_LIFETIME_MARGIN_MS / 2) / 1000,
            },
        });

        await expect(() => metadataTokenService.getToken())
            .rejects
            .toThrow();
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(MAX_ATTEMPTS_NUMBER_TO_GET_TOKEN_IN_INITIALIZE);

        await expect(() => metadataTokenService.getToken())
            .rejects
            .toThrow();
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(2 * MAX_ATTEMPTS_NUMBER_TO_GET_TOKEN_IN_INITIALIZE);

        await expect(() => metadataTokenService.getToken())
            .rejects
            .toThrow();
        expect((axios.get as Mock).mock.calls)
            .toHaveLength(3 * MAX_ATTEMPTS_NUMBER_TO_GET_TOKEN_IN_INITIALIZE);
    });
});
