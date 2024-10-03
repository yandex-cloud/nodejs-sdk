/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.storage.v1";

/** Represents a response of the get object request to S3. */
export interface S3APIGetObjectResponse {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectResponse";
  /** MD5 hash of the object. */
  etag: string;
  /** Unique request ID. */
  requestId: string;
  /** Indicates that a range of bytes was specified in the request. */
  acceptRanges: string;
  /** Specifies caching behavior along the request/reply chain. */
  cacheControl: string;
  /** Specifies presentational information for the object. */
  contentDisposition: string;
  /** Indicates what content encodings have been applied to the object. */
  contentEncoding: string;
  /** The language the content is in. */
  contentLanguage: string;
  /** Size of the body in bytes. */
  contentLength: number;
  /** The portion of the object returned in the response. */
  contentRange: string;
  /** A standard MIME type describing the format of the object data. */
  contentType: string;
  /** Version ID of the object. */
  versionId: string;
  /** The date and time at which the object is no longer cacheable. */
  expiresAt?: Date;
  /** Date and time when the object was last modified. */
  lastModifiedAt?: Date;
  /** Object user-defined metadata. */
  metadata: { [key: string]: string };
  /** Provides storage class information of the object. */
  storageClass: string;
  /** Encryption algorithm used to encrypt the object. */
  serverSideEncryption: string;
  /** ID of the key KMS. */
  sseKmsKeyId: string;
  /** Type of retention put on the object. */
  objectLockMode: string;
  /** Date and time until which the object is retained */
  objectLockRetainUntilDate?: Date;
  /** Type of legal hold put on the object */
  objectLockLegalHoldStatus: string;
}

export interface S3APIGetObjectResponse_MetadataEntry {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectResponse.MetadataEntry";
  key: string;
  value: string;
}

/** Represents a response of the put object request to S3. */
export interface S3APIPutObjectResponse {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectResponse";
  /** MD5 hash of the object. */
  etag: string;
  /** Unique request ID. */
  requestId: string;
  /** Version ID of the object. */
  versionId: string;
}

/** Represents a response of the delete object request to S3. */
export interface S3APIDeleteObjectResponse {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectResponse";
  /** Unique request ID. */
  requestId: string;
  /** Version ID of the object. */
  versionId: string;
}

export interface CopyObjectResult {
  $type: "yandex.cloud.storage.v1.CopyObjectResult";
  /** Returns the ETag of the new object. */
  etag: string;
  /** Creation date of the object. */
  lastModifiedAt?: Date;
}

/** Represents a response of the copy object request to S3. */
export interface S3APICopyObjectResponse {
  $type: "yandex.cloud.storage.v1.S3APICopyObjectResponse";
  /** Container for all response elements. */
  copyObjectResult?: CopyObjectResult;
  /** Unique request ID. */
  requestId: string;
  /** Version ID of the source object that was copied. */
  copySourceVersionId: string;
  /** Version ID of the newly created copy. */
  versionId: string;
}

export interface SuccessfullyDeletedObject {
  $type: "yandex.cloud.storage.v1.SuccessfullyDeletedObject";
  /** The name of the deleted object. */
  key: string;
  /** The version ID of the deleted object. */
  versionId: string;
  /** Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker. */
  deleteMarker: boolean;
  /** The version ID of the delete marker created as a result of the DELETE operation. */
  deleteMarkerVersionId: string;
}

export interface DeleteObjectError {
  $type: "yandex.cloud.storage.v1.DeleteObjectError";
  /** The error key. */
  key: string;
  /** The version ID of the error. */
  versionId: string;
  /** The error code is a string that uniquely identifies an error condition. */
  code: string;
  /** The error message contains a generic description of the error condition in English. */
  msg: string;
}

/** Represents a response of the delete objects request to S3. */
export interface S3APIDeleteObjectsResponse {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectsResponse";
  /** List of successfully deleted objects */
  deleted: SuccessfullyDeletedObject[];
  /** List of objects that attempted to be deleted but encountered an error */
  errors: DeleteObjectError[];
  /** Unique request ID. */
  requestId: string;
}

/** Represents a response of the put object retention request to S3. */
export interface S3APIPutObjectRetentionResponse {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectRetentionResponse";
  /** Unique request ID. */
  requestId: string;
}

export interface ObjectLockRetention {
  $type: "yandex.cloud.storage.v1.ObjectLockRetention";
  /** Indicates the Retention mode for the specified object. */
  mode: string;
  /** The date on which this object lock retention will expire. */
  retainUntilDate?: Date;
}

/** Represents a response of the get object retention request to S3. */
export interface S3APIGetObjectRetentionResponse {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectRetentionResponse";
  /** Unique request ID. */
  requestId: string;
  /** An object retention settings. */
  retention?: ObjectLockRetention;
}

/** Represents a response of the put object retention request to S3. */
export interface S3APIPutObjectLegalHoldResponse {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectLegalHoldResponse";
  /** Unique request ID. */
  requestId: string;
}

export interface ObjectLockLegalHold {
  $type: "yandex.cloud.storage.v1.ObjectLockLegalHold";
  /** Indicates whether the specified object has a legal hold in place. */
  status: string;
}

/** Represents a response of the get object legal hold request to S3. */
export interface S3APIGetObjectLegalHoldResponse {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectLegalHoldResponse";
  /** Unique request ID. */
  requestId: string;
  /** The current legal hold status for the specified object. */
  legalHold?: ObjectLockLegalHold;
}

/** Represents a response of put object tagging request to S3. */
export interface S3APIPutObjectTaggingResponse {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectTaggingResponse";
  /** Unique request ID. */
  requestId: string;
  /** The versionId of the object the tag-set was added to. */
  versionId: string;
}

export interface ObjectTag {
  $type: "yandex.cloud.storage.v1.ObjectTag";
  /** Key of the object tag. */
  key: string;
  /** Value of the object tag. */
  value: string;
}

/** Represents a response of get object tagging request to S3. */
export interface S3APIGetObjectTaggingResponse {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectTaggingResponse";
  /** Unique request ID. */
  requestId: string;
  /** The versionId of the object for which you got the tagging information. */
  versionId: string;
  /** Contains the tag set. */
  tagSet: ObjectTag[];
}

/** Represents a response of delete object tagging request to S3. */
export interface S3APIDeleteObjectTaggingResponse {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectTaggingResponse";
  /** Unique request ID. */
  requestId: string;
  /** The versionId of the object the tag-set was removed from. */
  versionId: string;
}

const baseS3APIGetObjectResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectResponse",
  etag: "",
  requestId: "",
  acceptRanges: "",
  cacheControl: "",
  contentDisposition: "",
  contentEncoding: "",
  contentLanguage: "",
  contentLength: 0,
  contentRange: "",
  contentType: "",
  versionId: "",
  storageClass: "",
  serverSideEncryption: "",
  sseKmsKeyId: "",
  objectLockMode: "",
  objectLockLegalHoldStatus: "",
};

export const S3APIGetObjectResponse = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectResponse" as const,

  encode(
    message: S3APIGetObjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.etag !== "") {
      writer.uint32(10).string(message.etag);
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    if (message.acceptRanges !== "") {
      writer.uint32(26).string(message.acceptRanges);
    }
    if (message.cacheControl !== "") {
      writer.uint32(34).string(message.cacheControl);
    }
    if (message.contentDisposition !== "") {
      writer.uint32(42).string(message.contentDisposition);
    }
    if (message.contentEncoding !== "") {
      writer.uint32(50).string(message.contentEncoding);
    }
    if (message.contentLanguage !== "") {
      writer.uint32(58).string(message.contentLanguage);
    }
    if (message.contentLength !== 0) {
      writer.uint32(64).int64(message.contentLength);
    }
    if (message.contentRange !== "") {
      writer.uint32(74).string(message.contentRange);
    }
    if (message.contentType !== "") {
      writer.uint32(82).string(message.contentType);
    }
    if (message.versionId !== "") {
      writer.uint32(90).string(message.versionId);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiresAt),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.lastModifiedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastModifiedAt),
        writer.uint32(106).fork()
      ).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      S3APIGetObjectResponse_MetadataEntry.encode(
        {
          $type: "yandex.cloud.storage.v1.S3APIGetObjectResponse.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(114).fork()
      ).ldelim();
    });
    if (message.storageClass !== "") {
      writer.uint32(122).string(message.storageClass);
    }
    if (message.serverSideEncryption !== "") {
      writer.uint32(130).string(message.serverSideEncryption);
    }
    if (message.sseKmsKeyId !== "") {
      writer.uint32(138).string(message.sseKmsKeyId);
    }
    if (message.objectLockMode !== "") {
      writer.uint32(146).string(message.objectLockMode);
    }
    if (message.objectLockRetainUntilDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.objectLockRetainUntilDate),
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.objectLockLegalHoldStatus !== "") {
      writer.uint32(162).string(message.objectLockLegalHoldStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIGetObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseS3APIGetObjectResponse } as S3APIGetObjectResponse;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.etag = reader.string();
          break;
        case 2:
          message.requestId = reader.string();
          break;
        case 3:
          message.acceptRanges = reader.string();
          break;
        case 4:
          message.cacheControl = reader.string();
          break;
        case 5:
          message.contentDisposition = reader.string();
          break;
        case 6:
          message.contentEncoding = reader.string();
          break;
        case 7:
          message.contentLanguage = reader.string();
          break;
        case 8:
          message.contentLength = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.contentRange = reader.string();
          break;
        case 10:
          message.contentType = reader.string();
          break;
        case 11:
          message.versionId = reader.string();
          break;
        case 12:
          message.expiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.lastModifiedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          const entry14 = S3APIGetObjectResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry14.value !== undefined) {
            message.metadata[entry14.key] = entry14.value;
          }
          break;
        case 15:
          message.storageClass = reader.string();
          break;
        case 16:
          message.serverSideEncryption = reader.string();
          break;
        case 17:
          message.sseKmsKeyId = reader.string();
          break;
        case 18:
          message.objectLockMode = reader.string();
          break;
        case 19:
          message.objectLockRetainUntilDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 20:
          message.objectLockLegalHoldStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIGetObjectResponse {
    const message = { ...baseS3APIGetObjectResponse } as S3APIGetObjectResponse;
    message.etag =
      object.etag !== undefined && object.etag !== null
        ? String(object.etag)
        : "";
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.acceptRanges =
      object.acceptRanges !== undefined && object.acceptRanges !== null
        ? String(object.acceptRanges)
        : "";
    message.cacheControl =
      object.cacheControl !== undefined && object.cacheControl !== null
        ? String(object.cacheControl)
        : "";
    message.contentDisposition =
      object.contentDisposition !== undefined &&
      object.contentDisposition !== null
        ? String(object.contentDisposition)
        : "";
    message.contentEncoding =
      object.contentEncoding !== undefined && object.contentEncoding !== null
        ? String(object.contentEncoding)
        : "";
    message.contentLanguage =
      object.contentLanguage !== undefined && object.contentLanguage !== null
        ? String(object.contentLanguage)
        : "";
    message.contentLength =
      object.contentLength !== undefined && object.contentLength !== null
        ? Number(object.contentLength)
        : 0;
    message.contentRange =
      object.contentRange !== undefined && object.contentRange !== null
        ? String(object.contentRange)
        : "";
    message.contentType =
      object.contentType !== undefined && object.contentType !== null
        ? String(object.contentType)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? fromJsonTimestamp(object.expiresAt)
        : undefined;
    message.lastModifiedAt =
      object.lastModifiedAt !== undefined && object.lastModifiedAt !== null
        ? fromJsonTimestamp(object.lastModifiedAt)
        : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.storageClass =
      object.storageClass !== undefined && object.storageClass !== null
        ? String(object.storageClass)
        : "";
    message.serverSideEncryption =
      object.serverSideEncryption !== undefined &&
      object.serverSideEncryption !== null
        ? String(object.serverSideEncryption)
        : "";
    message.sseKmsKeyId =
      object.sseKmsKeyId !== undefined && object.sseKmsKeyId !== null
        ? String(object.sseKmsKeyId)
        : "";
    message.objectLockMode =
      object.objectLockMode !== undefined && object.objectLockMode !== null
        ? String(object.objectLockMode)
        : "";
    message.objectLockRetainUntilDate =
      object.objectLockRetainUntilDate !== undefined &&
      object.objectLockRetainUntilDate !== null
        ? fromJsonTimestamp(object.objectLockRetainUntilDate)
        : undefined;
    message.objectLockLegalHoldStatus =
      object.objectLockLegalHoldStatus !== undefined &&
      object.objectLockLegalHoldStatus !== null
        ? String(object.objectLockLegalHoldStatus)
        : "";
    return message;
  },

  toJSON(message: S3APIGetObjectResponse): unknown {
    const obj: any = {};
    message.etag !== undefined && (obj.etag = message.etag);
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.acceptRanges !== undefined &&
      (obj.acceptRanges = message.acceptRanges);
    message.cacheControl !== undefined &&
      (obj.cacheControl = message.cacheControl);
    message.contentDisposition !== undefined &&
      (obj.contentDisposition = message.contentDisposition);
    message.contentEncoding !== undefined &&
      (obj.contentEncoding = message.contentEncoding);
    message.contentLanguage !== undefined &&
      (obj.contentLanguage = message.contentLanguage);
    message.contentLength !== undefined &&
      (obj.contentLength = Math.round(message.contentLength));
    message.contentRange !== undefined &&
      (obj.contentRange = message.contentRange);
    message.contentType !== undefined &&
      (obj.contentType = message.contentType);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt.toISOString());
    message.lastModifiedAt !== undefined &&
      (obj.lastModifiedAt = message.lastModifiedAt.toISOString());
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    message.storageClass !== undefined &&
      (obj.storageClass = message.storageClass);
    message.serverSideEncryption !== undefined &&
      (obj.serverSideEncryption = message.serverSideEncryption);
    message.sseKmsKeyId !== undefined &&
      (obj.sseKmsKeyId = message.sseKmsKeyId);
    message.objectLockMode !== undefined &&
      (obj.objectLockMode = message.objectLockMode);
    message.objectLockRetainUntilDate !== undefined &&
      (obj.objectLockRetainUntilDate =
        message.objectLockRetainUntilDate.toISOString());
    message.objectLockLegalHoldStatus !== undefined &&
      (obj.objectLockLegalHoldStatus = message.objectLockLegalHoldStatus);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIGetObjectResponse>, I>>(
    object: I
  ): S3APIGetObjectResponse {
    const message = { ...baseS3APIGetObjectResponse } as S3APIGetObjectResponse;
    message.etag = object.etag ?? "";
    message.requestId = object.requestId ?? "";
    message.acceptRanges = object.acceptRanges ?? "";
    message.cacheControl = object.cacheControl ?? "";
    message.contentDisposition = object.contentDisposition ?? "";
    message.contentEncoding = object.contentEncoding ?? "";
    message.contentLanguage = object.contentLanguage ?? "";
    message.contentLength = object.contentLength ?? 0;
    message.contentRange = object.contentRange ?? "";
    message.contentType = object.contentType ?? "";
    message.versionId = object.versionId ?? "";
    message.expiresAt = object.expiresAt ?? undefined;
    message.lastModifiedAt = object.lastModifiedAt ?? undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.storageClass = object.storageClass ?? "";
    message.serverSideEncryption = object.serverSideEncryption ?? "";
    message.sseKmsKeyId = object.sseKmsKeyId ?? "";
    message.objectLockMode = object.objectLockMode ?? "";
    message.objectLockRetainUntilDate =
      object.objectLockRetainUntilDate ?? undefined;
    message.objectLockLegalHoldStatus = object.objectLockLegalHoldStatus ?? "";
    return message;
  },
};

messageTypeRegistry.set(S3APIGetObjectResponse.$type, S3APIGetObjectResponse);

const baseS3APIGetObjectResponse_MetadataEntry: object = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectResponse.MetadataEntry",
  key: "",
  value: "",
};

export const S3APIGetObjectResponse_MetadataEntry = {
  $type:
    "yandex.cloud.storage.v1.S3APIGetObjectResponse.MetadataEntry" as const,

  encode(
    message: S3APIGetObjectResponse_MetadataEntry,
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
  ): S3APIGetObjectResponse_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIGetObjectResponse_MetadataEntry,
    } as S3APIGetObjectResponse_MetadataEntry;
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

  fromJSON(object: any): S3APIGetObjectResponse_MetadataEntry {
    const message = {
      ...baseS3APIGetObjectResponse_MetadataEntry,
    } as S3APIGetObjectResponse_MetadataEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: S3APIGetObjectResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<S3APIGetObjectResponse_MetadataEntry>, I>
  >(object: I): S3APIGetObjectResponse_MetadataEntry {
    const message = {
      ...baseS3APIGetObjectResponse_MetadataEntry,
    } as S3APIGetObjectResponse_MetadataEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  S3APIGetObjectResponse_MetadataEntry.$type,
  S3APIGetObjectResponse_MetadataEntry
);

const baseS3APIPutObjectResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectResponse",
  etag: "",
  requestId: "",
  versionId: "",
};

export const S3APIPutObjectResponse = {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectResponse" as const,

  encode(
    message: S3APIPutObjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.etag !== "") {
      writer.uint32(10).string(message.etag);
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    if (message.versionId !== "") {
      writer.uint32(26).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIPutObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseS3APIPutObjectResponse } as S3APIPutObjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.etag = reader.string();
          break;
        case 2:
          message.requestId = reader.string();
          break;
        case 3:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIPutObjectResponse {
    const message = { ...baseS3APIPutObjectResponse } as S3APIPutObjectResponse;
    message.etag =
      object.etag !== undefined && object.etag !== null
        ? String(object.etag)
        : "";
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: S3APIPutObjectResponse): unknown {
    const obj: any = {};
    message.etag !== undefined && (obj.etag = message.etag);
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIPutObjectResponse>, I>>(
    object: I
  ): S3APIPutObjectResponse {
    const message = { ...baseS3APIPutObjectResponse } as S3APIPutObjectResponse;
    message.etag = object.etag ?? "";
    message.requestId = object.requestId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(S3APIPutObjectResponse.$type, S3APIPutObjectResponse);

const baseS3APIDeleteObjectResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectResponse",
  requestId: "",
  versionId: "",
};

export const S3APIDeleteObjectResponse = {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectResponse" as const,

  encode(
    message: S3APIDeleteObjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIDeleteObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIDeleteObjectResponse,
    } as S3APIDeleteObjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIDeleteObjectResponse {
    const message = {
      ...baseS3APIDeleteObjectResponse,
    } as S3APIDeleteObjectResponse;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: S3APIDeleteObjectResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIDeleteObjectResponse>, I>>(
    object: I
  ): S3APIDeleteObjectResponse {
    const message = {
      ...baseS3APIDeleteObjectResponse,
    } as S3APIDeleteObjectResponse;
    message.requestId = object.requestId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  S3APIDeleteObjectResponse.$type,
  S3APIDeleteObjectResponse
);

const baseCopyObjectResult: object = {
  $type: "yandex.cloud.storage.v1.CopyObjectResult",
  etag: "",
};

export const CopyObjectResult = {
  $type: "yandex.cloud.storage.v1.CopyObjectResult" as const,

  encode(
    message: CopyObjectResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.etag !== "") {
      writer.uint32(10).string(message.etag);
    }
    if (message.lastModifiedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastModifiedAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CopyObjectResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCopyObjectResult } as CopyObjectResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.etag = reader.string();
          break;
        case 2:
          message.lastModifiedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CopyObjectResult {
    const message = { ...baseCopyObjectResult } as CopyObjectResult;
    message.etag =
      object.etag !== undefined && object.etag !== null
        ? String(object.etag)
        : "";
    message.lastModifiedAt =
      object.lastModifiedAt !== undefined && object.lastModifiedAt !== null
        ? fromJsonTimestamp(object.lastModifiedAt)
        : undefined;
    return message;
  },

  toJSON(message: CopyObjectResult): unknown {
    const obj: any = {};
    message.etag !== undefined && (obj.etag = message.etag);
    message.lastModifiedAt !== undefined &&
      (obj.lastModifiedAt = message.lastModifiedAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CopyObjectResult>, I>>(
    object: I
  ): CopyObjectResult {
    const message = { ...baseCopyObjectResult } as CopyObjectResult;
    message.etag = object.etag ?? "";
    message.lastModifiedAt = object.lastModifiedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CopyObjectResult.$type, CopyObjectResult);

const baseS3APICopyObjectResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APICopyObjectResponse",
  requestId: "",
  copySourceVersionId: "",
  versionId: "",
};

export const S3APICopyObjectResponse = {
  $type: "yandex.cloud.storage.v1.S3APICopyObjectResponse" as const,

  encode(
    message: S3APICopyObjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.copyObjectResult !== undefined) {
      CopyObjectResult.encode(
        message.copyObjectResult,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    if (message.copySourceVersionId !== "") {
      writer.uint32(26).string(message.copySourceVersionId);
    }
    if (message.versionId !== "") {
      writer.uint32(34).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APICopyObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APICopyObjectResponse,
    } as S3APICopyObjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.copyObjectResult = CopyObjectResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.requestId = reader.string();
          break;
        case 3:
          message.copySourceVersionId = reader.string();
          break;
        case 4:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APICopyObjectResponse {
    const message = {
      ...baseS3APICopyObjectResponse,
    } as S3APICopyObjectResponse;
    message.copyObjectResult =
      object.copyObjectResult !== undefined && object.copyObjectResult !== null
        ? CopyObjectResult.fromJSON(object.copyObjectResult)
        : undefined;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.copySourceVersionId =
      object.copySourceVersionId !== undefined &&
      object.copySourceVersionId !== null
        ? String(object.copySourceVersionId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: S3APICopyObjectResponse): unknown {
    const obj: any = {};
    message.copyObjectResult !== undefined &&
      (obj.copyObjectResult = message.copyObjectResult
        ? CopyObjectResult.toJSON(message.copyObjectResult)
        : undefined);
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.copySourceVersionId !== undefined &&
      (obj.copySourceVersionId = message.copySourceVersionId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APICopyObjectResponse>, I>>(
    object: I
  ): S3APICopyObjectResponse {
    const message = {
      ...baseS3APICopyObjectResponse,
    } as S3APICopyObjectResponse;
    message.copyObjectResult =
      object.copyObjectResult !== undefined && object.copyObjectResult !== null
        ? CopyObjectResult.fromPartial(object.copyObjectResult)
        : undefined;
    message.requestId = object.requestId ?? "";
    message.copySourceVersionId = object.copySourceVersionId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(S3APICopyObjectResponse.$type, S3APICopyObjectResponse);

const baseSuccessfullyDeletedObject: object = {
  $type: "yandex.cloud.storage.v1.SuccessfullyDeletedObject",
  key: "",
  versionId: "",
  deleteMarker: false,
  deleteMarkerVersionId: "",
};

export const SuccessfullyDeletedObject = {
  $type: "yandex.cloud.storage.v1.SuccessfullyDeletedObject" as const,

  encode(
    message: SuccessfullyDeletedObject,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.deleteMarker === true) {
      writer.uint32(24).bool(message.deleteMarker);
    }
    if (message.deleteMarkerVersionId !== "") {
      writer.uint32(34).string(message.deleteMarkerVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuccessfullyDeletedObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSuccessfullyDeletedObject,
    } as SuccessfullyDeletedObject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        case 3:
          message.deleteMarker = reader.bool();
          break;
        case 4:
          message.deleteMarkerVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuccessfullyDeletedObject {
    const message = {
      ...baseSuccessfullyDeletedObject,
    } as SuccessfullyDeletedObject;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.deleteMarker =
      object.deleteMarker !== undefined && object.deleteMarker !== null
        ? Boolean(object.deleteMarker)
        : false;
    message.deleteMarkerVersionId =
      object.deleteMarkerVersionId !== undefined &&
      object.deleteMarkerVersionId !== null
        ? String(object.deleteMarkerVersionId)
        : "";
    return message;
  },

  toJSON(message: SuccessfullyDeletedObject): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.deleteMarker !== undefined &&
      (obj.deleteMarker = message.deleteMarker);
    message.deleteMarkerVersionId !== undefined &&
      (obj.deleteMarkerVersionId = message.deleteMarkerVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SuccessfullyDeletedObject>, I>>(
    object: I
  ): SuccessfullyDeletedObject {
    const message = {
      ...baseSuccessfullyDeletedObject,
    } as SuccessfullyDeletedObject;
    message.key = object.key ?? "";
    message.versionId = object.versionId ?? "";
    message.deleteMarker = object.deleteMarker ?? false;
    message.deleteMarkerVersionId = object.deleteMarkerVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SuccessfullyDeletedObject.$type,
  SuccessfullyDeletedObject
);

const baseDeleteObjectError: object = {
  $type: "yandex.cloud.storage.v1.DeleteObjectError",
  key: "",
  versionId: "",
  code: "",
  msg: "",
};

export const DeleteObjectError = {
  $type: "yandex.cloud.storage.v1.DeleteObjectError" as const,

  encode(
    message: DeleteObjectError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(34).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteObjectError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteObjectError } as DeleteObjectError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        case 3:
          message.code = reader.string();
          break;
        case 4:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteObjectError {
    const message = { ...baseDeleteObjectError } as DeleteObjectError;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.code =
      object.code !== undefined && object.code !== null
        ? String(object.code)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null ? String(object.msg) : "";
    return message;
  },

  toJSON(message: DeleteObjectError): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteObjectError>, I>>(
    object: I
  ): DeleteObjectError {
    const message = { ...baseDeleteObjectError } as DeleteObjectError;
    message.key = object.key ?? "";
    message.versionId = object.versionId ?? "";
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteObjectError.$type, DeleteObjectError);

const baseS3APIDeleteObjectsResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectsResponse",
  requestId: "",
};

export const S3APIDeleteObjectsResponse = {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectsResponse" as const,

  encode(
    message: S3APIDeleteObjectsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.deleted) {
      SuccessfullyDeletedObject.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.errors) {
      DeleteObjectError.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.requestId !== "") {
      writer.uint32(26).string(message.requestId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIDeleteObjectsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIDeleteObjectsResponse,
    } as S3APIDeleteObjectsResponse;
    message.deleted = [];
    message.errors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deleted.push(
            SuccessfullyDeletedObject.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.errors.push(
            DeleteObjectError.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.requestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIDeleteObjectsResponse {
    const message = {
      ...baseS3APIDeleteObjectsResponse,
    } as S3APIDeleteObjectsResponse;
    message.deleted = (object.deleted ?? []).map((e: any) =>
      SuccessfullyDeletedObject.fromJSON(e)
    );
    message.errors = (object.errors ?? []).map((e: any) =>
      DeleteObjectError.fromJSON(e)
    );
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    return message;
  },

  toJSON(message: S3APIDeleteObjectsResponse): unknown {
    const obj: any = {};
    if (message.deleted) {
      obj.deleted = message.deleted.map((e) =>
        e ? SuccessfullyDeletedObject.toJSON(e) : undefined
      );
    } else {
      obj.deleted = [];
    }
    if (message.errors) {
      obj.errors = message.errors.map((e) =>
        e ? DeleteObjectError.toJSON(e) : undefined
      );
    } else {
      obj.errors = [];
    }
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIDeleteObjectsResponse>, I>>(
    object: I
  ): S3APIDeleteObjectsResponse {
    const message = {
      ...baseS3APIDeleteObjectsResponse,
    } as S3APIDeleteObjectsResponse;
    message.deleted =
      object.deleted?.map((e) => SuccessfullyDeletedObject.fromPartial(e)) ||
      [];
    message.errors =
      object.errors?.map((e) => DeleteObjectError.fromPartial(e)) || [];
    message.requestId = object.requestId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  S3APIDeleteObjectsResponse.$type,
  S3APIDeleteObjectsResponse
);

const baseS3APIPutObjectRetentionResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectRetentionResponse",
  requestId: "",
};

export const S3APIPutObjectRetentionResponse = {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectRetentionResponse" as const,

  encode(
    message: S3APIPutObjectRetentionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIPutObjectRetentionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIPutObjectRetentionResponse,
    } as S3APIPutObjectRetentionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIPutObjectRetentionResponse {
    const message = {
      ...baseS3APIPutObjectRetentionResponse,
    } as S3APIPutObjectRetentionResponse;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    return message;
  },

  toJSON(message: S3APIPutObjectRetentionResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIPutObjectRetentionResponse>, I>>(
    object: I
  ): S3APIPutObjectRetentionResponse {
    const message = {
      ...baseS3APIPutObjectRetentionResponse,
    } as S3APIPutObjectRetentionResponse;
    message.requestId = object.requestId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  S3APIPutObjectRetentionResponse.$type,
  S3APIPutObjectRetentionResponse
);

const baseObjectLockRetention: object = {
  $type: "yandex.cloud.storage.v1.ObjectLockRetention",
  mode: "",
};

export const ObjectLockRetention = {
  $type: "yandex.cloud.storage.v1.ObjectLockRetention" as const,

  encode(
    message: ObjectLockRetention,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== "") {
      writer.uint32(10).string(message.mode);
    }
    if (message.retainUntilDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.retainUntilDate),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectLockRetention {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectLockRetention } as ObjectLockRetention;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.string();
          break;
        case 2:
          message.retainUntilDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectLockRetention {
    const message = { ...baseObjectLockRetention } as ObjectLockRetention;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? String(object.mode)
        : "";
    message.retainUntilDate =
      object.retainUntilDate !== undefined && object.retainUntilDate !== null
        ? fromJsonTimestamp(object.retainUntilDate)
        : undefined;
    return message;
  },

  toJSON(message: ObjectLockRetention): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = message.mode);
    message.retainUntilDate !== undefined &&
      (obj.retainUntilDate = message.retainUntilDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectLockRetention>, I>>(
    object: I
  ): ObjectLockRetention {
    const message = { ...baseObjectLockRetention } as ObjectLockRetention;
    message.mode = object.mode ?? "";
    message.retainUntilDate = object.retainUntilDate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ObjectLockRetention.$type, ObjectLockRetention);

const baseS3APIGetObjectRetentionResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectRetentionResponse",
  requestId: "",
};

export const S3APIGetObjectRetentionResponse = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectRetentionResponse" as const,

  encode(
    message: S3APIGetObjectRetentionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.retention !== undefined) {
      ObjectLockRetention.encode(
        message.retention,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIGetObjectRetentionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIGetObjectRetentionResponse,
    } as S3APIGetObjectRetentionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.retention = ObjectLockRetention.decode(
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

  fromJSON(object: any): S3APIGetObjectRetentionResponse {
    const message = {
      ...baseS3APIGetObjectRetentionResponse,
    } as S3APIGetObjectRetentionResponse;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.retention =
      object.retention !== undefined && object.retention !== null
        ? ObjectLockRetention.fromJSON(object.retention)
        : undefined;
    return message;
  },

  toJSON(message: S3APIGetObjectRetentionResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.retention !== undefined &&
      (obj.retention = message.retention
        ? ObjectLockRetention.toJSON(message.retention)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIGetObjectRetentionResponse>, I>>(
    object: I
  ): S3APIGetObjectRetentionResponse {
    const message = {
      ...baseS3APIGetObjectRetentionResponse,
    } as S3APIGetObjectRetentionResponse;
    message.requestId = object.requestId ?? "";
    message.retention =
      object.retention !== undefined && object.retention !== null
        ? ObjectLockRetention.fromPartial(object.retention)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  S3APIGetObjectRetentionResponse.$type,
  S3APIGetObjectRetentionResponse
);

const baseS3APIPutObjectLegalHoldResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectLegalHoldResponse",
  requestId: "",
};

export const S3APIPutObjectLegalHoldResponse = {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectLegalHoldResponse" as const,

  encode(
    message: S3APIPutObjectLegalHoldResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIPutObjectLegalHoldResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIPutObjectLegalHoldResponse,
    } as S3APIPutObjectLegalHoldResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIPutObjectLegalHoldResponse {
    const message = {
      ...baseS3APIPutObjectLegalHoldResponse,
    } as S3APIPutObjectLegalHoldResponse;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    return message;
  },

  toJSON(message: S3APIPutObjectLegalHoldResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIPutObjectLegalHoldResponse>, I>>(
    object: I
  ): S3APIPutObjectLegalHoldResponse {
    const message = {
      ...baseS3APIPutObjectLegalHoldResponse,
    } as S3APIPutObjectLegalHoldResponse;
    message.requestId = object.requestId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  S3APIPutObjectLegalHoldResponse.$type,
  S3APIPutObjectLegalHoldResponse
);

const baseObjectLockLegalHold: object = {
  $type: "yandex.cloud.storage.v1.ObjectLockLegalHold",
  status: "",
};

export const ObjectLockLegalHold = {
  $type: "yandex.cloud.storage.v1.ObjectLockLegalHold" as const,

  encode(
    message: ObjectLockLegalHold,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectLockLegalHold {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectLockLegalHold } as ObjectLockLegalHold;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectLockLegalHold {
    const message = { ...baseObjectLockLegalHold } as ObjectLockLegalHold;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    return message;
  },

  toJSON(message: ObjectLockLegalHold): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectLockLegalHold>, I>>(
    object: I
  ): ObjectLockLegalHold {
    const message = { ...baseObjectLockLegalHold } as ObjectLockLegalHold;
    message.status = object.status ?? "";
    return message;
  },
};

messageTypeRegistry.set(ObjectLockLegalHold.$type, ObjectLockLegalHold);

const baseS3APIGetObjectLegalHoldResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectLegalHoldResponse",
  requestId: "",
};

export const S3APIGetObjectLegalHoldResponse = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectLegalHoldResponse" as const,

  encode(
    message: S3APIGetObjectLegalHoldResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.legalHold !== undefined) {
      ObjectLockLegalHold.encode(
        message.legalHold,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIGetObjectLegalHoldResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIGetObjectLegalHoldResponse,
    } as S3APIGetObjectLegalHoldResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.legalHold = ObjectLockLegalHold.decode(
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

  fromJSON(object: any): S3APIGetObjectLegalHoldResponse {
    const message = {
      ...baseS3APIGetObjectLegalHoldResponse,
    } as S3APIGetObjectLegalHoldResponse;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.legalHold =
      object.legalHold !== undefined && object.legalHold !== null
        ? ObjectLockLegalHold.fromJSON(object.legalHold)
        : undefined;
    return message;
  },

  toJSON(message: S3APIGetObjectLegalHoldResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.legalHold !== undefined &&
      (obj.legalHold = message.legalHold
        ? ObjectLockLegalHold.toJSON(message.legalHold)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIGetObjectLegalHoldResponse>, I>>(
    object: I
  ): S3APIGetObjectLegalHoldResponse {
    const message = {
      ...baseS3APIGetObjectLegalHoldResponse,
    } as S3APIGetObjectLegalHoldResponse;
    message.requestId = object.requestId ?? "";
    message.legalHold =
      object.legalHold !== undefined && object.legalHold !== null
        ? ObjectLockLegalHold.fromPartial(object.legalHold)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  S3APIGetObjectLegalHoldResponse.$type,
  S3APIGetObjectLegalHoldResponse
);

const baseS3APIPutObjectTaggingResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectTaggingResponse",
  requestId: "",
  versionId: "",
};

export const S3APIPutObjectTaggingResponse = {
  $type: "yandex.cloud.storage.v1.S3APIPutObjectTaggingResponse" as const,

  encode(
    message: S3APIPutObjectTaggingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIPutObjectTaggingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIPutObjectTaggingResponse,
    } as S3APIPutObjectTaggingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIPutObjectTaggingResponse {
    const message = {
      ...baseS3APIPutObjectTaggingResponse,
    } as S3APIPutObjectTaggingResponse;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: S3APIPutObjectTaggingResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIPutObjectTaggingResponse>, I>>(
    object: I
  ): S3APIPutObjectTaggingResponse {
    const message = {
      ...baseS3APIPutObjectTaggingResponse,
    } as S3APIPutObjectTaggingResponse;
    message.requestId = object.requestId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  S3APIPutObjectTaggingResponse.$type,
  S3APIPutObjectTaggingResponse
);

const baseObjectTag: object = {
  $type: "yandex.cloud.storage.v1.ObjectTag",
  key: "",
  value: "",
};

export const ObjectTag = {
  $type: "yandex.cloud.storage.v1.ObjectTag" as const,

  encode(
    message: ObjectTag,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectTag } as ObjectTag;
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

  fromJSON(object: any): ObjectTag {
    const message = { ...baseObjectTag } as ObjectTag;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: ObjectTag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectTag>, I>>(
    object: I
  ): ObjectTag {
    const message = { ...baseObjectTag } as ObjectTag;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(ObjectTag.$type, ObjectTag);

const baseS3APIGetObjectTaggingResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectTaggingResponse",
  requestId: "",
  versionId: "",
};

export const S3APIGetObjectTaggingResponse = {
  $type: "yandex.cloud.storage.v1.S3APIGetObjectTaggingResponse" as const,

  encode(
    message: S3APIGetObjectTaggingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    for (const v of message.tagSet) {
      ObjectTag.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIGetObjectTaggingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIGetObjectTaggingResponse,
    } as S3APIGetObjectTaggingResponse;
    message.tagSet = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        case 3:
          message.tagSet.push(ObjectTag.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIGetObjectTaggingResponse {
    const message = {
      ...baseS3APIGetObjectTaggingResponse,
    } as S3APIGetObjectTaggingResponse;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.tagSet = (object.tagSet ?? []).map((e: any) =>
      ObjectTag.fromJSON(e)
    );
    return message;
  },

  toJSON(message: S3APIGetObjectTaggingResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    if (message.tagSet) {
      obj.tagSet = message.tagSet.map((e) =>
        e ? ObjectTag.toJSON(e) : undefined
      );
    } else {
      obj.tagSet = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3APIGetObjectTaggingResponse>, I>>(
    object: I
  ): S3APIGetObjectTaggingResponse {
    const message = {
      ...baseS3APIGetObjectTaggingResponse,
    } as S3APIGetObjectTaggingResponse;
    message.requestId = object.requestId ?? "";
    message.versionId = object.versionId ?? "";
    message.tagSet = object.tagSet?.map((e) => ObjectTag.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  S3APIGetObjectTaggingResponse.$type,
  S3APIGetObjectTaggingResponse
);

const baseS3APIDeleteObjectTaggingResponse: object = {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectTaggingResponse",
  requestId: "",
  versionId: "",
};

export const S3APIDeleteObjectTaggingResponse = {
  $type: "yandex.cloud.storage.v1.S3APIDeleteObjectTaggingResponse" as const,

  encode(
    message: S3APIDeleteObjectTaggingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): S3APIDeleteObjectTaggingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseS3APIDeleteObjectTaggingResponse,
    } as S3APIDeleteObjectTaggingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3APIDeleteObjectTaggingResponse {
    const message = {
      ...baseS3APIDeleteObjectTaggingResponse,
    } as S3APIDeleteObjectTaggingResponse;
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? String(object.requestId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: S3APIDeleteObjectTaggingResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<S3APIDeleteObjectTaggingResponse>, I>
  >(object: I): S3APIDeleteObjectTaggingResponse {
    const message = {
      ...baseS3APIDeleteObjectTaggingResponse,
    } as S3APIDeleteObjectTaggingResponse;
    message.requestId = object.requestId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  S3APIDeleteObjectTaggingResponse.$type,
  S3APIDeleteObjectTaggingResponse
);

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
