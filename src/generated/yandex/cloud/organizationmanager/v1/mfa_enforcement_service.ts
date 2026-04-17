/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../google/protobuf/duration';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { MfaEnforcement } from './mfa_enforcement';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

export interface CreateMfaEnforcementRequest {
    /** organization id of the MFA enforcement */
    organizationId: string;
    /**
     * acr id for the MFA enforcement. one of 'any-mfa' or 'phr',
     * specification https://yandex.cloud/en/docs/organization/concepts/mfa?utm_referrer=https%3A%2F%2Fa.yandex-team.ru%2F#mfa-factors
     */
    acrId: string;
    /**
     * the period during which the entered MFA factor will be considered valid and the
     * corresponding acr will be regarded as satisfied
     */
    ttl?: Duration;
    /** the MFA enforcement status */
    status: CreateMfaEnforcementRequest_Status;
    /** the MFA enforcement application start time */
    applyAt?: Date;
    /** the MFA enforcement enroll window */
    enrollWindow?: Duration;
    /** the MFA enforcement name */
    name: string;
    /** the MFA enforcement description */
    description: string;
}

export enum CreateMfaEnforcementRequest_Status {
    /** STATUS_UNSPECIFIED - status upspecified */
    STATUS_UNSPECIFIED = 0,
    /** STATUS_ACTIVE - active */
    STATUS_ACTIVE = 1,
    /** STATUS_INACTIVE - inactive */
    STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1,
}

export function createMfaEnforcementRequest_StatusFromJSON(
    object: any,
): CreateMfaEnforcementRequest_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return CreateMfaEnforcementRequest_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'STATUS_ACTIVE':
            return CreateMfaEnforcementRequest_Status.STATUS_ACTIVE;
        case 2:
        case 'STATUS_INACTIVE':
            return CreateMfaEnforcementRequest_Status.STATUS_INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CreateMfaEnforcementRequest_Status.UNRECOGNIZED;
    }
}

export function createMfaEnforcementRequest_StatusToJSON(
    object: CreateMfaEnforcementRequest_Status,
): string {
    switch (object) {
        case CreateMfaEnforcementRequest_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case CreateMfaEnforcementRequest_Status.STATUS_ACTIVE:
            return 'STATUS_ACTIVE';
        case CreateMfaEnforcementRequest_Status.STATUS_INACTIVE:
            return 'STATUS_INACTIVE';
        default:
            return 'UNKNOWN';
    }
}

export interface CreateMfaEnforcementMetadata {
    /** organization id of the MFA enforcement */
    organizationId: string;
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface UpdateMfaEnforcementRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
    /**
     * acr id for the MFA enforcement. one of 'any-mfa' or 'phr',
     * specification https://yandex.cloud/en/docs/organization/concepts/mfa?utm_referrer=https%3A%2F%2Fa.yandex-team.ru%2F#mfa-factors
     */
    acrId: string;
    /**
     * the period during which the entered MFA factor will be considered valid and the
     * corresponding acr will be regarded as satisfied
     */
    ttl?: Duration;
    /** the MFA enforcement status */
    status: UpdateMfaEnforcementRequest_Status;
    /** the MFA enforcement application start time */
    applyAt?: Date;
    /** the MFA enforcement enroll window */
    enrollWindow?: Duration;
    /** field mask to specify which fields of the MFA enforcement resource should be updated */
    updateMask?: FieldMask;
    /** the MFA enforcement name */
    name: string;
    /** the MFA enforcement description */
    description: string;
}

export enum UpdateMfaEnforcementRequest_Status {
    /** STATUS_UNSPECIFIED - status upspecified */
    STATUS_UNSPECIFIED = 0,
    /** STATUS_ACTIVE - active */
    STATUS_ACTIVE = 1,
    /** STATUS_INACTIVE - inactive */
    STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1,
}

export function updateMfaEnforcementRequest_StatusFromJSON(
    object: any,
): UpdateMfaEnforcementRequest_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return UpdateMfaEnforcementRequest_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'STATUS_ACTIVE':
            return UpdateMfaEnforcementRequest_Status.STATUS_ACTIVE;
        case 2:
        case 'STATUS_INACTIVE':
            return UpdateMfaEnforcementRequest_Status.STATUS_INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UpdateMfaEnforcementRequest_Status.UNRECOGNIZED;
    }
}

export function updateMfaEnforcementRequest_StatusToJSON(
    object: UpdateMfaEnforcementRequest_Status,
): string {
    switch (object) {
        case UpdateMfaEnforcementRequest_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case UpdateMfaEnforcementRequest_Status.STATUS_ACTIVE:
            return 'STATUS_ACTIVE';
        case UpdateMfaEnforcementRequest_Status.STATUS_INACTIVE:
            return 'STATUS_INACTIVE';
        default:
            return 'UNKNOWN';
    }
}

export interface UpdateMfaEnforcementMetadata {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface ActivateMfaEnforcementRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface ActivateMfaEnforcementMetadata {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface DeactivateMfaEnforcementRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface DeactivateMfaEnforcementMetadata {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface DeleteMfaEnforcementRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface DeleteMfaEnforcementMetadata {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface GetMfaEnforcementRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface ListMfaEnforcementsRequest {
    /** organization id */
    organizationId: string;
    /** the maximum number of results per page to return */
    pageSize: number;
    /** page token */
    pageToken: string;
}

export interface ListMfaEnforcementsResponse {
    /** list of MFA enforcements for the specified organization */
    mfaEnforcements: MfaEnforcement[];
    /** token to get the next page of results */
    nextPageToken: string;
}

export interface UpdateAudienceRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
    /** MFA enforcement's audience to update */
    audienceDeltas: AudienceDelta[];
}

export interface UpdateAudienceResponse {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
    /** updated MFA enforcement's audience */
    effectiveDeltas: AudienceDelta[];
}

export interface AudienceDelta {
    /** action to perform */
    action: AudienceDelta_Action;
    /** subject id */
    subjectId: string;
}

export enum AudienceDelta_Action {
    /** ACTION_UNSPECIFIED - action unspecified */
    ACTION_UNSPECIFIED = 0,
    /** ACTION_ADD - add subject to audience */
    ACTION_ADD = 1,
    /** ACTION_REMOVE - remove subject from audience */
    ACTION_REMOVE = 2,
    UNRECOGNIZED = -1,
}

export function audienceDelta_ActionFromJSON(object: any): AudienceDelta_Action {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return AudienceDelta_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'ACTION_ADD':
            return AudienceDelta_Action.ACTION_ADD;
        case 2:
        case 'ACTION_REMOVE':
            return AudienceDelta_Action.ACTION_REMOVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AudienceDelta_Action.UNRECOGNIZED;
    }
}

export function audienceDelta_ActionToJSON(object: AudienceDelta_Action): string {
    switch (object) {
        case AudienceDelta_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case AudienceDelta_Action.ACTION_ADD:
            return 'ACTION_ADD';
        case AudienceDelta_Action.ACTION_REMOVE:
            return 'ACTION_REMOVE';
        default:
            return 'UNKNOWN';
    }
}

export interface UpdateAudienceMetadata {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface ListAudienceRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
    /** the maximum number of results per page to return */
    pageSize: number;
    /** page token */
    pageToken: string;
}

export interface ListAudienceResponse {
    /** MFA enforcement's audience */
    subjects: ListAudienceResponse_Subject[];
    /** token to get the next page of results */
    nextPageToken: string;
}

export interface ListAudienceResponse_Subject {
    /** subject id */
    id: string;
    /** subject type */
    type: string;
}

export interface UpdateExcludedAudienceRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
    /** updated MFA enforcement's excluded audience */
    audienceDeltas: AudienceDelta[];
}

export interface UpdateExcludedAudienceResponse {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
    /** updated MFA enforcement's excluded audience */
    effectiveDeltas: AudienceDelta[];
}

export interface UpdateExcludedAudienceMetadata {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
}

export interface ListExcludedAudienceRequest {
    /** id of the MFA enforcement */
    mfaEnforcementId: string;
    /** the maximum number of results per page to return */
    pageSize: number;
    /** page token */
    pageToken: string;
}

export interface ListExcludedAudienceResponse {
    /** MFA enforcement's audience */
    subjects: ListExcludedAudienceResponse_Subject[];
    /** token to get the next page of results */
    nextPageToken: string;
}

export interface ListExcludedAudienceResponse_Subject {
    /** subject id */
    id: string;
    /** subject type */
    type: string;
}

const baseCreateMfaEnforcementRequest: object = {
    organizationId: '',
    acrId: '',
    status: 0,
    name: '',
    description: '',
};

export const CreateMfaEnforcementRequest: {
    encode(message: CreateMfaEnforcementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMfaEnforcementRequest;
    fromJSON(object: any): CreateMfaEnforcementRequest;
    toJSON(message: CreateMfaEnforcementRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateMfaEnforcementRequest>, I>>(object: I): CreateMfaEnforcementRequest;
} = {
    encode(
        message: CreateMfaEnforcementRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.acrId !== '') {
            writer.uint32(18).string(message.acrId);
        }
        if (message.ttl !== undefined) {
            Duration.encode(message.ttl, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.applyAt !== undefined) {
            Timestamp.encode(toTimestamp(message.applyAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.enrollWindow !== undefined) {
            Duration.encode(message.enrollWindow, writer.uint32(50).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(58).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(66).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMfaEnforcementRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMfaEnforcementRequest } as CreateMfaEnforcementRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.acrId = reader.string();
                    break;
                case 3:
                    message.ttl = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.applyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.enrollWindow = Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.name = reader.string();
                    break;
                case 8:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateMfaEnforcementRequest {
        const message = { ...baseCreateMfaEnforcementRequest } as CreateMfaEnforcementRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.acrId =
            object.acrId !== undefined && object.acrId !== null ? String(object.acrId) : '';
        message.ttl =
            object.ttl !== undefined && object.ttl !== null
                ? Duration.fromJSON(object.ttl)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? createMfaEnforcementRequest_StatusFromJSON(object.status)
                : 0;
        message.applyAt =
            object.applyAt !== undefined && object.applyAt !== null
                ? fromJsonTimestamp(object.applyAt)
                : undefined;
        message.enrollWindow =
            object.enrollWindow !== undefined && object.enrollWindow !== null
                ? Duration.fromJSON(object.enrollWindow)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: CreateMfaEnforcementRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.acrId !== undefined && (obj.acrId = message.acrId);
        message.ttl !== undefined &&
            (obj.ttl = message.ttl ? Duration.toJSON(message.ttl) : undefined);
        message.status !== undefined &&
            (obj.status = createMfaEnforcementRequest_StatusToJSON(message.status));
        message.applyAt !== undefined && (obj.applyAt = message.applyAt.toISOString());
        message.enrollWindow !== undefined &&
            (obj.enrollWindow = message.enrollWindow
                ? Duration.toJSON(message.enrollWindow)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateMfaEnforcementRequest>, I>>(
        object: I,
    ): CreateMfaEnforcementRequest {
        const message = { ...baseCreateMfaEnforcementRequest } as CreateMfaEnforcementRequest;
        message.organizationId = object.organizationId ?? '';
        message.acrId = object.acrId ?? '';
        message.ttl =
            object.ttl !== undefined && object.ttl !== null
                ? Duration.fromPartial(object.ttl)
                : undefined;
        message.status = object.status ?? 0;
        message.applyAt = object.applyAt ?? undefined;
        message.enrollWindow =
            object.enrollWindow !== undefined && object.enrollWindow !== null
                ? Duration.fromPartial(object.enrollWindow)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseCreateMfaEnforcementMetadata: object = { organizationId: '', mfaEnforcementId: '' };

export const CreateMfaEnforcementMetadata: {
    encode(message: CreateMfaEnforcementMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMfaEnforcementMetadata;
    fromJSON(object: any): CreateMfaEnforcementMetadata;
    toJSON(message: CreateMfaEnforcementMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateMfaEnforcementMetadata>, I>>(object: I): CreateMfaEnforcementMetadata;
} = {
    encode(
        message: CreateMfaEnforcementMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.mfaEnforcementId !== '') {
            writer.uint32(26).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMfaEnforcementMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMfaEnforcementMetadata } as CreateMfaEnforcementMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateMfaEnforcementMetadata {
        const message = { ...baseCreateMfaEnforcementMetadata } as CreateMfaEnforcementMetadata;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: CreateMfaEnforcementMetadata): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateMfaEnforcementMetadata>, I>>(
        object: I,
    ): CreateMfaEnforcementMetadata {
        const message = { ...baseCreateMfaEnforcementMetadata } as CreateMfaEnforcementMetadata;
        message.organizationId = object.organizationId ?? '';
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseUpdateMfaEnforcementRequest: object = {
    mfaEnforcementId: '',
    acrId: '',
    status: 0,
    name: '',
    description: '',
};

export const UpdateMfaEnforcementRequest: {
    encode(message: UpdateMfaEnforcementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMfaEnforcementRequest;
    fromJSON(object: any): UpdateMfaEnforcementRequest;
    toJSON(message: UpdateMfaEnforcementRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateMfaEnforcementRequest>, I>>(object: I): UpdateMfaEnforcementRequest;
} = {
    encode(
        message: UpdateMfaEnforcementRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        if (message.acrId !== '') {
            writer.uint32(18).string(message.acrId);
        }
        if (message.ttl !== undefined) {
            Duration.encode(message.ttl, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.applyAt !== undefined) {
            Timestamp.encode(toTimestamp(message.applyAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.enrollWindow !== undefined) {
            Duration.encode(message.enrollWindow, writer.uint32(50).fork()).ldelim();
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(58).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(66).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(74).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMfaEnforcementRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateMfaEnforcementRequest } as UpdateMfaEnforcementRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                case 2:
                    message.acrId = reader.string();
                    break;
                case 3:
                    message.ttl = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.applyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.enrollWindow = Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.name = reader.string();
                    break;
                case 9:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateMfaEnforcementRequest {
        const message = { ...baseUpdateMfaEnforcementRequest } as UpdateMfaEnforcementRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        message.acrId =
            object.acrId !== undefined && object.acrId !== null ? String(object.acrId) : '';
        message.ttl =
            object.ttl !== undefined && object.ttl !== null
                ? Duration.fromJSON(object.ttl)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? updateMfaEnforcementRequest_StatusFromJSON(object.status)
                : 0;
        message.applyAt =
            object.applyAt !== undefined && object.applyAt !== null
                ? fromJsonTimestamp(object.applyAt)
                : undefined;
        message.enrollWindow =
            object.enrollWindow !== undefined && object.enrollWindow !== null
                ? Duration.fromJSON(object.enrollWindow)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: UpdateMfaEnforcementRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        message.acrId !== undefined && (obj.acrId = message.acrId);
        message.ttl !== undefined &&
            (obj.ttl = message.ttl ? Duration.toJSON(message.ttl) : undefined);
        message.status !== undefined &&
            (obj.status = updateMfaEnforcementRequest_StatusToJSON(message.status));
        message.applyAt !== undefined && (obj.applyAt = message.applyAt.toISOString());
        message.enrollWindow !== undefined &&
            (obj.enrollWindow = message.enrollWindow
                ? Duration.toJSON(message.enrollWindow)
                : undefined);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateMfaEnforcementRequest>, I>>(
        object: I,
    ): UpdateMfaEnforcementRequest {
        const message = { ...baseUpdateMfaEnforcementRequest } as UpdateMfaEnforcementRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        message.acrId = object.acrId ?? '';
        message.ttl =
            object.ttl !== undefined && object.ttl !== null
                ? Duration.fromPartial(object.ttl)
                : undefined;
        message.status = object.status ?? 0;
        message.applyAt = object.applyAt ?? undefined;
        message.enrollWindow =
            object.enrollWindow !== undefined && object.enrollWindow !== null
                ? Duration.fromPartial(object.enrollWindow)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseUpdateMfaEnforcementMetadata: object = { mfaEnforcementId: '' };

export const UpdateMfaEnforcementMetadata: {
    encode(message: UpdateMfaEnforcementMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMfaEnforcementMetadata;
    fromJSON(object: any): UpdateMfaEnforcementMetadata;
    toJSON(message: UpdateMfaEnforcementMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateMfaEnforcementMetadata>, I>>(object: I): UpdateMfaEnforcementMetadata;
} = {
    encode(
        message: UpdateMfaEnforcementMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(18).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMfaEnforcementMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateMfaEnforcementMetadata } as UpdateMfaEnforcementMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateMfaEnforcementMetadata {
        const message = { ...baseUpdateMfaEnforcementMetadata } as UpdateMfaEnforcementMetadata;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: UpdateMfaEnforcementMetadata): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateMfaEnforcementMetadata>, I>>(
        object: I,
    ): UpdateMfaEnforcementMetadata {
        const message = { ...baseUpdateMfaEnforcementMetadata } as UpdateMfaEnforcementMetadata;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseActivateMfaEnforcementRequest: object = { mfaEnforcementId: '' };

export const ActivateMfaEnforcementRequest: {
    encode(message: ActivateMfaEnforcementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateMfaEnforcementRequest;
    fromJSON(object: any): ActivateMfaEnforcementRequest;
    toJSON(message: ActivateMfaEnforcementRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ActivateMfaEnforcementRequest>, I>>(object: I): ActivateMfaEnforcementRequest;
} = {
    encode(
        message: ActivateMfaEnforcementRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateMfaEnforcementRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateMfaEnforcementRequest } as ActivateMfaEnforcementRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateMfaEnforcementRequest {
        const message = { ...baseActivateMfaEnforcementRequest } as ActivateMfaEnforcementRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: ActivateMfaEnforcementRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateMfaEnforcementRequest>, I>>(
        object: I,
    ): ActivateMfaEnforcementRequest {
        const message = { ...baseActivateMfaEnforcementRequest } as ActivateMfaEnforcementRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseActivateMfaEnforcementMetadata: object = { mfaEnforcementId: '' };

export const ActivateMfaEnforcementMetadata: {
    encode(message: ActivateMfaEnforcementMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateMfaEnforcementMetadata;
    fromJSON(object: any): ActivateMfaEnforcementMetadata;
    toJSON(message: ActivateMfaEnforcementMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ActivateMfaEnforcementMetadata>, I>>(object: I): ActivateMfaEnforcementMetadata;
} = {
    encode(
        message: ActivateMfaEnforcementMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(18).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateMfaEnforcementMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateMfaEnforcementMetadata } as ActivateMfaEnforcementMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateMfaEnforcementMetadata {
        const message = { ...baseActivateMfaEnforcementMetadata } as ActivateMfaEnforcementMetadata;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: ActivateMfaEnforcementMetadata): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateMfaEnforcementMetadata>, I>>(
        object: I,
    ): ActivateMfaEnforcementMetadata {
        const message = { ...baseActivateMfaEnforcementMetadata } as ActivateMfaEnforcementMetadata;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseDeactivateMfaEnforcementRequest: object = { mfaEnforcementId: '' };

export const DeactivateMfaEnforcementRequest: {
    encode(message: DeactivateMfaEnforcementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateMfaEnforcementRequest;
    fromJSON(object: any): DeactivateMfaEnforcementRequest;
    toJSON(message: DeactivateMfaEnforcementRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeactivateMfaEnforcementRequest>, I>>(object: I): DeactivateMfaEnforcementRequest;
} = {
    encode(
        message: DeactivateMfaEnforcementRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateMfaEnforcementRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeactivateMfaEnforcementRequest,
        } as DeactivateMfaEnforcementRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeactivateMfaEnforcementRequest {
        const message = {
            ...baseDeactivateMfaEnforcementRequest,
        } as DeactivateMfaEnforcementRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: DeactivateMfaEnforcementRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeactivateMfaEnforcementRequest>, I>>(
        object: I,
    ): DeactivateMfaEnforcementRequest {
        const message = {
            ...baseDeactivateMfaEnforcementRequest,
        } as DeactivateMfaEnforcementRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseDeactivateMfaEnforcementMetadata: object = { mfaEnforcementId: '' };

export const DeactivateMfaEnforcementMetadata: {
    encode(message: DeactivateMfaEnforcementMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateMfaEnforcementMetadata;
    fromJSON(object: any): DeactivateMfaEnforcementMetadata;
    toJSON(message: DeactivateMfaEnforcementMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeactivateMfaEnforcementMetadata>, I>>(object: I): DeactivateMfaEnforcementMetadata;
} = {
    encode(
        message: DeactivateMfaEnforcementMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(18).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateMfaEnforcementMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeactivateMfaEnforcementMetadata,
        } as DeactivateMfaEnforcementMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeactivateMfaEnforcementMetadata {
        const message = {
            ...baseDeactivateMfaEnforcementMetadata,
        } as DeactivateMfaEnforcementMetadata;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: DeactivateMfaEnforcementMetadata): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeactivateMfaEnforcementMetadata>, I>>(
        object: I,
    ): DeactivateMfaEnforcementMetadata {
        const message = {
            ...baseDeactivateMfaEnforcementMetadata,
        } as DeactivateMfaEnforcementMetadata;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseDeleteMfaEnforcementRequest: object = { mfaEnforcementId: '' };

export const DeleteMfaEnforcementRequest: {
    encode(message: DeleteMfaEnforcementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMfaEnforcementRequest;
    fromJSON(object: any): DeleteMfaEnforcementRequest;
    toJSON(message: DeleteMfaEnforcementRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteMfaEnforcementRequest>, I>>(object: I): DeleteMfaEnforcementRequest;
} = {
    encode(
        message: DeleteMfaEnforcementRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMfaEnforcementRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteMfaEnforcementRequest } as DeleteMfaEnforcementRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteMfaEnforcementRequest {
        const message = { ...baseDeleteMfaEnforcementRequest } as DeleteMfaEnforcementRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: DeleteMfaEnforcementRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteMfaEnforcementRequest>, I>>(
        object: I,
    ): DeleteMfaEnforcementRequest {
        const message = { ...baseDeleteMfaEnforcementRequest } as DeleteMfaEnforcementRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseDeleteMfaEnforcementMetadata: object = { mfaEnforcementId: '' };

export const DeleteMfaEnforcementMetadata: {
    encode(message: DeleteMfaEnforcementMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMfaEnforcementMetadata;
    fromJSON(object: any): DeleteMfaEnforcementMetadata;
    toJSON(message: DeleteMfaEnforcementMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteMfaEnforcementMetadata>, I>>(object: I): DeleteMfaEnforcementMetadata;
} = {
    encode(
        message: DeleteMfaEnforcementMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(18).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMfaEnforcementMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteMfaEnforcementMetadata } as DeleteMfaEnforcementMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteMfaEnforcementMetadata {
        const message = { ...baseDeleteMfaEnforcementMetadata } as DeleteMfaEnforcementMetadata;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: DeleteMfaEnforcementMetadata): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteMfaEnforcementMetadata>, I>>(
        object: I,
    ): DeleteMfaEnforcementMetadata {
        const message = { ...baseDeleteMfaEnforcementMetadata } as DeleteMfaEnforcementMetadata;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseGetMfaEnforcementRequest: object = { mfaEnforcementId: '' };

export const GetMfaEnforcementRequest: {
    encode(message: GetMfaEnforcementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMfaEnforcementRequest;
    fromJSON(object: any): GetMfaEnforcementRequest;
    toJSON(message: GetMfaEnforcementRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetMfaEnforcementRequest>, I>>(object: I): GetMfaEnforcementRequest;
} = {
    encode(
        message: GetMfaEnforcementRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetMfaEnforcementRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetMfaEnforcementRequest } as GetMfaEnforcementRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetMfaEnforcementRequest {
        const message = { ...baseGetMfaEnforcementRequest } as GetMfaEnforcementRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: GetMfaEnforcementRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetMfaEnforcementRequest>, I>>(
        object: I,
    ): GetMfaEnforcementRequest {
        const message = { ...baseGetMfaEnforcementRequest } as GetMfaEnforcementRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseListMfaEnforcementsRequest: object = { organizationId: '', pageSize: 0, pageToken: '' };

export const ListMfaEnforcementsRequest: {
    encode(message: ListMfaEnforcementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMfaEnforcementsRequest;
    fromJSON(object: any): ListMfaEnforcementsRequest;
    toJSON(message: ListMfaEnforcementsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListMfaEnforcementsRequest>, I>>(object: I): ListMfaEnforcementsRequest;
} = {
    encode(
        message: ListMfaEnforcementsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListMfaEnforcementsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMfaEnforcementsRequest } as ListMfaEnforcementsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListMfaEnforcementsRequest {
        const message = { ...baseListMfaEnforcementsRequest } as ListMfaEnforcementsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListMfaEnforcementsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListMfaEnforcementsRequest>, I>>(
        object: I,
    ): ListMfaEnforcementsRequest {
        const message = { ...baseListMfaEnforcementsRequest } as ListMfaEnforcementsRequest;
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListMfaEnforcementsResponse: object = { nextPageToken: '' };

export const ListMfaEnforcementsResponse: {
    encode(message: ListMfaEnforcementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMfaEnforcementsResponse;
    fromJSON(object: any): ListMfaEnforcementsResponse;
    toJSON(message: ListMfaEnforcementsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListMfaEnforcementsResponse>, I>>(object: I): ListMfaEnforcementsResponse;
} = {
    encode(
        message: ListMfaEnforcementsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.mfaEnforcements) {
            MfaEnforcement.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListMfaEnforcementsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMfaEnforcementsResponse } as ListMfaEnforcementsResponse;
        message.mfaEnforcements = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcements.push(MfaEnforcement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListMfaEnforcementsResponse {
        const message = { ...baseListMfaEnforcementsResponse } as ListMfaEnforcementsResponse;
        message.mfaEnforcements = (object.mfaEnforcements ?? []).map((e: any) =>
            MfaEnforcement.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListMfaEnforcementsResponse): unknown {
        const obj: any = {};
        if (message.mfaEnforcements) {
            obj.mfaEnforcements = message.mfaEnforcements.map((e) =>
                e ? MfaEnforcement.toJSON(e) : undefined,
            );
        } else {
            obj.mfaEnforcements = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListMfaEnforcementsResponse>, I>>(
        object: I,
    ): ListMfaEnforcementsResponse {
        const message = { ...baseListMfaEnforcementsResponse } as ListMfaEnforcementsResponse;
        message.mfaEnforcements =
            object.mfaEnforcements?.map((e) => MfaEnforcement.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseUpdateAudienceRequest: object = { mfaEnforcementId: '' };

export const UpdateAudienceRequest: {
    encode(message: UpdateAudienceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAudienceRequest;
    fromJSON(object: any): UpdateAudienceRequest;
    toJSON(message: UpdateAudienceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAudienceRequest>, I>>(object: I): UpdateAudienceRequest;
} = {
    encode(message: UpdateAudienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        for (const v of message.audienceDeltas) {
            AudienceDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAudienceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAudienceRequest } as UpdateAudienceRequest;
        message.audienceDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                case 2:
                    message.audienceDeltas.push(AudienceDelta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAudienceRequest {
        const message = { ...baseUpdateAudienceRequest } as UpdateAudienceRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        message.audienceDeltas = (object.audienceDeltas ?? []).map((e: any) =>
            AudienceDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateAudienceRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        if (message.audienceDeltas) {
            obj.audienceDeltas = message.audienceDeltas.map((e) =>
                e ? AudienceDelta.toJSON(e) : undefined,
            );
        } else {
            obj.audienceDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAudienceRequest>, I>>(
        object: I,
    ): UpdateAudienceRequest {
        const message = { ...baseUpdateAudienceRequest } as UpdateAudienceRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        message.audienceDeltas =
            object.audienceDeltas?.map((e) => AudienceDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateAudienceResponse: object = { mfaEnforcementId: '' };

export const UpdateAudienceResponse: {
    encode(message: UpdateAudienceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAudienceResponse;
    fromJSON(object: any): UpdateAudienceResponse;
    toJSON(message: UpdateAudienceResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAudienceResponse>, I>>(object: I): UpdateAudienceResponse;
} = {
    encode(message: UpdateAudienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        for (const v of message.effectiveDeltas) {
            AudienceDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAudienceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAudienceResponse } as UpdateAudienceResponse;
        message.effectiveDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                case 2:
                    message.effectiveDeltas.push(AudienceDelta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAudienceResponse {
        const message = { ...baseUpdateAudienceResponse } as UpdateAudienceResponse;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        message.effectiveDeltas = (object.effectiveDeltas ?? []).map((e: any) =>
            AudienceDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateAudienceResponse): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        if (message.effectiveDeltas) {
            obj.effectiveDeltas = message.effectiveDeltas.map((e) =>
                e ? AudienceDelta.toJSON(e) : undefined,
            );
        } else {
            obj.effectiveDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAudienceResponse>, I>>(
        object: I,
    ): UpdateAudienceResponse {
        const message = { ...baseUpdateAudienceResponse } as UpdateAudienceResponse;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        message.effectiveDeltas =
            object.effectiveDeltas?.map((e) => AudienceDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseAudienceDelta: object = { action: 0, subjectId: '' };

export const AudienceDelta: {
    encode(message: AudienceDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AudienceDelta;
    fromJSON(object: any): AudienceDelta;
    toJSON(message: AudienceDelta): unknown;
    fromPartial<I extends Exact<DeepPartial<AudienceDelta>, I>>(object: I): AudienceDelta;
} = {
    encode(message: AudienceDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AudienceDelta {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudienceDelta } as AudienceDelta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.subjectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AudienceDelta {
        const message = { ...baseAudienceDelta } as AudienceDelta;
        message.action =
            object.action !== undefined && object.action !== null
                ? audienceDelta_ActionFromJSON(object.action)
                : 0;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        return message;
    },

    toJSON(message: AudienceDelta): unknown {
        const obj: any = {};
        message.action !== undefined && (obj.action = audienceDelta_ActionToJSON(message.action));
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudienceDelta>, I>>(object: I): AudienceDelta {
        const message = { ...baseAudienceDelta } as AudienceDelta;
        message.action = object.action ?? 0;
        message.subjectId = object.subjectId ?? '';
        return message;
    },
};

const baseUpdateAudienceMetadata: object = { mfaEnforcementId: '' };

export const UpdateAudienceMetadata: {
    encode(message: UpdateAudienceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAudienceMetadata;
    fromJSON(object: any): UpdateAudienceMetadata;
    toJSON(message: UpdateAudienceMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAudienceMetadata>, I>>(object: I): UpdateAudienceMetadata;
} = {
    encode(message: UpdateAudienceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(18).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAudienceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAudienceMetadata } as UpdateAudienceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAudienceMetadata {
        const message = { ...baseUpdateAudienceMetadata } as UpdateAudienceMetadata;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: UpdateAudienceMetadata): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAudienceMetadata>, I>>(
        object: I,
    ): UpdateAudienceMetadata {
        const message = { ...baseUpdateAudienceMetadata } as UpdateAudienceMetadata;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseListAudienceRequest: object = { mfaEnforcementId: '', pageSize: 0, pageToken: '' };

export const ListAudienceRequest: {
    encode(message: ListAudienceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAudienceRequest;
    fromJSON(object: any): ListAudienceRequest;
    toJSON(message: ListAudienceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAudienceRequest>, I>>(object: I): ListAudienceRequest;
} = {
    encode(message: ListAudienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAudienceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAudienceRequest } as ListAudienceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAudienceRequest {
        const message = { ...baseListAudienceRequest } as ListAudienceRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListAudienceRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAudienceRequest>, I>>(
        object: I,
    ): ListAudienceRequest {
        const message = { ...baseListAudienceRequest } as ListAudienceRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListAudienceResponse: object = { nextPageToken: '' };

export const ListAudienceResponse: {
    encode(message: ListAudienceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAudienceResponse;
    fromJSON(object: any): ListAudienceResponse;
    toJSON(message: ListAudienceResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAudienceResponse>, I>>(object: I): ListAudienceResponse;
} = {
    encode(message: ListAudienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.subjects) {
            ListAudienceResponse_Subject.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAudienceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAudienceResponse } as ListAudienceResponse;
        message.subjects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjects.push(
                        ListAudienceResponse_Subject.decode(reader, reader.uint32()),
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAudienceResponse {
        const message = { ...baseListAudienceResponse } as ListAudienceResponse;
        message.subjects = (object.subjects ?? []).map((e: any) =>
            ListAudienceResponse_Subject.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAudienceResponse): unknown {
        const obj: any = {};
        if (message.subjects) {
            obj.subjects = message.subjects.map((e) =>
                e ? ListAudienceResponse_Subject.toJSON(e) : undefined,
            );
        } else {
            obj.subjects = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAudienceResponse>, I>>(
        object: I,
    ): ListAudienceResponse {
        const message = { ...baseListAudienceResponse } as ListAudienceResponse;
        message.subjects =
            object.subjects?.map((e) => ListAudienceResponse_Subject.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListAudienceResponse_Subject: object = { id: '', type: '' };

export const ListAudienceResponse_Subject: {
    encode(message: ListAudienceResponse_Subject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAudienceResponse_Subject;
    fromJSON(object: any): ListAudienceResponse_Subject;
    toJSON(message: ListAudienceResponse_Subject): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAudienceResponse_Subject>, I>>(object: I): ListAudienceResponse_Subject;
} = {
    encode(
        message: ListAudienceResponse_Subject,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAudienceResponse_Subject {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAudienceResponse_Subject } as ListAudienceResponse_Subject;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListAudienceResponse_Subject {
        const message = { ...baseListAudienceResponse_Subject } as ListAudienceResponse_Subject;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        return message;
    },

    toJSON(message: ListAudienceResponse_Subject): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAudienceResponse_Subject>, I>>(
        object: I,
    ): ListAudienceResponse_Subject {
        const message = { ...baseListAudienceResponse_Subject } as ListAudienceResponse_Subject;
        message.id = object.id ?? '';
        message.type = object.type ?? '';
        return message;
    },
};

const baseUpdateExcludedAudienceRequest: object = { mfaEnforcementId: '' };

export const UpdateExcludedAudienceRequest: {
    encode(message: UpdateExcludedAudienceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExcludedAudienceRequest;
    fromJSON(object: any): UpdateExcludedAudienceRequest;
    toJSON(message: UpdateExcludedAudienceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateExcludedAudienceRequest>, I>>(object: I): UpdateExcludedAudienceRequest;
} = {
    encode(
        message: UpdateExcludedAudienceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        for (const v of message.audienceDeltas) {
            AudienceDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExcludedAudienceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateExcludedAudienceRequest } as UpdateExcludedAudienceRequest;
        message.audienceDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                case 2:
                    message.audienceDeltas.push(AudienceDelta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateExcludedAudienceRequest {
        const message = { ...baseUpdateExcludedAudienceRequest } as UpdateExcludedAudienceRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        message.audienceDeltas = (object.audienceDeltas ?? []).map((e: any) =>
            AudienceDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateExcludedAudienceRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        if (message.audienceDeltas) {
            obj.audienceDeltas = message.audienceDeltas.map((e) =>
                e ? AudienceDelta.toJSON(e) : undefined,
            );
        } else {
            obj.audienceDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateExcludedAudienceRequest>, I>>(
        object: I,
    ): UpdateExcludedAudienceRequest {
        const message = { ...baseUpdateExcludedAudienceRequest } as UpdateExcludedAudienceRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        message.audienceDeltas =
            object.audienceDeltas?.map((e) => AudienceDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateExcludedAudienceResponse: object = { mfaEnforcementId: '' };

export const UpdateExcludedAudienceResponse: {
    encode(message: UpdateExcludedAudienceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExcludedAudienceResponse;
    fromJSON(object: any): UpdateExcludedAudienceResponse;
    toJSON(message: UpdateExcludedAudienceResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateExcludedAudienceResponse>, I>>(object: I): UpdateExcludedAudienceResponse;
} = {
    encode(
        message: UpdateExcludedAudienceResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        for (const v of message.effectiveDeltas) {
            AudienceDelta.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExcludedAudienceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateExcludedAudienceResponse } as UpdateExcludedAudienceResponse;
        message.effectiveDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                case 2:
                    message.effectiveDeltas.push(AudienceDelta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateExcludedAudienceResponse {
        const message = { ...baseUpdateExcludedAudienceResponse } as UpdateExcludedAudienceResponse;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        message.effectiveDeltas = (object.effectiveDeltas ?? []).map((e: any) =>
            AudienceDelta.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateExcludedAudienceResponse): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        if (message.effectiveDeltas) {
            obj.effectiveDeltas = message.effectiveDeltas.map((e) =>
                e ? AudienceDelta.toJSON(e) : undefined,
            );
        } else {
            obj.effectiveDeltas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateExcludedAudienceResponse>, I>>(
        object: I,
    ): UpdateExcludedAudienceResponse {
        const message = { ...baseUpdateExcludedAudienceResponse } as UpdateExcludedAudienceResponse;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        message.effectiveDeltas =
            object.effectiveDeltas?.map((e) => AudienceDelta.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateExcludedAudienceMetadata: object = { mfaEnforcementId: '' };

export const UpdateExcludedAudienceMetadata: {
    encode(message: UpdateExcludedAudienceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExcludedAudienceMetadata;
    fromJSON(object: any): UpdateExcludedAudienceMetadata;
    toJSON(message: UpdateExcludedAudienceMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateExcludedAudienceMetadata>, I>>(object: I): UpdateExcludedAudienceMetadata;
} = {
    encode(
        message: UpdateExcludedAudienceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(18).string(message.mfaEnforcementId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExcludedAudienceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateExcludedAudienceMetadata } as UpdateExcludedAudienceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.mfaEnforcementId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateExcludedAudienceMetadata {
        const message = { ...baseUpdateExcludedAudienceMetadata } as UpdateExcludedAudienceMetadata;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        return message;
    },

    toJSON(message: UpdateExcludedAudienceMetadata): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateExcludedAudienceMetadata>, I>>(
        object: I,
    ): UpdateExcludedAudienceMetadata {
        const message = { ...baseUpdateExcludedAudienceMetadata } as UpdateExcludedAudienceMetadata;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        return message;
    },
};

const baseListExcludedAudienceRequest: object = {
    mfaEnforcementId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListExcludedAudienceRequest: {
    encode(message: ListExcludedAudienceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListExcludedAudienceRequest;
    fromJSON(object: any): ListExcludedAudienceRequest;
    toJSON(message: ListExcludedAudienceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListExcludedAudienceRequest>, I>>(object: I): ListExcludedAudienceRequest;
} = {
    encode(
        message: ListExcludedAudienceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mfaEnforcementId !== '') {
            writer.uint32(10).string(message.mfaEnforcementId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExcludedAudienceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListExcludedAudienceRequest } as ListExcludedAudienceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mfaEnforcementId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListExcludedAudienceRequest {
        const message = { ...baseListExcludedAudienceRequest } as ListExcludedAudienceRequest;
        message.mfaEnforcementId =
            object.mfaEnforcementId !== undefined && object.mfaEnforcementId !== null
                ? String(object.mfaEnforcementId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListExcludedAudienceRequest): unknown {
        const obj: any = {};
        message.mfaEnforcementId !== undefined && (obj.mfaEnforcementId = message.mfaEnforcementId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExcludedAudienceRequest>, I>>(
        object: I,
    ): ListExcludedAudienceRequest {
        const message = { ...baseListExcludedAudienceRequest } as ListExcludedAudienceRequest;
        message.mfaEnforcementId = object.mfaEnforcementId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListExcludedAudienceResponse: object = { nextPageToken: '' };

export const ListExcludedAudienceResponse: {
    encode(message: ListExcludedAudienceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListExcludedAudienceResponse;
    fromJSON(object: any): ListExcludedAudienceResponse;
    toJSON(message: ListExcludedAudienceResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListExcludedAudienceResponse>, I>>(object: I): ListExcludedAudienceResponse;
} = {
    encode(
        message: ListExcludedAudienceResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.subjects) {
            ListExcludedAudienceResponse_Subject.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExcludedAudienceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListExcludedAudienceResponse } as ListExcludedAudienceResponse;
        message.subjects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjects.push(
                        ListExcludedAudienceResponse_Subject.decode(reader, reader.uint32()),
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListExcludedAudienceResponse {
        const message = { ...baseListExcludedAudienceResponse } as ListExcludedAudienceResponse;
        message.subjects = (object.subjects ?? []).map((e: any) =>
            ListExcludedAudienceResponse_Subject.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListExcludedAudienceResponse): unknown {
        const obj: any = {};
        if (message.subjects) {
            obj.subjects = message.subjects.map((e) =>
                e ? ListExcludedAudienceResponse_Subject.toJSON(e) : undefined,
            );
        } else {
            obj.subjects = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExcludedAudienceResponse>, I>>(
        object: I,
    ): ListExcludedAudienceResponse {
        const message = { ...baseListExcludedAudienceResponse } as ListExcludedAudienceResponse;
        message.subjects =
            object.subjects?.map((e) => ListExcludedAudienceResponse_Subject.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListExcludedAudienceResponse_Subject: object = { id: '', type: '' };

export const ListExcludedAudienceResponse_Subject: {
    encode(message: ListExcludedAudienceResponse_Subject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListExcludedAudienceResponse_Subject;
    fromJSON(object: any): ListExcludedAudienceResponse_Subject;
    toJSON(message: ListExcludedAudienceResponse_Subject): unknown;
    fromPartial<I extends Exact<DeepPartial<ListExcludedAudienceResponse_Subject>, I>>(object: I): ListExcludedAudienceResponse_Subject;
} = {
    encode(
        message: ListExcludedAudienceResponse_Subject,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExcludedAudienceResponse_Subject {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListExcludedAudienceResponse_Subject,
        } as ListExcludedAudienceResponse_Subject;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListExcludedAudienceResponse_Subject {
        const message = {
            ...baseListExcludedAudienceResponse_Subject,
        } as ListExcludedAudienceResponse_Subject;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        return message;
    },

    toJSON(message: ListExcludedAudienceResponse_Subject): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExcludedAudienceResponse_Subject>, I>>(
        object: I,
    ): ListExcludedAudienceResponse_Subject {
        const message = {
            ...baseListExcludedAudienceResponse_Subject,
        } as ListExcludedAudienceResponse_Subject;
        message.id = object.id ?? '';
        message.type = object.type ?? '';
        return message;
    },
};

/** a set of methods for managing MFA enforcements */
export const MfaEnforcementServiceService = {
    /** creates an MFA enforcement in the specified organization */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateMfaEnforcementRequest) =>
            Buffer.from(CreateMfaEnforcementRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateMfaEnforcementRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** updates the specified MFA enforcement */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateMfaEnforcementRequest) =>
            Buffer.from(UpdateMfaEnforcementRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateMfaEnforcementRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** activates the specified MFA enforcement */
    activate: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ActivateMfaEnforcementRequest) =>
            Buffer.from(ActivateMfaEnforcementRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ActivateMfaEnforcementRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** deactivates the specified MFA enforcement */
    deactivate: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/Deactivate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeactivateMfaEnforcementRequest) =>
            Buffer.from(DeactivateMfaEnforcementRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeactivateMfaEnforcementRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** deletes the specified MFA enforcement */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteMfaEnforcementRequest) =>
            Buffer.from(DeleteMfaEnforcementRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteMfaEnforcementRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** returns the specified MFA enforcement */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetMfaEnforcementRequest) =>
            Buffer.from(GetMfaEnforcementRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetMfaEnforcementRequest.decode(value),
        responseSerialize: (value: MfaEnforcement) =>
            Buffer.from(MfaEnforcement.encode(value).finish()),
        responseDeserialize: (value: Buffer) => MfaEnforcement.decode(value),
    },
    /** returns MFA enforcements for the specified organization */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListMfaEnforcementsRequest) =>
            Buffer.from(ListMfaEnforcementsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListMfaEnforcementsRequest.decode(value),
        responseSerialize: (value: ListMfaEnforcementsResponse) =>
            Buffer.from(ListMfaEnforcementsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListMfaEnforcementsResponse.decode(value),
    },
    /** updates specified MFA enforcement's audience */
    updateAudience: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/UpdateAudience',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAudienceRequest) =>
            Buffer.from(UpdateAudienceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAudienceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** returns specified MFA enforcement's audience */
    listAudience: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/ListAudience',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAudienceRequest) =>
            Buffer.from(ListAudienceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAudienceRequest.decode(value),
        responseSerialize: (value: ListAudienceResponse) =>
            Buffer.from(ListAudienceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAudienceResponse.decode(value),
    },
    /** updates specified MFA enforcement's excluded audience */
    updateExcludedAudience: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/UpdateExcludedAudience',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateExcludedAudienceRequest) =>
            Buffer.from(UpdateExcludedAudienceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateExcludedAudienceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** returns specified MFA enforcement's excluded audience */
    listExcludedAudience: {
        path: '/yandex.cloud.organizationmanager.v1.MfaEnforcementService/ListExcludedAudience',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListExcludedAudienceRequest) =>
            Buffer.from(ListExcludedAudienceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListExcludedAudienceRequest.decode(value),
        responseSerialize: (value: ListExcludedAudienceResponse) =>
            Buffer.from(ListExcludedAudienceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListExcludedAudienceResponse.decode(value),
    },
} as const;

export interface MfaEnforcementServiceServer extends UntypedServiceImplementation {
    /** creates an MFA enforcement in the specified organization */
    create: handleUnaryCall<CreateMfaEnforcementRequest, Operation>;
    /** updates the specified MFA enforcement */
    update: handleUnaryCall<UpdateMfaEnforcementRequest, Operation>;
    /** activates the specified MFA enforcement */
    activate: handleUnaryCall<ActivateMfaEnforcementRequest, Operation>;
    /** deactivates the specified MFA enforcement */
    deactivate: handleUnaryCall<DeactivateMfaEnforcementRequest, Operation>;
    /** deletes the specified MFA enforcement */
    delete: handleUnaryCall<DeleteMfaEnforcementRequest, Operation>;
    /** returns the specified MFA enforcement */
    get: handleUnaryCall<GetMfaEnforcementRequest, MfaEnforcement>;
    /** returns MFA enforcements for the specified organization */
    list: handleUnaryCall<ListMfaEnforcementsRequest, ListMfaEnforcementsResponse>;
    /** updates specified MFA enforcement's audience */
    updateAudience: handleUnaryCall<UpdateAudienceRequest, Operation>;
    /** returns specified MFA enforcement's audience */
    listAudience: handleUnaryCall<ListAudienceRequest, ListAudienceResponse>;
    /** updates specified MFA enforcement's excluded audience */
    updateExcludedAudience: handleUnaryCall<UpdateExcludedAudienceRequest, Operation>;
    /** returns specified MFA enforcement's excluded audience */
    listExcludedAudience: handleUnaryCall<
        ListExcludedAudienceRequest,
        ListExcludedAudienceResponse
    >;
}

export interface MfaEnforcementServiceClient extends Client {
    /** creates an MFA enforcement in the specified organization */
    create(
        request: CreateMfaEnforcementRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateMfaEnforcementRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateMfaEnforcementRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** updates the specified MFA enforcement */
    update(
        request: UpdateMfaEnforcementRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateMfaEnforcementRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateMfaEnforcementRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** activates the specified MFA enforcement */
    activate(
        request: ActivateMfaEnforcementRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateMfaEnforcementRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateMfaEnforcementRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** deactivates the specified MFA enforcement */
    deactivate(
        request: DeactivateMfaEnforcementRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateMfaEnforcementRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateMfaEnforcementRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** deletes the specified MFA enforcement */
    delete(
        request: DeleteMfaEnforcementRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteMfaEnforcementRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteMfaEnforcementRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** returns the specified MFA enforcement */
    get(
        request: GetMfaEnforcementRequest,
        callback: (error: ServiceError | null, response: MfaEnforcement) => void,
    ): ClientUnaryCall;
    get(
        request: GetMfaEnforcementRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: MfaEnforcement) => void,
    ): ClientUnaryCall;
    get(
        request: GetMfaEnforcementRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: MfaEnforcement) => void,
    ): ClientUnaryCall;
    /** returns MFA enforcements for the specified organization */
    list(
        request: ListMfaEnforcementsRequest,
        callback: (error: ServiceError | null, response: ListMfaEnforcementsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListMfaEnforcementsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListMfaEnforcementsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListMfaEnforcementsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListMfaEnforcementsResponse) => void,
    ): ClientUnaryCall;
    /** updates specified MFA enforcement's audience */
    updateAudience(
        request: UpdateAudienceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAudience(
        request: UpdateAudienceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAudience(
        request: UpdateAudienceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** returns specified MFA enforcement's audience */
    listAudience(
        request: ListAudienceRequest,
        callback: (error: ServiceError | null, response: ListAudienceResponse) => void,
    ): ClientUnaryCall;
    listAudience(
        request: ListAudienceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAudienceResponse) => void,
    ): ClientUnaryCall;
    listAudience(
        request: ListAudienceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAudienceResponse) => void,
    ): ClientUnaryCall;
    /** updates specified MFA enforcement's excluded audience */
    updateExcludedAudience(
        request: UpdateExcludedAudienceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateExcludedAudience(
        request: UpdateExcludedAudienceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateExcludedAudience(
        request: UpdateExcludedAudienceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** returns specified MFA enforcement's excluded audience */
    listExcludedAudience(
        request: ListExcludedAudienceRequest,
        callback: (error: ServiceError | null, response: ListExcludedAudienceResponse) => void,
    ): ClientUnaryCall;
    listExcludedAudience(
        request: ListExcludedAudienceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListExcludedAudienceResponse) => void,
    ): ClientUnaryCall;
    listExcludedAudience(
        request: ListExcludedAudienceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListExcludedAudienceResponse) => void,
    ): ClientUnaryCall;
}

export const MfaEnforcementServiceClient = makeGenericClientConstructor(
    MfaEnforcementServiceService,
    'yandex.cloud.organizationmanager.v1.MfaEnforcementService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): MfaEnforcementServiceClient;
    service: typeof MfaEnforcementServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
