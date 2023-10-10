/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ResourcesSpec,
  AttachedDiskSpec,
  NetworkInterfaceSpec,
} from "../../../../../../yandex/cloud/compute/v1/instance_service";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";

export interface CreateComputeInstance {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance";
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the availability zone where the instance resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request
   */
  zoneId: string;
  /**
   * Computing resources of the instance, such as the amount of memory and number of cores.
   * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
   */
  resourcesSpec?: ResourcesSpec;
  /**
   * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
   * The total size of all keys and values must be less than 512 KB.
   *
   * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
   * The values must be 256 KB or less.
   *
   * For example, you may use the metadata in order to provide your public SSH key to the instance.
   * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
   */
  metadata: { [key: string]: string };
  /** Boot disk to attach to the instance. */
  bootDiskSpec?: AttachedDiskSpec;
  /**
   * Network configuration for the instance. Specifies how the network interface is configured
   * to interact with other services on the internal network and on the internet.
   * Currently only one network interface is supported per instance.
   */
  networkInterfaceSpecs: NetworkInterfaceSpec[];
  /**
   * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   */
  serviceAccountId: string;
}

export interface CreateComputeInstance_LabelsEntry {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateComputeInstance_MetadataEntry {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry";
  key: string;
  value: string;
}

const baseCreateComputeInstance: object = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance",
  zoneId: "",
  serviceAccountId: "",
};

export const CreateComputeInstance = {
  $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance" as const,

  encode(
    message: CreateComputeInstance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateComputeInstance_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(42).string(message.zoneId);
    }
    if (message.resourcesSpec !== undefined) {
      ResourcesSpec.encode(
        message.resourcesSpec,
        writer.uint32(58).fork()
      ).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      CreateComputeInstance_MetadataEntry.encode(
        {
          $type:
            "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(66).fork()
      ).ldelim();
    });
    if (message.bootDiskSpec !== undefined) {
      AttachedDiskSpec.encode(
        message.bootDiskSpec,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.networkInterfaceSpecs) {
      NetworkInterfaceSpec.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(114).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateComputeInstance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateComputeInstance } as CreateComputeInstance;
    message.labels = {};
    message.metadata = {};
    message.networkInterfaceSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          const entry4 = CreateComputeInstance_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.zoneId = reader.string();
          break;
        case 7:
          message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
          break;
        case 8:
          const entry8 = CreateComputeInstance_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry8.value !== undefined) {
            message.metadata[entry8.key] = entry8.value;
          }
          break;
        case 9:
          message.bootDiskSpec = AttachedDiskSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.networkInterfaceSpecs.push(
            NetworkInterfaceSpec.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateComputeInstance {
    const message = { ...baseCreateComputeInstance } as CreateComputeInstance;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.resourcesSpec =
      object.resourcesSpec !== undefined && object.resourcesSpec !== null
        ? ResourcesSpec.fromJSON(object.resourcesSpec)
        : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.bootDiskSpec =
      object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
        ? AttachedDiskSpec.fromJSON(object.bootDiskSpec)
        : undefined;
    message.networkInterfaceSpecs = (object.networkInterfaceSpecs ?? []).map(
      (e: any) => NetworkInterfaceSpec.fromJSON(e)
    );
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: CreateComputeInstance): unknown {
    const obj: any = {};
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.resourcesSpec !== undefined &&
      (obj.resourcesSpec = message.resourcesSpec
        ? ResourcesSpec.toJSON(message.resourcesSpec)
        : undefined);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    message.bootDiskSpec !== undefined &&
      (obj.bootDiskSpec = message.bootDiskSpec
        ? AttachedDiskSpec.toJSON(message.bootDiskSpec)
        : undefined);
    if (message.networkInterfaceSpecs) {
      obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) =>
        e ? NetworkInterfaceSpec.toJSON(e) : undefined
      );
    } else {
      obj.networkInterfaceSpecs = [];
    }
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateComputeInstance>, I>>(
    object: I
  ): CreateComputeInstance {
    const message = { ...baseCreateComputeInstance } as CreateComputeInstance;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.zoneId = object.zoneId ?? "";
    message.resourcesSpec =
      object.resourcesSpec !== undefined && object.resourcesSpec !== null
        ? ResourcesSpec.fromPartial(object.resourcesSpec)
        : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.bootDiskSpec =
      object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
        ? AttachedDiskSpec.fromPartial(object.bootDiskSpec)
        : undefined;
    message.networkInterfaceSpecs =
      object.networkInterfaceSpecs?.map((e) =>
        NetworkInterfaceSpec.fromPartial(e)
      ) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateComputeInstance.$type, CreateComputeInstance);

const baseCreateComputeInstance_LabelsEntry: object = {
  $type:
    "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry",
  key: "",
  value: "",
};

export const CreateComputeInstance_LabelsEntry = {
  $type:
    "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry" as const,

  encode(
    message: CreateComputeInstance_LabelsEntry,
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
  ): CreateComputeInstance_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateComputeInstance_LabelsEntry,
    } as CreateComputeInstance_LabelsEntry;
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

  fromJSON(object: any): CreateComputeInstance_LabelsEntry {
    const message = {
      ...baseCreateComputeInstance_LabelsEntry,
    } as CreateComputeInstance_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateComputeInstance_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateComputeInstance_LabelsEntry>, I>
  >(object: I): CreateComputeInstance_LabelsEntry {
    const message = {
      ...baseCreateComputeInstance_LabelsEntry,
    } as CreateComputeInstance_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateComputeInstance_LabelsEntry.$type,
  CreateComputeInstance_LabelsEntry
);

const baseCreateComputeInstance_MetadataEntry: object = {
  $type:
    "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry",
  key: "",
  value: "",
};

export const CreateComputeInstance_MetadataEntry = {
  $type:
    "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry" as const,

  encode(
    message: CreateComputeInstance_MetadataEntry,
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
  ): CreateComputeInstance_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateComputeInstance_MetadataEntry,
    } as CreateComputeInstance_MetadataEntry;
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

  fromJSON(object: any): CreateComputeInstance_MetadataEntry {
    const message = {
      ...baseCreateComputeInstance_MetadataEntry,
    } as CreateComputeInstance_MetadataEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateComputeInstance_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateComputeInstance_MetadataEntry>, I>
  >(object: I): CreateComputeInstance_MetadataEntry {
    const message = {
      ...baseCreateComputeInstance_MetadataEntry,
    } as CreateComputeInstance_MetadataEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateComputeInstance_MetadataEntry.$type,
  CreateComputeInstance_MetadataEntry
);

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
