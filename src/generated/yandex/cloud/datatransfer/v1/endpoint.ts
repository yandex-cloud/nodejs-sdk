/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MysqlSource,
  MysqlTarget,
} from "../../../../yandex/cloud/datatransfer/v1/endpoint/mysql";
import {
  PostgresSource,
  PostgresTarget,
} from "../../../../yandex/cloud/datatransfer/v1/endpoint/postgres";
import {
  YdbSource,
  YdbTarget,
} from "../../../../yandex/cloud/datatransfer/v1/endpoint/ydb";
import {
  KafkaSource,
  KafkaTarget,
} from "../../../../yandex/cloud/datatransfer/v1/endpoint/kafka";
import {
  MongoSource,
  MongoTarget,
} from "../../../../yandex/cloud/datatransfer/v1/endpoint/mongo";
import {
  ClickhouseSource,
  ClickhouseTarget,
} from "../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse";

export const protobufPackage = "yandex.cloud.datatransfer.v1";

export interface Endpoint {
  $type: "yandex.cloud.datatransfer.v1.Endpoint";
  id: string;
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  settings?: EndpointSettings;
}

export interface Endpoint_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry";
  key: string;
  value: string;
}

export interface EndpointSettings {
  $type: "yandex.cloud.datatransfer.v1.EndpointSettings";
  mysqlSource?: MysqlSource | undefined;
  postgresSource?: PostgresSource | undefined;
  ydbSource?: YdbSource | undefined;
  kafkaSource?: KafkaSource | undefined;
  mongoSource?: MongoSource | undefined;
  clickhouseSource?: ClickhouseSource | undefined;
  mysqlTarget?: MysqlTarget | undefined;
  postgresTarget?: PostgresTarget | undefined;
  clickhouseTarget?: ClickhouseTarget | undefined;
  ydbTarget?: YdbTarget | undefined;
  kafkaTarget?: KafkaTarget | undefined;
  mongoTarget?: MongoTarget | undefined;
}

const baseEndpoint: object = {
  $type: "yandex.cloud.datatransfer.v1.Endpoint",
  id: "",
  folderId: "",
  name: "",
  description: "",
};

export const Endpoint = {
  $type: "yandex.cloud.datatransfer.v1.Endpoint" as const,

  encode(
    message: Endpoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Endpoint_LabelsEntry.encode(
        {
          $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.settings !== undefined) {
      EndpointSettings.encode(
        message.settings,
        writer.uint32(418).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpoint } as Endpoint;
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
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = Endpoint_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 52:
          message.settings = EndpointSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
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
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? EndpointSettings.fromJSON(object.settings)
        : undefined;
    return message;
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? EndpointSettings.toJSON(message.settings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
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
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? EndpointSettings.fromPartial(object.settings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Endpoint.$type, Endpoint);

const baseEndpoint_LabelsEntry: object = {
  $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry",
  key: "",
  value: "",
};

export const Endpoint_LabelsEntry = {
  $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry" as const,

  encode(
    message: Endpoint_LabelsEntry,
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
  ): Endpoint_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpoint_LabelsEntry } as Endpoint_LabelsEntry;
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

  fromJSON(object: any): Endpoint_LabelsEntry {
    const message = { ...baseEndpoint_LabelsEntry } as Endpoint_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Endpoint_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Endpoint_LabelsEntry>, I>>(
    object: I
  ): Endpoint_LabelsEntry {
    const message = { ...baseEndpoint_LabelsEntry } as Endpoint_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Endpoint_LabelsEntry.$type, Endpoint_LabelsEntry);

const baseEndpointSettings: object = {
  $type: "yandex.cloud.datatransfer.v1.EndpointSettings",
};

export const EndpointSettings = {
  $type: "yandex.cloud.datatransfer.v1.EndpointSettings" as const,

  encode(
    message: EndpointSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mysqlSource !== undefined) {
      MysqlSource.encode(
        message.mysqlSource,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.postgresSource !== undefined) {
      PostgresSource.encode(
        message.postgresSource,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.ydbSource !== undefined) {
      YdbSource.encode(message.ydbSource, writer.uint32(26).fork()).ldelim();
    }
    if (message.kafkaSource !== undefined) {
      KafkaSource.encode(
        message.kafkaSource,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.mongoSource !== undefined) {
      MongoSource.encode(
        message.mongoSource,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.clickhouseSource !== undefined) {
      ClickhouseSource.encode(
        message.clickhouseSource,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.mysqlTarget !== undefined) {
      MysqlTarget.encode(
        message.mysqlTarget,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.postgresTarget !== undefined) {
      PostgresTarget.encode(
        message.postgresTarget,
        writer.uint32(818).fork()
      ).ldelim();
    }
    if (message.clickhouseTarget !== undefined) {
      ClickhouseTarget.encode(
        message.clickhouseTarget,
        writer.uint32(834).fork()
      ).ldelim();
    }
    if (message.ydbTarget !== undefined) {
      YdbTarget.encode(message.ydbTarget, writer.uint32(842).fork()).ldelim();
    }
    if (message.kafkaTarget !== undefined) {
      KafkaTarget.encode(
        message.kafkaTarget,
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.mongoTarget !== undefined) {
      MongoTarget.encode(
        message.mongoTarget,
        writer.uint32(890).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointSettings } as EndpointSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mysqlSource = MysqlSource.decode(reader, reader.uint32());
          break;
        case 2:
          message.postgresSource = PostgresSource.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.ydbSource = YdbSource.decode(reader, reader.uint32());
          break;
        case 8:
          message.kafkaSource = KafkaSource.decode(reader, reader.uint32());
          break;
        case 9:
          message.mongoSource = MongoSource.decode(reader, reader.uint32());
          break;
        case 16:
          message.clickhouseSource = ClickhouseSource.decode(
            reader,
            reader.uint32()
          );
          break;
        case 101:
          message.mysqlTarget = MysqlTarget.decode(reader, reader.uint32());
          break;
        case 102:
          message.postgresTarget = PostgresTarget.decode(
            reader,
            reader.uint32()
          );
          break;
        case 104:
          message.clickhouseTarget = ClickhouseTarget.decode(
            reader,
            reader.uint32()
          );
          break;
        case 105:
          message.ydbTarget = YdbTarget.decode(reader, reader.uint32());
          break;
        case 110:
          message.kafkaTarget = KafkaTarget.decode(reader, reader.uint32());
          break;
        case 111:
          message.mongoTarget = MongoTarget.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EndpointSettings {
    const message = { ...baseEndpointSettings } as EndpointSettings;
    message.mysqlSource =
      object.mysqlSource !== undefined && object.mysqlSource !== null
        ? MysqlSource.fromJSON(object.mysqlSource)
        : undefined;
    message.postgresSource =
      object.postgresSource !== undefined && object.postgresSource !== null
        ? PostgresSource.fromJSON(object.postgresSource)
        : undefined;
    message.ydbSource =
      object.ydbSource !== undefined && object.ydbSource !== null
        ? YdbSource.fromJSON(object.ydbSource)
        : undefined;
    message.kafkaSource =
      object.kafkaSource !== undefined && object.kafkaSource !== null
        ? KafkaSource.fromJSON(object.kafkaSource)
        : undefined;
    message.mongoSource =
      object.mongoSource !== undefined && object.mongoSource !== null
        ? MongoSource.fromJSON(object.mongoSource)
        : undefined;
    message.clickhouseSource =
      object.clickhouseSource !== undefined && object.clickhouseSource !== null
        ? ClickhouseSource.fromJSON(object.clickhouseSource)
        : undefined;
    message.mysqlTarget =
      object.mysqlTarget !== undefined && object.mysqlTarget !== null
        ? MysqlTarget.fromJSON(object.mysqlTarget)
        : undefined;
    message.postgresTarget =
      object.postgresTarget !== undefined && object.postgresTarget !== null
        ? PostgresTarget.fromJSON(object.postgresTarget)
        : undefined;
    message.clickhouseTarget =
      object.clickhouseTarget !== undefined && object.clickhouseTarget !== null
        ? ClickhouseTarget.fromJSON(object.clickhouseTarget)
        : undefined;
    message.ydbTarget =
      object.ydbTarget !== undefined && object.ydbTarget !== null
        ? YdbTarget.fromJSON(object.ydbTarget)
        : undefined;
    message.kafkaTarget =
      object.kafkaTarget !== undefined && object.kafkaTarget !== null
        ? KafkaTarget.fromJSON(object.kafkaTarget)
        : undefined;
    message.mongoTarget =
      object.mongoTarget !== undefined && object.mongoTarget !== null
        ? MongoTarget.fromJSON(object.mongoTarget)
        : undefined;
    return message;
  },

  toJSON(message: EndpointSettings): unknown {
    const obj: any = {};
    message.mysqlSource !== undefined &&
      (obj.mysqlSource = message.mysqlSource
        ? MysqlSource.toJSON(message.mysqlSource)
        : undefined);
    message.postgresSource !== undefined &&
      (obj.postgresSource = message.postgresSource
        ? PostgresSource.toJSON(message.postgresSource)
        : undefined);
    message.ydbSource !== undefined &&
      (obj.ydbSource = message.ydbSource
        ? YdbSource.toJSON(message.ydbSource)
        : undefined);
    message.kafkaSource !== undefined &&
      (obj.kafkaSource = message.kafkaSource
        ? KafkaSource.toJSON(message.kafkaSource)
        : undefined);
    message.mongoSource !== undefined &&
      (obj.mongoSource = message.mongoSource
        ? MongoSource.toJSON(message.mongoSource)
        : undefined);
    message.clickhouseSource !== undefined &&
      (obj.clickhouseSource = message.clickhouseSource
        ? ClickhouseSource.toJSON(message.clickhouseSource)
        : undefined);
    message.mysqlTarget !== undefined &&
      (obj.mysqlTarget = message.mysqlTarget
        ? MysqlTarget.toJSON(message.mysqlTarget)
        : undefined);
    message.postgresTarget !== undefined &&
      (obj.postgresTarget = message.postgresTarget
        ? PostgresTarget.toJSON(message.postgresTarget)
        : undefined);
    message.clickhouseTarget !== undefined &&
      (obj.clickhouseTarget = message.clickhouseTarget
        ? ClickhouseTarget.toJSON(message.clickhouseTarget)
        : undefined);
    message.ydbTarget !== undefined &&
      (obj.ydbTarget = message.ydbTarget
        ? YdbTarget.toJSON(message.ydbTarget)
        : undefined);
    message.kafkaTarget !== undefined &&
      (obj.kafkaTarget = message.kafkaTarget
        ? KafkaTarget.toJSON(message.kafkaTarget)
        : undefined);
    message.mongoTarget !== undefined &&
      (obj.mongoTarget = message.mongoTarget
        ? MongoTarget.toJSON(message.mongoTarget)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EndpointSettings>, I>>(
    object: I
  ): EndpointSettings {
    const message = { ...baseEndpointSettings } as EndpointSettings;
    message.mysqlSource =
      object.mysqlSource !== undefined && object.mysqlSource !== null
        ? MysqlSource.fromPartial(object.mysqlSource)
        : undefined;
    message.postgresSource =
      object.postgresSource !== undefined && object.postgresSource !== null
        ? PostgresSource.fromPartial(object.postgresSource)
        : undefined;
    message.ydbSource =
      object.ydbSource !== undefined && object.ydbSource !== null
        ? YdbSource.fromPartial(object.ydbSource)
        : undefined;
    message.kafkaSource =
      object.kafkaSource !== undefined && object.kafkaSource !== null
        ? KafkaSource.fromPartial(object.kafkaSource)
        : undefined;
    message.mongoSource =
      object.mongoSource !== undefined && object.mongoSource !== null
        ? MongoSource.fromPartial(object.mongoSource)
        : undefined;
    message.clickhouseSource =
      object.clickhouseSource !== undefined && object.clickhouseSource !== null
        ? ClickhouseSource.fromPartial(object.clickhouseSource)
        : undefined;
    message.mysqlTarget =
      object.mysqlTarget !== undefined && object.mysqlTarget !== null
        ? MysqlTarget.fromPartial(object.mysqlTarget)
        : undefined;
    message.postgresTarget =
      object.postgresTarget !== undefined && object.postgresTarget !== null
        ? PostgresTarget.fromPartial(object.postgresTarget)
        : undefined;
    message.clickhouseTarget =
      object.clickhouseTarget !== undefined && object.clickhouseTarget !== null
        ? ClickhouseTarget.fromPartial(object.clickhouseTarget)
        : undefined;
    message.ydbTarget =
      object.ydbTarget !== undefined && object.ydbTarget !== null
        ? YdbTarget.fromPartial(object.ydbTarget)
        : undefined;
    message.kafkaTarget =
      object.kafkaTarget !== undefined && object.kafkaTarget !== null
        ? KafkaTarget.fromPartial(object.kafkaTarget)
        : undefined;
    message.mongoTarget =
      object.mongoTarget !== undefined && object.mongoTarget !== null
        ? MongoTarget.fromPartial(object.mongoTarget)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(EndpointSettings.$type, EndpointSettings);

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
