/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface Manifest {
    $type: 'yandex.cloud.video.v1.Manifest';
    url: string;
    type: Manifest_ManifestType;
}

export enum Manifest_ManifestType {
    MANIFEST_TYPE_UNSPECIFIED = 0,
    DASH = 1,
    HLS = 2,
    UNRECOGNIZED = -1,
}

export function manifest_ManifestTypeFromJSON(object: any): Manifest_ManifestType {
    switch (object) {
        case 0:
        case 'MANIFEST_TYPE_UNSPECIFIED':
            return Manifest_ManifestType.MANIFEST_TYPE_UNSPECIFIED;
        case 1:
        case 'DASH':
            return Manifest_ManifestType.DASH;
        case 2:
        case 'HLS':
            return Manifest_ManifestType.HLS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Manifest_ManifestType.UNRECOGNIZED;
    }
}

export function manifest_ManifestTypeToJSON(object: Manifest_ManifestType): string {
    switch (object) {
        case Manifest_ManifestType.MANIFEST_TYPE_UNSPECIFIED:
            return 'MANIFEST_TYPE_UNSPECIFIED';
        case Manifest_ManifestType.DASH:
            return 'DASH';
        case Manifest_ManifestType.HLS:
            return 'HLS';
        default:
            return 'UNKNOWN';
    }
}

const baseManifest: object = { $type: 'yandex.cloud.video.v1.Manifest', url: '', type: 0 };

export const Manifest = {
    $type: 'yandex.cloud.video.v1.Manifest' as const,

    encode(message: Manifest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Manifest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseManifest } as Manifest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Manifest {
        const message = { ...baseManifest } as Manifest;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? manifest_ManifestTypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: Manifest): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.type !== undefined && (obj.type = manifest_ManifestTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Manifest>, I>>(object: I): Manifest {
        const message = { ...baseManifest } as Manifest;
        message.url = object.url ?? '';
        message.type = object.type ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Manifest.$type, Manifest);

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
