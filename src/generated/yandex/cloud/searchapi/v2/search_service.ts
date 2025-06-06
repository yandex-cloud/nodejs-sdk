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
import { SearchQuery } from '../../../../yandex/cloud/searchapi/v2/search_query';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.searchapi.v2';

export interface SortSpec {
    /** Documents sorting mode. */
    sortMode: SortSpec_SortMode;
    /** Documents sorting order. */
    sortOrder: SortSpec_SortOrder;
}

export enum SortSpec_SortOrder {
    SORT_ORDER_UNSPECIFIED = 0,
    /** SORT_ORDER_ASC - Reverse order from oldest to most recent. */
    SORT_ORDER_ASC = 1,
    /** SORT_ORDER_DESC - Direct order from most recent to oldest (default). */
    SORT_ORDER_DESC = 2,
    UNRECOGNIZED = -1,
}

export function sortSpec_SortOrderFromJSON(object: any): SortSpec_SortOrder {
    switch (object) {
        case 0:
        case 'SORT_ORDER_UNSPECIFIED':
            return SortSpec_SortOrder.SORT_ORDER_UNSPECIFIED;
        case 1:
        case 'SORT_ORDER_ASC':
            return SortSpec_SortOrder.SORT_ORDER_ASC;
        case 2:
        case 'SORT_ORDER_DESC':
            return SortSpec_SortOrder.SORT_ORDER_DESC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SortSpec_SortOrder.UNRECOGNIZED;
    }
}

export function sortSpec_SortOrderToJSON(object: SortSpec_SortOrder): string {
    switch (object) {
        case SortSpec_SortOrder.SORT_ORDER_UNSPECIFIED:
            return 'SORT_ORDER_UNSPECIFIED';
        case SortSpec_SortOrder.SORT_ORDER_ASC:
            return 'SORT_ORDER_ASC';
        case SortSpec_SortOrder.SORT_ORDER_DESC:
            return 'SORT_ORDER_DESC';
        default:
            return 'UNKNOWN';
    }
}

export enum SortSpec_SortMode {
    SORT_MODE_UNSPECIFIED = 0,
    /** SORT_MODE_BY_RELEVANCE - Sort documents by relevance (default value). */
    SORT_MODE_BY_RELEVANCE = 1,
    /** SORT_MODE_BY_TIME - Sort documents by update time. */
    SORT_MODE_BY_TIME = 2,
    UNRECOGNIZED = -1,
}

export function sortSpec_SortModeFromJSON(object: any): SortSpec_SortMode {
    switch (object) {
        case 0:
        case 'SORT_MODE_UNSPECIFIED':
            return SortSpec_SortMode.SORT_MODE_UNSPECIFIED;
        case 1:
        case 'SORT_MODE_BY_RELEVANCE':
            return SortSpec_SortMode.SORT_MODE_BY_RELEVANCE;
        case 2:
        case 'SORT_MODE_BY_TIME':
            return SortSpec_SortMode.SORT_MODE_BY_TIME;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SortSpec_SortMode.UNRECOGNIZED;
    }
}

export function sortSpec_SortModeToJSON(object: SortSpec_SortMode): string {
    switch (object) {
        case SortSpec_SortMode.SORT_MODE_UNSPECIFIED:
            return 'SORT_MODE_UNSPECIFIED';
        case SortSpec_SortMode.SORT_MODE_BY_RELEVANCE:
            return 'SORT_MODE_BY_RELEVANCE';
        case SortSpec_SortMode.SORT_MODE_BY_TIME:
            return 'SORT_MODE_BY_TIME';
        default:
            return 'UNKNOWN';
    }
}

export interface GroupSpec {
    /** Grouping method. */
    groupMode: GroupSpec_GroupMode;
    /** Maximum number of groups that can be returned per page with search results. */
    groupsOnPage: number;
    /** Maximum number of documents that can be returned per group. */
    docsInGroup: number;
}

export enum GroupSpec_GroupMode {
    GROUP_MODE_UNSPECIFIED = 0,
    /** GROUP_MODE_FLAT - Flat grouping. Each group contains a single document. */
    GROUP_MODE_FLAT = 1,
    /** GROUP_MODE_DEEP - Grouping by domain. Each group contains documents from one domain. */
    GROUP_MODE_DEEP = 2,
    UNRECOGNIZED = -1,
}

export function groupSpec_GroupModeFromJSON(object: any): GroupSpec_GroupMode {
    switch (object) {
        case 0:
        case 'GROUP_MODE_UNSPECIFIED':
            return GroupSpec_GroupMode.GROUP_MODE_UNSPECIFIED;
        case 1:
        case 'GROUP_MODE_FLAT':
            return GroupSpec_GroupMode.GROUP_MODE_FLAT;
        case 2:
        case 'GROUP_MODE_DEEP':
            return GroupSpec_GroupMode.GROUP_MODE_DEEP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GroupSpec_GroupMode.UNRECOGNIZED;
    }
}

export function groupSpec_GroupModeToJSON(object: GroupSpec_GroupMode): string {
    switch (object) {
        case GroupSpec_GroupMode.GROUP_MODE_UNSPECIFIED:
            return 'GROUP_MODE_UNSPECIFIED';
        case GroupSpec_GroupMode.GROUP_MODE_FLAT:
            return 'GROUP_MODE_FLAT';
        case GroupSpec_GroupMode.GROUP_MODE_DEEP:
            return 'GROUP_MODE_DEEP';
        default:
            return 'UNKNOWN';
    }
}

export interface WebSearchRequest {
    /** Search query. */
    query?: SearchQuery;
    /** The rules for sorting search results that define the sequence of the returned search results. */
    sortSpec?: SortSpec;
    /** Grouping settings that are used to group documents from a single domain into a container. */
    groupSpec?: GroupSpec;
    /** The maximum number of passages that can be used when generating a document snippet. */
    maxPassages: number;
    /** ID of the search country or region that impacts the document ranking rules. */
    region: string;
    /** The notification language for a search response. */
    l10n: WebSearchRequest_Localization;
    /** ID of the folder. */
    folderId: string;
    /** Search results format. */
    responseFormat: WebSearchRequest_Format;
    /** User-Agent request header value. */
    userAgent: string;
}

export enum WebSearchRequest_Localization {
    LOCALIZATION_UNSPECIFIED = 0,
    /** LOCALIZATION_RU - Russian (default value) */
    LOCALIZATION_RU = 1,
    /** LOCALIZATION_UK - Ukrainian */
    LOCALIZATION_UK = 2,
    /** LOCALIZATION_BE - Belarusian */
    LOCALIZATION_BE = 3,
    /** LOCALIZATION_KK - Kazakh */
    LOCALIZATION_KK = 4,
    /** LOCALIZATION_TR - Turkish */
    LOCALIZATION_TR = 5,
    /** LOCALIZATION_EN - English */
    LOCALIZATION_EN = 6,
    UNRECOGNIZED = -1,
}

export function webSearchRequest_LocalizationFromJSON(object: any): WebSearchRequest_Localization {
    switch (object) {
        case 0:
        case 'LOCALIZATION_UNSPECIFIED':
            return WebSearchRequest_Localization.LOCALIZATION_UNSPECIFIED;
        case 1:
        case 'LOCALIZATION_RU':
            return WebSearchRequest_Localization.LOCALIZATION_RU;
        case 2:
        case 'LOCALIZATION_UK':
            return WebSearchRequest_Localization.LOCALIZATION_UK;
        case 3:
        case 'LOCALIZATION_BE':
            return WebSearchRequest_Localization.LOCALIZATION_BE;
        case 4:
        case 'LOCALIZATION_KK':
            return WebSearchRequest_Localization.LOCALIZATION_KK;
        case 5:
        case 'LOCALIZATION_TR':
            return WebSearchRequest_Localization.LOCALIZATION_TR;
        case 6:
        case 'LOCALIZATION_EN':
            return WebSearchRequest_Localization.LOCALIZATION_EN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return WebSearchRequest_Localization.UNRECOGNIZED;
    }
}

export function webSearchRequest_LocalizationToJSON(object: WebSearchRequest_Localization): string {
    switch (object) {
        case WebSearchRequest_Localization.LOCALIZATION_UNSPECIFIED:
            return 'LOCALIZATION_UNSPECIFIED';
        case WebSearchRequest_Localization.LOCALIZATION_RU:
            return 'LOCALIZATION_RU';
        case WebSearchRequest_Localization.LOCALIZATION_UK:
            return 'LOCALIZATION_UK';
        case WebSearchRequest_Localization.LOCALIZATION_BE:
            return 'LOCALIZATION_BE';
        case WebSearchRequest_Localization.LOCALIZATION_KK:
            return 'LOCALIZATION_KK';
        case WebSearchRequest_Localization.LOCALIZATION_TR:
            return 'LOCALIZATION_TR';
        case WebSearchRequest_Localization.LOCALIZATION_EN:
            return 'LOCALIZATION_EN';
        default:
            return 'UNKNOWN';
    }
}

export enum WebSearchRequest_Format {
    FORMAT_UNSPECIFIED = 0,
    /** FORMAT_XML - XML format (default value) */
    FORMAT_XML = 1,
    /** FORMAT_HTML - HTML format */
    FORMAT_HTML = 2,
    UNRECOGNIZED = -1,
}

export function webSearchRequest_FormatFromJSON(object: any): WebSearchRequest_Format {
    switch (object) {
        case 0:
        case 'FORMAT_UNSPECIFIED':
            return WebSearchRequest_Format.FORMAT_UNSPECIFIED;
        case 1:
        case 'FORMAT_XML':
            return WebSearchRequest_Format.FORMAT_XML;
        case 2:
        case 'FORMAT_HTML':
            return WebSearchRequest_Format.FORMAT_HTML;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return WebSearchRequest_Format.UNRECOGNIZED;
    }
}

export function webSearchRequest_FormatToJSON(object: WebSearchRequest_Format): string {
    switch (object) {
        case WebSearchRequest_Format.FORMAT_UNSPECIFIED:
            return 'FORMAT_UNSPECIFIED';
        case WebSearchRequest_Format.FORMAT_XML:
            return 'FORMAT_XML';
        case WebSearchRequest_Format.FORMAT_HTML:
            return 'FORMAT_HTML';
        default:
            return 'UNKNOWN';
    }
}

export interface WebSearchResponse {
    /** Search results, either in XML or HTML format depending on the request settings. */
    rawData: Buffer;
}

const baseSortSpec: object = { sortMode: 0, sortOrder: 0 };

export const SortSpec = {
    encode(message: SortSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sortMode !== 0) {
            writer.uint32(8).int32(message.sortMode);
        }
        if (message.sortOrder !== 0) {
            writer.uint32(16).int32(message.sortOrder);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SortSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSortSpec } as SortSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sortMode = reader.int32() as any;
                    break;
                case 2:
                    message.sortOrder = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SortSpec {
        const message = { ...baseSortSpec } as SortSpec;
        message.sortMode =
            object.sortMode !== undefined && object.sortMode !== null
                ? sortSpec_SortModeFromJSON(object.sortMode)
                : 0;
        message.sortOrder =
            object.sortOrder !== undefined && object.sortOrder !== null
                ? sortSpec_SortOrderFromJSON(object.sortOrder)
                : 0;
        return message;
    },

    toJSON(message: SortSpec): unknown {
        const obj: any = {};
        message.sortMode !== undefined &&
            (obj.sortMode = sortSpec_SortModeToJSON(message.sortMode));
        message.sortOrder !== undefined &&
            (obj.sortOrder = sortSpec_SortOrderToJSON(message.sortOrder));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SortSpec>, I>>(object: I): SortSpec {
        const message = { ...baseSortSpec } as SortSpec;
        message.sortMode = object.sortMode ?? 0;
        message.sortOrder = object.sortOrder ?? 0;
        return message;
    },
};

const baseGroupSpec: object = { groupMode: 0, groupsOnPage: 0, docsInGroup: 0 };

export const GroupSpec = {
    encode(message: GroupSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupMode !== 0) {
            writer.uint32(8).int32(message.groupMode);
        }
        if (message.groupsOnPage !== 0) {
            writer.uint32(16).int64(message.groupsOnPage);
        }
        if (message.docsInGroup !== 0) {
            writer.uint32(24).int64(message.docsInGroup);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupSpec } as GroupSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupMode = reader.int32() as any;
                    break;
                case 2:
                    message.groupsOnPage = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.docsInGroup = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupSpec {
        const message = { ...baseGroupSpec } as GroupSpec;
        message.groupMode =
            object.groupMode !== undefined && object.groupMode !== null
                ? groupSpec_GroupModeFromJSON(object.groupMode)
                : 0;
        message.groupsOnPage =
            object.groupsOnPage !== undefined && object.groupsOnPage !== null
                ? Number(object.groupsOnPage)
                : 0;
        message.docsInGroup =
            object.docsInGroup !== undefined && object.docsInGroup !== null
                ? Number(object.docsInGroup)
                : 0;
        return message;
    },

    toJSON(message: GroupSpec): unknown {
        const obj: any = {};
        message.groupMode !== undefined &&
            (obj.groupMode = groupSpec_GroupModeToJSON(message.groupMode));
        message.groupsOnPage !== undefined && (obj.groupsOnPage = Math.round(message.groupsOnPage));
        message.docsInGroup !== undefined && (obj.docsInGroup = Math.round(message.docsInGroup));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupSpec>, I>>(object: I): GroupSpec {
        const message = { ...baseGroupSpec } as GroupSpec;
        message.groupMode = object.groupMode ?? 0;
        message.groupsOnPage = object.groupsOnPage ?? 0;
        message.docsInGroup = object.docsInGroup ?? 0;
        return message;
    },
};

const baseWebSearchRequest: object = {
    maxPassages: 0,
    region: '',
    l10n: 0,
    folderId: '',
    responseFormat: 0,
    userAgent: '',
};

export const WebSearchRequest = {
    encode(message: WebSearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.query !== undefined) {
            SearchQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        if (message.sortSpec !== undefined) {
            SortSpec.encode(message.sortSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.groupSpec !== undefined) {
            GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxPassages !== 0) {
            writer.uint32(32).int64(message.maxPassages);
        }
        if (message.region !== '') {
            writer.uint32(42).string(message.region);
        }
        if (message.l10n !== 0) {
            writer.uint32(48).int32(message.l10n);
        }
        if (message.folderId !== '') {
            writer.uint32(58).string(message.folderId);
        }
        if (message.responseFormat !== 0) {
            writer.uint32(64).int32(message.responseFormat);
        }
        if (message.userAgent !== '') {
            writer.uint32(74).string(message.userAgent);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WebSearchRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWebSearchRequest } as WebSearchRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.query = SearchQuery.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sortSpec = SortSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.groupSpec = GroupSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.maxPassages = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.region = reader.string();
                    break;
                case 6:
                    message.l10n = reader.int32() as any;
                    break;
                case 7:
                    message.folderId = reader.string();
                    break;
                case 8:
                    message.responseFormat = reader.int32() as any;
                    break;
                case 9:
                    message.userAgent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WebSearchRequest {
        const message = { ...baseWebSearchRequest } as WebSearchRequest;
        message.query =
            object.query !== undefined && object.query !== null
                ? SearchQuery.fromJSON(object.query)
                : undefined;
        message.sortSpec =
            object.sortSpec !== undefined && object.sortSpec !== null
                ? SortSpec.fromJSON(object.sortSpec)
                : undefined;
        message.groupSpec =
            object.groupSpec !== undefined && object.groupSpec !== null
                ? GroupSpec.fromJSON(object.groupSpec)
                : undefined;
        message.maxPassages =
            object.maxPassages !== undefined && object.maxPassages !== null
                ? Number(object.maxPassages)
                : 0;
        message.region =
            object.region !== undefined && object.region !== null ? String(object.region) : '';
        message.l10n =
            object.l10n !== undefined && object.l10n !== null
                ? webSearchRequest_LocalizationFromJSON(object.l10n)
                : 0;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.responseFormat =
            object.responseFormat !== undefined && object.responseFormat !== null
                ? webSearchRequest_FormatFromJSON(object.responseFormat)
                : 0;
        message.userAgent =
            object.userAgent !== undefined && object.userAgent !== null
                ? String(object.userAgent)
                : '';
        return message;
    },

    toJSON(message: WebSearchRequest): unknown {
        const obj: any = {};
        message.query !== undefined &&
            (obj.query = message.query ? SearchQuery.toJSON(message.query) : undefined);
        message.sortSpec !== undefined &&
            (obj.sortSpec = message.sortSpec ? SortSpec.toJSON(message.sortSpec) : undefined);
        message.groupSpec !== undefined &&
            (obj.groupSpec = message.groupSpec ? GroupSpec.toJSON(message.groupSpec) : undefined);
        message.maxPassages !== undefined && (obj.maxPassages = Math.round(message.maxPassages));
        message.region !== undefined && (obj.region = message.region);
        message.l10n !== undefined &&
            (obj.l10n = webSearchRequest_LocalizationToJSON(message.l10n));
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.responseFormat !== undefined &&
            (obj.responseFormat = webSearchRequest_FormatToJSON(message.responseFormat));
        message.userAgent !== undefined && (obj.userAgent = message.userAgent);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WebSearchRequest>, I>>(object: I): WebSearchRequest {
        const message = { ...baseWebSearchRequest } as WebSearchRequest;
        message.query =
            object.query !== undefined && object.query !== null
                ? SearchQuery.fromPartial(object.query)
                : undefined;
        message.sortSpec =
            object.sortSpec !== undefined && object.sortSpec !== null
                ? SortSpec.fromPartial(object.sortSpec)
                : undefined;
        message.groupSpec =
            object.groupSpec !== undefined && object.groupSpec !== null
                ? GroupSpec.fromPartial(object.groupSpec)
                : undefined;
        message.maxPassages = object.maxPassages ?? 0;
        message.region = object.region ?? '';
        message.l10n = object.l10n ?? 0;
        message.folderId = object.folderId ?? '';
        message.responseFormat = object.responseFormat ?? 0;
        message.userAgent = object.userAgent ?? '';
        return message;
    },
};

const baseWebSearchResponse: object = {};

export const WebSearchResponse = {
    encode(message: WebSearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.rawData.length !== 0) {
            writer.uint32(10).bytes(message.rawData);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WebSearchResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWebSearchResponse } as WebSearchResponse;
        message.rawData = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawData = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WebSearchResponse {
        const message = { ...baseWebSearchResponse } as WebSearchResponse;
        message.rawData =
            object.rawData !== undefined && object.rawData !== null
                ? Buffer.from(bytesFromBase64(object.rawData))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: WebSearchResponse): unknown {
        const obj: any = {};
        message.rawData !== undefined &&
            (obj.rawData = base64FromBytes(
                message.rawData !== undefined ? message.rawData : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WebSearchResponse>, I>>(object: I): WebSearchResponse {
        const message = { ...baseWebSearchResponse } as WebSearchResponse;
        message.rawData = object.rawData ?? Buffer.alloc(0);
        return message;
    },
};

/** A set of methods for async search the Yandex search database. */
export const WebSearchAsyncServiceService = {
    search: {
        path: '/yandex.cloud.searchapi.v2.WebSearchAsyncService/Search',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: WebSearchRequest) =>
            Buffer.from(WebSearchRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => WebSearchRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface WebSearchAsyncServiceServer extends UntypedServiceImplementation {
    search: handleUnaryCall<WebSearchRequest, Operation>;
}

export interface WebSearchAsyncServiceClient extends Client {
    search(
        request: WebSearchRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    search(
        request: WebSearchRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    search(
        request: WebSearchRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const WebSearchAsyncServiceClient = makeGenericClientConstructor(
    WebSearchAsyncServiceService,
    'yandex.cloud.searchapi.v2.WebSearchAsyncService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): WebSearchAsyncServiceClient;
    service: typeof WebSearchAsyncServiceService;
};

/** A set of methods for searching the Yandex search database. */
export const WebSearchServiceService = {
    search: {
        path: '/yandex.cloud.searchapi.v2.WebSearchService/Search',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: WebSearchRequest) =>
            Buffer.from(WebSearchRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => WebSearchRequest.decode(value),
        responseSerialize: (value: WebSearchResponse) =>
            Buffer.from(WebSearchResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => WebSearchResponse.decode(value),
    },
} as const;

export interface WebSearchServiceServer extends UntypedServiceImplementation {
    search: handleUnaryCall<WebSearchRequest, WebSearchResponse>;
}

export interface WebSearchServiceClient extends Client {
    search(
        request: WebSearchRequest,
        callback: (error: ServiceError | null, response: WebSearchResponse) => void,
    ): ClientUnaryCall;
    search(
        request: WebSearchRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: WebSearchResponse) => void,
    ): ClientUnaryCall;
    search(
        request: WebSearchRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: WebSearchResponse) => void,
    ): ClientUnaryCall;
}

export const WebSearchServiceClient = makeGenericClientConstructor(
    WebSearchServiceService,
    'yandex.cloud.searchapi.v2.WebSearchService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): WebSearchServiceClient;
    service: typeof WebSearchServiceService;
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

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
