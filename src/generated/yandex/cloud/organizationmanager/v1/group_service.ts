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
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Group } from '../../../../yandex/cloud/organizationmanager/v1/group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

export interface GetGroupRequest {
    /**
     * ID of the Group resource to return.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
}

export interface ListGroupsRequest {
    /**
     * ID of the organization to list groups in.
     * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListGroupsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Group.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListGroupsResponse {
    /** List of Group resources. */
    groups: Group[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListGroupsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateGroupRequest {
    /**
     * ID of the organization to create a group in.
     * To get the organization ID, use a [yandex.cloud.organizationmanager.v1.OrganizationService.List] request.
     */
    organizationId: string;
    /**
     * Name of the group.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the group. */
    description: string;
}

export interface CreateGroupMetadata {
    /** ID of the group that is being created. */
    groupId: string;
}

export interface UpdateGroupRequest {
    /**
     * ID of the Group resource to update.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
    /** Field mask that specifies which fields of the Group resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the group.
     * The name must be unique within the organization.
     */
    name: string;
    /** Description of the group. */
    description: string;
}

export interface UpdateGroupMetadata {
    /** ID of the Group resource that is being updated. */
    groupId: string;
}

export interface DeleteGroupRequest {
    /**
     * ID of the group to delete.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
}

export interface DeleteGroupMetadata {
    /** ID of the group that is being deleted. */
    groupId: string;
}

export interface ListGroupOperationsRequest {
    /** ID of the Group resource to list operations for. */
    groupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListGroupOperationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListGroupOperationsResponse {
    /** List of operations for the specified group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListGroupMembersRequest {
    /** ID of the Group resource to list members for. */
    groupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListGroupMembersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListGroupMembersResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListGroupMembersResponse {
    /** List of members for the specified group. */
    members: GroupMember[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListGroupMembersRequest.page_size], use the [next_page_token] as the value
     * for the [ListGroupMembersRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface GroupMember {
    /** ID of the subject. */
    subjectId: string;
    /**
     * Type of the subject.
     *
     * It can contain one of the following values:
     * * `userAccount`: An account on Yandex, added to Yandex Cloud.
     * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
     */
    subjectType: string;
}

export interface UpdateGroupMembersRequest {
    /**
     * ID of the group to update.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
    /** Updates to group members. */
    memberDeltas: MemberDelta[];
}

export interface UpdateGroupMembersMetadata {
    /** ID of the group that is being updated. */
    groupId: string;
}

export interface MemberDelta {
    /** The action that is being performed on a group member. */
    action: MemberDelta_MemberAction;
    /**
     * ID of the subject that is being added or removed from a group.
     *
     * Subject type can be one of following values:
     * * `userAccount`: An account on Yandex, added to Yandex Cloud.
     * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
     */
    subjectId: string;
}

export enum MemberDelta_MemberAction {
    MEMBER_ACTION_UNSPECIFIED = 0,
    /** ADD - Addition of a group member. */
    ADD = 1,
    /** REMOVE - Removal of a group member. */
    REMOVE = 2,
    UNRECOGNIZED = -1,
}

export function memberDelta_MemberActionFromJSON(object: any): MemberDelta_MemberAction {
    switch (object) {
        case 0:
        case 'MEMBER_ACTION_UNSPECIFIED':
            return MemberDelta_MemberAction.MEMBER_ACTION_UNSPECIFIED;
        case 1:
        case 'ADD':
            return MemberDelta_MemberAction.ADD;
        case 2:
        case 'REMOVE':
            return MemberDelta_MemberAction.REMOVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MemberDelta_MemberAction.UNRECOGNIZED;
    }
}

export function memberDelta_MemberActionToJSON(object: MemberDelta_MemberAction): string {
    switch (object) {
        case MemberDelta_MemberAction.MEMBER_ACTION_UNSPECIFIED:
            return 'MEMBER_ACTION_UNSPECIFIED';
        case MemberDelta_MemberAction.ADD:
            return 'ADD';
        case MemberDelta_MemberAction.REMOVE:
            return 'REMOVE';
        default:
            return 'UNKNOWN';
    }
}

const baseGetGroupRequest: object = { groupId: '' };

export const GetGroupRequest = {
    encode(message: GetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGroupRequest } as GetGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetGroupRequest {
        const message = { ...baseGetGroupRequest } as GetGroupRequest;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        return message;
    },

    toJSON(message: GetGroupRequest): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetGroupRequest>, I>>(object: I): GetGroupRequest {
        const message = { ...baseGetGroupRequest } as GetGroupRequest;
        message.groupId = object.groupId ?? '';
        return message;
    },
};

const baseListGroupsRequest: object = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListGroupsRequest = {
    encode(message: ListGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGroupsRequest } as ListGroupsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListGroupsRequest {
        const message = { ...baseListGroupsRequest } as ListGroupsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListGroupsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGroupsRequest>, I>>(object: I): ListGroupsRequest {
        const message = { ...baseListGroupsRequest } as ListGroupsRequest;
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListGroupsResponse: object = { nextPageToken: '' };

export const ListGroupsResponse = {
    encode(message: ListGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.groups) {
            Group.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGroupsResponse } as ListGroupsResponse;
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(Group.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListGroupsResponse {
        const message = { ...baseListGroupsResponse } as ListGroupsResponse;
        message.groups = (object.groups ?? []).map((e: any) => Group.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListGroupsResponse): unknown {
        const obj: any = {};
        if (message.groups) {
            obj.groups = message.groups.map((e) => (e ? Group.toJSON(e) : undefined));
        } else {
            obj.groups = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGroupsResponse>, I>>(
        object: I,
    ): ListGroupsResponse {
        const message = { ...baseListGroupsResponse } as ListGroupsResponse;
        message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateGroupRequest: object = { organizationId: '', name: '', description: '' };

export const CreateGroupRequest = {
    encode(message: CreateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGroupRequest } as CreateGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateGroupRequest {
        const message = { ...baseCreateGroupRequest } as CreateGroupRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: CreateGroupRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(
        object: I,
    ): CreateGroupRequest {
        const message = { ...baseCreateGroupRequest } as CreateGroupRequest;
        message.organizationId = object.organizationId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseCreateGroupMetadata: object = { groupId: '' };

export const CreateGroupMetadata = {
    encode(message: CreateGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGroupMetadata } as CreateGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateGroupMetadata {
        const message = { ...baseCreateGroupMetadata } as CreateGroupMetadata;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        return message;
    },

    toJSON(message: CreateGroupMetadata): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateGroupMetadata>, I>>(
        object: I,
    ): CreateGroupMetadata {
        const message = { ...baseCreateGroupMetadata } as CreateGroupMetadata;
        message.groupId = object.groupId ?? '';
        return message;
    },
};

const baseUpdateGroupRequest: object = { groupId: '', name: '', description: '' };

export const UpdateGroupRequest = {
    encode(message: UpdateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateGroupRequest } as UpdateGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateGroupRequest {
        const message = { ...baseUpdateGroupRequest } as UpdateGroupRequest;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: UpdateGroupRequest): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateGroupRequest>, I>>(
        object: I,
    ): UpdateGroupRequest {
        const message = { ...baseUpdateGroupRequest } as UpdateGroupRequest;
        message.groupId = object.groupId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseUpdateGroupMetadata: object = { groupId: '' };

export const UpdateGroupMetadata = {
    encode(message: UpdateGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateGroupMetadata } as UpdateGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateGroupMetadata {
        const message = { ...baseUpdateGroupMetadata } as UpdateGroupMetadata;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        return message;
    },

    toJSON(message: UpdateGroupMetadata): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateGroupMetadata>, I>>(
        object: I,
    ): UpdateGroupMetadata {
        const message = { ...baseUpdateGroupMetadata } as UpdateGroupMetadata;
        message.groupId = object.groupId ?? '';
        return message;
    },
};

const baseDeleteGroupRequest: object = { groupId: '' };

export const DeleteGroupRequest = {
    encode(message: DeleteGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteGroupRequest } as DeleteGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteGroupRequest {
        const message = { ...baseDeleteGroupRequest } as DeleteGroupRequest;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        return message;
    },

    toJSON(message: DeleteGroupRequest): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteGroupRequest>, I>>(
        object: I,
    ): DeleteGroupRequest {
        const message = { ...baseDeleteGroupRequest } as DeleteGroupRequest;
        message.groupId = object.groupId ?? '';
        return message;
    },
};

const baseDeleteGroupMetadata: object = { groupId: '' };

export const DeleteGroupMetadata = {
    encode(message: DeleteGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteGroupMetadata } as DeleteGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteGroupMetadata {
        const message = { ...baseDeleteGroupMetadata } as DeleteGroupMetadata;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        return message;
    },

    toJSON(message: DeleteGroupMetadata): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteGroupMetadata>, I>>(
        object: I,
    ): DeleteGroupMetadata {
        const message = { ...baseDeleteGroupMetadata } as DeleteGroupMetadata;
        message.groupId = object.groupId ?? '';
        return message;
    },
};

const baseListGroupOperationsRequest: object = { groupId: '', pageSize: 0, pageToken: '' };

export const ListGroupOperationsRequest = {
    encode(
        message: ListGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGroupOperationsRequest } as ListGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
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

    fromJSON(object: any): ListGroupOperationsRequest {
        const message = { ...baseListGroupOperationsRequest } as ListGroupOperationsRequest;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListGroupOperationsRequest): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGroupOperationsRequest>, I>>(
        object: I,
    ): ListGroupOperationsRequest {
        const message = { ...baseListGroupOperationsRequest } as ListGroupOperationsRequest;
        message.groupId = object.groupId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListGroupOperationsResponse: object = { nextPageToken: '' };

export const ListGroupOperationsResponse = {
    encode(
        message: ListGroupOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGroupOperationsResponse } as ListGroupOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListGroupOperationsResponse {
        const message = { ...baseListGroupOperationsResponse } as ListGroupOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListGroupOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGroupOperationsResponse>, I>>(
        object: I,
    ): ListGroupOperationsResponse {
        const message = { ...baseListGroupOperationsResponse } as ListGroupOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListGroupMembersRequest: object = { groupId: '', pageSize: 0, pageToken: '' };

export const ListGroupMembersRequest = {
    encode(message: ListGroupMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupMembersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGroupMembersRequest } as ListGroupMembersRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
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

    fromJSON(object: any): ListGroupMembersRequest {
        const message = { ...baseListGroupMembersRequest } as ListGroupMembersRequest;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListGroupMembersRequest): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGroupMembersRequest>, I>>(
        object: I,
    ): ListGroupMembersRequest {
        const message = { ...baseListGroupMembersRequest } as ListGroupMembersRequest;
        message.groupId = object.groupId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListGroupMembersResponse: object = { nextPageToken: '' };

export const ListGroupMembersResponse = {
    encode(
        message: ListGroupMembersResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.members) {
            GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupMembersResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGroupMembersResponse } as ListGroupMembersResponse;
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(GroupMember.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListGroupMembersResponse {
        const message = { ...baseListGroupMembersResponse } as ListGroupMembersResponse;
        message.members = (object.members ?? []).map((e: any) => GroupMember.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListGroupMembersResponse): unknown {
        const obj: any = {};
        if (message.members) {
            obj.members = message.members.map((e) => (e ? GroupMember.toJSON(e) : undefined));
        } else {
            obj.members = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListGroupMembersResponse>, I>>(
        object: I,
    ): ListGroupMembersResponse {
        const message = { ...baseListGroupMembersResponse } as ListGroupMembersResponse;
        message.members = object.members?.map((e) => GroupMember.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGroupMember: object = { subjectId: '', subjectType: '' };

export const GroupMember = {
    encode(message: GroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subjectId !== '') {
            writer.uint32(10).string(message.subjectId);
        }
        if (message.subjectType !== '') {
            writer.uint32(18).string(message.subjectType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupMember } as GroupMember;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectId = reader.string();
                    break;
                case 2:
                    message.subjectType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupMember {
        const message = { ...baseGroupMember } as GroupMember;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.subjectType =
            object.subjectType !== undefined && object.subjectType !== null
                ? String(object.subjectType)
                : '';
        return message;
    },

    toJSON(message: GroupMember): unknown {
        const obj: any = {};
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.subjectType !== undefined && (obj.subjectType = message.subjectType);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupMember>, I>>(object: I): GroupMember {
        const message = { ...baseGroupMember } as GroupMember;
        message.subjectId = object.subjectId ?? '';
        message.subjectType = object.subjectType ?? '';
        return message;
    },
};

const baseUpdateGroupMembersRequest: object = { groupId: '' };

export const UpdateGroupMembersRequest = {
    encode(
        message: UpdateGroupMembersRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        for (const v of message.memberDeltas) {
            MemberDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMembersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateGroupMembersRequest } as UpdateGroupMembersRequest;
        message.memberDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.memberDeltas.push(MemberDelta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateGroupMembersRequest {
        const message = { ...baseUpdateGroupMembersRequest } as UpdateGroupMembersRequest;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.memberDeltas = (object.memberDeltas ?? []).map((e: any) => MemberDelta.fromJSON(e));
        return message;
    },

    toJSON(message: UpdateGroupMembersRequest): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        if (message.memberDeltas) {
            obj.memberDeltas = message.memberDeltas.map((e) =>
                e ? MemberDelta.toJSON(e) : undefined,
            );
        } else {
            obj.memberDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateGroupMembersRequest>, I>>(
        object: I,
    ): UpdateGroupMembersRequest {
        const message = { ...baseUpdateGroupMembersRequest } as UpdateGroupMembersRequest;
        message.groupId = object.groupId ?? '';
        message.memberDeltas = object.memberDeltas?.map((e) => MemberDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateGroupMembersMetadata: object = { groupId: '' };

export const UpdateGroupMembersMetadata = {
    encode(
        message: UpdateGroupMembersMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMembersMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateGroupMembersMetadata } as UpdateGroupMembersMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateGroupMembersMetadata {
        const message = { ...baseUpdateGroupMembersMetadata } as UpdateGroupMembersMetadata;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        return message;
    },

    toJSON(message: UpdateGroupMembersMetadata): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateGroupMembersMetadata>, I>>(
        object: I,
    ): UpdateGroupMembersMetadata {
        const message = { ...baseUpdateGroupMembersMetadata } as UpdateGroupMembersMetadata;
        message.groupId = object.groupId ?? '';
        return message;
    },
};

const baseMemberDelta: object = { action: 0, subjectId: '' };

export const MemberDelta = {
    encode(message: MemberDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MemberDelta {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMemberDelta } as MemberDelta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.subjectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MemberDelta {
        const message = { ...baseMemberDelta } as MemberDelta;
        message.action =
            object.action !== undefined && object.action !== null
                ? memberDelta_MemberActionFromJSON(object.action)
                : 0;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        return message;
    },

    toJSON(message: MemberDelta): unknown {
        const obj: any = {};
        message.action !== undefined &&
            (obj.action = memberDelta_MemberActionToJSON(message.action));
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MemberDelta>, I>>(object: I): MemberDelta {
        const message = { ...baseMemberDelta } as MemberDelta;
        message.action = object.action ?? 0;
        message.subjectId = object.subjectId ?? '';
        return message;
    },
};

/** A set of methods for managing groups. */
export const GroupServiceService = {
    /**
     * Returns the specified Group resource.
     *
     * To get the list of available Group resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetGroupRequest) =>
            Buffer.from(GetGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetGroupRequest.decode(value),
        responseSerialize: (value: Group) => Buffer.from(Group.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Group.decode(value),
    },
    /** Retrieves the list of group resources. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListGroupsRequest) =>
            Buffer.from(ListGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListGroupsRequest.decode(value),
        responseSerialize: (value: ListGroupsResponse) =>
            Buffer.from(ListGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListGroupsResponse.decode(value),
    },
    /** Creates a group in the specified organization. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateGroupRequest) =>
            Buffer.from(CreateGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified group. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateGroupRequest) =>
            Buffer.from(UpdateGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified group. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteGroupRequest) =>
            Buffer.from(DeleteGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified group. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListGroupOperationsRequest) =>
            Buffer.from(ListGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListGroupOperationsResponse) =>
            Buffer.from(ListGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListGroupOperationsResponse.decode(value),
    },
    /** List group active members. */
    listMembers: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/ListMembers',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListGroupMembersRequest) =>
            Buffer.from(ListGroupMembersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListGroupMembersRequest.decode(value),
        responseSerialize: (value: ListGroupMembersResponse) =>
            Buffer.from(ListGroupMembersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListGroupMembersResponse.decode(value),
    },
    /** Update group members. */
    updateMembers: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/UpdateMembers',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateGroupMembersRequest) =>
            Buffer.from(UpdateGroupMembersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateGroupMembersRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists access bindings for the specified group. */
    listAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified group. */
    setAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified group. */
    updateAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface GroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Group resource.
     *
     * To get the list of available Group resources, make a [List] request.
     */
    get: handleUnaryCall<GetGroupRequest, Group>;
    /** Retrieves the list of group resources. */
    list: handleUnaryCall<ListGroupsRequest, ListGroupsResponse>;
    /** Creates a group in the specified organization. */
    create: handleUnaryCall<CreateGroupRequest, Operation>;
    /** Updates the specified group. */
    update: handleUnaryCall<UpdateGroupRequest, Operation>;
    /** Deletes the specified group. */
    delete: handleUnaryCall<DeleteGroupRequest, Operation>;
    /** Lists operations for the specified group. */
    listOperations: handleUnaryCall<ListGroupOperationsRequest, ListGroupOperationsResponse>;
    /** List group active members. */
    listMembers: handleUnaryCall<ListGroupMembersRequest, ListGroupMembersResponse>;
    /** Update group members. */
    updateMembers: handleUnaryCall<UpdateGroupMembersRequest, Operation>;
    /** Lists access bindings for the specified group. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified group. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface GroupServiceClient extends Client {
    /**
     * Returns the specified Group resource.
     *
     * To get the list of available Group resources, make a [List] request.
     */
    get(
        request: GetGroupRequest,
        callback: (error: ServiceError | null, response: Group) => void,
    ): ClientUnaryCall;
    get(
        request: GetGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Group) => void,
    ): ClientUnaryCall;
    get(
        request: GetGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Group) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of group resources. */
    list(
        request: ListGroupsRequest,
        callback: (error: ServiceError | null, response: ListGroupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListGroupsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListGroupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListGroupsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a group in the specified organization. */
    create(
        request: CreateGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified group. */
    update(
        request: UpdateGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified group. */
    delete(
        request: DeleteGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified group. */
    listOperations(
        request: ListGroupOperationsRequest,
        callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListGroupOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListGroupOperationsResponse) => void,
    ): ClientUnaryCall;
    /** List group active members. */
    listMembers(
        request: ListGroupMembersRequest,
        callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void,
    ): ClientUnaryCall;
    listMembers(
        request: ListGroupMembersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void,
    ): ClientUnaryCall;
    listMembers(
        request: ListGroupMembersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListGroupMembersResponse) => void,
    ): ClientUnaryCall;
    /** Update group members. */
    updateMembers(
        request: UpdateGroupMembersRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateMembers(
        request: UpdateGroupMembersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateMembers(
        request: UpdateGroupMembersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified group. */
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
    /** Sets access bindings for the specified group. */
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
    /** Updates access bindings for the specified group. */
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
}

export const GroupServiceClient = makeGenericClientConstructor(
    GroupServiceService,
    'yandex.cloud.organizationmanager.v1.GroupService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): GroupServiceClient;
    service: typeof GroupServiceService;
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
