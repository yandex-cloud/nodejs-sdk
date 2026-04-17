/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.dns.v1';

/** A DNS firewall. For details about the concept, see [DNS firewalls](/docs/dns/concepts/dns-firewall). */
export interface DnsFirewall {
    /** ID of the DNS firewall. Generated at creation time. */
    id: string;
    /** ID of the folder that the DNS firewall belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the DNS firewall.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the DNS firewall. */
    description: string;
    /** DNS firewall labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Prevents accidental firewall removal. */
    deletionProtection: boolean;
    /** Whether the DNS firewall is enabled. */
    enabled: boolean;
    /**
     * Resource settings.
     * Specifies resources that the DNS firewall applies to.
     */
    resourceConfig?: DnsFirewall_ResourceConfig;
    /** List of FQDNs that the DNS firewall allows to pass. */
    whitelistFqdns: string[];
    /** List of FQDNs that the DNS firewall blocks. */
    blacklistFqdns: string[];
}

export interface DnsFirewall_ResourceConfig {
    /** Type of the resource. */
    type: DnsFirewall_ResourceConfig_ResourceType;
    /** Resource ids. */
    resourceIds: string[];
    /** Whether the locking policy is enabled. */
    lockingPolicyEnabled: boolean;
}

export enum DnsFirewall_ResourceConfig_ResourceType {
    /** RESOURCE_TYPE_UNSPECIFIED - Unspecified resource type. */
    RESOURCE_TYPE_UNSPECIFIED = 0,
    /** NETWORK - VPC network resource type. */
    NETWORK = 1,
    /** FOLDER - Folder resource type. */
    FOLDER = 2,
    /** CLOUD - Cloud resource type. */
    CLOUD = 3,
    UNRECOGNIZED = -1,
}

export function dnsFirewall_ResourceConfig_ResourceTypeFromJSON(
    object: any,
): DnsFirewall_ResourceConfig_ResourceType {
    switch (object) {
        case 0:
        case 'RESOURCE_TYPE_UNSPECIFIED':
            return DnsFirewall_ResourceConfig_ResourceType.RESOURCE_TYPE_UNSPECIFIED;
        case 1:
        case 'NETWORK':
            return DnsFirewall_ResourceConfig_ResourceType.NETWORK;
        case 2:
        case 'FOLDER':
            return DnsFirewall_ResourceConfig_ResourceType.FOLDER;
        case 3:
        case 'CLOUD':
            return DnsFirewall_ResourceConfig_ResourceType.CLOUD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DnsFirewall_ResourceConfig_ResourceType.UNRECOGNIZED;
    }
}

export function dnsFirewall_ResourceConfig_ResourceTypeToJSON(
    object: DnsFirewall_ResourceConfig_ResourceType,
): string {
    switch (object) {
        case DnsFirewall_ResourceConfig_ResourceType.RESOURCE_TYPE_UNSPECIFIED:
            return 'RESOURCE_TYPE_UNSPECIFIED';
        case DnsFirewall_ResourceConfig_ResourceType.NETWORK:
            return 'NETWORK';
        case DnsFirewall_ResourceConfig_ResourceType.FOLDER:
            return 'FOLDER';
        case DnsFirewall_ResourceConfig_ResourceType.CLOUD:
            return 'CLOUD';
        default:
            return 'UNKNOWN';
    }
}

export interface DnsFirewall_LabelsEntry {
    key: string;
    value: string;
}

const baseDnsFirewall: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    deletionProtection: false,
    enabled: false,
    whitelistFqdns: '',
    blacklistFqdns: '',
};

export const DnsFirewall: {
    encode(message: DnsFirewall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DnsFirewall;
    fromJSON(object: any): DnsFirewall;
    toJSON(message: DnsFirewall): unknown;
    fromPartial<I extends Exact<DeepPartial<DnsFirewall>, I>>(object: I): DnsFirewall;
} = {
    encode(message: DnsFirewall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            DnsFirewall_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(56).bool(message.deletionProtection);
        }
        if (message.enabled === true) {
            writer.uint32(64).bool(message.enabled);
        }
        if (message.resourceConfig !== undefined) {
            DnsFirewall_ResourceConfig.encode(
                message.resourceConfig,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        for (const v of message.whitelistFqdns) {
            writer.uint32(82).string(v!);
        }
        for (const v of message.blacklistFqdns) {
            writer.uint32(90).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DnsFirewall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsFirewall } as DnsFirewall;
        message.labels = {};
        message.whitelistFqdns = [];
        message.blacklistFqdns = [];
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
                    const entry6 = DnsFirewall_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.deletionProtection = reader.bool();
                    break;
                case 8:
                    message.enabled = reader.bool();
                    break;
                case 9:
                    message.resourceConfig = DnsFirewall_ResourceConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.whitelistFqdns.push(reader.string());
                    break;
                case 11:
                    message.blacklistFqdns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DnsFirewall {
        const message = { ...baseDnsFirewall } as DnsFirewall;
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
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.resourceConfig =
            object.resourceConfig !== undefined && object.resourceConfig !== null
                ? DnsFirewall_ResourceConfig.fromJSON(object.resourceConfig)
                : undefined;
        message.whitelistFqdns = (object.whitelistFqdns ?? []).map((e: any) => String(e));
        message.blacklistFqdns = (object.blacklistFqdns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: DnsFirewall): unknown {
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
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.resourceConfig !== undefined &&
            (obj.resourceConfig = message.resourceConfig
                ? DnsFirewall_ResourceConfig.toJSON(message.resourceConfig)
                : undefined);
        if (message.whitelistFqdns) {
            obj.whitelistFqdns = message.whitelistFqdns.map((e) => e);
        } else {
            obj.whitelistFqdns = [];
        }
        if (message.blacklistFqdns) {
            obj.blacklistFqdns = message.blacklistFqdns.map((e) => e);
        } else {
            obj.blacklistFqdns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DnsFirewall>, I>>(object: I): DnsFirewall {
        const message = { ...baseDnsFirewall } as DnsFirewall;
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
        message.deletionProtection = object.deletionProtection ?? false;
        message.enabled = object.enabled ?? false;
        message.resourceConfig =
            object.resourceConfig !== undefined && object.resourceConfig !== null
                ? DnsFirewall_ResourceConfig.fromPartial(object.resourceConfig)
                : undefined;
        message.whitelistFqdns = object.whitelistFqdns?.map((e) => e) || [];
        message.blacklistFqdns = object.blacklistFqdns?.map((e) => e) || [];
        return message;
    },
};

const baseDnsFirewall_ResourceConfig: object = {
    type: 0,
    resourceIds: '',
    lockingPolicyEnabled: false,
};

export const DnsFirewall_ResourceConfig: {
    encode(message: DnsFirewall_ResourceConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DnsFirewall_ResourceConfig;
    fromJSON(object: any): DnsFirewall_ResourceConfig;
    toJSON(message: DnsFirewall_ResourceConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<DnsFirewall_ResourceConfig>, I>>(object: I): DnsFirewall_ResourceConfig;
} = {
    encode(
        message: DnsFirewall_ResourceConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        for (const v of message.resourceIds) {
            writer.uint32(18).string(v!);
        }
        if (message.lockingPolicyEnabled === true) {
            writer.uint32(24).bool(message.lockingPolicyEnabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DnsFirewall_ResourceConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsFirewall_ResourceConfig } as DnsFirewall_ResourceConfig;
        message.resourceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.resourceIds.push(reader.string());
                    break;
                case 3:
                    message.lockingPolicyEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DnsFirewall_ResourceConfig {
        const message = { ...baseDnsFirewall_ResourceConfig } as DnsFirewall_ResourceConfig;
        message.type =
            object.type !== undefined && object.type !== null
                ? dnsFirewall_ResourceConfig_ResourceTypeFromJSON(object.type)
                : 0;
        message.resourceIds = (object.resourceIds ?? []).map((e: any) => String(e));
        message.lockingPolicyEnabled =
            object.lockingPolicyEnabled !== undefined && object.lockingPolicyEnabled !== null
                ? Boolean(object.lockingPolicyEnabled)
                : false;
        return message;
    },

    toJSON(message: DnsFirewall_ResourceConfig): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = dnsFirewall_ResourceConfig_ResourceTypeToJSON(message.type));
        if (message.resourceIds) {
            obj.resourceIds = message.resourceIds.map((e) => e);
        } else {
            obj.resourceIds = [];
        }
        message.lockingPolicyEnabled !== undefined &&
            (obj.lockingPolicyEnabled = message.lockingPolicyEnabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DnsFirewall_ResourceConfig>, I>>(
        object: I,
    ): DnsFirewall_ResourceConfig {
        const message = { ...baseDnsFirewall_ResourceConfig } as DnsFirewall_ResourceConfig;
        message.type = object.type ?? 0;
        message.resourceIds = object.resourceIds?.map((e) => e) || [];
        message.lockingPolicyEnabled = object.lockingPolicyEnabled ?? false;
        return message;
    },
};

const baseDnsFirewall_LabelsEntry: object = { key: '', value: '' };

export const DnsFirewall_LabelsEntry: {
    encode(message: DnsFirewall_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DnsFirewall_LabelsEntry;
    fromJSON(object: any): DnsFirewall_LabelsEntry;
    toJSON(message: DnsFirewall_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<DnsFirewall_LabelsEntry>, I>>(object: I): DnsFirewall_LabelsEntry;
} = {
    encode(message: DnsFirewall_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DnsFirewall_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsFirewall_LabelsEntry } as DnsFirewall_LabelsEntry;
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

    fromJSON(object: any): DnsFirewall_LabelsEntry {
        const message = { ...baseDnsFirewall_LabelsEntry } as DnsFirewall_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: DnsFirewall_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DnsFirewall_LabelsEntry>, I>>(
        object: I,
    ): DnsFirewall_LabelsEntry {
        const message = { ...baseDnsFirewall_LabelsEntry } as DnsFirewall_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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
