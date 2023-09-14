/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

/** Group mapping represents which external (federated) groups should match which internal (cloud) groups */
export interface GroupMappingItem {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem";
  /** External group id (received from identity provider) */
  externalGroupId: string;
  /** Internal cloud group id */
  internalGroupId: string;
}

/**
 * Group synchronization status for a specific federation
 * Absence of this object for a federation means that there is no group synchronization set of for the federation.
 */
export interface GroupMapping {
  $type: "yandex.cloud.organizationmanager.v1.GroupMapping";
  /** Federation id */
  federationId: string;
  /** Flag to show whether group synchronization should be enabled for this federation. */
  enabled: boolean;
}

const baseGroupMappingItem: object = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem",
  externalGroupId: "",
  internalGroupId: "",
};

export const GroupMappingItem = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem" as const,

  encode(
    message: GroupMappingItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalGroupId !== "") {
      writer.uint32(10).string(message.externalGroupId);
    }
    if (message.internalGroupId !== "") {
      writer.uint32(18).string(message.internalGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMappingItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupMappingItem } as GroupMappingItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalGroupId = reader.string();
          break;
        case 2:
          message.internalGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupMappingItem {
    const message = { ...baseGroupMappingItem } as GroupMappingItem;
    message.externalGroupId =
      object.externalGroupId !== undefined && object.externalGroupId !== null
        ? String(object.externalGroupId)
        : "";
    message.internalGroupId =
      object.internalGroupId !== undefined && object.internalGroupId !== null
        ? String(object.internalGroupId)
        : "";
    return message;
  },

  toJSON(message: GroupMappingItem): unknown {
    const obj: any = {};
    message.externalGroupId !== undefined &&
      (obj.externalGroupId = message.externalGroupId);
    message.internalGroupId !== undefined &&
      (obj.internalGroupId = message.internalGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupMappingItem>, I>>(
    object: I
  ): GroupMappingItem {
    const message = { ...baseGroupMappingItem } as GroupMappingItem;
    message.externalGroupId = object.externalGroupId ?? "";
    message.internalGroupId = object.internalGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GroupMappingItem.$type, GroupMappingItem);

const baseGroupMapping: object = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMapping",
  federationId: "",
  enabled: false,
};

export const GroupMapping = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMapping" as const,

  encode(
    message: GroupMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupMapping } as GroupMapping;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupMapping {
    const message = { ...baseGroupMapping } as GroupMapping;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    return message;
  },

  toJSON(message: GroupMapping): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupMapping>, I>>(
    object: I
  ): GroupMapping {
    const message = { ...baseGroupMapping } as GroupMapping;
    message.federationId = object.federationId ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(GroupMapping.$type, GroupMapping);

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
