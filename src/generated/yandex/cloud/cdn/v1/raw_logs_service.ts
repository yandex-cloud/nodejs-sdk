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
import {
    RawLogsSettings,
    RawLogsStatus,
    rawLogsStatusFromJSON,
    rawLogsStatusToJSON,
} from '../../../../yandex/cloud/cdn/v1/raw_logs';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.cdn.v1';

export interface ActivateRawLogsRequest {
    /** ID of CDN resource to switch logs storage for.. */
    resourceId: string;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}

export interface ActivateRawLogsMetadata {
    /** ID of resource with activated raw logs. */
    resourceId: string;
}

export interface ActivateRawLogsResponse {
    /** Raw logs status. */
    status: RawLogsStatus;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}

export interface DeactivateRawLogsRequest {
    /** ID of CDN resource to deactivate Raw Logs for. */
    resourceId: string;
}

export interface DeactivateRawLogsMetadata {
    /** ID of CDN resource. */
    resourceId: string;
}

export interface GetRawLogsRequest {
    /** ID of CDN resource to request status and settings. */
    resourceId: string;
}

export interface GetRawLogsResponse {
    /** Raw logs status. */
    status: RawLogsStatus;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}

export interface UpdateRawLogsRequest {
    /** ID of CDN resource. */
    resourceId: string;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}

export interface UpdateRawLogsResponse {
    /** Raw logs status. */
    status: RawLogsStatus;
    /** Raw logs settings. */
    settings?: RawLogsSettings;
}

export interface UpdateRawLogsMetadata {
    /** ID of CDN resource. */
    resourceId: string;
}

const baseActivateRawLogsRequest: object = { resourceId: '' };

export const ActivateRawLogsRequest = {
    encode(message: ActivateRawLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.settings !== undefined) {
            RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateRawLogsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateRawLogsRequest } as ActivateRawLogsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.settings = RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateRawLogsRequest {
        const message = { ...baseActivateRawLogsRequest } as ActivateRawLogsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },

    toJSON(message: ActivateRawLogsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateRawLogsRequest>, I>>(
        object: I,
    ): ActivateRawLogsRequest {
        const message = { ...baseActivateRawLogsRequest } as ActivateRawLogsRequest;
        message.resourceId = object.resourceId ?? '';
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};

const baseActivateRawLogsMetadata: object = { resourceId: '' };

export const ActivateRawLogsMetadata = {
    encode(message: ActivateRawLogsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateRawLogsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateRawLogsMetadata } as ActivateRawLogsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateRawLogsMetadata {
        const message = { ...baseActivateRawLogsMetadata } as ActivateRawLogsMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: ActivateRawLogsMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateRawLogsMetadata>, I>>(
        object: I,
    ): ActivateRawLogsMetadata {
        const message = { ...baseActivateRawLogsMetadata } as ActivateRawLogsMetadata;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseActivateRawLogsResponse: object = { status: 0 };

export const ActivateRawLogsResponse = {
    encode(message: ActivateRawLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.settings !== undefined) {
            RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateRawLogsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateRawLogsResponse } as ActivateRawLogsResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                case 2:
                    message.settings = RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateRawLogsResponse {
        const message = { ...baseActivateRawLogsResponse } as ActivateRawLogsResponse;
        message.status =
            object.status !== undefined && object.status !== null
                ? rawLogsStatusFromJSON(object.status)
                : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },

    toJSON(message: ActivateRawLogsResponse): unknown {
        const obj: any = {};
        message.status !== undefined && (obj.status = rawLogsStatusToJSON(message.status));
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateRawLogsResponse>, I>>(
        object: I,
    ): ActivateRawLogsResponse {
        const message = { ...baseActivateRawLogsResponse } as ActivateRawLogsResponse;
        message.status = object.status ?? 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};

const baseDeactivateRawLogsRequest: object = { resourceId: '' };

export const DeactivateRawLogsRequest = {
    encode(
        message: DeactivateRawLogsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateRawLogsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeactivateRawLogsRequest } as DeactivateRawLogsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeactivateRawLogsRequest {
        const message = { ...baseDeactivateRawLogsRequest } as DeactivateRawLogsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: DeactivateRawLogsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeactivateRawLogsRequest>, I>>(
        object: I,
    ): DeactivateRawLogsRequest {
        const message = { ...baseDeactivateRawLogsRequest } as DeactivateRawLogsRequest;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseDeactivateRawLogsMetadata: object = { resourceId: '' };

export const DeactivateRawLogsMetadata = {
    encode(
        message: DeactivateRawLogsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateRawLogsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeactivateRawLogsMetadata } as DeactivateRawLogsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeactivateRawLogsMetadata {
        const message = { ...baseDeactivateRawLogsMetadata } as DeactivateRawLogsMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: DeactivateRawLogsMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeactivateRawLogsMetadata>, I>>(
        object: I,
    ): DeactivateRawLogsMetadata {
        const message = { ...baseDeactivateRawLogsMetadata } as DeactivateRawLogsMetadata;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseGetRawLogsRequest: object = { resourceId: '' };

export const GetRawLogsRequest = {
    encode(message: GetRawLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRawLogsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRawLogsRequest } as GetRawLogsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRawLogsRequest {
        const message = { ...baseGetRawLogsRequest } as GetRawLogsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: GetRawLogsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRawLogsRequest>, I>>(object: I): GetRawLogsRequest {
        const message = { ...baseGetRawLogsRequest } as GetRawLogsRequest;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseGetRawLogsResponse: object = { status: 0 };

export const GetRawLogsResponse = {
    encode(message: GetRawLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.settings !== undefined) {
            RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRawLogsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRawLogsResponse } as GetRawLogsResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                case 2:
                    message.settings = RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRawLogsResponse {
        const message = { ...baseGetRawLogsResponse } as GetRawLogsResponse;
        message.status =
            object.status !== undefined && object.status !== null
                ? rawLogsStatusFromJSON(object.status)
                : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },

    toJSON(message: GetRawLogsResponse): unknown {
        const obj: any = {};
        message.status !== undefined && (obj.status = rawLogsStatusToJSON(message.status));
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRawLogsResponse>, I>>(
        object: I,
    ): GetRawLogsResponse {
        const message = { ...baseGetRawLogsResponse } as GetRawLogsResponse;
        message.status = object.status ?? 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};

const baseUpdateRawLogsRequest: object = { resourceId: '' };

export const UpdateRawLogsRequest = {
    encode(message: UpdateRawLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.settings !== undefined) {
            RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRawLogsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRawLogsRequest } as UpdateRawLogsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.settings = RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRawLogsRequest {
        const message = { ...baseUpdateRawLogsRequest } as UpdateRawLogsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },

    toJSON(message: UpdateRawLogsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRawLogsRequest>, I>>(
        object: I,
    ): UpdateRawLogsRequest {
        const message = { ...baseUpdateRawLogsRequest } as UpdateRawLogsRequest;
        message.resourceId = object.resourceId ?? '';
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};

const baseUpdateRawLogsResponse: object = { status: 0 };

export const UpdateRawLogsResponse = {
    encode(message: UpdateRawLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.settings !== undefined) {
            RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRawLogsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRawLogsResponse } as UpdateRawLogsResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                case 2:
                    message.settings = RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRawLogsResponse {
        const message = { ...baseUpdateRawLogsResponse } as UpdateRawLogsResponse;
        message.status =
            object.status !== undefined && object.status !== null
                ? rawLogsStatusFromJSON(object.status)
                : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },

    toJSON(message: UpdateRawLogsResponse): unknown {
        const obj: any = {};
        message.status !== undefined && (obj.status = rawLogsStatusToJSON(message.status));
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRawLogsResponse>, I>>(
        object: I,
    ): UpdateRawLogsResponse {
        const message = { ...baseUpdateRawLogsResponse } as UpdateRawLogsResponse;
        message.status = object.status ?? 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};

const baseUpdateRawLogsMetadata: object = { resourceId: '' };

export const UpdateRawLogsMetadata = {
    encode(message: UpdateRawLogsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRawLogsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRawLogsMetadata } as UpdateRawLogsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRawLogsMetadata {
        const message = { ...baseUpdateRawLogsMetadata } as UpdateRawLogsMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: UpdateRawLogsMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRawLogsMetadata>, I>>(
        object: I,
    ): UpdateRawLogsMetadata {
        const message = { ...baseUpdateRawLogsMetadata } as UpdateRawLogsMetadata;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

export const RawLogsServiceService = {
    activate: {
        path: '/yandex.cloud.cdn.v1.RawLogsService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ActivateRawLogsRequest) =>
            Buffer.from(ActivateRawLogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ActivateRawLogsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    deactivate: {
        path: '/yandex.cloud.cdn.v1.RawLogsService/Deactivate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeactivateRawLogsRequest) =>
            Buffer.from(DeactivateRawLogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeactivateRawLogsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    get: {
        path: '/yandex.cloud.cdn.v1.RawLogsService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRawLogsRequest) =>
            Buffer.from(GetRawLogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRawLogsRequest.decode(value),
        responseSerialize: (value: GetRawLogsResponse) =>
            Buffer.from(GetRawLogsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetRawLogsResponse.decode(value),
    },
    update: {
        path: '/yandex.cloud.cdn.v1.RawLogsService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRawLogsRequest) =>
            Buffer.from(UpdateRawLogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateRawLogsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface RawLogsServiceServer extends UntypedServiceImplementation {
    activate: handleUnaryCall<ActivateRawLogsRequest, Operation>;
    deactivate: handleUnaryCall<DeactivateRawLogsRequest, Operation>;
    get: handleUnaryCall<GetRawLogsRequest, GetRawLogsResponse>;
    update: handleUnaryCall<UpdateRawLogsRequest, Operation>;
}

export interface RawLogsServiceClient extends Client {
    activate(
        request: ActivateRawLogsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateRawLogsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateRawLogsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateRawLogsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateRawLogsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateRawLogsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    get(
        request: GetRawLogsRequest,
        callback: (error: ServiceError | null, response: GetRawLogsResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetRawLogsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetRawLogsResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetRawLogsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetRawLogsResponse) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRawLogsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRawLogsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRawLogsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const RawLogsServiceClient = makeGenericClientConstructor(
    RawLogsServiceService,
    'yandex.cloud.cdn.v1.RawLogsService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RawLogsServiceClient;
    service: typeof RawLogsServiceService;
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
