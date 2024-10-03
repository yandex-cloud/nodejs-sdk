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
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface ActivateDatasetRequest {
  $type: "yandex.cloud.datasphere.v2.ActivateDatasetRequest";
  datasetId: string;
  projectId: string;
}

export interface DeactivateDatasetRequest {
  $type: "yandex.cloud.datasphere.v2.DeactivateDatasetRequest";
  datasetId: string;
  projectId: string;
}

const baseActivateDatasetRequest: object = {
  $type: "yandex.cloud.datasphere.v2.ActivateDatasetRequest",
  datasetId: "",
  projectId: "",
};

export const ActivateDatasetRequest = {
  $type: "yandex.cloud.datasphere.v2.ActivateDatasetRequest" as const,

  encode(
    message: ActivateDatasetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.datasetId !== "") {
      writer.uint32(10).string(message.datasetId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateDatasetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActivateDatasetRequest } as ActivateDatasetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datasetId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateDatasetRequest {
    const message = { ...baseActivateDatasetRequest } as ActivateDatasetRequest;
    message.datasetId =
      object.datasetId !== undefined && object.datasetId !== null
        ? String(object.datasetId)
        : "";
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    return message;
  },

  toJSON(message: ActivateDatasetRequest): unknown {
    const obj: any = {};
    message.datasetId !== undefined && (obj.datasetId = message.datasetId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateDatasetRequest>, I>>(
    object: I
  ): ActivateDatasetRequest {
    const message = { ...baseActivateDatasetRequest } as ActivateDatasetRequest;
    message.datasetId = object.datasetId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateDatasetRequest.$type, ActivateDatasetRequest);

const baseDeactivateDatasetRequest: object = {
  $type: "yandex.cloud.datasphere.v2.DeactivateDatasetRequest",
  datasetId: "",
  projectId: "",
};

export const DeactivateDatasetRequest = {
  $type: "yandex.cloud.datasphere.v2.DeactivateDatasetRequest" as const,

  encode(
    message: DeactivateDatasetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.datasetId !== "") {
      writer.uint32(10).string(message.datasetId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeactivateDatasetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeactivateDatasetRequest,
    } as DeactivateDatasetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datasetId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeactivateDatasetRequest {
    const message = {
      ...baseDeactivateDatasetRequest,
    } as DeactivateDatasetRequest;
    message.datasetId =
      object.datasetId !== undefined && object.datasetId !== null
        ? String(object.datasetId)
        : "";
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    return message;
  },

  toJSON(message: DeactivateDatasetRequest): unknown {
    const obj: any = {};
    message.datasetId !== undefined && (obj.datasetId = message.datasetId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeactivateDatasetRequest>, I>>(
    object: I
  ): DeactivateDatasetRequest {
    const message = {
      ...baseDeactivateDatasetRequest,
    } as DeactivateDatasetRequest;
    message.datasetId = object.datasetId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeactivateDatasetRequest.$type,
  DeactivateDatasetRequest
);

/** A set of methods for managing Datasets. */
export const DatasetServiceService = {
  /** Activates shared dataset for project */
  activate: {
    path: "/yandex.cloud.datasphere.v2.DatasetService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateDatasetRequest) =>
      Buffer.from(ActivateDatasetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateDatasetRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deactivates shared dataset for project */
  deactivate: {
    path: "/yandex.cloud.datasphere.v2.DatasetService/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateDatasetRequest) =>
      Buffer.from(DeactivateDatasetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeactivateDatasetRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface DatasetServiceServer extends UntypedServiceImplementation {
  /** Activates shared dataset for project */
  activate: handleUnaryCall<ActivateDatasetRequest, Operation>;
  /** Deactivates shared dataset for project */
  deactivate: handleUnaryCall<DeactivateDatasetRequest, Operation>;
}

export interface DatasetServiceClient extends Client {
  /** Activates shared dataset for project */
  activate(
    request: ActivateDatasetRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateDatasetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateDatasetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deactivates shared dataset for project */
  deactivate(
    request: DeactivateDatasetRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateDatasetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateDatasetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const DatasetServiceClient = makeGenericClientConstructor(
  DatasetServiceService,
  "yandex.cloud.datasphere.v2.DatasetService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): DatasetServiceClient;
  service: typeof DatasetServiceService;
};

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
