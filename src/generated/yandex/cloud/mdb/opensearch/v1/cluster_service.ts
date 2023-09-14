/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  handleServerStreamingCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ClientReadableStream,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  Cluster_Environment,
  Access,
  Resources,
  Cluster,
  Host,
  OpenSearch_GroupRole,
  cluster_EnvironmentFromJSON,
  cluster_EnvironmentToJSON,
  openSearch_GroupRoleFromJSON,
  openSearch_GroupRoleToJSON,
} from "../../../../../yandex/cloud/mdb/opensearch/v1/cluster";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/opensearch/v1/maintenance";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { AuthSettings } from "../../../../../yandex/cloud/mdb/opensearch/v1/auth";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { OpenSearchConfig2 } from "../../../../../yandex/cloud/mdb/opensearch/v1/config/opensearch";
import { Backup } from "../../../../../yandex/cloud/mdb/opensearch/v1/backup";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest";
  /**
   * ID of the OpenSearch cluster to return.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest";
  /**
   * ID of the folder to list OpenSearch clusters in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns
   * a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
   *
   * 2. An `=` operator.
   *
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
   */
  filter: string;
}

export interface ListClustersResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse";
  /** List of OpenSearch clusters. */
  clusters: Cluster[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
   * for the [ListClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest";
  /** ID of the folder to create the OpenSearch cluster in. */
  folderId: string;
  /** Name of the OpenSearch cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the OpenSearch cluster. */
  description: string;
  /**
   * Custom labels for the OpenSearch cluster as `key:value` pairs.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the OpenSearch cluster. */
  environment: Cluster_Environment;
  /** OpenSearch cluster configuration. */
  configSpec?: ConfigCreateSpec;
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups. */
  securityGroupIds: string[];
  /** ID of the service account used to access Object Storage. */
  serviceAccountId: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata";
  /** ID of the OpenSearch cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest";
  /**
   * ID of the OpenSearch cluster resource to update.
   * To get the OpenSearch cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the OpenSearch cluster resource should be updated. */
  updateMask?: FieldMask;
  /** New description of the OpenSearch cluster. */
  description: string;
  /**
   * Custom labels for the OpenSearch cluster as `key:value` pairs.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   *
   * The new set of labels completely replaces the old one. To add a label, request the current
   * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
   */
  labels: { [key: string]: string };
  /** New cluster configuration */
  configSpec?: ConfigUpdateSpec;
  /** New name for the cluster. The name must be unique within the folder. */
  name: string;
  /** User security groups */
  securityGroupIds: string[];
  /** ID of the service account used to access Object Storage. */
  serviceAccountId: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata";
  /** ID of the OpenSearch cluster resource that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest";
  /**
   * ID of the OpenSearch cluster to delete.
   * To get the OpenSearch cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata";
  /** ID of the OpenSearch cluster that is being deleted. */
  clusterId: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest";
  /**
   * ID of the OpenSearch cluster to request logs for.
   *
   * To get the OpenSearch cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from log table to request.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Start timestamp for the logs request. */
  fromTime?: Date;
  /** End timestamp for the logs request. */
  toTime?: Date;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterLogsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
  /** The service always returns a [ListClusterLogsResponse.next_page_token], even if the current page is empty. */
  alwaysNextPageToken: boolean;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname] field.
   *
   * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   *
   * 3. A value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
   *
   * Examples of a filter:
   * * `message.hostname='node1.db.cloud.yandex.net'`;
   * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
   */
  filter: string;
  /** Type of the service to request logs about. */
  serviceType: ListClusterLogsRequest_ServiceType;
}

export enum ListClusterLogsRequest_ServiceType {
  /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** OPENSEARCH - OpenSearch logs. */
  OPENSEARCH = 1,
  /** DASHBOARDS - Dashboards logs. */
  DASHBOARDS = 2,
  UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(
  object: any
): ListClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "OPENSEARCH":
      return ListClusterLogsRequest_ServiceType.OPENSEARCH;
    case 2:
    case "DASHBOARDS":
      return ListClusterLogsRequest_ServiceType.DASHBOARDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListClusterLogsRequest_ServiceType.UNRECOGNIZED;
  }
}

export function listClusterLogsRequest_ServiceTypeToJSON(
  object: ListClusterLogsRequest_ServiceType
): string {
  switch (object) {
    case ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
      return "SERVICE_TYPE_UNSPECIFIED";
    case ListClusterLogsRequest_ServiceType.OPENSEARCH:
      return "OPENSEARCH";
    case ListClusterLogsRequest_ServiceType.DASHBOARDS:
      return "DASHBOARDS";
    default:
      return "UNKNOWN";
  }
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord";
  /** Time when the log was recorded. */
  timestamp?: Date;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse";
  /** Requested log records. */
  logs: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   *
   * This value is interchangeable with the [StreamLogRecord.next_record_token] from [StreamLogs] method.
   */
  nextPageToken: string;
}

export interface StreamLogRecord {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord";
  /** One of the requested log records. */
  record?: LogRecord;
  /**
   * This token allows you to continue streaming logs starting from the exact same record.
   *
   * To do that, specify value of [next_record_token] as the value for [StreamLogs.record_token] parameter in the next [StreamLogs] request.
   *
   * This value is interchangeable with [ListLogs.next_page_token] from [ListLogs] method.
   */
  nextRecordToken: string;
}

export interface StreamClusterLogsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest";
  /** ID of the OpenSearch cluster. */
  clusterId: string;
  /**
   * Columns from log table to get in the response.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Start timestamp for the logs request. */
  fromTime?: Date;
  /**
   * End timestamp for the logs request.
   *
   * If this field is not set, all existing logs are sent as well as the new ones as they appear.
   *
   * In essence it has `tail -f` semantics.
   */
  toTime?: Date;
  /**
   * Record token. Set `record_token` to the `next_record_token` returned by the previous [StreamLogs]
   * request to start streaming from the next log record.
   */
  recordToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname] field.
   *
   * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   *
   * 3. A value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
   *
   * Examples of a filter:
   * * `message.hostname='node1.db.cloud.yandex.net'`;
   * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
   */
  filter: string;
  /** Type of the service to request logs about. */
  serviceType: StreamClusterLogsRequest_ServiceType;
}

export enum StreamClusterLogsRequest_ServiceType {
  /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** OPENSEARCH - OpenSearch logs. */
  OPENSEARCH = 1,
  /** DASHBOARDS - Dashboards logs. */
  DASHBOARDS = 2,
  UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(
  object: any
): StreamClusterLogsRequest_ServiceType {
  switch (object) {
    case 0:
    case "SERVICE_TYPE_UNSPECIFIED":
      return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
    case 1:
    case "OPENSEARCH":
      return StreamClusterLogsRequest_ServiceType.OPENSEARCH;
    case 2:
    case "DASHBOARDS":
      return StreamClusterLogsRequest_ServiceType.DASHBOARDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamClusterLogsRequest_ServiceType.UNRECOGNIZED;
  }
}

export function streamClusterLogsRequest_ServiceTypeToJSON(
  object: StreamClusterLogsRequest_ServiceType
): string {
  switch (object) {
    case StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
      return "SERVICE_TYPE_UNSPECIFIED";
    case StreamClusterLogsRequest_ServiceType.OPENSEARCH:
      return "OPENSEARCH";
    case StreamClusterLogsRequest_ServiceType.DASHBOARDS:
      return "DASHBOARDS";
    default:
      return "UNKNOWN";
  }
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest";
  /** ID of the OpenSearch cluster resource to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns
   * a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified OpenSearch cluster. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterHostsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest";
  /**
   * ID of the OpenSearch cluster.
   * To get the OpenSearch cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns
   * a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterHostsResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse";
  /** Requested list of hosts for the cluster. */
  hosts: Host[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token]
   * as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MoveClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest";
  /** ID of the OpenSearch cluster to move. */
  clusterId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata";
  /** ID of the OpenSearch cluster being moved. */
  clusterId: string;
  /** ID of the source folder. */
  sourceFolderId: string;
  /** ID of the destnation folder. */
  destinationFolderId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest";
  /**
   * ID of the OpenSearch cluster to start.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata";
  /** ID of the OpenSearch cluster being started. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest";
  /**
   * ID of the OpenSearch cluster to stop.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata";
  /** ID of the OpenSearch cluster being stopped. */
  clusterId: string;
}

export interface ConfigCreateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec";
  /** OpenSearch version. */
  version: string;
  /** OpenSearch admin password. */
  adminPassword: string;
  /** OpenSearch configuration. */
  opensearchSpec?: OpenSearchCreateSpec;
  /** Dashboards configuration. */
  dashboardsSpec?: DashboardsCreateSpec;
  /** Access policy for external services. */
  access?: Access;
}

/** OpenSearch create-time configuration. */
export interface OpenSearchCreateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec";
  /** Names of the cluster plugins. */
  plugins: string[];
  /** OpenSearch type host groups of the cluster. */
  nodeGroups: OpenSearchCreateSpec_NodeGroup[];
  opensearchConfig2?: OpenSearchConfig2 | undefined;
}

/** Configuration of the host group. */
export interface OpenSearchCreateSpec_NodeGroup {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup";
  /** Name of the group. */
  name: string;
  /** Resources allocated to the hosts. */
  resources?: Resources;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones the hosts belong to. */
  zoneIds: string[];
  /** IDs of the subnets that the hosts belong to. */
  subnetIds: string[];
  /** Determines whether a public IP is assigned to the hosts in the group. */
  assignPublicIp: boolean;
  /** Roles of the hosts in the group. */
  roles: OpenSearch_GroupRole[];
}

/** Dashboards create-time configuration. */
export interface DashboardsCreateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec";
  /** Dashboards type host groups of the cluster. */
  nodeGroups: DashboardsCreateSpec_NodeGroup[];
}

export interface DashboardsCreateSpec_NodeGroup {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup";
  /** Name of the group. */
  name: string;
  /** Resources allocated to the hosts. */
  resources?: Resources;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones the hosts belong to. */
  zoneIds: string[];
  /** IDs of the subnets that the hosts belong to. */
  subnetIds: string[];
  /** Determines whether a public IP is assigned to the hosts in the group. */
  assignPublicIp: boolean;
}

export interface ConfigUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec";
  /** OpenSearch version. */
  version: string;
  /** OpenSearch admin password. */
  adminPassword: string;
  /** OpenSearch configuration. */
  opensearchSpec?: OpenSearchClusterUpdateSpec;
  /** Dashboards configuration. */
  dashboardsSpec?: DashboardsClusterUpdateSpec;
  /** Access policy for external services. */
  access?: Access;
}

export interface OpenSearchClusterUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec";
  /** Names of the cluster plugins. */
  plugins: string[];
  opensearchConfig2?: OpenSearchConfig2 | undefined;
}

/** Dashboards configuration. */
export interface DashboardsClusterUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec";
}

export interface BackupClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest";
  /**
   * ID of the OpenSearch cluster to back up.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface BackupClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata";
  /** ID of the OpenSearch cluster being backed up. */
  clusterId: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest";
  /**
   * ID of the backup to create a new cluster from.
   *
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /** Name of the new OpenSearch cluster to be created from the backup. The name must be unique within the folder. */
  name: string;
  /** Description of the new OpenSearch cluster to be created from the backup. */
  description: string;
  /**
   * Custom labels for the new OpenSearch cluster to be created from the backup as `key:value` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the new OpenSearch cluster to be created from the backup. */
  environment: Cluster_Environment;
  /** Configuration for the new OpenSearch cluster to be created from the backup. */
  configSpec?: ConfigCreateSpec;
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups. */
  securityGroupIds: string[];
  /** ID of the service account used to access Object Storage. */
  serviceAccountId: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /**
   * ID of the folder to create the OpenSearch cluster in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow;
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata";
  /** ID of the new OpenSearch cluster being created from a backup. */
  clusterId: string;
  /** ID of the backup being used for creating a cluster. */
  backupId: string;
}

export interface RescheduleMaintenanceRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest";
  /**
   * ID of the OpenSearch cluster to reschedule the maintenance operation for.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** The type of the reschedule request. */
  rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
  /**
   * The time until which this maintenance operation should be delayed.
   * The value should be ahead of the first time when the maintenance operation has been scheduled for no more than two weeks.
   * The value can also point to a moment in the past if [reschedule_type.IMMEDIATE] reschedule type is selected.
   */
  delayedUntil?: Date;
}

export enum RescheduleMaintenanceRequest_RescheduleType {
  /** RESCHEDULE_TYPE_UNSPECIFIED - Time of the maintenance is not specified.. */
  RESCHEDULE_TYPE_UNSPECIFIED = 0,
  /** IMMEDIATE - Start the maintenance operation immediately. */
  IMMEDIATE = 1,
  /** NEXT_AVAILABLE_WINDOW - Start the maintenance operation within the next available maintenance window. */
  NEXT_AVAILABLE_WINDOW = 2,
  /** SPECIFIC_TIME - Start the maintenance operation at the specific time. */
  SPECIFIC_TIME = 3,
  UNRECOGNIZED = -1,
}

export function rescheduleMaintenanceRequest_RescheduleTypeFromJSON(
  object: any
): RescheduleMaintenanceRequest_RescheduleType {
  switch (object) {
    case 0:
    case "RESCHEDULE_TYPE_UNSPECIFIED":
      return RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED;
    case 1:
    case "IMMEDIATE":
      return RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE;
    case 2:
    case "NEXT_AVAILABLE_WINDOW":
      return RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW;
    case 3:
    case "SPECIFIC_TIME":
      return RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RescheduleMaintenanceRequest_RescheduleType.UNRECOGNIZED;
  }
}

export function rescheduleMaintenanceRequest_RescheduleTypeToJSON(
  object: RescheduleMaintenanceRequest_RescheduleType
): string {
  switch (object) {
    case RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED:
      return "RESCHEDULE_TYPE_UNSPECIFIED";
    case RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE:
      return "IMMEDIATE";
    case RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW:
      return "NEXT_AVAILABLE_WINDOW";
    case RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME:
      return "SPECIFIC_TIME";
    default:
      return "UNKNOWN";
  }
}

export interface RescheduleMaintenanceMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata";
  /** ID of the OpenSearch cluster where the reschedule is applied. */
  clusterId: string;
  /** The time until which this maintenance operation is to be delayed. */
  delayedUntil?: Date;
}

export interface ListClusterBackupsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest";
  /**
   * ID of the OpenSearch cluster.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListClusterBackupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the [ListClusterBackupsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse";
  /** List of the OpenSearch cluster backups. */
  backups: Backup[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
   * for the [ListClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteOpenSearchNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to delete the OpenSearch type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the OpenSearch type host group to delete. */
  name: string;
}

export interface UpdateOpenSearchNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to update the OpenSearch type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the OpenSearch type host group to be updated. */
  name: string;
  /** Field mask that specifies which fields of the host group configuration should be updated. */
  updateMask?: FieldMask;
  /** New configuration for the host group. */
  nodeGroupSpec?: OpenSearchNodeGroupUpdateSpec;
}

export interface OpenSearchNodeGroupUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec";
  /** Resources allocated to the hosts. */
  resources?: Resources;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** Roles of the host group. */
  roles: OpenSearch_GroupRole[];
}

export interface AddOpenSearchNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to create the OpenSearch type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the new host group. */
  nodeGroupSpec?: OpenSearchCreateSpec_NodeGroup;
}

export interface DeleteDashboardsNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to delete the Dashboards type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the Dashboards type host group to delete. */
  name: string;
}

export interface UpdateDashboardsNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest";
  /** ID of the OpenSearch cluster to update the Dashboards type host group in. */
  clusterId: string;
  /** Name of the Dashboards type host group to be updated. */
  name: string;
  /** Field mask that specifies which fields of the host group configuration should be updated. */
  updateMask?: FieldMask;
  /** New configuration for the host group. */
  nodeGroupSpec?: DashboardsNodeGroupUpdateSpec;
}

export interface DashboardsNodeGroupUpdateSpec {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec";
  /** Resources allocated to the hosts. */
  resources?: Resources;
  /** Number of hosts in the group. */
  hostsCount: number;
}

export interface AddDashboardsNodeGroupRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest";
  /**
   * ID of the OpenSearch cluster to create the Dashboards type host group in.
   *
   * To get the ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the new host group. */
  nodeGroupSpec?: DashboardsCreateSpec_NodeGroup;
}

export interface AddNodeGroupMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata";
  /** ID of the OpenSearch cluster where the host group is being created. */
  clusterId: string;
  /** Name of the host group being created. */
  name: string;
}

export interface UpdateNodeGroupMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata";
  /** ID of the OpenSearch cluster where the host group is being updated. */
  clusterId: string;
  /** Name of the host group being updated. */
  name: string;
}

export interface DeleteNodeGroupMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata";
  /** ID of the OpenSearch cluster where the host group is being deleted. */
  clusterId: string;
  /** Name of the host group being deleted. */
  name: string;
}

export interface GetAuthSettingsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest";
  /** Required. ID of the OpenSearch cluster. */
  clusterId: string;
}

export interface UpdateAuthSettingsRequest {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest";
  /** Required. ID of the OpenSearch cluster. */
  clusterId: string;
  /** Required. Auth settings. */
  settings?: AuthSettings;
}

export interface UpdateAuthSettingsMetadata {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata";
  /** ID of the OpenSearch cluster. */
  clusterId: string;
}

const baseGetClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest",
  clusterId: "",
};

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest" as const,

  encode(
    message: GetClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetClusterRequest } as GetClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetClusterRequest {
    const message = { ...baseGetClusterRequest } as GetClusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: GetClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetClusterRequest>, I>>(
    object: I
  ): GetClusterRequest {
    const message = { ...baseGetClusterRequest } as GetClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetClusterRequest.$type, GetClusterRequest);

const baseListClustersRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest" as const,

  encode(
    message: ListClustersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListClustersRequest } as ListClustersRequest;
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

  fromJSON(object: any): ListClustersRequest {
    const message = { ...baseListClustersRequest } as ListClustersRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListClustersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClustersRequest>, I>>(
    object: I
  ): ListClustersRequest {
    const message = { ...baseListClustersRequest } as ListClustersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClustersRequest.$type, ListClustersRequest);

const baseListClustersResponse: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse",
  nextPageToken: "",
};

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse" as const,

  encode(
    message: ListClustersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.clusters) {
      Cluster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClustersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListClustersResponse } as ListClustersResponse;
    message.clusters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusters.push(Cluster.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClustersResponse {
    const message = { ...baseListClustersResponse } as ListClustersResponse;
    message.clusters = (object.clusters ?? []).map((e: any) =>
      Cluster.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClustersResponse): unknown {
    const obj: any = {};
    if (message.clusters) {
      obj.clusters = message.clusters.map((e) =>
        e ? Cluster.toJSON(e) : undefined
      );
    } else {
      obj.clusters = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClustersResponse>, I>>(
    object: I
  ): ListClustersResponse {
    const message = { ...baseListClustersResponse } as ListClustersResponse;
    message.clusters =
      object.clusters?.map((e) => Cluster.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClustersResponse.$type, ListClustersResponse);

const baseCreateClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  securityGroupIds: "",
  serviceAccountId: "",
  deletionProtection: false,
};

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest" as const,

  encode(
    message: CreateClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateClusterRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(40).int32(message.environment);
    }
    if (message.configSpec !== undefined) {
      ConfigCreateSpec.encode(
        message.configSpec,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.deletionProtection === true) {
      writer.uint32(80).bool(message.deletionProtection);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
    message.labels = {};
    message.securityGroupIds = [];
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
          message.description = reader.string();
          break;
        case 4:
          const entry4 = CreateClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.environment = reader.int32() as any;
          break;
        case 6:
          message.configSpec = ConfigCreateSpec.decode(reader, reader.uint32());
          break;
        case 7:
          message.networkId = reader.string();
          break;
        case 8:
          message.securityGroupIds.push(reader.string());
          break;
        case 9:
          message.serviceAccountId = reader.string();
          break;
        case 10:
          message.deletionProtection = reader.bool();
          break;
        case 11:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateClusterRequest {
    const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.environment =
      object.environment !== undefined && object.environment !== null
        ? cluster_EnvironmentFromJSON(object.environment)
        : 0;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigCreateSpec.fromJSON(object.configSpec)
        : undefined;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined;
    return message;
  },

  toJSON(message: CreateClusterRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.environment !== undefined &&
      (obj.environment = cluster_EnvironmentToJSON(message.environment));
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ConfigCreateSpec.toJSON(message.configSpec)
        : undefined);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    message.maintenanceWindow !== undefined &&
      (obj.maintenanceWindow = message.maintenanceWindow
        ? MaintenanceWindow.toJSON(message.maintenanceWindow)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateClusterRequest>, I>>(
    object: I
  ): CreateClusterRequest {
    const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.environment = object.environment ?? 0;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigCreateSpec.fromPartial(object.configSpec)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

const baseCreateClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry" as const,

  encode(
    message: CreateClusterRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateClusterRequest_LabelsEntry,
    } as CreateClusterRequest_LabelsEntry;
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

  fromJSON(object: any): CreateClusterRequest_LabelsEntry {
    const message = {
      ...baseCreateClusterRequest_LabelsEntry,
    } as CreateClusterRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateClusterRequest_LabelsEntry>, I>
  >(object: I): CreateClusterRequest_LabelsEntry {
    const message = {
      ...baseCreateClusterRequest_LabelsEntry,
    } as CreateClusterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateClusterRequest_LabelsEntry.$type,
  CreateClusterRequest_LabelsEntry
);

const baseCreateClusterMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata",
  clusterId: "",
};

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata" as const,

  encode(
    message: CreateClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateClusterMetadata } as CreateClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateClusterMetadata {
    const message = { ...baseCreateClusterMetadata } as CreateClusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: CreateClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateClusterMetadata>, I>>(
    object: I
  ): CreateClusterMetadata {
    const message = { ...baseCreateClusterMetadata } as CreateClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterMetadata.$type, CreateClusterMetadata);

const baseUpdateClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest",
  clusterId: "",
  description: "",
  name: "",
  securityGroupIds: "",
  serviceAccountId: "",
  deletionProtection: false,
};

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest" as const,

  encode(
    message: UpdateClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateClusterRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.configSpec !== undefined) {
      ConfigUpdateSpec.encode(
        message.configSpec,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(58).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(66).string(message.serviceAccountId);
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
    message.labels = {};
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = UpdateClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.configSpec = ConfigUpdateSpec.decode(reader, reader.uint32());
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.securityGroupIds.push(reader.string());
          break;
        case 8:
          message.serviceAccountId = reader.string();
          break;
        case 9:
          message.deletionProtection = reader.bool();
          break;
        case 10:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterRequest {
    const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigUpdateSpec.fromJSON(object.configSpec)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined;
    return message;
  },

  toJSON(message: UpdateClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ConfigUpdateSpec.toJSON(message.configSpec)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    message.maintenanceWindow !== undefined &&
      (obj.maintenanceWindow = message.maintenanceWindow
        ? MaintenanceWindow.toJSON(message.maintenanceWindow)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest>, I>>(
    object: I
  ): UpdateClusterRequest {
    const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
    message.clusterId = object.clusterId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigUpdateSpec.fromPartial(object.configSpec)
        : undefined;
    message.name = object.name ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

const baseUpdateClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry" as const,

  encode(
    message: UpdateClusterRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterRequest_LabelsEntry,
    } as UpdateClusterRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateClusterRequest_LabelsEntry {
    const message = {
      ...baseUpdateClusterRequest_LabelsEntry,
    } as UpdateClusterRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateClusterRequest_LabelsEntry>, I>
  >(object: I): UpdateClusterRequest_LabelsEntry {
    const message = {
      ...baseUpdateClusterRequest_LabelsEntry,
    } as UpdateClusterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterRequest_LabelsEntry.$type,
  UpdateClusterRequest_LabelsEntry
);

const baseUpdateClusterMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata",
  clusterId: "",
};

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata" as const,

  encode(
    message: UpdateClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateClusterMetadata } as UpdateClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterMetadata {
    const message = { ...baseUpdateClusterMetadata } as UpdateClusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: UpdateClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterMetadata>, I>>(
    object: I
  ): UpdateClusterMetadata {
    const message = { ...baseUpdateClusterMetadata } as UpdateClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterMetadata.$type, UpdateClusterMetadata);

const baseDeleteClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest",
  clusterId: "",
};

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest" as const,

  encode(
    message: DeleteClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterRequest {
    const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: DeleteClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(
    object: I
  ): DeleteClusterRequest {
    const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterRequest.$type, DeleteClusterRequest);

const baseDeleteClusterMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata",
  clusterId: "",
};

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata" as const,

  encode(
    message: DeleteClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteClusterMetadata } as DeleteClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterMetadata {
    const message = { ...baseDeleteClusterMetadata } as DeleteClusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: DeleteClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterMetadata>, I>>(
    object: I
  ): DeleteClusterMetadata {
    const message = { ...baseDeleteClusterMetadata } as DeleteClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterMetadata.$type, DeleteClusterMetadata);

const baseListClusterLogsRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest",
  clusterId: "",
  columnFilter: "",
  pageSize: 0,
  pageToken: "",
  alwaysNextPageToken: false,
  filter: "",
  serviceType: 0,
};

export const ListClusterLogsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest" as const,

  encode(
    message: ListClusterLogsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.columnFilter) {
      writer.uint32(18).string(v!);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.fromTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.toTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(40).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(50).string(message.pageToken);
    }
    if (message.alwaysNextPageToken === true) {
      writer.uint32(56).bool(message.alwaysNextPageToken);
    }
    if (message.filter !== "") {
      writer.uint32(66).string(message.filter);
    }
    if (message.serviceType !== 0) {
      writer.uint32(72).int32(message.serviceType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListClusterLogsRequest } as ListClusterLogsRequest;
    message.columnFilter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.columnFilter.push(reader.string());
          break;
        case 3:
          message.fromTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.toTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.pageToken = reader.string();
          break;
        case 7:
          message.alwaysNextPageToken = reader.bool();
          break;
        case 8:
          message.filter = reader.string();
          break;
        case 9:
          message.serviceType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListClusterLogsRequest {
    const message = { ...baseListClusterLogsRequest } as ListClusterLogsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.columnFilter = (object.columnFilter ?? []).map((e: any) =>
      String(e)
    );
    message.fromTime =
      object.fromTime !== undefined && object.fromTime !== null
        ? fromJsonTimestamp(object.fromTime)
        : undefined;
    message.toTime =
      object.toTime !== undefined && object.toTime !== null
        ? fromJsonTimestamp(object.toTime)
        : undefined;
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.alwaysNextPageToken =
      object.alwaysNextPageToken !== undefined &&
      object.alwaysNextPageToken !== null
        ? Boolean(object.alwaysNextPageToken)
        : false;
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    message.serviceType =
      object.serviceType !== undefined && object.serviceType !== null
        ? listClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
        : 0;
    return message;
  },

  toJSON(message: ListClusterLogsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.columnFilter) {
      obj.columnFilter = message.columnFilter.map((e) => e);
    } else {
      obj.columnFilter = [];
    }
    message.fromTime !== undefined &&
      (obj.fromTime = message.fromTime.toISOString());
    message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.alwaysNextPageToken !== undefined &&
      (obj.alwaysNextPageToken = message.alwaysNextPageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.serviceType !== undefined &&
      (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(
        message.serviceType
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterLogsRequest>, I>>(
    object: I
  ): ListClusterLogsRequest {
    const message = { ...baseListClusterLogsRequest } as ListClusterLogsRequest;
    message.clusterId = object.clusterId ?? "";
    message.columnFilter = object.columnFilter?.map((e) => e) || [];
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.alwaysNextPageToken = object.alwaysNextPageToken ?? false;
    message.filter = object.filter ?? "";
    message.serviceType = object.serviceType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsRequest.$type, ListClusterLogsRequest);

const baseLogRecord: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord",
};

export const LogRecord = {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord" as const,

  encode(
    message: LogRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    Object.entries(message.message).forEach(([key, value]) => {
      LogRecord_MessageEntry.encode(
        {
          $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry",
          key: key as any,
          value,
        },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogRecord } as LogRecord;
    message.message = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          const entry2 = LogRecord_MessageEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.message[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogRecord {
    const message = { ...baseLogRecord } as LogRecord;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    message.message = Object.entries(object.message ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: LogRecord): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    obj.message = {};
    if (message.message) {
      Object.entries(message.message).forEach(([k, v]) => {
        obj.message[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogRecord>, I>>(
    object: I
  ): LogRecord {
    const message = { ...baseLogRecord } as LogRecord;
    message.timestamp = object.timestamp ?? undefined;
    message.message = Object.entries(object.message ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(LogRecord.$type, LogRecord);

const baseLogRecord_MessageEntry: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry",
  key: "",
  value: "",
};

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry" as const,

  encode(
    message: LogRecord_MessageEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LogRecord_MessageEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogRecord_MessageEntry } as LogRecord_MessageEntry;
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

  fromJSON(object: any): LogRecord_MessageEntry {
    const message = { ...baseLogRecord_MessageEntry } as LogRecord_MessageEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: LogRecord_MessageEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogRecord_MessageEntry>, I>>(
    object: I
  ): LogRecord_MessageEntry {
    const message = { ...baseLogRecord_MessageEntry } as LogRecord_MessageEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(LogRecord_MessageEntry.$type, LogRecord_MessageEntry);

const baseListClusterLogsResponse: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse",
  nextPageToken: "",
};

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse" as const,

  encode(
    message: ListClusterLogsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.logs) {
      LogRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterLogsResponse,
    } as ListClusterLogsResponse;
    message.logs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(LogRecord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterLogsResponse {
    const message = {
      ...baseListClusterLogsResponse,
    } as ListClusterLogsResponse;
    message.logs = (object.logs ?? []).map((e: any) => LogRecord.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterLogsResponse): unknown {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? LogRecord.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterLogsResponse>, I>>(
    object: I
  ): ListClusterLogsResponse {
    const message = {
      ...baseListClusterLogsResponse,
    } as ListClusterLogsResponse;
    message.logs = object.logs?.map((e) => LogRecord.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsResponse.$type, ListClusterLogsResponse);

const baseStreamLogRecord: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord",
  nextRecordToken: "",
};

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord" as const,

  encode(
    message: StreamLogRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.record !== undefined) {
      LogRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextRecordToken !== "") {
      writer.uint32(18).string(message.nextRecordToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamLogRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamLogRecord } as StreamLogRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = LogRecord.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextRecordToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamLogRecord {
    const message = { ...baseStreamLogRecord } as StreamLogRecord;
    message.record =
      object.record !== undefined && object.record !== null
        ? LogRecord.fromJSON(object.record)
        : undefined;
    message.nextRecordToken =
      object.nextRecordToken !== undefined && object.nextRecordToken !== null
        ? String(object.nextRecordToken)
        : "";
    return message;
  },

  toJSON(message: StreamLogRecord): unknown {
    const obj: any = {};
    message.record !== undefined &&
      (obj.record = message.record
        ? LogRecord.toJSON(message.record)
        : undefined);
    message.nextRecordToken !== undefined &&
      (obj.nextRecordToken = message.nextRecordToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamLogRecord>, I>>(
    object: I
  ): StreamLogRecord {
    const message = { ...baseStreamLogRecord } as StreamLogRecord;
    message.record =
      object.record !== undefined && object.record !== null
        ? LogRecord.fromPartial(object.record)
        : undefined;
    message.nextRecordToken = object.nextRecordToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(StreamLogRecord.$type, StreamLogRecord);

const baseStreamClusterLogsRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest",
  clusterId: "",
  columnFilter: "",
  recordToken: "",
  filter: "",
  serviceType: 0,
};

export const StreamClusterLogsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest" as const,

  encode(
    message: StreamClusterLogsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.columnFilter) {
      writer.uint32(18).string(v!);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.fromTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.toTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.recordToken !== "") {
      writer.uint32(42).string(message.recordToken);
    }
    if (message.filter !== "") {
      writer.uint32(50).string(message.filter);
    }
    if (message.serviceType !== 0) {
      writer.uint32(56).int32(message.serviceType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StreamClusterLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStreamClusterLogsRequest,
    } as StreamClusterLogsRequest;
    message.columnFilter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.columnFilter.push(reader.string());
          break;
        case 3:
          message.fromTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.toTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.recordToken = reader.string();
          break;
        case 6:
          message.filter = reader.string();
          break;
        case 7:
          message.serviceType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamClusterLogsRequest {
    const message = {
      ...baseStreamClusterLogsRequest,
    } as StreamClusterLogsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.columnFilter = (object.columnFilter ?? []).map((e: any) =>
      String(e)
    );
    message.fromTime =
      object.fromTime !== undefined && object.fromTime !== null
        ? fromJsonTimestamp(object.fromTime)
        : undefined;
    message.toTime =
      object.toTime !== undefined && object.toTime !== null
        ? fromJsonTimestamp(object.toTime)
        : undefined;
    message.recordToken =
      object.recordToken !== undefined && object.recordToken !== null
        ? String(object.recordToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    message.serviceType =
      object.serviceType !== undefined && object.serviceType !== null
        ? streamClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
        : 0;
    return message;
  },

  toJSON(message: StreamClusterLogsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.columnFilter) {
      obj.columnFilter = message.columnFilter.map((e) => e);
    } else {
      obj.columnFilter = [];
    }
    message.fromTime !== undefined &&
      (obj.fromTime = message.fromTime.toISOString());
    message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
    message.recordToken !== undefined &&
      (obj.recordToken = message.recordToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.serviceType !== undefined &&
      (obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(
        message.serviceType
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamClusterLogsRequest>, I>>(
    object: I
  ): StreamClusterLogsRequest {
    const message = {
      ...baseStreamClusterLogsRequest,
    } as StreamClusterLogsRequest;
    message.clusterId = object.clusterId ?? "";
    message.columnFilter = object.columnFilter?.map((e) => e) || [];
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.recordToken = object.recordToken ?? "";
    message.filter = object.filter ?? "";
    message.serviceType = object.serviceType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  StreamClusterLogsRequest.$type,
  StreamClusterLogsRequest
);

const baseListClusterOperationsRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest" as const,

  encode(
    message: ListClusterOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterOperationsRequest,
    } as ListClusterOperationsRequest;
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

  fromJSON(object: any): ListClusterOperationsRequest {
    const message = {
      ...baseListClusterOperationsRequest,
    } as ListClusterOperationsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterOperationsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterOperationsRequest>, I>>(
    object: I
  ): ListClusterOperationsRequest {
    const message = {
      ...baseListClusterOperationsRequest,
    } as ListClusterOperationsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterOperationsRequest.$type,
  ListClusterOperationsRequest
);

const baseListClusterOperationsResponse: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse",
  nextPageToken: "",
};

export const ListClusterOperationsResponse = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse" as const,

  encode(
    message: ListClusterOperationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterOperationsResponse,
    } as ListClusterOperationsResponse;
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

  fromJSON(object: any): ListClusterOperationsResponse {
    const message = {
      ...baseListClusterOperationsResponse,
    } as ListClusterOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterOperationsResponse>, I>>(
    object: I
  ): ListClusterOperationsResponse {
    const message = {
      ...baseListClusterOperationsResponse,
    } as ListClusterOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterOperationsResponse.$type,
  ListClusterOperationsResponse
);

const baseListClusterHostsRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest" as const,

  encode(
    message: ListClusterHostsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterHostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterHostsRequest,
    } as ListClusterHostsRequest;
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

  fromJSON(object: any): ListClusterHostsRequest {
    const message = {
      ...baseListClusterHostsRequest,
    } as ListClusterHostsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterHostsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterHostsRequest>, I>>(
    object: I
  ): ListClusterHostsRequest {
    const message = {
      ...baseListClusterHostsRequest,
    } as ListClusterHostsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterHostsRequest.$type, ListClusterHostsRequest);

const baseListClusterHostsResponse: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse",
  nextPageToken: "",
};

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse" as const,

  encode(
    message: ListClusterHostsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.hosts) {
      Host.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterHostsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterHostsResponse,
    } as ListClusterHostsResponse;
    message.hosts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hosts.push(Host.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterHostsResponse {
    const message = {
      ...baseListClusterHostsResponse,
    } as ListClusterHostsResponse;
    message.hosts = (object.hosts ?? []).map((e: any) => Host.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterHostsResponse): unknown {
    const obj: any = {};
    if (message.hosts) {
      obj.hosts = message.hosts.map((e) => (e ? Host.toJSON(e) : undefined));
    } else {
      obj.hosts = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterHostsResponse>, I>>(
    object: I
  ): ListClusterHostsResponse {
    const message = {
      ...baseListClusterHostsResponse,
    } as ListClusterHostsResponse;
    message.hosts = object.hosts?.map((e) => Host.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterHostsResponse.$type,
  ListClusterHostsResponse
);

const baseMoveClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest",
  clusterId: "",
  destinationFolderId: "",
};

export const MoveClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest" as const,

  encode(
    message: MoveClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(18).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveClusterRequest } as MoveClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.destinationFolderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveClusterRequest {
    const message = { ...baseMoveClusterRequest } as MoveClusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveClusterRequest>, I>>(
    object: I
  ): MoveClusterRequest {
    const message = { ...baseMoveClusterRequest } as MoveClusterRequest;
    message.clusterId = object.clusterId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveClusterRequest.$type, MoveClusterRequest);

const baseMoveClusterMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata",
  clusterId: "",
  sourceFolderId: "",
  destinationFolderId: "",
};

export const MoveClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata" as const,

  encode(
    message: MoveClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.sourceFolderId !== "") {
      writer.uint32(18).string(message.sourceFolderId);
    }
    if (message.destinationFolderId !== "") {
      writer.uint32(26).string(message.destinationFolderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMoveClusterMetadata } as MoveClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.sourceFolderId = reader.string();
          break;
        case 3:
          message.destinationFolderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveClusterMetadata {
    const message = { ...baseMoveClusterMetadata } as MoveClusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.sourceFolderId =
      object.sourceFolderId !== undefined && object.sourceFolderId !== null
        ? String(object.sourceFolderId)
        : "";
    message.destinationFolderId =
      object.destinationFolderId !== undefined &&
      object.destinationFolderId !== null
        ? String(object.destinationFolderId)
        : "";
    return message;
  },

  toJSON(message: MoveClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.sourceFolderId !== undefined &&
      (obj.sourceFolderId = message.sourceFolderId);
    message.destinationFolderId !== undefined &&
      (obj.destinationFolderId = message.destinationFolderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MoveClusterMetadata>, I>>(
    object: I
  ): MoveClusterMetadata {
    const message = { ...baseMoveClusterMetadata } as MoveClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    message.sourceFolderId = object.sourceFolderId ?? "";
    message.destinationFolderId = object.destinationFolderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MoveClusterMetadata.$type, MoveClusterMetadata);

const baseStartClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest",
  clusterId: "",
};

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest" as const,

  encode(
    message: StartClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStartClusterRequest } as StartClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartClusterRequest {
    const message = { ...baseStartClusterRequest } as StartClusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: StartClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartClusterRequest>, I>>(
    object: I
  ): StartClusterRequest {
    const message = { ...baseStartClusterRequest } as StartClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterRequest.$type, StartClusterRequest);

const baseStartClusterMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata",
  clusterId: "",
};

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata" as const,

  encode(
    message: StartClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartClusterMetadata {
    const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: StartClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartClusterMetadata>, I>>(
    object: I
  ): StartClusterMetadata {
    const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterMetadata.$type, StartClusterMetadata);

const baseStopClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest",
  clusterId: "",
};

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest" as const,

  encode(
    message: StopClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopClusterRequest } as StopClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopClusterRequest {
    const message = { ...baseStopClusterRequest } as StopClusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: StopClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopClusterRequest>, I>>(
    object: I
  ): StopClusterRequest {
    const message = { ...baseStopClusterRequest } as StopClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopClusterRequest.$type, StopClusterRequest);

const baseStopClusterMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata",
  clusterId: "",
};

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata" as const,

  encode(
    message: StopClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopClusterMetadata {
    const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: StopClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopClusterMetadata>, I>>(
    object: I
  ): StopClusterMetadata {
    const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopClusterMetadata.$type, StopClusterMetadata);

const baseConfigCreateSpec: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec",
  version: "",
  adminPassword: "",
};

export const ConfigCreateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec" as const,

  encode(
    message: ConfigCreateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.adminPassword !== "") {
      writer.uint32(18).string(message.adminPassword);
    }
    if (message.opensearchSpec !== undefined) {
      OpenSearchCreateSpec.encode(
        message.opensearchSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.dashboardsSpec !== undefined) {
      DashboardsCreateSpec.encode(
        message.dashboardsSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigCreateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigCreateSpec } as ConfigCreateSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.adminPassword = reader.string();
          break;
        case 3:
          message.opensearchSpec = OpenSearchCreateSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.dashboardsSpec = DashboardsCreateSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.access = Access.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigCreateSpec {
    const message = { ...baseConfigCreateSpec } as ConfigCreateSpec;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.adminPassword =
      object.adminPassword !== undefined && object.adminPassword !== null
        ? String(object.adminPassword)
        : "";
    message.opensearchSpec =
      object.opensearchSpec !== undefined && object.opensearchSpec !== null
        ? OpenSearchCreateSpec.fromJSON(object.opensearchSpec)
        : undefined;
    message.dashboardsSpec =
      object.dashboardsSpec !== undefined && object.dashboardsSpec !== null
        ? DashboardsCreateSpec.fromJSON(object.dashboardsSpec)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromJSON(object.access)
        : undefined;
    return message;
  },

  toJSON(message: ConfigCreateSpec): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.adminPassword !== undefined &&
      (obj.adminPassword = message.adminPassword);
    message.opensearchSpec !== undefined &&
      (obj.opensearchSpec = message.opensearchSpec
        ? OpenSearchCreateSpec.toJSON(message.opensearchSpec)
        : undefined);
    message.dashboardsSpec !== undefined &&
      (obj.dashboardsSpec = message.dashboardsSpec
        ? DashboardsCreateSpec.toJSON(message.dashboardsSpec)
        : undefined);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigCreateSpec>, I>>(
    object: I
  ): ConfigCreateSpec {
    const message = { ...baseConfigCreateSpec } as ConfigCreateSpec;
    message.version = object.version ?? "";
    message.adminPassword = object.adminPassword ?? "";
    message.opensearchSpec =
      object.opensearchSpec !== undefined && object.opensearchSpec !== null
        ? OpenSearchCreateSpec.fromPartial(object.opensearchSpec)
        : undefined;
    message.dashboardsSpec =
      object.dashboardsSpec !== undefined && object.dashboardsSpec !== null
        ? DashboardsCreateSpec.fromPartial(object.dashboardsSpec)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigCreateSpec.$type, ConfigCreateSpec);

const baseOpenSearchCreateSpec: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec",
  plugins: "",
};

export const OpenSearchCreateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec" as const,

  encode(
    message: OpenSearchCreateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.plugins) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.nodeGroups) {
      OpenSearchCreateSpec_NodeGroup.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.opensearchConfig2 !== undefined) {
      OpenSearchConfig2.encode(
        message.opensearchConfig2,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSearchCreateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenSearchCreateSpec } as OpenSearchCreateSpec;
    message.plugins = [];
    message.nodeGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plugins.push(reader.string());
          break;
        case 2:
          message.nodeGroups.push(
            OpenSearchCreateSpec_NodeGroup.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.opensearchConfig2 = OpenSearchConfig2.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenSearchCreateSpec {
    const message = { ...baseOpenSearchCreateSpec } as OpenSearchCreateSpec;
    message.plugins = (object.plugins ?? []).map((e: any) => String(e));
    message.nodeGroups = (object.nodeGroups ?? []).map((e: any) =>
      OpenSearchCreateSpec_NodeGroup.fromJSON(e)
    );
    message.opensearchConfig2 =
      object.opensearchConfig_2 !== undefined &&
      object.opensearchConfig_2 !== null
        ? OpenSearchConfig2.fromJSON(object.opensearchConfig_2)
        : undefined;
    return message;
  },

  toJSON(message: OpenSearchCreateSpec): unknown {
    const obj: any = {};
    if (message.plugins) {
      obj.plugins = message.plugins.map((e) => e);
    } else {
      obj.plugins = [];
    }
    if (message.nodeGroups) {
      obj.nodeGroups = message.nodeGroups.map((e) =>
        e ? OpenSearchCreateSpec_NodeGroup.toJSON(e) : undefined
      );
    } else {
      obj.nodeGroups = [];
    }
    message.opensearchConfig2 !== undefined &&
      (obj.opensearchConfig_2 = message.opensearchConfig2
        ? OpenSearchConfig2.toJSON(message.opensearchConfig2)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSearchCreateSpec>, I>>(
    object: I
  ): OpenSearchCreateSpec {
    const message = { ...baseOpenSearchCreateSpec } as OpenSearchCreateSpec;
    message.plugins = object.plugins?.map((e) => e) || [];
    message.nodeGroups =
      object.nodeGroups?.map((e) =>
        OpenSearchCreateSpec_NodeGroup.fromPartial(e)
      ) || [];
    message.opensearchConfig2 =
      object.opensearchConfig2 !== undefined &&
      object.opensearchConfig2 !== null
        ? OpenSearchConfig2.fromPartial(object.opensearchConfig2)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(OpenSearchCreateSpec.$type, OpenSearchCreateSpec);

const baseOpenSearchCreateSpec_NodeGroup: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup",
  name: "",
  hostsCount: 0,
  zoneIds: "",
  subnetIds: "",
  assignPublicIp: false,
  roles: 0,
};

export const OpenSearchCreateSpec_NodeGroup = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup" as const,

  encode(
    message: OpenSearchCreateSpec_NodeGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(24).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    writer.uint32(58).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSearchCreateSpec_NodeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOpenSearchCreateSpec_NodeGroup,
    } as OpenSearchCreateSpec_NodeGroup;
    message.zoneIds = [];
    message.subnetIds = [];
    message.roles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostsCount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.zoneIds.push(reader.string());
          break;
        case 5:
          message.subnetIds.push(reader.string());
          break;
        case 6:
          message.assignPublicIp = reader.bool();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }
          } else {
            message.roles.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenSearchCreateSpec_NodeGroup {
    const message = {
      ...baseOpenSearchCreateSpec_NodeGroup,
    } as OpenSearchCreateSpec_NodeGroup;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.hostsCount =
      object.hostsCount !== undefined && object.hostsCount !== null
        ? Number(object.hostsCount)
        : 0;
    message.zoneIds = (object.zoneIds ?? []).map((e: any) => String(e));
    message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.roles = (object.roles ?? []).map((e: any) =>
      openSearch_GroupRoleFromJSON(e)
    );
    return message;
  },

  toJSON(message: OpenSearchCreateSpec_NodeGroup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.hostsCount !== undefined &&
      (obj.hostsCount = Math.round(message.hostsCount));
    if (message.zoneIds) {
      obj.zoneIds = message.zoneIds.map((e) => e);
    } else {
      obj.zoneIds = [];
    }
    if (message.subnetIds) {
      obj.subnetIds = message.subnetIds.map((e) => e);
    } else {
      obj.subnetIds = [];
    }
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    if (message.roles) {
      obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSearchCreateSpec_NodeGroup>, I>>(
    object: I
  ): OpenSearchCreateSpec_NodeGroup {
    const message = {
      ...baseOpenSearchCreateSpec_NodeGroup,
    } as OpenSearchCreateSpec_NodeGroup;
    message.name = object.name ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  OpenSearchCreateSpec_NodeGroup.$type,
  OpenSearchCreateSpec_NodeGroup
);

const baseDashboardsCreateSpec: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec",
};

export const DashboardsCreateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec" as const,

  encode(
    message: DashboardsCreateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nodeGroups) {
      DashboardsCreateSpec_NodeGroup.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashboardsCreateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashboardsCreateSpec } as DashboardsCreateSpec;
    message.nodeGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.nodeGroups.push(
            DashboardsCreateSpec_NodeGroup.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DashboardsCreateSpec {
    const message = { ...baseDashboardsCreateSpec } as DashboardsCreateSpec;
    message.nodeGroups = (object.nodeGroups ?? []).map((e: any) =>
      DashboardsCreateSpec_NodeGroup.fromJSON(e)
    );
    return message;
  },

  toJSON(message: DashboardsCreateSpec): unknown {
    const obj: any = {};
    if (message.nodeGroups) {
      obj.nodeGroups = message.nodeGroups.map((e) =>
        e ? DashboardsCreateSpec_NodeGroup.toJSON(e) : undefined
      );
    } else {
      obj.nodeGroups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DashboardsCreateSpec>, I>>(
    object: I
  ): DashboardsCreateSpec {
    const message = { ...baseDashboardsCreateSpec } as DashboardsCreateSpec;
    message.nodeGroups =
      object.nodeGroups?.map((e) =>
        DashboardsCreateSpec_NodeGroup.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(DashboardsCreateSpec.$type, DashboardsCreateSpec);

const baseDashboardsCreateSpec_NodeGroup: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup",
  name: "",
  hostsCount: 0,
  zoneIds: "",
  subnetIds: "",
  assignPublicIp: false,
};

export const DashboardsCreateSpec_NodeGroup = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup" as const,

  encode(
    message: DashboardsCreateSpec_NodeGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(24).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashboardsCreateSpec_NodeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashboardsCreateSpec_NodeGroup,
    } as DashboardsCreateSpec_NodeGroup;
    message.zoneIds = [];
    message.subnetIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostsCount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.zoneIds.push(reader.string());
          break;
        case 5:
          message.subnetIds.push(reader.string());
          break;
        case 6:
          message.assignPublicIp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DashboardsCreateSpec_NodeGroup {
    const message = {
      ...baseDashboardsCreateSpec_NodeGroup,
    } as DashboardsCreateSpec_NodeGroup;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.hostsCount =
      object.hostsCount !== undefined && object.hostsCount !== null
        ? Number(object.hostsCount)
        : 0;
    message.zoneIds = (object.zoneIds ?? []).map((e: any) => String(e));
    message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    return message;
  },

  toJSON(message: DashboardsCreateSpec_NodeGroup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.hostsCount !== undefined &&
      (obj.hostsCount = Math.round(message.hostsCount));
    if (message.zoneIds) {
      obj.zoneIds = message.zoneIds.map((e) => e);
    } else {
      obj.zoneIds = [];
    }
    if (message.subnetIds) {
      obj.subnetIds = message.subnetIds.map((e) => e);
    } else {
      obj.subnetIds = [];
    }
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DashboardsCreateSpec_NodeGroup>, I>>(
    object: I
  ): DashboardsCreateSpec_NodeGroup {
    const message = {
      ...baseDashboardsCreateSpec_NodeGroup,
    } as DashboardsCreateSpec_NodeGroup;
    message.name = object.name ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  DashboardsCreateSpec_NodeGroup.$type,
  DashboardsCreateSpec_NodeGroup
);

const baseConfigUpdateSpec: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec",
  version: "",
  adminPassword: "",
};

export const ConfigUpdateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec" as const,

  encode(
    message: ConfigUpdateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.adminPassword !== "") {
      writer.uint32(18).string(message.adminPassword);
    }
    if (message.opensearchSpec !== undefined) {
      OpenSearchClusterUpdateSpec.encode(
        message.opensearchSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.dashboardsSpec !== undefined) {
      DashboardsClusterUpdateSpec.encode(
        message.dashboardsSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigUpdateSpec } as ConfigUpdateSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.adminPassword = reader.string();
          break;
        case 3:
          message.opensearchSpec = OpenSearchClusterUpdateSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.dashboardsSpec = DashboardsClusterUpdateSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.access = Access.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigUpdateSpec {
    const message = { ...baseConfigUpdateSpec } as ConfigUpdateSpec;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.adminPassword =
      object.adminPassword !== undefined && object.adminPassword !== null
        ? String(object.adminPassword)
        : "";
    message.opensearchSpec =
      object.opensearchSpec !== undefined && object.opensearchSpec !== null
        ? OpenSearchClusterUpdateSpec.fromJSON(object.opensearchSpec)
        : undefined;
    message.dashboardsSpec =
      object.dashboardsSpec !== undefined && object.dashboardsSpec !== null
        ? DashboardsClusterUpdateSpec.fromJSON(object.dashboardsSpec)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromJSON(object.access)
        : undefined;
    return message;
  },

  toJSON(message: ConfigUpdateSpec): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.adminPassword !== undefined &&
      (obj.adminPassword = message.adminPassword);
    message.opensearchSpec !== undefined &&
      (obj.opensearchSpec = message.opensearchSpec
        ? OpenSearchClusterUpdateSpec.toJSON(message.opensearchSpec)
        : undefined);
    message.dashboardsSpec !== undefined &&
      (obj.dashboardsSpec = message.dashboardsSpec
        ? DashboardsClusterUpdateSpec.toJSON(message.dashboardsSpec)
        : undefined);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigUpdateSpec>, I>>(
    object: I
  ): ConfigUpdateSpec {
    const message = { ...baseConfigUpdateSpec } as ConfigUpdateSpec;
    message.version = object.version ?? "";
    message.adminPassword = object.adminPassword ?? "";
    message.opensearchSpec =
      object.opensearchSpec !== undefined && object.opensearchSpec !== null
        ? OpenSearchClusterUpdateSpec.fromPartial(object.opensearchSpec)
        : undefined;
    message.dashboardsSpec =
      object.dashboardsSpec !== undefined && object.dashboardsSpec !== null
        ? DashboardsClusterUpdateSpec.fromPartial(object.dashboardsSpec)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigUpdateSpec.$type, ConfigUpdateSpec);

const baseOpenSearchClusterUpdateSpec: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec",
  plugins: "",
};

export const OpenSearchClusterUpdateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec" as const,

  encode(
    message: OpenSearchClusterUpdateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.plugins) {
      writer.uint32(10).string(v!);
    }
    if (message.opensearchConfig2 !== undefined) {
      OpenSearchConfig2.encode(
        message.opensearchConfig2,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSearchClusterUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOpenSearchClusterUpdateSpec,
    } as OpenSearchClusterUpdateSpec;
    message.plugins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plugins.push(reader.string());
          break;
        case 2:
          message.opensearchConfig2 = OpenSearchConfig2.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenSearchClusterUpdateSpec {
    const message = {
      ...baseOpenSearchClusterUpdateSpec,
    } as OpenSearchClusterUpdateSpec;
    message.plugins = (object.plugins ?? []).map((e: any) => String(e));
    message.opensearchConfig2 =
      object.opensearchConfig_2 !== undefined &&
      object.opensearchConfig_2 !== null
        ? OpenSearchConfig2.fromJSON(object.opensearchConfig_2)
        : undefined;
    return message;
  },

  toJSON(message: OpenSearchClusterUpdateSpec): unknown {
    const obj: any = {};
    if (message.plugins) {
      obj.plugins = message.plugins.map((e) => e);
    } else {
      obj.plugins = [];
    }
    message.opensearchConfig2 !== undefined &&
      (obj.opensearchConfig_2 = message.opensearchConfig2
        ? OpenSearchConfig2.toJSON(message.opensearchConfig2)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSearchClusterUpdateSpec>, I>>(
    object: I
  ): OpenSearchClusterUpdateSpec {
    const message = {
      ...baseOpenSearchClusterUpdateSpec,
    } as OpenSearchClusterUpdateSpec;
    message.plugins = object.plugins?.map((e) => e) || [];
    message.opensearchConfig2 =
      object.opensearchConfig2 !== undefined &&
      object.opensearchConfig2 !== null
        ? OpenSearchConfig2.fromPartial(object.opensearchConfig2)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  OpenSearchClusterUpdateSpec.$type,
  OpenSearchClusterUpdateSpec
);

const baseDashboardsClusterUpdateSpec: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec",
};

export const DashboardsClusterUpdateSpec = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec" as const,

  encode(
    _: DashboardsClusterUpdateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashboardsClusterUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashboardsClusterUpdateSpec,
    } as DashboardsClusterUpdateSpec;
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

  fromJSON(_: any): DashboardsClusterUpdateSpec {
    const message = {
      ...baseDashboardsClusterUpdateSpec,
    } as DashboardsClusterUpdateSpec;
    return message;
  },

  toJSON(_: DashboardsClusterUpdateSpec): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DashboardsClusterUpdateSpec>, I>>(
    _: I
  ): DashboardsClusterUpdateSpec {
    const message = {
      ...baseDashboardsClusterUpdateSpec,
    } as DashboardsClusterUpdateSpec;
    return message;
  },
};

messageTypeRegistry.set(
  DashboardsClusterUpdateSpec.$type,
  DashboardsClusterUpdateSpec
);

const baseBackupClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest",
  clusterId: "",
};

export const BackupClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest" as const,

  encode(
    message: BackupClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BackupClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackupClusterRequest } as BackupClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackupClusterRequest {
    const message = { ...baseBackupClusterRequest } as BackupClusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: BackupClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackupClusterRequest>, I>>(
    object: I
  ): BackupClusterRequest {
    const message = { ...baseBackupClusterRequest } as BackupClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BackupClusterRequest.$type, BackupClusterRequest);

const baseBackupClusterMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata",
  clusterId: "",
};

export const BackupClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata" as const,

  encode(
    message: BackupClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BackupClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackupClusterMetadata } as BackupClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackupClusterMetadata {
    const message = { ...baseBackupClusterMetadata } as BackupClusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: BackupClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackupClusterMetadata>, I>>(
    object: I
  ): BackupClusterMetadata {
    const message = { ...baseBackupClusterMetadata } as BackupClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BackupClusterMetadata.$type, BackupClusterMetadata);

const baseRestoreClusterRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest",
  backupId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  securityGroupIds: "",
  serviceAccountId: "",
  deletionProtection: false,
  folderId: "",
};

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest" as const,

  encode(
    message: RestoreClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RestoreClusterRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(40).int32(message.environment);
    }
    if (message.configSpec !== undefined) {
      ConfigCreateSpec.encode(
        message.configSpec,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(58).string(message.networkId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.deletionProtection === true) {
      writer.uint32(80).bool(message.deletionProtection);
    }
    if (message.folderId !== "") {
      writer.uint32(90).string(message.folderId);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(98).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestoreClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestoreClusterRequest } as RestoreClusterRequest;
    message.labels = {};
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backupId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = RestoreClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.environment = reader.int32() as any;
          break;
        case 6:
          message.configSpec = ConfigCreateSpec.decode(reader, reader.uint32());
          break;
        case 7:
          message.networkId = reader.string();
          break;
        case 8:
          message.securityGroupIds.push(reader.string());
          break;
        case 9:
          message.serviceAccountId = reader.string();
          break;
        case 10:
          message.deletionProtection = reader.bool();
          break;
        case 11:
          message.folderId = reader.string();
          break;
        case 12:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestoreClusterRequest {
    const message = { ...baseRestoreClusterRequest } as RestoreClusterRequest;
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.environment =
      object.environment !== undefined && object.environment !== null
        ? cluster_EnvironmentFromJSON(object.environment)
        : 0;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigCreateSpec.fromJSON(object.configSpec)
        : undefined;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined;
    return message;
  },

  toJSON(message: RestoreClusterRequest): unknown {
    const obj: any = {};
    message.backupId !== undefined && (obj.backupId = message.backupId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.environment !== undefined &&
      (obj.environment = cluster_EnvironmentToJSON(message.environment));
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ConfigCreateSpec.toJSON(message.configSpec)
        : undefined);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.maintenanceWindow !== undefined &&
      (obj.maintenanceWindow = message.maintenanceWindow
        ? MaintenanceWindow.toJSON(message.maintenanceWindow)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestoreClusterRequest>, I>>(
    object: I
  ): RestoreClusterRequest {
    const message = { ...baseRestoreClusterRequest } as RestoreClusterRequest;
    message.backupId = object.backupId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.environment = object.environment ?? 0;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigCreateSpec.fromPartial(object.configSpec)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.folderId = object.folderId ?? "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

const baseRestoreClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const RestoreClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry" as const,

  encode(
    message: RestoreClusterRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestoreClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRestoreClusterRequest_LabelsEntry,
    } as RestoreClusterRequest_LabelsEntry;
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

  fromJSON(object: any): RestoreClusterRequest_LabelsEntry {
    const message = {
      ...baseRestoreClusterRequest_LabelsEntry,
    } as RestoreClusterRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: RestoreClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RestoreClusterRequest_LabelsEntry>, I>
  >(object: I): RestoreClusterRequest_LabelsEntry {
    const message = {
      ...baseRestoreClusterRequest_LabelsEntry,
    } as RestoreClusterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RestoreClusterRequest_LabelsEntry.$type,
  RestoreClusterRequest_LabelsEntry
);

const baseRestoreClusterMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata",
  clusterId: "",
  backupId: "",
};

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata" as const,

  encode(
    message: RestoreClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.backupId !== "") {
      writer.uint32(18).string(message.backupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestoreClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestoreClusterMetadata } as RestoreClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.backupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestoreClusterMetadata {
    const message = { ...baseRestoreClusterMetadata } as RestoreClusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.backupId =
      object.backupId !== undefined && object.backupId !== null
        ? String(object.backupId)
        : "";
    return message;
  },

  toJSON(message: RestoreClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.backupId !== undefined && (obj.backupId = message.backupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestoreClusterMetadata>, I>>(
    object: I
  ): RestoreClusterMetadata {
    const message = { ...baseRestoreClusterMetadata } as RestoreClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterMetadata.$type, RestoreClusterMetadata);

const baseRescheduleMaintenanceRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest",
  clusterId: "",
  rescheduleType: 0,
};

export const RescheduleMaintenanceRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest" as const,

  encode(
    message: RescheduleMaintenanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.rescheduleType !== 0) {
      writer.uint32(16).int32(message.rescheduleType);
    }
    if (message.delayedUntil !== undefined) {
      Timestamp.encode(
        toTimestamp(message.delayedUntil),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RescheduleMaintenanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRescheduleMaintenanceRequest,
    } as RescheduleMaintenanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.rescheduleType = reader.int32() as any;
          break;
        case 3:
          message.delayedUntil = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RescheduleMaintenanceRequest {
    const message = {
      ...baseRescheduleMaintenanceRequest,
    } as RescheduleMaintenanceRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.rescheduleType =
      object.rescheduleType !== undefined && object.rescheduleType !== null
        ? rescheduleMaintenanceRequest_RescheduleTypeFromJSON(
            object.rescheduleType
          )
        : 0;
    message.delayedUntil =
      object.delayedUntil !== undefined && object.delayedUntil !== null
        ? fromJsonTimestamp(object.delayedUntil)
        : undefined;
    return message;
  },

  toJSON(message: RescheduleMaintenanceRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.rescheduleType !== undefined &&
      (obj.rescheduleType = rescheduleMaintenanceRequest_RescheduleTypeToJSON(
        message.rescheduleType
      ));
    message.delayedUntil !== undefined &&
      (obj.delayedUntil = message.delayedUntil.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RescheduleMaintenanceRequest>, I>>(
    object: I
  ): RescheduleMaintenanceRequest {
    const message = {
      ...baseRescheduleMaintenanceRequest,
    } as RescheduleMaintenanceRequest;
    message.clusterId = object.clusterId ?? "";
    message.rescheduleType = object.rescheduleType ?? 0;
    message.delayedUntil = object.delayedUntil ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  RescheduleMaintenanceRequest.$type,
  RescheduleMaintenanceRequest
);

const baseRescheduleMaintenanceMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata",
  clusterId: "",
};

export const RescheduleMaintenanceMetadata = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata" as const,

  encode(
    message: RescheduleMaintenanceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.delayedUntil !== undefined) {
      Timestamp.encode(
        toTimestamp(message.delayedUntil),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RescheduleMaintenanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRescheduleMaintenanceMetadata,
    } as RescheduleMaintenanceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 4:
          message.delayedUntil = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RescheduleMaintenanceMetadata {
    const message = {
      ...baseRescheduleMaintenanceMetadata,
    } as RescheduleMaintenanceMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.delayedUntil =
      object.delayedUntil !== undefined && object.delayedUntil !== null
        ? fromJsonTimestamp(object.delayedUntil)
        : undefined;
    return message;
  },

  toJSON(message: RescheduleMaintenanceMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.delayedUntil !== undefined &&
      (obj.delayedUntil = message.delayedUntil.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RescheduleMaintenanceMetadata>, I>>(
    object: I
  ): RescheduleMaintenanceMetadata {
    const message = {
      ...baseRescheduleMaintenanceMetadata,
    } as RescheduleMaintenanceMetadata;
    message.clusterId = object.clusterId ?? "";
    message.delayedUntil = object.delayedUntil ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  RescheduleMaintenanceMetadata.$type,
  RescheduleMaintenanceMetadata
);

const baseListClusterBackupsRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest" as const,

  encode(
    message: ListClusterBackupsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterBackupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterBackupsRequest,
    } as ListClusterBackupsRequest;
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

  fromJSON(object: any): ListClusterBackupsRequest {
    const message = {
      ...baseListClusterBackupsRequest,
    } as ListClusterBackupsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterBackupsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterBackupsRequest>, I>>(
    object: I
  ): ListClusterBackupsRequest {
    const message = {
      ...baseListClusterBackupsRequest,
    } as ListClusterBackupsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterBackupsRequest.$type,
  ListClusterBackupsRequest
);

const baseListClusterBackupsResponse: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse",
  nextPageToken: "",
};

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse" as const,

  encode(
    message: ListClusterBackupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.backups) {
      Backup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterBackupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterBackupsResponse,
    } as ListClusterBackupsResponse;
    message.backups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backups.push(Backup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterBackupsResponse {
    const message = {
      ...baseListClusterBackupsResponse,
    } as ListClusterBackupsResponse;
    message.backups = (object.backups ?? []).map((e: any) =>
      Backup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterBackupsResponse): unknown {
    const obj: any = {};
    if (message.backups) {
      obj.backups = message.backups.map((e) =>
        e ? Backup.toJSON(e) : undefined
      );
    } else {
      obj.backups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterBackupsResponse>, I>>(
    object: I
  ): ListClusterBackupsResponse {
    const message = {
      ...baseListClusterBackupsResponse,
    } as ListClusterBackupsResponse;
    message.backups = object.backups?.map((e) => Backup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterBackupsResponse.$type,
  ListClusterBackupsResponse
);

const baseDeleteOpenSearchNodeGroupRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest",
  clusterId: "",
  name: "",
};

export const DeleteOpenSearchNodeGroupRequest = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest" as const,

  encode(
    message: DeleteOpenSearchNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteOpenSearchNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteOpenSearchNodeGroupRequest,
    } as DeleteOpenSearchNodeGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOpenSearchNodeGroupRequest {
    const message = {
      ...baseDeleteOpenSearchNodeGroupRequest,
    } as DeleteOpenSearchNodeGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: DeleteOpenSearchNodeGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteOpenSearchNodeGroupRequest>, I>
  >(object: I): DeleteOpenSearchNodeGroupRequest {
    const message = {
      ...baseDeleteOpenSearchNodeGroupRequest,
    } as DeleteOpenSearchNodeGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteOpenSearchNodeGroupRequest.$type,
  DeleteOpenSearchNodeGroupRequest
);

const baseUpdateOpenSearchNodeGroupRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest",
  clusterId: "",
  name: "",
};

export const UpdateOpenSearchNodeGroupRequest = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest" as const,

  encode(
    message: UpdateOpenSearchNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.nodeGroupSpec !== undefined) {
      OpenSearchNodeGroupUpdateSpec.encode(
        message.nodeGroupSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOpenSearchNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateOpenSearchNodeGroupRequest,
    } as UpdateOpenSearchNodeGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.nodeGroupSpec = OpenSearchNodeGroupUpdateSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOpenSearchNodeGroupRequest {
    const message = {
      ...baseUpdateOpenSearchNodeGroupRequest,
    } as UpdateOpenSearchNodeGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.nodeGroupSpec =
      object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
        ? OpenSearchNodeGroupUpdateSpec.fromJSON(object.nodeGroupSpec)
        : undefined;
    return message;
  },

  toJSON(message: UpdateOpenSearchNodeGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.nodeGroupSpec !== undefined &&
      (obj.nodeGroupSpec = message.nodeGroupSpec
        ? OpenSearchNodeGroupUpdateSpec.toJSON(message.nodeGroupSpec)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateOpenSearchNodeGroupRequest>, I>
  >(object: I): UpdateOpenSearchNodeGroupRequest {
    const message = {
      ...baseUpdateOpenSearchNodeGroupRequest,
    } as UpdateOpenSearchNodeGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.nodeGroupSpec =
      object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
        ? OpenSearchNodeGroupUpdateSpec.fromPartial(object.nodeGroupSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateOpenSearchNodeGroupRequest.$type,
  UpdateOpenSearchNodeGroupRequest
);

const baseOpenSearchNodeGroupUpdateSpec: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec",
  hostsCount: 0,
  roles: 0,
};

export const OpenSearchNodeGroupUpdateSpec = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec" as const,

  encode(
    message: OpenSearchNodeGroupUpdateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(16).int64(message.hostsCount);
    }
    writer.uint32(26).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSearchNodeGroupUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOpenSearchNodeGroupUpdateSpec,
    } as OpenSearchNodeGroupUpdateSpec;
    message.roles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostsCount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }
          } else {
            message.roles.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenSearchNodeGroupUpdateSpec {
    const message = {
      ...baseOpenSearchNodeGroupUpdateSpec,
    } as OpenSearchNodeGroupUpdateSpec;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.hostsCount =
      object.hostsCount !== undefined && object.hostsCount !== null
        ? Number(object.hostsCount)
        : 0;
    message.roles = (object.roles ?? []).map((e: any) =>
      openSearch_GroupRoleFromJSON(e)
    );
    return message;
  },

  toJSON(message: OpenSearchNodeGroupUpdateSpec): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.hostsCount !== undefined &&
      (obj.hostsCount = Math.round(message.hostsCount));
    if (message.roles) {
      obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSearchNodeGroupUpdateSpec>, I>>(
    object: I
  ): OpenSearchNodeGroupUpdateSpec {
    const message = {
      ...baseOpenSearchNodeGroupUpdateSpec,
    } as OpenSearchNodeGroupUpdateSpec;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  OpenSearchNodeGroupUpdateSpec.$type,
  OpenSearchNodeGroupUpdateSpec
);

const baseAddOpenSearchNodeGroupRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest",
  clusterId: "",
};

export const AddOpenSearchNodeGroupRequest = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest" as const,

  encode(
    message: AddOpenSearchNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.nodeGroupSpec !== undefined) {
      OpenSearchCreateSpec_NodeGroup.encode(
        message.nodeGroupSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddOpenSearchNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddOpenSearchNodeGroupRequest,
    } as AddOpenSearchNodeGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.nodeGroupSpec = OpenSearchCreateSpec_NodeGroup.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddOpenSearchNodeGroupRequest {
    const message = {
      ...baseAddOpenSearchNodeGroupRequest,
    } as AddOpenSearchNodeGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.nodeGroupSpec =
      object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
        ? OpenSearchCreateSpec_NodeGroup.fromJSON(object.nodeGroupSpec)
        : undefined;
    return message;
  },

  toJSON(message: AddOpenSearchNodeGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.nodeGroupSpec !== undefined &&
      (obj.nodeGroupSpec = message.nodeGroupSpec
        ? OpenSearchCreateSpec_NodeGroup.toJSON(message.nodeGroupSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddOpenSearchNodeGroupRequest>, I>>(
    object: I
  ): AddOpenSearchNodeGroupRequest {
    const message = {
      ...baseAddOpenSearchNodeGroupRequest,
    } as AddOpenSearchNodeGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.nodeGroupSpec =
      object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
        ? OpenSearchCreateSpec_NodeGroup.fromPartial(object.nodeGroupSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AddOpenSearchNodeGroupRequest.$type,
  AddOpenSearchNodeGroupRequest
);

const baseDeleteDashboardsNodeGroupRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest",
  clusterId: "",
  name: "",
};

export const DeleteDashboardsNodeGroupRequest = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest" as const,

  encode(
    message: DeleteDashboardsNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDashboardsNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteDashboardsNodeGroupRequest,
    } as DeleteDashboardsNodeGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDashboardsNodeGroupRequest {
    const message = {
      ...baseDeleteDashboardsNodeGroupRequest,
    } as DeleteDashboardsNodeGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: DeleteDashboardsNodeGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteDashboardsNodeGroupRequest>, I>
  >(object: I): DeleteDashboardsNodeGroupRequest {
    const message = {
      ...baseDeleteDashboardsNodeGroupRequest,
    } as DeleteDashboardsNodeGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteDashboardsNodeGroupRequest.$type,
  DeleteDashboardsNodeGroupRequest
);

const baseUpdateDashboardsNodeGroupRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest",
  clusterId: "",
  name: "",
};

export const UpdateDashboardsNodeGroupRequest = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest" as const,

  encode(
    message: UpdateDashboardsNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.nodeGroupSpec !== undefined) {
      DashboardsNodeGroupUpdateSpec.encode(
        message.nodeGroupSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDashboardsNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDashboardsNodeGroupRequest,
    } as UpdateDashboardsNodeGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.nodeGroupSpec = DashboardsNodeGroupUpdateSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDashboardsNodeGroupRequest {
    const message = {
      ...baseUpdateDashboardsNodeGroupRequest,
    } as UpdateDashboardsNodeGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.nodeGroupSpec =
      object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
        ? DashboardsNodeGroupUpdateSpec.fromJSON(object.nodeGroupSpec)
        : undefined;
    return message;
  },

  toJSON(message: UpdateDashboardsNodeGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.nodeGroupSpec !== undefined &&
      (obj.nodeGroupSpec = message.nodeGroupSpec
        ? DashboardsNodeGroupUpdateSpec.toJSON(message.nodeGroupSpec)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateDashboardsNodeGroupRequest>, I>
  >(object: I): UpdateDashboardsNodeGroupRequest {
    const message = {
      ...baseUpdateDashboardsNodeGroupRequest,
    } as UpdateDashboardsNodeGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.nodeGroupSpec =
      object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
        ? DashboardsNodeGroupUpdateSpec.fromPartial(object.nodeGroupSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDashboardsNodeGroupRequest.$type,
  UpdateDashboardsNodeGroupRequest
);

const baseDashboardsNodeGroupUpdateSpec: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec",
  hostsCount: 0,
};

export const DashboardsNodeGroupUpdateSpec = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec" as const,

  encode(
    message: DashboardsNodeGroupUpdateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(16).int64(message.hostsCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashboardsNodeGroupUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashboardsNodeGroupUpdateSpec,
    } as DashboardsNodeGroupUpdateSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostsCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DashboardsNodeGroupUpdateSpec {
    const message = {
      ...baseDashboardsNodeGroupUpdateSpec,
    } as DashboardsNodeGroupUpdateSpec;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.hostsCount =
      object.hostsCount !== undefined && object.hostsCount !== null
        ? Number(object.hostsCount)
        : 0;
    return message;
  },

  toJSON(message: DashboardsNodeGroupUpdateSpec): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.hostsCount !== undefined &&
      (obj.hostsCount = Math.round(message.hostsCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DashboardsNodeGroupUpdateSpec>, I>>(
    object: I
  ): DashboardsNodeGroupUpdateSpec {
    const message = {
      ...baseDashboardsNodeGroupUpdateSpec,
    } as DashboardsNodeGroupUpdateSpec;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  DashboardsNodeGroupUpdateSpec.$type,
  DashboardsNodeGroupUpdateSpec
);

const baseAddDashboardsNodeGroupRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest",
  clusterId: "",
};

export const AddDashboardsNodeGroupRequest = {
  $type:
    "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest" as const,

  encode(
    message: AddDashboardsNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.nodeGroupSpec !== undefined) {
      DashboardsCreateSpec_NodeGroup.encode(
        message.nodeGroupSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddDashboardsNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddDashboardsNodeGroupRequest,
    } as AddDashboardsNodeGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.nodeGroupSpec = DashboardsCreateSpec_NodeGroup.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddDashboardsNodeGroupRequest {
    const message = {
      ...baseAddDashboardsNodeGroupRequest,
    } as AddDashboardsNodeGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.nodeGroupSpec =
      object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
        ? DashboardsCreateSpec_NodeGroup.fromJSON(object.nodeGroupSpec)
        : undefined;
    return message;
  },

  toJSON(message: AddDashboardsNodeGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.nodeGroupSpec !== undefined &&
      (obj.nodeGroupSpec = message.nodeGroupSpec
        ? DashboardsCreateSpec_NodeGroup.toJSON(message.nodeGroupSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddDashboardsNodeGroupRequest>, I>>(
    object: I
  ): AddDashboardsNodeGroupRequest {
    const message = {
      ...baseAddDashboardsNodeGroupRequest,
    } as AddDashboardsNodeGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.nodeGroupSpec =
      object.nodeGroupSpec !== undefined && object.nodeGroupSpec !== null
        ? DashboardsCreateSpec_NodeGroup.fromPartial(object.nodeGroupSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  AddDashboardsNodeGroupRequest.$type,
  AddDashboardsNodeGroupRequest
);

const baseAddNodeGroupMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata",
  clusterId: "",
  name: "",
};

export const AddNodeGroupMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata" as const,

  encode(
    message: AddNodeGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddNodeGroupMetadata } as AddNodeGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddNodeGroupMetadata {
    const message = { ...baseAddNodeGroupMetadata } as AddNodeGroupMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: AddNodeGroupMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddNodeGroupMetadata>, I>>(
    object: I
  ): AddNodeGroupMetadata {
    const message = { ...baseAddNodeGroupMetadata } as AddNodeGroupMetadata;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddNodeGroupMetadata.$type, AddNodeGroupMetadata);

const baseUpdateNodeGroupMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata",
  clusterId: "",
  name: "",
};

export const UpdateNodeGroupMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata" as const,

  encode(
    message: UpdateNodeGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateNodeGroupMetadata,
    } as UpdateNodeGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNodeGroupMetadata {
    const message = {
      ...baseUpdateNodeGroupMetadata,
    } as UpdateNodeGroupMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: UpdateNodeGroupMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateNodeGroupMetadata>, I>>(
    object: I
  ): UpdateNodeGroupMetadata {
    const message = {
      ...baseUpdateNodeGroupMetadata,
    } as UpdateNodeGroupMetadata;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateNodeGroupMetadata.$type, UpdateNodeGroupMetadata);

const baseDeleteNodeGroupMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata",
  clusterId: "",
  name: "",
};

export const DeleteNodeGroupMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata" as const,

  encode(
    message: DeleteNodeGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteNodeGroupMetadata,
    } as DeleteNodeGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNodeGroupMetadata {
    const message = {
      ...baseDeleteNodeGroupMetadata,
    } as DeleteNodeGroupMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: DeleteNodeGroupMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteNodeGroupMetadata>, I>>(
    object: I
  ): DeleteNodeGroupMetadata {
    const message = {
      ...baseDeleteNodeGroupMetadata,
    } as DeleteNodeGroupMetadata;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNodeGroupMetadata.$type, DeleteNodeGroupMetadata);

const baseGetAuthSettingsRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest",
  clusterId: "",
};

export const GetAuthSettingsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest" as const,

  encode(
    message: GetAuthSettingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAuthSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAuthSettingsRequest } as GetAuthSettingsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthSettingsRequest {
    const message = { ...baseGetAuthSettingsRequest } as GetAuthSettingsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: GetAuthSettingsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthSettingsRequest>, I>>(
    object: I
  ): GetAuthSettingsRequest {
    const message = { ...baseGetAuthSettingsRequest } as GetAuthSettingsRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetAuthSettingsRequest.$type, GetAuthSettingsRequest);

const baseUpdateAuthSettingsRequest: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest",
  clusterId: "",
};

export const UpdateAuthSettingsRequest = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest" as const,

  encode(
    message: UpdateAuthSettingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.settings !== undefined) {
      AuthSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAuthSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAuthSettingsRequest,
    } as UpdateAuthSettingsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.settings = AuthSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthSettingsRequest {
    const message = {
      ...baseUpdateAuthSettingsRequest,
    } as UpdateAuthSettingsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? AuthSettings.fromJSON(object.settings)
        : undefined;
    return message;
  },

  toJSON(message: UpdateAuthSettingsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? AuthSettings.toJSON(message.settings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAuthSettingsRequest>, I>>(
    object: I
  ): UpdateAuthSettingsRequest {
    const message = {
      ...baseUpdateAuthSettingsRequest,
    } as UpdateAuthSettingsRequest;
    message.clusterId = object.clusterId ?? "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? AuthSettings.fromPartial(object.settings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAuthSettingsRequest.$type,
  UpdateAuthSettingsRequest
);

const baseUpdateAuthSettingsMetadata: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata",
  clusterId: "",
};

export const UpdateAuthSettingsMetadata = {
  $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata" as const,

  encode(
    message: UpdateAuthSettingsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAuthSettingsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAuthSettingsMetadata,
    } as UpdateAuthSettingsMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthSettingsMetadata {
    const message = {
      ...baseUpdateAuthSettingsMetadata,
    } as UpdateAuthSettingsMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: UpdateAuthSettingsMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAuthSettingsMetadata>, I>>(
    object: I
  ): UpdateAuthSettingsMetadata {
    const message = {
      ...baseUpdateAuthSettingsMetadata,
    } as UpdateAuthSettingsMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAuthSettingsMetadata.$type,
  UpdateAuthSettingsMetadata
);

/** A set of methods for managing OpenSearch clusters. */
export const ClusterServiceService = {
  /**
   * Returns the specified OpenSearch cluster.
   *
   * To get the list of all available OpenSearch clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) =>
      Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) =>
      Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
  list: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) =>
      Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) =>
      Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates an OpenSearch cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) =>
      Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified OpenSearch cluster. */
  update: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) =>
      Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified OpenSearch cluster. */
  delete: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) =>
      Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a backup for the specified OpenSearch cluster. */
  backup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupClusterRequest) =>
      Buffer.from(BackupClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new OpenSearch cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) =>
      Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Reschedules a planned maintenance operation. */
  rescheduleMaintenance: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/RescheduleMaintenance",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RescheduleMaintenanceRequest) =>
      Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RescheduleMaintenanceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns a list of available backups for the specified OpenSearch cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListBackups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterBackupsRequest) =>
      Buffer.from(ListClusterBackupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListClusterBackupsRequest.decode(value),
    responseSerialize: (value: ListClusterBackupsResponse) =>
      Buffer.from(ListClusterBackupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterBackupsResponse.decode(value),
  },
  /** Moves the specified OpenSearch cluster to the specified folder. */
  move: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveClusterRequest) =>
      Buffer.from(MoveClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified OpenSearch cluster. */
  start: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) =>
      Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified OpenSearch cluster. */
  stop: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) =>
      Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Retrieves logs for the specified OpenSearch cluster.
   * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
   */
  listLogs: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListLogs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterLogsRequest) =>
      Buffer.from(ListClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClusterLogsRequest.decode(value),
    responseSerialize: (value: ListClusterLogsResponse) =>
      Buffer.from(ListClusterLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterLogsResponse.decode(value),
  },
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/StreamLogs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: StreamClusterLogsRequest) =>
      Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StreamClusterLogsRequest.decode(value),
    responseSerialize: (value: StreamLogRecord) =>
      Buffer.from(StreamLogRecord.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
  },
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterOperationsResponse.decode(value),
  },
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterHostsRequest) =>
      Buffer.from(ListClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListClusterHostsRequest.decode(value),
    responseSerialize: (value: ListClusterHostsResponse) =>
      Buffer.from(ListClusterHostsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterHostsResponse.decode(value),
  },
  /** Creates an OpenSearch type host group. */
  addOpenSearchNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddOpenSearchNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddOpenSearchNodeGroupRequest) =>
      Buffer.from(AddOpenSearchNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddOpenSearchNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes an OpenSearch type host group. */
  deleteOpenSearchNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteOpenSearchNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteOpenSearchNodeGroupRequest) =>
      Buffer.from(DeleteOpenSearchNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteOpenSearchNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates an OpenSearch type host group. */
  updateOpenSearchNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateOpenSearchNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateOpenSearchNodeGroupRequest) =>
      Buffer.from(UpdateOpenSearchNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateOpenSearchNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a Dashboards type host group. */
  addDashboardsNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddDashboardsNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddDashboardsNodeGroupRequest) =>
      Buffer.from(AddDashboardsNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddDashboardsNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes a Dashboards type host group. */
  deleteDashboardsNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteDashboardsNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDashboardsNodeGroupRequest) =>
      Buffer.from(DeleteDashboardsNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteDashboardsNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates a Dashboards type host group. */
  updateDashboardsNodeGroup: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateDashboardsNodeGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDashboardsNodeGroupRequest) =>
      Buffer.from(UpdateDashboardsNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateDashboardsNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves auth settings for specified cluster. */
  getAuthSettings: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/GetAuthSettings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAuthSettingsRequest) =>
      Buffer.from(GetAuthSettingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAuthSettingsRequest.decode(value),
    responseSerialize: (value: AuthSettings) =>
      Buffer.from(AuthSettings.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthSettings.decode(value),
  },
  /** Updates auth settings for specified cluster. */
  updateAuthSettings: {
    path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateAuthSettings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAuthSettingsRequest) =>
      Buffer.from(UpdateAuthSettingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAuthSettingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified OpenSearch cluster.
   *
   * To get the list of all available OpenSearch clusters, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates an OpenSearch cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified OpenSearch cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified OpenSearch cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Creates a backup for the specified OpenSearch cluster. */
  backup: handleUnaryCall<BackupClusterRequest, Operation>;
  /** Creates a new OpenSearch cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
  /** Reschedules a planned maintenance operation. */
  rescheduleMaintenance: handleUnaryCall<
    RescheduleMaintenanceRequest,
    Operation
  >;
  /** Returns a list of available backups for the specified OpenSearch cluster. */
  listBackups: handleUnaryCall<
    ListClusterBackupsRequest,
    ListClusterBackupsResponse
  >;
  /** Moves the specified OpenSearch cluster to the specified folder. */
  move: handleUnaryCall<MoveClusterRequest, Operation>;
  /** Starts the specified OpenSearch cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stops the specified OpenSearch cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /**
   * Retrieves logs for the specified OpenSearch cluster.
   * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
   */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs: handleServerStreamingCall<
    StreamClusterLogsRequest,
    StreamLogRecord
  >;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: handleUnaryCall<
    ListClusterOperationsRequest,
    ListClusterOperationsResponse
  >;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Creates an OpenSearch type host group. */
  addOpenSearchNodeGroup: handleUnaryCall<
    AddOpenSearchNodeGroupRequest,
    Operation
  >;
  /** Deletes an OpenSearch type host group. */
  deleteOpenSearchNodeGroup: handleUnaryCall<
    DeleteOpenSearchNodeGroupRequest,
    Operation
  >;
  /** Updates an OpenSearch type host group. */
  updateOpenSearchNodeGroup: handleUnaryCall<
    UpdateOpenSearchNodeGroupRequest,
    Operation
  >;
  /** Creates a Dashboards type host group. */
  addDashboardsNodeGroup: handleUnaryCall<
    AddDashboardsNodeGroupRequest,
    Operation
  >;
  /** Deletes a Dashboards type host group. */
  deleteDashboardsNodeGroup: handleUnaryCall<
    DeleteDashboardsNodeGroupRequest,
    Operation
  >;
  /** Updates a Dashboards type host group. */
  updateDashboardsNodeGroup: handleUnaryCall<
    UpdateDashboardsNodeGroupRequest,
    Operation
  >;
  /** Retrieves auth settings for specified cluster. */
  getAuthSettings: handleUnaryCall<GetAuthSettingsRequest, AuthSettings>;
  /** Updates auth settings for specified cluster. */
  updateAuthSettings: handleUnaryCall<UpdateAuthSettingsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified OpenSearch cluster.
   *
   * To get the list of all available OpenSearch clusters, make a [List] request.
   */
  get(
    request: GetClusterRequest,
    callback: (error: ServiceError | null, response: Cluster) => void
  ): ClientUnaryCall;
  get(
    request: GetClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Cluster) => void
  ): ClientUnaryCall;
  get(
    request: GetClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Cluster) => void
  ): ClientUnaryCall;
  /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
  list(
    request: ListClustersRequest,
    callback: (
      error: ServiceError | null,
      response: ListClustersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListClustersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClustersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListClustersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClustersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates an OpenSearch cluster in the specified folder. */
  create(
    request: CreateClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified OpenSearch cluster. */
  update(
    request: UpdateClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified OpenSearch cluster. */
  delete(
    request: DeleteClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Creates a backup for the specified OpenSearch cluster. */
  backup(
    request: BackupClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  backup(
    request: BackupClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  backup(
    request: BackupClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Creates a new OpenSearch cluster using the specified backup. */
  restore(
    request: RestoreClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  restore(
    request: RestoreClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  restore(
    request: RestoreClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Reschedules a planned maintenance operation. */
  rescheduleMaintenance(
    request: RescheduleMaintenanceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rescheduleMaintenance(
    request: RescheduleMaintenanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rescheduleMaintenance(
    request: RescheduleMaintenanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns a list of available backups for the specified OpenSearch cluster. */
  listBackups(
    request: ListClusterBackupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterBackupsResponse
    ) => void
  ): ClientUnaryCall;
  listBackups(
    request: ListClusterBackupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterBackupsResponse
    ) => void
  ): ClientUnaryCall;
  listBackups(
    request: ListClusterBackupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterBackupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Moves the specified OpenSearch cluster to the specified folder. */
  move(
    request: MoveClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  move(
    request: MoveClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Starts the specified OpenSearch cluster. */
  start(
    request: StartClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Stops the specified OpenSearch cluster. */
  stop(
    request: StopClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Retrieves logs for the specified OpenSearch cluster.
   * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
   */
  listLogs(
    request: ListClusterLogsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterLogsResponse
    ) => void
  ): ClientUnaryCall;
  listLogs(
    request: ListClusterLogsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterLogsResponse
    ) => void
  ): ClientUnaryCall;
  listLogs(
    request: ListClusterLogsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterLogsResponse
    ) => void
  ): ClientUnaryCall;
  /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
  streamLogs(
    request: StreamClusterLogsRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<StreamLogRecord>;
  streamLogs(
    request: StreamClusterLogsRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<StreamLogRecord>;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations(
    request: ListClusterOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListClusterOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListClusterOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts(
    request: ListClusterHostsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  listHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  listHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates an OpenSearch type host group. */
  addOpenSearchNodeGroup(
    request: AddOpenSearchNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addOpenSearchNodeGroup(
    request: AddOpenSearchNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addOpenSearchNodeGroup(
    request: AddOpenSearchNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes an OpenSearch type host group. */
  deleteOpenSearchNodeGroup(
    request: DeleteOpenSearchNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteOpenSearchNodeGroup(
    request: DeleteOpenSearchNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteOpenSearchNodeGroup(
    request: DeleteOpenSearchNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates an OpenSearch type host group. */
  updateOpenSearchNodeGroup(
    request: UpdateOpenSearchNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateOpenSearchNodeGroup(
    request: UpdateOpenSearchNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateOpenSearchNodeGroup(
    request: UpdateOpenSearchNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Creates a Dashboards type host group. */
  addDashboardsNodeGroup(
    request: AddDashboardsNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addDashboardsNodeGroup(
    request: AddDashboardsNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addDashboardsNodeGroup(
    request: AddDashboardsNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes a Dashboards type host group. */
  deleteDashboardsNodeGroup(
    request: DeleteDashboardsNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteDashboardsNodeGroup(
    request: DeleteDashboardsNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteDashboardsNodeGroup(
    request: DeleteDashboardsNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates a Dashboards type host group. */
  updateDashboardsNodeGroup(
    request: UpdateDashboardsNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateDashboardsNodeGroup(
    request: UpdateDashboardsNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateDashboardsNodeGroup(
    request: UpdateDashboardsNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves auth settings for specified cluster. */
  getAuthSettings(
    request: GetAuthSettingsRequest,
    callback: (error: ServiceError | null, response: AuthSettings) => void
  ): ClientUnaryCall;
  getAuthSettings(
    request: GetAuthSettingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthSettings) => void
  ): ClientUnaryCall;
  getAuthSettings(
    request: GetAuthSettingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthSettings) => void
  ): ClientUnaryCall;
  /** Updates auth settings for specified cluster. */
  updateAuthSettings(
    request: UpdateAuthSettingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAuthSettings(
    request: UpdateAuthSettingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAuthSettings(
    request: UpdateAuthSettingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.opensearch.v1.ClusterService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ClusterServiceClient;
  service: typeof ClusterServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
