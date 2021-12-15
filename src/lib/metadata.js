const fetch = require('node-fetch');

class TokenService {
    constructor() {
        this._url =
            'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';
        this._opts = { headers: { 'Metadata-Flavor': 'Google' } };
    }

    async initialize() {
        if (this._token) {
            return;
        }
        let lastError = null;
        for (let i = 0; i < 5; i++) {
            try {
                this._token = await this._fetchToken();
                break;
            } catch (e) {
                lastError = e;
            }
        }
        if (!this._token) {
            throw new Error(
                `failed to fetch token from metadata service: ${lastError}`
            );
        }
        setInterval(() => {
            this._fetchToken()
                .then((token) => {
                    this._token = token;
                })
                .catch((e) => {});
        }, 30000);
    }

    getToken() {
        return this._token;
    }

    async _fetchToken() {
        const res = await fetch(this._url, this._opts);
        if (!res.ok) {
            throw new Error(
                `failed to fetch token from metadata service: ${res.status} ${res.statusText}`
            );
        }
        const data = await res.json();
        return data.access_token;
    }
}

module.exports = { TokenService };
