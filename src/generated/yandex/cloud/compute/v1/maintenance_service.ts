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
import {
    ListMaintenancesRequest,
    ListMaintenancesResponse,
    GetMaintenanceRequest,
    Maintenance,
    RescheduleMaintenanceRequest,
} from '../../maintenance/v2/common';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.compute.v1';

/** A set of methods for managing maintenances in a service. */
export const MaintenanceServiceService = {
    /** Lists maintenances by conditions, specified in request. */
    list: {
        path: '/yandex.cloud.compute.v1.MaintenanceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListMaintenancesRequest) =>
            Buffer.from(ListMaintenancesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListMaintenancesRequest.decode(value),
        responseSerialize: (value: ListMaintenancesResponse) =>
            Buffer.from(ListMaintenancesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListMaintenancesResponse.decode(value),
    },
    /** Retrieves the specific Maintenance by ID. */
    get: {
        path: '/yandex.cloud.compute.v1.MaintenanceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetMaintenanceRequest) =>
            Buffer.from(GetMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetMaintenanceRequest.decode(value),
        responseSerialize: (value: Maintenance) => Buffer.from(Maintenance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Maintenance.decode(value),
    },
    /** Allows user to reschedule Maintenance to another date and time. */
    reschedule: {
        path: '/yandex.cloud.compute.v1.MaintenanceService/Reschedule',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RescheduleMaintenanceRequest) =>
            Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface MaintenanceServiceServer extends UntypedServiceImplementation {
    /** Lists maintenances by conditions, specified in request. */
    list: handleUnaryCall<ListMaintenancesRequest, ListMaintenancesResponse>;
    /** Retrieves the specific Maintenance by ID. */
    get: handleUnaryCall<GetMaintenanceRequest, Maintenance>;
    /** Allows user to reschedule Maintenance to another date and time. */
    reschedule: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
}

export interface MaintenanceServiceClient extends Client {
    /** Lists maintenances by conditions, specified in request. */
    list(
        request: ListMaintenancesRequest,
        callback: (error: ServiceError | null, response: ListMaintenancesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListMaintenancesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListMaintenancesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListMaintenancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListMaintenancesResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves the specific Maintenance by ID. */
    get(
        request: GetMaintenanceRequest,
        callback: (error: ServiceError | null, response: Maintenance) => void,
    ): ClientUnaryCall;
    get(
        request: GetMaintenanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Maintenance) => void,
    ): ClientUnaryCall;
    get(
        request: GetMaintenanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Maintenance) => void,
    ): ClientUnaryCall;
    /** Allows user to reschedule Maintenance to another date and time. */
    reschedule(
        request: RescheduleMaintenanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reschedule(
        request: RescheduleMaintenanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reschedule(
        request: RescheduleMaintenanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const MaintenanceServiceClient = makeGenericClientConstructor(
    MaintenanceServiceService,
    'yandex.cloud.compute.v1.MaintenanceService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): MaintenanceServiceClient;
    service: typeof MaintenanceServiceService;
};

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
