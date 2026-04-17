/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.marketplace.licensemanager.v1';

/** ExternalInstance attachment to external service subscription. */
export interface ExternalInstance {
    /** Optional external subscription name. */
    name: string;
    /** Mapping of vendor defined properties in key, value format. */
    properties: { [key: string]: string };
    subscription?: ExternalSubscription | undefined;
    license?: ExternalLicense | undefined;
}

export interface ExternalInstance_PropertiesEntry {
    key: string;
    value: string;
}

export interface ExternalSubscription {
    /** External subscription id. */
    subscriptionId: string;
    /** Optional: paired license id for external subscription. */
    licenseId: string;
    /** Optional: default activation key for external subscription. */
    activationKey: string;
}

export interface ExternalLicense {
    /** External license bound to subscription instance. */
    licenseId: string;
    /** License (vendor specific) payload. */
    payload: Buffer;
}

const baseExternalInstance: object = { name: '' };

export const ExternalInstance: {
    encode(message: ExternalInstance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalInstance;
    fromJSON(object: any): ExternalInstance;
    toJSON(message: ExternalInstance): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalInstance>, I>>(object: I): ExternalInstance;
} = {
    encode(message: ExternalInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            ExternalInstance_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(170).fork(),
            ).ldelim();
        });
        if (message.subscription !== undefined) {
            ExternalSubscription.encode(message.subscription, writer.uint32(178).fork()).ldelim();
        }
        if (message.license !== undefined) {
            ExternalLicense.encode(message.license, writer.uint32(186).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalInstance {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalInstance } as ExternalInstance;
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 21:
                    const entry21 = ExternalInstance_PropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry21.value !== undefined) {
                        message.properties[entry21.key] = entry21.value;
                    }
                    break;
                case 22:
                    message.subscription = ExternalSubscription.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.license = ExternalLicense.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalInstance {
        const message = { ...baseExternalInstance } as ExternalInstance;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.subscription =
            object.subscription !== undefined && object.subscription !== null
                ? ExternalSubscription.fromJSON(object.subscription)
                : undefined;
        message.license =
            object.license !== undefined && object.license !== null
                ? ExternalLicense.fromJSON(object.license)
                : undefined;
        return message;
    },

    toJSON(message: ExternalInstance): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.subscription !== undefined &&
            (obj.subscription = message.subscription
                ? ExternalSubscription.toJSON(message.subscription)
                : undefined);
        message.license !== undefined &&
            (obj.license = message.license ? ExternalLicense.toJSON(message.license) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalInstance>, I>>(object: I): ExternalInstance {
        const message = { ...baseExternalInstance } as ExternalInstance;
        message.name = object.name ?? '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.subscription =
            object.subscription !== undefined && object.subscription !== null
                ? ExternalSubscription.fromPartial(object.subscription)
                : undefined;
        message.license =
            object.license !== undefined && object.license !== null
                ? ExternalLicense.fromPartial(object.license)
                : undefined;
        return message;
    },
};

const baseExternalInstance_PropertiesEntry: object = { key: '', value: '' };

export const ExternalInstance_PropertiesEntry: {
    encode(message: ExternalInstance_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalInstance_PropertiesEntry;
    fromJSON(object: any): ExternalInstance_PropertiesEntry;
    toJSON(message: ExternalInstance_PropertiesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalInstance_PropertiesEntry>, I>>(object: I): ExternalInstance_PropertiesEntry;
} = {
    encode(
        message: ExternalInstance_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalInstance_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalInstance_PropertiesEntry,
        } as ExternalInstance_PropertiesEntry;
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

    fromJSON(object: any): ExternalInstance_PropertiesEntry {
        const message = {
            ...baseExternalInstance_PropertiesEntry,
        } as ExternalInstance_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ExternalInstance_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalInstance_PropertiesEntry>, I>>(
        object: I,
    ): ExternalInstance_PropertiesEntry {
        const message = {
            ...baseExternalInstance_PropertiesEntry,
        } as ExternalInstance_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseExternalSubscription: object = { subscriptionId: '', licenseId: '', activationKey: '' };

export const ExternalSubscription: {
    encode(message: ExternalSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalSubscription;
    fromJSON(object: any): ExternalSubscription;
    toJSON(message: ExternalSubscription): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalSubscription>, I>>(object: I): ExternalSubscription;
} = {
    encode(message: ExternalSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subscriptionId !== '') {
            writer.uint32(10).string(message.subscriptionId);
        }
        if (message.licenseId !== '') {
            writer.uint32(18).string(message.licenseId);
        }
        if (message.activationKey !== '') {
            writer.uint32(26).string(message.activationKey);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalSubscription {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalSubscription } as ExternalSubscription;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionId = reader.string();
                    break;
                case 2:
                    message.licenseId = reader.string();
                    break;
                case 3:
                    message.activationKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalSubscription {
        const message = { ...baseExternalSubscription } as ExternalSubscription;
        message.subscriptionId =
            object.subscriptionId !== undefined && object.subscriptionId !== null
                ? String(object.subscriptionId)
                : '';
        message.licenseId =
            object.licenseId !== undefined && object.licenseId !== null
                ? String(object.licenseId)
                : '';
        message.activationKey =
            object.activationKey !== undefined && object.activationKey !== null
                ? String(object.activationKey)
                : '';
        return message;
    },

    toJSON(message: ExternalSubscription): unknown {
        const obj: any = {};
        message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
        message.licenseId !== undefined && (obj.licenseId = message.licenseId);
        message.activationKey !== undefined && (obj.activationKey = message.activationKey);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalSubscription>, I>>(
        object: I,
    ): ExternalSubscription {
        const message = { ...baseExternalSubscription } as ExternalSubscription;
        message.subscriptionId = object.subscriptionId ?? '';
        message.licenseId = object.licenseId ?? '';
        message.activationKey = object.activationKey ?? '';
        return message;
    },
};

const baseExternalLicense: object = { licenseId: '' };

export const ExternalLicense: {
    encode(message: ExternalLicense, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalLicense;
    fromJSON(object: any): ExternalLicense;
    toJSON(message: ExternalLicense): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalLicense>, I>>(object: I): ExternalLicense;
} = {
    encode(message: ExternalLicense, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.licenseId !== '') {
            writer.uint32(10).string(message.licenseId);
        }
        if (message.payload.length !== 0) {
            writer.uint32(18).bytes(message.payload);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalLicense {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalLicense } as ExternalLicense;
        message.payload = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.licenseId = reader.string();
                    break;
                case 2:
                    message.payload = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalLicense {
        const message = { ...baseExternalLicense } as ExternalLicense;
        message.licenseId =
            object.licenseId !== undefined && object.licenseId !== null
                ? String(object.licenseId)
                : '';
        message.payload =
            object.payload !== undefined && object.payload !== null
                ? Buffer.from(bytesFromBase64(object.payload))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: ExternalLicense): unknown {
        const obj: any = {};
        message.licenseId !== undefined && (obj.licenseId = message.licenseId);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(
                message.payload !== undefined ? message.payload : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalLicense>, I>>(object: I): ExternalLicense {
        const message = { ...baseExternalLicense } as ExternalLicense;
        message.licenseId = object.licenseId ?? '';
        message.payload = object.payload ?? Buffer.alloc(0);
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

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
