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
    SymmetricAlgorithm,
    symmetricAlgorithmFromJSON,
    symmetricAlgorithmToJSON,
} from '../../../../yandex/cloud/kms/v1/symmetric_key';

export const protobufPackage = 'yandex.cloud.kms.v1';

export interface SymmetricEncryptRequest {
    $type: 'yandex.cloud.kms.v1.SymmetricEncryptRequest';
    /** ID of the symmetric KMS key to use for encryption. */
    keyId: string;
    /**
     * ID of the key version to encrypt plaintext with.
     * Defaults to the primary version if not specified.
     */
    versionId: string;
    /**
     * Additional authenticated data (AAD context), optional.
     * If specified, this data will be required for decryption with the [SymmetricDecryptRequest].
     * Should be encoded with base64.
     */
    aadContext: Buffer;
    /**
     * Plaintext to be encrypted.
     * Should be encoded with base64.
     */
    plaintext: Buffer;
}

export interface SymmetricEncryptResponse {
    $type: 'yandex.cloud.kms.v1.SymmetricEncryptResponse';
    /** ID of the symmetric KMS key that was used for encryption. */
    keyId: string;
    /** ID of the key version that was used for encryption. */
    versionId: string;
    /** Resulting ciphertext. */
    ciphertext: Buffer;
}

export interface SymmetricDecryptRequest {
    $type: 'yandex.cloud.kms.v1.SymmetricDecryptRequest';
    /** ID of the symmetric KMS key to use for decryption. */
    keyId: string;
    /**
     * Additional authenticated data, must be the same as was provided
     * in the corresponding [SymmetricEncryptRequest].
     * Should be encoded with base64.
     */
    aadContext: Buffer;
    /**
     * Ciphertext to be decrypted.
     * Should be encoded with base64.
     */
    ciphertext: Buffer;
}

export interface SymmetricDecryptResponse {
    $type: 'yandex.cloud.kms.v1.SymmetricDecryptResponse';
    /** ID of the symmetric KMS key that was used for decryption. */
    keyId: string;
    /** ID of the key version that was used for decryption. */
    versionId: string;
    /** Decrypted plaintext. */
    plaintext: Buffer;
}

export interface GenerateDataKeyRequest {
    $type: 'yandex.cloud.kms.v1.GenerateDataKeyRequest';
    /** ID of the symmetric KMS key that the generated data key should be encrypted with. */
    keyId: string;
    /**
     * ID of the key version to encrypt the generated data key with.
     * Defaults to the primary version if not specified.
     */
    versionId: string;
    /**
     * Additional authenticated data (AAD context), optional.
     * If specified, this data will be required for decryption with the [SymmetricDecryptRequest].
     * Should be encoded with base64.
     */
    aadContext: Buffer;
    /** Encryption algorithm and key length for the generated data key. */
    dataKeySpec: SymmetricAlgorithm;
    /**
     * If `true`, the method won't return the data key as plaintext.
     * Default value is `false`.
     */
    skipPlaintext: boolean;
}

export interface GenerateDataKeyResponse {
    $type: 'yandex.cloud.kms.v1.GenerateDataKeyResponse';
    /** ID of the symmetric KMS key that was used to encrypt the generated data key. */
    keyId: string;
    /** ID of the key version that was used for encryption. */
    versionId: string;
    /**
     * Generated data key as plaintext.
     * The field is empty, if the [GenerateDataKeyRequest.skip_plaintext] parameter
     * was set to `true`.
     */
    dataKeyPlaintext: Buffer;
    /** The encrypted data key. */
    dataKeyCiphertext: Buffer;
}

export interface SymmetricReEncryptRequest {
    $type: 'yandex.cloud.kms.v1.SymmetricReEncryptRequest';
    /** ID of the new key to be used for encryption. */
    keyId: string;
    /**
     * ID of the version of the new key to be used for encryption.
     * Defaults to the primary version if not specified.
     */
    versionId: string;
    /**
     * Additional authenticated data to be required for decryption.
     * Should be encoded with base64.
     */
    aadContext: Buffer;
    /** ID of the key that the ciphertext is currently encrypted with. May be the same as for the new key. */
    sourceKeyId: string;
    /**
     * Additional authenticated data provided with the initial encryption request.
     * Should be encoded with base64.
     */
    sourceAadContext: Buffer;
    /**
     * Ciphertext to re-encrypt.
     * Should be encoded with base64.
     */
    ciphertext: Buffer;
}

export interface SymmetricReEncryptResponse {
    $type: 'yandex.cloud.kms.v1.SymmetricReEncryptResponse';
    /** ID of the key that the ciphertext is encrypted with now. */
    keyId: string;
    /** ID of key version that was used for encryption. */
    versionId: string;
    /** ID of the key that the ciphertext was encrypted with previously. */
    sourceKeyId: string;
    /** ID of the key version that was used to decrypt the re-encrypted ciphertext. */
    sourceVersionId: string;
    /** Resulting re-encrypted ciphertext. */
    ciphertext: Buffer;
}

const baseSymmetricEncryptRequest: object = {
    $type: 'yandex.cloud.kms.v1.SymmetricEncryptRequest',
    keyId: '',
    versionId: '',
};

export const SymmetricEncryptRequest = {
    $type: 'yandex.cloud.kms.v1.SymmetricEncryptRequest' as const,

    encode(message: SymmetricEncryptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.plaintext.length !== 0) {
            writer.uint32(34).bytes(message.plaintext);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricEncryptRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSymmetricEncryptRequest } as SymmetricEncryptRequest;
        message.aadContext = Buffer.alloc(0);
        message.plaintext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes() as Buffer;
                    break;
                case 4:
                    message.plaintext = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SymmetricEncryptRequest {
        const message = { ...baseSymmetricEncryptRequest } as SymmetricEncryptRequest;
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.aadContext =
            object.aadContext !== undefined && object.aadContext !== null
                ? Buffer.from(bytesFromBase64(object.aadContext))
                : Buffer.alloc(0);
        message.plaintext =
            object.plaintext !== undefined && object.plaintext !== null
                ? Buffer.from(bytesFromBase64(object.plaintext))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: SymmetricEncryptRequest): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(
                message.aadContext !== undefined ? message.aadContext : Buffer.alloc(0),
            ));
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(
                message.plaintext !== undefined ? message.plaintext : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SymmetricEncryptRequest>, I>>(
        object: I,
    ): SymmetricEncryptRequest {
        const message = { ...baseSymmetricEncryptRequest } as SymmetricEncryptRequest;
        message.keyId = object.keyId ?? '';
        message.versionId = object.versionId ?? '';
        message.aadContext = object.aadContext ?? Buffer.alloc(0);
        message.plaintext = object.plaintext ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(SymmetricEncryptRequest.$type, SymmetricEncryptRequest);

const baseSymmetricEncryptResponse: object = {
    $type: 'yandex.cloud.kms.v1.SymmetricEncryptResponse',
    keyId: '',
    versionId: '',
};

export const SymmetricEncryptResponse = {
    $type: 'yandex.cloud.kms.v1.SymmetricEncryptResponse' as const,

    encode(
        message: SymmetricEncryptResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(26).bytes(message.ciphertext);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricEncryptResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSymmetricEncryptResponse } as SymmetricEncryptResponse;
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.ciphertext = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SymmetricEncryptResponse {
        const message = { ...baseSymmetricEncryptResponse } as SymmetricEncryptResponse;
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.ciphertext =
            object.ciphertext !== undefined && object.ciphertext !== null
                ? Buffer.from(bytesFromBase64(object.ciphertext))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: SymmetricEncryptResponse): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(
                message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SymmetricEncryptResponse>, I>>(
        object: I,
    ): SymmetricEncryptResponse {
        const message = { ...baseSymmetricEncryptResponse } as SymmetricEncryptResponse;
        message.keyId = object.keyId ?? '';
        message.versionId = object.versionId ?? '';
        message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(SymmetricEncryptResponse.$type, SymmetricEncryptResponse);

const baseSymmetricDecryptRequest: object = {
    $type: 'yandex.cloud.kms.v1.SymmetricDecryptRequest',
    keyId: '',
};

export const SymmetricDecryptRequest = {
    $type: 'yandex.cloud.kms.v1.SymmetricDecryptRequest' as const,

    encode(message: SymmetricDecryptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(18).bytes(message.aadContext);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(26).bytes(message.ciphertext);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricDecryptRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSymmetricDecryptRequest } as SymmetricDecryptRequest;
        message.aadContext = Buffer.alloc(0);
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.aadContext = reader.bytes() as Buffer;
                    break;
                case 3:
                    message.ciphertext = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SymmetricDecryptRequest {
        const message = { ...baseSymmetricDecryptRequest } as SymmetricDecryptRequest;
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.aadContext =
            object.aadContext !== undefined && object.aadContext !== null
                ? Buffer.from(bytesFromBase64(object.aadContext))
                : Buffer.alloc(0);
        message.ciphertext =
            object.ciphertext !== undefined && object.ciphertext !== null
                ? Buffer.from(bytesFromBase64(object.ciphertext))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: SymmetricDecryptRequest): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(
                message.aadContext !== undefined ? message.aadContext : Buffer.alloc(0),
            ));
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(
                message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SymmetricDecryptRequest>, I>>(
        object: I,
    ): SymmetricDecryptRequest {
        const message = { ...baseSymmetricDecryptRequest } as SymmetricDecryptRequest;
        message.keyId = object.keyId ?? '';
        message.aadContext = object.aadContext ?? Buffer.alloc(0);
        message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(SymmetricDecryptRequest.$type, SymmetricDecryptRequest);

const baseSymmetricDecryptResponse: object = {
    $type: 'yandex.cloud.kms.v1.SymmetricDecryptResponse',
    keyId: '',
    versionId: '',
};

export const SymmetricDecryptResponse = {
    $type: 'yandex.cloud.kms.v1.SymmetricDecryptResponse' as const,

    encode(
        message: SymmetricDecryptResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.plaintext.length !== 0) {
            writer.uint32(26).bytes(message.plaintext);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricDecryptResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSymmetricDecryptResponse } as SymmetricDecryptResponse;
        message.plaintext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.plaintext = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SymmetricDecryptResponse {
        const message = { ...baseSymmetricDecryptResponse } as SymmetricDecryptResponse;
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.plaintext =
            object.plaintext !== undefined && object.plaintext !== null
                ? Buffer.from(bytesFromBase64(object.plaintext))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: SymmetricDecryptResponse): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(
                message.plaintext !== undefined ? message.plaintext : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SymmetricDecryptResponse>, I>>(
        object: I,
    ): SymmetricDecryptResponse {
        const message = { ...baseSymmetricDecryptResponse } as SymmetricDecryptResponse;
        message.keyId = object.keyId ?? '';
        message.versionId = object.versionId ?? '';
        message.plaintext = object.plaintext ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(SymmetricDecryptResponse.$type, SymmetricDecryptResponse);

const baseGenerateDataKeyRequest: object = {
    $type: 'yandex.cloud.kms.v1.GenerateDataKeyRequest',
    keyId: '',
    versionId: '',
    dataKeySpec: 0,
    skipPlaintext: false,
};

export const GenerateDataKeyRequest = {
    $type: 'yandex.cloud.kms.v1.GenerateDataKeyRequest' as const,

    encode(message: GenerateDataKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.dataKeySpec !== 0) {
            writer.uint32(32).int32(message.dataKeySpec);
        }
        if (message.skipPlaintext === true) {
            writer.uint32(40).bool(message.skipPlaintext);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDataKeyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenerateDataKeyRequest } as GenerateDataKeyRequest;
        message.aadContext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes() as Buffer;
                    break;
                case 4:
                    message.dataKeySpec = reader.int32() as any;
                    break;
                case 5:
                    message.skipPlaintext = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenerateDataKeyRequest {
        const message = { ...baseGenerateDataKeyRequest } as GenerateDataKeyRequest;
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.aadContext =
            object.aadContext !== undefined && object.aadContext !== null
                ? Buffer.from(bytesFromBase64(object.aadContext))
                : Buffer.alloc(0);
        message.dataKeySpec =
            object.dataKeySpec !== undefined && object.dataKeySpec !== null
                ? symmetricAlgorithmFromJSON(object.dataKeySpec)
                : 0;
        message.skipPlaintext =
            object.skipPlaintext !== undefined && object.skipPlaintext !== null
                ? Boolean(object.skipPlaintext)
                : false;
        return message;
    },

    toJSON(message: GenerateDataKeyRequest): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(
                message.aadContext !== undefined ? message.aadContext : Buffer.alloc(0),
            ));
        message.dataKeySpec !== undefined &&
            (obj.dataKeySpec = symmetricAlgorithmToJSON(message.dataKeySpec));
        message.skipPlaintext !== undefined && (obj.skipPlaintext = message.skipPlaintext);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenerateDataKeyRequest>, I>>(
        object: I,
    ): GenerateDataKeyRequest {
        const message = { ...baseGenerateDataKeyRequest } as GenerateDataKeyRequest;
        message.keyId = object.keyId ?? '';
        message.versionId = object.versionId ?? '';
        message.aadContext = object.aadContext ?? Buffer.alloc(0);
        message.dataKeySpec = object.dataKeySpec ?? 0;
        message.skipPlaintext = object.skipPlaintext ?? false;
        return message;
    },
};

messageTypeRegistry.set(GenerateDataKeyRequest.$type, GenerateDataKeyRequest);

const baseGenerateDataKeyResponse: object = {
    $type: 'yandex.cloud.kms.v1.GenerateDataKeyResponse',
    keyId: '',
    versionId: '',
};

export const GenerateDataKeyResponse = {
    $type: 'yandex.cloud.kms.v1.GenerateDataKeyResponse' as const,

    encode(message: GenerateDataKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.dataKeyPlaintext.length !== 0) {
            writer.uint32(26).bytes(message.dataKeyPlaintext);
        }
        if (message.dataKeyCiphertext.length !== 0) {
            writer.uint32(34).bytes(message.dataKeyCiphertext);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDataKeyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenerateDataKeyResponse } as GenerateDataKeyResponse;
        message.dataKeyPlaintext = Buffer.alloc(0);
        message.dataKeyCiphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.dataKeyPlaintext = reader.bytes() as Buffer;
                    break;
                case 4:
                    message.dataKeyCiphertext = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenerateDataKeyResponse {
        const message = { ...baseGenerateDataKeyResponse } as GenerateDataKeyResponse;
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.dataKeyPlaintext =
            object.dataKeyPlaintext !== undefined && object.dataKeyPlaintext !== null
                ? Buffer.from(bytesFromBase64(object.dataKeyPlaintext))
                : Buffer.alloc(0);
        message.dataKeyCiphertext =
            object.dataKeyCiphertext !== undefined && object.dataKeyCiphertext !== null
                ? Buffer.from(bytesFromBase64(object.dataKeyCiphertext))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: GenerateDataKeyResponse): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.dataKeyPlaintext !== undefined &&
            (obj.dataKeyPlaintext = base64FromBytes(
                message.dataKeyPlaintext !== undefined ? message.dataKeyPlaintext : Buffer.alloc(0),
            ));
        message.dataKeyCiphertext !== undefined &&
            (obj.dataKeyCiphertext = base64FromBytes(
                message.dataKeyCiphertext !== undefined
                    ? message.dataKeyCiphertext
                    : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenerateDataKeyResponse>, I>>(
        object: I,
    ): GenerateDataKeyResponse {
        const message = { ...baseGenerateDataKeyResponse } as GenerateDataKeyResponse;
        message.keyId = object.keyId ?? '';
        message.versionId = object.versionId ?? '';
        message.dataKeyPlaintext = object.dataKeyPlaintext ?? Buffer.alloc(0);
        message.dataKeyCiphertext = object.dataKeyCiphertext ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(GenerateDataKeyResponse.$type, GenerateDataKeyResponse);

const baseSymmetricReEncryptRequest: object = {
    $type: 'yandex.cloud.kms.v1.SymmetricReEncryptRequest',
    keyId: '',
    versionId: '',
    sourceKeyId: '',
};

export const SymmetricReEncryptRequest = {
    $type: 'yandex.cloud.kms.v1.SymmetricReEncryptRequest' as const,

    encode(
        message: SymmetricReEncryptRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.sourceKeyId !== '') {
            writer.uint32(34).string(message.sourceKeyId);
        }
        if (message.sourceAadContext.length !== 0) {
            writer.uint32(42).bytes(message.sourceAadContext);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(50).bytes(message.ciphertext);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricReEncryptRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSymmetricReEncryptRequest } as SymmetricReEncryptRequest;
        message.aadContext = Buffer.alloc(0);
        message.sourceAadContext = Buffer.alloc(0);
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes() as Buffer;
                    break;
                case 4:
                    message.sourceKeyId = reader.string();
                    break;
                case 5:
                    message.sourceAadContext = reader.bytes() as Buffer;
                    break;
                case 6:
                    message.ciphertext = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SymmetricReEncryptRequest {
        const message = { ...baseSymmetricReEncryptRequest } as SymmetricReEncryptRequest;
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.aadContext =
            object.aadContext !== undefined && object.aadContext !== null
                ? Buffer.from(bytesFromBase64(object.aadContext))
                : Buffer.alloc(0);
        message.sourceKeyId =
            object.sourceKeyId !== undefined && object.sourceKeyId !== null
                ? String(object.sourceKeyId)
                : '';
        message.sourceAadContext =
            object.sourceAadContext !== undefined && object.sourceAadContext !== null
                ? Buffer.from(bytesFromBase64(object.sourceAadContext))
                : Buffer.alloc(0);
        message.ciphertext =
            object.ciphertext !== undefined && object.ciphertext !== null
                ? Buffer.from(bytesFromBase64(object.ciphertext))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: SymmetricReEncryptRequest): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(
                message.aadContext !== undefined ? message.aadContext : Buffer.alloc(0),
            ));
        message.sourceKeyId !== undefined && (obj.sourceKeyId = message.sourceKeyId);
        message.sourceAadContext !== undefined &&
            (obj.sourceAadContext = base64FromBytes(
                message.sourceAadContext !== undefined ? message.sourceAadContext : Buffer.alloc(0),
            ));
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(
                message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SymmetricReEncryptRequest>, I>>(
        object: I,
    ): SymmetricReEncryptRequest {
        const message = { ...baseSymmetricReEncryptRequest } as SymmetricReEncryptRequest;
        message.keyId = object.keyId ?? '';
        message.versionId = object.versionId ?? '';
        message.aadContext = object.aadContext ?? Buffer.alloc(0);
        message.sourceKeyId = object.sourceKeyId ?? '';
        message.sourceAadContext = object.sourceAadContext ?? Buffer.alloc(0);
        message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(SymmetricReEncryptRequest.$type, SymmetricReEncryptRequest);

const baseSymmetricReEncryptResponse: object = {
    $type: 'yandex.cloud.kms.v1.SymmetricReEncryptResponse',
    keyId: '',
    versionId: '',
    sourceKeyId: '',
    sourceVersionId: '',
};

export const SymmetricReEncryptResponse = {
    $type: 'yandex.cloud.kms.v1.SymmetricReEncryptResponse' as const,

    encode(
        message: SymmetricReEncryptResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.sourceKeyId !== '') {
            writer.uint32(26).string(message.sourceKeyId);
        }
        if (message.sourceVersionId !== '') {
            writer.uint32(34).string(message.sourceVersionId);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(42).bytes(message.ciphertext);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SymmetricReEncryptResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSymmetricReEncryptResponse } as SymmetricReEncryptResponse;
        message.ciphertext = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.sourceKeyId = reader.string();
                    break;
                case 4:
                    message.sourceVersionId = reader.string();
                    break;
                case 5:
                    message.ciphertext = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SymmetricReEncryptResponse {
        const message = { ...baseSymmetricReEncryptResponse } as SymmetricReEncryptResponse;
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        message.sourceKeyId =
            object.sourceKeyId !== undefined && object.sourceKeyId !== null
                ? String(object.sourceKeyId)
                : '';
        message.sourceVersionId =
            object.sourceVersionId !== undefined && object.sourceVersionId !== null
                ? String(object.sourceVersionId)
                : '';
        message.ciphertext =
            object.ciphertext !== undefined && object.ciphertext !== null
                ? Buffer.from(bytesFromBase64(object.ciphertext))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: SymmetricReEncryptResponse): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.sourceKeyId !== undefined && (obj.sourceKeyId = message.sourceKeyId);
        message.sourceVersionId !== undefined && (obj.sourceVersionId = message.sourceVersionId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(
                message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SymmetricReEncryptResponse>, I>>(
        object: I,
    ): SymmetricReEncryptResponse {
        const message = { ...baseSymmetricReEncryptResponse } as SymmetricReEncryptResponse;
        message.keyId = object.keyId ?? '';
        message.versionId = object.versionId ?? '';
        message.sourceKeyId = object.sourceKeyId ?? '';
        message.sourceVersionId = object.sourceVersionId ?? '';
        message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(SymmetricReEncryptResponse.$type, SymmetricReEncryptResponse);

/** Set of methods that perform symmetric encryption and decryption. */
export const SymmetricCryptoServiceService = {
    /** Encrypts given plaintext with the specified key. */
    encrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SymmetricEncryptRequest) =>
            Buffer.from(SymmetricEncryptRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SymmetricEncryptRequest.decode(value),
        responseSerialize: (value: SymmetricEncryptResponse) =>
            Buffer.from(SymmetricEncryptResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SymmetricEncryptResponse.decode(value),
    },
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SymmetricDecryptRequest) =>
            Buffer.from(SymmetricDecryptRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SymmetricDecryptRequest.decode(value),
        responseSerialize: (value: SymmetricDecryptResponse) =>
            Buffer.from(SymmetricDecryptResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SymmetricDecryptResponse.decode(value),
    },
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SymmetricReEncryptRequest) =>
            Buffer.from(SymmetricReEncryptRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SymmetricReEncryptRequest.decode(value),
        responseSerialize: (value: SymmetricReEncryptResponse) =>
            Buffer.from(SymmetricReEncryptResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SymmetricReEncryptResponse.decode(value),
    },
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GenerateDataKeyRequest) =>
            Buffer.from(GenerateDataKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GenerateDataKeyRequest.decode(value),
        responseSerialize: (value: GenerateDataKeyResponse) =>
            Buffer.from(GenerateDataKeyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GenerateDataKeyResponse.decode(value),
    },
} as const;

export interface SymmetricCryptoServiceServer extends UntypedServiceImplementation {
    /** Encrypts given plaintext with the specified key. */
    encrypt: handleUnaryCall<SymmetricEncryptRequest, SymmetricEncryptResponse>;
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: handleUnaryCall<SymmetricDecryptRequest, SymmetricDecryptResponse>;
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt: handleUnaryCall<SymmetricReEncryptRequest, SymmetricReEncryptResponse>;
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey: handleUnaryCall<GenerateDataKeyRequest, GenerateDataKeyResponse>;
}

export interface SymmetricCryptoServiceClient extends Client {
    /** Encrypts given plaintext with the specified key. */
    encrypt(
        request: SymmetricEncryptRequest,
        callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void,
    ): ClientUnaryCall;
    encrypt(
        request: SymmetricEncryptRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void,
    ): ClientUnaryCall;
    encrypt(
        request: SymmetricEncryptRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void,
    ): ClientUnaryCall;
    /** Decrypts the given ciphertext with the specified key. */
    decrypt(
        request: SymmetricDecryptRequest,
        callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void,
    ): ClientUnaryCall;
    decrypt(
        request: SymmetricDecryptRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void,
    ): ClientUnaryCall;
    decrypt(
        request: SymmetricDecryptRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void,
    ): ClientUnaryCall;
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt(
        request: SymmetricReEncryptRequest,
        callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void,
    ): ClientUnaryCall;
    reEncrypt(
        request: SymmetricReEncryptRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void,
    ): ClientUnaryCall;
    reEncrypt(
        request: SymmetricReEncryptRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void,
    ): ClientUnaryCall;
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey(
        request: GenerateDataKeyRequest,
        callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void,
    ): ClientUnaryCall;
    generateDataKey(
        request: GenerateDataKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void,
    ): ClientUnaryCall;
    generateDataKey(
        request: GenerateDataKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void,
    ): ClientUnaryCall;
}

export const SymmetricCryptoServiceClient = makeGenericClientConstructor(
    SymmetricCryptoServiceService,
    'yandex.cloud.kms.v1.SymmetricCryptoService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SymmetricCryptoServiceClient;
    service: typeof SymmetricCryptoServiceService;
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

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
