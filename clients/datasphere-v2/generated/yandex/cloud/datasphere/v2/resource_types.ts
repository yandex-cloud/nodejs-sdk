/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.datasphere.v2';

export enum ResourceType {
    RESOURCE_TYPE_UNSPECIFIED = 0,
    RESOURCE_TYPE_UNPINNED_CHECKPOINT = 1,
    RESOURCE_TYPE_SECRET = 2,
    RESOURCE_TYPE_DOCKER_IMAGE = 3,
    RESOURCE_TYPE_DATASET = 4,
    RESOURCE_TYPE_S3 = 5,
    RESOURCE_TYPE_NODE = 6,
    RESOURCE_TYPE_PINNED_CHECKPOINT = 7,
    RESOURCE_TYPE_ALIAS = 8,
    UNRECOGNIZED = -1,
}

export function resourceTypeFromJSON(object: any): ResourceType {
    switch (object) {
        case 0:
        case 'RESOURCE_TYPE_UNSPECIFIED':
            return ResourceType.RESOURCE_TYPE_UNSPECIFIED;
        case 1:
        case 'RESOURCE_TYPE_UNPINNED_CHECKPOINT':
            return ResourceType.RESOURCE_TYPE_UNPINNED_CHECKPOINT;
        case 2:
        case 'RESOURCE_TYPE_SECRET':
            return ResourceType.RESOURCE_TYPE_SECRET;
        case 3:
        case 'RESOURCE_TYPE_DOCKER_IMAGE':
            return ResourceType.RESOURCE_TYPE_DOCKER_IMAGE;
        case 4:
        case 'RESOURCE_TYPE_DATASET':
            return ResourceType.RESOURCE_TYPE_DATASET;
        case 5:
        case 'RESOURCE_TYPE_S3':
            return ResourceType.RESOURCE_TYPE_S3;
        case 6:
        case 'RESOURCE_TYPE_NODE':
            return ResourceType.RESOURCE_TYPE_NODE;
        case 7:
        case 'RESOURCE_TYPE_PINNED_CHECKPOINT':
            return ResourceType.RESOURCE_TYPE_PINNED_CHECKPOINT;
        case 8:
        case 'RESOURCE_TYPE_ALIAS':
            return ResourceType.RESOURCE_TYPE_ALIAS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ResourceType.UNRECOGNIZED;
    }
}

export function resourceTypeToJSON(object: ResourceType): string {
    switch (object) {
        case ResourceType.RESOURCE_TYPE_UNSPECIFIED:
            return 'RESOURCE_TYPE_UNSPECIFIED';
        case ResourceType.RESOURCE_TYPE_UNPINNED_CHECKPOINT:
            return 'RESOURCE_TYPE_UNPINNED_CHECKPOINT';
        case ResourceType.RESOURCE_TYPE_SECRET:
            return 'RESOURCE_TYPE_SECRET';
        case ResourceType.RESOURCE_TYPE_DOCKER_IMAGE:
            return 'RESOURCE_TYPE_DOCKER_IMAGE';
        case ResourceType.RESOURCE_TYPE_DATASET:
            return 'RESOURCE_TYPE_DATASET';
        case ResourceType.RESOURCE_TYPE_S3:
            return 'RESOURCE_TYPE_S3';
        case ResourceType.RESOURCE_TYPE_NODE:
            return 'RESOURCE_TYPE_NODE';
        case ResourceType.RESOURCE_TYPE_PINNED_CHECKPOINT:
            return 'RESOURCE_TYPE_PINNED_CHECKPOINT';
        case ResourceType.RESOURCE_TYPE_ALIAS:
            return 'RESOURCE_TYPE_ALIAS';
        default:
            return 'UNKNOWN';
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
