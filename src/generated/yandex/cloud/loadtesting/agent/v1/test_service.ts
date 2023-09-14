/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  Test_Generator,
  Schedule,
  AmmoType,
  Test,
  test_GeneratorFromJSON,
  ammoTypeFromJSON,
  test_GeneratorToJSON,
  ammoTypeToJSON,
} from "../../../../../yandex/cloud/loadtesting/agent/v1/test";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface GetTestRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest";
  testId: string;
}

export interface CreateTestRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest";
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  generator: Test_Generator;
  agentInstanceId: string;
  /**
   * Fields for TestConfig creation. These fields have the higher priority than yaml config.
   * These fields are taken from Form
   */
  targetAddress: string;
  targetPort: number;
  targetVersion: string;
  instances: number;
  loadSchedule?: Schedule;
  config: string;
  ammoId: string;
  ammoUrls: string[];
  ammoHeaders: string[];
  ammoType: AmmoType;
  ssl: boolean;
  imbalancePoint: number;
  imbalanceTs: number;
  loggingLogGroupId: string;
}

export interface CreateTestRequest_LabelsEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateTestMetadata {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata";
  testId: string;
}

export interface UpdateTestRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest";
  testId: string;
  updateMask?: FieldMask;
  name: string;
  description: string;
  labels: { [key: string]: string };
  favorite: boolean;
  targetVersion: string;
  imbalancePoint: number;
  imbalanceTs: number;
  imbalanceComment: string;
}

export interface UpdateTestRequest_LabelsEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTestMetadata {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata";
  testId: string;
}

const baseGetTestRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest",
  testId: "",
};

export const GetTestRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest" as const,

  encode(
    message: GetTestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTestRequest } as GetTestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.testId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTestRequest {
    const message = { ...baseGetTestRequest } as GetTestRequest;
    message.testId =
      object.testId !== undefined && object.testId !== null
        ? String(object.testId)
        : "";
    return message;
  },

  toJSON(message: GetTestRequest): unknown {
    const obj: any = {};
    message.testId !== undefined && (obj.testId = message.testId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTestRequest>, I>>(
    object: I
  ): GetTestRequest {
    const message = { ...baseGetTestRequest } as GetTestRequest;
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTestRequest.$type, GetTestRequest);

const baseCreateTestRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest",
  folderId: "",
  name: "",
  description: "",
  generator: 0,
  agentInstanceId: "",
  targetAddress: "",
  targetPort: 0,
  targetVersion: "",
  instances: 0,
  config: "",
  ammoId: "",
  ammoUrls: "",
  ammoHeaders: "",
  ammoType: 0,
  ssl: false,
  imbalancePoint: 0,
  imbalanceTs: 0,
  loggingLogGroupId: "",
};

export const CreateTestRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest" as const,

  encode(
    message: CreateTestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateTestRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.generator !== 0) {
      writer.uint32(40).int32(message.generator);
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(50).string(message.agentInstanceId);
    }
    if (message.targetAddress !== "") {
      writer.uint32(58).string(message.targetAddress);
    }
    if (message.targetPort !== 0) {
      writer.uint32(64).int64(message.targetPort);
    }
    if (message.targetVersion !== "") {
      writer.uint32(74).string(message.targetVersion);
    }
    if (message.instances !== 0) {
      writer.uint32(80).int64(message.instances);
    }
    if (message.loadSchedule !== undefined) {
      Schedule.encode(message.loadSchedule, writer.uint32(90).fork()).ldelim();
    }
    if (message.config !== "") {
      writer.uint32(98).string(message.config);
    }
    if (message.ammoId !== "") {
      writer.uint32(106).string(message.ammoId);
    }
    for (const v of message.ammoUrls) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.ammoHeaders) {
      writer.uint32(122).string(v!);
    }
    if (message.ammoType !== 0) {
      writer.uint32(128).int32(message.ammoType);
    }
    if (message.ssl === true) {
      writer.uint32(136).bool(message.ssl);
    }
    if (message.imbalancePoint !== 0) {
      writer.uint32(144).int64(message.imbalancePoint);
    }
    if (message.imbalanceTs !== 0) {
      writer.uint32(152).int64(message.imbalanceTs);
    }
    if (message.loggingLogGroupId !== "") {
      writer.uint32(162).string(message.loggingLogGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTestRequest } as CreateTestRequest;
    message.labels = {};
    message.ammoUrls = [];
    message.ammoHeaders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = CreateTestRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.generator = reader.int32() as any;
          break;
        case 6:
          message.agentInstanceId = reader.string();
          break;
        case 7:
          message.targetAddress = reader.string();
          break;
        case 8:
          message.targetPort = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.targetVersion = reader.string();
          break;
        case 10:
          message.instances = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.loadSchedule = Schedule.decode(reader, reader.uint32());
          break;
        case 12:
          message.config = reader.string();
          break;
        case 13:
          message.ammoId = reader.string();
          break;
        case 14:
          message.ammoUrls.push(reader.string());
          break;
        case 15:
          message.ammoHeaders.push(reader.string());
          break;
        case 16:
          message.ammoType = reader.int32() as any;
          break;
        case 17:
          message.ssl = reader.bool();
          break;
        case 18:
          message.imbalancePoint = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.imbalanceTs = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.loggingLogGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTestRequest {
    const message = { ...baseCreateTestRequest } as CreateTestRequest;
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
    message.generator =
      object.generator !== undefined && object.generator !== null
        ? test_GeneratorFromJSON(object.generator)
        : 0;
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    message.targetAddress =
      object.targetAddress !== undefined && object.targetAddress !== null
        ? String(object.targetAddress)
        : "";
    message.targetPort =
      object.targetPort !== undefined && object.targetPort !== null
        ? Number(object.targetPort)
        : 0;
    message.targetVersion =
      object.targetVersion !== undefined && object.targetVersion !== null
        ? String(object.targetVersion)
        : "";
    message.instances =
      object.instances !== undefined && object.instances !== null
        ? Number(object.instances)
        : 0;
    message.loadSchedule =
      object.loadSchedule !== undefined && object.loadSchedule !== null
        ? Schedule.fromJSON(object.loadSchedule)
        : undefined;
    message.config =
      object.config !== undefined && object.config !== null
        ? String(object.config)
        : "";
    message.ammoId =
      object.ammoId !== undefined && object.ammoId !== null
        ? String(object.ammoId)
        : "";
    message.ammoUrls = (object.ammoUrls ?? []).map((e: any) => String(e));
    message.ammoHeaders = (object.ammoHeaders ?? []).map((e: any) => String(e));
    message.ammoType =
      object.ammoType !== undefined && object.ammoType !== null
        ? ammoTypeFromJSON(object.ammoType)
        : 0;
    message.ssl =
      object.ssl !== undefined && object.ssl !== null
        ? Boolean(object.ssl)
        : false;
    message.imbalancePoint =
      object.imbalancePoint !== undefined && object.imbalancePoint !== null
        ? Number(object.imbalancePoint)
        : 0;
    message.imbalanceTs =
      object.imbalanceTs !== undefined && object.imbalanceTs !== null
        ? Number(object.imbalanceTs)
        : 0;
    message.loggingLogGroupId =
      object.loggingLogGroupId !== undefined &&
      object.loggingLogGroupId !== null
        ? String(object.loggingLogGroupId)
        : "";
    return message;
  },

  toJSON(message: CreateTestRequest): unknown {
    const obj: any = {};
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
    message.generator !== undefined &&
      (obj.generator = test_GeneratorToJSON(message.generator));
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    message.targetAddress !== undefined &&
      (obj.targetAddress = message.targetAddress);
    message.targetPort !== undefined &&
      (obj.targetPort = Math.round(message.targetPort));
    message.targetVersion !== undefined &&
      (obj.targetVersion = message.targetVersion);
    message.instances !== undefined &&
      (obj.instances = Math.round(message.instances));
    message.loadSchedule !== undefined &&
      (obj.loadSchedule = message.loadSchedule
        ? Schedule.toJSON(message.loadSchedule)
        : undefined);
    message.config !== undefined && (obj.config = message.config);
    message.ammoId !== undefined && (obj.ammoId = message.ammoId);
    if (message.ammoUrls) {
      obj.ammoUrls = message.ammoUrls.map((e) => e);
    } else {
      obj.ammoUrls = [];
    }
    if (message.ammoHeaders) {
      obj.ammoHeaders = message.ammoHeaders.map((e) => e);
    } else {
      obj.ammoHeaders = [];
    }
    message.ammoType !== undefined &&
      (obj.ammoType = ammoTypeToJSON(message.ammoType));
    message.ssl !== undefined && (obj.ssl = message.ssl);
    message.imbalancePoint !== undefined &&
      (obj.imbalancePoint = Math.round(message.imbalancePoint));
    message.imbalanceTs !== undefined &&
      (obj.imbalanceTs = Math.round(message.imbalanceTs));
    message.loggingLogGroupId !== undefined &&
      (obj.loggingLogGroupId = message.loggingLogGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTestRequest>, I>>(
    object: I
  ): CreateTestRequest {
    const message = { ...baseCreateTestRequest } as CreateTestRequest;
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
    message.generator = object.generator ?? 0;
    message.agentInstanceId = object.agentInstanceId ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.targetPort = object.targetPort ?? 0;
    message.targetVersion = object.targetVersion ?? "";
    message.instances = object.instances ?? 0;
    message.loadSchedule =
      object.loadSchedule !== undefined && object.loadSchedule !== null
        ? Schedule.fromPartial(object.loadSchedule)
        : undefined;
    message.config = object.config ?? "";
    message.ammoId = object.ammoId ?? "";
    message.ammoUrls = object.ammoUrls?.map((e) => e) || [];
    message.ammoHeaders = object.ammoHeaders?.map((e) => e) || [];
    message.ammoType = object.ammoType ?? 0;
    message.ssl = object.ssl ?? false;
    message.imbalancePoint = object.imbalancePoint ?? 0;
    message.imbalanceTs = object.imbalanceTs ?? 0;
    message.loggingLogGroupId = object.loggingLogGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTestRequest.$type, CreateTestRequest);

const baseCreateTestRequest_LabelsEntry: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateTestRequest_LabelsEntry = {
  $type:
    "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry" as const,

  encode(
    message: CreateTestRequest_LabelsEntry,
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
  ): CreateTestRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateTestRequest_LabelsEntry,
    } as CreateTestRequest_LabelsEntry;
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

  fromJSON(object: any): CreateTestRequest_LabelsEntry {
    const message = {
      ...baseCreateTestRequest_LabelsEntry,
    } as CreateTestRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateTestRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTestRequest_LabelsEntry>, I>>(
    object: I
  ): CreateTestRequest_LabelsEntry {
    const message = {
      ...baseCreateTestRequest_LabelsEntry,
    } as CreateTestRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateTestRequest_LabelsEntry.$type,
  CreateTestRequest_LabelsEntry
);

const baseCreateTestMetadata: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata",
  testId: "",
};

export const CreateTestMetadata = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata" as const,

  encode(
    message: CreateTestMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTestMetadata } as CreateTestMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.testId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTestMetadata {
    const message = { ...baseCreateTestMetadata } as CreateTestMetadata;
    message.testId =
      object.testId !== undefined && object.testId !== null
        ? String(object.testId)
        : "";
    return message;
  },

  toJSON(message: CreateTestMetadata): unknown {
    const obj: any = {};
    message.testId !== undefined && (obj.testId = message.testId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTestMetadata>, I>>(
    object: I
  ): CreateTestMetadata {
    const message = { ...baseCreateTestMetadata } as CreateTestMetadata;
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTestMetadata.$type, CreateTestMetadata);

const baseUpdateTestRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest",
  testId: "",
  name: "",
  description: "",
  favorite: false,
  targetVersion: "",
  imbalancePoint: 0,
  imbalanceTs: 0,
  imbalanceComment: "",
};

export const UpdateTestRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest" as const,

  encode(
    message: UpdateTestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateTestRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.favorite === true) {
      writer.uint32(48).bool(message.favorite);
    }
    if (message.targetVersion !== "") {
      writer.uint32(58).string(message.targetVersion);
    }
    if (message.imbalancePoint !== 0) {
      writer.uint32(64).int64(message.imbalancePoint);
    }
    if (message.imbalanceTs !== 0) {
      writer.uint32(72).int64(message.imbalanceTs);
    }
    if (message.imbalanceComment !== "") {
      writer.uint32(82).string(message.imbalanceComment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateTestRequest } as UpdateTestRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.testId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = UpdateTestRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.favorite = reader.bool();
          break;
        case 7:
          message.targetVersion = reader.string();
          break;
        case 8:
          message.imbalancePoint = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.imbalanceTs = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.imbalanceComment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTestRequest {
    const message = { ...baseUpdateTestRequest } as UpdateTestRequest;
    message.testId =
      object.testId !== undefined && object.testId !== null
        ? String(object.testId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
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
    message.favorite =
      object.favorite !== undefined && object.favorite !== null
        ? Boolean(object.favorite)
        : false;
    message.targetVersion =
      object.targetVersion !== undefined && object.targetVersion !== null
        ? String(object.targetVersion)
        : "";
    message.imbalancePoint =
      object.imbalancePoint !== undefined && object.imbalancePoint !== null
        ? Number(object.imbalancePoint)
        : 0;
    message.imbalanceTs =
      object.imbalanceTs !== undefined && object.imbalanceTs !== null
        ? Number(object.imbalanceTs)
        : 0;
    message.imbalanceComment =
      object.imbalanceComment !== undefined && object.imbalanceComment !== null
        ? String(object.imbalanceComment)
        : "";
    return message;
  },

  toJSON(message: UpdateTestRequest): unknown {
    const obj: any = {};
    message.testId !== undefined && (obj.testId = message.testId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.favorite !== undefined && (obj.favorite = message.favorite);
    message.targetVersion !== undefined &&
      (obj.targetVersion = message.targetVersion);
    message.imbalancePoint !== undefined &&
      (obj.imbalancePoint = Math.round(message.imbalancePoint));
    message.imbalanceTs !== undefined &&
      (obj.imbalanceTs = Math.round(message.imbalanceTs));
    message.imbalanceComment !== undefined &&
      (obj.imbalanceComment = message.imbalanceComment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTestRequest>, I>>(
    object: I
  ): UpdateTestRequest {
    const message = { ...baseUpdateTestRequest } as UpdateTestRequest;
    message.testId = object.testId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
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
    message.favorite = object.favorite ?? false;
    message.targetVersion = object.targetVersion ?? "";
    message.imbalancePoint = object.imbalancePoint ?? 0;
    message.imbalanceTs = object.imbalanceTs ?? 0;
    message.imbalanceComment = object.imbalanceComment ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTestRequest.$type, UpdateTestRequest);

const baseUpdateTestRequest_LabelsEntry: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateTestRequest_LabelsEntry = {
  $type:
    "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry" as const,

  encode(
    message: UpdateTestRequest_LabelsEntry,
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
  ): UpdateTestRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateTestRequest_LabelsEntry,
    } as UpdateTestRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateTestRequest_LabelsEntry {
    const message = {
      ...baseUpdateTestRequest_LabelsEntry,
    } as UpdateTestRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateTestRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTestRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateTestRequest_LabelsEntry {
    const message = {
      ...baseUpdateTestRequest_LabelsEntry,
    } as UpdateTestRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateTestRequest_LabelsEntry.$type,
  UpdateTestRequest_LabelsEntry
);

const baseUpdateTestMetadata: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata",
  testId: "",
};

export const UpdateTestMetadata = {
  $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata" as const,

  encode(
    message: UpdateTestMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateTestMetadata } as UpdateTestMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.testId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTestMetadata {
    const message = { ...baseUpdateTestMetadata } as UpdateTestMetadata;
    message.testId =
      object.testId !== undefined && object.testId !== null
        ? String(object.testId)
        : "";
    return message;
  },

  toJSON(message: UpdateTestMetadata): unknown {
    const obj: any = {};
    message.testId !== undefined && (obj.testId = message.testId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTestMetadata>, I>>(
    object: I
  ): UpdateTestMetadata {
    const message = { ...baseUpdateTestMetadata } as UpdateTestMetadata;
    message.testId = object.testId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTestMetadata.$type, UpdateTestMetadata);

export const TestServiceService = {
  /** Returns test by test id. */
  get: {
    path: "/yandex.cloud.loadtesting.agent.v1.TestService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTestRequest) =>
      Buffer.from(GetTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTestRequest.decode(value),
    responseSerialize: (value: Test) =>
      Buffer.from(Test.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Test.decode(value),
  },
  /** Creates test for the specified folder. */
  create: {
    path: "/yandex.cloud.loadtesting.agent.v1.TestService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTestRequest) =>
      Buffer.from(CreateTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTestRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified test. */
  update: {
    path: "/yandex.cloud.loadtesting.agent.v1.TestService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTestRequest) =>
      Buffer.from(UpdateTestRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTestRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface TestServiceServer extends UntypedServiceImplementation {
  /** Returns test by test id. */
  get: handleUnaryCall<GetTestRequest, Test>;
  /** Creates test for the specified folder. */
  create: handleUnaryCall<CreateTestRequest, Operation>;
  /** Updates the specified test. */
  update: handleUnaryCall<UpdateTestRequest, Operation>;
}

export interface TestServiceClient extends Client {
  /** Returns test by test id. */
  get(
    request: GetTestRequest,
    callback: (error: ServiceError | null, response: Test) => void
  ): ClientUnaryCall;
  get(
    request: GetTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Test) => void
  ): ClientUnaryCall;
  get(
    request: GetTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Test) => void
  ): ClientUnaryCall;
  /** Creates test for the specified folder. */
  create(
    request: CreateTestRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified test. */
  update(
    request: UpdateTestRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTestRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTestRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const TestServiceClient = makeGenericClientConstructor(
  TestServiceService,
  "yandex.cloud.loadtesting.agent.v1.TestService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TestServiceClient;
  service: typeof TestServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
