/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Thresholds } from '../../../../yandex/cloud/monitoring/v3/thresholds';
import { Downsampling } from '../../../../yandex/cloud/monitoring/v3/downsampling';
import {
    UnitFormat,
    unitFormatFromJSON,
    unitFormatToJSON,
} from '../../../../yandex/cloud/monitoring/v3/unit_format';
import { Int64Value } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

/** Multi-source chart widget. */
export interface MultiSourceChartWidget {
    /** Required. Chart ID. */
    id: string;
    /** Targets. */
    targets: MultiSourceChartWidget_Target[];
    /** Data sources. */
    dataSources: MultiSourceChartWidget_DataSource[];
    /** Visualization settings. */
    visualizationSettings?: MultiSourceChartWidget_VisualizationSettings;
    /** Override settings. */
    seriesOverrides: MultiSourceChartWidget_SeriesOverrides[];
    /** Name hiding settings. */
    nameHidingSettings?: MultiSourceChartWidget_NameHidingSettings;
    /** Chart description in dashboard (not enabled in UI). */
    description: string;
    /** Chart widget title. */
    title: string;
    /** Enable legend under chart. */
    displayLegend: boolean;
    /** Fixed time interval for chart. */
    freeze: MultiSourceChartWidget_FreezeDuration;
    /** Setting for repeat panel / repeat row */
    repeat?: MultiSourceChartWidget_RepeatSettings;
    /** Threshold settings */
    thresholds?: Thresholds;
}

export enum MultiSourceChartWidget_FreezeDuration {
    FREEZE_DURATION_UNSPECIFIED = 0,
    /** FREEZE_DURATION_HOUR - Last hour. */
    FREEZE_DURATION_HOUR = 1,
    /** FREEZE_DURATION_DAY - Last day = last 24 hours. */
    FREEZE_DURATION_DAY = 2,
    /** FREEZE_DURATION_WEEK - Last 7 days. */
    FREEZE_DURATION_WEEK = 3,
    /** FREEZE_DURATION_MONTH - Last 31 days. */
    FREEZE_DURATION_MONTH = 4,
    UNRECOGNIZED = -1,
}

export function multiSourceChartWidget_FreezeDurationFromJSON(
    object: any,
): MultiSourceChartWidget_FreezeDuration {
    switch (object) {
        case 0:
        case 'FREEZE_DURATION_UNSPECIFIED':
            return MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_UNSPECIFIED;
        case 1:
        case 'FREEZE_DURATION_HOUR':
            return MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_HOUR;
        case 2:
        case 'FREEZE_DURATION_DAY':
            return MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_DAY;
        case 3:
        case 'FREEZE_DURATION_WEEK':
            return MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_WEEK;
        case 4:
        case 'FREEZE_DURATION_MONTH':
            return MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_MONTH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MultiSourceChartWidget_FreezeDuration.UNRECOGNIZED;
    }
}

export function multiSourceChartWidget_FreezeDurationToJSON(
    object: MultiSourceChartWidget_FreezeDuration,
): string {
    switch (object) {
        case MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_UNSPECIFIED:
            return 'FREEZE_DURATION_UNSPECIFIED';
        case MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_HOUR:
            return 'FREEZE_DURATION_HOUR';
        case MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_DAY:
            return 'FREEZE_DURATION_DAY';
        case MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_WEEK:
            return 'FREEZE_DURATION_WEEK';
        case MultiSourceChartWidget_FreezeDuration.FREEZE_DURATION_MONTH:
            return 'FREEZE_DURATION_MONTH';
        default:
            return 'UNKNOWN';
    }
}

/** Target settings. */
export interface MultiSourceChartWidget_Target {
    /** Monitoring target. */
    monitoringTarget?: MultiSourceChartWidget_Target_MonitoringTarget | undefined;
    /** Prometheus target. */
    prometheusTarget?: MultiSourceChartWidget_Target_PrometheusTarget | undefined;
}

export interface MultiSourceChartWidget_Target_MonitoringTarget {
    /** Required. Data source ID. */
    dataSourceId: string;
    /** Required. Query. */
    query: string;
    /** Text mode. */
    textMode: boolean;
    /** Checks that target is visible or invisible. */
    hidden: boolean;
    /** Name of the query. */
    name: string;
}

export interface MultiSourceChartWidget_Target_PrometheusTarget {
    /** Required. Data source ID. */
    dataSourceId: string;
    /** Required. Workspace ID. */
    workspaceId: string;
    /** Required. Query. */
    query: string;
    /** Text mode. */
    textMode: boolean;
    /** Checks that target is visible or invisible. */
    hidden: boolean;
    /** Name of the query. */
    name: string;
    /** Minimal step as raw string. */
    step: string;
}

/** Data source settings. */
export interface MultiSourceChartWidget_DataSource {
    /** Monitoring data source. */
    monitoringDataSource?: MultiSourceChartWidget_DataSource_MonitoringDataSource | undefined;
    /** Prometheus data source. */
    prometheusDataSource?: MultiSourceChartWidget_DataSource_PrometheusDataSource | undefined;
}

export interface MultiSourceChartWidget_DataSource_MonitoringDataSource {
    /** Required. Data source ID. */
    id: string;
    /** Required. Downsampling settings. */
    downsampling?: Downsampling;
}

export interface MultiSourceChartWidget_DataSource_PrometheusDataSource {
    /** Required. Data source ID. */
    id: string;
    /** Required. Grid step in milliseconds. */
    step: number;
}

/** Visualization settings. */
export interface MultiSourceChartWidget_VisualizationSettings {
    /** Visualization type. */
    type: MultiSourceChartWidget_VisualizationSettings_VisualizationType;
    /** Normalize. */
    normalize: boolean;
    /** Interpolate. */
    interpolate: MultiSourceChartWidget_VisualizationSettings_Interpolate;
    /** Aggregation. */
    aggregation: MultiSourceChartWidget_VisualizationSettings_SeriesAggregation;
    /** Color scheme settings. */
    colorSchemeSettings?: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings;
    /** Heatmap settings. */
    heatmapSettings?: MultiSourceChartWidget_VisualizationSettings_HeatmapSettings;
    /** Y axis settings. */
    yaxisSettings?: MultiSourceChartWidget_VisualizationSettings_YaxisSettings;
    /** Inside chart title. */
    title: string;
    /** Show chart labels. */
    showLabels: boolean;
}

/** Chart visualization type. */
export enum MultiSourceChartWidget_VisualizationSettings_VisualizationType {
    /** VISUALIZATION_TYPE_UNSPECIFIED - Not specified (line by default). */
    VISUALIZATION_TYPE_UNSPECIFIED = 0,
    /** VISUALIZATION_TYPE_LINE - Line chart. */
    VISUALIZATION_TYPE_LINE = 1,
    /** VISUALIZATION_TYPE_STACK - Stack chart. */
    VISUALIZATION_TYPE_STACK = 2,
    /** VISUALIZATION_TYPE_COLUMN - Points as columns chart. */
    VISUALIZATION_TYPE_COLUMN = 3,
    /** VISUALIZATION_TYPE_POINTS - Points. */
    VISUALIZATION_TYPE_POINTS = 4,
    /** VISUALIZATION_TYPE_PIE - Pie aggregation chart. */
    VISUALIZATION_TYPE_PIE = 5,
    /** VISUALIZATION_TYPE_BARS - Bars aggregation chart. */
    VISUALIZATION_TYPE_BARS = 6,
    /** VISUALIZATION_TYPE_DISTRIBUTION - Distribution aggregation chart. */
    VISUALIZATION_TYPE_DISTRIBUTION = 7,
    /** VISUALIZATION_TYPE_HEATMAP - Heatmap aggregation chart. */
    VISUALIZATION_TYPE_HEATMAP = 8,
    UNRECOGNIZED = -1,
}

export function multiSourceChartWidget_VisualizationSettings_VisualizationTypeFromJSON(
    object: any,
): MultiSourceChartWidget_VisualizationSettings_VisualizationType {
    switch (object) {
        case 0:
        case 'VISUALIZATION_TYPE_UNSPECIFIED':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_UNSPECIFIED;
        case 1:
        case 'VISUALIZATION_TYPE_LINE':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_LINE;
        case 2:
        case 'VISUALIZATION_TYPE_STACK':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_STACK;
        case 3:
        case 'VISUALIZATION_TYPE_COLUMN':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_COLUMN;
        case 4:
        case 'VISUALIZATION_TYPE_POINTS':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_POINTS;
        case 5:
        case 'VISUALIZATION_TYPE_PIE':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_PIE;
        case 6:
        case 'VISUALIZATION_TYPE_BARS':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_BARS;
        case 7:
        case 'VISUALIZATION_TYPE_DISTRIBUTION':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_DISTRIBUTION;
        case 8:
        case 'VISUALIZATION_TYPE_HEATMAP':
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_HEATMAP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MultiSourceChartWidget_VisualizationSettings_VisualizationType.UNRECOGNIZED;
    }
}

export function multiSourceChartWidget_VisualizationSettings_VisualizationTypeToJSON(
    object: MultiSourceChartWidget_VisualizationSettings_VisualizationType,
): string {
    switch (object) {
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_UNSPECIFIED:
            return 'VISUALIZATION_TYPE_UNSPECIFIED';
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_LINE:
            return 'VISUALIZATION_TYPE_LINE';
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_STACK:
            return 'VISUALIZATION_TYPE_STACK';
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_COLUMN:
            return 'VISUALIZATION_TYPE_COLUMN';
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_POINTS:
            return 'VISUALIZATION_TYPE_POINTS';
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_PIE:
            return 'VISUALIZATION_TYPE_PIE';
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_BARS:
            return 'VISUALIZATION_TYPE_BARS';
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_DISTRIBUTION:
            return 'VISUALIZATION_TYPE_DISTRIBUTION';
        case MultiSourceChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_HEATMAP:
            return 'VISUALIZATION_TYPE_HEATMAP';
        default:
            return 'UNKNOWN';
    }
}

export enum MultiSourceChartWidget_VisualizationSettings_Interpolate {
    /** INTERPOLATE_UNSPECIFIED - Not specified (linear by default). */
    INTERPOLATE_UNSPECIFIED = 0,
    /** INTERPOLATE_LINEAR - Linear. */
    INTERPOLATE_LINEAR = 1,
    /** INTERPOLATE_LEFT - Left. */
    INTERPOLATE_LEFT = 2,
    /** INTERPOLATE_RIGHT - Right. */
    INTERPOLATE_RIGHT = 3,
    UNRECOGNIZED = -1,
}

export function multiSourceChartWidget_VisualizationSettings_InterpolateFromJSON(
    object: any,
): MultiSourceChartWidget_VisualizationSettings_Interpolate {
    switch (object) {
        case 0:
        case 'INTERPOLATE_UNSPECIFIED':
            return MultiSourceChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_UNSPECIFIED;
        case 1:
        case 'INTERPOLATE_LINEAR':
            return MultiSourceChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LINEAR;
        case 2:
        case 'INTERPOLATE_LEFT':
            return MultiSourceChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LEFT;
        case 3:
        case 'INTERPOLATE_RIGHT':
            return MultiSourceChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_RIGHT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MultiSourceChartWidget_VisualizationSettings_Interpolate.UNRECOGNIZED;
    }
}

export function multiSourceChartWidget_VisualizationSettings_InterpolateToJSON(
    object: MultiSourceChartWidget_VisualizationSettings_Interpolate,
): string {
    switch (object) {
        case MultiSourceChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_UNSPECIFIED:
            return 'INTERPOLATE_UNSPECIFIED';
        case MultiSourceChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LINEAR:
            return 'INTERPOLATE_LINEAR';
        case MultiSourceChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LEFT:
            return 'INTERPOLATE_LEFT';
        case MultiSourceChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_RIGHT:
            return 'INTERPOLATE_RIGHT';
        default:
            return 'UNKNOWN';
    }
}

/**
 * Y axis type.
 * N.B. _TYPE prefix is necessary to expect name clash with Interpolate LINEAR value.
 */
export enum MultiSourceChartWidget_VisualizationSettings_YaxisType {
    /** YAXIS_TYPE_UNSPECIFIED - Not specified (linear by default). */
    YAXIS_TYPE_UNSPECIFIED = 0,
    /** YAXIS_TYPE_LINEAR - Linear. */
    YAXIS_TYPE_LINEAR = 1,
    /** YAXIS_TYPE_LOGARITHMIC - Logarithmic. */
    YAXIS_TYPE_LOGARITHMIC = 2,
    UNRECOGNIZED = -1,
}

export function multiSourceChartWidget_VisualizationSettings_YaxisTypeFromJSON(
    object: any,
): MultiSourceChartWidget_VisualizationSettings_YaxisType {
    switch (object) {
        case 0:
        case 'YAXIS_TYPE_UNSPECIFIED':
            return MultiSourceChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_UNSPECIFIED;
        case 1:
        case 'YAXIS_TYPE_LINEAR':
            return MultiSourceChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LINEAR;
        case 2:
        case 'YAXIS_TYPE_LOGARITHMIC':
            return MultiSourceChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LOGARITHMIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MultiSourceChartWidget_VisualizationSettings_YaxisType.UNRECOGNIZED;
    }
}

export function multiSourceChartWidget_VisualizationSettings_YaxisTypeToJSON(
    object: MultiSourceChartWidget_VisualizationSettings_YaxisType,
): string {
    switch (object) {
        case MultiSourceChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_UNSPECIFIED:
            return 'YAXIS_TYPE_UNSPECIFIED';
        case MultiSourceChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LINEAR:
            return 'YAXIS_TYPE_LINEAR';
        case MultiSourceChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LOGARITHMIC:
            return 'YAXIS_TYPE_LOGARITHMIC';
        default:
            return 'UNKNOWN';
    }
}

export enum MultiSourceChartWidget_VisualizationSettings_SeriesAggregation {
    /** SERIES_AGGREGATION_UNSPECIFIED - Not specified (avg by default). */
    SERIES_AGGREGATION_UNSPECIFIED = 0,
    /** SERIES_AGGREGATION_AVG - Average. */
    SERIES_AGGREGATION_AVG = 1,
    /** SERIES_AGGREGATION_MIN - Minimum. */
    SERIES_AGGREGATION_MIN = 2,
    /** SERIES_AGGREGATION_MAX - Maximum. */
    SERIES_AGGREGATION_MAX = 3,
    /** SERIES_AGGREGATION_LAST - Last non-NaN value. */
    SERIES_AGGREGATION_LAST = 4,
    /** SERIES_AGGREGATION_SUM - Sum. */
    SERIES_AGGREGATION_SUM = 5,
    UNRECOGNIZED = -1,
}

export function multiSourceChartWidget_VisualizationSettings_SeriesAggregationFromJSON(
    object: any,
): MultiSourceChartWidget_VisualizationSettings_SeriesAggregation {
    switch (object) {
        case 0:
        case 'SERIES_AGGREGATION_UNSPECIFIED':
            return MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_UNSPECIFIED;
        case 1:
        case 'SERIES_AGGREGATION_AVG':
            return MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_AVG;
        case 2:
        case 'SERIES_AGGREGATION_MIN':
            return MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MIN;
        case 3:
        case 'SERIES_AGGREGATION_MAX':
            return MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MAX;
        case 4:
        case 'SERIES_AGGREGATION_LAST':
            return MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_LAST;
        case 5:
        case 'SERIES_AGGREGATION_SUM':
            return MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_SUM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.UNRECOGNIZED;
    }
}

export function multiSourceChartWidget_VisualizationSettings_SeriesAggregationToJSON(
    object: MultiSourceChartWidget_VisualizationSettings_SeriesAggregation,
): string {
    switch (object) {
        case MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_UNSPECIFIED:
            return 'SERIES_AGGREGATION_UNSPECIFIED';
        case MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_AVG:
            return 'SERIES_AGGREGATION_AVG';
        case MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MIN:
            return 'SERIES_AGGREGATION_MIN';
        case MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MAX:
            return 'SERIES_AGGREGATION_MAX';
        case MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_LAST:
            return 'SERIES_AGGREGATION_LAST';
        case MultiSourceChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_SUM:
            return 'SERIES_AGGREGATION_SUM';
        default:
            return 'UNKNOWN';
    }
}

export interface MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings {
    /** Automatic color scheme. */
    automatic?:
        | MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme
        | undefined;
    /** Standard color scheme. */
    standard?:
        | MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme
        | undefined;
    /** Gradient color scheme. */
    gradient?:
        | MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme
        | undefined;
    /** Hash color scheme. Based on line name or value. */
    hash?:
        | MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme
        | undefined;
    /** Threshold settings color scheme. */
    thresholds?:
        | MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme
        | undefined;
}

export interface MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {}

export interface MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {}

export interface MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
    /** Gradient green value. */
    greenValue: string;
    /** Gradient yellow value. */
    yellowValue: string;
    /** Gradient red value. */
    redValue: string;
    /** Gradient violet_value. */
    violetValue: string;
}

export interface MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme {}

export interface MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme {
    aggregation: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation;
}

export enum MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation {
    AGGREGATION_UNSPECIFIED = 0,
    AGGREGATION_LAST = 1,
    AGGREGATION_MIN = 2,
    AGGREGATION_MAX = 3,
    AGGREGATION_AVG = 4,
    AGGREGATION_SUM = 5,
    UNRECOGNIZED = -1,
}

export function multiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_AggregationFromJSON(
    object: any,
): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation {
    switch (object) {
        case 0:
        case 'AGGREGATION_UNSPECIFIED':
            return MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_UNSPECIFIED;
        case 1:
        case 'AGGREGATION_LAST':
            return MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_LAST;
        case 2:
        case 'AGGREGATION_MIN':
            return MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_MIN;
        case 3:
        case 'AGGREGATION_MAX':
            return MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_MAX;
        case 4:
        case 'AGGREGATION_AVG':
            return MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_AVG;
        case 5:
        case 'AGGREGATION_SUM':
            return MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_SUM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.UNRECOGNIZED;
    }
}

export function multiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_AggregationToJSON(
    object: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation,
): string {
    switch (object) {
        case MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_UNSPECIFIED:
            return 'AGGREGATION_UNSPECIFIED';
        case MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_LAST:
            return 'AGGREGATION_LAST';
        case MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_MIN:
            return 'AGGREGATION_MIN';
        case MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_MAX:
            return 'AGGREGATION_MAX';
        case MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_AVG:
            return 'AGGREGATION_AVG';
        case MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_Aggregation.AGGREGATION_SUM:
            return 'AGGREGATION_SUM';
        default:
            return 'UNKNOWN';
    }
}

export interface MultiSourceChartWidget_VisualizationSettings_HeatmapSettings {
    /** Heatmap green value. */
    greenValue: string;
    /** Heatmap yellow value. */
    yellowValue: string;
    /** Heatmap red value. */
    redValue: string;
    /** Heatmap violet_value. */
    violetValue: string;
}

/** Y axis settings. */
export interface MultiSourceChartWidget_VisualizationSettings_Yaxis {
    /** Type. */
    type: MultiSourceChartWidget_VisualizationSettings_YaxisType;
    /** Title or empty. */
    title: string;
    /** Min value in extended number format or empty. */
    min: string;
    /** Max value in extended number format or empty. */
    max: string;
    /** Unit format. */
    unitFormat: UnitFormat;
    /** Tick value precision (null as default, 0-7 in other cases). */
    precision?: number;
}

export interface MultiSourceChartWidget_VisualizationSettings_YaxisSettings {
    /** Left Y axis settings. */
    left?: MultiSourceChartWidget_VisualizationSettings_Yaxis;
    /** Right Y axis settings. */
    right?: MultiSourceChartWidget_VisualizationSettings_Yaxis;
}

/** Series override settings. */
export interface MultiSourceChartWidget_SeriesOverrides {
    /** Series name. */
    name: string | undefined;
    /** Target index. */
    targetIndex: string | undefined;
    /** Required. Override settings. */
    settings?: MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings;
}

export enum MultiSourceChartWidget_SeriesOverrides_YaxisPosition {
    /** YAXIS_POSITION_UNSPECIFIED - Not specified (left by default). */
    YAXIS_POSITION_UNSPECIFIED = 0,
    /** YAXIS_POSITION_LEFT - Left. */
    YAXIS_POSITION_LEFT = 1,
    /** YAXIS_POSITION_RIGHT - Right. */
    YAXIS_POSITION_RIGHT = 2,
    UNRECOGNIZED = -1,
}

export function multiSourceChartWidget_SeriesOverrides_YaxisPositionFromJSON(
    object: any,
): MultiSourceChartWidget_SeriesOverrides_YaxisPosition {
    switch (object) {
        case 0:
        case 'YAXIS_POSITION_UNSPECIFIED':
            return MultiSourceChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_UNSPECIFIED;
        case 1:
        case 'YAXIS_POSITION_LEFT':
            return MultiSourceChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_LEFT;
        case 2:
        case 'YAXIS_POSITION_RIGHT':
            return MultiSourceChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_RIGHT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MultiSourceChartWidget_SeriesOverrides_YaxisPosition.UNRECOGNIZED;
    }
}

export function multiSourceChartWidget_SeriesOverrides_YaxisPositionToJSON(
    object: MultiSourceChartWidget_SeriesOverrides_YaxisPosition,
): string {
    switch (object) {
        case MultiSourceChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_UNSPECIFIED:
            return 'YAXIS_POSITION_UNSPECIFIED';
        case MultiSourceChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_LEFT:
            return 'YAXIS_POSITION_LEFT';
        case MultiSourceChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_RIGHT:
            return 'YAXIS_POSITION_RIGHT';
        default:
            return 'UNKNOWN';
    }
}

export enum MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType {
    /** SERIES_VISUALIZATION_TYPE_UNSPECIFIED - Not specified (line by default). */
    SERIES_VISUALIZATION_TYPE_UNSPECIFIED = 0,
    /** SERIES_VISUALIZATION_TYPE_LINE - Line chart. */
    SERIES_VISUALIZATION_TYPE_LINE = 1,
    /** SERIES_VISUALIZATION_TYPE_STACK - Stack chart. */
    SERIES_VISUALIZATION_TYPE_STACK = 2,
    /** SERIES_VISUALIZATION_TYPE_COLUMN - Points as columns chart. */
    SERIES_VISUALIZATION_TYPE_COLUMN = 3,
    /** SERIES_VISUALIZATION_TYPE_POINTS - Points. */
    SERIES_VISUALIZATION_TYPE_POINTS = 4,
    UNRECOGNIZED = -1,
}

export function multiSourceChartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(
    object: any,
): MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType {
    switch (object) {
        case 0:
        case 'SERIES_VISUALIZATION_TYPE_UNSPECIFIED':
            return MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_UNSPECIFIED;
        case 1:
        case 'SERIES_VISUALIZATION_TYPE_LINE':
            return MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_LINE;
        case 2:
        case 'SERIES_VISUALIZATION_TYPE_STACK':
            return MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_STACK;
        case 3:
        case 'SERIES_VISUALIZATION_TYPE_COLUMN':
            return MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_COLUMN;
        case 4:
        case 'SERIES_VISUALIZATION_TYPE_POINTS':
            return MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_POINTS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.UNRECOGNIZED;
    }
}

export function multiSourceChartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(
    object: MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType,
): string {
    switch (object) {
        case MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_UNSPECIFIED:
            return 'SERIES_VISUALIZATION_TYPE_UNSPECIFIED';
        case MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_LINE:
            return 'SERIES_VISUALIZATION_TYPE_LINE';
        case MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_STACK:
            return 'SERIES_VISUALIZATION_TYPE_STACK';
        case MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_COLUMN:
            return 'SERIES_VISUALIZATION_TYPE_COLUMN';
        case MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_POINTS:
            return 'SERIES_VISUALIZATION_TYPE_POINTS';
        default:
            return 'UNKNOWN';
    }
}

export interface MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings {
    /** Series name or empty. */
    name: string;
    /** Series color or empty. */
    color: string;
    /** Type. */
    type: MultiSourceChartWidget_SeriesOverrides_SeriesVisualizationType;
    /** Stack name or empty. */
    stackName: string;
    /** Stack grow down. */
    growDown: boolean;
    /** Yaxis position. */
    yaxisPosition: MultiSourceChartWidget_SeriesOverrides_YaxisPosition;
}

/** Name hiding settings. */
export interface MultiSourceChartWidget_NameHidingSettings {
    /** True if we want to show concrete series names only, false if we want to hide concrete series names. */
    positive: boolean;
    /** Series names to show or hide. */
    names: string[];
}

export interface MultiSourceChartWidget_RepeatSettings {
    /** Parameters to repeat by. */
    repeatBy: string[];
    /** Max number of chart in one row. */
    maxChartsInRow: number;
}

const baseMultiSourceChartWidget: object = {
    id: '',
    description: '',
    title: '',
    displayLegend: false,
    freeze: 0,
};

export const MultiSourceChartWidget = {
    encode(message: MultiSourceChartWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.targets) {
            MultiSourceChartWidget_Target.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dataSources) {
            MultiSourceChartWidget_DataSource.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.visualizationSettings !== undefined) {
            MultiSourceChartWidget_VisualizationSettings.encode(
                message.visualizationSettings,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        for (const v of message.seriesOverrides) {
            MultiSourceChartWidget_SeriesOverrides.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.nameHidingSettings !== undefined) {
            MultiSourceChartWidget_NameHidingSettings.encode(
                message.nameHidingSettings,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        if (message.title !== '') {
            writer.uint32(66).string(message.title);
        }
        if (message.displayLegend === true) {
            writer.uint32(72).bool(message.displayLegend);
        }
        if (message.freeze !== 0) {
            writer.uint32(80).int32(message.freeze);
        }
        if (message.repeat !== undefined) {
            MultiSourceChartWidget_RepeatSettings.encode(
                message.repeat,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.thresholds !== undefined) {
            Thresholds.encode(message.thresholds, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSourceChartWidget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMultiSourceChartWidget } as MultiSourceChartWidget;
        message.targets = [];
        message.dataSources = [];
        message.seriesOverrides = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.targets.push(
                        MultiSourceChartWidget_Target.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.dataSources.push(
                        MultiSourceChartWidget_DataSource.decode(reader, reader.uint32()),
                    );
                    break;
                case 4:
                    message.visualizationSettings =
                        MultiSourceChartWidget_VisualizationSettings.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 5:
                    message.seriesOverrides.push(
                        MultiSourceChartWidget_SeriesOverrides.decode(reader, reader.uint32()),
                    );
                    break;
                case 6:
                    message.nameHidingSettings = MultiSourceChartWidget_NameHidingSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                case 8:
                    message.title = reader.string();
                    break;
                case 9:
                    message.displayLegend = reader.bool();
                    break;
                case 10:
                    message.freeze = reader.int32() as any;
                    break;
                case 11:
                    message.repeat = MultiSourceChartWidget_RepeatSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.thresholds = Thresholds.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget {
        const message = { ...baseMultiSourceChartWidget } as MultiSourceChartWidget;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.targets = (object.targets ?? []).map((e: any) =>
            MultiSourceChartWidget_Target.fromJSON(e),
        );
        message.dataSources = (object.dataSources ?? []).map((e: any) =>
            MultiSourceChartWidget_DataSource.fromJSON(e),
        );
        message.visualizationSettings =
            object.visualizationSettings !== undefined && object.visualizationSettings !== null
                ? MultiSourceChartWidget_VisualizationSettings.fromJSON(
                      object.visualizationSettings,
                  )
                : undefined;
        message.seriesOverrides = (object.seriesOverrides ?? []).map((e: any) =>
            MultiSourceChartWidget_SeriesOverrides.fromJSON(e),
        );
        message.nameHidingSettings =
            object.nameHidingSettings !== undefined && object.nameHidingSettings !== null
                ? MultiSourceChartWidget_NameHidingSettings.fromJSON(object.nameHidingSettings)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.displayLegend =
            object.displayLegend !== undefined && object.displayLegend !== null
                ? Boolean(object.displayLegend)
                : false;
        message.freeze =
            object.freeze !== undefined && object.freeze !== null
                ? multiSourceChartWidget_FreezeDurationFromJSON(object.freeze)
                : 0;
        message.repeat =
            object.repeat !== undefined && object.repeat !== null
                ? MultiSourceChartWidget_RepeatSettings.fromJSON(object.repeat)
                : undefined;
        message.thresholds =
            object.thresholds !== undefined && object.thresholds !== null
                ? Thresholds.fromJSON(object.thresholds)
                : undefined;
        return message;
    },

    toJSON(message: MultiSourceChartWidget): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.targets) {
            obj.targets = message.targets.map((e) =>
                e ? MultiSourceChartWidget_Target.toJSON(e) : undefined,
            );
        } else {
            obj.targets = [];
        }
        if (message.dataSources) {
            obj.dataSources = message.dataSources.map((e) =>
                e ? MultiSourceChartWidget_DataSource.toJSON(e) : undefined,
            );
        } else {
            obj.dataSources = [];
        }
        message.visualizationSettings !== undefined &&
            (obj.visualizationSettings = message.visualizationSettings
                ? MultiSourceChartWidget_VisualizationSettings.toJSON(message.visualizationSettings)
                : undefined);
        if (message.seriesOverrides) {
            obj.seriesOverrides = message.seriesOverrides.map((e) =>
                e ? MultiSourceChartWidget_SeriesOverrides.toJSON(e) : undefined,
            );
        } else {
            obj.seriesOverrides = [];
        }
        message.nameHidingSettings !== undefined &&
            (obj.nameHidingSettings = message.nameHidingSettings
                ? MultiSourceChartWidget_NameHidingSettings.toJSON(message.nameHidingSettings)
                : undefined);
        message.description !== undefined && (obj.description = message.description);
        message.title !== undefined && (obj.title = message.title);
        message.displayLegend !== undefined && (obj.displayLegend = message.displayLegend);
        message.freeze !== undefined &&
            (obj.freeze = multiSourceChartWidget_FreezeDurationToJSON(message.freeze));
        message.repeat !== undefined &&
            (obj.repeat = message.repeat
                ? MultiSourceChartWidget_RepeatSettings.toJSON(message.repeat)
                : undefined);
        message.thresholds !== undefined &&
            (obj.thresholds = message.thresholds
                ? Thresholds.toJSON(message.thresholds)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget>, I>>(
        object: I,
    ): MultiSourceChartWidget {
        const message = { ...baseMultiSourceChartWidget } as MultiSourceChartWidget;
        message.id = object.id ?? '';
        message.targets =
            object.targets?.map((e) => MultiSourceChartWidget_Target.fromPartial(e)) || [];
        message.dataSources =
            object.dataSources?.map((e) => MultiSourceChartWidget_DataSource.fromPartial(e)) || [];
        message.visualizationSettings =
            object.visualizationSettings !== undefined && object.visualizationSettings !== null
                ? MultiSourceChartWidget_VisualizationSettings.fromPartial(
                      object.visualizationSettings,
                  )
                : undefined;
        message.seriesOverrides =
            object.seriesOverrides?.map((e) =>
                MultiSourceChartWidget_SeriesOverrides.fromPartial(e),
            ) || [];
        message.nameHidingSettings =
            object.nameHidingSettings !== undefined && object.nameHidingSettings !== null
                ? MultiSourceChartWidget_NameHidingSettings.fromPartial(object.nameHidingSettings)
                : undefined;
        message.description = object.description ?? '';
        message.title = object.title ?? '';
        message.displayLegend = object.displayLegend ?? false;
        message.freeze = object.freeze ?? 0;
        message.repeat =
            object.repeat !== undefined && object.repeat !== null
                ? MultiSourceChartWidget_RepeatSettings.fromPartial(object.repeat)
                : undefined;
        message.thresholds =
            object.thresholds !== undefined && object.thresholds !== null
                ? Thresholds.fromPartial(object.thresholds)
                : undefined;
        return message;
    },
};

const baseMultiSourceChartWidget_Target: object = {};

export const MultiSourceChartWidget_Target = {
    encode(
        message: MultiSourceChartWidget_Target,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.monitoringTarget !== undefined) {
            MultiSourceChartWidget_Target_MonitoringTarget.encode(
                message.monitoringTarget,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.prometheusTarget !== undefined) {
            MultiSourceChartWidget_Target_PrometheusTarget.encode(
                message.prometheusTarget,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSourceChartWidget_Target {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMultiSourceChartWidget_Target } as MultiSourceChartWidget_Target;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.monitoringTarget =
                        MultiSourceChartWidget_Target_MonitoringTarget.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 2:
                    message.prometheusTarget =
                        MultiSourceChartWidget_Target_PrometheusTarget.decode(
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

    fromJSON(object: any): MultiSourceChartWidget_Target {
        const message = { ...baseMultiSourceChartWidget_Target } as MultiSourceChartWidget_Target;
        message.monitoringTarget =
            object.monitoringTarget !== undefined && object.monitoringTarget !== null
                ? MultiSourceChartWidget_Target_MonitoringTarget.fromJSON(object.monitoringTarget)
                : undefined;
        message.prometheusTarget =
            object.prometheusTarget !== undefined && object.prometheusTarget !== null
                ? MultiSourceChartWidget_Target_PrometheusTarget.fromJSON(object.prometheusTarget)
                : undefined;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_Target): unknown {
        const obj: any = {};
        message.monitoringTarget !== undefined &&
            (obj.monitoringTarget = message.monitoringTarget
                ? MultiSourceChartWidget_Target_MonitoringTarget.toJSON(message.monitoringTarget)
                : undefined);
        message.prometheusTarget !== undefined &&
            (obj.prometheusTarget = message.prometheusTarget
                ? MultiSourceChartWidget_Target_PrometheusTarget.toJSON(message.prometheusTarget)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget_Target>, I>>(
        object: I,
    ): MultiSourceChartWidget_Target {
        const message = { ...baseMultiSourceChartWidget_Target } as MultiSourceChartWidget_Target;
        message.monitoringTarget =
            object.monitoringTarget !== undefined && object.monitoringTarget !== null
                ? MultiSourceChartWidget_Target_MonitoringTarget.fromPartial(
                      object.monitoringTarget,
                  )
                : undefined;
        message.prometheusTarget =
            object.prometheusTarget !== undefined && object.prometheusTarget !== null
                ? MultiSourceChartWidget_Target_PrometheusTarget.fromPartial(
                      object.prometheusTarget,
                  )
                : undefined;
        return message;
    },
};

const baseMultiSourceChartWidget_Target_MonitoringTarget: object = {
    dataSourceId: '',
    query: '',
    textMode: false,
    hidden: false,
    name: '',
};

export const MultiSourceChartWidget_Target_MonitoringTarget = {
    encode(
        message: MultiSourceChartWidget_Target_MonitoringTarget,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dataSourceId !== '') {
            writer.uint32(10).string(message.dataSourceId);
        }
        if (message.query !== '') {
            writer.uint32(18).string(message.query);
        }
        if (message.textMode === true) {
            writer.uint32(24).bool(message.textMode);
        }
        if (message.hidden === true) {
            writer.uint32(32).bool(message.hidden);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_Target_MonitoringTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_Target_MonitoringTarget,
        } as MultiSourceChartWidget_Target_MonitoringTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSourceId = reader.string();
                    break;
                case 2:
                    message.query = reader.string();
                    break;
                case 3:
                    message.textMode = reader.bool();
                    break;
                case 4:
                    message.hidden = reader.bool();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_Target_MonitoringTarget {
        const message = {
            ...baseMultiSourceChartWidget_Target_MonitoringTarget,
        } as MultiSourceChartWidget_Target_MonitoringTarget;
        message.dataSourceId =
            object.dataSourceId !== undefined && object.dataSourceId !== null
                ? String(object.dataSourceId)
                : '';
        message.query =
            object.query !== undefined && object.query !== null ? String(object.query) : '';
        message.textMode =
            object.textMode !== undefined && object.textMode !== null
                ? Boolean(object.textMode)
                : false;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null ? Boolean(object.hidden) : false;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: MultiSourceChartWidget_Target_MonitoringTarget): unknown {
        const obj: any = {};
        message.dataSourceId !== undefined && (obj.dataSourceId = message.dataSourceId);
        message.query !== undefined && (obj.query = message.query);
        message.textMode !== undefined && (obj.textMode = message.textMode);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget_Target_MonitoringTarget>, I>>(
        object: I,
    ): MultiSourceChartWidget_Target_MonitoringTarget {
        const message = {
            ...baseMultiSourceChartWidget_Target_MonitoringTarget,
        } as MultiSourceChartWidget_Target_MonitoringTarget;
        message.dataSourceId = object.dataSourceId ?? '';
        message.query = object.query ?? '';
        message.textMode = object.textMode ?? false;
        message.hidden = object.hidden ?? false;
        message.name = object.name ?? '';
        return message;
    },
};

const baseMultiSourceChartWidget_Target_PrometheusTarget: object = {
    dataSourceId: '',
    workspaceId: '',
    query: '',
    textMode: false,
    hidden: false,
    name: '',
    step: '',
};

export const MultiSourceChartWidget_Target_PrometheusTarget = {
    encode(
        message: MultiSourceChartWidget_Target_PrometheusTarget,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.dataSourceId !== '') {
            writer.uint32(10).string(message.dataSourceId);
        }
        if (message.workspaceId !== '') {
            writer.uint32(18).string(message.workspaceId);
        }
        if (message.query !== '') {
            writer.uint32(26).string(message.query);
        }
        if (message.textMode === true) {
            writer.uint32(32).bool(message.textMode);
        }
        if (message.hidden === true) {
            writer.uint32(40).bool(message.hidden);
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.step !== '') {
            writer.uint32(58).string(message.step);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_Target_PrometheusTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_Target_PrometheusTarget,
        } as MultiSourceChartWidget_Target_PrometheusTarget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSourceId = reader.string();
                    break;
                case 2:
                    message.workspaceId = reader.string();
                    break;
                case 3:
                    message.query = reader.string();
                    break;
                case 4:
                    message.textMode = reader.bool();
                    break;
                case 5:
                    message.hidden = reader.bool();
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.step = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_Target_PrometheusTarget {
        const message = {
            ...baseMultiSourceChartWidget_Target_PrometheusTarget,
        } as MultiSourceChartWidget_Target_PrometheusTarget;
        message.dataSourceId =
            object.dataSourceId !== undefined && object.dataSourceId !== null
                ? String(object.dataSourceId)
                : '';
        message.workspaceId =
            object.workspaceId !== undefined && object.workspaceId !== null
                ? String(object.workspaceId)
                : '';
        message.query =
            object.query !== undefined && object.query !== null ? String(object.query) : '';
        message.textMode =
            object.textMode !== undefined && object.textMode !== null
                ? Boolean(object.textMode)
                : false;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null ? Boolean(object.hidden) : false;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.step = object.step !== undefined && object.step !== null ? String(object.step) : '';
        return message;
    },

    toJSON(message: MultiSourceChartWidget_Target_PrometheusTarget): unknown {
        const obj: any = {};
        message.dataSourceId !== undefined && (obj.dataSourceId = message.dataSourceId);
        message.workspaceId !== undefined && (obj.workspaceId = message.workspaceId);
        message.query !== undefined && (obj.query = message.query);
        message.textMode !== undefined && (obj.textMode = message.textMode);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.name !== undefined && (obj.name = message.name);
        message.step !== undefined && (obj.step = message.step);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget_Target_PrometheusTarget>, I>>(
        object: I,
    ): MultiSourceChartWidget_Target_PrometheusTarget {
        const message = {
            ...baseMultiSourceChartWidget_Target_PrometheusTarget,
        } as MultiSourceChartWidget_Target_PrometheusTarget;
        message.dataSourceId = object.dataSourceId ?? '';
        message.workspaceId = object.workspaceId ?? '';
        message.query = object.query ?? '';
        message.textMode = object.textMode ?? false;
        message.hidden = object.hidden ?? false;
        message.name = object.name ?? '';
        message.step = object.step ?? '';
        return message;
    },
};

const baseMultiSourceChartWidget_DataSource: object = {};

export const MultiSourceChartWidget_DataSource = {
    encode(
        message: MultiSourceChartWidget_DataSource,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.monitoringDataSource !== undefined) {
            MultiSourceChartWidget_DataSource_MonitoringDataSource.encode(
                message.monitoringDataSource,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.prometheusDataSource !== undefined) {
            MultiSourceChartWidget_DataSource_PrometheusDataSource.encode(
                message.prometheusDataSource,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSourceChartWidget_DataSource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_DataSource,
        } as MultiSourceChartWidget_DataSource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.monitoringDataSource =
                        MultiSourceChartWidget_DataSource_MonitoringDataSource.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 2:
                    message.prometheusDataSource =
                        MultiSourceChartWidget_DataSource_PrometheusDataSource.decode(
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

    fromJSON(object: any): MultiSourceChartWidget_DataSource {
        const message = {
            ...baseMultiSourceChartWidget_DataSource,
        } as MultiSourceChartWidget_DataSource;
        message.monitoringDataSource =
            object.monitoringDataSource !== undefined && object.monitoringDataSource !== null
                ? MultiSourceChartWidget_DataSource_MonitoringDataSource.fromJSON(
                      object.monitoringDataSource,
                  )
                : undefined;
        message.prometheusDataSource =
            object.prometheusDataSource !== undefined && object.prometheusDataSource !== null
                ? MultiSourceChartWidget_DataSource_PrometheusDataSource.fromJSON(
                      object.prometheusDataSource,
                  )
                : undefined;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_DataSource): unknown {
        const obj: any = {};
        message.monitoringDataSource !== undefined &&
            (obj.monitoringDataSource = message.monitoringDataSource
                ? MultiSourceChartWidget_DataSource_MonitoringDataSource.toJSON(
                      message.monitoringDataSource,
                  )
                : undefined);
        message.prometheusDataSource !== undefined &&
            (obj.prometheusDataSource = message.prometheusDataSource
                ? MultiSourceChartWidget_DataSource_PrometheusDataSource.toJSON(
                      message.prometheusDataSource,
                  )
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget_DataSource>, I>>(
        object: I,
    ): MultiSourceChartWidget_DataSource {
        const message = {
            ...baseMultiSourceChartWidget_DataSource,
        } as MultiSourceChartWidget_DataSource;
        message.monitoringDataSource =
            object.monitoringDataSource !== undefined && object.monitoringDataSource !== null
                ? MultiSourceChartWidget_DataSource_MonitoringDataSource.fromPartial(
                      object.monitoringDataSource,
                  )
                : undefined;
        message.prometheusDataSource =
            object.prometheusDataSource !== undefined && object.prometheusDataSource !== null
                ? MultiSourceChartWidget_DataSource_PrometheusDataSource.fromPartial(
                      object.prometheusDataSource,
                  )
                : undefined;
        return message;
    },
};

const baseMultiSourceChartWidget_DataSource_MonitoringDataSource: object = { id: '' };

export const MultiSourceChartWidget_DataSource_MonitoringDataSource = {
    encode(
        message: MultiSourceChartWidget_DataSource_MonitoringDataSource,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.downsampling !== undefined) {
            Downsampling.encode(message.downsampling, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_DataSource_MonitoringDataSource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_DataSource_MonitoringDataSource,
        } as MultiSourceChartWidget_DataSource_MonitoringDataSource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.downsampling = Downsampling.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_DataSource_MonitoringDataSource {
        const message = {
            ...baseMultiSourceChartWidget_DataSource_MonitoringDataSource,
        } as MultiSourceChartWidget_DataSource_MonitoringDataSource;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.downsampling =
            object.downsampling !== undefined && object.downsampling !== null
                ? Downsampling.fromJSON(object.downsampling)
                : undefined;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_DataSource_MonitoringDataSource): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.downsampling !== undefined &&
            (obj.downsampling = message.downsampling
                ? Downsampling.toJSON(message.downsampling)
                : undefined);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<MultiSourceChartWidget_DataSource_MonitoringDataSource>, I>,
    >(object: I): MultiSourceChartWidget_DataSource_MonitoringDataSource {
        const message = {
            ...baseMultiSourceChartWidget_DataSource_MonitoringDataSource,
        } as MultiSourceChartWidget_DataSource_MonitoringDataSource;
        message.id = object.id ?? '';
        message.downsampling =
            object.downsampling !== undefined && object.downsampling !== null
                ? Downsampling.fromPartial(object.downsampling)
                : undefined;
        return message;
    },
};

const baseMultiSourceChartWidget_DataSource_PrometheusDataSource: object = { id: '', step: 0 };

export const MultiSourceChartWidget_DataSource_PrometheusDataSource = {
    encode(
        message: MultiSourceChartWidget_DataSource_PrometheusDataSource,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.step !== 0) {
            writer.uint32(16).int64(message.step);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_DataSource_PrometheusDataSource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_DataSource_PrometheusDataSource,
        } as MultiSourceChartWidget_DataSource_PrometheusDataSource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.step = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_DataSource_PrometheusDataSource {
        const message = {
            ...baseMultiSourceChartWidget_DataSource_PrometheusDataSource,
        } as MultiSourceChartWidget_DataSource_PrometheusDataSource;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.step = object.step !== undefined && object.step !== null ? Number(object.step) : 0;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_DataSource_PrometheusDataSource): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.step !== undefined && (obj.step = Math.round(message.step));
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<MultiSourceChartWidget_DataSource_PrometheusDataSource>, I>,
    >(object: I): MultiSourceChartWidget_DataSource_PrometheusDataSource {
        const message = {
            ...baseMultiSourceChartWidget_DataSource_PrometheusDataSource,
        } as MultiSourceChartWidget_DataSource_PrometheusDataSource;
        message.id = object.id ?? '';
        message.step = object.step ?? 0;
        return message;
    },
};

const baseMultiSourceChartWidget_VisualizationSettings: object = {
    type: 0,
    normalize: false,
    interpolate: 0,
    aggregation: 0,
    title: '',
    showLabels: false,
};

export const MultiSourceChartWidget_VisualizationSettings = {
    encode(
        message: MultiSourceChartWidget_VisualizationSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.normalize === true) {
            writer.uint32(16).bool(message.normalize);
        }
        if (message.interpolate !== 0) {
            writer.uint32(24).int32(message.interpolate);
        }
        if (message.aggregation !== 0) {
            writer.uint32(32).int32(message.aggregation);
        }
        if (message.colorSchemeSettings !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings.encode(
                message.colorSchemeSettings,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.heatmapSettings !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_HeatmapSettings.encode(
                message.heatmapSettings,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.yaxisSettings !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_YaxisSettings.encode(
                message.yaxisSettings,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.title !== '') {
            writer.uint32(66).string(message.title);
        }
        if (message.showLabels === true) {
            writer.uint32(72).bool(message.showLabels);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_VisualizationSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings,
        } as MultiSourceChartWidget_VisualizationSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.normalize = reader.bool();
                    break;
                case 3:
                    message.interpolate = reader.int32() as any;
                    break;
                case 4:
                    message.aggregation = reader.int32() as any;
                    break;
                case 5:
                    message.colorSchemeSettings =
                        MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 6:
                    message.heatmapSettings =
                        MultiSourceChartWidget_VisualizationSettings_HeatmapSettings.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 7:
                    message.yaxisSettings =
                        MultiSourceChartWidget_VisualizationSettings_YaxisSettings.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 8:
                    message.title = reader.string();
                    break;
                case 9:
                    message.showLabels = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_VisualizationSettings {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings,
        } as MultiSourceChartWidget_VisualizationSettings;
        message.type =
            object.type !== undefined && object.type !== null
                ? multiSourceChartWidget_VisualizationSettings_VisualizationTypeFromJSON(
                      object.type,
                  )
                : 0;
        message.normalize =
            object.normalize !== undefined && object.normalize !== null
                ? Boolean(object.normalize)
                : false;
        message.interpolate =
            object.interpolate !== undefined && object.interpolate !== null
                ? multiSourceChartWidget_VisualizationSettings_InterpolateFromJSON(
                      object.interpolate,
                  )
                : 0;
        message.aggregation =
            object.aggregation !== undefined && object.aggregation !== null
                ? multiSourceChartWidget_VisualizationSettings_SeriesAggregationFromJSON(
                      object.aggregation,
                  )
                : 0;
        message.colorSchemeSettings =
            object.colorSchemeSettings !== undefined && object.colorSchemeSettings !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings.fromJSON(
                      object.colorSchemeSettings,
                  )
                : undefined;
        message.heatmapSettings =
            object.heatmapSettings !== undefined && object.heatmapSettings !== null
                ? MultiSourceChartWidget_VisualizationSettings_HeatmapSettings.fromJSON(
                      object.heatmapSettings,
                  )
                : undefined;
        message.yaxisSettings =
            object.yaxisSettings !== undefined && object.yaxisSettings !== null
                ? MultiSourceChartWidget_VisualizationSettings_YaxisSettings.fromJSON(
                      object.yaxisSettings,
                  )
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.showLabels =
            object.showLabels !== undefined && object.showLabels !== null
                ? Boolean(object.showLabels)
                : false;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_VisualizationSettings): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = multiSourceChartWidget_VisualizationSettings_VisualizationTypeToJSON(
                message.type,
            ));
        message.normalize !== undefined && (obj.normalize = message.normalize);
        message.interpolate !== undefined &&
            (obj.interpolate = multiSourceChartWidget_VisualizationSettings_InterpolateToJSON(
                message.interpolate,
            ));
        message.aggregation !== undefined &&
            (obj.aggregation = multiSourceChartWidget_VisualizationSettings_SeriesAggregationToJSON(
                message.aggregation,
            ));
        message.colorSchemeSettings !== undefined &&
            (obj.colorSchemeSettings = message.colorSchemeSettings
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings.toJSON(
                      message.colorSchemeSettings,
                  )
                : undefined);
        message.heatmapSettings !== undefined &&
            (obj.heatmapSettings = message.heatmapSettings
                ? MultiSourceChartWidget_VisualizationSettings_HeatmapSettings.toJSON(
                      message.heatmapSettings,
                  )
                : undefined);
        message.yaxisSettings !== undefined &&
            (obj.yaxisSettings = message.yaxisSettings
                ? MultiSourceChartWidget_VisualizationSettings_YaxisSettings.toJSON(
                      message.yaxisSettings,
                  )
                : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.showLabels !== undefined && (obj.showLabels = message.showLabels);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget_VisualizationSettings>, I>>(
        object: I,
    ): MultiSourceChartWidget_VisualizationSettings {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings,
        } as MultiSourceChartWidget_VisualizationSettings;
        message.type = object.type ?? 0;
        message.normalize = object.normalize ?? false;
        message.interpolate = object.interpolate ?? 0;
        message.aggregation = object.aggregation ?? 0;
        message.colorSchemeSettings =
            object.colorSchemeSettings !== undefined && object.colorSchemeSettings !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings.fromPartial(
                      object.colorSchemeSettings,
                  )
                : undefined;
        message.heatmapSettings =
            object.heatmapSettings !== undefined && object.heatmapSettings !== null
                ? MultiSourceChartWidget_VisualizationSettings_HeatmapSettings.fromPartial(
                      object.heatmapSettings,
                  )
                : undefined;
        message.yaxisSettings =
            object.yaxisSettings !== undefined && object.yaxisSettings !== null
                ? MultiSourceChartWidget_VisualizationSettings_YaxisSettings.fromPartial(
                      object.yaxisSettings,
                  )
                : undefined;
        message.title = object.title ?? '';
        message.showLabels = object.showLabels ?? false;
        return message;
    },
};

const baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings: object = {};

export const MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings = {
    encode(
        message: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.automatic !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.encode(
                message.automatic,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.standard !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.encode(
                message.standard,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.gradient !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.encode(
                message.gradient,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.hash !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme.encode(
                message.hash,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.thresholds !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme.encode(
                message.thresholds,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings,
        } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.automatic =
                        MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 2:
                    message.standard =
                        MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 3:
                    message.gradient =
                        MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 4:
                    message.hash =
                        MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 5:
                    message.thresholds =
                        MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme.decode(
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

    fromJSON(object: any): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings,
        } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings;
        message.automatic =
            object.automatic !== undefined && object.automatic !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromJSON(
                      object.automatic,
                  )
                : undefined;
        message.standard =
            object.standard !== undefined && object.standard !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromJSON(
                      object.standard,
                  )
                : undefined;
        message.gradient =
            object.gradient !== undefined && object.gradient !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromJSON(
                      object.gradient,
                  )
                : undefined;
        message.hash =
            object.hash !== undefined && object.hash !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme.fromJSON(
                      object.hash,
                  )
                : undefined;
        message.thresholds =
            object.thresholds !== undefined && object.thresholds !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme.fromJSON(
                      object.thresholds,
                  )
                : undefined;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings): unknown {
        const obj: any = {};
        message.automatic !== undefined &&
            (obj.automatic = message.automatic
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.toJSON(
                      message.automatic,
                  )
                : undefined);
        message.standard !== undefined &&
            (obj.standard = message.standard
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.toJSON(
                      message.standard,
                  )
                : undefined);
        message.gradient !== undefined &&
            (obj.gradient = message.gradient
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.toJSON(
                      message.gradient,
                  )
                : undefined);
        message.hash !== undefined &&
            (obj.hash = message.hash
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme.toJSON(
                      message.hash,
                  )
                : undefined);
        message.thresholds !== undefined &&
            (obj.thresholds = message.thresholds
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme.toJSON(
                      message.thresholds,
                  )
                : undefined);
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings>,
            I
        >,
    >(object: I): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings,
        } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings;
        message.automatic =
            object.automatic !== undefined && object.automatic !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromPartial(
                      object.automatic,
                  )
                : undefined;
        message.standard =
            object.standard !== undefined && object.standard !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromPartial(
                      object.standard,
                  )
                : undefined;
        message.gradient =
            object.gradient !== undefined && object.gradient !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromPartial(
                      object.gradient,
                  )
                : undefined;
        message.hash =
            object.hash !== undefined && object.hash !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme.fromPartial(
                      object.hash,
                  )
                : undefined;
        message.thresholds =
            object.thresholds !== undefined && object.thresholds !== null
                ? MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme.fromPartial(
                      object.thresholds,
                  )
                : undefined;
        return message;
    },
};

const baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme: object =
    {};

export const MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme =
    {
        encode(
            _: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
            writer: _m0.Writer = _m0.Writer.create(),
        ): _m0.Writer {
            return writer;
        },

        decode(
            input: _m0.Reader | Uint8Array,
            length?: number,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
            const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
            let end = length === undefined ? reader.len : reader.pos + length;
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
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

        fromJSON(
            _: any,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
            return message;
        },

        toJSON(
            _: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
        ): unknown {
            const obj: any = {};
            return obj;
        },

        fromPartial<
            I extends Exact<
                DeepPartial<MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme>,
                I
            >,
        >(
            _: I,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
            return message;
        },
    };

const baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme: object =
    {};

export const MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme =
    {
        encode(
            _: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
            writer: _m0.Writer = _m0.Writer.create(),
        ): _m0.Writer {
            return writer;
        },

        decode(
            input: _m0.Reader | Uint8Array,
            length?: number,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
            const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
            let end = length === undefined ? reader.len : reader.pos + length;
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
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

        fromJSON(
            _: any,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
            return message;
        },

        toJSON(
            _: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
        ): unknown {
            const obj: any = {};
            return obj;
        },

        fromPartial<
            I extends Exact<
                DeepPartial<MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme>,
                I
            >,
        >(
            _: I,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
            return message;
        },
    };

const baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme: object =
    { greenValue: '', yellowValue: '', redValue: '', violetValue: '' };

export const MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme =
    {
        encode(
            message: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
            writer: _m0.Writer = _m0.Writer.create(),
        ): _m0.Writer {
            if (message.greenValue !== '') {
                writer.uint32(18).string(message.greenValue);
            }
            if (message.yellowValue !== '') {
                writer.uint32(26).string(message.yellowValue);
            }
            if (message.redValue !== '') {
                writer.uint32(34).string(message.redValue);
            }
            if (message.violetValue !== '') {
                writer.uint32(42).string(message.violetValue);
            }
            return writer;
        },

        decode(
            input: _m0.Reader | Uint8Array,
            length?: number,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
            const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
            let end = length === undefined ? reader.len : reader.pos + length;
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
            while (reader.pos < end) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 2:
                        message.greenValue = reader.string();
                        break;
                    case 3:
                        message.yellowValue = reader.string();
                        break;
                    case 4:
                        message.redValue = reader.string();
                        break;
                    case 5:
                        message.violetValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        },

        fromJSON(
            object: any,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
            message.greenValue =
                object.greenValue !== undefined && object.greenValue !== null
                    ? String(object.greenValue)
                    : '';
            message.yellowValue =
                object.yellowValue !== undefined && object.yellowValue !== null
                    ? String(object.yellowValue)
                    : '';
            message.redValue =
                object.redValue !== undefined && object.redValue !== null
                    ? String(object.redValue)
                    : '';
            message.violetValue =
                object.violetValue !== undefined && object.violetValue !== null
                    ? String(object.violetValue)
                    : '';
            return message;
        },

        toJSON(
            message: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
        ): unknown {
            const obj: any = {};
            message.greenValue !== undefined && (obj.greenValue = message.greenValue);
            message.yellowValue !== undefined && (obj.yellowValue = message.yellowValue);
            message.redValue !== undefined && (obj.redValue = message.redValue);
            message.violetValue !== undefined && (obj.violetValue = message.violetValue);
            return obj;
        },

        fromPartial<
            I extends Exact<
                DeepPartial<MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme>,
                I
            >,
        >(
            object: I,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
            message.greenValue = object.greenValue ?? '';
            message.yellowValue = object.yellowValue ?? '';
            message.redValue = object.redValue ?? '';
            message.violetValue = object.violetValue ?? '';
            return message;
        },
    };

const baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme: object =
    {};

export const MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme = {
    encode(
        _: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme,
        } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme;
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

    fromJSON(
        _: any,
    ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme,
        } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme;
        return message;
    },

    toJSON(
        _: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme,
    ): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme>,
            I
        >,
    >(_: I): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme,
        } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_HashColorScheme;
        return message;
    },
};

const baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme: object =
    { aggregation: 0 };

export const MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme =
    {
        encode(
            message: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme,
            writer: _m0.Writer = _m0.Writer.create(),
        ): _m0.Writer {
            if (message.aggregation !== 0) {
                writer.uint32(8).int32(message.aggregation);
            }
            return writer;
        },

        decode(
            input: _m0.Reader | Uint8Array,
            length?: number,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme {
            const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
            let end = length === undefined ? reader.len : reader.pos + length;
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme;
            while (reader.pos < end) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.aggregation = reader.int32() as any;
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        },

        fromJSON(
            object: any,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme {
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme;
            message.aggregation =
                object.aggregation !== undefined && object.aggregation !== null
                    ? multiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_AggregationFromJSON(
                          object.aggregation,
                      )
                    : 0;
            return message;
        },

        toJSON(
            message: MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme,
        ): unknown {
            const obj: any = {};
            message.aggregation !== undefined &&
                (obj.aggregation =
                    multiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme_AggregationToJSON(
                        message.aggregation,
                    ));
            return obj;
        },

        fromPartial<
            I extends Exact<
                DeepPartial<MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme>,
                I
            >,
        >(
            object: I,
        ): MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme {
            const message = {
                ...baseMultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme,
            } as MultiSourceChartWidget_VisualizationSettings_ColorSchemeSettings_ThresholdsColorScheme;
            message.aggregation = object.aggregation ?? 0;
            return message;
        },
    };

const baseMultiSourceChartWidget_VisualizationSettings_HeatmapSettings: object = {
    greenValue: '',
    yellowValue: '',
    redValue: '',
    violetValue: '',
};

export const MultiSourceChartWidget_VisualizationSettings_HeatmapSettings = {
    encode(
        message: MultiSourceChartWidget_VisualizationSettings_HeatmapSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.greenValue !== '') {
            writer.uint32(18).string(message.greenValue);
        }
        if (message.yellowValue !== '') {
            writer.uint32(26).string(message.yellowValue);
        }
        if (message.redValue !== '') {
            writer.uint32(34).string(message.redValue);
        }
        if (message.violetValue !== '') {
            writer.uint32(42).string(message.violetValue);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_VisualizationSettings_HeatmapSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_HeatmapSettings,
        } as MultiSourceChartWidget_VisualizationSettings_HeatmapSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.greenValue = reader.string();
                    break;
                case 3:
                    message.yellowValue = reader.string();
                    break;
                case 4:
                    message.redValue = reader.string();
                    break;
                case 5:
                    message.violetValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_VisualizationSettings_HeatmapSettings {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_HeatmapSettings,
        } as MultiSourceChartWidget_VisualizationSettings_HeatmapSettings;
        message.greenValue =
            object.greenValue !== undefined && object.greenValue !== null
                ? String(object.greenValue)
                : '';
        message.yellowValue =
            object.yellowValue !== undefined && object.yellowValue !== null
                ? String(object.yellowValue)
                : '';
        message.redValue =
            object.redValue !== undefined && object.redValue !== null
                ? String(object.redValue)
                : '';
        message.violetValue =
            object.violetValue !== undefined && object.violetValue !== null
                ? String(object.violetValue)
                : '';
        return message;
    },

    toJSON(message: MultiSourceChartWidget_VisualizationSettings_HeatmapSettings): unknown {
        const obj: any = {};
        message.greenValue !== undefined && (obj.greenValue = message.greenValue);
        message.yellowValue !== undefined && (obj.yellowValue = message.yellowValue);
        message.redValue !== undefined && (obj.redValue = message.redValue);
        message.violetValue !== undefined && (obj.violetValue = message.violetValue);
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<MultiSourceChartWidget_VisualizationSettings_HeatmapSettings>,
            I
        >,
    >(object: I): MultiSourceChartWidget_VisualizationSettings_HeatmapSettings {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_HeatmapSettings,
        } as MultiSourceChartWidget_VisualizationSettings_HeatmapSettings;
        message.greenValue = object.greenValue ?? '';
        message.yellowValue = object.yellowValue ?? '';
        message.redValue = object.redValue ?? '';
        message.violetValue = object.violetValue ?? '';
        return message;
    },
};

const baseMultiSourceChartWidget_VisualizationSettings_Yaxis: object = {
    type: 0,
    title: '',
    min: '',
    max: '',
    unitFormat: 0,
};

export const MultiSourceChartWidget_VisualizationSettings_Yaxis = {
    encode(
        message: MultiSourceChartWidget_VisualizationSettings_Yaxis,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.min !== '') {
            writer.uint32(26).string(message.min);
        }
        if (message.max !== '') {
            writer.uint32(34).string(message.max);
        }
        if (message.unitFormat !== 0) {
            writer.uint32(40).int32(message.unitFormat);
        }
        if (message.precision !== undefined) {
            Int64Value.encode({ value: message.precision! }, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_VisualizationSettings_Yaxis {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_Yaxis,
        } as MultiSourceChartWidget_VisualizationSettings_Yaxis;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.min = reader.string();
                    break;
                case 4:
                    message.max = reader.string();
                    break;
                case 5:
                    message.unitFormat = reader.int32() as any;
                    break;
                case 6:
                    message.precision = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_VisualizationSettings_Yaxis {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_Yaxis,
        } as MultiSourceChartWidget_VisualizationSettings_Yaxis;
        message.type =
            object.type !== undefined && object.type !== null
                ? multiSourceChartWidget_VisualizationSettings_YaxisTypeFromJSON(object.type)
                : 0;
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.min = object.min !== undefined && object.min !== null ? String(object.min) : '';
        message.max = object.max !== undefined && object.max !== null ? String(object.max) : '';
        message.unitFormat =
            object.unitFormat !== undefined && object.unitFormat !== null
                ? unitFormatFromJSON(object.unitFormat)
                : 0;
        message.precision =
            object.precision !== undefined && object.precision !== null
                ? Number(object.precision)
                : undefined;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_VisualizationSettings_Yaxis): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = multiSourceChartWidget_VisualizationSettings_YaxisTypeToJSON(message.type));
        message.title !== undefined && (obj.title = message.title);
        message.min !== undefined && (obj.min = message.min);
        message.max !== undefined && (obj.max = message.max);
        message.unitFormat !== undefined && (obj.unitFormat = unitFormatToJSON(message.unitFormat));
        message.precision !== undefined && (obj.precision = message.precision);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<MultiSourceChartWidget_VisualizationSettings_Yaxis>, I>,
    >(object: I): MultiSourceChartWidget_VisualizationSettings_Yaxis {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_Yaxis,
        } as MultiSourceChartWidget_VisualizationSettings_Yaxis;
        message.type = object.type ?? 0;
        message.title = object.title ?? '';
        message.min = object.min ?? '';
        message.max = object.max ?? '';
        message.unitFormat = object.unitFormat ?? 0;
        message.precision = object.precision ?? undefined;
        return message;
    },
};

const baseMultiSourceChartWidget_VisualizationSettings_YaxisSettings: object = {};

export const MultiSourceChartWidget_VisualizationSettings_YaxisSettings = {
    encode(
        message: MultiSourceChartWidget_VisualizationSettings_YaxisSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.left !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_Yaxis.encode(
                message.left,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.right !== undefined) {
            MultiSourceChartWidget_VisualizationSettings_Yaxis.encode(
                message.right,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_VisualizationSettings_YaxisSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_YaxisSettings,
        } as MultiSourceChartWidget_VisualizationSettings_YaxisSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.left = MultiSourceChartWidget_VisualizationSettings_Yaxis.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.right = MultiSourceChartWidget_VisualizationSettings_Yaxis.decode(
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

    fromJSON(object: any): MultiSourceChartWidget_VisualizationSettings_YaxisSettings {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_YaxisSettings,
        } as MultiSourceChartWidget_VisualizationSettings_YaxisSettings;
        message.left =
            object.left !== undefined && object.left !== null
                ? MultiSourceChartWidget_VisualizationSettings_Yaxis.fromJSON(object.left)
                : undefined;
        message.right =
            object.right !== undefined && object.right !== null
                ? MultiSourceChartWidget_VisualizationSettings_Yaxis.fromJSON(object.right)
                : undefined;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_VisualizationSettings_YaxisSettings): unknown {
        const obj: any = {};
        message.left !== undefined &&
            (obj.left = message.left
                ? MultiSourceChartWidget_VisualizationSettings_Yaxis.toJSON(message.left)
                : undefined);
        message.right !== undefined &&
            (obj.right = message.right
                ? MultiSourceChartWidget_VisualizationSettings_Yaxis.toJSON(message.right)
                : undefined);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<MultiSourceChartWidget_VisualizationSettings_YaxisSettings>, I>,
    >(object: I): MultiSourceChartWidget_VisualizationSettings_YaxisSettings {
        const message = {
            ...baseMultiSourceChartWidget_VisualizationSettings_YaxisSettings,
        } as MultiSourceChartWidget_VisualizationSettings_YaxisSettings;
        message.left =
            object.left !== undefined && object.left !== null
                ? MultiSourceChartWidget_VisualizationSettings_Yaxis.fromPartial(object.left)
                : undefined;
        message.right =
            object.right !== undefined && object.right !== null
                ? MultiSourceChartWidget_VisualizationSettings_Yaxis.fromPartial(object.right)
                : undefined;
        return message;
    },
};

const baseMultiSourceChartWidget_SeriesOverrides: object = {};

export const MultiSourceChartWidget_SeriesOverrides = {
    encode(
        message: MultiSourceChartWidget_SeriesOverrides,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== undefined) {
            writer.uint32(10).string(message.name);
        }
        if (message.targetIndex !== undefined) {
            writer.uint32(18).string(message.targetIndex);
        }
        if (message.settings !== undefined) {
            MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings.encode(
                message.settings,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_SeriesOverrides {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_SeriesOverrides,
        } as MultiSourceChartWidget_SeriesOverrides;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.targetIndex = reader.string();
                    break;
                case 3:
                    message.settings =
                        MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings.decode(
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

    fromJSON(object: any): MultiSourceChartWidget_SeriesOverrides {
        const message = {
            ...baseMultiSourceChartWidget_SeriesOverrides,
        } as MultiSourceChartWidget_SeriesOverrides;
        message.name =
            object.name !== undefined && object.name !== null ? String(object.name) : undefined;
        message.targetIndex =
            object.targetIndex !== undefined && object.targetIndex !== null
                ? String(object.targetIndex)
                : undefined;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings.fromJSON(
                      object.settings,
                  )
                : undefined;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_SeriesOverrides): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.targetIndex !== undefined && (obj.targetIndex = message.targetIndex);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings.toJSON(
                      message.settings,
                  )
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget_SeriesOverrides>, I>>(
        object: I,
    ): MultiSourceChartWidget_SeriesOverrides {
        const message = {
            ...baseMultiSourceChartWidget_SeriesOverrides,
        } as MultiSourceChartWidget_SeriesOverrides;
        message.name = object.name ?? undefined;
        message.targetIndex = object.targetIndex ?? undefined;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings.fromPartial(
                      object.settings,
                  )
                : undefined;
        return message;
    },
};

const baseMultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings: object = {
    name: '',
    color: '',
    type: 0,
    stackName: '',
    growDown: false,
    yaxisPosition: 0,
};

export const MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings = {
    encode(
        message: MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.color !== '') {
            writer.uint32(18).string(message.color);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.stackName !== '') {
            writer.uint32(34).string(message.stackName);
        }
        if (message.growDown === true) {
            writer.uint32(40).bool(message.growDown);
        }
        if (message.yaxisPosition !== 0) {
            writer.uint32(48).int32(message.yaxisPosition);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings,
        } as MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.color = reader.string();
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                case 4:
                    message.stackName = reader.string();
                    break;
                case 5:
                    message.growDown = reader.bool();
                    break;
                case 6:
                    message.yaxisPosition = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings {
        const message = {
            ...baseMultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings,
        } as MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.color =
            object.color !== undefined && object.color !== null ? String(object.color) : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? multiSourceChartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(
                      object.type,
                  )
                : 0;
        message.stackName =
            object.stackName !== undefined && object.stackName !== null
                ? String(object.stackName)
                : '';
        message.growDown =
            object.growDown !== undefined && object.growDown !== null
                ? Boolean(object.growDown)
                : false;
        message.yaxisPosition =
            object.yaxisPosition !== undefined && object.yaxisPosition !== null
                ? multiSourceChartWidget_SeriesOverrides_YaxisPositionFromJSON(object.yaxisPosition)
                : 0;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.color !== undefined && (obj.color = message.color);
        message.type !== undefined &&
            (obj.type = multiSourceChartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(
                message.type,
            ));
        message.stackName !== undefined && (obj.stackName = message.stackName);
        message.growDown !== undefined && (obj.growDown = message.growDown);
        message.yaxisPosition !== undefined &&
            (obj.yaxisPosition = multiSourceChartWidget_SeriesOverrides_YaxisPositionToJSON(
                message.yaxisPosition,
            ));
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings>,
            I
        >,
    >(object: I): MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings {
        const message = {
            ...baseMultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings,
        } as MultiSourceChartWidget_SeriesOverrides_SeriesOverrideSettings;
        message.name = object.name ?? '';
        message.color = object.color ?? '';
        message.type = object.type ?? 0;
        message.stackName = object.stackName ?? '';
        message.growDown = object.growDown ?? false;
        message.yaxisPosition = object.yaxisPosition ?? 0;
        return message;
    },
};

const baseMultiSourceChartWidget_NameHidingSettings: object = { positive: false, names: '' };

export const MultiSourceChartWidget_NameHidingSettings = {
    encode(
        message: MultiSourceChartWidget_NameHidingSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.positive === true) {
            writer.uint32(8).bool(message.positive);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MultiSourceChartWidget_NameHidingSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_NameHidingSettings,
        } as MultiSourceChartWidget_NameHidingSettings;
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positive = reader.bool();
                    break;
                case 2:
                    message.names.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_NameHidingSettings {
        const message = {
            ...baseMultiSourceChartWidget_NameHidingSettings,
        } as MultiSourceChartWidget_NameHidingSettings;
        message.positive =
            object.positive !== undefined && object.positive !== null
                ? Boolean(object.positive)
                : false;
        message.names = (object.names ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: MultiSourceChartWidget_NameHidingSettings): unknown {
        const obj: any = {};
        message.positive !== undefined && (obj.positive = message.positive);
        if (message.names) {
            obj.names = message.names.map((e) => e);
        } else {
            obj.names = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget_NameHidingSettings>, I>>(
        object: I,
    ): MultiSourceChartWidget_NameHidingSettings {
        const message = {
            ...baseMultiSourceChartWidget_NameHidingSettings,
        } as MultiSourceChartWidget_NameHidingSettings;
        message.positive = object.positive ?? false;
        message.names = object.names?.map((e) => e) || [];
        return message;
    },
};

const baseMultiSourceChartWidget_RepeatSettings: object = { repeatBy: '', maxChartsInRow: 0 };

export const MultiSourceChartWidget_RepeatSettings = {
    encode(
        message: MultiSourceChartWidget_RepeatSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.repeatBy) {
            writer.uint32(10).string(v!);
        }
        if (message.maxChartsInRow !== 0) {
            writer.uint32(16).int64(message.maxChartsInRow);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSourceChartWidget_RepeatSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMultiSourceChartWidget_RepeatSettings,
        } as MultiSourceChartWidget_RepeatSettings;
        message.repeatBy = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repeatBy.push(reader.string());
                    break;
                case 2:
                    message.maxChartsInRow = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MultiSourceChartWidget_RepeatSettings {
        const message = {
            ...baseMultiSourceChartWidget_RepeatSettings,
        } as MultiSourceChartWidget_RepeatSettings;
        message.repeatBy = (object.repeatBy ?? []).map((e: any) => String(e));
        message.maxChartsInRow =
            object.maxChartsInRow !== undefined && object.maxChartsInRow !== null
                ? Number(object.maxChartsInRow)
                : 0;
        return message;
    },

    toJSON(message: MultiSourceChartWidget_RepeatSettings): unknown {
        const obj: any = {};
        if (message.repeatBy) {
            obj.repeatBy = message.repeatBy.map((e) => e);
        } else {
            obj.repeatBy = [];
        }
        message.maxChartsInRow !== undefined &&
            (obj.maxChartsInRow = Math.round(message.maxChartsInRow));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MultiSourceChartWidget_RepeatSettings>, I>>(
        object: I,
    ): MultiSourceChartWidget_RepeatSettings {
        const message = {
            ...baseMultiSourceChartWidget_RepeatSettings,
        } as MultiSourceChartWidget_RepeatSettings;
        message.repeatBy = object.repeatBy?.map((e) => e) || [];
        message.maxChartsInRow = object.maxChartsInRow ?? 0;
        return message;
    },
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
