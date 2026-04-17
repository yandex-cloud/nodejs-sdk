/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { LaunchStage, launchStageFromJSON, launchStageToJSON } from './launch_stage';
import { Duration } from '../protobuf/duration';

export const protobufPackage = 'google.api';

/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 */
export enum ClientLibraryOrganization {
    /** CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED - Not useful. */
    CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
    /** CLOUD - Google Cloud Platform Org. */
    CLOUD = 1,
    /** ADS - Ads (Advertising) Org. */
    ADS = 2,
    /** PHOTOS - Photos Org. */
    PHOTOS = 3,
    /** STREET_VIEW - Street View Org. */
    STREET_VIEW = 4,
    /** SHOPPING - Shopping Org. */
    SHOPPING = 5,
    /** GEO - Geo Org. */
    GEO = 6,
    /** GENERATIVE_AI - Generative AI - https://developers.generativeai.google */
    GENERATIVE_AI = 7,
    UNRECOGNIZED = -1,
}

export function clientLibraryOrganizationFromJSON(object: any): ClientLibraryOrganization {
    switch (object) {
        case 0:
        case 'CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED':
            return ClientLibraryOrganization.CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED;
        case 1:
        case 'CLOUD':
            return ClientLibraryOrganization.CLOUD;
        case 2:
        case 'ADS':
            return ClientLibraryOrganization.ADS;
        case 3:
        case 'PHOTOS':
            return ClientLibraryOrganization.PHOTOS;
        case 4:
        case 'STREET_VIEW':
            return ClientLibraryOrganization.STREET_VIEW;
        case 5:
        case 'SHOPPING':
            return ClientLibraryOrganization.SHOPPING;
        case 6:
        case 'GEO':
            return ClientLibraryOrganization.GEO;
        case 7:
        case 'GENERATIVE_AI':
            return ClientLibraryOrganization.GENERATIVE_AI;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClientLibraryOrganization.UNRECOGNIZED;
    }
}

export function clientLibraryOrganizationToJSON(object: ClientLibraryOrganization): string {
    switch (object) {
        case ClientLibraryOrganization.CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED:
            return 'CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED';
        case ClientLibraryOrganization.CLOUD:
            return 'CLOUD';
        case ClientLibraryOrganization.ADS:
            return 'ADS';
        case ClientLibraryOrganization.PHOTOS:
            return 'PHOTOS';
        case ClientLibraryOrganization.STREET_VIEW:
            return 'STREET_VIEW';
        case ClientLibraryOrganization.SHOPPING:
            return 'SHOPPING';
        case ClientLibraryOrganization.GEO:
            return 'GEO';
        case ClientLibraryOrganization.GENERATIVE_AI:
            return 'GENERATIVE_AI';
        default:
            return 'UNKNOWN';
    }
}

/** To where should client libraries be published? */
export enum ClientLibraryDestination {
    /**
     * CLIENT_LIBRARY_DESTINATION_UNSPECIFIED - Client libraries will neither be generated nor published to package
     * managers.
     */
    CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
    /**
     * GITHUB - Generate the client library in a repo under github.com/googleapis,
     * but don't publish it to package managers.
     */
    GITHUB = 10,
    /** PACKAGE_MANAGER - Publish the library to package managers like nuget.org and npmjs.com. */
    PACKAGE_MANAGER = 20,
    UNRECOGNIZED = -1,
}

export function clientLibraryDestinationFromJSON(object: any): ClientLibraryDestination {
    switch (object) {
        case 0:
        case 'CLIENT_LIBRARY_DESTINATION_UNSPECIFIED':
            return ClientLibraryDestination.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED;
        case 10:
        case 'GITHUB':
            return ClientLibraryDestination.GITHUB;
        case 20:
        case 'PACKAGE_MANAGER':
            return ClientLibraryDestination.PACKAGE_MANAGER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClientLibraryDestination.UNRECOGNIZED;
    }
}

export function clientLibraryDestinationToJSON(object: ClientLibraryDestination): string {
    switch (object) {
        case ClientLibraryDestination.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED:
            return 'CLIENT_LIBRARY_DESTINATION_UNSPECIFIED';
        case ClientLibraryDestination.GITHUB:
            return 'GITHUB';
        case ClientLibraryDestination.PACKAGE_MANAGER:
            return 'PACKAGE_MANAGER';
        default:
            return 'UNKNOWN';
    }
}

/** Required information for every language. */
export interface CommonLanguageSettings {
    /**
     * Link to automatically generated reference documentation.  Example:
     * https://cloud.google.com/nodejs/docs/reference/asset/latest
     *
     * @deprecated
     */
    referenceDocsUri: string;
    /** The destination where API teams want this client library to be published. */
    destinations: ClientLibraryDestination[];
    /** Configuration for which RPCs should be generated in the GAPIC client. */
    selectiveGapicGeneration?: SelectiveGapicGeneration;
}

/** Details about how and where to publish client libraries. */
export interface ClientLibrarySettings {
    /**
     * Version of the API to apply these settings to. This is the full protobuf
     * package for the API, ending in the version element.
     * Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1".
     */
    version: string;
    /** Launch stage of this version of the API. */
    launchStage: LaunchStage;
    /**
     * When using transport=rest, the client request will encode enums as
     * numbers rather than strings.
     */
    restNumericEnums: boolean;
    /** Settings for legacy Java features, supported in the Service YAML. */
    javaSettings?: JavaSettings;
    /** Settings for C++ client libraries. */
    cppSettings?: CppSettings;
    /** Settings for PHP client libraries. */
    phpSettings?: PhpSettings;
    /** Settings for Python client libraries. */
    pythonSettings?: PythonSettings;
    /** Settings for Node client libraries. */
    nodeSettings?: NodeSettings;
    /** Settings for .NET client libraries. */
    dotnetSettings?: DotnetSettings;
    /** Settings for Ruby client libraries. */
    rubySettings?: RubySettings;
    /** Settings for Go client libraries. */
    goSettings?: GoSettings;
}

/**
 * This message configures the settings for publishing [Google Cloud Client
 * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
 * generated from the service config.
 */
export interface Publishing {
    /**
     * A list of API method settings, e.g. the behavior for methods that use the
     * long-running operation pattern.
     */
    methodSettings: MethodSettings[];
    /**
     * Link to a *public* URI where users can report issues.  Example:
     * https://issuetracker.google.com/issues/new?component=190865&template=1161103
     */
    newIssueUri: string;
    /**
     * Link to product home page.  Example:
     * https://cloud.google.com/asset-inventory/docs/overview
     */
    documentationUri: string;
    /**
     * Used as a tracking tag when collecting data about the APIs developer
     * relations artifacts like docs, packages delivered to package managers,
     * etc.  Example: "speech".
     */
    apiShortName: string;
    /** GitHub label to apply to issues and pull requests opened for this API. */
    githubLabel: string;
    /**
     * GitHub teams to be added to CODEOWNERS in the directory in GitHub
     * containing source code for the client libraries for this API.
     */
    codeownerGithubTeams: string[];
    /**
     * A prefix used in sample code when demarking regions to be included in
     * documentation.
     */
    docTagPrefix: string;
    /** For whom the client library is being published. */
    organization: ClientLibraryOrganization;
    /**
     * Client library settings.  If the same version string appears multiple
     * times in this list, then the last one wins.  Settings from earlier
     * settings with the same version string are discarded.
     */
    librarySettings: ClientLibrarySettings[];
    /**
     * Optional link to proto reference documentation.  Example:
     * https://cloud.google.com/pubsub/lite/docs/reference/rpc
     */
    protoReferenceDocumentationUri: string;
    /**
     * Optional link to REST reference documentation.  Example:
     * https://cloud.google.com/pubsub/lite/docs/reference/rest
     */
    restReferenceDocumentationUri: string;
}

/** Settings for Java client libraries. */
export interface JavaSettings {
    /**
     * The package name to use in Java. Clobbers the java_package option
     * set in the protobuf. This should be used **only** by APIs
     * who have already set the language_settings.java.package_name" field
     * in gapic.yaml. API teams should use the protobuf java_package option
     * where possible.
     *
     * Example of a YAML configuration::
     *
     *  publishing:
     *    java_settings:
     *      library_package: com.google.cloud.pubsub.v1
     */
    libraryPackage: string;
    /**
     * Configure the Java class name to use instead of the service's for its
     * corresponding generated GAPIC client. Keys are fully-qualified
     * service names as they appear in the protobuf (including the full
     * the language_settings.java.interface_names" field in gapic.yaml. API
     * teams should otherwise use the service name as it appears in the
     * protobuf.
     *
     * Example of a YAML configuration::
     *
     *  publishing:
     *    java_settings:
     *      service_class_names:
     *        - google.pubsub.v1.Publisher: TopicAdmin
     *        - google.pubsub.v1.Subscriber: SubscriptionAdmin
     */
    serviceClassNames: { [key: string]: string };
    /** Some settings. */
    common?: CommonLanguageSettings;
}

export interface JavaSettings_ServiceClassNamesEntry {
    key: string;
    value: string;
}

/** Settings for C++ client libraries. */
export interface CppSettings {
    /** Some settings. */
    common?: CommonLanguageSettings;
}

/** Settings for Php client libraries. */
export interface PhpSettings {
    /** Some settings. */
    common?: CommonLanguageSettings;
}

/** Settings for Python client libraries. */
export interface PythonSettings {
    /** Some settings. */
    common?: CommonLanguageSettings;
    /** Experimental features to be included during client library generation. */
    experimentalFeatures?: PythonSettings_ExperimentalFeatures;
}

/**
 * Experimental features to be included during client library generation.
 * These fields will be deprecated once the feature graduates and is enabled
 * by default.
 */
export interface PythonSettings_ExperimentalFeatures {
    /**
     * Enables generation of asynchronous REST clients if `rest` transport is
     * enabled. By default, asynchronous REST clients will not be generated.
     * This feature will be enabled by default 1 month after launching the
     * feature in preview packages.
     */
    restAsyncIoEnabled: boolean;
    /**
     * Enables generation of protobuf code using new types that are more
     * Pythonic which are included in `protobuf>=5.29.x`. This feature will be
     * enabled by default 1 month after launching the feature in preview
     * packages.
     */
    protobufPythonicTypesEnabled: boolean;
}

/** Settings for Node client libraries. */
export interface NodeSettings {
    /** Some settings. */
    common?: CommonLanguageSettings;
}

/** Settings for Dotnet client libraries. */
export interface DotnetSettings {
    /** Some settings. */
    common?: CommonLanguageSettings;
    /**
     * Map from original service names to renamed versions.
     * This is used when the default generated types
     * would cause a naming conflict. (Neither name is
     * fully-qualified.)
     * Example: Subscriber to SubscriberServiceApi.
     */
    renamedServices: { [key: string]: string };
    /**
     * Map from full resource types to the effective short name
     * for the resource. This is used when otherwise resource
     * named from different services would cause naming collisions.
     * Example entry:
     * "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"
     */
    renamedResources: { [key: string]: string };
    /**
     * List of full resource types to ignore during generation.
     * This is typically used for API-specific Location resources,
     * which should be handled by the generator as if they were actually
     * the common Location resources.
     * Example entry: "documentai.googleapis.com/Location"
     */
    ignoredResources: string[];
    /**
     * Namespaces which must be aliased in snippets due to
     * a known (but non-generator-predictable) naming collision
     */
    forcedNamespaceAliases: string[];
    /**
     * Method signatures (in the form "service.method(signature)")
     * which are provided separately, so shouldn't be generated.
     * Snippets *calling* these methods are still generated, however.
     */
    handwrittenSignatures: string[];
}

export interface DotnetSettings_RenamedServicesEntry {
    key: string;
    value: string;
}

export interface DotnetSettings_RenamedResourcesEntry {
    key: string;
    value: string;
}

/** Settings for Ruby client libraries. */
export interface RubySettings {
    /** Some settings. */
    common?: CommonLanguageSettings;
}

/** Settings for Go client libraries. */
export interface GoSettings {
    /** Some settings. */
    common?: CommonLanguageSettings;
}

/** Describes the generator configuration for a method. */
export interface MethodSettings {
    /**
     * The fully qualified name of the method, for which the options below apply.
     * This is used to find the method to apply the options.
     *
     * Example:
     *
     *    publishing:
     *      method_settings:
     *      - selector: google.storage.control.v2.StorageControl.CreateFolder
     *        # method settings for CreateFolder...
     */
    selector: string;
    /**
     * Describes settings to use for long-running operations when generating
     * API methods for RPCs. Complements RPCs that use the annotations in
     * google/longrunning/operations.proto.
     *
     * Example of a YAML configuration::
     *
     *    publishing:
     *      method_settings:
     *      - selector: google.cloud.speech.v2.Speech.BatchRecognize
     *        long_running:
     *          initial_poll_delay: 60s # 1 minute
     *          poll_delay_multiplier: 1.5
     *          max_poll_delay: 360s # 6 minutes
     *          total_poll_timeout: 54000s # 90 minutes
     */
    longRunning?: MethodSettings_LongRunning;
    /**
     * List of top-level fields of the request message, that should be
     * automatically populated by the client libraries based on their
     * (google.api.field_info).format. Currently supported format: UUID4.
     *
     * Example of a YAML configuration:
     *
     *    publishing:
     *      method_settings:
     *      - selector: google.example.v1.ExampleService.CreateExample
     *        auto_populated_fields:
     *        - request_id
     */
    autoPopulatedFields: string[];
}

/**
 * Describes settings to use when generating API methods that use the
 * long-running operation pattern.
 * All default values below are from those used in the client library
 * generators (e.g.
 * [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
 */
export interface MethodSettings_LongRunning {
    /**
     * Initial delay after which the first poll request will be made.
     * Default value: 5 seconds.
     */
    initialPollDelay?: Duration;
    /**
     * Multiplier to gradually increase delay between subsequent polls until it
     * reaches max_poll_delay.
     * Default value: 1.5.
     */
    pollDelayMultiplier: number;
    /**
     * Maximum time between two subsequent poll requests.
     * Default value: 45 seconds.
     */
    maxPollDelay?: Duration;
    /**
     * Total polling timeout.
     * Default value: 5 minutes.
     */
    totalPollTimeout?: Duration;
}

/**
 * This message is used to configure the generation of a subset of the RPCs in
 * a service for client libraries.
 */
export interface SelectiveGapicGeneration {
    /**
     * An allowlist of the fully qualified names of RPCs that should be included
     * on public client surfaces.
     */
    methods: string[];
}

const baseCommonLanguageSettings: object = { referenceDocsUri: '', destinations: 0 };

export const CommonLanguageSettings: {
    encode(message: CommonLanguageSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommonLanguageSettings;
    fromJSON(object: any): CommonLanguageSettings;
    toJSON(message: CommonLanguageSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<CommonLanguageSettings>, I>>(object: I): CommonLanguageSettings;
} = {
    encode(message: CommonLanguageSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.referenceDocsUri !== '') {
            writer.uint32(10).string(message.referenceDocsUri);
        }
        writer.uint32(18).fork();
        for (const v of message.destinations) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.selectiveGapicGeneration !== undefined) {
            SelectiveGapicGeneration.encode(
                message.selectiveGapicGeneration,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CommonLanguageSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCommonLanguageSettings } as CommonLanguageSettings;
        message.destinations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referenceDocsUri = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.destinations.push(reader.int32() as any);
                        }
                    } else {
                        message.destinations.push(reader.int32() as any);
                    }
                    break;
                case 3:
                    message.selectiveGapicGeneration = SelectiveGapicGeneration.decode(
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

    fromJSON(object: any): CommonLanguageSettings {
        const message = { ...baseCommonLanguageSettings } as CommonLanguageSettings;
        message.referenceDocsUri =
            object.referenceDocsUri !== undefined && object.referenceDocsUri !== null
                ? String(object.referenceDocsUri)
                : '';
        message.destinations = (object.destinations ?? []).map((e: any) =>
            clientLibraryDestinationFromJSON(e),
        );
        message.selectiveGapicGeneration =
            object.selectiveGapicGeneration !== undefined &&
            object.selectiveGapicGeneration !== null
                ? SelectiveGapicGeneration.fromJSON(object.selectiveGapicGeneration)
                : undefined;
        return message;
    },

    toJSON(message: CommonLanguageSettings): unknown {
        const obj: any = {};
        message.referenceDocsUri !== undefined && (obj.referenceDocsUri = message.referenceDocsUri);
        if (message.destinations) {
            obj.destinations = message.destinations.map((e) => clientLibraryDestinationToJSON(e));
        } else {
            obj.destinations = [];
        }
        message.selectiveGapicGeneration !== undefined &&
            (obj.selectiveGapicGeneration = message.selectiveGapicGeneration
                ? SelectiveGapicGeneration.toJSON(message.selectiveGapicGeneration)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CommonLanguageSettings>, I>>(
        object: I,
    ): CommonLanguageSettings {
        const message = { ...baseCommonLanguageSettings } as CommonLanguageSettings;
        message.referenceDocsUri = object.referenceDocsUri ?? '';
        message.destinations = object.destinations?.map((e) => e) || [];
        message.selectiveGapicGeneration =
            object.selectiveGapicGeneration !== undefined &&
            object.selectiveGapicGeneration !== null
                ? SelectiveGapicGeneration.fromPartial(object.selectiveGapicGeneration)
                : undefined;
        return message;
    },
};

const baseClientLibrarySettings: object = { version: '', launchStage: 0, restNumericEnums: false };

export const ClientLibrarySettings: {
    encode(message: ClientLibrarySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientLibrarySettings;
    fromJSON(object: any): ClientLibrarySettings;
    toJSON(message: ClientLibrarySettings): unknown;
    fromPartial<I extends Exact<DeepPartial<ClientLibrarySettings>, I>>(object: I): ClientLibrarySettings;
} = {
    encode(message: ClientLibrarySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.launchStage !== 0) {
            writer.uint32(16).int32(message.launchStage);
        }
        if (message.restNumericEnums === true) {
            writer.uint32(24).bool(message.restNumericEnums);
        }
        if (message.javaSettings !== undefined) {
            JavaSettings.encode(message.javaSettings, writer.uint32(170).fork()).ldelim();
        }
        if (message.cppSettings !== undefined) {
            CppSettings.encode(message.cppSettings, writer.uint32(178).fork()).ldelim();
        }
        if (message.phpSettings !== undefined) {
            PhpSettings.encode(message.phpSettings, writer.uint32(186).fork()).ldelim();
        }
        if (message.pythonSettings !== undefined) {
            PythonSettings.encode(message.pythonSettings, writer.uint32(194).fork()).ldelim();
        }
        if (message.nodeSettings !== undefined) {
            NodeSettings.encode(message.nodeSettings, writer.uint32(202).fork()).ldelim();
        }
        if (message.dotnetSettings !== undefined) {
            DotnetSettings.encode(message.dotnetSettings, writer.uint32(210).fork()).ldelim();
        }
        if (message.rubySettings !== undefined) {
            RubySettings.encode(message.rubySettings, writer.uint32(218).fork()).ldelim();
        }
        if (message.goSettings !== undefined) {
            GoSettings.encode(message.goSettings, writer.uint32(226).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClientLibrarySettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClientLibrarySettings } as ClientLibrarySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.launchStage = reader.int32() as any;
                    break;
                case 3:
                    message.restNumericEnums = reader.bool();
                    break;
                case 21:
                    message.javaSettings = JavaSettings.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.cppSettings = CppSettings.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.phpSettings = PhpSettings.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.pythonSettings = PythonSettings.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.nodeSettings = NodeSettings.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.dotnetSettings = DotnetSettings.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.rubySettings = RubySettings.decode(reader, reader.uint32());
                    break;
                case 28:
                    message.goSettings = GoSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClientLibrarySettings {
        const message = { ...baseClientLibrarySettings } as ClientLibrarySettings;
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        message.launchStage =
            object.launchStage !== undefined && object.launchStage !== null
                ? launchStageFromJSON(object.launchStage)
                : 0;
        message.restNumericEnums =
            object.restNumericEnums !== undefined && object.restNumericEnums !== null
                ? Boolean(object.restNumericEnums)
                : false;
        message.javaSettings =
            object.javaSettings !== undefined && object.javaSettings !== null
                ? JavaSettings.fromJSON(object.javaSettings)
                : undefined;
        message.cppSettings =
            object.cppSettings !== undefined && object.cppSettings !== null
                ? CppSettings.fromJSON(object.cppSettings)
                : undefined;
        message.phpSettings =
            object.phpSettings !== undefined && object.phpSettings !== null
                ? PhpSettings.fromJSON(object.phpSettings)
                : undefined;
        message.pythonSettings =
            object.pythonSettings !== undefined && object.pythonSettings !== null
                ? PythonSettings.fromJSON(object.pythonSettings)
                : undefined;
        message.nodeSettings =
            object.nodeSettings !== undefined && object.nodeSettings !== null
                ? NodeSettings.fromJSON(object.nodeSettings)
                : undefined;
        message.dotnetSettings =
            object.dotnetSettings !== undefined && object.dotnetSettings !== null
                ? DotnetSettings.fromJSON(object.dotnetSettings)
                : undefined;
        message.rubySettings =
            object.rubySettings !== undefined && object.rubySettings !== null
                ? RubySettings.fromJSON(object.rubySettings)
                : undefined;
        message.goSettings =
            object.goSettings !== undefined && object.goSettings !== null
                ? GoSettings.fromJSON(object.goSettings)
                : undefined;
        return message;
    },

    toJSON(message: ClientLibrarySettings): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.launchStage !== undefined &&
            (obj.launchStage = launchStageToJSON(message.launchStage));
        message.restNumericEnums !== undefined && (obj.restNumericEnums = message.restNumericEnums);
        message.javaSettings !== undefined &&
            (obj.javaSettings = message.javaSettings
                ? JavaSettings.toJSON(message.javaSettings)
                : undefined);
        message.cppSettings !== undefined &&
            (obj.cppSettings = message.cppSettings
                ? CppSettings.toJSON(message.cppSettings)
                : undefined);
        message.phpSettings !== undefined &&
            (obj.phpSettings = message.phpSettings
                ? PhpSettings.toJSON(message.phpSettings)
                : undefined);
        message.pythonSettings !== undefined &&
            (obj.pythonSettings = message.pythonSettings
                ? PythonSettings.toJSON(message.pythonSettings)
                : undefined);
        message.nodeSettings !== undefined &&
            (obj.nodeSettings = message.nodeSettings
                ? NodeSettings.toJSON(message.nodeSettings)
                : undefined);
        message.dotnetSettings !== undefined &&
            (obj.dotnetSettings = message.dotnetSettings
                ? DotnetSettings.toJSON(message.dotnetSettings)
                : undefined);
        message.rubySettings !== undefined &&
            (obj.rubySettings = message.rubySettings
                ? RubySettings.toJSON(message.rubySettings)
                : undefined);
        message.goSettings !== undefined &&
            (obj.goSettings = message.goSettings
                ? GoSettings.toJSON(message.goSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClientLibrarySettings>, I>>(
        object: I,
    ): ClientLibrarySettings {
        const message = { ...baseClientLibrarySettings } as ClientLibrarySettings;
        message.version = object.version ?? '';
        message.launchStage = object.launchStage ?? 0;
        message.restNumericEnums = object.restNumericEnums ?? false;
        message.javaSettings =
            object.javaSettings !== undefined && object.javaSettings !== null
                ? JavaSettings.fromPartial(object.javaSettings)
                : undefined;
        message.cppSettings =
            object.cppSettings !== undefined && object.cppSettings !== null
                ? CppSettings.fromPartial(object.cppSettings)
                : undefined;
        message.phpSettings =
            object.phpSettings !== undefined && object.phpSettings !== null
                ? PhpSettings.fromPartial(object.phpSettings)
                : undefined;
        message.pythonSettings =
            object.pythonSettings !== undefined && object.pythonSettings !== null
                ? PythonSettings.fromPartial(object.pythonSettings)
                : undefined;
        message.nodeSettings =
            object.nodeSettings !== undefined && object.nodeSettings !== null
                ? NodeSettings.fromPartial(object.nodeSettings)
                : undefined;
        message.dotnetSettings =
            object.dotnetSettings !== undefined && object.dotnetSettings !== null
                ? DotnetSettings.fromPartial(object.dotnetSettings)
                : undefined;
        message.rubySettings =
            object.rubySettings !== undefined && object.rubySettings !== null
                ? RubySettings.fromPartial(object.rubySettings)
                : undefined;
        message.goSettings =
            object.goSettings !== undefined && object.goSettings !== null
                ? GoSettings.fromPartial(object.goSettings)
                : undefined;
        return message;
    },
};

const basePublishing: object = {
    newIssueUri: '',
    documentationUri: '',
    apiShortName: '',
    githubLabel: '',
    codeownerGithubTeams: '',
    docTagPrefix: '',
    organization: 0,
    protoReferenceDocumentationUri: '',
    restReferenceDocumentationUri: '',
};

export const Publishing: {
    encode(message: Publishing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Publishing;
    fromJSON(object: any): Publishing;
    toJSON(message: Publishing): unknown;
    fromPartial<I extends Exact<DeepPartial<Publishing>, I>>(object: I): Publishing;
} = {
    encode(message: Publishing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.methodSettings) {
            MethodSettings.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.newIssueUri !== '') {
            writer.uint32(810).string(message.newIssueUri);
        }
        if (message.documentationUri !== '') {
            writer.uint32(818).string(message.documentationUri);
        }
        if (message.apiShortName !== '') {
            writer.uint32(826).string(message.apiShortName);
        }
        if (message.githubLabel !== '') {
            writer.uint32(834).string(message.githubLabel);
        }
        for (const v of message.codeownerGithubTeams) {
            writer.uint32(842).string(v!);
        }
        if (message.docTagPrefix !== '') {
            writer.uint32(850).string(message.docTagPrefix);
        }
        if (message.organization !== 0) {
            writer.uint32(856).int32(message.organization);
        }
        for (const v of message.librarySettings) {
            ClientLibrarySettings.encode(v!, writer.uint32(874).fork()).ldelim();
        }
        if (message.protoReferenceDocumentationUri !== '') {
            writer.uint32(882).string(message.protoReferenceDocumentationUri);
        }
        if (message.restReferenceDocumentationUri !== '') {
            writer.uint32(890).string(message.restReferenceDocumentationUri);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Publishing {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublishing } as Publishing;
        message.methodSettings = [];
        message.codeownerGithubTeams = [];
        message.librarySettings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.methodSettings.push(MethodSettings.decode(reader, reader.uint32()));
                    break;
                case 101:
                    message.newIssueUri = reader.string();
                    break;
                case 102:
                    message.documentationUri = reader.string();
                    break;
                case 103:
                    message.apiShortName = reader.string();
                    break;
                case 104:
                    message.githubLabel = reader.string();
                    break;
                case 105:
                    message.codeownerGithubTeams.push(reader.string());
                    break;
                case 106:
                    message.docTagPrefix = reader.string();
                    break;
                case 107:
                    message.organization = reader.int32() as any;
                    break;
                case 109:
                    message.librarySettings.push(
                        ClientLibrarySettings.decode(reader, reader.uint32()),
                    );
                    break;
                case 110:
                    message.protoReferenceDocumentationUri = reader.string();
                    break;
                case 111:
                    message.restReferenceDocumentationUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Publishing {
        const message = { ...basePublishing } as Publishing;
        message.methodSettings = (object.methodSettings ?? []).map((e: any) =>
            MethodSettings.fromJSON(e),
        );
        message.newIssueUri =
            object.newIssueUri !== undefined && object.newIssueUri !== null
                ? String(object.newIssueUri)
                : '';
        message.documentationUri =
            object.documentationUri !== undefined && object.documentationUri !== null
                ? String(object.documentationUri)
                : '';
        message.apiShortName =
            object.apiShortName !== undefined && object.apiShortName !== null
                ? String(object.apiShortName)
                : '';
        message.githubLabel =
            object.githubLabel !== undefined && object.githubLabel !== null
                ? String(object.githubLabel)
                : '';
        message.codeownerGithubTeams = (object.codeownerGithubTeams ?? []).map((e: any) =>
            String(e),
        );
        message.docTagPrefix =
            object.docTagPrefix !== undefined && object.docTagPrefix !== null
                ? String(object.docTagPrefix)
                : '';
        message.organization =
            object.organization !== undefined && object.organization !== null
                ? clientLibraryOrganizationFromJSON(object.organization)
                : 0;
        message.librarySettings = (object.librarySettings ?? []).map((e: any) =>
            ClientLibrarySettings.fromJSON(e),
        );
        message.protoReferenceDocumentationUri =
            object.protoReferenceDocumentationUri !== undefined &&
            object.protoReferenceDocumentationUri !== null
                ? String(object.protoReferenceDocumentationUri)
                : '';
        message.restReferenceDocumentationUri =
            object.restReferenceDocumentationUri !== undefined &&
            object.restReferenceDocumentationUri !== null
                ? String(object.restReferenceDocumentationUri)
                : '';
        return message;
    },

    toJSON(message: Publishing): unknown {
        const obj: any = {};
        if (message.methodSettings) {
            obj.methodSettings = message.methodSettings.map((e) =>
                e ? MethodSettings.toJSON(e) : undefined,
            );
        } else {
            obj.methodSettings = [];
        }
        message.newIssueUri !== undefined && (obj.newIssueUri = message.newIssueUri);
        message.documentationUri !== undefined && (obj.documentationUri = message.documentationUri);
        message.apiShortName !== undefined && (obj.apiShortName = message.apiShortName);
        message.githubLabel !== undefined && (obj.githubLabel = message.githubLabel);
        if (message.codeownerGithubTeams) {
            obj.codeownerGithubTeams = message.codeownerGithubTeams.map((e) => e);
        } else {
            obj.codeownerGithubTeams = [];
        }
        message.docTagPrefix !== undefined && (obj.docTagPrefix = message.docTagPrefix);
        message.organization !== undefined &&
            (obj.organization = clientLibraryOrganizationToJSON(message.organization));
        if (message.librarySettings) {
            obj.librarySettings = message.librarySettings.map((e) =>
                e ? ClientLibrarySettings.toJSON(e) : undefined,
            );
        } else {
            obj.librarySettings = [];
        }
        message.protoReferenceDocumentationUri !== undefined &&
            (obj.protoReferenceDocumentationUri = message.protoReferenceDocumentationUri);
        message.restReferenceDocumentationUri !== undefined &&
            (obj.restReferenceDocumentationUri = message.restReferenceDocumentationUri);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Publishing>, I>>(object: I): Publishing {
        const message = { ...basePublishing } as Publishing;
        message.methodSettings =
            object.methodSettings?.map((e) => MethodSettings.fromPartial(e)) || [];
        message.newIssueUri = object.newIssueUri ?? '';
        message.documentationUri = object.documentationUri ?? '';
        message.apiShortName = object.apiShortName ?? '';
        message.githubLabel = object.githubLabel ?? '';
        message.codeownerGithubTeams = object.codeownerGithubTeams?.map((e) => e) || [];
        message.docTagPrefix = object.docTagPrefix ?? '';
        message.organization = object.organization ?? 0;
        message.librarySettings =
            object.librarySettings?.map((e) => ClientLibrarySettings.fromPartial(e)) || [];
        message.protoReferenceDocumentationUri = object.protoReferenceDocumentationUri ?? '';
        message.restReferenceDocumentationUri = object.restReferenceDocumentationUri ?? '';
        return message;
    },
};

const baseJavaSettings: object = { libraryPackage: '' };

export const JavaSettings: {
    encode(message: JavaSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JavaSettings;
    fromJSON(object: any): JavaSettings;
    toJSON(message: JavaSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<JavaSettings>, I>>(object: I): JavaSettings;
} = {
    encode(message: JavaSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.libraryPackage !== '') {
            writer.uint32(10).string(message.libraryPackage);
        }
        Object.entries(message.serviceClassNames).forEach(([key, value]) => {
            JavaSettings_ServiceClassNamesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        if (message.common !== undefined) {
            CommonLanguageSettings.encode(message.common, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): JavaSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseJavaSettings } as JavaSettings;
        message.serviceClassNames = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.libraryPackage = reader.string();
                    break;
                case 2:
                    const entry2 = JavaSettings_ServiceClassNamesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.serviceClassNames[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.common = CommonLanguageSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): JavaSettings {
        const message = { ...baseJavaSettings } as JavaSettings;
        message.libraryPackage =
            object.libraryPackage !== undefined && object.libraryPackage !== null
                ? String(object.libraryPackage)
                : '';
        message.serviceClassNames = Object.entries(object.serviceClassNames ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromJSON(object.common)
                : undefined;
        return message;
    },

    toJSON(message: JavaSettings): unknown {
        const obj: any = {};
        message.libraryPackage !== undefined && (obj.libraryPackage = message.libraryPackage);
        obj.serviceClassNames = {};
        if (message.serviceClassNames) {
            Object.entries(message.serviceClassNames).forEach(([k, v]) => {
                obj.serviceClassNames[k] = v;
            });
        }
        message.common !== undefined &&
            (obj.common = message.common
                ? CommonLanguageSettings.toJSON(message.common)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<JavaSettings>, I>>(object: I): JavaSettings {
        const message = { ...baseJavaSettings } as JavaSettings;
        message.libraryPackage = object.libraryPackage ?? '';
        message.serviceClassNames = Object.entries(object.serviceClassNames ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromPartial(object.common)
                : undefined;
        return message;
    },
};

const baseJavaSettings_ServiceClassNamesEntry: object = { key: '', value: '' };

export const JavaSettings_ServiceClassNamesEntry: {
    encode(message: JavaSettings_ServiceClassNamesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JavaSettings_ServiceClassNamesEntry;
    fromJSON(object: any): JavaSettings_ServiceClassNamesEntry;
    toJSON(message: JavaSettings_ServiceClassNamesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<JavaSettings_ServiceClassNamesEntry>, I>>(object: I): JavaSettings_ServiceClassNamesEntry;
} = {
    encode(
        message: JavaSettings_ServiceClassNamesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): JavaSettings_ServiceClassNamesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseJavaSettings_ServiceClassNamesEntry,
        } as JavaSettings_ServiceClassNamesEntry;
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

    fromJSON(object: any): JavaSettings_ServiceClassNamesEntry {
        const message = {
            ...baseJavaSettings_ServiceClassNamesEntry,
        } as JavaSettings_ServiceClassNamesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: JavaSettings_ServiceClassNamesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<JavaSettings_ServiceClassNamesEntry>, I>>(
        object: I,
    ): JavaSettings_ServiceClassNamesEntry {
        const message = {
            ...baseJavaSettings_ServiceClassNamesEntry,
        } as JavaSettings_ServiceClassNamesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCppSettings: object = {};

export const CppSettings: {
    encode(message: CppSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CppSettings;
    fromJSON(object: any): CppSettings;
    toJSON(message: CppSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<CppSettings>, I>>(object: I): CppSettings;
} = {
    encode(message: CppSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.common !== undefined) {
            CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CppSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCppSettings } as CppSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = CommonLanguageSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CppSettings {
        const message = { ...baseCppSettings } as CppSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromJSON(object.common)
                : undefined;
        return message;
    },

    toJSON(message: CppSettings): unknown {
        const obj: any = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? CommonLanguageSettings.toJSON(message.common)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CppSettings>, I>>(object: I): CppSettings {
        const message = { ...baseCppSettings } as CppSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromPartial(object.common)
                : undefined;
        return message;
    },
};

const basePhpSettings: object = {};

export const PhpSettings: {
    encode(message: PhpSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PhpSettings;
    fromJSON(object: any): PhpSettings;
    toJSON(message: PhpSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<PhpSettings>, I>>(object: I): PhpSettings;
} = {
    encode(message: PhpSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.common !== undefined) {
            CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PhpSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePhpSettings } as PhpSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = CommonLanguageSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PhpSettings {
        const message = { ...basePhpSettings } as PhpSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromJSON(object.common)
                : undefined;
        return message;
    },

    toJSON(message: PhpSettings): unknown {
        const obj: any = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? CommonLanguageSettings.toJSON(message.common)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PhpSettings>, I>>(object: I): PhpSettings {
        const message = { ...basePhpSettings } as PhpSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromPartial(object.common)
                : undefined;
        return message;
    },
};

const basePythonSettings: object = {};

export const PythonSettings: {
    encode(message: PythonSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PythonSettings;
    fromJSON(object: any): PythonSettings;
    toJSON(message: PythonSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<PythonSettings>, I>>(object: I): PythonSettings;
} = {
    encode(message: PythonSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.common !== undefined) {
            CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message.experimentalFeatures !== undefined) {
            PythonSettings_ExperimentalFeatures.encode(
                message.experimentalFeatures,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PythonSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePythonSettings } as PythonSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = CommonLanguageSettings.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.experimentalFeatures = PythonSettings_ExperimentalFeatures.decode(
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

    fromJSON(object: any): PythonSettings {
        const message = { ...basePythonSettings } as PythonSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromJSON(object.common)
                : undefined;
        message.experimentalFeatures =
            object.experimentalFeatures !== undefined && object.experimentalFeatures !== null
                ? PythonSettings_ExperimentalFeatures.fromJSON(object.experimentalFeatures)
                : undefined;
        return message;
    },

    toJSON(message: PythonSettings): unknown {
        const obj: any = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? CommonLanguageSettings.toJSON(message.common)
                : undefined);
        message.experimentalFeatures !== undefined &&
            (obj.experimentalFeatures = message.experimentalFeatures
                ? PythonSettings_ExperimentalFeatures.toJSON(message.experimentalFeatures)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PythonSettings>, I>>(object: I): PythonSettings {
        const message = { ...basePythonSettings } as PythonSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromPartial(object.common)
                : undefined;
        message.experimentalFeatures =
            object.experimentalFeatures !== undefined && object.experimentalFeatures !== null
                ? PythonSettings_ExperimentalFeatures.fromPartial(object.experimentalFeatures)
                : undefined;
        return message;
    },
};

const basePythonSettings_ExperimentalFeatures: object = {
    restAsyncIoEnabled: false,
    protobufPythonicTypesEnabled: false,
};

export const PythonSettings_ExperimentalFeatures: {
    encode(message: PythonSettings_ExperimentalFeatures, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PythonSettings_ExperimentalFeatures;
    fromJSON(object: any): PythonSettings_ExperimentalFeatures;
    toJSON(message: PythonSettings_ExperimentalFeatures): unknown;
    fromPartial<I extends Exact<DeepPartial<PythonSettings_ExperimentalFeatures>, I>>(object: I): PythonSettings_ExperimentalFeatures;
} = {
    encode(
        message: PythonSettings_ExperimentalFeatures,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.restAsyncIoEnabled === true) {
            writer.uint32(8).bool(message.restAsyncIoEnabled);
        }
        if (message.protobufPythonicTypesEnabled === true) {
            writer.uint32(16).bool(message.protobufPythonicTypesEnabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PythonSettings_ExperimentalFeatures {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePythonSettings_ExperimentalFeatures,
        } as PythonSettings_ExperimentalFeatures;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.restAsyncIoEnabled = reader.bool();
                    break;
                case 2:
                    message.protobufPythonicTypesEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PythonSettings_ExperimentalFeatures {
        const message = {
            ...basePythonSettings_ExperimentalFeatures,
        } as PythonSettings_ExperimentalFeatures;
        message.restAsyncIoEnabled =
            object.restAsyncIoEnabled !== undefined && object.restAsyncIoEnabled !== null
                ? Boolean(object.restAsyncIoEnabled)
                : false;
        message.protobufPythonicTypesEnabled =
            object.protobufPythonicTypesEnabled !== undefined &&
            object.protobufPythonicTypesEnabled !== null
                ? Boolean(object.protobufPythonicTypesEnabled)
                : false;
        return message;
    },

    toJSON(message: PythonSettings_ExperimentalFeatures): unknown {
        const obj: any = {};
        message.restAsyncIoEnabled !== undefined &&
            (obj.restAsyncIoEnabled = message.restAsyncIoEnabled);
        message.protobufPythonicTypesEnabled !== undefined &&
            (obj.protobufPythonicTypesEnabled = message.protobufPythonicTypesEnabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PythonSettings_ExperimentalFeatures>, I>>(
        object: I,
    ): PythonSettings_ExperimentalFeatures {
        const message = {
            ...basePythonSettings_ExperimentalFeatures,
        } as PythonSettings_ExperimentalFeatures;
        message.restAsyncIoEnabled = object.restAsyncIoEnabled ?? false;
        message.protobufPythonicTypesEnabled = object.protobufPythonicTypesEnabled ?? false;
        return message;
    },
};

const baseNodeSettings: object = {};

export const NodeSettings: {
    encode(message: NodeSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeSettings;
    fromJSON(object: any): NodeSettings;
    toJSON(message: NodeSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<NodeSettings>, I>>(object: I): NodeSettings;
} = {
    encode(message: NodeSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.common !== undefined) {
            CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeSettings } as NodeSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = CommonLanguageSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeSettings {
        const message = { ...baseNodeSettings } as NodeSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromJSON(object.common)
                : undefined;
        return message;
    },

    toJSON(message: NodeSettings): unknown {
        const obj: any = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? CommonLanguageSettings.toJSON(message.common)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NodeSettings>, I>>(object: I): NodeSettings {
        const message = { ...baseNodeSettings } as NodeSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromPartial(object.common)
                : undefined;
        return message;
    },
};

const baseDotnetSettings: object = {
    ignoredResources: '',
    forcedNamespaceAliases: '',
    handwrittenSignatures: '',
};

export const DotnetSettings: {
    encode(message: DotnetSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DotnetSettings;
    fromJSON(object: any): DotnetSettings;
    toJSON(message: DotnetSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<DotnetSettings>, I>>(object: I): DotnetSettings;
} = {
    encode(message: DotnetSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.common !== undefined) {
            CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.renamedServices).forEach(([key, value]) => {
            DotnetSettings_RenamedServicesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        Object.entries(message.renamedResources).forEach(([key, value]) => {
            DotnetSettings_RenamedResourcesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        for (const v of message.ignoredResources) {
            writer.uint32(34).string(v!);
        }
        for (const v of message.forcedNamespaceAliases) {
            writer.uint32(42).string(v!);
        }
        for (const v of message.handwrittenSignatures) {
            writer.uint32(50).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DotnetSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDotnetSettings } as DotnetSettings;
        message.renamedServices = {};
        message.renamedResources = {};
        message.ignoredResources = [];
        message.forcedNamespaceAliases = [];
        message.handwrittenSignatures = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = CommonLanguageSettings.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = DotnetSettings_RenamedServicesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.renamedServices[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    const entry3 = DotnetSettings_RenamedResourcesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.renamedResources[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.ignoredResources.push(reader.string());
                    break;
                case 5:
                    message.forcedNamespaceAliases.push(reader.string());
                    break;
                case 6:
                    message.handwrittenSignatures.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DotnetSettings {
        const message = { ...baseDotnetSettings } as DotnetSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromJSON(object.common)
                : undefined;
        message.renamedServices = Object.entries(object.renamedServices ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.renamedResources = Object.entries(object.renamedResources ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.ignoredResources = (object.ignoredResources ?? []).map((e: any) => String(e));
        message.forcedNamespaceAliases = (object.forcedNamespaceAliases ?? []).map((e: any) =>
            String(e),
        );
        message.handwrittenSignatures = (object.handwrittenSignatures ?? []).map((e: any) =>
            String(e),
        );
        return message;
    },

    toJSON(message: DotnetSettings): unknown {
        const obj: any = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? CommonLanguageSettings.toJSON(message.common)
                : undefined);
        obj.renamedServices = {};
        if (message.renamedServices) {
            Object.entries(message.renamedServices).forEach(([k, v]) => {
                obj.renamedServices[k] = v;
            });
        }
        obj.renamedResources = {};
        if (message.renamedResources) {
            Object.entries(message.renamedResources).forEach(([k, v]) => {
                obj.renamedResources[k] = v;
            });
        }
        if (message.ignoredResources) {
            obj.ignoredResources = message.ignoredResources.map((e) => e);
        } else {
            obj.ignoredResources = [];
        }
        if (message.forcedNamespaceAliases) {
            obj.forcedNamespaceAliases = message.forcedNamespaceAliases.map((e) => e);
        } else {
            obj.forcedNamespaceAliases = [];
        }
        if (message.handwrittenSignatures) {
            obj.handwrittenSignatures = message.handwrittenSignatures.map((e) => e);
        } else {
            obj.handwrittenSignatures = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DotnetSettings>, I>>(object: I): DotnetSettings {
        const message = { ...baseDotnetSettings } as DotnetSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromPartial(object.common)
                : undefined;
        message.renamedServices = Object.entries(object.renamedServices ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.renamedResources = Object.entries(object.renamedResources ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.ignoredResources = object.ignoredResources?.map((e) => e) || [];
        message.forcedNamespaceAliases = object.forcedNamespaceAliases?.map((e) => e) || [];
        message.handwrittenSignatures = object.handwrittenSignatures?.map((e) => e) || [];
        return message;
    },
};

const baseDotnetSettings_RenamedServicesEntry: object = { key: '', value: '' };

export const DotnetSettings_RenamedServicesEntry: {
    encode(message: DotnetSettings_RenamedServicesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DotnetSettings_RenamedServicesEntry;
    fromJSON(object: any): DotnetSettings_RenamedServicesEntry;
    toJSON(message: DotnetSettings_RenamedServicesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<DotnetSettings_RenamedServicesEntry>, I>>(object: I): DotnetSettings_RenamedServicesEntry;
} = {
    encode(
        message: DotnetSettings_RenamedServicesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): DotnetSettings_RenamedServicesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDotnetSettings_RenamedServicesEntry,
        } as DotnetSettings_RenamedServicesEntry;
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

    fromJSON(object: any): DotnetSettings_RenamedServicesEntry {
        const message = {
            ...baseDotnetSettings_RenamedServicesEntry,
        } as DotnetSettings_RenamedServicesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: DotnetSettings_RenamedServicesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DotnetSettings_RenamedServicesEntry>, I>>(
        object: I,
    ): DotnetSettings_RenamedServicesEntry {
        const message = {
            ...baseDotnetSettings_RenamedServicesEntry,
        } as DotnetSettings_RenamedServicesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseDotnetSettings_RenamedResourcesEntry: object = { key: '', value: '' };

export const DotnetSettings_RenamedResourcesEntry: {
    encode(message: DotnetSettings_RenamedResourcesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DotnetSettings_RenamedResourcesEntry;
    fromJSON(object: any): DotnetSettings_RenamedResourcesEntry;
    toJSON(message: DotnetSettings_RenamedResourcesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<DotnetSettings_RenamedResourcesEntry>, I>>(object: I): DotnetSettings_RenamedResourcesEntry;
} = {
    encode(
        message: DotnetSettings_RenamedResourcesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): DotnetSettings_RenamedResourcesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDotnetSettings_RenamedResourcesEntry,
        } as DotnetSettings_RenamedResourcesEntry;
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

    fromJSON(object: any): DotnetSettings_RenamedResourcesEntry {
        const message = {
            ...baseDotnetSettings_RenamedResourcesEntry,
        } as DotnetSettings_RenamedResourcesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: DotnetSettings_RenamedResourcesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DotnetSettings_RenamedResourcesEntry>, I>>(
        object: I,
    ): DotnetSettings_RenamedResourcesEntry {
        const message = {
            ...baseDotnetSettings_RenamedResourcesEntry,
        } as DotnetSettings_RenamedResourcesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseRubySettings: object = {};

export const RubySettings: {
    encode(message: RubySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RubySettings;
    fromJSON(object: any): RubySettings;
    toJSON(message: RubySettings): unknown;
    fromPartial<I extends Exact<DeepPartial<RubySettings>, I>>(object: I): RubySettings;
} = {
    encode(message: RubySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.common !== undefined) {
            CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RubySettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRubySettings } as RubySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = CommonLanguageSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RubySettings {
        const message = { ...baseRubySettings } as RubySettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromJSON(object.common)
                : undefined;
        return message;
    },

    toJSON(message: RubySettings): unknown {
        const obj: any = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? CommonLanguageSettings.toJSON(message.common)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RubySettings>, I>>(object: I): RubySettings {
        const message = { ...baseRubySettings } as RubySettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromPartial(object.common)
                : undefined;
        return message;
    },
};

const baseGoSettings: object = {};

export const GoSettings: {
    encode(message: GoSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoSettings;
    fromJSON(object: any): GoSettings;
    toJSON(message: GoSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<GoSettings>, I>>(object: I): GoSettings;
} = {
    encode(message: GoSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.common !== undefined) {
            CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GoSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGoSettings } as GoSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = CommonLanguageSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GoSettings {
        const message = { ...baseGoSettings } as GoSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromJSON(object.common)
                : undefined;
        return message;
    },

    toJSON(message: GoSettings): unknown {
        const obj: any = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? CommonLanguageSettings.toJSON(message.common)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GoSettings>, I>>(object: I): GoSettings {
        const message = { ...baseGoSettings } as GoSettings;
        message.common =
            object.common !== undefined && object.common !== null
                ? CommonLanguageSettings.fromPartial(object.common)
                : undefined;
        return message;
    },
};

const baseMethodSettings: object = { selector: '', autoPopulatedFields: '' };

export const MethodSettings: {
    encode(message: MethodSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MethodSettings;
    fromJSON(object: any): MethodSettings;
    toJSON(message: MethodSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<MethodSettings>, I>>(object: I): MethodSettings;
} = {
    encode(message: MethodSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.selector !== '') {
            writer.uint32(10).string(message.selector);
        }
        if (message.longRunning !== undefined) {
            MethodSettings_LongRunning.encode(
                message.longRunning,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        for (const v of message.autoPopulatedFields) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MethodSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMethodSettings } as MethodSettings;
        message.autoPopulatedFields = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.selector = reader.string();
                    break;
                case 2:
                    message.longRunning = MethodSettings_LongRunning.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.autoPopulatedFields.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MethodSettings {
        const message = { ...baseMethodSettings } as MethodSettings;
        message.selector =
            object.selector !== undefined && object.selector !== null
                ? String(object.selector)
                : '';
        message.longRunning =
            object.longRunning !== undefined && object.longRunning !== null
                ? MethodSettings_LongRunning.fromJSON(object.longRunning)
                : undefined;
        message.autoPopulatedFields = (object.autoPopulatedFields ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: MethodSettings): unknown {
        const obj: any = {};
        message.selector !== undefined && (obj.selector = message.selector);
        message.longRunning !== undefined &&
            (obj.longRunning = message.longRunning
                ? MethodSettings_LongRunning.toJSON(message.longRunning)
                : undefined);
        if (message.autoPopulatedFields) {
            obj.autoPopulatedFields = message.autoPopulatedFields.map((e) => e);
        } else {
            obj.autoPopulatedFields = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MethodSettings>, I>>(object: I): MethodSettings {
        const message = { ...baseMethodSettings } as MethodSettings;
        message.selector = object.selector ?? '';
        message.longRunning =
            object.longRunning !== undefined && object.longRunning !== null
                ? MethodSettings_LongRunning.fromPartial(object.longRunning)
                : undefined;
        message.autoPopulatedFields = object.autoPopulatedFields?.map((e) => e) || [];
        return message;
    },
};

const baseMethodSettings_LongRunning: object = { pollDelayMultiplier: 0 };

export const MethodSettings_LongRunning: {
    encode(message: MethodSettings_LongRunning, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MethodSettings_LongRunning;
    fromJSON(object: any): MethodSettings_LongRunning;
    toJSON(message: MethodSettings_LongRunning): unknown;
    fromPartial<I extends Exact<DeepPartial<MethodSettings_LongRunning>, I>>(object: I): MethodSettings_LongRunning;
} = {
    encode(
        message: MethodSettings_LongRunning,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.initialPollDelay !== undefined) {
            Duration.encode(message.initialPollDelay, writer.uint32(10).fork()).ldelim();
        }
        if (message.pollDelayMultiplier !== 0) {
            writer.uint32(21).float(message.pollDelayMultiplier);
        }
        if (message.maxPollDelay !== undefined) {
            Duration.encode(message.maxPollDelay, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalPollTimeout !== undefined) {
            Duration.encode(message.totalPollTimeout, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MethodSettings_LongRunning {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMethodSettings_LongRunning } as MethodSettings_LongRunning;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initialPollDelay = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pollDelayMultiplier = reader.float();
                    break;
                case 3:
                    message.maxPollDelay = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.totalPollTimeout = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MethodSettings_LongRunning {
        const message = { ...baseMethodSettings_LongRunning } as MethodSettings_LongRunning;
        message.initialPollDelay =
            object.initialPollDelay !== undefined && object.initialPollDelay !== null
                ? Duration.fromJSON(object.initialPollDelay)
                : undefined;
        message.pollDelayMultiplier =
            object.pollDelayMultiplier !== undefined && object.pollDelayMultiplier !== null
                ? Number(object.pollDelayMultiplier)
                : 0;
        message.maxPollDelay =
            object.maxPollDelay !== undefined && object.maxPollDelay !== null
                ? Duration.fromJSON(object.maxPollDelay)
                : undefined;
        message.totalPollTimeout =
            object.totalPollTimeout !== undefined && object.totalPollTimeout !== null
                ? Duration.fromJSON(object.totalPollTimeout)
                : undefined;
        return message;
    },

    toJSON(message: MethodSettings_LongRunning): unknown {
        const obj: any = {};
        message.initialPollDelay !== undefined &&
            (obj.initialPollDelay = message.initialPollDelay
                ? Duration.toJSON(message.initialPollDelay)
                : undefined);
        message.pollDelayMultiplier !== undefined &&
            (obj.pollDelayMultiplier = message.pollDelayMultiplier);
        message.maxPollDelay !== undefined &&
            (obj.maxPollDelay = message.maxPollDelay
                ? Duration.toJSON(message.maxPollDelay)
                : undefined);
        message.totalPollTimeout !== undefined &&
            (obj.totalPollTimeout = message.totalPollTimeout
                ? Duration.toJSON(message.totalPollTimeout)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MethodSettings_LongRunning>, I>>(
        object: I,
    ): MethodSettings_LongRunning {
        const message = { ...baseMethodSettings_LongRunning } as MethodSettings_LongRunning;
        message.initialPollDelay =
            object.initialPollDelay !== undefined && object.initialPollDelay !== null
                ? Duration.fromPartial(object.initialPollDelay)
                : undefined;
        message.pollDelayMultiplier = object.pollDelayMultiplier ?? 0;
        message.maxPollDelay =
            object.maxPollDelay !== undefined && object.maxPollDelay !== null
                ? Duration.fromPartial(object.maxPollDelay)
                : undefined;
        message.totalPollTimeout =
            object.totalPollTimeout !== undefined && object.totalPollTimeout !== null
                ? Duration.fromPartial(object.totalPollTimeout)
                : undefined;
        return message;
    },
};

const baseSelectiveGapicGeneration: object = { methods: '' };

export const SelectiveGapicGeneration: {
    encode(message: SelectiveGapicGeneration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelectiveGapicGeneration;
    fromJSON(object: any): SelectiveGapicGeneration;
    toJSON(message: SelectiveGapicGeneration): unknown;
    fromPartial<I extends Exact<DeepPartial<SelectiveGapicGeneration>, I>>(object: I): SelectiveGapicGeneration;
} = {
    encode(
        message: SelectiveGapicGeneration,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.methods) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SelectiveGapicGeneration {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSelectiveGapicGeneration } as SelectiveGapicGeneration;
        message.methods = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.methods.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SelectiveGapicGeneration {
        const message = { ...baseSelectiveGapicGeneration } as SelectiveGapicGeneration;
        message.methods = (object.methods ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: SelectiveGapicGeneration): unknown {
        const obj: any = {};
        if (message.methods) {
            obj.methods = message.methods.map((e) => e);
        } else {
            obj.methods = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SelectiveGapicGeneration>, I>>(
        object: I,
    ): SelectiveGapicGeneration {
        const message = { ...baseSelectiveGapicGeneration } as SelectiveGapicGeneration;
        message.methods = object.methods?.map((e) => e) || [];
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
