/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { StringValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.speechsense.v1.analysis';

export interface Points {
    $type: 'yandex.cloud.speechsense.v1.analysis.Points';
    quiz: Quiz[];
}

export interface Quiz {
    $type: 'yandex.cloud.speechsense.v1.analysis.Quiz';
    request: string;
    response?: string;
    id: string;
}

const basePoints: object = { $type: 'yandex.cloud.speechsense.v1.analysis.Points' };

export const Points = {
    $type: 'yandex.cloud.speechsense.v1.analysis.Points' as const,

    encode(message: Points, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.quiz) {
            Quiz.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Points {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePoints } as Points;
        message.quiz = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quiz.push(Quiz.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Points {
        const message = { ...basePoints } as Points;
        message.quiz = (object.quiz ?? []).map((e: any) => Quiz.fromJSON(e));
        return message;
    },

    toJSON(message: Points): unknown {
        const obj: any = {};
        if (message.quiz) {
            obj.quiz = message.quiz.map((e) => (e ? Quiz.toJSON(e) : undefined));
        } else {
            obj.quiz = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Points>, I>>(object: I): Points {
        const message = { ...basePoints } as Points;
        message.quiz = object.quiz?.map((e) => Quiz.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(Points.$type, Points);

const baseQuiz: object = {
    $type: 'yandex.cloud.speechsense.v1.analysis.Quiz',
    request: '',
    id: '',
};

export const Quiz = {
    $type: 'yandex.cloud.speechsense.v1.analysis.Quiz' as const,

    encode(message: Quiz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.request !== '') {
            writer.uint32(10).string(message.request);
        }
        if (message.response !== undefined) {
            StringValue.encode(
                { $type: 'google.protobuf.StringValue', value: message.response! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.id !== '') {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Quiz {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuiz } as Quiz;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.request = reader.string();
                    break;
                case 2:
                    message.response = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Quiz {
        const message = { ...baseQuiz } as Quiz;
        message.request =
            object.request !== undefined && object.request !== null ? String(object.request) : '';
        message.response =
            object.response !== undefined && object.response !== null
                ? String(object.response)
                : undefined;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: Quiz): unknown {
        const obj: any = {};
        message.request !== undefined && (obj.request = message.request);
        message.response !== undefined && (obj.response = message.response);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Quiz>, I>>(object: I): Quiz {
        const message = { ...baseQuiz } as Quiz;
        message.request = object.request ?? '';
        message.response = object.response ?? undefined;
        message.id = object.id ?? '';
        return message;
    },
};

messageTypeRegistry.set(Quiz.$type, Quiz);

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
