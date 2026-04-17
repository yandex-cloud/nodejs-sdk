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
import { Resource } from './resource';

export const protobufPackage = 'yandex.cloud.iam.v1';

export interface ListSubjectAccessBindingsRequest {
    /** SubjectId to list access bindings for. */
    subjectId: string;
    /** OrganizationId to search access bindings in. */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListSubjectAccessBindingsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListSubjectAccessBindingsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListSubjectAccessBindingsResponse {
    /** List of access bindings for the specified subject. */
    subjectAccessBindings: SubjectAccessBinding[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSubjectAccessBindingsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSubjectAccessBindingsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface SubjectAccessBinding {
    /** Role assigned to the subject. */
    roleId: string;
    /** Resource to which the access binding applies. */
    resource?: Resource;
    /** Identifier of the subject to which this role is granted. */
    subjectId: string;
}

const baseListSubjectAccessBindingsRequest: object = {
    subjectId: '',
    organizationId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListSubjectAccessBindingsRequest: {
    encode(message: ListSubjectAccessBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSubjectAccessBindingsRequest;
    fromJSON(object: any): ListSubjectAccessBindingsRequest;
    toJSON(message: ListSubjectAccessBindingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSubjectAccessBindingsRequest>, I>>(object: I): ListSubjectAccessBindingsRequest;
} = {
    encode(
        message: ListSubjectAccessBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectId !== '') {
            writer.uint32(10).string(message.subjectId);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSubjectAccessBindingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSubjectAccessBindingsRequest,
        } as ListSubjectAccessBindingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectId = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
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

    fromJSON(object: any): ListSubjectAccessBindingsRequest {
        const message = {
            ...baseListSubjectAccessBindingsRequest,
        } as ListSubjectAccessBindingsRequest;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListSubjectAccessBindingsRequest): unknown {
        const obj: any = {};
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSubjectAccessBindingsRequest>, I>>(
        object: I,
    ): ListSubjectAccessBindingsRequest {
        const message = {
            ...baseListSubjectAccessBindingsRequest,
        } as ListSubjectAccessBindingsRequest;
        message.subjectId = object.subjectId ?? '';
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListSubjectAccessBindingsResponse: object = { nextPageToken: '' };

export const ListSubjectAccessBindingsResponse: {
    encode(message: ListSubjectAccessBindingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSubjectAccessBindingsResponse;
    fromJSON(object: any): ListSubjectAccessBindingsResponse;
    toJSON(message: ListSubjectAccessBindingsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSubjectAccessBindingsResponse>, I>>(object: I): ListSubjectAccessBindingsResponse;
} = {
    encode(
        message: ListSubjectAccessBindingsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.subjectAccessBindings) {
            SubjectAccessBinding.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSubjectAccessBindingsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSubjectAccessBindingsResponse,
        } as ListSubjectAccessBindingsResponse;
        message.subjectAccessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectAccessBindings.push(
                        SubjectAccessBinding.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ListSubjectAccessBindingsResponse {
        const message = {
            ...baseListSubjectAccessBindingsResponse,
        } as ListSubjectAccessBindingsResponse;
        message.subjectAccessBindings = (object.subjectAccessBindings ?? []).map((e: any) =>
            SubjectAccessBinding.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListSubjectAccessBindingsResponse): unknown {
        const obj: any = {};
        if (message.subjectAccessBindings) {
            obj.subjectAccessBindings = message.subjectAccessBindings.map((e) =>
                e ? SubjectAccessBinding.toJSON(e) : undefined,
            );
        } else {
            obj.subjectAccessBindings = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSubjectAccessBindingsResponse>, I>>(
        object: I,
    ): ListSubjectAccessBindingsResponse {
        const message = {
            ...baseListSubjectAccessBindingsResponse,
        } as ListSubjectAccessBindingsResponse;
        message.subjectAccessBindings =
            object.subjectAccessBindings?.map((e) => SubjectAccessBinding.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseSubjectAccessBinding: object = { roleId: '', subjectId: '' };

export const SubjectAccessBinding: {
    encode(message: SubjectAccessBinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubjectAccessBinding;
    fromJSON(object: any): SubjectAccessBinding;
    toJSON(message: SubjectAccessBinding): unknown;
    fromPartial<I extends Exact<DeepPartial<SubjectAccessBinding>, I>>(object: I): SubjectAccessBinding;
} = {
    encode(message: SubjectAccessBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.roleId !== '') {
            writer.uint32(10).string(message.roleId);
        }
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
        }
        if (message.subjectId !== '') {
            writer.uint32(26).string(message.subjectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SubjectAccessBinding {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubjectAccessBinding } as SubjectAccessBinding;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                case 2:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subjectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SubjectAccessBinding {
        const message = { ...baseSubjectAccessBinding } as SubjectAccessBinding;
        message.roleId =
            object.roleId !== undefined && object.roleId !== null ? String(object.roleId) : '';
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromJSON(object.resource)
                : undefined;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        return message;
    },

    toJSON(message: SubjectAccessBinding): unknown {
        const obj: any = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.resource !== undefined &&
            (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SubjectAccessBinding>, I>>(
        object: I,
    ): SubjectAccessBinding {
        const message = { ...baseSubjectAccessBinding } as SubjectAccessBinding;
        message.roleId = object.roleId ?? '';
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromPartial(object.resource)
                : undefined;
        message.subjectId = object.subjectId ?? '';
        return message;
    },
};

/** A set of methods for access analysis. */
export const AccessAnalyzerServiceService = {
    /** Returns the list of access bindings for the specified subject in chosen organization. */
    listSubjectAccessBindings: {
        path: '/yandex.cloud.iam.v1.AccessAnalyzerService/ListSubjectAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSubjectAccessBindingsRequest) =>
            Buffer.from(ListSubjectAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSubjectAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListSubjectAccessBindingsResponse) =>
            Buffer.from(ListSubjectAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSubjectAccessBindingsResponse.decode(value),
    },
} as const;

export interface AccessAnalyzerServiceServer extends UntypedServiceImplementation {
    /** Returns the list of access bindings for the specified subject in chosen organization. */
    listSubjectAccessBindings: handleUnaryCall<
        ListSubjectAccessBindingsRequest,
        ListSubjectAccessBindingsResponse
    >;
}

export interface AccessAnalyzerServiceClient extends Client {
    /** Returns the list of access bindings for the specified subject in chosen organization. */
    listSubjectAccessBindings(
        request: ListSubjectAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListSubjectAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listSubjectAccessBindings(
        request: ListSubjectAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListSubjectAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listSubjectAccessBindings(
        request: ListSubjectAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListSubjectAccessBindingsResponse) => void,
    ): ClientUnaryCall;
}

export const AccessAnalyzerServiceClient = makeGenericClientConstructor(
    AccessAnalyzerServiceService,
    'yandex.cloud.iam.v1.AccessAnalyzerService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AccessAnalyzerServiceClient;
    service: typeof AccessAnalyzerServiceService;
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
