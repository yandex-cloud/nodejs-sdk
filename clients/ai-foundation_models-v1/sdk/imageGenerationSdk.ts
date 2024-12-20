import { Client } from 'nice-grpc';
import { imageGenerationService } from '..';
import {
    ImageGenerationAsyncServiceService,
    ImageGenerationRequest,
} from '../generated/yandex/cloud/ai/foundation_models/v1/image_generation/image_generation_service';
import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';

export type GenerateImageProps = Omit<
    TypeFromProtoc<ImageGenerationRequest, 'messages'>,
    'modelUri'
> & {
    modelId: string;
    folderId: string;
};

export class ImageGenerationSdk {
    private imageGenerationClient: Client<
        typeof ImageGenerationAsyncServiceService,
        ClientCallArgs
    >;

    constructor(session: SessionArg) {
        this.imageGenerationClient = session.client(
            imageGenerationService.ImageGenerationAsyncServiceClient,
        );
    }

    generateImage(params: GenerateImageProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.imageGenerationClient.generate(
            imageGenerationService.ImageGenerationRequest.fromPartial({ ...restParams, modelUri }),
            args,
        );
    }
}
