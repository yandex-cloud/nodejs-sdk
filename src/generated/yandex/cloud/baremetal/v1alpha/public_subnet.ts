/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DhcpOptions } from '../../../../yandex/cloud/baremetal/v1alpha/dhcp';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** Type of the public subnet. */
export enum PublicSubnetType {
    /** PUBLIC_SUBNET_TYPE_UNSPECIFIED - Unspecified public subnet type. */
    PUBLIC_SUBNET_TYPE_UNSPECIFIED = 0,
    /** DEDICATED - Dedicated public subnet. */
    DEDICATED = 1,
    /** EPHEMERAL - Ephemeral public subnet. */
    EPHEMERAL = 2,
    UNRECOGNIZED = -1,
}

export function publicSubnetTypeFromJSON(object: any): PublicSubnetType {
    switch (object) {
        case 0:
        case 'PUBLIC_SUBNET_TYPE_UNSPECIFIED':
            return PublicSubnetType.PUBLIC_SUBNET_TYPE_UNSPECIFIED;
        case 1:
        case 'DEDICATED':
            return PublicSubnetType.DEDICATED;
        case 2:
        case 'EPHEMERAL':
            return PublicSubnetType.EPHEMERAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PublicSubnetType.UNRECOGNIZED;
    }
}

export function publicSubnetTypeToJSON(object: PublicSubnetType): string {
    switch (object) {
        case PublicSubnetType.PUBLIC_SUBNET_TYPE_UNSPECIFIED:
            return 'PUBLIC_SUBNET_TYPE_UNSPECIFIED';
        case PublicSubnetType.DEDICATED:
            return 'DEDICATED';
        case PublicSubnetType.EPHEMERAL:
            return 'EPHEMERAL';
        default:
            return 'UNKNOWN';
    }
}

/** A PublicSubnet resource. */
export interface PublicSubnet {
    /** ID of the public subnet. */
    id: string;
    /** ID of the cloud that the public subnet belongs to. */
    cloudId: string;
    /** ID of the folder that the public subnet belongs to. */
    folderId: string;
    /**
     * Name of the public subnet.
     * The name is unique within the folder.
     */
    name: string;
    /** Optional description of the public subnet. */
    description: string;
    /** ID of the availability zone where the server resides. */
    zoneId: string;
    /** IDs of the hardware pool that the public subnet belongs to. */
    hardwarePoolIds: string[];
    /** Type of the public subnet (static or ephemeral). */
    type: PublicSubnetType;
    /** Prefix length of the public subnet CIDR block. */
    prefixLength: number;
    /** CIDR block for the public subnet. */
    cidr: string;
    /** DHCP options for the public subnet. */
    dhcpOptions?: DhcpOptions;
    /** Gateway IP address for the public subnet. */
    gatewayIp: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface PublicSubnet_LabelsEntry {
    key: string;
    value: string;
}

const basePublicSubnet: object = {
    id: '',
    cloudId: '',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    hardwarePoolIds: '',
    type: 0,
    prefixLength: 0,
    cidr: '',
    gatewayIp: '',
};

export const PublicSubnet = {
    encode(message: PublicSubnet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.cloudId !== '') {
            writer.uint32(18).string(message.cloudId);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        for (const v of message.hardwarePoolIds) {
            writer.uint32(66).string(v!);
        }
        if (message.type !== 0) {
            writer.uint32(72).int32(message.type);
        }
        if (message.prefixLength !== 0) {
            writer.uint32(80).int64(message.prefixLength);
        }
        if (message.cidr !== '') {
            writer.uint32(90).string(message.cidr);
        }
        if (message.dhcpOptions !== undefined) {
            DhcpOptions.encode(message.dhcpOptions, writer.uint32(98).fork()).ldelim();
        }
        if (message.gatewayIp !== '') {
            writer.uint32(106).string(message.gatewayIp);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            PublicSubnet_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublicSubnet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublicSubnet } as PublicSubnet;
        message.hardwarePoolIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.cloudId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.hardwarePoolIds.push(reader.string());
                    break;
                case 9:
                    message.type = reader.int32() as any;
                    break;
                case 10:
                    message.prefixLength = longToNumber(reader.int64() as Long);
                    break;
                case 11:
                    message.cidr = reader.string();
                    break;
                case 12:
                    message.dhcpOptions = DhcpOptions.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.gatewayIp = reader.string();
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 200:
                    const entry200 = PublicSubnet_LabelsEntry.decode(reader, reader.uint32());
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PublicSubnet {
        const message = { ...basePublicSubnet } as PublicSubnet;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.hardwarePoolIds = (object.hardwarePoolIds ?? []).map((e: any) => String(e));
        message.type =
            object.type !== undefined && object.type !== null
                ? publicSubnetTypeFromJSON(object.type)
                : 0;
        message.prefixLength =
            object.prefixLength !== undefined && object.prefixLength !== null
                ? Number(object.prefixLength)
                : 0;
        message.cidr = object.cidr !== undefined && object.cidr !== null ? String(object.cidr) : '';
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? DhcpOptions.fromJSON(object.dhcpOptions)
                : undefined;
        message.gatewayIp =
            object.gatewayIp !== undefined && object.gatewayIp !== null
                ? String(object.gatewayIp)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: PublicSubnet): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        if (message.hardwarePoolIds) {
            obj.hardwarePoolIds = message.hardwarePoolIds.map((e) => e);
        } else {
            obj.hardwarePoolIds = [];
        }
        message.type !== undefined && (obj.type = publicSubnetTypeToJSON(message.type));
        message.prefixLength !== undefined && (obj.prefixLength = Math.round(message.prefixLength));
        message.cidr !== undefined && (obj.cidr = message.cidr);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        message.gatewayIp !== undefined && (obj.gatewayIp = message.gatewayIp);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublicSubnet>, I>>(object: I): PublicSubnet {
        const message = { ...basePublicSubnet } as PublicSubnet;
        message.id = object.id ?? '';
        message.cloudId = object.cloudId ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.zoneId = object.zoneId ?? '';
        message.hardwarePoolIds = object.hardwarePoolIds?.map((e) => e) || [];
        message.type = object.type ?? 0;
        message.prefixLength = object.prefixLength ?? 0;
        message.cidr = object.cidr ?? '';
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? DhcpOptions.fromPartial(object.dhcpOptions)
                : undefined;
        message.gatewayIp = object.gatewayIp ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const basePublicSubnet_LabelsEntry: object = { key: '', value: '' };

export const PublicSubnet_LabelsEntry = {
    encode(
        message: PublicSubnet_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): PublicSubnet_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublicSubnet_LabelsEntry } as PublicSubnet_LabelsEntry;
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

    fromJSON(object: any): PublicSubnet_LabelsEntry {
        const message = { ...basePublicSubnet_LabelsEntry } as PublicSubnet_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: PublicSubnet_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublicSubnet_LabelsEntry>, I>>(
        object: I,
    ): PublicSubnet_LabelsEntry {
        const message = { ...basePublicSubnet_LabelsEntry } as PublicSubnet_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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
