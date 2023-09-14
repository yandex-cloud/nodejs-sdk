/* eslint-disable */
import { MessageType, messageTypeRegistry } from "../../../../../typeRegistry";
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
  ConnectionPoolerConfig,
  Resources,
  Access,
  PerformanceDiagnostics,
  DiskSizeAutoscaling,
  Cluster,
  Host,
  cluster_EnvironmentFromJSON,
  cluster_EnvironmentToJSON,
} from "../../../../../yandex/cloud/mdb/postgresql/v1/cluster";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/postgresql/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { DatabaseSpec } from "../../../../../yandex/cloud/mdb/postgresql/v1/database";
import { UserSpec } from "../../../../../yandex/cloud/mdb/postgresql/v1/user";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { Backup } from "../../../../../yandex/cloud/mdb/postgresql/v1/backup";
import { Postgresqlconfig96 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql9_6";
import { Postgresqlconfig101c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_1c";
import { PostgresqlConfig10 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10";
import { PostgresqlConfig11 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11";
import { Postgresqlconfig111c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_1c";
import { PostgresqlConfig12 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12";
import { Postgresqlconfig121c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_1c";
import { PostgresqlConfig13 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13";
import { Postgresqlconfig131c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13_1c";
import { PostgresqlConfig14 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql14";
import { Postgresqlconfig141c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql14_1c";
import { PostgresqlConfig15 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql15";
import { Postgresqlconfig151c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql15_1c";
import { PostgresqlConfig16 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql16";
import { Postgresqlconfig161c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql16_1c";
import { Postgresqlhostconfig96 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host9_6";
import { Postgresqlhostconfig101c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_1c";
import { PostgresqlHostConfig10 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host10";
import { PostgresqlHostConfig11 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host11";
import { Postgresqlhostconfig111c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_1c";
import { PostgresqlHostConfig12 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host12";
import { Postgresqlhostconfig121c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_1c";
import { PostgresqlHostConfig13 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host13";
import { Postgresqlhostconfig131c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host13_1c";
import { PostgresqlHostConfig14 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host14";
import { Postgresqlhostconfig141c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host14_1c";
import { PostgresqlHostConfig15 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host15";
import { Postgresqlhostconfig151c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host15_1c";
import { PostgresqlHostConfig16 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host16";
import { Postgresqlhostconfig161c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host16_1c";
import { Int64Value, BoolValue } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.GetClusterRequest";
  /**
   * ID of the PostgreSQL Cluster resource to return.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersRequest";
  /**
   * ID of the folder to list PostgreSQL clusters in.
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersResponse";
  /** List of PostgreSQL Cluster resources. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest";
  /** ID of the folder to create the PostgreSQL cluster in. */
  folderId: string;
  /** Name of the PostgreSQL cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the PostgreSQL cluster. */
  description: string;
  /**
   * Custom labels for the PostgreSQL cluster as `` key:value `` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the PostgreSQL cluster. */
  environment: Cluster_Environment;
  /** Configuration and resources for hosts that should be created for the PostgreSQL cluster. */
  configSpec?: ConfigSpec;
  /** Descriptions of databases to be created in the PostgreSQL cluster. */
  databaseSpecs: DatabaseSpec[];
  /** Descriptions of database users to be created in the PostgreSQL cluster. */
  userSpecs: UserSpec[];
  /** Individual configurations for hosts that should be created for the PostgreSQL cluster. */
  hostSpecs: HostSpec[];
  /** ID of the network to create the cluster in. */
  networkId: string;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata";
  /** ID of the PostgreSQL cluster that is being created. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest";
  /**
   * ID of the PostgreSQL Cluster resource to update.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Field mask that specifies which fields of the PostgreSQL Cluster resource should be updated. */
  updateMask?: FieldMask;
  /** New description of the PostgreSQL cluster. */
  description: string;
  /**
   * Custom labels for the PostgreSQL cluster as `` key:value `` pairs. Maximum 64 per resource.
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
  /** New maintenance window settings for the cluster. */
  maintenanceWindow?: MaintenanceWindow;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata";
  /** ID of the PostgreSQL Cluster resource that is being updated. */
  clusterId: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest";
  /**
   * ID of the PostgreSQL cluster to delete.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata";
  /** ID of the PostgreSQL cluster that is being deleted. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterRequest";
  /** ID of the PostgreSQL cluster to start. */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterMetadata";
  /** ID of the PostgreSQL cluster. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterRequest";
  /** ID of the PostgreSQL cluster to stop. */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterMetadata";
  /** ID of the PostgreSQL cluster. */
  clusterId: string;
}

export interface MoveClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterRequest";
  /** ID of the PostgreSQL cluster to move. */
  clusterId: string;
  /** ID of the destination folder. */
  destinationFolderId: string;
}

export interface MoveClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata";
  /** ID of the PostgreSQL cluster being moved. */
  clusterId: string;
  /** ID of the source folder. */
  sourceFolderId: string;
  /** ID of the destnation folder. */
  destinationFolderId: string;
}

export interface BackupClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterRequest";
  /**
   * ID of the PostgreSQL cluster to back up.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface BackupClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata";
  /** ID of the PostgreSQL cluster that is being backed up. */
  clusterId: string;
  /** ID of the PostgreSQL backup that is being created. */
  backupId: string;
}

export interface RestoreClusterRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest";
  /**
   * ID of the backup to create a cluster from.
   * To get the backup ID, use a [ClusterService.ListBackups] request.
   */
  backupId: string;
  /** Timestamp of the moment to which the PostgreSQL cluster should be restored. */
  time?: Date;
  /**
   * Flag that indicates whether a database should be restored to the first backup point
   * available just after the timestamp specified in the [time] field instead of just before.
   *
   * Possible values:
   * * false (default) - the restore point refers to the first backup moment before [time].
   * * true - the restore point refers to the first backup point after [time].
   */
  timeInclusive: boolean;
  /** Name of the new PostgreSQL cluster. The name must be unique within the folder. */
  name: string;
  /** Description of the new PostgreSQL cluster. */
  description: string;
  /**
   * Custom labels for the PostgreSQL cluster as `` key:value `` pairs. Maximum 64 per resource.
   * For example, "project": "mvp" or "source": "dictionary".
   */
  labels: { [key: string]: string };
  /** Deployment environment of the new PostgreSQL cluster. */
  environment: Cluster_Environment;
  /** Configuration for the PostgreSQL cluster to be created. */
  configSpec?: ConfigSpec;
  /**
   * Configurations for PostgreSQL hosts that should be created for
   * the cluster that is being created from the backup.
   */
  hostSpecs: HostSpec[];
  /** ID of the network to create the PostgreSQL cluster in. */
  networkId: string;
  /** ID of the folder to create the PostgreSQL cluster in. */
  folderId: string;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
}

export interface RestoreClusterRequest_LabelsEntry {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface RestoreClusterMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata";
  /** ID of the new PostgreSQL cluster that is being created from a backup. */
  clusterId: string;
  /** ID of the backup that is being used for creating a cluster. */
  backupId: string;
}

export interface StartClusterFailoverRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest";
  /** ID of PostgreSQL cluster. */
  clusterId: string;
  /** New master host. Switch to the most up-to-date replica if not provided. */
  hostName: string;
}

export interface StartClusterFailoverMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata";
  /** ID of the PostgreSQL cluster being failovered. */
  clusterId: string;
}

export interface RescheduleMaintenanceRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest";
  /** ID of the PostgreSQL cluster to reschedule the maintenance operation for. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata";
  /** Required. ID of the PostgreSQL cluster. */
  clusterId: string;
  /** Required. The time until which this maintenance operation is to be delayed. */
  delayedUntil?: Date;
}

export interface LogRecord {
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord";
  /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  timestamp?: Date;
  /** Contents of the log record. */
  message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry";
  key: string;
  value: string;
}

export interface ListClusterLogsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest";
  /**
   * ID of the PostgreSQL cluster to request logs for.
   * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Columns from the logs table to request.
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
   * Page token. To get the next page of results, set [page_token] to the
   * [ListClusterLogsResponse.next_page_token] returned by the previous list request.
   */
  pageToken: string;
  /** Always return `next_page_token`, even if current page is empty. */
  alwaysNextPageToken: boolean;
}

export enum ListClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** POSTGRESQL - Logs of PostgreSQL activity. */
  POSTGRESQL = 1,
  /** POOLER - Logs of connection pooler activity. */
  POOLER = 2,
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
    case "POSTGRESQL":
      return ListClusterLogsRequest_ServiceType.POSTGRESQL;
    case 2:
    case "POOLER":
      return ListClusterLogsRequest_ServiceType.POOLER;
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
    case ListClusterLogsRequest_ServiceType.POSTGRESQL:
      return "POSTGRESQL";
    case ListClusterLogsRequest_ServiceType.POOLER:
      return "POOLER";
    default:
      return "UNKNOWN";
  }
}

export interface ListClusterLogsResponse {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse";
  /** Requested log records. */
  logs: LogRecord[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
   * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   * This value is interchangeable with `next_record_token` from StreamLogs method.
   */
  nextPageToken: string;
}

export interface StreamLogRecord {
  $type: "yandex.cloud.mdb.postgresql.v1.StreamLogRecord";
  /** One of the requested log records. */
  record?: LogRecord;
  /**
   * This token allows you to continue streaming logs starting from the exact
   * same record. To continue streaming, specify value of `next_record_token`
   * as value for `record_token` parameter in the next StreamLogs request.
   * This value is interchangeable with `next_page_token` from ListLogs method.
   */
  nextRecordToken: string;
}

export interface StreamClusterLogsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest";
  /** Required. ID of the PostgreSQL cluster. */
  clusterId: string;
  /** Columns from logs table to get in the response. */
  columnFilter: string[];
  serviceType: StreamClusterLogsRequest_ServiceType;
  /** Start timestamp for the logs request. */
  fromTime?: Date;
  /**
   * End timestamp for the logs request.
   * If this field is not set, all existing logs will be sent and then the new ones as
   * they appear. In essence it has 'tail -f' semantics.
   */
  toTime?: Date;
  /**
   * Record token. Set `record_token` to the `next_record_token` returned by a previous StreamLogs
   * request to start streaming from next log record.
   */
  recordToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname],
   * [LogRecord.logs.message.error_severity] (for POSTGRESQL service), [LogRecord.logs.message.level] (for POOLER service) fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
   * Examples of a filter:
   * `message.hostname='node1.db.cloud.yandex.net'`
   * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`
   */
  filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
  SERVICE_TYPE_UNSPECIFIED = 0,
  /** POSTGRESQL - Logs of PostgreSQL activity. */
  POSTGRESQL = 1,
  /** POOLER - Logs of connection pooler activity. */
  POOLER = 2,
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
    case "POSTGRESQL":
      return StreamClusterLogsRequest_ServiceType.POSTGRESQL;
    case 2:
    case "POOLER":
      return StreamClusterLogsRequest_ServiceType.POOLER;
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
    case StreamClusterLogsRequest_ServiceType.POSTGRESQL:
      return "POSTGRESQL";
    case StreamClusterLogsRequest_ServiceType.POOLER:
      return "POOLER";
    default:
      return "UNKNOWN";
  }
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest";
  /** ID of the PostgreSQL Cluster resource to list operations for. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse";
  /** List of Operation resources for the specified PostgreSQL cluster. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest";
  /**
   * ID of the PostgreSQL cluster.
   * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token.  To get the next page of results, set [page_token] to the [ListClusterBackupsResponse.next_page_token]
   * returned by the previous list request.
   */
  pageToken: string;
}

export interface ListClusterBackupsResponse {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse";
  /** List of PostgreSQL Backup resources. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest";
  /**
   * ID of the PostgreSQL cluster.
   * To get the PostgreSQL cluster ID use a [ClusterService.List] request.
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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse";
  /** List of Host resources. */
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
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest";
  /**
   * ID of the PostgreSQL cluster to add hosts to.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configurations for PostgreSQL hosts that should be added to the cluster. */
  hostSpecs: HostSpec[];
}

export interface AddClusterHostsMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata";
  /** ID of the PostgreSQL cluster to which the hosts are being added. */
  clusterId: string;
  /** Names of hosts that are being added to the cluster. */
  hostNames: string[];
}

export interface DeleteClusterHostsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest";
  /**
   * ID of the PostgreSQL cluster to remove hosts from.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Names of hosts to delete. */
  hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata";
  /** ID of the PostgreSQL cluster to remove hosts from. */
  clusterId: string;
  /** Names of hosts that are being deleted. */
  hostNames: string[];
}

export interface UpdateClusterHostsRequest {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest";
  /**
   * ID of the PostgreSQL cluster to update hosts in.
   * To get the PostgreSQL cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** New configurations to apply to hosts. */
  updateHostSpecs: UpdateHostSpec[];
}

export interface UpdateClusterHostsMetadata {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata";
  /** ID of the PostgreSQL cluster to update hosts in. */
  clusterId: string;
  /** Names of hosts that are being updated. */
  hostNames: string[];
}

export interface UpdateHostSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateHostSpec";
  /**
   * Name of the host to update.
   * To get the PostgreSQL host name, use a [ClusterService.ListHosts] request.
   */
  hostName: string;
  /**
   * [Host.name] of the host to be used as the replication source (for cascading replication).
   * To get the PostgreSQL host name, use a [ClusterService.ListHosts] request.
   */
  replicationSource: string;
  /**
   * The host with the highest priority is the synchronous replica. All others are asynchronous.
   * The synchronous replica replaces the master when needed.
   *
   * When a replica becomes the master, its priority is ignored.
   */
  priority?: number;
  /** Configuration of a PostgreSQL server for the host. */
  configSpec?: ConfigHostSpec;
  /** Field mask that specifies which fields of the PostgreSQL host should be updated. */
  updateMask?: FieldMask;
  /** Whether the host should get a public IP address on creation. */
  assignPublicIp: boolean;
}

export interface HostSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.HostSpec";
  /**
   * ID of the availability zone where the host resides.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * ID of the subnet that the host should belong to. This subnet should be a part
   * of the network that the cluster belongs to.
   * The ID of the network is set in the field [Cluster.network_id].
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
  /** [Host.name] of the host to be used as the replication source (for cascading replication). */
  replicationSource: string;
  /**
   * Priority of the host as a replica. A higher value corresponds to higher priority.
   *
   * The host with the highest priority is the synchronous replica. All others are asynchronous.
   * The synchronous replica replaces the master when needed.
   *
   * When a replica becomes the master, its priority is ignored.
   */
  priority?: number;
  /** Configuration of a PostgreSQL server for the host. */
  configSpec?: ConfigHostSpec;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigSpec";
  /**
   * Version of PostgreSQL used in the cluster.
   * Possible values: `9.6`, `10`, `10_1c`, `11`, `12`, `13`, `14`, `15`
   */
  version: string;
  /** Configuration for a PostgreSQL 9.6 cluster. */
  postgresqlConfig96?: Postgresqlconfig96 | undefined;
  /** Configuration for a PostgreSQL 10 1C cluster. */
  postgresqlConfig101c?: Postgresqlconfig101c | undefined;
  /** Configuration for a PostgreSQL 10 cluster. */
  postgresqlConfig10?: PostgresqlConfig10 | undefined;
  /** Configuration for a PostgreSQL 11 cluster. */
  postgresqlConfig11?: PostgresqlConfig11 | undefined;
  /** Configuration for a PostgreSQL 11 1C cluster. */
  postgresqlConfig111c?: Postgresqlconfig111c | undefined;
  /** Configuration for a PostgreSQL 12 cluster. */
  postgresqlConfig12?: PostgresqlConfig12 | undefined;
  /** Configuration for a PostgreSQL 12 1C cluster. */
  postgresqlConfig121c?: Postgresqlconfig121c | undefined;
  /** Configuration for a PostgreSQL 13 cluster. */
  postgresqlConfig13?: PostgresqlConfig13 | undefined;
  /** Configuration for a PostgreSQL 13 1C cluster. */
  postgresqlConfig131c?: Postgresqlconfig131c | undefined;
  /** Configuration for a PostgreSQL 14 cluster. */
  postgresqlConfig14?: PostgresqlConfig14 | undefined;
  /** Configuration for a PostgreSQL 14 1C cluster. */
  postgresqlConfig141c?: Postgresqlconfig141c | undefined;
  /** Configuration for a PostgreSQL 15 cluster. */
  postgresqlConfig15?: PostgresqlConfig15 | undefined;
  /** Configuration for a PostgreSQL 15 1C cluster. */
  postgresqlConfig151c?: Postgresqlconfig151c | undefined;
  /** Configuration for a PostgreSQL 16 cluster. */
  postgresqlConfig16?: PostgresqlConfig16 | undefined;
  /** Configuration for a PostgreSQL 16 1C cluster. */
  postgresqlConfig161c?: Postgresqlconfig161c | undefined;
  /** Configuration of the connection pooler. */
  poolerConfig?: ConnectionPoolerConfig;
  /** Resources allocated to PostgreSQL hosts. */
  resources?: Resources;
  /** Configuration setting which enables/disables autofailover in cluster. */
  autofailover?: boolean;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /** Retention policy of automated backups. */
  backupRetainPeriodDays?: number;
  /** Access policy to DB */
  access?: Access;
  /** Configuration of the performance diagnostics service. */
  performanceDiagnostics?: PerformanceDiagnostics;
  /** Disk size autoscaling */
  diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface ConfigHostSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigHostSpec";
  /** Configuration for a host with PostgreSQL 9.6 server deployed. */
  postgresqlConfig96?: Postgresqlhostconfig96 | undefined;
  /** Configuration for a host with PostgreSQL 10 1C server deployed. */
  postgresqlConfig101c?: Postgresqlhostconfig101c | undefined;
  /** Configuration for a host with PostgreSQL 10 server deployed. */
  postgresqlConfig10?: PostgresqlHostConfig10 | undefined;
  /** Configuration for a host with PostgreSQL 11 server deployed. */
  postgresqlConfig11?: PostgresqlHostConfig11 | undefined;
  /** Configuration for a host with PostgreSQL 11 1C server deployed. */
  postgresqlConfig111c?: Postgresqlhostconfig111c | undefined;
  /** Configuration for a host with PostgreSQL 12 server deployed. */
  postgresqlConfig12?: PostgresqlHostConfig12 | undefined;
  /** Configuration for a host with PostgreSQL 12 1C server deployed. */
  postgresqlConfig121c?: Postgresqlhostconfig121c | undefined;
  /** Configuration for a host with PostgreSQL 13 server deployed. */
  postgresqlConfig13?: PostgresqlHostConfig13 | undefined;
  /** Configuration for a host with PostgreSQL 13 1C server deployed. */
  postgresqlConfig131c?: Postgresqlhostconfig131c | undefined;
  /** Configuration for a host with PostgreSQL 14 server deployed. */
  postgresqlConfig14?: PostgresqlHostConfig14 | undefined;
  /** Configuration for a host with PostgreSQL 14 1C server deployed. */
  postgresqlConfig141c?: Postgresqlhostconfig141c | undefined;
  /** Configuration for a host with PostgreSQL 15 server deployed. */
  postgresqlConfig15?: PostgresqlHostConfig15 | undefined;
  /** Configuration for a host with PostgreSQL 15 1C server deployed. */
  postgresqlConfig151c?: Postgresqlhostconfig151c | undefined;
  /** Configuration for a host with PostgreSQL 16 server deployed. */
  postgresqlConfig16?: PostgresqlHostConfig16 | undefined;
  /** Configuration for a host with PostgreSQL 16 1C server deployed. */
  postgresqlConfig161c?: Postgresqlhostconfig161c | undefined;
}

const baseGetClusterRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.GetClusterRequest",
  clusterId: "",
};

export const GetClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.GetClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListClustersRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersResponse",
  nextPageToken: "",
};

export const ListClustersResponse: MessageType<ListClustersResponse> = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClustersResponse" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  securityGroupIds: "",
  deletionProtection: false,
  hostGroupIds: "",
};

export const CreateClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest" as const,

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
            "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry",
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
    for (const v of message.securityGroupIds) {
      writer.uint32(90).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(96).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(106).string(v!);
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
          message.securityGroupIds.push(reader.string());
          break;
        case 12:
          message.deletionProtection = reader.bool();
          break;
        case 13:
          message.hostGroupIds.push(reader.string());
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
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

const baseCreateClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.postgresql.v1.CreateClusterRequest.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata",
  clusterId: "",
};

export const CreateClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.CreateClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest",
  clusterId: "",
  description: "",
  name: "",
  securityGroupIds: "",
  deletionProtection: false,
};

export const UpdateClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest" as const,

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
            "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry",
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
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(58).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(66).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
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
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.securityGroupIds.push(reader.string());
          break;
        case 9:
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
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.postgresql.v1.UpdateClusterRequest.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata",
  clusterId: "",
};

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest",
  clusterId: "",
};

export const DeleteClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata",
  clusterId: "",
};

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterRequest",
  clusterId: "",
};

export const StartClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterMetadata",
  clusterId: "",
};

export const StartClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterRequest",
  clusterId: "",
};

export const StopClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterMetadata",
  clusterId: "",
};

export const StopClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.StopClusterMetadata" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterRequest",
  clusterId: "",
  destinationFolderId: "",
};

export const MoveClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata",
  clusterId: "",
  sourceFolderId: "",
  destinationFolderId: "",
};

export const MoveClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.MoveClusterMetadata" as const,

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

const baseBackupClusterRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterRequest",
  clusterId: "",
};

export const BackupClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata",
  clusterId: "",
  backupId: "",
};

export const BackupClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.BackupClusterMetadata" as const,

  encode(
    message: BackupClusterMetadata,
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

  fromJSON(object: any): BackupClusterMetadata {
    const message = { ...baseBackupClusterMetadata } as BackupClusterMetadata;
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

  toJSON(message: BackupClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.backupId !== undefined && (obj.backupId = message.backupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackupClusterMetadata>, I>>(
    object: I
  ): BackupClusterMetadata {
    const message = { ...baseBackupClusterMetadata } as BackupClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    message.backupId = object.backupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(BackupClusterMetadata.$type, BackupClusterMetadata);

const baseRestoreClusterRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest",
  backupId: "",
  timeInclusive: false,
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  folderId: "",
  securityGroupIds: "",
  deletionProtection: false,
  hostGroupIds: "",
};

export const RestoreClusterRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest" as const,

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
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.timeInclusive === true) {
      writer.uint32(24).bool(message.timeInclusive);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RestoreClusterRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(56).int32(message.environment);
    }
    if (message.configSpec !== undefined) {
      ConfigSpec.encode(message.configSpec, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.hostSpecs) {
      HostSpec.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    if (message.folderId !== "") {
      writer.uint32(90).string(message.folderId);
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(98).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(104).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(114).string(v!);
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
    message.hostSpecs = [];
    message.securityGroupIds = [];
    message.hostGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backupId = reader.string();
          break;
        case 2:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.timeInclusive = reader.bool();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = RestoreClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.environment = reader.int32() as any;
          break;
        case 8:
          message.configSpec = ConfigSpec.decode(reader, reader.uint32());
          break;
        case 9:
          message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
          break;
        case 10:
          message.networkId = reader.string();
          break;
        case 11:
          message.folderId = reader.string();
          break;
        case 12:
          message.securityGroupIds.push(reader.string());
          break;
        case 13:
          message.deletionProtection = reader.bool();
          break;
        case 14:
          message.hostGroupIds.push(reader.string());
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
    message.timeInclusive =
      object.timeInclusive !== undefined && object.timeInclusive !== null
        ? Boolean(object.timeInclusive)
        : false;
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
    return message;
  },

  toJSON(message: RestoreClusterRequest): unknown {
    const obj: any = {};
    message.backupId !== undefined && (obj.backupId = message.backupId);
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.timeInclusive !== undefined &&
      (obj.timeInclusive = message.timeInclusive);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestoreClusterRequest>, I>>(
    object: I
  ): RestoreClusterRequest {
    const message = { ...baseRestoreClusterRequest } as RestoreClusterRequest;
    message.backupId = object.backupId ?? "";
    message.time = object.time ?? undefined;
    message.timeInclusive = object.timeInclusive ?? false;
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
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RestoreClusterRequest.$type, RestoreClusterRequest);

const baseRestoreClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const RestoreClusterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.mdb.postgresql.v1.RestoreClusterRequest.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata",
  clusterId: "",
  backupId: "",
};

export const RestoreClusterMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.RestoreClusterMetadata" as const,

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

const baseStartClusterFailoverRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest",
  clusterId: "",
  hostName: "",
};

export const StartClusterFailoverRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverRequest" as const,

  encode(
    message: StartClusterFailoverRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.hostName !== "") {
      writer.uint32(18).string(message.hostName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartClusterFailoverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartClusterFailoverRequest,
    } as StartClusterFailoverRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.hostName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartClusterFailoverRequest {
    const message = {
      ...baseStartClusterFailoverRequest,
    } as StartClusterFailoverRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.hostName =
      object.hostName !== undefined && object.hostName !== null
        ? String(object.hostName)
        : "";
    return message;
  },

  toJSON(message: StartClusterFailoverRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.hostName !== undefined && (obj.hostName = message.hostName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartClusterFailoverRequest>, I>>(
    object: I
  ): StartClusterFailoverRequest {
    const message = {
      ...baseStartClusterFailoverRequest,
    } as StartClusterFailoverRequest;
    message.clusterId = object.clusterId ?? "";
    message.hostName = object.hostName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StartClusterFailoverRequest.$type,
  StartClusterFailoverRequest
);

const baseStartClusterFailoverMetadata: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata",
  clusterId: "",
};

export const StartClusterFailoverMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.StartClusterFailoverMetadata" as const,

  encode(
    message: StartClusterFailoverMetadata,
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
  ): StartClusterFailoverMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStartClusterFailoverMetadata,
    } as StartClusterFailoverMetadata;
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

  fromJSON(object: any): StartClusterFailoverMetadata {
    const message = {
      ...baseStartClusterFailoverMetadata,
    } as StartClusterFailoverMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: StartClusterFailoverMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartClusterFailoverMetadata>, I>>(
    object: I
  ): StartClusterFailoverMetadata {
    const message = {
      ...baseStartClusterFailoverMetadata,
    } as StartClusterFailoverMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  StartClusterFailoverMetadata.$type,
  StartClusterFailoverMetadata
);

const baseRescheduleMaintenanceRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest",
  clusterId: "",
  rescheduleType: 0,
};

export const RescheduleMaintenanceRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata",
  clusterId: "",
};

export const RescheduleMaintenanceMetadata = {
  $type:
    "yandex.cloud.mdb.postgresql.v1.RescheduleMaintenanceMetadata" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord",
};

export const LogRecord = {
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord" as const,

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
          $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry",
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
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry",
  key: "",
  value: "",
};

export const LogRecord_MessageEntry = {
  $type: "yandex.cloud.mdb.postgresql.v1.LogRecord.MessageEntry" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest",
  clusterId: "",
  columnFilter: "",
  serviceType: 0,
  pageSize: 0,
  pageToken: "",
  alwaysNextPageToken: false,
};

export const ListClusterLogsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsRequest" as const,

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
    return message;
  },
};

messageTypeRegistry.set(ListClusterLogsRequest.$type, ListClusterLogsRequest);

const baseListClusterLogsResponse: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse",
  nextPageToken: "",
};

export const ListClusterLogsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterLogsResponse" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.StreamLogRecord",
  nextRecordToken: "",
};

export const StreamLogRecord = {
  $type: "yandex.cloud.mdb.postgresql.v1.StreamLogRecord" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest",
  clusterId: "",
  columnFilter: "",
  serviceType: 0,
  recordToken: "",
  filter: "",
};

export const StreamClusterLogsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.StreamClusterLogsRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse",
  nextPageToken: "",
};

export const ListClusterOperationsResponse = {
  $type:
    "yandex.cloud.mdb.postgresql.v1.ListClusterOperationsResponse" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterBackupsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse",
  nextPageToken: "",
};

export const ListClusterBackupsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterBackupsResponse" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterHostsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse",
  nextPageToken: "",
};

export const ListClusterHostsResponse = {
  $type: "yandex.cloud.mdb.postgresql.v1.ListClusterHostsResponse" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest",
  clusterId: "",
};

export const AddClusterHostsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsRequest" as const,

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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddClusterHostsRequest>, I>>(
    object: I
  ): AddClusterHostsRequest {
    const message = { ...baseAddClusterHostsRequest } as AddClusterHostsRequest;
    message.clusterId = object.clusterId ?? "";
    message.hostSpecs =
      object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AddClusterHostsRequest.$type, AddClusterHostsRequest);

const baseAddClusterHostsMetadata: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata",
  clusterId: "",
  hostNames: "",
};

export const AddClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.AddClusterHostsMetadata" as const,

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

const baseDeleteClusterHostsRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest",
  clusterId: "",
  hostNames: "",
};

export const DeleteClusterHostsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata",
  clusterId: "",
  hostNames: "",
};

export const DeleteClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.DeleteClusterHostsMetadata" as const,

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

const baseUpdateClusterHostsRequest: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest",
  clusterId: "",
};

export const UpdateClusterHostsRequest = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsRequest" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata",
  clusterId: "",
  hostNames: "",
};

export const UpdateClusterHostsMetadata = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateClusterHostsMetadata" as const,

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

const baseUpdateHostSpec: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateHostSpec",
  hostName: "",
  replicationSource: "",
  assignPublicIp: false,
};

export const UpdateHostSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.UpdateHostSpec" as const,

  encode(
    message: UpdateHostSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hostName !== "") {
      writer.uint32(10).string(message.hostName);
    }
    if (message.replicationSource !== "") {
      writer.uint32(18).string(message.replicationSource);
    }
    if (message.priority !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.priority! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.configSpec !== undefined) {
      ConfigHostSpec.encode(
        message.configSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(42).fork()).ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
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
          message.replicationSource = reader.string();
          break;
        case 3:
          message.priority = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.configSpec = ConfigHostSpec.decode(reader, reader.uint32());
          break;
        case 5:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateHostSpec {
    const message = { ...baseUpdateHostSpec } as UpdateHostSpec;
    message.hostName =
      object.hostName !== undefined && object.hostName !== null
        ? String(object.hostName)
        : "";
    message.replicationSource =
      object.replicationSource !== undefined &&
      object.replicationSource !== null
        ? String(object.replicationSource)
        : "";
    message.priority =
      object.priority !== undefined && object.priority !== null
        ? Number(object.priority)
        : undefined;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigHostSpec.fromJSON(object.configSpec)
        : undefined;
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    return message;
  },

  toJSON(message: UpdateHostSpec): unknown {
    const obj: any = {};
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.replicationSource !== undefined &&
      (obj.replicationSource = message.replicationSource);
    message.priority !== undefined && (obj.priority = message.priority);
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ConfigHostSpec.toJSON(message.configSpec)
        : undefined);
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
    message.replicationSource = object.replicationSource ?? "";
    message.priority = object.priority ?? undefined;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigHostSpec.fromPartial(object.configSpec)
        : undefined;
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateHostSpec.$type, UpdateHostSpec);

const baseHostSpec: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.HostSpec",
  zoneId: "",
  subnetId: "",
  assignPublicIp: false,
  replicationSource: "",
};

export const HostSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.HostSpec" as const,

  encode(
    message: HostSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(24).bool(message.assignPublicIp);
    }
    if (message.replicationSource !== "") {
      writer.uint32(34).string(message.replicationSource);
    }
    if (message.priority !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.priority! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.configSpec !== undefined) {
      ConfigHostSpec.encode(
        message.configSpec,
        writer.uint32(50).fork()
      ).ldelim();
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
          message.subnetId = reader.string();
          break;
        case 3:
          message.assignPublicIp = reader.bool();
          break;
        case 4:
          message.replicationSource = reader.string();
          break;
        case 5:
          message.priority = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.configSpec = ConfigHostSpec.decode(reader, reader.uint32());
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
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.replicationSource =
      object.replicationSource !== undefined &&
      object.replicationSource !== null
        ? String(object.replicationSource)
        : "";
    message.priority =
      object.priority !== undefined && object.priority !== null
        ? Number(object.priority)
        : undefined;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigHostSpec.fromJSON(object.configSpec)
        : undefined;
    return message;
  },

  toJSON(message: HostSpec): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    message.replicationSource !== undefined &&
      (obj.replicationSource = message.replicationSource);
    message.priority !== undefined && (obj.priority = message.priority);
    message.configSpec !== undefined &&
      (obj.configSpec = message.configSpec
        ? ConfigHostSpec.toJSON(message.configSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostSpec>, I>>(object: I): HostSpec {
    const message = { ...baseHostSpec } as HostSpec;
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.replicationSource = object.replicationSource ?? "";
    message.priority = object.priority ?? undefined;
    message.configSpec =
      object.configSpec !== undefined && object.configSpec !== null
        ? ConfigHostSpec.fromPartial(object.configSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(HostSpec.$type, HostSpec);

const baseConfigSpec: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigSpec",
  version: "",
};

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigSpec" as const,

  encode(
    message: ConfigSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.postgresqlConfig96 !== undefined) {
      Postgresqlconfig96.encode(
        message.postgresqlConfig96,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig101c !== undefined) {
      Postgresqlconfig101c.encode(
        message.postgresqlConfig101c,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig10 !== undefined) {
      PostgresqlConfig10.encode(
        message.postgresqlConfig10,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig11 !== undefined) {
      PostgresqlConfig11.encode(
        message.postgresqlConfig11,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig111c !== undefined) {
      Postgresqlconfig111c.encode(
        message.postgresqlConfig111c,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig12 !== undefined) {
      PostgresqlConfig12.encode(
        message.postgresqlConfig12,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig121c !== undefined) {
      Postgresqlconfig121c.encode(
        message.postgresqlConfig121c,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig13 !== undefined) {
      PostgresqlConfig13.encode(
        message.postgresqlConfig13,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig131c !== undefined) {
      Postgresqlconfig131c.encode(
        message.postgresqlConfig131c,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig14 !== undefined) {
      PostgresqlConfig14.encode(
        message.postgresqlConfig14,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig141c !== undefined) {
      Postgresqlconfig141c.encode(
        message.postgresqlConfig141c,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig15 !== undefined) {
      PostgresqlConfig15.encode(
        message.postgresqlConfig15,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig151c !== undefined) {
      Postgresqlconfig151c.encode(
        message.postgresqlConfig151c,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig16 !== undefined) {
      PostgresqlConfig16.encode(
        message.postgresqlConfig16,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig161c !== undefined) {
      Postgresqlconfig161c.encode(
        message.postgresqlConfig161c,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.poolerConfig !== undefined) {
      ConnectionPoolerConfig.encode(
        message.poolerConfig,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.autofailover !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autofailover! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(
        message.backupWindowStart,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.backupRetainPeriodDays!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(74).fork()).ldelim();
    }
    if (message.performanceDiagnostics !== undefined) {
      PerformanceDiagnostics.encode(
        message.performanceDiagnostics,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.diskSizeAutoscaling !== undefined) {
      DiskSizeAutoscaling.encode(
        message.diskSizeAutoscaling,
        writer.uint32(186).fork()
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
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.postgresqlConfig96 = Postgresqlconfig96.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.postgresqlConfig101c = Postgresqlconfig101c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.postgresqlConfig10 = PostgresqlConfig10.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.postgresqlConfig11 = PostgresqlConfig11.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.postgresqlConfig111c = Postgresqlconfig111c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.postgresqlConfig12 = PostgresqlConfig12.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.postgresqlConfig121c = Postgresqlconfig121c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.postgresqlConfig13 = PostgresqlConfig13.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.postgresqlConfig131c = Postgresqlconfig131c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.postgresqlConfig14 = PostgresqlConfig14.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.postgresqlConfig141c = Postgresqlconfig141c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.postgresqlConfig15 = PostgresqlConfig15.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.postgresqlConfig151c = Postgresqlconfig151c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.postgresqlConfig16 = PostgresqlConfig16.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.postgresqlConfig161c = Postgresqlconfig161c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.poolerConfig = ConnectionPoolerConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 6:
          message.autofailover = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          break;
        case 17:
          message.backupRetainPeriodDays = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.access = Access.decode(reader, reader.uint32());
          break;
        case 12:
          message.performanceDiagnostics = PerformanceDiagnostics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
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

  fromJSON(object: any): ConfigSpec {
    const message = { ...baseConfigSpec } as ConfigSpec;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.postgresqlConfig96 =
      object.postgresqlConfig_9_6 !== undefined &&
      object.postgresqlConfig_9_6 !== null
        ? Postgresqlconfig96.fromJSON(object.postgresqlConfig_9_6)
        : undefined;
    message.postgresqlConfig101c =
      object.postgresqlConfig_10_1c !== undefined &&
      object.postgresqlConfig_10_1c !== null
        ? Postgresqlconfig101c.fromJSON(object.postgresqlConfig_10_1c)
        : undefined;
    message.postgresqlConfig10 =
      object.postgresqlConfig_10 !== undefined &&
      object.postgresqlConfig_10 !== null
        ? PostgresqlConfig10.fromJSON(object.postgresqlConfig_10)
        : undefined;
    message.postgresqlConfig11 =
      object.postgresqlConfig_11 !== undefined &&
      object.postgresqlConfig_11 !== null
        ? PostgresqlConfig11.fromJSON(object.postgresqlConfig_11)
        : undefined;
    message.postgresqlConfig111c =
      object.postgresqlConfig_11_1c !== undefined &&
      object.postgresqlConfig_11_1c !== null
        ? Postgresqlconfig111c.fromJSON(object.postgresqlConfig_11_1c)
        : undefined;
    message.postgresqlConfig12 =
      object.postgresqlConfig_12 !== undefined &&
      object.postgresqlConfig_12 !== null
        ? PostgresqlConfig12.fromJSON(object.postgresqlConfig_12)
        : undefined;
    message.postgresqlConfig121c =
      object.postgresqlConfig_12_1c !== undefined &&
      object.postgresqlConfig_12_1c !== null
        ? Postgresqlconfig121c.fromJSON(object.postgresqlConfig_12_1c)
        : undefined;
    message.postgresqlConfig13 =
      object.postgresqlConfig_13 !== undefined &&
      object.postgresqlConfig_13 !== null
        ? PostgresqlConfig13.fromJSON(object.postgresqlConfig_13)
        : undefined;
    message.postgresqlConfig131c =
      object.postgresqlConfig_13_1c !== undefined &&
      object.postgresqlConfig_13_1c !== null
        ? Postgresqlconfig131c.fromJSON(object.postgresqlConfig_13_1c)
        : undefined;
    message.postgresqlConfig14 =
      object.postgresqlConfig_14 !== undefined &&
      object.postgresqlConfig_14 !== null
        ? PostgresqlConfig14.fromJSON(object.postgresqlConfig_14)
        : undefined;
    message.postgresqlConfig141c =
      object.postgresqlConfig_14_1c !== undefined &&
      object.postgresqlConfig_14_1c !== null
        ? Postgresqlconfig141c.fromJSON(object.postgresqlConfig_14_1c)
        : undefined;
    message.postgresqlConfig15 =
      object.postgresqlConfig_15 !== undefined &&
      object.postgresqlConfig_15 !== null
        ? PostgresqlConfig15.fromJSON(object.postgresqlConfig_15)
        : undefined;
    message.postgresqlConfig151c =
      object.postgresqlConfig_15_1c !== undefined &&
      object.postgresqlConfig_15_1c !== null
        ? Postgresqlconfig151c.fromJSON(object.postgresqlConfig_15_1c)
        : undefined;
    message.postgresqlConfig16 =
      object.postgresqlConfig_16 !== undefined &&
      object.postgresqlConfig_16 !== null
        ? PostgresqlConfig16.fromJSON(object.postgresqlConfig_16)
        : undefined;
    message.postgresqlConfig161c =
      object.postgresqlConfig_16_1c !== undefined &&
      object.postgresqlConfig_16_1c !== null
        ? Postgresqlconfig161c.fromJSON(object.postgresqlConfig_16_1c)
        : undefined;
    message.poolerConfig =
      object.poolerConfig !== undefined && object.poolerConfig !== null
        ? ConnectionPoolerConfig.fromJSON(object.poolerConfig)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.autofailover =
      object.autofailover !== undefined && object.autofailover !== null
        ? Boolean(object.autofailover)
        : undefined;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromJSON(object.backupWindowStart)
        : undefined;
    message.backupRetainPeriodDays =
      object.backupRetainPeriodDays !== undefined &&
      object.backupRetainPeriodDays !== null
        ? Number(object.backupRetainPeriodDays)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromJSON(object.access)
        : undefined;
    message.performanceDiagnostics =
      object.performanceDiagnostics !== undefined &&
      object.performanceDiagnostics !== null
        ? PerformanceDiagnostics.fromJSON(object.performanceDiagnostics)
        : undefined;
    message.diskSizeAutoscaling =
      object.diskSizeAutoscaling !== undefined &&
      object.diskSizeAutoscaling !== null
        ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
        : undefined;
    return message;
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.postgresqlConfig96 !== undefined &&
      (obj.postgresqlConfig_9_6 = message.postgresqlConfig96
        ? Postgresqlconfig96.toJSON(message.postgresqlConfig96)
        : undefined);
    message.postgresqlConfig101c !== undefined &&
      (obj.postgresqlConfig_10_1c = message.postgresqlConfig101c
        ? Postgresqlconfig101c.toJSON(message.postgresqlConfig101c)
        : undefined);
    message.postgresqlConfig10 !== undefined &&
      (obj.postgresqlConfig_10 = message.postgresqlConfig10
        ? PostgresqlConfig10.toJSON(message.postgresqlConfig10)
        : undefined);
    message.postgresqlConfig11 !== undefined &&
      (obj.postgresqlConfig_11 = message.postgresqlConfig11
        ? PostgresqlConfig11.toJSON(message.postgresqlConfig11)
        : undefined);
    message.postgresqlConfig111c !== undefined &&
      (obj.postgresqlConfig_11_1c = message.postgresqlConfig111c
        ? Postgresqlconfig111c.toJSON(message.postgresqlConfig111c)
        : undefined);
    message.postgresqlConfig12 !== undefined &&
      (obj.postgresqlConfig_12 = message.postgresqlConfig12
        ? PostgresqlConfig12.toJSON(message.postgresqlConfig12)
        : undefined);
    message.postgresqlConfig121c !== undefined &&
      (obj.postgresqlConfig_12_1c = message.postgresqlConfig121c
        ? Postgresqlconfig121c.toJSON(message.postgresqlConfig121c)
        : undefined);
    message.postgresqlConfig13 !== undefined &&
      (obj.postgresqlConfig_13 = message.postgresqlConfig13
        ? PostgresqlConfig13.toJSON(message.postgresqlConfig13)
        : undefined);
    message.postgresqlConfig131c !== undefined &&
      (obj.postgresqlConfig_13_1c = message.postgresqlConfig131c
        ? Postgresqlconfig131c.toJSON(message.postgresqlConfig131c)
        : undefined);
    message.postgresqlConfig14 !== undefined &&
      (obj.postgresqlConfig_14 = message.postgresqlConfig14
        ? PostgresqlConfig14.toJSON(message.postgresqlConfig14)
        : undefined);
    message.postgresqlConfig141c !== undefined &&
      (obj.postgresqlConfig_14_1c = message.postgresqlConfig141c
        ? Postgresqlconfig141c.toJSON(message.postgresqlConfig141c)
        : undefined);
    message.postgresqlConfig15 !== undefined &&
      (obj.postgresqlConfig_15 = message.postgresqlConfig15
        ? PostgresqlConfig15.toJSON(message.postgresqlConfig15)
        : undefined);
    message.postgresqlConfig151c !== undefined &&
      (obj.postgresqlConfig_15_1c = message.postgresqlConfig151c
        ? Postgresqlconfig151c.toJSON(message.postgresqlConfig151c)
        : undefined);
    message.postgresqlConfig16 !== undefined &&
      (obj.postgresqlConfig_16 = message.postgresqlConfig16
        ? PostgresqlConfig16.toJSON(message.postgresqlConfig16)
        : undefined);
    message.postgresqlConfig161c !== undefined &&
      (obj.postgresqlConfig_16_1c = message.postgresqlConfig161c
        ? Postgresqlconfig161c.toJSON(message.postgresqlConfig161c)
        : undefined);
    message.poolerConfig !== undefined &&
      (obj.poolerConfig = message.poolerConfig
        ? ConnectionPoolerConfig.toJSON(message.poolerConfig)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.autofailover !== undefined &&
      (obj.autofailover = message.autofailover);
    message.backupWindowStart !== undefined &&
      (obj.backupWindowStart = message.backupWindowStart
        ? TimeOfDay.toJSON(message.backupWindowStart)
        : undefined);
    message.backupRetainPeriodDays !== undefined &&
      (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    message.performanceDiagnostics !== undefined &&
      (obj.performanceDiagnostics = message.performanceDiagnostics
        ? PerformanceDiagnostics.toJSON(message.performanceDiagnostics)
        : undefined);
    message.diskSizeAutoscaling !== undefined &&
      (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
        ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec>, I>>(
    object: I
  ): ConfigSpec {
    const message = { ...baseConfigSpec } as ConfigSpec;
    message.version = object.version ?? "";
    message.postgresqlConfig96 =
      object.postgresqlConfig96 !== undefined &&
      object.postgresqlConfig96 !== null
        ? Postgresqlconfig96.fromPartial(object.postgresqlConfig96)
        : undefined;
    message.postgresqlConfig101c =
      object.postgresqlConfig101c !== undefined &&
      object.postgresqlConfig101c !== null
        ? Postgresqlconfig101c.fromPartial(object.postgresqlConfig101c)
        : undefined;
    message.postgresqlConfig10 =
      object.postgresqlConfig10 !== undefined &&
      object.postgresqlConfig10 !== null
        ? PostgresqlConfig10.fromPartial(object.postgresqlConfig10)
        : undefined;
    message.postgresqlConfig11 =
      object.postgresqlConfig11 !== undefined &&
      object.postgresqlConfig11 !== null
        ? PostgresqlConfig11.fromPartial(object.postgresqlConfig11)
        : undefined;
    message.postgresqlConfig111c =
      object.postgresqlConfig111c !== undefined &&
      object.postgresqlConfig111c !== null
        ? Postgresqlconfig111c.fromPartial(object.postgresqlConfig111c)
        : undefined;
    message.postgresqlConfig12 =
      object.postgresqlConfig12 !== undefined &&
      object.postgresqlConfig12 !== null
        ? PostgresqlConfig12.fromPartial(object.postgresqlConfig12)
        : undefined;
    message.postgresqlConfig121c =
      object.postgresqlConfig121c !== undefined &&
      object.postgresqlConfig121c !== null
        ? Postgresqlconfig121c.fromPartial(object.postgresqlConfig121c)
        : undefined;
    message.postgresqlConfig13 =
      object.postgresqlConfig13 !== undefined &&
      object.postgresqlConfig13 !== null
        ? PostgresqlConfig13.fromPartial(object.postgresqlConfig13)
        : undefined;
    message.postgresqlConfig131c =
      object.postgresqlConfig131c !== undefined &&
      object.postgresqlConfig131c !== null
        ? Postgresqlconfig131c.fromPartial(object.postgresqlConfig131c)
        : undefined;
    message.postgresqlConfig14 =
      object.postgresqlConfig14 !== undefined &&
      object.postgresqlConfig14 !== null
        ? PostgresqlConfig14.fromPartial(object.postgresqlConfig14)
        : undefined;
    message.postgresqlConfig141c =
      object.postgresqlConfig141c !== undefined &&
      object.postgresqlConfig141c !== null
        ? Postgresqlconfig141c.fromPartial(object.postgresqlConfig141c)
        : undefined;
    message.postgresqlConfig15 =
      object.postgresqlConfig15 !== undefined &&
      object.postgresqlConfig15 !== null
        ? PostgresqlConfig15.fromPartial(object.postgresqlConfig15)
        : undefined;
    message.postgresqlConfig151c =
      object.postgresqlConfig151c !== undefined &&
      object.postgresqlConfig151c !== null
        ? Postgresqlconfig151c.fromPartial(object.postgresqlConfig151c)
        : undefined;
    message.postgresqlConfig16 =
      object.postgresqlConfig16 !== undefined &&
      object.postgresqlConfig16 !== null
        ? PostgresqlConfig16.fromPartial(object.postgresqlConfig16)
        : undefined;
    message.postgresqlConfig161c =
      object.postgresqlConfig161c !== undefined &&
      object.postgresqlConfig161c !== null
        ? Postgresqlconfig161c.fromPartial(object.postgresqlConfig161c)
        : undefined;
    message.poolerConfig =
      object.poolerConfig !== undefined && object.poolerConfig !== null
        ? ConnectionPoolerConfig.fromPartial(object.poolerConfig)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.autofailover = object.autofailover ?? undefined;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromPartial(object.backupWindowStart)
        : undefined;
    message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    message.performanceDiagnostics =
      object.performanceDiagnostics !== undefined &&
      object.performanceDiagnostics !== null
        ? PerformanceDiagnostics.fromPartial(object.performanceDiagnostics)
        : undefined;
    message.diskSizeAutoscaling =
      object.diskSizeAutoscaling !== undefined &&
      object.diskSizeAutoscaling !== null
        ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

const baseConfigHostSpec: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigHostSpec",
};

export const ConfigHostSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConfigHostSpec" as const,

  encode(
    message: ConfigHostSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postgresqlConfig96 !== undefined) {
      Postgresqlhostconfig96.encode(
        message.postgresqlConfig96,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig101c !== undefined) {
      Postgresqlhostconfig101c.encode(
        message.postgresqlConfig101c,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig10 !== undefined) {
      PostgresqlHostConfig10.encode(
        message.postgresqlConfig10,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig11 !== undefined) {
      PostgresqlHostConfig11.encode(
        message.postgresqlConfig11,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig111c !== undefined) {
      Postgresqlhostconfig111c.encode(
        message.postgresqlConfig111c,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig12 !== undefined) {
      PostgresqlHostConfig12.encode(
        message.postgresqlConfig12,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig121c !== undefined) {
      Postgresqlhostconfig121c.encode(
        message.postgresqlConfig121c,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig13 !== undefined) {
      PostgresqlHostConfig13.encode(
        message.postgresqlConfig13,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig131c !== undefined) {
      Postgresqlhostconfig131c.encode(
        message.postgresqlConfig131c,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig14 !== undefined) {
      PostgresqlHostConfig14.encode(
        message.postgresqlConfig14,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig141c !== undefined) {
      Postgresqlhostconfig141c.encode(
        message.postgresqlConfig141c,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig15 !== undefined) {
      PostgresqlHostConfig15.encode(
        message.postgresqlConfig15,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig151c !== undefined) {
      Postgresqlhostconfig151c.encode(
        message.postgresqlConfig151c,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig16 !== undefined) {
      PostgresqlHostConfig16.encode(
        message.postgresqlConfig16,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig161c !== undefined) {
      Postgresqlhostconfig161c.encode(
        message.postgresqlConfig161c,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigHostSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigHostSpec } as ConfigHostSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postgresqlConfig96 = Postgresqlhostconfig96.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.postgresqlConfig101c = Postgresqlhostconfig101c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.postgresqlConfig10 = PostgresqlHostConfig10.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.postgresqlConfig11 = PostgresqlHostConfig11.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.postgresqlConfig111c = Postgresqlhostconfig111c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.postgresqlConfig12 = PostgresqlHostConfig12.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.postgresqlConfig121c = Postgresqlhostconfig121c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.postgresqlConfig13 = PostgresqlHostConfig13.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.postgresqlConfig131c = Postgresqlhostconfig131c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.postgresqlConfig14 = PostgresqlHostConfig14.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.postgresqlConfig141c = Postgresqlhostconfig141c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.postgresqlConfig15 = PostgresqlHostConfig15.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.postgresqlConfig151c = Postgresqlhostconfig151c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.postgresqlConfig16 = PostgresqlHostConfig16.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.postgresqlConfig161c = Postgresqlhostconfig161c.decode(
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

  fromJSON(object: any): ConfigHostSpec {
    const message = { ...baseConfigHostSpec } as ConfigHostSpec;
    message.postgresqlConfig96 =
      object.postgresqlHostConfig_9_6 !== undefined &&
      object.postgresqlHostConfig_9_6 !== null
        ? Postgresqlhostconfig96.fromJSON(object.postgresqlHostConfig_9_6)
        : undefined;
    message.postgresqlConfig101c =
      object.postgresqlHostConfig_10_1c !== undefined &&
      object.postgresqlHostConfig_10_1c !== null
        ? Postgresqlhostconfig101c.fromJSON(object.postgresqlHostConfig_10_1c)
        : undefined;
    message.postgresqlConfig10 =
      object.postgresqlHostConfig_10 !== undefined &&
      object.postgresqlHostConfig_10 !== null
        ? PostgresqlHostConfig10.fromJSON(object.postgresqlHostConfig_10)
        : undefined;
    message.postgresqlConfig11 =
      object.postgresqlHostConfig_11 !== undefined &&
      object.postgresqlHostConfig_11 !== null
        ? PostgresqlHostConfig11.fromJSON(object.postgresqlHostConfig_11)
        : undefined;
    message.postgresqlConfig111c =
      object.postgresqlHostConfig_11_1c !== undefined &&
      object.postgresqlHostConfig_11_1c !== null
        ? Postgresqlhostconfig111c.fromJSON(object.postgresqlHostConfig_11_1c)
        : undefined;
    message.postgresqlConfig12 =
      object.postgresqlHostConfig_12 !== undefined &&
      object.postgresqlHostConfig_12 !== null
        ? PostgresqlHostConfig12.fromJSON(object.postgresqlHostConfig_12)
        : undefined;
    message.postgresqlConfig121c =
      object.postgresqlHostConfig_12_1c !== undefined &&
      object.postgresqlHostConfig_12_1c !== null
        ? Postgresqlhostconfig121c.fromJSON(object.postgresqlHostConfig_12_1c)
        : undefined;
    message.postgresqlConfig13 =
      object.postgresqlHostConfig_13 !== undefined &&
      object.postgresqlHostConfig_13 !== null
        ? PostgresqlHostConfig13.fromJSON(object.postgresqlHostConfig_13)
        : undefined;
    message.postgresqlConfig131c =
      object.postgresqlHostConfig_13_1c !== undefined &&
      object.postgresqlHostConfig_13_1c !== null
        ? Postgresqlhostconfig131c.fromJSON(object.postgresqlHostConfig_13_1c)
        : undefined;
    message.postgresqlConfig14 =
      object.postgresqlHostConfig_14 !== undefined &&
      object.postgresqlHostConfig_14 !== null
        ? PostgresqlHostConfig14.fromJSON(object.postgresqlHostConfig_14)
        : undefined;
    message.postgresqlConfig141c =
      object.postgresqlHostConfig_14_1c !== undefined &&
      object.postgresqlHostConfig_14_1c !== null
        ? Postgresqlhostconfig141c.fromJSON(object.postgresqlHostConfig_14_1c)
        : undefined;
    message.postgresqlConfig15 =
      object.postgresqlHostConfig_15 !== undefined &&
      object.postgresqlHostConfig_15 !== null
        ? PostgresqlHostConfig15.fromJSON(object.postgresqlHostConfig_15)
        : undefined;
    message.postgresqlConfig151c =
      object.postgresqlHostConfig_15_1c !== undefined &&
      object.postgresqlHostConfig_15_1c !== null
        ? Postgresqlhostconfig151c.fromJSON(object.postgresqlHostConfig_15_1c)
        : undefined;
    message.postgresqlConfig16 =
      object.postgresqlHostConfig_16 !== undefined &&
      object.postgresqlHostConfig_16 !== null
        ? PostgresqlHostConfig16.fromJSON(object.postgresqlHostConfig_16)
        : undefined;
    message.postgresqlConfig161c =
      object.postgresqlHostConfig_16_1c !== undefined &&
      object.postgresqlHostConfig_16_1c !== null
        ? Postgresqlhostconfig161c.fromJSON(object.postgresqlHostConfig_16_1c)
        : undefined;
    return message;
  },

  toJSON(message: ConfigHostSpec): unknown {
    const obj: any = {};
    message.postgresqlConfig96 !== undefined &&
      (obj.postgresqlHostConfig_9_6 = message.postgresqlConfig96
        ? Postgresqlhostconfig96.toJSON(message.postgresqlConfig96)
        : undefined);
    message.postgresqlConfig101c !== undefined &&
      (obj.postgresqlHostConfig_10_1c = message.postgresqlConfig101c
        ? Postgresqlhostconfig101c.toJSON(message.postgresqlConfig101c)
        : undefined);
    message.postgresqlConfig10 !== undefined &&
      (obj.postgresqlHostConfig_10 = message.postgresqlConfig10
        ? PostgresqlHostConfig10.toJSON(message.postgresqlConfig10)
        : undefined);
    message.postgresqlConfig11 !== undefined &&
      (obj.postgresqlHostConfig_11 = message.postgresqlConfig11
        ? PostgresqlHostConfig11.toJSON(message.postgresqlConfig11)
        : undefined);
    message.postgresqlConfig111c !== undefined &&
      (obj.postgresqlHostConfig_11_1c = message.postgresqlConfig111c
        ? Postgresqlhostconfig111c.toJSON(message.postgresqlConfig111c)
        : undefined);
    message.postgresqlConfig12 !== undefined &&
      (obj.postgresqlHostConfig_12 = message.postgresqlConfig12
        ? PostgresqlHostConfig12.toJSON(message.postgresqlConfig12)
        : undefined);
    message.postgresqlConfig121c !== undefined &&
      (obj.postgresqlHostConfig_12_1c = message.postgresqlConfig121c
        ? Postgresqlhostconfig121c.toJSON(message.postgresqlConfig121c)
        : undefined);
    message.postgresqlConfig13 !== undefined &&
      (obj.postgresqlHostConfig_13 = message.postgresqlConfig13
        ? PostgresqlHostConfig13.toJSON(message.postgresqlConfig13)
        : undefined);
    message.postgresqlConfig131c !== undefined &&
      (obj.postgresqlHostConfig_13_1c = message.postgresqlConfig131c
        ? Postgresqlhostconfig131c.toJSON(message.postgresqlConfig131c)
        : undefined);
    message.postgresqlConfig14 !== undefined &&
      (obj.postgresqlHostConfig_14 = message.postgresqlConfig14
        ? PostgresqlHostConfig14.toJSON(message.postgresqlConfig14)
        : undefined);
    message.postgresqlConfig141c !== undefined &&
      (obj.postgresqlHostConfig_14_1c = message.postgresqlConfig141c
        ? Postgresqlhostconfig141c.toJSON(message.postgresqlConfig141c)
        : undefined);
    message.postgresqlConfig15 !== undefined &&
      (obj.postgresqlHostConfig_15 = message.postgresqlConfig15
        ? PostgresqlHostConfig15.toJSON(message.postgresqlConfig15)
        : undefined);
    message.postgresqlConfig151c !== undefined &&
      (obj.postgresqlHostConfig_15_1c = message.postgresqlConfig151c
        ? Postgresqlhostconfig151c.toJSON(message.postgresqlConfig151c)
        : undefined);
    message.postgresqlConfig16 !== undefined &&
      (obj.postgresqlHostConfig_16 = message.postgresqlConfig16
        ? PostgresqlHostConfig16.toJSON(message.postgresqlConfig16)
        : undefined);
    message.postgresqlConfig161c !== undefined &&
      (obj.postgresqlHostConfig_16_1c = message.postgresqlConfig161c
        ? Postgresqlhostconfig161c.toJSON(message.postgresqlConfig161c)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigHostSpec>, I>>(
    object: I
  ): ConfigHostSpec {
    const message = { ...baseConfigHostSpec } as ConfigHostSpec;
    message.postgresqlConfig96 =
      object.postgresqlConfig96 !== undefined &&
      object.postgresqlConfig96 !== null
        ? Postgresqlhostconfig96.fromPartial(object.postgresqlConfig96)
        : undefined;
    message.postgresqlConfig101c =
      object.postgresqlConfig101c !== undefined &&
      object.postgresqlConfig101c !== null
        ? Postgresqlhostconfig101c.fromPartial(object.postgresqlConfig101c)
        : undefined;
    message.postgresqlConfig10 =
      object.postgresqlConfig10 !== undefined &&
      object.postgresqlConfig10 !== null
        ? PostgresqlHostConfig10.fromPartial(object.postgresqlConfig10)
        : undefined;
    message.postgresqlConfig11 =
      object.postgresqlConfig11 !== undefined &&
      object.postgresqlConfig11 !== null
        ? PostgresqlHostConfig11.fromPartial(object.postgresqlConfig11)
        : undefined;
    message.postgresqlConfig111c =
      object.postgresqlConfig111c !== undefined &&
      object.postgresqlConfig111c !== null
        ? Postgresqlhostconfig111c.fromPartial(object.postgresqlConfig111c)
        : undefined;
    message.postgresqlConfig12 =
      object.postgresqlConfig12 !== undefined &&
      object.postgresqlConfig12 !== null
        ? PostgresqlHostConfig12.fromPartial(object.postgresqlConfig12)
        : undefined;
    message.postgresqlConfig121c =
      object.postgresqlConfig121c !== undefined &&
      object.postgresqlConfig121c !== null
        ? Postgresqlhostconfig121c.fromPartial(object.postgresqlConfig121c)
        : undefined;
    message.postgresqlConfig13 =
      object.postgresqlConfig13 !== undefined &&
      object.postgresqlConfig13 !== null
        ? PostgresqlHostConfig13.fromPartial(object.postgresqlConfig13)
        : undefined;
    message.postgresqlConfig131c =
      object.postgresqlConfig131c !== undefined &&
      object.postgresqlConfig131c !== null
        ? Postgresqlhostconfig131c.fromPartial(object.postgresqlConfig131c)
        : undefined;
    message.postgresqlConfig14 =
      object.postgresqlConfig14 !== undefined &&
      object.postgresqlConfig14 !== null
        ? PostgresqlHostConfig14.fromPartial(object.postgresqlConfig14)
        : undefined;
    message.postgresqlConfig141c =
      object.postgresqlConfig141c !== undefined &&
      object.postgresqlConfig141c !== null
        ? Postgresqlhostconfig141c.fromPartial(object.postgresqlConfig141c)
        : undefined;
    message.postgresqlConfig15 =
      object.postgresqlConfig15 !== undefined &&
      object.postgresqlConfig15 !== null
        ? PostgresqlHostConfig15.fromPartial(object.postgresqlConfig15)
        : undefined;
    message.postgresqlConfig151c =
      object.postgresqlConfig151c !== undefined &&
      object.postgresqlConfig151c !== null
        ? Postgresqlhostconfig151c.fromPartial(object.postgresqlConfig151c)
        : undefined;
    message.postgresqlConfig16 =
      object.postgresqlConfig16 !== undefined &&
      object.postgresqlConfig16 !== null
        ? PostgresqlHostConfig16.fromPartial(object.postgresqlConfig16)
        : undefined;
    message.postgresqlConfig161c =
      object.postgresqlConfig161c !== undefined &&
      object.postgresqlConfig161c !== null
        ? Postgresqlhostconfig161c.fromPartial(object.postgresqlConfig161c)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigHostSpec.$type, ConfigHostSpec);

/** A set of methods for managing PostgreSQL Cluster resources. */
export const ClusterServiceService = {
  /**
   * Returns the specified PostgreSQL Cluster resource.
   *
   * To get the list of available PostgreSQL Cluster resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Get",
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
   * Retrieves the list of PostgreSQL Cluster resources that belong
   * to the specified folder.
   */
  list: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) =>
      Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) =>
      Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a PostgreSQL cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) =>
      Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified PostgreSQL cluster. */
  update: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) =>
      Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified PostgreSQL cluster. */
  delete: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) =>
      Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Start the specified PostgreSQL cluster. */
  start: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) =>
      Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stop the specified PostgreSQL cluster. */
  stop: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) =>
      Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Moves the specified PostgreSQL cluster to the specified folder. */
  move: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Move",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MoveClusterRequest) =>
      Buffer.from(MoveClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a backup for the specified PostgreSQL cluster. */
  backup: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Backup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BackupClusterRequest) =>
      Buffer.from(BackupClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Creates a new PostgreSQL cluster using the specified backup. */
  restore: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Restore",
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
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/RescheduleMaintenance",
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
  /** Start a manual failover on the specified PostgreSQL cluster. */
  startFailover: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/StartFailover",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterFailoverRequest) =>
      Buffer.from(StartClusterFailoverRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StartClusterFailoverRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves logs for the specified PostgreSQL cluster. */
  listLogs: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListLogs",
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
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/StreamLogs",
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
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListOperations",
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
  /** Retrieves the list of available backups for the specified PostgreSQL cluster. */
  listBackups: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListBackups",
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
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListHosts",
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
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/AddHosts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddClusterHostsRequest) =>
      Buffer.from(AddClusterHostsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddClusterHostsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/DeleteHosts",
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
  /** Updates the specified hosts. */
  updateHosts: {
    path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/UpdateHosts",
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
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified PostgreSQL Cluster resource.
   *
   * To get the list of available PostgreSQL Cluster resources, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /**
   * Retrieves the list of PostgreSQL Cluster resources that belong
   * to the specified folder.
   */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a PostgreSQL cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified PostgreSQL cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified PostgreSQL cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Start the specified PostgreSQL cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Stop the specified PostgreSQL cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Moves the specified PostgreSQL cluster to the specified folder. */
  move: handleUnaryCall<MoveClusterRequest, Operation>;
  /** Creates a backup for the specified PostgreSQL cluster. */
  backup: handleUnaryCall<BackupClusterRequest, Operation>;
  /** Creates a new PostgreSQL cluster using the specified backup. */
  restore: handleUnaryCall<RestoreClusterRequest, Operation>;
  /** Reschedules planned maintenance operation. */
  rescheduleMaintenance: handleUnaryCall<
    RescheduleMaintenanceRequest,
    Operation
  >;
  /** Start a manual failover on the specified PostgreSQL cluster. */
  startFailover: handleUnaryCall<StartClusterFailoverRequest, Operation>;
  /** Retrieves logs for the specified PostgreSQL cluster. */
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
  /** Retrieves the list of available backups for the specified PostgreSQL cluster. */
  listBackups: handleUnaryCall<
    ListClusterBackupsRequest,
    ListClusterBackupsResponse
  >;
  /** Retrieves a list of hosts for the specified cluster. */
  listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
  /** Creates new hosts for a cluster. */
  addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
  /** Deletes the specified hosts for a cluster. */
  deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
  /** Updates the specified hosts. */
  updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified PostgreSQL Cluster resource.
   *
   * To get the list of available PostgreSQL Cluster resources, make a [List] request.
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
   * Retrieves the list of PostgreSQL Cluster resources that belong
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
  /** Creates a PostgreSQL cluster in the specified folder. */
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
  /** Updates the specified PostgreSQL cluster. */
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
  /** Deletes the specified PostgreSQL cluster. */
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
  /** Start the specified PostgreSQL cluster. */
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
  /** Stop the specified PostgreSQL cluster. */
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
  /** Moves the specified PostgreSQL cluster to the specified folder. */
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
  /** Creates a backup for the specified PostgreSQL cluster. */
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
  /** Creates a new PostgreSQL cluster using the specified backup. */
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
  /** Start a manual failover on the specified PostgreSQL cluster. */
  startFailover(
    request: StartClusterFailoverRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  startFailover(
    request: StartClusterFailoverRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  startFailover(
    request: StartClusterFailoverRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves logs for the specified PostgreSQL cluster. */
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
  /** Retrieves the list of available backups for the specified PostgreSQL cluster. */
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
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.mdb.postgresql.v1.ClusterService"
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
