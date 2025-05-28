/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.lockbox.v1';

/** A payload. */
export interface Payload {
    /** ID of the version that the payload belongs to. */
    versionId: string;
    /** Payload entries. */
    entries: Payload_Entry[];
}

export interface Payload_Entry {
    /** Non-confidential key of the entry. */
    key: string;
    /** Text value. */
    textValue: string | undefined;
    /** Binary value. */
    binaryValue: Buffer | undefined;
}

const basePayload: object = { versionId: '' };

export const Payload = {
    encode(message: Payload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.versionId !== '') {
            writer.uint32(10).string(message.versionId);
        }
        for (const v of message.entries) {
            Payload_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayload } as Payload;
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.entries.push(Payload_Entry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Payload {
        const message = { ...basePayload } as Payload;
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.entries = (object.entries ?? []).map((e: any) => Payload_Entry.fromJSON(e));
        return message;
    },

    toJSON(message: Payload): unknown {
        const obj: any = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        if (message.entries) {
            obj.entries = message.entries.map((e) => (e ? Payload_Entry.toJSON(e) : undefined));
        } else {
            obj.entries = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Payload>, I>>(object: I): Payload {
        const message = { ...basePayload } as Payload;
        message.versionId = object.versionId ?? '';
        message.entries = object.entries?.map((e) => Payload_Entry.fromPartial(e)) || [];
        return message;
    },
};

const basePayload_Entry: object = { key: '' };

export const Payload_Entry = {
    encode(message: Payload_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.textValue !== undefined) {
            writer.uint32(18).string(message.textValue);
        }
        if (message.binaryValue !== undefined) {
            writer.uint32(26).bytes(message.binaryValue);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Payload_Entry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayload_Entry } as Payload_Entry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.textValue = reader.string();
                    break;
                case 3:
                    message.binaryValue = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Payload_Entry {
        const message = { ...basePayload_Entry } as Payload_Entry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.textValue =
            object.textValue !== undefined && object.textValue !== null
                ? String(object.textValue)
                : undefined;
        message.binaryValue =
            object.binaryValue !== undefined && object.binaryValue !== null
                ? Buffer.from(bytesFromBase64(object.binaryValue))
                : undefined;
        return message;
    },

    toJSON(message: Payload_Entry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.textValue !== undefined && (obj.textValue = message.textValue);
        message.binaryValue !== undefined &&
            (obj.binaryValue =
                message.binaryValue !== undefined
                    ? base64FromBytes(message.binaryValue)
                    : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Payload_Entry>, I>>(object: I): Payload_Entry {
        const message = { ...basePayload_Entry } as Payload_Entry;
        message.key = object.key ?? '';
        message.textValue = object.textValue ?? undefined;
        message.binaryValue = object.binaryValue ?? undefined;
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
