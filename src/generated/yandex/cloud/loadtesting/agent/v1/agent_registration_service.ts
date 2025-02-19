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
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.loadtesting.agent.v1';

export interface RegisterRequest {
    computeInstanceId: string;
    agentVersion: string;
}

export interface RegisterResponse {
    agentInstanceId: string;
}

export interface ExternalAgentRegisterRequest {
    folderId: string;
    computeInstanceId: string;
    name: string;
    agentVersion: string;
    labels: { [key: string]: string };
}

export interface ExternalAgentRegisterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface ExternalAgentRegisterMetadata {
    agentInstanceId: string;
}

const baseRegisterRequest: object = { computeInstanceId: '', agentVersion: '' };

export const RegisterRequest = {
    encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.computeInstanceId !== '') {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.agentVersion !== '') {
            writer.uint32(18).string(message.agentVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegisterRequest } as RegisterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.agentVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RegisterRequest {
        const message = { ...baseRegisterRequest } as RegisterRequest;
        message.computeInstanceId =
            object.computeInstanceId !== undefined && object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : '';
        message.agentVersion =
            object.agentVersion !== undefined && object.agentVersion !== null
                ? String(object.agentVersion)
                : '';
        return message;
    },

    toJSON(message: RegisterRequest): unknown {
        const obj: any = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.agentVersion !== undefined && (obj.agentVersion = message.agentVersion);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RegisterRequest>, I>>(object: I): RegisterRequest {
        const message = { ...baseRegisterRequest } as RegisterRequest;
        message.computeInstanceId = object.computeInstanceId ?? '';
        message.agentVersion = object.agentVersion ?? '';
        return message;
    },
};

const baseRegisterResponse: object = { agentInstanceId: '' };

export const RegisterResponse = {
    encode(message: RegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agentInstanceId !== '') {
            writer.uint32(10).string(message.agentInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegisterResponse } as RegisterResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RegisterResponse {
        const message = { ...baseRegisterResponse } as RegisterResponse;
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : '';
        return message;
    },

    toJSON(message: RegisterResponse): unknown {
        const obj: any = {};
        message.agentInstanceId !== undefined && (obj.agentInstanceId = message.agentInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RegisterResponse>, I>>(object: I): RegisterResponse {
        const message = { ...baseRegisterResponse } as RegisterResponse;
        message.agentInstanceId = object.agentInstanceId ?? '';
        return message;
    },
};

const baseExternalAgentRegisterRequest: object = {
    folderId: '',
    computeInstanceId: '',
    name: '',
    agentVersion: '',
};

export const ExternalAgentRegisterRequest = {
    encode(
        message: ExternalAgentRegisterRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.computeInstanceId !== '') {
            writer.uint32(18).string(message.computeInstanceId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.agentVersion !== '') {
            writer.uint32(34).string(message.agentVersion);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            ExternalAgentRegisterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalAgentRegisterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalAgentRegisterRequest } as ExternalAgentRegisterRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.agentVersion = reader.string();
                    break;
                case 5:
                    const entry5 = ExternalAgentRegisterRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalAgentRegisterRequest {
        const message = { ...baseExternalAgentRegisterRequest } as ExternalAgentRegisterRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.computeInstanceId =
            object.computeInstanceId !== undefined && object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.agentVersion =
            object.agentVersion !== undefined && object.agentVersion !== null
                ? String(object.agentVersion)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: ExternalAgentRegisterRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.name !== undefined && (obj.name = message.name);
        message.agentVersion !== undefined && (obj.agentVersion = message.agentVersion);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalAgentRegisterRequest>, I>>(
        object: I,
    ): ExternalAgentRegisterRequest {
        const message = { ...baseExternalAgentRegisterRequest } as ExternalAgentRegisterRequest;
        message.folderId = object.folderId ?? '';
        message.computeInstanceId = object.computeInstanceId ?? '';
        message.name = object.name ?? '';
        message.agentVersion = object.agentVersion ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseExternalAgentRegisterRequest_LabelsEntry: object = { key: '', value: '' };

export const ExternalAgentRegisterRequest_LabelsEntry = {
    encode(
        message: ExternalAgentRegisterRequest_LabelsEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ExternalAgentRegisterRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalAgentRegisterRequest_LabelsEntry,
        } as ExternalAgentRegisterRequest_LabelsEntry;
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

    fromJSON(object: any): ExternalAgentRegisterRequest_LabelsEntry {
        const message = {
            ...baseExternalAgentRegisterRequest_LabelsEntry,
        } as ExternalAgentRegisterRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ExternalAgentRegisterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalAgentRegisterRequest_LabelsEntry>, I>>(
        object: I,
    ): ExternalAgentRegisterRequest_LabelsEntry {
        const message = {
            ...baseExternalAgentRegisterRequest_LabelsEntry,
        } as ExternalAgentRegisterRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseExternalAgentRegisterMetadata: object = { agentInstanceId: '' };

export const ExternalAgentRegisterMetadata = {
    encode(
        message: ExternalAgentRegisterMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.agentInstanceId !== '') {
            writer.uint32(10).string(message.agentInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalAgentRegisterMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalAgentRegisterMetadata } as ExternalAgentRegisterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalAgentRegisterMetadata {
        const message = { ...baseExternalAgentRegisterMetadata } as ExternalAgentRegisterMetadata;
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : '';
        return message;
    },

    toJSON(message: ExternalAgentRegisterMetadata): unknown {
        const obj: any = {};
        message.agentInstanceId !== undefined && (obj.agentInstanceId = message.agentInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalAgentRegisterMetadata>, I>>(
        object: I,
    ): ExternalAgentRegisterMetadata {
        const message = { ...baseExternalAgentRegisterMetadata } as ExternalAgentRegisterMetadata;
        message.agentInstanceId = object.agentInstanceId ?? '';
        return message;
    },
};

export const AgentRegistrationServiceService = {
    /** Registers specified agent. */
    register: {
        path: '/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/Register',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RegisterRequest) =>
            Buffer.from(RegisterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RegisterRequest.decode(value),
        responseSerialize: (value: RegisterResponse) =>
            Buffer.from(RegisterResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RegisterResponse.decode(value),
    },
    /** Registers external agent. */
    externalAgentRegister: {
        path: '/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/ExternalAgentRegister',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ExternalAgentRegisterRequest) =>
            Buffer.from(ExternalAgentRegisterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ExternalAgentRegisterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface AgentRegistrationServiceServer extends UntypedServiceImplementation {
    /** Registers specified agent. */
    register: handleUnaryCall<RegisterRequest, RegisterResponse>;
    /** Registers external agent. */
    externalAgentRegister: handleUnaryCall<ExternalAgentRegisterRequest, Operation>;
}

export interface AgentRegistrationServiceClient extends Client {
    /** Registers specified agent. */
    register(
        request: RegisterRequest,
        callback: (error: ServiceError | null, response: RegisterResponse) => void,
    ): ClientUnaryCall;
    register(
        request: RegisterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RegisterResponse) => void,
    ): ClientUnaryCall;
    register(
        request: RegisterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RegisterResponse) => void,
    ): ClientUnaryCall;
    /** Registers external agent. */
    externalAgentRegister(
        request: ExternalAgentRegisterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    externalAgentRegister(
        request: ExternalAgentRegisterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    externalAgentRegister(
        request: ExternalAgentRegisterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const AgentRegistrationServiceClient = makeGenericClientConstructor(
    AgentRegistrationServiceService,
    'yandex.cloud.loadtesting.agent.v1.AgentRegistrationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AgentRegistrationServiceClient;
    service: typeof AgentRegistrationServiceService;
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
