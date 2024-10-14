/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ChunkingStrategy } from "../../../../../../yandex/cloud/ai/assistants/v1/searchindex/common";
import { Timestamp } from "../../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.ai.assistants.v1.searchindex";

export interface SearchIndexFile {
  $type: "yandex.cloud.ai.assistants.v1.searchindex.SearchIndexFile";
  id: string;
  searchIndexId: string;
  createdBy: string;
  createdAt?: Date;
  chunkingStrategy?: ChunkingStrategy;
}

const baseSearchIndexFile: object = {
  $type: "yandex.cloud.ai.assistants.v1.searchindex.SearchIndexFile",
  id: "",
  searchIndexId: "",
  createdBy: "",
};

export const SearchIndexFile = {
  $type: "yandex.cloud.ai.assistants.v1.searchindex.SearchIndexFile" as const,

  encode(
    message: SearchIndexFile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.searchIndexId !== "") {
      writer.uint32(18).string(message.searchIndexId);
    }
    if (message.createdBy !== "") {
      writer.uint32(26).string(message.createdBy);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.chunkingStrategy !== undefined) {
      ChunkingStrategy.encode(
        message.chunkingStrategy,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchIndexFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchIndexFile } as SearchIndexFile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.searchIndexId = reader.string();
          break;
        case 3:
          message.createdBy = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.chunkingStrategy = ChunkingStrategy.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchIndexFile {
    const message = { ...baseSearchIndexFile } as SearchIndexFile;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.searchIndexId =
      object.searchIndexId !== undefined && object.searchIndexId !== null
        ? String(object.searchIndexId)
        : "";
    message.createdBy =
      object.createdBy !== undefined && object.createdBy !== null
        ? String(object.createdBy)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.chunkingStrategy =
      object.chunkingStrategy !== undefined && object.chunkingStrategy !== null
        ? ChunkingStrategy.fromJSON(object.chunkingStrategy)
        : undefined;
    return message;
  },

  toJSON(message: SearchIndexFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.searchIndexId !== undefined &&
      (obj.searchIndexId = message.searchIndexId);
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.chunkingStrategy !== undefined &&
      (obj.chunkingStrategy = message.chunkingStrategy
        ? ChunkingStrategy.toJSON(message.chunkingStrategy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SearchIndexFile>, I>>(
    object: I
  ): SearchIndexFile {
    const message = { ...baseSearchIndexFile } as SearchIndexFile;
    message.id = object.id ?? "";
    message.searchIndexId = object.searchIndexId ?? "";
    message.createdBy = object.createdBy ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.chunkingStrategy =
      object.chunkingStrategy !== undefined && object.chunkingStrategy !== null
        ? ChunkingStrategy.fromPartial(object.chunkingStrategy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SearchIndexFile.$type, SearchIndexFile);

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
