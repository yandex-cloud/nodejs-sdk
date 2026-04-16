/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.iam.v1';

/** An OauthClient resource. */
export interface OAuthClient {
    /** ID of the oauth client. */
    id: string;
    /** Name for the oauth client. */
    name: string;
    /** List of redirect uries allowed for the oauth client. */
    redirectUris: string[];
    /** List of oauth scopes requested by the oauth client. */
    scopes: string[];
    /** ID of the folder oauth client belongs to. */
    folderId: string;
    /** Current status of the oauth client. */
    status: OAuthClient_Status;
}

export enum OAuthClient_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - OAuth client is being created. */
    CREATING = 1,
    /** ACTIVE - OAuth client is active. */
    ACTIVE = 2,
    /** DELETING - OAuth client is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function oAuthClient_StatusFromJSON(object: any): OAuthClient_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return OAuthClient_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return OAuthClient_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return OAuthClient_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return OAuthClient_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OAuthClient_Status.UNRECOGNIZED;
    }
}

export function oAuthClient_StatusToJSON(object: OAuthClient_Status): string {
    switch (object) {
        case OAuthClient_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case OAuthClient_Status.CREATING:
            return 'CREATING';
        case OAuthClient_Status.ACTIVE:
            return 'ACTIVE';
        case OAuthClient_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

const baseOAuthClient: object = {
    id: '',
    name: '',
    redirectUris: '',
    scopes: '',
    folderId: '',
    status: 0,
};

export const OAuthClient: {
    encode(message: OAuthClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthClient;
    fromJSON(object: any): OAuthClient;
    toJSON(message: OAuthClient): unknown;
    fromPartial<I extends Exact<DeepPartial<OAuthClient>, I>>(object: I): OAuthClient;
} = {
    encode(message: OAuthClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.redirectUris) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.scopes) {
            writer.uint32(34).string(v!);
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthClient {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOAuthClient } as OAuthClient;
        message.redirectUris = [];
        message.scopes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.redirectUris.push(reader.string());
                    break;
                case 4:
                    message.scopes.push(reader.string());
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OAuthClient {
        const message = { ...baseOAuthClient } as OAuthClient;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.redirectUris = (object.redirectUris ?? []).map((e: any) => String(e));
        message.scopes = (object.scopes ?? []).map((e: any) => String(e));
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? oAuthClient_StatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: OAuthClient): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        if (message.redirectUris) {
            obj.redirectUris = message.redirectUris.map((e) => e);
        } else {
            obj.redirectUris = [];
        }
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        } else {
            obj.scopes = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.status !== undefined && (obj.status = oAuthClient_StatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OAuthClient>, I>>(object: I): OAuthClient {
        const message = { ...baseOAuthClient } as OAuthClient;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.redirectUris = object.redirectUris?.map((e) => e) || [];
        message.scopes = object.scopes?.map((e) => e) || [];
        message.folderId = object.folderId ?? '';
        message.status = object.status ?? 0;
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
