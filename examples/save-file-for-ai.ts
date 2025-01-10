import path from 'path';
import dotenv from 'dotenv';

import { Session } from '@yandex-cloud/nodejs-sdk/dist/session';

import { initFileSdk } from '@yandex-cloud/nodejs-sdk/dist/sdk/ai-files-v1';
import { ExpirationConfig_ExpirationPolicy } from '@yandex-cloud/nodejs-sdk/ai-files-v1/generated/yandex/cloud/ai/common/common';

import { readFile } from 'fs/promises';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const getEnv = (envName: string, defaultValue?: string): string => {
    const envValue = process.env[envName] || defaultValue;

    if (!envValue) {
        throw new Error(`Env variable ${envName} is not defined`);
    }

    return envValue;
};

const iamToken = getEnv('YC_IAM_TOKEN');
const folderId = getEnv('YC_FOLDER_ID');

(async function () {
    const session = new Session({ iamToken });
    const fileSdk = initFileSdk(session);

    const fileToSaveContent = await readFile('./SomeFileToSave.pdf', {
        encoding: 'binary',
    });

    const content = Buffer.from(fileToSaveContent, 'binary');

    const file = await fileSdk.create({
        folderId,
        expirationConfig: {
            ttlDays: 2,
            expirationPolicy: ExpirationConfig_ExpirationPolicy.STATIC,
        },
        mimeType: 'application/pdf',
        content,
    });

    console.log(file);

    const r = await fileSdk.getUrl({ fileId: file.id });
    console.log(r);
})();
