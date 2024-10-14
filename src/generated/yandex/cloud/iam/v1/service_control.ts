/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Resource } from "../../../../yandex/cloud/iam/v1/resource";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.iam.v1";

/** A Service. */
export interface Service {
  $type: "yandex.cloud.iam.v1.Service";
  /** ID of the service. */
  serviceId: string;
  /** Resource that the service belongs to. */
  resource?: Resource;
  /** Time of the last status update of the service. */
  updatedAt?: Date;
  /** Current status of the service. */
  status: Service_Status;
}

export enum Service_Status {
  STATUS_UNSPECIFIED = 0,
  /** ENABLED - The service is enabled. */
  ENABLED = 1,
  /** PAUSED - The service is paused. */
  PAUSED = 2,
  /** DISABLED - The service is disabled. */
  DISABLED = 3,
  /** ENABLING - The service is being enabled. */
  ENABLING = 4,
  /** RESUMING - The service is being resumed. */
  RESUMING = 5,
  /** PAUSING - The service is being paused. */
  PAUSING = 6,
  /** DISABLING - The service is being disabled. */
  DISABLING = 7,
  /** ERROR - The service is in error state. */
  ERROR = 8,
  /** DEFAULT - The service could be auto enabled. */
  DEFAULT = 9,
  UNRECOGNIZED = -1,
}

export function service_StatusFromJSON(object: any): Service_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Service_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ENABLED":
      return Service_Status.ENABLED;
    case 2:
    case "PAUSED":
      return Service_Status.PAUSED;
    case 3:
    case "DISABLED":
      return Service_Status.DISABLED;
    case 4:
    case "ENABLING":
      return Service_Status.ENABLING;
    case 5:
    case "RESUMING":
      return Service_Status.RESUMING;
    case 6:
    case "PAUSING":
      return Service_Status.PAUSING;
    case 7:
    case "DISABLING":
      return Service_Status.DISABLING;
    case 8:
    case "ERROR":
      return Service_Status.ERROR;
    case 9:
    case "DEFAULT":
      return Service_Status.DEFAULT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Service_Status.UNRECOGNIZED;
  }
}

export function service_StatusToJSON(object: Service_Status): string {
  switch (object) {
    case Service_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Service_Status.ENABLED:
      return "ENABLED";
    case Service_Status.PAUSED:
      return "PAUSED";
    case Service_Status.DISABLED:
      return "DISABLED";
    case Service_Status.ENABLING:
      return "ENABLING";
    case Service_Status.RESUMING:
      return "RESUMING";
    case Service_Status.PAUSING:
      return "PAUSING";
    case Service_Status.DISABLING:
      return "DISABLING";
    case Service_Status.ERROR:
      return "ERROR";
    case Service_Status.DEFAULT:
      return "DEFAULT";
    default:
      return "UNKNOWN";
  }
}

export interface ServiceAgent {
  $type: "yandex.cloud.iam.v1.ServiceAgent";
  /** ID of the agent service account. */
  serviceAccountId: string;
  /** ID of the service. */
  serviceId: string;
  /** ID of the microservice. */
  microserviceId: string;
}

const baseService: object = {
  $type: "yandex.cloud.iam.v1.Service",
  serviceId: "",
  status: 0,
};

export const Service = {
  $type: "yandex.cloud.iam.v1.Service" as const,

  encode(
    message: Service,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseService } as Service;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        case 3:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Service {
    const message = { ...baseService } as Service;
    message.serviceId =
      object.serviceId !== undefined && object.serviceId !== null
        ? String(object.serviceId)
        : "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? service_StatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.status !== undefined &&
      (obj.status = service_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = { ...baseService } as Service;
    message.serviceId = object.serviceId ?? "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Service.$type, Service);

const baseServiceAgent: object = {
  $type: "yandex.cloud.iam.v1.ServiceAgent",
  serviceAccountId: "",
  serviceId: "",
  microserviceId: "",
};

export const ServiceAgent = {
  $type: "yandex.cloud.iam.v1.ServiceAgent" as const,

  encode(
    message: ServiceAgent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.serviceId !== "") {
      writer.uint32(18).string(message.serviceId);
    }
    if (message.microserviceId !== "") {
      writer.uint32(26).string(message.microserviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServiceAgent } as ServiceAgent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceAccountId = reader.string();
          break;
        case 2:
          message.serviceId = reader.string();
          break;
        case 3:
          message.microserviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceAgent {
    const message = { ...baseServiceAgent } as ServiceAgent;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.serviceId =
      object.serviceId !== undefined && object.serviceId !== null
        ? String(object.serviceId)
        : "";
    message.microserviceId =
      object.microserviceId !== undefined && object.microserviceId !== null
        ? String(object.microserviceId)
        : "";
    return message;
  },

  toJSON(message: ServiceAgent): unknown {
    const obj: any = {};
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.microserviceId !== undefined &&
      (obj.microserviceId = message.microserviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServiceAgent>, I>>(
    object: I
  ): ServiceAgent {
    const message = { ...baseServiceAgent } as ServiceAgent;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.serviceId = object.serviceId ?? "";
    message.microserviceId = object.microserviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ServiceAgent.$type, ServiceAgent);

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
