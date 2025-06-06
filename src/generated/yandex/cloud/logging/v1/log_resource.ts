/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.logging.v1';

/**
 * Log entry resource specification.
 *
 * May be used either by services and by user.
 */
export interface LogEntryResource {
    /** Resource type, i.e., `serverless.function` */
    type: string;
    /** Resource ID, i.e., ID of the function producing logs. */
    id: string;
}

/** Log group resource. */
export interface LogGroupResource {
    /**
     * Resource type.
     *
     * Collected from log entries inside log group.
     */
    type: string;
    /** List of resource IDs with the same resource type. */
    ids: string[];
}

const baseLogEntryResource: object = { type: '', id: '' };

export const LogEntryResource = {
    encode(message: LogEntryResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntryResource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogEntryResource } as LogEntryResource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LogEntryResource {
        const message = { ...baseLogEntryResource } as LogEntryResource;
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: LogEntryResource): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = message.type);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LogEntryResource>, I>>(object: I): LogEntryResource {
        const message = { ...baseLogEntryResource } as LogEntryResource;
        message.type = object.type ?? '';
        message.id = object.id ?? '';
        return message;
    },
};

const baseLogGroupResource: object = { type: '', ids: '' };

export const LogGroupResource = {
    encode(message: LogGroupResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.ids) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LogGroupResource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogGroupResource } as LogGroupResource;
        message.ids = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.ids.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LogGroupResource {
        const message = { ...baseLogGroupResource } as LogGroupResource;
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.ids = (object.ids ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: LogGroupResource): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        } else {
            obj.ids = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LogGroupResource>, I>>(object: I): LogGroupResource {
        const message = { ...baseLogGroupResource } as LogGroupResource;
        message.type = object.type ?? '';
        message.ids = object.ids?.map((e) => e) || [];
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
