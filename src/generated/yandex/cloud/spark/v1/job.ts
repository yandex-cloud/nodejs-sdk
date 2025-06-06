/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.spark.v1';

/** Spark job. */
export interface Job {
    /**
     * Required. Unique ID of the Spark job.
     * This ID is assigned by MDB in the process of creating Spark job.
     */
    id: string;
    /** Required. Unique ID of the Spark cluster. */
    clusterId: string;
    /** The time when the Spark job was created. */
    createdAt?: Date;
    /** The time when the Spark job was started. */
    startedAt?: Date;
    /** The time when the Spark job was finished. */
    finishedAt?: Date;
    /** Name of the Spark job. */
    name: string;
    /** The id of the user who created the job */
    createdBy: string;
    /** Status. */
    status: Job_Status;
    sparkJob?: SparkJob | undefined;
    pysparkJob?: PysparkJob | undefined;
    /** Spark UI Url. */
    uiUrl: string;
}

export enum Job_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Job created and is waiting to acquire. */
    PROVISIONING = 1,
    /** PENDING - Job acquired and is waiting for execution. */
    PENDING = 2,
    /** RUNNING - Job is running. */
    RUNNING = 3,
    /** ERROR - Job failed. */
    ERROR = 4,
    /** DONE - Job finished. */
    DONE = 5,
    /** CANCELLED - Job cancelled. */
    CANCELLED = 6,
    /** CANCELLING - Job is waiting for cancellation. */
    CANCELLING = 7,
    UNRECOGNIZED = -1,
}

export function job_StatusFromJSON(object: any): Job_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Job_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Job_Status.PROVISIONING;
        case 2:
        case 'PENDING':
            return Job_Status.PENDING;
        case 3:
        case 'RUNNING':
            return Job_Status.RUNNING;
        case 4:
        case 'ERROR':
            return Job_Status.ERROR;
        case 5:
        case 'DONE':
            return Job_Status.DONE;
        case 6:
        case 'CANCELLED':
            return Job_Status.CANCELLED;
        case 7:
        case 'CANCELLING':
            return Job_Status.CANCELLING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Job_Status.UNRECOGNIZED;
    }
}

export function job_StatusToJSON(object: Job_Status): string {
    switch (object) {
        case Job_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Job_Status.PROVISIONING:
            return 'PROVISIONING';
        case Job_Status.PENDING:
            return 'PENDING';
        case Job_Status.RUNNING:
            return 'RUNNING';
        case Job_Status.ERROR:
            return 'ERROR';
        case Job_Status.DONE:
            return 'DONE';
        case Job_Status.CANCELLED:
            return 'CANCELLED';
        case Job_Status.CANCELLING:
            return 'CANCELLING';
        default:
            return 'UNKNOWN';
    }
}

export interface SparkJob {
    /** Optional arguments to pass to the driver. */
    args: string[];
    /** Jar file URIs to add to the CLASSPATHs of the Spark driver and tasks. */
    jarFileUris: string[];
    /** URIs of files to be copied to the working directory of Spark drivers and distributed tasks. */
    fileUris: string[];
    /** URIs of archives to be extracted in the working directory of Spark drivers and tasks. */
    archiveUris: string[];
    /** A mapping of property names to values, used to configure Spark. */
    properties: { [key: string]: string };
    /** URI of the jar file containing the main class. */
    mainJarFileUri: string;
    /** The name of the driver's main class. */
    mainClass: string;
    /** List of maven coordinates of jars to include on the driver and executor classpaths. */
    packages: string[];
    /** List of additional remote repositories to search for the maven coordinates given with --packages. */
    repositories: string[];
    /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
    excludePackages: string[];
}

export interface SparkJob_PropertiesEntry {
    key: string;
    value: string;
}

export interface PysparkJob {
    /** Optional arguments to pass to the driver. */
    args: string[];
    /** Jar file URIs to add to the CLASSPATHs of the Spark driver and tasks. */
    jarFileUris: string[];
    /** URIs of files to be copied to the working directory of Spark drivers and distributed tasks. */
    fileUris: string[];
    /** URIs of archives to be extracted in the working directory of Spark drivers and tasks. */
    archiveUris: string[];
    /** A mapping of property names to values, used to configure Spark. */
    properties: { [key: string]: string };
    /** URI of the main Python file to use as the driver. Must be a .py file. */
    mainPythonFileUri: string;
    /** URIs of Python files to pass to the PySpark framework. */
    pythonFileUris: string[];
    /** List of maven coordinates of jars to include on the driver and executor classpaths. */
    packages: string[];
    /** List of additional remote repositories to search for the maven coordinates given with --packages. */
    repositories: string[];
    /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
    excludePackages: string[];
}

export interface PysparkJob_PropertiesEntry {
    key: string;
    value: string;
}

const baseJob: object = { id: '', clusterId: '', name: '', createdBy: '', status: 0, uiUrl: '' };

export const Job = {
    encode(message: Job, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.finishedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.createdBy !== '') {
            writer.uint32(58).string(message.createdBy);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.sparkJob !== undefined) {
            SparkJob.encode(message.sparkJob, writer.uint32(74).fork()).ldelim();
        }
        if (message.pysparkJob !== undefined) {
            PysparkJob.encode(message.pysparkJob, writer.uint32(82).fork()).ldelim();
        }
        if (message.uiUrl !== '') {
            writer.uint32(98).string(message.uiUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Job {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseJob } as Job;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.createdBy = reader.string();
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 9:
                    message.sparkJob = SparkJob.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.pysparkJob = PysparkJob.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.uiUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Job {
        const message = { ...baseJob } as Job;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.finishedAt =
            object.finishedAt !== undefined && object.finishedAt !== null
                ? fromJsonTimestamp(object.finishedAt)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? job_StatusFromJSON(object.status)
                : 0;
        message.sparkJob =
            object.sparkJob !== undefined && object.sparkJob !== null
                ? SparkJob.fromJSON(object.sparkJob)
                : undefined;
        message.pysparkJob =
            object.pysparkJob !== undefined && object.pysparkJob !== null
                ? PysparkJob.fromJSON(object.pysparkJob)
                : undefined;
        message.uiUrl =
            object.uiUrl !== undefined && object.uiUrl !== null ? String(object.uiUrl) : '';
        return message;
    },

    toJSON(message: Job): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.finishedAt !== undefined && (obj.finishedAt = message.finishedAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.status !== undefined && (obj.status = job_StatusToJSON(message.status));
        message.sparkJob !== undefined &&
            (obj.sparkJob = message.sparkJob ? SparkJob.toJSON(message.sparkJob) : undefined);
        message.pysparkJob !== undefined &&
            (obj.pysparkJob = message.pysparkJob
                ? PysparkJob.toJSON(message.pysparkJob)
                : undefined);
        message.uiUrl !== undefined && (obj.uiUrl = message.uiUrl);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Job>, I>>(object: I): Job {
        const message = { ...baseJob } as Job;
        message.id = object.id ?? '';
        message.clusterId = object.clusterId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.startedAt = object.startedAt ?? undefined;
        message.finishedAt = object.finishedAt ?? undefined;
        message.name = object.name ?? '';
        message.createdBy = object.createdBy ?? '';
        message.status = object.status ?? 0;
        message.sparkJob =
            object.sparkJob !== undefined && object.sparkJob !== null
                ? SparkJob.fromPartial(object.sparkJob)
                : undefined;
        message.pysparkJob =
            object.pysparkJob !== undefined && object.pysparkJob !== null
                ? PysparkJob.fromPartial(object.pysparkJob)
                : undefined;
        message.uiUrl = object.uiUrl ?? '';
        return message;
    },
};

const baseSparkJob: object = {
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
    mainJarFileUri: '',
    mainClass: '',
    packages: '',
    repositories: '',
    excludePackages: '',
};

export const SparkJob = {
    encode(message: SparkJob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.args) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v!);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            SparkJob_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.mainJarFileUri !== '') {
            writer.uint32(50).string(message.mainJarFileUri);
        }
        if (message.mainClass !== '') {
            writer.uint32(58).string(message.mainClass);
        }
        for (const v of message.packages) {
            writer.uint32(66).string(v!);
        }
        for (const v of message.repositories) {
            writer.uint32(74).string(v!);
        }
        for (const v of message.excludePackages) {
            writer.uint32(82).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SparkJob {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSparkJob } as SparkJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = SparkJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainJarFileUri = reader.string();
                    break;
                case 7:
                    message.mainClass = reader.string();
                    break;
                case 8:
                    message.packages.push(reader.string());
                    break;
                case 9:
                    message.repositories.push(reader.string());
                    break;
                case 10:
                    message.excludePackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SparkJob {
        const message = { ...baseSparkJob } as SparkJob;
        message.args = (object.args ?? []).map((e: any) => String(e));
        message.jarFileUris = (object.jarFileUris ?? []).map((e: any) => String(e));
        message.fileUris = (object.fileUris ?? []).map((e: any) => String(e));
        message.archiveUris = (object.archiveUris ?? []).map((e: any) => String(e));
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.mainJarFileUri =
            object.mainJarFileUri !== undefined && object.mainJarFileUri !== null
                ? String(object.mainJarFileUri)
                : '';
        message.mainClass =
            object.mainClass !== undefined && object.mainClass !== null
                ? String(object.mainClass)
                : '';
        message.packages = (object.packages ?? []).map((e: any) => String(e));
        message.repositories = (object.repositories ?? []).map((e: any) => String(e));
        message.excludePackages = (object.excludePackages ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: SparkJob): unknown {
        const obj: any = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        } else {
            obj.args = [];
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        } else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        } else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        } else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainJarFileUri !== undefined && (obj.mainJarFileUri = message.mainJarFileUri);
        message.mainClass !== undefined && (obj.mainClass = message.mainClass);
        if (message.packages) {
            obj.packages = message.packages.map((e) => e);
        } else {
            obj.packages = [];
        }
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e);
        } else {
            obj.repositories = [];
        }
        if (message.excludePackages) {
            obj.excludePackages = message.excludePackages.map((e) => e);
        } else {
            obj.excludePackages = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SparkJob>, I>>(object: I): SparkJob {
        const message = { ...baseSparkJob } as SparkJob;
        message.args = object.args?.map((e) => e) || [];
        message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
        message.fileUris = object.fileUris?.map((e) => e) || [];
        message.archiveUris = object.archiveUris?.map((e) => e) || [];
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.mainJarFileUri = object.mainJarFileUri ?? '';
        message.mainClass = object.mainClass ?? '';
        message.packages = object.packages?.map((e) => e) || [];
        message.repositories = object.repositories?.map((e) => e) || [];
        message.excludePackages = object.excludePackages?.map((e) => e) || [];
        return message;
    },
};

const baseSparkJob_PropertiesEntry: object = { key: '', value: '' };

export const SparkJob_PropertiesEntry = {
    encode(
        message: SparkJob_PropertiesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): SparkJob_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSparkJob_PropertiesEntry } as SparkJob_PropertiesEntry;
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

    fromJSON(object: any): SparkJob_PropertiesEntry {
        const message = { ...baseSparkJob_PropertiesEntry } as SparkJob_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: SparkJob_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SparkJob_PropertiesEntry>, I>>(
        object: I,
    ): SparkJob_PropertiesEntry {
        const message = { ...baseSparkJob_PropertiesEntry } as SparkJob_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const basePysparkJob: object = {
    args: '',
    jarFileUris: '',
    fileUris: '',
    archiveUris: '',
    mainPythonFileUri: '',
    pythonFileUris: '',
    packages: '',
    repositories: '',
    excludePackages: '',
};

export const PysparkJob = {
    encode(message: PysparkJob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.args) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v!);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            PysparkJob_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.mainPythonFileUri !== '') {
            writer.uint32(50).string(message.mainPythonFileUri);
        }
        for (const v of message.pythonFileUris) {
            writer.uint32(58).string(v!);
        }
        for (const v of message.packages) {
            writer.uint32(66).string(v!);
        }
        for (const v of message.repositories) {
            writer.uint32(74).string(v!);
        }
        for (const v of message.excludePackages) {
            writer.uint32(82).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PysparkJob {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePysparkJob } as PysparkJob;
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.pythonFileUris = [];
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = PysparkJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainPythonFileUri = reader.string();
                    break;
                case 7:
                    message.pythonFileUris.push(reader.string());
                    break;
                case 8:
                    message.packages.push(reader.string());
                    break;
                case 9:
                    message.repositories.push(reader.string());
                    break;
                case 10:
                    message.excludePackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PysparkJob {
        const message = { ...basePysparkJob } as PysparkJob;
        message.args = (object.args ?? []).map((e: any) => String(e));
        message.jarFileUris = (object.jarFileUris ?? []).map((e: any) => String(e));
        message.fileUris = (object.fileUris ?? []).map((e: any) => String(e));
        message.archiveUris = (object.archiveUris ?? []).map((e: any) => String(e));
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.mainPythonFileUri =
            object.mainPythonFileUri !== undefined && object.mainPythonFileUri !== null
                ? String(object.mainPythonFileUri)
                : '';
        message.pythonFileUris = (object.pythonFileUris ?? []).map((e: any) => String(e));
        message.packages = (object.packages ?? []).map((e: any) => String(e));
        message.repositories = (object.repositories ?? []).map((e: any) => String(e));
        message.excludePackages = (object.excludePackages ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: PysparkJob): unknown {
        const obj: any = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        } else {
            obj.args = [];
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        } else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        } else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        } else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainPythonFileUri !== undefined &&
            (obj.mainPythonFileUri = message.mainPythonFileUri);
        if (message.pythonFileUris) {
            obj.pythonFileUris = message.pythonFileUris.map((e) => e);
        } else {
            obj.pythonFileUris = [];
        }
        if (message.packages) {
            obj.packages = message.packages.map((e) => e);
        } else {
            obj.packages = [];
        }
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e);
        } else {
            obj.repositories = [];
        }
        if (message.excludePackages) {
            obj.excludePackages = message.excludePackages.map((e) => e);
        } else {
            obj.excludePackages = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PysparkJob>, I>>(object: I): PysparkJob {
        const message = { ...basePysparkJob } as PysparkJob;
        message.args = object.args?.map((e) => e) || [];
        message.jarFileUris = object.jarFileUris?.map((e) => e) || [];
        message.fileUris = object.fileUris?.map((e) => e) || [];
        message.archiveUris = object.archiveUris?.map((e) => e) || [];
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.mainPythonFileUri = object.mainPythonFileUri ?? '';
        message.pythonFileUris = object.pythonFileUris?.map((e) => e) || [];
        message.packages = object.packages?.map((e) => e) || [];
        message.repositories = object.repositories?.map((e) => e) || [];
        message.excludePackages = object.excludePackages?.map((e) => e) || [];
        return message;
    },
};

const basePysparkJob_PropertiesEntry: object = { key: '', value: '' };

export const PysparkJob_PropertiesEntry = {
    encode(
        message: PysparkJob_PropertiesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): PysparkJob_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePysparkJob_PropertiesEntry } as PysparkJob_PropertiesEntry;
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

    fromJSON(object: any): PysparkJob_PropertiesEntry {
        const message = { ...basePysparkJob_PropertiesEntry } as PysparkJob_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: PysparkJob_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PysparkJob_PropertiesEntry>, I>>(
        object: I,
    ): PysparkJob_PropertiesEntry {
        const message = { ...basePysparkJob_PropertiesEntry } as PysparkJob_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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
