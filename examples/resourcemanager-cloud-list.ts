import { serviceClients, Session, cloudApi } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const { resourcemanager: { cloud_service: { ListCloudsRequest } } } = cloudApi;
const IAM_TOKEN = getEnv('YC_IAM_TOKEN');

(async () => {
    const session = new Session({ iamToken: IAM_TOKEN });
    const client = session.client(serviceClients.CloudServiceClient);

    const response = await client.list(ListCloudsRequest.fromPartial({ pageSize: 200 }));

    for (const cloud of response.clouds) {
        log(`Found cloud id = ${cloud.id}, name = ${cloud.name}`);
    }
})();
