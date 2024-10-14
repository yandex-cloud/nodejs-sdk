/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ArtifactSettings } from "../../../../../../yandex/cloud/loadtesting/api/v1/test/artifact_settings";
import { Tag } from "../../../../../../yandex/cloud/loadtesting/api/v1/common/tag";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Test meta information. */
export interface Details {
  $type: "yandex.cloud.loadtesting.api.v1.test.Details";
  /** Name of the test. */
  name: string;
  /** Description of the test. */
  description: string;
  /** Tags assigned to the test. */
  tags: Tag[];
  /** ID of the logging group to which test artifacts are uploaded. */
  loggingLogGroupId: string;
  /** Settings which define where to upload test artifacts and which files should be included. */
  artifactSettings?: ArtifactSettings;
}

const baseDetails: object = {
  $type: "yandex.cloud.loadtesting.api.v1.test.Details",
  name: "",
  description: "",
  loggingLogGroupId: "",
};

export const Details = {
  $type: "yandex.cloud.loadtesting.api.v1.test.Details" as const,

  encode(
    message: Details,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.loggingLogGroupId !== "") {
      writer.uint32(34).string(message.loggingLogGroupId);
    }
    if (message.artifactSettings !== undefined) {
      ArtifactSettings.encode(
        message.artifactSettings,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Details {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDetails } as Details;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.tags.push(Tag.decode(reader, reader.uint32()));
          break;
        case 4:
          message.loggingLogGroupId = reader.string();
          break;
        case 5:
          message.artifactSettings = ArtifactSettings.decode(
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

  fromJSON(object: any): Details {
    const message = { ...baseDetails } as Details;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.tags = (object.tags ?? []).map((e: any) => Tag.fromJSON(e));
    message.loggingLogGroupId =
      object.loggingLogGroupId !== undefined &&
      object.loggingLogGroupId !== null
        ? String(object.loggingLogGroupId)
        : "";
    message.artifactSettings =
      object.artifactSettings !== undefined && object.artifactSettings !== null
        ? ArtifactSettings.fromJSON(object.artifactSettings)
        : undefined;
    return message;
  },

  toJSON(message: Details): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Tag.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    message.loggingLogGroupId !== undefined &&
      (obj.loggingLogGroupId = message.loggingLogGroupId);
    message.artifactSettings !== undefined &&
      (obj.artifactSettings = message.artifactSettings
        ? ArtifactSettings.toJSON(message.artifactSettings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Details>, I>>(object: I): Details {
    const message = { ...baseDetails } as Details;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    message.loggingLogGroupId = object.loggingLogGroupId ?? "";
    message.artifactSettings =
      object.artifactSettings !== undefined && object.artifactSettings !== null
        ? ArtifactSettings.fromPartial(object.artifactSettings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Details.$type, Details);

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
