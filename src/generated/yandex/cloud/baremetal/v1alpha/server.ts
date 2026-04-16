/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Disk } from './disk';
import { Storage } from './storage';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** A Server resource. */
export interface Server {
    /** ID of the server. */
    id: string;
    /** ID of the cloud that the server belongs to. */
    cloudId: string;
    /** ID of the folder that the server belongs to. */
    folderId: string;
    /**
     * Name of the server.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the server. */
    description: string;
    /** ID of the availability zone where the server is resides. */
    zoneId: string;
    /** ID of the hardware pool that the server belongs to. */
    hardwarePoolId: string;
    /** Status of the server. */
    status: Server_Status;
    /**
     * Operating system specific settings of the server. Optional, will be empty if the server is
     * provisioned without an operating system.
     */
    osSettings?: OsSettings;
    /** Array of network interfaces that are attached to the instance. */
    networkInterfaces: NetworkInterface[];
    /**
     * ID of the configuration that was used to create the server.
     *
     * @deprecated
     */
    configurationId: string;
    /** Array of disks that are attached to the server. */
    disks: Disk[];
    /** Creation timestamp. */
    createdAt?: Date;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

/** Server status. */
export enum Server_Status {
    /** STATUS_UNSPECIFIED - Unspecified server status. */
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Server is waiting for to be allocated from the hardware pool. */
    PROVISIONING = 1,
    /** STOPPING - Server is being stopped. */
    STOPPING = 3,
    /** STOPPED - Server has been stopped. */
    STOPPED = 4,
    /** STARTING - Server is being started. */
    STARTING = 5,
    /** RESTARTING - Server is being restarted. */
    RESTARTING = 6,
    /** ERROR - Server encountered a problem and cannot operate. */
    ERROR = 7,
    /**
     * DELETING - Server is being deleted.
     *
     * @deprecated
     */
    DELETING = 8,
    /** REINSTALLING - Server operating system is being reinstalled. */
    REINSTALLING = 9,
    /** UPDATING - Server is being updated. */
    UPDATING = 10,
    /** QUARANTINED - Server has been quarantined */
    QUARANTINED = 12,
    /** RUNNING - Server is running normaly */
    RUNNING = 14,
    UNRECOGNIZED = -1,
}

export function server_StatusFromJSON(object: any): Server_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Server_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Server_Status.PROVISIONING;
        case 3:
        case 'STOPPING':
            return Server_Status.STOPPING;
        case 4:
        case 'STOPPED':
            return Server_Status.STOPPED;
        case 5:
        case 'STARTING':
            return Server_Status.STARTING;
        case 6:
        case 'RESTARTING':
            return Server_Status.RESTARTING;
        case 7:
        case 'ERROR':
            return Server_Status.ERROR;
        case 8:
        case 'DELETING':
            return Server_Status.DELETING;
        case 9:
        case 'REINSTALLING':
            return Server_Status.REINSTALLING;
        case 10:
        case 'UPDATING':
            return Server_Status.UPDATING;
        case 12:
        case 'QUARANTINED':
            return Server_Status.QUARANTINED;
        case 14:
        case 'RUNNING':
            return Server_Status.RUNNING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Server_Status.UNRECOGNIZED;
    }
}

export function server_StatusToJSON(object: Server_Status): string {
    switch (object) {
        case Server_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Server_Status.PROVISIONING:
            return 'PROVISIONING';
        case Server_Status.STOPPING:
            return 'STOPPING';
        case Server_Status.STOPPED:
            return 'STOPPED';
        case Server_Status.STARTING:
            return 'STARTING';
        case Server_Status.RESTARTING:
            return 'RESTARTING';
        case Server_Status.ERROR:
            return 'ERROR';
        case Server_Status.DELETING:
            return 'DELETING';
        case Server_Status.REINSTALLING:
            return 'REINSTALLING';
        case Server_Status.UPDATING:
            return 'UPDATING';
        case Server_Status.QUARANTINED:
            return 'QUARANTINED';
        case Server_Status.RUNNING:
            return 'RUNNING';
        default:
            return 'UNKNOWN';
    }
}

export interface Server_LabelsEntry {
    key: string;
    value: string;
}

export interface NetworkInterface {
    /**
     * @deprecated Private subnet.
     *
     * @deprecated
     */
    privateSubnet?: PrivateSubnetNetworkInterface | undefined;
    /**
     * @deprecated Public subnet.
     *
     * @deprecated
     */
    publicSubnet?: PublicSubnetNetworkInterface | undefined;
    /** Private interface. */
    privateInterface?: PrivateNetworkInterface | undefined;
    /** Public interface. */
    publicInterface?: PublicNetworkInterface | undefined;
    /** ID of the network interface. */
    id: string;
    /**
     * MAC address that is assigned to the network interface.
     * Read only field.
     */
    macAddress: string;
    /**
     * @deprecated. Use `interface.ipaddress` instead.
     * IPv4 address that is assigned to the server for this network interface.
     * Read only field.
     *
     * @deprecated
     */
    ipAddress: string;
}

export interface PrivateNetworkInterface {
    /** ID of the private subnet which is used as native subnet for interface. */
    nativeSubnetId: string;
    /**
     * IPv4 address that is assigned to the server for this network interface.
     * Read only field.
     */
    ipAddress: string;
    /**
     * Limit of MAC addresses in the native subnet.
     * Read only field.
     */
    macLimit: number;
    /** Array of VLAN subinterfaces. Additional tagged subnets for the interface. */
    vlanSubinterfaces: VLANSubinterface[];
}

export interface VLANSubinterface {
    /** ID of the private subnet which is used as tagged subnet for interface. */
    taggedSubnetId: string;
    /**
     * IPv4 address that is assigned to the VLAN subinterface.
     * Read only field.
     */
    ipAddress: string;
    /**
     * Limit of MAC addresses in the tagged subnet.
     * Read only field.
     */
    macLimit: number;
}

export interface PublicNetworkInterface {
    /**
     * Use existing native subnet.
     * Input only field.
     */
    nativeSubnet?: PublicNetworkInterface_NativeSubnet | undefined;
    /**
     * Create new native subnet.
     * Input only field.
     */
    newNativeSubnet?: PublicNetworkInterface_NewNativeSubnet | undefined;
    /**
     * IPv4 address that is assigned to the server for this network interface.
     * Read only field.
     */
    ipAddress: string;
    /**
     * ID of the public subnet which is used as native subnet for interface.
     * Read only field.
     */
    nativeSubnetId: string;
    /**
     * Limit of MAC addresses in the native subnet.
     * Read only field.
     */
    macLimit: number;
}

/** Configuration for using existing native subnet. */
export interface PublicNetworkInterface_NativeSubnet {
    /** ID of the existing public subnet. */
    subnetId: string;
}

/** Configuration for creating new native subnet. */
export interface PublicNetworkInterface_NewNativeSubnet {
    /** Addressing type (DHCP | Static). */
    addressingType: PublicNetworkInterface_NewNativeSubnet_AddressingType;
}

/** Addressing type for public subnet. */
export enum PublicNetworkInterface_NewNativeSubnet_AddressingType {
    /** ADDRESSING_TYPE_UNSPECIFIED - Unspecified public subnet addressing type. */
    ADDRESSING_TYPE_UNSPECIFIED = 0,
    /** DHCP - DHCP addressing. */
    DHCP = 1,
    /** STATIC - Static addressing. */
    STATIC = 2,
    UNRECOGNIZED = -1,
}

export function publicNetworkInterface_NewNativeSubnet_AddressingTypeFromJSON(
    object: any,
): PublicNetworkInterface_NewNativeSubnet_AddressingType {
    switch (object) {
        case 0:
        case 'ADDRESSING_TYPE_UNSPECIFIED':
            return PublicNetworkInterface_NewNativeSubnet_AddressingType.ADDRESSING_TYPE_UNSPECIFIED;
        case 1:
        case 'DHCP':
            return PublicNetworkInterface_NewNativeSubnet_AddressingType.DHCP;
        case 2:
        case 'STATIC':
            return PublicNetworkInterface_NewNativeSubnet_AddressingType.STATIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PublicNetworkInterface_NewNativeSubnet_AddressingType.UNRECOGNIZED;
    }
}

export function publicNetworkInterface_NewNativeSubnet_AddressingTypeToJSON(
    object: PublicNetworkInterface_NewNativeSubnet_AddressingType,
): string {
    switch (object) {
        case PublicNetworkInterface_NewNativeSubnet_AddressingType.ADDRESSING_TYPE_UNSPECIFIED:
            return 'ADDRESSING_TYPE_UNSPECIFIED';
        case PublicNetworkInterface_NewNativeSubnet_AddressingType.DHCP:
            return 'DHCP';
        case PublicNetworkInterface_NewNativeSubnet_AddressingType.STATIC:
            return 'STATIC';
        default:
            return 'UNKNOWN';
    }
}

export interface PrivateSubnetNetworkInterface {
    /** ID of the private subnet. */
    privateSubnetId: string;
}

export interface PublicSubnetNetworkInterface {
    /**
     * ID of the public subnet.
     * A new ephemeral public subnet will be created if not specified.
     */
    publicSubnetId: string;
}

export interface OsSettings {
    /** ID of the image that the server was created from. */
    imageId: string;
    /** Public SSH key of the server. */
    sshPublicKey: string;
    /** List of storages. */
    storages: Storage[];
}

const baseServer: object = {
    id: '',
    cloudId: '',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    hardwarePoolId: '',
    status: 0,
    configurationId: '',
};

export const Server: {
    encode(message: Server, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Server;
    fromJSON(object: any): Server;
    toJSON(message: Server): unknown;
    fromPartial<I extends Exact<DeepPartial<Server>, I>>(object: I): Server;
} = {
    encode(message: Server, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.cloudId !== '') {
            writer.uint32(18).string(message.cloudId);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.zoneId !== '') {
            writer.uint32(50).string(message.zoneId);
        }
        if (message.hardwarePoolId !== '') {
            writer.uint32(58).string(message.hardwarePoolId);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.osSettings !== undefined) {
            OsSettings.encode(message.osSettings, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.networkInterfaces) {
            NetworkInterface.encode(v!, writer.uint32(146).fork()).ldelim();
        }
        if (message.configurationId !== '') {
            writer.uint32(162).string(message.configurationId);
        }
        for (const v of message.disks) {
            Disk.encode(v!, writer.uint32(170).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Server_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Server {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServer } as Server;
        message.networkInterfaces = [];
        message.disks = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.cloudId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.zoneId = reader.string();
                    break;
                case 7:
                    message.hardwarePoolId = reader.string();
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 10:
                    message.osSettings = OsSettings.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.networkInterfaces.push(
                        NetworkInterface.decode(reader, reader.uint32()),
                    );
                    break;
                case 20:
                    message.configurationId = reader.string();
                    break;
                case 21:
                    message.disks.push(Disk.decode(reader, reader.uint32()));
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 200:
                    const entry200 = Server_LabelsEntry.decode(reader, reader.uint32());
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Server {
        const message = { ...baseServer } as Server;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.hardwarePoolId =
            object.hardwarePoolId !== undefined && object.hardwarePoolId !== null
                ? String(object.hardwarePoolId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? server_StatusFromJSON(object.status)
                : 0;
        message.osSettings =
            object.osSettings !== undefined && object.osSettings !== null
                ? OsSettings.fromJSON(object.osSettings)
                : undefined;
        message.networkInterfaces = (object.networkInterfaces ?? []).map((e: any) =>
            NetworkInterface.fromJSON(e),
        );
        message.configurationId =
            object.configurationId !== undefined && object.configurationId !== null
                ? String(object.configurationId)
                : '';
        message.disks = (object.disks ?? []).map((e: any) => Disk.fromJSON(e));
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: Server): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.hardwarePoolId !== undefined && (obj.hardwarePoolId = message.hardwarePoolId);
        message.status !== undefined && (obj.status = server_StatusToJSON(message.status));
        message.osSettings !== undefined &&
            (obj.osSettings = message.osSettings
                ? OsSettings.toJSON(message.osSettings)
                : undefined);
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) =>
                e ? NetworkInterface.toJSON(e) : undefined,
            );
        } else {
            obj.networkInterfaces = [];
        }
        message.configurationId !== undefined && (obj.configurationId = message.configurationId);
        if (message.disks) {
            obj.disks = message.disks.map((e) => (e ? Disk.toJSON(e) : undefined));
        } else {
            obj.disks = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Server>, I>>(object: I): Server {
        const message = { ...baseServer } as Server;
        message.id = object.id ?? '';
        message.cloudId = object.cloudId ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.zoneId = object.zoneId ?? '';
        message.hardwarePoolId = object.hardwarePoolId ?? '';
        message.status = object.status ?? 0;
        message.osSettings =
            object.osSettings !== undefined && object.osSettings !== null
                ? OsSettings.fromPartial(object.osSettings)
                : undefined;
        message.networkInterfaces =
            object.networkInterfaces?.map((e) => NetworkInterface.fromPartial(e)) || [];
        message.configurationId = object.configurationId ?? '';
        message.disks = object.disks?.map((e) => Disk.fromPartial(e)) || [];
        message.createdAt = object.createdAt ?? undefined;
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

const baseServer_LabelsEntry: object = { key: '', value: '' };

export const Server_LabelsEntry: {
    encode(message: Server_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Server_LabelsEntry;
    fromJSON(object: any): Server_LabelsEntry;
    toJSON(message: Server_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Server_LabelsEntry>, I>>(object: I): Server_LabelsEntry;
} = {
    encode(message: Server_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Server_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServer_LabelsEntry } as Server_LabelsEntry;
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

    fromJSON(object: any): Server_LabelsEntry {
        const message = { ...baseServer_LabelsEntry } as Server_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Server_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Server_LabelsEntry>, I>>(
        object: I,
    ): Server_LabelsEntry {
        const message = { ...baseServer_LabelsEntry } as Server_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseNetworkInterface: object = { id: '', macAddress: '', ipAddress: '' };

export const NetworkInterface: {
    encode(message: NetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterface;
    fromJSON(object: any): NetworkInterface;
    toJSON(message: NetworkInterface): unknown;
    fromPartial<I extends Exact<DeepPartial<NetworkInterface>, I>>(object: I): NetworkInterface;
} = {
    encode(message: NetworkInterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.privateSubnet !== undefined) {
            PrivateSubnetNetworkInterface.encode(
                message.privateSubnet,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.publicSubnet !== undefined) {
            PublicSubnetNetworkInterface.encode(
                message.publicSubnet,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.privateInterface !== undefined) {
            PrivateNetworkInterface.encode(
                message.privateInterface,
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.publicInterface !== undefined) {
            PublicNetworkInterface.encode(
                message.publicInterface,
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.macAddress !== '') {
            writer.uint32(18).string(message.macAddress);
        }
        if (message.ipAddress !== '') {
            writer.uint32(26).string(message.ipAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterface {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterface } as NetworkInterface;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 7:
                    message.privateSubnet = PrivateSubnetNetworkInterface.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 8:
                    message.publicSubnet = PublicSubnetNetworkInterface.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.privateInterface = PrivateNetworkInterface.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 13:
                    message.publicInterface = PublicNetworkInterface.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.macAddress = reader.string();
                    break;
                case 3:
                    message.ipAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NetworkInterface {
        const message = { ...baseNetworkInterface } as NetworkInterface;
        message.privateSubnet =
            object.privateSubnet !== undefined && object.privateSubnet !== null
                ? PrivateSubnetNetworkInterface.fromJSON(object.privateSubnet)
                : undefined;
        message.publicSubnet =
            object.publicSubnet !== undefined && object.publicSubnet !== null
                ? PublicSubnetNetworkInterface.fromJSON(object.publicSubnet)
                : undefined;
        message.privateInterface =
            object.privateInterface !== undefined && object.privateInterface !== null
                ? PrivateNetworkInterface.fromJSON(object.privateInterface)
                : undefined;
        message.publicInterface =
            object.publicInterface !== undefined && object.publicInterface !== null
                ? PublicNetworkInterface.fromJSON(object.publicInterface)
                : undefined;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.macAddress =
            object.macAddress !== undefined && object.macAddress !== null
                ? String(object.macAddress)
                : '';
        message.ipAddress =
            object.ipAddress !== undefined && object.ipAddress !== null
                ? String(object.ipAddress)
                : '';
        return message;
    },

    toJSON(message: NetworkInterface): unknown {
        const obj: any = {};
        message.privateSubnet !== undefined &&
            (obj.privateSubnet = message.privateSubnet
                ? PrivateSubnetNetworkInterface.toJSON(message.privateSubnet)
                : undefined);
        message.publicSubnet !== undefined &&
            (obj.publicSubnet = message.publicSubnet
                ? PublicSubnetNetworkInterface.toJSON(message.publicSubnet)
                : undefined);
        message.privateInterface !== undefined &&
            (obj.privateInterface = message.privateInterface
                ? PrivateNetworkInterface.toJSON(message.privateInterface)
                : undefined);
        message.publicInterface !== undefined &&
            (obj.publicInterface = message.publicInterface
                ? PublicNetworkInterface.toJSON(message.publicInterface)
                : undefined);
        message.id !== undefined && (obj.id = message.id);
        message.macAddress !== undefined && (obj.macAddress = message.macAddress);
        message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NetworkInterface>, I>>(object: I): NetworkInterface {
        const message = { ...baseNetworkInterface } as NetworkInterface;
        message.privateSubnet =
            object.privateSubnet !== undefined && object.privateSubnet !== null
                ? PrivateSubnetNetworkInterface.fromPartial(object.privateSubnet)
                : undefined;
        message.publicSubnet =
            object.publicSubnet !== undefined && object.publicSubnet !== null
                ? PublicSubnetNetworkInterface.fromPartial(object.publicSubnet)
                : undefined;
        message.privateInterface =
            object.privateInterface !== undefined && object.privateInterface !== null
                ? PrivateNetworkInterface.fromPartial(object.privateInterface)
                : undefined;
        message.publicInterface =
            object.publicInterface !== undefined && object.publicInterface !== null
                ? PublicNetworkInterface.fromPartial(object.publicInterface)
                : undefined;
        message.id = object.id ?? '';
        message.macAddress = object.macAddress ?? '';
        message.ipAddress = object.ipAddress ?? '';
        return message;
    },
};

const basePrivateNetworkInterface: object = { nativeSubnetId: '', ipAddress: '', macLimit: 0 };

export const PrivateNetworkInterface: {
    encode(message: PrivateNetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateNetworkInterface;
    fromJSON(object: any): PrivateNetworkInterface;
    toJSON(message: PrivateNetworkInterface): unknown;
    fromPartial<I extends Exact<DeepPartial<PrivateNetworkInterface>, I>>(object: I): PrivateNetworkInterface;
} = {
    encode(message: PrivateNetworkInterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.nativeSubnetId !== '') {
            writer.uint32(10).string(message.nativeSubnetId);
        }
        if (message.ipAddress !== '') {
            writer.uint32(18).string(message.ipAddress);
        }
        if (message.macLimit !== 0) {
            writer.uint32(24).int64(message.macLimit);
        }
        for (const v of message.vlanSubinterfaces) {
            VLANSubinterface.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateNetworkInterface {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateNetworkInterface } as PrivateNetworkInterface;
        message.vlanSubinterfaces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nativeSubnetId = reader.string();
                    break;
                case 2:
                    message.ipAddress = reader.string();
                    break;
                case 3:
                    message.macLimit = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.vlanSubinterfaces.push(
                        VLANSubinterface.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrivateNetworkInterface {
        const message = { ...basePrivateNetworkInterface } as PrivateNetworkInterface;
        message.nativeSubnetId =
            object.nativeSubnetId !== undefined && object.nativeSubnetId !== null
                ? String(object.nativeSubnetId)
                : '';
        message.ipAddress =
            object.ipAddress !== undefined && object.ipAddress !== null
                ? String(object.ipAddress)
                : '';
        message.macLimit =
            object.macLimit !== undefined && object.macLimit !== null ? Number(object.macLimit) : 0;
        message.vlanSubinterfaces = (object.vlanSubinterfaces ?? []).map((e: any) =>
            VLANSubinterface.fromJSON(e),
        );
        return message;
    },

    toJSON(message: PrivateNetworkInterface): unknown {
        const obj: any = {};
        message.nativeSubnetId !== undefined && (obj.nativeSubnetId = message.nativeSubnetId);
        message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
        message.macLimit !== undefined && (obj.macLimit = Math.round(message.macLimit));
        if (message.vlanSubinterfaces) {
            obj.vlanSubinterfaces = message.vlanSubinterfaces.map((e) =>
                e ? VLANSubinterface.toJSON(e) : undefined,
            );
        } else {
            obj.vlanSubinterfaces = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateNetworkInterface>, I>>(
        object: I,
    ): PrivateNetworkInterface {
        const message = { ...basePrivateNetworkInterface } as PrivateNetworkInterface;
        message.nativeSubnetId = object.nativeSubnetId ?? '';
        message.ipAddress = object.ipAddress ?? '';
        message.macLimit = object.macLimit ?? 0;
        message.vlanSubinterfaces =
            object.vlanSubinterfaces?.map((e) => VLANSubinterface.fromPartial(e)) || [];
        return message;
    },
};

const baseVLANSubinterface: object = { taggedSubnetId: '', ipAddress: '', macLimit: 0 };

export const VLANSubinterface: {
    encode(message: VLANSubinterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VLANSubinterface;
    fromJSON(object: any): VLANSubinterface;
    toJSON(message: VLANSubinterface): unknown;
    fromPartial<I extends Exact<DeepPartial<VLANSubinterface>, I>>(object: I): VLANSubinterface;
} = {
    encode(message: VLANSubinterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taggedSubnetId !== '') {
            writer.uint32(10).string(message.taggedSubnetId);
        }
        if (message.ipAddress !== '') {
            writer.uint32(18).string(message.ipAddress);
        }
        if (message.macLimit !== 0) {
            writer.uint32(24).int64(message.macLimit);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VLANSubinterface {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVLANSubinterface } as VLANSubinterface;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taggedSubnetId = reader.string();
                    break;
                case 2:
                    message.ipAddress = reader.string();
                    break;
                case 3:
                    message.macLimit = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VLANSubinterface {
        const message = { ...baseVLANSubinterface } as VLANSubinterface;
        message.taggedSubnetId =
            object.taggedSubnetId !== undefined && object.taggedSubnetId !== null
                ? String(object.taggedSubnetId)
                : '';
        message.ipAddress =
            object.ipAddress !== undefined && object.ipAddress !== null
                ? String(object.ipAddress)
                : '';
        message.macLimit =
            object.macLimit !== undefined && object.macLimit !== null ? Number(object.macLimit) : 0;
        return message;
    },

    toJSON(message: VLANSubinterface): unknown {
        const obj: any = {};
        message.taggedSubnetId !== undefined && (obj.taggedSubnetId = message.taggedSubnetId);
        message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
        message.macLimit !== undefined && (obj.macLimit = Math.round(message.macLimit));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VLANSubinterface>, I>>(object: I): VLANSubinterface {
        const message = { ...baseVLANSubinterface } as VLANSubinterface;
        message.taggedSubnetId = object.taggedSubnetId ?? '';
        message.ipAddress = object.ipAddress ?? '';
        message.macLimit = object.macLimit ?? 0;
        return message;
    },
};

const basePublicNetworkInterface: object = { ipAddress: '', nativeSubnetId: '', macLimit: 0 };

export const PublicNetworkInterface: {
    encode(message: PublicNetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicNetworkInterface;
    fromJSON(object: any): PublicNetworkInterface;
    toJSON(message: PublicNetworkInterface): unknown;
    fromPartial<I extends Exact<DeepPartial<PublicNetworkInterface>, I>>(object: I): PublicNetworkInterface;
} = {
    encode(message: PublicNetworkInterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.nativeSubnet !== undefined) {
            PublicNetworkInterface_NativeSubnet.encode(
                message.nativeSubnet,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.newNativeSubnet !== undefined) {
            PublicNetworkInterface_NewNativeSubnet.encode(
                message.newNativeSubnet,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.ipAddress !== '') {
            writer.uint32(10).string(message.ipAddress);
        }
        if (message.nativeSubnetId !== '') {
            writer.uint32(18).string(message.nativeSubnetId);
        }
        if (message.macLimit !== 0) {
            writer.uint32(24).int64(message.macLimit);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublicNetworkInterface {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublicNetworkInterface } as PublicNetworkInterface;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.nativeSubnet = PublicNetworkInterface_NativeSubnet.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 7:
                    message.newNativeSubnet = PublicNetworkInterface_NewNativeSubnet.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1:
                    message.ipAddress = reader.string();
                    break;
                case 2:
                    message.nativeSubnetId = reader.string();
                    break;
                case 3:
                    message.macLimit = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PublicNetworkInterface {
        const message = { ...basePublicNetworkInterface } as PublicNetworkInterface;
        message.nativeSubnet =
            object.nativeSubnet !== undefined && object.nativeSubnet !== null
                ? PublicNetworkInterface_NativeSubnet.fromJSON(object.nativeSubnet)
                : undefined;
        message.newNativeSubnet =
            object.newNativeSubnet !== undefined && object.newNativeSubnet !== null
                ? PublicNetworkInterface_NewNativeSubnet.fromJSON(object.newNativeSubnet)
                : undefined;
        message.ipAddress =
            object.ipAddress !== undefined && object.ipAddress !== null
                ? String(object.ipAddress)
                : '';
        message.nativeSubnetId =
            object.nativeSubnetId !== undefined && object.nativeSubnetId !== null
                ? String(object.nativeSubnetId)
                : '';
        message.macLimit =
            object.macLimit !== undefined && object.macLimit !== null ? Number(object.macLimit) : 0;
        return message;
    },

    toJSON(message: PublicNetworkInterface): unknown {
        const obj: any = {};
        message.nativeSubnet !== undefined &&
            (obj.nativeSubnet = message.nativeSubnet
                ? PublicNetworkInterface_NativeSubnet.toJSON(message.nativeSubnet)
                : undefined);
        message.newNativeSubnet !== undefined &&
            (obj.newNativeSubnet = message.newNativeSubnet
                ? PublicNetworkInterface_NewNativeSubnet.toJSON(message.newNativeSubnet)
                : undefined);
        message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
        message.nativeSubnetId !== undefined && (obj.nativeSubnetId = message.nativeSubnetId);
        message.macLimit !== undefined && (obj.macLimit = Math.round(message.macLimit));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublicNetworkInterface>, I>>(
        object: I,
    ): PublicNetworkInterface {
        const message = { ...basePublicNetworkInterface } as PublicNetworkInterface;
        message.nativeSubnet =
            object.nativeSubnet !== undefined && object.nativeSubnet !== null
                ? PublicNetworkInterface_NativeSubnet.fromPartial(object.nativeSubnet)
                : undefined;
        message.newNativeSubnet =
            object.newNativeSubnet !== undefined && object.newNativeSubnet !== null
                ? PublicNetworkInterface_NewNativeSubnet.fromPartial(object.newNativeSubnet)
                : undefined;
        message.ipAddress = object.ipAddress ?? '';
        message.nativeSubnetId = object.nativeSubnetId ?? '';
        message.macLimit = object.macLimit ?? 0;
        return message;
    },
};

const basePublicNetworkInterface_NativeSubnet: object = { subnetId: '' };

export const PublicNetworkInterface_NativeSubnet: {
    encode(message: PublicNetworkInterface_NativeSubnet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicNetworkInterface_NativeSubnet;
    fromJSON(object: any): PublicNetworkInterface_NativeSubnet;
    toJSON(message: PublicNetworkInterface_NativeSubnet): unknown;
    fromPartial<I extends Exact<DeepPartial<PublicNetworkInterface_NativeSubnet>, I>>(object: I): PublicNetworkInterface_NativeSubnet;
} = {
    encode(
        message: PublicNetworkInterface_NativeSubnet,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublicNetworkInterface_NativeSubnet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePublicNetworkInterface_NativeSubnet,
        } as PublicNetworkInterface_NativeSubnet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PublicNetworkInterface_NativeSubnet {
        const message = {
            ...basePublicNetworkInterface_NativeSubnet,
        } as PublicNetworkInterface_NativeSubnet;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        return message;
    },

    toJSON(message: PublicNetworkInterface_NativeSubnet): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublicNetworkInterface_NativeSubnet>, I>>(
        object: I,
    ): PublicNetworkInterface_NativeSubnet {
        const message = {
            ...basePublicNetworkInterface_NativeSubnet,
        } as PublicNetworkInterface_NativeSubnet;
        message.subnetId = object.subnetId ?? '';
        return message;
    },
};

const basePublicNetworkInterface_NewNativeSubnet: object = { addressingType: 0 };

export const PublicNetworkInterface_NewNativeSubnet: {
    encode(message: PublicNetworkInterface_NewNativeSubnet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicNetworkInterface_NewNativeSubnet;
    fromJSON(object: any): PublicNetworkInterface_NewNativeSubnet;
    toJSON(message: PublicNetworkInterface_NewNativeSubnet): unknown;
    fromPartial<I extends Exact<DeepPartial<PublicNetworkInterface_NewNativeSubnet>, I>>(object: I): PublicNetworkInterface_NewNativeSubnet;
} = {
    encode(
        message: PublicNetworkInterface_NewNativeSubnet,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.addressingType !== 0) {
            writer.uint32(8).int32(message.addressingType);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PublicNetworkInterface_NewNativeSubnet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePublicNetworkInterface_NewNativeSubnet,
        } as PublicNetworkInterface_NewNativeSubnet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressingType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PublicNetworkInterface_NewNativeSubnet {
        const message = {
            ...basePublicNetworkInterface_NewNativeSubnet,
        } as PublicNetworkInterface_NewNativeSubnet;
        message.addressingType =
            object.addressingType !== undefined && object.addressingType !== null
                ? publicNetworkInterface_NewNativeSubnet_AddressingTypeFromJSON(
                      object.addressingType,
                  )
                : 0;
        return message;
    },

    toJSON(message: PublicNetworkInterface_NewNativeSubnet): unknown {
        const obj: any = {};
        message.addressingType !== undefined &&
            (obj.addressingType = publicNetworkInterface_NewNativeSubnet_AddressingTypeToJSON(
                message.addressingType,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublicNetworkInterface_NewNativeSubnet>, I>>(
        object: I,
    ): PublicNetworkInterface_NewNativeSubnet {
        const message = {
            ...basePublicNetworkInterface_NewNativeSubnet,
        } as PublicNetworkInterface_NewNativeSubnet;
        message.addressingType = object.addressingType ?? 0;
        return message;
    },
};

const basePrivateSubnetNetworkInterface: object = { privateSubnetId: '' };

export const PrivateSubnetNetworkInterface: {
    encode(message: PrivateSubnetNetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateSubnetNetworkInterface;
    fromJSON(object: any): PrivateSubnetNetworkInterface;
    toJSON(message: PrivateSubnetNetworkInterface): unknown;
    fromPartial<I extends Exact<DeepPartial<PrivateSubnetNetworkInterface>, I>>(object: I): PrivateSubnetNetworkInterface;
} = {
    encode(
        message: PrivateSubnetNetworkInterface,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateSubnetId !== '') {
            writer.uint32(10).string(message.privateSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateSubnetNetworkInterface {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateSubnetNetworkInterface } as PrivateSubnetNetworkInterface;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrivateSubnetNetworkInterface {
        const message = { ...basePrivateSubnetNetworkInterface } as PrivateSubnetNetworkInterface;
        message.privateSubnetId =
            object.privateSubnetId !== undefined && object.privateSubnetId !== null
                ? String(object.privateSubnetId)
                : '';
        return message;
    },

    toJSON(message: PrivateSubnetNetworkInterface): unknown {
        const obj: any = {};
        message.privateSubnetId !== undefined && (obj.privateSubnetId = message.privateSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PrivateSubnetNetworkInterface>, I>>(
        object: I,
    ): PrivateSubnetNetworkInterface {
        const message = { ...basePrivateSubnetNetworkInterface } as PrivateSubnetNetworkInterface;
        message.privateSubnetId = object.privateSubnetId ?? '';
        return message;
    },
};

const basePublicSubnetNetworkInterface: object = { publicSubnetId: '' };

export const PublicSubnetNetworkInterface: {
    encode(message: PublicSubnetNetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicSubnetNetworkInterface;
    fromJSON(object: any): PublicSubnetNetworkInterface;
    toJSON(message: PublicSubnetNetworkInterface): unknown;
    fromPartial<I extends Exact<DeepPartial<PublicSubnetNetworkInterface>, I>>(object: I): PublicSubnetNetworkInterface;
} = {
    encode(
        message: PublicSubnetNetworkInterface,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicSubnetId !== '') {
            writer.uint32(10).string(message.publicSubnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublicSubnetNetworkInterface {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublicSubnetNetworkInterface } as PublicSubnetNetworkInterface;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicSubnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PublicSubnetNetworkInterface {
        const message = { ...basePublicSubnetNetworkInterface } as PublicSubnetNetworkInterface;
        message.publicSubnetId =
            object.publicSubnetId !== undefined && object.publicSubnetId !== null
                ? String(object.publicSubnetId)
                : '';
        return message;
    },

    toJSON(message: PublicSubnetNetworkInterface): unknown {
        const obj: any = {};
        message.publicSubnetId !== undefined && (obj.publicSubnetId = message.publicSubnetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublicSubnetNetworkInterface>, I>>(
        object: I,
    ): PublicSubnetNetworkInterface {
        const message = { ...basePublicSubnetNetworkInterface } as PublicSubnetNetworkInterface;
        message.publicSubnetId = object.publicSubnetId ?? '';
        return message;
    },
};

const baseOsSettings: object = { imageId: '', sshPublicKey: '' };

export const OsSettings: {
    encode(message: OsSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OsSettings;
    fromJSON(object: any): OsSettings;
    toJSON(message: OsSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<OsSettings>, I>>(object: I): OsSettings;
} = {
    encode(message: OsSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        if (message.sshPublicKey !== '') {
            writer.uint32(18).string(message.sshPublicKey);
        }
        for (const v of message.storages) {
            Storage.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OsSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOsSettings } as OsSettings;
        message.storages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                case 2:
                    message.sshPublicKey = reader.string();
                    break;
                case 3:
                    message.storages.push(Storage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OsSettings {
        const message = { ...baseOsSettings } as OsSettings;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        message.sshPublicKey =
            object.sshPublicKey !== undefined && object.sshPublicKey !== null
                ? String(object.sshPublicKey)
                : '';
        message.storages = (object.storages ?? []).map((e: any) => Storage.fromJSON(e));
        return message;
    },

    toJSON(message: OsSettings): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.sshPublicKey !== undefined && (obj.sshPublicKey = message.sshPublicKey);
        if (message.storages) {
            obj.storages = message.storages.map((e) => (e ? Storage.toJSON(e) : undefined));
        } else {
            obj.storages = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OsSettings>, I>>(object: I): OsSettings {
        const message = { ...baseOsSettings } as OsSettings;
        message.imageId = object.imageId ?? '';
        message.sshPublicKey = object.sshPublicKey ?? '';
        message.storages = object.storages?.map((e) => Storage.fromPartial(e)) || [];
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
