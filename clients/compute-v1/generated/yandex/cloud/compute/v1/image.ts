/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { HardwareGeneration } from '../../../../yandex/cloud/compute/v1/hardware_generation';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.compute.v1';

/** An Image resource. */
export interface Image {
    $type: 'yandex.cloud.compute.v1.Image';
    /** ID of the image. */
    id: string;
    /** ID of the folder that the image belongs to. */
    folderId: string;
    createdAt?: Date;
    /** Name of the image. 1-63 characters long. */
    name: string;
    /** Description of the image. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /**
     * The name of the image family to which this image belongs.
     *
     * You can get the most recent image from a family by using
     * the [yandex.cloud.compute.v1.ImageService.GetLatestByFamily] request
     * and create the disk from this image.
     */
    family: string;
    /** The size of the image, specified in bytes. */
    storageSize: number;
    /** Minimum size of the disk which will be created from this image. */
    minDiskSize: number;
    /**
     * License IDs that indicate which licenses are attached to this resource.
     * License IDs are used to calculate additional charges for the use of the virtual machine.
     *
     * The correct license ID is generated by the platform. IDs are inherited by new resources created from this resource.
     *
     * If you know the license IDs, specify them when you create the image.
     * For example, if you create a disk image using a third-party utility and load it into Object Storage, the license IDs will be lost.
     * You can specify them in the [yandex.cloud.compute.v1.ImageService.Create] request.
     */
    productIds: string[];
    /** Current status of the image. */
    status: Image_Status;
    /** Operating system that is contained in the image. */
    os?: Os;
    /** When true, indicates there is an image pool for fast creation disks from the image. */
    pooled: boolean;
    /**
     * If specified, forces the same HardwareGeneration features to be applied to the instance
     * created using this image as a source for the boot disk. Otherwise the current default will be used.
     */
    hardwareGeneration?: HardwareGeneration;
}

export enum Image_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Image is being created. */
    CREATING = 1,
    /** READY - Image is ready to use. */
    READY = 2,
    /** ERROR - Image encountered a problem and cannot operate. */
    ERROR = 3,
    /** DELETING - Image is being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function image_StatusFromJSON(object: any): Image_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Image_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Image_Status.CREATING;
        case 2:
        case 'READY':
            return Image_Status.READY;
        case 3:
        case 'ERROR':
            return Image_Status.ERROR;
        case 4:
        case 'DELETING':
            return Image_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Image_Status.UNRECOGNIZED;
    }
}

export function image_StatusToJSON(object: Image_Status): string {
    switch (object) {
        case Image_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Image_Status.CREATING:
            return 'CREATING';
        case Image_Status.READY:
            return 'READY';
        case Image_Status.ERROR:
            return 'ERROR';
        case Image_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Image_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.Image.LabelsEntry';
    key: string;
    value: string;
}

export interface Os {
    $type: 'yandex.cloud.compute.v1.Os';
    /**
     * Operating system type. The default is `LINUX`.
     *
     * This field is used to correctly emulate a vCPU and calculate the cost of using an instance.
     */
    type: Os_Type;
}

export enum Os_Type {
    TYPE_UNSPECIFIED = 0,
    /** LINUX - Linux operating system. */
    LINUX = 1,
    /** WINDOWS - Windows operating system. */
    WINDOWS = 2,
    UNRECOGNIZED = -1,
}

export function os_TypeFromJSON(object: any): Os_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Os_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'LINUX':
            return Os_Type.LINUX;
        case 2:
        case 'WINDOWS':
            return Os_Type.WINDOWS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Os_Type.UNRECOGNIZED;
    }
}

export function os_TypeToJSON(object: Os_Type): string {
    switch (object) {
        case Os_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Os_Type.LINUX:
            return 'LINUX';
        case Os_Type.WINDOWS:
            return 'WINDOWS';
        default:
            return 'UNKNOWN';
    }
}

const baseImage: object = {
    $type: 'yandex.cloud.compute.v1.Image',
    id: '',
    folderId: '',
    name: '',
    description: '',
    family: '',
    storageSize: 0,
    minDiskSize: 0,
    productIds: '',
    status: 0,
    pooled: false,
};

export const Image = {
    $type: 'yandex.cloud.compute.v1.Image' as const,

    encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Image_LabelsEntry.encode(
                { $type: 'yandex.cloud.compute.v1.Image.LabelsEntry', key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.family !== '') {
            writer.uint32(58).string(message.family);
        }
        if (message.storageSize !== 0) {
            writer.uint32(64).int64(message.storageSize);
        }
        if (message.minDiskSize !== 0) {
            writer.uint32(72).int64(message.minDiskSize);
        }
        for (const v of message.productIds) {
            writer.uint32(82).string(v!);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.os !== undefined) {
            Os.encode(message.os, writer.uint32(98).fork()).ldelim();
        }
        if (message.pooled === true) {
            writer.uint32(104).bool(message.pooled);
        }
        if (message.hardwareGeneration !== undefined) {
            HardwareGeneration.encode(
                message.hardwareGeneration,
                writer.uint32(114).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Image {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage } as Image;
        message.labels = {};
        message.productIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Image_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.family = reader.string();
                    break;
                case 8:
                    message.storageSize = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.minDiskSize = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.productIds.push(reader.string());
                    break;
                case 11:
                    message.status = reader.int32() as any;
                    break;
                case 12:
                    message.os = Os.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.pooled = reader.bool();
                    break;
                case 14:
                    message.hardwareGeneration = HardwareGeneration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Image {
        const message = { ...baseImage } as Image;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.family =
            object.family !== undefined && object.family !== null ? String(object.family) : '';
        message.storageSize =
            object.storageSize !== undefined && object.storageSize !== null
                ? Number(object.storageSize)
                : 0;
        message.minDiskSize =
            object.minDiskSize !== undefined && object.minDiskSize !== null
                ? Number(object.minDiskSize)
                : 0;
        message.productIds = (object.productIds ?? []).map((e: any) => String(e));
        message.status =
            object.status !== undefined && object.status !== null
                ? image_StatusFromJSON(object.status)
                : 0;
        message.os =
            object.os !== undefined && object.os !== null ? Os.fromJSON(object.os) : undefined;
        message.pooled =
            object.pooled !== undefined && object.pooled !== null ? Boolean(object.pooled) : false;
        message.hardwareGeneration =
            object.hardwareGeneration !== undefined && object.hardwareGeneration !== null
                ? HardwareGeneration.fromJSON(object.hardwareGeneration)
                : undefined;
        return message;
    },

    toJSON(message: Image): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.family !== undefined && (obj.family = message.family);
        message.storageSize !== undefined && (obj.storageSize = Math.round(message.storageSize));
        message.minDiskSize !== undefined && (obj.minDiskSize = Math.round(message.minDiskSize));
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        } else {
            obj.productIds = [];
        }
        message.status !== undefined && (obj.status = image_StatusToJSON(message.status));
        message.os !== undefined && (obj.os = message.os ? Os.toJSON(message.os) : undefined);
        message.pooled !== undefined && (obj.pooled = message.pooled);
        message.hardwareGeneration !== undefined &&
            (obj.hardwareGeneration = message.hardwareGeneration
                ? HardwareGeneration.toJSON(message.hardwareGeneration)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
        const message = { ...baseImage } as Image;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.family = object.family ?? '';
        message.storageSize = object.storageSize ?? 0;
        message.minDiskSize = object.minDiskSize ?? 0;
        message.productIds = object.productIds?.map((e) => e) || [];
        message.status = object.status ?? 0;
        message.os =
            object.os !== undefined && object.os !== null ? Os.fromPartial(object.os) : undefined;
        message.pooled = object.pooled ?? false;
        message.hardwareGeneration =
            object.hardwareGeneration !== undefined && object.hardwareGeneration !== null
                ? HardwareGeneration.fromPartial(object.hardwareGeneration)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Image.$type, Image);

const baseImage_LabelsEntry: object = {
    $type: 'yandex.cloud.compute.v1.Image.LabelsEntry',
    key: '',
    value: '',
};

export const Image_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Image.LabelsEntry' as const,

    encode(message: Image_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Image_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
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

    fromJSON(object: any): Image_LabelsEntry {
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Image_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Image_LabelsEntry>, I>>(object: I): Image_LabelsEntry {
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(Image_LabelsEntry.$type, Image_LabelsEntry);

const baseOs: object = { $type: 'yandex.cloud.compute.v1.Os', type: 0 };

export const Os = {
    $type: 'yandex.cloud.compute.v1.Os' as const,

    encode(message: Os, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Os {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOs } as Os;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Os {
        const message = { ...baseOs } as Os;
        message.type =
            object.type !== undefined && object.type !== null ? os_TypeFromJSON(object.type) : 0;
        return message;
    },

    toJSON(message: Os): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = os_TypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Os>, I>>(object: I): Os {
        const message = { ...baseOs } as Os;
        message.type = object.type ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Os.$type, Os);

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
