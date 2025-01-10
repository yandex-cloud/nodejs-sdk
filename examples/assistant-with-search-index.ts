import path from 'path';
import dotenv from 'dotenv';

import { Session } from '@yandex-cloud/nodejs-sdk/dist/session';

import { initFileSdk } from '@yandex-cloud/nodejs-sdk/dist/sdk/ai-files-v1';
import { ExpirationConfig_ExpirationPolicy } from '@yandex-cloud/nodejs-sdk/ai-files-v1/generated/yandex/cloud/ai/common/common';

import {
    initAssistantSdk,
    initSearchIndexSdk,
    initThreadSdk,
    MessageSdk,
} from '@yandex-cloud/nodejs-sdk/dist/sdk/ai-assistants-v1';

import { initOperationSdk } from '@yandex-cloud/nodejs-sdk/dist/sdk/operation';

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

const expirationConfig = {
    ttlDays: 2,
    expirationPolicy: ExpirationConfig_ExpirationPolicy.STATIC,
};

const session = new Session({ iamToken });

const createFile = async () => {
    const fileSdk = initFileSdk(session);

    const fileToSaveContent = await readFile('./SomeFileToSave.pdf', {
        encoding: 'binary',
    });

    const content = Buffer.from(fileToSaveContent, 'binary');

    const file = await fileSdk.create({
        folderId,
        expirationConfig,
        mimeType: 'application/pdf',
        content,
    });

    return file;
};

const createSearchIndex = async (fileId: string) => {
    const searchIndexSdk = initSearchIndexSdk(session);

    const createSearchIndexOperation = await searchIndexSdk.create({
        folderId,
        fileIds: [fileId],
        expirationConfig,
    });

    const operationSdk = initOperationSdk(session);

    const searchIndex = await operationSdk.pollOperation(createSearchIndexOperation, 500);

    return searchIndex;
};

const createAssistantWithSearchIndex = async (searchIndexId: string) => {
    const assistantSdk = initAssistantSdk(session);
    const assistant = await assistantSdk.create({
        folderId,
        modelId: 'yandexgpt/latest',
        tools: [{ searchIndex: { searchIndexIds: [searchIndexId] } }],
    });

    return assistant;
};

(async function () {
    const file = await createFile();
    console.log(file);

    const searchIndex = await createSearchIndex(file.id);

    const assistant = await createAssistantWithSearchIndex(searchIndex.id);
    console.log(assistant);

    const threadSdk = initThreadSdk(session);
    const thread = await threadSdk.create({ folderId, name: '' }).withSdk();

    console.log(thread);

    const asyncIterableStreamEvent = await thread
        .sendMessage({
            content: MessageSdk.getMessageContent('О чем был текст файла ?'),
        })
        .getAssistantResponse(assistant);

    for await (const streamEvent of asyncIterableStreamEvent) {
        console.log('\n---------------------\n');

        if (streamEvent.partialMessage) {
            console.log('Partial message:\n');
            console.log(MessageSdk.messageContentToString(streamEvent.partialMessage));
            continue;
        }

        if (streamEvent.completedMessage) {
            console.log('Completed message:\n');
            console.log(MessageSdk.messageContentToString(streamEvent.completedMessage.content));
            console.log('\n');
        }
    }
})();
