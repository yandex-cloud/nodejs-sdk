/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Link } from '../../../../yandex/cloud/monitoring/v3/link';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

export interface LinkItem {
    link?: Link | undefined;
    group?: LinkItem_LinkGroup | undefined;
}

export interface LinkItem_LinkGroup {
    title: string;
    items: LinkItem[];
}

const baseLinkItem: object = {};

export const LinkItem = {
    encode(message: LinkItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.link !== undefined) {
            Link.encode(message.link, writer.uint32(10).fork()).ldelim();
        }
        if (message.group !== undefined) {
            LinkItem_LinkGroup.encode(message.group, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LinkItem {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLinkItem } as LinkItem;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.link = Link.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.group = LinkItem_LinkGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LinkItem {
        const message = { ...baseLinkItem } as LinkItem;
        message.link =
            object.link !== undefined && object.link !== null
                ? Link.fromJSON(object.link)
                : undefined;
        message.group =
            object.group !== undefined && object.group !== null
                ? LinkItem_LinkGroup.fromJSON(object.group)
                : undefined;
        return message;
    },

    toJSON(message: LinkItem): unknown {
        const obj: any = {};
        message.link !== undefined &&
            (obj.link = message.link ? Link.toJSON(message.link) : undefined);
        message.group !== undefined &&
            (obj.group = message.group ? LinkItem_LinkGroup.toJSON(message.group) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LinkItem>, I>>(object: I): LinkItem {
        const message = { ...baseLinkItem } as LinkItem;
        message.link =
            object.link !== undefined && object.link !== null
                ? Link.fromPartial(object.link)
                : undefined;
        message.group =
            object.group !== undefined && object.group !== null
                ? LinkItem_LinkGroup.fromPartial(object.group)
                : undefined;
        return message;
    },
};

const baseLinkItem_LinkGroup: object = { title: '' };

export const LinkItem_LinkGroup = {
    encode(message: LinkItem_LinkGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        for (const v of message.items) {
            LinkItem.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LinkItem_LinkGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLinkItem_LinkGroup } as LinkItem_LinkGroup;
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.items.push(LinkItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LinkItem_LinkGroup {
        const message = { ...baseLinkItem_LinkGroup } as LinkItem_LinkGroup;
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.items = (object.items ?? []).map((e: any) => LinkItem.fromJSON(e));
        return message;
    },

    toJSON(message: LinkItem_LinkGroup): unknown {
        const obj: any = {};
        message.title !== undefined && (obj.title = message.title);
        if (message.items) {
            obj.items = message.items.map((e) => (e ? LinkItem.toJSON(e) : undefined));
        } else {
            obj.items = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LinkItem_LinkGroup>, I>>(
        object: I,
    ): LinkItem_LinkGroup {
        const message = { ...baseLinkItem_LinkGroup } as LinkItem_LinkGroup;
        message.title = object.title ?? '';
        message.items = object.items?.map((e) => LinkItem.fromPartial(e)) || [];
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
