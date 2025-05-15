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
    UsageRecord,
    AcceptedUsageRecord,
    RejectedUsageRecord,
} from '../../../../../yandex/cloud/marketplace/metering/v1/usage_record';

export const protobufPackage = 'yandex.cloud.marketplace.metering.v1';

export interface WriteUsageRequest {
    /** Do not write usage, only validate */
    dryRun: boolean;
    /** Marketplace Product Instance's ID */
    productInstanceId: string;
    /** List of product usage records (up to 25 per request) */
    usageRecords: UsageRecord[];
}

export interface WriteUsageResponse {
    /** List of accepted product usage records */
    accepted: AcceptedUsageRecord[];
    /** List of rejected product usage records (with reason) */
    rejected: RejectedUsageRecord[];
}

const baseWriteUsageRequest: object = { dryRun: false, productInstanceId: '' };

export const WriteUsageRequest = {
    encode(message: WriteUsageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dryRun === true) {
            writer.uint32(8).bool(message.dryRun);
        }
        if (message.productInstanceId !== '') {
            writer.uint32(18).string(message.productInstanceId);
        }
        for (const v of message.usageRecords) {
            UsageRecord.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WriteUsageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWriteUsageRequest } as WriteUsageRequest;
        message.usageRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dryRun = reader.bool();
                    break;
                case 2:
                    message.productInstanceId = reader.string();
                    break;
                case 3:
                    message.usageRecords.push(UsageRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WriteUsageRequest {
        const message = { ...baseWriteUsageRequest } as WriteUsageRequest;
        message.dryRun =
            object.dryRun !== undefined && object.dryRun !== null ? Boolean(object.dryRun) : false;
        message.productInstanceId =
            object.productInstanceId !== undefined && object.productInstanceId !== null
                ? String(object.productInstanceId)
                : '';
        message.usageRecords = (object.usageRecords ?? []).map((e: any) => UsageRecord.fromJSON(e));
        return message;
    },

    toJSON(message: WriteUsageRequest): unknown {
        const obj: any = {};
        message.dryRun !== undefined && (obj.dryRun = message.dryRun);
        message.productInstanceId !== undefined &&
            (obj.productInstanceId = message.productInstanceId);
        if (message.usageRecords) {
            obj.usageRecords = message.usageRecords.map((e) =>
                e ? UsageRecord.toJSON(e) : undefined,
            );
        } else {
            obj.usageRecords = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WriteUsageRequest>, I>>(object: I): WriteUsageRequest {
        const message = { ...baseWriteUsageRequest } as WriteUsageRequest;
        message.dryRun = object.dryRun ?? false;
        message.productInstanceId = object.productInstanceId ?? '';
        message.usageRecords = object.usageRecords?.map((e) => UsageRecord.fromPartial(e)) || [];
        return message;
    },
};

const baseWriteUsageResponse: object = {};

export const WriteUsageResponse = {
    encode(message: WriteUsageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.accepted) {
            AcceptedUsageRecord.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.rejected) {
            RejectedUsageRecord.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WriteUsageResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWriteUsageResponse } as WriteUsageResponse;
        message.accepted = [];
        message.rejected = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accepted.push(AcceptedUsageRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.rejected.push(RejectedUsageRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WriteUsageResponse {
        const message = { ...baseWriteUsageResponse } as WriteUsageResponse;
        message.accepted = (object.accepted ?? []).map((e: any) => AcceptedUsageRecord.fromJSON(e));
        message.rejected = (object.rejected ?? []).map((e: any) => RejectedUsageRecord.fromJSON(e));
        return message;
    },

    toJSON(message: WriteUsageResponse): unknown {
        const obj: any = {};
        if (message.accepted) {
            obj.accepted = message.accepted.map((e) =>
                e ? AcceptedUsageRecord.toJSON(e) : undefined,
            );
        } else {
            obj.accepted = [];
        }
        if (message.rejected) {
            obj.rejected = message.rejected.map((e) =>
                e ? RejectedUsageRecord.toJSON(e) : undefined,
            );
        } else {
            obj.rejected = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WriteUsageResponse>, I>>(
        object: I,
    ): WriteUsageResponse {
        const message = { ...baseWriteUsageResponse } as WriteUsageResponse;
        message.accepted = object.accepted?.map((e) => AcceptedUsageRecord.fromPartial(e)) || [];
        message.rejected = object.rejected?.map((e) => RejectedUsageRecord.fromPartial(e)) || [];
        return message;
    },
};

export const ProductUsageServiceService = {
    /** Writes product's usage (authenticated by publisher's service account) */
    write: {
        path: '/yandex.cloud.marketplace.metering.v1.ProductUsageService/Write',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: WriteUsageRequest) =>
            Buffer.from(WriteUsageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => WriteUsageRequest.decode(value),
        responseSerialize: (value: WriteUsageResponse) =>
            Buffer.from(WriteUsageResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => WriteUsageResponse.decode(value),
    },
} as const;

export interface ProductUsageServiceServer extends UntypedServiceImplementation {
    /** Writes product's usage (authenticated by publisher's service account) */
    write: handleUnaryCall<WriteUsageRequest, WriteUsageResponse>;
}

export interface ProductUsageServiceClient extends Client {
    /** Writes product's usage (authenticated by publisher's service account) */
    write(
        request: WriteUsageRequest,
        callback: (error: ServiceError | null, response: WriteUsageResponse) => void,
    ): ClientUnaryCall;
    write(
        request: WriteUsageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: WriteUsageResponse) => void,
    ): ClientUnaryCall;
    write(
        request: WriteUsageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: WriteUsageResponse) => void,
    ): ClientUnaryCall;
}

export const ProductUsageServiceClient = makeGenericClientConstructor(
    ProductUsageServiceService,
    'yandex.cloud.marketplace.metering.v1.ProductUsageService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ProductUsageServiceClient;
    service: typeof ProductUsageServiceService;
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
