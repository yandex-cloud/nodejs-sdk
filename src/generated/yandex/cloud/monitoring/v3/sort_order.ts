/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

export enum SortOrder {
    /** SORT_ORDER_UNSPECIFIED - Not specified. */
    SORT_ORDER_UNSPECIFIED = 0,
    /** ASC - Asceding sort order. */
    ASC = 1,
    /** DESC - Desceding sort order. */
    DESC = 2,
    UNRECOGNIZED = -1,
}

export function sortOrderFromJSON(object: any): SortOrder {
    switch (object) {
        case 0:
        case 'SORT_ORDER_UNSPECIFIED':
            return SortOrder.SORT_ORDER_UNSPECIFIED;
        case 1:
        case 'ASC':
            return SortOrder.ASC;
        case 2:
        case 'DESC':
            return SortOrder.DESC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SortOrder.UNRECOGNIZED;
    }
}

export function sortOrderToJSON(object: SortOrder): string {
    switch (object) {
        case SortOrder.SORT_ORDER_UNSPECIFIED:
            return 'SORT_ORDER_UNSPECIFIED';
        case SortOrder.ASC:
            return 'ASC';
        case SortOrder.DESC:
            return 'DESC';
        default:
            return 'UNKNOWN';
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
