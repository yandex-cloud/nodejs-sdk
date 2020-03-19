module.exports = (function() {
  const $protobuf = require('protobufjs');
  const grpc = require('grpc');
  const registar = require('../../../../lib/registar.js');
  const util = require('../../../../lib/util.js');
  const yc = require('../../../../index.js');
  const $Reader = $protobuf.Reader;
  const $Writer = $protobuf.Writer;
  const $util = $protobuf.util;
  let root = {};
  require('../../../../api/operation');
  require('../../../../api/access');
  (function($root) {
    $root.Function = (function() {
      function Function(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Function.prototype.id = '';
      Function.prototype.folderId = '';
      Function.prototype.createdAt = null;
      Function.prototype.name = '';
      Function.prototype.description = '';
      Function.prototype.labels = $util.emptyObject;
      Function.prototype.logGroupId = '';
      Function.prototype.httpInvokeUrl = '';
      Function.prototype.status = 0;
      Function.encode = function encode(m, w) {
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
        if (m.logGroupId != null && m.hasOwnProperty('logGroupId')) w.uint32(58).string(m.logGroupId);
        if (m.httpInvokeUrl != null && m.hasOwnProperty('httpInvokeUrl')) w.uint32(66).string(m.httpInvokeUrl);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(72).int32(m.status);
        return w;
      };
      Function.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.Function(),
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
              m.logGroupId = r.string();
              break;
            case 8:
              m.httpInvokeUrl = r.string();
              break;
            case 9:
              m.status = r.int32();
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
        values[(valuesById[3] = 'DELETING')] = 3;
        values[(valuesById[4] = 'ERROR')] = 4;
        return values;
      })();
      Function.Status = Status;
      return Function;
    })();
  })(root);
  (function($root) {
    $root.Version = (function() {
      function Version(p) {
        this.tags = [];
        this.environment = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Version.prototype.id = '';
      Version.prototype.functionId = '';
      Version.prototype.description = '';
      Version.prototype.createdAt = null;
      Version.prototype.runtime = '';
      Version.prototype.entrypoint = '';
      Version.prototype.resources = null;
      Version.prototype.executionTimeout = null;
      Version.prototype.serviceAccountId = '';
      Version.prototype.imageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Version.prototype.status = 0;
      Version.prototype.tags = $util.emptyArray;
      Version.prototype.logGroupId = '';
      Version.prototype.environment = $util.emptyObject;
      Version.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(18).string(m.functionId);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(42).fork()).ldelim();
        if (m.runtime != null && m.hasOwnProperty('runtime')) w.uint32(50).string(m.runtime);
        if (m.entrypoint != null && m.hasOwnProperty('entrypoint')) w.uint32(58).string(m.entrypoint);
        if (m.resources != null && m.hasOwnProperty('resources')) $root.api.serverless.functions.v1.Resources.encode(m.resources, w.uint32(66).fork()).ldelim();
        if (m.executionTimeout != null && m.hasOwnProperty('executionTimeout')) $root.contrib.google.protobuf.Duration.encode(m.executionTimeout, w.uint32(74).fork()).ldelim();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(82).string(m.serviceAccountId);
        if (m.imageSize != null && m.hasOwnProperty('imageSize')) w.uint32(96).int64(m.imageSize);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(104).int32(m.status);
        if (m.tags != null && m.tags.length) {
          for (let i = 0; i < m.tags.length; ++i) w.uint32(114).string(m.tags[i]);
        }
        if (m.logGroupId != null && m.hasOwnProperty('logGroupId')) w.uint32(122).string(m.logGroupId);
        if (m.environment != null && m.hasOwnProperty('environment')) {
          for (let ks = Object.keys(m.environment), i = 0; i < ks.length; ++i) {
            w.uint32(130)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.environment[ks[i]])
              .ldelim();
          }
        }
        return w;
      };
      Version.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.Version(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.functionId = r.string();
              break;
            case 3:
              m.description = r.string();
              break;
            case 5:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 6:
              m.runtime = r.string();
              break;
            case 7:
              m.entrypoint = r.string();
              break;
            case 8:
              m.resources = $root.api.serverless.functions.v1.Resources.decode(r, r.uint32());
              break;
            case 9:
              m.executionTimeout = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            case 10:
              m.serviceAccountId = r.string();
              break;
            case 12:
              m.imageSize = r.int64();
              break;
            case 13:
              m.status = r.int32();
              break;
            case 14:
              if (!(m.tags && m.tags.length)) m.tags = [];
              m.tags.push(r.string());
              break;
            case 15:
              m.logGroupId = r.string();
              break;
            case 16:
              r.skip().pos++;
              if (m.environment === $util.emptyObject) m.environment = {};
              k = r.string();
              r.pos++;
              m.environment[k] = r.string();
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
        return values;
      })();
      Version.Status = Status;
      return Version;
    })();
  })(root);
  (function($root) {
    $root.Resources = (function() {
      function Resources(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Resources.prototype.memory = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Resources.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.memory != null && m.hasOwnProperty('memory')) w.uint32(8).int64(m.memory);
        return w;
      };
      Resources.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.Resources();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.memory = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Resources;
    })();
  })(root);
  (function($root) {
    $root.Package = (function() {
      function Package(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Package.prototype.bucketName = '';
      Package.prototype.objectName = '';
      Package.prototype.sha256 = '';
      Package.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.bucketName != null && m.hasOwnProperty('bucketName')) w.uint32(10).string(m.bucketName);
        if (m.objectName != null && m.hasOwnProperty('objectName')) w.uint32(18).string(m.objectName);
        if (m.sha256 != null && m.hasOwnProperty('sha256')) w.uint32(26).string(m.sha256);
        return w;
      };
      Package.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.Package();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.bucketName = r.string();
              break;
            case 2:
              m.objectName = r.string();
              break;
            case 3:
              m.sha256 = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Package;
    })();
  })(root);
  (function($root) {
    $root.FunctionService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.FunctionService.makeGrpcConstructor());
    };
    $root.FunctionService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.GetFunctionRequest,
          responseType: $root.api.serverless.functions.v1.Function,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.GetFunctionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.GetFunctionRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.functions.v1.Function.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.functions.v1.Function.decode
        },
        list: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.ListFunctionsRequest,
          responseType: $root.api.serverless.functions.v1.ListFunctionsResponse,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.ListFunctionsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.ListFunctionsRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.functions.v1.ListFunctionsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.functions.v1.ListFunctionsResponse.decode
        },
        create: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.CreateFunctionRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.CreateFunctionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.CreateFunctionRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.UpdateFunctionRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.UpdateFunctionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.UpdateFunctionRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.DeleteFunctionRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.DeleteFunctionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.DeleteFunctionRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        getVersion: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.GetFunctionVersionRequest,
          responseType: $root.api.serverless.functions.v1.Version,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.GetFunctionVersionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.GetFunctionVersionRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.functions.v1.Version.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.functions.v1.Version.decode
        },
        getVersionByTag: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.GetFunctionVersionByTagRequest,
          responseType: $root.api.serverless.functions.v1.Version,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.GetFunctionVersionByTagRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.GetFunctionVersionByTagRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.functions.v1.Version.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.functions.v1.Version.decode
        },
        listVersions: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.ListFunctionsVersionsRequest,
          responseType: $root.api.serverless.functions.v1.ListFunctionsVersionsResponse,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.ListFunctionsVersionsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.ListFunctionsVersionsRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.functions.v1.ListFunctionsVersionsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.functions.v1.ListFunctionsVersionsResponse.decode
        },
        setTag: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/SetTag',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.SetFunctionTagRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.SetFunctionTagRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.SetFunctionTagRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        removeTag: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.RemoveFunctionTagRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.RemoveFunctionTagRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.RemoveFunctionTagRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listTagHistory: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.ListFunctionTagHistoryRequest,
          responseType: $root.api.serverless.functions.v1.ListFunctionTagHistoryResponse,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.ListFunctionTagHistoryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.ListFunctionTagHistoryRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.functions.v1.ListFunctionTagHistoryResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.functions.v1.ListFunctionTagHistoryResponse.decode
        },
        createVersion: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.CreateFunctionVersionRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.CreateFunctionVersionRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.CreateFunctionVersionRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listRuntimes: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.ListRuntimesRequest,
          responseType: $root.api.serverless.functions.v1.ListRuntimesResponse,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.ListRuntimesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.ListRuntimesRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.functions.v1.ListRuntimesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.functions.v1.ListRuntimesResponse.decode
        },
        listOperations: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.functions.v1.ListFunctionOperationsRequest,
          responseType: $root.api.serverless.functions.v1.ListFunctionOperationsResponse,
          requestSerialize: r => {
            return $root.api.serverless.functions.v1.ListFunctionOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.functions.v1.ListFunctionOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.functions.v1.ListFunctionOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.functions.v1.ListFunctionOperationsResponse.decode
        },
        listAccessBindings: {
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings',
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
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings',
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
          path: '/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings',
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
      ctor.__endpointId = 'serverless-functions';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetFunctionRequest = (function() {
      function GetFunctionRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetFunctionRequest.prototype.functionId = '';
      GetFunctionRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        return w;
      };
      GetFunctionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.GetFunctionRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetFunctionRequest;
    })();
  })(root);
  (function($root) {
    $root.GetFunctionVersionRequest = (function() {
      function GetFunctionVersionRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetFunctionVersionRequest.prototype.functionVersionId = '';
      GetFunctionVersionRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionVersionId != null && m.hasOwnProperty('functionVersionId')) w.uint32(10).string(m.functionVersionId);
        return w;
      };
      GetFunctionVersionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.GetFunctionVersionRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionVersionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetFunctionVersionRequest;
    })();
  })(root);
  (function($root) {
    $root.GetFunctionVersionByTagRequest = (function() {
      function GetFunctionVersionByTagRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetFunctionVersionByTagRequest.prototype.functionId = '';
      GetFunctionVersionByTagRequest.prototype.tag = '';
      GetFunctionVersionByTagRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        if (m.tag != null && m.hasOwnProperty('tag')) w.uint32(18).string(m.tag);
        return w;
      };
      GetFunctionVersionByTagRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.GetFunctionVersionByTagRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            case 2:
              m.tag = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetFunctionVersionByTagRequest;
    })();
  })(root);
  (function($root) {
    $root.ListFunctionsRequest = (function() {
      function ListFunctionsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFunctionsRequest.prototype.folderId = '';
      ListFunctionsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListFunctionsRequest.prototype.pageToken = '';
      ListFunctionsRequest.prototype.filter = '';
      ListFunctionsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListFunctionsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListFunctionsRequest();
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
      return ListFunctionsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListFunctionsResponse = (function() {
      function ListFunctionsResponse(p) {
        this.functions = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFunctionsResponse.prototype.functions = $util.emptyArray;
      ListFunctionsResponse.prototype.nextPageToken = '';
      ListFunctionsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functions != null && m.functions.length) {
          for (let i = 0; i < m.functions.length; ++i) $root.api.serverless.functions.v1.Function.encode(m.functions[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListFunctionsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListFunctionsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.functions && m.functions.length)) m.functions = [];
              m.functions.push($root.api.serverless.functions.v1.Function.decode(r, r.uint32()));
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
      return ListFunctionsResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateFunctionRequest = (function() {
      function CreateFunctionRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateFunctionRequest.prototype.folderId = '';
      CreateFunctionRequest.prototype.name = '';
      CreateFunctionRequest.prototype.description = '';
      CreateFunctionRequest.prototype.labels = $util.emptyObject;
      CreateFunctionRequest.encode = function encode(m, w) {
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
        return w;
      };
      CreateFunctionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.CreateFunctionRequest(),
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
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateFunctionRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateFunctionMetadata = (function() {
      function CreateFunctionMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateFunctionMetadata.prototype.functionId = '';
      CreateFunctionMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        return w;
      };
      CreateFunctionMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.CreateFunctionMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateFunctionMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateFunctionRequest = (function() {
      function UpdateFunctionRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateFunctionRequest.prototype.functionId = '';
      UpdateFunctionRequest.prototype.updateMask = null;
      UpdateFunctionRequest.prototype.name = '';
      UpdateFunctionRequest.prototype.description = '';
      UpdateFunctionRequest.prototype.labels = $util.emptyObject;
      UpdateFunctionRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(42)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        return w;
      };
      UpdateFunctionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.UpdateFunctionRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
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
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateFunctionRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateFunctionMetadata = (function() {
      function UpdateFunctionMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateFunctionMetadata.prototype.functionId = '';
      UpdateFunctionMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        return w;
      };
      UpdateFunctionMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.UpdateFunctionMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateFunctionMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteFunctionRequest = (function() {
      function DeleteFunctionRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteFunctionRequest.prototype.functionId = '';
      DeleteFunctionRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        return w;
      };
      DeleteFunctionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.DeleteFunctionRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteFunctionRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteFunctionMetadata = (function() {
      function DeleteFunctionMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteFunctionMetadata.prototype.functionId = '';
      DeleteFunctionMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        return w;
      };
      DeleteFunctionMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.DeleteFunctionMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteFunctionMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListRuntimesRequest = (function() {
      function ListRuntimesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRuntimesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      ListRuntimesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListRuntimesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListRuntimesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRuntimesResponse = (function() {
      function ListRuntimesResponse(p) {
        this.runtimes = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRuntimesResponse.prototype.runtimes = $util.emptyArray;
      ListRuntimesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.runtimes != null && m.runtimes.length) {
          for (let i = 0; i < m.runtimes.length; ++i) w.uint32(10).string(m.runtimes[i]);
        }
        return w;
      };
      ListRuntimesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListRuntimesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.runtimes && m.runtimes.length)) m.runtimes = [];
              m.runtimes.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListRuntimesResponse;
    })();
  })(root);
  (function($root) {
    $root.ListFunctionsVersionsRequest = (function() {
      function ListFunctionsVersionsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFunctionsVersionsRequest.prototype.folderId = '';
      ListFunctionsVersionsRequest.prototype.functionId = '';
      ListFunctionsVersionsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListFunctionsVersionsRequest.prototype.pageToken = '';
      ListFunctionsVersionsRequest.prototype.filter = '';
      let $oneOfFields;
      Object.defineProperty(ListFunctionsVersionsRequest.prototype, 'id', {
        get: $util.oneOfGetter(($oneOfFields = ['folderId', 'functionId'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      ListFunctionsVersionsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(18).string(m.functionId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(24).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(34).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(42).string(m.filter);
        return w;
      };
      ListFunctionsVersionsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListFunctionsVersionsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.functionId = r.string();
              break;
            case 3:
              m.pageSize = r.int64();
              break;
            case 4:
              m.pageToken = r.string();
              break;
            case 5:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListFunctionsVersionsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListFunctionsVersionsResponse = (function() {
      function ListFunctionsVersionsResponse(p) {
        this.versions = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFunctionsVersionsResponse.prototype.versions = $util.emptyArray;
      ListFunctionsVersionsResponse.prototype.nextPageToken = '';
      ListFunctionsVersionsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.versions != null && m.versions.length) {
          for (let i = 0; i < m.versions.length; ++i) $root.api.serverless.functions.v1.Version.encode(m.versions[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListFunctionsVersionsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListFunctionsVersionsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.versions && m.versions.length)) m.versions = [];
              m.versions.push($root.api.serverless.functions.v1.Version.decode(r, r.uint32()));
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
      return ListFunctionsVersionsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListFunctionOperationsRequest = (function() {
      function ListFunctionOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFunctionOperationsRequest.prototype.functionId = '';
      ListFunctionOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListFunctionOperationsRequest.prototype.pageToken = '';
      ListFunctionOperationsRequest.prototype.filter = '';
      ListFunctionOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListFunctionOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListFunctionOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
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
      return ListFunctionOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListFunctionOperationsResponse = (function() {
      function ListFunctionOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFunctionOperationsResponse.prototype.operations = $util.emptyArray;
      ListFunctionOperationsResponse.prototype.nextPageToken = '';
      ListFunctionOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListFunctionOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListFunctionOperationsResponse();
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
      return ListFunctionOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateFunctionVersionRequest = (function() {
      function CreateFunctionVersionRequest(p) {
        this.environment = {};
        this.tag = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateFunctionVersionRequest.prototype.functionId = '';
      CreateFunctionVersionRequest.prototype.runtime = '';
      CreateFunctionVersionRequest.prototype.description = '';
      CreateFunctionVersionRequest.prototype.entrypoint = '';
      CreateFunctionVersionRequest.prototype.resources = null;
      CreateFunctionVersionRequest.prototype.executionTimeout = null;
      CreateFunctionVersionRequest.prototype.serviceAccountId = '';
      CreateFunctionVersionRequest.prototype['package'] = null;
      CreateFunctionVersionRequest.prototype.content = $util.newBuffer([]);
      CreateFunctionVersionRequest.prototype.environment = $util.emptyObject;
      CreateFunctionVersionRequest.prototype.tag = $util.emptyArray;
      let $oneOfFields;
      Object.defineProperty(CreateFunctionVersionRequest.prototype, 'packageSource', {
        get: $util.oneOfGetter(($oneOfFields = ['package', 'content'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      CreateFunctionVersionRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        if (m.runtime != null && m.hasOwnProperty('runtime')) w.uint32(18).string(m.runtime);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        if (m.entrypoint != null && m.hasOwnProperty('entrypoint')) w.uint32(34).string(m.entrypoint);
        if (m.resources != null && m.hasOwnProperty('resources')) $root.api.serverless.functions.v1.Resources.encode(m.resources, w.uint32(42).fork()).ldelim();
        if (m.executionTimeout != null && m.hasOwnProperty('executionTimeout')) $root.contrib.google.protobuf.Duration.encode(m.executionTimeout, w.uint32(50).fork()).ldelim();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(58).string(m.serviceAccountId);
        if (m['package'] != null && m.hasOwnProperty('package')) $root.api.serverless.functions.v1.Package.encode(m['package'], w.uint32(74).fork()).ldelim();
        if (m.content != null && m.hasOwnProperty('content')) w.uint32(82).bytes(m.content);
        if (m.environment != null && m.hasOwnProperty('environment')) {
          for (let ks = Object.keys(m.environment), i = 0; i < ks.length; ++i) {
            w.uint32(98)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.environment[ks[i]])
              .ldelim();
          }
        }
        if (m.tag != null && m.tag.length) {
          for (let i = 0; i < m.tag.length; ++i) w.uint32(106).string(m.tag[i]);
        }
        return w;
      };
      CreateFunctionVersionRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.CreateFunctionVersionRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            case 2:
              m.runtime = r.string();
              break;
            case 3:
              m.description = r.string();
              break;
            case 4:
              m.entrypoint = r.string();
              break;
            case 5:
              m.resources = $root.api.serverless.functions.v1.Resources.decode(r, r.uint32());
              break;
            case 6:
              m.executionTimeout = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            case 7:
              m.serviceAccountId = r.string();
              break;
            case 9:
              m['package'] = $root.api.serverless.functions.v1.Package.decode(r, r.uint32());
              break;
            case 10:
              m.content = r.bytes();
              break;
            case 12:
              r.skip().pos++;
              if (m.environment === $util.emptyObject) m.environment = {};
              k = r.string();
              r.pos++;
              m.environment[k] = r.string();
              break;
            case 13:
              if (!(m.tag && m.tag.length)) m.tag = [];
              m.tag.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateFunctionVersionRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateFunctionVersionMetadata = (function() {
      function CreateFunctionVersionMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateFunctionVersionMetadata.prototype.functionVersionId = '';
      CreateFunctionVersionMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionVersionId != null && m.hasOwnProperty('functionVersionId')) w.uint32(10).string(m.functionVersionId);
        return w;
      };
      CreateFunctionVersionMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.CreateFunctionVersionMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionVersionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateFunctionVersionMetadata;
    })();
  })(root);
  (function($root) {
    $root.SetFunctionTagRequest = (function() {
      function SetFunctionTagRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SetFunctionTagRequest.prototype.functionVersionId = '';
      SetFunctionTagRequest.prototype.tag = '';
      SetFunctionTagRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionVersionId != null && m.hasOwnProperty('functionVersionId')) w.uint32(10).string(m.functionVersionId);
        if (m.tag != null && m.hasOwnProperty('tag')) w.uint32(18).string(m.tag);
        return w;
      };
      SetFunctionTagRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.SetFunctionTagRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionVersionId = r.string();
              break;
            case 2:
              m.tag = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SetFunctionTagRequest;
    })();
  })(root);
  (function($root) {
    $root.RemoveFunctionTagRequest = (function() {
      function RemoveFunctionTagRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RemoveFunctionTagRequest.prototype.functionVersionId = '';
      RemoveFunctionTagRequest.prototype.tag = '';
      RemoveFunctionTagRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionVersionId != null && m.hasOwnProperty('functionVersionId')) w.uint32(10).string(m.functionVersionId);
        if (m.tag != null && m.hasOwnProperty('tag')) w.uint32(18).string(m.tag);
        return w;
      };
      RemoveFunctionTagRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.RemoveFunctionTagRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionVersionId = r.string();
              break;
            case 2:
              m.tag = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RemoveFunctionTagRequest;
    })();
  })(root);
  (function($root) {
    $root.SetFunctionTagMetadata = (function() {
      function SetFunctionTagMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SetFunctionTagMetadata.prototype.functionVersionId = '';
      SetFunctionTagMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionVersionId != null && m.hasOwnProperty('functionVersionId')) w.uint32(10).string(m.functionVersionId);
        return w;
      };
      SetFunctionTagMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.SetFunctionTagMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionVersionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SetFunctionTagMetadata;
    })();
  })(root);
  (function($root) {
    $root.RemoveFunctionTagMetadata = (function() {
      function RemoveFunctionTagMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RemoveFunctionTagMetadata.prototype.functionVersionId = '';
      RemoveFunctionTagMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionVersionId != null && m.hasOwnProperty('functionVersionId')) w.uint32(10).string(m.functionVersionId);
        return w;
      };
      RemoveFunctionTagMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.RemoveFunctionTagMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionVersionId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RemoveFunctionTagMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListFunctionTagHistoryRequest = (function() {
      function ListFunctionTagHistoryRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFunctionTagHistoryRequest.prototype.functionId = '';
      ListFunctionTagHistoryRequest.prototype.tag = '';
      ListFunctionTagHistoryRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListFunctionTagHistoryRequest.prototype.pageToken = '';
      ListFunctionTagHistoryRequest.prototype.filter = '';
      ListFunctionTagHistoryRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        if (m.tag != null && m.hasOwnProperty('tag')) w.uint32(18).string(m.tag);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(24).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(34).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(42).string(m.filter);
        return w;
      };
      ListFunctionTagHistoryRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListFunctionTagHistoryRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            case 2:
              m.tag = r.string();
              break;
            case 3:
              m.pageSize = r.int64();
              break;
            case 4:
              m.pageToken = r.string();
              break;
            case 5:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListFunctionTagHistoryRequest;
    })();
  })(root);
  (function($root) {
    $root.ListFunctionTagHistoryResponse = (function() {
      function ListFunctionTagHistoryResponse(p) {
        this.functionTagHistoryRecord = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFunctionTagHistoryResponse.prototype.functionTagHistoryRecord = $util.emptyArray;
      ListFunctionTagHistoryResponse.prototype.nextPageToken = '';
      ListFunctionTagHistoryResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionTagHistoryRecord != null && m.functionTagHistoryRecord.length) {
          for (let i = 0; i < m.functionTagHistoryRecord.length; ++i) $root.api.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.encode(m.functionTagHistoryRecord[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListFunctionTagHistoryResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.functions.v1.ListFunctionTagHistoryResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.functionTagHistoryRecord && m.functionTagHistoryRecord.length)) m.functionTagHistoryRecord = [];
              m.functionTagHistoryRecord.push($root.api.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.decode(r, r.uint32()));
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
      ListFunctionTagHistoryResponse.FunctionTagHistoryRecord = (function() {
        function FunctionTagHistoryRecord(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        FunctionTagHistoryRecord.prototype.functionId = '';
        FunctionTagHistoryRecord.prototype.functionVersionId = '';
        FunctionTagHistoryRecord.prototype.tag = '';
        FunctionTagHistoryRecord.prototype.effectiveFrom = null;
        FunctionTagHistoryRecord.prototype.effectiveTo = null;
        FunctionTagHistoryRecord.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
          if (m.tag != null && m.hasOwnProperty('tag')) w.uint32(18).string(m.tag);
          if (m.functionVersionId != null && m.hasOwnProperty('functionVersionId')) w.uint32(26).string(m.functionVersionId);
          if (m.effectiveFrom != null && m.hasOwnProperty('effectiveFrom')) $root.contrib.google.protobuf.Timestamp.encode(m.effectiveFrom, w.uint32(34).fork()).ldelim();
          if (m.effectiveTo != null && m.hasOwnProperty('effectiveTo')) $root.contrib.google.protobuf.Timestamp.encode(m.effectiveTo, w.uint32(42).fork()).ldelim();
          return w;
        };
        FunctionTagHistoryRecord.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.functionId = r.string();
                break;
              case 3:
                m.functionVersionId = r.string();
                break;
              case 2:
                m.tag = r.string();
                break;
              case 4:
                m.effectiveFrom = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
                break;
              case 5:
                m.effectiveTo = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return FunctionTagHistoryRecord;
      })();
      return ListFunctionTagHistoryResponse;
    })();
  })(root);
  registar.register('api.serverless.functions.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
