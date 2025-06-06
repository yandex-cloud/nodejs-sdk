/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Parser } from '../../../../../yandex/cloud/datatransfer/v1/endpoint/parsers';
import { Serializer } from '../../../../../yandex/cloud/datatransfer/v1/endpoint/serializers';

export const protobufPackage = 'yandex.cloud.datatransfer.v1.endpoint';

export enum YdsCompressionCodec {
    YDS_COMPRESSION_CODEC_UNSPECIFIED = 0,
    YDS_COMPRESSION_CODEC_RAW = 1,
    YDS_COMPRESSION_CODEC_GZIP = 2,
    YDS_COMPRESSION_CODEC_ZSTD = 4,
    UNRECOGNIZED = -1,
}

export function ydsCompressionCodecFromJSON(object: any): YdsCompressionCodec {
    switch (object) {
        case 0:
        case 'YDS_COMPRESSION_CODEC_UNSPECIFIED':
            return YdsCompressionCodec.YDS_COMPRESSION_CODEC_UNSPECIFIED;
        case 1:
        case 'YDS_COMPRESSION_CODEC_RAW':
            return YdsCompressionCodec.YDS_COMPRESSION_CODEC_RAW;
        case 2:
        case 'YDS_COMPRESSION_CODEC_GZIP':
            return YdsCompressionCodec.YDS_COMPRESSION_CODEC_GZIP;
        case 4:
        case 'YDS_COMPRESSION_CODEC_ZSTD':
            return YdsCompressionCodec.YDS_COMPRESSION_CODEC_ZSTD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return YdsCompressionCodec.UNRECOGNIZED;
    }
}

export function ydsCompressionCodecToJSON(object: YdsCompressionCodec): string {
    switch (object) {
        case YdsCompressionCodec.YDS_COMPRESSION_CODEC_UNSPECIFIED:
            return 'YDS_COMPRESSION_CODEC_UNSPECIFIED';
        case YdsCompressionCodec.YDS_COMPRESSION_CODEC_RAW:
            return 'YDS_COMPRESSION_CODEC_RAW';
        case YdsCompressionCodec.YDS_COMPRESSION_CODEC_GZIP:
            return 'YDS_COMPRESSION_CODEC_GZIP';
        case YdsCompressionCodec.YDS_COMPRESSION_CODEC_ZSTD:
            return 'YDS_COMPRESSION_CODEC_ZSTD';
        default:
            return 'UNKNOWN';
    }
}

export interface YDSSource {
    /** Database */
    database: string;
    /** Stream */
    stream: string;
    /** SA which has read access to the stream. */
    serviceAccountId: string;
    /** Compression codec */
    supportedCodecs: YdsCompressionCodec[];
    /** Data parsing rules */
    parser?: Parser;
    /**
     * Should continue working, if consumer read lag exceed TTL of topic
     * False: stop the transfer in error state, if detected lost data. True: continue
     * working with losing part of data
     */
    allowTtlRewind: boolean;
    /** for dedicated db */
    endpoint: string;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
    /** Security groups */
    securityGroups: string[];
    /** for important streams */
    consumer: string;
}

export interface YDSTarget {
    /** Database */
    database: string;
    /** Stream */
    stream: string;
    /** SA which has read access to the stream. */
    serviceAccountId: string;
    /**
     * Save transaction order
     * Not to split events queue into separate per-table queues.
     * Incompatible with setting Topic prefix, only with Topic full name.
     */
    saveTxOrder: boolean;
    compressionCodec: YdsCompressionCodec;
    /** Data serialization format */
    serializer?: Serializer;
    /** for dedicated db */
    endpoint: string;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
    /** Security groups */
    securityGroups: string[];
}

const baseYDSSource: object = {
    database: '',
    stream: '',
    serviceAccountId: '',
    supportedCodecs: 0,
    allowTtlRewind: false,
    endpoint: '',
    subnetId: '',
    securityGroups: '',
    consumer: '',
};

export const YDSSource = {
    encode(message: YDSSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.database !== '') {
            writer.uint32(10).string(message.database);
        }
        if (message.stream !== '') {
            writer.uint32(18).string(message.stream);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(66).string(message.serviceAccountId);
        }
        writer.uint32(74).fork();
        for (const v of message.supportedCodecs) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.parser !== undefined) {
            Parser.encode(message.parser, writer.uint32(82).fork()).ldelim();
        }
        if (message.allowTtlRewind === true) {
            writer.uint32(88).bool(message.allowTtlRewind);
        }
        if (message.endpoint !== '') {
            writer.uint32(162).string(message.endpoint);
        }
        if (message.subnetId !== '') {
            writer.uint32(242).string(message.subnetId);
        }
        for (const v of message.securityGroups) {
            writer.uint32(274).string(v!);
        }
        if (message.consumer !== '') {
            writer.uint32(282).string(message.consumer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YDSSource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYDSSource } as YDSSource;
        message.supportedCodecs = [];
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.database = reader.string();
                    break;
                case 2:
                    message.stream = reader.string();
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.supportedCodecs.push(reader.int32() as any);
                        }
                    } else {
                        message.supportedCodecs.push(reader.int32() as any);
                    }
                    break;
                case 10:
                    message.parser = Parser.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.allowTtlRewind = reader.bool();
                    break;
                case 20:
                    message.endpoint = reader.string();
                    break;
                case 30:
                    message.subnetId = reader.string();
                    break;
                case 34:
                    message.securityGroups.push(reader.string());
                    break;
                case 35:
                    message.consumer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YDSSource {
        const message = { ...baseYDSSource } as YDSSource;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.stream =
            object.stream !== undefined && object.stream !== null ? String(object.stream) : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.supportedCodecs = (object.supportedCodecs ?? []).map((e: any) =>
            ydsCompressionCodecFromJSON(e),
        );
        message.parser =
            object.parser !== undefined && object.parser !== null
                ? Parser.fromJSON(object.parser)
                : undefined;
        message.allowTtlRewind =
            object.allowTtlRewind !== undefined && object.allowTtlRewind !== null
                ? Boolean(object.allowTtlRewind)
                : false;
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.securityGroups = (object.securityGroups ?? []).map((e: any) => String(e));
        message.consumer =
            object.consumer !== undefined && object.consumer !== null
                ? String(object.consumer)
                : '';
        return message;
    },

    toJSON(message: YDSSource): unknown {
        const obj: any = {};
        message.database !== undefined && (obj.database = message.database);
        message.stream !== undefined && (obj.stream = message.stream);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        if (message.supportedCodecs) {
            obj.supportedCodecs = message.supportedCodecs.map((e) => ydsCompressionCodecToJSON(e));
        } else {
            obj.supportedCodecs = [];
        }
        message.parser !== undefined &&
            (obj.parser = message.parser ? Parser.toJSON(message.parser) : undefined);
        message.allowTtlRewind !== undefined && (obj.allowTtlRewind = message.allowTtlRewind);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        } else {
            obj.securityGroups = [];
        }
        message.consumer !== undefined && (obj.consumer = message.consumer);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YDSSource>, I>>(object: I): YDSSource {
        const message = { ...baseYDSSource } as YDSSource;
        message.database = object.database ?? '';
        message.stream = object.stream ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.supportedCodecs = object.supportedCodecs?.map((e) => e) || [];
        message.parser =
            object.parser !== undefined && object.parser !== null
                ? Parser.fromPartial(object.parser)
                : undefined;
        message.allowTtlRewind = object.allowTtlRewind ?? false;
        message.endpoint = object.endpoint ?? '';
        message.subnetId = object.subnetId ?? '';
        message.securityGroups = object.securityGroups?.map((e) => e) || [];
        message.consumer = object.consumer ?? '';
        return message;
    },
};

const baseYDSTarget: object = {
    database: '',
    stream: '',
    serviceAccountId: '',
    saveTxOrder: false,
    compressionCodec: 0,
    endpoint: '',
    subnetId: '',
    securityGroups: '',
};

export const YDSTarget = {
    encode(message: YDSTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.database !== '') {
            writer.uint32(10).string(message.database);
        }
        if (message.stream !== '') {
            writer.uint32(18).string(message.stream);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.saveTxOrder === true) {
            writer.uint32(32).bool(message.saveTxOrder);
        }
        if (message.compressionCodec !== 0) {
            writer.uint32(40).int32(message.compressionCodec);
        }
        if (message.serializer !== undefined) {
            Serializer.encode(message.serializer, writer.uint32(66).fork()).ldelim();
        }
        if (message.endpoint !== '') {
            writer.uint32(162).string(message.endpoint);
        }
        if (message.subnetId !== '') {
            writer.uint32(242).string(message.subnetId);
        }
        for (const v of message.securityGroups) {
            writer.uint32(274).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YDSTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYDSTarget } as YDSTarget;
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.database = reader.string();
                    break;
                case 2:
                    message.stream = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.saveTxOrder = reader.bool();
                    break;
                case 5:
                    message.compressionCodec = reader.int32() as any;
                    break;
                case 8:
                    message.serializer = Serializer.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.endpoint = reader.string();
                    break;
                case 30:
                    message.subnetId = reader.string();
                    break;
                case 34:
                    message.securityGroups.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YDSTarget {
        const message = { ...baseYDSTarget } as YDSTarget;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.stream =
            object.stream !== undefined && object.stream !== null ? String(object.stream) : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.saveTxOrder =
            object.saveTxOrder !== undefined && object.saveTxOrder !== null
                ? Boolean(object.saveTxOrder)
                : false;
        message.compressionCodec =
            object.compressionCodec !== undefined && object.compressionCodec !== null
                ? ydsCompressionCodecFromJSON(object.compressionCodec)
                : 0;
        message.serializer =
            object.serializer !== undefined && object.serializer !== null
                ? Serializer.fromJSON(object.serializer)
                : undefined;
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.securityGroups = (object.securityGroups ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: YDSTarget): unknown {
        const obj: any = {};
        message.database !== undefined && (obj.database = message.database);
        message.stream !== undefined && (obj.stream = message.stream);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.saveTxOrder !== undefined && (obj.saveTxOrder = message.saveTxOrder);
        message.compressionCodec !== undefined &&
            (obj.compressionCodec = ydsCompressionCodecToJSON(message.compressionCodec));
        message.serializer !== undefined &&
            (obj.serializer = message.serializer
                ? Serializer.toJSON(message.serializer)
                : undefined);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        } else {
            obj.securityGroups = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YDSTarget>, I>>(object: I): YDSTarget {
        const message = { ...baseYDSTarget } as YDSTarget;
        message.database = object.database ?? '';
        message.stream = object.stream ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.saveTxOrder = object.saveTxOrder ?? false;
        message.compressionCodec = object.compressionCodec ?? 0;
        message.serializer =
            object.serializer !== undefined && object.serializer !== null
                ? Serializer.fromPartial(object.serializer)
                : undefined;
        message.endpoint = object.endpoint ?? '';
        message.subnetId = object.subnetId ?? '';
        message.securityGroups = object.securityGroups?.map((e) => e) || [];
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
