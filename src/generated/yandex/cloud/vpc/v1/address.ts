/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.vpc.v1';

/** An Address resource. For more information, see [Address](/docs/vpc/concepts/address). */
export interface Address {
    /** ID of the address. Generated at creation time. */
    id: string;
    /** ID of the folder that the address belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the address.
     * The name is unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Description of the address. 0-256 characters long. */
    description: string;
    /**
     * Address labels as `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
     */
    labels: { [key: string]: string };
    externalIpv4Address?: ExternalIpv4Address | undefined;
    /** Specifies if address is reserved or not. */
    reserved: boolean;
    /** Specifies if address is used or not. */
    used: boolean;
    /** Type of the IP address. */
    type: Address_Type;
    /** Version of the IP address. */
    ipVersion: Address_IpVersion;
    /** Specifies if address protected from deletion. */
    deletionProtection: boolean;
    /** Optional DNS record specifications */
    dnsRecords: DnsRecord[];
}

export enum Address_Type {
    TYPE_UNSPECIFIED = 0,
    /** INTERNAL - Internal IP address. */
    INTERNAL = 1,
    /** EXTERNAL - Public IP address. */
    EXTERNAL = 2,
    UNRECOGNIZED = -1,
}

export function address_TypeFromJSON(object: any): Address_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Address_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'INTERNAL':
            return Address_Type.INTERNAL;
        case 2:
        case 'EXTERNAL':
            return Address_Type.EXTERNAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Address_Type.UNRECOGNIZED;
    }
}

export function address_TypeToJSON(object: Address_Type): string {
    switch (object) {
        case Address_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Address_Type.INTERNAL:
            return 'INTERNAL';
        case Address_Type.EXTERNAL:
            return 'EXTERNAL';
        default:
            return 'UNKNOWN';
    }
}

export enum Address_IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address. */
    IPV4 = 1,
    /** IPV6 - IPv6 address. */
    IPV6 = 2,
    UNRECOGNIZED = -1,
}

export function address_IpVersionFromJSON(object: any): Address_IpVersion {
    switch (object) {
        case 0:
        case 'IP_VERSION_UNSPECIFIED':
            return Address_IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case 'IPV4':
            return Address_IpVersion.IPV4;
        case 2:
        case 'IPV6':
            return Address_IpVersion.IPV6;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Address_IpVersion.UNRECOGNIZED;
    }
}

export function address_IpVersionToJSON(object: Address_IpVersion): string {
    switch (object) {
        case Address_IpVersion.IP_VERSION_UNSPECIFIED:
            return 'IP_VERSION_UNSPECIFIED';
        case Address_IpVersion.IPV4:
            return 'IPV4';
        case Address_IpVersion.IPV6:
            return 'IPV6';
        default:
            return 'UNKNOWN';
    }
}

export interface Address_LabelsEntry {
    key: string;
    value: string;
}

export interface ExternalIpv4Address {
    /** Value of address. */
    address: string;
    /** Availability zone from which the address will be allocated. */
    zoneId: string;
    /** Parameters of the allocated address, for example DDoS Protection. */
    requirements?: AddressRequirements;
}

export interface AddressRequirements {
    /** DDoS protection provider ID. */
    ddosProtectionProvider: string;
    /** Capability to send SMTP traffic. */
    outgoingSmtpCapability: string;
}

export interface DnsRecord {
    /** DNS record name (absolute or relative to the DNS zone in use). */
    fqdn: string;
    /** ID of the public DNS zone. */
    dnsZoneId: string;
    /** TTL of record. */
    ttl: number;
    /** If the PTR record is required, this parameter must be set to "true". */
    ptr: boolean;
}

const baseAddress: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    reserved: false,
    used: false,
    type: 0,
    ipVersion: 0,
    deletionProtection: false,
};

export const Address = {
    encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Address_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.externalIpv4Address !== undefined) {
            ExternalIpv4Address.encode(
                message.externalIpv4Address,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.reserved === true) {
            writer.uint32(120).bool(message.reserved);
        }
        if (message.used === true) {
            writer.uint32(128).bool(message.used);
        }
        if (message.type !== 0) {
            writer.uint32(136).int32(message.type);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(144).int32(message.ipVersion);
        }
        if (message.deletionProtection === true) {
            writer.uint32(152).bool(message.deletionProtection);
        }
        for (const v of message.dnsRecords) {
            DnsRecord.encode(v!, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Address {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddress } as Address;
        message.labels = {};
        message.dnsRecords = [];
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Address_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.externalIpv4Address = ExternalIpv4Address.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 15:
                    message.reserved = reader.bool();
                    break;
                case 16:
                    message.used = reader.bool();
                    break;
                case 17:
                    message.type = reader.int32() as any;
                    break;
                case 18:
                    message.ipVersion = reader.int32() as any;
                    break;
                case 19:
                    message.deletionProtection = reader.bool();
                    break;
                case 20:
                    message.dnsRecords.push(DnsRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Address {
        const message = { ...baseAddress } as Address;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.externalIpv4Address =
            object.externalIpv4Address !== undefined && object.externalIpv4Address !== null
                ? ExternalIpv4Address.fromJSON(object.externalIpv4Address)
                : undefined;
        message.reserved =
            object.reserved !== undefined && object.reserved !== null
                ? Boolean(object.reserved)
                : false;
        message.used =
            object.used !== undefined && object.used !== null ? Boolean(object.used) : false;
        message.type =
            object.type !== undefined && object.type !== null
                ? address_TypeFromJSON(object.type)
                : 0;
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? address_IpVersionFromJSON(object.ipVersion)
                : 0;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.dnsRecords = (object.dnsRecords ?? []).map((e: any) => DnsRecord.fromJSON(e));
        return message;
    },

    toJSON(message: Address): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.externalIpv4Address !== undefined &&
            (obj.externalIpv4Address = message.externalIpv4Address
                ? ExternalIpv4Address.toJSON(message.externalIpv4Address)
                : undefined);
        message.reserved !== undefined && (obj.reserved = message.reserved);
        message.used !== undefined && (obj.used = message.used);
        message.type !== undefined && (obj.type = address_TypeToJSON(message.type));
        message.ipVersion !== undefined &&
            (obj.ipVersion = address_IpVersionToJSON(message.ipVersion));
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) => (e ? DnsRecord.toJSON(e) : undefined));
        } else {
            obj.dnsRecords = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
        const message = { ...baseAddress } as Address;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.externalIpv4Address =
            object.externalIpv4Address !== undefined && object.externalIpv4Address !== null
                ? ExternalIpv4Address.fromPartial(object.externalIpv4Address)
                : undefined;
        message.reserved = object.reserved ?? false;
        message.used = object.used ?? false;
        message.type = object.type ?? 0;
        message.ipVersion = object.ipVersion ?? 0;
        message.deletionProtection = object.deletionProtection ?? false;
        message.dnsRecords = object.dnsRecords?.map((e) => DnsRecord.fromPartial(e)) || [];
        return message;
    },
};

const baseAddress_LabelsEntry: object = { key: '', value: '' };

export const Address_LabelsEntry = {
    encode(message: Address_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Address_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddress_LabelsEntry } as Address_LabelsEntry;
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

    fromJSON(object: any): Address_LabelsEntry {
        const message = { ...baseAddress_LabelsEntry } as Address_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Address_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Address_LabelsEntry>, I>>(
        object: I,
    ): Address_LabelsEntry {
        const message = { ...baseAddress_LabelsEntry } as Address_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseExternalIpv4Address: object = { address: '', zoneId: '' };

export const ExternalIpv4Address = {
    encode(message: ExternalIpv4Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.zoneId !== '') {
            writer.uint32(18).string(message.zoneId);
        }
        if (message.requirements !== undefined) {
            AddressRequirements.encode(message.requirements, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIpv4Address {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.zoneId = reader.string();
                    break;
                case 3:
                    message.requirements = AddressRequirements.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalIpv4Address {
        const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
        message.address =
            object.address !== undefined && object.address !== null ? String(object.address) : '';
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? AddressRequirements.fromJSON(object.requirements)
                : undefined;
        return message;
    },

    toJSON(message: ExternalIpv4Address): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.requirements !== undefined &&
            (obj.requirements = message.requirements
                ? AddressRequirements.toJSON(message.requirements)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalIpv4Address>, I>>(
        object: I,
    ): ExternalIpv4Address {
        const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
        message.address = object.address ?? '';
        message.zoneId = object.zoneId ?? '';
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? AddressRequirements.fromPartial(object.requirements)
                : undefined;
        return message;
    },
};

const baseAddressRequirements: object = { ddosProtectionProvider: '', outgoingSmtpCapability: '' };

export const AddressRequirements = {
    encode(message: AddressRequirements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ddosProtectionProvider !== '') {
            writer.uint32(10).string(message.ddosProtectionProvider);
        }
        if (message.outgoingSmtpCapability !== '') {
            writer.uint32(18).string(message.outgoingSmtpCapability);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddressRequirements {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddressRequirements } as AddressRequirements;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ddosProtectionProvider = reader.string();
                    break;
                case 2:
                    message.outgoingSmtpCapability = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddressRequirements {
        const message = { ...baseAddressRequirements } as AddressRequirements;
        message.ddosProtectionProvider =
            object.ddosProtectionProvider !== undefined && object.ddosProtectionProvider !== null
                ? String(object.ddosProtectionProvider)
                : '';
        message.outgoingSmtpCapability =
            object.outgoingSmtpCapability !== undefined && object.outgoingSmtpCapability !== null
                ? String(object.outgoingSmtpCapability)
                : '';
        return message;
    },

    toJSON(message: AddressRequirements): unknown {
        const obj: any = {};
        message.ddosProtectionProvider !== undefined &&
            (obj.ddosProtectionProvider = message.ddosProtectionProvider);
        message.outgoingSmtpCapability !== undefined &&
            (obj.outgoingSmtpCapability = message.outgoingSmtpCapability);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddressRequirements>, I>>(
        object: I,
    ): AddressRequirements {
        const message = { ...baseAddressRequirements } as AddressRequirements;
        message.ddosProtectionProvider = object.ddosProtectionProvider ?? '';
        message.outgoingSmtpCapability = object.outgoingSmtpCapability ?? '';
        return message;
    },
};

const baseDnsRecord: object = { fqdn: '', dnsZoneId: '', ttl: 0, ptr: false };

export const DnsRecord = {
    encode(message: DnsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fqdn !== '') {
            writer.uint32(10).string(message.fqdn);
        }
        if (message.dnsZoneId !== '') {
            writer.uint32(18).string(message.dnsZoneId);
        }
        if (message.ttl !== 0) {
            writer.uint32(24).int64(message.ttl);
        }
        if (message.ptr === true) {
            writer.uint32(32).bool(message.ptr);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DnsRecord {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsRecord } as DnsRecord;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqdn = reader.string();
                    break;
                case 2:
                    message.dnsZoneId = reader.string();
                    break;
                case 3:
                    message.ttl = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.ptr = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DnsRecord {
        const message = { ...baseDnsRecord } as DnsRecord;
        message.fqdn = object.fqdn !== undefined && object.fqdn !== null ? String(object.fqdn) : '';
        message.dnsZoneId =
            object.dnsZoneId !== undefined && object.dnsZoneId !== null
                ? String(object.dnsZoneId)
                : '';
        message.ttl = object.ttl !== undefined && object.ttl !== null ? Number(object.ttl) : 0;
        message.ptr = object.ptr !== undefined && object.ptr !== null ? Boolean(object.ptr) : false;
        return message;
    },

    toJSON(message: DnsRecord): unknown {
        const obj: any = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.ttl !== undefined && (obj.ttl = Math.round(message.ttl));
        message.ptr !== undefined && (obj.ptr = message.ptr);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DnsRecord>, I>>(object: I): DnsRecord {
        const message = { ...baseDnsRecord } as DnsRecord;
        message.fqdn = object.fqdn ?? '';
        message.dnsZoneId = object.dnsZoneId ?? '';
        message.ttl = object.ttl ?? 0;
        message.ptr = object.ptr ?? false;
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
