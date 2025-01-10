/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';
import { Widget } from '../../../../../../yandex/cloud/loadtesting/api/v1/regression/widget';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.regression';

/** Regression dashboard. */
export interface Dashboard {
    $type: 'yandex.cloud.loadtesting.api.v1.regression.Dashboard';
    /** ID of the dashboard. */
    id: string;
    /** Name of the dashboard. */
    name: string;
    /** Description of the dashboard. */
    description: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Last update timestamp. */
    updatedAt?: Date;
    /** UA or SA that created the dashboard. */
    createdBy: string;
    /** UA or SA that updated the dashboard last time. */
    updatedBy: string;
    /** Etag of the dashboard. */
    etag: string;
    /** Dashboard content. */
    content?: Dashboard_Content;
}

/** Content of regression dashboard. */
export interface Dashboard_Content {
    $type: 'yandex.cloud.loadtesting.api.v1.regression.Dashboard.Content';
    /** Widgets. */
    widgets: Widget[];
}

const baseDashboard: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.regression.Dashboard',
    id: '',
    name: '',
    description: '',
    createdBy: '',
    updatedBy: '',
    etag: '',
};

export const Dashboard = {
    $type: 'yandex.cloud.loadtesting.api.v1.regression.Dashboard' as const,

    encode(message: Dashboard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(50).string(message.createdBy);
        }
        if (message.updatedBy !== '') {
            writer.uint32(58).string(message.updatedBy);
        }
        if (message.etag !== '') {
            writer.uint32(66).string(message.etag);
        }
        if (message.content !== undefined) {
            Dashboard_Content.encode(message.content, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Dashboard {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDashboard } as Dashboard;
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
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.updatedBy = reader.string();
                    break;
                case 8:
                    message.etag = reader.string();
                    break;
                case 9:
                    message.content = Dashboard_Content.decode(reader, reader.uint32());
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.updatedBy =
            object.updatedBy !== undefined && object.updatedBy !== null
                ? String(object.updatedBy)
                : '';
        message.etag = object.etag !== undefined && object.etag !== null ? String(object.etag) : '';
        message.content =
            object.content !== undefined && object.content !== null
                ? Dashboard_Content.fromJSON(object.content)
                : undefined;
        return message;
    },

    toJSON(message: Dashboard): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
        message.etag !== undefined && (obj.etag = message.etag);
        message.content !== undefined &&
            (obj.content = message.content ? Dashboard_Content.toJSON(message.content) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Dashboard>, I>>(object: I): Dashboard {
        const message = { ...baseDashboard } as Dashboard;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.createdBy = object.createdBy ?? '';
        message.updatedBy = object.updatedBy ?? '';
        message.etag = object.etag ?? '';
        message.content =
            object.content !== undefined && object.content !== null
                ? Dashboard_Content.fromPartial(object.content)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Dashboard.$type, Dashboard);

const baseDashboard_Content: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.regression.Dashboard.Content',
};

export const Dashboard_Content = {
    $type: 'yandex.cloud.loadtesting.api.v1.regression.Dashboard.Content' as const,

    encode(message: Dashboard_Content, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.widgets) {
            Widget.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Dashboard_Content {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDashboard_Content } as Dashboard_Content;
        message.widgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.widgets.push(Widget.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Dashboard_Content {
        const message = { ...baseDashboard_Content } as Dashboard_Content;
        message.widgets = (object.widgets ?? []).map((e: any) => Widget.fromJSON(e));
        return message;
    },

    toJSON(message: Dashboard_Content): unknown {
        const obj: any = {};
        if (message.widgets) {
            obj.widgets = message.widgets.map((e) => (e ? Widget.toJSON(e) : undefined));
        } else {
            obj.widgets = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Dashboard_Content>, I>>(object: I): Dashboard_Content {
        const message = { ...baseDashboard_Content } as Dashboard_Content;
        message.widgets = object.widgets?.map((e) => Widget.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(Dashboard_Content.$type, Dashboard_Content);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
