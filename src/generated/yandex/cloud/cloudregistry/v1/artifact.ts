/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { DockerContent } from './docker_content';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

/** A Artifact resource. */
export interface Artifact {
    /** Output only. ID of the artifact. */
    id: string;
    /** Path where the artifact is located. */
    path: string;
    /** Name of the artifact. */
    name: string;
    /** Kind of the artifact. */
    kind: Artifact_Kind;
    /** Output only. Status of the artifact. */
    status: Artifact_Status;
    /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Output only. ID of the user or service account who created the artifact. */
    createdBy: string;
    /** Output only. Modification timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    modifiedAt?: Date;
    /** Output only. ID of the user or service account who last modified the artifact. */
    modifiedBy: string;
    /** Key-value properties associated with the artifact. */
    properties: { [key: string]: string };
    /** Content of the artifact. */
    content?: Content;
}

export enum Artifact_Kind {
    KIND_UNSPECIFIED = 0,
    /** FOLDER - Artifact kind is folder. */
    FOLDER = 1,
    /** PACKAGE - Artifact kind is package. */
    PACKAGE = 2,
    /** ARTIFACT - Artifact kind is artifact. */
    ARTIFACT = 3,
    UNRECOGNIZED = -1,
}

export function artifact_KindFromJSON(object: any): Artifact_Kind {
    switch (object) {
        case 0:
        case 'KIND_UNSPECIFIED':
            return Artifact_Kind.KIND_UNSPECIFIED;
        case 1:
        case 'FOLDER':
            return Artifact_Kind.FOLDER;
        case 2:
        case 'PACKAGE':
            return Artifact_Kind.PACKAGE;
        case 3:
        case 'ARTIFACT':
            return Artifact_Kind.ARTIFACT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Artifact_Kind.UNRECOGNIZED;
    }
}

export function artifact_KindToJSON(object: Artifact_Kind): string {
    switch (object) {
        case Artifact_Kind.KIND_UNSPECIFIED:
            return 'KIND_UNSPECIFIED';
        case Artifact_Kind.FOLDER:
            return 'FOLDER';
        case Artifact_Kind.PACKAGE:
            return 'PACKAGE';
        case Artifact_Kind.ARTIFACT:
            return 'ARTIFACT';
        default:
            return 'UNKNOWN';
    }
}

export enum Artifact_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Artifact status is being created. */
    CREATING = 1,
    /** ACTIVE - Artifact status is ready to use. */
    ACTIVE = 2,
    /** DELETING - Artifact status is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function artifact_StatusFromJSON(object: any): Artifact_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Artifact_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Artifact_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Artifact_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Artifact_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Artifact_Status.UNRECOGNIZED;
    }
}

export function artifact_StatusToJSON(object: Artifact_Status): string {
    switch (object) {
        case Artifact_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Artifact_Status.CREATING:
            return 'CREATING';
        case Artifact_Status.ACTIVE:
            return 'ACTIVE';
        case Artifact_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Artifact_PropertiesEntry {
    key: string;
    value: string;
}

/** Content of the artifact, specific to its type. */
export interface Content {
    /** Docker-specific content. */
    docker?: DockerContent | undefined;
}

const baseArtifact: object = {
    id: '',
    path: '',
    name: '',
    kind: 0,
    status: 0,
    createdBy: '',
    modifiedBy: '',
};

export const Artifact: {
    encode(message: Artifact, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Artifact;
    fromJSON(object: any): Artifact;
    toJSON(message: Artifact): unknown;
    fromPartial<I extends Exact<DeepPartial<Artifact>, I>>(object: I): Artifact;
} = {
    encode(message: Artifact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.kind !== 0) {
            writer.uint32(32).int32(message.kind);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(66).string(message.createdBy);
        }
        if (message.modifiedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.modifiedBy !== '') {
            writer.uint32(74).string(message.modifiedBy);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            Artifact_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(82).fork(),
            ).ldelim();
        });
        if (message.content !== undefined) {
            Content.encode(message.content, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Artifact {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseArtifact } as Artifact;
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.kind = reader.int32() as any;
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.modifiedBy = reader.string();
                    break;
                case 10:
                    const entry10 = Artifact_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        message.properties[entry10.key] = entry10.value;
                    }
                    break;
                case 11:
                    message.content = Content.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Artifact {
        const message = { ...baseArtifact } as Artifact;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.kind =
            object.kind !== undefined && object.kind !== null
                ? artifact_KindFromJSON(object.kind)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? artifact_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.modifiedBy =
            object.modifiedBy !== undefined && object.modifiedBy !== null
                ? String(object.modifiedBy)
                : '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.content =
            object.content !== undefined && object.content !== null
                ? Content.fromJSON(object.content)
                : undefined;
        return message;
    },

    toJSON(message: Artifact): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.path !== undefined && (obj.path = message.path);
        message.name !== undefined && (obj.name = message.name);
        message.kind !== undefined && (obj.kind = artifact_KindToJSON(message.kind));
        message.status !== undefined && (obj.status = artifact_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.modifiedAt !== undefined && (obj.modifiedAt = message.modifiedAt.toISOString());
        message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.content !== undefined &&
            (obj.content = message.content ? Content.toJSON(message.content) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Artifact>, I>>(object: I): Artifact {
        const message = { ...baseArtifact } as Artifact;
        message.id = object.id ?? '';
        message.path = object.path ?? '';
        message.name = object.name ?? '';
        message.kind = object.kind ?? 0;
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.createdBy = object.createdBy ?? '';
        message.modifiedAt = object.modifiedAt ?? undefined;
        message.modifiedBy = object.modifiedBy ?? '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.content =
            object.content !== undefined && object.content !== null
                ? Content.fromPartial(object.content)
                : undefined;
        return message;
    },
};

const baseArtifact_PropertiesEntry: object = { key: '', value: '' };

export const Artifact_PropertiesEntry: {
    encode(message: Artifact_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Artifact_PropertiesEntry;
    fromJSON(object: any): Artifact_PropertiesEntry;
    toJSON(message: Artifact_PropertiesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Artifact_PropertiesEntry>, I>>(object: I): Artifact_PropertiesEntry;
} = {
    encode(
        message: Artifact_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Artifact_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseArtifact_PropertiesEntry } as Artifact_PropertiesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Artifact_PropertiesEntry {
        const message = { ...baseArtifact_PropertiesEntry } as Artifact_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Artifact_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Artifact_PropertiesEntry>, I>>(
        object: I,
    ): Artifact_PropertiesEntry {
        const message = { ...baseArtifact_PropertiesEntry } as Artifact_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseContent: object = {};

export const Content: {
    encode(message: Content, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Content;
    fromJSON(object: any): Content;
    toJSON(message: Content): unknown;
    fromPartial<I extends Exact<DeepPartial<Content>, I>>(object: I): Content;
} = {
    encode(message: Content, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.docker !== undefined) {
            DockerContent.encode(message.docker, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Content {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContent } as Content;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.docker = DockerContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Content {
        const message = { ...baseContent } as Content;
        message.docker =
            object.docker !== undefined && object.docker !== null
                ? DockerContent.fromJSON(object.docker)
                : undefined;
        return message;
    },

    toJSON(message: Content): unknown {
        const obj: any = {};
        message.docker !== undefined &&
            (obj.docker = message.docker ? DockerContent.toJSON(message.docker) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Content>, I>>(object: I): Content {
        const message = { ...baseContent } as Content;
        message.docker =
            object.docker !== undefined && object.docker !== null
                ? DockerContent.fromPartial(object.docker)
                : undefined;
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
