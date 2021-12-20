/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.billing.v1";

/** A Customer resource. */
export interface Customer {
  $type: "yandex.cloud.billing.v1.Customer";
  /** ID of the customer. */
  id: string;
  /** ID of the [yandex.cloud.billing.v1.BillingAccount] assigned to the customer. */
  billingAccountId: string;
}

/** Person of the customer. Contains legal information. */
export interface CustomerPerson {
  $type: "yandex.cloud.billing.v1.CustomerPerson";
  /** Name of the person. */
  name: string;
  /** Long name of the person. */
  longname: string;
  /** Phone of the person. */
  phone: string;
  /** Email of the person. */
  email: string;
  /** Post code of the person. */
  postCode: string;
  /** Post address of the person. */
  postAddress: string;
  /** Legal address of the person. */
  legalAddress: string;
  /** Tax identification number of the person. */
  tin: string;
}

const baseCustomer: object = {
  $type: "yandex.cloud.billing.v1.Customer",
  id: "",
  billingAccountId: "",
};

export const Customer = {
  $type: "yandex.cloud.billing.v1.Customer" as const,

  encode(
    message: Customer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.billingAccountId !== "") {
      writer.uint32(18).string(message.billingAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomer } as Customer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.billingAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Customer {
    const message = { ...baseCustomer } as Customer;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.billingAccountId =
      object.billingAccountId !== undefined && object.billingAccountId !== null
        ? String(object.billingAccountId)
        : "";
    return message;
  },

  toJSON(message: Customer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.billingAccountId !== undefined &&
      (obj.billingAccountId = message.billingAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Customer>, I>>(object: I): Customer {
    const message = { ...baseCustomer } as Customer;
    message.id = object.id ?? "";
    message.billingAccountId = object.billingAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Customer.$type, Customer);

const baseCustomerPerson: object = {
  $type: "yandex.cloud.billing.v1.CustomerPerson",
  name: "",
  longname: "",
  phone: "",
  email: "",
  postCode: "",
  postAddress: "",
  legalAddress: "",
  tin: "",
};

export const CustomerPerson = {
  $type: "yandex.cloud.billing.v1.CustomerPerson" as const,

  encode(
    message: CustomerPerson,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.longname !== "") {
      writer.uint32(18).string(message.longname);
    }
    if (message.phone !== "") {
      writer.uint32(26).string(message.phone);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.postCode !== "") {
      writer.uint32(42).string(message.postCode);
    }
    if (message.postAddress !== "") {
      writer.uint32(50).string(message.postAddress);
    }
    if (message.legalAddress !== "") {
      writer.uint32(58).string(message.legalAddress);
    }
    if (message.tin !== "") {
      writer.uint32(66).string(message.tin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerPerson {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomerPerson } as CustomerPerson;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.longname = reader.string();
          break;
        case 3:
          message.phone = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.postCode = reader.string();
          break;
        case 6:
          message.postAddress = reader.string();
          break;
        case 7:
          message.legalAddress = reader.string();
          break;
        case 8:
          message.tin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CustomerPerson {
    const message = { ...baseCustomerPerson } as CustomerPerson;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.longname =
      object.longname !== undefined && object.longname !== null
        ? String(object.longname)
        : "";
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? String(object.phone)
        : "";
    message.email =
      object.email !== undefined && object.email !== null
        ? String(object.email)
        : "";
    message.postCode =
      object.postCode !== undefined && object.postCode !== null
        ? String(object.postCode)
        : "";
    message.postAddress =
      object.postAddress !== undefined && object.postAddress !== null
        ? String(object.postAddress)
        : "";
    message.legalAddress =
      object.legalAddress !== undefined && object.legalAddress !== null
        ? String(object.legalAddress)
        : "";
    message.tin =
      object.tin !== undefined && object.tin !== null ? String(object.tin) : "";
    return message;
  },

  toJSON(message: CustomerPerson): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.longname !== undefined && (obj.longname = message.longname);
    message.phone !== undefined && (obj.phone = message.phone);
    message.email !== undefined && (obj.email = message.email);
    message.postCode !== undefined && (obj.postCode = message.postCode);
    message.postAddress !== undefined &&
      (obj.postAddress = message.postAddress);
    message.legalAddress !== undefined &&
      (obj.legalAddress = message.legalAddress);
    message.tin !== undefined && (obj.tin = message.tin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CustomerPerson>, I>>(
    object: I
  ): CustomerPerson {
    const message = { ...baseCustomerPerson } as CustomerPerson;
    message.name = object.name ?? "";
    message.longname = object.longname ?? "";
    message.phone = object.phone ?? "";
    message.email = object.email ?? "";
    message.postCode = object.postCode ?? "";
    message.postAddress = object.postAddress ?? "";
    message.legalAddress = object.legalAddress ?? "";
    message.tin = object.tin ?? "";
    return message;
  },
};

messageTypeRegistry.set(CustomerPerson.$type, CustomerPerson);

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
