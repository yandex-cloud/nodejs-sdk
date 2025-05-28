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
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Empty } from '../../../../google/protobuf/empty';
import { Int64Value } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.datasphere.v1';

export interface GetFolderBudgetRequest {
    /** ID of the folder to get a budget for. */
    folderId: string;
}

export interface GetFolderBudgetResponse {
    /** The number of units available in the folder. */
    unitBalance?: number;
    /** The number of units that can be spent per hour. */
    maxUnitsPerHour?: number;
    /** The number of units that can be spent on one execution. */
    maxUnitsPerExecution?: number;
}

export interface SetFolderBudgetRequest {
    /** ID of the folder to set a budget for. */
    folderId: string;
    /** Field mask that specifies which fields of the budget are going to be set. */
    setMask?: FieldMask;
    /** The number of units available in the folder. */
    unitBalance?: number;
    /** The number of units that can be spent per hour. */
    maxUnitsPerHour?: number;
    /** The number of units that can be spent on one execution. */
    maxUnitsPerExecution?: number;
}

const baseGetFolderBudgetRequest: object = { folderId: '' };

export const GetFolderBudgetRequest = {
    encode(message: GetFolderBudgetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFolderBudgetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFolderBudgetRequest } as GetFolderBudgetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFolderBudgetRequest {
        const message = { ...baseGetFolderBudgetRequest } as GetFolderBudgetRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: GetFolderBudgetRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFolderBudgetRequest>, I>>(
        object: I,
    ): GetFolderBudgetRequest {
        const message = { ...baseGetFolderBudgetRequest } as GetFolderBudgetRequest;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseGetFolderBudgetResponse: object = {};

export const GetFolderBudgetResponse = {
    encode(message: GetFolderBudgetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.unitBalance !== undefined) {
            Int64Value.encode({ value: message.unitBalance! }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxUnitsPerHour !== undefined) {
            Int64Value.encode(
                { value: message.maxUnitsPerHour! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.maxUnitsPerExecution !== undefined) {
            Int64Value.encode(
                { value: message.maxUnitsPerExecution! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFolderBudgetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFolderBudgetResponse } as GetFolderBudgetResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unitBalance = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxUnitsPerHour = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxUnitsPerExecution = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFolderBudgetResponse {
        const message = { ...baseGetFolderBudgetResponse } as GetFolderBudgetResponse;
        message.unitBalance =
            object.unitBalance !== undefined && object.unitBalance !== null
                ? Number(object.unitBalance)
                : undefined;
        message.maxUnitsPerHour =
            object.maxUnitsPerHour !== undefined && object.maxUnitsPerHour !== null
                ? Number(object.maxUnitsPerHour)
                : undefined;
        message.maxUnitsPerExecution =
            object.maxUnitsPerExecution !== undefined && object.maxUnitsPerExecution !== null
                ? Number(object.maxUnitsPerExecution)
                : undefined;
        return message;
    },

    toJSON(message: GetFolderBudgetResponse): unknown {
        const obj: any = {};
        message.unitBalance !== undefined && (obj.unitBalance = message.unitBalance);
        message.maxUnitsPerHour !== undefined && (obj.maxUnitsPerHour = message.maxUnitsPerHour);
        message.maxUnitsPerExecution !== undefined &&
            (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFolderBudgetResponse>, I>>(
        object: I,
    ): GetFolderBudgetResponse {
        const message = { ...baseGetFolderBudgetResponse } as GetFolderBudgetResponse;
        message.unitBalance = object.unitBalance ?? undefined;
        message.maxUnitsPerHour = object.maxUnitsPerHour ?? undefined;
        message.maxUnitsPerExecution = object.maxUnitsPerExecution ?? undefined;
        return message;
    },
};

const baseSetFolderBudgetRequest: object = { folderId: '' };

export const SetFolderBudgetRequest = {
    encode(message: SetFolderBudgetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.setMask !== undefined) {
            FieldMask.encode(message.setMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.unitBalance !== undefined) {
            Int64Value.encode({ value: message.unitBalance! }, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxUnitsPerHour !== undefined) {
            Int64Value.encode(
                { value: message.maxUnitsPerHour! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.maxUnitsPerExecution !== undefined) {
            Int64Value.encode(
                { value: message.maxUnitsPerExecution! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetFolderBudgetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetFolderBudgetRequest } as SetFolderBudgetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.setMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.unitBalance = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxUnitsPerHour = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.maxUnitsPerExecution = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetFolderBudgetRequest {
        const message = { ...baseSetFolderBudgetRequest } as SetFolderBudgetRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.setMask =
            object.setMask !== undefined && object.setMask !== null
                ? FieldMask.fromJSON(object.setMask)
                : undefined;
        message.unitBalance =
            object.unitBalance !== undefined && object.unitBalance !== null
                ? Number(object.unitBalance)
                : undefined;
        message.maxUnitsPerHour =
            object.maxUnitsPerHour !== undefined && object.maxUnitsPerHour !== null
                ? Number(object.maxUnitsPerHour)
                : undefined;
        message.maxUnitsPerExecution =
            object.maxUnitsPerExecution !== undefined && object.maxUnitsPerExecution !== null
                ? Number(object.maxUnitsPerExecution)
                : undefined;
        return message;
    },

    toJSON(message: SetFolderBudgetRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.setMask !== undefined &&
            (obj.setMask = message.setMask ? FieldMask.toJSON(message.setMask) : undefined);
        message.unitBalance !== undefined && (obj.unitBalance = message.unitBalance);
        message.maxUnitsPerHour !== undefined && (obj.maxUnitsPerHour = message.maxUnitsPerHour);
        message.maxUnitsPerExecution !== undefined &&
            (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetFolderBudgetRequest>, I>>(
        object: I,
    ): SetFolderBudgetRequest {
        const message = { ...baseSetFolderBudgetRequest } as SetFolderBudgetRequest;
        message.folderId = object.folderId ?? '';
        message.setMask =
            object.setMask !== undefined && object.setMask !== null
                ? FieldMask.fromPartial(object.setMask)
                : undefined;
        message.unitBalance = object.unitBalance ?? undefined;
        message.maxUnitsPerHour = object.maxUnitsPerHour ?? undefined;
        message.maxUnitsPerExecution = object.maxUnitsPerExecution ?? undefined;
        return message;
    },
};

/** A set of methods for managing Datasphere folder budgets. */
export const FolderBudgetServiceService = {
    /** Returns the specified folder budget. */
    get: {
        path: '/yandex.cloud.datasphere.v1.FolderBudgetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetFolderBudgetRequest) =>
            Buffer.from(GetFolderBudgetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetFolderBudgetRequest.decode(value),
        responseSerialize: (value: GetFolderBudgetResponse) =>
            Buffer.from(GetFolderBudgetResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetFolderBudgetResponse.decode(value),
    },
    /** Sets the unit balance and the limits of the specified folder budget. */
    set: {
        path: '/yandex.cloud.datasphere.v1.FolderBudgetService/Set',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetFolderBudgetRequest) =>
            Buffer.from(SetFolderBudgetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetFolderBudgetRequest.decode(value),
        responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Empty.decode(value),
    },
} as const;

export interface FolderBudgetServiceServer extends UntypedServiceImplementation {
    /** Returns the specified folder budget. */
    get: handleUnaryCall<GetFolderBudgetRequest, GetFolderBudgetResponse>;
    /** Sets the unit balance and the limits of the specified folder budget. */
    set: handleUnaryCall<SetFolderBudgetRequest, Empty>;
}

export interface FolderBudgetServiceClient extends Client {
    /** Returns the specified folder budget. */
    get(
        request: GetFolderBudgetRequest,
        callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetFolderBudgetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetFolderBudgetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void,
    ): ClientUnaryCall;
    /** Sets the unit balance and the limits of the specified folder budget. */
    set(
        request: SetFolderBudgetRequest,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    set(
        request: SetFolderBudgetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    set(
        request: SetFolderBudgetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
}

export const FolderBudgetServiceClient = makeGenericClientConstructor(
    FolderBudgetServiceService,
    'yandex.cloud.datasphere.v1.FolderBudgetService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): FolderBudgetServiceClient;
    service: typeof FolderBudgetServiceService;
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
