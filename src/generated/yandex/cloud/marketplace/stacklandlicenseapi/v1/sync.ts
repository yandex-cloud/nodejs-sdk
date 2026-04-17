/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.marketplace.stacklandlicenseapi.v1';

/** Product type enum */
export enum ProductType {
    /** PRODUCT_TYPE_UNSPECIFIED - Unspecified product type. */
    PRODUCT_TYPE_UNSPECIFIED = 0,
    /** PRODUCT_TYPE_STACKLAND - Stackland product. */
    PRODUCT_TYPE_STACKLAND = 1,
    /** PRODUCT_TYPE_DATALENS - DataLens product. */
    PRODUCT_TYPE_DATALENS = 2,
    /** PRODUCT_TYPE_AI_STUDIO - AI Studio product. */
    PRODUCT_TYPE_AI_STUDIO = 3,
    /** PRODUCT_TYPE_SPEECHSENSE - SpeechSense product. */
    PRODUCT_TYPE_SPEECHSENSE = 4,
    /** PRODUCT_TYPE_ROBOTICS_AI - Robotics AI product. */
    PRODUCT_TYPE_ROBOTICS_AI = 5,
    UNRECOGNIZED = -1,
}

export function productTypeFromJSON(object: any): ProductType {
    switch (object) {
        case 0:
        case 'PRODUCT_TYPE_UNSPECIFIED':
            return ProductType.PRODUCT_TYPE_UNSPECIFIED;
        case 1:
        case 'PRODUCT_TYPE_STACKLAND':
            return ProductType.PRODUCT_TYPE_STACKLAND;
        case 2:
        case 'PRODUCT_TYPE_DATALENS':
            return ProductType.PRODUCT_TYPE_DATALENS;
        case 3:
        case 'PRODUCT_TYPE_AI_STUDIO':
            return ProductType.PRODUCT_TYPE_AI_STUDIO;
        case 4:
        case 'PRODUCT_TYPE_SPEECHSENSE':
            return ProductType.PRODUCT_TYPE_SPEECHSENSE;
        case 5:
        case 'PRODUCT_TYPE_ROBOTICS_AI':
            return ProductType.PRODUCT_TYPE_ROBOTICS_AI;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ProductType.UNRECOGNIZED;
    }
}

export function productTypeToJSON(object: ProductType): string {
    switch (object) {
        case ProductType.PRODUCT_TYPE_UNSPECIFIED:
            return 'PRODUCT_TYPE_UNSPECIFIED';
        case ProductType.PRODUCT_TYPE_STACKLAND:
            return 'PRODUCT_TYPE_STACKLAND';
        case ProductType.PRODUCT_TYPE_DATALENS:
            return 'PRODUCT_TYPE_DATALENS';
        case ProductType.PRODUCT_TYPE_AI_STUDIO:
            return 'PRODUCT_TYPE_AI_STUDIO';
        case ProductType.PRODUCT_TYPE_SPEECHSENSE:
            return 'PRODUCT_TYPE_SPEECHSENSE';
        case ProductType.PRODUCT_TYPE_ROBOTICS_AI:
            return 'PRODUCT_TYPE_ROBOTICS_AI';
        default:
            return 'UNKNOWN';
    }
}

/** Sync status enum */
export enum SyncStatus {
    /** SYNC_STATUS_UNSPECIFIED - Unspecified sync status. */
    SYNC_STATUS_UNSPECIFIED = 0,
    /** OK - Sync completed successfully. */
    OK = 1,
    /** WARNING - Sync completed with warnings. */
    WARNING = 2,
    /** ERROR - Sync failed with errors. */
    ERROR = 3,
    UNRECOGNIZED = -1,
}

export function syncStatusFromJSON(object: any): SyncStatus {
    switch (object) {
        case 0:
        case 'SYNC_STATUS_UNSPECIFIED':
            return SyncStatus.SYNC_STATUS_UNSPECIFIED;
        case 1:
        case 'OK':
            return SyncStatus.OK;
        case 2:
        case 'WARNING':
            return SyncStatus.WARNING;
        case 3:
        case 'ERROR':
            return SyncStatus.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SyncStatus.UNRECOGNIZED;
    }
}

export function syncStatusToJSON(object: SyncStatus): string {
    switch (object) {
        case SyncStatus.SYNC_STATUS_UNSPECIFIED:
            return 'SYNC_STATUS_UNSPECIFIED';
        case SyncStatus.OK:
            return 'OK';
        case SyncStatus.WARNING:
            return 'WARNING';
        case SyncStatus.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

/** Usage data entry for a single installation */
export interface UsageEntry {
    /** Installation ID */
    installationId: string;
    /** Product type */
    productType: ProductType;
    /** Usage metric type (e.g., "stackland.vcpu.cores") */
    type: string;
    /** Usage value */
    usage: number;
    /** Timestamp of the usage (client-side timestamp) */
    timestamp?: Date;
    /** Hardware fingerprint for the installation */
    hardwareFingerprint: string;
    /** License ID this usage applies to */
    licenseId: string;
    /** Requested license limit value (optional) */
    requestedValue: number;
    /** Server-side timestamp set by license server */
    serverTimestamp?: Date;
    /** Previous record's hash in the chain (64 hex characters) */
    prevRecordHash: string;
    /** SHA-256 hash of this record (64 hex characters) */
    recordHash: string;
    /** RSA-PSS signature of the record hash (base64-encoded) */
    signature: string;
}

/** License limit for a specific metric type */
export interface LicenseLimit {
    /** Metric type (e.g., "stackland.vcpu.cores") */
    type: string;
    /** Limit value */
    limit: number;
}

/** License information returned by the sync API */
export interface License {
    /** Unique license ID */
    licenseId: string;
    /** Product type this license applies to */
    productType: ProductType;
    /** Organization ID */
    organizationId: string;
    /** Billing account ID */
    billingAccountId: string;
    /** Timestamp when the license was issued */
    issuedAt?: Date;
    /** Timestamp when the license expires */
    validUntil?: Date;
    /** List of limits for this license */
    limits: LicenseLimit[];
    /** Digital signature for this license */
    signature: string;
}

/** Request to synchronize licenses and submit usage data */
export interface SyncRequest {
    /** Organization ID */
    organizationId: string;
    /** Billing account ID */
    billingAccountId: string;
    /** License server ID */
    licenseServerId: string;
    /** Usage data for audit */
    usage: UsageEntry[];
}

/** Result of the sync operation */
export interface SyncUsageResult {
    /** List of licenses for different product types */
    licenses: License[];
    /** Overall sync status */
    syncStatus: SyncStatus;
    /** Optional message (e.g., warnings or errors) */
    message: string;
}

/** Metadata for sync operation */
export interface SyncUsageMetadata {
    /** Organization ID */
    organizationId: string;
    /** Billing account ID */
    billingAccountId: string;
    /** License server ID */
    licenseServerId: string;
}

const baseUsageEntry: object = {
    installationId: '',
    productType: 0,
    type: '',
    usage: 0,
    hardwareFingerprint: '',
    licenseId: '',
    requestedValue: 0,
    prevRecordHash: '',
    recordHash: '',
    signature: '',
};

export const UsageEntry: {
    encode(message: UsageEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsageEntry;
    fromJSON(object: any): UsageEntry;
    toJSON(message: UsageEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UsageEntry>, I>>(object: I): UsageEntry;
} = {
    encode(message: UsageEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.installationId !== '') {
            writer.uint32(10).string(message.installationId);
        }
        if (message.productType !== 0) {
            writer.uint32(16).int32(message.productType);
        }
        if (message.type !== '') {
            writer.uint32(26).string(message.type);
        }
        if (message.usage !== 0) {
            writer.uint32(32).int64(message.usage);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.hardwareFingerprint !== '') {
            writer.uint32(50).string(message.hardwareFingerprint);
        }
        if (message.licenseId !== '') {
            writer.uint32(58).string(message.licenseId);
        }
        if (message.requestedValue !== 0) {
            writer.uint32(64).int64(message.requestedValue);
        }
        if (message.serverTimestamp !== undefined) {
            Timestamp.encode(
                toTimestamp(message.serverTimestamp),
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.prevRecordHash !== '') {
            writer.uint32(82).string(message.prevRecordHash);
        }
        if (message.recordHash !== '') {
            writer.uint32(90).string(message.recordHash);
        }
        if (message.signature !== '') {
            writer.uint32(98).string(message.signature);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UsageEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUsageEntry } as UsageEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.installationId = reader.string();
                    break;
                case 2:
                    message.productType = reader.int32() as any;
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.usage = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.hardwareFingerprint = reader.string();
                    break;
                case 7:
                    message.licenseId = reader.string();
                    break;
                case 8:
                    message.requestedValue = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.serverTimestamp = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 10:
                    message.prevRecordHash = reader.string();
                    break;
                case 11:
                    message.recordHash = reader.string();
                    break;
                case 12:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UsageEntry {
        const message = { ...baseUsageEntry } as UsageEntry;
        message.installationId =
            object.installationId !== undefined && object.installationId !== null
                ? String(object.installationId)
                : '';
        message.productType =
            object.productType !== undefined && object.productType !== null
                ? productTypeFromJSON(object.productType)
                : 0;
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.usage =
            object.usage !== undefined && object.usage !== null ? Number(object.usage) : 0;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        message.hardwareFingerprint =
            object.hardwareFingerprint !== undefined && object.hardwareFingerprint !== null
                ? String(object.hardwareFingerprint)
                : '';
        message.licenseId =
            object.licenseId !== undefined && object.licenseId !== null
                ? String(object.licenseId)
                : '';
        message.requestedValue =
            object.requestedValue !== undefined && object.requestedValue !== null
                ? Number(object.requestedValue)
                : 0;
        message.serverTimestamp =
            object.serverTimestamp !== undefined && object.serverTimestamp !== null
                ? fromJsonTimestamp(object.serverTimestamp)
                : undefined;
        message.prevRecordHash =
            object.prevRecordHash !== undefined && object.prevRecordHash !== null
                ? String(object.prevRecordHash)
                : '';
        message.recordHash =
            object.recordHash !== undefined && object.recordHash !== null
                ? String(object.recordHash)
                : '';
        message.signature =
            object.signature !== undefined && object.signature !== null
                ? String(object.signature)
                : '';
        return message;
    },

    toJSON(message: UsageEntry): unknown {
        const obj: any = {};
        message.installationId !== undefined && (obj.installationId = message.installationId);
        message.productType !== undefined &&
            (obj.productType = productTypeToJSON(message.productType));
        message.type !== undefined && (obj.type = message.type);
        message.usage !== undefined && (obj.usage = Math.round(message.usage));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.hardwareFingerprint !== undefined &&
            (obj.hardwareFingerprint = message.hardwareFingerprint);
        message.licenseId !== undefined && (obj.licenseId = message.licenseId);
        message.requestedValue !== undefined &&
            (obj.requestedValue = Math.round(message.requestedValue));
        message.serverTimestamp !== undefined &&
            (obj.serverTimestamp = message.serverTimestamp.toISOString());
        message.prevRecordHash !== undefined && (obj.prevRecordHash = message.prevRecordHash);
        message.recordHash !== undefined && (obj.recordHash = message.recordHash);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UsageEntry>, I>>(object: I): UsageEntry {
        const message = { ...baseUsageEntry } as UsageEntry;
        message.installationId = object.installationId ?? '';
        message.productType = object.productType ?? 0;
        message.type = object.type ?? '';
        message.usage = object.usage ?? 0;
        message.timestamp = object.timestamp ?? undefined;
        message.hardwareFingerprint = object.hardwareFingerprint ?? '';
        message.licenseId = object.licenseId ?? '';
        message.requestedValue = object.requestedValue ?? 0;
        message.serverTimestamp = object.serverTimestamp ?? undefined;
        message.prevRecordHash = object.prevRecordHash ?? '';
        message.recordHash = object.recordHash ?? '';
        message.signature = object.signature ?? '';
        return message;
    },
};

const baseLicenseLimit: object = { type: '', limit: 0 };

export const LicenseLimit: {
    encode(message: LicenseLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LicenseLimit;
    fromJSON(object: any): LicenseLimit;
    toJSON(message: LicenseLimit): unknown;
    fromPartial<I extends Exact<DeepPartial<LicenseLimit>, I>>(object: I): LicenseLimit;
} = {
    encode(message: LicenseLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.limit !== 0) {
            writer.uint32(16).int64(message.limit);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LicenseLimit {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLicenseLimit } as LicenseLimit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.limit = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LicenseLimit {
        const message = { ...baseLicenseLimit } as LicenseLimit;
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.limit =
            object.limit !== undefined && object.limit !== null ? Number(object.limit) : 0;
        return message;
    },

    toJSON(message: LicenseLimit): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = message.type);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LicenseLimit>, I>>(object: I): LicenseLimit {
        const message = { ...baseLicenseLimit } as LicenseLimit;
        message.type = object.type ?? '';
        message.limit = object.limit ?? 0;
        return message;
    },
};

const baseLicense: object = {
    licenseId: '',
    productType: 0,
    organizationId: '',
    billingAccountId: '',
    signature: '',
};

export const License: {
    encode(message: License, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): License;
    fromJSON(object: any): License;
    toJSON(message: License): unknown;
    fromPartial<I extends Exact<DeepPartial<License>, I>>(object: I): License;
} = {
    encode(message: License, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.licenseId !== '') {
            writer.uint32(10).string(message.licenseId);
        }
        if (message.productType !== 0) {
            writer.uint32(16).int32(message.productType);
        }
        if (message.organizationId !== '') {
            writer.uint32(26).string(message.organizationId);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(34).string(message.billingAccountId);
        }
        if (message.issuedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.issuedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.validUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.validUntil), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.limits) {
            LicenseLimit.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.signature !== '') {
            writer.uint32(66).string(message.signature);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): License {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLicense } as License;
        message.limits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.licenseId = reader.string();
                    break;
                case 2:
                    message.productType = reader.int32() as any;
                    break;
                case 3:
                    message.organizationId = reader.string();
                    break;
                case 4:
                    message.billingAccountId = reader.string();
                    break;
                case 5:
                    message.issuedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.limits.push(LicenseLimit.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): License {
        const message = { ...baseLicense } as License;
        message.licenseId =
            object.licenseId !== undefined && object.licenseId !== null
                ? String(object.licenseId)
                : '';
        message.productType =
            object.productType !== undefined && object.productType !== null
                ? productTypeFromJSON(object.productType)
                : 0;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        message.issuedAt =
            object.issuedAt !== undefined && object.issuedAt !== null
                ? fromJsonTimestamp(object.issuedAt)
                : undefined;
        message.validUntil =
            object.validUntil !== undefined && object.validUntil !== null
                ? fromJsonTimestamp(object.validUntil)
                : undefined;
        message.limits = (object.limits ?? []).map((e: any) => LicenseLimit.fromJSON(e));
        message.signature =
            object.signature !== undefined && object.signature !== null
                ? String(object.signature)
                : '';
        return message;
    },

    toJSON(message: License): unknown {
        const obj: any = {};
        message.licenseId !== undefined && (obj.licenseId = message.licenseId);
        message.productType !== undefined &&
            (obj.productType = productTypeToJSON(message.productType));
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.issuedAt !== undefined && (obj.issuedAt = message.issuedAt.toISOString());
        message.validUntil !== undefined && (obj.validUntil = message.validUntil.toISOString());
        if (message.limits) {
            obj.limits = message.limits.map((e) => (e ? LicenseLimit.toJSON(e) : undefined));
        } else {
            obj.limits = [];
        }
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<License>, I>>(object: I): License {
        const message = { ...baseLicense } as License;
        message.licenseId = object.licenseId ?? '';
        message.productType = object.productType ?? 0;
        message.organizationId = object.organizationId ?? '';
        message.billingAccountId = object.billingAccountId ?? '';
        message.issuedAt = object.issuedAt ?? undefined;
        message.validUntil = object.validUntil ?? undefined;
        message.limits = object.limits?.map((e) => LicenseLimit.fromPartial(e)) || [];
        message.signature = object.signature ?? '';
        return message;
    },
};

const baseSyncRequest: object = { organizationId: '', billingAccountId: '', licenseServerId: '' };

export const SyncRequest: {
    encode(message: SyncRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyncRequest;
    fromJSON(object: any): SyncRequest;
    toJSON(message: SyncRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SyncRequest>, I>>(object: I): SyncRequest;
} = {
    encode(message: SyncRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(18).string(message.billingAccountId);
        }
        if (message.licenseServerId !== '') {
            writer.uint32(26).string(message.licenseServerId);
        }
        for (const v of message.usage) {
            UsageEntry.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SyncRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSyncRequest } as SyncRequest;
        message.usage = [];
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
                    message.licenseServerId = reader.string();
                    break;
                case 4:
                    message.usage.push(UsageEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SyncRequest {
        const message = { ...baseSyncRequest } as SyncRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        message.licenseServerId =
            object.licenseServerId !== undefined && object.licenseServerId !== null
                ? String(object.licenseServerId)
                : '';
        message.usage = (object.usage ?? []).map((e: any) => UsageEntry.fromJSON(e));
        return message;
    },

    toJSON(message: SyncRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.licenseServerId !== undefined && (obj.licenseServerId = message.licenseServerId);
        if (message.usage) {
            obj.usage = message.usage.map((e) => (e ? UsageEntry.toJSON(e) : undefined));
        } else {
            obj.usage = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SyncRequest>, I>>(object: I): SyncRequest {
        const message = { ...baseSyncRequest } as SyncRequest;
        message.organizationId = object.organizationId ?? '';
        message.billingAccountId = object.billingAccountId ?? '';
        message.licenseServerId = object.licenseServerId ?? '';
        message.usage = object.usage?.map((e) => UsageEntry.fromPartial(e)) || [];
        return message;
    },
};

const baseSyncUsageResult: object = { syncStatus: 0, message: '' };

export const SyncUsageResult: {
    encode(message: SyncUsageResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyncUsageResult;
    fromJSON(object: any): SyncUsageResult;
    toJSON(message: SyncUsageResult): unknown;
    fromPartial<I extends Exact<DeepPartial<SyncUsageResult>, I>>(object: I): SyncUsageResult;
} = {
    encode(message: SyncUsageResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.licenses) {
            License.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.syncStatus !== 0) {
            writer.uint32(16).int32(message.syncStatus);
        }
        if (message.message !== '') {
            writer.uint32(26).string(message.message);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SyncUsageResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSyncUsageResult } as SyncUsageResult;
        message.licenses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.licenses.push(License.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.syncStatus = reader.int32() as any;
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SyncUsageResult {
        const message = { ...baseSyncUsageResult } as SyncUsageResult;
        message.licenses = (object.licenses ?? []).map((e: any) => License.fromJSON(e));
        message.syncStatus =
            object.syncStatus !== undefined && object.syncStatus !== null
                ? syncStatusFromJSON(object.syncStatus)
                : 0;
        message.message =
            object.message !== undefined && object.message !== null ? String(object.message) : '';
        return message;
    },

    toJSON(message: SyncUsageResult): unknown {
        const obj: any = {};
        if (message.licenses) {
            obj.licenses = message.licenses.map((e) => (e ? License.toJSON(e) : undefined));
        } else {
            obj.licenses = [];
        }
        message.syncStatus !== undefined && (obj.syncStatus = syncStatusToJSON(message.syncStatus));
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SyncUsageResult>, I>>(object: I): SyncUsageResult {
        const message = { ...baseSyncUsageResult } as SyncUsageResult;
        message.licenses = object.licenses?.map((e) => License.fromPartial(e)) || [];
        message.syncStatus = object.syncStatus ?? 0;
        message.message = object.message ?? '';
        return message;
    },
};

const baseSyncUsageMetadata: object = {
    organizationId: '',
    billingAccountId: '',
    licenseServerId: '',
};

export const SyncUsageMetadata: {
    encode(message: SyncUsageMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyncUsageMetadata;
    fromJSON(object: any): SyncUsageMetadata;
    toJSON(message: SyncUsageMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SyncUsageMetadata>, I>>(object: I): SyncUsageMetadata;
} = {
    encode(message: SyncUsageMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(18).string(message.billingAccountId);
        }
        if (message.licenseServerId !== '') {
            writer.uint32(26).string(message.licenseServerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SyncUsageMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSyncUsageMetadata } as SyncUsageMetadata;
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
                    message.licenseServerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SyncUsageMetadata {
        const message = { ...baseSyncUsageMetadata } as SyncUsageMetadata;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        message.licenseServerId =
            object.licenseServerId !== undefined && object.licenseServerId !== null
                ? String(object.licenseServerId)
                : '';
        return message;
    },

    toJSON(message: SyncUsageMetadata): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.licenseServerId !== undefined && (obj.licenseServerId = message.licenseServerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SyncUsageMetadata>, I>>(object: I): SyncUsageMetadata {
        const message = { ...baseSyncUsageMetadata } as SyncUsageMetadata;
        message.organizationId = object.organizationId ?? '';
        message.billingAccountId = object.billingAccountId ?? '';
        message.licenseServerId = object.licenseServerId ?? '';
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
