import { Client } from 'nice-grpc';

import { ClientCallArgs, OperationWithDecoder, SessionArg, TypeFromProtoc } from '../types';
import {
    CompletionRequest,
    CompletionResponse,
    TextGenerationAsyncServiceClient,
    TextGenerationAsyncServiceService,
    TextGenerationServiceClient,
    TextGenerationServiceService,
    TokenizeRequest,
    TokenizerServiceClient,
    TokenizerServiceService,
} from '../../generated/yandex/cloud/ai/foundation_models/v1/text_generation/text_generation_service';

export type CompletionProps = Omit<TypeFromProtoc<CompletionRequest, 'messages'>, 'modelUri'> & {
    modelId: string;
    folderId: string;
};

export type TokenizeProps = Omit<TypeFromProtoc<TokenizeRequest, 'text'>, 'modelUri'> & {
    modelId: string;
    folderId: string;
};

export class TextGenerationSdk {
    private textGenerationClient: Client<typeof TextGenerationServiceService, ClientCallArgs>;
    private tokenizerClient: Client<typeof TokenizerServiceService, ClientCallArgs>;
    private textGenerationAsyncClient: Client<
        typeof TextGenerationAsyncServiceService,
        ClientCallArgs
    >;

    static ENDPOINT = 'llm.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = TextGenerationSdk.ENDPOINT) {
        this.textGenerationClient = session.client(TextGenerationServiceClient, endpoint);

        this.tokenizerClient = session.client(TokenizerServiceClient, endpoint);

        this.textGenerationAsyncClient = session.client(TextGenerationAsyncServiceClient, endpoint);
    }

    tokenize(params: TokenizeProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.tokenizerClient.tokenize(
            TokenizeRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );
    }

    tokenizeCompletion(params: CompletionProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.tokenizerClient.tokenizeCompletion(
            CompletionRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );
    }

    completion(params: CompletionProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.textGenerationClient.completion(
            CompletionRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );
    }

    completionAsOperation(params: CompletionProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.textGenerationAsyncClient
            .completion(CompletionRequest.fromPartial({ ...restParams, modelUri }), args)
            .then<OperationWithDecoder<CompletionResponse>>((operation) => {
                return Object.assign(operation, { decoder: CompletionResponse.decode });
            });
    }
}

export const initTextGenerationSdk = (
    session: SessionArg,
    endpoint = TextGenerationSdk.ENDPOINT,
) => {
    return new TextGenerationSdk(session, endpoint);
};
