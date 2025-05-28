/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

/** Root entity for content separation. */
export interface Channel {
    /** ID of the channel. */
    id: string;
    /** ID of the organization where channel should be created. */
    organizationId: string;
    /** Channel title. */
    title: string;
    /** Channel description. */
    description: string;
    /** Time when channel was created. */
    createdAt?: Date;
    /** Time of last channel update. */
    updatedAt?: Date;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
    /** Channel settings. */
    settings?: ChannelSettings;
}

export interface Channel_LabelsEntry {
    key: string;
    value: string;
}

/** Channel settings. */
export interface ChannelSettings {
    /** Advertisement settings. */
    advertisement?: AdvertisementSettings;
    /** Referer verification settings */
    refererVerification?: RefererVerificationSettings;
}

/** Advertisement settings. */
export interface AdvertisementSettings {
    yandexDirect?: AdvertisementSettings_YandexDirect | undefined;
}

/** YandexDirect provider settings. */
export interface AdvertisementSettings_YandexDirect {
    /** Enable Partner Ad for Live and VOD content. */
    enable: boolean;
    /** Advertisement page ID. */
    pageId: number;
    /** Advertisement category. */
    category: number;
}

/** Referer verification settings. */
export interface RefererVerificationSettings {
    /** Enable verification */
    enable: boolean;
    /** List of available domains */
    allowedDomains: string[];
}

const baseChannel: object = { id: '', organizationId: '', title: '', description: '' };

export const Channel = {
    encode(message: Channel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(810).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Channel_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        if (message.settings !== undefined) {
            ChannelSettings.encode(message.settings, writer.uint32(1610).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Channel {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannel } as Channel;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 101:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 200:
                    const entry200 = Channel_LabelsEntry.decode(reader, reader.uint32());
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                case 201:
                    message.settings = ChannelSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Channel {
        const message = { ...baseChannel } as Channel;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? ChannelSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },

    toJSON(message: Channel): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? ChannelSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Channel>, I>>(object: I): Channel {
        const message = { ...baseChannel } as Channel;
        message.id = object.id ?? '';
        message.organizationId = object.organizationId ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? ChannelSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};

const baseChannel_LabelsEntry: object = { key: '', value: '' };

export const Channel_LabelsEntry = {
    encode(message: Channel_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Channel_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannel_LabelsEntry } as Channel_LabelsEntry;
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

    fromJSON(object: any): Channel_LabelsEntry {
        const message = { ...baseChannel_LabelsEntry } as Channel_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Channel_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Channel_LabelsEntry>, I>>(
        object: I,
    ): Channel_LabelsEntry {
        const message = { ...baseChannel_LabelsEntry } as Channel_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseChannelSettings: object = {};

export const ChannelSettings = {
    encode(message: ChannelSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.advertisement !== undefined) {
            AdvertisementSettings.encode(message.advertisement, writer.uint32(10).fork()).ldelim();
        }
        if (message.refererVerification !== undefined) {
            RefererVerificationSettings.encode(
                message.refererVerification,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ChannelSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannelSettings } as ChannelSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.advertisement = AdvertisementSettings.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.refererVerification = RefererVerificationSettings.decode(
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

    fromJSON(object: any): ChannelSettings {
        const message = { ...baseChannelSettings } as ChannelSettings;
        message.advertisement =
            object.advertisement !== undefined && object.advertisement !== null
                ? AdvertisementSettings.fromJSON(object.advertisement)
                : undefined;
        message.refererVerification =
            object.refererVerification !== undefined && object.refererVerification !== null
                ? RefererVerificationSettings.fromJSON(object.refererVerification)
                : undefined;
        return message;
    },

    toJSON(message: ChannelSettings): unknown {
        const obj: any = {};
        message.advertisement !== undefined &&
            (obj.advertisement = message.advertisement
                ? AdvertisementSettings.toJSON(message.advertisement)
                : undefined);
        message.refererVerification !== undefined &&
            (obj.refererVerification = message.refererVerification
                ? RefererVerificationSettings.toJSON(message.refererVerification)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ChannelSettings>, I>>(object: I): ChannelSettings {
        const message = { ...baseChannelSettings } as ChannelSettings;
        message.advertisement =
            object.advertisement !== undefined && object.advertisement !== null
                ? AdvertisementSettings.fromPartial(object.advertisement)
                : undefined;
        message.refererVerification =
            object.refererVerification !== undefined && object.refererVerification !== null
                ? RefererVerificationSettings.fromPartial(object.refererVerification)
                : undefined;
        return message;
    },
};

const baseAdvertisementSettings: object = {};

export const AdvertisementSettings = {
    encode(message: AdvertisementSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.yandexDirect !== undefined) {
            AdvertisementSettings_YandexDirect.encode(
                message.yandexDirect,
                writer.uint32(802).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AdvertisementSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAdvertisementSettings } as AdvertisementSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 100:
                    message.yandexDirect = AdvertisementSettings_YandexDirect.decode(
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

    fromJSON(object: any): AdvertisementSettings {
        const message = { ...baseAdvertisementSettings } as AdvertisementSettings;
        message.yandexDirect =
            object.yandexDirect !== undefined && object.yandexDirect !== null
                ? AdvertisementSettings_YandexDirect.fromJSON(object.yandexDirect)
                : undefined;
        return message;
    },

    toJSON(message: AdvertisementSettings): unknown {
        const obj: any = {};
        message.yandexDirect !== undefined &&
            (obj.yandexDirect = message.yandexDirect
                ? AdvertisementSettings_YandexDirect.toJSON(message.yandexDirect)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AdvertisementSettings>, I>>(
        object: I,
    ): AdvertisementSettings {
        const message = { ...baseAdvertisementSettings } as AdvertisementSettings;
        message.yandexDirect =
            object.yandexDirect !== undefined && object.yandexDirect !== null
                ? AdvertisementSettings_YandexDirect.fromPartial(object.yandexDirect)
                : undefined;
        return message;
    },
};

const baseAdvertisementSettings_YandexDirect: object = { enable: false, pageId: 0, category: 0 };

export const AdvertisementSettings_YandexDirect = {
    encode(
        message: AdvertisementSettings_YandexDirect,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enable === true) {
            writer.uint32(8).bool(message.enable);
        }
        if (message.pageId !== 0) {
            writer.uint32(16).int64(message.pageId);
        }
        if (message.category !== 0) {
            writer.uint32(24).int64(message.category);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AdvertisementSettings_YandexDirect {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAdvertisementSettings_YandexDirect,
        } as AdvertisementSettings_YandexDirect;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enable = reader.bool();
                    break;
                case 2:
                    message.pageId = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.category = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AdvertisementSettings_YandexDirect {
        const message = {
            ...baseAdvertisementSettings_YandexDirect,
        } as AdvertisementSettings_YandexDirect;
        message.enable =
            object.enable !== undefined && object.enable !== null ? Boolean(object.enable) : false;
        message.pageId =
            object.pageId !== undefined && object.pageId !== null ? Number(object.pageId) : 0;
        message.category =
            object.category !== undefined && object.category !== null ? Number(object.category) : 0;
        return message;
    },

    toJSON(message: AdvertisementSettings_YandexDirect): unknown {
        const obj: any = {};
        message.enable !== undefined && (obj.enable = message.enable);
        message.pageId !== undefined && (obj.pageId = Math.round(message.pageId));
        message.category !== undefined && (obj.category = Math.round(message.category));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AdvertisementSettings_YandexDirect>, I>>(
        object: I,
    ): AdvertisementSettings_YandexDirect {
        const message = {
            ...baseAdvertisementSettings_YandexDirect,
        } as AdvertisementSettings_YandexDirect;
        message.enable = object.enable ?? false;
        message.pageId = object.pageId ?? 0;
        message.category = object.category ?? 0;
        return message;
    },
};

const baseRefererVerificationSettings: object = { enable: false, allowedDomains: '' };

export const RefererVerificationSettings = {
    encode(
        message: RefererVerificationSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enable === true) {
            writer.uint32(8).bool(message.enable);
        }
        for (const v of message.allowedDomains) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RefererVerificationSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRefererVerificationSettings } as RefererVerificationSettings;
        message.allowedDomains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enable = reader.bool();
                    break;
                case 2:
                    message.allowedDomains.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RefererVerificationSettings {
        const message = { ...baseRefererVerificationSettings } as RefererVerificationSettings;
        message.enable =
            object.enable !== undefined && object.enable !== null ? Boolean(object.enable) : false;
        message.allowedDomains = (object.allowedDomains ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: RefererVerificationSettings): unknown {
        const obj: any = {};
        message.enable !== undefined && (obj.enable = message.enable);
        if (message.allowedDomains) {
            obj.allowedDomains = message.allowedDomains.map((e) => e);
        } else {
            obj.allowedDomains = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RefererVerificationSettings>, I>>(
        object: I,
    ): RefererVerificationSettings {
        const message = { ...baseRefererVerificationSettings } as RefererVerificationSettings;
        message.enable = object.enable ?? false;
        message.allowedDomains = object.allowedDomains?.map((e) => e) || [];
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
