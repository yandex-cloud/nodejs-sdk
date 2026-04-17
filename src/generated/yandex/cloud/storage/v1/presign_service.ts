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

export const protobufPackage = 'yandex.cloud.storage.v1';

/** PresignObjectRequest represents a single object presign request */
export interface PresignObjectRequest {
    /** Expiration time in seconds */
    expires: number;
    /** Object name/key */
    name: string;
    /** HTTP method (GET, PUT, HEAD) */
    method: string;
    /** Additional HTTP headers */
    headers: { [key: string]: string };
    /** Object version ID (optional) */
    versionId: string;
    /** Whether to force download as attachment */
    asAttachment: boolean;
}

export interface PresignObjectRequest_HeadersEntry {
    key: string;
    value: string;
}

/** PresignURLsRequest represents the request for presigning URLs */
export interface PresignURLsRequest {
    /** Bucket name */
    bucketName: string;
    /** Custom presign host (optional) */
    presignHost: string;
    /** List of objects to presign */
    objects: PresignObjectRequest[];
}

/** PresignURLsResponse represents the response with presigned URLs */
export interface PresignURLsResponse {
    /** List of presigned URLs corresponding to the requested objects */
    urls: string[];
}

const basePresignObjectRequest: object = {
    expires: 0,
    name: '',
    method: '',
    versionId: '',
    asAttachment: false,
};

export const PresignObjectRequest: {
    encode(message: PresignObjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresignObjectRequest;
    fromJSON(object: any): PresignObjectRequest;
    toJSON(message: PresignObjectRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<PresignObjectRequest>, I>>(object: I): PresignObjectRequest;
} = {
    encode(message: PresignObjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.expires !== 0) {
            writer.uint32(8).int64(message.expires);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.method !== '') {
            writer.uint32(26).string(message.method);
        }
        Object.entries(message.headers).forEach(([key, value]) => {
            PresignObjectRequest_HeadersEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.versionId !== '') {
            writer.uint32(42).string(message.versionId);
        }
        if (message.asAttachment === true) {
            writer.uint32(48).bool(message.asAttachment);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PresignObjectRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePresignObjectRequest } as PresignObjectRequest;
        message.headers = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.expires = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.method = reader.string();
                    break;
                case 4:
                    const entry4 = PresignObjectRequest_HeadersEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.headers[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.versionId = reader.string();
                    break;
                case 6:
                    message.asAttachment = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PresignObjectRequest {
        const message = { ...basePresignObjectRequest } as PresignObjectRequest;
        message.expires =
            object.expires !== undefined && object.expires !== null ? Number(object.expires) : 0;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.method =
            object.method !== undefined && object.method !== null ? String(object.method) : '';
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.asAttachment =
            object.asAttachment !== undefined && object.asAttachment !== null
                ? Boolean(object.asAttachment)
                : false;
        return message;
    },

    toJSON(message: PresignObjectRequest): unknown {
        const obj: any = {};
        message.expires !== undefined && (obj.expires = Math.round(message.expires));
        message.name !== undefined && (obj.name = message.name);
        message.method !== undefined && (obj.method = message.method);
        obj.headers = {};
        if (message.headers) {
            Object.entries(message.headers).forEach(([k, v]) => {
                obj.headers[k] = v;
            });
        }
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.asAttachment !== undefined && (obj.asAttachment = message.asAttachment);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PresignObjectRequest>, I>>(
        object: I,
    ): PresignObjectRequest {
        const message = { ...basePresignObjectRequest } as PresignObjectRequest;
        message.expires = object.expires ?? 0;
        message.name = object.name ?? '';
        message.method = object.method ?? '';
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.versionId = object.versionId ?? '';
        message.asAttachment = object.asAttachment ?? false;
        return message;
    },
};

const basePresignObjectRequest_HeadersEntry: object = { key: '', value: '' };

export const PresignObjectRequest_HeadersEntry: {
    encode(message: PresignObjectRequest_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresignObjectRequest_HeadersEntry;
    fromJSON(object: any): PresignObjectRequest_HeadersEntry;
    toJSON(message: PresignObjectRequest_HeadersEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<PresignObjectRequest_HeadersEntry>, I>>(object: I): PresignObjectRequest_HeadersEntry;
} = {
    encode(
        message: PresignObjectRequest_HeadersEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): PresignObjectRequest_HeadersEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePresignObjectRequest_HeadersEntry,
        } as PresignObjectRequest_HeadersEntry;
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

    fromJSON(object: any): PresignObjectRequest_HeadersEntry {
        const message = {
            ...basePresignObjectRequest_HeadersEntry,
        } as PresignObjectRequest_HeadersEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: PresignObjectRequest_HeadersEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PresignObjectRequest_HeadersEntry>, I>>(
        object: I,
    ): PresignObjectRequest_HeadersEntry {
        const message = {
            ...basePresignObjectRequest_HeadersEntry,
        } as PresignObjectRequest_HeadersEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const basePresignURLsRequest: object = { bucketName: '', presignHost: '' };

export const PresignURLsRequest: {
    encode(message: PresignURLsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresignURLsRequest;
    fromJSON(object: any): PresignURLsRequest;
    toJSON(message: PresignURLsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<PresignURLsRequest>, I>>(object: I): PresignURLsRequest;
} = {
    encode(message: PresignURLsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.bucketName !== '') {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.presignHost !== '') {
            writer.uint32(18).string(message.presignHost);
        }
        for (const v of message.objects) {
            PresignObjectRequest.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PresignURLsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePresignURLsRequest } as PresignURLsRequest;
        message.objects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketName = reader.string();
                    break;
                case 2:
                    message.presignHost = reader.string();
                    break;
                case 3:
                    message.objects.push(PresignObjectRequest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PresignURLsRequest {
        const message = { ...basePresignURLsRequest } as PresignURLsRequest;
        message.bucketName =
            object.bucketName !== undefined && object.bucketName !== null
                ? String(object.bucketName)
                : '';
        message.presignHost =
            object.presignHost !== undefined && object.presignHost !== null
                ? String(object.presignHost)
                : '';
        message.objects = (object.objects ?? []).map((e: any) => PresignObjectRequest.fromJSON(e));
        return message;
    },

    toJSON(message: PresignURLsRequest): unknown {
        const obj: any = {};
        message.bucketName !== undefined && (obj.bucketName = message.bucketName);
        message.presignHost !== undefined && (obj.presignHost = message.presignHost);
        if (message.objects) {
            obj.objects = message.objects.map((e) =>
                e ? PresignObjectRequest.toJSON(e) : undefined,
            );
        } else {
            obj.objects = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PresignURLsRequest>, I>>(
        object: I,
    ): PresignURLsRequest {
        const message = { ...basePresignURLsRequest } as PresignURLsRequest;
        message.bucketName = object.bucketName ?? '';
        message.presignHost = object.presignHost ?? '';
        message.objects = object.objects?.map((e) => PresignObjectRequest.fromPartial(e)) || [];
        return message;
    },
};

const basePresignURLsResponse: object = { urls: '' };

export const PresignURLsResponse: {
    encode(message: PresignURLsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PresignURLsResponse;
    fromJSON(object: any): PresignURLsResponse;
    toJSON(message: PresignURLsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<PresignURLsResponse>, I>>(object: I): PresignURLsResponse;
} = {
    encode(message: PresignURLsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.urls) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PresignURLsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePresignURLsResponse } as PresignURLsResponse;
        message.urls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.urls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PresignURLsResponse {
        const message = { ...basePresignURLsResponse } as PresignURLsResponse;
        message.urls = (object.urls ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: PresignURLsResponse): unknown {
        const obj: any = {};
        if (message.urls) {
            obj.urls = message.urls.map((e) => e);
        } else {
            obj.urls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PresignURLsResponse>, I>>(
        object: I,
    ): PresignURLsResponse {
        const message = { ...basePresignURLsResponse } as PresignURLsResponse;
        message.urls = object.urls?.map((e) => e) || [];
        return message;
    },
};

/** PresignService provides URL presigning functionality */
export const PresignServiceService = {
    /** Create generates presigned URLs for the specified objects */
    create: {
        path: '/yandex.cloud.storage.v1.PresignService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PresignURLsRequest) =>
            Buffer.from(PresignURLsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PresignURLsRequest.decode(value),
        responseSerialize: (value: PresignURLsResponse) =>
            Buffer.from(PresignURLsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PresignURLsResponse.decode(value),
    },
} as const;

export interface PresignServiceServer extends UntypedServiceImplementation {
    /** Create generates presigned URLs for the specified objects */
    create: handleUnaryCall<PresignURLsRequest, PresignURLsResponse>;
}

export interface PresignServiceClient extends Client {
    /** Create generates presigned URLs for the specified objects */
    create(
        request: PresignURLsRequest,
        callback: (error: ServiceError | null, response: PresignURLsResponse) => void,
    ): ClientUnaryCall;
    create(
        request: PresignURLsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PresignURLsResponse) => void,
    ): ClientUnaryCall;
    create(
        request: PresignURLsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PresignURLsResponse) => void,
    ): ClientUnaryCall;
}

export const PresignServiceClient = makeGenericClientConstructor(
    PresignServiceService,
    'yandex.cloud.storage.v1.PresignService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PresignServiceClient;
    service: typeof PresignServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
