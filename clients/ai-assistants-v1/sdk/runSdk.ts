import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';

import {
    CreateRunRequest,
    GetLastRunByThreadRequest,
    GetRunRequest,
    ListenRunRequest,
    ListRunsRequest,
    RunServiceService,
} from '../generated/yandex/cloud/ai/assistants/v1/runs/run_service';
import { Run } from '../generated/yandex/cloud/ai/assistants/v1/runs/run';
import { CallOptions } from '@grpc/grpc-js';
import { runService } from '..';
import { Client } from 'nice-grpc';

export type GetRunProps = TypeFromProtoc<GetRunRequest, 'runId'>;

export type CreateRunProps = TypeFromProtoc<CreateRunRequest, 'threadId' | 'assistantId'>;

export type GetLastRunByThreadProps = TypeFromProtoc<GetLastRunByThreadRequest, 'threadId'>;

export type ListRunsProps = TypeFromProtoc<ListRunsRequest, 'folderId'>;

export type ListenRunProps = TypeFromProtoc<ListenRunRequest, 'runId'>;

type RunClientType = Client<typeof RunServiceService, ClientCallArgs>;

export class RunWithSdk {
    private runSdk: RunSdk;
    private run: Run;

    constructor(runSdk: RunSdk, run: Run) {
        this.runSdk = runSdk;
        this.run = run;
    }

    get data() {
        return this.run;
    }

    listen(params: Omit<ListenRunProps, 'runId'>, args?: ClientCallArgs & CallOptions) {
        return this.runSdk.listen({ ...params, runId: this.run.id }, args);
    }
}

export class RunSdk {
    private runClient: RunClientType;

    static ENDPOINT = 'assistant.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = RunSdk.ENDPOINT) {
        this.runClient = session.client(runService.RunServiceClient, endpoint);
    }

    private static _withSdk(this: RunSdk, runP: Promise<Run>) {
        async function withSdk(this: RunSdk) {
            const run = await runP;
            return new RunWithSdk(this, run);
        }

        return Object.assign(runP, { withSdk: withSdk.bind(this) });
    }

    create(params: CreateRunProps, args?: ClientCallArgs) {
        const p = this.runClient.create(runService.CreateRunRequest.fromPartial(params), args);
        return RunSdk._withSdk.call(this, p);
    }

    get(params: GetRunProps, args?: ClientCallArgs) {
        const p = this.runClient.get(runService.GetRunRequest.fromPartial(params), args);
        return RunSdk._withSdk.call(this, p);
    }

    getLastByThread(params: GetLastRunByThreadProps, args?: ClientCallArgs) {
        const p = this.runClient.getLastByThread(
            runService.GetLastRunByThreadRequest.fromPartial(params),
            args,
        );
        return RunSdk._withSdk.call(this, p);
    }

    list(params: ListRunsProps, args?: ClientCallArgs) {
        const p = this.runClient.list(runService.ListRunsRequest.fromPartial(params), args);
        return p;
    }

    listen(params: ListenRunProps, args?: ClientCallArgs & CallOptions) {
        return this.runClient.listen(runService.ListenRunRequest.fromPartial(params), args);
    }
}

export const initRunSdk = (session: SessionArg, endpoint = RunSdk.ENDPOINT) => {
    return new RunSdk(session, endpoint);
};
