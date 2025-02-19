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
import { Empty } from '../../../../../google/protobuf/empty';

export const protobufPackage = 'yandex.cloud.serverless.eventrouter.v1';

export interface PutEventRequest {
    /** ID of the bus to put event. */
    busId: string;
    /** Event body. */
    body: string;
}

const basePutEventRequest: object = { busId: '', body: '' };

export const PutEventRequest = {
    encode(message: PutEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        if (message.body !== '') {
            writer.uint32(18).string(message.body);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PutEventRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePutEventRequest } as PutEventRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                case 2:
                    message.body = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PutEventRequest {
        const message = { ...basePutEventRequest } as PutEventRequest;
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        message.body = object.body !== undefined && object.body !== null ? String(object.body) : '';
        return message;
    },

    toJSON(message: PutEventRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        message.body !== undefined && (obj.body = message.body);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PutEventRequest>, I>>(object: I): PutEventRequest {
        const message = { ...basePutEventRequest } as PutEventRequest;
        message.busId = object.busId ?? '';
        message.body = object.body ?? '';
        return message;
    },
};

/** Service for put events to bus for serverless eventrouter. */
export const EventServiceService = {
    /** Puts event to bus. */
    put: {
        path: '/yandex.cloud.serverless.eventrouter.v1.EventService/Put',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PutEventRequest) =>
            Buffer.from(PutEventRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PutEventRequest.decode(value),
        responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Empty.decode(value),
    },
} as const;

export interface EventServiceServer extends UntypedServiceImplementation {
    /** Puts event to bus. */
    put: handleUnaryCall<PutEventRequest, Empty>;
}

export interface EventServiceClient extends Client {
    /** Puts event to bus. */
    put(
        request: PutEventRequest,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    put(
        request: PutEventRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    put(
        request: PutEventRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
}

export const EventServiceClient = makeGenericClientConstructor(
    EventServiceService,
    'yandex.cloud.serverless.eventrouter.v1.EventService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): EventServiceClient;
    service: typeof EventServiceService;
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
