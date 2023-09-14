/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface ScanPolicy {
  $type: "yandex.cloud.containerregistry.v1.ScanPolicy";
  /** Output only. ID of the scan policy. */
  id: string;
  /**
   * ID of the registry that the scan policy belongs to.
   * Required. The maximum string length in characters is 50.
   */
  registryId: string;
  /** Name of the scan policy. */
  name: string;
  /**
   * Description of the scan policy.
   * The maximum string length in characters is 256.
   */
  description: string;
  /** The rules of scan policy. */
  rules?: ScanRules;
  /** Output only. Creation timestamp. */
  createdAt?: Date;
  /** Turns off scan policy. */
  disabled: boolean;
}

export interface ScanRules {
  $type: "yandex.cloud.containerregistry.v1.ScanRules";
  /** Description of on-push scan rule. */
  pushRule?: PushRule;
  /** Description of time based rescan rule. */
  scheduleRules: ScheduledRule[];
}

export interface PushRule {
  $type: "yandex.cloud.containerregistry.v1.PushRule";
  /** List of repositories that are scanned with rule. Child repositories are included into parent node. "*" - means all repositories in registry */
  repositoryPrefixes: string[];
  /** Turns off scan rule. */
  disabled: boolean;
}

export interface ScheduledRule {
  $type: "yandex.cloud.containerregistry.v1.ScheduledRule";
  /** List of repositories that are scanned with rule. Child repositories are included into parent node. "*" - means all repositories in registry */
  repositoryPrefixes: string[];
  /** Period of time since last scan to trigger automatic rescan. */
  rescanPeriod?: Duration;
  /** Turns off scan rule. */
  disabled: boolean;
}

const baseScanPolicy: object = {
  $type: "yandex.cloud.containerregistry.v1.ScanPolicy",
  id: "",
  registryId: "",
  name: "",
  description: "",
  disabled: false,
};

export const ScanPolicy = {
  $type: "yandex.cloud.containerregistry.v1.ScanPolicy" as const,

  encode(
    message: ScanPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.registryId !== "") {
      writer.uint32(18).string(message.registryId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.rules !== undefined) {
      ScanRules.encode(message.rules, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.disabled === true) {
      writer.uint32(56).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScanPolicy } as ScanPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.registryId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.rules = ScanRules.decode(reader, reader.uint32());
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScanPolicy {
    const message = { ...baseScanPolicy } as ScanPolicy;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.rules =
      object.rules !== undefined && object.rules !== null
        ? ScanRules.fromJSON(object.rules)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Boolean(object.disabled)
        : false;
    return message;
  },

  toJSON(message: ScanPolicy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.rules !== undefined &&
      (obj.rules = message.rules ? ScanRules.toJSON(message.rules) : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScanPolicy>, I>>(
    object: I
  ): ScanPolicy {
    const message = { ...baseScanPolicy } as ScanPolicy;
    message.id = object.id ?? "";
    message.registryId = object.registryId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rules =
      object.rules !== undefined && object.rules !== null
        ? ScanRules.fromPartial(object.rules)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(ScanPolicy.$type, ScanPolicy);

const baseScanRules: object = {
  $type: "yandex.cloud.containerregistry.v1.ScanRules",
};

export const ScanRules = {
  $type: "yandex.cloud.containerregistry.v1.ScanRules" as const,

  encode(
    message: ScanRules,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pushRule !== undefined) {
      PushRule.encode(message.pushRule, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.scheduleRules) {
      ScheduledRule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScanRules } as ScanRules;
    message.scheduleRules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pushRule = PushRule.decode(reader, reader.uint32());
          break;
        case 2:
          message.scheduleRules.push(
            ScheduledRule.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScanRules {
    const message = { ...baseScanRules } as ScanRules;
    message.pushRule =
      object.pushRule !== undefined && object.pushRule !== null
        ? PushRule.fromJSON(object.pushRule)
        : undefined;
    message.scheduleRules = (object.scheduleRules ?? []).map((e: any) =>
      ScheduledRule.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ScanRules): unknown {
    const obj: any = {};
    message.pushRule !== undefined &&
      (obj.pushRule = message.pushRule
        ? PushRule.toJSON(message.pushRule)
        : undefined);
    if (message.scheduleRules) {
      obj.scheduleRules = message.scheduleRules.map((e) =>
        e ? ScheduledRule.toJSON(e) : undefined
      );
    } else {
      obj.scheduleRules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScanRules>, I>>(
    object: I
  ): ScanRules {
    const message = { ...baseScanRules } as ScanRules;
    message.pushRule =
      object.pushRule !== undefined && object.pushRule !== null
        ? PushRule.fromPartial(object.pushRule)
        : undefined;
    message.scheduleRules =
      object.scheduleRules?.map((e) => ScheduledRule.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ScanRules.$type, ScanRules);

const basePushRule: object = {
  $type: "yandex.cloud.containerregistry.v1.PushRule",
  repositoryPrefixes: "",
  disabled: false,
};

export const PushRule = {
  $type: "yandex.cloud.containerregistry.v1.PushRule" as const,

  encode(
    message: PushRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.repositoryPrefixes) {
      writer.uint32(10).string(v!);
    }
    if (message.disabled === true) {
      writer.uint32(16).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PushRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePushRule } as PushRule;
    message.repositoryPrefixes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repositoryPrefixes.push(reader.string());
          break;
        case 2:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PushRule {
    const message = { ...basePushRule } as PushRule;
    message.repositoryPrefixes = (object.repositoryPrefixes ?? []).map(
      (e: any) => String(e)
    );
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Boolean(object.disabled)
        : false;
    return message;
  },

  toJSON(message: PushRule): unknown {
    const obj: any = {};
    if (message.repositoryPrefixes) {
      obj.repositoryPrefixes = message.repositoryPrefixes.map((e) => e);
    } else {
      obj.repositoryPrefixes = [];
    }
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PushRule>, I>>(object: I): PushRule {
    const message = { ...basePushRule } as PushRule;
    message.repositoryPrefixes = object.repositoryPrefixes?.map((e) => e) || [];
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(PushRule.$type, PushRule);

const baseScheduledRule: object = {
  $type: "yandex.cloud.containerregistry.v1.ScheduledRule",
  repositoryPrefixes: "",
  disabled: false,
};

export const ScheduledRule = {
  $type: "yandex.cloud.containerregistry.v1.ScheduledRule" as const,

  encode(
    message: ScheduledRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.repositoryPrefixes) {
      writer.uint32(10).string(v!);
    }
    if (message.rescanPeriod !== undefined) {
      Duration.encode(message.rescanPeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.disabled === true) {
      writer.uint32(24).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScheduledRule } as ScheduledRule;
    message.repositoryPrefixes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repositoryPrefixes.push(reader.string());
          break;
        case 2:
          message.rescanPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScheduledRule {
    const message = { ...baseScheduledRule } as ScheduledRule;
    message.repositoryPrefixes = (object.repositoryPrefixes ?? []).map(
      (e: any) => String(e)
    );
    message.rescanPeriod =
      object.rescanPeriod !== undefined && object.rescanPeriod !== null
        ? Duration.fromJSON(object.rescanPeriod)
        : undefined;
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Boolean(object.disabled)
        : false;
    return message;
  },

  toJSON(message: ScheduledRule): unknown {
    const obj: any = {};
    if (message.repositoryPrefixes) {
      obj.repositoryPrefixes = message.repositoryPrefixes.map((e) => e);
    } else {
      obj.repositoryPrefixes = [];
    }
    message.rescanPeriod !== undefined &&
      (obj.rescanPeriod = message.rescanPeriod
        ? Duration.toJSON(message.rescanPeriod)
        : undefined);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduledRule>, I>>(
    object: I
  ): ScheduledRule {
    const message = { ...baseScheduledRule } as ScheduledRule;
    message.repositoryPrefixes = object.repositoryPrefixes?.map((e) => e) || [];
    message.rescanPeriod =
      object.rescanPeriod !== undefined && object.rescanPeriod !== null
        ? Duration.fromPartial(object.rescanPeriod)
        : undefined;
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(ScheduledRule.$type, ScheduledRule);

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
