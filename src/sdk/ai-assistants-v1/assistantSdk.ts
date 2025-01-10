import { Client } from 'nice-grpc';

import {
    AssistantServiceClient,
    AssistantServiceService,
    CreateAssistantRequest,
    DeleteAssistantRequest,
    GetAssistantRequest,
    ListAssistantsRequest,
    ListAssistantVersionsRequest,
    UpdateAssistantRequest,
} from '../../generated/yandex/cloud/ai/assistants/v1/assistant_service';
import { ClientCallArgs, SessionArg, TypeFromProtoc } from '../types';
import { Assistant } from '../../generated/yandex/cloud/ai/assistants/v1/assistant';

export type CreateAssistantProps = Omit<
    TypeFromProtoc<CreateAssistantRequest, 'folderId'>,
    'modelUri'
> & {
    modelId: string;
};

export type GetAssistantProps = TypeFromProtoc<GetAssistantRequest, 'assistantId'>;

export type ListAssistantProps = TypeFromProtoc<ListAssistantsRequest, 'folderId'>;

export type DeleteAssistantProps = TypeFromProtoc<DeleteAssistantRequest, 'assistantId'>;

export type ListAssistantVersionsProps = TypeFromProtoc<
    ListAssistantVersionsRequest,
    'assistantId'
>;

export type UpdateAssistantProps = TypeFromProtoc<UpdateAssistantRequest, 'assistantId'>;

export class AssistantWithSdk {
    private assistantSdk: AssistantSdk;
    private assistant: Assistant;

    constructor(assistantSdk: AssistantSdk, assistant: Assistant) {
        this.assistantSdk = assistantSdk;
        this.assistant = assistant;
    }

    get data() {
        return this.assistant;
    }

    private updateData(assistant: Assistant) {
        this.assistant = assistant;
        return this;
    }

    delete(params: Omit<DeleteAssistantProps, 'assistantId'>, args?: ClientCallArgs) {
        const p = this.assistantSdk.delete({ ...params, assistantId: this.assistant.id }, args);
        return p;
    }

    update(params: Omit<UpdateAssistantProps, 'assistantId'>, args?: ClientCallArgs) {
        const p = this.assistantSdk.update({ ...params, assistantId: this.assistant.id }, args);
        return p.then(this.updateData.bind(this));
    }
}

export class AssistantSdk {
    private assistantClient: Client<typeof AssistantServiceService, ClientCallArgs>;

    static ENDPOINT = 'assistant.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = AssistantSdk.ENDPOINT) {
        this.assistantClient = session.client(AssistantServiceClient, endpoint);
    }

    private static _withSdk(this: AssistantSdk, assistantP: Promise<Assistant>) {
        async function withSdk(this: AssistantSdk) {
            const assistant = await assistantP;
            return new AssistantWithSdk(this, assistant);
        }

        return Object.assign(assistantP, { withSdk: withSdk.bind(this) });
    }

    create(params: CreateAssistantProps, args?: ClientCallArgs) {
        const { modelId, ...restParams } = params;

        const p = this.assistantClient.create(
            CreateAssistantRequest.fromPartial({
                ...restParams,
                modelUri: `gpt://${params.folderId}/${modelId}`,
            }),
            args,
        );

        return AssistantSdk._withSdk.call(this, p);
    }

    get(params: GetAssistantProps, args?: ClientCallArgs) {
        const p = this.assistantClient.get(GetAssistantRequest.fromPartial(params), args);
        return AssistantSdk._withSdk.call(this, p);
    }

    list(params: ListAssistantProps, args?: ClientCallArgs) {
        const p = this.assistantClient.list(ListAssistantsRequest.fromPartial(params), args);

        return p;
    }

    delete(params: DeleteAssistantProps, args?: ClientCallArgs) {
        const p = this.assistantClient.delete(DeleteAssistantRequest.fromPartial(params), args);
        return p;
    }

    listVersions(params: ListAssistantVersionsProps, args?: ClientCallArgs) {
        const p = this.assistantClient.listVersions(
            ListAssistantVersionsRequest.fromPartial(params),
            args,
        );
        return p;
    }

    update(params: UpdateAssistantProps, args?: ClientCallArgs) {
        const p = this.assistantClient.update(UpdateAssistantRequest.fromPartial(params), args);

        return AssistantSdk._withSdk.call(this, p);
    }
}

export const initAssistantSdk = (session: SessionArg, endpoint = AssistantSdk.ENDPOINT) => {
    return new AssistantSdk(session, endpoint);
};
