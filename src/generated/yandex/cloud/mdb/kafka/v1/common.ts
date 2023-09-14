/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

export enum CompressionType {
  COMPRESSION_TYPE_UNSPECIFIED = 0,
  /** COMPRESSION_TYPE_UNCOMPRESSED - no codec (uncompressed). */
  COMPRESSION_TYPE_UNCOMPRESSED = 1,
  /** COMPRESSION_TYPE_ZSTD - Zstandard codec. */
  COMPRESSION_TYPE_ZSTD = 2,
  /** COMPRESSION_TYPE_LZ4 - LZ4 codec. */
  COMPRESSION_TYPE_LZ4 = 3,
  /** COMPRESSION_TYPE_SNAPPY - Snappy codec. */
  COMPRESSION_TYPE_SNAPPY = 4,
  /** COMPRESSION_TYPE_GZIP - GZip codec. */
  COMPRESSION_TYPE_GZIP = 5,
  /** COMPRESSION_TYPE_PRODUCER - the codec to use is set by a producer (can be any of `ZSTD`, `LZ4`, `GZIP` or `SNAPPY` codecs). */
  COMPRESSION_TYPE_PRODUCER = 6,
  UNRECOGNIZED = -1,
}

export function compressionTypeFromJSON(object: any): CompressionType {
  switch (object) {
    case 0:
    case "COMPRESSION_TYPE_UNSPECIFIED":
      return CompressionType.COMPRESSION_TYPE_UNSPECIFIED;
    case 1:
    case "COMPRESSION_TYPE_UNCOMPRESSED":
      return CompressionType.COMPRESSION_TYPE_UNCOMPRESSED;
    case 2:
    case "COMPRESSION_TYPE_ZSTD":
      return CompressionType.COMPRESSION_TYPE_ZSTD;
    case 3:
    case "COMPRESSION_TYPE_LZ4":
      return CompressionType.COMPRESSION_TYPE_LZ4;
    case 4:
    case "COMPRESSION_TYPE_SNAPPY":
      return CompressionType.COMPRESSION_TYPE_SNAPPY;
    case 5:
    case "COMPRESSION_TYPE_GZIP":
      return CompressionType.COMPRESSION_TYPE_GZIP;
    case 6:
    case "COMPRESSION_TYPE_PRODUCER":
      return CompressionType.COMPRESSION_TYPE_PRODUCER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CompressionType.UNRECOGNIZED;
  }
}

export function compressionTypeToJSON(object: CompressionType): string {
  switch (object) {
    case CompressionType.COMPRESSION_TYPE_UNSPECIFIED:
      return "COMPRESSION_TYPE_UNSPECIFIED";
    case CompressionType.COMPRESSION_TYPE_UNCOMPRESSED:
      return "COMPRESSION_TYPE_UNCOMPRESSED";
    case CompressionType.COMPRESSION_TYPE_ZSTD:
      return "COMPRESSION_TYPE_ZSTD";
    case CompressionType.COMPRESSION_TYPE_LZ4:
      return "COMPRESSION_TYPE_LZ4";
    case CompressionType.COMPRESSION_TYPE_SNAPPY:
      return "COMPRESSION_TYPE_SNAPPY";
    case CompressionType.COMPRESSION_TYPE_GZIP:
      return "COMPRESSION_TYPE_GZIP";
    case CompressionType.COMPRESSION_TYPE_PRODUCER:
      return "COMPRESSION_TYPE_PRODUCER";
    default:
      return "UNKNOWN";
  }
}

export enum SaslMechanism {
  SASL_MECHANISM_UNSPECIFIED = 0,
  SASL_MECHANISM_SCRAM_SHA_256 = 1,
  SASL_MECHANISM_SCRAM_SHA_512 = 2,
  UNRECOGNIZED = -1,
}

export function saslMechanismFromJSON(object: any): SaslMechanism {
  switch (object) {
    case 0:
    case "SASL_MECHANISM_UNSPECIFIED":
      return SaslMechanism.SASL_MECHANISM_UNSPECIFIED;
    case 1:
    case "SASL_MECHANISM_SCRAM_SHA_256":
      return SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256;
    case 2:
    case "SASL_MECHANISM_SCRAM_SHA_512":
      return SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SaslMechanism.UNRECOGNIZED;
  }
}

export function saslMechanismToJSON(object: SaslMechanism): string {
  switch (object) {
    case SaslMechanism.SASL_MECHANISM_UNSPECIFIED:
      return "SASL_MECHANISM_UNSPECIFIED";
    case SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256:
      return "SASL_MECHANISM_SCRAM_SHA_256";
    case SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512:
      return "SASL_MECHANISM_SCRAM_SHA_512";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
