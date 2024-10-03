/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.cic.v1.common";

export enum TransceiverType {
  TRANSCEIVER_TYPE_UNSPECIFIED = 0,
  TRANSCEIVER_TYPE_1000BASE_LX = 1,
  TRANSCEIVER_TYPE_10GBASE_LR = 2,
  TRANSCEIVER_TYPE_10GBASE_ER = 3,
  TRANSCEIVER_TYPE_100GBASE_LR4 = 4,
  TRANSCEIVER_TYPE_100GBASE_ER4 = 5,
  UNRECOGNIZED = -1,
}

export function transceiverTypeFromJSON(object: any): TransceiverType {
  switch (object) {
    case 0:
    case "TRANSCEIVER_TYPE_UNSPECIFIED":
      return TransceiverType.TRANSCEIVER_TYPE_UNSPECIFIED;
    case 1:
    case "TRANSCEIVER_TYPE_1000BASE_LX":
      return TransceiverType.TRANSCEIVER_TYPE_1000BASE_LX;
    case 2:
    case "TRANSCEIVER_TYPE_10GBASE_LR":
      return TransceiverType.TRANSCEIVER_TYPE_10GBASE_LR;
    case 3:
    case "TRANSCEIVER_TYPE_10GBASE_ER":
      return TransceiverType.TRANSCEIVER_TYPE_10GBASE_ER;
    case 4:
    case "TRANSCEIVER_TYPE_100GBASE_LR4":
      return TransceiverType.TRANSCEIVER_TYPE_100GBASE_LR4;
    case 5:
    case "TRANSCEIVER_TYPE_100GBASE_ER4":
      return TransceiverType.TRANSCEIVER_TYPE_100GBASE_ER4;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransceiverType.UNRECOGNIZED;
  }
}

export function transceiverTypeToJSON(object: TransceiverType): string {
  switch (object) {
    case TransceiverType.TRANSCEIVER_TYPE_UNSPECIFIED:
      return "TRANSCEIVER_TYPE_UNSPECIFIED";
    case TransceiverType.TRANSCEIVER_TYPE_1000BASE_LX:
      return "TRANSCEIVER_TYPE_1000BASE_LX";
    case TransceiverType.TRANSCEIVER_TYPE_10GBASE_LR:
      return "TRANSCEIVER_TYPE_10GBASE_LR";
    case TransceiverType.TRANSCEIVER_TYPE_10GBASE_ER:
      return "TRANSCEIVER_TYPE_10GBASE_ER";
    case TransceiverType.TRANSCEIVER_TYPE_100GBASE_LR4:
      return "TRANSCEIVER_TYPE_100GBASE_LR4";
    case TransceiverType.TRANSCEIVER_TYPE_100GBASE_ER4:
      return "TRANSCEIVER_TYPE_100GBASE_ER4";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
