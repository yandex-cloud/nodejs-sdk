/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.clouddesktop.v1.api';

/** A desktop resource. */
export interface Desktop {
    /** Desktop ID. */
    id: string;
    /** ID of the folder that the desktop belongs to. */
    folderId: string;
    /** ID of the desktop group that the desktop belongs to. */
    desktopGroupId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Status of the desktop. */
    status: Desktop_Status;
    /** Name of the desktop. */
    name: string;
    /** Resources of the desktop. */
    resources?: Resources;
    networkInterfaces: NetworkInterface[];
    users: User[];
    /** Labels of the desktop. */
    labels: { [key: string]: string };
}

export enum Desktop_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Desktop is being created. */
    CREATING = 1,
    /** ACTIVE - Desktop is ready to be used. */
    ACTIVE = 2,
    /** DELETING - Desktop is being deleted. */
    DELETING = 3,
    /** RESTARTING - Desktop is restarting. */
    RESTARTING = 4,
    /** UPDATING - Desktop is updating. */
    UPDATING = 5,
    /** STARTING - Desktop is starting. */
    STARTING = 6,
    /** STOPPING - Desktop is stopping. */
    STOPPING = 7,
    /** STOPPED - Desktop is stopped. */
    STOPPED = 8,
    /** ERROR - Desktop did not manage start or restart. */
    ERROR = 9,
    /** CREATION_FAILED - Desktop did not manage to get created or updated. */
    CREATION_FAILED = 10,
    UNRECOGNIZED = -1,
}

export function desktop_StatusFromJSON(object: any): Desktop_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Desktop_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Desktop_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Desktop_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Desktop_Status.DELETING;
        case 4:
        case 'RESTARTING':
            return Desktop_Status.RESTARTING;
        case 5:
        case 'UPDATING':
            return Desktop_Status.UPDATING;
        case 6:
        case 'STARTING':
            return Desktop_Status.STARTING;
        case 7:
        case 'STOPPING':
            return Desktop_Status.STOPPING;
        case 8:
        case 'STOPPED':
            return Desktop_Status.STOPPED;
        case 9:
        case 'ERROR':
            return Desktop_Status.ERROR;
        case 10:
        case 'CREATION_FAILED':
            return Desktop_Status.CREATION_FAILED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Desktop_Status.UNRECOGNIZED;
    }
}

export function desktop_StatusToJSON(object: Desktop_Status): string {
    switch (object) {
        case Desktop_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Desktop_Status.CREATING:
            return 'CREATING';
        case Desktop_Status.ACTIVE:
            return 'ACTIVE';
        case Desktop_Status.DELETING:
            return 'DELETING';
        case Desktop_Status.RESTARTING:
            return 'RESTARTING';
        case Desktop_Status.UPDATING:
            return 'UPDATING';
        case Desktop_Status.STARTING:
            return 'STARTING';
        case Desktop_Status.STOPPING:
            return 'STOPPING';
        case Desktop_Status.STOPPED:
            return 'STOPPED';
        case Desktop_Status.ERROR:
            return 'ERROR';
        case Desktop_Status.CREATION_FAILED:
            return 'CREATION_FAILED';
        default:
            return 'UNKNOWN';
    }
}

export interface Desktop_LabelsEntry {
    key: string;
    value: string;
}

export interface Resources {
    memory: number;
    cores: number;
    coreFraction: number;
}

export interface User {
    /** Identity of the access binding. */
    subjectId: string;
    /** Type of the access binding, e.g. userAccount, serviceAccount, system. */
    subjectType: string;
}

export interface NetworkInterface {
    networkId: string;
    subnetId: string;
}

const baseDesktop: object = { id: '', folderId: '', desktopGroupId: '', status: 0, name: '' };

export const Desktop = {
    encode(message: Desktop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.desktopGroupId !== '') {
            writer.uint32(26).string(message.desktopGroupId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.name !== '') {
            writer.uint32(90).string(message.name);
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(170).fork()).ldelim();
        }
        for (const v of message.networkInterfaces) {
            NetworkInterface.encode(v!, writer.uint32(178).fork()).ldelim();
        }
        for (const v of message.users) {
            User.encode(v!, writer.uint32(186).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Desktop_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(194).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Desktop {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDesktop } as Desktop;
        message.networkInterfaces = [];
        message.users = [];
        message.labels = {};
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
                    message.desktopGroupId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    message.name = reader.string();
                    break;
                case 21:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.networkInterfaces.push(
                        NetworkInterface.decode(reader, reader.uint32()),
                    );
                    break;
                case 23:
                    message.users.push(User.decode(reader, reader.uint32()));
                    break;
                case 24:
                    const entry24 = Desktop_LabelsEntry.decode(reader, reader.uint32());
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

    fromJSON(object: any): Desktop {
        const message = { ...baseDesktop } as Desktop;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? desktop_StatusFromJSON(object.status)
                : 0;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.networkInterfaces = (object.networkInterfaces ?? []).map((e: any) =>
            NetworkInterface.fromJSON(e),
        );
        message.users = (object.users ?? []).map((e: any) => User.fromJSON(e));
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: Desktop): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.status !== undefined && (obj.status = desktop_StatusToJSON(message.status));
        message.name !== undefined && (obj.name = message.name);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) =>
                e ? NetworkInterface.toJSON(e) : undefined,
            );
        } else {
            obj.networkInterfaces = [];
        }
        if (message.users) {
            obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
        } else {
            obj.users = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Desktop>, I>>(object: I): Desktop {
        const message = { ...baseDesktop } as Desktop;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.desktopGroupId = object.desktopGroupId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.status = object.status ?? 0;
        message.name = object.name ?? '';
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.networkInterfaces =
            object.networkInterfaces?.map((e) => NetworkInterface.fromPartial(e)) || [];
        message.users = object.users?.map((e) => User.fromPartial(e)) || [];
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

const baseDesktop_LabelsEntry: object = { key: '', value: '' };

export const Desktop_LabelsEntry = {
    encode(message: Desktop_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Desktop_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDesktop_LabelsEntry } as Desktop_LabelsEntry;
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

    fromJSON(object: any): Desktop_LabelsEntry {
        const message = { ...baseDesktop_LabelsEntry } as Desktop_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Desktop_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Desktop_LabelsEntry>, I>>(
        object: I,
    ): Desktop_LabelsEntry {
        const message = { ...baseDesktop_LabelsEntry } as Desktop_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseResources: object = { memory: 0, cores: 0, coreFraction: 0 };

export const Resources = {
    encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.coreFraction !== 0) {
            writer.uint32(24).int64(message.coreFraction);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources } as Resources;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Resources {
        const message = { ...baseResources } as Resources;
        message.memory =
            object.memory !== undefined && object.memory !== null ? Number(object.memory) : 0;
        message.cores =
            object.cores !== undefined && object.cores !== null ? Number(object.cores) : 0;
        message.coreFraction =
            object.coreFraction !== undefined && object.coreFraction !== null
                ? Number(object.coreFraction)
                : 0;
        return message;
    },

    toJSON(message: Resources): unknown {
        const obj: any = {};
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        message.coreFraction !== undefined && (obj.coreFraction = Math.round(message.coreFraction));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
        const message = { ...baseResources } as Resources;
        message.memory = object.memory ?? 0;
        message.cores = object.cores ?? 0;
        message.coreFraction = object.coreFraction ?? 0;
        return message;
    },
};

const baseUser: object = { subjectId: '', subjectType: '' };

export const User = {
    encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subjectId !== '') {
            writer.uint32(10).string(message.subjectId);
        }
        if (message.subjectType !== '') {
            writer.uint32(18).string(message.subjectType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): User {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser } as User;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectId = reader.string();
                    break;
                case 2:
                    message.subjectType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): User {
        const message = { ...baseUser } as User;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.subjectType =
            object.subjectType !== undefined && object.subjectType !== null
                ? String(object.subjectType)
                : '';
        return message;
    },

    toJSON(message: User): unknown {
        const obj: any = {};
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.subjectType !== undefined && (obj.subjectType = message.subjectType);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
        const message = { ...baseUser } as User;
        message.subjectId = object.subjectId ?? '';
        message.subjectType = object.subjectType ?? '';
        return message;
    },
};

const baseNetworkInterface: object = { networkId: '', subnetId: '' };

export const NetworkInterface = {
    encode(message: NetworkInterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterface {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterface } as NetworkInterface;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NetworkInterface {
        const message = { ...baseNetworkInterface } as NetworkInterface;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        return message;
    },

    toJSON(message: NetworkInterface): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NetworkInterface>, I>>(object: I): NetworkInterface {
        const message = { ...baseNetworkInterface } as NetworkInterface;
        message.networkId = object.networkId ?? '';
        message.subnetId = object.subnetId ?? '';
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
