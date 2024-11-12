/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.test';

export enum Status {
    /** STATUS_UNSPECIFIED - Status is unspecified. */
    STATUS_UNSPECIFIED = 0,
    /** CREATED - Test has been created, but not started by any agent. */
    CREATED = 1,
    /** INITIATED - Execution stage: initialization. */
    INITIATED = 2,
    /** PREPARING - Execution stage: data preparation and warm-up. */
    PREPARING = 3,
    /** RUNNING - Execution stage: load generation. */
    RUNNING = 4,
    /** FINISHING - Execution stage: termination. */
    FINISHING = 5,
    /** DONE - Test is done. */
    DONE = 6,
    /** POST_PROCESSING - Execution stage: results post-processing. */
    POST_PROCESSING = 7,
    /** FAILED - Test has failed due to some error. */
    FAILED = 8,
    /** STOPPING - Test is being stopped. */
    STOPPING = 9,
    /** STOPPED - Test has been stopped. */
    STOPPED = 10,
    /** AUTOSTOPPED - Test has been stopped automatically by satisfying autostop condition. */
    AUTOSTOPPED = 11,
    /** WAITING - Execution stage: waiting for a trigger to start. */
    WAITING = 12,
    /** DELETING - Test is being deleted. */
    DELETING = 13,
    /**
     * LOST - Test status has not been reported in a while during execution stage.
     *
     * Means that either an agent is too busy to send it, got offline, or failed without
     * reporting a final status.
     */
    LOST = 14,
    UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATED':
            return Status.CREATED;
        case 2:
        case 'INITIATED':
            return Status.INITIATED;
        case 3:
        case 'PREPARING':
            return Status.PREPARING;
        case 4:
        case 'RUNNING':
            return Status.RUNNING;
        case 5:
        case 'FINISHING':
            return Status.FINISHING;
        case 6:
        case 'DONE':
            return Status.DONE;
        case 7:
        case 'POST_PROCESSING':
            return Status.POST_PROCESSING;
        case 8:
        case 'FAILED':
            return Status.FAILED;
        case 9:
        case 'STOPPING':
            return Status.STOPPING;
        case 10:
        case 'STOPPED':
            return Status.STOPPED;
        case 11:
        case 'AUTOSTOPPED':
            return Status.AUTOSTOPPED;
        case 12:
        case 'WAITING':
            return Status.WAITING;
        case 13:
        case 'DELETING':
            return Status.DELETING;
        case 14:
        case 'LOST':
            return Status.LOST;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Status.UNRECOGNIZED;
    }
}

export function statusToJSON(object: Status): string {
    switch (object) {
        case Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Status.CREATED:
            return 'CREATED';
        case Status.INITIATED:
            return 'INITIATED';
        case Status.PREPARING:
            return 'PREPARING';
        case Status.RUNNING:
            return 'RUNNING';
        case Status.FINISHING:
            return 'FINISHING';
        case Status.DONE:
            return 'DONE';
        case Status.POST_PROCESSING:
            return 'POST_PROCESSING';
        case Status.FAILED:
            return 'FAILED';
        case Status.STOPPING:
            return 'STOPPING';
        case Status.STOPPED:
            return 'STOPPED';
        case Status.AUTOSTOPPED:
            return 'AUTOSTOPPED';
        case Status.WAITING:
            return 'WAITING';
        case Status.DELETING:
            return 'DELETING';
        case Status.LOST:
            return 'LOST';
        default:
            return 'UNKNOWN';
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
