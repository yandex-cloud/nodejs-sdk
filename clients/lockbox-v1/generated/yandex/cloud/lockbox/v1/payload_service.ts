/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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
import { Payload } from '../../../../yandex/cloud/lockbox/v1/payload';

export const protobufPackage = 'yandex.cloud.lockbox.v1';

export interface GetPayloadRequest {
    $type: 'yandex.cloud.lockbox.v1.GetPayloadRequest';
    /** ID of the secret. */
    secretId: string;
    /** Optional ID of the version. */
    versionId: string;
}

export interface GetExRequest {
    $type: 'yandex.cloud.lockbox.v1.GetExRequest';
    secretId: string | undefined;
    folderAndName?: FolderAndName | undefined;
    versionId: string;
}

export interface FolderAndName {
    $type: 'yandex.cloud.lockbox.v1.FolderAndName';
    folderId: string;
    secretName: string;
}

export interface GetExResponse {
    $type: 'yandex.cloud.lockbox.v1.GetExResponse';
    secretId: string;
    versionId: string;
    entries: { [key: string]: Buffer };
}

export interface GetExResponse_EntriesEntry {
    $type: 'yandex.cloud.lockbox.v1.GetExResponse.EntriesEntry';
    key: string;
    value: Buffer;
}

const baseGetPayloadRequest: object = {
    $type: 'yandex.cloud.lockbox.v1.GetPayloadRequest',
    secretId: '',
    versionId: '',
};

export const GetPayloadRequest = {
    $type: 'yandex.cloud.lockbox.v1.GetPayloadRequest' as const,

    encode(message: GetPayloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPayloadRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPayloadRequest {
        const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        return message;
    },

    toJSON(message: GetPayloadRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPayloadRequest>, I>>(object: I): GetPayloadRequest {
        const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
        message.secretId = object.secretId ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetPayloadRequest.$type, GetPayloadRequest);

const baseGetExRequest: object = { $type: 'yandex.cloud.lockbox.v1.GetExRequest', versionId: '' };

export const GetExRequest = {
    $type: 'yandex.cloud.lockbox.v1.GetExRequest' as const,

    encode(message: GetExRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.secretId !== undefined) {
            writer.uint32(10).string(message.secretId);
        }
        if (message.folderAndName !== undefined) {
            FolderAndName.encode(message.folderAndName, writer.uint32(18).fork()).ldelim();
        }
        if (message.versionId !== '') {
            writer.uint32(170).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetExRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetExRequest } as GetExRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.folderAndName = FolderAndName.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetExRequest {
        const message = { ...baseGetExRequest } as GetExRequest;
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : undefined;
        message.folderAndName =
            object.folderAndName !== undefined && object.folderAndName !== null
                ? FolderAndName.fromJSON(object.folderAndName)
                : undefined;
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        return message;
    },

    toJSON(message: GetExRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.folderAndName !== undefined &&
            (obj.folderAndName = message.folderAndName
                ? FolderAndName.toJSON(message.folderAndName)
                : undefined);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetExRequest>, I>>(object: I): GetExRequest {
        const message = { ...baseGetExRequest } as GetExRequest;
        message.secretId = object.secretId ?? undefined;
        message.folderAndName =
            object.folderAndName !== undefined && object.folderAndName !== null
                ? FolderAndName.fromPartial(object.folderAndName)
                : undefined;
        message.versionId = object.versionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetExRequest.$type, GetExRequest);

const baseFolderAndName: object = {
    $type: 'yandex.cloud.lockbox.v1.FolderAndName',
    folderId: '',
    secretName: '',
};

export const FolderAndName = {
    $type: 'yandex.cloud.lockbox.v1.FolderAndName' as const,

    encode(message: FolderAndName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.secretName !== '') {
            writer.uint32(18).string(message.secretName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FolderAndName {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFolderAndName } as FolderAndName;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.secretName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FolderAndName {
        const message = { ...baseFolderAndName } as FolderAndName;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.secretName =
            object.secretName !== undefined && object.secretName !== null
                ? String(object.secretName)
                : '';
        return message;
    },

    toJSON(message: FolderAndName): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.secretName !== undefined && (obj.secretName = message.secretName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FolderAndName>, I>>(object: I): FolderAndName {
        const message = { ...baseFolderAndName } as FolderAndName;
        message.folderId = object.folderId ?? '';
        message.secretName = object.secretName ?? '';
        return message;
    },
};

messageTypeRegistry.set(FolderAndName.$type, FolderAndName);

const baseGetExResponse: object = {
    $type: 'yandex.cloud.lockbox.v1.GetExResponse',
    secretId: '',
    versionId: '',
};

export const GetExResponse = {
    $type: 'yandex.cloud.lockbox.v1.GetExResponse' as const,

    encode(message: GetExResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        Object.entries(message.entries).forEach(([key, value]) => {
            GetExResponse_EntriesEntry.encode(
                {
                    $type: 'yandex.cloud.lockbox.v1.GetExResponse.EntriesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetExResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetExResponse } as GetExResponse;
        message.entries = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    const entry3 = GetExResponse_EntriesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.entries[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetExResponse {
        const message = { ...baseGetExResponse } as GetExResponse;
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.entries = Object.entries(object.entries ?? {}).reduce<{ [key: string]: Buffer }>(
            (acc, [key, value]) => {
                acc[key] = Buffer.from(bytesFromBase64(value as string));
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: GetExResponse): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        obj.entries = {};
        if (message.entries) {
            Object.entries(message.entries).forEach(([k, v]) => {
                obj.entries[k] = base64FromBytes(v);
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetExResponse>, I>>(object: I): GetExResponse {
        const message = { ...baseGetExResponse } as GetExResponse;
        message.secretId = object.secretId ?? '';
        message.versionId = object.versionId ?? '';
        message.entries = Object.entries(object.entries ?? {}).reduce<{ [key: string]: Buffer }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = value;
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

messageTypeRegistry.set(GetExResponse.$type, GetExResponse);

const baseGetExResponse_EntriesEntry: object = {
    $type: 'yandex.cloud.lockbox.v1.GetExResponse.EntriesEntry',
    key: '',
};

export const GetExResponse_EntriesEntry = {
    $type: 'yandex.cloud.lockbox.v1.GetExResponse.EntriesEntry' as const,

    encode(
        message: GetExResponse_EntriesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetExResponse_EntriesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetExResponse_EntriesEntry } as GetExResponse_EntriesEntry;
        message.value = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetExResponse_EntriesEntry {
        const message = { ...baseGetExResponse_EntriesEntry } as GetExResponse_EntriesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Buffer.from(bytesFromBase64(object.value))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: GetExResponse_EntriesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(
                message.value !== undefined ? message.value : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetExResponse_EntriesEntry>, I>>(
        object: I,
    ): GetExResponse_EntriesEntry {
        const message = { ...baseGetExResponse_EntriesEntry } as GetExResponse_EntriesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(GetExResponse_EntriesEntry.$type, GetExResponse_EntriesEntry);

/** Set of methods to access payload of secrets. */
export const PayloadServiceService = {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get: {
        path: '/yandex.cloud.lockbox.v1.PayloadService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPayloadRequest) =>
            Buffer.from(GetPayloadRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPayloadRequest.decode(value),
        responseSerialize: (value: Payload) => Buffer.from(Payload.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Payload.decode(value),
    },
    getEx: {
        path: '/yandex.cloud.lockbox.v1.PayloadService/GetEx',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetExRequest) => Buffer.from(GetExRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetExRequest.decode(value),
        responseSerialize: (value: GetExResponse) =>
            Buffer.from(GetExResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetExResponse.decode(value),
    },
} as const;

export interface PayloadServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get: handleUnaryCall<GetPayloadRequest, Payload>;
    getEx: handleUnaryCall<GetExRequest, GetExResponse>;
}

export interface PayloadServiceClient extends Client {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get(
        request: GetPayloadRequest,
        callback: (error: ServiceError | null, response: Payload) => void,
    ): ClientUnaryCall;
    get(
        request: GetPayloadRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Payload) => void,
    ): ClientUnaryCall;
    get(
        request: GetPayloadRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Payload) => void,
    ): ClientUnaryCall;
    getEx(
        request: GetExRequest,
        callback: (error: ServiceError | null, response: GetExResponse) => void,
    ): ClientUnaryCall;
    getEx(
        request: GetExRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetExResponse) => void,
    ): ClientUnaryCall;
    getEx(
        request: GetExRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetExResponse) => void,
    ): ClientUnaryCall;
}

export const PayloadServiceClient = makeGenericClientConstructor(
    PayloadServiceService,
    'yandex.cloud.lockbox.v1.PayloadService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PayloadServiceClient;
    service: typeof PayloadServiceService;
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

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
