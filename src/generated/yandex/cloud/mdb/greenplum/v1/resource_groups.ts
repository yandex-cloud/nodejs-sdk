/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { BoolValue, Int64Value } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

export interface ResourceGroup {
    $type: 'yandex.cloud.mdb.greenplum.v1.ResourceGroup';
    name: string;
    isUserDefined?: boolean;
    /** References to CONCURRENCY from gp resource group parameter */
    concurrency?: number;
    /** References to CPU_RATE_LIMIT from gp resource group parameter */
    cpuRateLimit?: number;
    /** References to MEMORY_LIMIT from gp resource group parameter */
    memoryLimit?: number;
    /** References to MEMORY_SHARED_QUOTA from gp resource group parameter */
    memorySharedQuota?: number;
    /** References to MEMORY_SPILL_RATIO from gp resource group parameter */
    memorySpillRatio?: number;
}

const baseResourceGroup: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ResourceGroup',
    name: '',
};

export const ResourceGroup = {
    $type: 'yandex.cloud.mdb.greenplum.v1.ResourceGroup' as const,

    encode(message: ResourceGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.isUserDefined !== undefined) {
            BoolValue.encode(
                { $type: 'google.protobuf.BoolValue', value: message.isUserDefined! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.concurrency !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.concurrency! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.cpuRateLimit !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.cpuRateLimit! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.memoryLimit !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.memoryLimit! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.memorySharedQuota !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.memorySharedQuota! },
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.memorySpillRatio !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.memorySpillRatio! },
                writer.uint32(58).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceGroup } as ResourceGroup;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.isUserDefined = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.concurrency = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.cpuRateLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.memoryLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.memorySharedQuota = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.memorySpillRatio = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceGroup {
        const message = { ...baseResourceGroup } as ResourceGroup;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.isUserDefined =
            object.isUserDefined !== undefined && object.isUserDefined !== null
                ? Boolean(object.isUserDefined)
                : undefined;
        message.concurrency =
            object.concurrency !== undefined && object.concurrency !== null
                ? Number(object.concurrency)
                : undefined;
        message.cpuRateLimit =
            object.cpuRateLimit !== undefined && object.cpuRateLimit !== null
                ? Number(object.cpuRateLimit)
                : undefined;
        message.memoryLimit =
            object.memoryLimit !== undefined && object.memoryLimit !== null
                ? Number(object.memoryLimit)
                : undefined;
        message.memorySharedQuota =
            object.memorySharedQuota !== undefined && object.memorySharedQuota !== null
                ? Number(object.memorySharedQuota)
                : undefined;
        message.memorySpillRatio =
            object.memorySpillRatio !== undefined && object.memorySpillRatio !== null
                ? Number(object.memorySpillRatio)
                : undefined;
        return message;
    },

    toJSON(message: ResourceGroup): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.isUserDefined !== undefined && (obj.isUserDefined = message.isUserDefined);
        message.concurrency !== undefined && (obj.concurrency = message.concurrency);
        message.cpuRateLimit !== undefined && (obj.cpuRateLimit = message.cpuRateLimit);
        message.memoryLimit !== undefined && (obj.memoryLimit = message.memoryLimit);
        message.memorySharedQuota !== undefined &&
            (obj.memorySharedQuota = message.memorySharedQuota);
        message.memorySpillRatio !== undefined && (obj.memorySpillRatio = message.memorySpillRatio);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceGroup>, I>>(object: I): ResourceGroup {
        const message = { ...baseResourceGroup } as ResourceGroup;
        message.name = object.name ?? '';
        message.isUserDefined = object.isUserDefined ?? undefined;
        message.concurrency = object.concurrency ?? undefined;
        message.cpuRateLimit = object.cpuRateLimit ?? undefined;
        message.memoryLimit = object.memoryLimit ?? undefined;
        message.memorySharedQuota = object.memorySharedQuota ?? undefined;
        message.memorySpillRatio = object.memorySpillRatio ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(ResourceGroup.$type, ResourceGroup);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
