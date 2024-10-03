/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AudioSegmentBoundaries } from "../../../../../yandex/cloud/speechsense/v1/analysis/statistics_common";
import { SpeakerStatistics } from "../../../../../yandex/cloud/speechsense/v1/analysis/speaker_statistics";

export const protobufPackage = "yandex.cloud.speechsense.v1.analysis";

export interface ConversationStatistics {
  $type: "yandex.cloud.speechsense.v1.analysis.ConversationStatistics";
  /** Audio segment boundaries */
  conversationBoundaries?: AudioSegmentBoundaries;
  /** Average statistics for each speaker */
  speakerStatistics: SpeakerStatistics[];
}

const baseConversationStatistics: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.ConversationStatistics",
};

export const ConversationStatistics = {
  $type: "yandex.cloud.speechsense.v1.analysis.ConversationStatistics" as const,

  encode(
    message: ConversationStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.conversationBoundaries !== undefined) {
      AudioSegmentBoundaries.encode(
        message.conversationBoundaries,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.speakerStatistics) {
      SpeakerStatistics.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConversationStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConversationStatistics } as ConversationStatistics;
    message.speakerStatistics = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conversationBoundaries = AudioSegmentBoundaries.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.speakerStatistics.push(
            SpeakerStatistics.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConversationStatistics {
    const message = { ...baseConversationStatistics } as ConversationStatistics;
    message.conversationBoundaries =
      object.conversationBoundaries !== undefined &&
      object.conversationBoundaries !== null
        ? AudioSegmentBoundaries.fromJSON(object.conversationBoundaries)
        : undefined;
    message.speakerStatistics = (object.speakerStatistics ?? []).map((e: any) =>
      SpeakerStatistics.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ConversationStatistics): unknown {
    const obj: any = {};
    message.conversationBoundaries !== undefined &&
      (obj.conversationBoundaries = message.conversationBoundaries
        ? AudioSegmentBoundaries.toJSON(message.conversationBoundaries)
        : undefined);
    if (message.speakerStatistics) {
      obj.speakerStatistics = message.speakerStatistics.map((e) =>
        e ? SpeakerStatistics.toJSON(e) : undefined
      );
    } else {
      obj.speakerStatistics = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConversationStatistics>, I>>(
    object: I
  ): ConversationStatistics {
    const message = { ...baseConversationStatistics } as ConversationStatistics;
    message.conversationBoundaries =
      object.conversationBoundaries !== undefined &&
      object.conversationBoundaries !== null
        ? AudioSegmentBoundaries.fromPartial(object.conversationBoundaries)
        : undefined;
    message.speakerStatistics =
      object.speakerStatistics?.map((e) => SpeakerStatistics.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(ConversationStatistics.$type, ConversationStatistics);

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
