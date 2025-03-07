/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Parametrization } from '../../../../yandex/cloud/monitoring/v3/parametrization';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Widget } from '../../../../yandex/cloud/monitoring/v3/widget';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

/** Dashboard resource. */
export interface Dashboard {
    /** Dashboard ID. */
    id: string;
    /** Folder ID. */
    folderId: string | undefined;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Modification timestamp. */
    modifiedAt?: Date;
    /** ID of the user who created the dashboard. */
    createdBy: string;
    /** ID of the user who modified the dashboard. */
    modifiedBy: string;
    /** Dashboard name. */
    name: string;
    /** Dashboard description. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Dashboard title. */
    title: string;
    /** List of dashboard widgets. */
    widgets: Widget[];
    /** Dashboard parametrization. */
    parametrization?: Parametrization;
    /** Dashboard etag. */
    etag: string;
    /**
     * Entity that controls dashboard
     * Must match the regular expression "[\w \-]{1,100}"
     */
    managedBy: string;
    /**
     * Information about entity that controls dashboard
     * Must be valid URI
     */
    managedLink: string;
}

export interface Dashboard_LabelsEntry {
    key: string;
    value: string;
}

const baseDashboard: object = {
    id: '',
    createdBy: '',
    modifiedBy: '',
    name: '',
    description: '',
    title: '',
    etag: '',
    managedBy: '',
    managedLink: '',
};

export const Dashboard = {
    encode(message: Dashboard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(162).fork()).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(170).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(178).string(message.createdBy);
        }
        if (message.modifiedBy !== '') {
            writer.uint32(186).string(message.modifiedBy);
        }
        if (message.name !== '') {
            writer.uint32(194).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(202).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Dashboard_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(210).fork(),
            ).ldelim();
        });
        if (message.title !== '') {
            writer.uint32(218).string(message.title);
        }
        for (const v of message.widgets) {
            Widget.encode(v!, writer.uint32(226).fork()).ldelim();
        }
        if (message.parametrization !== undefined) {
            Parametrization.encode(message.parametrization, writer.uint32(234).fork()).ldelim();
        }
        if (message.etag !== '') {
            writer.uint32(242).string(message.etag);
        }
        if (message.managedBy !== '') {
            writer.uint32(258).string(message.managedBy);
        }
        if (message.managedLink !== '') {
            writer.uint32(266).string(message.managedLink);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Dashboard {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDashboard } as Dashboard;
        message.labels = {};
        message.widgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 20:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.createdBy = reader.string();
                    break;
                case 23:
                    message.modifiedBy = reader.string();
                    break;
                case 24:
                    message.name = reader.string();
                    break;
                case 25:
                    message.description = reader.string();
                    break;
                case 26:
                    const entry26 = Dashboard_LabelsEntry.decode(reader, reader.uint32());
                    if (entry26.value !== undefined) {
                        message.labels[entry26.key] = entry26.value;
                    }
                    break;
                case 27:
                    message.title = reader.string();
                    break;
                case 28:
                    message.widgets.push(Widget.decode(reader, reader.uint32()));
                    break;
                case 29:
                    message.parametrization = Parametrization.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.etag = reader.string();
                    break;
                case 32:
                    message.managedBy = reader.string();
                    break;
                case 33:
                    message.managedLink = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Dashboard {
        const message = { ...baseDashboard } as Dashboard;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.modifiedBy =
            object.modifiedBy !== undefined && object.modifiedBy !== null
                ? String(object.modifiedBy)
                : '';
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
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.widgets = (object.widgets ?? []).map((e: any) => Widget.fromJSON(e));
        message.parametrization =
            object.parametrization !== undefined && object.parametrization !== null
                ? Parametrization.fromJSON(object.parametrization)
                : undefined;
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        message.managedBy =
            object.managedBy !== undefined && object.managedBy !== null
                ? String(object.managedBy)
                : '';
        message.managedLink =
            object.managedLink !== undefined && object.managedLink !== null
                ? String(object.managedLink)
                : '';
        return message;
    },

    toJSON(message: Dashboard): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.modifiedAt !== undefined && (obj.modifiedAt = message.modifiedAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.title !== undefined && (obj.title = message.title);
        if (message.widgets) {
            obj.widgets = message.widgets.map((e) => (e ? Widget.toJSON(e) : undefined));
        } else {
            obj.widgets = [];
        }
        message.parametrization !== undefined &&
            (obj.parametrization = message.parametrization
                ? Parametrization.toJSON(message.parametrization)
                : undefined);
        message.etag !== undefined && (obj.etag = message.etag);
        message.managedBy !== undefined && (obj.managedBy = message.managedBy);
        message.managedLink !== undefined && (obj.managedLink = message.managedLink);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Dashboard>, I>>(object: I): Dashboard {
        const message = { ...baseDashboard } as Dashboard;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.modifiedAt = object.modifiedAt ?? undefined;
        message.createdBy = object.createdBy ?? '';
        message.modifiedBy = object.modifiedBy ?? '';
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
        message.title = object.title ?? '';
        message.widgets = object.widgets?.map((e) => Widget.fromPartial(e)) || [];
        message.parametrization =
            object.parametrization !== undefined && object.parametrization !== null
                ? Parametrization.fromPartial(object.parametrization)
                : undefined;
        message.etag = object.etag ?? '';
        message.managedBy = object.managedBy ?? '';
        message.managedLink = object.managedLink ?? '';
        return message;
    },
};

const baseDashboard_LabelsEntry: object = { key: '', value: '' };

export const Dashboard_LabelsEntry = {
    encode(message: Dashboard_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Dashboard_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDashboard_LabelsEntry } as Dashboard_LabelsEntry;
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

    fromJSON(object: any): Dashboard_LabelsEntry {
        const message = { ...baseDashboard_LabelsEntry } as Dashboard_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Dashboard_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Dashboard_LabelsEntry>, I>>(
        object: I,
    ): Dashboard_LabelsEntry {
        const message = { ...baseDashboard_LabelsEntry } as Dashboard_LabelsEntry;
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
