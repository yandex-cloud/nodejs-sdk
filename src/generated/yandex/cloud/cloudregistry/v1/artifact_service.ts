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
import { Artifact } from './artifact';
import { Operation } from '../../operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../access/access';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

export interface GetArtifactRequest {
    /** ID of the artifact resource to return. */
    artifactId: string;
}

export interface DeleteArtifactRequest {
    /** ID of the artifact to delete. */
    artifactId: string;
}

export interface DeleteArtifactMetadata {
    /** ID of the artifact to delete. */
    artifactId: string;
}

export interface GetArtifactByPathRequest {
    /** ID of the registry that contains the artifact. */
    registryId: string;
    /** The path to a specific node where the registry artifact is located. */
    path: string;
}

export interface UpsertFolderRequest {
    /** ID of the registry to upsert a folder in. */
    registryId: string;
    /** Path of the folder to upsert. */
    path: string;
}

export interface UpsertFolderMetadata {
    /** ID of the registry that the folder is being upserted in. */
    registryId: string;
    /** Path of the folder that is being upserted. */
    path: string;
}

const baseGetArtifactRequest: object = { artifactId: '' };

export const GetArtifactRequest: {
    encode(message: GetArtifactRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetArtifactRequest;
    fromJSON(object: any): GetArtifactRequest;
    toJSON(message: GetArtifactRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetArtifactRequest>, I>>(object: I): GetArtifactRequest;
} = {
    encode(message: GetArtifactRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.artifactId !== '') {
            writer.uint32(10).string(message.artifactId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetArtifactRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetArtifactRequest } as GetArtifactRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.artifactId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetArtifactRequest {
        const message = { ...baseGetArtifactRequest } as GetArtifactRequest;
        message.artifactId =
            object.artifactId !== undefined && object.artifactId !== null
                ? String(object.artifactId)
                : '';
        return message;
    },

    toJSON(message: GetArtifactRequest): unknown {
        const obj: any = {};
        message.artifactId !== undefined && (obj.artifactId = message.artifactId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetArtifactRequest>, I>>(
        object: I,
    ): GetArtifactRequest {
        const message = { ...baseGetArtifactRequest } as GetArtifactRequest;
        message.artifactId = object.artifactId ?? '';
        return message;
    },
};

const baseDeleteArtifactRequest: object = { artifactId: '' };

export const DeleteArtifactRequest: {
    encode(message: DeleteArtifactRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteArtifactRequest;
    fromJSON(object: any): DeleteArtifactRequest;
    toJSON(message: DeleteArtifactRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteArtifactRequest>, I>>(object: I): DeleteArtifactRequest;
} = {
    encode(message: DeleteArtifactRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.artifactId !== '') {
            writer.uint32(10).string(message.artifactId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteArtifactRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteArtifactRequest } as DeleteArtifactRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.artifactId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteArtifactRequest {
        const message = { ...baseDeleteArtifactRequest } as DeleteArtifactRequest;
        message.artifactId =
            object.artifactId !== undefined && object.artifactId !== null
                ? String(object.artifactId)
                : '';
        return message;
    },

    toJSON(message: DeleteArtifactRequest): unknown {
        const obj: any = {};
        message.artifactId !== undefined && (obj.artifactId = message.artifactId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteArtifactRequest>, I>>(
        object: I,
    ): DeleteArtifactRequest {
        const message = { ...baseDeleteArtifactRequest } as DeleteArtifactRequest;
        message.artifactId = object.artifactId ?? '';
        return message;
    },
};

const baseDeleteArtifactMetadata: object = { artifactId: '' };

export const DeleteArtifactMetadata: {
    encode(message: DeleteArtifactMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteArtifactMetadata;
    fromJSON(object: any): DeleteArtifactMetadata;
    toJSON(message: DeleteArtifactMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteArtifactMetadata>, I>>(object: I): DeleteArtifactMetadata;
} = {
    encode(message: DeleteArtifactMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.artifactId !== '') {
            writer.uint32(10).string(message.artifactId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteArtifactMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteArtifactMetadata } as DeleteArtifactMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.artifactId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteArtifactMetadata {
        const message = { ...baseDeleteArtifactMetadata } as DeleteArtifactMetadata;
        message.artifactId =
            object.artifactId !== undefined && object.artifactId !== null
                ? String(object.artifactId)
                : '';
        return message;
    },

    toJSON(message: DeleteArtifactMetadata): unknown {
        const obj: any = {};
        message.artifactId !== undefined && (obj.artifactId = message.artifactId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteArtifactMetadata>, I>>(
        object: I,
    ): DeleteArtifactMetadata {
        const message = { ...baseDeleteArtifactMetadata } as DeleteArtifactMetadata;
        message.artifactId = object.artifactId ?? '';
        return message;
    },
};

const baseGetArtifactByPathRequest: object = { registryId: '', path: '' };

export const GetArtifactByPathRequest: {
    encode(message: GetArtifactByPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetArtifactByPathRequest;
    fromJSON(object: any): GetArtifactByPathRequest;
    toJSON(message: GetArtifactByPathRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetArtifactByPathRequest>, I>>(object: I): GetArtifactByPathRequest;
} = {
    encode(
        message: GetArtifactByPathRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetArtifactByPathRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetArtifactByPathRequest } as GetArtifactByPathRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetArtifactByPathRequest {
        const message = { ...baseGetArtifactByPathRequest } as GetArtifactByPathRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        return message;
    },

    toJSON(message: GetArtifactByPathRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetArtifactByPathRequest>, I>>(
        object: I,
    ): GetArtifactByPathRequest {
        const message = { ...baseGetArtifactByPathRequest } as GetArtifactByPathRequest;
        message.registryId = object.registryId ?? '';
        message.path = object.path ?? '';
        return message;
    },
};

const baseUpsertFolderRequest: object = { registryId: '', path: '' };

export const UpsertFolderRequest: {
    encode(message: UpsertFolderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertFolderRequest;
    fromJSON(object: any): UpsertFolderRequest;
    toJSON(message: UpsertFolderRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpsertFolderRequest>, I>>(object: I): UpsertFolderRequest;
} = {
    encode(message: UpsertFolderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertFolderRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpsertFolderRequest } as UpsertFolderRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpsertFolderRequest {
        const message = { ...baseUpsertFolderRequest } as UpsertFolderRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        return message;
    },

    toJSON(message: UpsertFolderRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpsertFolderRequest>, I>>(
        object: I,
    ): UpsertFolderRequest {
        const message = { ...baseUpsertFolderRequest } as UpsertFolderRequest;
        message.registryId = object.registryId ?? '';
        message.path = object.path ?? '';
        return message;
    },
};

const baseUpsertFolderMetadata: object = { registryId: '', path: '' };

export const UpsertFolderMetadata: {
    encode(message: UpsertFolderMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertFolderMetadata;
    fromJSON(object: any): UpsertFolderMetadata;
    toJSON(message: UpsertFolderMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpsertFolderMetadata>, I>>(object: I): UpsertFolderMetadata;
} = {
    encode(message: UpsertFolderMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertFolderMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpsertFolderMetadata } as UpsertFolderMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpsertFolderMetadata {
        const message = { ...baseUpsertFolderMetadata } as UpsertFolderMetadata;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        return message;
    },

    toJSON(message: UpsertFolderMetadata): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpsertFolderMetadata>, I>>(
        object: I,
    ): UpsertFolderMetadata {
        const message = { ...baseUpsertFolderMetadata } as UpsertFolderMetadata;
        message.registryId = object.registryId ?? '';
        message.path = object.path ?? '';
        return message;
    },
};

/** A set of methods for managing Artifacts. */
export const ArtifactServiceService = {
    /**
     * Returns the specified artifact resource.
     * To get the list of available artifact resources, make [RegistryService.ListArtifacts] method call.
     */
    get: {
        path: '/yandex.cloud.cloudregistry.v1.ArtifactService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetArtifactRequest) =>
            Buffer.from(GetArtifactRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetArtifactRequest.decode(value),
        responseSerialize: (value: Artifact) => Buffer.from(Artifact.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Artifact.decode(value),
    },
    /** Returns the specified artifact resource by path within the registry. */
    getByPath: {
        path: '/yandex.cloud.cloudregistry.v1.ArtifactService/GetByPath',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetArtifactByPathRequest) =>
            Buffer.from(GetArtifactByPathRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetArtifactByPathRequest.decode(value),
        responseSerialize: (value: Artifact) => Buffer.from(Artifact.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Artifact.decode(value),
    },
    /** Deletes the specified artifact. */
    delete: {
        path: '/yandex.cloud.cloudregistry.v1.ArtifactService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteArtifactRequest) =>
            Buffer.from(DeleteArtifactRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteArtifactRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * access bindings
     * Lists access bindings for the specified artifact (folder, package, artifact, etc).
     */
    listAccessBindings: {
        path: '/yandex.cloud.cloudregistry.v1.ArtifactService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified artifact (folder, package, artifact, etc). */
    setAccessBindings: {
        path: '/yandex.cloud.cloudregistry.v1.ArtifactService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified artifact (folder, package, artifact, etc). */
    updateAccessBindings: {
        path: '/yandex.cloud.cloudregistry.v1.ArtifactService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Upserts a folder at the specified path within the registry. */
    upsertFolder: {
        path: '/yandex.cloud.cloudregistry.v1.ArtifactService/UpsertFolder',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpsertFolderRequest) =>
            Buffer.from(UpsertFolderRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpsertFolderRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ArtifactServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified artifact resource.
     * To get the list of available artifact resources, make [RegistryService.ListArtifacts] method call.
     */
    get: handleUnaryCall<GetArtifactRequest, Artifact>;
    /** Returns the specified artifact resource by path within the registry. */
    getByPath: handleUnaryCall<GetArtifactByPathRequest, Artifact>;
    /** Deletes the specified artifact. */
    delete: handleUnaryCall<DeleteArtifactRequest, Operation>;
    /**
     * access bindings
     * Lists access bindings for the specified artifact (folder, package, artifact, etc).
     */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified artifact (folder, package, artifact, etc). */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified artifact (folder, package, artifact, etc). */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Upserts a folder at the specified path within the registry. */
    upsertFolder: handleUnaryCall<UpsertFolderRequest, Operation>;
}

export interface ArtifactServiceClient extends Client {
    /**
     * Returns the specified artifact resource.
     * To get the list of available artifact resources, make [RegistryService.ListArtifacts] method call.
     */
    get(
        request: GetArtifactRequest,
        callback: (error: ServiceError | null, response: Artifact) => void,
    ): ClientUnaryCall;
    get(
        request: GetArtifactRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Artifact) => void,
    ): ClientUnaryCall;
    get(
        request: GetArtifactRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Artifact) => void,
    ): ClientUnaryCall;
    /** Returns the specified artifact resource by path within the registry. */
    getByPath(
        request: GetArtifactByPathRequest,
        callback: (error: ServiceError | null, response: Artifact) => void,
    ): ClientUnaryCall;
    getByPath(
        request: GetArtifactByPathRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Artifact) => void,
    ): ClientUnaryCall;
    getByPath(
        request: GetArtifactByPathRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Artifact) => void,
    ): ClientUnaryCall;
    /** Deletes the specified artifact. */
    delete(
        request: DeleteArtifactRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteArtifactRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteArtifactRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * access bindings
     * Lists access bindings for the specified artifact (folder, package, artifact, etc).
     */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    /** Sets access bindings for the specified artifact (folder, package, artifact, etc). */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates access bindings for the specified artifact (folder, package, artifact, etc). */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Upserts a folder at the specified path within the registry. */
    upsertFolder(
        request: UpsertFolderRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    upsertFolder(
        request: UpsertFolderRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    upsertFolder(
        request: UpsertFolderRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ArtifactServiceClient = makeGenericClientConstructor(
    ArtifactServiceService,
    'yandex.cloud.cloudregistry.v1.ArtifactService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ArtifactServiceClient;
    service: typeof ArtifactServiceService;
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
