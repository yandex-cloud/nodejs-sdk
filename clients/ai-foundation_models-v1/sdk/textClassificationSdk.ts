import { Client } from 'nice-grpc';
import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import {
    FewShotTextClassificationRequest,
    TextClassificationRequest,
    TextClassificationServiceService,
} from '../generated/yandex/cloud/ai/foundation_models/v1/text_classification/text_classification_service';
import { textClassificationService } from '..';

export type TextClassificationProps = Omit<
    TypeFromProtoc<TextClassificationRequest, 'text'>,
    'modelUri'
> & {
    modelId: string;
    folderId: string;
};

export type FewShotTextClassificationProps = Omit<
    TypeFromProtoc<FewShotTextClassificationRequest, 'text'>,
    'modelUri'
> & {
    modelId: string;
    folderId: string;
};

export class TextClassificationSdk {
    private textClassificationClient: Client<
        typeof TextClassificationServiceService,
        ClientCallArgs
    >;

    constructor(session: SessionArg) {
        this.textClassificationClient = session.client(
            textClassificationService.TextClassificationServiceClient,
        );
    }

    classifyText(params: TextClassificationProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.textClassificationClient.classify(
            textClassificationService.TextClassificationRequest.fromPartial({
                ...restParams,
                modelUri,
            }),
            args,
        );
    }

    classifyTextFewShort(params: FewShotTextClassificationProps, args?: ClientCallArgs) {
        const { modelId, folderId, ...restParams } = params;
        const modelUri = `gpt://${folderId}/${modelId}`;

        return this.textClassificationClient.fewShotClassify(
            textClassificationService.FewShotTextClassificationRequest.fromPartial({
                ...restParams,
                modelUri,
            }),
            args,
        );
    }
}
