import {
    ServiceClientConstructor,
    ServiceDefinition,
} from '@grpc/grpc-js';
import { GeneratedServiceClientCtor } from './types';

interface ServiceEndpoint {
    serviceIds: string[];
    endpoint: string;
}

type ServiceEndpointsList = ServiceEndpoint[];

// @see https://api.cloud.yandex.net/endpoints
const SERVICE_ENDPOINTS_LIST: ServiceEndpointsList = [
    {
        serviceIds: ['yandex.cloud.operation.OperationService'],
        endpoint: 'operation.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.compute.v1.DiskPlacementGroupService',
            'yandex.cloud.compute.v1.DiskService',
            'yandex.cloud.compute.v1.DiskTypeService',
            'yandex.cloud.compute.v1.FilesystemService',
            'yandex.cloud.compute.v1.HostGroupService',
            'yandex.cloud.compute.v1.HostTypeService',
            'yandex.cloud.compute.v1.ImageService',
            'yandex.cloud.compute.v1.InstanceService',
            'yandex.cloud.compute.v1.PlacementGroupService',
            'yandex.cloud.compute.v1.SnapshotService',
            'yandex.cloud.compute.v1.ZoneService',
            'yandex.cloud.compute.v1.instancegroup.InstanceGroupService',
            'yandex.cloud.compute.v1.SnapshotScheduleService',
        ],
        endpoint: 'compute.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.iam.v1.ApiKeyService',
            'yandex.cloud.iam.v1.IamTokenService',
            'yandex.cloud.iam.v1.KeyService',
            'yandex.cloud.iam.v1.RoleService',
            'yandex.cloud.iam.v1.ServiceAccountService',
            'yandex.cloud.iam.v1.UserAccountService',
            'yandex.cloud.iam.v1.YandexPassportUserAccountService',
            'yandex.cloud.iam.v1.awscompatibility.AccessKeyService',
        ],
        endpoint: 'iam.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.resourcemanager.v1.CloudService',
            'yandex.cloud.resourcemanager.v1.FolderService',
        ],
        endpoint: 'resource-manager.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.mdb.clickhouse.v1.BackupService',
            'yandex.cloud.mdb.clickhouse.v1.ClusterService',
            'yandex.cloud.mdb.clickhouse.v1.DatabaseService',
            'yandex.cloud.mdb.clickhouse.v1.FormatSchemaService',
            'yandex.cloud.mdb.clickhouse.v1.MlModelService',
            'yandex.cloud.mdb.clickhouse.v1.ResourcePresetService',
            'yandex.cloud.mdb.clickhouse.v1.UserService',
            'yandex.cloud.mdb.clickhouse.v1.VersionsService',
            'yandex.cloud.mdb.elasticsearch.v1.AuthService',
            'yandex.cloud.mdb.elasticsearch.v1.ClusterService',
            'yandex.cloud.mdb.elasticsearch.v1.ResourcePresetService',
            'yandex.cloud.mdb.elasticsearch.v1.UserService',
            'yandex.cloud.mdb.elasticsearch.v1.BackupService',
            'yandex.cloud.mdb.elasticsearch.v1.ExtensionService',
            'yandex.cloud.mdb.greenplum.v1.ClusterService',
            'yandex.cloud.mdb.greenplum.v1.BackupService',
            'yandex.cloud.mdb.greenplum.v1.ResourcePresetService',
            'yandex.cloud.mdb.kafka.v1.ClusterService',
            'yandex.cloud.mdb.kafka.v1.ConnectorService',
            'yandex.cloud.mdb.kafka.v1.ResourcePresetService',
            'yandex.cloud.mdb.kafka.v1.TopicService',
            'yandex.cloud.mdb.kafka.v1.UserService',
            'yandex.cloud.mdb.mongodb.v1.BackupService',
            'yandex.cloud.mdb.mongodb.v1.ClusterService',
            'yandex.cloud.mdb.mongodb.v1.DatabaseService',
            'yandex.cloud.mdb.mongodb.v1.ResourcePresetService',
            'yandex.cloud.mdb.mongodb.v1.UserService',
            'yandex.cloud.mdb.mysql.v1.BackupService',
            'yandex.cloud.mdb.mysql.v1.ClusterService',
            'yandex.cloud.mdb.mysql.v1.DatabaseService',
            'yandex.cloud.mdb.mysql.v1.ResourcePresetService',
            'yandex.cloud.mdb.mysql.v1.UserService',
            'yandex.cloud.mdb.postgresql.v1.BackupService',
            'yandex.cloud.mdb.postgresql.v1.ClusterService',
            'yandex.cloud.mdb.postgresql.v1.DatabaseService',
            'yandex.cloud.mdb.postgresql.v1.ResourcePresetService',
            'yandex.cloud.mdb.postgresql.v1.UserService',
            'yandex.cloud.mdb.redis.v1.BackupService',
            'yandex.cloud.mdb.redis.v1.ClusterService',
            'yandex.cloud.mdb.redis.v1.ResourcePresetService',
            'yandex.cloud.mdb.sqlserver.v1.BackupService',
            'yandex.cloud.mdb.sqlserver.v1.ClusterService',
            'yandex.cloud.mdb.sqlserver.v1.DatabaseService',
            'yandex.cloud.mdb.sqlserver.v1.ResourcePresetService',
            'yandex.cloud.mdb.sqlserver.v1.UserService',
        ],
        endpoint: 'mdb.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.dataproc.v1.ClusterService',
            'yandex.cloud.dataproc.v1.JobService',
            'yandex.cloud.dataproc.v1.ResourcePresetService',
            'yandex.cloud.dataproc.v1.SubclusterService',
        ],
        endpoint: 'dataproc.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.vpc.v1.AddressService',
            'yandex.cloud.vpc.v1.NetworkService',
            'yandex.cloud.vpc.v1.RouteTableService',
            'yandex.cloud.vpc.v1.SecurityGroupService',
            'yandex.cloud.vpc.v1.SubnetService',
            'yandex.cloud.vpc.v1.GatewayService',
        ],
        endpoint: 'vpc.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.containerregistry.v1.ImageService',
            'yandex.cloud.containerregistry.v1.LifecyclePolicyService',
            'yandex.cloud.containerregistry.v1.RegistryService',
            'yandex.cloud.containerregistry.v1.RepositoryService',
            'yandex.cloud.containerregistry.v1.ScannerService',
        ],
        endpoint: 'container-registry.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService',
            'yandex.cloud.loadbalancer.v1.TargetGroupService',
        ],
        endpoint: 'load-balancer.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.serverless.functions.v1.FunctionService'],
        endpoint: 'serverless-functions.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.serverless.triggers.v1.TriggerService'],
        endpoint: 'serverless-triggers.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.serverless.apigateway.v1.ApiGatewayService'],
        endpoint: 'serverless-apigateway.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.serverless.containers.v1.ContainerService'],
        endpoint: 'serverless-containers.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.serverless.mdbproxy.v1.ProxyService'],
        endpoint: 'mdbproxy.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService'],
        endpoint: 'apigateway-connections.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.k8s.v1.ClusterService',
            'yandex.cloud.k8s.v1.NodeGroupService',
            'yandex.cloud.k8s.v1.VersionService',
        ],
        endpoint: 'mks.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.logging.v1.LogGroupService',
        ],
        endpoint: 'logging.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.logging.v1.LogReadingService',
        ],
        endpoint: 'reader.logging.yandexcloud.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.logging.v1.LogIngestionService',
        ],
        endpoint: 'ingester.logging.yandexcloud.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.ydb.v1.BackupService',
            'yandex.cloud.ydb.v1.DatabaseService',
            'yandex.cloud.ydb.v1.LocationService',
            'yandex.cloud.ydb.v1.ResourcePresetService',
            'yandex.cloud.ydb.v1.StorageTypeService',
        ],
        endpoint: 'ydb.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.iot.devices.v1.DeviceService',
            'yandex.cloud.iot.devices.v1.RegistryService',
        ],
        endpoint: 'iot-devices.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.iot.broker.v1.BrokerDataService',
            'yandex.cloud.iot.devices.v1.DeviceDataService',
            'yandex.cloud.iot.devices.v1.RegistryDataService',
        ],
        endpoint: 'iot-data.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.iot.broker.v1.BrokerService',
        ],
        endpoint: 'iot-broker.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.monitoring.v3.DashboardService',
        ],
        endpoint: 'monitoring.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.dataproc.manager.v1.JobService',
            'yandex.cloud.dataproc.manager.v1.DataprocManagerService',
        ],
        endpoint: 'dataproc-manager.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.kms.v1.SymmetricKeyService'],
        endpoint: 'kms.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.kms.v1.SymmetricCryptoService'],
        endpoint: 'kms.yandex:443',
    },
    {
        serviceIds: ['yandex.cloud.endpoint.ApiEndpointService'],
        endpoint: 'api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.ai.translate.v2.TranslationService'],
        endpoint: 'translate.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.ai.vision.v1.VisionService',
            'yandex.cloud.ai.vision.v2.ImageClassifierService',
        ],
        endpoint: 'vision.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.ai.stt.v2.SttService'],
        endpoint: 'transcribe.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['speechkit.tts.v3.Synthesizer'],
        endpoint: 'tts.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.apploadbalancer.v1.BackendGroupService',
            'yandex.cloud.apploadbalancer.v1.HttpRouterService',
            'yandex.cloud.apploadbalancer.v1.LoadBalancerService',
            'yandex.cloud.apploadbalancer.v1.TargetGroupService',
            'yandex.cloud.apploadbalancer.v1.VirtualHostService',
        ],
        endpoint: 'alb.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.billing.v1.BillingAccountService',
            'yandex.cloud.billing.v1.BudgetService',
            'yandex.cloud.billing.v1.CustomerService',
            'yandex.cloud.billing.v1.ServiceService',
            'yandex.cloud.billing.v1.SkuService',
        ],
        endpoint: 'billing.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.cdn.v1.CacheService',
            'yandex.cloud.cdn.v1.OriginGroupService',
            'yandex.cloud.cdn.v1.OriginService',
            'yandex.cloud.cdn.v1.ProviderService',
            'yandex.cloud.cdn.v1.ResourceService',
            'yandex.cloud.cdn.v1.RawLogsService',
        ],
        endpoint: 'cdn.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.certificatemanager.v1.CertificateContentService',
            'yandex.cloud.certificatemanager.v1.CertificateService',
        ],
        endpoint: 'certificate-manager.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.datasphere.v1.AppTokenService',
            'yandex.cloud.datasphere.v1.FolderBudgetService',
            'yandex.cloud.datasphere.v1.NodeService',
            'yandex.cloud.datasphere.v1.ProjectDataService',
            'yandex.cloud.datasphere.v1.ProjectService',
        ],
        endpoint: 'datasphere.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.datatransfer.v1.EndpointService',
            'yandex.cloud.datatransfer.v1.TransferService',
        ],
        endpoint: 'datatransfer.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.dns.v1.DnsZoneService',
        ],
        endpoint: 'dns.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.lockbox.v1.SecretService',
        ],
        endpoint: 'lockbox.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.lockbox.v1.PayloadService',
        ],
        endpoint: 'payload.lockbox.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.marketplace.v1.metering.ImageProductUsageService',
        ],
        endpoint: 'marketplace.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.organizationmanager.v1.OrganizationService',
            'yandex.cloud.organizationmanager.v1.UserService',
            'yandex.cloud.organizationmanager.v1.saml.CertificateService',
            'yandex.cloud.organizationmanager.v1.saml.FederationService',
            'yandex.cloud.organizationmanager.v1.GroupService',
        ],
        endpoint: 'organization-manager.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.storage.v1.BucketService',
        ],
        endpoint: 'storage.api.cloud.yandex.net:443',
    },
];

export const getServiceClientEndpoint = <T extends ServiceDefinition>(generatedClientCtor: GeneratedServiceClientCtor<T>): string => {
    const clientCtor = generatedClientCtor as unknown as ServiceClientConstructor;
    const serviceName: string = clientCtor.serviceName as string;

    if (!serviceName) {
        throw new Error('Unable to retrieve serviceName of provided service client class');
    }

    const endpointItem = SERVICE_ENDPOINTS_LIST.find((item) => item.serviceIds.includes(serviceName));

    if (!endpointItem) {
        throw new Error(`Endpoint for service ${serviceName} is no defined`);
    }

    return endpointItem.endpoint;
};
