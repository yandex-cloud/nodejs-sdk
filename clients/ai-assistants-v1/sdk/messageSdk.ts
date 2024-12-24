import { messageService } from '..';
import { MessageContent } from '../generated/yandex/cloud/ai/assistants/v1/threads/message';
import {
    CreateMessageRequest,
    GetMessageRequest,
    ListMessagesRequest,
    MessageServiceService,
} from '../generated/yandex/cloud/ai/assistants/v1/threads/message_service';
import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import { Client } from 'nice-grpc';

export type SendMessageProps = TypeFromProtoc<CreateMessageRequest, 'threadId'>;

export type GetMessageProps = TypeFromProtoc<GetMessageRequest, 'threadId' | 'messageId'>;

export type ListMessagesProps = TypeFromProtoc<ListMessagesRequest, 'threadId'>;

export class MessageSdk {
    private messageClient: Client<typeof MessageServiceService, ClientCallArgs>;

    constructor(session: SessionArg) {
        this.messageClient = session.client(messageService.MessageServiceClient);
    }

    static getMessageContent(...args: string[]): TypeFromProtoc<MessageContent> {
        return { content: args.map((content) => ({ text: { content } })) };
    }

    static messageContentToString(messageContent?: MessageContent): string {
        return (
            messageContent?.content.reduce((res, { text }) => {
                if (text?.content) {
                    res += text.content;
                }

                return res;
            }, '') ?? ''
        );
    }

    send(params: SendMessageProps, args?: ClientCallArgs) {
        const p = this.messageClient.create(
            messageService.CreateMessageRequest.fromPartial(params),
            args,
        );

        return p;
    }

    get(params: GetMessageProps, args?: ClientCallArgs) {
        const p = this.messageClient.get(
            messageService.GetMessageRequest.fromPartial(params),
            args,
        );

        return p;
    }

    list(params: ListMessagesProps, args?: ClientCallArgs) {
        const p = this.messageClient.list(
            messageService.ListMessagesRequest.fromPartial(params),
            args,
        );

        return p;
    }
}

export const initMessageSdk = (session: SessionArg) => {
    return new MessageSdk(session);
};
