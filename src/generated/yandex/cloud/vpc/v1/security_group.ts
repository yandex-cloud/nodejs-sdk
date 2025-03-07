/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.vpc.v1';

export interface SecurityGroup {
    /** ID of the security group. */
    id: string;
    /** ID of the folder that the security group belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Name of the security group.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Description of the security group. 0-256 characters long. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_./\\@0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_./\\@0-9a-z]*`.
     */
    labels: { [key: string]: string };
    /** ID of the network that the security group belongs to. */
    networkId: string;
    /** Security group status. */
    status: SecurityGroup_Status;
    /** List of the security group rules. */
    rules: SecurityGroupRule[];
    /** Flag that indicates that the security group is the default for the network. */
    defaultForNetwork: boolean;
}

export enum SecurityGroup_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Security group is being created. */
    CREATING = 1,
    /** ACTIVE - Security is active and it's rules are applied to the network interfaces. */
    ACTIVE = 2,
    /** UPDATING - Security group is updating. Updating is a long operation because we must update all instances in SG. */
    UPDATING = 3,
    /** DELETING - Instance is being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function securityGroup_StatusFromJSON(object: any): SecurityGroup_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return SecurityGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return SecurityGroup_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return SecurityGroup_Status.ACTIVE;
        case 3:
        case 'UPDATING':
            return SecurityGroup_Status.UPDATING;
        case 4:
        case 'DELETING':
            return SecurityGroup_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityGroup_Status.UNRECOGNIZED;
    }
}

export function securityGroup_StatusToJSON(object: SecurityGroup_Status): string {
    switch (object) {
        case SecurityGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case SecurityGroup_Status.CREATING:
            return 'CREATING';
        case SecurityGroup_Status.ACTIVE:
            return 'ACTIVE';
        case SecurityGroup_Status.UPDATING:
            return 'UPDATING';
        case SecurityGroup_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface SecurityGroup_LabelsEntry {
    key: string;
    value: string;
}

export interface SecurityGroupRule {
    /** ID of the rule. */
    id: string;
    /** Description of the rule. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** The direction of network traffic allowed by this rule. */
    direction: SecurityGroupRule_Direction;
    /** The range of ports that allow traffic to pass through. Null value means any. */
    ports?: PortRange;
    /**
     * Protocol name. Null value means any protocol.
     * Values from [IANA](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).
     */
    protocolName: string;
    /** Protocol number from [IANA protocol numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml). */
    protocolNumber: number;
    /** CIDR blocks to allow to recieve or send traffic. */
    cidrBlocks?: CidrBlocks | undefined;
    /** ID of the security group to add rule to. */
    securityGroupId: string | undefined;
    /** Predefined target. See [security groups rules](/docs/vpc/concepts/security-groups#security-groups-rules) for more information. */
    predefinedTarget: string | undefined;
}

export enum SecurityGroupRule_Direction {
    DIRECTION_UNSPECIFIED = 0,
    /** INGRESS - Allows ingress traffic. */
    INGRESS = 1,
    /** EGRESS - Allows egress traffic. */
    EGRESS = 2,
    UNRECOGNIZED = -1,
}

export function securityGroupRule_DirectionFromJSON(object: any): SecurityGroupRule_Direction {
    switch (object) {
        case 0:
        case 'DIRECTION_UNSPECIFIED':
            return SecurityGroupRule_Direction.DIRECTION_UNSPECIFIED;
        case 1:
        case 'INGRESS':
            return SecurityGroupRule_Direction.INGRESS;
        case 2:
        case 'EGRESS':
            return SecurityGroupRule_Direction.EGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityGroupRule_Direction.UNRECOGNIZED;
    }
}

export function securityGroupRule_DirectionToJSON(object: SecurityGroupRule_Direction): string {
    switch (object) {
        case SecurityGroupRule_Direction.DIRECTION_UNSPECIFIED:
            return 'DIRECTION_UNSPECIFIED';
        case SecurityGroupRule_Direction.INGRESS:
            return 'INGRESS';
        case SecurityGroupRule_Direction.EGRESS:
            return 'EGRESS';
        default:
            return 'UNKNOWN';
    }
}

export interface SecurityGroupRule_LabelsEntry {
    key: string;
    value: string;
}

export interface PortRange {
    /** The lowest port in the range. */
    fromPort: number;
    /** The highest port in the range. */
    toPort: number;
}

export interface CidrBlocks {
    /** IPv4 CIDR blocks to allow traffic to. */
    v4CidrBlocks: string[];
    /** IPv6 CIDR blocks to allow traffic to. */
    v6CidrBlocks: string[];
}

const baseSecurityGroup: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    networkId: '',
    status: 0,
    defaultForNetwork: false,
};

export const SecurityGroup = {
    encode(message: SecurityGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            SecurityGroup_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(58).string(message.networkId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        for (const v of message.rules) {
            SecurityGroupRule.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.defaultForNetwork === true) {
            writer.uint32(80).bool(message.defaultForNetwork);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityGroup } as SecurityGroup;
        message.labels = {};
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = SecurityGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 9:
                    message.rules.push(SecurityGroupRule.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.defaultForNetwork = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityGroup {
        const message = { ...baseSecurityGroup } as SecurityGroup;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? securityGroup_StatusFromJSON(object.status)
                : 0;
        message.rules = (object.rules ?? []).map((e: any) => SecurityGroupRule.fromJSON(e));
        message.defaultForNetwork =
            object.defaultForNetwork !== undefined && object.defaultForNetwork !== null
                ? Boolean(object.defaultForNetwork)
                : false;
        return message;
    },

    toJSON(message: SecurityGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.status !== undefined && (obj.status = securityGroup_StatusToJSON(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? SecurityGroupRule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        message.defaultForNetwork !== undefined &&
            (obj.defaultForNetwork = message.defaultForNetwork);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityGroup>, I>>(object: I): SecurityGroup {
        const message = { ...baseSecurityGroup } as SecurityGroup;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.networkId = object.networkId ?? '';
        message.status = object.status ?? 0;
        message.rules = object.rules?.map((e) => SecurityGroupRule.fromPartial(e)) || [];
        message.defaultForNetwork = object.defaultForNetwork ?? false;
        return message;
    },
};

const baseSecurityGroup_LabelsEntry: object = { key: '', value: '' };

export const SecurityGroup_LabelsEntry = {
    encode(
        message: SecurityGroup_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroup_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityGroup_LabelsEntry } as SecurityGroup_LabelsEntry;
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

    fromJSON(object: any): SecurityGroup_LabelsEntry {
        const message = { ...baseSecurityGroup_LabelsEntry } as SecurityGroup_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: SecurityGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityGroup_LabelsEntry>, I>>(
        object: I,
    ): SecurityGroup_LabelsEntry {
        const message = { ...baseSecurityGroup_LabelsEntry } as SecurityGroup_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseSecurityGroupRule: object = {
    id: '',
    description: '',
    direction: 0,
    protocolName: '',
    protocolNumber: 0,
};

export const SecurityGroupRule = {
    encode(message: SecurityGroupRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            SecurityGroupRule_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.direction !== 0) {
            writer.uint32(32).int32(message.direction);
        }
        if (message.ports !== undefined) {
            PortRange.encode(message.ports, writer.uint32(42).fork()).ldelim();
        }
        if (message.protocolName !== '') {
            writer.uint32(50).string(message.protocolName);
        }
        if (message.protocolNumber !== 0) {
            writer.uint32(56).int64(message.protocolNumber);
        }
        if (message.cidrBlocks !== undefined) {
            CidrBlocks.encode(message.cidrBlocks, writer.uint32(66).fork()).ldelim();
        }
        if (message.securityGroupId !== undefined) {
            writer.uint32(74).string(message.securityGroupId);
        }
        if (message.predefinedTarget !== undefined) {
            writer.uint32(82).string(message.predefinedTarget);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroupRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityGroupRule } as SecurityGroupRule;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    const entry3 = SecurityGroupRule_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.direction = reader.int32() as any;
                    break;
                case 5:
                    message.ports = PortRange.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.protocolName = reader.string();
                    break;
                case 7:
                    message.protocolNumber = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.cidrBlocks = CidrBlocks.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.securityGroupId = reader.string();
                    break;
                case 10:
                    message.predefinedTarget = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityGroupRule {
        const message = { ...baseSecurityGroupRule } as SecurityGroupRule;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.direction =
            object.direction !== undefined && object.direction !== null
                ? securityGroupRule_DirectionFromJSON(object.direction)
                : 0;
        message.ports =
            object.ports !== undefined && object.ports !== null
                ? PortRange.fromJSON(object.ports)
                : undefined;
        message.protocolName =
            object.protocolName !== undefined && object.protocolName !== null
                ? String(object.protocolName)
                : '';
        message.protocolNumber =
            object.protocolNumber !== undefined && object.protocolNumber !== null
                ? Number(object.protocolNumber)
                : 0;
        message.cidrBlocks =
            object.cidrBlocks !== undefined && object.cidrBlocks !== null
                ? CidrBlocks.fromJSON(object.cidrBlocks)
                : undefined;
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : undefined;
        message.predefinedTarget =
            object.predefinedTarget !== undefined && object.predefinedTarget !== null
                ? String(object.predefinedTarget)
                : undefined;
        return message;
    },

    toJSON(message: SecurityGroupRule): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.direction !== undefined &&
            (obj.direction = securityGroupRule_DirectionToJSON(message.direction));
        message.ports !== undefined &&
            (obj.ports = message.ports ? PortRange.toJSON(message.ports) : undefined);
        message.protocolName !== undefined && (obj.protocolName = message.protocolName);
        message.protocolNumber !== undefined &&
            (obj.protocolNumber = Math.round(message.protocolNumber));
        message.cidrBlocks !== undefined &&
            (obj.cidrBlocks = message.cidrBlocks
                ? CidrBlocks.toJSON(message.cidrBlocks)
                : undefined);
        message.securityGroupId !== undefined && (obj.securityGroupId = message.securityGroupId);
        message.predefinedTarget !== undefined && (obj.predefinedTarget = message.predefinedTarget);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityGroupRule>, I>>(object: I): SecurityGroupRule {
        const message = { ...baseSecurityGroupRule } as SecurityGroupRule;
        message.id = object.id ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.direction = object.direction ?? 0;
        message.ports =
            object.ports !== undefined && object.ports !== null
                ? PortRange.fromPartial(object.ports)
                : undefined;
        message.protocolName = object.protocolName ?? '';
        message.protocolNumber = object.protocolNumber ?? 0;
        message.cidrBlocks =
            object.cidrBlocks !== undefined && object.cidrBlocks !== null
                ? CidrBlocks.fromPartial(object.cidrBlocks)
                : undefined;
        message.securityGroupId = object.securityGroupId ?? undefined;
        message.predefinedTarget = object.predefinedTarget ?? undefined;
        return message;
    },
};

const baseSecurityGroupRule_LabelsEntry: object = { key: '', value: '' };

export const SecurityGroupRule_LabelsEntry = {
    encode(
        message: SecurityGroupRule_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroupRule_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityGroupRule_LabelsEntry } as SecurityGroupRule_LabelsEntry;
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

    fromJSON(object: any): SecurityGroupRule_LabelsEntry {
        const message = { ...baseSecurityGroupRule_LabelsEntry } as SecurityGroupRule_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: SecurityGroupRule_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityGroupRule_LabelsEntry>, I>>(
        object: I,
    ): SecurityGroupRule_LabelsEntry {
        const message = { ...baseSecurityGroupRule_LabelsEntry } as SecurityGroupRule_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const basePortRange: object = { fromPort: 0, toPort: 0 };

export const PortRange = {
    encode(message: PortRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fromPort !== 0) {
            writer.uint32(8).int64(message.fromPort);
        }
        if (message.toPort !== 0) {
            writer.uint32(16).int64(message.toPort);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PortRange {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePortRange } as PortRange;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromPort = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.toPort = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PortRange {
        const message = { ...basePortRange } as PortRange;
        message.fromPort =
            object.fromPort !== undefined && object.fromPort !== null ? Number(object.fromPort) : 0;
        message.toPort =
            object.toPort !== undefined && object.toPort !== null ? Number(object.toPort) : 0;
        return message;
    },

    toJSON(message: PortRange): unknown {
        const obj: any = {};
        message.fromPort !== undefined && (obj.fromPort = Math.round(message.fromPort));
        message.toPort !== undefined && (obj.toPort = Math.round(message.toPort));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PortRange>, I>>(object: I): PortRange {
        const message = { ...basePortRange } as PortRange;
        message.fromPort = object.fromPort ?? 0;
        message.toPort = object.toPort ?? 0;
        return message;
    },
};

const baseCidrBlocks: object = { v4CidrBlocks: '', v6CidrBlocks: '' };

export const CidrBlocks = {
    encode(message: CidrBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.v4CidrBlocks) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.v6CidrBlocks) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CidrBlocks {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCidrBlocks } as CidrBlocks;
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 2:
                    message.v6CidrBlocks.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CidrBlocks {
        const message = { ...baseCidrBlocks } as CidrBlocks;
        message.v4CidrBlocks = (object.v4CidrBlocks ?? []).map((e: any) => String(e));
        message.v6CidrBlocks = (object.v6CidrBlocks ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: CidrBlocks): unknown {
        const obj: any = {};
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        } else {
            obj.v4CidrBlocks = [];
        }
        if (message.v6CidrBlocks) {
            obj.v6CidrBlocks = message.v6CidrBlocks.map((e) => e);
        } else {
            obj.v6CidrBlocks = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CidrBlocks>, I>>(object: I): CidrBlocks {
        const message = { ...baseCidrBlocks } as CidrBlocks;
        message.v4CidrBlocks = object.v4CidrBlocks?.map((e) => e) || [];
        message.v6CidrBlocks = object.v6CidrBlocks?.map((e) => e) || [];
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
