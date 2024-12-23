import path from 'path';
import dotenv from 'dotenv';

import { Session } from '@yandex-cloud/nodejs-sdk/dist/session';

import { initOperationSdk } from '@yandex-cloud/nodejs-sdk/operation/sdk';

import { ImageGenerationSdk } from '@yandex-cloud/nodejs-sdk/ai-foundation_models-v1/sdk';
import { imageGeneration } from '@yandex-cloud/nodejs-sdk/ai-foundation_models-v1';
import { ImageGenerationResponse } from '@yandex-cloud/nodejs-sdk/ai-foundation_models-v1/generated/yandex/cloud/ai/foundation_models/v1/image_generation/image_generation_service';
import { writeFile } from 'fs';

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

    const operationSdk = initOperationSdk(session);

    const imageGenerationSdk = new ImageGenerationSdk(session);

    const generateImageOperation = await imageGenerationSdk.generateImage({
        folderId,
        modelId: 'yandex-art/free-tier',
        generationOptions: {
            mimeType: 'image/jpeg',
            seed: 1165508436334210,
        },
        messages: [imageGeneration.Message.fromPartial({ text: 'Кот', weight: 1 })],
    });

    const generateImageFinalOperation = await operationSdk.pollOperation(
        generateImageOperation,
        1_000,
        { operationCallback: () => console.log('In Process') },
    );

    if (generateImageFinalOperation.response) {
        console.log(ImageGenerationResponse.decode(generateImageFinalOperation.response.value));

        writeFile(
            './image.png',
            ImageGenerationResponse.decode(generateImageFinalOperation.response.value).image,
            { encoding: 'base64' },
            function (err) {
                console.log('File created');
            },
        );
    }
})();
