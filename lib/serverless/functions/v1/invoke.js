const fetch = require('node-fetch');
const yc = require('../../../../index');

function invokeUrl(id) {
    return `https://functions.yandexcloud.net/${id}?integration=raw`;
}

async function mapException(response) {
    const data = await response.text();
    try {
        const err = JSON.parse(data);
        if (err['errorType'] && err['errorMessage']) {
            return new Error(`${err['errorType']}: ${err['errorMessage']}`);
        }
    } catch (e) {
        // do nothing
    }
    return new Error(
        `function invocation failed with ${response.status}: ${data}`
    );
}

class InvokeServiceImpl {
    constructor(address, credentials, options, tokenCreator) {
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }

    async invoke(functionId, payload) {
        const token = await this._tokenCreator();
        const opts = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        if (payload) {
            opts.body = JSON.stringify(payload);
        }

        const res = await fetch(invokeUrl(functionId), opts);
        if (!res.ok || (res.headers && res.headers['x-function-error'])) {
            throw await mapException(res);
        }

        const data = (await res.buffer()).toString();
        try {
            return JSON.parse(data);
        } catch (_) {
            return data;
        }
    }

    wrap(functionId) {
        return async (payload) => {
            return await this.invoke(functionId, payload);
        };
    }
}

InvokeServiceImpl.__endpointId = 'serverless-functions';

function InvokeService(session) {
    if (session === undefined) {
        session = new yc.Session();
    }

    return session.client(InvokeServiceImpl);
}

module.exports = {
    InvokeService,
};
