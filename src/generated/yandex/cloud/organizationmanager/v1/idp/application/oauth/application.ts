/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp.application.oauth';

/** Represents the status of an application. */
export enum Status {
    /** STATUS_UNSPECIFIED - The status is not specified. */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The apllication is in the process of being created. */
    CREATING = 1,
    /** ACTIVE - The apllication is active and operational. */
    ACTIVE = 2,
    /** SUSPENDED - The apllication is suspended. I.e. authentication via this application is disabled. */
    SUSPENDED = 3,
    /** DELETING - The apllication is in the process of being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Status.ACTIVE;
        case 3:
        case 'SUSPENDED':
            return Status.SUSPENDED;
        case 4:
        case 'DELETING':
            return Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Status.UNRECOGNIZED;
    }
}

export function statusToJSON(object: Status): string {
    switch (object) {
        case Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Status.CREATING:
            return 'CREATING';
        case Status.ACTIVE:
            return 'ACTIVE';
        case Status.SUSPENDED:
            return 'SUSPENDED';
        case Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

/** Represents distribution type of the groups */
export enum GroupDistributionType {
    /** GROUP_DISTRIBUTION_TYPE_UNSPECIFIED - The distribution type is unspecified */
    GROUP_DISTRIBUTION_TYPE_UNSPECIFIED = 0,
    /** NONE - No groups are visible for the application users */
    NONE = 1,
    /** ASSIGNED_GROUPS - Only assigned groups are visible for the application users */
    ASSIGNED_GROUPS = 2,
    /** ALL_GROUPS - All groups are visible for the application users */
    ALL_GROUPS = 3,
    UNRECOGNIZED = -1,
}

export function groupDistributionTypeFromJSON(object: any): GroupDistributionType {
    switch (object) {
        case 0:
        case 'GROUP_DISTRIBUTION_TYPE_UNSPECIFIED':
            return GroupDistributionType.GROUP_DISTRIBUTION_TYPE_UNSPECIFIED;
        case 1:
        case 'NONE':
            return GroupDistributionType.NONE;
        case 2:
        case 'ASSIGNED_GROUPS':
            return GroupDistributionType.ASSIGNED_GROUPS;
        case 3:
        case 'ALL_GROUPS':
            return GroupDistributionType.ALL_GROUPS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GroupDistributionType.UNRECOGNIZED;
    }
}

export function groupDistributionTypeToJSON(object: GroupDistributionType): string {
    switch (object) {
        case GroupDistributionType.GROUP_DISTRIBUTION_TYPE_UNSPECIFIED:
            return 'GROUP_DISTRIBUTION_TYPE_UNSPECIFIED';
        case GroupDistributionType.NONE:
            return 'NONE';
        case GroupDistributionType.ASSIGNED_GROUPS:
            return 'ASSIGNED_GROUPS';
        case GroupDistributionType.ALL_GROUPS:
            return 'ALL_GROUPS';
        default:
            return 'UNKNOWN';
    }
}

/** An OAuth application resource. */
export interface Application {
    /** ID of the application. */
    id: string;
    /**
     * Name of the application.
     * The name is unique within the organization. 3-63 characters long.
     */
    name: string;
    /** ID of the organization that the application belongs to. */
    organizationId: string;
    /** Description of the application. 0-256 characters long. */
    description: string;
    /** Settings of the group claims */
    groupClaimsSettings?: GroupClaimsSettings;
    /** Represents current connection to the OAuth client with specified scopes */
    clientGrant?: ClientGrant;
    /** Current status of the application. */
    status: Status;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** Creation timestamp. */
    createdAt?: Date;
    /** Modification timestamp. */
    updatedAt?: Date;
}

export interface Application_LabelsEntry {
    key: string;
    value: string;
}

/** Settings of the group claims */
export interface GroupClaimsSettings {
    /** Represents current distribution type of the groups. I.e. which groups are visible for the application users. */
    groupDistributionType: GroupDistributionType;
}

/** Represents connection to the OAuth client with specified scopes */
export interface ClientGrant {
    /** OAuth client id */
    clientId: string;
    /** List of authorized client scopes by the application */
    authorizedScopes: string[];
}

const baseApplication: object = {
    id: '',
    name: '',
    organizationId: '',
    description: '',
    status: 0,
};

export const Application: {
    encode(message: Application, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Application;
    fromJSON(object: any): Application;
    toJSON(message: Application): unknown;
    fromPartial<I extends Exact<DeepPartial<Application>, I>>(object: I): Application;
} = {
    encode(message: Application, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.organizationId !== '') {
            writer.uint32(26).string(message.organizationId);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.groupClaimsSettings !== undefined) {
            GroupClaimsSettings.encode(
                message.groupClaimsSettings,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.clientGrant !== undefined) {
            ClientGrant.encode(message.clientGrant, writer.uint32(50).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Application_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(66).fork(),
            ).ldelim();
        });
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Application {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplication } as Application;
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
                    message.organizationId = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.groupClaimsSettings = GroupClaimsSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.clientGrant = ClientGrant.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    const entry8 = Application_LabelsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Application {
        const message = { ...baseApplication } as Application;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.groupClaimsSettings =
            object.groupClaimsSettings !== undefined && object.groupClaimsSettings !== null
                ? GroupClaimsSettings.fromJSON(object.groupClaimsSettings)
                : undefined;
        message.clientGrant =
            object.clientGrant !== undefined && object.clientGrant !== null
                ? ClientGrant.fromJSON(object.clientGrant)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? statusFromJSON(object.status)
                : 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        return message;
    },

    toJSON(message: Application): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.description !== undefined && (obj.description = message.description);
        message.groupClaimsSettings !== undefined &&
            (obj.groupClaimsSettings = message.groupClaimsSettings
                ? GroupClaimsSettings.toJSON(message.groupClaimsSettings)
                : undefined);
        message.clientGrant !== undefined &&
            (obj.clientGrant = message.clientGrant
                ? ClientGrant.toJSON(message.clientGrant)
                : undefined);
        message.status !== undefined && (obj.status = statusToJSON(message.status));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Application>, I>>(object: I): Application {
        const message = { ...baseApplication } as Application;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.organizationId = object.organizationId ?? '';
        message.description = object.description ?? '';
        message.groupClaimsSettings =
            object.groupClaimsSettings !== undefined && object.groupClaimsSettings !== null
                ? GroupClaimsSettings.fromPartial(object.groupClaimsSettings)
                : undefined;
        message.clientGrant =
            object.clientGrant !== undefined && object.clientGrant !== null
                ? ClientGrant.fromPartial(object.clientGrant)
                : undefined;
        message.status = object.status ?? 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const baseApplication_LabelsEntry: object = { key: '', value: '' };

export const Application_LabelsEntry: {
    encode(message: Application_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Application_LabelsEntry;
    fromJSON(object: any): Application_LabelsEntry;
    toJSON(message: Application_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Application_LabelsEntry>, I>>(object: I): Application_LabelsEntry;
} = {
    encode(message: Application_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Application_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplication_LabelsEntry } as Application_LabelsEntry;
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

    fromJSON(object: any): Application_LabelsEntry {
        const message = { ...baseApplication_LabelsEntry } as Application_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Application_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Application_LabelsEntry>, I>>(
        object: I,
    ): Application_LabelsEntry {
        const message = { ...baseApplication_LabelsEntry } as Application_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseGroupClaimsSettings: object = { groupDistributionType: 0 };

export const GroupClaimsSettings: {
    encode(message: GroupClaimsSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupClaimsSettings;
    fromJSON(object: any): GroupClaimsSettings;
    toJSON(message: GroupClaimsSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupClaimsSettings>, I>>(object: I): GroupClaimsSettings;
} = {
    encode(message: GroupClaimsSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupDistributionType !== 0) {
            writer.uint32(8).int32(message.groupDistributionType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupClaimsSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupClaimsSettings } as GroupClaimsSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupDistributionType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupClaimsSettings {
        const message = { ...baseGroupClaimsSettings } as GroupClaimsSettings;
        message.groupDistributionType =
            object.groupDistributionType !== undefined && object.groupDistributionType !== null
                ? groupDistributionTypeFromJSON(object.groupDistributionType)
                : 0;
        return message;
    },

    toJSON(message: GroupClaimsSettings): unknown {
        const obj: any = {};
        message.groupDistributionType !== undefined &&
            (obj.groupDistributionType = groupDistributionTypeToJSON(
                message.groupDistributionType,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupClaimsSettings>, I>>(
        object: I,
    ): GroupClaimsSettings {
        const message = { ...baseGroupClaimsSettings } as GroupClaimsSettings;
        message.groupDistributionType = object.groupDistributionType ?? 0;
        return message;
    },
};

const baseClientGrant: object = { clientId: '', authorizedScopes: '' };

export const ClientGrant: {
    encode(message: ClientGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientGrant;
    fromJSON(object: any): ClientGrant;
    toJSON(message: ClientGrant): unknown;
    fromPartial<I extends Exact<DeepPartial<ClientGrant>, I>>(object: I): ClientGrant;
} = {
    encode(message: ClientGrant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clientId !== '') {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.authorizedScopes) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClientGrant {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClientGrant } as ClientGrant;
        message.authorizedScopes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.authorizedScopes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClientGrant {
        const message = { ...baseClientGrant } as ClientGrant;
        message.clientId =
            object.clientId !== undefined && object.clientId !== null
                ? String(object.clientId)
                : '';
        message.authorizedScopes = (object.authorizedScopes ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ClientGrant): unknown {
        const obj: any = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.authorizedScopes) {
            obj.authorizedScopes = message.authorizedScopes.map((e) => e);
        } else {
            obj.authorizedScopes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClientGrant>, I>>(object: I): ClientGrant {
        const message = { ...baseClientGrant } as ClientGrant;
        message.clientId = object.clientId ?? '';
        message.authorizedScopes = object.authorizedScopes?.map((e) => e) || [];
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
