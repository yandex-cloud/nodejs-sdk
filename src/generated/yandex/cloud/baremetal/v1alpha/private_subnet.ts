/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DhcpOptions } from '../../../../yandex/cloud/baremetal/v1alpha/dhcp';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** A PrivateSubnet resource. */
export interface PrivateSubnet {
    /** ID of the private subnet. */
    id: string;
    /** ID of the cloud that the private subnet belongs to. */
    cloudId: string;
    /** ID of the folder that the private subnet belongs to. */
    folderId: string;
    /**
     * Name of the private subnet.
     * The name is unique within the folder.
     */
    name: string;
    /** Optional description of the private subnet. */
    description: string;
    /** Status of the private subnet. */
    status: PrivateSubnet_Status;
    /** ID of the availability zone where the server resides. */
    zoneId: string;
    /** ID of the hardware pool that the private subnet belongs to. */
    hardwarePoolId: string;
    /**
     * Optional VRF options for the private subnet. If missing, the private subnet will be unrouted,
     * i.e. it will lack a DHCP server and routing capabilities between this subnet and other private
     * subnets.
     */
    vrfOptions?: PrivateSubnet_VrfOptions;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

/** Private subnet status. */
export enum PrivateSubnet_Status {
    /** STATUS_UNSPECIFIED - Unspecified private subnet status. */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Private subnet is being created. */
    CREATING = 1,
    /** READY - Private subnet is ready to use. */
    READY = 2,
    /** UPDATING - Private subnet is being updated. */
    UPDATING = 3,
    /** DELETING - Private subnet is being deleted. */
    DELETING = 4,
    /** ERROR - Private subnet encountered a problem and cannot operate. */
    ERROR = 5,
    UNRECOGNIZED = -1,
}

export function privateSubnet_StatusFromJSON(object: any): PrivateSubnet_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return PrivateSubnet_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return PrivateSubnet_Status.CREATING;
        case 2:
        case 'READY':
            return PrivateSubnet_Status.READY;
        case 3:
        case 'UPDATING':
            return PrivateSubnet_Status.UPDATING;
        case 4:
        case 'DELETING':
            return PrivateSubnet_Status.DELETING;
        case 5:
        case 'ERROR':
            return PrivateSubnet_Status.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PrivateSubnet_Status.UNRECOGNIZED;
    }
}

export function privateSubnet_StatusToJSON(object: PrivateSubnet_Status): string {
    switch (object) {
        case PrivateSubnet_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case PrivateSubnet_Status.CREATING:
            return 'CREATING';
        case PrivateSubnet_Status.READY:
            return 'READY';
        case PrivateSubnet_Status.UPDATING:
            return 'UPDATING';
        case PrivateSubnet_Status.DELETING:
            return 'DELETING';
        case PrivateSubnet_Status.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

export interface PrivateSubnet_LabelsEntry {
    key: string;
    value: string;
}

/** VRF options for the private subnet. */
export interface PrivateSubnet_VrfOptions {
    /** ID of the VRF. */
    vrfId: string;
    /** CIDR block for the subnet. */
    cidr: string;
    /** DHCP options for the subnet. */
    dhcpOptions?: DhcpOptions;
    /** Gateway IP address for the subnet. */
    gatewayIp: string;
}

const basePrivateSubnet: object = {
    id: '',
    cloudId: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    zoneId: '',
    hardwarePoolId: '',
};

export const PrivateSubnet = {
    encode(message: PrivateSubnet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.hardwarePoolId !== '') {
            writer.uint32(66).string(message.hardwarePoolId);
        }
        if (message.vrfOptions !== undefined) {
            PrivateSubnet_VrfOptions.encode(message.vrfOptions, writer.uint32(74).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            PrivateSubnet_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateSubnet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateSubnet } as PrivateSubnet;
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
                case 6:
                    message.status = reader.int32() as any;
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.hardwarePoolId = reader.string();
                    break;
                case 9:
                    message.vrfOptions = PrivateSubnet_VrfOptions.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 200:
                    const entry200 = PrivateSubnet_LabelsEntry.decode(reader, reader.uint32());
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

    fromJSON(object: any): PrivateSubnet {
        const message = { ...basePrivateSubnet } as PrivateSubnet;
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
        message.status =
            object.status !== undefined && object.status !== null
                ? privateSubnet_StatusFromJSON(object.status)
                : 0;
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.hardwarePoolId =
            object.hardwarePoolId !== undefined && object.hardwarePoolId !== null
                ? String(object.hardwarePoolId)
                : '';
        message.vrfOptions =
            object.vrfOptions !== undefined && object.vrfOptions !== null
                ? PrivateSubnet_VrfOptions.fromJSON(object.vrfOptions)
                : undefined;
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

    toJSON(message: PrivateSubnet): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.status !== undefined && (obj.status = privateSubnet_StatusToJSON(message.status));
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.hardwarePoolId !== undefined && (obj.hardwarePoolId = message.hardwarePoolId);
        message.vrfOptions !== undefined &&
            (obj.vrfOptions = message.vrfOptions
                ? PrivateSubnet_VrfOptions.toJSON(message.vrfOptions)
                : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateSubnet>, I>>(object: I): PrivateSubnet {
        const message = { ...basePrivateSubnet } as PrivateSubnet;
        message.id = object.id ?? '';
        message.cloudId = object.cloudId ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.status = object.status ?? 0;
        message.zoneId = object.zoneId ?? '';
        message.hardwarePoolId = object.hardwarePoolId ?? '';
        message.vrfOptions =
            object.vrfOptions !== undefined && object.vrfOptions !== null
                ? PrivateSubnet_VrfOptions.fromPartial(object.vrfOptions)
                : undefined;
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

const basePrivateSubnet_LabelsEntry: object = { key: '', value: '' };

export const PrivateSubnet_LabelsEntry = {
    encode(
        message: PrivateSubnet_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateSubnet_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateSubnet_LabelsEntry } as PrivateSubnet_LabelsEntry;
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

    fromJSON(object: any): PrivateSubnet_LabelsEntry {
        const message = { ...basePrivateSubnet_LabelsEntry } as PrivateSubnet_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: PrivateSubnet_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateSubnet_LabelsEntry>, I>>(
        object: I,
    ): PrivateSubnet_LabelsEntry {
        const message = { ...basePrivateSubnet_LabelsEntry } as PrivateSubnet_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const basePrivateSubnet_VrfOptions: object = { vrfId: '', cidr: '', gatewayIp: '' };

export const PrivateSubnet_VrfOptions = {
    encode(
        message: PrivateSubnet_VrfOptions,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.vrfId !== '') {
            writer.uint32(10).string(message.vrfId);
        }
        if (message.cidr !== '') {
            writer.uint32(18).string(message.cidr);
        }
        if (message.dhcpOptions !== undefined) {
            DhcpOptions.encode(message.dhcpOptions, writer.uint32(26).fork()).ldelim();
        }
        if (message.gatewayIp !== '') {
            writer.uint32(34).string(message.gatewayIp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateSubnet_VrfOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateSubnet_VrfOptions } as PrivateSubnet_VrfOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vrfId = reader.string();
                    break;
                case 2:
                    message.cidr = reader.string();
                    break;
                case 3:
                    message.dhcpOptions = DhcpOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.gatewayIp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrivateSubnet_VrfOptions {
        const message = { ...basePrivateSubnet_VrfOptions } as PrivateSubnet_VrfOptions;
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        message.cidr = object.cidr !== undefined && object.cidr !== null ? String(object.cidr) : '';
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? DhcpOptions.fromJSON(object.dhcpOptions)
                : undefined;
        message.gatewayIp =
            object.gatewayIp !== undefined && object.gatewayIp !== null
                ? String(object.gatewayIp)
                : '';
        return message;
    },

    toJSON(message: PrivateSubnet_VrfOptions): unknown {
        const obj: any = {};
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        message.cidr !== undefined && (obj.cidr = message.cidr);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        message.gatewayIp !== undefined && (obj.gatewayIp = message.gatewayIp);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateSubnet_VrfOptions>, I>>(
        object: I,
    ): PrivateSubnet_VrfOptions {
        const message = { ...basePrivateSubnet_VrfOptions } as PrivateSubnet_VrfOptions;
        message.vrfId = object.vrfId ?? '';
        message.cidr = object.cidr ?? '';
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? DhcpOptions.fromPartial(object.dhcpOptions)
                : undefined;
        message.gatewayIp = object.gatewayIp ?? '';
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
