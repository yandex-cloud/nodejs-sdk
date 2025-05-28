/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.cloudrouter.v1';

export interface RoutingInstance {
    /** ID of the routingInstance. */
    id: string;
    /**
     * Name of the routingInstance.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the routingInstance. 0-256 characters long. */
    description: string;
    /** ID of the folder that the routingInstance belongs to. */
    folderId: string;
    /** ID of the region that the routingInstance belongs to. */
    regionId: string;
    /** List of the info about vpcNetworks which are attached to routingInstance. */
    vpcInfo: RoutingInstance_VpcInfo[];
    /** List of the info about privateConnections which are attached to routingInstance. */
    cicPrivateConnectionInfo: RoutingInstance_CicPrivateConnectionInfo[];
    /** Status of the routingInstance. */
    status: RoutingInstance_Status;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Resource labels, `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
     */
    labels: { [key: string]: string };
}

export enum RoutingInstance_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    UPDATING = 2,
    DELETING = 3,
    ACTIVE = 4,
    UNRECOGNIZED = -1,
}

export function routingInstance_StatusFromJSON(object: any): RoutingInstance_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return RoutingInstance_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return RoutingInstance_Status.CREATING;
        case 2:
        case 'UPDATING':
            return RoutingInstance_Status.UPDATING;
        case 3:
        case 'DELETING':
            return RoutingInstance_Status.DELETING;
        case 4:
        case 'ACTIVE':
            return RoutingInstance_Status.ACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RoutingInstance_Status.UNRECOGNIZED;
    }
}

export function routingInstance_StatusToJSON(object: RoutingInstance_Status): string {
    switch (object) {
        case RoutingInstance_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case RoutingInstance_Status.CREATING:
            return 'CREATING';
        case RoutingInstance_Status.UPDATING:
            return 'UPDATING';
        case RoutingInstance_Status.DELETING:
            return 'DELETING';
        case RoutingInstance_Status.ACTIVE:
            return 'ACTIVE';
        default:
            return 'UNKNOWN';
    }
}

export interface RoutingInstance_LabelsEntry {
    key: string;
    value: string;
}

export interface RoutingInstance_CicPrivateConnectionInfo {
    /** ID of the cicPrivateConnection that is attached to the routingInstance. */
    cicPrivateConnectionId: string;
}

export interface RoutingInstance_VpcInfo {
    /** ID of the vpcNetwork that is attached to the routingInstance. */
    vpcNetworkId: string;
    /** List of the az-related info about vpcNetworks which are attached to routingInstance */
    azInfos: RoutingInstance_VpcAzInfo[];
}

export interface RoutingInstance_VpcAzInfo {
    /** VpcInfo which is set by user */
    manualInfo?: RoutingInstance_VpcManualInfo;
}

export interface RoutingInstance_VpcManualInfo {
    /** ID of the AZ */
    azId: string;
    /** List of prefixes to announce */
    prefixes: string[];
}

const baseRoutingInstance: object = {
    id: '',
    name: '',
    description: '',
    folderId: '',
    regionId: '',
    status: 0,
};

export const RoutingInstance = {
    encode(message: RoutingInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        for (const v of message.vpcInfo) {
            RoutingInstance_VpcInfo.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.cicPrivateConnectionInfo) {
            RoutingInstance_CicPrivateConnectionInfo.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(90).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            RoutingInstance_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(194).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RoutingInstance {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRoutingInstance } as RoutingInstance;
        message.vpcInfo = [];
        message.cicPrivateConnectionInfo = [];
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
                    message.vpcInfo.push(RoutingInstance_VpcInfo.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cicPrivateConnectionInfo.push(
                        RoutingInstance_CicPrivateConnectionInfo.decode(reader, reader.uint32()),
                    );
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 24:
                    const entry24 = RoutingInstance_LabelsEntry.decode(reader, reader.uint32());
                    if (entry24.value !== undefined) {
                        message.labels[entry24.key] = entry24.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RoutingInstance {
        const message = { ...baseRoutingInstance } as RoutingInstance;
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
        message.vpcInfo = (object.vpcInfo ?? []).map((e: any) =>
            RoutingInstance_VpcInfo.fromJSON(e),
        );
        message.cicPrivateConnectionInfo = (object.cicPrivateConnectionInfo ?? []).map((e: any) =>
            RoutingInstance_CicPrivateConnectionInfo.fromJSON(e),
        );
        message.status =
            object.status !== undefined && object.status !== null
                ? routingInstance_StatusFromJSON(object.status)
                : 0;
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

    toJSON(message: RoutingInstance): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        if (message.vpcInfo) {
            obj.vpcInfo = message.vpcInfo.map((e) =>
                e ? RoutingInstance_VpcInfo.toJSON(e) : undefined,
            );
        } else {
            obj.vpcInfo = [];
        }
        if (message.cicPrivateConnectionInfo) {
            obj.cicPrivateConnectionInfo = message.cicPrivateConnectionInfo.map((e) =>
                e ? RoutingInstance_CicPrivateConnectionInfo.toJSON(e) : undefined,
            );
        } else {
            obj.cicPrivateConnectionInfo = [];
        }
        message.status !== undefined && (obj.status = routingInstance_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RoutingInstance>, I>>(object: I): RoutingInstance {
        const message = { ...baseRoutingInstance } as RoutingInstance;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.folderId = object.folderId ?? '';
        message.regionId = object.regionId ?? '';
        message.vpcInfo = object.vpcInfo?.map((e) => RoutingInstance_VpcInfo.fromPartial(e)) || [];
        message.cicPrivateConnectionInfo =
            object.cicPrivateConnectionInfo?.map((e) =>
                RoutingInstance_CicPrivateConnectionInfo.fromPartial(e),
            ) || [];
        message.status = object.status ?? 0;
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

const baseRoutingInstance_LabelsEntry: object = { key: '', value: '' };

export const RoutingInstance_LabelsEntry = {
    encode(
        message: RoutingInstance_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): RoutingInstance_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRoutingInstance_LabelsEntry } as RoutingInstance_LabelsEntry;
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

    fromJSON(object: any): RoutingInstance_LabelsEntry {
        const message = { ...baseRoutingInstance_LabelsEntry } as RoutingInstance_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: RoutingInstance_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RoutingInstance_LabelsEntry>, I>>(
        object: I,
    ): RoutingInstance_LabelsEntry {
        const message = { ...baseRoutingInstance_LabelsEntry } as RoutingInstance_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseRoutingInstance_CicPrivateConnectionInfo: object = { cicPrivateConnectionId: '' };

export const RoutingInstance_CicPrivateConnectionInfo = {
    encode(
        message: RoutingInstance_CicPrivateConnectionInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cicPrivateConnectionId !== '') {
            writer.uint32(10).string(message.cicPrivateConnectionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): RoutingInstance_CicPrivateConnectionInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRoutingInstance_CicPrivateConnectionInfo,
        } as RoutingInstance_CicPrivateConnectionInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cicPrivateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RoutingInstance_CicPrivateConnectionInfo {
        const message = {
            ...baseRoutingInstance_CicPrivateConnectionInfo,
        } as RoutingInstance_CicPrivateConnectionInfo;
        message.cicPrivateConnectionId =
            object.cicPrivateConnectionId !== undefined && object.cicPrivateConnectionId !== null
                ? String(object.cicPrivateConnectionId)
                : '';
        return message;
    },

    toJSON(message: RoutingInstance_CicPrivateConnectionInfo): unknown {
        const obj: any = {};
        message.cicPrivateConnectionId !== undefined &&
            (obj.cicPrivateConnectionId = message.cicPrivateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RoutingInstance_CicPrivateConnectionInfo>, I>>(
        object: I,
    ): RoutingInstance_CicPrivateConnectionInfo {
        const message = {
            ...baseRoutingInstance_CicPrivateConnectionInfo,
        } as RoutingInstance_CicPrivateConnectionInfo;
        message.cicPrivateConnectionId = object.cicPrivateConnectionId ?? '';
        return message;
    },
};

const baseRoutingInstance_VpcInfo: object = { vpcNetworkId: '' };

export const RoutingInstance_VpcInfo = {
    encode(message: RoutingInstance_VpcInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vpcNetworkId !== '') {
            writer.uint32(10).string(message.vpcNetworkId);
        }
        for (const v of message.azInfos) {
            RoutingInstance_VpcAzInfo.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RoutingInstance_VpcInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRoutingInstance_VpcInfo } as RoutingInstance_VpcInfo;
        message.azInfos = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vpcNetworkId = reader.string();
                    break;
                case 2:
                    message.azInfos.push(RoutingInstance_VpcAzInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RoutingInstance_VpcInfo {
        const message = { ...baseRoutingInstance_VpcInfo } as RoutingInstance_VpcInfo;
        message.vpcNetworkId =
            object.vpcNetworkId !== undefined && object.vpcNetworkId !== null
                ? String(object.vpcNetworkId)
                : '';
        message.azInfos = (object.azInfos ?? []).map((e: any) =>
            RoutingInstance_VpcAzInfo.fromJSON(e),
        );
        return message;
    },

    toJSON(message: RoutingInstance_VpcInfo): unknown {
        const obj: any = {};
        message.vpcNetworkId !== undefined && (obj.vpcNetworkId = message.vpcNetworkId);
        if (message.azInfos) {
            obj.azInfos = message.azInfos.map((e) =>
                e ? RoutingInstance_VpcAzInfo.toJSON(e) : undefined,
            );
        } else {
            obj.azInfos = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RoutingInstance_VpcInfo>, I>>(
        object: I,
    ): RoutingInstance_VpcInfo {
        const message = { ...baseRoutingInstance_VpcInfo } as RoutingInstance_VpcInfo;
        message.vpcNetworkId = object.vpcNetworkId ?? '';
        message.azInfos =
            object.azInfos?.map((e) => RoutingInstance_VpcAzInfo.fromPartial(e)) || [];
        return message;
    },
};

const baseRoutingInstance_VpcAzInfo: object = {};

export const RoutingInstance_VpcAzInfo = {
    encode(
        message: RoutingInstance_VpcAzInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.manualInfo !== undefined) {
            RoutingInstance_VpcManualInfo.encode(
                message.manualInfo,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RoutingInstance_VpcAzInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRoutingInstance_VpcAzInfo } as RoutingInstance_VpcAzInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.manualInfo = RoutingInstance_VpcManualInfo.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RoutingInstance_VpcAzInfo {
        const message = { ...baseRoutingInstance_VpcAzInfo } as RoutingInstance_VpcAzInfo;
        message.manualInfo =
            object.manualInfo !== undefined && object.manualInfo !== null
                ? RoutingInstance_VpcManualInfo.fromJSON(object.manualInfo)
                : undefined;
        return message;
    },

    toJSON(message: RoutingInstance_VpcAzInfo): unknown {
        const obj: any = {};
        message.manualInfo !== undefined &&
            (obj.manualInfo = message.manualInfo
                ? RoutingInstance_VpcManualInfo.toJSON(message.manualInfo)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RoutingInstance_VpcAzInfo>, I>>(
        object: I,
    ): RoutingInstance_VpcAzInfo {
        const message = { ...baseRoutingInstance_VpcAzInfo } as RoutingInstance_VpcAzInfo;
        message.manualInfo =
            object.manualInfo !== undefined && object.manualInfo !== null
                ? RoutingInstance_VpcManualInfo.fromPartial(object.manualInfo)
                : undefined;
        return message;
    },
};

const baseRoutingInstance_VpcManualInfo: object = { azId: '', prefixes: '' };

export const RoutingInstance_VpcManualInfo = {
    encode(
        message: RoutingInstance_VpcManualInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.azId !== '') {
            writer.uint32(10).string(message.azId);
        }
        for (const v of message.prefixes) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RoutingInstance_VpcManualInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRoutingInstance_VpcManualInfo } as RoutingInstance_VpcManualInfo;
        message.prefixes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.azId = reader.string();
                    break;
                case 5:
                    message.prefixes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RoutingInstance_VpcManualInfo {
        const message = { ...baseRoutingInstance_VpcManualInfo } as RoutingInstance_VpcManualInfo;
        message.azId = object.azId !== undefined && object.azId !== null ? String(object.azId) : '';
        message.prefixes = (object.prefixes ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: RoutingInstance_VpcManualInfo): unknown {
        const obj: any = {};
        message.azId !== undefined && (obj.azId = message.azId);
        if (message.prefixes) {
            obj.prefixes = message.prefixes.map((e) => e);
        } else {
            obj.prefixes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RoutingInstance_VpcManualInfo>, I>>(
        object: I,
    ): RoutingInstance_VpcManualInfo {
        const message = { ...baseRoutingInstance_VpcManualInfo } as RoutingInstance_VpcManualInfo;
        message.azId = object.azId ?? '';
        message.prefixes = object.prefixes?.map((e) => e) || [];
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
