import fetch, { RequestInit } from 'node-fetch';

import { TokenService } from '../types';

type Options = RequestInit;

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
        const res = await fetch(this.url, this.opts);

        if (!res.ok) {
            throw new Error(`failed to fetch token from metadata service: ${res.status} ${res.statusText}`);
        }
        const data = (await res.json()) as { access_token: string };

        return data.access_token;
    }

    private async initialize() {
        if (this.token) {
            return;
        }

        let lastError = null;

        for (let i = 0; i < 5; i++) {
            try {
                // eslint-disable-next-line no-await-in-loop
                this.token = await this.fetchToken();
                break;
            } catch (error) {
                lastError = error;
            }
        }
        if (!this.token) {
            throw new Error(
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                `failed to fetch token from metadata service: ${lastError}`,
            );
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
