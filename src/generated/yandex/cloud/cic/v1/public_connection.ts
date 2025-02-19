/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Peering } from '../../../../yandex/cloud/cic/v1/peering';
import { Int64Value } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.cic.v1';

/** A PublicConnection resource. */
export interface PublicConnection {
    /** ID of the publicConnection. */
    id: string;
    /**
     * Name of the publicConnection.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the publicConnection. 0-256 characters long. */
    description: string;
    /** ID of the folder that the publicConnection belongs to. */
    folderId: string;
    /** ID of the region that the publicConnection belongs to. */
    regionId: string;
    /** ID of the trunk_connection that the publicConnection belongs to. */
    trunkConnectionId: string;
    /**
     * VLAN_ID that the privateConnection uses in multiplexing.
     * Not used in connections over partners-II
     * Value range: [1, 4095]
     */
    vlanId?: number;
    /** IPv4 peering config of connection */
    ipv4Peering?: Peering;
    /** Cloud services that the publicConnection connects to. */
    ipv4AllowedServiceTypes: PublicConnection_CloudServiceType[];
    /**
     * IPv4 Peer Announced Prefixes
     * It's an list of ip with format ipPrefix/length where address part of ipPrefix is 0
     */
    ipv4PeerAnnouncedPrefixes: string[];
    /**
     * Resource labels, `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
     */
    labels: { [key: string]: string };
}

export enum PublicConnection_CloudServiceType {
    CLOUD_SERVICE_TYPE_UNSPECIFIED = 0,
    /** @deprecated */
    CLOUD_SERVICE_YANDEX = 1,
    CLOUD_SERVICE_ALL_PUBLIC = 2,
    CLOUD_SERVICE_S3 = 3,
    CLOUD_SERVICE_ML = 4,
    CLOUD_SERVICE_APIGW = 5,
    CLOUD_SERVICE_CONTAINER_REGISTRY = 6,
    CLOUD_SERVICE_CONSOLE = 7,
    CLOUD_SERVICE_MONITORING = 8,
    CLOUD_SERVICE_YANDEX_GPT = 9,
    CLOUD_SERVICES_ALL_API_ENDPOINT = 10,
    CLOUD_SERVICE_YMQ = 11,
    UNRECOGNIZED = -1,
}

export function publicConnection_CloudServiceTypeFromJSON(
    object: any,
): PublicConnection_CloudServiceType {
    switch (object) {
        case 0:
        case 'CLOUD_SERVICE_TYPE_UNSPECIFIED':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case 'CLOUD_SERVICE_YANDEX':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_YANDEX;
        case 2:
        case 'CLOUD_SERVICE_ALL_PUBLIC':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_ALL_PUBLIC;
        case 3:
        case 'CLOUD_SERVICE_S3':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_S3;
        case 4:
        case 'CLOUD_SERVICE_ML':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_ML;
        case 5:
        case 'CLOUD_SERVICE_APIGW':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_APIGW;
        case 6:
        case 'CLOUD_SERVICE_CONTAINER_REGISTRY':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_CONTAINER_REGISTRY;
        case 7:
        case 'CLOUD_SERVICE_CONSOLE':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_CONSOLE;
        case 8:
        case 'CLOUD_SERVICE_MONITORING':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_MONITORING;
        case 9:
        case 'CLOUD_SERVICE_YANDEX_GPT':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_YANDEX_GPT;
        case 10:
        case 'CLOUD_SERVICES_ALL_API_ENDPOINT':
            return PublicConnection_CloudServiceType.CLOUD_SERVICES_ALL_API_ENDPOINT;
        case 11:
        case 'CLOUD_SERVICE_YMQ':
            return PublicConnection_CloudServiceType.CLOUD_SERVICE_YMQ;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PublicConnection_CloudServiceType.UNRECOGNIZED;
    }
}

export function publicConnection_CloudServiceTypeToJSON(
    object: PublicConnection_CloudServiceType,
): string {
    switch (object) {
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_TYPE_UNSPECIFIED:
            return 'CLOUD_SERVICE_TYPE_UNSPECIFIED';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_YANDEX:
            return 'CLOUD_SERVICE_YANDEX';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_ALL_PUBLIC:
            return 'CLOUD_SERVICE_ALL_PUBLIC';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_S3:
            return 'CLOUD_SERVICE_S3';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_ML:
            return 'CLOUD_SERVICE_ML';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_APIGW:
            return 'CLOUD_SERVICE_APIGW';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_CONTAINER_REGISTRY:
            return 'CLOUD_SERVICE_CONTAINER_REGISTRY';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_CONSOLE:
            return 'CLOUD_SERVICE_CONSOLE';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_MONITORING:
            return 'CLOUD_SERVICE_MONITORING';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_YANDEX_GPT:
            return 'CLOUD_SERVICE_YANDEX_GPT';
        case PublicConnection_CloudServiceType.CLOUD_SERVICES_ALL_API_ENDPOINT:
            return 'CLOUD_SERVICES_ALL_API_ENDPOINT';
        case PublicConnection_CloudServiceType.CLOUD_SERVICE_YMQ:
            return 'CLOUD_SERVICE_YMQ';
        default:
            return 'UNKNOWN';
    }
}

export interface PublicConnection_LabelsEntry {
    key: string;
    value: string;
}

const basePublicConnection: object = {
    id: '',
    name: '',
    description: '',
    folderId: '',
    regionId: '',
    trunkConnectionId: '',
    ipv4AllowedServiceTypes: 0,
    ipv4PeerAnnouncedPrefixes: '',
};

export const PublicConnection = {
    encode(message: PublicConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        if (message.regionId !== '') {
            writer.uint32(50).string(message.regionId);
        }
        if (message.trunkConnectionId !== '') {
            writer.uint32(58).string(message.trunkConnectionId);
        }
        if (message.vlanId !== undefined) {
            Int64Value.encode({ value: message.vlanId! }, writer.uint32(66).fork()).ldelim();
        }
        if (message.ipv4Peering !== undefined) {
            Peering.encode(message.ipv4Peering, writer.uint32(74).fork()).ldelim();
        }
        writer.uint32(90).fork();
        for (const v of message.ipv4AllowedServiceTypes) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.ipv4PeerAnnouncedPrefixes) {
            writer.uint32(106).string(v!);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            PublicConnection_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(146).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublicConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublicConnection } as PublicConnection;
        message.ipv4AllowedServiceTypes = [];
        message.ipv4PeerAnnouncedPrefixes = [];
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
                    message.description = reader.string();
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.regionId = reader.string();
                    break;
                case 7:
                    message.trunkConnectionId = reader.string();
                    break;
                case 8:
                    message.vlanId = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.ipv4Peering = Peering.decode(reader, reader.uint32());
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ipv4AllowedServiceTypes.push(reader.int32() as any);
                        }
                    } else {
                        message.ipv4AllowedServiceTypes.push(reader.int32() as any);
                    }
                    break;
                case 13:
                    message.ipv4PeerAnnouncedPrefixes.push(reader.string());
                    break;
                case 18:
                    const entry18 = PublicConnection_LabelsEntry.decode(reader, reader.uint32());
                    if (entry18.value !== undefined) {
                        message.labels[entry18.key] = entry18.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PublicConnection {
        const message = { ...basePublicConnection } as PublicConnection;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : '';
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        message.vlanId =
            object.vlanId !== undefined && object.vlanId !== null
                ? Number(object.vlanId)
                : undefined;
        message.ipv4Peering =
            object.ipv4Peering !== undefined && object.ipv4Peering !== null
                ? Peering.fromJSON(object.ipv4Peering)
                : undefined;
        message.ipv4AllowedServiceTypes = (object.ipv4AllowedServiceTypes ?? []).map((e: any) =>
            publicConnection_CloudServiceTypeFromJSON(e),
        );
        message.ipv4PeerAnnouncedPrefixes = (object.ipv4PeerAnnouncedPrefixes ?? []).map((e: any) =>
            String(e),
        );
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: PublicConnection): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        message.vlanId !== undefined && (obj.vlanId = message.vlanId);
        message.ipv4Peering !== undefined &&
            (obj.ipv4Peering = message.ipv4Peering
                ? Peering.toJSON(message.ipv4Peering)
                : undefined);
        if (message.ipv4AllowedServiceTypes) {
            obj.ipv4AllowedServiceTypes = message.ipv4AllowedServiceTypes.map((e) =>
                publicConnection_CloudServiceTypeToJSON(e),
            );
        } else {
            obj.ipv4AllowedServiceTypes = [];
        }
        if (message.ipv4PeerAnnouncedPrefixes) {
            obj.ipv4PeerAnnouncedPrefixes = message.ipv4PeerAnnouncedPrefixes.map((e) => e);
        } else {
            obj.ipv4PeerAnnouncedPrefixes = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublicConnection>, I>>(object: I): PublicConnection {
        const message = { ...basePublicConnection } as PublicConnection;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.folderId = object.folderId ?? '';
        message.regionId = object.regionId ?? '';
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        message.vlanId = object.vlanId ?? undefined;
        message.ipv4Peering =
            object.ipv4Peering !== undefined && object.ipv4Peering !== null
                ? Peering.fromPartial(object.ipv4Peering)
                : undefined;
        message.ipv4AllowedServiceTypes = object.ipv4AllowedServiceTypes?.map((e) => e) || [];
        message.ipv4PeerAnnouncedPrefixes = object.ipv4PeerAnnouncedPrefixes?.map((e) => e) || [];
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

const basePublicConnection_LabelsEntry: object = { key: '', value: '' };

export const PublicConnection_LabelsEntry = {
    encode(
        message: PublicConnection_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): PublicConnection_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublicConnection_LabelsEntry } as PublicConnection_LabelsEntry;
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

    fromJSON(object: any): PublicConnection_LabelsEntry {
        const message = { ...basePublicConnection_LabelsEntry } as PublicConnection_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: PublicConnection_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublicConnection_LabelsEntry>, I>>(
        object: I,
    ): PublicConnection_LabelsEntry {
        const message = { ...basePublicConnection_LabelsEntry } as PublicConnection_LabelsEntry;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
