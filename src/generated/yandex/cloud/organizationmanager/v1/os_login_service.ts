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
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

export interface GetOsLoginSettingsRequest {
    organizationId: string;
}

export interface OsLoginSettings {
    userSshKeySettings?: UserSshKeySettings;
    sshCertificateSettings?: SshCertificateSettings;
}

export interface UserSshKeySettings {
    enabled: boolean;
    allowManageOwnKeys: boolean;
}

export interface SshCertificateSettings {
    enabled: boolean;
}

export interface UpdateOsLoginSettingsRequest {
    organizationId: string;
    userSshKeySettings?: UpdateOsLoginSettingsRequest_UserSshKeySettings;
    sshCertificateSettings?: UpdateOsLoginSettingsRequest_SshCertificateSettings;
    updateMask?: FieldMask;
}

export interface UpdateOsLoginSettingsRequest_UserSshKeySettings {
    enabled: boolean;
    allowManageOwnKeys: boolean;
}

export interface UpdateOsLoginSettingsRequest_SshCertificateSettings {
    enabled: boolean;
}

export interface SetDefaultOsLoginProfileRequest {
    osLoginProfileId: string;
}

export interface GetOsLoginProfileRequest {
    osLoginProfileId: string;
}

export interface ListOsLoginProfilesRequest {
    organizationId: string;
    pageSize: number;
    pageToken: string;
    /**
     * A filter expression that filters profiles listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering by subject_id, uid or login.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`).
     * E.g. login="example-login"
     */
    filter: string;
}

export interface ListOsLoginProfilesResponse {
    profiles: OsLoginProfile[];
    nextPageToken: string;
}

export interface OsLoginProfile {
    id: string;
    organizationId: string;
    subjectId: string;
    login: string;
    uid: number;
    isDefault: boolean;
    homeDirectory: string;
    shell: string;
}

export interface UpdateOsLoginProfileRequest {
    osLoginProfileId: string;
    /** must not contain . or end in ~ */
    login: string;
    /** 1000 - 2^63 - 1 */
    uid: number;
    homeDirectory: string;
    shell: string;
    updateMask?: FieldMask;
}

export interface DeleteOsLoginProfileRequest {
    id: string;
}

export interface CreateOsLoginProfileRequest {
    organizationId: string;
    subjectId: string;
    /** must not contain . or end in ~ */
    login: string;
    /** 1000 - 2^63 - 1 */
    uid: number;
    homeDirectory: string;
    shell: string;
}

export interface UpdateOsLoginProfileMetadata {
    osLoginProfileId: string;
}

export interface DeleteOsLoginProfileMetadata {
    osLoginProfileId: string;
}

export interface CreateOsLoginProfileMetadata {
    osLoginProfileId: string;
    organizationId: string;
    subjectId: string;
}

export interface UpdateOsLoginSettingsMetadata {
    organizationId: string;
}

export interface SetDefaultOsLoginProfileMetadata {
    previousDefaultProfileId: string;
    currentDefaultProfileId: string;
}

const baseGetOsLoginSettingsRequest: object = { organizationId: '' };

export const GetOsLoginSettingsRequest = {
    encode(
        message: GetOsLoginSettingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetOsLoginSettingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOsLoginSettingsRequest } as GetOsLoginSettingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOsLoginSettingsRequest {
        const message = { ...baseGetOsLoginSettingsRequest } as GetOsLoginSettingsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        return message;
    },

    toJSON(message: GetOsLoginSettingsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetOsLoginSettingsRequest>, I>>(
        object: I,
    ): GetOsLoginSettingsRequest {
        const message = { ...baseGetOsLoginSettingsRequest } as GetOsLoginSettingsRequest;
        message.organizationId = object.organizationId ?? '';
        return message;
    },
};

const baseOsLoginSettings: object = {};

export const OsLoginSettings = {
    encode(message: OsLoginSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userSshKeySettings !== undefined) {
            UserSshKeySettings.encode(
                message.userSshKeySettings,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.sshCertificateSettings !== undefined) {
            SshCertificateSettings.encode(
                message.sshCertificateSettings,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OsLoginSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOsLoginSettings } as OsLoginSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userSshKeySettings = UserSshKeySettings.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sshCertificateSettings = SshCertificateSettings.decode(
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

    fromJSON(object: any): OsLoginSettings {
        const message = { ...baseOsLoginSettings } as OsLoginSettings;
        message.userSshKeySettings =
            object.userSshKeySettings !== undefined && object.userSshKeySettings !== null
                ? UserSshKeySettings.fromJSON(object.userSshKeySettings)
                : undefined;
        message.sshCertificateSettings =
            object.sshCertificateSettings !== undefined && object.sshCertificateSettings !== null
                ? SshCertificateSettings.fromJSON(object.sshCertificateSettings)
                : undefined;
        return message;
    },

    toJSON(message: OsLoginSettings): unknown {
        const obj: any = {};
        message.userSshKeySettings !== undefined &&
            (obj.userSshKeySettings = message.userSshKeySettings
                ? UserSshKeySettings.toJSON(message.userSshKeySettings)
                : undefined);
        message.sshCertificateSettings !== undefined &&
            (obj.sshCertificateSettings = message.sshCertificateSettings
                ? SshCertificateSettings.toJSON(message.sshCertificateSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OsLoginSettings>, I>>(object: I): OsLoginSettings {
        const message = { ...baseOsLoginSettings } as OsLoginSettings;
        message.userSshKeySettings =
            object.userSshKeySettings !== undefined && object.userSshKeySettings !== null
                ? UserSshKeySettings.fromPartial(object.userSshKeySettings)
                : undefined;
        message.sshCertificateSettings =
            object.sshCertificateSettings !== undefined && object.sshCertificateSettings !== null
                ? SshCertificateSettings.fromPartial(object.sshCertificateSettings)
                : undefined;
        return message;
    },
};

const baseUserSshKeySettings: object = { enabled: false, allowManageOwnKeys: false };

export const UserSshKeySettings = {
    encode(message: UserSshKeySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.allowManageOwnKeys === true) {
            writer.uint32(16).bool(message.allowManageOwnKeys);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSshKeySettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSshKeySettings } as UserSshKeySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.allowManageOwnKeys = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserSshKeySettings {
        const message = { ...baseUserSshKeySettings } as UserSshKeySettings;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.allowManageOwnKeys =
            object.allowManageOwnKeys !== undefined && object.allowManageOwnKeys !== null
                ? Boolean(object.allowManageOwnKeys)
                : false;
        return message;
    },

    toJSON(message: UserSshKeySettings): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.allowManageOwnKeys !== undefined &&
            (obj.allowManageOwnKeys = message.allowManageOwnKeys);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSshKeySettings>, I>>(
        object: I,
    ): UserSshKeySettings {
        const message = { ...baseUserSshKeySettings } as UserSshKeySettings;
        message.enabled = object.enabled ?? false;
        message.allowManageOwnKeys = object.allowManageOwnKeys ?? false;
        return message;
    },
};

const baseSshCertificateSettings: object = { enabled: false };

export const SshCertificateSettings = {
    encode(message: SshCertificateSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SshCertificateSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSshCertificateSettings } as SshCertificateSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SshCertificateSettings {
        const message = { ...baseSshCertificateSettings } as SshCertificateSettings;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },

    toJSON(message: SshCertificateSettings): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SshCertificateSettings>, I>>(
        object: I,
    ): SshCertificateSettings {
        const message = { ...baseSshCertificateSettings } as SshCertificateSettings;
        message.enabled = object.enabled ?? false;
        return message;
    },
};

const baseUpdateOsLoginSettingsRequest: object = { organizationId: '' };

export const UpdateOsLoginSettingsRequest = {
    encode(
        message: UpdateOsLoginSettingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.userSshKeySettings !== undefined) {
            UpdateOsLoginSettingsRequest_UserSshKeySettings.encode(
                message.userSshKeySettings,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.sshCertificateSettings !== undefined) {
            UpdateOsLoginSettingsRequest_SshCertificateSettings.encode(
                message.sshCertificateSettings,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOsLoginSettingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOsLoginSettingsRequest } as UpdateOsLoginSettingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.userSshKeySettings =
                        UpdateOsLoginSettingsRequest_UserSshKeySettings.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 3:
                    message.sshCertificateSettings =
                        UpdateOsLoginSettingsRequest_SshCertificateSettings.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 4:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOsLoginSettingsRequest {
        const message = { ...baseUpdateOsLoginSettingsRequest } as UpdateOsLoginSettingsRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.userSshKeySettings =
            object.userSshKeySettings !== undefined && object.userSshKeySettings !== null
                ? UpdateOsLoginSettingsRequest_UserSshKeySettings.fromJSON(
                      object.userSshKeySettings,
                  )
                : undefined;
        message.sshCertificateSettings =
            object.sshCertificateSettings !== undefined && object.sshCertificateSettings !== null
                ? UpdateOsLoginSettingsRequest_SshCertificateSettings.fromJSON(
                      object.sshCertificateSettings,
                  )
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },

    toJSON(message: UpdateOsLoginSettingsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.userSshKeySettings !== undefined &&
            (obj.userSshKeySettings = message.userSshKeySettings
                ? UpdateOsLoginSettingsRequest_UserSshKeySettings.toJSON(message.userSshKeySettings)
                : undefined);
        message.sshCertificateSettings !== undefined &&
            (obj.sshCertificateSettings = message.sshCertificateSettings
                ? UpdateOsLoginSettingsRequest_SshCertificateSettings.toJSON(
                      message.sshCertificateSettings,
                  )
                : undefined);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOsLoginSettingsRequest>, I>>(
        object: I,
    ): UpdateOsLoginSettingsRequest {
        const message = { ...baseUpdateOsLoginSettingsRequest } as UpdateOsLoginSettingsRequest;
        message.organizationId = object.organizationId ?? '';
        message.userSshKeySettings =
            object.userSshKeySettings !== undefined && object.userSshKeySettings !== null
                ? UpdateOsLoginSettingsRequest_UserSshKeySettings.fromPartial(
                      object.userSshKeySettings,
                  )
                : undefined;
        message.sshCertificateSettings =
            object.sshCertificateSettings !== undefined && object.sshCertificateSettings !== null
                ? UpdateOsLoginSettingsRequest_SshCertificateSettings.fromPartial(
                      object.sshCertificateSettings,
                  )
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};

const baseUpdateOsLoginSettingsRequest_UserSshKeySettings: object = {
    enabled: false,
    allowManageOwnKeys: false,
};

export const UpdateOsLoginSettingsRequest_UserSshKeySettings = {
    encode(
        message: UpdateOsLoginSettingsRequest_UserSshKeySettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.allowManageOwnKeys === true) {
            writer.uint32(16).bool(message.allowManageOwnKeys);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdateOsLoginSettingsRequest_UserSshKeySettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOsLoginSettingsRequest_UserSshKeySettings,
        } as UpdateOsLoginSettingsRequest_UserSshKeySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.allowManageOwnKeys = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOsLoginSettingsRequest_UserSshKeySettings {
        const message = {
            ...baseUpdateOsLoginSettingsRequest_UserSshKeySettings,
        } as UpdateOsLoginSettingsRequest_UserSshKeySettings;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.allowManageOwnKeys =
            object.allowManageOwnKeys !== undefined && object.allowManageOwnKeys !== null
                ? Boolean(object.allowManageOwnKeys)
                : false;
        return message;
    },

    toJSON(message: UpdateOsLoginSettingsRequest_UserSshKeySettings): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.allowManageOwnKeys !== undefined &&
            (obj.allowManageOwnKeys = message.allowManageOwnKeys);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOsLoginSettingsRequest_UserSshKeySettings>, I>>(
        object: I,
    ): UpdateOsLoginSettingsRequest_UserSshKeySettings {
        const message = {
            ...baseUpdateOsLoginSettingsRequest_UserSshKeySettings,
        } as UpdateOsLoginSettingsRequest_UserSshKeySettings;
        message.enabled = object.enabled ?? false;
        message.allowManageOwnKeys = object.allowManageOwnKeys ?? false;
        return message;
    },
};

const baseUpdateOsLoginSettingsRequest_SshCertificateSettings: object = { enabled: false };

export const UpdateOsLoginSettingsRequest_SshCertificateSettings = {
    encode(
        message: UpdateOsLoginSettingsRequest_SshCertificateSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdateOsLoginSettingsRequest_SshCertificateSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOsLoginSettingsRequest_SshCertificateSettings,
        } as UpdateOsLoginSettingsRequest_SshCertificateSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOsLoginSettingsRequest_SshCertificateSettings {
        const message = {
            ...baseUpdateOsLoginSettingsRequest_SshCertificateSettings,
        } as UpdateOsLoginSettingsRequest_SshCertificateSettings;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },

    toJSON(message: UpdateOsLoginSettingsRequest_SshCertificateSettings): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<UpdateOsLoginSettingsRequest_SshCertificateSettings>, I>,
    >(object: I): UpdateOsLoginSettingsRequest_SshCertificateSettings {
        const message = {
            ...baseUpdateOsLoginSettingsRequest_SshCertificateSettings,
        } as UpdateOsLoginSettingsRequest_SshCertificateSettings;
        message.enabled = object.enabled ?? false;
        return message;
    },
};

const baseSetDefaultOsLoginProfileRequest: object = { osLoginProfileId: '' };

export const SetDefaultOsLoginProfileRequest = {
    encode(
        message: SetDefaultOsLoginProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.osLoginProfileId !== '') {
            writer.uint32(10).string(message.osLoginProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultOsLoginProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetDefaultOsLoginProfileRequest,
        } as SetDefaultOsLoginProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osLoginProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetDefaultOsLoginProfileRequest {
        const message = {
            ...baseSetDefaultOsLoginProfileRequest,
        } as SetDefaultOsLoginProfileRequest;
        message.osLoginProfileId =
            object.osLoginProfileId !== undefined && object.osLoginProfileId !== null
                ? String(object.osLoginProfileId)
                : '';
        return message;
    },

    toJSON(message: SetDefaultOsLoginProfileRequest): unknown {
        const obj: any = {};
        message.osLoginProfileId !== undefined && (obj.osLoginProfileId = message.osLoginProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetDefaultOsLoginProfileRequest>, I>>(
        object: I,
    ): SetDefaultOsLoginProfileRequest {
        const message = {
            ...baseSetDefaultOsLoginProfileRequest,
        } as SetDefaultOsLoginProfileRequest;
        message.osLoginProfileId = object.osLoginProfileId ?? '';
        return message;
    },
};

const baseGetOsLoginProfileRequest: object = { osLoginProfileId: '' };

export const GetOsLoginProfileRequest = {
    encode(
        message: GetOsLoginProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.osLoginProfileId !== '') {
            writer.uint32(10).string(message.osLoginProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetOsLoginProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOsLoginProfileRequest } as GetOsLoginProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osLoginProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOsLoginProfileRequest {
        const message = { ...baseGetOsLoginProfileRequest } as GetOsLoginProfileRequest;
        message.osLoginProfileId =
            object.osLoginProfileId !== undefined && object.osLoginProfileId !== null
                ? String(object.osLoginProfileId)
                : '';
        return message;
    },

    toJSON(message: GetOsLoginProfileRequest): unknown {
        const obj: any = {};
        message.osLoginProfileId !== undefined && (obj.osLoginProfileId = message.osLoginProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetOsLoginProfileRequest>, I>>(
        object: I,
    ): GetOsLoginProfileRequest {
        const message = { ...baseGetOsLoginProfileRequest } as GetOsLoginProfileRequest;
        message.osLoginProfileId = object.osLoginProfileId ?? '';
        return message;
    },
};

const baseListOsLoginProfilesRequest: object = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListOsLoginProfilesRequest = {
    encode(
        message: ListOsLoginProfilesRequest,
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
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOsLoginProfilesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOsLoginProfilesRequest } as ListOsLoginProfilesRequest;
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

    fromJSON(object: any): ListOsLoginProfilesRequest {
        const message = { ...baseListOsLoginProfilesRequest } as ListOsLoginProfilesRequest;
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
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListOsLoginProfilesRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOsLoginProfilesRequest>, I>>(
        object: I,
    ): ListOsLoginProfilesRequest {
        const message = { ...baseListOsLoginProfilesRequest } as ListOsLoginProfilesRequest;
        message.organizationId = object.organizationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListOsLoginProfilesResponse: object = { nextPageToken: '' };

export const ListOsLoginProfilesResponse = {
    encode(
        message: ListOsLoginProfilesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.profiles) {
            OsLoginProfile.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOsLoginProfilesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOsLoginProfilesResponse } as ListOsLoginProfilesResponse;
        message.profiles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profiles.push(OsLoginProfile.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListOsLoginProfilesResponse {
        const message = { ...baseListOsLoginProfilesResponse } as ListOsLoginProfilesResponse;
        message.profiles = (object.profiles ?? []).map((e: any) => OsLoginProfile.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListOsLoginProfilesResponse): unknown {
        const obj: any = {};
        if (message.profiles) {
            obj.profiles = message.profiles.map((e) => (e ? OsLoginProfile.toJSON(e) : undefined));
        } else {
            obj.profiles = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOsLoginProfilesResponse>, I>>(
        object: I,
    ): ListOsLoginProfilesResponse {
        const message = { ...baseListOsLoginProfilesResponse } as ListOsLoginProfilesResponse;
        message.profiles = object.profiles?.map((e) => OsLoginProfile.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseOsLoginProfile: object = {
    id: '',
    organizationId: '',
    subjectId: '',
    login: '',
    uid: 0,
    isDefault: false,
    homeDirectory: '',
    shell: '',
};

export const OsLoginProfile = {
    encode(message: OsLoginProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(26).string(message.subjectId);
        }
        if (message.login !== '') {
            writer.uint32(34).string(message.login);
        }
        if (message.uid !== 0) {
            writer.uint32(40).int64(message.uid);
        }
        if (message.isDefault === true) {
            writer.uint32(48).bool(message.isDefault);
        }
        if (message.homeDirectory !== '') {
            writer.uint32(58).string(message.homeDirectory);
        }
        if (message.shell !== '') {
            writer.uint32(66).string(message.shell);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OsLoginProfile {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOsLoginProfile } as OsLoginProfile;
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
                    message.subjectId = reader.string();
                    break;
                case 4:
                    message.login = reader.string();
                    break;
                case 5:
                    message.uid = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.isDefault = reader.bool();
                    break;
                case 7:
                    message.homeDirectory = reader.string();
                    break;
                case 8:
                    message.shell = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OsLoginProfile {
        const message = { ...baseOsLoginProfile } as OsLoginProfile;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.login =
            object.login !== undefined && object.login !== null ? String(object.login) : '';
        message.uid = object.uid !== undefined && object.uid !== null ? Number(object.uid) : 0;
        message.isDefault =
            object.isDefault !== undefined && object.isDefault !== null
                ? Boolean(object.isDefault)
                : false;
        message.homeDirectory =
            object.homeDirectory !== undefined && object.homeDirectory !== null
                ? String(object.homeDirectory)
                : '';
        message.shell =
            object.shell !== undefined && object.shell !== null ? String(object.shell) : '';
        return message;
    },

    toJSON(message: OsLoginProfile): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.login !== undefined && (obj.login = message.login);
        message.uid !== undefined && (obj.uid = Math.round(message.uid));
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        message.homeDirectory !== undefined && (obj.homeDirectory = message.homeDirectory);
        message.shell !== undefined && (obj.shell = message.shell);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OsLoginProfile>, I>>(object: I): OsLoginProfile {
        const message = { ...baseOsLoginProfile } as OsLoginProfile;
        message.id = object.id ?? '';
        message.organizationId = object.organizationId ?? '';
        message.subjectId = object.subjectId ?? '';
        message.login = object.login ?? '';
        message.uid = object.uid ?? 0;
        message.isDefault = object.isDefault ?? false;
        message.homeDirectory = object.homeDirectory ?? '';
        message.shell = object.shell ?? '';
        return message;
    },
};

const baseUpdateOsLoginProfileRequest: object = {
    osLoginProfileId: '',
    login: '',
    uid: 0,
    homeDirectory: '',
    shell: '',
};

export const UpdateOsLoginProfileRequest = {
    encode(
        message: UpdateOsLoginProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.osLoginProfileId !== '') {
            writer.uint32(10).string(message.osLoginProfileId);
        }
        if (message.login !== '') {
            writer.uint32(18).string(message.login);
        }
        if (message.uid !== 0) {
            writer.uint32(24).int64(message.uid);
        }
        if (message.homeDirectory !== '') {
            writer.uint32(34).string(message.homeDirectory);
        }
        if (message.shell !== '') {
            writer.uint32(42).string(message.shell);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOsLoginProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOsLoginProfileRequest } as UpdateOsLoginProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osLoginProfileId = reader.string();
                    break;
                case 2:
                    message.login = reader.string();
                    break;
                case 3:
                    message.uid = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.homeDirectory = reader.string();
                    break;
                case 5:
                    message.shell = reader.string();
                    break;
                case 6:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOsLoginProfileRequest {
        const message = { ...baseUpdateOsLoginProfileRequest } as UpdateOsLoginProfileRequest;
        message.osLoginProfileId =
            object.osLoginProfileId !== undefined && object.osLoginProfileId !== null
                ? String(object.osLoginProfileId)
                : '';
        message.login =
            object.login !== undefined && object.login !== null ? String(object.login) : '';
        message.uid = object.uid !== undefined && object.uid !== null ? Number(object.uid) : 0;
        message.homeDirectory =
            object.homeDirectory !== undefined && object.homeDirectory !== null
                ? String(object.homeDirectory)
                : '';
        message.shell =
            object.shell !== undefined && object.shell !== null ? String(object.shell) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },

    toJSON(message: UpdateOsLoginProfileRequest): unknown {
        const obj: any = {};
        message.osLoginProfileId !== undefined && (obj.osLoginProfileId = message.osLoginProfileId);
        message.login !== undefined && (obj.login = message.login);
        message.uid !== undefined && (obj.uid = Math.round(message.uid));
        message.homeDirectory !== undefined && (obj.homeDirectory = message.homeDirectory);
        message.shell !== undefined && (obj.shell = message.shell);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOsLoginProfileRequest>, I>>(
        object: I,
    ): UpdateOsLoginProfileRequest {
        const message = { ...baseUpdateOsLoginProfileRequest } as UpdateOsLoginProfileRequest;
        message.osLoginProfileId = object.osLoginProfileId ?? '';
        message.login = object.login ?? '';
        message.uid = object.uid ?? 0;
        message.homeDirectory = object.homeDirectory ?? '';
        message.shell = object.shell ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};

const baseDeleteOsLoginProfileRequest: object = { id: '' };

export const DeleteOsLoginProfileRequest = {
    encode(
        message: DeleteOsLoginProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOsLoginProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOsLoginProfileRequest } as DeleteOsLoginProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteOsLoginProfileRequest {
        const message = { ...baseDeleteOsLoginProfileRequest } as DeleteOsLoginProfileRequest;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: DeleteOsLoginProfileRequest): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteOsLoginProfileRequest>, I>>(
        object: I,
    ): DeleteOsLoginProfileRequest {
        const message = { ...baseDeleteOsLoginProfileRequest } as DeleteOsLoginProfileRequest;
        message.id = object.id ?? '';
        return message;
    },
};

const baseCreateOsLoginProfileRequest: object = {
    organizationId: '',
    subjectId: '',
    login: '',
    uid: 0,
    homeDirectory: '',
    shell: '',
};

export const CreateOsLoginProfileRequest = {
    encode(
        message: CreateOsLoginProfileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        if (message.login !== '') {
            writer.uint32(26).string(message.login);
        }
        if (message.uid !== 0) {
            writer.uint32(32).int64(message.uid);
        }
        if (message.homeDirectory !== '') {
            writer.uint32(42).string(message.homeDirectory);
        }
        if (message.shell !== '') {
            writer.uint32(50).string(message.shell);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOsLoginProfileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOsLoginProfileRequest } as CreateOsLoginProfileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.subjectId = reader.string();
                    break;
                case 3:
                    message.login = reader.string();
                    break;
                case 4:
                    message.uid = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.homeDirectory = reader.string();
                    break;
                case 6:
                    message.shell = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateOsLoginProfileRequest {
        const message = { ...baseCreateOsLoginProfileRequest } as CreateOsLoginProfileRequest;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.login =
            object.login !== undefined && object.login !== null ? String(object.login) : '';
        message.uid = object.uid !== undefined && object.uid !== null ? Number(object.uid) : 0;
        message.homeDirectory =
            object.homeDirectory !== undefined && object.homeDirectory !== null
                ? String(object.homeDirectory)
                : '';
        message.shell =
            object.shell !== undefined && object.shell !== null ? String(object.shell) : '';
        return message;
    },

    toJSON(message: CreateOsLoginProfileRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.login !== undefined && (obj.login = message.login);
        message.uid !== undefined && (obj.uid = Math.round(message.uid));
        message.homeDirectory !== undefined && (obj.homeDirectory = message.homeDirectory);
        message.shell !== undefined && (obj.shell = message.shell);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateOsLoginProfileRequest>, I>>(
        object: I,
    ): CreateOsLoginProfileRequest {
        const message = { ...baseCreateOsLoginProfileRequest } as CreateOsLoginProfileRequest;
        message.organizationId = object.organizationId ?? '';
        message.subjectId = object.subjectId ?? '';
        message.login = object.login ?? '';
        message.uid = object.uid ?? 0;
        message.homeDirectory = object.homeDirectory ?? '';
        message.shell = object.shell ?? '';
        return message;
    },
};

const baseUpdateOsLoginProfileMetadata: object = { osLoginProfileId: '' };

export const UpdateOsLoginProfileMetadata = {
    encode(
        message: UpdateOsLoginProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.osLoginProfileId !== '') {
            writer.uint32(10).string(message.osLoginProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOsLoginProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOsLoginProfileMetadata } as UpdateOsLoginProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osLoginProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOsLoginProfileMetadata {
        const message = { ...baseUpdateOsLoginProfileMetadata } as UpdateOsLoginProfileMetadata;
        message.osLoginProfileId =
            object.osLoginProfileId !== undefined && object.osLoginProfileId !== null
                ? String(object.osLoginProfileId)
                : '';
        return message;
    },

    toJSON(message: UpdateOsLoginProfileMetadata): unknown {
        const obj: any = {};
        message.osLoginProfileId !== undefined && (obj.osLoginProfileId = message.osLoginProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOsLoginProfileMetadata>, I>>(
        object: I,
    ): UpdateOsLoginProfileMetadata {
        const message = { ...baseUpdateOsLoginProfileMetadata } as UpdateOsLoginProfileMetadata;
        message.osLoginProfileId = object.osLoginProfileId ?? '';
        return message;
    },
};

const baseDeleteOsLoginProfileMetadata: object = { osLoginProfileId: '' };

export const DeleteOsLoginProfileMetadata = {
    encode(
        message: DeleteOsLoginProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.osLoginProfileId !== '') {
            writer.uint32(10).string(message.osLoginProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOsLoginProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOsLoginProfileMetadata } as DeleteOsLoginProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osLoginProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteOsLoginProfileMetadata {
        const message = { ...baseDeleteOsLoginProfileMetadata } as DeleteOsLoginProfileMetadata;
        message.osLoginProfileId =
            object.osLoginProfileId !== undefined && object.osLoginProfileId !== null
                ? String(object.osLoginProfileId)
                : '';
        return message;
    },

    toJSON(message: DeleteOsLoginProfileMetadata): unknown {
        const obj: any = {};
        message.osLoginProfileId !== undefined && (obj.osLoginProfileId = message.osLoginProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteOsLoginProfileMetadata>, I>>(
        object: I,
    ): DeleteOsLoginProfileMetadata {
        const message = { ...baseDeleteOsLoginProfileMetadata } as DeleteOsLoginProfileMetadata;
        message.osLoginProfileId = object.osLoginProfileId ?? '';
        return message;
    },
};

const baseCreateOsLoginProfileMetadata: object = {
    osLoginProfileId: '',
    organizationId: '',
    subjectId: '',
};

export const CreateOsLoginProfileMetadata = {
    encode(
        message: CreateOsLoginProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.osLoginProfileId !== '') {
            writer.uint32(10).string(message.osLoginProfileId);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(26).string(message.subjectId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOsLoginProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOsLoginProfileMetadata } as CreateOsLoginProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osLoginProfileId = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.subjectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateOsLoginProfileMetadata {
        const message = { ...baseCreateOsLoginProfileMetadata } as CreateOsLoginProfileMetadata;
        message.osLoginProfileId =
            object.osLoginProfileId !== undefined && object.osLoginProfileId !== null
                ? String(object.osLoginProfileId)
                : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        return message;
    },

    toJSON(message: CreateOsLoginProfileMetadata): unknown {
        const obj: any = {};
        message.osLoginProfileId !== undefined && (obj.osLoginProfileId = message.osLoginProfileId);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateOsLoginProfileMetadata>, I>>(
        object: I,
    ): CreateOsLoginProfileMetadata {
        const message = { ...baseCreateOsLoginProfileMetadata } as CreateOsLoginProfileMetadata;
        message.osLoginProfileId = object.osLoginProfileId ?? '';
        message.organizationId = object.organizationId ?? '';
        message.subjectId = object.subjectId ?? '';
        return message;
    },
};

const baseUpdateOsLoginSettingsMetadata: object = { organizationId: '' };

export const UpdateOsLoginSettingsMetadata = {
    encode(
        message: UpdateOsLoginSettingsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOsLoginSettingsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOsLoginSettingsMetadata } as UpdateOsLoginSettingsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOsLoginSettingsMetadata {
        const message = { ...baseUpdateOsLoginSettingsMetadata } as UpdateOsLoginSettingsMetadata;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        return message;
    },

    toJSON(message: UpdateOsLoginSettingsMetadata): unknown {
        const obj: any = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateOsLoginSettingsMetadata>, I>>(
        object: I,
    ): UpdateOsLoginSettingsMetadata {
        const message = { ...baseUpdateOsLoginSettingsMetadata } as UpdateOsLoginSettingsMetadata;
        message.organizationId = object.organizationId ?? '';
        return message;
    },
};

const baseSetDefaultOsLoginProfileMetadata: object = {
    previousDefaultProfileId: '',
    currentDefaultProfileId: '',
};

export const SetDefaultOsLoginProfileMetadata = {
    encode(
        message: SetDefaultOsLoginProfileMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.previousDefaultProfileId !== '') {
            writer.uint32(10).string(message.previousDefaultProfileId);
        }
        if (message.currentDefaultProfileId !== '') {
            writer.uint32(18).string(message.currentDefaultProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultOsLoginProfileMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetDefaultOsLoginProfileMetadata,
        } as SetDefaultOsLoginProfileMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previousDefaultProfileId = reader.string();
                    break;
                case 2:
                    message.currentDefaultProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetDefaultOsLoginProfileMetadata {
        const message = {
            ...baseSetDefaultOsLoginProfileMetadata,
        } as SetDefaultOsLoginProfileMetadata;
        message.previousDefaultProfileId =
            object.previousDefaultProfileId !== undefined &&
            object.previousDefaultProfileId !== null
                ? String(object.previousDefaultProfileId)
                : '';
        message.currentDefaultProfileId =
            object.currentDefaultProfileId !== undefined && object.currentDefaultProfileId !== null
                ? String(object.currentDefaultProfileId)
                : '';
        return message;
    },

    toJSON(message: SetDefaultOsLoginProfileMetadata): unknown {
        const obj: any = {};
        message.previousDefaultProfileId !== undefined &&
            (obj.previousDefaultProfileId = message.previousDefaultProfileId);
        message.currentDefaultProfileId !== undefined &&
            (obj.currentDefaultProfileId = message.currentDefaultProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetDefaultOsLoginProfileMetadata>, I>>(
        object: I,
    ): SetDefaultOsLoginProfileMetadata {
        const message = {
            ...baseSetDefaultOsLoginProfileMetadata,
        } as SetDefaultOsLoginProfileMetadata;
        message.previousDefaultProfileId = object.previousDefaultProfileId ?? '';
        message.currentDefaultProfileId = object.currentDefaultProfileId ?? '';
        return message;
    },
};

export const OsLoginServiceService = {
    /** OsLogin settings */
    getSettings: {
        path: '/yandex.cloud.organizationmanager.v1.OsLoginService/GetSettings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOsLoginSettingsRequest) =>
            Buffer.from(GetOsLoginSettingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetOsLoginSettingsRequest.decode(value),
        responseSerialize: (value: OsLoginSettings) =>
            Buffer.from(OsLoginSettings.encode(value).finish()),
        responseDeserialize: (value: Buffer) => OsLoginSettings.decode(value),
    },
    updateSettings: {
        path: '/yandex.cloud.organizationmanager.v1.OsLoginService/UpdateSettings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateOsLoginSettingsRequest) =>
            Buffer.from(UpdateOsLoginSettingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateOsLoginSettingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** OsLogin Profiles */
    getProfile: {
        path: '/yandex.cloud.organizationmanager.v1.OsLoginService/GetProfile',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOsLoginProfileRequest) =>
            Buffer.from(GetOsLoginProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetOsLoginProfileRequest.decode(value),
        responseSerialize: (value: OsLoginProfile) =>
            Buffer.from(OsLoginProfile.encode(value).finish()),
        responseDeserialize: (value: Buffer) => OsLoginProfile.decode(value),
    },
    listProfiles: {
        path: '/yandex.cloud.organizationmanager.v1.OsLoginService/ListProfiles',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOsLoginProfilesRequest) =>
            Buffer.from(ListOsLoginProfilesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOsLoginProfilesRequest.decode(value),
        responseSerialize: (value: ListOsLoginProfilesResponse) =>
            Buffer.from(ListOsLoginProfilesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOsLoginProfilesResponse.decode(value),
    },
    createProfile: {
        path: '/yandex.cloud.organizationmanager.v1.OsLoginService/CreateProfile',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateOsLoginProfileRequest) =>
            Buffer.from(CreateOsLoginProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateOsLoginProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    updateProfile: {
        path: '/yandex.cloud.organizationmanager.v1.OsLoginService/UpdateProfile',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateOsLoginProfileRequest) =>
            Buffer.from(UpdateOsLoginProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateOsLoginProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Sets a profile as a default for the subject assigned to this profile */
    setDefaultProfile: {
        path: '/yandex.cloud.organizationmanager.v1.OsLoginService/SetDefaultProfile',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetDefaultOsLoginProfileRequest) =>
            Buffer.from(SetDefaultOsLoginProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetDefaultOsLoginProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    deleteProfile: {
        path: '/yandex.cloud.organizationmanager.v1.OsLoginService/DeleteProfile',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteOsLoginProfileRequest) =>
            Buffer.from(DeleteOsLoginProfileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteOsLoginProfileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface OsLoginServiceServer extends UntypedServiceImplementation {
    /** OsLogin settings */
    getSettings: handleUnaryCall<GetOsLoginSettingsRequest, OsLoginSettings>;
    updateSettings: handleUnaryCall<UpdateOsLoginSettingsRequest, Operation>;
    /** OsLogin Profiles */
    getProfile: handleUnaryCall<GetOsLoginProfileRequest, OsLoginProfile>;
    listProfiles: handleUnaryCall<ListOsLoginProfilesRequest, ListOsLoginProfilesResponse>;
    createProfile: handleUnaryCall<CreateOsLoginProfileRequest, Operation>;
    updateProfile: handleUnaryCall<UpdateOsLoginProfileRequest, Operation>;
    /** Sets a profile as a default for the subject assigned to this profile */
    setDefaultProfile: handleUnaryCall<SetDefaultOsLoginProfileRequest, Operation>;
    deleteProfile: handleUnaryCall<DeleteOsLoginProfileRequest, Operation>;
}

export interface OsLoginServiceClient extends Client {
    /** OsLogin settings */
    getSettings(
        request: GetOsLoginSettingsRequest,
        callback: (error: ServiceError | null, response: OsLoginSettings) => void,
    ): ClientUnaryCall;
    getSettings(
        request: GetOsLoginSettingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: OsLoginSettings) => void,
    ): ClientUnaryCall;
    getSettings(
        request: GetOsLoginSettingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: OsLoginSettings) => void,
    ): ClientUnaryCall;
    updateSettings(
        request: UpdateOsLoginSettingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateSettings(
        request: UpdateOsLoginSettingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateSettings(
        request: UpdateOsLoginSettingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** OsLogin Profiles */
    getProfile(
        request: GetOsLoginProfileRequest,
        callback: (error: ServiceError | null, response: OsLoginProfile) => void,
    ): ClientUnaryCall;
    getProfile(
        request: GetOsLoginProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: OsLoginProfile) => void,
    ): ClientUnaryCall;
    getProfile(
        request: GetOsLoginProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: OsLoginProfile) => void,
    ): ClientUnaryCall;
    listProfiles(
        request: ListOsLoginProfilesRequest,
        callback: (error: ServiceError | null, response: ListOsLoginProfilesResponse) => void,
    ): ClientUnaryCall;
    listProfiles(
        request: ListOsLoginProfilesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListOsLoginProfilesResponse) => void,
    ): ClientUnaryCall;
    listProfiles(
        request: ListOsLoginProfilesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListOsLoginProfilesResponse) => void,
    ): ClientUnaryCall;
    createProfile(
        request: CreateOsLoginProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createProfile(
        request: CreateOsLoginProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createProfile(
        request: CreateOsLoginProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateProfile(
        request: UpdateOsLoginProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateProfile(
        request: UpdateOsLoginProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateProfile(
        request: UpdateOsLoginProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Sets a profile as a default for the subject assigned to this profile */
    setDefaultProfile(
        request: SetDefaultOsLoginProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setDefaultProfile(
        request: SetDefaultOsLoginProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setDefaultProfile(
        request: SetDefaultOsLoginProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteProfile(
        request: DeleteOsLoginProfileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteProfile(
        request: DeleteOsLoginProfileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteProfile(
        request: DeleteOsLoginProfileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const OsLoginServiceClient = makeGenericClientConstructor(
    OsLoginServiceService,
    'yandex.cloud.organizationmanager.v1.OsLoginService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): OsLoginServiceClient;
    service: typeof OsLoginServiceService;
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
