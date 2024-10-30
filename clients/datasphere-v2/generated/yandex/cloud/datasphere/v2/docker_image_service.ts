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
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.datasphere.v2';

export interface ActivateDockerImageRequest {
    $type: 'yandex.cloud.datasphere.v2.ActivateDockerImageRequest';
    projectId: string;
    dockerId: string;
}

const baseActivateDockerImageRequest: object = {
    $type: 'yandex.cloud.datasphere.v2.ActivateDockerImageRequest',
    projectId: '',
    dockerId: '',
};

export const ActivateDockerImageRequest = {
    $type: 'yandex.cloud.datasphere.v2.ActivateDockerImageRequest' as const,

    encode(
        message: ActivateDockerImageRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.dockerId !== '') {
            writer.uint32(18).string(message.dockerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateDockerImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateDockerImageRequest } as ActivateDockerImageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.dockerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateDockerImageRequest {
        const message = { ...baseActivateDockerImageRequest } as ActivateDockerImageRequest;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : '';
        message.dockerId =
            object.dockerId !== undefined && object.dockerId !== null
                ? String(object.dockerId)
                : '';
        return message;
    },

    toJSON(message: ActivateDockerImageRequest): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.dockerId !== undefined && (obj.dockerId = message.dockerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateDockerImageRequest>, I>>(
        object: I,
    ): ActivateDockerImageRequest {
        const message = { ...baseActivateDockerImageRequest } as ActivateDockerImageRequest;
        message.projectId = object.projectId ?? '';
        message.dockerId = object.dockerId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ActivateDockerImageRequest.$type, ActivateDockerImageRequest);

/** A set of methods for managing Docker Images. */
export const DockerImageServiceService = {
    /** Activates shared docker image in project */
    activate: {
        path: '/yandex.cloud.datasphere.v2.DockerImageService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ActivateDockerImageRequest) =>
            Buffer.from(ActivateDockerImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ActivateDockerImageRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface DockerImageServiceServer extends UntypedServiceImplementation {
    /** Activates shared docker image in project */
    activate: handleUnaryCall<ActivateDockerImageRequest, Operation>;
}

export interface DockerImageServiceClient extends Client {
    /** Activates shared docker image in project */
    activate(
        request: ActivateDockerImageRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateDockerImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateDockerImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const DockerImageServiceClient = makeGenericClientConstructor(
    DockerImageServiceService,
    'yandex.cloud.datasphere.v2.DockerImageService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): DockerImageServiceClient;
    service: typeof DockerImageServiceService;
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
