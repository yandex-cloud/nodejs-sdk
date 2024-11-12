import axios, { AxiosRequestConfig } from 'axios';

import { TokenService } from '../types';

type Options = AxiosRequestConfig;

const DEFAULT_URL =
    'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';
const DEFAULT_OPTIONS: Options = {
    headers: {
        'Metadata-Flavor': 'Google',
    },
};

export class MetadataTokenService implements TokenService {
    private readonly url: string;
    private readonly opts: Options;
    private token?: string;

    constructor(url: string = DEFAULT_URL, options: Options = DEFAULT_OPTIONS) {
        this.url = url;
        this.opts = options;
    }

    async getToken(): Promise<string> {
        if (!this.token) {
            await this.initialize();

            if (!this.token) {
                throw new Error('Token is empty after MetadataTokenService.initialize');
            }

            return this.token;
        }

        return this.token;
    }

    private async fetchToken(): Promise<string> {
        const res = await axios.get<{ access_token: string }>(this.url, this.opts);

        if (res.status !== 200) {
            throw new Error(
                `failed to fetch token from metadata service: ${res.status} ${res.statusText}`,
            );
        }

        return res.data.access_token;
    }

    private async initialize() {
        if (this.token) {
            return;
        }

        let lastError = null;

        for (let i = 0; i < 5; i++) {
            try {
                this.token = await this.fetchToken();
                break;
            } catch (error) {
                lastError = error;
            }
        }
        if (!this.token) {
            throw new Error(`failed to fetch token from metadata service: ${lastError}`);
        }
        setTimeout(async () => {
            try {
                this.token = await this.fetchToken();
            } catch {
                // TBD
            }
        }, 30_000);
    }
}
