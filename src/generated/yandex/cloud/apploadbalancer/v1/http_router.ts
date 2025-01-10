/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    RouteOptions,
    VirtualHost,
} from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

/**
 * An HTTP router resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router).
 */
export interface HttpRouter {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter';
    /** ID of the router. Generated at creation time. */
    id: string;
    /** Name of the router. The name is unique within the folder. */
    name: string;
    /** Description of the router. */
    description: string;
    /** ID of the folder that the router belongs to. */
    folderId: string;
    /**
     * Router labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: { [key: string]: string };
    /**
     * Virtual hosts that combine routes inside the router.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
     *
     * Only one virtual host with no authority (default match) can be specified.
     */
    virtualHosts: VirtualHost[];
    /** Creation timestamp. */
    createdAt?: Date;
    routeOptions?: RouteOptions;
}

export interface HttpRouter_LabelsEntry {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry';
    key: string;
    value: string;
}

const baseHttpRouter: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter',
    id: '',
    name: '',
    description: '',
    folderId: '',
};

export const HttpRouter = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter' as const,

    encode(message: HttpRouter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            writer.uint32(34).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            HttpRouter_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        for (const v of message.virtualHosts) {
            VirtualHost.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            RouteOptions.encode(message.routeOptions, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRouter } as HttpRouter;
        message.labels = {};
        message.virtualHosts = [];
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
                    message.folderId = reader.string();
                    break;
                case 5:
                    const entry5 = HttpRouter_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.virtualHosts.push(VirtualHost.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.routeOptions = RouteOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HttpRouter {
        const message = { ...baseHttpRouter } as HttpRouter;
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.virtualHosts = (object.virtualHosts ?? []).map((e: any) => VirtualHost.fromJSON(e));
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? RouteOptions.fromJSON(object.routeOptions)
                : undefined;
        return message;
    },

    toJSON(message: HttpRouter): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) =>
                e ? VirtualHost.toJSON(e) : undefined,
            );
        } else {
            obj.virtualHosts = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HttpRouter>, I>>(object: I): HttpRouter {
        const message = { ...baseHttpRouter } as HttpRouter;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.folderId = object.folderId ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.virtualHosts = object.virtualHosts?.map((e) => VirtualHost.fromPartial(e)) || [];
        message.createdAt = object.createdAt ?? undefined;
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? RouteOptions.fromPartial(object.routeOptions)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(HttpRouter.$type, HttpRouter);

const baseHttpRouter_LabelsEntry: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry',
    key: '',
    value: '',
};

export const HttpRouter_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouter.LabelsEntry' as const,

    encode(message: HttpRouter_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouter_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRouter_LabelsEntry } as HttpRouter_LabelsEntry;
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

    fromJSON(object: any): HttpRouter_LabelsEntry {
        const message = { ...baseHttpRouter_LabelsEntry } as HttpRouter_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: HttpRouter_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HttpRouter_LabelsEntry>, I>>(
        object: I,
    ): HttpRouter_LabelsEntry {
        const message = { ...baseHttpRouter_LabelsEntry } as HttpRouter_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(HttpRouter_LabelsEntry.$type, HttpRouter_LabelsEntry);

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
