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
    SaasInfo,
    ProductInstance,
} from '../../../../../../yandex/cloud/marketplace/pim/v1/saas/product_instance';
import { Operation } from '../../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.marketplace.pim.v1.saas';

export interface GetProductInstanceRequest {
    productInstanceId: string;
}

export interface ClaimProductInstanceRequest {
    token: string;
    resourceId: string;
    resourceInfo?: SaasInfo;
}

export interface ClaimProductInstanceMetadata {
    productId: string;
    productInstanceId: string;
    licenseInstanceId: string;
}

const baseGetProductInstanceRequest: object = { productInstanceId: '' };

export const GetProductInstanceRequest = {
    encode(
        message: GetProductInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.productInstanceId !== '') {
            writer.uint32(10).string(message.productInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetProductInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetProductInstanceRequest } as GetProductInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetProductInstanceRequest {
        const message = { ...baseGetProductInstanceRequest } as GetProductInstanceRequest;
        message.productInstanceId =
            object.productInstanceId !== undefined && object.productInstanceId !== null
                ? String(object.productInstanceId)
                : '';
        return message;
    },

    toJSON(message: GetProductInstanceRequest): unknown {
        const obj: any = {};
        message.productInstanceId !== undefined &&
            (obj.productInstanceId = message.productInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetProductInstanceRequest>, I>>(
        object: I,
    ): GetProductInstanceRequest {
        const message = { ...baseGetProductInstanceRequest } as GetProductInstanceRequest;
        message.productInstanceId = object.productInstanceId ?? '';
        return message;
    },
};

const baseClaimProductInstanceRequest: object = { token: '', resourceId: '' };

export const ClaimProductInstanceRequest = {
    encode(
        message: ClaimProductInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.token !== '') {
            writer.uint32(10).string(message.token);
        }
        if (message.resourceId !== '') {
            writer.uint32(18).string(message.resourceId);
        }
        if (message.resourceInfo !== undefined) {
            SaasInfo.encode(message.resourceInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimProductInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClaimProductInstanceRequest } as ClaimProductInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                case 3:
                    message.resourceInfo = SaasInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClaimProductInstanceRequest {
        const message = { ...baseClaimProductInstanceRequest } as ClaimProductInstanceRequest;
        message.token =
            object.token !== undefined && object.token !== null ? String(object.token) : '';
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.resourceInfo =
            object.resourceInfo !== undefined && object.resourceInfo !== null
                ? SaasInfo.fromJSON(object.resourceInfo)
                : undefined;
        return message;
    },

    toJSON(message: ClaimProductInstanceRequest): unknown {
        const obj: any = {};
        message.token !== undefined && (obj.token = message.token);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.resourceInfo !== undefined &&
            (obj.resourceInfo = message.resourceInfo
                ? SaasInfo.toJSON(message.resourceInfo)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClaimProductInstanceRequest>, I>>(
        object: I,
    ): ClaimProductInstanceRequest {
        const message = { ...baseClaimProductInstanceRequest } as ClaimProductInstanceRequest;
        message.token = object.token ?? '';
        message.resourceId = object.resourceId ?? '';
        message.resourceInfo =
            object.resourceInfo !== undefined && object.resourceInfo !== null
                ? SaasInfo.fromPartial(object.resourceInfo)
                : undefined;
        return message;
    },
};

const baseClaimProductInstanceMetadata: object = {
    productId: '',
    productInstanceId: '',
    licenseInstanceId: '',
};

export const ClaimProductInstanceMetadata = {
    encode(
        message: ClaimProductInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.productId !== '') {
            writer.uint32(10).string(message.productId);
        }
        if (message.productInstanceId !== '') {
            writer.uint32(18).string(message.productInstanceId);
        }
        if (message.licenseInstanceId !== '') {
            writer.uint32(26).string(message.licenseInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimProductInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClaimProductInstanceMetadata } as ClaimProductInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.string();
                    break;
                case 2:
                    message.productInstanceId = reader.string();
                    break;
                case 3:
                    message.licenseInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClaimProductInstanceMetadata {
        const message = { ...baseClaimProductInstanceMetadata } as ClaimProductInstanceMetadata;
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? String(object.productId)
                : '';
        message.productInstanceId =
            object.productInstanceId !== undefined && object.productInstanceId !== null
                ? String(object.productInstanceId)
                : '';
        message.licenseInstanceId =
            object.licenseInstanceId !== undefined && object.licenseInstanceId !== null
                ? String(object.licenseInstanceId)
                : '';
        return message;
    },

    toJSON(message: ClaimProductInstanceMetadata): unknown {
        const obj: any = {};
        message.productId !== undefined && (obj.productId = message.productId);
        message.productInstanceId !== undefined &&
            (obj.productInstanceId = message.productInstanceId);
        message.licenseInstanceId !== undefined &&
            (obj.licenseInstanceId = message.licenseInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClaimProductInstanceMetadata>, I>>(
        object: I,
    ): ClaimProductInstanceMetadata {
        const message = { ...baseClaimProductInstanceMetadata } as ClaimProductInstanceMetadata;
        message.productId = object.productId ?? '';
        message.productInstanceId = object.productInstanceId ?? '';
        message.licenseInstanceId = object.licenseInstanceId ?? '';
        return message;
    },
};

export const ProductInstanceServiceService = {
    get: {
        path: '/yandex.cloud.marketplace.pim.v1.saas.ProductInstanceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetProductInstanceRequest) =>
            Buffer.from(GetProductInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetProductInstanceRequest.decode(value),
        responseSerialize: (value: ProductInstance) =>
            Buffer.from(ProductInstance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ProductInstance.decode(value),
    },
    claim: {
        path: '/yandex.cloud.marketplace.pim.v1.saas.ProductInstanceService/Claim',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ClaimProductInstanceRequest) =>
            Buffer.from(ClaimProductInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ClaimProductInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ProductInstanceServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetProductInstanceRequest, ProductInstance>;
    claim: handleUnaryCall<ClaimProductInstanceRequest, Operation>;
}

export interface ProductInstanceServiceClient extends Client {
    get(
        request: GetProductInstanceRequest,
        callback: (error: ServiceError | null, response: ProductInstance) => void,
    ): ClientUnaryCall;
    get(
        request: GetProductInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ProductInstance) => void,
    ): ClientUnaryCall;
    get(
        request: GetProductInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ProductInstance) => void,
    ): ClientUnaryCall;
    claim(
        request: ClaimProductInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    claim(
        request: ClaimProductInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    claim(
        request: ClaimProductInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ProductInstanceServiceClient = makeGenericClientConstructor(
    ProductInstanceServiceService,
    'yandex.cloud.marketplace.pim.v1.saas.ProductInstanceService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ProductInstanceServiceClient;
    service: typeof ProductInstanceServiceService;
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
