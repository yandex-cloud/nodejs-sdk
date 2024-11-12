/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
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
    Status,
    statusFromJSON,
    statusToJSON,
} from '../../../../../yandex/cloud/loadtesting/api/v1/report/status';
import { Report } from '../../../../../yandex/cloud/loadtesting/api/v1/report/table/report';
import { Kpi } from '../../../../../yandex/cloud/loadtesting/api/v1/report/kpi';
import { KpiValue } from '../../../../../yandex/cloud/loadtesting/api/v1/report/kpi_value';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1';

export interface GetTableReportRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportRequest';
    /** ID of the test for which report table will be returned. */
    testId: string;
}

export interface GetTableReportResponse {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportResponse';
    /** Status of report table. */
    status: Status;
    /** Result for all test cases combined ("overall" test case). */
    overall?: Report;
    /** Results for individual test cases, mapped as `case_name:report`. */
    cases: { [key: string]: Report };
}

export interface GetTableReportResponse_CasesEntry {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportResponse.CasesEntry';
    key: string;
    value?: Report;
}

export interface CalculateReportKpiValuesRequest {
    $type: 'yandex.cloud.loadtesting.api.v1.CalculateReportKpiValuesRequest';
    /** ID of the folder containing tests. */
    folderId: string;
    /** Test filter selector to calculate KPI values for. */
    testFilter: string;
    /**
     * Test case to calculate KPI values for.
     *
     * If not specified, KPI values will be calculated for 'overall' case.
     */
    testCase: string;
    /** KPI to be calculated. */
    kpi?: Kpi;
}

export interface CalculateReportKpiValuesResponse {
    $type: 'yandex.cloud.loadtesting.api.v1.CalculateReportKpiValuesResponse';
    /** ID of the folder. */
    folderId: string;
    /** Actual KPI values. */
    values: KpiValue[];
}

const baseGetTableReportRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportRequest',
    testId: '',
};

export const GetTableReportRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportRequest' as const,

    encode(message: GetTableReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTableReportRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTableReportRequest } as GetTableReportRequest;
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

    fromJSON(object: any): GetTableReportRequest {
        const message = { ...baseGetTableReportRequest } as GetTableReportRequest;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        return message;
    },

    toJSON(message: GetTableReportRequest): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTableReportRequest>, I>>(
        object: I,
    ): GetTableReportRequest {
        const message = { ...baseGetTableReportRequest } as GetTableReportRequest;
        message.testId = object.testId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetTableReportRequest.$type, GetTableReportRequest);

const baseGetTableReportResponse: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportResponse',
    status: 0,
};

export const GetTableReportResponse = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportResponse' as const,

    encode(message: GetTableReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.overall !== undefined) {
            Report.encode(message.overall, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.cases).forEach(([key, value]) => {
            GetTableReportResponse_CasesEntry.encode(
                {
                    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportResponse.CasesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTableReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTableReportResponse } as GetTableReportResponse;
        message.cases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                case 2:
                    message.overall = Report.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = GetTableReportResponse_CasesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.cases[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTableReportResponse {
        const message = { ...baseGetTableReportResponse } as GetTableReportResponse;
        message.status =
            object.status !== undefined && object.status !== null
                ? statusFromJSON(object.status)
                : 0;
        message.overall =
            object.overall !== undefined && object.overall !== null
                ? Report.fromJSON(object.overall)
                : undefined;
        message.cases = Object.entries(object.cases ?? {}).reduce<{ [key: string]: Report }>(
            (acc, [key, value]) => {
                acc[key] = Report.fromJSON(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: GetTableReportResponse): unknown {
        const obj: any = {};
        message.status !== undefined && (obj.status = statusToJSON(message.status));
        message.overall !== undefined &&
            (obj.overall = message.overall ? Report.toJSON(message.overall) : undefined);
        obj.cases = {};
        if (message.cases) {
            Object.entries(message.cases).forEach(([k, v]) => {
                obj.cases[k] = Report.toJSON(v);
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTableReportResponse>, I>>(
        object: I,
    ): GetTableReportResponse {
        const message = { ...baseGetTableReportResponse } as GetTableReportResponse;
        message.status = object.status ?? 0;
        message.overall =
            object.overall !== undefined && object.overall !== null
                ? Report.fromPartial(object.overall)
                : undefined;
        message.cases = Object.entries(object.cases ?? {}).reduce<{ [key: string]: Report }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = Report.fromPartial(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

messageTypeRegistry.set(GetTableReportResponse.$type, GetTableReportResponse);

const baseGetTableReportResponse_CasesEntry: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportResponse.CasesEntry',
    key: '',
};

export const GetTableReportResponse_CasesEntry = {
    $type: 'yandex.cloud.loadtesting.api.v1.GetTableReportResponse.CasesEntry' as const,

    encode(
        message: GetTableReportResponse_CasesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Report.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTableReportResponse_CasesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetTableReportResponse_CasesEntry,
        } as GetTableReportResponse_CasesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Report.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTableReportResponse_CasesEntry {
        const message = {
            ...baseGetTableReportResponse_CasesEntry,
        } as GetTableReportResponse_CasesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Report.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: GetTableReportResponse_CasesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? Report.toJSON(message.value) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTableReportResponse_CasesEntry>, I>>(
        object: I,
    ): GetTableReportResponse_CasesEntry {
        const message = {
            ...baseGetTableReportResponse_CasesEntry,
        } as GetTableReportResponse_CasesEntry;
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Report.fromPartial(object.value)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(GetTableReportResponse_CasesEntry.$type, GetTableReportResponse_CasesEntry);

const baseCalculateReportKpiValuesRequest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.CalculateReportKpiValuesRequest',
    folderId: '',
    testFilter: '',
    testCase: '',
};

export const CalculateReportKpiValuesRequest = {
    $type: 'yandex.cloud.loadtesting.api.v1.CalculateReportKpiValuesRequest' as const,

    encode(
        message: CalculateReportKpiValuesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.testFilter !== '') {
            writer.uint32(18).string(message.testFilter);
        }
        if (message.testCase !== '') {
            writer.uint32(26).string(message.testCase);
        }
        if (message.kpi !== undefined) {
            Kpi.encode(message.kpi, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CalculateReportKpiValuesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCalculateReportKpiValuesRequest,
        } as CalculateReportKpiValuesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.testFilter = reader.string();
                    break;
                case 3:
                    message.testCase = reader.string();
                    break;
                case 4:
                    message.kpi = Kpi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CalculateReportKpiValuesRequest {
        const message = {
            ...baseCalculateReportKpiValuesRequest,
        } as CalculateReportKpiValuesRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.testFilter =
            object.testFilter !== undefined && object.testFilter !== null
                ? String(object.testFilter)
                : '';
        message.testCase =
            object.testCase !== undefined && object.testCase !== null
                ? String(object.testCase)
                : '';
        message.kpi =
            object.kpi !== undefined && object.kpi !== null ? Kpi.fromJSON(object.kpi) : undefined;
        return message;
    },

    toJSON(message: CalculateReportKpiValuesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.testFilter !== undefined && (obj.testFilter = message.testFilter);
        message.testCase !== undefined && (obj.testCase = message.testCase);
        message.kpi !== undefined && (obj.kpi = message.kpi ? Kpi.toJSON(message.kpi) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CalculateReportKpiValuesRequest>, I>>(
        object: I,
    ): CalculateReportKpiValuesRequest {
        const message = {
            ...baseCalculateReportKpiValuesRequest,
        } as CalculateReportKpiValuesRequest;
        message.folderId = object.folderId ?? '';
        message.testFilter = object.testFilter ?? '';
        message.testCase = object.testCase ?? '';
        message.kpi =
            object.kpi !== undefined && object.kpi !== null
                ? Kpi.fromPartial(object.kpi)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CalculateReportKpiValuesRequest.$type, CalculateReportKpiValuesRequest);

const baseCalculateReportKpiValuesResponse: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.CalculateReportKpiValuesResponse',
    folderId: '',
};

export const CalculateReportKpiValuesResponse = {
    $type: 'yandex.cloud.loadtesting.api.v1.CalculateReportKpiValuesResponse' as const,

    encode(
        message: CalculateReportKpiValuesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        for (const v of message.values) {
            KpiValue.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CalculateReportKpiValuesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCalculateReportKpiValuesResponse,
        } as CalculateReportKpiValuesResponse;
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.values.push(KpiValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CalculateReportKpiValuesResponse {
        const message = {
            ...baseCalculateReportKpiValuesResponse,
        } as CalculateReportKpiValuesResponse;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.values = (object.values ?? []).map((e: any) => KpiValue.fromJSON(e));
        return message;
    },

    toJSON(message: CalculateReportKpiValuesResponse): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        if (message.values) {
            obj.values = message.values.map((e) => (e ? KpiValue.toJSON(e) : undefined));
        } else {
            obj.values = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CalculateReportKpiValuesResponse>, I>>(
        object: I,
    ): CalculateReportKpiValuesResponse {
        const message = {
            ...baseCalculateReportKpiValuesResponse,
        } as CalculateReportKpiValuesResponse;
        message.folderId = object.folderId ?? '';
        message.values = object.values?.map((e) => KpiValue.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(CalculateReportKpiValuesResponse.$type, CalculateReportKpiValuesResponse);

/** A set of methods for managing test reports. */
export const ReportServiceService = {
    /** Returns a report table for the specified test. */
    getTable: {
        path: '/yandex.cloud.loadtesting.api.v1.ReportService/GetTable',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTableReportRequest) =>
            Buffer.from(GetTableReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetTableReportRequest.decode(value),
        responseSerialize: (value: GetTableReportResponse) =>
            Buffer.from(GetTableReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetTableReportResponse.decode(value),
    },
    /** Returns a list of KPI values for tests matching the specified filter. */
    calculateKpiValues: {
        path: '/yandex.cloud.loadtesting.api.v1.ReportService/CalculateKpiValues',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CalculateReportKpiValuesRequest) =>
            Buffer.from(CalculateReportKpiValuesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CalculateReportKpiValuesRequest.decode(value),
        responseSerialize: (value: CalculateReportKpiValuesResponse) =>
            Buffer.from(CalculateReportKpiValuesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CalculateReportKpiValuesResponse.decode(value),
    },
} as const;

export interface ReportServiceServer extends UntypedServiceImplementation {
    /** Returns a report table for the specified test. */
    getTable: handleUnaryCall<GetTableReportRequest, GetTableReportResponse>;
    /** Returns a list of KPI values for tests matching the specified filter. */
    calculateKpiValues: handleUnaryCall<
        CalculateReportKpiValuesRequest,
        CalculateReportKpiValuesResponse
    >;
}

export interface ReportServiceClient extends Client {
    /** Returns a report table for the specified test. */
    getTable(
        request: GetTableReportRequest,
        callback: (error: ServiceError | null, response: GetTableReportResponse) => void,
    ): ClientUnaryCall;
    getTable(
        request: GetTableReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetTableReportResponse) => void,
    ): ClientUnaryCall;
    getTable(
        request: GetTableReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetTableReportResponse) => void,
    ): ClientUnaryCall;
    /** Returns a list of KPI values for tests matching the specified filter. */
    calculateKpiValues(
        request: CalculateReportKpiValuesRequest,
        callback: (error: ServiceError | null, response: CalculateReportKpiValuesResponse) => void,
    ): ClientUnaryCall;
    calculateKpiValues(
        request: CalculateReportKpiValuesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CalculateReportKpiValuesResponse) => void,
    ): ClientUnaryCall;
    calculateKpiValues(
        request: CalculateReportKpiValuesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CalculateReportKpiValuesResponse) => void,
    ): ClientUnaryCall;
}

export const ReportServiceClient = makeGenericClientConstructor(
    ReportServiceService,
    'yandex.cloud.loadtesting.api.v1.ReportService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ReportServiceClient;
    service: typeof ReportServiceService;
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
