/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";

/** Supported asymmetric signature algorithms. */
export enum AsymmetricSignatureAlgorithm {
  ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED = 0,
  /** RSA_2048_SIGN_PSS_SHA_256 - RSA-2048 signature with PSS padding and SHA-256 */
  RSA_2048_SIGN_PSS_SHA_256 = 1,
  /** RSA_2048_SIGN_PSS_SHA_384 - RSA-2048 signature with PSS padding and SHA-384 */
  RSA_2048_SIGN_PSS_SHA_384 = 2,
  /** RSA_2048_SIGN_PSS_SHA_512 - RSA-2048 signature with PSS padding and SHA-512 */
  RSA_2048_SIGN_PSS_SHA_512 = 3,
  /** RSA_3072_SIGN_PSS_SHA_256 - RSA-3072 signature with PSS padding and SHA-256 */
  RSA_3072_SIGN_PSS_SHA_256 = 4,
  /** RSA_3072_SIGN_PSS_SHA_384 - RSA-3072 signature with PSS padding and SHA-384 */
  RSA_3072_SIGN_PSS_SHA_384 = 5,
  /** RSA_3072_SIGN_PSS_SHA_512 - RSA-3072 signature with PSS padding and SHA-512 */
  RSA_3072_SIGN_PSS_SHA_512 = 6,
  /** RSA_4096_SIGN_PSS_SHA_256 - RSA-4096 signature with PSS padding and SHA-256 */
  RSA_4096_SIGN_PSS_SHA_256 = 7,
  /** RSA_4096_SIGN_PSS_SHA_384 - RSA-4096 signature with PSS padding and SHA-384 */
  RSA_4096_SIGN_PSS_SHA_384 = 8,
  /** RSA_4096_SIGN_PSS_SHA_512 - RSA-4096 signature with PSS padding and SHA-512 */
  RSA_4096_SIGN_PSS_SHA_512 = 9,
  /** ECDSA_NIST_P256_SHA_256 - ECDSA signature with NIST P-256 curve and SHA-256 */
  ECDSA_NIST_P256_SHA_256 = 10,
  /** ECDSA_NIST_P384_SHA_384 - ECDSA signature with NIST P-384 curve and SHA-384 */
  ECDSA_NIST_P384_SHA_384 = 11,
  /** ECDSA_NIST_P521_SHA_512 - ECDSA signature with NIST P-521 curve and SHA-512 */
  ECDSA_NIST_P521_SHA_512 = 12,
  /** ECDSA_SECP256_K1_SHA_256 - ECDSA signature with SECP256_K1 curve and SHA-256 */
  ECDSA_SECP256_K1_SHA_256 = 13,
  UNRECOGNIZED = -1,
}

export function asymmetricSignatureAlgorithmFromJSON(
  object: any
): AsymmetricSignatureAlgorithm {
  switch (object) {
    case 0:
    case "ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED":
      return AsymmetricSignatureAlgorithm.ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED;
    case 1:
    case "RSA_2048_SIGN_PSS_SHA_256":
      return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_256;
    case 2:
    case "RSA_2048_SIGN_PSS_SHA_384":
      return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_384;
    case 3:
    case "RSA_2048_SIGN_PSS_SHA_512":
      return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_512;
    case 4:
    case "RSA_3072_SIGN_PSS_SHA_256":
      return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_256;
    case 5:
    case "RSA_3072_SIGN_PSS_SHA_384":
      return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_384;
    case 6:
    case "RSA_3072_SIGN_PSS_SHA_512":
      return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_512;
    case 7:
    case "RSA_4096_SIGN_PSS_SHA_256":
      return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_256;
    case 8:
    case "RSA_4096_SIGN_PSS_SHA_384":
      return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_384;
    case 9:
    case "RSA_4096_SIGN_PSS_SHA_512":
      return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_512;
    case 10:
    case "ECDSA_NIST_P256_SHA_256":
      return AsymmetricSignatureAlgorithm.ECDSA_NIST_P256_SHA_256;
    case 11:
    case "ECDSA_NIST_P384_SHA_384":
      return AsymmetricSignatureAlgorithm.ECDSA_NIST_P384_SHA_384;
    case 12:
    case "ECDSA_NIST_P521_SHA_512":
      return AsymmetricSignatureAlgorithm.ECDSA_NIST_P521_SHA_512;
    case 13:
    case "ECDSA_SECP256_K1_SHA_256":
      return AsymmetricSignatureAlgorithm.ECDSA_SECP256_K1_SHA_256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AsymmetricSignatureAlgorithm.UNRECOGNIZED;
  }
}

export function asymmetricSignatureAlgorithmToJSON(
  object: AsymmetricSignatureAlgorithm
): string {
  switch (object) {
    case AsymmetricSignatureAlgorithm.ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED:
      return "ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED";
    case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_256:
      return "RSA_2048_SIGN_PSS_SHA_256";
    case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_384:
      return "RSA_2048_SIGN_PSS_SHA_384";
    case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_512:
      return "RSA_2048_SIGN_PSS_SHA_512";
    case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_256:
      return "RSA_3072_SIGN_PSS_SHA_256";
    case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_384:
      return "RSA_3072_SIGN_PSS_SHA_384";
    case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_512:
      return "RSA_3072_SIGN_PSS_SHA_512";
    case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_256:
      return "RSA_4096_SIGN_PSS_SHA_256";
    case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_384:
      return "RSA_4096_SIGN_PSS_SHA_384";
    case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_512:
      return "RSA_4096_SIGN_PSS_SHA_512";
    case AsymmetricSignatureAlgorithm.ECDSA_NIST_P256_SHA_256:
      return "ECDSA_NIST_P256_SHA_256";
    case AsymmetricSignatureAlgorithm.ECDSA_NIST_P384_SHA_384:
      return "ECDSA_NIST_P384_SHA_384";
    case AsymmetricSignatureAlgorithm.ECDSA_NIST_P521_SHA_512:
      return "ECDSA_NIST_P521_SHA_512";
    case AsymmetricSignatureAlgorithm.ECDSA_SECP256_K1_SHA_256:
      return "ECDSA_SECP256_K1_SHA_256";
    default:
      return "UNKNOWN";
  }
}

/** An asymmetric KMS key that may contain several versions of the cryptographic material. */
export interface AsymmetricSignatureKey {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey";
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
  status: AsymmetricSignatureKey_Status;
  /** Signature Algorithm ID. */
  signatureAlgorithm: AsymmetricSignatureAlgorithm;
  /** Flag that inhibits deletion of the key */
  deletionProtection: boolean;
}

export enum AsymmetricSignatureKey_Status {
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

export function asymmetricSignatureKey_StatusFromJSON(
  object: any
): AsymmetricSignatureKey_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return AsymmetricSignatureKey_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return AsymmetricSignatureKey_Status.CREATING;
    case 2:
    case "ACTIVE":
      return AsymmetricSignatureKey_Status.ACTIVE;
    case 3:
    case "INACTIVE":
      return AsymmetricSignatureKey_Status.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AsymmetricSignatureKey_Status.UNRECOGNIZED;
  }
}

export function asymmetricSignatureKey_StatusToJSON(
  object: AsymmetricSignatureKey_Status
): string {
  switch (object) {
    case AsymmetricSignatureKey_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case AsymmetricSignatureKey_Status.CREATING:
      return "CREATING";
    case AsymmetricSignatureKey_Status.ACTIVE:
      return "ACTIVE";
    case AsymmetricSignatureKey_Status.INACTIVE:
      return "INACTIVE";
    default:
      return "UNKNOWN";
  }
}

export interface AsymmetricSignatureKey_LabelsEntry {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry";
  key: string;
  value: string;
}

const baseAsymmetricSignatureKey: object = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  signatureAlgorithm: 0,
  deletionProtection: false,
};

export const AsymmetricSignatureKey = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey" as const,

  encode(
    message: AsymmetricSignatureKey,
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
      AsymmetricSignatureKey_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.signatureAlgorithm !== 0) {
      writer.uint32(64).int32(message.signatureAlgorithm);
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricSignatureKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAsymmetricSignatureKey } as AsymmetricSignatureKey;
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
          const entry6 = AsymmetricSignatureKey_LabelsEntry.decode(
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
          message.signatureAlgorithm = reader.int32() as any;
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

  fromJSON(object: any): AsymmetricSignatureKey {
    const message = { ...baseAsymmetricSignatureKey } as AsymmetricSignatureKey;
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
        ? asymmetricSignatureKey_StatusFromJSON(object.status)
        : 0;
    message.signatureAlgorithm =
      object.signatureAlgorithm !== undefined &&
      object.signatureAlgorithm !== null
        ? asymmetricSignatureAlgorithmFromJSON(object.signatureAlgorithm)
        : 0;
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: AsymmetricSignatureKey): unknown {
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
      (obj.status = asymmetricSignatureKey_StatusToJSON(message.status));
    message.signatureAlgorithm !== undefined &&
      (obj.signatureAlgorithm = asymmetricSignatureAlgorithmToJSON(
        message.signatureAlgorithm
      ));
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricSignatureKey>, I>>(
    object: I
  ): AsymmetricSignatureKey {
    const message = { ...baseAsymmetricSignatureKey } as AsymmetricSignatureKey;
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
    message.signatureAlgorithm = object.signatureAlgorithm ?? 0;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignatureKey.$type, AsymmetricSignatureKey);

const baseAsymmetricSignatureKey_LabelsEntry: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry",
  key: "",
  value: "",
};

export const AsymmetricSignatureKey_LabelsEntry = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry" as const,

  encode(
    message: AsymmetricSignatureKey_LabelsEntry,
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
  ): AsymmetricSignatureKey_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricSignatureKey_LabelsEntry,
    } as AsymmetricSignatureKey_LabelsEntry;
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

  fromJSON(object: any): AsymmetricSignatureKey_LabelsEntry {
    const message = {
      ...baseAsymmetricSignatureKey_LabelsEntry,
    } as AsymmetricSignatureKey_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: AsymmetricSignatureKey_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AsymmetricSignatureKey_LabelsEntry>, I>
  >(object: I): AsymmetricSignatureKey_LabelsEntry {
    const message = {
      ...baseAsymmetricSignatureKey_LabelsEntry,
    } as AsymmetricSignatureKey_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AsymmetricSignatureKey_LabelsEntry.$type,
  AsymmetricSignatureKey_LabelsEntry
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
