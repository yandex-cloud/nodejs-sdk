/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

export enum PCITopology {
    PCI_TOPOLOGY_UNSPECIFIED = 0,
    PCI_TOPOLOGY_V1 = 1,
    PCI_TOPOLOGY_V2 = 2,
    UNRECOGNIZED = -1,
}

export function pCITopologyFromJSON(object: any): PCITopology {
    switch (object) {
        case 0:
        case 'PCI_TOPOLOGY_UNSPECIFIED':
            return PCITopology.PCI_TOPOLOGY_UNSPECIFIED;
        case 1:
        case 'PCI_TOPOLOGY_V1':
            return PCITopology.PCI_TOPOLOGY_V1;
        case 2:
        case 'PCI_TOPOLOGY_V2':
            return PCITopology.PCI_TOPOLOGY_V2;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PCITopology.UNRECOGNIZED;
    }
}

export function pCITopologyToJSON(object: PCITopology): string {
    switch (object) {
        case PCITopology.PCI_TOPOLOGY_UNSPECIFIED:
            return 'PCI_TOPOLOGY_UNSPECIFIED';
        case PCITopology.PCI_TOPOLOGY_V1:
            return 'PCI_TOPOLOGY_V1';
        case PCITopology.PCI_TOPOLOGY_V2:
            return 'PCI_TOPOLOGY_V2';
        default:
            return 'UNKNOWN';
    }
}

/**
 * A set of features, specific to a particular Compute hardware generation.
 * They are not necessary supported by every host OS or distro, thus they are fixed to an image
 * and are applied to all instances created with it as their boot disk image.
 * These features significantly determine how the instance is created, thus cannot be changed after the fact.
 */
export interface HardwareGeneration {
    $type: 'yandex.cloud.compute.v1.HardwareGeneration';
    legacyFeatures?: LegacyHardwareFeatures | undefined;
    generation2Features?: Generation2HardwareFeatures | undefined;
}

/**
 * A first hardware generation, by default compatible with all legacy images.
 * Allows switching to PCI_TOPOLOGY_V2 and back.
 */
export interface LegacyHardwareFeatures {
    $type: 'yandex.cloud.compute.v1.LegacyHardwareFeatures';
    pciTopology: PCITopology;
}

/**
 * A second hardware generation, which by default assumes PCI_TOPOLOGY_V2
 * and UEFI boot (with UEFI related features).
 */
export interface Generation2HardwareFeatures {
    $type: 'yandex.cloud.compute.v1.Generation2HardwareFeatures';
}

const baseHardwareGeneration: object = { $type: 'yandex.cloud.compute.v1.HardwareGeneration' };

export const HardwareGeneration = {
    $type: 'yandex.cloud.compute.v1.HardwareGeneration' as const,

    encode(message: HardwareGeneration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.legacyFeatures !== undefined) {
            LegacyHardwareFeatures.encode(
                message.legacyFeatures,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.generation2Features !== undefined) {
            Generation2HardwareFeatures.encode(
                message.generation2Features,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HardwareGeneration {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHardwareGeneration } as HardwareGeneration;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.legacyFeatures = LegacyHardwareFeatures.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.generation2Features = Generation2HardwareFeatures.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HardwareGeneration {
        const message = { ...baseHardwareGeneration } as HardwareGeneration;
        message.legacyFeatures =
            object.legacyFeatures !== undefined && object.legacyFeatures !== null
                ? LegacyHardwareFeatures.fromJSON(object.legacyFeatures)
                : undefined;
        message.generation2Features =
            object.generation2Features !== undefined && object.generation2Features !== null
                ? Generation2HardwareFeatures.fromJSON(object.generation2Features)
                : undefined;
        return message;
    },

    toJSON(message: HardwareGeneration): unknown {
        const obj: any = {};
        message.legacyFeatures !== undefined &&
            (obj.legacyFeatures = message.legacyFeatures
                ? LegacyHardwareFeatures.toJSON(message.legacyFeatures)
                : undefined);
        message.generation2Features !== undefined &&
            (obj.generation2Features = message.generation2Features
                ? Generation2HardwareFeatures.toJSON(message.generation2Features)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HardwareGeneration>, I>>(
        object: I,
    ): HardwareGeneration {
        const message = { ...baseHardwareGeneration } as HardwareGeneration;
        message.legacyFeatures =
            object.legacyFeatures !== undefined && object.legacyFeatures !== null
                ? LegacyHardwareFeatures.fromPartial(object.legacyFeatures)
                : undefined;
        message.generation2Features =
            object.generation2Features !== undefined && object.generation2Features !== null
                ? Generation2HardwareFeatures.fromPartial(object.generation2Features)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(HardwareGeneration.$type, HardwareGeneration);

const baseLegacyHardwareFeatures: object = {
    $type: 'yandex.cloud.compute.v1.LegacyHardwareFeatures',
    pciTopology: 0,
};

export const LegacyHardwareFeatures = {
    $type: 'yandex.cloud.compute.v1.LegacyHardwareFeatures' as const,

    encode(message: LegacyHardwareFeatures, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pciTopology !== 0) {
            writer.uint32(8).int32(message.pciTopology);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyHardwareFeatures {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLegacyHardwareFeatures } as LegacyHardwareFeatures;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pciTopology = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LegacyHardwareFeatures {
        const message = { ...baseLegacyHardwareFeatures } as LegacyHardwareFeatures;
        message.pciTopology =
            object.pciTopology !== undefined && object.pciTopology !== null
                ? pCITopologyFromJSON(object.pciTopology)
                : 0;
        return message;
    },

    toJSON(message: LegacyHardwareFeatures): unknown {
        const obj: any = {};
        message.pciTopology !== undefined &&
            (obj.pciTopology = pCITopologyToJSON(message.pciTopology));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LegacyHardwareFeatures>, I>>(
        object: I,
    ): LegacyHardwareFeatures {
        const message = { ...baseLegacyHardwareFeatures } as LegacyHardwareFeatures;
        message.pciTopology = object.pciTopology ?? 0;
        return message;
    },
};

messageTypeRegistry.set(LegacyHardwareFeatures.$type, LegacyHardwareFeatures);

const baseGeneration2HardwareFeatures: object = {
    $type: 'yandex.cloud.compute.v1.Generation2HardwareFeatures',
};

export const Generation2HardwareFeatures = {
    $type: 'yandex.cloud.compute.v1.Generation2HardwareFeatures' as const,

    encode(_: Generation2HardwareFeatures, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Generation2HardwareFeatures {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGeneration2HardwareFeatures } as Generation2HardwareFeatures;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): Generation2HardwareFeatures {
        const message = { ...baseGeneration2HardwareFeatures } as Generation2HardwareFeatures;
        return message;
    },

    toJSON(_: Generation2HardwareFeatures): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Generation2HardwareFeatures>, I>>(
        _: I,
    ): Generation2HardwareFeatures {
        const message = { ...baseGeneration2HardwareFeatures } as Generation2HardwareFeatures;
        return message;
    },
};

messageTypeRegistry.set(Generation2HardwareFeatures.$type, Generation2HardwareFeatures);

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
