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
import { AccessPolicy } from '../../access/access';

export const protobufPackage = 'yandex.cloud.iam.v1';

export interface ListAccessPolicyTemplatesRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessPolicyTemplatesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAccessPolicyTemplatesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListAccessPolicyTemplatesResponse {
    /** List of available access policy templates. */
    accessPolicyTemplates: AccessPolicy[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessPolicyTemplatesRequest.page_size], use the [next_page_token] as the value
     * for the [ListAccessPolicyTemplatesRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseListAccessPolicyTemplatesRequest: object = { pageSize: 0, pageToken: '' };

export const ListAccessPolicyTemplatesRequest: {
    encode(message: ListAccessPolicyTemplatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessPolicyTemplatesRequest;
    fromJSON(object: any): ListAccessPolicyTemplatesRequest;
    toJSON(message: ListAccessPolicyTemplatesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAccessPolicyTemplatesRequest>, I>>(object: I): ListAccessPolicyTemplatesRequest;
} = {
    encode(
        message: ListAccessPolicyTemplatesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessPolicyTemplatesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessPolicyTemplatesRequest,
        } as ListAccessPolicyTemplatesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAccessPolicyTemplatesRequest {
        const message = {
            ...baseListAccessPolicyTemplatesRequest,
        } as ListAccessPolicyTemplatesRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessPolicyTemplatesRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessPolicyTemplatesRequest>, I>>(
        object: I,
    ): ListAccessPolicyTemplatesRequest {
        const message = {
            ...baseListAccessPolicyTemplatesRequest,
        } as ListAccessPolicyTemplatesRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListAccessPolicyTemplatesResponse: object = { nextPageToken: '' };

export const ListAccessPolicyTemplatesResponse: {
    encode(message: ListAccessPolicyTemplatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessPolicyTemplatesResponse;
    fromJSON(object: any): ListAccessPolicyTemplatesResponse;
    toJSON(message: ListAccessPolicyTemplatesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAccessPolicyTemplatesResponse>, I>>(object: I): ListAccessPolicyTemplatesResponse;
} = {
    encode(
        message: ListAccessPolicyTemplatesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.accessPolicyTemplates) {
            AccessPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAccessPolicyTemplatesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessPolicyTemplatesResponse,
        } as ListAccessPolicyTemplatesResponse;
        message.accessPolicyTemplates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessPolicyTemplates.push(
                        AccessPolicy.decode(reader, reader.uint32()),
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAccessPolicyTemplatesResponse {
        const message = {
            ...baseListAccessPolicyTemplatesResponse,
        } as ListAccessPolicyTemplatesResponse;
        message.accessPolicyTemplates = (object.accessPolicyTemplates ?? []).map((e: any) =>
            AccessPolicy.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAccessPolicyTemplatesResponse): unknown {
        const obj: any = {};
        if (message.accessPolicyTemplates) {
            obj.accessPolicyTemplates = message.accessPolicyTemplates.map((e) =>
                e ? AccessPolicy.toJSON(e) : undefined,
            );
        } else {
            obj.accessPolicyTemplates = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAccessPolicyTemplatesResponse>, I>>(
        object: I,
    ): ListAccessPolicyTemplatesResponse {
        const message = {
            ...baseListAccessPolicyTemplatesResponse,
        } as ListAccessPolicyTemplatesResponse;
        message.accessPolicyTemplates =
            object.accessPolicyTemplates?.map((e) => AccessPolicy.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

export const AccessPolicyTemplateServiceService = {
    /** Returns list of available access policy templates. */
    list: {
        path: '/yandex.cloud.iam.v1.AccessPolicyTemplateService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessPolicyTemplatesRequest) =>
            Buffer.from(ListAccessPolicyTemplatesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessPolicyTemplatesRequest.decode(value),
        responseSerialize: (value: ListAccessPolicyTemplatesResponse) =>
            Buffer.from(ListAccessPolicyTemplatesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessPolicyTemplatesResponse.decode(value),
    },
} as const;

export interface AccessPolicyTemplateServiceServer extends UntypedServiceImplementation {
    /** Returns list of available access policy templates. */
    list: handleUnaryCall<ListAccessPolicyTemplatesRequest, ListAccessPolicyTemplatesResponse>;
}

export interface AccessPolicyTemplateServiceClient extends Client {
    /** Returns list of available access policy templates. */
    list(
        request: ListAccessPolicyTemplatesRequest,
        callback: (error: ServiceError | null, response: ListAccessPolicyTemplatesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAccessPolicyTemplatesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessPolicyTemplatesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAccessPolicyTemplatesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessPolicyTemplatesResponse) => void,
    ): ClientUnaryCall;
}

export const AccessPolicyTemplateServiceClient = makeGenericClientConstructor(
    AccessPolicyTemplateServiceService,
    'yandex.cloud.iam.v1.AccessPolicyTemplateService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AccessPolicyTemplateServiceClient;
    service: typeof AccessPolicyTemplateServiceService;
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
