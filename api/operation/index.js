module.exports = (function() {
  const $protobuf = require('protobufjs');
  const grpc = require('grpc');
  const registar = require('../../lib/registar.js');
  const util = require('../../lib/util.js');
  const yc = require('../../index.js');
  const $Reader = $protobuf.Reader;
  const $Writer = $protobuf.Writer;
  const $util = $protobuf.util;
  let root = {};
  (function($root) {
    $root.Operation = (function() {
      function Operation(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Operation.prototype.id = '';
      Operation.prototype.description = '';
      Operation.prototype.createdAt = null;
      Operation.prototype.createdBy = '';
      Operation.prototype.modifiedAt = null;
      Operation.prototype.done = false;
      Operation.prototype.metadata = null;
      Operation.prototype.error = null;
      Operation.prototype.response = null;
      let $oneOfFields;
      Object.defineProperty(Operation.prototype, 'result', {
        get: $util.oneOfGetter(($oneOfFields = ['error', 'response'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Operation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        if (m.createdBy != null && m.hasOwnProperty('createdBy')) w.uint32(34).string(m.createdBy);
        if (m.modifiedAt != null && m.hasOwnProperty('modifiedAt')) $root.contrib.google.protobuf.Timestamp.encode(m.modifiedAt, w.uint32(42).fork()).ldelim();
        if (m.done != null && m.hasOwnProperty('done')) w.uint32(48).bool(m.done);
        if (m.metadata != null && m.hasOwnProperty('metadata')) $root.contrib.google.protobuf.Any.encode(m.metadata, w.uint32(58).fork()).ldelim();
        if (m.error != null && m.hasOwnProperty('error')) $root.contrib.google.rpc.Status.encode(m.error, w.uint32(66).fork()).ldelim();
        if (m.response != null && m.hasOwnProperty('response')) $root.contrib.google.protobuf.Any.encode(m.response, w.uint32(74).fork()).ldelim();
        return w;
      };
      Operation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.operation.Operation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.description = r.string();
              break;
            case 3:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 4:
              m.createdBy = r.string();
              break;
            case 5:
              m.modifiedAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 6:
              m.done = r.bool();
              break;
            case 7:
              m.metadata = $root.contrib.google.protobuf.Any.decode(r, r.uint32());
              break;
            case 8:
              m.error = $root.contrib.google.rpc.Status.decode(r, r.uint32());
              break;
            case 9:
              m.response = $root.contrib.google.protobuf.Any.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Operation;
    })();
  })(root);
  (function($root) {
    $root.OperationService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.OperationService.makeGrpcConstructor());
    };
    $root.OperationService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.operation.OperationService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.operation.GetOperationRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.operation.GetOperationRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.operation.GetOperationRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        cancel: {
          path: '/yandex.cloud.operation.OperationService/Cancel',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.operation.CancelOperationRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.operation.CancelOperationRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.operation.CancelOperationRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        }
      });
      ctor.__endpointId = 'operation';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetOperationRequest = (function() {
      function GetOperationRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetOperationRequest.prototype.operationId = '';
      GetOperationRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operationId != null && m.hasOwnProperty('operationId')) w.uint32(10).string(m.operationId);
        return w;
      };
      GetOperationRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.operation.GetOperationRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.operationId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetOperationRequest;
    })();
  })(root);
  (function($root) {
    $root.CancelOperationRequest = (function() {
      function CancelOperationRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CancelOperationRequest.prototype.operationId = '';
      CancelOperationRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operationId != null && m.hasOwnProperty('operationId')) w.uint32(10).string(m.operationId);
        return w;
      };
      CancelOperationRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.operation.CancelOperationRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.operationId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CancelOperationRequest;
    })();
  })(root);
  registar.register('api.operation', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
