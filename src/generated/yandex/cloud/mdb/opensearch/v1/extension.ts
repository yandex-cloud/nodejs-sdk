/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    ExtensionType,
    extensionTypeFromJSON,
    extensionTypeToJSON,
} from '../../../../../yandex/cloud/mdb/opensearch/v1/extension/extension_type';

export const protobufPackage = 'yandex.cloud.mdb.opensearch.v1';

export interface Extension {
    /** Name of the extension. */
    name: string;
    /** Extension unique ID */
    id: string;
    /** ID of the OpenSearch cluster the extension belongs to. */
    clusterId: string;
    /** Extension version */
    version: number;
    /** Flag is extension active now */
    active: boolean;
    /** Extension type */
    type: ExtensionType;
}

export interface ExtensionSpec {
    /** Name of the extension. */
    name: string;
    /**
     * URI of the extension file
     * Currently only supports links that are stored in Yandex Object Storage.
     */
    uri: string;
    disabled: boolean;
    /** Extension type */
    type: ExtensionType;
}

const baseExtension: object = {
    name: '',
    id: '',
    clusterId: '',
    version: 0,
    active: false,
    type: 0,
};

export const Extension = {
    encode(message: Extension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.clusterId !== '') {
            writer.uint32(26).string(message.clusterId);
        }
        if (message.version !== 0) {
            writer.uint32(32).int64(message.version);
        }
        if (message.active === true) {
            writer.uint32(40).bool(message.active);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Extension {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExtension } as Extension;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.clusterId = reader.string();
                    break;
                case 4:
                    message.version = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.active = reader.bool();
                    break;
                case 6:
                    message.type = reader.int32() as any;
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
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.version =
            object.version !== undefined && object.version !== null ? Number(object.version) : 0;
        message.active =
            object.active !== undefined && object.active !== null ? Boolean(object.active) : false;
        message.type =
            object.type !== undefined && object.type !== null
                ? extensionTypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: Extension): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.version !== undefined && (obj.version = Math.round(message.version));
        message.active !== undefined && (obj.active = message.active);
        message.type !== undefined && (obj.type = extensionTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Extension>, I>>(object: I): Extension {
        const message = { ...baseExtension } as Extension;
        message.name = object.name ?? '';
        message.id = object.id ?? '';
        message.clusterId = object.clusterId ?? '';
        message.version = object.version ?? 0;
        message.active = object.active ?? false;
        message.type = object.type ?? 0;
        return message;
    },
};

const baseExtensionSpec: object = { name: '', uri: '', disabled: false, type: 0 };

export const ExtensionSpec = {
    encode(message: ExtensionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.uri !== '') {
            writer.uint32(18).string(message.uri);
        }
        if (message.disabled === true) {
            writer.uint32(24).bool(message.disabled);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExtensionSpec } as ExtensionSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.uri = reader.string();
                    break;
                case 3:
                    message.disabled = reader.bool();
                    break;
                case 4:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExtensionSpec {
        const message = { ...baseExtensionSpec } as ExtensionSpec;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.uri = object.uri !== undefined && object.uri !== null ? String(object.uri) : '';
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        message.type =
            object.type !== undefined && object.type !== null
                ? extensionTypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: ExtensionSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.disabled !== undefined && (obj.disabled = message.disabled);
        message.type !== undefined && (obj.type = extensionTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExtensionSpec>, I>>(object: I): ExtensionSpec {
        const message = { ...baseExtensionSpec } as ExtensionSpec;
        message.name = object.name ?? '';
        message.uri = object.uri ?? '';
        message.disabled = object.disabled ?? false;
        message.type = object.type ?? 0;
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
