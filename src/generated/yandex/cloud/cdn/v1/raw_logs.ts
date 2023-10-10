/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** Provider side statuses of Raw logs processing. */
export enum RawLogsStatus {
  RAW_LOGS_STATUS_UNSPECIFIED = 0,
  /** RAW_LOGS_STATUS_NOT_ACTIVATED - Raw logs wasn't activated. */
  RAW_LOGS_STATUS_NOT_ACTIVATED = 1,
  /** RAW_LOGS_STATUS_OK - Raw logs was activated, and logs storing process works as expected. */
  RAW_LOGS_STATUS_OK = 2,
  /** RAW_LOGS_STATUS_FAILED - Raw logs was activated, but CDN provider has been failed to store logs. */
  RAW_LOGS_STATUS_FAILED = 3,
  /** RAW_LOGS_STATUS_PENDING - Raw logs was activated, but logs storing process is expected. */
  RAW_LOGS_STATUS_PENDING = 4,
  UNRECOGNIZED = -1,
}

export function rawLogsStatusFromJSON(object: any): RawLogsStatus {
  switch (object) {
    case 0:
    case "RAW_LOGS_STATUS_UNSPECIFIED":
      return RawLogsStatus.RAW_LOGS_STATUS_UNSPECIFIED;
    case 1:
    case "RAW_LOGS_STATUS_NOT_ACTIVATED":
      return RawLogsStatus.RAW_LOGS_STATUS_NOT_ACTIVATED;
    case 2:
    case "RAW_LOGS_STATUS_OK":
      return RawLogsStatus.RAW_LOGS_STATUS_OK;
    case 3:
    case "RAW_LOGS_STATUS_FAILED":
      return RawLogsStatus.RAW_LOGS_STATUS_FAILED;
    case 4:
    case "RAW_LOGS_STATUS_PENDING":
      return RawLogsStatus.RAW_LOGS_STATUS_PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RawLogsStatus.UNRECOGNIZED;
  }
}

export function rawLogsStatusToJSON(object: RawLogsStatus): string {
  switch (object) {
    case RawLogsStatus.RAW_LOGS_STATUS_UNSPECIFIED:
      return "RAW_LOGS_STATUS_UNSPECIFIED";
    case RawLogsStatus.RAW_LOGS_STATUS_NOT_ACTIVATED:
      return "RAW_LOGS_STATUS_NOT_ACTIVATED";
    case RawLogsStatus.RAW_LOGS_STATUS_OK:
      return "RAW_LOGS_STATUS_OK";
    case RawLogsStatus.RAW_LOGS_STATUS_FAILED:
      return "RAW_LOGS_STATUS_FAILED";
    case RawLogsStatus.RAW_LOGS_STATUS_PENDING:
      return "RAW_LOGS_STATUS_PENDING";
    default:
      return "UNKNOWN";
  }
}

/** User settings for Raw logs. */
export interface RawLogsSettings {
  $type: "yandex.cloud.cdn.v1.RawLogsSettings";
  /** Destination S3 bucket name, note that the suer should be owner of the bucket. */
  bucketName: string;
  /** Bucket region, unused for now, could be blank. */
  bucketRegion: string;
  /**
   * file_prefix: prefix each log object name with specified prefix.
   *
   * The prefix makes it simpler for you to locate the log objects.
   * For example, if you specify the prefix value logs/, each log object that
   * S3 creates begins with the logs/ prefix in its key, so pseudo S3 folders
   * could be setup.
   */
  filePrefix: string;
}

const baseRawLogsSettings: object = {
  $type: "yandex.cloud.cdn.v1.RawLogsSettings",
  bucketName: "",
  bucketRegion: "",
  filePrefix: "",
};

export const RawLogsSettings = {
  $type: "yandex.cloud.cdn.v1.RawLogsSettings" as const,

  encode(
    message: RawLogsSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.bucketRegion !== "") {
      writer.uint32(18).string(message.bucketRegion);
    }
    if (message.filePrefix !== "") {
      writer.uint32(26).string(message.filePrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RawLogsSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRawLogsSettings } as RawLogsSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        case 2:
          message.bucketRegion = reader.string();
          break;
        case 3:
          message.filePrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RawLogsSettings {
    const message = { ...baseRawLogsSettings } as RawLogsSettings;
    message.bucketName =
      object.bucketName !== undefined && object.bucketName !== null
        ? String(object.bucketName)
        : "";
    message.bucketRegion =
      object.bucketRegion !== undefined && object.bucketRegion !== null
        ? String(object.bucketRegion)
        : "";
    message.filePrefix =
      object.filePrefix !== undefined && object.filePrefix !== null
        ? String(object.filePrefix)
        : "";
    return message;
  },

  toJSON(message: RawLogsSettings): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.bucketRegion !== undefined &&
      (obj.bucketRegion = message.bucketRegion);
    message.filePrefix !== undefined && (obj.filePrefix = message.filePrefix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RawLogsSettings>, I>>(
    object: I
  ): RawLogsSettings {
    const message = { ...baseRawLogsSettings } as RawLogsSettings;
    message.bucketName = object.bucketName ?? "";
    message.bucketRegion = object.bucketRegion ?? "";
    message.filePrefix = object.filePrefix ?? "";
    return message;
  },
};

messageTypeRegistry.set(RawLogsSettings.$type, RawLogsSettings);

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
