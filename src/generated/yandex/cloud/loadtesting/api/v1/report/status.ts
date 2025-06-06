/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.report';

/** Report status. */
export enum Status {
    /** STATUS_UNSPECIFIED - Status is not specified. */
    STATUS_UNSPECIFIED = 0,
    /** COLLECTING - Report is being collected. */
    COLLECTING = 1,
    /** CALCULATING - Report is being calculated. */
    CALCULATING = 2,
    /** READY - Report is ready. */
    READY = 3,
    UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Status.STATUS_UNSPECIFIED;
        case 1:
        case 'COLLECTING':
            return Status.COLLECTING;
        case 2:
        case 'CALCULATING':
            return Status.CALCULATING;
        case 3:
        case 'READY':
            return Status.READY;
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
        case Status.COLLECTING:
            return 'COLLECTING';
        case Status.CALCULATING:
            return 'CALCULATING';
        case Status.READY:
            return 'READY';
        default:
            return 'UNKNOWN';
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
