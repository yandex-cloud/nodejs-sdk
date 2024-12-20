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

    constructor(session: SessionArg) {
        this.embeddingClient = session.client(embeddingService.EmbeddingsServiceClient);
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
