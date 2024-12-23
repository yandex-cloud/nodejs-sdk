import { isObject, noop } from 'lodash';
import { operationService } from '..';
import {
    CancelOperationRequest,
    GetOperationRequest,
    OperationServiceService,
} from '../generated/yandex/cloud/operation/operation_service';

import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import { Client } from 'nice-grpc';
import { Operation } from '../generated/yandex/cloud/operation/operation';

export type GetOperationProps = TypeFromProtoc<GetOperationRequest, 'operationId'>;

export type CancelOperationProps = TypeFromProtoc<CancelOperationRequest, 'operationId'>;

type PollArgs = {
    operationCallback?: (operation: Operation) => void;
};

interface CancellablePromise<T> extends Promise<T> {
    cancelPolling?: () => void;
}

export class PollOperationWasCanceled {
    operation?: Operation;
    constructor(operation?: Operation) {
        this.operation = operation;
    }
}

export class OperationSdk {
    private operationClient: Client<typeof OperationServiceService, ClientCallArgs>;

    constructor(session: SessionArg) {
        this.operationClient = session.client(operationService.OperationServiceClient);
    }

    static PollOperationWasCanceled = PollOperationWasCanceled;

    public pollOperation(
        operation: Operation | string,
        intervalMs: number,
        args?: PollArgs,
    ): CancellablePromise<Operation> {
        let outputReject: (reason?: unknown) => void = noop;
        let timeoutId: NodeJS.Timeout | undefined;

        const operationStatusHandler = (operation: Operation) => {
            if (operation.done || operation.error) {
                if (timeoutId !== undefined) clearTimeout(timeoutId);
                return true;
            }

            return false;
        };

        if (isObject(operation) && operationStatusHandler(operation)) {
            return Promise.resolve(operation);
        }

        const p = new Promise<Operation>((resolver, reject) => {
            outputReject = reject;
            const operationId = isObject(operation) ? operation.id : operation;

            const f = () => {
                this.get({ operationId }).then((operation) => {
                    args?.operationCallback?.(operation);

                    if (operationStatusHandler(operation)) {
                        timeoutId = undefined;
                        resolver(operation);
                        return;
                    }

                    timeoutId = setTimeout(() => f(), intervalMs);
                });
            };

            f();
        });

        (p as CancellablePromise<Operation>).cancelPolling = () => {
            outputReject?.(
                new PollOperationWasCanceled(isObject(operation) ? operation : undefined),
            );

            if (timeoutId !== undefined) clearTimeout(timeoutId);
        };

        return p as CancellablePromise<Operation>;
    }

    public get(params: GetOperationProps, args?: ClientCallArgs) {
        return this.operationClient.get(
            operationService.GetOperationRequest.fromPartial(params),
            args,
        );
    }

    public cancel(params: CancelOperationProps, args?: ClientCallArgs) {
        return this.operationClient.cancel(
            operationService.CancelOperationRequest.fromPartial(params),
            args,
        );
    }
}

export const initOperationSdk = (session: SessionArg) => {
    return new OperationSdk(session);
};
