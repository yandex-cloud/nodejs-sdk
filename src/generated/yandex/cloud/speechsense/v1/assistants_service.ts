/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { Assistant, Model } from './assistant';

export const protobufPackage = 'yandex.cloud.speechsense.v1';

export interface ListAssistantsRequest {
    /** Project id */
    projectId: string;
}

export interface ListAssistantsResponse {
    /** Assistants belonging to the given project */
    assistants: Assistant[];
}

/** No parameters */
export interface ListModelsRequest {}

export interface ListModelsResponse {
    models: Model[];
}

const baseListAssistantsRequest: object = { projectId: '' };

export const ListAssistantsRequest: {
    encode(message: ListAssistantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssistantsRequest;
    fromJSON(object: any): ListAssistantsRequest;
    toJSON(message: ListAssistantsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAssistantsRequest>, I>>(object: I): ListAssistantsRequest;
} = {
    encode(message: ListAssistantsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssistantsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAssistantsRequest } as ListAssistantsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAssistantsRequest {
        const message = { ...baseListAssistantsRequest } as ListAssistantsRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: ListAssistantsRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAssistantsRequest>, I>>(
        object: I,
    ): ListAssistantsRequest {
        const message = { ...baseListAssistantsRequest } as ListAssistantsRequest;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseListAssistantsResponse: object = {};

export const ListAssistantsResponse: {
    encode(message: ListAssistantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssistantsResponse;
    fromJSON(object: any): ListAssistantsResponse;
    toJSON(message: ListAssistantsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAssistantsResponse>, I>>(object: I): ListAssistantsResponse;
} = {
    encode(message: ListAssistantsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.assistants) {
            Assistant.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssistantsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAssistantsResponse } as ListAssistantsResponse;
        message.assistants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistants.push(Assistant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAssistantsResponse {
        const message = { ...baseListAssistantsResponse } as ListAssistantsResponse;
        message.assistants = (object.assistants ?? []).map((e: any) => Assistant.fromJSON(e));
        return message;
    },

    toJSON(message: ListAssistantsResponse): unknown {
        const obj: any = {};
        if (message.assistants) {
            obj.assistants = message.assistants.map((e) => (e ? Assistant.toJSON(e) : undefined));
        } else {
            obj.assistants = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAssistantsResponse>, I>>(
        object: I,
    ): ListAssistantsResponse {
        const message = { ...baseListAssistantsResponse } as ListAssistantsResponse;
        message.assistants = object.assistants?.map((e) => Assistant.fromPartial(e)) || [];
        return message;
    },
};

const baseListModelsRequest: object = {};

export const ListModelsRequest: {
    encode(message: ListModelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListModelsRequest;
    fromJSON(object: any): ListModelsRequest;
    toJSON(message: ListModelsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListModelsRequest>, I>>(object: I): ListModelsRequest;
} = {
    encode(_: ListModelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListModelsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListModelsRequest } as ListModelsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): ListModelsRequest {
        const message = { ...baseListModelsRequest } as ListModelsRequest;
        return message;
    },

    toJSON(_: ListModelsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListModelsRequest>, I>>(_: I): ListModelsRequest {
        const message = { ...baseListModelsRequest } as ListModelsRequest;
        return message;
    },
};

const baseListModelsResponse: object = {};

export const ListModelsResponse: {
    encode(message: ListModelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListModelsResponse;
    fromJSON(object: any): ListModelsResponse;
    toJSON(message: ListModelsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListModelsResponse>, I>>(object: I): ListModelsResponse;
} = {
    encode(message: ListModelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.models) {
            Model.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListModelsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListModelsResponse } as ListModelsResponse;
        message.models = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.models.push(Model.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListModelsResponse {
        const message = { ...baseListModelsResponse } as ListModelsResponse;
        message.models = (object.models ?? []).map((e: any) => Model.fromJSON(e));
        return message;
    },

    toJSON(message: ListModelsResponse): unknown {
        const obj: any = {};
        if (message.models) {
            obj.models = message.models.map((e) => (e ? Model.toJSON(e) : undefined));
        } else {
            obj.models = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListModelsResponse>, I>>(
        object: I,
    ): ListModelsResponse {
        const message = { ...baseListModelsResponse } as ListModelsResponse;
        message.models = object.models?.map((e) => Model.fromPartial(e)) || [];
        return message;
    },
};

export const AssistantsServiceService = {
    /** Rpc for listing assistants in a project */
    list: {
        path: '/yandex.cloud.speechsense.v1.AssistantsService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAssistantsRequest) =>
            Buffer.from(ListAssistantsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAssistantsRequest.decode(value),
        responseSerialize: (value: ListAssistantsResponse) =>
            Buffer.from(ListAssistantsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAssistantsResponse.decode(value),
    },
    /** Rpc for listing available assistant models */
    listModels: {
        path: '/yandex.cloud.speechsense.v1.AssistantsService/ListModels',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListModelsRequest) =>
            Buffer.from(ListModelsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListModelsRequest.decode(value),
        responseSerialize: (value: ListModelsResponse) =>
            Buffer.from(ListModelsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListModelsResponse.decode(value),
    },
} as const;

export interface AssistantsServiceServer extends UntypedServiceImplementation {
    /** Rpc for listing assistants in a project */
    list: handleUnaryCall<ListAssistantsRequest, ListAssistantsResponse>;
    /** Rpc for listing available assistant models */
    listModels: handleUnaryCall<ListModelsRequest, ListModelsResponse>;
}

export interface AssistantsServiceClient extends Client {
    /** Rpc for listing assistants in a project */
    list(
        request: ListAssistantsRequest,
        callback: (error: ServiceError | null, response: ListAssistantsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAssistantsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAssistantsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAssistantsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAssistantsResponse) => void,
    ): ClientUnaryCall;
    /** Rpc for listing available assistant models */
    listModels(
        request: ListModelsRequest,
        callback: (error: ServiceError | null, response: ListModelsResponse) => void,
    ): ClientUnaryCall;
    listModels(
        request: ListModelsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListModelsResponse) => void,
    ): ClientUnaryCall;
    listModels(
        request: ListModelsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListModelsResponse) => void,
    ): ClientUnaryCall;
}

export const AssistantsServiceClient = makeGenericClientConstructor(
    AssistantsServiceService,
    'yandex.cloud.speechsense.v1.AssistantsService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AssistantsServiceClient;
    service: typeof AssistantsServiceService;
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
