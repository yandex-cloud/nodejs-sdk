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
import { RuleSetDescriptor } from '../../../../../yandex/cloud/smartwebsecurity/v1/waf/rule_set_descriptor';

export const protobufPackage = 'yandex.cloud.smartwebsecurity.v1.waf';

export interface GetRuleSetDescriptorRequest {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.GetRuleSetDescriptorRequest';
    /** Name of the RuleSetDescriptor resource to return. */
    name: string;
    /** Version of the RuleSetDescriptor resource to return. */
    version: string;
}

const baseGetRuleSetDescriptorRequest: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.GetRuleSetDescriptorRequest',
    name: '',
    version: '',
};

export const GetRuleSetDescriptorRequest = {
    $type: 'yandex.cloud.smartwebsecurity.v1.waf.GetRuleSetDescriptorRequest' as const,

    encode(
        message: GetRuleSetDescriptorRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRuleSetDescriptorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRuleSetDescriptorRequest } as GetRuleSetDescriptorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRuleSetDescriptorRequest {
        const message = { ...baseGetRuleSetDescriptorRequest } as GetRuleSetDescriptorRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        return message;
    },

    toJSON(message: GetRuleSetDescriptorRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRuleSetDescriptorRequest>, I>>(
        object: I,
    ): GetRuleSetDescriptorRequest {
        const message = { ...baseGetRuleSetDescriptorRequest } as GetRuleSetDescriptorRequest;
        message.name = object.name ?? '';
        message.version = object.version ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetRuleSetDescriptorRequest.$type, GetRuleSetDescriptorRequest);

/** A set of methods for managing RuleSetDescriptor resources. */
export const RuleSetDescriptorServiceService = {
    /** Returns the specified RuleSetDescriptor resource. */
    get: {
        path: '/yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptorService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRuleSetDescriptorRequest) =>
            Buffer.from(GetRuleSetDescriptorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRuleSetDescriptorRequest.decode(value),
        responseSerialize: (value: RuleSetDescriptor) =>
            Buffer.from(RuleSetDescriptor.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RuleSetDescriptor.decode(value),
    },
} as const;

export interface RuleSetDescriptorServiceServer extends UntypedServiceImplementation {
    /** Returns the specified RuleSetDescriptor resource. */
    get: handleUnaryCall<GetRuleSetDescriptorRequest, RuleSetDescriptor>;
}

export interface RuleSetDescriptorServiceClient extends Client {
    /** Returns the specified RuleSetDescriptor resource. */
    get(
        request: GetRuleSetDescriptorRequest,
        callback: (error: ServiceError | null, response: RuleSetDescriptor) => void,
    ): ClientUnaryCall;
    get(
        request: GetRuleSetDescriptorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RuleSetDescriptor) => void,
    ): ClientUnaryCall;
    get(
        request: GetRuleSetDescriptorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RuleSetDescriptor) => void,
    ): ClientUnaryCall;
}

export const RuleSetDescriptorServiceClient = makeGenericClientConstructor(
    RuleSetDescriptorServiceService,
    'yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptorService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RuleSetDescriptorServiceClient;
    service: typeof RuleSetDescriptorServiceService;
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
