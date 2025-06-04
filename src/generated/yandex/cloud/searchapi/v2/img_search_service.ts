/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { SearchQuery } from '../../../../yandex/cloud/searchapi/v2/search_query';

export const protobufPackage = 'yandex.cloud.searchapi.v2';

export interface ImageSpec {
    /** Searching for images in a particular format. */
    format: ImageSpec_ImageFormat;
    /** Searching for images of a particular size. */
    size: ImageSpec_ImageSize;
    /** Searching for images with a particular orientation. */
    orientation: ImageSpec_ImageOrientation;
    /** Searching for images containing a particular color. */
    color: ImageSpec_ImageColor;
}

export enum ImageSpec_ImageFormat {
    IMAGE_FORMAT_UNSPECIFIED = 0,
    /** IMAGE_FORMAT_JPEG - JPG format. */
    IMAGE_FORMAT_JPEG = 1,
    /** IMAGE_FORMAT_GIF - GIF format. */
    IMAGE_FORMAT_GIF = 2,
    /** IMAGE_FORMAT_PNG - PNG format. */
    IMAGE_FORMAT_PNG = 3,
    UNRECOGNIZED = -1,
}

export function imageSpec_ImageFormatFromJSON(object: any): ImageSpec_ImageFormat {
    switch (object) {
        case 0:
        case 'IMAGE_FORMAT_UNSPECIFIED':
            return ImageSpec_ImageFormat.IMAGE_FORMAT_UNSPECIFIED;
        case 1:
        case 'IMAGE_FORMAT_JPEG':
            return ImageSpec_ImageFormat.IMAGE_FORMAT_JPEG;
        case 2:
        case 'IMAGE_FORMAT_GIF':
            return ImageSpec_ImageFormat.IMAGE_FORMAT_GIF;
        case 3:
        case 'IMAGE_FORMAT_PNG':
            return ImageSpec_ImageFormat.IMAGE_FORMAT_PNG;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ImageSpec_ImageFormat.UNRECOGNIZED;
    }
}

export function imageSpec_ImageFormatToJSON(object: ImageSpec_ImageFormat): string {
    switch (object) {
        case ImageSpec_ImageFormat.IMAGE_FORMAT_UNSPECIFIED:
            return 'IMAGE_FORMAT_UNSPECIFIED';
        case ImageSpec_ImageFormat.IMAGE_FORMAT_JPEG:
            return 'IMAGE_FORMAT_JPEG';
        case ImageSpec_ImageFormat.IMAGE_FORMAT_GIF:
            return 'IMAGE_FORMAT_GIF';
        case ImageSpec_ImageFormat.IMAGE_FORMAT_PNG:
            return 'IMAGE_FORMAT_PNG';
        default:
            return 'UNKNOWN';
    }
}

export enum ImageSpec_ImageOrientation {
    IMAGE_ORIENTATION_UNSPECIFIED = 0,
    /** IMAGE_ORIENTATION_VERTICAL - Horizontal orientation. */
    IMAGE_ORIENTATION_VERTICAL = 1,
    /** IMAGE_ORIENTATION_HORIZONTAL - Vertical orientation. */
    IMAGE_ORIENTATION_HORIZONTAL = 2,
    /** IMAGE_ORIENTATION_SQUARE - Square aspect ratio. */
    IMAGE_ORIENTATION_SQUARE = 3,
    UNRECOGNIZED = -1,
}

export function imageSpec_ImageOrientationFromJSON(object: any): ImageSpec_ImageOrientation {
    switch (object) {
        case 0:
        case 'IMAGE_ORIENTATION_UNSPECIFIED':
            return ImageSpec_ImageOrientation.IMAGE_ORIENTATION_UNSPECIFIED;
        case 1:
        case 'IMAGE_ORIENTATION_VERTICAL':
            return ImageSpec_ImageOrientation.IMAGE_ORIENTATION_VERTICAL;
        case 2:
        case 'IMAGE_ORIENTATION_HORIZONTAL':
            return ImageSpec_ImageOrientation.IMAGE_ORIENTATION_HORIZONTAL;
        case 3:
        case 'IMAGE_ORIENTATION_SQUARE':
            return ImageSpec_ImageOrientation.IMAGE_ORIENTATION_SQUARE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ImageSpec_ImageOrientation.UNRECOGNIZED;
    }
}

export function imageSpec_ImageOrientationToJSON(object: ImageSpec_ImageOrientation): string {
    switch (object) {
        case ImageSpec_ImageOrientation.IMAGE_ORIENTATION_UNSPECIFIED:
            return 'IMAGE_ORIENTATION_UNSPECIFIED';
        case ImageSpec_ImageOrientation.IMAGE_ORIENTATION_VERTICAL:
            return 'IMAGE_ORIENTATION_VERTICAL';
        case ImageSpec_ImageOrientation.IMAGE_ORIENTATION_HORIZONTAL:
            return 'IMAGE_ORIENTATION_HORIZONTAL';
        case ImageSpec_ImageOrientation.IMAGE_ORIENTATION_SQUARE:
            return 'IMAGE_ORIENTATION_SQUARE';
        default:
            return 'UNKNOWN';
    }
}

export enum ImageSpec_ImageSize {
    IMAGE_SIZE_UNSPECIFIED = 0,
    /** IMAGE_SIZE_ENORMOUS - Very large images (larger than 1,600 × 1,200 pixels). */
    IMAGE_SIZE_ENORMOUS = 1,
    /** IMAGE_SIZE_LARGE - Large images (from 800 × 600 to 1,600 × 1,200 pixels). */
    IMAGE_SIZE_LARGE = 2,
    /** IMAGE_SIZE_MEDIUM - Medium images (from 150 × 150 to 800 × 600 pixels). */
    IMAGE_SIZE_MEDIUM = 3,
    /** IMAGE_SIZE_SMALL - Small images (from 32 × 32 to 150 × 150 pixels). */
    IMAGE_SIZE_SMALL = 4,
    /** IMAGE_SIZE_TINY - Icons (up to 32 × 32 pixels). */
    IMAGE_SIZE_TINY = 5,
    /** IMAGE_SIZE_WALLPAPER - Desktop wallpapers. */
    IMAGE_SIZE_WALLPAPER = 6,
    UNRECOGNIZED = -1,
}

export function imageSpec_ImageSizeFromJSON(object: any): ImageSpec_ImageSize {
    switch (object) {
        case 0:
        case 'IMAGE_SIZE_UNSPECIFIED':
            return ImageSpec_ImageSize.IMAGE_SIZE_UNSPECIFIED;
        case 1:
        case 'IMAGE_SIZE_ENORMOUS':
            return ImageSpec_ImageSize.IMAGE_SIZE_ENORMOUS;
        case 2:
        case 'IMAGE_SIZE_LARGE':
            return ImageSpec_ImageSize.IMAGE_SIZE_LARGE;
        case 3:
        case 'IMAGE_SIZE_MEDIUM':
            return ImageSpec_ImageSize.IMAGE_SIZE_MEDIUM;
        case 4:
        case 'IMAGE_SIZE_SMALL':
            return ImageSpec_ImageSize.IMAGE_SIZE_SMALL;
        case 5:
        case 'IMAGE_SIZE_TINY':
            return ImageSpec_ImageSize.IMAGE_SIZE_TINY;
        case 6:
        case 'IMAGE_SIZE_WALLPAPER':
            return ImageSpec_ImageSize.IMAGE_SIZE_WALLPAPER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ImageSpec_ImageSize.UNRECOGNIZED;
    }
}

export function imageSpec_ImageSizeToJSON(object: ImageSpec_ImageSize): string {
    switch (object) {
        case ImageSpec_ImageSize.IMAGE_SIZE_UNSPECIFIED:
            return 'IMAGE_SIZE_UNSPECIFIED';
        case ImageSpec_ImageSize.IMAGE_SIZE_ENORMOUS:
            return 'IMAGE_SIZE_ENORMOUS';
        case ImageSpec_ImageSize.IMAGE_SIZE_LARGE:
            return 'IMAGE_SIZE_LARGE';
        case ImageSpec_ImageSize.IMAGE_SIZE_MEDIUM:
            return 'IMAGE_SIZE_MEDIUM';
        case ImageSpec_ImageSize.IMAGE_SIZE_SMALL:
            return 'IMAGE_SIZE_SMALL';
        case ImageSpec_ImageSize.IMAGE_SIZE_TINY:
            return 'IMAGE_SIZE_TINY';
        case ImageSpec_ImageSize.IMAGE_SIZE_WALLPAPER:
            return 'IMAGE_SIZE_WALLPAPER';
        default:
            return 'UNKNOWN';
    }
}

export enum ImageSpec_ImageColor {
    IMAGE_COLOR_UNSPECIFIED = 0,
    /** IMAGE_COLOR_COLOR - Color images. */
    IMAGE_COLOR_COLOR = 1,
    /** IMAGE_COLOR_GRAYSCALE - Black and white images. */
    IMAGE_COLOR_GRAYSCALE = 2,
    /** IMAGE_COLOR_RED - Red is the main color of the image. */
    IMAGE_COLOR_RED = 3,
    /** IMAGE_COLOR_ORANGE - Orange is the main color of the image. */
    IMAGE_COLOR_ORANGE = 4,
    /** IMAGE_COLOR_YELLOW - Yellow is the main color of the image. */
    IMAGE_COLOR_YELLOW = 5,
    /** IMAGE_COLOR_GREEN - Green is the main color of the image. */
    IMAGE_COLOR_GREEN = 6,
    /** IMAGE_COLOR_CYAN - Cyan is the main color of the image. */
    IMAGE_COLOR_CYAN = 7,
    /** IMAGE_COLOR_BLUE - Blue is the main color of the image. */
    IMAGE_COLOR_BLUE = 8,
    /** IMAGE_COLOR_VIOLET - Violet is the main color of the image. */
    IMAGE_COLOR_VIOLET = 9,
    /** IMAGE_COLOR_WHITE - White is the main color of the image. */
    IMAGE_COLOR_WHITE = 10,
    /** IMAGE_COLOR_BLACK - Black is the main color of the image. */
    IMAGE_COLOR_BLACK = 11,
    UNRECOGNIZED = -1,
}

export function imageSpec_ImageColorFromJSON(object: any): ImageSpec_ImageColor {
    switch (object) {
        case 0:
        case 'IMAGE_COLOR_UNSPECIFIED':
            return ImageSpec_ImageColor.IMAGE_COLOR_UNSPECIFIED;
        case 1:
        case 'IMAGE_COLOR_COLOR':
            return ImageSpec_ImageColor.IMAGE_COLOR_COLOR;
        case 2:
        case 'IMAGE_COLOR_GRAYSCALE':
            return ImageSpec_ImageColor.IMAGE_COLOR_GRAYSCALE;
        case 3:
        case 'IMAGE_COLOR_RED':
            return ImageSpec_ImageColor.IMAGE_COLOR_RED;
        case 4:
        case 'IMAGE_COLOR_ORANGE':
            return ImageSpec_ImageColor.IMAGE_COLOR_ORANGE;
        case 5:
        case 'IMAGE_COLOR_YELLOW':
            return ImageSpec_ImageColor.IMAGE_COLOR_YELLOW;
        case 6:
        case 'IMAGE_COLOR_GREEN':
            return ImageSpec_ImageColor.IMAGE_COLOR_GREEN;
        case 7:
        case 'IMAGE_COLOR_CYAN':
            return ImageSpec_ImageColor.IMAGE_COLOR_CYAN;
        case 8:
        case 'IMAGE_COLOR_BLUE':
            return ImageSpec_ImageColor.IMAGE_COLOR_BLUE;
        case 9:
        case 'IMAGE_COLOR_VIOLET':
            return ImageSpec_ImageColor.IMAGE_COLOR_VIOLET;
        case 10:
        case 'IMAGE_COLOR_WHITE':
            return ImageSpec_ImageColor.IMAGE_COLOR_WHITE;
        case 11:
        case 'IMAGE_COLOR_BLACK':
            return ImageSpec_ImageColor.IMAGE_COLOR_BLACK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ImageSpec_ImageColor.UNRECOGNIZED;
    }
}

export function imageSpec_ImageColorToJSON(object: ImageSpec_ImageColor): string {
    switch (object) {
        case ImageSpec_ImageColor.IMAGE_COLOR_UNSPECIFIED:
            return 'IMAGE_COLOR_UNSPECIFIED';
        case ImageSpec_ImageColor.IMAGE_COLOR_COLOR:
            return 'IMAGE_COLOR_COLOR';
        case ImageSpec_ImageColor.IMAGE_COLOR_GRAYSCALE:
            return 'IMAGE_COLOR_GRAYSCALE';
        case ImageSpec_ImageColor.IMAGE_COLOR_RED:
            return 'IMAGE_COLOR_RED';
        case ImageSpec_ImageColor.IMAGE_COLOR_ORANGE:
            return 'IMAGE_COLOR_ORANGE';
        case ImageSpec_ImageColor.IMAGE_COLOR_YELLOW:
            return 'IMAGE_COLOR_YELLOW';
        case ImageSpec_ImageColor.IMAGE_COLOR_GREEN:
            return 'IMAGE_COLOR_GREEN';
        case ImageSpec_ImageColor.IMAGE_COLOR_CYAN:
            return 'IMAGE_COLOR_CYAN';
        case ImageSpec_ImageColor.IMAGE_COLOR_BLUE:
            return 'IMAGE_COLOR_BLUE';
        case ImageSpec_ImageColor.IMAGE_COLOR_VIOLET:
            return 'IMAGE_COLOR_VIOLET';
        case ImageSpec_ImageColor.IMAGE_COLOR_WHITE:
            return 'IMAGE_COLOR_WHITE';
        case ImageSpec_ImageColor.IMAGE_COLOR_BLACK:
            return 'IMAGE_COLOR_BLACK';
        default:
            return 'UNKNOWN';
    }
}

export interface ImageSearchRequest {
    /** Search query. */
    query?: SearchQuery;
    /** Searching for images with a particular size, orientation, format or color. */
    imageSpec?: ImageSpec;
    /** Searching for images on a particular website only. */
    site: string;
    /** Number of results per search result page. */
    docsOnPage: number;
    /** ID of the folder. */
    folderId: string;
    /** User-Agent request header value. */
    userAgent: string;
}

export interface ImageSearchResponse {
    /** Search results in XML format. */
    rawData: Buffer;
}

const baseImageSpec: object = { format: 0, size: 0, orientation: 0, color: 0 };

export const ImageSpec = {
    encode(message: ImageSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.format !== 0) {
            writer.uint32(8).int32(message.format);
        }
        if (message.size !== 0) {
            writer.uint32(16).int32(message.size);
        }
        if (message.orientation !== 0) {
            writer.uint32(24).int32(message.orientation);
        }
        if (message.color !== 0) {
            writer.uint32(32).int32(message.color);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageSpec } as ImageSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.format = reader.int32() as any;
                    break;
                case 2:
                    message.size = reader.int32() as any;
                    break;
                case 3:
                    message.orientation = reader.int32() as any;
                    break;
                case 4:
                    message.color = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImageSpec {
        const message = { ...baseImageSpec } as ImageSpec;
        message.format =
            object.format !== undefined && object.format !== null
                ? imageSpec_ImageFormatFromJSON(object.format)
                : 0;
        message.size =
            object.size !== undefined && object.size !== null
                ? imageSpec_ImageSizeFromJSON(object.size)
                : 0;
        message.orientation =
            object.orientation !== undefined && object.orientation !== null
                ? imageSpec_ImageOrientationFromJSON(object.orientation)
                : 0;
        message.color =
            object.color !== undefined && object.color !== null
                ? imageSpec_ImageColorFromJSON(object.color)
                : 0;
        return message;
    },

    toJSON(message: ImageSpec): unknown {
        const obj: any = {};
        message.format !== undefined && (obj.format = imageSpec_ImageFormatToJSON(message.format));
        message.size !== undefined && (obj.size = imageSpec_ImageSizeToJSON(message.size));
        message.orientation !== undefined &&
            (obj.orientation = imageSpec_ImageOrientationToJSON(message.orientation));
        message.color !== undefined && (obj.color = imageSpec_ImageColorToJSON(message.color));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImageSpec>, I>>(object: I): ImageSpec {
        const message = { ...baseImageSpec } as ImageSpec;
        message.format = object.format ?? 0;
        message.size = object.size ?? 0;
        message.orientation = object.orientation ?? 0;
        message.color = object.color ?? 0;
        return message;
    },
};

const baseImageSearchRequest: object = { site: '', docsOnPage: 0, folderId: '', userAgent: '' };

export const ImageSearchRequest = {
    encode(message: ImageSearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.query !== undefined) {
            SearchQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        if (message.imageSpec !== undefined) {
            ImageSpec.encode(message.imageSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.site !== '') {
            writer.uint32(26).string(message.site);
        }
        if (message.docsOnPage !== 0) {
            writer.uint32(32).int64(message.docsOnPage);
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        if (message.userAgent !== '') {
            writer.uint32(50).string(message.userAgent);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageSearchRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageSearchRequest } as ImageSearchRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.query = SearchQuery.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.imageSpec = ImageSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.site = reader.string();
                    break;
                case 4:
                    message.docsOnPage = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.userAgent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImageSearchRequest {
        const message = { ...baseImageSearchRequest } as ImageSearchRequest;
        message.query =
            object.query !== undefined && object.query !== null
                ? SearchQuery.fromJSON(object.query)
                : undefined;
        message.imageSpec =
            object.imageSpec !== undefined && object.imageSpec !== null
                ? ImageSpec.fromJSON(object.imageSpec)
                : undefined;
        message.site = object.site !== undefined && object.site !== null ? String(object.site) : '';
        message.docsOnPage =
            object.docsOnPage !== undefined && object.docsOnPage !== null
                ? Number(object.docsOnPage)
                : 0;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.userAgent =
            object.userAgent !== undefined && object.userAgent !== null
                ? String(object.userAgent)
                : '';
        return message;
    },

    toJSON(message: ImageSearchRequest): unknown {
        const obj: any = {};
        message.query !== undefined &&
            (obj.query = message.query ? SearchQuery.toJSON(message.query) : undefined);
        message.imageSpec !== undefined &&
            (obj.imageSpec = message.imageSpec ? ImageSpec.toJSON(message.imageSpec) : undefined);
        message.site !== undefined && (obj.site = message.site);
        message.docsOnPage !== undefined && (obj.docsOnPage = Math.round(message.docsOnPage));
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.userAgent !== undefined && (obj.userAgent = message.userAgent);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImageSearchRequest>, I>>(
        object: I,
    ): ImageSearchRequest {
        const message = { ...baseImageSearchRequest } as ImageSearchRequest;
        message.query =
            object.query !== undefined && object.query !== null
                ? SearchQuery.fromPartial(object.query)
                : undefined;
        message.imageSpec =
            object.imageSpec !== undefined && object.imageSpec !== null
                ? ImageSpec.fromPartial(object.imageSpec)
                : undefined;
        message.site = object.site ?? '';
        message.docsOnPage = object.docsOnPage ?? 0;
        message.folderId = object.folderId ?? '';
        message.userAgent = object.userAgent ?? '';
        return message;
    },
};

const baseImageSearchResponse: object = {};

export const ImageSearchResponse = {
    encode(message: ImageSearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.rawData.length !== 0) {
            writer.uint32(10).bytes(message.rawData);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImageSearchResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageSearchResponse } as ImageSearchResponse;
        message.rawData = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawData = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImageSearchResponse {
        const message = { ...baseImageSearchResponse } as ImageSearchResponse;
        message.rawData =
            object.rawData !== undefined && object.rawData !== null
                ? Buffer.from(bytesFromBase64(object.rawData))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: ImageSearchResponse): unknown {
        const obj: any = {};
        message.rawData !== undefined &&
            (obj.rawData = base64FromBytes(
                message.rawData !== undefined ? message.rawData : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImageSearchResponse>, I>>(
        object: I,
    ): ImageSearchResponse {
        const message = { ...baseImageSearchResponse } as ImageSearchResponse;
        message.rawData = object.rawData ?? Buffer.alloc(0);
        return message;
    },
};

/** A set of methods for searching of images using the Yandex Images. */
export const ImageSearchServiceService = {
    search: {
        path: '/yandex.cloud.searchapi.v2.ImageSearchService/Search',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ImageSearchRequest) =>
            Buffer.from(ImageSearchRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ImageSearchRequest.decode(value),
        responseSerialize: (value: ImageSearchResponse) =>
            Buffer.from(ImageSearchResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ImageSearchResponse.decode(value),
    },
} as const;

export interface ImageSearchServiceServer extends UntypedServiceImplementation {
    search: handleUnaryCall<ImageSearchRequest, ImageSearchResponse>;
}

export interface ImageSearchServiceClient extends Client {
    search(
        request: ImageSearchRequest,
        callback: (error: ServiceError | null, response: ImageSearchResponse) => void,
    ): ClientUnaryCall;
    search(
        request: ImageSearchRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ImageSearchResponse) => void,
    ): ClientUnaryCall;
    search(
        request: ImageSearchRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ImageSearchResponse) => void,
    ): ClientUnaryCall;
}

export const ImageSearchServiceClient = makeGenericClientConstructor(
    ImageSearchServiceService,
    'yandex.cloud.searchapi.v2.ImageSearchService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ImageSearchServiceClient;
    service: typeof ImageSearchServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
