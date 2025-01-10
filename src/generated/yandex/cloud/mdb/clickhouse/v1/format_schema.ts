/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export enum FormatSchemaType {
    FORMAT_SCHEMA_TYPE_UNSPECIFIED = 0,
    FORMAT_SCHEMA_TYPE_PROTOBUF = 1,
    FORMAT_SCHEMA_TYPE_CAPNPROTO = 2,
    UNRECOGNIZED = -1,
}

export function formatSchemaTypeFromJSON(object: any): FormatSchemaType {
    switch (object) {
        case 0:
        case 'FORMAT_SCHEMA_TYPE_UNSPECIFIED':
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_UNSPECIFIED;
        case 1:
        case 'FORMAT_SCHEMA_TYPE_PROTOBUF':
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_PROTOBUF;
        case 2:
        case 'FORMAT_SCHEMA_TYPE_CAPNPROTO':
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_CAPNPROTO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FormatSchemaType.UNRECOGNIZED;
    }
}

export function formatSchemaTypeToJSON(object: FormatSchemaType): string {
    switch (object) {
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_UNSPECIFIED:
            return 'FORMAT_SCHEMA_TYPE_UNSPECIFIED';
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_PROTOBUF:
            return 'FORMAT_SCHEMA_TYPE_PROTOBUF';
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_CAPNPROTO:
            return 'FORMAT_SCHEMA_TYPE_CAPNPROTO';
        default:
            return 'UNKNOWN';
    }
}

export interface FormatSchema {
    $type: 'yandex.cloud.mdb.clickhouse.v1.FormatSchema';
    /** Format schema name. */
    name: string;
    /** ClickHouse cluster ID. */
    clusterId: string;
    /**
     * Schema type. Possible values are the following:
     *
     * * FORMAT_SCHEMA_TYPE_PROTOBUF - [Protobuf](https://protobuf.dev/) data format (including [ProtobufSingle](https://clickhouse.com/docs/en/interfaces/formats#protobufsingle)).
     * * FORMAT_SCHEMA_TYPE_CAPNPROTO - [Cap'n Proto](https://capnproto.org/) data format.
     */
    type: FormatSchemaType;
    /** Link to the file of a format schema in Yandex Object Storage. Managed Service for ClickHouse works only with format schemas imported to Object Storage. */
    uri: string;
}

const baseFormatSchema: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.FormatSchema',
    name: '',
    clusterId: '',
    type: 0,
    uri: '',
};

export const FormatSchema = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.FormatSchema' as const,

    encode(message: FormatSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FormatSchema {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFormatSchema } as FormatSchema;
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
                    message.type = reader.int32() as any;
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FormatSchema {
        const message = { ...baseFormatSchema } as FormatSchema;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? formatSchemaTypeFromJSON(object.type)
                : 0;
        message.uri = object.uri !== undefined && object.uri !== null ? String(object.uri) : '';
        return message;
    },

    toJSON(message: FormatSchema): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.type !== undefined && (obj.type = formatSchemaTypeToJSON(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FormatSchema>, I>>(object: I): FormatSchema {
        const message = { ...baseFormatSchema } as FormatSchema;
        message.name = object.name ?? '';
        message.clusterId = object.clusterId ?? '';
        message.type = object.type ?? 0;
        message.uri = object.uri ?? '';
        return message;
    },
};

messageTypeRegistry.set(FormatSchema.$type, FormatSchema);

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
