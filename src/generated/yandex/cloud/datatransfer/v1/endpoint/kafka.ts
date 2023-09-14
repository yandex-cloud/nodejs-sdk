/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  TLSMode,
  Secret,
  DataTransformationOptions,
  NoAuth,
} from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";
import { Parser } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/parsers";
import { Serializer } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/serializers";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum KafkaMechanism {
  KAFKA_MECHANISM_UNSPECIFIED = 0,
  KAFKA_MECHANISM_SHA256 = 1,
  KAFKA_MECHANISM_SHA512 = 2,
  UNRECOGNIZED = -1,
}

export function kafkaMechanismFromJSON(object: any): KafkaMechanism {
  switch (object) {
    case 0:
    case "KAFKA_MECHANISM_UNSPECIFIED":
      return KafkaMechanism.KAFKA_MECHANISM_UNSPECIFIED;
    case 1:
    case "KAFKA_MECHANISM_SHA256":
      return KafkaMechanism.KAFKA_MECHANISM_SHA256;
    case 2:
    case "KAFKA_MECHANISM_SHA512":
      return KafkaMechanism.KAFKA_MECHANISM_SHA512;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KafkaMechanism.UNRECOGNIZED;
  }
}

export function kafkaMechanismToJSON(object: KafkaMechanism): string {
  switch (object) {
    case KafkaMechanism.KAFKA_MECHANISM_UNSPECIFIED:
      return "KAFKA_MECHANISM_UNSPECIFIED";
    case KafkaMechanism.KAFKA_MECHANISM_SHA256:
      return "KAFKA_MECHANISM_SHA256";
    case KafkaMechanism.KAFKA_MECHANISM_SHA512:
      return "KAFKA_MECHANISM_SHA512";
    default:
      return "UNKNOWN";
  }
}

export interface KafkaConnectionOptions {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions";
  /** Managed Service for Kafka cluster ID */
  clusterId: string | undefined;
  /** Connection options for on-premise Kafka */
  onPremise?: OnPremiseKafka | undefined;
}

export interface OnPremiseKafka {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka";
  /** Kafka broker URLs */
  brokerUrls: string[];
  /** TLS settings for broker connection. Disabled by default. */
  tlsMode?: TLSMode;
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
}

export interface KafkaAuth {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth";
  /** Authentication with SASL */
  sasl?: KafkaSaslSecurity | undefined;
  /** No authentication */
  noAuth?: NoAuth | undefined;
}

export interface KafkaSaslSecurity {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity";
  /** User name */
  user: string;
  /** Password for user */
  password?: Secret;
  /** SASL mechanism for authentication */
  mechanism: KafkaMechanism;
}

export interface KafkaSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource";
  /** Connection settings */
  connection?: KafkaConnectionOptions;
  /** Authentication settings */
  auth?: KafkaAuth;
  /** Security groups */
  securityGroups: string[];
  /** Full source topic name */
  topicName: string;
  /** Data transformation rules */
  transformer?: DataTransformationOptions;
  /** Data parsing rules */
  parser?: Parser;
}

export interface KafkaTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget";
  /** Connection settings */
  connection?: KafkaConnectionOptions;
  /** Authentication settings */
  auth?: KafkaAuth;
  /** Security groups */
  securityGroups: string[];
  /** Target topic settings */
  topicSettings?: KafkaTargetTopicSettings;
  /** Data serialization format settings */
  serializer?: Serializer;
}

export interface KafkaTargetTopicSettings {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings";
  /** Full topic name */
  topic?: KafkaTargetTopic | undefined;
  /**
   * Topic prefix
   *
   * Analogue of the Debezium setting database.server.name.
   * Messages will be sent to topic with name <topic_prefix>.<schema>.<table_name>.
   */
  topicPrefix: string | undefined;
}

export interface KafkaTargetTopic {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic";
  /** Topic name */
  topicName: string;
  /**
   * Save transactions order
   * Not to split events queue into separate per-table queues.
   */
  saveTxOrder: boolean;
}

const baseKafkaConnectionOptions: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions",
};

export const KafkaConnectionOptions = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions" as const,

  encode(
    message: KafkaConnectionOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== undefined) {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremiseKafka.encode(
        message.onPremise,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): KafkaConnectionOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKafkaConnectionOptions } as KafkaConnectionOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.onPremise = OnPremiseKafka.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaConnectionOptions {
    const message = { ...baseKafkaConnectionOptions } as KafkaConnectionOptions;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremiseKafka.fromJSON(object.onPremise)
        : undefined;
    return message;
  },

  toJSON(message: KafkaConnectionOptions): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.onPremise !== undefined &&
      (obj.onPremise = message.onPremise
        ? OnPremiseKafka.toJSON(message.onPremise)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KafkaConnectionOptions>, I>>(
    object: I
  ): KafkaConnectionOptions {
    const message = { ...baseKafkaConnectionOptions } as KafkaConnectionOptions;
    message.clusterId = object.clusterId ?? undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremiseKafka.fromPartial(object.onPremise)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(KafkaConnectionOptions.$type, KafkaConnectionOptions);

const baseOnPremiseKafka: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka",
  brokerUrls: "",
  subnetId: "",
};

export const OnPremiseKafka = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka" as const,

  encode(
    message: OnPremiseKafka,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.brokerUrls) {
      writer.uint32(10).string(v!);
    }
    if (message.tlsMode !== undefined) {
      TLSMode.encode(message.tlsMode, writer.uint32(42).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremiseKafka {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnPremiseKafka } as OnPremiseKafka;
    message.brokerUrls = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerUrls.push(reader.string());
          break;
        case 5:
          message.tlsMode = TLSMode.decode(reader, reader.uint32());
          break;
        case 4:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OnPremiseKafka {
    const message = { ...baseOnPremiseKafka } as OnPremiseKafka;
    message.brokerUrls = (object.brokerUrls ?? []).map((e: any) => String(e));
    message.tlsMode =
      object.tlsMode !== undefined && object.tlsMode !== null
        ? TLSMode.fromJSON(object.tlsMode)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: OnPremiseKafka): unknown {
    const obj: any = {};
    if (message.brokerUrls) {
      obj.brokerUrls = message.brokerUrls.map((e) => e);
    } else {
      obj.brokerUrls = [];
    }
    message.tlsMode !== undefined &&
      (obj.tlsMode = message.tlsMode
        ? TLSMode.toJSON(message.tlsMode)
        : undefined);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OnPremiseKafka>, I>>(
    object: I
  ): OnPremiseKafka {
    const message = { ...baseOnPremiseKafka } as OnPremiseKafka;
    message.brokerUrls = object.brokerUrls?.map((e) => e) || [];
    message.tlsMode =
      object.tlsMode !== undefined && object.tlsMode !== null
        ? TLSMode.fromPartial(object.tlsMode)
        : undefined;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OnPremiseKafka.$type, OnPremiseKafka);

const baseKafkaAuth: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth",
};

export const KafkaAuth = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth" as const,

  encode(
    message: KafkaAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sasl !== undefined) {
      KafkaSaslSecurity.encode(message.sasl, writer.uint32(10).fork()).ldelim();
    }
    if (message.noAuth !== undefined) {
      NoAuth.encode(message.noAuth, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKafkaAuth } as KafkaAuth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sasl = KafkaSaslSecurity.decode(reader, reader.uint32());
          break;
        case 2:
          message.noAuth = NoAuth.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaAuth {
    const message = { ...baseKafkaAuth } as KafkaAuth;
    message.sasl =
      object.sasl !== undefined && object.sasl !== null
        ? KafkaSaslSecurity.fromJSON(object.sasl)
        : undefined;
    message.noAuth =
      object.noAuth !== undefined && object.noAuth !== null
        ? NoAuth.fromJSON(object.noAuth)
        : undefined;
    return message;
  },

  toJSON(message: KafkaAuth): unknown {
    const obj: any = {};
    message.sasl !== undefined &&
      (obj.sasl = message.sasl
        ? KafkaSaslSecurity.toJSON(message.sasl)
        : undefined);
    message.noAuth !== undefined &&
      (obj.noAuth = message.noAuth ? NoAuth.toJSON(message.noAuth) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KafkaAuth>, I>>(
    object: I
  ): KafkaAuth {
    const message = { ...baseKafkaAuth } as KafkaAuth;
    message.sasl =
      object.sasl !== undefined && object.sasl !== null
        ? KafkaSaslSecurity.fromPartial(object.sasl)
        : undefined;
    message.noAuth =
      object.noAuth !== undefined && object.noAuth !== null
        ? NoAuth.fromPartial(object.noAuth)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(KafkaAuth.$type, KafkaAuth);

const baseKafkaSaslSecurity: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity",
  user: "",
  mechanism: 0,
};

export const KafkaSaslSecurity = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity" as const,

  encode(
    message: KafkaSaslSecurity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    if (message.mechanism !== 0) {
      writer.uint32(24).int32(message.mechanism);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaSaslSecurity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKafkaSaslSecurity } as KafkaSaslSecurity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 4:
          message.password = Secret.decode(reader, reader.uint32());
          break;
        case 3:
          message.mechanism = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaSaslSecurity {
    const message = { ...baseKafkaSaslSecurity } as KafkaSaslSecurity;
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromJSON(object.password)
        : undefined;
    message.mechanism =
      object.mechanism !== undefined && object.mechanism !== null
        ? kafkaMechanismFromJSON(object.mechanism)
        : 0;
    return message;
  },

  toJSON(message: KafkaSaslSecurity): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined &&
      (obj.password = message.password
        ? Secret.toJSON(message.password)
        : undefined);
    message.mechanism !== undefined &&
      (obj.mechanism = kafkaMechanismToJSON(message.mechanism));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KafkaSaslSecurity>, I>>(
    object: I
  ): KafkaSaslSecurity {
    const message = { ...baseKafkaSaslSecurity } as KafkaSaslSecurity;
    message.user = object.user ?? "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromPartial(object.password)
        : undefined;
    message.mechanism = object.mechanism ?? 0;
    return message;
  },
};

messageTypeRegistry.set(KafkaSaslSecurity.$type, KafkaSaslSecurity);

const baseKafkaSource: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource",
  securityGroups: "",
  topicName: "",
};

export const KafkaSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource" as const,

  encode(
    message: KafkaSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      KafkaConnectionOptions.encode(
        message.connection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.auth !== undefined) {
      KafkaAuth.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(26).string(v!);
    }
    if (message.topicName !== "") {
      writer.uint32(34).string(message.topicName);
    }
    if (message.transformer !== undefined) {
      DataTransformationOptions.encode(
        message.transformer,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.parser !== undefined) {
      Parser.encode(message.parser, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKafkaSource } as KafkaSource;
    message.securityGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = KafkaConnectionOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.auth = KafkaAuth.decode(reader, reader.uint32());
          break;
        case 3:
          message.securityGroups.push(reader.string());
          break;
        case 4:
          message.topicName = reader.string();
          break;
        case 5:
          message.transformer = DataTransformationOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.parser = Parser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaSource {
    const message = { ...baseKafkaSource } as KafkaSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? KafkaConnectionOptions.fromJSON(object.connection)
        : undefined;
    message.auth =
      object.auth !== undefined && object.auth !== null
        ? KafkaAuth.fromJSON(object.auth)
        : undefined;
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.topicName =
      object.topicName !== undefined && object.topicName !== null
        ? String(object.topicName)
        : "";
    message.transformer =
      object.transformer !== undefined && object.transformer !== null
        ? DataTransformationOptions.fromJSON(object.transformer)
        : undefined;
    message.parser =
      object.parser !== undefined && object.parser !== null
        ? Parser.fromJSON(object.parser)
        : undefined;
    return message;
  },

  toJSON(message: KafkaSource): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? KafkaConnectionOptions.toJSON(message.connection)
        : undefined);
    message.auth !== undefined &&
      (obj.auth = message.auth ? KafkaAuth.toJSON(message.auth) : undefined);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.topicName !== undefined && (obj.topicName = message.topicName);
    message.transformer !== undefined &&
      (obj.transformer = message.transformer
        ? DataTransformationOptions.toJSON(message.transformer)
        : undefined);
    message.parser !== undefined &&
      (obj.parser = message.parser ? Parser.toJSON(message.parser) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KafkaSource>, I>>(
    object: I
  ): KafkaSource {
    const message = { ...baseKafkaSource } as KafkaSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? KafkaConnectionOptions.fromPartial(object.connection)
        : undefined;
    message.auth =
      object.auth !== undefined && object.auth !== null
        ? KafkaAuth.fromPartial(object.auth)
        : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.topicName = object.topicName ?? "";
    message.transformer =
      object.transformer !== undefined && object.transformer !== null
        ? DataTransformationOptions.fromPartial(object.transformer)
        : undefined;
    message.parser =
      object.parser !== undefined && object.parser !== null
        ? Parser.fromPartial(object.parser)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(KafkaSource.$type, KafkaSource);

const baseKafkaTarget: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget",
  securityGroups: "",
};

export const KafkaTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget" as const,

  encode(
    message: KafkaTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      KafkaConnectionOptions.encode(
        message.connection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.auth !== undefined) {
      KafkaAuth.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(26).string(v!);
    }
    if (message.topicSettings !== undefined) {
      KafkaTargetTopicSettings.encode(
        message.topicSettings,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.serializer !== undefined) {
      Serializer.encode(message.serializer, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKafkaTarget } as KafkaTarget;
    message.securityGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = KafkaConnectionOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.auth = KafkaAuth.decode(reader, reader.uint32());
          break;
        case 3:
          message.securityGroups.push(reader.string());
          break;
        case 7:
          message.topicSettings = KafkaTargetTopicSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.serializer = Serializer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaTarget {
    const message = { ...baseKafkaTarget } as KafkaTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? KafkaConnectionOptions.fromJSON(object.connection)
        : undefined;
    message.auth =
      object.auth !== undefined && object.auth !== null
        ? KafkaAuth.fromJSON(object.auth)
        : undefined;
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.topicSettings =
      object.topicSettings !== undefined && object.topicSettings !== null
        ? KafkaTargetTopicSettings.fromJSON(object.topicSettings)
        : undefined;
    message.serializer =
      object.serializer !== undefined && object.serializer !== null
        ? Serializer.fromJSON(object.serializer)
        : undefined;
    return message;
  },

  toJSON(message: KafkaTarget): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? KafkaConnectionOptions.toJSON(message.connection)
        : undefined);
    message.auth !== undefined &&
      (obj.auth = message.auth ? KafkaAuth.toJSON(message.auth) : undefined);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.topicSettings !== undefined &&
      (obj.topicSettings = message.topicSettings
        ? KafkaTargetTopicSettings.toJSON(message.topicSettings)
        : undefined);
    message.serializer !== undefined &&
      (obj.serializer = message.serializer
        ? Serializer.toJSON(message.serializer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KafkaTarget>, I>>(
    object: I
  ): KafkaTarget {
    const message = { ...baseKafkaTarget } as KafkaTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? KafkaConnectionOptions.fromPartial(object.connection)
        : undefined;
    message.auth =
      object.auth !== undefined && object.auth !== null
        ? KafkaAuth.fromPartial(object.auth)
        : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.topicSettings =
      object.topicSettings !== undefined && object.topicSettings !== null
        ? KafkaTargetTopicSettings.fromPartial(object.topicSettings)
        : undefined;
    message.serializer =
      object.serializer !== undefined && object.serializer !== null
        ? Serializer.fromPartial(object.serializer)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(KafkaTarget.$type, KafkaTarget);

const baseKafkaTargetTopicSettings: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings",
};

export const KafkaTargetTopicSettings = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings" as const,

  encode(
    message: KafkaTargetTopicSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.topic !== undefined) {
      KafkaTargetTopic.encode(message.topic, writer.uint32(10).fork()).ldelim();
    }
    if (message.topicPrefix !== undefined) {
      writer.uint32(18).string(message.topicPrefix);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): KafkaTargetTopicSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseKafkaTargetTopicSettings,
    } as KafkaTargetTopicSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = KafkaTargetTopic.decode(reader, reader.uint32());
          break;
        case 2:
          message.topicPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaTargetTopicSettings {
    const message = {
      ...baseKafkaTargetTopicSettings,
    } as KafkaTargetTopicSettings;
    message.topic =
      object.topic !== undefined && object.topic !== null
        ? KafkaTargetTopic.fromJSON(object.topic)
        : undefined;
    message.topicPrefix =
      object.topicPrefix !== undefined && object.topicPrefix !== null
        ? String(object.topicPrefix)
        : undefined;
    return message;
  },

  toJSON(message: KafkaTargetTopicSettings): unknown {
    const obj: any = {};
    message.topic !== undefined &&
      (obj.topic = message.topic
        ? KafkaTargetTopic.toJSON(message.topic)
        : undefined);
    message.topicPrefix !== undefined &&
      (obj.topicPrefix = message.topicPrefix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KafkaTargetTopicSettings>, I>>(
    object: I
  ): KafkaTargetTopicSettings {
    const message = {
      ...baseKafkaTargetTopicSettings,
    } as KafkaTargetTopicSettings;
    message.topic =
      object.topic !== undefined && object.topic !== null
        ? KafkaTargetTopic.fromPartial(object.topic)
        : undefined;
    message.topicPrefix = object.topicPrefix ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  KafkaTargetTopicSettings.$type,
  KafkaTargetTopicSettings
);

const baseKafkaTargetTopic: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic",
  topicName: "",
  saveTxOrder: false,
};

export const KafkaTargetTopic = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic" as const,

  encode(
    message: KafkaTargetTopic,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.topicName !== "") {
      writer.uint32(10).string(message.topicName);
    }
    if (message.saveTxOrder === true) {
      writer.uint32(16).bool(message.saveTxOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaTargetTopic {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKafkaTargetTopic } as KafkaTargetTopic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topicName = reader.string();
          break;
        case 2:
          message.saveTxOrder = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaTargetTopic {
    const message = { ...baseKafkaTargetTopic } as KafkaTargetTopic;
    message.topicName =
      object.topicName !== undefined && object.topicName !== null
        ? String(object.topicName)
        : "";
    message.saveTxOrder =
      object.saveTxOrder !== undefined && object.saveTxOrder !== null
        ? Boolean(object.saveTxOrder)
        : false;
    return message;
  },

  toJSON(message: KafkaTargetTopic): unknown {
    const obj: any = {};
    message.topicName !== undefined && (obj.topicName = message.topicName);
    message.saveTxOrder !== undefined &&
      (obj.saveTxOrder = message.saveTxOrder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KafkaTargetTopic>, I>>(
    object: I
  ): KafkaTargetTopic {
    const message = { ...baseKafkaTargetTopic } as KafkaTargetTopic;
    message.topicName = object.topicName ?? "";
    message.saveTxOrder = object.saveTxOrder ?? false;
    return message;
  },
};

messageTypeRegistry.set(KafkaTargetTopic.$type, KafkaTargetTopic);

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
