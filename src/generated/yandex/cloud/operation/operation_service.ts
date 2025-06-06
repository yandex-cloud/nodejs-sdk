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
import { Operation } from '../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.operation';

export interface GetOperationRequest {
    /** ID of the Operation resource to return. */
    operationId: string;
}

export interface CancelOperationRequest {
    /** ID of the operation to cancel. */
    operationId: string;
}

const baseGetOperationRequest: object = { operationId: '' };

export const GetOperationRequest = {
    encode(message: GetOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.operationId !== '') {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOperationRequest } as GetOperationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOperationRequest {
        const message = { ...baseGetOperationRequest } as GetOperationRequest;
        message.operationId =
            object.operationId !== undefined && object.operationId !== null
                ? String(object.operationId)
                : '';
        return message;
    },

    toJSON(message: GetOperationRequest): unknown {
        const obj: any = {};
        message.operationId !== undefined && (obj.operationId = message.operationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetOperationRequest>, I>>(
        object: I,
    ): GetOperationRequest {
        const message = { ...baseGetOperationRequest } as GetOperationRequest;
        message.operationId = object.operationId ?? '';
        return message;
    },
};

const baseCancelOperationRequest: object = { operationId: '' };

export const CancelOperationRequest = {
    encode(message: CancelOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.operationId !== '') {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOperationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCancelOperationRequest } as CancelOperationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelOperationRequest {
        const message = { ...baseCancelOperationRequest } as CancelOperationRequest;
        message.operationId =
            object.operationId !== undefined && object.operationId !== null
                ? String(object.operationId)
                : '';
        return message;
    },

    toJSON(message: CancelOperationRequest): unknown {
        const obj: any = {};
        message.operationId !== undefined && (obj.operationId = message.operationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CancelOperationRequest>, I>>(
        object: I,
    ): CancelOperationRequest {
        const message = { ...baseCancelOperationRequest } as CancelOperationRequest;
        message.operationId = object.operationId ?? '';
        return message;
    },
};

/** A set of methods for managing operations for asynchronous API requests. */
export const OperationServiceService = {
    /** Returns the specified Operation resource. */
    get: {
        path: '/yandex.cloud.operation.OperationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOperationRequest) =>
            Buffer.from(GetOperationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetOperationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Cancels the specified operation.
     *
     * Note that currently Object Storage API does not support cancelling operations.
     */
    cancel: {
        path: '/yandex.cloud.operation.OperationService/Cancel',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CancelOperationRequest) =>
            Buffer.from(CancelOperationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CancelOperationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface OperationServiceServer extends UntypedServiceImplementation {
    /** Returns the specified Operation resource. */
    get: handleUnaryCall<GetOperationRequest, Operation>;
    /**
     * Cancels the specified operation.
     *
     * Note that currently Object Storage API does not support cancelling operations.
     */
    cancel: handleUnaryCall<CancelOperationRequest, Operation>;
}

export interface OperationServiceClient extends Client {
    /** Returns the specified Operation resource. */
    get(
        request: GetOperationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    get(
        request: GetOperationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    get(
        request: GetOperationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Cancels the specified operation.
     *
     * Note that currently Object Storage API does not support cancelling operations.
     */
    cancel(
        request: CancelOperationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelOperationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelOperationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const OperationServiceClient = makeGenericClientConstructor(
    OperationServiceService,
    'yandex.cloud.operation.OperationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): OperationServiceClient;
    service: typeof OperationServiceService;
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
