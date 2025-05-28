import { Session } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';
import { cloudService } from '@yandex-cloud/nodejs-sdk/resourcemanager-v1';

const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(cloudService.CloudServiceClient);

    const response = await client.list(
        cloudService.ListCloudsRequest.fromPartial({ pageSize: 200 }),
    );

    for (const cloud of response.clouds) {
        log(`Found cloud id = ${cloud.id}, name = ${cloud.name}`);
    }
})();
