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
import { CustomerPerson, Customer } from '../../../../yandex/cloud/billing/v1/customer';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.billing.v1';

export interface ListCustomersRequest {
    $type: 'yandex.cloud.billing.v1.ListCustomersRequest';
    /** ID of the reseller. */
    resellerId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListCustomersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListCustomersResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListCustomersResponse {
    $type: 'yandex.cloud.billing.v1.ListCustomersResponse';
    /** List of customers. */
    customers: Customer[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCustomersRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListCustomersRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface InviteCustomerRequest {
    $type: 'yandex.cloud.billing.v1.InviteCustomerRequest';
    /** Billing account ID of the reseller that the customer will be associated with. */
    resellerId: string;
    /** Name of the customer. */
    name: string;
    /** Customer email to send invitation to. */
    invitationEmail: string;
    /** Person of the customer. */
    person?: CustomerPerson;
}

export interface CreateResellerServedCustomerRequest {
    $type: 'yandex.cloud.billing.v1.CreateResellerServedCustomerRequest';
    /**
     * ID of the reseller that customer will be associated with.
     *
     * Value must match either one of the two regular expressions:
     * `^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[0-9a-f]{32})$`
     * or `^[a-z][-a-zA-Z0-9.]{0,48}[a-zA-Z0-9]$`.
     */
    resellerId: string;
    /**
     * Name of the customer.
     *
     * String length is not limited.
     */
    name: string;
    /** Person of the customer. */
    person?: CustomerPerson;
}

export interface ActivateCustomerRequest {
    $type: 'yandex.cloud.billing.v1.ActivateCustomerRequest';
    /**
     * ID of the customer.
     * To get the customer ID, use [CustomerService.List] request.
     */
    customerId: string;
}

export interface SuspendCustomerRequest {
    $type: 'yandex.cloud.billing.v1.SuspendCustomerRequest';
    /**
     * ID of the customer.
     * To get the customer ID, use [CustomerService.List] request.
     */
    customerId: string;
}

export interface CustomerMetadata {
    $type: 'yandex.cloud.billing.v1.CustomerMetadata';
    /** ID of the reseller. */
    resellerId: string;
    /** ID of the customer. */
    customerId: string;
}

const baseListCustomersRequest: object = {
    $type: 'yandex.cloud.billing.v1.ListCustomersRequest',
    resellerId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListCustomersRequest = {
    $type: 'yandex.cloud.billing.v1.ListCustomersRequest' as const,

    encode(message: ListCustomersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resellerId !== '') {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCustomersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCustomersRequest } as ListCustomersRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
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

    fromJSON(object: any): ListCustomersRequest {
        const message = { ...baseListCustomersRequest } as ListCustomersRequest;
        message.resellerId =
            object.resellerId !== undefined && object.resellerId !== null
                ? String(object.resellerId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListCustomersRequest): unknown {
        const obj: any = {};
        message.resellerId !== undefined && (obj.resellerId = message.resellerId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCustomersRequest>, I>>(
        object: I,
    ): ListCustomersRequest {
        const message = { ...baseListCustomersRequest } as ListCustomersRequest;
        message.resellerId = object.resellerId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListCustomersRequest.$type, ListCustomersRequest);

const baseListCustomersResponse: object = {
    $type: 'yandex.cloud.billing.v1.ListCustomersResponse',
    nextPageToken: '',
};

export const ListCustomersResponse = {
    $type: 'yandex.cloud.billing.v1.ListCustomersResponse' as const,

    encode(message: ListCustomersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.customers) {
            Customer.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCustomersResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCustomersResponse } as ListCustomersResponse;
        message.customers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customers.push(Customer.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListCustomersResponse {
        const message = { ...baseListCustomersResponse } as ListCustomersResponse;
        message.customers = (object.customers ?? []).map((e: any) => Customer.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListCustomersResponse): unknown {
        const obj: any = {};
        if (message.customers) {
            obj.customers = message.customers.map((e) => (e ? Customer.toJSON(e) : undefined));
        } else {
            obj.customers = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCustomersResponse>, I>>(
        object: I,
    ): ListCustomersResponse {
        const message = { ...baseListCustomersResponse } as ListCustomersResponse;
        message.customers = object.customers?.map((e) => Customer.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListCustomersResponse.$type, ListCustomersResponse);

const baseInviteCustomerRequest: object = {
    $type: 'yandex.cloud.billing.v1.InviteCustomerRequest',
    resellerId: '',
    name: '',
    invitationEmail: '',
};

export const InviteCustomerRequest = {
    $type: 'yandex.cloud.billing.v1.InviteCustomerRequest' as const,

    encode(message: InviteCustomerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resellerId !== '') {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.invitationEmail !== '') {
            writer.uint32(26).string(message.invitationEmail);
        }
        if (message.person !== undefined) {
            CustomerPerson.encode(message.person, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InviteCustomerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInviteCustomerRequest } as InviteCustomerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.invitationEmail = reader.string();
                    break;
                case 4:
                    message.person = CustomerPerson.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InviteCustomerRequest {
        const message = { ...baseInviteCustomerRequest } as InviteCustomerRequest;
        message.resellerId =
            object.resellerId !== undefined && object.resellerId !== null
                ? String(object.resellerId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.invitationEmail =
            object.invitationEmail !== undefined && object.invitationEmail !== null
                ? String(object.invitationEmail)
                : '';
        message.person =
            object.person !== undefined && object.person !== null
                ? CustomerPerson.fromJSON(object.person)
                : undefined;
        return message;
    },

    toJSON(message: InviteCustomerRequest): unknown {
        const obj: any = {};
        message.resellerId !== undefined && (obj.resellerId = message.resellerId);
        message.name !== undefined && (obj.name = message.name);
        message.invitationEmail !== undefined && (obj.invitationEmail = message.invitationEmail);
        message.person !== undefined &&
            (obj.person = message.person ? CustomerPerson.toJSON(message.person) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<InviteCustomerRequest>, I>>(
        object: I,
    ): InviteCustomerRequest {
        const message = { ...baseInviteCustomerRequest } as InviteCustomerRequest;
        message.resellerId = object.resellerId ?? '';
        message.name = object.name ?? '';
        message.invitationEmail = object.invitationEmail ?? '';
        message.person =
            object.person !== undefined && object.person !== null
                ? CustomerPerson.fromPartial(object.person)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(InviteCustomerRequest.$type, InviteCustomerRequest);

const baseCreateResellerServedCustomerRequest: object = {
    $type: 'yandex.cloud.billing.v1.CreateResellerServedCustomerRequest',
    resellerId: '',
    name: '',
};

export const CreateResellerServedCustomerRequest = {
    $type: 'yandex.cloud.billing.v1.CreateResellerServedCustomerRequest' as const,

    encode(
        message: CreateResellerServedCustomerRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resellerId !== '') {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.person !== undefined) {
            CustomerPerson.encode(message.person, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResellerServedCustomerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateResellerServedCustomerRequest,
        } as CreateResellerServedCustomerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.person = CustomerPerson.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateResellerServedCustomerRequest {
        const message = {
            ...baseCreateResellerServedCustomerRequest,
        } as CreateResellerServedCustomerRequest;
        message.resellerId =
            object.resellerId !== undefined && object.resellerId !== null
                ? String(object.resellerId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.person =
            object.person !== undefined && object.person !== null
                ? CustomerPerson.fromJSON(object.person)
                : undefined;
        return message;
    },

    toJSON(message: CreateResellerServedCustomerRequest): unknown {
        const obj: any = {};
        message.resellerId !== undefined && (obj.resellerId = message.resellerId);
        message.name !== undefined && (obj.name = message.name);
        message.person !== undefined &&
            (obj.person = message.person ? CustomerPerson.toJSON(message.person) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateResellerServedCustomerRequest>, I>>(
        object: I,
    ): CreateResellerServedCustomerRequest {
        const message = {
            ...baseCreateResellerServedCustomerRequest,
        } as CreateResellerServedCustomerRequest;
        message.resellerId = object.resellerId ?? '';
        message.name = object.name ?? '';
        message.person =
            object.person !== undefined && object.person !== null
                ? CustomerPerson.fromPartial(object.person)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(
    CreateResellerServedCustomerRequest.$type,
    CreateResellerServedCustomerRequest,
);

const baseActivateCustomerRequest: object = {
    $type: 'yandex.cloud.billing.v1.ActivateCustomerRequest',
    customerId: '',
};

export const ActivateCustomerRequest = {
    $type: 'yandex.cloud.billing.v1.ActivateCustomerRequest' as const,

    encode(message: ActivateCustomerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.customerId !== '') {
            writer.uint32(10).string(message.customerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateCustomerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateCustomerRequest } as ActivateCustomerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateCustomerRequest {
        const message = { ...baseActivateCustomerRequest } as ActivateCustomerRequest;
        message.customerId =
            object.customerId !== undefined && object.customerId !== null
                ? String(object.customerId)
                : '';
        return message;
    },

    toJSON(message: ActivateCustomerRequest): unknown {
        const obj: any = {};
        message.customerId !== undefined && (obj.customerId = message.customerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateCustomerRequest>, I>>(
        object: I,
    ): ActivateCustomerRequest {
        const message = { ...baseActivateCustomerRequest } as ActivateCustomerRequest;
        message.customerId = object.customerId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ActivateCustomerRequest.$type, ActivateCustomerRequest);

const baseSuspendCustomerRequest: object = {
    $type: 'yandex.cloud.billing.v1.SuspendCustomerRequest',
    customerId: '',
};

export const SuspendCustomerRequest = {
    $type: 'yandex.cloud.billing.v1.SuspendCustomerRequest' as const,

    encode(message: SuspendCustomerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.customerId !== '') {
            writer.uint32(10).string(message.customerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendCustomerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSuspendCustomerRequest } as SuspendCustomerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SuspendCustomerRequest {
        const message = { ...baseSuspendCustomerRequest } as SuspendCustomerRequest;
        message.customerId =
            object.customerId !== undefined && object.customerId !== null
                ? String(object.customerId)
                : '';
        return message;
    },

    toJSON(message: SuspendCustomerRequest): unknown {
        const obj: any = {};
        message.customerId !== undefined && (obj.customerId = message.customerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuspendCustomerRequest>, I>>(
        object: I,
    ): SuspendCustomerRequest {
        const message = { ...baseSuspendCustomerRequest } as SuspendCustomerRequest;
        message.customerId = object.customerId ?? '';
        return message;
    },
};

messageTypeRegistry.set(SuspendCustomerRequest.$type, SuspendCustomerRequest);

const baseCustomerMetadata: object = {
    $type: 'yandex.cloud.billing.v1.CustomerMetadata',
    resellerId: '',
    customerId: '',
};

export const CustomerMetadata = {
    $type: 'yandex.cloud.billing.v1.CustomerMetadata' as const,

    encode(message: CustomerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resellerId !== '') {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.customerId !== '') {
            writer.uint32(18).string(message.customerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CustomerMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCustomerMetadata } as CustomerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 2:
                    message.customerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CustomerMetadata {
        const message = { ...baseCustomerMetadata } as CustomerMetadata;
        message.resellerId =
            object.resellerId !== undefined && object.resellerId !== null
                ? String(object.resellerId)
                : '';
        message.customerId =
            object.customerId !== undefined && object.customerId !== null
                ? String(object.customerId)
                : '';
        return message;
    },

    toJSON(message: CustomerMetadata): unknown {
        const obj: any = {};
        message.resellerId !== undefined && (obj.resellerId = message.resellerId);
        message.customerId !== undefined && (obj.customerId = message.customerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CustomerMetadata>, I>>(object: I): CustomerMetadata {
        const message = { ...baseCustomerMetadata } as CustomerMetadata;
        message.resellerId = object.resellerId ?? '';
        message.customerId = object.customerId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CustomerMetadata.$type, CustomerMetadata);

/** A set of methods for managing Customer resources. */
export const CustomerServiceService = {
    /** Retrieves the list of customers associated with the specified reseller. */
    list: {
        path: '/yandex.cloud.billing.v1.CustomerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListCustomersRequest) =>
            Buffer.from(ListCustomersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListCustomersRequest.decode(value),
        responseSerialize: (value: ListCustomersResponse) =>
            Buffer.from(ListCustomersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListCustomersResponse.decode(value),
    },
    /** Invites customer to the specified reseller. */
    invite: {
        path: '/yandex.cloud.billing.v1.CustomerService/Invite',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: InviteCustomerRequest) =>
            Buffer.from(InviteCustomerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => InviteCustomerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates new reseller-served customer. */
    createResellerServed: {
        path: '/yandex.cloud.billing.v1.CustomerService/CreateResellerServed',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateResellerServedCustomerRequest) =>
            Buffer.from(CreateResellerServedCustomerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateResellerServedCustomerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate: {
        path: '/yandex.cloud.billing.v1.CustomerService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ActivateCustomerRequest) =>
            Buffer.from(ActivateCustomerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ActivateCustomerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend: {
        path: '/yandex.cloud.billing.v1.CustomerService/Suspend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SuspendCustomerRequest) =>
            Buffer.from(SuspendCustomerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SuspendCustomerRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface CustomerServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of customers associated with the specified reseller. */
    list: handleUnaryCall<ListCustomersRequest, ListCustomersResponse>;
    /** Invites customer to the specified reseller. */
    invite: handleUnaryCall<InviteCustomerRequest, Operation>;
    /** Creates new reseller-served customer. */
    createResellerServed: handleUnaryCall<CreateResellerServedCustomerRequest, Operation>;
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate: handleUnaryCall<ActivateCustomerRequest, Operation>;
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend: handleUnaryCall<SuspendCustomerRequest, Operation>;
}

export interface CustomerServiceClient extends Client {
    /** Retrieves the list of customers associated with the specified reseller. */
    list(
        request: ListCustomersRequest,
        callback: (error: ServiceError | null, response: ListCustomersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListCustomersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListCustomersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListCustomersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListCustomersResponse) => void,
    ): ClientUnaryCall;
    /** Invites customer to the specified reseller. */
    invite(
        request: InviteCustomerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    invite(
        request: InviteCustomerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    invite(
        request: InviteCustomerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Creates new reseller-served customer. */
    createResellerServed(
        request: CreateResellerServedCustomerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createResellerServed(
        request: CreateResellerServedCustomerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createResellerServed(
        request: CreateResellerServedCustomerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate(
        request: ActivateCustomerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateCustomerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateCustomerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend(
        request: SuspendCustomerRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    suspend(
        request: SuspendCustomerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    suspend(
        request: SuspendCustomerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const CustomerServiceClient = makeGenericClientConstructor(
    CustomerServiceService,
    'yandex.cloud.billing.v1.CustomerService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): CustomerServiceClient;
    service: typeof CustomerServiceService;
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
