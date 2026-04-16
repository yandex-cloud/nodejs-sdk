/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

/** Docker-specific content of the artifact. */
export interface DockerContent {
    /** Single-platform image manifest. */
    imageManifest?: ImageManifest | undefined;
    /** Multi-platform manifest list. */
    manifestList?: ManifestList | undefined;
    /** Digest of the manifest. */
    manifestDigest: string;
}

/** Image manifest describing a single-platform Docker image. */
export interface ImageManifest {
    /** Descriptor of the image configuration. */
    config?: Descriptor;
    /** Descriptors of the image layers. */
    layers: Descriptor[];
}

/** Manifest list describing a multi-platform Docker image. */
export interface ManifestList {
    /** List of platform-specific manifests. */
    manifests: PlatformManifest[];
}

/** Descriptor of a content blob (config, layer, or manifest). */
export interface Descriptor {
    /** Digest of the content. */
    digest: string;
    /** Size of the content in bytes. */
    size: number;
}

/** Platform-specific manifest entry within a manifest list. */
export interface PlatformManifest {
    /** Descriptor of the platform-specific manifest. */
    manifestDescriptor?: Descriptor;
    /** Platform this manifest targets. */
    platform?: Platform;
}

/** Platform describes the target OS and architecture of an image. */
export interface Platform {
    /** CPU architecture. */
    architecture: string;
    /** Operating system. */
    os: string;
    /** OS version. */
    osVersion: string;
    /** CPU variant. */
    variant: string;
}

const baseDockerContent: object = { manifestDigest: '' };

export const DockerContent: {
    encode(message: DockerContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DockerContent;
    fromJSON(object: any): DockerContent;
    toJSON(message: DockerContent): unknown;
    fromPartial<I extends Exact<DeepPartial<DockerContent>, I>>(object: I): DockerContent;
} = {
    encode(message: DockerContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageManifest !== undefined) {
            ImageManifest.encode(message.imageManifest, writer.uint32(18).fork()).ldelim();
        }
        if (message.manifestList !== undefined) {
            ManifestList.encode(message.manifestList, writer.uint32(26).fork()).ldelim();
        }
        if (message.manifestDigest !== '') {
            writer.uint32(10).string(message.manifestDigest);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DockerContent {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDockerContent } as DockerContent;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.imageManifest = ImageManifest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.manifestList = ManifestList.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.manifestDigest = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DockerContent {
        const message = { ...baseDockerContent } as DockerContent;
        message.imageManifest =
            object.imageManifest !== undefined && object.imageManifest !== null
                ? ImageManifest.fromJSON(object.imageManifest)
                : undefined;
        message.manifestList =
            object.manifestList !== undefined && object.manifestList !== null
                ? ManifestList.fromJSON(object.manifestList)
                : undefined;
        message.manifestDigest =
            object.manifestDigest !== undefined && object.manifestDigest !== null
                ? String(object.manifestDigest)
                : '';
        return message;
    },

    toJSON(message: DockerContent): unknown {
        const obj: any = {};
        message.imageManifest !== undefined &&
            (obj.imageManifest = message.imageManifest
                ? ImageManifest.toJSON(message.imageManifest)
                : undefined);
        message.manifestList !== undefined &&
            (obj.manifestList = message.manifestList
                ? ManifestList.toJSON(message.manifestList)
                : undefined);
        message.manifestDigest !== undefined && (obj.manifestDigest = message.manifestDigest);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DockerContent>, I>>(object: I): DockerContent {
        const message = { ...baseDockerContent } as DockerContent;
        message.imageManifest =
            object.imageManifest !== undefined && object.imageManifest !== null
                ? ImageManifest.fromPartial(object.imageManifest)
                : undefined;
        message.manifestList =
            object.manifestList !== undefined && object.manifestList !== null
                ? ManifestList.fromPartial(object.manifestList)
                : undefined;
        message.manifestDigest = object.manifestDigest ?? '';
        return message;
    },
};

const baseImageManifest: object = {};

export const ImageManifest: {
    encode(message: ImageManifest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImageManifest;
    fromJSON(object: any): ImageManifest;
    toJSON(message: ImageManifest): unknown;
    fromPartial<I extends Exact<DeepPartial<ImageManifest>, I>>(object: I): ImageManifest;
} = {
    encode(message: ImageManifest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Descriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.layers) {
            Descriptor.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageManifest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageManifest } as ImageManifest;
        message.layers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Descriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.layers.push(Descriptor.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImageManifest {
        const message = { ...baseImageManifest } as ImageManifest;
        message.config =
            object.config !== undefined && object.config !== null
                ? Descriptor.fromJSON(object.config)
                : undefined;
        message.layers = (object.layers ?? []).map((e: any) => Descriptor.fromJSON(e));
        return message;
    },

    toJSON(message: ImageManifest): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Descriptor.toJSON(message.config) : undefined);
        if (message.layers) {
            obj.layers = message.layers.map((e) => (e ? Descriptor.toJSON(e) : undefined));
        } else {
            obj.layers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImageManifest>, I>>(object: I): ImageManifest {
        const message = { ...baseImageManifest } as ImageManifest;
        message.config =
            object.config !== undefined && object.config !== null
                ? Descriptor.fromPartial(object.config)
                : undefined;
        message.layers = object.layers?.map((e) => Descriptor.fromPartial(e)) || [];
        return message;
    },
};

const baseManifestList: object = {};

export const ManifestList: {
    encode(message: ManifestList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManifestList;
    fromJSON(object: any): ManifestList;
    toJSON(message: ManifestList): unknown;
    fromPartial<I extends Exact<DeepPartial<ManifestList>, I>>(object: I): ManifestList;
} = {
    encode(message: ManifestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.manifests) {
            PlatformManifest.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ManifestList {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseManifestList } as ManifestList;
        message.manifests = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.manifests.push(PlatformManifest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ManifestList {
        const message = { ...baseManifestList } as ManifestList;
        message.manifests = (object.manifests ?? []).map((e: any) => PlatformManifest.fromJSON(e));
        return message;
    },

    toJSON(message: ManifestList): unknown {
        const obj: any = {};
        if (message.manifests) {
            obj.manifests = message.manifests.map((e) =>
                e ? PlatformManifest.toJSON(e) : undefined,
            );
        } else {
            obj.manifests = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ManifestList>, I>>(object: I): ManifestList {
        const message = { ...baseManifestList } as ManifestList;
        message.manifests = object.manifests?.map((e) => PlatformManifest.fromPartial(e)) || [];
        return message;
    },
};

const baseDescriptor: object = { digest: '', size: 0 };

export const Descriptor: {
    encode(message: Descriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Descriptor;
    fromJSON(object: any): Descriptor;
    toJSON(message: Descriptor): unknown;
    fromPartial<I extends Exact<DeepPartial<Descriptor>, I>>(object: I): Descriptor;
} = {
    encode(message: Descriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.digest !== '') {
            writer.uint32(10).string(message.digest);
        }
        if (message.size !== 0) {
            writer.uint32(16).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Descriptor {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescriptor } as Descriptor;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.digest = reader.string();
                    break;
                case 2:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Descriptor {
        const message = { ...baseDescriptor } as Descriptor;
        message.digest =
            object.digest !== undefined && object.digest !== null ? String(object.digest) : '';
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: Descriptor): unknown {
        const obj: any = {};
        message.digest !== undefined && (obj.digest = message.digest);
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Descriptor>, I>>(object: I): Descriptor {
        const message = { ...baseDescriptor } as Descriptor;
        message.digest = object.digest ?? '';
        message.size = object.size ?? 0;
        return message;
    },
};

const basePlatformManifest: object = {};

export const PlatformManifest: {
    encode(message: PlatformManifest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlatformManifest;
    fromJSON(object: any): PlatformManifest;
    toJSON(message: PlatformManifest): unknown;
    fromPartial<I extends Exact<DeepPartial<PlatformManifest>, I>>(object: I): PlatformManifest;
} = {
    encode(message: PlatformManifest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.manifestDescriptor !== undefined) {
            Descriptor.encode(message.manifestDescriptor, writer.uint32(10).fork()).ldelim();
        }
        if (message.platform !== undefined) {
            Platform.encode(message.platform, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlatformManifest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlatformManifest } as PlatformManifest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.manifestDescriptor = Descriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.platform = Platform.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PlatformManifest {
        const message = { ...basePlatformManifest } as PlatformManifest;
        message.manifestDescriptor =
            object.manifestDescriptor !== undefined && object.manifestDescriptor !== null
                ? Descriptor.fromJSON(object.manifestDescriptor)
                : undefined;
        message.platform =
            object.platform !== undefined && object.platform !== null
                ? Platform.fromJSON(object.platform)
                : undefined;
        return message;
    },

    toJSON(message: PlatformManifest): unknown {
        const obj: any = {};
        message.manifestDescriptor !== undefined &&
            (obj.manifestDescriptor = message.manifestDescriptor
                ? Descriptor.toJSON(message.manifestDescriptor)
                : undefined);
        message.platform !== undefined &&
            (obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PlatformManifest>, I>>(object: I): PlatformManifest {
        const message = { ...basePlatformManifest } as PlatformManifest;
        message.manifestDescriptor =
            object.manifestDescriptor !== undefined && object.manifestDescriptor !== null
                ? Descriptor.fromPartial(object.manifestDescriptor)
                : undefined;
        message.platform =
            object.platform !== undefined && object.platform !== null
                ? Platform.fromPartial(object.platform)
                : undefined;
        return message;
    },
};

const basePlatform: object = { architecture: '', os: '', osVersion: '', variant: '' };

export const Platform: {
    encode(message: Platform, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Platform;
    fromJSON(object: any): Platform;
    toJSON(message: Platform): unknown;
    fromPartial<I extends Exact<DeepPartial<Platform>, I>>(object: I): Platform;
} = {
    encode(message: Platform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.architecture !== '') {
            writer.uint32(10).string(message.architecture);
        }
        if (message.os !== '') {
            writer.uint32(18).string(message.os);
        }
        if (message.osVersion !== '') {
            writer.uint32(26).string(message.osVersion);
        }
        if (message.variant !== '') {
            writer.uint32(34).string(message.variant);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Platform {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlatform } as Platform;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.architecture = reader.string();
                    break;
                case 2:
                    message.os = reader.string();
                    break;
                case 3:
                    message.osVersion = reader.string();
                    break;
                case 4:
                    message.variant = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Platform {
        const message = { ...basePlatform } as Platform;
        message.architecture =
            object.architecture !== undefined && object.architecture !== null
                ? String(object.architecture)
                : '';
        message.os = object.os !== undefined && object.os !== null ? String(object.os) : '';
        message.osVersion =
            object.osVersion !== undefined && object.osVersion !== null
                ? String(object.osVersion)
                : '';
        message.variant =
            object.variant !== undefined && object.variant !== null ? String(object.variant) : '';
        return message;
    },

    toJSON(message: Platform): unknown {
        const obj: any = {};
        message.architecture !== undefined && (obj.architecture = message.architecture);
        message.os !== undefined && (obj.os = message.os);
        message.osVersion !== undefined && (obj.osVersion = message.osVersion);
        message.variant !== undefined && (obj.variant = message.variant);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Platform>, I>>(object: I): Platform {
        const message = { ...basePlatform } as Platform;
        message.architecture = object.architecture ?? '';
        message.os = object.os ?? '';
        message.osVersion = object.osVersion ?? '';
        message.variant = object.variant ?? '';
        return message;
    },
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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

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
