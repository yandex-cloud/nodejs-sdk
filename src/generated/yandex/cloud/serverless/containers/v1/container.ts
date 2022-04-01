/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.serverless.containers.v1";

export interface Container {
  $type: "yandex.cloud.serverless.containers.v1.Container";
  id: string;
  folderId: string;
  createdAt?: Date;
  name: string;
  description: string;
  labels: { [key: string]: string };
  url: string;
  status: Container_Status;
}

export enum Container_Status {
  STATUS_UNSPECIFIED = 0,
  CREATING = 1,
  ACTIVE = 2,
  DELETING = 3,
  ERROR = 4,
  UNRECOGNIZED = -1,
}

export function container_StatusFromJSON(object: any): Container_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Container_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Container_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Container_Status.ACTIVE;
    case 3:
    case "DELETING":
      return Container_Status.DELETING;
    case 4:
    case "ERROR":
      return Container_Status.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Container_Status.UNRECOGNIZED;
  }
}

export function container_StatusToJSON(object: Container_Status): string {
  switch (object) {
    case Container_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Container_Status.CREATING:
      return "CREATING";
    case Container_Status.ACTIVE:
      return "ACTIVE";
    case Container_Status.DELETING:
      return "DELETING";
    case Container_Status.ERROR:
      return "ERROR";
    default:
      return "UNKNOWN";
  }
}

export interface Container_LabelsEntry {
  $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry";
  key: string;
  value: string;
}

export interface Revision {
  $type: "yandex.cloud.serverless.containers.v1.Revision";
  id: string;
  containerId: string;
  description: string;
  createdAt?: Date;
  image?: Image;
  resources?: Resources;
  executionTimeout?: Duration;
  concurrency: number;
  serviceAccountId: string;
  status: Revision_Status;
  secrets: Secret[];
  connectivity?: Connectivity;
}

export enum Revision_Status {
  STATUS_UNSPECIFIED = 0,
  CREATING = 1,
  ACTIVE = 2,
  OBSOLETE = 3,
  UNRECOGNIZED = -1,
}

export function revision_StatusFromJSON(object: any): Revision_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Revision_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Revision_Status.CREATING;
    case 2:
    case "ACTIVE":
      return Revision_Status.ACTIVE;
    case 3:
    case "OBSOLETE":
      return Revision_Status.OBSOLETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Revision_Status.UNRECOGNIZED;
  }
}

export function revision_StatusToJSON(object: Revision_Status): string {
  switch (object) {
    case Revision_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Revision_Status.CREATING:
      return "CREATING";
    case Revision_Status.ACTIVE:
      return "ACTIVE";
    case Revision_Status.OBSOLETE:
      return "OBSOLETE";
    default:
      return "UNKNOWN";
  }
}

export interface Image {
  $type: "yandex.cloud.serverless.containers.v1.Image";
  imageUrl: string;
  imageDigest: string;
  command?: Command;
  args?: Args;
  environment: { [key: string]: string };
  workingDir: string;
}

export interface Image_EnvironmentEntry {
  $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry";
  key: string;
  value: string;
}

export interface Command {
  $type: "yandex.cloud.serverless.containers.v1.Command";
  command: string[];
}

export interface Args {
  $type: "yandex.cloud.serverless.containers.v1.Args";
  args: string[];
}

export interface Resources {
  $type: "yandex.cloud.serverless.containers.v1.Resources";
  memory: number;
  cores: number;
  coreFraction: number;
}

export interface Secret {
  $type: "yandex.cloud.serverless.containers.v1.Secret";
  id: string;
  versionId: string;
  key: string;
  environmentVariable: string | undefined;
}

export interface Connectivity {
  $type: "yandex.cloud.serverless.containers.v1.Connectivity";
  networkId: string;
  subnetIds: string[];
}

const baseContainer: object = {
  $type: "yandex.cloud.serverless.containers.v1.Container",
  id: "",
  folderId: "",
  name: "",
  description: "",
  url: "",
  status: 0,
};

export const Container = {
  $type: "yandex.cloud.serverless.containers.v1.Container" as const,

  encode(
    message: Container,
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
      Container_LabelsEntry.encode(
        {
          $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.url !== "") {
      writer.uint32(66).string(message.url);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Container {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContainer } as Container;
    message.labels = {};
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
        case 6:
          const entry6 = Container_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 8:
          message.url = reader.string();
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Container {
    const message = { ...baseContainer } as Container;
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
    message.url =
      object.url !== undefined && object.url !== null ? String(object.url) : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? container_StatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: Container): unknown {
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
    message.url !== undefined && (obj.url = message.url);
    message.status !== undefined &&
      (obj.status = container_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Container>, I>>(
    object: I
  ): Container {
    const message = { ...baseContainer } as Container;
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
    message.url = object.url ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Container.$type, Container);

const baseContainer_LabelsEntry: object = {
  $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry",
  key: "",
  value: "",
};

export const Container_LabelsEntry = {
  $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry" as const,

  encode(
    message: Container_LabelsEntry,
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
  ): Container_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContainer_LabelsEntry } as Container_LabelsEntry;
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

  fromJSON(object: any): Container_LabelsEntry {
    const message = { ...baseContainer_LabelsEntry } as Container_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Container_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Container_LabelsEntry>, I>>(
    object: I
  ): Container_LabelsEntry {
    const message = { ...baseContainer_LabelsEntry } as Container_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Container_LabelsEntry.$type, Container_LabelsEntry);

const baseRevision: object = {
  $type: "yandex.cloud.serverless.containers.v1.Revision",
  id: "",
  containerId: "",
  description: "",
  concurrency: 0,
  serviceAccountId: "",
  status: 0,
};

export const Revision = {
  $type: "yandex.cloud.serverless.containers.v1.Revision" as const,

  encode(
    message: Revision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.containerId !== "") {
      writer.uint32(18).string(message.containerId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.image !== undefined) {
      Image.encode(message.image, writer.uint32(42).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(50).fork()).ldelim();
    }
    if (message.executionTimeout !== undefined) {
      Duration.encode(
        message.executionTimeout,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.concurrency !== 0) {
      writer.uint32(64).int64(message.concurrency);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.connectivity !== undefined) {
      Connectivity.encode(
        message.connectivity,
        writer.uint32(98).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Revision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRevision } as Revision;
    message.secrets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.containerId = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.image = Image.decode(reader, reader.uint32());
          break;
        case 6:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 7:
          message.executionTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.concurrency = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.serviceAccountId = reader.string();
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.secrets.push(Secret.decode(reader, reader.uint32()));
          break;
        case 12:
          message.connectivity = Connectivity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Revision {
    const message = { ...baseRevision } as Revision;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.containerId =
      object.containerId !== undefined && object.containerId !== null
        ? String(object.containerId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.image =
      object.image !== undefined && object.image !== null
        ? Image.fromJSON(object.image)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.executionTimeout =
      object.executionTimeout !== undefined && object.executionTimeout !== null
        ? Duration.fromJSON(object.executionTimeout)
        : undefined;
    message.concurrency =
      object.concurrency !== undefined && object.concurrency !== null
        ? Number(object.concurrency)
        : 0;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? revision_StatusFromJSON(object.status)
        : 0;
    message.secrets = (object.secrets ?? []).map((e: any) =>
      Secret.fromJSON(e)
    );
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromJSON(object.connectivity)
        : undefined;
    return message;
  },

  toJSON(message: Revision): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.containerId !== undefined &&
      (obj.containerId = message.containerId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.image !== undefined &&
      (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.executionTimeout !== undefined &&
      (obj.executionTimeout = message.executionTimeout
        ? Duration.toJSON(message.executionTimeout)
        : undefined);
    message.concurrency !== undefined &&
      (obj.concurrency = Math.round(message.concurrency));
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.status !== undefined &&
      (obj.status = revision_StatusToJSON(message.status));
    if (message.secrets) {
      obj.secrets = message.secrets.map((e) =>
        e ? Secret.toJSON(e) : undefined
      );
    } else {
      obj.secrets = [];
    }
    message.connectivity !== undefined &&
      (obj.connectivity = message.connectivity
        ? Connectivity.toJSON(message.connectivity)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Revision>, I>>(object: I): Revision {
    const message = { ...baseRevision } as Revision;
    message.id = object.id ?? "";
    message.containerId = object.containerId ?? "";
    message.description = object.description ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.image =
      object.image !== undefined && object.image !== null
        ? Image.fromPartial(object.image)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.executionTimeout =
      object.executionTimeout !== undefined && object.executionTimeout !== null
        ? Duration.fromPartial(object.executionTimeout)
        : undefined;
    message.concurrency = object.concurrency ?? 0;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.status = object.status ?? 0;
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.connectivity =
      object.connectivity !== undefined && object.connectivity !== null
        ? Connectivity.fromPartial(object.connectivity)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Revision.$type, Revision);

const baseImage: object = {
  $type: "yandex.cloud.serverless.containers.v1.Image",
  imageUrl: "",
  imageDigest: "",
  workingDir: "",
};

export const Image = {
  $type: "yandex.cloud.serverless.containers.v1.Image" as const,

  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imageUrl !== "") {
      writer.uint32(10).string(message.imageUrl);
    }
    if (message.imageDigest !== "") {
      writer.uint32(18).string(message.imageDigest);
    }
    if (message.command !== undefined) {
      Command.encode(message.command, writer.uint32(26).fork()).ldelim();
    }
    if (message.args !== undefined) {
      Args.encode(message.args, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.environment).forEach(([key, value]) => {
      Image_EnvironmentEntry.encode(
        {
          $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.workingDir !== "") {
      writer.uint32(50).string(message.workingDir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseImage } as Image;
    message.environment = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.imageUrl = reader.string();
          break;
        case 2:
          message.imageDigest = reader.string();
          break;
        case 3:
          message.command = Command.decode(reader, reader.uint32());
          break;
        case 4:
          message.args = Args.decode(reader, reader.uint32());
          break;
        case 5:
          const entry5 = Image_EnvironmentEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.environment[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.workingDir = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Image {
    const message = { ...baseImage } as Image;
    message.imageUrl =
      object.imageUrl !== undefined && object.imageUrl !== null
        ? String(object.imageUrl)
        : "";
    message.imageDigest =
      object.imageDigest !== undefined && object.imageDigest !== null
        ? String(object.imageDigest)
        : "";
    message.command =
      object.command !== undefined && object.command !== null
        ? Command.fromJSON(object.command)
        : undefined;
    message.args =
      object.args !== undefined && object.args !== null
        ? Args.fromJSON(object.args)
        : undefined;
    message.environment = Object.entries(object.environment ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.workingDir =
      object.workingDir !== undefined && object.workingDir !== null
        ? String(object.workingDir)
        : "";
    return message;
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.imageDigest !== undefined &&
      (obj.imageDigest = message.imageDigest);
    message.command !== undefined &&
      (obj.command = message.command
        ? Command.toJSON(message.command)
        : undefined);
    message.args !== undefined &&
      (obj.args = message.args ? Args.toJSON(message.args) : undefined);
    obj.environment = {};
    if (message.environment) {
      Object.entries(message.environment).forEach(([k, v]) => {
        obj.environment[k] = v;
      });
    }
    message.workingDir !== undefined && (obj.workingDir = message.workingDir);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
    const message = { ...baseImage } as Image;
    message.imageUrl = object.imageUrl ?? "";
    message.imageDigest = object.imageDigest ?? "";
    message.command =
      object.command !== undefined && object.command !== null
        ? Command.fromPartial(object.command)
        : undefined;
    message.args =
      object.args !== undefined && object.args !== null
        ? Args.fromPartial(object.args)
        : undefined;
    message.environment = Object.entries(object.environment ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.workingDir = object.workingDir ?? "";
    return message;
  },
};

messageTypeRegistry.set(Image.$type, Image);

const baseImage_EnvironmentEntry: object = {
  $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry",
  key: "",
  value: "",
};

export const Image_EnvironmentEntry = {
  $type:
    "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry" as const,

  encode(
    message: Image_EnvironmentEntry,
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
  ): Image_EnvironmentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseImage_EnvironmentEntry } as Image_EnvironmentEntry;
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

  fromJSON(object: any): Image_EnvironmentEntry {
    const message = { ...baseImage_EnvironmentEntry } as Image_EnvironmentEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Image_EnvironmentEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Image_EnvironmentEntry>, I>>(
    object: I
  ): Image_EnvironmentEntry {
    const message = { ...baseImage_EnvironmentEntry } as Image_EnvironmentEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Image_EnvironmentEntry.$type, Image_EnvironmentEntry);

const baseCommand: object = {
  $type: "yandex.cloud.serverless.containers.v1.Command",
  command: "",
};

export const Command = {
  $type: "yandex.cloud.serverless.containers.v1.Command" as const,

  encode(
    message: Command,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.command) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommand } as Command;
    message.command = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.command.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Command {
    const message = { ...baseCommand } as Command;
    message.command = (object.command ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    if (message.command) {
      obj.command = message.command.map((e) => e);
    } else {
      obj.command = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = { ...baseCommand } as Command;
    message.command = object.command?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Command.$type, Command);

const baseArgs: object = {
  $type: "yandex.cloud.serverless.containers.v1.Args",
  args: "",
};

export const Args = {
  $type: "yandex.cloud.serverless.containers.v1.Args" as const,

  encode(message: Args, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Args {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseArgs } as Args;
    message.args = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Args {
    const message = { ...baseArgs } as Args;
    message.args = (object.args ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Args): unknown {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map((e) => e);
    } else {
      obj.args = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Args>, I>>(object: I): Args {
    const message = { ...baseArgs } as Args;
    message.args = object.args?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Args.$type, Args);

const baseResources: object = {
  $type: "yandex.cloud.serverless.containers.v1.Resources",
  memory: 0,
  cores: 0,
  coreFraction: 0,
};

export const Resources = {
  $type: "yandex.cloud.serverless.containers.v1.Resources" as const,

  encode(
    message: Resources,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.memory !== 0) {
      writer.uint32(8).int64(message.memory);
    }
    if (message.cores !== 0) {
      writer.uint32(16).int64(message.cores);
    }
    if (message.coreFraction !== 0) {
      writer.uint32(24).int64(message.coreFraction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResources } as Resources;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memory = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.cores = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.coreFraction = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resources {
    const message = { ...baseResources } as Resources;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Number(object.memory)
        : 0;
    message.cores =
      object.cores !== undefined && object.cores !== null
        ? Number(object.cores)
        : 0;
    message.coreFraction =
      object.coreFraction !== undefined && object.coreFraction !== null
        ? Number(object.coreFraction)
        : 0;
    return message;
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    message.memory !== undefined && (obj.memory = Math.round(message.memory));
    message.cores !== undefined && (obj.cores = Math.round(message.cores));
    message.coreFraction !== undefined &&
      (obj.coreFraction = Math.round(message.coreFraction));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(
    object: I
  ): Resources {
    const message = { ...baseResources } as Resources;
    message.memory = object.memory ?? 0;
    message.cores = object.cores ?? 0;
    message.coreFraction = object.coreFraction ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

const baseSecret: object = {
  $type: "yandex.cloud.serverless.containers.v1.Secret",
  id: "",
  versionId: "",
  key: "",
};

export const Secret = {
  $type: "yandex.cloud.serverless.containers.v1.Secret" as const,

  encode(
    message: Secret,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.environmentVariable !== undefined) {
      writer.uint32(34).string(message.environmentVariable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecret } as Secret;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.environmentVariable = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Secret {
    const message = { ...baseSecret } as Secret;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.environmentVariable =
      object.environmentVariable !== undefined &&
      object.environmentVariable !== null
        ? String(object.environmentVariable)
        : undefined;
    return message;
  },

  toJSON(message: Secret): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.key !== undefined && (obj.key = message.key);
    message.environmentVariable !== undefined &&
      (obj.environmentVariable = message.environmentVariable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
    const message = { ...baseSecret } as Secret;
    message.id = object.id ?? "";
    message.versionId = object.versionId ?? "";
    message.key = object.key ?? "";
    message.environmentVariable = object.environmentVariable ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Secret.$type, Secret);

const baseConnectivity: object = {
  $type: "yandex.cloud.serverless.containers.v1.Connectivity",
  networkId: "",
  subnetIds: "",
};

export const Connectivity = {
  $type: "yandex.cloud.serverless.containers.v1.Connectivity" as const,

  encode(
    message: Connectivity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    for (const v of message.subnetIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connectivity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectivity } as Connectivity;
    message.subnetIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        case 2:
          message.subnetIds.push(reader.string());
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
    message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Connectivity): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.subnetIds) {
      obj.subnetIds = message.subnetIds.map((e) => e);
    } else {
      obj.subnetIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Connectivity>, I>>(
    object: I
  ): Connectivity {
    const message = { ...baseConnectivity } as Connectivity;
    message.networkId = object.networkId ?? "";
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Connectivity.$type, Connectivity);

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
