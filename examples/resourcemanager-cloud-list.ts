import { serviceClients, Session, cloudApi } from 'yandex-cloud';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const { resourcemanager: { cloud_service: { ListCloudsRequest } } } = cloudApi;
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(serviceClients.CloudServiceClient);

    const response = await client.list(ListCloudsRequest.fromPartial({ pageSize: 200 }));

    for (const cloud of response.clouds) {
        log(`Found cloud id = ${cloud.id}, name = ${cloud.name}`);
    }
})();
