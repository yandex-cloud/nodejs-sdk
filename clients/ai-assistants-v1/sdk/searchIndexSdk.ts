import { Client } from 'nice-grpc';
import { searchIndexService } from '..';

import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import {
    CreateSearchIndexRequest,
    DeleteSearchIndexRequest,
    GetSearchIndexRequest,
    ListSearchIndicesRequest,
    SearchIndexServiceService,
    UpdateSearchIndexRequest,
} from '../generated/yandex/cloud/ai/assistants/v1/searchindex/search_index_service';

export type CreateSearchIndexProps = TypeFromProtoc<
    CreateSearchIndexRequest,
    'folderId' | 'fileIds'
>;

export type GetSearchIndexProps = TypeFromProtoc<GetSearchIndexRequest, 'searchIndexId'>;

export type ListSearchIndexProps = TypeFromProtoc<ListSearchIndicesRequest, 'folderId'>;

export type DeleteSearchIndexProps = TypeFromProtoc<DeleteSearchIndexRequest, 'searchIndexId'>;

export type UpdateSearchIndexProps = TypeFromProtoc<
    UpdateSearchIndexRequest,
    'searchIndexId' | 'updateMask'
>;

export class SearchIndexSdk {
    private searchIndexClient: Client<typeof SearchIndexServiceService, ClientCallArgs>;

    static ENDPOINT = 'assistant.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = SearchIndexSdk.ENDPOINT) {
        this.searchIndexClient = session.client(
            searchIndexService.SearchIndexServiceClient,
            endpoint,
        );
    }

    create(params: CreateSearchIndexProps, args?: ClientCallArgs) {
        return this.searchIndexClient.create(
            searchIndexService.CreateSearchIndexRequest.fromPartial(params),
            args,
        );
    }

    get(params: GetSearchIndexProps, args?: ClientCallArgs) {
        return this.searchIndexClient.get(
            searchIndexService.GetSearchIndexRequest.fromPartial(params),
            args,
        );
    }

    list(params: ListSearchIndexProps, args?: ClientCallArgs) {
        return this.searchIndexClient.list(
            searchIndexService.ListSearchIndicesRequest.fromPartial(params),
            args,
        );
    }

    delete(params: DeleteSearchIndexProps, args?: ClientCallArgs) {
        return this.searchIndexClient.delete(
            searchIndexService.DeleteSearchIndexRequest.fromPartial(params),
            args,
        );
    }

    update(params: UpdateSearchIndexProps, args?: ClientCallArgs) {
        return this.searchIndexClient.update(
            searchIndexService.UpdateSearchIndexRequest.fromPartial(params),
            args,
        );
    }
}

export const initSearchIndexSdk = (session: SessionArg, endpoint = SearchIndexSdk.ENDPOINT) => {
    return new SearchIndexSdk(session, endpoint);
};
