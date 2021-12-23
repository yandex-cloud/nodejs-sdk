import { Session } from '../../session';
import { Operation } from '../../generated/yandex/cloud/operation/operation';
import { serviceClients, cloudApi } from '../..';

const { operation: { operation_service: { GetOperationRequest } } } = cloudApi;

const DEFAULT_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes

export const waitForOperation = (op: Operation, session: Session, timeoutMs: number = DEFAULT_TIMEOUT_MS): Promise<Operation> => {
    const client = session.client(serviceClients.OperationServiceClient);
    const maxChecksCount = Math.ceil(timeoutMs / session.pollInterval);

    let checksCount = 0;

    return new Promise((resolve, reject) => {
        const checkOperation = async () => {
            const operation = await client.get(
                GetOperationRequest.fromPartial({
                    operationId: op.id,
                }),
            );

            checksCount++;

            if (operation.error) {
                reject(operation);
            } else if (operation.done) {
                resolve(operation);
            } else if (checksCount > maxChecksCount) {
                reject(new Error('Timeout reached'));
            } else {
                setTimeout(checkOperation, session.pollInterval);
            }
        };

        checkOperation();
    });
};
