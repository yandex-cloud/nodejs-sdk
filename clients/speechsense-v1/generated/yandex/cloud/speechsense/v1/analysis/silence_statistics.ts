/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DescriptiveStatistics } from '../../../../../yandex/cloud/speechsense/v1/analysis/statistics_common';

export const protobufPackage = 'yandex.cloud.speechsense.v1.analysis';

export interface SilenceStatistics {
    $type: 'yandex.cloud.speechsense.v1.analysis.SilenceStatistics';
    totalSimultaneousSilenceDurationMs: number;
    /** Simultaneous silence ratio within audio segment */
    totalSimultaneousSilenceRatio: number;
    /** Descriptive statistics for simultaneous silence duration distribution */
    simultaneousSilenceDurationEstimation?: DescriptiveStatistics;
    totalSimultaneousSilenceDurationSeconds: number;
}

const baseSilenceStatistics: object = {
    $type: 'yandex.cloud.speechsense.v1.analysis.SilenceStatistics',
    totalSimultaneousSilenceDurationMs: 0,
    totalSimultaneousSilenceRatio: 0,
    totalSimultaneousSilenceDurationSeconds: 0,
};

export const SilenceStatistics = {
    $type: 'yandex.cloud.speechsense.v1.analysis.SilenceStatistics' as const,

    encode(message: SilenceStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.totalSimultaneousSilenceDurationMs !== 0) {
            writer.uint32(8).int64(message.totalSimultaneousSilenceDurationMs);
        }
        if (message.totalSimultaneousSilenceRatio !== 0) {
            writer.uint32(17).double(message.totalSimultaneousSilenceRatio);
        }
        if (message.simultaneousSilenceDurationEstimation !== undefined) {
            DescriptiveStatistics.encode(
                message.simultaneousSilenceDurationEstimation,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.totalSimultaneousSilenceDurationSeconds !== 0) {
            writer.uint32(32).int64(message.totalSimultaneousSilenceDurationSeconds);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SilenceStatistics {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSilenceStatistics } as SilenceStatistics;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalSimultaneousSilenceDurationMs = longToNumber(
                        reader.int64() as Long,
                    );
                    break;
                case 2:
                    message.totalSimultaneousSilenceRatio = reader.double();
                    break;
                case 3:
                    message.simultaneousSilenceDurationEstimation = DescriptiveStatistics.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.totalSimultaneousSilenceDurationSeconds = longToNumber(
                        reader.int64() as Long,
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SilenceStatistics {
        const message = { ...baseSilenceStatistics } as SilenceStatistics;
        message.totalSimultaneousSilenceDurationMs =
            object.totalSimultaneousSilenceDurationMs !== undefined &&
            object.totalSimultaneousSilenceDurationMs !== null
                ? Number(object.totalSimultaneousSilenceDurationMs)
                : 0;
        message.totalSimultaneousSilenceRatio =
            object.totalSimultaneousSilenceRatio !== undefined &&
            object.totalSimultaneousSilenceRatio !== null
                ? Number(object.totalSimultaneousSilenceRatio)
                : 0;
        message.simultaneousSilenceDurationEstimation =
            object.simultaneousSilenceDurationEstimation !== undefined &&
            object.simultaneousSilenceDurationEstimation !== null
                ? DescriptiveStatistics.fromJSON(object.simultaneousSilenceDurationEstimation)
                : undefined;
        message.totalSimultaneousSilenceDurationSeconds =
            object.totalSimultaneousSilenceDurationSeconds !== undefined &&
            object.totalSimultaneousSilenceDurationSeconds !== null
                ? Number(object.totalSimultaneousSilenceDurationSeconds)
                : 0;
        return message;
    },

    toJSON(message: SilenceStatistics): unknown {
        const obj: any = {};
        message.totalSimultaneousSilenceDurationMs !== undefined &&
            (obj.totalSimultaneousSilenceDurationMs = Math.round(
                message.totalSimultaneousSilenceDurationMs,
            ));
        message.totalSimultaneousSilenceRatio !== undefined &&
            (obj.totalSimultaneousSilenceRatio = message.totalSimultaneousSilenceRatio);
        message.simultaneousSilenceDurationEstimation !== undefined &&
            (obj.simultaneousSilenceDurationEstimation =
                message.simultaneousSilenceDurationEstimation
                    ? DescriptiveStatistics.toJSON(message.simultaneousSilenceDurationEstimation)
                    : undefined);
        message.totalSimultaneousSilenceDurationSeconds !== undefined &&
            (obj.totalSimultaneousSilenceDurationSeconds = Math.round(
                message.totalSimultaneousSilenceDurationSeconds,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SilenceStatistics>, I>>(object: I): SilenceStatistics {
        const message = { ...baseSilenceStatistics } as SilenceStatistics;
        message.totalSimultaneousSilenceDurationMs = object.totalSimultaneousSilenceDurationMs ?? 0;
        message.totalSimultaneousSilenceRatio = object.totalSimultaneousSilenceRatio ?? 0;
        message.simultaneousSilenceDurationEstimation =
            object.simultaneousSilenceDurationEstimation !== undefined &&
            object.simultaneousSilenceDurationEstimation !== null
                ? DescriptiveStatistics.fromPartial(object.simultaneousSilenceDurationEstimation)
                : undefined;
        message.totalSimultaneousSilenceDurationSeconds =
            object.totalSimultaneousSilenceDurationSeconds ?? 0;
        return message;
    },
};

messageTypeRegistry.set(SilenceStatistics.$type, SilenceStatistics);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

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
