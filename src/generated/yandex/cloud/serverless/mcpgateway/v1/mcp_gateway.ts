/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    LogLevel_Level,
    logLevel_LevelFromJSON,
    logLevel_LevelToJSON,
} from '../../../logging/v1/log_entry';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.serverless.mcpgateway.v1';

export enum HttpMethod {
    HTTP_METHOD_UNSPECIFIED = 0,
    /** OPTIONS - OPTIONS HTTP method. */
    OPTIONS = 1,
    /** GET - GET HTTP method. */
    GET = 2,
    /** HEAD - HEAD HTTP method. */
    HEAD = 3,
    /** POST - POST HTTP method. */
    POST = 4,
    /** PUT - PUT HTTP method. */
    PUT = 5,
    /** PATCH - PATCH HTTP method. */
    PATCH = 6,
    /** DELETE - DELETE HTTP method. */
    DELETE = 7,
    /** TRACE - TRACE HTTP method. */
    TRACE = 8,
    /** CONNECT - CONNECT HTTP method. */
    CONNECT = 9,
    UNRECOGNIZED = -1,
}

export function httpMethodFromJSON(object: any): HttpMethod {
    switch (object) {
        case 0:
        case 'HTTP_METHOD_UNSPECIFIED':
            return HttpMethod.HTTP_METHOD_UNSPECIFIED;
        case 1:
        case 'OPTIONS':
            return HttpMethod.OPTIONS;
        case 2:
        case 'GET':
            return HttpMethod.GET;
        case 3:
        case 'HEAD':
            return HttpMethod.HEAD;
        case 4:
        case 'POST':
            return HttpMethod.POST;
        case 5:
        case 'PUT':
            return HttpMethod.PUT;
        case 6:
        case 'PATCH':
            return HttpMethod.PATCH;
        case 7:
        case 'DELETE':
            return HttpMethod.DELETE;
        case 8:
        case 'TRACE':
            return HttpMethod.TRACE;
        case 9:
        case 'CONNECT':
            return HttpMethod.CONNECT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HttpMethod.UNRECOGNIZED;
    }
}

export function httpMethodToJSON(object: HttpMethod): string {
    switch (object) {
        case HttpMethod.HTTP_METHOD_UNSPECIFIED:
            return 'HTTP_METHOD_UNSPECIFIED';
        case HttpMethod.OPTIONS:
            return 'OPTIONS';
        case HttpMethod.GET:
            return 'GET';
        case HttpMethod.HEAD:
            return 'HEAD';
        case HttpMethod.POST:
            return 'POST';
        case HttpMethod.PUT:
            return 'PUT';
        case HttpMethod.PATCH:
            return 'PATCH';
        case HttpMethod.DELETE:
            return 'DELETE';
        case HttpMethod.TRACE:
            return 'TRACE';
        case HttpMethod.CONNECT:
            return 'CONNECT';
        default:
            return 'UNKNOWN';
    }
}

export interface McpGateway {
    /** ID of the MCP Gateway. Generated at creation time. */
    id: string;
    /** ID of the folder that the MCP Gateway belongs to. */
    folderId: string;
    /** Tools of the MCP Gateway. */
    tools: McpTool[];
    /** Creation timestamp for the MCP Gateway. */
    createdAt?: Date;
    /** Name of the MCP Gateway. */
    name: string;
    /** Description of the MCP Gateway. */
    description: string;
    /** MCP Gateway labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Status of the MCP Gateway. */
    status: McpGateway_Status;
    /** Base domain of the MCP Gateway. */
    baseDomain: string;
    /** Log options for the MCP Gateway. */
    logOptions?: LogOptions;
    /** ID of the Service Account which will be used for resource access in MCP Gateway call. */
    serviceAccountId: string;
    /** ID of the VPC network MCP Gateway will be executed in, in order to access private resources. */
    networkId: string;
    /** ID of the cloud that the MCP Gateway belongs to. */
    cloudId: string;
    /** Publicity of the MCP Gateway. Public MCP Gateway can be accessed by anybody. */
    public: boolean;
}

export enum McpGateway_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - MCP Gateway is being created. */
    CREATING = 1,
    /** ACTIVE - MCP Gateway is ready to use. */
    ACTIVE = 2,
    /** UPDATING - MCP Gateway is being updated. */
    UPDATING = 3,
    /** DELETING - MCP Gateway is being deleted. */
    DELETING = 4,
    /** ERROR - MCP Gateway is in an error state. The only allowed action is delete. */
    ERROR = 5,
    UNRECOGNIZED = -1,
}

export function mcpGateway_StatusFromJSON(object: any): McpGateway_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return McpGateway_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return McpGateway_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return McpGateway_Status.ACTIVE;
        case 3:
        case 'UPDATING':
            return McpGateway_Status.UPDATING;
        case 4:
        case 'DELETING':
            return McpGateway_Status.DELETING;
        case 5:
        case 'ERROR':
            return McpGateway_Status.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return McpGateway_Status.UNRECOGNIZED;
    }
}

export function mcpGateway_StatusToJSON(object: McpGateway_Status): string {
    switch (object) {
        case McpGateway_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case McpGateway_Status.CREATING:
            return 'CREATING';
        case McpGateway_Status.ACTIVE:
            return 'ACTIVE';
        case McpGateway_Status.UPDATING:
            return 'UPDATING';
        case McpGateway_Status.DELETING:
            return 'DELETING';
        case McpGateway_Status.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

export interface McpGateway_LabelsEntry {
    key: string;
    value: string;
}

export interface McpGatewayPreview {
    /** ID of the MCP Gateway. Generated at creation time. */
    id: string;
    /** ID of the folder that the MCP Gateway belongs to. */
    folderId: string;
    /** Creation timestamp for the MCP Gateway. */
    createdAt?: Date;
    /** Name of the MCP Gateway. */
    name: string;
    /** Description of the MCP Gateway. */
    description: string;
    /** MCP Gateway labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Status of the MCP Gateway. */
    status: McpGateway_Status;
    /** Base domain of the MCP Gateway. */
    baseDomain: string;
    /** Log options for the MCP Gateway. */
    logOptions?: LogOptions;
    /** ID of the VPC network MCP Gateway will be executed in, in order to access private resources. */
    networkId: string;
    /** ID of the Service Account which will be used for resource access in MCP Gateway call. */
    serviceAccountId: string;
    /** Publicity of the MCP Gateway. Public MCP Gateway can be accessed by anybody. */
    public: boolean;
}

export interface McpGatewayPreview_LabelsEntry {
    key: string;
    value: string;
}

export interface LogOptions {
    /** Is logging from MCP Gateway disabled. */
    disabled: boolean;
    /** ID of the logging group which should be used for MCP Gateway logs. */
    logGroupId: string | undefined;
    /** ID of the folder which default logging group should be used for MCP Gateway logs. */
    folderId: string | undefined;
    /**
     * Minimum logs level.
     *
     * See [LogLevel.Level] for details.
     */
    minLevel: LogLevel_Level;
}

export interface McpTool {
    /** Name of the tool. */
    name: string;
    /** Description of the tool. */
    description: string;
    /** JSON Schema describing tool input. */
    inputJsonSchema: string;
    /** Action to perform when this tool is invoked. */
    action?: McpToolAction;
}

export interface McpToolAction {
    /** Call Serverless Function. */
    functionCall?: FunctionCall | undefined;
    /** Call Serverless Container. */
    containerCall?: ContainerCall | undefined;
    /** Send HTTP request. */
    httpCall?: HttpCall | undefined;
    /** Call MCP Gateway. */
    mcpCall?: McpCall | undefined;
    /** Call gRPC endpoint. Server must support gRPC reflection. */
    grpcCall?: GrpcCall | undefined;
    /** Start Workflow. */
    startWorkflow?: StartWorkflow | undefined;
}

export interface FunctionCall {
    /** ID of serverless function to call. */
    functionId: string;
    /** Tag of serverless function. If empty, $latest tag will be used. */
    tag: string;
}

export interface ContainerCall {
    /** ID of serverless container to call. */
    containerId: string;
    /** Relative request path inside the container. */
    path: string;
    /** HTTP method to use for the request. */
    method: HttpMethod;
    /** Request body to send to the container. */
    body: string;
    /** HTTP headers to include in the request. */
    headers: { [key: string]: string };
    /** Query string parameters to include in the request. */
    query: { [key: string]: string };
    /** Policy that defines which headers from the incoming request should be forwarded */
    forwardHeaders?: ForwardHeadersPolicy;
}

export interface ContainerCall_HeadersEntry {
    key: string;
    value: string;
}

export interface ContainerCall_QueryEntry {
    key: string;
    value: string;
}

export interface HttpCall {
    /** Absolute URL to send the request to. (required) */
    url: string;
    /** HTTP method to use. */
    method: HttpMethod;
    /** Request body payload. */
    body: string;
    /** HTTP headers to include. */
    headers: { [key: string]: string };
    /** Query string parameters to include. */
    query: { [key: string]: string };
    /** Use MCP Gateway service account credentials for the request. */
    useServiceAccount: boolean;
    /** Policy that defines which headers from the incoming request should be forwarded */
    forwardHeaders?: ForwardHeadersPolicy;
}

export interface HttpCall_HeadersEntry {
    key: string;
    value: string;
}

export interface HttpCall_QueryEntry {
    key: string;
    value: string;
}

/** Policy defining which HTTP headers from the incoming request should be forwarded. */
export interface ForwardHeadersPolicy {
    /** Mode of header forwarding. Determines how the headers list is interpreted. */
    mode: ForwardHeadersPolicy_ForwardMode;
    /**
     * List of HTTP header names to forward. Interpretation depends on the mode:
     * - WHITE_LIST: only these headers will be forwarded (all others are excluded)
     * - BLACK_LIST: all headers except these will be forwarded (these are excluded)
     */
    headers: string[];
}

/** Mode for header forwarding policy. */
export enum ForwardHeadersPolicy_ForwardMode {
    FORWARD_MODE_UNSPECIFIED = 0,
    /**
     * WHITE_LIST - Whitelist mode: only headers listed in the headers field will be forwarded.
     * All other headers from the incoming request will be excluded.
     */
    WHITE_LIST = 1,
    /**
     * BLACK_LIST - Blacklist mode: all headers from the incoming request will be forwarded
     * except those listed in the headers field.
     */
    BLACK_LIST = 2,
    UNRECOGNIZED = -1,
}

export function forwardHeadersPolicy_ForwardModeFromJSON(
    object: any,
): ForwardHeadersPolicy_ForwardMode {
    switch (object) {
        case 0:
        case 'FORWARD_MODE_UNSPECIFIED':
            return ForwardHeadersPolicy_ForwardMode.FORWARD_MODE_UNSPECIFIED;
        case 1:
        case 'WHITE_LIST':
            return ForwardHeadersPolicy_ForwardMode.WHITE_LIST;
        case 2:
        case 'BLACK_LIST':
            return ForwardHeadersPolicy_ForwardMode.BLACK_LIST;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ForwardHeadersPolicy_ForwardMode.UNRECOGNIZED;
    }
}

export function forwardHeadersPolicy_ForwardModeToJSON(
    object: ForwardHeadersPolicy_ForwardMode,
): string {
    switch (object) {
        case ForwardHeadersPolicy_ForwardMode.FORWARD_MODE_UNSPECIFIED:
            return 'FORWARD_MODE_UNSPECIFIED';
        case ForwardHeadersPolicy_ForwardMode.WHITE_LIST:
            return 'WHITE_LIST';
        case ForwardHeadersPolicy_ForwardMode.BLACK_LIST:
            return 'BLACK_LIST';
        default:
            return 'UNKNOWN';
    }
}

export interface McpCall {
    /** MCP endpoint base URL. (required) */
    url: string;
    /** Tool call action to invoke a specific tool on the MCP endpoint. */
    toolCall?: McpCall_ToolCall | undefined;
    /** Transport to use for MCP communication. */
    transport: McpCall_Transport;
    /** No authorization mode. */
    unauthorized?: McpCall_NoAuthorization | undefined;
    /** Header-based authorization. */
    header?: McpCall_HeaderAuthorization | undefined;
    /** Service account authorization. */
    serviceAccount?: McpCall_SaAuthorization | undefined;
    /** Headers from the incoming request to forward downstream by name. */
    forwardHeaders: { [key: string]: string };
    /** Policy that defines which headers from the incoming request should be forwarded to the HTTP endpoint */
    transferHeaders?: ForwardHeadersPolicy;
}

export enum McpCall_Transport {
    /** TRANSPORT_UNSPECIFIED - Unspecified transport. */
    TRANSPORT_UNSPECIFIED = 0,
    /** SSE - Server-Sent Events (HTTP SSE). */
    SSE = 1,
    /** STREAMABLE - Streamable HTTP transport. */
    STREAMABLE = 2,
    UNRECOGNIZED = -1,
}

export function mcpCall_TransportFromJSON(object: any): McpCall_Transport {
    switch (object) {
        case 0:
        case 'TRANSPORT_UNSPECIFIED':
            return McpCall_Transport.TRANSPORT_UNSPECIFIED;
        case 1:
        case 'SSE':
            return McpCall_Transport.SSE;
        case 2:
        case 'STREAMABLE':
            return McpCall_Transport.STREAMABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return McpCall_Transport.UNRECOGNIZED;
    }
}

export function mcpCall_TransportToJSON(object: McpCall_Transport): string {
    switch (object) {
        case McpCall_Transport.TRANSPORT_UNSPECIFIED:
            return 'TRANSPORT_UNSPECIFIED';
        case McpCall_Transport.SSE:
            return 'SSE';
        case McpCall_Transport.STREAMABLE:
            return 'STREAMABLE';
        default:
            return 'UNKNOWN';
    }
}

export interface McpCall_ForwardHeadersEntry {
    key: string;
    value: string;
}

/** No authorization will be sent. */
export interface McpCall_NoAuthorization {}

/** Use MCP Gateway service account to authorize. */
export interface McpCall_SaAuthorization {}

export interface McpCall_HeaderAuthorization {
    /** Name of the authorization header to send. */
    headerName: string;
    /** Value of the authorization header to send. */
    headerValue: string;
}

export interface McpCall_ToolCall {
    /** Name of the tool to invoke on the MCP endpoint. (required) */
    toolName: string;
    /** JSON-encoded parameters to pass to the tool. */
    parametersJson: string;
}

export interface GrpcCall {
    /** gRPC server endpoint, e.g., host:port. (required) */
    endpoint: string;
    /** Fully qualified gRPC method name, e.g., package.Service/Method. (required) */
    method: string;
    /** Use MCP Gateway service account for authentication. */
    useServiceAccount: boolean;
    /** Request body payload for the call. */
    body: string;
    /** gRPC/HTTP headers to include with the call. */
    headers: { [key: string]: string };
    /** Policy that defines which headers from the incoming request should be forwarded */
    forwardHeaders?: ForwardHeadersPolicy;
}

export interface GrpcCall_HeadersEntry {
    key: string;
    value: string;
}

export interface StartWorkflow {
    /** ID of the Workflow to start. (required) */
    workflowId: string;
    /** JSON-encoded workflow input payload. */
    inputJson: string;
    /**
     * Execution mode for the workflow.
     * Determines whether the call should wait for workflow completion (SYNC)
     * or return immediately after starting the workflow (ASYNC).
     */
    mode: StartWorkflow_Mode;
}

export enum StartWorkflow_Mode {
    /** MODE_UNSPECIFIED - Unspecified mode. When not set, defaults to SYNC behavior. */
    MODE_UNSPECIFIED = 0,
    /** SYNC - Synchronous mode. The call blocks until the workflow execution completes. */
    SYNC = 1,
    /**
     * ASYNC - Asynchronous mode. The call returns immediately after starting the workflow.
     * Returns the execution ID for tracking the workflow progress separately.
     */
    ASYNC = 2,
    UNRECOGNIZED = -1,
}

export function startWorkflow_ModeFromJSON(object: any): StartWorkflow_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return StartWorkflow_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'SYNC':
            return StartWorkflow_Mode.SYNC;
        case 2:
        case 'ASYNC':
            return StartWorkflow_Mode.ASYNC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StartWorkflow_Mode.UNRECOGNIZED;
    }
}

export function startWorkflow_ModeToJSON(object: StartWorkflow_Mode): string {
    switch (object) {
        case StartWorkflow_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case StartWorkflow_Mode.SYNC:
            return 'SYNC';
        case StartWorkflow_Mode.ASYNC:
            return 'ASYNC';
        default:
            return 'UNKNOWN';
    }
}

const baseMcpGateway: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    baseDomain: '',
    serviceAccountId: '',
    networkId: '',
    cloudId: '',
    public: false,
};

export const McpGateway: {
    encode(message: McpGateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpGateway;
    fromJSON(object: any): McpGateway;
    toJSON(message: McpGateway): unknown;
    fromPartial<I extends Exact<DeepPartial<McpGateway>, I>>(object: I): McpGateway;
} = {
    encode(message: McpGateway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        for (const v of message.tools) {
            McpTool.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            McpGateway_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.baseDomain !== '') {
            writer.uint32(74).string(message.baseDomain);
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(82).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(90).string(message.serviceAccountId);
        }
        if (message.networkId !== '') {
            writer.uint32(98).string(message.networkId);
        }
        if (message.cloudId !== '') {
            writer.uint32(106).string(message.cloudId);
        }
        if (message.public === true) {
            writer.uint32(112).bool(message.public);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpGateway {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpGateway } as McpGateway;
        message.tools = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.tools.push(McpTool.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = McpGateway_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 9:
                    message.baseDomain = reader.string();
                    break;
                case 10:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.serviceAccountId = reader.string();
                    break;
                case 12:
                    message.networkId = reader.string();
                    break;
                case 13:
                    message.cloudId = reader.string();
                    break;
                case 14:
                    message.public = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): McpGateway {
        const message = { ...baseMcpGateway } as McpGateway;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.tools = (object.tools ?? []).map((e: any) => McpTool.fromJSON(e));
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
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
        message.status =
            object.status !== undefined && object.status !== null
                ? mcpGateway_StatusFromJSON(object.status)
                : 0;
        message.baseDomain =
            object.baseDomain !== undefined && object.baseDomain !== null
                ? String(object.baseDomain)
                : '';
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.public =
            object.public !== undefined && object.public !== null ? Boolean(object.public) : false;
        return message;
    },

    toJSON(message: McpGateway): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        if (message.tools) {
            obj.tools = message.tools.map((e) => (e ? McpTool.toJSON(e) : undefined));
        } else {
            obj.tools = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined && (obj.status = mcpGateway_StatusToJSON(message.status));
        message.baseDomain !== undefined && (obj.baseDomain = message.baseDomain);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.public !== undefined && (obj.public = message.public);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpGateway>, I>>(object: I): McpGateway {
        const message = { ...baseMcpGateway } as McpGateway;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.tools = object.tools?.map((e) => McpTool.fromPartial(e)) || [];
        message.createdAt = object.createdAt ?? undefined;
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
        message.status = object.status ?? 0;
        message.baseDomain = object.baseDomain ?? '';
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.networkId = object.networkId ?? '';
        message.cloudId = object.cloudId ?? '';
        message.public = object.public ?? false;
        return message;
    },
};

const baseMcpGateway_LabelsEntry: object = { key: '', value: '' };

export const McpGateway_LabelsEntry: {
    encode(message: McpGateway_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpGateway_LabelsEntry;
    fromJSON(object: any): McpGateway_LabelsEntry;
    toJSON(message: McpGateway_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<McpGateway_LabelsEntry>, I>>(object: I): McpGateway_LabelsEntry;
} = {
    encode(message: McpGateway_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpGateway_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpGateway_LabelsEntry } as McpGateway_LabelsEntry;
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

    fromJSON(object: any): McpGateway_LabelsEntry {
        const message = { ...baseMcpGateway_LabelsEntry } as McpGateway_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: McpGateway_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpGateway_LabelsEntry>, I>>(
        object: I,
    ): McpGateway_LabelsEntry {
        const message = { ...baseMcpGateway_LabelsEntry } as McpGateway_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseMcpGatewayPreview: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    baseDomain: '',
    networkId: '',
    serviceAccountId: '',
    public: false,
};

export const McpGatewayPreview: {
    encode(message: McpGatewayPreview, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpGatewayPreview;
    fromJSON(object: any): McpGatewayPreview;
    toJSON(message: McpGatewayPreview): unknown;
    fromPartial<I extends Exact<DeepPartial<McpGatewayPreview>, I>>(object: I): McpGatewayPreview;
} = {
    encode(message: McpGatewayPreview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            McpGatewayPreview_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.baseDomain !== '') {
            writer.uint32(66).string(message.baseDomain);
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(90).string(message.serviceAccountId);
        }
        if (message.public === true) {
            writer.uint32(96).bool(message.public);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpGatewayPreview {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpGatewayPreview } as McpGatewayPreview;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = McpGatewayPreview_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.baseDomain = reader.string();
                    break;
                case 9:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.serviceAccountId = reader.string();
                    break;
                case 12:
                    message.public = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): McpGatewayPreview {
        const message = { ...baseMcpGatewayPreview } as McpGatewayPreview;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
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
        message.status =
            object.status !== undefined && object.status !== null
                ? mcpGateway_StatusFromJSON(object.status)
                : 0;
        message.baseDomain =
            object.baseDomain !== undefined && object.baseDomain !== null
                ? String(object.baseDomain)
                : '';
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.public =
            object.public !== undefined && object.public !== null ? Boolean(object.public) : false;
        return message;
    },

    toJSON(message: McpGatewayPreview): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined && (obj.status = mcpGateway_StatusToJSON(message.status));
        message.baseDomain !== undefined && (obj.baseDomain = message.baseDomain);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.public !== undefined && (obj.public = message.public);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpGatewayPreview>, I>>(object: I): McpGatewayPreview {
        const message = { ...baseMcpGatewayPreview } as McpGatewayPreview;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
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
        message.status = object.status ?? 0;
        message.baseDomain = object.baseDomain ?? '';
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.networkId = object.networkId ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.public = object.public ?? false;
        return message;
    },
};

const baseMcpGatewayPreview_LabelsEntry: object = { key: '', value: '' };

export const McpGatewayPreview_LabelsEntry: {
    encode(message: McpGatewayPreview_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpGatewayPreview_LabelsEntry;
    fromJSON(object: any): McpGatewayPreview_LabelsEntry;
    toJSON(message: McpGatewayPreview_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<McpGatewayPreview_LabelsEntry>, I>>(object: I): McpGatewayPreview_LabelsEntry;
} = {
    encode(
        message: McpGatewayPreview_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): McpGatewayPreview_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpGatewayPreview_LabelsEntry } as McpGatewayPreview_LabelsEntry;
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

    fromJSON(object: any): McpGatewayPreview_LabelsEntry {
        const message = { ...baseMcpGatewayPreview_LabelsEntry } as McpGatewayPreview_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: McpGatewayPreview_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpGatewayPreview_LabelsEntry>, I>>(
        object: I,
    ): McpGatewayPreview_LabelsEntry {
        const message = { ...baseMcpGatewayPreview_LabelsEntry } as McpGatewayPreview_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseLogOptions: object = { disabled: false, minLevel: 0 };

export const LogOptions: {
    encode(message: LogOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions;
    fromJSON(object: any): LogOptions;
    toJSON(message: LogOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(object: I): LogOptions;
} = {
    encode(message: LogOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.disabled === true) {
            writer.uint32(8).bool(message.disabled);
        }
        if (message.logGroupId !== undefined) {
            writer.uint32(18).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.minLevel !== 0) {
            writer.uint32(32).int32(message.minLevel);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogOptions } as LogOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disabled = reader.bool();
                    break;
                case 2:
                    message.logGroupId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.minLevel = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LogOptions {
        const message = { ...baseLogOptions } as LogOptions;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.minLevel =
            object.minLevel !== undefined && object.minLevel !== null
                ? logLevel_LevelFromJSON(object.minLevel)
                : 0;
        return message;
    },

    toJSON(message: LogOptions): unknown {
        const obj: any = {};
        message.disabled !== undefined && (obj.disabled = message.disabled);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.minLevel !== undefined && (obj.minLevel = logLevel_LevelToJSON(message.minLevel));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(object: I): LogOptions {
        const message = { ...baseLogOptions } as LogOptions;
        message.disabled = object.disabled ?? false;
        message.logGroupId = object.logGroupId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.minLevel = object.minLevel ?? 0;
        return message;
    },
};

const baseMcpTool: object = { name: '', description: '', inputJsonSchema: '' };

export const McpTool: {
    encode(message: McpTool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpTool;
    fromJSON(object: any): McpTool;
    toJSON(message: McpTool): unknown;
    fromPartial<I extends Exact<DeepPartial<McpTool>, I>>(object: I): McpTool;
} = {
    encode(message: McpTool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.inputJsonSchema !== '') {
            writer.uint32(26).string(message.inputJsonSchema);
        }
        if (message.action !== undefined) {
            McpToolAction.encode(message.action, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpTool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpTool } as McpTool;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.inputJsonSchema = reader.string();
                    break;
                case 4:
                    message.action = McpToolAction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): McpTool {
        const message = { ...baseMcpTool } as McpTool;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.inputJsonSchema =
            object.inputJsonSchema !== undefined && object.inputJsonSchema !== null
                ? String(object.inputJsonSchema)
                : '';
        message.action =
            object.action !== undefined && object.action !== null
                ? McpToolAction.fromJSON(object.action)
                : undefined;
        return message;
    },

    toJSON(message: McpTool): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.inputJsonSchema !== undefined && (obj.inputJsonSchema = message.inputJsonSchema);
        message.action !== undefined &&
            (obj.action = message.action ? McpToolAction.toJSON(message.action) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpTool>, I>>(object: I): McpTool {
        const message = { ...baseMcpTool } as McpTool;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.inputJsonSchema = object.inputJsonSchema ?? '';
        message.action =
            object.action !== undefined && object.action !== null
                ? McpToolAction.fromPartial(object.action)
                : undefined;
        return message;
    },
};

const baseMcpToolAction: object = {};

export const McpToolAction: {
    encode(message: McpToolAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpToolAction;
    fromJSON(object: any): McpToolAction;
    toJSON(message: McpToolAction): unknown;
    fromPartial<I extends Exact<DeepPartial<McpToolAction>, I>>(object: I): McpToolAction;
} = {
    encode(message: McpToolAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.functionCall !== undefined) {
            FunctionCall.encode(message.functionCall, writer.uint32(10).fork()).ldelim();
        }
        if (message.containerCall !== undefined) {
            ContainerCall.encode(message.containerCall, writer.uint32(18).fork()).ldelim();
        }
        if (message.httpCall !== undefined) {
            HttpCall.encode(message.httpCall, writer.uint32(26).fork()).ldelim();
        }
        if (message.mcpCall !== undefined) {
            McpCall.encode(message.mcpCall, writer.uint32(34).fork()).ldelim();
        }
        if (message.grpcCall !== undefined) {
            GrpcCall.encode(message.grpcCall, writer.uint32(42).fork()).ldelim();
        }
        if (message.startWorkflow !== undefined) {
            StartWorkflow.encode(message.startWorkflow, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpToolAction {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpToolAction } as McpToolAction;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionCall = FunctionCall.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.containerCall = ContainerCall.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.httpCall = HttpCall.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mcpCall = McpCall.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.grpcCall = GrpcCall.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.startWorkflow = StartWorkflow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): McpToolAction {
        const message = { ...baseMcpToolAction } as McpToolAction;
        message.functionCall =
            object.functionCall !== undefined && object.functionCall !== null
                ? FunctionCall.fromJSON(object.functionCall)
                : undefined;
        message.containerCall =
            object.containerCall !== undefined && object.containerCall !== null
                ? ContainerCall.fromJSON(object.containerCall)
                : undefined;
        message.httpCall =
            object.httpCall !== undefined && object.httpCall !== null
                ? HttpCall.fromJSON(object.httpCall)
                : undefined;
        message.mcpCall =
            object.mcpCall !== undefined && object.mcpCall !== null
                ? McpCall.fromJSON(object.mcpCall)
                : undefined;
        message.grpcCall =
            object.grpcCall !== undefined && object.grpcCall !== null
                ? GrpcCall.fromJSON(object.grpcCall)
                : undefined;
        message.startWorkflow =
            object.startWorkflow !== undefined && object.startWorkflow !== null
                ? StartWorkflow.fromJSON(object.startWorkflow)
                : undefined;
        return message;
    },

    toJSON(message: McpToolAction): unknown {
        const obj: any = {};
        message.functionCall !== undefined &&
            (obj.functionCall = message.functionCall
                ? FunctionCall.toJSON(message.functionCall)
                : undefined);
        message.containerCall !== undefined &&
            (obj.containerCall = message.containerCall
                ? ContainerCall.toJSON(message.containerCall)
                : undefined);
        message.httpCall !== undefined &&
            (obj.httpCall = message.httpCall ? HttpCall.toJSON(message.httpCall) : undefined);
        message.mcpCall !== undefined &&
            (obj.mcpCall = message.mcpCall ? McpCall.toJSON(message.mcpCall) : undefined);
        message.grpcCall !== undefined &&
            (obj.grpcCall = message.grpcCall ? GrpcCall.toJSON(message.grpcCall) : undefined);
        message.startWorkflow !== undefined &&
            (obj.startWorkflow = message.startWorkflow
                ? StartWorkflow.toJSON(message.startWorkflow)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpToolAction>, I>>(object: I): McpToolAction {
        const message = { ...baseMcpToolAction } as McpToolAction;
        message.functionCall =
            object.functionCall !== undefined && object.functionCall !== null
                ? FunctionCall.fromPartial(object.functionCall)
                : undefined;
        message.containerCall =
            object.containerCall !== undefined && object.containerCall !== null
                ? ContainerCall.fromPartial(object.containerCall)
                : undefined;
        message.httpCall =
            object.httpCall !== undefined && object.httpCall !== null
                ? HttpCall.fromPartial(object.httpCall)
                : undefined;
        message.mcpCall =
            object.mcpCall !== undefined && object.mcpCall !== null
                ? McpCall.fromPartial(object.mcpCall)
                : undefined;
        message.grpcCall =
            object.grpcCall !== undefined && object.grpcCall !== null
                ? GrpcCall.fromPartial(object.grpcCall)
                : undefined;
        message.startWorkflow =
            object.startWorkflow !== undefined && object.startWorkflow !== null
                ? StartWorkflow.fromPartial(object.startWorkflow)
                : undefined;
        return message;
    },
};

const baseFunctionCall: object = { functionId: '', tag: '' };

export const FunctionCall: {
    encode(message: FunctionCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionCall;
    fromJSON(object: any): FunctionCall;
    toJSON(message: FunctionCall): unknown;
    fromPartial<I extends Exact<DeepPartial<FunctionCall>, I>>(object: I): FunctionCall;
} = {
    encode(message: FunctionCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunctionCall } as FunctionCall;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FunctionCall {
        const message = { ...baseFunctionCall } as FunctionCall;
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : '';
        message.tag = object.tag !== undefined && object.tag !== null ? String(object.tag) : '';
        return message;
    },

    toJSON(message: FunctionCall): unknown {
        const obj: any = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FunctionCall>, I>>(object: I): FunctionCall {
        const message = { ...baseFunctionCall } as FunctionCall;
        message.functionId = object.functionId ?? '';
        message.tag = object.tag ?? '';
        return message;
    },
};

const baseContainerCall: object = { containerId: '', path: '', method: 0, body: '' };

export const ContainerCall: {
    encode(message: ContainerCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerCall;
    fromJSON(object: any): ContainerCall;
    toJSON(message: ContainerCall): unknown;
    fromPartial<I extends Exact<DeepPartial<ContainerCall>, I>>(object: I): ContainerCall;
} = {
    encode(message: ContainerCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.method !== 0) {
            writer.uint32(24).int32(message.method);
        }
        if (message.body !== '') {
            writer.uint32(34).string(message.body);
        }
        Object.entries(message.headers).forEach(([key, value]) => {
            ContainerCall_HeadersEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        Object.entries(message.query).forEach(([key, value]) => {
            ContainerCall_QueryEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.forwardHeaders !== undefined) {
            ForwardHeadersPolicy.encode(message.forwardHeaders, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContainerCall } as ContainerCall;
        message.headers = {};
        message.query = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.method = reader.int32() as any;
                    break;
                case 4:
                    message.body = reader.string();
                    break;
                case 5:
                    const entry5 = ContainerCall_HeadersEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.headers[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    const entry6 = ContainerCall_QueryEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.query[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.forwardHeaders = ForwardHeadersPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ContainerCall {
        const message = { ...baseContainerCall } as ContainerCall;
        message.containerId =
            object.containerId !== undefined && object.containerId !== null
                ? String(object.containerId)
                : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        message.method =
            object.method !== undefined && object.method !== null
                ? httpMethodFromJSON(object.method)
                : 0;
        message.body = object.body !== undefined && object.body !== null ? String(object.body) : '';
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.query = Object.entries(object.query ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.forwardHeaders =
            object.forwardHeaders !== undefined && object.forwardHeaders !== null
                ? ForwardHeadersPolicy.fromJSON(object.forwardHeaders)
                : undefined;
        return message;
    },

    toJSON(message: ContainerCall): unknown {
        const obj: any = {};
        message.containerId !== undefined && (obj.containerId = message.containerId);
        message.path !== undefined && (obj.path = message.path);
        message.method !== undefined && (obj.method = httpMethodToJSON(message.method));
        message.body !== undefined && (obj.body = message.body);
        obj.headers = {};
        if (message.headers) {
            Object.entries(message.headers).forEach(([k, v]) => {
                obj.headers[k] = v;
            });
        }
        obj.query = {};
        if (message.query) {
            Object.entries(message.query).forEach(([k, v]) => {
                obj.query[k] = v;
            });
        }
        message.forwardHeaders !== undefined &&
            (obj.forwardHeaders = message.forwardHeaders
                ? ForwardHeadersPolicy.toJSON(message.forwardHeaders)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContainerCall>, I>>(object: I): ContainerCall {
        const message = { ...baseContainerCall } as ContainerCall;
        message.containerId = object.containerId ?? '';
        message.path = object.path ?? '';
        message.method = object.method ?? 0;
        message.body = object.body ?? '';
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.query = Object.entries(object.query ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.forwardHeaders =
            object.forwardHeaders !== undefined && object.forwardHeaders !== null
                ? ForwardHeadersPolicy.fromPartial(object.forwardHeaders)
                : undefined;
        return message;
    },
};

const baseContainerCall_HeadersEntry: object = { key: '', value: '' };

export const ContainerCall_HeadersEntry: {
    encode(message: ContainerCall_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerCall_HeadersEntry;
    fromJSON(object: any): ContainerCall_HeadersEntry;
    toJSON(message: ContainerCall_HeadersEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<ContainerCall_HeadersEntry>, I>>(object: I): ContainerCall_HeadersEntry;
} = {
    encode(
        message: ContainerCall_HeadersEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerCall_HeadersEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContainerCall_HeadersEntry } as ContainerCall_HeadersEntry;
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

    fromJSON(object: any): ContainerCall_HeadersEntry {
        const message = { ...baseContainerCall_HeadersEntry } as ContainerCall_HeadersEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ContainerCall_HeadersEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContainerCall_HeadersEntry>, I>>(
        object: I,
    ): ContainerCall_HeadersEntry {
        const message = { ...baseContainerCall_HeadersEntry } as ContainerCall_HeadersEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseContainerCall_QueryEntry: object = { key: '', value: '' };

export const ContainerCall_QueryEntry: {
    encode(message: ContainerCall_QueryEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerCall_QueryEntry;
    fromJSON(object: any): ContainerCall_QueryEntry;
    toJSON(message: ContainerCall_QueryEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<ContainerCall_QueryEntry>, I>>(object: I): ContainerCall_QueryEntry;
} = {
    encode(
        message: ContainerCall_QueryEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerCall_QueryEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContainerCall_QueryEntry } as ContainerCall_QueryEntry;
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

    fromJSON(object: any): ContainerCall_QueryEntry {
        const message = { ...baseContainerCall_QueryEntry } as ContainerCall_QueryEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ContainerCall_QueryEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContainerCall_QueryEntry>, I>>(
        object: I,
    ): ContainerCall_QueryEntry {
        const message = { ...baseContainerCall_QueryEntry } as ContainerCall_QueryEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseHttpCall: object = { url: '', method: 0, body: '', useServiceAccount: false };

export const HttpCall: {
    encode(message: HttpCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpCall;
    fromJSON(object: any): HttpCall;
    toJSON(message: HttpCall): unknown;
    fromPartial<I extends Exact<DeepPartial<HttpCall>, I>>(object: I): HttpCall;
} = {
    encode(message: HttpCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        if (message.body !== '') {
            writer.uint32(26).string(message.body);
        }
        Object.entries(message.headers).forEach(([key, value]) => {
            HttpCall_HeadersEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        Object.entries(message.query).forEach(([key, value]) => {
            HttpCall_QueryEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.useServiceAccount === true) {
            writer.uint32(48).bool(message.useServiceAccount);
        }
        if (message.forwardHeaders !== undefined) {
            ForwardHeadersPolicy.encode(message.forwardHeaders, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpCall } as HttpCall;
        message.headers = {};
        message.query = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.method = reader.int32() as any;
                    break;
                case 3:
                    message.body = reader.string();
                    break;
                case 4:
                    const entry4 = HttpCall_HeadersEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.headers[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    const entry5 = HttpCall_QueryEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.query[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.useServiceAccount = reader.bool();
                    break;
                case 7:
                    message.forwardHeaders = ForwardHeadersPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HttpCall {
        const message = { ...baseHttpCall } as HttpCall;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.method =
            object.method !== undefined && object.method !== null
                ? httpMethodFromJSON(object.method)
                : 0;
        message.body = object.body !== undefined && object.body !== null ? String(object.body) : '';
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.query = Object.entries(object.query ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.useServiceAccount =
            object.useServiceAccount !== undefined && object.useServiceAccount !== null
                ? Boolean(object.useServiceAccount)
                : false;
        message.forwardHeaders =
            object.forwardHeaders !== undefined && object.forwardHeaders !== null
                ? ForwardHeadersPolicy.fromJSON(object.forwardHeaders)
                : undefined;
        return message;
    },

    toJSON(message: HttpCall): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.method !== undefined && (obj.method = httpMethodToJSON(message.method));
        message.body !== undefined && (obj.body = message.body);
        obj.headers = {};
        if (message.headers) {
            Object.entries(message.headers).forEach(([k, v]) => {
                obj.headers[k] = v;
            });
        }
        obj.query = {};
        if (message.query) {
            Object.entries(message.query).forEach(([k, v]) => {
                obj.query[k] = v;
            });
        }
        message.useServiceAccount !== undefined &&
            (obj.useServiceAccount = message.useServiceAccount);
        message.forwardHeaders !== undefined &&
            (obj.forwardHeaders = message.forwardHeaders
                ? ForwardHeadersPolicy.toJSON(message.forwardHeaders)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HttpCall>, I>>(object: I): HttpCall {
        const message = { ...baseHttpCall } as HttpCall;
        message.url = object.url ?? '';
        message.method = object.method ?? 0;
        message.body = object.body ?? '';
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.query = Object.entries(object.query ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.useServiceAccount = object.useServiceAccount ?? false;
        message.forwardHeaders =
            object.forwardHeaders !== undefined && object.forwardHeaders !== null
                ? ForwardHeadersPolicy.fromPartial(object.forwardHeaders)
                : undefined;
        return message;
    },
};

const baseHttpCall_HeadersEntry: object = { key: '', value: '' };

export const HttpCall_HeadersEntry: {
    encode(message: HttpCall_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpCall_HeadersEntry;
    fromJSON(object: any): HttpCall_HeadersEntry;
    toJSON(message: HttpCall_HeadersEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<HttpCall_HeadersEntry>, I>>(object: I): HttpCall_HeadersEntry;
} = {
    encode(message: HttpCall_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpCall_HeadersEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpCall_HeadersEntry } as HttpCall_HeadersEntry;
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

    fromJSON(object: any): HttpCall_HeadersEntry {
        const message = { ...baseHttpCall_HeadersEntry } as HttpCall_HeadersEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: HttpCall_HeadersEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HttpCall_HeadersEntry>, I>>(
        object: I,
    ): HttpCall_HeadersEntry {
        const message = { ...baseHttpCall_HeadersEntry } as HttpCall_HeadersEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseHttpCall_QueryEntry: object = { key: '', value: '' };

export const HttpCall_QueryEntry: {
    encode(message: HttpCall_QueryEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpCall_QueryEntry;
    fromJSON(object: any): HttpCall_QueryEntry;
    toJSON(message: HttpCall_QueryEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<HttpCall_QueryEntry>, I>>(object: I): HttpCall_QueryEntry;
} = {
    encode(message: HttpCall_QueryEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpCall_QueryEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpCall_QueryEntry } as HttpCall_QueryEntry;
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

    fromJSON(object: any): HttpCall_QueryEntry {
        const message = { ...baseHttpCall_QueryEntry } as HttpCall_QueryEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: HttpCall_QueryEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HttpCall_QueryEntry>, I>>(
        object: I,
    ): HttpCall_QueryEntry {
        const message = { ...baseHttpCall_QueryEntry } as HttpCall_QueryEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseForwardHeadersPolicy: object = { mode: 0, headers: '' };

export const ForwardHeadersPolicy: {
    encode(message: ForwardHeadersPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ForwardHeadersPolicy;
    fromJSON(object: any): ForwardHeadersPolicy;
    toJSON(message: ForwardHeadersPolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<ForwardHeadersPolicy>, I>>(object: I): ForwardHeadersPolicy;
} = {
    encode(message: ForwardHeadersPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        for (const v of message.headers) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ForwardHeadersPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseForwardHeadersPolicy } as ForwardHeadersPolicy;
        message.headers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.headers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ForwardHeadersPolicy {
        const message = { ...baseForwardHeadersPolicy } as ForwardHeadersPolicy;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? forwardHeadersPolicy_ForwardModeFromJSON(object.mode)
                : 0;
        message.headers = (object.headers ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ForwardHeadersPolicy): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = forwardHeadersPolicy_ForwardModeToJSON(message.mode));
        if (message.headers) {
            obj.headers = message.headers.map((e) => e);
        } else {
            obj.headers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ForwardHeadersPolicy>, I>>(
        object: I,
    ): ForwardHeadersPolicy {
        const message = { ...baseForwardHeadersPolicy } as ForwardHeadersPolicy;
        message.mode = object.mode ?? 0;
        message.headers = object.headers?.map((e) => e) || [];
        return message;
    },
};

const baseMcpCall: object = { url: '', transport: 0 };

export const McpCall: {
    encode(message: McpCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall;
    fromJSON(object: any): McpCall;
    toJSON(message: McpCall): unknown;
    fromPartial<I extends Exact<DeepPartial<McpCall>, I>>(object: I): McpCall;
} = {
    encode(message: McpCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.toolCall !== undefined) {
            McpCall_ToolCall.encode(message.toolCall, writer.uint32(18).fork()).ldelim();
        }
        if (message.transport !== 0) {
            writer.uint32(24).int32(message.transport);
        }
        if (message.unauthorized !== undefined) {
            McpCall_NoAuthorization.encode(message.unauthorized, writer.uint32(34).fork()).ldelim();
        }
        if (message.header !== undefined) {
            McpCall_HeaderAuthorization.encode(message.header, writer.uint32(42).fork()).ldelim();
        }
        if (message.serviceAccount !== undefined) {
            McpCall_SaAuthorization.encode(
                message.serviceAccount,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        Object.entries(message.forwardHeaders).forEach(([key, value]) => {
            McpCall_ForwardHeadersEntry.encode(
                { key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        if (message.transferHeaders !== undefined) {
            ForwardHeadersPolicy.encode(message.transferHeaders, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpCall } as McpCall;
        message.forwardHeaders = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.toolCall = McpCall_ToolCall.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.transport = reader.int32() as any;
                    break;
                case 4:
                    message.unauthorized = McpCall_NoAuthorization.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.header = McpCall_HeaderAuthorization.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.serviceAccount = McpCall_SaAuthorization.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 7:
                    const entry7 = McpCall_ForwardHeadersEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.forwardHeaders[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.transferHeaders = ForwardHeadersPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): McpCall {
        const message = { ...baseMcpCall } as McpCall;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.toolCall =
            object.toolCall !== undefined && object.toolCall !== null
                ? McpCall_ToolCall.fromJSON(object.toolCall)
                : undefined;
        message.transport =
            object.transport !== undefined && object.transport !== null
                ? mcpCall_TransportFromJSON(object.transport)
                : 0;
        message.unauthorized =
            object.unauthorized !== undefined && object.unauthorized !== null
                ? McpCall_NoAuthorization.fromJSON(object.unauthorized)
                : undefined;
        message.header =
            object.header !== undefined && object.header !== null
                ? McpCall_HeaderAuthorization.fromJSON(object.header)
                : undefined;
        message.serviceAccount =
            object.serviceAccount !== undefined && object.serviceAccount !== null
                ? McpCall_SaAuthorization.fromJSON(object.serviceAccount)
                : undefined;
        message.forwardHeaders = Object.entries(object.forwardHeaders ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.transferHeaders =
            object.transferHeaders !== undefined && object.transferHeaders !== null
                ? ForwardHeadersPolicy.fromJSON(object.transferHeaders)
                : undefined;
        return message;
    },

    toJSON(message: McpCall): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.toolCall !== undefined &&
            (obj.toolCall = message.toolCall
                ? McpCall_ToolCall.toJSON(message.toolCall)
                : undefined);
        message.transport !== undefined &&
            (obj.transport = mcpCall_TransportToJSON(message.transport));
        message.unauthorized !== undefined &&
            (obj.unauthorized = message.unauthorized
                ? McpCall_NoAuthorization.toJSON(message.unauthorized)
                : undefined);
        message.header !== undefined &&
            (obj.header = message.header
                ? McpCall_HeaderAuthorization.toJSON(message.header)
                : undefined);
        message.serviceAccount !== undefined &&
            (obj.serviceAccount = message.serviceAccount
                ? McpCall_SaAuthorization.toJSON(message.serviceAccount)
                : undefined);
        obj.forwardHeaders = {};
        if (message.forwardHeaders) {
            Object.entries(message.forwardHeaders).forEach(([k, v]) => {
                obj.forwardHeaders[k] = v;
            });
        }
        message.transferHeaders !== undefined &&
            (obj.transferHeaders = message.transferHeaders
                ? ForwardHeadersPolicy.toJSON(message.transferHeaders)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpCall>, I>>(object: I): McpCall {
        const message = { ...baseMcpCall } as McpCall;
        message.url = object.url ?? '';
        message.toolCall =
            object.toolCall !== undefined && object.toolCall !== null
                ? McpCall_ToolCall.fromPartial(object.toolCall)
                : undefined;
        message.transport = object.transport ?? 0;
        message.unauthorized =
            object.unauthorized !== undefined && object.unauthorized !== null
                ? McpCall_NoAuthorization.fromPartial(object.unauthorized)
                : undefined;
        message.header =
            object.header !== undefined && object.header !== null
                ? McpCall_HeaderAuthorization.fromPartial(object.header)
                : undefined;
        message.serviceAccount =
            object.serviceAccount !== undefined && object.serviceAccount !== null
                ? McpCall_SaAuthorization.fromPartial(object.serviceAccount)
                : undefined;
        message.forwardHeaders = Object.entries(object.forwardHeaders ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.transferHeaders =
            object.transferHeaders !== undefined && object.transferHeaders !== null
                ? ForwardHeadersPolicy.fromPartial(object.transferHeaders)
                : undefined;
        return message;
    },
};

const baseMcpCall_ForwardHeadersEntry: object = { key: '', value: '' };

export const McpCall_ForwardHeadersEntry: {
    encode(message: McpCall_ForwardHeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_ForwardHeadersEntry;
    fromJSON(object: any): McpCall_ForwardHeadersEntry;
    toJSON(message: McpCall_ForwardHeadersEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<McpCall_ForwardHeadersEntry>, I>>(object: I): McpCall_ForwardHeadersEntry;
} = {
    encode(
        message: McpCall_ForwardHeadersEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_ForwardHeadersEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpCall_ForwardHeadersEntry } as McpCall_ForwardHeadersEntry;
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

    fromJSON(object: any): McpCall_ForwardHeadersEntry {
        const message = { ...baseMcpCall_ForwardHeadersEntry } as McpCall_ForwardHeadersEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: McpCall_ForwardHeadersEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpCall_ForwardHeadersEntry>, I>>(
        object: I,
    ): McpCall_ForwardHeadersEntry {
        const message = { ...baseMcpCall_ForwardHeadersEntry } as McpCall_ForwardHeadersEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseMcpCall_NoAuthorization: object = {};

export const McpCall_NoAuthorization: {
    encode(message: McpCall_NoAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_NoAuthorization;
    fromJSON(object: any): McpCall_NoAuthorization;
    toJSON(message: McpCall_NoAuthorization): unknown;
    fromPartial<I extends Exact<DeepPartial<McpCall_NoAuthorization>, I>>(object: I): McpCall_NoAuthorization;
} = {
    encode(_: McpCall_NoAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_NoAuthorization {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpCall_NoAuthorization } as McpCall_NoAuthorization;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): McpCall_NoAuthorization {
        const message = { ...baseMcpCall_NoAuthorization } as McpCall_NoAuthorization;
        return message;
    },

    toJSON(_: McpCall_NoAuthorization): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpCall_NoAuthorization>, I>>(
        _: I,
    ): McpCall_NoAuthorization {
        const message = { ...baseMcpCall_NoAuthorization } as McpCall_NoAuthorization;
        return message;
    },
};

const baseMcpCall_SaAuthorization: object = {};

export const McpCall_SaAuthorization: {
    encode(message: McpCall_SaAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_SaAuthorization;
    fromJSON(object: any): McpCall_SaAuthorization;
    toJSON(message: McpCall_SaAuthorization): unknown;
    fromPartial<I extends Exact<DeepPartial<McpCall_SaAuthorization>, I>>(object: I): McpCall_SaAuthorization;
} = {
    encode(_: McpCall_SaAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_SaAuthorization {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpCall_SaAuthorization } as McpCall_SaAuthorization;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): McpCall_SaAuthorization {
        const message = { ...baseMcpCall_SaAuthorization } as McpCall_SaAuthorization;
        return message;
    },

    toJSON(_: McpCall_SaAuthorization): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpCall_SaAuthorization>, I>>(
        _: I,
    ): McpCall_SaAuthorization {
        const message = { ...baseMcpCall_SaAuthorization } as McpCall_SaAuthorization;
        return message;
    },
};

const baseMcpCall_HeaderAuthorization: object = { headerName: '', headerValue: '' };

export const McpCall_HeaderAuthorization: {
    encode(message: McpCall_HeaderAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_HeaderAuthorization;
    fromJSON(object: any): McpCall_HeaderAuthorization;
    toJSON(message: McpCall_HeaderAuthorization): unknown;
    fromPartial<I extends Exact<DeepPartial<McpCall_HeaderAuthorization>, I>>(object: I): McpCall_HeaderAuthorization;
} = {
    encode(
        message: McpCall_HeaderAuthorization,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.headerName !== '') {
            writer.uint32(10).string(message.headerName);
        }
        if (message.headerValue !== '') {
            writer.uint32(18).string(message.headerValue);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_HeaderAuthorization {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpCall_HeaderAuthorization } as McpCall_HeaderAuthorization;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.headerName = reader.string();
                    break;
                case 2:
                    message.headerValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): McpCall_HeaderAuthorization {
        const message = { ...baseMcpCall_HeaderAuthorization } as McpCall_HeaderAuthorization;
        message.headerName =
            object.headerName !== undefined && object.headerName !== null
                ? String(object.headerName)
                : '';
        message.headerValue =
            object.headerValue !== undefined && object.headerValue !== null
                ? String(object.headerValue)
                : '';
        return message;
    },

    toJSON(message: McpCall_HeaderAuthorization): unknown {
        const obj: any = {};
        message.headerName !== undefined && (obj.headerName = message.headerName);
        message.headerValue !== undefined && (obj.headerValue = message.headerValue);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpCall_HeaderAuthorization>, I>>(
        object: I,
    ): McpCall_HeaderAuthorization {
        const message = { ...baseMcpCall_HeaderAuthorization } as McpCall_HeaderAuthorization;
        message.headerName = object.headerName ?? '';
        message.headerValue = object.headerValue ?? '';
        return message;
    },
};

const baseMcpCall_ToolCall: object = { toolName: '', parametersJson: '' };

export const McpCall_ToolCall: {
    encode(message: McpCall_ToolCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_ToolCall;
    fromJSON(object: any): McpCall_ToolCall;
    toJSON(message: McpCall_ToolCall): unknown;
    fromPartial<I extends Exact<DeepPartial<McpCall_ToolCall>, I>>(object: I): McpCall_ToolCall;
} = {
    encode(message: McpCall_ToolCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.toolName !== '') {
            writer.uint32(10).string(message.toolName);
        }
        if (message.parametersJson !== '') {
            writer.uint32(18).string(message.parametersJson);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): McpCall_ToolCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMcpCall_ToolCall } as McpCall_ToolCall;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.toolName = reader.string();
                    break;
                case 2:
                    message.parametersJson = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): McpCall_ToolCall {
        const message = { ...baseMcpCall_ToolCall } as McpCall_ToolCall;
        message.toolName =
            object.toolName !== undefined && object.toolName !== null
                ? String(object.toolName)
                : '';
        message.parametersJson =
            object.parametersJson !== undefined && object.parametersJson !== null
                ? String(object.parametersJson)
                : '';
        return message;
    },

    toJSON(message: McpCall_ToolCall): unknown {
        const obj: any = {};
        message.toolName !== undefined && (obj.toolName = message.toolName);
        message.parametersJson !== undefined && (obj.parametersJson = message.parametersJson);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<McpCall_ToolCall>, I>>(object: I): McpCall_ToolCall {
        const message = { ...baseMcpCall_ToolCall } as McpCall_ToolCall;
        message.toolName = object.toolName ?? '';
        message.parametersJson = object.parametersJson ?? '';
        return message;
    },
};

const baseGrpcCall: object = { endpoint: '', method: '', useServiceAccount: false, body: '' };

export const GrpcCall: {
    encode(message: GrpcCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcCall;
    fromJSON(object: any): GrpcCall;
    toJSON(message: GrpcCall): unknown;
    fromPartial<I extends Exact<DeepPartial<GrpcCall>, I>>(object: I): GrpcCall;
} = {
    encode(message: GrpcCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.endpoint !== '') {
            writer.uint32(10).string(message.endpoint);
        }
        if (message.method !== '') {
            writer.uint32(18).string(message.method);
        }
        if (message.useServiceAccount === true) {
            writer.uint32(24).bool(message.useServiceAccount);
        }
        if (message.body !== '') {
            writer.uint32(34).string(message.body);
        }
        Object.entries(message.headers).forEach(([key, value]) => {
            GrpcCall_HeadersEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.forwardHeaders !== undefined) {
            ForwardHeadersPolicy.encode(message.forwardHeaders, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcCall } as GrpcCall;
        message.headers = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoint = reader.string();
                    break;
                case 2:
                    message.method = reader.string();
                    break;
                case 3:
                    message.useServiceAccount = reader.bool();
                    break;
                case 4:
                    message.body = reader.string();
                    break;
                case 5:
                    const entry5 = GrpcCall_HeadersEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.headers[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.forwardHeaders = ForwardHeadersPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GrpcCall {
        const message = { ...baseGrpcCall } as GrpcCall;
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        message.method =
            object.method !== undefined && object.method !== null ? String(object.method) : '';
        message.useServiceAccount =
            object.useServiceAccount !== undefined && object.useServiceAccount !== null
                ? Boolean(object.useServiceAccount)
                : false;
        message.body = object.body !== undefined && object.body !== null ? String(object.body) : '';
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.forwardHeaders =
            object.forwardHeaders !== undefined && object.forwardHeaders !== null
                ? ForwardHeadersPolicy.fromJSON(object.forwardHeaders)
                : undefined;
        return message;
    },

    toJSON(message: GrpcCall): unknown {
        const obj: any = {};
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.method !== undefined && (obj.method = message.method);
        message.useServiceAccount !== undefined &&
            (obj.useServiceAccount = message.useServiceAccount);
        message.body !== undefined && (obj.body = message.body);
        obj.headers = {};
        if (message.headers) {
            Object.entries(message.headers).forEach(([k, v]) => {
                obj.headers[k] = v;
            });
        }
        message.forwardHeaders !== undefined &&
            (obj.forwardHeaders = message.forwardHeaders
                ? ForwardHeadersPolicy.toJSON(message.forwardHeaders)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GrpcCall>, I>>(object: I): GrpcCall {
        const message = { ...baseGrpcCall } as GrpcCall;
        message.endpoint = object.endpoint ?? '';
        message.method = object.method ?? '';
        message.useServiceAccount = object.useServiceAccount ?? false;
        message.body = object.body ?? '';
        message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.forwardHeaders =
            object.forwardHeaders !== undefined && object.forwardHeaders !== null
                ? ForwardHeadersPolicy.fromPartial(object.forwardHeaders)
                : undefined;
        return message;
    },
};

const baseGrpcCall_HeadersEntry: object = { key: '', value: '' };

export const GrpcCall_HeadersEntry: {
    encode(message: GrpcCall_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcCall_HeadersEntry;
    fromJSON(object: any): GrpcCall_HeadersEntry;
    toJSON(message: GrpcCall_HeadersEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<GrpcCall_HeadersEntry>, I>>(object: I): GrpcCall_HeadersEntry;
} = {
    encode(message: GrpcCall_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcCall_HeadersEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcCall_HeadersEntry } as GrpcCall_HeadersEntry;
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

    fromJSON(object: any): GrpcCall_HeadersEntry {
        const message = { ...baseGrpcCall_HeadersEntry } as GrpcCall_HeadersEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: GrpcCall_HeadersEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GrpcCall_HeadersEntry>, I>>(
        object: I,
    ): GrpcCall_HeadersEntry {
        const message = { ...baseGrpcCall_HeadersEntry } as GrpcCall_HeadersEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseStartWorkflow: object = { workflowId: '', inputJson: '', mode: 0 };

export const StartWorkflow: {
    encode(message: StartWorkflow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartWorkflow;
    fromJSON(object: any): StartWorkflow;
    toJSON(message: StartWorkflow): unknown;
    fromPartial<I extends Exact<DeepPartial<StartWorkflow>, I>>(object: I): StartWorkflow;
} = {
    encode(message: StartWorkflow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.workflowId !== '') {
            writer.uint32(10).string(message.workflowId);
        }
        if (message.inputJson !== '') {
            writer.uint32(18).string(message.inputJson);
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartWorkflow {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartWorkflow } as StartWorkflow;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workflowId = reader.string();
                    break;
                case 2:
                    message.inputJson = reader.string();
                    break;
                case 3:
                    message.mode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartWorkflow {
        const message = { ...baseStartWorkflow } as StartWorkflow;
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        message.inputJson =
            object.inputJson !== undefined && object.inputJson !== null
                ? String(object.inputJson)
                : '';
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? startWorkflow_ModeFromJSON(object.mode)
                : 0;
        return message;
    },

    toJSON(message: StartWorkflow): unknown {
        const obj: any = {};
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        message.inputJson !== undefined && (obj.inputJson = message.inputJson);
        message.mode !== undefined && (obj.mode = startWorkflow_ModeToJSON(message.mode));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartWorkflow>, I>>(object: I): StartWorkflow {
        const message = { ...baseStartWorkflow } as StartWorkflow;
        message.workflowId = object.workflowId ?? '';
        message.inputJson = object.inputJson ?? '';
        message.mode = object.mode ?? 0;
        return message;
    },
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
