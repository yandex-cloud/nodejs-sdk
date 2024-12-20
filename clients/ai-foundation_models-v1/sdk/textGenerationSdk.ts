import { Client } from 'nice-grpc';
import { textGenerationService } from '..';

import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import {
    CompletionRequest,
    TextGenerationAsyncServiceService,
    TextGenerationServiceService,
    TokenizeRequest,
    TokenizerServiceService,
} from '../generated/yandex/cloud/ai/foundation_models/v1/text_generation/text_generation_service';

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

    constructor(session: SessionArg) {
        this.textGenerationClient = session.client(
            textGenerationService.TextGenerationServiceClient,
        );

        this.tokenizerClient = session.client(textGenerationService.TokenizerServiceClient);

        this.textGenerationAsyncClient = session.client(
            textGenerationService.TextGenerationAsyncServiceClient,
        );
    }

    tokenize(params: TokenizeProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.tokenizerClient.tokenize(
            textGenerationService.TokenizeRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );
    }

    tokenizeCompletion(params: CompletionProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.tokenizerClient.tokenizeCompletion(
            textGenerationService.CompletionRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );
    }

    completion(params: CompletionProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.textGenerationClient.completion(
            textGenerationService.CompletionRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );
    }

    completionAsOperation(params: CompletionProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        const operationP = this.textGenerationAsyncClient.completion(
            textGenerationService.CompletionRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );

        return operationP;
    }
}
