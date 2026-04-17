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

export const protobufPackage = 'yandex.cloud.backup.v1';

export interface GetAgentInstallCommandRequest {
    folderId: string;
    type: GetAgentInstallCommandRequest_AgentInstallCommandType;
    policyIds: string[];
}

export enum GetAgentInstallCommandRequest_AgentInstallCommandType {
    AGENT_INSTALL_COMMAND_TYPE_UNSPECIFIED = 0,
    AGENT_INSTALL_BASH_EXTERNAL_VM = 1,
    AGENT_INSTALL_BASH_EXTERNAL_SERVER = 2,
    UNRECOGNIZED = -1,
}

export function getAgentInstallCommandRequest_AgentInstallCommandTypeFromJSON(
    object: any,
): GetAgentInstallCommandRequest_AgentInstallCommandType {
    switch (object) {
        case 0:
        case 'AGENT_INSTALL_COMMAND_TYPE_UNSPECIFIED':
            return GetAgentInstallCommandRequest_AgentInstallCommandType.AGENT_INSTALL_COMMAND_TYPE_UNSPECIFIED;
        case 1:
        case 'AGENT_INSTALL_BASH_EXTERNAL_VM':
            return GetAgentInstallCommandRequest_AgentInstallCommandType.AGENT_INSTALL_BASH_EXTERNAL_VM;
        case 2:
        case 'AGENT_INSTALL_BASH_EXTERNAL_SERVER':
            return GetAgentInstallCommandRequest_AgentInstallCommandType.AGENT_INSTALL_BASH_EXTERNAL_SERVER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GetAgentInstallCommandRequest_AgentInstallCommandType.UNRECOGNIZED;
    }
}

export function getAgentInstallCommandRequest_AgentInstallCommandTypeToJSON(
    object: GetAgentInstallCommandRequest_AgentInstallCommandType,
): string {
    switch (object) {
        case GetAgentInstallCommandRequest_AgentInstallCommandType.AGENT_INSTALL_COMMAND_TYPE_UNSPECIFIED:
            return 'AGENT_INSTALL_COMMAND_TYPE_UNSPECIFIED';
        case GetAgentInstallCommandRequest_AgentInstallCommandType.AGENT_INSTALL_BASH_EXTERNAL_VM:
            return 'AGENT_INSTALL_BASH_EXTERNAL_VM';
        case GetAgentInstallCommandRequest_AgentInstallCommandType.AGENT_INSTALL_BASH_EXTERNAL_SERVER:
            return 'AGENT_INSTALL_BASH_EXTERNAL_SERVER';
        default:
            return 'UNKNOWN';
    }
}

export interface GetAgentInstallCommandResponse {
    command: string;
}

const baseGetAgentInstallCommandRequest: object = { folderId: '', type: 0, policyIds: '' };

export const GetAgentInstallCommandRequest: {
    encode(message: GetAgentInstallCommandRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentInstallCommandRequest;
    fromJSON(object: any): GetAgentInstallCommandRequest;
    toJSON(message: GetAgentInstallCommandRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetAgentInstallCommandRequest>, I>>(object: I): GetAgentInstallCommandRequest;
} = {
    encode(
        message: GetAgentInstallCommandRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        for (const v of message.policyIds) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentInstallCommandRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetAgentInstallCommandRequest } as GetAgentInstallCommandRequest;
        message.policyIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.type = reader.int32() as any;
                    break;
                case 3:
                    message.policyIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAgentInstallCommandRequest {
        const message = { ...baseGetAgentInstallCommandRequest } as GetAgentInstallCommandRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? getAgentInstallCommandRequest_AgentInstallCommandTypeFromJSON(object.type)
                : 0;
        message.policyIds = (object.policyIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GetAgentInstallCommandRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.type !== undefined &&
            (obj.type = getAgentInstallCommandRequest_AgentInstallCommandTypeToJSON(message.type));
        if (message.policyIds) {
            obj.policyIds = message.policyIds.map((e) => e);
        } else {
            obj.policyIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetAgentInstallCommandRequest>, I>>(
        object: I,
    ): GetAgentInstallCommandRequest {
        const message = { ...baseGetAgentInstallCommandRequest } as GetAgentInstallCommandRequest;
        message.folderId = object.folderId ?? '';
        message.type = object.type ?? 0;
        message.policyIds = object.policyIds?.map((e) => e) || [];
        return message;
    },
};

const baseGetAgentInstallCommandResponse: object = { command: '' };

export const GetAgentInstallCommandResponse: {
    encode(message: GetAgentInstallCommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentInstallCommandResponse;
    fromJSON(object: any): GetAgentInstallCommandResponse;
    toJSON(message: GetAgentInstallCommandResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetAgentInstallCommandResponse>, I>>(object: I): GetAgentInstallCommandResponse;
} = {
    encode(
        message: GetAgentInstallCommandResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.command !== '') {
            writer.uint32(10).string(message.command);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentInstallCommandResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetAgentInstallCommandResponse } as GetAgentInstallCommandResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.command = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAgentInstallCommandResponse {
        const message = { ...baseGetAgentInstallCommandResponse } as GetAgentInstallCommandResponse;
        message.command =
            object.command !== undefined && object.command !== null ? String(object.command) : '';
        return message;
    },

    toJSON(message: GetAgentInstallCommandResponse): unknown {
        const obj: any = {};
        message.command !== undefined && (obj.command = message.command);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetAgentInstallCommandResponse>, I>>(
        object: I,
    ): GetAgentInstallCommandResponse {
        const message = { ...baseGetAgentInstallCommandResponse } as GetAgentInstallCommandResponse;
        message.command = object.command ?? '';
        return message;
    },
};

export const SetupServiceService = {
    getAgentInstallCommand: {
        path: '/yandex.cloud.backup.v1.SetupService/GetAgentInstallCommand',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetAgentInstallCommandRequest) =>
            Buffer.from(GetAgentInstallCommandRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetAgentInstallCommandRequest.decode(value),
        responseSerialize: (value: GetAgentInstallCommandResponse) =>
            Buffer.from(GetAgentInstallCommandResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetAgentInstallCommandResponse.decode(value),
    },
} as const;

export interface SetupServiceServer extends UntypedServiceImplementation {
    getAgentInstallCommand: handleUnaryCall<
        GetAgentInstallCommandRequest,
        GetAgentInstallCommandResponse
    >;
}

export interface SetupServiceClient extends Client {
    getAgentInstallCommand(
        request: GetAgentInstallCommandRequest,
        callback: (error: ServiceError | null, response: GetAgentInstallCommandResponse) => void,
    ): ClientUnaryCall;
    getAgentInstallCommand(
        request: GetAgentInstallCommandRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetAgentInstallCommandResponse) => void,
    ): ClientUnaryCall;
    getAgentInstallCommand(
        request: GetAgentInstallCommandRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetAgentInstallCommandResponse) => void,
    ): ClientUnaryCall;
}

export const SetupServiceClient = makeGenericClientConstructor(
    SetupServiceService,
    'yandex.cloud.backup.v1.SetupService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SetupServiceClient;
    service: typeof SetupServiceService;
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
