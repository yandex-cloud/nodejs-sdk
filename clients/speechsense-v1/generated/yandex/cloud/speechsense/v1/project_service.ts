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
import { FieldFilter } from '../../../../yandex/cloud/speechsense/v1/project';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.speechsense.v1';

export interface CreateProjectRequest {
    $type: 'yandex.cloud.speechsense.v1.CreateProjectRequest';
    /** project name */
    name: string;
    /** id of connection the project should belong too */
    connectionId: string;
    /** project description */
    description: string;
    /** project filters */
    filters: FieldFilter[];
}

export interface CreateProjectMetadata {
    $type: 'yandex.cloud.speechsense.v1.CreateProjectMetadata';
    id: string;
}

const baseCreateProjectRequest: object = {
    $type: 'yandex.cloud.speechsense.v1.CreateProjectRequest',
    name: '',
    connectionId: '',
    description: '',
};

export const CreateProjectRequest = {
    $type: 'yandex.cloud.speechsense.v1.CreateProjectRequest' as const,

    encode(message: CreateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.connectionId !== '') {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.filters) {
            FieldFilter.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
        message.filters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.filters.push(FieldFilter.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateProjectRequest {
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.filters = (object.filters ?? []).map((e: any) => FieldFilter.fromJSON(e));
        return message;
    },

    toJSON(message: CreateProjectRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.description !== undefined && (obj.description = message.description);
        if (message.filters) {
            obj.filters = message.filters.map((e) => (e ? FieldFilter.toJSON(e) : undefined));
        } else {
            obj.filters = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateProjectRequest>, I>>(
        object: I,
    ): CreateProjectRequest {
        const message = { ...baseCreateProjectRequest } as CreateProjectRequest;
        message.name = object.name ?? '';
        message.connectionId = object.connectionId ?? '';
        message.description = object.description ?? '';
        message.filters = object.filters?.map((e) => FieldFilter.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(CreateProjectRequest.$type, CreateProjectRequest);

const baseCreateProjectMetadata: object = {
    $type: 'yandex.cloud.speechsense.v1.CreateProjectMetadata',
    id: '',
};

export const CreateProjectMetadata = {
    $type: 'yandex.cloud.speechsense.v1.CreateProjectMetadata' as const,

    encode(message: CreateProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProjectMetadata } as CreateProjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateProjectMetadata {
        const message = { ...baseCreateProjectMetadata } as CreateProjectMetadata;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: CreateProjectMetadata): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateProjectMetadata>, I>>(
        object: I,
    ): CreateProjectMetadata {
        const message = { ...baseCreateProjectMetadata } as CreateProjectMetadata;
        message.id = object.id ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateProjectMetadata.$type, CreateProjectMetadata);

export const ProjectServiceService = {
    /** rpc for creating speechsense project */
    create: {
        path: '/yandex.cloud.speechsense.v1.ProjectService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateProjectRequest) =>
            Buffer.from(CreateProjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateProjectRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ProjectServiceServer extends UntypedServiceImplementation {
    /** rpc for creating speechsense project */
    create: handleUnaryCall<CreateProjectRequest, Operation>;
}

export interface ProjectServiceClient extends Client {
    /** rpc for creating speechsense project */
    create(
        request: CreateProjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateProjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateProjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ProjectServiceClient = makeGenericClientConstructor(
    ProjectServiceService,
    'yandex.cloud.speechsense.v1.ProjectService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ProjectServiceClient;
    service: typeof ProjectServiceService;
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
