/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface Version {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Version';
    /** ID of the version. */
    id: string;
    /** Name of the version. */
    name: string;
    /** Whether version is deprecated. */
    deprecated: boolean;
    /** List of versions that can be updated from current. */
    updatableTo: string[];
}

const baseVersion: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Version',
    id: '',
    name: '',
    deprecated: false,
    updatableTo: '',
};

export const Version = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Version' as const,

    encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        for (const v of message.updatableTo) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Version {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVersion } as Version;
        message.updatableTo = [];
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
                    message.deprecated = reader.bool();
                    break;
                case 4:
                    message.updatableTo.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Version {
        const message = { ...baseVersion } as Version;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.updatableTo = (object.updatableTo ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: Version): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.updatableTo) {
            obj.updatableTo = message.updatableTo.map((e) => e);
        } else {
            obj.updatableTo = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
        const message = { ...baseVersion } as Version;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.deprecated = object.deprecated ?? false;
        message.updatableTo = object.updatableTo?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(Version.$type, Version);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
