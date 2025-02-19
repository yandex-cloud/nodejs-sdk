/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.iam.v1.workload.oidc';

/** A OIDC workload identity federation. */
export interface Federation {
    /** Id of the OIDC workload identity federation. */
    id: string;
    /**
     * Name of the OIDC workload identity federation
     * The name is unique within the folder. 3-63 characters long.
     */
    name: string;
    /** ID of the folder that the OIDC workload identity federation belongs to. */
    folderId: string;
    /** Description of the service account. 0-256 characters long. */
    description: string;
    /**
     * True - the OIDC workload identity federation is enabled and can be used for authentication.
     * False - the OIDC workload identity federation is disabled and cannot be used for authentication.
     */
    enabled: boolean;
    /** List of trusted values for aud claim. */
    audiences: string[];
    /** URL of the external IdP server to be used for authentication. */
    issuer: string;
    /** URL reference to trusted keys in format of JSON Web Key Set. */
    jwksUrl: string;
    /** Resource labels as `` key:value `` pairs */
    labels: { [key: string]: string };
    /** Creation timestamp. */
    createdAt?: Date;
}

export interface Federation_LabelsEntry {
    key: string;
    value: string;
}

const baseFederation: object = {
    id: '',
    name: '',
    folderId: '',
    description: '',
    enabled: false,
    audiences: '',
    issuer: '',
    jwksUrl: '',
};

export const Federation = {
    encode(message: Federation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.enabled === true) {
            writer.uint32(40).bool(message.enabled);
        }
        for (const v of message.audiences) {
            writer.uint32(50).string(v!);
        }
        if (message.issuer !== '') {
            writer.uint32(58).string(message.issuer);
        }
        if (message.jwksUrl !== '') {
            writer.uint32(66).string(message.jwksUrl);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Federation_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(74).fork(),
            ).ldelim();
        });
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Federation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederation } as Federation;
        message.audiences = [];
        message.labels = {};
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
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.enabled = reader.bool();
                    break;
                case 6:
                    message.audiences.push(reader.string());
                    break;
                case 7:
                    message.issuer = reader.string();
                    break;
                case 8:
                    message.jwksUrl = reader.string();
                    break;
                case 9:
                    const entry9 = Federation_LabelsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.labels[entry9.key] = entry9.value;
                    }
                    break;
                case 10:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Federation {
        const message = { ...baseFederation } as Federation;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.audiences = (object.audiences ?? []).map((e: any) => String(e));
        message.issuer =
            object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : '';
        message.jwksUrl =
            object.jwksUrl !== undefined && object.jwksUrl !== null ? String(object.jwksUrl) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: Federation): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.description !== undefined && (obj.description = message.description);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        if (message.audiences) {
            obj.audiences = message.audiences.map((e) => e);
        } else {
            obj.audiences = [];
        }
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.jwksUrl !== undefined && (obj.jwksUrl = message.jwksUrl);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Federation>, I>>(object: I): Federation {
        const message = { ...baseFederation } as Federation;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.folderId = object.folderId ?? '';
        message.description = object.description ?? '';
        message.enabled = object.enabled ?? false;
        message.audiences = object.audiences?.map((e) => e) || [];
        message.issuer = object.issuer ?? '';
        message.jwksUrl = object.jwksUrl ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
};

const baseFederation_LabelsEntry: object = { key: '', value: '' };

export const Federation_LabelsEntry = {
    encode(message: Federation_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Federation_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederation_LabelsEntry } as Federation_LabelsEntry;
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

    fromJSON(object: any): Federation_LabelsEntry {
        const message = { ...baseFederation_LabelsEntry } as Federation_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Federation_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Federation_LabelsEntry>, I>>(
        object: I,
    ): Federation_LabelsEntry {
        const message = { ...baseFederation_LabelsEntry } as Federation_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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
