/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.searchindex';

/** Represents a file that has been indexed within a search index. */
export interface SearchIndexFile {
    /** Unique identifier of the file that was used for indexing. */
    id: string;
    /** ID of the search index that contains this file. */
    searchIndexId: string;
    /** Identifier of the subject who created the file in the search index. */
    createdBy: string;
    /** Timestamp representing when the file was created. */
    createdAt?: Date;
}

const baseSearchIndexFile: object = { id: '', searchIndexId: '', createdBy: '' };

export const SearchIndexFile = {
    encode(message: SearchIndexFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.searchIndexId !== '') {
            writer.uint32(18).string(message.searchIndexId);
        }
        if (message.createdBy !== '') {
            writer.uint32(26).string(message.createdBy);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SearchIndexFile {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSearchIndexFile } as SearchIndexFile;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.searchIndexId = reader.string();
                    break;
                case 3:
                    message.createdBy = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SearchIndexFile {
        const message = { ...baseSearchIndexFile } as SearchIndexFile;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.searchIndexId =
            object.searchIndexId !== undefined && object.searchIndexId !== null
                ? String(object.searchIndexId)
                : '';
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: SearchIndexFile): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.searchIndexId !== undefined && (obj.searchIndexId = message.searchIndexId);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SearchIndexFile>, I>>(object: I): SearchIndexFile {
        const message = { ...baseSearchIndexFile } as SearchIndexFile;
        message.id = object.id ?? '';
        message.searchIndexId = object.searchIndexId ?? '';
        message.createdBy = object.createdBy ?? '';
        message.createdAt = object.createdAt ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
