import { serviceClients, Session, cloudApi } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const { storage: { bucket_service: { ListBucketsRequest } } } = cloudApi;
const IAM_TOKEN = getEnv('YC_IAM_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ iamToken: IAM_TOKEN });
    const client = session.client(serviceClients.BucketServiceClient);

    const response = await client.list(ListBucketsRequest.fromPartial({ folderId: FOLDER_ID }));

    for (const bucket of response.buckets) {
        log(`Bucket: ${bucket.name}, id: ${bucket.id}`);
    }
})();
