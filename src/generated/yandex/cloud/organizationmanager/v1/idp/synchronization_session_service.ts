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
import {
    SessionType,
    SynchronizationSettings,
    sessionTypeFromJSON,
    sessionTypeToJSON,
} from './synchronization_settings';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { Operation } from '../../../operation/operation';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp';

/** Result of opening a synchronization session. */
export enum OpenSessionResult {
    /** OPEN_SESSION_RESULT_UNSPECIFIED - The result is not specified. */
    OPEN_SESSION_RESULT_UNSPECIFIED = 0,
    /** SUCCESS - Session opened successfully. */
    SUCCESS = 1,
    /** OPENED_SESSION_EXISTS - A session already exists. */
    OPENED_SESSION_EXISTS = 2,
    /** TOO_EARLY - Too early to open a new session. */
    TOO_EARLY = 3,
    UNRECOGNIZED = -1,
}

export function openSessionResultFromJSON(object: any): OpenSessionResult {
    switch (object) {
        case 0:
        case 'OPEN_SESSION_RESULT_UNSPECIFIED':
            return OpenSessionResult.OPEN_SESSION_RESULT_UNSPECIFIED;
        case 1:
        case 'SUCCESS':
            return OpenSessionResult.SUCCESS;
        case 2:
        case 'OPENED_SESSION_EXISTS':
            return OpenSessionResult.OPENED_SESSION_EXISTS;
        case 3:
        case 'TOO_EARLY':
            return OpenSessionResult.TOO_EARLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OpenSessionResult.UNRECOGNIZED;
    }
}

export function openSessionResultToJSON(object: OpenSessionResult): string {
    switch (object) {
        case OpenSessionResult.OPEN_SESSION_RESULT_UNSPECIFIED:
            return 'OPEN_SESSION_RESULT_UNSPECIFIED';
        case OpenSessionResult.SUCCESS:
            return 'SUCCESS';
        case OpenSessionResult.OPENED_SESSION_EXISTS:
            return 'OPENED_SESSION_EXISTS';
        case OpenSessionResult.TOO_EARLY:
            return 'TOO_EARLY';
        default:
            return 'UNKNOWN';
    }
}

/** Type of change during synchronization. */
export enum ChangeType {
    /** CHANGE_TYPE_UNSPECIFIED - The change type is not specified. */
    CHANGE_TYPE_UNSPECIFIED = 0,
    /** CREATE - Create operation. */
    CREATE = 1,
    /** UPDATE - Update operation. */
    UPDATE = 2,
    /** DELETE - Delete operation. */
    DELETE = 3,
    /** ACTIVATE - Activate operation. */
    ACTIVATE = 4,
    /** DEACTIVATE - Deactivate operation. */
    DEACTIVATE = 5,
    /** PASSWORD_HASH_UPDATE - Password hash update operation. */
    PASSWORD_HASH_UPDATE = 6,
    UNRECOGNIZED = -1,
}

export function changeTypeFromJSON(object: any): ChangeType {
    switch (object) {
        case 0:
        case 'CHANGE_TYPE_UNSPECIFIED':
            return ChangeType.CHANGE_TYPE_UNSPECIFIED;
        case 1:
        case 'CREATE':
            return ChangeType.CREATE;
        case 2:
        case 'UPDATE':
            return ChangeType.UPDATE;
        case 3:
        case 'DELETE':
            return ChangeType.DELETE;
        case 4:
        case 'ACTIVATE':
            return ChangeType.ACTIVATE;
        case 5:
        case 'DEACTIVATE':
            return ChangeType.DEACTIVATE;
        case 6:
        case 'PASSWORD_HASH_UPDATE':
            return ChangeType.PASSWORD_HASH_UPDATE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ChangeType.UNRECOGNIZED;
    }
}

export function changeTypeToJSON(object: ChangeType): string {
    switch (object) {
        case ChangeType.CHANGE_TYPE_UNSPECIFIED:
            return 'CHANGE_TYPE_UNSPECIFIED';
        case ChangeType.CREATE:
            return 'CREATE';
        case ChangeType.UPDATE:
            return 'UPDATE';
        case ChangeType.DELETE:
            return 'DELETE';
        case ChangeType.ACTIVATE:
            return 'ACTIVATE';
        case ChangeType.DEACTIVATE:
            return 'DEACTIVATE';
        case ChangeType.PASSWORD_HASH_UPDATE:
            return 'PASSWORD_HASH_UPDATE';
        default:
            return 'UNKNOWN';
    }
}

/** Type of object related to synchronization. */
export enum RelatedObjectType {
    /** RELATED_OBJECT_TYPE_UNSPECIFIED - The object type is not specified. */
    RELATED_OBJECT_TYPE_UNSPECIFIED = 0,
    /** USER - User object. */
    USER = 1,
    /** GROUP - Group object. */
    GROUP = 2,
    /** MEMBERSHIP - Membership object. */
    MEMBERSHIP = 3,
    UNRECOGNIZED = -1,
}

export function relatedObjectTypeFromJSON(object: any): RelatedObjectType {
    switch (object) {
        case 0:
        case 'RELATED_OBJECT_TYPE_UNSPECIFIED':
            return RelatedObjectType.RELATED_OBJECT_TYPE_UNSPECIFIED;
        case 1:
        case 'USER':
            return RelatedObjectType.USER;
        case 2:
        case 'GROUP':
            return RelatedObjectType.GROUP;
        case 3:
        case 'MEMBERSHIP':
            return RelatedObjectType.MEMBERSHIP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RelatedObjectType.UNRECOGNIZED;
    }
}

export function relatedObjectTypeToJSON(object: RelatedObjectType): string {
    switch (object) {
        case RelatedObjectType.RELATED_OBJECT_TYPE_UNSPECIFIED:
            return 'RELATED_OBJECT_TYPE_UNSPECIFIED';
        case RelatedObjectType.USER:
            return 'USER';
        case RelatedObjectType.GROUP:
            return 'GROUP';
        case RelatedObjectType.MEMBERSHIP:
            return 'MEMBERSHIP';
        default:
            return 'UNKNOWN';
    }
}

/** Synchronization mode. */
export enum SyncMode {
    /** SYNC_MODE_UNSPECIFIED - The sync mode is not specified. */
    SYNC_MODE_UNSPECIFIED = 0,
    /** FULL_SYNC - Full synchronization mode. */
    FULL_SYNC = 1,
    /** DELTA - Delta synchronization mode. */
    DELTA = 2,
    UNRECOGNIZED = -1,
}

export function syncModeFromJSON(object: any): SyncMode {
    switch (object) {
        case 0:
        case 'SYNC_MODE_UNSPECIFIED':
            return SyncMode.SYNC_MODE_UNSPECIFIED;
        case 1:
        case 'FULL_SYNC':
            return SyncMode.FULL_SYNC;
        case 2:
        case 'DELTA':
            return SyncMode.DELTA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SyncMode.UNRECOGNIZED;
    }
}

export function syncModeToJSON(object: SyncMode): string {
    switch (object) {
        case SyncMode.SYNC_MODE_UNSPECIFIED:
            return 'SYNC_MODE_UNSPECIFIED';
        case SyncMode.FULL_SYNC:
            return 'FULL_SYNC';
        case SyncMode.DELTA:
            return 'DELTA';
        default:
            return 'UNKNOWN';
    }
}

/** Status of a synchronization session. */
export enum SessionStatus {
    /** SESSION_STATUS_UNSPECIFIED - The status is not specified. */
    SESSION_STATUS_UNSPECIFIED = 0,
    /** OPENED - Session is opened. */
    OPENED = 1,
    /** PENDING - Session is pending. */
    PENDING = 2,
    /** COMPLETED - Session is completed. */
    COMPLETED = 3,
    /** FAILED - Session has failed. */
    FAILED = 4,
    /** EXPIRED - Session has expired. */
    EXPIRED = 5,
    UNRECOGNIZED = -1,
}

export function sessionStatusFromJSON(object: any): SessionStatus {
    switch (object) {
        case 0:
        case 'SESSION_STATUS_UNSPECIFIED':
            return SessionStatus.SESSION_STATUS_UNSPECIFIED;
        case 1:
        case 'OPENED':
            return SessionStatus.OPENED;
        case 2:
        case 'PENDING':
            return SessionStatus.PENDING;
        case 3:
        case 'COMPLETED':
            return SessionStatus.COMPLETED;
        case 4:
        case 'FAILED':
            return SessionStatus.FAILED;
        case 5:
        case 'EXPIRED':
            return SessionStatus.EXPIRED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SessionStatus.UNRECOGNIZED;
    }
}

export function sessionStatusToJSON(object: SessionStatus): string {
    switch (object) {
        case SessionStatus.SESSION_STATUS_UNSPECIFIED:
            return 'SESSION_STATUS_UNSPECIFIED';
        case SessionStatus.OPENED:
            return 'OPENED';
        case SessionStatus.PENDING:
            return 'PENDING';
        case SessionStatus.COMPLETED:
            return 'COMPLETED';
        case SessionStatus.FAILED:
            return 'FAILED';
        case SessionStatus.EXPIRED:
            return 'EXPIRED';
        default:
            return 'UNKNOWN';
    }
}

/** Request to open a synchronization session. */
export interface OpenSessionRequest {
    /** ID of the subject container. */
    subjectContainerId: string;
    /** ID of the agent opening the session. */
    agentId: string;
    /** Type of synchronization session. */
    sessionType: SessionType;
}

/** Synchronization session information. */
export interface SynchronizationSession {
    /** Unique identifier of the session. */
    sessionId: string;
    /** ID of the agent managing the session. */
    agentId: string;
    /** Timestamp when the session was created. */
    createdAt?: Date;
    /** Timestamp when the session expires. */
    expiresAt?: Date;
    /** Timestamp when the session was closed. */
    closedAt?: Date;
    /** Synchronization mode. */
    syncMode: SyncMode;
    /** Current status of the session. */
    status: SessionStatus;
    /** List of progress entries. */
    progressEntries: ProgressEntry[];
    /** Reason for session failure, if any. */
    failReason: string;
    /** Type of synchronization session. */
    sessionType: SessionType;
}

/** Response message for [SynchronizationSessionService.OpenSession]. */
export interface OpenSessionResponse {
    /** Result of opening the session. */
    result: OpenSessionResult;
    /** Opened session information. */
    openedSession?: SynchronizationSession | undefined;
    /** Timestamp for the next session if too early. */
    nextSessionAt?: Date | undefined;
    /** Replication token for the session. */
    replicationToken: string;
    /** Synchronization settings for the session. */
    synchronizationSettings?: SynchronizationSettings;
}

/** Metadata for the [SynchronizationSessionService.OpenSession] operation. */
export interface OpenSessionMetadata {
    /** ID of the session. */
    sessionId: string;
}

/** Request to get a synchronization session. */
export interface GetSessionRequest {
    /** ID of the session to return. */
    sessionId: string;
}

/** Response message for [SynchronizationSessionService.GetSession]. */
export interface GetSessionResponse {
    /** Synchronization session information. */
    session?: SynchronizationSession;
}

/** Request to report session progress. */
export interface ReportSessionProgressRequest {
    /** ID of the session. */
    sessionId: string;
    /** List of progress entries. */
    progressEntries: ProgressEntry[];
}

/** Metadata for the [SynchronizationSessionService.ReportSessionProgress] operation. */
export interface ReportSessionProgressMetadata {
    /** ID of the session. */
    sessionId: string;
}

/** Progress entry for synchronization. */
export interface ProgressEntry {
    /** Type of object being synchronized. */
    objectType: RelatedObjectType;
    /** List of change information. */
    changeInfo: ChangeInfo[];
}

/** Information about changes during synchronization. */
export interface ChangeInfo {
    /** Type of change. */
    changeType: ChangeType;
    /** Number of successful changes. */
    successful: number;
    /** Number of failed changes. */
    failed: number;
}

/** Request to list synchronization sessions. */
export interface ListSessionsRequest {
    /** ID of the subject container. */
    subjectContainerId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /** Page token for pagination. */
    pageToken: string;
    /** A filter expression that filters resources listed in the response. */
    filter: string;
}

/** Response message for [SynchronizationSessionService.ListSessions]. */
export interface ListSessionsResponse {
    /** List of synchronization sessions. */
    sessions: SynchronizationSession[];
    /** Token for getting the next page of the list. */
    nextPageToken: string;
}

/** Request to close a synchronization session. */
export interface CloseSessionRequest {
    /** ID of the session to close. */
    sessionId: string;
    /** Whether the session failed. */
    failed: boolean;
    /** Reason for session failure, if any. */
    failReason: string;
}

/** Metadata for the [SynchronizationSessionService.CloseSession] operation. */
export interface CloseSessionMetadata {
    /** ID of the session. */
    sessionId: string;
}

/** Request to send a heartbeat for a synchronization session. */
export interface HeartbeatRequest {
    /** ID of the session. */
    sessionId: string;
}

/** Metadata for the [SynchronizationSessionService.Heartbeat] operation. */
export interface HeartbeatMetadata {
    /** ID of the session. */
    sessionId: string;
}

const baseOpenSessionRequest: object = { subjectContainerId: '', agentId: '', sessionType: 0 };

export const OpenSessionRequest: {
    encode(message: OpenSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSessionRequest;
    fromJSON(object: any): OpenSessionRequest;
    toJSON(message: OpenSessionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSessionRequest>, I>>(object: I): OpenSessionRequest;
} = {
    encode(message: OpenSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        if (message.agentId !== '') {
            writer.uint32(18).string(message.agentId);
        }
        if (message.sessionType !== 0) {
            writer.uint32(24).int32(message.sessionType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSessionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSessionRequest } as OpenSessionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                case 2:
                    message.agentId = reader.string();
                    break;
                case 3:
                    message.sessionType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenSessionRequest {
        const message = { ...baseOpenSessionRequest } as OpenSessionRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.agentId =
            object.agentId !== undefined && object.agentId !== null ? String(object.agentId) : '';
        message.sessionType =
            object.sessionType !== undefined && object.sessionType !== null
                ? sessionTypeFromJSON(object.sessionType)
                : 0;
        return message;
    },

    toJSON(message: OpenSessionRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.agentId !== undefined && (obj.agentId = message.agentId);
        message.sessionType !== undefined &&
            (obj.sessionType = sessionTypeToJSON(message.sessionType));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSessionRequest>, I>>(
        object: I,
    ): OpenSessionRequest {
        const message = { ...baseOpenSessionRequest } as OpenSessionRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.agentId = object.agentId ?? '';
        message.sessionType = object.sessionType ?? 0;
        return message;
    },
};

const baseSynchronizationSession: object = {
    sessionId: '',
    agentId: '',
    syncMode: 0,
    status: 0,
    failReason: '',
    sessionType: 0,
};

export const SynchronizationSession: {
    encode(message: SynchronizationSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SynchronizationSession;
    fromJSON(object: any): SynchronizationSession;
    toJSON(message: SynchronizationSession): unknown;
    fromPartial<I extends Exact<DeepPartial<SynchronizationSession>, I>>(object: I): SynchronizationSession;
} = {
    encode(message: SynchronizationSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.agentId !== '') {
            writer.uint32(18).string(message.agentId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.closedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.closedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.syncMode !== 0) {
            writer.uint32(48).int32(message.syncMode);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        for (const v of message.progressEntries) {
            ProgressEntry.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.failReason !== '') {
            writer.uint32(74).string(message.failReason);
        }
        if (message.sessionType !== 0) {
            writer.uint32(80).int32(message.sessionType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SynchronizationSession {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSynchronizationSession } as SynchronizationSession;
        message.progressEntries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    message.agentId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.closedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.syncMode = reader.int32() as any;
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.progressEntries.push(ProgressEntry.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.failReason = reader.string();
                    break;
                case 10:
                    message.sessionType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SynchronizationSession {
        const message = { ...baseSynchronizationSession } as SynchronizationSession;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        message.agentId =
            object.agentId !== undefined && object.agentId !== null ? String(object.agentId) : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        message.closedAt =
            object.closedAt !== undefined && object.closedAt !== null
                ? fromJsonTimestamp(object.closedAt)
                : undefined;
        message.syncMode =
            object.syncMode !== undefined && object.syncMode !== null
                ? syncModeFromJSON(object.syncMode)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? sessionStatusFromJSON(object.status)
                : 0;
        message.progressEntries = (object.progressEntries ?? []).map((e: any) =>
            ProgressEntry.fromJSON(e),
        );
        message.failReason =
            object.failReason !== undefined && object.failReason !== null
                ? String(object.failReason)
                : '';
        message.sessionType =
            object.sessionType !== undefined && object.sessionType !== null
                ? sessionTypeFromJSON(object.sessionType)
                : 0;
        return message;
    },

    toJSON(message: SynchronizationSession): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.agentId !== undefined && (obj.agentId = message.agentId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        message.closedAt !== undefined && (obj.closedAt = message.closedAt.toISOString());
        message.syncMode !== undefined && (obj.syncMode = syncModeToJSON(message.syncMode));
        message.status !== undefined && (obj.status = sessionStatusToJSON(message.status));
        if (message.progressEntries) {
            obj.progressEntries = message.progressEntries.map((e) =>
                e ? ProgressEntry.toJSON(e) : undefined,
            );
        } else {
            obj.progressEntries = [];
        }
        message.failReason !== undefined && (obj.failReason = message.failReason);
        message.sessionType !== undefined &&
            (obj.sessionType = sessionTypeToJSON(message.sessionType));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SynchronizationSession>, I>>(
        object: I,
    ): SynchronizationSession {
        const message = { ...baseSynchronizationSession } as SynchronizationSession;
        message.sessionId = object.sessionId ?? '';
        message.agentId = object.agentId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.expiresAt = object.expiresAt ?? undefined;
        message.closedAt = object.closedAt ?? undefined;
        message.syncMode = object.syncMode ?? 0;
        message.status = object.status ?? 0;
        message.progressEntries =
            object.progressEntries?.map((e) => ProgressEntry.fromPartial(e)) || [];
        message.failReason = object.failReason ?? '';
        message.sessionType = object.sessionType ?? 0;
        return message;
    },
};

const baseOpenSessionResponse: object = { result: 0, replicationToken: '' };

export const OpenSessionResponse: {
    encode(message: OpenSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSessionResponse;
    fromJSON(object: any): OpenSessionResponse;
    toJSON(message: OpenSessionResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSessionResponse>, I>>(object: I): OpenSessionResponse;
} = {
    encode(message: OpenSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        if (message.openedSession !== undefined) {
            SynchronizationSession.encode(message.openedSession, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextSessionAt !== undefined) {
            Timestamp.encode(toTimestamp(message.nextSessionAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.replicationToken !== '') {
            writer.uint32(34).string(message.replicationToken);
        }
        if (message.synchronizationSettings !== undefined) {
            SynchronizationSettings.encode(
                message.synchronizationSettings,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSessionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSessionResponse } as OpenSessionResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32() as any;
                    break;
                case 2:
                    message.openedSession = SynchronizationSession.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextSessionAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 4:
                    message.replicationToken = reader.string();
                    break;
                case 5:
                    message.synchronizationSettings = SynchronizationSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenSessionResponse {
        const message = { ...baseOpenSessionResponse } as OpenSessionResponse;
        message.result =
            object.result !== undefined && object.result !== null
                ? openSessionResultFromJSON(object.result)
                : 0;
        message.openedSession =
            object.openedSession !== undefined && object.openedSession !== null
                ? SynchronizationSession.fromJSON(object.openedSession)
                : undefined;
        message.nextSessionAt =
            object.nextSessionAt !== undefined && object.nextSessionAt !== null
                ? fromJsonTimestamp(object.nextSessionAt)
                : undefined;
        message.replicationToken =
            object.replicationToken !== undefined && object.replicationToken !== null
                ? String(object.replicationToken)
                : '';
        message.synchronizationSettings =
            object.synchronizationSettings !== undefined && object.synchronizationSettings !== null
                ? SynchronizationSettings.fromJSON(object.synchronizationSettings)
                : undefined;
        return message;
    },

    toJSON(message: OpenSessionResponse): unknown {
        const obj: any = {};
        message.result !== undefined && (obj.result = openSessionResultToJSON(message.result));
        message.openedSession !== undefined &&
            (obj.openedSession = message.openedSession
                ? SynchronizationSession.toJSON(message.openedSession)
                : undefined);
        message.nextSessionAt !== undefined &&
            (obj.nextSessionAt = message.nextSessionAt.toISOString());
        message.replicationToken !== undefined && (obj.replicationToken = message.replicationToken);
        message.synchronizationSettings !== undefined &&
            (obj.synchronizationSettings = message.synchronizationSettings
                ? SynchronizationSettings.toJSON(message.synchronizationSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSessionResponse>, I>>(
        object: I,
    ): OpenSessionResponse {
        const message = { ...baseOpenSessionResponse } as OpenSessionResponse;
        message.result = object.result ?? 0;
        message.openedSession =
            object.openedSession !== undefined && object.openedSession !== null
                ? SynchronizationSession.fromPartial(object.openedSession)
                : undefined;
        message.nextSessionAt = object.nextSessionAt ?? undefined;
        message.replicationToken = object.replicationToken ?? '';
        message.synchronizationSettings =
            object.synchronizationSettings !== undefined && object.synchronizationSettings !== null
                ? SynchronizationSettings.fromPartial(object.synchronizationSettings)
                : undefined;
        return message;
    },
};

const baseOpenSessionMetadata: object = { sessionId: '' };

export const OpenSessionMetadata: {
    encode(message: OpenSessionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSessionMetadata;
    fromJSON(object: any): OpenSessionMetadata;
    toJSON(message: OpenSessionMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSessionMetadata>, I>>(object: I): OpenSessionMetadata;
} = {
    encode(message: OpenSessionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSessionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSessionMetadata } as OpenSessionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenSessionMetadata {
        const message = { ...baseOpenSessionMetadata } as OpenSessionMetadata;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        return message;
    },

    toJSON(message: OpenSessionMetadata): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSessionMetadata>, I>>(
        object: I,
    ): OpenSessionMetadata {
        const message = { ...baseOpenSessionMetadata } as OpenSessionMetadata;
        message.sessionId = object.sessionId ?? '';
        return message;
    },
};

const baseGetSessionRequest: object = { sessionId: '' };

export const GetSessionRequest: {
    encode(message: GetSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionRequest;
    fromJSON(object: any): GetSessionRequest;
    toJSON(message: GetSessionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetSessionRequest>, I>>(object: I): GetSessionRequest;
} = {
    encode(message: GetSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSessionRequest } as GetSessionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSessionRequest {
        const message = { ...baseGetSessionRequest } as GetSessionRequest;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        return message;
    },

    toJSON(message: GetSessionRequest): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetSessionRequest>, I>>(object: I): GetSessionRequest {
        const message = { ...baseGetSessionRequest } as GetSessionRequest;
        message.sessionId = object.sessionId ?? '';
        return message;
    },
};

const baseGetSessionResponse: object = {};

export const GetSessionResponse: {
    encode(message: GetSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionResponse;
    fromJSON(object: any): GetSessionResponse;
    toJSON(message: GetSessionResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetSessionResponse>, I>>(object: I): GetSessionResponse;
} = {
    encode(message: GetSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.session !== undefined) {
            SynchronizationSession.encode(message.session, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSessionResponse } as GetSessionResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.session = SynchronizationSession.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSessionResponse {
        const message = { ...baseGetSessionResponse } as GetSessionResponse;
        message.session =
            object.session !== undefined && object.session !== null
                ? SynchronizationSession.fromJSON(object.session)
                : undefined;
        return message;
    },

    toJSON(message: GetSessionResponse): unknown {
        const obj: any = {};
        message.session !== undefined &&
            (obj.session = message.session
                ? SynchronizationSession.toJSON(message.session)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetSessionResponse>, I>>(
        object: I,
    ): GetSessionResponse {
        const message = { ...baseGetSessionResponse } as GetSessionResponse;
        message.session =
            object.session !== undefined && object.session !== null
                ? SynchronizationSession.fromPartial(object.session)
                : undefined;
        return message;
    },
};

const baseReportSessionProgressRequest: object = { sessionId: '' };

export const ReportSessionProgressRequest: {
    encode(message: ReportSessionProgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportSessionProgressRequest;
    fromJSON(object: any): ReportSessionProgressRequest;
    toJSON(message: ReportSessionProgressRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ReportSessionProgressRequest>, I>>(object: I): ReportSessionProgressRequest;
} = {
    encode(
        message: ReportSessionProgressRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        for (const v of message.progressEntries) {
            ProgressEntry.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReportSessionProgressRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReportSessionProgressRequest } as ReportSessionProgressRequest;
        message.progressEntries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    message.progressEntries.push(ProgressEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReportSessionProgressRequest {
        const message = { ...baseReportSessionProgressRequest } as ReportSessionProgressRequest;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        message.progressEntries = (object.progressEntries ?? []).map((e: any) =>
            ProgressEntry.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ReportSessionProgressRequest): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        if (message.progressEntries) {
            obj.progressEntries = message.progressEntries.map((e) =>
                e ? ProgressEntry.toJSON(e) : undefined,
            );
        } else {
            obj.progressEntries = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReportSessionProgressRequest>, I>>(
        object: I,
    ): ReportSessionProgressRequest {
        const message = { ...baseReportSessionProgressRequest } as ReportSessionProgressRequest;
        message.sessionId = object.sessionId ?? '';
        message.progressEntries =
            object.progressEntries?.map((e) => ProgressEntry.fromPartial(e)) || [];
        return message;
    },
};

const baseReportSessionProgressMetadata: object = { sessionId: '' };

export const ReportSessionProgressMetadata: {
    encode(message: ReportSessionProgressMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportSessionProgressMetadata;
    fromJSON(object: any): ReportSessionProgressMetadata;
    toJSON(message: ReportSessionProgressMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ReportSessionProgressMetadata>, I>>(object: I): ReportSessionProgressMetadata;
} = {
    encode(
        message: ReportSessionProgressMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReportSessionProgressMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReportSessionProgressMetadata } as ReportSessionProgressMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReportSessionProgressMetadata {
        const message = { ...baseReportSessionProgressMetadata } as ReportSessionProgressMetadata;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        return message;
    },

    toJSON(message: ReportSessionProgressMetadata): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReportSessionProgressMetadata>, I>>(
        object: I,
    ): ReportSessionProgressMetadata {
        const message = { ...baseReportSessionProgressMetadata } as ReportSessionProgressMetadata;
        message.sessionId = object.sessionId ?? '';
        return message;
    },
};

const baseProgressEntry: object = { objectType: 0 };

export const ProgressEntry: {
    encode(message: ProgressEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProgressEntry;
    fromJSON(object: any): ProgressEntry;
    toJSON(message: ProgressEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<ProgressEntry>, I>>(object: I): ProgressEntry;
} = {
    encode(message: ProgressEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.objectType !== 0) {
            writer.uint32(8).int32(message.objectType);
        }
        for (const v of message.changeInfo) {
            ChangeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProgressEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProgressEntry } as ProgressEntry;
        message.changeInfo = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.objectType = reader.int32() as any;
                    break;
                case 2:
                    message.changeInfo.push(ChangeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProgressEntry {
        const message = { ...baseProgressEntry } as ProgressEntry;
        message.objectType =
            object.objectType !== undefined && object.objectType !== null
                ? relatedObjectTypeFromJSON(object.objectType)
                : 0;
        message.changeInfo = (object.changeInfo ?? []).map((e: any) => ChangeInfo.fromJSON(e));
        return message;
    },

    toJSON(message: ProgressEntry): unknown {
        const obj: any = {};
        message.objectType !== undefined &&
            (obj.objectType = relatedObjectTypeToJSON(message.objectType));
        if (message.changeInfo) {
            obj.changeInfo = message.changeInfo.map((e) => (e ? ChangeInfo.toJSON(e) : undefined));
        } else {
            obj.changeInfo = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProgressEntry>, I>>(object: I): ProgressEntry {
        const message = { ...baseProgressEntry } as ProgressEntry;
        message.objectType = object.objectType ?? 0;
        message.changeInfo = object.changeInfo?.map((e) => ChangeInfo.fromPartial(e)) || [];
        return message;
    },
};

const baseChangeInfo: object = { changeType: 0, successful: 0, failed: 0 };

export const ChangeInfo: {
    encode(message: ChangeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeInfo;
    fromJSON(object: any): ChangeInfo;
    toJSON(message: ChangeInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<ChangeInfo>, I>>(object: I): ChangeInfo;
} = {
    encode(message: ChangeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.changeType !== 0) {
            writer.uint32(8).int32(message.changeType);
        }
        if (message.successful !== 0) {
            writer.uint32(16).int64(message.successful);
        }
        if (message.failed !== 0) {
            writer.uint32(24).int64(message.failed);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChangeInfo } as ChangeInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.changeType = reader.int32() as any;
                    break;
                case 2:
                    message.successful = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.failed = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ChangeInfo {
        const message = { ...baseChangeInfo } as ChangeInfo;
        message.changeType =
            object.changeType !== undefined && object.changeType !== null
                ? changeTypeFromJSON(object.changeType)
                : 0;
        message.successful =
            object.successful !== undefined && object.successful !== null
                ? Number(object.successful)
                : 0;
        message.failed =
            object.failed !== undefined && object.failed !== null ? Number(object.failed) : 0;
        return message;
    },

    toJSON(message: ChangeInfo): unknown {
        const obj: any = {};
        message.changeType !== undefined && (obj.changeType = changeTypeToJSON(message.changeType));
        message.successful !== undefined && (obj.successful = Math.round(message.successful));
        message.failed !== undefined && (obj.failed = Math.round(message.failed));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ChangeInfo>, I>>(object: I): ChangeInfo {
        const message = { ...baseChangeInfo } as ChangeInfo;
        message.changeType = object.changeType ?? 0;
        message.successful = object.successful ?? 0;
        message.failed = object.failed ?? 0;
        return message;
    },
};

const baseListSessionsRequest: object = {
    subjectContainerId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListSessionsRequest: {
    encode(message: ListSessionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSessionsRequest;
    fromJSON(object: any): ListSessionsRequest;
    toJSON(message: ListSessionsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSessionsRequest>, I>>(object: I): ListSessionsRequest;
} = {
    encode(message: ListSessionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSessionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSessionsRequest } as ListSessionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSessionsRequest {
        const message = { ...baseListSessionsRequest } as ListSessionsRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListSessionsRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSessionsRequest>, I>>(
        object: I,
    ): ListSessionsRequest {
        const message = { ...baseListSessionsRequest } as ListSessionsRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListSessionsResponse: object = { nextPageToken: '' };

export const ListSessionsResponse: {
    encode(message: ListSessionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSessionsResponse;
    fromJSON(object: any): ListSessionsResponse;
    toJSON(message: ListSessionsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSessionsResponse>, I>>(object: I): ListSessionsResponse;
} = {
    encode(message: ListSessionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.sessions) {
            SynchronizationSession.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSessionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSessionsResponse } as ListSessionsResponse;
        message.sessions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessions.push(SynchronizationSession.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListSessionsResponse {
        const message = { ...baseListSessionsResponse } as ListSessionsResponse;
        message.sessions = (object.sessions ?? []).map((e: any) =>
            SynchronizationSession.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListSessionsResponse): unknown {
        const obj: any = {};
        if (message.sessions) {
            obj.sessions = message.sessions.map((e) =>
                e ? SynchronizationSession.toJSON(e) : undefined,
            );
        } else {
            obj.sessions = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSessionsResponse>, I>>(
        object: I,
    ): ListSessionsResponse {
        const message = { ...baseListSessionsResponse } as ListSessionsResponse;
        message.sessions = object.sessions?.map((e) => SynchronizationSession.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCloseSessionRequest: object = { sessionId: '', failed: false, failReason: '' };

export const CloseSessionRequest: {
    encode(message: CloseSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CloseSessionRequest;
    fromJSON(object: any): CloseSessionRequest;
    toJSON(message: CloseSessionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CloseSessionRequest>, I>>(object: I): CloseSessionRequest;
} = {
    encode(message: CloseSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.failed === true) {
            writer.uint32(16).bool(message.failed);
        }
        if (message.failReason !== '') {
            writer.uint32(26).string(message.failReason);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CloseSessionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCloseSessionRequest } as CloseSessionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    message.failed = reader.bool();
                    break;
                case 3:
                    message.failReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloseSessionRequest {
        const message = { ...baseCloseSessionRequest } as CloseSessionRequest;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        message.failed =
            object.failed !== undefined && object.failed !== null ? Boolean(object.failed) : false;
        message.failReason =
            object.failReason !== undefined && object.failReason !== null
                ? String(object.failReason)
                : '';
        return message;
    },

    toJSON(message: CloseSessionRequest): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.failed !== undefined && (obj.failed = message.failed);
        message.failReason !== undefined && (obj.failReason = message.failReason);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CloseSessionRequest>, I>>(
        object: I,
    ): CloseSessionRequest {
        const message = { ...baseCloseSessionRequest } as CloseSessionRequest;
        message.sessionId = object.sessionId ?? '';
        message.failed = object.failed ?? false;
        message.failReason = object.failReason ?? '';
        return message;
    },
};

const baseCloseSessionMetadata: object = { sessionId: '' };

export const CloseSessionMetadata: {
    encode(message: CloseSessionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CloseSessionMetadata;
    fromJSON(object: any): CloseSessionMetadata;
    toJSON(message: CloseSessionMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CloseSessionMetadata>, I>>(object: I): CloseSessionMetadata;
} = {
    encode(message: CloseSessionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CloseSessionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCloseSessionMetadata } as CloseSessionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloseSessionMetadata {
        const message = { ...baseCloseSessionMetadata } as CloseSessionMetadata;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        return message;
    },

    toJSON(message: CloseSessionMetadata): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CloseSessionMetadata>, I>>(
        object: I,
    ): CloseSessionMetadata {
        const message = { ...baseCloseSessionMetadata } as CloseSessionMetadata;
        message.sessionId = object.sessionId ?? '';
        return message;
    },
};

const baseHeartbeatRequest: object = { sessionId: '' };

export const HeartbeatRequest: {
    encode(message: HeartbeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeartbeatRequest;
    fromJSON(object: any): HeartbeatRequest;
    toJSON(message: HeartbeatRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<HeartbeatRequest>, I>>(object: I): HeartbeatRequest;
} = {
    encode(message: HeartbeatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HeartbeatRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHeartbeatRequest } as HeartbeatRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HeartbeatRequest {
        const message = { ...baseHeartbeatRequest } as HeartbeatRequest;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        return message;
    },

    toJSON(message: HeartbeatRequest): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HeartbeatRequest>, I>>(object: I): HeartbeatRequest {
        const message = { ...baseHeartbeatRequest } as HeartbeatRequest;
        message.sessionId = object.sessionId ?? '';
        return message;
    },
};

const baseHeartbeatMetadata: object = { sessionId: '' };

export const HeartbeatMetadata: {
    encode(message: HeartbeatMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeartbeatMetadata;
    fromJSON(object: any): HeartbeatMetadata;
    toJSON(message: HeartbeatMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<HeartbeatMetadata>, I>>(object: I): HeartbeatMetadata;
} = {
    encode(message: HeartbeatMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HeartbeatMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHeartbeatMetadata } as HeartbeatMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HeartbeatMetadata {
        const message = { ...baseHeartbeatMetadata } as HeartbeatMetadata;
        message.sessionId =
            object.sessionId !== undefined && object.sessionId !== null
                ? String(object.sessionId)
                : '';
        return message;
    },

    toJSON(message: HeartbeatMetadata): unknown {
        const obj: any = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HeartbeatMetadata>, I>>(object: I): HeartbeatMetadata {
        const message = { ...baseHeartbeatMetadata } as HeartbeatMetadata;
        message.sessionId = object.sessionId ?? '';
        return message;
    },
};

/** A set of methods for managing synchronization sessions. */
export const SynchronizationSessionServiceService = {
    /** Opens a new synchronization session. */
    openSession: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationSessionService/OpenSession',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: OpenSessionRequest) =>
            Buffer.from(OpenSessionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => OpenSessionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Closes a synchronization session. */
    closeSession: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationSessionService/CloseSession',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CloseSessionRequest) =>
            Buffer.from(CloseSessionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CloseSessionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Reports progress for a synchronization session. */
    reportSessionProgress: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationSessionService/ReportSessionProgress',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ReportSessionProgressRequest) =>
            Buffer.from(ReportSessionProgressRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ReportSessionProgressRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Sends a heartbeat for a synchronization session. */
    heartbeat: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationSessionService/Heartbeat',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: HeartbeatRequest) =>
            Buffer.from(HeartbeatRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => HeartbeatRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified synchronization session. */
    getSession: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationSessionService/GetSession',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSessionRequest) =>
            Buffer.from(GetSessionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSessionRequest.decode(value),
        responseSerialize: (value: GetSessionResponse) =>
            Buffer.from(GetSessionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetSessionResponse.decode(value),
    },
    /** Lists synchronization sessions for a subject container. */
    listSessions: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationSessionService/ListSessions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSessionsRequest) =>
            Buffer.from(ListSessionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSessionsRequest.decode(value),
        responseSerialize: (value: ListSessionsResponse) =>
            Buffer.from(ListSessionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSessionsResponse.decode(value),
    },
} as const;

export interface SynchronizationSessionServiceServer extends UntypedServiceImplementation {
    /** Opens a new synchronization session. */
    openSession: handleUnaryCall<OpenSessionRequest, Operation>;
    /** Closes a synchronization session. */
    closeSession: handleUnaryCall<CloseSessionRequest, Operation>;
    /** Reports progress for a synchronization session. */
    reportSessionProgress: handleUnaryCall<ReportSessionProgressRequest, Operation>;
    /** Sends a heartbeat for a synchronization session. */
    heartbeat: handleUnaryCall<HeartbeatRequest, Operation>;
    /** Returns the specified synchronization session. */
    getSession: handleUnaryCall<GetSessionRequest, GetSessionResponse>;
    /** Lists synchronization sessions for a subject container. */
    listSessions: handleUnaryCall<ListSessionsRequest, ListSessionsResponse>;
}

export interface SynchronizationSessionServiceClient extends Client {
    /** Opens a new synchronization session. */
    openSession(
        request: OpenSessionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    openSession(
        request: OpenSessionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    openSession(
        request: OpenSessionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Closes a synchronization session. */
    closeSession(
        request: CloseSessionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    closeSession(
        request: CloseSessionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    closeSession(
        request: CloseSessionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Reports progress for a synchronization session. */
    reportSessionProgress(
        request: ReportSessionProgressRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reportSessionProgress(
        request: ReportSessionProgressRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reportSessionProgress(
        request: ReportSessionProgressRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Sends a heartbeat for a synchronization session. */
    heartbeat(
        request: HeartbeatRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    heartbeat(
        request: HeartbeatRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    heartbeat(
        request: HeartbeatRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns the specified synchronization session. */
    getSession(
        request: GetSessionRequest,
        callback: (error: ServiceError | null, response: GetSessionResponse) => void,
    ): ClientUnaryCall;
    getSession(
        request: GetSessionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetSessionResponse) => void,
    ): ClientUnaryCall;
    getSession(
        request: GetSessionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetSessionResponse) => void,
    ): ClientUnaryCall;
    /** Lists synchronization sessions for a subject container. */
    listSessions(
        request: ListSessionsRequest,
        callback: (error: ServiceError | null, response: ListSessionsResponse) => void,
    ): ClientUnaryCall;
    listSessions(
        request: ListSessionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListSessionsResponse) => void,
    ): ClientUnaryCall;
    listSessions(
        request: ListSessionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListSessionsResponse) => void,
    ): ClientUnaryCall;
}

export const SynchronizationSessionServiceClient = makeGenericClientConstructor(
    SynchronizationSessionServiceService,
    'yandex.cloud.organizationmanager.v1.idp.SynchronizationSessionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SynchronizationSessionServiceClient;
    service: typeof SynchronizationSessionServiceService;
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
