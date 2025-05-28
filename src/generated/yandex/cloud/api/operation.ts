/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.api';

/**
 * Operation is annotation for rpc that returns longrunning operation, describes
 * message types that will be returned in metadata [google.protobuf.Any], and
 * in response [google.protobuf.Any] (for successful operation).
 */
export interface Operation {
    /**
     * Optional. If present, rpc returns operation which metadata field will
     * contains message of specified type.
     */
    metadata: string;
    /**
     * Required. rpc returns operation, in case of success response will contains message of
     * specified field.
     */
    response: string;
}

const baseOperation: object = { metadata: '', response: '' };

export const Operation = {
    encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.metadata !== '') {
            writer.uint32(10).string(message.metadata);
        }
        if (message.response !== '') {
            writer.uint32(18).string(message.response);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOperation } as Operation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = reader.string();
                    break;
                case 2:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Operation {
        const message = { ...baseOperation } as Operation;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? String(object.metadata)
                : '';
        message.response =
            object.response !== undefined && object.response !== null
                ? String(object.response)
                : '';
        return message;
    },

    toJSON(message: Operation): unknown {
        const obj: any = {};
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.response !== undefined && (obj.response = message.response);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Operation>, I>>(object: I): Operation {
        const message = { ...baseOperation } as Operation;
        message.metadata = object.metadata ?? '';
        message.response = object.response ?? '';
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
