/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.cloudapps.workload.v1';

export interface CloudApplication {
    /** Application Identifier */
    id: string;
    /** Application Status */
    status: CloudApplication_Status;
    /** Application billing info */
    billing?: CloudApplication_Billing;
}

export enum CloudApplication_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROCESSING - Application under deploying / updating /deleting */
    PROCESSING = 1,
    /** DEPLOYED - Application successfully deployed to YC */
    DEPLOYED = 2,
    /** FAILED - Application failed to deploy */
    FAILED = 3,
    UNRECOGNIZED = -1,
}

export function cloudApplication_StatusFromJSON(object: any): CloudApplication_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return CloudApplication_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROCESSING':
            return CloudApplication_Status.PROCESSING;
        case 2:
        case 'DEPLOYED':
            return CloudApplication_Status.DEPLOYED;
        case 3:
        case 'FAILED':
            return CloudApplication_Status.FAILED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CloudApplication_Status.UNRECOGNIZED;
    }
}

export function cloudApplication_StatusToJSON(object: CloudApplication_Status): string {
    switch (object) {
        case CloudApplication_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case CloudApplication_Status.PROCESSING:
            return 'PROCESSING';
        case CloudApplication_Status.DEPLOYED:
            return 'DEPLOYED';
        case CloudApplication_Status.FAILED:
            return 'FAILED';
        default:
            return 'UNKNOWN';
    }
}

export interface CloudApplication_Billing {
    /** Type of application billing */
    type: CloudApplication_Billing_BillingType;
    /** Subscriptions bounded to cloud application */
    subscriptions: CloudApplication_Billing_Subscription[];
}

export enum CloudApplication_Billing_BillingType {
    BILLING_TYPE_UNSPECIFIED = 0,
    /** PAY_AS_YOU_GO - User pays for application usage time */
    PAY_AS_YOU_GO = 1,
    /** SUBSCRIPTION - User bought a subscription */
    SUBSCRIPTION = 2,
    UNRECOGNIZED = -1,
}

export function cloudApplication_Billing_BillingTypeFromJSON(
    object: any,
): CloudApplication_Billing_BillingType {
    switch (object) {
        case 0:
        case 'BILLING_TYPE_UNSPECIFIED':
            return CloudApplication_Billing_BillingType.BILLING_TYPE_UNSPECIFIED;
        case 1:
        case 'PAY_AS_YOU_GO':
            return CloudApplication_Billing_BillingType.PAY_AS_YOU_GO;
        case 2:
        case 'SUBSCRIPTION':
            return CloudApplication_Billing_BillingType.SUBSCRIPTION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CloudApplication_Billing_BillingType.UNRECOGNIZED;
    }
}

export function cloudApplication_Billing_BillingTypeToJSON(
    object: CloudApplication_Billing_BillingType,
): string {
    switch (object) {
        case CloudApplication_Billing_BillingType.BILLING_TYPE_UNSPECIFIED:
            return 'BILLING_TYPE_UNSPECIFIED';
        case CloudApplication_Billing_BillingType.PAY_AS_YOU_GO:
            return 'PAY_AS_YOU_GO';
        case CloudApplication_Billing_BillingType.SUBSCRIPTION:
            return 'SUBSCRIPTION';
        default:
            return 'UNKNOWN';
    }
}

export interface CloudApplication_Billing_Subscription {
    /** Identifier of subscription instance */
    instanceId: string;
    /** Subscription template identifier */
    templateId: string;
}

const baseCloudApplication: object = { id: '', status: 0 };

export const CloudApplication = {
    encode(message: CloudApplication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.billing !== undefined) {
            CloudApplication_Billing.encode(message.billing, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CloudApplication {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCloudApplication } as CloudApplication;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.int32() as any;
                    break;
                case 3:
                    message.billing = CloudApplication_Billing.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloudApplication {
        const message = { ...baseCloudApplication } as CloudApplication;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? cloudApplication_StatusFromJSON(object.status)
                : 0;
        message.billing =
            object.billing !== undefined && object.billing !== null
                ? CloudApplication_Billing.fromJSON(object.billing)
                : undefined;
        return message;
    },

    toJSON(message: CloudApplication): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined &&
            (obj.status = cloudApplication_StatusToJSON(message.status));
        message.billing !== undefined &&
            (obj.billing = message.billing
                ? CloudApplication_Billing.toJSON(message.billing)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CloudApplication>, I>>(object: I): CloudApplication {
        const message = { ...baseCloudApplication } as CloudApplication;
        message.id = object.id ?? '';
        message.status = object.status ?? 0;
        message.billing =
            object.billing !== undefined && object.billing !== null
                ? CloudApplication_Billing.fromPartial(object.billing)
                : undefined;
        return message;
    },
};

const baseCloudApplication_Billing: object = { type: 0 };

export const CloudApplication_Billing = {
    encode(
        message: CloudApplication_Billing,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        for (const v of message.subscriptions) {
            CloudApplication_Billing_Subscription.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CloudApplication_Billing {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCloudApplication_Billing } as CloudApplication_Billing;
        message.subscriptions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.subscriptions.push(
                        CloudApplication_Billing_Subscription.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloudApplication_Billing {
        const message = { ...baseCloudApplication_Billing } as CloudApplication_Billing;
        message.type =
            object.type !== undefined && object.type !== null
                ? cloudApplication_Billing_BillingTypeFromJSON(object.type)
                : 0;
        message.subscriptions = (object.subscriptions ?? []).map((e: any) =>
            CloudApplication_Billing_Subscription.fromJSON(e),
        );
        return message;
    },

    toJSON(message: CloudApplication_Billing): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = cloudApplication_Billing_BillingTypeToJSON(message.type));
        if (message.subscriptions) {
            obj.subscriptions = message.subscriptions.map((e) =>
                e ? CloudApplication_Billing_Subscription.toJSON(e) : undefined,
            );
        } else {
            obj.subscriptions = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CloudApplication_Billing>, I>>(
        object: I,
    ): CloudApplication_Billing {
        const message = { ...baseCloudApplication_Billing } as CloudApplication_Billing;
        message.type = object.type ?? 0;
        message.subscriptions =
            object.subscriptions?.map((e) =>
                CloudApplication_Billing_Subscription.fromPartial(e),
            ) || [];
        return message;
    },
};

const baseCloudApplication_Billing_Subscription: object = { instanceId: '', templateId: '' };

export const CloudApplication_Billing_Subscription = {
    encode(
        message: CloudApplication_Billing_Subscription,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.templateId !== '') {
            writer.uint32(18).string(message.templateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CloudApplication_Billing_Subscription {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCloudApplication_Billing_Subscription,
        } as CloudApplication_Billing_Subscription;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.templateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloudApplication_Billing_Subscription {
        const message = {
            ...baseCloudApplication_Billing_Subscription,
        } as CloudApplication_Billing_Subscription;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        message.templateId =
            object.templateId !== undefined && object.templateId !== null
                ? String(object.templateId)
                : '';
        return message;
    },

    toJSON(message: CloudApplication_Billing_Subscription): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.templateId !== undefined && (obj.templateId = message.templateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CloudApplication_Billing_Subscription>, I>>(
        object: I,
    ): CloudApplication_Billing_Subscription {
        const message = {
            ...baseCloudApplication_Billing_Subscription,
        } as CloudApplication_Billing_Subscription;
        message.instanceId = object.instanceId ?? '';
        message.templateId = object.templateId ?? '';
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
