import { ChannelCredentials } from 'grpc';
import { Session } from '../../../index';

export class StorageObject {
    bucketName: string;
    objectName: string;
    private bufferPromise: Promise<Buffer>;

    constructor(
        bucketName: string,
        objectName: string,
        bufferPromise: Promise<Buffer>
    );

    static fromFile(
        bucketName: string,
        objectName: string,
        fileName: string
    ): StorageObject;

    static fromString(
        bucketName: string,
        objectName: string,
        content: string
    ): StorageObject;

    static fromBuffer(
        bucketName: string,
        objectName: string,
        buffer: Buffer
    ): StorageObject;

    getData(): Promise<string>;
}

export class StorageService {
    constructor(session?: Session);

    getObject(bucketName: string, objectName: string): Promise<StorageObject>;
    putObject(object: StorageObject): Promise<void>;
}
