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
  GreenplumConfig,
  CloudStorage,
  GreenplumRestoreConfig,
  Cluster,
  cluster_EnvironmentFromJSON,
  cluster_EnvironmentToJSON,
} from "../../../../../yandex/cloud/mdb/greenplum/v1/cluster";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/greenplum/v1/maintenance";
import {
  ConnectionPoolerConfig,
  BackgroundActivitiesConfig,
  Resources,
  Greenplumconfig617,
  Greenplumconfig619,
  Greenplumconfig621,
  Greenplumconfig622,
  GreenplumConfig6,
} from "../../../../../yandex/cloud/mdb/greenplum/v1/config";
import { PXFConfig } from "../../../../../yandex/cloud/mdb/greenplum/v1/pxf";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { Host } from "../../../../../yandex/cloud/mdb/greenplum/v1/host";
import { Backup } from "../../../../../yandex/cloud/mdb/greenplum/v1/backup";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest";
  /**
   * ID of the Greenplum® cluster resource to return.
   *
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest";
  /**
   * ID of the folder to list Greenplum® clusters in.
   *
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token] returned by the previous list request. */
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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse";
  /** List of Greenplum® cluster resources. */
  clusters: Cluster[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value for the [ListClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest";
  /** ID of the folder to create the Greenplum® cluster in. */
  folderId: string;
  /** Name of the Greenplum® cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the Greenplum® cluster. */
  description: string;
  /**
   * Custom labels for the Greenplum® cluster as `key:value` pairs.
   * For example, `"project":"mvp"` or `"source":"dictionary"`.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Greenplum® cluster. */
  environment: Cluster_Environment;
  /** Greenplum® cluster configuration. */
  config?: GreenplumConfig;
  /** Configuration of the Greenplum® master subcluster. */
  masterConfig?: MasterSubclusterConfigSpec;
  /** Configuration of the Greenplum® segment subcluster. */
  segmentConfig?: SegmentSubclusterConfigSpec;
  /** Number of hosts in the master subcluster. */
  masterHostCount: number;
  /** Number of segments per host. */
  segmentInHost: number;
  /** Number of hosts in the segment subcluster. */
  segmentHostCount: number;
  /** Owner user name. */
  userName: string;
  /** Owner user password. */
  userPassword: string;
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups. */
  securityGroupIds: string[];
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Host groups to place VMs of the cluster in. */
  hostGroupIds: string[];
  /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow;
  /** Configuration of Greenplum® and Odyssey®. */
  configSpec?: ConfigSpec;
  /** Cloud storage settings */
  cloudStorage?: CloudStorage;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec";
  greenplumConfig617?: Greenplumconfig617 | undefined;
  greenplumConfig619?: Greenplumconfig619 | undefined;
  greenplumConfig621?: Greenplumconfig621 | undefined;
  greenplumConfig622?: Greenplumconfig622 | undefined;
  greenplumConfig6?: GreenplumConfig6 | undefined;
  /** Odyssey® pool settings. */
  pool?: ConnectionPoolerConfig;
  backgroundActivities?: BackgroundActivitiesConfig;
  pxfConfig?: PXFConfig;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata";
  /** ID of the Greenplum® cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest";
  /**
   * ID of the Greenplum® cluster resource to update.
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the Greenplum® cluster resource should be updated. */
  updateMask?: FieldMask;
  /** New description of the Greenplum® cluster. */
  description: string;
  /**
   * Custom labels for the Greenplum® cluster as `key:value` pairs.
   * For example, `"project":"mvp"` or `"source":"dictionary"`.
   *
   * The new set of labels completely replaces the old one.
   * To add a label, request the current set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
   */
  labels: { [key: string]: string };
  /** New name for the cluster. */
  name: string;
  /** The Greenplum® cluster configuration. */
  config?: GreenplumConfig;
  /** Configuration of the Greenplum® master subcluster. */
  masterConfig?: MasterSubclusterConfigSpec;
  /** Configuration of the Greenplum® segment subcluster. */
  segmentConfig?: SegmentSubclusterConfigSpec;
  /** Owner user password. */
  userPassword: string;
  /** The Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow;
  /** User security groups. */
  securityGroupIds: string[];
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Settings of the Greenplum® cluster. */
  configSpec?: ConfigSpec;
  /** Cloud storage settings */
  cloudStorage?: CloudStorage;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata";
  /** ID of the Greenplum® cluster resource that is being updated. */
  clusterId: string;
}

export interface AddClusterHostsMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata";
  /** ID of the Greenplum Cluster resource that is being updated. */
  clusterId: string;
}

export interface ExpandRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest";
  /**
   * ID of the Greenplum Cluster resource to update.
   * To get the Greenplum cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Number of hosts for add to the segment subcluster */
  segmentHostCount: number;
  /** Number of segments per host to add */
  addSegmentsPerHostCount: number;
  /** Redistribute duration, in seconds */
  duration: number;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest";
  /**
   * ID of the Greenplum® cluster to delete.
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata";
  /** ID of the Greenplum® cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest";
  /**
   * ID of the Greenplum® cluster to start.
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata";
  /** ID of the Greenplum® cluster being started. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest";
  /**
   * ID of the Greenplum® cluster to stop.
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata";
  /** ID of the Greenplum® cluster being stopped. */
  clusterId: string;
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest";
  /** ID of the Greenplum® cluster resource to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified Greenplum® cluster. */
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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest";
  /**
   * ID of the Greenplum® cluster.
   *
   * To get the Greenplum® cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface ListClusterHostsResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse";
  /** Requested list of hosts for the cluster. */
  hosts: Host[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MasterSubclusterConfigSpec {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec";
  /** Resources allocated to Greenplum® master subcluster hosts. */
  resources?: Resources;
}

export interface SegmentSubclusterConfigSpec {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec";
  /** Resources allocated to Greenplum® segment subcluster hosts. */
  resources?: Resources;
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse";
  /** Requested log records. */
  logs: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   *
   * This value is interchangeable with the [StreamLogRecord.next_record_token] from [StreamLogs] method.
   */
  nextPageToken: string;
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord";
  /** Time when the log was recorded. */
  timestamp?: Date;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest";
  /**
   * ID of the Greenplum® cluster to request logs for.
   *
   * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from log table to request.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Type of the service to request logs about. */
  serviceType: ListClusterLogsRequest_ServiceType;
  /** Start timestamp for the logs request. */
  fromTime?: Date;
  /** End timestamp for the logs request. */
  toTime?: Date;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
  /** The service always returns a [ListClusterLogsResponse.next_page_token], even if the current page is empty. */
  alwaysNextPageToken: boolean;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.error_severity] (for `GREENPLUM` service) and [LogRecord.logs.message.level] (for `GREENPLUM_POOLER` service) fields.
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
}

export enum ListClusterLogsRequest_ServiceType {
  /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** GREENPLUM - Greenplum® activity logs. */
  GREENPLUM = 1,
  /** GREENPLUM_POOLER - Greenplum® pooler logs. */
  GREENPLUM_POOLER = 2,
  /** GREENPLUM_PXF - Greenplum® PXF service logs. */
  GREENPLUM_PXF = 3,
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
    case "GREENPLUM":
      return ListClusterLogsRequest_ServiceType.GREENPLUM;
    case 2:
    case "GREENPLUM_POOLER":
      return ListClusterLogsRequest_ServiceType.GREENPLUM_POOLER;
    case 3:
    case "GREENPLUM_PXF":
      return ListClusterLogsRequest_ServiceType.GREENPLUM_PXF;
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
    case ListClusterLogsRequest_ServiceType.GREENPLUM:
      return "GREENPLUM";
    case ListClusterLogsRequest_ServiceType.GREENPLUM_POOLER:
      return "GREENPLUM_POOLER";
    case ListClusterLogsRequest_ServiceType.GREENPLUM_PXF:
      return "GREENPLUM_PXF";
    default:
      return "UNKNOWN";
  }
}

export interface ListClusterBackupsRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest";
  /**
   * ID of the Greenplum® cluster.
   *
   * To get the Greenplum® cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListClusterBackupsResponse.next_page_token] returned by the previous list request. */
  pageToken: string;
}

export interface StreamLogRecord {
  $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord";
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
  $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest";
  /** ID of the Greenplum® cluster. */
  clusterId: string;
  /**
   * Columns from log table to get in the response.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Type of the service to request logs about. */
  serviceType: StreamClusterLogsRequest_ServiceType;
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
  /** Record token. Set [record_token] to the [StreamLogs.next_record_token] returned by the previous [StreamLogs] request to start streaming from the next log record. */
  recordToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   *
   * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.error_severity] (for GREENPLUM service), [LogRecord.logs.message.level] (for POOLER service) fields.
   *
   * 2. An `=` operator.
   *
   * 3. A value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
   *
   * Examples of a filter:
   *
   * * `message.hostname='node1.db.cloud.yandex.net'`;
   * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
   */
  filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
  /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** GREENPLUM - Greenplum® activity logs. */
  GREENPLUM = 1,
  /** GREENPLUM_POOLER - Greenplum® pooler logs. */
  GREENPLUM_POOLER = 2,
  /** GREENPLUM_PXF - Greenplum® PXF service logs. */
  GREENPLUM_PXF = 3,
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
    case "GREENPLUM":
      return StreamClusterLogsRequest_ServiceType.GREENPLUM;
    case 2:
    case "GREENPLUM_POOLER":
      return StreamClusterLogsRequest_ServiceType.GREENPLUM_POOLER;
    case 3:
    case "GREENPLUM_PXF":
      return StreamClusterLogsRequest_ServiceType.GREENPLUM_PXF;
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
    case StreamClusterLogsRequest_ServiceType.GREENPLUM:
      return "GREENPLUM";
    case StreamClusterLogsRequest_ServiceType.GREENPLUM_POOLER:
      return "GREENPLUM_POOLER";
    case StreamClusterLogsRequest_ServiceType.GREENPLUM_PXF:
      return "GREENPLUM_PXF";
    default:
      return "UNKNOWN";
  }
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse";
  /** List of Greenplum® backups. */
  backups: Backup[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
   *
   * Each subsequent list request has its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest";
  /**
   * ID of the backup to create a cluster from.
   *
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /** Timestamp of the moment to which the Greenplum cluster should be restored. */
  time?: Date;
  /** ID of the folder to create the Greenplum® cluster in. */
  folderId: string;
  /** Name of the Greenplum® cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the Greenplum® cluster. */
  description: string;
  /**
   * Custom labels for the Greenplum® cluster as `key:value` pairs.
   * For example, "project":"mvp" or "source":"dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Greenplum® cluster. */
  environment: Cluster_Environment;
  /** Greenplum® cluster config. */
  config?: GreenplumRestoreConfig;
  /** Resources of the Greenplum® master subcluster. */
  masterResources?: Resources;
  /** Resources of the Greenplum® segment subcluster. */
  segmentResources?: Resources;
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups. */
  securityGroupIds: string[];
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Host groups to place VMs of cluster on. */
  hostGroupIds: string[];
  /** ID of the placement group. */
  placementGroupId: string;
  /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow;
  /** Number of segment hosts */
  segmentHostCount: number;
  /** Number of segments on each host */
  segmentInHost: number;
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata";
  /** ID of the new Greenplum® cluster that is being created from a backup. */
  clusterId: string;
  /** ID of the backup that is being used for creating a cluster. */
  backupId: string;
}

const baseGetClusterRequest: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest",
  clusterId: "",
};

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse",
  nextPageToken: "",
};

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  masterHostCount: 0,
  segmentInHost: 0,
  segmentHostCount: 0,
  userName: "",
  userPassword: "",
  networkId: "",
  securityGroupIds: "",
  deletionProtection: false,
  hostGroupIds: "",
};

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest" as const,

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
            "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(40).int32(message.environment);
    }
    if (message.config !== undefined) {
      GreenplumConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
    }
    if (message.masterConfig !== undefined) {
      MasterSubclusterConfigSpec.encode(
        message.masterConfig,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.segmentConfig !== undefined) {
      SegmentSubclusterConfigSpec.encode(
        message.segmentConfig,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.masterHostCount !== 0) {
      writer.uint32(72).int64(message.masterHostCount);
    }
    if (message.segmentInHost !== 0) {
      writer.uint32(80).int64(message.segmentInHost);
    }
    if (message.segmentHostCount !== 0) {
      writer.uint32(88).int64(message.segmentHostCount);
    }
    if (message.userName !== "") {
      writer.uint32(98).string(message.userName);
    }
    if (message.userPassword !== "") {
      writer.uint32(106).string(message.userPassword);
    }
    if (message.networkId !== "") {
      writer.uint32(114).string(message.networkId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(122).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(128).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(138).string(v!);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(162).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(
        message.cloudStorage,
        writer.uint32(170).fork()
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
    message.hostGroupIds = [];
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
          message.config = GreenplumConfig.decode(reader, reader.uint32());
          break;
        case 7:
          message.masterConfig = MasterSubclusterConfigSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.segmentConfig = SegmentSubclusterConfigSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.masterHostCount = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.segmentInHost = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.segmentHostCount = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.userName = reader.string();
          break;
        case 13:
          message.userPassword = reader.string();
          break;
        case 14:
          message.networkId = reader.string();
          break;
        case 15:
          message.securityGroupIds.push(reader.string());
          break;
        case 16:
          message.deletionProtection = reader.bool();
          break;
        case 17:
          message.hostGroupIds.push(reader.string());
          break;
        case 19:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          break;
        case 21:
          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
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
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumConfig.fromJSON(object.config)
        : undefined;
    message.masterConfig =
      object.masterConfig !== undefined && object.masterConfig !== null
        ? MasterSubclusterConfigSpec.fromJSON(object.masterConfig)
        : undefined;
    message.segmentConfig =
      object.segmentConfig !== undefined && object.segmentConfig !== null
        ? SegmentSubclusterConfigSpec.fromJSON(object.segmentConfig)
        : undefined;
    message.masterHostCount =
      object.masterHostCount !== undefined && object.masterHostCount !== null
        ? Number(object.masterHostCount)
        : 0;
    message.segmentInHost =
      object.segmentInHost !== undefined && object.segmentInHost !== null
        ? Number(object.segmentInHost)
        : 0;
    message.segmentHostCount =
      object.segmentHostCount !== undefined && object.segmentHostCount !== null
        ? Number(object.segmentHostCount)
        : 0;
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    message.userPassword =
      object.userPassword !== undefined && object.userPassword !== null
        ? String(object.userPassword)
        : "";
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.hostGroupIds = (object.hostGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigSpec.fromJSON(object.configSpec)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromJSON(object.cloudStorage)
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
    message.config !== undefined &&
      (obj.config = message.config
        ? GreenplumConfig.toJSON(message.config)
        : undefined);
    message.masterConfig !== undefined &&
      (obj.masterConfig = message.masterConfig
        ? MasterSubclusterConfigSpec.toJSON(message.masterConfig)
        : undefined);
    message.segmentConfig !== undefined &&
      (obj.segmentConfig = message.segmentConfig
        ? SegmentSubclusterConfigSpec.toJSON(message.segmentConfig)
        : undefined);
    message.masterHostCount !== undefined &&
      (obj.masterHostCount = Math.round(message.masterHostCount));
    message.segmentInHost !== undefined &&
      (obj.segmentInHost = Math.round(message.segmentInHost));
    message.segmentHostCount !== undefined &&
      (obj.segmentHostCount = Math.round(message.segmentHostCount));
    message.userName !== undefined && (obj.userName = message.userName);
    message.userPassword !== undefined &&
      (obj.userPassword = message.userPassword);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    if (message.hostGroupIds) {
      obj.hostGroupIds = message.hostGroupIds.map((e) => e);
    } else {
      obj.hostGroupIds = [];
    }
    message.maintenanceWindow !== undefined &&
      (obj.maintenanceWindow = message.maintenanceWindow
        ? MaintenanceWindow.toJSON(message.maintenanceWindow)
        : undefined);
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ConfigSpec.toJSON(message.configSpec)
        : undefined);
    message.cloudStorage !== undefined &&
      (obj.cloudStorage = message.cloudStorage
        ? CloudStorage.toJSON(message.cloudStorage)
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
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumConfig.fromPartial(object.config)
        : undefined;
    message.masterConfig =
      object.masterConfig !== undefined && object.masterConfig !== null
        ? MasterSubclusterConfigSpec.fromPartial(object.masterConfig)
        : undefined;
    message.segmentConfig =
      object.segmentConfig !== undefined && object.segmentConfig !== null
        ? SegmentSubclusterConfigSpec.fromPartial(object.segmentConfig)
        : undefined;
    message.masterHostCount = object.masterHostCount ?? 0;
    message.segmentInHost = object.segmentInHost ?? 0;
    message.segmentHostCount = object.segmentHostCount ?? 0;
    message.userName = object.userName ?? "";
    message.userPassword = object.userPassword ?? "";
    message.networkId = object.networkId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
        : undefined;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigSpec.fromPartial(object.configSpec)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromPartial(object.cloudStorage)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

const baseCreateClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry" as const,

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

const baseConfigSpec: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec",
};

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec" as const,

  encode(
    message: ConfigSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.greenplumConfig617 !== undefined) {
      Greenplumconfig617.encode(
        message.greenplumConfig617,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.greenplumConfig619 !== undefined) {
      Greenplumconfig619.encode(
        message.greenplumConfig619,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.greenplumConfig621 !== undefined) {
      Greenplumconfig621.encode(
        message.greenplumConfig621,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.greenplumConfig622 !== undefined) {
      Greenplumconfig622.encode(
        message.greenplumConfig622,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.greenplumConfig6 !== undefined) {
      GreenplumConfig6.encode(
        message.greenplumConfig6,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.pool !== undefined) {
      ConnectionPoolerConfig.encode(
        message.pool,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.backgroundActivities !== undefined) {
      BackgroundActivitiesConfig.encode(
        message.backgroundActivities,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.pxfConfig !== undefined) {
      PXFConfig.encode(message.pxfConfig, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigSpec } as ConfigSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.greenplumConfig617 = Greenplumconfig617.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.greenplumConfig619 = Greenplumconfig619.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.greenplumConfig621 = Greenplumconfig621.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.greenplumConfig622 = Greenplumconfig622.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.greenplumConfig6 = GreenplumConfig6.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.pool = ConnectionPoolerConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.backgroundActivities = BackgroundActivitiesConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.pxfConfig = PXFConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigSpec {
    const message = { ...baseConfigSpec } as ConfigSpec;
    message.greenplumConfig617 =
      object.greenplumConfig_6_17 !== undefined &&
      object.greenplumConfig_6_17 !== null
        ? Greenplumconfig617.fromJSON(object.greenplumConfig_6_17)
        : undefined;
    message.greenplumConfig619 =
      object.greenplumConfig_6_19 !== undefined &&
      object.greenplumConfig_6_19 !== null
        ? Greenplumconfig619.fromJSON(object.greenplumConfig_6_19)
        : undefined;
    message.greenplumConfig621 =
      object.greenplumConfig_6_21 !== undefined &&
      object.greenplumConfig_6_21 !== null
        ? Greenplumconfig621.fromJSON(object.greenplumConfig_6_21)
        : undefined;
    message.greenplumConfig622 =
      object.greenplumConfig_6_22 !== undefined &&
      object.greenplumConfig_6_22 !== null
        ? Greenplumconfig622.fromJSON(object.greenplumConfig_6_22)
        : undefined;
    message.greenplumConfig6 =
      object.greenplumConfig_6 !== undefined &&
      object.greenplumConfig_6 !== null
        ? GreenplumConfig6.fromJSON(object.greenplumConfig_6)
        : undefined;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? ConnectionPoolerConfig.fromJSON(object.pool)
        : undefined;
    message.backgroundActivities =
      object.backgroundActivities !== undefined &&
      object.backgroundActivities !== null
        ? BackgroundActivitiesConfig.fromJSON(object.backgroundActivities)
        : undefined;
    message.pxfConfig =
      object.pxfConfig !== undefined && object.pxfConfig !== null
        ? PXFConfig.fromJSON(object.pxfConfig)
        : undefined;
    return message;
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    message.greenplumConfig617 !== undefined &&
      (obj.greenplumConfig_6_17 = message.greenplumConfig617
        ? Greenplumconfig617.toJSON(message.greenplumConfig617)
        : undefined);
    message.greenplumConfig619 !== undefined &&
      (obj.greenplumConfig_6_19 = message.greenplumConfig619
        ? Greenplumconfig619.toJSON(message.greenplumConfig619)
        : undefined);
    message.greenplumConfig621 !== undefined &&
      (obj.greenplumConfig_6_21 = message.greenplumConfig621
        ? Greenplumconfig621.toJSON(message.greenplumConfig621)
        : undefined);
    message.greenplumConfig622 !== undefined &&
      (obj.greenplumConfig_6_22 = message.greenplumConfig622
        ? Greenplumconfig622.toJSON(message.greenplumConfig622)
        : undefined);
    message.greenplumConfig6 !== undefined &&
      (obj.greenplumConfig_6 = message.greenplumConfig6
        ? GreenplumConfig6.toJSON(message.greenplumConfig6)
        : undefined);
    message.pool !== undefined &&
      (obj.pool = message.pool
        ? ConnectionPoolerConfig.toJSON(message.pool)
        : undefined);
    message.backgroundActivities !== undefined &&
      (obj.backgroundActivities = message.backgroundActivities
        ? BackgroundActivitiesConfig.toJSON(message.backgroundActivities)
        : undefined);
    message.pxfConfig !== undefined &&
      (obj.pxfConfig = message.pxfConfig
        ? PXFConfig.toJSON(message.pxfConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec>, I>>(
    object: I
  ): ConfigSpec {
    const message = { ...baseConfigSpec } as ConfigSpec;
    message.greenplumConfig617 =
      object.greenplumConfig617 !== undefined &&
      object.greenplumConfig617 !== null
        ? Greenplumconfig617.fromPartial(object.greenplumConfig617)
        : undefined;
    message.greenplumConfig619 =
      object.greenplumConfig619 !== undefined &&
      object.greenplumConfig619 !== null
        ? Greenplumconfig619.fromPartial(object.greenplumConfig619)
        : undefined;
    message.greenplumConfig621 =
      object.greenplumConfig621 !== undefined &&
      object.greenplumConfig621 !== null
        ? Greenplumconfig621.fromPartial(object.greenplumConfig621)
        : undefined;
    message.greenplumConfig622 =
      object.greenplumConfig622 !== undefined &&
      object.greenplumConfig622 !== null
        ? Greenplumconfig622.fromPartial(object.greenplumConfig622)
        : undefined;
    message.greenplumConfig6 =
      object.greenplumConfig6 !== undefined && object.greenplumConfig6 !== null
        ? GreenplumConfig6.fromPartial(object.greenplumConfig6)
        : undefined;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? ConnectionPoolerConfig.fromPartial(object.pool)
        : undefined;
    message.backgroundActivities =
      object.backgroundActivities !== undefined &&
      object.backgroundActivities !== null
        ? BackgroundActivitiesConfig.fromPartial(object.backgroundActivities)
        : undefined;
    message.pxfConfig =
      object.pxfConfig !== undefined && object.pxfConfig !== null
        ? PXFConfig.fromPartial(object.pxfConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

const baseCreateClusterMetadata: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata",
  clusterId: "",
};

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest",
  clusterId: "",
  description: "",
  name: "",
  userPassword: "",
  securityGroupIds: "",
  deletionProtection: false,
};

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest" as const,

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
            "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.config !== undefined) {
      GreenplumConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
    }
    if (message.masterConfig !== undefined) {
      MasterSubclusterConfigSpec.encode(
        message.masterConfig,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.segmentConfig !== undefined) {
      SegmentSubclusterConfigSpec.encode(
        message.segmentConfig,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.userPassword !== "") {
      writer.uint32(106).string(message.userPassword);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(122).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(138).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(144).bool(message.deletionProtection);
    }
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(154).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(
        message.cloudStorage,
        writer.uint32(162).fork()
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
          message.name = reader.string();
          break;
        case 6:
          message.config = GreenplumConfig.decode(reader, reader.uint32());
          break;
        case 7:
          message.masterConfig = MasterSubclusterConfigSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.segmentConfig = SegmentSubclusterConfigSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.userPassword = reader.string();
          break;
        case 15:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.securityGroupIds.push(reader.string());
          break;
        case 18:
          message.deletionProtection = reader.bool();
          break;
        case 19:
          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          break;
        case 20:
          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumConfig.fromJSON(object.config)
        : undefined;
    message.masterConfig =
      object.masterConfig !== undefined && object.masterConfig !== null
        ? MasterSubclusterConfigSpec.fromJSON(object.masterConfig)
        : undefined;
    message.segmentConfig =
      object.segmentConfig !== undefined && object.segmentConfig !== null
        ? SegmentSubclusterConfigSpec.fromJSON(object.segmentConfig)
        : undefined;
    message.userPassword =
      object.userPassword !== undefined && object.userPassword !== null
        ? String(object.userPassword)
        : "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined;
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigSpec.fromJSON(object.configSpec)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromJSON(object.cloudStorage)
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
    message.name !== undefined && (obj.name = message.name);
    message.config !== undefined &&
      (obj.config = message.config
        ? GreenplumConfig.toJSON(message.config)
        : undefined);
    message.masterConfig !== undefined &&
      (obj.masterConfig = message.masterConfig
        ? MasterSubclusterConfigSpec.toJSON(message.masterConfig)
        : undefined);
    message.segmentConfig !== undefined &&
      (obj.segmentConfig = message.segmentConfig
        ? SegmentSubclusterConfigSpec.toJSON(message.segmentConfig)
        : undefined);
    message.userPassword !== undefined &&
      (obj.userPassword = message.userPassword);
    message.maintenanceWindow !== undefined &&
      (obj.maintenanceWindow = message.maintenanceWindow
        ? MaintenanceWindow.toJSON(message.maintenanceWindow)
        : undefined);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ConfigSpec.toJSON(message.configSpec)
        : undefined);
    message.cloudStorage !== undefined &&
      (obj.cloudStorage = message.cloudStorage
        ? CloudStorage.toJSON(message.cloudStorage)
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
    message.name = object.name ?? "";
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumConfig.fromPartial(object.config)
        : undefined;
    message.masterConfig =
      object.masterConfig !== undefined && object.masterConfig !== null
        ? MasterSubclusterConfigSpec.fromPartial(object.masterConfig)
        : undefined;
    message.segmentConfig =
      object.segmentConfig !== undefined && object.segmentConfig !== null
        ? SegmentSubclusterConfigSpec.fromPartial(object.segmentConfig)
        : undefined;
    message.userPassword = object.userPassword ?? "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
        : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigSpec.fromPartial(object.configSpec)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromPartial(object.cloudStorage)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

const baseUpdateClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata",
  clusterId: "",
};

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata" as const,

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

const baseAddClusterHostsMetadata: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata",
  clusterId: "",
};

export const AddClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata" as const,

  encode(
    message: AddClusterHostsMetadata,
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
  ): AddClusterHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddClusterHostsMetadata,
    } as AddClusterHostsMetadata;
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

  fromJSON(object: any): AddClusterHostsMetadata {
    const message = {
      ...baseAddClusterHostsMetadata,
    } as AddClusterHostsMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: AddClusterHostsMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddClusterHostsMetadata>, I>>(
    object: I
  ): AddClusterHostsMetadata {
    const message = {
      ...baseAddClusterHostsMetadata,
    } as AddClusterHostsMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddClusterHostsMetadata.$type, AddClusterHostsMetadata);

const baseExpandRequest: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest",
  clusterId: "",
  segmentHostCount: 0,
  addSegmentsPerHostCount: 0,
  duration: 0,
};

export const ExpandRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest" as const,

  encode(
    message: ExpandRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.segmentHostCount !== 0) {
      writer.uint32(16).int64(message.segmentHostCount);
    }
    if (message.addSegmentsPerHostCount !== 0) {
      writer.uint32(24).int64(message.addSegmentsPerHostCount);
    }
    if (message.duration !== 0) {
      writer.uint32(32).int64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpandRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpandRequest } as ExpandRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.segmentHostCount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.addSegmentsPerHostCount = longToNumber(
            reader.int64() as Long
          );
          break;
        case 4:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExpandRequest {
    const message = { ...baseExpandRequest } as ExpandRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.segmentHostCount =
      object.segmentHostCount !== undefined && object.segmentHostCount !== null
        ? Number(object.segmentHostCount)
        : 0;
    message.addSegmentsPerHostCount =
      object.addSegmentsPerHostCount !== undefined &&
      object.addSegmentsPerHostCount !== null
        ? Number(object.addSegmentsPerHostCount)
        : 0;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Number(object.duration)
        : 0;
    return message;
  },

  toJSON(message: ExpandRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.segmentHostCount !== undefined &&
      (obj.segmentHostCount = Math.round(message.segmentHostCount));
    message.addSegmentsPerHostCount !== undefined &&
      (obj.addSegmentsPerHostCount = Math.round(
        message.addSegmentsPerHostCount
      ));
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExpandRequest>, I>>(
    object: I
  ): ExpandRequest {
    const message = { ...baseExpandRequest } as ExpandRequest;
    message.clusterId = object.clusterId ?? "";
    message.segmentHostCount = object.segmentHostCount ?? 0;
    message.addSegmentsPerHostCount = object.addSegmentsPerHostCount ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ExpandRequest.$type, ExpandRequest);

const baseDeleteClusterRequest: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest",
  clusterId: "",
};

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata",
  clusterId: "",
};

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata" as const,

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

const baseStartClusterRequest: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest",
  clusterId: "",
};

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata",
  clusterId: "",
};

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest",
  clusterId: "",
};

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata",
  clusterId: "",
};

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata" as const,

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

const baseListClusterOperationsRequest: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse",
  nextPageToken: "",
};

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse",
  nextPageToken: "",
};

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse" as const,

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

const baseMasterSubclusterConfigSpec: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec",
};

export const MasterSubclusterConfigSpec = {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec" as const,

  encode(
    message: MasterSubclusterConfigSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MasterSubclusterConfigSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMasterSubclusterConfigSpec,
    } as MasterSubclusterConfigSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MasterSubclusterConfigSpec {
    const message = {
      ...baseMasterSubclusterConfigSpec,
    } as MasterSubclusterConfigSpec;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: MasterSubclusterConfigSpec): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterSubclusterConfigSpec>, I>>(
    object: I
  ): MasterSubclusterConfigSpec {
    const message = {
      ...baseMasterSubclusterConfigSpec,
    } as MasterSubclusterConfigSpec;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MasterSubclusterConfigSpec.$type,
  MasterSubclusterConfigSpec
);

const baseSegmentSubclusterConfigSpec: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec",
};

export const SegmentSubclusterConfigSpec = {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec" as const,

  encode(
    message: SegmentSubclusterConfigSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SegmentSubclusterConfigSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSegmentSubclusterConfigSpec,
    } as SegmentSubclusterConfigSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SegmentSubclusterConfigSpec {
    const message = {
      ...baseSegmentSubclusterConfigSpec,
    } as SegmentSubclusterConfigSpec;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: SegmentSubclusterConfigSpec): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SegmentSubclusterConfigSpec>, I>>(
    object: I
  ): SegmentSubclusterConfigSpec {
    const message = {
      ...baseSegmentSubclusterConfigSpec,
    } as SegmentSubclusterConfigSpec;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  SegmentSubclusterConfigSpec.$type,
  SegmentSubclusterConfigSpec
);

const baseListClusterLogsResponse: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse",
  nextPageToken: "",
};

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse" as const,

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

const baseLogRecord: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord",
};

export const LogRecord = {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord" as const,

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
          $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry",
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
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry",
  key: "",
  value: "",
};

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry" as const,

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

const baseListClusterLogsRequest: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest",
  clusterId: "",
  columnFilter: "",
  serviceType: 0,
  pageSize: 0,
  pageToken: "",
  alwaysNextPageToken: false,
  filter: "",
};

export const ListClusterLogsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest" as const,

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
    if (message.serviceType !== 0) {
      writer.uint32(24).int32(message.serviceType);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.fromTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.toTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(48).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(58).string(message.pageToken);
    }
    if (message.alwaysNextPageToken === true) {
      writer.uint32(64).bool(message.alwaysNextPageToken);
    }
    if (message.filter !== "") {
      writer.uint32(74).string(message.filter);
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
          message.serviceType = reader.int32() as any;
          break;
        case 4:
          message.fromTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.toTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.pageToken = reader.string();
          break;
        case 8:
          message.alwaysNextPageToken = reader.bool();
          break;
        case 9:
          message.filter = reader.string();
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
    message.serviceType =
      object.serviceType !== undefined && object.serviceType !== null
        ? listClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
        : 0;
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
    message.serviceType !== undefined &&
      (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(
        message.serviceType
      ));
    message.fromTime !== undefined &&
      (obj.fromTime = message.fromTime.toISOString());
    message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.alwaysNextPageToken !== undefined &&
      (obj.alwaysNextPageToken = message.alwaysNextPageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterLogsRequest>, I>>(
    object: I
  ): ListClusterLogsRequest {
    const message = { ...baseListClusterLogsRequest } as ListClusterLogsRequest;
    message.clusterId = object.clusterId ?? "";
    message.columnFilter = object.columnFilter?.map((e) => e) || [];
    message.serviceType = object.serviceType ?? 0;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.alwaysNextPageToken = object.alwaysNextPageToken ?? false;
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsRequest.$type, ListClusterLogsRequest);

const baseListClusterBackupsRequest: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest" as const,

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

const baseStreamLogRecord: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord",
  nextRecordToken: "",
};

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest",
  clusterId: "",
  columnFilter: "",
  serviceType: 0,
  recordToken: "",
  filter: "",
};

export const StreamClusterLogsRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest" as const,

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
    if (message.serviceType !== 0) {
      writer.uint32(24).int32(message.serviceType);
    }
    if (message.fromTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.fromTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.toTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.toTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.recordToken !== "") {
      writer.uint32(50).string(message.recordToken);
    }
    if (message.filter !== "") {
      writer.uint32(58).string(message.filter);
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
          message.serviceType = reader.int32() as any;
          break;
        case 4:
          message.fromTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.toTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.recordToken = reader.string();
          break;
        case 7:
          message.filter = reader.string();
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
    message.serviceType =
      object.serviceType !== undefined && object.serviceType !== null
        ? streamClusterLogsRequest_ServiceTypeFromJSON(object.serviceType)
        : 0;
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
    message.serviceType !== undefined &&
      (obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(
        message.serviceType
      ));
    message.fromTime !== undefined &&
      (obj.fromTime = message.fromTime.toISOString());
    message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
    message.recordToken !== undefined &&
      (obj.recordToken = message.recordToken);
    message.filter !== undefined && (obj.filter = message.filter);
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
    message.serviceType = object.serviceType ?? 0;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.recordToken = object.recordToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StreamClusterLogsRequest.$type,
  StreamClusterLogsRequest
);

const baseListClusterBackupsResponse: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse",
  nextPageToken: "",
};

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse" as const,

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

const baseRestoreClusterRequest: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest",
  backupId: "",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  securityGroupIds: "",
  deletionProtection: false,
  hostGroupIds: "",
  placementGroupId: "",
  segmentHostCount: 0,
  segmentInHost: 0,
};

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest" as const,

  encode(
    message: RestoreClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RestoreClusterRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(48).int32(message.environment);
    }
    if (message.config !== undefined) {
      GreenplumRestoreConfig.encode(
        message.config,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.masterResources !== undefined) {
      Resources.encode(
        message.masterResources,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.segmentResources !== undefined) {
      Resources.encode(
        message.segmentResources,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(96).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(106).string(v!);
    }
    if (message.placementGroupId !== "") {
      writer.uint32(114).string(message.placementGroupId);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.segmentHostCount !== 0) {
      writer.uint32(136).int64(message.segmentHostCount);
    }
    if (message.segmentInHost !== 0) {
      writer.uint32(144).int64(message.segmentInHost);
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
    message.hostGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backupId = reader.string();
          break;
        case 16:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = RestoreClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.environment = reader.int32() as any;
          break;
        case 7:
          message.config = GreenplumRestoreConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.masterResources = Resources.decode(reader, reader.uint32());
          break;
        case 9:
          message.segmentResources = Resources.decode(reader, reader.uint32());
          break;
        case 10:
          message.networkId = reader.string();
          break;
        case 11:
          message.securityGroupIds.push(reader.string());
          break;
        case 12:
          message.deletionProtection = reader.bool();
          break;
        case 13:
          message.hostGroupIds.push(reader.string());
          break;
        case 14:
          message.placementGroupId = reader.string();
          break;
        case 15:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.segmentHostCount = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.segmentInHost = longToNumber(reader.int64() as Long);
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
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
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
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumRestoreConfig.fromJSON(object.config)
        : undefined;
    message.masterResources =
      object.masterResources !== undefined && object.masterResources !== null
        ? Resources.fromJSON(object.masterResources)
        : undefined;
    message.segmentResources =
      object.segmentResources !== undefined && object.segmentResources !== null
        ? Resources.fromJSON(object.segmentResources)
        : undefined;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.hostGroupIds = (object.hostGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
        : "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined;
    message.segmentHostCount =
      object.segmentHostCount !== undefined && object.segmentHostCount !== null
        ? Number(object.segmentHostCount)
        : 0;
    message.segmentInHost =
      object.segmentInHost !== undefined && object.segmentInHost !== null
        ? Number(object.segmentInHost)
        : 0;
    return message;
  },

  toJSON(message: RestoreClusterRequest): unknown {
    const obj: any = {};
    message.backupId !== undefined && (obj.backupId = message.backupId);
    message.time !== undefined && (obj.time = message.time.toISOString());
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
    message.config !== undefined &&
      (obj.config = message.config
        ? GreenplumRestoreConfig.toJSON(message.config)
        : undefined);
    message.masterResources !== undefined &&
      (obj.masterResources = message.masterResources
        ? Resources.toJSON(message.masterResources)
        : undefined);
    message.segmentResources !== undefined &&
      (obj.segmentResources = message.segmentResources
        ? Resources.toJSON(message.segmentResources)
        : undefined);
    message.networkId !== undefined && (obj.networkId = message.networkId);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    if (message.hostGroupIds) {
      obj.hostGroupIds = message.hostGroupIds.map((e) => e);
    } else {
      obj.hostGroupIds = [];
    }
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    message.maintenanceWindow !== undefined &&
      (obj.maintenanceWindow = message.maintenanceWindow
        ? MaintenanceWindow.toJSON(message.maintenanceWindow)
        : undefined);
    message.segmentHostCount !== undefined &&
      (obj.segmentHostCount = Math.round(message.segmentHostCount));
    message.segmentInHost !== undefined &&
      (obj.segmentInHost = Math.round(message.segmentInHost));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestoreClusterRequest>, I>>(
    object: I
  ): RestoreClusterRequest {
    const message = { ...baseRestoreClusterRequest } as RestoreClusterRequest;
    message.backupId = object.backupId ?? "";
    message.time = object.time ?? undefined;
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
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumRestoreConfig.fromPartial(object.config)
        : undefined;
    message.masterResources =
      object.masterResources !== undefined && object.masterResources !== null
        ? Resources.fromPartial(object.masterResources)
        : undefined;
    message.segmentResources =
      object.segmentResources !== undefined && object.segmentResources !== null
        ? Resources.fromPartial(object.segmentResources)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    message.placementGroupId = object.placementGroupId ?? "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
        : undefined;
    message.segmentHostCount = object.segmentHostCount ?? 0;
    message.segmentInHost = object.segmentInHost ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

const baseRestoreClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const RestoreClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata",
  clusterId: "",
  backupId: "",
};

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata" as const,

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

/** A set of methods for managing Greenplum® clusters. */
export const ClusterServiceService = {
  /**
   * Returns the specified Greenplum® cluster.
   *
   * To get the list of all available Greenplum® clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) =>
      Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) =>
      Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
  list: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) =>
      Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) =>
      Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a Greenplum® cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) =>
      Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified Greenplum® cluster. */
  update: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) =>
      Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Expands the specified Greenplum® cluster. */
  expand: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Expand",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExpandRequest) =>
      Buffer.from(ExpandRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExpandRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified Greenplum® cluster. */
  delete: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) =>
      Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified Greenplum® cluster. */
  start: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) =>
      Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified Greenplum® cluster. */
  stop: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) =>
      Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListOperations",
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
  /** Retrieves a list of master hosts for the specified cluster. */
  listMasterHosts: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListMasterHosts",
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
  /** Retrieves a list of segment hosts for the specified cluster. */
  listSegmentHosts: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListSegmentHosts",
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
  /** Retrieves logs for the specified Greenplum® cluster. */
  listLogs: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListLogs",
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
  /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/StreamLogs",
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
  /** Retrieves a list of available backups for the specified Greenplum® cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListBackups",
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
  /** Creates a new Greenplum® cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) =>
      Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Greenplum® cluster.
   *
   * To get the list of all available Greenplum® clusters, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a Greenplum® cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified Greenplum® cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Expands the specified Greenplum® cluster. */
  expand: handleUnaryCall<ExpandRequest, Operation>;
  /** Deletes the specified Greenplum® cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Starts the specified Greenplum® cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stops the specified Greenplum® cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: handleUnaryCall<
    ListClusterOperationsRequest,
    ListClusterOperationsResponse
  >;
  /** Retrieves a list of master hosts for the specified cluster. */
  listMasterHosts: handleUnaryCall<
    ListClusterHostsRequest,
    ListClusterHostsResponse
  >;
  /** Retrieves a list of segment hosts for the specified cluster. */
  listSegmentHosts: handleUnaryCall<
    ListClusterHostsRequest,
    ListClusterHostsResponse
  >;
  /** Retrieves logs for the specified Greenplum® cluster. */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs: handleServerStreamingCall<
    StreamClusterLogsRequest,
    StreamLogRecord
  >;
  /** Retrieves a list of available backups for the specified Greenplum® cluster. */
  listBackups: handleUnaryCall<
    ListClusterBackupsRequest,
    ListClusterBackupsResponse
  >;
  /** Creates a new Greenplum® cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified Greenplum® cluster.
   *
   * To get the list of all available Greenplum® clusters, make a [List] request.
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
  /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
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
  /** Creates a Greenplum® cluster in the specified folder. */
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
  /** Updates the specified Greenplum® cluster. */
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
  /** Expands the specified Greenplum® cluster. */
  expand(
    request: ExpandRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  expand(
    request: ExpandRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  expand(
    request: ExpandRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified Greenplum® cluster. */
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
  /** Starts the specified Greenplum® cluster. */
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
  /** Stops the specified Greenplum® cluster. */
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
  /** Retrieves a list of master hosts for the specified cluster. */
  listMasterHosts(
    request: ListClusterHostsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  listMasterHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  listMasterHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves a list of segment hosts for the specified cluster. */
  listSegmentHosts(
    request: ListClusterHostsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  listSegmentHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  listSegmentHosts(
    request: ListClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterHostsResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves logs for the specified Greenplum® cluster. */
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
  /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs(
    request: StreamClusterLogsRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<StreamLogRecord>;
  streamLogs(
    request: StreamClusterLogsRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<StreamLogRecord>;
  /** Retrieves a list of available backups for the specified Greenplum® cluster. */
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
  /** Creates a new Greenplum® cluster using the specified backup. */
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
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.greenplum.v1.ClusterService"
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
