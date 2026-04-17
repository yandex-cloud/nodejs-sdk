/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

export interface ScanPolicy {
    /** Output only. ID of the scan policy. */
    id: string;
    /**
     * ID of the registry that the scan policy belongs to.
     * Required. The maximum string length in characters is 50.
     */
    registryId: string;
    /** Name of the scan policy. */
    name: string;
    /**
     * Description of the scan policy.
     * The maximum string length in characters is 256.
     */
    description: string;
    /** Scan policy options. */
    scanPolicyOptions?: ScanPolicyOptions;
    /** The rules of scan policy. */
    rules?: ScanRules;
    /** Output only. Creation timestamp. */
    createdAt?: Date;
    /** Turns off scan policy. */
    disabled: boolean;
}

export interface ScanPolicyOptions {
    /** Flag indicating whether language packages should be scanned. */
    scanLangPackages: boolean;
}

export interface ScanRules {
    /** Description of on-push scan rule. */
    pushRule?: PushRule;
    /** Description of time based rescan rule. */
    scheduleRules: ScheduledRule[];
}

export interface PushRule {
    /** List of paths that are scanned with rule. Child paths are included into parent node. "*" - means all artifacts in registry */
    paths: string[];
    /** Turns off scan rule. */
    disabled: boolean;
}

export interface ScheduledRule {
    /** Amount of time units for the scan interval. */
    amount: number;
    /** Unit for the scan interval. */
    intervalUnit: ScheduledRule_IntervalUnit;
    /** List of paths that are scanned with rule. Child paths are included into parent node. "*" - means all artifacts in registry */
    paths: string[];
    /** Turns off scan rule. */
    disabled: boolean;
}

export enum ScheduledRule_IntervalUnit {
    INTERVAL_UNIT_UNSPECIFIED = 0,
    /** DAYS - Time unit is days. */
    DAYS = 1,
    UNRECOGNIZED = -1,
}

export function scheduledRule_IntervalUnitFromJSON(object: any): ScheduledRule_IntervalUnit {
    switch (object) {
        case 0:
        case 'INTERVAL_UNIT_UNSPECIFIED':
            return ScheduledRule_IntervalUnit.INTERVAL_UNIT_UNSPECIFIED;
        case 1:
        case 'DAYS':
            return ScheduledRule_IntervalUnit.DAYS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ScheduledRule_IntervalUnit.UNRECOGNIZED;
    }
}

export function scheduledRule_IntervalUnitToJSON(object: ScheduledRule_IntervalUnit): string {
    switch (object) {
        case ScheduledRule_IntervalUnit.INTERVAL_UNIT_UNSPECIFIED:
            return 'INTERVAL_UNIT_UNSPECIFIED';
        case ScheduledRule_IntervalUnit.DAYS:
            return 'DAYS';
        default:
            return 'UNKNOWN';
    }
}

const baseScanPolicy: object = {
    id: '',
    registryId: '',
    name: '',
    description: '',
    disabled: false,
};

export const ScanPolicy: {
    encode(message: ScanPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScanPolicy;
    fromJSON(object: any): ScanPolicy;
    toJSON(message: ScanPolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<ScanPolicy>, I>>(object: I): ScanPolicy;
} = {
    encode(message: ScanPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.registryId !== '') {
            writer.uint32(18).string(message.registryId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.scanPolicyOptions !== undefined) {
            ScanPolicyOptions.encode(message.scanPolicyOptions, writer.uint32(42).fork()).ldelim();
        }
        if (message.rules !== undefined) {
            ScanRules.encode(message.rules, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.disabled === true) {
            writer.uint32(64).bool(message.disabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScanPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanPolicy } as ScanPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.registryId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.scanPolicyOptions = ScanPolicyOptions.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.rules = ScanRules.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.disabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScanPolicy {
        const message = { ...baseScanPolicy } as ScanPolicy;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.scanPolicyOptions =
            object.scanPolicyOptions !== undefined && object.scanPolicyOptions !== null
                ? ScanPolicyOptions.fromJSON(object.scanPolicyOptions)
                : undefined;
        message.rules =
            object.rules !== undefined && object.rules !== null
                ? ScanRules.fromJSON(object.rules)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        return message;
    },

    toJSON(message: ScanPolicy): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.scanPolicyOptions !== undefined &&
            (obj.scanPolicyOptions = message.scanPolicyOptions
                ? ScanPolicyOptions.toJSON(message.scanPolicyOptions)
                : undefined);
        message.rules !== undefined &&
            (obj.rules = message.rules ? ScanRules.toJSON(message.rules) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScanPolicy>, I>>(object: I): ScanPolicy {
        const message = { ...baseScanPolicy } as ScanPolicy;
        message.id = object.id ?? '';
        message.registryId = object.registryId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.scanPolicyOptions =
            object.scanPolicyOptions !== undefined && object.scanPolicyOptions !== null
                ? ScanPolicyOptions.fromPartial(object.scanPolicyOptions)
                : undefined;
        message.rules =
            object.rules !== undefined && object.rules !== null
                ? ScanRules.fromPartial(object.rules)
                : undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.disabled = object.disabled ?? false;
        return message;
    },
};

const baseScanPolicyOptions: object = { scanLangPackages: false };

export const ScanPolicyOptions: {
    encode(message: ScanPolicyOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScanPolicyOptions;
    fromJSON(object: any): ScanPolicyOptions;
    toJSON(message: ScanPolicyOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<ScanPolicyOptions>, I>>(object: I): ScanPolicyOptions;
} = {
    encode(message: ScanPolicyOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.scanLangPackages === true) {
            writer.uint32(8).bool(message.scanLangPackages);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScanPolicyOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanPolicyOptions } as ScanPolicyOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanLangPackages = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScanPolicyOptions {
        const message = { ...baseScanPolicyOptions } as ScanPolicyOptions;
        message.scanLangPackages =
            object.scanLangPackages !== undefined && object.scanLangPackages !== null
                ? Boolean(object.scanLangPackages)
                : false;
        return message;
    },

    toJSON(message: ScanPolicyOptions): unknown {
        const obj: any = {};
        message.scanLangPackages !== undefined && (obj.scanLangPackages = message.scanLangPackages);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScanPolicyOptions>, I>>(object: I): ScanPolicyOptions {
        const message = { ...baseScanPolicyOptions } as ScanPolicyOptions;
        message.scanLangPackages = object.scanLangPackages ?? false;
        return message;
    },
};

const baseScanRules: object = {};

export const ScanRules: {
    encode(message: ScanRules, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScanRules;
    fromJSON(object: any): ScanRules;
    toJSON(message: ScanRules): unknown;
    fromPartial<I extends Exact<DeepPartial<ScanRules>, I>>(object: I): ScanRules;
} = {
    encode(message: ScanRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pushRule !== undefined) {
            PushRule.encode(message.pushRule, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.scheduleRules) {
            ScheduledRule.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScanRules {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanRules } as ScanRules;
        message.scheduleRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pushRule = PushRule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.scheduleRules.push(ScheduledRule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScanRules {
        const message = { ...baseScanRules } as ScanRules;
        message.pushRule =
            object.pushRule !== undefined && object.pushRule !== null
                ? PushRule.fromJSON(object.pushRule)
                : undefined;
        message.scheduleRules = (object.scheduleRules ?? []).map((e: any) =>
            ScheduledRule.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ScanRules): unknown {
        const obj: any = {};
        message.pushRule !== undefined &&
            (obj.pushRule = message.pushRule ? PushRule.toJSON(message.pushRule) : undefined);
        if (message.scheduleRules) {
            obj.scheduleRules = message.scheduleRules.map((e) =>
                e ? ScheduledRule.toJSON(e) : undefined,
            );
        } else {
            obj.scheduleRules = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScanRules>, I>>(object: I): ScanRules {
        const message = { ...baseScanRules } as ScanRules;
        message.pushRule =
            object.pushRule !== undefined && object.pushRule !== null
                ? PushRule.fromPartial(object.pushRule)
                : undefined;
        message.scheduleRules =
            object.scheduleRules?.map((e) => ScheduledRule.fromPartial(e)) || [];
        return message;
    },
};

const basePushRule: object = { paths: '', disabled: false };

export const PushRule: {
    encode(message: PushRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PushRule;
    fromJSON(object: any): PushRule;
    toJSON(message: PushRule): unknown;
    fromPartial<I extends Exact<DeepPartial<PushRule>, I>>(object: I): PushRule;
} = {
    encode(message: PushRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.paths) {
            writer.uint32(10).string(v!);
        }
        if (message.disabled === true) {
            writer.uint32(16).bool(message.disabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PushRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePushRule } as PushRule;
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
                    break;
                case 2:
                    message.disabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PushRule {
        const message = { ...basePushRule } as PushRule;
        message.paths = (object.paths ?? []).map((e: any) => String(e));
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        return message;
    },

    toJSON(message: PushRule): unknown {
        const obj: any = {};
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        } else {
            obj.paths = [];
        }
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PushRule>, I>>(object: I): PushRule {
        const message = { ...basePushRule } as PushRule;
        message.paths = object.paths?.map((e) => e) || [];
        message.disabled = object.disabled ?? false;
        return message;
    },
};

const baseScheduledRule: object = { amount: 0, intervalUnit: 0, paths: '', disabled: false };

export const ScheduledRule: {
    encode(message: ScheduledRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledRule;
    fromJSON(object: any): ScheduledRule;
    toJSON(message: ScheduledRule): unknown;
    fromPartial<I extends Exact<DeepPartial<ScheduledRule>, I>>(object: I): ScheduledRule;
} = {
    encode(message: ScheduledRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.amount !== 0) {
            writer.uint32(8).int64(message.amount);
        }
        if (message.intervalUnit !== 0) {
            writer.uint32(16).int32(message.intervalUnit);
        }
        for (const v of message.paths) {
            writer.uint32(26).string(v!);
        }
        if (message.disabled === true) {
            writer.uint32(32).bool(message.disabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScheduledRule } as ScheduledRule;
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.intervalUnit = reader.int32() as any;
                    break;
                case 3:
                    message.paths.push(reader.string());
                    break;
                case 4:
                    message.disabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScheduledRule {
        const message = { ...baseScheduledRule } as ScheduledRule;
        message.amount =
            object.amount !== undefined && object.amount !== null ? Number(object.amount) : 0;
        message.intervalUnit =
            object.intervalUnit !== undefined && object.intervalUnit !== null
                ? scheduledRule_IntervalUnitFromJSON(object.intervalUnit)
                : 0;
        message.paths = (object.paths ?? []).map((e: any) => String(e));
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        return message;
    },

    toJSON(message: ScheduledRule): unknown {
        const obj: any = {};
        message.amount !== undefined && (obj.amount = Math.round(message.amount));
        message.intervalUnit !== undefined &&
            (obj.intervalUnit = scheduledRule_IntervalUnitToJSON(message.intervalUnit));
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        } else {
            obj.paths = [];
        }
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScheduledRule>, I>>(object: I): ScheduledRule {
        const message = { ...baseScheduledRule } as ScheduledRule;
        message.amount = object.amount ?? 0;
        message.intervalUnit = object.intervalUnit ?? 0;
        message.paths = object.paths?.map((e) => e) || [];
        message.disabled = object.disabled ?? false;
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
