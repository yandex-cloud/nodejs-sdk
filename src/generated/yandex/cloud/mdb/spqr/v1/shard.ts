/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { MDBPostgreSQL } from '../../../../../yandex/cloud/mdb/spqr/v1/config';

export const protobufPackage = 'yandex.cloud.mdb.spqr.v1';

export interface Shard {
    /** Name of the shard. */
    name: string;
    /** ID of the cluster that the shard belongs to. */
    clusterId: string;
}

export interface ShardSpec {
    /** Name of the SPQR shard to create. */
    shardName: string;
    /** Properties of the MDB PostgreSQL cluster */
    mdbPostgresql?: MDBPostgreSQL | undefined;
}

const baseShard: object = { name: '', clusterId: '' };

export const Shard = {
    encode(message: Shard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Shard {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseShard } as Shard;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Shard {
        const message = { ...baseShard } as Shard;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: Shard): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Shard>, I>>(object: I): Shard {
        const message = { ...baseShard } as Shard;
        message.name = object.name ?? '';
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseShardSpec: object = { shardName: '' };

export const ShardSpec = {
    encode(message: ShardSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.shardName !== '') {
            writer.uint32(10).string(message.shardName);
        }
        if (message.mdbPostgresql !== undefined) {
            MDBPostgreSQL.encode(message.mdbPostgresql, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ShardSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseShardSpec } as ShardSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shardName = reader.string();
                    break;
                case 2:
                    message.mdbPostgresql = MDBPostgreSQL.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ShardSpec {
        const message = { ...baseShardSpec } as ShardSpec;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        message.mdbPostgresql =
            object.mdbPostgresql !== undefined && object.mdbPostgresql !== null
                ? MDBPostgreSQL.fromJSON(object.mdbPostgresql)
                : undefined;
        return message;
    },

    toJSON(message: ShardSpec): unknown {
        const obj: any = {};
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.mdbPostgresql !== undefined &&
            (obj.mdbPostgresql = message.mdbPostgresql
                ? MDBPostgreSQL.toJSON(message.mdbPostgresql)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ShardSpec>, I>>(object: I): ShardSpec {
        const message = { ...baseShardSpec } as ShardSpec;
        message.shardName = object.shardName ?? '';
        message.mdbPostgresql =
            object.mdbPostgresql !== undefined && object.mdbPostgresql !== null
                ? MDBPostgreSQL.fromPartial(object.mdbPostgresql)
                : undefined;
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
