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
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.iam.v1.awscompatibility';

export interface CreateEphemeralAccessKeyRequest {
    /**
     * The subject identifier for whom the ephemeral access key will be created.
     * If not specified, it defaults to the subject that made the request.
     */
    subjectId: string;
    /**
     * Use the session name to uniquely identify a session when the same SA is impersonated by different principals or for different reasons
     * Pattern: [\w+=,.@-]*
     */
    sessionName: string;
    /** AWS-compatible policy in JSON format that you want to use as an inline session policy. */
    policy: string;
    /**
     * Duration, which specifies the duration of the ephemeral access key,
     * but duration won't be longer than the lifetime of the authentication token that made the request
     */
    duration?: Duration;
}

export interface CreateEphemeralAccessKeyResponse {
    /**
     * ID of the access key.
     * The key is AWS compatible.
     */
    accessKeyId: string;
    /**
     * Secret access key.
     * The key is AWS compatible.
     */
    secret: string;
    /**
     * Session token.
     * The token is AWS compatible. Should be attached to any call made by provided credentials.
     */
    sessionToken: string;
    /**
     * Expiration time.
     * The date on which the current credentials expire.
     */
    expiresAt?: Date;
}

const baseCreateEphemeralAccessKeyRequest: object = { subjectId: '', sessionName: '', policy: '' };

export const CreateEphemeralAccessKeyRequest: {
    encode(message: CreateEphemeralAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEphemeralAccessKeyRequest;
    fromJSON(object: any): CreateEphemeralAccessKeyRequest;
    toJSON(message: CreateEphemeralAccessKeyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateEphemeralAccessKeyRequest>, I>>(object: I): CreateEphemeralAccessKeyRequest;
} = {
    encode(
        message: CreateEphemeralAccessKeyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectId !== '') {
            writer.uint32(10).string(message.subjectId);
        }
        if (message.sessionName !== '') {
            writer.uint32(18).string(message.sessionName);
        }
        if (message.policy !== '') {
            writer.uint32(26).string(message.policy);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEphemeralAccessKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateEphemeralAccessKeyRequest,
        } as CreateEphemeralAccessKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectId = reader.string();
                    break;
                case 2:
                    message.sessionName = reader.string();
                    break;
                case 3:
                    message.policy = reader.string();
                    break;
                case 4:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateEphemeralAccessKeyRequest {
        const message = {
            ...baseCreateEphemeralAccessKeyRequest,
        } as CreateEphemeralAccessKeyRequest;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.sessionName =
            object.sessionName !== undefined && object.sessionName !== null
                ? String(object.sessionName)
                : '';
        message.policy =
            object.policy !== undefined && object.policy !== null ? String(object.policy) : '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromJSON(object.duration)
                : undefined;
        return message;
    },

    toJSON(message: CreateEphemeralAccessKeyRequest): unknown {
        const obj: any = {};
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.sessionName !== undefined && (obj.sessionName = message.sessionName);
        message.policy !== undefined && (obj.policy = message.policy);
        message.duration !== undefined &&
            (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateEphemeralAccessKeyRequest>, I>>(
        object: I,
    ): CreateEphemeralAccessKeyRequest {
        const message = {
            ...baseCreateEphemeralAccessKeyRequest,
        } as CreateEphemeralAccessKeyRequest;
        message.subjectId = object.subjectId ?? '';
        message.sessionName = object.sessionName ?? '';
        message.policy = object.policy ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
};

const baseCreateEphemeralAccessKeyResponse: object = {
    accessKeyId: '',
    secret: '',
    sessionToken: '',
};

export const CreateEphemeralAccessKeyResponse: {
    encode(message: CreateEphemeralAccessKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEphemeralAccessKeyResponse;
    fromJSON(object: any): CreateEphemeralAccessKeyResponse;
    toJSON(message: CreateEphemeralAccessKeyResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateEphemeralAccessKeyResponse>, I>>(object: I): CreateEphemeralAccessKeyResponse;
} = {
    encode(
        message: CreateEphemeralAccessKeyResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.secret !== '') {
            writer.uint32(18).string(message.secret);
        }
        if (message.sessionToken !== '') {
            writer.uint32(26).string(message.sessionToken);
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEphemeralAccessKeyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateEphemeralAccessKeyResponse,
        } as CreateEphemeralAccessKeyResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                case 2:
                    message.secret = reader.string();
                    break;
                case 3:
                    message.sessionToken = reader.string();
                    break;
                case 4:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateEphemeralAccessKeyResponse {
        const message = {
            ...baseCreateEphemeralAccessKeyResponse,
        } as CreateEphemeralAccessKeyResponse;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        message.secret =
            object.secret !== undefined && object.secret !== null ? String(object.secret) : '';
        message.sessionToken =
            object.sessionToken !== undefined && object.sessionToken !== null
                ? String(object.sessionToken)
                : '';
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        return message;
    },

    toJSON(message: CreateEphemeralAccessKeyResponse): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        message.secret !== undefined && (obj.secret = message.secret);
        message.sessionToken !== undefined && (obj.sessionToken = message.sessionToken);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateEphemeralAccessKeyResponse>, I>>(
        object: I,
    ): CreateEphemeralAccessKeyResponse {
        const message = {
            ...baseCreateEphemeralAccessKeyResponse,
        } as CreateEphemeralAccessKeyResponse;
        message.accessKeyId = object.accessKeyId ?? '';
        message.secret = object.secret ?? '';
        message.sessionToken = object.sessionToken ?? '';
        message.expiresAt = object.expiresAt ?? undefined;
        return message;
    },
};

/** A set of methods for managing temporary and ephemeral access keys. */
export const TemporaryAccessKeyServiceService = {
    /** Creates an ephemeral access key for the specified subject. */
    createEphemeral: {
        path: '/yandex.cloud.iam.v1.awscompatibility.TemporaryAccessKeyService/CreateEphemeral',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateEphemeralAccessKeyRequest) =>
            Buffer.from(CreateEphemeralAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateEphemeralAccessKeyRequest.decode(value),
        responseSerialize: (value: CreateEphemeralAccessKeyResponse) =>
            Buffer.from(CreateEphemeralAccessKeyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CreateEphemeralAccessKeyResponse.decode(value),
    },
} as const;

export interface TemporaryAccessKeyServiceServer extends UntypedServiceImplementation {
    /** Creates an ephemeral access key for the specified subject. */
    createEphemeral: handleUnaryCall<
        CreateEphemeralAccessKeyRequest,
        CreateEphemeralAccessKeyResponse
    >;
}

export interface TemporaryAccessKeyServiceClient extends Client {
    /** Creates an ephemeral access key for the specified subject. */
    createEphemeral(
        request: CreateEphemeralAccessKeyRequest,
        callback: (error: ServiceError | null, response: CreateEphemeralAccessKeyResponse) => void,
    ): ClientUnaryCall;
    createEphemeral(
        request: CreateEphemeralAccessKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CreateEphemeralAccessKeyResponse) => void,
    ): ClientUnaryCall;
    createEphemeral(
        request: CreateEphemeralAccessKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CreateEphemeralAccessKeyResponse) => void,
    ): ClientUnaryCall;
}

export const TemporaryAccessKeyServiceClient = makeGenericClientConstructor(
    TemporaryAccessKeyServiceService,
    'yandex.cloud.iam.v1.awscompatibility.TemporaryAccessKeyService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TemporaryAccessKeyServiceClient;
    service: typeof TemporaryAccessKeyServiceService;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
