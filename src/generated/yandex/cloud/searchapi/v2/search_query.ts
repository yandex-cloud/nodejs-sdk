/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.searchapi.v2';

export interface SearchQuery {
    /** Search type that determines the domain name that will be used for the search queries. */
    searchType: SearchQuery_SearchType;
    /** Search query text */
    queryText: string;
    /** Rule for filtering search results and determines whether any documents should be excluded. */
    familyMode: SearchQuery_FamilyMode;
    /** The number of a requested page with search results */
    page: number;
    /** Typos autocorrections mode */
    fixTypoMode: SearchQuery_FixTypoMode;
}

export enum SearchQuery_SearchType {
    SEARCH_TYPE_UNSPECIFIED = 0,
    /** SEARCH_TYPE_RU - Russian search type (default), yandex.ru search domain name will be used. */
    SEARCH_TYPE_RU = 1,
    /** SEARCH_TYPE_TR - Turkish search type, yandex.tr search domain name will be used. */
    SEARCH_TYPE_TR = 2,
    /** SEARCH_TYPE_COM - International search type, yandex.com search domain name will be used. */
    SEARCH_TYPE_COM = 3,
    /** SEARCH_TYPE_KK - Kazakh search type, yandex.kz search domain name will be used. */
    SEARCH_TYPE_KK = 4,
    /** SEARCH_TYPE_BE - Belarusian search type, yandex.by search domain name will be used. */
    SEARCH_TYPE_BE = 5,
    /** SEARCH_TYPE_UZ - Uzbek search type, yandex.uz search domain name will be used. */
    SEARCH_TYPE_UZ = 6,
    UNRECOGNIZED = -1,
}

export function searchQuery_SearchTypeFromJSON(object: any): SearchQuery_SearchType {
    switch (object) {
        case 0:
        case 'SEARCH_TYPE_UNSPECIFIED':
            return SearchQuery_SearchType.SEARCH_TYPE_UNSPECIFIED;
        case 1:
        case 'SEARCH_TYPE_RU':
            return SearchQuery_SearchType.SEARCH_TYPE_RU;
        case 2:
        case 'SEARCH_TYPE_TR':
            return SearchQuery_SearchType.SEARCH_TYPE_TR;
        case 3:
        case 'SEARCH_TYPE_COM':
            return SearchQuery_SearchType.SEARCH_TYPE_COM;
        case 4:
        case 'SEARCH_TYPE_KK':
            return SearchQuery_SearchType.SEARCH_TYPE_KK;
        case 5:
        case 'SEARCH_TYPE_BE':
            return SearchQuery_SearchType.SEARCH_TYPE_BE;
        case 6:
        case 'SEARCH_TYPE_UZ':
            return SearchQuery_SearchType.SEARCH_TYPE_UZ;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SearchQuery_SearchType.UNRECOGNIZED;
    }
}

export function searchQuery_SearchTypeToJSON(object: SearchQuery_SearchType): string {
    switch (object) {
        case SearchQuery_SearchType.SEARCH_TYPE_UNSPECIFIED:
            return 'SEARCH_TYPE_UNSPECIFIED';
        case SearchQuery_SearchType.SEARCH_TYPE_RU:
            return 'SEARCH_TYPE_RU';
        case SearchQuery_SearchType.SEARCH_TYPE_TR:
            return 'SEARCH_TYPE_TR';
        case SearchQuery_SearchType.SEARCH_TYPE_COM:
            return 'SEARCH_TYPE_COM';
        case SearchQuery_SearchType.SEARCH_TYPE_KK:
            return 'SEARCH_TYPE_KK';
        case SearchQuery_SearchType.SEARCH_TYPE_BE:
            return 'SEARCH_TYPE_BE';
        case SearchQuery_SearchType.SEARCH_TYPE_UZ:
            return 'SEARCH_TYPE_UZ';
        default:
            return 'UNKNOWN';
    }
}

export enum SearchQuery_FamilyMode {
    FAMILY_MODE_UNSPECIFIED = 0,
    /** FAMILY_MODE_NONE - Filtering is disabled. Search results include any documents regardless of their contents. */
    FAMILY_MODE_NONE = 1,
    /**
     * FAMILY_MODE_MODERATE - Moderate filter (default value). Documents of the Adult category are excluded from search results
     * unless a query is explicitly made for searching resources of this category.
     */
    FAMILY_MODE_MODERATE = 2,
    /**
     * FAMILY_MODE_STRICT - Regardless of a search query, documents of the Adult category
     * and those with profanity are excluded from search results.
     */
    FAMILY_MODE_STRICT = 3,
    UNRECOGNIZED = -1,
}

export function searchQuery_FamilyModeFromJSON(object: any): SearchQuery_FamilyMode {
    switch (object) {
        case 0:
        case 'FAMILY_MODE_UNSPECIFIED':
            return SearchQuery_FamilyMode.FAMILY_MODE_UNSPECIFIED;
        case 1:
        case 'FAMILY_MODE_NONE':
            return SearchQuery_FamilyMode.FAMILY_MODE_NONE;
        case 2:
        case 'FAMILY_MODE_MODERATE':
            return SearchQuery_FamilyMode.FAMILY_MODE_MODERATE;
        case 3:
        case 'FAMILY_MODE_STRICT':
            return SearchQuery_FamilyMode.FAMILY_MODE_STRICT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SearchQuery_FamilyMode.UNRECOGNIZED;
    }
}

export function searchQuery_FamilyModeToJSON(object: SearchQuery_FamilyMode): string {
    switch (object) {
        case SearchQuery_FamilyMode.FAMILY_MODE_UNSPECIFIED:
            return 'FAMILY_MODE_UNSPECIFIED';
        case SearchQuery_FamilyMode.FAMILY_MODE_NONE:
            return 'FAMILY_MODE_NONE';
        case SearchQuery_FamilyMode.FAMILY_MODE_MODERATE:
            return 'FAMILY_MODE_MODERATE';
        case SearchQuery_FamilyMode.FAMILY_MODE_STRICT:
            return 'FAMILY_MODE_STRICT';
        default:
            return 'UNKNOWN';
    }
}

export enum SearchQuery_FixTypoMode {
    FIX_TYPO_MODE_UNSPECIFIED = 0,
    /** FIX_TYPO_MODE_ON - Automatically correct typos (default value). */
    FIX_TYPO_MODE_ON = 1,
    /** FIX_TYPO_MODE_OFF - Autocorrection is off. */
    FIX_TYPO_MODE_OFF = 2,
    UNRECOGNIZED = -1,
}

export function searchQuery_FixTypoModeFromJSON(object: any): SearchQuery_FixTypoMode {
    switch (object) {
        case 0:
        case 'FIX_TYPO_MODE_UNSPECIFIED':
            return SearchQuery_FixTypoMode.FIX_TYPO_MODE_UNSPECIFIED;
        case 1:
        case 'FIX_TYPO_MODE_ON':
            return SearchQuery_FixTypoMode.FIX_TYPO_MODE_ON;
        case 2:
        case 'FIX_TYPO_MODE_OFF':
            return SearchQuery_FixTypoMode.FIX_TYPO_MODE_OFF;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SearchQuery_FixTypoMode.UNRECOGNIZED;
    }
}

export function searchQuery_FixTypoModeToJSON(object: SearchQuery_FixTypoMode): string {
    switch (object) {
        case SearchQuery_FixTypoMode.FIX_TYPO_MODE_UNSPECIFIED:
            return 'FIX_TYPO_MODE_UNSPECIFIED';
        case SearchQuery_FixTypoMode.FIX_TYPO_MODE_ON:
            return 'FIX_TYPO_MODE_ON';
        case SearchQuery_FixTypoMode.FIX_TYPO_MODE_OFF:
            return 'FIX_TYPO_MODE_OFF';
        default:
            return 'UNKNOWN';
    }
}

const baseSearchQuery: object = {
    searchType: 0,
    queryText: '',
    familyMode: 0,
    page: 0,
    fixTypoMode: 0,
};

export const SearchQuery = {
    encode(message: SearchQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.searchType !== 0) {
            writer.uint32(8).int32(message.searchType);
        }
        if (message.queryText !== '') {
            writer.uint32(18).string(message.queryText);
        }
        if (message.familyMode !== 0) {
            writer.uint32(24).int32(message.familyMode);
        }
        if (message.page !== 0) {
            writer.uint32(32).int64(message.page);
        }
        if (message.fixTypoMode !== 0) {
            writer.uint32(40).int32(message.fixTypoMode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SearchQuery {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSearchQuery } as SearchQuery;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.searchType = reader.int32() as any;
                    break;
                case 2:
                    message.queryText = reader.string();
                    break;
                case 3:
                    message.familyMode = reader.int32() as any;
                    break;
                case 4:
                    message.page = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.fixTypoMode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SearchQuery {
        const message = { ...baseSearchQuery } as SearchQuery;
        message.searchType =
            object.searchType !== undefined && object.searchType !== null
                ? searchQuery_SearchTypeFromJSON(object.searchType)
                : 0;
        message.queryText =
            object.queryText !== undefined && object.queryText !== null
                ? String(object.queryText)
                : '';
        message.familyMode =
            object.familyMode !== undefined && object.familyMode !== null
                ? searchQuery_FamilyModeFromJSON(object.familyMode)
                : 0;
        message.page = object.page !== undefined && object.page !== null ? Number(object.page) : 0;
        message.fixTypoMode =
            object.fixTypoMode !== undefined && object.fixTypoMode !== null
                ? searchQuery_FixTypoModeFromJSON(object.fixTypoMode)
                : 0;
        return message;
    },

    toJSON(message: SearchQuery): unknown {
        const obj: any = {};
        message.searchType !== undefined &&
            (obj.searchType = searchQuery_SearchTypeToJSON(message.searchType));
        message.queryText !== undefined && (obj.queryText = message.queryText);
        message.familyMode !== undefined &&
            (obj.familyMode = searchQuery_FamilyModeToJSON(message.familyMode));
        message.page !== undefined && (obj.page = Math.round(message.page));
        message.fixTypoMode !== undefined &&
            (obj.fixTypoMode = searchQuery_FixTypoModeToJSON(message.fixTypoMode));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SearchQuery>, I>>(object: I): SearchQuery {
        const message = { ...baseSearchQuery } as SearchQuery;
        message.searchType = object.searchType ?? 0;
        message.queryText = object.queryText ?? '';
        message.familyMode = object.familyMode ?? 0;
        message.page = object.page ?? 0;
        message.fixTypoMode = object.fixTypoMode ?? 0;
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
