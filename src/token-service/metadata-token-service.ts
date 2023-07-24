import axios, {AxiosRequestConfig} from 'axios';

import {TokenService} from '../types';

import {
    TOKEN_MINIMUM_LIFETIME_MARGIN_MS,
    TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT,
    MAX_ATTEMPTS_NUMBER_TO_GET_TOKEN_IN_INITIALIZE
} from './metadata-token-service.consts';

type Options = AxiosRequestConfig;

const DEFAULT_URL = 'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';
const DEFAULT_OPTIONS: Options = {
    headers: {
        'Metadata-Flavor': 'Google',
    },
};

export class MetadataTokenService implements TokenService {
    private readonly url: string;
    private readonly opts: Options;
    private token?: string;
    private tokenExpiredAt = 0;
    private tokenTimeToRefresh = 0;
    private currentFetchToken?: Promise<string>;
    private currentInitialize?: Promise<void>;

    constructor(url: string = DEFAULT_URL, options: Options = DEFAULT_OPTIONS) {
        this.url = url;
        this.opts = options;
    }

    async getToken(): Promise<string> {

        if (!this.token || Date.now() >= this.tokenExpiredAt) {
            await this.initialize(); // cay throw error
        } else if (Date.now() >= this.tokenTimeToRefresh) {
            try {
                this.token = await this.fetchToken();
            } catch {
                // nothing - use old token
            }
        }

        return this.token as string;
    }

    private async fetchToken(): Promise<string> {

        // deduplicate real fetch token requests in any async case
        if (!this.currentFetchToken) {
            this.currentFetchToken = this._fetchToken().finally(() => {
                delete this.currentFetchToken;
            });
        }

        return this.currentFetchToken as Promise<string>;
    }

    private async _fetchToken(): Promise<string> {

        const res = await axios.get<{ token_type: 'Bearer', access_token: string, expires_in: number, data: {} }>(this.url, this.opts);

        if (res.status !== 200) {
            throw new Error(`failed to fetch token from metadata service: ${res.status} ${res.statusText}`);
        }

        const timeLeft = res.data.expires_in * 1000 - TOKEN_MINIMUM_LIFETIME_MARGIN_MS;

        if (timeLeft <= 0) {
            throw new Error('failed to fetch token: insufficient lifetime');
        }

        this.tokenExpiredAt = Date.now() + timeLeft;
        this.tokenTimeToRefresh = Date.now() + res.data.expires_in * 1000 * (1 - TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100);

        return res.data.access_token;
    }

    private async initialize() {

        // deduplicate initialize requests in any async case
        if (!this.currentInitialize) {
            this.currentInitialize = this._initialize().finally(() => {
                delete this.currentInitialize;
            });
        }

        return this.currentInitialize as Promise<void>;
    }

    private async _initialize() {
        let lastError = null;

        delete this.token;

        for (let i = 0; i < MAX_ATTEMPTS_NUMBER_TO_GET_TOKEN_IN_INITIALIZE; i++) {
            try {
                // eslint-disable-next-line no-await-in-loop
                this.token = await this.fetchToken();

                return;
            } catch (error) {
                lastError = error;
            }
        }
        throw new Error(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `failed to fetch token from metadata service: ${lastError}`,
        );
    }
}
