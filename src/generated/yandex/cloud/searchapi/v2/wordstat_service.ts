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
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.searchapi.v2';

export enum Device {
    DEVICE_UNSPECIFIED = 0,
    /** DEVICE_ALL - All devices. */
    DEVICE_ALL = 1,
    /** DEVICE_DESKTOP - Desktop computers. */
    DEVICE_DESKTOP = 2,
    /** DEVICE_PHONE - Phones. */
    DEVICE_PHONE = 3,
    /** DEVICE_TABLET - Tablets. */
    DEVICE_TABLET = 4,
    UNRECOGNIZED = -1,
}

export function deviceFromJSON(object: any): Device {
    switch (object) {
        case 0:
        case 'DEVICE_UNSPECIFIED':
            return Device.DEVICE_UNSPECIFIED;
        case 1:
        case 'DEVICE_ALL':
            return Device.DEVICE_ALL;
        case 2:
        case 'DEVICE_DESKTOP':
            return Device.DEVICE_DESKTOP;
        case 3:
        case 'DEVICE_PHONE':
            return Device.DEVICE_PHONE;
        case 4:
        case 'DEVICE_TABLET':
            return Device.DEVICE_TABLET;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Device.UNRECOGNIZED;
    }
}

export function deviceToJSON(object: Device): string {
    switch (object) {
        case Device.DEVICE_UNSPECIFIED:
            return 'DEVICE_UNSPECIFIED';
        case Device.DEVICE_ALL:
            return 'DEVICE_ALL';
        case Device.DEVICE_DESKTOP:
            return 'DEVICE_DESKTOP';
        case Device.DEVICE_PHONE:
            return 'DEVICE_PHONE';
        case Device.DEVICE_TABLET:
            return 'DEVICE_TABLET';
        default:
            return 'UNKNOWN';
    }
}

export interface GetTopRequest {
    /** Keyword */
    phrase: string;
    /** Number of the phrases in the response. */
    numPhrases: number;
    /** A list of IDs of the regions a query was made from. */
    regions: string[];
    /** A list of device types a query was made from. */
    devices: Device[];
    /** ID of the folder. */
    folderId: string;
}

export interface GetTopResponse {
    /** Total number of the queries that contain all the keywords, regardless of their order. */
    totalCount: number;
    /** Results. */
    results: GetTopResponse_PhraseInfo[];
    /** Queries that are similar to the specified one. */
    associations: GetTopResponse_PhraseInfo[];
}

export interface GetTopResponse_PhraseInfo {
    /** Keyword. */
    phrase: string;
    /** Number of queries made. */
    count: number;
}

export interface GetDynamicsRequest {
    /** Keyword. */
    phrase: string;
    /** The period of aggregation of the number of queries. */
    period: GetDynamicsRequest_Period;
    /** The start of the period data is requested for. */
    fromDate?: Date;
    /** The end of the period data is requested for. */
    toDate?: Date;
    /** A list of IDs of the regions a query was made from. */
    regions: string[];
    /** A list of device types a query was made from. */
    devices: Device[];
    /** ID of the folder. */
    folderId: string;
}

export enum GetDynamicsRequest_Period {
    PERIOD_UNSPECIFIED = 0,
    /** PERIOD_MONTHLY - Details by month. */
    PERIOD_MONTHLY = 1,
    /** PERIOD_WEEKLY - Details by week. */
    PERIOD_WEEKLY = 2,
    /** PERIOD_DAILY - Details by day. */
    PERIOD_DAILY = 3,
    UNRECOGNIZED = -1,
}

export function getDynamicsRequest_PeriodFromJSON(object: any): GetDynamicsRequest_Period {
    switch (object) {
        case 0:
        case 'PERIOD_UNSPECIFIED':
            return GetDynamicsRequest_Period.PERIOD_UNSPECIFIED;
        case 1:
        case 'PERIOD_MONTHLY':
            return GetDynamicsRequest_Period.PERIOD_MONTHLY;
        case 2:
        case 'PERIOD_WEEKLY':
            return GetDynamicsRequest_Period.PERIOD_WEEKLY;
        case 3:
        case 'PERIOD_DAILY':
            return GetDynamicsRequest_Period.PERIOD_DAILY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GetDynamicsRequest_Period.UNRECOGNIZED;
    }
}

export function getDynamicsRequest_PeriodToJSON(object: GetDynamicsRequest_Period): string {
    switch (object) {
        case GetDynamicsRequest_Period.PERIOD_UNSPECIFIED:
            return 'PERIOD_UNSPECIFIED';
        case GetDynamicsRequest_Period.PERIOD_MONTHLY:
            return 'PERIOD_MONTHLY';
        case GetDynamicsRequest_Period.PERIOD_WEEKLY:
            return 'PERIOD_WEEKLY';
        case GetDynamicsRequest_Period.PERIOD_DAILY:
            return 'PERIOD_DAILY';
        default:
            return 'UNKNOWN';
    }
}

export interface GetDynamicsResponse {
    /** Results. */
    results: GetDynamicsResponse_DynamicsInfo[];
}

export interface GetDynamicsResponse_DynamicsInfo {
    /** The date */
    date?: Date;
    /** Number of queries containing the given keyword */
    count: number;
    /** The share of the number of such queries from the total number of queries to Yandex. */
    share: number;
}

export interface GetRegionsDistributionRequest {
    /** Keyword */
    phrase: string;
    /** Show query distribution only by city, only by region, or everywhere. */
    region: GetRegionsDistributionRequest_Region;
    /** A list of device types a query was made from. */
    devices: Device[];
    /** ID of the folder. */
    folderId: string;
}

export enum GetRegionsDistributionRequest_Region {
    REGION_UNSPECIFIED = 0,
    /** REGION_ALL - Show distribution everywhere. */
    REGION_ALL = 1,
    /** REGION_CITIES - Show distribution by cities. */
    REGION_CITIES = 2,
    /** REGION_REGIONS - Show distribution by regions. */
    REGION_REGIONS = 3,
    UNRECOGNIZED = -1,
}

export function getRegionsDistributionRequest_RegionFromJSON(
    object: any,
): GetRegionsDistributionRequest_Region {
    switch (object) {
        case 0:
        case 'REGION_UNSPECIFIED':
            return GetRegionsDistributionRequest_Region.REGION_UNSPECIFIED;
        case 1:
        case 'REGION_ALL':
            return GetRegionsDistributionRequest_Region.REGION_ALL;
        case 2:
        case 'REGION_CITIES':
            return GetRegionsDistributionRequest_Region.REGION_CITIES;
        case 3:
        case 'REGION_REGIONS':
            return GetRegionsDistributionRequest_Region.REGION_REGIONS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GetRegionsDistributionRequest_Region.UNRECOGNIZED;
    }
}

export function getRegionsDistributionRequest_RegionToJSON(
    object: GetRegionsDistributionRequest_Region,
): string {
    switch (object) {
        case GetRegionsDistributionRequest_Region.REGION_UNSPECIFIED:
            return 'REGION_UNSPECIFIED';
        case GetRegionsDistributionRequest_Region.REGION_ALL:
            return 'REGION_ALL';
        case GetRegionsDistributionRequest_Region.REGION_CITIES:
            return 'REGION_CITIES';
        case GetRegionsDistributionRequest_Region.REGION_REGIONS:
            return 'REGION_REGIONS';
        default:
            return 'UNKNOWN';
    }
}

export interface GetRegionsDistributionResponse {
    /** Results. */
    results: GetRegionsDistributionResponse_RegionInfo[];
}

export interface GetRegionsDistributionResponse_RegionInfo {
    /** Region ID */
    region: string;
    /** Number of queries containing the given keyword. */
    count: number;
    /** The share of the number of such queries from the total number of queries to Yandex in the region. */
    share: number;
    /** The ratio between the share of the selected queries in the region and their share across the country. */
    affinityIndex: number;
}

export interface GetRegionsTreeRequest {
    /** ID of the folder. */
    folderId: string;
}

export interface GetRegionsTreeResponse {
    /** Region tree */
    regions: GetRegionsTreeResponse_RegionInfo[];
}

export interface GetRegionsTreeResponse_RegionInfo {
    /** Region ID. */
    id: string;
    /** Region name */
    label: string;
    /** Child regions. */
    children: GetRegionsTreeResponse_RegionInfo[];
}

const baseGetTopRequest: object = {
    phrase: '',
    numPhrases: 0,
    regions: '',
    devices: 0,
    folderId: '',
};

export const GetTopRequest: {
    encode(message: GetTopRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTopRequest;
    fromJSON(object: any): GetTopRequest;
    toJSON(message: GetTopRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetTopRequest>, I>>(object: I): GetTopRequest;
} = {
    encode(message: GetTopRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.phrase !== '') {
            writer.uint32(10).string(message.phrase);
        }
        if (message.numPhrases !== 0) {
            writer.uint32(16).int64(message.numPhrases);
        }
        for (const v of message.regions) {
            writer.uint32(26).string(v!);
        }
        writer.uint32(34).fork();
        for (const v of message.devices) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTopRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTopRequest } as GetTopRequest;
        message.regions = [];
        message.devices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.phrase = reader.string();
                    break;
                case 2:
                    message.numPhrases = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.regions.push(reader.string());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.devices.push(reader.int32() as any);
                        }
                    } else {
                        message.devices.push(reader.int32() as any);
                    }
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTopRequest {
        const message = { ...baseGetTopRequest } as GetTopRequest;
        message.phrase =
            object.phrase !== undefined && object.phrase !== null ? String(object.phrase) : '';
        message.numPhrases =
            object.numPhrases !== undefined && object.numPhrases !== null
                ? Number(object.numPhrases)
                : 0;
        message.regions = (object.regions ?? []).map((e: any) => String(e));
        message.devices = (object.devices ?? []).map((e: any) => deviceFromJSON(e));
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: GetTopRequest): unknown {
        const obj: any = {};
        message.phrase !== undefined && (obj.phrase = message.phrase);
        message.numPhrases !== undefined && (obj.numPhrases = Math.round(message.numPhrases));
        if (message.regions) {
            obj.regions = message.regions.map((e) => e);
        } else {
            obj.regions = [];
        }
        if (message.devices) {
            obj.devices = message.devices.map((e) => deviceToJSON(e));
        } else {
            obj.devices = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTopRequest>, I>>(object: I): GetTopRequest {
        const message = { ...baseGetTopRequest } as GetTopRequest;
        message.phrase = object.phrase ?? '';
        message.numPhrases = object.numPhrases ?? 0;
        message.regions = object.regions?.map((e) => e) || [];
        message.devices = object.devices?.map((e) => e) || [];
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseGetTopResponse: object = { totalCount: 0 };

export const GetTopResponse: {
    encode(message: GetTopResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTopResponse;
    fromJSON(object: any): GetTopResponse;
    toJSON(message: GetTopResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetTopResponse>, I>>(object: I): GetTopResponse;
} = {
    encode(message: GetTopResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.totalCount !== 0) {
            writer.uint32(8).int64(message.totalCount);
        }
        for (const v of message.results) {
            GetTopResponse_PhraseInfo.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.associations) {
            GetTopResponse_PhraseInfo.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTopResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTopResponse } as GetTopResponse;
        message.results = [];
        message.associations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.results.push(GetTopResponse_PhraseInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.associations.push(
                        GetTopResponse_PhraseInfo.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTopResponse {
        const message = { ...baseGetTopResponse } as GetTopResponse;
        message.totalCount =
            object.totalCount !== undefined && object.totalCount !== null
                ? Number(object.totalCount)
                : 0;
        message.results = (object.results ?? []).map((e: any) =>
            GetTopResponse_PhraseInfo.fromJSON(e),
        );
        message.associations = (object.associations ?? []).map((e: any) =>
            GetTopResponse_PhraseInfo.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GetTopResponse): unknown {
        const obj: any = {};
        message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
        if (message.results) {
            obj.results = message.results.map((e) =>
                e ? GetTopResponse_PhraseInfo.toJSON(e) : undefined,
            );
        } else {
            obj.results = [];
        }
        if (message.associations) {
            obj.associations = message.associations.map((e) =>
                e ? GetTopResponse_PhraseInfo.toJSON(e) : undefined,
            );
        } else {
            obj.associations = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTopResponse>, I>>(object: I): GetTopResponse {
        const message = { ...baseGetTopResponse } as GetTopResponse;
        message.totalCount = object.totalCount ?? 0;
        message.results =
            object.results?.map((e) => GetTopResponse_PhraseInfo.fromPartial(e)) || [];
        message.associations =
            object.associations?.map((e) => GetTopResponse_PhraseInfo.fromPartial(e)) || [];
        return message;
    },
};

const baseGetTopResponse_PhraseInfo: object = { phrase: '', count: 0 };

export const GetTopResponse_PhraseInfo: {
    encode(message: GetTopResponse_PhraseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTopResponse_PhraseInfo;
    fromJSON(object: any): GetTopResponse_PhraseInfo;
    toJSON(message: GetTopResponse_PhraseInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<GetTopResponse_PhraseInfo>, I>>(object: I): GetTopResponse_PhraseInfo;
} = {
    encode(
        message: GetTopResponse_PhraseInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.phrase !== '') {
            writer.uint32(10).string(message.phrase);
        }
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTopResponse_PhraseInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTopResponse_PhraseInfo } as GetTopResponse_PhraseInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.phrase = reader.string();
                    break;
                case 2:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTopResponse_PhraseInfo {
        const message = { ...baseGetTopResponse_PhraseInfo } as GetTopResponse_PhraseInfo;
        message.phrase =
            object.phrase !== undefined && object.phrase !== null ? String(object.phrase) : '';
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: GetTopResponse_PhraseInfo): unknown {
        const obj: any = {};
        message.phrase !== undefined && (obj.phrase = message.phrase);
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTopResponse_PhraseInfo>, I>>(
        object: I,
    ): GetTopResponse_PhraseInfo {
        const message = { ...baseGetTopResponse_PhraseInfo } as GetTopResponse_PhraseInfo;
        message.phrase = object.phrase ?? '';
        message.count = object.count ?? 0;
        return message;
    },
};

const baseGetDynamicsRequest: object = {
    phrase: '',
    period: 0,
    regions: '',
    devices: 0,
    folderId: '',
};

export const GetDynamicsRequest: {
    encode(message: GetDynamicsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDynamicsRequest;
    fromJSON(object: any): GetDynamicsRequest;
    toJSON(message: GetDynamicsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetDynamicsRequest>, I>>(object: I): GetDynamicsRequest;
} = {
    encode(message: GetDynamicsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.phrase !== '') {
            writer.uint32(10).string(message.phrase);
        }
        if (message.period !== 0) {
            writer.uint32(16).int32(message.period);
        }
        if (message.fromDate !== undefined) {
            Timestamp.encode(toTimestamp(message.fromDate), writer.uint32(26).fork()).ldelim();
        }
        if (message.toDate !== undefined) {
            Timestamp.encode(toTimestamp(message.toDate), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.regions) {
            writer.uint32(42).string(v!);
        }
        writer.uint32(50).fork();
        for (const v of message.devices) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.folderId !== '') {
            writer.uint32(58).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDynamicsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDynamicsRequest } as GetDynamicsRequest;
        message.regions = [];
        message.devices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.phrase = reader.string();
                    break;
                case 2:
                    message.period = reader.int32() as any;
                    break;
                case 3:
                    message.fromDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.toDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.regions.push(reader.string());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.devices.push(reader.int32() as any);
                        }
                    } else {
                        message.devices.push(reader.int32() as any);
                    }
                    break;
                case 7:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDynamicsRequest {
        const message = { ...baseGetDynamicsRequest } as GetDynamicsRequest;
        message.phrase =
            object.phrase !== undefined && object.phrase !== null ? String(object.phrase) : '';
        message.period =
            object.period !== undefined && object.period !== null
                ? getDynamicsRequest_PeriodFromJSON(object.period)
                : 0;
        message.fromDate =
            object.fromDate !== undefined && object.fromDate !== null
                ? fromJsonTimestamp(object.fromDate)
                : undefined;
        message.toDate =
            object.toDate !== undefined && object.toDate !== null
                ? fromJsonTimestamp(object.toDate)
                : undefined;
        message.regions = (object.regions ?? []).map((e: any) => String(e));
        message.devices = (object.devices ?? []).map((e: any) => deviceFromJSON(e));
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: GetDynamicsRequest): unknown {
        const obj: any = {};
        message.phrase !== undefined && (obj.phrase = message.phrase);
        message.period !== undefined &&
            (obj.period = getDynamicsRequest_PeriodToJSON(message.period));
        message.fromDate !== undefined && (obj.fromDate = message.fromDate.toISOString());
        message.toDate !== undefined && (obj.toDate = message.toDate.toISOString());
        if (message.regions) {
            obj.regions = message.regions.map((e) => e);
        } else {
            obj.regions = [];
        }
        if (message.devices) {
            obj.devices = message.devices.map((e) => deviceToJSON(e));
        } else {
            obj.devices = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDynamicsRequest>, I>>(
        object: I,
    ): GetDynamicsRequest {
        const message = { ...baseGetDynamicsRequest } as GetDynamicsRequest;
        message.phrase = object.phrase ?? '';
        message.period = object.period ?? 0;
        message.fromDate = object.fromDate ?? undefined;
        message.toDate = object.toDate ?? undefined;
        message.regions = object.regions?.map((e) => e) || [];
        message.devices = object.devices?.map((e) => e) || [];
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseGetDynamicsResponse: object = {};

export const GetDynamicsResponse: {
    encode(message: GetDynamicsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDynamicsResponse;
    fromJSON(object: any): GetDynamicsResponse;
    toJSON(message: GetDynamicsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetDynamicsResponse>, I>>(object: I): GetDynamicsResponse;
} = {
    encode(message: GetDynamicsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.results) {
            GetDynamicsResponse_DynamicsInfo.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDynamicsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDynamicsResponse } as GetDynamicsResponse;
        message.results = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(
                        GetDynamicsResponse_DynamicsInfo.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDynamicsResponse {
        const message = { ...baseGetDynamicsResponse } as GetDynamicsResponse;
        message.results = (object.results ?? []).map((e: any) =>
            GetDynamicsResponse_DynamicsInfo.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GetDynamicsResponse): unknown {
        const obj: any = {};
        if (message.results) {
            obj.results = message.results.map((e) =>
                e ? GetDynamicsResponse_DynamicsInfo.toJSON(e) : undefined,
            );
        } else {
            obj.results = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDynamicsResponse>, I>>(
        object: I,
    ): GetDynamicsResponse {
        const message = { ...baseGetDynamicsResponse } as GetDynamicsResponse;
        message.results =
            object.results?.map((e) => GetDynamicsResponse_DynamicsInfo.fromPartial(e)) || [];
        return message;
    },
};

const baseGetDynamicsResponse_DynamicsInfo: object = { count: 0, share: 0 };

export const GetDynamicsResponse_DynamicsInfo: {
    encode(message: GetDynamicsResponse_DynamicsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDynamicsResponse_DynamicsInfo;
    fromJSON(object: any): GetDynamicsResponse_DynamicsInfo;
    toJSON(message: GetDynamicsResponse_DynamicsInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<GetDynamicsResponse_DynamicsInfo>, I>>(object: I): GetDynamicsResponse_DynamicsInfo;
} = {
    encode(
        message: GetDynamicsResponse_DynamicsInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.date !== undefined) {
            Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        if (message.share !== 0) {
            writer.uint32(25).double(message.share);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDynamicsResponse_DynamicsInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetDynamicsResponse_DynamicsInfo,
        } as GetDynamicsResponse_DynamicsInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.share = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDynamicsResponse_DynamicsInfo {
        const message = {
            ...baseGetDynamicsResponse_DynamicsInfo,
        } as GetDynamicsResponse_DynamicsInfo;
        message.date =
            object.date !== undefined && object.date !== null
                ? fromJsonTimestamp(object.date)
                : undefined;
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        message.share =
            object.share !== undefined && object.share !== null ? Number(object.share) : 0;
        return message;
    },

    toJSON(message: GetDynamicsResponse_DynamicsInfo): unknown {
        const obj: any = {};
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.count !== undefined && (obj.count = Math.round(message.count));
        message.share !== undefined && (obj.share = message.share);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDynamicsResponse_DynamicsInfo>, I>>(
        object: I,
    ): GetDynamicsResponse_DynamicsInfo {
        const message = {
            ...baseGetDynamicsResponse_DynamicsInfo,
        } as GetDynamicsResponse_DynamicsInfo;
        message.date = object.date ?? undefined;
        message.count = object.count ?? 0;
        message.share = object.share ?? 0;
        return message;
    },
};

const baseGetRegionsDistributionRequest: object = {
    phrase: '',
    region: 0,
    devices: 0,
    folderId: '',
};

export const GetRegionsDistributionRequest: {
    encode(message: GetRegionsDistributionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsDistributionRequest;
    fromJSON(object: any): GetRegionsDistributionRequest;
    toJSON(message: GetRegionsDistributionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetRegionsDistributionRequest>, I>>(object: I): GetRegionsDistributionRequest;
} = {
    encode(
        message: GetRegionsDistributionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.phrase !== '') {
            writer.uint32(10).string(message.phrase);
        }
        if (message.region !== 0) {
            writer.uint32(16).int32(message.region);
        }
        writer.uint32(26).fork();
        for (const v of message.devices) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsDistributionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRegionsDistributionRequest } as GetRegionsDistributionRequest;
        message.devices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.phrase = reader.string();
                    break;
                case 2:
                    message.region = reader.int32() as any;
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.devices.push(reader.int32() as any);
                        }
                    } else {
                        message.devices.push(reader.int32() as any);
                    }
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegionsDistributionRequest {
        const message = { ...baseGetRegionsDistributionRequest } as GetRegionsDistributionRequest;
        message.phrase =
            object.phrase !== undefined && object.phrase !== null ? String(object.phrase) : '';
        message.region =
            object.region !== undefined && object.region !== null
                ? getRegionsDistributionRequest_RegionFromJSON(object.region)
                : 0;
        message.devices = (object.devices ?? []).map((e: any) => deviceFromJSON(e));
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: GetRegionsDistributionRequest): unknown {
        const obj: any = {};
        message.phrase !== undefined && (obj.phrase = message.phrase);
        message.region !== undefined &&
            (obj.region = getRegionsDistributionRequest_RegionToJSON(message.region));
        if (message.devices) {
            obj.devices = message.devices.map((e) => deviceToJSON(e));
        } else {
            obj.devices = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRegionsDistributionRequest>, I>>(
        object: I,
    ): GetRegionsDistributionRequest {
        const message = { ...baseGetRegionsDistributionRequest } as GetRegionsDistributionRequest;
        message.phrase = object.phrase ?? '';
        message.region = object.region ?? 0;
        message.devices = object.devices?.map((e) => e) || [];
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseGetRegionsDistributionResponse: object = {};

export const GetRegionsDistributionResponse: {
    encode(message: GetRegionsDistributionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsDistributionResponse;
    fromJSON(object: any): GetRegionsDistributionResponse;
    toJSON(message: GetRegionsDistributionResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetRegionsDistributionResponse>, I>>(object: I): GetRegionsDistributionResponse;
} = {
    encode(
        message: GetRegionsDistributionResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.results) {
            GetRegionsDistributionResponse_RegionInfo.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsDistributionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRegionsDistributionResponse } as GetRegionsDistributionResponse;
        message.results = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(
                        GetRegionsDistributionResponse_RegionInfo.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegionsDistributionResponse {
        const message = { ...baseGetRegionsDistributionResponse } as GetRegionsDistributionResponse;
        message.results = (object.results ?? []).map((e: any) =>
            GetRegionsDistributionResponse_RegionInfo.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GetRegionsDistributionResponse): unknown {
        const obj: any = {};
        if (message.results) {
            obj.results = message.results.map((e) =>
                e ? GetRegionsDistributionResponse_RegionInfo.toJSON(e) : undefined,
            );
        } else {
            obj.results = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRegionsDistributionResponse>, I>>(
        object: I,
    ): GetRegionsDistributionResponse {
        const message = { ...baseGetRegionsDistributionResponse } as GetRegionsDistributionResponse;
        message.results =
            object.results?.map((e) => GetRegionsDistributionResponse_RegionInfo.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseGetRegionsDistributionResponse_RegionInfo: object = {
    region: '',
    count: 0,
    share: 0,
    affinityIndex: 0,
};

export const GetRegionsDistributionResponse_RegionInfo: {
    encode(message: GetRegionsDistributionResponse_RegionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsDistributionResponse_RegionInfo;
    fromJSON(object: any): GetRegionsDistributionResponse_RegionInfo;
    toJSON(message: GetRegionsDistributionResponse_RegionInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<GetRegionsDistributionResponse_RegionInfo>, I>>(object: I): GetRegionsDistributionResponse_RegionInfo;
} = {
    encode(
        message: GetRegionsDistributionResponse_RegionInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.region !== '') {
            writer.uint32(10).string(message.region);
        }
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        if (message.share !== 0) {
            writer.uint32(25).double(message.share);
        }
        if (message.affinityIndex !== 0) {
            writer.uint32(33).double(message.affinityIndex);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): GetRegionsDistributionResponse_RegionInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetRegionsDistributionResponse_RegionInfo,
        } as GetRegionsDistributionResponse_RegionInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.region = reader.string();
                    break;
                case 2:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.share = reader.double();
                    break;
                case 4:
                    message.affinityIndex = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegionsDistributionResponse_RegionInfo {
        const message = {
            ...baseGetRegionsDistributionResponse_RegionInfo,
        } as GetRegionsDistributionResponse_RegionInfo;
        message.region =
            object.region !== undefined && object.region !== null ? String(object.region) : '';
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        message.share =
            object.share !== undefined && object.share !== null ? Number(object.share) : 0;
        message.affinityIndex =
            object.affinityIndex !== undefined && object.affinityIndex !== null
                ? Number(object.affinityIndex)
                : 0;
        return message;
    },

    toJSON(message: GetRegionsDistributionResponse_RegionInfo): unknown {
        const obj: any = {};
        message.region !== undefined && (obj.region = message.region);
        message.count !== undefined && (obj.count = Math.round(message.count));
        message.share !== undefined && (obj.share = message.share);
        message.affinityIndex !== undefined && (obj.affinityIndex = message.affinityIndex);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRegionsDistributionResponse_RegionInfo>, I>>(
        object: I,
    ): GetRegionsDistributionResponse_RegionInfo {
        const message = {
            ...baseGetRegionsDistributionResponse_RegionInfo,
        } as GetRegionsDistributionResponse_RegionInfo;
        message.region = object.region ?? '';
        message.count = object.count ?? 0;
        message.share = object.share ?? 0;
        message.affinityIndex = object.affinityIndex ?? 0;
        return message;
    },
};

const baseGetRegionsTreeRequest: object = { folderId: '' };

export const GetRegionsTreeRequest: {
    encode(message: GetRegionsTreeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsTreeRequest;
    fromJSON(object: any): GetRegionsTreeRequest;
    toJSON(message: GetRegionsTreeRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetRegionsTreeRequest>, I>>(object: I): GetRegionsTreeRequest;
} = {
    encode(message: GetRegionsTreeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsTreeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRegionsTreeRequest } as GetRegionsTreeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegionsTreeRequest {
        const message = { ...baseGetRegionsTreeRequest } as GetRegionsTreeRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: GetRegionsTreeRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRegionsTreeRequest>, I>>(
        object: I,
    ): GetRegionsTreeRequest {
        const message = { ...baseGetRegionsTreeRequest } as GetRegionsTreeRequest;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseGetRegionsTreeResponse: object = {};

export const GetRegionsTreeResponse: {
    encode(message: GetRegionsTreeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsTreeResponse;
    fromJSON(object: any): GetRegionsTreeResponse;
    toJSON(message: GetRegionsTreeResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetRegionsTreeResponse>, I>>(object: I): GetRegionsTreeResponse;
} = {
    encode(message: GetRegionsTreeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.regions) {
            GetRegionsTreeResponse_RegionInfo.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsTreeResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRegionsTreeResponse } as GetRegionsTreeResponse;
        message.regions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regions.push(
                        GetRegionsTreeResponse_RegionInfo.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegionsTreeResponse {
        const message = { ...baseGetRegionsTreeResponse } as GetRegionsTreeResponse;
        message.regions = (object.regions ?? []).map((e: any) =>
            GetRegionsTreeResponse_RegionInfo.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GetRegionsTreeResponse): unknown {
        const obj: any = {};
        if (message.regions) {
            obj.regions = message.regions.map((e) =>
                e ? GetRegionsTreeResponse_RegionInfo.toJSON(e) : undefined,
            );
        } else {
            obj.regions = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRegionsTreeResponse>, I>>(
        object: I,
    ): GetRegionsTreeResponse {
        const message = { ...baseGetRegionsTreeResponse } as GetRegionsTreeResponse;
        message.regions =
            object.regions?.map((e) => GetRegionsTreeResponse_RegionInfo.fromPartial(e)) || [];
        return message;
    },
};

const baseGetRegionsTreeResponse_RegionInfo: object = { id: '', label: '' };

export const GetRegionsTreeResponse_RegionInfo: {
    encode(message: GetRegionsTreeResponse_RegionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsTreeResponse_RegionInfo;
    fromJSON(object: any): GetRegionsTreeResponse_RegionInfo;
    toJSON(message: GetRegionsTreeResponse_RegionInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<GetRegionsTreeResponse_RegionInfo>, I>>(object: I): GetRegionsTreeResponse_RegionInfo;
} = {
    encode(
        message: GetRegionsTreeResponse_RegionInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        for (const v of message.children) {
            GetRegionsTreeResponse_RegionInfo.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRegionsTreeResponse_RegionInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetRegionsTreeResponse_RegionInfo,
        } as GetRegionsTreeResponse_RegionInfo;
        message.children = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                case 3:
                    message.children.push(
                        GetRegionsTreeResponse_RegionInfo.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRegionsTreeResponse_RegionInfo {
        const message = {
            ...baseGetRegionsTreeResponse_RegionInfo,
        } as GetRegionsTreeResponse_RegionInfo;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.label =
            object.label !== undefined && object.label !== null ? String(object.label) : '';
        message.children = (object.children ?? []).map((e: any) =>
            GetRegionsTreeResponse_RegionInfo.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GetRegionsTreeResponse_RegionInfo): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.label !== undefined && (obj.label = message.label);
        if (message.children) {
            obj.children = message.children.map((e) =>
                e ? GetRegionsTreeResponse_RegionInfo.toJSON(e) : undefined,
            );
        } else {
            obj.children = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRegionsTreeResponse_RegionInfo>, I>>(
        object: I,
    ): GetRegionsTreeResponse_RegionInfo {
        const message = {
            ...baseGetRegionsTreeResponse_RegionInfo,
        } as GetRegionsTreeResponse_RegionInfo;
        message.id = object.id ?? '';
        message.label = object.label ?? '';
        message.children =
            object.children?.map((e) => GetRegionsTreeResponse_RegionInfo.fromPartial(e)) || [];
        return message;
    },
};

/** A set of methods for viewing statistics on search queries to Yandex. */
export const WordstatServiceService = {
    /** The method returns the last 30 days data about popular queries containing the specified keyword and queries that are similar to the specified one. */
    getTop: {
        path: '/yandex.cloud.searchapi.v2.WordstatService/GetTop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTopRequest) =>
            Buffer.from(GetTopRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetTopRequest.decode(value),
        responseSerialize: (value: GetTopResponse) =>
            Buffer.from(GetTopResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetTopResponse.decode(value),
    },
    /** The method returns the frequency of queries over time for a given keyword. */
    getDynamics: {
        path: '/yandex.cloud.searchapi.v2.WordstatService/GetDynamics',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDynamicsRequest) =>
            Buffer.from(GetDynamicsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDynamicsRequest.decode(value),
        responseSerialize: (value: GetDynamicsResponse) =>
            Buffer.from(GetDynamicsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetDynamicsResponse.decode(value),
    },
    /** The method returns the distribution of the number of queries containing the given keyword globally by region for the last 30 days. */
    getRegionsDistribution: {
        path: '/yandex.cloud.searchapi.v2.WordstatService/GetRegionsDistribution',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRegionsDistributionRequest) =>
            Buffer.from(GetRegionsDistributionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRegionsDistributionRequest.decode(value),
        responseSerialize: (value: GetRegionsDistributionResponse) =>
            Buffer.from(GetRegionsDistributionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetRegionsDistributionResponse.decode(value),
    },
    /** The method method returns a tree of Wordstat-supported regions. */
    getRegionsTree: {
        path: '/yandex.cloud.searchapi.v2.WordstatService/GetRegionsTree',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRegionsTreeRequest) =>
            Buffer.from(GetRegionsTreeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRegionsTreeRequest.decode(value),
        responseSerialize: (value: GetRegionsTreeResponse) =>
            Buffer.from(GetRegionsTreeResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetRegionsTreeResponse.decode(value),
    },
} as const;

export interface WordstatServiceServer extends UntypedServiceImplementation {
    /** The method returns the last 30 days data about popular queries containing the specified keyword and queries that are similar to the specified one. */
    getTop: handleUnaryCall<GetTopRequest, GetTopResponse>;
    /** The method returns the frequency of queries over time for a given keyword. */
    getDynamics: handleUnaryCall<GetDynamicsRequest, GetDynamicsResponse>;
    /** The method returns the distribution of the number of queries containing the given keyword globally by region for the last 30 days. */
    getRegionsDistribution: handleUnaryCall<
        GetRegionsDistributionRequest,
        GetRegionsDistributionResponse
    >;
    /** The method method returns a tree of Wordstat-supported regions. */
    getRegionsTree: handleUnaryCall<GetRegionsTreeRequest, GetRegionsTreeResponse>;
}

export interface WordstatServiceClient extends Client {
    /** The method returns the last 30 days data about popular queries containing the specified keyword and queries that are similar to the specified one. */
    getTop(
        request: GetTopRequest,
        callback: (error: ServiceError | null, response: GetTopResponse) => void,
    ): ClientUnaryCall;
    getTop(
        request: GetTopRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetTopResponse) => void,
    ): ClientUnaryCall;
    getTop(
        request: GetTopRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetTopResponse) => void,
    ): ClientUnaryCall;
    /** The method returns the frequency of queries over time for a given keyword. */
    getDynamics(
        request: GetDynamicsRequest,
        callback: (error: ServiceError | null, response: GetDynamicsResponse) => void,
    ): ClientUnaryCall;
    getDynamics(
        request: GetDynamicsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetDynamicsResponse) => void,
    ): ClientUnaryCall;
    getDynamics(
        request: GetDynamicsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetDynamicsResponse) => void,
    ): ClientUnaryCall;
    /** The method returns the distribution of the number of queries containing the given keyword globally by region for the last 30 days. */
    getRegionsDistribution(
        request: GetRegionsDistributionRequest,
        callback: (error: ServiceError | null, response: GetRegionsDistributionResponse) => void,
    ): ClientUnaryCall;
    getRegionsDistribution(
        request: GetRegionsDistributionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetRegionsDistributionResponse) => void,
    ): ClientUnaryCall;
    getRegionsDistribution(
        request: GetRegionsDistributionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetRegionsDistributionResponse) => void,
    ): ClientUnaryCall;
    /** The method method returns a tree of Wordstat-supported regions. */
    getRegionsTree(
        request: GetRegionsTreeRequest,
        callback: (error: ServiceError | null, response: GetRegionsTreeResponse) => void,
    ): ClientUnaryCall;
    getRegionsTree(
        request: GetRegionsTreeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetRegionsTreeResponse) => void,
    ): ClientUnaryCall;
    getRegionsTree(
        request: GetRegionsTreeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetRegionsTreeResponse) => void,
    ): ClientUnaryCall;
}

export const WordstatServiceClient = makeGenericClientConstructor(
    WordstatServiceService,
    'yandex.cloud.searchapi.v2.WordstatService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): WordstatServiceClient;
    service: typeof WordstatServiceService;
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
