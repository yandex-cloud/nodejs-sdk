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
import { CloudApplication } from '../../../../../yandex/cloud/cloudapps/workload/v1/cloud_application';
import { Empty } from '../../../../../google/protobuf/empty';

export const protobufPackage = 'yandex.cloud.cloudapps.workload.v1';

export interface ResolveByWorkloadRequest {
    $type: 'yandex.cloud.cloudapps.workload.v1.ResolveByWorkloadRequest';
    /** Type of workload. See WorkloadType. */
    workloadType: ResolveByWorkloadRequest_WorkloadType;
    /** Identifier of workload */
    workloadId: string;
}

export enum ResolveByWorkloadRequest_WorkloadType {
    WORKLOAD_TYPE_UNSPECIFIED = 0,
    /** COMPUTE_INSTANCE - Compute Instance */
    COMPUTE_INSTANCE = 1,
    UNRECOGNIZED = -1,
}

export function resolveByWorkloadRequest_WorkloadTypeFromJSON(
    object: any,
): ResolveByWorkloadRequest_WorkloadType {
    switch (object) {
        case 0:
        case 'WORKLOAD_TYPE_UNSPECIFIED':
            return ResolveByWorkloadRequest_WorkloadType.WORKLOAD_TYPE_UNSPECIFIED;
        case 1:
        case 'COMPUTE_INSTANCE':
            return ResolveByWorkloadRequest_WorkloadType.COMPUTE_INSTANCE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ResolveByWorkloadRequest_WorkloadType.UNRECOGNIZED;
    }
}

export function resolveByWorkloadRequest_WorkloadTypeToJSON(
    object: ResolveByWorkloadRequest_WorkloadType,
): string {
    switch (object) {
        case ResolveByWorkloadRequest_WorkloadType.WORKLOAD_TYPE_UNSPECIFIED:
            return 'WORKLOAD_TYPE_UNSPECIFIED';
        case ResolveByWorkloadRequest_WorkloadType.COMPUTE_INSTANCE:
            return 'COMPUTE_INSTANCE';
        default:
            return 'UNKNOWN';
    }
}

export interface ResolveByWorkloadResponse {
    $type: 'yandex.cloud.cloudapps.workload.v1.ResolveByWorkloadResponse';
    /** Details of cloud application */
    cloudApplication?: CloudApplication;
}

const baseResolveByWorkloadRequest: object = {
    $type: 'yandex.cloud.cloudapps.workload.v1.ResolveByWorkloadRequest',
    workloadType: 0,
    workloadId: '',
};

export const ResolveByWorkloadRequest = {
    $type: 'yandex.cloud.cloudapps.workload.v1.ResolveByWorkloadRequest' as const,

    encode(
        message: ResolveByWorkloadRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.workloadType !== 0) {
            writer.uint32(8).int32(message.workloadType);
        }
        if (message.workloadId !== '') {
            writer.uint32(18).string(message.workloadId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveByWorkloadRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResolveByWorkloadRequest } as ResolveByWorkloadRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workloadType = reader.int32() as any;
                    break;
                case 2:
                    message.workloadId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResolveByWorkloadRequest {
        const message = { ...baseResolveByWorkloadRequest } as ResolveByWorkloadRequest;
        message.workloadType =
            object.workloadType !== undefined && object.workloadType !== null
                ? resolveByWorkloadRequest_WorkloadTypeFromJSON(object.workloadType)
                : 0;
        message.workloadId =
            object.workloadId !== undefined && object.workloadId !== null
                ? String(object.workloadId)
                : '';
        return message;
    },

    toJSON(message: ResolveByWorkloadRequest): unknown {
        const obj: any = {};
        message.workloadType !== undefined &&
            (obj.workloadType = resolveByWorkloadRequest_WorkloadTypeToJSON(message.workloadType));
        message.workloadId !== undefined && (obj.workloadId = message.workloadId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResolveByWorkloadRequest>, I>>(
        object: I,
    ): ResolveByWorkloadRequest {
        const message = { ...baseResolveByWorkloadRequest } as ResolveByWorkloadRequest;
        message.workloadType = object.workloadType ?? 0;
        message.workloadId = object.workloadId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ResolveByWorkloadRequest.$type, ResolveByWorkloadRequest);

const baseResolveByWorkloadResponse: object = {
    $type: 'yandex.cloud.cloudapps.workload.v1.ResolveByWorkloadResponse',
};

export const ResolveByWorkloadResponse = {
    $type: 'yandex.cloud.cloudapps.workload.v1.ResolveByWorkloadResponse' as const,

    encode(
        message: ResolveByWorkloadResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cloudApplication !== undefined) {
            CloudApplication.encode(message.cloudApplication, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveByWorkloadResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResolveByWorkloadResponse } as ResolveByWorkloadResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudApplication = CloudApplication.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResolveByWorkloadResponse {
        const message = { ...baseResolveByWorkloadResponse } as ResolveByWorkloadResponse;
        message.cloudApplication =
            object.cloudApplication !== undefined && object.cloudApplication !== null
                ? CloudApplication.fromJSON(object.cloudApplication)
                : undefined;
        return message;
    },

    toJSON(message: ResolveByWorkloadResponse): unknown {
        const obj: any = {};
        message.cloudApplication !== undefined &&
            (obj.cloudApplication = message.cloudApplication
                ? CloudApplication.toJSON(message.cloudApplication)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResolveByWorkloadResponse>, I>>(
        object: I,
    ): ResolveByWorkloadResponse {
        const message = { ...baseResolveByWorkloadResponse } as ResolveByWorkloadResponse;
        message.cloudApplication =
            object.cloudApplication !== undefined && object.cloudApplication !== null
                ? CloudApplication.fromPartial(object.cloudApplication)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ResolveByWorkloadResponse.$type, ResolveByWorkloadResponse);

/** Cloud Application Service to be used by Workload software inside Cloud Application installations */
export const CloudApplicationServiceService = {
    /** Get Current Application */
    get: {
        path: '/yandex.cloud.cloudapps.workload.v1.CloudApplicationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
        requestDeserialize: (value: Buffer) => Empty.decode(value),
        responseSerialize: (value: CloudApplication) =>
            Buffer.from(CloudApplication.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CloudApplication.decode(value),
    },
    /** Resolve Cloud Application by workload */
    resolveByWorkload: {
        path: '/yandex.cloud.cloudapps.workload.v1.CloudApplicationService/ResolveByWorkload',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResolveByWorkloadRequest) =>
            Buffer.from(ResolveByWorkloadRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResolveByWorkloadRequest.decode(value),
        responseSerialize: (value: ResolveByWorkloadResponse) =>
            Buffer.from(ResolveByWorkloadResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ResolveByWorkloadResponse.decode(value),
    },
} as const;

export interface CloudApplicationServiceServer extends UntypedServiceImplementation {
    /** Get Current Application */
    get: handleUnaryCall<Empty, CloudApplication>;
    /** Resolve Cloud Application by workload */
    resolveByWorkload: handleUnaryCall<ResolveByWorkloadRequest, ResolveByWorkloadResponse>;
}

export interface CloudApplicationServiceClient extends Client {
    /** Get Current Application */
    get(
        request: Empty,
        callback: (error: ServiceError | null, response: CloudApplication) => void,
    ): ClientUnaryCall;
    get(
        request: Empty,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CloudApplication) => void,
    ): ClientUnaryCall;
    get(
        request: Empty,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CloudApplication) => void,
    ): ClientUnaryCall;
    /** Resolve Cloud Application by workload */
    resolveByWorkload(
        request: ResolveByWorkloadRequest,
        callback: (error: ServiceError | null, response: ResolveByWorkloadResponse) => void,
    ): ClientUnaryCall;
    resolveByWorkload(
        request: ResolveByWorkloadRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ResolveByWorkloadResponse) => void,
    ): ClientUnaryCall;
    resolveByWorkload(
        request: ResolveByWorkloadRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ResolveByWorkloadResponse) => void,
    ): ClientUnaryCall;
}

export const CloudApplicationServiceClient = makeGenericClientConstructor(
    CloudApplicationServiceService,
    'yandex.cloud.cloudapps.workload.v1.CloudApplicationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): CloudApplicationServiceClient;
    service: typeof CloudApplicationServiceService;
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
