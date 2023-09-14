/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface Template {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Template";
  id: string;
  versionId: string;
  name: string;
  publisherId: string;
  productId: string;
  tariffId: string;
  licenseSkuId: string;
  period: string;
  createdAt?: Date;
  updatedAt?: Date;
  state: Template_State;
}

export enum Template_State {
  STATE_UNSPECIFIED = 0,
  PENDING = 1,
  ACTIVE = 2,
  DEPRECATED = 3,
  DELETED = 4,
  UNRECOGNIZED = -1,
}

export function template_StateFromJSON(object: any): Template_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Template_State.STATE_UNSPECIFIED;
    case 1:
    case "PENDING":
      return Template_State.PENDING;
    case 2:
    case "ACTIVE":
      return Template_State.ACTIVE;
    case 3:
    case "DEPRECATED":
      return Template_State.DEPRECATED;
    case 4:
    case "DELETED":
      return Template_State.DELETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Template_State.UNRECOGNIZED;
  }
}

export function template_StateToJSON(object: Template_State): string {
  switch (object) {
    case Template_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Template_State.PENDING:
      return "PENDING";
    case Template_State.ACTIVE:
      return "ACTIVE";
    case Template_State.DEPRECATED:
      return "DEPRECATED";
    case Template_State.DELETED:
      return "DELETED";
    default:
      return "UNKNOWN";
  }
}

const baseTemplate: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Template",
  id: "",
  versionId: "",
  name: "",
  publisherId: "",
  productId: "",
  tariffId: "",
  licenseSkuId: "",
  period: "",
  state: 0,
};

export const Template = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Template" as const,

  encode(
    message: Template,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.publisherId !== "") {
      writer.uint32(34).string(message.publisherId);
    }
    if (message.productId !== "") {
      writer.uint32(42).string(message.productId);
    }
    if (message.tariffId !== "") {
      writer.uint32(50).string(message.tariffId);
    }
    if (message.licenseSkuId !== "") {
      writer.uint32(58).string(message.licenseSkuId);
    }
    if (message.period !== "") {
      writer.uint32(66).string(message.period);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(88).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTemplate } as Template;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.publisherId = reader.string();
          break;
        case 5:
          message.productId = reader.string();
          break;
        case 6:
          message.tariffId = reader.string();
          break;
        case 7:
          message.licenseSkuId = reader.string();
          break;
        case 8:
          message.period = reader.string();
          break;
        case 9:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Template {
    const message = { ...baseTemplate } as Template;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.publisherId =
      object.publisherId !== undefined && object.publisherId !== null
        ? String(object.publisherId)
        : "";
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? String(object.productId)
        : "";
    message.tariffId =
      object.tariffId !== undefined && object.tariffId !== null
        ? String(object.tariffId)
        : "";
    message.licenseSkuId =
      object.licenseSkuId !== undefined && object.licenseSkuId !== null
        ? String(object.licenseSkuId)
        : "";
    message.period =
      object.period !== undefined && object.period !== null
        ? String(object.period)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? template_StateFromJSON(object.state)
        : 0;
    return message;
  },

  toJSON(message: Template): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.name !== undefined && (obj.name = message.name);
    message.publisherId !== undefined &&
      (obj.publisherId = message.publisherId);
    message.productId !== undefined && (obj.productId = message.productId);
    message.tariffId !== undefined && (obj.tariffId = message.tariffId);
    message.licenseSkuId !== undefined &&
      (obj.licenseSkuId = message.licenseSkuId);
    message.period !== undefined && (obj.period = message.period);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.state !== undefined &&
      (obj.state = template_StateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Template>, I>>(object: I): Template {
    const message = { ...baseTemplate } as Template;
    message.id = object.id ?? "";
    message.versionId = object.versionId ?? "";
    message.name = object.name ?? "";
    message.publisherId = object.publisherId ?? "";
    message.productId = object.productId ?? "";
    message.tariffId = object.tariffId ?? "";
    message.licenseSkuId = object.licenseSkuId ?? "";
    message.period = object.period ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Template.$type, Template);

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
