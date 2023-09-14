/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int64Value } from "../../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1.config";

export interface OpenSearchConfig2 {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2";
  /** the maximum number of allowed boolean clauses in a query */
  maxClauseCount?: number;
  /** the percentage or absolute value (10%, 512mb) of heap space that is allocated to fielddata */
  fielddataCacheSize: string;
  reindexRemoteWhitelist: string;
}

export interface OpenSearchConfigSet2 {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2";
  effectiveConfig?: OpenSearchConfig2;
  userConfig?: OpenSearchConfig2;
  defaultConfig?: OpenSearchConfig2;
}

const baseOpenSearchConfig2: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2",
  fielddataCacheSize: "",
  reindexRemoteWhitelist: "",
};

export const OpenSearchConfig2 = {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2" as const,

  encode(
    message: OpenSearchConfig2,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxClauseCount !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxClauseCount! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.fielddataCacheSize !== "") {
      writer.uint32(34).string(message.fielddataCacheSize);
    }
    if (message.reindexRemoteWhitelist !== "") {
      writer.uint32(50).string(message.reindexRemoteWhitelist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConfig2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenSearchConfig2 } as OpenSearchConfig2;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.maxClauseCount = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.fielddataCacheSize = reader.string();
          break;
        case 6:
          message.reindexRemoteWhitelist = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenSearchConfig2 {
    const message = { ...baseOpenSearchConfig2 } as OpenSearchConfig2;
    message.maxClauseCount =
      object.maxClauseCount !== undefined && object.maxClauseCount !== null
        ? Number(object.maxClauseCount)
        : undefined;
    message.fielddataCacheSize =
      object.fielddataCacheSize !== undefined &&
      object.fielddataCacheSize !== null
        ? String(object.fielddataCacheSize)
        : "";
    message.reindexRemoteWhitelist =
      object.reindexRemoteWhitelist !== undefined &&
      object.reindexRemoteWhitelist !== null
        ? String(object.reindexRemoteWhitelist)
        : "";
    return message;
  },

  toJSON(message: OpenSearchConfig2): unknown {
    const obj: any = {};
    message.maxClauseCount !== undefined &&
      (obj.maxClauseCount = message.maxClauseCount);
    message.fielddataCacheSize !== undefined &&
      (obj.fielddataCacheSize = message.fielddataCacheSize);
    message.reindexRemoteWhitelist !== undefined &&
      (obj.reindexRemoteWhitelist = message.reindexRemoteWhitelist);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSearchConfig2>, I>>(
    object: I
  ): OpenSearchConfig2 {
    const message = { ...baseOpenSearchConfig2 } as OpenSearchConfig2;
    message.maxClauseCount = object.maxClauseCount ?? undefined;
    message.fielddataCacheSize = object.fielddataCacheSize ?? "";
    message.reindexRemoteWhitelist = object.reindexRemoteWhitelist ?? "";
    return message;
  },
};

messageTypeRegistry.set(OpenSearchConfig2.$type, OpenSearchConfig2);

const baseOpenSearchConfigSet2: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2",
};

export const OpenSearchConfigSet2 = {
  $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2" as const,

  encode(
    message: OpenSearchConfigSet2,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      OpenSearchConfig2.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      OpenSearchConfig2.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      OpenSearchConfig2.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSearchConfigSet2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenSearchConfigSet2 } as OpenSearchConfigSet2;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = OpenSearchConfig2.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = OpenSearchConfig2.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = OpenSearchConfig2.decode(
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

  fromJSON(object: any): OpenSearchConfigSet2 {
    const message = { ...baseOpenSearchConfigSet2 } as OpenSearchConfigSet2;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? OpenSearchConfig2.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? OpenSearchConfig2.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? OpenSearchConfig2.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: OpenSearchConfigSet2): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? OpenSearchConfig2.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? OpenSearchConfig2.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? OpenSearchConfig2.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSearchConfigSet2>, I>>(
    object: I
  ): OpenSearchConfigSet2 {
    const message = { ...baseOpenSearchConfigSet2 } as OpenSearchConfigSet2;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? OpenSearchConfig2.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? OpenSearchConfig2.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? OpenSearchConfig2.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(OpenSearchConfigSet2.$type, OpenSearchConfigSet2);

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
