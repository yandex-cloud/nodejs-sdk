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

export const protobufPackage = 'yandex.cloud.devtools.ycvc.v1';

/** Request to initialize and check version. */
export interface InitRequest {
    /** Tool name to check. */
    toolName: string;
    /** Version to check. */
    version: string;
}

/**
 * Response for initialization.
 * Blocked versions return FAILED_PRECONDITION error instead.
 */
export interface InitResponse {
    /** Warning information for versions being phased out. */
    deprecationWarning?: InitResponse_DeprecationWarning;
}

/** Warning details for versions being phased out. */
export interface InitResponse_DeprecationWarning {
    /** Reason why the version is being phased out. */
    reason: string;
}

const baseInitRequest: object = { toolName: '', version: '' };

export const InitRequest: {
    encode(message: InitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitRequest;
    fromJSON(object: any): InitRequest;
    toJSON(message: InitRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<InitRequest>, I>>(object: I): InitRequest;
} = {
    encode(message: InitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.toolName !== '') {
            writer.uint32(10).string(message.toolName);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InitRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInitRequest } as InitRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.toolName = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InitRequest {
        const message = { ...baseInitRequest } as InitRequest;
        message.toolName =
            object.toolName !== undefined && object.toolName !== null
                ? String(object.toolName)
                : '';
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        return message;
    },

    toJSON(message: InitRequest): unknown {
        const obj: any = {};
        message.toolName !== undefined && (obj.toolName = message.toolName);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<InitRequest>, I>>(object: I): InitRequest {
        const message = { ...baseInitRequest } as InitRequest;
        message.toolName = object.toolName ?? '';
        message.version = object.version ?? '';
        return message;
    },
};

const baseInitResponse: object = {};

export const InitResponse: {
    encode(message: InitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitResponse;
    fromJSON(object: any): InitResponse;
    toJSON(message: InitResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<InitResponse>, I>>(object: I): InitResponse;
} = {
    encode(message: InitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.deprecationWarning !== undefined) {
            InitResponse_DeprecationWarning.encode(
                message.deprecationWarning,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InitResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInitResponse } as InitResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deprecationWarning = InitResponse_DeprecationWarning.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InitResponse {
        const message = { ...baseInitResponse } as InitResponse;
        message.deprecationWarning =
            object.deprecationWarning !== undefined && object.deprecationWarning !== null
                ? InitResponse_DeprecationWarning.fromJSON(object.deprecationWarning)
                : undefined;
        return message;
    },

    toJSON(message: InitResponse): unknown {
        const obj: any = {};
        message.deprecationWarning !== undefined &&
            (obj.deprecationWarning = message.deprecationWarning
                ? InitResponse_DeprecationWarning.toJSON(message.deprecationWarning)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<InitResponse>, I>>(object: I): InitResponse {
        const message = { ...baseInitResponse } as InitResponse;
        message.deprecationWarning =
            object.deprecationWarning !== undefined && object.deprecationWarning !== null
                ? InitResponse_DeprecationWarning.fromPartial(object.deprecationWarning)
                : undefined;
        return message;
    },
};

const baseInitResponse_DeprecationWarning: object = { reason: '' };

export const InitResponse_DeprecationWarning: {
    encode(message: InitResponse_DeprecationWarning, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitResponse_DeprecationWarning;
    fromJSON(object: any): InitResponse_DeprecationWarning;
    toJSON(message: InitResponse_DeprecationWarning): unknown;
    fromPartial<I extends Exact<DeepPartial<InitResponse_DeprecationWarning>, I>>(object: I): InitResponse_DeprecationWarning;
} = {
    encode(
        message: InitResponse_DeprecationWarning,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.reason !== '') {
            writer.uint32(10).string(message.reason);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InitResponse_DeprecationWarning {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInitResponse_DeprecationWarning,
        } as InitResponse_DeprecationWarning;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InitResponse_DeprecationWarning {
        const message = {
            ...baseInitResponse_DeprecationWarning,
        } as InitResponse_DeprecationWarning;
        message.reason =
            object.reason !== undefined && object.reason !== null ? String(object.reason) : '';
        return message;
    },

    toJSON(message: InitResponse_DeprecationWarning): unknown {
        const obj: any = {};
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<InitResponse_DeprecationWarning>, I>>(
        object: I,
    ): InitResponse_DeprecationWarning {
        const message = {
            ...baseInitResponse_DeprecationWarning,
        } as InitResponse_DeprecationWarning;
        message.reason = object.reason ?? '';
        return message;
    },
};

/**
 * Version Control Service for managing tool version blacklists.
 * This service manages obsolete (deprecated/blocked) versions only.
 * API Behavior:
 * - Supported versions: Return successful InitResponse.
 * - Deprecated versions: Return successful InitResponse with deprecation_warning.
 * - Blocked versions: Return FAILED_PRECONDITION error with descriptive message.
 */
export const VersionControlServiceService = {
    /**
     * Initializes client and checks if the provided version is obsolete.
     * Returns FAILED_PRECONDITION error for blocked versions.
     */
    init: {
        path: '/yandex.cloud.devtools.ycvc.v1.VersionControlService/Init',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: InitRequest) => Buffer.from(InitRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => InitRequest.decode(value),
        responseSerialize: (value: InitResponse) =>
            Buffer.from(InitResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => InitResponse.decode(value),
    },
} as const;

export interface VersionControlServiceServer extends UntypedServiceImplementation {
    /**
     * Initializes client and checks if the provided version is obsolete.
     * Returns FAILED_PRECONDITION error for blocked versions.
     */
    init: handleUnaryCall<InitRequest, InitResponse>;
}

export interface VersionControlServiceClient extends Client {
    /**
     * Initializes client and checks if the provided version is obsolete.
     * Returns FAILED_PRECONDITION error for blocked versions.
     */
    init(
        request: InitRequest,
        callback: (error: ServiceError | null, response: InitResponse) => void,
    ): ClientUnaryCall;
    init(
        request: InitRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: InitResponse) => void,
    ): ClientUnaryCall;
    init(
        request: InitRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: InitResponse) => void,
    ): ClientUnaryCall;
}

export const VersionControlServiceClient = makeGenericClientConstructor(
    VersionControlServiceService,
    'yandex.cloud.devtools.ycvc.v1.VersionControlService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): VersionControlServiceClient;
    service: typeof VersionControlServiceService;
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
