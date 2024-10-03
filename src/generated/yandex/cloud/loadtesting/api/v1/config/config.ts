/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.config";

/** Test config. */
export interface Config {
  $type: "yandex.cloud.loadtesting.api.v1.config.Config";
  /** ID of the test config. Generated at creation time. */
  id: string;
  /** ID of the folder that the config belongs to. */
  folderId: string;
  /** Config content in YAML format. */
  yamlString: string;
  /** Name of the config. */
  name: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /** UA or SA that created the config. */
  createdBy: string;
}

const baseConfig: object = {
  $type: "yandex.cloud.loadtesting.api.v1.config.Config",
  id: "",
  folderId: "",
  yamlString: "",
  name: "",
  createdBy: "",
};

export const Config = {
  $type: "yandex.cloud.loadtesting.api.v1.config.Config" as const,

  encode(
    message: Config,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.yamlString !== "") {
      writer.uint32(26).string(message.yamlString);
    }
    if (message.name !== "") {
      writer.uint32(82).string(message.name);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.createdBy !== "") {
      writer.uint32(98).string(message.createdBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfig } as Config;
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
          message.yamlString = reader.string();
          break;
        case 10:
          message.name = reader.string();
          break;
        case 11:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.createdBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Config {
    const message = { ...baseConfig } as Config;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.yamlString =
      object.yamlString !== undefined && object.yamlString !== null
        ? String(object.yamlString)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.createdBy =
      object.createdBy !== undefined && object.createdBy !== null
        ? String(object.createdBy)
        : "";
    return message;
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.yamlString !== undefined && (obj.yamlString = message.yamlString);
    message.name !== undefined && (obj.name = message.name);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Config>, I>>(object: I): Config {
    const message = { ...baseConfig } as Config;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.yamlString = object.yamlString ?? "";
    message.name = object.name ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.createdBy = object.createdBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(Config.$type, Config);

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
