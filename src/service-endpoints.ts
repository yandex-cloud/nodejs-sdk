import { ServiceClientConstructor, ServiceDefinition } from '@grpc/grpc-js';
import { GeneratedServiceClientCtor } from './types';

interface ServiceEndpoint {
    serviceIds: string[];
    endpoint: string;
}

type ServiceEndpointsList = ServiceEndpoint[];

// @see https://api.cloud.yandex.net/endpoints
export const SERVICE_ENDPOINTS_LIST: ServiceEndpointsList = [
    {
        // TODO: UNKNOWN ENDPOINTS !!!
        endpoint: '',
        serviceIds: [
            'yandex.cloud.airflow.v1.ClusterService',
            'yandex.cloud.speechsense.v1.ClassifiersService',
            'yandex.cloud.speechsense.v1.ProjectService',
            'yandex.cloud.speechsense.v1.TalkService',
        ],
    },
    {
        serviceIds: ['yandex.cloud.operation.OperationService'],
        endpoint: 'operation.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.ai.llm.v1alpha.EmbeddingsService',
            'yandex.cloud.ai.llm.v1alpha.TextGenerationAsyncService',
            'yandex.cloud.ai.llm.v1alpha.TextGenerationService',
            'yandex.cloud.ai.llm.v1alpha.TokenizerService',
            'yandex.cloud.ai.assistants.v1.searchindex.SearchIndexFileService',
            'yandex.cloud.ai.assistants.v1.searchindex.SearchIndexService',
            'yandex.cloud.ai.assistants.v1.users.UserService',
            'yandex.cloud.ai.dataset.v1.DatasetService',
            'yandex.cloud.ai.files.v1.FileService',
            'yandex.cloud.ai.foundation_models.v1.EmbeddingsService',
            'yandex.cloud.ai.foundation_models.v1.TextGenerationAsyncService',
            'yandex.cloud.ai.foundation_models.v1.TextGenerationService',
            'yandex.cloud.ai.foundation_models.v1.TokenizerService',
            'yandex.cloud.ai.foundation_models.v1.image_generation.ImageGenerationAsyncService',
            'yandex.cloud.ai.foundation_models.v1.text_classification.TextClassificationService',
            'yandex.cloud.ai.tuning.v1.TuningService',
        ],
        endpoint: 'llm.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.backup.v1.BackupService',
            'yandex.cloud.backup.v1.PolicyService',
            'yandex.cloud.backup.v1.ProviderService',
            'yandex.cloud.backup.v1.ResourceService',
        ],
        endpoint: 'backup.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.audittrails.v1.TrailService'],
        endpoint: 'audittrails.api.cloud.yandex.net:443',
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
            'yandex.cloud.compute.v1.GpuClusterService',
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
            'yandex.cloud.iam.v1.RefreshTokenService',
            'yandex.cloud.iam.v1.ServiceControlService',
            'yandex.cloud.iam.v1.workload.FederatedCredentialService',
            'yandex.cloud.iam.v1.workload.oidc.FederationService',
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
            'yandex.cloud.mdb.greenplum.v1.HBARuleService',
            'yandex.cloud.mdb.greenplum.v1.PXFDatasourceService',
            'yandex.cloud.mdb.greenplum.v1.ResourceGroupService',
            'yandex.cloud.mdb.mysql.v1.BackupService',
            'yandex.cloud.mdb.mysql.v1.ClusterService',
            'yandex.cloud.mdb.mysql.v1.DatabaseService',
            'yandex.cloud.mdb.mysql.v1.ResourcePresetService',
            'yandex.cloud.mdb.mysql.v1.UserService',
            'yandex.cloud.mdb.mysql.v1alpha.BackupService',
            'yandex.cloud.mdb.mysql.v1alpha.ClusterService',
            'yandex.cloud.mdb.mysql.v1alpha.DatabaseService',
            'yandex.cloud.mdb.mysql.v1alpha.ResourcePresetService',
            'yandex.cloud.mdb.mysql.v1alpha.UserService',
            'yandex.cloud.mdb.postgresql.v1.BackupService',
            'yandex.cloud.mdb.postgresql.v1.ClusterService',
            'yandex.cloud.mdb.postgresql.v1.DatabaseService',
            'yandex.cloud.mdb.postgresql.v1.ResourcePresetService',
            'yandex.cloud.mdb.postgresql.v1.UserService',
            'yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService',
            'yandex.cloud.mdb.postgresql.v1.BackupRetentionPolicyService',
            'yandex.cloud.mdb.redis.v1.BackupService',
            'yandex.cloud.mdb.redis.v1.ClusterService',
            'yandex.cloud.mdb.redis.v1.ResourcePresetService',
            'yandex.cloud.mdb.redis.v1.UserService',
            'yandex.cloud.mdb.sqlserver.v1.BackupService',
            'yandex.cloud.mdb.sqlserver.v1.ClusterService',
            'yandex.cloud.mdb.sqlserver.v1.DatabaseService',
            'yandex.cloud.mdb.sqlserver.v1.ResourcePresetService',
            'yandex.cloud.mdb.sqlserver.v1.UserService',
            'yandex.cloud.mdb.opensearch.v1.BackupService',
            'yandex.cloud.mdb.opensearch.v1.ClusterService',
            'yandex.cloud.mdb.opensearch.v1.ResourcePresetService',
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
            'yandex.cloud.vpc.v1.privatelink.PrivateEndpointService',
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
            'yandex.cloud.containerregistry.v1.ScanPolicyService',
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
        serviceIds: [
            'yandex.cloud.serverless.functions.v1.FunctionService',
            'yandex.cloud.serverless.functions.v1.NetworkService',
        ],
        endpoint: 'serverless-functions.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.serverless.workflows.v1.ExecutionService',
            'yandex.cloud.serverless.workflows.v1.WorkflowService',
        ],
        endpoint: 'serverless-workflows.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.smartcaptcha.v1.CaptchaService'],
        endpoint: 'smartcaptcha.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.smartwebsecurity.v1.SecurityProfileService',
            'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfileService',
            'yandex.cloud.smartwebsecurity.v1.waf.RuleSetDescriptorService',
            'yandex.cloud.smartwebsecurity.v1.waf.WafProfileService',
        ],
        endpoint: 'smartwebsecurity.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.serverless.triggers.v1.TriggerService'],
        endpoint: 'serverless-triggers.api.cloud.yandex.net:443',
    },
    {
        endpoint: 'video.api.cloud.yandex.net:443',
        serviceIds: [
            'yandex.cloud.video.v1.ChannelService',
            'yandex.cloud.video.v1.EpisodeService',
            'yandex.cloud.video.v1.PlaylistService',
            'yandex.cloud.video.v1.StreamLineService',
            'yandex.cloud.video.v1.StreamService',
            'yandex.cloud.video.v1.SubtitleService',
            'yandex.cloud.video.v1.ThumbnailService',
            'yandex.cloud.video.v1.VideoService',
        ],
    },
    {
        serviceIds: [
            'yandex.cloud.serverless.eventrouter.v1.BusService',
            'yandex.cloud.serverless.eventrouter.v1.ConnectorService',
            'yandex.cloud.serverless.eventrouter.v1.EventService',
            'yandex.cloud.serverless.eventrouter.v1.RuleService',
        ],
        endpoint: 'serverless-eventrouter.api.cloud.yandex.net:443',
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
            'yandex.cloud.k8s.marketplace.v1.HelmReleaseService',
        ],
        endpoint: 'mks.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.logging.v1.LogGroupService',
            'yandex.cloud.logging.v1.ExportService',
            'yandex.cloud.logging.v1.SinkService',
        ],
        endpoint: 'logging.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.logging.v1.LogReadingService'],
        endpoint: 'reader.logging.yandexcloud.net:443',
    },
    {
        serviceIds: ['yandex.cloud.logging.v1.LogIngestionService'],
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
        serviceIds: ['yandex.cloud.iot.broker.v1.BrokerService'],
        endpoint: 'iot-broker.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.monitoring.v3.DashboardService'],
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
        serviceIds: [
            'yandex.cloud.kms.v1.SymmetricKeyService',
            'yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService',
            'yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService',
        ],
        endpoint: 'kms.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.kms.v1.SymmetricCryptoService',
            'yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService',
            'yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService',
        ],
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
        serviceIds: [
            'yandex.cloud.ai.ocr.v1.TextRecognitionService',
            'yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService',
        ],
        endpoint: 'ocr.api.cloud.yandex.net:443',
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
            'yandex.cloud.cdn.v1.ResourceRulesService',
        ],
        endpoint: 'cdn.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.cic.v1.PartnerService',
            'yandex.cloud.cic.v1.PointOfPresenceService',
            'yandex.cloud.cic.v1.PrivateConnectionService',
            'yandex.cloud.cic.v1.PublicConnectionService',
            'yandex.cloud.cic.v1.TrunkConnectionService',
        ],
        endpoint: 'cic.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.cloudregistry.v1.ArtifactService',
            'yandex.cloud.cloudregistry.v1.RegistryService',
        ],
        endpoint: 'registry.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.cloudrouter.v1.RoutingInstanceService'],
        endpoint: 'cloudrouter.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.cloudapps.workload.v1.CloudApplicationService'],
        endpoint: 'cloudapps.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.certificatemanager.v1.CertificateService'],
        endpoint: 'certificate-manager.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.certificatemanager.v1.CertificateContentService'],
        endpoint: 'data.certificate-manager.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.datasphere.v1.AppTokenService',
            'yandex.cloud.datasphere.v1.FolderBudgetService',
            'yandex.cloud.datasphere.v1.NodeService',
            'yandex.cloud.datasphere.v1.ProjectDataService',
            'yandex.cloud.datasphere.v1.ProjectService',
            'yandex.cloud.datasphere.v2.ProjectService',
            'yandex.cloud.datasphere.v2.CommunityService',
            'yandex.cloud.datasphere.v2.DatasetService',
            'yandex.cloud.datasphere.v2.DockerImageService',
            'yandex.cloud.datasphere.v2.S3Service',
            'yandex.cloud.datasphere.v2.jobs.ProjectJobService',
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
        serviceIds: ['yandex.cloud.dns.v1.DnsZoneService'],
        endpoint: 'dns.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.lockbox.v1.SecretService'],
        endpoint: 'lockbox.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.lockbox.v1.PayloadService'],
        endpoint: 'payload.lockbox.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.marketplace.v1.metering.ImageProductUsageService',
            'yandex.cloud.marketplace.licensemanager.v1.InstanceService',
            'yandex.cloud.marketplace.licensemanager.v1.LockService',
            'yandex.cloud.marketplace.metering.v1.ImageProductUsageService',
            'yandex.cloud.marketplace.licensemanager.saas.v1.InstanceService',
            'yandex.cloud.marketplace.licensemanager.saas.v1.LockService',
            'yandex.cloud.marketplace.metering.v1.ProductUsageService',
            'yandex.cloud.marketplace.pim.v1.saas.ProductInstanceService',
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
            'yandex.cloud.organizationmanager.v1.GroupMappingService',
            'yandex.cloud.organizationmanager.v1.SshCertificateService',
            'yandex.cloud.organizationmanager.v1.OsLoginService',
            'yandex.cloud.organizationmanager.v1.UserSshKeyService',
        ],
        endpoint: 'organization-manager.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.quotamanager.v1.QuotaLimitService'],
        endpoint: 'quota-manager.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['yandex.cloud.storage.v1.BucketService'],
        endpoint: 'storage.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.searchapi.v2.WebSearchAsyncService',
            'yandex.cloud.searchapi.v2.WebSearchService',
        ],
        endpoint: 'searchapi.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.loadtesting.agent.v1.AgentRegistrationService',
            'yandex.cloud.loadtesting.agent.v1.AgentService',
            'yandex.cloud.loadtesting.agent.v1.JobService',
            'yandex.cloud.loadtesting.agent.v1.MonitoringService',
            'yandex.cloud.loadtesting.agent.v1.TestService',
            'yandex.cloud.loadtesting.agent.v1.TrailService',
            'yandex.cloud.loadtesting.api.v1.AgentService',
            'yandex.cloud.loadtesting.api.v1.ConfigService',
            'yandex.cloud.loadtesting.api.v1.RegressionDashboardService',
            'yandex.cloud.loadtesting.api.v1.ReportService',
            'yandex.cloud.loadtesting.api.v1.TestService',
        ],
        endpoint: 'loadtesting.api.cloud.yandex.net:443',
    },
    {
        serviceIds: ['speechkit.stt.v3.AsyncRecognizer', 'speechkit.stt.v3.Recognizer'],
        endpoint: 'stt.api.cloud.yandex.net:443',
    },
    {
        serviceIds: [
            'yandex.cloud.ai.assistants.v1.AssistantService',
            'yandex.cloud.ai.assistants.v1.threads.MessageService',
            'yandex.cloud.ai.assistants.v1.threads.ThreadService',
            'yandex.cloud.ai.assistants.v1.runs.RunService',
        ],
        endpoint: 'assistant.api.cloud.yandex.net:443',
    },
];

export const getServiceClientEndpoint = <T extends ServiceDefinition>(
    generatedClientCtor: GeneratedServiceClientCtor<T>,
): string => {
    const clientCtor = generatedClientCtor as unknown as ServiceClientConstructor;
    const serviceName: string = clientCtor.serviceName as string;

    if (!serviceName) {
        throw new Error('Unable to retrieve serviceName of provided service client class');
    }

    const endpointItem = SERVICE_ENDPOINTS_LIST.find((item) =>
        item.serviceIds.includes(serviceName),
    );

    if (!endpointItem) {
        throw new Error(`Endpoint for service ${serviceName} is no defined`);
    }

    return endpointItem.endpoint;
};
