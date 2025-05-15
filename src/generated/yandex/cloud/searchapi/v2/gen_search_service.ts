/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleServerStreamingCall,
    Client,
    CallOptions,
    ClientReadableStream,
    Metadata,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.searchapi.v2';

export enum Role {
    ROLE_UNSPECIFIED = 0,
    /** ROLE_USER - The message is sent by the user. */
    ROLE_USER = 1,
    /** ROLE_ASSISTANT - The message is sent by the model. */
    ROLE_ASSISTANT = 2,
    UNRECOGNIZED = -1,
}

export function roleFromJSON(object: any): Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return Role.ROLE_UNSPECIFIED;
        case 1:
        case 'ROLE_USER':
            return Role.ROLE_USER;
        case 2:
        case 'ROLE_ASSISTANT':
            return Role.ROLE_ASSISTANT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Role.UNRECOGNIZED;
    }
}

export function roleToJSON(object: Role): string {
    switch (object) {
        case Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case Role.ROLE_USER:
            return 'ROLE_USER';
        case Role.ROLE_ASSISTANT:
            return 'ROLE_ASSISTANT';
        default:
            return 'UNKNOWN';
    }
}

export interface GenSearchMessage {
    /** Text of user query or the model's response (depending on the role value). */
    content: string;
    /** Message sender's role */
    role: Role;
}

export interface GenSearchRequest {
    /** Single search query or a search query with context in the form of chat with the model. */
    messages: GenSearchMessage[];
    /** ID of the folder. */
    folderId: string;
    site?: GenSearchRequest_SiteOption | undefined;
    host?: GenSearchRequest_HostOption | undefined;
    url?: GenSearchRequest_UrlOption | undefined;
    /** Fix query misspells. */
    fixMisspell: boolean;
    /** Use the documents inaccessible from the site's front page. */
    enableNrfmDocs: boolean;
    /** Restricts the search by date, document formats or language. */
    searchFilters: GenSearchRequest_SearchFilter[];
}

export interface GenSearchRequest_SiteOption {
    /** Restricts the search to the specific websites. */
    site: string[];
}

export interface GenSearchRequest_UrlOption {
    /** Restricts the search to the specific pages. */
    url: string[];
}

export interface GenSearchRequest_HostOption {
    /** Restricts the search to the specific hosts. */
    host: string[];
}

export interface GenSearchRequest_SearchFilter {
    /** Restrict by document date. See https://yandex.ru/support/search/ru/query-language/search-operators details. */
    date: string | undefined;
    /** Restrict by document language. Use ISO 639-1 language codes. */
    lang: string | undefined;
    /** Restrict by document format. */
    format: GenSearchRequest_SearchFilter_DocFormat | undefined;
}

export enum GenSearchRequest_SearchFilter_DocFormat {
    DOC_FORMAT_UNSPECIFIED = 0,
    DOC_FORMAT_PDF = 1,
    DOC_FORMAT_XLS = 2,
    DOC_FORMAT_ODS = 3,
    DOC_FORMAT_RTF = 4,
    DOC_FORMAT_PPT = 5,
    DOC_FORMAT_ODP = 6,
    DOC_FORMAT_SWF = 7,
    DOC_FORMAT_ODT = 8,
    DOC_FORMAT_ODG = 9,
    DOC_FORMAT_DOC = 10,
    UNRECOGNIZED = -1,
}

export function genSearchRequest_SearchFilter_DocFormatFromJSON(
    object: any,
): GenSearchRequest_SearchFilter_DocFormat {
    switch (object) {
        case 0:
        case 'DOC_FORMAT_UNSPECIFIED':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_UNSPECIFIED;
        case 1:
        case 'DOC_FORMAT_PDF':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_PDF;
        case 2:
        case 'DOC_FORMAT_XLS':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_XLS;
        case 3:
        case 'DOC_FORMAT_ODS':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_ODS;
        case 4:
        case 'DOC_FORMAT_RTF':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_RTF;
        case 5:
        case 'DOC_FORMAT_PPT':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_PPT;
        case 6:
        case 'DOC_FORMAT_ODP':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_ODP;
        case 7:
        case 'DOC_FORMAT_SWF':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_SWF;
        case 8:
        case 'DOC_FORMAT_ODT':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_ODT;
        case 9:
        case 'DOC_FORMAT_ODG':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_ODG;
        case 10:
        case 'DOC_FORMAT_DOC':
            return GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_DOC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GenSearchRequest_SearchFilter_DocFormat.UNRECOGNIZED;
    }
}

export function genSearchRequest_SearchFilter_DocFormatToJSON(
    object: GenSearchRequest_SearchFilter_DocFormat,
): string {
    switch (object) {
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_UNSPECIFIED:
            return 'DOC_FORMAT_UNSPECIFIED';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_PDF:
            return 'DOC_FORMAT_PDF';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_XLS:
            return 'DOC_FORMAT_XLS';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_ODS:
            return 'DOC_FORMAT_ODS';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_RTF:
            return 'DOC_FORMAT_RTF';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_PPT:
            return 'DOC_FORMAT_PPT';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_ODP:
            return 'DOC_FORMAT_ODP';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_SWF:
            return 'DOC_FORMAT_SWF';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_ODT:
            return 'DOC_FORMAT_ODT';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_ODG:
            return 'DOC_FORMAT_ODG';
        case GenSearchRequest_SearchFilter_DocFormat.DOC_FORMAT_DOC:
            return 'DOC_FORMAT_DOC';
        default:
            return 'UNKNOWN';
    }
}

export interface GenSearchResponse {
    /** The text of the generative response. */
    message?: GenSearchMessage;
    /** The documents used to form the generative response. */
    sources: GenSearchResponse_Source[];
    /** The search queries, refined by the YandexGPT model and used for the generative response. */
    searchQueries: GenSearchResponse_SearchQuery[];
    /** The text of the search query with fixed misspells. */
    fixedMisspellQuery: string;
    /** The model failed to answer due to the ethical concerns. */
    isAnswerRejected: boolean;
    /** A bullet answer in case the model cannot give a proper response and returns a set of bullets with various data. */
    isBulletAnswer: boolean;
}

export interface GenSearchResponse_Source {
    /** Document URL. */
    url: string;
    /** Document title. */
    title: string;
    /** The document was used in the answer. */
    used: boolean;
}

export interface GenSearchResponse_SearchQuery {
    /** Query text. */
    text: string;
    /** Query ID in Yandex Search. */
    reqId: string;
}

const baseGenSearchMessage: object = { content: '', role: 0 };

export const GenSearchMessage = {
    encode(message: GenSearchMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.content !== '') {
            writer.uint32(10).string(message.content);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchMessage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchMessage } as GenSearchMessage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                case 2:
                    message.role = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchMessage {
        const message = { ...baseGenSearchMessage } as GenSearchMessage;
        message.content =
            object.content !== undefined && object.content !== null ? String(object.content) : '';
        message.role =
            object.role !== undefined && object.role !== null ? roleFromJSON(object.role) : 0;
        return message;
    },

    toJSON(message: GenSearchMessage): unknown {
        const obj: any = {};
        message.content !== undefined && (obj.content = message.content);
        message.role !== undefined && (obj.role = roleToJSON(message.role));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchMessage>, I>>(object: I): GenSearchMessage {
        const message = { ...baseGenSearchMessage } as GenSearchMessage;
        message.content = object.content ?? '';
        message.role = object.role ?? 0;
        return message;
    },
};

const baseGenSearchRequest: object = { folderId: '', fixMisspell: false, enableNrfmDocs: false };

export const GenSearchRequest = {
    encode(message: GenSearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.messages) {
            GenSearchMessage.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.site !== undefined) {
            GenSearchRequest_SiteOption.encode(message.site, writer.uint32(26).fork()).ldelim();
        }
        if (message.host !== undefined) {
            GenSearchRequest_HostOption.encode(message.host, writer.uint32(34).fork()).ldelim();
        }
        if (message.url !== undefined) {
            GenSearchRequest_UrlOption.encode(message.url, writer.uint32(42).fork()).ldelim();
        }
        if (message.fixMisspell === true) {
            writer.uint32(48).bool(message.fixMisspell);
        }
        if (message.enableNrfmDocs === true) {
            writer.uint32(56).bool(message.enableNrfmDocs);
        }
        for (const v of message.searchFilters) {
            GenSearchRequest_SearchFilter.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchRequest } as GenSearchRequest;
        message.messages = [];
        message.searchFilters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(GenSearchMessage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.site = GenSearchRequest_SiteOption.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.host = GenSearchRequest_HostOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.url = GenSearchRequest_UrlOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.fixMisspell = reader.bool();
                    break;
                case 7:
                    message.enableNrfmDocs = reader.bool();
                    break;
                case 8:
                    message.searchFilters.push(
                        GenSearchRequest_SearchFilter.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchRequest {
        const message = { ...baseGenSearchRequest } as GenSearchRequest;
        message.messages = (object.messages ?? []).map((e: any) => GenSearchMessage.fromJSON(e));
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.site =
            object.site !== undefined && object.site !== null
                ? GenSearchRequest_SiteOption.fromJSON(object.site)
                : undefined;
        message.host =
            object.host !== undefined && object.host !== null
                ? GenSearchRequest_HostOption.fromJSON(object.host)
                : undefined;
        message.url =
            object.url !== undefined && object.url !== null
                ? GenSearchRequest_UrlOption.fromJSON(object.url)
                : undefined;
        message.fixMisspell =
            object.fixMisspell !== undefined && object.fixMisspell !== null
                ? Boolean(object.fixMisspell)
                : false;
        message.enableNrfmDocs =
            object.enableNrfmDocs !== undefined && object.enableNrfmDocs !== null
                ? Boolean(object.enableNrfmDocs)
                : false;
        message.searchFilters = (object.searchFilters ?? []).map((e: any) =>
            GenSearchRequest_SearchFilter.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GenSearchRequest): unknown {
        const obj: any = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) =>
                e ? GenSearchMessage.toJSON(e) : undefined,
            );
        } else {
            obj.messages = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.site !== undefined &&
            (obj.site = message.site
                ? GenSearchRequest_SiteOption.toJSON(message.site)
                : undefined);
        message.host !== undefined &&
            (obj.host = message.host
                ? GenSearchRequest_HostOption.toJSON(message.host)
                : undefined);
        message.url !== undefined &&
            (obj.url = message.url ? GenSearchRequest_UrlOption.toJSON(message.url) : undefined);
        message.fixMisspell !== undefined && (obj.fixMisspell = message.fixMisspell);
        message.enableNrfmDocs !== undefined && (obj.enableNrfmDocs = message.enableNrfmDocs);
        if (message.searchFilters) {
            obj.searchFilters = message.searchFilters.map((e) =>
                e ? GenSearchRequest_SearchFilter.toJSON(e) : undefined,
            );
        } else {
            obj.searchFilters = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchRequest>, I>>(object: I): GenSearchRequest {
        const message = { ...baseGenSearchRequest } as GenSearchRequest;
        message.messages = object.messages?.map((e) => GenSearchMessage.fromPartial(e)) || [];
        message.folderId = object.folderId ?? '';
        message.site =
            object.site !== undefined && object.site !== null
                ? GenSearchRequest_SiteOption.fromPartial(object.site)
                : undefined;
        message.host =
            object.host !== undefined && object.host !== null
                ? GenSearchRequest_HostOption.fromPartial(object.host)
                : undefined;
        message.url =
            object.url !== undefined && object.url !== null
                ? GenSearchRequest_UrlOption.fromPartial(object.url)
                : undefined;
        message.fixMisspell = object.fixMisspell ?? false;
        message.enableNrfmDocs = object.enableNrfmDocs ?? false;
        message.searchFilters =
            object.searchFilters?.map((e) => GenSearchRequest_SearchFilter.fromPartial(e)) || [];
        return message;
    },
};

const baseGenSearchRequest_SiteOption: object = { site: '' };

export const GenSearchRequest_SiteOption = {
    encode(
        message: GenSearchRequest_SiteOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.site) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchRequest_SiteOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchRequest_SiteOption } as GenSearchRequest_SiteOption;
        message.site = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.site.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchRequest_SiteOption {
        const message = { ...baseGenSearchRequest_SiteOption } as GenSearchRequest_SiteOption;
        message.site = (object.site ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GenSearchRequest_SiteOption): unknown {
        const obj: any = {};
        if (message.site) {
            obj.site = message.site.map((e) => e);
        } else {
            obj.site = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchRequest_SiteOption>, I>>(
        object: I,
    ): GenSearchRequest_SiteOption {
        const message = { ...baseGenSearchRequest_SiteOption } as GenSearchRequest_SiteOption;
        message.site = object.site?.map((e) => e) || [];
        return message;
    },
};

const baseGenSearchRequest_UrlOption: object = { url: '' };

export const GenSearchRequest_UrlOption = {
    encode(
        message: GenSearchRequest_UrlOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.url) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchRequest_UrlOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchRequest_UrlOption } as GenSearchRequest_UrlOption;
        message.url = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchRequest_UrlOption {
        const message = { ...baseGenSearchRequest_UrlOption } as GenSearchRequest_UrlOption;
        message.url = (object.url ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GenSearchRequest_UrlOption): unknown {
        const obj: any = {};
        if (message.url) {
            obj.url = message.url.map((e) => e);
        } else {
            obj.url = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchRequest_UrlOption>, I>>(
        object: I,
    ): GenSearchRequest_UrlOption {
        const message = { ...baseGenSearchRequest_UrlOption } as GenSearchRequest_UrlOption;
        message.url = object.url?.map((e) => e) || [];
        return message;
    },
};

const baseGenSearchRequest_HostOption: object = { host: '' };

export const GenSearchRequest_HostOption = {
    encode(
        message: GenSearchRequest_HostOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.host) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchRequest_HostOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchRequest_HostOption } as GenSearchRequest_HostOption;
        message.host = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchRequest_HostOption {
        const message = { ...baseGenSearchRequest_HostOption } as GenSearchRequest_HostOption;
        message.host = (object.host ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GenSearchRequest_HostOption): unknown {
        const obj: any = {};
        if (message.host) {
            obj.host = message.host.map((e) => e);
        } else {
            obj.host = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchRequest_HostOption>, I>>(
        object: I,
    ): GenSearchRequest_HostOption {
        const message = { ...baseGenSearchRequest_HostOption } as GenSearchRequest_HostOption;
        message.host = object.host?.map((e) => e) || [];
        return message;
    },
};

const baseGenSearchRequest_SearchFilter: object = {};

export const GenSearchRequest_SearchFilter = {
    encode(
        message: GenSearchRequest_SearchFilter,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.date !== undefined) {
            writer.uint32(10).string(message.date);
        }
        if (message.lang !== undefined) {
            writer.uint32(18).string(message.lang);
        }
        if (message.format !== undefined) {
            writer.uint32(24).int32(message.format);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchRequest_SearchFilter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchRequest_SearchFilter } as GenSearchRequest_SearchFilter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.date = reader.string();
                    break;
                case 2:
                    message.lang = reader.string();
                    break;
                case 3:
                    message.format = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchRequest_SearchFilter {
        const message = { ...baseGenSearchRequest_SearchFilter } as GenSearchRequest_SearchFilter;
        message.date =
            object.date !== undefined && object.date !== null ? String(object.date) : undefined;
        message.lang =
            object.lang !== undefined && object.lang !== null ? String(object.lang) : undefined;
        message.format =
            object.format !== undefined && object.format !== null
                ? genSearchRequest_SearchFilter_DocFormatFromJSON(object.format)
                : undefined;
        return message;
    },

    toJSON(message: GenSearchRequest_SearchFilter): unknown {
        const obj: any = {};
        message.date !== undefined && (obj.date = message.date);
        message.lang !== undefined && (obj.lang = message.lang);
        message.format !== undefined &&
            (obj.format =
                message.format !== undefined
                    ? genSearchRequest_SearchFilter_DocFormatToJSON(message.format)
                    : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchRequest_SearchFilter>, I>>(
        object: I,
    ): GenSearchRequest_SearchFilter {
        const message = { ...baseGenSearchRequest_SearchFilter } as GenSearchRequest_SearchFilter;
        message.date = object.date ?? undefined;
        message.lang = object.lang ?? undefined;
        message.format = object.format ?? undefined;
        return message;
    },
};

const baseGenSearchResponse: object = {
    fixedMisspellQuery: '',
    isAnswerRejected: false,
    isBulletAnswer: false,
};

export const GenSearchResponse = {
    encode(message: GenSearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== undefined) {
            GenSearchMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sources) {
            GenSearchResponse_Source.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.searchQueries) {
            GenSearchResponse_SearchQuery.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.fixedMisspellQuery !== '') {
            writer.uint32(34).string(message.fixedMisspellQuery);
        }
        if (message.isAnswerRejected === true) {
            writer.uint32(40).bool(message.isAnswerRejected);
        }
        if (message.isBulletAnswer === true) {
            writer.uint32(48).bool(message.isBulletAnswer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchResponse } as GenSearchResponse;
        message.sources = [];
        message.searchQueries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = GenSearchMessage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sources.push(GenSearchResponse_Source.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.searchQueries.push(
                        GenSearchResponse_SearchQuery.decode(reader, reader.uint32()),
                    );
                    break;
                case 4:
                    message.fixedMisspellQuery = reader.string();
                    break;
                case 5:
                    message.isAnswerRejected = reader.bool();
                    break;
                case 6:
                    message.isBulletAnswer = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchResponse {
        const message = { ...baseGenSearchResponse } as GenSearchResponse;
        message.message =
            object.message !== undefined && object.message !== null
                ? GenSearchMessage.fromJSON(object.message)
                : undefined;
        message.sources = (object.sources ?? []).map((e: any) =>
            GenSearchResponse_Source.fromJSON(e),
        );
        message.searchQueries = (object.searchQueries ?? []).map((e: any) =>
            GenSearchResponse_SearchQuery.fromJSON(e),
        );
        message.fixedMisspellQuery =
            object.fixedMisspellQuery !== undefined && object.fixedMisspellQuery !== null
                ? String(object.fixedMisspellQuery)
                : '';
        message.isAnswerRejected =
            object.isAnswerRejected !== undefined && object.isAnswerRejected !== null
                ? Boolean(object.isAnswerRejected)
                : false;
        message.isBulletAnswer =
            object.isBulletAnswer !== undefined && object.isBulletAnswer !== null
                ? Boolean(object.isBulletAnswer)
                : false;
        return message;
    },

    toJSON(message: GenSearchResponse): unknown {
        const obj: any = {};
        message.message !== undefined &&
            (obj.message = message.message ? GenSearchMessage.toJSON(message.message) : undefined);
        if (message.sources) {
            obj.sources = message.sources.map((e) =>
                e ? GenSearchResponse_Source.toJSON(e) : undefined,
            );
        } else {
            obj.sources = [];
        }
        if (message.searchQueries) {
            obj.searchQueries = message.searchQueries.map((e) =>
                e ? GenSearchResponse_SearchQuery.toJSON(e) : undefined,
            );
        } else {
            obj.searchQueries = [];
        }
        message.fixedMisspellQuery !== undefined &&
            (obj.fixedMisspellQuery = message.fixedMisspellQuery);
        message.isAnswerRejected !== undefined && (obj.isAnswerRejected = message.isAnswerRejected);
        message.isBulletAnswer !== undefined && (obj.isBulletAnswer = message.isBulletAnswer);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchResponse>, I>>(object: I): GenSearchResponse {
        const message = { ...baseGenSearchResponse } as GenSearchResponse;
        message.message =
            object.message !== undefined && object.message !== null
                ? GenSearchMessage.fromPartial(object.message)
                : undefined;
        message.sources = object.sources?.map((e) => GenSearchResponse_Source.fromPartial(e)) || [];
        message.searchQueries =
            object.searchQueries?.map((e) => GenSearchResponse_SearchQuery.fromPartial(e)) || [];
        message.fixedMisspellQuery = object.fixedMisspellQuery ?? '';
        message.isAnswerRejected = object.isAnswerRejected ?? false;
        message.isBulletAnswer = object.isBulletAnswer ?? false;
        return message;
    },
};

const baseGenSearchResponse_Source: object = { url: '', title: '', used: false };

export const GenSearchResponse_Source = {
    encode(
        message: GenSearchResponse_Source,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.used === true) {
            writer.uint32(24).bool(message.used);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchResponse_Source {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchResponse_Source } as GenSearchResponse_Source;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.used = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchResponse_Source {
        const message = { ...baseGenSearchResponse_Source } as GenSearchResponse_Source;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.used =
            object.used !== undefined && object.used !== null ? Boolean(object.used) : false;
        return message;
    },

    toJSON(message: GenSearchResponse_Source): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.title !== undefined && (obj.title = message.title);
        message.used !== undefined && (obj.used = message.used);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchResponse_Source>, I>>(
        object: I,
    ): GenSearchResponse_Source {
        const message = { ...baseGenSearchResponse_Source } as GenSearchResponse_Source;
        message.url = object.url ?? '';
        message.title = object.title ?? '';
        message.used = object.used ?? false;
        return message;
    },
};

const baseGenSearchResponse_SearchQuery: object = { text: '', reqId: '' };

export const GenSearchResponse_SearchQuery = {
    encode(
        message: GenSearchResponse_SearchQuery,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.reqId !== '') {
            writer.uint32(18).string(message.reqId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchResponse_SearchQuery {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchResponse_SearchQuery } as GenSearchResponse_SearchQuery;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.reqId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchResponse_SearchQuery {
        const message = { ...baseGenSearchResponse_SearchQuery } as GenSearchResponse_SearchQuery;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.reqId =
            object.reqId !== undefined && object.reqId !== null ? String(object.reqId) : '';
        return message;
    },

    toJSON(message: GenSearchResponse_SearchQuery): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.reqId !== undefined && (obj.reqId = message.reqId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchResponse_SearchQuery>, I>>(
        object: I,
    ): GenSearchResponse_SearchQuery {
        const message = { ...baseGenSearchResponse_SearchQuery } as GenSearchResponse_SearchQuery;
        message.text = object.text ?? '';
        message.reqId = object.reqId ?? '';
        return message;
    },
};

/** A set of methods for searching the Yandex search database using YandexGPT generative AI. */
export const GenSearchServiceService = {
    search: {
        path: '/yandex.cloud.searchapi.v2.GenSearchService/Search',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value: GenSearchRequest) =>
            Buffer.from(GenSearchRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GenSearchRequest.decode(value),
        responseSerialize: (value: GenSearchResponse) =>
            Buffer.from(GenSearchResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GenSearchResponse.decode(value),
    },
} as const;

export interface GenSearchServiceServer extends UntypedServiceImplementation {
    search: handleServerStreamingCall<GenSearchRequest, GenSearchResponse>;
}

export interface GenSearchServiceClient extends Client {
    search(
        request: GenSearchRequest,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<GenSearchResponse>;
    search(
        request: GenSearchRequest,
        metadata?: Metadata,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<GenSearchResponse>;
}

export const GenSearchServiceClient = makeGenericClientConstructor(
    GenSearchServiceService,
    'yandex.cloud.searchapi.v2.GenSearchService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): GenSearchServiceClient;
    service: typeof GenSearchServiceService;
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
