/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1';

/** Message to describe a crontab schedule. */
export interface CronTab {
    dayOfMonth: string;
    month: string;
    dayOfWeek: string;
}

/** Message to describe a retention policy for cluster backups. */
export interface BackupRetentionPolicy {
    /** Required. Policy ID. */
    policyId: string;
    /** PostgreSQL cluster ID. */
    clusterId: string;
    /** Required. Policy name. */
    policyName: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** CronTab schedule. */
    cron?: CronTab;
    /** Retention duration. */
    retainForDays: number;
    /** Human-readable description. */
    description: string;
}

const baseCronTab: object = { dayOfMonth: '', month: '', dayOfWeek: '' };

export const CronTab = {
    encode(message: CronTab, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dayOfMonth !== '') {
            writer.uint32(26).string(message.dayOfMonth);
        }
        if (message.month !== '') {
            writer.uint32(34).string(message.month);
        }
        if (message.dayOfWeek !== '') {
            writer.uint32(42).string(message.dayOfWeek);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CronTab {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCronTab } as CronTab;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.dayOfMonth = reader.string();
                    break;
                case 4:
                    message.month = reader.string();
                    break;
                case 5:
                    message.dayOfWeek = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CronTab {
        const message = { ...baseCronTab } as CronTab;
        message.dayOfMonth =
            object.dayOfMonth !== undefined && object.dayOfMonth !== null
                ? String(object.dayOfMonth)
                : '';
        message.month =
            object.month !== undefined && object.month !== null ? String(object.month) : '';
        message.dayOfWeek =
            object.dayOfWeek !== undefined && object.dayOfWeek !== null
                ? String(object.dayOfWeek)
                : '';
        return message;
    },

    toJSON(message: CronTab): unknown {
        const obj: any = {};
        message.dayOfMonth !== undefined && (obj.dayOfMonth = message.dayOfMonth);
        message.month !== undefined && (obj.month = message.month);
        message.dayOfWeek !== undefined && (obj.dayOfWeek = message.dayOfWeek);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CronTab>, I>>(object: I): CronTab {
        const message = { ...baseCronTab } as CronTab;
        message.dayOfMonth = object.dayOfMonth ?? '';
        message.month = object.month ?? '';
        message.dayOfWeek = object.dayOfWeek ?? '';
        return message;
    },
};

const baseBackupRetentionPolicy: object = {
    policyId: '',
    clusterId: '',
    policyName: '',
    retainForDays: 0,
    description: '',
};

export const BackupRetentionPolicy = {
    encode(message: BackupRetentionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.policyId !== '') {
            writer.uint32(10).string(message.policyId);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.policyName !== '') {
            writer.uint32(26).string(message.policyName);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.cron !== undefined) {
            CronTab.encode(message.cron, writer.uint32(42).fork()).ldelim();
        }
        if (message.retainForDays !== 0) {
            writer.uint32(48).int64(message.retainForDays);
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackupRetentionPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupRetentionPolicy } as BackupRetentionPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.policyName = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.cron = CronTab.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.retainForDays = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BackupRetentionPolicy {
        const message = { ...baseBackupRetentionPolicy } as BackupRetentionPolicy;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.policyName =
            object.policyName !== undefined && object.policyName !== null
                ? String(object.policyName)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.cron =
            object.cron !== undefined && object.cron !== null
                ? CronTab.fromJSON(object.cron)
                : undefined;
        message.retainForDays =
            object.retainForDays !== undefined && object.retainForDays !== null
                ? Number(object.retainForDays)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: BackupRetentionPolicy): unknown {
        const obj: any = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.policyName !== undefined && (obj.policyName = message.policyName);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.cron !== undefined &&
            (obj.cron = message.cron ? CronTab.toJSON(message.cron) : undefined);
        message.retainForDays !== undefined &&
            (obj.retainForDays = Math.round(message.retainForDays));
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackupRetentionPolicy>, I>>(
        object: I,
    ): BackupRetentionPolicy {
        const message = { ...baseBackupRetentionPolicy } as BackupRetentionPolicy;
        message.policyId = object.policyId ?? '';
        message.clusterId = object.clusterId ?? '';
        message.policyName = object.policyName ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.cron =
            object.cron !== undefined && object.cron !== null
                ? CronTab.fromPartial(object.cron)
                : undefined;
        message.retainForDays = object.retainForDays ?? 0;
        message.description = object.description ?? '';
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
