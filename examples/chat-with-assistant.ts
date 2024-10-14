import { serviceClients, Session, cloudApi } from '@yandex-cloud/nodejs-sdk';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const getEnv = (envName: string, defaultValue?: string): string => {
    const envValue = process.env[envName] || defaultValue;

    console.log(process.env);

    if (!envValue) {
        throw new Error(`Env variable ${envName} is not defined`);
    }

    return envValue;
};

const iamToken = getEnv('YC_IAM_TOKEN');
const folderId = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ iamToken });

    const assistantApi = cloudApi.ai.assistants_assistant_service;
    const messageApi = cloudApi.ai.assistants_threads_message_service;
    const threadApi = cloudApi.ai.assistants_threads_thread_service;
    const runApi = cloudApi.ai.assistants_runs_run_service;

    // const assistantClient = session.client(assistantApi.AssistantServiceClient);
    const assistantClient = session.client(
        serviceClients.AssistantServiceClient,
    );

    // const messageClient = session.client(messageApi.MessageServiceClient);
    const messageClient = session.client(
        serviceClients.AssistantMessageServiceClient,
    );

    // const threadClient = session.client(threadApi.ThreadServiceClient);
    const threadClient = session.client(
        serviceClients.AssistantThreadServiceClient,
    );

    // const runClient = session.client(runApi.RunServiceClient);
    const runClient = session.client(serviceClients.AssistantRunServiceClient);

    const thread = await threadClient.create(
        threadApi.CreateThreadRequest.fromPartial({
            name: 'qwerty',
            folderId,
        }),
    );

    console.log({ thread });

    const assistant = await assistantClient.create(
        assistantApi.CreateAssistantRequest.fromPartial({
            name: 'qwerty',
            folderId,
            modelUri: `gpt://${folderId}/yandexgpt/latest`,
        }),
    );

    console.log({ assistant });

    const assistantId = assistant.id;
    const threadId = thread.id;

    const message = await messageClient.create(
        messageApi.CreateMessageRequest.fromPartial({
            threadId,
            content: {
                content: [{ text: { content: 'qwerty' } }],
            },
        }),
    );

    console.log({ message });

    const run = await runClient.create(
        runApi.CreateRunRequest.fromPartial({
            threadId,
            assistantId,
        }),
    );

    console.log({ run });

    const asyncIterableForStreamEvent = runClient.listen(
        runApi.ListenRunRequest.fromPartial({ runId: run.id }),
    );

    let lastStreamEvent: cloudApi.ai.assistants_runs_run_service.StreamEvent | null = null;

    for await (const streamEvent of asyncIterableForStreamEvent) {
        lastStreamEvent = streamEvent;
    }

    console.dir({ lastStreamEvent });
    console.dir(lastStreamEvent.completedMessage.content.content);
})();
