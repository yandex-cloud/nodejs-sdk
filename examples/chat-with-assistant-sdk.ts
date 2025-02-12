import path from 'path';
import dotenv from 'dotenv';

import { Session } from '@yandex-cloud/nodejs-sdk/dist/session';

import {
    initAssistantSdk,
    initThreadSdk,
    MessageSdk,
} from '@yandex-cloud/nodejs-sdk/sdk/ai-assistants-v1';

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

    const threadSdk = initThreadSdk(session);
    const assistantSdk = initAssistantSdk(session);

    const assistant = await assistantSdk.create({
        folderId,
        modelId: 'yandexgpt/latest',
    });

    const thread = await threadSdk.create({ name: 'Thread name', folderId }).withSdk();

    const asyncIterableForStreamEvent = await thread
        .sendMessage({
            content: MessageSdk.getMessageContent(
                'Hi, how are you today ?',
                'Explain me please what is it qwerty ?',
            ),
        })
        .getAssistantResponse(assistant);

    for await (const streamEvent of asyncIterableForStreamEvent) {
        console.log('\n---------------------\n');

        if (streamEvent.partialMessage) {
            console.log('Partial message:\n');
            console.log(MessageSdk.messageContentToString(streamEvent.partialMessage));
            continue;
        }

        if (streamEvent.completedMessage) {
            console.log('Completed message:\n');
            console.log(MessageSdk.messageContentToString(streamEvent.completedMessage.content));
        }
    }
})();
