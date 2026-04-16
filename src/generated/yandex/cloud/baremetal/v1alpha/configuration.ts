/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    DiskDriveType,
    diskDriveTypeFromJSON,
    diskDriveTypeToJSON,
} from '../../../../yandex/cloud/baremetal/v1alpha/disk';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** CPU configuration. */
export interface CPU {
    /** Name of the CPU. */
    name: string;
    /** Vendor of the CPU. */
    vendor: string;
    /** Number of cores. */
    cores: number;
}

export interface DiskDriveConfiguration {
    /** Type of the disk drive. */
    type: DiskDriveType;
    /** Number of disk drives. */
    diskCount: number;
    /** Size of a single disk drive in gibibytes (2^30 bytes). */
    diskSizeGib: number;
}

export interface Configuration {
    /** ID of the configuration. */
    id: string;
    /** Name of the configuration. */
    name: string;
    /** Random-access memory (RAM) size in gibibytes (2^30 bytes). */
    memoryGib: number;
    /** CPU configuration. */
    cpu?: CPU;
    /** Array of disk drive configurations. */
    diskDrives: DiskDriveConfiguration[];
    /** Network capacity or bandwidth in gigabits per second. */
    networkCapacityGbps: number;
    /** Number of cpu. */
    cpuNum: number;
}

const baseCPU: object = { name: '', vendor: '', cores: 0 };

export const CPU = {
    encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.vendor !== '') {
            writer.uint32(18).string(message.vendor);
        }
        if (message.cores !== 0) {
            writer.uint32(24).int64(message.cores);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CPU {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCPU } as CPU;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.vendor = reader.string();
                    break;
                case 3:
                    message.cores = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CPU {
        const message = { ...baseCPU } as CPU;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.vendor =
            object.vendor !== undefined && object.vendor !== null ? String(object.vendor) : '';
        message.cores =
            object.cores !== undefined && object.cores !== null ? Number(object.cores) : 0;
        return message;
    },

    toJSON(message: CPU): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.vendor !== undefined && (obj.vendor = message.vendor);
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CPU>, I>>(object: I): CPU {
        const message = { ...baseCPU } as CPU;
        message.name = object.name ?? '';
        message.vendor = object.vendor ?? '';
        message.cores = object.cores ?? 0;
        return message;
    },
};

const baseDiskDriveConfiguration: object = { type: 0, diskCount: 0, diskSizeGib: 0 };

export const DiskDriveConfiguration = {
    encode(message: DiskDriveConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.diskCount !== 0) {
            writer.uint32(16).int64(message.diskCount);
        }
        if (message.diskSizeGib !== 0) {
            writer.uint32(24).int64(message.diskSizeGib);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DiskDriveConfiguration {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskDriveConfiguration } as DiskDriveConfiguration;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.diskCount = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.diskSizeGib = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DiskDriveConfiguration {
        const message = { ...baseDiskDriveConfiguration } as DiskDriveConfiguration;
        message.type =
            object.type !== undefined && object.type !== null
                ? diskDriveTypeFromJSON(object.type)
                : 0;
        message.diskCount =
            object.diskCount !== undefined && object.diskCount !== null
                ? Number(object.diskCount)
                : 0;
        message.diskSizeGib =
            object.diskSizeGib !== undefined && object.diskSizeGib !== null
                ? Number(object.diskSizeGib)
                : 0;
        return message;
    },

    toJSON(message: DiskDriveConfiguration): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = diskDriveTypeToJSON(message.type));
        message.diskCount !== undefined && (obj.diskCount = Math.round(message.diskCount));
        message.diskSizeGib !== undefined && (obj.diskSizeGib = Math.round(message.diskSizeGib));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DiskDriveConfiguration>, I>>(
        object: I,
    ): DiskDriveConfiguration {
        const message = { ...baseDiskDriveConfiguration } as DiskDriveConfiguration;
        message.type = object.type ?? 0;
        message.diskCount = object.diskCount ?? 0;
        message.diskSizeGib = object.diskSizeGib ?? 0;
        return message;
    },
};

const baseConfiguration: object = {
    id: '',
    name: '',
    memoryGib: 0,
    networkCapacityGbps: 0,
    cpuNum: 0,
};

export const Configuration = {
    encode(message: Configuration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.memoryGib !== 0) {
            writer.uint32(24).int64(message.memoryGib);
        }
        if (message.cpu !== undefined) {
            CPU.encode(message.cpu, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.diskDrives) {
            DiskDriveConfiguration.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.networkCapacityGbps !== 0) {
            writer.uint32(48).int64(message.networkCapacityGbps);
        }
        if (message.cpuNum !== 0) {
            writer.uint32(64).int64(message.cpuNum);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Configuration {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConfiguration } as Configuration;
        message.diskDrives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.memoryGib = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.cpu = CPU.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.diskDrives.push(DiskDriveConfiguration.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.networkCapacityGbps = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.cpuNum = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Configuration {
        const message = { ...baseConfiguration } as Configuration;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.memoryGib =
            object.memoryGib !== undefined && object.memoryGib !== null
                ? Number(object.memoryGib)
                : 0;
        message.cpu =
            object.cpu !== undefined && object.cpu !== null ? CPU.fromJSON(object.cpu) : undefined;
        message.diskDrives = (object.diskDrives ?? []).map((e: any) =>
            DiskDriveConfiguration.fromJSON(e),
        );
        message.networkCapacityGbps =
            object.networkCapacityGbps !== undefined && object.networkCapacityGbps !== null
                ? Number(object.networkCapacityGbps)
                : 0;
        message.cpuNum =
            object.cpuNum !== undefined && object.cpuNum !== null ? Number(object.cpuNum) : 0;
        return message;
    },

    toJSON(message: Configuration): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.memoryGib !== undefined && (obj.memoryGib = Math.round(message.memoryGib));
        message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
        if (message.diskDrives) {
            obj.diskDrives = message.diskDrives.map((e) =>
                e ? DiskDriveConfiguration.toJSON(e) : undefined,
            );
        } else {
            obj.diskDrives = [];
        }
        message.networkCapacityGbps !== undefined &&
            (obj.networkCapacityGbps = Math.round(message.networkCapacityGbps));
        message.cpuNum !== undefined && (obj.cpuNum = Math.round(message.cpuNum));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Configuration>, I>>(object: I): Configuration {
        const message = { ...baseConfiguration } as Configuration;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.memoryGib = object.memoryGib ?? 0;
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? CPU.fromPartial(object.cpu)
                : undefined;
        message.diskDrives =
            object.diskDrives?.map((e) => DiskDriveConfiguration.fromPartial(e)) || [];
        message.networkCapacityGbps = object.networkCapacityGbps ?? 0;
        message.cpuNum = object.cpuNum ?? 0;
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
