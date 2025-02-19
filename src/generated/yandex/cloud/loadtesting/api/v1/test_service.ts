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
import { Details } from '../../../../../yandex/cloud/loadtesting/api/v1/test/details';
import { SingleAgentConfiguration } from '../../../../../yandex/cloud/loadtesting/api/v1/test/single_agent_configuration';
import { Test } from '../../../../../yandex/cloud/loadtesting/api/v1/test/test';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1';

export interface CreateTestRequest {
    /** ID of the folder to create a test in. */
    folderId: string;
    /**
     * Test configuration associated with agents on which they will be executed.
     * In case of multiple configurations, a multitest will be created.
     */
    configurations: SingleAgentConfiguration[];
    /** Test details. Name, tags etc. */
    testDetails?: Details;
}

export interface CreateTestMetadata {
    /** ID of the test that is being created. */
    testId: string;
}

export interface GetTestRequest {
    /** ID of the test to return. */
    testId: string;
}

export interface StopTestRequest {
    /** ID of the test to stop. */
    testId: string;
}

export interface StopTestMetadata {
    /** ID of the test that is being stopped. */
    testId: string;
}

export interface DeleteTestRequest {
    /** ID of the test to delete. */
    testId: string;
}

export interface DeleteTestMetadata {
    /** ID of the test that is being deleted. */
    testId: string;
}

export interface ListTestsRequest {
    /** ID of the folder to list tests in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListTestsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListTestsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters tests listed in the response.
     *
     * The filter expression may contain multiple field expressions joined by `AND`.
     * The field expression must specify:
     * 1. The field name.
     * 2. An operator:
     *    - `=`, `!=`, `<`, `<=`, `>`, `>=`, `CONTAINS`, `:` for single values.
     *    - `IN` or `NOT IN` for lists of values.
     * 3. The value. String values must be encosed in `"`, boolean values are {`true`, `false`}, timestamp values in ISO-8601.
     *
     * Currently supported fields:
     * - `id` [yandex.cloud.loadtesting.api.v1.test.Test.id]
     *   - operators: `=`, `!=`, `IN`, `NOT IN`
     * - `details.name` [yandex.cloud.loadtesting.api.v1.test.Details.name]
     *   - operators: `=`, `!=`, `IN`, `NOT IN`, `CONTAINS`
     * - `details.tags.<TAG_NAME>` [yandex.cloud.loadtesting.api.v1.test.Details.tags]
     *   - operators: `:`
     * - `summary.status` [yandex.cloud.loadtesting.api.v1.test.Summary.status]
     *   - operators: `=`, `!=`, `IN`, `NOT IN`
     * - `summary.is_finished` [yandex.cloud.loadtesting.api.v1.test.Summary.is_finished]
     *   - operators: `=`
     * - `summary.created_at` [yandex.cloud.loadtesting.api.v1.test.Summary.created_at]
     *   - operators: `<`, `<=`, `>`, `>=`
     * - `summary.created_by` [yandex.cloud.loadtesting.api.v1.test.Summary.created_by]
     *   - operators: `=`, `!=`, `IN`, `NOT IN`
     *
     * Examples:
     * - `summary.status IN ("DONE", "ERROR") AND details.tags.author:"yandex"`
     * - `summary.is_finished = true AND details.name CONTAINS "nightly-test"`
     */
    filter: string;
}

export interface ListTestsResponse {
    /** List of tests in the specified folder. */
    tests: Test[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTestsRequest.page_size], use `next_page_token` as the value
     * for the [ListTestsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseCreateTestRequest: object = { folderId: '' };

export const CreateTestRequest = {
    encode(message: CreateTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        for (const v of message.configurations) {
            SingleAgentConfiguration.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.testDetails !== undefined) {
            Details.encode(message.testDetails, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTestRequest } as CreateTestRequest;
        message.configurations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.configurations.push(
                        SingleAgentConfiguration.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.testDetails = Details.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTestRequest {
        const message = { ...baseCreateTestRequest } as CreateTestRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.configurations = (object.configurations ?? []).map((e: any) =>
            SingleAgentConfiguration.fromJSON(e),
        );
        message.testDetails =
            object.testDetails !== undefined && object.testDetails !== null
                ? Details.fromJSON(object.testDetails)
                : undefined;
        return message;
    },

    toJSON(message: CreateTestRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        if (message.configurations) {
            obj.configurations = message.configurations.map((e) =>
                e ? SingleAgentConfiguration.toJSON(e) : undefined,
            );
        } else {
            obj.configurations = [];
        }
        message.testDetails !== undefined &&
            (obj.testDetails = message.testDetails
                ? Details.toJSON(message.testDetails)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateTestRequest>, I>>(object: I): CreateTestRequest {
        const message = { ...baseCreateTestRequest } as CreateTestRequest;
        message.folderId = object.folderId ?? '';
        message.configurations =
            object.configurations?.map((e) => SingleAgentConfiguration.fromPartial(e)) || [];
        message.testDetails =
            object.testDetails !== undefined && object.testDetails !== null
                ? Details.fromPartial(object.testDetails)
                : undefined;
        return message;
    },
};

const baseCreateTestMetadata: object = { testId: '' };

export const CreateTestMetadata = {
    encode(message: CreateTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTestMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTestMetadata } as CreateTestMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTestMetadata {
        const message = { ...baseCreateTestMetadata } as CreateTestMetadata;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        return message;
    },

    toJSON(message: CreateTestMetadata): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateTestMetadata>, I>>(
        object: I,
    ): CreateTestMetadata {
        const message = { ...baseCreateTestMetadata } as CreateTestMetadata;
        message.testId = object.testId ?? '';
        return message;
    },
};

const baseGetTestRequest: object = { testId: '' };

export const GetTestRequest = {
    encode(message: GetTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTestRequest } as GetTestRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTestRequest {
        const message = { ...baseGetTestRequest } as GetTestRequest;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        return message;
    },

    toJSON(message: GetTestRequest): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTestRequest>, I>>(object: I): GetTestRequest {
        const message = { ...baseGetTestRequest } as GetTestRequest;
        message.testId = object.testId ?? '';
        return message;
    },
};

const baseStopTestRequest: object = { testId: '' };

export const StopTestRequest = {
    encode(message: StopTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopTestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopTestRequest } as StopTestRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopTestRequest {
        const message = { ...baseStopTestRequest } as StopTestRequest;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        return message;
    },

    toJSON(message: StopTestRequest): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopTestRequest>, I>>(object: I): StopTestRequest {
        const message = { ...baseStopTestRequest } as StopTestRequest;
        message.testId = object.testId ?? '';
        return message;
    },
};

const baseStopTestMetadata: object = { testId: '' };

export const StopTestMetadata = {
    encode(message: StopTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopTestMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopTestMetadata } as StopTestMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopTestMetadata {
        const message = { ...baseStopTestMetadata } as StopTestMetadata;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        return message;
    },

    toJSON(message: StopTestMetadata): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopTestMetadata>, I>>(object: I): StopTestMetadata {
        const message = { ...baseStopTestMetadata } as StopTestMetadata;
        message.testId = object.testId ?? '';
        return message;
    },
};

const baseDeleteTestRequest: object = { testId: '' };

export const DeleteTestRequest = {
    encode(message: DeleteTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTestRequest } as DeleteTestRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteTestRequest {
        const message = { ...baseDeleteTestRequest } as DeleteTestRequest;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        return message;
    },

    toJSON(message: DeleteTestRequest): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteTestRequest>, I>>(object: I): DeleteTestRequest {
        const message = { ...baseDeleteTestRequest } as DeleteTestRequest;
        message.testId = object.testId ?? '';
        return message;
    },
};

const baseDeleteTestMetadata: object = { testId: '' };

export const DeleteTestMetadata = {
    encode(message: DeleteTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTestMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTestMetadata } as DeleteTestMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteTestMetadata {
        const message = { ...baseDeleteTestMetadata } as DeleteTestMetadata;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        return message;
    },

    toJSON(message: DeleteTestMetadata): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteTestMetadata>, I>>(
        object: I,
    ): DeleteTestMetadata {
        const message = { ...baseDeleteTestMetadata } as DeleteTestMetadata;
        message.testId = object.testId ?? '';
        return message;
    },
};

const baseListTestsRequest: object = { folderId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListTestsRequest = {
    encode(message: ListTestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTestsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTestsRequest } as ListTestsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListTestsRequest {
        const message = { ...baseListTestsRequest } as ListTestsRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListTestsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTestsRequest>, I>>(object: I): ListTestsRequest {
        const message = { ...baseListTestsRequest } as ListTestsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListTestsResponse: object = { nextPageToken: '' };

export const ListTestsResponse = {
    encode(message: ListTestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.tests) {
            Test.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTestsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTestsResponse } as ListTestsResponse;
        message.tests = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tests.push(Test.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListTestsResponse {
        const message = { ...baseListTestsResponse } as ListTestsResponse;
        message.tests = (object.tests ?? []).map((e: any) => Test.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListTestsResponse): unknown {
        const obj: any = {};
        if (message.tests) {
            obj.tests = message.tests.map((e) => (e ? Test.toJSON(e) : undefined));
        } else {
            obj.tests = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTestsResponse>, I>>(object: I): ListTestsResponse {
        const message = { ...baseListTestsResponse } as ListTestsResponse;
        message.tests = object.tests?.map((e) => Test.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing tests. */
export const TestServiceService = {
    /** Creates (runs) a test in the specified folder. */
    create: {
        path: '/yandex.cloud.loadtesting.api.v1.TestService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateTestRequest) =>
            Buffer.from(CreateTestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateTestRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Returns the specified test.
     *
     * To get the list of all available tests, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.loadtesting.api.v1.TestService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTestRequest) =>
            Buffer.from(GetTestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetTestRequest.decode(value),
        responseSerialize: (value: Test) => Buffer.from(Test.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Test.decode(value),
    },
    /** Stops the specified test. */
    stop: {
        path: '/yandex.cloud.loadtesting.api.v1.TestService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopTestRequest) =>
            Buffer.from(StopTestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopTestRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes specified tests. */
    delete: {
        path: '/yandex.cloud.loadtesting.api.v1.TestService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteTestRequest) =>
            Buffer.from(DeleteTestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteTestRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of test in the specified folder. */
    list: {
        path: '/yandex.cloud.loadtesting.api.v1.TestService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTestsRequest) =>
            Buffer.from(ListTestsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListTestsRequest.decode(value),
        responseSerialize: (value: ListTestsResponse) =>
            Buffer.from(ListTestsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListTestsResponse.decode(value),
    },
} as const;

export interface TestServiceServer extends UntypedServiceImplementation {
    /** Creates (runs) a test in the specified folder. */
    create: handleUnaryCall<CreateTestRequest, Operation>;
    /**
     * Returns the specified test.
     *
     * To get the list of all available tests, make a [List] request.
     */
    get: handleUnaryCall<GetTestRequest, Test>;
    /** Stops the specified test. */
    stop: handleUnaryCall<StopTestRequest, Operation>;
    /** Deletes specified tests. */
    delete: handleUnaryCall<DeleteTestRequest, Operation>;
    /** Retrieves the list of test in the specified folder. */
    list: handleUnaryCall<ListTestsRequest, ListTestsResponse>;
}

export interface TestServiceClient extends Client {
    /** Creates (runs) a test in the specified folder. */
    create(
        request: CreateTestRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateTestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateTestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Returns the specified test.
     *
     * To get the list of all available tests, make a [List] request.
     */
    get(
        request: GetTestRequest,
        callback: (error: ServiceError | null, response: Test) => void,
    ): ClientUnaryCall;
    get(
        request: GetTestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Test) => void,
    ): ClientUnaryCall;
    get(
        request: GetTestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Test) => void,
    ): ClientUnaryCall;
    /** Stops the specified test. */
    stop(
        request: StopTestRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopTestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopTestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes specified tests. */
    delete(
        request: DeleteTestRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteTestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteTestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of test in the specified folder. */
    list(
        request: ListTestsRequest,
        callback: (error: ServiceError | null, response: ListTestsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListTestsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListTestsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListTestsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListTestsResponse) => void,
    ): ClientUnaryCall;
}

export const TestServiceClient = makeGenericClientConstructor(
    TestServiceService,
    'yandex.cloud.loadtesting.api.v1.TestService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TestServiceClient;
    service: typeof TestServiceService;
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
