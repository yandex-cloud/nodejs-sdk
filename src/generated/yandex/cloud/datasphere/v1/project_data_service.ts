/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleClientStreamingCall,
    handleServerStreamingCall,
    Client,
    ClientWritableStream,
    Metadata,
    CallOptions,
    ClientReadableStream,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.datasphere.v1';

export interface FileMetadata {
    /** ID of the Project resource associated with the file. */
    projectId: string;
    /** File path. */
    path: string;
    /** File size in bytes. */
    sizeBytes: number;
}

export interface UploadFileRequest {
    /** Metadata of the file to upload. */
    metadata?: FileMetadata | undefined;
    /** Byte chunk of the file to upload. */
    chunk: Buffer | undefined;
}

export interface UploadFileResponse {
    /** Metadata of the uploaded file. */
    metadata?: FileMetadata;
}

export interface DownloadFileRequest {
    /** ID of the Project resource to download the file from. */
    projectId: string;
    /** Path of the file to download. */
    filePath: string;
}

export interface DownloadFileResponse {
    /** Metadata of the downloaded file. */
    metadata?: FileMetadata | undefined;
    /** Byte chunk of the downloaded file. */
    chunk: Buffer | undefined;
}

const baseFileMetadata: object = { projectId: '', path: '', sizeBytes: 0 };

export const FileMetadata = {
    encode(message: FileMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.sizeBytes !== 0) {
            writer.uint32(24).int64(message.sizeBytes);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFileMetadata } as FileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.sizeBytes = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FileMetadata {
        const message = { ...baseFileMetadata } as FileMetadata;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        message.sizeBytes =
            object.sizeBytes !== undefined && object.sizeBytes !== null
                ? Number(object.sizeBytes)
                : 0;
        return message;
    },

    toJSON(message: FileMetadata): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.path !== undefined && (obj.path = message.path);
        message.sizeBytes !== undefined && (obj.sizeBytes = Math.round(message.sizeBytes));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FileMetadata>, I>>(object: I): FileMetadata {
        const message = { ...baseFileMetadata } as FileMetadata;
        message.projectId = object.projectId ?? '';
        message.path = object.path ?? '';
        message.sizeBytes = object.sizeBytes ?? 0;
        return message;
    },
};

const baseUploadFileRequest: object = {};

export const UploadFileRequest = {
    encode(message: UploadFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metadata !== undefined) {
            FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.chunk !== undefined) {
            writer.uint32(18).bytes(message.chunk);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UploadFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUploadFileRequest } as UploadFileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = FileMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chunk = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UploadFileRequest {
        const message = { ...baseUploadFileRequest } as UploadFileRequest;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? FileMetadata.fromJSON(object.metadata)
                : undefined;
        message.chunk =
            object.chunk !== undefined && object.chunk !== null
                ? Buffer.from(bytesFromBase64(object.chunk))
                : undefined;
        return message;
    },

    toJSON(message: UploadFileRequest): unknown {
        const obj: any = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? FileMetadata.toJSON(message.metadata) : undefined);
        message.chunk !== undefined &&
            (obj.chunk = message.chunk !== undefined ? base64FromBytes(message.chunk) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UploadFileRequest>, I>>(object: I): UploadFileRequest {
        const message = { ...baseUploadFileRequest } as UploadFileRequest;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? FileMetadata.fromPartial(object.metadata)
                : undefined;
        message.chunk = object.chunk ?? undefined;
        return message;
    },
};

const baseUploadFileResponse: object = {};

export const UploadFileResponse = {
    encode(message: UploadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metadata !== undefined) {
            FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UploadFileResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUploadFileResponse } as UploadFileResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = FileMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UploadFileResponse {
        const message = { ...baseUploadFileResponse } as UploadFileResponse;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? FileMetadata.fromJSON(object.metadata)
                : undefined;
        return message;
    },

    toJSON(message: UploadFileResponse): unknown {
        const obj: any = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? FileMetadata.toJSON(message.metadata) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UploadFileResponse>, I>>(
        object: I,
    ): UploadFileResponse {
        const message = { ...baseUploadFileResponse } as UploadFileResponse;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? FileMetadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
};

const baseDownloadFileRequest: object = { projectId: '', filePath: '' };

export const DownloadFileRequest = {
    encode(message: DownloadFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.filePath !== '') {
            writer.uint32(18).string(message.filePath);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDownloadFileRequest } as DownloadFileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.filePath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DownloadFileRequest {
        const message = { ...baseDownloadFileRequest } as DownloadFileRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.filePath =
            object.filePath !== undefined && object.filePath !== null
                ? String(object.filePath)
                : '';
        return message;
    },

    toJSON(message: DownloadFileRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.filePath !== undefined && (obj.filePath = message.filePath);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DownloadFileRequest>, I>>(
        object: I,
    ): DownloadFileRequest {
        const message = { ...baseDownloadFileRequest } as DownloadFileRequest;
        message.projectId = object.projectId ?? '';
        message.filePath = object.filePath ?? '';
        return message;
    },
};

const baseDownloadFileResponse: object = {};

export const DownloadFileResponse = {
    encode(message: DownloadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metadata !== undefined) {
            FileMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.chunk !== undefined) {
            writer.uint32(18).bytes(message.chunk);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadFileResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDownloadFileResponse } as DownloadFileResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = FileMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chunk = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DownloadFileResponse {
        const message = { ...baseDownloadFileResponse } as DownloadFileResponse;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? FileMetadata.fromJSON(object.metadata)
                : undefined;
        message.chunk =
            object.chunk !== undefined && object.chunk !== null
                ? Buffer.from(bytesFromBase64(object.chunk))
                : undefined;
        return message;
    },

    toJSON(message: DownloadFileResponse): unknown {
        const obj: any = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? FileMetadata.toJSON(message.metadata) : undefined);
        message.chunk !== undefined &&
            (obj.chunk = message.chunk !== undefined ? base64FromBytes(message.chunk) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DownloadFileResponse>, I>>(
        object: I,
    ): DownloadFileResponse {
        const message = { ...baseDownloadFileResponse } as DownloadFileResponse;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? FileMetadata.fromPartial(object.metadata)
                : undefined;
        message.chunk = object.chunk ?? undefined;
        return message;
    },
};

/** A set of methods for managing data of the Project resource. */
export const ProjectDataServiceService = {
    /** Uploads a file to the specified project. */
    uploadFile: {
        path: '/yandex.cloud.datasphere.v1.ProjectDataService/UploadFile',
        requestStream: true,
        responseStream: false,
        requestSerialize: (value: UploadFileRequest) =>
            Buffer.from(UploadFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UploadFileRequest.decode(value),
        responseSerialize: (value: UploadFileResponse) =>
            Buffer.from(UploadFileResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => UploadFileResponse.decode(value),
    },
    /** Downloads the specified file from the specified project. */
    downloadFile: {
        path: '/yandex.cloud.datasphere.v1.ProjectDataService/DownloadFile',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value: DownloadFileRequest) =>
            Buffer.from(DownloadFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DownloadFileRequest.decode(value),
        responseSerialize: (value: DownloadFileResponse) =>
            Buffer.from(DownloadFileResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DownloadFileResponse.decode(value),
    },
} as const;

export interface ProjectDataServiceServer extends UntypedServiceImplementation {
    /** Uploads a file to the specified project. */
    uploadFile: handleClientStreamingCall<UploadFileRequest, UploadFileResponse>;
    /** Downloads the specified file from the specified project. */
    downloadFile: handleServerStreamingCall<DownloadFileRequest, DownloadFileResponse>;
}

export interface ProjectDataServiceClient extends Client {
    /** Uploads a file to the specified project. */
    uploadFile(
        callback: (error: ServiceError | null, response: UploadFileResponse) => void,
    ): ClientWritableStream<UploadFileRequest>;
    uploadFile(
        metadata: Metadata,
        callback: (error: ServiceError | null, response: UploadFileResponse) => void,
    ): ClientWritableStream<UploadFileRequest>;
    uploadFile(
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UploadFileResponse) => void,
    ): ClientWritableStream<UploadFileRequest>;
    uploadFile(
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UploadFileResponse) => void,
    ): ClientWritableStream<UploadFileRequest>;
    /** Downloads the specified file from the specified project. */
    downloadFile(
        request: DownloadFileRequest,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<DownloadFileResponse>;
    downloadFile(
        request: DownloadFileRequest,
        metadata?: Metadata,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<DownloadFileResponse>;
}

export const ProjectDataServiceClient = makeGenericClientConstructor(
    ProjectDataServiceService,
    'yandex.cloud.datasphere.v1.ProjectDataService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ProjectDataServiceClient;
    service: typeof ProjectDataServiceService;
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
