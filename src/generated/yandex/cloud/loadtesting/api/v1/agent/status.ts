/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";

export enum Status {
  STATUS_UNSPECIFIED = 0,
  PREPARING_TEST = 1,
  READY_FOR_TEST = 2,
  TESTING = 3,
  TANK_FAILED = 4,
  PROVISIONING = 5,
  STOPPING = 6,
  STOPPED = 7,
  STARTING = 8,
  RESTARTING = 9,
  UPDATING = 10,
  ERROR = 11,
  CRASHED = 12,
  DELETING = 13,
  INITIALIZING_CONNECTION = 15,
  LOST_CONNECTION_WITH_AGENT = 16,
  UPLOADING_ARTIFACTS = 17,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Status.STATUS_UNSPECIFIED;
    case 1:
    case "PREPARING_TEST":
      return Status.PREPARING_TEST;
    case 2:
    case "READY_FOR_TEST":
      return Status.READY_FOR_TEST;
    case 3:
    case "TESTING":
      return Status.TESTING;
    case 4:
    case "TANK_FAILED":
      return Status.TANK_FAILED;
    case 5:
    case "PROVISIONING":
      return Status.PROVISIONING;
    case 6:
    case "STOPPING":
      return Status.STOPPING;
    case 7:
    case "STOPPED":
      return Status.STOPPED;
    case 8:
    case "STARTING":
      return Status.STARTING;
    case 9:
    case "RESTARTING":
      return Status.RESTARTING;
    case 10:
    case "UPDATING":
      return Status.UPDATING;
    case 11:
    case "ERROR":
      return Status.ERROR;
    case 12:
    case "CRASHED":
      return Status.CRASHED;
    case 13:
    case "DELETING":
      return Status.DELETING;
    case 15:
    case "INITIALIZING_CONNECTION":
      return Status.INITIALIZING_CONNECTION;
    case 16:
    case "LOST_CONNECTION_WITH_AGENT":
      return Status.LOST_CONNECTION_WITH_AGENT;
    case 17:
    case "UPLOADING_ARTIFACTS":
      return Status.UPLOADING_ARTIFACTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Status.PREPARING_TEST:
      return "PREPARING_TEST";
    case Status.READY_FOR_TEST:
      return "READY_FOR_TEST";
    case Status.TESTING:
      return "TESTING";
    case Status.TANK_FAILED:
      return "TANK_FAILED";
    case Status.PROVISIONING:
      return "PROVISIONING";
    case Status.STOPPING:
      return "STOPPING";
    case Status.STOPPED:
      return "STOPPED";
    case Status.STARTING:
      return "STARTING";
    case Status.RESTARTING:
      return "RESTARTING";
    case Status.UPDATING:
      return "UPDATING";
    case Status.ERROR:
      return "ERROR";
    case Status.CRASHED:
      return "CRASHED";
    case Status.DELETING:
      return "DELETING";
    case Status.INITIALIZING_CONNECTION:
      return "INITIALIZING_CONNECTION";
    case Status.LOST_CONNECTION_WITH_AGENT:
      return "LOST_CONNECTION_WITH_AGENT";
    case Status.UPLOADING_ARTIFACTS:
      return "UPLOADING_ARTIFACTS";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
