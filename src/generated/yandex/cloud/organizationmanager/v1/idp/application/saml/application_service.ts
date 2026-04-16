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
import {
    ServiceProvider,
    GroupClaimsSettings,
    SecuritySettings_SignatureMode,
    NameId_Format,
    SecuritySettings,
    Application,
    Attribute,
    securitySettings_SignatureModeFromJSON,
    securitySettings_SignatureModeToJSON,
    nameId_FormatFromJSON,
    nameId_FormatToJSON,
} from './application';
import { FieldMask } from '../../../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../access/access';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp.application.saml';

/** Actions that can be performed on assignments. */
export enum AssignmentAction {
    /** ASSIGNMENT_ACTION_UNSPECIFIED - The assignment action is not specified. */
    ASSIGNMENT_ACTION_UNSPECIFIED = 0,
    /** ADD - Add an assignment. */
    ADD = 1,
    /** REMOVE - Remove an assignment. */
    REMOVE = 2,
    UNRECOGNIZED = -1,
}

export function assignmentActionFromJSON(object: any): AssignmentAction {
    switch (object) {
        case 0:
        case 'ASSIGNMENT_ACTION_UNSPECIFIED':
            return AssignmentAction.ASSIGNMENT_ACTION_UNSPECIFIED;
        case 1:
        case 'ADD':
            return AssignmentAction.ADD;
        case 2:
        case 'REMOVE':
            return AssignmentAction.REMOVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AssignmentAction.UNRECOGNIZED;
    }
}

export function assignmentActionToJSON(object: AssignmentAction): string {
    switch (object) {
        case AssignmentAction.ASSIGNMENT_ACTION_UNSPECIFIED:
            return 'ASSIGNMENT_ACTION_UNSPECIFIED';
        case AssignmentAction.ADD:
            return 'ADD';
        case AssignmentAction.REMOVE:
            return 'REMOVE';
        default:
            return 'UNKNOWN';
    }
}

/** Request to get a SAML application by ID. */
export interface GetApplicationRequest {
    /** ID of the SAML application to return. */
    applicationId: string;
}

/** Request to list SAML applications in an organization. */
export interface ListApplicationsRequest {
    /** ID of the organization to list applications in. */
    organizationId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /** Page token for pagination. */
    pageToken: string;
    /** A filter expression that filters resources listed in the response. */
    filter: string;
}

/** Response message for [ApplicationService.List]. */
export interface ListApplicationsResponse {
    /** List of SAML applications. */
    applications: Application[];
    /** Token for getting the next page of the list. */
    nextPageToken: string;
}

/** Request to create a new SAML application. */
export interface CreateApplicationRequest {
    /** ID of the organization to create the application in. */
    organizationId: string;
    /** Name of the SAML application. */
    name: string;
    /** Description of the SAML application. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** Service provider configuration for the SAML application. */
    serviceProvider?: ServiceProvider;
    /** Security settings for the SAML application. */
    securitySettings?: SecuritySettingsSpec;
    /** Attribute mapping configuration for the SAML application. */
    attributeMapping?: AttributeMappingSpec;
    /** Group claims settings for the SAML application. */
    groupClaimsSettings?: GroupClaimsSettings;
}

export interface CreateApplicationRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Security settings specification for SAML application creation. */
export interface SecuritySettingsSpec {
    /** Signature mode for SAML assertions and responses. */
    signatureMode: SecuritySettings_SignatureMode;
}

/** NameID specification for SAML application. */
export interface NameIdSpec {
    /** Format of the NameID. */
    format: NameId_Format;
    /** Value of the NameID. */
    value: string;
}

/** Attribute mapping specification for SAML application. */
export interface AttributeMappingSpec {
    /** NameID configuration. */
    nameId?: NameIdSpec;
    /** List of attribute mappings. */
    attributes: Attribute[];
}

/** Metadata for the [ApplicationService.Create] operation. */
export interface CreateApplicationMetadata {
    /** ID of the SAML application that is being created. */
    applicationId: string;
}

/** Request to update an existing SAML application. */
export interface UpdateApplicationRequest {
    /** ID of the SAML application to update. */
    applicationId: string;
    /** Field mask that specifies which fields of the application are going to be updated. */
    updateMask?: FieldMask;
    /** New name for the SAML application. */
    name: string;
    /** New description for the SAML application. */
    description: string;
    /** New resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** New service provider configuration for the SAML application. */
    serviceProvider?: ServiceProvider;
    /** New security settings for the SAML application. */
    securitySettings?: SecuritySettings;
    /** New attribute mapping configuration for the SAML application. */
    attributeMapping?: AttributeMappingSpec;
    /** New group claims settings for the SAML application. */
    groupClaimsSettings?: GroupClaimsSettings;
}

export interface UpdateApplicationRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Metadata for the [ApplicationService.Update] operation. */
export interface UpdateApplicationMetadata {
    /** ID of the SAML application that is being updated. */
    applicationId: string;
}

/** Request to delete a SAML application. */
export interface DeleteApplicationRequest {
    /** ID of the SAML application to delete. */
    applicationId: string;
}

/** Metadata for the [ApplicationService.Delete] operation. */
export interface DeleteApplicationMetadata {
    /** ID of the SAML application that is being deleted. */
    applicationId: string;
}

/** Request to suspend a SAML application. */
export interface SuspendApplicationRequest {
    /** ID of the SAML application to suspend. */
    applicationId: string;
}

/** Metadata for the [ApplicationService.Suspend] operation. */
export interface SuspendApplicationMetadata {
    /** ID of the SAML application that is being suspended. */
    applicationId: string;
}

/** Request to reactivate a suspended SAML application. */
export interface ReactivateApplicationRequest {
    /** ID of the SAML application to reactivate. */
    applicationId: string;
}

/** Metadata for the [ApplicationService.Reactivate] operation. */
export interface ReactivateApplicationMetadata {
    /** ID of the SAML application that is being reactivated. */
    applicationId: string;
}

/** Request to list supported attribute values for SAML applications. */
export interface ListSupportedAttributeValuesRequest {}

/** Response message for [ApplicationService.ListSupportedAttributeValues]. */
export interface ListSupportedAttributeValuesResponse {
    /** List of supported attribute values. */
    supportedAttributeValues: SupportedAttributeValue[];
}

/** A supported attribute value for SAML applications. */
export interface SupportedAttributeValue {
    /** The attribute value. */
    value: string;
}

/** Request to list operations for a SAML application. */
export interface ListApplicationOperationsRequest {
    /** ID of the SAML application to list operations for. */
    applicationId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /** Page token for pagination. */
    pageToken: string;
}

/** Response message for [ApplicationService.ListOperations]. */
export interface ListApplicationOperationsResponse {
    /** List of operations. */
    operations: Operation[];
    /** Token for getting the next page of the list. */
    nextPageToken: string;
}

/** An assignment for a SAML application. */
export interface Assignment {
    /** ID of the subject being assigned. */
    subjectId: string;
}

/** A delta operation on assignments. */
export interface AssignmentDelta {
    /** Action to perform on the assignment. */
    action: AssignmentAction;
    /** Assignment to perform the action on. */
    assignment?: Assignment;
}

/** Response message for [ApplicationService.UpdateAssignments]. */
export interface UpdateAssignmentsResponse {
    /** List of assignment deltas that were applied. */
    assignmentDeltas: AssignmentDelta[];
}

/** Request to list assignments for a SAML application. */
export interface ListAssignmentsRequest {
    /** ID of the SAML application to list assignments for. */
    applicationId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /** Page token for pagination. */
    pageToken: string;
}

/** Response message for [ApplicationService.ListAssignments]. */
export interface ListAssignmentsResponse {
    /** List of assignments. */
    assignments: Assignment[];
    /** Token for getting the next page of the list. */
    nextPageToken: string;
}

/** Request to update assignments for a SAML application. */
export interface UpdateAssignmentsRequest {
    /** ID of the SAML application to update assignments for. */
    applicationId: string;
    /** List of assignment deltas to apply. */
    assignmentDeltas: AssignmentDelta[];
}

/** Metadata for the [ApplicationService.UpdateAssignments] operation. */
export interface UpdateAssignmentsMetadata {
    /** ID of the SAML application whose assignments are being updated. */
    applicationId: string;
}

const baseGetApplicationRequest: object = { applicationId: '' };

export const GetApplicationRequest: {
    encode(message: GetApplicationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetApplicationRequest;
    fromJSON(object: any): GetApplicationRequest;
    toJSON(message: GetApplicationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetApplicationRequest>, I>>(object: I): GetApplicationRequest;
} = {
    encode(message: GetApplicationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetApplicationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetApplicationRequest } as GetApplicationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetApplicationRequest {
        const message = { ...baseGetApplicationRequest } as GetApplicationRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: GetApplicationRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetApplicationRequest>, I>>(
        object: I,
    ): GetApplicationRequest {
        const message = { ...baseGetApplicationRequest } as GetApplicationRequest;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseListApplicationsRequest: object = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListApplicationsRequest: {
    encode(message: ListApplicationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListApplicationsRequest;
    fromJSON(object: any): ListApplicationsRequest;
    toJSON(message: ListApplicationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListApplicationsRequest>, I>>(object: I): ListApplicationsRequest;
} = {
    encode(message: ListApplicationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListApplicationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListApplicationsRequest } as ListApplicationsRequest;
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

    fromJSON(object: any): ListApplicationsRequest {
        const message = { ...baseListApplicationsRequest } as ListApplicationsRequest;
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

    toJSON(message: ListApplicationsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListApplicationsRequest>, I>>(
        object: I,
    ): ListApplicationsRequest {
        const message = { ...baseListApplicationsRequest } as ListApplicationsRequest;
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListApplicationsResponse: object = { nextPageToken: '' };

export const ListApplicationsResponse: {
    encode(message: ListApplicationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListApplicationsResponse;
    fromJSON(object: any): ListApplicationsResponse;
    toJSON(message: ListApplicationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListApplicationsResponse>, I>>(object: I): ListApplicationsResponse;
} = {
    encode(
        message: ListApplicationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.applications) {
            Application.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListApplicationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListApplicationsResponse } as ListApplicationsResponse;
        message.applications = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applications.push(Application.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListApplicationsResponse {
        const message = { ...baseListApplicationsResponse } as ListApplicationsResponse;
        message.applications = (object.applications ?? []).map((e: any) => Application.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListApplicationsResponse): unknown {
        const obj: any = {};
        if (message.applications) {
            obj.applications = message.applications.map((e) =>
                e ? Application.toJSON(e) : undefined,
            );
        } else {
            obj.applications = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListApplicationsResponse>, I>>(
        object: I,
    ): ListApplicationsResponse {
        const message = { ...baseListApplicationsResponse } as ListApplicationsResponse;
        message.applications = object.applications?.map((e) => Application.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateApplicationRequest: object = { organizationId: '', name: '', description: '' };

export const CreateApplicationRequest: {
    encode(message: CreateApplicationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateApplicationRequest;
    fromJSON(object: any): CreateApplicationRequest;
    toJSON(message: CreateApplicationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateApplicationRequest>, I>>(object: I): CreateApplicationRequest;
} = {
    encode(
        message: CreateApplicationRequest,
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
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateApplicationRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.serviceProvider !== undefined) {
            ServiceProvider.encode(message.serviceProvider, writer.uint32(42).fork()).ldelim();
        }
        if (message.securitySettings !== undefined) {
            SecuritySettingsSpec.encode(
                message.securitySettings,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.attributeMapping !== undefined) {
            AttributeMappingSpec.encode(
                message.attributeMapping,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.groupClaimsSettings !== undefined) {
            GroupClaimsSettings.encode(
                message.groupClaimsSettings,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateApplicationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateApplicationRequest } as CreateApplicationRequest;
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
                    const entry4 = CreateApplicationRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.serviceProvider = ServiceProvider.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.securitySettings = SecuritySettingsSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.attributeMapping = AttributeMappingSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.groupClaimsSettings = GroupClaimsSettings.decode(
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

    fromJSON(object: any): CreateApplicationRequest {
        const message = { ...baseCreateApplicationRequest } as CreateApplicationRequest;
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
        message.serviceProvider =
            object.serviceProvider !== undefined && object.serviceProvider !== null
                ? ServiceProvider.fromJSON(object.serviceProvider)
                : undefined;
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? SecuritySettingsSpec.fromJSON(object.securitySettings)
                : undefined;
        message.attributeMapping =
            object.attributeMapping !== undefined && object.attributeMapping !== null
                ? AttributeMappingSpec.fromJSON(object.attributeMapping)
                : undefined;
        message.groupClaimsSettings =
            object.groupClaimsSettings !== undefined && object.groupClaimsSettings !== null
                ? GroupClaimsSettings.fromJSON(object.groupClaimsSettings)
                : undefined;
        return message;
    },

    toJSON(message: CreateApplicationRequest): unknown {
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
        message.serviceProvider !== undefined &&
            (obj.serviceProvider = message.serviceProvider
                ? ServiceProvider.toJSON(message.serviceProvider)
                : undefined);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? SecuritySettingsSpec.toJSON(message.securitySettings)
                : undefined);
        message.attributeMapping !== undefined &&
            (obj.attributeMapping = message.attributeMapping
                ? AttributeMappingSpec.toJSON(message.attributeMapping)
                : undefined);
        message.groupClaimsSettings !== undefined &&
            (obj.groupClaimsSettings = message.groupClaimsSettings
                ? GroupClaimsSettings.toJSON(message.groupClaimsSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateApplicationRequest>, I>>(
        object: I,
    ): CreateApplicationRequest {
        const message = { ...baseCreateApplicationRequest } as CreateApplicationRequest;
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
        message.serviceProvider =
            object.serviceProvider !== undefined && object.serviceProvider !== null
                ? ServiceProvider.fromPartial(object.serviceProvider)
                : undefined;
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? SecuritySettingsSpec.fromPartial(object.securitySettings)
                : undefined;
        message.attributeMapping =
            object.attributeMapping !== undefined && object.attributeMapping !== null
                ? AttributeMappingSpec.fromPartial(object.attributeMapping)
                : undefined;
        message.groupClaimsSettings =
            object.groupClaimsSettings !== undefined && object.groupClaimsSettings !== null
                ? GroupClaimsSettings.fromPartial(object.groupClaimsSettings)
                : undefined;
        return message;
    },
};

const baseCreateApplicationRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateApplicationRequest_LabelsEntry: {
    encode(message: CreateApplicationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateApplicationRequest_LabelsEntry;
    fromJSON(object: any): CreateApplicationRequest_LabelsEntry;
    toJSON(message: CreateApplicationRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateApplicationRequest_LabelsEntry>, I>>(object: I): CreateApplicationRequest_LabelsEntry;
} = {
    encode(
        message: CreateApplicationRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateApplicationRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateApplicationRequest_LabelsEntry,
        } as CreateApplicationRequest_LabelsEntry;
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

    fromJSON(object: any): CreateApplicationRequest_LabelsEntry {
        const message = {
            ...baseCreateApplicationRequest_LabelsEntry,
        } as CreateApplicationRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateApplicationRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateApplicationRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateApplicationRequest_LabelsEntry {
        const message = {
            ...baseCreateApplicationRequest_LabelsEntry,
        } as CreateApplicationRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseSecuritySettingsSpec: object = { signatureMode: 0 };

export const SecuritySettingsSpec: {
    encode(message: SecuritySettingsSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecuritySettingsSpec;
    fromJSON(object: any): SecuritySettingsSpec;
    toJSON(message: SecuritySettingsSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<SecuritySettingsSpec>, I>>(object: I): SecuritySettingsSpec;
} = {
    encode(message: SecuritySettingsSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.signatureMode !== 0) {
            writer.uint32(8).int32(message.signatureMode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecuritySettingsSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecuritySettingsSpec } as SecuritySettingsSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureMode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecuritySettingsSpec {
        const message = { ...baseSecuritySettingsSpec } as SecuritySettingsSpec;
        message.signatureMode =
            object.signatureMode !== undefined && object.signatureMode !== null
                ? securitySettings_SignatureModeFromJSON(object.signatureMode)
                : 0;
        return message;
    },

    toJSON(message: SecuritySettingsSpec): unknown {
        const obj: any = {};
        message.signatureMode !== undefined &&
            (obj.signatureMode = securitySettings_SignatureModeToJSON(message.signatureMode));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecuritySettingsSpec>, I>>(
        object: I,
    ): SecuritySettingsSpec {
        const message = { ...baseSecuritySettingsSpec } as SecuritySettingsSpec;
        message.signatureMode = object.signatureMode ?? 0;
        return message;
    },
};

const baseNameIdSpec: object = { format: 0, value: '' };

export const NameIdSpec: {
    encode(message: NameIdSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameIdSpec;
    fromJSON(object: any): NameIdSpec;
    toJSON(message: NameIdSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<NameIdSpec>, I>>(object: I): NameIdSpec;
} = {
    encode(message: NameIdSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.format !== 0) {
            writer.uint32(8).int32(message.format);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NameIdSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNameIdSpec } as NameIdSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.format = reader.int32() as any;
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

    fromJSON(object: any): NameIdSpec {
        const message = { ...baseNameIdSpec } as NameIdSpec;
        message.format =
            object.format !== undefined && object.format !== null
                ? nameId_FormatFromJSON(object.format)
                : 0;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: NameIdSpec): unknown {
        const obj: any = {};
        message.format !== undefined && (obj.format = nameId_FormatToJSON(message.format));
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NameIdSpec>, I>>(object: I): NameIdSpec {
        const message = { ...baseNameIdSpec } as NameIdSpec;
        message.format = object.format ?? 0;
        message.value = object.value ?? '';
        return message;
    },
};

const baseAttributeMappingSpec: object = {};

export const AttributeMappingSpec: {
    encode(message: AttributeMappingSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeMappingSpec;
    fromJSON(object: any): AttributeMappingSpec;
    toJSON(message: AttributeMappingSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<AttributeMappingSpec>, I>>(object: I): AttributeMappingSpec;
} = {
    encode(message: AttributeMappingSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.nameId !== undefined) {
            NameIdSpec.encode(message.nameId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeMappingSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttributeMappingSpec } as AttributeMappingSpec;
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nameId = NameIdSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttributeMappingSpec {
        const message = { ...baseAttributeMappingSpec } as AttributeMappingSpec;
        message.nameId =
            object.nameId !== undefined && object.nameId !== null
                ? NameIdSpec.fromJSON(object.nameId)
                : undefined;
        message.attributes = (object.attributes ?? []).map((e: any) => Attribute.fromJSON(e));
        return message;
    },

    toJSON(message: AttributeMappingSpec): unknown {
        const obj: any = {};
        message.nameId !== undefined &&
            (obj.nameId = message.nameId ? NameIdSpec.toJSON(message.nameId) : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => (e ? Attribute.toJSON(e) : undefined));
        } else {
            obj.attributes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AttributeMappingSpec>, I>>(
        object: I,
    ): AttributeMappingSpec {
        const message = { ...baseAttributeMappingSpec } as AttributeMappingSpec;
        message.nameId =
            object.nameId !== undefined && object.nameId !== null
                ? NameIdSpec.fromPartial(object.nameId)
                : undefined;
        message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateApplicationMetadata: object = { applicationId: '' };

export const CreateApplicationMetadata: {
    encode(message: CreateApplicationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateApplicationMetadata;
    fromJSON(object: any): CreateApplicationMetadata;
    toJSON(message: CreateApplicationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateApplicationMetadata>, I>>(object: I): CreateApplicationMetadata;
} = {
    encode(
        message: CreateApplicationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateApplicationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateApplicationMetadata } as CreateApplicationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateApplicationMetadata {
        const message = { ...baseCreateApplicationMetadata } as CreateApplicationMetadata;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: CreateApplicationMetadata): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateApplicationMetadata>, I>>(
        object: I,
    ): CreateApplicationMetadata {
        const message = { ...baseCreateApplicationMetadata } as CreateApplicationMetadata;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseUpdateApplicationRequest: object = { applicationId: '', name: '', description: '' };

export const UpdateApplicationRequest: {
    encode(message: UpdateApplicationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApplicationRequest;
    fromJSON(object: any): UpdateApplicationRequest;
    toJSON(message: UpdateApplicationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateApplicationRequest>, I>>(object: I): UpdateApplicationRequest;
} = {
    encode(
        message: UpdateApplicationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
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
            UpdateApplicationRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.serviceProvider !== undefined) {
            ServiceProvider.encode(message.serviceProvider, writer.uint32(50).fork()).ldelim();
        }
        if (message.securitySettings !== undefined) {
            SecuritySettings.encode(message.securitySettings, writer.uint32(58).fork()).ldelim();
        }
        if (message.attributeMapping !== undefined) {
            AttributeMappingSpec.encode(
                message.attributeMapping,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.groupClaimsSettings !== undefined) {
            GroupClaimsSettings.encode(
                message.groupClaimsSettings,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApplicationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateApplicationRequest } as UpdateApplicationRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
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
                    const entry5 = UpdateApplicationRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.serviceProvider = ServiceProvider.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.securitySettings = SecuritySettings.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.attributeMapping = AttributeMappingSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.groupClaimsSettings = GroupClaimsSettings.decode(
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

    fromJSON(object: any): UpdateApplicationRequest {
        const message = { ...baseUpdateApplicationRequest } as UpdateApplicationRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
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
        message.serviceProvider =
            object.serviceProvider !== undefined && object.serviceProvider !== null
                ? ServiceProvider.fromJSON(object.serviceProvider)
                : undefined;
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? SecuritySettings.fromJSON(object.securitySettings)
                : undefined;
        message.attributeMapping =
            object.attributeMapping !== undefined && object.attributeMapping !== null
                ? AttributeMappingSpec.fromJSON(object.attributeMapping)
                : undefined;
        message.groupClaimsSettings =
            object.groupClaimsSettings !== undefined && object.groupClaimsSettings !== null
                ? GroupClaimsSettings.fromJSON(object.groupClaimsSettings)
                : undefined;
        return message;
    },

    toJSON(message: UpdateApplicationRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
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
        message.serviceProvider !== undefined &&
            (obj.serviceProvider = message.serviceProvider
                ? ServiceProvider.toJSON(message.serviceProvider)
                : undefined);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? SecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.attributeMapping !== undefined &&
            (obj.attributeMapping = message.attributeMapping
                ? AttributeMappingSpec.toJSON(message.attributeMapping)
                : undefined);
        message.groupClaimsSettings !== undefined &&
            (obj.groupClaimsSettings = message.groupClaimsSettings
                ? GroupClaimsSettings.toJSON(message.groupClaimsSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateApplicationRequest>, I>>(
        object: I,
    ): UpdateApplicationRequest {
        const message = { ...baseUpdateApplicationRequest } as UpdateApplicationRequest;
        message.applicationId = object.applicationId ?? '';
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
        message.serviceProvider =
            object.serviceProvider !== undefined && object.serviceProvider !== null
                ? ServiceProvider.fromPartial(object.serviceProvider)
                : undefined;
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? SecuritySettings.fromPartial(object.securitySettings)
                : undefined;
        message.attributeMapping =
            object.attributeMapping !== undefined && object.attributeMapping !== null
                ? AttributeMappingSpec.fromPartial(object.attributeMapping)
                : undefined;
        message.groupClaimsSettings =
            object.groupClaimsSettings !== undefined && object.groupClaimsSettings !== null
                ? GroupClaimsSettings.fromPartial(object.groupClaimsSettings)
                : undefined;
        return message;
    },
};

const baseUpdateApplicationRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateApplicationRequest_LabelsEntry: {
    encode(message: UpdateApplicationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApplicationRequest_LabelsEntry;
    fromJSON(object: any): UpdateApplicationRequest_LabelsEntry;
    toJSON(message: UpdateApplicationRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateApplicationRequest_LabelsEntry>, I>>(object: I): UpdateApplicationRequest_LabelsEntry;
} = {
    encode(
        message: UpdateApplicationRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApplicationRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateApplicationRequest_LabelsEntry,
        } as UpdateApplicationRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateApplicationRequest_LabelsEntry {
        const message = {
            ...baseUpdateApplicationRequest_LabelsEntry,
        } as UpdateApplicationRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateApplicationRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateApplicationRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateApplicationRequest_LabelsEntry {
        const message = {
            ...baseUpdateApplicationRequest_LabelsEntry,
        } as UpdateApplicationRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateApplicationMetadata: object = { applicationId: '' };

export const UpdateApplicationMetadata: {
    encode(message: UpdateApplicationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApplicationMetadata;
    fromJSON(object: any): UpdateApplicationMetadata;
    toJSON(message: UpdateApplicationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateApplicationMetadata>, I>>(object: I): UpdateApplicationMetadata;
} = {
    encode(
        message: UpdateApplicationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApplicationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateApplicationMetadata } as UpdateApplicationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateApplicationMetadata {
        const message = { ...baseUpdateApplicationMetadata } as UpdateApplicationMetadata;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: UpdateApplicationMetadata): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateApplicationMetadata>, I>>(
        object: I,
    ): UpdateApplicationMetadata {
        const message = { ...baseUpdateApplicationMetadata } as UpdateApplicationMetadata;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseDeleteApplicationRequest: object = { applicationId: '' };

export const DeleteApplicationRequest: {
    encode(message: DeleteApplicationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApplicationRequest;
    fromJSON(object: any): DeleteApplicationRequest;
    toJSON(message: DeleteApplicationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteApplicationRequest>, I>>(object: I): DeleteApplicationRequest;
} = {
    encode(
        message: DeleteApplicationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApplicationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteApplicationRequest } as DeleteApplicationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteApplicationRequest {
        const message = { ...baseDeleteApplicationRequest } as DeleteApplicationRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: DeleteApplicationRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteApplicationRequest>, I>>(
        object: I,
    ): DeleteApplicationRequest {
        const message = { ...baseDeleteApplicationRequest } as DeleteApplicationRequest;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseDeleteApplicationMetadata: object = { applicationId: '' };

export const DeleteApplicationMetadata: {
    encode(message: DeleteApplicationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApplicationMetadata;
    fromJSON(object: any): DeleteApplicationMetadata;
    toJSON(message: DeleteApplicationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteApplicationMetadata>, I>>(object: I): DeleteApplicationMetadata;
} = {
    encode(
        message: DeleteApplicationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApplicationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteApplicationMetadata } as DeleteApplicationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteApplicationMetadata {
        const message = { ...baseDeleteApplicationMetadata } as DeleteApplicationMetadata;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: DeleteApplicationMetadata): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteApplicationMetadata>, I>>(
        object: I,
    ): DeleteApplicationMetadata {
        const message = { ...baseDeleteApplicationMetadata } as DeleteApplicationMetadata;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseSuspendApplicationRequest: object = { applicationId: '' };

export const SuspendApplicationRequest: {
    encode(message: SuspendApplicationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendApplicationRequest;
    fromJSON(object: any): SuspendApplicationRequest;
    toJSON(message: SuspendApplicationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SuspendApplicationRequest>, I>>(object: I): SuspendApplicationRequest;
} = {
    encode(
        message: SuspendApplicationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendApplicationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSuspendApplicationRequest } as SuspendApplicationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SuspendApplicationRequest {
        const message = { ...baseSuspendApplicationRequest } as SuspendApplicationRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: SuspendApplicationRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuspendApplicationRequest>, I>>(
        object: I,
    ): SuspendApplicationRequest {
        const message = { ...baseSuspendApplicationRequest } as SuspendApplicationRequest;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseSuspendApplicationMetadata: object = { applicationId: '' };

export const SuspendApplicationMetadata: {
    encode(message: SuspendApplicationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendApplicationMetadata;
    fromJSON(object: any): SuspendApplicationMetadata;
    toJSON(message: SuspendApplicationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SuspendApplicationMetadata>, I>>(object: I): SuspendApplicationMetadata;
} = {
    encode(
        message: SuspendApplicationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendApplicationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSuspendApplicationMetadata } as SuspendApplicationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SuspendApplicationMetadata {
        const message = { ...baseSuspendApplicationMetadata } as SuspendApplicationMetadata;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: SuspendApplicationMetadata): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuspendApplicationMetadata>, I>>(
        object: I,
    ): SuspendApplicationMetadata {
        const message = { ...baseSuspendApplicationMetadata } as SuspendApplicationMetadata;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseReactivateApplicationRequest: object = { applicationId: '' };

export const ReactivateApplicationRequest: {
    encode(message: ReactivateApplicationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateApplicationRequest;
    fromJSON(object: any): ReactivateApplicationRequest;
    toJSON(message: ReactivateApplicationRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ReactivateApplicationRequest>, I>>(object: I): ReactivateApplicationRequest;
} = {
    encode(
        message: ReactivateApplicationRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateApplicationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReactivateApplicationRequest } as ReactivateApplicationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReactivateApplicationRequest {
        const message = { ...baseReactivateApplicationRequest } as ReactivateApplicationRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: ReactivateApplicationRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReactivateApplicationRequest>, I>>(
        object: I,
    ): ReactivateApplicationRequest {
        const message = { ...baseReactivateApplicationRequest } as ReactivateApplicationRequest;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseReactivateApplicationMetadata: object = { applicationId: '' };

export const ReactivateApplicationMetadata: {
    encode(message: ReactivateApplicationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateApplicationMetadata;
    fromJSON(object: any): ReactivateApplicationMetadata;
    toJSON(message: ReactivateApplicationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ReactivateApplicationMetadata>, I>>(object: I): ReactivateApplicationMetadata;
} = {
    encode(
        message: ReactivateApplicationMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateApplicationMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReactivateApplicationMetadata } as ReactivateApplicationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReactivateApplicationMetadata {
        const message = { ...baseReactivateApplicationMetadata } as ReactivateApplicationMetadata;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: ReactivateApplicationMetadata): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReactivateApplicationMetadata>, I>>(
        object: I,
    ): ReactivateApplicationMetadata {
        const message = { ...baseReactivateApplicationMetadata } as ReactivateApplicationMetadata;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

const baseListSupportedAttributeValuesRequest: object = {};

export const ListSupportedAttributeValuesRequest: {
    encode(message: ListSupportedAttributeValuesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportedAttributeValuesRequest;
    fromJSON(object: any): ListSupportedAttributeValuesRequest;
    toJSON(message: ListSupportedAttributeValuesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSupportedAttributeValuesRequest>, I>>(object: I): ListSupportedAttributeValuesRequest;
} = {
    encode(
        _: ListSupportedAttributeValuesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportedAttributeValuesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSupportedAttributeValuesRequest,
        } as ListSupportedAttributeValuesRequest;
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

    fromJSON(_: any): ListSupportedAttributeValuesRequest {
        const message = {
            ...baseListSupportedAttributeValuesRequest,
        } as ListSupportedAttributeValuesRequest;
        return message;
    },

    toJSON(_: ListSupportedAttributeValuesRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSupportedAttributeValuesRequest>, I>>(
        _: I,
    ): ListSupportedAttributeValuesRequest {
        const message = {
            ...baseListSupportedAttributeValuesRequest,
        } as ListSupportedAttributeValuesRequest;
        return message;
    },
};

const baseListSupportedAttributeValuesResponse: object = {};

export const ListSupportedAttributeValuesResponse: {
    encode(message: ListSupportedAttributeValuesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportedAttributeValuesResponse;
    fromJSON(object: any): ListSupportedAttributeValuesResponse;
    toJSON(message: ListSupportedAttributeValuesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSupportedAttributeValuesResponse>, I>>(object: I): ListSupportedAttributeValuesResponse;
} = {
    encode(
        message: ListSupportedAttributeValuesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.supportedAttributeValues) {
            SupportedAttributeValue.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportedAttributeValuesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSupportedAttributeValuesResponse,
        } as ListSupportedAttributeValuesResponse;
        message.supportedAttributeValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supportedAttributeValues.push(
                        SupportedAttributeValue.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSupportedAttributeValuesResponse {
        const message = {
            ...baseListSupportedAttributeValuesResponse,
        } as ListSupportedAttributeValuesResponse;
        message.supportedAttributeValues = (object.supportedAttributeValues ?? []).map((e: any) =>
            SupportedAttributeValue.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ListSupportedAttributeValuesResponse): unknown {
        const obj: any = {};
        if (message.supportedAttributeValues) {
            obj.supportedAttributeValues = message.supportedAttributeValues.map((e) =>
                e ? SupportedAttributeValue.toJSON(e) : undefined,
            );
        } else {
            obj.supportedAttributeValues = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSupportedAttributeValuesResponse>, I>>(
        object: I,
    ): ListSupportedAttributeValuesResponse {
        const message = {
            ...baseListSupportedAttributeValuesResponse,
        } as ListSupportedAttributeValuesResponse;
        message.supportedAttributeValues =
            object.supportedAttributeValues?.map((e) => SupportedAttributeValue.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseSupportedAttributeValue: object = { value: '' };

export const SupportedAttributeValue: {
    encode(message: SupportedAttributeValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SupportedAttributeValue;
    fromJSON(object: any): SupportedAttributeValue;
    toJSON(message: SupportedAttributeValue): unknown;
    fromPartial<I extends Exact<DeepPartial<SupportedAttributeValue>, I>>(object: I): SupportedAttributeValue;
} = {
    encode(message: SupportedAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SupportedAttributeValue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSupportedAttributeValue } as SupportedAttributeValue;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SupportedAttributeValue {
        const message = { ...baseSupportedAttributeValue } as SupportedAttributeValue;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: SupportedAttributeValue): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SupportedAttributeValue>, I>>(
        object: I,
    ): SupportedAttributeValue {
        const message = { ...baseSupportedAttributeValue } as SupportedAttributeValue;
        message.value = object.value ?? '';
        return message;
    },
};

const baseListApplicationOperationsRequest: object = {
    applicationId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListApplicationOperationsRequest: {
    encode(message: ListApplicationOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListApplicationOperationsRequest;
    fromJSON(object: any): ListApplicationOperationsRequest;
    toJSON(message: ListApplicationOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListApplicationOperationsRequest>, I>>(object: I): ListApplicationOperationsRequest;
} = {
    encode(
        message: ListApplicationOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListApplicationOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApplicationOperationsRequest,
        } as ListApplicationOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
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

    fromJSON(object: any): ListApplicationOperationsRequest {
        const message = {
            ...baseListApplicationOperationsRequest,
        } as ListApplicationOperationsRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListApplicationOperationsRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListApplicationOperationsRequest>, I>>(
        object: I,
    ): ListApplicationOperationsRequest {
        const message = {
            ...baseListApplicationOperationsRequest,
        } as ListApplicationOperationsRequest;
        message.applicationId = object.applicationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListApplicationOperationsResponse: object = { nextPageToken: '' };

export const ListApplicationOperationsResponse: {
    encode(message: ListApplicationOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListApplicationOperationsResponse;
    fromJSON(object: any): ListApplicationOperationsResponse;
    toJSON(message: ListApplicationOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListApplicationOperationsResponse>, I>>(object: I): ListApplicationOperationsResponse;
} = {
    encode(
        message: ListApplicationOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListApplicationOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApplicationOperationsResponse,
        } as ListApplicationOperationsResponse;
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

    fromJSON(object: any): ListApplicationOperationsResponse {
        const message = {
            ...baseListApplicationOperationsResponse,
        } as ListApplicationOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListApplicationOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListApplicationOperationsResponse>, I>>(
        object: I,
    ): ListApplicationOperationsResponse {
        const message = {
            ...baseListApplicationOperationsResponse,
        } as ListApplicationOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseAssignment: object = { subjectId: '' };

export const Assignment: {
    encode(message: Assignment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Assignment;
    fromJSON(object: any): Assignment;
    toJSON(message: Assignment): unknown;
    fromPartial<I extends Exact<DeepPartial<Assignment>, I>>(object: I): Assignment;
} = {
    encode(message: Assignment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subjectId !== '') {
            writer.uint32(10).string(message.subjectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Assignment {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssignment } as Assignment;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Assignment {
        const message = { ...baseAssignment } as Assignment;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        return message;
    },

    toJSON(message: Assignment): unknown {
        const obj: any = {};
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Assignment>, I>>(object: I): Assignment {
        const message = { ...baseAssignment } as Assignment;
        message.subjectId = object.subjectId ?? '';
        return message;
    },
};

const baseAssignmentDelta: object = { action: 0 };

export const AssignmentDelta: {
    encode(message: AssignmentDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssignmentDelta;
    fromJSON(object: any): AssignmentDelta;
    toJSON(message: AssignmentDelta): unknown;
    fromPartial<I extends Exact<DeepPartial<AssignmentDelta>, I>>(object: I): AssignmentDelta;
} = {
    encode(message: AssignmentDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.assignment !== undefined) {
            Assignment.encode(message.assignment, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AssignmentDelta {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssignmentDelta } as AssignmentDelta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.assignment = Assignment.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AssignmentDelta {
        const message = { ...baseAssignmentDelta } as AssignmentDelta;
        message.action =
            object.action !== undefined && object.action !== null
                ? assignmentActionFromJSON(object.action)
                : 0;
        message.assignment =
            object.assignment !== undefined && object.assignment !== null
                ? Assignment.fromJSON(object.assignment)
                : undefined;
        return message;
    },

    toJSON(message: AssignmentDelta): unknown {
        const obj: any = {};
        message.action !== undefined && (obj.action = assignmentActionToJSON(message.action));
        message.assignment !== undefined &&
            (obj.assignment = message.assignment
                ? Assignment.toJSON(message.assignment)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AssignmentDelta>, I>>(object: I): AssignmentDelta {
        const message = { ...baseAssignmentDelta } as AssignmentDelta;
        message.action = object.action ?? 0;
        message.assignment =
            object.assignment !== undefined && object.assignment !== null
                ? Assignment.fromPartial(object.assignment)
                : undefined;
        return message;
    },
};

const baseUpdateAssignmentsResponse: object = {};

export const UpdateAssignmentsResponse: {
    encode(message: UpdateAssignmentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssignmentsResponse;
    fromJSON(object: any): UpdateAssignmentsResponse;
    toJSON(message: UpdateAssignmentsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAssignmentsResponse>, I>>(object: I): UpdateAssignmentsResponse;
} = {
    encode(
        message: UpdateAssignmentsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.assignmentDeltas) {
            AssignmentDelta.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssignmentsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAssignmentsResponse } as UpdateAssignmentsResponse;
        message.assignmentDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assignmentDeltas.push(AssignmentDelta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAssignmentsResponse {
        const message = { ...baseUpdateAssignmentsResponse } as UpdateAssignmentsResponse;
        message.assignmentDeltas = (object.assignmentDeltas ?? []).map((e: any) =>
            AssignmentDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateAssignmentsResponse): unknown {
        const obj: any = {};
        if (message.assignmentDeltas) {
            obj.assignmentDeltas = message.assignmentDeltas.map((e) =>
                e ? AssignmentDelta.toJSON(e) : undefined,
            );
        } else {
            obj.assignmentDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAssignmentsResponse>, I>>(
        object: I,
    ): UpdateAssignmentsResponse {
        const message = { ...baseUpdateAssignmentsResponse } as UpdateAssignmentsResponse;
        message.assignmentDeltas =
            object.assignmentDeltas?.map((e) => AssignmentDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseListAssignmentsRequest: object = { applicationId: '', pageSize: 0, pageToken: '' };

export const ListAssignmentsRequest: {
    encode(message: ListAssignmentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssignmentsRequest;
    fromJSON(object: any): ListAssignmentsRequest;
    toJSON(message: ListAssignmentsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAssignmentsRequest>, I>>(object: I): ListAssignmentsRequest;
} = {
    encode(message: ListAssignmentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssignmentsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAssignmentsRequest } as ListAssignmentsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
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

    fromJSON(object: any): ListAssignmentsRequest {
        const message = { ...baseListAssignmentsRequest } as ListAssignmentsRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListAssignmentsRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAssignmentsRequest>, I>>(
        object: I,
    ): ListAssignmentsRequest {
        const message = { ...baseListAssignmentsRequest } as ListAssignmentsRequest;
        message.applicationId = object.applicationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListAssignmentsResponse: object = { nextPageToken: '' };

export const ListAssignmentsResponse: {
    encode(message: ListAssignmentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssignmentsResponse;
    fromJSON(object: any): ListAssignmentsResponse;
    toJSON(message: ListAssignmentsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAssignmentsResponse>, I>>(object: I): ListAssignmentsResponse;
} = {
    encode(message: ListAssignmentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.assignments) {
            Assignment.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssignmentsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAssignmentsResponse } as ListAssignmentsResponse;
        message.assignments = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assignments.push(Assignment.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListAssignmentsResponse {
        const message = { ...baseListAssignmentsResponse } as ListAssignmentsResponse;
        message.assignments = (object.assignments ?? []).map((e: any) => Assignment.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAssignmentsResponse): unknown {
        const obj: any = {};
        if (message.assignments) {
            obj.assignments = message.assignments.map((e) =>
                e ? Assignment.toJSON(e) : undefined,
            );
        } else {
            obj.assignments = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAssignmentsResponse>, I>>(
        object: I,
    ): ListAssignmentsResponse {
        const message = { ...baseListAssignmentsResponse } as ListAssignmentsResponse;
        message.assignments = object.assignments?.map((e) => Assignment.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseUpdateAssignmentsRequest: object = { applicationId: '' };

export const UpdateAssignmentsRequest: {
    encode(message: UpdateAssignmentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssignmentsRequest;
    fromJSON(object: any): UpdateAssignmentsRequest;
    toJSON(message: UpdateAssignmentsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAssignmentsRequest>, I>>(object: I): UpdateAssignmentsRequest;
} = {
    encode(
        message: UpdateAssignmentsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        for (const v of message.assignmentDeltas) {
            AssignmentDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssignmentsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAssignmentsRequest } as UpdateAssignmentsRequest;
        message.assignmentDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                case 2:
                    message.assignmentDeltas.push(AssignmentDelta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAssignmentsRequest {
        const message = { ...baseUpdateAssignmentsRequest } as UpdateAssignmentsRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        message.assignmentDeltas = (object.assignmentDeltas ?? []).map((e: any) =>
            AssignmentDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateAssignmentsRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        if (message.assignmentDeltas) {
            obj.assignmentDeltas = message.assignmentDeltas.map((e) =>
                e ? AssignmentDelta.toJSON(e) : undefined,
            );
        } else {
            obj.assignmentDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAssignmentsRequest>, I>>(
        object: I,
    ): UpdateAssignmentsRequest {
        const message = { ...baseUpdateAssignmentsRequest } as UpdateAssignmentsRequest;
        message.applicationId = object.applicationId ?? '';
        message.assignmentDeltas =
            object.assignmentDeltas?.map((e) => AssignmentDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateAssignmentsMetadata: object = { applicationId: '' };

export const UpdateAssignmentsMetadata: {
    encode(message: UpdateAssignmentsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssignmentsMetadata;
    fromJSON(object: any): UpdateAssignmentsMetadata;
    toJSON(message: UpdateAssignmentsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAssignmentsMetadata>, I>>(object: I): UpdateAssignmentsMetadata;
} = {
    encode(
        message: UpdateAssignmentsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssignmentsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAssignmentsMetadata } as UpdateAssignmentsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAssignmentsMetadata {
        const message = { ...baseUpdateAssignmentsMetadata } as UpdateAssignmentsMetadata;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        return message;
    },

    toJSON(message: UpdateAssignmentsMetadata): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAssignmentsMetadata>, I>>(
        object: I,
    ): UpdateAssignmentsMetadata {
        const message = { ...baseUpdateAssignmentsMetadata } as UpdateAssignmentsMetadata;
        message.applicationId = object.applicationId ?? '';
        return message;
    },
};

/** A set of methods for managing SAML applications in the Identity Provider system. */
export const ApplicationServiceService = {
    /**
     * Returns the specified SAML application.
     *
     * To get the list of available applications, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetApplicationRequest) =>
            Buffer.from(GetApplicationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetApplicationRequest.decode(value),
        responseSerialize: (value: Application) => Buffer.from(Application.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Application.decode(value),
    },
    /** Retrieves the list of SAML applications in the specified organization. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListApplicationsRequest) =>
            Buffer.from(ListApplicationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListApplicationsRequest.decode(value),
        responseSerialize: (value: ListApplicationsResponse) =>
            Buffer.from(ListApplicationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListApplicationsResponse.decode(value),
    },
    /** Creates a SAML application in the specified organization. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateApplicationRequest) =>
            Buffer.from(CreateApplicationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateApplicationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified SAML application. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateApplicationRequest) =>
            Buffer.from(UpdateApplicationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateApplicationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified SAML application. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteApplicationRequest) =>
            Buffer.from(DeleteApplicationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteApplicationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Suspends the specified SAML application. */
    suspend: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/Suspend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SuspendApplicationRequest) =>
            Buffer.from(SuspendApplicationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SuspendApplicationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Reactivates a previously suspended SAML application. */
    reactivate: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/Reactivate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ReactivateApplicationRequest) =>
            Buffer.from(ReactivateApplicationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ReactivateApplicationRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the list of supported attribute values for SAML applications. */
    listSupportedAttributeValues: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/ListSupportedAttributeValues',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSupportedAttributeValuesRequest) =>
            Buffer.from(ListSupportedAttributeValuesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSupportedAttributeValuesRequest.decode(value),
        responseSerialize: (value: ListSupportedAttributeValuesResponse) =>
            Buffer.from(ListSupportedAttributeValuesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSupportedAttributeValuesResponse.decode(value),
    },
    /** Lists operations for the specified SAML application. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListApplicationOperationsRequest) =>
            Buffer.from(ListApplicationOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListApplicationOperationsRequest.decode(value),
        responseSerialize: (value: ListApplicationOperationsResponse) =>
            Buffer.from(ListApplicationOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListApplicationOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified SAML application. */
    listAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified SAML application. */
    setAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified SAML application. */
    updateAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists assignments for the specified SAML application. */
    listAssignments: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/ListAssignments',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAssignmentsRequest) =>
            Buffer.from(ListAssignmentsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAssignmentsRequest.decode(value),
        responseSerialize: (value: ListAssignmentsResponse) =>
            Buffer.from(ListAssignmentsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAssignmentsResponse.decode(value),
    },
    /** Updates assignments for the specified SAML application. */
    updateAssignments: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService/UpdateAssignments',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAssignmentsRequest) =>
            Buffer.from(UpdateAssignmentsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAssignmentsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ApplicationServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified SAML application.
     *
     * To get the list of available applications, make a [List] request.
     */
    get: handleUnaryCall<GetApplicationRequest, Application>;
    /** Retrieves the list of SAML applications in the specified organization. */
    list: handleUnaryCall<ListApplicationsRequest, ListApplicationsResponse>;
    /** Creates a SAML application in the specified organization. */
    create: handleUnaryCall<CreateApplicationRequest, Operation>;
    /** Updates the specified SAML application. */
    update: handleUnaryCall<UpdateApplicationRequest, Operation>;
    /** Deletes the specified SAML application. */
    delete: handleUnaryCall<DeleteApplicationRequest, Operation>;
    /** Suspends the specified SAML application. */
    suspend: handleUnaryCall<SuspendApplicationRequest, Operation>;
    /** Reactivates a previously suspended SAML application. */
    reactivate: handleUnaryCall<ReactivateApplicationRequest, Operation>;
    /** Returns the list of supported attribute values for SAML applications. */
    listSupportedAttributeValues: handleUnaryCall<
        ListSupportedAttributeValuesRequest,
        ListSupportedAttributeValuesResponse
    >;
    /** Lists operations for the specified SAML application. */
    listOperations: handleUnaryCall<
        ListApplicationOperationsRequest,
        ListApplicationOperationsResponse
    >;
    /** Lists access bindings for the specified SAML application. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified SAML application. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified SAML application. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Lists assignments for the specified SAML application. */
    listAssignments: handleUnaryCall<ListAssignmentsRequest, ListAssignmentsResponse>;
    /** Updates assignments for the specified SAML application. */
    updateAssignments: handleUnaryCall<UpdateAssignmentsRequest, Operation>;
}

export interface ApplicationServiceClient extends Client {
    /**
     * Returns the specified SAML application.
     *
     * To get the list of available applications, make a [List] request.
     */
    get(
        request: GetApplicationRequest,
        callback: (error: ServiceError | null, response: Application) => void,
    ): ClientUnaryCall;
    get(
        request: GetApplicationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Application) => void,
    ): ClientUnaryCall;
    get(
        request: GetApplicationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Application) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of SAML applications in the specified organization. */
    list(
        request: ListApplicationsRequest,
        callback: (error: ServiceError | null, response: ListApplicationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListApplicationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListApplicationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListApplicationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListApplicationsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a SAML application in the specified organization. */
    create(
        request: CreateApplicationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateApplicationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateApplicationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified SAML application. */
    update(
        request: UpdateApplicationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateApplicationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateApplicationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified SAML application. */
    delete(
        request: DeleteApplicationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteApplicationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteApplicationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Suspends the specified SAML application. */
    suspend(
        request: SuspendApplicationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    suspend(
        request: SuspendApplicationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    suspend(
        request: SuspendApplicationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Reactivates a previously suspended SAML application. */
    reactivate(
        request: ReactivateApplicationRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reactivate(
        request: ReactivateApplicationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reactivate(
        request: ReactivateApplicationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns the list of supported attribute values for SAML applications. */
    listSupportedAttributeValues(
        request: ListSupportedAttributeValuesRequest,
        callback: (
            error: ServiceError | null,
            response: ListSupportedAttributeValuesResponse,
        ) => void,
    ): ClientUnaryCall;
    listSupportedAttributeValues(
        request: ListSupportedAttributeValuesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSupportedAttributeValuesResponse,
        ) => void,
    ): ClientUnaryCall;
    listSupportedAttributeValues(
        request: ListSupportedAttributeValuesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSupportedAttributeValuesResponse,
        ) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified SAML application. */
    listOperations(
        request: ListApplicationOperationsRequest,
        callback: (error: ServiceError | null, response: ListApplicationOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListApplicationOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListApplicationOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListApplicationOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListApplicationOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the specified SAML application. */
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
    /** Sets access bindings for the specified SAML application. */
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
    /** Updates access bindings for the specified SAML application. */
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
    /** Lists assignments for the specified SAML application. */
    listAssignments(
        request: ListAssignmentsRequest,
        callback: (error: ServiceError | null, response: ListAssignmentsResponse) => void,
    ): ClientUnaryCall;
    listAssignments(
        request: ListAssignmentsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAssignmentsResponse) => void,
    ): ClientUnaryCall;
    listAssignments(
        request: ListAssignmentsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAssignmentsResponse) => void,
    ): ClientUnaryCall;
    /** Updates assignments for the specified SAML application. */
    updateAssignments(
        request: UpdateAssignmentsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAssignments(
        request: UpdateAssignmentsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAssignments(
        request: UpdateAssignmentsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ApplicationServiceClient = makeGenericClientConstructor(
    ApplicationServiceService,
    'yandex.cloud.organizationmanager.v1.idp.application.saml.ApplicationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ApplicationServiceClient;
    service: typeof ApplicationServiceService;
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
