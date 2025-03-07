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
    ConnectorSpec,
    UpdateConnectorSpec,
    Connector,
} from '../../../../../yandex/cloud/mdb/kafka/v1/connector';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';

export interface GetConnectorRequest {
    /**
     * ID of the Apache Kafka® cluster the connector belongs to.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Apache Kafka® connector to return information about.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
}

export interface ListConnectorsRequest {
    /**
     * ID of the Apache Kafka® cluster to list connectors in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListConnectorsResponse.next_page_token] that can be used to get the next page of results in the subsequent [ConnectorService.List] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListConnectorsResponse.next_page_token] returned by the previous [ConnectorService.List] request.
     */
    pageToken: string;
}

export interface ListConnectorsResponse {
    /** List of Apache Kafka® Connectors. */
    connectors: Connector[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListConnectorsRequest.page_size], use the [next_page_token] as the value for the [ListConnectorsRequest.page_token] in the subsequent [ConnectorService.List] request to iterate through multiple pages of results.
     */
    nextPageToken: string;
}

export interface CreateConnectorRequest {
    /**
     * ID of the Apache Kafka® cluster to create the connector in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the connector to create. */
    connectorSpec?: ConnectorSpec;
}

export interface CreateConnectorMetadata {
    /** ID of the Apache Kafka® cluster the connector is being created in. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is being created. */
    connectorName: string;
}

export interface UpdateConnectorRequest {
    /**
     * ID of the Apache Kafka® cluster to update the connector in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the connector to update.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
    /** Field mask that specifies which settings of the connector should be updated. */
    updateMask?: FieldMask;
    /** Configuration of the connector to update. */
    connectorSpec?: UpdateConnectorSpec;
}

export interface UpdateConnectorMetadata {
    /** ID of the Apache Kafka® cluster the connector is being updated in. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is being updated. */
    connectorName: string;
}

export interface DeleteConnectorRequest {
    /**
     * ID of the Apache Kafka® cluster to delete the connector from.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the connector to delete.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
}

export interface DeleteConnectorMetadata {
    /** ID of the Apache Kafka® cluster the connector is being deleted from. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is being deleted. */
    connectorName: string;
}

export interface ResumeConnectorRequest {
    /**
     * ID of the Apache Kafka® cluster to resume the connector in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Apache Kafka® connector to resume.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
}

export interface ResumeConnectorMetadata {
    /** ID of the Apache Kafka® cluster the connector is being resumed in. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is beign resumed. */
    connectorName: string;
}

export interface PauseConnectorRequest {
    /**
     * ID of the Apache Kafka® cluster to pause the connector in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Apache Kafka® connector to pause.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
}

export interface PauseConnectorMetadata {
    /** ID of the Apache Kafka® cluster the connector is being paused in. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is being paused. */
    connectorName: string;
}

const baseGetConnectorRequest: object = { clusterId: '', connectorName: '' };

export const GetConnectorRequest = {
    encode(message: GetConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetConnectorRequest {
        const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: GetConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetConnectorRequest>, I>>(
        object: I,
    ): GetConnectorRequest {
        const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

const baseListConnectorsRequest: object = { clusterId: '', pageSize: 0, pageToken: '' };

export const ListConnectorsRequest = {
    encode(message: ListConnectorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectorsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConnectorsRequest } as ListConnectorsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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

    fromJSON(object: any): ListConnectorsRequest {
        const message = { ...baseListConnectorsRequest } as ListConnectorsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListConnectorsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConnectorsRequest>, I>>(
        object: I,
    ): ListConnectorsRequest {
        const message = { ...baseListConnectorsRequest } as ListConnectorsRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListConnectorsResponse: object = { nextPageToken: '' };

export const ListConnectorsResponse = {
    encode(message: ListConnectorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.connectors) {
            Connector.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectorsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConnectorsResponse } as ListConnectorsResponse;
        message.connectors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectors.push(Connector.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListConnectorsResponse {
        const message = { ...baseListConnectorsResponse } as ListConnectorsResponse;
        message.connectors = (object.connectors ?? []).map((e: any) => Connector.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListConnectorsResponse): unknown {
        const obj: any = {};
        if (message.connectors) {
            obj.connectors = message.connectors.map((e) => (e ? Connector.toJSON(e) : undefined));
        } else {
            obj.connectors = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConnectorsResponse>, I>>(
        object: I,
    ): ListConnectorsResponse {
        const message = { ...baseListConnectorsResponse } as ListConnectorsResponse;
        message.connectors = object.connectors?.map((e) => Connector.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateConnectorRequest: object = { clusterId: '' };

export const CreateConnectorRequest = {
    encode(message: CreateConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorSpec !== undefined) {
            ConnectorSpec.encode(message.connectorSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateConnectorRequest } as CreateConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorSpec = ConnectorSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateConnectorRequest {
        const message = { ...baseCreateConnectorRequest } as CreateConnectorRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorSpec =
            object.connectorSpec !== undefined && object.connectorSpec !== null
                ? ConnectorSpec.fromJSON(object.connectorSpec)
                : undefined;
        return message;
    },

    toJSON(message: CreateConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorSpec !== undefined &&
            (obj.connectorSpec = message.connectorSpec
                ? ConnectorSpec.toJSON(message.connectorSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConnectorRequest>, I>>(
        object: I,
    ): CreateConnectorRequest {
        const message = { ...baseCreateConnectorRequest } as CreateConnectorRequest;
        message.clusterId = object.clusterId ?? '';
        message.connectorSpec =
            object.connectorSpec !== undefined && object.connectorSpec !== null
                ? ConnectorSpec.fromPartial(object.connectorSpec)
                : undefined;
        return message;
    },
};

const baseCreateConnectorMetadata: object = { clusterId: '', connectorName: '' };

export const CreateConnectorMetadata = {
    encode(message: CreateConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectorMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateConnectorMetadata } as CreateConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateConnectorMetadata {
        const message = { ...baseCreateConnectorMetadata } as CreateConnectorMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: CreateConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConnectorMetadata>, I>>(
        object: I,
    ): CreateConnectorMetadata {
        const message = { ...baseCreateConnectorMetadata } as CreateConnectorMetadata;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

const baseUpdateConnectorRequest: object = { clusterId: '', connectorName: '' };

export const UpdateConnectorRequest = {
    encode(message: UpdateConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.connectorSpec !== undefined) {
            UpdateConnectorSpec.encode(message.connectorSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateConnectorRequest } as UpdateConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connectorSpec = UpdateConnectorSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateConnectorRequest {
        const message = { ...baseUpdateConnectorRequest } as UpdateConnectorRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.connectorSpec =
            object.connectorSpec !== undefined && object.connectorSpec !== null
                ? UpdateConnectorSpec.fromJSON(object.connectorSpec)
                : undefined;
        return message;
    },

    toJSON(message: UpdateConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.connectorSpec !== undefined &&
            (obj.connectorSpec = message.connectorSpec
                ? UpdateConnectorSpec.toJSON(message.connectorSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorRequest>, I>>(
        object: I,
    ): UpdateConnectorRequest {
        const message = { ...baseUpdateConnectorRequest } as UpdateConnectorRequest;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.connectorSpec =
            object.connectorSpec !== undefined && object.connectorSpec !== null
                ? UpdateConnectorSpec.fromPartial(object.connectorSpec)
                : undefined;
        return message;
    },
};

const baseUpdateConnectorMetadata: object = { clusterId: '', connectorName: '' };

export const UpdateConnectorMetadata = {
    encode(message: UpdateConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateConnectorMetadata } as UpdateConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateConnectorMetadata {
        const message = { ...baseUpdateConnectorMetadata } as UpdateConnectorMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: UpdateConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorMetadata>, I>>(
        object: I,
    ): UpdateConnectorMetadata {
        const message = { ...baseUpdateConnectorMetadata } as UpdateConnectorMetadata;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

const baseDeleteConnectorRequest: object = { clusterId: '', connectorName: '' };

export const DeleteConnectorRequest = {
    encode(message: DeleteConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteConnectorRequest } as DeleteConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteConnectorRequest {
        const message = { ...baseDeleteConnectorRequest } as DeleteConnectorRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: DeleteConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteConnectorRequest>, I>>(
        object: I,
    ): DeleteConnectorRequest {
        const message = { ...baseDeleteConnectorRequest } as DeleteConnectorRequest;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

const baseDeleteConnectorMetadata: object = { clusterId: '', connectorName: '' };

export const DeleteConnectorMetadata = {
    encode(message: DeleteConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnectorMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteConnectorMetadata } as DeleteConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteConnectorMetadata {
        const message = { ...baseDeleteConnectorMetadata } as DeleteConnectorMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: DeleteConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteConnectorMetadata>, I>>(
        object: I,
    ): DeleteConnectorMetadata {
        const message = { ...baseDeleteConnectorMetadata } as DeleteConnectorMetadata;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

const baseResumeConnectorRequest: object = { clusterId: '', connectorName: '' };

export const ResumeConnectorRequest = {
    encode(message: ResumeConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResumeConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResumeConnectorRequest } as ResumeConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResumeConnectorRequest {
        const message = { ...baseResumeConnectorRequest } as ResumeConnectorRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: ResumeConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResumeConnectorRequest>, I>>(
        object: I,
    ): ResumeConnectorRequest {
        const message = { ...baseResumeConnectorRequest } as ResumeConnectorRequest;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

const baseResumeConnectorMetadata: object = { clusterId: '', connectorName: '' };

export const ResumeConnectorMetadata = {
    encode(message: ResumeConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResumeConnectorMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResumeConnectorMetadata } as ResumeConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResumeConnectorMetadata {
        const message = { ...baseResumeConnectorMetadata } as ResumeConnectorMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: ResumeConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResumeConnectorMetadata>, I>>(
        object: I,
    ): ResumeConnectorMetadata {
        const message = { ...baseResumeConnectorMetadata } as ResumeConnectorMetadata;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

const basePauseConnectorRequest: object = { clusterId: '', connectorName: '' };

export const PauseConnectorRequest = {
    encode(message: PauseConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PauseConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePauseConnectorRequest } as PauseConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PauseConnectorRequest {
        const message = { ...basePauseConnectorRequest } as PauseConnectorRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: PauseConnectorRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PauseConnectorRequest>, I>>(
        object: I,
    ): PauseConnectorRequest {
        const message = { ...basePauseConnectorRequest } as PauseConnectorRequest;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

const basePauseConnectorMetadata: object = { clusterId: '', connectorName: '' };

export const PauseConnectorMetadata = {
    encode(message: PauseConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== '') {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PauseConnectorMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePauseConnectorMetadata } as PauseConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PauseConnectorMetadata {
        const message = { ...basePauseConnectorMetadata } as PauseConnectorMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : '';
        return message;
    },

    toJSON(message: PauseConnectorMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined && (obj.connectorName = message.connectorName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PauseConnectorMetadata>, I>>(
        object: I,
    ): PauseConnectorMetadata {
        const message = { ...basePauseConnectorMetadata } as PauseConnectorMetadata;
        message.clusterId = object.clusterId ?? '';
        message.connectorName = object.connectorName ?? '';
        return message;
    },
};

/** A set of methods for managing Apache Kafka® connectors. */
export const ConnectorServiceService = {
    /** Returns information about an Apache Kafka® connector. */
    get: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetConnectorRequest) =>
            Buffer.from(GetConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetConnectorRequest.decode(value),
        responseSerialize: (value: Connector) => Buffer.from(Connector.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Connector.decode(value),
    },
    /** Retrieves the list of Apache Kafka® connectors in a cluster. */
    list: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListConnectorsRequest) =>
            Buffer.from(ListConnectorsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListConnectorsRequest.decode(value),
        responseSerialize: (value: ListConnectorsResponse) =>
            Buffer.from(ListConnectorsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListConnectorsResponse.decode(value),
    },
    /** Creates a new Apache Kafka® connector in a cluster. */
    create: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateConnectorRequest) =>
            Buffer.from(CreateConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates an Apache Kafka® connector. */
    update: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateConnectorRequest) =>
            Buffer.from(UpdateConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes an Apache Kafka® connector. */
    delete: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteConnectorRequest) =>
            Buffer.from(DeleteConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Resumes an Apache Kafka® connector. */
    resume: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResumeConnectorRequest) =>
            Buffer.from(ResumeConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResumeConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Pauses an Apache Kafka® connector. */
    pause: {
        path: '/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PauseConnectorRequest) =>
            Buffer.from(PauseConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PauseConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ConnectorServiceServer extends UntypedServiceImplementation {
    /** Returns information about an Apache Kafka® connector. */
    get: handleUnaryCall<GetConnectorRequest, Connector>;
    /** Retrieves the list of Apache Kafka® connectors in a cluster. */
    list: handleUnaryCall<ListConnectorsRequest, ListConnectorsResponse>;
    /** Creates a new Apache Kafka® connector in a cluster. */
    create: handleUnaryCall<CreateConnectorRequest, Operation>;
    /** Updates an Apache Kafka® connector. */
    update: handleUnaryCall<UpdateConnectorRequest, Operation>;
    /** Deletes an Apache Kafka® connector. */
    delete: handleUnaryCall<DeleteConnectorRequest, Operation>;
    /** Resumes an Apache Kafka® connector. */
    resume: handleUnaryCall<ResumeConnectorRequest, Operation>;
    /** Pauses an Apache Kafka® connector. */
    pause: handleUnaryCall<PauseConnectorRequest, Operation>;
}

export interface ConnectorServiceClient extends Client {
    /** Returns information about an Apache Kafka® connector. */
    get(
        request: GetConnectorRequest,
        callback: (error: ServiceError | null, response: Connector) => void,
    ): ClientUnaryCall;
    get(
        request: GetConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Connector) => void,
    ): ClientUnaryCall;
    get(
        request: GetConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Connector) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Apache Kafka® connectors in a cluster. */
    list(
        request: ListConnectorsRequest,
        callback: (error: ServiceError | null, response: ListConnectorsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListConnectorsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListConnectorsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListConnectorsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListConnectorsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a new Apache Kafka® connector in a cluster. */
    create(
        request: CreateConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates an Apache Kafka® connector. */
    update(
        request: UpdateConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes an Apache Kafka® connector. */
    delete(
        request: DeleteConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Resumes an Apache Kafka® connector. */
    resume(
        request: ResumeConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    resume(
        request: ResumeConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    resume(
        request: ResumeConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Pauses an Apache Kafka® connector. */
    pause(
        request: PauseConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    pause(
        request: PauseConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    pause(
        request: PauseConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ConnectorServiceClient = makeGenericClientConstructor(
    ConnectorServiceService,
    'yandex.cloud.mdb.kafka.v1.ConnectorService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ConnectorServiceClient;
    service: typeof ConnectorServiceService;
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
