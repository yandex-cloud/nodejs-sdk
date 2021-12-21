/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
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
  SecurityGroupRule_Direction,
  PortRange,
  SecurityGroup,
  CidrBlocks,
  securityGroupRule_DirectionFromJSON,
  securityGroupRule_DirectionToJSON,
} from "../../../../yandex/cloud/vpc/v1/security_group";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.vpc.v1";

export interface GetSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest";
  securityGroupId: string;
}

export interface ListSecurityGroupsRequest {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest";
  folderId: string;
  pageSize: number;
  pageToken: string;
  /** filter by network_id is here */
  filter: string;
}

export interface ListSecurityGroupsResponse {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse";
  securityGroups: SecurityGroup[];
  nextPageToken: string;
}

export interface CreateSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest";
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  networkId: string;
  ruleSpecs: SecurityGroupRuleSpec[];
}

export interface CreateSecurityGroupRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface SecurityGroupRuleSpec {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec";
  description: string;
  labels: { [key: string]: string };
  direction: SecurityGroupRule_Direction;
  /** null value means any port */
  ports?: PortRange;
  protocolName: string | undefined;
  protocolNumber: number | undefined;
  cidrBlocks?: CidrBlocks | undefined;
  securityGroupId: string | undefined;
  /** string subnet_id = .. ; */
  predefinedTarget: string | undefined;
}

export interface SecurityGroupRuleSpec_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSecurityGroupMetadata {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata";
  securityGroupId: string;
}

export interface UpdateSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest";
  securityGroupId: string;
  updateMask?: FieldMask;
  name: string;
  description: string;
  labels: { [key: string]: string };
  /** all existing rules will be replaced with given list */
  ruleSpecs: SecurityGroupRuleSpec[];
}

export interface UpdateSecurityGroupRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSecurityGroupMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata";
  securityGroupId: string;
  addedRuleIds: string[];
}

export interface UpdateSecurityGroupRulesRequest {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest";
  securityGroupId: string;
  /** list of rules ids to delete */
  deletionRuleIds: string[];
  additionRuleSpecs: SecurityGroupRuleSpec[];
}

export interface UpdateSecurityGroupRuleRequest {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest";
  securityGroupId: string;
  ruleId: string;
  updateMask?: FieldMask;
  description: string;
  labels: { [key: string]: string };
}

export interface UpdateSecurityGroupRuleRequest_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSecurityGroupRuleMetadata {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata";
  securityGroupId: string;
  ruleId: string;
}

export interface DeleteSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest";
  securityGroupId: string;
}

export interface DeleteSecurityGroupMetadata {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata";
  securityGroupId: string;
}

export interface ListSecurityGroupOperationsRequest {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest";
  securityGroupId: string;
  pageSize: number;
  pageToken: string;
}

export interface ListSecurityGroupOperationsResponse {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse";
  operations: Operation[];
  nextPageToken: string;
}

export interface MoveSecurityGroupRequest {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest";
  securityGroupId: string;
  destinationFolderId: string;
}

export interface MoveSecurityGroupMetadata {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata";
  securityGroupId: string;
}

const baseGetSecurityGroupRequest: object = {
  $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest",
  securityGroupId: "",
};

export const GetSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest" as const,

  encode(
    message: GetSecurityGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetSecurityGroupRequest,
    } as GetSecurityGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSecurityGroupRequest {
    const message = {
      ...baseGetSecurityGroupRequest,
    } as GetSecurityGroupRequest;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    return message;
  },

  toJSON(message: GetSecurityGroupRequest): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSecurityGroupRequest>, I>>(
    object: I
  ): GetSecurityGroupRequest {
    const message = {
      ...baseGetSecurityGroupRequest,
    } as GetSecurityGroupRequest;
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSecurityGroupRequest.$type, GetSecurityGroupRequest);

const baseListSecurityGroupsRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListSecurityGroupsRequest = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest" as const,

  encode(
    message: ListSecurityGroupsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSecurityGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSecurityGroupsRequest,
    } as ListSecurityGroupsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSecurityGroupsRequest {
    const message = {
      ...baseListSecurityGroupsRequest,
    } as ListSecurityGroupsRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListSecurityGroupsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSecurityGroupsRequest>, I>>(
    object: I
  ): ListSecurityGroupsRequest {
    const message = {
      ...baseListSecurityGroupsRequest,
    } as ListSecurityGroupsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSecurityGroupsRequest.$type,
  ListSecurityGroupsRequest
);

const baseListSecurityGroupsResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse",
  nextPageToken: "",
};

export const ListSecurityGroupsResponse = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse" as const,

  encode(
    message: ListSecurityGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.securityGroups) {
      SecurityGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSecurityGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSecurityGroupsResponse,
    } as ListSecurityGroupsResponse;
    message.securityGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroups.push(
            SecurityGroup.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSecurityGroupsResponse {
    const message = {
      ...baseListSecurityGroupsResponse,
    } as ListSecurityGroupsResponse;
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      SecurityGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSecurityGroupsResponse): unknown {
    const obj: any = {};
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) =>
        e ? SecurityGroup.toJSON(e) : undefined
      );
    } else {
      obj.securityGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSecurityGroupsResponse>, I>>(
    object: I
  ): ListSecurityGroupsResponse {
    const message = {
      ...baseListSecurityGroupsResponse,
    } as ListSecurityGroupsResponse;
    message.securityGroups =
      object.securityGroups?.map((e) => SecurityGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSecurityGroupsResponse.$type,
  ListSecurityGroupsResponse
);

const baseCreateSecurityGroupRequest: object = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest",
  folderId: "",
  name: "",
  description: "",
  networkId: "",
};

export const CreateSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest" as const,

  encode(
    message: CreateSecurityGroupRequest,
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
      CreateSecurityGroupRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(42).string(message.networkId);
    }
    for (const v of message.ruleSpecs) {
      SecurityGroupRuleSpec.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSecurityGroupRequest,
    } as CreateSecurityGroupRequest;
    message.labels = {};
    message.ruleSpecs = [];
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
          const entry4 = CreateSecurityGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.networkId = reader.string();
          break;
        case 6:
          message.ruleSpecs.push(
            SecurityGroupRuleSpec.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSecurityGroupRequest {
    const message = {
      ...baseCreateSecurityGroupRequest,
    } as CreateSecurityGroupRequest;
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
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.ruleSpecs = (object.ruleSpecs ?? []).map((e: any) =>
      SecurityGroupRuleSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: CreateSecurityGroupRequest): unknown {
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
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.ruleSpecs) {
      obj.ruleSpecs = message.ruleSpecs.map((e) =>
        e ? SecurityGroupRuleSpec.toJSON(e) : undefined
      );
    } else {
      obj.ruleSpecs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSecurityGroupRequest>, I>>(
    object: I
  ): CreateSecurityGroupRequest {
    const message = {
      ...baseCreateSecurityGroupRequest,
    } as CreateSecurityGroupRequest;
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
    message.networkId = object.networkId ?? "";
    message.ruleSpecs =
      object.ruleSpecs?.map((e) => SecurityGroupRuleSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  CreateSecurityGroupRequest.$type,
  CreateSecurityGroupRequest
);

const baseCreateSecurityGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateSecurityGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry" as const,

  encode(
    message: CreateSecurityGroupRequest_LabelsEntry,
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
  ): CreateSecurityGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSecurityGroupRequest_LabelsEntry,
    } as CreateSecurityGroupRequest_LabelsEntry;
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

  fromJSON(object: any): CreateSecurityGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateSecurityGroupRequest_LabelsEntry,
    } as CreateSecurityGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateSecurityGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateSecurityGroupRequest_LabelsEntry>, I>
  >(object: I): CreateSecurityGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateSecurityGroupRequest_LabelsEntry,
    } as CreateSecurityGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateSecurityGroupRequest_LabelsEntry.$type,
  CreateSecurityGroupRequest_LabelsEntry
);

const baseSecurityGroupRuleSpec: object = {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec",
  description: "",
  direction: 0,
};

export const SecurityGroupRuleSpec = {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec" as const,

  encode(
    message: SecurityGroupRuleSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      SecurityGroupRuleSpec_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }
    if (message.ports !== undefined) {
      PortRange.encode(message.ports, writer.uint32(34).fork()).ldelim();
    }
    if (message.protocolName !== undefined) {
      writer.uint32(42).string(message.protocolName);
    }
    if (message.protocolNumber !== undefined) {
      writer.uint32(48).int64(message.protocolNumber);
    }
    if (message.cidrBlocks !== undefined) {
      CidrBlocks.encode(message.cidrBlocks, writer.uint32(58).fork()).ldelim();
    }
    if (message.securityGroupId !== undefined) {
      writer.uint32(66).string(message.securityGroupId);
    }
    if (message.predefinedTarget !== undefined) {
      writer.uint32(74).string(message.predefinedTarget);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SecurityGroupRuleSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecurityGroupRuleSpec } as SecurityGroupRuleSpec;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          const entry2 = SecurityGroupRuleSpec_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.direction = reader.int32() as any;
          break;
        case 4:
          message.ports = PortRange.decode(reader, reader.uint32());
          break;
        case 5:
          message.protocolName = reader.string();
          break;
        case 6:
          message.protocolNumber = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.cidrBlocks = CidrBlocks.decode(reader, reader.uint32());
          break;
        case 8:
          message.securityGroupId = reader.string();
          break;
        case 9:
          message.predefinedTarget = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SecurityGroupRuleSpec {
    const message = { ...baseSecurityGroupRuleSpec } as SecurityGroupRuleSpec;
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
    message.direction =
      object.direction !== undefined && object.direction !== null
        ? securityGroupRule_DirectionFromJSON(object.direction)
        : 0;
    message.ports =
      object.ports !== undefined && object.ports !== null
        ? PortRange.fromJSON(object.ports)
        : undefined;
    message.protocolName =
      object.protocolName !== undefined && object.protocolName !== null
        ? String(object.protocolName)
        : undefined;
    message.protocolNumber =
      object.protocolNumber !== undefined && object.protocolNumber !== null
        ? Number(object.protocolNumber)
        : undefined;
    message.cidrBlocks =
      object.cidrBlocks !== undefined && object.cidrBlocks !== null
        ? CidrBlocks.fromJSON(object.cidrBlocks)
        : undefined;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : undefined;
    message.predefinedTarget =
      object.predefinedTarget !== undefined && object.predefinedTarget !== null
        ? String(object.predefinedTarget)
        : undefined;
    return message;
  },

  toJSON(message: SecurityGroupRuleSpec): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.direction !== undefined &&
      (obj.direction = securityGroupRule_DirectionToJSON(message.direction));
    message.ports !== undefined &&
      (obj.ports = message.ports ? PortRange.toJSON(message.ports) : undefined);
    message.protocolName !== undefined &&
      (obj.protocolName = message.protocolName);
    message.protocolNumber !== undefined &&
      (obj.protocolNumber = Math.round(message.protocolNumber));
    message.cidrBlocks !== undefined &&
      (obj.cidrBlocks = message.cidrBlocks
        ? CidrBlocks.toJSON(message.cidrBlocks)
        : undefined);
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    message.predefinedTarget !== undefined &&
      (obj.predefinedTarget = message.predefinedTarget);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecurityGroupRuleSpec>, I>>(
    object: I
  ): SecurityGroupRuleSpec {
    const message = { ...baseSecurityGroupRuleSpec } as SecurityGroupRuleSpec;
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.direction = object.direction ?? 0;
    message.ports =
      object.ports !== undefined && object.ports !== null
        ? PortRange.fromPartial(object.ports)
        : undefined;
    message.protocolName = object.protocolName ?? undefined;
    message.protocolNumber = object.protocolNumber ?? undefined;
    message.cidrBlocks =
      object.cidrBlocks !== undefined && object.cidrBlocks !== null
        ? CidrBlocks.fromPartial(object.cidrBlocks)
        : undefined;
    message.securityGroupId = object.securityGroupId ?? undefined;
    message.predefinedTarget = object.predefinedTarget ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SecurityGroupRuleSpec.$type, SecurityGroupRuleSpec);

const baseSecurityGroupRuleSpec_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry",
  key: "",
  value: "",
};

export const SecurityGroupRuleSpec_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry" as const,

  encode(
    message: SecurityGroupRuleSpec_LabelsEntry,
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
  ): SecurityGroupRuleSpec_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSecurityGroupRuleSpec_LabelsEntry,
    } as SecurityGroupRuleSpec_LabelsEntry;
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

  fromJSON(object: any): SecurityGroupRuleSpec_LabelsEntry {
    const message = {
      ...baseSecurityGroupRuleSpec_LabelsEntry,
    } as SecurityGroupRuleSpec_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: SecurityGroupRuleSpec_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SecurityGroupRuleSpec_LabelsEntry>, I>
  >(object: I): SecurityGroupRuleSpec_LabelsEntry {
    const message = {
      ...baseSecurityGroupRuleSpec_LabelsEntry,
    } as SecurityGroupRuleSpec_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SecurityGroupRuleSpec_LabelsEntry.$type,
  SecurityGroupRuleSpec_LabelsEntry
);

const baseCreateSecurityGroupMetadata: object = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata",
  securityGroupId: "",
};

export const CreateSecurityGroupMetadata = {
  $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata" as const,

  encode(
    message: CreateSecurityGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSecurityGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSecurityGroupMetadata,
    } as CreateSecurityGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSecurityGroupMetadata {
    const message = {
      ...baseCreateSecurityGroupMetadata,
    } as CreateSecurityGroupMetadata;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    return message;
  },

  toJSON(message: CreateSecurityGroupMetadata): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSecurityGroupMetadata>, I>>(
    object: I
  ): CreateSecurityGroupMetadata {
    const message = {
      ...baseCreateSecurityGroupMetadata,
    } as CreateSecurityGroupMetadata;
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateSecurityGroupMetadata.$type,
  CreateSecurityGroupMetadata
);

const baseUpdateSecurityGroupRequest: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest",
  securityGroupId: "",
  name: "",
  description: "",
};

export const UpdateSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest" as const,

  encode(
    message: UpdateSecurityGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
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
      UpdateSecurityGroupRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    for (const v of message.ruleSpecs) {
      SecurityGroupRuleSpec.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSecurityGroupRequest,
    } as UpdateSecurityGroupRequest;
    message.labels = {};
    message.ruleSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
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
          const entry5 = UpdateSecurityGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.ruleSpecs.push(
            SecurityGroupRuleSpec.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupRequest {
    const message = {
      ...baseUpdateSecurityGroupRequest,
    } as UpdateSecurityGroupRequest;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
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
    message.ruleSpecs = (object.ruleSpecs ?? []).map((e: any) =>
      SecurityGroupRuleSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateSecurityGroupRequest): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
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
    if (message.ruleSpecs) {
      obj.ruleSpecs = message.ruleSpecs.map((e) =>
        e ? SecurityGroupRuleSpec.toJSON(e) : undefined
      );
    } else {
      obj.ruleSpecs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRequest>, I>>(
    object: I
  ): UpdateSecurityGroupRequest {
    const message = {
      ...baseUpdateSecurityGroupRequest,
    } as UpdateSecurityGroupRequest;
    message.securityGroupId = object.securityGroupId ?? "";
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
    message.ruleSpecs =
      object.ruleSpecs?.map((e) => SecurityGroupRuleSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSecurityGroupRequest.$type,
  UpdateSecurityGroupRequest
);

const baseUpdateSecurityGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateSecurityGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry" as const,

  encode(
    message: UpdateSecurityGroupRequest_LabelsEntry,
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
  ): UpdateSecurityGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSecurityGroupRequest_LabelsEntry,
    } as UpdateSecurityGroupRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateSecurityGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateSecurityGroupRequest_LabelsEntry,
    } as UpdateSecurityGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateSecurityGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateSecurityGroupRequest_LabelsEntry>, I>
  >(object: I): UpdateSecurityGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateSecurityGroupRequest_LabelsEntry,
    } as UpdateSecurityGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSecurityGroupRequest_LabelsEntry.$type,
  UpdateSecurityGroupRequest_LabelsEntry
);

const baseUpdateSecurityGroupMetadata: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata",
  securityGroupId: "",
  addedRuleIds: "",
};

export const UpdateSecurityGroupMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata" as const,

  encode(
    message: UpdateSecurityGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    for (const v of message.addedRuleIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSecurityGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSecurityGroupMetadata,
    } as UpdateSecurityGroupMetadata;
    message.addedRuleIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        case 2:
          message.addedRuleIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupMetadata {
    const message = {
      ...baseUpdateSecurityGroupMetadata,
    } as UpdateSecurityGroupMetadata;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    message.addedRuleIds = (object.addedRuleIds ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: UpdateSecurityGroupMetadata): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    if (message.addedRuleIds) {
      obj.addedRuleIds = message.addedRuleIds.map((e) => e);
    } else {
      obj.addedRuleIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupMetadata>, I>>(
    object: I
  ): UpdateSecurityGroupMetadata {
    const message = {
      ...baseUpdateSecurityGroupMetadata,
    } as UpdateSecurityGroupMetadata;
    message.securityGroupId = object.securityGroupId ?? "";
    message.addedRuleIds = object.addedRuleIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSecurityGroupMetadata.$type,
  UpdateSecurityGroupMetadata
);

const baseUpdateSecurityGroupRulesRequest: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest",
  securityGroupId: "",
  deletionRuleIds: "",
};

export const UpdateSecurityGroupRulesRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest" as const,

  encode(
    message: UpdateSecurityGroupRulesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    for (const v of message.deletionRuleIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.additionRuleSpecs) {
      SecurityGroupRuleSpec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSecurityGroupRulesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSecurityGroupRulesRequest,
    } as UpdateSecurityGroupRulesRequest;
    message.deletionRuleIds = [];
    message.additionRuleSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        case 2:
          message.deletionRuleIds.push(reader.string());
          break;
        case 3:
          message.additionRuleSpecs.push(
            SecurityGroupRuleSpec.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupRulesRequest {
    const message = {
      ...baseUpdateSecurityGroupRulesRequest,
    } as UpdateSecurityGroupRulesRequest;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    message.deletionRuleIds = (object.deletionRuleIds ?? []).map((e: any) =>
      String(e)
    );
    message.additionRuleSpecs = (object.additionRuleSpecs ?? []).map((e: any) =>
      SecurityGroupRuleSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateSecurityGroupRulesRequest): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    if (message.deletionRuleIds) {
      obj.deletionRuleIds = message.deletionRuleIds.map((e) => e);
    } else {
      obj.deletionRuleIds = [];
    }
    if (message.additionRuleSpecs) {
      obj.additionRuleSpecs = message.additionRuleSpecs.map((e) =>
        e ? SecurityGroupRuleSpec.toJSON(e) : undefined
      );
    } else {
      obj.additionRuleSpecs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRulesRequest>, I>>(
    object: I
  ): UpdateSecurityGroupRulesRequest {
    const message = {
      ...baseUpdateSecurityGroupRulesRequest,
    } as UpdateSecurityGroupRulesRequest;
    message.securityGroupId = object.securityGroupId ?? "";
    message.deletionRuleIds = object.deletionRuleIds?.map((e) => e) || [];
    message.additionRuleSpecs =
      object.additionRuleSpecs?.map((e) =>
        SecurityGroupRuleSpec.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSecurityGroupRulesRequest.$type,
  UpdateSecurityGroupRulesRequest
);

const baseUpdateSecurityGroupRuleRequest: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest",
  securityGroupId: "",
  ruleId: "",
  description: "",
};

export const UpdateSecurityGroupRuleRequest = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest" as const,

  encode(
    message: UpdateSecurityGroupRuleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    if (message.ruleId !== "") {
      writer.uint32(18).string(message.ruleId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateSecurityGroupRuleRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSecurityGroupRuleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSecurityGroupRuleRequest,
    } as UpdateSecurityGroupRuleRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        case 2:
          message.ruleId = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = UpdateSecurityGroupRuleRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupRuleRequest {
    const message = {
      ...baseUpdateSecurityGroupRuleRequest,
    } as UpdateSecurityGroupRuleRequest;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    message.ruleId =
      object.ruleId !== undefined && object.ruleId !== null
        ? String(object.ruleId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
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
    return message;
  },

  toJSON(message: UpdateSecurityGroupRuleRequest): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    message.ruleId !== undefined && (obj.ruleId = message.ruleId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRuleRequest>, I>>(
    object: I
  ): UpdateSecurityGroupRuleRequest {
    const message = {
      ...baseUpdateSecurityGroupRuleRequest,
    } as UpdateSecurityGroupRuleRequest;
    message.securityGroupId = object.securityGroupId ?? "";
    message.ruleId = object.ruleId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSecurityGroupRuleRequest.$type,
  UpdateSecurityGroupRuleRequest
);

const baseUpdateSecurityGroupRuleRequest_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateSecurityGroupRuleRequest_LabelsEntry = {
  $type:
    "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry" as const,

  encode(
    message: UpdateSecurityGroupRuleRequest_LabelsEntry,
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
  ): UpdateSecurityGroupRuleRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
    } as UpdateSecurityGroupRuleRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateSecurityGroupRuleRequest_LabelsEntry {
    const message = {
      ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
    } as UpdateSecurityGroupRuleRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateSecurityGroupRuleRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateSecurityGroupRuleRequest_LabelsEntry>, I>
  >(object: I): UpdateSecurityGroupRuleRequest_LabelsEntry {
    const message = {
      ...baseUpdateSecurityGroupRuleRequest_LabelsEntry,
    } as UpdateSecurityGroupRuleRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSecurityGroupRuleRequest_LabelsEntry.$type,
  UpdateSecurityGroupRuleRequest_LabelsEntry
);

const baseUpdateSecurityGroupRuleMetadata: object = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata",
  securityGroupId: "",
  ruleId: "",
};

export const UpdateSecurityGroupRuleMetadata = {
  $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata" as const,

  encode(
    message: UpdateSecurityGroupRuleMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    if (message.ruleId !== "") {
      writer.uint32(18).string(message.ruleId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSecurityGroupRuleMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSecurityGroupRuleMetadata,
    } as UpdateSecurityGroupRuleMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        case 2:
          message.ruleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSecurityGroupRuleMetadata {
    const message = {
      ...baseUpdateSecurityGroupRuleMetadata,
    } as UpdateSecurityGroupRuleMetadata;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    message.ruleId =
      object.ruleId !== undefined && object.ruleId !== null
        ? String(object.ruleId)
        : "";
    return message;
  },

  toJSON(message: UpdateSecurityGroupRuleMetadata): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    message.ruleId !== undefined && (obj.ruleId = message.ruleId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSecurityGroupRuleMetadata>, I>>(
    object: I
  ): UpdateSecurityGroupRuleMetadata {
    const message = {
      ...baseUpdateSecurityGroupRuleMetadata,
    } as UpdateSecurityGroupRuleMetadata;
    message.securityGroupId = object.securityGroupId ?? "";
    message.ruleId = object.ruleId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSecurityGroupRuleMetadata.$type,
  UpdateSecurityGroupRuleMetadata
);

const baseDeleteSecurityGroupRequest: object = {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest",
  securityGroupId: "",
};

export const DeleteSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest" as const,

  encode(
    message: DeleteSecurityGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteSecurityGroupRequest,
    } as DeleteSecurityGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSecurityGroupRequest {
    const message = {
      ...baseDeleteSecurityGroupRequest,
    } as DeleteSecurityGroupRequest;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteSecurityGroupRequest): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSecurityGroupRequest>, I>>(
    object: I
  ): DeleteSecurityGroupRequest {
    const message = {
      ...baseDeleteSecurityGroupRequest,
    } as DeleteSecurityGroupRequest;
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteSecurityGroupRequest.$type,
  DeleteSecurityGroupRequest
);

const baseDeleteSecurityGroupMetadata: object = {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata",
  securityGroupId: "",
};

export const DeleteSecurityGroupMetadata = {
  $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata" as const,

  encode(
    message: DeleteSecurityGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSecurityGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteSecurityGroupMetadata,
    } as DeleteSecurityGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSecurityGroupMetadata {
    const message = {
      ...baseDeleteSecurityGroupMetadata,
    } as DeleteSecurityGroupMetadata;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteSecurityGroupMetadata): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSecurityGroupMetadata>, I>>(
    object: I
  ): DeleteSecurityGroupMetadata {
    const message = {
      ...baseDeleteSecurityGroupMetadata,
    } as DeleteSecurityGroupMetadata;
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteSecurityGroupMetadata.$type,
  DeleteSecurityGroupMetadata
);

const baseListSecurityGroupOperationsRequest: object = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest",
  securityGroupId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListSecurityGroupOperationsRequest = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest" as const,

  encode(
    message: ListSecurityGroupOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSecurityGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSecurityGroupOperationsRequest,
    } as ListSecurityGroupOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        case 2:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSecurityGroupOperationsRequest {
    const message = {
      ...baseListSecurityGroupOperationsRequest,
    } as ListSecurityGroupOperationsRequest;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListSecurityGroupOperationsRequest): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListSecurityGroupOperationsRequest>, I>
  >(object: I): ListSecurityGroupOperationsRequest {
    const message = {
      ...baseListSecurityGroupOperationsRequest,
    } as ListSecurityGroupOperationsRequest;
    message.securityGroupId = object.securityGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSecurityGroupOperationsRequest.$type,
  ListSecurityGroupOperationsRequest
);

const baseListSecurityGroupOperationsResponse: object = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse",
  nextPageToken: "",
};

export const ListSecurityGroupOperationsResponse = {
  $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse" as const,

  encode(
    message: ListSecurityGroupOperationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSecurityGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSecurityGroupOperationsResponse,
    } as ListSecurityGroupOperationsResponse;
    message.operations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operations.push(Operation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSecurityGroupOperationsResponse {
    const message = {
      ...baseListSecurityGroupOperationsResponse,
    } as ListSecurityGroupOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSecurityGroupOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListSecurityGroupOperationsResponse>, I>
  >(object: I): ListSecurityGroupOperationsResponse {
    const message = {
      ...baseListSecurityGroupOperationsResponse,
    } as ListSecurityGroupOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSecurityGroupOperationsResponse.$type,
  ListSecurityGroupOperationsResponse
);

const baseMoveSecurityGroupRequest: object = {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest",
  securityGroupId: "",
  destinationFolderId: "",
};

export const MoveSecurityGroupRequest = {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest" as const,

  encode(
    message: MoveSecurityGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MoveSecurityGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMoveSecurityGroupRequest,
    } as MoveSecurityGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        case 2:
          message.destinationFolderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveSecurityGroupRequest {
    const message = {
      ...baseMoveSecurityGroupRequest,
    } as MoveSecurityGroupRequest;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveSecurityGroupRequest): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveSecurityGroupRequest>, I>>(
    object: I
  ): MoveSecurityGroupRequest {
    const message = {
      ...baseMoveSecurityGroupRequest,
    } as MoveSecurityGroupRequest;
    message.securityGroupId = object.securityGroupId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  MoveSecurityGroupRequest.$type,
  MoveSecurityGroupRequest
);

const baseMoveSecurityGroupMetadata: object = {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata",
  securityGroupId: "",
};

export const MoveSecurityGroupMetadata = {
  $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata" as const,

  encode(
    message: MoveSecurityGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityGroupId !== "") {
      writer.uint32(10).string(message.securityGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MoveSecurityGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMoveSecurityGroupMetadata,
    } as MoveSecurityGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveSecurityGroupMetadata {
    const message = {
      ...baseMoveSecurityGroupMetadata,
    } as MoveSecurityGroupMetadata;
    message.securityGroupId =
      object.securityGroupId !== undefined && object.securityGroupId !== null
        ? String(object.securityGroupId)
        : "";
    return message;
  },

  toJSON(message: MoveSecurityGroupMetadata): unknown {
    const obj: any = {};
    message.securityGroupId !== undefined &&
      (obj.securityGroupId = message.securityGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveSecurityGroupMetadata>, I>>(
    object: I
  ): MoveSecurityGroupMetadata {
    const message = {
      ...baseMoveSecurityGroupMetadata,
    } as MoveSecurityGroupMetadata;
    message.securityGroupId = object.securityGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  MoveSecurityGroupMetadata.$type,
  MoveSecurityGroupMetadata
);

export const SecurityGroupServiceService = {
  get: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSecurityGroupRequest) =>
      Buffer.from(GetSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetSecurityGroupRequest.decode(value),
    responseSerialize: (value: SecurityGroup) =>
      Buffer.from(SecurityGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SecurityGroup.decode(value),
  },
  list: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSecurityGroupsRequest) =>
      Buffer.from(ListSecurityGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListSecurityGroupsRequest.decode(value),
    responseSerialize: (value: ListSecurityGroupsResponse) =>
      Buffer.from(ListSecurityGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSecurityGroupsResponse.decode(value),
  },
  create: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSecurityGroupRequest) =>
      Buffer.from(CreateSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateSecurityGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  update: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSecurityGroupRequest) =>
      Buffer.from(UpdateSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateSecurityGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  updateRules: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSecurityGroupRulesRequest) =>
      Buffer.from(UpdateSecurityGroupRulesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateSecurityGroupRulesRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** update rule description or labels */
  updateRule: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSecurityGroupRuleRequest) =>
      Buffer.from(UpdateSecurityGroupRuleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateSecurityGroupRuleRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSecurityGroupRequest) =>
      Buffer.from(DeleteSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteSecurityGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  move: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveSecurityGroupRequest) =>
      Buffer.from(MoveSecurityGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      MoveSecurityGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  listOperations: {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSecurityGroupOperationsRequest) =>
      Buffer.from(ListSecurityGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListSecurityGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListSecurityGroupOperationsResponse) =>
      Buffer.from(ListSecurityGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSecurityGroupOperationsResponse.decode(value),
  },
} as const;

export interface SecurityGroupServiceServer
  extends UntypedServiceImplementation {
  get: handleUnaryCall<GetSecurityGroupRequest, SecurityGroup>;
  list: handleUnaryCall<ListSecurityGroupsRequest, ListSecurityGroupsResponse>;
  create: handleUnaryCall<CreateSecurityGroupRequest, Operation>;
  update: handleUnaryCall<UpdateSecurityGroupRequest, Operation>;
  updateRules: handleUnaryCall<UpdateSecurityGroupRulesRequest, Operation>;
  /** update rule description or labels */
  updateRule: handleUnaryCall<UpdateSecurityGroupRuleRequest, Operation>;
  delete: handleUnaryCall<DeleteSecurityGroupRequest, Operation>;
  move: handleUnaryCall<MoveSecurityGroupRequest, Operation>;
  listOperations: handleUnaryCall<
    ListSecurityGroupOperationsRequest,
    ListSecurityGroupOperationsResponse
  >;
}

export interface SecurityGroupServiceClient extends Client {
  get(
    request: GetSecurityGroupRequest,
    callback: (error: ServiceError | null, response: SecurityGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SecurityGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SecurityGroup) => void
  ): ClientUnaryCall;
  list(
    request: ListSecurityGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSecurityGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSecurityGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSecurityGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSecurityGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSecurityGroupsResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateSecurityGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSecurityGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateRules(
    request: UpdateSecurityGroupRulesRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateRules(
    request: UpdateSecurityGroupRulesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateRules(
    request: UpdateSecurityGroupRulesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** update rule description or labels */
  updateRule(
    request: UpdateSecurityGroupRuleRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateRule(
    request: UpdateSecurityGroupRuleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateRule(
    request: UpdateSecurityGroupRuleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSecurityGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveSecurityGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveSecurityGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveSecurityGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSecurityGroupOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSecurityGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSecurityGroupOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSecurityGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSecurityGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSecurityGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const SecurityGroupServiceClient = makeGenericClientConstructor(
  SecurityGroupServiceService,
  "yandex.cloud.vpc.v1.SecurityGroupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SecurityGroupServiceClient;
  service: typeof SecurityGroupServiceService;
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
