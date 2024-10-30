/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    QuantileType,
    quantileTypeFromJSON,
    quantileTypeToJSON,
} from '../../../../../../yandex/cloud/loadtesting/api/v1/common/quantiles';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.report';

/** Aggregation function. */
export enum Aggregation {
    /** AGGREGATION_UNSPECIFIED - Unspecified. */
    AGGREGATION_UNSPECIFIED = 0,
    /** AGGREGATION_MIN - Minimum. */
    AGGREGATION_MIN = 1,
    /** AGGREGATION_MAX - Maximum. */
    AGGREGATION_MAX = 2,
    /** AGGREGATION_AVG - Average. */
    AGGREGATION_AVG = 4,
    /** AGGREGATION_MEDIAN - Median. */
    AGGREGATION_MEDIAN = 5,
    /** AGGREGATION_STD_DEV - Standard deviation. */
    AGGREGATION_STD_DEV = 6,
    UNRECOGNIZED = -1,
}

export function aggregationFromJSON(object: any): Aggregation {
    switch (object) {
        case 0:
        case 'AGGREGATION_UNSPECIFIED':
            return Aggregation.AGGREGATION_UNSPECIFIED;
        case 1:
        case 'AGGREGATION_MIN':
            return Aggregation.AGGREGATION_MIN;
        case 2:
        case 'AGGREGATION_MAX':
            return Aggregation.AGGREGATION_MAX;
        case 4:
        case 'AGGREGATION_AVG':
            return Aggregation.AGGREGATION_AVG;
        case 5:
        case 'AGGREGATION_MEDIAN':
            return Aggregation.AGGREGATION_MEDIAN;
        case 6:
        case 'AGGREGATION_STD_DEV':
            return Aggregation.AGGREGATION_STD_DEV;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Aggregation.UNRECOGNIZED;
    }
}

export function aggregationToJSON(object: Aggregation): string {
    switch (object) {
        case Aggregation.AGGREGATION_UNSPECIFIED:
            return 'AGGREGATION_UNSPECIFIED';
        case Aggregation.AGGREGATION_MIN:
            return 'AGGREGATION_MIN';
        case Aggregation.AGGREGATION_MAX:
            return 'AGGREGATION_MAX';
        case Aggregation.AGGREGATION_AVG:
            return 'AGGREGATION_AVG';
        case Aggregation.AGGREGATION_MEDIAN:
            return 'AGGREGATION_MEDIAN';
        case Aggregation.AGGREGATION_STD_DEV:
            return 'AGGREGATION_STD_DEV';
        default:
            return 'UNKNOWN';
    }
}

/** Comparison operator. */
export enum Comparison {
    /** COMPARISON_UNSPECIFIED - Unspecified. */
    COMPARISON_UNSPECIFIED = 0,
    /** COMPARISON_LT - Less than the specified value. */
    COMPARISON_LT = 1,
    /** COMPARISON_LTE - Less than or equal to the specified value. */
    COMPARISON_LTE = 2,
    /** COMPARISON_GT - Greater than the specified value. */
    COMPARISON_GT = 3,
    /** COMPARISON_GTE - Greater than or equal to the specified value. */
    COMPARISON_GTE = 4,
    UNRECOGNIZED = -1,
}

export function comparisonFromJSON(object: any): Comparison {
    switch (object) {
        case 0:
        case 'COMPARISON_UNSPECIFIED':
            return Comparison.COMPARISON_UNSPECIFIED;
        case 1:
        case 'COMPARISON_LT':
            return Comparison.COMPARISON_LT;
        case 2:
        case 'COMPARISON_LTE':
            return Comparison.COMPARISON_LTE;
        case 3:
        case 'COMPARISON_GT':
            return Comparison.COMPARISON_GT;
        case 4:
        case 'COMPARISON_GTE':
            return Comparison.COMPARISON_GTE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Comparison.UNRECOGNIZED;
    }
}

export function comparisonToJSON(object: Comparison): string {
    switch (object) {
        case Comparison.COMPARISON_UNSPECIFIED:
            return 'COMPARISON_UNSPECIFIED';
        case Comparison.COMPARISON_LT:
            return 'COMPARISON_LT';
        case Comparison.COMPARISON_LTE:
            return 'COMPARISON_LTE';
        case Comparison.COMPARISON_GT:
            return 'COMPARISON_GT';
        case Comparison.COMPARISON_GTE:
            return 'COMPARISON_GTE';
        default:
            return 'UNKNOWN';
    }
}

/** KPI (Key Performance Indicator) represents some integral indicator measured during test. */
export interface Kpi {
    $type: 'yandex.cloud.loadtesting.api.v1.report.Kpi';
    /** Kind of KPI. */
    selector?: KpiSelector;
    /** A condition that should be specified. */
    threshold?: KpiThreshold;
}

/** KPI threshold represents a condition that an actual value of test's KPI should satisfy. */
export interface KpiThreshold {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiThreshold';
    /** Value for comparison with an actual KPI value. */
    value: number;
    /**
     * Comparison operator for comparing actual with the threshold value.
     *
     * Rule: actual (</<=/>/>=) reference
     */
    comparison: Comparison;
}

/** KPI selector. */
export interface KpiSelector {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector';
    /** Response time cummulative quantile (percentile). */
    responseTime?: KpiSelector_ResponseTime | undefined;
    /** A number of instances throughout the test. */
    instances?: KpiSelector_Instances | undefined;
    /** An RPS at the moment the test has been auto-stopped. */
    imbalanceRps?: KpiSelector_ImbalanceRps | undefined;
    /** A total number of requests completed with certain protocol (HTTP, GRPC, etc.) codes. */
    protocolCodesAbsolute?: KpiSelector_ProtocolCodesAbsolute | undefined;
    /** A percentage of requests completed with certain protocol (HTTP, GRPC, etc.) codes. */
    protocolCodesRelative?: KpiSelector_ProtocolCodesRelative | undefined;
    /** A total number of requests completed with certain network codes. */
    networkCodesAbsolute?: KpiSelector_NetworkCodesAbsolute | undefined;
    /** A percentage of requests completed with certain network codes. */
    networkCodesRelative?: KpiSelector_NetworkCodesRelative | undefined;
}

/** Response time. */
export interface KpiSelector_ResponseTime {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ResponseTime';
    /** Cummulative quantile (percentile). */
    quantile: QuantileType;
}

/** Aggregated number of instances. */
export interface KpiSelector_Instances {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.Instances';
    /** Aggregation function. */
    agg: Aggregation;
}

/** Imbalance RPS. */
export interface KpiSelector_ImbalanceRps {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ImbalanceRps';
}

export interface KpiSelector_ProtocolCodesAbsolute {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ProtocolCodesAbsolute';
    /**
     * Protocol (HTTP, GRPC) code patterns to match.
     *
     * All successful HTTP responses: ['2xx', '3xx'].
     * All failed HTTP responses: ['0', '4xx', '5xx'].
     */
    codesPatterns: string[];
}

export interface KpiSelector_ProtocolCodesRelative {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ProtocolCodesRelative';
    /**
     * Protocol (HTTP, GRPC) code patterns to match.
     *
     * All successful HTTP responses: ['2xx', '3xx'].
     * All failed HTTP responses: ['0', '4xx', '5xx'].
     */
    codesPatterns: string[];
}

export interface KpiSelector_NetworkCodesAbsolute {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.NetworkCodesAbsolute';
    /**
     * Network code patterns to match.
     *
     * All successful network responses: ['0'].
     * All failed network responses: ['xx', 'xxx'].
     */
    codesPatterns: string[];
}

export interface KpiSelector_NetworkCodesRelative {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.NetworkCodesRelative';
    /**
     * Network code patterns to match.
     *
     * All successful network responses: ['0'].
     * All failed network responses: ['xx', 'xxx'].
     */
    codesPatterns: string[];
}

const baseKpi: object = { $type: 'yandex.cloud.loadtesting.api.v1.report.Kpi' };

export const Kpi = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.Kpi' as const,

    encode(message: Kpi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.selector !== undefined) {
            KpiSelector.encode(message.selector, writer.uint32(10).fork()).ldelim();
        }
        if (message.threshold !== undefined) {
            KpiThreshold.encode(message.threshold, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Kpi {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKpi } as Kpi;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.selector = KpiSelector.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.threshold = KpiThreshold.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Kpi {
        const message = { ...baseKpi } as Kpi;
        message.selector =
            object.selector !== undefined && object.selector !== null
                ? KpiSelector.fromJSON(object.selector)
                : undefined;
        message.threshold =
            object.threshold !== undefined && object.threshold !== null
                ? KpiThreshold.fromJSON(object.threshold)
                : undefined;
        return message;
    },

    toJSON(message: Kpi): unknown {
        const obj: any = {};
        message.selector !== undefined &&
            (obj.selector = message.selector ? KpiSelector.toJSON(message.selector) : undefined);
        message.threshold !== undefined &&
            (obj.threshold = message.threshold
                ? KpiThreshold.toJSON(message.threshold)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Kpi>, I>>(object: I): Kpi {
        const message = { ...baseKpi } as Kpi;
        message.selector =
            object.selector !== undefined && object.selector !== null
                ? KpiSelector.fromPartial(object.selector)
                : undefined;
        message.threshold =
            object.threshold !== undefined && object.threshold !== null
                ? KpiThreshold.fromPartial(object.threshold)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Kpi.$type, Kpi);

const baseKpiThreshold: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiThreshold',
    value: 0,
    comparison: 0,
};

export const KpiThreshold = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiThreshold' as const,

    encode(message: KpiThreshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(9).double(message.value);
        }
        if (message.comparison !== 0) {
            writer.uint32(16).int32(message.comparison);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiThreshold {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKpiThreshold } as KpiThreshold;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.double();
                    break;
                case 2:
                    message.comparison = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiThreshold {
        const message = { ...baseKpiThreshold } as KpiThreshold;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        message.comparison =
            object.comparison !== undefined && object.comparison !== null
                ? comparisonFromJSON(object.comparison)
                : 0;
        return message;
    },

    toJSON(message: KpiThreshold): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        message.comparison !== undefined && (obj.comparison = comparisonToJSON(message.comparison));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiThreshold>, I>>(object: I): KpiThreshold {
        const message = { ...baseKpiThreshold } as KpiThreshold;
        message.value = object.value ?? 0;
        message.comparison = object.comparison ?? 0;
        return message;
    },
};

messageTypeRegistry.set(KpiThreshold.$type, KpiThreshold);

const baseKpiSelector: object = { $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector' };

export const KpiSelector = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector' as const,

    encode(message: KpiSelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.responseTime !== undefined) {
            KpiSelector_ResponseTime.encode(
                message.responseTime,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.instances !== undefined) {
            KpiSelector_Instances.encode(message.instances, writer.uint32(18).fork()).ldelim();
        }
        if (message.imbalanceRps !== undefined) {
            KpiSelector_ImbalanceRps.encode(
                message.imbalanceRps,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.protocolCodesAbsolute !== undefined) {
            KpiSelector_ProtocolCodesAbsolute.encode(
                message.protocolCodesAbsolute,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.protocolCodesRelative !== undefined) {
            KpiSelector_ProtocolCodesRelative.encode(
                message.protocolCodesRelative,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.networkCodesAbsolute !== undefined) {
            KpiSelector_NetworkCodesAbsolute.encode(
                message.networkCodesAbsolute,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.networkCodesRelative !== undefined) {
            KpiSelector_NetworkCodesRelative.encode(
                message.networkCodesRelative,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiSelector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKpiSelector } as KpiSelector;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.responseTime = KpiSelector_ResponseTime.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instances = KpiSelector_Instances.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.imbalanceRps = KpiSelector_ImbalanceRps.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.protocolCodesAbsolute = KpiSelector_ProtocolCodesAbsolute.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.protocolCodesRelative = KpiSelector_ProtocolCodesRelative.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.networkCodesAbsolute = KpiSelector_NetworkCodesAbsolute.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 7:
                    message.networkCodesRelative = KpiSelector_NetworkCodesRelative.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiSelector {
        const message = { ...baseKpiSelector } as KpiSelector;
        message.responseTime =
            object.responseTime !== undefined && object.responseTime !== null
                ? KpiSelector_ResponseTime.fromJSON(object.responseTime)
                : undefined;
        message.instances =
            object.instances !== undefined && object.instances !== null
                ? KpiSelector_Instances.fromJSON(object.instances)
                : undefined;
        message.imbalanceRps =
            object.imbalanceRps !== undefined && object.imbalanceRps !== null
                ? KpiSelector_ImbalanceRps.fromJSON(object.imbalanceRps)
                : undefined;
        message.protocolCodesAbsolute =
            object.protocolCodesAbsolute !== undefined && object.protocolCodesAbsolute !== null
                ? KpiSelector_ProtocolCodesAbsolute.fromJSON(object.protocolCodesAbsolute)
                : undefined;
        message.protocolCodesRelative =
            object.protocolCodesRelative !== undefined && object.protocolCodesRelative !== null
                ? KpiSelector_ProtocolCodesRelative.fromJSON(object.protocolCodesRelative)
                : undefined;
        message.networkCodesAbsolute =
            object.networkCodesAbsolute !== undefined && object.networkCodesAbsolute !== null
                ? KpiSelector_NetworkCodesAbsolute.fromJSON(object.networkCodesAbsolute)
                : undefined;
        message.networkCodesRelative =
            object.networkCodesRelative !== undefined && object.networkCodesRelative !== null
                ? KpiSelector_NetworkCodesRelative.fromJSON(object.networkCodesRelative)
                : undefined;
        return message;
    },

    toJSON(message: KpiSelector): unknown {
        const obj: any = {};
        message.responseTime !== undefined &&
            (obj.responseTime = message.responseTime
                ? KpiSelector_ResponseTime.toJSON(message.responseTime)
                : undefined);
        message.instances !== undefined &&
            (obj.instances = message.instances
                ? KpiSelector_Instances.toJSON(message.instances)
                : undefined);
        message.imbalanceRps !== undefined &&
            (obj.imbalanceRps = message.imbalanceRps
                ? KpiSelector_ImbalanceRps.toJSON(message.imbalanceRps)
                : undefined);
        message.protocolCodesAbsolute !== undefined &&
            (obj.protocolCodesAbsolute = message.protocolCodesAbsolute
                ? KpiSelector_ProtocolCodesAbsolute.toJSON(message.protocolCodesAbsolute)
                : undefined);
        message.protocolCodesRelative !== undefined &&
            (obj.protocolCodesRelative = message.protocolCodesRelative
                ? KpiSelector_ProtocolCodesRelative.toJSON(message.protocolCodesRelative)
                : undefined);
        message.networkCodesAbsolute !== undefined &&
            (obj.networkCodesAbsolute = message.networkCodesAbsolute
                ? KpiSelector_NetworkCodesAbsolute.toJSON(message.networkCodesAbsolute)
                : undefined);
        message.networkCodesRelative !== undefined &&
            (obj.networkCodesRelative = message.networkCodesRelative
                ? KpiSelector_NetworkCodesRelative.toJSON(message.networkCodesRelative)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiSelector>, I>>(object: I): KpiSelector {
        const message = { ...baseKpiSelector } as KpiSelector;
        message.responseTime =
            object.responseTime !== undefined && object.responseTime !== null
                ? KpiSelector_ResponseTime.fromPartial(object.responseTime)
                : undefined;
        message.instances =
            object.instances !== undefined && object.instances !== null
                ? KpiSelector_Instances.fromPartial(object.instances)
                : undefined;
        message.imbalanceRps =
            object.imbalanceRps !== undefined && object.imbalanceRps !== null
                ? KpiSelector_ImbalanceRps.fromPartial(object.imbalanceRps)
                : undefined;
        message.protocolCodesAbsolute =
            object.protocolCodesAbsolute !== undefined && object.protocolCodesAbsolute !== null
                ? KpiSelector_ProtocolCodesAbsolute.fromPartial(object.protocolCodesAbsolute)
                : undefined;
        message.protocolCodesRelative =
            object.protocolCodesRelative !== undefined && object.protocolCodesRelative !== null
                ? KpiSelector_ProtocolCodesRelative.fromPartial(object.protocolCodesRelative)
                : undefined;
        message.networkCodesAbsolute =
            object.networkCodesAbsolute !== undefined && object.networkCodesAbsolute !== null
                ? KpiSelector_NetworkCodesAbsolute.fromPartial(object.networkCodesAbsolute)
                : undefined;
        message.networkCodesRelative =
            object.networkCodesRelative !== undefined && object.networkCodesRelative !== null
                ? KpiSelector_NetworkCodesRelative.fromPartial(object.networkCodesRelative)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(KpiSelector.$type, KpiSelector);

const baseKpiSelector_ResponseTime: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ResponseTime',
    quantile: 0,
};

export const KpiSelector_ResponseTime = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ResponseTime' as const,

    encode(
        message: KpiSelector_ResponseTime,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quantile !== 0) {
            writer.uint32(8).int32(message.quantile);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiSelector_ResponseTime {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKpiSelector_ResponseTime } as KpiSelector_ResponseTime;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantile = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiSelector_ResponseTime {
        const message = { ...baseKpiSelector_ResponseTime } as KpiSelector_ResponseTime;
        message.quantile =
            object.quantile !== undefined && object.quantile !== null
                ? quantileTypeFromJSON(object.quantile)
                : 0;
        return message;
    },

    toJSON(message: KpiSelector_ResponseTime): unknown {
        const obj: any = {};
        message.quantile !== undefined && (obj.quantile = quantileTypeToJSON(message.quantile));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiSelector_ResponseTime>, I>>(
        object: I,
    ): KpiSelector_ResponseTime {
        const message = { ...baseKpiSelector_ResponseTime } as KpiSelector_ResponseTime;
        message.quantile = object.quantile ?? 0;
        return message;
    },
};

messageTypeRegistry.set(KpiSelector_ResponseTime.$type, KpiSelector_ResponseTime);

const baseKpiSelector_Instances: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.Instances',
    agg: 0,
};

export const KpiSelector_Instances = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.Instances' as const,

    encode(message: KpiSelector_Instances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.agg !== 0) {
            writer.uint32(8).int32(message.agg);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiSelector_Instances {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKpiSelector_Instances } as KpiSelector_Instances;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agg = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiSelector_Instances {
        const message = { ...baseKpiSelector_Instances } as KpiSelector_Instances;
        message.agg =
            object.agg !== undefined && object.agg !== null ? aggregationFromJSON(object.agg) : 0;
        return message;
    },

    toJSON(message: KpiSelector_Instances): unknown {
        const obj: any = {};
        message.agg !== undefined && (obj.agg = aggregationToJSON(message.agg));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiSelector_Instances>, I>>(
        object: I,
    ): KpiSelector_Instances {
        const message = { ...baseKpiSelector_Instances } as KpiSelector_Instances;
        message.agg = object.agg ?? 0;
        return message;
    },
};

messageTypeRegistry.set(KpiSelector_Instances.$type, KpiSelector_Instances);

const baseKpiSelector_ImbalanceRps: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ImbalanceRps',
};

export const KpiSelector_ImbalanceRps = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ImbalanceRps' as const,

    encode(_: KpiSelector_ImbalanceRps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiSelector_ImbalanceRps {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKpiSelector_ImbalanceRps } as KpiSelector_ImbalanceRps;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): KpiSelector_ImbalanceRps {
        const message = { ...baseKpiSelector_ImbalanceRps } as KpiSelector_ImbalanceRps;
        return message;
    },

    toJSON(_: KpiSelector_ImbalanceRps): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiSelector_ImbalanceRps>, I>>(
        _: I,
    ): KpiSelector_ImbalanceRps {
        const message = { ...baseKpiSelector_ImbalanceRps } as KpiSelector_ImbalanceRps;
        return message;
    },
};

messageTypeRegistry.set(KpiSelector_ImbalanceRps.$type, KpiSelector_ImbalanceRps);

const baseKpiSelector_ProtocolCodesAbsolute: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ProtocolCodesAbsolute',
    codesPatterns: '',
};

export const KpiSelector_ProtocolCodesAbsolute = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ProtocolCodesAbsolute' as const,

    encode(
        message: KpiSelector_ProtocolCodesAbsolute,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.codesPatterns) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiSelector_ProtocolCodesAbsolute {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseKpiSelector_ProtocolCodesAbsolute,
        } as KpiSelector_ProtocolCodesAbsolute;
        message.codesPatterns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codesPatterns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiSelector_ProtocolCodesAbsolute {
        const message = {
            ...baseKpiSelector_ProtocolCodesAbsolute,
        } as KpiSelector_ProtocolCodesAbsolute;
        message.codesPatterns = (object.codesPatterns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: KpiSelector_ProtocolCodesAbsolute): unknown {
        const obj: any = {};
        if (message.codesPatterns) {
            obj.codesPatterns = message.codesPatterns.map((e) => e);
        } else {
            obj.codesPatterns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiSelector_ProtocolCodesAbsolute>, I>>(
        object: I,
    ): KpiSelector_ProtocolCodesAbsolute {
        const message = {
            ...baseKpiSelector_ProtocolCodesAbsolute,
        } as KpiSelector_ProtocolCodesAbsolute;
        message.codesPatterns = object.codesPatterns?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(KpiSelector_ProtocolCodesAbsolute.$type, KpiSelector_ProtocolCodesAbsolute);

const baseKpiSelector_ProtocolCodesRelative: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ProtocolCodesRelative',
    codesPatterns: '',
};

export const KpiSelector_ProtocolCodesRelative = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.ProtocolCodesRelative' as const,

    encode(
        message: KpiSelector_ProtocolCodesRelative,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.codesPatterns) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiSelector_ProtocolCodesRelative {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseKpiSelector_ProtocolCodesRelative,
        } as KpiSelector_ProtocolCodesRelative;
        message.codesPatterns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codesPatterns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiSelector_ProtocolCodesRelative {
        const message = {
            ...baseKpiSelector_ProtocolCodesRelative,
        } as KpiSelector_ProtocolCodesRelative;
        message.codesPatterns = (object.codesPatterns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: KpiSelector_ProtocolCodesRelative): unknown {
        const obj: any = {};
        if (message.codesPatterns) {
            obj.codesPatterns = message.codesPatterns.map((e) => e);
        } else {
            obj.codesPatterns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiSelector_ProtocolCodesRelative>, I>>(
        object: I,
    ): KpiSelector_ProtocolCodesRelative {
        const message = {
            ...baseKpiSelector_ProtocolCodesRelative,
        } as KpiSelector_ProtocolCodesRelative;
        message.codesPatterns = object.codesPatterns?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(KpiSelector_ProtocolCodesRelative.$type, KpiSelector_ProtocolCodesRelative);

const baseKpiSelector_NetworkCodesAbsolute: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.NetworkCodesAbsolute',
    codesPatterns: '',
};

export const KpiSelector_NetworkCodesAbsolute = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.NetworkCodesAbsolute' as const,

    encode(
        message: KpiSelector_NetworkCodesAbsolute,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.codesPatterns) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiSelector_NetworkCodesAbsolute {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseKpiSelector_NetworkCodesAbsolute,
        } as KpiSelector_NetworkCodesAbsolute;
        message.codesPatterns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codesPatterns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiSelector_NetworkCodesAbsolute {
        const message = {
            ...baseKpiSelector_NetworkCodesAbsolute,
        } as KpiSelector_NetworkCodesAbsolute;
        message.codesPatterns = (object.codesPatterns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: KpiSelector_NetworkCodesAbsolute): unknown {
        const obj: any = {};
        if (message.codesPatterns) {
            obj.codesPatterns = message.codesPatterns.map((e) => e);
        } else {
            obj.codesPatterns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiSelector_NetworkCodesAbsolute>, I>>(
        object: I,
    ): KpiSelector_NetworkCodesAbsolute {
        const message = {
            ...baseKpiSelector_NetworkCodesAbsolute,
        } as KpiSelector_NetworkCodesAbsolute;
        message.codesPatterns = object.codesPatterns?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(KpiSelector_NetworkCodesAbsolute.$type, KpiSelector_NetworkCodesAbsolute);

const baseKpiSelector_NetworkCodesRelative: object = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.NetworkCodesRelative',
    codesPatterns: '',
};

export const KpiSelector_NetworkCodesRelative = {
    $type: 'yandex.cloud.loadtesting.api.v1.report.KpiSelector.NetworkCodesRelative' as const,

    encode(
        message: KpiSelector_NetworkCodesRelative,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.codesPatterns) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KpiSelector_NetworkCodesRelative {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseKpiSelector_NetworkCodesRelative,
        } as KpiSelector_NetworkCodesRelative;
        message.codesPatterns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codesPatterns.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KpiSelector_NetworkCodesRelative {
        const message = {
            ...baseKpiSelector_NetworkCodesRelative,
        } as KpiSelector_NetworkCodesRelative;
        message.codesPatterns = (object.codesPatterns ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: KpiSelector_NetworkCodesRelative): unknown {
        const obj: any = {};
        if (message.codesPatterns) {
            obj.codesPatterns = message.codesPatterns.map((e) => e);
        } else {
            obj.codesPatterns = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KpiSelector_NetworkCodesRelative>, I>>(
        object: I,
    ): KpiSelector_NetworkCodesRelative {
        const message = {
            ...baseKpiSelector_NetworkCodesRelative,
        } as KpiSelector_NetworkCodesRelative;
        message.codesPatterns = object.codesPatterns?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(KpiSelector_NetworkCodesRelative.$type, KpiSelector_NetworkCodesRelative);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
