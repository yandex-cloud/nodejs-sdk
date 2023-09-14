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
  DiskPlacementPolicy,
  Disk,
} from "../../../../yandex/cloud/compute/v1/disk";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { SnapshotSchedule } from "../../../../yandex/cloud/compute/v1/snapshot_schedule";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetDiskRequest {
  $type: "yandex.cloud.compute.v1.GetDiskRequest";
  /**
   * ID of the Disk resource to return.
   * To get the disk ID use a [DiskService.List] request.
   */
  diskId: string;
}

export interface ListDisksRequest {
  $type: "yandex.cloud.compute.v1.ListDisksRequest";
  /**
   * ID of the folder to list disks in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListDisksResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDisksResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
   *
   * Each condition has the form `<field> <operator> <value>`, where:
   * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
   * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
   * 3. `<value>` represents a value.
   * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
   */
  filter: string;
  /**
   * By which column the listing should be ordered and in which direction,
   * format is "createdAt desc". "id asc" if omitted.
   * The default sorting order is ascending
   */
  orderBy: string;
}

export interface ListDisksResponse {
  $type: "yandex.cloud.compute.v1.ListDisksResponse";
  /** List of Disk resources. */
  disks: Disk[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDisksRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListDisksRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDiskRequest {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest";
  /**
   * ID of the folder to create a disk in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the disk. */
  name: string;
  /** Description of the disk. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the disk type.
   * To get a list of available disk types use the [yandex.cloud.compute.v1.DiskTypeService.List] request.
   */
  typeId: string;
  /**
   * ID of the availability zone where the disk resides.
   * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * Size of the disk, specified in bytes.
   * If the disk was created from a image, this value should be more than the
   * [yandex.cloud.compute.v1.Image.min_disk_size] value.
   */
  size: number;
  /** ID of the image to create the disk from. */
  imageId: string | undefined;
  /** ID of the snapshot to restore the disk from. */
  snapshotId: string | undefined;
  /** Block size used for disk, specified in bytes. The default is 4096. */
  blockSize: number;
  /** Placement policy configuration. */
  diskPlacementPolicy?: DiskPlacementPolicy;
  /** List of IDs of the snapshot schedules to attach the disk to. */
  snapshotScheduleIds: string[];
}

export interface CreateDiskRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateDiskMetadata {
  $type: "yandex.cloud.compute.v1.CreateDiskMetadata";
  /** ID of the disk that is being created. */
  diskId: string;
}

export interface UpdateDiskRequest {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest";
  /**
   * ID of the Disk resource to update.
   * To get the disk ID use a [DiskService.List] request.
   */
  diskId: string;
  /** Field mask that specifies which fields of the Disk resource are going to be updated. */
  updateMask?: FieldMask;
  /** Name of the disk. */
  name: string;
  /** Description of the disk. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Size of the disk, specified in bytes. */
  size: number;
  /** Placement policy configuration. */
  diskPlacementPolicy?: DiskPlacementPolicy;
}

export interface UpdateDiskRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateDiskMetadata {
  $type: "yandex.cloud.compute.v1.UpdateDiskMetadata";
  /** ID of the Disk resource that is being updated. */
  diskId: string;
}

export interface DeleteDiskRequest {
  $type: "yandex.cloud.compute.v1.DeleteDiskRequest";
  /**
   * ID of the disk to delete.
   * To get the disk ID use a [DiskService.List] request.
   */
  diskId: string;
}

export interface DeleteDiskMetadata {
  $type: "yandex.cloud.compute.v1.DeleteDiskMetadata";
  /** ID of the disk that is being deleted. */
  diskId: string;
}

export interface ListDiskOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest";
  /** ID of the Disk resource to list operations for. */
  diskId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListDiskOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDiskOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDiskOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse";
  /** List of operations for the specified disk. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDiskOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListDiskOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveDiskRequest {
  $type: "yandex.cloud.compute.v1.MoveDiskRequest";
  /**
   * ID of the disk to move.
   *
   * To get the disk ID, make a [DiskService.List] request.
   */
  diskId: string;
  /**
   * ID of the folder to move the disk to.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  destinationFolderId: string;
}

export interface MoveDiskMetadata {
  $type: "yandex.cloud.compute.v1.MoveDiskMetadata";
  /** ID of the disk that is being moved. */
  diskId: string;
  /** ID of the folder that the disk is being moved from. */
  sourceFolderId: string;
  /** ID of the folder that the disk is being moved to. */
  destinationFolderId: string;
}

export interface RelocateDiskRequest {
  $type: "yandex.cloud.compute.v1.RelocateDiskRequest";
  /**
   * ID of the disk to move.
   *
   * To get the disk ID, make a [DiskService.List] request.
   */
  diskId: string;
  /**
   * ID of the availability zone to move the disk to.
   *
   * To get the zone ID, make a [ZoneService.List] request.
   */
  destinationZoneId: string;
}

export interface RelocateDiskMetadata {
  $type: "yandex.cloud.compute.v1.RelocateDiskMetadata";
  /** ID of the disk that is being moved. */
  diskId: string;
  /** ID of the availability zone that the disk is being moved from. */
  sourceZoneId: string;
  /** ID of the availability zone that the disk is being moved to. */
  destinationZoneId: string;
}

export interface ListDiskSnapshotSchedulesRequest {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest";
  /** ID of the disk to list snapshot schedules for. */
  diskId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListDiskSnapshotSchedulesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDiskSnapshotSchedulesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDiskSnapshotSchedulesResponse {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse";
  /** List of snapshot schedules the specified disk is attached to. */
  snapshotSchedules: SnapshotSchedule[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListDiskSnapshotSchedulesRequest.page_size], use `next_page_token` as the value
   * for the [ListDiskSnapshotSchedulesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetDiskRequest: object = {
  $type: "yandex.cloud.compute.v1.GetDiskRequest",
  diskId: "",
};

export const GetDiskRequest = {
  $type: "yandex.cloud.compute.v1.GetDiskRequest" as const,

  encode(
    message: GetDiskRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDiskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetDiskRequest } as GetDiskRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDiskRequest {
    const message = { ...baseGetDiskRequest } as GetDiskRequest;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    return message;
  },

  toJSON(message: GetDiskRequest): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDiskRequest>, I>>(
    object: I
  ): GetDiskRequest {
    const message = { ...baseGetDiskRequest } as GetDiskRequest;
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDiskRequest.$type, GetDiskRequest);

const baseListDisksRequest: object = {
  $type: "yandex.cloud.compute.v1.ListDisksRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListDisksRequest = {
  $type: "yandex.cloud.compute.v1.ListDisksRequest" as const,

  encode(
    message: ListDisksRequest,
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDisksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDisksRequest } as ListDisksRequest;
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
        case 5:
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDisksRequest {
    const message = { ...baseListDisksRequest } as ListDisksRequest;
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(message: ListDisksRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDisksRequest>, I>>(
    object: I
  ): ListDisksRequest {
    const message = { ...baseListDisksRequest } as ListDisksRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDisksRequest.$type, ListDisksRequest);

const baseListDisksResponse: object = {
  $type: "yandex.cloud.compute.v1.ListDisksResponse",
  nextPageToken: "",
};

export const ListDisksResponse = {
  $type: "yandex.cloud.compute.v1.ListDisksResponse" as const,

  encode(
    message: ListDisksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.disks) {
      Disk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDisksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDisksResponse } as ListDisksResponse;
    message.disks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disks.push(Disk.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDisksResponse {
    const message = { ...baseListDisksResponse } as ListDisksResponse;
    message.disks = (object.disks ?? []).map((e: any) => Disk.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDisksResponse): unknown {
    const obj: any = {};
    if (message.disks) {
      obj.disks = message.disks.map((e) => (e ? Disk.toJSON(e) : undefined));
    } else {
      obj.disks = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDisksResponse>, I>>(
    object: I
  ): ListDisksResponse {
    const message = { ...baseListDisksResponse } as ListDisksResponse;
    message.disks = object.disks?.map((e) => Disk.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDisksResponse.$type, ListDisksResponse);

const baseCreateDiskRequest: object = {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest",
  folderId: "",
  name: "",
  description: "",
  typeId: "",
  zoneId: "",
  size: 0,
  blockSize: 0,
  snapshotScheduleIds: "",
};

export const CreateDiskRequest = {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest" as const,

  encode(
    message: CreateDiskRequest,
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
      CreateDiskRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.typeId !== "") {
      writer.uint32(42).string(message.typeId);
    }
    if (message.zoneId !== "") {
      writer.uint32(50).string(message.zoneId);
    }
    if (message.size !== 0) {
      writer.uint32(56).int64(message.size);
    }
    if (message.imageId !== undefined) {
      writer.uint32(66).string(message.imageId);
    }
    if (message.snapshotId !== undefined) {
      writer.uint32(74).string(message.snapshotId);
    }
    if (message.blockSize !== 0) {
      writer.uint32(80).int64(message.blockSize);
    }
    if (message.diskPlacementPolicy !== undefined) {
      DiskPlacementPolicy.encode(
        message.diskPlacementPolicy,
        writer.uint32(90).fork()
      ).ldelim();
    }
    for (const v of message.snapshotScheduleIds) {
      writer.uint32(98).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDiskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDiskRequest } as CreateDiskRequest;
    message.labels = {};
    message.snapshotScheduleIds = [];
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
          const entry4 = CreateDiskRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.typeId = reader.string();
          break;
        case 6:
          message.zoneId = reader.string();
          break;
        case 7:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.imageId = reader.string();
          break;
        case 9:
          message.snapshotId = reader.string();
          break;
        case 10:
          message.blockSize = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.diskPlacementPolicy = DiskPlacementPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.snapshotScheduleIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDiskRequest {
    const message = { ...baseCreateDiskRequest } as CreateDiskRequest;
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
    message.typeId =
      object.typeId !== undefined && object.typeId !== null
        ? String(object.typeId)
        : "";
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.imageId =
      object.imageId !== undefined && object.imageId !== null
        ? String(object.imageId)
        : undefined;
    message.snapshotId =
      object.snapshotId !== undefined && object.snapshotId !== null
        ? String(object.snapshotId)
        : undefined;
    message.blockSize =
      object.blockSize !== undefined && object.blockSize !== null
        ? Number(object.blockSize)
        : 0;
    message.diskPlacementPolicy =
      object.diskPlacementPolicy !== undefined &&
      object.diskPlacementPolicy !== null
        ? DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
        : undefined;
    message.snapshotScheduleIds = (object.snapshotScheduleIds ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: CreateDiskRequest): unknown {
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
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.imageId !== undefined && (obj.imageId = message.imageId);
    message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
    message.blockSize !== undefined &&
      (obj.blockSize = Math.round(message.blockSize));
    message.diskPlacementPolicy !== undefined &&
      (obj.diskPlacementPolicy = message.diskPlacementPolicy
        ? DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
        : undefined);
    if (message.snapshotScheduleIds) {
      obj.snapshotScheduleIds = message.snapshotScheduleIds.map((e) => e);
    } else {
      obj.snapshotScheduleIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDiskRequest>, I>>(
    object: I
  ): CreateDiskRequest {
    const message = { ...baseCreateDiskRequest } as CreateDiskRequest;
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
    message.typeId = object.typeId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.size = object.size ?? 0;
    message.imageId = object.imageId ?? undefined;
    message.snapshotId = object.snapshotId ?? undefined;
    message.blockSize = object.blockSize ?? 0;
    message.diskPlacementPolicy =
      object.diskPlacementPolicy !== undefined &&
      object.diskPlacementPolicy !== null
        ? DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
        : undefined;
    message.snapshotScheduleIds =
      object.snapshotScheduleIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateDiskRequest.$type, CreateDiskRequest);

const baseCreateDiskRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateDiskRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry" as const,

  encode(
    message: CreateDiskRequest_LabelsEntry,
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
  ): CreateDiskRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDiskRequest_LabelsEntry,
    } as CreateDiskRequest_LabelsEntry;
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

  fromJSON(object: any): CreateDiskRequest_LabelsEntry {
    const message = {
      ...baseCreateDiskRequest_LabelsEntry,
    } as CreateDiskRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateDiskRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDiskRequest_LabelsEntry>, I>>(
    object: I
  ): CreateDiskRequest_LabelsEntry {
    const message = {
      ...baseCreateDiskRequest_LabelsEntry,
    } as CreateDiskRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateDiskRequest_LabelsEntry.$type,
  CreateDiskRequest_LabelsEntry
);

const baseCreateDiskMetadata: object = {
  $type: "yandex.cloud.compute.v1.CreateDiskMetadata",
  diskId: "",
};

export const CreateDiskMetadata = {
  $type: "yandex.cloud.compute.v1.CreateDiskMetadata" as const,

  encode(
    message: CreateDiskMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDiskMetadata } as CreateDiskMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDiskMetadata {
    const message = { ...baseCreateDiskMetadata } as CreateDiskMetadata;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    return message;
  },

  toJSON(message: CreateDiskMetadata): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDiskMetadata>, I>>(
    object: I
  ): CreateDiskMetadata {
    const message = { ...baseCreateDiskMetadata } as CreateDiskMetadata;
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDiskMetadata.$type, CreateDiskMetadata);

const baseUpdateDiskRequest: object = {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest",
  diskId: "",
  name: "",
  description: "",
  size: 0,
};

export const UpdateDiskRequest = {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest" as const,

  encode(
    message: UpdateDiskRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
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
      UpdateDiskRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    if (message.diskPlacementPolicy !== undefined) {
      DiskPlacementPolicy.encode(
        message.diskPlacementPolicy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDiskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDiskRequest } as UpdateDiskRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
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
          const entry5 = UpdateDiskRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.diskPlacementPolicy = DiskPlacementPolicy.decode(
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

  fromJSON(object: any): UpdateDiskRequest {
    const message = { ...baseUpdateDiskRequest } as UpdateDiskRequest;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
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
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.diskPlacementPolicy =
      object.diskPlacementPolicy !== undefined &&
      object.diskPlacementPolicy !== null
        ? DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
        : undefined;
    return message;
  },

  toJSON(message: UpdateDiskRequest): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
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
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.diskPlacementPolicy !== undefined &&
      (obj.diskPlacementPolicy = message.diskPlacementPolicy
        ? DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDiskRequest>, I>>(
    object: I
  ): UpdateDiskRequest {
    const message = { ...baseUpdateDiskRequest } as UpdateDiskRequest;
    message.diskId = object.diskId ?? "";
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
    message.size = object.size ?? 0;
    message.diskPlacementPolicy =
      object.diskPlacementPolicy !== undefined &&
      object.diskPlacementPolicy !== null
        ? DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateDiskRequest.$type, UpdateDiskRequest);

const baseUpdateDiskRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateDiskRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry" as const,

  encode(
    message: UpdateDiskRequest_LabelsEntry,
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
  ): UpdateDiskRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDiskRequest_LabelsEntry,
    } as UpdateDiskRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateDiskRequest_LabelsEntry {
    const message = {
      ...baseUpdateDiskRequest_LabelsEntry,
    } as UpdateDiskRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateDiskRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDiskRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateDiskRequest_LabelsEntry {
    const message = {
      ...baseUpdateDiskRequest_LabelsEntry,
    } as UpdateDiskRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDiskRequest_LabelsEntry.$type,
  UpdateDiskRequest_LabelsEntry
);

const baseUpdateDiskMetadata: object = {
  $type: "yandex.cloud.compute.v1.UpdateDiskMetadata",
  diskId: "",
};

export const UpdateDiskMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateDiskMetadata" as const,

  encode(
    message: UpdateDiskMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDiskMetadata } as UpdateDiskMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDiskMetadata {
    const message = { ...baseUpdateDiskMetadata } as UpdateDiskMetadata;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    return message;
  },

  toJSON(message: UpdateDiskMetadata): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDiskMetadata>, I>>(
    object: I
  ): UpdateDiskMetadata {
    const message = { ...baseUpdateDiskMetadata } as UpdateDiskMetadata;
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDiskMetadata.$type, UpdateDiskMetadata);

const baseDeleteDiskRequest: object = {
  $type: "yandex.cloud.compute.v1.DeleteDiskRequest",
  diskId: "",
};

export const DeleteDiskRequest = {
  $type: "yandex.cloud.compute.v1.DeleteDiskRequest" as const,

  encode(
    message: DeleteDiskRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDiskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteDiskRequest } as DeleteDiskRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDiskRequest {
    const message = { ...baseDeleteDiskRequest } as DeleteDiskRequest;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    return message;
  },

  toJSON(message: DeleteDiskRequest): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDiskRequest>, I>>(
    object: I
  ): DeleteDiskRequest {
    const message = { ...baseDeleteDiskRequest } as DeleteDiskRequest;
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDiskRequest.$type, DeleteDiskRequest);

const baseDeleteDiskMetadata: object = {
  $type: "yandex.cloud.compute.v1.DeleteDiskMetadata",
  diskId: "",
};

export const DeleteDiskMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteDiskMetadata" as const,

  encode(
    message: DeleteDiskMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteDiskMetadata } as DeleteDiskMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDiskMetadata {
    const message = { ...baseDeleteDiskMetadata } as DeleteDiskMetadata;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    return message;
  },

  toJSON(message: DeleteDiskMetadata): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDiskMetadata>, I>>(
    object: I
  ): DeleteDiskMetadata {
    const message = { ...baseDeleteDiskMetadata } as DeleteDiskMetadata;
    message.diskId = object.diskId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDiskMetadata.$type, DeleteDiskMetadata);

const baseListDiskOperationsRequest: object = {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest",
  diskId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListDiskOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest" as const,

  encode(
    message: ListDiskOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
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
  ): ListDiskOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskOperationsRequest,
    } as ListDiskOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
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

  fromJSON(object: any): ListDiskOperationsRequest {
    const message = {
      ...baseListDiskOperationsRequest,
    } as ListDiskOperationsRequest;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
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

  toJSON(message: ListDiskOperationsRequest): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDiskOperationsRequest>, I>>(
    object: I
  ): ListDiskOperationsRequest {
    const message = {
      ...baseListDiskOperationsRequest,
    } as ListDiskOperationsRequest;
    message.diskId = object.diskId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskOperationsRequest.$type,
  ListDiskOperationsRequest
);

const baseListDiskOperationsResponse: object = {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse",
  nextPageToken: "",
};

export const ListDiskOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse" as const,

  encode(
    message: ListDiskOperationsResponse,
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
  ): ListDiskOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskOperationsResponse,
    } as ListDiskOperationsResponse;
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

  fromJSON(object: any): ListDiskOperationsResponse {
    const message = {
      ...baseListDiskOperationsResponse,
    } as ListDiskOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDiskOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListDiskOperationsResponse>, I>>(
    object: I
  ): ListDiskOperationsResponse {
    const message = {
      ...baseListDiskOperationsResponse,
    } as ListDiskOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskOperationsResponse.$type,
  ListDiskOperationsResponse
);

const baseMoveDiskRequest: object = {
  $type: "yandex.cloud.compute.v1.MoveDiskRequest",
  diskId: "",
  destinationFolderId: "",
};

export const MoveDiskRequest = {
  $type: "yandex.cloud.compute.v1.MoveDiskRequest" as const,

  encode(
    message: MoveDiskRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveDiskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveDiskRequest } as MoveDiskRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
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

  fromJSON(object: any): MoveDiskRequest {
    const message = { ...baseMoveDiskRequest } as MoveDiskRequest;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveDiskRequest): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveDiskRequest>, I>>(
    object: I
  ): MoveDiskRequest {
    const message = { ...baseMoveDiskRequest } as MoveDiskRequest;
    message.diskId = object.diskId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveDiskRequest.$type, MoveDiskRequest);

const baseMoveDiskMetadata: object = {
  $type: "yandex.cloud.compute.v1.MoveDiskMetadata",
  diskId: "",
  sourceFolderId: "",
  destinationFolderId: "",
};

export const MoveDiskMetadata = {
  $type: "yandex.cloud.compute.v1.MoveDiskMetadata" as const,

  encode(
    message: MoveDiskMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.sourceFolderId !== "") {
      writer.uint32(18).string(message.sourceFolderId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(26).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveDiskMetadata } as MoveDiskMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
          break;
        case 2:
          message.sourceFolderId = reader.string();
          break;
        case 3:
          message.destinationFolderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveDiskMetadata {
    const message = { ...baseMoveDiskMetadata } as MoveDiskMetadata;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    message.sourceFolderId =
      object.sourceFolderId !== undefined && object.sourceFolderId !== null
        ? String(object.sourceFolderId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveDiskMetadata): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    message.sourceFolderId !== undefined &&
      (obj.sourceFolderId = message.sourceFolderId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveDiskMetadata>, I>>(
    object: I
  ): MoveDiskMetadata {
    const message = { ...baseMoveDiskMetadata } as MoveDiskMetadata;
    message.diskId = object.diskId ?? "";
    message.sourceFolderId = object.sourceFolderId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveDiskMetadata.$type, MoveDiskMetadata);

const baseRelocateDiskRequest: object = {
  $type: "yandex.cloud.compute.v1.RelocateDiskRequest",
  diskId: "",
  destinationZoneId: "",
};

export const RelocateDiskRequest = {
  $type: "yandex.cloud.compute.v1.RelocateDiskRequest" as const,

  encode(
    message: RelocateDiskRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.destinationZoneId !== "") {
      writer.uint32(18).string(message.destinationZoneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelocateDiskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRelocateDiskRequest } as RelocateDiskRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
          break;
        case 2:
          message.destinationZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelocateDiskRequest {
    const message = { ...baseRelocateDiskRequest } as RelocateDiskRequest;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    message.destinationZoneId =
      object.destinationZoneId !== undefined &&
      object.destinationZoneId !== null
        ? String(object.destinationZoneId)
        : "";
    return message;
  },

  toJSON(message: RelocateDiskRequest): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    message.destinationZoneId !== undefined &&
      (obj.destinationZoneId = message.destinationZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RelocateDiskRequest>, I>>(
    object: I
  ): RelocateDiskRequest {
    const message = { ...baseRelocateDiskRequest } as RelocateDiskRequest;
    message.diskId = object.diskId ?? "";
    message.destinationZoneId = object.destinationZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RelocateDiskRequest.$type, RelocateDiskRequest);

const baseRelocateDiskMetadata: object = {
  $type: "yandex.cloud.compute.v1.RelocateDiskMetadata",
  diskId: "",
  sourceZoneId: "",
  destinationZoneId: "",
};

export const RelocateDiskMetadata = {
  $type: "yandex.cloud.compute.v1.RelocateDiskMetadata" as const,

  encode(
    message: RelocateDiskMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
    }
    if (message.sourceZoneId !== "") {
      writer.uint32(18).string(message.sourceZoneId);
    }
    if (message.destinationZoneId !== "") {
      writer.uint32(26).string(message.destinationZoneId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RelocateDiskMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRelocateDiskMetadata } as RelocateDiskMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
          break;
        case 2:
          message.sourceZoneId = reader.string();
          break;
        case 3:
          message.destinationZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelocateDiskMetadata {
    const message = { ...baseRelocateDiskMetadata } as RelocateDiskMetadata;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
        : "";
    message.sourceZoneId =
      object.sourceZoneId !== undefined && object.sourceZoneId !== null
        ? String(object.sourceZoneId)
        : "";
    message.destinationZoneId =
      object.destinationZoneId !== undefined &&
      object.destinationZoneId !== null
        ? String(object.destinationZoneId)
        : "";
    return message;
  },

  toJSON(message: RelocateDiskMetadata): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    message.sourceZoneId !== undefined &&
      (obj.sourceZoneId = message.sourceZoneId);
    message.destinationZoneId !== undefined &&
      (obj.destinationZoneId = message.destinationZoneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RelocateDiskMetadata>, I>>(
    object: I
  ): RelocateDiskMetadata {
    const message = { ...baseRelocateDiskMetadata } as RelocateDiskMetadata;
    message.diskId = object.diskId ?? "";
    message.sourceZoneId = object.sourceZoneId ?? "";
    message.destinationZoneId = object.destinationZoneId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RelocateDiskMetadata.$type, RelocateDiskMetadata);

const baseListDiskSnapshotSchedulesRequest: object = {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest",
  diskId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListDiskSnapshotSchedulesRequest = {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesRequest" as const,

  encode(
    message: ListDiskSnapshotSchedulesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskId !== "") {
      writer.uint32(10).string(message.diskId);
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
  ): ListDiskSnapshotSchedulesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskSnapshotSchedulesRequest,
    } as ListDiskSnapshotSchedulesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskId = reader.string();
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

  fromJSON(object: any): ListDiskSnapshotSchedulesRequest {
    const message = {
      ...baseListDiskSnapshotSchedulesRequest,
    } as ListDiskSnapshotSchedulesRequest;
    message.diskId =
      object.diskId !== undefined && object.diskId !== null
        ? String(object.diskId)
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

  toJSON(message: ListDiskSnapshotSchedulesRequest): unknown {
    const obj: any = {};
    message.diskId !== undefined && (obj.diskId = message.diskId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListDiskSnapshotSchedulesRequest>, I>
  >(object: I): ListDiskSnapshotSchedulesRequest {
    const message = {
      ...baseListDiskSnapshotSchedulesRequest,
    } as ListDiskSnapshotSchedulesRequest;
    message.diskId = object.diskId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskSnapshotSchedulesRequest.$type,
  ListDiskSnapshotSchedulesRequest
);

const baseListDiskSnapshotSchedulesResponse: object = {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse",
  nextPageToken: "",
};

export const ListDiskSnapshotSchedulesResponse = {
  $type: "yandex.cloud.compute.v1.ListDiskSnapshotSchedulesResponse" as const,

  encode(
    message: ListDiskSnapshotSchedulesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.snapshotSchedules) {
      SnapshotSchedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDiskSnapshotSchedulesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskSnapshotSchedulesResponse,
    } as ListDiskSnapshotSchedulesResponse;
    message.snapshotSchedules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshotSchedules.push(
            SnapshotSchedule.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListDiskSnapshotSchedulesResponse {
    const message = {
      ...baseListDiskSnapshotSchedulesResponse,
    } as ListDiskSnapshotSchedulesResponse;
    message.snapshotSchedules = (object.snapshotSchedules ?? []).map((e: any) =>
      SnapshotSchedule.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDiskSnapshotSchedulesResponse): unknown {
    const obj: any = {};
    if (message.snapshotSchedules) {
      obj.snapshotSchedules = message.snapshotSchedules.map((e) =>
        e ? SnapshotSchedule.toJSON(e) : undefined
      );
    } else {
      obj.snapshotSchedules = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListDiskSnapshotSchedulesResponse>, I>
  >(object: I): ListDiskSnapshotSchedulesResponse {
    const message = {
      ...baseListDiskSnapshotSchedulesResponse,
    } as ListDiskSnapshotSchedulesResponse;
    message.snapshotSchedules =
      object.snapshotSchedules?.map((e) => SnapshotSchedule.fromPartial(e)) ||
      [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskSnapshotSchedulesResponse.$type,
  ListDiskSnapshotSchedulesResponse
);

/** A set of methods for managing Disk resources. */
export const DiskServiceService = {
  /**
   * Returns the specified Disk resource.
   *
   * To get the list of available Disk resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.DiskService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDiskRequest) =>
      Buffer.from(GetDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDiskRequest.decode(value),
    responseSerialize: (value: Disk) =>
      Buffer.from(Disk.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Disk.decode(value),
  },
  /** Retrieves the list of Disk resources in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.DiskService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDisksRequest) =>
      Buffer.from(ListDisksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDisksRequest.decode(value),
    responseSerialize: (value: ListDisksResponse) =>
      Buffer.from(ListDisksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDisksResponse.decode(value),
  },
  /**
   * Creates a disk in the specified folder.
   *
   * You can create an empty disk or restore it from a snapshot or an image.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: {
    path: "/yandex.cloud.compute.v1.DiskService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDiskRequest) =>
      Buffer.from(CreateDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDiskRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified disk. */
  update: {
    path: "/yandex.cloud.compute.v1.DiskService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDiskRequest) =>
      Buffer.from(UpdateDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDiskRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified disk.
   *
   * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
   * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
   *
   * It is not possible to delete a disk that is attached to an instance.
   */
  delete: {
    path: "/yandex.cloud.compute.v1.DiskService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDiskRequest) =>
      Buffer.from(DeleteDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDiskRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified disk. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.DiskService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDiskOperationsRequest) =>
      Buffer.from(ListDiskOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDiskOperationsRequest.decode(value),
    responseSerialize: (value: ListDiskOperationsResponse) =>
      Buffer.from(ListDiskOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDiskOperationsResponse.decode(value),
  },
  /** Moves the specified disk to another folder of the same cloud. */
  move: {
    path: "/yandex.cloud.compute.v1.DiskService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveDiskRequest) =>
      Buffer.from(MoveDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveDiskRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Moves the specified disk to another availability zone
   *
   * Disk must be detached from instances. To move attached
   * disk use [InstanceService.Relocate] request.
   */
  relocate: {
    path: "/yandex.cloud.compute.v1.DiskService/Relocate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RelocateDiskRequest) =>
      Buffer.from(RelocateDiskRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RelocateDiskRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of snapshot schedules the specified disk is attached to. */
  listSnapshotSchedules: {
    path: "/yandex.cloud.compute.v1.DiskService/ListSnapshotSchedules",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDiskSnapshotSchedulesRequest) =>
      Buffer.from(ListDiskSnapshotSchedulesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDiskSnapshotSchedulesRequest.decode(value),
    responseSerialize: (value: ListDiskSnapshotSchedulesResponse) =>
      Buffer.from(ListDiskSnapshotSchedulesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDiskSnapshotSchedulesResponse.decode(value),
  },
} as const;

export interface DiskServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Disk resource.
   *
   * To get the list of available Disk resources, make a [List] request.
   */
  get: handleUnaryCall<GetDiskRequest, Disk>;
  /** Retrieves the list of Disk resources in the specified folder. */
  list: handleUnaryCall<ListDisksRequest, ListDisksResponse>;
  /**
   * Creates a disk in the specified folder.
   *
   * You can create an empty disk or restore it from a snapshot or an image.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create: handleUnaryCall<CreateDiskRequest, Operation>;
  /** Updates the specified disk. */
  update: handleUnaryCall<UpdateDiskRequest, Operation>;
  /**
   * Deletes the specified disk.
   *
   * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
   * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
   *
   * It is not possible to delete a disk that is attached to an instance.
   */
  delete: handleUnaryCall<DeleteDiskRequest, Operation>;
  /** Lists operations for the specified disk. */
  listOperations: handleUnaryCall<
    ListDiskOperationsRequest,
    ListDiskOperationsResponse
  >;
  /** Moves the specified disk to another folder of the same cloud. */
  move: handleUnaryCall<MoveDiskRequest, Operation>;
  /**
   * Moves the specified disk to another availability zone
   *
   * Disk must be detached from instances. To move attached
   * disk use [InstanceService.Relocate] request.
   */
  relocate: handleUnaryCall<RelocateDiskRequest, Operation>;
  /** Retrieves the list of snapshot schedules the specified disk is attached to. */
  listSnapshotSchedules: handleUnaryCall<
    ListDiskSnapshotSchedulesRequest,
    ListDiskSnapshotSchedulesResponse
  >;
}

export interface DiskServiceClient extends Client {
  /**
   * Returns the specified Disk resource.
   *
   * To get the list of available Disk resources, make a [List] request.
   */
  get(
    request: GetDiskRequest,
    callback: (error: ServiceError | null, response: Disk) => void
  ): ClientUnaryCall;
  get(
    request: GetDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Disk) => void
  ): ClientUnaryCall;
  get(
    request: GetDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Disk) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Disk resources in the specified folder. */
  list(
    request: ListDisksRequest,
    callback: (error: ServiceError | null, response: ListDisksResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListDisksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListDisksResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListDisksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListDisksResponse) => void
  ): ClientUnaryCall;
  /**
   * Creates a disk in the specified folder.
   *
   * You can create an empty disk or restore it from a snapshot or an image.
   * Method starts an asynchronous operation that can be cancelled while it is in progress.
   */
  create(
    request: CreateDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified disk. */
  update(
    request: UpdateDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Deletes the specified disk.
   *
   * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
   * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
   *
   * It is not possible to delete a disk that is attached to an instance.
   */
  delete(
    request: DeleteDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified disk. */
  listOperations(
    request: ListDiskOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDiskOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDiskOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDiskOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDiskOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDiskOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Moves the specified disk to another folder of the same cloud. */
  move(
    request: MoveDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Moves the specified disk to another availability zone
   *
   * Disk must be detached from instances. To move attached
   * disk use [InstanceService.Relocate] request.
   */
  relocate(
    request: RelocateDiskRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  relocate(
    request: RelocateDiskRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  relocate(
    request: RelocateDiskRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves the list of snapshot schedules the specified disk is attached to. */
  listSnapshotSchedules(
    request: ListDiskSnapshotSchedulesRequest,
    callback: (
      error: ServiceError | null,
      response: ListDiskSnapshotSchedulesResponse
    ) => void
  ): ClientUnaryCall;
  listSnapshotSchedules(
    request: ListDiskSnapshotSchedulesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDiskSnapshotSchedulesResponse
    ) => void
  ): ClientUnaryCall;
  listSnapshotSchedules(
    request: ListDiskSnapshotSchedulesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDiskSnapshotSchedulesResponse
    ) => void
  ): ClientUnaryCall;
}

export const DiskServiceClient = makeGenericClientConstructor(
  DiskServiceService,
  "yandex.cloud.compute.v1.DiskService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): DiskServiceClient;
  service: typeof DiskServiceService;
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
