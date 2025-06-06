/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.marketplace.pim.v1.saas';

export enum State {
    STATE_UNSPECIFIED = 0,
    /** ACTIVATED - Product instance is activated. */
    ACTIVATED = 1,
    /** DEACTIVATED - Product instance is deactivated. */
    DEACTIVATED = 2,
    /** PENDING_ACTIVATION - Product instance is pending activation. */
    PENDING_ACTIVATION = 3,
    /** DEPRECATED - Product instance is deprecated. */
    DEPRECATED = 4,
    /** DELETED - Product instance is deleted. */
    DELETED = 5,
    UNRECOGNIZED = -1,
}

export function stateFromJSON(object: any): State {
    switch (object) {
        case 0:
        case 'STATE_UNSPECIFIED':
            return State.STATE_UNSPECIFIED;
        case 1:
        case 'ACTIVATED':
            return State.ACTIVATED;
        case 2:
        case 'DEACTIVATED':
            return State.DEACTIVATED;
        case 3:
        case 'PENDING_ACTIVATION':
            return State.PENDING_ACTIVATION;
        case 4:
        case 'DEPRECATED':
            return State.DEPRECATED;
        case 5:
        case 'DELETED':
            return State.DELETED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return State.UNRECOGNIZED;
    }
}

export function stateToJSON(object: State): string {
    switch (object) {
        case State.STATE_UNSPECIFIED:
            return 'STATE_UNSPECIFIED';
        case State.ACTIVATED:
            return 'ACTIVATED';
        case State.DEACTIVATED:
            return 'DEACTIVATED';
        case State.PENDING_ACTIVATION:
            return 'PENDING_ACTIVATION';
        case State.DEPRECATED:
            return 'DEPRECATED';
        case State.DELETED:
            return 'DELETED';
        default:
            return 'UNKNOWN';
    }
}

export enum ResourceType {
    RESOURCE_TYPE_UNSPECIFIED = 0,
    /** SAAS - SaaS resource. */
    SAAS = 1,
    /** K8S - Kubernetes resource. */
    K8S = 2,
    /** COMPUTE - Compute resource. */
    COMPUTE = 3,
    /** CLOUD_APPS - Cloud Apps resource. */
    CLOUD_APPS = 4,
    UNRECOGNIZED = -1,
}

export function resourceTypeFromJSON(object: any): ResourceType {
    switch (object) {
        case 0:
        case 'RESOURCE_TYPE_UNSPECIFIED':
            return ResourceType.RESOURCE_TYPE_UNSPECIFIED;
        case 1:
        case 'SAAS':
            return ResourceType.SAAS;
        case 2:
        case 'K8S':
            return ResourceType.K8S;
        case 3:
        case 'COMPUTE':
            return ResourceType.COMPUTE;
        case 4:
        case 'CLOUD_APPS':
            return ResourceType.CLOUD_APPS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ResourceType.UNRECOGNIZED;
    }
}

export function resourceTypeToJSON(object: ResourceType): string {
    switch (object) {
        case ResourceType.RESOURCE_TYPE_UNSPECIFIED:
            return 'RESOURCE_TYPE_UNSPECIFIED';
        case ResourceType.SAAS:
            return 'SAAS';
        case ResourceType.K8S:
            return 'K8S';
        case ResourceType.COMPUTE:
            return 'COMPUTE';
        case ResourceType.CLOUD_APPS:
            return 'CLOUD_APPS';
        default:
            return 'UNKNOWN';
    }
}

export interface ProductInstance {
    /** ID of the product instance. */
    id: string;
    /** ID of the resource. */
    resourceId: string;
    /** Type of the resource. */
    resourceType: ResourceType;
    /** Metadata of the resource; Reserved for future use. */
    resourceMetadata: { [key: string]: string };
    /** State of the product instance. */
    state: State;
    /** Creation timestamp */
    createdAt?: Date;
    /** Update timestamp */
    updatedAt?: Date;
    saasInfo?: SaasInfo | undefined;
}

export interface ProductInstance_ResourceMetadataEntry {
    key: string;
    value: string;
}

export interface SaasInfo {
    /** ID of the SaaS resource. */
    id: string;
    /** Additional data about the SaaS resource. */
    data: { [key: string]: string };
}

export interface SaasInfo_DataEntry {
    key: string;
    value: string;
}

const baseProductInstance: object = { id: '', resourceId: '', resourceType: 0, state: 0 };

export const ProductInstance = {
    encode(message: ProductInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.resourceId !== '') {
            writer.uint32(18).string(message.resourceId);
        }
        if (message.resourceType !== 0) {
            writer.uint32(24).int32(message.resourceType);
        }
        Object.entries(message.resourceMetadata).forEach(([key, value]) => {
            ProductInstance_ResourceMetadataEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.state !== 0) {
            writer.uint32(40).int32(message.state);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.saasInfo !== undefined) {
            SaasInfo.encode(message.saasInfo, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProductInstance {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProductInstance } as ProductInstance;
        message.resourceMetadata = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                case 3:
                    message.resourceType = reader.int32() as any;
                    break;
                case 4:
                    const entry4 = ProductInstance_ResourceMetadataEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.resourceMetadata[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.state = reader.int32() as any;
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.saasInfo = SaasInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProductInstance {
        const message = { ...baseProductInstance } as ProductInstance;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.resourceType =
            object.resourceType !== undefined && object.resourceType !== null
                ? resourceTypeFromJSON(object.resourceType)
                : 0;
        message.resourceMetadata = Object.entries(object.resourceMetadata ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.state =
            object.state !== undefined && object.state !== null ? stateFromJSON(object.state) : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.saasInfo =
            object.saasInfo !== undefined && object.saasInfo !== null
                ? SaasInfo.fromJSON(object.saasInfo)
                : undefined;
        return message;
    },

    toJSON(message: ProductInstance): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.resourceType !== undefined &&
            (obj.resourceType = resourceTypeToJSON(message.resourceType));
        obj.resourceMetadata = {};
        if (message.resourceMetadata) {
            Object.entries(message.resourceMetadata).forEach(([k, v]) => {
                obj.resourceMetadata[k] = v;
            });
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.saasInfo !== undefined &&
            (obj.saasInfo = message.saasInfo ? SaasInfo.toJSON(message.saasInfo) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProductInstance>, I>>(object: I): ProductInstance {
        const message = { ...baseProductInstance } as ProductInstance;
        message.id = object.id ?? '';
        message.resourceId = object.resourceId ?? '';
        message.resourceType = object.resourceType ?? 0;
        message.resourceMetadata = Object.entries(object.resourceMetadata ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.state = object.state ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.saasInfo =
            object.saasInfo !== undefined && object.saasInfo !== null
                ? SaasInfo.fromPartial(object.saasInfo)
                : undefined;
        return message;
    },
};

const baseProductInstance_ResourceMetadataEntry: object = { key: '', value: '' };

export const ProductInstance_ResourceMetadataEntry = {
    encode(
        message: ProductInstance_ResourceMetadataEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ProductInstance_ResourceMetadataEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseProductInstance_ResourceMetadataEntry,
        } as ProductInstance_ResourceMetadataEntry;
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

    fromJSON(object: any): ProductInstance_ResourceMetadataEntry {
        const message = {
            ...baseProductInstance_ResourceMetadataEntry,
        } as ProductInstance_ResourceMetadataEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ProductInstance_ResourceMetadataEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProductInstance_ResourceMetadataEntry>, I>>(
        object: I,
    ): ProductInstance_ResourceMetadataEntry {
        const message = {
            ...baseProductInstance_ResourceMetadataEntry,
        } as ProductInstance_ResourceMetadataEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseSaasInfo: object = { id: '' };

export const SaasInfo = {
    encode(message: SaasInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        Object.entries(message.data).forEach(([key, value]) => {
            SaasInfo_DataEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SaasInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSaasInfo } as SaasInfo;
        message.data = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    const entry2 = SaasInfo_DataEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.data[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SaasInfo {
        const message = { ...baseSaasInfo } as SaasInfo;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: SaasInfo): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        obj.data = {};
        if (message.data) {
            Object.entries(message.data).forEach(([k, v]) => {
                obj.data[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SaasInfo>, I>>(object: I): SaasInfo {
        const message = { ...baseSaasInfo } as SaasInfo;
        message.id = object.id ?? '';
        message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>(
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

const baseSaasInfo_DataEntry: object = { key: '', value: '' };

export const SaasInfo_DataEntry = {
    encode(message: SaasInfo_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SaasInfo_DataEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSaasInfo_DataEntry } as SaasInfo_DataEntry;
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

    fromJSON(object: any): SaasInfo_DataEntry {
        const message = { ...baseSaasInfo_DataEntry } as SaasInfo_DataEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: SaasInfo_DataEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SaasInfo_DataEntry>, I>>(
        object: I,
    ): SaasInfo_DataEntry {
        const message = { ...baseSaasInfo_DataEntry } as SaasInfo_DataEntry;
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
