/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface DiskType {
    $type: 'yandex.cloud.compute.v1.DiskType';
    /** ID of the disk type. */
    id: string;
    /** Description of the disk type. 0-256 characters long. */
    description: string;
    /** Array of availability zones where the disk type is available. */
    zoneIds: string[];
}

const baseDiskType: object = {
    $type: 'yandex.cloud.compute.v1.DiskType',
    id: '',
    description: '',
    zoneIds: '',
};

export const DiskType = {
    $type: 'yandex.cloud.compute.v1.DiskType' as const,

    encode(message: DiskType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.zoneIds) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DiskType {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskType } as DiskType;
        message.zoneIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.zoneIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DiskType {
        const message = { ...baseDiskType } as DiskType;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.zoneIds = (object.zoneIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: DiskType): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined && (obj.description = message.description);
        if (message.zoneIds) {
            obj.zoneIds = message.zoneIds.map((e) => e);
        } else {
            obj.zoneIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DiskType>, I>>(object: I): DiskType {
        const message = { ...baseDiskType } as DiskType;
        message.id = object.id ?? '';
        message.description = object.description ?? '';
        message.zoneIds = object.zoneIds?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(DiskType.$type, DiskType);

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
