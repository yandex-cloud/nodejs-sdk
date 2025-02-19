/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    handleServerStreamingCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ClientReadableStream,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import {
    Author,
    MessageContent,
    Message,
} from '../../../../../../yandex/cloud/ai/assistants/v1/threads/message';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.threads';

/** Request to create a new message in a specific thread. */
export interface CreateMessageRequest {
    /** ID of the thread to which the message will be added. */
    threadId: string;
    /**
     * Author of the message, containing details about the message's creator.
     * If not provided, the default author ID specified in the corresponding thread will be used.
     */
    author?: Author;
    /** Set of key-value pairs to label the message. */
    labels: { [key: string]: string };
    /** Content of the message. */
    content?: MessageContent;
}

export interface CreateMessageRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Request message for retrieving a message from a thread. */
export interface GetMessageRequest {
    /** ID of the thread that contains the message. */
    threadId: string;
    /** ID of the message to retrieve. */
    messageId: string;
}

/** Request message for listing messages in a specific thread. */
export interface ListMessagesRequest {
    /** ID of the thread whose messages will be listed. */
    threadId: string;
}

const baseCreateMessageRequest: object = { threadId: '' };

export const CreateMessageRequest = {
    encode(message: CreateMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.threadId !== '') {
            writer.uint32(10).string(message.threadId);
        }
        if (message.author !== undefined) {
            Author.encode(message.author, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateMessageRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.content !== undefined) {
            MessageContent.encode(message.content, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMessageRequest } as CreateMessageRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threadId = reader.string();
                    break;
                case 2:
                    message.author = Author.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = CreateMessageRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.content = MessageContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateMessageRequest {
        const message = { ...baseCreateMessageRequest } as CreateMessageRequest;
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        message.author =
            object.author !== undefined && object.author !== null
                ? Author.fromJSON(object.author)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.content =
            object.content !== undefined && object.content !== null
                ? MessageContent.fromJSON(object.content)
                : undefined;
        return message;
    },

    toJSON(message: CreateMessageRequest): unknown {
        const obj: any = {};
        message.threadId !== undefined && (obj.threadId = message.threadId);
        message.author !== undefined &&
            (obj.author = message.author ? Author.toJSON(message.author) : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.content !== undefined &&
            (obj.content = message.content ? MessageContent.toJSON(message.content) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateMessageRequest>, I>>(
        object: I,
    ): CreateMessageRequest {
        const message = { ...baseCreateMessageRequest } as CreateMessageRequest;
        message.threadId = object.threadId ?? '';
        message.author =
            object.author !== undefined && object.author !== null
                ? Author.fromPartial(object.author)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.content =
            object.content !== undefined && object.content !== null
                ? MessageContent.fromPartial(object.content)
                : undefined;
        return message;
    },
};

const baseCreateMessageRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateMessageRequest_LabelsEntry = {
    encode(
        message: CreateMessageRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateMessageRequest_LabelsEntry,
        } as CreateMessageRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateMessageRequest_LabelsEntry {
        const message = {
            ...baseCreateMessageRequest_LabelsEntry,
        } as CreateMessageRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateMessageRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateMessageRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateMessageRequest_LabelsEntry {
        const message = {
            ...baseCreateMessageRequest_LabelsEntry,
        } as CreateMessageRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseGetMessageRequest: object = { threadId: '', messageId: '' };

export const GetMessageRequest = {
    encode(message: GetMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.threadId !== '') {
            writer.uint32(10).string(message.threadId);
        }
        if (message.messageId !== '') {
            writer.uint32(18).string(message.messageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetMessageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetMessageRequest } as GetMessageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threadId = reader.string();
                    break;
                case 2:
                    message.messageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetMessageRequest {
        const message = { ...baseGetMessageRequest } as GetMessageRequest;
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        message.messageId =
            object.messageId !== undefined && object.messageId !== null
                ? String(object.messageId)
                : '';
        return message;
    },

    toJSON(message: GetMessageRequest): unknown {
        const obj: any = {};
        message.threadId !== undefined && (obj.threadId = message.threadId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetMessageRequest>, I>>(object: I): GetMessageRequest {
        const message = { ...baseGetMessageRequest } as GetMessageRequest;
        message.threadId = object.threadId ?? '';
        message.messageId = object.messageId ?? '';
        return message;
    },
};

const baseListMessagesRequest: object = { threadId: '' };

export const ListMessagesRequest = {
    encode(message: ListMessagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.threadId !== '') {
            writer.uint32(10).string(message.threadId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListMessagesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMessagesRequest } as ListMessagesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threadId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListMessagesRequest {
        const message = { ...baseListMessagesRequest } as ListMessagesRequest;
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        return message;
    },

    toJSON(message: ListMessagesRequest): unknown {
        const obj: any = {};
        message.threadId !== undefined && (obj.threadId = message.threadId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListMessagesRequest>, I>>(
        object: I,
    ): ListMessagesRequest {
        const message = { ...baseListMessagesRequest } as ListMessagesRequest;
        message.threadId = object.threadId ?? '';
        return message;
    },
};

/** MessageService provides operations for managing messages. */
export const MessageServiceService = {
    /** Create a new message. */
    create: {
        path: '/yandex.cloud.ai.assistants.v1.threads.MessageService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateMessageRequest) =>
            Buffer.from(CreateMessageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateMessageRequest.decode(value),
        responseSerialize: (value: Message) => Buffer.from(Message.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Message.decode(value),
    },
    /** Retrieve details of a specific message by its ID. */
    get: {
        path: '/yandex.cloud.ai.assistants.v1.threads.MessageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetMessageRequest) =>
            Buffer.from(GetMessageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetMessageRequest.decode(value),
        responseSerialize: (value: Message) => Buffer.from(Message.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Message.decode(value),
    },
    /**
     * List messages in a specific thread.
     * By default, messages are listed in reverse chronological order, i.e., from the newest to the oldest.
     */
    list: {
        path: '/yandex.cloud.ai.assistants.v1.threads.MessageService/List',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value: ListMessagesRequest) =>
            Buffer.from(ListMessagesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListMessagesRequest.decode(value),
        responseSerialize: (value: Message) => Buffer.from(Message.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Message.decode(value),
    },
} as const;

export interface MessageServiceServer extends UntypedServiceImplementation {
    /** Create a new message. */
    create: handleUnaryCall<CreateMessageRequest, Message>;
    /** Retrieve details of a specific message by its ID. */
    get: handleUnaryCall<GetMessageRequest, Message>;
    /**
     * List messages in a specific thread.
     * By default, messages are listed in reverse chronological order, i.e., from the newest to the oldest.
     */
    list: handleServerStreamingCall<ListMessagesRequest, Message>;
}

export interface MessageServiceClient extends Client {
    /** Create a new message. */
    create(
        request: CreateMessageRequest,
        callback: (error: ServiceError | null, response: Message) => void,
    ): ClientUnaryCall;
    create(
        request: CreateMessageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Message) => void,
    ): ClientUnaryCall;
    create(
        request: CreateMessageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Message) => void,
    ): ClientUnaryCall;
    /** Retrieve details of a specific message by its ID. */
    get(
        request: GetMessageRequest,
        callback: (error: ServiceError | null, response: Message) => void,
    ): ClientUnaryCall;
    get(
        request: GetMessageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Message) => void,
    ): ClientUnaryCall;
    get(
        request: GetMessageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Message) => void,
    ): ClientUnaryCall;
    /**
     * List messages in a specific thread.
     * By default, messages are listed in reverse chronological order, i.e., from the newest to the oldest.
     */
    list(
        request: ListMessagesRequest,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<Message>;
    list(
        request: ListMessagesRequest,
        metadata?: Metadata,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<Message>;
}

export const MessageServiceClient = makeGenericClientConstructor(
    MessageServiceService,
    'yandex.cloud.ai.assistants.v1.threads.MessageService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): MessageServiceClient;
    service: typeof MessageServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
