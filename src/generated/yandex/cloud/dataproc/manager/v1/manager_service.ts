/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.dataproc.manager.v1';

export enum InitActsState {
    /** INIT_ACTS_STATE_UNSPECIFIED - No init acts on cluster */
    INIT_ACTS_STATE_UNSPECIFIED = 0,
    /** FAILED - At least one failed init act */
    FAILED = 1,
    /** SUCCESSFUL - All init acts succeeded */
    SUCCESSFUL = 2,
    /** IN_PROGRESS - Some init acts not finished */
    IN_PROGRESS = 3,
    UNRECOGNIZED = -1,
}

export function initActsStateFromJSON(object: any): InitActsState {
    switch (object) {
        case 0:
        case 'INIT_ACTS_STATE_UNSPECIFIED':
            return InitActsState.INIT_ACTS_STATE_UNSPECIFIED;
        case 1:
        case 'FAILED':
            return InitActsState.FAILED;
        case 2:
        case 'SUCCESSFUL':
            return InitActsState.SUCCESSFUL;
        case 3:
        case 'IN_PROGRESS':
            return InitActsState.IN_PROGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return InitActsState.UNRECOGNIZED;
    }
}

export function initActsStateToJSON(object: InitActsState): string {
    switch (object) {
        case InitActsState.INIT_ACTS_STATE_UNSPECIFIED:
            return 'INIT_ACTS_STATE_UNSPECIFIED';
        case InitActsState.FAILED:
            return 'FAILED';
        case InitActsState.SUCCESSFUL:
            return 'SUCCESSFUL';
        case InitActsState.IN_PROGRESS:
            return 'IN_PROGRESS';
        default:
            return 'UNKNOWN';
    }
}

export interface HbaseNodeInfo {
    name: string;
    requests: number;
    heapSizeMb: number;
    maxHeapSizeMb: number;
}

export interface HbaseInfo {
    available: boolean;
    regions: number;
    requests: number;
    averageLoad: number;
    liveNodes: HbaseNodeInfo[];
    deadNodes: HbaseNodeInfo[];
}

export interface HDFSNodeInfo {
    name: string;
    used: number;
    remaining: number;
    capacity: number;
    numBlocks: number;
    state: string;
}

export interface HDFSInfo {
    available: boolean;
    percentRemaining: number;
    used: number;
    free: number;
    totalBlocks: number;
    missingBlocks: number;
    missingBlocksReplicaOne: number;
    liveNodes: HDFSNodeInfo[];
    deadNodes: HDFSNodeInfo[];
    safemode: string;
    decommissioningNodes: HDFSNodeInfo[];
    decommissionedNodes: HDFSNodeInfo[];
    /** Actual list of decommission hosts in HDFS namenode memory */
    requestedDecommissionHosts: string[];
}

export interface HiveInfo {
    available: boolean;
    queriesSucceeded: number;
    queriesFailed: number;
    queriesExecuting: number;
    sessionsOpen: number;
    sessionsActive: number;
}

export interface YarnNodeInfo {
    name: string;
    state: string;
    numContainers: number;
    usedMemoryMb: number;
    availableMemoryMb: number;
    updateTime: number;
}

export interface YarnInfo {
    available: boolean;
    liveNodes: YarnNodeInfo[];
    /** Actual list of decommission hosts in Yarn resource manager memory */
    requestedDecommissionHosts: string[];
}

export interface ZookeeperInfo {
    alive: boolean;
}

export interface OozieInfo {
    alive: boolean;
}

export interface LivyInfo {
    alive: boolean;
}

export interface InitActs {
    state: InitActsState;
    /** fqdns of nodes for error message */
    fqdns: string[];
}

export interface Info {
    hdfs?: HDFSInfo;
    yarn?: YarnInfo;
    hive?: HiveInfo;
    zookeeper?: ZookeeperInfo;
    hbase?: HbaseInfo;
    oozie?: OozieInfo;
    /**
     * Report count is incremented every time report is sent by Dataproc Agent.
     * So Worker can use this property to make sure that Dataproc Agent got data sent by Worker through Dataproc Manager
     * for synchronization purposes
     */
    reportCount: number;
    livy?: LivyInfo;
    initActs?: InitActs;
}

/** The request message containing the host status report. */
export interface ReportRequest {
    cid: string;
    topologyRevision: number;
    info?: Info;
    collectedAt?: Date;
}

/** The response message containing the agent commands to apply on host. */
export interface ReportReply {
    decommissionTimeout: number;
    yarnHostsToDecommission: string[];
    hdfsHostsToDecommission: string[];
}

const baseHbaseNodeInfo: object = { name: '', requests: 0, heapSizeMb: 0, maxHeapSizeMb: 0 };

export const HbaseNodeInfo = {
    encode(message: HbaseNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.requests !== 0) {
            writer.uint32(16).int64(message.requests);
        }
        if (message.heapSizeMb !== 0) {
            writer.uint32(24).int64(message.heapSizeMb);
        }
        if (message.maxHeapSizeMb !== 0) {
            writer.uint32(32).int64(message.maxHeapSizeMb);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HbaseNodeInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHbaseNodeInfo } as HbaseNodeInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requests = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.heapSizeMb = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.maxHeapSizeMb = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HbaseNodeInfo {
        const message = { ...baseHbaseNodeInfo } as HbaseNodeInfo;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.requests =
            object.requests !== undefined && object.requests !== null ? Number(object.requests) : 0;
        message.heapSizeMb =
            object.heapSizeMb !== undefined && object.heapSizeMb !== null
                ? Number(object.heapSizeMb)
                : 0;
        message.maxHeapSizeMb =
            object.maxHeapSizeMb !== undefined && object.maxHeapSizeMb !== null
                ? Number(object.maxHeapSizeMb)
                : 0;
        return message;
    },

    toJSON(message: HbaseNodeInfo): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.requests !== undefined && (obj.requests = Math.round(message.requests));
        message.heapSizeMb !== undefined && (obj.heapSizeMb = Math.round(message.heapSizeMb));
        message.maxHeapSizeMb !== undefined &&
            (obj.maxHeapSizeMb = Math.round(message.maxHeapSizeMb));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HbaseNodeInfo>, I>>(object: I): HbaseNodeInfo {
        const message = { ...baseHbaseNodeInfo } as HbaseNodeInfo;
        message.name = object.name ?? '';
        message.requests = object.requests ?? 0;
        message.heapSizeMb = object.heapSizeMb ?? 0;
        message.maxHeapSizeMb = object.maxHeapSizeMb ?? 0;
        return message;
    },
};

const baseHbaseInfo: object = { available: false, regions: 0, requests: 0, averageLoad: 0 };

export const HbaseInfo = {
    encode(message: HbaseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.regions !== 0) {
            writer.uint32(16).int64(message.regions);
        }
        if (message.requests !== 0) {
            writer.uint32(24).int64(message.requests);
        }
        if (message.averageLoad !== 0) {
            writer.uint32(33).double(message.averageLoad);
        }
        for (const v of message.liveNodes) {
            HbaseNodeInfo.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.deadNodes) {
            HbaseNodeInfo.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HbaseInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHbaseInfo } as HbaseInfo;
        message.liveNodes = [];
        message.deadNodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.regions = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.requests = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.averageLoad = reader.double();
                    break;
                case 5:
                    message.liveNodes.push(HbaseNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deadNodes.push(HbaseNodeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HbaseInfo {
        const message = { ...baseHbaseInfo } as HbaseInfo;
        message.available =
            object.available !== undefined && object.available !== null
                ? Boolean(object.available)
                : false;
        message.regions =
            object.regions !== undefined && object.regions !== null ? Number(object.regions) : 0;
        message.requests =
            object.requests !== undefined && object.requests !== null ? Number(object.requests) : 0;
        message.averageLoad =
            object.averageLoad !== undefined && object.averageLoad !== null
                ? Number(object.averageLoad)
                : 0;
        message.liveNodes = (object.liveNodes ?? []).map((e: any) => HbaseNodeInfo.fromJSON(e));
        message.deadNodes = (object.deadNodes ?? []).map((e: any) => HbaseNodeInfo.fromJSON(e));
        return message;
    },

    toJSON(message: HbaseInfo): unknown {
        const obj: any = {};
        message.available !== undefined && (obj.available = message.available);
        message.regions !== undefined && (obj.regions = Math.round(message.regions));
        message.requests !== undefined && (obj.requests = Math.round(message.requests));
        message.averageLoad !== undefined && (obj.averageLoad = message.averageLoad);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => (e ? HbaseNodeInfo.toJSON(e) : undefined));
        } else {
            obj.liveNodes = [];
        }
        if (message.deadNodes) {
            obj.deadNodes = message.deadNodes.map((e) => (e ? HbaseNodeInfo.toJSON(e) : undefined));
        } else {
            obj.deadNodes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HbaseInfo>, I>>(object: I): HbaseInfo {
        const message = { ...baseHbaseInfo } as HbaseInfo;
        message.available = object.available ?? false;
        message.regions = object.regions ?? 0;
        message.requests = object.requests ?? 0;
        message.averageLoad = object.averageLoad ?? 0;
        message.liveNodes = object.liveNodes?.map((e) => HbaseNodeInfo.fromPartial(e)) || [];
        message.deadNodes = object.deadNodes?.map((e) => HbaseNodeInfo.fromPartial(e)) || [];
        return message;
    },
};

const baseHDFSNodeInfo: object = {
    name: '',
    used: 0,
    remaining: 0,
    capacity: 0,
    numBlocks: 0,
    state: '',
};

export const HDFSNodeInfo = {
    encode(message: HDFSNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.remaining !== 0) {
            writer.uint32(24).int64(message.remaining);
        }
        if (message.capacity !== 0) {
            writer.uint32(32).int64(message.capacity);
        }
        if (message.numBlocks !== 0) {
            writer.uint32(40).int64(message.numBlocks);
        }
        if (message.state !== '') {
            writer.uint32(50).string(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HDFSNodeInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHDFSNodeInfo } as HDFSNodeInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.used = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.remaining = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.capacity = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.numBlocks = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HDFSNodeInfo {
        const message = { ...baseHDFSNodeInfo } as HDFSNodeInfo;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.used = object.used !== undefined && object.used !== null ? Number(object.used) : 0;
        message.remaining =
            object.remaining !== undefined && object.remaining !== null
                ? Number(object.remaining)
                : 0;
        message.capacity =
            object.capacity !== undefined && object.capacity !== null ? Number(object.capacity) : 0;
        message.numBlocks =
            object.numBlocks !== undefined && object.numBlocks !== null
                ? Number(object.numBlocks)
                : 0;
        message.state =
            object.state !== undefined && object.state !== null ? String(object.state) : '';
        return message;
    },

    toJSON(message: HDFSNodeInfo): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.remaining !== undefined && (obj.remaining = Math.round(message.remaining));
        message.capacity !== undefined && (obj.capacity = Math.round(message.capacity));
        message.numBlocks !== undefined && (obj.numBlocks = Math.round(message.numBlocks));
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HDFSNodeInfo>, I>>(object: I): HDFSNodeInfo {
        const message = { ...baseHDFSNodeInfo } as HDFSNodeInfo;
        message.name = object.name ?? '';
        message.used = object.used ?? 0;
        message.remaining = object.remaining ?? 0;
        message.capacity = object.capacity ?? 0;
        message.numBlocks = object.numBlocks ?? 0;
        message.state = object.state ?? '';
        return message;
    },
};

const baseHDFSInfo: object = {
    available: false,
    percentRemaining: 0,
    used: 0,
    free: 0,
    totalBlocks: 0,
    missingBlocks: 0,
    missingBlocksReplicaOne: 0,
    safemode: '',
    requestedDecommissionHosts: '',
};

export const HDFSInfo = {
    encode(message: HDFSInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.percentRemaining !== 0) {
            writer.uint32(17).double(message.percentRemaining);
        }
        if (message.used !== 0) {
            writer.uint32(24).int64(message.used);
        }
        if (message.free !== 0) {
            writer.uint32(32).int64(message.free);
        }
        if (message.totalBlocks !== 0) {
            writer.uint32(40).int64(message.totalBlocks);
        }
        if (message.missingBlocks !== 0) {
            writer.uint32(48).int64(message.missingBlocks);
        }
        if (message.missingBlocksReplicaOne !== 0) {
            writer.uint32(56).int64(message.missingBlocksReplicaOne);
        }
        for (const v of message.liveNodes) {
            HDFSNodeInfo.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.deadNodes) {
            HDFSNodeInfo.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.safemode !== '') {
            writer.uint32(90).string(message.safemode);
        }
        for (const v of message.decommissioningNodes) {
            HDFSNodeInfo.encode(v!, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.decommissionedNodes) {
            HDFSNodeInfo.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.requestedDecommissionHosts) {
            writer.uint32(114).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HDFSInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHDFSInfo } as HDFSInfo;
        message.liveNodes = [];
        message.deadNodes = [];
        message.decommissioningNodes = [];
        message.decommissionedNodes = [];
        message.requestedDecommissionHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.percentRemaining = reader.double();
                    break;
                case 3:
                    message.used = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.free = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.totalBlocks = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.missingBlocks = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.missingBlocksReplicaOne = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.liveNodes.push(HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.deadNodes.push(HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.safemode = reader.string();
                    break;
                case 12:
                    message.decommissioningNodes.push(HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.decommissionedNodes.push(HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.requestedDecommissionHosts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HDFSInfo {
        const message = { ...baseHDFSInfo } as HDFSInfo;
        message.available =
            object.available !== undefined && object.available !== null
                ? Boolean(object.available)
                : false;
        message.percentRemaining =
            object.percentRemaining !== undefined && object.percentRemaining !== null
                ? Number(object.percentRemaining)
                : 0;
        message.used = object.used !== undefined && object.used !== null ? Number(object.used) : 0;
        message.free = object.free !== undefined && object.free !== null ? Number(object.free) : 0;
        message.totalBlocks =
            object.totalBlocks !== undefined && object.totalBlocks !== null
                ? Number(object.totalBlocks)
                : 0;
        message.missingBlocks =
            object.missingBlocks !== undefined && object.missingBlocks !== null
                ? Number(object.missingBlocks)
                : 0;
        message.missingBlocksReplicaOne =
            object.missingBlocksReplicaOne !== undefined && object.missingBlocksReplicaOne !== null
                ? Number(object.missingBlocksReplicaOne)
                : 0;
        message.liveNodes = (object.liveNodes ?? []).map((e: any) => HDFSNodeInfo.fromJSON(e));
        message.deadNodes = (object.deadNodes ?? []).map((e: any) => HDFSNodeInfo.fromJSON(e));
        message.safemode =
            object.safemode !== undefined && object.safemode !== null
                ? String(object.safemode)
                : '';
        message.decommissioningNodes = (object.decommissioningNodes ?? []).map((e: any) =>
            HDFSNodeInfo.fromJSON(e),
        );
        message.decommissionedNodes = (object.decommissionedNodes ?? []).map((e: any) =>
            HDFSNodeInfo.fromJSON(e),
        );
        message.requestedDecommissionHosts = (object.requestedDecommissionHosts ?? []).map(
            (e: any) => String(e),
        );
        return message;
    },

    toJSON(message: HDFSInfo): unknown {
        const obj: any = {};
        message.available !== undefined && (obj.available = message.available);
        message.percentRemaining !== undefined && (obj.percentRemaining = message.percentRemaining);
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.free !== undefined && (obj.free = Math.round(message.free));
        message.totalBlocks !== undefined && (obj.totalBlocks = Math.round(message.totalBlocks));
        message.missingBlocks !== undefined &&
            (obj.missingBlocks = Math.round(message.missingBlocks));
        message.missingBlocksReplicaOne !== undefined &&
            (obj.missingBlocksReplicaOne = Math.round(message.missingBlocksReplicaOne));
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => (e ? HDFSNodeInfo.toJSON(e) : undefined));
        } else {
            obj.liveNodes = [];
        }
        if (message.deadNodes) {
            obj.deadNodes = message.deadNodes.map((e) => (e ? HDFSNodeInfo.toJSON(e) : undefined));
        } else {
            obj.deadNodes = [];
        }
        message.safemode !== undefined && (obj.safemode = message.safemode);
        if (message.decommissioningNodes) {
            obj.decommissioningNodes = message.decommissioningNodes.map((e) =>
                e ? HDFSNodeInfo.toJSON(e) : undefined,
            );
        } else {
            obj.decommissioningNodes = [];
        }
        if (message.decommissionedNodes) {
            obj.decommissionedNodes = message.decommissionedNodes.map((e) =>
                e ? HDFSNodeInfo.toJSON(e) : undefined,
            );
        } else {
            obj.decommissionedNodes = [];
        }
        if (message.requestedDecommissionHosts) {
            obj.requestedDecommissionHosts = message.requestedDecommissionHosts.map((e) => e);
        } else {
            obj.requestedDecommissionHosts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HDFSInfo>, I>>(object: I): HDFSInfo {
        const message = { ...baseHDFSInfo } as HDFSInfo;
        message.available = object.available ?? false;
        message.percentRemaining = object.percentRemaining ?? 0;
        message.used = object.used ?? 0;
        message.free = object.free ?? 0;
        message.totalBlocks = object.totalBlocks ?? 0;
        message.missingBlocks = object.missingBlocks ?? 0;
        message.missingBlocksReplicaOne = object.missingBlocksReplicaOne ?? 0;
        message.liveNodes = object.liveNodes?.map((e) => HDFSNodeInfo.fromPartial(e)) || [];
        message.deadNodes = object.deadNodes?.map((e) => HDFSNodeInfo.fromPartial(e)) || [];
        message.safemode = object.safemode ?? '';
        message.decommissioningNodes =
            object.decommissioningNodes?.map((e) => HDFSNodeInfo.fromPartial(e)) || [];
        message.decommissionedNodes =
            object.decommissionedNodes?.map((e) => HDFSNodeInfo.fromPartial(e)) || [];
        message.requestedDecommissionHosts = object.requestedDecommissionHosts?.map((e) => e) || [];
        return message;
    },
};

const baseHiveInfo: object = {
    available: false,
    queriesSucceeded: 0,
    queriesFailed: 0,
    queriesExecuting: 0,
    sessionsOpen: 0,
    sessionsActive: 0,
};

export const HiveInfo = {
    encode(message: HiveInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.queriesSucceeded !== 0) {
            writer.uint32(16).int64(message.queriesSucceeded);
        }
        if (message.queriesFailed !== 0) {
            writer.uint32(24).int64(message.queriesFailed);
        }
        if (message.queriesExecuting !== 0) {
            writer.uint32(32).int64(message.queriesExecuting);
        }
        if (message.sessionsOpen !== 0) {
            writer.uint32(40).int64(message.sessionsOpen);
        }
        if (message.sessionsActive !== 0) {
            writer.uint32(48).int64(message.sessionsActive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HiveInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHiveInfo } as HiveInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.queriesSucceeded = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.queriesFailed = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.queriesExecuting = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.sessionsOpen = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.sessionsActive = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HiveInfo {
        const message = { ...baseHiveInfo } as HiveInfo;
        message.available =
            object.available !== undefined && object.available !== null
                ? Boolean(object.available)
                : false;
        message.queriesSucceeded =
            object.queriesSucceeded !== undefined && object.queriesSucceeded !== null
                ? Number(object.queriesSucceeded)
                : 0;
        message.queriesFailed =
            object.queriesFailed !== undefined && object.queriesFailed !== null
                ? Number(object.queriesFailed)
                : 0;
        message.queriesExecuting =
            object.queriesExecuting !== undefined && object.queriesExecuting !== null
                ? Number(object.queriesExecuting)
                : 0;
        message.sessionsOpen =
            object.sessionsOpen !== undefined && object.sessionsOpen !== null
                ? Number(object.sessionsOpen)
                : 0;
        message.sessionsActive =
            object.sessionsActive !== undefined && object.sessionsActive !== null
                ? Number(object.sessionsActive)
                : 0;
        return message;
    },

    toJSON(message: HiveInfo): unknown {
        const obj: any = {};
        message.available !== undefined && (obj.available = message.available);
        message.queriesSucceeded !== undefined &&
            (obj.queriesSucceeded = Math.round(message.queriesSucceeded));
        message.queriesFailed !== undefined &&
            (obj.queriesFailed = Math.round(message.queriesFailed));
        message.queriesExecuting !== undefined &&
            (obj.queriesExecuting = Math.round(message.queriesExecuting));
        message.sessionsOpen !== undefined && (obj.sessionsOpen = Math.round(message.sessionsOpen));
        message.sessionsActive !== undefined &&
            (obj.sessionsActive = Math.round(message.sessionsActive));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HiveInfo>, I>>(object: I): HiveInfo {
        const message = { ...baseHiveInfo } as HiveInfo;
        message.available = object.available ?? false;
        message.queriesSucceeded = object.queriesSucceeded ?? 0;
        message.queriesFailed = object.queriesFailed ?? 0;
        message.queriesExecuting = object.queriesExecuting ?? 0;
        message.sessionsOpen = object.sessionsOpen ?? 0;
        message.sessionsActive = object.sessionsActive ?? 0;
        return message;
    },
};

const baseYarnNodeInfo: object = {
    name: '',
    state: '',
    numContainers: 0,
    usedMemoryMb: 0,
    availableMemoryMb: 0,
    updateTime: 0,
};

export const YarnNodeInfo = {
    encode(message: YarnNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.state !== '') {
            writer.uint32(18).string(message.state);
        }
        if (message.numContainers !== 0) {
            writer.uint32(24).int64(message.numContainers);
        }
        if (message.usedMemoryMb !== 0) {
            writer.uint32(32).int64(message.usedMemoryMb);
        }
        if (message.availableMemoryMb !== 0) {
            writer.uint32(40).int64(message.availableMemoryMb);
        }
        if (message.updateTime !== 0) {
            writer.uint32(48).int64(message.updateTime);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YarnNodeInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYarnNodeInfo } as YarnNodeInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.state = reader.string();
                    break;
                case 3:
                    message.numContainers = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.usedMemoryMb = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.availableMemoryMb = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.updateTime = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YarnNodeInfo {
        const message = { ...baseYarnNodeInfo } as YarnNodeInfo;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.state =
            object.state !== undefined && object.state !== null ? String(object.state) : '';
        message.numContainers =
            object.numContainers !== undefined && object.numContainers !== null
                ? Number(object.numContainers)
                : 0;
        message.usedMemoryMb =
            object.usedMemoryMb !== undefined && object.usedMemoryMb !== null
                ? Number(object.usedMemoryMb)
                : 0;
        message.availableMemoryMb =
            object.availableMemoryMb !== undefined && object.availableMemoryMb !== null
                ? Number(object.availableMemoryMb)
                : 0;
        message.updateTime =
            object.updateTime !== undefined && object.updateTime !== null
                ? Number(object.updateTime)
                : 0;
        return message;
    },

    toJSON(message: YarnNodeInfo): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.state !== undefined && (obj.state = message.state);
        message.numContainers !== undefined &&
            (obj.numContainers = Math.round(message.numContainers));
        message.usedMemoryMb !== undefined && (obj.usedMemoryMb = Math.round(message.usedMemoryMb));
        message.availableMemoryMb !== undefined &&
            (obj.availableMemoryMb = Math.round(message.availableMemoryMb));
        message.updateTime !== undefined && (obj.updateTime = Math.round(message.updateTime));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YarnNodeInfo>, I>>(object: I): YarnNodeInfo {
        const message = { ...baseYarnNodeInfo } as YarnNodeInfo;
        message.name = object.name ?? '';
        message.state = object.state ?? '';
        message.numContainers = object.numContainers ?? 0;
        message.usedMemoryMb = object.usedMemoryMb ?? 0;
        message.availableMemoryMb = object.availableMemoryMb ?? 0;
        message.updateTime = object.updateTime ?? 0;
        return message;
    },
};

const baseYarnInfo: object = { available: false, requestedDecommissionHosts: '' };

export const YarnInfo = {
    encode(message: YarnInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        for (const v of message.liveNodes) {
            YarnNodeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.requestedDecommissionHosts) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YarnInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYarnInfo } as YarnInfo;
        message.liveNodes = [];
        message.requestedDecommissionHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.liveNodes.push(YarnNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.requestedDecommissionHosts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YarnInfo {
        const message = { ...baseYarnInfo } as YarnInfo;
        message.available =
            object.available !== undefined && object.available !== null
                ? Boolean(object.available)
                : false;
        message.liveNodes = (object.liveNodes ?? []).map((e: any) => YarnNodeInfo.fromJSON(e));
        message.requestedDecommissionHosts = (object.requestedDecommissionHosts ?? []).map(
            (e: any) => String(e),
        );
        return message;
    },

    toJSON(message: YarnInfo): unknown {
        const obj: any = {};
        message.available !== undefined && (obj.available = message.available);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => (e ? YarnNodeInfo.toJSON(e) : undefined));
        } else {
            obj.liveNodes = [];
        }
        if (message.requestedDecommissionHosts) {
            obj.requestedDecommissionHosts = message.requestedDecommissionHosts.map((e) => e);
        } else {
            obj.requestedDecommissionHosts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<YarnInfo>, I>>(object: I): YarnInfo {
        const message = { ...baseYarnInfo } as YarnInfo;
        message.available = object.available ?? false;
        message.liveNodes = object.liveNodes?.map((e) => YarnNodeInfo.fromPartial(e)) || [];
        message.requestedDecommissionHosts = object.requestedDecommissionHosts?.map((e) => e) || [];
        return message;
    },
};

const baseZookeeperInfo: object = { alive: false };

export const ZookeeperInfo = {
    encode(message: ZookeeperInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ZookeeperInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZookeeperInfo } as ZookeeperInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ZookeeperInfo {
        const message = { ...baseZookeeperInfo } as ZookeeperInfo;
        message.alive =
            object.alive !== undefined && object.alive !== null ? Boolean(object.alive) : false;
        return message;
    },

    toJSON(message: ZookeeperInfo): unknown {
        const obj: any = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ZookeeperInfo>, I>>(object: I): ZookeeperInfo {
        const message = { ...baseZookeeperInfo } as ZookeeperInfo;
        message.alive = object.alive ?? false;
        return message;
    },
};

const baseOozieInfo: object = { alive: false };

export const OozieInfo = {
    encode(message: OozieInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OozieInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOozieInfo } as OozieInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OozieInfo {
        const message = { ...baseOozieInfo } as OozieInfo;
        message.alive =
            object.alive !== undefined && object.alive !== null ? Boolean(object.alive) : false;
        return message;
    },

    toJSON(message: OozieInfo): unknown {
        const obj: any = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OozieInfo>, I>>(object: I): OozieInfo {
        const message = { ...baseOozieInfo } as OozieInfo;
        message.alive = object.alive ?? false;
        return message;
    },
};

const baseLivyInfo: object = { alive: false };

export const LivyInfo = {
    encode(message: LivyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LivyInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLivyInfo } as LivyInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LivyInfo {
        const message = { ...baseLivyInfo } as LivyInfo;
        message.alive =
            object.alive !== undefined && object.alive !== null ? Boolean(object.alive) : false;
        return message;
    },

    toJSON(message: LivyInfo): unknown {
        const obj: any = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LivyInfo>, I>>(object: I): LivyInfo {
        const message = { ...baseLivyInfo } as LivyInfo;
        message.alive = object.alive ?? false;
        return message;
    },
};

const baseInitActs: object = { state: 0, fqdns: '' };

export const InitActs = {
    encode(message: InitActs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        for (const v of message.fqdns) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InitActs {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInitActs } as InitActs;
        message.fqdns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32() as any;
                    break;
                case 2:
                    message.fqdns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InitActs {
        const message = { ...baseInitActs } as InitActs;
        message.state =
            object.state !== undefined && object.state !== null
                ? initActsStateFromJSON(object.state)
                : 0;
        message.fqdns = (object.fqdns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: InitActs): unknown {
        const obj: any = {};
        message.state !== undefined && (obj.state = initActsStateToJSON(message.state));
        if (message.fqdns) {
            obj.fqdns = message.fqdns.map((e) => e);
        } else {
            obj.fqdns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<InitActs>, I>>(object: I): InitActs {
        const message = { ...baseInitActs } as InitActs;
        message.state = object.state ?? 0;
        message.fqdns = object.fqdns?.map((e) => e) || [];
        return message;
    },
};

const baseInfo: object = { reportCount: 0 };

export const Info = {
    encode(message: Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hdfs !== undefined) {
            HDFSInfo.encode(message.hdfs, writer.uint32(10).fork()).ldelim();
        }
        if (message.yarn !== undefined) {
            YarnInfo.encode(message.yarn, writer.uint32(18).fork()).ldelim();
        }
        if (message.hive !== undefined) {
            HiveInfo.encode(message.hive, writer.uint32(26).fork()).ldelim();
        }
        if (message.zookeeper !== undefined) {
            ZookeeperInfo.encode(message.zookeeper, writer.uint32(34).fork()).ldelim();
        }
        if (message.hbase !== undefined) {
            HbaseInfo.encode(message.hbase, writer.uint32(42).fork()).ldelim();
        }
        if (message.oozie !== undefined) {
            OozieInfo.encode(message.oozie, writer.uint32(50).fork()).ldelim();
        }
        if (message.reportCount !== 0) {
            writer.uint32(56).int64(message.reportCount);
        }
        if (message.livy !== undefined) {
            LivyInfo.encode(message.livy, writer.uint32(66).fork()).ldelim();
        }
        if (message.initActs !== undefined) {
            InitActs.encode(message.initActs, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Info {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInfo } as Info;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hdfs = HDFSInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.yarn = YarnInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hive = HiveInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.zookeeper = ZookeeperInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.hbase = HbaseInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.oozie = OozieInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.reportCount = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.livy = LivyInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.initActs = InitActs.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Info {
        const message = { ...baseInfo } as Info;
        message.hdfs =
            object.hdfs !== undefined && object.hdfs !== null
                ? HDFSInfo.fromJSON(object.hdfs)
                : undefined;
        message.yarn =
            object.yarn !== undefined && object.yarn !== null
                ? YarnInfo.fromJSON(object.yarn)
                : undefined;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? HiveInfo.fromJSON(object.hive)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? ZookeeperInfo.fromJSON(object.zookeeper)
                : undefined;
        message.hbase =
            object.hbase !== undefined && object.hbase !== null
                ? HbaseInfo.fromJSON(object.hbase)
                : undefined;
        message.oozie =
            object.oozie !== undefined && object.oozie !== null
                ? OozieInfo.fromJSON(object.oozie)
                : undefined;
        message.reportCount =
            object.reportCount !== undefined && object.reportCount !== null
                ? Number(object.reportCount)
                : 0;
        message.livy =
            object.livy !== undefined && object.livy !== null
                ? LivyInfo.fromJSON(object.livy)
                : undefined;
        message.initActs =
            object.initActs !== undefined && object.initActs !== null
                ? InitActs.fromJSON(object.initActs)
                : undefined;
        return message;
    },

    toJSON(message: Info): unknown {
        const obj: any = {};
        message.hdfs !== undefined &&
            (obj.hdfs = message.hdfs ? HDFSInfo.toJSON(message.hdfs) : undefined);
        message.yarn !== undefined &&
            (obj.yarn = message.yarn ? YarnInfo.toJSON(message.yarn) : undefined);
        message.hive !== undefined &&
            (obj.hive = message.hive ? HiveInfo.toJSON(message.hive) : undefined);
        message.zookeeper !== undefined &&
            (obj.zookeeper = message.zookeeper
                ? ZookeeperInfo.toJSON(message.zookeeper)
                : undefined);
        message.hbase !== undefined &&
            (obj.hbase = message.hbase ? HbaseInfo.toJSON(message.hbase) : undefined);
        message.oozie !== undefined &&
            (obj.oozie = message.oozie ? OozieInfo.toJSON(message.oozie) : undefined);
        message.reportCount !== undefined && (obj.reportCount = Math.round(message.reportCount));
        message.livy !== undefined &&
            (obj.livy = message.livy ? LivyInfo.toJSON(message.livy) : undefined);
        message.initActs !== undefined &&
            (obj.initActs = message.initActs ? InitActs.toJSON(message.initActs) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Info>, I>>(object: I): Info {
        const message = { ...baseInfo } as Info;
        message.hdfs =
            object.hdfs !== undefined && object.hdfs !== null
                ? HDFSInfo.fromPartial(object.hdfs)
                : undefined;
        message.yarn =
            object.yarn !== undefined && object.yarn !== null
                ? YarnInfo.fromPartial(object.yarn)
                : undefined;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? HiveInfo.fromPartial(object.hive)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? ZookeeperInfo.fromPartial(object.zookeeper)
                : undefined;
        message.hbase =
            object.hbase !== undefined && object.hbase !== null
                ? HbaseInfo.fromPartial(object.hbase)
                : undefined;
        message.oozie =
            object.oozie !== undefined && object.oozie !== null
                ? OozieInfo.fromPartial(object.oozie)
                : undefined;
        message.reportCount = object.reportCount ?? 0;
        message.livy =
            object.livy !== undefined && object.livy !== null
                ? LivyInfo.fromPartial(object.livy)
                : undefined;
        message.initActs =
            object.initActs !== undefined && object.initActs !== null
                ? InitActs.fromPartial(object.initActs)
                : undefined;
        return message;
    },
};

const baseReportRequest: object = { cid: '', topologyRevision: 0 };

export const ReportRequest = {
    encode(message: ReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cid !== '') {
            writer.uint32(10).string(message.cid);
        }
        if (message.topologyRevision !== 0) {
            writer.uint32(16).int64(message.topologyRevision);
        }
        if (message.info !== undefined) {
            Info.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.collectedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.collectedAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReportRequest } as ReportRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.topologyRevision = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.info = Info.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.collectedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReportRequest {
        const message = { ...baseReportRequest } as ReportRequest;
        message.cid = object.cid !== undefined && object.cid !== null ? String(object.cid) : '';
        message.topologyRevision =
            object.topologyRevision !== undefined && object.topologyRevision !== null
                ? Number(object.topologyRevision)
                : 0;
        message.info =
            object.info !== undefined && object.info !== null
                ? Info.fromJSON(object.info)
                : undefined;
        message.collectedAt =
            object.collectedAt !== undefined && object.collectedAt !== null
                ? fromJsonTimestamp(object.collectedAt)
                : undefined;
        return message;
    },

    toJSON(message: ReportRequest): unknown {
        const obj: any = {};
        message.cid !== undefined && (obj.cid = message.cid);
        message.topologyRevision !== undefined &&
            (obj.topologyRevision = Math.round(message.topologyRevision));
        message.info !== undefined &&
            (obj.info = message.info ? Info.toJSON(message.info) : undefined);
        message.collectedAt !== undefined && (obj.collectedAt = message.collectedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReportRequest>, I>>(object: I): ReportRequest {
        const message = { ...baseReportRequest } as ReportRequest;
        message.cid = object.cid ?? '';
        message.topologyRevision = object.topologyRevision ?? 0;
        message.info =
            object.info !== undefined && object.info !== null
                ? Info.fromPartial(object.info)
                : undefined;
        message.collectedAt = object.collectedAt ?? undefined;
        return message;
    },
};

const baseReportReply: object = {
    decommissionTimeout: 0,
    yarnHostsToDecommission: '',
    hdfsHostsToDecommission: '',
};

export const ReportReply = {
    encode(message: ReportReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.decommissionTimeout !== 0) {
            writer.uint32(8).int64(message.decommissionTimeout);
        }
        for (const v of message.yarnHostsToDecommission) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.hdfsHostsToDecommission) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReportReply {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReportReply } as ReportReply;
        message.yarnHostsToDecommission = [];
        message.hdfsHostsToDecommission = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.decommissionTimeout = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.yarnHostsToDecommission.push(reader.string());
                    break;
                case 3:
                    message.hdfsHostsToDecommission.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReportReply {
        const message = { ...baseReportReply } as ReportReply;
        message.decommissionTimeout =
            object.decommissionTimeout !== undefined && object.decommissionTimeout !== null
                ? Number(object.decommissionTimeout)
                : 0;
        message.yarnHostsToDecommission = (object.yarnHostsToDecommission ?? []).map((e: any) =>
            String(e),
        );
        message.hdfsHostsToDecommission = (object.hdfsHostsToDecommission ?? []).map((e: any) =>
            String(e),
        );
        return message;
    },

    toJSON(message: ReportReply): unknown {
        const obj: any = {};
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = Math.round(message.decommissionTimeout));
        if (message.yarnHostsToDecommission) {
            obj.yarnHostsToDecommission = message.yarnHostsToDecommission.map((e) => e);
        } else {
            obj.yarnHostsToDecommission = [];
        }
        if (message.hdfsHostsToDecommission) {
            obj.hdfsHostsToDecommission = message.hdfsHostsToDecommission.map((e) => e);
        } else {
            obj.hdfsHostsToDecommission = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReportReply>, I>>(object: I): ReportReply {
        const message = { ...baseReportReply } as ReportReply;
        message.decommissionTimeout = object.decommissionTimeout ?? 0;
        message.yarnHostsToDecommission = object.yarnHostsToDecommission?.map((e) => e) || [];
        message.hdfsHostsToDecommission = object.hdfsHostsToDecommission?.map((e) => e) || [];
        return message;
    },
};

/** Data Proc manager service definition. */
export const DataprocManagerServiceService = {
    /** Sends a status report from a host. */
    report: {
        path: '/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ReportRequest) =>
            Buffer.from(ReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ReportRequest.decode(value),
        responseSerialize: (value: ReportReply) => Buffer.from(ReportReply.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ReportReply.decode(value),
    },
} as const;

export interface DataprocManagerServiceServer extends UntypedServiceImplementation {
    /** Sends a status report from a host. */
    report: handleUnaryCall<ReportRequest, ReportReply>;
}

export interface DataprocManagerServiceClient extends Client {
    /** Sends a status report from a host. */
    report(
        request: ReportRequest,
        callback: (error: ServiceError | null, response: ReportReply) => void,
    ): ClientUnaryCall;
    report(
        request: ReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ReportReply) => void,
    ): ClientUnaryCall;
    report(
        request: ReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ReportReply) => void,
    ): ClientUnaryCall;
}

export const DataprocManagerServiceClient = makeGenericClientConstructor(
    DataprocManagerServiceService,
    'yandex.cloud.dataproc.manager.v1.DataprocManagerService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): DataprocManagerServiceClient;
    service: typeof DataprocManagerServiceService;
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
