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
  TransferType,
  Transfer,
  transferTypeFromJSON,
  transferTypeToJSON,
} from "../../../../yandex/cloud/datatransfer/v1/transfer";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.datatransfer.v1";

export interface CreateTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest";
  sourceId: string;
  targetId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  folderId: string;
  type: TransferType;
}

export interface CreateTransferRequest_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata";
  transferId: string;
}

export interface UpdateTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest";
  /** Identifier of the transfer to be updated. */
  transferId: string;
  /** The new description for the transfer. */
  description: string;
  labels: { [key: string]: string };
  /** The new transfer name. Must be unique within the folder. */
  name: string;
  /**
   * Field mask specifying transfer fields to be updated. Semantics for this field is
   * described here:
   * <https://pkg.go.dev/google.golang.org/protobuf/types/known/fieldmaskpb#FieldMask>
   * The only exception: if the repeated field is specified in the mask, then
   * the new value replaces the old one instead of being appended to the old one.
   */
  updateMask?: FieldMask;
}

export interface UpdateTransferRequest_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata";
  transferId: string;
}

export interface DeleteTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest";
  transferId: string;
}

export interface DeleteTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata";
  transferId: string;
}

export interface ListTransfersRequest {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest";
  /** Identifier of the folder containing the transfers to be listed. */
  folderId: string;
  /**
   * The maximum number of transfers to be sent in the response message. If the
   * folder contains more transfers than `page_size`, `next_page_token` will be
   * included
   * in the response message. Include it into the subsequent `ListTransfersRequest`
   * to
   * fetch the next page. Defaults to `100` if not specified. The maximum allowed
   * value
   * for this field is `500`.
   */
  pageSize: number;
  /**
   * Opaque value identifying the transfers page to be fetched. Should be empty in
   * the first `ListTransfersRequest`. Subsequent requests should have this field
   * filled
   * with the `next_page_token` from the previous `ListTransfersResponse`.
   */
  pageToken: string;
}

export interface ListTransfersResponse {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse";
  /**
   * The list of transfers. If there are more transfers in the folder, then
   * `next_page_token` is a non-empty string to be included into the subsequent
   * `ListTransfersRequest` to fetch the next transfers page.
   */
  transfers: Transfer[];
  /**
   * Opaque value identifying the next transfers page. This field is empty if there
   * are no more transfers in the folder. Otherwise it is non-empty and should be
   * included in the subsequent `ListTransfersRequest` to fetch the next transfers
   * page.
   */
  nextPageToken: string;
}

export interface GetTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.GetTransferRequest";
  transferId: string;
}

export interface DeactivateTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest";
  transferId: string;
}

export interface DeactivateTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata";
  transferId: string;
}

export interface ActivateTransferRequest {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest";
  transferId: string;
}

export interface ActivateTransferMetadata {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata";
  transferId: string;
}

const baseCreateTransferRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest",
  sourceId: "",
  targetId: "",
  name: "",
  description: "",
  folderId: "",
  type: 0,
};

export const CreateTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest" as const,

  encode(
    message: CreateTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceId !== "") {
      writer.uint32(10).string(message.sourceId);
    }
    if (message.targetId !== "") {
      writer.uint32(18).string(message.targetId);
    }
    if (message.name !== "") {
      writer.uint32(58).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateTransferRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(66).fork()
      ).ldelim();
    });
    if (message.folderId !== "") {
      writer.uint32(34).string(message.folderId);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTransferRequest } as CreateTransferRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceId = reader.string();
          break;
        case 2:
          message.targetId = reader.string();
          break;
        case 7:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 8:
          const entry8 = CreateTransferRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
          }
          break;
        case 4:
          message.folderId = reader.string();
          break;
        case 6:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTransferRequest {
    const message = { ...baseCreateTransferRequest } as CreateTransferRequest;
    message.sourceId =
      object.sourceId !== undefined && object.sourceId !== null
        ? String(object.sourceId)
        : "";
    message.targetId =
      object.targetId !== undefined && object.targetId !== null
        ? String(object.targetId)
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
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? transferTypeFromJSON(object.type)
        : 0;
    return message;
  },

  toJSON(message: CreateTransferRequest): unknown {
    const obj: any = {};
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.targetId !== undefined && (obj.targetId = message.targetId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.type !== undefined && (obj.type = transferTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferRequest>, I>>(
    object: I
  ): CreateTransferRequest {
    const message = { ...baseCreateTransferRequest } as CreateTransferRequest;
    message.sourceId = object.sourceId ?? "";
    message.targetId = object.targetId ?? "";
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
    message.folderId = object.folderId ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateTransferRequest.$type, CreateTransferRequest);

const baseCreateTransferRequest_LabelsEntry: object = {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateTransferRequest_LabelsEntry = {
  $type:
    "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry" as const,

  encode(
    message: CreateTransferRequest_LabelsEntry,
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
  ): CreateTransferRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateTransferRequest_LabelsEntry,
    } as CreateTransferRequest_LabelsEntry;
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

  fromJSON(object: any): CreateTransferRequest_LabelsEntry {
    const message = {
      ...baseCreateTransferRequest_LabelsEntry,
    } as CreateTransferRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateTransferRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateTransferRequest_LabelsEntry>, I>
  >(object: I): CreateTransferRequest_LabelsEntry {
    const message = {
      ...baseCreateTransferRequest_LabelsEntry,
    } as CreateTransferRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateTransferRequest_LabelsEntry.$type,
  CreateTransferRequest_LabelsEntry
);

const baseCreateTransferMetadata: object = {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata",
  transferId: "",
};

export const CreateTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata" as const,

  encode(
    message: CreateTransferMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTransferMetadata } as CreateTransferMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTransferMetadata {
    const message = { ...baseCreateTransferMetadata } as CreateTransferMetadata;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: CreateTransferMetadata): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferMetadata>, I>>(
    object: I
  ): CreateTransferMetadata {
    const message = { ...baseCreateTransferMetadata } as CreateTransferMetadata;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTransferMetadata.$type, CreateTransferMetadata);

const baseUpdateTransferRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest",
  transferId: "",
  description: "",
  name: "",
};

export const UpdateTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest" as const,

  encode(
    message: UpdateTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateTransferRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateTransferRequest } as UpdateTransferRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = UpdateTransferRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTransferRequest {
    const message = { ...baseUpdateTransferRequest } as UpdateTransferRequest;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    return message;
  },

  toJSON(message: UpdateTransferRequest): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.name !== undefined && (obj.name = message.name);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTransferRequest>, I>>(
    object: I
  ): UpdateTransferRequest {
    const message = { ...baseUpdateTransferRequest } as UpdateTransferRequest;
    message.transferId = object.transferId ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.name = object.name ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateTransferRequest.$type, UpdateTransferRequest);

const baseUpdateTransferRequest_LabelsEntry: object = {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateTransferRequest_LabelsEntry = {
  $type:
    "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry" as const,

  encode(
    message: UpdateTransferRequest_LabelsEntry,
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
  ): UpdateTransferRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateTransferRequest_LabelsEntry,
    } as UpdateTransferRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateTransferRequest_LabelsEntry {
    const message = {
      ...baseUpdateTransferRequest_LabelsEntry,
    } as UpdateTransferRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateTransferRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateTransferRequest_LabelsEntry>, I>
  >(object: I): UpdateTransferRequest_LabelsEntry {
    const message = {
      ...baseUpdateTransferRequest_LabelsEntry,
    } as UpdateTransferRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateTransferRequest_LabelsEntry.$type,
  UpdateTransferRequest_LabelsEntry
);

const baseUpdateTransferMetadata: object = {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata",
  transferId: "",
};

export const UpdateTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata" as const,

  encode(
    message: UpdateTransferMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateTransferMetadata } as UpdateTransferMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTransferMetadata {
    const message = { ...baseUpdateTransferMetadata } as UpdateTransferMetadata;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: UpdateTransferMetadata): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTransferMetadata>, I>>(
    object: I
  ): UpdateTransferMetadata {
    const message = { ...baseUpdateTransferMetadata } as UpdateTransferMetadata;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTransferMetadata.$type, UpdateTransferMetadata);

const baseDeleteTransferRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest",
  transferId: "",
};

export const DeleteTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest" as const,

  encode(
    message: DeleteTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteTransferRequest } as DeleteTransferRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTransferRequest {
    const message = { ...baseDeleteTransferRequest } as DeleteTransferRequest;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: DeleteTransferRequest): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTransferRequest>, I>>(
    object: I
  ): DeleteTransferRequest {
    const message = { ...baseDeleteTransferRequest } as DeleteTransferRequest;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTransferRequest.$type, DeleteTransferRequest);

const baseDeleteTransferMetadata: object = {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata",
  transferId: "",
};

export const DeleteTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata" as const,

  encode(
    message: DeleteTransferMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteTransferMetadata } as DeleteTransferMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTransferMetadata {
    const message = { ...baseDeleteTransferMetadata } as DeleteTransferMetadata;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: DeleteTransferMetadata): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTransferMetadata>, I>>(
    object: I
  ): DeleteTransferMetadata {
    const message = { ...baseDeleteTransferMetadata } as DeleteTransferMetadata;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTransferMetadata.$type, DeleteTransferMetadata);

const baseListTransfersRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListTransfersRequest = {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest" as const,

  encode(
    message: ListTransfersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListTransfersRequest } as ListTransfersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.folderId = reader.string();
          break;
        case 3:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTransfersRequest {
    const message = { ...baseListTransfersRequest } as ListTransfersRequest;
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
    return message;
  },

  toJSON(message: ListTransfersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTransfersRequest>, I>>(
    object: I
  ): ListTransfersRequest {
    const message = { ...baseListTransfersRequest } as ListTransfersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTransfersRequest.$type, ListTransfersRequest);

const baseListTransfersResponse: object = {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse",
  nextPageToken: "",
};

export const ListTransfersResponse = {
  $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse" as const,

  encode(
    message: ListTransfersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transfers) {
      Transfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListTransfersResponse } as ListTransfersResponse;
    message.transfers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfers.push(Transfer.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTransfersResponse {
    const message = { ...baseListTransfersResponse } as ListTransfersResponse;
    message.transfers = (object.transfers ?? []).map((e: any) =>
      Transfer.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListTransfersResponse): unknown {
    const obj: any = {};
    if (message.transfers) {
      obj.transfers = message.transfers.map((e) =>
        e ? Transfer.toJSON(e) : undefined
      );
    } else {
      obj.transfers = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTransfersResponse>, I>>(
    object: I
  ): ListTransfersResponse {
    const message = { ...baseListTransfersResponse } as ListTransfersResponse;
    message.transfers =
      object.transfers?.map((e) => Transfer.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTransfersResponse.$type, ListTransfersResponse);

const baseGetTransferRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.GetTransferRequest",
  transferId: "",
};

export const GetTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.GetTransferRequest" as const,

  encode(
    message: GetTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTransferRequest } as GetTransferRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTransferRequest {
    const message = { ...baseGetTransferRequest } as GetTransferRequest;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: GetTransferRequest): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTransferRequest>, I>>(
    object: I
  ): GetTransferRequest {
    const message = { ...baseGetTransferRequest } as GetTransferRequest;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTransferRequest.$type, GetTransferRequest);

const baseDeactivateTransferRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest",
  transferId: "",
};

export const DeactivateTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest" as const,

  encode(
    message: DeactivateTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeactivateTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeactivateTransferRequest,
    } as DeactivateTransferRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeactivateTransferRequest {
    const message = {
      ...baseDeactivateTransferRequest,
    } as DeactivateTransferRequest;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: DeactivateTransferRequest): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeactivateTransferRequest>, I>>(
    object: I
  ): DeactivateTransferRequest {
    const message = {
      ...baseDeactivateTransferRequest,
    } as DeactivateTransferRequest;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeactivateTransferRequest.$type,
  DeactivateTransferRequest
);

const baseDeactivateTransferMetadata: object = {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata",
  transferId: "",
};

export const DeactivateTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata" as const,

  encode(
    message: DeactivateTransferMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeactivateTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeactivateTransferMetadata,
    } as DeactivateTransferMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeactivateTransferMetadata {
    const message = {
      ...baseDeactivateTransferMetadata,
    } as DeactivateTransferMetadata;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: DeactivateTransferMetadata): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeactivateTransferMetadata>, I>>(
    object: I
  ): DeactivateTransferMetadata {
    const message = {
      ...baseDeactivateTransferMetadata,
    } as DeactivateTransferMetadata;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeactivateTransferMetadata.$type,
  DeactivateTransferMetadata
);

const baseActivateTransferRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest",
  transferId: "",
};

export const ActivateTransferRequest = {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest" as const,

  encode(
    message: ActivateTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseActivateTransferRequest,
    } as ActivateTransferRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateTransferRequest {
    const message = {
      ...baseActivateTransferRequest,
    } as ActivateTransferRequest;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: ActivateTransferRequest): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateTransferRequest>, I>>(
    object: I
  ): ActivateTransferRequest {
    const message = {
      ...baseActivateTransferRequest,
    } as ActivateTransferRequest;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateTransferRequest.$type, ActivateTransferRequest);

const baseActivateTransferMetadata: object = {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata",
  transferId: "",
};

export const ActivateTransferMetadata = {
  $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata" as const,

  encode(
    message: ActivateTransferMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateTransferMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseActivateTransferMetadata,
    } as ActivateTransferMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateTransferMetadata {
    const message = {
      ...baseActivateTransferMetadata,
    } as ActivateTransferMetadata;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? String(object.transferId)
        : "";
    return message;
  },

  toJSON(message: ActivateTransferMetadata): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateTransferMetadata>, I>>(
    object: I
  ): ActivateTransferMetadata {
    const message = {
      ...baseActivateTransferMetadata,
    } as ActivateTransferMetadata;
    message.transferId = object.transferId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ActivateTransferMetadata.$type,
  ActivateTransferMetadata
);

export const TransferServiceService = {
  create: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTransferRequest) =>
      Buffer.from(CreateTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTransferRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  update: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTransferRequest) =>
      Buffer.from(UpdateTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTransferRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTransferRequest) =>
      Buffer.from(DeleteTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteTransferRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  list: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTransfersRequest) =>
      Buffer.from(ListTransfersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTransfersRequest.decode(value),
    responseSerialize: (value: ListTransfersResponse) =>
      Buffer.from(ListTransfersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTransfersResponse.decode(value),
  },
  get: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTransferRequest) =>
      Buffer.from(GetTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTransferRequest.decode(value),
    responseSerialize: (value: Transfer) =>
      Buffer.from(Transfer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Transfer.decode(value),
  },
  deactivate: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateTransferRequest) =>
      Buffer.from(DeactivateTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeactivateTransferRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  activate: {
    path: "/yandex.cloud.datatransfer.v1.TransferService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateTransferRequest) =>
      Buffer.from(ActivateTransferRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ActivateTransferRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface TransferServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateTransferRequest, Operation>;
  update: handleUnaryCall<UpdateTransferRequest, Operation>;
  delete: handleUnaryCall<DeleteTransferRequest, Operation>;
  list: handleUnaryCall<ListTransfersRequest, ListTransfersResponse>;
  get: handleUnaryCall<GetTransferRequest, Transfer>;
  deactivate: handleUnaryCall<DeactivateTransferRequest, Operation>;
  activate: handleUnaryCall<ActivateTransferRequest, Operation>;
}

export interface TransferServiceClient extends Client {
  create(
    request: CreateTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  list(
    request: ListTransfersRequest,
    callback: (
      error: ServiceError | null,
      response: ListTransfersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListTransfersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListTransfersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListTransfersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListTransfersResponse
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetTransferRequest,
    callback: (error: ServiceError | null, response: Transfer) => void
  ): ClientUnaryCall;
  get(
    request: GetTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Transfer) => void
  ): ClientUnaryCall;
  get(
    request: GetTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Transfer) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateTransferRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateTransferRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateTransferRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const TransferServiceClient = makeGenericClientConstructor(
  TransferServiceService,
  "yandex.cloud.datatransfer.v1.TransferService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TransferServiceClient;
  service: typeof TransferServiceService;
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
