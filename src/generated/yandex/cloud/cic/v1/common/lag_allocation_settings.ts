/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { LagInfo } from '../../../../../yandex/cloud/cic/v1/common/lag_info';

export const protobufPackage = 'yandex.cloud.cic.v1.common';

/** Structure for create and update requests that describes LAG allocation settings */
export interface LagAllocationSettingsRequest {
    /**
     * Size of LAG.
     * Must be from 1 to 10 inclusively.
     */
    lagSize: number | undefined;
}

/** Structure that describes LAG allocation settings */
export interface LagAllocationSettings {
    /** LagInfo */
    lagInfo?: LagInfo;
}

const baseLagAllocationSettingsRequest: object = {};

export const LagAllocationSettingsRequest = {
    encode(
        message: LagAllocationSettingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.lagSize !== undefined) {
            writer.uint32(104).int64(message.lagSize);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LagAllocationSettingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLagAllocationSettingsRequest } as LagAllocationSettingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 13:
                    message.lagSize = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LagAllocationSettingsRequest {
        const message = { ...baseLagAllocationSettingsRequest } as LagAllocationSettingsRequest;
        message.lagSize =
            object.lagSize !== undefined && object.lagSize !== null
                ? Number(object.lagSize)
                : undefined;
        return message;
    },

    toJSON(message: LagAllocationSettingsRequest): unknown {
        const obj: any = {};
        message.lagSize !== undefined && (obj.lagSize = Math.round(message.lagSize));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LagAllocationSettingsRequest>, I>>(
        object: I,
    ): LagAllocationSettingsRequest {
        const message = { ...baseLagAllocationSettingsRequest } as LagAllocationSettingsRequest;
        message.lagSize = object.lagSize ?? undefined;
        return message;
    },
};

const baseLagAllocationSettings: object = {};

export const LagAllocationSettings = {
    encode(message: LagAllocationSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lagInfo !== undefined) {
            LagInfo.encode(message.lagInfo, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LagAllocationSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLagAllocationSettings } as LagAllocationSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 14:
                    message.lagInfo = LagInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LagAllocationSettings {
        const message = { ...baseLagAllocationSettings } as LagAllocationSettings;
        message.lagInfo =
            object.lagInfo !== undefined && object.lagInfo !== null
                ? LagInfo.fromJSON(object.lagInfo)
                : undefined;
        return message;
    },

    toJSON(message: LagAllocationSettings): unknown {
        const obj: any = {};
        message.lagInfo !== undefined &&
            (obj.lagInfo = message.lagInfo ? LagInfo.toJSON(message.lagInfo) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LagAllocationSettings>, I>>(
        object: I,
    ): LagAllocationSettings {
        const message = { ...baseLagAllocationSettings } as LagAllocationSettings;
        message.lagInfo =
            object.lagInfo !== undefined && object.lagInfo !== null
                ? LagInfo.fromPartial(object.lagInfo)
                : undefined;
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
