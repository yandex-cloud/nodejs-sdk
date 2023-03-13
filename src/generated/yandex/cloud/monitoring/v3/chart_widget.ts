/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Downsampling } from "../../../../yandex/cloud/monitoring/v3/downsampling";
import {
  UnitFormat,
  unitFormatFromJSON,
  unitFormatToJSON,
} from "../../../../yandex/cloud/monitoring/v3/unit_format";
import { Int64Value } from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.monitoring.v3";

/** Chart widget. */
export interface ChartWidget {
  $type: "yandex.cloud.monitoring.v3.ChartWidget";
  /** Required. Chart ID. */
  id: string;
  /** Queries. */
  queries?: ChartWidget_Queries;
  /** Visualization settings. */
  visualizationSettings?: ChartWidget_VisualizationSettings;
  /** Override settings. */
  seriesOverrides: ChartWidget_SeriesOverrides[];
  /** Name hiding settings. */
  nameHidingSettings?: ChartWidget_NameHidingSettings;
  /** Chart description in dashboard (not enabled in UI). */
  description: string;
  /** Chart widget title. */
  title: string;
  /** Enable legend under chart. */
  displayLegend: boolean;
  /** Fixed time interval for chart. */
  freeze: ChartWidget_FreezeDuration;
}

export enum ChartWidget_FreezeDuration {
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

export function chartWidget_FreezeDurationFromJSON(
  object: any
): ChartWidget_FreezeDuration {
  switch (object) {
    case 0:
    case "FREEZE_DURATION_UNSPECIFIED":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_UNSPECIFIED;
    case 1:
    case "FREEZE_DURATION_HOUR":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_HOUR;
    case 2:
    case "FREEZE_DURATION_DAY":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_DAY;
    case 3:
    case "FREEZE_DURATION_WEEK":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_WEEK;
    case 4:
    case "FREEZE_DURATION_MONTH":
      return ChartWidget_FreezeDuration.FREEZE_DURATION_MONTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_FreezeDuration.UNRECOGNIZED;
  }
}

export function chartWidget_FreezeDurationToJSON(
  object: ChartWidget_FreezeDuration
): string {
  switch (object) {
    case ChartWidget_FreezeDuration.FREEZE_DURATION_UNSPECIFIED:
      return "FREEZE_DURATION_UNSPECIFIED";
    case ChartWidget_FreezeDuration.FREEZE_DURATION_HOUR:
      return "FREEZE_DURATION_HOUR";
    case ChartWidget_FreezeDuration.FREEZE_DURATION_DAY:
      return "FREEZE_DURATION_DAY";
    case ChartWidget_FreezeDuration.FREEZE_DURATION_WEEK:
      return "FREEZE_DURATION_WEEK";
    case ChartWidget_FreezeDuration.FREEZE_DURATION_MONTH:
      return "FREEZE_DURATION_MONTH";
    default:
      return "UNKNOWN";
  }
}

/** Query settings. */
export interface ChartWidget_Queries {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries";
  /** Required. List of targets. */
  targets: ChartWidget_Queries_Target[];
  /** Required. Downsampling settings. */
  downsampling?: Downsampling;
}

/** Query target. */
export interface ChartWidget_Queries_Target {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target";
  /** Required. Query. */
  query: string;
  /** Text mode. */
  textMode: boolean;
  /** Checks that target is visible or invisible. */
  hidden: boolean;
}

/** Visualization settings. */
export interface ChartWidget_VisualizationSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings";
  /** Visualization type. */
  type: ChartWidget_VisualizationSettings_VisualizationType;
  /** Normalize. */
  normalize: boolean;
  /** Interpolate. */
  interpolate: ChartWidget_VisualizationSettings_Interpolate;
  /** Aggregation. */
  aggregation: ChartWidget_VisualizationSettings_SeriesAggregation;
  /** Color scheme settings. */
  colorSchemeSettings?: ChartWidget_VisualizationSettings_ColorSchemeSettings;
  /** Heatmap settings. */
  heatmapSettings?: ChartWidget_VisualizationSettings_HeatmapSettings;
  /** Y axis settings. */
  yaxisSettings?: ChartWidget_VisualizationSettings_YaxisSettings;
  /** Inside chart title. */
  title: string;
  /** Show chart labels. */
  showLabels: boolean;
}

/** Chart visualization type. */
export enum ChartWidget_VisualizationSettings_VisualizationType {
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

export function chartWidget_VisualizationSettings_VisualizationTypeFromJSON(
  object: any
): ChartWidget_VisualizationSettings_VisualizationType {
  switch (object) {
    case 0:
    case "VISUALIZATION_TYPE_UNSPECIFIED":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "VISUALIZATION_TYPE_LINE":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_LINE;
    case 2:
    case "VISUALIZATION_TYPE_STACK":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_STACK;
    case 3:
    case "VISUALIZATION_TYPE_COLUMN":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_COLUMN;
    case 4:
    case "VISUALIZATION_TYPE_POINTS":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_POINTS;
    case 5:
    case "VISUALIZATION_TYPE_PIE":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_PIE;
    case 6:
    case "VISUALIZATION_TYPE_BARS":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_BARS;
    case 7:
    case "VISUALIZATION_TYPE_DISTRIBUTION":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_DISTRIBUTION;
    case 8:
    case "VISUALIZATION_TYPE_HEATMAP":
      return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_HEATMAP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_VisualizationSettings_VisualizationType.UNRECOGNIZED;
  }
}

export function chartWidget_VisualizationSettings_VisualizationTypeToJSON(
  object: ChartWidget_VisualizationSettings_VisualizationType
): string {
  switch (object) {
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_UNSPECIFIED:
      return "VISUALIZATION_TYPE_UNSPECIFIED";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_LINE:
      return "VISUALIZATION_TYPE_LINE";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_STACK:
      return "VISUALIZATION_TYPE_STACK";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_COLUMN:
      return "VISUALIZATION_TYPE_COLUMN";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_POINTS:
      return "VISUALIZATION_TYPE_POINTS";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_PIE:
      return "VISUALIZATION_TYPE_PIE";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_BARS:
      return "VISUALIZATION_TYPE_BARS";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_DISTRIBUTION:
      return "VISUALIZATION_TYPE_DISTRIBUTION";
    case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_HEATMAP:
      return "VISUALIZATION_TYPE_HEATMAP";
    default:
      return "UNKNOWN";
  }
}

export enum ChartWidget_VisualizationSettings_Interpolate {
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

export function chartWidget_VisualizationSettings_InterpolateFromJSON(
  object: any
): ChartWidget_VisualizationSettings_Interpolate {
  switch (object) {
    case 0:
    case "INTERPOLATE_UNSPECIFIED":
      return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_UNSPECIFIED;
    case 1:
    case "INTERPOLATE_LINEAR":
      return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LINEAR;
    case 2:
    case "INTERPOLATE_LEFT":
      return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LEFT;
    case 3:
    case "INTERPOLATE_RIGHT":
      return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_RIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_VisualizationSettings_Interpolate.UNRECOGNIZED;
  }
}

export function chartWidget_VisualizationSettings_InterpolateToJSON(
  object: ChartWidget_VisualizationSettings_Interpolate
): string {
  switch (object) {
    case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_UNSPECIFIED:
      return "INTERPOLATE_UNSPECIFIED";
    case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LINEAR:
      return "INTERPOLATE_LINEAR";
    case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LEFT:
      return "INTERPOLATE_LEFT";
    case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_RIGHT:
      return "INTERPOLATE_RIGHT";
    default:
      return "UNKNOWN";
  }
}

/**
 * Y axis type.
 * N.B. _TYPE prefix is necessary to expect name clash with Interpolate LINEAR value.
 */
export enum ChartWidget_VisualizationSettings_YaxisType {
  /** YAXIS_TYPE_UNSPECIFIED - Not specified (linear by default). */
  YAXIS_TYPE_UNSPECIFIED = 0,
  /** YAXIS_TYPE_LINEAR - Linear. */
  YAXIS_TYPE_LINEAR = 1,
  /** YAXIS_TYPE_LOGARITHMIC - Logarithmic. */
  YAXIS_TYPE_LOGARITHMIC = 2,
  UNRECOGNIZED = -1,
}

export function chartWidget_VisualizationSettings_YaxisTypeFromJSON(
  object: any
): ChartWidget_VisualizationSettings_YaxisType {
  switch (object) {
    case 0:
    case "YAXIS_TYPE_UNSPECIFIED":
      return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_UNSPECIFIED;
    case 1:
    case "YAXIS_TYPE_LINEAR":
      return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LINEAR;
    case 2:
    case "YAXIS_TYPE_LOGARITHMIC":
      return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LOGARITHMIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_VisualizationSettings_YaxisType.UNRECOGNIZED;
  }
}

export function chartWidget_VisualizationSettings_YaxisTypeToJSON(
  object: ChartWidget_VisualizationSettings_YaxisType
): string {
  switch (object) {
    case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_UNSPECIFIED:
      return "YAXIS_TYPE_UNSPECIFIED";
    case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LINEAR:
      return "YAXIS_TYPE_LINEAR";
    case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LOGARITHMIC:
      return "YAXIS_TYPE_LOGARITHMIC";
    default:
      return "UNKNOWN";
  }
}

export enum ChartWidget_VisualizationSettings_SeriesAggregation {
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

export function chartWidget_VisualizationSettings_SeriesAggregationFromJSON(
  object: any
): ChartWidget_VisualizationSettings_SeriesAggregation {
  switch (object) {
    case 0:
    case "SERIES_AGGREGATION_UNSPECIFIED":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_UNSPECIFIED;
    case 1:
    case "SERIES_AGGREGATION_AVG":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_AVG;
    case 2:
    case "SERIES_AGGREGATION_MIN":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MIN;
    case 3:
    case "SERIES_AGGREGATION_MAX":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MAX;
    case 4:
    case "SERIES_AGGREGATION_LAST":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_LAST;
    case 5:
    case "SERIES_AGGREGATION_SUM":
      return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_SUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_VisualizationSettings_SeriesAggregation.UNRECOGNIZED;
  }
}

export function chartWidget_VisualizationSettings_SeriesAggregationToJSON(
  object: ChartWidget_VisualizationSettings_SeriesAggregation
): string {
  switch (object) {
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_UNSPECIFIED:
      return "SERIES_AGGREGATION_UNSPECIFIED";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_AVG:
      return "SERIES_AGGREGATION_AVG";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MIN:
      return "SERIES_AGGREGATION_MIN";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MAX:
      return "SERIES_AGGREGATION_MAX";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_LAST:
      return "SERIES_AGGREGATION_LAST";
    case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_SUM:
      return "SERIES_AGGREGATION_SUM";
    default:
      return "UNKNOWN";
  }
}

export interface ChartWidget_VisualizationSettings_ColorSchemeSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings";
  /** Automatic color scheme. */
  automatic?:
    | ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme
    | undefined;
  /** Standard color scheme. */
  standard?:
    | ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme
    | undefined;
  /** Gradient color scheme. */
  gradient?:
    | ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme
    | undefined;
}

export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme";
}

export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme";
}

export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme";
  /** Gradient green value. */
  greenValue: string;
  /** Gradient yellow value. */
  yellowValue: string;
  /** Gradient red value. */
  redValue: string;
  /** Gradient violet_value. */
  violetValue: string;
}

export interface ChartWidget_VisualizationSettings_HeatmapSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings";
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
export interface ChartWidget_VisualizationSettings_Yaxis {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis";
  /** Type. */
  type: ChartWidget_VisualizationSettings_YaxisType;
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

export interface ChartWidget_VisualizationSettings_YaxisSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings";
  /** Left Y axis settings. */
  left?: ChartWidget_VisualizationSettings_Yaxis;
  /** Right Y axis settings. */
  right?: ChartWidget_VisualizationSettings_Yaxis;
}

/** Series override settings. */
export interface ChartWidget_SeriesOverrides {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides";
  /** Series name. */
  name: string | undefined;
  /** Target index. */
  targetIndex: string | undefined;
  /** Required. Override settings. */
  settings?: ChartWidget_SeriesOverrides_SeriesOverrideSettings;
}

export enum ChartWidget_SeriesOverrides_YaxisPosition {
  /** YAXIS_POSITION_UNSPECIFIED - Not specified (left by default). */
  YAXIS_POSITION_UNSPECIFIED = 0,
  /** YAXIS_POSITION_LEFT - Left. */
  YAXIS_POSITION_LEFT = 1,
  /** YAXIS_POSITION_RIGHT - Right. */
  YAXIS_POSITION_RIGHT = 2,
  UNRECOGNIZED = -1,
}

export function chartWidget_SeriesOverrides_YaxisPositionFromJSON(
  object: any
): ChartWidget_SeriesOverrides_YaxisPosition {
  switch (object) {
    case 0:
    case "YAXIS_POSITION_UNSPECIFIED":
      return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_UNSPECIFIED;
    case 1:
    case "YAXIS_POSITION_LEFT":
      return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_LEFT;
    case 2:
    case "YAXIS_POSITION_RIGHT":
      return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_RIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_SeriesOverrides_YaxisPosition.UNRECOGNIZED;
  }
}

export function chartWidget_SeriesOverrides_YaxisPositionToJSON(
  object: ChartWidget_SeriesOverrides_YaxisPosition
): string {
  switch (object) {
    case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_UNSPECIFIED:
      return "YAXIS_POSITION_UNSPECIFIED";
    case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_LEFT:
      return "YAXIS_POSITION_LEFT";
    case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_RIGHT:
      return "YAXIS_POSITION_RIGHT";
    default:
      return "UNKNOWN";
  }
}

export enum ChartWidget_SeriesOverrides_SeriesVisualizationType {
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

export function chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(
  object: any
): ChartWidget_SeriesOverrides_SeriesVisualizationType {
  switch (object) {
    case 0:
    case "SERIES_VISUALIZATION_TYPE_UNSPECIFIED":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "SERIES_VISUALIZATION_TYPE_LINE":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_LINE;
    case 2:
    case "SERIES_VISUALIZATION_TYPE_STACK":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_STACK;
    case 3:
    case "SERIES_VISUALIZATION_TYPE_COLUMN":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_COLUMN;
    case 4:
    case "SERIES_VISUALIZATION_TYPE_POINTS":
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_POINTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChartWidget_SeriesOverrides_SeriesVisualizationType.UNRECOGNIZED;
  }
}

export function chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(
  object: ChartWidget_SeriesOverrides_SeriesVisualizationType
): string {
  switch (object) {
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_UNSPECIFIED:
      return "SERIES_VISUALIZATION_TYPE_UNSPECIFIED";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_LINE:
      return "SERIES_VISUALIZATION_TYPE_LINE";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_STACK:
      return "SERIES_VISUALIZATION_TYPE_STACK";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_COLUMN:
      return "SERIES_VISUALIZATION_TYPE_COLUMN";
    case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_POINTS:
      return "SERIES_VISUALIZATION_TYPE_POINTS";
    default:
      return "UNKNOWN";
  }
}

export interface ChartWidget_SeriesOverrides_SeriesOverrideSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings";
  /** Series name or empty. */
  name: string;
  /** Series color or empty. */
  color: string;
  /** Type. */
  type: ChartWidget_SeriesOverrides_SeriesVisualizationType;
  /** Stack name or empty. */
  stackName: string;
  /** Stack grow down. */
  growDown: boolean;
  /** Yaxis position. */
  yaxisPosition: ChartWidget_SeriesOverrides_YaxisPosition;
}

/** Name hiding settings. */
export interface ChartWidget_NameHidingSettings {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings";
  /** True if we want to show concrete series names only, false if we want to hide concrete series names. */
  positive: boolean;
  /** Series names to show or hide. */
  names: string[];
}

const baseChartWidget: object = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget",
  id: "",
  description: "",
  title: "",
  displayLegend: false,
  freeze: 0,
};

export const ChartWidget = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget" as const,

  encode(
    message: ChartWidget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.queries !== undefined) {
      ChartWidget_Queries.encode(
        message.queries,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.visualizationSettings !== undefined) {
      ChartWidget_VisualizationSettings.encode(
        message.visualizationSettings,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.seriesOverrides) {
      ChartWidget_SeriesOverrides.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.nameHidingSettings !== undefined) {
      ChartWidget_NameHidingSettings.encode(
        message.nameHidingSettings,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.displayLegend === true) {
      writer.uint32(64).bool(message.displayLegend);
    }
    if (message.freeze !== 0) {
      writer.uint32(72).int32(message.freeze);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChartWidget } as ChartWidget;
    message.seriesOverrides = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.queries = ChartWidget_Queries.decode(reader, reader.uint32());
          break;
        case 3:
          message.visualizationSettings =
            ChartWidget_VisualizationSettings.decode(reader, reader.uint32());
          break;
        case 4:
          message.seriesOverrides.push(
            ChartWidget_SeriesOverrides.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.nameHidingSettings = ChartWidget_NameHidingSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.title = reader.string();
          break;
        case 8:
          message.displayLegend = reader.bool();
          break;
        case 9:
          message.freeze = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChartWidget {
    const message = { ...baseChartWidget } as ChartWidget;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.queries =
      object.queries !== undefined && object.queries !== null
        ? ChartWidget_Queries.fromJSON(object.queries)
        : undefined;
    message.visualizationSettings =
      object.visualizationSettings !== undefined &&
      object.visualizationSettings !== null
        ? ChartWidget_VisualizationSettings.fromJSON(
            object.visualizationSettings
          )
        : undefined;
    message.seriesOverrides = (object.seriesOverrides ?? []).map((e: any) =>
      ChartWidget_SeriesOverrides.fromJSON(e)
    );
    message.nameHidingSettings =
      object.nameHidingSettings !== undefined &&
      object.nameHidingSettings !== null
        ? ChartWidget_NameHidingSettings.fromJSON(object.nameHidingSettings)
        : undefined;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.displayLegend =
      object.displayLegend !== undefined && object.displayLegend !== null
        ? Boolean(object.displayLegend)
        : false;
    message.freeze =
      object.freeze !== undefined && object.freeze !== null
        ? chartWidget_FreezeDurationFromJSON(object.freeze)
        : 0;
    return message;
  },

  toJSON(message: ChartWidget): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.queries !== undefined &&
      (obj.queries = message.queries
        ? ChartWidget_Queries.toJSON(message.queries)
        : undefined);
    message.visualizationSettings !== undefined &&
      (obj.visualizationSettings = message.visualizationSettings
        ? ChartWidget_VisualizationSettings.toJSON(
            message.visualizationSettings
          )
        : undefined);
    if (message.seriesOverrides) {
      obj.seriesOverrides = message.seriesOverrides.map((e) =>
        e ? ChartWidget_SeriesOverrides.toJSON(e) : undefined
      );
    } else {
      obj.seriesOverrides = [];
    }
    message.nameHidingSettings !== undefined &&
      (obj.nameHidingSettings = message.nameHidingSettings
        ? ChartWidget_NameHidingSettings.toJSON(message.nameHidingSettings)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    message.title !== undefined && (obj.title = message.title);
    message.displayLegend !== undefined &&
      (obj.displayLegend = message.displayLegend);
    message.freeze !== undefined &&
      (obj.freeze = chartWidget_FreezeDurationToJSON(message.freeze));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChartWidget>, I>>(
    object: I
  ): ChartWidget {
    const message = { ...baseChartWidget } as ChartWidget;
    message.id = object.id ?? "";
    message.queries =
      object.queries !== undefined && object.queries !== null
        ? ChartWidget_Queries.fromPartial(object.queries)
        : undefined;
    message.visualizationSettings =
      object.visualizationSettings !== undefined &&
      object.visualizationSettings !== null
        ? ChartWidget_VisualizationSettings.fromPartial(
            object.visualizationSettings
          )
        : undefined;
    message.seriesOverrides =
      object.seriesOverrides?.map((e) =>
        ChartWidget_SeriesOverrides.fromPartial(e)
      ) || [];
    message.nameHidingSettings =
      object.nameHidingSettings !== undefined &&
      object.nameHidingSettings !== null
        ? ChartWidget_NameHidingSettings.fromPartial(object.nameHidingSettings)
        : undefined;
    message.description = object.description ?? "";
    message.title = object.title ?? "";
    message.displayLegend = object.displayLegend ?? false;
    message.freeze = object.freeze ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ChartWidget.$type, ChartWidget);

const baseChartWidget_Queries: object = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries",
};

export const ChartWidget_Queries = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries" as const,

  encode(
    message: ChartWidget_Queries,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.targets) {
      ChartWidget_Queries_Target.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.downsampling !== undefined) {
      Downsampling.encode(
        message.downsampling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget_Queries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChartWidget_Queries } as ChartWidget_Queries;
    message.targets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targets.push(
            ChartWidget_Queries_Target.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): ChartWidget_Queries {
    const message = { ...baseChartWidget_Queries } as ChartWidget_Queries;
    message.targets = (object.targets ?? []).map((e: any) =>
      ChartWidget_Queries_Target.fromJSON(e)
    );
    message.downsampling =
      object.downsampling !== undefined && object.downsampling !== null
        ? Downsampling.fromJSON(object.downsampling)
        : undefined;
    return message;
  },

  toJSON(message: ChartWidget_Queries): unknown {
    const obj: any = {};
    if (message.targets) {
      obj.targets = message.targets.map((e) =>
        e ? ChartWidget_Queries_Target.toJSON(e) : undefined
      );
    } else {
      obj.targets = [];
    }
    message.downsampling !== undefined &&
      (obj.downsampling = message.downsampling
        ? Downsampling.toJSON(message.downsampling)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChartWidget_Queries>, I>>(
    object: I
  ): ChartWidget_Queries {
    const message = { ...baseChartWidget_Queries } as ChartWidget_Queries;
    message.targets =
      object.targets?.map((e) => ChartWidget_Queries_Target.fromPartial(e)) ||
      [];
    message.downsampling =
      object.downsampling !== undefined && object.downsampling !== null
        ? Downsampling.fromPartial(object.downsampling)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ChartWidget_Queries.$type, ChartWidget_Queries);

const baseChartWidget_Queries_Target: object = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target",
  query: "",
  textMode: false,
  hidden: false,
};

export const ChartWidget_Queries_Target = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target" as const,

  encode(
    message: ChartWidget_Queries_Target,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    if (message.textMode === true) {
      writer.uint32(16).bool(message.textMode);
    }
    if (message.hidden === true) {
      writer.uint32(24).bool(message.hidden);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChartWidget_Queries_Target {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_Queries_Target,
    } as ChartWidget_Queries_Target;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = reader.string();
          break;
        case 2:
          message.textMode = reader.bool();
          break;
        case 3:
          message.hidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_Queries_Target {
    const message = {
      ...baseChartWidget_Queries_Target,
    } as ChartWidget_Queries_Target;
    message.query =
      object.query !== undefined && object.query !== null
        ? String(object.query)
        : "";
    message.textMode =
      object.textMode !== undefined && object.textMode !== null
        ? Boolean(object.textMode)
        : false;
    message.hidden =
      object.hidden !== undefined && object.hidden !== null
        ? Boolean(object.hidden)
        : false;
    return message;
  },

  toJSON(message: ChartWidget_Queries_Target): unknown {
    const obj: any = {};
    message.query !== undefined && (obj.query = message.query);
    message.textMode !== undefined && (obj.textMode = message.textMode);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChartWidget_Queries_Target>, I>>(
    object: I
  ): ChartWidget_Queries_Target {
    const message = {
      ...baseChartWidget_Queries_Target,
    } as ChartWidget_Queries_Target;
    message.query = object.query ?? "";
    message.textMode = object.textMode ?? false;
    message.hidden = object.hidden ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_Queries_Target.$type,
  ChartWidget_Queries_Target
);

const baseChartWidget_VisualizationSettings: object = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings",
  type: 0,
  normalize: false,
  interpolate: 0,
  aggregation: 0,
  title: "",
  showLabels: false,
};

export const ChartWidget_VisualizationSettings = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings" as const,

  encode(
    message: ChartWidget_VisualizationSettings,
    writer: _m0.Writer = _m0.Writer.create()
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
      ChartWidget_VisualizationSettings_ColorSchemeSettings.encode(
        message.colorSchemeSettings,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.heatmapSettings !== undefined) {
      ChartWidget_VisualizationSettings_HeatmapSettings.encode(
        message.heatmapSettings,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.yaxisSettings !== undefined) {
      ChartWidget_VisualizationSettings_YaxisSettings.encode(
        message.yaxisSettings,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(66).string(message.title);
    }
    if (message.showLabels === true) {
      writer.uint32(72).bool(message.showLabels);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChartWidget_VisualizationSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_VisualizationSettings,
    } as ChartWidget_VisualizationSettings;
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
            ChartWidget_VisualizationSettings_ColorSchemeSettings.decode(
              reader,
              reader.uint32()
            );
          break;
        case 6:
          message.heatmapSettings =
            ChartWidget_VisualizationSettings_HeatmapSettings.decode(
              reader,
              reader.uint32()
            );
          break;
        case 7:
          message.yaxisSettings =
            ChartWidget_VisualizationSettings_YaxisSettings.decode(
              reader,
              reader.uint32()
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

  fromJSON(object: any): ChartWidget_VisualizationSettings {
    const message = {
      ...baseChartWidget_VisualizationSettings,
    } as ChartWidget_VisualizationSettings;
    message.type =
      object.type !== undefined && object.type !== null
        ? chartWidget_VisualizationSettings_VisualizationTypeFromJSON(
            object.type
          )
        : 0;
    message.normalize =
      object.normalize !== undefined && object.normalize !== null
        ? Boolean(object.normalize)
        : false;
    message.interpolate =
      object.interpolate !== undefined && object.interpolate !== null
        ? chartWidget_VisualizationSettings_InterpolateFromJSON(
            object.interpolate
          )
        : 0;
    message.aggregation =
      object.aggregation !== undefined && object.aggregation !== null
        ? chartWidget_VisualizationSettings_SeriesAggregationFromJSON(
            object.aggregation
          )
        : 0;
    message.colorSchemeSettings =
      object.colorSchemeSettings !== undefined &&
      object.colorSchemeSettings !== null
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings.fromJSON(
            object.colorSchemeSettings
          )
        : undefined;
    message.heatmapSettings =
      object.heatmapSettings !== undefined && object.heatmapSettings !== null
        ? ChartWidget_VisualizationSettings_HeatmapSettings.fromJSON(
            object.heatmapSettings
          )
        : undefined;
    message.yaxisSettings =
      object.yaxisSettings !== undefined && object.yaxisSettings !== null
        ? ChartWidget_VisualizationSettings_YaxisSettings.fromJSON(
            object.yaxisSettings
          )
        : undefined;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.showLabels =
      object.showLabels !== undefined && object.showLabels !== null
        ? Boolean(object.showLabels)
        : false;
    return message;
  },

  toJSON(message: ChartWidget_VisualizationSettings): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = chartWidget_VisualizationSettings_VisualizationTypeToJSON(
        message.type
      ));
    message.normalize !== undefined && (obj.normalize = message.normalize);
    message.interpolate !== undefined &&
      (obj.interpolate = chartWidget_VisualizationSettings_InterpolateToJSON(
        message.interpolate
      ));
    message.aggregation !== undefined &&
      (obj.aggregation =
        chartWidget_VisualizationSettings_SeriesAggregationToJSON(
          message.aggregation
        ));
    message.colorSchemeSettings !== undefined &&
      (obj.colorSchemeSettings = message.colorSchemeSettings
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings.toJSON(
            message.colorSchemeSettings
          )
        : undefined);
    message.heatmapSettings !== undefined &&
      (obj.heatmapSettings = message.heatmapSettings
        ? ChartWidget_VisualizationSettings_HeatmapSettings.toJSON(
            message.heatmapSettings
          )
        : undefined);
    message.yaxisSettings !== undefined &&
      (obj.yaxisSettings = message.yaxisSettings
        ? ChartWidget_VisualizationSettings_YaxisSettings.toJSON(
            message.yaxisSettings
          )
        : undefined);
    message.title !== undefined && (obj.title = message.title);
    message.showLabels !== undefined && (obj.showLabels = message.showLabels);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ChartWidget_VisualizationSettings>, I>
  >(object: I): ChartWidget_VisualizationSettings {
    const message = {
      ...baseChartWidget_VisualizationSettings,
    } as ChartWidget_VisualizationSettings;
    message.type = object.type ?? 0;
    message.normalize = object.normalize ?? false;
    message.interpolate = object.interpolate ?? 0;
    message.aggregation = object.aggregation ?? 0;
    message.colorSchemeSettings =
      object.colorSchemeSettings !== undefined &&
      object.colorSchemeSettings !== null
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings.fromPartial(
            object.colorSchemeSettings
          )
        : undefined;
    message.heatmapSettings =
      object.heatmapSettings !== undefined && object.heatmapSettings !== null
        ? ChartWidget_VisualizationSettings_HeatmapSettings.fromPartial(
            object.heatmapSettings
          )
        : undefined;
    message.yaxisSettings =
      object.yaxisSettings !== undefined && object.yaxisSettings !== null
        ? ChartWidget_VisualizationSettings_YaxisSettings.fromPartial(
            object.yaxisSettings
          )
        : undefined;
    message.title = object.title ?? "";
    message.showLabels = object.showLabels ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings.$type,
  ChartWidget_VisualizationSettings
);

const baseChartWidget_VisualizationSettings_ColorSchemeSettings: object = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings",
};

export const ChartWidget_VisualizationSettings_ColorSchemeSettings = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings" as const,

  encode(
    message: ChartWidget_VisualizationSettings_ColorSchemeSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.automatic !== undefined) {
      ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.encode(
        message.automatic,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.standard !== undefined) {
      ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.encode(
        message.standard,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.gradient !== undefined) {
      ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.encode(
        message.gradient,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChartWidget_VisualizationSettings_ColorSchemeSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_VisualizationSettings_ColorSchemeSettings,
    } as ChartWidget_VisualizationSettings_ColorSchemeSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.automatic =
            ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.standard =
            ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.gradient =
            ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.decode(
              reader,
              reader.uint32()
            );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_VisualizationSettings_ColorSchemeSettings {
    const message = {
      ...baseChartWidget_VisualizationSettings_ColorSchemeSettings,
    } as ChartWidget_VisualizationSettings_ColorSchemeSettings;
    message.automatic =
      object.automatic !== undefined && object.automatic !== null
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromJSON(
            object.automatic
          )
        : undefined;
    message.standard =
      object.standard !== undefined && object.standard !== null
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromJSON(
            object.standard
          )
        : undefined;
    message.gradient =
      object.gradient !== undefined && object.gradient !== null
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromJSON(
            object.gradient
          )
        : undefined;
    return message;
  },

  toJSON(
    message: ChartWidget_VisualizationSettings_ColorSchemeSettings
  ): unknown {
    const obj: any = {};
    message.automatic !== undefined &&
      (obj.automatic = message.automatic
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.toJSON(
            message.automatic
          )
        : undefined);
    message.standard !== undefined &&
      (obj.standard = message.standard
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.toJSON(
            message.standard
          )
        : undefined);
    message.gradient !== undefined &&
      (obj.gradient = message.gradient
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.toJSON(
            message.gradient
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings>,
      I
    >
  >(object: I): ChartWidget_VisualizationSettings_ColorSchemeSettings {
    const message = {
      ...baseChartWidget_VisualizationSettings_ColorSchemeSettings,
    } as ChartWidget_VisualizationSettings_ColorSchemeSettings;
    message.automatic =
      object.automatic !== undefined && object.automatic !== null
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromPartial(
            object.automatic
          )
        : undefined;
    message.standard =
      object.standard !== undefined && object.standard !== null
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromPartial(
            object.standard
          )
        : undefined;
    message.gradient =
      object.gradient !== undefined && object.gradient !== null
        ? ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromPartial(
            object.gradient
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_ColorSchemeSettings.$type,
  ChartWidget_VisualizationSettings_ColorSchemeSettings
);

const baseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme: object =
  {
    $type:
      "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme",
  };

export const ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme =
  {
    $type:
      "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme" as const,

    encode(
      _: ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
      const reader =
        input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
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
      _: any
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
      return message;
    },

    toJSON(
      _: ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme
    ): unknown {
      const obj: any = {};
      return obj;
    },

    fromPartial<
      I extends Exact<
        DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme>,
        I
      >
    >(
      _: I
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
      return message;
    },
  };

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.$type,
  ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme
);

const baseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme: object =
  {
    $type:
      "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme",
  };

export const ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme =
  {
    $type:
      "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme" as const,

    encode(
      _: ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
      const reader =
        input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
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
      _: any
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
      return message;
    },

    toJSON(
      _: ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme
    ): unknown {
      const obj: any = {};
      return obj;
    },

    fromPartial<
      I extends Exact<
        DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme>,
        I
      >
    >(
      _: I
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
      return message;
    },
  };

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.$type,
  ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme
);

const baseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme: object =
  {
    $type:
      "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme",
    greenValue: "",
    yellowValue: "",
    redValue: "",
    violetValue: "",
  };

export const ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme =
  {
    $type:
      "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme" as const,

    encode(
      message: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      if (message.greenValue !== "") {
        writer.uint32(18).string(message.greenValue);
      }
      if (message.yellowValue !== "") {
        writer.uint32(26).string(message.yellowValue);
      }
      if (message.redValue !== "") {
        writer.uint32(34).string(message.redValue);
      }
      if (message.violetValue !== "") {
        writer.uint32(42).string(message.violetValue);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
      const reader =
        input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
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
      object: any
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
      message.greenValue =
        object.greenValue !== undefined && object.greenValue !== null
          ? String(object.greenValue)
          : "";
      message.yellowValue =
        object.yellowValue !== undefined && object.yellowValue !== null
          ? String(object.yellowValue)
          : "";
      message.redValue =
        object.redValue !== undefined && object.redValue !== null
          ? String(object.redValue)
          : "";
      message.violetValue =
        object.violetValue !== undefined && object.violetValue !== null
          ? String(object.violetValue)
          : "";
      return message;
    },

    toJSON(
      message: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme
    ): unknown {
      const obj: any = {};
      message.greenValue !== undefined && (obj.greenValue = message.greenValue);
      message.yellowValue !== undefined &&
        (obj.yellowValue = message.yellowValue);
      message.redValue !== undefined && (obj.redValue = message.redValue);
      message.violetValue !== undefined &&
        (obj.violetValue = message.violetValue);
      return obj;
    },

    fromPartial<
      I extends Exact<
        DeepPartial<ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme>,
        I
      >
    >(
      object: I
    ): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
      const message = {
        ...baseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme,
      } as ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
      message.greenValue = object.greenValue ?? "";
      message.yellowValue = object.yellowValue ?? "";
      message.redValue = object.redValue ?? "";
      message.violetValue = object.violetValue ?? "";
      return message;
    },
  };

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.$type,
  ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme
);

const baseChartWidget_VisualizationSettings_HeatmapSettings: object = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings",
  greenValue: "",
  yellowValue: "",
  redValue: "",
  violetValue: "",
};

export const ChartWidget_VisualizationSettings_HeatmapSettings = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings" as const,

  encode(
    message: ChartWidget_VisualizationSettings_HeatmapSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.greenValue !== "") {
      writer.uint32(18).string(message.greenValue);
    }
    if (message.yellowValue !== "") {
      writer.uint32(26).string(message.yellowValue);
    }
    if (message.redValue !== "") {
      writer.uint32(34).string(message.redValue);
    }
    if (message.violetValue !== "") {
      writer.uint32(42).string(message.violetValue);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChartWidget_VisualizationSettings_HeatmapSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_VisualizationSettings_HeatmapSettings,
    } as ChartWidget_VisualizationSettings_HeatmapSettings;
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

  fromJSON(object: any): ChartWidget_VisualizationSettings_HeatmapSettings {
    const message = {
      ...baseChartWidget_VisualizationSettings_HeatmapSettings,
    } as ChartWidget_VisualizationSettings_HeatmapSettings;
    message.greenValue =
      object.greenValue !== undefined && object.greenValue !== null
        ? String(object.greenValue)
        : "";
    message.yellowValue =
      object.yellowValue !== undefined && object.yellowValue !== null
        ? String(object.yellowValue)
        : "";
    message.redValue =
      object.redValue !== undefined && object.redValue !== null
        ? String(object.redValue)
        : "";
    message.violetValue =
      object.violetValue !== undefined && object.violetValue !== null
        ? String(object.violetValue)
        : "";
    return message;
  },

  toJSON(message: ChartWidget_VisualizationSettings_HeatmapSettings): unknown {
    const obj: any = {};
    message.greenValue !== undefined && (obj.greenValue = message.greenValue);
    message.yellowValue !== undefined &&
      (obj.yellowValue = message.yellowValue);
    message.redValue !== undefined && (obj.redValue = message.redValue);
    message.violetValue !== undefined &&
      (obj.violetValue = message.violetValue);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ChartWidget_VisualizationSettings_HeatmapSettings>,
      I
    >
  >(object: I): ChartWidget_VisualizationSettings_HeatmapSettings {
    const message = {
      ...baseChartWidget_VisualizationSettings_HeatmapSettings,
    } as ChartWidget_VisualizationSettings_HeatmapSettings;
    message.greenValue = object.greenValue ?? "";
    message.yellowValue = object.yellowValue ?? "";
    message.redValue = object.redValue ?? "";
    message.violetValue = object.violetValue ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_HeatmapSettings.$type,
  ChartWidget_VisualizationSettings_HeatmapSettings
);

const baseChartWidget_VisualizationSettings_Yaxis: object = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis",
  type: 0,
  title: "",
  min: "",
  max: "",
  unitFormat: 0,
};

export const ChartWidget_VisualizationSettings_Yaxis = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis" as const,

  encode(
    message: ChartWidget_VisualizationSettings_Yaxis,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.min !== "") {
      writer.uint32(26).string(message.min);
    }
    if (message.max !== "") {
      writer.uint32(34).string(message.max);
    }
    if (message.unitFormat !== 0) {
      writer.uint32(40).int32(message.unitFormat);
    }
    if (message.precision !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.precision! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChartWidget_VisualizationSettings_Yaxis {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_VisualizationSettings_Yaxis,
    } as ChartWidget_VisualizationSettings_Yaxis;
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

  fromJSON(object: any): ChartWidget_VisualizationSettings_Yaxis {
    const message = {
      ...baseChartWidget_VisualizationSettings_Yaxis,
    } as ChartWidget_VisualizationSettings_Yaxis;
    message.type =
      object.type !== undefined && object.type !== null
        ? chartWidget_VisualizationSettings_YaxisTypeFromJSON(object.type)
        : 0;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.min =
      object.min !== undefined && object.min !== null ? String(object.min) : "";
    message.max =
      object.max !== undefined && object.max !== null ? String(object.max) : "";
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

  toJSON(message: ChartWidget_VisualizationSettings_Yaxis): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = chartWidget_VisualizationSettings_YaxisTypeToJSON(
        message.type
      ));
    message.title !== undefined && (obj.title = message.title);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    message.unitFormat !== undefined &&
      (obj.unitFormat = unitFormatToJSON(message.unitFormat));
    message.precision !== undefined && (obj.precision = message.precision);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ChartWidget_VisualizationSettings_Yaxis>, I>
  >(object: I): ChartWidget_VisualizationSettings_Yaxis {
    const message = {
      ...baseChartWidget_VisualizationSettings_Yaxis,
    } as ChartWidget_VisualizationSettings_Yaxis;
    message.type = object.type ?? 0;
    message.title = object.title ?? "";
    message.min = object.min ?? "";
    message.max = object.max ?? "";
    message.unitFormat = object.unitFormat ?? 0;
    message.precision = object.precision ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_Yaxis.$type,
  ChartWidget_VisualizationSettings_Yaxis
);

const baseChartWidget_VisualizationSettings_YaxisSettings: object = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings",
};

export const ChartWidget_VisualizationSettings_YaxisSettings = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings" as const,

  encode(
    message: ChartWidget_VisualizationSettings_YaxisSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.left !== undefined) {
      ChartWidget_VisualizationSettings_Yaxis.encode(
        message.left,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.right !== undefined) {
      ChartWidget_VisualizationSettings_Yaxis.encode(
        message.right,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChartWidget_VisualizationSettings_YaxisSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_VisualizationSettings_YaxisSettings,
    } as ChartWidget_VisualizationSettings_YaxisSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = ChartWidget_VisualizationSettings_Yaxis.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.right = ChartWidget_VisualizationSettings_Yaxis.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_VisualizationSettings_YaxisSettings {
    const message = {
      ...baseChartWidget_VisualizationSettings_YaxisSettings,
    } as ChartWidget_VisualizationSettings_YaxisSettings;
    message.left =
      object.left !== undefined && object.left !== null
        ? ChartWidget_VisualizationSettings_Yaxis.fromJSON(object.left)
        : undefined;
    message.right =
      object.right !== undefined && object.right !== null
        ? ChartWidget_VisualizationSettings_Yaxis.fromJSON(object.right)
        : undefined;
    return message;
  },

  toJSON(message: ChartWidget_VisualizationSettings_YaxisSettings): unknown {
    const obj: any = {};
    message.left !== undefined &&
      (obj.left = message.left
        ? ChartWidget_VisualizationSettings_Yaxis.toJSON(message.left)
        : undefined);
    message.right !== undefined &&
      (obj.right = message.right
        ? ChartWidget_VisualizationSettings_Yaxis.toJSON(message.right)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ChartWidget_VisualizationSettings_YaxisSettings>,
      I
    >
  >(object: I): ChartWidget_VisualizationSettings_YaxisSettings {
    const message = {
      ...baseChartWidget_VisualizationSettings_YaxisSettings,
    } as ChartWidget_VisualizationSettings_YaxisSettings;
    message.left =
      object.left !== undefined && object.left !== null
        ? ChartWidget_VisualizationSettings_Yaxis.fromPartial(object.left)
        : undefined;
    message.right =
      object.right !== undefined && object.right !== null
        ? ChartWidget_VisualizationSettings_Yaxis.fromPartial(object.right)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_VisualizationSettings_YaxisSettings.$type,
  ChartWidget_VisualizationSettings_YaxisSettings
);

const baseChartWidget_SeriesOverrides: object = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides",
};

export const ChartWidget_SeriesOverrides = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides" as const,

  encode(
    message: ChartWidget_SeriesOverrides,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.targetIndex !== undefined) {
      writer.uint32(18).string(message.targetIndex);
    }
    if (message.settings !== undefined) {
      ChartWidget_SeriesOverrides_SeriesOverrideSettings.encode(
        message.settings,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChartWidget_SeriesOverrides {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_SeriesOverrides,
    } as ChartWidget_SeriesOverrides;
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
            ChartWidget_SeriesOverrides_SeriesOverrideSettings.decode(
              reader,
              reader.uint32()
            );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChartWidget_SeriesOverrides {
    const message = {
      ...baseChartWidget_SeriesOverrides,
    } as ChartWidget_SeriesOverrides;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : undefined;
    message.targetIndex =
      object.targetIndex !== undefined && object.targetIndex !== null
        ? String(object.targetIndex)
        : undefined;
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? ChartWidget_SeriesOverrides_SeriesOverrideSettings.fromJSON(
            object.settings
          )
        : undefined;
    return message;
  },

  toJSON(message: ChartWidget_SeriesOverrides): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.targetIndex !== undefined &&
      (obj.targetIndex = message.targetIndex);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? ChartWidget_SeriesOverrides_SeriesOverrideSettings.toJSON(
            message.settings
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChartWidget_SeriesOverrides>, I>>(
    object: I
  ): ChartWidget_SeriesOverrides {
    const message = {
      ...baseChartWidget_SeriesOverrides,
    } as ChartWidget_SeriesOverrides;
    message.name = object.name ?? undefined;
    message.targetIndex = object.targetIndex ?? undefined;
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? ChartWidget_SeriesOverrides_SeriesOverrideSettings.fromPartial(
            object.settings
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_SeriesOverrides.$type,
  ChartWidget_SeriesOverrides
);

const baseChartWidget_SeriesOverrides_SeriesOverrideSettings: object = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings",
  name: "",
  color: "",
  type: 0,
  stackName: "",
  growDown: false,
  yaxisPosition: 0,
};

export const ChartWidget_SeriesOverrides_SeriesOverrideSettings = {
  $type:
    "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings" as const,

  encode(
    message: ChartWidget_SeriesOverrides_SeriesOverrideSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.color !== "") {
      writer.uint32(18).string(message.color);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.stackName !== "") {
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
    length?: number
  ): ChartWidget_SeriesOverrides_SeriesOverrideSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_SeriesOverrides_SeriesOverrideSettings,
    } as ChartWidget_SeriesOverrides_SeriesOverrideSettings;
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

  fromJSON(object: any): ChartWidget_SeriesOverrides_SeriesOverrideSettings {
    const message = {
      ...baseChartWidget_SeriesOverrides_SeriesOverrideSettings,
    } as ChartWidget_SeriesOverrides_SeriesOverrideSettings;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.color =
      object.color !== undefined && object.color !== null
        ? String(object.color)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(
            object.type
          )
        : 0;
    message.stackName =
      object.stackName !== undefined && object.stackName !== null
        ? String(object.stackName)
        : "";
    message.growDown =
      object.growDown !== undefined && object.growDown !== null
        ? Boolean(object.growDown)
        : false;
    message.yaxisPosition =
      object.yaxisPosition !== undefined && object.yaxisPosition !== null
        ? chartWidget_SeriesOverrides_YaxisPositionFromJSON(
            object.yaxisPosition
          )
        : 0;
    return message;
  },

  toJSON(message: ChartWidget_SeriesOverrides_SeriesOverrideSettings): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined && (obj.color = message.color);
    message.type !== undefined &&
      (obj.type = chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(
        message.type
      ));
    message.stackName !== undefined && (obj.stackName = message.stackName);
    message.growDown !== undefined && (obj.growDown = message.growDown);
    message.yaxisPosition !== undefined &&
      (obj.yaxisPosition = chartWidget_SeriesOverrides_YaxisPositionToJSON(
        message.yaxisPosition
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ChartWidget_SeriesOverrides_SeriesOverrideSettings>,
      I
    >
  >(object: I): ChartWidget_SeriesOverrides_SeriesOverrideSettings {
    const message = {
      ...baseChartWidget_SeriesOverrides_SeriesOverrideSettings,
    } as ChartWidget_SeriesOverrides_SeriesOverrideSettings;
    message.name = object.name ?? "";
    message.color = object.color ?? "";
    message.type = object.type ?? 0;
    message.stackName = object.stackName ?? "";
    message.growDown = object.growDown ?? false;
    message.yaxisPosition = object.yaxisPosition ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_SeriesOverrides_SeriesOverrideSettings.$type,
  ChartWidget_SeriesOverrides_SeriesOverrideSettings
);

const baseChartWidget_NameHidingSettings: object = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings",
  positive: false,
  names: "",
};

export const ChartWidget_NameHidingSettings = {
  $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings" as const,

  encode(
    message: ChartWidget_NameHidingSettings,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): ChartWidget_NameHidingSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChartWidget_NameHidingSettings,
    } as ChartWidget_NameHidingSettings;
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

  fromJSON(object: any): ChartWidget_NameHidingSettings {
    const message = {
      ...baseChartWidget_NameHidingSettings,
    } as ChartWidget_NameHidingSettings;
    message.positive =
      object.positive !== undefined && object.positive !== null
        ? Boolean(object.positive)
        : false;
    message.names = (object.names ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ChartWidget_NameHidingSettings): unknown {
    const obj: any = {};
    message.positive !== undefined && (obj.positive = message.positive);
    if (message.names) {
      obj.names = message.names.map((e) => e);
    } else {
      obj.names = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChartWidget_NameHidingSettings>, I>>(
    object: I
  ): ChartWidget_NameHidingSettings {
    const message = {
      ...baseChartWidget_NameHidingSettings,
    } as ChartWidget_NameHidingSettings;
    message.positive = object.positive ?? false;
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ChartWidget_NameHidingSettings.$type,
  ChartWidget_NameHidingSettings
);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
