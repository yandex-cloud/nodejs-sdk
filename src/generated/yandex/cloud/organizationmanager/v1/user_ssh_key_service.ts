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
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { UserSshKey } from '../../../../yandex/cloud/organizationmanager/v1/user_ssh_key';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

export interface GetUserSshKeyRequest {
    $type: 'yandex.cloud.organizationmanager.v1.GetUserSshKeyRequest';
    userSshKeyId: string;
}

export interface ListUserSshKeysRequest {
    $type: 'yandex.cloud.organizationmanager.v1.ListUserSshKeysRequest';
    organizationId: string;
    /** if empty, list all organization keys */
    subjectId: string;
    pageSize: number;
    pageToken: string;
}

export interface ListUserSshKeysResponse {
    $type: 'yandex.cloud.organizationmanager.v1.ListUserSshKeysResponse';
    sshKeys: UserSshKey[];
    nextPageToken: string;
}

export interface CreateUserSshKeyRequest {
    $type: 'yandex.cloud.organizationmanager.v1.CreateUserSshKeyRequest';
    organizationId: string;
    subjectId: string;
    name: string;
    data: string;
    expiresAt?: Date;
}

export interface CreateUserSshKeyMetadata {
    $type: 'yandex.cloud.organizationmanager.v1.CreateUserSshKeyMetadata';
    userSshKeyId: string;
    organizationId: string;
}

export interface UpdateUserSshKeyRequest {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateUserSshKeyRequest';
    userSshKeyId: string;
    name: string;
    updateMask?: FieldMask;
    expiresAt?: Date;
}

export interface UpdateUserSshKeyMetadata {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateUserSshKeyMetadata';
    userSshKeyId: string;
}

export interface DeleteUserSshKeyRequest {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteUserSshKeyRequest';
    userSshKeyId: string;
}

export interface DeleteUserSshKeyMetadata {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteUserSshKeyMetadata';
    userSshKeyId: string;
}

const baseGetUserSshKeyRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.GetUserSshKeyRequest',
    userSshKeyId: '',
};

export const GetUserSshKeyRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.GetUserSshKeyRequest' as const,

    encode(message: GetUserSshKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userSshKeyId !== '') {
            writer.uint32(10).string(message.userSshKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserSshKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserSshKeyRequest } as GetUserSshKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userSshKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUserSshKeyRequest {
        const message = { ...baseGetUserSshKeyRequest } as GetUserSshKeyRequest;
        message.userSshKeyId =
            object.userSshKeyId !== undefined && object.userSshKeyId !== null
                ? String(object.userSshKeyId)
                : '';
        return message;
    },

    toJSON(message: GetUserSshKeyRequest): unknown {
        const obj: any = {};
        message.userSshKeyId !== undefined && (obj.userSshKeyId = message.userSshKeyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUserSshKeyRequest>, I>>(
        object: I,
    ): GetUserSshKeyRequest {
        const message = { ...baseGetUserSshKeyRequest } as GetUserSshKeyRequest;
        message.userSshKeyId = object.userSshKeyId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetUserSshKeyRequest.$type, GetUserSshKeyRequest);

const baseListUserSshKeysRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.ListUserSshKeysRequest',
    organizationId: '',
    subjectId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListUserSshKeysRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.ListUserSshKeysRequest' as const,

    encode(message: ListUserSshKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserSshKeysRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUserSshKeysRequest } as ListUserSshKeysRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.subjectId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUserSshKeysRequest {
        const message = { ...baseListUserSshKeysRequest } as ListUserSshKeysRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListUserSshKeysRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUserSshKeysRequest>, I>>(
        object: I,
    ): ListUserSshKeysRequest {
        const message = { ...baseListUserSshKeysRequest } as ListUserSshKeysRequest;
        message.organizationId = object.organizationId ?? '';
        message.subjectId = object.subjectId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListUserSshKeysRequest.$type, ListUserSshKeysRequest);

const baseListUserSshKeysResponse: object = {
    $type: 'yandex.cloud.organizationmanager.v1.ListUserSshKeysResponse',
    nextPageToken: '',
};

export const ListUserSshKeysResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.ListUserSshKeysResponse' as const,

    encode(message: ListUserSshKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.sshKeys) {
            UserSshKey.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserSshKeysResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUserSshKeysResponse } as ListUserSshKeysResponse;
        message.sshKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sshKeys.push(UserSshKey.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListUserSshKeysResponse {
        const message = { ...baseListUserSshKeysResponse } as ListUserSshKeysResponse;
        message.sshKeys = (object.sshKeys ?? []).map((e: any) => UserSshKey.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListUserSshKeysResponse): unknown {
        const obj: any = {};
        if (message.sshKeys) {
            obj.sshKeys = message.sshKeys.map((e) => (e ? UserSshKey.toJSON(e) : undefined));
        } else {
            obj.sshKeys = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUserSshKeysResponse>, I>>(
        object: I,
    ): ListUserSshKeysResponse {
        const message = { ...baseListUserSshKeysResponse } as ListUserSshKeysResponse;
        message.sshKeys = object.sshKeys?.map((e) => UserSshKey.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListUserSshKeysResponse.$type, ListUserSshKeysResponse);

const baseCreateUserSshKeyRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.CreateUserSshKeyRequest',
    organizationId: '',
    subjectId: '',
    name: '',
    data: '',
};

export const CreateUserSshKeyRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.CreateUserSshKeyRequest' as const,

    encode(message: CreateUserSshKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.data !== '') {
            writer.uint32(34).string(message.data);
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserSshKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserSshKeyRequest } as CreateUserSshKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.subjectId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.data = reader.string();
                    break;
                case 5:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateUserSshKeyRequest {
        const message = { ...baseCreateUserSshKeyRequest } as CreateUserSshKeyRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.data = object.data !== undefined && object.data !== null ? String(object.data) : '';
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        return message;
    },

    toJSON(message: CreateUserSshKeyRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.name !== undefined && (obj.name = message.name);
        message.data !== undefined && (obj.data = message.data);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateUserSshKeyRequest>, I>>(
        object: I,
    ): CreateUserSshKeyRequest {
        const message = { ...baseCreateUserSshKeyRequest } as CreateUserSshKeyRequest;
        message.organizationId = object.organizationId ?? '';
        message.subjectId = object.subjectId ?? '';
        message.name = object.name ?? '';
        message.data = object.data ?? '';
        message.expiresAt = object.expiresAt ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateUserSshKeyRequest.$type, CreateUserSshKeyRequest);

const baseCreateUserSshKeyMetadata: object = {
    $type: 'yandex.cloud.organizationmanager.v1.CreateUserSshKeyMetadata',
    userSshKeyId: '',
    organizationId: '',
};

export const CreateUserSshKeyMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.CreateUserSshKeyMetadata' as const,

    encode(
        message: CreateUserSshKeyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userSshKeyId !== '') {
            writer.uint32(10).string(message.userSshKeyId);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserSshKeyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserSshKeyMetadata } as CreateUserSshKeyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userSshKeyId = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateUserSshKeyMetadata {
        const message = { ...baseCreateUserSshKeyMetadata } as CreateUserSshKeyMetadata;
        message.userSshKeyId =
            object.userSshKeyId !== undefined && object.userSshKeyId !== null
                ? String(object.userSshKeyId)
                : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        return message;
    },

    toJSON(message: CreateUserSshKeyMetadata): unknown {
        const obj: any = {};
        message.userSshKeyId !== undefined && (obj.userSshKeyId = message.userSshKeyId);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateUserSshKeyMetadata>, I>>(
        object: I,
    ): CreateUserSshKeyMetadata {
        const message = { ...baseCreateUserSshKeyMetadata } as CreateUserSshKeyMetadata;
        message.userSshKeyId = object.userSshKeyId ?? '';
        message.organizationId = object.organizationId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateUserSshKeyMetadata.$type, CreateUserSshKeyMetadata);

const baseUpdateUserSshKeyRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateUserSshKeyRequest',
    userSshKeyId: '',
    name: '',
};

export const UpdateUserSshKeyRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateUserSshKeyRequest' as const,

    encode(message: UpdateUserSshKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userSshKeyId !== '') {
            writer.uint32(10).string(message.userSshKeyId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserSshKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserSshKeyRequest } as UpdateUserSshKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userSshKeyId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
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

    fromJSON(object: any): UpdateUserSshKeyRequest {
        const message = { ...baseUpdateUserSshKeyRequest } as UpdateUserSshKeyRequest;
        message.userSshKeyId =
            object.userSshKeyId !== undefined && object.userSshKeyId !== null
                ? String(object.userSshKeyId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        return message;
    },

    toJSON(message: UpdateUserSshKeyRequest): unknown {
        const obj: any = {};
        message.userSshKeyId !== undefined && (obj.userSshKeyId = message.userSshKeyId);
        message.name !== undefined && (obj.name = message.name);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateUserSshKeyRequest>, I>>(
        object: I,
    ): UpdateUserSshKeyRequest {
        const message = { ...baseUpdateUserSshKeyRequest } as UpdateUserSshKeyRequest;
        message.userSshKeyId = object.userSshKeyId ?? '';
        message.name = object.name ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.expiresAt = object.expiresAt ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateUserSshKeyRequest.$type, UpdateUserSshKeyRequest);

const baseUpdateUserSshKeyMetadata: object = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateUserSshKeyMetadata',
    userSshKeyId: '',
};

export const UpdateUserSshKeyMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateUserSshKeyMetadata' as const,

    encode(
        message: UpdateUserSshKeyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userSshKeyId !== '') {
            writer.uint32(10).string(message.userSshKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserSshKeyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserSshKeyMetadata } as UpdateUserSshKeyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userSshKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateUserSshKeyMetadata {
        const message = { ...baseUpdateUserSshKeyMetadata } as UpdateUserSshKeyMetadata;
        message.userSshKeyId =
            object.userSshKeyId !== undefined && object.userSshKeyId !== null
                ? String(object.userSshKeyId)
                : '';
        return message;
    },

    toJSON(message: UpdateUserSshKeyMetadata): unknown {
        const obj: any = {};
        message.userSshKeyId !== undefined && (obj.userSshKeyId = message.userSshKeyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateUserSshKeyMetadata>, I>>(
        object: I,
    ): UpdateUserSshKeyMetadata {
        const message = { ...baseUpdateUserSshKeyMetadata } as UpdateUserSshKeyMetadata;
        message.userSshKeyId = object.userSshKeyId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateUserSshKeyMetadata.$type, UpdateUserSshKeyMetadata);

const baseDeleteUserSshKeyRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteUserSshKeyRequest',
    userSshKeyId: '',
};

export const DeleteUserSshKeyRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteUserSshKeyRequest' as const,

    encode(message: DeleteUserSshKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userSshKeyId !== '') {
            writer.uint32(10).string(message.userSshKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserSshKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserSshKeyRequest } as DeleteUserSshKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userSshKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserSshKeyRequest {
        const message = { ...baseDeleteUserSshKeyRequest } as DeleteUserSshKeyRequest;
        message.userSshKeyId =
            object.userSshKeyId !== undefined && object.userSshKeyId !== null
                ? String(object.userSshKeyId)
                : '';
        return message;
    },

    toJSON(message: DeleteUserSshKeyRequest): unknown {
        const obj: any = {};
        message.userSshKeyId !== undefined && (obj.userSshKeyId = message.userSshKeyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteUserSshKeyRequest>, I>>(
        object: I,
    ): DeleteUserSshKeyRequest {
        const message = { ...baseDeleteUserSshKeyRequest } as DeleteUserSshKeyRequest;
        message.userSshKeyId = object.userSshKeyId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteUserSshKeyRequest.$type, DeleteUserSshKeyRequest);

const baseDeleteUserSshKeyMetadata: object = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteUserSshKeyMetadata',
    userSshKeyId: '',
};

export const DeleteUserSshKeyMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteUserSshKeyMetadata' as const,

    encode(
        message: DeleteUserSshKeyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userSshKeyId !== '') {
            writer.uint32(10).string(message.userSshKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserSshKeyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserSshKeyMetadata } as DeleteUserSshKeyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userSshKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserSshKeyMetadata {
        const message = { ...baseDeleteUserSshKeyMetadata } as DeleteUserSshKeyMetadata;
        message.userSshKeyId =
            object.userSshKeyId !== undefined && object.userSshKeyId !== null
                ? String(object.userSshKeyId)
                : '';
        return message;
    },

    toJSON(message: DeleteUserSshKeyMetadata): unknown {
        const obj: any = {};
        message.userSshKeyId !== undefined && (obj.userSshKeyId = message.userSshKeyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteUserSshKeyMetadata>, I>>(
        object: I,
    ): DeleteUserSshKeyMetadata {
        const message = { ...baseDeleteUserSshKeyMetadata } as DeleteUserSshKeyMetadata;
        message.userSshKeyId = object.userSshKeyId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteUserSshKeyMetadata.$type, DeleteUserSshKeyMetadata);

export const UserSshKeyServiceService = {
    get: {
        path: '/yandex.cloud.organizationmanager.v1.UserSshKeyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUserSshKeyRequest) =>
            Buffer.from(GetUserSshKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUserSshKeyRequest.decode(value),
        responseSerialize: (value: UserSshKey) => Buffer.from(UserSshKey.encode(value).finish()),
        responseDeserialize: (value: Buffer) => UserSshKey.decode(value),
    },
    list: {
        path: '/yandex.cloud.organizationmanager.v1.UserSshKeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUserSshKeysRequest) =>
            Buffer.from(ListUserSshKeysRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUserSshKeysRequest.decode(value),
        responseSerialize: (value: ListUserSshKeysResponse) =>
            Buffer.from(ListUserSshKeysResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListUserSshKeysResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.organizationmanager.v1.UserSshKeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateUserSshKeyRequest) =>
            Buffer.from(CreateUserSshKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateUserSshKeyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.organizationmanager.v1.UserSshKeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateUserSshKeyRequest) =>
            Buffer.from(UpdateUserSshKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateUserSshKeyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.UserSshKeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteUserSshKeyRequest) =>
            Buffer.from(DeleteUserSshKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteUserSshKeyRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface UserSshKeyServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetUserSshKeyRequest, UserSshKey>;
    list: handleUnaryCall<ListUserSshKeysRequest, ListUserSshKeysResponse>;
    create: handleUnaryCall<CreateUserSshKeyRequest, Operation>;
    update: handleUnaryCall<UpdateUserSshKeyRequest, Operation>;
    delete: handleUnaryCall<DeleteUserSshKeyRequest, Operation>;
}

export interface UserSshKeyServiceClient extends Client {
    get(
        request: GetUserSshKeyRequest,
        callback: (error: ServiceError | null, response: UserSshKey) => void,
    ): ClientUnaryCall;
    get(
        request: GetUserSshKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: UserSshKey) => void,
    ): ClientUnaryCall;
    get(
        request: GetUserSshKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UserSshKey) => void,
    ): ClientUnaryCall;
    list(
        request: ListUserSshKeysRequest,
        callback: (error: ServiceError | null, response: ListUserSshKeysResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListUserSshKeysRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListUserSshKeysResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListUserSshKeysRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListUserSshKeysResponse) => void,
    ): ClientUnaryCall;
    create(
        request: CreateUserSshKeyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateUserSshKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateUserSshKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateUserSshKeyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateUserSshKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateUserSshKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteUserSshKeyRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteUserSshKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteUserSshKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const UserSshKeyServiceClient = makeGenericClientConstructor(
    UserSshKeyServiceService,
    'yandex.cloud.organizationmanager.v1.UserSshKeyService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): UserSshKeyServiceClient;
    service: typeof UserSshKeyServiceService;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
