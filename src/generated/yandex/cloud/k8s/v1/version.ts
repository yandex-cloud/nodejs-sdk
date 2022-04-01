/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface VersionInfo {
  $type: "yandex.cloud.k8s.v1.VersionInfo";
  /** Current Kubernetes version, format: major.minor (e.g. 1.15). */
  currentVersion: string;
  /**
   * Newer revisions may include Kubernetes patches (e.g 1.15.1 -> 1.15.2) as well
   * as some internal component updates - new features or bug fixes in Yandex specific
   * components either on the master or nodes.
   */
  newRevisionAvailable: boolean;
  /**
   * Description of the changes to be applied when updating to the latest
   * revision. Empty if new_revision_available is false.
   */
  newRevisionSummary: string;
  /**
   * The current version is on the deprecation schedule, component (master or node group)
   * should be upgraded.
   */
  versionDeprecated: boolean;
}

export interface UpdateVersionSpec {
  $type: "yandex.cloud.k8s.v1.UpdateVersionSpec";
  /** Request update to a newer version of Kubernetes (1.x -> 1.y). */
  version: string | undefined;
  /** Request update to the latest revision for the current version. */
  latestRevision: boolean | undefined;
}

const baseVersionInfo: object = {
  $type: "yandex.cloud.k8s.v1.VersionInfo",
  currentVersion: "",
  newRevisionAvailable: false,
  newRevisionSummary: "",
  versionDeprecated: false,
};

export const VersionInfo = {
  $type: "yandex.cloud.k8s.v1.VersionInfo" as const,

  encode(
    message: VersionInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currentVersion !== "") {
      writer.uint32(10).string(message.currentVersion);
    }
    if (message.newRevisionAvailable === true) {
      writer.uint32(16).bool(message.newRevisionAvailable);
    }
    if (message.newRevisionSummary !== "") {
      writer.uint32(26).string(message.newRevisionSummary);
    }
    if (message.versionDeprecated === true) {
      writer.uint32(32).bool(message.versionDeprecated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersionInfo } as VersionInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentVersion = reader.string();
          break;
        case 2:
          message.newRevisionAvailable = reader.bool();
          break;
        case 3:
          message.newRevisionSummary = reader.string();
          break;
        case 4:
          message.versionDeprecated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VersionInfo {
    const message = { ...baseVersionInfo } as VersionInfo;
    message.currentVersion =
      object.currentVersion !== undefined && object.currentVersion !== null
        ? String(object.currentVersion)
        : "";
    message.newRevisionAvailable =
      object.newRevisionAvailable !== undefined &&
      object.newRevisionAvailable !== null
        ? Boolean(object.newRevisionAvailable)
        : false;
    message.newRevisionSummary =
      object.newRevisionSummary !== undefined &&
      object.newRevisionSummary !== null
        ? String(object.newRevisionSummary)
        : "";
    message.versionDeprecated =
      object.versionDeprecated !== undefined &&
      object.versionDeprecated !== null
        ? Boolean(object.versionDeprecated)
        : false;
    return message;
  },

  toJSON(message: VersionInfo): unknown {
    const obj: any = {};
    message.currentVersion !== undefined &&
      (obj.currentVersion = message.currentVersion);
    message.newRevisionAvailable !== undefined &&
      (obj.newRevisionAvailable = message.newRevisionAvailable);
    message.newRevisionSummary !== undefined &&
      (obj.newRevisionSummary = message.newRevisionSummary);
    message.versionDeprecated !== undefined &&
      (obj.versionDeprecated = message.versionDeprecated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VersionInfo>, I>>(
    object: I
  ): VersionInfo {
    const message = { ...baseVersionInfo } as VersionInfo;
    message.currentVersion = object.currentVersion ?? "";
    message.newRevisionAvailable = object.newRevisionAvailable ?? false;
    message.newRevisionSummary = object.newRevisionSummary ?? "";
    message.versionDeprecated = object.versionDeprecated ?? false;
    return message;
  },
};

messageTypeRegistry.set(VersionInfo.$type, VersionInfo);

const baseUpdateVersionSpec: object = {
  $type: "yandex.cloud.k8s.v1.UpdateVersionSpec",
};

export const UpdateVersionSpec = {
  $type: "yandex.cloud.k8s.v1.UpdateVersionSpec" as const,

  encode(
    message: UpdateVersionSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== undefined) {
      writer.uint32(10).string(message.version);
    }
    if (message.latestRevision !== undefined) {
      writer.uint32(16).bool(message.latestRevision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateVersionSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateVersionSpec } as UpdateVersionSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.latestRevision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateVersionSpec {
    const message = { ...baseUpdateVersionSpec } as UpdateVersionSpec;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : undefined;
    message.latestRevision =
      object.latestRevision !== undefined && object.latestRevision !== null
        ? Boolean(object.latestRevision)
        : undefined;
    return message;
  },

  toJSON(message: UpdateVersionSpec): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.latestRevision !== undefined &&
      (obj.latestRevision = message.latestRevision);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateVersionSpec>, I>>(
    object: I
  ): UpdateVersionSpec {
    const message = { ...baseUpdateVersionSpec } as UpdateVersionSpec;
    message.version = object.version ?? undefined;
    message.latestRevision = object.latestRevision ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateVersionSpec.$type, UpdateVersionSpec);

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
