/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface Extension {
    /** Required. Extension name. */
    name: string;
    /** Required. All extension available versions. */
    versions: ExtensionVersion[];
}

export interface ExtensionVersion {
    /** Required. Version ID. */
    id: string;
    /** Is default version. */
    default: boolean;
    /** Is version deprecated. */
    deprecated: boolean;
}

const baseExtension: object = { name: '' };

export const Extension = {
    encode(message: Extension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.versions) {
            ExtensionVersion.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Extension {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExtension } as Extension;
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.versions.push(ExtensionVersion.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Extension {
        const message = { ...baseExtension } as Extension;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.versions = (object.versions ?? []).map((e: any) => ExtensionVersion.fromJSON(e));
        return message;
    },

    toJSON(message: Extension): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.versions) {
            obj.versions = message.versions.map((e) =>
                e ? ExtensionVersion.toJSON(e) : undefined,
            );
        } else {
            obj.versions = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Extension>, I>>(object: I): Extension {
        const message = { ...baseExtension } as Extension;
        message.name = object.name ?? '';
        message.versions = object.versions?.map((e) => ExtensionVersion.fromPartial(e)) || [];
        return message;
    },
};

const baseExtensionVersion: object = { id: '', default: false, deprecated: false };

export const ExtensionVersion = {
    encode(message: ExtensionVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.default === true) {
            writer.uint32(16).bool(message.default);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionVersion {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExtensionVersion } as ExtensionVersion;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.default = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExtensionVersion {
        const message = { ...baseExtensionVersion } as ExtensionVersion;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.default =
            object.default !== undefined && object.default !== null
                ? Boolean(object.default)
                : false;
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        return message;
    },

    toJSON(message: ExtensionVersion): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.default !== undefined && (obj.default = message.default);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExtensionVersion>, I>>(object: I): ExtensionVersion {
        const message = { ...baseExtensionVersion } as ExtensionVersion;
        message.id = object.id ?? '';
        message.default = object.default ?? false;
        message.deprecated = object.deprecated ?? false;
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
