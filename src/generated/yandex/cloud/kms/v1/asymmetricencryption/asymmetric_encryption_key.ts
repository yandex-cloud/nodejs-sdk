/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";

/** Supported asymmetric encryption algorithms. */
export enum AsymmetricEncryptionAlgorithm {
  ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED = 0,
  /** RSA_2048_ENC_OAEP_SHA_256 - RSA-2048 encryption with OAEP padding and SHA-256 */
  RSA_2048_ENC_OAEP_SHA_256 = 1,
  /** RSA_3072_ENC_OAEP_SHA_256 - RSA-3072 encryption with OAEP padding and SHA-256 */
  RSA_3072_ENC_OAEP_SHA_256 = 2,
  /** RSA_4096_ENC_OAEP_SHA_256 - RSA-4096 encryption with OAEP padding and SHA-256 */
  RSA_4096_ENC_OAEP_SHA_256 = 3,
  UNRECOGNIZED = -1,
}

export function asymmetricEncryptionAlgorithmFromJSON(
  object: any
): AsymmetricEncryptionAlgorithm {
  switch (object) {
    case 0:
    case "ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED":
      return AsymmetricEncryptionAlgorithm.ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED;
    case 1:
    case "RSA_2048_ENC_OAEP_SHA_256":
      return AsymmetricEncryptionAlgorithm.RSA_2048_ENC_OAEP_SHA_256;
    case 2:
    case "RSA_3072_ENC_OAEP_SHA_256":
      return AsymmetricEncryptionAlgorithm.RSA_3072_ENC_OAEP_SHA_256;
    case 3:
    case "RSA_4096_ENC_OAEP_SHA_256":
      return AsymmetricEncryptionAlgorithm.RSA_4096_ENC_OAEP_SHA_256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AsymmetricEncryptionAlgorithm.UNRECOGNIZED;
  }
}

export function asymmetricEncryptionAlgorithmToJSON(
  object: AsymmetricEncryptionAlgorithm
): string {
  switch (object) {
    case AsymmetricEncryptionAlgorithm.ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED:
      return "ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED";
    case AsymmetricEncryptionAlgorithm.RSA_2048_ENC_OAEP_SHA_256:
      return "RSA_2048_ENC_OAEP_SHA_256";
    case AsymmetricEncryptionAlgorithm.RSA_3072_ENC_OAEP_SHA_256:
      return "RSA_3072_ENC_OAEP_SHA_256";
    case AsymmetricEncryptionAlgorithm.RSA_4096_ENC_OAEP_SHA_256:
      return "RSA_4096_ENC_OAEP_SHA_256";
    default:
      return "UNKNOWN";
  }
}

/** An asymmetric KMS key that may contain several versions of the cryptographic material. */
export interface AsymmetricEncryptionKey {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey";
  /** ID of the key. */
  id: string;
  /** ID of the folder that the key belongs to. */
  folderId: string;
  /** Time when the key was created. */
  createdAt?: Date;
  /** Name of the key. */
  name: string;
  /** Description of the key. */
  description: string;
  /** Custom labels for the key as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Current status of the key. */
  status: AsymmetricEncryptionKey_Status;
  /** Asymmetric Encryption Algorithm ID. */
  encryptionAlgorithm: AsymmetricEncryptionAlgorithm;
  /** Flag that inhibits deletion of the key */
  deletionProtection: boolean;
}

export enum AsymmetricEncryptionKey_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The key is being created. */
  CREATING = 1,
  /**
   * ACTIVE - The key is active and can be used for encryption and decryption or signature and verification.
   * Can be set to INACTIVE using the [AsymmetricKeyService.Update] method.
   */
  ACTIVE = 2,
  /**
   * INACTIVE - The key is inactive and unusable.
   * Can be set to ACTIVE using the [AsymmetricKeyService.Update] method.
   */
  INACTIVE = 3,
  UNRECOGNIZED = -1,
}

export function asymmetricEncryptionKey_StatusFromJSON(
  object: any
): AsymmetricEncryptionKey_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return AsymmetricEncryptionKey_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return AsymmetricEncryptionKey_Status.CREATING;
    case 2:
    case "ACTIVE":
      return AsymmetricEncryptionKey_Status.ACTIVE;
    case 3:
    case "INACTIVE":
      return AsymmetricEncryptionKey_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AsymmetricEncryptionKey_Status.UNRECOGNIZED;
  }
}

export function asymmetricEncryptionKey_StatusToJSON(
  object: AsymmetricEncryptionKey_Status
): string {
  switch (object) {
    case AsymmetricEncryptionKey_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case AsymmetricEncryptionKey_Status.CREATING:
      return "CREATING";
    case AsymmetricEncryptionKey_Status.ACTIVE:
      return "ACTIVE";
    case AsymmetricEncryptionKey_Status.INACTIVE:
      return "INACTIVE";
    default:
      return "UNKNOWN";
  }
}

export interface AsymmetricEncryptionKey_LabelsEntry {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry";
  key: string;
  value: string;
}

const baseAsymmetricEncryptionKey: object = {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  encryptionAlgorithm: 0,
  deletionProtection: false,
};

export const AsymmetricEncryptionKey = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey" as const,

  encode(
    message: AsymmetricEncryptionKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
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
      AsymmetricEncryptionKey_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.encryptionAlgorithm !== 0) {
      writer.uint32(64).int32(message.encryptionAlgorithm);
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricEncryptionKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricEncryptionKey,
    } as AsymmetricEncryptionKey;
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
          const entry6 = AsymmetricEncryptionKey_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.encryptionAlgorithm = reader.int32() as any;
          break;
        case 9:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsymmetricEncryptionKey {
    const message = {
      ...baseAsymmetricEncryptionKey,
    } as AsymmetricEncryptionKey;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
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
    message.status =
      object.status !== undefined && object.status !== null
        ? asymmetricEncryptionKey_StatusFromJSON(object.status)
        : 0;
    message.encryptionAlgorithm =
      object.encryptionAlgorithm !== undefined &&
      object.encryptionAlgorithm !== null
        ? asymmetricEncryptionAlgorithmFromJSON(object.encryptionAlgorithm)
        : 0;
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: AsymmetricEncryptionKey): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
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
    message.status !== undefined &&
      (obj.status = asymmetricEncryptionKey_StatusToJSON(message.status));
    message.encryptionAlgorithm !== undefined &&
      (obj.encryptionAlgorithm = asymmetricEncryptionAlgorithmToJSON(
        message.encryptionAlgorithm
      ));
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricEncryptionKey>, I>>(
    object: I
  ): AsymmetricEncryptionKey {
    const message = {
      ...baseAsymmetricEncryptionKey,
    } as AsymmetricEncryptionKey;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
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
    message.status = object.status ?? 0;
    message.encryptionAlgorithm = object.encryptionAlgorithm ?? 0;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(AsymmetricEncryptionKey.$type, AsymmetricEncryptionKey);

const baseAsymmetricEncryptionKey_LabelsEntry: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry",
  key: "",
  value: "",
};

export const AsymmetricEncryptionKey_LabelsEntry = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry" as const,

  encode(
    message: AsymmetricEncryptionKey_LabelsEntry,
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
  ): AsymmetricEncryptionKey_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricEncryptionKey_LabelsEntry,
    } as AsymmetricEncryptionKey_LabelsEntry;
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

  fromJSON(object: any): AsymmetricEncryptionKey_LabelsEntry {
    const message = {
      ...baseAsymmetricEncryptionKey_LabelsEntry,
    } as AsymmetricEncryptionKey_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: AsymmetricEncryptionKey_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AsymmetricEncryptionKey_LabelsEntry>, I>
  >(object: I): AsymmetricEncryptionKey_LabelsEntry {
    const message = {
      ...baseAsymmetricEncryptionKey_LabelsEntry,
    } as AsymmetricEncryptionKey_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AsymmetricEncryptionKey_LabelsEntry.$type,
  AsymmetricEncryptionKey_LabelsEntry
);

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
