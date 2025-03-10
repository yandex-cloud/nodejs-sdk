/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Peering } from '../../../../yandex/cloud/cic/v1/peering';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.cic.v1';

/** A PrivateConnection resource. */
export interface PrivateConnection {
    /** ID of the privateConnection. */
    id: string;
    /**
     * Name of the privateConnection.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the privateConnection. 0-256 characters long. */
    description: string;
    /** ID of the folder that the privateConnection belongs to. */
    folderId: string;
    /** ID of the region that the privateConnection belongs to. */
    regionId: string;
    /** ID of the trunk_connection that the privateConnection belongs to. */
    trunkConnectionId: string;
    /**
     * VLAN_ID that the privateConnection uses in multiplexing.
     * Not used in connections over partners-II
     * Value range: [1, 4095]
     */
    vlanId?: number;
    /** IPv4 peering config of connection */
    ipv4Peering?: Peering;
    /** IPv4 StaticRoute config of connection */
    ipv4StaticRoutes: PrivateConnection_StaticRoute[];
    /**
     * Resource labels, `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
     */
    labels: { [key: string]: string };
    /** Status of the privateConnection. */
    status: PrivateConnection_Status;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
}

export enum PrivateConnection_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    UPDATING = 2,
    DELETING = 3,
    ACTIVE = 4,
    UNRECOGNIZED = -1,
}

export function privateConnection_StatusFromJSON(object: any): PrivateConnection_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return PrivateConnection_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return PrivateConnection_Status.CREATING;
        case 2:
        case 'UPDATING':
            return PrivateConnection_Status.UPDATING;
        case 3:
        case 'DELETING':
            return PrivateConnection_Status.DELETING;
        case 4:
        case 'ACTIVE':
            return PrivateConnection_Status.ACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PrivateConnection_Status.UNRECOGNIZED;
    }
}

export function privateConnection_StatusToJSON(object: PrivateConnection_Status): string {
    switch (object) {
        case PrivateConnection_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case PrivateConnection_Status.CREATING:
            return 'CREATING';
        case PrivateConnection_Status.UPDATING:
            return 'UPDATING';
        case PrivateConnection_Status.DELETING:
            return 'DELETING';
        case PrivateConnection_Status.ACTIVE:
            return 'ACTIVE';
        default:
            return 'UNKNOWN';
    }
}

export interface PrivateConnection_LabelsEntry {
    key: string;
    value: string;
}

export interface PrivateConnection_StaticRoute {
    /**
     * Prefix.
     * It's an ip with format ipPrefix/length where address part of ipPrefix is 0.
     */
    prefix: string;
}

const basePrivateConnection: object = {
    id: '',
    name: '',
    description: '',
    folderId: '',
    regionId: '',
    trunkConnectionId: '',
    status: 0,
};

export const PrivateConnection = {
    encode(message: PrivateConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        if (message.regionId !== '') {
            writer.uint32(50).string(message.regionId);
        }
        if (message.trunkConnectionId !== '') {
            writer.uint32(58).string(message.trunkConnectionId);
        }
        if (message.vlanId !== undefined) {
            Int64Value.encode({ value: message.vlanId! }, writer.uint32(66).fork()).ldelim();
        }
        if (message.ipv4Peering !== undefined) {
            Peering.encode(message.ipv4Peering, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.ipv4StaticRoutes) {
            PrivateConnection_StaticRoute.encode(v!, writer.uint32(146).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            PrivateConnection_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(194).fork(),
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(200).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(218).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateConnection } as PrivateConnection;
        message.ipv4StaticRoutes = [];
        message.labels = {};
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
                    message.description = reader.string();
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.regionId = reader.string();
                    break;
                case 7:
                    message.trunkConnectionId = reader.string();
                    break;
                case 8:
                    message.vlanId = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.ipv4Peering = Peering.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.ipv4StaticRoutes.push(
                        PrivateConnection_StaticRoute.decode(reader, reader.uint32()),
                    );
                    break;
                case 24:
                    const entry24 = PrivateConnection_LabelsEntry.decode(reader, reader.uint32());
                    if (entry24.value !== undefined) {
                        message.labels[entry24.key] = entry24.value;
                    }
                    break;
                case 25:
                    message.status = reader.int32() as any;
                    break;
                case 27:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrivateConnection {
        const message = { ...basePrivateConnection } as PrivateConnection;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : '';
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        message.vlanId =
            object.vlanId !== undefined && object.vlanId !== null
                ? Number(object.vlanId)
                : undefined;
        message.ipv4Peering =
            object.ipv4Peering !== undefined && object.ipv4Peering !== null
                ? Peering.fromJSON(object.ipv4Peering)
                : undefined;
        message.ipv4StaticRoutes = (object.ipv4StaticRoutes ?? []).map((e: any) =>
            PrivateConnection_StaticRoute.fromJSON(e),
        );
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.status =
            object.status !== undefined && object.status !== null
                ? privateConnection_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: PrivateConnection): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        message.vlanId !== undefined && (obj.vlanId = message.vlanId);
        message.ipv4Peering !== undefined &&
            (obj.ipv4Peering = message.ipv4Peering
                ? Peering.toJSON(message.ipv4Peering)
                : undefined);
        if (message.ipv4StaticRoutes) {
            obj.ipv4StaticRoutes = message.ipv4StaticRoutes.map((e) =>
                e ? PrivateConnection_StaticRoute.toJSON(e) : undefined,
            );
        } else {
            obj.ipv4StaticRoutes = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined &&
            (obj.status = privateConnection_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateConnection>, I>>(object: I): PrivateConnection {
        const message = { ...basePrivateConnection } as PrivateConnection;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.folderId = object.folderId ?? '';
        message.regionId = object.regionId ?? '';
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        message.vlanId = object.vlanId ?? undefined;
        message.ipv4Peering =
            object.ipv4Peering !== undefined && object.ipv4Peering !== null
                ? Peering.fromPartial(object.ipv4Peering)
                : undefined;
        message.ipv4StaticRoutes =
            object.ipv4StaticRoutes?.map((e) => PrivateConnection_StaticRoute.fromPartial(e)) || [];
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
};

const basePrivateConnection_LabelsEntry: object = { key: '', value: '' };

export const PrivateConnection_LabelsEntry = {
    encode(
        message: PrivateConnection_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateConnection_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateConnection_LabelsEntry } as PrivateConnection_LabelsEntry;
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

    fromJSON(object: any): PrivateConnection_LabelsEntry {
        const message = { ...basePrivateConnection_LabelsEntry } as PrivateConnection_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: PrivateConnection_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateConnection_LabelsEntry>, I>>(
        object: I,
    ): PrivateConnection_LabelsEntry {
        const message = { ...basePrivateConnection_LabelsEntry } as PrivateConnection_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const basePrivateConnection_StaticRoute: object = { prefix: '' };

export const PrivateConnection_StaticRoute = {
    encode(
        message: PrivateConnection_StaticRoute,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.prefix !== '') {
            writer.uint32(10).string(message.prefix);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateConnection_StaticRoute {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateConnection_StaticRoute } as PrivateConnection_StaticRoute;
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

    fromJSON(object: any): PrivateConnection_StaticRoute {
        const message = { ...basePrivateConnection_StaticRoute } as PrivateConnection_StaticRoute;
        message.prefix =
            object.prefix !== undefined && object.prefix !== null ? String(object.prefix) : '';
        return message;
    },

    toJSON(message: PrivateConnection_StaticRoute): unknown {
        const obj: any = {};
        message.prefix !== undefined && (obj.prefix = message.prefix);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateConnection_StaticRoute>, I>>(
        object: I,
    ): PrivateConnection_StaticRoute {
        const message = { ...basePrivateConnection_StaticRoute } as PrivateConnection_StaticRoute;
        message.prefix = object.prefix ?? '';
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
