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
import { Instance } from './instance';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.gitlab.v1';

/** Request message for InstanceService.Get */
export interface GetInstanceRequest {
    /** ID of the GitLab instance to return */
    instanceId: string;
}

/** Request message for InstanceService.List. */
export interface ListInstancesRequest {
    /** ID of the folder to list instances in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListInstancesRequest.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListInstancesRequest.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
}

/** Response message for InstanceService.List. */
export interface ListInstancesResponse {
    /** List of GitLab instances. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstancesRequest.page_size], use the [next_page_token] as the value
     * for the [ListInstancesRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

/** Request message for InstanceService.Create. */
export interface CreateInstanceRequest {
    /** ID of the folder to create instance in. */
    folderId: string;
    /** Name of the instance (must be unique within the folder). */
    name: string;
    /** Description of the instance. */
    description: string;
    /** Custom labels for the instance as `` key:value `` pairs. For example, "env": "prod". */
    labels: { [key: string]: string };
    /** ID of the resource preset for computational resources. */
    resourcePresetId: string;
    /** Disk size in bytes. */
    diskSize: number;
    /** Admin user login. */
    adminLogin: string;
    /** Admin user email. */
    adminEmail: string;
    /** Domain prefix for the GitLab instance. */
    domainPrefix: string;
    /** ID of the subnet where instance will be created. */
    subnetId: string;
    /** Number of days to retain backups. */
    backupRetainPeriodDays: number;
    /** Whether to delete untagged resources during maintenance. */
    maintenanceDeleteUntagged: boolean;
    /** Whether deletion protection is enabled. */
    deletionProtection: boolean;
    /** ID of approval rules for the instance. */
    approvalRulesId: string;
}

export interface CreateInstanceRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Metadata message for InstanceService.Create. */
export interface CreateInstanceMetadata {
    /** ID of the GitLab instance being created. */
    instanceId: string;
}

/** Request message for InstanceService.Update. */
export interface UpdateInstanceRequest {
    /** ID of the GitLab instance to update. */
    instanceId: string;
    /** Name of the instance (must be unique within the folder). */
    name: string;
    /** Description of the instance. */
    description: string;
    /** Custom labels for the instance as `` key:value `` pairs. For example, "env": "prod" */
    labels: { [key: string]: string };
    /** Number of days to retain backups. */
    backupRetainPeriodDays: number;
    /** ID of the resource preset for computational resources. */
    resourcePresetId: string;
    /** Whether to delete untagged resources during maintenance. */
    maintenanceDeleteUntagged: boolean;
    /** Whether deletion protection is enabled. */
    deletionProtection: boolean;
    /** ID of approval rules for the instance. */
    approvalRulesId: string;
    /** Token of approval rules for the instance. */
    approvalRulesToken: string;
    /** Disk size in bytes. */
    diskSize: number;
    /** Field mask that specifies which attributes of the trail are going to be updated. */
    updateMask?: FieldMask;
}

export interface UpdateInstanceRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Metadata message for InstanceService.Update. */
export interface UpdateInstanceMetadata {
    /** ID of the GitLab instance to update. */
    instanceId: string;
}

/** Request message for InstanceService.Delete. */
export interface DeleteInstanceRequest {
    /** ID of the GitLab instance to delete. */
    instanceId: string;
}

/** Metadata message for InstanceService.Delete. */
export interface DeleteInstanceMetadata {
    /** ID of the GitLab instance being deleted. */
    instanceId: string;
}

/** Request message for InstanceService.Start. */
export interface StartInstanceRequest {
    /** ID of the GitLab instance to start. */
    instanceId: string;
}

/** Metadata message for InstanceService.Start. */
export interface StartInstanceMetadata {
    /** ID of the GitLab instance being started. */
    instanceId: string;
}

/** Request message for InstanceService.Stop. */
export interface StopInstanceRequest {
    instanceId: string;
}

/** Metadata message for InstanceService.Stop. */
export interface StopInstanceMetadata {
    /** ID of the GitLab instance being stoped. */
    instanceId: string;
}

const baseGetInstanceRequest: object = { instanceId: '' };

export const GetInstanceRequest: {
    encode(message: GetInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest;
    fromJSON(object: any): GetInstanceRequest;
    toJSON(message: GetInstanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetInstanceRequest>, I>>(object: I): GetInstanceRequest;
} = {
    encode(message: GetInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetInstanceRequest {
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: GetInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetInstanceRequest>, I>>(
        object: I,
    ): GetInstanceRequest {
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseListInstancesRequest: object = { folderId: '', pageSize: 0, pageToken: '' };

export const ListInstancesRequest: {
    encode(message: ListInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest;
    fromJSON(object: any): ListInstancesRequest;
    toJSON(message: ListInstancesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListInstancesRequest>, I>>(object: I): ListInstancesRequest;
} = {
    encode(message: ListInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListInstancesRequest } as ListInstancesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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

    fromJSON(object: any): ListInstancesRequest {
        const message = { ...baseListInstancesRequest } as ListInstancesRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListInstancesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListInstancesRequest>, I>>(
        object: I,
    ): ListInstancesRequest {
        const message = { ...baseListInstancesRequest } as ListInstancesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListInstancesResponse: object = { nextPageToken: '' };

export const ListInstancesResponse: {
    encode(message: ListInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesResponse;
    fromJSON(object: any): ListInstancesResponse;
    toJSON(message: ListInstancesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListInstancesResponse>, I>>(object: I): ListInstancesResponse;
} = {
    encode(message: ListInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.instances) {
            Instance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListInstancesResponse } as ListInstancesResponse;
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(Instance.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListInstancesResponse {
        const message = { ...baseListInstancesResponse } as ListInstancesResponse;
        message.instances = (object.instances ?? []).map((e: any) => Instance.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListInstancesResponse): unknown {
        const obj: any = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) => (e ? Instance.toJSON(e) : undefined));
        } else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListInstancesResponse>, I>>(
        object: I,
    ): ListInstancesResponse {
        const message = { ...baseListInstancesResponse } as ListInstancesResponse;
        message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateInstanceRequest: object = {
    folderId: '',
    name: '',
    description: '',
    resourcePresetId: '',
    diskSize: 0,
    adminLogin: '',
    adminEmail: '',
    domainPrefix: '',
    subnetId: '',
    backupRetainPeriodDays: 0,
    maintenanceDeleteUntagged: false,
    deletionProtection: false,
    approvalRulesId: '',
};

export const CreateInstanceRequest: {
    encode(message: CreateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest;
    fromJSON(object: any): CreateInstanceRequest;
    toJSON(message: CreateInstanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateInstanceRequest>, I>>(object: I): CreateInstanceRequest;
} = {
    encode(message: CreateInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateInstanceRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.resourcePresetId !== '') {
            writer.uint32(42).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(48).int64(message.diskSize);
        }
        if (message.adminLogin !== '') {
            writer.uint32(58).string(message.adminLogin);
        }
        if (message.adminEmail !== '') {
            writer.uint32(66).string(message.adminEmail);
        }
        if (message.domainPrefix !== '') {
            writer.uint32(74).string(message.domainPrefix);
        }
        if (message.subnetId !== '') {
            writer.uint32(82).string(message.subnetId);
        }
        if (message.backupRetainPeriodDays !== 0) {
            writer.uint32(96).int64(message.backupRetainPeriodDays);
        }
        if (message.maintenanceDeleteUntagged === true) {
            writer.uint32(112).bool(message.maintenanceDeleteUntagged);
        }
        if (message.deletionProtection === true) {
            writer.uint32(120).bool(message.deletionProtection);
        }
        if (message.approvalRulesId !== '') {
            writer.uint32(154).string(message.approvalRulesId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateInstanceRequest } as CreateInstanceRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateInstanceRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.resourcePresetId = reader.string();
                    break;
                case 6:
                    message.diskSize = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.adminLogin = reader.string();
                    break;
                case 8:
                    message.adminEmail = reader.string();
                    break;
                case 9:
                    message.domainPrefix = reader.string();
                    break;
                case 10:
                    message.subnetId = reader.string();
                    break;
                case 12:
                    message.backupRetainPeriodDays = longToNumber(reader.int64() as Long);
                    break;
                case 14:
                    message.maintenanceDeleteUntagged = reader.bool();
                    break;
                case 15:
                    message.deletionProtection = reader.bool();
                    break;
                case 19:
                    message.approvalRulesId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateInstanceRequest {
        const message = { ...baseCreateInstanceRequest } as CreateInstanceRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
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
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : '';
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null ? Number(object.diskSize) : 0;
        message.adminLogin =
            object.adminLogin !== undefined && object.adminLogin !== null
                ? String(object.adminLogin)
                : '';
        message.adminEmail =
            object.adminEmail !== undefined && object.adminEmail !== null
                ? String(object.adminEmail)
                : '';
        message.domainPrefix =
            object.domainPrefix !== undefined && object.domainPrefix !== null
                ? String(object.domainPrefix)
                : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.backupRetainPeriodDays =
            object.backupRetainPeriodDays !== undefined && object.backupRetainPeriodDays !== null
                ? Number(object.backupRetainPeriodDays)
                : 0;
        message.maintenanceDeleteUntagged =
            object.maintenanceDeleteUntagged !== undefined &&
            object.maintenanceDeleteUntagged !== null
                ? Boolean(object.maintenanceDeleteUntagged)
                : false;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.approvalRulesId =
            object.approvalRulesId !== undefined && object.approvalRulesId !== null
                ? String(object.approvalRulesId)
                : '';
        return message;
    },

    toJSON(message: CreateInstanceRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.resourcePresetId !== undefined && (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined && (obj.diskSize = Math.round(message.diskSize));
        message.adminLogin !== undefined && (obj.adminLogin = message.adminLogin);
        message.adminEmail !== undefined && (obj.adminEmail = message.adminEmail);
        message.domainPrefix !== undefined && (obj.domainPrefix = message.domainPrefix);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = Math.round(message.backupRetainPeriodDays));
        message.maintenanceDeleteUntagged !== undefined &&
            (obj.maintenanceDeleteUntagged = message.maintenanceDeleteUntagged);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.approvalRulesId !== undefined && (obj.approvalRulesId = message.approvalRulesId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateInstanceRequest>, I>>(
        object: I,
    ): CreateInstanceRequest {
        const message = { ...baseCreateInstanceRequest } as CreateInstanceRequest;
        message.folderId = object.folderId ?? '';
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
        message.resourcePresetId = object.resourcePresetId ?? '';
        message.diskSize = object.diskSize ?? 0;
        message.adminLogin = object.adminLogin ?? '';
        message.adminEmail = object.adminEmail ?? '';
        message.domainPrefix = object.domainPrefix ?? '';
        message.subnetId = object.subnetId ?? '';
        message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? 0;
        message.maintenanceDeleteUntagged = object.maintenanceDeleteUntagged ?? false;
        message.deletionProtection = object.deletionProtection ?? false;
        message.approvalRulesId = object.approvalRulesId ?? '';
        return message;
    },
};

const baseCreateInstanceRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateInstanceRequest_LabelsEntry: {
    encode(message: CreateInstanceRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_LabelsEntry;
    fromJSON(object: any): CreateInstanceRequest_LabelsEntry;
    toJSON(message: CreateInstanceRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateInstanceRequest_LabelsEntry>, I>>(object: I): CreateInstanceRequest_LabelsEntry;
} = {
    encode(
        message: CreateInstanceRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        } as CreateInstanceRequest_LabelsEntry;
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

    fromJSON(object: any): CreateInstanceRequest_LabelsEntry {
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        } as CreateInstanceRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateInstanceRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateInstanceRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateInstanceRequest_LabelsEntry {
        const message = {
            ...baseCreateInstanceRequest_LabelsEntry,
        } as CreateInstanceRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateInstanceMetadata: object = { instanceId: '' };

export const CreateInstanceMetadata: {
    encode(message: CreateInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceMetadata;
    fromJSON(object: any): CreateInstanceMetadata;
    toJSON(message: CreateInstanceMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateInstanceMetadata>, I>>(object: I): CreateInstanceMetadata;
} = {
    encode(message: CreateInstanceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateInstanceMetadata } as CreateInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateInstanceMetadata {
        const message = { ...baseCreateInstanceMetadata } as CreateInstanceMetadata;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: CreateInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateInstanceMetadata>, I>>(
        object: I,
    ): CreateInstanceMetadata {
        const message = { ...baseCreateInstanceMetadata } as CreateInstanceMetadata;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseUpdateInstanceRequest: object = {
    instanceId: '',
    name: '',
    description: '',
    backupRetainPeriodDays: 0,
    resourcePresetId: '',
    maintenanceDeleteUntagged: false,
    deletionProtection: false,
    approvalRulesId: '',
    approvalRulesToken: '',
    diskSize: 0,
};

export const UpdateInstanceRequest: {
    encode(message: UpdateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceRequest;
    fromJSON(object: any): UpdateInstanceRequest;
    toJSON(message: UpdateInstanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateInstanceRequest>, I>>(object: I): UpdateInstanceRequest;
} = {
    encode(message: UpdateInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateInstanceRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.backupRetainPeriodDays !== 0) {
            writer.uint32(48).int64(message.backupRetainPeriodDays);
        }
        if (message.resourcePresetId !== '') {
            writer.uint32(58).string(message.resourcePresetId);
        }
        if (message.maintenanceDeleteUntagged === true) {
            writer.uint32(80).bool(message.maintenanceDeleteUntagged);
        }
        if (message.deletionProtection === true) {
            writer.uint32(88).bool(message.deletionProtection);
        }
        if (message.approvalRulesId !== '') {
            writer.uint32(98).string(message.approvalRulesId);
        }
        if (message.approvalRulesToken !== '') {
            writer.uint32(106).string(message.approvalRulesToken);
        }
        if (message.diskSize !== 0) {
            writer.uint32(168).int64(message.diskSize);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(194).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateInstanceRequest } as UpdateInstanceRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = UpdateInstanceRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 6:
                    message.backupRetainPeriodDays = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.resourcePresetId = reader.string();
                    break;
                case 10:
                    message.maintenanceDeleteUntagged = reader.bool();
                    break;
                case 11:
                    message.deletionProtection = reader.bool();
                    break;
                case 12:
                    message.approvalRulesId = reader.string();
                    break;
                case 13:
                    message.approvalRulesToken = reader.string();
                    break;
                case 21:
                    message.diskSize = longToNumber(reader.int64() as Long);
                    break;
                case 24:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceRequest {
        const message = { ...baseUpdateInstanceRequest } as UpdateInstanceRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
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
        message.backupRetainPeriodDays =
            object.backupRetainPeriodDays !== undefined && object.backupRetainPeriodDays !== null
                ? Number(object.backupRetainPeriodDays)
                : 0;
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : '';
        message.maintenanceDeleteUntagged =
            object.maintenanceDeleteUntagged !== undefined &&
            object.maintenanceDeleteUntagged !== null
                ? Boolean(object.maintenanceDeleteUntagged)
                : false;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.approvalRulesId =
            object.approvalRulesId !== undefined && object.approvalRulesId !== null
                ? String(object.approvalRulesId)
                : '';
        message.approvalRulesToken =
            object.approvalRulesToken !== undefined && object.approvalRulesToken !== null
                ? String(object.approvalRulesToken)
                : '';
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null ? Number(object.diskSize) : 0;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },

    toJSON(message: UpdateInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = Math.round(message.backupRetainPeriodDays));
        message.resourcePresetId !== undefined && (obj.resourcePresetId = message.resourcePresetId);
        message.maintenanceDeleteUntagged !== undefined &&
            (obj.maintenanceDeleteUntagged = message.maintenanceDeleteUntagged);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.approvalRulesId !== undefined && (obj.approvalRulesId = message.approvalRulesId);
        message.approvalRulesToken !== undefined &&
            (obj.approvalRulesToken = message.approvalRulesToken);
        message.diskSize !== undefined && (obj.diskSize = Math.round(message.diskSize));
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateInstanceRequest>, I>>(
        object: I,
    ): UpdateInstanceRequest {
        const message = { ...baseUpdateInstanceRequest } as UpdateInstanceRequest;
        message.instanceId = object.instanceId ?? '';
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
        message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? 0;
        message.resourcePresetId = object.resourcePresetId ?? '';
        message.maintenanceDeleteUntagged = object.maintenanceDeleteUntagged ?? false;
        message.deletionProtection = object.deletionProtection ?? false;
        message.approvalRulesId = object.approvalRulesId ?? '';
        message.approvalRulesToken = object.approvalRulesToken ?? '';
        message.diskSize = object.diskSize ?? 0;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};

const baseUpdateInstanceRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateInstanceRequest_LabelsEntry: {
    encode(message: UpdateInstanceRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceRequest_LabelsEntry;
    fromJSON(object: any): UpdateInstanceRequest_LabelsEntry;
    toJSON(message: UpdateInstanceRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateInstanceRequest_LabelsEntry>, I>>(object: I): UpdateInstanceRequest_LabelsEntry;
} = {
    encode(
        message: UpdateInstanceRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        } as UpdateInstanceRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateInstanceRequest_LabelsEntry {
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        } as UpdateInstanceRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateInstanceRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateInstanceRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateInstanceRequest_LabelsEntry {
        const message = {
            ...baseUpdateInstanceRequest_LabelsEntry,
        } as UpdateInstanceRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateInstanceMetadata: object = { instanceId: '' };

export const UpdateInstanceMetadata: {
    encode(message: UpdateInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceMetadata;
    fromJSON(object: any): UpdateInstanceMetadata;
    toJSON(message: UpdateInstanceMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateInstanceMetadata>, I>>(object: I): UpdateInstanceMetadata;
} = {
    encode(message: UpdateInstanceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateInstanceMetadata } as UpdateInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceMetadata {
        const message = { ...baseUpdateInstanceMetadata } as UpdateInstanceMetadata;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: UpdateInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateInstanceMetadata>, I>>(
        object: I,
    ): UpdateInstanceMetadata {
        const message = { ...baseUpdateInstanceMetadata } as UpdateInstanceMetadata;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseDeleteInstanceRequest: object = { instanceId: '' };

export const DeleteInstanceRequest: {
    encode(message: DeleteInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstanceRequest;
    fromJSON(object: any): DeleteInstanceRequest;
    toJSON(message: DeleteInstanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteInstanceRequest>, I>>(object: I): DeleteInstanceRequest;
} = {
    encode(message: DeleteInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteInstanceRequest } as DeleteInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteInstanceRequest {
        const message = { ...baseDeleteInstanceRequest } as DeleteInstanceRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: DeleteInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteInstanceRequest>, I>>(
        object: I,
    ): DeleteInstanceRequest {
        const message = { ...baseDeleteInstanceRequest } as DeleteInstanceRequest;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseDeleteInstanceMetadata: object = { instanceId: '' };

export const DeleteInstanceMetadata: {
    encode(message: DeleteInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstanceMetadata;
    fromJSON(object: any): DeleteInstanceMetadata;
    toJSON(message: DeleteInstanceMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteInstanceMetadata>, I>>(object: I): DeleteInstanceMetadata;
} = {
    encode(message: DeleteInstanceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteInstanceMetadata } as DeleteInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteInstanceMetadata {
        const message = { ...baseDeleteInstanceMetadata } as DeleteInstanceMetadata;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: DeleteInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteInstanceMetadata>, I>>(
        object: I,
    ): DeleteInstanceMetadata {
        const message = { ...baseDeleteInstanceMetadata } as DeleteInstanceMetadata;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseStartInstanceRequest: object = { instanceId: '' };

export const StartInstanceRequest: {
    encode(message: StartInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartInstanceRequest;
    fromJSON(object: any): StartInstanceRequest;
    toJSON(message: StartInstanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<StartInstanceRequest>, I>>(object: I): StartInstanceRequest;
} = {
    encode(message: StartInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartInstanceRequest {
        const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: StartInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartInstanceRequest>, I>>(
        object: I,
    ): StartInstanceRequest {
        const message = { ...baseStartInstanceRequest } as StartInstanceRequest;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseStartInstanceMetadata: object = { instanceId: '' };

export const StartInstanceMetadata: {
    encode(message: StartInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartInstanceMetadata;
    fromJSON(object: any): StartInstanceMetadata;
    toJSON(message: StartInstanceMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<StartInstanceMetadata>, I>>(object: I): StartInstanceMetadata;
} = {
    encode(message: StartInstanceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartInstanceMetadata } as StartInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartInstanceMetadata {
        const message = { ...baseStartInstanceMetadata } as StartInstanceMetadata;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: StartInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartInstanceMetadata>, I>>(
        object: I,
    ): StartInstanceMetadata {
        const message = { ...baseStartInstanceMetadata } as StartInstanceMetadata;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseStopInstanceRequest: object = { instanceId: '' };

export const StopInstanceRequest: {
    encode(message: StopInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopInstanceRequest;
    fromJSON(object: any): StopInstanceRequest;
    toJSON(message: StopInstanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<StopInstanceRequest>, I>>(object: I): StopInstanceRequest;
} = {
    encode(message: StopInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopInstanceRequest {
        const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: StopInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopInstanceRequest>, I>>(
        object: I,
    ): StopInstanceRequest {
        const message = { ...baseStopInstanceRequest } as StopInstanceRequest;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseStopInstanceMetadata: object = { instanceId: '' };

export const StopInstanceMetadata: {
    encode(message: StopInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopInstanceMetadata;
    fromJSON(object: any): StopInstanceMetadata;
    toJSON(message: StopInstanceMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<StopInstanceMetadata>, I>>(object: I): StopInstanceMetadata;
} = {
    encode(message: StopInstanceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopInstanceMetadata {
        const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: StopInstanceMetadata): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopInstanceMetadata>, I>>(
        object: I,
    ): StopInstanceMetadata {
        const message = { ...baseStopInstanceMetadata } as StopInstanceMetadata;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

/** InstanceService provides methods for managing GitLab instances. */
export const InstanceServiceService = {
    /** Returns the specified GitLab instance. */
    get: {
        path: '/yandex.cloud.gitlab.v1.InstanceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetInstanceRequest) =>
            Buffer.from(GetInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetInstanceRequest.decode(value),
        responseSerialize: (value: Instance) => Buffer.from(Instance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Instance.decode(value),
    },
    /** Retrieves the list of GitLab instances in the specified folder. */
    list: {
        path: '/yandex.cloud.gitlab.v1.InstanceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListInstancesRequest) =>
            Buffer.from(ListInstancesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListInstancesRequest.decode(value),
        responseSerialize: (value: ListInstancesResponse) =>
            Buffer.from(ListInstancesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListInstancesResponse.decode(value),
    },
    /** Creates a new GitLab instance in the specified folder. */
    create: {
        path: '/yandex.cloud.gitlab.v1.InstanceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateInstanceRequest) =>
            Buffer.from(CreateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates GitLab instance. */
    update: {
        path: '/yandex.cloud.gitlab.v1.InstanceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateInstanceRequest) =>
            Buffer.from(UpdateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified GitLab instance. */
    delete: {
        path: '/yandex.cloud.gitlab.v1.InstanceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteInstanceRequest) =>
            Buffer.from(DeleteInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified GitLab instance. */
    start: {
        path: '/yandex.cloud.gitlab.v1.InstanceService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartInstanceRequest) =>
            Buffer.from(StartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops the specified GitLab instance. */
    stop: {
        path: '/yandex.cloud.gitlab.v1.InstanceService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopInstanceRequest) =>
            Buffer.from(StopInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface InstanceServiceServer extends UntypedServiceImplementation {
    /** Returns the specified GitLab instance. */
    get: handleUnaryCall<GetInstanceRequest, Instance>;
    /** Retrieves the list of GitLab instances in the specified folder. */
    list: handleUnaryCall<ListInstancesRequest, ListInstancesResponse>;
    /** Creates a new GitLab instance in the specified folder. */
    create: handleUnaryCall<CreateInstanceRequest, Operation>;
    /** Updates GitLab instance. */
    update: handleUnaryCall<UpdateInstanceRequest, Operation>;
    /** Deletes the specified GitLab instance. */
    delete: handleUnaryCall<DeleteInstanceRequest, Operation>;
    /** Starts the specified GitLab instance. */
    start: handleUnaryCall<StartInstanceRequest, Operation>;
    /** Stops the specified GitLab instance. */
    stop: handleUnaryCall<StopInstanceRequest, Operation>;
}

export interface InstanceServiceClient extends Client {
    /** Returns the specified GitLab instance. */
    get(
        request: GetInstanceRequest,
        callback: (error: ServiceError | null, response: Instance) => void,
    ): ClientUnaryCall;
    get(
        request: GetInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Instance) => void,
    ): ClientUnaryCall;
    get(
        request: GetInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Instance) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of GitLab instances in the specified folder. */
    list(
        request: ListInstancesRequest,
        callback: (error: ServiceError | null, response: ListInstancesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListInstancesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListInstancesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListInstancesResponse) => void,
    ): ClientUnaryCall;
    /** Creates a new GitLab instance in the specified folder. */
    create(
        request: CreateInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates GitLab instance. */
    update(
        request: UpdateInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified GitLab instance. */
    delete(
        request: DeleteInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Starts the specified GitLab instance. */
    start(
        request: StartInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Stops the specified GitLab instance. */
    stop(
        request: StopInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const InstanceServiceClient = makeGenericClientConstructor(
    InstanceServiceService,
    'yandex.cloud.gitlab.v1.InstanceService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): InstanceServiceClient;
    service: typeof InstanceServiceService;
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
