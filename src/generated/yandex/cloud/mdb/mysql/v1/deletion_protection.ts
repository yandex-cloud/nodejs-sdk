/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.mysql.v1';

export enum DeletionProtectionMode {
    DELETION_PROTECTION_MODE_UNSPECIFIED = 0,
    /** DELETION_PROTECTION_MODE_DISABLED - Deletion protection is disabled */
    DELETION_PROTECTION_MODE_DISABLED = 1,
    /** DELETION_PROTECTION_MODE_ENABLED - Deletion protection is enabled */
    DELETION_PROTECTION_MODE_ENABLED = 2,
    /** DELETION_PROTECTION_MODE_INHERITED - Deletion protection mode is inherited from the cluster */
    DELETION_PROTECTION_MODE_INHERITED = 3,
    UNRECOGNIZED = -1,
}

export function deletionProtectionModeFromJSON(object: any): DeletionProtectionMode {
    switch (object) {
        case 0:
        case 'DELETION_PROTECTION_MODE_UNSPECIFIED':
            return DeletionProtectionMode.DELETION_PROTECTION_MODE_UNSPECIFIED;
        case 1:
        case 'DELETION_PROTECTION_MODE_DISABLED':
            return DeletionProtectionMode.DELETION_PROTECTION_MODE_DISABLED;
        case 2:
        case 'DELETION_PROTECTION_MODE_ENABLED':
            return DeletionProtectionMode.DELETION_PROTECTION_MODE_ENABLED;
        case 3:
        case 'DELETION_PROTECTION_MODE_INHERITED':
            return DeletionProtectionMode.DELETION_PROTECTION_MODE_INHERITED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DeletionProtectionMode.UNRECOGNIZED;
    }
}

export function deletionProtectionModeToJSON(object: DeletionProtectionMode): string {
    switch (object) {
        case DeletionProtectionMode.DELETION_PROTECTION_MODE_UNSPECIFIED:
            return 'DELETION_PROTECTION_MODE_UNSPECIFIED';
        case DeletionProtectionMode.DELETION_PROTECTION_MODE_DISABLED:
            return 'DELETION_PROTECTION_MODE_DISABLED';
        case DeletionProtectionMode.DELETION_PROTECTION_MODE_ENABLED:
            return 'DELETION_PROTECTION_MODE_ENABLED';
        case DeletionProtectionMode.DELETION_PROTECTION_MODE_INHERITED:
            return 'DELETION_PROTECTION_MODE_INHERITED';
        default:
            return 'UNKNOWN';
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
