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
import { Source, Connector } from '../../../../../yandex/cloud/serverless/eventrouter/v1/connector';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.serverless.eventrouter.v1';

export interface GetConnectorRequest {
    /** ID of the connector to return. */
    connectorId: string;
}

export interface ListConnectorsRequest {
    /** ID of the bus to list connectors in. */
    busId: string | undefined;
    /** ID of the folder to list connectors in. */
    folderId: string | undefined;
    /** The maximum number of results per response. */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * `next_page_token` returned by a previous list request.
     */
    pageToken: string;
    /**
     * Supported fields for filter:
     *   name
     *   created_at
     */
    filter: string;
}

export interface ListConnectorsResponse {
    /** List of connectors. */
    connectors: Connector[];
    /** Token for getting the next page of the list of results. */
    nextPageToken: string;
}

export interface CreateConnectorRequest {
    /** ID of the bus to create a connector in. */
    busId: string;
    /** Name of the connector. */
    name: string;
    /** Description of the connector. */
    description: string;
    /** Labels for the connector. */
    labels: { [key: string]: string };
    /** Source of the connector. */
    source?: Source;
    /** Flag that disallow deletion of the connector. */
    deletionProtection: boolean;
}

export interface CreateConnectorRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateConnectorMetadata {
    /** ID of the connector that is being created. */
    connectorId: string;
    /** ID of the bus that the connector is created in. */
    busId: string;
}

export interface UpdateConnectorRequest {
    /** ID of the connector to update. */
    connectorId: string;
    /** Field mask that specifies which fields of the connector are going to be updated. */
    updateMask?: FieldMask;
    /** New name of the connector. */
    name: string;
    /** New description of the connector. */
    description: string;
    /** New labels of the connector. */
    labels: { [key: string]: string };
    /** New flag that disallow deletion of the connector. */
    deletionProtection: boolean;
}

export interface UpdateConnectorRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateConnectorMetadata {
    /** ID of the connector that is being updated. */
    connectorId: string;
}

export interface DeleteConnectorRequest {
    /** ID of the connector to delete. */
    connectorId: string;
}

export interface DeleteConnectorMetadata {
    /** ID of the connector that is being deleted. */
    connectorId: string;
}

export interface ListConnectorOperationsRequest {
    /** ID of the connector to list operations for. */
    connectorId: string;
    /** The maximum number of results per response. */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * `next_page_token` returned by a previous list request.
     */
    pageToken: string;
    /**
     * Supported attributes for filter:
     *   description
     *   created_at
     *   modified_at
     *   created_by
     *   done
     */
    filter: string;
}

export interface ListConnectorOperationsResponse {
    /** List of operations for the specified connector. */
    operations: Operation[];
    /** Token for getting the next page of the list of results. */
    nextPageToken: string;
}

export interface StartConnectorRequest {
    /** ID of the connector to start. */
    connectorId: string;
}

export interface StartConnectorMetadata {
    /** ID of the connector that is being started. */
    connectorId: string;
}

export interface StopConnectorRequest {
    /** ID of the connector to stop. */
    connectorId: string;
}

export interface StopConnectorMetadata {
    /** ID of the connector that is being stopped. */
    connectorId: string;
}

const baseGetConnectorRequest: object = { connectorId: '' };

export const GetConnectorRequest = {
    encode(message: GetConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
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
                    message.connectorId = reader.string();
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
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        return message;
    },

    toJSON(message: GetConnectorRequest): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetConnectorRequest>, I>>(
        object: I,
    ): GetConnectorRequest {
        const message = { ...baseGetConnectorRequest } as GetConnectorRequest;
        message.connectorId = object.connectorId ?? '';
        return message;
    },
};

const baseListConnectorsRequest: object = { pageSize: 0, pageToken: '', filter: '' };

export const ListConnectorsRequest = {
    encode(message: ListConnectorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== undefined) {
            writer.uint32(10).string(message.busId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
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
                    message.busId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
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
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
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

    toJSON(message: ListConnectorsRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConnectorsRequest>, I>>(
        object: I,
    ): ListConnectorsRequest {
        const message = { ...baseListConnectorsRequest } as ListConnectorsRequest;
        message.busId = object.busId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
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

const baseCreateConnectorRequest: object = {
    busId: '',
    name: '',
    description: '',
    deletionProtection: false,
};

export const CreateConnectorRequest = {
    encode(message: CreateConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.busId !== '') {
            writer.uint32(10).string(message.busId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateConnectorRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.source !== undefined) {
            Source.encode(message.source, writer.uint32(42).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateConnectorRequest } as CreateConnectorRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.busId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateConnectorRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.source = Source.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.deletionProtection = reader.bool();
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
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.source =
            object.source !== undefined && object.source !== null
                ? Source.fromJSON(object.source)
                : undefined;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: CreateConnectorRequest): unknown {
        const obj: any = {};
        message.busId !== undefined && (obj.busId = message.busId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.source !== undefined &&
            (obj.source = message.source ? Source.toJSON(message.source) : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConnectorRequest>, I>>(
        object: I,
    ): CreateConnectorRequest {
        const message = { ...baseCreateConnectorRequest } as CreateConnectorRequest;
        message.busId = object.busId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.source =
            object.source !== undefined && object.source !== null
                ? Source.fromPartial(object.source)
                : undefined;
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

const baseCreateConnectorRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateConnectorRequest_LabelsEntry = {
    encode(
        message: CreateConnectorRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectorRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateConnectorRequest_LabelsEntry,
        } as CreateConnectorRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateConnectorRequest_LabelsEntry {
        const message = {
            ...baseCreateConnectorRequest_LabelsEntry,
        } as CreateConnectorRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateConnectorRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConnectorRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateConnectorRequest_LabelsEntry {
        const message = {
            ...baseCreateConnectorRequest_LabelsEntry,
        } as CreateConnectorRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateConnectorMetadata: object = { connectorId: '', busId: '' };

export const CreateConnectorMetadata = {
    encode(message: CreateConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
        }
        if (message.busId !== '') {
            writer.uint32(18).string(message.busId);
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
                    message.connectorId = reader.string();
                    break;
                case 2:
                    message.busId = reader.string();
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
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
        return message;
    },

    toJSON(message: CreateConnectorMetadata): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        message.busId !== undefined && (obj.busId = message.busId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConnectorMetadata>, I>>(
        object: I,
    ): CreateConnectorMetadata {
        const message = { ...baseCreateConnectorMetadata } as CreateConnectorMetadata;
        message.connectorId = object.connectorId ?? '';
        message.busId = object.busId ?? '';
        return message;
    },
};

const baseUpdateConnectorRequest: object = {
    connectorId: '',
    name: '',
    description: '',
    deletionProtection: false,
};

export const UpdateConnectorRequest = {
    encode(message: UpdateConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
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
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateConnectorRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateConnectorRequest } as UpdateConnectorRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectorId = reader.string();
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
                case 5:
                    const entry5 = UpdateConnectorRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.deletionProtection = reader.bool();
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
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: UpdateConnectorRequest): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorRequest>, I>>(
        object: I,
    ): UpdateConnectorRequest {
        const message = { ...baseUpdateConnectorRequest } as UpdateConnectorRequest;
        message.connectorId = object.connectorId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

const baseUpdateConnectorRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateConnectorRequest_LabelsEntry = {
    encode(
        message: UpdateConnectorRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateConnectorRequest_LabelsEntry,
        } as UpdateConnectorRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateConnectorRequest_LabelsEntry {
        const message = {
            ...baseUpdateConnectorRequest_LabelsEntry,
        } as UpdateConnectorRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateConnectorRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateConnectorRequest_LabelsEntry {
        const message = {
            ...baseUpdateConnectorRequest_LabelsEntry,
        } as UpdateConnectorRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateConnectorMetadata: object = { connectorId: '' };

export const UpdateConnectorMetadata = {
    encode(message: UpdateConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
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
                    message.connectorId = reader.string();
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
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        return message;
    },

    toJSON(message: UpdateConnectorMetadata): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorMetadata>, I>>(
        object: I,
    ): UpdateConnectorMetadata {
        const message = { ...baseUpdateConnectorMetadata } as UpdateConnectorMetadata;
        message.connectorId = object.connectorId ?? '';
        return message;
    },
};

const baseDeleteConnectorRequest: object = { connectorId: '' };

export const DeleteConnectorRequest = {
    encode(message: DeleteConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
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
                    message.connectorId = reader.string();
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
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        return message;
    },

    toJSON(message: DeleteConnectorRequest): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteConnectorRequest>, I>>(
        object: I,
    ): DeleteConnectorRequest {
        const message = { ...baseDeleteConnectorRequest } as DeleteConnectorRequest;
        message.connectorId = object.connectorId ?? '';
        return message;
    },
};

const baseDeleteConnectorMetadata: object = { connectorId: '' };

export const DeleteConnectorMetadata = {
    encode(message: DeleteConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
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
                    message.connectorId = reader.string();
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
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        return message;
    },

    toJSON(message: DeleteConnectorMetadata): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteConnectorMetadata>, I>>(
        object: I,
    ): DeleteConnectorMetadata {
        const message = { ...baseDeleteConnectorMetadata } as DeleteConnectorMetadata;
        message.connectorId = object.connectorId ?? '';
        return message;
    },
};

const baseListConnectorOperationsRequest: object = {
    connectorId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListConnectorOperationsRequest = {
    encode(
        message: ListConnectorOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectorOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConnectorOperationsRequest } as ListConnectorOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectorId = reader.string();
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

    fromJSON(object: any): ListConnectorOperationsRequest {
        const message = { ...baseListConnectorOperationsRequest } as ListConnectorOperationsRequest;
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
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

    toJSON(message: ListConnectorOperationsRequest): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConnectorOperationsRequest>, I>>(
        object: I,
    ): ListConnectorOperationsRequest {
        const message = { ...baseListConnectorOperationsRequest } as ListConnectorOperationsRequest;
        message.connectorId = object.connectorId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListConnectorOperationsResponse: object = { nextPageToken: '' };

export const ListConnectorOperationsResponse = {
    encode(
        message: ListConnectorOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectorOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListConnectorOperationsResponse,
        } as ListConnectorOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListConnectorOperationsResponse {
        const message = {
            ...baseListConnectorOperationsResponse,
        } as ListConnectorOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListConnectorOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConnectorOperationsResponse>, I>>(
        object: I,
    ): ListConnectorOperationsResponse {
        const message = {
            ...baseListConnectorOperationsResponse,
        } as ListConnectorOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseStartConnectorRequest: object = { connectorId: '' };

export const StartConnectorRequest = {
    encode(message: StartConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartConnectorRequest } as StartConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectorId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartConnectorRequest {
        const message = { ...baseStartConnectorRequest } as StartConnectorRequest;
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        return message;
    },

    toJSON(message: StartConnectorRequest): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartConnectorRequest>, I>>(
        object: I,
    ): StartConnectorRequest {
        const message = { ...baseStartConnectorRequest } as StartConnectorRequest;
        message.connectorId = object.connectorId ?? '';
        return message;
    },
};

const baseStartConnectorMetadata: object = { connectorId: '' };

export const StartConnectorMetadata = {
    encode(message: StartConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartConnectorMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartConnectorMetadata } as StartConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectorId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartConnectorMetadata {
        const message = { ...baseStartConnectorMetadata } as StartConnectorMetadata;
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        return message;
    },

    toJSON(message: StartConnectorMetadata): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartConnectorMetadata>, I>>(
        object: I,
    ): StartConnectorMetadata {
        const message = { ...baseStartConnectorMetadata } as StartConnectorMetadata;
        message.connectorId = object.connectorId ?? '';
        return message;
    },
};

const baseStopConnectorRequest: object = { connectorId: '' };

export const StopConnectorRequest = {
    encode(message: StopConnectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopConnectorRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopConnectorRequest } as StopConnectorRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectorId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopConnectorRequest {
        const message = { ...baseStopConnectorRequest } as StopConnectorRequest;
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        return message;
    },

    toJSON(message: StopConnectorRequest): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopConnectorRequest>, I>>(
        object: I,
    ): StopConnectorRequest {
        const message = { ...baseStopConnectorRequest } as StopConnectorRequest;
        message.connectorId = object.connectorId ?? '';
        return message;
    },
};

const baseStopConnectorMetadata: object = { connectorId: '' };

export const StopConnectorMetadata = {
    encode(message: StopConnectorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectorId !== '') {
            writer.uint32(10).string(message.connectorId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopConnectorMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopConnectorMetadata } as StopConnectorMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectorId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopConnectorMetadata {
        const message = { ...baseStopConnectorMetadata } as StopConnectorMetadata;
        message.connectorId =
            object.connectorId !== undefined && object.connectorId !== null
                ? String(object.connectorId)
                : '';
        return message;
    },

    toJSON(message: StopConnectorMetadata): unknown {
        const obj: any = {};
        message.connectorId !== undefined && (obj.connectorId = message.connectorId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopConnectorMetadata>, I>>(
        object: I,
    ): StopConnectorMetadata {
        const message = { ...baseStopConnectorMetadata } as StopConnectorMetadata;
        message.connectorId = object.connectorId ?? '';
        return message;
    },
};

/** A set of methods for managing connectors for serverless eventrouter. */
export const ConnectorServiceService = {
    /**
     * Returns the specified bus.
     * To get the list of all available connectors, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetConnectorRequest) =>
            Buffer.from(GetConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetConnectorRequest.decode(value),
        responseSerialize: (value: Connector) => Buffer.from(Connector.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Connector.decode(value),
    },
    /** Retrieves the list of connectors in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListConnectorsRequest) =>
            Buffer.from(ListConnectorsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListConnectorsRequest.decode(value),
        responseSerialize: (value: ListConnectorsResponse) =>
            Buffer.from(ListConnectorsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListConnectorsResponse.decode(value),
    },
    /** Creates a connector in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateConnectorRequest) =>
            Buffer.from(CreateConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified connector. */
    update: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateConnectorRequest) =>
            Buffer.from(UpdateConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified connector. */
    delete: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteConnectorRequest) =>
            Buffer.from(DeleteConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified connector. */
    start: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartConnectorRequest) =>
            Buffer.from(StartConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops the specified connector. */
    stop: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopConnectorRequest) =>
            Buffer.from(StopConnectorRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopConnectorRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists existing access bindings for the specified bus. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the connector. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified connector. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified connector. */
    listOperations: {
        path: '/yandex.cloud.serverless.eventrouter.v1.ConnectorService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListConnectorOperationsRequest) =>
            Buffer.from(ListConnectorOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListConnectorOperationsRequest.decode(value),
        responseSerialize: (value: ListConnectorOperationsResponse) =>
            Buffer.from(ListConnectorOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListConnectorOperationsResponse.decode(value),
    },
} as const;

export interface ConnectorServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified bus.
     * To get the list of all available connectors, make a [List] request.
     */
    get: handleUnaryCall<GetConnectorRequest, Connector>;
    /** Retrieves the list of connectors in the specified folder. */
    list: handleUnaryCall<ListConnectorsRequest, ListConnectorsResponse>;
    /** Creates a connector in the specified folder. */
    create: handleUnaryCall<CreateConnectorRequest, Operation>;
    /** Updates the specified connector. */
    update: handleUnaryCall<UpdateConnectorRequest, Operation>;
    /** Deletes the specified connector. */
    delete: handleUnaryCall<DeleteConnectorRequest, Operation>;
    /** Starts the specified connector. */
    start: handleUnaryCall<StartConnectorRequest, Operation>;
    /** Stops the specified connector. */
    stop: handleUnaryCall<StopConnectorRequest, Operation>;
    /** Lists existing access bindings for the specified bus. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the connector. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified connector. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Lists operations for the specified connector. */
    listOperations: handleUnaryCall<
        ListConnectorOperationsRequest,
        ListConnectorOperationsResponse
    >;
}

export interface ConnectorServiceClient extends Client {
    /**
     * Returns the specified bus.
     * To get the list of all available connectors, make a [List] request.
     */
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
    /** Retrieves the list of connectors in the specified folder. */
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
    /** Creates a connector in the specified folder. */
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
    /** Updates the specified connector. */
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
    /** Deletes the specified connector. */
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
    /** Starts the specified connector. */
    start(
        request: StartConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Stops the specified connector. */
    stop(
        request: StopConnectorRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopConnectorRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopConnectorRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified bus. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    /** Sets access bindings for the connector. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates access bindings for the specified connector. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified connector. */
    listOperations(
        request: ListConnectorOperationsRequest,
        callback: (error: ServiceError | null, response: ListConnectorOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListConnectorOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListConnectorOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListConnectorOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListConnectorOperationsResponse) => void,
    ): ClientUnaryCall;
}

export const ConnectorServiceClient = makeGenericClientConstructor(
    ConnectorServiceService,
    'yandex.cloud.serverless.eventrouter.v1.ConnectorService',
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
