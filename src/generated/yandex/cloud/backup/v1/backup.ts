/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Format,
  formatFromJSON,
  formatToJSON,
} from "../../../../yandex/cloud/backup/v1/policy";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { StringValue } from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.backup.v1";

/** Archive is a container that holds backups of Compute Cloud instance. */
export interface Archive {
  $type: "yandex.cloud.backup.v1.Archive";
  /** ID of the backup. */
  id: string;
  /** Name of the backup. */
  name: string;
  /** ID of the backup vault. */
  vaultId: string;
  /** Archive attributes. */
  attributes?: Archive_ArchiveAttributes;
  /** Archive size. */
  size: number;
  /** Compressed data size. */
  compressedDataSize: number;
  /** Data size. */
  dataSize: number;
  /** Original data size. */
  originalDataSize: number;
  /** Logical size. */
  logicalSize: number;
  format: Format;
  createdAt?: Date;
  updatedAt?: Date;
  lastBackupCreatedAt?: Date;
  lastSeenAt?: Date;
  /**
   * If this field is true, it means that any of encryption algorithm
   * has been chosen.
   */
  protectedByPassword: boolean;
  encryptionAlgorithm: Archive_EncryptionAlgorithm;
  actions: Archive_Action[];
  /** Backup plan ID. */
  backupPlanId: string;
  /** Backup plan name. */
  backupPlanName: string;
  /** Backup plan description. */
  description: string;
  /** Display name, e.g. `INSTANCE_NAME - POLICY_NAME`. */
  displayName: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** If this field is true, it means that the archive is consistent. */
  consistent: boolean;
  /** If this field is true, it means that the archive was deleted. */
  deleted: boolean;
  /** Resource ID. */
  resourceId: string;
}

/**
 * Encryption Algorithm for underlying backups:
 * `ENCRYPTION_ALGORITHM_UNSPECIFIED`, `NONE`, `AES128`, `AES192`,
 * `AES256`.
 */
export enum Archive_EncryptionAlgorithm {
  ENCRYPTION_ALGORITHM_UNSPECIFIED = 0,
  NONE = 1,
  AES128 = 2,
  AES192 = 3,
  AES256 = 4,
  UNRECOGNIZED = -1,
}

export function archive_EncryptionAlgorithmFromJSON(
  object: any
): Archive_EncryptionAlgorithm {
  switch (object) {
    case 0:
    case "ENCRYPTION_ALGORITHM_UNSPECIFIED":
      return Archive_EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED;
    case 1:
    case "NONE":
      return Archive_EncryptionAlgorithm.NONE;
    case 2:
    case "AES128":
      return Archive_EncryptionAlgorithm.AES128;
    case 3:
    case "AES192":
      return Archive_EncryptionAlgorithm.AES192;
    case 4:
    case "AES256":
      return Archive_EncryptionAlgorithm.AES256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Archive_EncryptionAlgorithm.UNRECOGNIZED;
  }
}

export function archive_EncryptionAlgorithmToJSON(
  object: Archive_EncryptionAlgorithm
): string {
  switch (object) {
    case Archive_EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED:
      return "ENCRYPTION_ALGORITHM_UNSPECIFIED";
    case Archive_EncryptionAlgorithm.NONE:
      return "NONE";
    case Archive_EncryptionAlgorithm.AES128:
      return "AES128";
    case Archive_EncryptionAlgorithm.AES192:
      return "AES192";
    case Archive_EncryptionAlgorithm.AES256:
      return "AES256";
    default:
      return "UNKNOWN";
  }
}

/**
 * Action with archive backup: `ACTION_UNSPECIFIED`, `REFRESH`,
 * `DELETE_BY_AGENT`.
 */
export enum Archive_Action {
  ACTION_UNSPECIFIED = 0,
  REFRESH = 1,
  DELETE_BY_AGENT = 2,
  UNRECOGNIZED = -1,
}

export function archive_ActionFromJSON(object: any): Archive_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return Archive_Action.ACTION_UNSPECIFIED;
    case 1:
    case "REFRESH":
      return Archive_Action.REFRESH;
    case 2:
    case "DELETE_BY_AGENT":
      return Archive_Action.DELETE_BY_AGENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Archive_Action.UNRECOGNIZED;
  }
}

export function archive_ActionToJSON(object: Archive_Action): string {
  switch (object) {
    case Archive_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case Archive_Action.REFRESH:
      return "REFRESH";
    case Archive_Action.DELETE_BY_AGENT:
      return "DELETE_BY_AGENT";
    default:
      return "UNKNOWN";
  }
}

/** Archive attributes. */
export interface Archive_ArchiveAttributes {
  $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes";
  /** Archive attribute. Default value: `0`. */
  aaib: string;
  /** URI of the backup archive. */
  uri: string;
}

export interface Volume {
  $type: "yandex.cloud.backup.v1.Volume";
  /** Free space in the volume. */
  freeSpace: number;
  /** If this field is true, it means that the volume is bootable. */
  isBootable: boolean;
  /** If this field is true, it means that the volume is a system volume. */
  isSystem: boolean;
  /** Volume name. */
  name: string;
  /** Volume size. */
  size: number;
  /** Mount string ID. */
  mountStrid: string;
}

export interface Disk {
  $type: "yandex.cloud.backup.v1.Disk";
  /** Device model. */
  deviceModel: string;
  /** Disk name. */
  name: string;
  /** Disk size. */
  size: number;
  volumes: Volume[];
}

export interface Backup {
  $type: "yandex.cloud.backup.v1.Backup";
  /** ID of the backup. */
  id: string;
  /** ID of the backup vault. */
  vaultId: string;
  /** ID of the backup archive. */
  archiveId: string;
  createdAt?: Date;
  lastSeenAt?: Date;
  /** Backup size. */
  size: number;
  /** Deduplicated backup size. */
  deduplicatedSize: number;
  /** Backed up data size. */
  backedUpDataSize: number;
  /** Original data size. */
  originalDataSize: number;
  attributes?: Backup_BackupAttributes;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  disks: Disk[];
  type: Backup_Type;
  /** If this field is true, it means that the backup was deleted. */
  deleted: boolean;
  /** [Policy](/docs/backup/concepts/policy) ID. */
  policyId: string;
  /** Resource ID. It identifies Compute Cloud instance in backup service. */
  resourceId: string;
}

/**
 * Backup type.
 * For detailed information, please see [Backup types](/docs/backup/concepts/backup#types).
 */
export enum Backup_Type {
  TYPE_UNSPECIFIED = 0,
  FULL = 1,
  INCREMENTAL = 2,
  UNRECOGNIZED = -1,
}

export function backup_TypeFromJSON(object: any): Backup_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Backup_Type.TYPE_UNSPECIFIED;
    case 1:
    case "FULL":
      return Backup_Type.FULL;
    case 2:
    case "INCREMENTAL":
      return Backup_Type.INCREMENTAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Backup_Type.UNRECOGNIZED;
  }
}

export function backup_TypeToJSON(object: Backup_Type): string {
  switch (object) {
    case Backup_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Backup_Type.FULL:
      return "FULL";
    case Backup_Type.INCREMENTAL:
      return "INCREMENTAL";
    default:
      return "UNKNOWN";
  }
}

/** Backup attributes. */
export interface Backup_BackupAttributes {
  $type: "yandex.cloud.backup.v1.Backup.BackupAttributes";
  /** Backup stream name. */
  streamName: string;
  /** URI of the backup archive. */
  uri: string;
}

/** BackupFile represents a single unit of file or directory system inside the backup. */
export interface BackupFile {
  $type: "yandex.cloud.backup.v1.BackupFile";
  /** ID of the item. Should be used as source ID in case of listing. */
  id: string;
  /** Might be empty if this is root directory. */
  parentId?: string;
  /** Type of the item. */
  type: BackupFile_Type;
  /** Absolute path of the item. */
  fullPath: string;
  /** Name of the directory / file. */
  name: string;
  /** Size in bytes of the item. */
  size: number;
  /** Actions that might be done on the object. */
  actions?: BackupFile_Actions;
  modifiedAt?: Date;
}

/** Type of the file. */
export enum BackupFile_Type {
  TYPE_UNSPECIFIED = 0,
  TYPE_DIR = 1,
  TYPE_FILE = 2,
  UNRECOGNIZED = -1,
}

export function backupFile_TypeFromJSON(object: any): BackupFile_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return BackupFile_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_DIR":
      return BackupFile_Type.TYPE_DIR;
    case 2:
    case "TYPE_FILE":
      return BackupFile_Type.TYPE_FILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BackupFile_Type.UNRECOGNIZED;
  }
}

export function backupFile_TypeToJSON(object: BackupFile_Type): string {
  switch (object) {
    case BackupFile_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case BackupFile_Type.TYPE_DIR:
      return "TYPE_DIR";
    case BackupFile_Type.TYPE_FILE:
      return "TYPE_FILE";
    default:
      return "UNKNOWN";
  }
}

export interface BackupFile_Actions {
  $type: "yandex.cloud.backup.v1.BackupFile.Actions";
  /** Allows to send request to restore item to disk */
  restoreToDisk: boolean;
  /** Allows to move to location by id. */
  goToLocation: boolean;
}

const baseArchive: object = {
  $type: "yandex.cloud.backup.v1.Archive",
  id: "",
  name: "",
  vaultId: "",
  size: 0,
  compressedDataSize: 0,
  dataSize: 0,
  originalDataSize: 0,
  logicalSize: 0,
  format: 0,
  protectedByPassword: false,
  encryptionAlgorithm: 0,
  actions: 0,
  backupPlanId: "",
  backupPlanName: "",
  description: "",
  displayName: "",
  computeInstanceId: "",
  consistent: false,
  deleted: false,
  resourceId: "",
};

export const Archive = {
  $type: "yandex.cloud.backup.v1.Archive" as const,

  encode(
    message: Archive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.vaultId !== "") {
      writer.uint32(26).string(message.vaultId);
    }
    if (message.attributes !== undefined) {
      Archive_ArchiveAttributes.encode(
        message.attributes,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(40).int64(message.size);
    }
    if (message.compressedDataSize !== 0) {
      writer.uint32(48).int64(message.compressedDataSize);
    }
    if (message.dataSize !== 0) {
      writer.uint32(56).int64(message.dataSize);
    }
    if (message.originalDataSize !== 0) {
      writer.uint32(64).int64(message.originalDataSize);
    }
    if (message.logicalSize !== 0) {
      writer.uint32(72).int64(message.logicalSize);
    }
    if (message.format !== 0) {
      writer.uint32(80).int32(message.format);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.lastBackupCreatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastBackupCreatedAt),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.lastSeenAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastSeenAt),
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.protectedByPassword === true) {
      writer.uint32(120).bool(message.protectedByPassword);
    }
    if (message.encryptionAlgorithm !== 0) {
      writer.uint32(128).int32(message.encryptionAlgorithm);
    }
    writer.uint32(162).fork();
    for (const v of message.actions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.backupPlanId !== "") {
      writer.uint32(178).string(message.backupPlanId);
    }
    if (message.backupPlanName !== "") {
      writer.uint32(186).string(message.backupPlanName);
    }
    if (message.description !== "") {
      writer.uint32(194).string(message.description);
    }
    if (message.displayName !== "") {
      writer.uint32(202).string(message.displayName);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(210).string(message.computeInstanceId);
    }
    if (message.consistent === true) {
      writer.uint32(216).bool(message.consistent);
    }
    if (message.deleted === true) {
      writer.uint32(240).bool(message.deleted);
    }
    if (message.resourceId !== "") {
      writer.uint32(250).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Archive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseArchive } as Archive;
    message.actions = [];
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
          message.vaultId = reader.string();
          break;
        case 4:
          message.attributes = Archive_ArchiveAttributes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.compressedDataSize = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.dataSize = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.originalDataSize = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.logicalSize = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.format = reader.int32() as any;
          break;
        case 11:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.lastBackupCreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.lastSeenAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.protectedByPassword = reader.bool();
          break;
        case 16:
          message.encryptionAlgorithm = reader.int32() as any;
          break;
        case 20:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actions.push(reader.int32() as any);
            }
          } else {
            message.actions.push(reader.int32() as any);
          }
          break;
        case 22:
          message.backupPlanId = reader.string();
          break;
        case 23:
          message.backupPlanName = reader.string();
          break;
        case 24:
          message.description = reader.string();
          break;
        case 25:
          message.displayName = reader.string();
          break;
        case 26:
          message.computeInstanceId = reader.string();
          break;
        case 27:
          message.consistent = reader.bool();
          break;
        case 30:
          message.deleted = reader.bool();
          break;
        case 31:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Archive {
    const message = { ...baseArchive } as Archive;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? String(object.vaultId)
        : "";
    message.attributes =
      object.attributes !== undefined && object.attributes !== null
        ? Archive_ArchiveAttributes.fromJSON(object.attributes)
        : undefined;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.compressedDataSize =
      object.compressedDataSize !== undefined &&
      object.compressedDataSize !== null
        ? Number(object.compressedDataSize)
        : 0;
    message.dataSize =
      object.dataSize !== undefined && object.dataSize !== null
        ? Number(object.dataSize)
        : 0;
    message.originalDataSize =
      object.originalDataSize !== undefined && object.originalDataSize !== null
        ? Number(object.originalDataSize)
        : 0;
    message.logicalSize =
      object.logicalSize !== undefined && object.logicalSize !== null
        ? Number(object.logicalSize)
        : 0;
    message.format =
      object.format !== undefined && object.format !== null
        ? formatFromJSON(object.format)
        : 0;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.lastBackupCreatedAt =
      object.lastBackupCreatedAt !== undefined &&
      object.lastBackupCreatedAt !== null
        ? fromJsonTimestamp(object.lastBackupCreatedAt)
        : undefined;
    message.lastSeenAt =
      object.lastSeenAt !== undefined && object.lastSeenAt !== null
        ? fromJsonTimestamp(object.lastSeenAt)
        : undefined;
    message.protectedByPassword =
      object.protectedByPassword !== undefined &&
      object.protectedByPassword !== null
        ? Boolean(object.protectedByPassword)
        : false;
    message.encryptionAlgorithm =
      object.encryptionAlgorithm !== undefined &&
      object.encryptionAlgorithm !== null
        ? archive_EncryptionAlgorithmFromJSON(object.encryptionAlgorithm)
        : 0;
    message.actions = (object.actions ?? []).map((e: any) =>
      archive_ActionFromJSON(e)
    );
    message.backupPlanId =
      object.backupPlanId !== undefined && object.backupPlanId !== null
        ? String(object.backupPlanId)
        : "";
    message.backupPlanName =
      object.backupPlanName !== undefined && object.backupPlanName !== null
        ? String(object.backupPlanName)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.displayName =
      object.displayName !== undefined && object.displayName !== null
        ? String(object.displayName)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.consistent =
      object.consistent !== undefined && object.consistent !== null
        ? Boolean(object.consistent)
        : false;
    message.deleted =
      object.deleted !== undefined && object.deleted !== null
        ? Boolean(object.deleted)
        : false;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: Archive): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.vaultId !== undefined && (obj.vaultId = message.vaultId);
    message.attributes !== undefined &&
      (obj.attributes = message.attributes
        ? Archive_ArchiveAttributes.toJSON(message.attributes)
        : undefined);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.compressedDataSize !== undefined &&
      (obj.compressedDataSize = Math.round(message.compressedDataSize));
    message.dataSize !== undefined &&
      (obj.dataSize = Math.round(message.dataSize));
    message.originalDataSize !== undefined &&
      (obj.originalDataSize = Math.round(message.originalDataSize));
    message.logicalSize !== undefined &&
      (obj.logicalSize = Math.round(message.logicalSize));
    message.format !== undefined && (obj.format = formatToJSON(message.format));
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.lastBackupCreatedAt !== undefined &&
      (obj.lastBackupCreatedAt = message.lastBackupCreatedAt.toISOString());
    message.lastSeenAt !== undefined &&
      (obj.lastSeenAt = message.lastSeenAt.toISOString());
    message.protectedByPassword !== undefined &&
      (obj.protectedByPassword = message.protectedByPassword);
    message.encryptionAlgorithm !== undefined &&
      (obj.encryptionAlgorithm = archive_EncryptionAlgorithmToJSON(
        message.encryptionAlgorithm
      ));
    if (message.actions) {
      obj.actions = message.actions.map((e) => archive_ActionToJSON(e));
    } else {
      obj.actions = [];
    }
    message.backupPlanId !== undefined &&
      (obj.backupPlanId = message.backupPlanId);
    message.backupPlanName !== undefined &&
      (obj.backupPlanName = message.backupPlanName);
    message.description !== undefined &&
      (obj.description = message.description);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.consistent !== undefined && (obj.consistent = message.consistent);
    message.deleted !== undefined && (obj.deleted = message.deleted);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Archive>, I>>(object: I): Archive {
    const message = { ...baseArchive } as Archive;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.vaultId = object.vaultId ?? "";
    message.attributes =
      object.attributes !== undefined && object.attributes !== null
        ? Archive_ArchiveAttributes.fromPartial(object.attributes)
        : undefined;
    message.size = object.size ?? 0;
    message.compressedDataSize = object.compressedDataSize ?? 0;
    message.dataSize = object.dataSize ?? 0;
    message.originalDataSize = object.originalDataSize ?? 0;
    message.logicalSize = object.logicalSize ?? 0;
    message.format = object.format ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.lastBackupCreatedAt = object.lastBackupCreatedAt ?? undefined;
    message.lastSeenAt = object.lastSeenAt ?? undefined;
    message.protectedByPassword = object.protectedByPassword ?? false;
    message.encryptionAlgorithm = object.encryptionAlgorithm ?? 0;
    message.actions = object.actions?.map((e) => e) || [];
    message.backupPlanId = object.backupPlanId ?? "";
    message.backupPlanName = object.backupPlanName ?? "";
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.consistent = object.consistent ?? false;
    message.deleted = object.deleted ?? false;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Archive.$type, Archive);

const baseArchive_ArchiveAttributes: object = {
  $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes",
  aaib: "",
  uri: "",
};

export const Archive_ArchiveAttributes = {
  $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes" as const,

  encode(
    message: Archive_ArchiveAttributes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.aaib !== "") {
      writer.uint32(10).string(message.aaib);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Archive_ArchiveAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseArchive_ArchiveAttributes,
    } as Archive_ArchiveAttributes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aaib = reader.string();
          break;
        case 2:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Archive_ArchiveAttributes {
    const message = {
      ...baseArchive_ArchiveAttributes,
    } as Archive_ArchiveAttributes;
    message.aaib =
      object.aaib !== undefined && object.aaib !== null
        ? String(object.aaib)
        : "";
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    return message;
  },

  toJSON(message: Archive_ArchiveAttributes): unknown {
    const obj: any = {};
    message.aaib !== undefined && (obj.aaib = message.aaib);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Archive_ArchiveAttributes>, I>>(
    object: I
  ): Archive_ArchiveAttributes {
    const message = {
      ...baseArchive_ArchiveAttributes,
    } as Archive_ArchiveAttributes;
    message.aaib = object.aaib ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  Archive_ArchiveAttributes.$type,
  Archive_ArchiveAttributes
);

const baseVolume: object = {
  $type: "yandex.cloud.backup.v1.Volume",
  freeSpace: 0,
  isBootable: false,
  isSystem: false,
  name: "",
  size: 0,
  mountStrid: "",
};

export const Volume = {
  $type: "yandex.cloud.backup.v1.Volume" as const,

  encode(
    message: Volume,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.freeSpace !== 0) {
      writer.uint32(8).int64(message.freeSpace);
    }
    if (message.isBootable === true) {
      writer.uint32(16).bool(message.isBootable);
    }
    if (message.isSystem === true) {
      writer.uint32(24).bool(message.isSystem);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(40).int64(message.size);
    }
    if (message.mountStrid !== "") {
      writer.uint32(50).string(message.mountStrid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Volume {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVolume } as Volume;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.freeSpace = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.isBootable = reader.bool();
          break;
        case 3:
          message.isSystem = reader.bool();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.mountStrid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Volume {
    const message = { ...baseVolume } as Volume;
    message.freeSpace =
      object.freeSpace !== undefined && object.freeSpace !== null
        ? Number(object.freeSpace)
        : 0;
    message.isBootable =
      object.isBootable !== undefined && object.isBootable !== null
        ? Boolean(object.isBootable)
        : false;
    message.isSystem =
      object.isSystem !== undefined && object.isSystem !== null
        ? Boolean(object.isSystem)
        : false;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.mountStrid =
      object.mountStrid !== undefined && object.mountStrid !== null
        ? String(object.mountStrid)
        : "";
    return message;
  },

  toJSON(message: Volume): unknown {
    const obj: any = {};
    message.freeSpace !== undefined &&
      (obj.freeSpace = Math.round(message.freeSpace));
    message.isBootable !== undefined && (obj.isBootable = message.isBootable);
    message.isSystem !== undefined && (obj.isSystem = message.isSystem);
    message.name !== undefined && (obj.name = message.name);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.mountStrid !== undefined && (obj.mountStrid = message.mountStrid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Volume>, I>>(object: I): Volume {
    const message = { ...baseVolume } as Volume;
    message.freeSpace = object.freeSpace ?? 0;
    message.isBootable = object.isBootable ?? false;
    message.isSystem = object.isSystem ?? false;
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.mountStrid = object.mountStrid ?? "";
    return message;
  },
};

messageTypeRegistry.set(Volume.$type, Volume);

const baseDisk: object = {
  $type: "yandex.cloud.backup.v1.Disk",
  deviceModel: "",
  name: "",
  size: 0,
};

export const Disk = {
  $type: "yandex.cloud.backup.v1.Disk" as const,

  encode(message: Disk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceModel !== "") {
      writer.uint32(10).string(message.deviceModel);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(24).int64(message.size);
    }
    for (const v of message.volumes) {
      Volume.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Disk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDisk } as Disk;
    message.volumes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceModel = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.volumes.push(Volume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Disk {
    const message = { ...baseDisk } as Disk;
    message.deviceModel =
      object.deviceModel !== undefined && object.deviceModel !== null
        ? String(object.deviceModel)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.volumes = (object.volumes ?? []).map((e: any) =>
      Volume.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Disk): unknown {
    const obj: any = {};
    message.deviceModel !== undefined &&
      (obj.deviceModel = message.deviceModel);
    message.name !== undefined && (obj.name = message.name);
    message.size !== undefined && (obj.size = Math.round(message.size));
    if (message.volumes) {
      obj.volumes = message.volumes.map((e) =>
        e ? Volume.toJSON(e) : undefined
      );
    } else {
      obj.volumes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Disk>, I>>(object: I): Disk {
    const message = { ...baseDisk } as Disk;
    message.deviceModel = object.deviceModel ?? "";
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.volumes = object.volumes?.map((e) => Volume.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Disk.$type, Disk);

const baseBackup: object = {
  $type: "yandex.cloud.backup.v1.Backup",
  id: "",
  vaultId: "",
  archiveId: "",
  size: 0,
  deduplicatedSize: 0,
  backedUpDataSize: 0,
  originalDataSize: 0,
  computeInstanceId: "",
  type: 0,
  deleted: false,
  policyId: "",
  resourceId: "",
};

export const Backup = {
  $type: "yandex.cloud.backup.v1.Backup" as const,

  encode(
    message: Backup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.vaultId !== "") {
      writer.uint32(18).string(message.vaultId);
    }
    if (message.archiveId !== "") {
      writer.uint32(26).string(message.archiveId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.lastSeenAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastSeenAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    if (message.deduplicatedSize !== 0) {
      writer.uint32(56).int64(message.deduplicatedSize);
    }
    if (message.backedUpDataSize !== 0) {
      writer.uint32(64).int64(message.backedUpDataSize);
    }
    if (message.originalDataSize !== 0) {
      writer.uint32(72).int64(message.originalDataSize);
    }
    if (message.attributes !== undefined) {
      Backup_BackupAttributes.encode(
        message.attributes,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(90).string(message.computeInstanceId);
    }
    for (const v of message.disks) {
      Disk.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(120).int32(message.type);
    }
    if (message.deleted === true) {
      writer.uint32(168).bool(message.deleted);
    }
    if (message.policyId !== "") {
      writer.uint32(178).string(message.policyId);
    }
    if (message.resourceId !== "") {
      writer.uint32(186).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackup } as Backup;
    message.disks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.vaultId = reader.string();
          break;
        case 3:
          message.archiveId = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.lastSeenAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.deduplicatedSize = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.backedUpDataSize = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.originalDataSize = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.attributes = Backup_BackupAttributes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.computeInstanceId = reader.string();
          break;
        case 14:
          message.disks.push(Disk.decode(reader, reader.uint32()));
          break;
        case 15:
          message.type = reader.int32() as any;
          break;
        case 21:
          message.deleted = reader.bool();
          break;
        case 22:
          message.policyId = reader.string();
          break;
        case 23:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Backup {
    const message = { ...baseBackup } as Backup;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? String(object.vaultId)
        : "";
    message.archiveId =
      object.archiveId !== undefined && object.archiveId !== null
        ? String(object.archiveId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.lastSeenAt =
      object.lastSeenAt !== undefined && object.lastSeenAt !== null
        ? fromJsonTimestamp(object.lastSeenAt)
        : undefined;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.deduplicatedSize =
      object.deduplicatedSize !== undefined && object.deduplicatedSize !== null
        ? Number(object.deduplicatedSize)
        : 0;
    message.backedUpDataSize =
      object.backedUpDataSize !== undefined && object.backedUpDataSize !== null
        ? Number(object.backedUpDataSize)
        : 0;
    message.originalDataSize =
      object.originalDataSize !== undefined && object.originalDataSize !== null
        ? Number(object.originalDataSize)
        : 0;
    message.attributes =
      object.attributes !== undefined && object.attributes !== null
        ? Backup_BackupAttributes.fromJSON(object.attributes)
        : undefined;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.disks = (object.disks ?? []).map((e: any) => Disk.fromJSON(e));
    message.type =
      object.type !== undefined && object.type !== null
        ? backup_TypeFromJSON(object.type)
        : 0;
    message.deleted =
      object.deleted !== undefined && object.deleted !== null
        ? Boolean(object.deleted)
        : false;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: Backup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.vaultId !== undefined && (obj.vaultId = message.vaultId);
    message.archiveId !== undefined && (obj.archiveId = message.archiveId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.lastSeenAt !== undefined &&
      (obj.lastSeenAt = message.lastSeenAt.toISOString());
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.deduplicatedSize !== undefined &&
      (obj.deduplicatedSize = Math.round(message.deduplicatedSize));
    message.backedUpDataSize !== undefined &&
      (obj.backedUpDataSize = Math.round(message.backedUpDataSize));
    message.originalDataSize !== undefined &&
      (obj.originalDataSize = Math.round(message.originalDataSize));
    message.attributes !== undefined &&
      (obj.attributes = message.attributes
        ? Backup_BackupAttributes.toJSON(message.attributes)
        : undefined);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    if (message.disks) {
      obj.disks = message.disks.map((e) => (e ? Disk.toJSON(e) : undefined));
    } else {
      obj.disks = [];
    }
    message.type !== undefined && (obj.type = backup_TypeToJSON(message.type));
    message.deleted !== undefined && (obj.deleted = message.deleted);
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Backup>, I>>(object: I): Backup {
    const message = { ...baseBackup } as Backup;
    message.id = object.id ?? "";
    message.vaultId = object.vaultId ?? "";
    message.archiveId = object.archiveId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.lastSeenAt = object.lastSeenAt ?? undefined;
    message.size = object.size ?? 0;
    message.deduplicatedSize = object.deduplicatedSize ?? 0;
    message.backedUpDataSize = object.backedUpDataSize ?? 0;
    message.originalDataSize = object.originalDataSize ?? 0;
    message.attributes =
      object.attributes !== undefined && object.attributes !== null
        ? Backup_BackupAttributes.fromPartial(object.attributes)
        : undefined;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.disks = object.disks?.map((e) => Disk.fromPartial(e)) || [];
    message.type = object.type ?? 0;
    message.deleted = object.deleted ?? false;
    message.policyId = object.policyId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Backup.$type, Backup);

const baseBackup_BackupAttributes: object = {
  $type: "yandex.cloud.backup.v1.Backup.BackupAttributes",
  streamName: "",
  uri: "",
};

export const Backup_BackupAttributes = {
  $type: "yandex.cloud.backup.v1.Backup.BackupAttributes" as const,

  encode(
    message: Backup_BackupAttributes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.streamName !== "") {
      writer.uint32(10).string(message.streamName);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Backup_BackupAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBackup_BackupAttributes,
    } as Backup_BackupAttributes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamName = reader.string();
          break;
        case 2:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Backup_BackupAttributes {
    const message = {
      ...baseBackup_BackupAttributes,
    } as Backup_BackupAttributes;
    message.streamName =
      object.streamName !== undefined && object.streamName !== null
        ? String(object.streamName)
        : "";
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    return message;
  },

  toJSON(message: Backup_BackupAttributes): unknown {
    const obj: any = {};
    message.streamName !== undefined && (obj.streamName = message.streamName);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Backup_BackupAttributes>, I>>(
    object: I
  ): Backup_BackupAttributes {
    const message = {
      ...baseBackup_BackupAttributes,
    } as Backup_BackupAttributes;
    message.streamName = object.streamName ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(Backup_BackupAttributes.$type, Backup_BackupAttributes);

const baseBackupFile: object = {
  $type: "yandex.cloud.backup.v1.BackupFile",
  id: "",
  type: 0,
  fullPath: "",
  name: "",
  size: 0,
};

export const BackupFile = {
  $type: "yandex.cloud.backup.v1.BackupFile" as const,

  encode(
    message: BackupFile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.parentId !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.parentId! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.fullPath !== "") {
      writer.uint32(34).string(message.fullPath);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    if (message.actions !== undefined) {
      BackupFile_Actions.encode(
        message.actions,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.modifiedAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackupFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackupFile } as BackupFile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.parentId = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.fullPath = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.actions = BackupFile_Actions.decode(reader, reader.uint32());
          break;
        case 8:
          message.modifiedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackupFile {
    const message = { ...baseBackupFile } as BackupFile;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.parentId =
      object.parentId !== undefined && object.parentId !== null
        ? String(object.parentId)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? backupFile_TypeFromJSON(object.type)
        : 0;
    message.fullPath =
      object.fullPath !== undefined && object.fullPath !== null
        ? String(object.fullPath)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.actions =
      object.actions !== undefined && object.actions !== null
        ? BackupFile_Actions.fromJSON(object.actions)
        : undefined;
    message.modifiedAt =
      object.modifiedAt !== undefined && object.modifiedAt !== null
        ? fromJsonTimestamp(object.modifiedAt)
        : undefined;
    return message;
  },

  toJSON(message: BackupFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.type !== undefined &&
      (obj.type = backupFile_TypeToJSON(message.type));
    message.fullPath !== undefined && (obj.fullPath = message.fullPath);
    message.name !== undefined && (obj.name = message.name);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.actions !== undefined &&
      (obj.actions = message.actions
        ? BackupFile_Actions.toJSON(message.actions)
        : undefined);
    message.modifiedAt !== undefined &&
      (obj.modifiedAt = message.modifiedAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackupFile>, I>>(
    object: I
  ): BackupFile {
    const message = { ...baseBackupFile } as BackupFile;
    message.id = object.id ?? "";
    message.parentId = object.parentId ?? undefined;
    message.type = object.type ?? 0;
    message.fullPath = object.fullPath ?? "";
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.actions =
      object.actions !== undefined && object.actions !== null
        ? BackupFile_Actions.fromPartial(object.actions)
        : undefined;
    message.modifiedAt = object.modifiedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BackupFile.$type, BackupFile);

const baseBackupFile_Actions: object = {
  $type: "yandex.cloud.backup.v1.BackupFile.Actions",
  restoreToDisk: false,
  goToLocation: false,
};

export const BackupFile_Actions = {
  $type: "yandex.cloud.backup.v1.BackupFile.Actions" as const,

  encode(
    message: BackupFile_Actions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.restoreToDisk === true) {
      writer.uint32(8).bool(message.restoreToDisk);
    }
    if (message.goToLocation === true) {
      writer.uint32(16).bool(message.goToLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackupFile_Actions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackupFile_Actions } as BackupFile_Actions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restoreToDisk = reader.bool();
          break;
        case 2:
          message.goToLocation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackupFile_Actions {
    const message = { ...baseBackupFile_Actions } as BackupFile_Actions;
    message.restoreToDisk =
      object.restoreToDisk !== undefined && object.restoreToDisk !== null
        ? Boolean(object.restoreToDisk)
        : false;
    message.goToLocation =
      object.goToLocation !== undefined && object.goToLocation !== null
        ? Boolean(object.goToLocation)
        : false;
    return message;
  },

  toJSON(message: BackupFile_Actions): unknown {
    const obj: any = {};
    message.restoreToDisk !== undefined &&
      (obj.restoreToDisk = message.restoreToDisk);
    message.goToLocation !== undefined &&
      (obj.goToLocation = message.goToLocation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackupFile_Actions>, I>>(
    object: I
  ): BackupFile_Actions {
    const message = { ...baseBackupFile_Actions } as BackupFile_Actions;
    message.restoreToDisk = object.restoreToDisk ?? false;
    message.goToLocation = object.goToLocation ?? false;
    return message;
  },
};

messageTypeRegistry.set(BackupFile_Actions.$type, BackupFile_Actions);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
