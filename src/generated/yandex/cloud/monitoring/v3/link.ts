/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

export interface Link {
    /** Required. Link title. */
    title: string;
    /** Open link in new tab. */
    openInNewTab: boolean;
    /**
     * Url that can be a template with mustache expressions ({{expression}})
     * Variables available for template:
     * - Dashboard time interval in diverse formats. Variables: __from:<format>, __to:<format>,
     *   where format is one of: iso, seconds or milliseconds.
     * - Dashboard parameters
     */
    url: string | undefined;
    dashboard?: Link_Dashboard | undefined;
}

export interface Link_Dashboard {
    projectId: string | undefined;
    folderId: string | undefined;
    dashboardName: string;
    applyTimeRange: boolean;
}

const baseLink: object = { title: '', openInNewTab: false };

export const Link = {
    encode(message: Link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.openInNewTab === true) {
            writer.uint32(16).bool(message.openInNewTab);
        }
        if (message.url !== undefined) {
            writer.uint32(26).string(message.url);
        }
        if (message.dashboard !== undefined) {
            Link_Dashboard.encode(message.dashboard, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Link {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLink } as Link;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.openInNewTab = reader.bool();
                    break;
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.dashboard = Link_Dashboard.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Link {
        const message = { ...baseLink } as Link;
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.openInNewTab =
            object.openInNewTab !== undefined && object.openInNewTab !== null
                ? Boolean(object.openInNewTab)
                : false;
        message.url =
            object.url !== undefined && object.url !== null ? String(object.url) : undefined;
        message.dashboard =
            object.dashboard !== undefined && object.dashboard !== null
                ? Link_Dashboard.fromJSON(object.dashboard)
                : undefined;
        return message;
    },

    toJSON(message: Link): unknown {
        const obj: any = {};
        message.title !== undefined && (obj.title = message.title);
        message.openInNewTab !== undefined && (obj.openInNewTab = message.openInNewTab);
        message.url !== undefined && (obj.url = message.url);
        message.dashboard !== undefined &&
            (obj.dashboard = message.dashboard
                ? Link_Dashboard.toJSON(message.dashboard)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Link>, I>>(object: I): Link {
        const message = { ...baseLink } as Link;
        message.title = object.title ?? '';
        message.openInNewTab = object.openInNewTab ?? false;
        message.url = object.url ?? undefined;
        message.dashboard =
            object.dashboard !== undefined && object.dashboard !== null
                ? Link_Dashboard.fromPartial(object.dashboard)
                : undefined;
        return message;
    },
};

const baseLink_Dashboard: object = { dashboardName: '', applyTimeRange: false };

export const Link_Dashboard = {
    encode(message: Link_Dashboard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.projectId !== undefined) {
            writer.uint32(10).string(message.projectId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.dashboardName !== '') {
            writer.uint32(26).string(message.dashboardName);
        }
        if (message.applyTimeRange === true) {
            writer.uint32(32).bool(message.applyTimeRange);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Link_Dashboard {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLink_Dashboard } as Link_Dashboard;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.dashboardName = reader.string();
                    break;
                case 4:
                    message.applyTimeRange = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Link_Dashboard {
        const message = { ...baseLink_Dashboard } as Link_Dashboard;
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.dashboardName =
            object.dashboardName !== undefined && object.dashboardName !== null
                ? String(object.dashboardName)
                : '';
        message.applyTimeRange =
            object.applyTimeRange !== undefined && object.applyTimeRange !== null
                ? Boolean(object.applyTimeRange)
                : false;
        return message;
    },

    toJSON(message: Link_Dashboard): unknown {
        const obj: any = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.dashboardName !== undefined && (obj.dashboardName = message.dashboardName);
        message.applyTimeRange !== undefined && (obj.applyTimeRange = message.applyTimeRange);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Link_Dashboard>, I>>(object: I): Link_Dashboard {
        const message = { ...baseLink_Dashboard } as Link_Dashboard;
        message.projectId = object.projectId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.dashboardName = object.dashboardName ?? '';
        message.applyTimeRange = object.applyTimeRange ?? false;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
