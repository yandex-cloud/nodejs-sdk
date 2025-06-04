/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.opensearch.v1.extension';

export enum ExtensionType {
    EXTENSION_TYPE_UNSPECIFIED = 0,
    EXTENSION_TYPE_SYNONYMS = 1,
    EXTENSION_TYPE_STOPWORDS = 2,
    UNRECOGNIZED = -1,
}

export function extensionTypeFromJSON(object: any): ExtensionType {
    switch (object) {
        case 0:
        case 'EXTENSION_TYPE_UNSPECIFIED':
            return ExtensionType.EXTENSION_TYPE_UNSPECIFIED;
        case 1:
        case 'EXTENSION_TYPE_SYNONYMS':
            return ExtensionType.EXTENSION_TYPE_SYNONYMS;
        case 2:
        case 'EXTENSION_TYPE_STOPWORDS':
            return ExtensionType.EXTENSION_TYPE_STOPWORDS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ExtensionType.UNRECOGNIZED;
    }
}

export function extensionTypeToJSON(object: ExtensionType): string {
    switch (object) {
        case ExtensionType.EXTENSION_TYPE_UNSPECIFIED:
            return 'EXTENSION_TYPE_UNSPECIFIED';
        case ExtensionType.EXTENSION_TYPE_SYNONYMS:
            return 'EXTENSION_TYPE_SYNONYMS';
        case ExtensionType.EXTENSION_TYPE_STOPWORDS:
            return 'EXTENSION_TYPE_STOPWORDS';
        default:
            return 'UNKNOWN';
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
