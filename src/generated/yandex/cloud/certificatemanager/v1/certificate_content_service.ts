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

export const protobufPackage = 'yandex.cloud.certificatemanager.v1';

export enum PrivateKeyFormat {
    PRIVATE_KEY_FORMAT_UNSPECIFIED = 0,
    PKCS1 = 1,
    PKCS8 = 2,
    UNRECOGNIZED = -1,
}

export function privateKeyFormatFromJSON(object: any): PrivateKeyFormat {
    switch (object) {
        case 0:
        case 'PRIVATE_KEY_FORMAT_UNSPECIFIED':
            return PrivateKeyFormat.PRIVATE_KEY_FORMAT_UNSPECIFIED;
        case 1:
        case 'PKCS1':
            return PrivateKeyFormat.PKCS1;
        case 2:
        case 'PKCS8':
            return PrivateKeyFormat.PKCS8;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PrivateKeyFormat.UNRECOGNIZED;
    }
}

export function privateKeyFormatToJSON(object: PrivateKeyFormat): string {
    switch (object) {
        case PrivateKeyFormat.PRIVATE_KEY_FORMAT_UNSPECIFIED:
            return 'PRIVATE_KEY_FORMAT_UNSPECIFIED';
        case PrivateKeyFormat.PKCS1:
            return 'PKCS1';
        case PrivateKeyFormat.PKCS8:
            return 'PKCS8';
        default:
            return 'UNKNOWN';
    }
}

export interface GetCertificateContentResponse {
    /** ID of the certificate. */
    certificateId: string;
    /** PEM-encoded certificate chain content of the certificate. */
    certificateChain: string[];
    /** PEM-encoded private key content of the certificate. */
    privateKey: string;
}

export interface GetCertificateContentRequest {
    /** ID of the certificate to download content. */
    certificateId: string;
    /** Optional ID of the version. */
    versionId: string;
    /** Desired format of private key */
    privateKeyFormat: PrivateKeyFormat;
}

const baseGetCertificateContentResponse: object = {
    certificateId: '',
    certificateChain: '',
    privateKey: '',
};

export const GetCertificateContentResponse = {
    encode(
        message: GetCertificateContentResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        for (const v of message.certificateChain) {
            writer.uint32(26).string(v!);
        }
        if (message.privateKey !== '') {
            writer.uint32(34).string(message.privateKey);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetCertificateContentResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCertificateContentResponse } as GetCertificateContentResponse;
        message.certificateChain = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.certificateChain.push(reader.string());
                    break;
                case 4:
                    message.privateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCertificateContentResponse {
        const message = { ...baseGetCertificateContentResponse } as GetCertificateContentResponse;
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : '';
        message.certificateChain = (object.certificateChain ?? []).map((e: any) => String(e));
        message.privateKey =
            object.privateKey !== undefined && object.privateKey !== null
                ? String(object.privateKey)
                : '';
        return message;
    },

    toJSON(message: GetCertificateContentResponse): unknown {
        const obj: any = {};
        message.certificateId !== undefined && (obj.certificateId = message.certificateId);
        if (message.certificateChain) {
            obj.certificateChain = message.certificateChain.map((e) => e);
        } else {
            obj.certificateChain = [];
        }
        message.privateKey !== undefined && (obj.privateKey = message.privateKey);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCertificateContentResponse>, I>>(
        object: I,
    ): GetCertificateContentResponse {
        const message = { ...baseGetCertificateContentResponse } as GetCertificateContentResponse;
        message.certificateId = object.certificateId ?? '';
        message.certificateChain = object.certificateChain?.map((e) => e) || [];
        message.privateKey = object.privateKey ?? '';
        return message;
    },
};

const baseGetCertificateContentRequest: object = {
    certificateId: '',
    versionId: '',
    privateKeyFormat: 0,
};

export const GetCertificateContentRequest = {
    encode(
        message: GetCertificateContentRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.privateKeyFormat !== 0) {
            writer.uint32(24).int32(message.privateKeyFormat);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetCertificateContentRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCertificateContentRequest } as GetCertificateContentRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.privateKeyFormat = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCertificateContentRequest {
        const message = { ...baseGetCertificateContentRequest } as GetCertificateContentRequest;
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.privateKeyFormat =
            object.privateKeyFormat !== undefined && object.privateKeyFormat !== null
                ? privateKeyFormatFromJSON(object.privateKeyFormat)
                : 0;
        return message;
    },

    toJSON(message: GetCertificateContentRequest): unknown {
        const obj: any = {};
        message.certificateId !== undefined && (obj.certificateId = message.certificateId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.privateKeyFormat !== undefined &&
            (obj.privateKeyFormat = privateKeyFormatToJSON(message.privateKeyFormat));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCertificateContentRequest>, I>>(
        object: I,
    ): GetCertificateContentRequest {
        const message = { ...baseGetCertificateContentRequest } as GetCertificateContentRequest;
        message.certificateId = object.certificateId ?? '';
        message.versionId = object.versionId ?? '';
        message.privateKeyFormat = object.privateKeyFormat ?? 0;
        return message;
    },
};

/** A set of methods for managing certificate content. */
export const CertificateContentServiceService = {
    /** Returns chain and private key of the specified certificate. */
    get: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateContentService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCertificateContentRequest) =>
            Buffer.from(GetCertificateContentRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetCertificateContentRequest.decode(value),
        responseSerialize: (value: GetCertificateContentResponse) =>
            Buffer.from(GetCertificateContentResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetCertificateContentResponse.decode(value),
    },
} as const;

export interface CertificateContentServiceServer extends UntypedServiceImplementation {
    /** Returns chain and private key of the specified certificate. */
    get: handleUnaryCall<GetCertificateContentRequest, GetCertificateContentResponse>;
}

export interface CertificateContentServiceClient extends Client {
    /** Returns chain and private key of the specified certificate. */
    get(
        request: GetCertificateContentRequest,
        callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetCertificateContentRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void,
    ): ClientUnaryCall;
    get(
        request: GetCertificateContentRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetCertificateContentResponse) => void,
    ): ClientUnaryCall;
}

export const CertificateContentServiceClient = makeGenericClientConstructor(
    CertificateContentServiceService,
    'yandex.cloud.certificatemanager.v1.CertificateContentService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): CertificateContentServiceClient;
    service: typeof CertificateContentServiceService;
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
