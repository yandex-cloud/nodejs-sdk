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
import { ShieldingDetails } from '../../../../yandex/cloud/cdn/v1/shielding';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.cdn.v1';

/** Request to retrieve shielding details for a specific resource. */
export interface GetShieldingDetailsRequest {
    /** ID of the resource for which to get shielding details. */
    resourceId: string;
}

/** Request to activate shielding for a specific resource. */
export interface ActivateShieldingRequest {
    /** ID of the resource to activate shielding for. */
    resourceId: string;
    /** ID of the location to activate shielding in, allowing selection of a suitable geographical location. */
    locationId: number;
}

/** Metadata for shielding activation, detailing the operations performed. */
export interface ActivateShieldingMetadata {
    /** ID of the resource for which shielding is being activated. */
    resourceId: string;
}

/** Request to deactivate shielding for a specific resource. */
export interface DeactivateShieldingRequest {
    /** ID of the resource to deactivate shielding for. */
    resourceId: string;
}

/** Metadata for shielding deactivation, detailing the operations performed. */
export interface DeactivateShieldingMetadata {
    /** ID of the resource for which shielding is being deactivated. */
    resourceId: string;
}

/** Request to update shielding parameters, including location adjustments. */
export interface UpdateShieldingRequest {
    /** ID of the resource for which shielding parameters are being updated. */
    resourceId: string;
    /** ID of the location for updating shielding parameters, allowing for geographical adjustments. */
    locationId: number;
}

/** Metadata for shielding updates, detailing the operations performed. */
export interface UpdateShieldingMetadata {
    /** ID of the resource for which shielding parameters are being updated. */
    resourceId: string;
}

/** Request to list available geographical locations for shielding. */
export interface ListShieldingLocationsRequest {
    /** ID of the folder for which to request a list of locations where shielding can be activated. */
    folderId: string;
    /** Maximum number of results per page. */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListShieldingLocationsResponse.next_page_token]
     * returned by a previous list response.
     */
    pageToken: string;
}

/** Response for the list of available shielding locations. */
export interface ListShieldingLocationsResponse {
    /** List of available shielding locations, each representing a potential geographical location for the shielding server. */
    shieldingLocations: ShieldingDetails[];
    /** Token for getting the next page of results. */
    nextPageToken: string;
}

const baseGetShieldingDetailsRequest: object = { resourceId: '' };

export const GetShieldingDetailsRequest = {
    encode(
        message: GetShieldingDetailsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetShieldingDetailsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetShieldingDetailsRequest } as GetShieldingDetailsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetShieldingDetailsRequest {
        const message = { ...baseGetShieldingDetailsRequest } as GetShieldingDetailsRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: GetShieldingDetailsRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetShieldingDetailsRequest>, I>>(
        object: I,
    ): GetShieldingDetailsRequest {
        const message = { ...baseGetShieldingDetailsRequest } as GetShieldingDetailsRequest;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseActivateShieldingRequest: object = { resourceId: '', locationId: 0 };

export const ActivateShieldingRequest = {
    encode(
        message: ActivateShieldingRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.locationId !== 0) {
            writer.uint32(16).int64(message.locationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateShieldingRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateShieldingRequest } as ActivateShieldingRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.locationId = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateShieldingRequest {
        const message = { ...baseActivateShieldingRequest } as ActivateShieldingRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.locationId =
            object.locationId !== undefined && object.locationId !== null
                ? Number(object.locationId)
                : 0;
        return message;
    },

    toJSON(message: ActivateShieldingRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.locationId !== undefined && (obj.locationId = Math.round(message.locationId));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateShieldingRequest>, I>>(
        object: I,
    ): ActivateShieldingRequest {
        const message = { ...baseActivateShieldingRequest } as ActivateShieldingRequest;
        message.resourceId = object.resourceId ?? '';
        message.locationId = object.locationId ?? 0;
        return message;
    },
};

const baseActivateShieldingMetadata: object = { resourceId: '' };

export const ActivateShieldingMetadata = {
    encode(
        message: ActivateShieldingMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateShieldingMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseActivateShieldingMetadata } as ActivateShieldingMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateShieldingMetadata {
        const message = { ...baseActivateShieldingMetadata } as ActivateShieldingMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: ActivateShieldingMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ActivateShieldingMetadata>, I>>(
        object: I,
    ): ActivateShieldingMetadata {
        const message = { ...baseActivateShieldingMetadata } as ActivateShieldingMetadata;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseDeactivateShieldingRequest: object = { resourceId: '' };

export const DeactivateShieldingRequest = {
    encode(
        message: DeactivateShieldingRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateShieldingRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeactivateShieldingRequest } as DeactivateShieldingRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeactivateShieldingRequest {
        const message = { ...baseDeactivateShieldingRequest } as DeactivateShieldingRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: DeactivateShieldingRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeactivateShieldingRequest>, I>>(
        object: I,
    ): DeactivateShieldingRequest {
        const message = { ...baseDeactivateShieldingRequest } as DeactivateShieldingRequest;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseDeactivateShieldingMetadata: object = { resourceId: '' };

export const DeactivateShieldingMetadata = {
    encode(
        message: DeactivateShieldingMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateShieldingMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeactivateShieldingMetadata } as DeactivateShieldingMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeactivateShieldingMetadata {
        const message = { ...baseDeactivateShieldingMetadata } as DeactivateShieldingMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: DeactivateShieldingMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeactivateShieldingMetadata>, I>>(
        object: I,
    ): DeactivateShieldingMetadata {
        const message = { ...baseDeactivateShieldingMetadata } as DeactivateShieldingMetadata;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseUpdateShieldingRequest: object = { resourceId: '', locationId: 0 };

export const UpdateShieldingRequest = {
    encode(message: UpdateShieldingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.locationId !== 0) {
            writer.uint32(16).int64(message.locationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateShieldingRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateShieldingRequest } as UpdateShieldingRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.locationId = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateShieldingRequest {
        const message = { ...baseUpdateShieldingRequest } as UpdateShieldingRequest;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        message.locationId =
            object.locationId !== undefined && object.locationId !== null
                ? Number(object.locationId)
                : 0;
        return message;
    },

    toJSON(message: UpdateShieldingRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.locationId !== undefined && (obj.locationId = Math.round(message.locationId));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateShieldingRequest>, I>>(
        object: I,
    ): UpdateShieldingRequest {
        const message = { ...baseUpdateShieldingRequest } as UpdateShieldingRequest;
        message.resourceId = object.resourceId ?? '';
        message.locationId = object.locationId ?? 0;
        return message;
    },
};

const baseUpdateShieldingMetadata: object = { resourceId: '' };

export const UpdateShieldingMetadata = {
    encode(message: UpdateShieldingMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateShieldingMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateShieldingMetadata } as UpdateShieldingMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateShieldingMetadata {
        const message = { ...baseUpdateShieldingMetadata } as UpdateShieldingMetadata;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: UpdateShieldingMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateShieldingMetadata>, I>>(
        object: I,
    ): UpdateShieldingMetadata {
        const message = { ...baseUpdateShieldingMetadata } as UpdateShieldingMetadata;
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

const baseListShieldingLocationsRequest: object = { folderId: '', pageSize: 0, pageToken: '' };

export const ListShieldingLocationsRequest = {
    encode(
        message: ListShieldingLocationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListShieldingLocationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListShieldingLocationsRequest } as ListShieldingLocationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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

    fromJSON(object: any): ListShieldingLocationsRequest {
        const message = { ...baseListShieldingLocationsRequest } as ListShieldingLocationsRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListShieldingLocationsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListShieldingLocationsRequest>, I>>(
        object: I,
    ): ListShieldingLocationsRequest {
        const message = { ...baseListShieldingLocationsRequest } as ListShieldingLocationsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListShieldingLocationsResponse: object = { nextPageToken: '' };

export const ListShieldingLocationsResponse = {
    encode(
        message: ListShieldingLocationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.shieldingLocations) {
            ShieldingDetails.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListShieldingLocationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListShieldingLocationsResponse } as ListShieldingLocationsResponse;
        message.shieldingLocations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shieldingLocations.push(
                        ShieldingDetails.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ListShieldingLocationsResponse {
        const message = { ...baseListShieldingLocationsResponse } as ListShieldingLocationsResponse;
        message.shieldingLocations = (object.shieldingLocations ?? []).map((e: any) =>
            ShieldingDetails.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListShieldingLocationsResponse): unknown {
        const obj: any = {};
        if (message.shieldingLocations) {
            obj.shieldingLocations = message.shieldingLocations.map((e) =>
                e ? ShieldingDetails.toJSON(e) : undefined,
            );
        } else {
            obj.shieldingLocations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListShieldingLocationsResponse>, I>>(
        object: I,
    ): ListShieldingLocationsResponse {
        const message = { ...baseListShieldingLocationsResponse } as ListShieldingLocationsResponse;
        message.shieldingLocations =
            object.shieldingLocations?.map((e) => ShieldingDetails.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** Shielding management service. */
export const ShieldingServiceService = {
    /** Activate shielding for a resource. */
    activate: {
        path: '/yandex.cloud.cdn.v1.ShieldingService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ActivateShieldingRequest) =>
            Buffer.from(ActivateShieldingRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ActivateShieldingRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deactivate shielding for a resource. */
    deactivate: {
        path: '/yandex.cloud.cdn.v1.ShieldingService/Deactivate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeactivateShieldingRequest) =>
            Buffer.from(DeactivateShieldingRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeactivateShieldingRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Get shielding details by resource ID. */
    get: {
        path: '/yandex.cloud.cdn.v1.ShieldingService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetShieldingDetailsRequest) =>
            Buffer.from(GetShieldingDetailsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetShieldingDetailsRequest.decode(value),
        responseSerialize: (value: ShieldingDetails) =>
            Buffer.from(ShieldingDetails.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ShieldingDetails.decode(value),
    },
    /**
     * Updates shielding parameters for a resource, such as changing the geographical location of the shielding server.
     * Changes may take up to 15 minutes to propagate across CDN servers.
     * After updating, it is recommended to purge the resource's cache.
     */
    update: {
        path: '/yandex.cloud.cdn.v1.ShieldingService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateShieldingRequest) =>
            Buffer.from(UpdateShieldingRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateShieldingRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists available geographical locations. */
    listAvailableLocations: {
        path: '/yandex.cloud.cdn.v1.ShieldingService/ListAvailableLocations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListShieldingLocationsRequest) =>
            Buffer.from(ListShieldingLocationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListShieldingLocationsRequest.decode(value),
        responseSerialize: (value: ListShieldingLocationsResponse) =>
            Buffer.from(ListShieldingLocationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListShieldingLocationsResponse.decode(value),
    },
} as const;

export interface ShieldingServiceServer extends UntypedServiceImplementation {
    /** Activate shielding for a resource. */
    activate: handleUnaryCall<ActivateShieldingRequest, Operation>;
    /** Deactivate shielding for a resource. */
    deactivate: handleUnaryCall<DeactivateShieldingRequest, Operation>;
    /** Get shielding details by resource ID. */
    get: handleUnaryCall<GetShieldingDetailsRequest, ShieldingDetails>;
    /**
     * Updates shielding parameters for a resource, such as changing the geographical location of the shielding server.
     * Changes may take up to 15 minutes to propagate across CDN servers.
     * After updating, it is recommended to purge the resource's cache.
     */
    update: handleUnaryCall<UpdateShieldingRequest, Operation>;
    /** Lists available geographical locations. */
    listAvailableLocations: handleUnaryCall<
        ListShieldingLocationsRequest,
        ListShieldingLocationsResponse
    >;
}

export interface ShieldingServiceClient extends Client {
    /** Activate shielding for a resource. */
    activate(
        request: ActivateShieldingRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateShieldingRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    activate(
        request: ActivateShieldingRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deactivate shielding for a resource. */
    deactivate(
        request: DeactivateShieldingRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateShieldingRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deactivate(
        request: DeactivateShieldingRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Get shielding details by resource ID. */
    get(
        request: GetShieldingDetailsRequest,
        callback: (error: ServiceError | null, response: ShieldingDetails) => void,
    ): ClientUnaryCall;
    get(
        request: GetShieldingDetailsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ShieldingDetails) => void,
    ): ClientUnaryCall;
    get(
        request: GetShieldingDetailsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ShieldingDetails) => void,
    ): ClientUnaryCall;
    /**
     * Updates shielding parameters for a resource, such as changing the geographical location of the shielding server.
     * Changes may take up to 15 minutes to propagate across CDN servers.
     * After updating, it is recommended to purge the resource's cache.
     */
    update(
        request: UpdateShieldingRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateShieldingRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateShieldingRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists available geographical locations. */
    listAvailableLocations(
        request: ListShieldingLocationsRequest,
        callback: (error: ServiceError | null, response: ListShieldingLocationsResponse) => void,
    ): ClientUnaryCall;
    listAvailableLocations(
        request: ListShieldingLocationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListShieldingLocationsResponse) => void,
    ): ClientUnaryCall;
    listAvailableLocations(
        request: ListShieldingLocationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListShieldingLocationsResponse) => void,
    ): ClientUnaryCall;
}

export const ShieldingServiceClient = makeGenericClientConstructor(
    ShieldingServiceService,
    'yandex.cloud.cdn.v1.ShieldingService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ShieldingServiceClient;
    service: typeof ShieldingServiceService;
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
