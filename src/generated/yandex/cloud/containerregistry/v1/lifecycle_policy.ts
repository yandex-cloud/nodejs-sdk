/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

export interface LifecyclePolicy {
    $type: 'yandex.cloud.containerregistry.v1.LifecyclePolicy';
    /** ID of the lifecycle policy. */
    id: string;
    /** Name of the lifecycle policy. */
    name: string;
    /**
     * ID of the repository that the lifecycle policy belongs to.
     * Required. The maximum string length in characters is 50.
     */
    repositoryId: string;
    /**
     * Description of the lifecycle policy.
     * The maximum string length in characters is 256.
     */
    description: string;
    /** Status of lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** Creation timestamp. */
    createdAt?: Date;
    /** The rules of lifecycle policy. */
    rules: LifecycleRule[];
}

export enum LifecyclePolicy_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - Policy is active and regularly deletes Docker images according to the established rules. */
    ACTIVE = 1,
    /**
     * DISABLED - Policy is disabled and does not delete Docker images in the repository.
     * Policies in this status can be used for preparing and testing rules.
     */
    DISABLED = 2,
    UNRECOGNIZED = -1,
}

export function lifecyclePolicy_StatusFromJSON(object: any): LifecyclePolicy_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return LifecyclePolicy_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return LifecyclePolicy_Status.ACTIVE;
        case 2:
        case 'DISABLED':
            return LifecyclePolicy_Status.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LifecyclePolicy_Status.UNRECOGNIZED;
    }
}

export function lifecyclePolicy_StatusToJSON(object: LifecyclePolicy_Status): string {
    switch (object) {
        case LifecyclePolicy_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case LifecyclePolicy_Status.ACTIVE:
            return 'ACTIVE';
        case LifecyclePolicy_Status.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface LifecycleRule {
    $type: 'yandex.cloud.containerregistry.v1.LifecycleRule';
    /** Description of the lifecycle policy rule. */
    description: string;
    /**
     * Period of time for automatic deletion.
     * Period must be a multiple of 24 hours.
     */
    expirePeriod?: Duration;
    /** Tag for specifying a filter in the form of a regular expression. */
    tagRegexp: string;
    /** Tag for applying the rule to Docker images without tags. */
    untagged: boolean;
    /** Number of Docker images (falling under the specified filter by tags) that must be left, even if the expire_period has already expired. */
    retainedTop: number;
}

const baseLifecyclePolicy: object = {
    $type: 'yandex.cloud.containerregistry.v1.LifecyclePolicy',
    id: '',
    name: '',
    repositoryId: '',
    description: '',
    status: 0,
};

export const LifecyclePolicy = {
    $type: 'yandex.cloud.containerregistry.v1.LifecyclePolicy' as const,

    encode(message: LifecyclePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.repositoryId !== '') {
            writer.uint32(26).string(message.repositoryId);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.rules) {
            LifecycleRule.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LifecyclePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.repositoryId = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LifecyclePolicy {
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.repositoryId =
            object.repositoryId !== undefined && object.repositoryId !== null
                ? String(object.repositoryId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? lifecyclePolicy_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.rules = (object.rules ?? []).map((e: any) => LifecycleRule.fromJSON(e));
        return message;
    },

    toJSON(message: LifecyclePolicy): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.repositoryId !== undefined && (obj.repositoryId = message.repositoryId);
        message.description !== undefined && (obj.description = message.description);
        message.status !== undefined && (obj.status = lifecyclePolicy_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? LifecycleRule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LifecyclePolicy>, I>>(object: I): LifecyclePolicy {
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.repositoryId = object.repositoryId ?? '';
        message.description = object.description ?? '';
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.rules = object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(LifecyclePolicy.$type, LifecyclePolicy);

const baseLifecycleRule: object = {
    $type: 'yandex.cloud.containerregistry.v1.LifecycleRule',
    description: '',
    tagRegexp: '',
    untagged: false,
    retainedTop: 0,
};

export const LifecycleRule = {
    $type: 'yandex.cloud.containerregistry.v1.LifecycleRule' as const,

    encode(message: LifecycleRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        if (message.expirePeriod !== undefined) {
            Duration.encode(message.expirePeriod, writer.uint32(18).fork()).ldelim();
        }
        if (message.tagRegexp !== '') {
            writer.uint32(26).string(message.tagRegexp);
        }
        if (message.untagged === true) {
            writer.uint32(32).bool(message.untagged);
        }
        if (message.retainedTop !== 0) {
            writer.uint32(40).int64(message.retainedTop);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLifecycleRule } as LifecycleRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.expirePeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tagRegexp = reader.string();
                    break;
                case 4:
                    message.untagged = reader.bool();
                    break;
                case 5:
                    message.retainedTop = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LifecycleRule {
        const message = { ...baseLifecycleRule } as LifecycleRule;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.expirePeriod =
            object.expirePeriod !== undefined && object.expirePeriod !== null
                ? Duration.fromJSON(object.expirePeriod)
                : undefined;
        message.tagRegexp =
            object.tagRegexp !== undefined && object.tagRegexp !== null
                ? String(object.tagRegexp)
                : '';
        message.untagged =
            object.untagged !== undefined && object.untagged !== null
                ? Boolean(object.untagged)
                : false;
        message.retainedTop =
            object.retainedTop !== undefined && object.retainedTop !== null
                ? Number(object.retainedTop)
                : 0;
        return message;
    },

    toJSON(message: LifecycleRule): unknown {
        const obj: any = {};
        message.description !== undefined && (obj.description = message.description);
        message.expirePeriod !== undefined &&
            (obj.expirePeriod = message.expirePeriod
                ? Duration.toJSON(message.expirePeriod)
                : undefined);
        message.tagRegexp !== undefined && (obj.tagRegexp = message.tagRegexp);
        message.untagged !== undefined && (obj.untagged = message.untagged);
        message.retainedTop !== undefined && (obj.retainedTop = Math.round(message.retainedTop));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LifecycleRule>, I>>(object: I): LifecycleRule {
        const message = { ...baseLifecycleRule } as LifecycleRule;
        message.description = object.description ?? '';
        message.expirePeriod =
            object.expirePeriod !== undefined && object.expirePeriod !== null
                ? Duration.fromPartial(object.expirePeriod)
                : undefined;
        message.tagRegexp = object.tagRegexp ?? '';
        message.untagged = object.untagged ?? false;
        message.retainedTop = object.retainedTop ?? 0;
        return message;
    },
};

messageTypeRegistry.set(LifecycleRule.$type, LifecycleRule);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
