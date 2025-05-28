/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.reference';

export interface Reference {
    referrer?: Referrer;
    type: Reference_Type;
}

export enum Reference_Type {
    TYPE_UNSPECIFIED = 0,
    MANAGED_BY = 1,
    USED_BY = 2,
    UNRECOGNIZED = -1,
}

export function reference_TypeFromJSON(object: any): Reference_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Reference_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'MANAGED_BY':
            return Reference_Type.MANAGED_BY;
        case 2:
        case 'USED_BY':
            return Reference_Type.USED_BY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Reference_Type.UNRECOGNIZED;
    }
}

export function reference_TypeToJSON(object: Reference_Type): string {
    switch (object) {
        case Reference_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Reference_Type.MANAGED_BY:
            return 'MANAGED_BY';
        case Reference_Type.USED_BY:
            return 'USED_BY';
        default:
            return 'UNKNOWN';
    }
}

export interface Referrer {
    /**
     * `type = compute.instance, id = <instance id>`
     * * `type = compute.instanceGroup, id = <instanceGroup id>`
     * * `type = loadbalancer.networkLoadBalancer, id = <networkLoadBalancer id>`
     * * `type = managed-kubernetes.cluster, id = <cluster id>`
     * * `type = managed-mysql.cluster, id = <cluster id>`
     */
    type: string;
    id: string;
}

const baseReference: object = { type: 0 };

export const Reference = {
    encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.referrer !== undefined) {
            Referrer.encode(message.referrer, writer.uint32(10).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReference } as Reference;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referrer = Referrer.decode(reader, reader.uint32());
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

    fromJSON(object: any): Reference {
        const message = { ...baseReference } as Reference;
        message.referrer =
            object.referrer !== undefined && object.referrer !== null
                ? Referrer.fromJSON(object.referrer)
                : undefined;
        message.type =
            object.type !== undefined && object.type !== null
                ? reference_TypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: Reference): unknown {
        const obj: any = {};
        message.referrer !== undefined &&
            (obj.referrer = message.referrer ? Referrer.toJSON(message.referrer) : undefined);
        message.type !== undefined && (obj.type = reference_TypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Reference>, I>>(object: I): Reference {
        const message = { ...baseReference } as Reference;
        message.referrer =
            object.referrer !== undefined && object.referrer !== null
                ? Referrer.fromPartial(object.referrer)
                : undefined;
        message.type = object.type ?? 0;
        return message;
    },
};

const baseReferrer: object = { type: '', id: '' };

export const Referrer = {
    encode(message: Referrer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Referrer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReferrer } as Referrer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Referrer {
        const message = { ...baseReferrer } as Referrer;
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: Referrer): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = message.type);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Referrer>, I>>(object: I): Referrer {
        const message = { ...baseReferrer } as Referrer;
        message.type = object.type ?? '';
        message.id = object.id ?? '';
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
