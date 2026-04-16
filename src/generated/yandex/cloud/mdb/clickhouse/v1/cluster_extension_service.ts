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
import { ClusterExtension } from '../../../../../yandex/cloud/mdb/clickhouse/v1/cluster_extension';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface GetClusterExtensionRequest {
    clusterId: string;
    extensionName: string;
}

export interface ListClusterExtensionsRequest {
    clusterId: string;
    pageSize: number;
    pageToken: string;
}

export interface ListClusterExtensionsResponse {
    extensions: ClusterExtension[];
    nextPageToken: string;
}

export interface CreateClusterExtensionRequest {
    clusterId: string;
    extensionSpec?: ExtensionSpec;
}

export interface CreateClusterExtensionMetadata {
    clusterId: string;
    extensionName: string;
}

export interface DeleteClusterExtensionRequest {
    clusterId: string;
    extensionName: string;
}

export interface DeleteClusterExtensionMetadata {
    clusterId: string;
    extensionName: string;
}

export interface UpdateClusterExtensionRequest {
    clusterId: string;
    extensionSpec?: ExtensionSpec;
}

export interface UpdateClusterExtensionMetadata {
    clusterId: string;
    extensionName: string;
}

export interface SetClusterExtensionsRequest {
    clusterId: string;
    extensionSpecs: ExtensionSpec[];
}

export interface SetClusterExtensionsMetadata {
    clusterId: string;
    addedExtensionNames: string[];
    updatedExtensionNames: string[];
    deletedExtensionNames: string[];
}

export interface ExtensionSpec {
    name: string;
    version: string;
}

const baseGetClusterExtensionRequest: object = { clusterId: '', extensionName: '' };

export const GetClusterExtensionRequest = {
    encode(
        message: GetClusterExtensionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionName !== '') {
            writer.uint32(18).string(message.extensionName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterExtensionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetClusterExtensionRequest } as GetClusterExtensionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetClusterExtensionRequest {
        const message = { ...baseGetClusterExtensionRequest } as GetClusterExtensionRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.extensionName =
            object.extensionName !== undefined && object.extensionName !== null
                ? String(object.extensionName)
                : '';
        return message;
    },

    toJSON(message: GetClusterExtensionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionName !== undefined && (obj.extensionName = message.extensionName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetClusterExtensionRequest>, I>>(
        object: I,
    ): GetClusterExtensionRequest {
        const message = { ...baseGetClusterExtensionRequest } as GetClusterExtensionRequest;
        message.clusterId = object.clusterId ?? '';
        message.extensionName = object.extensionName ?? '';
        return message;
    },
};

const baseListClusterExtensionsRequest: object = { clusterId: '', pageSize: 0, pageToken: '' };

export const ListClusterExtensionsRequest = {
    encode(
        message: ListClusterExtensionsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterExtensionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterExtensionsRequest } as ListClusterExtensionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListClusterExtensionsRequest {
        const message = { ...baseListClusterExtensionsRequest } as ListClusterExtensionsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterExtensionsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterExtensionsRequest>, I>>(
        object: I,
    ): ListClusterExtensionsRequest {
        const message = { ...baseListClusterExtensionsRequest } as ListClusterExtensionsRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListClusterExtensionsResponse: object = { nextPageToken: '' };

export const ListClusterExtensionsResponse = {
    encode(
        message: ListClusterExtensionsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.extensions) {
            ClusterExtension.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterExtensionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterExtensionsResponse } as ListClusterExtensionsResponse;
        message.extensions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extensions.push(ClusterExtension.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListClusterExtensionsResponse {
        const message = { ...baseListClusterExtensionsResponse } as ListClusterExtensionsResponse;
        message.extensions = (object.extensions ?? []).map((e: any) =>
            ClusterExtension.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterExtensionsResponse): unknown {
        const obj: any = {};
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) =>
                e ? ClusterExtension.toJSON(e) : undefined,
            );
        } else {
            obj.extensions = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterExtensionsResponse>, I>>(
        object: I,
    ): ListClusterExtensionsResponse {
        const message = { ...baseListClusterExtensionsResponse } as ListClusterExtensionsResponse;
        message.extensions = object.extensions?.map((e) => ClusterExtension.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateClusterExtensionRequest: object = { clusterId: '' };

export const CreateClusterExtensionRequest = {
    encode(
        message: CreateClusterExtensionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionSpec !== undefined) {
            ExtensionSpec.encode(message.extensionSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterExtensionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterExtensionRequest } as CreateClusterExtensionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionSpec = ExtensionSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateClusterExtensionRequest {
        const message = { ...baseCreateClusterExtensionRequest } as CreateClusterExtensionRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.extensionSpec =
            object.extensionSpec !== undefined && object.extensionSpec !== null
                ? ExtensionSpec.fromJSON(object.extensionSpec)
                : undefined;
        return message;
    },

    toJSON(message: CreateClusterExtensionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionSpec !== undefined &&
            (obj.extensionSpec = message.extensionSpec
                ? ExtensionSpec.toJSON(message.extensionSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterExtensionRequest>, I>>(
        object: I,
    ): CreateClusterExtensionRequest {
        const message = { ...baseCreateClusterExtensionRequest } as CreateClusterExtensionRequest;
        message.clusterId = object.clusterId ?? '';
        message.extensionSpec =
            object.extensionSpec !== undefined && object.extensionSpec !== null
                ? ExtensionSpec.fromPartial(object.extensionSpec)
                : undefined;
        return message;
    },
};

const baseCreateClusterExtensionMetadata: object = { clusterId: '', extensionName: '' };

export const CreateClusterExtensionMetadata = {
    encode(
        message: CreateClusterExtensionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionName !== '') {
            writer.uint32(18).string(message.extensionName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterExtensionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterExtensionMetadata } as CreateClusterExtensionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateClusterExtensionMetadata {
        const message = { ...baseCreateClusterExtensionMetadata } as CreateClusterExtensionMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.extensionName =
            object.extensionName !== undefined && object.extensionName !== null
                ? String(object.extensionName)
                : '';
        return message;
    },

    toJSON(message: CreateClusterExtensionMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionName !== undefined && (obj.extensionName = message.extensionName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterExtensionMetadata>, I>>(
        object: I,
    ): CreateClusterExtensionMetadata {
        const message = { ...baseCreateClusterExtensionMetadata } as CreateClusterExtensionMetadata;
        message.clusterId = object.clusterId ?? '';
        message.extensionName = object.extensionName ?? '';
        return message;
    },
};

const baseDeleteClusterExtensionRequest: object = { clusterId: '', extensionName: '' };

export const DeleteClusterExtensionRequest = {
    encode(
        message: DeleteClusterExtensionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionName !== '') {
            writer.uint32(18).string(message.extensionName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterExtensionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterExtensionRequest } as DeleteClusterExtensionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteClusterExtensionRequest {
        const message = { ...baseDeleteClusterExtensionRequest } as DeleteClusterExtensionRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.extensionName =
            object.extensionName !== undefined && object.extensionName !== null
                ? String(object.extensionName)
                : '';
        return message;
    },

    toJSON(message: DeleteClusterExtensionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionName !== undefined && (obj.extensionName = message.extensionName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteClusterExtensionRequest>, I>>(
        object: I,
    ): DeleteClusterExtensionRequest {
        const message = { ...baseDeleteClusterExtensionRequest } as DeleteClusterExtensionRequest;
        message.clusterId = object.clusterId ?? '';
        message.extensionName = object.extensionName ?? '';
        return message;
    },
};

const baseDeleteClusterExtensionMetadata: object = { clusterId: '', extensionName: '' };

export const DeleteClusterExtensionMetadata = {
    encode(
        message: DeleteClusterExtensionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionName !== '') {
            writer.uint32(18).string(message.extensionName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterExtensionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterExtensionMetadata } as DeleteClusterExtensionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteClusterExtensionMetadata {
        const message = { ...baseDeleteClusterExtensionMetadata } as DeleteClusterExtensionMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.extensionName =
            object.extensionName !== undefined && object.extensionName !== null
                ? String(object.extensionName)
                : '';
        return message;
    },

    toJSON(message: DeleteClusterExtensionMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionName !== undefined && (obj.extensionName = message.extensionName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteClusterExtensionMetadata>, I>>(
        object: I,
    ): DeleteClusterExtensionMetadata {
        const message = { ...baseDeleteClusterExtensionMetadata } as DeleteClusterExtensionMetadata;
        message.clusterId = object.clusterId ?? '';
        message.extensionName = object.extensionName ?? '';
        return message;
    },
};

const baseUpdateClusterExtensionRequest: object = { clusterId: '' };

export const UpdateClusterExtensionRequest = {
    encode(
        message: UpdateClusterExtensionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionSpec !== undefined) {
            ExtensionSpec.encode(message.extensionSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterExtensionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterExtensionRequest } as UpdateClusterExtensionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionSpec = ExtensionSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateClusterExtensionRequest {
        const message = { ...baseUpdateClusterExtensionRequest } as UpdateClusterExtensionRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.extensionSpec =
            object.extensionSpec !== undefined && object.extensionSpec !== null
                ? ExtensionSpec.fromJSON(object.extensionSpec)
                : undefined;
        return message;
    },

    toJSON(message: UpdateClusterExtensionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionSpec !== undefined &&
            (obj.extensionSpec = message.extensionSpec
                ? ExtensionSpec.toJSON(message.extensionSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterExtensionRequest>, I>>(
        object: I,
    ): UpdateClusterExtensionRequest {
        const message = { ...baseUpdateClusterExtensionRequest } as UpdateClusterExtensionRequest;
        message.clusterId = object.clusterId ?? '';
        message.extensionSpec =
            object.extensionSpec !== undefined && object.extensionSpec !== null
                ? ExtensionSpec.fromPartial(object.extensionSpec)
                : undefined;
        return message;
    },
};

const baseUpdateClusterExtensionMetadata: object = { clusterId: '', extensionName: '' };

export const UpdateClusterExtensionMetadata = {
    encode(
        message: UpdateClusterExtensionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionName !== '') {
            writer.uint32(18).string(message.extensionName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterExtensionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterExtensionMetadata } as UpdateClusterExtensionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateClusterExtensionMetadata {
        const message = { ...baseUpdateClusterExtensionMetadata } as UpdateClusterExtensionMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.extensionName =
            object.extensionName !== undefined && object.extensionName !== null
                ? String(object.extensionName)
                : '';
        return message;
    },

    toJSON(message: UpdateClusterExtensionMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionName !== undefined && (obj.extensionName = message.extensionName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterExtensionMetadata>, I>>(
        object: I,
    ): UpdateClusterExtensionMetadata {
        const message = { ...baseUpdateClusterExtensionMetadata } as UpdateClusterExtensionMetadata;
        message.clusterId = object.clusterId ?? '';
        message.extensionName = object.extensionName ?? '';
        return message;
    },
};

const baseSetClusterExtensionsRequest: object = { clusterId: '' };

export const SetClusterExtensionsRequest = {
    encode(
        message: SetClusterExtensionsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.extensionSpecs) {
            ExtensionSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetClusterExtensionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetClusterExtensionsRequest } as SetClusterExtensionsRequest;
        message.extensionSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionSpecs.push(ExtensionSpec.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetClusterExtensionsRequest {
        const message = { ...baseSetClusterExtensionsRequest } as SetClusterExtensionsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.extensionSpecs = (object.extensionSpecs ?? []).map((e: any) =>
            ExtensionSpec.fromJSON(e),
        );
        return message;
    },

    toJSON(message: SetClusterExtensionsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.extensionSpecs) {
            obj.extensionSpecs = message.extensionSpecs.map((e) =>
                e ? ExtensionSpec.toJSON(e) : undefined,
            );
        } else {
            obj.extensionSpecs = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetClusterExtensionsRequest>, I>>(
        object: I,
    ): SetClusterExtensionsRequest {
        const message = { ...baseSetClusterExtensionsRequest } as SetClusterExtensionsRequest;
        message.clusterId = object.clusterId ?? '';
        message.extensionSpecs =
            object.extensionSpecs?.map((e) => ExtensionSpec.fromPartial(e)) || [];
        return message;
    },
};

const baseSetClusterExtensionsMetadata: object = {
    clusterId: '',
    addedExtensionNames: '',
    updatedExtensionNames: '',
    deletedExtensionNames: '',
};

export const SetClusterExtensionsMetadata = {
    encode(
        message: SetClusterExtensionsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.addedExtensionNames) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.updatedExtensionNames) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.deletedExtensionNames) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetClusterExtensionsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetClusterExtensionsMetadata } as SetClusterExtensionsMetadata;
        message.addedExtensionNames = [];
        message.updatedExtensionNames = [];
        message.deletedExtensionNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.addedExtensionNames.push(reader.string());
                    break;
                case 3:
                    message.updatedExtensionNames.push(reader.string());
                    break;
                case 4:
                    message.deletedExtensionNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetClusterExtensionsMetadata {
        const message = { ...baseSetClusterExtensionsMetadata } as SetClusterExtensionsMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.addedExtensionNames = (object.addedExtensionNames ?? []).map((e: any) => String(e));
        message.updatedExtensionNames = (object.updatedExtensionNames ?? []).map((e: any) =>
            String(e),
        );
        message.deletedExtensionNames = (object.deletedExtensionNames ?? []).map((e: any) =>
            String(e),
        );
        return message;
    },

    toJSON(message: SetClusterExtensionsMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.addedExtensionNames) {
            obj.addedExtensionNames = message.addedExtensionNames.map((e) => e);
        } else {
            obj.addedExtensionNames = [];
        }
        if (message.updatedExtensionNames) {
            obj.updatedExtensionNames = message.updatedExtensionNames.map((e) => e);
        } else {
            obj.updatedExtensionNames = [];
        }
        if (message.deletedExtensionNames) {
            obj.deletedExtensionNames = message.deletedExtensionNames.map((e) => e);
        } else {
            obj.deletedExtensionNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetClusterExtensionsMetadata>, I>>(
        object: I,
    ): SetClusterExtensionsMetadata {
        const message = { ...baseSetClusterExtensionsMetadata } as SetClusterExtensionsMetadata;
        message.clusterId = object.clusterId ?? '';
        message.addedExtensionNames = object.addedExtensionNames?.map((e) => e) || [];
        message.updatedExtensionNames = object.updatedExtensionNames?.map((e) => e) || [];
        message.deletedExtensionNames = object.deletedExtensionNames?.map((e) => e) || [];
        return message;
    },
};

const baseExtensionSpec: object = { name: '', version: '' };

export const ExtensionSpec = {
    encode(message: ExtensionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExtensionSpec } as ExtensionSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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

    fromJSON(object: any): ExtensionSpec {
        const message = { ...baseExtensionSpec } as ExtensionSpec;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        return message;
    },

    toJSON(message: ExtensionSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExtensionSpec>, I>>(object: I): ExtensionSpec {
        const message = { ...baseExtensionSpec } as ExtensionSpec;
        message.name = object.name ?? '';
        message.version = object.version ?? '';
        return message;
    },
};

export const ClusterExtensionServiceService = {
    get: {
        path: '/yandex.cloud.mdb.clickhouse.v1.ClusterExtensionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterExtensionRequest) =>
            Buffer.from(GetClusterExtensionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterExtensionRequest.decode(value),
        responseSerialize: (value: ClusterExtension) =>
            Buffer.from(ClusterExtension.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ClusterExtension.decode(value),
    },
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.ClusterExtensionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterExtensionsRequest) =>
            Buffer.from(ListClusterExtensionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterExtensionsRequest.decode(value),
        responseSerialize: (value: ListClusterExtensionsResponse) =>
            Buffer.from(ListClusterExtensionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterExtensionsResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.mdb.clickhouse.v1.ClusterExtensionService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateClusterExtensionRequest) =>
            Buffer.from(CreateClusterExtensionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateClusterExtensionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.mdb.clickhouse.v1.ClusterExtensionService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterExtensionRequest) =>
            Buffer.from(DeleteClusterExtensionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterExtensionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.mdb.clickhouse.v1.ClusterExtensionService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterExtensionRequest) =>
            Buffer.from(UpdateClusterExtensionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateClusterExtensionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Set the list of cluster extensions. Not specified extensions will be deleted. */
    setExtensions: {
        path: '/yandex.cloud.mdb.clickhouse.v1.ClusterExtensionService/SetExtensions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetClusterExtensionsRequest) =>
            Buffer.from(SetClusterExtensionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetClusterExtensionsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ClusterExtensionServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetClusterExtensionRequest, ClusterExtension>;
    list: handleUnaryCall<ListClusterExtensionsRequest, ListClusterExtensionsResponse>;
    create: handleUnaryCall<CreateClusterExtensionRequest, Operation>;
    delete: handleUnaryCall<DeleteClusterExtensionRequest, Operation>;
    update: handleUnaryCall<UpdateClusterExtensionRequest, Operation>;
    /** Set the list of cluster extensions. Not specified extensions will be deleted. */
    setExtensions: handleUnaryCall<SetClusterExtensionsRequest, Operation>;
}

export interface ClusterExtensionServiceClient extends Client {
    get(
        request: GetClusterExtensionRequest,
        callback: (error: ServiceError | null, response: ClusterExtension) => void,
    ): ClientUnaryCall;
    get(
        request: GetClusterExtensionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ClusterExtension) => void,
    ): ClientUnaryCall;
    get(
        request: GetClusterExtensionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ClusterExtension) => void,
    ): ClientUnaryCall;
    list(
        request: ListClusterExtensionsRequest,
        callback: (error: ServiceError | null, response: ListClusterExtensionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListClusterExtensionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterExtensionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListClusterExtensionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterExtensionsResponse) => void,
    ): ClientUnaryCall;
    create(
        request: CreateClusterExtensionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateClusterExtensionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateClusterExtensionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterExtensionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterExtensionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterExtensionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateClusterExtensionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateClusterExtensionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateClusterExtensionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Set the list of cluster extensions. Not specified extensions will be deleted. */
    setExtensions(
        request: SetClusterExtensionsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setExtensions(
        request: SetClusterExtensionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setExtensions(
        request: SetClusterExtensionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ClusterExtensionServiceClient = makeGenericClientConstructor(
    ClusterExtensionServiceService,
    'yandex.cloud.mdb.clickhouse.v1.ClusterExtensionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ClusterExtensionServiceClient;
    service: typeof ClusterExtensionServiceService;
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
