/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.compute.v1";

export enum MaintenancePolicy {
  MAINTENANCE_POLICY_UNSPECIFIED = 0,
  /** RESTART - Restart instance to move it to another host during maintenance */
  RESTART = 1,
  /** MIGRATE - Use live migration to move instance to another host during maintenance */
  MIGRATE = 2,
  UNRECOGNIZED = -1,
}

export function maintenancePolicyFromJSON(object: any): MaintenancePolicy {
  switch (object) {
    case 0:
    case "MAINTENANCE_POLICY_UNSPECIFIED":
      return MaintenancePolicy.MAINTENANCE_POLICY_UNSPECIFIED;
    case 1:
    case "RESTART":
      return MaintenancePolicy.RESTART;
    case 2:
    case "MIGRATE":
      return MaintenancePolicy.MIGRATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MaintenancePolicy.UNRECOGNIZED;
  }
}

export function maintenancePolicyToJSON(object: MaintenancePolicy): string {
  switch (object) {
    case MaintenancePolicy.MAINTENANCE_POLICY_UNSPECIFIED:
      return "MAINTENANCE_POLICY_UNSPECIFIED";
    case MaintenancePolicy.RESTART:
      return "RESTART";
    case MaintenancePolicy.MIGRATE:
      return "MIGRATE";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
