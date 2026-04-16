/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.access';

export enum AccessBindingAction {
    ACCESS_BINDING_ACTION_UNSPECIFIED = 0,
    /** ADD - Addition of an access binding. */
    ADD = 1,
    /** REMOVE - Removal of an access binding. */
    REMOVE = 2,
    UNRECOGNIZED = -1,
}

export function accessBindingActionFromJSON(object: any): AccessBindingAction {
    switch (object) {
        case 0:
        case 'ACCESS_BINDING_ACTION_UNSPECIFIED':
            return AccessBindingAction.ACCESS_BINDING_ACTION_UNSPECIFIED;
        case 1:
        case 'ADD':
            return AccessBindingAction.ADD;
        case 2:
        case 'REMOVE':
            return AccessBindingAction.REMOVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AccessBindingAction.UNRECOGNIZED;
    }
}

export function accessBindingActionToJSON(object: AccessBindingAction): string {
    switch (object) {
        case AccessBindingAction.ACCESS_BINDING_ACTION_UNSPECIFIED:
            return 'ACCESS_BINDING_ACTION_UNSPECIFIED';
        case AccessBindingAction.ADD:
            return 'ADD';
        case AccessBindingAction.REMOVE:
            return 'REMOVE';
        default:
            return 'UNKNOWN';
    }
}

export interface Subject {
    /**
     * ID of the subject.
     * It can contain one of the following values:oauth
     * * `allAuthenticatedUsers`: A special public group that represents anyone
     * who is authenticated. It can be used only if the [type] is `system`.
     * * `allUsers`: A special public group that represents anyone. No authentication is required.
     * For example, you don't need to specify the IAM token in an API query.
     * It can be used only if the [type] is `system`.
     * * `group:organization:<id>:users`: A special system group that represents all members of organization
     * with given <id>. It can be used only if the [type] is `system`.
     * * `group:federation:<id>:users`: A special system group that represents all users of federation
     * with given <id>. It can be used only if the [type] is `system`.
     * * `<cloud generated id>`: An identifier that represents a user account.
     * It can be used only if the [type] is `userAccount`, `federatedUser` or `serviceAccount`.
     */
    id: string;
    /**
     * Type of the subject.
     * It can contain one of the following values:
     * * `userAccount`: An account on Yandex or Yandex Connect, added to Yandex Cloud.
     * * `serviceAccount`: A service account. This type represents the [yandex.cloud.iam.v1.ServiceAccount] resource.
     * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
     * * `system`: System group. This type represents several accounts with a common system identifier.
     * For more information, see [Subject to which the role is assigned](/docs/iam/concepts/access-control/#subject).
     */
    type: string;
}

export interface AccessBinding {
    /** ID of the [yandex.cloud.iam.v1.Role] that is assigned to the [subject]. */
    roleId: string;
    /**
     * Identity for which access binding is being created.
     * It can represent an account with a unique ID or several accounts with a system identifier.
     */
    subject?: Subject;
}

export interface AccessPolicy {
    /** ID of the access policy template. */
    id: string;
    /** Name of the access policy template. */
    name: string;
    /** Description of the access policy template. */
    description: string;
}

export interface AccessPolicyBinding {
    /** ID of the access policy template being applied. */
    accessPolicyTemplateId: string;
    /** A list of access policy binding parameter KEY=VALUE pairs. */
    parameters: { [key: string]: string };
}

export interface AccessPolicyBinding_ParametersEntry {
    key: string;
    value: string;
}

export interface BindAccessPolicyRequest {
    /**
     * ID of the resource for which access policy bindings are being set.
     * To get the resource ID, use a corresponding List request.
     */
    resourceId: string;
    /** Access policy binding. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-policies). */
    accessPolicyBinding?: AccessPolicyBinding;
}

export interface BindAccessPolicyMetadata {
    /** ID of the resource for which access policy bindings are being set. */
    resourceId: string;
    /** Access policy binding. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-policies). */
    accessPolicyBinding?: AccessPolicyBinding;
}

export interface BindAccessPolicyResponse {}

export interface ListAccessBindingsRequest {
    /**
     * ID of the resource to list access bindings for.
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
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListAccessBindingsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListAccessBindingsResponse {
    /** List of access bindings for the specified resource. */
    accessBindings: AccessBinding[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessBindingsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListAccessBindingsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListAccessPolicyBindingsRequest {
    /**
     * ID of the resource to list access policy bindings for.
     * To get the resource ID, use a corresponding List request.
     * For example, use the [yandex.cloud.resourcemanager.v1.CloudService.List] request to get the Cloud resource ID.
     */
    resourceId: string;
    /**
     * The maximum number of results per page that should be returned.
     * If the number of available results is larger than [page_size], the service returns a
     * [ListAccessPolicyBindingsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token] to the
     * [ListAccessPolicyBindingsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListAccessPolicyBindingsResponse {
    /** List of access policy bindings for the specified resource. */
    accessPolicyBindings: AccessPolicyBinding[];
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than
     * [ListAccessPolicyBindingsRequest.page_size]
     * , use the [next_page_token] as the value for the
     * [ListAccessPolicyBindingsRequest.page_token]
     * query parameter in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UnbindAccessPolicyRequest {
    /**
     * ID of the resource for which access policy bindings are being removed.
     * To get the resource ID, use a corresponding List request.
     */
    resourceId: string;
    /** ID of the access policy. */
    accessPolicyTemplateId: string;
}

export interface UnbindAccessPolicyMetadata {
    /** ID of the resource for which access policy bindings are being removed. */
    resourceId: string;
    /** ID of the access policy. */
    accessPolicyTemplateId: string;
}

export interface UnbindAccessPolicyResponse {}

export interface UpdateAccessPolicyBindingParametersRequest {
    /** ID of the resource for which access policy bindings are being updated. */
    resourceId: string;
    /** Identity for which access policy binding is being updated. */
    accessPolicyBinding?: AccessPolicyBinding;
}

export interface UpdateAccessPolicyBindingParametersMetadata {
    /** ID of the resource for which access policy bindings are being updated. */
    resourceId: string;
    /** Identity for which access policy binding is being updated. */
    accessPolicyBinding?: AccessPolicyBinding;
}

export interface UpdateAccessPolicyBindingParametersResponse {}

export interface SetAccessBindingsRequest {
    /**
     * ID of the resource for which access bindings are being set.
     * To get the resource ID, use a corresponding List request.
     */
    resourceId: string;
    /** Access bindings to be set. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings). */
    accessBindings: AccessBinding[];
}

export interface SetAccessBindingsMetadata {
    /** ID of the resource for which access bindings are being set. */
    resourceId: string;
}

export interface UpdateAccessBindingsRequest {
    /** ID of the resource for which access bindings are being updated. */
    resourceId: string;
    /** Updates to access bindings. */
    accessBindingDeltas: AccessBindingDelta[];
}

export interface UpdateAccessBindingsMetadata {
    /** ID of the resource for which access bindings are being updated. */
    resourceId: string;
}

export interface AccessBindingDelta {
    /** The action that is being performed on an access binding. */
    action: AccessBindingAction;
    /** Access binding. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings). */
    accessBinding?: AccessBinding;
}

export interface AccessBindingsOperationResult {
    /** Result access binding deltas. */
    effectiveDeltas: AccessBindingDelta[];
}

const baseSubject: object = { id: '', type: '' };

export const Subject: {
    encode(message: Subject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subject;
    fromJSON(object: any): Subject;
    toJSON(message: Subject): unknown;
    fromPartial<I extends Exact<DeepPartial<Subject>, I>>(object: I): Subject;
} = {
    encode(message: Subject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Subject {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubject } as Subject;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Subject {
        const message = { ...baseSubject } as Subject;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        return message;
    },

    toJSON(message: Subject): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Subject>, I>>(object: I): Subject {
        const message = { ...baseSubject } as Subject;
        message.id = object.id ?? '';
        message.type = object.type ?? '';
        return message;
    },
};

const baseAccessBinding: object = { roleId: '' };

export const AccessBinding: {
    encode(message: AccessBinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessBinding;
    fromJSON(object: any): AccessBinding;
    toJSON(message: AccessBinding): unknown;
    fromPartial<I extends Exact<DeepPartial<AccessBinding>, I>>(object: I): AccessBinding;
} = {
    encode(message: AccessBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.roleId !== '') {
            writer.uint32(10).string(message.roleId);
        }
        if (message.subject !== undefined) {
            Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessBinding {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBinding } as AccessBinding;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                case 2:
                    message.subject = Subject.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AccessBinding {
        const message = { ...baseAccessBinding } as AccessBinding;
        message.roleId =
            object.roleId !== undefined && object.roleId !== null ? String(object.roleId) : '';
        message.subject =
            object.subject !== undefined && object.subject !== null
                ? Subject.fromJSON(object.subject)
                : undefined;
        return message;
    },

    toJSON(message: AccessBinding): unknown {
        const obj: any = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.subject !== undefined &&
            (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AccessBinding>, I>>(object: I): AccessBinding {
        const message = { ...baseAccessBinding } as AccessBinding;
        message.roleId = object.roleId ?? '';
        message.subject =
            object.subject !== undefined && object.subject !== null
                ? Subject.fromPartial(object.subject)
                : undefined;
        return message;
    },
};

const baseAccessPolicy: object = { id: '', name: '', description: '' };

export const AccessPolicy: {
    encode(message: AccessPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicy;
    fromJSON(object: any): AccessPolicy;
    toJSON(message: AccessPolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<AccessPolicy>, I>>(object: I): AccessPolicy;
} = {
    encode(message: AccessPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessPolicy } as AccessPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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

    fromJSON(object: any): AccessPolicy {
        const message = { ...baseAccessPolicy } as AccessPolicy;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: AccessPolicy): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AccessPolicy>, I>>(object: I): AccessPolicy {
        const message = { ...baseAccessPolicy } as AccessPolicy;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseAccessPolicyBinding: object = { accessPolicyTemplateId: '' };

export const AccessPolicyBinding: {
    encode(message: AccessPolicyBinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyBinding;
    fromJSON(object: any): AccessPolicyBinding;
    toJSON(message: AccessPolicyBinding): unknown;
    fromPartial<I extends Exact<DeepPartial<AccessPolicyBinding>, I>>(object: I): AccessPolicyBinding;
} = {
    encode(message: AccessPolicyBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessPolicyTemplateId !== '') {
            writer.uint32(10).string(message.accessPolicyTemplateId);
        }
        Object.entries(message.parameters).forEach(([key, value]) => {
            AccessPolicyBinding_ParametersEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyBinding {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessPolicyBinding } as AccessPolicyBinding;
        message.parameters = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessPolicyTemplateId = reader.string();
                    break;
                case 2:
                    const entry2 = AccessPolicyBinding_ParametersEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.parameters[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AccessPolicyBinding {
        const message = { ...baseAccessPolicyBinding } as AccessPolicyBinding;
        message.accessPolicyTemplateId =
            object.accessPolicyTemplateId !== undefined && object.accessPolicyTemplateId !== null
                ? String(object.accessPolicyTemplateId)
                : '';
        message.parameters = Object.entries(object.parameters ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: AccessPolicyBinding): unknown {
        const obj: any = {};
        message.accessPolicyTemplateId !== undefined &&
            (obj.accessPolicyTemplateId = message.accessPolicyTemplateId);
        obj.parameters = {};
        if (message.parameters) {
            Object.entries(message.parameters).forEach(([k, v]) => {
                obj.parameters[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AccessPolicyBinding>, I>>(
        object: I,
    ): AccessPolicyBinding {
        const message = { ...baseAccessPolicyBinding } as AccessPolicyBinding;
        message.accessPolicyTemplateId = object.accessPolicyTemplateId ?? '';
        message.parameters = Object.entries(object.parameters ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};

const baseAccessPolicyBinding_ParametersEntry: object = { key: '', value: '' };

export const AccessPolicyBinding_ParametersEntry: {
    encode(message: AccessPolicyBinding_ParametersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyBinding_ParametersEntry;
    fromJSON(object: any): AccessPolicyBinding_ParametersEntry;
    toJSON(message: AccessPolicyBinding_ParametersEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<AccessPolicyBinding_ParametersEntry>, I>>(object: I): AccessPolicyBinding_ParametersEntry;
} = {
    encode(
        message: AccessPolicyBinding_ParametersEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyBinding_ParametersEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAccessPolicyBinding_ParametersEntry,
        } as AccessPolicyBinding_ParametersEntry;
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

    fromJSON(object: any): AccessPolicyBinding_ParametersEntry {
        const message = {
            ...baseAccessPolicyBinding_ParametersEntry,
        } as AccessPolicyBinding_ParametersEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: AccessPolicyBinding_ParametersEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AccessPolicyBinding_ParametersEntry>, I>>(
        object: I,
    ): AccessPolicyBinding_ParametersEntry {
        const message = {
            ...baseAccessPolicyBinding_ParametersEntry,
        } as AccessPolicyBinding_ParametersEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseBindAccessPolicyRequest: object = { resourceId: '' };

export const BindAccessPolicyRequest: {
    encode(message: BindAccessPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BindAccessPolicyRequest;
    fromJSON(object: any): BindAccessPolicyRequest;
    toJSON(message: BindAccessPolicyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BindAccessPolicyRequest>, I>>(object: I): BindAccessPolicyRequest;
} = {
    encode(message: BindAccessPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.accessPolicyBinding !== undefined) {
            AccessPolicyBinding.encode(
                message.accessPolicyBinding,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BindAccessPolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBindAccessPolicyRequest } as BindAccessPolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessPolicyBinding = AccessPolicyBinding.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BindAccessPolicyRequest {
        const message = { ...baseBindAccessPolicyRequest } as BindAccessPolicyRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.accessPolicyBinding =
            object.accessPolicyBinding !== undefined && object.accessPolicyBinding !== null
                ? AccessPolicyBinding.fromJSON(object.accessPolicyBinding)
                : undefined;
        return message;
    },

    toJSON(message: BindAccessPolicyRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.accessPolicyBinding !== undefined &&
            (obj.accessPolicyBinding = message.accessPolicyBinding
                ? AccessPolicyBinding.toJSON(message.accessPolicyBinding)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BindAccessPolicyRequest>, I>>(
        object: I,
    ): BindAccessPolicyRequest {
        const message = { ...baseBindAccessPolicyRequest } as BindAccessPolicyRequest;
        message.resourceId = object.resourceId ?? '';
        message.accessPolicyBinding =
            object.accessPolicyBinding !== undefined && object.accessPolicyBinding !== null
                ? AccessPolicyBinding.fromPartial(object.accessPolicyBinding)
                : undefined;
        return message;
    },
};

const baseBindAccessPolicyMetadata: object = { resourceId: '' };

export const BindAccessPolicyMetadata: {
    encode(message: BindAccessPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BindAccessPolicyMetadata;
    fromJSON(object: any): BindAccessPolicyMetadata;
    toJSON(message: BindAccessPolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<BindAccessPolicyMetadata>, I>>(object: I): BindAccessPolicyMetadata;
} = {
    encode(
        message: BindAccessPolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.accessPolicyBinding !== undefined) {
            AccessPolicyBinding.encode(
                message.accessPolicyBinding,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BindAccessPolicyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBindAccessPolicyMetadata } as BindAccessPolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessPolicyBinding = AccessPolicyBinding.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BindAccessPolicyMetadata {
        const message = { ...baseBindAccessPolicyMetadata } as BindAccessPolicyMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.accessPolicyBinding =
            object.accessPolicyBinding !== undefined && object.accessPolicyBinding !== null
                ? AccessPolicyBinding.fromJSON(object.accessPolicyBinding)
                : undefined;
        return message;
    },

    toJSON(message: BindAccessPolicyMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.accessPolicyBinding !== undefined &&
            (obj.accessPolicyBinding = message.accessPolicyBinding
                ? AccessPolicyBinding.toJSON(message.accessPolicyBinding)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BindAccessPolicyMetadata>, I>>(
        object: I,
    ): BindAccessPolicyMetadata {
        const message = { ...baseBindAccessPolicyMetadata } as BindAccessPolicyMetadata;
        message.resourceId = object.resourceId ?? '';
        message.accessPolicyBinding =
            object.accessPolicyBinding !== undefined && object.accessPolicyBinding !== null
                ? AccessPolicyBinding.fromPartial(object.accessPolicyBinding)
                : undefined;
        return message;
    },
};

const baseBindAccessPolicyResponse: object = {};

export const BindAccessPolicyResponse: {
    encode(message: BindAccessPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BindAccessPolicyResponse;
    fromJSON(object: any): BindAccessPolicyResponse;
    toJSON(message: BindAccessPolicyResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<BindAccessPolicyResponse>, I>>(object: I): BindAccessPolicyResponse;
} = {
    encode(_: BindAccessPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BindAccessPolicyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBindAccessPolicyResponse } as BindAccessPolicyResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): BindAccessPolicyResponse {
        const message = { ...baseBindAccessPolicyResponse } as BindAccessPolicyResponse;
        return message;
    },

    toJSON(_: BindAccessPolicyResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BindAccessPolicyResponse>, I>>(
        _: I,
    ): BindAccessPolicyResponse {
        const message = { ...baseBindAccessPolicyResponse } as BindAccessPolicyResponse;
        return message;
    },
};

const baseListAccessBindingsRequest: object = { resourceId: '', pageSize: 0, pageToken: '' };

export const ListAccessBindingsRequest: {
    encode(message: ListAccessBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessBindingsRequest;
    fromJSON(object: any): ListAccessBindingsRequest;
    toJSON(message: ListAccessBindingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAccessBindingsRequest>, I>>(object: I): ListAccessBindingsRequest;
} = {
    encode(
        message: ListAccessBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessBindingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAccessBindingsRequest } as ListAccessBindingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
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

    fromJSON(object: any): ListAccessBindingsRequest {
        const message = { ...baseListAccessBindingsRequest } as ListAccessBindingsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessBindingsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessBindingsRequest>, I>>(
        object: I,
    ): ListAccessBindingsRequest {
        const message = { ...baseListAccessBindingsRequest } as ListAccessBindingsRequest;
        message.resourceId = object.resourceId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListAccessBindingsResponse: object = { nextPageToken: '' };

export const ListAccessBindingsResponse: {
    encode(message: ListAccessBindingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessBindingsResponse;
    fromJSON(object: any): ListAccessBindingsResponse;
    toJSON(message: ListAccessBindingsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAccessBindingsResponse>, I>>(object: I): ListAccessBindingsResponse;
} = {
    encode(
        message: ListAccessBindingsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.accessBindings) {
            AccessBinding.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessBindingsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAccessBindingsResponse } as ListAccessBindingsResponse;
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessBindings.push(AccessBinding.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListAccessBindingsResponse {
        const message = { ...baseListAccessBindingsResponse } as ListAccessBindingsResponse;
        message.accessBindings = (object.accessBindings ?? []).map((e: any) =>
            AccessBinding.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessBindingsResponse): unknown {
        const obj: any = {};
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) =>
                e ? AccessBinding.toJSON(e) : undefined,
            );
        } else {
            obj.accessBindings = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessBindingsResponse>, I>>(
        object: I,
    ): ListAccessBindingsResponse {
        const message = { ...baseListAccessBindingsResponse } as ListAccessBindingsResponse;
        message.accessBindings =
            object.accessBindings?.map((e) => AccessBinding.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListAccessPolicyBindingsRequest: object = { resourceId: '', pageSize: 0, pageToken: '' };

export const ListAccessPolicyBindingsRequest: {
    encode(message: ListAccessPolicyBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessPolicyBindingsRequest;
    fromJSON(object: any): ListAccessPolicyBindingsRequest;
    toJSON(message: ListAccessPolicyBindingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAccessPolicyBindingsRequest>, I>>(object: I): ListAccessPolicyBindingsRequest;
} = {
    encode(
        message: ListAccessPolicyBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessPolicyBindingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessPolicyBindingsRequest,
        } as ListAccessPolicyBindingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
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

    fromJSON(object: any): ListAccessPolicyBindingsRequest {
        const message = {
            ...baseListAccessPolicyBindingsRequest,
        } as ListAccessPolicyBindingsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessPolicyBindingsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessPolicyBindingsRequest>, I>>(
        object: I,
    ): ListAccessPolicyBindingsRequest {
        const message = {
            ...baseListAccessPolicyBindingsRequest,
        } as ListAccessPolicyBindingsRequest;
        message.resourceId = object.resourceId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListAccessPolicyBindingsResponse: object = { nextPageToken: '' };

export const ListAccessPolicyBindingsResponse: {
    encode(message: ListAccessPolicyBindingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessPolicyBindingsResponse;
    fromJSON(object: any): ListAccessPolicyBindingsResponse;
    toJSON(message: ListAccessPolicyBindingsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAccessPolicyBindingsResponse>, I>>(object: I): ListAccessPolicyBindingsResponse;
} = {
    encode(
        message: ListAccessPolicyBindingsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.accessPolicyBindings) {
            AccessPolicyBinding.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessPolicyBindingsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessPolicyBindingsResponse,
        } as ListAccessPolicyBindingsResponse;
        message.accessPolicyBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessPolicyBindings.push(
                        AccessPolicyBinding.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ListAccessPolicyBindingsResponse {
        const message = {
            ...baseListAccessPolicyBindingsResponse,
        } as ListAccessPolicyBindingsResponse;
        message.accessPolicyBindings = (object.accessPolicyBindings ?? []).map((e: any) =>
            AccessPolicyBinding.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessPolicyBindingsResponse): unknown {
        const obj: any = {};
        if (message.accessPolicyBindings) {
            obj.accessPolicyBindings = message.accessPolicyBindings.map((e) =>
                e ? AccessPolicyBinding.toJSON(e) : undefined,
            );
        } else {
            obj.accessPolicyBindings = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessPolicyBindingsResponse>, I>>(
        object: I,
    ): ListAccessPolicyBindingsResponse {
        const message = {
            ...baseListAccessPolicyBindingsResponse,
        } as ListAccessPolicyBindingsResponse;
        message.accessPolicyBindings =
            object.accessPolicyBindings?.map((e) => AccessPolicyBinding.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseUnbindAccessPolicyRequest: object = { resourceId: '', accessPolicyTemplateId: '' };

export const UnbindAccessPolicyRequest: {
    encode(message: UnbindAccessPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbindAccessPolicyRequest;
    fromJSON(object: any): UnbindAccessPolicyRequest;
    toJSON(message: UnbindAccessPolicyRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UnbindAccessPolicyRequest>, I>>(object: I): UnbindAccessPolicyRequest;
} = {
    encode(
        message: UnbindAccessPolicyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.accessPolicyTemplateId !== '') {
            writer.uint32(18).string(message.accessPolicyTemplateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UnbindAccessPolicyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUnbindAccessPolicyRequest } as UnbindAccessPolicyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessPolicyTemplateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UnbindAccessPolicyRequest {
        const message = { ...baseUnbindAccessPolicyRequest } as UnbindAccessPolicyRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.accessPolicyTemplateId =
            object.accessPolicyTemplateId !== undefined && object.accessPolicyTemplateId !== null
                ? String(object.accessPolicyTemplateId)
                : '';
        return message;
    },

    toJSON(message: UnbindAccessPolicyRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.accessPolicyTemplateId !== undefined &&
            (obj.accessPolicyTemplateId = message.accessPolicyTemplateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UnbindAccessPolicyRequest>, I>>(
        object: I,
    ): UnbindAccessPolicyRequest {
        const message = { ...baseUnbindAccessPolicyRequest } as UnbindAccessPolicyRequest;
        message.resourceId = object.resourceId ?? '';
        message.accessPolicyTemplateId = object.accessPolicyTemplateId ?? '';
        return message;
    },
};

const baseUnbindAccessPolicyMetadata: object = { resourceId: '', accessPolicyTemplateId: '' };

export const UnbindAccessPolicyMetadata: {
    encode(message: UnbindAccessPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbindAccessPolicyMetadata;
    fromJSON(object: any): UnbindAccessPolicyMetadata;
    toJSON(message: UnbindAccessPolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UnbindAccessPolicyMetadata>, I>>(object: I): UnbindAccessPolicyMetadata;
} = {
    encode(
        message: UnbindAccessPolicyMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.accessPolicyTemplateId !== '') {
            writer.uint32(18).string(message.accessPolicyTemplateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UnbindAccessPolicyMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUnbindAccessPolicyMetadata } as UnbindAccessPolicyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessPolicyTemplateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UnbindAccessPolicyMetadata {
        const message = { ...baseUnbindAccessPolicyMetadata } as UnbindAccessPolicyMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.accessPolicyTemplateId =
            object.accessPolicyTemplateId !== undefined && object.accessPolicyTemplateId !== null
                ? String(object.accessPolicyTemplateId)
                : '';
        return message;
    },

    toJSON(message: UnbindAccessPolicyMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.accessPolicyTemplateId !== undefined &&
            (obj.accessPolicyTemplateId = message.accessPolicyTemplateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UnbindAccessPolicyMetadata>, I>>(
        object: I,
    ): UnbindAccessPolicyMetadata {
        const message = { ...baseUnbindAccessPolicyMetadata } as UnbindAccessPolicyMetadata;
        message.resourceId = object.resourceId ?? '';
        message.accessPolicyTemplateId = object.accessPolicyTemplateId ?? '';
        return message;
    },
};

const baseUnbindAccessPolicyResponse: object = {};

export const UnbindAccessPolicyResponse: {
    encode(message: UnbindAccessPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbindAccessPolicyResponse;
    fromJSON(object: any): UnbindAccessPolicyResponse;
    toJSON(message: UnbindAccessPolicyResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<UnbindAccessPolicyResponse>, I>>(object: I): UnbindAccessPolicyResponse;
} = {
    encode(_: UnbindAccessPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UnbindAccessPolicyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUnbindAccessPolicyResponse } as UnbindAccessPolicyResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): UnbindAccessPolicyResponse {
        const message = { ...baseUnbindAccessPolicyResponse } as UnbindAccessPolicyResponse;
        return message;
    },

    toJSON(_: UnbindAccessPolicyResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UnbindAccessPolicyResponse>, I>>(
        _: I,
    ): UnbindAccessPolicyResponse {
        const message = { ...baseUnbindAccessPolicyResponse } as UnbindAccessPolicyResponse;
        return message;
    },
};

const baseUpdateAccessPolicyBindingParametersRequest: object = { resourceId: '' };

export const UpdateAccessPolicyBindingParametersRequest: {
    encode(message: UpdateAccessPolicyBindingParametersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessPolicyBindingParametersRequest;
    fromJSON(object: any): UpdateAccessPolicyBindingParametersRequest;
    toJSON(message: UpdateAccessPolicyBindingParametersRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAccessPolicyBindingParametersRequest>, I>>(object: I): UpdateAccessPolicyBindingParametersRequest;
} = {
    encode(
        message: UpdateAccessPolicyBindingParametersRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.accessPolicyBinding !== undefined) {
            AccessPolicyBinding.encode(
                message.accessPolicyBinding,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdateAccessPolicyBindingParametersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAccessPolicyBindingParametersRequest,
        } as UpdateAccessPolicyBindingParametersRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessPolicyBinding = AccessPolicyBinding.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAccessPolicyBindingParametersRequest {
        const message = {
            ...baseUpdateAccessPolicyBindingParametersRequest,
        } as UpdateAccessPolicyBindingParametersRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.accessPolicyBinding =
            object.accessPolicyBinding !== undefined && object.accessPolicyBinding !== null
                ? AccessPolicyBinding.fromJSON(object.accessPolicyBinding)
                : undefined;
        return message;
    },

    toJSON(message: UpdateAccessPolicyBindingParametersRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.accessPolicyBinding !== undefined &&
            (obj.accessPolicyBinding = message.accessPolicyBinding
                ? AccessPolicyBinding.toJSON(message.accessPolicyBinding)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAccessPolicyBindingParametersRequest>, I>>(
        object: I,
    ): UpdateAccessPolicyBindingParametersRequest {
        const message = {
            ...baseUpdateAccessPolicyBindingParametersRequest,
        } as UpdateAccessPolicyBindingParametersRequest;
        message.resourceId = object.resourceId ?? '';
        message.accessPolicyBinding =
            object.accessPolicyBinding !== undefined && object.accessPolicyBinding !== null
                ? AccessPolicyBinding.fromPartial(object.accessPolicyBinding)
                : undefined;
        return message;
    },
};

const baseUpdateAccessPolicyBindingParametersMetadata: object = { resourceId: '' };

export const UpdateAccessPolicyBindingParametersMetadata: {
    encode(message: UpdateAccessPolicyBindingParametersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessPolicyBindingParametersMetadata;
    fromJSON(object: any): UpdateAccessPolicyBindingParametersMetadata;
    toJSON(message: UpdateAccessPolicyBindingParametersMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAccessPolicyBindingParametersMetadata>, I>>(object: I): UpdateAccessPolicyBindingParametersMetadata;
} = {
    encode(
        message: UpdateAccessPolicyBindingParametersMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.accessPolicyBinding !== undefined) {
            AccessPolicyBinding.encode(
                message.accessPolicyBinding,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdateAccessPolicyBindingParametersMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAccessPolicyBindingParametersMetadata,
        } as UpdateAccessPolicyBindingParametersMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessPolicyBinding = AccessPolicyBinding.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAccessPolicyBindingParametersMetadata {
        const message = {
            ...baseUpdateAccessPolicyBindingParametersMetadata,
        } as UpdateAccessPolicyBindingParametersMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.accessPolicyBinding =
            object.accessPolicyBinding !== undefined && object.accessPolicyBinding !== null
                ? AccessPolicyBinding.fromJSON(object.accessPolicyBinding)
                : undefined;
        return message;
    },

    toJSON(message: UpdateAccessPolicyBindingParametersMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.accessPolicyBinding !== undefined &&
            (obj.accessPolicyBinding = message.accessPolicyBinding
                ? AccessPolicyBinding.toJSON(message.accessPolicyBinding)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAccessPolicyBindingParametersMetadata>, I>>(
        object: I,
    ): UpdateAccessPolicyBindingParametersMetadata {
        const message = {
            ...baseUpdateAccessPolicyBindingParametersMetadata,
        } as UpdateAccessPolicyBindingParametersMetadata;
        message.resourceId = object.resourceId ?? '';
        message.accessPolicyBinding =
            object.accessPolicyBinding !== undefined && object.accessPolicyBinding !== null
                ? AccessPolicyBinding.fromPartial(object.accessPolicyBinding)
                : undefined;
        return message;
    },
};

const baseUpdateAccessPolicyBindingParametersResponse: object = {};

export const UpdateAccessPolicyBindingParametersResponse: {
    encode(message: UpdateAccessPolicyBindingParametersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessPolicyBindingParametersResponse;
    fromJSON(object: any): UpdateAccessPolicyBindingParametersResponse;
    toJSON(message: UpdateAccessPolicyBindingParametersResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAccessPolicyBindingParametersResponse>, I>>(object: I): UpdateAccessPolicyBindingParametersResponse;
} = {
    encode(
        _: UpdateAccessPolicyBindingParametersResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdateAccessPolicyBindingParametersResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAccessPolicyBindingParametersResponse,
        } as UpdateAccessPolicyBindingParametersResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): UpdateAccessPolicyBindingParametersResponse {
        const message = {
            ...baseUpdateAccessPolicyBindingParametersResponse,
        } as UpdateAccessPolicyBindingParametersResponse;
        return message;
    },

    toJSON(_: UpdateAccessPolicyBindingParametersResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAccessPolicyBindingParametersResponse>, I>>(
        _: I,
    ): UpdateAccessPolicyBindingParametersResponse {
        const message = {
            ...baseUpdateAccessPolicyBindingParametersResponse,
        } as UpdateAccessPolicyBindingParametersResponse;
        return message;
    },
};

const baseSetAccessBindingsRequest: object = { resourceId: '' };

export const SetAccessBindingsRequest: {
    encode(message: SetAccessBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAccessBindingsRequest;
    fromJSON(object: any): SetAccessBindingsRequest;
    toJSON(message: SetAccessBindingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SetAccessBindingsRequest>, I>>(object: I): SetAccessBindingsRequest;
} = {
    encode(
        message: SetAccessBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindings) {
            AccessBinding.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetAccessBindingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetAccessBindingsRequest } as SetAccessBindingsRequest;
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessBindings.push(AccessBinding.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetAccessBindingsRequest {
        const message = { ...baseSetAccessBindingsRequest } as SetAccessBindingsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.accessBindings = (object.accessBindings ?? []).map((e: any) =>
            AccessBinding.fromJSON(e),
        );
        return message;
    },

    toJSON(message: SetAccessBindingsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) =>
                e ? AccessBinding.toJSON(e) : undefined,
            );
        } else {
            obj.accessBindings = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetAccessBindingsRequest>, I>>(
        object: I,
    ): SetAccessBindingsRequest {
        const message = { ...baseSetAccessBindingsRequest } as SetAccessBindingsRequest;
        message.resourceId = object.resourceId ?? '';
        message.accessBindings =
            object.accessBindings?.map((e) => AccessBinding.fromPartial(e)) || [];
        return message;
    },
};

const baseSetAccessBindingsMetadata: object = { resourceId: '' };

export const SetAccessBindingsMetadata: {
    encode(message: SetAccessBindingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAccessBindingsMetadata;
    fromJSON(object: any): SetAccessBindingsMetadata;
    toJSON(message: SetAccessBindingsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SetAccessBindingsMetadata>, I>>(object: I): SetAccessBindingsMetadata;
} = {
    encode(
        message: SetAccessBindingsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetAccessBindingsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetAccessBindingsMetadata } as SetAccessBindingsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetAccessBindingsMetadata {
        const message = { ...baseSetAccessBindingsMetadata } as SetAccessBindingsMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: SetAccessBindingsMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetAccessBindingsMetadata>, I>>(
        object: I,
    ): SetAccessBindingsMetadata {
        const message = { ...baseSetAccessBindingsMetadata } as SetAccessBindingsMetadata;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseUpdateAccessBindingsRequest: object = { resourceId: '' };

export const UpdateAccessBindingsRequest: {
    encode(message: UpdateAccessBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessBindingsRequest;
    fromJSON(object: any): UpdateAccessBindingsRequest;
    toJSON(message: UpdateAccessBindingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAccessBindingsRequest>, I>>(object: I): UpdateAccessBindingsRequest;
} = {
    encode(
        message: UpdateAccessBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindingDeltas) {
            AccessBindingDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessBindingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAccessBindingsRequest } as UpdateAccessBindingsRequest;
        message.accessBindingDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessBindingDeltas.push(
                        AccessBindingDelta.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAccessBindingsRequest {
        const message = { ...baseUpdateAccessBindingsRequest } as UpdateAccessBindingsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.accessBindingDeltas = (object.accessBindingDeltas ?? []).map((e: any) =>
            AccessBindingDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateAccessBindingsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        if (message.accessBindingDeltas) {
            obj.accessBindingDeltas = message.accessBindingDeltas.map((e) =>
                e ? AccessBindingDelta.toJSON(e) : undefined,
            );
        } else {
            obj.accessBindingDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAccessBindingsRequest>, I>>(
        object: I,
    ): UpdateAccessBindingsRequest {
        const message = { ...baseUpdateAccessBindingsRequest } as UpdateAccessBindingsRequest;
        message.resourceId = object.resourceId ?? '';
        message.accessBindingDeltas =
            object.accessBindingDeltas?.map((e) => AccessBindingDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateAccessBindingsMetadata: object = { resourceId: '' };

export const UpdateAccessBindingsMetadata: {
    encode(message: UpdateAccessBindingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessBindingsMetadata;
    fromJSON(object: any): UpdateAccessBindingsMetadata;
    toJSON(message: UpdateAccessBindingsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAccessBindingsMetadata>, I>>(object: I): UpdateAccessBindingsMetadata;
} = {
    encode(
        message: UpdateAccessBindingsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccessBindingsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAccessBindingsMetadata } as UpdateAccessBindingsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAccessBindingsMetadata {
        const message = { ...baseUpdateAccessBindingsMetadata } as UpdateAccessBindingsMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: UpdateAccessBindingsMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAccessBindingsMetadata>, I>>(
        object: I,
    ): UpdateAccessBindingsMetadata {
        const message = { ...baseUpdateAccessBindingsMetadata } as UpdateAccessBindingsMetadata;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseAccessBindingDelta: object = { action: 0 };

export const AccessBindingDelta: {
    encode(message: AccessBindingDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessBindingDelta;
    fromJSON(object: any): AccessBindingDelta;
    toJSON(message: AccessBindingDelta): unknown;
    fromPartial<I extends Exact<DeepPartial<AccessBindingDelta>, I>>(object: I): AccessBindingDelta;
} = {
    encode(message: AccessBindingDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.accessBinding !== undefined) {
            AccessBinding.encode(message.accessBinding, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessBindingDelta {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBindingDelta } as AccessBindingDelta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.accessBinding = AccessBinding.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AccessBindingDelta {
        const message = { ...baseAccessBindingDelta } as AccessBindingDelta;
        message.action =
            object.action !== undefined && object.action !== null
                ? accessBindingActionFromJSON(object.action)
                : 0;
        message.accessBinding =
            object.accessBinding !== undefined && object.accessBinding !== null
                ? AccessBinding.fromJSON(object.accessBinding)
                : undefined;
        return message;
    },

    toJSON(message: AccessBindingDelta): unknown {
        const obj: any = {};
        message.action !== undefined && (obj.action = accessBindingActionToJSON(message.action));
        message.accessBinding !== undefined &&
            (obj.accessBinding = message.accessBinding
                ? AccessBinding.toJSON(message.accessBinding)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AccessBindingDelta>, I>>(
        object: I,
    ): AccessBindingDelta {
        const message = { ...baseAccessBindingDelta } as AccessBindingDelta;
        message.action = object.action ?? 0;
        message.accessBinding =
            object.accessBinding !== undefined && object.accessBinding !== null
                ? AccessBinding.fromPartial(object.accessBinding)
                : undefined;
        return message;
    },
};

const baseAccessBindingsOperationResult: object = {};

export const AccessBindingsOperationResult: {
    encode(message: AccessBindingsOperationResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessBindingsOperationResult;
    fromJSON(object: any): AccessBindingsOperationResult;
    toJSON(message: AccessBindingsOperationResult): unknown;
    fromPartial<I extends Exact<DeepPartial<AccessBindingsOperationResult>, I>>(object: I): AccessBindingsOperationResult;
} = {
    encode(
        message: AccessBindingsOperationResult,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.effectiveDeltas) {
            AccessBindingDelta.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessBindingsOperationResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessBindingsOperationResult } as AccessBindingsOperationResult;
        message.effectiveDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveDeltas.push(
                        AccessBindingDelta.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AccessBindingsOperationResult {
        const message = { ...baseAccessBindingsOperationResult } as AccessBindingsOperationResult;
        message.effectiveDeltas = (object.effectiveDeltas ?? []).map((e: any) =>
            AccessBindingDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: AccessBindingsOperationResult): unknown {
        const obj: any = {};
        if (message.effectiveDeltas) {
            obj.effectiveDeltas = message.effectiveDeltas.map((e) =>
                e ? AccessBindingDelta.toJSON(e) : undefined,
            );
        } else {
            obj.effectiveDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AccessBindingsOperationResult>, I>>(
        object: I,
    ): AccessBindingsOperationResult {
        const message = { ...baseAccessBindingsOperationResult } as AccessBindingsOperationResult;
        message.effectiveDeltas =
            object.effectiveDeltas?.map((e) => AccessBindingDelta.fromPartial(e)) || [];
        return message;
    },
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
