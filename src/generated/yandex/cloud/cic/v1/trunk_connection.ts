/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    TransceiverType,
    transceiverTypeFromJSON,
    transceiverTypeToJSON,
} from '../../../../yandex/cloud/cic/v1/common/transceiver_type';
import { LagAllocationSettings } from '../../../../yandex/cloud/cic/v1/common/lag_allocation_settings';
import { StringValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.cic.v1';

/** A TrunkConnection resource. */
export interface TrunkConnection {
    /** ID of the trunkConnection. */
    id: string;
    /**
     * Name of the trunkConnection.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the trunkConnection. 0-256 characters long. */
    description: string;
    /** ID of the folder that the trunkConnection belongs to. */
    folderId: string;
    /** ID of the region that the trunkConnection belongs to. */
    regionId: string;
    singlePortDirectJoint?: TrunkConnection_SinglePortDirectJoint | undefined;
    lagDirectJoint?: TrunkConnection_LagDirectJoint | undefined;
    partnerJointInfo?: TrunkConnection_PartnerJointInfo | undefined;
    /**
     * ID of pointOfPresence that the trunkConnection is deployed on.
     * Optional.
     * If is not set scheduler selects it by himself.
     */
    pointOfPresenceId?: string;
    /** Capacity of the trunkConnection */
    capacity: TrunkConnection_Capacity;
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

export enum TrunkConnection_Capacity {
    CAPACITY_UNSPECIFIED = 0,
    CAPACITY_50_MBPS = 1,
    CAPACITY_100_MBPS = 2,
    CAPACITY_200_MBPS = 3,
    CAPACITY_300_MBPS = 4,
    CAPACITY_400_MBPS = 5,
    CAPACITY_500_MBPS = 6,
    CAPACITY_1_GBPS = 7,
    CAPACITY_2_GBPS = 8,
    CAPACITY_3_GBPS = 9,
    CAPACITY_4_GBPS = 10,
    CAPACITY_5_GBPS = 11,
    CAPACITY_10_GBPS = 12,
    CAPACITY_20_GBPS = 13,
    CAPACITY_30_GBPS = 14,
    CAPACITY_40_GBPS = 15,
    CAPACITY_50_GBPS = 16,
    CAPACITY_100_GBPS = 17,
    UNRECOGNIZED = -1,
}

export function trunkConnection_CapacityFromJSON(object: any): TrunkConnection_Capacity {
    switch (object) {
        case 0:
        case 'CAPACITY_UNSPECIFIED':
            return TrunkConnection_Capacity.CAPACITY_UNSPECIFIED;
        case 1:
        case 'CAPACITY_50_MBPS':
            return TrunkConnection_Capacity.CAPACITY_50_MBPS;
        case 2:
        case 'CAPACITY_100_MBPS':
            return TrunkConnection_Capacity.CAPACITY_100_MBPS;
        case 3:
        case 'CAPACITY_200_MBPS':
            return TrunkConnection_Capacity.CAPACITY_200_MBPS;
        case 4:
        case 'CAPACITY_300_MBPS':
            return TrunkConnection_Capacity.CAPACITY_300_MBPS;
        case 5:
        case 'CAPACITY_400_MBPS':
            return TrunkConnection_Capacity.CAPACITY_400_MBPS;
        case 6:
        case 'CAPACITY_500_MBPS':
            return TrunkConnection_Capacity.CAPACITY_500_MBPS;
        case 7:
        case 'CAPACITY_1_GBPS':
            return TrunkConnection_Capacity.CAPACITY_1_GBPS;
        case 8:
        case 'CAPACITY_2_GBPS':
            return TrunkConnection_Capacity.CAPACITY_2_GBPS;
        case 9:
        case 'CAPACITY_3_GBPS':
            return TrunkConnection_Capacity.CAPACITY_3_GBPS;
        case 10:
        case 'CAPACITY_4_GBPS':
            return TrunkConnection_Capacity.CAPACITY_4_GBPS;
        case 11:
        case 'CAPACITY_5_GBPS':
            return TrunkConnection_Capacity.CAPACITY_5_GBPS;
        case 12:
        case 'CAPACITY_10_GBPS':
            return TrunkConnection_Capacity.CAPACITY_10_GBPS;
        case 13:
        case 'CAPACITY_20_GBPS':
            return TrunkConnection_Capacity.CAPACITY_20_GBPS;
        case 14:
        case 'CAPACITY_30_GBPS':
            return TrunkConnection_Capacity.CAPACITY_30_GBPS;
        case 15:
        case 'CAPACITY_40_GBPS':
            return TrunkConnection_Capacity.CAPACITY_40_GBPS;
        case 16:
        case 'CAPACITY_50_GBPS':
            return TrunkConnection_Capacity.CAPACITY_50_GBPS;
        case 17:
        case 'CAPACITY_100_GBPS':
            return TrunkConnection_Capacity.CAPACITY_100_GBPS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TrunkConnection_Capacity.UNRECOGNIZED;
    }
}

export function trunkConnection_CapacityToJSON(object: TrunkConnection_Capacity): string {
    switch (object) {
        case TrunkConnection_Capacity.CAPACITY_UNSPECIFIED:
            return 'CAPACITY_UNSPECIFIED';
        case TrunkConnection_Capacity.CAPACITY_50_MBPS:
            return 'CAPACITY_50_MBPS';
        case TrunkConnection_Capacity.CAPACITY_100_MBPS:
            return 'CAPACITY_100_MBPS';
        case TrunkConnection_Capacity.CAPACITY_200_MBPS:
            return 'CAPACITY_200_MBPS';
        case TrunkConnection_Capacity.CAPACITY_300_MBPS:
            return 'CAPACITY_300_MBPS';
        case TrunkConnection_Capacity.CAPACITY_400_MBPS:
            return 'CAPACITY_400_MBPS';
        case TrunkConnection_Capacity.CAPACITY_500_MBPS:
            return 'CAPACITY_500_MBPS';
        case TrunkConnection_Capacity.CAPACITY_1_GBPS:
            return 'CAPACITY_1_GBPS';
        case TrunkConnection_Capacity.CAPACITY_2_GBPS:
            return 'CAPACITY_2_GBPS';
        case TrunkConnection_Capacity.CAPACITY_3_GBPS:
            return 'CAPACITY_3_GBPS';
        case TrunkConnection_Capacity.CAPACITY_4_GBPS:
            return 'CAPACITY_4_GBPS';
        case TrunkConnection_Capacity.CAPACITY_5_GBPS:
            return 'CAPACITY_5_GBPS';
        case TrunkConnection_Capacity.CAPACITY_10_GBPS:
            return 'CAPACITY_10_GBPS';
        case TrunkConnection_Capacity.CAPACITY_20_GBPS:
            return 'CAPACITY_20_GBPS';
        case TrunkConnection_Capacity.CAPACITY_30_GBPS:
            return 'CAPACITY_30_GBPS';
        case TrunkConnection_Capacity.CAPACITY_40_GBPS:
            return 'CAPACITY_40_GBPS';
        case TrunkConnection_Capacity.CAPACITY_50_GBPS:
            return 'CAPACITY_50_GBPS';
        case TrunkConnection_Capacity.CAPACITY_100_GBPS:
            return 'CAPACITY_100_GBPS';
        default:
            return 'UNKNOWN';
    }
}

export interface TrunkConnection_LabelsEntry {
    key: string;
    value: string;
}

/** Config of trunkConnection that is deployed on partner joint. */
export interface TrunkConnection_PartnerJointInfo {
    /** Reserved for future using; */
    serviceKey: string;
    /**
     * ID of partner that the trunkConnection is deployed on.
     * Optional.
     * If is not set scheduler selects it by himself.
     */
    partnerId?: string;
}

/** Config of trunkConnection that is deployed on single port. */
export interface TrunkConnection_SinglePortDirectJoint {
    /** Type of transceiver that the trunkConnection is deployed on. */
    transceiverType: TransceiverType;
    /** Name of port that the trunkConnection is deployed on. */
    portName?: string;
    /** Device name which is set in LLDP message. */
    accessDeviceName: string;
}

/** Config of trunkConnection that is deployed on lag. */
export interface TrunkConnection_LagDirectJoint {
    /** Type of transceiver that the trunkConnection is deployed on. */
    transceiverType: TransceiverType;
    /** LAG allocation settings that the trunkConnection is deployed on. */
    lagAllocationSettings?: LagAllocationSettings;
    /** Device name which is set in LLDP message. */
    accessDeviceName: string;
}

const baseTrunkConnection: object = {
    id: '',
    name: '',
    description: '',
    folderId: '',
    regionId: '',
    capacity: 0,
};

export const TrunkConnection = {
    encode(message: TrunkConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.singlePortDirectJoint !== undefined) {
            TrunkConnection_SinglePortDirectJoint.encode(
                message.singlePortDirectJoint,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.lagDirectJoint !== undefined) {
            TrunkConnection_LagDirectJoint.encode(
                message.lagDirectJoint,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.partnerJointInfo !== undefined) {
            TrunkConnection_PartnerJointInfo.encode(
                message.partnerJointInfo,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.pointOfPresenceId !== undefined) {
            StringValue.encode(
                { value: message.pointOfPresenceId! },
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.capacity !== 0) {
            writer.uint32(176).int32(message.capacity);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            TrunkConnection_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(186).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrunkConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrunkConnection } as TrunkConnection;
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
                case 9:
                    message.singlePortDirectJoint = TrunkConnection_SinglePortDirectJoint.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.lagDirectJoint = TrunkConnection_LagDirectJoint.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 11:
                    message.partnerJointInfo = TrunkConnection_PartnerJointInfo.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.pointOfPresenceId = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.capacity = reader.int32() as any;
                    break;
                case 23:
                    const entry23 = TrunkConnection_LabelsEntry.decode(reader, reader.uint32());
                    if (entry23.value !== undefined) {
                        message.labels[entry23.key] = entry23.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TrunkConnection {
        const message = { ...baseTrunkConnection } as TrunkConnection;
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
        message.singlePortDirectJoint =
            object.singlePortDirectJoint !== undefined && object.singlePortDirectJoint !== null
                ? TrunkConnection_SinglePortDirectJoint.fromJSON(object.singlePortDirectJoint)
                : undefined;
        message.lagDirectJoint =
            object.lagDirectJoint !== undefined && object.lagDirectJoint !== null
                ? TrunkConnection_LagDirectJoint.fromJSON(object.lagDirectJoint)
                : undefined;
        message.partnerJointInfo =
            object.partnerJointInfo !== undefined && object.partnerJointInfo !== null
                ? TrunkConnection_PartnerJointInfo.fromJSON(object.partnerJointInfo)
                : undefined;
        message.pointOfPresenceId =
            object.pointOfPresenceId !== undefined && object.pointOfPresenceId !== null
                ? String(object.pointOfPresenceId)
                : undefined;
        message.capacity =
            object.capacity !== undefined && object.capacity !== null
                ? trunkConnection_CapacityFromJSON(object.capacity)
                : 0;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: TrunkConnection): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.singlePortDirectJoint !== undefined &&
            (obj.singlePortDirectJoint = message.singlePortDirectJoint
                ? TrunkConnection_SinglePortDirectJoint.toJSON(message.singlePortDirectJoint)
                : undefined);
        message.lagDirectJoint !== undefined &&
            (obj.lagDirectJoint = message.lagDirectJoint
                ? TrunkConnection_LagDirectJoint.toJSON(message.lagDirectJoint)
                : undefined);
        message.partnerJointInfo !== undefined &&
            (obj.partnerJointInfo = message.partnerJointInfo
                ? TrunkConnection_PartnerJointInfo.toJSON(message.partnerJointInfo)
                : undefined);
        message.pointOfPresenceId !== undefined &&
            (obj.pointOfPresenceId = message.pointOfPresenceId);
        message.capacity !== undefined &&
            (obj.capacity = trunkConnection_CapacityToJSON(message.capacity));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrunkConnection>, I>>(object: I): TrunkConnection {
        const message = { ...baseTrunkConnection } as TrunkConnection;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.folderId = object.folderId ?? '';
        message.regionId = object.regionId ?? '';
        message.singlePortDirectJoint =
            object.singlePortDirectJoint !== undefined && object.singlePortDirectJoint !== null
                ? TrunkConnection_SinglePortDirectJoint.fromPartial(object.singlePortDirectJoint)
                : undefined;
        message.lagDirectJoint =
            object.lagDirectJoint !== undefined && object.lagDirectJoint !== null
                ? TrunkConnection_LagDirectJoint.fromPartial(object.lagDirectJoint)
                : undefined;
        message.partnerJointInfo =
            object.partnerJointInfo !== undefined && object.partnerJointInfo !== null
                ? TrunkConnection_PartnerJointInfo.fromPartial(object.partnerJointInfo)
                : undefined;
        message.pointOfPresenceId = object.pointOfPresenceId ?? undefined;
        message.capacity = object.capacity ?? 0;
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

const baseTrunkConnection_LabelsEntry: object = { key: '', value: '' };

export const TrunkConnection_LabelsEntry = {
    encode(
        message: TrunkConnection_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): TrunkConnection_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrunkConnection_LabelsEntry } as TrunkConnection_LabelsEntry;
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

    fromJSON(object: any): TrunkConnection_LabelsEntry {
        const message = { ...baseTrunkConnection_LabelsEntry } as TrunkConnection_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: TrunkConnection_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrunkConnection_LabelsEntry>, I>>(
        object: I,
    ): TrunkConnection_LabelsEntry {
        const message = { ...baseTrunkConnection_LabelsEntry } as TrunkConnection_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseTrunkConnection_PartnerJointInfo: object = { serviceKey: '' };

export const TrunkConnection_PartnerJointInfo = {
    encode(
        message: TrunkConnection_PartnerJointInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceKey !== '') {
            writer.uint32(26).string(message.serviceKey);
        }
        if (message.partnerId !== undefined) {
            StringValue.encode({ value: message.partnerId! }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrunkConnection_PartnerJointInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTrunkConnection_PartnerJointInfo,
        } as TrunkConnection_PartnerJointInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.serviceKey = reader.string();
                    break;
                case 4:
                    message.partnerId = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TrunkConnection_PartnerJointInfo {
        const message = {
            ...baseTrunkConnection_PartnerJointInfo,
        } as TrunkConnection_PartnerJointInfo;
        message.serviceKey =
            object.serviceKey !== undefined && object.serviceKey !== null
                ? String(object.serviceKey)
                : '';
        message.partnerId =
            object.partnerId !== undefined && object.partnerId !== null
                ? String(object.partnerId)
                : undefined;
        return message;
    },

    toJSON(message: TrunkConnection_PartnerJointInfo): unknown {
        const obj: any = {};
        message.serviceKey !== undefined && (obj.serviceKey = message.serviceKey);
        message.partnerId !== undefined && (obj.partnerId = message.partnerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrunkConnection_PartnerJointInfo>, I>>(
        object: I,
    ): TrunkConnection_PartnerJointInfo {
        const message = {
            ...baseTrunkConnection_PartnerJointInfo,
        } as TrunkConnection_PartnerJointInfo;
        message.serviceKey = object.serviceKey ?? '';
        message.partnerId = object.partnerId ?? undefined;
        return message;
    },
};

const baseTrunkConnection_SinglePortDirectJoint: object = {
    transceiverType: 0,
    accessDeviceName: '',
};

export const TrunkConnection_SinglePortDirectJoint = {
    encode(
        message: TrunkConnection_SinglePortDirectJoint,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.transceiverType !== 0) {
            writer.uint32(8).int32(message.transceiverType);
        }
        if (message.portName !== undefined) {
            StringValue.encode({ value: message.portName! }, writer.uint32(26).fork()).ldelim();
        }
        if (message.accessDeviceName !== '') {
            writer.uint32(34).string(message.accessDeviceName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrunkConnection_SinglePortDirectJoint {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTrunkConnection_SinglePortDirectJoint,
        } as TrunkConnection_SinglePortDirectJoint;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transceiverType = reader.int32() as any;
                    break;
                case 3:
                    message.portName = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.accessDeviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TrunkConnection_SinglePortDirectJoint {
        const message = {
            ...baseTrunkConnection_SinglePortDirectJoint,
        } as TrunkConnection_SinglePortDirectJoint;
        message.transceiverType =
            object.transceiverType !== undefined && object.transceiverType !== null
                ? transceiverTypeFromJSON(object.transceiverType)
                : 0;
        message.portName =
            object.portName !== undefined && object.portName !== null
                ? String(object.portName)
                : undefined;
        message.accessDeviceName =
            object.accessDeviceName !== undefined && object.accessDeviceName !== null
                ? String(object.accessDeviceName)
                : '';
        return message;
    },

    toJSON(message: TrunkConnection_SinglePortDirectJoint): unknown {
        const obj: any = {};
        message.transceiverType !== undefined &&
            (obj.transceiverType = transceiverTypeToJSON(message.transceiverType));
        message.portName !== undefined && (obj.portName = message.portName);
        message.accessDeviceName !== undefined && (obj.accessDeviceName = message.accessDeviceName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrunkConnection_SinglePortDirectJoint>, I>>(
        object: I,
    ): TrunkConnection_SinglePortDirectJoint {
        const message = {
            ...baseTrunkConnection_SinglePortDirectJoint,
        } as TrunkConnection_SinglePortDirectJoint;
        message.transceiverType = object.transceiverType ?? 0;
        message.portName = object.portName ?? undefined;
        message.accessDeviceName = object.accessDeviceName ?? '';
        return message;
    },
};

const baseTrunkConnection_LagDirectJoint: object = { transceiverType: 0, accessDeviceName: '' };

export const TrunkConnection_LagDirectJoint = {
    encode(
        message: TrunkConnection_LagDirectJoint,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.transceiverType !== 0) {
            writer.uint32(8).int32(message.transceiverType);
        }
        if (message.lagAllocationSettings !== undefined) {
            LagAllocationSettings.encode(
                message.lagAllocationSettings,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.accessDeviceName !== '') {
            writer.uint32(34).string(message.accessDeviceName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrunkConnection_LagDirectJoint {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrunkConnection_LagDirectJoint } as TrunkConnection_LagDirectJoint;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transceiverType = reader.int32() as any;
                    break;
                case 3:
                    message.lagAllocationSettings = LagAllocationSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.accessDeviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TrunkConnection_LagDirectJoint {
        const message = { ...baseTrunkConnection_LagDirectJoint } as TrunkConnection_LagDirectJoint;
        message.transceiverType =
            object.transceiverType !== undefined && object.transceiverType !== null
                ? transceiverTypeFromJSON(object.transceiverType)
                : 0;
        message.lagAllocationSettings =
            object.lagAllocationSettings !== undefined && object.lagAllocationSettings !== null
                ? LagAllocationSettings.fromJSON(object.lagAllocationSettings)
                : undefined;
        message.accessDeviceName =
            object.accessDeviceName !== undefined && object.accessDeviceName !== null
                ? String(object.accessDeviceName)
                : '';
        return message;
    },

    toJSON(message: TrunkConnection_LagDirectJoint): unknown {
        const obj: any = {};
        message.transceiverType !== undefined &&
            (obj.transceiverType = transceiverTypeToJSON(message.transceiverType));
        message.lagAllocationSettings !== undefined &&
            (obj.lagAllocationSettings = message.lagAllocationSettings
                ? LagAllocationSettings.toJSON(message.lagAllocationSettings)
                : undefined);
        message.accessDeviceName !== undefined && (obj.accessDeviceName = message.accessDeviceName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrunkConnection_LagDirectJoint>, I>>(
        object: I,
    ): TrunkConnection_LagDirectJoint {
        const message = { ...baseTrunkConnection_LagDirectJoint } as TrunkConnection_LagDirectJoint;
        message.transceiverType = object.transceiverType ?? 0;
        message.lagAllocationSettings =
            object.lagAllocationSettings !== undefined && object.lagAllocationSettings !== null
                ? LagAllocationSettings.fromPartial(object.lagAllocationSettings)
                : undefined;
        message.accessDeviceName = object.accessDeviceName ?? '';
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
