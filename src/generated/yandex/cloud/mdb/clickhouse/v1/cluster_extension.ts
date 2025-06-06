/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface ClusterExtension {
    /** Required. Extension name. */
    name: string;
    /** Required. ID of the ClickHouse cluster. */
    clusterId: string;
    /** Required. Extension version. */
    version: string;
}

export interface ClusterExtensions {
    extensions: ClusterExtension[];
}

const baseClusterExtension: object = { name: '', clusterId: '', version: '' };

export const ClusterExtension = {
    encode(message: ClusterExtension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterExtension {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterExtension } as ClusterExtension;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClusterExtension {
        const message = { ...baseClusterExtension } as ClusterExtension;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        return message;
    },

    toJSON(message: ClusterExtension): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterExtension>, I>>(object: I): ClusterExtension {
        const message = { ...baseClusterExtension } as ClusterExtension;
        message.name = object.name ?? '';
        message.clusterId = object.clusterId ?? '';
        message.version = object.version ?? '';
        return message;
    },
};

const baseClusterExtensions: object = {};

export const ClusterExtensions = {
    encode(message: ClusterExtensions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.extensions) {
            ClusterExtension.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterExtensions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterExtensions } as ClusterExtensions;
        message.extensions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extensions.push(ClusterExtension.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClusterExtensions {
        const message = { ...baseClusterExtensions } as ClusterExtensions;
        message.extensions = (object.extensions ?? []).map((e: any) =>
            ClusterExtension.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ClusterExtensions): unknown {
        const obj: any = {};
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) =>
                e ? ClusterExtension.toJSON(e) : undefined,
            );
        } else {
            obj.extensions = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterExtensions>, I>>(object: I): ClusterExtensions {
        const message = { ...baseClusterExtensions } as ClusterExtensions;
        message.extensions = object.extensions?.map((e) => ClusterExtension.fromPartial(e)) || [];
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
