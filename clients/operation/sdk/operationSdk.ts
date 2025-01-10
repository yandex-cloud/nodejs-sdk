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
import { Reader } from 'protobufjs';

export type GetOperationProps = TypeFromProtoc<GetOperationRequest, 'operationId'>;

export type CancelOperationProps = TypeFromProtoc<CancelOperationRequest, 'operationId'>;

type DecoderFuncType<DecoderT> = (input: Reader | Uint8Array, length?: number) => DecoderT;

type OperationWithDecoder<DecoderT> = Operation & {
    decoder?: DecoderFuncType<DecoderT>;
};

type PollArgs<DecoderT> = {
    operationCallback?: (operation: Operation) => void;
    decoder?: DecoderFuncType<DecoderT>;
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

export class PollOperationEmptyResponseForDecoder {
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
    static PollOperationEmptyResponseForDecoder = PollOperationEmptyResponseForDecoder;

    public pollOperation<DecoderT = Operation>(
        operation: string | OperationWithDecoder<DecoderT>,
        intervalMs: number,
        args?: PollArgs<DecoderT>,
    ): CancellablePromise<DecoderT> {
        let outputReject: (reason?: unknown) => void = noop;
        let timeoutId: NodeJS.Timeout | undefined;

        const operationStatusHandler = (operation: Operation) => {
            if (operation.done || operation.error) {
                if (timeoutId !== undefined) clearTimeout(timeoutId);
                return true;
            }

            return false;
        };

        const decoderFromOperation = isObject(operation) ? operation.decoder : null;
        const operationDecoderHandler = (operation: Operation): DecoderT => {
            const decoder = args?.decoder ?? decoderFromOperation;

            if (decoder) {
                if (operation.response === undefined) {
                    throw new PollOperationEmptyResponseForDecoder(operation);
                }

                return decoder(operation.response.value);
            }

            return operation as DecoderT;
        };

        if (isObject(operation) && operationStatusHandler(operation)) {
            return Promise.resolve(operation).then(operationDecoderHandler);
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

        return p.then(operationDecoderHandler);
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
