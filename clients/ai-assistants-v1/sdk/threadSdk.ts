import { Client } from 'nice-grpc';
import { threadService } from '..';
import { Thread } from '../generated/yandex/cloud/ai/assistants/v1/threads/thread';
import {
    CreateThreadRequest,
    DeleteThreadRequest,
    GetThreadRequest,
    ListThreadsRequest,
    ThreadServiceService,
    UpdateThreadRequest,
} from '../generated/yandex/cloud/ai/assistants/v1/threads/thread_service';
import {
    GetMessageProps,
    initMessageSdk,
    ListMessagesProps,
    MessageSdk,
    SendMessageProps,
} from './messageSdk';
import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import { Assistant } from '../generated/yandex/cloud/ai/assistants/v1/assistant';
import {
    Message,
    Message_MessageStatus,
} from '../generated/yandex/cloud/ai/assistants/v1/threads/message';
import { StreamEvent } from '../generated/yandex/cloud/ai/assistants/v1/runs/run_service';
import { isString } from 'lodash';
import { CreateRunProps, initRunSdk, RunSdk } from './runSdk';
import { AssistantWithSdk } from './assistantSdk';

export type CreateThreadProps = TypeFromProtoc<CreateThreadRequest, 'folderId' | 'name'>;

export type GetThreadProps = TypeFromProtoc<GetThreadRequest, 'threadId'>;

export type ListThreadProps = TypeFromProtoc<ListThreadsRequest, 'folderId'>;

export type DeleteThreadProps = TypeFromProtoc<DeleteThreadRequest, 'threadId'>;

export type UpdateThreadProps = TypeFromProtoc<UpdateThreadRequest, 'threadId'>;

export class ThreadWithSdk {
    private threadSdk: ThreadSdk;
    private runSdk: RunSdk;
    private messageSdk: MessageSdk;

    private thread: Thread;

    constructor(threadSdk: ThreadSdk, messageSdk: MessageSdk, runSdk: RunSdk, thread: Thread) {
        this.threadSdk = threadSdk;
        this.runSdk = runSdk;
        this.messageSdk = messageSdk;

        this.thread = thread;
    }

    private threadP: Promise<Thread> | null = null;

    get data(): Thread | Promise<Thread> {
        return this.threadP || this.thread;
    }

    public refreshData() {
        if (this.threadP === null) {
            this.threadP = this.threadSdk
                .get({ threadId: this.thread.id })
                .finally(() => (this.threadP = null));

            this.threadP.then(this.updateData.bind(this));
        }

        return this.threadP;
    }

    private updateData(thread: Thread) {
        this.thread = thread;
        return this;
    }

    private static async _getAssistantResponse(
        this: ThreadWithSdk,
        p: Promise<Message>,
        assistant: Pick<Assistant, 'id'> | string | AssistantWithSdk,
        params?: Omit<CreateRunProps, 'assistantId' | 'threadId'>,
    ): Promise<AsyncIterable<StreamEvent>> {
        const message = await p;

        if (Message_MessageStatus.FILTERED_CONTENT === message.status)
            throw 'Message generation was stopped because potentially sensitive content was detected either in the prompt or in the generated response';

        if (Message_MessageStatus.TRUNCATED === message.status)
            throw 'Message generation was truncated due to reaching the maximum allowed number of tokens';

        if (Message_MessageStatus.UNRECOGNIZED === message.status)
            throw 'Message was not recognized';

        if (Message_MessageStatus.MESSAGE_STATUS_UNSPECIFIED) throw 'Message status is unspecified';

        const assistantId = isString(assistant)
            ? assistant
            : 'id' in assistant
            ? assistant.id
            : assistant.data.id;

        const run = await this.runSdk.create({
            assistantId,
            threadId: this.thread.id,
            ...params,
        });

        return this.runSdk.listen({ runId: run.id });
    }
    sendMessage(props: Omit<SendMessageProps, 'threadId'>, args?: ClientCallArgs) {
        const p = this.messageSdk.send({ threadId: this.thread.id, ...props }, args);
        const getAssistantResponse = ThreadWithSdk._getAssistantResponse.bind(this, p);

        return Object.assign(p, { getAssistantResponse });
    }

    listMessages(props: Omit<ListMessagesProps, 'threadId'>, args?: ClientCallArgs) {
        return this.messageSdk.list({ threadId: this.thread.id, ...props }, args);
    }

    getMessage(props: Omit<GetMessageProps, 'threadId'>, args?: ClientCallArgs) {
        return this.messageSdk.get({ threadId: this.thread.id, ...props }, args);
    }

    delete(args?: ClientCallArgs) {
        return this.threadSdk.delete({ threadId: this.thread.id }, args);
    }

    update(props: Omit<UpdateThreadProps, 'threadId'>, args?: ClientCallArgs) {
        const p = this.threadSdk.update({ ...props, threadId: this.thread.id }, args);
        return p.then(this.updateData.bind(this));
    }
}

export class ThreadSdk {
    private session: SessionArg;
    private threadClient: Client<typeof ThreadServiceService, ClientCallArgs>;

    constructor(session: SessionArg) {
        this.session = session;
        this.threadClient = session.client(threadService.ThreadServiceClient);
    }

    private static _withSdk(this: ThreadSdk, threadP: Promise<Thread>) {
        async function withSdk(
            this: ThreadSdk,
            messageSdk = initMessageSdk(this.session),
            runSdk = initRunSdk(this.session),
        ) {
            const thread = await threadP;
            return new ThreadWithSdk(this, messageSdk, runSdk, thread);
        }

        return Object.assign(threadP, { withSdk: withSdk.bind(this) });
    }

    get(params: GetThreadProps, args?: ClientCallArgs) {
        const p = this.threadClient.get(threadService.GetThreadRequest.fromPartial(params), args);
        return ThreadSdk._withSdk.call(this, p);
    }

    list(params: ListThreadProps, args?: ClientCallArgs) {
        return this.threadClient.list(threadService.ListThreadsRequest.fromPartial(params), args);
    }

    delete(params: DeleteThreadProps, args?: ClientCallArgs) {
        return this.threadClient.delete(
            threadService.DeleteThreadRequest.fromPartial(params),
            args,
        );
    }

    update(params: UpdateThreadProps, args?: ClientCallArgs) {
        const p = this.threadClient.update(
            threadService.UpdateThreadRequest.fromPartial(params),
            args,
        );
        return ThreadSdk._withSdk.call(this, p);
    }

    create(params: CreateThreadProps, args?: ClientCallArgs) {
        const p = this.threadClient.create(
            threadService.CreateThreadRequest.fromPartial(params),
            args,
        );
        return ThreadSdk._withSdk.call(this, p);
    }
}

export const initThreadSdk = (session: SessionArg) => {
    return new ThreadSdk(session);
};
