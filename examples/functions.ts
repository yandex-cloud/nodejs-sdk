import { serviceClients, Session, cloudApi } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const { serverless: { functions_function_service: { ListFunctionsRequest } } } = cloudApi;
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = await session.client(serviceClients.FunctionServiceClient);

    const response = await client.list(ListFunctionsRequest.fromPartial({ folderId: FOLDER_ID }));

    for (const func of response.functions) {
        log(`Function: ${func.name}, id: ${func.id}, invoke URL: ${func.httpInvokeUrl}`);
    }
})();
