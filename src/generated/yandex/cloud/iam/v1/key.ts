/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.iam.v1";

/** A Key resource. For more information, see [Authorized keys](/docs/iam/concepts/authorization/key). */
export interface Key {
  $type: "yandex.cloud.iam.v1.Key";
  /** ID of the Key resource. */
  id: string;
  /** ID of the user account that the Key resource belongs to. */
  userAccountId: string | undefined;
  /** ID of the service account that the Key resource belongs to. */
  serviceAccountId: string | undefined;
  /** Creation timestamp. */
  createdAt?: Date;
  /** Description of the Key resource. 0-256 characters long. */
  description: string;
  /** An algorithm used to generate a key pair of the Key resource. */
  keyAlgorithm: Key_Algorithm;
  /** A public key of the Key resource. */
  publicKey: string;
  /** Timestamp for the last use of this key. */
  lastUsedAt?: Date;
}

export enum Key_Algorithm {
  ALGORITHM_UNSPECIFIED = 0,
  /** RSA_2048 - RSA with a 2048-bit key size. Default value. */
  RSA_2048 = 1,
  /** RSA_4096 - RSA with a 4096-bit key size. */
  RSA_4096 = 2,
  UNRECOGNIZED = -1,
}

export function key_AlgorithmFromJSON(object: any): Key_Algorithm {
  switch (object) {
    case 0:
    case "ALGORITHM_UNSPECIFIED":
      return Key_Algorithm.ALGORITHM_UNSPECIFIED;
    case 1:
    case "RSA_2048":
      return Key_Algorithm.RSA_2048;
    case 2:
    case "RSA_4096":
      return Key_Algorithm.RSA_4096;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Key_Algorithm.UNRECOGNIZED;
  }
}

export function key_AlgorithmToJSON(object: Key_Algorithm): string {
  switch (object) {
    case Key_Algorithm.ALGORITHM_UNSPECIFIED:
      return "ALGORITHM_UNSPECIFIED";
    case Key_Algorithm.RSA_2048:
      return "RSA_2048";
    case Key_Algorithm.RSA_4096:
      return "RSA_4096";
    default:
      return "UNKNOWN";
  }
}

const baseKey: object = {
  $type: "yandex.cloud.iam.v1.Key",
  id: "",
  description: "",
  keyAlgorithm: 0,
  publicKey: "",
};

export const Key = {
  $type: "yandex.cloud.iam.v1.Key" as const,

  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userAccountId !== undefined) {
      writer.uint32(18).string(message.userAccountId);
    }
    if (message.serviceAccountId !== undefined) {
      writer.uint32(26).string(message.serviceAccountId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.keyAlgorithm !== 0) {
      writer.uint32(48).int32(message.keyAlgorithm);
    }
    if (message.publicKey !== "") {
      writer.uint32(58).string(message.publicKey);
    }
    if (message.lastUsedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastUsedAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKey } as Key;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.userAccountId = reader.string();
          break;
        case 3:
          message.serviceAccountId = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.keyAlgorithm = reader.int32() as any;
          break;
        case 7:
          message.publicKey = reader.string();
          break;
        case 9:
          message.lastUsedAt = fromTimestamp(
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

  fromJSON(object: any): Key {
    const message = { ...baseKey } as Key;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.userAccountId =
      object.userAccountId !== undefined && object.userAccountId !== null
        ? String(object.userAccountId)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.keyAlgorithm =
      object.keyAlgorithm !== undefined && object.keyAlgorithm !== null
        ? key_AlgorithmFromJSON(object.keyAlgorithm)
        : 0;
    message.publicKey =
      object.publicKey !== undefined && object.publicKey !== null
        ? String(object.publicKey)
        : "";
    message.lastUsedAt =
      object.lastUsedAt !== undefined && object.lastUsedAt !== null
        ? fromJsonTimestamp(object.lastUsedAt)
        : undefined;
    return message;
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.userAccountId !== undefined &&
      (obj.userAccountId = message.userAccountId);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.description !== undefined &&
      (obj.description = message.description);
    message.keyAlgorithm !== undefined &&
      (obj.keyAlgorithm = key_AlgorithmToJSON(message.keyAlgorithm));
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.lastUsedAt !== undefined &&
      (obj.lastUsedAt = message.lastUsedAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Key>, I>>(object: I): Key {
    const message = { ...baseKey } as Key;
    message.id = object.id ?? "";
    message.userAccountId = object.userAccountId ?? undefined;
    message.serviceAccountId = object.serviceAccountId ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.description = object.description ?? "";
    message.keyAlgorithm = object.keyAlgorithm ?? 0;
    message.publicKey = object.publicKey ?? "";
    message.lastUsedAt = object.lastUsedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Key.$type, Key);

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
