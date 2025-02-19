/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.report';

/** An actual value of test's KPI. */
export interface KpiValue {
    /** ID of a test. */
    testId: string;
    /** Value of KPI. */
    value: number;
    /** A flag indicating whether the value satisfies KPI threshold condition. */
    isOk: boolean;
}

const baseKpiValue: object = { testId: '', value: 0, isOk: false };

export const KpiValue = {
    encode(message: KpiValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        if (message.value !== 0) {
            writer.uint32(17).double(message.value);
        }
        if (message.isOk === true) {
            writer.uint32(24).bool(message.isOk);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiValue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKpiValue } as KpiValue;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                case 2:
                    message.value = reader.double();
                    break;
                case 3:
                    message.isOk = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiValue {
        const message = { ...baseKpiValue } as KpiValue;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        message.isOk =
            object.isOk !== undefined && object.isOk !== null ? Boolean(object.isOk) : false;
        return message;
    },

    toJSON(message: KpiValue): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        message.value !== undefined && (obj.value = message.value);
        message.isOk !== undefined && (obj.isOk = message.isOk);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiValue>, I>>(object: I): KpiValue {
        const message = { ...baseKpiValue } as KpiValue;
        message.testId = object.testId ?? '';
        message.value = object.value ?? 0;
        message.isOk = object.isOk ?? false;
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
