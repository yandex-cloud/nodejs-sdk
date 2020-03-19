module.exports = (function() {
  const $protobuf = require('protobufjs');
  const grpc = require('grpc');
  const registar = require('../../../lib/registar.js');
  const util = require('../../../lib/util.js');
  const yc = require('../../../index.js');
  const $Reader = $protobuf.Reader;
  const $Writer = $protobuf.Writer;
  const $util = $protobuf.util;
  let root = {};
  require('../../../api/operation');
  require('../../../api/access');
  (function($root) {
    $root.SymmetricCryptoService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.SymmetricCryptoService.makeGrpcConstructor());
    };
    $root.SymmetricCryptoService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        encrypt: {
          path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.SymmetricEncryptRequest,
          responseType: $root.api.kms.v1.SymmetricEncryptResponse,
          requestSerialize: r => {
            return $root.api.kms.v1.SymmetricEncryptRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.SymmetricEncryptRequest.decode,
          responseSerialize: r => {
            return $root.api.kms.v1.SymmetricEncryptResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.kms.v1.SymmetricEncryptResponse.decode
        },
        decrypt: {
          path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.SymmetricDecryptRequest,
          responseType: $root.api.kms.v1.SymmetricDecryptResponse,
          requestSerialize: r => {
            return $root.api.kms.v1.SymmetricDecryptRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.SymmetricDecryptRequest.decode,
          responseSerialize: r => {
            return $root.api.kms.v1.SymmetricDecryptResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.kms.v1.SymmetricDecryptResponse.decode
        },
        reEncrypt: {
          path: '/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.SymmetricReEncryptRequest,
          responseType: $root.api.kms.v1.SymmetricReEncryptResponse,
          requestSerialize: r => {
            return $root.api.kms.v1.SymmetricReEncryptRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.SymmetricReEncryptRequest.decode,
          responseSerialize: r => {
            return $root.api.kms.v1.SymmetricReEncryptResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.kms.v1.SymmetricReEncryptResponse.decode
        },
        generateDataKey: {
          path: '/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.GenerateDataKeyRequest,
          responseType: $root.api.kms.v1.GenerateDataKeyResponse,
          requestSerialize: r => {
            return $root.api.kms.v1.GenerateDataKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.GenerateDataKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.kms.v1.GenerateDataKeyResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.kms.v1.GenerateDataKeyResponse.decode
        }
      });
      ctor.__endpointId = 'kms-crypt';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.SymmetricEncryptRequest = (function() {
      function SymmetricEncryptRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SymmetricEncryptRequest.prototype.keyId = '';
      SymmetricEncryptRequest.prototype.versionId = '';
      SymmetricEncryptRequest.prototype.aadContext = $util.newBuffer([]);
      SymmetricEncryptRequest.prototype.plaintext = $util.newBuffer([]);
      SymmetricEncryptRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.aadContext != null && m.hasOwnProperty('aadContext')) w.uint32(26).bytes(m.aadContext);
        if (m.plaintext != null && m.hasOwnProperty('plaintext')) w.uint32(34).bytes(m.plaintext);
        return w;
      };
      SymmetricEncryptRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SymmetricEncryptRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.aadContext = r.bytes();
              break;
            case 4:
              m.plaintext = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SymmetricEncryptRequest;
    })();
  })(root);
  (function($root) {
    $root.SymmetricEncryptResponse = (function() {
      function SymmetricEncryptResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SymmetricEncryptResponse.prototype.keyId = '';
      SymmetricEncryptResponse.prototype.versionId = '';
      SymmetricEncryptResponse.prototype.ciphertext = $util.newBuffer([]);
      SymmetricEncryptResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.ciphertext != null && m.hasOwnProperty('ciphertext')) w.uint32(26).bytes(m.ciphertext);
        return w;
      };
      SymmetricEncryptResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SymmetricEncryptResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.ciphertext = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SymmetricEncryptResponse;
    })();
  })(root);
  (function($root) {
    $root.SymmetricDecryptRequest = (function() {
      function SymmetricDecryptRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SymmetricDecryptRequest.prototype.keyId = '';
      SymmetricDecryptRequest.prototype.aadContext = $util.newBuffer([]);
      SymmetricDecryptRequest.prototype.ciphertext = $util.newBuffer([]);
      SymmetricDecryptRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.aadContext != null && m.hasOwnProperty('aadContext')) w.uint32(18).bytes(m.aadContext);
        if (m.ciphertext != null && m.hasOwnProperty('ciphertext')) w.uint32(26).bytes(m.ciphertext);
        return w;
      };
      SymmetricDecryptRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SymmetricDecryptRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.aadContext = r.bytes();
              break;
            case 3:
              m.ciphertext = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SymmetricDecryptRequest;
    })();
  })(root);
  (function($root) {
    $root.SymmetricDecryptResponse = (function() {
      function SymmetricDecryptResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SymmetricDecryptResponse.prototype.keyId = '';
      SymmetricDecryptResponse.prototype.versionId = '';
      SymmetricDecryptResponse.prototype.plaintext = $util.newBuffer([]);
      SymmetricDecryptResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.plaintext != null && m.hasOwnProperty('plaintext')) w.uint32(26).bytes(m.plaintext);
        return w;
      };
      SymmetricDecryptResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SymmetricDecryptResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.plaintext = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SymmetricDecryptResponse;
    })();
  })(root);
  (function($root) {
    $root.GenerateDataKeyRequest = (function() {
      function GenerateDataKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GenerateDataKeyRequest.prototype.keyId = '';
      GenerateDataKeyRequest.prototype.versionId = '';
      GenerateDataKeyRequest.prototype.aadContext = $util.newBuffer([]);
      GenerateDataKeyRequest.prototype.dataKeySpec = 0;
      GenerateDataKeyRequest.prototype.skipPlaintext = false;
      GenerateDataKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.aadContext != null && m.hasOwnProperty('aadContext')) w.uint32(26).bytes(m.aadContext);
        if (m.dataKeySpec != null && m.hasOwnProperty('dataKeySpec')) w.uint32(32).int32(m.dataKeySpec);
        if (m.skipPlaintext != null && m.hasOwnProperty('skipPlaintext')) w.uint32(40).bool(m.skipPlaintext);
        return w;
      };
      GenerateDataKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.GenerateDataKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.aadContext = r.bytes();
              break;
            case 4:
              m.dataKeySpec = r.int32();
              break;
            case 5:
              m.skipPlaintext = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GenerateDataKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.GenerateDataKeyResponse = (function() {
      function GenerateDataKeyResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GenerateDataKeyResponse.prototype.keyId = '';
      GenerateDataKeyResponse.prototype.versionId = '';
      GenerateDataKeyResponse.prototype.dataKeyPlaintext = $util.newBuffer([]);
      GenerateDataKeyResponse.prototype.dataKeyCiphertext = $util.newBuffer([]);
      GenerateDataKeyResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.dataKeyPlaintext != null && m.hasOwnProperty('dataKeyPlaintext')) w.uint32(26).bytes(m.dataKeyPlaintext);
        if (m.dataKeyCiphertext != null && m.hasOwnProperty('dataKeyCiphertext')) w.uint32(34).bytes(m.dataKeyCiphertext);
        return w;
      };
      GenerateDataKeyResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.GenerateDataKeyResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.dataKeyPlaintext = r.bytes();
              break;
            case 4:
              m.dataKeyCiphertext = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GenerateDataKeyResponse;
    })();
  })(root);
  (function($root) {
    $root.SymmetricReEncryptRequest = (function() {
      function SymmetricReEncryptRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SymmetricReEncryptRequest.prototype.keyId = '';
      SymmetricReEncryptRequest.prototype.versionId = '';
      SymmetricReEncryptRequest.prototype.aadContext = $util.newBuffer([]);
      SymmetricReEncryptRequest.prototype.sourceKeyId = '';
      SymmetricReEncryptRequest.prototype.sourceAadContext = $util.newBuffer([]);
      SymmetricReEncryptRequest.prototype.ciphertext = $util.newBuffer([]);
      SymmetricReEncryptRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.aadContext != null && m.hasOwnProperty('aadContext')) w.uint32(26).bytes(m.aadContext);
        if (m.sourceKeyId != null && m.hasOwnProperty('sourceKeyId')) w.uint32(34).string(m.sourceKeyId);
        if (m.sourceAadContext != null && m.hasOwnProperty('sourceAadContext')) w.uint32(42).bytes(m.sourceAadContext);
        if (m.ciphertext != null && m.hasOwnProperty('ciphertext')) w.uint32(50).bytes(m.ciphertext);
        return w;
      };
      SymmetricReEncryptRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SymmetricReEncryptRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.aadContext = r.bytes();
              break;
            case 4:
              m.sourceKeyId = r.string();
              break;
            case 5:
              m.sourceAadContext = r.bytes();
              break;
            case 6:
              m.ciphertext = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SymmetricReEncryptRequest;
    })();
  })(root);
  (function($root) {
    $root.SymmetricReEncryptResponse = (function() {
      function SymmetricReEncryptResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SymmetricReEncryptResponse.prototype.keyId = '';
      SymmetricReEncryptResponse.prototype.versionId = '';
      SymmetricReEncryptResponse.prototype.sourceKeyId = '';
      SymmetricReEncryptResponse.prototype.sourceVersionId = '';
      SymmetricReEncryptResponse.prototype.ciphertext = $util.newBuffer([]);
      SymmetricReEncryptResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.sourceKeyId != null && m.hasOwnProperty('sourceKeyId')) w.uint32(26).string(m.sourceKeyId);
        if (m.sourceVersionId != null && m.hasOwnProperty('sourceVersionId')) w.uint32(34).string(m.sourceVersionId);
        if (m.ciphertext != null && m.hasOwnProperty('ciphertext')) w.uint32(42).bytes(m.ciphertext);
        return w;
      };
      SymmetricReEncryptResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SymmetricReEncryptResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.sourceKeyId = r.string();
              break;
            case 4:
              m.sourceVersionId = r.string();
              break;
            case 5:
              m.ciphertext = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SymmetricReEncryptResponse;
    })();
  })(root);
  (function($root) {
    $root.SymmetricAlgorithm = (function() {
      let SymmetricAlgorithm = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'SYMMETRIC_ALGORITHM_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'AES_128')] = 1;
        values[(valuesById[2] = 'AES_192')] = 2;
        values[(valuesById[3] = 'AES_256')] = 3;
        return values;
      })();
      return SymmetricAlgorithm;
    })();
  })(root);
  (function($root) {
    $root.SymmetricKey = (function() {
      function SymmetricKey(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SymmetricKey.prototype.id = '';
      SymmetricKey.prototype.folderId = '';
      SymmetricKey.prototype.createdAt = null;
      SymmetricKey.prototype.name = '';
      SymmetricKey.prototype.description = '';
      SymmetricKey.prototype.labels = $util.emptyObject;
      SymmetricKey.prototype.status = 0;
      SymmetricKey.prototype.primaryVersion = null;
      SymmetricKey.prototype.defaultAlgorithm = 0;
      SymmetricKey.prototype.rotatedAt = null;
      SymmetricKey.prototype.rotationPeriod = null;
      SymmetricKey.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(18).string(m.folderId);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(34).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(42).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(50)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(56).int32(m.status);
        if (m.primaryVersion != null && m.hasOwnProperty('primaryVersion')) $root.api.kms.v1.SymmetricKeyVersion.encode(m.primaryVersion, w.uint32(66).fork()).ldelim();
        if (m.defaultAlgorithm != null && m.hasOwnProperty('defaultAlgorithm')) w.uint32(72).int32(m.defaultAlgorithm);
        if (m.rotatedAt != null && m.hasOwnProperty('rotatedAt')) $root.contrib.google.protobuf.Timestamp.encode(m.rotatedAt, w.uint32(82).fork()).ldelim();
        if (m.rotationPeriod != null && m.hasOwnProperty('rotationPeriod')) $root.contrib.google.protobuf.Duration.encode(m.rotationPeriod, w.uint32(90).fork()).ldelim();
        return w;
      };
      SymmetricKey.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SymmetricKey(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.folderId = r.string();
              break;
            case 3:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 4:
              m.name = r.string();
              break;
            case 5:
              m.description = r.string();
              break;
            case 6:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 7:
              m.status = r.int32();
              break;
            case 8:
              m.primaryVersion = $root.api.kms.v1.SymmetricKeyVersion.decode(r, r.uint32());
              break;
            case 9:
              m.defaultAlgorithm = r.int32();
              break;
            case 10:
              m.rotatedAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 11:
              m.rotationPeriod = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Status = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'STATUS_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'CREATING')] = 1;
        values[(valuesById[2] = 'ACTIVE')] = 2;
        values[(valuesById[3] = 'INACTIVE')] = 3;
        return values;
      })();
      SymmetricKey.Status = Status;
      return SymmetricKey;
    })();
  })(root);
  (function($root) {
    $root.SymmetricKeyVersion = (function() {
      function SymmetricKeyVersion(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SymmetricKeyVersion.prototype.id = '';
      SymmetricKeyVersion.prototype.keyId = '';
      SymmetricKeyVersion.prototype.status = 0;
      SymmetricKeyVersion.prototype.algorithm = 0;
      SymmetricKeyVersion.prototype.createdAt = null;
      SymmetricKeyVersion.prototype.primary = false;
      SymmetricKeyVersion.prototype.destroyAt = null;
      SymmetricKeyVersion.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(18).string(m.keyId);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(24).int32(m.status);
        if (m.algorithm != null && m.hasOwnProperty('algorithm')) w.uint32(32).int32(m.algorithm);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(42).fork()).ldelim();
        if (m.primary != null && m.hasOwnProperty('primary')) w.uint32(48).bool(m.primary);
        if (m.destroyAt != null && m.hasOwnProperty('destroyAt')) $root.contrib.google.protobuf.Timestamp.encode(m.destroyAt, w.uint32(58).fork()).ldelim();
        return w;
      };
      SymmetricKeyVersion.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SymmetricKeyVersion();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.keyId = r.string();
              break;
            case 3:
              m.status = r.int32();
              break;
            case 4:
              m.algorithm = r.int32();
              break;
            case 5:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 6:
              m.primary = r.bool();
              break;
            case 7:
              m.destroyAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Status = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'STATUS_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'ACTIVE')] = 1;
        values[(valuesById[2] = 'SCHEDULED_FOR_DESTRUCTION')] = 2;
        values[(valuesById[3] = 'DESTROYED')] = 3;
        return values;
      })();
      SymmetricKeyVersion.Status = Status;
      return SymmetricKeyVersion;
    })();
  })(root);
  (function($root) {
    $root.SymmetricKeyService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.SymmetricKeyService.makeGrpcConstructor());
    };
    $root.SymmetricKeyService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        create: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.CreateSymmetricKeyRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.kms.v1.CreateSymmetricKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.CreateSymmetricKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        get: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.GetSymmetricKeyRequest,
          responseType: $root.api.kms.v1.SymmetricKey,
          requestSerialize: r => {
            return $root.api.kms.v1.GetSymmetricKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.GetSymmetricKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.kms.v1.SymmetricKey.encode(r).finish();
          },
          responseDeserialize: $root.api.kms.v1.SymmetricKey.decode
        },
        list: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.ListSymmetricKeysRequest,
          responseType: $root.api.kms.v1.ListSymmetricKeysResponse,
          requestSerialize: r => {
            return $root.api.kms.v1.ListSymmetricKeysRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.ListSymmetricKeysRequest.decode,
          responseSerialize: r => {
            return $root.api.kms.v1.ListSymmetricKeysResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.kms.v1.ListSymmetricKeysResponse.decode
        },
        listVersions: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.ListSymmetricKeyVersionsRequest,
          responseType: $root.api.kms.v1.ListSymmetricKeyVersionsResponse,
          requestSerialize: r => {
            return $root.api.kms.v1.ListSymmetricKeyVersionsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.ListSymmetricKeyVersionsRequest.decode,
          responseSerialize: r => {
            return $root.api.kms.v1.ListSymmetricKeyVersionsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.kms.v1.ListSymmetricKeyVersionsResponse.decode
        },
        update: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.UpdateSymmetricKeyRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.kms.v1.UpdateSymmetricKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.UpdateSymmetricKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.DeleteSymmetricKeyRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.kms.v1.DeleteSymmetricKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.DeleteSymmetricKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        setPrimaryVersion: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.SetPrimarySymmetricKeyVersionRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.kms.v1.SetPrimarySymmetricKeyVersionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.SetPrimarySymmetricKeyVersionRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        scheduleVersionDestruction: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        cancelVersionDestruction: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.CancelSymmetricKeyVersionDestructionRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.kms.v1.CancelSymmetricKeyVersionDestructionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.CancelSymmetricKeyVersionDestructionRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        rotate: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/Rotate',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.RotateSymmetricKeyRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.kms.v1.RotateSymmetricKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.RotateSymmetricKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.kms.v1.ListSymmetricKeyOperationsRequest,
          responseType: $root.api.kms.v1.ListSymmetricKeyOperationsResponse,
          requestSerialize: r => {
            return $root.api.kms.v1.ListSymmetricKeyOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.kms.v1.ListSymmetricKeyOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.kms.v1.ListSymmetricKeyOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.kms.v1.ListSymmetricKeyOperationsResponse.decode
        },
        listAccessBindings: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.access.ListAccessBindingsRequest,
          responseType: $root.api.access.ListAccessBindingsResponse,
          requestSerialize: r => {
            return $root.api.access.ListAccessBindingsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.access.ListAccessBindingsRequest.decode,
          responseSerialize: r => {
            return $root.api.access.ListAccessBindingsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.access.ListAccessBindingsResponse.decode
        },
        setAccessBindings: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.access.SetAccessBindingsRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.access.SetAccessBindingsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.access.SetAccessBindingsRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        updateAccessBindings: {
          path: '/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.access.UpdateAccessBindingsRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.access.UpdateAccessBindingsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.access.UpdateAccessBindingsRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        }
      });
      ctor.__endpointId = 'kms';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.CreateSymmetricKeyRequest = (function() {
      function CreateSymmetricKeyRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateSymmetricKeyRequest.prototype.folderId = '';
      CreateSymmetricKeyRequest.prototype.name = '';
      CreateSymmetricKeyRequest.prototype.description = '';
      CreateSymmetricKeyRequest.prototype.labels = $util.emptyObject;
      CreateSymmetricKeyRequest.prototype.defaultAlgorithm = 0;
      CreateSymmetricKeyRequest.prototype.rotationPeriod = null;
      CreateSymmetricKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(18).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(34)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.defaultAlgorithm != null && m.hasOwnProperty('defaultAlgorithm')) w.uint32(40).int32(m.defaultAlgorithm);
        if (m.rotationPeriod != null && m.hasOwnProperty('rotationPeriod')) $root.contrib.google.protobuf.Duration.encode(m.rotationPeriod, w.uint32(50).fork()).ldelim();
        return w;
      };
      CreateSymmetricKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.CreateSymmetricKeyRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.name = r.string();
              break;
            case 3:
              m.description = r.string();
              break;
            case 4:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 5:
              m.defaultAlgorithm = r.int32();
              break;
            case 6:
              m.rotationPeriod = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateSymmetricKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateSymmetricKeyMetadata = (function() {
      function CreateSymmetricKeyMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateSymmetricKeyMetadata.prototype.keyId = '';
      CreateSymmetricKeyMetadata.prototype.primaryVersionId = '';
      CreateSymmetricKeyMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.primaryVersionId != null && m.hasOwnProperty('primaryVersionId')) w.uint32(18).string(m.primaryVersionId);
        return w;
      };
      CreateSymmetricKeyMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.CreateSymmetricKeyMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.primaryVersionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateSymmetricKeyMetadata;
    })();
  })(root);
  (function($root) {
    $root.GetSymmetricKeyRequest = (function() {
      function GetSymmetricKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetSymmetricKeyRequest.prototype.keyId = '';
      GetSymmetricKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        return w;
      };
      GetSymmetricKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.GetSymmetricKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetSymmetricKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSymmetricKeysRequest = (function() {
      function ListSymmetricKeysRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSymmetricKeysRequest.prototype.folderId = '';
      ListSymmetricKeysRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSymmetricKeysRequest.prototype.pageToken = '';
      ListSymmetricKeysRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListSymmetricKeysRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.ListSymmetricKeysRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.pageSize = r.int64();
              break;
            case 3:
              m.pageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListSymmetricKeysRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSymmetricKeysResponse = (function() {
      function ListSymmetricKeysResponse(p) {
        this.keys = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSymmetricKeysResponse.prototype.keys = $util.emptyArray;
      ListSymmetricKeysResponse.prototype.nextPageToken = '';
      ListSymmetricKeysResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keys != null && m.keys.length) {
          for (let i = 0; i < m.keys.length; ++i) $root.api.kms.v1.SymmetricKey.encode(m.keys[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSymmetricKeysResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.ListSymmetricKeysResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.keys && m.keys.length)) m.keys = [];
              m.keys.push($root.api.kms.v1.SymmetricKey.decode(r, r.uint32()));
              break;
            case 2:
              m.nextPageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListSymmetricKeysResponse;
    })();
  })(root);
  (function($root) {
    $root.ListSymmetricKeyVersionsRequest = (function() {
      function ListSymmetricKeyVersionsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSymmetricKeyVersionsRequest.prototype.keyId = '';
      ListSymmetricKeyVersionsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSymmetricKeyVersionsRequest.prototype.pageToken = '';
      ListSymmetricKeyVersionsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListSymmetricKeyVersionsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.ListSymmetricKeyVersionsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.pageSize = r.int64();
              break;
            case 3:
              m.pageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListSymmetricKeyVersionsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSymmetricKeyVersionsResponse = (function() {
      function ListSymmetricKeyVersionsResponse(p) {
        this.keyVersions = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSymmetricKeyVersionsResponse.prototype.keyVersions = $util.emptyArray;
      ListSymmetricKeyVersionsResponse.prototype.nextPageToken = '';
      ListSymmetricKeyVersionsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyVersions != null && m.keyVersions.length) {
          for (let i = 0; i < m.keyVersions.length; ++i) $root.api.kms.v1.SymmetricKeyVersion.encode(m.keyVersions[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSymmetricKeyVersionsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.ListSymmetricKeyVersionsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.keyVersions && m.keyVersions.length)) m.keyVersions = [];
              m.keyVersions.push($root.api.kms.v1.SymmetricKeyVersion.decode(r, r.uint32()));
              break;
            case 2:
              m.nextPageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListSymmetricKeyVersionsResponse;
    })();
  })(root);
  (function($root) {
    $root.UpdateSymmetricKeyRequest = (function() {
      function UpdateSymmetricKeyRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSymmetricKeyRequest.prototype.keyId = '';
      UpdateSymmetricKeyRequest.prototype.updateMask = null;
      UpdateSymmetricKeyRequest.prototype.name = '';
      UpdateSymmetricKeyRequest.prototype.description = '';
      UpdateSymmetricKeyRequest.prototype.status = 0;
      UpdateSymmetricKeyRequest.prototype.labels = $util.emptyObject;
      UpdateSymmetricKeyRequest.prototype.defaultAlgorithm = 0;
      UpdateSymmetricKeyRequest.prototype.rotationPeriod = null;
      UpdateSymmetricKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(40).int32(m.status);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(50)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.defaultAlgorithm != null && m.hasOwnProperty('defaultAlgorithm')) w.uint32(56).int32(m.defaultAlgorithm);
        if (m.rotationPeriod != null && m.hasOwnProperty('rotationPeriod')) $root.contrib.google.protobuf.Duration.encode(m.rotationPeriod, w.uint32(66).fork()).ldelim();
        return w;
      };
      UpdateSymmetricKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.UpdateSymmetricKeyRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.updateMask = $root.contrib.google.protobuf.FieldMask.decode(r, r.uint32());
              break;
            case 3:
              m.name = r.string();
              break;
            case 4:
              m.description = r.string();
              break;
            case 5:
              m.status = r.int32();
              break;
            case 6:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 7:
              m.defaultAlgorithm = r.int32();
              break;
            case 8:
              m.rotationPeriod = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSymmetricKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateSymmetricKeyMetadata = (function() {
      function UpdateSymmetricKeyMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSymmetricKeyMetadata.prototype.keyId = '';
      UpdateSymmetricKeyMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        return w;
      };
      UpdateSymmetricKeyMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.UpdateSymmetricKeyMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSymmetricKeyMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteSymmetricKeyRequest = (function() {
      function DeleteSymmetricKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteSymmetricKeyRequest.prototype.keyId = '';
      DeleteSymmetricKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        return w;
      };
      DeleteSymmetricKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.DeleteSymmetricKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteSymmetricKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteSymmetricKeyMetadata = (function() {
      function DeleteSymmetricKeyMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteSymmetricKeyMetadata.prototype.keyId = '';
      DeleteSymmetricKeyMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        return w;
      };
      DeleteSymmetricKeyMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.DeleteSymmetricKeyMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteSymmetricKeyMetadata;
    })();
  })(root);
  (function($root) {
    $root.SetPrimarySymmetricKeyVersionRequest = (function() {
      function SetPrimarySymmetricKeyVersionRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SetPrimarySymmetricKeyVersionRequest.prototype.keyId = '';
      SetPrimarySymmetricKeyVersionRequest.prototype.versionId = '';
      SetPrimarySymmetricKeyVersionRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        return w;
      };
      SetPrimarySymmetricKeyVersionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SetPrimarySymmetricKeyVersionRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SetPrimarySymmetricKeyVersionRequest;
    })();
  })(root);
  (function($root) {
    $root.SetPrimarySymmetricKeyVersionMetadata = (function() {
      function SetPrimarySymmetricKeyVersionMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SetPrimarySymmetricKeyVersionMetadata.prototype.keyId = '';
      SetPrimarySymmetricKeyVersionMetadata.prototype.versionId = '';
      SetPrimarySymmetricKeyVersionMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        return w;
      };
      SetPrimarySymmetricKeyVersionMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.SetPrimarySymmetricKeyVersionMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SetPrimarySymmetricKeyVersionMetadata;
    })();
  })(root);
  (function($root) {
    $root.RotateSymmetricKeyRequest = (function() {
      function RotateSymmetricKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RotateSymmetricKeyRequest.prototype.keyId = '';
      RotateSymmetricKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        return w;
      };
      RotateSymmetricKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.RotateSymmetricKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RotateSymmetricKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.RotateSymmetricKeyMetadata = (function() {
      function RotateSymmetricKeyMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RotateSymmetricKeyMetadata.prototype.keyId = '';
      RotateSymmetricKeyMetadata.prototype.newPrimaryVersionId = '';
      RotateSymmetricKeyMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.newPrimaryVersionId != null && m.hasOwnProperty('newPrimaryVersionId')) w.uint32(18).string(m.newPrimaryVersionId);
        return w;
      };
      RotateSymmetricKeyMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.RotateSymmetricKeyMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.newPrimaryVersionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RotateSymmetricKeyMetadata;
    })();
  })(root);
  (function($root) {
    $root.ScheduleSymmetricKeyVersionDestructionRequest = (function() {
      function ScheduleSymmetricKeyVersionDestructionRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ScheduleSymmetricKeyVersionDestructionRequest.prototype.keyId = '';
      ScheduleSymmetricKeyVersionDestructionRequest.prototype.versionId = '';
      ScheduleSymmetricKeyVersionDestructionRequest.prototype.pendingPeriod = null;
      ScheduleSymmetricKeyVersionDestructionRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.pendingPeriod != null && m.hasOwnProperty('pendingPeriod')) $root.contrib.google.protobuf.Duration.encode(m.pendingPeriod, w.uint32(26).fork()).ldelim();
        return w;
      };
      ScheduleSymmetricKeyVersionDestructionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.pendingPeriod = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ScheduleSymmetricKeyVersionDestructionRequest;
    })();
  })(root);
  (function($root) {
    $root.ScheduleSymmetricKeyVersionDestructionMetadata = (function() {
      function ScheduleSymmetricKeyVersionDestructionMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ScheduleSymmetricKeyVersionDestructionMetadata.prototype.keyId = '';
      ScheduleSymmetricKeyVersionDestructionMetadata.prototype.versionId = '';
      ScheduleSymmetricKeyVersionDestructionMetadata.prototype.destroyAt = null;
      ScheduleSymmetricKeyVersionDestructionMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        if (m.destroyAt != null && m.hasOwnProperty('destroyAt')) $root.contrib.google.protobuf.Timestamp.encode(m.destroyAt, w.uint32(26).fork()).ldelim();
        return w;
      };
      ScheduleSymmetricKeyVersionDestructionMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            case 3:
              m.destroyAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ScheduleSymmetricKeyVersionDestructionMetadata;
    })();
  })(root);
  (function($root) {
    $root.CancelSymmetricKeyVersionDestructionRequest = (function() {
      function CancelSymmetricKeyVersionDestructionRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CancelSymmetricKeyVersionDestructionRequest.prototype.keyId = '';
      CancelSymmetricKeyVersionDestructionRequest.prototype.versionId = '';
      CancelSymmetricKeyVersionDestructionRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        return w;
      };
      CancelSymmetricKeyVersionDestructionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.CancelSymmetricKeyVersionDestructionRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CancelSymmetricKeyVersionDestructionRequest;
    })();
  })(root);
  (function($root) {
    $root.CancelSymmetricKeyVersionDestructionMetadata = (function() {
      function CancelSymmetricKeyVersionDestructionMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CancelSymmetricKeyVersionDestructionMetadata.prototype.keyId = '';
      CancelSymmetricKeyVersionDestructionMetadata.prototype.versionId = '';
      CancelSymmetricKeyVersionDestructionMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.versionId != null && m.hasOwnProperty('versionId')) w.uint32(18).string(m.versionId);
        return w;
      };
      CancelSymmetricKeyVersionDestructionMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.CancelSymmetricKeyVersionDestructionMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.versionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CancelSymmetricKeyVersionDestructionMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListSymmetricKeyOperationsRequest = (function() {
      function ListSymmetricKeyOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSymmetricKeyOperationsRequest.prototype.keyId = '';
      ListSymmetricKeyOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSymmetricKeyOperationsRequest.prototype.pageToken = '';
      ListSymmetricKeyOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListSymmetricKeyOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.ListSymmetricKeyOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.pageSize = r.int64();
              break;
            case 3:
              m.pageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListSymmetricKeyOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSymmetricKeyOperationsResponse = (function() {
      function ListSymmetricKeyOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSymmetricKeyOperationsResponse.prototype.operations = $util.emptyArray;
      ListSymmetricKeyOperationsResponse.prototype.nextPageToken = '';
      ListSymmetricKeyOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSymmetricKeyOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.kms.v1.ListSymmetricKeyOperationsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.operations && m.operations.length)) m.operations = [];
              m.operations.push($root.api.operation.Operation.decode(r, r.uint32()));
              break;
            case 2:
              m.nextPageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListSymmetricKeyOperationsResponse;
    })();
  })(root);
  registar.register('api.kms.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
