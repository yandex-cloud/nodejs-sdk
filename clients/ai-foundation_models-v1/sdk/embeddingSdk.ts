import { Client } from 'nice-grpc';
import { embeddingService } from '..';
import {
    EmbeddingsServiceService,
    TextEmbeddingRequest,
} from '../generated/yandex/cloud/ai/foundation_models/v1/embedding/embedding_service';
import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';

export type TextEmbeddingProps = Omit<TypeFromProtoc<TextEmbeddingRequest, 'text'>, 'modelUri'> & {
    modelId: string;
    folderId: string;
};

export class EmbeddingSdk {
    private embeddingClient: Client<typeof EmbeddingsServiceService, ClientCallArgs>;

    static ENDPOINT = 'llm.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = EmbeddingSdk.ENDPOINT) {
        this.embeddingClient = session.client(embeddingService.EmbeddingsServiceClient, endpoint);
    }

    textEmbedding(params: TextEmbeddingProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.embeddingClient.textEmbedding(
            embeddingService.TextEmbeddingRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );
    }
}

export const initEmbeddingSdk = (session: SessionArg, endpoint = EmbeddingSdk.ENDPOINT) => {
    return new EmbeddingSdk(session, endpoint);
};
