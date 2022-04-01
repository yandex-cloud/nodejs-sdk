/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../../../google/protobuf/empty";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum ObjectTransferStage {
  OBJECT_TRANSFER_STAGE_UNSPECIFIED = 0,
  BEFORE_DATA = 1,
  AFTER_DATA = 2,
  NEVER = 3,
  UNRECOGNIZED = -1,
}

export function objectTransferStageFromJSON(object: any): ObjectTransferStage {
  switch (object) {
    case 0:
    case "OBJECT_TRANSFER_STAGE_UNSPECIFIED":
      return ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED;
    case 1:
    case "BEFORE_DATA":
      return ObjectTransferStage.BEFORE_DATA;
    case 2:
    case "AFTER_DATA":
      return ObjectTransferStage.AFTER_DATA;
    case 3:
    case "NEVER":
      return ObjectTransferStage.NEVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectTransferStage.UNRECOGNIZED;
  }
}

export function objectTransferStageToJSON(object: ObjectTransferStage): string {
  switch (object) {
    case ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED:
      return "OBJECT_TRANSFER_STAGE_UNSPECIFIED";
    case ObjectTransferStage.BEFORE_DATA:
      return "BEFORE_DATA";
    case ObjectTransferStage.AFTER_DATA:
      return "AFTER_DATA";
    case ObjectTransferStage.NEVER:
      return "NEVER";
    default:
      return "UNKNOWN";
  }
}

export enum CleanupPolicy {
  CLEANUP_POLICY_UNSPECIFIED = 0,
  DISABLED = 1,
  DROP = 2,
  TRUNCATE = 3,
  UNRECOGNIZED = -1,
}

export function cleanupPolicyFromJSON(object: any): CleanupPolicy {
  switch (object) {
    case 0:
    case "CLEANUP_POLICY_UNSPECIFIED":
      return CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "DISABLED":
      return CleanupPolicy.DISABLED;
    case 2:
    case "DROP":
      return CleanupPolicy.DROP;
    case 3:
    case "TRUNCATE":
      return CleanupPolicy.TRUNCATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CleanupPolicy.UNRECOGNIZED;
  }
}

export function cleanupPolicyToJSON(object: CleanupPolicy): string {
  switch (object) {
    case CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
      return "CLEANUP_POLICY_UNSPECIFIED";
    case CleanupPolicy.DISABLED:
      return "DISABLED";
    case CleanupPolicy.DROP:
      return "DROP";
    case CleanupPolicy.TRUNCATE:
      return "TRUNCATE";
    default:
      return "UNKNOWN";
  }
}

export interface Secret {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Secret";
  /** Password */
  raw: string | undefined;
}

export interface TLSMode {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode";
  disabled?: Empty | undefined;
  enabled?: TLSConfig | undefined;
}

export interface TLSConfig {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig";
  /**
   * CA certificate
   *
   * X.509 certificate of the certificate authority which issued the server's
   * certificate, in PEM format. When CA certificate is specified TLS is used to
   * connect to the server.
   */
  caCertificate: string;
}

const baseSecret: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Secret",
};

export const Secret = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Secret" as const,

  encode(
    message: Secret,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.raw !== undefined) {
      writer.uint32(10).string(message.raw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecret } as Secret;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.raw = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Secret {
    const message = { ...baseSecret } as Secret;
    message.raw =
      object.raw !== undefined && object.raw !== null
        ? String(object.raw)
        : undefined;
    return message;
  },

  toJSON(message: Secret): unknown {
    const obj: any = {};
    message.raw !== undefined && (obj.raw = message.raw);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
    const message = { ...baseSecret } as Secret;
    message.raw = object.raw ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Secret.$type, Secret);

const baseTLSMode: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode",
};

export const TLSMode = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode" as const,

  encode(
    message: TLSMode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.disabled !== undefined) {
      Empty.encode(message.disabled, writer.uint32(10).fork()).ldelim();
    }
    if (message.enabled !== undefined) {
      TLSConfig.encode(message.enabled, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSMode } as TLSMode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabled = Empty.decode(reader, reader.uint32());
          break;
        case 2:
          message.enabled = TLSConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TLSMode {
    const message = { ...baseTLSMode } as TLSMode;
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Empty.fromJSON(object.disabled)
        : undefined;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? TLSConfig.fromJSON(object.enabled)
        : undefined;
    return message;
  },

  toJSON(message: TLSMode): unknown {
    const obj: any = {};
    message.disabled !== undefined &&
      (obj.disabled = message.disabled
        ? Empty.toJSON(message.disabled)
        : undefined);
    message.enabled !== undefined &&
      (obj.enabled = message.enabled
        ? TLSConfig.toJSON(message.enabled)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TLSMode>, I>>(object: I): TLSMode {
    const message = { ...baseTLSMode } as TLSMode;
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Empty.fromPartial(object.disabled)
        : undefined;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? TLSConfig.fromPartial(object.enabled)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(TLSMode.$type, TLSMode);

const baseTLSConfig: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig",
  caCertificate: "",
};

export const TLSConfig = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig" as const,

  encode(
    message: TLSConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.caCertificate !== "") {
      writer.uint32(10).string(message.caCertificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSConfig } as TLSConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caCertificate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TLSConfig {
    const message = { ...baseTLSConfig } as TLSConfig;
    message.caCertificate =
      object.caCertificate !== undefined && object.caCertificate !== null
        ? String(object.caCertificate)
        : "";
    return message;
  },

  toJSON(message: TLSConfig): unknown {
    const obj: any = {};
    message.caCertificate !== undefined &&
      (obj.caCertificate = message.caCertificate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TLSConfig>, I>>(
    object: I
  ): TLSConfig {
    const message = { ...baseTLSConfig } as TLSConfig;
    message.caCertificate = object.caCertificate ?? "";
    return message;
  },
};

messageTypeRegistry.set(TLSConfig.$type, TLSConfig);

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
