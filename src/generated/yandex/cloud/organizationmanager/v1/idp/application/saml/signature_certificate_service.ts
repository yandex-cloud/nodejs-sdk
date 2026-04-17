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
import { FieldMask } from '../../../../../../../google/protobuf/field_mask';
import { SignatureCertificate } from './signature_certificate';
import { Operation } from '../../../../../operation/operation';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp.application.saml';

/** Request to get a signature certificate by ID. */
export interface GetSignatureCertificateRequest {
    /** ID of the signature certificate to return. */
    signatureCertificateId: string;
}

/** Request to list signature certificates for a SAML application. */
export interface ListSignatureCertificatesRequest {
    /** ID of the SAML application to list certificates for. */
    applicationId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /** Page token for pagination. */
    pageToken: string;
    /** A filter expression that filters resources listed in the response. */
    filter: string;
}

/** Response message for [SignatureCertificateService.List]. */
export interface ListSignatureCertificatesResponse {
    /** List of signature certificates. */
    signatureCertificates: SignatureCertificate[];
    /** Token for getting the next page of the list. */
    nextPageToken: string;
}

/** Request to create a new signature certificate. */
export interface CreateSignatureCertificateRequest {
    /** ID of the SAML application to create the certificate for. */
    applicationId: string;
    /**
     * Name of the signature certificate.
     * The name is unique within the application. 3-63 characters long.
     */
    name: string;
    /** Description of the signature certificate. 0-256 characters long. */
    description: string;
}

/** Metadata for the [SignatureCertificateService.Create] operation. */
export interface CreateSignatureCertificateMetadata {
    /** ID of the signature certificate that is being created. */
    signatureCertificateId: string;
}

/** Request to update an existing signature certificate. */
export interface UpdateSignatureCertificateRequest {
    /** ID of the signature certificate to update. */
    signatureCertificateId: string;
    /** Field mask that specifies which fields of the certificate are going to be updated. */
    updateMask?: FieldMask;
    /** New name for the signature certificate. */
    name: string;
    /** New description for the signature certificate. */
    description: string;
}

/** Metadata for the [SignatureCertificateService.Update] operation. */
export interface UpdateSignatureCertificateMetadata {
    /** ID of the signature certificate that is being updated. */
    signatureCertificateId: string;
}

/** Request to delete a signature certificate. */
export interface DeleteSignatureCertificateRequest {
    /** ID of the signature certificate to delete. */
    signatureCertificateId: string;
}

/** Metadata for the [SignatureCertificateService.Delete] operation. */
export interface DeleteSignatureCertificateMetadata {
    /** ID of the signature certificate that is being deleted. */
    signatureCertificateId: string;
}

const baseGetSignatureCertificateRequest: object = { signatureCertificateId: '' };

export const GetSignatureCertificateRequest: {
    encode(message: GetSignatureCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSignatureCertificateRequest;
    fromJSON(object: any): GetSignatureCertificateRequest;
    toJSON(message: GetSignatureCertificateRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetSignatureCertificateRequest>, I>>(object: I): GetSignatureCertificateRequest;
} = {
    encode(
        message: GetSignatureCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.signatureCertificateId !== '') {
            writer.uint32(10).string(message.signatureCertificateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSignatureCertificateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSignatureCertificateRequest } as GetSignatureCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureCertificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSignatureCertificateRequest {
        const message = { ...baseGetSignatureCertificateRequest } as GetSignatureCertificateRequest;
        message.signatureCertificateId =
            object.signatureCertificateId !== undefined && object.signatureCertificateId !== null
                ? String(object.signatureCertificateId)
                : '';
        return message;
    },

    toJSON(message: GetSignatureCertificateRequest): unknown {
        const obj: any = {};
        message.signatureCertificateId !== undefined &&
            (obj.signatureCertificateId = message.signatureCertificateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetSignatureCertificateRequest>, I>>(
        object: I,
    ): GetSignatureCertificateRequest {
        const message = { ...baseGetSignatureCertificateRequest } as GetSignatureCertificateRequest;
        message.signatureCertificateId = object.signatureCertificateId ?? '';
        return message;
    },
};

const baseListSignatureCertificatesRequest: object = {
    applicationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListSignatureCertificatesRequest: {
    encode(message: ListSignatureCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSignatureCertificatesRequest;
    fromJSON(object: any): ListSignatureCertificatesRequest;
    toJSON(message: ListSignatureCertificatesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSignatureCertificatesRequest>, I>>(object: I): ListSignatureCertificatesRequest;
} = {
    encode(
        message: ListSignatureCertificatesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSignatureCertificatesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSignatureCertificatesRequest,
        } as ListSignatureCertificatesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
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

    fromJSON(object: any): ListSignatureCertificatesRequest {
        const message = {
            ...baseListSignatureCertificatesRequest,
        } as ListSignatureCertificatesRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
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

    toJSON(message: ListSignatureCertificatesRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSignatureCertificatesRequest>, I>>(
        object: I,
    ): ListSignatureCertificatesRequest {
        const message = {
            ...baseListSignatureCertificatesRequest,
        } as ListSignatureCertificatesRequest;
        message.applicationId = object.applicationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListSignatureCertificatesResponse: object = { nextPageToken: '' };

export const ListSignatureCertificatesResponse: {
    encode(message: ListSignatureCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSignatureCertificatesResponse;
    fromJSON(object: any): ListSignatureCertificatesResponse;
    toJSON(message: ListSignatureCertificatesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSignatureCertificatesResponse>, I>>(object: I): ListSignatureCertificatesResponse;
} = {
    encode(
        message: ListSignatureCertificatesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.signatureCertificates) {
            SignatureCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSignatureCertificatesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSignatureCertificatesResponse,
        } as ListSignatureCertificatesResponse;
        message.signatureCertificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureCertificates.push(
                        SignatureCertificate.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ListSignatureCertificatesResponse {
        const message = {
            ...baseListSignatureCertificatesResponse,
        } as ListSignatureCertificatesResponse;
        message.signatureCertificates = (object.signatureCertificates ?? []).map((e: any) =>
            SignatureCertificate.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListSignatureCertificatesResponse): unknown {
        const obj: any = {};
        if (message.signatureCertificates) {
            obj.signatureCertificates = message.signatureCertificates.map((e) =>
                e ? SignatureCertificate.toJSON(e) : undefined,
            );
        } else {
            obj.signatureCertificates = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSignatureCertificatesResponse>, I>>(
        object: I,
    ): ListSignatureCertificatesResponse {
        const message = {
            ...baseListSignatureCertificatesResponse,
        } as ListSignatureCertificatesResponse;
        message.signatureCertificates =
            object.signatureCertificates?.map((e) => SignatureCertificate.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateSignatureCertificateRequest: object = {
    applicationId: '',
    name: '',
    description: '',
};

export const CreateSignatureCertificateRequest: {
    encode(message: CreateSignatureCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSignatureCertificateRequest;
    fromJSON(object: any): CreateSignatureCertificateRequest;
    toJSON(message: CreateSignatureCertificateRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateSignatureCertificateRequest>, I>>(object: I): CreateSignatureCertificateRequest;
} = {
    encode(
        message: CreateSignatureCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.applicationId !== '') {
            writer.uint32(10).string(message.applicationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSignatureCertificateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSignatureCertificateRequest,
        } as CreateSignatureCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applicationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSignatureCertificateRequest {
        const message = {
            ...baseCreateSignatureCertificateRequest,
        } as CreateSignatureCertificateRequest;
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: CreateSignatureCertificateRequest): unknown {
        const obj: any = {};
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSignatureCertificateRequest>, I>>(
        object: I,
    ): CreateSignatureCertificateRequest {
        const message = {
            ...baseCreateSignatureCertificateRequest,
        } as CreateSignatureCertificateRequest;
        message.applicationId = object.applicationId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseCreateSignatureCertificateMetadata: object = { signatureCertificateId: '' };

export const CreateSignatureCertificateMetadata: {
    encode(message: CreateSignatureCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSignatureCertificateMetadata;
    fromJSON(object: any): CreateSignatureCertificateMetadata;
    toJSON(message: CreateSignatureCertificateMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateSignatureCertificateMetadata>, I>>(object: I): CreateSignatureCertificateMetadata;
} = {
    encode(
        message: CreateSignatureCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.signatureCertificateId !== '') {
            writer.uint32(10).string(message.signatureCertificateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSignatureCertificateMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSignatureCertificateMetadata,
        } as CreateSignatureCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureCertificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSignatureCertificateMetadata {
        const message = {
            ...baseCreateSignatureCertificateMetadata,
        } as CreateSignatureCertificateMetadata;
        message.signatureCertificateId =
            object.signatureCertificateId !== undefined && object.signatureCertificateId !== null
                ? String(object.signatureCertificateId)
                : '';
        return message;
    },

    toJSON(message: CreateSignatureCertificateMetadata): unknown {
        const obj: any = {};
        message.signatureCertificateId !== undefined &&
            (obj.signatureCertificateId = message.signatureCertificateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSignatureCertificateMetadata>, I>>(
        object: I,
    ): CreateSignatureCertificateMetadata {
        const message = {
            ...baseCreateSignatureCertificateMetadata,
        } as CreateSignatureCertificateMetadata;
        message.signatureCertificateId = object.signatureCertificateId ?? '';
        return message;
    },
};

const baseUpdateSignatureCertificateRequest: object = {
    signatureCertificateId: '',
    name: '',
    description: '',
};

export const UpdateSignatureCertificateRequest: {
    encode(message: UpdateSignatureCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSignatureCertificateRequest;
    fromJSON(object: any): UpdateSignatureCertificateRequest;
    toJSON(message: UpdateSignatureCertificateRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateSignatureCertificateRequest>, I>>(object: I): UpdateSignatureCertificateRequest;
} = {
    encode(
        message: UpdateSignatureCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.signatureCertificateId !== '') {
            writer.uint32(10).string(message.signatureCertificateId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSignatureCertificateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSignatureCertificateRequest,
        } as UpdateSignatureCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureCertificateId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSignatureCertificateRequest {
        const message = {
            ...baseUpdateSignatureCertificateRequest,
        } as UpdateSignatureCertificateRequest;
        message.signatureCertificateId =
            object.signatureCertificateId !== undefined && object.signatureCertificateId !== null
                ? String(object.signatureCertificateId)
                : '';
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

    toJSON(message: UpdateSignatureCertificateRequest): unknown {
        const obj: any = {};
        message.signatureCertificateId !== undefined &&
            (obj.signatureCertificateId = message.signatureCertificateId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateSignatureCertificateRequest>, I>>(
        object: I,
    ): UpdateSignatureCertificateRequest {
        const message = {
            ...baseUpdateSignatureCertificateRequest,
        } as UpdateSignatureCertificateRequest;
        message.signatureCertificateId = object.signatureCertificateId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseUpdateSignatureCertificateMetadata: object = { signatureCertificateId: '' };

export const UpdateSignatureCertificateMetadata: {
    encode(message: UpdateSignatureCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSignatureCertificateMetadata;
    fromJSON(object: any): UpdateSignatureCertificateMetadata;
    toJSON(message: UpdateSignatureCertificateMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateSignatureCertificateMetadata>, I>>(object: I): UpdateSignatureCertificateMetadata;
} = {
    encode(
        message: UpdateSignatureCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.signatureCertificateId !== '') {
            writer.uint32(10).string(message.signatureCertificateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSignatureCertificateMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSignatureCertificateMetadata,
        } as UpdateSignatureCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureCertificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSignatureCertificateMetadata {
        const message = {
            ...baseUpdateSignatureCertificateMetadata,
        } as UpdateSignatureCertificateMetadata;
        message.signatureCertificateId =
            object.signatureCertificateId !== undefined && object.signatureCertificateId !== null
                ? String(object.signatureCertificateId)
                : '';
        return message;
    },

    toJSON(message: UpdateSignatureCertificateMetadata): unknown {
        const obj: any = {};
        message.signatureCertificateId !== undefined &&
            (obj.signatureCertificateId = message.signatureCertificateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateSignatureCertificateMetadata>, I>>(
        object: I,
    ): UpdateSignatureCertificateMetadata {
        const message = {
            ...baseUpdateSignatureCertificateMetadata,
        } as UpdateSignatureCertificateMetadata;
        message.signatureCertificateId = object.signatureCertificateId ?? '';
        return message;
    },
};

const baseDeleteSignatureCertificateRequest: object = { signatureCertificateId: '' };

export const DeleteSignatureCertificateRequest: {
    encode(message: DeleteSignatureCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSignatureCertificateRequest;
    fromJSON(object: any): DeleteSignatureCertificateRequest;
    toJSON(message: DeleteSignatureCertificateRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteSignatureCertificateRequest>, I>>(object: I): DeleteSignatureCertificateRequest;
} = {
    encode(
        message: DeleteSignatureCertificateRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.signatureCertificateId !== '') {
            writer.uint32(10).string(message.signatureCertificateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSignatureCertificateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSignatureCertificateRequest,
        } as DeleteSignatureCertificateRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureCertificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSignatureCertificateRequest {
        const message = {
            ...baseDeleteSignatureCertificateRequest,
        } as DeleteSignatureCertificateRequest;
        message.signatureCertificateId =
            object.signatureCertificateId !== undefined && object.signatureCertificateId !== null
                ? String(object.signatureCertificateId)
                : '';
        return message;
    },

    toJSON(message: DeleteSignatureCertificateRequest): unknown {
        const obj: any = {};
        message.signatureCertificateId !== undefined &&
            (obj.signatureCertificateId = message.signatureCertificateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSignatureCertificateRequest>, I>>(
        object: I,
    ): DeleteSignatureCertificateRequest {
        const message = {
            ...baseDeleteSignatureCertificateRequest,
        } as DeleteSignatureCertificateRequest;
        message.signatureCertificateId = object.signatureCertificateId ?? '';
        return message;
    },
};

const baseDeleteSignatureCertificateMetadata: object = { signatureCertificateId: '' };

export const DeleteSignatureCertificateMetadata: {
    encode(message: DeleteSignatureCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSignatureCertificateMetadata;
    fromJSON(object: any): DeleteSignatureCertificateMetadata;
    toJSON(message: DeleteSignatureCertificateMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteSignatureCertificateMetadata>, I>>(object: I): DeleteSignatureCertificateMetadata;
} = {
    encode(
        message: DeleteSignatureCertificateMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.signatureCertificateId !== '') {
            writer.uint32(10).string(message.signatureCertificateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSignatureCertificateMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSignatureCertificateMetadata,
        } as DeleteSignatureCertificateMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureCertificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSignatureCertificateMetadata {
        const message = {
            ...baseDeleteSignatureCertificateMetadata,
        } as DeleteSignatureCertificateMetadata;
        message.signatureCertificateId =
            object.signatureCertificateId !== undefined && object.signatureCertificateId !== null
                ? String(object.signatureCertificateId)
                : '';
        return message;
    },

    toJSON(message: DeleteSignatureCertificateMetadata): unknown {
        const obj: any = {};
        message.signatureCertificateId !== undefined &&
            (obj.signatureCertificateId = message.signatureCertificateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSignatureCertificateMetadata>, I>>(
        object: I,
    ): DeleteSignatureCertificateMetadata {
        const message = {
            ...baseDeleteSignatureCertificateMetadata,
        } as DeleteSignatureCertificateMetadata;
        message.signatureCertificateId = object.signatureCertificateId ?? '';
        return message;
    },
};

/** A set of methods for managing signature certificates for SAML applications. */
export const SignatureCertificateServiceService = {
    /**
     * Returns the specified signature certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.SignatureCertificateService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSignatureCertificateRequest) =>
            Buffer.from(GetSignatureCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSignatureCertificateRequest.decode(value),
        responseSerialize: (value: SignatureCertificate) =>
            Buffer.from(SignatureCertificate.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SignatureCertificate.decode(value),
    },
    /** Retrieves the list of signature certificates for the specified SAML application. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.SignatureCertificateService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSignatureCertificatesRequest) =>
            Buffer.from(ListSignatureCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSignatureCertificatesRequest.decode(value),
        responseSerialize: (value: ListSignatureCertificatesResponse) =>
            Buffer.from(ListSignatureCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSignatureCertificatesResponse.decode(value),
    },
    /** Creates a new signature certificate for the specified SAML application. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.SignatureCertificateService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSignatureCertificateRequest) =>
            Buffer.from(CreateSignatureCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateSignatureCertificateRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified signature certificate. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.SignatureCertificateService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSignatureCertificateRequest) =>
            Buffer.from(UpdateSignatureCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateSignatureCertificateRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified signature certificate. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.idp.application.saml.SignatureCertificateService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSignatureCertificateRequest) =>
            Buffer.from(DeleteSignatureCertificateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteSignatureCertificateRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface SignatureCertificateServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified signature certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: handleUnaryCall<GetSignatureCertificateRequest, SignatureCertificate>;
    /** Retrieves the list of signature certificates for the specified SAML application. */
    list: handleUnaryCall<ListSignatureCertificatesRequest, ListSignatureCertificatesResponse>;
    /** Creates a new signature certificate for the specified SAML application. */
    create: handleUnaryCall<CreateSignatureCertificateRequest, Operation>;
    /** Updates the specified signature certificate. */
    update: handleUnaryCall<UpdateSignatureCertificateRequest, Operation>;
    /** Deletes the specified signature certificate. */
    delete: handleUnaryCall<DeleteSignatureCertificateRequest, Operation>;
}

export interface SignatureCertificateServiceClient extends Client {
    /**
     * Returns the specified signature certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get(
        request: GetSignatureCertificateRequest,
        callback: (error: ServiceError | null, response: SignatureCertificate) => void,
    ): ClientUnaryCall;
    get(
        request: GetSignatureCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SignatureCertificate) => void,
    ): ClientUnaryCall;
    get(
        request: GetSignatureCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SignatureCertificate) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of signature certificates for the specified SAML application. */
    list(
        request: ListSignatureCertificatesRequest,
        callback: (error: ServiceError | null, response: ListSignatureCertificatesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSignatureCertificatesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListSignatureCertificatesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSignatureCertificatesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListSignatureCertificatesResponse) => void,
    ): ClientUnaryCall;
    /** Creates a new signature certificate for the specified SAML application. */
    create(
        request: CreateSignatureCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateSignatureCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateSignatureCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified signature certificate. */
    update(
        request: UpdateSignatureCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateSignatureCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateSignatureCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified signature certificate. */
    delete(
        request: DeleteSignatureCertificateRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSignatureCertificateRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSignatureCertificateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const SignatureCertificateServiceClient = makeGenericClientConstructor(
    SignatureCertificateServiceService,
    'yandex.cloud.organizationmanager.v1.idp.application.saml.SignatureCertificateService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SignatureCertificateServiceClient;
    service: typeof SignatureCertificateServiceService;
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
