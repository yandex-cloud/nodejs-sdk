/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.datatransfer.v1.endpoint';

export enum YdbCleanupPolicy {
    YDB_CLEANUP_POLICY_UNSPECIFIED = 0,
    YDB_CLEANUP_POLICY_DISABLED = 1,
    YDB_CLEANUP_POLICY_DROP = 2,
    UNRECOGNIZED = -1,
}

export function ydbCleanupPolicyFromJSON(object: any): YdbCleanupPolicy {
    switch (object) {
        case 0:
        case 'YDB_CLEANUP_POLICY_UNSPECIFIED':
            return YdbCleanupPolicy.YDB_CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case 'YDB_CLEANUP_POLICY_DISABLED':
            return YdbCleanupPolicy.YDB_CLEANUP_POLICY_DISABLED;
        case 2:
        case 'YDB_CLEANUP_POLICY_DROP':
            return YdbCleanupPolicy.YDB_CLEANUP_POLICY_DROP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return YdbCleanupPolicy.UNRECOGNIZED;
    }
}

export function ydbCleanupPolicyToJSON(object: YdbCleanupPolicy): string {
    switch (object) {
        case YdbCleanupPolicy.YDB_CLEANUP_POLICY_UNSPECIFIED:
            return 'YDB_CLEANUP_POLICY_UNSPECIFIED';
        case YdbCleanupPolicy.YDB_CLEANUP_POLICY_DISABLED:
            return 'YDB_CLEANUP_POLICY_DISABLED';
        case YdbCleanupPolicy.YDB_CLEANUP_POLICY_DROP:
            return 'YDB_CLEANUP_POLICY_DROP';
        default:
            return 'UNKNOWN';
    }
}

export enum YdbDefaultCompression {
    YDB_DEFAULT_COMPRESSION_UNSPECIFIED = 0,
    YDB_DEFAULT_COMPRESSION_DISABLED = 1,
    YDB_DEFAULT_COMPRESSION_LZ4 = 2,
    UNRECOGNIZED = -1,
}

export function ydbDefaultCompressionFromJSON(object: any): YdbDefaultCompression {
    switch (object) {
        case 0:
        case 'YDB_DEFAULT_COMPRESSION_UNSPECIFIED':
            return YdbDefaultCompression.YDB_DEFAULT_COMPRESSION_UNSPECIFIED;
        case 1:
        case 'YDB_DEFAULT_COMPRESSION_DISABLED':
            return YdbDefaultCompression.YDB_DEFAULT_COMPRESSION_DISABLED;
        case 2:
        case 'YDB_DEFAULT_COMPRESSION_LZ4':
            return YdbDefaultCompression.YDB_DEFAULT_COMPRESSION_LZ4;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return YdbDefaultCompression.UNRECOGNIZED;
    }
}

export function ydbDefaultCompressionToJSON(object: YdbDefaultCompression): string {
    switch (object) {
        case YdbDefaultCompression.YDB_DEFAULT_COMPRESSION_UNSPECIFIED:
            return 'YDB_DEFAULT_COMPRESSION_UNSPECIFIED';
        case YdbDefaultCompression.YDB_DEFAULT_COMPRESSION_DISABLED:
            return 'YDB_DEFAULT_COMPRESSION_DISABLED';
        case YdbDefaultCompression.YDB_DEFAULT_COMPRESSION_LZ4:
            return 'YDB_DEFAULT_COMPRESSION_LZ4';
        default:
            return 'UNKNOWN';
    }
}

export interface YdbSource {
    /** Path in YDB where to store tables */
    database: string;
    /** Instance of YDB. example: ydb-ru-prestable.yandex.net:2135 */
    instance: string;
    paths: string[];
    serviceAccountId: string;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
    /** Authorization Key */
    saKeyContent: string;
    /** Security groups */
    securityGroups: string[];
    /** Pre-created change feed */
    changefeedCustomName: string;
    changefeedCustomConsumerName: string;
}

export interface YdbTarget {
    /** Path in YDB where to store tables */
    database: string;
    /** Instance of YDB. example: ydb-ru-prestable.yandex.net:2135 */
    instance: string;
    /** Path extension for database, each table will be layouted into this path */
    path: string;
    serviceAccountId: string;
    /** Cleanup policy */
    cleanupPolicy: YdbCleanupPolicy;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
    /** SA content */
    saKeyContent: string;
    /** Security groups */
    securityGroups: string[];
    /**
     * Should create column-oriented table (OLAP). By default it creates row-oriented
     * (OLTP)
     */
    isTableColumnOriented: boolean;
    /** Compression that will be used for default columns family on YDB table creation */
    defaultCompression: YdbDefaultCompression;
}

const baseYdbSource: object = {
    database: '',
    instance: '',
    paths: '',
    serviceAccountId: '',
    subnetId: '',
    saKeyContent: '',
    securityGroups: '',
    changefeedCustomName: '',
    changefeedCustomConsumerName: '',
};

export const YdbSource = {
    encode(message: YdbSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.database !== '') {
            writer.uint32(10).string(message.database);
        }
        if (message.instance !== '') {
            writer.uint32(18).string(message.instance);
        }
        for (const v of message.paths) {
            writer.uint32(42).string(v!);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(50).string(message.serviceAccountId);
        }
        if (message.subnetId !== '') {
            writer.uint32(242).string(message.subnetId);
        }
        if (message.saKeyContent !== '') {
            writer.uint32(266).string(message.saKeyContent);
        }
        for (const v of message.securityGroups) {
            writer.uint32(274).string(v!);
        }
        if (message.changefeedCustomName !== '') {
            writer.uint32(282).string(message.changefeedCustomName);
        }
        if (message.changefeedCustomConsumerName !== '') {
            writer.uint32(290).string(message.changefeedCustomConsumerName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YdbSource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYdbSource } as YdbSource;
        message.paths = [];
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.database = reader.string();
                    break;
                case 2:
                    message.instance = reader.string();
                    break;
                case 5:
                    message.paths.push(reader.string());
                    break;
                case 6:
                    message.serviceAccountId = reader.string();
                    break;
                case 30:
                    message.subnetId = reader.string();
                    break;
                case 33:
                    message.saKeyContent = reader.string();
                    break;
                case 34:
                    message.securityGroups.push(reader.string());
                    break;
                case 35:
                    message.changefeedCustomName = reader.string();
                    break;
                case 36:
                    message.changefeedCustomConsumerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YdbSource {
        const message = { ...baseYdbSource } as YdbSource;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? String(object.instance)
                : '';
        message.paths = (object.paths ?? []).map((e: any) => String(e));
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.saKeyContent =
            object.saKeyContent !== undefined && object.saKeyContent !== null
                ? String(object.saKeyContent)
                : '';
        message.securityGroups = (object.securityGroups ?? []).map((e: any) => String(e));
        message.changefeedCustomName =
            object.changefeedCustomName !== undefined && object.changefeedCustomName !== null
                ? String(object.changefeedCustomName)
                : '';
        message.changefeedCustomConsumerName =
            object.changefeedCustomConsumerName !== undefined &&
            object.changefeedCustomConsumerName !== null
                ? String(object.changefeedCustomConsumerName)
                : '';
        return message;
    },

    toJSON(message: YdbSource): unknown {
        const obj: any = {};
        message.database !== undefined && (obj.database = message.database);
        message.instance !== undefined && (obj.instance = message.instance);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        } else {
            obj.paths = [];
        }
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.saKeyContent !== undefined && (obj.saKeyContent = message.saKeyContent);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        } else {
            obj.securityGroups = [];
        }
        message.changefeedCustomName !== undefined &&
            (obj.changefeedCustomName = message.changefeedCustomName);
        message.changefeedCustomConsumerName !== undefined &&
            (obj.changefeedCustomConsumerName = message.changefeedCustomConsumerName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YdbSource>, I>>(object: I): YdbSource {
        const message = { ...baseYdbSource } as YdbSource;
        message.database = object.database ?? '';
        message.instance = object.instance ?? '';
        message.paths = object.paths?.map((e) => e) || [];
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.subnetId = object.subnetId ?? '';
        message.saKeyContent = object.saKeyContent ?? '';
        message.securityGroups = object.securityGroups?.map((e) => e) || [];
        message.changefeedCustomName = object.changefeedCustomName ?? '';
        message.changefeedCustomConsumerName = object.changefeedCustomConsumerName ?? '';
        return message;
    },
};

const baseYdbTarget: object = {
    database: '',
    instance: '',
    path: '',
    serviceAccountId: '',
    cleanupPolicy: 0,
    subnetId: '',
    saKeyContent: '',
    securityGroups: '',
    isTableColumnOriented: false,
    defaultCompression: 0,
};

export const YdbTarget = {
    encode(message: YdbTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.database !== '') {
            writer.uint32(10).string(message.database);
        }
        if (message.instance !== '') {
            writer.uint32(18).string(message.instance);
        }
        if (message.path !== '') {
            writer.uint32(82).string(message.path);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(90).string(message.serviceAccountId);
        }
        if (message.cleanupPolicy !== 0) {
            writer.uint32(168).int32(message.cleanupPolicy);
        }
        if (message.subnetId !== '') {
            writer.uint32(242).string(message.subnetId);
        }
        if (message.saKeyContent !== '') {
            writer.uint32(258).string(message.saKeyContent);
        }
        for (const v of message.securityGroups) {
            writer.uint32(266).string(v!);
        }
        if (message.isTableColumnOriented === true) {
            writer.uint32(272).bool(message.isTableColumnOriented);
        }
        if (message.defaultCompression !== 0) {
            writer.uint32(280).int32(message.defaultCompression);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YdbTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYdbTarget } as YdbTarget;
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.database = reader.string();
                    break;
                case 2:
                    message.instance = reader.string();
                    break;
                case 10:
                    message.path = reader.string();
                    break;
                case 11:
                    message.serviceAccountId = reader.string();
                    break;
                case 21:
                    message.cleanupPolicy = reader.int32() as any;
                    break;
                case 30:
                    message.subnetId = reader.string();
                    break;
                case 32:
                    message.saKeyContent = reader.string();
                    break;
                case 33:
                    message.securityGroups.push(reader.string());
                    break;
                case 34:
                    message.isTableColumnOriented = reader.bool();
                    break;
                case 35:
                    message.defaultCompression = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YdbTarget {
        const message = { ...baseYdbTarget } as YdbTarget;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? String(object.instance)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? ydbCleanupPolicyFromJSON(object.cleanupPolicy)
                : 0;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.saKeyContent =
            object.saKeyContent !== undefined && object.saKeyContent !== null
                ? String(object.saKeyContent)
                : '';
        message.securityGroups = (object.securityGroups ?? []).map((e: any) => String(e));
        message.isTableColumnOriented =
            object.isTableColumnOriented !== undefined && object.isTableColumnOriented !== null
                ? Boolean(object.isTableColumnOriented)
                : false;
        message.defaultCompression =
            object.defaultCompression !== undefined && object.defaultCompression !== null
                ? ydbDefaultCompressionFromJSON(object.defaultCompression)
                : 0;
        return message;
    },

    toJSON(message: YdbTarget): unknown {
        const obj: any = {};
        message.database !== undefined && (obj.database = message.database);
        message.instance !== undefined && (obj.instance = message.instance);
        message.path !== undefined && (obj.path = message.path);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = ydbCleanupPolicyToJSON(message.cleanupPolicy));
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.saKeyContent !== undefined && (obj.saKeyContent = message.saKeyContent);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        } else {
            obj.securityGroups = [];
        }
        message.isTableColumnOriented !== undefined &&
            (obj.isTableColumnOriented = message.isTableColumnOriented);
        message.defaultCompression !== undefined &&
            (obj.defaultCompression = ydbDefaultCompressionToJSON(message.defaultCompression));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YdbTarget>, I>>(object: I): YdbTarget {
        const message = { ...baseYdbTarget } as YdbTarget;
        message.database = object.database ?? '';
        message.instance = object.instance ?? '';
        message.path = object.path ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.cleanupPolicy = object.cleanupPolicy ?? 0;
        message.subnetId = object.subnetId ?? '';
        message.saKeyContent = object.saKeyContent ?? '';
        message.securityGroups = object.securityGroups?.map((e) => e) || [];
        message.isTableColumnOriented = object.isTableColumnOriented ?? false;
        message.defaultCompression = object.defaultCompression ?? 0;
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
