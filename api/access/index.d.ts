// autogenerated file

import * as grpc from '@grpc/grpc-js';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';
import { Session } from '../../index.js';

export interface Subject {
    /**
     * ID of the subject.
     *
     * It can contain one of the following values:
     * * `allAuthenticatedUsers`: A special system identifier that represents anyone
     * who is authenticated. It can be used only if the [type] is `system`.
     * * `allUsers`: A special system identifier that represents anyone. No authentication is required.
     * For example, you don't need to specify the IAM token in an API query.
     * * `<cloud generated id>`: An identifier that represents a user account.
     * It can be used only if the [type] is `userAccount` or `serviceAccount`.
     */
    id?: string;

    /**
     * Type of the subject.
     *
     * It can contain one of the following values:
     * * `userAccount`: An account on Yandex or [Yandex.Connect](https://connect.yandex.com), added to Yandex.Cloud.
     * * `serviceAccount`: A service account. This type represents the [yandex.cloud.iam.v1.ServiceAccount] resource.
     * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
     * * `system`: System group. This type represents several accounts with a common system identifier.
     *
     * For more information, see [Subject to which the role is assigned](/docs/iam/concepts/access-control/#subject).
     */
    type?: string;
}

export interface AccessBinding {
    /**
     * ID of the [yandex.cloud.iam.v1.Role] that is assigned to the [subject].
     */
    roleId?: string;

    /**
     * Identity for which access binding is being created.
     * It can represent an account with a unique ID or several accounts with a system identifier.
     */
    subject: Subject;
}

export interface ListAccessBindingsRequest {
    /**
     * ID of the resource to list access bindings for.
     *
     * To get the resource ID, use a corresponding List request.
     * For example, use the [yandex.cloud.resourcemanager.v1.CloudService.List] request to get the Cloud resource ID.
     */
    resourceId: string;

    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessBindingsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. Set [page_token]
     * to the [ListAccessBindingsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
}

export interface ListAccessBindingsResponse {
    /**
     * List of access bindings for the specified resource.
     */
    accessBindings?: AccessBinding[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessBindingsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListAccessBindingsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface SetAccessBindingsRequest {
    /**
     * ID of the resource for which access bindings are being set.
     *
     * To get the resource ID, use a corresponding List request.
     */
    resourceId: string;

    /**
     * Access bindings to be set. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings).
     */
    accessBindings: AccessBinding[];
}

export interface SetAccessBindingsMetadata {
    /**
     * ID of the resource for which access bindings are being set.
     */
    resourceId?: string;
}

export interface UpdateAccessBindingsRequest {
    /**
     * ID of the resource for which access bindings are being updated.
     */
    resourceId: string;

    /**
     * Updates to access bindings.
     */
    accessBindingDeltas: AccessBindingDelta[];
}

export interface UpdateAccessBindingsMetadata {
    /**
     * ID of the resource for which access bindings are being updated.
     */
    resourceId?: string;
}

export enum AccessBindingAction {
    ACCESS_BINDING_ACTION_UNSPECIFIED = 0,

    /**
     * Addition of an access binding.
     */
    ADD = 1,

    /**
     * Removal of an access binding.
     */
    REMOVE = 2,
}

export interface AccessBindingDelta {
    /**
     * The action that is being performed on an access binding.
     */
    action: AccessBindingAction;

    /**
     * Access binding. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings).
     */
    accessBinding: AccessBinding;
}
