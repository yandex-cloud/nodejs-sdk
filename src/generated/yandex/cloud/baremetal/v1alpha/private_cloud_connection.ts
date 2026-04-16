/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** A Private cloud connection resource. */
export interface PrivateCloudConnection {
    /** ID of the private cloud connection. */
    id: string;
    /** ID of the folder that the private cloud connection belongs to. */
    folderId: string;
    /** ID of the cloud that the private cloud connection belongs to. */
    cloudId: string;
    /** ID of Cloud Router Routing Instance. */
    routingInstanceId: string;
    /** ID of VRF that is connected to routing Instance. */
    vrfId: string;
    /** Status of the private cloud connection. */
    status: PrivateCloudConnection_Status;
    /** Creation timestamp. */
    createdAt?: Date;
}

/** Private cloud connection status. */
export enum PrivateCloudConnection_Status {
    /** STATUS_UNSPECIFIED - Unspecified private cloud connection status. */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Private cloud connection is waiting for network resources to be allocated. */
    CREATING = 1,
    /** READY - Private cloud connection is ready to use. */
    READY = 2,
    /** ERROR - Private cloud connection encountered a problem and cannot operate. */
    ERROR = 3,
    /** DELETING - Private cloud connection is being deleted. */
    DELETING = 4,
    /** UPDATING - Private cloud connection is being updated. */
    UPDATING = 5,
    UNRECOGNIZED = -1,
}

export function privateCloudConnection_StatusFromJSON(object: any): PrivateCloudConnection_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return PrivateCloudConnection_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return PrivateCloudConnection_Status.CREATING;
        case 2:
        case 'READY':
            return PrivateCloudConnection_Status.READY;
        case 3:
        case 'ERROR':
            return PrivateCloudConnection_Status.ERROR;
        case 4:
        case 'DELETING':
            return PrivateCloudConnection_Status.DELETING;
        case 5:
        case 'UPDATING':
            return PrivateCloudConnection_Status.UPDATING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PrivateCloudConnection_Status.UNRECOGNIZED;
    }
}

export function privateCloudConnection_StatusToJSON(object: PrivateCloudConnection_Status): string {
    switch (object) {
        case PrivateCloudConnection_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case PrivateCloudConnection_Status.CREATING:
            return 'CREATING';
        case PrivateCloudConnection_Status.READY:
            return 'READY';
        case PrivateCloudConnection_Status.ERROR:
            return 'ERROR';
        case PrivateCloudConnection_Status.DELETING:
            return 'DELETING';
        case PrivateCloudConnection_Status.UPDATING:
            return 'UPDATING';
        default:
            return 'UNKNOWN';
    }
}

const basePrivateCloudConnection: object = {
    id: '',
    folderId: '',
    cloudId: '',
    routingInstanceId: '',
    vrfId: '',
    status: 0,
};

export const PrivateCloudConnection = {
    encode(message: PrivateCloudConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(42).string(message.cloudId);
        }
        if (message.routingInstanceId !== '') {
            writer.uint32(50).string(message.routingInstanceId);
        }
        if (message.vrfId !== '') {
            writer.uint32(58).string(message.vrfId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateCloudConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateCloudConnection } as PrivateCloudConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                case 5:
                    message.cloudId = reader.string();
                    break;
                case 6:
                    message.routingInstanceId = reader.string();
                    break;
                case 7:
                    message.vrfId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrivateCloudConnection {
        const message = { ...basePrivateCloudConnection } as PrivateCloudConnection;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        message.vrfId =
            object.vrfId !== undefined && object.vrfId !== null ? String(object.vrfId) : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? privateCloudConnection_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: PrivateCloudConnection): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        message.vrfId !== undefined && (obj.vrfId = message.vrfId);
        message.status !== undefined &&
            (obj.status = privateCloudConnection_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateCloudConnection>, I>>(
        object: I,
    ): PrivateCloudConnection {
        const message = { ...basePrivateCloudConnection } as PrivateCloudConnection;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.cloudId = object.cloudId ?? '';
        message.routingInstanceId = object.routingInstanceId ?? '';
        message.vrfId = object.vrfId ?? '';
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
