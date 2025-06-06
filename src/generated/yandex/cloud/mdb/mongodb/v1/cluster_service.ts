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
    Resources,
    Host_Type,
    DiskSizeAutoscaling,
    PerformanceDiagnosticsConfig,
    Access,
    Cluster,
    Host,
    Shard,
    cluster_EnvironmentFromJSON,
    cluster_EnvironmentToJSON,
    host_TypeFromJSON,
    host_TypeToJSON,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/cluster';
import { MaintenanceWindow } from '../../../../../yandex/cloud/mdb/mongodb/v1/maintenance';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    Mongodconfig36,
    Mongocfgconfig36,
    Mongosconfig36,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6';
import {
    Mongodconfig40,
    Mongocfgconfig40,
    Mongosconfig40,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0';
import {
    Mongodconfig42,
    Mongocfgconfig42,
    Mongosconfig42,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2';
import {
    Mongodconfig44,
    Mongocfgconfig44,
    Mongosconfig44,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4';
import {
    Mongodconfig44Enterprise,
    Mongocfgconfig44Enterprise,
    Mongosconfig44Enterprise,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4_enterprise';
import {
    Mongodconfig50,
    Mongocfgconfig50,
    Mongosconfig50,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0';
import {
    Mongodconfig50Enterprise,
    Mongocfgconfig50Enterprise,
    Mongosconfig50Enterprise,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0_enterprise';
import {
    Mongodconfig60,
    Mongocfgconfig60,
    Mongosconfig60,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb6_0';
import {
    Mongodconfig60Enterprise,
    Mongocfgconfig60Enterprise,
    Mongosconfig60Enterprise,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb6_0_enterprise';
import {
    MongodConfig,
    MongoCfgConfig,
    MongosConfig,
} from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { DatabaseSpec } from '../../../../../yandex/cloud/mdb/mongodb/v1/database';
import { UserSpec } from '../../../../../yandex/cloud/mdb/mongodb/v1/user';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Backup } from '../../../../../yandex/cloud/mdb/mongodb/v1/backup';
import { BoolValue, Int64Value, DoubleValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1';

export interface GetClusterRequest {
    /**
     * ID of the MongoDB Cluster resource to return.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface ListClustersRequest {
    /**
     * ID of the folder to list MongoDB clusters in.
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
    /** List of MongoDB Cluster resources. */
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
    /** ID of the folder to create MongoDB cluster in. */
    folderId: string;
    /** Name of the MongoDB cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the MongoDB cluster. */
    description: string;
    /**
     * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: { [key: string]: string };
    /** Deployment environment of the MongoDB cluster. */
    environment: Cluster_Environment;
    /** Configuration and resources for hosts that should be created for the MongoDB cluster. */
    configSpec?: ConfigSpec;
    /** Descriptions of databases to be created in the MongoDB cluster. */
    databaseSpecs: DatabaseSpec[];
    /** Descriptions of database users to be created in the MongoDB cluster. */
    userSpecs: UserSpec[];
    /** Individual configurations for hosts that should be created for the MongoDB cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Maintenance window settings for the cluster. */
    maintenanceWindow?: MaintenanceWindow;
}

export interface CreateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateClusterMetadata {
    /** ID of the MongoDB cluster that is being created. */
    clusterId: string;
}

export interface UpdateClusterRequest {
    /**
     * ID of the MongoDB Cluster resource to update.
     * To get the MongoDB cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the MongoDB Cluster resource should be updated. */
    updateMask?: FieldMask;
    /** New description of the MongoDB cluster. */
    description: string;
    /**
     * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
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
    /** ID of the network to move the cluster to. */
    networkId: string;
}

export interface UpdateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateClusterMetadata {
    /** ID of the MongoDB Cluster resource that is being updated. */
    clusterId: string;
}

export interface DeleteClusterRequest {
    /**
     * ID of the MongoDB cluster to delete.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface DeleteClusterMetadata {
    /** ID of the MongoDB cluster that is being deleted. */
    clusterId: string;
}

export interface StartClusterRequest {
    /** ID of the MongoDB cluster to start. */
    clusterId: string;
}

export interface StartClusterMetadata {
    /** ID of the MongoDB cluster. */
    clusterId: string;
}

export interface StopClusterRequest {
    /** ID of the MongoDB cluster to stop. */
    clusterId: string;
}

export interface StopClusterMetadata {
    /** ID of the MongoDB cluster. */
    clusterId: string;
}

export interface MoveClusterRequest {
    /** ID of the MongoDB cluster to move. */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}

export interface MoveClusterMetadata {
    /** ID of the MongoDB cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destnation folder. */
    destinationFolderId: string;
}

export interface BackupClusterRequest {
    /**
     * ID of the MongoDB cluster to back up.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface BackupClusterMetadata {
    /** ID of the MongoDB cluster that is being backed up. */
    clusterId: string;
}

export interface RestoreClusterRequest {
    /**
     * ID of the backup to create a cluster from.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /**
     * Name of the new MongoDB cluster. The name must be unique within the folder.
     * The name can't be changed after the MongoDB cluster is created.
     */
    name: string;
    /** Description of the new MongoDB cluster. */
    description: string;
    /**
     * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: { [key: string]: string };
    /** Deployment environment of the new MongoDB cluster. */
    environment: Cluster_Environment;
    /** Configuration for the MongoDB cluster to be created. */
    configSpec?: ConfigSpec;
    /**
     * Configurations for MongoDB hosts that should be created for
     * the cluster that is being created from the backup.
     */
    hostSpecs: HostSpec[];
    /** ID of the network to create the MongoDB cluster in. */
    networkId: string;
    /** Required. ID of the folder to create the MongoDB cluster in. */
    folderId: string;
    /** Specification of the moment to which the MongoDB cluster should be restored. */
    recoveryTargetSpec?: RestoreClusterRequest_RecoveryTargetSpec;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Maintenance window settings for the cluster. */
    maintenanceWindow?: MaintenanceWindow;
}

export interface RestoreClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface RestoreClusterRequest_RecoveryTargetSpec {
    /** Timestamp of the recovery target */
    timestamp: number;
}

export interface RestoreClusterMetadata {
    /** ID of the new MongoDB cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}

export interface RescheduleMaintenanceRequest {
    /** ID of the MongoDB cluster to reschedule the maintenance operation for. */
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
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. The time until which this maintenance operation is to be delayed. */
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
     * ID of the MongoDB cluster to request logs for.
     * To get the MongoDB cluster ID use a [ClusterService.List] request.
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
}

export enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** MONGOD - Logs of MongoDB activity. */
    MONGOD = 1,
    MONGOS = 2,
    MONGOCFG = 3,
    AUDIT = 4,
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
        case 'MONGOD':
            return ListClusterLogsRequest_ServiceType.MONGOD;
        case 2:
        case 'MONGOS':
            return ListClusterLogsRequest_ServiceType.MONGOS;
        case 3:
        case 'MONGOCFG':
            return ListClusterLogsRequest_ServiceType.MONGOCFG;
        case 4:
        case 'AUDIT':
            return ListClusterLogsRequest_ServiceType.AUDIT;
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
        case ListClusterLogsRequest_ServiceType.MONGOD:
            return 'MONGOD';
        case ListClusterLogsRequest_ServiceType.MONGOS:
            return 'MONGOS';
        case ListClusterLogsRequest_ServiceType.MONGOCFG:
            return 'MONGOCFG';
        case ListClusterLogsRequest_ServiceType.AUDIT:
            return 'AUDIT';
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
    /** Required. ID of the MongoDB cluster. */
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
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
     * Examples of a filter: `message.hostname='node1.db.cloud.yandex.net'`, `message.severity IN ('E', 'F')`
     */
    filter: string;
}

export enum StreamClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** MONGOD - Logs of MongoDB activity. */
    MONGOD = 1,
    MONGOS = 2,
    MONGOCFG = 3,
    /** AUDIT - MongoDB Enterprise audit logs */
    AUDIT = 4,
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
        case 'MONGOD':
            return StreamClusterLogsRequest_ServiceType.MONGOD;
        case 2:
        case 'MONGOS':
            return StreamClusterLogsRequest_ServiceType.MONGOS;
        case 3:
        case 'MONGOCFG':
            return StreamClusterLogsRequest_ServiceType.MONGOCFG;
        case 4:
        case 'AUDIT':
            return StreamClusterLogsRequest_ServiceType.AUDIT;
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
        case StreamClusterLogsRequest_ServiceType.MONGOD:
            return 'MONGOD';
        case StreamClusterLogsRequest_ServiceType.MONGOS:
            return 'MONGOS';
        case StreamClusterLogsRequest_ServiceType.MONGOCFG:
            return 'MONGOCFG';
        case StreamClusterLogsRequest_ServiceType.AUDIT:
            return 'AUDIT';
        default:
            return 'UNKNOWN';
    }
}

export interface ListClusterOperationsRequest {
    /** ID of the MongoDB Cluster resource to list operations for. */
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
    /** List of Operation resources for the specified MongoDB cluster. */
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
    /**
     * ID of the MongoDB cluster.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
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
    /** List of MongoDB Backup resources. */
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
    /**
     * ID of the MongoDB cluster.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
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
     * ID of the MongoDB cluster to add hosts to.
     * To get the MongoDB cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configurations for MongoDB hosts that should be added to the cluster. */
    hostSpecs: HostSpec[];
}

export interface AddClusterHostsMetadata {
    /** ID of the MongoDB cluster to which the hosts are being added. */
    clusterId: string;
    /** Names of hosts that are being added to the cluster. */
    hostNames: string[];
}

export interface DeleteClusterHostsRequest {
    /**
     * ID of the MongoDB cluster to remove hosts from.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of hosts to delete. */
    hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
    /** ID of the MongoDB cluster to remove hosts from. */
    clusterId: string;
    /** Names of hosts that are being deleted. */
    hostNames: string[];
}

export interface UpdateClusterHostsRequest {
    /**
     * ID of the MongoDB cluster to update hosts from.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** New configurations to apply to hosts of a Managed Service for MongoDB cluster. */
    updateHostSpecs: UpdateHostSpec[];
}

export interface UpdateClusterHostsMetadata {
    /** ID of the MongoDB cluster to update host from. */
    clusterId: string;
    /** Name of host that are being updated. */
    hostNames: string[];
}

export interface UpdateHostSpec {
    /** Host to be updated. Specify the [host FQDN](https://yandex.cloud/en/docs/managed-mongodb/operations/connect/#fqdn). */
    hostName: string;
    /**
     * Determines if the host is a hidden replica set member.
     *
     * Such members cannot become primary in a replica set, and they are invisible to client applications. However, hidden members can participate in elections of the primary host. For more information, see the [MongoDB documentation](https://www.mongodb.com/docs/manual/core/replica-set-hidden-member/).
     */
    hidden?: boolean;
    /** The time, in seconds, by which the given replica set member lags behind the primary host. */
    secondaryDelaySecs?: number;
    /**
     * Priority of the host to be elected as the primary in the replica set.
     *
     * The minimum value is `0` if the Managed Service for MongoDB cluster contains three or more secondary hosts. Otherwise, the minimum value is `1`.
     */
    priority?: number;
    /** Determines whether the host should get a public IP address after the update. */
    assignPublicIp: boolean;
    /** Field mask that specifies which fields of the MongoDB host should be updated. */
    updateMask?: FieldMask;
    /** Host tag list that contains key-value pairs for the given replica set member. For more information about how to specify the tags and what values to choose, see the [MongoDB documentation](https://www.mongodb.com/docs/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.members-n-.tags). */
    tags: { [key: string]: string };
}

export interface UpdateHostSpec_TagsEntry {
    key: string;
    value: string;
}

export interface EnableClusterShardingRequest {
    /** ID of the MongoDB cluster to enable sharding for. */
    clusterId: string;
    /** mongocfg specification for sharding. */
    mongocfg?: EnableClusterShardingRequest_MongoCfg;
    /** mongos specification for sharding. */
    mongos?: EnableClusterShardingRequest_Mongos;
    /** Configurations for mongos and mongocfg hosts. */
    hostSpecs: HostSpec[];
    /** mongos specification for sharding. */
    mongoinfra?: EnableClusterShardingRequest_MongoInfra;
}

export interface EnableClusterShardingRequest_MongoCfg {
    /** Resources for mongocfg hosts. */
    resources?: Resources;
}

export interface EnableClusterShardingRequest_Mongos {
    /** Resources for mongos hosts. */
    resources?: Resources;
}

export interface EnableClusterShardingRequest_MongoInfra {
    /** Resources for mongoinfra (mongos+mongocfg) hosts. */
    resources?: Resources;
}

export interface EnableClusterShardingMetadata {
    /** ID of the MongoDB cluster that sharding is being enabled for. */
    clusterId: string;
}

export interface GetClusterShardRequest {
    /**
     * ID of the MongoDB cluster that the shard belongs to.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the MongoDB shard to return.
     * To get the name of the shard use a [ClusterService.ListShards] request.
     */
    shardName: string;
}

export interface ListClusterShardsRequest {
    /**
     * ID of the MongoDB cluster to list databases in.
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

export interface ListClusterShardsResponse {
    /** List of MongoDB shards. */
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
     * ID of the MongoDB cluster to add a shard to.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the MongoDB shard to create. */
    shardName: string;
    /** Configurations for mongod hosts to be created with the shard. */
    hostSpecs: HostSpec[];
}

export interface AddClusterShardMetadata {
    /** ID of the MongoDB cluster that a shard is being added to. */
    clusterId: string;
    /** Name of the shard being added. */
    shardName: string;
}

export interface DeleteClusterShardRequest {
    /**
     * ID of the MongoDB cluster to delete a shard in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the MongoDB shard to delete.
     * To get the name of the shard use a [ClusterService.ListShards] request.
     */
    shardName: string;
}

export interface DeleteClusterShardMetadata {
    /** ID of the MongoDB cluster that a shard is being deleted in. */
    clusterId: string;
    /** Name of the shard being deleted. */
    shardName: string;
}

export interface ResetupHostsRequest {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. Name of the hosts to resetup. */
    hostNames: string[];
}

export interface ResetupHostsMetadata {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. The name of hosts to resetup. */
    hostNames: string[];
}

export interface RestartHostsRequest {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. Name of the hosts to restart. */
    hostNames: string[];
}

export interface RestartHostsMetadata {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. The name of hosts to restart. */
    hostNames: string[];
}

export interface StepdownHostsRequest {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. Name of the hosts to resetup. */
    hostNames: string[];
}

export interface StepdownHostsMetadata {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. The name of hosts to resetup. */
    hostNames: string[];
}

export interface HostSpec {
    /**
     * ID of the availability zone where the host resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * ID of the subnet that the host should belong to. This subnet should be a part
     * of the network that the cluster belongs to.
     * The network ID is set in the [Cluster.network_id] field.
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
    /** Type of the host to be deployed. */
    type: Host_Type;
    /** Name of the shard that the host belongs to. */
    shardName: string;
    /** Is host hidden in replSet */
    hidden?: boolean;
    /** The number of seconds "behind" the primary that this replica set member should "lag" */
    secondaryDelaySecs?: number;
    /** Priority of host for the election in replSet */
    priority?: number;
    /** Host tags */
    tags: { [key: string]: string };
}

export interface HostSpec_TagsEntry {
    key: string;
    value: string;
}

export interface Mongodbspec36 {
    /** Configuration and resource allocation for mongod 3.6 hosts. */
    mongod?: Mongodbspec36_Mongod;
    /** Configuration and resource allocation for mongocfg 3.6 hosts. */
    mongocfg?: Mongodbspec36_MongoCfg;
    /** Configuration and resource allocation for mongos 3.6 hosts. */
    mongos?: Mongodbspec36_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 3.6 hosts. */
    mongoinfra?: Mongodbspec36_MongoInfra;
}

export interface Mongodbspec36_Mongod {
    /** Configuration for mongod 3.6 hosts. */
    config?: Mongodconfig36;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec36_MongoCfg {
    /** Configuration for mongocfg 3.6 hosts. */
    config?: Mongocfgconfig36;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec36_Mongos {
    /** Configuration for mongos 3.6 hosts. */
    config?: Mongosconfig36;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec36_MongoInfra {
    /** Configuration for mongoinfra 3.6 hosts. */
    configMongos?: Mongosconfig36;
    configMongocfg?: Mongocfgconfig36;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec40 {
    /** Configuration and resource allocation for mongod 4.0 hosts. */
    mongod?: Mongodbspec40_Mongod;
    /** Configuration and resource allocation for mongocfg 4.0 hosts. */
    mongocfg?: Mongodbspec40_MongoCfg;
    /** Configuration and resource allocation for mongos 4.0 hosts. */
    mongos?: Mongodbspec40_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.0 hosts. */
    mongoinfra?: Mongodbspec40_MongoInfra;
}

export interface Mongodbspec40_Mongod {
    /** Configuration for mongod 4.0 hosts. */
    config?: Mongodconfig40;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec40_MongoCfg {
    /** Configuration for mongocfg 4.0 hosts. */
    config?: Mongocfgconfig40;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec40_Mongos {
    /** Configuration for mongos 4.0 hosts. */
    config?: Mongosconfig40;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec40_MongoInfra {
    /** Configuration for mongoinfra 4.0 hosts. */
    configMongos?: Mongosconfig40;
    configMongocfg?: Mongocfgconfig40;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec42 {
    /** Configuration and resource allocation for mongod 4.2 hosts. */
    mongod?: Mongodbspec42_Mongod;
    /** Configuration and resource allocation for mongocfg 4.2 hosts. */
    mongocfg?: Mongodbspec42_MongoCfg;
    /** Configuration and resource allocation for mongos 4.2 hosts. */
    mongos?: Mongodbspec42_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.2 hosts. */
    mongoinfra?: Mongodbspec42_MongoInfra;
}

export interface Mongodbspec42_Mongod {
    /** Configuration for mongod 4.2 hosts. */
    config?: Mongodconfig42;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec42_MongoCfg {
    /** Configuration for mongocfg 4.2 hosts. */
    config?: Mongocfgconfig42;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec42_Mongos {
    /** Configuration for mongos 4.2 hosts. */
    config?: Mongosconfig42;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec42_MongoInfra {
    /** Configuration for mongoinfra 4.2 hosts. */
    configMongos?: Mongosconfig42;
    configMongocfg?: Mongocfgconfig42;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec44 {
    /** Configuration and resource allocation for mongod 4.4 hosts. */
    mongod?: Mongodbspec44_Mongod;
    /** Configuration and resource allocation for mongocfg 4.4 hosts. */
    mongocfg?: Mongodbspec44_MongoCfg;
    /** Configuration and resource allocation for mongos 4.4 hosts. */
    mongos?: Mongodbspec44_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.4 hosts. */
    mongoinfra?: Mongodbspec44_MongoInfra;
}

export interface Mongodbspec44_Mongod {
    /** Configuration for mongod 4.4 hosts. */
    config?: Mongodconfig44;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec44_MongoCfg {
    /** Configuration for mongocfg 4.4 hosts. */
    config?: Mongocfgconfig44;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec44_Mongos {
    /** Configuration for mongos 4.4 hosts. */
    config?: Mongosconfig44;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec44_MongoInfra {
    /** Configuration for mongoinfra 4.4 hosts. */
    configMongos?: Mongosconfig44;
    configMongocfg?: Mongocfgconfig44;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec44Enterprise {
    /** Configuration and resource allocation for mongod 4.4 hosts. */
    mongod?: Mongodbspec44Enterprise_Mongod;
    /** Configuration and resource allocation for mongocfg 4.4 hosts. */
    mongocfg?: Mongodbspec44Enterprise_MongoCfg;
    /** Configuration and resource allocation for mongos 4.4 hosts. */
    mongos?: Mongodbspec44Enterprise_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.4 hosts. */
    mongoinfra?: Mongodbspec44Enterprise_MongoInfra;
}

export interface Mongodbspec44Enterprise_Mongod {
    /** Configuration for mongod 4.4 hosts. */
    config?: Mongodconfig44Enterprise;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec44Enterprise_MongoCfg {
    /** Configuration for mongocfg 4.4 hosts. */
    config?: Mongocfgconfig44Enterprise;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec44Enterprise_Mongos {
    /** Configuration for mongos 4.4 hosts. */
    config?: Mongosconfig44Enterprise;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec44Enterprise_MongoInfra {
    /** Configuration for mongoinfra 4.4 hosts. */
    configMongos?: Mongosconfig44Enterprise;
    configMongocfg?: Mongocfgconfig44Enterprise;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec50 {
    /** Configuration and resource allocation for mongod 5.0 hosts. */
    mongod?: Mongodbspec50_Mongod;
    /** Configuration and resource allocation for mongocfg 5.0 hosts. */
    mongocfg?: Mongodbspec50_MongoCfg;
    /** Configuration and resource allocation for mongos 5.0 hosts. */
    mongos?: Mongodbspec50_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 5.0 hosts. */
    mongoinfra?: Mongodbspec50_MongoInfra;
}

export interface Mongodbspec50_Mongod {
    /** Configuration for mongod 5.0 hosts. */
    config?: Mongodconfig50;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec50_MongoCfg {
    /** Configuration for mongocfg 5.0 hosts. */
    config?: Mongocfgconfig50;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec50_Mongos {
    /** Configuration for mongos 5.0 hosts. */
    config?: Mongosconfig50;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec50_MongoInfra {
    /** Configuration for mongoinfra 5.0 hosts. */
    configMongos?: Mongosconfig50;
    configMongocfg?: Mongocfgconfig50;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec50Enterprise {
    /** Configuration and resource allocation for mongod 5.0 hosts. */
    mongod?: Mongodbspec50Enterprise_Mongod;
    /** Configuration and resource allocation for mongocfg 5.0 hosts. */
    mongocfg?: Mongodbspec50Enterprise_MongoCfg;
    /** Configuration and resource allocation for mongos 5.0 hosts. */
    mongos?: Mongodbspec50Enterprise_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 5.0 hosts. */
    mongoinfra?: Mongodbspec50Enterprise_MongoInfra;
}

export interface Mongodbspec50Enterprise_Mongod {
    /** Configuration for mongod 5.0 hosts. */
    config?: Mongodconfig50Enterprise;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec50Enterprise_MongoCfg {
    /** Configuration for mongocfg 5.0 hosts. */
    config?: Mongocfgconfig50Enterprise;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec50Enterprise_Mongos {
    /** Configuration for mongos 5.0 hosts. */
    config?: Mongosconfig50Enterprise;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec50Enterprise_MongoInfra {
    /** Configuration for mongoinfra 5.0 hosts. */
    configMongos?: Mongosconfig50Enterprise;
    configMongocfg?: Mongocfgconfig50Enterprise;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec60 {
    /** Configuration and resource allocation for mongod 6.0 hosts. */
    mongod?: Mongodbspec60_Mongod;
    /** Configuration and resource allocation for mongocfg 6.0 hosts. */
    mongocfg?: Mongodbspec60_MongoCfg;
    /** Configuration and resource allocation for mongos 6.0 hosts. */
    mongos?: Mongodbspec60_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 6.0 hosts. */
    mongoinfra?: Mongodbspec60_MongoInfra;
}

export interface Mongodbspec60_Mongod {
    /** Configuration for mongod 6.0 hosts. */
    config?: Mongodconfig60;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec60_MongoCfg {
    /** Configuration for mongocfg 6.0 hosts. */
    config?: Mongocfgconfig60;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec60_Mongos {
    /** Configuration for mongos 6.0 hosts. */
    config?: Mongosconfig60;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec60_MongoInfra {
    /** Configuration for mongoinfra 6.0 hosts. */
    configMongos?: Mongosconfig60;
    configMongocfg?: Mongocfgconfig60;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec60Enterprise {
    /** Configuration and resource allocation for mongod 6.0 hosts. */
    mongod?: Mongodbspec60Enterprise_Mongod;
    /** Configuration and resource allocation for mongocfg 6.0 hosts. */
    mongocfg?: Mongodbspec60Enterprise_MongoCfg;
    /** Configuration and resource allocation for mongos 6.0 hosts. */
    mongos?: Mongodbspec60Enterprise_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 6.0 hosts. */
    mongoinfra?: Mongodbspec60Enterprise_MongoInfra;
}

export interface Mongodbspec60Enterprise_Mongod {
    /** Configuration for mongod 6.0 hosts. */
    config?: Mongodconfig60Enterprise;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec60Enterprise_MongoCfg {
    /** Configuration for mongocfg 6.0 hosts. */
    config?: Mongocfgconfig60Enterprise;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec60Enterprise_Mongos {
    /** Configuration for mongos 6.0 hosts. */
    config?: Mongosconfig60Enterprise;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface Mongodbspec60Enterprise_MongoInfra {
    /** Configuration for mongoinfra 6.0 hosts. */
    configMongos?: Mongosconfig60Enterprise;
    configMongocfg?: Mongocfgconfig60Enterprise;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface MongodbSpec {
    /** Configuration and resource allocation for mongod hosts. */
    mongod?: MongodbSpec_Mongod;
    /** Configuration and resource allocation for mongocfg hosts. */
    mongocfg?: MongodbSpec_MongoCfg;
    /** Configuration and resource allocation for mongos hosts. */
    mongos?: MongodbSpec_Mongos;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) hosts. */
    mongoinfra?: MongodbSpec_MongoInfra;
}

export interface MongodbSpec_Mongod {
    config?: MongodConfig;
    /** Resources allocated to each mongod host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface MongodbSpec_MongoCfg {
    /** Configuration for mongocfg hosts. */
    config?: MongoCfgConfig;
    /** Resources allocated to each mongocfg host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface MongodbSpec_Mongos {
    /** Configuration for mongos hosts. */
    config?: MongosConfig;
    /** Resources allocated to each mongos host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface MongodbSpec_MongoInfra {
    /** Configuration for mongoinfra hosts. */
    configMongos?: MongosConfig;
    configMongocfg?: MongoCfgConfig;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources?: Resources;
    /** Disk size autoscaling settings */
    diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface ConfigSpec {
    /** Version of MongoDB used in the cluster. Possible values: `3.6`, `4.0`, `4.2`, `4.4`, `4.4-enterprise`, `5.0`, `5.0-enterprise`, `6.0`, `6.0-enterprise`. */
    version: string;
    /**
     * MongoDB feature compatibility version. See usage details in [MongoDB documentation](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion/).
     *
     * Possible values:
     * * `3.6` - persist data compatibility for version 3.6. After setting this option the data will not be compatible with 3.4 or older.
     * * `4.0` - persist data compatibility for version 4.0. After setting this option the data will not be compatible with 3.6 or older.
     * * `4.2` - persist data compatibility for version 4.2. After setting this option the data will not be compatible with 4.0 or older.
     * * `4.4` - persist data compatibility for version 4.4. After setting this option the data will not be compatible with 4.2 or older.
     * * `5.0` - persist data compatibility for version 5.0. After setting this option the data will not be compatible with 4.4 or older.
     * * `6.0` - persist data compatibility for version 6.0. After setting this option the data will not be compatible with 5.0 or older.
     */
    featureCompatibilityVersion: string;
    /** Configuration and resource allocation for a MongoDB 3.6 cluster. */
    mongodbSpec36?: Mongodbspec36 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.0 cluster. */
    mongodbSpec40?: Mongodbspec40 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.2 cluster. */
    mongodbSpec42?: Mongodbspec42 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.4 cluster. */
    mongodbSpec44?: Mongodbspec44 | undefined;
    /** Configuration and resource allocation for a MongoDB 5.0 cluster. */
    mongodbSpec50?: Mongodbspec50 | undefined;
    /** Configuration and resource allocation for a MongoDB 6.0 cluster. */
    mongodbSpec60?: Mongodbspec60 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.4 Enterprise cluster. */
    mongodbSpec44Enterprise?: Mongodbspec44Enterprise | undefined;
    /** Configuration and resource allocation for a MongoDB 5.0 Enterprise cluster. */
    mongodbSpec50Enterprise?: Mongodbspec50Enterprise | undefined;
    /** Configuration and resource allocation for a MongoDB 6.0 Enterprise cluster. */
    mongodbSpec60Enterprise?: Mongodbspec60Enterprise | undefined;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Retain period of automatically created backup in days */
    backupRetainPeriodDays?: number;
    /** Performance Diagnosics configuration */
    performanceDiagnostics?: PerformanceDiagnosticsConfig;
    /** Access policy to DB */
    access?: Access;
    /** Configuration and resource allocation for a MongoDB 7.0 Enterprise cluster. */
    mongodb?: MongodbSpec;
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

type ListClustersResponseType = {
    encode(message: ListClustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersResponse;
    fromJSON(object: any): ListClustersResponse;
    toJSON(message: ListClustersResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListClustersResponse>, I>>(
        object: I,
    ): ListClustersResponse
}

export const ListClustersResponse: ListClustersResponseType = {
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
    description: '',
    name: '',
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
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateClusterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.configSpec !== undefined) {
            ConfigSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
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
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
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
        message.name = object.name ?? '';
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
        if (message.recoveryTargetSpec !== undefined) {
            RestoreClusterRequest_RecoveryTargetSpec.encode(
                message.recoveryTargetSpec,
                writer.uint32(82).fork(),
            ).ldelim();
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
                case 10:
                    message.recoveryTargetSpec = RestoreClusterRequest_RecoveryTargetSpec.decode(
                        reader,
                        reader.uint32(),
                    );
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
        message.recoveryTargetSpec =
            object.recoveryTargetSpec !== undefined && object.recoveryTargetSpec !== null
                ? RestoreClusterRequest_RecoveryTargetSpec.fromJSON(object.recoveryTargetSpec)
                : undefined;
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
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
        message.recoveryTargetSpec !== undefined &&
            (obj.recoveryTargetSpec = message.recoveryTargetSpec
                ? RestoreClusterRequest_RecoveryTargetSpec.toJSON(message.recoveryTargetSpec)
                : undefined);
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
        message.recoveryTargetSpec =
            object.recoveryTargetSpec !== undefined && object.recoveryTargetSpec !== null
                ? RestoreClusterRequest_RecoveryTargetSpec.fromPartial(object.recoveryTargetSpec)
                : undefined;
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
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

const baseRestoreClusterRequest_RecoveryTargetSpec: object = { timestamp: 0 };

export const RestoreClusterRequest_RecoveryTargetSpec = {
    encode(
        message: RestoreClusterRequest_RecoveryTargetSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.timestamp !== 0) {
            writer.uint32(8).int64(message.timestamp);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): RestoreClusterRequest_RecoveryTargetSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreClusterRequest_RecoveryTargetSpec,
        } as RestoreClusterRequest_RecoveryTargetSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestoreClusterRequest_RecoveryTargetSpec {
        const message = {
            ...baseRestoreClusterRequest_RecoveryTargetSpec,
        } as RestoreClusterRequest_RecoveryTargetSpec;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        return message;
    },

    toJSON(message: RestoreClusterRequest_RecoveryTargetSpec): unknown {
        const obj: any = {};
        message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RestoreClusterRequest_RecoveryTargetSpec>, I>>(
        object: I,
    ): RestoreClusterRequest_RecoveryTargetSpec {
        const message = {
            ...baseRestoreClusterRequest_RecoveryTargetSpec,
        } as RestoreClusterRequest_RecoveryTargetSpec;
        message.timestamp = object.timestamp ?? 0;
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
        if (message.hidden !== undefined) {
            BoolValue.encode({ value: message.hidden! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.secondaryDelaySecs !== undefined) {
            Int64Value.encode(
                { value: message.secondaryDelaySecs! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.priority !== undefined) {
            DoubleValue.encode({ value: message.priority! }, writer.uint32(34).fork()).ldelim();
        }
        if (message.assignPublicIp === true) {
            writer.uint32(40).bool(message.assignPublicIp);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(50).fork()).ldelim();
        }
        Object.entries(message.tags).forEach(([key, value]) => {
            UpdateHostSpec_TagsEntry.encode(
                { key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateHostSpec } as UpdateHostSpec;
        message.tags = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostName = reader.string();
                    break;
                case 2:
                    message.hidden = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.secondaryDelaySecs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.priority = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.assignPublicIp = reader.bool();
                    break;
                case 6:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 7:
                    const entry7 = UpdateHostSpec_TagsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.tags[entry7.key] = entry7.value;
                    }
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
        message.hidden =
            object.hidden !== undefined && object.hidden !== null
                ? Boolean(object.hidden)
                : undefined;
        message.secondaryDelaySecs =
            object.secondaryDelaySecs !== undefined && object.secondaryDelaySecs !== null
                ? Number(object.secondaryDelaySecs)
                : undefined;
        message.priority =
            object.priority !== undefined && object.priority !== null
                ? Number(object.priority)
                : undefined;
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.tags = Object.entries(object.tags ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateHostSpec): unknown {
        const obj: any = {};
        message.hostName !== undefined && (obj.hostName = message.hostName);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.secondaryDelaySecs !== undefined &&
            (obj.secondaryDelaySecs = message.secondaryDelaySecs);
        message.priority !== undefined && (obj.priority = message.priority);
        message.assignPublicIp !== undefined && (obj.assignPublicIp = message.assignPublicIp);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        obj.tags = {};
        if (message.tags) {
            Object.entries(message.tags).forEach(([k, v]) => {
                obj.tags[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHostSpec>, I>>(object: I): UpdateHostSpec {
        const message = { ...baseUpdateHostSpec } as UpdateHostSpec;
        message.hostName = object.hostName ?? '';
        message.hidden = object.hidden ?? undefined;
        message.secondaryDelaySecs = object.secondaryDelaySecs ?? undefined;
        message.priority = object.priority ?? undefined;
        message.assignPublicIp = object.assignPublicIp ?? false;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.tags = Object.entries(object.tags ?? {}).reduce<{ [key: string]: string }>(
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

const baseUpdateHostSpec_TagsEntry: object = { key: '', value: '' };

export const UpdateHostSpec_TagsEntry = {
    encode(
        message: UpdateHostSpec_TagsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostSpec_TagsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateHostSpec_TagsEntry } as UpdateHostSpec_TagsEntry;
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

    fromJSON(object: any): UpdateHostSpec_TagsEntry {
        const message = { ...baseUpdateHostSpec_TagsEntry } as UpdateHostSpec_TagsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateHostSpec_TagsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHostSpec_TagsEntry>, I>>(
        object: I,
    ): UpdateHostSpec_TagsEntry {
        const message = { ...baseUpdateHostSpec_TagsEntry } as UpdateHostSpec_TagsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseEnableClusterShardingRequest: object = { clusterId: '' };

export const EnableClusterShardingRequest = {
    encode(
        message: EnableClusterShardingRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mongocfg !== undefined) {
            EnableClusterShardingRequest_MongoCfg.encode(
                message.mongocfg,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.mongos !== undefined) {
            EnableClusterShardingRequest_Mongos.encode(
                message.mongos,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        for (const v of message.hostSpecs) {
            HostSpec.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            EnableClusterShardingRequest_MongoInfra.encode(
                message.mongoinfra,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnableClusterShardingRequest } as EnableClusterShardingRequest;
        message.hostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mongocfg = EnableClusterShardingRequest_MongoCfg.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.mongos = EnableClusterShardingRequest_Mongos.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.mongoinfra = EnableClusterShardingRequest_MongoInfra.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnableClusterShardingRequest {
        const message = { ...baseEnableClusterShardingRequest } as EnableClusterShardingRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? EnableClusterShardingRequest_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? EnableClusterShardingRequest_Mongos.fromJSON(object.mongos)
                : undefined;
        message.hostSpecs = (object.hostSpecs ?? []).map((e: any) => HostSpec.fromJSON(e));
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? EnableClusterShardingRequest_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: EnableClusterShardingRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? EnableClusterShardingRequest_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? EnableClusterShardingRequest_Mongos.toJSON(message.mongos)
                : undefined);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => (e ? HostSpec.toJSON(e) : undefined));
        } else {
            obj.hostSpecs = [];
        }
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? EnableClusterShardingRequest_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableClusterShardingRequest>, I>>(
        object: I,
    ): EnableClusterShardingRequest {
        const message = { ...baseEnableClusterShardingRequest } as EnableClusterShardingRequest;
        message.clusterId = object.clusterId ?? '';
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? EnableClusterShardingRequest_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? EnableClusterShardingRequest_Mongos.fromPartial(object.mongos)
                : undefined;
        message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? EnableClusterShardingRequest_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseEnableClusterShardingRequest_MongoCfg: object = {};

export const EnableClusterShardingRequest_MongoCfg = {
    encode(
        message: EnableClusterShardingRequest_MongoCfg,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingRequest_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEnableClusterShardingRequest_MongoCfg,
        } as EnableClusterShardingRequest_MongoCfg;
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

    fromJSON(object: any): EnableClusterShardingRequest_MongoCfg {
        const message = {
            ...baseEnableClusterShardingRequest_MongoCfg,
        } as EnableClusterShardingRequest_MongoCfg;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: EnableClusterShardingRequest_MongoCfg): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableClusterShardingRequest_MongoCfg>, I>>(
        object: I,
    ): EnableClusterShardingRequest_MongoCfg {
        const message = {
            ...baseEnableClusterShardingRequest_MongoCfg,
        } as EnableClusterShardingRequest_MongoCfg;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseEnableClusterShardingRequest_Mongos: object = {};

export const EnableClusterShardingRequest_Mongos = {
    encode(
        message: EnableClusterShardingRequest_Mongos,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingRequest_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEnableClusterShardingRequest_Mongos,
        } as EnableClusterShardingRequest_Mongos;
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

    fromJSON(object: any): EnableClusterShardingRequest_Mongos {
        const message = {
            ...baseEnableClusterShardingRequest_Mongos,
        } as EnableClusterShardingRequest_Mongos;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: EnableClusterShardingRequest_Mongos): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableClusterShardingRequest_Mongos>, I>>(
        object: I,
    ): EnableClusterShardingRequest_Mongos {
        const message = {
            ...baseEnableClusterShardingRequest_Mongos,
        } as EnableClusterShardingRequest_Mongos;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseEnableClusterShardingRequest_MongoInfra: object = {};

export const EnableClusterShardingRequest_MongoInfra = {
    encode(
        message: EnableClusterShardingRequest_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): EnableClusterShardingRequest_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEnableClusterShardingRequest_MongoInfra,
        } as EnableClusterShardingRequest_MongoInfra;
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

    fromJSON(object: any): EnableClusterShardingRequest_MongoInfra {
        const message = {
            ...baseEnableClusterShardingRequest_MongoInfra,
        } as EnableClusterShardingRequest_MongoInfra;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: EnableClusterShardingRequest_MongoInfra): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableClusterShardingRequest_MongoInfra>, I>>(
        object: I,
    ): EnableClusterShardingRequest_MongoInfra {
        const message = {
            ...baseEnableClusterShardingRequest_MongoInfra,
        } as EnableClusterShardingRequest_MongoInfra;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseEnableClusterShardingMetadata: object = { clusterId: '' };

export const EnableClusterShardingMetadata = {
    encode(
        message: EnableClusterShardingMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnableClusterShardingMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnableClusterShardingMetadata } as EnableClusterShardingMetadata;
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

    fromJSON(object: any): EnableClusterShardingMetadata {
        const message = { ...baseEnableClusterShardingMetadata } as EnableClusterShardingMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: EnableClusterShardingMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnableClusterShardingMetadata>, I>>(
        object: I,
    ): EnableClusterShardingMetadata {
        const message = { ...baseEnableClusterShardingMetadata } as EnableClusterShardingMetadata;
        message.clusterId = object.clusterId ?? '';
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

const baseAddClusterShardRequest: object = { clusterId: '', shardName: '' };

export const AddClusterShardRequest = {
    encode(message: AddClusterShardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.shardName !== '') {
            writer.uint32(18).string(message.shardName);
        }
        for (const v of message.hostSpecs) {
            HostSpec.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddClusterShardRequest {
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
                    message.hostSpecs.push(HostSpec.decode(reader, reader.uint32()));
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
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        message.hostSpecs = (object.hostSpecs ?? []).map((e: any) => HostSpec.fromJSON(e));
        return message;
    },

    toJSON(message: AddClusterShardRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) => (e ? HostSpec.toJSON(e) : undefined));
        } else {
            obj.hostSpecs = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddClusterShardRequest>, I>>(
        object: I,
    ): AddClusterShardRequest {
        const message = { ...baseAddClusterShardRequest } as AddClusterShardRequest;
        message.clusterId = object.clusterId ?? '';
        message.shardName = object.shardName ?? '';
        message.hostSpecs = object.hostSpecs?.map((e) => HostSpec.fromPartial(e)) || [];
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

const baseRestartHostsRequest: object = { clusterId: '', hostNames: '' };

export const RestartHostsRequest = {
    encode(message: RestartHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RestartHostsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestartHostsRequest } as RestartHostsRequest;
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

    fromJSON(object: any): RestartHostsRequest {
        const message = { ...baseRestartHostsRequest } as RestartHostsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: RestartHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RestartHostsRequest>, I>>(
        object: I,
    ): RestartHostsRequest {
        const message = { ...baseRestartHostsRequest } as RestartHostsRequest;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseRestartHostsMetadata: object = { clusterId: '', hostNames: '' };

export const RestartHostsMetadata = {
    encode(message: RestartHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RestartHostsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestartHostsMetadata } as RestartHostsMetadata;
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

    fromJSON(object: any): RestartHostsMetadata {
        const message = { ...baseRestartHostsMetadata } as RestartHostsMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: RestartHostsMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RestartHostsMetadata>, I>>(
        object: I,
    ): RestartHostsMetadata {
        const message = { ...baseRestartHostsMetadata } as RestartHostsMetadata;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseStepdownHostsRequest: object = { clusterId: '', hostNames: '' };

export const StepdownHostsRequest = {
    encode(message: StepdownHostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StepdownHostsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStepdownHostsRequest } as StepdownHostsRequest;
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

    fromJSON(object: any): StepdownHostsRequest {
        const message = { ...baseStepdownHostsRequest } as StepdownHostsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: StepdownHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StepdownHostsRequest>, I>>(
        object: I,
    ): StepdownHostsRequest {
        const message = { ...baseStepdownHostsRequest } as StepdownHostsRequest;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseStepdownHostsMetadata: object = { clusterId: '', hostNames: '' };

export const StepdownHostsMetadata = {
    encode(message: StepdownHostsMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StepdownHostsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStepdownHostsMetadata } as StepdownHostsMetadata;
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

    fromJSON(object: any): StepdownHostsMetadata {
        const message = { ...baseStepdownHostsMetadata } as StepdownHostsMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.hostNames = (object.hostNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: StepdownHostsMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StepdownHostsMetadata>, I>>(
        object: I,
    ): StepdownHostsMetadata {
        const message = { ...baseStepdownHostsMetadata } as StepdownHostsMetadata;
        message.clusterId = object.clusterId ?? '';
        message.hostNames = object.hostNames?.map((e) => e) || [];
        return message;
    },
};

const baseHostSpec: object = {
    zoneId: '',
    subnetId: '',
    assignPublicIp: false,
    type: 0,
    shardName: '',
};

export const HostSpec = {
    encode(message: HostSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(24).bool(message.assignPublicIp);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.shardName !== '') {
            writer.uint32(42).string(message.shardName);
        }
        if (message.hidden !== undefined) {
            BoolValue.encode({ value: message.hidden! }, writer.uint32(50).fork()).ldelim();
        }
        if (message.secondaryDelaySecs !== undefined) {
            Int64Value.encode(
                { value: message.secondaryDelaySecs! },
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.priority !== undefined) {
            DoubleValue.encode({ value: message.priority! }, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.tags).forEach(([key, value]) => {
            HostSpec_TagsEntry.encode(
                { key: key as any, value },
                writer.uint32(74).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HostSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostSpec } as HostSpec;
        message.tags = {};
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
                    message.type = reader.int32() as any;
                    break;
                case 5:
                    message.shardName = reader.string();
                    break;
                case 6:
                    message.hidden = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.secondaryDelaySecs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.priority = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    const entry9 = HostSpec_TagsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.tags[entry9.key] = entry9.value;
                    }
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
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.type =
            object.type !== undefined && object.type !== null ? host_TypeFromJSON(object.type) : 0;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        message.hidden =
            object.hidden !== undefined && object.hidden !== null
                ? Boolean(object.hidden)
                : undefined;
        message.secondaryDelaySecs =
            object.secondaryDelaySecs !== undefined && object.secondaryDelaySecs !== null
                ? Number(object.secondaryDelaySecs)
                : undefined;
        message.priority =
            object.priority !== undefined && object.priority !== null
                ? Number(object.priority)
                : undefined;
        message.tags = Object.entries(object.tags ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: HostSpec): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined && (obj.assignPublicIp = message.assignPublicIp);
        message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.secondaryDelaySecs !== undefined &&
            (obj.secondaryDelaySecs = message.secondaryDelaySecs);
        message.priority !== undefined && (obj.priority = message.priority);
        obj.tags = {};
        if (message.tags) {
            Object.entries(message.tags).forEach(([k, v]) => {
                obj.tags[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HostSpec>, I>>(object: I): HostSpec {
        const message = { ...baseHostSpec } as HostSpec;
        message.zoneId = object.zoneId ?? '';
        message.subnetId = object.subnetId ?? '';
        message.assignPublicIp = object.assignPublicIp ?? false;
        message.type = object.type ?? 0;
        message.shardName = object.shardName ?? '';
        message.hidden = object.hidden ?? undefined;
        message.secondaryDelaySecs = object.secondaryDelaySecs ?? undefined;
        message.priority = object.priority ?? undefined;
        message.tags = Object.entries(object.tags ?? {}).reduce<{ [key: string]: string }>(
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

const baseHostSpec_TagsEntry: object = { key: '', value: '' };

export const HostSpec_TagsEntry = {
    encode(message: HostSpec_TagsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HostSpec_TagsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostSpec_TagsEntry } as HostSpec_TagsEntry;
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

    fromJSON(object: any): HostSpec_TagsEntry {
        const message = { ...baseHostSpec_TagsEntry } as HostSpec_TagsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: HostSpec_TagsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HostSpec_TagsEntry>, I>>(
        object: I,
    ): HostSpec_TagsEntry {
        const message = { ...baseHostSpec_TagsEntry } as HostSpec_TagsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseMongodbspec36: object = {};

export const Mongodbspec36 = {
    encode(message: Mongodbspec36, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec36_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec36_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec36_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec36_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec36 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec36 } as Mongodbspec36;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec36_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec36_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodbspec36_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec36_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec36 {
        const message = { ...baseMongodbspec36 } as Mongodbspec36;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec36_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec36_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec36_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec36_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec36): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod ? Mongodbspec36_Mongod.toJSON(message.mongod) : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec36_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos ? Mongodbspec36_Mongos.toJSON(message.mongos) : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec36_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec36>, I>>(object: I): Mongodbspec36 {
        const message = { ...baseMongodbspec36 } as Mongodbspec36;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec36_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec36_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec36_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec36_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec36_Mongod: object = {};

export const Mongodbspec36_Mongod = {
    encode(message: Mongodbspec36_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec36_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec36_Mongod } as Mongodbspec36_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec36_Mongod {
        const message = { ...baseMongodbspec36_Mongod } as Mongodbspec36_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig36.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec36_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongodconfig36.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec36_Mongod>, I>>(
        object: I,
    ): Mongodbspec36_Mongod {
        const message = { ...baseMongodbspec36_Mongod } as Mongodbspec36_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec36_MongoCfg: object = {};

export const Mongodbspec36_MongoCfg = {
    encode(message: Mongodbspec36_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec36_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec36_MongoCfg } as Mongodbspec36_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec36_MongoCfg {
        const message = { ...baseMongodbspec36_MongoCfg } as Mongodbspec36_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig36.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec36_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongocfgconfig36.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec36_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec36_MongoCfg {
        const message = { ...baseMongodbspec36_MongoCfg } as Mongodbspec36_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec36_Mongos: object = {};

export const Mongodbspec36_Mongos = {
    encode(message: Mongodbspec36_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig36.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec36_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec36_Mongos } as Mongodbspec36_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec36_Mongos {
        const message = { ...baseMongodbspec36_Mongos } as Mongodbspec36_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig36.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec36_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongosconfig36.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec36_Mongos>, I>>(
        object: I,
    ): Mongodbspec36_Mongos {
        const message = { ...baseMongodbspec36_Mongos } as Mongodbspec36_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig36.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec36_MongoInfra: object = {};

export const Mongodbspec36_MongoInfra = {
    encode(
        message: Mongodbspec36_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig36.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig36.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec36_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec36_MongoInfra } as Mongodbspec36_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig36.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig36.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec36_MongoInfra {
        const message = { ...baseMongodbspec36_MongoInfra } as Mongodbspec36_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig36.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig36.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec36_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig36.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig36.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec36_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec36_MongoInfra {
        const message = { ...baseMongodbspec36_MongoInfra } as Mongodbspec36_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig36.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig36.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec40: object = {};

export const Mongodbspec40 = {
    encode(message: Mongodbspec40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec40_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec40_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec40_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec40_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec40 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec40 } as Mongodbspec40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec40_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec40_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodbspec40_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec40_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec40 {
        const message = { ...baseMongodbspec40 } as Mongodbspec40;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec40_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec40_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec40_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec40_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec40): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod ? Mongodbspec40_Mongod.toJSON(message.mongod) : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec40_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos ? Mongodbspec40_Mongos.toJSON(message.mongos) : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec40_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec40>, I>>(object: I): Mongodbspec40 {
        const message = { ...baseMongodbspec40 } as Mongodbspec40;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec40_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec40_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec40_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec40_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec40_Mongod: object = {};

export const Mongodbspec40_Mongod = {
    encode(message: Mongodbspec40_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec40_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec40_Mongod } as Mongodbspec40_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec40_Mongod {
        const message = { ...baseMongodbspec40_Mongod } as Mongodbspec40_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig40.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec40_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongodconfig40.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec40_Mongod>, I>>(
        object: I,
    ): Mongodbspec40_Mongod {
        const message = { ...baseMongodbspec40_Mongod } as Mongodbspec40_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec40_MongoCfg: object = {};

export const Mongodbspec40_MongoCfg = {
    encode(message: Mongodbspec40_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec40_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec40_MongoCfg } as Mongodbspec40_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec40_MongoCfg {
        const message = { ...baseMongodbspec40_MongoCfg } as Mongodbspec40_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig40.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec40_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongocfgconfig40.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec40_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec40_MongoCfg {
        const message = { ...baseMongodbspec40_MongoCfg } as Mongodbspec40_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec40_Mongos: object = {};

export const Mongodbspec40_Mongos = {
    encode(message: Mongodbspec40_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig40.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec40_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec40_Mongos } as Mongodbspec40_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec40_Mongos {
        const message = { ...baseMongodbspec40_Mongos } as Mongodbspec40_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig40.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec40_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongosconfig40.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec40_Mongos>, I>>(
        object: I,
    ): Mongodbspec40_Mongos {
        const message = { ...baseMongodbspec40_Mongos } as Mongodbspec40_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig40.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec40_MongoInfra: object = {};

export const Mongodbspec40_MongoInfra = {
    encode(
        message: Mongodbspec40_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig40.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig40.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec40_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec40_MongoInfra } as Mongodbspec40_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig40.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec40_MongoInfra {
        const message = { ...baseMongodbspec40_MongoInfra } as Mongodbspec40_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig40.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig40.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec40_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig40.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig40.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec40_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec40_MongoInfra {
        const message = { ...baseMongodbspec40_MongoInfra } as Mongodbspec40_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig40.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig40.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec42: object = {};

export const Mongodbspec42 = {
    encode(message: Mongodbspec42, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec42_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec42_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec42_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec42_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec42 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec42 } as Mongodbspec42;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec42_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec42_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodbspec42_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec42_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec42 {
        const message = { ...baseMongodbspec42 } as Mongodbspec42;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec42_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec42_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec42_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec42_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec42): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod ? Mongodbspec42_Mongod.toJSON(message.mongod) : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec42_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos ? Mongodbspec42_Mongos.toJSON(message.mongos) : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec42_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec42>, I>>(object: I): Mongodbspec42 {
        const message = { ...baseMongodbspec42 } as Mongodbspec42;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec42_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec42_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec42_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec42_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec42_Mongod: object = {};

export const Mongodbspec42_Mongod = {
    encode(message: Mongodbspec42_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec42_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec42_Mongod } as Mongodbspec42_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec42_Mongod {
        const message = { ...baseMongodbspec42_Mongod } as Mongodbspec42_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig42.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec42_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongodconfig42.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec42_Mongod>, I>>(
        object: I,
    ): Mongodbspec42_Mongod {
        const message = { ...baseMongodbspec42_Mongod } as Mongodbspec42_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec42_MongoCfg: object = {};

export const Mongodbspec42_MongoCfg = {
    encode(message: Mongodbspec42_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec42_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec42_MongoCfg } as Mongodbspec42_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec42_MongoCfg {
        const message = { ...baseMongodbspec42_MongoCfg } as Mongodbspec42_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig42.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec42_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongocfgconfig42.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec42_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec42_MongoCfg {
        const message = { ...baseMongodbspec42_MongoCfg } as Mongodbspec42_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec42_Mongos: object = {};

export const Mongodbspec42_Mongos = {
    encode(message: Mongodbspec42_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig42.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec42_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec42_Mongos } as Mongodbspec42_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec42_Mongos {
        const message = { ...baseMongodbspec42_Mongos } as Mongodbspec42_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig42.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec42_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongosconfig42.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec42_Mongos>, I>>(
        object: I,
    ): Mongodbspec42_Mongos {
        const message = { ...baseMongodbspec42_Mongos } as Mongodbspec42_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig42.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec42_MongoInfra: object = {};

export const Mongodbspec42_MongoInfra = {
    encode(
        message: Mongodbspec42_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig42.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig42.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec42_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec42_MongoInfra } as Mongodbspec42_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig42.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec42_MongoInfra {
        const message = { ...baseMongodbspec42_MongoInfra } as Mongodbspec42_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig42.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig42.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec42_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig42.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig42.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec42_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec42_MongoInfra {
        const message = { ...baseMongodbspec42_MongoInfra } as Mongodbspec42_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig42.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig42.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec44: object = {};

export const Mongodbspec44 = {
    encode(message: Mongodbspec44, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec44_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec44_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec44_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec44_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec44 } as Mongodbspec44;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec44_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec44_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodbspec44_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec44_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44 {
        const message = { ...baseMongodbspec44 } as Mongodbspec44;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec44_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec44_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec44_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec44_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod ? Mongodbspec44_Mongod.toJSON(message.mongod) : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec44_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos ? Mongodbspec44_Mongos.toJSON(message.mongos) : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec44_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44>, I>>(object: I): Mongodbspec44 {
        const message = { ...baseMongodbspec44 } as Mongodbspec44;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec44_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec44_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec44_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec44_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec44_Mongod: object = {};

export const Mongodbspec44_Mongod = {
    encode(message: Mongodbspec44_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec44_Mongod } as Mongodbspec44_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44_Mongod {
        const message = { ...baseMongodbspec44_Mongod } as Mongodbspec44_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig44.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongodconfig44.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44_Mongod>, I>>(
        object: I,
    ): Mongodbspec44_Mongod {
        const message = { ...baseMongodbspec44_Mongod } as Mongodbspec44_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec44_MongoCfg: object = {};

export const Mongodbspec44_MongoCfg = {
    encode(message: Mongodbspec44_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec44_MongoCfg } as Mongodbspec44_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44_MongoCfg {
        const message = { ...baseMongodbspec44_MongoCfg } as Mongodbspec44_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig44.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongocfgconfig44.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec44_MongoCfg {
        const message = { ...baseMongodbspec44_MongoCfg } as Mongodbspec44_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec44_Mongos: object = {};

export const Mongodbspec44_Mongos = {
    encode(message: Mongodbspec44_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig44.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec44_Mongos } as Mongodbspec44_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44_Mongos {
        const message = { ...baseMongodbspec44_Mongos } as Mongodbspec44_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig44.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongosconfig44.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44_Mongos>, I>>(
        object: I,
    ): Mongodbspec44_Mongos {
        const message = { ...baseMongodbspec44_Mongos } as Mongodbspec44_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig44.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec44_MongoInfra: object = {};

export const Mongodbspec44_MongoInfra = {
    encode(
        message: Mongodbspec44_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig44.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig44.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec44_MongoInfra } as Mongodbspec44_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig44.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44_MongoInfra {
        const message = { ...baseMongodbspec44_MongoInfra } as Mongodbspec44_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig44.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig44.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig44.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig44.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec44_MongoInfra {
        const message = { ...baseMongodbspec44_MongoInfra } as Mongodbspec44_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig44.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig44.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec44Enterprise: object = {};

export const Mongodbspec44Enterprise = {
    encode(message: Mongodbspec44Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec44Enterprise_Mongod.encode(
                message.mongod,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec44Enterprise_MongoCfg.encode(
                message.mongocfg,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec44Enterprise_Mongos.encode(
                message.mongos,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec44Enterprise_MongoInfra.encode(
                message.mongoinfra,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec44Enterprise } as Mongodbspec44Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec44Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec44Enterprise_MongoCfg.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.mongos = Mongodbspec44Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec44Enterprise_MongoInfra.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44Enterprise {
        const message = { ...baseMongodbspec44Enterprise } as Mongodbspec44Enterprise;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec44Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec44Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec44Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec44Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44Enterprise): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? Mongodbspec44Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec44Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? Mongodbspec44Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec44Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44Enterprise>, I>>(
        object: I,
    ): Mongodbspec44Enterprise {
        const message = { ...baseMongodbspec44Enterprise } as Mongodbspec44Enterprise;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec44Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec44Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec44Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec44Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec44Enterprise_Mongod: object = {};

export const Mongodbspec44Enterprise_Mongod = {
    encode(
        message: Mongodbspec44Enterprise_Mongod,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44Enterprise_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec44Enterprise_Mongod } as Mongodbspec44Enterprise_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44Enterprise_Mongod {
        const message = { ...baseMongodbspec44Enterprise_Mongod } as Mongodbspec44Enterprise_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig44Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44Enterprise_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongodconfig44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44Enterprise_Mongod>, I>>(
        object: I,
    ): Mongodbspec44Enterprise_Mongod {
        const message = { ...baseMongodbspec44Enterprise_Mongod } as Mongodbspec44Enterprise_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec44Enterprise_MongoCfg: object = {};

export const Mongodbspec44Enterprise_MongoCfg = {
    encode(
        message: Mongodbspec44Enterprise_MongoCfg,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44Enterprise_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodbspec44Enterprise_MongoCfg,
        } as Mongodbspec44Enterprise_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44Enterprise_MongoCfg {
        const message = {
            ...baseMongodbspec44Enterprise_MongoCfg,
        } as Mongodbspec44Enterprise_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig44Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44Enterprise_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongocfgconfig44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44Enterprise_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec44Enterprise_MongoCfg {
        const message = {
            ...baseMongodbspec44Enterprise_MongoCfg,
        } as Mongodbspec44Enterprise_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec44Enterprise_Mongos: object = {};

export const Mongodbspec44Enterprise_Mongos = {
    encode(
        message: Mongodbspec44Enterprise_Mongos,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig44Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44Enterprise_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec44Enterprise_Mongos } as Mongodbspec44Enterprise_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44Enterprise_Mongos {
        const message = { ...baseMongodbspec44Enterprise_Mongos } as Mongodbspec44Enterprise_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig44Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44Enterprise_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongosconfig44Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44Enterprise_Mongos>, I>>(
        object: I,
    ): Mongodbspec44Enterprise_Mongos {
        const message = { ...baseMongodbspec44Enterprise_Mongos } as Mongodbspec44Enterprise_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig44Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec44Enterprise_MongoInfra: object = {};

export const Mongodbspec44Enterprise_MongoInfra = {
    encode(
        message: Mongodbspec44Enterprise_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig44Enterprise.encode(
                message.configMongos,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig44Enterprise.encode(
                message.configMongocfg,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec44Enterprise_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodbspec44Enterprise_MongoInfra,
        } as Mongodbspec44Enterprise_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig44Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec44Enterprise_MongoInfra {
        const message = {
            ...baseMongodbspec44Enterprise_MongoInfra,
        } as Mongodbspec44Enterprise_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig44Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig44Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec44Enterprise_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig44Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig44Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec44Enterprise_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec44Enterprise_MongoInfra {
        const message = {
            ...baseMongodbspec44Enterprise_MongoInfra,
        } as Mongodbspec44Enterprise_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig44Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig44Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec50: object = {};

export const Mongodbspec50 = {
    encode(message: Mongodbspec50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec50_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec50_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec50_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec50_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec50 } as Mongodbspec50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec50_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec50_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodbspec50_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec50_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50 {
        const message = { ...baseMongodbspec50 } as Mongodbspec50;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec50_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec50_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec50_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec50_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod ? Mongodbspec50_Mongod.toJSON(message.mongod) : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec50_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos ? Mongodbspec50_Mongos.toJSON(message.mongos) : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec50_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50>, I>>(object: I): Mongodbspec50 {
        const message = { ...baseMongodbspec50 } as Mongodbspec50;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec50_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec50_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec50_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec50_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec50_Mongod: object = {};

export const Mongodbspec50_Mongod = {
    encode(message: Mongodbspec50_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec50_Mongod } as Mongodbspec50_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50_Mongod {
        const message = { ...baseMongodbspec50_Mongod } as Mongodbspec50_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig50.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongodconfig50.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50_Mongod>, I>>(
        object: I,
    ): Mongodbspec50_Mongod {
        const message = { ...baseMongodbspec50_Mongod } as Mongodbspec50_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec50_MongoCfg: object = {};

export const Mongodbspec50_MongoCfg = {
    encode(message: Mongodbspec50_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec50_MongoCfg } as Mongodbspec50_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50_MongoCfg {
        const message = { ...baseMongodbspec50_MongoCfg } as Mongodbspec50_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig50.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongocfgconfig50.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec50_MongoCfg {
        const message = { ...baseMongodbspec50_MongoCfg } as Mongodbspec50_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec50_Mongos: object = {};

export const Mongodbspec50_Mongos = {
    encode(message: Mongodbspec50_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig50.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec50_Mongos } as Mongodbspec50_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50_Mongos {
        const message = { ...baseMongodbspec50_Mongos } as Mongodbspec50_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig50.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongosconfig50.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50_Mongos>, I>>(
        object: I,
    ): Mongodbspec50_Mongos {
        const message = { ...baseMongodbspec50_Mongos } as Mongodbspec50_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig50.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec50_MongoInfra: object = {};

export const Mongodbspec50_MongoInfra = {
    encode(
        message: Mongodbspec50_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig50.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig50.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec50_MongoInfra } as Mongodbspec50_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50_MongoInfra {
        const message = { ...baseMongodbspec50_MongoInfra } as Mongodbspec50_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig50.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig50.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig50.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig50.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec50_MongoInfra {
        const message = { ...baseMongodbspec50_MongoInfra } as Mongodbspec50_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig50.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig50.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec50Enterprise: object = {};

export const Mongodbspec50Enterprise = {
    encode(message: Mongodbspec50Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec50Enterprise_Mongod.encode(
                message.mongod,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec50Enterprise_MongoCfg.encode(
                message.mongocfg,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec50Enterprise_Mongos.encode(
                message.mongos,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec50Enterprise_MongoInfra.encode(
                message.mongoinfra,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec50Enterprise } as Mongodbspec50Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec50Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec50Enterprise_MongoCfg.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.mongos = Mongodbspec50Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec50Enterprise_MongoInfra.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50Enterprise {
        const message = { ...baseMongodbspec50Enterprise } as Mongodbspec50Enterprise;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec50Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec50Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec50Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec50Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50Enterprise): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? Mongodbspec50Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec50Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? Mongodbspec50Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec50Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50Enterprise>, I>>(
        object: I,
    ): Mongodbspec50Enterprise {
        const message = { ...baseMongodbspec50Enterprise } as Mongodbspec50Enterprise;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec50Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec50Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec50Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec50Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec50Enterprise_Mongod: object = {};

export const Mongodbspec50Enterprise_Mongod = {
    encode(
        message: Mongodbspec50Enterprise_Mongod,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50Enterprise_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec50Enterprise_Mongod } as Mongodbspec50Enterprise_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50Enterprise_Mongod {
        const message = { ...baseMongodbspec50Enterprise_Mongod } as Mongodbspec50Enterprise_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig50Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50Enterprise_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongodconfig50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50Enterprise_Mongod>, I>>(
        object: I,
    ): Mongodbspec50Enterprise_Mongod {
        const message = { ...baseMongodbspec50Enterprise_Mongod } as Mongodbspec50Enterprise_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec50Enterprise_MongoCfg: object = {};

export const Mongodbspec50Enterprise_MongoCfg = {
    encode(
        message: Mongodbspec50Enterprise_MongoCfg,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50Enterprise_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodbspec50Enterprise_MongoCfg,
        } as Mongodbspec50Enterprise_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50Enterprise_MongoCfg {
        const message = {
            ...baseMongodbspec50Enterprise_MongoCfg,
        } as Mongodbspec50Enterprise_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig50Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50Enterprise_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongocfgconfig50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50Enterprise_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec50Enterprise_MongoCfg {
        const message = {
            ...baseMongodbspec50Enterprise_MongoCfg,
        } as Mongodbspec50Enterprise_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec50Enterprise_Mongos: object = {};

export const Mongodbspec50Enterprise_Mongos = {
    encode(
        message: Mongodbspec50Enterprise_Mongos,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig50Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50Enterprise_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec50Enterprise_Mongos } as Mongodbspec50Enterprise_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50Enterprise_Mongos {
        const message = { ...baseMongodbspec50Enterprise_Mongos } as Mongodbspec50Enterprise_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig50Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50Enterprise_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongosconfig50Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50Enterprise_Mongos>, I>>(
        object: I,
    ): Mongodbspec50Enterprise_Mongos {
        const message = { ...baseMongodbspec50Enterprise_Mongos } as Mongodbspec50Enterprise_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig50Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec50Enterprise_MongoInfra: object = {};

export const Mongodbspec50Enterprise_MongoInfra = {
    encode(
        message: Mongodbspec50Enterprise_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig50Enterprise.encode(
                message.configMongos,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig50Enterprise.encode(
                message.configMongocfg,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec50Enterprise_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodbspec50Enterprise_MongoInfra,
        } as Mongodbspec50Enterprise_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig50Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec50Enterprise_MongoInfra {
        const message = {
            ...baseMongodbspec50Enterprise_MongoInfra,
        } as Mongodbspec50Enterprise_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig50Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig50Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec50Enterprise_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig50Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig50Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec50Enterprise_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec50Enterprise_MongoInfra {
        const message = {
            ...baseMongodbspec50Enterprise_MongoInfra,
        } as Mongodbspec50Enterprise_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig50Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig50Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec60: object = {};

export const Mongodbspec60 = {
    encode(message: Mongodbspec60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec60_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec60_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec60_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec60_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec60 } as Mongodbspec60;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec60_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec60_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = Mongodbspec60_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec60_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60 {
        const message = { ...baseMongodbspec60 } as Mongodbspec60;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec60_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec60_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec60_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec60_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod ? Mongodbspec60_Mongod.toJSON(message.mongod) : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec60_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos ? Mongodbspec60_Mongos.toJSON(message.mongos) : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec60_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60>, I>>(object: I): Mongodbspec60 {
        const message = { ...baseMongodbspec60 } as Mongodbspec60;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec60_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec60_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec60_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec60_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec60_Mongod: object = {};

export const Mongodbspec60_Mongod = {
    encode(message: Mongodbspec60_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec60_Mongod } as Mongodbspec60_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60_Mongod {
        const message = { ...baseMongodbspec60_Mongod } as Mongodbspec60_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig60.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongodconfig60.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60_Mongod>, I>>(
        object: I,
    ): Mongodbspec60_Mongod {
        const message = { ...baseMongodbspec60_Mongod } as Mongodbspec60_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec60_MongoCfg: object = {};

export const Mongodbspec60_MongoCfg = {
    encode(message: Mongodbspec60_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec60_MongoCfg } as Mongodbspec60_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60_MongoCfg {
        const message = { ...baseMongodbspec60_MongoCfg } as Mongodbspec60_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig60.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongocfgconfig60.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec60_MongoCfg {
        const message = { ...baseMongodbspec60_MongoCfg } as Mongodbspec60_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec60_Mongos: object = {};

export const Mongodbspec60_Mongos = {
    encode(message: Mongodbspec60_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig60.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec60_Mongos } as Mongodbspec60_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60_Mongos {
        const message = { ...baseMongodbspec60_Mongos } as Mongodbspec60_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig60.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? Mongosconfig60.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60_Mongos>, I>>(
        object: I,
    ): Mongodbspec60_Mongos {
        const message = { ...baseMongodbspec60_Mongos } as Mongodbspec60_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig60.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec60_MongoInfra: object = {};

export const Mongodbspec60_MongoInfra = {
    encode(
        message: Mongodbspec60_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig60.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig60.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec60_MongoInfra } as Mongodbspec60_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60_MongoInfra {
        const message = { ...baseMongodbspec60_MongoInfra } as Mongodbspec60_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig60.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig60.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig60.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig60.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec60_MongoInfra {
        const message = { ...baseMongodbspec60_MongoInfra } as Mongodbspec60_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig60.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig60.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec60Enterprise: object = {};

export const Mongodbspec60Enterprise = {
    encode(message: Mongodbspec60Enterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            Mongodbspec60Enterprise_Mongod.encode(
                message.mongod,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.mongocfg !== undefined) {
            Mongodbspec60Enterprise_MongoCfg.encode(
                message.mongocfg,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.mongos !== undefined) {
            Mongodbspec60Enterprise_Mongos.encode(
                message.mongos,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            Mongodbspec60Enterprise_MongoInfra.encode(
                message.mongoinfra,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec60Enterprise } as Mongodbspec60Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = Mongodbspec60Enterprise_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = Mongodbspec60Enterprise_MongoCfg.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.mongos = Mongodbspec60Enterprise_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = Mongodbspec60Enterprise_MongoInfra.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60Enterprise {
        const message = { ...baseMongodbspec60Enterprise } as Mongodbspec60Enterprise;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec60Enterprise_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec60Enterprise_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec60Enterprise_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec60Enterprise_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60Enterprise): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod
                ? Mongodbspec60Enterprise_Mongod.toJSON(message.mongod)
                : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? Mongodbspec60Enterprise_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos
                ? Mongodbspec60Enterprise_Mongos.toJSON(message.mongos)
                : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? Mongodbspec60Enterprise_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60Enterprise>, I>>(
        object: I,
    ): Mongodbspec60Enterprise {
        const message = { ...baseMongodbspec60Enterprise } as Mongodbspec60Enterprise;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? Mongodbspec60Enterprise_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? Mongodbspec60Enterprise_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? Mongodbspec60Enterprise_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? Mongodbspec60Enterprise_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbspec60Enterprise_Mongod: object = {};

export const Mongodbspec60Enterprise_Mongod = {
    encode(
        message: Mongodbspec60Enterprise_Mongod,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongodconfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60Enterprise_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec60Enterprise_Mongod } as Mongodbspec60Enterprise_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongodconfig60Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60Enterprise_Mongod {
        const message = { ...baseMongodbspec60Enterprise_Mongod } as Mongodbspec60Enterprise_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig60Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60Enterprise_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongodconfig60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60Enterprise_Mongod>, I>>(
        object: I,
    ): Mongodbspec60Enterprise_Mongod {
        const message = { ...baseMongodbspec60Enterprise_Mongod } as Mongodbspec60Enterprise_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongodconfig60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec60Enterprise_MongoCfg: object = {};

export const Mongodbspec60Enterprise_MongoCfg = {
    encode(
        message: Mongodbspec60Enterprise_MongoCfg,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongocfgconfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60Enterprise_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodbspec60Enterprise_MongoCfg,
        } as Mongodbspec60Enterprise_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongocfgconfig60Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60Enterprise_MongoCfg {
        const message = {
            ...baseMongodbspec60Enterprise_MongoCfg,
        } as Mongodbspec60Enterprise_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig60Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60Enterprise_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongocfgconfig60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60Enterprise_MongoCfg>, I>>(
        object: I,
    ): Mongodbspec60Enterprise_MongoCfg {
        const message = {
            ...baseMongodbspec60Enterprise_MongoCfg,
        } as Mongodbspec60Enterprise_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongocfgconfig60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec60Enterprise_Mongos: object = {};

export const Mongodbspec60Enterprise_Mongos = {
    encode(
        message: Mongodbspec60Enterprise_Mongos,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.config !== undefined) {
            Mongosconfig60Enterprise.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60Enterprise_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbspec60Enterprise_Mongos } as Mongodbspec60Enterprise_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Mongosconfig60Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60Enterprise_Mongos {
        const message = { ...baseMongodbspec60Enterprise_Mongos } as Mongodbspec60Enterprise_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig60Enterprise.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60Enterprise_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? Mongosconfig60Enterprise.toJSON(message.config)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60Enterprise_Mongos>, I>>(
        object: I,
    ): Mongodbspec60Enterprise_Mongos {
        const message = { ...baseMongodbspec60Enterprise_Mongos } as Mongodbspec60Enterprise_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? Mongosconfig60Enterprise.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbspec60Enterprise_MongoInfra: object = {};

export const Mongodbspec60Enterprise_MongoInfra = {
    encode(
        message: Mongodbspec60Enterprise_MongoInfra,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configMongos !== undefined) {
            Mongosconfig60Enterprise.encode(
                message.configMongos,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            Mongocfgconfig60Enterprise.encode(
                message.configMongocfg,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodbspec60Enterprise_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodbspec60Enterprise_MongoInfra,
        } as Mongodbspec60Enterprise_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = Mongosconfig60Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = Mongocfgconfig60Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodbspec60Enterprise_MongoInfra {
        const message = {
            ...baseMongodbspec60Enterprise_MongoInfra,
        } as Mongodbspec60Enterprise_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig60Enterprise.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig60Enterprise.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: Mongodbspec60Enterprise_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? Mongosconfig60Enterprise.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? Mongocfgconfig60Enterprise.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodbspec60Enterprise_MongoInfra>, I>>(
        object: I,
    ): Mongodbspec60Enterprise_MongoInfra {
        const message = {
            ...baseMongodbspec60Enterprise_MongoInfra,
        } as Mongodbspec60Enterprise_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? Mongosconfig60Enterprise.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? Mongocfgconfig60Enterprise.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbSpec: object = {};

export const MongodbSpec = {
    encode(message: MongodbSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mongod !== undefined) {
            MongodbSpec_Mongod.encode(message.mongod, writer.uint32(10).fork()).ldelim();
        }
        if (message.mongocfg !== undefined) {
            MongodbSpec_MongoCfg.encode(message.mongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongos !== undefined) {
            MongodbSpec_Mongos.encode(message.mongos, writer.uint32(26).fork()).ldelim();
        }
        if (message.mongoinfra !== undefined) {
            MongodbSpec_MongoInfra.encode(message.mongoinfra, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbSpec } as MongodbSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mongod = MongodbSpec_Mongod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mongocfg = MongodbSpec_MongoCfg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongos = MongodbSpec_Mongos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongoinfra = MongodbSpec_MongoInfra.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodbSpec {
        const message = { ...baseMongodbSpec } as MongodbSpec;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? MongodbSpec_Mongod.fromJSON(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? MongodbSpec_MongoCfg.fromJSON(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? MongodbSpec_Mongos.fromJSON(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? MongodbSpec_MongoInfra.fromJSON(object.mongoinfra)
                : undefined;
        return message;
    },

    toJSON(message: MongodbSpec): unknown {
        const obj: any = {};
        message.mongod !== undefined &&
            (obj.mongod = message.mongod ? MongodbSpec_Mongod.toJSON(message.mongod) : undefined);
        message.mongocfg !== undefined &&
            (obj.mongocfg = message.mongocfg
                ? MongodbSpec_MongoCfg.toJSON(message.mongocfg)
                : undefined);
        message.mongos !== undefined &&
            (obj.mongos = message.mongos ? MongodbSpec_Mongos.toJSON(message.mongos) : undefined);
        message.mongoinfra !== undefined &&
            (obj.mongoinfra = message.mongoinfra
                ? MongodbSpec_MongoInfra.toJSON(message.mongoinfra)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodbSpec>, I>>(object: I): MongodbSpec {
        const message = { ...baseMongodbSpec } as MongodbSpec;
        message.mongod =
            object.mongod !== undefined && object.mongod !== null
                ? MongodbSpec_Mongod.fromPartial(object.mongod)
                : undefined;
        message.mongocfg =
            object.mongocfg !== undefined && object.mongocfg !== null
                ? MongodbSpec_MongoCfg.fromPartial(object.mongocfg)
                : undefined;
        message.mongos =
            object.mongos !== undefined && object.mongos !== null
                ? MongodbSpec_Mongos.fromPartial(object.mongos)
                : undefined;
        message.mongoinfra =
            object.mongoinfra !== undefined && object.mongoinfra !== null
                ? MongodbSpec_MongoInfra.fromPartial(object.mongoinfra)
                : undefined;
        return message;
    },
};

const baseMongodbSpec_Mongod: object = {};

export const MongodbSpec_Mongod = {
    encode(message: MongodbSpec_Mongod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            MongodConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec_Mongod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbSpec_Mongod } as MongodbSpec_Mongod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = MongodConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodbSpec_Mongod {
        const message = { ...baseMongodbSpec_Mongod } as MongodbSpec_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? MongodConfig.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: MongodbSpec_Mongod): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? MongodConfig.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodbSpec_Mongod>, I>>(
        object: I,
    ): MongodbSpec_Mongod {
        const message = { ...baseMongodbSpec_Mongod } as MongodbSpec_Mongod;
        message.config =
            object.config !== undefined && object.config !== null
                ? MongodConfig.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbSpec_MongoCfg: object = {};

export const MongodbSpec_MongoCfg = {
    encode(message: MongodbSpec_MongoCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            MongoCfgConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec_MongoCfg {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbSpec_MongoCfg } as MongodbSpec_MongoCfg;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = MongoCfgConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodbSpec_MongoCfg {
        const message = { ...baseMongodbSpec_MongoCfg } as MongodbSpec_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? MongoCfgConfig.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: MongodbSpec_MongoCfg): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? MongoCfgConfig.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodbSpec_MongoCfg>, I>>(
        object: I,
    ): MongodbSpec_MongoCfg {
        const message = { ...baseMongodbSpec_MongoCfg } as MongodbSpec_MongoCfg;
        message.config =
            object.config !== undefined && object.config !== null
                ? MongoCfgConfig.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbSpec_Mongos: object = {};

export const MongodbSpec_Mongos = {
    encode(message: MongodbSpec_Mongos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.config !== undefined) {
            MongosConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec_Mongos {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbSpec_Mongos } as MongodbSpec_Mongos;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = MongosConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodbSpec_Mongos {
        const message = { ...baseMongodbSpec_Mongos } as MongodbSpec_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? MongosConfig.fromJSON(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: MongodbSpec_Mongos): unknown {
        const obj: any = {};
        message.config !== undefined &&
            (obj.config = message.config ? MongosConfig.toJSON(message.config) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodbSpec_Mongos>, I>>(
        object: I,
    ): MongodbSpec_Mongos {
        const message = { ...baseMongodbSpec_Mongos } as MongodbSpec_Mongos;
        message.config =
            object.config !== undefined && object.config !== null
                ? MongosConfig.fromPartial(object.config)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseMongodbSpec_MongoInfra: object = {};

export const MongodbSpec_MongoInfra = {
    encode(message: MongodbSpec_MongoInfra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.configMongos !== undefined) {
            MongosConfig.encode(message.configMongos, writer.uint32(10).fork()).ldelim();
        }
        if (message.configMongocfg !== undefined) {
            MongoCfgConfig.encode(message.configMongocfg, writer.uint32(18).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.diskSizeAutoscaling !== undefined) {
            DiskSizeAutoscaling.encode(
                message.diskSizeAutoscaling,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodbSpec_MongoInfra {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodbSpec_MongoInfra } as MongodbSpec_MongoInfra;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configMongos = MongosConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.configMongocfg = MongoCfgConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodbSpec_MongoInfra {
        const message = { ...baseMongodbSpec_MongoInfra } as MongodbSpec_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? MongosConfig.fromJSON(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? MongoCfgConfig.fromJSON(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },

    toJSON(message: MongodbSpec_MongoInfra): unknown {
        const obj: any = {};
        message.configMongos !== undefined &&
            (obj.configMongos = message.configMongos
                ? MongosConfig.toJSON(message.configMongos)
                : undefined);
        message.configMongocfg !== undefined &&
            (obj.configMongocfg = message.configMongocfg
                ? MongoCfgConfig.toJSON(message.configMongocfg)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.diskSizeAutoscaling !== undefined &&
            (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
                ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodbSpec_MongoInfra>, I>>(
        object: I,
    ): MongodbSpec_MongoInfra {
        const message = { ...baseMongodbSpec_MongoInfra } as MongodbSpec_MongoInfra;
        message.configMongos =
            object.configMongos !== undefined && object.configMongos !== null
                ? MongosConfig.fromPartial(object.configMongos)
                : undefined;
        message.configMongocfg =
            object.configMongocfg !== undefined && object.configMongocfg !== null
                ? MongoCfgConfig.fromPartial(object.configMongocfg)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.diskSizeAutoscaling =
            object.diskSizeAutoscaling !== undefined && object.diskSizeAutoscaling !== null
                ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
                : undefined;
        return message;
    },
};

const baseConfigSpec: object = { version: '', featureCompatibilityVersion: '' };

export const ConfigSpec = {
    encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.featureCompatibilityVersion !== '') {
            writer.uint32(42).string(message.featureCompatibilityVersion);
        }
        if (message.mongodbSpec36 !== undefined) {
            Mongodbspec36.encode(message.mongodbSpec36, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongodbSpec40 !== undefined) {
            Mongodbspec40.encode(message.mongodbSpec40, writer.uint32(34).fork()).ldelim();
        }
        if (message.mongodbSpec42 !== undefined) {
            Mongodbspec42.encode(message.mongodbSpec42, writer.uint32(58).fork()).ldelim();
        }
        if (message.mongodbSpec44 !== undefined) {
            Mongodbspec44.encode(message.mongodbSpec44, writer.uint32(66).fork()).ldelim();
        }
        if (message.mongodbSpec50 !== undefined) {
            Mongodbspec50.encode(message.mongodbSpec50, writer.uint32(82).fork()).ldelim();
        }
        if (message.mongodbSpec60 !== undefined) {
            Mongodbspec60.encode(message.mongodbSpec60, writer.uint32(114).fork()).ldelim();
        }
        if (message.mongodbSpec44Enterprise !== undefined) {
            Mongodbspec44Enterprise.encode(
                message.mongodbSpec44Enterprise,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.mongodbSpec50Enterprise !== undefined) {
            Mongodbspec50Enterprise.encode(
                message.mongodbSpec50Enterprise,
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.mongodbSpec60Enterprise !== undefined) {
            Mongodbspec60Enterprise.encode(
                message.mongodbSpec60Enterprise,
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            TimeOfDay.encode(message.backupWindowStart, writer.uint32(26).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            Int64Value.encode(
                { value: message.backupRetainPeriodDays! },
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.performanceDiagnostics !== undefined) {
            PerformanceDiagnosticsConfig.encode(
                message.performanceDiagnostics,
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.access !== undefined) {
            Access.encode(message.access, writer.uint32(50).fork()).ldelim();
        }
        if (message.mongodb !== undefined) {
            MongodbSpec.encode(message.mongodb, writer.uint32(162).fork()).ldelim();
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
                case 5:
                    message.featureCompatibilityVersion = reader.string();
                    break;
                case 2:
                    message.mongodbSpec36 = Mongodbspec36.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mongodbSpec40 = Mongodbspec40.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.mongodbSpec42 = Mongodbspec42.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.mongodbSpec44 = Mongodbspec44.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.mongodbSpec50 = Mongodbspec50.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.mongodbSpec60 = Mongodbspec60.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.mongodbSpec44Enterprise = Mongodbspec44Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.mongodbSpec50Enterprise = Mongodbspec50Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 15:
                    message.mongodbSpec60Enterprise = Mongodbspec60Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.backupRetainPeriodDays = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 13:
                    message.performanceDiagnostics = PerformanceDiagnosticsConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.access = Access.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.mongodb = MongodbSpec.decode(reader, reader.uint32());
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
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        message.featureCompatibilityVersion =
            object.featureCompatibilityVersion !== undefined &&
            object.featureCompatibilityVersion !== null
                ? String(object.featureCompatibilityVersion)
                : '';
        message.mongodbSpec36 =
            object.mongodbSpec_3_6 !== undefined && object.mongodbSpec_3_6 !== null
                ? Mongodbspec36.fromJSON(object.mongodbSpec_3_6)
                : undefined;
        message.mongodbSpec40 =
            object.mongodbSpec_4_0 !== undefined && object.mongodbSpec_4_0 !== null
                ? Mongodbspec40.fromJSON(object.mongodbSpec_4_0)
                : undefined;
        message.mongodbSpec42 =
            object.mongodbSpec_4_2 !== undefined && object.mongodbSpec_4_2 !== null
                ? Mongodbspec42.fromJSON(object.mongodbSpec_4_2)
                : undefined;
        message.mongodbSpec44 =
            object.mongodbSpec_4_4 !== undefined && object.mongodbSpec_4_4 !== null
                ? Mongodbspec44.fromJSON(object.mongodbSpec_4_4)
                : undefined;
        message.mongodbSpec50 =
            object.mongodbSpec_5_0 !== undefined && object.mongodbSpec_5_0 !== null
                ? Mongodbspec50.fromJSON(object.mongodbSpec_5_0)
                : undefined;
        message.mongodbSpec60 =
            object.mongodbSpec_6_0 !== undefined && object.mongodbSpec_6_0 !== null
                ? Mongodbspec60.fromJSON(object.mongodbSpec_6_0)
                : undefined;
        message.mongodbSpec44Enterprise =
            object.mongodbSpec_4_4_enterprise !== undefined &&
            object.mongodbSpec_4_4_enterprise !== null
                ? Mongodbspec44Enterprise.fromJSON(object.mongodbSpec_4_4_enterprise)
                : undefined;
        message.mongodbSpec50Enterprise =
            object.mongodbSpec_5_0_enterprise !== undefined &&
            object.mongodbSpec_5_0_enterprise !== null
                ? Mongodbspec50Enterprise.fromJSON(object.mongodbSpec_5_0_enterprise)
                : undefined;
        message.mongodbSpec60Enterprise =
            object.mongodbSpec_6_0_enterprise !== undefined &&
            object.mongodbSpec_6_0_enterprise !== null
                ? Mongodbspec60Enterprise.fromJSON(object.mongodbSpec_6_0_enterprise)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined && object.backupWindowStart !== null
                ? TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays =
            object.backupRetainPeriodDays !== undefined && object.backupRetainPeriodDays !== null
                ? Number(object.backupRetainPeriodDays)
                : undefined;
        message.performanceDiagnostics =
            object.performanceDiagnostics !== undefined && object.performanceDiagnostics !== null
                ? PerformanceDiagnosticsConfig.fromJSON(object.performanceDiagnostics)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? Access.fromJSON(object.access)
                : undefined;
        message.mongodb =
            object.mongodb !== undefined && object.mongodb !== null
                ? MongodbSpec.fromJSON(object.mongodb)
                : undefined;
        return message;
    },

    toJSON(message: ConfigSpec): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.featureCompatibilityVersion !== undefined &&
            (obj.featureCompatibilityVersion = message.featureCompatibilityVersion);
        message.mongodbSpec36 !== undefined &&
            (obj.mongodbSpec_3_6 = message.mongodbSpec36
                ? Mongodbspec36.toJSON(message.mongodbSpec36)
                : undefined);
        message.mongodbSpec40 !== undefined &&
            (obj.mongodbSpec_4_0 = message.mongodbSpec40
                ? Mongodbspec40.toJSON(message.mongodbSpec40)
                : undefined);
        message.mongodbSpec42 !== undefined &&
            (obj.mongodbSpec_4_2 = message.mongodbSpec42
                ? Mongodbspec42.toJSON(message.mongodbSpec42)
                : undefined);
        message.mongodbSpec44 !== undefined &&
            (obj.mongodbSpec_4_4 = message.mongodbSpec44
                ? Mongodbspec44.toJSON(message.mongodbSpec44)
                : undefined);
        message.mongodbSpec50 !== undefined &&
            (obj.mongodbSpec_5_0 = message.mongodbSpec50
                ? Mongodbspec50.toJSON(message.mongodbSpec50)
                : undefined);
        message.mongodbSpec60 !== undefined &&
            (obj.mongodbSpec_6_0 = message.mongodbSpec60
                ? Mongodbspec60.toJSON(message.mongodbSpec60)
                : undefined);
        message.mongodbSpec44Enterprise !== undefined &&
            (obj.mongodbSpec_4_4_enterprise = message.mongodbSpec44Enterprise
                ? Mongodbspec44Enterprise.toJSON(message.mongodbSpec44Enterprise)
                : undefined);
        message.mongodbSpec50Enterprise !== undefined &&
            (obj.mongodbSpec_5_0_enterprise = message.mongodbSpec50Enterprise
                ? Mongodbspec50Enterprise.toJSON(message.mongodbSpec50Enterprise)
                : undefined);
        message.mongodbSpec60Enterprise !== undefined &&
            (obj.mongodbSpec_6_0_enterprise = message.mongodbSpec60Enterprise
                ? Mongodbspec60Enterprise.toJSON(message.mongodbSpec60Enterprise)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
        message.performanceDiagnostics !== undefined &&
            (obj.performanceDiagnostics = message.performanceDiagnostics
                ? PerformanceDiagnosticsConfig.toJSON(message.performanceDiagnostics)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access ? Access.toJSON(message.access) : undefined);
        message.mongodb !== undefined &&
            (obj.mongodb = message.mongodb ? MongodbSpec.toJSON(message.mongodb) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConfigSpec>, I>>(object: I): ConfigSpec {
        const message = { ...baseConfigSpec } as ConfigSpec;
        message.version = object.version ?? '';
        message.featureCompatibilityVersion = object.featureCompatibilityVersion ?? '';
        message.mongodbSpec36 =
            object.mongodbSpec36 !== undefined && object.mongodbSpec36 !== null
                ? Mongodbspec36.fromPartial(object.mongodbSpec36)
                : undefined;
        message.mongodbSpec40 =
            object.mongodbSpec40 !== undefined && object.mongodbSpec40 !== null
                ? Mongodbspec40.fromPartial(object.mongodbSpec40)
                : undefined;
        message.mongodbSpec42 =
            object.mongodbSpec42 !== undefined && object.mongodbSpec42 !== null
                ? Mongodbspec42.fromPartial(object.mongodbSpec42)
                : undefined;
        message.mongodbSpec44 =
            object.mongodbSpec44 !== undefined && object.mongodbSpec44 !== null
                ? Mongodbspec44.fromPartial(object.mongodbSpec44)
                : undefined;
        message.mongodbSpec50 =
            object.mongodbSpec50 !== undefined && object.mongodbSpec50 !== null
                ? Mongodbspec50.fromPartial(object.mongodbSpec50)
                : undefined;
        message.mongodbSpec60 =
            object.mongodbSpec60 !== undefined && object.mongodbSpec60 !== null
                ? Mongodbspec60.fromPartial(object.mongodbSpec60)
                : undefined;
        message.mongodbSpec44Enterprise =
            object.mongodbSpec44Enterprise !== undefined && object.mongodbSpec44Enterprise !== null
                ? Mongodbspec44Enterprise.fromPartial(object.mongodbSpec44Enterprise)
                : undefined;
        message.mongodbSpec50Enterprise =
            object.mongodbSpec50Enterprise !== undefined && object.mongodbSpec50Enterprise !== null
                ? Mongodbspec50Enterprise.fromPartial(object.mongodbSpec50Enterprise)
                : undefined;
        message.mongodbSpec60Enterprise =
            object.mongodbSpec60Enterprise !== undefined && object.mongodbSpec60Enterprise !== null
                ? Mongodbspec60Enterprise.fromPartial(object.mongodbSpec60Enterprise)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined && object.backupWindowStart !== null
                ? TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
        message.performanceDiagnostics =
            object.performanceDiagnostics !== undefined && object.performanceDiagnostics !== null
                ? PerformanceDiagnosticsConfig.fromPartial(object.performanceDiagnostics)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? Access.fromPartial(object.access)
                : undefined;
        message.mongodb =
            object.mongodb !== undefined && object.mongodb !== null
                ? MongodbSpec.fromPartial(object.mongodb)
                : undefined;
        return message;
    },
};

/** A set of methods for managing MongoDB Cluster resources. */
export const ClusterServiceService = {
    /**
     * Returns the specified MongoDB Cluster resource.
     *
     * To get the list of available MongoDB Cluster resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterRequest) =>
            Buffer.from(GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
        responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    /**
     * Retrieves the list of MongoDB Cluster resources that belong
     * to the specified folder.
     */
    list: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClustersRequest) =>
            Buffer.from(ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
        responseSerialize: (value: ListClustersResponse) =>
            Buffer.from(ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
    },
    /** Creates a MongoDB cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateClusterRequest) =>
            Buffer.from(CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified MongoDB cluster. */
    update: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterRequest) =>
            Buffer.from(UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified MongoDB cluster. */
    delete: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterRequest) =>
            Buffer.from(DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Start the specified MongoDB cluster. */
    start: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartClusterRequest) =>
            Buffer.from(StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stop the specified MongoDB cluster. */
    stop: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopClusterRequest) =>
            Buffer.from(StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Moves the specified MongoDB cluster to the specified folder. */
    move: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveClusterRequest) =>
            Buffer.from(MoveClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates a backup for the specified MongoDB cluster. */
    backup: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Backup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BackupClusterRequest) =>
            Buffer.from(BackupClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BackupClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates a new MongoDB cluster using the specified backup. */
    restore: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/Restore',
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
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/RescheduleMaintenance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RescheduleMaintenanceRequest) =>
            Buffer.from(RescheduleMaintenanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves logs for the specified MongoDB cluster. */
    listLogs: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/ListLogs',
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
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/StreamLogs',
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
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterOperationsRequest) =>
            Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
        responseSerialize: (value: ListClusterOperationsResponse) =>
            Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves the list of available backups for the specified MongoDB cluster. */
    listBackups: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/ListBackups',
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
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/ListHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterHostsRequest) =>
            Buffer.from(ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterHostsRequest.decode(value),
        responseSerialize: (value: ListClusterHostsResponse) =>
            Buffer.from(ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterHostsResponse.decode(value),
    },
    /** Creates new hosts for a cluster. */
    addHosts: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/AddHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddClusterHostsRequest) =>
            Buffer.from(AddClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddClusterHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterHostsRequest) =>
            Buffer.from(DeleteClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified parameters for the host. */
    updateHosts: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/UpdateHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterHostsRequest) =>
            Buffer.from(UpdateClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateClusterHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Enables sharding for the cluster:
     * creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
     * that would support adding and using shards in the cluster.
     */
    enableSharding: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/EnableSharding',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: EnableClusterShardingRequest) =>
            Buffer.from(EnableClusterShardingRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => EnableClusterShardingRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified shard. */
    getShard: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/GetShard',
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
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/ListShards',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterShardsRequest) =>
            Buffer.from(ListClusterShardsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterShardsRequest.decode(value),
        responseSerialize: (value: ListClusterShardsResponse) =>
            Buffer.from(ListClusterShardsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterShardsResponse.decode(value),
    },
    /** Creates a new shard. */
    addShard: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/AddShard',
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
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteShard',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterShardRequest) =>
            Buffer.from(DeleteClusterShardRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterShardRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Resetups hosts. */
    resetupHosts: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/ResetupHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResetupHostsRequest) =>
            Buffer.from(ResetupHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResetupHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Restarts hosts. */
    restartHosts: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/RestartHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RestartHostsRequest) =>
            Buffer.from(RestartHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RestartHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stepdown hosts. */
    stepdownHosts: {
        path: '/yandex.cloud.mdb.mongodb.v1.ClusterService/StepdownHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StepdownHostsRequest) =>
            Buffer.from(StepdownHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StepdownHostsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified MongoDB Cluster resource.
     *
     * To get the list of available MongoDB Cluster resources, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /**
     * Retrieves the list of MongoDB Cluster resources that belong
     * to the specified folder.
     */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a MongoDB cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified MongoDB cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified MongoDB cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Start the specified MongoDB cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stop the specified MongoDB cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Moves the specified MongoDB cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Creates a backup for the specified MongoDB cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new MongoDB cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
    /** Retrieves logs for the specified MongoDB cluster. */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of available backups for the specified MongoDB cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Creates new hosts for a cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
    /** Updates the specified parameters for the host. */
    updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
    /**
     * Enables sharding for the cluster:
     * creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
     * that would support adding and using shards in the cluster.
     */
    enableSharding: handleUnaryCall<EnableClusterShardingRequest, Operation>;
    /** Returns the specified shard. */
    getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
    /** Retrieves a list of shards. */
    listShards: handleUnaryCall<ListClusterShardsRequest, ListClusterShardsResponse>;
    /** Creates a new shard. */
    addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
    /** Deletes the specified shard. */
    deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
    /** Resetups hosts. */
    resetupHosts: handleUnaryCall<ResetupHostsRequest, Operation>;
    /** Restarts hosts. */
    restartHosts: handleUnaryCall<RestartHostsRequest, Operation>;
    /** Stepdown hosts. */
    stepdownHosts: handleUnaryCall<StepdownHostsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified MongoDB Cluster resource.
     *
     * To get the list of available MongoDB Cluster resources, make a [List] request.
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
    /**
     * Retrieves the list of MongoDB Cluster resources that belong
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
    /** Creates a MongoDB cluster in the specified folder. */
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
    /** Updates the specified MongoDB cluster. */
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
    /** Deletes the specified MongoDB cluster. */
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
    /** Start the specified MongoDB cluster. */
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
    /** Stop the specified MongoDB cluster. */
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
    /** Moves the specified MongoDB cluster to the specified folder. */
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
    /** Creates a backup for the specified MongoDB cluster. */
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
    /** Creates a new MongoDB cluster using the specified backup. */
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
    /** Retrieves logs for the specified MongoDB cluster. */
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
    /** Retrieves the list of available backups for the specified MongoDB cluster. */
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
    /** Updates the specified parameters for the host. */
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
    /**
     * Enables sharding for the cluster:
     * creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
     * that would support adding and using shards in the cluster.
     */
    enableSharding(
        request: EnableClusterShardingRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    enableSharding(
        request: EnableClusterShardingRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    enableSharding(
        request: EnableClusterShardingRequest,
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
    /** Restarts hosts. */
    restartHosts(
        request: RestartHostsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    restartHosts(
        request: RestartHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    restartHosts(
        request: RestartHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Stepdown hosts. */
    stepdownHosts(
        request: StepdownHostsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stepdownHosts(
        request: StepdownHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stepdownHosts(
        request: StepdownHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
    ClusterServiceService,
    'yandex.cloud.mdb.mongodb.v1.ClusterService',
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
