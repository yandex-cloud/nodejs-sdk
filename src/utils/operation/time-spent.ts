import { Operation } from '../../generated/yandex/cloud/operation/operation';

export const timeSpentOperation = (op: Operation): number => {
    return Date.now() - (op.createdAt?.getTime() ?? 0);
};
