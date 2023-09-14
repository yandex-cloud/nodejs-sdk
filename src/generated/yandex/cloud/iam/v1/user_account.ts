/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.iam.v1";

/** Currently represents only [Yandex account](/docs/iam/concepts/#passport). */
export interface UserAccount {
  $type: "yandex.cloud.iam.v1.UserAccount";
  /** ID of the user account. */
  id: string;
  /** A YandexPassportUserAccount resource. */
  yandexPassportUserAccount?: YandexPassportUserAccount | undefined;
  /** A SAML federated user. */
  samlUserAccount?: SamlUserAccount | undefined;
}

/**
 * A YandexPassportUserAccount resource.
 * For more information, see [Yandex account](/docs/iam/concepts/#passport).
 */
export interface YandexPassportUserAccount {
  $type: "yandex.cloud.iam.v1.YandexPassportUserAccount";
  /** Login of the Yandex user account. */
  login: string;
  /** Default email of the Yandex user account. */
  defaultEmail: string;
}

/**
 * A SAML federated user.
 * For more information, see [federations](/docs/iam/concepts/federations).
 */
export interface SamlUserAccount {
  $type: "yandex.cloud.iam.v1.SamlUserAccount";
  /** ID of the federation that the federation belongs to. */
  federationId: string;
  /**
   * Name Id of the SAML federated user.
   * The name is unique within the federation. 1-256 characters long.
   */
  nameId: string;
  /** Additional attributes of the SAML federated user. */
  attributes: { [key: string]: SamlUserAccount_Attribute };
}

export interface SamlUserAccount_Attribute {
  $type: "yandex.cloud.iam.v1.SamlUserAccount.Attribute";
  value: string[];
}

export interface SamlUserAccount_AttributesEntry {
  $type: "yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry";
  key: string;
  value?: SamlUserAccount_Attribute;
}

const baseUserAccount: object = {
  $type: "yandex.cloud.iam.v1.UserAccount",
  id: "",
};

export const UserAccount = {
  $type: "yandex.cloud.iam.v1.UserAccount" as const,

  encode(
    message: UserAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.yandexPassportUserAccount !== undefined) {
      YandexPassportUserAccount.encode(
        message.yandexPassportUserAccount,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.samlUserAccount !== undefined) {
      SamlUserAccount.encode(
        message.samlUserAccount,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserAccount } as UserAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.yandexPassportUserAccount = YandexPassportUserAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.samlUserAccount = SamlUserAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserAccount {
    const message = { ...baseUserAccount } as UserAccount;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.yandexPassportUserAccount =
      object.yandexPassportUserAccount !== undefined &&
      object.yandexPassportUserAccount !== null
        ? YandexPassportUserAccount.fromJSON(object.yandexPassportUserAccount)
        : undefined;
    message.samlUserAccount =
      object.samlUserAccount !== undefined && object.samlUserAccount !== null
        ? SamlUserAccount.fromJSON(object.samlUserAccount)
        : undefined;
    return message;
  },

  toJSON(message: UserAccount): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.yandexPassportUserAccount !== undefined &&
      (obj.yandexPassportUserAccount = message.yandexPassportUserAccount
        ? YandexPassportUserAccount.toJSON(message.yandexPassportUserAccount)
        : undefined);
    message.samlUserAccount !== undefined &&
      (obj.samlUserAccount = message.samlUserAccount
        ? SamlUserAccount.toJSON(message.samlUserAccount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserAccount>, I>>(
    object: I
  ): UserAccount {
    const message = { ...baseUserAccount } as UserAccount;
    message.id = object.id ?? "";
    message.yandexPassportUserAccount =
      object.yandexPassportUserAccount !== undefined &&
      object.yandexPassportUserAccount !== null
        ? YandexPassportUserAccount.fromPartial(
            object.yandexPassportUserAccount
          )
        : undefined;
    message.samlUserAccount =
      object.samlUserAccount !== undefined && object.samlUserAccount !== null
        ? SamlUserAccount.fromPartial(object.samlUserAccount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UserAccount.$type, UserAccount);

const baseYandexPassportUserAccount: object = {
  $type: "yandex.cloud.iam.v1.YandexPassportUserAccount",
  login: "",
  defaultEmail: "",
};

export const YandexPassportUserAccount = {
  $type: "yandex.cloud.iam.v1.YandexPassportUserAccount" as const,

  encode(
    message: YandexPassportUserAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    if (message.defaultEmail !== "") {
      writer.uint32(18).string(message.defaultEmail);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): YandexPassportUserAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseYandexPassportUserAccount,
    } as YandexPassportUserAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.login = reader.string();
          break;
        case 2:
          message.defaultEmail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): YandexPassportUserAccount {
    const message = {
      ...baseYandexPassportUserAccount,
    } as YandexPassportUserAccount;
    message.login =
      object.login !== undefined && object.login !== null
        ? String(object.login)
        : "";
    message.defaultEmail =
      object.defaultEmail !== undefined && object.defaultEmail !== null
        ? String(object.defaultEmail)
        : "";
    return message;
  },

  toJSON(message: YandexPassportUserAccount): unknown {
    const obj: any = {};
    message.login !== undefined && (obj.login = message.login);
    message.defaultEmail !== undefined &&
      (obj.defaultEmail = message.defaultEmail);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<YandexPassportUserAccount>, I>>(
    object: I
  ): YandexPassportUserAccount {
    const message = {
      ...baseYandexPassportUserAccount,
    } as YandexPassportUserAccount;
    message.login = object.login ?? "";
    message.defaultEmail = object.defaultEmail ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  YandexPassportUserAccount.$type,
  YandexPassportUserAccount
);

const baseSamlUserAccount: object = {
  $type: "yandex.cloud.iam.v1.SamlUserAccount",
  federationId: "",
  nameId: "",
};

export const SamlUserAccount = {
  $type: "yandex.cloud.iam.v1.SamlUserAccount" as const,

  encode(
    message: SamlUserAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.nameId !== "") {
      writer.uint32(18).string(message.nameId);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      SamlUserAccount_AttributesEntry.encode(
        {
          $type: "yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SamlUserAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSamlUserAccount } as SamlUserAccount;
    message.attributes = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        case 2:
          message.nameId = reader.string();
          break;
        case 3:
          const entry3 = SamlUserAccount_AttributesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.attributes[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SamlUserAccount {
    const message = { ...baseSamlUserAccount } as SamlUserAccount;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    message.nameId =
      object.nameId !== undefined && object.nameId !== null
        ? String(object.nameId)
        : "";
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{
      [key: string]: SamlUserAccount_Attribute;
    }>((acc, [key, value]) => {
      acc[key] = SamlUserAccount_Attribute.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: SamlUserAccount): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.nameId !== undefined && (obj.nameId = message.nameId);
    obj.attributes = {};
    if (message.attributes) {
      Object.entries(message.attributes).forEach(([k, v]) => {
        obj.attributes[k] = SamlUserAccount_Attribute.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SamlUserAccount>, I>>(
    object: I
  ): SamlUserAccount {
    const message = { ...baseSamlUserAccount } as SamlUserAccount;
    message.federationId = object.federationId ?? "";
    message.nameId = object.nameId ?? "";
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{
      [key: string]: SamlUserAccount_Attribute;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = SamlUserAccount_Attribute.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(SamlUserAccount.$type, SamlUserAccount);

const baseSamlUserAccount_Attribute: object = {
  $type: "yandex.cloud.iam.v1.SamlUserAccount.Attribute",
  value: "",
};

export const SamlUserAccount_Attribute = {
  $type: "yandex.cloud.iam.v1.SamlUserAccount.Attribute" as const,

  encode(
    message: SamlUserAccount_Attribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SamlUserAccount_Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSamlUserAccount_Attribute,
    } as SamlUserAccount_Attribute;
    message.value = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SamlUserAccount_Attribute {
    const message = {
      ...baseSamlUserAccount_Attribute,
    } as SamlUserAccount_Attribute;
    message.value = (object.value ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: SamlUserAccount_Attribute): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SamlUserAccount_Attribute>, I>>(
    object: I
  ): SamlUserAccount_Attribute {
    const message = {
      ...baseSamlUserAccount_Attribute,
    } as SamlUserAccount_Attribute;
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  SamlUserAccount_Attribute.$type,
  SamlUserAccount_Attribute
);

const baseSamlUserAccount_AttributesEntry: object = {
  $type: "yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry",
  key: "",
};

export const SamlUserAccount_AttributesEntry = {
  $type: "yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry" as const,

  encode(
    message: SamlUserAccount_AttributesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SamlUserAccount_Attribute.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SamlUserAccount_AttributesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSamlUserAccount_AttributesEntry,
    } as SamlUserAccount_AttributesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = SamlUserAccount_Attribute.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SamlUserAccount_AttributesEntry {
    const message = {
      ...baseSamlUserAccount_AttributesEntry,
    } as SamlUserAccount_AttributesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? SamlUserAccount_Attribute.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: SamlUserAccount_AttributesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? SamlUserAccount_Attribute.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SamlUserAccount_AttributesEntry>, I>>(
    object: I
  ): SamlUserAccount_AttributesEntry {
    const message = {
      ...baseSamlUserAccount_AttributesEntry,
    } as SamlUserAccount_AttributesEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? SamlUserAccount_Attribute.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  SamlUserAccount_AttributesEntry.$type,
  SamlUserAccount_AttributesEntry
);

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
