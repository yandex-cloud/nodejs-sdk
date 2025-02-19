/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.test';

/**
 * Agent selection criterion.
 *
 * The structure is used by service to determine on which agents a specific test should be executed.
 */
export interface AgentSelector {
    /** Selection by agent ID. */
    agentId: string | undefined;
    /** Selection by filter string. */
    matchByFilter: string | undefined;
    /** Select anonymoud (i.e. not registered) agents. */
    anonymousAgent: boolean | undefined;
}

const baseAgentSelector: object = {};

export const AgentSelector = {
    encode(message: AgentSelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agentId !== undefined) {
            writer.uint32(10).string(message.agentId);
        }
        if (message.matchByFilter !== undefined) {
            writer.uint32(18).string(message.matchByFilter);
        }
        if (message.anonymousAgent !== undefined) {
            writer.uint32(24).bool(message.anonymousAgent);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AgentSelector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAgentSelector } as AgentSelector;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
                    break;
                case 2:
                    message.matchByFilter = reader.string();
                    break;
                case 3:
                    message.anonymousAgent = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AgentSelector {
        const message = { ...baseAgentSelector } as AgentSelector;
        message.agentId =
            object.agentId !== undefined && object.agentId !== null
                ? String(object.agentId)
                : undefined;
        message.matchByFilter =
            object.matchByFilter !== undefined && object.matchByFilter !== null
                ? String(object.matchByFilter)
                : undefined;
        message.anonymousAgent =
            object.anonymousAgent !== undefined && object.anonymousAgent !== null
                ? Boolean(object.anonymousAgent)
                : undefined;
        return message;
    },

    toJSON(message: AgentSelector): unknown {
        const obj: any = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        message.matchByFilter !== undefined && (obj.matchByFilter = message.matchByFilter);
        message.anonymousAgent !== undefined && (obj.anonymousAgent = message.anonymousAgent);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AgentSelector>, I>>(object: I): AgentSelector {
        const message = { ...baseAgentSelector } as AgentSelector;
        message.agentId = object.agentId ?? undefined;
        message.matchByFilter = object.matchByFilter ?? undefined;
        message.anonymousAgent = object.anonymousAgent ?? undefined;
        return message;
    },
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
