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
    $root.ApiEndpoint = (function() {
      function ApiEndpoint(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ApiEndpoint.prototype.id = '';
      ApiEndpoint.prototype.address = '';
      ApiEndpoint.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(18).string(m.address);
        return w;
      };
      ApiEndpoint.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.endpoint.ApiEndpoint();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.address = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ApiEndpoint;
    })();
  })(root);
  (function($root) {
    $root.ApiEndpointService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.ApiEndpointService.makeGrpcConstructor());
    };
    $root.ApiEndpointService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.endpoint.ApiEndpointService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.endpoint.GetApiEndpointRequest,
          responseType: $root.api.endpoint.ApiEndpoint,
          requestSerialize: r => {
            return $root.api.endpoint.GetApiEndpointRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.endpoint.GetApiEndpointRequest.decode,
          responseSerialize: r => {
            return $root.api.endpoint.ApiEndpoint.encode(r).finish();
          },
          responseDeserialize: $root.api.endpoint.ApiEndpoint.decode
        },
        list: {
          path: '/yandex.cloud.endpoint.ApiEndpointService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.endpoint.ListApiEndpointsRequest,
          responseType: $root.api.endpoint.ListApiEndpointsResponse,
          requestSerialize: r => {
            return $root.api.endpoint.ListApiEndpointsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.endpoint.ListApiEndpointsRequest.decode,
          responseSerialize: r => {
            return $root.api.endpoint.ListApiEndpointsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.endpoint.ListApiEndpointsResponse.decode
        }
      });
      ctor.__endpointId = 'endpoint';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetApiEndpointRequest = (function() {
      function GetApiEndpointRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetApiEndpointRequest.prototype.apiEndpointId = '';
      GetApiEndpointRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.apiEndpointId != null && m.hasOwnProperty('apiEndpointId')) w.uint32(10).string(m.apiEndpointId);
        return w;
      };
      GetApiEndpointRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.endpoint.GetApiEndpointRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.apiEndpointId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetApiEndpointRequest;
    })();
  })(root);
  (function($root) {
    $root.ListApiEndpointsRequest = (function() {
      function ListApiEndpointsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListApiEndpointsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListApiEndpointsRequest.prototype.pageToken = '';
      ListApiEndpointsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(8).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(18).string(m.pageToken);
        return w;
      };
      ListApiEndpointsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.endpoint.ListApiEndpointsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.pageSize = r.int64();
              break;
            case 2:
              m.pageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListApiEndpointsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListApiEndpointsResponse = (function() {
      function ListApiEndpointsResponse(p) {
        this.endpoints = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListApiEndpointsResponse.prototype.endpoints = $util.emptyArray;
      ListApiEndpointsResponse.prototype.nextPageToken = '';
      ListApiEndpointsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.endpoints != null && m.endpoints.length) {
          for (let i = 0; i < m.endpoints.length; ++i) $root.api.endpoint.ApiEndpoint.encode(m.endpoints[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListApiEndpointsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.endpoint.ListApiEndpointsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.endpoints && m.endpoints.length)) m.endpoints = [];
              m.endpoints.push($root.api.endpoint.ApiEndpoint.decode(r, r.uint32()));
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
      return ListApiEndpointsResponse;
    })();
  })(root);
  registar.register('api.endpoint', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
