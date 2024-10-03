/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.cic.v1";

export interface Peering {
  $type: "yandex.cloud.cic.v1.Peering";
  /**
   * PeeringSubnet.
   * It's an ip with format ipPrefix/length where address part of ipPrefix is 0.
   */
  peeringSubnet: string;
  /**
   * PeerIp.
   * It's an ip with just an ipAddress format without mask.
   */
  peerIp: string;
  /**
   * CloudIp.
   * It's an ip with just an ipAddress format without mask.
   */
  cloudIp: string;
  /**
   * PeerBgpAsn.
   * PeerAsn excluding rfc5398 (excluding 64496 - 64511 and 65536 - 65551).
   */
  peerBgpAsn: number;
  /** CloudBgpAsn. */
  cloudBgpAsn: number;
  /**
   * PeerBgpMd5Key.
   * Optional.
   */
  peerBgpMd5Key: string;
}

const basePeering: object = {
  $type: "yandex.cloud.cic.v1.Peering",
  peeringSubnet: "",
  peerIp: "",
  cloudIp: "",
  peerBgpAsn: 0,
  cloudBgpAsn: 0,
  peerBgpMd5Key: "",
};

export const Peering = {
  $type: "yandex.cloud.cic.v1.Peering" as const,

  encode(
    message: Peering,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.peeringSubnet !== "") {
      writer.uint32(10).string(message.peeringSubnet);
    }
    if (message.peerIp !== "") {
      writer.uint32(18).string(message.peerIp);
    }
    if (message.cloudIp !== "") {
      writer.uint32(26).string(message.cloudIp);
    }
    if (message.peerBgpAsn !== 0) {
      writer.uint32(32).int64(message.peerBgpAsn);
    }
    if (message.cloudBgpAsn !== 0) {
      writer.uint32(40).int64(message.cloudBgpAsn);
    }
    if (message.peerBgpMd5Key !== "") {
      writer.uint32(50).string(message.peerBgpMd5Key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peering {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeering } as Peering;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peeringSubnet = reader.string();
          break;
        case 2:
          message.peerIp = reader.string();
          break;
        case 3:
          message.cloudIp = reader.string();
          break;
        case 4:
          message.peerBgpAsn = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.cloudBgpAsn = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.peerBgpMd5Key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Peering {
    const message = { ...basePeering } as Peering;
    message.peeringSubnet =
      object.peeringSubnet !== undefined && object.peeringSubnet !== null
        ? String(object.peeringSubnet)
        : "";
    message.peerIp =
      object.peerIp !== undefined && object.peerIp !== null
        ? String(object.peerIp)
        : "";
    message.cloudIp =
      object.cloudIp !== undefined && object.cloudIp !== null
        ? String(object.cloudIp)
        : "";
    message.peerBgpAsn =
      object.peerBgpAsn !== undefined && object.peerBgpAsn !== null
        ? Number(object.peerBgpAsn)
        : 0;
    message.cloudBgpAsn =
      object.cloudBgpAsn !== undefined && object.cloudBgpAsn !== null
        ? Number(object.cloudBgpAsn)
        : 0;
    message.peerBgpMd5Key =
      object.peerBgpMd5Key !== undefined && object.peerBgpMd5Key !== null
        ? String(object.peerBgpMd5Key)
        : "";
    return message;
  },

  toJSON(message: Peering): unknown {
    const obj: any = {};
    message.peeringSubnet !== undefined &&
      (obj.peeringSubnet = message.peeringSubnet);
    message.peerIp !== undefined && (obj.peerIp = message.peerIp);
    message.cloudIp !== undefined && (obj.cloudIp = message.cloudIp);
    message.peerBgpAsn !== undefined &&
      (obj.peerBgpAsn = Math.round(message.peerBgpAsn));
    message.cloudBgpAsn !== undefined &&
      (obj.cloudBgpAsn = Math.round(message.cloudBgpAsn));
    message.peerBgpMd5Key !== undefined &&
      (obj.peerBgpMd5Key = message.peerBgpMd5Key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Peering>, I>>(object: I): Peering {
    const message = { ...basePeering } as Peering;
    message.peeringSubnet = object.peeringSubnet ?? "";
    message.peerIp = object.peerIp ?? "";
    message.cloudIp = object.cloudIp ?? "";
    message.peerBgpAsn = object.peerBgpAsn ?? 0;
    message.cloudBgpAsn = object.cloudBgpAsn ?? 0;
    message.peerBgpMd5Key = object.peerBgpMd5Key ?? "";
    return message;
  },
};

messageTypeRegistry.set(Peering.$type, Peering);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
