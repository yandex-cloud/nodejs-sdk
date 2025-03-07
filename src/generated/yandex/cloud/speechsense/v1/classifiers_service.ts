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
import { Classifier } from '../../../../yandex/cloud/speechsense/v1/classifier';

export const protobufPackage = 'yandex.cloud.speechsense.v1';

export interface ListClassifiersRequest {
    /** Project id */
    projectId: string;
}

export interface ListClassifiersResponse {
    /** Classifiers belonging to the given project */
    classifiers: Classifier[];
}

const baseListClassifiersRequest: object = { projectId: '' };

export const ListClassifiersRequest = {
    encode(message: ListClassifiersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClassifiersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClassifiersRequest } as ListClassifiersRequest;
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

    fromJSON(object: any): ListClassifiersRequest {
        const message = { ...baseListClassifiersRequest } as ListClassifiersRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        return message;
    },

    toJSON(message: ListClassifiersRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClassifiersRequest>, I>>(
        object: I,
    ): ListClassifiersRequest {
        const message = { ...baseListClassifiersRequest } as ListClassifiersRequest;
        message.projectId = object.projectId ?? '';
        return message;
    },
};

const baseListClassifiersResponse: object = {};

export const ListClassifiersResponse = {
    encode(message: ListClassifiersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.classifiers) {
            Classifier.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClassifiersResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClassifiersResponse } as ListClassifiersResponse;
        message.classifiers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classifiers.push(Classifier.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListClassifiersResponse {
        const message = { ...baseListClassifiersResponse } as ListClassifiersResponse;
        message.classifiers = (object.classifiers ?? []).map((e: any) => Classifier.fromJSON(e));
        return message;
    },

    toJSON(message: ListClassifiersResponse): unknown {
        const obj: any = {};
        if (message.classifiers) {
            obj.classifiers = message.classifiers.map((e) =>
                e ? Classifier.toJSON(e) : undefined,
            );
        } else {
            obj.classifiers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClassifiersResponse>, I>>(
        object: I,
    ): ListClassifiersResponse {
        const message = { ...baseListClassifiersResponse } as ListClassifiersResponse;
        message.classifiers = object.classifiers?.map((e) => Classifier.fromPartial(e)) || [];
        return message;
    },
};

export const ClassifiersServiceService = {
    /** Rpc for listing classifiers in a project */
    list: {
        path: '/yandex.cloud.speechsense.v1.ClassifiersService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClassifiersRequest) =>
            Buffer.from(ListClassifiersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClassifiersRequest.decode(value),
        responseSerialize: (value: ListClassifiersResponse) =>
            Buffer.from(ListClassifiersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClassifiersResponse.decode(value),
    },
} as const;

export interface ClassifiersServiceServer extends UntypedServiceImplementation {
    /** Rpc for listing classifiers in a project */
    list: handleUnaryCall<ListClassifiersRequest, ListClassifiersResponse>;
}

export interface ClassifiersServiceClient extends Client {
    /** Rpc for listing classifiers in a project */
    list(
        request: ListClassifiersRequest,
        callback: (error: ServiceError | null, response: ListClassifiersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListClassifiersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClassifiersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListClassifiersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClassifiersResponse) => void,
    ): ClientUnaryCall;
}

export const ClassifiersServiceClient = makeGenericClientConstructor(
    ClassifiersServiceService,
    'yandex.cloud.speechsense.v1.ClassifiersService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ClassifiersServiceClient;
    service: typeof ClassifiersServiceService;
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
