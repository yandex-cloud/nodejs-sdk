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
import { Artifact } from '../../../../yandex/cloud/cloudregistry/v1/artifact';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

export interface GetArtifactRequest {
    $type: 'yandex.cloud.cloudregistry.v1.GetArtifactRequest';
    /** ID of the artifact resource to return. */
    artifactId: string;
}

export interface DeleteArtifactRequest {
    $type: 'yandex.cloud.cloudregistry.v1.DeleteArtifactRequest';
    /** ID of the artifact to delete. */
    artifactId: string;
}

export interface DeleteArtifactMetadata {
    $type: 'yandex.cloud.cloudregistry.v1.DeleteArtifactMetadata';
    /** ID of the artifact to delete. */
    artifactId: string;
}

const baseGetArtifactRequest: object = {
    $type: 'yandex.cloud.cloudregistry.v1.GetArtifactRequest',
    artifactId: '',
};

export const GetArtifactRequest = {
    $type: 'yandex.cloud.cloudregistry.v1.GetArtifactRequest' as const,

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

messageTypeRegistry.set(GetArtifactRequest.$type, GetArtifactRequest);

const baseDeleteArtifactRequest: object = {
    $type: 'yandex.cloud.cloudregistry.v1.DeleteArtifactRequest',
    artifactId: '',
};

export const DeleteArtifactRequest = {
    $type: 'yandex.cloud.cloudregistry.v1.DeleteArtifactRequest' as const,

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

messageTypeRegistry.set(DeleteArtifactRequest.$type, DeleteArtifactRequest);

const baseDeleteArtifactMetadata: object = {
    $type: 'yandex.cloud.cloudregistry.v1.DeleteArtifactMetadata',
    artifactId: '',
};

export const DeleteArtifactMetadata = {
    $type: 'yandex.cloud.cloudregistry.v1.DeleteArtifactMetadata' as const,

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

messageTypeRegistry.set(DeleteArtifactMetadata.$type, DeleteArtifactMetadata);

/** A set of methods for managing Artifacts. */
export const ArtifactServiceService = {
    /**
     * Returns the specified artifact resource.
     *
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
} as const;

export interface ArtifactServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified artifact resource.
     *
     * To get the list of available artifact resources, make [RegistryService.ListArtifacts] method call.
     */
    get: handleUnaryCall<GetArtifactRequest, Artifact>;
    /** Deletes the specified artifact. */
    delete: handleUnaryCall<DeleteArtifactRequest, Operation>;
}

export interface ArtifactServiceClient extends Client {
    /**
     * Returns the specified artifact resource.
     *
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
