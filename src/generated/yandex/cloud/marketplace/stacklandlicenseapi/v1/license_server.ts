/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.marketplace.stacklandlicenseapi.v1';

/** License server metadata */
export interface LicenseServerMetadata {
    /** Custom labels for the license server */
    labels: { [key: string]: string };
}

export interface LicenseServerMetadata_LabelsEntry {
    key: string;
    value: string;
}

/** Request to register a license server */
export interface RegisterRequest {
    /** Organization ID */
    organizationId: string;
    /** Billing account ID */
    billingAccountId: string;
    /** Optional metadata for the license server */
    metadata?: LicenseServerMetadata;
}

/** License server entity */
export interface LicenseServer {
    /** Unique server ID */
    serverId: string;
    /** License server CA certificate */
    lsCaCertificate: string;
    /** Private key for the license server */
    lsPrivateKey: string;
    /** Timestamp when the credentials expire */
    validUntil?: Date;
    /** PEM-encoded PKIX public key for verifying license signatures */
    lsSigningPublicKey: string;
}

/** Metadata for register license server operation */
export interface RegisterLicenseServerMetadata {
    /** Organization ID */
    organizationId: string;
    /** Billing account ID */
    billingAccountId: string;
}

const baseLicenseServerMetadata: object = {};

export const LicenseServerMetadata: {
    encode(message: LicenseServerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LicenseServerMetadata;
    fromJSON(object: any): LicenseServerMetadata;
    toJSON(message: LicenseServerMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<LicenseServerMetadata>, I>>(object: I): LicenseServerMetadata;
} = {
    encode(message: LicenseServerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        Object.entries(message.labels).forEach(([key, value]) => {
            LicenseServerMetadata_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LicenseServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLicenseServerMetadata } as LicenseServerMetadata;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = LicenseServerMetadata_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry1.value !== undefined) {
                        message.labels[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LicenseServerMetadata {
        const message = { ...baseLicenseServerMetadata } as LicenseServerMetadata;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: LicenseServerMetadata): unknown {
        const obj: any = {};
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LicenseServerMetadata>, I>>(
        object: I,
    ): LicenseServerMetadata {
        const message = { ...baseLicenseServerMetadata } as LicenseServerMetadata;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseLicenseServerMetadata_LabelsEntry: object = { key: '', value: '' };

export const LicenseServerMetadata_LabelsEntry: {
    encode(message: LicenseServerMetadata_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LicenseServerMetadata_LabelsEntry;
    fromJSON(object: any): LicenseServerMetadata_LabelsEntry;
    toJSON(message: LicenseServerMetadata_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<LicenseServerMetadata_LabelsEntry>, I>>(object: I): LicenseServerMetadata_LabelsEntry;
} = {
    encode(
        message: LicenseServerMetadata_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LicenseServerMetadata_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLicenseServerMetadata_LabelsEntry,
        } as LicenseServerMetadata_LabelsEntry;
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

    fromJSON(object: any): LicenseServerMetadata_LabelsEntry {
        const message = {
            ...baseLicenseServerMetadata_LabelsEntry,
        } as LicenseServerMetadata_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: LicenseServerMetadata_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LicenseServerMetadata_LabelsEntry>, I>>(
        object: I,
    ): LicenseServerMetadata_LabelsEntry {
        const message = {
            ...baseLicenseServerMetadata_LabelsEntry,
        } as LicenseServerMetadata_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseRegisterRequest: object = { organizationId: '', billingAccountId: '' };

export const RegisterRequest: {
    encode(message: RegisterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest;
    fromJSON(object: any): RegisterRequest;
    toJSON(message: RegisterRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<RegisterRequest>, I>>(object: I): RegisterRequest;
} = {
    encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(18).string(message.billingAccountId);
        }
        if (message.metadata !== undefined) {
            LicenseServerMetadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegisterRequest } as RegisterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.billingAccountId = reader.string();
                    break;
                case 3:
                    message.metadata = LicenseServerMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RegisterRequest {
        const message = { ...baseRegisterRequest } as RegisterRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? LicenseServerMetadata.fromJSON(object.metadata)
                : undefined;
        return message;
    },

    toJSON(message: RegisterRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? LicenseServerMetadata.toJSON(message.metadata)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RegisterRequest>, I>>(object: I): RegisterRequest {
        const message = { ...baseRegisterRequest } as RegisterRequest;
        message.organizationId = object.organizationId ?? '';
        message.billingAccountId = object.billingAccountId ?? '';
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? LicenseServerMetadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
};

const baseLicenseServer: object = {
    serverId: '',
    lsCaCertificate: '',
    lsPrivateKey: '',
    lsSigningPublicKey: '',
};

export const LicenseServer: {
    encode(message: LicenseServer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LicenseServer;
    fromJSON(object: any): LicenseServer;
    toJSON(message: LicenseServer): unknown;
    fromPartial<I extends Exact<DeepPartial<LicenseServer>, I>>(object: I): LicenseServer;
} = {
    encode(message: LicenseServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverId !== '') {
            writer.uint32(10).string(message.serverId);
        }
        if (message.lsCaCertificate !== '') {
            writer.uint32(18).string(message.lsCaCertificate);
        }
        if (message.lsPrivateKey !== '') {
            writer.uint32(26).string(message.lsPrivateKey);
        }
        if (message.validUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.validUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.lsSigningPublicKey !== '') {
            writer.uint32(42).string(message.lsSigningPublicKey);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LicenseServer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLicenseServer } as LicenseServer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.string();
                    break;
                case 2:
                    message.lsCaCertificate = reader.string();
                    break;
                case 3:
                    message.lsPrivateKey = reader.string();
                    break;
                case 4:
                    message.validUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lsSigningPublicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LicenseServer {
        const message = { ...baseLicenseServer } as LicenseServer;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        message.lsCaCertificate =
            object.lsCaCertificate !== undefined && object.lsCaCertificate !== null
                ? String(object.lsCaCertificate)
                : '';
        message.lsPrivateKey =
            object.lsPrivateKey !== undefined && object.lsPrivateKey !== null
                ? String(object.lsPrivateKey)
                : '';
        message.validUntil =
            object.validUntil !== undefined && object.validUntil !== null
                ? fromJsonTimestamp(object.validUntil)
                : undefined;
        message.lsSigningPublicKey =
            object.lsSigningPublicKey !== undefined && object.lsSigningPublicKey !== null
                ? String(object.lsSigningPublicKey)
                : '';
        return message;
    },

    toJSON(message: LicenseServer): unknown {
        const obj: any = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        message.lsCaCertificate !== undefined && (obj.lsCaCertificate = message.lsCaCertificate);
        message.lsPrivateKey !== undefined && (obj.lsPrivateKey = message.lsPrivateKey);
        message.validUntil !== undefined && (obj.validUntil = message.validUntil.toISOString());
        message.lsSigningPublicKey !== undefined &&
            (obj.lsSigningPublicKey = message.lsSigningPublicKey);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LicenseServer>, I>>(object: I): LicenseServer {
        const message = { ...baseLicenseServer } as LicenseServer;
        message.serverId = object.serverId ?? '';
        message.lsCaCertificate = object.lsCaCertificate ?? '';
        message.lsPrivateKey = object.lsPrivateKey ?? '';
        message.validUntil = object.validUntil ?? undefined;
        message.lsSigningPublicKey = object.lsSigningPublicKey ?? '';
        return message;
    },
};

const baseRegisterLicenseServerMetadata: object = { organizationId: '', billingAccountId: '' };

export const RegisterLicenseServerMetadata: {
    encode(message: RegisterLicenseServerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterLicenseServerMetadata;
    fromJSON(object: any): RegisterLicenseServerMetadata;
    toJSON(message: RegisterLicenseServerMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<RegisterLicenseServerMetadata>, I>>(object: I): RegisterLicenseServerMetadata;
} = {
    encode(
        message: RegisterLicenseServerMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(18).string(message.billingAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterLicenseServerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegisterLicenseServerMetadata } as RegisterLicenseServerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.billingAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RegisterLicenseServerMetadata {
        const message = { ...baseRegisterLicenseServerMetadata } as RegisterLicenseServerMetadata;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        return message;
    },

    toJSON(message: RegisterLicenseServerMetadata): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RegisterLicenseServerMetadata>, I>>(
        object: I,
    ): RegisterLicenseServerMetadata {
        const message = { ...baseRegisterLicenseServerMetadata } as RegisterLicenseServerMetadata;
        message.organizationId = object.organizationId ?? '';
        message.billingAccountId = object.billingAccountId ?? '';
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
