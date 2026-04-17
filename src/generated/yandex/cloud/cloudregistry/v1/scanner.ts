/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

/** A ScanResult resource. */
export interface ScanResult {
    /** Output only. ID of the ScanResult. */
    id: string;
    /** Output only. ID of the artifact that the ScanResult belongs to. */
    artifactId: string;
    /** Output only. The timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format when the scan been finished. */
    scannedAt?: Date;
    /** Output only. The status of the ScanResult. */
    status: ScanResult_Status;
    /** Output only. Summary information about vulnerabilities found. */
    vulnerabilities?: VulnerabilityStats;
}

/** Status of the scan. */
export enum ScanResult_Status {
    STATUS_UNSPECIFIED = 0,
    /** RUNNING - Image scan is in progress. */
    RUNNING = 1,
    /** READY - Image has been scanned and result is ready. */
    READY = 2,
    /** ERROR - Image scan is failed. */
    ERROR = 3,
    /** QUEUED - Image scan is waiting in queue to be processed. */
    QUEUED = 4,
    /** CANCELLED - Image scan was cancelled by user. */
    CANCELLED = 5,
    UNRECOGNIZED = -1,
}

export function scanResult_StatusFromJSON(object: any): ScanResult_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return ScanResult_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'RUNNING':
            return ScanResult_Status.RUNNING;
        case 2:
        case 'READY':
            return ScanResult_Status.READY;
        case 3:
        case 'ERROR':
            return ScanResult_Status.ERROR;
        case 4:
        case 'QUEUED':
            return ScanResult_Status.QUEUED;
        case 5:
        case 'CANCELLED':
            return ScanResult_Status.CANCELLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ScanResult_Status.UNRECOGNIZED;
    }
}

export function scanResult_StatusToJSON(object: ScanResult_Status): string {
    switch (object) {
        case ScanResult_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case ScanResult_Status.RUNNING:
            return 'RUNNING';
        case ScanResult_Status.READY:
            return 'READY';
        case ScanResult_Status.ERROR:
            return 'ERROR';
        case ScanResult_Status.QUEUED:
            return 'QUEUED';
        case ScanResult_Status.CANCELLED:
            return 'CANCELLED';
        default:
            return 'UNKNOWN';
    }
}

/** A VulnerabilityStats resource. */
export interface VulnerabilityStats {
    /** Count of CRITICAL vulnerabilities. */
    critical: number;
    /** Count of HIGH vulnerabilities. */
    high: number;
    /** Count of MEDIUM vulnerabilities. */
    medium: number;
    /** Count of LOW vulnerabilities. */
    low: number;
    /** Count of NEGLIGIBLE vulnerabilities. */
    negligible: number;
    /** Count of other vulnerabilities. */
    undefined: number;
}

/** A Vulnerability resource. */
export interface Vulnerability {
    /** Output only. Severity of the Vulnerability. */
    severity: Vulnerability_Severity;
    /** Name of vulnerability in CVE database. */
    name: string;
    /** The package name where vulnerability has been found. */
    packageName: string;
    /** The type of vulnerability origin - name of OS if origin="os" or package type (jar, gobinary, etc.) if origin="lang" */
    packageType: string;
    /** The version of the package where vulnerability has been found. */
    packageVersion: string;
    /** The version of the package where vulnerability has been fixed. */
    packageFixedVersion: string;
    /** URL to the page with description of vulnerability. */
    link: string;
    /** The package manager name. Ex.: yum, rpm, dpkg. */
    source: string;
    /** The place where vulnerability is originated (OS, lang package, etc.) */
    origin: string;
}

/** Severity level of the vulnerability. */
export enum Vulnerability_Severity {
    SEVERITY_UNSPECIFIED = 0,
    /**
     * CRITICAL - Critical severity is a world-burning problem, exploitable for nearly all users.
     * Includes remote root privilege escalations, or massive data loss.
     */
    CRITICAL = 1,
    /**
     * HIGH - High severity is a real problem, exploitable for many users in a default installation.
     * Includes serious remote denial of services, local root privilege escalations, or data loss.
     */
    HIGH = 2,
    /**
     * MEDIUM - Medium severity is a real security problem, and is exploitable for many users.
     * Includes network daemon denial of service attacks, cross-site scripting, and gaining user privileges.
     * Updates should be made soon for this priority of issue.
     */
    MEDIUM = 3,
    /**
     * LOW - Low severity is a security problem, but is hard to exploit due to environment, requires a user-assisted attack,
     * a small install base, or does very little damage. These tend to be included in security updates only when
     * higher priority issues require an update, or if many low priority issues have built up.
     */
    LOW = 4,
    /**
     * NEGLIGIBLE - Negligible severity is technically a security problem, but is only theoretical in nature, requires a very special situation,
     * has almost no install base, or does no real damage. These tend not to get backport from upstream,
     * and will likely not be included in security updates unless there is an easy fix and some other issue causes an update.
     */
    NEGLIGIBLE = 5,
    /**
     * UNDEFINED - Unknown severity is either a security problem that has not been assigned to a priority yet or
     * a priority that our system did not recognize.
     */
    UNDEFINED = 6,
    UNRECOGNIZED = -1,
}

export function vulnerability_SeverityFromJSON(object: any): Vulnerability_Severity {
    switch (object) {
        case 0:
        case 'SEVERITY_UNSPECIFIED':
            return Vulnerability_Severity.SEVERITY_UNSPECIFIED;
        case 1:
        case 'CRITICAL':
            return Vulnerability_Severity.CRITICAL;
        case 2:
        case 'HIGH':
            return Vulnerability_Severity.HIGH;
        case 3:
        case 'MEDIUM':
            return Vulnerability_Severity.MEDIUM;
        case 4:
        case 'LOW':
            return Vulnerability_Severity.LOW;
        case 5:
        case 'NEGLIGIBLE':
            return Vulnerability_Severity.NEGLIGIBLE;
        case 6:
        case 'UNDEFINED':
            return Vulnerability_Severity.UNDEFINED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Vulnerability_Severity.UNRECOGNIZED;
    }
}

export function vulnerability_SeverityToJSON(object: Vulnerability_Severity): string {
    switch (object) {
        case Vulnerability_Severity.SEVERITY_UNSPECIFIED:
            return 'SEVERITY_UNSPECIFIED';
        case Vulnerability_Severity.CRITICAL:
            return 'CRITICAL';
        case Vulnerability_Severity.HIGH:
            return 'HIGH';
        case Vulnerability_Severity.MEDIUM:
            return 'MEDIUM';
        case Vulnerability_Severity.LOW:
            return 'LOW';
        case Vulnerability_Severity.NEGLIGIBLE:
            return 'NEGLIGIBLE';
        case Vulnerability_Severity.UNDEFINED:
            return 'UNDEFINED';
        default:
            return 'UNKNOWN';
    }
}

const baseScanResult: object = { id: '', artifactId: '', status: 0 };

export const ScanResult: {
    encode(message: ScanResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScanResult;
    fromJSON(object: any): ScanResult;
    toJSON(message: ScanResult): unknown;
    fromPartial<I extends Exact<DeepPartial<ScanResult>, I>>(object: I): ScanResult;
} = {
    encode(message: ScanResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.artifactId !== '') {
            writer.uint32(18).string(message.artifactId);
        }
        if (message.scannedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.scannedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.vulnerabilities !== undefined) {
            VulnerabilityStats.encode(message.vulnerabilities, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScanResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScanResult } as ScanResult;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.artifactId = reader.string();
                    break;
                case 3:
                    message.scannedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.vulnerabilities = VulnerabilityStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScanResult {
        const message = { ...baseScanResult } as ScanResult;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.artifactId =
            object.artifactId !== undefined && object.artifactId !== null
                ? String(object.artifactId)
                : '';
        message.scannedAt =
            object.scannedAt !== undefined && object.scannedAt !== null
                ? fromJsonTimestamp(object.scannedAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? scanResult_StatusFromJSON(object.status)
                : 0;
        message.vulnerabilities =
            object.vulnerabilities !== undefined && object.vulnerabilities !== null
                ? VulnerabilityStats.fromJSON(object.vulnerabilities)
                : undefined;
        return message;
    },

    toJSON(message: ScanResult): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.artifactId !== undefined && (obj.artifactId = message.artifactId);
        message.scannedAt !== undefined && (obj.scannedAt = message.scannedAt.toISOString());
        message.status !== undefined && (obj.status = scanResult_StatusToJSON(message.status));
        message.vulnerabilities !== undefined &&
            (obj.vulnerabilities = message.vulnerabilities
                ? VulnerabilityStats.toJSON(message.vulnerabilities)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScanResult>, I>>(object: I): ScanResult {
        const message = { ...baseScanResult } as ScanResult;
        message.id = object.id ?? '';
        message.artifactId = object.artifactId ?? '';
        message.scannedAt = object.scannedAt ?? undefined;
        message.status = object.status ?? 0;
        message.vulnerabilities =
            object.vulnerabilities !== undefined && object.vulnerabilities !== null
                ? VulnerabilityStats.fromPartial(object.vulnerabilities)
                : undefined;
        return message;
    },
};

const baseVulnerabilityStats: object = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    negligible: 0,
    undefined: 0,
};

export const VulnerabilityStats: {
    encode(message: VulnerabilityStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VulnerabilityStats;
    fromJSON(object: any): VulnerabilityStats;
    toJSON(message: VulnerabilityStats): unknown;
    fromPartial<I extends Exact<DeepPartial<VulnerabilityStats>, I>>(object: I): VulnerabilityStats;
} = {
    encode(message: VulnerabilityStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.critical !== 0) {
            writer.uint32(8).int64(message.critical);
        }
        if (message.high !== 0) {
            writer.uint32(16).int64(message.high);
        }
        if (message.medium !== 0) {
            writer.uint32(24).int64(message.medium);
        }
        if (message.low !== 0) {
            writer.uint32(32).int64(message.low);
        }
        if (message.negligible !== 0) {
            writer.uint32(40).int64(message.negligible);
        }
        if (message.undefined !== 0) {
            writer.uint32(48).int64(message.undefined);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VulnerabilityStats {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVulnerabilityStats } as VulnerabilityStats;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.critical = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.high = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.medium = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.low = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.negligible = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.undefined = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VulnerabilityStats {
        const message = { ...baseVulnerabilityStats } as VulnerabilityStats;
        message.critical =
            object.critical !== undefined && object.critical !== null ? Number(object.critical) : 0;
        message.high = object.high !== undefined && object.high !== null ? Number(object.high) : 0;
        message.medium =
            object.medium !== undefined && object.medium !== null ? Number(object.medium) : 0;
        message.low = object.low !== undefined && object.low !== null ? Number(object.low) : 0;
        message.negligible =
            object.negligible !== undefined && object.negligible !== null
                ? Number(object.negligible)
                : 0;
        message.undefined =
            object.undefined !== undefined && object.undefined !== null
                ? Number(object.undefined)
                : 0;
        return message;
    },

    toJSON(message: VulnerabilityStats): unknown {
        const obj: any = {};
        message.critical !== undefined && (obj.critical = Math.round(message.critical));
        message.high !== undefined && (obj.high = Math.round(message.high));
        message.medium !== undefined && (obj.medium = Math.round(message.medium));
        message.low !== undefined && (obj.low = Math.round(message.low));
        message.negligible !== undefined && (obj.negligible = Math.round(message.negligible));
        message.undefined !== undefined && (obj.undefined = Math.round(message.undefined));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VulnerabilityStats>, I>>(
        object: I,
    ): VulnerabilityStats {
        const message = { ...baseVulnerabilityStats } as VulnerabilityStats;
        message.critical = object.critical ?? 0;
        message.high = object.high ?? 0;
        message.medium = object.medium ?? 0;
        message.low = object.low ?? 0;
        message.negligible = object.negligible ?? 0;
        message.undefined = object.undefined ?? 0;
        return message;
    },
};

const baseVulnerability: object = {
    severity: 0,
    name: '',
    packageName: '',
    packageType: '',
    packageVersion: '',
    packageFixedVersion: '',
    link: '',
    source: '',
    origin: '',
};

export const Vulnerability: {
    encode(message: Vulnerability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vulnerability;
    fromJSON(object: any): Vulnerability;
    toJSON(message: Vulnerability): unknown;
    fromPartial<I extends Exact<DeepPartial<Vulnerability>, I>>(object: I): Vulnerability;
} = {
    encode(message: Vulnerability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.severity !== 0) {
            writer.uint32(8).int32(message.severity);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.packageName !== '') {
            writer.uint32(26).string(message.packageName);
        }
        if (message.packageType !== '') {
            writer.uint32(34).string(message.packageType);
        }
        if (message.packageVersion !== '') {
            writer.uint32(42).string(message.packageVersion);
        }
        if (message.packageFixedVersion !== '') {
            writer.uint32(50).string(message.packageFixedVersion);
        }
        if (message.link !== '') {
            writer.uint32(58).string(message.link);
        }
        if (message.source !== '') {
            writer.uint32(66).string(message.source);
        }
        if (message.origin !== '') {
            writer.uint32(74).string(message.origin);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Vulnerability {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVulnerability } as Vulnerability;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.severity = reader.int32() as any;
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.packageName = reader.string();
                    break;
                case 4:
                    message.packageType = reader.string();
                    break;
                case 5:
                    message.packageVersion = reader.string();
                    break;
                case 6:
                    message.packageFixedVersion = reader.string();
                    break;
                case 7:
                    message.link = reader.string();
                    break;
                case 8:
                    message.source = reader.string();
                    break;
                case 9:
                    message.origin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Vulnerability {
        const message = { ...baseVulnerability } as Vulnerability;
        message.severity =
            object.severity !== undefined && object.severity !== null
                ? vulnerability_SeverityFromJSON(object.severity)
                : 0;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.packageName =
            object.packageName !== undefined && object.packageName !== null
                ? String(object.packageName)
                : '';
        message.packageType =
            object.packageType !== undefined && object.packageType !== null
                ? String(object.packageType)
                : '';
        message.packageVersion =
            object.packageVersion !== undefined && object.packageVersion !== null
                ? String(object.packageVersion)
                : '';
        message.packageFixedVersion =
            object.packageFixedVersion !== undefined && object.packageFixedVersion !== null
                ? String(object.packageFixedVersion)
                : '';
        message.link = object.link !== undefined && object.link !== null ? String(object.link) : '';
        message.source =
            object.source !== undefined && object.source !== null ? String(object.source) : '';
        message.origin =
            object.origin !== undefined && object.origin !== null ? String(object.origin) : '';
        return message;
    },

    toJSON(message: Vulnerability): unknown {
        const obj: any = {};
        message.severity !== undefined &&
            (obj.severity = vulnerability_SeverityToJSON(message.severity));
        message.name !== undefined && (obj.name = message.name);
        message.packageName !== undefined && (obj.packageName = message.packageName);
        message.packageType !== undefined && (obj.packageType = message.packageType);
        message.packageVersion !== undefined && (obj.packageVersion = message.packageVersion);
        message.packageFixedVersion !== undefined &&
            (obj.packageFixedVersion = message.packageFixedVersion);
        message.link !== undefined && (obj.link = message.link);
        message.source !== undefined && (obj.source = message.source);
        message.origin !== undefined && (obj.origin = message.origin);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Vulnerability>, I>>(object: I): Vulnerability {
        const message = { ...baseVulnerability } as Vulnerability;
        message.severity = object.severity ?? 0;
        message.name = object.name ?? '';
        message.packageName = object.packageName ?? '';
        message.packageType = object.packageType ?? '';
        message.packageVersion = object.packageVersion ?? '';
        message.packageFixedVersion = object.packageFixedVersion ?? '';
        message.link = object.link ?? '';
        message.source = object.source ?? '';
        message.origin = object.origin ?? '';
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
