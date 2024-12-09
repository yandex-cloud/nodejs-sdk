/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Transcription } from '../../../../yandex/cloud/speechsense/v1/analysis/transcription';
import { SpeechStatistics } from '../../../../yandex/cloud/speechsense/v1/analysis/speech_statistics';
import { SilenceStatistics } from '../../../../yandex/cloud/speechsense/v1/analysis/silence_statistics';
import { InterruptsStatistics } from '../../../../yandex/cloud/speechsense/v1/analysis/interrupts_statistics';
import { ConversationStatistics } from '../../../../yandex/cloud/speechsense/v1/analysis/conversation_statistics';
import { Points } from '../../../../yandex/cloud/speechsense/v1/analysis/points';
import { TextClassifiers } from '../../../../yandex/cloud/speechsense/v1/analysis/text_classifiers';
import { Summarization } from '../../../../yandex/cloud/speechsense/v1/analysis/summarization';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.speechsense.v1';

/** connection field type */
export enum FieldType {
    FIELD_TYPE_UNSPECIFIED = 0,
    FIELD_TYPE_STRING = 1,
    FIELD_TYPE_NUMBER = 2,
    FIELD_TYPE_DECIMAL = 3,
    FIELD_TYPE_BOOLEAN = 4,
    FIELD_TYPE_DATE = 5,
    FIELD_TYPE_JSON = 6,
    UNRECOGNIZED = -1,
}

export function fieldTypeFromJSON(object: any): FieldType {
    switch (object) {
        case 0:
        case 'FIELD_TYPE_UNSPECIFIED':
            return FieldType.FIELD_TYPE_UNSPECIFIED;
        case 1:
        case 'FIELD_TYPE_STRING':
            return FieldType.FIELD_TYPE_STRING;
        case 2:
        case 'FIELD_TYPE_NUMBER':
            return FieldType.FIELD_TYPE_NUMBER;
        case 3:
        case 'FIELD_TYPE_DECIMAL':
            return FieldType.FIELD_TYPE_DECIMAL;
        case 4:
        case 'FIELD_TYPE_BOOLEAN':
            return FieldType.FIELD_TYPE_BOOLEAN;
        case 5:
        case 'FIELD_TYPE_DATE':
            return FieldType.FIELD_TYPE_DATE;
        case 6:
        case 'FIELD_TYPE_JSON':
            return FieldType.FIELD_TYPE_JSON;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FieldType.UNRECOGNIZED;
    }
}

export function fieldTypeToJSON(object: FieldType): string {
    switch (object) {
        case FieldType.FIELD_TYPE_UNSPECIFIED:
            return 'FIELD_TYPE_UNSPECIFIED';
        case FieldType.FIELD_TYPE_STRING:
            return 'FIELD_TYPE_STRING';
        case FieldType.FIELD_TYPE_NUMBER:
            return 'FIELD_TYPE_NUMBER';
        case FieldType.FIELD_TYPE_DECIMAL:
            return 'FIELD_TYPE_DECIMAL';
        case FieldType.FIELD_TYPE_BOOLEAN:
            return 'FIELD_TYPE_BOOLEAN';
        case FieldType.FIELD_TYPE_DATE:
            return 'FIELD_TYPE_DATE';
        case FieldType.FIELD_TYPE_JSON:
            return 'FIELD_TYPE_JSON';
        default:
            return 'UNKNOWN';
    }
}

export enum ProcessingState {
    PROCESSING_STATE_UNSPECIFIED = 0,
    PROCESSING_STATE_NOT_STARTED = 1,
    PROCESSING_STATE_PROCESSING = 2,
    PROCESSING_STATE_SUCCESS = 3,
    PROCESSING_STATE_FAILED = 4,
    UNRECOGNIZED = -1,
}

export function processingStateFromJSON(object: any): ProcessingState {
    switch (object) {
        case 0:
        case 'PROCESSING_STATE_UNSPECIFIED':
            return ProcessingState.PROCESSING_STATE_UNSPECIFIED;
        case 1:
        case 'PROCESSING_STATE_NOT_STARTED':
            return ProcessingState.PROCESSING_STATE_NOT_STARTED;
        case 2:
        case 'PROCESSING_STATE_PROCESSING':
            return ProcessingState.PROCESSING_STATE_PROCESSING;
        case 3:
        case 'PROCESSING_STATE_SUCCESS':
            return ProcessingState.PROCESSING_STATE_SUCCESS;
        case 4:
        case 'PROCESSING_STATE_FAILED':
            return ProcessingState.PROCESSING_STATE_FAILED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ProcessingState.UNRECOGNIZED;
    }
}

export function processingStateToJSON(object: ProcessingState): string {
    switch (object) {
        case ProcessingState.PROCESSING_STATE_UNSPECIFIED:
            return 'PROCESSING_STATE_UNSPECIFIED';
        case ProcessingState.PROCESSING_STATE_NOT_STARTED:
            return 'PROCESSING_STATE_NOT_STARTED';
        case ProcessingState.PROCESSING_STATE_PROCESSING:
            return 'PROCESSING_STATE_PROCESSING';
        case ProcessingState.PROCESSING_STATE_SUCCESS:
            return 'PROCESSING_STATE_SUCCESS';
        case ProcessingState.PROCESSING_STATE_FAILED:
            return 'PROCESSING_STATE_FAILED';
        default:
            return 'UNKNOWN';
    }
}

export enum Algorithm {
    ALGORITHM_UNSPECIFIED = 0,
    ALGORITHM_SPEECHKIT = 1,
    ALGORITHM_YGPT = 2,
    ALGORITHM_CLASSIFIER = 3,
    ALGORITHM_SUMMARIZATION = 4,
    ALGORITHM_EMBEDDING = 5,
    ALGORITHM_STATISTICS = 6,
    UNRECOGNIZED = -1,
}

export function algorithmFromJSON(object: any): Algorithm {
    switch (object) {
        case 0:
        case 'ALGORITHM_UNSPECIFIED':
            return Algorithm.ALGORITHM_UNSPECIFIED;
        case 1:
        case 'ALGORITHM_SPEECHKIT':
            return Algorithm.ALGORITHM_SPEECHKIT;
        case 2:
        case 'ALGORITHM_YGPT':
            return Algorithm.ALGORITHM_YGPT;
        case 3:
        case 'ALGORITHM_CLASSIFIER':
            return Algorithm.ALGORITHM_CLASSIFIER;
        case 4:
        case 'ALGORITHM_SUMMARIZATION':
            return Algorithm.ALGORITHM_SUMMARIZATION;
        case 5:
        case 'ALGORITHM_EMBEDDING':
            return Algorithm.ALGORITHM_EMBEDDING;
        case 6:
        case 'ALGORITHM_STATISTICS':
            return Algorithm.ALGORITHM_STATISTICS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Algorithm.UNRECOGNIZED;
    }
}

export function algorithmToJSON(object: Algorithm): string {
    switch (object) {
        case Algorithm.ALGORITHM_UNSPECIFIED:
            return 'ALGORITHM_UNSPECIFIED';
        case Algorithm.ALGORITHM_SPEECHKIT:
            return 'ALGORITHM_SPEECHKIT';
        case Algorithm.ALGORITHM_YGPT:
            return 'ALGORITHM_YGPT';
        case Algorithm.ALGORITHM_CLASSIFIER:
            return 'ALGORITHM_CLASSIFIER';
        case Algorithm.ALGORITHM_SUMMARIZATION:
            return 'ALGORITHM_SUMMARIZATION';
        case Algorithm.ALGORITHM_EMBEDDING:
            return 'ALGORITHM_EMBEDDING';
        case Algorithm.ALGORITHM_STATISTICS:
            return 'ALGORITHM_STATISTICS';
        default:
            return 'UNKNOWN';
    }
}

export interface Talk {
    $type: 'yandex.cloud.speechsense.v1.Talk';
    /** talk id */
    id: string;
    organizationId: string;
    spaceId: string;
    connectionId: string;
    projectIds: string[];
    /** audition info */
    createdBy: string;
    createdAt?: Date;
    modifiedBy: string;
    modifiedAt?: Date;
    /** key-value representation of talk fields with values */
    talkFields: Field[];
    /** various ml analysis results */
    transcription?: Transcription;
    speechStatistics?: SpeechStatistics;
    silenceStatistics?: SilenceStatistics;
    interruptsStatistics?: InterruptsStatistics;
    conversationStatistics?: ConversationStatistics;
    points?: Points;
    textClassifiers?: TextClassifiers;
    summarization?: Summarization;
    talkState?: TalkState;
}

export interface TalkState {
    $type: 'yandex.cloud.speechsense.v1.TalkState';
    processingState: ProcessingState;
    algorithmProcessingInfos: AlgorithmProcessingInfo[];
}

/** connection field value */
export interface Field {
    $type: 'yandex.cloud.speechsense.v1.Field';
    /** name of the field */
    name: string;
    /** field value */
    value: string;
    /** field type */
    type: FieldType;
}

export interface AlgorithmProcessingInfo {
    $type: 'yandex.cloud.speechsense.v1.AlgorithmProcessingInfo';
    algorithm: Algorithm;
    processingState: ProcessingState;
}

const baseTalk: object = {
    $type: 'yandex.cloud.speechsense.v1.Talk',
    id: '',
    organizationId: '',
    spaceId: '',
    connectionId: '',
    projectIds: '',
    createdBy: '',
    modifiedBy: '',
};

export const Talk = {
    $type: 'yandex.cloud.speechsense.v1.Talk' as const,

    encode(message: Talk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.spaceId !== '') {
            writer.uint32(26).string(message.spaceId);
        }
        if (message.connectionId !== '') {
            writer.uint32(34).string(message.connectionId);
        }
        for (const v of message.projectIds) {
            writer.uint32(42).string(v!);
        }
        if (message.createdBy !== '') {
            writer.uint32(50).string(message.createdBy);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.modifiedBy !== '') {
            writer.uint32(66).string(message.modifiedBy);
        }
        if (message.modifiedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.talkFields) {
            Field.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        if (message.transcription !== undefined) {
            Transcription.encode(message.transcription, writer.uint32(90).fork()).ldelim();
        }
        if (message.speechStatistics !== undefined) {
            SpeechStatistics.encode(message.speechStatistics, writer.uint32(98).fork()).ldelim();
        }
        if (message.silenceStatistics !== undefined) {
            SilenceStatistics.encode(message.silenceStatistics, writer.uint32(106).fork()).ldelim();
        }
        if (message.interruptsStatistics !== undefined) {
            InterruptsStatistics.encode(
                message.interruptsStatistics,
                writer.uint32(114).fork(),
            ).ldelim();
        }
        if (message.conversationStatistics !== undefined) {
            ConversationStatistics.encode(
                message.conversationStatistics,
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.points !== undefined) {
            Points.encode(message.points, writer.uint32(130).fork()).ldelim();
        }
        if (message.textClassifiers !== undefined) {
            TextClassifiers.encode(message.textClassifiers, writer.uint32(138).fork()).ldelim();
        }
        if (message.summarization !== undefined) {
            Summarization.encode(message.summarization, writer.uint32(146).fork()).ldelim();
        }
        if (message.talkState !== undefined) {
            TalkState.encode(message.talkState, writer.uint32(154).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Talk {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTalk } as Talk;
        message.projectIds = [];
        message.talkFields = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.spaceId = reader.string();
                    break;
                case 4:
                    message.connectionId = reader.string();
                    break;
                case 5:
                    message.projectIds.push(reader.string());
                    break;
                case 6:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.modifiedBy = reader.string();
                    break;
                case 9:
                    message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.talkFields.push(Field.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.transcription = Transcription.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.speechStatistics = SpeechStatistics.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.silenceStatistics = SilenceStatistics.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.interruptsStatistics = InterruptsStatistics.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 15:
                    message.conversationStatistics = ConversationStatistics.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 16:
                    message.points = Points.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.textClassifiers = TextClassifiers.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.summarization = Summarization.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.talkState = TalkState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Talk {
        const message = { ...baseTalk } as Talk;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.spaceId =
            object.spaceId !== undefined && object.spaceId !== null ? String(object.spaceId) : '';
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.projectIds = (object.projectIds ?? []).map((e: any) => String(e));
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.modifiedBy =
            object.modifiedBy !== undefined && object.modifiedBy !== null
                ? String(object.modifiedBy)
                : '';
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.talkFields = (object.talkFields ?? []).map((e: any) => Field.fromJSON(e));
        message.transcription =
            object.transcription !== undefined && object.transcription !== null
                ? Transcription.fromJSON(object.transcription)
                : undefined;
        message.speechStatistics =
            object.speechStatistics !== undefined && object.speechStatistics !== null
                ? SpeechStatistics.fromJSON(object.speechStatistics)
                : undefined;
        message.silenceStatistics =
            object.silenceStatistics !== undefined && object.silenceStatistics !== null
                ? SilenceStatistics.fromJSON(object.silenceStatistics)
                : undefined;
        message.interruptsStatistics =
            object.interruptsStatistics !== undefined && object.interruptsStatistics !== null
                ? InterruptsStatistics.fromJSON(object.interruptsStatistics)
                : undefined;
        message.conversationStatistics =
            object.conversationStatistics !== undefined && object.conversationStatistics !== null
                ? ConversationStatistics.fromJSON(object.conversationStatistics)
                : undefined;
        message.points =
            object.points !== undefined && object.points !== null
                ? Points.fromJSON(object.points)
                : undefined;
        message.textClassifiers =
            object.textClassifiers !== undefined && object.textClassifiers !== null
                ? TextClassifiers.fromJSON(object.textClassifiers)
                : undefined;
        message.summarization =
            object.summarization !== undefined && object.summarization !== null
                ? Summarization.fromJSON(object.summarization)
                : undefined;
        message.talkState =
            object.talkState !== undefined && object.talkState !== null
                ? TalkState.fromJSON(object.talkState)
                : undefined;
        return message;
    },

    toJSON(message: Talk): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.spaceId !== undefined && (obj.spaceId = message.spaceId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        if (message.projectIds) {
            obj.projectIds = message.projectIds.map((e) => e);
        } else {
            obj.projectIds = [];
        }
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
        message.modifiedAt !== undefined && (obj.modifiedAt = message.modifiedAt.toISOString());
        if (message.talkFields) {
            obj.talkFields = message.talkFields.map((e) => (e ? Field.toJSON(e) : undefined));
        } else {
            obj.talkFields = [];
        }
        message.transcription !== undefined &&
            (obj.transcription = message.transcription
                ? Transcription.toJSON(message.transcription)
                : undefined);
        message.speechStatistics !== undefined &&
            (obj.speechStatistics = message.speechStatistics
                ? SpeechStatistics.toJSON(message.speechStatistics)
                : undefined);
        message.silenceStatistics !== undefined &&
            (obj.silenceStatistics = message.silenceStatistics
                ? SilenceStatistics.toJSON(message.silenceStatistics)
                : undefined);
        message.interruptsStatistics !== undefined &&
            (obj.interruptsStatistics = message.interruptsStatistics
                ? InterruptsStatistics.toJSON(message.interruptsStatistics)
                : undefined);
        message.conversationStatistics !== undefined &&
            (obj.conversationStatistics = message.conversationStatistics
                ? ConversationStatistics.toJSON(message.conversationStatistics)
                : undefined);
        message.points !== undefined &&
            (obj.points = message.points ? Points.toJSON(message.points) : undefined);
        message.textClassifiers !== undefined &&
            (obj.textClassifiers = message.textClassifiers
                ? TextClassifiers.toJSON(message.textClassifiers)
                : undefined);
        message.summarization !== undefined &&
            (obj.summarization = message.summarization
                ? Summarization.toJSON(message.summarization)
                : undefined);
        message.talkState !== undefined &&
            (obj.talkState = message.talkState ? TalkState.toJSON(message.talkState) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Talk>, I>>(object: I): Talk {
        const message = { ...baseTalk } as Talk;
        message.id = object.id ?? '';
        message.organizationId = object.organizationId ?? '';
        message.spaceId = object.spaceId ?? '';
        message.connectionId = object.connectionId ?? '';
        message.projectIds = object.projectIds?.map((e) => e) || [];
        message.createdBy = object.createdBy ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.modifiedBy = object.modifiedBy ?? '';
        message.modifiedAt = object.modifiedAt ?? undefined;
        message.talkFields = object.talkFields?.map((e) => Field.fromPartial(e)) || [];
        message.transcription =
            object.transcription !== undefined && object.transcription !== null
                ? Transcription.fromPartial(object.transcription)
                : undefined;
        message.speechStatistics =
            object.speechStatistics !== undefined && object.speechStatistics !== null
                ? SpeechStatistics.fromPartial(object.speechStatistics)
                : undefined;
        message.silenceStatistics =
            object.silenceStatistics !== undefined && object.silenceStatistics !== null
                ? SilenceStatistics.fromPartial(object.silenceStatistics)
                : undefined;
        message.interruptsStatistics =
            object.interruptsStatistics !== undefined && object.interruptsStatistics !== null
                ? InterruptsStatistics.fromPartial(object.interruptsStatistics)
                : undefined;
        message.conversationStatistics =
            object.conversationStatistics !== undefined && object.conversationStatistics !== null
                ? ConversationStatistics.fromPartial(object.conversationStatistics)
                : undefined;
        message.points =
            object.points !== undefined && object.points !== null
                ? Points.fromPartial(object.points)
                : undefined;
        message.textClassifiers =
            object.textClassifiers !== undefined && object.textClassifiers !== null
                ? TextClassifiers.fromPartial(object.textClassifiers)
                : undefined;
        message.summarization =
            object.summarization !== undefined && object.summarization !== null
                ? Summarization.fromPartial(object.summarization)
                : undefined;
        message.talkState =
            object.talkState !== undefined && object.talkState !== null
                ? TalkState.fromPartial(object.talkState)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Talk.$type, Talk);

const baseTalkState: object = {
    $type: 'yandex.cloud.speechsense.v1.TalkState',
    processingState: 0,
};

export const TalkState = {
    $type: 'yandex.cloud.speechsense.v1.TalkState' as const,

    encode(message: TalkState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.processingState !== 0) {
            writer.uint32(8).int32(message.processingState);
        }
        for (const v of message.algorithmProcessingInfos) {
            AlgorithmProcessingInfo.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TalkState {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTalkState } as TalkState;
        message.algorithmProcessingInfos = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.processingState = reader.int32() as any;
                    break;
                case 2:
                    message.algorithmProcessingInfos.push(
                        AlgorithmProcessingInfo.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TalkState {
        const message = { ...baseTalkState } as TalkState;
        message.processingState =
            object.processingState !== undefined && object.processingState !== null
                ? processingStateFromJSON(object.processingState)
                : 0;
        message.algorithmProcessingInfos = (object.algorithmProcessingInfos ?? []).map((e: any) =>
            AlgorithmProcessingInfo.fromJSON(e),
        );
        return message;
    },

    toJSON(message: TalkState): unknown {
        const obj: any = {};
        message.processingState !== undefined &&
            (obj.processingState = processingStateToJSON(message.processingState));
        if (message.algorithmProcessingInfos) {
            obj.algorithmProcessingInfos = message.algorithmProcessingInfos.map((e) =>
                e ? AlgorithmProcessingInfo.toJSON(e) : undefined,
            );
        } else {
            obj.algorithmProcessingInfos = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TalkState>, I>>(object: I): TalkState {
        const message = { ...baseTalkState } as TalkState;
        message.processingState = object.processingState ?? 0;
        message.algorithmProcessingInfos =
            object.algorithmProcessingInfos?.map((e) => AlgorithmProcessingInfo.fromPartial(e)) ||
            [];
        return message;
    },
};

messageTypeRegistry.set(TalkState.$type, TalkState);

const baseField: object = {
    $type: 'yandex.cloud.speechsense.v1.Field',
    name: '',
    value: '',
    type: 0,
};

export const Field = {
    $type: 'yandex.cloud.speechsense.v1.Field' as const,

    encode(message: Field, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Field {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseField } as Field;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Field {
        const message = { ...baseField } as Field;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        message.type =
            object.type !== undefined && object.type !== null ? fieldTypeFromJSON(object.type) : 0;
        return message;
    },

    toJSON(message: Field): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        message.type !== undefined && (obj.type = fieldTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Field>, I>>(object: I): Field {
        const message = { ...baseField } as Field;
        message.name = object.name ?? '';
        message.value = object.value ?? '';
        message.type = object.type ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Field.$type, Field);

const baseAlgorithmProcessingInfo: object = {
    $type: 'yandex.cloud.speechsense.v1.AlgorithmProcessingInfo',
    algorithm: 0,
    processingState: 0,
};

export const AlgorithmProcessingInfo = {
    $type: 'yandex.cloud.speechsense.v1.AlgorithmProcessingInfo' as const,

    encode(message: AlgorithmProcessingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.algorithm !== 0) {
            writer.uint32(8).int32(message.algorithm);
        }
        if (message.processingState !== 0) {
            writer.uint32(16).int32(message.processingState);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AlgorithmProcessingInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAlgorithmProcessingInfo } as AlgorithmProcessingInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.algorithm = reader.int32() as any;
                    break;
                case 2:
                    message.processingState = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AlgorithmProcessingInfo {
        const message = { ...baseAlgorithmProcessingInfo } as AlgorithmProcessingInfo;
        message.algorithm =
            object.algorithm !== undefined && object.algorithm !== null
                ? algorithmFromJSON(object.algorithm)
                : 0;
        message.processingState =
            object.processingState !== undefined && object.processingState !== null
                ? processingStateFromJSON(object.processingState)
                : 0;
        return message;
    },

    toJSON(message: AlgorithmProcessingInfo): unknown {
        const obj: any = {};
        message.algorithm !== undefined && (obj.algorithm = algorithmToJSON(message.algorithm));
        message.processingState !== undefined &&
            (obj.processingState = processingStateToJSON(message.processingState));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AlgorithmProcessingInfo>, I>>(
        object: I,
    ): AlgorithmProcessingInfo {
        const message = { ...baseAlgorithmProcessingInfo } as AlgorithmProcessingInfo;
        message.algorithm = object.algorithm ?? 0;
        message.processingState = object.processingState ?? 0;
        return message;
    },
};

messageTypeRegistry.set(AlgorithmProcessingInfo.$type, AlgorithmProcessingInfo);

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
