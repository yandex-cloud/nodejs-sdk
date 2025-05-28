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
import { Empty } from '../../../../google/protobuf/empty';

export const protobufPackage = 'yandex.cloud.datasphere.v1';

export interface AppTokenValidateRequest {
    /** App token to validate. */
    token: string;
}

const baseAppTokenValidateRequest: object = { token: '' };

export const AppTokenValidateRequest = {
    encode(message: AppTokenValidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.token !== '') {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AppTokenValidateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAppTokenValidateRequest } as AppTokenValidateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AppTokenValidateRequest {
        const message = { ...baseAppTokenValidateRequest } as AppTokenValidateRequest;
        message.token =
            object.token !== undefined && object.token !== null ? String(object.token) : '';
        return message;
    },

    toJSON(message: AppTokenValidateRequest): unknown {
        const obj: any = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AppTokenValidateRequest>, I>>(
        object: I,
    ): AppTokenValidateRequest {
        const message = { ...baseAppTokenValidateRequest } as AppTokenValidateRequest;
        message.token = object.token ?? '';
        return message;
    },
};

/** A set of methods for managing app tokens. */
export const AppTokenServiceService = {
    /** Validates app token. */
    validate: {
        path: '/yandex.cloud.datasphere.v1.AppTokenService/Validate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AppTokenValidateRequest) =>
            Buffer.from(AppTokenValidateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AppTokenValidateRequest.decode(value),
        responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Empty.decode(value),
    },
} as const;

export interface AppTokenServiceServer extends UntypedServiceImplementation {
    /** Validates app token. */
    validate: handleUnaryCall<AppTokenValidateRequest, Empty>;
}

export interface AppTokenServiceClient extends Client {
    /** Validates app token. */
    validate(
        request: AppTokenValidateRequest,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    validate(
        request: AppTokenValidateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
    validate(
        request: AppTokenValidateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Empty) => void,
    ): ClientUnaryCall;
}

export const AppTokenServiceClient = makeGenericClientConstructor(
    AppTokenServiceService,
    'yandex.cloud.datasphere.v1.AppTokenService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AppTokenServiceClient;
    service: typeof AppTokenServiceService;
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
