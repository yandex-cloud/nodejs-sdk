import { Client } from 'nice-grpc';
import { searchIndexFileService } from '..';

import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import {
    BatchCreateSearchIndexFileRequest,
    GetSearchIndexFileRequest,
    ListSearchIndexFilesRequest,
    SearchIndexFileServiceService,
} from '../generated/yandex/cloud/ai/assistants/v1/searchindex/search_index_file_service';

export type CreateSearchIndexFileProps = TypeFromProtoc<
    BatchCreateSearchIndexFileRequest,
    'fileIds' | 'searchIndexId'
>;

export type GetSearchIndexFileProps = TypeFromProtoc<
    GetSearchIndexFileRequest,
    'fileId' | 'searchIndexId'
>;

export type ListSearchIndexFileProps = TypeFromProtoc<ListSearchIndexFilesRequest, 'searchIndexId'>;

export class SearchIndexFileSdk {
    private searchIndexFileClient: Client<typeof SearchIndexFileServiceService, ClientCallArgs>;

    static ENDPOINT = 'assistant.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = SearchIndexFileSdk.ENDPOINT) {
        this.searchIndexFileClient = session.client(
            searchIndexFileService.SearchIndexFileServiceClient,
            endpoint,
        );
    }

    batchCreate(params: CreateSearchIndexFileProps, args?: ClientCallArgs) {
        return this.searchIndexFileClient.batchCreate(
            searchIndexFileService.BatchCreateSearchIndexFileRequest.fromPartial(params),
            args,
        );
    }

    get(params: GetSearchIndexFileProps, args?: ClientCallArgs) {
        return this.searchIndexFileClient.get(
            searchIndexFileService.GetSearchIndexFileRequest.fromPartial(params),
            args,
        );
    }

    list(params: ListSearchIndexFileProps, args?: ClientCallArgs) {
        return this.searchIndexFileClient.list(
            searchIndexFileService.ListSearchIndexFilesRequest.fromPartial(params),
            args,
        );
    }
}

export const initSearchIndexFileSdk = (
    session: SessionArg,
    endpoint = SearchIndexFileSdk.ENDPOINT,
) => {
    return new SearchIndexFileSdk(session, endpoint);
};
