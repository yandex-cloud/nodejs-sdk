/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";

/** A certificate. */
export interface Certificate {
  $type: "yandex.cloud.organizationmanager.v1.saml.Certificate";
  /** ID of the certificate. */
  id: string;
  /** ID of the federation that the certificate belongs to. */
  federationId: string;
  /** Name of the certificate. */
  name: string;
  /** Description of the certificate. */
  description: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /** Certificate data in PEM format. */
  data: string;
}

const baseCertificate: object = {
  $type: "yandex.cloud.organizationmanager.v1.saml.Certificate",
  id: "",
  federationId: "",
  name: "",
  description: "",
  data: "",
};

export const Certificate = {
  $type: "yandex.cloud.organizationmanager.v1.saml.Certificate" as const,

  encode(
    message: Certificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.federationId !== "") {
      writer.uint32(18).string(message.federationId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(50).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertificate } as Certificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.federationId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Certificate {
    const message = { ...baseCertificate } as Certificate;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    return message;
  },

  toJSON(message: Certificate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Certificate>, I>>(
    object: I
  ): Certificate {
    const message = { ...baseCertificate } as Certificate;
    message.id = object.id ?? "";
    message.federationId = object.federationId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.data = object.data ?? "";
    return message;
  },
};

messageTypeRegistry.set(Certificate.$type, Certificate);

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
