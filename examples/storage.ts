import { Session } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';
import { bucketService } from '@yandex-cloud/nodejs-sdk/storage-v1';

const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(bucketService.BucketServiceClient);

    const response = await client.list(
        bucketService.ListBucketsRequest.fromPartial({ folderId: FOLDER_ID }),
    );

    for (const bucket of response.buckets) {
        log(`Bucket: ${bucket.name}, id: ${bucket.id}`);
    }
})();
