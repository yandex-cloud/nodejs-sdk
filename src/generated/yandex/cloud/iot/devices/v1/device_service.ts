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
  DeviceView,
  Device,
  DeviceCertificate,
  DevicePassword,
  deviceViewFromJSON,
  deviceViewToJSON,
} from "../../../../../yandex/cloud/iot/devices/v1/device";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.iot.devices.v1";

export interface GetDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest";
  /**
   * ID of the device to return.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /**
   * Specifies which parts of the device resource should be returned
   * in the response.
   */
  deviceView: DeviceView;
}

export interface GetByNameDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest";
  /**
   * ID of the registry to get device.
   *
   * To get a registry ID make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
   */
  registryId: string;
  /**
   * Name of the device to return.
   *
   * To get a device name make a [DeviceService.List] request.
   */
  deviceName: string;
  /**
   * Specifies which parts of the device resource should be returned
   * in the response.
   */
  deviceView: DeviceView;
}

export interface ListDevicesRequest {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest";
  /**
   * ID of the registry to list devices in.
   *
   * To get a registry ID make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
   */
  registryId: string | undefined;
  /**
   * ID of the folder to list devices in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string | undefined;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListDevicesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDevicesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * Specifies which parts of the device resource should be returned
   * in the response.
   */
  deviceView: DeviceView;
}

export interface ListDevicesResponse {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse";
  /** List of devices. */
  devices: Device[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDevicesRequest.page_size], use `next_page_token` as the value
   * for the [ListDevicesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest";
  /**
   * ID of the registry to create a device in.
   *
   * To get a registry ID, make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
   */
  registryId: string;
  /** Name of the device. The name must be unique within the registry. */
  name: string;
  /** Description of the device. */
  description: string;
  /** Device certificate. */
  certificates: CreateDeviceRequest_Certificate[];
  /**
   * Alias of a device topic.
   *
   * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/{id}/events`.
   */
  topicAliases: { [key: string]: string };
  /**
   * Device password.
   *
   * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
   */
  password: string;
}

export interface CreateDeviceRequest_TopicAliasesEntry {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry";
  key: string;
  value: string;
}

/** Specification of a device certificate. */
export interface CreateDeviceRequest_Certificate {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate";
  /** Public part of the device certificate. */
  certificateData: string;
}

export interface CreateDeviceMetadata {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata";
  /** ID of the device that is being created. */
  deviceId: string;
}

export interface UpdateDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest";
  /**
   * ID of the device to update.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /** Field mask that specifies which fields of the device are going to be updated. */
  updateMask?: FieldMask;
  /** Name of the device. The name must be unique within the registry. */
  name: string;
  /** Description of the device. */
  description: string;
  /**
   * Alias of a device topic.
   *
   * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/{id}/events`.
   */
  topicAliases: { [key: string]: string };
}

export interface UpdateDeviceRequest_TopicAliasesEntry {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry";
  key: string;
  value: string;
}

export interface UpdateDeviceMetadata {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata";
  /** ID of the device that is being updated. */
  deviceId: string;
}

export interface DeleteDeviceRequest {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest";
  /**
   * ID of the device to delete.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
}

export interface DeleteDeviceMetadata {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata";
  /** ID of the device that is being deleted. */
  deviceId: string;
}

export interface ListDeviceCertificatesRequest {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest";
  /** ID of the device to list certificates for. */
  deviceId: string;
}

export interface ListDeviceCertificatesResponse {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse";
  /** List of certificates for the specified device. */
  certificates: DeviceCertificate[];
}

export interface AddDeviceCertificateRequest {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest";
  /**
   * ID of the device for which the certificate is being added.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /** Public part of the certificate. */
  certificateData: string;
}

export interface AddDeviceCertificateMetadata {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata";
  /** ID of the device certificate that is being added. */
  deviceId: string;
  /** Fingerprint of the certificate that is being added. */
  fingerprint: string;
}

export interface DeleteDeviceCertificateRequest {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest";
  /**
   * ID of the device to delete a certificate for.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /** Fingerprint of the certificate to delete. */
  fingerprint: string;
}

export interface DeleteDeviceCertificateMetadata {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata";
  /** ID of the device certificate that is being deleted. */
  deviceId: string;
  /** Fingerprint of the certificate that is being deleted. */
  fingerprint: string;
}

export interface ListDevicePasswordsRequest {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest";
  /**
   * ID of the registry to list passwords in.
   *
   * To get a registry ID make a [RegistryService.List] request.
   */
  deviceId: string;
}

export interface ListDevicePasswordsResponse {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse";
  /** List of passwords for the specified device. */
  passwords: DevicePassword[];
}

export interface AddDevicePasswordRequest {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest";
  /**
   * ID of the device to add a password for.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /**
   * Passwords for the device.
   *
   * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
   */
  password: string;
}

export interface AddDevicePasswordMetadata {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata";
  /** ID of the device for which the password is being added. */
  deviceId: string;
  /** ID of the password that is being added. */
  passwordId: string;
}

export interface DeleteDevicePasswordRequest {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest";
  /**
   * ID of the device to delete a password for.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /**
   * ID of the password to delete.
   *
   * To get a password ID make a [DeviceService.ListPasswords] request.
   */
  passwordId: string;
}

export interface DeleteDevicePasswordMetadata {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata";
  /** ID of the device for which the password is being deleted. */
  deviceId: string;
  /** ID of the password that is being deleted. */
  passwordId: string;
}

export interface ListDeviceOperationsRequest {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest";
  /**
   * ID of the device to list operations for.
   *
   * To get a device ID make a [DeviceService.List] request.
   */
  deviceId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListDeviceOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDeviceOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [Device.name] field.
   */
  filter: string;
}

export interface ListDeviceOperationsResponse {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse";
  /** List of operations for the specified device certificate. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDeviceOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListDeviceOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetDeviceRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest",
  deviceId: "",
  deviceView: 0,
};

export const GetDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest" as const,

  encode(
    message: GetDeviceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.deviceView !== 0) {
      writer.uint32(16).int32(message.deviceView);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetDeviceRequest } as GetDeviceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.deviceView = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDeviceRequest {
    const message = { ...baseGetDeviceRequest } as GetDeviceRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.deviceView =
      object.deviceView !== undefined && object.deviceView !== null
        ? deviceViewFromJSON(object.deviceView)
        : 0;
    return message;
  },

  toJSON(message: GetDeviceRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.deviceView !== undefined &&
      (obj.deviceView = deviceViewToJSON(message.deviceView));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDeviceRequest>, I>>(
    object: I
  ): GetDeviceRequest {
    const message = { ...baseGetDeviceRequest } as GetDeviceRequest;
    message.deviceId = object.deviceId ?? "";
    message.deviceView = object.deviceView ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetDeviceRequest.$type, GetDeviceRequest);

const baseGetByNameDeviceRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest",
  registryId: "",
  deviceName: "",
  deviceView: 0,
};

export const GetByNameDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest" as const,

  encode(
    message: GetByNameDeviceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.deviceView !== 0) {
      writer.uint32(24).int32(message.deviceView);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetByNameDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetByNameDeviceRequest } as GetByNameDeviceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.deviceName = reader.string();
          break;
        case 3:
          message.deviceView = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetByNameDeviceRequest {
    const message = { ...baseGetByNameDeviceRequest } as GetByNameDeviceRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.deviceName =
      object.deviceName !== undefined && object.deviceName !== null
        ? String(object.deviceName)
        : "";
    message.deviceView =
      object.deviceView !== undefined && object.deviceView !== null
        ? deviceViewFromJSON(object.deviceView)
        : 0;
    return message;
  },

  toJSON(message: GetByNameDeviceRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.deviceView !== undefined &&
      (obj.deviceView = deviceViewToJSON(message.deviceView));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetByNameDeviceRequest>, I>>(
    object: I
  ): GetByNameDeviceRequest {
    const message = { ...baseGetByNameDeviceRequest } as GetByNameDeviceRequest;
    message.registryId = object.registryId ?? "";
    message.deviceName = object.deviceName ?? "";
    message.deviceView = object.deviceView ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetByNameDeviceRequest.$type, GetByNameDeviceRequest);

const baseListDevicesRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest",
  pageSize: 0,
  pageToken: "",
  deviceView: 0,
};

export const ListDevicesRequest = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest" as const,

  encode(
    message: ListDevicesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== undefined) {
      writer.uint32(10).string(message.registryId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.deviceView !== 0) {
      writer.uint32(40).int32(message.deviceView);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDevicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDevicesRequest } as ListDevicesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 3:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.pageToken = reader.string();
          break;
        case 5:
          message.deviceView = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDevicesRequest {
    const message = { ...baseListDevicesRequest } as ListDevicesRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : undefined;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.deviceView =
      object.deviceView !== undefined && object.deviceView !== null
        ? deviceViewFromJSON(object.deviceView)
        : 0;
    return message;
  },

  toJSON(message: ListDevicesRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.deviceView !== undefined &&
      (obj.deviceView = deviceViewToJSON(message.deviceView));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDevicesRequest>, I>>(
    object: I
  ): ListDevicesRequest {
    const message = { ...baseListDevicesRequest } as ListDevicesRequest;
    message.registryId = object.registryId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.deviceView = object.deviceView ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListDevicesRequest.$type, ListDevicesRequest);

const baseListDevicesResponse: object = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse",
  nextPageToken: "",
};

export const ListDevicesResponse = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse" as const,

  encode(
    message: ListDevicesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.devices) {
      Device.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDevicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDevicesResponse } as ListDevicesResponse;
    message.devices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.devices.push(Device.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDevicesResponse {
    const message = { ...baseListDevicesResponse } as ListDevicesResponse;
    message.devices = (object.devices ?? []).map((e: any) =>
      Device.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDevicesResponse): unknown {
    const obj: any = {};
    if (message.devices) {
      obj.devices = message.devices.map((e) =>
        e ? Device.toJSON(e) : undefined
      );
    } else {
      obj.devices = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDevicesResponse>, I>>(
    object: I
  ): ListDevicesResponse {
    const message = { ...baseListDevicesResponse } as ListDevicesResponse;
    message.devices = object.devices?.map((e) => Device.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDevicesResponse.$type, ListDevicesResponse);

const baseCreateDeviceRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest",
  registryId: "",
  name: "",
  description: "",
  password: "",
};

export const CreateDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest" as const,

  encode(
    message: CreateDeviceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.certificates) {
      CreateDeviceRequest_Certificate.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    Object.entries(message.topicAliases).forEach(([key, value]) => {
      CreateDeviceRequest_TopicAliasesEntry.encode(
        {
          $type:
            "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDeviceRequest } as CreateDeviceRequest;
    message.certificates = [];
    message.topicAliases = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.certificates.push(
            CreateDeviceRequest_Certificate.decode(reader, reader.uint32())
          );
          break;
        case 5:
          const entry5 = CreateDeviceRequest_TopicAliasesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.topicAliases[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDeviceRequest {
    const message = { ...baseCreateDeviceRequest } as CreateDeviceRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.certificates = (object.certificates ?? []).map((e: any) =>
      CreateDeviceRequest_Certificate.fromJSON(e)
    );
    message.topicAliases = Object.entries(object.topicAliases ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    return message;
  },

  toJSON(message: CreateDeviceRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) =>
        e ? CreateDeviceRequest_Certificate.toJSON(e) : undefined
      );
    } else {
      obj.certificates = [];
    }
    obj.topicAliases = {};
    if (message.topicAliases) {
      Object.entries(message.topicAliases).forEach(([k, v]) => {
        obj.topicAliases[k] = v;
      });
    }
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDeviceRequest>, I>>(
    object: I
  ): CreateDeviceRequest {
    const message = { ...baseCreateDeviceRequest } as CreateDeviceRequest;
    message.registryId = object.registryId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.certificates =
      object.certificates?.map((e) =>
        CreateDeviceRequest_Certificate.fromPartial(e)
      ) || [];
    message.topicAliases = Object.entries(object.topicAliases ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDeviceRequest.$type, CreateDeviceRequest);

const baseCreateDeviceRequest_TopicAliasesEntry: object = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry",
  key: "",
  value: "",
};

export const CreateDeviceRequest_TopicAliasesEntry = {
  $type:
    "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry" as const,

  encode(
    message: CreateDeviceRequest_TopicAliasesEntry,
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
  ): CreateDeviceRequest_TopicAliasesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDeviceRequest_TopicAliasesEntry,
    } as CreateDeviceRequest_TopicAliasesEntry;
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

  fromJSON(object: any): CreateDeviceRequest_TopicAliasesEntry {
    const message = {
      ...baseCreateDeviceRequest_TopicAliasesEntry,
    } as CreateDeviceRequest_TopicAliasesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateDeviceRequest_TopicAliasesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateDeviceRequest_TopicAliasesEntry>, I>
  >(object: I): CreateDeviceRequest_TopicAliasesEntry {
    const message = {
      ...baseCreateDeviceRequest_TopicAliasesEntry,
    } as CreateDeviceRequest_TopicAliasesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateDeviceRequest_TopicAliasesEntry.$type,
  CreateDeviceRequest_TopicAliasesEntry
);

const baseCreateDeviceRequest_Certificate: object = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate",
  certificateData: "",
};

export const CreateDeviceRequest_Certificate = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate" as const,

  encode(
    message: CreateDeviceRequest_Certificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.certificateData !== "") {
      writer.uint32(10).string(message.certificateData);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDeviceRequest_Certificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDeviceRequest_Certificate,
    } as CreateDeviceRequest_Certificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDeviceRequest_Certificate {
    const message = {
      ...baseCreateDeviceRequest_Certificate,
    } as CreateDeviceRequest_Certificate;
    message.certificateData =
      object.certificateData !== undefined && object.certificateData !== null
        ? String(object.certificateData)
        : "";
    return message;
  },

  toJSON(message: CreateDeviceRequest_Certificate): unknown {
    const obj: any = {};
    message.certificateData !== undefined &&
      (obj.certificateData = message.certificateData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDeviceRequest_Certificate>, I>>(
    object: I
  ): CreateDeviceRequest_Certificate {
    const message = {
      ...baseCreateDeviceRequest_Certificate,
    } as CreateDeviceRequest_Certificate;
    message.certificateData = object.certificateData ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateDeviceRequest_Certificate.$type,
  CreateDeviceRequest_Certificate
);

const baseCreateDeviceMetadata: object = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata",
  deviceId: "",
};

export const CreateDeviceMetadata = {
  $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata" as const,

  encode(
    message: CreateDeviceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDeviceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDeviceMetadata } as CreateDeviceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDeviceMetadata {
    const message = { ...baseCreateDeviceMetadata } as CreateDeviceMetadata;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    return message;
  },

  toJSON(message: CreateDeviceMetadata): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDeviceMetadata>, I>>(
    object: I
  ): CreateDeviceMetadata {
    const message = { ...baseCreateDeviceMetadata } as CreateDeviceMetadata;
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDeviceMetadata.$type, CreateDeviceMetadata);

const baseUpdateDeviceRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest",
  deviceId: "",
  name: "",
  description: "",
};

export const UpdateDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest" as const,

  encode(
    message: UpdateDeviceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
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
    Object.entries(message.topicAliases).forEach(([key, value]) => {
      UpdateDeviceRequest_TopicAliasesEntry.encode(
        {
          $type:
            "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDeviceRequest } as UpdateDeviceRequest;
    message.topicAliases = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
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
          const entry5 = UpdateDeviceRequest_TopicAliasesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.topicAliases[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDeviceRequest {
    const message = { ...baseUpdateDeviceRequest } as UpdateDeviceRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
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
    message.topicAliases = Object.entries(object.topicAliases ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: UpdateDeviceRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.topicAliases = {};
    if (message.topicAliases) {
      Object.entries(message.topicAliases).forEach(([k, v]) => {
        obj.topicAliases[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDeviceRequest>, I>>(
    object: I
  ): UpdateDeviceRequest {
    const message = { ...baseUpdateDeviceRequest } as UpdateDeviceRequest;
    message.deviceId = object.deviceId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.topicAliases = Object.entries(object.topicAliases ?? {}).reduce<{
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

messageTypeRegistry.set(UpdateDeviceRequest.$type, UpdateDeviceRequest);

const baseUpdateDeviceRequest_TopicAliasesEntry: object = {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry",
  key: "",
  value: "",
};

export const UpdateDeviceRequest_TopicAliasesEntry = {
  $type:
    "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry" as const,

  encode(
    message: UpdateDeviceRequest_TopicAliasesEntry,
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
  ): UpdateDeviceRequest_TopicAliasesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDeviceRequest_TopicAliasesEntry,
    } as UpdateDeviceRequest_TopicAliasesEntry;
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

  fromJSON(object: any): UpdateDeviceRequest_TopicAliasesEntry {
    const message = {
      ...baseUpdateDeviceRequest_TopicAliasesEntry,
    } as UpdateDeviceRequest_TopicAliasesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateDeviceRequest_TopicAliasesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateDeviceRequest_TopicAliasesEntry>, I>
  >(object: I): UpdateDeviceRequest_TopicAliasesEntry {
    const message = {
      ...baseUpdateDeviceRequest_TopicAliasesEntry,
    } as UpdateDeviceRequest_TopicAliasesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDeviceRequest_TopicAliasesEntry.$type,
  UpdateDeviceRequest_TopicAliasesEntry
);

const baseUpdateDeviceMetadata: object = {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata",
  deviceId: "",
};

export const UpdateDeviceMetadata = {
  $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata" as const,

  encode(
    message: UpdateDeviceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDeviceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDeviceMetadata } as UpdateDeviceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDeviceMetadata {
    const message = { ...baseUpdateDeviceMetadata } as UpdateDeviceMetadata;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    return message;
  },

  toJSON(message: UpdateDeviceMetadata): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDeviceMetadata>, I>>(
    object: I
  ): UpdateDeviceMetadata {
    const message = { ...baseUpdateDeviceMetadata } as UpdateDeviceMetadata;
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDeviceMetadata.$type, UpdateDeviceMetadata);

const baseDeleteDeviceRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest",
  deviceId: "",
};

export const DeleteDeviceRequest = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest" as const,

  encode(
    message: DeleteDeviceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteDeviceRequest } as DeleteDeviceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDeviceRequest {
    const message = { ...baseDeleteDeviceRequest } as DeleteDeviceRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    return message;
  },

  toJSON(message: DeleteDeviceRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDeviceRequest>, I>>(
    object: I
  ): DeleteDeviceRequest {
    const message = { ...baseDeleteDeviceRequest } as DeleteDeviceRequest;
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDeviceRequest.$type, DeleteDeviceRequest);

const baseDeleteDeviceMetadata: object = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata",
  deviceId: "",
};

export const DeleteDeviceMetadata = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata" as const,

  encode(
    message: DeleteDeviceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDeviceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteDeviceMetadata } as DeleteDeviceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDeviceMetadata {
    const message = { ...baseDeleteDeviceMetadata } as DeleteDeviceMetadata;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    return message;
  },

  toJSON(message: DeleteDeviceMetadata): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDeviceMetadata>, I>>(
    object: I
  ): DeleteDeviceMetadata {
    const message = { ...baseDeleteDeviceMetadata } as DeleteDeviceMetadata;
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDeviceMetadata.$type, DeleteDeviceMetadata);

const baseListDeviceCertificatesRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest",
  deviceId: "",
};

export const ListDeviceCertificatesRequest = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest" as const,

  encode(
    message: ListDeviceCertificatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDeviceCertificatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDeviceCertificatesRequest,
    } as ListDeviceCertificatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDeviceCertificatesRequest {
    const message = {
      ...baseListDeviceCertificatesRequest,
    } as ListDeviceCertificatesRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    return message;
  },

  toJSON(message: ListDeviceCertificatesRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDeviceCertificatesRequest>, I>>(
    object: I
  ): ListDeviceCertificatesRequest {
    const message = {
      ...baseListDeviceCertificatesRequest,
    } as ListDeviceCertificatesRequest;
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDeviceCertificatesRequest.$type,
  ListDeviceCertificatesRequest
);

const baseListDeviceCertificatesResponse: object = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse",
};

export const ListDeviceCertificatesResponse = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse" as const,

  encode(
    message: ListDeviceCertificatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.certificates) {
      DeviceCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDeviceCertificatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDeviceCertificatesResponse,
    } as ListDeviceCertificatesResponse;
    message.certificates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(
            DeviceCertificate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDeviceCertificatesResponse {
    const message = {
      ...baseListDeviceCertificatesResponse,
    } as ListDeviceCertificatesResponse;
    message.certificates = (object.certificates ?? []).map((e: any) =>
      DeviceCertificate.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListDeviceCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) =>
        e ? DeviceCertificate.toJSON(e) : undefined
      );
    } else {
      obj.certificates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDeviceCertificatesResponse>, I>>(
    object: I
  ): ListDeviceCertificatesResponse {
    const message = {
      ...baseListDeviceCertificatesResponse,
    } as ListDeviceCertificatesResponse;
    message.certificates =
      object.certificates?.map((e) => DeviceCertificate.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListDeviceCertificatesResponse.$type,
  ListDeviceCertificatesResponse
);

const baseAddDeviceCertificateRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest",
  deviceId: "",
  certificateData: "",
};

export const AddDeviceCertificateRequest = {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest" as const,

  encode(
    message: AddDeviceCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.certificateData !== "") {
      writer.uint32(26).string(message.certificateData);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddDeviceCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddDeviceCertificateRequest,
    } as AddDeviceCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 3:
          message.certificateData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddDeviceCertificateRequest {
    const message = {
      ...baseAddDeviceCertificateRequest,
    } as AddDeviceCertificateRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.certificateData =
      object.certificateData !== undefined && object.certificateData !== null
        ? String(object.certificateData)
        : "";
    return message;
  },

  toJSON(message: AddDeviceCertificateRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.certificateData !== undefined &&
      (obj.certificateData = message.certificateData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddDeviceCertificateRequest>, I>>(
    object: I
  ): AddDeviceCertificateRequest {
    const message = {
      ...baseAddDeviceCertificateRequest,
    } as AddDeviceCertificateRequest;
    message.deviceId = object.deviceId ?? "";
    message.certificateData = object.certificateData ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddDeviceCertificateRequest.$type,
  AddDeviceCertificateRequest
);

const baseAddDeviceCertificateMetadata: object = {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata",
  deviceId: "",
  fingerprint: "",
};

export const AddDeviceCertificateMetadata = {
  $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata" as const,

  encode(
    message: AddDeviceCertificateMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddDeviceCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddDeviceCertificateMetadata,
    } as AddDeviceCertificateMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.fingerprint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddDeviceCertificateMetadata {
    const message = {
      ...baseAddDeviceCertificateMetadata,
    } as AddDeviceCertificateMetadata;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.fingerprint =
      object.fingerprint !== undefined && object.fingerprint !== null
        ? String(object.fingerprint)
        : "";
    return message;
  },

  toJSON(message: AddDeviceCertificateMetadata): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddDeviceCertificateMetadata>, I>>(
    object: I
  ): AddDeviceCertificateMetadata {
    const message = {
      ...baseAddDeviceCertificateMetadata,
    } as AddDeviceCertificateMetadata;
    message.deviceId = object.deviceId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddDeviceCertificateMetadata.$type,
  AddDeviceCertificateMetadata
);

const baseDeleteDeviceCertificateRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest",
  deviceId: "",
  fingerprint: "",
};

export const DeleteDeviceCertificateRequest = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest" as const,

  encode(
    message: DeleteDeviceCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDeviceCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteDeviceCertificateRequest,
    } as DeleteDeviceCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.fingerprint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDeviceCertificateRequest {
    const message = {
      ...baseDeleteDeviceCertificateRequest,
    } as DeleteDeviceCertificateRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.fingerprint =
      object.fingerprint !== undefined && object.fingerprint !== null
        ? String(object.fingerprint)
        : "";
    return message;
  },

  toJSON(message: DeleteDeviceCertificateRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDeviceCertificateRequest>, I>>(
    object: I
  ): DeleteDeviceCertificateRequest {
    const message = {
      ...baseDeleteDeviceCertificateRequest,
    } as DeleteDeviceCertificateRequest;
    message.deviceId = object.deviceId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteDeviceCertificateRequest.$type,
  DeleteDeviceCertificateRequest
);

const baseDeleteDeviceCertificateMetadata: object = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata",
  deviceId: "",
  fingerprint: "",
};

export const DeleteDeviceCertificateMetadata = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata" as const,

  encode(
    message: DeleteDeviceCertificateMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.fingerprint !== "") {
      writer.uint32(18).string(message.fingerprint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDeviceCertificateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteDeviceCertificateMetadata,
    } as DeleteDeviceCertificateMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.fingerprint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDeviceCertificateMetadata {
    const message = {
      ...baseDeleteDeviceCertificateMetadata,
    } as DeleteDeviceCertificateMetadata;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.fingerprint =
      object.fingerprint !== undefined && object.fingerprint !== null
        ? String(object.fingerprint)
        : "";
    return message;
  },

  toJSON(message: DeleteDeviceCertificateMetadata): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDeviceCertificateMetadata>, I>>(
    object: I
  ): DeleteDeviceCertificateMetadata {
    const message = {
      ...baseDeleteDeviceCertificateMetadata,
    } as DeleteDeviceCertificateMetadata;
    message.deviceId = object.deviceId ?? "";
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteDeviceCertificateMetadata.$type,
  DeleteDeviceCertificateMetadata
);

const baseListDevicePasswordsRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest",
  deviceId: "",
};

export const ListDevicePasswordsRequest = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest" as const,

  encode(
    message: ListDevicePasswordsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDevicePasswordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDevicePasswordsRequest,
    } as ListDevicePasswordsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDevicePasswordsRequest {
    const message = {
      ...baseListDevicePasswordsRequest,
    } as ListDevicePasswordsRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    return message;
  },

  toJSON(message: ListDevicePasswordsRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDevicePasswordsRequest>, I>>(
    object: I
  ): ListDevicePasswordsRequest {
    const message = {
      ...baseListDevicePasswordsRequest,
    } as ListDevicePasswordsRequest;
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDevicePasswordsRequest.$type,
  ListDevicePasswordsRequest
);

const baseListDevicePasswordsResponse: object = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse",
};

export const ListDevicePasswordsResponse = {
  $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse" as const,

  encode(
    message: ListDevicePasswordsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.passwords) {
      DevicePassword.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDevicePasswordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDevicePasswordsResponse,
    } as ListDevicePasswordsResponse;
    message.passwords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.passwords.push(
            DevicePassword.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDevicePasswordsResponse {
    const message = {
      ...baseListDevicePasswordsResponse,
    } as ListDevicePasswordsResponse;
    message.passwords = (object.passwords ?? []).map((e: any) =>
      DevicePassword.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListDevicePasswordsResponse): unknown {
    const obj: any = {};
    if (message.passwords) {
      obj.passwords = message.passwords.map((e) =>
        e ? DevicePassword.toJSON(e) : undefined
      );
    } else {
      obj.passwords = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDevicePasswordsResponse>, I>>(
    object: I
  ): ListDevicePasswordsResponse {
    const message = {
      ...baseListDevicePasswordsResponse,
    } as ListDevicePasswordsResponse;
    message.passwords =
      object.passwords?.map((e) => DevicePassword.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListDevicePasswordsResponse.$type,
  ListDevicePasswordsResponse
);

const baseAddDevicePasswordRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest",
  deviceId: "",
  password: "",
};

export const AddDevicePasswordRequest = {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest" as const,

  encode(
    message: AddDevicePasswordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddDevicePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddDevicePasswordRequest,
    } as AddDevicePasswordRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddDevicePasswordRequest {
    const message = {
      ...baseAddDevicePasswordRequest,
    } as AddDevicePasswordRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    return message;
  },

  toJSON(message: AddDevicePasswordRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddDevicePasswordRequest>, I>>(
    object: I
  ): AddDevicePasswordRequest {
    const message = {
      ...baseAddDevicePasswordRequest,
    } as AddDevicePasswordRequest;
    message.deviceId = object.deviceId ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddDevicePasswordRequest.$type,
  AddDevicePasswordRequest
);

const baseAddDevicePasswordMetadata: object = {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata",
  deviceId: "",
  passwordId: "",
};

export const AddDevicePasswordMetadata = {
  $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata" as const,

  encode(
    message: AddDevicePasswordMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddDevicePasswordMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddDevicePasswordMetadata,
    } as AddDevicePasswordMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.passwordId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddDevicePasswordMetadata {
    const message = {
      ...baseAddDevicePasswordMetadata,
    } as AddDevicePasswordMetadata;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.passwordId =
      object.passwordId !== undefined && object.passwordId !== null
        ? String(object.passwordId)
        : "";
    return message;
  },

  toJSON(message: AddDevicePasswordMetadata): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.passwordId !== undefined && (obj.passwordId = message.passwordId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddDevicePasswordMetadata>, I>>(
    object: I
  ): AddDevicePasswordMetadata {
    const message = {
      ...baseAddDevicePasswordMetadata,
    } as AddDevicePasswordMetadata;
    message.deviceId = object.deviceId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddDevicePasswordMetadata.$type,
  AddDevicePasswordMetadata
);

const baseDeleteDevicePasswordRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest",
  deviceId: "",
  passwordId: "",
};

export const DeleteDevicePasswordRequest = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest" as const,

  encode(
    message: DeleteDevicePasswordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDevicePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteDevicePasswordRequest,
    } as DeleteDevicePasswordRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.passwordId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDevicePasswordRequest {
    const message = {
      ...baseDeleteDevicePasswordRequest,
    } as DeleteDevicePasswordRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.passwordId =
      object.passwordId !== undefined && object.passwordId !== null
        ? String(object.passwordId)
        : "";
    return message;
  },

  toJSON(message: DeleteDevicePasswordRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.passwordId !== undefined && (obj.passwordId = message.passwordId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDevicePasswordRequest>, I>>(
    object: I
  ): DeleteDevicePasswordRequest {
    const message = {
      ...baseDeleteDevicePasswordRequest,
    } as DeleteDevicePasswordRequest;
    message.deviceId = object.deviceId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteDevicePasswordRequest.$type,
  DeleteDevicePasswordRequest
);

const baseDeleteDevicePasswordMetadata: object = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata",
  deviceId: "",
  passwordId: "",
};

export const DeleteDevicePasswordMetadata = {
  $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata" as const,

  encode(
    message: DeleteDevicePasswordMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
    }
    if (message.passwordId !== "") {
      writer.uint32(18).string(message.passwordId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDevicePasswordMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteDevicePasswordMetadata,
    } as DeleteDevicePasswordMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
          break;
        case 2:
          message.passwordId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDevicePasswordMetadata {
    const message = {
      ...baseDeleteDevicePasswordMetadata,
    } as DeleteDevicePasswordMetadata;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
        : "";
    message.passwordId =
      object.passwordId !== undefined && object.passwordId !== null
        ? String(object.passwordId)
        : "";
    return message;
  },

  toJSON(message: DeleteDevicePasswordMetadata): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.passwordId !== undefined && (obj.passwordId = message.passwordId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDevicePasswordMetadata>, I>>(
    object: I
  ): DeleteDevicePasswordMetadata {
    const message = {
      ...baseDeleteDevicePasswordMetadata,
    } as DeleteDevicePasswordMetadata;
    message.deviceId = object.deviceId ?? "";
    message.passwordId = object.passwordId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteDevicePasswordMetadata.$type,
  DeleteDevicePasswordMetadata
);

const baseListDeviceOperationsRequest: object = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest",
  deviceId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListDeviceOperationsRequest = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest" as const,

  encode(
    message: ListDeviceOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deviceId !== "") {
      writer.uint32(10).string(message.deviceId);
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
  ): ListDeviceOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDeviceOperationsRequest,
    } as ListDeviceOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.string();
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

  fromJSON(object: any): ListDeviceOperationsRequest {
    const message = {
      ...baseListDeviceOperationsRequest,
    } as ListDeviceOperationsRequest;
    message.deviceId =
      object.deviceId !== undefined && object.deviceId !== null
        ? String(object.deviceId)
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

  toJSON(message: ListDeviceOperationsRequest): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDeviceOperationsRequest>, I>>(
    object: I
  ): ListDeviceOperationsRequest {
    const message = {
      ...baseListDeviceOperationsRequest,
    } as ListDeviceOperationsRequest;
    message.deviceId = object.deviceId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDeviceOperationsRequest.$type,
  ListDeviceOperationsRequest
);

const baseListDeviceOperationsResponse: object = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse",
  nextPageToken: "",
};

export const ListDeviceOperationsResponse = {
  $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse" as const,

  encode(
    message: ListDeviceOperationsResponse,
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
  ): ListDeviceOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDeviceOperationsResponse,
    } as ListDeviceOperationsResponse;
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

  fromJSON(object: any): ListDeviceOperationsResponse {
    const message = {
      ...baseListDeviceOperationsResponse,
    } as ListDeviceOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDeviceOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListDeviceOperationsResponse>, I>>(
    object: I
  ): ListDeviceOperationsResponse {
    const message = {
      ...baseListDeviceOperationsResponse,
    } as ListDeviceOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDeviceOperationsResponse.$type,
  ListDeviceOperationsResponse
);

/** A set of methods for managing devices. */
export const DeviceServiceService = {
  /**
   * Returns the specified device.
   *
   * To get the list of available devices, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDeviceRequest) =>
      Buffer.from(GetDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDeviceRequest.decode(value),
    responseSerialize: (value: Device) =>
      Buffer.from(Device.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Device.decode(value),
  },
  getByName: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/GetByName",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetByNameDeviceRequest) =>
      Buffer.from(GetByNameDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetByNameDeviceRequest.decode(value),
    responseSerialize: (value: Device) =>
      Buffer.from(Device.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Device.decode(value),
  },
  /** Retrieves the list of devices in the specified registry. */
  list: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDevicesRequest) =>
      Buffer.from(ListDevicesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDevicesRequest.decode(value),
    responseSerialize: (value: ListDevicesResponse) =>
      Buffer.from(ListDevicesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDevicesResponse.decode(value),
  },
  /** Creates a device in the specified registry. */
  create: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDeviceRequest) =>
      Buffer.from(CreateDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDeviceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified device. */
  update: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDeviceRequest) =>
      Buffer.from(UpdateDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDeviceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified device. */
  delete: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDeviceRequest) =>
      Buffer.from(DeleteDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDeviceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of device certificates for the specified device. */
  listCertificates: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDeviceCertificatesRequest) =>
      Buffer.from(ListDeviceCertificatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDeviceCertificatesRequest.decode(value),
    responseSerialize: (value: ListDeviceCertificatesResponse) =>
      Buffer.from(ListDeviceCertificatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDeviceCertificatesResponse.decode(value),
  },
  /** Adds a certificate. */
  addCertificate: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddDeviceCertificateRequest) =>
      Buffer.from(AddDeviceCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddDeviceCertificateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified device certificate. */
  deleteCertificate: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDeviceCertificateRequest) =>
      Buffer.from(DeleteDeviceCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteDeviceCertificateRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of passwords for the specified device. */
  listPasswords: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDevicePasswordsRequest) =>
      Buffer.from(ListDevicePasswordsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDevicePasswordsRequest.decode(value),
    responseSerialize: (value: ListDevicePasswordsResponse) =>
      Buffer.from(ListDevicePasswordsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDevicePasswordsResponse.decode(value),
  },
  /** Adds password for the specified device. */
  addPassword: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/AddPassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddDevicePasswordRequest) =>
      Buffer.from(AddDevicePasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddDevicePasswordRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified password. */
  deletePassword: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDevicePasswordRequest) =>
      Buffer.from(DeleteDevicePasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteDevicePasswordRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified device. */
  listOperations: {
    path: "/yandex.cloud.iot.devices.v1.DeviceService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDeviceOperationsRequest) =>
      Buffer.from(ListDeviceOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDeviceOperationsRequest.decode(value),
    responseSerialize: (value: ListDeviceOperationsResponse) =>
      Buffer.from(ListDeviceOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDeviceOperationsResponse.decode(value),
  },
} as const;

export interface DeviceServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified device.
   *
   * To get the list of available devices, make a [List] request.
   */
  get: handleUnaryCall<GetDeviceRequest, Device>;
  getByName: handleUnaryCall<GetByNameDeviceRequest, Device>;
  /** Retrieves the list of devices in the specified registry. */
  list: handleUnaryCall<ListDevicesRequest, ListDevicesResponse>;
  /** Creates a device in the specified registry. */
  create: handleUnaryCall<CreateDeviceRequest, Operation>;
  /** Updates the specified device. */
  update: handleUnaryCall<UpdateDeviceRequest, Operation>;
  /** Deletes the specified device. */
  delete: handleUnaryCall<DeleteDeviceRequest, Operation>;
  /** Retrieves the list of device certificates for the specified device. */
  listCertificates: handleUnaryCall<
    ListDeviceCertificatesRequest,
    ListDeviceCertificatesResponse
  >;
  /** Adds a certificate. */
  addCertificate: handleUnaryCall<AddDeviceCertificateRequest, Operation>;
  /** Deletes the specified device certificate. */
  deleteCertificate: handleUnaryCall<DeleteDeviceCertificateRequest, Operation>;
  /** Retrieves the list of passwords for the specified device. */
  listPasswords: handleUnaryCall<
    ListDevicePasswordsRequest,
    ListDevicePasswordsResponse
  >;
  /** Adds password for the specified device. */
  addPassword: handleUnaryCall<AddDevicePasswordRequest, Operation>;
  /** Deletes the specified password. */
  deletePassword: handleUnaryCall<DeleteDevicePasswordRequest, Operation>;
  /** Lists operations for the specified device. */
  listOperations: handleUnaryCall<
    ListDeviceOperationsRequest,
    ListDeviceOperationsResponse
  >;
}

export interface DeviceServiceClient extends Client {
  /**
   * Returns the specified device.
   *
   * To get the list of available devices, make a [List] request.
   */
  get(
    request: GetDeviceRequest,
    callback: (error: ServiceError | null, response: Device) => void
  ): ClientUnaryCall;
  get(
    request: GetDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Device) => void
  ): ClientUnaryCall;
  get(
    request: GetDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Device) => void
  ): ClientUnaryCall;
  getByName(
    request: GetByNameDeviceRequest,
    callback: (error: ServiceError | null, response: Device) => void
  ): ClientUnaryCall;
  getByName(
    request: GetByNameDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Device) => void
  ): ClientUnaryCall;
  getByName(
    request: GetByNameDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Device) => void
  ): ClientUnaryCall;
  /** Retrieves the list of devices in the specified registry. */
  list(
    request: ListDevicesRequest,
    callback: (
      error: ServiceError | null,
      response: ListDevicesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListDevicesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDevicesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListDevicesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDevicesResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a device in the specified registry. */
  create(
    request: CreateDeviceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified device. */
  update(
    request: UpdateDeviceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified device. */
  delete(
    request: DeleteDeviceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves the list of device certificates for the specified device. */
  listCertificates(
    request: ListDeviceCertificatesRequest,
    callback: (
      error: ServiceError | null,
      response: ListDeviceCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  listCertificates(
    request: ListDeviceCertificatesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDeviceCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  listCertificates(
    request: ListDeviceCertificatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDeviceCertificatesResponse
    ) => void
  ): ClientUnaryCall;
  /** Adds a certificate. */
  addCertificate(
    request: AddDeviceCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addCertificate(
    request: AddDeviceCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addCertificate(
    request: AddDeviceCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified device certificate. */
  deleteCertificate(
    request: DeleteDeviceCertificateRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteCertificate(
    request: DeleteDeviceCertificateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteCertificate(
    request: DeleteDeviceCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves the list of passwords for the specified device. */
  listPasswords(
    request: ListDevicePasswordsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDevicePasswordsResponse
    ) => void
  ): ClientUnaryCall;
  listPasswords(
    request: ListDevicePasswordsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDevicePasswordsResponse
    ) => void
  ): ClientUnaryCall;
  listPasswords(
    request: ListDevicePasswordsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDevicePasswordsResponse
    ) => void
  ): ClientUnaryCall;
  /** Adds password for the specified device. */
  addPassword(
    request: AddDevicePasswordRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addPassword(
    request: AddDevicePasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addPassword(
    request: AddDevicePasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified password. */
  deletePassword(
    request: DeleteDevicePasswordRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deletePassword(
    request: DeleteDevicePasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deletePassword(
    request: DeleteDevicePasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified device. */
  listOperations(
    request: ListDeviceOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDeviceOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDeviceOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDeviceOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDeviceOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDeviceOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const DeviceServiceClient = makeGenericClientConstructor(
  DeviceServiceService,
  "yandex.cloud.iot.devices.v1.DeviceService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): DeviceServiceClient;
  service: typeof DeviceServiceService;
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
