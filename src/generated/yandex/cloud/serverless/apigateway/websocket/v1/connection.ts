/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../../google/protobuf/timestamp";

export const protobufPackage =
  "yandex.cloud.serverless.apigateway.websocket.v1";

export interface Connection {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection";
  /** ID of the connection. */
  id: string;
  /** ID of the API Gateway. */
  gatewayId: string;
  /** The information about the caller making the request to API Gateway. */
  identity?: Identity;
  /** The timestamp at which connection was established. */
  connectedAt?: Date;
  /** The timestamp at which connection was last accessed. */
  lastActiveAt?: Date;
}

export interface Identity {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity";
  /** The source IP address of the caller making the request to API Gateway. */
  sourceIp: string;
  /** The User Agent of the caller making the request to API Gateway. */
  userAgent: string;
}

const baseConnection: object = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection",
  id: "",
  gatewayId: "",
};

export const Connection = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection" as const,

  encode(
    message: Connection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.gatewayId !== "") {
      writer.uint32(18).string(message.gatewayId);
    }
    if (message.identity !== undefined) {
      Identity.encode(message.identity, writer.uint32(26).fork()).ldelim();
    }
    if (message.connectedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.connectedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.lastActiveAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastActiveAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnection } as Connection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.gatewayId = reader.string();
          break;
        case 3:
          message.identity = Identity.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.lastActiveAt = fromTimestamp(
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

  fromJSON(object: any): Connection {
    const message = { ...baseConnection } as Connection;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.gatewayId =
      object.gatewayId !== undefined && object.gatewayId !== null
        ? String(object.gatewayId)
        : "";
    message.identity =
      object.identity !== undefined && object.identity !== null
        ? Identity.fromJSON(object.identity)
        : undefined;
    message.connectedAt =
      object.connectedAt !== undefined && object.connectedAt !== null
        ? fromJsonTimestamp(object.connectedAt)
        : undefined;
    message.lastActiveAt =
      object.lastActiveAt !== undefined && object.lastActiveAt !== null
        ? fromJsonTimestamp(object.lastActiveAt)
        : undefined;
    return message;
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
    message.identity !== undefined &&
      (obj.identity = message.identity
        ? Identity.toJSON(message.identity)
        : undefined);
    message.connectedAt !== undefined &&
      (obj.connectedAt = message.connectedAt.toISOString());
    message.lastActiveAt !== undefined &&
      (obj.lastActiveAt = message.lastActiveAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Connection>, I>>(
    object: I
  ): Connection {
    const message = { ...baseConnection } as Connection;
    message.id = object.id ?? "";
    message.gatewayId = object.gatewayId ?? "";
    message.identity =
      object.identity !== undefined && object.identity !== null
        ? Identity.fromPartial(object.identity)
        : undefined;
    message.connectedAt = object.connectedAt ?? undefined;
    message.lastActiveAt = object.lastActiveAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Connection.$type, Connection);

const baseIdentity: object = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity",
  sourceIp: "",
  userAgent: "",
};

export const Identity = {
  $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity" as const,

  encode(
    message: Identity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceIp !== "") {
      writer.uint32(10).string(message.sourceIp);
    }
    if (message.userAgent !== "") {
      writer.uint32(18).string(message.userAgent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Identity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentity } as Identity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceIp = reader.string();
          break;
        case 2:
          message.userAgent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Identity {
    const message = { ...baseIdentity } as Identity;
    message.sourceIp =
      object.sourceIp !== undefined && object.sourceIp !== null
        ? String(object.sourceIp)
        : "";
    message.userAgent =
      object.userAgent !== undefined && object.userAgent !== null
        ? String(object.userAgent)
        : "";
    return message;
  },

  toJSON(message: Identity): unknown {
    const obj: any = {};
    message.sourceIp !== undefined && (obj.sourceIp = message.sourceIp);
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Identity>, I>>(object: I): Identity {
    const message = { ...baseIdentity } as Identity;
    message.sourceIp = object.sourceIp ?? "";
    message.userAgent = object.userAgent ?? "";
    return message;
  },
};

messageTypeRegistry.set(Identity.$type, Identity);

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
