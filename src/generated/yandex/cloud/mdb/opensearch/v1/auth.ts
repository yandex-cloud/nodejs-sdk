/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

export interface AuthSettings {
  $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings";
  /** SAML settings */
  saml?: SAMLSettings;
}

export interface SAMLSettings {
  $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings";
  enabled: boolean;
  /** Required. The entity ID of your IdP. */
  idpEntityId: string;
  /** Required. The SAML 2.0 metadata file of your IdP. */
  idpMetadataFile: Buffer;
  /** Required. The entity ID of the service provider. */
  spEntityId: string;
  /** Required. The OpenSearch Dashboards base URL. */
  dashboardsUrl: string;
  /** Optional. The attribute in the SAML response where the roles are stored. If not configured, no roles are used. */
  rolesKey: string;
  /** Optional. The attribute in the SAML response where the subject is stored. If not configured, the NameID attribute is used. */
  subjectKey: string;
}

const baseAuthSettings: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings",
};

export const AuthSettings = {
  $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings" as const,

  encode(
    message: AuthSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.saml !== undefined) {
      SAMLSettings.encode(message.saml, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthSettings } as AuthSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.saml = SAMLSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthSettings {
    const message = { ...baseAuthSettings } as AuthSettings;
    message.saml =
      object.saml !== undefined && object.saml !== null
        ? SAMLSettings.fromJSON(object.saml)
        : undefined;
    return message;
  },

  toJSON(message: AuthSettings): unknown {
    const obj: any = {};
    message.saml !== undefined &&
      (obj.saml = message.saml ? SAMLSettings.toJSON(message.saml) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthSettings>, I>>(
    object: I
  ): AuthSettings {
    const message = { ...baseAuthSettings } as AuthSettings;
    message.saml =
      object.saml !== undefined && object.saml !== null
        ? SAMLSettings.fromPartial(object.saml)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AuthSettings.$type, AuthSettings);

const baseSAMLSettings: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings",
  enabled: false,
  idpEntityId: "",
  spEntityId: "",
  dashboardsUrl: "",
  rolesKey: "",
  subjectKey: "",
};

export const SAMLSettings = {
  $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings" as const,

  encode(
    message: SAMLSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.idpEntityId !== "") {
      writer.uint32(18).string(message.idpEntityId);
    }
    if (message.idpMetadataFile.length !== 0) {
      writer.uint32(26).bytes(message.idpMetadataFile);
    }
    if (message.spEntityId !== "") {
      writer.uint32(34).string(message.spEntityId);
    }
    if (message.dashboardsUrl !== "") {
      writer.uint32(42).string(message.dashboardsUrl);
    }
    if (message.rolesKey !== "") {
      writer.uint32(50).string(message.rolesKey);
    }
    if (message.subjectKey !== "") {
      writer.uint32(58).string(message.subjectKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SAMLSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSAMLSettings } as SAMLSettings;
    message.idpMetadataFile = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.idpEntityId = reader.string();
          break;
        case 3:
          message.idpMetadataFile = reader.bytes() as Buffer;
          break;
        case 4:
          message.spEntityId = reader.string();
          break;
        case 5:
          message.dashboardsUrl = reader.string();
          break;
        case 6:
          message.rolesKey = reader.string();
          break;
        case 7:
          message.subjectKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SAMLSettings {
    const message = { ...baseSAMLSettings } as SAMLSettings;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.idpEntityId =
      object.idpEntityId !== undefined && object.idpEntityId !== null
        ? String(object.idpEntityId)
        : "";
    message.idpMetadataFile =
      object.idpMetadataFile !== undefined && object.idpMetadataFile !== null
        ? Buffer.from(bytesFromBase64(object.idpMetadataFile))
        : Buffer.alloc(0);
    message.spEntityId =
      object.spEntityId !== undefined && object.spEntityId !== null
        ? String(object.spEntityId)
        : "";
    message.dashboardsUrl =
      object.dashboardsUrl !== undefined && object.dashboardsUrl !== null
        ? String(object.dashboardsUrl)
        : "";
    message.rolesKey =
      object.rolesKey !== undefined && object.rolesKey !== null
        ? String(object.rolesKey)
        : "";
    message.subjectKey =
      object.subjectKey !== undefined && object.subjectKey !== null
        ? String(object.subjectKey)
        : "";
    return message;
  },

  toJSON(message: SAMLSettings): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.idpEntityId !== undefined &&
      (obj.idpEntityId = message.idpEntityId);
    message.idpMetadataFile !== undefined &&
      (obj.idpMetadataFile = base64FromBytes(
        message.idpMetadataFile !== undefined
          ? message.idpMetadataFile
          : Buffer.alloc(0)
      ));
    message.spEntityId !== undefined && (obj.spEntityId = message.spEntityId);
    message.dashboardsUrl !== undefined &&
      (obj.dashboardsUrl = message.dashboardsUrl);
    message.rolesKey !== undefined && (obj.rolesKey = message.rolesKey);
    message.subjectKey !== undefined && (obj.subjectKey = message.subjectKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SAMLSettings>, I>>(
    object: I
  ): SAMLSettings {
    const message = { ...baseSAMLSettings } as SAMLSettings;
    message.enabled = object.enabled ?? false;
    message.idpEntityId = object.idpEntityId ?? "";
    message.idpMetadataFile = object.idpMetadataFile ?? Buffer.alloc(0);
    message.spEntityId = object.spEntityId ?? "";
    message.dashboardsUrl = object.dashboardsUrl ?? "";
    message.rolesKey = object.rolesKey ?? "";
    message.subjectKey = object.subjectKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(SAMLSettings.$type, SAMLSettings);

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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
