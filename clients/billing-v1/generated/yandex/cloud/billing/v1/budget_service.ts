/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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
import {
    Budget,
    CostBudgetSpec,
    ExpenseBudgetSpec,
    BalanceBudgetSpec,
} from '../../../../yandex/cloud/billing/v1/budget';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.billing.v1';

export interface GetBudgetRequest {
    $type: 'yandex.cloud.billing.v1.GetBudgetRequest';
    /**
     * ID of the budget to return.
     * To get the budget ID, use [BudgetService.List] request.
     */
    id: string;
}

export interface ListBudgetsRequest {
    $type: 'yandex.cloud.billing.v1.ListBudgetsRequest';
    /**
     * ID of the billing account to list budgets corresponding to.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    billingAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListBudgetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListBudgetsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListBudgetsResponse {
    $type: 'yandex.cloud.billing.v1.ListBudgetsResponse';
    /** List of budgets. */
    budgets: Budget[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBudgetsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListBudgetsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateBudgetRequest {
    $type: 'yandex.cloud.billing.v1.CreateBudgetRequest';
    /**
     * ID of the billing account to list budgets corresponding to.
     * To get the billing account ID, use [yandex.cloud.billing.v1.BillingAccountService.List] request.
     */
    billingAccountId: string;
    /** Name of the budget. */
    name: string;
    /** Cost budget specification. */
    costBudgetSpec?: CostBudgetSpec | undefined;
    /** Expense budget specification. */
    expenseBudgetSpec?: ExpenseBudgetSpec | undefined;
    /** Balance budget specification. */
    balanceBudgetSpec?: BalanceBudgetSpec | undefined;
}

export interface CreateBudgetMetadata {
    $type: 'yandex.cloud.billing.v1.CreateBudgetMetadata';
    /** ID of the budget. */
    budgetId: string;
}

const baseGetBudgetRequest: object = { $type: 'yandex.cloud.billing.v1.GetBudgetRequest', id: '' };

export const GetBudgetRequest = {
    $type: 'yandex.cloud.billing.v1.GetBudgetRequest' as const,

    encode(message: GetBudgetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetBudgetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetBudgetRequest } as GetBudgetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetBudgetRequest {
        const message = { ...baseGetBudgetRequest } as GetBudgetRequest;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: GetBudgetRequest): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetBudgetRequest>, I>>(object: I): GetBudgetRequest {
        const message = { ...baseGetBudgetRequest } as GetBudgetRequest;
        message.id = object.id ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetBudgetRequest.$type, GetBudgetRequest);

const baseListBudgetsRequest: object = {
    $type: 'yandex.cloud.billing.v1.ListBudgetsRequest',
    billingAccountId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListBudgetsRequest = {
    $type: 'yandex.cloud.billing.v1.ListBudgetsRequest' as const,

    encode(message: ListBudgetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBudgetsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBudgetsRequest } as ListBudgetsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListBudgetsRequest {
        const message = { ...baseListBudgetsRequest } as ListBudgetsRequest;
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListBudgetsRequest): unknown {
        const obj: any = {};
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBudgetsRequest>, I>>(
        object: I,
    ): ListBudgetsRequest {
        const message = { ...baseListBudgetsRequest } as ListBudgetsRequest;
        message.billingAccountId = object.billingAccountId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListBudgetsRequest.$type, ListBudgetsRequest);

const baseListBudgetsResponse: object = {
    $type: 'yandex.cloud.billing.v1.ListBudgetsResponse',
    nextPageToken: '',
};

export const ListBudgetsResponse = {
    $type: 'yandex.cloud.billing.v1.ListBudgetsResponse' as const,

    encode(message: ListBudgetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.budgets) {
            Budget.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBudgetsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBudgetsResponse } as ListBudgetsResponse;
        message.budgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.budgets.push(Budget.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListBudgetsResponse {
        const message = { ...baseListBudgetsResponse } as ListBudgetsResponse;
        message.budgets = (object.budgets ?? []).map((e: any) => Budget.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListBudgetsResponse): unknown {
        const obj: any = {};
        if (message.budgets) {
            obj.budgets = message.budgets.map((e) => (e ? Budget.toJSON(e) : undefined));
        } else {
            obj.budgets = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBudgetsResponse>, I>>(
        object: I,
    ): ListBudgetsResponse {
        const message = { ...baseListBudgetsResponse } as ListBudgetsResponse;
        message.budgets = object.budgets?.map((e) => Budget.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListBudgetsResponse.$type, ListBudgetsResponse);

const baseCreateBudgetRequest: object = {
    $type: 'yandex.cloud.billing.v1.CreateBudgetRequest',
    billingAccountId: '',
    name: '',
};

export const CreateBudgetRequest = {
    $type: 'yandex.cloud.billing.v1.CreateBudgetRequest' as const,

    encode(message: CreateBudgetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.costBudgetSpec !== undefined) {
            CostBudgetSpec.encode(message.costBudgetSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.expenseBudgetSpec !== undefined) {
            ExpenseBudgetSpec.encode(message.expenseBudgetSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.balanceBudgetSpec !== undefined) {
            BalanceBudgetSpec.encode(message.balanceBudgetSpec, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBudgetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateBudgetRequest } as CreateBudgetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.costBudgetSpec = CostBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expenseBudgetSpec = ExpenseBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.balanceBudgetSpec = BalanceBudgetSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateBudgetRequest {
        const message = { ...baseCreateBudgetRequest } as CreateBudgetRequest;
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.costBudgetSpec =
            object.costBudgetSpec !== undefined && object.costBudgetSpec !== null
                ? CostBudgetSpec.fromJSON(object.costBudgetSpec)
                : undefined;
        message.expenseBudgetSpec =
            object.expenseBudgetSpec !== undefined && object.expenseBudgetSpec !== null
                ? ExpenseBudgetSpec.fromJSON(object.expenseBudgetSpec)
                : undefined;
        message.balanceBudgetSpec =
            object.balanceBudgetSpec !== undefined && object.balanceBudgetSpec !== null
                ? BalanceBudgetSpec.fromJSON(object.balanceBudgetSpec)
                : undefined;
        return message;
    },

    toJSON(message: CreateBudgetRequest): unknown {
        const obj: any = {};
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.name !== undefined && (obj.name = message.name);
        message.costBudgetSpec !== undefined &&
            (obj.costBudgetSpec = message.costBudgetSpec
                ? CostBudgetSpec.toJSON(message.costBudgetSpec)
                : undefined);
        message.expenseBudgetSpec !== undefined &&
            (obj.expenseBudgetSpec = message.expenseBudgetSpec
                ? ExpenseBudgetSpec.toJSON(message.expenseBudgetSpec)
                : undefined);
        message.balanceBudgetSpec !== undefined &&
            (obj.balanceBudgetSpec = message.balanceBudgetSpec
                ? BalanceBudgetSpec.toJSON(message.balanceBudgetSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBudgetRequest>, I>>(
        object: I,
    ): CreateBudgetRequest {
        const message = { ...baseCreateBudgetRequest } as CreateBudgetRequest;
        message.billingAccountId = object.billingAccountId ?? '';
        message.name = object.name ?? '';
        message.costBudgetSpec =
            object.costBudgetSpec !== undefined && object.costBudgetSpec !== null
                ? CostBudgetSpec.fromPartial(object.costBudgetSpec)
                : undefined;
        message.expenseBudgetSpec =
            object.expenseBudgetSpec !== undefined && object.expenseBudgetSpec !== null
                ? ExpenseBudgetSpec.fromPartial(object.expenseBudgetSpec)
                : undefined;
        message.balanceBudgetSpec =
            object.balanceBudgetSpec !== undefined && object.balanceBudgetSpec !== null
                ? BalanceBudgetSpec.fromPartial(object.balanceBudgetSpec)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateBudgetRequest.$type, CreateBudgetRequest);

const baseCreateBudgetMetadata: object = {
    $type: 'yandex.cloud.billing.v1.CreateBudgetMetadata',
    budgetId: '',
};

export const CreateBudgetMetadata = {
    $type: 'yandex.cloud.billing.v1.CreateBudgetMetadata' as const,

    encode(message: CreateBudgetMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.budgetId !== '') {
            writer.uint32(10).string(message.budgetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBudgetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateBudgetMetadata } as CreateBudgetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.budgetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateBudgetMetadata {
        const message = { ...baseCreateBudgetMetadata } as CreateBudgetMetadata;
        message.budgetId =
            object.budgetId !== undefined && object.budgetId !== null
                ? String(object.budgetId)
                : '';
        return message;
    },

    toJSON(message: CreateBudgetMetadata): unknown {
        const obj: any = {};
        message.budgetId !== undefined && (obj.budgetId = message.budgetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateBudgetMetadata>, I>>(
        object: I,
    ): CreateBudgetMetadata {
        const message = { ...baseCreateBudgetMetadata } as CreateBudgetMetadata;
        message.budgetId = object.budgetId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateBudgetMetadata.$type, CreateBudgetMetadata);

/** A set of methods for managing Budget resources. */
export const BudgetServiceService = {
    /** Returns the specified budget. */
    get: {
        path: '/yandex.cloud.billing.v1.BudgetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBudgetRequest) =>
            Buffer.from(GetBudgetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBudgetRequest.decode(value),
        responseSerialize: (value: Budget) => Buffer.from(Budget.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Budget.decode(value),
    },
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list: {
        path: '/yandex.cloud.billing.v1.BudgetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBudgetsRequest) =>
            Buffer.from(ListBudgetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListBudgetsRequest.decode(value),
        responseSerialize: (value: ListBudgetsResponse) =>
            Buffer.from(ListBudgetsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListBudgetsResponse.decode(value),
    },
    /** Creates a budget for the specified billing account. */
    create: {
        path: '/yandex.cloud.billing.v1.BudgetService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateBudgetRequest) =>
            Buffer.from(CreateBudgetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateBudgetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface BudgetServiceServer extends UntypedServiceImplementation {
    /** Returns the specified budget. */
    get: handleUnaryCall<GetBudgetRequest, Budget>;
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list: handleUnaryCall<ListBudgetsRequest, ListBudgetsResponse>;
    /** Creates a budget for the specified billing account. */
    create: handleUnaryCall<CreateBudgetRequest, Operation>;
}

export interface BudgetServiceClient extends Client {
    /** Returns the specified budget. */
    get(
        request: GetBudgetRequest,
        callback: (error: ServiceError | null, response: Budget) => void,
    ): ClientUnaryCall;
    get(
        request: GetBudgetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Budget) => void,
    ): ClientUnaryCall;
    get(
        request: GetBudgetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Budget) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list(
        request: ListBudgetsRequest,
        callback: (error: ServiceError | null, response: ListBudgetsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBudgetsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListBudgetsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBudgetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListBudgetsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a budget for the specified billing account. */
    create(
        request: CreateBudgetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateBudgetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateBudgetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const BudgetServiceClient = makeGenericClientConstructor(
    BudgetServiceService,
    'yandex.cloud.billing.v1.BudgetService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): BudgetServiceClient;
    service: typeof BudgetServiceService;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

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
