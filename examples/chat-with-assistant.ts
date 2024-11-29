import path from 'path';
import dotenv from 'dotenv';

import {
    assistantService,
    messageService,
    threadService,
    runService,
} from '@yandex-cloud/nodejs-sdk/ai-assistants-v1';

import { Session } from '@yandex-cloud/nodejs-sdk/dist/session';

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

const Sleep = (ms?: number) => new Promise<void>((res) => setTimeout(() => res(), ms));

(async function () {
    const session = new Session({ iamToken });

    const assistantClient = session.client(assistantService.AssistantServiceClient);
    const messageClient = session.client(messageService.MessageServiceClient);
    const threadClient = session.client(threadService.ThreadServiceClient);
    const runClient = session.client(runService.RunServiceClient);

    const thread = await threadClient.create(
        threadService.CreateThreadRequest.fromPartial({
            name: 'qwerty',
            folderId,
        }),
    );
    console.log({ thread });

    const assistant = await assistantClient.create(
        assistantService.CreateAssistantRequest.fromPartial({
            name: 'qwerty',
            folderId,
            modelUri: `gpt://${folderId}/yandexgpt/latest`,
        }),
    );
    console.log({ assistant });

    const assistantId = assistant.id;
    const threadId = thread.id;

    const message = await messageClient.create(
        messageService.CreateMessageRequest.fromPartial({
            threadId,
            content: {
                content: [{ text: { content: 'qwerty' } }],
            },
        }),
    );

    console.log({ message });

    const run = await runClient.create(
        runService.CreateRunRequest.fromPartial({
            threadId,
            assistantId,
        }),
    );

    console.log({ run });

    const asyncIterableForStreamEvent = runClient.listen(
        runService.ListenRunRequest.fromPartial({ runId: run.id }),
    );

    let lastStreamEvent: runService.StreamEvent | null = null;
    for await (const streamEvent of asyncIterableForStreamEvent) {
        lastStreamEvent = streamEvent;
    }

    console.dir({ lastStreamEvent });

    if (lastStreamEvent?.completedMessage?.content) {
        console.dir(lastStreamEvent.completedMessage.content.content);
    }
})();
