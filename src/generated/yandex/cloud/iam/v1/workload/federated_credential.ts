/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.iam.v1.workload';

/** A federated credential. */
export interface FederatedCredential {
    $type: 'yandex.cloud.iam.v1.workload.FederatedCredential';
    /** Id of the federated credential. */
    id: string;
    /** Id of the service account that the federated credential belongs to. */
    serviceAccountId: string;
    /** ID of the workload identity federation which is used for authentication. */
    federationId: string;
    /** Id of the external subject. */
    externalSubjectId: string;
    /** Creation timestamp. */
    createdAt?: Date;
}

const baseFederatedCredential: object = {
    $type: 'yandex.cloud.iam.v1.workload.FederatedCredential',
    id: '',
    serviceAccountId: '',
    federationId: '',
    externalSubjectId: '',
};

export const FederatedCredential = {
    $type: 'yandex.cloud.iam.v1.workload.FederatedCredential' as const,

    encode(message: FederatedCredential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(18).string(message.serviceAccountId);
        }
        if (message.federationId !== '') {
            writer.uint32(26).string(message.federationId);
        }
        if (message.externalSubjectId !== '') {
            writer.uint32(34).string(message.externalSubjectId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FederatedCredential {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederatedCredential } as FederatedCredential;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                case 3:
                    message.federationId = reader.string();
                    break;
                case 4:
                    message.externalSubjectId = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FederatedCredential {
        const message = { ...baseFederatedCredential } as FederatedCredential;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : '';
        message.externalSubjectId =
            object.externalSubjectId !== undefined && object.externalSubjectId !== null
                ? String(object.externalSubjectId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: FederatedCredential): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.federationId !== undefined && (obj.federationId = message.federationId);
        message.externalSubjectId !== undefined &&
            (obj.externalSubjectId = message.externalSubjectId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FederatedCredential>, I>>(
        object: I,
    ): FederatedCredential {
        const message = { ...baseFederatedCredential } as FederatedCredential;
        message.id = object.id ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.federationId = object.federationId ?? '';
        message.externalSubjectId = object.externalSubjectId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(FederatedCredential.$type, FederatedCredential);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
