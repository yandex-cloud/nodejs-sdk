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
  Resources,
  Host_Type,
  Access,
  CloudStorage,
  Cluster,
  Host,
  Shard,
  ShardGroup,
  cluster_EnvironmentFromJSON,
  cluster_EnvironmentToJSON,
  host_TypeFromJSON,
  host_TypeToJSON,
} from "../../../../../yandex/cloud/mdb/clickhouse/v1/cluster";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import {
  ClickhouseConfig_ExternalDictionary,
  ClickhouseConfig,
} from "../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { DatabaseSpec } from "../../../../../yandex/cloud/mdb/clickhouse/v1/database";
import { UserSpec } from "../../../../../yandex/cloud/mdb/clickhouse/v1/user";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { Backup } from "../../../../../yandex/cloud/mdb/clickhouse/v1/backup";
import { BoolValue, Int64Value } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterRequest";
  /**
   * ID of the ClickHouse Cluster resource to return.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersRequest";
  /**
   * ID of the folder to list ClickHouse clusters in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
   */
  filter: string;
}

export interface ListClustersResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersResponse";
  /** List of ClickHouse Cluster resources. */
  clusters: Cluster[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
   * for the [ListClustersRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest";
  /** ID of the folder to create the ClickHouse cluster in. */
  folderId: string;
  /** Name of the ClickHouse cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the ClickHouse cluster. */
  description: string;
  /**
   * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the ClickHouse cluster. */
  environment: Cluster_Environment;
  /** Configuration and resources for hosts that should be created for the ClickHouse cluster. */
  configSpec?: ConfigSpec;
  /** Descriptions of databases to be created in the ClickHouse cluster. */
  databaseSpecs: DatabaseSpec[];
  /** Descriptions of database users to be created in the ClickHouse cluster. */
  userSpecs: UserSpec[];
  /** Individual configurations for hosts that should be created for the ClickHouse cluster. */
  hostSpecs: HostSpec[];
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** Name of the first shard in cluster. If not set, defaults to the value 'shard1'. */
  shardName: string;
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Window of maintenance operations. */
  maintenanceWindow?: MaintenanceWindow;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterMetadata";
  /** ID of the ClickHouse cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest";
  /**
   * ID of the ClickHouse Cluster resource to update.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the ClickHouse Cluster resource should be updated. */
  updateMask?: FieldMask;
  /** New description of the ClickHouse cluster. */
  description: string;
  /**
   * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   *
   * The new set of labels will completely replace the old ones. To add a label, request the current
   * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
   */
  labels: { [key: string]: string };
  /** New configuration and resources for hosts in the cluster. */
  configSpec?: ConfigSpec;
  /** New name for the cluster. */
  name: string;
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** New maintenance window settings for the cluster. */
  maintenanceWindow?: MaintenanceWindow;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterMetadata";
  /** ID of the ClickHouse Cluster resource that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest";
  /**
   * ID of the ClickHouse cluster to delete.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterMetadata";
  /** ID of the ClickHouse cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterRequest";
  /** ID of the ClickHouse cluster to start. */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterMetadata";
  /** ID of the ClickHouse cluster being started. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterRequest";
  /** ID of the ClickHouse cluster to stop. */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterMetadata";
  /** ID of the ClickHouse cluster being stopped. */
  clusterId: string;
}

export interface MoveClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest";
  /** ID of the ClickHouse cluster to move. */
  clusterId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterMetadata";
  /** ID of the ClickHouse cluster being moved. */
  clusterId: string;
  /** ID of the source folder. */
  sourceFolderId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface AddClusterZookeeperRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest";
  /** ID of the ClickHouse cluster to modify. */
  clusterId: string;
  /** Resources allocated to Zookeeper hosts. */
  resources?: Resources;
  /** Configuration of ZooKeeper hosts. */
  hostSpecs: HostSpec[];
}

export interface AddClusterZookeeperMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperMetadata";
  /** ID of the ClickHouse cluster. */
  clusterId: string;
}

export interface BackupClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest";
  /**
   * ID of the ClickHouse cluster to back up.
   * To get the ClickHouse cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface BackupClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterMetadata";
  /** ID of the ClickHouse cluster that is being backed up. */
  clusterId: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest";
  /**
   * ID of the backup to restore from. This backup will be used to create one cluster shard.
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /**
   * Additional IDs of the backups to restore from.
   * Each additional backup is responsible for restoring separate shard.
   * Restored cluster will have len(additional_backup_ids)+1 shards in total.
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  additionalBackupIds: string[];
  /** Name of the new ClickHouse cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the new ClickHouse cluster. */
  description: string;
  /**
   * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the new ClickHouse cluster. */
  environment: Cluster_Environment;
  /** Configuration for the ClickHouse cluster to be created. */
  configSpec?: ConfigSpec;
  /**
   * Configurations for ClickHouse hosts that should be created for
   * the cluster that is being created from the backup.
   */
  hostSpecs: HostSpec[];
  /** ID of the network to create the ClickHouse cluster in. */
  networkId: string;
  /** ID of the folder to create the ClickHouse cluster in. */
  folderId: string;
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** User security groups */
  securityGroupIds: string[];
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterMetadata";
  /** ID of the new ClickHouse cluster that is being created from a backup. */
  clusterId: string;
  /** ID of the backup that is being used for creating a cluster. */
  backupId: string;
}

export interface RescheduleMaintenanceRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest";
  /** ID of the ClickHouse cluster to reschedule the maintenance operation for. */
  clusterId: string;
  /** The type of reschedule request. */
  rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
  /** The time until which this maintenance operation should be delayed. The value should be ahead of the first time when the maintenance operation has been scheduled for no more than two weeks. The value can also point to the past moment of time if [reschedule_type.IMMEDIATE] reschedule type is chosen. */
  delayedUntil?: Date;
}

export enum RescheduleMaintenanceRequest_RescheduleType {
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

/** Rescheduled maintenance operation metadata. */
export interface RescheduleMaintenanceMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceMetadata";
  /** Required. ID of the ClickHouse cluster. */
  clusterId: string;
  /** Required. The time until which this maintenance operation is to be delayed. */
  delayedUntil?: Date;
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord";
  /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  timestamp?: Date;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest";
  /**
   * ID of the ClickHouse cluster to request logs for.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from logs table to request.
   * If no columns are specified, entire log records are returned.
   */
  columnFilter: string[];
  /** Type of the service to request logs about. */
  serviceType: ListClusterLogsRequest_ServiceType;
  /** Start timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  fromTime?: Date;
  /** End timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  toTime?: Date;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export enum ListClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** CLICKHOUSE - Logs of ClickHouse activity. */
  CLICKHOUSE = 1,
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
    case "CLICKHOUSE":
      return ListClusterLogsRequest_ServiceType.CLICKHOUSE;
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
    case ListClusterLogsRequest_ServiceType.CLICKHOUSE:
      return "CLICKHOUSE";
    default:
      return "UNKNOWN";
  }
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse";
  /** Requested log records. */
  logs: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   * This value is interchangeable with the [StreamLogRecord.next_record_token] from StreamLogs method.
   */
  nextPageToken: string;
}

export interface StreamLogRecord {
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamLogRecord";
  /** One of the requested log records. */
  record?: LogRecord;
  /**
   * This token allows you to continue streaming logs starting from the exact
   * same record. To continue streaming, specify value of [next_record_token[
   * as value for the [StreamClusterLogsRequest.record_token] parameter in the next StreamLogs request.
   * This value is interchangeable with the [ListClusterLogsResponse.next_page_token] from ListLogs method.
   */
  nextRecordToken: string;
}

export interface StreamClusterLogsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest";
  /** Required. ID of the ClickHouse cluster. */
  clusterId: string;
  /** Columns from logs table to get in the response. */
  columnFilter: string[];
  serviceType: StreamClusterLogsRequest_ServiceType;
  /** Start timestamp for the logs request. */
  fromTime?: Date;
  /**
   * End timestamp for the logs request.
   * If this field is not set, all existing logs will be sent and then the new ones as
   * they appear. In essence it has `tail -f` semantics.
   */
  toTime?: Date;
  /**
   * Record token. Set [record_token] to the [StreamLogRecord.next_record_token] returned by a previous StreamLogs
   * request to start streaming from next log record.
   */
  recordToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.severity] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
   * Examples of a filter:
   * - `message.hostname='node1.db.cloud.yandex.net'`
   * - `message.severity IN ('Error', 'Fatal') AND message.hostname != 'node2.db.cloud.yandex.net'`.
   */
  filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** CLICKHOUSE - Logs of ClickHouse activity. */
  CLICKHOUSE = 1,
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
    case "CLICKHOUSE":
      return StreamClusterLogsRequest_ServiceType.CLICKHOUSE;
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
    case StreamClusterLogsRequest_ServiceType.CLICKHOUSE:
      return "CLICKHOUSE";
    default:
      return "UNKNOWN";
  }
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest";
  /** ID of the ClickHouse Cluster resource to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified ClickHouse cluster. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterBackupsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest";
  /**
   * ID of the ClickHouse cluster.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterBackupsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse";
  /** List of ClickHouse Backup resources. */
  backups: Backup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterHostsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest";
  /**
   * ID of the ClickHouse cluster.
   * To get the ClickHouse cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterHostsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse";
  /** Requested list of hosts for the cluster. */
  hosts: Host[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface AddClusterHostsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest";
  /**
   * ID of the ClickHouse cluster to add hosts to.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configurations for ClickHouse hosts that should be added to the cluster. */
  hostSpecs: HostSpec[];
  /** Whether to copy schema to new ClickHouse hosts from replicas. */
  copySchema?: boolean;
}

export interface AddClusterHostsMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsMetadata";
  /** ID of the ClickHouse cluster to which the hosts are being added. */
  clusterId: string;
  /** Names of hosts that are being added to the cluster. */
  hostNames: string[];
}

export interface UpdateHostSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateHostSpec";
  /**
   * Name of the host to update.
   * To get the ClickHouse host name, use a [ClusterService.ListHosts] request.
   */
  hostName: string;
  /** Field mask that specifies which fields of the ClickHouse host should be updated. */
  updateMask?: FieldMask;
  /** Whether the host should get a public IP address on creation. */
  assignPublicIp?: boolean;
}

export interface UpdateClusterHostsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsRequest";
  /**
   * ID of the ClickHouse cluster to update hosts in.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** New configurations to apply to hosts. */
  updateHostSpecs: UpdateHostSpec[];
}

export interface UpdateClusterHostsMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsMetadata";
  /** ID of the ClickHouse cluster to modify hosts in. */
  clusterId: string;
  /** Names of hosts that are being modified. */
  hostNames: string[];
}

export interface DeleteClusterHostsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest";
  /**
   * ID of the ClickHouse cluster to remove hosts from.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Names of hosts to delete. */
  hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsMetadata";
  /** ID of the ClickHouse cluster to remove hosts from. */
  clusterId: string;
  /** Names of hosts that are being deleted. */
  hostNames: string[];
}

export interface GetClusterShardRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest";
  /**
   * ID of the cluster that the shard belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   * To get the name of the database, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard to request information about.
   * To get the name of a shard, use a [ClusterService.ListShards] request.
   */
  shardName: string;
}

export interface ListClusterShardsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest";
  /**
   * ID of the ClickHouse cluster to list shards in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterShardsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  to get the next page of results, set [page_token] to the [ListClusterShardsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterShardsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse";
  /** List of ClickHouse shards. */
  shards: Shard[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterShardsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterShardsRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface AddClusterShardRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest";
  /**
   * ID of the ClickHouse cluster to add a shard to.
   * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name for the new shard. */
  shardName: string;
  /** Configuration of the new shard. */
  configSpec?: ShardConfigSpec;
  /** Configurations for ClickHouse hosts that should be created with the shard. */
  hostSpecs: HostSpec[];
  /** Whether to copy schema to hosts of the shard to be created. The schema is copied from hosts of an existing shard. */
  copySchema?: boolean;
}

export interface AddClusterShardMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardMetadata";
  /** ID of the cluster that a shard is being added to. */
  clusterId: string;
  /** Name of the shard being created. */
  shardName: string;
}

export interface UpdateClusterShardRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest";
  /**
   * ID of the ClickHouse cluster the shard belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard to be updated.
   * To get the name of a shard, use a [ClusterService.ListShards] request.
   */
  shardName: string;
  /** Field mask that specifies which attributes of the ClickHouse shard should be updated. */
  updateMask?: FieldMask;
  /** New configuration for the specified shard. */
  configSpec?: ShardConfigSpec;
}

export interface UpdateClusterShardMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardMetadata";
  /** ID of the cluster that contains the shard being updated. */
  clusterId: string;
  /** Name of the shard being updated. */
  shardName: string;
}

export interface DeleteClusterShardRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest";
  /**
   * ID of the ClickHouse cluster the shard belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard to be deleted.
   * To get the name of a shard, use a [ClusterService.ListShards] request.
   */
  shardName: string;
}

export interface DeleteClusterShardMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardMetadata";
  /** ID of the cluster that contains the shard being deleted. */
  clusterId: string;
  /** Name of the shard being deleted. */
  shardName: string;
}

export interface GetClusterShardGroupRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest";
  /**
   * ID of the cluster that the shard group belongs to.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard group to request information about.
   *
   * To get the name of a shard group, make a [ClusterService.ListShardGroups] request.
   */
  shardGroupName: string;
}

export interface ListClusterShardGroupsRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest";
  /**
   * ID of the cluster that the shard group belongs to.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the service returns a [ListClusterShardGroupsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.
   *
   * To get the next page of results, set [page_token] to the [ListClusterShardGroupsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterShardGroupsResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse";
  /** List of ClickHouse cluster's shard groups. */
  shardGroups: ShardGroup[];
  /**
   * This token allows you to get the next page of results for list requests.
   *
   * If the number of results is larger than [ListClusterShardGroupsRequest.page_size], use the [next_page_token] as the value for the [ListClusterShardGroupsRequest.page_token] parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterShardGroupRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest";
  /**
   * ID of the ClickHouse cluster to add a shard group to.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name for the new shard group. */
  shardGroupName: string;
  /** Description of the new shard group. 0-256 characters long. */
  description: string;
  /**
   * List of shard names that should be put into the new group.
   *
   * To get the list, make a [ClusterService.ListShardGroups] request.
   */
  shardNames: string[];
}

export interface CreateClusterShardGroupMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupMetadata";
  /** ID of the cluster to add a shard group to. */
  clusterId: string;
  /** Name of the shard group that is being added. */
  shardGroupName: string;
}

export interface UpdateClusterShardGroupRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest";
  /**
   * ID of the ClickHouse cluster that contains the shard group to update.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard group that should be updated.
   *
   * To get the name, make a [ClusterService.ListShardGroups] request.
   */
  shardGroupName: string;
  updateMask?: FieldMask;
  /** Updated description of the shard group. 0-256 characters long. */
  description: string;
  /** Updated list of shard names that belongs to the shard group. */
  shardNames: string[];
}

export interface UpdateClusterShardGroupMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupMetadata";
  /** ID of the cluster that contains the shard group being updated. */
  clusterId: string;
  /** Name of the shard group that is being updated. */
  shardGroupName: string;
}

export interface DeleteClusterShardGroupRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest";
  /**
   * ID of the ClickHouse cluster that contains the shard group to delete.
   *
   * To get the cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the shard group that should be deleted.
   *
   * To get the name, make a [ClusterService.ListShardGroups] request.
   */
  shardGroupName: string;
}

export interface DeleteClusterShardGroupMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupMetadata";
  /** ID of the cluster that contains the shard group being deleted. */
  clusterId: string;
  /** Name of the shard group that is being deleted. */
  shardGroupName: string;
}

export interface ListClusterExternalDictionariesRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesRequest";
  /** ID of the cluster that the external dictionaries belong to. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterExternalDictionaryResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListClusterExternalDictionaryResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListClusterExternalDictionariesResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesResponse";
  /** List of ClickHouse Cluster external dictionaries. */
  externalDictionaries: ClickhouseConfig_ExternalDictionary[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterExternalDictionaryRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterExternalDictionaryRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateClusterExternalDictionaryRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest";
  /**
   * ID of the ClickHouse cluster to create the external dictionary for.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the external dictionary. */
  externalDictionary?: ClickhouseConfig_ExternalDictionary;
}

export interface CreateClusterExternalDictionaryMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryMetadata";
  /** ID of the cluster for which an external dictionary is being created. */
  clusterId: string;
}

export interface UpdateClusterExternalDictionaryRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryRequest";
  /**
   * ID of the ClickHouse cluster to update the external dictionary for.
   * To get the cluster ID, use a [List] request.
   */
  clusterId: string;
  /** Configuration of the external dictionary. */
  externalDictionary?: ClickhouseConfig_ExternalDictionary;
  /** Field mask that specifies which fields of the External Dictionary should be updated. */
  updateMask?: FieldMask;
}

export interface UpdateClusterExternalDictionaryMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryMetadata";
  /** ID of the cluster for which an external dictionary is being updated. */
  clusterId: string;
  /** Name of the external dictionary. */
  externalDictionaryName: string;
}

export interface DeleteClusterExternalDictionaryRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest";
  /**
   * ID of the ClickHouse cluster to delete the external dictionary from.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the external dictionary to delete. */
  externalDictionaryName: string;
}

export interface DeleteClusterExternalDictionaryMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryMetadata";
  /** ID of the cluster where an external dictionary is being deleted. */
  clusterId: string;
}

export interface HostSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.HostSpec";
  /**
   * ID of the availability zone where the host resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /** Type of the host to be deployed. */
  type: Host_Type;
  /**
   * ID of the subnet that the host should belong to. This subnet should be a part
   * of the network that the cluster belongs to.
   * The ID of the network is set in the [Cluster.network_id] field.
   */
  subnetId: string;
  /**
   * Whether the host should get a public IP address on creation.
   *
   * After a host has been created, this setting cannot be changed. To remove an assigned public IP, or to assign
   * a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
   *
   * Possible values:
   * * false - don't assign a public IP to the host.
   * * true - the host should have a public IP address.
   */
  assignPublicIp: boolean;
  /** Name of the shard that the host is assigned to. */
  shardName: string;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec";
  /** Version of the ClickHouse server software. */
  version: string;
  /** Configuration and resources for a ClickHouse server. */
  clickhouse?: ConfigSpec_Clickhouse;
  /** Configuration and resources for a ZooKeeper server. */
  zookeeper?: ConfigSpec_Zookeeper;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /**
   * Access policy for external services.
   *
   * If you want a specific service to access the ClickHouse cluster, then set the necessary values in this policy.
   */
  access?: Access;
  cloudStorage?: CloudStorage;
  /** Whether database management through SQL commands is enabled. */
  sqlDatabaseManagement?: boolean;
  /** Whether user management through SQL commands is enabled. */
  sqlUserManagement?: boolean;
  /** Password for user 'admin' that has SQL user management access. */
  adminPassword: string;
  /** Whether cluster should use embedded Keeper instead of Zookeeper */
  embeddedKeeper?: boolean;
}

export interface ConfigSpec_Clickhouse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Clickhouse";
  /** Configuration for a ClickHouse server. */
  config?: ClickhouseConfig;
  /** Resources allocated to ClickHouse hosts. */
  resources?: Resources;
}

export interface ConfigSpec_Zookeeper {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Zookeeper";
  /**
   * Resources allocated to ZooKeeper hosts. If not set, minimal available resources will be used.
   * All available resource presets can be retrieved with a [ResourcePresetService.List] request.
   */
  resources?: Resources;
}

export interface ShardConfigSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec";
  /** ClickHouse configuration for a shard. */
  clickhouse?: ShardConfigSpec_Clickhouse;
}

export interface ShardConfigSpec_Clickhouse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec.Clickhouse";
  /** ClickHouse settings for the shard. */
  config?: ClickhouseConfig;
  /** Computational resources for the shard. */
  resources?: Resources;
  /**
   * Relative weight of the shard considered when writing data to the cluster.
   * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/operations/table_engines/distributed/).
   */
  weight?: number;
}

const baseGetClusterRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterRequest",
  clusterId: "",
};

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersResponse",
  nextPageToken: "",
};

export const ListClustersResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClustersResponse" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  shardName: "",
  serviceAccountId: "",
  securityGroupIds: "",
  deletionProtection: false,
};

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest" as const,

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
            "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry",
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
      ConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.databaseSpecs) {
      DatabaseSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.userSpecs) {
      UserSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    if (message.shardName !== "") {
      writer.uint32(90).string(message.shardName);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(98).string(message.serviceAccountId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(106).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(122).fork()
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
    message.databaseSpecs = [];
    message.userSpecs = [];
    message.hostSpecs = [];
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
          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          break;
        case 7:
          message.databaseSpecs.push(
            DatabaseSpec.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.userSpecs.push(UserSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          break;
        case 10:
          message.networkId = reader.string();
          break;
        case 11:
          message.shardName = reader.string();
          break;
        case 12:
          message.serviceAccountId = reader.string();
          break;
        case 13:
          message.securityGroupIds.push(reader.string());
          break;
        case 14:
          message.deletionProtection = reader.bool();
          break;
        case 15:
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
        ? ConfigSpec.fromJSON(object.configSpec)
        : undefined;
    message.databaseSpecs = (object.databaseSpecs ?? []).map((e: any) =>
      DatabaseSpec.fromJSON(e)
    );
    message.userSpecs = (object.userSpecs ?? []).map((e: any) =>
      UserSpec.fromJSON(e)
    );
    message.hostSpecs = (object.hostSpecs ?? []).map((e: any) =>
      HostSpec.fromJSON(e)
    );
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
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
        ? ConfigSpec.toJSON(message.configSpec)
        : undefined);
    if (message.databaseSpecs) {
      obj.databaseSpecs = message.databaseSpecs.map((e) =>
        e ? DatabaseSpec.toJSON(e) : undefined
      );
    } else {
      obj.databaseSpecs = [];
    }
    if (message.userSpecs) {
      obj.userSpecs = message.userSpecs.map((e) =>
        e ? UserSpec.toJSON(e) : undefined
      );
    } else {
      obj.userSpecs = [];
    }
    if (message.hostSpecs) {
      obj.hostSpecs = message.hostSpecs.map((e) =>
        e ? HostSpec.toJSON(e) : undefined
      );
    } else {
      obj.hostSpecs = [];
    }
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
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
        ? ConfigSpec.fromPartial(object.configSpec)
        : undefined;
    message.databaseSpecs =
      object.databaseSpecs?.map((e) => DatabaseSpec.fromPartial(e)) || [];
    message.userSpecs =
      object.userSpecs?.map((e) => UserSpec.fromPartial(e)) || [];
    message.hostSpecs =
      object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.networkId = object.networkId ?? "";
    message.shardName = object.shardName ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
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
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterMetadata",
  clusterId: "",
};

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest",
  clusterId: "",
  description: "",
  name: "",
  serviceAccountId: "",
  securityGroupIds: "",
  deletionProtection: false,
};

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest" as const,

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
            "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(58).string(message.serviceAccountId);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(66).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(74).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(80).bool(message.deletionProtection);
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
          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.serviceAccountId = reader.string();
          break;
        case 8:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.securityGroupIds.push(reader.string());
          break;
        case 10:
          message.deletionProtection = reader.bool();
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
        ? ConfigSpec.fromJSON(object.configSpec)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
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
        ? ConfigSpec.toJSON(message.configSpec)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
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
        ? ConfigSpec.fromPartial(object.configSpec)
        : undefined;
    message.name = object.name ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
        : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

const baseUpdateClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterMetadata",
  clusterId: "",
};

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest",
  clusterId: "",
};

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterMetadata",
  clusterId: "",
};

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterRequest",
  clusterId: "",
};

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterMetadata",
  clusterId: "",
};

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StartClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterRequest",
  clusterId: "",
};

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterMetadata",
  clusterId: "",
};

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StopClusterMetadata" as const,

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

const baseMoveClusterRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest",
  clusterId: "",
  destinationFolderId: "",
};

export const MoveClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterMetadata",
  clusterId: "",
  sourceFolderId: "",
  destinationFolderId: "",
};

export const MoveClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.MoveClusterMetadata" as const,

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

const baseAddClusterZookeeperRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest",
  clusterId: "",
};

export const AddClusterZookeeperRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest" as const,

  encode(
    message: AddClusterZookeeperRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddClusterZookeeperRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddClusterZookeeperRequest,
    } as AddClusterZookeeperRequest;
    message.hostSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddClusterZookeeperRequest {
    const message = {
      ...baseAddClusterZookeeperRequest,
    } as AddClusterZookeeperRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.hostSpecs = (object.hostSpecs ?? []).map((e: any) =>
      HostSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AddClusterZookeeperRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    if (message.hostSpecs) {
      obj.hostSpecs = message.hostSpecs.map((e) =>
        e ? HostSpec.toJSON(e) : undefined
      );
    } else {
      obj.hostSpecs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddClusterZookeeperRequest>, I>>(
    object: I
  ): AddClusterZookeeperRequest {
    const message = {
      ...baseAddClusterZookeeperRequest,
    } as AddClusterZookeeperRequest;
    message.clusterId = object.clusterId ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.hostSpecs =
      object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  AddClusterZookeeperRequest.$type,
  AddClusterZookeeperRequest
);

const baseAddClusterZookeeperMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperMetadata",
  clusterId: "",
};

export const AddClusterZookeeperMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperMetadata" as const,

  encode(
    message: AddClusterZookeeperMetadata,
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
  ): AddClusterZookeeperMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddClusterZookeeperMetadata,
    } as AddClusterZookeeperMetadata;
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

  fromJSON(object: any): AddClusterZookeeperMetadata {
    const message = {
      ...baseAddClusterZookeeperMetadata,
    } as AddClusterZookeeperMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: AddClusterZookeeperMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddClusterZookeeperMetadata>, I>>(
    object: I
  ): AddClusterZookeeperMetadata {
    const message = {
      ...baseAddClusterZookeeperMetadata,
    } as AddClusterZookeeperMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AddClusterZookeeperMetadata.$type,
  AddClusterZookeeperMetadata
);

const baseBackupClusterRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest",
  clusterId: "",
};

export const BackupClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterMetadata",
  clusterId: "",
};

export const BackupClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.BackupClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest",
  backupId: "",
  additionalBackupIds: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  folderId: "",
  serviceAccountId: "",
  securityGroupIds: "",
};

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest" as const,

  encode(
    message: RestoreClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backupId !== "") {
      writer.uint32(10).string(message.backupId);
    }
    for (const v of message.additionalBackupIds) {
      writer.uint32(106).string(v!);
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
            "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry",
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
      ConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(66).string(message.networkId);
    }
    if (message.folderId !== "") {
      writer.uint32(74).string(message.folderId);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(82).string(message.serviceAccountId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
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
    message.additionalBackupIds = [];
    message.labels = {};
    message.hostSpecs = [];
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backupId = reader.string();
          break;
        case 13:
          message.additionalBackupIds.push(reader.string());
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
          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          break;
        case 7:
          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          break;
        case 8:
          message.networkId = reader.string();
          break;
        case 9:
          message.folderId = reader.string();
          break;
        case 10:
          message.serviceAccountId = reader.string();
          break;
        case 11:
          message.securityGroupIds.push(reader.string());
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
    message.additionalBackupIds = (object.additionalBackupIds ?? []).map(
      (e: any) => String(e)
    );
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
        ? ConfigSpec.fromJSON(object.configSpec)
        : undefined;
    message.hostSpecs = (object.hostSpecs ?? []).map((e: any) =>
      HostSpec.fromJSON(e)
    );
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: RestoreClusterRequest): unknown {
    const obj: any = {};
    message.backupId !== undefined && (obj.backupId = message.backupId);
    if (message.additionalBackupIds) {
      obj.additionalBackupIds = message.additionalBackupIds.map((e) => e);
    } else {
      obj.additionalBackupIds = [];
    }
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
        ? ConfigSpec.toJSON(message.configSpec)
        : undefined);
    if (message.hostSpecs) {
      obj.hostSpecs = message.hostSpecs.map((e) =>
        e ? HostSpec.toJSON(e) : undefined
      );
    } else {
      obj.hostSpecs = [];
    }
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestoreClusterRequest>, I>>(
    object: I
  ): RestoreClusterRequest {
    const message = { ...baseRestoreClusterRequest } as RestoreClusterRequest;
    message.backupId = object.backupId ?? "";
    message.additionalBackupIds =
      object.additionalBackupIds?.map((e) => e) || [];
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
        ? ConfigSpec.fromPartial(object.configSpec)
        : undefined;
    message.hostSpecs =
      object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.networkId = object.networkId ?? "";
    message.folderId = object.folderId ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

const baseRestoreClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const RestoreClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterMetadata",
  clusterId: "",
  backupId: "",
};

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RestoreClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest",
  clusterId: "",
  rescheduleType: 0,
};

export const RescheduleMaintenanceRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceMetadata",
  clusterId: "",
};

export const RescheduleMaintenanceMetadata = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceMetadata" as const,

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

const baseLogRecord: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord",
};

export const LogRecord = {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord" as const,

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
          $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry",
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
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry",
  key: "",
  value: "",
};

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.clickhouse.v1.LogRecord.MessageEntry" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest",
  clusterId: "",
  columnFilter: "",
  serviceType: 0,
  pageSize: 0,
  pageToken: "",
};

export const ListClusterLogsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest" as const,

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
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsRequest.$type, ListClusterLogsRequest);

const baseListClusterLogsResponse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse",
  nextPageToken: "",
};

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamLogRecord",
  nextRecordToken: "",
};

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamLogRecord" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest",
  clusterId: "",
  columnFilter: "",
  serviceType: 0,
  recordToken: "",
  filter: "",
};

export const StreamClusterLogsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest" as const,

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

const baseListClusterOperationsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse",
  nextPageToken: "",
};

export const ListClusterOperationsResponse = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse" as const,

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

const baseListClusterBackupsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse",
  nextPageToken: "",
};

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse" as const,

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

const baseListClusterHostsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse",
  nextPageToken: "",
};

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse" as const,

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

const baseAddClusterHostsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest",
  clusterId: "",
};

export const AddClusterHostsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest" as const,

  encode(
    message: AddClusterHostsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.copySchema !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.copySchema! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddClusterHostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddClusterHostsRequest } as AddClusterHostsRequest;
    message.hostSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.copySchema = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddClusterHostsRequest {
    const message = { ...baseAddClusterHostsRequest } as AddClusterHostsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.hostSpecs = (object.hostSpecs ?? []).map((e: any) =>
      HostSpec.fromJSON(e)
    );
    message.copySchema =
      object.copySchema !== undefined && object.copySchema !== null
        ? Boolean(object.copySchema)
        : undefined;
    return message;
  },

  toJSON(message: AddClusterHostsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.hostSpecs) {
      obj.hostSpecs = message.hostSpecs.map((e) =>
        e ? HostSpec.toJSON(e) : undefined
      );
    } else {
      obj.hostSpecs = [];
    }
    message.copySchema !== undefined && (obj.copySchema = message.copySchema);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddClusterHostsRequest>, I>>(
    object: I
  ): AddClusterHostsRequest {
    const message = { ...baseAddClusterHostsRequest } as AddClusterHostsRequest;
    message.clusterId = object.clusterId ?? "";
    message.hostSpecs =
      object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.copySchema = object.copySchema ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AddClusterHostsRequest.$type, AddClusterHostsRequest);

const baseAddClusterHostsMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsMetadata",
  clusterId: "",
  hostNames: "",
};

export const AddClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterHostsMetadata" as const,

  encode(
    message: AddClusterHostsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
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
    message.hostNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.hostNames.push(reader.string());
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
    message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: AddClusterHostsMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.hostNames) {
      obj.hostNames = message.hostNames.map((e) => e);
    } else {
      obj.hostNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddClusterHostsMetadata>, I>>(
    object: I
  ): AddClusterHostsMetadata {
    const message = {
      ...baseAddClusterHostsMetadata,
    } as AddClusterHostsMetadata;
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AddClusterHostsMetadata.$type, AddClusterHostsMetadata);

const baseUpdateHostSpec: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateHostSpec",
  hostName: "",
};

export const UpdateHostSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateHostSpec" as const,

  encode(
    message: UpdateHostSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hostName !== "") {
      writer.uint32(10).string(message.hostName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.assignPublicIp !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.assignPublicIp! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateHostSpec } as UpdateHostSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostName = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.assignPublicIp = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateHostSpec {
    const message = { ...baseUpdateHostSpec } as UpdateHostSpec;
    message.hostName =
      object.hostName !== undefined && object.hostName !== null
        ? String(object.hostName)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : undefined;
    return message;
  },

  toJSON(message: UpdateHostSpec): unknown {
    const obj: any = {};
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateHostSpec>, I>>(
    object: I
  ): UpdateHostSpec {
    const message = { ...baseUpdateHostSpec } as UpdateHostSpec;
    message.hostName = object.hostName ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.assignPublicIp = object.assignPublicIp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateHostSpec.$type, UpdateHostSpec);

const baseUpdateClusterHostsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsRequest",
  clusterId: "",
};

export const UpdateClusterHostsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsRequest" as const,

  encode(
    message: UpdateClusterHostsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.updateHostSpecs) {
      UpdateHostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterHostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterHostsRequest,
    } as UpdateClusterHostsRequest;
    message.updateHostSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.updateHostSpecs.push(
            UpdateHostSpec.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterHostsRequest {
    const message = {
      ...baseUpdateClusterHostsRequest,
    } as UpdateClusterHostsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.updateHostSpecs = (object.updateHostSpecs ?? []).map((e: any) =>
      UpdateHostSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateClusterHostsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.updateHostSpecs) {
      obj.updateHostSpecs = message.updateHostSpecs.map((e) =>
        e ? UpdateHostSpec.toJSON(e) : undefined
      );
    } else {
      obj.updateHostSpecs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterHostsRequest>, I>>(
    object: I
  ): UpdateClusterHostsRequest {
    const message = {
      ...baseUpdateClusterHostsRequest,
    } as UpdateClusterHostsRequest;
    message.clusterId = object.clusterId ?? "";
    message.updateHostSpecs =
      object.updateHostSpecs?.map((e) => UpdateHostSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterHostsRequest.$type,
  UpdateClusterHostsRequest
);

const baseUpdateClusterHostsMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsMetadata",
  clusterId: "",
  hostNames: "",
};

export const UpdateClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterHostsMetadata" as const,

  encode(
    message: UpdateClusterHostsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterHostsMetadata,
    } as UpdateClusterHostsMetadata;
    message.hostNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.hostNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterHostsMetadata {
    const message = {
      ...baseUpdateClusterHostsMetadata,
    } as UpdateClusterHostsMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: UpdateClusterHostsMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.hostNames) {
      obj.hostNames = message.hostNames.map((e) => e);
    } else {
      obj.hostNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterHostsMetadata>, I>>(
    object: I
  ): UpdateClusterHostsMetadata {
    const message = {
      ...baseUpdateClusterHostsMetadata,
    } as UpdateClusterHostsMetadata;
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterHostsMetadata.$type,
  UpdateClusterHostsMetadata
);

const baseDeleteClusterHostsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest",
  clusterId: "",
  hostNames: "",
};

export const DeleteClusterHostsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest" as const,

  encode(
    message: DeleteClusterHostsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterHostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteClusterHostsRequest,
    } as DeleteClusterHostsRequest;
    message.hostNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.hostNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterHostsRequest {
    const message = {
      ...baseDeleteClusterHostsRequest,
    } as DeleteClusterHostsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: DeleteClusterHostsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.hostNames) {
      obj.hostNames = message.hostNames.map((e) => e);
    } else {
      obj.hostNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterHostsRequest>, I>>(
    object: I
  ): DeleteClusterHostsRequest {
    const message = {
      ...baseDeleteClusterHostsRequest,
    } as DeleteClusterHostsRequest;
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  DeleteClusterHostsRequest.$type,
  DeleteClusterHostsRequest
);

const baseDeleteClusterHostsMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsMetadata",
  clusterId: "",
  hostNames: "",
};

export const DeleteClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsMetadata" as const,

  encode(
    message: DeleteClusterHostsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.hostNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterHostsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteClusterHostsMetadata,
    } as DeleteClusterHostsMetadata;
    message.hostNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.hostNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterHostsMetadata {
    const message = {
      ...baseDeleteClusterHostsMetadata,
    } as DeleteClusterHostsMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: DeleteClusterHostsMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.hostNames) {
      obj.hostNames = message.hostNames.map((e) => e);
    } else {
      obj.hostNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterHostsMetadata>, I>>(
    object: I
  ): DeleteClusterHostsMetadata {
    const message = {
      ...baseDeleteClusterHostsMetadata,
    } as DeleteClusterHostsMetadata;
    message.clusterId = object.clusterId ?? "";
    message.hostNames = object.hostNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  DeleteClusterHostsMetadata.$type,
  DeleteClusterHostsMetadata
);

const baseGetClusterShardRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest",
  clusterId: "",
  shardName: "",
};

export const GetClusterShardRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest" as const,

  encode(
    message: GetClusterShardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetClusterShardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetClusterShardRequest } as GetClusterShardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetClusterShardRequest {
    const message = { ...baseGetClusterShardRequest } as GetClusterShardRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    return message;
  },

  toJSON(message: GetClusterShardRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetClusterShardRequest>, I>>(
    object: I
  ): GetClusterShardRequest {
    const message = { ...baseGetClusterShardRequest } as GetClusterShardRequest;
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetClusterShardRequest.$type, GetClusterShardRequest);

const baseListClusterShardsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterShardsRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest" as const,

  encode(
    message: ListClusterShardsRequest,
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
  ): ListClusterShardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterShardsRequest,
    } as ListClusterShardsRequest;
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

  fromJSON(object: any): ListClusterShardsRequest {
    const message = {
      ...baseListClusterShardsRequest,
    } as ListClusterShardsRequest;
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

  toJSON(message: ListClusterShardsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterShardsRequest>, I>>(
    object: I
  ): ListClusterShardsRequest {
    const message = {
      ...baseListClusterShardsRequest,
    } as ListClusterShardsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterShardsRequest.$type,
  ListClusterShardsRequest
);

const baseListClusterShardsResponse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse",
  nextPageToken: "",
};

export const ListClusterShardsResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse" as const,

  encode(
    message: ListClusterShardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.shards) {
      Shard.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterShardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterShardsResponse,
    } as ListClusterShardsResponse;
    message.shards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shards.push(Shard.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterShardsResponse {
    const message = {
      ...baseListClusterShardsResponse,
    } as ListClusterShardsResponse;
    message.shards = (object.shards ?? []).map((e: any) => Shard.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterShardsResponse): unknown {
    const obj: any = {};
    if (message.shards) {
      obj.shards = message.shards.map((e) => (e ? Shard.toJSON(e) : undefined));
    } else {
      obj.shards = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterShardsResponse>, I>>(
    object: I
  ): ListClusterShardsResponse {
    const message = {
      ...baseListClusterShardsResponse,
    } as ListClusterShardsResponse;
    message.shards = object.shards?.map((e) => Shard.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterShardsResponse.$type,
  ListClusterShardsResponse
);

const baseAddClusterShardRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest",
  clusterId: "",
  shardName: "",
};

export const AddClusterShardRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest" as const,

  encode(
    message: AddClusterShardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    if (message.configSpec !== undefined) {
      ShardConfigSpec.encode(
        message.configSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.copySchema !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.copySchema! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddClusterShardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddClusterShardRequest } as AddClusterShardRequest;
    message.hostSpecs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardName = reader.string();
          break;
        case 3:
          message.configSpec = ShardConfigSpec.decode(reader, reader.uint32());
          break;
        case 4:
          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          break;
        case 5:
          message.copySchema = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddClusterShardRequest {
    const message = { ...baseAddClusterShardRequest } as AddClusterShardRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ShardConfigSpec.fromJSON(object.configSpec)
        : undefined;
    message.hostSpecs = (object.hostSpecs ?? []).map((e: any) =>
      HostSpec.fromJSON(e)
    );
    message.copySchema =
      object.copySchema !== undefined && object.copySchema !== null
        ? Boolean(object.copySchema)
        : undefined;
    return message;
  },

  toJSON(message: AddClusterShardRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ShardConfigSpec.toJSON(message.configSpec)
        : undefined);
    if (message.hostSpecs) {
      obj.hostSpecs = message.hostSpecs.map((e) =>
        e ? HostSpec.toJSON(e) : undefined
      );
    } else {
      obj.hostSpecs = [];
    }
    message.copySchema !== undefined && (obj.copySchema = message.copySchema);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddClusterShardRequest>, I>>(
    object: I
  ): AddClusterShardRequest {
    const message = { ...baseAddClusterShardRequest } as AddClusterShardRequest;
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ShardConfigSpec.fromPartial(object.configSpec)
        : undefined;
    message.hostSpecs =
      object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    message.copySchema = object.copySchema ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AddClusterShardRequest.$type, AddClusterShardRequest);

const baseAddClusterShardMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardMetadata",
  clusterId: "",
  shardName: "",
};

export const AddClusterShardMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.AddClusterShardMetadata" as const,

  encode(
    message: AddClusterShardMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddClusterShardMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddClusterShardMetadata,
    } as AddClusterShardMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddClusterShardMetadata {
    const message = {
      ...baseAddClusterShardMetadata,
    } as AddClusterShardMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    return message;
  },

  toJSON(message: AddClusterShardMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddClusterShardMetadata>, I>>(
    object: I
  ): AddClusterShardMetadata {
    const message = {
      ...baseAddClusterShardMetadata,
    } as AddClusterShardMetadata;
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddClusterShardMetadata.$type, AddClusterShardMetadata);

const baseUpdateClusterShardRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest",
  clusterId: "",
  shardName: "",
};

export const UpdateClusterShardRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest" as const,

  encode(
    message: UpdateClusterShardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.configSpec !== undefined) {
      ShardConfigSpec.encode(
        message.configSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterShardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterShardRequest,
    } as UpdateClusterShardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardName = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.configSpec = ShardConfigSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterShardRequest {
    const message = {
      ...baseUpdateClusterShardRequest,
    } as UpdateClusterShardRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ShardConfigSpec.fromJSON(object.configSpec)
        : undefined;
    return message;
  },

  toJSON(message: UpdateClusterShardRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ShardConfigSpec.toJSON(message.configSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterShardRequest>, I>>(
    object: I
  ): UpdateClusterShardRequest {
    const message = {
      ...baseUpdateClusterShardRequest,
    } as UpdateClusterShardRequest;
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ShardConfigSpec.fromPartial(object.configSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterShardRequest.$type,
  UpdateClusterShardRequest
);

const baseUpdateClusterShardMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardMetadata",
  clusterId: "",
  shardName: "",
};

export const UpdateClusterShardMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardMetadata" as const,

  encode(
    message: UpdateClusterShardMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterShardMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterShardMetadata,
    } as UpdateClusterShardMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterShardMetadata {
    const message = {
      ...baseUpdateClusterShardMetadata,
    } as UpdateClusterShardMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    return message;
  },

  toJSON(message: UpdateClusterShardMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterShardMetadata>, I>>(
    object: I
  ): UpdateClusterShardMetadata {
    const message = {
      ...baseUpdateClusterShardMetadata,
    } as UpdateClusterShardMetadata;
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterShardMetadata.$type,
  UpdateClusterShardMetadata
);

const baseDeleteClusterShardRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest",
  clusterId: "",
  shardName: "",
};

export const DeleteClusterShardRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest" as const,

  encode(
    message: DeleteClusterShardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterShardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteClusterShardRequest,
    } as DeleteClusterShardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterShardRequest {
    const message = {
      ...baseDeleteClusterShardRequest,
    } as DeleteClusterShardRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    return message;
  },

  toJSON(message: DeleteClusterShardRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterShardRequest>, I>>(
    object: I
  ): DeleteClusterShardRequest {
    const message = {
      ...baseDeleteClusterShardRequest,
    } as DeleteClusterShardRequest;
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteClusterShardRequest.$type,
  DeleteClusterShardRequest
);

const baseDeleteClusterShardMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardMetadata",
  clusterId: "",
  shardName: "",
};

export const DeleteClusterShardMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardMetadata" as const,

  encode(
    message: DeleteClusterShardMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterShardMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteClusterShardMetadata,
    } as DeleteClusterShardMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterShardMetadata {
    const message = {
      ...baseDeleteClusterShardMetadata,
    } as DeleteClusterShardMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    return message;
  },

  toJSON(message: DeleteClusterShardMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterShardMetadata>, I>>(
    object: I
  ): DeleteClusterShardMetadata {
    const message = {
      ...baseDeleteClusterShardMetadata,
    } as DeleteClusterShardMetadata;
    message.clusterId = object.clusterId ?? "";
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteClusterShardMetadata.$type,
  DeleteClusterShardMetadata
);

const baseGetClusterShardGroupRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest",
  clusterId: "",
  shardGroupName: "",
};

export const GetClusterShardGroupRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest" as const,

  encode(
    message: GetClusterShardGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetClusterShardGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetClusterShardGroupRequest,
    } as GetClusterShardGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardGroupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetClusterShardGroupRequest {
    const message = {
      ...baseGetClusterShardGroupRequest,
    } as GetClusterShardGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardGroupName =
      object.shardGroupName !== undefined && object.shardGroupName !== null
        ? String(object.shardGroupName)
        : "";
    return message;
  },

  toJSON(message: GetClusterShardGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardGroupName !== undefined &&
      (obj.shardGroupName = message.shardGroupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetClusterShardGroupRequest>, I>>(
    object: I
  ): GetClusterShardGroupRequest {
    const message = {
      ...baseGetClusterShardGroupRequest,
    } as GetClusterShardGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetClusterShardGroupRequest.$type,
  GetClusterShardGroupRequest
);

const baseListClusterShardGroupsRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterShardGroupsRequest = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest" as const,

  encode(
    message: ListClusterShardGroupsRequest,
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
  ): ListClusterShardGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterShardGroupsRequest,
    } as ListClusterShardGroupsRequest;
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

  fromJSON(object: any): ListClusterShardGroupsRequest {
    const message = {
      ...baseListClusterShardGroupsRequest,
    } as ListClusterShardGroupsRequest;
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

  toJSON(message: ListClusterShardGroupsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterShardGroupsRequest>, I>>(
    object: I
  ): ListClusterShardGroupsRequest {
    const message = {
      ...baseListClusterShardGroupsRequest,
    } as ListClusterShardGroupsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterShardGroupsRequest.$type,
  ListClusterShardGroupsRequest
);

const baseListClusterShardGroupsResponse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse",
  nextPageToken: "",
};

export const ListClusterShardGroupsResponse = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse" as const,

  encode(
    message: ListClusterShardGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.shardGroups) {
      ShardGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterShardGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterShardGroupsResponse,
    } as ListClusterShardGroupsResponse;
    message.shardGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shardGroups.push(ShardGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterShardGroupsResponse {
    const message = {
      ...baseListClusterShardGroupsResponse,
    } as ListClusterShardGroupsResponse;
    message.shardGroups = (object.shardGroups ?? []).map((e: any) =>
      ShardGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterShardGroupsResponse): unknown {
    const obj: any = {};
    if (message.shardGroups) {
      obj.shardGroups = message.shardGroups.map((e) =>
        e ? ShardGroup.toJSON(e) : undefined
      );
    } else {
      obj.shardGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterShardGroupsResponse>, I>>(
    object: I
  ): ListClusterShardGroupsResponse {
    const message = {
      ...baseListClusterShardGroupsResponse,
    } as ListClusterShardGroupsResponse;
    message.shardGroups =
      object.shardGroups?.map((e) => ShardGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterShardGroupsResponse.$type,
  ListClusterShardGroupsResponse
);

const baseCreateClusterShardGroupRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest",
  clusterId: "",
  shardGroupName: "",
  description: "",
  shardNames: "",
};

export const CreateClusterShardGroupRequest = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest" as const,

  encode(
    message: CreateClusterShardGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.shardNames) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterShardGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateClusterShardGroupRequest,
    } as CreateClusterShardGroupRequest;
    message.shardNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardGroupName = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.shardNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateClusterShardGroupRequest {
    const message = {
      ...baseCreateClusterShardGroupRequest,
    } as CreateClusterShardGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardGroupName =
      object.shardGroupName !== undefined && object.shardGroupName !== null
        ? String(object.shardGroupName)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.shardNames = (object.shardNames ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: CreateClusterShardGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardGroupName !== undefined &&
      (obj.shardGroupName = message.shardGroupName);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.shardNames) {
      obj.shardNames = message.shardNames.map((e) => e);
    } else {
      obj.shardNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateClusterShardGroupRequest>, I>>(
    object: I
  ): CreateClusterShardGroupRequest {
    const message = {
      ...baseCreateClusterShardGroupRequest,
    } as CreateClusterShardGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    message.description = object.description ?? "";
    message.shardNames = object.shardNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  CreateClusterShardGroupRequest.$type,
  CreateClusterShardGroupRequest
);

const baseCreateClusterShardGroupMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupMetadata",
  clusterId: "",
  shardGroupName: "",
};

export const CreateClusterShardGroupMetadata = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupMetadata" as const,

  encode(
    message: CreateClusterShardGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterShardGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateClusterShardGroupMetadata,
    } as CreateClusterShardGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardGroupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateClusterShardGroupMetadata {
    const message = {
      ...baseCreateClusterShardGroupMetadata,
    } as CreateClusterShardGroupMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardGroupName =
      object.shardGroupName !== undefined && object.shardGroupName !== null
        ? String(object.shardGroupName)
        : "";
    return message;
  },

  toJSON(message: CreateClusterShardGroupMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardGroupName !== undefined &&
      (obj.shardGroupName = message.shardGroupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateClusterShardGroupMetadata>, I>>(
    object: I
  ): CreateClusterShardGroupMetadata {
    const message = {
      ...baseCreateClusterShardGroupMetadata,
    } as CreateClusterShardGroupMetadata;
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateClusterShardGroupMetadata.$type,
  CreateClusterShardGroupMetadata
);

const baseUpdateClusterShardGroupRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest",
  clusterId: "",
  shardGroupName: "",
  description: "",
  shardNames: "",
};

export const UpdateClusterShardGroupRequest = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest" as const,

  encode(
    message: UpdateClusterShardGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.shardNames) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterShardGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterShardGroupRequest,
    } as UpdateClusterShardGroupRequest;
    message.shardNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardGroupName = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.shardNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterShardGroupRequest {
    const message = {
      ...baseUpdateClusterShardGroupRequest,
    } as UpdateClusterShardGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardGroupName =
      object.shardGroupName !== undefined && object.shardGroupName !== null
        ? String(object.shardGroupName)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.shardNames = (object.shardNames ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: UpdateClusterShardGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardGroupName !== undefined &&
      (obj.shardGroupName = message.shardGroupName);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.shardNames) {
      obj.shardNames = message.shardNames.map((e) => e);
    } else {
      obj.shardNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterShardGroupRequest>, I>>(
    object: I
  ): UpdateClusterShardGroupRequest {
    const message = {
      ...baseUpdateClusterShardGroupRequest,
    } as UpdateClusterShardGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.description = object.description ?? "";
    message.shardNames = object.shardNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterShardGroupRequest.$type,
  UpdateClusterShardGroupRequest
);

const baseUpdateClusterShardGroupMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupMetadata",
  clusterId: "",
  shardGroupName: "",
};

export const UpdateClusterShardGroupMetadata = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupMetadata" as const,

  encode(
    message: UpdateClusterShardGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterShardGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterShardGroupMetadata,
    } as UpdateClusterShardGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardGroupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterShardGroupMetadata {
    const message = {
      ...baseUpdateClusterShardGroupMetadata,
    } as UpdateClusterShardGroupMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardGroupName =
      object.shardGroupName !== undefined && object.shardGroupName !== null
        ? String(object.shardGroupName)
        : "";
    return message;
  },

  toJSON(message: UpdateClusterShardGroupMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardGroupName !== undefined &&
      (obj.shardGroupName = message.shardGroupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterShardGroupMetadata>, I>>(
    object: I
  ): UpdateClusterShardGroupMetadata {
    const message = {
      ...baseUpdateClusterShardGroupMetadata,
    } as UpdateClusterShardGroupMetadata;
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterShardGroupMetadata.$type,
  UpdateClusterShardGroupMetadata
);

const baseDeleteClusterShardGroupRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest",
  clusterId: "",
  shardGroupName: "",
};

export const DeleteClusterShardGroupRequest = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest" as const,

  encode(
    message: DeleteClusterShardGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterShardGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteClusterShardGroupRequest,
    } as DeleteClusterShardGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardGroupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterShardGroupRequest {
    const message = {
      ...baseDeleteClusterShardGroupRequest,
    } as DeleteClusterShardGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardGroupName =
      object.shardGroupName !== undefined && object.shardGroupName !== null
        ? String(object.shardGroupName)
        : "";
    return message;
  },

  toJSON(message: DeleteClusterShardGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardGroupName !== undefined &&
      (obj.shardGroupName = message.shardGroupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterShardGroupRequest>, I>>(
    object: I
  ): DeleteClusterShardGroupRequest {
    const message = {
      ...baseDeleteClusterShardGroupRequest,
    } as DeleteClusterShardGroupRequest;
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteClusterShardGroupRequest.$type,
  DeleteClusterShardGroupRequest
);

const baseDeleteClusterShardGroupMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupMetadata",
  clusterId: "",
  shardGroupName: "",
};

export const DeleteClusterShardGroupMetadata = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupMetadata" as const,

  encode(
    message: DeleteClusterShardGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.shardGroupName !== "") {
      writer.uint32(18).string(message.shardGroupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterShardGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteClusterShardGroupMetadata,
    } as DeleteClusterShardGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.shardGroupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterShardGroupMetadata {
    const message = {
      ...baseDeleteClusterShardGroupMetadata,
    } as DeleteClusterShardGroupMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.shardGroupName =
      object.shardGroupName !== undefined && object.shardGroupName !== null
        ? String(object.shardGroupName)
        : "";
    return message;
  },

  toJSON(message: DeleteClusterShardGroupMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.shardGroupName !== undefined &&
      (obj.shardGroupName = message.shardGroupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterShardGroupMetadata>, I>>(
    object: I
  ): DeleteClusterShardGroupMetadata {
    const message = {
      ...baseDeleteClusterShardGroupMetadata,
    } as DeleteClusterShardGroupMetadata;
    message.clusterId = object.clusterId ?? "";
    message.shardGroupName = object.shardGroupName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteClusterShardGroupMetadata.$type,
  DeleteClusterShardGroupMetadata
);

const baseListClusterExternalDictionariesRequest: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterExternalDictionariesRequest = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesRequest" as const,

  encode(
    message: ListClusterExternalDictionariesRequest,
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
  ): ListClusterExternalDictionariesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterExternalDictionariesRequest,
    } as ListClusterExternalDictionariesRequest;
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

  fromJSON(object: any): ListClusterExternalDictionariesRequest {
    const message = {
      ...baseListClusterExternalDictionariesRequest,
    } as ListClusterExternalDictionariesRequest;
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

  toJSON(message: ListClusterExternalDictionariesRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListClusterExternalDictionariesRequest>, I>
  >(object: I): ListClusterExternalDictionariesRequest {
    const message = {
      ...baseListClusterExternalDictionariesRequest,
    } as ListClusterExternalDictionariesRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterExternalDictionariesRequest.$type,
  ListClusterExternalDictionariesRequest
);

const baseListClusterExternalDictionariesResponse: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesResponse",
  nextPageToken: "",
};

export const ListClusterExternalDictionariesResponse = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.ListClusterExternalDictionariesResponse" as const,

  encode(
    message: ListClusterExternalDictionariesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.externalDictionaries) {
      ClickhouseConfig_ExternalDictionary.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterExternalDictionariesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterExternalDictionariesResponse,
    } as ListClusterExternalDictionariesResponse;
    message.externalDictionaries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalDictionaries.push(
            ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListClusterExternalDictionariesResponse {
    const message = {
      ...baseListClusterExternalDictionariesResponse,
    } as ListClusterExternalDictionariesResponse;
    message.externalDictionaries = (object.externalDictionaries ?? []).map(
      (e: any) => ClickhouseConfig_ExternalDictionary.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterExternalDictionariesResponse): unknown {
    const obj: any = {};
    if (message.externalDictionaries) {
      obj.externalDictionaries = message.externalDictionaries.map((e) =>
        e ? ClickhouseConfig_ExternalDictionary.toJSON(e) : undefined
      );
    } else {
      obj.externalDictionaries = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListClusterExternalDictionariesResponse>, I>
  >(object: I): ListClusterExternalDictionariesResponse {
    const message = {
      ...baseListClusterExternalDictionariesResponse,
    } as ListClusterExternalDictionariesResponse;
    message.externalDictionaries =
      object.externalDictionaries?.map((e) =>
        ClickhouseConfig_ExternalDictionary.fromPartial(e)
      ) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterExternalDictionariesResponse.$type,
  ListClusterExternalDictionariesResponse
);

const baseCreateClusterExternalDictionaryRequest: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest",
  clusterId: "",
};

export const CreateClusterExternalDictionaryRequest = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest" as const,

  encode(
    message: CreateClusterExternalDictionaryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.externalDictionary !== undefined) {
      ClickhouseConfig_ExternalDictionary.encode(
        message.externalDictionary,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterExternalDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateClusterExternalDictionaryRequest,
    } as CreateClusterExternalDictionaryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.externalDictionary =
            ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateClusterExternalDictionaryRequest {
    const message = {
      ...baseCreateClusterExternalDictionaryRequest,
    } as CreateClusterExternalDictionaryRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.externalDictionary =
      object.externalDictionary !== undefined &&
      object.externalDictionary !== null
        ? ClickhouseConfig_ExternalDictionary.fromJSON(
            object.externalDictionary
          )
        : undefined;
    return message;
  },

  toJSON(message: CreateClusterExternalDictionaryRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.externalDictionary !== undefined &&
      (obj.externalDictionary = message.externalDictionary
        ? ClickhouseConfig_ExternalDictionary.toJSON(message.externalDictionary)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateClusterExternalDictionaryRequest>, I>
  >(object: I): CreateClusterExternalDictionaryRequest {
    const message = {
      ...baseCreateClusterExternalDictionaryRequest,
    } as CreateClusterExternalDictionaryRequest;
    message.clusterId = object.clusterId ?? "";
    message.externalDictionary =
      object.externalDictionary !== undefined &&
      object.externalDictionary !== null
        ? ClickhouseConfig_ExternalDictionary.fromPartial(
            object.externalDictionary
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreateClusterExternalDictionaryRequest.$type,
  CreateClusterExternalDictionaryRequest
);

const baseCreateClusterExternalDictionaryMetadata: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryMetadata",
  clusterId: "",
};

export const CreateClusterExternalDictionaryMetadata = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryMetadata" as const,

  encode(
    message: CreateClusterExternalDictionaryMetadata,
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
  ): CreateClusterExternalDictionaryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateClusterExternalDictionaryMetadata,
    } as CreateClusterExternalDictionaryMetadata;
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

  fromJSON(object: any): CreateClusterExternalDictionaryMetadata {
    const message = {
      ...baseCreateClusterExternalDictionaryMetadata,
    } as CreateClusterExternalDictionaryMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: CreateClusterExternalDictionaryMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateClusterExternalDictionaryMetadata>, I>
  >(object: I): CreateClusterExternalDictionaryMetadata {
    const message = {
      ...baseCreateClusterExternalDictionaryMetadata,
    } as CreateClusterExternalDictionaryMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateClusterExternalDictionaryMetadata.$type,
  CreateClusterExternalDictionaryMetadata
);

const baseUpdateClusterExternalDictionaryRequest: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryRequest",
  clusterId: "",
};

export const UpdateClusterExternalDictionaryRequest = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryRequest" as const,

  encode(
    message: UpdateClusterExternalDictionaryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.externalDictionary !== undefined) {
      ClickhouseConfig_ExternalDictionary.encode(
        message.externalDictionary,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterExternalDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterExternalDictionaryRequest,
    } as UpdateClusterExternalDictionaryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.externalDictionary =
            ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterExternalDictionaryRequest {
    const message = {
      ...baseUpdateClusterExternalDictionaryRequest,
    } as UpdateClusterExternalDictionaryRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.externalDictionary =
      object.externalDictionary !== undefined &&
      object.externalDictionary !== null
        ? ClickhouseConfig_ExternalDictionary.fromJSON(
            object.externalDictionary
          )
        : undefined;
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    return message;
  },

  toJSON(message: UpdateClusterExternalDictionaryRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.externalDictionary !== undefined &&
      (obj.externalDictionary = message.externalDictionary
        ? ClickhouseConfig_ExternalDictionary.toJSON(message.externalDictionary)
        : undefined);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateClusterExternalDictionaryRequest>, I>
  >(object: I): UpdateClusterExternalDictionaryRequest {
    const message = {
      ...baseUpdateClusterExternalDictionaryRequest,
    } as UpdateClusterExternalDictionaryRequest;
    message.clusterId = object.clusterId ?? "";
    message.externalDictionary =
      object.externalDictionary !== undefined &&
      object.externalDictionary !== null
        ? ClickhouseConfig_ExternalDictionary.fromPartial(
            object.externalDictionary
          )
        : undefined;
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterExternalDictionaryRequest.$type,
  UpdateClusterExternalDictionaryRequest
);

const baseUpdateClusterExternalDictionaryMetadata: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryMetadata",
  clusterId: "",
  externalDictionaryName: "",
};

export const UpdateClusterExternalDictionaryMetadata = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.UpdateClusterExternalDictionaryMetadata" as const,

  encode(
    message: UpdateClusterExternalDictionaryMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.externalDictionaryName !== "") {
      writer.uint32(18).string(message.externalDictionaryName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterExternalDictionaryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateClusterExternalDictionaryMetadata,
    } as UpdateClusterExternalDictionaryMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.externalDictionaryName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateClusterExternalDictionaryMetadata {
    const message = {
      ...baseUpdateClusterExternalDictionaryMetadata,
    } as UpdateClusterExternalDictionaryMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.externalDictionaryName =
      object.externalDictionaryName !== undefined &&
      object.externalDictionaryName !== null
        ? String(object.externalDictionaryName)
        : "";
    return message;
  },

  toJSON(message: UpdateClusterExternalDictionaryMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.externalDictionaryName !== undefined &&
      (obj.externalDictionaryName = message.externalDictionaryName);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateClusterExternalDictionaryMetadata>, I>
  >(object: I): UpdateClusterExternalDictionaryMetadata {
    const message = {
      ...baseUpdateClusterExternalDictionaryMetadata,
    } as UpdateClusterExternalDictionaryMetadata;
    message.clusterId = object.clusterId ?? "";
    message.externalDictionaryName = object.externalDictionaryName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterExternalDictionaryMetadata.$type,
  UpdateClusterExternalDictionaryMetadata
);

const baseDeleteClusterExternalDictionaryRequest: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest",
  clusterId: "",
  externalDictionaryName: "",
};

export const DeleteClusterExternalDictionaryRequest = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest" as const,

  encode(
    message: DeleteClusterExternalDictionaryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.externalDictionaryName !== "") {
      writer.uint32(18).string(message.externalDictionaryName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterExternalDictionaryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteClusterExternalDictionaryRequest,
    } as DeleteClusterExternalDictionaryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.externalDictionaryName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteClusterExternalDictionaryRequest {
    const message = {
      ...baseDeleteClusterExternalDictionaryRequest,
    } as DeleteClusterExternalDictionaryRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.externalDictionaryName =
      object.externalDictionaryName !== undefined &&
      object.externalDictionaryName !== null
        ? String(object.externalDictionaryName)
        : "";
    return message;
  },

  toJSON(message: DeleteClusterExternalDictionaryRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.externalDictionaryName !== undefined &&
      (obj.externalDictionaryName = message.externalDictionaryName);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteClusterExternalDictionaryRequest>, I>
  >(object: I): DeleteClusterExternalDictionaryRequest {
    const message = {
      ...baseDeleteClusterExternalDictionaryRequest,
    } as DeleteClusterExternalDictionaryRequest;
    message.clusterId = object.clusterId ?? "";
    message.externalDictionaryName = object.externalDictionaryName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteClusterExternalDictionaryRequest.$type,
  DeleteClusterExternalDictionaryRequest
);

const baseDeleteClusterExternalDictionaryMetadata: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryMetadata",
  clusterId: "",
};

export const DeleteClusterExternalDictionaryMetadata = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryMetadata" as const,

  encode(
    message: DeleteClusterExternalDictionaryMetadata,
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
  ): DeleteClusterExternalDictionaryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteClusterExternalDictionaryMetadata,
    } as DeleteClusterExternalDictionaryMetadata;
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

  fromJSON(object: any): DeleteClusterExternalDictionaryMetadata {
    const message = {
      ...baseDeleteClusterExternalDictionaryMetadata,
    } as DeleteClusterExternalDictionaryMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: DeleteClusterExternalDictionaryMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteClusterExternalDictionaryMetadata>, I>
  >(object: I): DeleteClusterExternalDictionaryMetadata {
    const message = {
      ...baseDeleteClusterExternalDictionaryMetadata,
    } as DeleteClusterExternalDictionaryMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteClusterExternalDictionaryMetadata.$type,
  DeleteClusterExternalDictionaryMetadata
);

const baseHostSpec: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.HostSpec",
  zoneId: "",
  type: 0,
  subnetId: "",
  assignPublicIp: false,
  shardName: "",
};

export const HostSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.HostSpec" as const,

  encode(
    message: HostSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.subnetId !== "") {
      writer.uint32(26).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(32).bool(message.assignPublicIp);
    }
    if (message.shardName !== "") {
      writer.uint32(42).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHostSpec } as HostSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.subnetId = reader.string();
          break;
        case 4:
          message.assignPublicIp = reader.bool();
          break;
        case 5:
          message.shardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostSpec {
    const message = { ...baseHostSpec } as HostSpec;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? host_TypeFromJSON(object.type)
        : 0;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    return message;
  },

  toJSON(message: HostSpec): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostSpec>, I>>(object: I): HostSpec {
    const message = { ...baseHostSpec } as HostSpec;
    message.zoneId = object.zoneId ?? "";
    message.type = object.type ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(HostSpec.$type, HostSpec);

const baseConfigSpec: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec",
  version: "",
  adminPassword: "",
};

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec" as const,

  encode(
    message: ConfigSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.clickhouse !== undefined) {
      ConfigSpec_Clickhouse.encode(
        message.clickhouse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.zookeeper !== undefined) {
      ConfigSpec_Zookeeper.encode(
        message.zookeeper,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(
        message.backupWindowStart,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(
        message.cloudStorage,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.sqlDatabaseManagement !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.sqlDatabaseManagement!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.sqlUserManagement !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.sqlUserManagement!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adminPassword !== "") {
      writer.uint32(74).string(message.adminPassword);
    }
    if (message.embeddedKeeper !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.embeddedKeeper! },
        writer.uint32(82).fork()
      ).ldelim();
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
        case 3:
          message.version = reader.string();
          break;
        case 1:
          message.clickhouse = ConfigSpec_Clickhouse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.zookeeper = ConfigSpec_Zookeeper.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          break;
        case 5:
          message.access = Access.decode(reader, reader.uint32());
          break;
        case 6:
          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
          break;
        case 7:
          message.sqlDatabaseManagement = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.sqlUserManagement = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.adminPassword = reader.string();
          break;
        case 10:
          message.embeddedKeeper = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
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
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.clickhouse =
      object.clickhouse !== undefined && object.clickhouse !== null
        ? ConfigSpec_Clickhouse.fromJSON(object.clickhouse)
        : undefined;
    message.zookeeper =
      object.zookeeper !== undefined && object.zookeeper !== null
        ? ConfigSpec_Zookeeper.fromJSON(object.zookeeper)
        : undefined;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromJSON(object.backupWindowStart)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromJSON(object.access)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromJSON(object.cloudStorage)
        : undefined;
    message.sqlDatabaseManagement =
      object.sqlDatabaseManagement !== undefined &&
      object.sqlDatabaseManagement !== null
        ? Boolean(object.sqlDatabaseManagement)
        : undefined;
    message.sqlUserManagement =
      object.sqlUserManagement !== undefined &&
      object.sqlUserManagement !== null
        ? Boolean(object.sqlUserManagement)
        : undefined;
    message.adminPassword =
      object.adminPassword !== undefined && object.adminPassword !== null
        ? String(object.adminPassword)
        : "";
    message.embeddedKeeper =
      object.embeddedKeeper !== undefined && object.embeddedKeeper !== null
        ? Boolean(object.embeddedKeeper)
        : undefined;
    return message;
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.clickhouse !== undefined &&
      (obj.clickhouse = message.clickhouse
        ? ConfigSpec_Clickhouse.toJSON(message.clickhouse)
        : undefined);
    message.zookeeper !== undefined &&
      (obj.zookeeper = message.zookeeper
        ? ConfigSpec_Zookeeper.toJSON(message.zookeeper)
        : undefined);
    message.backupWindowStart !== undefined &&
      (obj.backupWindowStart = message.backupWindowStart
        ? TimeOfDay.toJSON(message.backupWindowStart)
        : undefined);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    message.cloudStorage !== undefined &&
      (obj.cloudStorage = message.cloudStorage
        ? CloudStorage.toJSON(message.cloudStorage)
        : undefined);
    message.sqlDatabaseManagement !== undefined &&
      (obj.sqlDatabaseManagement = message.sqlDatabaseManagement);
    message.sqlUserManagement !== undefined &&
      (obj.sqlUserManagement = message.sqlUserManagement);
    message.adminPassword !== undefined &&
      (obj.adminPassword = message.adminPassword);
    message.embeddedKeeper !== undefined &&
      (obj.embeddedKeeper = message.embeddedKeeper);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec>, I>>(
    object: I
  ): ConfigSpec {
    const message = { ...baseConfigSpec } as ConfigSpec;
    message.version = object.version ?? "";
    message.clickhouse =
      object.clickhouse !== undefined && object.clickhouse !== null
        ? ConfigSpec_Clickhouse.fromPartial(object.clickhouse)
        : undefined;
    message.zookeeper =
      object.zookeeper !== undefined && object.zookeeper !== null
        ? ConfigSpec_Zookeeper.fromPartial(object.zookeeper)
        : undefined;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromPartial(object.backupWindowStart)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromPartial(object.cloudStorage)
        : undefined;
    message.sqlDatabaseManagement = object.sqlDatabaseManagement ?? undefined;
    message.sqlUserManagement = object.sqlUserManagement ?? undefined;
    message.adminPassword = object.adminPassword ?? "";
    message.embeddedKeeper = object.embeddedKeeper ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

const baseConfigSpec_Clickhouse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Clickhouse",
};

export const ConfigSpec_Clickhouse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Clickhouse" as const,

  encode(
    message: ConfigSpec_Clickhouse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      ClickhouseConfig.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConfigSpec_Clickhouse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigSpec_Clickhouse } as ConfigSpec_Clickhouse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ClickhouseConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigSpec_Clickhouse {
    const message = { ...baseConfigSpec_Clickhouse } as ConfigSpec_Clickhouse;
    message.config =
      object.config !== undefined && object.config !== null
        ? ClickhouseConfig.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: ConfigSpec_Clickhouse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? ClickhouseConfig.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec_Clickhouse>, I>>(
    object: I
  ): ConfigSpec_Clickhouse {
    const message = { ...baseConfigSpec_Clickhouse } as ConfigSpec_Clickhouse;
    message.config =
      object.config !== undefined && object.config !== null
        ? ClickhouseConfig.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_Clickhouse.$type, ConfigSpec_Clickhouse);

const baseConfigSpec_Zookeeper: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Zookeeper",
};

export const ConfigSpec_Zookeeper = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ConfigSpec.Zookeeper" as const,

  encode(
    message: ConfigSpec_Zookeeper,
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
  ): ConfigSpec_Zookeeper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigSpec_Zookeeper } as ConfigSpec_Zookeeper;
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

  fromJSON(object: any): ConfigSpec_Zookeeper {
    const message = { ...baseConfigSpec_Zookeeper } as ConfigSpec_Zookeeper;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: ConfigSpec_Zookeeper): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec_Zookeeper>, I>>(
    object: I
  ): ConfigSpec_Zookeeper {
    const message = { ...baseConfigSpec_Zookeeper } as ConfigSpec_Zookeeper;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_Zookeeper.$type, ConfigSpec_Zookeeper);

const baseShardConfigSpec: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec",
};

export const ShardConfigSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec" as const,

  encode(
    message: ShardConfigSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clickhouse !== undefined) {
      ShardConfigSpec_Clickhouse.encode(
        message.clickhouse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShardConfigSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShardConfigSpec } as ShardConfigSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clickhouse = ShardConfigSpec_Clickhouse.decode(
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

  fromJSON(object: any): ShardConfigSpec {
    const message = { ...baseShardConfigSpec } as ShardConfigSpec;
    message.clickhouse =
      object.clickhouse !== undefined && object.clickhouse !== null
        ? ShardConfigSpec_Clickhouse.fromJSON(object.clickhouse)
        : undefined;
    return message;
  },

  toJSON(message: ShardConfigSpec): unknown {
    const obj: any = {};
    message.clickhouse !== undefined &&
      (obj.clickhouse = message.clickhouse
        ? ShardConfigSpec_Clickhouse.toJSON(message.clickhouse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ShardConfigSpec>, I>>(
    object: I
  ): ShardConfigSpec {
    const message = { ...baseShardConfigSpec } as ShardConfigSpec;
    message.clickhouse =
      object.clickhouse !== undefined && object.clickhouse !== null
        ? ShardConfigSpec_Clickhouse.fromPartial(object.clickhouse)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ShardConfigSpec.$type, ShardConfigSpec);

const baseShardConfigSpec_Clickhouse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec.Clickhouse",
};

export const ShardConfigSpec_Clickhouse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfigSpec.Clickhouse" as const,

  encode(
    message: ShardConfigSpec_Clickhouse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      ClickhouseConfig.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.weight !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.weight! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShardConfigSpec_Clickhouse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseShardConfigSpec_Clickhouse,
    } as ShardConfigSpec_Clickhouse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ClickhouseConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 3:
          message.weight = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShardConfigSpec_Clickhouse {
    const message = {
      ...baseShardConfigSpec_Clickhouse,
    } as ShardConfigSpec_Clickhouse;
    message.config =
      object.config !== undefined && object.config !== null
        ? ClickhouseConfig.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? Number(object.weight)
        : undefined;
    return message;
  },

  toJSON(message: ShardConfigSpec_Clickhouse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? ClickhouseConfig.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ShardConfigSpec_Clickhouse>, I>>(
    object: I
  ): ShardConfigSpec_Clickhouse {
    const message = {
      ...baseShardConfigSpec_Clickhouse,
    } as ShardConfigSpec_Clickhouse;
    message.config =
      object.config !== undefined && object.config !== null
        ? ClickhouseConfig.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.weight = object.weight ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ShardConfigSpec_Clickhouse.$type,
  ShardConfigSpec_Clickhouse
);

/** A set of methods for managing ClickHouse clusters. */
export const ClusterServiceService = {
  /**
   * Returns the specified ClickHouse cluster.
   *
   * To get the list of available ClickHouse clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) =>
      Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) =>
      Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /**
   * Retrieves a list of ClickHouse clusters that belong
   * to the specified folder.
   */
  list: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) =>
      Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) =>
      Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a ClickHouse cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) =>
      Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified ClickHouse cluster. */
  update: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) =>
      Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified ClickHouse cluster. */
  delete: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) =>
      Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified ClickHouse cluster. */
  start: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) =>
      Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified ClickHouse cluster. */
  stop: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) =>
      Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Moves a ClickHouse cluster to the specified folder. */
  move: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveClusterRequest) =>
      Buffer.from(MoveClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
  addZookeeper: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddZookeeper",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterZookeeperRequest) =>
      Buffer.from(AddClusterZookeeperRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddClusterZookeeperRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a backup for the specified ClickHouse cluster. */
  backup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupClusterRequest) =>
      Buffer.from(BackupClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new ClickHouse cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Restore",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RestoreClusterRequest) =>
      Buffer.from(RestoreClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/RescheduleMaintenance",
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
  /** Retrieves logs for the specified ClickHouse cluster. */
  listLogs: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListLogs",
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
  /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/StreamLogs",
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
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListOperations",
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
  /** Retrieves the list of available backups for the specified ClickHouse cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListBackups",
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
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListHosts",
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
  /** Creates new hosts for a cluster. */
  addHosts: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterHostsRequest) =>
      Buffer.from(AddClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified hosts. */
  updateHosts: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterHostsRequest) =>
      Buffer.from(UpdateClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterHostsRequest) =>
      Buffer.from(DeleteClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified shard. */
  getShard: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterShardRequest) =>
      Buffer.from(GetClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterShardRequest.decode(value),
    responseSerialize: (value: Shard) =>
      Buffer.from(Shard.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Shard.decode(value),
  },
  /** Retrieves a list of shards that belong to the specified cluster. */
  listShards: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShards",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterShardsRequest) =>
      Buffer.from(ListClusterShardsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListClusterShardsRequest.decode(value),
    responseSerialize: (value: ListClusterShardsResponse) =>
      Buffer.from(ListClusterShardsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterShardsResponse.decode(value),
  },
  /** Creates a new shard in the specified cluster. */
  addShard: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterShardRequest) =>
      Buffer.from(AddClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Modifies the specified shard. */
  updateShard: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterShardRequest) =>
      Buffer.from(UpdateClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified shard. */
  deleteShard: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShard",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterShardRequest) =>
      Buffer.from(DeleteClusterShardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteClusterShardRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns the specified shard group. */
  getShardGroup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShardGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterShardGroupRequest) =>
      Buffer.from(GetClusterShardGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetClusterShardGroupRequest.decode(value),
    responseSerialize: (value: ShardGroup) =>
      Buffer.from(ShardGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ShardGroup.decode(value),
  },
  /** Retrieves a list of shard groups that belong to specified cluster. */
  listShardGroups: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShardGroups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterShardGroupsRequest) =>
      Buffer.from(ListClusterShardGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListClusterShardGroupsRequest.decode(value),
    responseSerialize: (value: ListClusterShardGroupsResponse) =>
      Buffer.from(ListClusterShardGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterShardGroupsResponse.decode(value),
  },
  /** Creates a new shard group in the specified cluster. */
  createShardGroup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateShardGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterShardGroupRequest) =>
      Buffer.from(CreateClusterShardGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateClusterShardGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified shard group. */
  updateShardGroup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShardGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterShardGroupRequest) =>
      Buffer.from(UpdateClusterShardGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateClusterShardGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified shard group. */
  deleteShardGroup: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShardGroup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterShardGroupRequest) =>
      Buffer.from(DeleteClusterShardGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteClusterShardGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves a list of external dictionaries that belong to specified cluster. */
  listExternalDictionaries: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListExternalDictionaries",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterExternalDictionariesRequest) =>
      Buffer.from(
        ListClusterExternalDictionariesRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      ListClusterExternalDictionariesRequest.decode(value),
    responseSerialize: (value: ListClusterExternalDictionariesResponse) =>
      Buffer.from(
        ListClusterExternalDictionariesResponse.encode(value).finish()
      ),
    responseDeserialize: (value: Buffer) =>
      ListClusterExternalDictionariesResponse.decode(value),
  },
  /** Creates an external dictionary for the specified ClickHouse cluster. */
  createExternalDictionary: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateExternalDictionary",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterExternalDictionaryRequest) =>
      Buffer.from(
        CreateClusterExternalDictionaryRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      CreateClusterExternalDictionaryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates an external dictionary for the specified ClickHouse cluster. */
  updateExternalDictionary: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateExternalDictionary",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterExternalDictionaryRequest) =>
      Buffer.from(
        UpdateClusterExternalDictionaryRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      UpdateClusterExternalDictionaryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified external dictionary. */
  deleteExternalDictionary: {
    path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteExternalDictionary",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterExternalDictionaryRequest) =>
      Buffer.from(
        DeleteClusterExternalDictionaryRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      DeleteClusterExternalDictionaryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified ClickHouse cluster.
   *
   * To get the list of available ClickHouse clusters, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /**
   * Retrieves a list of ClickHouse clusters that belong
   * to the specified folder.
   */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a ClickHouse cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified ClickHouse cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified ClickHouse cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Starts the specified ClickHouse cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stops the specified ClickHouse cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Moves a ClickHouse cluster to the specified folder. */
  move: handleUnaryCall<MoveClusterRequest, Operation>;
  /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
  addZookeeper: handleUnaryCall<AddClusterZookeeperRequest, Operation>;
  /** Creates a backup for the specified ClickHouse cluster. */
  backup: handleUnaryCall<BackupClusterRequest, Operation>;
  /** Creates a new ClickHouse cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: handleUnaryCall<
    RescheduleMaintenanceRequest,
    Operation
  >;
  /** Retrieves logs for the specified ClickHouse cluster. */
  listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
  /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
  streamLogs: handleServerStreamingCall<
    StreamClusterLogsRequest,
    StreamLogRecord
  >;
  /** Retrieves the list of Operation resources for the specified cluster. */
  listOperations: handleUnaryCall<
    ListClusterOperationsRequest,
    ListClusterOperationsResponse
  >;
  /** Retrieves the list of available backups for the specified ClickHouse cluster. */
  listBackups: handleUnaryCall<
    ListClusterBackupsRequest,
    ListClusterBackupsResponse
  >;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Creates new hosts for a cluster. */
  addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
  /** Updates the specified hosts. */
  updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
  /** Returns the specified shard. */
  getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
  /** Retrieves a list of shards that belong to the specified cluster. */
  listShards: handleUnaryCall<
    ListClusterShardsRequest,
    ListClusterShardsResponse
  >;
  /** Creates a new shard in the specified cluster. */
  addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
  /** Modifies the specified shard. */
  updateShard: handleUnaryCall<UpdateClusterShardRequest, Operation>;
  /** Deletes the specified shard. */
  deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
  /** Returns the specified shard group. */
  getShardGroup: handleUnaryCall<GetClusterShardGroupRequest, ShardGroup>;
  /** Retrieves a list of shard groups that belong to specified cluster. */
  listShardGroups: handleUnaryCall<
    ListClusterShardGroupsRequest,
    ListClusterShardGroupsResponse
  >;
  /** Creates a new shard group in the specified cluster. */
  createShardGroup: handleUnaryCall<CreateClusterShardGroupRequest, Operation>;
  /** Updates the specified shard group. */
  updateShardGroup: handleUnaryCall<UpdateClusterShardGroupRequest, Operation>;
  /** Deletes the specified shard group. */
  deleteShardGroup: handleUnaryCall<DeleteClusterShardGroupRequest, Operation>;
  /** Retrieves a list of external dictionaries that belong to specified cluster. */
  listExternalDictionaries: handleUnaryCall<
    ListClusterExternalDictionariesRequest,
    ListClusterExternalDictionariesResponse
  >;
  /** Creates an external dictionary for the specified ClickHouse cluster. */
  createExternalDictionary: handleUnaryCall<
    CreateClusterExternalDictionaryRequest,
    Operation
  >;
  /** Updates an external dictionary for the specified ClickHouse cluster. */
  updateExternalDictionary: handleUnaryCall<
    UpdateClusterExternalDictionaryRequest,
    Operation
  >;
  /** Deletes the specified external dictionary. */
  deleteExternalDictionary: handleUnaryCall<
    DeleteClusterExternalDictionaryRequest,
    Operation
  >;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified ClickHouse cluster.
   *
   * To get the list of available ClickHouse clusters, make a [List] request.
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
  /**
   * Retrieves a list of ClickHouse clusters that belong
   * to the specified folder.
   */
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
  /** Creates a ClickHouse cluster in the specified folder. */
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
  /** Updates the specified ClickHouse cluster. */
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
  /** Deletes the specified ClickHouse cluster. */
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
  /** Starts the specified ClickHouse cluster. */
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
  /** Stops the specified ClickHouse cluster. */
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
  /** Moves a ClickHouse cluster to the specified folder. */
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
  /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
  addZookeeper(
    request: AddClusterZookeeperRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addZookeeper(
    request: AddClusterZookeeperRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addZookeeper(
    request: AddClusterZookeeperRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Creates a backup for the specified ClickHouse cluster. */
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
  /** Creates a new ClickHouse cluster using the specified backup. */
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
  /** Reschedules planned maintenance operation. */
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
  /** Retrieves logs for the specified ClickHouse cluster. */
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
  /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
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
  /** Retrieves the list of available backups for the specified ClickHouse cluster. */
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
  /** Creates new hosts for a cluster. */
  addHosts(
    request: AddClusterHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addHosts(
    request: AddClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addHosts(
    request: AddClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified hosts. */
  updateHosts(
    request: UpdateClusterHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateHosts(
    request: UpdateClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateHosts(
    request: UpdateClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified hosts for a cluster. */
  deleteHosts(
    request: DeleteClusterHostsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteHosts(
    request: DeleteClusterHostsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteHosts(
    request: DeleteClusterHostsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the specified shard. */
  getShard(
    request: GetClusterShardRequest,
    callback: (error: ServiceError | null, response: Shard) => void
  ): ClientUnaryCall;
  getShard(
    request: GetClusterShardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Shard) => void
  ): ClientUnaryCall;
  getShard(
    request: GetClusterShardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Shard) => void
  ): ClientUnaryCall;
  /** Retrieves a list of shards that belong to the specified cluster. */
  listShards(
    request: ListClusterShardsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterShardsResponse
    ) => void
  ): ClientUnaryCall;
  listShards(
    request: ListClusterShardsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterShardsResponse
    ) => void
  ): ClientUnaryCall;
  listShards(
    request: ListClusterShardsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterShardsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a new shard in the specified cluster. */
  addShard(
    request: AddClusterShardRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addShard(
    request: AddClusterShardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addShard(
    request: AddClusterShardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Modifies the specified shard. */
  updateShard(
    request: UpdateClusterShardRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateShard(
    request: UpdateClusterShardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateShard(
    request: UpdateClusterShardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified shard. */
  deleteShard(
    request: DeleteClusterShardRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteShard(
    request: DeleteClusterShardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteShard(
    request: DeleteClusterShardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns the specified shard group. */
  getShardGroup(
    request: GetClusterShardGroupRequest,
    callback: (error: ServiceError | null, response: ShardGroup) => void
  ): ClientUnaryCall;
  getShardGroup(
    request: GetClusterShardGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ShardGroup) => void
  ): ClientUnaryCall;
  getShardGroup(
    request: GetClusterShardGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ShardGroup) => void
  ): ClientUnaryCall;
  /** Retrieves a list of shard groups that belong to specified cluster. */
  listShardGroups(
    request: ListClusterShardGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterShardGroupsResponse
    ) => void
  ): ClientUnaryCall;
  listShardGroups(
    request: ListClusterShardGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterShardGroupsResponse
    ) => void
  ): ClientUnaryCall;
  listShardGroups(
    request: ListClusterShardGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterShardGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a new shard group in the specified cluster. */
  createShardGroup(
    request: CreateClusterShardGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createShardGroup(
    request: CreateClusterShardGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createShardGroup(
    request: CreateClusterShardGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified shard group. */
  updateShardGroup(
    request: UpdateClusterShardGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateShardGroup(
    request: UpdateClusterShardGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateShardGroup(
    request: UpdateClusterShardGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified shard group. */
  deleteShardGroup(
    request: DeleteClusterShardGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteShardGroup(
    request: DeleteClusterShardGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteShardGroup(
    request: DeleteClusterShardGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves a list of external dictionaries that belong to specified cluster. */
  listExternalDictionaries(
    request: ListClusterExternalDictionariesRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterExternalDictionariesResponse
    ) => void
  ): ClientUnaryCall;
  listExternalDictionaries(
    request: ListClusterExternalDictionariesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterExternalDictionariesResponse
    ) => void
  ): ClientUnaryCall;
  listExternalDictionaries(
    request: ListClusterExternalDictionariesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterExternalDictionariesResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates an external dictionary for the specified ClickHouse cluster. */
  createExternalDictionary(
    request: CreateClusterExternalDictionaryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createExternalDictionary(
    request: CreateClusterExternalDictionaryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createExternalDictionary(
    request: CreateClusterExternalDictionaryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates an external dictionary for the specified ClickHouse cluster. */
  updateExternalDictionary(
    request: UpdateClusterExternalDictionaryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateExternalDictionary(
    request: UpdateClusterExternalDictionaryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateExternalDictionary(
    request: UpdateClusterExternalDictionaryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified external dictionary. */
  deleteExternalDictionary(
    request: DeleteClusterExternalDictionaryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteExternalDictionary(
    request: DeleteClusterExternalDictionaryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteExternalDictionary(
    request: DeleteClusterExternalDictionaryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.clickhouse.v1.ClusterService"
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
