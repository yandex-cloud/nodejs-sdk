/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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
    CaptchaComplexity,
    CaptchaPreCheckType,
    CaptchaChallengeType,
    Captcha,
    SecurityRule,
    OverrideVariant,
    CaptchaSecretKey,
    captchaComplexityFromJSON,
    captchaPreCheckTypeFromJSON,
    captchaChallengeTypeFromJSON,
    captchaComplexityToJSON,
    captchaPreCheckTypeToJSON,
    captchaChallengeTypeToJSON,
} from '../../../../yandex/cloud/smartcaptcha/v1/captcha';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.smartcaptcha.v1';

export interface GetCaptchaRequest {
    $type: 'yandex.cloud.smartcaptcha.v1.GetCaptchaRequest';
    /** ID of the Captcha resource to return. */
    captchaId: string;
}

export interface ListCaptchasRequest {
    $type: 'yandex.cloud.smartcaptcha.v1.ListCaptchasRequest';
    /**
     * ID of the folder that the captcha belongs to.
     * Currently page_size, page_token, filter and order_by are not supported and List method will return all captchas in the folder.
     */
    folderId: string;
}

export interface ListCaptchasResponse {
    $type: 'yandex.cloud.smartcaptcha.v1.ListCaptchasResponse';
    /**
     * List of Captcha resources.
     * Currently next_page_token is not supported and List method will return all captchas in the folder.
     */
    resources: Captcha[];
}

export interface CreateCaptchaRequest {
    $type: 'yandex.cloud.smartcaptcha.v1.CreateCaptchaRequest';
    /** ID of the folder to create a captcha in. */
    folderId: string;
    /**
     * Name of the captcha.
     * The name must be unique within the folder.
     */
    name: string;
    /** List of allowed host names, see [Domain validation](/docs/smartcaptcha/concepts/domain-validation). */
    allowedSites: string[];
    /** Complexity of the captcha. */
    complexity: CaptchaComplexity;
    /** JSON with variables to define the captcha appearance. For more details see generated JSON in cloud console. */
    styleJson: string;
    /** Turn off host name check, see [Domain validation](/docs/smartcaptcha/concepts/domain-validation). */
    turnOffHostnameCheck: boolean;
    /** Basic check type of the captcha. */
    preCheckType: CaptchaPreCheckType;
    /** Additional task type of the captcha. */
    challengeType: CaptchaChallengeType;
    /** List of security rules. */
    securityRules: SecurityRule[];
    /** Determines whether captcha is protected from being deleted. */
    deletionProtection: boolean;
    /** List of variants to use in security_rules */
    overrideVariants: OverrideVariant[];
}

export interface CreateCaptchaMetadata {
    $type: 'yandex.cloud.smartcaptcha.v1.CreateCaptchaMetadata';
    /** ID of the captcha that is being created. */
    captchaId: string;
}

export interface DeleteCaptchaRequest {
    $type: 'yandex.cloud.smartcaptcha.v1.DeleteCaptchaRequest';
    /** ID of the captcha to delete. */
    captchaId: string;
}

export interface DeleteCaptchaMetadata {
    $type: 'yandex.cloud.smartcaptcha.v1.DeleteCaptchaMetadata';
    /** ID of the Captcha resource that is being deleted. */
    captchaId: string;
}

export interface UpdateCaptchaRequest {
    $type: 'yandex.cloud.smartcaptcha.v1.UpdateCaptchaRequest';
    /** ID of the captcha to update. */
    captchaId: string;
    /** Field mask that specifies which fields of the Captcha resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the captcha.
     * The name must be unique within the folder.
     */
    name: string;
    /** List of allowed host names, see [Domain validation](/docs/smartcaptcha/concepts/domain-validation). */
    allowedSites: string[];
    /** Complexity of the captcha. */
    complexity: CaptchaComplexity;
    /** JSON with variables to define the captcha appearance. For more details see generated JSON in cloud console. */
    styleJson: string;
    /** Turn off host name check, see [Domain validation](/docs/smartcaptcha/concepts/domain-validation). */
    turnOffHostnameCheck: boolean;
    /** Basic check type of the captcha. */
    preCheckType: CaptchaPreCheckType;
    /** Additional task type of the captcha. */
    challengeType: CaptchaChallengeType;
    /** List of security rules. */
    securityRules: SecurityRule[];
    /** Determines whether captcha is protected from being deleted. */
    deletionProtection: boolean;
    /** List of variants to use in security_rules */
    overrideVariants: OverrideVariant[];
}

export interface UpdateCaptchaMetadata {
    $type: 'yandex.cloud.smartcaptcha.v1.UpdateCaptchaMetadata';
    /** ID of the Captcha resource that is being updated. */
    captchaId: string;
}

const baseGetCaptchaRequest: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.GetCaptchaRequest',
    captchaId: '',
};

export const GetCaptchaRequest = {
    $type: 'yandex.cloud.smartcaptcha.v1.GetCaptchaRequest' as const,

    encode(message: GetCaptchaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.captchaId !== '') {
            writer.uint32(10).string(message.captchaId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetCaptchaRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCaptchaRequest } as GetCaptchaRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.captchaId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCaptchaRequest {
        const message = { ...baseGetCaptchaRequest } as GetCaptchaRequest;
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        return message;
    },

    toJSON(message: GetCaptchaRequest): unknown {
        const obj: any = {};
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCaptchaRequest>, I>>(object: I): GetCaptchaRequest {
        const message = { ...baseGetCaptchaRequest } as GetCaptchaRequest;
        message.captchaId = object.captchaId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetCaptchaRequest.$type, GetCaptchaRequest);

const baseListCaptchasRequest: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.ListCaptchasRequest',
    folderId: '',
};

export const ListCaptchasRequest = {
    $type: 'yandex.cloud.smartcaptcha.v1.ListCaptchasRequest' as const,

    encode(message: ListCaptchasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCaptchasRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCaptchasRequest } as ListCaptchasRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListCaptchasRequest {
        const message = { ...baseListCaptchasRequest } as ListCaptchasRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: ListCaptchasRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCaptchasRequest>, I>>(
        object: I,
    ): ListCaptchasRequest {
        const message = { ...baseListCaptchasRequest } as ListCaptchasRequest;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListCaptchasRequest.$type, ListCaptchasRequest);

const baseListCaptchasResponse: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.ListCaptchasResponse',
};

export const ListCaptchasResponse = {
    $type: 'yandex.cloud.smartcaptcha.v1.ListCaptchasResponse' as const,

    encode(message: ListCaptchasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.resources) {
            Captcha.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCaptchasResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCaptchasResponse } as ListCaptchasResponse;
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.resources.push(Captcha.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListCaptchasResponse {
        const message = { ...baseListCaptchasResponse } as ListCaptchasResponse;
        message.resources = (object.resources ?? []).map((e: any) => Captcha.fromJSON(e));
        return message;
    },

    toJSON(message: ListCaptchasResponse): unknown {
        const obj: any = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => (e ? Captcha.toJSON(e) : undefined));
        } else {
            obj.resources = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCaptchasResponse>, I>>(
        object: I,
    ): ListCaptchasResponse {
        const message = { ...baseListCaptchasResponse } as ListCaptchasResponse;
        message.resources = object.resources?.map((e) => Captcha.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ListCaptchasResponse.$type, ListCaptchasResponse);

const baseCreateCaptchaRequest: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.CreateCaptchaRequest',
    folderId: '',
    name: '',
    allowedSites: '',
    complexity: 0,
    styleJson: '',
    turnOffHostnameCheck: false,
    preCheckType: 0,
    challengeType: 0,
    deletionProtection: false,
};

export const CreateCaptchaRequest = {
    $type: 'yandex.cloud.smartcaptcha.v1.CreateCaptchaRequest' as const,

    encode(message: CreateCaptchaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.allowedSites) {
            writer.uint32(26).string(v!);
        }
        if (message.complexity !== 0) {
            writer.uint32(32).int32(message.complexity);
        }
        if (message.styleJson !== '') {
            writer.uint32(42).string(message.styleJson);
        }
        if (message.turnOffHostnameCheck === true) {
            writer.uint32(48).bool(message.turnOffHostnameCheck);
        }
        if (message.preCheckType !== 0) {
            writer.uint32(64).int32(message.preCheckType);
        }
        if (message.challengeType !== 0) {
            writer.uint32(72).int32(message.challengeType);
        }
        for (const v of message.securityRules) {
            SecurityRule.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        for (const v of message.overrideVariants) {
            OverrideVariant.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCaptchaRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCaptchaRequest } as CreateCaptchaRequest;
        message.allowedSites = [];
        message.securityRules = [];
        message.overrideVariants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.allowedSites.push(reader.string());
                    break;
                case 4:
                    message.complexity = reader.int32() as any;
                    break;
                case 5:
                    message.styleJson = reader.string();
                    break;
                case 6:
                    message.turnOffHostnameCheck = reader.bool();
                    break;
                case 8:
                    message.preCheckType = reader.int32() as any;
                    break;
                case 9:
                    message.challengeType = reader.int32() as any;
                    break;
                case 11:
                    message.securityRules.push(SecurityRule.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.deletionProtection = reader.bool();
                    break;
                case 13:
                    message.overrideVariants.push(OverrideVariant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateCaptchaRequest {
        const message = { ...baseCreateCaptchaRequest } as CreateCaptchaRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.allowedSites = (object.allowedSites ?? []).map((e: any) => String(e));
        message.complexity =
            object.complexity !== undefined && object.complexity !== null
                ? captchaComplexityFromJSON(object.complexity)
                : 0;
        message.styleJson =
            object.styleJson !== undefined && object.styleJson !== null
                ? String(object.styleJson)
                : '';
        message.turnOffHostnameCheck =
            object.turnOffHostnameCheck !== undefined && object.turnOffHostnameCheck !== null
                ? Boolean(object.turnOffHostnameCheck)
                : false;
        message.preCheckType =
            object.preCheckType !== undefined && object.preCheckType !== null
                ? captchaPreCheckTypeFromJSON(object.preCheckType)
                : 0;
        message.challengeType =
            object.challengeType !== undefined && object.challengeType !== null
                ? captchaChallengeTypeFromJSON(object.challengeType)
                : 0;
        message.securityRules = (object.securityRules ?? []).map((e: any) =>
            SecurityRule.fromJSON(e),
        );
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.overrideVariants = (object.overrideVariants ?? []).map((e: any) =>
            OverrideVariant.fromJSON(e),
        );
        return message;
    },

    toJSON(message: CreateCaptchaRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        if (message.allowedSites) {
            obj.allowedSites = message.allowedSites.map((e) => e);
        } else {
            obj.allowedSites = [];
        }
        message.complexity !== undefined &&
            (obj.complexity = captchaComplexityToJSON(message.complexity));
        message.styleJson !== undefined && (obj.styleJson = message.styleJson);
        message.turnOffHostnameCheck !== undefined &&
            (obj.turnOffHostnameCheck = message.turnOffHostnameCheck);
        message.preCheckType !== undefined &&
            (obj.preCheckType = captchaPreCheckTypeToJSON(message.preCheckType));
        message.challengeType !== undefined &&
            (obj.challengeType = captchaChallengeTypeToJSON(message.challengeType));
        if (message.securityRules) {
            obj.securityRules = message.securityRules.map((e) =>
                e ? SecurityRule.toJSON(e) : undefined,
            );
        } else {
            obj.securityRules = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        if (message.overrideVariants) {
            obj.overrideVariants = message.overrideVariants.map((e) =>
                e ? OverrideVariant.toJSON(e) : undefined,
            );
        } else {
            obj.overrideVariants = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCaptchaRequest>, I>>(
        object: I,
    ): CreateCaptchaRequest {
        const message = { ...baseCreateCaptchaRequest } as CreateCaptchaRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.allowedSites = object.allowedSites?.map((e) => e) || [];
        message.complexity = object.complexity ?? 0;
        message.styleJson = object.styleJson ?? '';
        message.turnOffHostnameCheck = object.turnOffHostnameCheck ?? false;
        message.preCheckType = object.preCheckType ?? 0;
        message.challengeType = object.challengeType ?? 0;
        message.securityRules = object.securityRules?.map((e) => SecurityRule.fromPartial(e)) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.overrideVariants =
            object.overrideVariants?.map((e) => OverrideVariant.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(CreateCaptchaRequest.$type, CreateCaptchaRequest);

const baseCreateCaptchaMetadata: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.CreateCaptchaMetadata',
    captchaId: '',
};

export const CreateCaptchaMetadata = {
    $type: 'yandex.cloud.smartcaptcha.v1.CreateCaptchaMetadata' as const,

    encode(message: CreateCaptchaMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.captchaId !== '') {
            writer.uint32(10).string(message.captchaId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCaptchaMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCaptchaMetadata } as CreateCaptchaMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.captchaId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateCaptchaMetadata {
        const message = { ...baseCreateCaptchaMetadata } as CreateCaptchaMetadata;
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        return message;
    },

    toJSON(message: CreateCaptchaMetadata): unknown {
        const obj: any = {};
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCaptchaMetadata>, I>>(
        object: I,
    ): CreateCaptchaMetadata {
        const message = { ...baseCreateCaptchaMetadata } as CreateCaptchaMetadata;
        message.captchaId = object.captchaId ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateCaptchaMetadata.$type, CreateCaptchaMetadata);

const baseDeleteCaptchaRequest: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.DeleteCaptchaRequest',
    captchaId: '',
};

export const DeleteCaptchaRequest = {
    $type: 'yandex.cloud.smartcaptcha.v1.DeleteCaptchaRequest' as const,

    encode(message: DeleteCaptchaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.captchaId !== '') {
            writer.uint32(10).string(message.captchaId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCaptchaRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteCaptchaRequest } as DeleteCaptchaRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.captchaId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteCaptchaRequest {
        const message = { ...baseDeleteCaptchaRequest } as DeleteCaptchaRequest;
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        return message;
    },

    toJSON(message: DeleteCaptchaRequest): unknown {
        const obj: any = {};
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteCaptchaRequest>, I>>(
        object: I,
    ): DeleteCaptchaRequest {
        const message = { ...baseDeleteCaptchaRequest } as DeleteCaptchaRequest;
        message.captchaId = object.captchaId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteCaptchaRequest.$type, DeleteCaptchaRequest);

const baseDeleteCaptchaMetadata: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.DeleteCaptchaMetadata',
    captchaId: '',
};

export const DeleteCaptchaMetadata = {
    $type: 'yandex.cloud.smartcaptcha.v1.DeleteCaptchaMetadata' as const,

    encode(message: DeleteCaptchaMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.captchaId !== '') {
            writer.uint32(10).string(message.captchaId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCaptchaMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteCaptchaMetadata } as DeleteCaptchaMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.captchaId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteCaptchaMetadata {
        const message = { ...baseDeleteCaptchaMetadata } as DeleteCaptchaMetadata;
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        return message;
    },

    toJSON(message: DeleteCaptchaMetadata): unknown {
        const obj: any = {};
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteCaptchaMetadata>, I>>(
        object: I,
    ): DeleteCaptchaMetadata {
        const message = { ...baseDeleteCaptchaMetadata } as DeleteCaptchaMetadata;
        message.captchaId = object.captchaId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteCaptchaMetadata.$type, DeleteCaptchaMetadata);

const baseUpdateCaptchaRequest: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.UpdateCaptchaRequest',
    captchaId: '',
    name: '',
    allowedSites: '',
    complexity: 0,
    styleJson: '',
    turnOffHostnameCheck: false,
    preCheckType: 0,
    challengeType: 0,
    deletionProtection: false,
};

export const UpdateCaptchaRequest = {
    $type: 'yandex.cloud.smartcaptcha.v1.UpdateCaptchaRequest' as const,

    encode(message: UpdateCaptchaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.captchaId !== '') {
            writer.uint32(10).string(message.captchaId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        for (const v of message.allowedSites) {
            writer.uint32(34).string(v!);
        }
        if (message.complexity !== 0) {
            writer.uint32(40).int32(message.complexity);
        }
        if (message.styleJson !== '') {
            writer.uint32(50).string(message.styleJson);
        }
        if (message.turnOffHostnameCheck === true) {
            writer.uint32(56).bool(message.turnOffHostnameCheck);
        }
        if (message.preCheckType !== 0) {
            writer.uint32(72).int32(message.preCheckType);
        }
        if (message.challengeType !== 0) {
            writer.uint32(80).int32(message.challengeType);
        }
        for (const v of message.securityRules) {
            SecurityRule.encode(v!, writer.uint32(98).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
        }
        for (const v of message.overrideVariants) {
            OverrideVariant.encode(v!, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCaptchaRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCaptchaRequest } as UpdateCaptchaRequest;
        message.allowedSites = [];
        message.securityRules = [];
        message.overrideVariants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.captchaId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.allowedSites.push(reader.string());
                    break;
                case 5:
                    message.complexity = reader.int32() as any;
                    break;
                case 6:
                    message.styleJson = reader.string();
                    break;
                case 7:
                    message.turnOffHostnameCheck = reader.bool();
                    break;
                case 9:
                    message.preCheckType = reader.int32() as any;
                    break;
                case 10:
                    message.challengeType = reader.int32() as any;
                    break;
                case 12:
                    message.securityRules.push(SecurityRule.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
                    break;
                case 14:
                    message.overrideVariants.push(OverrideVariant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCaptchaRequest {
        const message = { ...baseUpdateCaptchaRequest } as UpdateCaptchaRequest;
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.allowedSites = (object.allowedSites ?? []).map((e: any) => String(e));
        message.complexity =
            object.complexity !== undefined && object.complexity !== null
                ? captchaComplexityFromJSON(object.complexity)
                : 0;
        message.styleJson =
            object.styleJson !== undefined && object.styleJson !== null
                ? String(object.styleJson)
                : '';
        message.turnOffHostnameCheck =
            object.turnOffHostnameCheck !== undefined && object.turnOffHostnameCheck !== null
                ? Boolean(object.turnOffHostnameCheck)
                : false;
        message.preCheckType =
            object.preCheckType !== undefined && object.preCheckType !== null
                ? captchaPreCheckTypeFromJSON(object.preCheckType)
                : 0;
        message.challengeType =
            object.challengeType !== undefined && object.challengeType !== null
                ? captchaChallengeTypeFromJSON(object.challengeType)
                : 0;
        message.securityRules = (object.securityRules ?? []).map((e: any) =>
            SecurityRule.fromJSON(e),
        );
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.overrideVariants = (object.overrideVariants ?? []).map((e: any) =>
            OverrideVariant.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateCaptchaRequest): unknown {
        const obj: any = {};
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.allowedSites) {
            obj.allowedSites = message.allowedSites.map((e) => e);
        } else {
            obj.allowedSites = [];
        }
        message.complexity !== undefined &&
            (obj.complexity = captchaComplexityToJSON(message.complexity));
        message.styleJson !== undefined && (obj.styleJson = message.styleJson);
        message.turnOffHostnameCheck !== undefined &&
            (obj.turnOffHostnameCheck = message.turnOffHostnameCheck);
        message.preCheckType !== undefined &&
            (obj.preCheckType = captchaPreCheckTypeToJSON(message.preCheckType));
        message.challengeType !== undefined &&
            (obj.challengeType = captchaChallengeTypeToJSON(message.challengeType));
        if (message.securityRules) {
            obj.securityRules = message.securityRules.map((e) =>
                e ? SecurityRule.toJSON(e) : undefined,
            );
        } else {
            obj.securityRules = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        if (message.overrideVariants) {
            obj.overrideVariants = message.overrideVariants.map((e) =>
                e ? OverrideVariant.toJSON(e) : undefined,
            );
        } else {
            obj.overrideVariants = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCaptchaRequest>, I>>(
        object: I,
    ): UpdateCaptchaRequest {
        const message = { ...baseUpdateCaptchaRequest } as UpdateCaptchaRequest;
        message.captchaId = object.captchaId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.allowedSites = object.allowedSites?.map((e) => e) || [];
        message.complexity = object.complexity ?? 0;
        message.styleJson = object.styleJson ?? '';
        message.turnOffHostnameCheck = object.turnOffHostnameCheck ?? false;
        message.preCheckType = object.preCheckType ?? 0;
        message.challengeType = object.challengeType ?? 0;
        message.securityRules = object.securityRules?.map((e) => SecurityRule.fromPartial(e)) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.overrideVariants =
            object.overrideVariants?.map((e) => OverrideVariant.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(UpdateCaptchaRequest.$type, UpdateCaptchaRequest);

const baseUpdateCaptchaMetadata: object = {
    $type: 'yandex.cloud.smartcaptcha.v1.UpdateCaptchaMetadata',
    captchaId: '',
};

export const UpdateCaptchaMetadata = {
    $type: 'yandex.cloud.smartcaptcha.v1.UpdateCaptchaMetadata' as const,

    encode(message: UpdateCaptchaMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.captchaId !== '') {
            writer.uint32(10).string(message.captchaId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCaptchaMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCaptchaMetadata } as UpdateCaptchaMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.captchaId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCaptchaMetadata {
        const message = { ...baseUpdateCaptchaMetadata } as UpdateCaptchaMetadata;
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        return message;
    },

    toJSON(message: UpdateCaptchaMetadata): unknown {
        const obj: any = {};
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCaptchaMetadata>, I>>(
        object: I,
    ): UpdateCaptchaMetadata {
        const message = { ...baseUpdateCaptchaMetadata } as UpdateCaptchaMetadata;
        message.captchaId = object.captchaId ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateCaptchaMetadata.$type, UpdateCaptchaMetadata);

/** A set of methods for managing Captcha resources. */
export const CaptchaServiceService = {
    /** Returns the specified Captcha resource. */
    get: {
        path: '/yandex.cloud.smartcaptcha.v1.CaptchaService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCaptchaRequest) =>
            Buffer.from(GetCaptchaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetCaptchaRequest.decode(value),
        responseSerialize: (value: Captcha) => Buffer.from(Captcha.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Captcha.decode(value),
    },
    /** Returns the secret data of specified Captcha resource. */
    getSecretKey: {
        path: '/yandex.cloud.smartcaptcha.v1.CaptchaService/GetSecretKey',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCaptchaRequest) =>
            Buffer.from(GetCaptchaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetCaptchaRequest.decode(value),
        responseSerialize: (value: CaptchaSecretKey) =>
            Buffer.from(CaptchaSecretKey.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CaptchaSecretKey.decode(value),
    },
    /** Retrieves the list of Captcha resources in the specified folder. */
    list: {
        path: '/yandex.cloud.smartcaptcha.v1.CaptchaService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListCaptchasRequest) =>
            Buffer.from(ListCaptchasRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListCaptchasRequest.decode(value),
        responseSerialize: (value: ListCaptchasResponse) =>
            Buffer.from(ListCaptchasResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListCaptchasResponse.decode(value),
    },
    /** Creates a captcha in the specified folder using the data specified in the request. */
    create: {
        path: '/yandex.cloud.smartcaptcha.v1.CaptchaService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateCaptchaRequest) =>
            Buffer.from(CreateCaptchaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateCaptchaRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified captcha. */
    update: {
        path: '/yandex.cloud.smartcaptcha.v1.CaptchaService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateCaptchaRequest) =>
            Buffer.from(UpdateCaptchaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateCaptchaRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified captcha. */
    delete: {
        path: '/yandex.cloud.smartcaptcha.v1.CaptchaService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteCaptchaRequest) =>
            Buffer.from(DeleteCaptchaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteCaptchaRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface CaptchaServiceServer extends UntypedServiceImplementation {
    /** Returns the specified Captcha resource. */
    get: handleUnaryCall<GetCaptchaRequest, Captcha>;
    /** Returns the secret data of specified Captcha resource. */
    getSecretKey: handleUnaryCall<GetCaptchaRequest, CaptchaSecretKey>;
    /** Retrieves the list of Captcha resources in the specified folder. */
    list: handleUnaryCall<ListCaptchasRequest, ListCaptchasResponse>;
    /** Creates a captcha in the specified folder using the data specified in the request. */
    create: handleUnaryCall<CreateCaptchaRequest, Operation>;
    /** Updates the specified captcha. */
    update: handleUnaryCall<UpdateCaptchaRequest, Operation>;
    /** Deletes the specified captcha. */
    delete: handleUnaryCall<DeleteCaptchaRequest, Operation>;
}

export interface CaptchaServiceClient extends Client {
    /** Returns the specified Captcha resource. */
    get(
        request: GetCaptchaRequest,
        callback: (error: ServiceError | null, response: Captcha) => void,
    ): ClientUnaryCall;
    get(
        request: GetCaptchaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Captcha) => void,
    ): ClientUnaryCall;
    get(
        request: GetCaptchaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Captcha) => void,
    ): ClientUnaryCall;
    /** Returns the secret data of specified Captcha resource. */
    getSecretKey(
        request: GetCaptchaRequest,
        callback: (error: ServiceError | null, response: CaptchaSecretKey) => void,
    ): ClientUnaryCall;
    getSecretKey(
        request: GetCaptchaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CaptchaSecretKey) => void,
    ): ClientUnaryCall;
    getSecretKey(
        request: GetCaptchaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CaptchaSecretKey) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Captcha resources in the specified folder. */
    list(
        request: ListCaptchasRequest,
        callback: (error: ServiceError | null, response: ListCaptchasResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListCaptchasRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListCaptchasResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListCaptchasRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListCaptchasResponse) => void,
    ): ClientUnaryCall;
    /** Creates a captcha in the specified folder using the data specified in the request. */
    create(
        request: CreateCaptchaRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateCaptchaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateCaptchaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified captcha. */
    update(
        request: UpdateCaptchaRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateCaptchaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateCaptchaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified captcha. */
    delete(
        request: DeleteCaptchaRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteCaptchaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteCaptchaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const CaptchaServiceClient = makeGenericClientConstructor(
    CaptchaServiceService,
    'yandex.cloud.smartcaptcha.v1.CaptchaService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): CaptchaServiceClient;
    service: typeof CaptchaServiceService;
};

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
