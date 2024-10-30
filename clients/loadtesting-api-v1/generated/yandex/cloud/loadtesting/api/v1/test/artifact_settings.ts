/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.test';

/**
 * Artifact upload settings.
 *
 * Defines where to upload test artifacts and which files should be included.
 */
export interface ArtifactSettings {
    $type: 'yandex.cloud.loadtesting.api.v1.test.ArtifactSettings';
    /** Name of output object storage bucket in test's folder. */
    objectStorageBucket: string | undefined;
    /** Setting which defines whether artifact files should be archived prior to uploading. */
    isArchive: boolean;
    /**
     * Filter strings defining which files should be included to artifacts. GLOB format.
     *
     * Example:
     * - ['*'] - all files will be uploaded.
     * - ['*.log', '*.yaml] - all `.log` and `.yaml` files will be uploaded.
     */
    filterInclude: string[];
    /**
     * Filter strings defining which files should be excluded from artifacts. GLOB format.
     *
     * Example:
     * - filter_include=['*'], filter_exclude=['phout.log'] - upload all `.log` files excluding `phout.log`.
     */
    filterExclude: string[];
}

const baseArtifactSettings: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.test.ArtifactSettings',
    isArchive: false,
    filterInclude: '',
    filterExclude: '',
};

export const ArtifactSettings = {
    $type: 'yandex.cloud.loadtesting.api.v1.test.ArtifactSettings' as const,

    encode(message: ArtifactSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.objectStorageBucket !== undefined) {
            writer.uint32(10).string(message.objectStorageBucket);
        }
        if (message.isArchive === true) {
            writer.uint32(48).bool(message.isArchive);
        }
        for (const v of message.filterInclude) {
            writer.uint32(58).string(v!);
        }
        for (const v of message.filterExclude) {
            writer.uint32(66).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ArtifactSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseArtifactSettings } as ArtifactSettings;
        message.filterInclude = [];
        message.filterExclude = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.objectStorageBucket = reader.string();
                    break;
                case 6:
                    message.isArchive = reader.bool();
                    break;
                case 7:
                    message.filterInclude.push(reader.string());
                    break;
                case 8:
                    message.filterExclude.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ArtifactSettings {
        const message = { ...baseArtifactSettings } as ArtifactSettings;
        message.objectStorageBucket =
            object.objectStorageBucket !== undefined && object.objectStorageBucket !== null
                ? String(object.objectStorageBucket)
                : undefined;
        message.isArchive =
            object.isArchive !== undefined && object.isArchive !== null
                ? Boolean(object.isArchive)
                : false;
        message.filterInclude = (object.filterInclude ?? []).map((e: any) => String(e));
        message.filterExclude = (object.filterExclude ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ArtifactSettings): unknown {
        const obj: any = {};
        message.objectStorageBucket !== undefined &&
            (obj.objectStorageBucket = message.objectStorageBucket);
        message.isArchive !== undefined && (obj.isArchive = message.isArchive);
        if (message.filterInclude) {
            obj.filterInclude = message.filterInclude.map((e) => e);
        } else {
            obj.filterInclude = [];
        }
        if (message.filterExclude) {
            obj.filterExclude = message.filterExclude.map((e) => e);
        } else {
            obj.filterExclude = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ArtifactSettings>, I>>(object: I): ArtifactSettings {
        const message = { ...baseArtifactSettings } as ArtifactSettings;
        message.objectStorageBucket = object.objectStorageBucket ?? undefined;
        message.isArchive = object.isArchive ?? false;
        message.filterInclude = object.filterInclude?.map((e) => e) || [];
        message.filterExclude = object.filterExclude?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(ArtifactSettings.$type, ArtifactSettings);

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
