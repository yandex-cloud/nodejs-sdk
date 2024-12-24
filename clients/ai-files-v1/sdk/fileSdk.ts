import { Client } from 'nice-grpc';
import { fileService } from '..';

import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import {
    CreateFileRequest,
    DeleteFileRequest,
    FileServiceService,
    GetFileRequest,
    GetFileUrlRequest,
    ListFilesRequest,
    UpdateFileRequest,
} from '../generated/yandex/cloud/ai/files/v1/file_service';

export type CreateFileProps = TypeFromProtoc<CreateFileRequest, 'folderId' | 'content'>;

export type GetFileUrlProps = TypeFromProtoc<GetFileUrlRequest, 'fileId'>;

export type GetFileProps = TypeFromProtoc<GetFileRequest, 'fileId'>;

export type ListFileProps = TypeFromProtoc<ListFilesRequest, 'folderId'>;

export type DeleteFileProps = TypeFromProtoc<DeleteFileRequest, 'fileId'>;

export type UpdateFileProps = TypeFromProtoc<UpdateFileRequest, 'fileId' | 'updateMask'>;

export class FileSdk {
    private fileClient: Client<typeof FileServiceService, ClientCallArgs>;

    static ENDPOINT = 'assistant.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = FileSdk.ENDPOINT) {
        this.fileClient = session.client(fileService.FileServiceClient, endpoint);
    }

    create(params: CreateFileProps, args?: ClientCallArgs) {
        return this.fileClient.create(fileService.CreateFileRequest.fromPartial(params), args);
    }

    getUrl(params: GetFileUrlProps, args?: ClientCallArgs) {
        return this.fileClient.getUrl(fileService.GetFileUrlRequest.fromPartial(params), args);
    }

    get(params: GetFileProps, args?: ClientCallArgs) {
        return this.fileClient.get(fileService.GetFileRequest.fromPartial(params), args);
    }

    list(params: ListFileProps, args?: ClientCallArgs) {
        return this.fileClient.list(fileService.ListFilesRequest.fromPartial(params), args);
    }

    delete(params: DeleteFileProps, args?: ClientCallArgs) {
        return this.fileClient.delete(fileService.DeleteFileRequest.fromPartial(params), args);
    }

    update(params: UpdateFileProps, args?: ClientCallArgs) {
        return this.fileClient.update(fileService.UpdateFileRequest.fromPartial(params), args);
    }
}

export const initFileSdk = (session: SessionArg, endpoint = FileSdk.ENDPOINT) => {
    return new FileSdk(session, endpoint);
};
