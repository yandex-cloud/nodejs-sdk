import path from 'path';
import dotenv from 'dotenv';

import { Session } from '@yandex-cloud/nodejs-sdk/dist/session';

import { initFileSdk } from '@yandex-cloud/nodejs-sdk/sdk/ai-files-v1';

import {
    initAssistantSdk,
    initSearchIndexSdk,
    initThreadSdk,
    MessageSdk,
} from '@yandex-cloud/nodejs-sdk/sdk/ai-assistants-v1';

import { initOperationSdk } from '@yandex-cloud/nodejs-sdk/sdk/operation';

import { readFile } from 'fs/promises';
import { ExpirationConfig_ExpirationPolicy } from '@yandex-cloud/nodejs-sdk/proto/ai/common/common';
import { Message } from '@yandex-cloud/nodejs-sdk/generated/yandex/cloud/ai/assistants/v1/threads/message';

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
    const filePath = 'examples/assistants/SomeFileToSave.pdf';

    const fileToSaveContent = await readFile(filePath, {
        encoding: 'binary',
    });

    const content = Buffer.from(fileToSaveContent, 'binary');

    const file = await fileSdk.create({
        folderId,
        expirationConfig,
        mimeType: 'application/pdf',
        content,
        name: 'SomeFileToSave from example',
        labels: { fileName: 'SomeFileToSave', filePath },
    });

    return file;
};

const createSearchIndex = async (fileId: string) => {
    const searchIndexSdk = initSearchIndexSdk(session);

    const createSearchIndexOperation = await searchIndexSdk.create({
        folderId,
        fileIds: [fileId],
        textSearchIndex: {
            chunkingStrategy: {
                staticStrategy: { chunkOverlapTokens: 300, maxChunkSizeTokens: 700 },
            },
        },
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
        name: 'Assistant from examples',
        instruction: `Ты — помощник по внутренней документации компании.
Отвечай вежливо.
Если информация не содержится в документах ниже, не придумывай ответ.
`,
        tools: [
            {
                searchIndex: {
                    searchIndexIds: [searchIndexId],
                    // https://yandex.cloud/ru/docs/foundation-models/concepts/assistant/rephraser
                    rephraserOptions: {
                        rephraserUri: `gpt://${folderId}/rephraser/latest`,
                    },
                },
            },
        ],
    });

    return assistant;
};

(async function () {
    const file = await createFile();
    console.log('File:\n');
    console.log(JSON.stringify(file, undefined, 4));
    console.log('\n');

    const searchIndex = await createSearchIndex(file.id);

    const assistant = await createAssistantWithSearchIndex(searchIndex.id);
    console.log('Assistant:\n');
    console.log(JSON.stringify(assistant, undefined, 4));
    console.log('\n');

    const threadSdk = initThreadSdk(session);
    const thread = await threadSdk.create({ folderId, name: 'Thread from example' }).withSdk();

    console.log('Thread:\n');
    console.log(JSON.stringify(await thread.data, undefined, 4));
    console.log('\n');

    const asyncIterableStreamEvent = await thread
        .sendMessage({
            content: MessageSdk.getMessageContent('О чем был текст файла ?'),
        })
        .getAssistantResponse(assistant);

    let completedMessage: Message | undefined;
    for await (const streamEvent of asyncIterableStreamEvent) {
        console.log('\n---------------------\n');

        if (streamEvent.partialMessage) {
            console.log('Partial message:\n');
            console.log(MessageSdk.messageContentToString(streamEvent.partialMessage));
            continue;
        }

        if (streamEvent.completedMessage) {
            completedMessage = streamEvent.completedMessage;
            console.log('Completed message:\n');
            console.log(MessageSdk.messageContentToString(streamEvent.completedMessage.content));
            console.log('\n');
        }
    }

    console.log('Completed Message:\n');
    console.log(JSON.stringify(completedMessage, undefined, 4));
    console.log('\n');
})();
