/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

/**
 * Root entity for content organization and separation within the video platform.
 * A channel serves as a container for videos and streams, providing a way to
 * group related content and apply common settings and access controls.
 * Each channel belongs to a specific organization and can have its own
 * configuration for advertisements, content cleanup, and embedding restrictions.
 */
export interface Channel {
    /**
     * Unique identifier of the channel.
     * This ID is used to reference the channel in API calls and URLs.
     */
    id: string;
    /**
     * Identifier of the organization to which this channel belongs.
     * Each channel must be associated with exactly one organization.
     */
    organizationId: string;
    /**
     * Title of the channel displayed in interfaces.
     * This is the primary display name shown to users.
     */
    title: string;
    /**
     * Detailed description of the channel's purpose and content.
     * This optional field provides additional context about the channel.
     */
    description: string;
    /**
     * Identifier of the default style preset applied to videos in this channel.
     * Videos, episodes, and playlists created in this channel
     * inherit this preset unless explicitly overridden.
     */
    defaultStylePresetId: string;
    /**
     * Timestamp when the channel was initially created.
     * This value is set automatically by the system and cannot be modified.
     */
    createdAt?: Date;
    /**
     * Timestamp of the last modification to the channel or its settings.
     * This value is updated automatically whenever the channel is modified.
     */
    updatedAt?: Date;
    /**
     * Custom user-defined labels as `key:value` pairs.
     * Maximum 64 labels per channel.
     * Labels can be used for organization, filtering, and metadata purposes.
     */
    labels: { [key: string]: string };
    /**
     * Configuration settings for the channel's behavior and features.
     * These settings control advertisements, content cleanup policies,
     * and embedding restrictions for all content in the channel.
     */
    settings?: ChannelSettings;
}

export interface Channel_LabelsEntry {
    key: string;
    value: string;
}

/**
 * Configuration settings for the channel's behavior and features.
 * These settings apply to all content in the channel and control
 * various aspects of how the channel and its content behave.
 */
export interface ChannelSettings {
    /**
     * Settings for advertisement display and behavior.
     * Controls whether and how advertisements are shown with content in this channel.
     * If not specified, default advertisement settings are applied.
     */
    advertisement?: AdvertisementSettings;
    /**
     * Settings for HTTP Referer verification to control content embedding.
     * Restricts which domains can embed content from this channel.
     * If not specified or disabled, content can be embedded on any domain.
     */
    refererVerification?: RefererVerificationSettings;
    /** Settings for displaying video */
    video?: ChannelVideoSettings;
}

/**
 * Settings for HTTP Referer verification to control where content can be embedded.
 * When enabled, the system checks the HTTP Referer request header to ensure
 * that content is only embedded on allowed domains.
 */
export interface RefererVerificationSettings {
    /**
     * Enables or disables Referer verification for this channel.
     * When set to true, only requests from allowed domains will be permitted.
     * When set to false, content can be embedded on any domain.
     */
    enable: boolean;
    /**
     * List of domains allowed to embed content from this channel.
     * Only relevant when enable is set to true.
     * Supports wildcard notation (e.g., "*.example.com") to allow all subdomains.
     */
    allowedDomains: string[];
}

/**
 * Settings for advertisement display and behavior in the channel.
 * These settings control whether and how advertisements are shown
 * with content in this channel, including both videos and streams.
 */
export interface AdvertisementSettings {
    /**
     * Yandex.Direct advertisement provider settings.
     * When specified, advertisements will be served through Yandex.Direct.
     */
    yandexDirect?: AdvertisementSettings_YandexDirect | undefined;
}

/**
 * Configuration for the Yandex.Direct advertisement provider.
 * These settings are specific to the Yandex.Direct advertising platform.
 */
export interface AdvertisementSettings_YandexDirect {
    /**
     * Enables or disables Partner Ad for both Live and VOD content.
     * When set to true, advertisements will be shown with content.
     * When set to false, no advertisements will be shown.
     */
    enable: boolean;
    /**
     * Yandex.Direct page identifier.
     * This ID is used to associate the channel with a specific page
     * in the Yandex.Direct system for targeting and reporting.
     */
    pageId: number;
    /**
     * Yandex.Direct category identifier.
     * This ID is used to categorize the channel's content for
     * appropriate advertisement targeting and compliance.
     */
    category: number;
}

/** Settings for displaying video */
export interface ChannelVideoSettings {
    /**
     * Instruct the player to allow playback of the raw source file while
     * transcoding is in progress. Once a transcoded version is available,
     * the source file will no longer be used.
     */
    showSourceFileBeforeTranscoding: boolean;
}

const baseChannel: object = {
    id: '',
    organizationId: '',
    title: '',
    description: '',
    defaultStylePresetId: '',
};

export const Channel: {
    encode(message: Channel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Channel;
    fromJSON(object: any): Channel;
    toJSON(message: Channel): unknown;
    fromPartial<I extends Exact<DeepPartial<Channel>, I>>(object: I): Channel;
} = {
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
        if (message.defaultStylePresetId !== '') {
            writer.uint32(42).string(message.defaultStylePresetId);
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
                case 5:
                    message.defaultStylePresetId = reader.string();
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
        message.defaultStylePresetId =
            object.defaultStylePresetId !== undefined && object.defaultStylePresetId !== null
                ? String(object.defaultStylePresetId)
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
        message.defaultStylePresetId !== undefined &&
            (obj.defaultStylePresetId = message.defaultStylePresetId);
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
        message.defaultStylePresetId = object.defaultStylePresetId ?? '';
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

export const Channel_LabelsEntry: {
    encode(message: Channel_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Channel_LabelsEntry;
    fromJSON(object: any): Channel_LabelsEntry;
    toJSON(message: Channel_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Channel_LabelsEntry>, I>>(object: I): Channel_LabelsEntry;
} = {
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

export const ChannelSettings: {
    encode(message: ChannelSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChannelSettings;
    fromJSON(object: any): ChannelSettings;
    toJSON(message: ChannelSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<ChannelSettings>, I>>(object: I): ChannelSettings;
} = {
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
        if (message.video !== undefined) {
            ChannelVideoSettings.encode(message.video, writer.uint32(34).fork()).ldelim();
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
                case 4:
                    message.video = ChannelVideoSettings.decode(reader, reader.uint32());
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
        message.video =
            object.video !== undefined && object.video !== null
                ? ChannelVideoSettings.fromJSON(object.video)
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
        message.video !== undefined &&
            (obj.video = message.video ? ChannelVideoSettings.toJSON(message.video) : undefined);
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
        message.video =
            object.video !== undefined && object.video !== null
                ? ChannelVideoSettings.fromPartial(object.video)
                : undefined;
        return message;
    },
};

const baseRefererVerificationSettings: object = { enable: false, allowedDomains: '' };

export const RefererVerificationSettings: {
    encode(message: RefererVerificationSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefererVerificationSettings;
    fromJSON(object: any): RefererVerificationSettings;
    toJSON(message: RefererVerificationSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<RefererVerificationSettings>, I>>(object: I): RefererVerificationSettings;
} = {
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

const baseAdvertisementSettings: object = {};

export const AdvertisementSettings: {
    encode(message: AdvertisementSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdvertisementSettings;
    fromJSON(object: any): AdvertisementSettings;
    toJSON(message: AdvertisementSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<AdvertisementSettings>, I>>(object: I): AdvertisementSettings;
} = {
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

export const AdvertisementSettings_YandexDirect: {
    encode(message: AdvertisementSettings_YandexDirect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdvertisementSettings_YandexDirect;
    fromJSON(object: any): AdvertisementSettings_YandexDirect;
    toJSON(message: AdvertisementSettings_YandexDirect): unknown;
    fromPartial<I extends Exact<DeepPartial<AdvertisementSettings_YandexDirect>, I>>(object: I): AdvertisementSettings_YandexDirect;
} = {
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

const baseChannelVideoSettings: object = { showSourceFileBeforeTranscoding: false };

export const ChannelVideoSettings: {
    encode(message: ChannelVideoSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChannelVideoSettings;
    fromJSON(object: any): ChannelVideoSettings;
    toJSON(message: ChannelVideoSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<ChannelVideoSettings>, I>>(object: I): ChannelVideoSettings;
} = {
    encode(message: ChannelVideoSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.showSourceFileBeforeTranscoding === true) {
            writer.uint32(8).bool(message.showSourceFileBeforeTranscoding);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ChannelVideoSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannelVideoSettings } as ChannelVideoSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.showSourceFileBeforeTranscoding = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ChannelVideoSettings {
        const message = { ...baseChannelVideoSettings } as ChannelVideoSettings;
        message.showSourceFileBeforeTranscoding =
            object.showSourceFileBeforeTranscoding !== undefined &&
            object.showSourceFileBeforeTranscoding !== null
                ? Boolean(object.showSourceFileBeforeTranscoding)
                : false;
        return message;
    },

    toJSON(message: ChannelVideoSettings): unknown {
        const obj: any = {};
        message.showSourceFileBeforeTranscoding !== undefined &&
            (obj.showSourceFileBeforeTranscoding = message.showSourceFileBeforeTranscoding);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ChannelVideoSettings>, I>>(
        object: I,
    ): ChannelVideoSettings {
        const message = { ...baseChannelVideoSettings } as ChannelVideoSettings;
        message.showSourceFileBeforeTranscoding = object.showSourceFileBeforeTranscoding ?? false;
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
