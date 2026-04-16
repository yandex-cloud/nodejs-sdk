/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Resource } from './resource';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.quotamanager.v1';

export interface QuotaRequest {
    /** ID of the quota request. */
    id: string;
    resource?: Resource;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Status of current quota request. */
    status: QuotaRequest_Status;
    /** Quota limits */
    quotaLimits: QuotaRequest_QuotaLimit[];
    /** ID of the subject who created quota request. */
    createdBy: string;
}

export enum QuotaRequest_Status {
    STATUS_UNSPECIFIED = 0,
    /** PENDING - The request is pending and is waiting to be processed. */
    PENDING = 1,
    /** PROCESSING - The request is processing. */
    PROCESSING = 2,
    /** PROCESSED - The request was processed. */
    PROCESSED = 3,
    /** CANCELED - The request was canceled. */
    CANCELED = 4,
    /** DELETING - The request is deleting. */
    DELETING = 5,
    UNRECOGNIZED = -1,
}

export function quotaRequest_StatusFromJSON(object: any): QuotaRequest_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return QuotaRequest_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PENDING':
            return QuotaRequest_Status.PENDING;
        case 2:
        case 'PROCESSING':
            return QuotaRequest_Status.PROCESSING;
        case 3:
        case 'PROCESSED':
            return QuotaRequest_Status.PROCESSED;
        case 4:
        case 'CANCELED':
            return QuotaRequest_Status.CANCELED;
        case 5:
        case 'DELETING':
            return QuotaRequest_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return QuotaRequest_Status.UNRECOGNIZED;
    }
}

export function quotaRequest_StatusToJSON(object: QuotaRequest_Status): string {
    switch (object) {
        case QuotaRequest_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case QuotaRequest_Status.PENDING:
            return 'PENDING';
        case QuotaRequest_Status.PROCESSING:
            return 'PROCESSING';
        case QuotaRequest_Status.PROCESSED:
            return 'PROCESSED';
        case QuotaRequest_Status.CANCELED:
            return 'CANCELED';
        case QuotaRequest_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface QuotaRequest_QuotaLimit {
    /** ID of the quota. */
    quotaId: string;
    /** Desired limit. */
    desiredLimit: number;
    /** Approved limit. */
    approvedLimit: number;
    /** Unit of quota. */
    unit: string;
    /** Status of current quota limit. */
    status: QuotaRequest_QuotaLimit_Status;
    message: string;
    /** ID of the subject who modified quota limit. */
    modifiedBy: string;
}

export enum QuotaRequest_QuotaLimit_Status {
    STATUS_UNSPECIFIED = 0,
    /** PENDING - The request is pending and is waiting to be processed. */
    PENDING = 1,
    /** PROCESSING - The request is processing. */
    PROCESSING = 2,
    /** PARTIAL_APPROVED - The request was partially approved. */
    PARTIAL_APPROVED = 3,
    /** APPROVED - The request was approved. */
    APPROVED = 4,
    /** REJECTED - The request was rejected. */
    REJECTED = 5,
    /** CANCELED - The request was canceled. */
    CANCELED = 6,
    UNRECOGNIZED = -1,
}

export function quotaRequest_QuotaLimit_StatusFromJSON(
    object: any,
): QuotaRequest_QuotaLimit_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return QuotaRequest_QuotaLimit_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PENDING':
            return QuotaRequest_QuotaLimit_Status.PENDING;
        case 2:
        case 'PROCESSING':
            return QuotaRequest_QuotaLimit_Status.PROCESSING;
        case 3:
        case 'PARTIAL_APPROVED':
            return QuotaRequest_QuotaLimit_Status.PARTIAL_APPROVED;
        case 4:
        case 'APPROVED':
            return QuotaRequest_QuotaLimit_Status.APPROVED;
        case 5:
        case 'REJECTED':
            return QuotaRequest_QuotaLimit_Status.REJECTED;
        case 6:
        case 'CANCELED':
            return QuotaRequest_QuotaLimit_Status.CANCELED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return QuotaRequest_QuotaLimit_Status.UNRECOGNIZED;
    }
}

export function quotaRequest_QuotaLimit_StatusToJSON(
    object: QuotaRequest_QuotaLimit_Status,
): string {
    switch (object) {
        case QuotaRequest_QuotaLimit_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case QuotaRequest_QuotaLimit_Status.PENDING:
            return 'PENDING';
        case QuotaRequest_QuotaLimit_Status.PROCESSING:
            return 'PROCESSING';
        case QuotaRequest_QuotaLimit_Status.PARTIAL_APPROVED:
            return 'PARTIAL_APPROVED';
        case QuotaRequest_QuotaLimit_Status.APPROVED:
            return 'APPROVED';
        case QuotaRequest_QuotaLimit_Status.REJECTED:
            return 'REJECTED';
        case QuotaRequest_QuotaLimit_Status.CANCELED:
            return 'CANCELED';
        default:
            return 'UNKNOWN';
    }
}

const baseQuotaRequest: object = { id: '', status: 0, createdBy: '' };

export const QuotaRequest: {
    encode(message: QuotaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaRequest;
    fromJSON(object: any): QuotaRequest;
    toJSON(message: QuotaRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<QuotaRequest>, I>>(object: I): QuotaRequest;
} = {
    encode(message: QuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        for (const v of message.quotaLimits) {
            QuotaRequest_QuotaLimit.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(58).string(message.createdBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuotaRequest } as QuotaRequest;
        message.quotaLimits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.quotaLimits.push(
                        QuotaRequest_QuotaLimit.decode(reader, reader.uint32()),
                    );
                    break;
                case 7:
                    message.createdBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QuotaRequest {
        const message = { ...baseQuotaRequest } as QuotaRequest;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromJSON(object.resource)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? quotaRequest_StatusFromJSON(object.status)
                : 0;
        message.quotaLimits = (object.quotaLimits ?? []).map((e: any) =>
            QuotaRequest_QuotaLimit.fromJSON(e),
        );
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        return message;
    },

    toJSON(message: QuotaRequest): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.resource !== undefined &&
            (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.status !== undefined && (obj.status = quotaRequest_StatusToJSON(message.status));
        if (message.quotaLimits) {
            obj.quotaLimits = message.quotaLimits.map((e) =>
                e ? QuotaRequest_QuotaLimit.toJSON(e) : undefined,
            );
        } else {
            obj.quotaLimits = [];
        }
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QuotaRequest>, I>>(object: I): QuotaRequest {
        const message = { ...baseQuotaRequest } as QuotaRequest;
        message.id = object.id ?? '';
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromPartial(object.resource)
                : undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.status = object.status ?? 0;
        message.quotaLimits =
            object.quotaLimits?.map((e) => QuotaRequest_QuotaLimit.fromPartial(e)) || [];
        message.createdBy = object.createdBy ?? '';
        return message;
    },
};

const baseQuotaRequest_QuotaLimit: object = {
    quotaId: '',
    desiredLimit: 0,
    approvedLimit: 0,
    unit: '',
    status: 0,
    message: '',
    modifiedBy: '',
};

export const QuotaRequest_QuotaLimit: {
    encode(message: QuotaRequest_QuotaLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaRequest_QuotaLimit;
    fromJSON(object: any): QuotaRequest_QuotaLimit;
    toJSON(message: QuotaRequest_QuotaLimit): unknown;
    fromPartial<I extends Exact<DeepPartial<QuotaRequest_QuotaLimit>, I>>(object: I): QuotaRequest_QuotaLimit;
} = {
    encode(message: QuotaRequest_QuotaLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.quotaId !== '') {
            writer.uint32(10).string(message.quotaId);
        }
        if (message.desiredLimit !== 0) {
            writer.uint32(17).double(message.desiredLimit);
        }
        if (message.approvedLimit !== 0) {
            writer.uint32(25).double(message.approvedLimit);
        }
        if (message.unit !== '') {
            writer.uint32(34).string(message.unit);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.message !== '') {
            writer.uint32(50).string(message.message);
        }
        if (message.modifiedBy !== '') {
            writer.uint32(58).string(message.modifiedBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaRequest_QuotaLimit {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuotaRequest_QuotaLimit } as QuotaRequest_QuotaLimit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaId = reader.string();
                    break;
                case 2:
                    message.desiredLimit = reader.double();
                    break;
                case 3:
                    message.approvedLimit = reader.double();
                    break;
                case 4:
                    message.unit = reader.string();
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.message = reader.string();
                    break;
                case 7:
                    message.modifiedBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QuotaRequest_QuotaLimit {
        const message = { ...baseQuotaRequest_QuotaLimit } as QuotaRequest_QuotaLimit;
        message.quotaId =
            object.quotaId !== undefined && object.quotaId !== null ? String(object.quotaId) : '';
        message.desiredLimit =
            object.desiredLimit !== undefined && object.desiredLimit !== null
                ? Number(object.desiredLimit)
                : 0;
        message.approvedLimit =
            object.approvedLimit !== undefined && object.approvedLimit !== null
                ? Number(object.approvedLimit)
                : 0;
        message.unit = object.unit !== undefined && object.unit !== null ? String(object.unit) : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? quotaRequest_QuotaLimit_StatusFromJSON(object.status)
                : 0;
        message.message =
            object.message !== undefined && object.message !== null ? String(object.message) : '';
        message.modifiedBy =
            object.modifiedBy !== undefined && object.modifiedBy !== null
                ? String(object.modifiedBy)
                : '';
        return message;
    },

    toJSON(message: QuotaRequest_QuotaLimit): unknown {
        const obj: any = {};
        message.quotaId !== undefined && (obj.quotaId = message.quotaId);
        message.desiredLimit !== undefined && (obj.desiredLimit = message.desiredLimit);
        message.approvedLimit !== undefined && (obj.approvedLimit = message.approvedLimit);
        message.unit !== undefined && (obj.unit = message.unit);
        message.status !== undefined &&
            (obj.status = quotaRequest_QuotaLimit_StatusToJSON(message.status));
        message.message !== undefined && (obj.message = message.message);
        message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QuotaRequest_QuotaLimit>, I>>(
        object: I,
    ): QuotaRequest_QuotaLimit {
        const message = { ...baseQuotaRequest_QuotaLimit } as QuotaRequest_QuotaLimit;
        message.quotaId = object.quotaId ?? '';
        message.desiredLimit = object.desiredLimit ?? 0;
        message.approvedLimit = object.approvedLimit ?? 0;
        message.unit = object.unit ?? '';
        message.status = object.status ?? 0;
        message.message = object.message ?? '';
        message.modifiedBy = object.modifiedBy ?? '';
        return message;
    },
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
