/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { AgentSelector } from '../../../../../../yandex/cloud/loadtesting/api/v1/test/agent_selector';
import { FilePointer } from '../../../../../../yandex/cloud/loadtesting/api/v1/test/file_pointer';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.test';

/** Configuration of a test. */
export interface SingleAgentConfiguration {
    /** ID of the config. */
    configId: string;
    /** Agent selection criterion. */
    agentSelector?: AgentSelector;
    /**
     * Additional files to be used during test execution, represented as `rel_path:file` pairs.
     *
     * `rel_path` can be either a simple file name, a relative path, or absolute path. Files are
     * downloaded by the agent to appropriate location.
     *
     * Use cases include:
     * - [Test Data files](/docs/load-testing/concepts/payload).
     * - Custom Pandora executable.
     * - JMeter executable or ".jmx" scenario.
     * - etc.
     */
    files: { [key: string]: FilePointer };
}

export interface SingleAgentConfiguration_FilesEntry {
    key: string;
    value?: FilePointer;
}

const baseSingleAgentConfiguration: object = { configId: '' };

export const SingleAgentConfiguration = {
    encode(
        message: SingleAgentConfiguration,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configId !== '') {
            writer.uint32(10).string(message.configId);
        }
        if (message.agentSelector !== undefined) {
            AgentSelector.encode(message.agentSelector, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.files).forEach(([key, value]) => {
            SingleAgentConfiguration_FilesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SingleAgentConfiguration {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSingleAgentConfiguration } as SingleAgentConfiguration;
        message.files = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configId = reader.string();
                    break;
                case 2:
                    message.agentSelector = AgentSelector.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = SingleAgentConfiguration_FilesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.files[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SingleAgentConfiguration {
        const message = { ...baseSingleAgentConfiguration } as SingleAgentConfiguration;
        message.configId =
            object.configId !== undefined && object.configId !== null
                ? String(object.configId)
                : '';
        message.agentSelector =
            object.agentSelector !== undefined && object.agentSelector !== null
                ? AgentSelector.fromJSON(object.agentSelector)
                : undefined;
        message.files = Object.entries(object.files ?? {}).reduce<{ [key: string]: FilePointer }>(
            (acc, [key, value]) => {
                acc[key] = FilePointer.fromJSON(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: SingleAgentConfiguration): unknown {
        const obj: any = {};
        message.configId !== undefined && (obj.configId = message.configId);
        message.agentSelector !== undefined &&
            (obj.agentSelector = message.agentSelector
                ? AgentSelector.toJSON(message.agentSelector)
                : undefined);
        obj.files = {};
        if (message.files) {
            Object.entries(message.files).forEach(([k, v]) => {
                obj.files[k] = FilePointer.toJSON(v);
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SingleAgentConfiguration>, I>>(
        object: I,
    ): SingleAgentConfiguration {
        const message = { ...baseSingleAgentConfiguration } as SingleAgentConfiguration;
        message.configId = object.configId ?? '';
        message.agentSelector =
            object.agentSelector !== undefined && object.agentSelector !== null
                ? AgentSelector.fromPartial(object.agentSelector)
                : undefined;
        message.files = Object.entries(object.files ?? {}).reduce<{ [key: string]: FilePointer }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = FilePointer.fromPartial(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseSingleAgentConfiguration_FilesEntry: object = { key: '' };

export const SingleAgentConfiguration_FilesEntry = {
    encode(
        message: SingleAgentConfiguration_FilesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            FilePointer.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SingleAgentConfiguration_FilesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSingleAgentConfiguration_FilesEntry,
        } as SingleAgentConfiguration_FilesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = FilePointer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SingleAgentConfiguration_FilesEntry {
        const message = {
            ...baseSingleAgentConfiguration_FilesEntry,
        } as SingleAgentConfiguration_FilesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? FilePointer.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: SingleAgentConfiguration_FilesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? FilePointer.toJSON(message.value) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SingleAgentConfiguration_FilesEntry>, I>>(
        object: I,
    ): SingleAgentConfiguration_FilesEntry {
        const message = {
            ...baseSingleAgentConfiguration_FilesEntry,
        } as SingleAgentConfiguration_FilesEntry;
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? FilePointer.fromPartial(object.value)
                : undefined;
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
