/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "google.type";

/** Represents a day of week. */
export enum DayOfWeek {
  /** DAY_OF_WEEK_UNSPECIFIED - The unspecified day-of-week. */
  DAY_OF_WEEK_UNSPECIFIED = 0,
  /** MONDAY - The day-of-week of Monday. */
  MONDAY = 1,
  /** TUESDAY - The day-of-week of Tuesday. */
  TUESDAY = 2,
  /** WEDNESDAY - The day-of-week of Wednesday. */
  WEDNESDAY = 3,
  /** THURSDAY - The day-of-week of Thursday. */
  THURSDAY = 4,
  /** FRIDAY - The day-of-week of Friday. */
  FRIDAY = 5,
  /** SATURDAY - The day-of-week of Saturday. */
  SATURDAY = 6,
  /** SUNDAY - The day-of-week of Sunday. */
  SUNDAY = 7,
  UNRECOGNIZED = -1,
}

export function dayOfWeekFromJSON(object: any): DayOfWeek {
  switch (object) {
    case 0:
    case "DAY_OF_WEEK_UNSPECIFIED":
      return DayOfWeek.DAY_OF_WEEK_UNSPECIFIED;
    case 1:
    case "MONDAY":
      return DayOfWeek.MONDAY;
    case 2:
    case "TUESDAY":
      return DayOfWeek.TUESDAY;
    case 3:
    case "WEDNESDAY":
      return DayOfWeek.WEDNESDAY;
    case 4:
    case "THURSDAY":
      return DayOfWeek.THURSDAY;
    case 5:
    case "FRIDAY":
      return DayOfWeek.FRIDAY;
    case 6:
    case "SATURDAY":
      return DayOfWeek.SATURDAY;
    case 7:
    case "SUNDAY":
      return DayOfWeek.SUNDAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DayOfWeek.UNRECOGNIZED;
  }
}

export function dayOfWeekToJSON(object: DayOfWeek): string {
  switch (object) {
    case DayOfWeek.DAY_OF_WEEK_UNSPECIFIED:
      return "DAY_OF_WEEK_UNSPECIFIED";
    case DayOfWeek.MONDAY:
      return "MONDAY";
    case DayOfWeek.TUESDAY:
      return "TUESDAY";
    case DayOfWeek.WEDNESDAY:
      return "WEDNESDAY";
    case DayOfWeek.THURSDAY:
      return "THURSDAY";
    case DayOfWeek.FRIDAY:
      return "FRIDAY";
    case DayOfWeek.SATURDAY:
      return "SATURDAY";
    case DayOfWeek.SUNDAY:
      return "SUNDAY";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
