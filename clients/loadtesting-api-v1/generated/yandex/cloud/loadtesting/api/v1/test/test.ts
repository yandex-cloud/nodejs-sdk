/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Details } from '../../../../../../yandex/cloud/loadtesting/api/v1/test/details';
import { Summary } from '../../../../../../yandex/cloud/loadtesting/api/v1/test/summary';
import { SingleAgentConfiguration } from '../../../../../../yandex/cloud/loadtesting/api/v1/test/single_agent_configuration';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.test';

/**
 * Load Test.
 *
 * In context of the service, Test represents a single testing task/job.
 */
export interface Test {
    $type: 'yandex.cloud.loadtesting.api.v1.test.Test';
    /** ID of the test. Generated at creation time. */
    id: string;
    /**
     * Configuration of the test.
     *
     * A test can have multiple configurations if it can be
     * executed on multiple agents simultaneously. For more information, see
     * [Load testing using multiple agents](/docs/load-testing/tutorials/loadtesting-multiply).
     */
    configurations: SingleAgentConfiguration[];
    /** Test meta information. Name, description, etc. */
    details?: Details;
    /** Test execution information. */
    summary?: Summary;
    /** ID of the folder that the test belongs to. */
    folderId: string;
}

const baseTest: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.test.Test',
    id: '',
    folderId: '',
};

export const Test = {
    $type: 'yandex.cloud.loadtesting.api.v1.test.Test' as const,

    encode(message: Test, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.configurations) {
            SingleAgentConfiguration.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.details !== undefined) {
            Details.encode(message.details, writer.uint32(26).fork()).ldelim();
        }
        if (message.summary !== undefined) {
            Summary.encode(message.summary, writer.uint32(34).fork()).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Test {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTest } as Test;
        message.configurations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.configurations.push(
                        SingleAgentConfiguration.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.details = Details.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.summary = Summary.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Test {
        const message = { ...baseTest } as Test;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.configurations = (object.configurations ?? []).map((e: any) =>
            SingleAgentConfiguration.fromJSON(e),
        );
        message.details =
            object.details !== undefined && object.details !== null
                ? Details.fromJSON(object.details)
                : undefined;
        message.summary =
            object.summary !== undefined && object.summary !== null
                ? Summary.fromJSON(object.summary)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: Test): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.configurations) {
            obj.configurations = message.configurations.map((e) =>
                e ? SingleAgentConfiguration.toJSON(e) : undefined,
            );
        } else {
            obj.configurations = [];
        }
        message.details !== undefined &&
            (obj.details = message.details ? Details.toJSON(message.details) : undefined);
        message.summary !== undefined &&
            (obj.summary = message.summary ? Summary.toJSON(message.summary) : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Test>, I>>(object: I): Test {
        const message = { ...baseTest } as Test;
        message.id = object.id ?? '';
        message.configurations =
            object.configurations?.map((e) => SingleAgentConfiguration.fromPartial(e)) || [];
        message.details =
            object.details !== undefined && object.details !== null
                ? Details.fromPartial(object.details)
                : undefined;
        message.summary =
            object.summary !== undefined && object.summary !== null
                ? Summary.fromPartial(object.summary)
                : undefined;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

messageTypeRegistry.set(Test.$type, Test);

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
