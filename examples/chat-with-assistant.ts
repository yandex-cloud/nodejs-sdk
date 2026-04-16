import path from 'path';
import dotenv from 'dotenv';

import {
    assistantService,
    messageService,
    threadService,
    runService,
} from '@yandex-cloud/nodejs-sdk/ai-assistants-v1';
import { ExpirationConfig_ExpirationPolicy } from '@yandex-cloud/nodejs-sdk/proto/ai/common/common';

import { Session } from '@yandex-cloud/nodejs-sdk/dist/session';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const getEnv = (envName: string, defaultValue?: string): string => {
    const envValue = process.env[envName] || defaultValue;

    if (!envValue) {
        throw new Error(`Env variable ${envName} is not defined`);
    }

    return envValue;
};

const expirationConfig = {
    ttlDays: 2,
    expirationPolicy: ExpirationConfig_ExpirationPolicy.STATIC,
};

const iamToken = getEnv('YC_IAM_TOKEN');
const folderId = getEnv('YC_FOLDER_ID');

(async function () {
    const session = new Session({ iamToken });

    const assistantClient = session.client(assistantService.AssistantServiceClient);
    const messageClient = session.client(messageService.MessageServiceClient);
    const threadClient = session.client(threadService.ThreadServiceClient);
    const runClient = session.client(runService.RunServiceClient);

    const threadP = threadClient.create(
        threadService.CreateThreadRequest.fromPartial({
            name: 'Thread Name',
            folderId,
            expirationConfig,
        }),
    );

    const assistantP = assistantClient.create(
        assistantService.CreateAssistantRequest.fromPartial({
            name: 'Assistant Name',
            folderId,
            modelUri: `gpt://${folderId}/yandexgpt/latest`,
            expirationConfig,
        }),
    );

    const [thread, assistant] = await Promise.all([threadP, assistantP]);

    const assistantId = assistant.id;
    const threadId = thread.id;

    await messageClient.create({
        labels: {},
        threadId,
        content: {
            content: [{ text: { content: 'What is it "qwerty"?' } }],
        },
    });

    const run = await runClient.create(
        runService.CreateRunRequest.fromPartial({
            threadId,
            assistantId,
        }),
    );

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
