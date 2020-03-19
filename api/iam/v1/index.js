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
    $root.ApiKey = (function() {
      function ApiKey(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ApiKey.prototype.id = '';
      ApiKey.prototype.serviceAccountId = '';
      ApiKey.prototype.createdAt = null;
      ApiKey.prototype.description = '';
      ApiKey.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(18).string(m.serviceAccountId);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        return w;
      };
      ApiKey.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ApiKey();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.serviceAccountId = r.string();
              break;
            case 3:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 4:
              m.description = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ApiKey;
    })();
  })(root);
  (function($root) {
    $root.ApiKeyService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.ApiKeyService.makeGrpcConstructor());
    };
    $root.ApiKeyService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        list: {
          path: '/yandex.cloud.iam.v1.ApiKeyService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.ListApiKeysRequest,
          responseType: $root.api.iam.v1.ListApiKeysResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.ListApiKeysRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.ListApiKeysRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ListApiKeysResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ListApiKeysResponse.decode
        },
        get: {
          path: '/yandex.cloud.iam.v1.ApiKeyService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.GetApiKeyRequest,
          responseType: $root.api.iam.v1.ApiKey,
          requestSerialize: r => {
            return $root.api.iam.v1.GetApiKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.GetApiKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ApiKey.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ApiKey.decode
        },
        create: {
          path: '/yandex.cloud.iam.v1.ApiKeyService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.CreateApiKeyRequest,
          responseType: $root.api.iam.v1.CreateApiKeyResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.CreateApiKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.CreateApiKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.CreateApiKeyResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.CreateApiKeyResponse.decode
        },
        update: {
          path: '/yandex.cloud.iam.v1.ApiKeyService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.UpdateApiKeyRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iam.v1.UpdateApiKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.UpdateApiKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.iam.v1.ApiKeyService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.DeleteApiKeyRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iam.v1.DeleteApiKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.DeleteApiKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.iam.v1.ApiKeyService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.ListApiKeyOperationsRequest,
          responseType: $root.api.iam.v1.ListApiKeyOperationsResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.ListApiKeyOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.ListApiKeyOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ListApiKeyOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ListApiKeyOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'iam';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetApiKeyRequest = (function() {
      function GetApiKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetApiKeyRequest.prototype.apiKeyId = '';
      GetApiKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiKeyId != null && m.hasOwnProperty('apiKeyId')) w.uint32(10).string(m.apiKeyId);
        return w;
      };
      GetApiKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.GetApiKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.apiKeyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetApiKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.ListApiKeysRequest = (function() {
      function ListApiKeysRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListApiKeysRequest.prototype.serviceAccountId = '';
      ListApiKeysRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListApiKeysRequest.prototype.pageToken = '';
      ListApiKeysRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListApiKeysRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListApiKeysRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
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
      return ListApiKeysRequest;
    })();
  })(root);
  (function($root) {
    $root.ListApiKeysResponse = (function() {
      function ListApiKeysResponse(p) {
        this.apiKeys = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListApiKeysResponse.prototype.apiKeys = $util.emptyArray;
      ListApiKeysResponse.prototype.nextPageToken = '';
      ListApiKeysResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiKeys != null && m.apiKeys.length) {
          for (let i = 0; i < m.apiKeys.length; ++i) $root.api.iam.v1.ApiKey.encode(m.apiKeys[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListApiKeysResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListApiKeysResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.apiKeys && m.apiKeys.length)) m.apiKeys = [];
              m.apiKeys.push($root.api.iam.v1.ApiKey.decode(r, r.uint32()));
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
      return ListApiKeysResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateApiKeyRequest = (function() {
      function CreateApiKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateApiKeyRequest.prototype.serviceAccountId = '';
      CreateApiKeyRequest.prototype.description = '';
      CreateApiKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
        return w;
      };
      CreateApiKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.CreateApiKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
              break;
            case 2:
              m.description = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateApiKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateApiKeyResponse = (function() {
      function CreateApiKeyResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateApiKeyResponse.prototype.apiKey = null;
      CreateApiKeyResponse.prototype.secret = '';
      CreateApiKeyResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiKey != null && m.hasOwnProperty('apiKey')) $root.api.iam.v1.ApiKey.encode(m.apiKey, w.uint32(10).fork()).ldelim();
        if (m.secret != null && m.hasOwnProperty('secret')) w.uint32(18).string(m.secret);
        return w;
      };
      CreateApiKeyResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.CreateApiKeyResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.apiKey = $root.api.iam.v1.ApiKey.decode(r, r.uint32());
              break;
            case 2:
              m.secret = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateApiKeyResponse;
    })();
  })(root);
  (function($root) {
    $root.UpdateApiKeyRequest = (function() {
      function UpdateApiKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateApiKeyRequest.prototype.apiKeyId = '';
      UpdateApiKeyRequest.prototype.updateMask = null;
      UpdateApiKeyRequest.prototype.description = '';
      UpdateApiKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiKeyId != null && m.hasOwnProperty('apiKeyId')) w.uint32(10).string(m.apiKeyId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        return w;
      };
      UpdateApiKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.UpdateApiKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.apiKeyId = r.string();
              break;
            case 2:
              m.updateMask = $root.contrib.google.protobuf.FieldMask.decode(r, r.uint32());
              break;
            case 3:
              m.description = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateApiKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateApiKeyMetadata = (function() {
      function UpdateApiKeyMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateApiKeyMetadata.prototype.apiKeyId = '';
      UpdateApiKeyMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiKeyId != null && m.hasOwnProperty('apiKeyId')) w.uint32(10).string(m.apiKeyId);
        return w;
      };
      UpdateApiKeyMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.UpdateApiKeyMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.apiKeyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateApiKeyMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteApiKeyRequest = (function() {
      function DeleteApiKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteApiKeyRequest.prototype.apiKeyId = '';
      DeleteApiKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiKeyId != null && m.hasOwnProperty('apiKeyId')) w.uint32(10).string(m.apiKeyId);
        return w;
      };
      DeleteApiKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.DeleteApiKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.apiKeyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteApiKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteApiKeyMetadata = (function() {
      function DeleteApiKeyMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteApiKeyMetadata.prototype.apiKeyId = '';
      DeleteApiKeyMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiKeyId != null && m.hasOwnProperty('apiKeyId')) w.uint32(10).string(m.apiKeyId);
        return w;
      };
      DeleteApiKeyMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.DeleteApiKeyMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.apiKeyId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteApiKeyMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListApiKeyOperationsRequest = (function() {
      function ListApiKeyOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListApiKeyOperationsRequest.prototype.apiKeyId = '';
      ListApiKeyOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListApiKeyOperationsRequest.prototype.pageToken = '';
      ListApiKeyOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiKeyId != null && m.hasOwnProperty('apiKeyId')) w.uint32(10).string(m.apiKeyId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListApiKeyOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListApiKeyOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.apiKeyId = r.string();
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
      return ListApiKeyOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListApiKeyOperationsResponse = (function() {
      function ListApiKeyOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListApiKeyOperationsResponse.prototype.operations = $util.emptyArray;
      ListApiKeyOperationsResponse.prototype.nextPageToken = '';
      ListApiKeyOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListApiKeyOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListApiKeyOperationsResponse();
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
      return ListApiKeyOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.IamTokenService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.IamTokenService.makeGrpcConstructor());
    };
    $root.IamTokenService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        create: {
          path: '/yandex.cloud.iam.v1.IamTokenService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.CreateIamTokenRequest,
          responseType: $root.api.iam.v1.CreateIamTokenResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.CreateIamTokenRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.CreateIamTokenRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.CreateIamTokenResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.CreateIamTokenResponse.decode
        }
      });
      ctor.__endpointId = 'iam';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.CreateIamTokenRequest = (function() {
      function CreateIamTokenRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateIamTokenRequest.prototype.yandexPassportOauthToken = '';
      CreateIamTokenRequest.prototype.jwt = '';
      let $oneOfFields;
      Object.defineProperty(CreateIamTokenRequest.prototype, 'identity', {
        get: $util.oneOfGetter(($oneOfFields = ['yandexPassportOauthToken', 'jwt'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      CreateIamTokenRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.yandexPassportOauthToken != null && m.hasOwnProperty('yandexPassportOauthToken')) w.uint32(10).string(m.yandexPassportOauthToken);
        if (m.jwt != null && m.hasOwnProperty('jwt')) w.uint32(18).string(m.jwt);
        return w;
      };
      CreateIamTokenRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.CreateIamTokenRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.yandexPassportOauthToken = r.string();
              break;
            case 2:
              m.jwt = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateIamTokenRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateIamTokenResponse = (function() {
      function CreateIamTokenResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateIamTokenResponse.prototype.iamToken = '';
      CreateIamTokenResponse.prototype.expiresAt = null;
      CreateIamTokenResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.iamToken != null && m.hasOwnProperty('iamToken')) w.uint32(10).string(m.iamToken);
        if (m.expiresAt != null && m.hasOwnProperty('expiresAt')) $root.contrib.google.protobuf.Timestamp.encode(m.expiresAt, w.uint32(18).fork()).ldelim();
        return w;
      };
      CreateIamTokenResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.CreateIamTokenResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.iamToken = r.string();
              break;
            case 2:
              m.expiresAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateIamTokenResponse;
    })();
  })(root);
  (function($root) {
    $root.Key = (function() {
      function Key(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Key.prototype.id = '';
      Key.prototype.userAccountId = '';
      Key.prototype.serviceAccountId = '';
      Key.prototype.createdAt = null;
      Key.prototype.description = '';
      Key.prototype.keyAlgorithm = 0;
      Key.prototype.publicKey = '';
      let $oneOfFields;
      Object.defineProperty(Key.prototype, 'subject', {
        get: $util.oneOfGetter(($oneOfFields = ['userAccountId', 'serviceAccountId'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Key.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.userAccountId != null && m.hasOwnProperty('userAccountId')) w.uint32(18).string(m.userAccountId);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(26).string(m.serviceAccountId);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(34).fork()).ldelim();
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(42).string(m.description);
        if (m.keyAlgorithm != null && m.hasOwnProperty('keyAlgorithm')) w.uint32(48).int32(m.keyAlgorithm);
        if (m.publicKey != null && m.hasOwnProperty('publicKey')) w.uint32(58).string(m.publicKey);
        return w;
      };
      Key.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.Key();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.userAccountId = r.string();
              break;
            case 3:
              m.serviceAccountId = r.string();
              break;
            case 4:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 5:
              m.description = r.string();
              break;
            case 6:
              m.keyAlgorithm = r.int32();
              break;
            case 7:
              m.publicKey = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Algorithm = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'ALGORITHM_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'RSA_2048')] = 1;
        values[(valuesById[2] = 'RSA_4096')] = 2;
        return values;
      })();
      Key.Algorithm = Algorithm;
      return Key;
    })();
  })(root);
  (function($root) {
    $root.KeyService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.KeyService.makeGrpcConstructor());
    };
    $root.KeyService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.iam.v1.KeyService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.GetKeyRequest,
          responseType: $root.api.iam.v1.Key,
          requestSerialize: r => {
            return $root.api.iam.v1.GetKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.GetKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.Key.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.Key.decode
        },
        list: {
          path: '/yandex.cloud.iam.v1.KeyService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.ListKeysRequest,
          responseType: $root.api.iam.v1.ListKeysResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.ListKeysRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.ListKeysRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ListKeysResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ListKeysResponse.decode
        },
        create: {
          path: '/yandex.cloud.iam.v1.KeyService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.CreateKeyRequest,
          responseType: $root.api.iam.v1.CreateKeyResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.CreateKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.CreateKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.CreateKeyResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.CreateKeyResponse.decode
        },
        update: {
          path: '/yandex.cloud.iam.v1.KeyService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.UpdateKeyRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iam.v1.UpdateKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.UpdateKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.iam.v1.KeyService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.DeleteKeyRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iam.v1.DeleteKeyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.DeleteKeyRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.iam.v1.KeyService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.ListKeyOperationsRequest,
          responseType: $root.api.iam.v1.ListKeyOperationsResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.ListKeyOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.ListKeyOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ListKeyOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ListKeyOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'iam';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetKeyRequest = (function() {
      function GetKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetKeyRequest.prototype.keyId = '';
      GetKeyRequest.prototype.format = 0;
      GetKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.format != null && m.hasOwnProperty('format')) w.uint32(16).int32(m.format);
        return w;
      };
      GetKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.GetKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.keyId = r.string();
              break;
            case 2:
              m.format = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.ListKeysRequest = (function() {
      function ListKeysRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListKeysRequest.prototype.format = 0;
      ListKeysRequest.prototype.serviceAccountId = '';
      ListKeysRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListKeysRequest.prototype.pageToken = '';
      ListKeysRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.format != null && m.hasOwnProperty('format')) w.uint32(8).int32(m.format);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(18).string(m.serviceAccountId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(24).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(34).string(m.pageToken);
        return w;
      };
      ListKeysRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListKeysRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.format = r.int32();
              break;
            case 2:
              m.serviceAccountId = r.string();
              break;
            case 3:
              m.pageSize = r.int64();
              break;
            case 4:
              m.pageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListKeysRequest;
    })();
  })(root);
  (function($root) {
    $root.ListKeysResponse = (function() {
      function ListKeysResponse(p) {
        this.keys = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListKeysResponse.prototype.keys = $util.emptyArray;
      ListKeysResponse.prototype.nextPageToken = '';
      ListKeysResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keys != null && m.keys.length) {
          for (let i = 0; i < m.keys.length; ++i) $root.api.iam.v1.Key.encode(m.keys[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListKeysResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListKeysResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.keys && m.keys.length)) m.keys = [];
              m.keys.push($root.api.iam.v1.Key.decode(r, r.uint32()));
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
      return ListKeysResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateKeyRequest = (function() {
      function CreateKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateKeyRequest.prototype.serviceAccountId = '';
      CreateKeyRequest.prototype.description = '';
      CreateKeyRequest.prototype.format = 0;
      CreateKeyRequest.prototype.keyAlgorithm = 0;
      CreateKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
        if (m.format != null && m.hasOwnProperty('format')) w.uint32(24).int32(m.format);
        if (m.keyAlgorithm != null && m.hasOwnProperty('keyAlgorithm')) w.uint32(32).int32(m.keyAlgorithm);
        return w;
      };
      CreateKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.CreateKeyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
              break;
            case 2:
              m.description = r.string();
              break;
            case 3:
              m.format = r.int32();
              break;
            case 4:
              m.keyAlgorithm = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateKeyResponse = (function() {
      function CreateKeyResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateKeyResponse.prototype.key = null;
      CreateKeyResponse.prototype.privateKey = '';
      CreateKeyResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.key != null && m.hasOwnProperty('key')) $root.api.iam.v1.Key.encode(m.key, w.uint32(10).fork()).ldelim();
        if (m.privateKey != null && m.hasOwnProperty('privateKey')) w.uint32(18).string(m.privateKey);
        return w;
      };
      CreateKeyResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.CreateKeyResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.key = $root.api.iam.v1.Key.decode(r, r.uint32());
              break;
            case 2:
              m.privateKey = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateKeyResponse;
    })();
  })(root);
  (function($root) {
    $root.UpdateKeyRequest = (function() {
      function UpdateKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateKeyRequest.prototype.keyId = '';
      UpdateKeyRequest.prototype.updateMask = null;
      UpdateKeyRequest.prototype.description = '';
      UpdateKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        return w;
      };
      UpdateKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.UpdateKeyRequest();
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
              m.description = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateKeyMetadata = (function() {
      function UpdateKeyMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateKeyMetadata.prototype.keyId = '';
      UpdateKeyMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        return w;
      };
      UpdateKeyMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.UpdateKeyMetadata();
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
      return UpdateKeyMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteKeyRequest = (function() {
      function DeleteKeyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteKeyRequest.prototype.keyId = '';
      DeleteKeyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        return w;
      };
      DeleteKeyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.DeleteKeyRequest();
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
      return DeleteKeyRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteKeyMetadata = (function() {
      function DeleteKeyMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteKeyMetadata.prototype.keyId = '';
      DeleteKeyMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        return w;
      };
      DeleteKeyMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.DeleteKeyMetadata();
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
      return DeleteKeyMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListKeyOperationsRequest = (function() {
      function ListKeyOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListKeyOperationsRequest.prototype.keyId = '';
      ListKeyOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListKeyOperationsRequest.prototype.pageToken = '';
      ListKeyOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.keyId != null && m.hasOwnProperty('keyId')) w.uint32(10).string(m.keyId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListKeyOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListKeyOperationsRequest();
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
      return ListKeyOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListKeyOperationsResponse = (function() {
      function ListKeyOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListKeyOperationsResponse.prototype.operations = $util.emptyArray;
      ListKeyOperationsResponse.prototype.nextPageToken = '';
      ListKeyOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListKeyOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListKeyOperationsResponse();
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
      return ListKeyOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.KeyFormat = (function() {
      let KeyFormat = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'PEM_FILE')] = 0;
        return values;
      })();
      return KeyFormat;
    })();
  })(root);
  (function($root) {
    $root.Role = (function() {
      function Role(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Role.prototype.id = '';
      Role.prototype.description = '';
      Role.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
        return w;
      };
      Role.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.Role();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.description = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Role;
    })();
  })(root);
  (function($root) {
    $root.RoleService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.RoleService.makeGrpcConstructor());
    };
    $root.RoleService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.iam.v1.RoleService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.GetRoleRequest,
          responseType: $root.api.iam.v1.Role,
          requestSerialize: r => {
            return $root.api.iam.v1.GetRoleRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.GetRoleRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.Role.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.Role.decode
        },
        list: {
          path: '/yandex.cloud.iam.v1.RoleService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.ListRolesRequest,
          responseType: $root.api.iam.v1.ListRolesResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.ListRolesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.ListRolesRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ListRolesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ListRolesResponse.decode
        }
      });
      ctor.__endpointId = 'iam';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetRoleRequest = (function() {
      function GetRoleRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetRoleRequest.prototype.roleId = '';
      GetRoleRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.roleId != null && m.hasOwnProperty('roleId')) w.uint32(10).string(m.roleId);
        return w;
      };
      GetRoleRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.GetRoleRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.roleId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetRoleRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRolesRequest = (function() {
      function ListRolesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRolesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListRolesRequest.prototype.pageToken = '';
      ListRolesRequest.prototype.filter = '';
      ListRolesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(8).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(18).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(26).string(m.filter);
        return w;
      };
      ListRolesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListRolesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.pageSize = r.int64();
              break;
            case 2:
              m.pageToken = r.string();
              break;
            case 3:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListRolesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRolesResponse = (function() {
      function ListRolesResponse(p) {
        this.roles = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRolesResponse.prototype.roles = $util.emptyArray;
      ListRolesResponse.prototype.nextPageToken = '';
      ListRolesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.roles != null && m.roles.length) {
          for (let i = 0; i < m.roles.length; ++i) $root.api.iam.v1.Role.encode(m.roles[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListRolesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListRolesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.roles && m.roles.length)) m.roles = [];
              m.roles.push($root.api.iam.v1.Role.decode(r, r.uint32()));
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
      return ListRolesResponse;
    })();
  })(root);
  (function($root) {
    $root.ServiceAccount = (function() {
      function ServiceAccount(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ServiceAccount.prototype.id = '';
      ServiceAccount.prototype.folderId = '';
      ServiceAccount.prototype.createdAt = null;
      ServiceAccount.prototype.name = '';
      ServiceAccount.prototype.description = '';
      ServiceAccount.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(18).string(m.folderId);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(34).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(42).string(m.description);
        return w;
      };
      ServiceAccount.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ServiceAccount();
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
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ServiceAccount;
    })();
  })(root);
  (function($root) {
    $root.ServiceAccountService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.ServiceAccountService.makeGrpcConstructor());
    };
    $root.ServiceAccountService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.iam.v1.ServiceAccountService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.GetServiceAccountRequest,
          responseType: $root.api.iam.v1.ServiceAccount,
          requestSerialize: r => {
            return $root.api.iam.v1.GetServiceAccountRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.GetServiceAccountRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ServiceAccount.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ServiceAccount.decode
        },
        list: {
          path: '/yandex.cloud.iam.v1.ServiceAccountService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.ListServiceAccountsRequest,
          responseType: $root.api.iam.v1.ListServiceAccountsResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.ListServiceAccountsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.ListServiceAccountsRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ListServiceAccountsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ListServiceAccountsResponse.decode
        },
        create: {
          path: '/yandex.cloud.iam.v1.ServiceAccountService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.CreateServiceAccountRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iam.v1.CreateServiceAccountRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.CreateServiceAccountRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.iam.v1.ServiceAccountService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.UpdateServiceAccountRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iam.v1.UpdateServiceAccountRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.UpdateServiceAccountRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.iam.v1.ServiceAccountService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.DeleteServiceAccountRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iam.v1.DeleteServiceAccountRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.DeleteServiceAccountRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listAccessBindings: {
          path: '/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings',
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
          path: '/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings',
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
          path: '/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings',
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
        },
        listOperations: {
          path: '/yandex.cloud.iam.v1.ServiceAccountService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.ListServiceAccountOperationsRequest,
          responseType: $root.api.iam.v1.ListServiceAccountOperationsResponse,
          requestSerialize: r => {
            return $root.api.iam.v1.ListServiceAccountOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.ListServiceAccountOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.ListServiceAccountOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.ListServiceAccountOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'iam';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetServiceAccountRequest = (function() {
      function GetServiceAccountRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetServiceAccountRequest.prototype.serviceAccountId = '';
      GetServiceAccountRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        return w;
      };
      GetServiceAccountRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.GetServiceAccountRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetServiceAccountRequest;
    })();
  })(root);
  (function($root) {
    $root.ListServiceAccountsRequest = (function() {
      function ListServiceAccountsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListServiceAccountsRequest.prototype.folderId = '';
      ListServiceAccountsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListServiceAccountsRequest.prototype.pageToken = '';
      ListServiceAccountsRequest.prototype.filter = '';
      ListServiceAccountsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListServiceAccountsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListServiceAccountsRequest();
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
            case 4:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListServiceAccountsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListServiceAccountsResponse = (function() {
      function ListServiceAccountsResponse(p) {
        this.serviceAccounts = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListServiceAccountsResponse.prototype.serviceAccounts = $util.emptyArray;
      ListServiceAccountsResponse.prototype.nextPageToken = '';
      ListServiceAccountsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccounts != null && m.serviceAccounts.length) {
          for (let i = 0; i < m.serviceAccounts.length; ++i) $root.api.iam.v1.ServiceAccount.encode(m.serviceAccounts[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListServiceAccountsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListServiceAccountsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.serviceAccounts && m.serviceAccounts.length)) m.serviceAccounts = [];
              m.serviceAccounts.push($root.api.iam.v1.ServiceAccount.decode(r, r.uint32()));
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
      return ListServiceAccountsResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateServiceAccountRequest = (function() {
      function CreateServiceAccountRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateServiceAccountRequest.prototype.folderId = '';
      CreateServiceAccountRequest.prototype.name = '';
      CreateServiceAccountRequest.prototype.description = '';
      CreateServiceAccountRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(18).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        return w;
      };
      CreateServiceAccountRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.CreateServiceAccountRequest();
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
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateServiceAccountRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateServiceAccountMetadata = (function() {
      function CreateServiceAccountMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateServiceAccountMetadata.prototype.serviceAccountId = '';
      CreateServiceAccountMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        return w;
      };
      CreateServiceAccountMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.CreateServiceAccountMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateServiceAccountMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateServiceAccountRequest = (function() {
      function UpdateServiceAccountRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateServiceAccountRequest.prototype.serviceAccountId = '';
      UpdateServiceAccountRequest.prototype.updateMask = null;
      UpdateServiceAccountRequest.prototype.name = '';
      UpdateServiceAccountRequest.prototype.description = '';
      UpdateServiceAccountRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        return w;
      };
      UpdateServiceAccountRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.UpdateServiceAccountRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
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
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateServiceAccountRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateServiceAccountMetadata = (function() {
      function UpdateServiceAccountMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateServiceAccountMetadata.prototype.serviceAccountId = '';
      UpdateServiceAccountMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        return w;
      };
      UpdateServiceAccountMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.UpdateServiceAccountMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateServiceAccountMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteServiceAccountRequest = (function() {
      function DeleteServiceAccountRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteServiceAccountRequest.prototype.serviceAccountId = '';
      DeleteServiceAccountRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        return w;
      };
      DeleteServiceAccountRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.DeleteServiceAccountRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteServiceAccountRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteServiceAccountMetadata = (function() {
      function DeleteServiceAccountMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteServiceAccountMetadata.prototype.serviceAccountId = '';
      DeleteServiceAccountMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        return w;
      };
      DeleteServiceAccountMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.DeleteServiceAccountMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteServiceAccountMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListServiceAccountOperationsRequest = (function() {
      function ListServiceAccountOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListServiceAccountOperationsRequest.prototype.serviceAccountId = '';
      ListServiceAccountOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListServiceAccountOperationsRequest.prototype.pageToken = '';
      ListServiceAccountOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(10).string(m.serviceAccountId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListServiceAccountOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListServiceAccountOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.serviceAccountId = r.string();
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
      return ListServiceAccountOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListServiceAccountOperationsResponse = (function() {
      function ListServiceAccountOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListServiceAccountOperationsResponse.prototype.operations = $util.emptyArray;
      ListServiceAccountOperationsResponse.prototype.nextPageToken = '';
      ListServiceAccountOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListServiceAccountOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.ListServiceAccountOperationsResponse();
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
      return ListServiceAccountOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.UserAccount = (function() {
      function UserAccount(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UserAccount.prototype.id = '';
      UserAccount.prototype.yandexPassportUserAccount = null;
      UserAccount.prototype.samlUserAccount = null;
      let $oneOfFields;
      Object.defineProperty(UserAccount.prototype, 'userAccount', {
        get: $util.oneOfGetter(($oneOfFields = ['yandexPassportUserAccount', 'samlUserAccount'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      UserAccount.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.yandexPassportUserAccount != null && m.hasOwnProperty('yandexPassportUserAccount')) $root.api.iam.v1.YandexPassportUserAccount.encode(m.yandexPassportUserAccount, w.uint32(18).fork()).ldelim();
        if (m.samlUserAccount != null && m.hasOwnProperty('samlUserAccount')) $root.api.iam.v1.SamlUserAccount.encode(m.samlUserAccount, w.uint32(26).fork()).ldelim();
        return w;
      };
      UserAccount.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.UserAccount();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.yandexPassportUserAccount = $root.api.iam.v1.YandexPassportUserAccount.decode(r, r.uint32());
              break;
            case 3:
              m.samlUserAccount = $root.api.iam.v1.SamlUserAccount.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UserAccount;
    })();
  })(root);
  (function($root) {
    $root.YandexPassportUserAccount = (function() {
      function YandexPassportUserAccount(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      YandexPassportUserAccount.prototype.login = '';
      YandexPassportUserAccount.prototype.defaultEmail = '';
      YandexPassportUserAccount.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.login != null && m.hasOwnProperty('login')) w.uint32(10).string(m.login);
        if (m.defaultEmail != null && m.hasOwnProperty('defaultEmail')) w.uint32(18).string(m.defaultEmail);
        return w;
      };
      YandexPassportUserAccount.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.YandexPassportUserAccount();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.login = r.string();
              break;
            case 2:
              m.defaultEmail = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return YandexPassportUserAccount;
    })();
  })(root);
  (function($root) {
    $root.SamlUserAccount = (function() {
      function SamlUserAccount(p) {
        this.attributes = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SamlUserAccount.prototype.federationId = '';
      SamlUserAccount.prototype.nameId = '';
      SamlUserAccount.prototype.attributes = $util.emptyObject;
      SamlUserAccount.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.federationId != null && m.hasOwnProperty('federationId')) w.uint32(10).string(m.federationId);
        if (m.nameId != null && m.hasOwnProperty('nameId')) w.uint32(18).string(m.nameId);
        if (m.attributes != null && m.hasOwnProperty('attributes')) {
          for (let ks = Object.keys(m.attributes), i = 0; i < ks.length; ++i) {
            w.uint32(26)
              .fork()
              .uint32(10)
              .string(ks[i]);
            $root.api.iam.v1.SamlUserAccount.Attribute.encode(m.attributes[ks[i]], w.uint32(18).fork())
              .ldelim()
              .ldelim();
          }
        }
        return w;
      };
      SamlUserAccount.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.SamlUserAccount(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.federationId = r.string();
              break;
            case 2:
              m.nameId = r.string();
              break;
            case 3:
              r.skip().pos++;
              if (m.attributes === $util.emptyObject) m.attributes = {};
              k = r.string();
              r.pos++;
              m.attributes[k] = $root.api.iam.v1.SamlUserAccount.Attribute.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      SamlUserAccount.Attribute = (function() {
        function Attribute(p) {
          this.value = [];
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Attribute.prototype.value = $util.emptyArray;
        Attribute.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.value != null && m.value.length) {
            for (let i = 0; i < m.value.length; ++i) w.uint32(10).string(m.value[i]);
          }
          return w;
        };
        Attribute.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.iam.v1.SamlUserAccount.Attribute();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.value && m.value.length)) m.value = [];
                m.value.push(r.string());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Attribute;
      })();
      return SamlUserAccount;
    })();
  })(root);
  (function($root) {
    $root.UserAccountService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.UserAccountService.makeGrpcConstructor());
    };
    $root.UserAccountService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.iam.v1.UserAccountService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.GetUserAccountRequest,
          responseType: $root.api.iam.v1.UserAccount,
          requestSerialize: r => {
            return $root.api.iam.v1.GetUserAccountRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.GetUserAccountRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.UserAccount.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.UserAccount.decode
        }
      });
      ctor.__endpointId = 'iam';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetUserAccountRequest = (function() {
      function GetUserAccountRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetUserAccountRequest.prototype.userAccountId = '';
      GetUserAccountRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.userAccountId != null && m.hasOwnProperty('userAccountId')) w.uint32(10).string(m.userAccountId);
        return w;
      };
      GetUserAccountRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.GetUserAccountRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.userAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetUserAccountRequest;
    })();
  })(root);
  (function($root) {
    $root.YandexPassportUserAccountService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.YandexPassportUserAccountService.makeGrpcConstructor());
    };
    $root.YandexPassportUserAccountService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        getByLogin: {
          path: '/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iam.v1.GetUserAccountByLoginRequest,
          responseType: $root.api.iam.v1.UserAccount,
          requestSerialize: r => {
            return $root.api.iam.v1.GetUserAccountByLoginRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iam.v1.GetUserAccountByLoginRequest.decode,
          responseSerialize: r => {
            return $root.api.iam.v1.UserAccount.encode(r).finish();
          },
          responseDeserialize: $root.api.iam.v1.UserAccount.decode
        }
      });
      ctor.__endpointId = 'iam';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetUserAccountByLoginRequest = (function() {
      function GetUserAccountByLoginRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetUserAccountByLoginRequest.prototype.login = '';
      GetUserAccountByLoginRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.login != null && m.hasOwnProperty('login')) w.uint32(10).string(m.login);
        return w;
      };
      GetUserAccountByLoginRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iam.v1.GetUserAccountByLoginRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.login = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetUserAccountByLoginRequest;
    })();
  })(root);
  registar.register('api.iam.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
