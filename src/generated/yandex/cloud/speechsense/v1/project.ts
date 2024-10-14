/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.speechsense.v1";

export interface Project {
  $type: "yandex.cloud.speechsense.v1.Project";
  id: string;
  name: string;
  connectionId: string;
  description: string;
  createdBy: string;
  createdAt?: Date;
  modifiedBy: string;
  modifiedAt?: Date;
  filters: FieldFilter[];
}

/** simple filters to match talks based on their connection metadata */
export interface FieldFilter {
  $type: "yandex.cloud.speechsense.v1.FieldFilter";
  /** connection metadata field key */
  key: string;
  /** connection metadata field value */
  fieldValue: string;
}

const baseProject: object = {
  $type: "yandex.cloud.speechsense.v1.Project",
  id: "",
  name: "",
  connectionId: "",
  description: "",
  createdBy: "",
  modifiedBy: "",
};

export const Project = {
  $type: "yandex.cloud.speechsense.v1.Project" as const,

  encode(
    message: Project,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.createdBy !== "") {
      writer.uint32(42).string(message.createdBy);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.modifiedBy !== "") {
      writer.uint32(58).string(message.modifiedBy);
    }
    if (message.modifiedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.modifiedAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    for (const v of message.filters) {
      FieldFilter.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProject } as Project;
    message.filters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.createdBy = reader.string();
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.modifiedBy = reader.string();
          break;
        case 8:
          message.modifiedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.filters.push(FieldFilter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    const message = { ...baseProject } as Project;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.createdBy =
      object.createdBy !== undefined && object.createdBy !== null
        ? String(object.createdBy)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.modifiedBy =
      object.modifiedBy !== undefined && object.modifiedBy !== null
        ? String(object.modifiedBy)
        : "";
    message.modifiedAt =
      object.modifiedAt !== undefined && object.modifiedAt !== null
        ? fromJsonTimestamp(object.modifiedAt)
        : undefined;
    message.filters = (object.filters ?? []).map((e: any) =>
      FieldFilter.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
    message.modifiedAt !== undefined &&
      (obj.modifiedAt = message.modifiedAt.toISOString());
    if (message.filters) {
      obj.filters = message.filters.map((e) =>
        e ? FieldFilter.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = { ...baseProject } as Project;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.connectionId = object.connectionId ?? "";
    message.description = object.description ?? "";
    message.createdBy = object.createdBy ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.modifiedBy = object.modifiedBy ?? "";
    message.modifiedAt = object.modifiedAt ?? undefined;
    message.filters =
      object.filters?.map((e) => FieldFilter.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Project.$type, Project);

const baseFieldFilter: object = {
  $type: "yandex.cloud.speechsense.v1.FieldFilter",
  key: "",
  fieldValue: "",
};

export const FieldFilter = {
  $type: "yandex.cloud.speechsense.v1.FieldFilter" as const,

  encode(
    message: FieldFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.fieldValue !== "") {
      writer.uint32(18).string(message.fieldValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldFilter } as FieldFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.fieldValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldFilter {
    const message = { ...baseFieldFilter } as FieldFilter;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.fieldValue =
      object.fieldValue !== undefined && object.fieldValue !== null
        ? String(object.fieldValue)
        : "";
    return message;
  },

  toJSON(message: FieldFilter): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.fieldValue !== undefined && (obj.fieldValue = message.fieldValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FieldFilter>, I>>(
    object: I
  ): FieldFilter {
    const message = { ...baseFieldFilter } as FieldFilter;
    message.key = object.key ?? "";
    message.fieldValue = object.fieldValue ?? "";
    return message;
  },
};

messageTypeRegistry.set(FieldFilter.$type, FieldFilter);

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
