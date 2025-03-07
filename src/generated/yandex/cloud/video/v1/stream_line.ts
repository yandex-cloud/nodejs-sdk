/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

/** Entity that is responsible for the incoming video signal settings. */
export interface StreamLine {
    /** ID of the line. */
    id: string;
    /** ID of the channel where the line was created. */
    channelId: string;
    /** Line title. */
    title: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    /** RTMP push input type. */
    rtmpPush?: RTMPPushInput | undefined;
    /** SRT push input type. */
    srtPush?: SRTPushInput | undefined;
    /** RTMP pull input type. */
    rtmpPull?: RTMPPullInput | undefined;
    /** SRT pull input type. */
    srtPull?: SRTPullInput | undefined;
    /** TCP pull input type. */
    tcpPull?: TCPPullInput | undefined;
    /** RTSP pull input type. */
    rtspPull?: RTSPPullInput | undefined;
    /** Manual control of stream. */
    manualLine?: ManualLine | undefined;
    /** Automatic control of stream. */
    autoLine?: AutoLine | undefined;
    /** Time when line was created. */
    createdAt?: Date;
    /** Time of last line update. */
    updatedAt?: Date;
    /** Custom labels as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
}

export interface StreamLine_LabelsEntry {
    key: string;
    value: string;
}

/** Push stream key. */
export interface PushStreamKey {
    /** Unique stream key. */
    key: string;
}

export interface RTMPPushInput {
    /** RTMP server url. */
    url: string;
}

export interface SRTPushInput {
    /** SRT server url. */
    url: string;
}

export interface RTMPPullInput {
    /** RTMP url for receiving video signal. */
    url: string;
}

export interface SRTPullInput {
    /** SRT url for receiving video signal. */
    url: string;
}

export interface TCPPullInput {
    /** TCP url for receiving video signal. */
    url: string;
}

export interface RTSPPullInput {
    /** RTSP url for receiving video signal. */
    url: string;
}

/** Manual line type. */
export interface ManualLine {}

/** Auto line type. */
export interface AutoLine {
    /** Status of auto line. */
    status: AutoLine_AutoLineStatus;
}

/** Auto line status. */
export enum AutoLine_AutoLineStatus {
    /** AUTO_LINE_STATUS_UNSPECIFIED - Auto line status unspecified. */
    AUTO_LINE_STATUS_UNSPECIFIED = 0,
    /** DEACTIVATED - Auto line deactivated. */
    DEACTIVATED = 1,
    /** ACTIVE - Auto line active. */
    ACTIVE = 2,
    UNRECOGNIZED = -1,
}

export function autoLine_AutoLineStatusFromJSON(object: any): AutoLine_AutoLineStatus {
    switch (object) {
        case 0:
        case 'AUTO_LINE_STATUS_UNSPECIFIED':
            return AutoLine_AutoLineStatus.AUTO_LINE_STATUS_UNSPECIFIED;
        case 1:
        case 'DEACTIVATED':
            return AutoLine_AutoLineStatus.DEACTIVATED;
        case 2:
        case 'ACTIVE':
            return AutoLine_AutoLineStatus.ACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AutoLine_AutoLineStatus.UNRECOGNIZED;
    }
}

export function autoLine_AutoLineStatusToJSON(object: AutoLine_AutoLineStatus): string {
    switch (object) {
        case AutoLine_AutoLineStatus.AUTO_LINE_STATUS_UNSPECIFIED:
            return 'AUTO_LINE_STATUS_UNSPECIFIED';
        case AutoLine_AutoLineStatus.DEACTIVATED:
            return 'DEACTIVATED';
        case AutoLine_AutoLineStatus.ACTIVE:
            return 'ACTIVE';
        default:
            return 'UNKNOWN';
    }
}

const baseStreamLine: object = { id: '', channelId: '', title: '', thumbnailId: '' };

export const StreamLine = {
    encode(message: StreamLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.channelId !== '') {
            writer.uint32(18).string(message.channelId);
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        if (message.thumbnailId !== '') {
            writer.uint32(34).string(message.thumbnailId);
        }
        if (message.rtmpPush !== undefined) {
            RTMPPushInput.encode(message.rtmpPush, writer.uint32(8002).fork()).ldelim();
        }
        if (message.srtPush !== undefined) {
            SRTPushInput.encode(message.srtPush, writer.uint32(8010).fork()).ldelim();
        }
        if (message.rtmpPull !== undefined) {
            RTMPPullInput.encode(message.rtmpPull, writer.uint32(8018).fork()).ldelim();
        }
        if (message.srtPull !== undefined) {
            SRTPullInput.encode(message.srtPull, writer.uint32(8026).fork()).ldelim();
        }
        if (message.tcpPull !== undefined) {
            TCPPullInput.encode(message.tcpPull, writer.uint32(8034).fork()).ldelim();
        }
        if (message.rtspPull !== undefined) {
            RTSPPullInput.encode(message.rtspPull, writer.uint32(8050).fork()).ldelim();
        }
        if (message.manualLine !== undefined) {
            ManualLine.encode(message.manualLine, writer.uint32(16002).fork()).ldelim();
        }
        if (message.autoLine !== undefined) {
            AutoLine.encode(message.autoLine, writer.uint32(16010).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(810).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            StreamLine_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamLine {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamLine } as StreamLine;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.thumbnailId = reader.string();
                    break;
                case 1000:
                    message.rtmpPush = RTMPPushInput.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.srtPush = SRTPushInput.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.rtmpPull = RTMPPullInput.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.srtPull = SRTPullInput.decode(reader, reader.uint32());
                    break;
                case 1004:
                    message.tcpPull = TCPPullInput.decode(reader, reader.uint32());
                    break;
                case 1006:
                    message.rtspPull = RTSPPullInput.decode(reader, reader.uint32());
                    break;
                case 2000:
                    message.manualLine = ManualLine.decode(reader, reader.uint32());
                    break;
                case 2001:
                    message.autoLine = AutoLine.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 101:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 200:
                    const entry200 = StreamLine_LabelsEntry.decode(reader, reader.uint32());
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamLine {
        const message = { ...baseStreamLine } as StreamLine;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushInput.fromJSON(object.rtmpPush)
                : undefined;
        message.srtPush =
            object.srtPush !== undefined && object.srtPush !== null
                ? SRTPushInput.fromJSON(object.srtPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullInput.fromJSON(object.rtmpPull)
                : undefined;
        message.srtPull =
            object.srtPull !== undefined && object.srtPull !== null
                ? SRTPullInput.fromJSON(object.srtPull)
                : undefined;
        message.tcpPull =
            object.tcpPull !== undefined && object.tcpPull !== null
                ? TCPPullInput.fromJSON(object.tcpPull)
                : undefined;
        message.rtspPull =
            object.rtspPull !== undefined && object.rtspPull !== null
                ? RTSPPullInput.fromJSON(object.rtspPull)
                : undefined;
        message.manualLine =
            object.manualLine !== undefined && object.manualLine !== null
                ? ManualLine.fromJSON(object.manualLine)
                : undefined;
        message.autoLine =
            object.autoLine !== undefined && object.autoLine !== null
                ? AutoLine.fromJSON(object.autoLine)
                : undefined;
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
        return message;
    },

    toJSON(message: StreamLine): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.title !== undefined && (obj.title = message.title);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.rtmpPush !== undefined &&
            (obj.rtmpPush = message.rtmpPush ? RTMPPushInput.toJSON(message.rtmpPush) : undefined);
        message.srtPush !== undefined &&
            (obj.srtPush = message.srtPush ? SRTPushInput.toJSON(message.srtPush) : undefined);
        message.rtmpPull !== undefined &&
            (obj.rtmpPull = message.rtmpPull ? RTMPPullInput.toJSON(message.rtmpPull) : undefined);
        message.srtPull !== undefined &&
            (obj.srtPull = message.srtPull ? SRTPullInput.toJSON(message.srtPull) : undefined);
        message.tcpPull !== undefined &&
            (obj.tcpPull = message.tcpPull ? TCPPullInput.toJSON(message.tcpPull) : undefined);
        message.rtspPull !== undefined &&
            (obj.rtspPull = message.rtspPull ? RTSPPullInput.toJSON(message.rtspPull) : undefined);
        message.manualLine !== undefined &&
            (obj.manualLine = message.manualLine
                ? ManualLine.toJSON(message.manualLine)
                : undefined);
        message.autoLine !== undefined &&
            (obj.autoLine = message.autoLine ? AutoLine.toJSON(message.autoLine) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamLine>, I>>(object: I): StreamLine {
        const message = { ...baseStreamLine } as StreamLine;
        message.id = object.id ?? '';
        message.channelId = object.channelId ?? '';
        message.title = object.title ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.rtmpPush =
            object.rtmpPush !== undefined && object.rtmpPush !== null
                ? RTMPPushInput.fromPartial(object.rtmpPush)
                : undefined;
        message.srtPush =
            object.srtPush !== undefined && object.srtPush !== null
                ? SRTPushInput.fromPartial(object.srtPush)
                : undefined;
        message.rtmpPull =
            object.rtmpPull !== undefined && object.rtmpPull !== null
                ? RTMPPullInput.fromPartial(object.rtmpPull)
                : undefined;
        message.srtPull =
            object.srtPull !== undefined && object.srtPull !== null
                ? SRTPullInput.fromPartial(object.srtPull)
                : undefined;
        message.tcpPull =
            object.tcpPull !== undefined && object.tcpPull !== null
                ? TCPPullInput.fromPartial(object.tcpPull)
                : undefined;
        message.rtspPull =
            object.rtspPull !== undefined && object.rtspPull !== null
                ? RTSPPullInput.fromPartial(object.rtspPull)
                : undefined;
        message.manualLine =
            object.manualLine !== undefined && object.manualLine !== null
                ? ManualLine.fromPartial(object.manualLine)
                : undefined;
        message.autoLine =
            object.autoLine !== undefined && object.autoLine !== null
                ? AutoLine.fromPartial(object.autoLine)
                : undefined;
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
        return message;
    },
};

const baseStreamLine_LabelsEntry: object = { key: '', value: '' };

export const StreamLine_LabelsEntry = {
    encode(message: StreamLine_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamLine_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamLine_LabelsEntry } as StreamLine_LabelsEntry;
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

    fromJSON(object: any): StreamLine_LabelsEntry {
        const message = { ...baseStreamLine_LabelsEntry } as StreamLine_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: StreamLine_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamLine_LabelsEntry>, I>>(
        object: I,
    ): StreamLine_LabelsEntry {
        const message = { ...baseStreamLine_LabelsEntry } as StreamLine_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const basePushStreamKey: object = { key: '' };

export const PushStreamKey = {
    encode(message: PushStreamKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PushStreamKey {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePushStreamKey } as PushStreamKey;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PushStreamKey {
        const message = { ...basePushStreamKey } as PushStreamKey;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        return message;
    },

    toJSON(message: PushStreamKey): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PushStreamKey>, I>>(object: I): PushStreamKey {
        const message = { ...basePushStreamKey } as PushStreamKey;
        message.key = object.key ?? '';
        return message;
    },
};

const baseRTMPPushInput: object = { url: '' };

export const RTMPPushInput = {
    encode(message: RTMPPushInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RTMPPushInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRTMPPushInput } as RTMPPushInput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RTMPPushInput {
        const message = { ...baseRTMPPushInput } as RTMPPushInput;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: RTMPPushInput): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RTMPPushInput>, I>>(object: I): RTMPPushInput {
        const message = { ...baseRTMPPushInput } as RTMPPushInput;
        message.url = object.url ?? '';
        return message;
    },
};

const baseSRTPushInput: object = { url: '' };

export const SRTPushInput = {
    encode(message: SRTPushInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SRTPushInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSRTPushInput } as SRTPushInput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SRTPushInput {
        const message = { ...baseSRTPushInput } as SRTPushInput;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: SRTPushInput): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SRTPushInput>, I>>(object: I): SRTPushInput {
        const message = { ...baseSRTPushInput } as SRTPushInput;
        message.url = object.url ?? '';
        return message;
    },
};

const baseRTMPPullInput: object = { url: '' };

export const RTMPPullInput = {
    encode(message: RTMPPullInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RTMPPullInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRTMPPullInput } as RTMPPullInput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RTMPPullInput {
        const message = { ...baseRTMPPullInput } as RTMPPullInput;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: RTMPPullInput): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RTMPPullInput>, I>>(object: I): RTMPPullInput {
        const message = { ...baseRTMPPullInput } as RTMPPullInput;
        message.url = object.url ?? '';
        return message;
    },
};

const baseSRTPullInput: object = { url: '' };

export const SRTPullInput = {
    encode(message: SRTPullInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SRTPullInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSRTPullInput } as SRTPullInput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SRTPullInput {
        const message = { ...baseSRTPullInput } as SRTPullInput;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: SRTPullInput): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SRTPullInput>, I>>(object: I): SRTPullInput {
        const message = { ...baseSRTPullInput } as SRTPullInput;
        message.url = object.url ?? '';
        return message;
    },
};

const baseTCPPullInput: object = { url: '' };

export const TCPPullInput = {
    encode(message: TCPPullInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TCPPullInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTCPPullInput } as TCPPullInput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TCPPullInput {
        const message = { ...baseTCPPullInput } as TCPPullInput;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: TCPPullInput): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TCPPullInput>, I>>(object: I): TCPPullInput {
        const message = { ...baseTCPPullInput } as TCPPullInput;
        message.url = object.url ?? '';
        return message;
    },
};

const baseRTSPPullInput: object = { url: '' };

export const RTSPPullInput = {
    encode(message: RTSPPullInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RTSPPullInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRTSPPullInput } as RTSPPullInput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RTSPPullInput {
        const message = { ...baseRTSPPullInput } as RTSPPullInput;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: RTSPPullInput): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RTSPPullInput>, I>>(object: I): RTSPPullInput {
        const message = { ...baseRTSPPullInput } as RTSPPullInput;
        message.url = object.url ?? '';
        return message;
    },
};

const baseManualLine: object = {};

export const ManualLine = {
    encode(_: ManualLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ManualLine {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseManualLine } as ManualLine;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): ManualLine {
        const message = { ...baseManualLine } as ManualLine;
        return message;
    },

    toJSON(_: ManualLine): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ManualLine>, I>>(_: I): ManualLine {
        const message = { ...baseManualLine } as ManualLine;
        return message;
    },
};

const baseAutoLine: object = { status: 0 };

export const AutoLine = {
    encode(message: AutoLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AutoLine {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAutoLine } as AutoLine;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AutoLine {
        const message = { ...baseAutoLine } as AutoLine;
        message.status =
            object.status !== undefined && object.status !== null
                ? autoLine_AutoLineStatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: AutoLine): unknown {
        const obj: any = {};
        message.status !== undefined &&
            (obj.status = autoLine_AutoLineStatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AutoLine>, I>>(object: I): AutoLine {
        const message = { ...baseAutoLine } as AutoLine;
        message.status = object.status ?? 0;
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
