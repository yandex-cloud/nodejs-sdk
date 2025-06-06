/* eslint-disable */
import Long from 'long';
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
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import {
    Cluster_Environment,
    Access,
    Cluster,
    cluster_EnvironmentFromJSON,
    cluster_EnvironmentToJSON,
} from '../../../../../yandex/cloud/mdb/spqr/v1/cluster';
import { MaintenanceWindow } from '../../../../../yandex/cloud/mdb/spqr/v1/maintenance';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    LogLevel,
    BalancerSettings,
    RouterSettings,
    Resources,
    CoordinatorSettings,
    PostgreSQLSettings,
    logLevelFromJSON,
    logLevelToJSON,
} from '../../../../../yandex/cloud/mdb/spqr/v1/config';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { ShardSpec, Shard } from '../../../../../yandex/cloud/mdb/spqr/v1/shard';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { DatabaseSpec } from '../../../../../yandex/cloud/mdb/spqr/v1/database';
import { UserSpec } from '../../../../../yandex/cloud/mdb/spqr/v1/user';
import { HostSpec, Host } from '../../../../../yandex/cloud/mdb/spqr/v1/host';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Backup } from '../../../../../yandex/cloud/mdb/spqr/v1/backup';
import { Int64Value, BoolValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.spqr.v1';

export interface GetClusterRequest {
    /**
     * ID of the SPQR Cluster resource to return.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface GetClusterAtRevisionRequest {
    /**
     * ID of the SPQR Cluster resource to return.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Cluster revision */
    revision: number;
}

export interface ListClustersRequest {
    /**
     * ID of the folder to list SPQR clusters in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListClustersResponse.next_page_token] returned by the previous list request.
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
    /** List of SPQR Cluster resources. */
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
    /** ID of the folder to create SPQR cluster in. */
    folderId: string;
    /** Name of the SPQR cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the SPQR cluster. */
    description: string;
    /**
     * Custom labels for the SPQR cluster as `` key:value `` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: { [key: string]: string };
    /** Deployment environment of the SPQR cluster. */
    environment: Cluster_Environment;
    /** Configuration and resources for hosts that should be created for the SPQR cluster. */
    configSpec?: ConfigSpec;
    /** Descriptions of databases to be created in the SPQR cluster. */
    databaseSpecs: DatabaseSpec[];
    /** Descriptions of database users to be created in the SPQR cluster. */
    userSpecs: UserSpec[];
    /** Individual configurations for hosts that should be created for the SPQR cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** New maintenance window settings for the cluster. */
    maintenanceWindow?: MaintenanceWindow;
    /** Descriptions of shards to be created in the SPQR cluster. */
    shardSpecs: ShardSpec[];
}

export interface CreateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateClusterMetadata {
    /** ID of the SPQR cluster that is being created. */
    clusterId: string;
}

export interface UpdateClusterRequest {
    /**
     * ID of the SPQR Cluster resource to update.
     * To get the SPQR cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the SPQR Cluster resource should be updated. */
    updateMask?: FieldMask;
    /** New name for the cluster. */
    name: string;
    /** New description of the SPQR cluster. */
    description: string;
    /**
     * Custom labels for the SPQR cluster as `` key:value `` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     *
     * The new set of labels will completely replace the old ones. To add a label, request the current
     * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: { [key: string]: string };
    /** New configuration and resources for hosts in the cluster. */
    configSpec?: ConfigSpec;
    /** New maintenance window settings for the cluster. */
    maintenanceWindow?: MaintenanceWindow;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** ID of the network to move the cluster to. */
    networkId: string;
}

export interface UpdateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateClusterMetadata {
    /** ID of the SPQR Cluster resource that is being updated. */
    clusterId: string;
}

export interface DeleteClusterRequest {
    /**
     * ID of the SPQR cluster to delete.
     * To get the SPQR cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface DeleteClusterMetadata {
    /** ID of the SPQR cluster that is being deleted. */
    clusterId: string;
}

export interface StartClusterRequest {
    /** ID of the SPQR cluster to start. */
    clusterId: string;
}

export interface StartClusterMetadata {
    /** ID of the SPQR cluster. */
    clusterId: string;
}

export interface StopClusterRequest {
    /** ID of the SPQR cluster to stop. */
    clusterId: string;
}

export interface StopClusterMetadata {
    /** ID of the SPQR cluster. */
    clusterId: string;
}

export interface MoveClusterRequest {
    /** ID of the SPQR cluster to move. */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}

export interface MoveClusterMetadata {
    /** ID of the SPQR cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destnation folder. */
    destinationFolderId: string;
}

export interface BackupClusterRequest {
    /**
     * ID of the SPQR cluster to back up.
     * To get the SPQR cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface BackupClusterMetadata {
    /** ID of the SPQR cluster that is being backed up. */
    clusterId: string;
}

export interface RestoreClusterRequest {
    /**
     * ID of the backup to create a cluster from.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /**
     * Name of the new SPQR cluster. The name must be unique within the folder.
     * The name can't be changed after the SPQR cluster is created.
     */
    name: string;
    /** Description of the new SPQR cluster. */
    description: string;
    /**
     * Custom labels for the SPQR cluster as `` key:value `` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: { [key: string]: string };
    /** Deployment environment of the new SPQR cluster. */
    environment: Cluster_Environment;
    /** Configuration for the SPQR cluster to be created. */
    configSpec?: ConfigSpec;
    /**
     * Configurations for SPQR hosts that should be created for
     * the cluster that is being created from the backup.
     */
    hostSpecs: HostSpec[];
    /** ID of the network to create the SPQR cluster in. */
    networkId: string;
    /** Required. ID of the folder to create the SPQR cluster in. */
    folderId: string;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Timestamp of the moment to which the SPQR cluster should be restored. */
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
}

export interface RestoreClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface RestoreClusterMetadata {
    /** ID of the new SPQR cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}

export interface RescheduleMaintenanceRequest {
    /** ID of the SPQR cluster to reschedule the maintenance operation for. */
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
    object: any,
): RescheduleMaintenanceRequest_RescheduleType {
    switch (object) {
        case 0:
        case 'RESCHEDULE_TYPE_UNSPECIFIED':
            return RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED;
        case 1:
        case 'IMMEDIATE':
            return RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE;
        case 2:
        case 'NEXT_AVAILABLE_WINDOW':
            return RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW;
        case 3:
        case 'SPECIFIC_TIME':
            return RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RescheduleMaintenanceRequest_RescheduleType.UNRECOGNIZED;
    }
}

export function rescheduleMaintenanceRequest_RescheduleTypeToJSON(
    object: RescheduleMaintenanceRequest_RescheduleType,
): string {
    switch (object) {
        case RescheduleMaintenanceRequest_RescheduleType.RESCHEDULE_TYPE_UNSPECIFIED:
            return 'RESCHEDULE_TYPE_UNSPECIFIED';
        case RescheduleMaintenanceRequest_RescheduleType.IMMEDIATE:
            return 'IMMEDIATE';
        case RescheduleMaintenanceRequest_RescheduleType.NEXT_AVAILABLE_WINDOW:
            return 'NEXT_AVAILABLE_WINDOW';
        case RescheduleMaintenanceRequest_RescheduleType.SPECIFIC_TIME:
            return 'SPECIFIC_TIME';
        default:
            return 'UNKNOWN';
    }
}

/** Rescheduled maintenance operation metadata. */
export interface RescheduleMaintenanceMetadata {
    /** Required. ID of the SPQR cluster. */
    clusterId: string;
    /**
     * Required. The time until which this maintenance operation is to be delayed.
     * Can be in the past for rescheduled to "IMMEDIATE".
     */
    delayedUntil?: Date;
}

export interface LogRecord {
    /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
    key: string;
    value: string;
}

export interface ListClusterLogsRequest {
    /**
     * ID of the SPQR cluster to request logs for.
     * To get the SPQR cluster ID use a [ClusterService.List] request.
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
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterLogsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
    /** Always return `next_page_token`, even if current page is empty. */
    alwaysNextPageToken: boolean;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.severity] fields.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
     * Examples of a filter: `message.hostname='node1.db.cloud.yandex.net'`, `message.severity IN ('E', 'F')`
     */
    filter: string;
    orderBy: string;
}

export enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** POSTGRESQL - Logs of SPQR activity. */
    POSTGRESQL = 1,
    ROUTER = 2,
    COORDINATOR = 3,
    UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(
    object: any,
): ListClusterLogsRequest_ServiceType {
    switch (object) {
        case 0:
        case 'SERVICE_TYPE_UNSPECIFIED':
            return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case 'POSTGRESQL':
            return ListClusterLogsRequest_ServiceType.POSTGRESQL;
        case 2:
        case 'ROUTER':
            return ListClusterLogsRequest_ServiceType.ROUTER;
        case 3:
        case 'COORDINATOR':
            return ListClusterLogsRequest_ServiceType.COORDINATOR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ListClusterLogsRequest_ServiceType.UNRECOGNIZED;
    }
}

export function listClusterLogsRequest_ServiceTypeToJSON(
    object: ListClusterLogsRequest_ServiceType,
): string {
    switch (object) {
        case ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
            return 'SERVICE_TYPE_UNSPECIFIED';
        case ListClusterLogsRequest_ServiceType.POSTGRESQL:
            return 'POSTGRESQL';
        case ListClusterLogsRequest_ServiceType.ROUTER:
            return 'ROUTER';
        case ListClusterLogsRequest_ServiceType.COORDINATOR:
            return 'COORDINATOR';
        default:
            return 'UNKNOWN';
    }
}

export interface ListClusterLogsResponse {
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
    /** Required. ID of the SPQR cluster. */
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
     * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.severity] fields.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
     * Examples of a filter: `message.hostname='node1.db.cloud.yandex.net'`, `message.severity IN ('E', 'F')`
     */
    filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** POSTGRESQL - Logs of SPQR activity. */
    POSTGRESQL = 1,
    ROUTER = 2,
    COORDINATOR = 3,
    UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(
    object: any,
): StreamClusterLogsRequest_ServiceType {
    switch (object) {
        case 0:
        case 'SERVICE_TYPE_UNSPECIFIED':
            return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case 'POSTGRESQL':
            return StreamClusterLogsRequest_ServiceType.POSTGRESQL;
        case 2:
        case 'ROUTER':
            return StreamClusterLogsRequest_ServiceType.ROUTER;
        case 3:
        case 'COORDINATOR':
            return StreamClusterLogsRequest_ServiceType.COORDINATOR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StreamClusterLogsRequest_ServiceType.UNRECOGNIZED;
    }
}

export function streamClusterLogsRequest_ServiceTypeToJSON(
    object: StreamClusterLogsRequest_ServiceType,
): string {
    switch (object) {
        case StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
            return 'SERVICE_TYPE_UNSPECIFIED';
        case StreamClusterLogsRequest_ServiceType.POSTGRESQL:
            return 'POSTGRESQL';
        case StreamClusterLogsRequest_ServiceType.ROUTER:
            return 'ROUTER';
        case StreamClusterLogsRequest_ServiceType.COORDINATOR:
            return 'COORDINATOR';
        default:
            return 'UNKNOWN';
    }
}

export interface ListClusterOperationsRequest {
    /** ID of the SPQR Cluster resource to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterOperationsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}

export interface ListClusterOperationsResponse {
    /** List of Operation resources for the specified SPQR cluster. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface BackupListFilter {
    /** Start time for the filter. */
    startTime?: Date;
    /** End time for the filter. */
    endTime?: Date;
    /** Retention ID [Backup.retention_policy_id] of the associated backup policy. */
    retentionPolicyId: string;
}

export interface ListClusterBackupsRequest {
    /**
     * ID of the SPQR cluster.
     * To get the SPQR cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the
     * [ListClusterBackupsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}

export interface ListClusterBackupsResponse {
    /** List of SPQR Backup resources. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface SpqrSpec {
    /** Configuration and resource allocation for SPQR Router hosts. */
    router?: SpqrSpec_Router;
    /** Configuration and resource allocation for SPQR Coordinator hosts. */
    coordinator?: SpqrSpec_Coordinator;
    /** Configuration and resource allocation for PostgreSQL hosts. */
    postgresql?: SpqrSpec_PostgreSQL;
    /** Configuration and resource allocation for SPQR Infra (router+coordinator) hosts. */
    infra?: SpqrSpec_Infra;
    /** Password of the SPQR console. */
    consolePassword: string;
    logLevel: LogLevel;
    /** Configuration for SPQR Balancer. */
    balancer?: BalancerSettings;
}

export interface SpqrSpec_Router {
    /** Configuration for router hosts. */
    config?: RouterSettings;
    /** Resources allocated to each host. */
    resources?: Resources;
}

export interface SpqrSpec_Coordinator {
    /** Configuration for coordinator hosts. */
    config?: CoordinatorSettings;
    /** Resources allocated to each host. */
    resources?: Resources;
}

export interface SpqrSpec_PostgreSQL {
    /** Configuration for PostgreSQL hosts. */
    config?: PostgreSQLSettings;
    /** Resources allocated to each host. */
    resources?: Resources;
}

export interface SpqrSpec_Infra {
    /** Resources allocated to each host */
    resources?: Resources;
    /** Router related configuration */
    router?: RouterSettings;
    /** Coordinator related configuration */
    coordinator?: CoordinatorSettings;
}

export interface ConfigSpec {
    /** Configuration and resource allocation for a SPQR Beta cluster. */
    spqrSpec?: SpqrSpec;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Retain period of automatically created backup in days */
    backupRetainPeriodDays?: number;
    /** Access policy to DB */
    access?: Access;
    soxAudit?: boolean;
}

export interface ListClusterHostsRequest {
    /**
     * ID of the SPQR cluster.
     * To get the SPQR cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterHostsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}

export interface ListClusterHostsAtRevisionRequest {
    /**
     * ID of the SPQR cluster.
     * To get the SPQR cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterHostsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
    /** Cluster revision */
    revision: number;
}

export interface ListClusterHostsResponse {
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
    /**
     * ID of the SPQR cluster to add hosts to.
     * To get the SPQR cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configurations for SPQR hosts that should be added to the cluster. */
    hostSpecs: HostSpec[];
}

export interface AddClusterHostsMetadata {
    /** ID of the SPQR cluster to which the hosts are being added. */
    clusterId: string;
    /** Names of hosts that are being added to the cluster. */
    hostNames: string[];
}

export interface UpdateClusterHostsRequest {
    /**
     * ID of the SPQR cluster to update hosts in.
     * To get the SPQR cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** New configurations to apply to hosts. */
    updateHostSpecs: UpdateHostSpec[];
}

export interface UpdateClusterHostsMetadata {
    /** ID of the SPQR cluster to update hosts in. */
    clusterId: string;
    /** Names of hosts that are being updated. */
    hostNames: string[];
}

export interface UpdateHostSpec {
    /**
     * Name of the host to update.
     * To get the SPQR host name, use a [ClusterService.ListHosts] request.
     */
    hostName: string;
    /** Field mask that specifies which fields of the SPQR host should be updated. */
    updateMask?: FieldMask;
    /** Whether the host should get a public IP address on creation. */
    assignPublicIp: boolean;
}

export interface DeleteClusterHostsRequest {
    /**
     * ID of the SPQR cluster to remove hosts from.
     * To get the SPQR cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of hosts to delete. */
    hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
    /** ID of the SPQR cluster to remove hosts from. */
    clusterId: string;
    /** Names of hosts that are being deleted. */
    hostNames: string[];
}

export interface ResetupHostsRequest {
    /** Required. ID of the SPQR cluster. */
    clusterId: string;
    /** Required. Name of the hosts to resetup. */
    hostNames: string[];
}

export interface ResetupHostsMetadata {
    /** Required. ID of the SPQR cluster. */
    clusterId: string;
    /** Required. The name of hosts to resetup. */
    hostNames: string[];
}

export interface GetClusterShardRequest {
    /**
     * ID of the SPQR cluster that the shard belongs to.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the SPQR shard to return.
     * To get the name of the shard use a [ClusterService.ListShards] request.
     */
    shardName: string;
}

export interface ListClusterShardsRequest {
    /**
     * ID of the SPQR cluster to list databases in.
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
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterShardsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}

export interface ListClusterShardsAtRevisionRequest {
    /**
     * ID of the SPQR cluster to list databases in.
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
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterShardsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
    /** Cluster revision */
    revision: number;
}

export interface ListClusterShardsResponse {
    /** List of SPQR shards. */
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
    /**
     * ID of the SPQR cluster to add a shard to.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Properties of the shard to be created. */
    shardSpec?: ShardSpec;
}

export interface AddClusterShardMetadata {
    /** ID of the SPQR cluster that a shard is being added to. */
    clusterId: string;
    /** Name of the shard being added. */
    shardName: string;
}

export interface DeleteClusterShardRequest {
    /**
     * ID of the SPQR cluster to delete a shard in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the SPQR shard to delete.
     * To get the name of the shard use a [ClusterService.ListShards] request.
     */
    shardName: string;
}

export interface DeleteClusterShardMetadata {
    /** ID of the SPQR cluster that a shard is being deleted in. */
    clusterId: string;
    /** Name of the shard being deleted. */
    shardName: string;
}

export interface AddSubclusterRequest {
    /** ID of the SPQR cluster that subcluster is being added to. */
    clusterId: string;
    /** Configurations for SPQR hosts that should be created */
    hostSpecs: HostSpec[];
    /** Resources allocated to each host. */
    resources?: Resources;
}

const baseGetClusterRequest: object = { clusterId: '' };

export const GetClusterRequest = {
    encode(message: GetClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
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
                : '';
        return message;
    },

    toJSON(message: GetClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetClusterRequest>, I>>(object: I): GetClusterRequest {
        const message = { ...baseGetClusterRequest } as GetClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseGetClusterAtRevisionRequest: object = { clusterId: '', revision: 0 };

export const GetClusterAtRevisionRequest = {
    encode(
        message: GetClusterAtRevisionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.revision !== 0) {
            writer.uint32(16).int64(message.revision);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterAtRevisionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetClusterAtRevisionRequest } as GetClusterAtRevisionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.revision = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetClusterAtRevisionRequest {
        const message = { ...baseGetClusterAtRevisionRequest } as GetClusterAtRevisionRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.revision =
            object.revision !== undefined && object.revision !== null ? Number(object.revision) : 0;
        return message;
    },

    toJSON(message: GetClusterAtRevisionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetClusterAtRevisionRequest>, I>>(
        object: I,
    ): GetClusterAtRevisionRequest {
        const message = { ...baseGetClusterAtRevisionRequest } as GetClusterAtRevisionRequest;
        message.clusterId = object.clusterId ?? '';
        message.revision = object.revision ?? 0;
        return message;
    },
};

const baseListClustersRequest: object = { folderId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListClustersRequest = {
    encode(message: ListClustersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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

    toJSON(message: ListClustersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClustersRequest>, I>>(
        object: I,
    ): ListClustersRequest {
        const message = { ...baseListClustersRequest } as ListClustersRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListClustersResponse: object = { nextPageToken: '' };

export const ListClustersResponse = {
    encode(message: ListClustersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.clusters) {
            Cluster.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersResponse {
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
        message.clusters = (object.clusters ?? []).map((e: any) => Cluster.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClustersResponse): unknown {
        const obj: any = {};
        if (message.clusters) {
            obj.clusters = message.clusters.map((e) => (e ? Cluster.toJSON(e) : undefined));
        } else {
            obj.clusters = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClustersResponse>, I>>(
        object: I,
    ): ListClustersResponse {
        const message = { ...baseListClustersResponse } as ListClustersResponse;
        message.clusters = object.clusters?.map((e) => Cluster.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateClusterRequest: object = {
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    securityGroupIds: '',
    deletionProtection: false,
};

export const CreateClusterRequest = {
    encode(message: CreateClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateClusterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
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
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v!);
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.shardSpecs) {
            ShardSpec.encode(v!, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.labels = {};
        message.databaseSpecs = [];
        message.userSpecs = [];
        message.hostSpecs = [];
        message.securityGroupIds = [];
        message.shardSpecs = [];
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
                    const entry4 = CreateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
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
                    message.databaseSpecs.push(DatabaseSpec.decode(reader, reader.uint32()));
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
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.shardSpecs.push(ShardSpec.decode(reader, reader.uint32()));
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
                : '';
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
        message.environment =
            object.environment !== undefined && object.environment !== null
                ? cluster_EnvironmentFromJSON(object.environment)
                : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.databaseSpecs = (object.databaseSpecs ?? []).map((e: any) =>
            DatabaseSpec.fromJSON(e),
        );
        message.userSpecs = (object.userSpecs ?? []).map((e: any) => UserSpec.fromJSON(e));
        message.hostSpecs = (object.hostSpecs ?? []).map((e: any) => HostSpec.fromJSON(e));
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.shardSpecs = (object.shardSpecs ?? []).map((e: any) => ShardSpec.fromJSON(e));
        return message;
    },

    toJSON(message: CreateClusterRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
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
                e ? DatabaseSpec.toJSON(e) : undefined,
            );
        } else {
            obj.databaseSpecs = [];
        }
        if (message.userSpecs) {
            obj.userSpecs = message.userSpecs.map((e) => (e ? UserSpec.toJSON(e) : undefined));
        } else {
            obj.userSpecs = [];
        }
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => (e ? HostSpec.toJSON(e) : undefined));
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
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        if (message.shardSpecs) {
            obj.shardSpecs = message.shardSpecs.map((e) => (e ? ShardSpec.toJSON(e) : undefined));
        } else {
            obj.shardSpecs = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterRequest>, I>>(
        object: I,
    ): CreateClusterRequest {
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.folderId = object.folderId ?? '';
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
        message.environment = object.environment ?? 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.databaseSpecs = object.databaseSpecs?.map((e) => DatabaseSpec.fromPartial(e)) || [];
        message.userSpecs = object.userSpecs?.map((e) => UserSpec.fromPartial(e)) || [];
        message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
        message.networkId = object.networkId ?? '';
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.shardSpecs = object.shardSpecs?.map((e) => ShardSpec.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateClusterRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateClusterRequest_LabelsEntry = {
    encode(
        message: CreateClusterRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest_LabelsEntry {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateClusterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateClusterRequest_LabelsEntry {
        const message = {
            ...baseCreateClusterRequest_LabelsEntry,
        } as CreateClusterRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateClusterMetadata: object = { clusterId: '' };

export const CreateClusterMetadata = {
    encode(message: CreateClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterMetadata {
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
                : '';
        return message;
    },

    toJSON(message: CreateClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterMetadata>, I>>(
        object: I,
    ): CreateClusterMetadata {
        const message = { ...baseCreateClusterMetadata } as CreateClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseUpdateClusterRequest: object = {
    clusterId: '',
    name: '',
    description: '',
    securityGroupIds: '',
    deletionProtection: false,
    networkId: '',
};

export const UpdateClusterRequest = {
    encode(message: UpdateClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
            UpdateClusterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.configSpec !== undefined) {
            ConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v!);
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest {
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
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.configSpec = ConfigSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
                    break;
                case 10:
                    message.networkId = reader.string();
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
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        return message;
    },

    toJSON(message: UpdateClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
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
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? ConfigSpec.toJSON(message.configSpec)
                : undefined);
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest>, I>>(
        object: I,
    ): UpdateClusterRequest {
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.clusterId = object.clusterId ?? '';
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
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.networkId = object.networkId ?? '';
        return message;
    },
};

const baseUpdateClusterRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateClusterRequest_LabelsEntry = {
    encode(
        message: UpdateClusterRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest_LabelsEntry {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateClusterRequest_LabelsEntry {
        const message = {
            ...baseUpdateClusterRequest_LabelsEntry,
        } as UpdateClusterRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateClusterMetadata: object = { clusterId: '' };

export const UpdateClusterMetadata = {
    encode(message: UpdateClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterMetadata {
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
                : '';
        return message;
    },

    toJSON(message: UpdateClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterMetadata>, I>>(
        object: I,
    ): UpdateClusterMetadata {
        const message = { ...baseUpdateClusterMetadata } as UpdateClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseDeleteClusterRequest: object = { clusterId: '' };

export const DeleteClusterRequest = {
    encode(message: DeleteClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterRequest {
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
                : '';
        return message;
    },

    toJSON(message: DeleteClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(
        object: I,
    ): DeleteClusterRequest {
        const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseDeleteClusterMetadata: object = { clusterId: '' };

export const DeleteClusterMetadata = {
    encode(message: DeleteClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterMetadata {
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
                : '';
        return message;
    },

    toJSON(message: DeleteClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteClusterMetadata>, I>>(
        object: I,
    ): DeleteClusterMetadata {
        const message = { ...baseDeleteClusterMetadata } as DeleteClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseStartClusterRequest: object = { clusterId: '' };

export const StartClusterRequest = {
    encode(message: StartClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
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
                : '';
        return message;
    },

    toJSON(message: StartClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartClusterRequest>, I>>(
        object: I,
    ): StartClusterRequest {
        const message = { ...baseStartClusterRequest } as StartClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseStartClusterMetadata: object = { clusterId: '' };

export const StartClusterMetadata = {
    encode(message: StartClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterMetadata {
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
                : '';
        return message;
    },

    toJSON(message: StartClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartClusterMetadata>, I>>(
        object: I,
    ): StartClusterMetadata {
        const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseStopClusterRequest: object = { clusterId: '' };

export const StopClusterRequest = {
    encode(message: StopClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
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
                : '';
        return message;
    },

    toJSON(message: StopClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopClusterRequest>, I>>(
        object: I,
    ): StopClusterRequest {
        const message = { ...baseStopClusterRequest } as StopClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseStopClusterMetadata: object = { clusterId: '' };

export const StopClusterMetadata = {
    encode(message: StopClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
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
                : '';
        return message;
    },

    toJSON(message: StopClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopClusterMetadata>, I>>(
        object: I,
    ): StopClusterMetadata {
        const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseMoveClusterRequest: object = { clusterId: '', destinationFolderId: '' };

export const MoveClusterRequest = {
    encode(message: MoveClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.destinationFolderId !== '') {
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
                : '';
        message.destinationFolderId =
            object.destinationFolderId !== undefined && object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : '';
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
        object: I,
    ): MoveClusterRequest {
        const message = { ...baseMoveClusterRequest } as MoveClusterRequest;
        message.clusterId = object.clusterId ?? '';
        message.destinationFolderId = object.destinationFolderId ?? '';
        return message;
    },
};

const baseMoveClusterMetadata: object = {
    clusterId: '',
    sourceFolderId: '',
    destinationFolderId: '',
};

export const MoveClusterMetadata = {
    encode(message: MoveClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.sourceFolderId !== '') {
            writer.uint32(18).string(message.sourceFolderId);
        }
        if (message.destinationFolderId !== '') {
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
                : '';
        message.sourceFolderId =
            object.sourceFolderId !== undefined && object.sourceFolderId !== null
                ? String(object.sourceFolderId)
                : '';
        message.destinationFolderId =
            object.destinationFolderId !== undefined && object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : '';
        return message;
    },

    toJSON(message: MoveClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.sourceFolderId !== undefined && (obj.sourceFolderId = message.sourceFolderId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MoveClusterMetadata>, I>>(
        object: I,
    ): MoveClusterMetadata {
        const message = { ...baseMoveClusterMetadata } as MoveClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        message.sourceFolderId = object.sourceFolderId ?? '';
        message.destinationFolderId = object.destinationFolderId ?? '';
        return message;
    },
};

const baseBackupClusterRequest: object = { clusterId: '' };

export const BackupClusterRequest = {
    encode(message: BackupClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackupClusterRequest {
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
                : '';
        return message;
    },

    toJSON(message: BackupClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackupClusterRequest>, I>>(
        object: I,
    ): BackupClusterRequest {
        const message = { ...baseBackupClusterRequest } as BackupClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseBackupClusterMetadata: object = { clusterId: '' };

export const BackupClusterMetadata = {
    encode(message: BackupClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackupClusterMetadata {
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
                : '';
        return message;
    },

    toJSON(message: BackupClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackupClusterMetadata>, I>>(
        object: I,
    ): BackupClusterMetadata {
        const message = { ...baseBackupClusterMetadata } as BackupClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseRestoreClusterRequest: object = {
    backupId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    folderId: '',
    securityGroupIds: '',
    deletionProtection: false,
    timeInclusive: false,
};

export const RestoreClusterRequest = {
    encode(message: RestoreClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            RestoreClusterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
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
        if (message.networkId !== '') {
            writer.uint32(66).string(message.networkId);
        }
        if (message.folderId !== '') {
            writer.uint32(74).string(message.folderId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v!);
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(106).fork()).ldelim();
        }
        if (message.timeInclusive === true) {
            writer.uint32(112).bool(message.timeInclusive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RestoreClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestoreClusterRequest } as RestoreClusterRequest;
        message.labels = {};
        message.hostSpecs = [];
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
                        reader.uint32(),
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
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.deletionProtection = reader.bool();
                    break;
                case 13:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.timeInclusive = reader.bool();
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
                : '';
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
        message.environment =
            object.environment !== undefined && object.environment !== null
                ? cluster_EnvironmentFromJSON(object.environment)
                : 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.hostSpecs = (object.hostSpecs ?? []).map((e: any) => HostSpec.fromJSON(e));
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.time =
            object.time !== undefined && object.time !== null
                ? fromJsonTimestamp(object.time)
                : undefined;
        message.timeInclusive =
            object.timeInclusive !== undefined && object.timeInclusive !== null
                ? Boolean(object.timeInclusive)
                : false;
        return message;
    },

    toJSON(message: RestoreClusterRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
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
            obj.hostSpecs = message.hostSpecs.map((e) => (e ? HostSpec.toJSON(e) : undefined));
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
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.timeInclusive !== undefined && (obj.timeInclusive = message.timeInclusive);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RestoreClusterRequest>, I>>(
        object: I,
    ): RestoreClusterRequest {
        const message = { ...baseRestoreClusterRequest } as RestoreClusterRequest;
        message.backupId = object.backupId ?? '';
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
        message.environment = object.environment ?? 0;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
        message.networkId = object.networkId ?? '';
        message.folderId = object.folderId ?? '';
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.time = object.time ?? undefined;
        message.timeInclusive = object.timeInclusive ?? false;
        return message;
    },
};

const baseRestoreClusterRequest_LabelsEntry: object = { key: '', value: '' };

export const RestoreClusterRequest_LabelsEntry = {
    encode(
        message: RestoreClusterRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): RestoreClusterRequest_LabelsEntry {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: RestoreClusterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RestoreClusterRequest_LabelsEntry>, I>>(
        object: I,
    ): RestoreClusterRequest_LabelsEntry {
        const message = {
            ...baseRestoreClusterRequest_LabelsEntry,
        } as RestoreClusterRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseRestoreClusterMetadata: object = { clusterId: '', backupId: '' };

export const RestoreClusterMetadata = {
    encode(message: RestoreClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.backupId !== '') {
            writer.uint32(18).string(message.backupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RestoreClusterMetadata {
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
                : '';
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : '';
        return message;
    },

    toJSON(message: RestoreClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RestoreClusterMetadata>, I>>(
        object: I,
    ): RestoreClusterMetadata {
        const message = { ...baseRestoreClusterMetadata } as RestoreClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        message.backupId = object.backupId ?? '';
        return message;
    },
};

const baseRescheduleMaintenanceRequest: object = { clusterId: '', rescheduleType: 0 };

export const RescheduleMaintenanceRequest = {
    encode(
        message: RescheduleMaintenanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.rescheduleType !== 0) {
            writer.uint32(16).int32(message.rescheduleType);
        }
        if (message.delayedUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RescheduleMaintenanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRescheduleMaintenanceRequest } as RescheduleMaintenanceRequest;
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
                    message.delayedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RescheduleMaintenanceRequest {
        const message = { ...baseRescheduleMaintenanceRequest } as RescheduleMaintenanceRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.rescheduleType =
            object.rescheduleType !== undefined && object.rescheduleType !== null
                ? rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object.rescheduleType)
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
                message.rescheduleType,
            ));
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RescheduleMaintenanceRequest>, I>>(
        object: I,
    ): RescheduleMaintenanceRequest {
        const message = { ...baseRescheduleMaintenanceRequest } as RescheduleMaintenanceRequest;
        message.clusterId = object.clusterId ?? '';
        message.rescheduleType = object.rescheduleType ?? 0;
        message.delayedUntil = object.delayedUntil ?? undefined;
        return message;
    },
};

const baseRescheduleMaintenanceMetadata: object = { clusterId: '' };

export const RescheduleMaintenanceMetadata = {
    encode(
        message: RescheduleMaintenanceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.delayedUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RescheduleMaintenanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRescheduleMaintenanceMetadata } as RescheduleMaintenanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 4:
                    message.delayedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RescheduleMaintenanceMetadata {
        const message = { ...baseRescheduleMaintenanceMetadata } as RescheduleMaintenanceMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
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
        object: I,
    ): RescheduleMaintenanceMetadata {
        const message = { ...baseRescheduleMaintenanceMetadata } as RescheduleMaintenanceMetadata;
        message.clusterId = object.clusterId ?? '';
        message.delayedUntil = object.delayedUntil ?? undefined;
        return message;
    },
};

const baseLogRecord: object = {};

export const LogRecord = {
    encode(message: LogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.message).forEach(([key, value]) => {
            LogRecord_MessageEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
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
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.message = Object.entries(object.message ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: LogRecord): unknown {
        const obj: any = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        obj.message = {};
        if (message.message) {
            Object.entries(message.message).forEach(([k, v]) => {
                obj.message[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LogRecord>, I>>(object: I): LogRecord {
        const message = { ...baseLogRecord } as LogRecord;
        message.timestamp = object.timestamp ?? undefined;
        message.message = Object.entries(object.message ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseLogRecord_MessageEntry: object = { key: '', value: '' };

export const LogRecord_MessageEntry = {
    encode(message: LogRecord_MessageEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LogRecord_MessageEntry {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: LogRecord_MessageEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LogRecord_MessageEntry>, I>>(
        object: I,
    ): LogRecord_MessageEntry {
        const message = { ...baseLogRecord_MessageEntry } as LogRecord_MessageEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseListClusterLogsRequest: object = {
    clusterId: '',
    columnFilter: '',
    serviceType: 0,
    pageSize: 0,
    pageToken: '',
    alwaysNextPageToken: false,
    filter: '',
    orderBy: '',
};

export const ListClusterLogsRequest = {
    encode(message: ListClusterLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v!);
        }
        if (message.serviceType !== 0) {
            writer.uint32(24).int32(message.serviceType);
        }
        if (message.fromTime !== undefined) {
            Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            Timestamp.encode(toTimestamp(message.toTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(48).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(58).string(message.pageToken);
        }
        if (message.alwaysNextPageToken === true) {
            writer.uint32(64).bool(message.alwaysNextPageToken);
        }
        if (message.filter !== '') {
            writer.uint32(74).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(82).string(message.orderBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterLogsRequest {
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
                    message.fromTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.toTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
                case 10:
                    message.orderBy = reader.string();
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
                : '';
        message.columnFilter = (object.columnFilter ?? []).map((e: any) => String(e));
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
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.alwaysNextPageToken =
            object.alwaysNextPageToken !== undefined && object.alwaysNextPageToken !== null
                ? Boolean(object.alwaysNextPageToken)
                : false;
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
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
            (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        message.fromTime !== undefined && (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.alwaysNextPageToken !== undefined &&
            (obj.alwaysNextPageToken = message.alwaysNextPageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterLogsRequest>, I>>(
        object: I,
    ): ListClusterLogsRequest {
        const message = { ...baseListClusterLogsRequest } as ListClusterLogsRequest;
        message.clusterId = object.clusterId ?? '';
        message.columnFilter = object.columnFilter?.map((e) => e) || [];
        message.serviceType = object.serviceType ?? 0;
        message.fromTime = object.fromTime ?? undefined;
        message.toTime = object.toTime ?? undefined;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.alwaysNextPageToken = object.alwaysNextPageToken ?? false;
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

const baseListClusterLogsResponse: object = { nextPageToken: '' };

export const ListClusterLogsResponse = {
    encode(message: ListClusterLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.logs) {
            LogRecord.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterLogsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterLogsResponse } as ListClusterLogsResponse;
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
        const message = { ...baseListClusterLogsResponse } as ListClusterLogsResponse;
        message.logs = (object.logs ?? []).map((e: any) => LogRecord.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterLogsResponse): unknown {
        const obj: any = {};
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? LogRecord.toJSON(e) : undefined));
        } else {
            obj.logs = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterLogsResponse>, I>>(
        object: I,
    ): ListClusterLogsResponse {
        const message = { ...baseListClusterLogsResponse } as ListClusterLogsResponse;
        message.logs = object.logs?.map((e) => LogRecord.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseStreamLogRecord: object = { nextRecordToken: '' };

export const StreamLogRecord = {
    encode(message: StreamLogRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.record !== undefined) {
            LogRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextRecordToken !== '') {
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
                : '';
        return message;
    },

    toJSON(message: StreamLogRecord): unknown {
        const obj: any = {};
        message.record !== undefined &&
            (obj.record = message.record ? LogRecord.toJSON(message.record) : undefined);
        message.nextRecordToken !== undefined && (obj.nextRecordToken = message.nextRecordToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamLogRecord>, I>>(object: I): StreamLogRecord {
        const message = { ...baseStreamLogRecord } as StreamLogRecord;
        message.record =
            object.record !== undefined && object.record !== null
                ? LogRecord.fromPartial(object.record)
                : undefined;
        message.nextRecordToken = object.nextRecordToken ?? '';
        return message;
    },
};

const baseStreamClusterLogsRequest: object = {
    clusterId: '',
    columnFilter: '',
    serviceType: 0,
    recordToken: '',
    filter: '',
};

export const StreamClusterLogsRequest = {
    encode(
        message: StreamClusterLogsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v!);
        }
        if (message.serviceType !== 0) {
            writer.uint32(24).int32(message.serviceType);
        }
        if (message.fromTime !== undefined) {
            Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            Timestamp.encode(toTimestamp(message.toTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.recordToken !== '') {
            writer.uint32(50).string(message.recordToken);
        }
        if (message.filter !== '') {
            writer.uint32(58).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamClusterLogsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamClusterLogsRequest } as StreamClusterLogsRequest;
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
                    message.fromTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.toTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        const message = { ...baseStreamClusterLogsRequest } as StreamClusterLogsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.columnFilter = (object.columnFilter ?? []).map((e: any) => String(e));
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
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
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
            (obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(message.serviceType));
        message.fromTime !== undefined && (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.recordToken !== undefined && (obj.recordToken = message.recordToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamClusterLogsRequest>, I>>(
        object: I,
    ): StreamClusterLogsRequest {
        const message = { ...baseStreamClusterLogsRequest } as StreamClusterLogsRequest;
        message.clusterId = object.clusterId ?? '';
        message.columnFilter = object.columnFilter?.map((e) => e) || [];
        message.serviceType = object.serviceType ?? 0;
        message.fromTime = object.fromTime ?? undefined;
        message.toTime = object.toTime ?? undefined;
        message.recordToken = object.recordToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListClusterOperationsRequest: object = { clusterId: '', pageSize: 0, pageToken: '' };

export const ListClusterOperationsRequest = {
    encode(
        message: ListClusterOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterOperationsRequest } as ListClusterOperationsRequest;
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
        const message = { ...baseListClusterOperationsRequest } as ListClusterOperationsRequest;
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

    toJSON(message: ListClusterOperationsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterOperationsRequest>, I>>(
        object: I,
    ): ListClusterOperationsRequest {
        const message = { ...baseListClusterOperationsRequest } as ListClusterOperationsRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListClusterOperationsResponse: object = { nextPageToken: '' };

export const ListClusterOperationsResponse = {
    encode(
        message: ListClusterOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterOperationsResponse } as ListClusterOperationsResponse;
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
        const message = { ...baseListClusterOperationsResponse } as ListClusterOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterOperationsResponse>, I>>(
        object: I,
    ): ListClusterOperationsResponse {
        const message = { ...baseListClusterOperationsResponse } as ListClusterOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseBackupListFilter: object = { retentionPolicyId: '' };

export const BackupListFilter = {
    encode(message: BackupListFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            Timestamp.encode(toTimestamp(message.endTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.retentionPolicyId !== '') {
            writer.uint32(26).string(message.retentionPolicyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackupListFilter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupListFilter } as BackupListFilter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.retentionPolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BackupListFilter {
        const message = { ...baseBackupListFilter } as BackupListFilter;
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? fromJsonTimestamp(object.startTime)
                : undefined;
        message.endTime =
            object.endTime !== undefined && object.endTime !== null
                ? fromJsonTimestamp(object.endTime)
                : undefined;
        message.retentionPolicyId =
            object.retentionPolicyId !== undefined && object.retentionPolicyId !== null
                ? String(object.retentionPolicyId)
                : '';
        return message;
    },

    toJSON(message: BackupListFilter): unknown {
        const obj: any = {};
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
        message.retentionPolicyId !== undefined &&
            (obj.retentionPolicyId = message.retentionPolicyId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackupListFilter>, I>>(object: I): BackupListFilter {
        const message = { ...baseBackupListFilter } as BackupListFilter;
        message.startTime = object.startTime ?? undefined;
        message.endTime = object.endTime ?? undefined;
        message.retentionPolicyId = object.retentionPolicyId ?? '';
        return message;
    },
};

const baseListClusterBackupsRequest: object = { clusterId: '', pageSize: 0, pageToken: '' };

export const ListClusterBackupsRequest = {
    encode(
        message: ListClusterBackupsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterBackupsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterBackupsRequest } as ListClusterBackupsRequest;
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
        const message = { ...baseListClusterBackupsRequest } as ListClusterBackupsRequest;
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

    toJSON(message: ListClusterBackupsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterBackupsRequest>, I>>(
        object: I,
    ): ListClusterBackupsRequest {
        const message = { ...baseListClusterBackupsRequest } as ListClusterBackupsRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListClusterBackupsResponse: object = { nextPageToken: '' };

export const ListClusterBackupsResponse = {
    encode(
        message: ListClusterBackupsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.backups) {
            Backup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterBackupsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterBackupsResponse } as ListClusterBackupsResponse;
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
        const message = { ...baseListClusterBackupsResponse } as ListClusterBackupsResponse;
        message.backups = (object.backups ?? []).map((e: any) => Backup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterBackupsResponse): unknown {
        const obj: any = {};
        if (message.backups) {
            obj.backups = message.backups.map((e) => (e ? Backup.toJSON(e) : undefined));
        } else {
            obj.backups = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterBackupsResponse>, I>>(
        object: I,
    ): ListClusterBackupsResponse {
        const message = { ...baseListClusterBackupsResponse } as ListClusterBackupsResponse;
        message.backups = object.backups?.map((e) => Backup.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseSpqrSpec: object = { consolePassword: '', logLevel: 0 };

export const SpqrSpec = {
    encode(message: SpqrSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.router !== undefined) {
            SpqrSpec_Router.encode(message.router, writer.uint32(10).fork()).ldelim();
        }
        if (message.coordinator !== undefined) {
            SpqrSpec_Coordinator.encode(message.coordinator, writer.uint32(18).fork()).ldelim();
        }
        if (message.postgresql !== undefined) {
            SpqrSpec_PostgreSQL.encode(message.postgresql, writer.uint32(26).fork()).ldelim();
        }
        if (message.infra !== undefined) {
            SpqrSpec_Infra.encode(message.infra, writer.uint32(42).fork()).ldelim();
        }
        if (message.consolePassword !== '') {
            writer.uint32(50).string(message.consolePassword);
        }
        if (message.logLevel !== 0) {
            writer.uint32(56).int32(message.logLevel);
        }
        if (message.balancer !== undefined) {
            BalancerSettings.encode(message.balancer, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SpqrSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSpqrSpec } as SpqrSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.router = SpqrSpec_Router.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.coordinator = SpqrSpec_Coordinator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.postgresql = SpqrSpec_PostgreSQL.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.infra = SpqrSpec_Infra.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.consolePassword = reader.string();
                    break;
                case 7:
                    message.logLevel = reader.int32() as any;
                    break;
                case 8:
                    message.balancer = BalancerSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SpqrSpec {
        const message = { ...baseSpqrSpec } as SpqrSpec;
        message.router =
            object.router !== undefined && object.router !== null
                ? SpqrSpec_Router.fromJSON(object.router)
                : undefined;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? SpqrSpec_Coordinator.fromJSON(object.coordinator)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? SpqrSpec_PostgreSQL.fromJSON(object.postgresql)
                : undefined;
        message.infra =
            object.infra !== undefined && object.infra !== null
                ? SpqrSpec_Infra.fromJSON(object.infra)
                : undefined;
        message.consolePassword =
            object.consolePassword !== undefined && object.consolePassword !== null
                ? String(object.consolePassword)
                : '';
        message.logLevel =
            object.logLevel !== undefined && object.logLevel !== null
                ? logLevelFromJSON(object.logLevel)
                : 0;
        message.balancer =
            object.balancer !== undefined && object.balancer !== null
                ? BalancerSettings.fromJSON(object.balancer)
                : undefined;
        return message;
    },

    toJSON(message: SpqrSpec): unknown {
        const obj: any = {};
        message.router !== undefined &&
            (obj.router = message.router ? SpqrSpec_Router.toJSON(message.router) : undefined);
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator
                ? SpqrSpec_Coordinator.toJSON(message.coordinator)
                : undefined);
        message.postgresql !== undefined &&
            (obj.postgresql = message.postgresql
                ? SpqrSpec_PostgreSQL.toJSON(message.postgresql)
                : undefined);
        message.infra !== undefined &&
            (obj.infra = message.infra ? SpqrSpec_Infra.toJSON(message.infra) : undefined);
        message.consolePassword !== undefined && (obj.consolePassword = message.consolePassword);
        message.logLevel !== undefined && (obj.logLevel = logLevelToJSON(message.logLevel));
        message.balancer !== undefined &&
            (obj.balancer = message.balancer
                ? BalancerSettings.toJSON(message.balancer)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SpqrSpec>, I>>(object: I): SpqrSpec {
        const message = { ...baseSpqrSpec } as SpqrSpec;
        message.router =
            object.router !== undefined && object.router !== null
                ? SpqrSpec_Router.fromPartial(object.router)
                : undefined;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? SpqrSpec_Coordinator.fromPartial(object.coordinator)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? SpqrSpec_PostgreSQL.fromPartial(object.postgresql)
                : undefined;
        message.infra =
            object.infra !== undefined && object.infra !== null
                ? SpqrSpec_Infra.fromPartial(object.infra)
                : undefined;
        message.consolePassword = object.consolePassword ?? '';
        message.logLevel = object.logLevel ?? 0;
        message.balancer =
            object.balancer !== undefined && object.balancer !== null
                ? BalancerSettings.fromPartial(object.balancer)
                : undefined;
        return message;
    },
};

const baseSpqrSpec_Router: object = {};

export const SpqrSpec_Router = {
    encode(message: SpqrSpec_Router, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            RouterSettings.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SpqrSpec_Router {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSpqrSpec_Router } as SpqrSpec_Router;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = RouterSettings.decode(reader, reader.uint32());
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

    fromJSON(object: any): SpqrSpec_Router {
        const message = { ...baseSpqrSpec_Router } as SpqrSpec_Router;
        message.config =
            object.config !== undefined && object.config !== null
                ? RouterSettings.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: SpqrSpec_Router): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? RouterSettings.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SpqrSpec_Router>, I>>(object: I): SpqrSpec_Router {
        const message = { ...baseSpqrSpec_Router } as SpqrSpec_Router;
        message.config =
            object.config !== undefined && object.config !== null
                ? RouterSettings.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseSpqrSpec_Coordinator: object = {};

export const SpqrSpec_Coordinator = {
    encode(message: SpqrSpec_Coordinator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            CoordinatorSettings.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SpqrSpec_Coordinator {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSpqrSpec_Coordinator } as SpqrSpec_Coordinator;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = CoordinatorSettings.decode(reader, reader.uint32());
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

    fromJSON(object: any): SpqrSpec_Coordinator {
        const message = { ...baseSpqrSpec_Coordinator } as SpqrSpec_Coordinator;
        message.config =
            object.config !== undefined && object.config !== null
                ? CoordinatorSettings.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: SpqrSpec_Coordinator): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? CoordinatorSettings.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SpqrSpec_Coordinator>, I>>(
        object: I,
    ): SpqrSpec_Coordinator {
        const message = { ...baseSpqrSpec_Coordinator } as SpqrSpec_Coordinator;
        message.config =
            object.config !== undefined && object.config !== null
                ? CoordinatorSettings.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseSpqrSpec_PostgreSQL: object = {};

export const SpqrSpec_PostgreSQL = {
    encode(message: SpqrSpec_PostgreSQL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            PostgreSQLSettings.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SpqrSpec_PostgreSQL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSpqrSpec_PostgreSQL } as SpqrSpec_PostgreSQL;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = PostgreSQLSettings.decode(reader, reader.uint32());
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

    fromJSON(object: any): SpqrSpec_PostgreSQL {
        const message = { ...baseSpqrSpec_PostgreSQL } as SpqrSpec_PostgreSQL;
        message.config =
            object.config !== undefined && object.config !== null
                ? PostgreSQLSettings.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: SpqrSpec_PostgreSQL): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? PostgreSQLSettings.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SpqrSpec_PostgreSQL>, I>>(
        object: I,
    ): SpqrSpec_PostgreSQL {
        const message = { ...baseSpqrSpec_PostgreSQL } as SpqrSpec_PostgreSQL;
        message.config =
            object.config !== undefined && object.config !== null
                ? PostgreSQLSettings.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseSpqrSpec_Infra: object = {};

export const SpqrSpec_Infra = {
    encode(message: SpqrSpec_Infra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.router !== undefined) {
            RouterSettings.encode(message.router, writer.uint32(26).fork()).ldelim();
        }
        if (message.coordinator !== undefined) {
            CoordinatorSettings.encode(message.coordinator, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SpqrSpec_Infra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSpqrSpec_Infra } as SpqrSpec_Infra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.router = RouterSettings.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coordinator = CoordinatorSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SpqrSpec_Infra {
        const message = { ...baseSpqrSpec_Infra } as SpqrSpec_Infra;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.router =
            object.router !== undefined && object.router !== null
                ? RouterSettings.fromJSON(object.router)
                : undefined;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? CoordinatorSettings.fromJSON(object.coordinator)
                : undefined;
        return message;
    },

    toJSON(message: SpqrSpec_Infra): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.router !== undefined &&
            (obj.router = message.router ? RouterSettings.toJSON(message.router) : undefined);
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator
                ? CoordinatorSettings.toJSON(message.coordinator)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SpqrSpec_Infra>, I>>(object: I): SpqrSpec_Infra {
        const message = { ...baseSpqrSpec_Infra } as SpqrSpec_Infra;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.router =
            object.router !== undefined && object.router !== null
                ? RouterSettings.fromPartial(object.router)
                : undefined;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? CoordinatorSettings.fromPartial(object.coordinator)
                : undefined;
        return message;
    },
};

const baseConfigSpec: object = {};

export const ConfigSpec = {
    encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.spqrSpec !== undefined) {
            SpqrSpec.encode(message.spqrSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            TimeOfDay.encode(message.backupWindowStart, writer.uint32(18).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            Int64Value.encode(
                { value: message.backupRetainPeriodDays! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.access !== undefined) {
            Access.encode(message.access, writer.uint32(34).fork()).ldelim();
        }
        if (message.soxAudit !== undefined) {
            BoolValue.encode({ value: message.soxAudit! }, writer.uint32(42).fork()).ldelim();
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
                    message.spqrSpec = SpqrSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.backupRetainPeriodDays = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 4:
                    message.access = Access.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.soxAudit = BoolValue.decode(reader, reader.uint32()).value;
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
        message.spqrSpec =
            object.spqrSpec !== undefined && object.spqrSpec !== null
                ? SpqrSpec.fromJSON(object.spqrSpec)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined && object.backupWindowStart !== null
                ? TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays =
            object.backupRetainPeriodDays !== undefined && object.backupRetainPeriodDays !== null
                ? Number(object.backupRetainPeriodDays)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? Access.fromJSON(object.access)
                : undefined;
        message.soxAudit =
            object.soxAudit !== undefined && object.soxAudit !== null
                ? Boolean(object.soxAudit)
                : undefined;
        return message;
    },

    toJSON(message: ConfigSpec): unknown {
        const obj: any = {};
        message.spqrSpec !== undefined &&
            (obj.spqrSpec = message.spqrSpec ? SpqrSpec.toJSON(message.spqrSpec) : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
        message.access !== undefined &&
            (obj.access = message.access ? Access.toJSON(message.access) : undefined);
        message.soxAudit !== undefined && (obj.soxAudit = message.soxAudit);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConfigSpec>, I>>(object: I): ConfigSpec {
        const message = { ...baseConfigSpec } as ConfigSpec;
        message.spqrSpec =
            object.spqrSpec !== undefined && object.spqrSpec !== null
                ? SpqrSpec.fromPartial(object.spqrSpec)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined && object.backupWindowStart !== null
                ? TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? Access.fromPartial(object.access)
                : undefined;
        message.soxAudit = object.soxAudit ?? undefined;
        return message;
    },
};

const baseListClusterHostsRequest: object = { clusterId: '', pageSize: 0, pageToken: '' };

export const ListClusterHostsRequest = {
    encode(message: ListClusterHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterHostsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterHostsRequest } as ListClusterHostsRequest;
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
        const message = { ...baseListClusterHostsRequest } as ListClusterHostsRequest;
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

    toJSON(message: ListClusterHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterHostsRequest>, I>>(
        object: I,
    ): ListClusterHostsRequest {
        const message = { ...baseListClusterHostsRequest } as ListClusterHostsRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListClusterHostsAtRevisionRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
    revision: 0,
};

export const ListClusterHostsAtRevisionRequest = {
    encode(
        message: ListClusterHostsAtRevisionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.revision !== 0) {
            writer.uint32(32).int64(message.revision);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterHostsAtRevisionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterHostsAtRevisionRequest,
        } as ListClusterHostsAtRevisionRequest;
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
                case 4:
                    message.revision = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListClusterHostsAtRevisionRequest {
        const message = {
            ...baseListClusterHostsAtRevisionRequest,
        } as ListClusterHostsAtRevisionRequest;
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
        message.revision =
            object.revision !== undefined && object.revision !== null ? Number(object.revision) : 0;
        return message;
    },

    toJSON(message: ListClusterHostsAtRevisionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterHostsAtRevisionRequest>, I>>(
        object: I,
    ): ListClusterHostsAtRevisionRequest {
        const message = {
            ...baseListClusterHostsAtRevisionRequest,
        } as ListClusterHostsAtRevisionRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.revision = object.revision ?? 0;
        return message;
    },
};

const baseListClusterHostsResponse: object = { nextPageToken: '' };

export const ListClusterHostsResponse = {
    encode(
        message: ListClusterHostsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.hosts) {
            Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterHostsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterHostsResponse } as ListClusterHostsResponse;
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
        const message = { ...baseListClusterHostsResponse } as ListClusterHostsResponse;
        message.hosts = (object.hosts ?? []).map((e: any) => Host.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterHostsResponse): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? Host.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterHostsResponse>, I>>(
        object: I,
    ): ListClusterHostsResponse {
        const message = { ...baseListClusterHostsResponse } as ListClusterHostsResponse;
        message.hosts = object.hosts?.map((e) => Host.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseAddClusterHostsRequest: object = { clusterId: '' };

export const AddClusterHostsRequest = {
    encode(message: AddClusterHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostSpecs) {
            HostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterHostsRequest {
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
                : '';
        message.hostSpecs = (object.hostSpecs ?? []).map((e: any) => HostSpec.fromJSON(e));
        return message;
    },

    toJSON(message: AddClusterHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => (e ? HostSpec.toJSON(e) : undefined));
        } else {
            obj.hostSpecs = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddClusterHostsRequest>, I>>(
        object: I,
    ): AddClusterHostsRequest {
        const message = { ...baseAddClusterHostsRequest } as AddClusterHostsRequest;
        message.clusterId = object.clusterId ?? '';
        message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
        return message;
    },
};

const baseAddClusterHostsMetadata: object = { clusterId: '', hostNames: '' };

export const AddClusterHostsMetadata = {
    encode(message: AddClusterHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterHostsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddClusterHostsMetadata } as AddClusterHostsMetadata;
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
        const message = { ...baseAddClusterHostsMetadata } as AddClusterHostsMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
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
        object: I,
    ): AddClusterHostsMetadata {
        const message = { ...baseAddClusterHostsMetadata } as AddClusterHostsMetadata;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseUpdateClusterHostsRequest: object = { clusterId: '' };

export const UpdateClusterHostsRequest = {
    encode(
        message: UpdateClusterHostsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.updateHostSpecs) {
            UpdateHostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterHostsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterHostsRequest } as UpdateClusterHostsRequest;
        message.updateHostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.updateHostSpecs.push(UpdateHostSpec.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateClusterHostsRequest {
        const message = { ...baseUpdateClusterHostsRequest } as UpdateClusterHostsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.updateHostSpecs = (object.updateHostSpecs ?? []).map((e: any) =>
            UpdateHostSpec.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpdateClusterHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.updateHostSpecs) {
            obj.updateHostSpecs = message.updateHostSpecs.map((e) =>
                e ? UpdateHostSpec.toJSON(e) : undefined,
            );
        } else {
            obj.updateHostSpecs = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterHostsRequest>, I>>(
        object: I,
    ): UpdateClusterHostsRequest {
        const message = { ...baseUpdateClusterHostsRequest } as UpdateClusterHostsRequest;
        message.clusterId = object.clusterId ?? '';
        message.updateHostSpecs =
            object.updateHostSpecs?.map((e) => UpdateHostSpec.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateClusterHostsMetadata: object = { clusterId: '', hostNames: '' };

export const UpdateClusterHostsMetadata = {
    encode(
        message: UpdateClusterHostsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterHostsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterHostsMetadata } as UpdateClusterHostsMetadata;
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
        const message = { ...baseUpdateClusterHostsMetadata } as UpdateClusterHostsMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
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
        object: I,
    ): UpdateClusterHostsMetadata {
        const message = { ...baseUpdateClusterHostsMetadata } as UpdateClusterHostsMetadata;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseUpdateHostSpec: object = { hostName: '', assignPublicIp: false };

export const UpdateHostSpec = {
    encode(message: UpdateHostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostName !== '') {
            writer.uint32(10).string(message.hostName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.assignPublicIp === true) {
            writer.uint32(24).bool(message.assignPublicIp);
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
                : '';
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
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.assignPublicIp !== undefined && (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHostSpec>, I>>(object: I): UpdateHostSpec {
        const message = { ...baseUpdateHostSpec } as UpdateHostSpec;
        message.hostName = object.hostName ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.assignPublicIp = object.assignPublicIp ?? false;
        return message;
    },
};

const baseDeleteClusterHostsRequest: object = { clusterId: '', hostNames: '' };

export const DeleteClusterHostsRequest = {
    encode(
        message: DeleteClusterHostsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterHostsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterHostsRequest } as DeleteClusterHostsRequest;
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
        const message = { ...baseDeleteClusterHostsRequest } as DeleteClusterHostsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
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
        object: I,
    ): DeleteClusterHostsRequest {
        const message = { ...baseDeleteClusterHostsRequest } as DeleteClusterHostsRequest;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseDeleteClusterHostsMetadata: object = { clusterId: '', hostNames: '' };

export const DeleteClusterHostsMetadata = {
    encode(
        message: DeleteClusterHostsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterHostsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterHostsMetadata } as DeleteClusterHostsMetadata;
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
        const message = { ...baseDeleteClusterHostsMetadata } as DeleteClusterHostsMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
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
        object: I,
    ): DeleteClusterHostsMetadata {
        const message = { ...baseDeleteClusterHostsMetadata } as DeleteClusterHostsMetadata;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseResetupHostsRequest: object = { clusterId: '', hostNames: '' };

export const ResetupHostsRequest = {
    encode(message: ResetupHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResetupHostsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResetupHostsRequest } as ResetupHostsRequest;
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

    fromJSON(object: any): ResetupHostsRequest {
        const message = { ...baseResetupHostsRequest } as ResetupHostsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ResetupHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResetupHostsRequest>, I>>(
        object: I,
    ): ResetupHostsRequest {
        const message = { ...baseResetupHostsRequest } as ResetupHostsRequest;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseResetupHostsMetadata: object = { clusterId: '', hostNames: '' };

export const ResetupHostsMetadata = {
    encode(message: ResetupHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResetupHostsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResetupHostsMetadata } as ResetupHostsMetadata;
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

    fromJSON(object: any): ResetupHostsMetadata {
        const message = { ...baseResetupHostsMetadata } as ResetupHostsMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ResetupHostsMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResetupHostsMetadata>, I>>(
        object: I,
    ): ResetupHostsMetadata {
        const message = { ...baseResetupHostsMetadata } as ResetupHostsMetadata;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseGetClusterShardRequest: object = { clusterId: '', shardName: '' };

export const GetClusterShardRequest = {
    encode(message: GetClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== '') {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterShardRequest {
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
                : '';
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        return message;
    },

    toJSON(message: GetClusterShardRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetClusterShardRequest>, I>>(
        object: I,
    ): GetClusterShardRequest {
        const message = { ...baseGetClusterShardRequest } as GetClusterShardRequest;
        message.clusterId = object.clusterId ?? '';
        message.shardName = object.shardName ?? '';
        return message;
    },
};

const baseListClusterShardsRequest: object = { clusterId: '', pageSize: 0, pageToken: '' };

export const ListClusterShardsRequest = {
    encode(
        message: ListClusterShardsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterShardsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterShardsRequest } as ListClusterShardsRequest;
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
        const message = { ...baseListClusterShardsRequest } as ListClusterShardsRequest;
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

    toJSON(message: ListClusterShardsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterShardsRequest>, I>>(
        object: I,
    ): ListClusterShardsRequest {
        const message = { ...baseListClusterShardsRequest } as ListClusterShardsRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListClusterShardsAtRevisionRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
    revision: 0,
};

export const ListClusterShardsAtRevisionRequest = {
    encode(
        message: ListClusterShardsAtRevisionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.revision !== 0) {
            writer.uint32(32).int64(message.revision);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterShardsAtRevisionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterShardsAtRevisionRequest,
        } as ListClusterShardsAtRevisionRequest;
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
                case 4:
                    message.revision = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListClusterShardsAtRevisionRequest {
        const message = {
            ...baseListClusterShardsAtRevisionRequest,
        } as ListClusterShardsAtRevisionRequest;
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
        message.revision =
            object.revision !== undefined && object.revision !== null ? Number(object.revision) : 0;
        return message;
    },

    toJSON(message: ListClusterShardsAtRevisionRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterShardsAtRevisionRequest>, I>>(
        object: I,
    ): ListClusterShardsAtRevisionRequest {
        const message = {
            ...baseListClusterShardsAtRevisionRequest,
        } as ListClusterShardsAtRevisionRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.revision = object.revision ?? 0;
        return message;
    },
};

const baseListClusterShardsResponse: object = { nextPageToken: '' };

export const ListClusterShardsResponse = {
    encode(
        message: ListClusterShardsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.shards) {
            Shard.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterShardsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterShardsResponse } as ListClusterShardsResponse;
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
        const message = { ...baseListClusterShardsResponse } as ListClusterShardsResponse;
        message.shards = (object.shards ?? []).map((e: any) => Shard.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterShardsResponse): unknown {
        const obj: any = {};
        if (message.shards) {
            obj.shards = message.shards.map((e) => (e ? Shard.toJSON(e) : undefined));
        } else {
            obj.shards = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterShardsResponse>, I>>(
        object: I,
    ): ListClusterShardsResponse {
        const message = { ...baseListClusterShardsResponse } as ListClusterShardsResponse;
        message.shards = object.shards?.map((e) => Shard.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseAddClusterShardRequest: object = { clusterId: '' };

export const AddClusterShardRequest = {
    encode(message: AddClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardSpec !== undefined) {
            ShardSpec.encode(message.shardSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterShardRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddClusterShardRequest } as AddClusterShardRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 4:
                    message.shardSpec = ShardSpec.decode(reader, reader.uint32());
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
                : '';
        message.shardSpec =
            object.shardSpec !== undefined && object.shardSpec !== null
                ? ShardSpec.fromJSON(object.shardSpec)
                : undefined;
        return message;
    },

    toJSON(message: AddClusterShardRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardSpec !== undefined &&
            (obj.shardSpec = message.shardSpec ? ShardSpec.toJSON(message.shardSpec) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddClusterShardRequest>, I>>(
        object: I,
    ): AddClusterShardRequest {
        const message = { ...baseAddClusterShardRequest } as AddClusterShardRequest;
        message.clusterId = object.clusterId ?? '';
        message.shardSpec =
            object.shardSpec !== undefined && object.shardSpec !== null
                ? ShardSpec.fromPartial(object.shardSpec)
                : undefined;
        return message;
    },
};

const baseAddClusterShardMetadata: object = { clusterId: '', shardName: '' };

export const AddClusterShardMetadata = {
    encode(message: AddClusterShardMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== '') {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterShardMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddClusterShardMetadata } as AddClusterShardMetadata;
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
        const message = { ...baseAddClusterShardMetadata } as AddClusterShardMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        return message;
    },

    toJSON(message: AddClusterShardMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddClusterShardMetadata>, I>>(
        object: I,
    ): AddClusterShardMetadata {
        const message = { ...baseAddClusterShardMetadata } as AddClusterShardMetadata;
        message.clusterId = object.clusterId ?? '';
        message.shardName = object.shardName ?? '';
        return message;
    },
};

const baseDeleteClusterShardRequest: object = { clusterId: '', shardName: '' };

export const DeleteClusterShardRequest = {
    encode(
        message: DeleteClusterShardRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== '') {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterShardRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterShardRequest } as DeleteClusterShardRequest;
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
        const message = { ...baseDeleteClusterShardRequest } as DeleteClusterShardRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        return message;
    },

    toJSON(message: DeleteClusterShardRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteClusterShardRequest>, I>>(
        object: I,
    ): DeleteClusterShardRequest {
        const message = { ...baseDeleteClusterShardRequest } as DeleteClusterShardRequest;
        message.clusterId = object.clusterId ?? '';
        message.shardName = object.shardName ?? '';
        return message;
    },
};

const baseDeleteClusterShardMetadata: object = { clusterId: '', shardName: '' };

export const DeleteClusterShardMetadata = {
    encode(
        message: DeleteClusterShardMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== '') {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterShardMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterShardMetadata } as DeleteClusterShardMetadata;
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
        const message = { ...baseDeleteClusterShardMetadata } as DeleteClusterShardMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        return message;
    },

    toJSON(message: DeleteClusterShardMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteClusterShardMetadata>, I>>(
        object: I,
    ): DeleteClusterShardMetadata {
        const message = { ...baseDeleteClusterShardMetadata } as DeleteClusterShardMetadata;
        message.clusterId = object.clusterId ?? '';
        message.shardName = object.shardName ?? '';
        return message;
    },
};

const baseAddSubclusterRequest: object = { clusterId: '' };

export const AddSubclusterRequest = {
    encode(message: AddSubclusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostSpecs) {
            HostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddSubclusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddSubclusterRequest } as AddSubclusterRequest;
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
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddSubclusterRequest {
        const message = { ...baseAddSubclusterRequest } as AddSubclusterRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hostSpecs = (object.hostSpecs ?? []).map((e: any) => HostSpec.fromJSON(e));
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: AddSubclusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => (e ? HostSpec.toJSON(e) : undefined));
        } else {
            obj.hostSpecs = [];
        }
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddSubclusterRequest>, I>>(
        object: I,
    ): AddSubclusterRequest {
        const message = { ...baseAddSubclusterRequest } as AddSubclusterRequest;
        message.clusterId = object.clusterId ?? '';
        message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

/** A set of methods for managing SPQR Cluster resources. */
export const ClusterServiceService = {
    /**
     * Returns the specified SPQR Cluster resource.
     *
     * To get the list of available SPQR Cluster resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterRequest) =>
            Buffer.from(GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
        responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    getAtRevision: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/GetAtRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterAtRevisionRequest) =>
            Buffer.from(GetClusterAtRevisionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterAtRevisionRequest.decode(value),
        responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    /**
     * Retrieves the list of SPQR Cluster resources that belong
     * to the specified folder.
     */
    list: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClustersRequest) =>
            Buffer.from(ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
        responseSerialize: (value: ListClustersResponse) =>
            Buffer.from(ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
    },
    /** Creates a SPQR cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateClusterRequest) =>
            Buffer.from(CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified SPQR cluster. */
    update: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterRequest) =>
            Buffer.from(UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified SPQR cluster. */
    delete: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterRequest) =>
            Buffer.from(DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    addSubcluster: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/AddSubcluster',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddSubclusterRequest) =>
            Buffer.from(AddSubclusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddSubclusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Start the specified SPQR cluster. */
    start: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartClusterRequest) =>
            Buffer.from(StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stop the specified SPQR cluster. */
    stop: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopClusterRequest) =>
            Buffer.from(StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Moves the specified SPQR cluster to the specified folder. */
    move: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveClusterRequest) =>
            Buffer.from(MoveClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates a backup for the specified SPQR cluster. */
    backup: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Backup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BackupClusterRequest) =>
            Buffer.from(BackupClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates a new SPQR cluster using the specified backup. */
    restore: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/Restore',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RestoreClusterRequest) =>
            Buffer.from(RestoreClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RestoreClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/RescheduleMaintenance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RescheduleMaintenanceRequest) =>
            Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Retrieves logs for the specified SPQR cluster.
     * See the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developers guide for detailed logs description.
     */
    listLogs: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/ListLogs',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterLogsRequest) =>
            Buffer.from(ListClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterLogsRequest.decode(value),
        responseSerialize: (value: ListClusterLogsResponse) =>
            Buffer.from(ListClusterLogsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterLogsResponse.decode(value),
    },
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/StreamLogs',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value: StreamClusterLogsRequest) =>
            Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StreamClusterLogsRequest.decode(value),
        responseSerialize: (value: StreamLogRecord) =>
            Buffer.from(StreamLogRecord.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterOperationsRequest) =>
            Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
        responseSerialize: (value: ListClusterOperationsResponse) =>
            Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves the list of available backups for the specified SPQR cluster. */
    listBackups: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/ListBackups',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterBackupsRequest) =>
            Buffer.from(ListClusterBackupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterBackupsRequest.decode(value),
        responseSerialize: (value: ListClusterBackupsResponse) =>
            Buffer.from(ListClusterBackupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterBackupsResponse.decode(value),
    },
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/ListHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterHostsRequest) =>
            Buffer.from(ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterHostsRequest.decode(value),
        responseSerialize: (value: ListClusterHostsResponse) =>
            Buffer.from(ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterHostsResponse.decode(value),
    },
    /** Retrieves a list of hosts for the specified cluster. */
    listHostsAtRevision: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/ListHostsAtRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterHostsAtRevisionRequest) =>
            Buffer.from(ListClusterHostsAtRevisionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterHostsAtRevisionRequest.decode(value),
        responseSerialize: (value: ListClusterHostsResponse) =>
            Buffer.from(ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterHostsResponse.decode(value),
    },
    /** Creates new hosts for a cluster. */
    addHosts: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/AddHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddClusterHostsRequest) =>
            Buffer.from(AddClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddClusterHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified hosts. */
    updateHosts: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/UpdateHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterHostsRequest) =>
            Buffer.from(UpdateClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateClusterHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/DeleteHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterHostsRequest) =>
            Buffer.from(DeleteClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Resetups hosts. */
    resetupHosts: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/ResetupHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResetupHostsRequest) =>
            Buffer.from(ResetupHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResetupHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified shard. */
    getShard: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/GetShard',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterShardRequest) =>
            Buffer.from(GetClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterShardRequest.decode(value),
        responseSerialize: (value: Shard) => Buffer.from(Shard.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Shard.decode(value),
    },
    /** Retrieves a list of shards. */
    listShards: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/ListShards',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterShardsRequest) =>
            Buffer.from(ListClusterShardsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterShardsRequest.decode(value),
        responseSerialize: (value: ListClusterShardsResponse) =>
            Buffer.from(ListClusterShardsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterShardsResponse.decode(value),
    },
    /** Retrieves a list of shards. */
    listShardsAtRevision: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/ListShardsAtRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterShardsAtRevisionRequest) =>
            Buffer.from(ListClusterShardsAtRevisionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterShardsAtRevisionRequest.decode(value),
        responseSerialize: (value: ListClusterShardsResponse) =>
            Buffer.from(ListClusterShardsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterShardsResponse.decode(value),
    },
    /** Creates a new shard. */
    addShard: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/AddShard',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddClusterShardRequest) =>
            Buffer.from(AddClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddClusterShardRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified shard. */
    deleteShard: {
        path: '/yandex.cloud.mdb.spqr.v1.ClusterService/DeleteShard',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterShardRequest) =>
            Buffer.from(DeleteClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterShardRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified SPQR Cluster resource.
     *
     * To get the list of available SPQR Cluster resources, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    getAtRevision: handleUnaryCall<GetClusterAtRevisionRequest, Cluster>;
    /**
     * Retrieves the list of SPQR Cluster resources that belong
     * to the specified folder.
     */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a SPQR cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified SPQR cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified SPQR cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    addSubcluster: handleUnaryCall<AddSubclusterRequest, Operation>;
    /** Start the specified SPQR cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stop the specified SPQR cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Moves the specified SPQR cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Creates a backup for the specified SPQR cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new SPQR cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
    /**
     * Retrieves logs for the specified SPQR cluster.
     * See the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developers guide for detailed logs description.
     */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of available backups for the specified SPQR cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Retrieves a list of hosts for the specified cluster. */
    listHostsAtRevision: handleUnaryCall<
        ListClusterHostsAtRevisionRequest,
        ListClusterHostsResponse
    >;
    /** Creates new hosts for a cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Updates the specified hosts. */
    updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
    /** Resetups hosts. */
    resetupHosts: handleUnaryCall<ResetupHostsRequest, Operation>;
    /** Returns the specified shard. */
    getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
    /** Retrieves a list of shards. */
    listShards: handleUnaryCall<ListClusterShardsRequest, ListClusterShardsResponse>;
    /** Retrieves a list of shards. */
    listShardsAtRevision: handleUnaryCall<
        ListClusterShardsAtRevisionRequest,
        ListClusterShardsResponse
    >;
    /** Creates a new shard. */
    addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
    /** Deletes the specified shard. */
    deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified SPQR Cluster resource.
     *
     * To get the list of available SPQR Cluster resources, make a [List] request.
     */
    get(
        request: GetClusterRequest,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    get(
        request: GetClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    get(
        request: GetClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    getAtRevision(
        request: GetClusterAtRevisionRequest,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    getAtRevision(
        request: GetClusterAtRevisionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    getAtRevision(
        request: GetClusterAtRevisionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    /**
     * Retrieves the list of SPQR Cluster resources that belong
     * to the specified folder.
     */
    list(
        request: ListClustersRequest,
        callback: (error: ServiceError | null, response: ListClustersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListClustersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClustersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListClustersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClustersResponse) => void,
    ): ClientUnaryCall;
    /** Creates a SPQR cluster in the specified folder. */
    create(
        request: CreateClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified SPQR cluster. */
    update(
        request: UpdateClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified SPQR cluster. */
    delete(
        request: DeleteClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addSubcluster(
        request: AddSubclusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addSubcluster(
        request: AddSubclusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addSubcluster(
        request: AddSubclusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Start the specified SPQR cluster. */
    start(
        request: StartClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Stop the specified SPQR cluster. */
    stop(
        request: StopClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Moves the specified SPQR cluster to the specified folder. */
    move(
        request: MoveClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    move(
        request: MoveClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    move(
        request: MoveClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Creates a backup for the specified SPQR cluster. */
    backup(
        request: BackupClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    backup(
        request: BackupClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    backup(
        request: BackupClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Creates a new SPQR cluster using the specified backup. */
    restore(
        request: RestoreClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    restore(
        request: RestoreClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    restore(
        request: RestoreClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance(
        request: RescheduleMaintenanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    rescheduleMaintenance(
        request: RescheduleMaintenanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    rescheduleMaintenance(
        request: RescheduleMaintenanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Retrieves logs for the specified SPQR cluster.
     * See the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developers guide for detailed logs description.
     */
    listLogs(
        request: ListClusterLogsRequest,
        callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void,
    ): ClientUnaryCall;
    listLogs(
        request: ListClusterLogsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void,
    ): ClientUnaryCall;
    listLogs(
        request: ListClusterLogsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void,
    ): ClientUnaryCall;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs(
        request: StreamClusterLogsRequest,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<StreamLogRecord>;
    streamLogs(
        request: StreamClusterLogsRequest,
        metadata?: Metadata,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations(
        request: ListClusterOperationsRequest,
        callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListClusterOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListClusterOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of available backups for the specified SPQR cluster. */
    listBackups(
        request: ListClusterBackupsRequest,
        callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void,
    ): ClientUnaryCall;
    listBackups(
        request: ListClusterBackupsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void,
    ): ClientUnaryCall;
    listBackups(
        request: ListClusterBackupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts(
        request: ListClusterHostsRequest,
        callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
    ): ClientUnaryCall;
    listHosts(
        request: ListClusterHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
    ): ClientUnaryCall;
    listHosts(
        request: ListClusterHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified cluster. */
    listHostsAtRevision(
        request: ListClusterHostsAtRevisionRequest,
        callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
    ): ClientUnaryCall;
    listHostsAtRevision(
        request: ListClusterHostsAtRevisionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
    ): ClientUnaryCall;
    listHostsAtRevision(
        request: ListClusterHostsAtRevisionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void,
    ): ClientUnaryCall;
    /** Creates new hosts for a cluster. */
    addHosts(
        request: AddClusterHostsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addHosts(
        request: AddClusterHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addHosts(
        request: AddClusterHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified hosts. */
    updateHosts(
        request: UpdateClusterHostsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateHosts(
        request: UpdateClusterHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateHosts(
        request: UpdateClusterHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts(
        request: DeleteClusterHostsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteHosts(
        request: DeleteClusterHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteHosts(
        request: DeleteClusterHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Resetups hosts. */
    resetupHosts(
        request: ResetupHostsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    resetupHosts(
        request: ResetupHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    resetupHosts(
        request: ResetupHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns the specified shard. */
    getShard(
        request: GetClusterShardRequest,
        callback: (error: ServiceError | null, response: Shard) => void,
    ): ClientUnaryCall;
    getShard(
        request: GetClusterShardRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Shard) => void,
    ): ClientUnaryCall;
    getShard(
        request: GetClusterShardRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Shard) => void,
    ): ClientUnaryCall;
    /** Retrieves a list of shards. */
    listShards(
        request: ListClusterShardsRequest,
        callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
    ): ClientUnaryCall;
    listShards(
        request: ListClusterShardsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
    ): ClientUnaryCall;
    listShards(
        request: ListClusterShardsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves a list of shards. */
    listShardsAtRevision(
        request: ListClusterShardsAtRevisionRequest,
        callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
    ): ClientUnaryCall;
    listShardsAtRevision(
        request: ListClusterShardsAtRevisionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
    ): ClientUnaryCall;
    listShardsAtRevision(
        request: ListClusterShardsAtRevisionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a new shard. */
    addShard(
        request: AddClusterShardRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addShard(
        request: AddClusterShardRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addShard(
        request: AddClusterShardRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified shard. */
    deleteShard(
        request: DeleteClusterShardRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteShard(
        request: DeleteClusterShardRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteShard(
        request: DeleteClusterShardRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
    ClusterServiceService,
    'yandex.cloud.mdb.spqr.v1.ClusterService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ClusterServiceClient;
    service: typeof ClusterServiceService;
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
