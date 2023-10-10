/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Endpoint } from "../../../../yandex/cloud/datatransfer/v1/endpoint";

export const protobufPackage = "yandex.cloud.datatransfer.v1";

export enum TransferType {
  TRANSFER_TYPE_UNSPECIFIED = 0,
  /** SNAPSHOT_AND_INCREMENT - Snapshot and increment */
  SNAPSHOT_AND_INCREMENT = 1,
  /** SNAPSHOT_ONLY - Snapshot */
  SNAPSHOT_ONLY = 2,
  /** INCREMENT_ONLY - Increment */
  INCREMENT_ONLY = 3,
  UNRECOGNIZED = -1,
}

export function transferTypeFromJSON(object: any): TransferType {
  switch (object) {
    case 0:
    case "TRANSFER_TYPE_UNSPECIFIED":
      return TransferType.TRANSFER_TYPE_UNSPECIFIED;
    case 1:
    case "SNAPSHOT_AND_INCREMENT":
      return TransferType.SNAPSHOT_AND_INCREMENT;
    case 2:
    case "SNAPSHOT_ONLY":
      return TransferType.SNAPSHOT_ONLY;
    case 3:
    case "INCREMENT_ONLY":
      return TransferType.INCREMENT_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferType.UNRECOGNIZED;
  }
}

export function transferTypeToJSON(object: TransferType): string {
  switch (object) {
    case TransferType.TRANSFER_TYPE_UNSPECIFIED:
      return "TRANSFER_TYPE_UNSPECIFIED";
    case TransferType.SNAPSHOT_AND_INCREMENT:
      return "SNAPSHOT_AND_INCREMENT";
    case TransferType.SNAPSHOT_ONLY:
      return "SNAPSHOT_ONLY";
    case TransferType.INCREMENT_ONLY:
      return "INCREMENT_ONLY";
    default:
      return "UNKNOWN";
  }
}

export enum TransferStatus {
  TRANSFER_STATUS_UNSPECIFIED = 0,
  /** CREATING - Transfer does some work before running */
  CREATING = 1,
  /** CREATED - Transfer created but not started by user */
  CREATED = 2,
  /** RUNNING - Transfer currently doing replication work */
  RUNNING = 3,
  /** STOPPING - Transfer shutdown */
  STOPPING = 4,
  /** STOPPED - Transfer stopped by user */
  STOPPED = 5,
  /** ERROR - Transfer stopped by system */
  ERROR = 6,
  /** SNAPSHOTTING - Transfer copy snapshot */
  SNAPSHOTTING = 7,
  /** DONE - Transfer reach terminal phase */
  DONE = 8,
  UNRECOGNIZED = -1,
}

export function transferStatusFromJSON(object: any): TransferStatus {
  switch (object) {
    case 0:
    case "TRANSFER_STATUS_UNSPECIFIED":
      return TransferStatus.TRANSFER_STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return TransferStatus.CREATING;
    case 2:
    case "CREATED":
      return TransferStatus.CREATED;
    case 3:
    case "RUNNING":
      return TransferStatus.RUNNING;
    case 4:
    case "STOPPING":
      return TransferStatus.STOPPING;
    case 5:
    case "STOPPED":
      return TransferStatus.STOPPED;
    case 6:
    case "ERROR":
      return TransferStatus.ERROR;
    case 7:
    case "SNAPSHOTTING":
      return TransferStatus.SNAPSHOTTING;
    case 8:
    case "DONE":
      return TransferStatus.DONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferStatus.UNRECOGNIZED;
  }
}

export function transferStatusToJSON(object: TransferStatus): string {
  switch (object) {
    case TransferStatus.TRANSFER_STATUS_UNSPECIFIED:
      return "TRANSFER_STATUS_UNSPECIFIED";
    case TransferStatus.CREATING:
      return "CREATING";
    case TransferStatus.CREATED:
      return "CREATED";
    case TransferStatus.RUNNING:
      return "RUNNING";
    case TransferStatus.STOPPING:
      return "STOPPING";
    case TransferStatus.STOPPED:
      return "STOPPED";
    case TransferStatus.ERROR:
      return "ERROR";
    case TransferStatus.SNAPSHOTTING:
      return "SNAPSHOTTING";
    case TransferStatus.DONE:
      return "DONE";
    default:
      return "UNKNOWN";
  }
}

/** Transfer core entity */
export interface Transfer {
  $type: "yandex.cloud.datatransfer.v1.Transfer";
  id: string;
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  source?: Endpoint;
  target?: Endpoint;
  status: TransferStatus;
  type: TransferType;
  warning: string;
}

export interface Transfer_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry";
  key: string;
  value: string;
}

const baseTransfer: object = {
  $type: "yandex.cloud.datatransfer.v1.Transfer",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  type: 0,
  warning: "",
};

export const Transfer = {
  $type: "yandex.cloud.datatransfer.v1.Transfer" as const,

  encode(
    message: Transfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Transfer_LabelsEntry.encode(
        {
          $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.source !== undefined) {
      Endpoint.encode(message.source, writer.uint32(58).fork()).ldelim();
    }
    if (message.target !== undefined) {
      Endpoint.encode(message.target, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.type !== 0) {
      writer.uint32(96).int32(message.type);
    }
    if (message.warning !== "") {
      writer.uint32(122).string(message.warning);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransfer } as Transfer;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = Transfer_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.source = Endpoint.decode(reader, reader.uint32());
          break;
        case 8:
          message.target = Endpoint.decode(reader, reader.uint32());
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.type = reader.int32() as any;
          break;
        case 15:
          message.warning = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transfer {
    const message = { ...baseTransfer } as Transfer;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.source =
      object.source !== undefined && object.source !== null
        ? Endpoint.fromJSON(object.source)
        : undefined;
    message.target =
      object.target !== undefined && object.target !== null
        ? Endpoint.fromJSON(object.target)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? transferStatusFromJSON(object.status)
        : 0;
    message.type =
      object.type !== undefined && object.type !== null
        ? transferTypeFromJSON(object.type)
        : 0;
    message.warning =
      object.warning !== undefined && object.warning !== null
        ? String(object.warning)
        : "";
    return message;
  },

  toJSON(message: Transfer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.source !== undefined &&
      (obj.source = message.source
        ? Endpoint.toJSON(message.source)
        : undefined);
    message.target !== undefined &&
      (obj.target = message.target
        ? Endpoint.toJSON(message.target)
        : undefined);
    message.status !== undefined &&
      (obj.status = transferStatusToJSON(message.status));
    message.type !== undefined && (obj.type = transferTypeToJSON(message.type));
    message.warning !== undefined && (obj.warning = message.warning);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transfer>, I>>(object: I): Transfer {
    const message = { ...baseTransfer } as Transfer;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.source =
      object.source !== undefined && object.source !== null
        ? Endpoint.fromPartial(object.source)
        : undefined;
    message.target =
      object.target !== undefined && object.target !== null
        ? Endpoint.fromPartial(object.target)
        : undefined;
    message.status = object.status ?? 0;
    message.type = object.type ?? 0;
    message.warning = object.warning ?? "";
    return message;
  },
};

messageTypeRegistry.set(Transfer.$type, Transfer);

const baseTransfer_LabelsEntry: object = {
  $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry",
  key: "",
  value: "",
};

export const Transfer_LabelsEntry = {
  $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry" as const,

  encode(
    message: Transfer_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Transfer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransfer_LabelsEntry } as Transfer_LabelsEntry;
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

  fromJSON(object: any): Transfer_LabelsEntry {
    const message = { ...baseTransfer_LabelsEntry } as Transfer_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Transfer_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transfer_LabelsEntry>, I>>(
    object: I
  ): Transfer_LabelsEntry {
    const message = { ...baseTransfer_LabelsEntry } as Transfer_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Transfer_LabelsEntry.$type, Transfer_LabelsEntry);

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
