/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.k8s.marketplace.v1';

/** A Helm Release. */
export interface HelmRelease {
    /** ID of a helm release. */
    id: string;
    /** ID of the Kubernetes cluster. */
    clusterId: string;
    /** Name of the application. */
    appName: string;
    /** Namespace of the application. */
    appNamespace: string;
    /** Kubernetes marketplace product id. */
    productId: string;
    /** Kubernetes marketplace product name. */
    productName: string;
    /** Kubernetes marketplace product version. */
    productVersion: string;
    /** Status of a helm release. */
    status: HelmRelease_Status;
    /** Creation timestamp. */
    createdAt?: Date;
}

export enum HelmRelease_Status {
    STATUS_UNSPECIFIED = 0,
    /** UNKNOWN - Helm release status is unknown */
    UNKNOWN = 1,
    /** DEPLOYED - Helm release deployed. */
    DEPLOYED = 2,
    /** UNINSTALLED - Helm release uninstalled. */
    UNINSTALLED = 3,
    /** SUPERSEDED - Helm release superseded. */
    SUPERSEDED = 4,
    /** FAILED - Helm release installation failed. */
    FAILED = 5,
    /** UNINSTALLING - Helm release is being uninstalled. */
    UNINSTALLING = 6,
    /** PENDING_INSTALL - Helm release is to be installed. */
    PENDING_INSTALL = 7,
    /** PENDING_UPGRADE - Helm release is to be updated. */
    PENDING_UPGRADE = 8,
    /** PENDING_ROLLBACK - Helm release is to be rolled back. */
    PENDING_ROLLBACK = 9,
    UNRECOGNIZED = -1,
}

export function helmRelease_StatusFromJSON(object: any): HelmRelease_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return HelmRelease_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'UNKNOWN':
            return HelmRelease_Status.UNKNOWN;
        case 2:
        case 'DEPLOYED':
            return HelmRelease_Status.DEPLOYED;
        case 3:
        case 'UNINSTALLED':
            return HelmRelease_Status.UNINSTALLED;
        case 4:
        case 'SUPERSEDED':
            return HelmRelease_Status.SUPERSEDED;
        case 5:
        case 'FAILED':
            return HelmRelease_Status.FAILED;
        case 6:
        case 'UNINSTALLING':
            return HelmRelease_Status.UNINSTALLING;
        case 7:
        case 'PENDING_INSTALL':
            return HelmRelease_Status.PENDING_INSTALL;
        case 8:
        case 'PENDING_UPGRADE':
            return HelmRelease_Status.PENDING_UPGRADE;
        case 9:
        case 'PENDING_ROLLBACK':
            return HelmRelease_Status.PENDING_ROLLBACK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HelmRelease_Status.UNRECOGNIZED;
    }
}

export function helmRelease_StatusToJSON(object: HelmRelease_Status): string {
    switch (object) {
        case HelmRelease_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case HelmRelease_Status.UNKNOWN:
            return 'UNKNOWN';
        case HelmRelease_Status.DEPLOYED:
            return 'DEPLOYED';
        case HelmRelease_Status.UNINSTALLED:
            return 'UNINSTALLED';
        case HelmRelease_Status.SUPERSEDED:
            return 'SUPERSEDED';
        case HelmRelease_Status.FAILED:
            return 'FAILED';
        case HelmRelease_Status.UNINSTALLING:
            return 'UNINSTALLING';
        case HelmRelease_Status.PENDING_INSTALL:
            return 'PENDING_INSTALL';
        case HelmRelease_Status.PENDING_UPGRADE:
            return 'PENDING_UPGRADE';
        case HelmRelease_Status.PENDING_ROLLBACK:
            return 'PENDING_ROLLBACK';
        default:
            return 'UNKNOWN';
    }
}

const baseHelmRelease: object = {
    id: '',
    clusterId: '',
    appName: '',
    appNamespace: '',
    productId: '',
    productName: '',
    productVersion: '',
    status: 0,
};

export const HelmRelease = {
    encode(message: HelmRelease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.appName !== '') {
            writer.uint32(26).string(message.appName);
        }
        if (message.appNamespace !== '') {
            writer.uint32(34).string(message.appNamespace);
        }
        if (message.productId !== '') {
            writer.uint32(42).string(message.productId);
        }
        if (message.productName !== '') {
            writer.uint32(50).string(message.productName);
        }
        if (message.productVersion !== '') {
            writer.uint32(82).string(message.productVersion);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HelmRelease {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHelmRelease } as HelmRelease;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.appName = reader.string();
                    break;
                case 4:
                    message.appNamespace = reader.string();
                    break;
                case 5:
                    message.productId = reader.string();
                    break;
                case 6:
                    message.productName = reader.string();
                    break;
                case 10:
                    message.productVersion = reader.string();
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HelmRelease {
        const message = { ...baseHelmRelease } as HelmRelease;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.appName =
            object.appName !== undefined && object.appName !== null ? String(object.appName) : '';
        message.appNamespace =
            object.appNamespace !== undefined && object.appNamespace !== null
                ? String(object.appNamespace)
                : '';
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? String(object.productId)
                : '';
        message.productName =
            object.productName !== undefined && object.productName !== null
                ? String(object.productName)
                : '';
        message.productVersion =
            object.productVersion !== undefined && object.productVersion !== null
                ? String(object.productVersion)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? helmRelease_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: HelmRelease): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.appName !== undefined && (obj.appName = message.appName);
        message.appNamespace !== undefined && (obj.appNamespace = message.appNamespace);
        message.productId !== undefined && (obj.productId = message.productId);
        message.productName !== undefined && (obj.productName = message.productName);
        message.productVersion !== undefined && (obj.productVersion = message.productVersion);
        message.status !== undefined && (obj.status = helmRelease_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HelmRelease>, I>>(object: I): HelmRelease {
        const message = { ...baseHelmRelease } as HelmRelease;
        message.id = object.id ?? '';
        message.clusterId = object.clusterId ?? '';
        message.appName = object.appName ?? '';
        message.appNamespace = object.appNamespace ?? '';
        message.productId = object.productId ?? '';
        message.productName = object.productName ?? '';
        message.productVersion = object.productVersion ?? '';
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
