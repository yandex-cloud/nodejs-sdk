/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
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
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  Archive,
  Backup,
  BackupFile,
} from "../../../../yandex/cloud/backup/v1/backup";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.backup.v1";

export interface ListArchivesRequest {
  $type: "yandex.cloud.backup.v1.ListArchivesRequest";
  /** List of archives in specified folder. */
  folderId: string | undefined;
  /** List of archives of the specified Compute Cloud instance. */
  computeInstanceId: string | undefined;
}

export interface ListArchivesResponse {
  $type: "yandex.cloud.backup.v1.ListArchivesResponse";
  archives: Archive[];
}

export interface ListBackupsRequest {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest";
  /** List backups that belongs to specific Compute Cloud instance. */
  computeInstanceId: string | undefined;
  /** List backups that belongs to specific archive of specific folder. */
  archive?: ListBackupsRequest_ArchiveParameters | undefined;
  /** List backups that belongs to specific folder. */
  folderId: string | undefined;
  /** List backups that belongs to specific instance and policy at the same time. */
  instancePolicy?: ListBackupsRequest_InstancePolicy | undefined;
  /** List backups by specific resource ID. */
  resourceId: string | undefined;
  /** List backups by specific policy ID. */
  policyId: string | undefined;
  /**
   * By which column the listing should be ordered and in which direction,
   * format is "createdAt desc". "createdAt desc" if omitted.
   */
  orderBy: string;
  /**
   * Filter list by various parameters.
   * Supported parameters are:
   * * created_at
   *
   * Supported logic operators:
   * * AND
   */
  filter: string;
}

export interface ListBackupsRequest_ArchiveParameters {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters";
  /** Archive ID. */
  archiveId: string;
  /** Folder ID. */
  folderId: string;
}

export interface ListBackupsRequest_InstancePolicy {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Policy ID. */
  policyId: string;
}

export interface ListBackupsResponse {
  $type: "yandex.cloud.backup.v1.ListBackupsResponse";
  backups: Backup[];
}

export interface ListFilesRequest {
  $type: "yandex.cloud.backup.v1.ListFilesRequest";
  /** Folder ID. */
  folderId: string;
  /** Backup ID. */
  backupId: string;
  /** Empty source will list disks of the backup. */
  sourceId: string;
}

export interface ListFilesResponse {
  $type: "yandex.cloud.backup.v1.ListFilesResponse";
  files: BackupFile[];
}

export interface GetBackupRequest {
  $type: "yandex.cloud.backup.v1.GetBackupRequest";
  /** Backup ID. */
  backupId: string;
  /** Folder ID. */
  folderId: string;
}

export interface StartRecoveryRequest {
  $type: "yandex.cloud.backup.v1.StartRecoveryRequest";
  /** Destination Compute Cloud instance ID to which backup should be applied. */
  computeInstanceId: string;
  /** Backup ID that will be applied to destination Compute Cloud instance. */
  backupId: string;
}

export interface StartRecoveryMetadata {
  $type: "yandex.cloud.backup.v1.StartRecoveryMetadata";
  /** Progress of the backup process. */
  progressPercentage: number;
  /** Source Backup ID that will be applied. */
  srcBackupId: string;
  /** Destination Compute Cloud instance ID to which backup will be applied. */
  dstComputeInstanceId: string;
}

export interface TargetPathOriginal {
  $type: "yandex.cloud.backup.v1.TargetPathOriginal";
}

export interface TargetPathCustom {
  $type: "yandex.cloud.backup.v1.TargetPathCustom";
  /** Custom folder for file recovery. */
  path: string;
}

export interface FilesRecoveryOptions {
  $type: "yandex.cloud.backup.v1.FilesRecoveryOptions";
  /** Overwrite options declares the behavior for files that already exists on the file system. */
  overwrite: FilesRecoveryOptions_Overwrite;
  /** specifies whether the recovery plan is able to reboot host if needed. */
  rebootIfNeeded: boolean;
  /** Keep original paths of files. */
  original?: TargetPathOriginal | undefined;
  /** Set custom folder for file recovery. */
  custom?: TargetPathCustom | undefined;
}

export enum FilesRecoveryOptions_Overwrite {
  /** OVERWRITE_UNSPECIFIED - Unspecified value treated as Overwrite all */
  OVERWRITE_UNSPECIFIED = 0,
  /** OVERWRITE_ALL - All overwrites all existing files by recovered ones. */
  OVERWRITE_ALL = 1,
  /** OVERWRITE_OLDER - Older overwrites older files only. */
  OVERWRITE_OLDER = 2,
  /** OVERWRITE_NONE - None does not overwrites files at all. */
  OVERWRITE_NONE = 3,
  UNRECOGNIZED = -1,
}

export function filesRecoveryOptions_OverwriteFromJSON(
  object: any
): FilesRecoveryOptions_Overwrite {
  switch (object) {
    case 0:
    case "OVERWRITE_UNSPECIFIED":
      return FilesRecoveryOptions_Overwrite.OVERWRITE_UNSPECIFIED;
    case 1:
    case "OVERWRITE_ALL":
      return FilesRecoveryOptions_Overwrite.OVERWRITE_ALL;
    case 2:
    case "OVERWRITE_OLDER":
      return FilesRecoveryOptions_Overwrite.OVERWRITE_OLDER;
    case 3:
    case "OVERWRITE_NONE":
      return FilesRecoveryOptions_Overwrite.OVERWRITE_NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FilesRecoveryOptions_Overwrite.UNRECOGNIZED;
  }
}

export function filesRecoveryOptions_OverwriteToJSON(
  object: FilesRecoveryOptions_Overwrite
): string {
  switch (object) {
    case FilesRecoveryOptions_Overwrite.OVERWRITE_UNSPECIFIED:
      return "OVERWRITE_UNSPECIFIED";
    case FilesRecoveryOptions_Overwrite.OVERWRITE_ALL:
      return "OVERWRITE_ALL";
    case FilesRecoveryOptions_Overwrite.OVERWRITE_OLDER:
      return "OVERWRITE_OLDER";
    case FilesRecoveryOptions_Overwrite.OVERWRITE_NONE:
      return "OVERWRITE_NONE";
    default:
      return "UNKNOWN";
  }
}

export interface StartFilesRecoveryRequest {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest";
  /** Destination instance ID. */
  computeInstanceId: string;
  /** Backup ID. */
  backupId: string;
  opts?: FilesRecoveryOptions;
  sourceIds: string[];
}

export interface StartFilesRecoveryMetadata {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata";
  progressPercentage: number;
  /** Destination instance ID. */
  computeInstanceId: string;
  /** Backup ID. */
  backupId: string;
  sourceIds: string[];
}

export interface DeleteBackupRequest {
  $type: "yandex.cloud.backup.v1.DeleteBackupRequest";
  /** Compute Cloud instance ID of the Backup. */
  computeInstanceId: string;
  /** Backup ID that should be deleted. */
  backupId: string;
}

export interface DeleteBackupMetadata {
  $type: "yandex.cloud.backup.v1.DeleteBackupMetadata";
  /** Compute Cloud instance ID of the Backup. */
  computeInstanceId: string;
  /** Backup ID that should be deleted. */
  backupId: string;
}

const baseListArchivesRequest: object = {
  $type: "yandex.cloud.backup.v1.ListArchivesRequest",
};

export const ListArchivesRequest = {
  $type: "yandex.cloud.backup.v1.ListArchivesRequest" as const,

  encode(
    message: ListArchivesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== undefined) {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListArchivesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListArchivesRequest } as ListArchivesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListArchivesRequest {
    const message = { ...baseListArchivesRequest } as ListArchivesRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : undefined;
    return message;
  },

  toJSON(message: ListArchivesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListArchivesRequest>, I>>(
    object: I
  ): ListArchivesRequest {
    const message = { ...baseListArchivesRequest } as ListArchivesRequest;
    message.folderId = object.folderId ?? undefined;
    message.computeInstanceId = object.computeInstanceId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ListArchivesRequest.$type, ListArchivesRequest);

const baseListArchivesResponse: object = {
  $type: "yandex.cloud.backup.v1.ListArchivesResponse",
};

export const ListArchivesResponse = {
  $type: "yandex.cloud.backup.v1.ListArchivesResponse" as const,

  encode(
    message: ListArchivesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.archives) {
      Archive.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListArchivesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListArchivesResponse } as ListArchivesResponse;
    message.archives = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.archives.push(Archive.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListArchivesResponse {
    const message = { ...baseListArchivesResponse } as ListArchivesResponse;
    message.archives = (object.archives ?? []).map((e: any) =>
      Archive.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListArchivesResponse): unknown {
    const obj: any = {};
    if (message.archives) {
      obj.archives = message.archives.map((e) =>
        e ? Archive.toJSON(e) : undefined
      );
    } else {
      obj.archives = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListArchivesResponse>, I>>(
    object: I
  ): ListArchivesResponse {
    const message = { ...baseListArchivesResponse } as ListArchivesResponse;
    message.archives =
      object.archives?.map((e) => Archive.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListArchivesResponse.$type, ListArchivesResponse);

const baseListBackupsRequest: object = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest",
  orderBy: "",
  filter: "",
};

export const ListBackupsRequest = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest" as const,

  encode(
    message: ListBackupsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== undefined) {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.archive !== undefined) {
      ListBackupsRequest_ArchiveParameters.encode(
        message.archive,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.instancePolicy !== undefined) {
      ListBackupsRequest_InstancePolicy.encode(
        message.instancePolicy,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.resourceId !== undefined) {
      writer.uint32(50).string(message.resourceId);
    }
    if (message.policyId !== undefined) {
      writer.uint32(58).string(message.policyId);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    if (message.filter !== "") {
      writer.uint32(66).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListBackupsRequest } as ListBackupsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.archive = ListBackupsRequest_ArchiveParameters.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.folderId = reader.string();
          break;
        case 4:
          message.instancePolicy = ListBackupsRequest_InstancePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.resourceId = reader.string();
          break;
        case 7:
          message.policyId = reader.string();
          break;
        case 5:
          message.orderBy = reader.string();
          break;
        case 8:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBackupsRequest {
    const message = { ...baseListBackupsRequest } as ListBackupsRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : undefined;
    message.archive =
      object.archive !== undefined && object.archive !== null
        ? ListBackupsRequest_ArchiveParameters.fromJSON(object.archive)
        : undefined;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    message.instancePolicy =
      object.instancePolicy !== undefined && object.instancePolicy !== null
        ? ListBackupsRequest_InstancePolicy.fromJSON(object.instancePolicy)
        : undefined;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : undefined;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : undefined;
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListBackupsRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.archive !== undefined &&
      (obj.archive = message.archive
        ? ListBackupsRequest_ArchiveParameters.toJSON(message.archive)
        : undefined);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.instancePolicy !== undefined &&
      (obj.instancePolicy = message.instancePolicy
        ? ListBackupsRequest_InstancePolicy.toJSON(message.instancePolicy)
        : undefined);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBackupsRequest>, I>>(
    object: I
  ): ListBackupsRequest {
    const message = { ...baseListBackupsRequest } as ListBackupsRequest;
    message.computeInstanceId = object.computeInstanceId ?? undefined;
    message.archive =
      object.archive !== undefined && object.archive !== null
        ? ListBackupsRequest_ArchiveParameters.fromPartial(object.archive)
        : undefined;
    message.folderId = object.folderId ?? undefined;
    message.instancePolicy =
      object.instancePolicy !== undefined && object.instancePolicy !== null
        ? ListBackupsRequest_InstancePolicy.fromPartial(object.instancePolicy)
        : undefined;
    message.resourceId = object.resourceId ?? undefined;
    message.policyId = object.policyId ?? undefined;
    message.orderBy = object.orderBy ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListBackupsRequest.$type, ListBackupsRequest);

const baseListBackupsRequest_ArchiveParameters: object = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters",
  archiveId: "",
  folderId: "",
};

export const ListBackupsRequest_ArchiveParameters = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters" as const,

  encode(
    message: ListBackupsRequest_ArchiveParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.archiveId !== "") {
      writer.uint32(10).string(message.archiveId);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListBackupsRequest_ArchiveParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBackupsRequest_ArchiveParameters,
    } as ListBackupsRequest_ArchiveParameters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.archiveId = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBackupsRequest_ArchiveParameters {
    const message = {
      ...baseListBackupsRequest_ArchiveParameters,
    } as ListBackupsRequest_ArchiveParameters;
    message.archiveId =
      object.archiveId !== undefined && object.archiveId !== null
        ? String(object.archiveId)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: ListBackupsRequest_ArchiveParameters): unknown {
    const obj: any = {};
    message.archiveId !== undefined && (obj.archiveId = message.archiveId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListBackupsRequest_ArchiveParameters>, I>
  >(object: I): ListBackupsRequest_ArchiveParameters {
    const message = {
      ...baseListBackupsRequest_ArchiveParameters,
    } as ListBackupsRequest_ArchiveParameters;
    message.archiveId = object.archiveId ?? "";
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBackupsRequest_ArchiveParameters.$type,
  ListBackupsRequest_ArchiveParameters
);

const baseListBackupsRequest_InstancePolicy: object = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy",
  computeInstanceId: "",
  policyId: "",
};

export const ListBackupsRequest_InstancePolicy = {
  $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy" as const,

  encode(
    message: ListBackupsRequest_InstancePolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.policyId !== "") {
      writer.uint32(18).string(message.policyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListBackupsRequest_InstancePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBackupsRequest_InstancePolicy,
    } as ListBackupsRequest_InstancePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBackupsRequest_InstancePolicy {
    const message = {
      ...baseListBackupsRequest_InstancePolicy,
    } as ListBackupsRequest_InstancePolicy;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    return message;
  },

  toJSON(message: ListBackupsRequest_InstancePolicy): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListBackupsRequest_InstancePolicy>, I>
  >(object: I): ListBackupsRequest_InstancePolicy {
    const message = {
      ...baseListBackupsRequest_InstancePolicy,
    } as ListBackupsRequest_InstancePolicy;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.policyId = object.policyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBackupsRequest_InstancePolicy.$type,
  ListBackupsRequest_InstancePolicy
);

const baseListBackupsResponse: object = {
  $type: "yandex.cloud.backup.v1.ListBackupsResponse",
};

export const ListBackupsResponse = {
  $type: "yandex.cloud.backup.v1.ListBackupsResponse" as const,

  encode(
    message: ListBackupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.backups) {
      Backup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListBackupsResponse } as ListBackupsResponse;
    message.backups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backups.push(Backup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListBackupsResponse {
    const message = { ...baseListBackupsResponse } as ListBackupsResponse;
    message.backups = (object.backups ?? []).map((e: any) =>
      Backup.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListBackupsResponse): unknown {
    const obj: any = {};
    if (message.backups) {
      obj.backups = message.backups.map((e) =>
        e ? Backup.toJSON(e) : undefined
      );
    } else {
      obj.backups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBackupsResponse>, I>>(
    object: I
  ): ListBackupsResponse {
    const message = { ...baseListBackupsResponse } as ListBackupsResponse;
    message.backups = object.backups?.map((e) => Backup.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListBackupsResponse.$type, ListBackupsResponse);

const baseListFilesRequest: object = {
  $type: "yandex.cloud.backup.v1.ListFilesRequest",
  folderId: "",
  backupId: "",
  sourceId: "",
};

export const ListFilesRequest = {
  $type: "yandex.cloud.backup.v1.ListFilesRequest" as const,

  encode(
    message: ListFilesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    if (message.sourceId !== "") {
      writer.uint32(26).string(message.sourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListFilesRequest } as ListFilesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.backupId = reader.string();
          break;
        case 3:
          message.sourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFilesRequest {
    const message = { ...baseListFilesRequest } as ListFilesRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    message.sourceId =
      object.sourceId !== undefined && object.sourceId !== null
        ? String(object.sourceId)
        : "";
    return message;
  },

  toJSON(message: ListFilesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.backupId !== undefined && (obj.backupId = message.backupId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFilesRequest>, I>>(
    object: I
  ): ListFilesRequest {
    const message = { ...baseListFilesRequest } as ListFilesRequest;
    message.folderId = object.folderId ?? "";
    message.backupId = object.backupId ?? "";
    message.sourceId = object.sourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFilesRequest.$type, ListFilesRequest);

const baseListFilesResponse: object = {
  $type: "yandex.cloud.backup.v1.ListFilesResponse",
};

export const ListFilesResponse = {
  $type: "yandex.cloud.backup.v1.ListFilesResponse" as const,

  encode(
    message: ListFilesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.files) {
      BackupFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListFilesResponse } as ListFilesResponse;
    message.files = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(BackupFile.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFilesResponse {
    const message = { ...baseListFilesResponse } as ListFilesResponse;
    message.files = (object.files ?? []).map((e: any) =>
      BackupFile.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListFilesResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) =>
        e ? BackupFile.toJSON(e) : undefined
      );
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFilesResponse>, I>>(
    object: I
  ): ListFilesResponse {
    const message = { ...baseListFilesResponse } as ListFilesResponse;
    message.files = object.files?.map((e) => BackupFile.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListFilesResponse.$type, ListFilesResponse);

const baseGetBackupRequest: object = {
  $type: "yandex.cloud.backup.v1.GetBackupRequest",
  backupId: "",
  folderId: "",
};

export const GetBackupRequest = {
  $type: "yandex.cloud.backup.v1.GetBackupRequest" as const,

  encode(
    message: GetBackupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBackupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBackupRequest } as GetBackupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backupId = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBackupRequest {
    const message = { ...baseGetBackupRequest } as GetBackupRequest;
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: GetBackupRequest): unknown {
    const obj: any = {};
    message.backupId !== undefined && (obj.backupId = message.backupId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBackupRequest>, I>>(
    object: I
  ): GetBackupRequest {
    const message = { ...baseGetBackupRequest } as GetBackupRequest;
    message.backupId = object.backupId ?? "";
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBackupRequest.$type, GetBackupRequest);

const baseStartRecoveryRequest: object = {
  $type: "yandex.cloud.backup.v1.StartRecoveryRequest",
  computeInstanceId: "",
  backupId: "",
};

export const StartRecoveryRequest = {
  $type: "yandex.cloud.backup.v1.StartRecoveryRequest" as const,

  encode(
    message: StartRecoveryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartRecoveryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStartRecoveryRequest } as StartRecoveryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.backupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartRecoveryRequest {
    const message = { ...baseStartRecoveryRequest } as StartRecoveryRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    return message;
  },

  toJSON(message: StartRecoveryRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.backupId !== undefined && (obj.backupId = message.backupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartRecoveryRequest>, I>>(
    object: I
  ): StartRecoveryRequest {
    const message = { ...baseStartRecoveryRequest } as StartRecoveryRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartRecoveryRequest.$type, StartRecoveryRequest);

const baseStartRecoveryMetadata: object = {
  $type: "yandex.cloud.backup.v1.StartRecoveryMetadata",
  progressPercentage: 0,
  srcBackupId: "",
  dstComputeInstanceId: "",
};

export const StartRecoveryMetadata = {
  $type: "yandex.cloud.backup.v1.StartRecoveryMetadata" as const,

  encode(
    message: StartRecoveryMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.progressPercentage !== 0) {
      writer.uint32(9).double(message.progressPercentage);
    }
    if (message.srcBackupId !== "") {
      writer.uint32(18).string(message.srcBackupId);
    }
    if (message.dstComputeInstanceId !== "") {
      writer.uint32(26).string(message.dstComputeInstanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartRecoveryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStartRecoveryMetadata } as StartRecoveryMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.progressPercentage = reader.double();
          break;
        case 2:
          message.srcBackupId = reader.string();
          break;
        case 3:
          message.dstComputeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartRecoveryMetadata {
    const message = { ...baseStartRecoveryMetadata } as StartRecoveryMetadata;
    message.progressPercentage =
      object.progressPercentage !== undefined &&
      object.progressPercentage !== null
        ? Number(object.progressPercentage)
        : 0;
    message.srcBackupId =
      object.srcBackupId !== undefined && object.srcBackupId !== null
        ? String(object.srcBackupId)
        : "";
    message.dstComputeInstanceId =
      object.dstComputeInstanceId !== undefined &&
      object.dstComputeInstanceId !== null
        ? String(object.dstComputeInstanceId)
        : "";
    return message;
  },

  toJSON(message: StartRecoveryMetadata): unknown {
    const obj: any = {};
    message.progressPercentage !== undefined &&
      (obj.progressPercentage = message.progressPercentage);
    message.srcBackupId !== undefined &&
      (obj.srcBackupId = message.srcBackupId);
    message.dstComputeInstanceId !== undefined &&
      (obj.dstComputeInstanceId = message.dstComputeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartRecoveryMetadata>, I>>(
    object: I
  ): StartRecoveryMetadata {
    const message = { ...baseStartRecoveryMetadata } as StartRecoveryMetadata;
    message.progressPercentage = object.progressPercentage ?? 0;
    message.srcBackupId = object.srcBackupId ?? "";
    message.dstComputeInstanceId = object.dstComputeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartRecoveryMetadata.$type, StartRecoveryMetadata);

const baseTargetPathOriginal: object = {
  $type: "yandex.cloud.backup.v1.TargetPathOriginal",
};

export const TargetPathOriginal = {
  $type: "yandex.cloud.backup.v1.TargetPathOriginal" as const,

  encode(
    _: TargetPathOriginal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetPathOriginal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTargetPathOriginal } as TargetPathOriginal;
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

  fromJSON(_: any): TargetPathOriginal {
    const message = { ...baseTargetPathOriginal } as TargetPathOriginal;
    return message;
  },

  toJSON(_: TargetPathOriginal): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetPathOriginal>, I>>(
    _: I
  ): TargetPathOriginal {
    const message = { ...baseTargetPathOriginal } as TargetPathOriginal;
    return message;
  },
};

messageTypeRegistry.set(TargetPathOriginal.$type, TargetPathOriginal);

const baseTargetPathCustom: object = {
  $type: "yandex.cloud.backup.v1.TargetPathCustom",
  path: "",
};

export const TargetPathCustom = {
  $type: "yandex.cloud.backup.v1.TargetPathCustom" as const,

  encode(
    message: TargetPathCustom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetPathCustom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTargetPathCustom } as TargetPathCustom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetPathCustom {
    const message = { ...baseTargetPathCustom } as TargetPathCustom;
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    return message;
  },

  toJSON(message: TargetPathCustom): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetPathCustom>, I>>(
    object: I
  ): TargetPathCustom {
    const message = { ...baseTargetPathCustom } as TargetPathCustom;
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(TargetPathCustom.$type, TargetPathCustom);

const baseFilesRecoveryOptions: object = {
  $type: "yandex.cloud.backup.v1.FilesRecoveryOptions",
  overwrite: 0,
  rebootIfNeeded: false,
};

export const FilesRecoveryOptions = {
  $type: "yandex.cloud.backup.v1.FilesRecoveryOptions" as const,

  encode(
    message: FilesRecoveryOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.overwrite !== 0) {
      writer.uint32(8).int32(message.overwrite);
    }
    if (message.rebootIfNeeded === true) {
      writer.uint32(16).bool(message.rebootIfNeeded);
    }
    if (message.original !== undefined) {
      TargetPathOriginal.encode(
        message.original,
        writer.uint32(802).fork()
      ).ldelim();
    }
    if (message.custom !== undefined) {
      TargetPathCustom.encode(
        message.custom,
        writer.uint32(810).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FilesRecoveryOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFilesRecoveryOptions } as FilesRecoveryOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overwrite = reader.int32() as any;
          break;
        case 2:
          message.rebootIfNeeded = reader.bool();
          break;
        case 100:
          message.original = TargetPathOriginal.decode(reader, reader.uint32());
          break;
        case 101:
          message.custom = TargetPathCustom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FilesRecoveryOptions {
    const message = { ...baseFilesRecoveryOptions } as FilesRecoveryOptions;
    message.overwrite =
      object.overwrite !== undefined && object.overwrite !== null
        ? filesRecoveryOptions_OverwriteFromJSON(object.overwrite)
        : 0;
    message.rebootIfNeeded =
      object.rebootIfNeeded !== undefined && object.rebootIfNeeded !== null
        ? Boolean(object.rebootIfNeeded)
        : false;
    message.original =
      object.original !== undefined && object.original !== null
        ? TargetPathOriginal.fromJSON(object.original)
        : undefined;
    message.custom =
      object.custom !== undefined && object.custom !== null
        ? TargetPathCustom.fromJSON(object.custom)
        : undefined;
    return message;
  },

  toJSON(message: FilesRecoveryOptions): unknown {
    const obj: any = {};
    message.overwrite !== undefined &&
      (obj.overwrite = filesRecoveryOptions_OverwriteToJSON(message.overwrite));
    message.rebootIfNeeded !== undefined &&
      (obj.rebootIfNeeded = message.rebootIfNeeded);
    message.original !== undefined &&
      (obj.original = message.original
        ? TargetPathOriginal.toJSON(message.original)
        : undefined);
    message.custom !== undefined &&
      (obj.custom = message.custom
        ? TargetPathCustom.toJSON(message.custom)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FilesRecoveryOptions>, I>>(
    object: I
  ): FilesRecoveryOptions {
    const message = { ...baseFilesRecoveryOptions } as FilesRecoveryOptions;
    message.overwrite = object.overwrite ?? 0;
    message.rebootIfNeeded = object.rebootIfNeeded ?? false;
    message.original =
      object.original !== undefined && object.original !== null
        ? TargetPathOriginal.fromPartial(object.original)
        : undefined;
    message.custom =
      object.custom !== undefined && object.custom !== null
        ? TargetPathCustom.fromPartial(object.custom)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(FilesRecoveryOptions.$type, FilesRecoveryOptions);

const baseStartFilesRecoveryRequest: object = {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest",
  computeInstanceId: "",
  backupId: "",
  sourceIds: "",
};

export const StartFilesRecoveryRequest = {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest" as const,

  encode(
    message: StartFilesRecoveryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    if (message.opts !== undefined) {
      FilesRecoveryOptions.encode(
        message.opts,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.sourceIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartFilesRecoveryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartFilesRecoveryRequest,
    } as StartFilesRecoveryRequest;
    message.sourceIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.backupId = reader.string();
          break;
        case 3:
          message.opts = FilesRecoveryOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.sourceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartFilesRecoveryRequest {
    const message = {
      ...baseStartFilesRecoveryRequest,
    } as StartFilesRecoveryRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    message.opts =
      object.opts !== undefined && object.opts !== null
        ? FilesRecoveryOptions.fromJSON(object.opts)
        : undefined;
    message.sourceIds = (object.sourceIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: StartFilesRecoveryRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.backupId !== undefined && (obj.backupId = message.backupId);
    message.opts !== undefined &&
      (obj.opts = message.opts
        ? FilesRecoveryOptions.toJSON(message.opts)
        : undefined);
    if (message.sourceIds) {
      obj.sourceIds = message.sourceIds.map((e) => e);
    } else {
      obj.sourceIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartFilesRecoveryRequest>, I>>(
    object: I
  ): StartFilesRecoveryRequest {
    const message = {
      ...baseStartFilesRecoveryRequest,
    } as StartFilesRecoveryRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    message.opts =
      object.opts !== undefined && object.opts !== null
        ? FilesRecoveryOptions.fromPartial(object.opts)
        : undefined;
    message.sourceIds = object.sourceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  StartFilesRecoveryRequest.$type,
  StartFilesRecoveryRequest
);

const baseStartFilesRecoveryMetadata: object = {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata",
  progressPercentage: 0,
  computeInstanceId: "",
  backupId: "",
  sourceIds: "",
};

export const StartFilesRecoveryMetadata = {
  $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata" as const,

  encode(
    message: StartFilesRecoveryMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.progressPercentage !== 0) {
      writer.uint32(9).double(message.progressPercentage);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(26).string(message.backupId);
    }
    for (const v of message.sourceIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartFilesRecoveryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartFilesRecoveryMetadata,
    } as StartFilesRecoveryMetadata;
    message.sourceIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.progressPercentage = reader.double();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        case 3:
          message.backupId = reader.string();
          break;
        case 4:
          message.sourceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartFilesRecoveryMetadata {
    const message = {
      ...baseStartFilesRecoveryMetadata,
    } as StartFilesRecoveryMetadata;
    message.progressPercentage =
      object.progressPercentage !== undefined &&
      object.progressPercentage !== null
        ? Number(object.progressPercentage)
        : 0;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    message.sourceIds = (object.sourceIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: StartFilesRecoveryMetadata): unknown {
    const obj: any = {};
    message.progressPercentage !== undefined &&
      (obj.progressPercentage = message.progressPercentage);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.backupId !== undefined && (obj.backupId = message.backupId);
    if (message.sourceIds) {
      obj.sourceIds = message.sourceIds.map((e) => e);
    } else {
      obj.sourceIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartFilesRecoveryMetadata>, I>>(
    object: I
  ): StartFilesRecoveryMetadata {
    const message = {
      ...baseStartFilesRecoveryMetadata,
    } as StartFilesRecoveryMetadata;
    message.progressPercentage = object.progressPercentage ?? 0;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    message.sourceIds = object.sourceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  StartFilesRecoveryMetadata.$type,
  StartFilesRecoveryMetadata
);

const baseDeleteBackupRequest: object = {
  $type: "yandex.cloud.backup.v1.DeleteBackupRequest",
  computeInstanceId: "",
  backupId: "",
};

export const DeleteBackupRequest = {
  $type: "yandex.cloud.backup.v1.DeleteBackupRequest" as const,

  encode(
    message: DeleteBackupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.backupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBackupRequest {
    const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    return message;
  },

  toJSON(message: DeleteBackupRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.backupId !== undefined && (obj.backupId = message.backupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBackupRequest>, I>>(
    object: I
  ): DeleteBackupRequest {
    const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBackupRequest.$type, DeleteBackupRequest);

const baseDeleteBackupMetadata: object = {
  $type: "yandex.cloud.backup.v1.DeleteBackupMetadata",
  computeInstanceId: "",
  backupId: "",
};

export const DeleteBackupMetadata = {
  $type: "yandex.cloud.backup.v1.DeleteBackupMetadata" as const,

  encode(
    message: DeleteBackupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBackupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.backupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBackupMetadata {
    const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    return message;
  },

  toJSON(message: DeleteBackupMetadata): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.backupId !== undefined && (obj.backupId = message.backupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBackupMetadata>, I>>(
    object: I
  ): DeleteBackupMetadata {
    const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteBackupMetadata.$type, DeleteBackupMetadata);

/** A set of methods for managing [backups](/docs/backup/concepts/backup). */
export const BackupServiceService = {
  /** List backups using filters. */
  list: {
    path: "/yandex.cloud.backup.v1.BackupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBackupsRequest) =>
      Buffer.from(ListBackupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListBackupsRequest.decode(value),
    responseSerialize: (value: ListBackupsResponse) =>
      Buffer.from(ListBackupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListBackupsResponse.decode(value),
  },
  /**
   * List archives that holds backups for specified folder or
   * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
   */
  listArchives: {
    path: "/yandex.cloud.backup.v1.BackupService/ListArchives",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListArchivesRequest) =>
      Buffer.from(ListArchivesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListArchivesRequest.decode(value),
    responseSerialize: (value: ListArchivesResponse) =>
      Buffer.from(ListArchivesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListArchivesResponse.decode(value),
  },
  /** ListFiles of the backup. */
  listFiles: {
    path: "/yandex.cloud.backup.v1.BackupService/ListFiles",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFilesRequest) =>
      Buffer.from(ListFilesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFilesRequest.decode(value),
    responseSerialize: (value: ListFilesResponse) =>
      Buffer.from(ListFilesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFilesResponse.decode(value),
  },
  /** Get backup by its id. */
  get: {
    path: "/yandex.cloud.backup.v1.BackupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBackupRequest) =>
      Buffer.from(GetBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBackupRequest.decode(value),
    responseSerialize: (value: Backup) =>
      Buffer.from(Backup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Backup.decode(value),
  },
  /**
   * Start recovery process of specified backup to specific Compute Cloud instance.
   *
   * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
   */
  startRecovery: {
    path: "/yandex.cloud.backup.v1.BackupService/StartRecovery",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartRecoveryRequest) =>
      Buffer.from(StartRecoveryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartRecoveryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
  startFilesRecovery: {
    path: "/yandex.cloud.backup.v1.BackupService/StartFilesRecovery",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartFilesRecoveryRequest) =>
      Buffer.from(StartFilesRecoveryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StartFilesRecoveryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Delete specific backup. */
  delete: {
    path: "/yandex.cloud.backup.v1.BackupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBackupRequest) =>
      Buffer.from(DeleteBackupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteBackupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface BackupServiceServer extends UntypedServiceImplementation {
  /** List backups using filters. */
  list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
  /**
   * List archives that holds backups for specified folder or
   * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
   */
  listArchives: handleUnaryCall<ListArchivesRequest, ListArchivesResponse>;
  /** ListFiles of the backup. */
  listFiles: handleUnaryCall<ListFilesRequest, ListFilesResponse>;
  /** Get backup by its id. */
  get: handleUnaryCall<GetBackupRequest, Backup>;
  /**
   * Start recovery process of specified backup to specific Compute Cloud instance.
   *
   * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
   */
  startRecovery: handleUnaryCall<StartRecoveryRequest, Operation>;
  /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
  startFilesRecovery: handleUnaryCall<StartFilesRecoveryRequest, Operation>;
  /** Delete specific backup. */
  delete: handleUnaryCall<DeleteBackupRequest, Operation>;
}

export interface BackupServiceClient extends Client {
  /** List backups using filters. */
  list(
    request: ListBackupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListBackupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListBackupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListBackupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListBackupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListBackupsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * List archives that holds backups for specified folder or
   * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
   */
  listArchives(
    request: ListArchivesRequest,
    callback: (
      error: ServiceError | null,
      response: ListArchivesResponse
    ) => void
  ): ClientUnaryCall;
  listArchives(
    request: ListArchivesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListArchivesResponse
    ) => void
  ): ClientUnaryCall;
  listArchives(
    request: ListArchivesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListArchivesResponse
    ) => void
  ): ClientUnaryCall;
  /** ListFiles of the backup. */
  listFiles(
    request: ListFilesRequest,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void
  ): ClientUnaryCall;
  listFiles(
    request: ListFilesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void
  ): ClientUnaryCall;
  listFiles(
    request: ListFilesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void
  ): ClientUnaryCall;
  /** Get backup by its id. */
  get(
    request: GetBackupRequest,
    callback: (error: ServiceError | null, response: Backup) => void
  ): ClientUnaryCall;
  get(
    request: GetBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Backup) => void
  ): ClientUnaryCall;
  get(
    request: GetBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Backup) => void
  ): ClientUnaryCall;
  /**
   * Start recovery process of specified backup to specific Compute Cloud instance.
   *
   * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
   */
  startRecovery(
    request: StartRecoveryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  startRecovery(
    request: StartRecoveryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  startRecovery(
    request: StartRecoveryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
  startFilesRecovery(
    request: StartFilesRecoveryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  startFilesRecovery(
    request: StartFilesRecoveryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  startFilesRecovery(
    request: StartFilesRecoveryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Delete specific backup. */
  delete(
    request: DeleteBackupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteBackupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteBackupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const BackupServiceClient = makeGenericClientConstructor(
  BackupServiceService,
  "yandex.cloud.backup.v1.BackupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): BackupServiceClient;
  service: typeof BackupServiceService;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
