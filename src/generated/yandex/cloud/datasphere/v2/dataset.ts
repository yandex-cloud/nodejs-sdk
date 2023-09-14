/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface Dataset {
  $type: "yandex.cloud.datasphere.v2.Dataset";
  /** ID of the dataset. */
  id: string;
  /** ID of the project. */
  projectId: string;
  /** Time the dataset was created. */
  createdAt?: Date;
  /** Name of the dataset. */
  name: string;
  /** Description of the dataset. */
  description: string;
  /** Labels of the dataset. */
  labels: { [key: string]: string };
  /** ID of the user who created the dataset. */
  createdById: string;
  /** Code used to create dataset. */
  code: string;
  /** Size of the dataset, Gb. */
  sizeGb: number;
  /** Zone IDs where dataset is available. */
  zoneIds: string[];
  /** Dataset mount path. */
  mountPath: string;
  /** ID of the data capsule object, storing information about dataset storage. */
  dataCapsuleId: string;
}

export interface Dataset_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry";
  key: string;
  value: string;
}

export interface DatasetStatus {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus";
  /** Dataset is activated. */
  statusActive?: DatasetStatus_StatusActive | undefined;
  /** Dataset is inactive. */
  statusInactive?: DatasetStatus_StatusInactive | undefined;
  /** Error while activating dataset. */
  statusError?: DatasetStatus_StatusError | undefined;
}

export interface DatasetStatus_StatusActive {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive";
}

export interface DatasetStatus_StatusInactive {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive";
}

export interface DatasetStatus_StatusError {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError";
  /** Text of the error. */
  error: string;
}

const baseDataset: object = {
  $type: "yandex.cloud.datasphere.v2.Dataset",
  id: "",
  projectId: "",
  name: "",
  description: "",
  createdById: "",
  code: "",
  sizeGb: 0,
  zoneIds: "",
  mountPath: "",
  dataCapsuleId: "",
};

export const Dataset = {
  $type: "yandex.cloud.datasphere.v2.Dataset" as const,

  encode(
    message: Dataset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Dataset_LabelsEntry.encode(
        {
          $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.createdById !== "") {
      writer.uint32(58).string(message.createdById);
    }
    if (message.code !== "") {
      writer.uint32(66).string(message.code);
    }
    if (message.sizeGb !== 0) {
      writer.uint32(72).int64(message.sizeGb);
    }
    for (const v of message.zoneIds) {
      writer.uint32(82).string(v!);
    }
    if (message.mountPath !== "") {
      writer.uint32(90).string(message.mountPath);
    }
    if (message.dataCapsuleId !== "") {
      writer.uint32(98).string(message.dataCapsuleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dataset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataset } as Dataset;
    message.labels = {};
    message.zoneIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = Dataset_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.createdById = reader.string();
          break;
        case 8:
          message.code = reader.string();
          break;
        case 9:
          message.sizeGb = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.zoneIds.push(reader.string());
          break;
        case 11:
          message.mountPath = reader.string();
          break;
        case 12:
          message.dataCapsuleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dataset {
    const message = { ...baseDataset } as Dataset;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
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
    message.createdById =
      object.createdById !== undefined && object.createdById !== null
        ? String(object.createdById)
        : "";
    message.code =
      object.code !== undefined && object.code !== null
        ? String(object.code)
        : "";
    message.sizeGb =
      object.sizeGb !== undefined && object.sizeGb !== null
        ? Number(object.sizeGb)
        : 0;
    message.zoneIds = (object.zoneIds ?? []).map((e: any) => String(e));
    message.mountPath =
      object.mountPath !== undefined && object.mountPath !== null
        ? String(object.mountPath)
        : "";
    message.dataCapsuleId =
      object.dataCapsuleId !== undefined && object.dataCapsuleId !== null
        ? String(object.dataCapsuleId)
        : "";
    return message;
  },

  toJSON(message: Dataset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.createdById !== undefined &&
      (obj.createdById = message.createdById);
    message.code !== undefined && (obj.code = message.code);
    message.sizeGb !== undefined && (obj.sizeGb = Math.round(message.sizeGb));
    if (message.zoneIds) {
      obj.zoneIds = message.zoneIds.map((e) => e);
    } else {
      obj.zoneIds = [];
    }
    message.mountPath !== undefined && (obj.mountPath = message.mountPath);
    message.dataCapsuleId !== undefined &&
      (obj.dataCapsuleId = message.dataCapsuleId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Dataset>, I>>(object: I): Dataset {
    const message = { ...baseDataset } as Dataset;
    message.id = object.id ?? "";
    message.projectId = object.projectId ?? "";
    message.createdAt = object.createdAt ?? undefined;
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
    message.createdById = object.createdById ?? "";
    message.code = object.code ?? "";
    message.sizeGb = object.sizeGb ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.mountPath = object.mountPath ?? "";
    message.dataCapsuleId = object.dataCapsuleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Dataset.$type, Dataset);

const baseDataset_LabelsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry",
  key: "",
  value: "",
};

export const Dataset_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry" as const,

  encode(
    message: Dataset_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Dataset_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataset_LabelsEntry } as Dataset_LabelsEntry;
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

  fromJSON(object: any): Dataset_LabelsEntry {
    const message = { ...baseDataset_LabelsEntry } as Dataset_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Dataset_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Dataset_LabelsEntry>, I>>(
    object: I
  ): Dataset_LabelsEntry {
    const message = { ...baseDataset_LabelsEntry } as Dataset_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Dataset_LabelsEntry.$type, Dataset_LabelsEntry);

const baseDatasetStatus: object = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus",
};

export const DatasetStatus = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus" as const,

  encode(
    message: DatasetStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.statusActive !== undefined) {
      DatasetStatus_StatusActive.encode(
        message.statusActive,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.statusInactive !== undefined) {
      DatasetStatus_StatusInactive.encode(
        message.statusInactive,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.statusError !== undefined) {
      DatasetStatus_StatusError.encode(
        message.statusError,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatasetStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDatasetStatus } as DatasetStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusActive = DatasetStatus_StatusActive.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.statusInactive = DatasetStatus_StatusInactive.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.statusError = DatasetStatus_StatusError.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DatasetStatus {
    const message = { ...baseDatasetStatus } as DatasetStatus;
    message.statusActive =
      object.statusActive !== undefined && object.statusActive !== null
        ? DatasetStatus_StatusActive.fromJSON(object.statusActive)
        : undefined;
    message.statusInactive =
      object.statusInactive !== undefined && object.statusInactive !== null
        ? DatasetStatus_StatusInactive.fromJSON(object.statusInactive)
        : undefined;
    message.statusError =
      object.statusError !== undefined && object.statusError !== null
        ? DatasetStatus_StatusError.fromJSON(object.statusError)
        : undefined;
    return message;
  },

  toJSON(message: DatasetStatus): unknown {
    const obj: any = {};
    message.statusActive !== undefined &&
      (obj.statusActive = message.statusActive
        ? DatasetStatus_StatusActive.toJSON(message.statusActive)
        : undefined);
    message.statusInactive !== undefined &&
      (obj.statusInactive = message.statusInactive
        ? DatasetStatus_StatusInactive.toJSON(message.statusInactive)
        : undefined);
    message.statusError !== undefined &&
      (obj.statusError = message.statusError
        ? DatasetStatus_StatusError.toJSON(message.statusError)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DatasetStatus>, I>>(
    object: I
  ): DatasetStatus {
    const message = { ...baseDatasetStatus } as DatasetStatus;
    message.statusActive =
      object.statusActive !== undefined && object.statusActive !== null
        ? DatasetStatus_StatusActive.fromPartial(object.statusActive)
        : undefined;
    message.statusInactive =
      object.statusInactive !== undefined && object.statusInactive !== null
        ? DatasetStatus_StatusInactive.fromPartial(object.statusInactive)
        : undefined;
    message.statusError =
      object.statusError !== undefined && object.statusError !== null
        ? DatasetStatus_StatusError.fromPartial(object.statusError)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DatasetStatus.$type, DatasetStatus);

const baseDatasetStatus_StatusActive: object = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive",
};

export const DatasetStatus_StatusActive = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive" as const,

  encode(
    _: DatasetStatus_StatusActive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DatasetStatus_StatusActive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDatasetStatus_StatusActive,
    } as DatasetStatus_StatusActive;
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

  fromJSON(_: any): DatasetStatus_StatusActive {
    const message = {
      ...baseDatasetStatus_StatusActive,
    } as DatasetStatus_StatusActive;
    return message;
  },

  toJSON(_: DatasetStatus_StatusActive): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DatasetStatus_StatusActive>, I>>(
    _: I
  ): DatasetStatus_StatusActive {
    const message = {
      ...baseDatasetStatus_StatusActive,
    } as DatasetStatus_StatusActive;
    return message;
  },
};

messageTypeRegistry.set(
  DatasetStatus_StatusActive.$type,
  DatasetStatus_StatusActive
);

const baseDatasetStatus_StatusInactive: object = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive",
};

export const DatasetStatus_StatusInactive = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive" as const,

  encode(
    _: DatasetStatus_StatusInactive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DatasetStatus_StatusInactive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDatasetStatus_StatusInactive,
    } as DatasetStatus_StatusInactive;
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

  fromJSON(_: any): DatasetStatus_StatusInactive {
    const message = {
      ...baseDatasetStatus_StatusInactive,
    } as DatasetStatus_StatusInactive;
    return message;
  },

  toJSON(_: DatasetStatus_StatusInactive): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DatasetStatus_StatusInactive>, I>>(
    _: I
  ): DatasetStatus_StatusInactive {
    const message = {
      ...baseDatasetStatus_StatusInactive,
    } as DatasetStatus_StatusInactive;
    return message;
  },
};

messageTypeRegistry.set(
  DatasetStatus_StatusInactive.$type,
  DatasetStatus_StatusInactive
);

const baseDatasetStatus_StatusError: object = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError",
  error: "",
};

export const DatasetStatus_StatusError = {
  $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError" as const,

  encode(
    message: DatasetStatus_StatusError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DatasetStatus_StatusError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDatasetStatus_StatusError,
    } as DatasetStatus_StatusError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DatasetStatus_StatusError {
    const message = {
      ...baseDatasetStatus_StatusError,
    } as DatasetStatus_StatusError;
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : "";
    return message;
  },

  toJSON(message: DatasetStatus_StatusError): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DatasetStatus_StatusError>, I>>(
    object: I
  ): DatasetStatus_StatusError {
    const message = {
      ...baseDatasetStatus_StatusError,
    } as DatasetStatus_StatusError;
    message.error = object.error ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DatasetStatus_StatusError.$type,
  DatasetStatus_StatusError
);

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
