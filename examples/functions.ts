import { Session } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

import { functionService } from '@yandex-cloud/nodejs-sdk/serverless-functions-v1';

const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(functionService.FunctionServiceClient);

    const response = await client.list(
        functionService.ListFunctionsRequest.fromPartial({ folderId: FOLDER_ID }),
    );

    for (const func of response.functions) {
        log(`Function: ${func.name}, id: ${func.id}, invoke URL: ${func.httpInvokeUrl}`);
    }
})();
