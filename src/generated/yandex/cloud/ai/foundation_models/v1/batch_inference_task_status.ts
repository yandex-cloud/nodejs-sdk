/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1';

/** Enum representing the status of a batch inference. */
export enum BatchInferenceTaskStatus {
    BATCH_INFERENCE_TASK_STATUS_UNSPECIFIED = 0,
    CREATED = 1,
    PENDING = 2,
    IN_PROGRESS = 3,
    COMPLETED = 4,
    FAILED = 5,
    CANCELED = 6,
    UNRECOGNIZED = -1,
}

export function batchInferenceTaskStatusFromJSON(object: any): BatchInferenceTaskStatus {
    switch (object) {
        case 0:
        case 'BATCH_INFERENCE_TASK_STATUS_UNSPECIFIED':
            return BatchInferenceTaskStatus.BATCH_INFERENCE_TASK_STATUS_UNSPECIFIED;
        case 1:
        case 'CREATED':
            return BatchInferenceTaskStatus.CREATED;
        case 2:
        case 'PENDING':
            return BatchInferenceTaskStatus.PENDING;
        case 3:
        case 'IN_PROGRESS':
            return BatchInferenceTaskStatus.IN_PROGRESS;
        case 4:
        case 'COMPLETED':
            return BatchInferenceTaskStatus.COMPLETED;
        case 5:
        case 'FAILED':
            return BatchInferenceTaskStatus.FAILED;
        case 6:
        case 'CANCELED':
            return BatchInferenceTaskStatus.CANCELED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BatchInferenceTaskStatus.UNRECOGNIZED;
    }
}

export function batchInferenceTaskStatusToJSON(object: BatchInferenceTaskStatus): string {
    switch (object) {
        case BatchInferenceTaskStatus.BATCH_INFERENCE_TASK_STATUS_UNSPECIFIED:
            return 'BATCH_INFERENCE_TASK_STATUS_UNSPECIFIED';
        case BatchInferenceTaskStatus.CREATED:
            return 'CREATED';
        case BatchInferenceTaskStatus.PENDING:
            return 'PENDING';
        case BatchInferenceTaskStatus.IN_PROGRESS:
            return 'IN_PROGRESS';
        case BatchInferenceTaskStatus.COMPLETED:
            return 'COMPLETED';
        case BatchInferenceTaskStatus.FAILED:
            return 'FAILED';
        case BatchInferenceTaskStatus.CANCELED:
            return 'CANCELED';
        default:
            return 'UNKNOWN';
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
