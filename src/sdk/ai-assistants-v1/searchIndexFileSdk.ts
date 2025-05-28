import { Client } from 'nice-grpc';

import { ClientCallArgs, OperationWithDecoder, SessionArg, TypeFromProtoc } from '../types';

import {
    BatchCreateSearchIndexFileRequest,
    BatchCreateSearchIndexFileResponse,
    GetSearchIndexFileRequest,
    ListSearchIndexFilesRequest,
    SearchIndexFileServiceClient,
    SearchIndexFileServiceService,
} from '../../generated/yandex/cloud/ai/assistants/v1/searchindex/search_index_file_service';

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
        this.searchIndexFileClient = session.client(SearchIndexFileServiceClient, endpoint);
    }

    batchCreate(params: CreateSearchIndexFileProps, args?: ClientCallArgs) {
        return this.searchIndexFileClient
            .batchCreate(BatchCreateSearchIndexFileRequest.fromPartial(params), args)
            .then<OperationWithDecoder<BatchCreateSearchIndexFileResponse>>((operation) => {
                return Object.assign(operation, {
                    decoder: BatchCreateSearchIndexFileResponse.decode,
                });
            });
    }

    get(params: GetSearchIndexFileProps, args?: ClientCallArgs) {
        return this.searchIndexFileClient.get(GetSearchIndexFileRequest.fromPartial(params), args);
    }

    list(params: ListSearchIndexFileProps, args?: ClientCallArgs) {
        return this.searchIndexFileClient.list(
            ListSearchIndexFilesRequest.fromPartial(params),
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
