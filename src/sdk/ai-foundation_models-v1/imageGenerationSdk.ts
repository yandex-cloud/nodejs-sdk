import { Client } from 'nice-grpc';

import { ClientCallArgs, OperationWithDecoder, SessionArg, TypeFromProtoc } from '../types';
import {
    ImageGenerationAsyncServiceClient,
    ImageGenerationAsyncServiceService,
    ImageGenerationRequest,
    ImageGenerationResponse,
} from '../../generated/yandex/cloud/ai/foundation_models/v1/image_generation/image_generation_service';

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

    static ENDPOINT = 'llm.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = ImageGenerationSdk.ENDPOINT) {
        this.imageGenerationClient = session.client(ImageGenerationAsyncServiceClient, endpoint);
    }

    generateImage(params: GenerateImageProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `art://${folderId}/${modelId}`;

        return this.imageGenerationClient
            .generate(
                ImageGenerationRequest.fromPartial({
                    ...restParams,
                    modelUri,
                }),
                args,
            )
            .then<OperationWithDecoder<ImageGenerationResponse>>((operation) => {
                return Object.assign(operation, { decoder: ImageGenerationResponse.decode });
            });
    }
}

export const initImageGenerationSdk = (
    session: SessionArg,
    endpoint = ImageGenerationSdk.ENDPOINT,
) => {
    return new ImageGenerationSdk(session, endpoint);
};
