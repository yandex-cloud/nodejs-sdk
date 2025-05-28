/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.storage.v1';

/** Represents a response of the get object request to S3. */
export interface S3APIGetObjectResponse {
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
    key: string;
    value: string;
}

/** Represents a response of the put object request to S3. */
export interface S3APIPutObjectResponse {
    /** MD5 hash of the object. */
    etag: string;
    /** Unique request ID. */
    requestId: string;
    /** Version ID of the object. */
    versionId: string;
}

/** Represents a response of the delete object request to S3. */
export interface S3APIDeleteObjectResponse {
    /** Unique request ID. */
    requestId: string;
    /** Version ID of the object. */
    versionId: string;
}

export interface CopyObjectResult {
    /** Returns the ETag of the new object. */
    etag: string;
    /** Creation date of the object. */
    lastModifiedAt?: Date;
}

/** Represents a response of the copy object request to S3. */
export interface S3APICopyObjectResponse {
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
    /** List of successfully deleted objects */
    deleted: SuccessfullyDeletedObject[];
    /** List of objects that attempted to be deleted but encountered an error */
    errors: DeleteObjectError[];
    /** Unique request ID. */
    requestId: string;
}

/** Represents a response of the put object retention request to S3. */
export interface S3APIPutObjectRetentionResponse {
    /** Unique request ID. */
    requestId: string;
}

export interface ObjectLockRetention {
    /** Indicates the Retention mode for the specified object. */
    mode: string;
    /** The date on which this object lock retention will expire. */
    retainUntilDate?: Date;
}

/** Represents a response of the get object retention request to S3. */
export interface S3APIGetObjectRetentionResponse {
    /** Unique request ID. */
    requestId: string;
    /** An object retention settings. */
    retention?: ObjectLockRetention;
}

/** Represents a response of the put object retention request to S3. */
export interface S3APIPutObjectLegalHoldResponse {
    /** Unique request ID. */
    requestId: string;
}

export interface ObjectLockLegalHold {
    /** Indicates whether the specified object has a legal hold in place. */
    status: string;
}

/** Represents a response of the get object legal hold request to S3. */
export interface S3APIGetObjectLegalHoldResponse {
    /** Unique request ID. */
    requestId: string;
    /** The current legal hold status for the specified object. */
    legalHold?: ObjectLockLegalHold;
}

/** Represents a response of put object tagging request to S3. */
export interface S3APIPutObjectTaggingResponse {
    /** Unique request ID. */
    requestId: string;
    /** The versionId of the object the tag-set was added to. */
    versionId: string;
}

export interface ObjectTag {
    /** Key of the object tag. */
    key: string;
    /** Value of the object tag. */
    value: string;
}

/** Represents a response of get object tagging request to S3. */
export interface S3APIGetObjectTaggingResponse {
    /** Unique request ID. */
    requestId: string;
    /** The versionId of the object for which you got the tagging information. */
    versionId: string;
    /** Contains the tag set. */
    tagSet: ObjectTag[];
}

/** Represents a response of delete object tagging request to S3. */
export interface S3APIDeleteObjectTaggingResponse {
    /** Unique request ID. */
    requestId: string;
    /** The versionId of the object the tag-set was removed from. */
    versionId: string;
}

/** Represents a response of start multipart upload request to S3. */
export interface S3APIStartMultipartUploadResponse {
    /** Unique request ID. */
    requestId: string;
    /** The name of the bucket in which the initiated multipart upload was initiated. */
    bucket: string;
    /** Object key for which the multipart upload was initiated. */
    key: string;
    /** The ID of the initiated multipart upload. */
    uploadId: string;
}

/** Represents a response of upload part request to S3. */
export interface S3APIUploadPartResponse {
    /** Unique request ID. */
    requestId: string;
    /** MD5 hash of the object. */
    etag: string;
}

/** Represents a response of list parts request to S3. */
export interface S3APIListPartsResponse {
    /** The name of the bucket to which the multipart upload was initiated. */
    bucket: string;
    /** Object key for which the multipart upload was initiated. */
    key: string;
    /** Upload ID identifying the multipart upload whose parts are being listed. */
    uploadId: string;
    /**
     * When a list is truncated, this element specifies the last part in the list, as
     * well as the value to use for the part-number-marker request parameter in a
     * subsequent request.
     */
    partNumberMarker: string;
    /**
     * When a list is truncated, this element specifies the last part in the list, as
     * well as the value to use for the part-number-marker request parameter in a
     * subsequent request.
     */
    nextPartNumberMarker: string;
    /** Maximum number of parts that were allowed in the response. */
    maxParts: number;
    /** Indicates whether the returned list of parts is truncated. */
    isTruncated: boolean;
    /** Container for elements related to a particular part. */
    parts: S3APIPart[];
    /** Container element that identifies who initiated the multipart upload. */
    initiator?: S3APIOwner;
    /** Container element that identifies who initiated the multipart upload. */
    owner?: S3APIOwner;
    /** Class of storage used to store the uploaded object. */
    storageClass: string;
    /** Unique request ID. */
    requestId: string;
}

/** Container for elements related to a part. */
export interface S3APIPart {
    /**
     * Part number identifying the part. This is a positive integer between 1 and
     * 10,000.
     */
    partNumber: number;
    /** Date and time at which the part was uploaded. */
    lastModifiedAt?: Date;
    /** Size in bytes of the uploaded part data. */
    size: number;
    /** Entity tag returned when the part was uploaded. */
    etag: string;
}

/** Represents a response of abort multipart upload request to S3. */
export interface S3APIAbortMultipartUploadResponse {
    /** Unique request ID. */
    requestId: string;
}

/** Represents a response of complete multipart upload request to S3. */
export interface S3APICompleteMultipartUploadResponse {
    /** Unique request ID. */
    requestId: string;
    /** The name of the bucket that contains the newly created object. */
    bucket: string;
    /** The object key of the newly created object. */
    key: string;
    /** Entity tag that identifies the newly created object's data. */
    etag: string;
    /** The URI that identifies the newly created object. */
    location: string;
    /**
     * Version ID of the newly created object, in case the bucket has versioning
     * turned on.
     */
    versionId: string;
}

/** Represents a response of list multipart uploads request to S3. */
export interface S3APIListMultipartUploadsResponse {
    /** The name of the bucket to which the multipart upload was initiated. */
    bucket: string;
    /** The key at or after which the listing began. */
    keyMarker: string;
    /** Upload ID after which listing began. */
    uploadIdMarker: string;
    /**
     * When a list is truncated, this element specifies the value that should be used
     * for the key-marker request parameter in a subsequent request.
     */
    nextKeyMarker: string;
    /**
     * When a list is truncated, this element specifies the value that should be used
     * for the upload-id-marker request parameter in a subsequent request.
     */
    nextUploadIdMarker: string;
    /** Contains the delimiter you specified in the request. */
    delimiter: string;
    /**
     * When a prefix is provided in the request, this field contains the specified
     * prefix.
     */
    prefix: string;
    /**
     * Maximum number of multipart uploads that could have been included in the
     * response.
     */
    maxUploads: number;
    /** Indicates whether the returned list of multipart uploads is truncated. */
    isTruncated: boolean;
    /** Container for elements related to a particular multipart upload. */
    uploads: S3APIMultipartUpload[];
    /**
     * If you specify a delimiter in the request, then the result returns each
     * distinct key prefix containing the delimiter in a CommonPrefixes element.
     */
    commonPrefixes: string[];
    /** Unique request ID. */
    requestId: string;
}

/** Container for the MultipartUpload for the S3 object. */
export interface S3APIMultipartUpload {
    /** Key of the object for which the multipart upload was initiated. */
    key: string;
    /** Upload ID that identifies the multipart upload. */
    uploadId: string;
    /** Identifies who initiated the multipart upload. */
    initiator?: S3APIOwner;
    /** Specifies the owner of the object that is part of the multipart upload. */
    owner?: S3APIOwner;
    /** The class of storage used to store the object. */
    storageClass: string;
    /** Date and time at which the multipart upload was initiated. */
    initiatedAt?: Date;
}

/** Container for the owner/initiator display name and ID. */
export interface S3APIOwner {
    /** Container for the ID of the owner/initiator. */
    id: string;
    /** Container for the display name of the owner/initiator. */
    displayName: string;
}

/** Response message for UploadPartCopy operation */
export interface S3APIUploadPartCopyResponse {
    /** Entity tag of the object. */
    etag: string;
    /** Date and time at which the object was uploaded. */
    lastModifiedAt?: Date;
    /** Unique request ID. */
    requestId: string;
}

/** Represents a response of list objects v2 request to S3. */
export interface S3APIListObjectsV2Response {
    /** A flag that indicates whether S3 returned all of the results that satisfied the search criteria. */
    isTruncated: boolean;
    /** Metadata about each object returned. */
    contents: S3APIObject[];
    /** The bucket name. */
    name: string;
    /** Keys that begin with the indicated prefix. */
    prefix: string;
    /** Causes keys that contain the same string between the prefix and the first occurrence of the delimiter to be rolled up into a single result element in the CommonPrefixes collection. */
    delimiter: string;
    /** The maximum number of keys returned in the response body. */
    maxKeys: number;
    /** All of the keys rolled up into a common prefix count as a single return when calculating the number of returns. */
    commonPrefixes: S3APICommonPrefix[];
    /** The number of keys returned with this request. */
    keyCount: number;
    /** Indicates where in the bucket listing begins. This is only returned if a continuation token was used in the request. */
    continuationToken: string;
    /** If the response is truncated, S3 returns this continuation token, which you can use in the next request to fetch the next set of keys. */
    nextContinuationToken: string;
    /** StartAfter is where you want S3 to start listing from. This is only returned if a start-after was used in the request. */
    startAfter: string;
    /** Unique request ID. */
    requestId: string;
}

/** Container for object metadata. */
export interface S3APIObject {
    /** The object key. */
    key: string;
    /** Date and time the object was last modified. */
    lastModified?: Date;
    /** The entity tag is a hash of the object. */
    etag: string;
    /** Size in bytes of the object. */
    size: number;
    /** The owner of the object. */
    owner?: S3APIOwner;
    /** The class of storage used to store the object. */
    storageClass: string;
}

/** Container for common prefix information. */
export interface S3APICommonPrefix {
    /** Container for the specified common prefix. */
    prefix: string;
}

const baseS3APIGetObjectResponse: object = {
    etag: '',
    requestId: '',
    acceptRanges: '',
    cacheControl: '',
    contentDisposition: '',
    contentEncoding: '',
    contentLanguage: '',
    contentLength: 0,
    contentRange: '',
    contentType: '',
    versionId: '',
    storageClass: '',
    serverSideEncryption: '',
    sseKmsKeyId: '',
    objectLockMode: '',
    objectLockLegalHoldStatus: '',
};

export const S3APIGetObjectResponse = {
    encode(message: S3APIGetObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.etag !== '') {
            writer.uint32(10).string(message.etag);
        }
        if (message.requestId !== '') {
            writer.uint32(18).string(message.requestId);
        }
        if (message.acceptRanges !== '') {
            writer.uint32(26).string(message.acceptRanges);
        }
        if (message.cacheControl !== '') {
            writer.uint32(34).string(message.cacheControl);
        }
        if (message.contentDisposition !== '') {
            writer.uint32(42).string(message.contentDisposition);
        }
        if (message.contentEncoding !== '') {
            writer.uint32(50).string(message.contentEncoding);
        }
        if (message.contentLanguage !== '') {
            writer.uint32(58).string(message.contentLanguage);
        }
        if (message.contentLength !== 0) {
            writer.uint32(64).int64(message.contentLength);
        }
        if (message.contentRange !== '') {
            writer.uint32(74).string(message.contentRange);
        }
        if (message.contentType !== '') {
            writer.uint32(82).string(message.contentType);
        }
        if (message.versionId !== '') {
            writer.uint32(90).string(message.versionId);
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.lastModifiedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastModifiedAt),
                writer.uint32(106).fork(),
            ).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            S3APIGetObjectResponse_MetadataEntry.encode(
                { key: key as any, value },
                writer.uint32(114).fork(),
            ).ldelim();
        });
        if (message.storageClass !== '') {
            writer.uint32(122).string(message.storageClass);
        }
        if (message.serverSideEncryption !== '') {
            writer.uint32(130).string(message.serverSideEncryption);
        }
        if (message.sseKmsKeyId !== '') {
            writer.uint32(138).string(message.sseKmsKeyId);
        }
        if (message.objectLockMode !== '') {
            writer.uint32(146).string(message.objectLockMode);
        }
        if (message.objectLockRetainUntilDate !== undefined) {
            Timestamp.encode(
                toTimestamp(message.objectLockRetainUntilDate),
                writer.uint32(154).fork(),
            ).ldelim();
        }
        if (message.objectLockLegalHoldStatus !== '') {
            writer.uint32(162).string(message.objectLockLegalHoldStatus);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIGetObjectResponse {
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
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.lastModifiedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 14:
                    const entry14 = S3APIGetObjectResponse_MetadataEntry.decode(
                        reader,
                        reader.uint32(),
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
                        Timestamp.decode(reader, reader.uint32()),
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
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.acceptRanges =
            object.acceptRanges !== undefined && object.acceptRanges !== null
                ? String(object.acceptRanges)
                : '';
        message.cacheControl =
            object.cacheControl !== undefined && object.cacheControl !== null
                ? String(object.cacheControl)
                : '';
        message.contentDisposition =
            object.contentDisposition !== undefined && object.contentDisposition !== null
                ? String(object.contentDisposition)
                : '';
        message.contentEncoding =
            object.contentEncoding !== undefined && object.contentEncoding !== null
                ? String(object.contentEncoding)
                : '';
        message.contentLanguage =
            object.contentLanguage !== undefined && object.contentLanguage !== null
                ? String(object.contentLanguage)
                : '';
        message.contentLength =
            object.contentLength !== undefined && object.contentLength !== null
                ? Number(object.contentLength)
                : 0;
        message.contentRange =
            object.contentRange !== undefined && object.contentRange !== null
                ? String(object.contentRange)
                : '';
        message.contentType =
            object.contentType !== undefined && object.contentType !== null
                ? String(object.contentType)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        message.lastModifiedAt =
            object.lastModifiedAt !== undefined && object.lastModifiedAt !== null
                ? fromJsonTimestamp(object.lastModifiedAt)
                : undefined;
        message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : '';
        message.serverSideEncryption =
            object.serverSideEncryption !== undefined && object.serverSideEncryption !== null
                ? String(object.serverSideEncryption)
                : '';
        message.sseKmsKeyId =
            object.sseKmsKeyId !== undefined && object.sseKmsKeyId !== null
                ? String(object.sseKmsKeyId)
                : '';
        message.objectLockMode =
            object.objectLockMode !== undefined && object.objectLockMode !== null
                ? String(object.objectLockMode)
                : '';
        message.objectLockRetainUntilDate =
            object.objectLockRetainUntilDate !== undefined &&
            object.objectLockRetainUntilDate !== null
                ? fromJsonTimestamp(object.objectLockRetainUntilDate)
                : undefined;
        message.objectLockLegalHoldStatus =
            object.objectLockLegalHoldStatus !== undefined &&
            object.objectLockLegalHoldStatus !== null
                ? String(object.objectLockLegalHoldStatus)
                : '';
        return message;
    },

    toJSON(message: S3APIGetObjectResponse): unknown {
        const obj: any = {};
        message.etag !== undefined && (obj.etag = message.etag);
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.acceptRanges !== undefined && (obj.acceptRanges = message.acceptRanges);
        message.cacheControl !== undefined && (obj.cacheControl = message.cacheControl);
        message.contentDisposition !== undefined &&
            (obj.contentDisposition = message.contentDisposition);
        message.contentEncoding !== undefined && (obj.contentEncoding = message.contentEncoding);
        message.contentLanguage !== undefined && (obj.contentLanguage = message.contentLanguage);
        message.contentLength !== undefined &&
            (obj.contentLength = Math.round(message.contentLength));
        message.contentRange !== undefined && (obj.contentRange = message.contentRange);
        message.contentType !== undefined && (obj.contentType = message.contentType);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        message.lastModifiedAt !== undefined &&
            (obj.lastModifiedAt = message.lastModifiedAt.toISOString());
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.storageClass !== undefined && (obj.storageClass = message.storageClass);
        message.serverSideEncryption !== undefined &&
            (obj.serverSideEncryption = message.serverSideEncryption);
        message.sseKmsKeyId !== undefined && (obj.sseKmsKeyId = message.sseKmsKeyId);
        message.objectLockMode !== undefined && (obj.objectLockMode = message.objectLockMode);
        message.objectLockRetainUntilDate !== undefined &&
            (obj.objectLockRetainUntilDate = message.objectLockRetainUntilDate.toISOString());
        message.objectLockLegalHoldStatus !== undefined &&
            (obj.objectLockLegalHoldStatus = message.objectLockLegalHoldStatus);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIGetObjectResponse>, I>>(
        object: I,
    ): S3APIGetObjectResponse {
        const message = { ...baseS3APIGetObjectResponse } as S3APIGetObjectResponse;
        message.etag = object.etag ?? '';
        message.requestId = object.requestId ?? '';
        message.acceptRanges = object.acceptRanges ?? '';
        message.cacheControl = object.cacheControl ?? '';
        message.contentDisposition = object.contentDisposition ?? '';
        message.contentEncoding = object.contentEncoding ?? '';
        message.contentLanguage = object.contentLanguage ?? '';
        message.contentLength = object.contentLength ?? 0;
        message.contentRange = object.contentRange ?? '';
        message.contentType = object.contentType ?? '';
        message.versionId = object.versionId ?? '';
        message.expiresAt = object.expiresAt ?? undefined;
        message.lastModifiedAt = object.lastModifiedAt ?? undefined;
        message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.storageClass = object.storageClass ?? '';
        message.serverSideEncryption = object.serverSideEncryption ?? '';
        message.sseKmsKeyId = object.sseKmsKeyId ?? '';
        message.objectLockMode = object.objectLockMode ?? '';
        message.objectLockRetainUntilDate = object.objectLockRetainUntilDate ?? undefined;
        message.objectLockLegalHoldStatus = object.objectLockLegalHoldStatus ?? '';
        return message;
    },
};

const baseS3APIGetObjectResponse_MetadataEntry: object = { key: '', value: '' };

export const S3APIGetObjectResponse_MetadataEntry = {
    encode(
        message: S3APIGetObjectResponse_MetadataEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIGetObjectResponse_MetadataEntry {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: S3APIGetObjectResponse_MetadataEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIGetObjectResponse_MetadataEntry>, I>>(
        object: I,
    ): S3APIGetObjectResponse_MetadataEntry {
        const message = {
            ...baseS3APIGetObjectResponse_MetadataEntry,
        } as S3APIGetObjectResponse_MetadataEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseS3APIPutObjectResponse: object = { etag: '', requestId: '', versionId: '' };

export const S3APIPutObjectResponse = {
    encode(message: S3APIPutObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.etag !== '') {
            writer.uint32(10).string(message.etag);
        }
        if (message.requestId !== '') {
            writer.uint32(18).string(message.requestId);
        }
        if (message.versionId !== '') {
            writer.uint32(26).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIPutObjectResponse {
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
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
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
        object: I,
    ): S3APIPutObjectResponse {
        const message = { ...baseS3APIPutObjectResponse } as S3APIPutObjectResponse;
        message.etag = object.etag ?? '';
        message.requestId = object.requestId ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

const baseS3APIDeleteObjectResponse: object = { requestId: '', versionId: '' };

export const S3APIDeleteObjectResponse = {
    encode(
        message: S3APIDeleteObjectResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIDeleteObjectResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIDeleteObjectResponse } as S3APIDeleteObjectResponse;
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
        const message = { ...baseS3APIDeleteObjectResponse } as S3APIDeleteObjectResponse;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        return message;
    },

    toJSON(message: S3APIDeleteObjectResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIDeleteObjectResponse>, I>>(
        object: I,
    ): S3APIDeleteObjectResponse {
        const message = { ...baseS3APIDeleteObjectResponse } as S3APIDeleteObjectResponse;
        message.requestId = object.requestId ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

const baseCopyObjectResult: object = { etag: '' };

export const CopyObjectResult = {
    encode(message: CopyObjectResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.etag !== '') {
            writer.uint32(10).string(message.etag);
        }
        if (message.lastModifiedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastModifiedAt),
                writer.uint32(18).fork(),
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
                        Timestamp.decode(reader, reader.uint32()),
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
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
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

    fromPartial<I extends Exact<DeepPartial<CopyObjectResult>, I>>(object: I): CopyObjectResult {
        const message = { ...baseCopyObjectResult } as CopyObjectResult;
        message.etag = object.etag ?? '';
        message.lastModifiedAt = object.lastModifiedAt ?? undefined;
        return message;
    },
};

const baseS3APICopyObjectResponse: object = {
    requestId: '',
    copySourceVersionId: '',
    versionId: '',
};

export const S3APICopyObjectResponse = {
    encode(message: S3APICopyObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.copyObjectResult !== undefined) {
            CopyObjectResult.encode(message.copyObjectResult, writer.uint32(10).fork()).ldelim();
        }
        if (message.requestId !== '') {
            writer.uint32(18).string(message.requestId);
        }
        if (message.copySourceVersionId !== '') {
            writer.uint32(26).string(message.copySourceVersionId);
        }
        if (message.versionId !== '') {
            writer.uint32(34).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APICopyObjectResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APICopyObjectResponse } as S3APICopyObjectResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.copyObjectResult = CopyObjectResult.decode(reader, reader.uint32());
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
        const message = { ...baseS3APICopyObjectResponse } as S3APICopyObjectResponse;
        message.copyObjectResult =
            object.copyObjectResult !== undefined && object.copyObjectResult !== null
                ? CopyObjectResult.fromJSON(object.copyObjectResult)
                : undefined;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.copySourceVersionId =
            object.copySourceVersionId !== undefined && object.copySourceVersionId !== null
                ? String(object.copySourceVersionId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
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
        object: I,
    ): S3APICopyObjectResponse {
        const message = { ...baseS3APICopyObjectResponse } as S3APICopyObjectResponse;
        message.copyObjectResult =
            object.copyObjectResult !== undefined && object.copyObjectResult !== null
                ? CopyObjectResult.fromPartial(object.copyObjectResult)
                : undefined;
        message.requestId = object.requestId ?? '';
        message.copySourceVersionId = object.copySourceVersionId ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

const baseSuccessfullyDeletedObject: object = {
    key: '',
    versionId: '',
    deleteMarker: false,
    deleteMarkerVersionId: '',
};

export const SuccessfullyDeletedObject = {
    encode(
        message: SuccessfullyDeletedObject,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.deleteMarker === true) {
            writer.uint32(24).bool(message.deleteMarker);
        }
        if (message.deleteMarkerVersionId !== '') {
            writer.uint32(34).string(message.deleteMarkerVersionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuccessfullyDeletedObject {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSuccessfullyDeletedObject } as SuccessfullyDeletedObject;
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
        const message = { ...baseSuccessfullyDeletedObject } as SuccessfullyDeletedObject;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.deleteMarker =
            object.deleteMarker !== undefined && object.deleteMarker !== null
                ? Boolean(object.deleteMarker)
                : false;
        message.deleteMarkerVersionId =
            object.deleteMarkerVersionId !== undefined && object.deleteMarkerVersionId !== null
                ? String(object.deleteMarkerVersionId)
                : '';
        return message;
    },

    toJSON(message: SuccessfullyDeletedObject): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.deleteMarker !== undefined && (obj.deleteMarker = message.deleteMarker);
        message.deleteMarkerVersionId !== undefined &&
            (obj.deleteMarkerVersionId = message.deleteMarkerVersionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuccessfullyDeletedObject>, I>>(
        object: I,
    ): SuccessfullyDeletedObject {
        const message = { ...baseSuccessfullyDeletedObject } as SuccessfullyDeletedObject;
        message.key = object.key ?? '';
        message.versionId = object.versionId ?? '';
        message.deleteMarker = object.deleteMarker ?? false;
        message.deleteMarkerVersionId = object.deleteMarkerVersionId ?? '';
        return message;
    },
};

const baseDeleteObjectError: object = { key: '', versionId: '', code: '', msg: '' };

export const DeleteObjectError = {
    encode(message: DeleteObjectError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.code !== '') {
            writer.uint32(26).string(message.code);
        }
        if (message.msg !== '') {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.code = object.code !== undefined && object.code !== null ? String(object.code) : '';
        message.msg = object.msg !== undefined && object.msg !== null ? String(object.msg) : '';
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

    fromPartial<I extends Exact<DeepPartial<DeleteObjectError>, I>>(object: I): DeleteObjectError {
        const message = { ...baseDeleteObjectError } as DeleteObjectError;
        message.key = object.key ?? '';
        message.versionId = object.versionId ?? '';
        message.code = object.code ?? '';
        message.msg = object.msg ?? '';
        return message;
    },
};

const baseS3APIDeleteObjectsResponse: object = { requestId: '' };

export const S3APIDeleteObjectsResponse = {
    encode(
        message: S3APIDeleteObjectsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.deleted) {
            SuccessfullyDeletedObject.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.errors) {
            DeleteObjectError.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.requestId !== '') {
            writer.uint32(26).string(message.requestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIDeleteObjectsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIDeleteObjectsResponse } as S3APIDeleteObjectsResponse;
        message.deleted = [];
        message.errors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deleted.push(SuccessfullyDeletedObject.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.errors.push(DeleteObjectError.decode(reader, reader.uint32()));
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
        const message = { ...baseS3APIDeleteObjectsResponse } as S3APIDeleteObjectsResponse;
        message.deleted = (object.deleted ?? []).map((e: any) =>
            SuccessfullyDeletedObject.fromJSON(e),
        );
        message.errors = (object.errors ?? []).map((e: any) => DeleteObjectError.fromJSON(e));
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        return message;
    },

    toJSON(message: S3APIDeleteObjectsResponse): unknown {
        const obj: any = {};
        if (message.deleted) {
            obj.deleted = message.deleted.map((e) =>
                e ? SuccessfullyDeletedObject.toJSON(e) : undefined,
            );
        } else {
            obj.deleted = [];
        }
        if (message.errors) {
            obj.errors = message.errors.map((e) => (e ? DeleteObjectError.toJSON(e) : undefined));
        } else {
            obj.errors = [];
        }
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIDeleteObjectsResponse>, I>>(
        object: I,
    ): S3APIDeleteObjectsResponse {
        const message = { ...baseS3APIDeleteObjectsResponse } as S3APIDeleteObjectsResponse;
        message.deleted =
            object.deleted?.map((e) => SuccessfullyDeletedObject.fromPartial(e)) || [];
        message.errors = object.errors?.map((e) => DeleteObjectError.fromPartial(e)) || [];
        message.requestId = object.requestId ?? '';
        return message;
    },
};

const baseS3APIPutObjectRetentionResponse: object = { requestId: '' };

export const S3APIPutObjectRetentionResponse = {
    encode(
        message: S3APIPutObjectRetentionResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIPutObjectRetentionResponse {
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
                : '';
        return message;
    },

    toJSON(message: S3APIPutObjectRetentionResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIPutObjectRetentionResponse>, I>>(
        object: I,
    ): S3APIPutObjectRetentionResponse {
        const message = {
            ...baseS3APIPutObjectRetentionResponse,
        } as S3APIPutObjectRetentionResponse;
        message.requestId = object.requestId ?? '';
        return message;
    },
};

const baseObjectLockRetention: object = { mode: '' };

export const ObjectLockRetention = {
    encode(message: ObjectLockRetention, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mode !== '') {
            writer.uint32(10).string(message.mode);
        }
        if (message.retainUntilDate !== undefined) {
            Timestamp.encode(
                toTimestamp(message.retainUntilDate),
                writer.uint32(18).fork(),
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
                        Timestamp.decode(reader, reader.uint32()),
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
        message.mode = object.mode !== undefined && object.mode !== null ? String(object.mode) : '';
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
        object: I,
    ): ObjectLockRetention {
        const message = { ...baseObjectLockRetention } as ObjectLockRetention;
        message.mode = object.mode ?? '';
        message.retainUntilDate = object.retainUntilDate ?? undefined;
        return message;
    },
};

const baseS3APIGetObjectRetentionResponse: object = { requestId: '' };

export const S3APIGetObjectRetentionResponse = {
    encode(
        message: S3APIGetObjectRetentionResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.retention !== undefined) {
            ObjectLockRetention.encode(message.retention, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIGetObjectRetentionResponse {
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
                    message.retention = ObjectLockRetention.decode(reader, reader.uint32());
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
                : '';
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
        object: I,
    ): S3APIGetObjectRetentionResponse {
        const message = {
            ...baseS3APIGetObjectRetentionResponse,
        } as S3APIGetObjectRetentionResponse;
        message.requestId = object.requestId ?? '';
        message.retention =
            object.retention !== undefined && object.retention !== null
                ? ObjectLockRetention.fromPartial(object.retention)
                : undefined;
        return message;
    },
};

const baseS3APIPutObjectLegalHoldResponse: object = { requestId: '' };

export const S3APIPutObjectLegalHoldResponse = {
    encode(
        message: S3APIPutObjectLegalHoldResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIPutObjectLegalHoldResponse {
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
                : '';
        return message;
    },

    toJSON(message: S3APIPutObjectLegalHoldResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIPutObjectLegalHoldResponse>, I>>(
        object: I,
    ): S3APIPutObjectLegalHoldResponse {
        const message = {
            ...baseS3APIPutObjectLegalHoldResponse,
        } as S3APIPutObjectLegalHoldResponse;
        message.requestId = object.requestId ?? '';
        return message;
    },
};

const baseObjectLockLegalHold: object = { status: '' };

export const ObjectLockLegalHold = {
    encode(message: ObjectLockLegalHold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.status !== '') {
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
            object.status !== undefined && object.status !== null ? String(object.status) : '';
        return message;
    },

    toJSON(message: ObjectLockLegalHold): unknown {
        const obj: any = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ObjectLockLegalHold>, I>>(
        object: I,
    ): ObjectLockLegalHold {
        const message = { ...baseObjectLockLegalHold } as ObjectLockLegalHold;
        message.status = object.status ?? '';
        return message;
    },
};

const baseS3APIGetObjectLegalHoldResponse: object = { requestId: '' };

export const S3APIGetObjectLegalHoldResponse = {
    encode(
        message: S3APIGetObjectLegalHoldResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.legalHold !== undefined) {
            ObjectLockLegalHold.encode(message.legalHold, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIGetObjectLegalHoldResponse {
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
                    message.legalHold = ObjectLockLegalHold.decode(reader, reader.uint32());
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
                : '';
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
        object: I,
    ): S3APIGetObjectLegalHoldResponse {
        const message = {
            ...baseS3APIGetObjectLegalHoldResponse,
        } as S3APIGetObjectLegalHoldResponse;
        message.requestId = object.requestId ?? '';
        message.legalHold =
            object.legalHold !== undefined && object.legalHold !== null
                ? ObjectLockLegalHold.fromPartial(object.legalHold)
                : undefined;
        return message;
    },
};

const baseS3APIPutObjectTaggingResponse: object = { requestId: '', versionId: '' };

export const S3APIPutObjectTaggingResponse = {
    encode(
        message: S3APIPutObjectTaggingResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIPutObjectTaggingResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIPutObjectTaggingResponse } as S3APIPutObjectTaggingResponse;
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
        const message = { ...baseS3APIPutObjectTaggingResponse } as S3APIPutObjectTaggingResponse;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        return message;
    },

    toJSON(message: S3APIPutObjectTaggingResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIPutObjectTaggingResponse>, I>>(
        object: I,
    ): S3APIPutObjectTaggingResponse {
        const message = { ...baseS3APIPutObjectTaggingResponse } as S3APIPutObjectTaggingResponse;
        message.requestId = object.requestId ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

const baseObjectTag: object = { key: '', value: '' };

export const ObjectTag = {
    encode(message: ObjectTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ObjectTag): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ObjectTag>, I>>(object: I): ObjectTag {
        const message = { ...baseObjectTag } as ObjectTag;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseS3APIGetObjectTaggingResponse: object = { requestId: '', versionId: '' };

export const S3APIGetObjectTaggingResponse = {
    encode(
        message: S3APIGetObjectTaggingResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        for (const v of message.tagSet) {
            ObjectTag.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIGetObjectTaggingResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIGetObjectTaggingResponse } as S3APIGetObjectTaggingResponse;
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
        const message = { ...baseS3APIGetObjectTaggingResponse } as S3APIGetObjectTaggingResponse;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.tagSet = (object.tagSet ?? []).map((e: any) => ObjectTag.fromJSON(e));
        return message;
    },

    toJSON(message: S3APIGetObjectTaggingResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        if (message.tagSet) {
            obj.tagSet = message.tagSet.map((e) => (e ? ObjectTag.toJSON(e) : undefined));
        } else {
            obj.tagSet = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIGetObjectTaggingResponse>, I>>(
        object: I,
    ): S3APIGetObjectTaggingResponse {
        const message = { ...baseS3APIGetObjectTaggingResponse } as S3APIGetObjectTaggingResponse;
        message.requestId = object.requestId ?? '';
        message.versionId = object.versionId ?? '';
        message.tagSet = object.tagSet?.map((e) => ObjectTag.fromPartial(e)) || [];
        return message;
    },
};

const baseS3APIDeleteObjectTaggingResponse: object = { requestId: '', versionId: '' };

export const S3APIDeleteObjectTaggingResponse = {
    encode(
        message: S3APIDeleteObjectTaggingResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIDeleteObjectTaggingResponse {
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
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        return message;
    },

    toJSON(message: S3APIDeleteObjectTaggingResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIDeleteObjectTaggingResponse>, I>>(
        object: I,
    ): S3APIDeleteObjectTaggingResponse {
        const message = {
            ...baseS3APIDeleteObjectTaggingResponse,
        } as S3APIDeleteObjectTaggingResponse;
        message.requestId = object.requestId ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

const baseS3APIStartMultipartUploadResponse: object = {
    requestId: '',
    bucket: '',
    key: '',
    uploadId: '',
};

export const S3APIStartMultipartUploadResponse = {
    encode(
        message: S3APIStartMultipartUploadResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.bucket !== '') {
            writer.uint32(18).string(message.bucket);
        }
        if (message.key !== '') {
            writer.uint32(26).string(message.key);
        }
        if (message.uploadId !== '') {
            writer.uint32(34).string(message.uploadId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIStartMultipartUploadResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseS3APIStartMultipartUploadResponse,
        } as S3APIStartMultipartUploadResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.string();
                    break;
                case 2:
                    message.bucket = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.uploadId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIStartMultipartUploadResponse {
        const message = {
            ...baseS3APIStartMultipartUploadResponse,
        } as S3APIStartMultipartUploadResponse;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.uploadId =
            object.uploadId !== undefined && object.uploadId !== null
                ? String(object.uploadId)
                : '';
        return message;
    },

    toJSON(message: S3APIStartMultipartUploadResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.key !== undefined && (obj.key = message.key);
        message.uploadId !== undefined && (obj.uploadId = message.uploadId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIStartMultipartUploadResponse>, I>>(
        object: I,
    ): S3APIStartMultipartUploadResponse {
        const message = {
            ...baseS3APIStartMultipartUploadResponse,
        } as S3APIStartMultipartUploadResponse;
        message.requestId = object.requestId ?? '';
        message.bucket = object.bucket ?? '';
        message.key = object.key ?? '';
        message.uploadId = object.uploadId ?? '';
        return message;
    },
};

const baseS3APIUploadPartResponse: object = { requestId: '', etag: '' };

export const S3APIUploadPartResponse = {
    encode(message: S3APIUploadPartResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.etag !== '') {
            writer.uint32(18).string(message.etag);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIUploadPartResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIUploadPartResponse } as S3APIUploadPartResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.string();
                    break;
                case 2:
                    message.etag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIUploadPartResponse {
        const message = { ...baseS3APIUploadPartResponse } as S3APIUploadPartResponse;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        return message;
    },

    toJSON(message: S3APIUploadPartResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.etag !== undefined && (obj.etag = message.etag);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIUploadPartResponse>, I>>(
        object: I,
    ): S3APIUploadPartResponse {
        const message = { ...baseS3APIUploadPartResponse } as S3APIUploadPartResponse;
        message.requestId = object.requestId ?? '';
        message.etag = object.etag ?? '';
        return message;
    },
};

const baseS3APIListPartsResponse: object = {
    bucket: '',
    key: '',
    uploadId: '',
    partNumberMarker: '',
    nextPartNumberMarker: '',
    maxParts: 0,
    isTruncated: false,
    storageClass: '',
    requestId: '',
};

export const S3APIListPartsResponse = {
    encode(message: S3APIListPartsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        if (message.key !== '') {
            writer.uint32(18).string(message.key);
        }
        if (message.uploadId !== '') {
            writer.uint32(26).string(message.uploadId);
        }
        if (message.partNumberMarker !== '') {
            writer.uint32(34).string(message.partNumberMarker);
        }
        if (message.nextPartNumberMarker !== '') {
            writer.uint32(42).string(message.nextPartNumberMarker);
        }
        if (message.maxParts !== 0) {
            writer.uint32(48).int64(message.maxParts);
        }
        if (message.isTruncated === true) {
            writer.uint32(56).bool(message.isTruncated);
        }
        for (const v of message.parts) {
            S3APIPart.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.initiator !== undefined) {
            S3APIOwner.encode(message.initiator, writer.uint32(74).fork()).ldelim();
        }
        if (message.owner !== undefined) {
            S3APIOwner.encode(message.owner, writer.uint32(82).fork()).ldelim();
        }
        if (message.storageClass !== '') {
            writer.uint32(90).string(message.storageClass);
        }
        if (message.requestId !== '') {
            writer.uint32(98).string(message.requestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIListPartsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIListPartsResponse } as S3APIListPartsResponse;
        message.parts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.uploadId = reader.string();
                    break;
                case 4:
                    message.partNumberMarker = reader.string();
                    break;
                case 5:
                    message.nextPartNumberMarker = reader.string();
                    break;
                case 6:
                    message.maxParts = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.isTruncated = reader.bool();
                    break;
                case 8:
                    message.parts.push(S3APIPart.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.initiator = S3APIOwner.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.owner = S3APIOwner.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.storageClass = reader.string();
                    break;
                case 12:
                    message.requestId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIListPartsResponse {
        const message = { ...baseS3APIListPartsResponse } as S3APIListPartsResponse;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.uploadId =
            object.uploadId !== undefined && object.uploadId !== null
                ? String(object.uploadId)
                : '';
        message.partNumberMarker =
            object.partNumberMarker !== undefined && object.partNumberMarker !== null
                ? String(object.partNumberMarker)
                : '';
        message.nextPartNumberMarker =
            object.nextPartNumberMarker !== undefined && object.nextPartNumberMarker !== null
                ? String(object.nextPartNumberMarker)
                : '';
        message.maxParts =
            object.maxParts !== undefined && object.maxParts !== null ? Number(object.maxParts) : 0;
        message.isTruncated =
            object.isTruncated !== undefined && object.isTruncated !== null
                ? Boolean(object.isTruncated)
                : false;
        message.parts = (object.parts ?? []).map((e: any) => S3APIPart.fromJSON(e));
        message.initiator =
            object.initiator !== undefined && object.initiator !== null
                ? S3APIOwner.fromJSON(object.initiator)
                : undefined;
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? S3APIOwner.fromJSON(object.owner)
                : undefined;
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : '';
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        return message;
    },

    toJSON(message: S3APIListPartsResponse): unknown {
        const obj: any = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.key !== undefined && (obj.key = message.key);
        message.uploadId !== undefined && (obj.uploadId = message.uploadId);
        message.partNumberMarker !== undefined && (obj.partNumberMarker = message.partNumberMarker);
        message.nextPartNumberMarker !== undefined &&
            (obj.nextPartNumberMarker = message.nextPartNumberMarker);
        message.maxParts !== undefined && (obj.maxParts = Math.round(message.maxParts));
        message.isTruncated !== undefined && (obj.isTruncated = message.isTruncated);
        if (message.parts) {
            obj.parts = message.parts.map((e) => (e ? S3APIPart.toJSON(e) : undefined));
        } else {
            obj.parts = [];
        }
        message.initiator !== undefined &&
            (obj.initiator = message.initiator ? S3APIOwner.toJSON(message.initiator) : undefined);
        message.owner !== undefined &&
            (obj.owner = message.owner ? S3APIOwner.toJSON(message.owner) : undefined);
        message.storageClass !== undefined && (obj.storageClass = message.storageClass);
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIListPartsResponse>, I>>(
        object: I,
    ): S3APIListPartsResponse {
        const message = { ...baseS3APIListPartsResponse } as S3APIListPartsResponse;
        message.bucket = object.bucket ?? '';
        message.key = object.key ?? '';
        message.uploadId = object.uploadId ?? '';
        message.partNumberMarker = object.partNumberMarker ?? '';
        message.nextPartNumberMarker = object.nextPartNumberMarker ?? '';
        message.maxParts = object.maxParts ?? 0;
        message.isTruncated = object.isTruncated ?? false;
        message.parts = object.parts?.map((e) => S3APIPart.fromPartial(e)) || [];
        message.initiator =
            object.initiator !== undefined && object.initiator !== null
                ? S3APIOwner.fromPartial(object.initiator)
                : undefined;
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? S3APIOwner.fromPartial(object.owner)
                : undefined;
        message.storageClass = object.storageClass ?? '';
        message.requestId = object.requestId ?? '';
        return message;
    },
};

const baseS3APIPart: object = { partNumber: 0, size: 0, etag: '' };

export const S3APIPart = {
    encode(message: S3APIPart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.partNumber !== 0) {
            writer.uint32(8).int64(message.partNumber);
        }
        if (message.lastModifiedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastModifiedAt),
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(24).int64(message.size);
        }
        if (message.etag !== '') {
            writer.uint32(34).string(message.etag);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIPart {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIPart } as S3APIPart;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partNumber = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.lastModifiedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.etag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIPart {
        const message = { ...baseS3APIPart } as S3APIPart;
        message.partNumber =
            object.partNumber !== undefined && object.partNumber !== null
                ? Number(object.partNumber)
                : 0;
        message.lastModifiedAt =
            object.lastModifiedAt !== undefined && object.lastModifiedAt !== null
                ? fromJsonTimestamp(object.lastModifiedAt)
                : undefined;
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        return message;
    },

    toJSON(message: S3APIPart): unknown {
        const obj: any = {};
        message.partNumber !== undefined && (obj.partNumber = Math.round(message.partNumber));
        message.lastModifiedAt !== undefined &&
            (obj.lastModifiedAt = message.lastModifiedAt.toISOString());
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.etag !== undefined && (obj.etag = message.etag);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIPart>, I>>(object: I): S3APIPart {
        const message = { ...baseS3APIPart } as S3APIPart;
        message.partNumber = object.partNumber ?? 0;
        message.lastModifiedAt = object.lastModifiedAt ?? undefined;
        message.size = object.size ?? 0;
        message.etag = object.etag ?? '';
        return message;
    },
};

const baseS3APIAbortMultipartUploadResponse: object = { requestId: '' };

export const S3APIAbortMultipartUploadResponse = {
    encode(
        message: S3APIAbortMultipartUploadResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIAbortMultipartUploadResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseS3APIAbortMultipartUploadResponse,
        } as S3APIAbortMultipartUploadResponse;
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

    fromJSON(object: any): S3APIAbortMultipartUploadResponse {
        const message = {
            ...baseS3APIAbortMultipartUploadResponse,
        } as S3APIAbortMultipartUploadResponse;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        return message;
    },

    toJSON(message: S3APIAbortMultipartUploadResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIAbortMultipartUploadResponse>, I>>(
        object: I,
    ): S3APIAbortMultipartUploadResponse {
        const message = {
            ...baseS3APIAbortMultipartUploadResponse,
        } as S3APIAbortMultipartUploadResponse;
        message.requestId = object.requestId ?? '';
        return message;
    },
};

const baseS3APICompleteMultipartUploadResponse: object = {
    requestId: '',
    bucket: '',
    key: '',
    etag: '',
    location: '',
    versionId: '',
};

export const S3APICompleteMultipartUploadResponse = {
    encode(
        message: S3APICompleteMultipartUploadResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.bucket !== '') {
            writer.uint32(18).string(message.bucket);
        }
        if (message.key !== '') {
            writer.uint32(26).string(message.key);
        }
        if (message.etag !== '') {
            writer.uint32(34).string(message.etag);
        }
        if (message.location !== '') {
            writer.uint32(42).string(message.location);
        }
        if (message.versionId !== '') {
            writer.uint32(50).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APICompleteMultipartUploadResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseS3APICompleteMultipartUploadResponse,
        } as S3APICompleteMultipartUploadResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.string();
                    break;
                case 2:
                    message.bucket = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.etag = reader.string();
                    break;
                case 5:
                    message.location = reader.string();
                    break;
                case 6:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APICompleteMultipartUploadResponse {
        const message = {
            ...baseS3APICompleteMultipartUploadResponse,
        } as S3APICompleteMultipartUploadResponse;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        message.location =
            object.location !== undefined && object.location !== null
                ? String(object.location)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        return message;
    },

    toJSON(message: S3APICompleteMultipartUploadResponse): unknown {
        const obj: any = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.key !== undefined && (obj.key = message.key);
        message.etag !== undefined && (obj.etag = message.etag);
        message.location !== undefined && (obj.location = message.location);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APICompleteMultipartUploadResponse>, I>>(
        object: I,
    ): S3APICompleteMultipartUploadResponse {
        const message = {
            ...baseS3APICompleteMultipartUploadResponse,
        } as S3APICompleteMultipartUploadResponse;
        message.requestId = object.requestId ?? '';
        message.bucket = object.bucket ?? '';
        message.key = object.key ?? '';
        message.etag = object.etag ?? '';
        message.location = object.location ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

const baseS3APIListMultipartUploadsResponse: object = {
    bucket: '',
    keyMarker: '',
    uploadIdMarker: '',
    nextKeyMarker: '',
    nextUploadIdMarker: '',
    delimiter: '',
    prefix: '',
    maxUploads: 0,
    isTruncated: false,
    commonPrefixes: '',
    requestId: '',
};

export const S3APIListMultipartUploadsResponse = {
    encode(
        message: S3APIListMultipartUploadsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        if (message.keyMarker !== '') {
            writer.uint32(18).string(message.keyMarker);
        }
        if (message.uploadIdMarker !== '') {
            writer.uint32(26).string(message.uploadIdMarker);
        }
        if (message.nextKeyMarker !== '') {
            writer.uint32(34).string(message.nextKeyMarker);
        }
        if (message.nextUploadIdMarker !== '') {
            writer.uint32(42).string(message.nextUploadIdMarker);
        }
        if (message.delimiter !== '') {
            writer.uint32(50).string(message.delimiter);
        }
        if (message.prefix !== '') {
            writer.uint32(58).string(message.prefix);
        }
        if (message.maxUploads !== 0) {
            writer.uint32(64).int64(message.maxUploads);
        }
        if (message.isTruncated === true) {
            writer.uint32(72).bool(message.isTruncated);
        }
        for (const v of message.uploads) {
            S3APIMultipartUpload.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.commonPrefixes) {
            writer.uint32(90).string(v!);
        }
        if (message.requestId !== '') {
            writer.uint32(98).string(message.requestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIListMultipartUploadsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseS3APIListMultipartUploadsResponse,
        } as S3APIListMultipartUploadsResponse;
        message.uploads = [];
        message.commonPrefixes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                case 2:
                    message.keyMarker = reader.string();
                    break;
                case 3:
                    message.uploadIdMarker = reader.string();
                    break;
                case 4:
                    message.nextKeyMarker = reader.string();
                    break;
                case 5:
                    message.nextUploadIdMarker = reader.string();
                    break;
                case 6:
                    message.delimiter = reader.string();
                    break;
                case 7:
                    message.prefix = reader.string();
                    break;
                case 8:
                    message.maxUploads = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.isTruncated = reader.bool();
                    break;
                case 10:
                    message.uploads.push(S3APIMultipartUpload.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.commonPrefixes.push(reader.string());
                    break;
                case 12:
                    message.requestId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIListMultipartUploadsResponse {
        const message = {
            ...baseS3APIListMultipartUploadsResponse,
        } as S3APIListMultipartUploadsResponse;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.keyMarker =
            object.keyMarker !== undefined && object.keyMarker !== null
                ? String(object.keyMarker)
                : '';
        message.uploadIdMarker =
            object.uploadIdMarker !== undefined && object.uploadIdMarker !== null
                ? String(object.uploadIdMarker)
                : '';
        message.nextKeyMarker =
            object.nextKeyMarker !== undefined && object.nextKeyMarker !== null
                ? String(object.nextKeyMarker)
                : '';
        message.nextUploadIdMarker =
            object.nextUploadIdMarker !== undefined && object.nextUploadIdMarker !== null
                ? String(object.nextUploadIdMarker)
                : '';
        message.delimiter =
            object.delimiter !== undefined && object.delimiter !== null
                ? String(object.delimiter)
                : '';
        message.prefix =
            object.prefix !== undefined && object.prefix !== null ? String(object.prefix) : '';
        message.maxUploads =
            object.maxUploads !== undefined && object.maxUploads !== null
                ? Number(object.maxUploads)
                : 0;
        message.isTruncated =
            object.isTruncated !== undefined && object.isTruncated !== null
                ? Boolean(object.isTruncated)
                : false;
        message.uploads = (object.uploads ?? []).map((e: any) => S3APIMultipartUpload.fromJSON(e));
        message.commonPrefixes = (object.commonPrefixes ?? []).map((e: any) => String(e));
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        return message;
    },

    toJSON(message: S3APIListMultipartUploadsResponse): unknown {
        const obj: any = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.keyMarker !== undefined && (obj.keyMarker = message.keyMarker);
        message.uploadIdMarker !== undefined && (obj.uploadIdMarker = message.uploadIdMarker);
        message.nextKeyMarker !== undefined && (obj.nextKeyMarker = message.nextKeyMarker);
        message.nextUploadIdMarker !== undefined &&
            (obj.nextUploadIdMarker = message.nextUploadIdMarker);
        message.delimiter !== undefined && (obj.delimiter = message.delimiter);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.maxUploads !== undefined && (obj.maxUploads = Math.round(message.maxUploads));
        message.isTruncated !== undefined && (obj.isTruncated = message.isTruncated);
        if (message.uploads) {
            obj.uploads = message.uploads.map((e) =>
                e ? S3APIMultipartUpload.toJSON(e) : undefined,
            );
        } else {
            obj.uploads = [];
        }
        if (message.commonPrefixes) {
            obj.commonPrefixes = message.commonPrefixes.map((e) => e);
        } else {
            obj.commonPrefixes = [];
        }
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIListMultipartUploadsResponse>, I>>(
        object: I,
    ): S3APIListMultipartUploadsResponse {
        const message = {
            ...baseS3APIListMultipartUploadsResponse,
        } as S3APIListMultipartUploadsResponse;
        message.bucket = object.bucket ?? '';
        message.keyMarker = object.keyMarker ?? '';
        message.uploadIdMarker = object.uploadIdMarker ?? '';
        message.nextKeyMarker = object.nextKeyMarker ?? '';
        message.nextUploadIdMarker = object.nextUploadIdMarker ?? '';
        message.delimiter = object.delimiter ?? '';
        message.prefix = object.prefix ?? '';
        message.maxUploads = object.maxUploads ?? 0;
        message.isTruncated = object.isTruncated ?? false;
        message.uploads = object.uploads?.map((e) => S3APIMultipartUpload.fromPartial(e)) || [];
        message.commonPrefixes = object.commonPrefixes?.map((e) => e) || [];
        message.requestId = object.requestId ?? '';
        return message;
    },
};

const baseS3APIMultipartUpload: object = { key: '', uploadId: '', storageClass: '' };

export const S3APIMultipartUpload = {
    encode(message: S3APIMultipartUpload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.uploadId !== '') {
            writer.uint32(18).string(message.uploadId);
        }
        if (message.initiator !== undefined) {
            S3APIOwner.encode(message.initiator, writer.uint32(26).fork()).ldelim();
        }
        if (message.owner !== undefined) {
            S3APIOwner.encode(message.owner, writer.uint32(34).fork()).ldelim();
        }
        if (message.storageClass !== '') {
            writer.uint32(42).string(message.storageClass);
        }
        if (message.initiatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.initiatedAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIMultipartUpload {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIMultipartUpload } as S3APIMultipartUpload;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.uploadId = reader.string();
                    break;
                case 3:
                    message.initiator = S3APIOwner.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.owner = S3APIOwner.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.storageClass = reader.string();
                    break;
                case 6:
                    message.initiatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIMultipartUpload {
        const message = { ...baseS3APIMultipartUpload } as S3APIMultipartUpload;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.uploadId =
            object.uploadId !== undefined && object.uploadId !== null
                ? String(object.uploadId)
                : '';
        message.initiator =
            object.initiator !== undefined && object.initiator !== null
                ? S3APIOwner.fromJSON(object.initiator)
                : undefined;
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? S3APIOwner.fromJSON(object.owner)
                : undefined;
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : '';
        message.initiatedAt =
            object.initiatedAt !== undefined && object.initiatedAt !== null
                ? fromJsonTimestamp(object.initiatedAt)
                : undefined;
        return message;
    },

    toJSON(message: S3APIMultipartUpload): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.uploadId !== undefined && (obj.uploadId = message.uploadId);
        message.initiator !== undefined &&
            (obj.initiator = message.initiator ? S3APIOwner.toJSON(message.initiator) : undefined);
        message.owner !== undefined &&
            (obj.owner = message.owner ? S3APIOwner.toJSON(message.owner) : undefined);
        message.storageClass !== undefined && (obj.storageClass = message.storageClass);
        message.initiatedAt !== undefined && (obj.initiatedAt = message.initiatedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIMultipartUpload>, I>>(
        object: I,
    ): S3APIMultipartUpload {
        const message = { ...baseS3APIMultipartUpload } as S3APIMultipartUpload;
        message.key = object.key ?? '';
        message.uploadId = object.uploadId ?? '';
        message.initiator =
            object.initiator !== undefined && object.initiator !== null
                ? S3APIOwner.fromPartial(object.initiator)
                : undefined;
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? S3APIOwner.fromPartial(object.owner)
                : undefined;
        message.storageClass = object.storageClass ?? '';
        message.initiatedAt = object.initiatedAt ?? undefined;
        return message;
    },
};

const baseS3APIOwner: object = { id: '', displayName: '' };

export const S3APIOwner = {
    encode(message: S3APIOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.displayName !== '') {
            writer.uint32(18).string(message.displayName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIOwner {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIOwner } as S3APIOwner;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.displayName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIOwner {
        const message = { ...baseS3APIOwner } as S3APIOwner;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.displayName =
            object.displayName !== undefined && object.displayName !== null
                ? String(object.displayName)
                : '';
        return message;
    },

    toJSON(message: S3APIOwner): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIOwner>, I>>(object: I): S3APIOwner {
        const message = { ...baseS3APIOwner } as S3APIOwner;
        message.id = object.id ?? '';
        message.displayName = object.displayName ?? '';
        return message;
    },
};

const baseS3APIUploadPartCopyResponse: object = { etag: '', requestId: '' };

export const S3APIUploadPartCopyResponse = {
    encode(
        message: S3APIUploadPartCopyResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.etag !== '') {
            writer.uint32(10).string(message.etag);
        }
        if (message.lastModifiedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastModifiedAt),
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.requestId !== '') {
            writer.uint32(26).string(message.requestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIUploadPartCopyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIUploadPartCopyResponse } as S3APIUploadPartCopyResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.etag = reader.string();
                    break;
                case 2:
                    message.lastModifiedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
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

    fromJSON(object: any): S3APIUploadPartCopyResponse {
        const message = { ...baseS3APIUploadPartCopyResponse } as S3APIUploadPartCopyResponse;
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        message.lastModifiedAt =
            object.lastModifiedAt !== undefined && object.lastModifiedAt !== null
                ? fromJsonTimestamp(object.lastModifiedAt)
                : undefined;
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        return message;
    },

    toJSON(message: S3APIUploadPartCopyResponse): unknown {
        const obj: any = {};
        message.etag !== undefined && (obj.etag = message.etag);
        message.lastModifiedAt !== undefined &&
            (obj.lastModifiedAt = message.lastModifiedAt.toISOString());
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIUploadPartCopyResponse>, I>>(
        object: I,
    ): S3APIUploadPartCopyResponse {
        const message = { ...baseS3APIUploadPartCopyResponse } as S3APIUploadPartCopyResponse;
        message.etag = object.etag ?? '';
        message.lastModifiedAt = object.lastModifiedAt ?? undefined;
        message.requestId = object.requestId ?? '';
        return message;
    },
};

const baseS3APIListObjectsV2Response: object = {
    isTruncated: false,
    name: '',
    prefix: '',
    delimiter: '',
    maxKeys: 0,
    keyCount: 0,
    continuationToken: '',
    nextContinuationToken: '',
    startAfter: '',
    requestId: '',
};

export const S3APIListObjectsV2Response = {
    encode(
        message: S3APIListObjectsV2Response,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.isTruncated === true) {
            writer.uint32(8).bool(message.isTruncated);
        }
        for (const v of message.contents) {
            S3APIObject.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.prefix !== '') {
            writer.uint32(34).string(message.prefix);
        }
        if (message.delimiter !== '') {
            writer.uint32(42).string(message.delimiter);
        }
        if (message.maxKeys !== 0) {
            writer.uint32(48).int64(message.maxKeys);
        }
        for (const v of message.commonPrefixes) {
            S3APICommonPrefix.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.keyCount !== 0) {
            writer.uint32(64).int64(message.keyCount);
        }
        if (message.continuationToken !== '') {
            writer.uint32(74).string(message.continuationToken);
        }
        if (message.nextContinuationToken !== '') {
            writer.uint32(82).string(message.nextContinuationToken);
        }
        if (message.startAfter !== '') {
            writer.uint32(90).string(message.startAfter);
        }
        if (message.requestId !== '') {
            writer.uint32(98).string(message.requestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIListObjectsV2Response {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIListObjectsV2Response } as S3APIListObjectsV2Response;
        message.contents = [];
        message.commonPrefixes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isTruncated = reader.bool();
                    break;
                case 2:
                    message.contents.push(S3APIObject.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.prefix = reader.string();
                    break;
                case 5:
                    message.delimiter = reader.string();
                    break;
                case 6:
                    message.maxKeys = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.commonPrefixes.push(S3APICommonPrefix.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.keyCount = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.continuationToken = reader.string();
                    break;
                case 10:
                    message.nextContinuationToken = reader.string();
                    break;
                case 11:
                    message.startAfter = reader.string();
                    break;
                case 12:
                    message.requestId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIListObjectsV2Response {
        const message = { ...baseS3APIListObjectsV2Response } as S3APIListObjectsV2Response;
        message.isTruncated =
            object.isTruncated !== undefined && object.isTruncated !== null
                ? Boolean(object.isTruncated)
                : false;
        message.contents = (object.contents ?? []).map((e: any) => S3APIObject.fromJSON(e));
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.prefix =
            object.prefix !== undefined && object.prefix !== null ? String(object.prefix) : '';
        message.delimiter =
            object.delimiter !== undefined && object.delimiter !== null
                ? String(object.delimiter)
                : '';
        message.maxKeys =
            object.maxKeys !== undefined && object.maxKeys !== null ? Number(object.maxKeys) : 0;
        message.commonPrefixes = (object.commonPrefixes ?? []).map((e: any) =>
            S3APICommonPrefix.fromJSON(e),
        );
        message.keyCount =
            object.keyCount !== undefined && object.keyCount !== null ? Number(object.keyCount) : 0;
        message.continuationToken =
            object.continuationToken !== undefined && object.continuationToken !== null
                ? String(object.continuationToken)
                : '';
        message.nextContinuationToken =
            object.nextContinuationToken !== undefined && object.nextContinuationToken !== null
                ? String(object.nextContinuationToken)
                : '';
        message.startAfter =
            object.startAfter !== undefined && object.startAfter !== null
                ? String(object.startAfter)
                : '';
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : '';
        return message;
    },

    toJSON(message: S3APIListObjectsV2Response): unknown {
        const obj: any = {};
        message.isTruncated !== undefined && (obj.isTruncated = message.isTruncated);
        if (message.contents) {
            obj.contents = message.contents.map((e) => (e ? S3APIObject.toJSON(e) : undefined));
        } else {
            obj.contents = [];
        }
        message.name !== undefined && (obj.name = message.name);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.delimiter !== undefined && (obj.delimiter = message.delimiter);
        message.maxKeys !== undefined && (obj.maxKeys = Math.round(message.maxKeys));
        if (message.commonPrefixes) {
            obj.commonPrefixes = message.commonPrefixes.map((e) =>
                e ? S3APICommonPrefix.toJSON(e) : undefined,
            );
        } else {
            obj.commonPrefixes = [];
        }
        message.keyCount !== undefined && (obj.keyCount = Math.round(message.keyCount));
        message.continuationToken !== undefined &&
            (obj.continuationToken = message.continuationToken);
        message.nextContinuationToken !== undefined &&
            (obj.nextContinuationToken = message.nextContinuationToken);
        message.startAfter !== undefined && (obj.startAfter = message.startAfter);
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIListObjectsV2Response>, I>>(
        object: I,
    ): S3APIListObjectsV2Response {
        const message = { ...baseS3APIListObjectsV2Response } as S3APIListObjectsV2Response;
        message.isTruncated = object.isTruncated ?? false;
        message.contents = object.contents?.map((e) => S3APIObject.fromPartial(e)) || [];
        message.name = object.name ?? '';
        message.prefix = object.prefix ?? '';
        message.delimiter = object.delimiter ?? '';
        message.maxKeys = object.maxKeys ?? 0;
        message.commonPrefixes =
            object.commonPrefixes?.map((e) => S3APICommonPrefix.fromPartial(e)) || [];
        message.keyCount = object.keyCount ?? 0;
        message.continuationToken = object.continuationToken ?? '';
        message.nextContinuationToken = object.nextContinuationToken ?? '';
        message.startAfter = object.startAfter ?? '';
        message.requestId = object.requestId ?? '';
        return message;
    },
};

const baseS3APIObject: object = { key: '', etag: '', size: 0, storageClass: '' };

export const S3APIObject = {
    encode(message: S3APIObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.lastModified !== undefined) {
            Timestamp.encode(toTimestamp(message.lastModified), writer.uint32(18).fork()).ldelim();
        }
        if (message.etag !== '') {
            writer.uint32(26).string(message.etag);
        }
        if (message.size !== 0) {
            writer.uint32(32).int64(message.size);
        }
        if (message.owner !== undefined) {
            S3APIOwner.encode(message.owner, writer.uint32(42).fork()).ldelim();
        }
        if (message.storageClass !== '') {
            writer.uint32(50).string(message.storageClass);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APIObject {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APIObject } as S3APIObject;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.lastModified = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.etag = reader.string();
                    break;
                case 4:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.owner = S3APIOwner.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.storageClass = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APIObject {
        const message = { ...baseS3APIObject } as S3APIObject;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.lastModified =
            object.lastModified !== undefined && object.lastModified !== null
                ? fromJsonTimestamp(object.lastModified)
                : undefined;
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? S3APIOwner.fromJSON(object.owner)
                : undefined;
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : '';
        return message;
    },

    toJSON(message: S3APIObject): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.lastModified !== undefined &&
            (obj.lastModified = message.lastModified.toISOString());
        message.etag !== undefined && (obj.etag = message.etag);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.owner !== undefined &&
            (obj.owner = message.owner ? S3APIOwner.toJSON(message.owner) : undefined);
        message.storageClass !== undefined && (obj.storageClass = message.storageClass);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APIObject>, I>>(object: I): S3APIObject {
        const message = { ...baseS3APIObject } as S3APIObject;
        message.key = object.key ?? '';
        message.lastModified = object.lastModified ?? undefined;
        message.etag = object.etag ?? '';
        message.size = object.size ?? 0;
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? S3APIOwner.fromPartial(object.owner)
                : undefined;
        message.storageClass = object.storageClass ?? '';
        return message;
    },
};

const baseS3APICommonPrefix: object = { prefix: '' };

export const S3APICommonPrefix = {
    encode(message: S3APICommonPrefix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.prefix !== '') {
            writer.uint32(10).string(message.prefix);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): S3APICommonPrefix {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseS3APICommonPrefix } as S3APICommonPrefix;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): S3APICommonPrefix {
        const message = { ...baseS3APICommonPrefix } as S3APICommonPrefix;
        message.prefix =
            object.prefix !== undefined && object.prefix !== null ? String(object.prefix) : '';
        return message;
    },

    toJSON(message: S3APICommonPrefix): unknown {
        const obj: any = {};
        message.prefix !== undefined && (obj.prefix = message.prefix);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<S3APICommonPrefix>, I>>(object: I): S3APICommonPrefix {
        const message = { ...baseS3APICommonPrefix } as S3APICommonPrefix;
        message.prefix = object.prefix ?? '';
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
