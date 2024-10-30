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
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Test } from '../../../../../yandex/cloud/loadtesting/agent/v1/test';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.loadtesting.agent.v1';

export interface GetTestRequest {
    $type: 'yandex.cloud.loadtesting.agent.v1.GetTestRequest';
    testId: string;
}

export interface UpdateTestRequest {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestRequest';
    testId: string;
    updateMask?: FieldMask;
    /** @deprecated */
    name: string;
    /** @deprecated */
    description: string;
    /** @deprecated */
    labels: { [key: string]: string };
    /** @deprecated */
    favorite: boolean;
    /** @deprecated */
    targetVersion: string;
    imbalancePoint: number;
    imbalanceTs: number;
    imbalanceComment: string;
}

export interface UpdateTestRequest_LabelsEntry {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateTestMetadata {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata';
    testId: string;
}

const baseGetTestRequest: object = {
    $type: 'yandex.cloud.loadtesting.agent.v1.GetTestRequest',
    testId: '',
};

export const GetTestRequest = {
    $type: 'yandex.cloud.loadtesting.agent.v1.GetTestRequest' as const,

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

messageTypeRegistry.set(GetTestRequest.$type, GetTestRequest);

const baseUpdateTestRequest: object = {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestRequest',
    testId: '',
    name: '',
    description: '',
    favorite: false,
    targetVersion: '',
    imbalancePoint: 0,
    imbalanceTs: 0,
    imbalanceComment: '',
};

export const UpdateTestRequest = {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestRequest' as const,

    encode(message: UpdateTestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateTestRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.favorite === true) {
            writer.uint32(48).bool(message.favorite);
        }
        if (message.targetVersion !== '') {
            writer.uint32(58).string(message.targetVersion);
        }
        if (message.imbalancePoint !== 0) {
            writer.uint32(64).int64(message.imbalancePoint);
        }
        if (message.imbalanceTs !== 0) {
            writer.uint32(72).int64(message.imbalanceTs);
        }
        if (message.imbalanceComment !== '') {
            writer.uint32(82).string(message.imbalanceComment);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTestRequest } as UpdateTestRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateTestRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.favorite = reader.bool();
                    break;
                case 7:
                    message.targetVersion = reader.string();
                    break;
                case 8:
                    message.imbalancePoint = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.imbalanceTs = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.imbalanceComment = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateTestRequest {
        const message = { ...baseUpdateTestRequest } as UpdateTestRequest;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.favorite =
            object.favorite !== undefined && object.favorite !== null
                ? Boolean(object.favorite)
                : false;
        message.targetVersion =
            object.targetVersion !== undefined && object.targetVersion !== null
                ? String(object.targetVersion)
                : '';
        message.imbalancePoint =
            object.imbalancePoint !== undefined && object.imbalancePoint !== null
                ? Number(object.imbalancePoint)
                : 0;
        message.imbalanceTs =
            object.imbalanceTs !== undefined && object.imbalanceTs !== null
                ? Number(object.imbalanceTs)
                : 0;
        message.imbalanceComment =
            object.imbalanceComment !== undefined && object.imbalanceComment !== null
                ? String(object.imbalanceComment)
                : '';
        return message;
    },

    toJSON(message: UpdateTestRequest): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.favorite !== undefined && (obj.favorite = message.favorite);
        message.targetVersion !== undefined && (obj.targetVersion = message.targetVersion);
        message.imbalancePoint !== undefined &&
            (obj.imbalancePoint = Math.round(message.imbalancePoint));
        message.imbalanceTs !== undefined && (obj.imbalanceTs = Math.round(message.imbalanceTs));
        message.imbalanceComment !== undefined && (obj.imbalanceComment = message.imbalanceComment);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateTestRequest>, I>>(object: I): UpdateTestRequest {
        const message = { ...baseUpdateTestRequest } as UpdateTestRequest;
        message.testId = object.testId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.favorite = object.favorite ?? false;
        message.targetVersion = object.targetVersion ?? '';
        message.imbalancePoint = object.imbalancePoint ?? 0;
        message.imbalanceTs = object.imbalanceTs ?? 0;
        message.imbalanceComment = object.imbalanceComment ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateTestRequest.$type, UpdateTestRequest);

const baseUpdateTestRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateTestRequest_LabelsEntry = {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry' as const,

    encode(
        message: UpdateTestRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTestRequest_LabelsEntry } as UpdateTestRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateTestRequest_LabelsEntry {
        const message = { ...baseUpdateTestRequest_LabelsEntry } as UpdateTestRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateTestRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateTestRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateTestRequest_LabelsEntry {
        const message = { ...baseUpdateTestRequest_LabelsEntry } as UpdateTestRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateTestRequest_LabelsEntry.$type, UpdateTestRequest_LabelsEntry);

const baseUpdateTestMetadata: object = {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata',
    testId: '',
};

export const UpdateTestMetadata = {
    $type: 'yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata' as const,

    encode(message: UpdateTestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.testId !== '') {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTestMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTestMetadata } as UpdateTestMetadata;
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

    fromJSON(object: any): UpdateTestMetadata {
        const message = { ...baseUpdateTestMetadata } as UpdateTestMetadata;
        message.testId =
            object.testId !== undefined && object.testId !== null ? String(object.testId) : '';
        return message;
    },

    toJSON(message: UpdateTestMetadata): unknown {
        const obj: any = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateTestMetadata>, I>>(
        object: I,
    ): UpdateTestMetadata {
        const message = { ...baseUpdateTestMetadata } as UpdateTestMetadata;
        message.testId = object.testId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateTestMetadata.$type, UpdateTestMetadata);

export const TestServiceService = {
    /** Returns test by test id. */
    get: {
        path: '/yandex.cloud.loadtesting.agent.v1.TestService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTestRequest) =>
            Buffer.from(GetTestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetTestRequest.decode(value),
        responseSerialize: (value: Test) => Buffer.from(Test.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Test.decode(value),
    },
    /** Updates the specified test. */
    update: {
        path: '/yandex.cloud.loadtesting.agent.v1.TestService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateTestRequest) =>
            Buffer.from(UpdateTestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateTestRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface TestServiceServer extends UntypedServiceImplementation {
    /** Returns test by test id. */
    get: handleUnaryCall<GetTestRequest, Test>;
    /** Updates the specified test. */
    update: handleUnaryCall<UpdateTestRequest, Operation>;
}

export interface TestServiceClient extends Client {
    /** Returns test by test id. */
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
    /** Updates the specified test. */
    update(
        request: UpdateTestRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateTestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateTestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const TestServiceClient = makeGenericClientConstructor(
    TestServiceService,
    'yandex.cloud.loadtesting.agent.v1.TestService',
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
