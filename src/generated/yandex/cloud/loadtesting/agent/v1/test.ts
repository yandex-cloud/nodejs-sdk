/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface Test {
  $type: "yandex.cloud.loadtesting.agent.v1.Test";
  id: string;
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  createdAt?: Date;
  startedAt?: Date;
  finishedAt?: Date;
  updatedAt?: Date;
  generator: Test_Generator;
  /** AgentInstance ID where Test is running. */
  agentInstanceId: string;
  /** Target VM. */
  targetAddress: string;
  targetPort: number;
  /** Version of object under test. */
  targetVersion: string;
  /** Test details */
  config: string;
  ammoUrls: string | undefined;
  ammoId: string | undefined;
  cases: string[];
  status: Test_Status;
  errors: string[];
  favorite: boolean;
}

export enum Test_Status {
  STATUS_UNSPECIFIED = 0,
  CREATED = 1,
  INITIATED = 2,
  PREPARING = 3,
  RUNNING = 4,
  FINISHING = 5,
  DONE = 6,
  POST_PROCESSING = 7,
  FAILED = 8,
  STOPPING = 9,
  STOPPED = 10,
  AUTOSTOPPED = 11,
  WAITING = 12,
  DELETING = 13,
  LOST = 14,
  UNRECOGNIZED = -1,
}

export function test_StatusFromJSON(object: any): Test_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Test_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATED":
      return Test_Status.CREATED;
    case 2:
    case "INITIATED":
      return Test_Status.INITIATED;
    case 3:
    case "PREPARING":
      return Test_Status.PREPARING;
    case 4:
    case "RUNNING":
      return Test_Status.RUNNING;
    case 5:
    case "FINISHING":
      return Test_Status.FINISHING;
    case 6:
    case "DONE":
      return Test_Status.DONE;
    case 7:
    case "POST_PROCESSING":
      return Test_Status.POST_PROCESSING;
    case 8:
    case "FAILED":
      return Test_Status.FAILED;
    case 9:
    case "STOPPING":
      return Test_Status.STOPPING;
    case 10:
    case "STOPPED":
      return Test_Status.STOPPED;
    case 11:
    case "AUTOSTOPPED":
      return Test_Status.AUTOSTOPPED;
    case 12:
    case "WAITING":
      return Test_Status.WAITING;
    case 13:
    case "DELETING":
      return Test_Status.DELETING;
    case 14:
    case "LOST":
      return Test_Status.LOST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Test_Status.UNRECOGNIZED;
  }
}

export function test_StatusToJSON(object: Test_Status): string {
  switch (object) {
    case Test_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Test_Status.CREATED:
      return "CREATED";
    case Test_Status.INITIATED:
      return "INITIATED";
    case Test_Status.PREPARING:
      return "PREPARING";
    case Test_Status.RUNNING:
      return "RUNNING";
    case Test_Status.FINISHING:
      return "FINISHING";
    case Test_Status.DONE:
      return "DONE";
    case Test_Status.POST_PROCESSING:
      return "POST_PROCESSING";
    case Test_Status.FAILED:
      return "FAILED";
    case Test_Status.STOPPING:
      return "STOPPING";
    case Test_Status.STOPPED:
      return "STOPPED";
    case Test_Status.AUTOSTOPPED:
      return "AUTOSTOPPED";
    case Test_Status.WAITING:
      return "WAITING";
    case Test_Status.DELETING:
      return "DELETING";
    case Test_Status.LOST:
      return "LOST";
    default:
      return "UNKNOWN";
  }
}

export enum Test_Generator {
  GENERATOR_UNSPECIFIED = 0,
  PANDORA = 1,
  PHANTOM = 2,
  JMETER = 3,
  UNRECOGNIZED = -1,
}

export function test_GeneratorFromJSON(object: any): Test_Generator {
  switch (object) {
    case 0:
    case "GENERATOR_UNSPECIFIED":
      return Test_Generator.GENERATOR_UNSPECIFIED;
    case 1:
    case "PANDORA":
      return Test_Generator.PANDORA;
    case 2:
    case "PHANTOM":
      return Test_Generator.PHANTOM;
    case 3:
    case "JMETER":
      return Test_Generator.JMETER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Test_Generator.UNRECOGNIZED;
  }
}

export function test_GeneratorToJSON(object: Test_Generator): string {
  switch (object) {
    case Test_Generator.GENERATOR_UNSPECIFIED:
      return "GENERATOR_UNSPECIFIED";
    case Test_Generator.PANDORA:
      return "PANDORA";
    case Test_Generator.PHANTOM:
      return "PHANTOM";
    case Test_Generator.JMETER:
      return "JMETER";
    default:
      return "UNKNOWN";
  }
}

export interface Test_LabelsEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry";
  key: string;
  value: string;
}

const baseTest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.Test",
  id: "",
  folderId: "",
  name: "",
  description: "",
  generator: 0,
  agentInstanceId: "",
  targetAddress: "",
  targetPort: 0,
  targetVersion: "",
  config: "",
  cases: "",
  status: 0,
  errors: "",
  favorite: false,
};

export const Test = {
  $type: "yandex.cloud.loadtesting.agent.v1.Test" as const,

  encode(message: Test, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Test_LabelsEntry.encode(
        {
          $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startedAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.finishedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.finishedAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.generator !== 0) {
      writer.uint32(80).int32(message.generator);
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(90).string(message.agentInstanceId);
    }
    if (message.targetAddress !== "") {
      writer.uint32(98).string(message.targetAddress);
    }
    if (message.targetPort !== 0) {
      writer.uint32(104).int64(message.targetPort);
    }
    if (message.targetVersion !== "") {
      writer.uint32(114).string(message.targetVersion);
    }
    if (message.config !== "") {
      writer.uint32(122).string(message.config);
    }
    if (message.ammoUrls !== undefined) {
      writer.uint32(130).string(message.ammoUrls);
    }
    if (message.ammoId !== undefined) {
      writer.uint32(138).string(message.ammoId);
    }
    for (const v of message.cases) {
      writer.uint32(146).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(152).int32(message.status);
    }
    for (const v of message.errors) {
      writer.uint32(162).string(v!);
    }
    if (message.favorite === true) {
      writer.uint32(168).bool(message.favorite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Test {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTest } as Test;
    message.labels = {};
    message.cases = [];
    message.errors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = Test_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.startedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.finishedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.generator = reader.int32() as any;
          break;
        case 11:
          message.agentInstanceId = reader.string();
          break;
        case 12:
          message.targetAddress = reader.string();
          break;
        case 13:
          message.targetPort = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.targetVersion = reader.string();
          break;
        case 15:
          message.config = reader.string();
          break;
        case 16:
          message.ammoUrls = reader.string();
          break;
        case 17:
          message.ammoId = reader.string();
          break;
        case 18:
          message.cases.push(reader.string());
          break;
        case 19:
          message.status = reader.int32() as any;
          break;
        case 20:
          message.errors.push(reader.string());
          break;
        case 21:
          message.favorite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Test {
    const message = { ...baseTest } as Test;
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
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.startedAt =
      object.startedAt !== undefined && object.startedAt !== null
        ? fromJsonTimestamp(object.startedAt)
        : undefined;
    message.finishedAt =
      object.finishedAt !== undefined && object.finishedAt !== null
        ? fromJsonTimestamp(object.finishedAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.generator =
      object.generator !== undefined && object.generator !== null
        ? test_GeneratorFromJSON(object.generator)
        : 0;
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    message.targetAddress =
      object.targetAddress !== undefined && object.targetAddress !== null
        ? String(object.targetAddress)
        : "";
    message.targetPort =
      object.targetPort !== undefined && object.targetPort !== null
        ? Number(object.targetPort)
        : 0;
    message.targetVersion =
      object.targetVersion !== undefined && object.targetVersion !== null
        ? String(object.targetVersion)
        : "";
    message.config =
      object.config !== undefined && object.config !== null
        ? String(object.config)
        : "";
    message.ammoUrls =
      object.ammoUrls !== undefined && object.ammoUrls !== null
        ? String(object.ammoUrls)
        : undefined;
    message.ammoId =
      object.ammoId !== undefined && object.ammoId !== null
        ? String(object.ammoId)
        : undefined;
    message.cases = (object.cases ?? []).map((e: any) => String(e));
    message.status =
      object.status !== undefined && object.status !== null
        ? test_StatusFromJSON(object.status)
        : 0;
    message.errors = (object.errors ?? []).map((e: any) => String(e));
    message.favorite =
      object.favorite !== undefined && object.favorite !== null
        ? Boolean(object.favorite)
        : false;
    return message;
  },

  toJSON(message: Test): unknown {
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
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.startedAt !== undefined &&
      (obj.startedAt = message.startedAt.toISOString());
    message.finishedAt !== undefined &&
      (obj.finishedAt = message.finishedAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.generator !== undefined &&
      (obj.generator = test_GeneratorToJSON(message.generator));
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    message.targetAddress !== undefined &&
      (obj.targetAddress = message.targetAddress);
    message.targetPort !== undefined &&
      (obj.targetPort = Math.round(message.targetPort));
    message.targetVersion !== undefined &&
      (obj.targetVersion = message.targetVersion);
    message.config !== undefined && (obj.config = message.config);
    message.ammoUrls !== undefined && (obj.ammoUrls = message.ammoUrls);
    message.ammoId !== undefined && (obj.ammoId = message.ammoId);
    if (message.cases) {
      obj.cases = message.cases.map((e) => e);
    } else {
      obj.cases = [];
    }
    message.status !== undefined &&
      (obj.status = test_StatusToJSON(message.status));
    if (message.errors) {
      obj.errors = message.errors.map((e) => e);
    } else {
      obj.errors = [];
    }
    message.favorite !== undefined && (obj.favorite = message.favorite);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Test>, I>>(object: I): Test {
    const message = { ...baseTest } as Test;
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
    message.createdAt = object.createdAt ?? undefined;
    message.startedAt = object.startedAt ?? undefined;
    message.finishedAt = object.finishedAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.generator = object.generator ?? 0;
    message.agentInstanceId = object.agentInstanceId ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.targetPort = object.targetPort ?? 0;
    message.targetVersion = object.targetVersion ?? "";
    message.config = object.config ?? "";
    message.ammoUrls = object.ammoUrls ?? undefined;
    message.ammoId = object.ammoId ?? undefined;
    message.cases = object.cases?.map((e) => e) || [];
    message.status = object.status ?? 0;
    message.errors = object.errors?.map((e) => e) || [];
    message.favorite = object.favorite ?? false;
    return message;
  },
};

messageTypeRegistry.set(Test.$type, Test);

const baseTest_LabelsEntry: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry",
  key: "",
  value: "",
};

export const Test_LabelsEntry = {
  $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry" as const,

  encode(
    message: Test_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Test_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTest_LabelsEntry } as Test_LabelsEntry;
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

  fromJSON(object: any): Test_LabelsEntry {
    const message = { ...baseTest_LabelsEntry } as Test_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Test_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Test_LabelsEntry>, I>>(
    object: I
  ): Test_LabelsEntry {
    const message = { ...baseTest_LabelsEntry } as Test_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Test_LabelsEntry.$type, Test_LabelsEntry);

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
