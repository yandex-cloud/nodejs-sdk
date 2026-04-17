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
import { Group } from './group';
import { Operation } from '../../operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../access/access';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

export interface GetGroupRequest {
    /**
     * ID of the Group resource to return.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
}

export interface ResolveExternalGroupRequest {
    /**
     * Id of the subject container that external group belongs to
     * To get subject container, use a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request
     * or [yandex.cloud.organizationmanager.v1.idp.UserpoolService.List] request.
     */
    subjectContainerId: string;
    /** Id of the group from external system */
    externalId: string;
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

export interface ListExternalGroupsRequest {
    /**
     * Id of the subject container that external group belongs to.
     * To get subject container, use a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request
     * or [yandex.cloud.organizationmanager.v1.idp.UserpoolService.List] request.
     */
    subjectContainerId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListExternalGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListExternalGroupsResponse.next_page_token]
     * returned by a previous list external request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The fields name or id. Currently you can use filtering only on the [Group.name] or [Group.id] fields.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListExternalGroupsResponse {
    /** List of External group resources. */
    groups: Group[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListExternalGroupsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListExternalGroupsRequest.page_token] query parameter
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
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface CreateGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateGroupMetadata {
    /** ID of the group that is being created. */
    groupId: string;
}

export interface CreateExternalGroupRequest {
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
    /**
     * Id of the subject container that external group belongs to.
     * Combination of subject_container_id and external_id must be unique.
     * To get subject container, use a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request
     * or [yandex.cloud.organizationmanager.v1.idp.UserpoolService.List] request.
     */
    subjectContainerId: string;
    /**
     * Id of the group from external system.
     * Combination of subject_container_id and external_id must be unique
     */
    externalId: string;
    /** If true, then creator of group will be assigned to role that allows modification of group as external group. */
    makeEditor: boolean;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface CreateExternalGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateExternalGroupMetadata {
    /** ID of the group that is being created. */
    groupId: string;
    /** ID of the organization that the group belongs to. */
    organizationId: string;
    /** Name of the group. */
    groupName: string;
    /** Id of the subject container that created external group belongs to. */
    subjectContainerId: string;
    /** Id of the created group from external system. */
    externalId: string;
    /** If true, then creator of group was assigned to role that allows modification of group as external group. */
    makeEditor: boolean;
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
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateGroupMetadata {
    /** ID of the Group resource that is being updated. */
    groupId: string;
}

export interface ConvertToExternalGroupRequest {
    /**
     * ID of the Group resource to convert to external.
     * To get the group ID, use a [GroupService.List] request.
     */
    groupId: string;
    /**
     * Id of the subject container that external group belongs to.
     * Combination of subject_container_id and external_id must be unique.
     * To get subject container, use a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request
     * or [yandex.cloud.organizationmanager.v1.idp.UserpoolService.List] request.
     */
    subjectContainerId: string;
    /**
     * Id of the group from external system.
     * Combination of subject_container_id and external_id must be unique
     */
    externalId: string;
    /** If true, then subject that performs conversion of group will be assigned to role that allows modification of group as external group. */
    makeEditor: boolean;
}

export interface ConvertToExternalGroupMetadata {
    /** ID of the Group resource that is being converted to external. */
    groupId: string;
    /** Id of the subject container that created external group belongs to. */
    subjectContainerId: string;
    /** Id of the created group from external system. */
    externalId: string;
    /** If true, then subject that performed conversion of group was assigned to role that allows modification of group as external group. */
    makeEditor: boolean;
}

export interface ConvertAllToBasicGroupsRequest {
    /**
     * Id of the subject container for which all external groups will be converted to basic (not external) groups.
     * To get subject container, use a [yandex.cloud.organizationmanager.v1.saml.FederationService.List] request
     * or [yandex.cloud.organizationmanager.v1.idp.UserpoolService.List] request.
     */
    subjectContainerId: string;
}

export interface ConvertAllToBasicGroupsMetadata {
    /** Id of the subject container for which all external groups were converted to basic (not external) groups */
    subjectContainerId: string;
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

export interface ListEffectiveRequest {
    /** ID of the subject to list groups for. */
    subjectId: string;
    /**
     * The ID of the organization to scope the group search to.
     * If omitted and the subject belongs to a single organization,
     * that organization's ID will be used automatically.
     */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListEffectiveResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListEffectiveResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression supports the following operations:
     * - `=` for exact match: `name = 'example-name'`
     * - `IN` for multiple values: `id IN ('id1', 'id2')`
     * - `contains` for domain substring search: `name contains 'example'`
     * - `AND` for combining conditions: `name contains 'my-group' AND name contains 'name'`
     *
     * Available fields for filtering:
     * - `id` - group ID
     * - `name` - group name
     *
     * Must be 1-1000 characters long.
     */
    filter: string;
}

export interface GroupMembershipInfo {
    /** ID of the group the subject is a member of. */
    groupId: string;
    /** Name of the group the subject is a member of. */
    groupName: string;
}

export interface ListEffectiveResponse {
    /**
     * List of group membership information.
     * Contains groups where the specified subject is a member.
     */
    groupMembershipInfo: GroupMembershipInfo[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListEffectiveRequest.page_size], use the [next_page_token] as the value
     * for the [ListEffectiveRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetGroupRequest: object = { groupId: '' };

export const GetGroupRequest: {
    encode(message: GetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupRequest;
    fromJSON(object: any): GetGroupRequest;
    toJSON(message: GetGroupRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetGroupRequest>, I>>(object: I): GetGroupRequest;
} = {
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

const baseResolveExternalGroupRequest: object = { subjectContainerId: '', externalId: '' };

export const ResolveExternalGroupRequest: {
    encode(message: ResolveExternalGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveExternalGroupRequest;
    fromJSON(object: any): ResolveExternalGroupRequest;
    toJSON(message: ResolveExternalGroupRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ResolveExternalGroupRequest>, I>>(object: I): ResolveExternalGroupRequest;
} = {
    encode(
        message: ResolveExternalGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        if (message.externalId !== '') {
            writer.uint32(18).string(message.externalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveExternalGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResolveExternalGroupRequest } as ResolveExternalGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                case 2:
                    message.externalId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResolveExternalGroupRequest {
        const message = { ...baseResolveExternalGroupRequest } as ResolveExternalGroupRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        return message;
    },

    toJSON(message: ResolveExternalGroupRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResolveExternalGroupRequest>, I>>(
        object: I,
    ): ResolveExternalGroupRequest {
        const message = { ...baseResolveExternalGroupRequest } as ResolveExternalGroupRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.externalId = object.externalId ?? '';
        return message;
    },
};

const baseListGroupsRequest: object = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListGroupsRequest: {
    encode(message: ListGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsRequest;
    fromJSON(object: any): ListGroupsRequest;
    toJSON(message: ListGroupsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListGroupsRequest>, I>>(object: I): ListGroupsRequest;
} = {
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

export const ListGroupsResponse: {
    encode(message: ListGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsResponse;
    fromJSON(object: any): ListGroupsResponse;
    toJSON(message: ListGroupsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListGroupsResponse>, I>>(object: I): ListGroupsResponse;
} = {
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

const baseListExternalGroupsRequest: object = {
    subjectContainerId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListExternalGroupsRequest: {
    encode(message: ListExternalGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListExternalGroupsRequest;
    fromJSON(object: any): ListExternalGroupsRequest;
    toJSON(message: ListExternalGroupsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListExternalGroupsRequest>, I>>(object: I): ListExternalGroupsRequest;
} = {
    encode(
        message: ListExternalGroupsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExternalGroupsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListExternalGroupsRequest } as ListExternalGroupsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
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

    fromJSON(object: any): ListExternalGroupsRequest {
        const message = { ...baseListExternalGroupsRequest } as ListExternalGroupsRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
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

    toJSON(message: ListExternalGroupsRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExternalGroupsRequest>, I>>(
        object: I,
    ): ListExternalGroupsRequest {
        const message = { ...baseListExternalGroupsRequest } as ListExternalGroupsRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListExternalGroupsResponse: object = { nextPageToken: '' };

export const ListExternalGroupsResponse: {
    encode(message: ListExternalGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListExternalGroupsResponse;
    fromJSON(object: any): ListExternalGroupsResponse;
    toJSON(message: ListExternalGroupsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListExternalGroupsResponse>, I>>(object: I): ListExternalGroupsResponse;
} = {
    encode(
        message: ListExternalGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.groups) {
            Group.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExternalGroupsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListExternalGroupsResponse } as ListExternalGroupsResponse;
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

    fromJSON(object: any): ListExternalGroupsResponse {
        const message = { ...baseListExternalGroupsResponse } as ListExternalGroupsResponse;
        message.groups = (object.groups ?? []).map((e: any) => Group.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListExternalGroupsResponse): unknown {
        const obj: any = {};
        if (message.groups) {
            obj.groups = message.groups.map((e) => (e ? Group.toJSON(e) : undefined));
        } else {
            obj.groups = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExternalGroupsResponse>, I>>(
        object: I,
    ): ListExternalGroupsResponse {
        const message = { ...baseListExternalGroupsResponse } as ListExternalGroupsResponse;
        message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateGroupRequest: object = { organizationId: '', name: '', description: '' };

export const CreateGroupRequest: {
    encode(message: CreateGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest;
    fromJSON(object: any): CreateGroupRequest;
    toJSON(message: CreateGroupRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(object: I): CreateGroupRequest;
} = {
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
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGroupRequest } as CreateGroupRequest;
        message.labels = {};
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
                case 4:
                    const entry4 = CreateGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateGroupRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(
        object: I,
    ): CreateGroupRequest {
        const message = { ...baseCreateGroupRequest } as CreateGroupRequest;
        message.organizationId = object.organizationId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseCreateGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateGroupRequest_LabelsEntry: {
    encode(message: CreateGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateGroupRequest_LabelsEntry;
    toJSON(message: CreateGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateGroupRequest_LabelsEntry>, I>>(object: I): CreateGroupRequest_LabelsEntry;
} = {
    encode(
        message: CreateGroupRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGroupRequest_LabelsEntry } as CreateGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateGroupRequest_LabelsEntry {
        const message = { ...baseCreateGroupRequest_LabelsEntry } as CreateGroupRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateGroupRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateGroupRequest_LabelsEntry {
        const message = { ...baseCreateGroupRequest_LabelsEntry } as CreateGroupRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateGroupMetadata: object = { groupId: '' };

export const CreateGroupMetadata: {
    encode(message: CreateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupMetadata;
    fromJSON(object: any): CreateGroupMetadata;
    toJSON(message: CreateGroupMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateGroupMetadata>, I>>(object: I): CreateGroupMetadata;
} = {
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

const baseCreateExternalGroupRequest: object = {
    organizationId: '',
    name: '',
    description: '',
    subjectContainerId: '',
    externalId: '',
    makeEditor: false,
};

export const CreateExternalGroupRequest: {
    encode(message: CreateExternalGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateExternalGroupRequest;
    fromJSON(object: any): CreateExternalGroupRequest;
    toJSON(message: CreateExternalGroupRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateExternalGroupRequest>, I>>(object: I): CreateExternalGroupRequest;
} = {
    encode(
        message: CreateExternalGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.subjectContainerId !== '') {
            writer.uint32(34).string(message.subjectContainerId);
        }
        if (message.externalId !== '') {
            writer.uint32(42).string(message.externalId);
        }
        if (message.makeEditor === true) {
            writer.uint32(48).bool(message.makeEditor);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateExternalGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateExternalGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateExternalGroupRequest } as CreateExternalGroupRequest;
        message.labels = {};
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
                case 4:
                    message.subjectContainerId = reader.string();
                    break;
                case 5:
                    message.externalId = reader.string();
                    break;
                case 6:
                    message.makeEditor = reader.bool();
                    break;
                case 7:
                    const entry7 = CreateExternalGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateExternalGroupRequest {
        const message = { ...baseCreateExternalGroupRequest } as CreateExternalGroupRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        message.makeEditor =
            object.makeEditor !== undefined && object.makeEditor !== null
                ? Boolean(object.makeEditor)
                : false;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateExternalGroupRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        message.makeEditor !== undefined && (obj.makeEditor = message.makeEditor);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateExternalGroupRequest>, I>>(
        object: I,
    ): CreateExternalGroupRequest {
        const message = { ...baseCreateExternalGroupRequest } as CreateExternalGroupRequest;
        message.organizationId = object.organizationId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.externalId = object.externalId ?? '';
        message.makeEditor = object.makeEditor ?? false;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseCreateExternalGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateExternalGroupRequest_LabelsEntry: {
    encode(message: CreateExternalGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateExternalGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateExternalGroupRequest_LabelsEntry;
    toJSON(message: CreateExternalGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateExternalGroupRequest_LabelsEntry>, I>>(object: I): CreateExternalGroupRequest_LabelsEntry;
} = {
    encode(
        message: CreateExternalGroupRequest_LabelsEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateExternalGroupRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateExternalGroupRequest_LabelsEntry,
        } as CreateExternalGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateExternalGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateExternalGroupRequest_LabelsEntry,
        } as CreateExternalGroupRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateExternalGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateExternalGroupRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateExternalGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateExternalGroupRequest_LabelsEntry,
        } as CreateExternalGroupRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateExternalGroupMetadata: object = {
    groupId: '',
    organizationId: '',
    groupName: '',
    subjectContainerId: '',
    externalId: '',
    makeEditor: false,
};

export const CreateExternalGroupMetadata: {
    encode(message: CreateExternalGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateExternalGroupMetadata;
    fromJSON(object: any): CreateExternalGroupMetadata;
    toJSON(message: CreateExternalGroupMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateExternalGroupMetadata>, I>>(object: I): CreateExternalGroupMetadata;
} = {
    encode(
        message: CreateExternalGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.groupName !== '') {
            writer.uint32(26).string(message.groupName);
        }
        if (message.subjectContainerId !== '') {
            writer.uint32(34).string(message.subjectContainerId);
        }
        if (message.externalId !== '') {
            writer.uint32(42).string(message.externalId);
        }
        if (message.makeEditor === true) {
            writer.uint32(48).bool(message.makeEditor);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateExternalGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateExternalGroupMetadata } as CreateExternalGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.groupName = reader.string();
                    break;
                case 4:
                    message.subjectContainerId = reader.string();
                    break;
                case 5:
                    message.externalId = reader.string();
                    break;
                case 6:
                    message.makeEditor = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateExternalGroupMetadata {
        const message = { ...baseCreateExternalGroupMetadata } as CreateExternalGroupMetadata;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.groupName =
            object.groupName !== undefined && object.groupName !== null
                ? String(object.groupName)
                : '';
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        message.makeEditor =
            object.makeEditor !== undefined && object.makeEditor !== null
                ? Boolean(object.makeEditor)
                : false;
        return message;
    },

    toJSON(message: CreateExternalGroupMetadata): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.groupName !== undefined && (obj.groupName = message.groupName);
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        message.makeEditor !== undefined && (obj.makeEditor = message.makeEditor);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateExternalGroupMetadata>, I>>(
        object: I,
    ): CreateExternalGroupMetadata {
        const message = { ...baseCreateExternalGroupMetadata } as CreateExternalGroupMetadata;
        message.groupId = object.groupId ?? '';
        message.organizationId = object.organizationId ?? '';
        message.groupName = object.groupName ?? '';
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.externalId = object.externalId ?? '';
        message.makeEditor = object.makeEditor ?? false;
        return message;
    },
};

const baseUpdateGroupRequest: object = { groupId: '', name: '', description: '' };

export const UpdateGroupRequest: {
    encode(message: UpdateGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupRequest;
    fromJSON(object: any): UpdateGroupRequest;
    toJSON(message: UpdateGroupRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateGroupRequest>, I>>(object: I): UpdateGroupRequest;
} = {
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
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateGroupRequest } as UpdateGroupRequest;
        message.labels = {};
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
                case 5:
                    const entry5 = UpdateGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
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
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseUpdateGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateGroupRequest_LabelsEntry: {
    encode(message: UpdateGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateGroupRequest_LabelsEntry;
    toJSON(message: UpdateGroupRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateGroupRequest_LabelsEntry>, I>>(object: I): UpdateGroupRequest_LabelsEntry;
} = {
    encode(
        message: UpdateGroupRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateGroupRequest_LabelsEntry } as UpdateGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateGroupRequest_LabelsEntry {
        const message = { ...baseUpdateGroupRequest_LabelsEntry } as UpdateGroupRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateGroupRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateGroupRequest_LabelsEntry {
        const message = { ...baseUpdateGroupRequest_LabelsEntry } as UpdateGroupRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateGroupMetadata: object = { groupId: '' };

export const UpdateGroupMetadata: {
    encode(message: UpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMetadata;
    fromJSON(object: any): UpdateGroupMetadata;
    toJSON(message: UpdateGroupMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateGroupMetadata>, I>>(object: I): UpdateGroupMetadata;
} = {
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

const baseConvertToExternalGroupRequest: object = {
    groupId: '',
    subjectContainerId: '',
    externalId: '',
    makeEditor: false,
};

export const ConvertToExternalGroupRequest: {
    encode(message: ConvertToExternalGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertToExternalGroupRequest;
    fromJSON(object: any): ConvertToExternalGroupRequest;
    toJSON(message: ConvertToExternalGroupRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ConvertToExternalGroupRequest>, I>>(object: I): ConvertToExternalGroupRequest;
} = {
    encode(
        message: ConvertToExternalGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        if (message.subjectContainerId !== '') {
            writer.uint32(18).string(message.subjectContainerId);
        }
        if (message.externalId !== '') {
            writer.uint32(26).string(message.externalId);
        }
        if (message.makeEditor === true) {
            writer.uint32(32).bool(message.makeEditor);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertToExternalGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConvertToExternalGroupRequest } as ConvertToExternalGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.subjectContainerId = reader.string();
                    break;
                case 3:
                    message.externalId = reader.string();
                    break;
                case 4:
                    message.makeEditor = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConvertToExternalGroupRequest {
        const message = { ...baseConvertToExternalGroupRequest } as ConvertToExternalGroupRequest;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        message.makeEditor =
            object.makeEditor !== undefined && object.makeEditor !== null
                ? Boolean(object.makeEditor)
                : false;
        return message;
    },

    toJSON(message: ConvertToExternalGroupRequest): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        message.makeEditor !== undefined && (obj.makeEditor = message.makeEditor);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConvertToExternalGroupRequest>, I>>(
        object: I,
    ): ConvertToExternalGroupRequest {
        const message = { ...baseConvertToExternalGroupRequest } as ConvertToExternalGroupRequest;
        message.groupId = object.groupId ?? '';
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.externalId = object.externalId ?? '';
        message.makeEditor = object.makeEditor ?? false;
        return message;
    },
};

const baseConvertToExternalGroupMetadata: object = {
    groupId: '',
    subjectContainerId: '',
    externalId: '',
    makeEditor: false,
};

export const ConvertToExternalGroupMetadata: {
    encode(message: ConvertToExternalGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertToExternalGroupMetadata;
    fromJSON(object: any): ConvertToExternalGroupMetadata;
    toJSON(message: ConvertToExternalGroupMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ConvertToExternalGroupMetadata>, I>>(object: I): ConvertToExternalGroupMetadata;
} = {
    encode(
        message: ConvertToExternalGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        if (message.subjectContainerId !== '') {
            writer.uint32(18).string(message.subjectContainerId);
        }
        if (message.externalId !== '') {
            writer.uint32(26).string(message.externalId);
        }
        if (message.makeEditor === true) {
            writer.uint32(32).bool(message.makeEditor);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertToExternalGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConvertToExternalGroupMetadata } as ConvertToExternalGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.subjectContainerId = reader.string();
                    break;
                case 3:
                    message.externalId = reader.string();
                    break;
                case 4:
                    message.makeEditor = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConvertToExternalGroupMetadata {
        const message = { ...baseConvertToExternalGroupMetadata } as ConvertToExternalGroupMetadata;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        message.makeEditor =
            object.makeEditor !== undefined && object.makeEditor !== null
                ? Boolean(object.makeEditor)
                : false;
        return message;
    },

    toJSON(message: ConvertToExternalGroupMetadata): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        message.makeEditor !== undefined && (obj.makeEditor = message.makeEditor);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConvertToExternalGroupMetadata>, I>>(
        object: I,
    ): ConvertToExternalGroupMetadata {
        const message = { ...baseConvertToExternalGroupMetadata } as ConvertToExternalGroupMetadata;
        message.groupId = object.groupId ?? '';
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.externalId = object.externalId ?? '';
        message.makeEditor = object.makeEditor ?? false;
        return message;
    },
};

const baseConvertAllToBasicGroupsRequest: object = { subjectContainerId: '' };

export const ConvertAllToBasicGroupsRequest: {
    encode(message: ConvertAllToBasicGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertAllToBasicGroupsRequest;
    fromJSON(object: any): ConvertAllToBasicGroupsRequest;
    toJSON(message: ConvertAllToBasicGroupsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ConvertAllToBasicGroupsRequest>, I>>(object: I): ConvertAllToBasicGroupsRequest;
} = {
    encode(
        message: ConvertAllToBasicGroupsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertAllToBasicGroupsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConvertAllToBasicGroupsRequest } as ConvertAllToBasicGroupsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConvertAllToBasicGroupsRequest {
        const message = { ...baseConvertAllToBasicGroupsRequest } as ConvertAllToBasicGroupsRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: ConvertAllToBasicGroupsRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConvertAllToBasicGroupsRequest>, I>>(
        object: I,
    ): ConvertAllToBasicGroupsRequest {
        const message = { ...baseConvertAllToBasicGroupsRequest } as ConvertAllToBasicGroupsRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseConvertAllToBasicGroupsMetadata: object = { subjectContainerId: '' };

export const ConvertAllToBasicGroupsMetadata: {
    encode(message: ConvertAllToBasicGroupsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertAllToBasicGroupsMetadata;
    fromJSON(object: any): ConvertAllToBasicGroupsMetadata;
    toJSON(message: ConvertAllToBasicGroupsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ConvertAllToBasicGroupsMetadata>, I>>(object: I): ConvertAllToBasicGroupsMetadata;
} = {
    encode(
        message: ConvertAllToBasicGroupsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertAllToBasicGroupsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConvertAllToBasicGroupsMetadata,
        } as ConvertAllToBasicGroupsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConvertAllToBasicGroupsMetadata {
        const message = {
            ...baseConvertAllToBasicGroupsMetadata,
        } as ConvertAllToBasicGroupsMetadata;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: ConvertAllToBasicGroupsMetadata): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConvertAllToBasicGroupsMetadata>, I>>(
        object: I,
    ): ConvertAllToBasicGroupsMetadata {
        const message = {
            ...baseConvertAllToBasicGroupsMetadata,
        } as ConvertAllToBasicGroupsMetadata;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseDeleteGroupRequest: object = { groupId: '' };

export const DeleteGroupRequest: {
    encode(message: DeleteGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupRequest;
    fromJSON(object: any): DeleteGroupRequest;
    toJSON(message: DeleteGroupRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteGroupRequest>, I>>(object: I): DeleteGroupRequest;
} = {
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

export const DeleteGroupMetadata: {
    encode(message: DeleteGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupMetadata;
    fromJSON(object: any): DeleteGroupMetadata;
    toJSON(message: DeleteGroupMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteGroupMetadata>, I>>(object: I): DeleteGroupMetadata;
} = {
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

export const ListGroupOperationsRequest: {
    encode(message: ListGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupOperationsRequest;
    fromJSON(object: any): ListGroupOperationsRequest;
    toJSON(message: ListGroupOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListGroupOperationsRequest>, I>>(object: I): ListGroupOperationsRequest;
} = {
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

export const ListGroupOperationsResponse: {
    encode(message: ListGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupOperationsResponse;
    fromJSON(object: any): ListGroupOperationsResponse;
    toJSON(message: ListGroupOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListGroupOperationsResponse>, I>>(object: I): ListGroupOperationsResponse;
} = {
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

export const ListGroupMembersRequest: {
    encode(message: ListGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupMembersRequest;
    fromJSON(object: any): ListGroupMembersRequest;
    toJSON(message: ListGroupMembersRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListGroupMembersRequest>, I>>(object: I): ListGroupMembersRequest;
} = {
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

export const ListGroupMembersResponse: {
    encode(message: ListGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupMembersResponse;
    fromJSON(object: any): ListGroupMembersResponse;
    toJSON(message: ListGroupMembersResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListGroupMembersResponse>, I>>(object: I): ListGroupMembersResponse;
} = {
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

export const GroupMember: {
    encode(message: GroupMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember;
    fromJSON(object: any): GroupMember;
    toJSON(message: GroupMember): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupMember>, I>>(object: I): GroupMember;
} = {
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

export const UpdateGroupMembersRequest: {
    encode(message: UpdateGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMembersRequest;
    fromJSON(object: any): UpdateGroupMembersRequest;
    toJSON(message: UpdateGroupMembersRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateGroupMembersRequest>, I>>(object: I): UpdateGroupMembersRequest;
} = {
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

export const UpdateGroupMembersMetadata: {
    encode(message: UpdateGroupMembersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupMembersMetadata;
    fromJSON(object: any): UpdateGroupMembersMetadata;
    toJSON(message: UpdateGroupMembersMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateGroupMembersMetadata>, I>>(object: I): UpdateGroupMembersMetadata;
} = {
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

export const MemberDelta: {
    encode(message: MemberDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberDelta;
    fromJSON(object: any): MemberDelta;
    toJSON(message: MemberDelta): unknown;
    fromPartial<I extends Exact<DeepPartial<MemberDelta>, I>>(object: I): MemberDelta;
} = {
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

const baseListEffectiveRequest: object = {
    subjectId: '',
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListEffectiveRequest: {
    encode(message: ListEffectiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListEffectiveRequest;
    fromJSON(object: any): ListEffectiveRequest;
    toJSON(message: ListEffectiveRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListEffectiveRequest>, I>>(object: I): ListEffectiveRequest;
} = {
    encode(message: ListEffectiveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subjectId !== '') {
            writer.uint32(10).string(message.subjectId);
        }
        if (message.organizationId !== '') {
            writer.uint32(34).string(message.organizationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListEffectiveRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListEffectiveRequest } as ListEffectiveRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectId = reader.string();
                    break;
                case 4:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListEffectiveRequest {
        const message = { ...baseListEffectiveRequest } as ListEffectiveRequest;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
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

    toJSON(message: ListEffectiveRequest): unknown {
        const obj: any = {};
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListEffectiveRequest>, I>>(
        object: I,
    ): ListEffectiveRequest {
        const message = { ...baseListEffectiveRequest } as ListEffectiveRequest;
        message.subjectId = object.subjectId ?? '';
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseGroupMembershipInfo: object = { groupId: '', groupName: '' };

export const GroupMembershipInfo: {
    encode(message: GroupMembershipInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupMembershipInfo;
    fromJSON(object: any): GroupMembershipInfo;
    toJSON(message: GroupMembershipInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupMembershipInfo>, I>>(object: I): GroupMembershipInfo;
} = {
    encode(message: GroupMembershipInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupId !== '') {
            writer.uint32(10).string(message.groupId);
        }
        if (message.groupName !== '') {
            writer.uint32(18).string(message.groupName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupMembershipInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupMembershipInfo } as GroupMembershipInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.groupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupMembershipInfo {
        const message = { ...baseGroupMembershipInfo } as GroupMembershipInfo;
        message.groupId =
            object.groupId !== undefined && object.groupId !== null ? String(object.groupId) : '';
        message.groupName =
            object.groupName !== undefined && object.groupName !== null
                ? String(object.groupName)
                : '';
        return message;
    },

    toJSON(message: GroupMembershipInfo): unknown {
        const obj: any = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.groupName !== undefined && (obj.groupName = message.groupName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupMembershipInfo>, I>>(
        object: I,
    ): GroupMembershipInfo {
        const message = { ...baseGroupMembershipInfo } as GroupMembershipInfo;
        message.groupId = object.groupId ?? '';
        message.groupName = object.groupName ?? '';
        return message;
    },
};

const baseListEffectiveResponse: object = { nextPageToken: '' };

export const ListEffectiveResponse: {
    encode(message: ListEffectiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListEffectiveResponse;
    fromJSON(object: any): ListEffectiveResponse;
    toJSON(message: ListEffectiveResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListEffectiveResponse>, I>>(object: I): ListEffectiveResponse;
} = {
    encode(message: ListEffectiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.groupMembershipInfo) {
            GroupMembershipInfo.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListEffectiveResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListEffectiveResponse } as ListEffectiveResponse;
        message.groupMembershipInfo = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupMembershipInfo.push(
                        GroupMembershipInfo.decode(reader, reader.uint32()),
                    );
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

    fromJSON(object: any): ListEffectiveResponse {
        const message = { ...baseListEffectiveResponse } as ListEffectiveResponse;
        message.groupMembershipInfo = (object.groupMembershipInfo ?? []).map((e: any) =>
            GroupMembershipInfo.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListEffectiveResponse): unknown {
        const obj: any = {};
        if (message.groupMembershipInfo) {
            obj.groupMembershipInfo = message.groupMembershipInfo.map((e) =>
                e ? GroupMembershipInfo.toJSON(e) : undefined,
            );
        } else {
            obj.groupMembershipInfo = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListEffectiveResponse>, I>>(
        object: I,
    ): ListEffectiveResponse {
        const message = { ...baseListEffectiveResponse } as ListEffectiveResponse;
        message.groupMembershipInfo =
            object.groupMembershipInfo?.map((e) => GroupMembershipInfo.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
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
    /** Returns external group by subject container and external id */
    resolveExternal: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/ResolveExternal',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResolveExternalGroupRequest) =>
            Buffer.from(ResolveExternalGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResolveExternalGroupRequest.decode(value),
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
    /** Retrieves the list of external group linked subject container */
    listExternal: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/ListExternal',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListExternalGroupsRequest) =>
            Buffer.from(ListExternalGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListExternalGroupsRequest.decode(value),
        responseSerialize: (value: ListExternalGroupsResponse) =>
            Buffer.from(ListExternalGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListExternalGroupsResponse.decode(value),
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
    /** Creates an external group. */
    createExternal: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/CreateExternal',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateExternalGroupRequest) =>
            Buffer.from(CreateExternalGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateExternalGroupRequest.decode(value),
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
    /** Converts single basic (not external) group to external. Precondition: group must be basic. */
    convertToExternal: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/ConvertToExternal',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ConvertToExternalGroupRequest) =>
            Buffer.from(ConvertToExternalGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ConvertToExternalGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Converts all groups that belongs to subject container from external to basic (not external). */
    convertAllToBasic: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/ConvertAllToBasic',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ConvertAllToBasicGroupsRequest) =>
            Buffer.from(ConvertAllToBasicGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ConvertAllToBasicGroupsRequest.decode(value),
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
    /** Returns groups that the subject belongs to within a specific organization. */
    listEffective: {
        path: '/yandex.cloud.organizationmanager.v1.GroupService/ListEffective',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListEffectiveRequest) =>
            Buffer.from(ListEffectiveRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListEffectiveRequest.decode(value),
        responseSerialize: (value: ListEffectiveResponse) =>
            Buffer.from(ListEffectiveResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListEffectiveResponse.decode(value),
    },
} as const;

export interface GroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Group resource.
     *
     * To get the list of available Group resources, make a [List] request.
     */
    get: handleUnaryCall<GetGroupRequest, Group>;
    /** Returns external group by subject container and external id */
    resolveExternal: handleUnaryCall<ResolveExternalGroupRequest, Group>;
    /** Retrieves the list of group resources. */
    list: handleUnaryCall<ListGroupsRequest, ListGroupsResponse>;
    /** Retrieves the list of external group linked subject container */
    listExternal: handleUnaryCall<ListExternalGroupsRequest, ListExternalGroupsResponse>;
    /** Creates a group in the specified organization. */
    create: handleUnaryCall<CreateGroupRequest, Operation>;
    /** Creates an external group. */
    createExternal: handleUnaryCall<CreateExternalGroupRequest, Operation>;
    /** Updates the specified group. */
    update: handleUnaryCall<UpdateGroupRequest, Operation>;
    /** Converts single basic (not external) group to external. Precondition: group must be basic. */
    convertToExternal: handleUnaryCall<ConvertToExternalGroupRequest, Operation>;
    /** Converts all groups that belongs to subject container from external to basic (not external). */
    convertAllToBasic: handleUnaryCall<ConvertAllToBasicGroupsRequest, Operation>;
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
    /** Returns groups that the subject belongs to within a specific organization. */
    listEffective: handleUnaryCall<ListEffectiveRequest, ListEffectiveResponse>;
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
    /** Returns external group by subject container and external id */
    resolveExternal(
        request: ResolveExternalGroupRequest,
        callback: (error: ServiceError | null, response: Group) => void,
    ): ClientUnaryCall;
    resolveExternal(
        request: ResolveExternalGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Group) => void,
    ): ClientUnaryCall;
    resolveExternal(
        request: ResolveExternalGroupRequest,
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
    /** Retrieves the list of external group linked subject container */
    listExternal(
        request: ListExternalGroupsRequest,
        callback: (error: ServiceError | null, response: ListExternalGroupsResponse) => void,
    ): ClientUnaryCall;
    listExternal(
        request: ListExternalGroupsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListExternalGroupsResponse) => void,
    ): ClientUnaryCall;
    listExternal(
        request: ListExternalGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListExternalGroupsResponse) => void,
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
    /** Creates an external group. */
    createExternal(
        request: CreateExternalGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createExternal(
        request: CreateExternalGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createExternal(
        request: CreateExternalGroupRequest,
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
    /** Converts single basic (not external) group to external. Precondition: group must be basic. */
    convertToExternal(
        request: ConvertToExternalGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    convertToExternal(
        request: ConvertToExternalGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    convertToExternal(
        request: ConvertToExternalGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Converts all groups that belongs to subject container from external to basic (not external). */
    convertAllToBasic(
        request: ConvertAllToBasicGroupsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    convertAllToBasic(
        request: ConvertAllToBasicGroupsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    convertAllToBasic(
        request: ConvertAllToBasicGroupsRequest,
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
    /** Returns groups that the subject belongs to within a specific organization. */
    listEffective(
        request: ListEffectiveRequest,
        callback: (error: ServiceError | null, response: ListEffectiveResponse) => void,
    ): ClientUnaryCall;
    listEffective(
        request: ListEffectiveRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListEffectiveResponse) => void,
    ): ClientUnaryCall;
    listEffective(
        request: ListEffectiveRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListEffectiveResponse) => void,
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
