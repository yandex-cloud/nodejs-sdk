/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.cic.v1.common';

export interface LagInfo {
    /**
     * ID of LAG.
     * Optional.
     * If is not set scheduler selects it by himself.
     */
    lagId?: number;
    /** List of port names that the LAG is deployed on. */
    portNames: string[];
}

const baseLagInfo: object = { portNames: '' };

export const LagInfo = {
    encode(message: LagInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lagId !== undefined) {
            Int64Value.encode({ value: message.lagId! }, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.portNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LagInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLagInfo } as LagInfo;
        message.portNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lagId = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.portNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LagInfo {
        const message = { ...baseLagInfo } as LagInfo;
        message.lagId =
            object.lagId !== undefined && object.lagId !== null ? Number(object.lagId) : undefined;
        message.portNames = (object.portNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: LagInfo): unknown {
        const obj: any = {};
        message.lagId !== undefined && (obj.lagId = message.lagId);
        if (message.portNames) {
            obj.portNames = message.portNames.map((e) => e);
        } else {
            obj.portNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LagInfo>, I>>(object: I): LagInfo {
        const message = { ...baseLagInfo } as LagInfo;
        message.lagId = object.lagId ?? undefined;
        message.portNames = object.portNames?.map((e) => e) || [];
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
