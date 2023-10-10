/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "../../../../../yandex/cloud/logging/v1/log_entry";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.serverless.apigateway.v1";

export interface ApiGateway {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway";
  /** ID of the API gateway. Generated at creation time. */
  id: string;
  /** ID of the folder that the API gateway belongs to. */
  folderId: string;
  /** Creation timestamp for the API-gateway. */
  createdAt?: Date;
  /** Name of the API gateway. The name is unique within the folder. */
  name: string;
  /** Description of the API gateway. */
  description: string;
  /** API gateway labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Status of the API gateway. */
  status: ApiGateway_Status;
  /** Default domain for the API gateway. Generated at creation time. */
  domain: string;
  /** ID of the log group for the API gateway. */
  logGroupId: string;
  /** List of domains attached to API gateway. */
  attachedDomains: AttachedDomain[];
  /** Network access. If specified the gateway will be attached to specified network/subnet(s). */
  connectivity?: Connectivity;
  /** Options for logging from the API gateway. */
  logOptions?: LogOptions;
  /** Values of variables defined in the specification. */
  variables: { [key: string]: VariableInput };
  /** Canary release of the gateway. */
  canary?: Canary;
}

export enum ApiGateway_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - API gateway is being created. */
  CREATING = 1,
  /** ACTIVE - API gateway is ready for use. */
  ACTIVE = 2,
  /** DELETING - API gateway is being deleted. */
  DELETING = 3,
  /** ERROR - API gateway failed. The only allowed action is delete. */
  ERROR = 4,
  /** UPDATING - API gateway is being updated. */
  UPDATING = 5,
  UNRECOGNIZED = -1,
}

export function apiGateway_StatusFromJSON(object: any): ApiGateway_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return ApiGateway_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return ApiGateway_Status.CREATING;
    case 2:
    case "ACTIVE":
      return ApiGateway_Status.ACTIVE;
    case 3:
    case "DELETING":
      return ApiGateway_Status.DELETING;
    case 4:
    case "ERROR":
      return ApiGateway_Status.ERROR;
    case 5:
    case "UPDATING":
      return ApiGateway_Status.UPDATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApiGateway_Status.UNRECOGNIZED;
  }
}

export function apiGateway_StatusToJSON(object: ApiGateway_Status): string {
  switch (object) {
    case ApiGateway_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case ApiGateway_Status.CREATING:
      return "CREATING";
    case ApiGateway_Status.ACTIVE:
      return "ACTIVE";
    case ApiGateway_Status.DELETING:
      return "DELETING";
    case ApiGateway_Status.ERROR:
      return "ERROR";
    case ApiGateway_Status.UPDATING:
      return "UPDATING";
    default:
      return "UNKNOWN";
  }
}

export interface ApiGateway_LabelsEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry";
  key: string;
  value: string;
}

export interface ApiGateway_VariablesEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry";
  key: string;
  value?: VariableInput;
}

export interface AttachedDomain {
  $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain";
  /** ID of the domain. */
  domainId: string;
  /** ID of the domain certificate. */
  certificateId: string;
  /** Enabling flag. */
  enabled: boolean;
  /** Name of the domain. */
  domain: string;
}

/** Gateway connectivity specification. */
export interface Connectivity {
  $type: "yandex.cloud.serverless.apigateway.v1.Connectivity";
  /**
   * Network the gateway will have access to.
   * It's essential to specify network with subnets in all availability zones.
   */
  networkId: string;
  /**
   * Complete list of subnets (from the same network) the gateway can be attached to.
   * It's essential to specify at least one subnet for each availability zones.
   */
  subnetId: string[];
}

export interface LogOptions {
  $type: "yandex.cloud.serverless.apigateway.v1.LogOptions";
  /** Is logging from API gateway disabled. */
  disabled: boolean;
  /** Entry should be written to log group resolved by ID. */
  logGroupId: string | undefined;
  /** Entry should be written to default log group for specified folder. */
  folderId: string | undefined;
  /**
   * Minimum log entry level.
   *
   * See [LogLevel.Level] for details.
   */
  minLevel: LogLevel_Level;
}

export interface Canary {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary";
  /** It describes percentage of requests, which will be processed by canary. */
  weight: number;
  /** Values specification variables, associated with canary. */
  variables: { [key: string]: VariableInput };
}

export interface Canary_VariablesEntry {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry";
  key: string;
  value?: VariableInput;
}

export interface VariableInput {
  $type: "yandex.cloud.serverless.apigateway.v1.VariableInput";
  stringValue: string | undefined;
  intValue: number | undefined;
  doubleValue: number | undefined;
  boolValue: boolean | undefined;
}

const baseApiGateway: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
  domain: "",
  logGroupId: "",
};

export const ApiGateway = {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway" as const,

  encode(
    message: ApiGateway,
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
      ApiGateway_LabelsEntry.encode(
        {
          $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(58).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.domain !== "") {
      writer.uint32(74).string(message.domain);
    }
    if (message.logGroupId !== "") {
      writer.uint32(82).string(message.logGroupId);
    }
    for (const v of message.attachedDomains) {
      AttachedDomain.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(
        message.connectivity,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.logOptions !== undefined) {
      LogOptions.encode(message.logOptions, writer.uint32(106).fork()).ldelim();
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      ApiGateway_VariablesEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry",
          key: key as any,
          value,
        },
        writer.uint32(114).fork()
      ).ldelim();
    });
    if (message.canary !== undefined) {
      Canary.encode(message.canary, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiGateway {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApiGateway } as ApiGateway;
    message.labels = {};
    message.attachedDomains = [];
    message.variables = {};
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
        case 7:
          const entry7 = ApiGateway_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.domain = reader.string();
          break;
        case 10:
          message.logGroupId = reader.string();
          break;
        case 11:
          message.attachedDomains.push(
            AttachedDomain.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.connectivity = Connectivity.decode(reader, reader.uint32());
          break;
        case 13:
          message.logOptions = LogOptions.decode(reader, reader.uint32());
          break;
        case 14:
          const entry14 = ApiGateway_VariablesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry14.value !== undefined) {
            message.variables[entry14.key] = entry14.value;
          }
          break;
        case 15:
          message.canary = Canary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApiGateway {
    const message = { ...baseApiGateway } as ApiGateway;
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
        ? apiGateway_StatusFromJSON(object.status)
        : 0;
    message.domain =
      object.domain !== undefined && object.domain !== null
        ? String(object.domain)
        : "";
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : "";
    message.attachedDomains = (object.attachedDomains ?? []).map((e: any) =>
      AttachedDomain.fromJSON(e)
    );
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromJSON(object.connectivity)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromJSON(object.logOptions)
        : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{
      [key: string]: VariableInput;
    }>((acc, [key, value]) => {
      acc[key] = VariableInput.fromJSON(value);
      return acc;
    }, {});
    message.canary =
      object.canary !== undefined && object.canary !== null
        ? Canary.fromJSON(object.canary)
        : undefined;
    return message;
  },

  toJSON(message: ApiGateway): unknown {
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
      (obj.status = apiGateway_StatusToJSON(message.status));
    message.domain !== undefined && (obj.domain = message.domain);
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    if (message.attachedDomains) {
      obj.attachedDomains = message.attachedDomains.map((e) =>
        e ? AttachedDomain.toJSON(e) : undefined
      );
    } else {
      obj.attachedDomains = [];
    }
    message.connectivity !== undefined &&
      (obj.connectivity = message.connectivity
        ? Connectivity.toJSON(message.connectivity)
        : undefined);
    message.logOptions !== undefined &&
      (obj.logOptions = message.logOptions
        ? LogOptions.toJSON(message.logOptions)
        : undefined);
    obj.variables = {};
    if (message.variables) {
      Object.entries(message.variables).forEach(([k, v]) => {
        obj.variables[k] = VariableInput.toJSON(v);
      });
    }
    message.canary !== undefined &&
      (obj.canary = message.canary ? Canary.toJSON(message.canary) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApiGateway>, I>>(
    object: I
  ): ApiGateway {
    const message = { ...baseApiGateway } as ApiGateway;
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
    message.domain = object.domain ?? "";
    message.logGroupId = object.logGroupId ?? "";
    message.attachedDomains =
      object.attachedDomains?.map((e) => AttachedDomain.fromPartial(e)) || [];
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromPartial(object.connectivity)
        : undefined;
    message.logOptions =
      object.logOptions !== undefined && object.logOptions !== null
        ? LogOptions.fromPartial(object.logOptions)
        : undefined;
    message.variables = Object.entries(object.variables ?? {}).reduce<{
      [key: string]: VariableInput;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = VariableInput.fromPartial(value);
      }
      return acc;
    }, {});
    message.canary =
      object.canary !== undefined && object.canary !== null
        ? Canary.fromPartial(object.canary)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ApiGateway.$type, ApiGateway);

const baseApiGateway_LabelsEntry: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry",
  key: "",
  value: "",
};

export const ApiGateway_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry" as const,

  encode(
    message: ApiGateway_LabelsEntry,
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
  ): ApiGateway_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApiGateway_LabelsEntry } as ApiGateway_LabelsEntry;
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

  fromJSON(object: any): ApiGateway_LabelsEntry {
    const message = { ...baseApiGateway_LabelsEntry } as ApiGateway_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: ApiGateway_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApiGateway_LabelsEntry>, I>>(
    object: I
  ): ApiGateway_LabelsEntry {
    const message = { ...baseApiGateway_LabelsEntry } as ApiGateway_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(ApiGateway_LabelsEntry.$type, ApiGateway_LabelsEntry);

const baseApiGateway_VariablesEntry: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry",
  key: "",
};

export const ApiGateway_VariablesEntry = {
  $type:
    "yandex.cloud.serverless.apigateway.v1.ApiGateway.VariablesEntry" as const,

  encode(
    message: ApiGateway_VariablesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ApiGateway_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseApiGateway_VariablesEntry,
    } as ApiGateway_VariablesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = VariableInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApiGateway_VariablesEntry {
    const message = {
      ...baseApiGateway_VariablesEntry,
    } as ApiGateway_VariablesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VariableInput.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: ApiGateway_VariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? VariableInput.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApiGateway_VariablesEntry>, I>>(
    object: I
  ): ApiGateway_VariablesEntry {
    const message = {
      ...baseApiGateway_VariablesEntry,
    } as ApiGateway_VariablesEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VariableInput.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ApiGateway_VariablesEntry.$type,
  ApiGateway_VariablesEntry
);

const baseAttachedDomain: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain",
  domainId: "",
  certificateId: "",
  enabled: false,
  domain: "",
};

export const AttachedDomain = {
  $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain" as const,

  encode(
    message: AttachedDomain,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domainId !== "") {
      writer.uint32(10).string(message.domainId);
    }
    if (message.certificateId !== "") {
      writer.uint32(18).string(message.certificateId);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.domain !== "") {
      writer.uint32(42).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachedDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttachedDomain } as AttachedDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainId = reader.string();
          break;
        case 2:
          message.certificateId = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 5:
          message.domain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachedDomain {
    const message = { ...baseAttachedDomain } as AttachedDomain;
    message.domainId =
      object.domainId !== undefined && object.domainId !== null
        ? String(object.domainId)
        : "";
    message.certificateId =
      object.certificateId !== undefined && object.certificateId !== null
        ? String(object.certificateId)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.domain =
      object.domain !== undefined && object.domain !== null
        ? String(object.domain)
        : "";
    return message;
  },

  toJSON(message: AttachedDomain): unknown {
    const obj: any = {};
    message.domainId !== undefined && (obj.domainId = message.domainId);
    message.certificateId !== undefined &&
      (obj.certificateId = message.certificateId);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.domain !== undefined && (obj.domain = message.domain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachedDomain>, I>>(
    object: I
  ): AttachedDomain {
    const message = { ...baseAttachedDomain } as AttachedDomain;
    message.domainId = object.domainId ?? "";
    message.certificateId = object.certificateId ?? "";
    message.enabled = object.enabled ?? false;
    message.domain = object.domain ?? "";
    return message;
  },
};

messageTypeRegistry.set(AttachedDomain.$type, AttachedDomain);

const baseConnectivity: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.Connectivity",
  networkId: "",
  subnetId: "",
};

export const Connectivity = {
  $type: "yandex.cloud.serverless.apigateway.v1.Connectivity" as const,

  encode(
    message: Connectivity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    for (const v of message.subnetId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connectivity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectivity } as Connectivity;
    message.subnetId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        case 2:
          message.subnetId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Connectivity {
    const message = { ...baseConnectivity } as Connectivity;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.subnetId = (object.subnetId ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Connectivity): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.subnetId) {
      obj.subnetId = message.subnetId.map((e) => e);
    } else {
      obj.subnetId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Connectivity>, I>>(
    object: I
  ): Connectivity {
    const message = { ...baseConnectivity } as Connectivity;
    message.networkId = object.networkId ?? "";
    message.subnetId = object.subnetId?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Connectivity.$type, Connectivity);

const baseLogOptions: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.LogOptions",
  disabled: false,
  minLevel: 0,
};

export const LogOptions = {
  $type: "yandex.cloud.serverless.apigateway.v1.LogOptions" as const,

  encode(
    message: LogOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.disabled === true) {
      writer.uint32(8).bool(message.disabled);
    }
    if (message.logGroupId !== undefined) {
      writer.uint32(18).string(message.logGroupId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(26).string(message.folderId);
    }
    if (message.minLevel !== 0) {
      writer.uint32(32).int32(message.minLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogOptions } as LogOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabled = reader.bool();
          break;
        case 2:
          message.logGroupId = reader.string();
          break;
        case 3:
          message.folderId = reader.string();
          break;
        case 4:
          message.minLevel = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogOptions {
    const message = { ...baseLogOptions } as LogOptions;
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Boolean(object.disabled)
        : false;
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : undefined;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    message.minLevel =
      object.minLevel !== undefined && object.minLevel !== null
        ? logLevel_LevelFromJSON(object.minLevel)
        : 0;
    return message;
  },

  toJSON(message: LogOptions): unknown {
    const obj: any = {};
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.minLevel !== undefined &&
      (obj.minLevel = logLevel_LevelToJSON(message.minLevel));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(
    object: I
  ): LogOptions {
    const message = { ...baseLogOptions } as LogOptions;
    message.disabled = object.disabled ?? false;
    message.logGroupId = object.logGroupId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    message.minLevel = object.minLevel ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LogOptions.$type, LogOptions);

const baseCanary: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary",
  weight: 0,
};

export const Canary = {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary" as const,

  encode(
    message: Canary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.weight !== 0) {
      writer.uint32(8).int64(message.weight);
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      Canary_VariablesEntry.encode(
        {
          $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry",
          key: key as any,
          value,
        },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Canary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanary } as Canary;
    message.variables = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = longToNumber(reader.int64() as Long);
          break;
        case 2:
          const entry2 = Canary_VariablesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.variables[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Canary {
    const message = { ...baseCanary } as Canary;
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? Number(object.weight)
        : 0;
    message.variables = Object.entries(object.variables ?? {}).reduce<{
      [key: string]: VariableInput;
    }>((acc, [key, value]) => {
      acc[key] = VariableInput.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Canary): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    obj.variables = {};
    if (message.variables) {
      Object.entries(message.variables).forEach(([k, v]) => {
        obj.variables[k] = VariableInput.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Canary>, I>>(object: I): Canary {
    const message = { ...baseCanary } as Canary;
    message.weight = object.weight ?? 0;
    message.variables = Object.entries(object.variables ?? {}).reduce<{
      [key: string]: VariableInput;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = VariableInput.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(Canary.$type, Canary);

const baseCanary_VariablesEntry: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry",
  key: "",
};

export const Canary_VariablesEntry = {
  $type: "yandex.cloud.serverless.apigateway.v1.Canary.VariablesEntry" as const,

  encode(
    message: Canary_VariablesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VariableInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Canary_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanary_VariablesEntry } as Canary_VariablesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = VariableInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Canary_VariablesEntry {
    const message = { ...baseCanary_VariablesEntry } as Canary_VariablesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VariableInput.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: Canary_VariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? VariableInput.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Canary_VariablesEntry>, I>>(
    object: I
  ): Canary_VariablesEntry {
    const message = { ...baseCanary_VariablesEntry } as Canary_VariablesEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VariableInput.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Canary_VariablesEntry.$type, Canary_VariablesEntry);

const baseVariableInput: object = {
  $type: "yandex.cloud.serverless.apigateway.v1.VariableInput",
};

export const VariableInput = {
  $type: "yandex.cloud.serverless.apigateway.v1.VariableInput" as const,

  encode(
    message: VariableInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stringValue !== undefined) {
      writer.uint32(10).string(message.stringValue);
    }
    if (message.intValue !== undefined) {
      writer.uint32(16).int64(message.intValue);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(25).double(message.doubleValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(32).bool(message.boolValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VariableInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVariableInput } as VariableInput;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stringValue = reader.string();
          break;
        case 2:
          message.intValue = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.doubleValue = reader.double();
          break;
        case 4:
          message.boolValue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VariableInput {
    const message = { ...baseVariableInput } as VariableInput;
    message.stringValue =
      object.stringValue !== undefined && object.stringValue !== null
        ? String(object.stringValue)
        : undefined;
    message.intValue =
      object.intValue !== undefined && object.intValue !== null
        ? Number(object.intValue)
        : undefined;
    message.doubleValue =
      object.doubleValue !== undefined && object.doubleValue !== null
        ? Number(object.doubleValue)
        : undefined;
    message.boolValue =
      object.boolValue !== undefined && object.boolValue !== null
        ? Boolean(object.boolValue)
        : undefined;
    return message;
  },

  toJSON(message: VariableInput): unknown {
    const obj: any = {};
    message.stringValue !== undefined &&
      (obj.stringValue = message.stringValue);
    message.intValue !== undefined &&
      (obj.intValue = Math.round(message.intValue));
    message.doubleValue !== undefined &&
      (obj.doubleValue = message.doubleValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VariableInput>, I>>(
    object: I
  ): VariableInput {
    const message = { ...baseVariableInput } as VariableInput;
    message.stringValue = object.stringValue ?? undefined;
    message.intValue = object.intValue ?? undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(VariableInput.$type, VariableInput);

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
