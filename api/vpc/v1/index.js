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
  (function($root) {
    $root.Network = (function() {
      function Network(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Network.prototype.id = '';
      Network.prototype.folderId = '';
      Network.prototype.createdAt = null;
      Network.prototype.name = '';
      Network.prototype.description = '';
      Network.prototype.labels = $util.emptyObject;
      Network.encode = function encode(m, w) {
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
        return w;
      };
      Network.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.Network(),
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
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Network;
    })();
  })(root);
  (function($root) {
    $root.NetworkService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.NetworkService.makeGrpcConstructor());
    };
    $root.NetworkService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.vpc.v1.NetworkService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.GetNetworkRequest,
          responseType: $root.api.vpc.v1.Network,
          requestSerialize: r => {
            return $root.api.vpc.v1.GetNetworkRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.GetNetworkRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.Network.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.Network.decode
        },
        list: {
          path: '/yandex.cloud.vpc.v1.NetworkService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListNetworksRequest,
          responseType: $root.api.vpc.v1.ListNetworksResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListNetworksRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListNetworksRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListNetworksResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListNetworksResponse.decode
        },
        create: {
          path: '/yandex.cloud.vpc.v1.NetworkService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.CreateNetworkRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.CreateNetworkRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.CreateNetworkRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.vpc.v1.NetworkService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.UpdateNetworkRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.UpdateNetworkRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.UpdateNetworkRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.vpc.v1.NetworkService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.DeleteNetworkRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.DeleteNetworkRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.DeleteNetworkRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listSubnets: {
          path: '/yandex.cloud.vpc.v1.NetworkService/ListSubnets',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListNetworkSubnetsRequest,
          responseType: $root.api.vpc.v1.ListNetworkSubnetsResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListNetworkSubnetsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListNetworkSubnetsRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListNetworkSubnetsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListNetworkSubnetsResponse.decode
        },
        listOperations: {
          path: '/yandex.cloud.vpc.v1.NetworkService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListNetworkOperationsRequest,
          responseType: $root.api.vpc.v1.ListNetworkOperationsResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListNetworkOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListNetworkOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListNetworkOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListNetworkOperationsResponse.decode
        },
        move: {
          path: '/yandex.cloud.vpc.v1.NetworkService/Move',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.MoveNetworkRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.MoveNetworkRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.MoveNetworkRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        }
      });
      ctor.__endpointId = 'vpc';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetNetworkRequest = (function() {
      function GetNetworkRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetNetworkRequest.prototype.networkId = '';
      GetNetworkRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        return w;
      };
      GetNetworkRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.GetNetworkRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetNetworkRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNetworksRequest = (function() {
      function ListNetworksRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworksRequest.prototype.folderId = '';
      ListNetworksRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNetworksRequest.prototype.pageToken = '';
      ListNetworksRequest.prototype.filter = '';
      ListNetworksRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListNetworksRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListNetworksRequest();
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
      return ListNetworksRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNetworksResponse = (function() {
      function ListNetworksResponse(p) {
        this.networks = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworksResponse.prototype.networks = $util.emptyArray;
      ListNetworksResponse.prototype.nextPageToken = '';
      ListNetworksResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networks != null && m.networks.length) {
          for (let i = 0; i < m.networks.length; ++i) $root.api.vpc.v1.Network.encode(m.networks[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNetworksResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListNetworksResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.networks && m.networks.length)) m.networks = [];
              m.networks.push($root.api.vpc.v1.Network.decode(r, r.uint32()));
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
      return ListNetworksResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateNetworkRequest = (function() {
      function CreateNetworkRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateNetworkRequest.prototype.folderId = '';
      CreateNetworkRequest.prototype.name = '';
      CreateNetworkRequest.prototype.description = '';
      CreateNetworkRequest.prototype.labels = $util.emptyObject;
      CreateNetworkRequest.encode = function encode(m, w) {
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
      CreateNetworkRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CreateNetworkRequest(),
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
      return CreateNetworkRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateNetworkMetadata = (function() {
      function CreateNetworkMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateNetworkMetadata.prototype.networkId = '';
      CreateNetworkMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        return w;
      };
      CreateNetworkMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CreateNetworkMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateNetworkMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateNetworkRequest = (function() {
      function UpdateNetworkRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNetworkRequest.prototype.networkId = '';
      UpdateNetworkRequest.prototype.updateMask = null;
      UpdateNetworkRequest.prototype.name = '';
      UpdateNetworkRequest.prototype.description = '';
      UpdateNetworkRequest.prototype.labels = $util.emptyObject;
      UpdateNetworkRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
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
      UpdateNetworkRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateNetworkRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
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
      return UpdateNetworkRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateNetworkMetadata = (function() {
      function UpdateNetworkMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNetworkMetadata.prototype.networkId = '';
      UpdateNetworkMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        return w;
      };
      UpdateNetworkMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateNetworkMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNetworkMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteNetworkRequest = (function() {
      function DeleteNetworkRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteNetworkRequest.prototype.networkId = '';
      DeleteNetworkRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        return w;
      };
      DeleteNetworkRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.DeleteNetworkRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteNetworkRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteNetworkMetadata = (function() {
      function DeleteNetworkMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteNetworkMetadata.prototype.networkId = '';
      DeleteNetworkMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        return w;
      };
      DeleteNetworkMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.DeleteNetworkMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteNetworkMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListNetworkSubnetsRequest = (function() {
      function ListNetworkSubnetsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworkSubnetsRequest.prototype.networkId = '';
      ListNetworkSubnetsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNetworkSubnetsRequest.prototype.pageToken = '';
      ListNetworkSubnetsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListNetworkSubnetsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListNetworkSubnetsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
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
      return ListNetworkSubnetsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNetworkSubnetsResponse = (function() {
      function ListNetworkSubnetsResponse(p) {
        this.subnets = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworkSubnetsResponse.prototype.subnets = $util.emptyArray;
      ListNetworkSubnetsResponse.prototype.nextPageToken = '';
      ListNetworkSubnetsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnets != null && m.subnets.length) {
          for (let i = 0; i < m.subnets.length; ++i) $root.api.vpc.v1.Subnet.encode(m.subnets[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNetworkSubnetsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListNetworkSubnetsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.subnets && m.subnets.length)) m.subnets = [];
              m.subnets.push($root.api.vpc.v1.Subnet.decode(r, r.uint32()));
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
      return ListNetworkSubnetsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListNetworkOperationsRequest = (function() {
      function ListNetworkOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworkOperationsRequest.prototype.networkId = '';
      ListNetworkOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNetworkOperationsRequest.prototype.pageToken = '';
      ListNetworkOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListNetworkOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListNetworkOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
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
      return ListNetworkOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNetworkOperationsResponse = (function() {
      function ListNetworkOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworkOperationsResponse.prototype.operations = $util.emptyArray;
      ListNetworkOperationsResponse.prototype.nextPageToken = '';
      ListNetworkOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNetworkOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListNetworkOperationsResponse();
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
      return ListNetworkOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.MoveNetworkRequest = (function() {
      function MoveNetworkRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MoveNetworkRequest.prototype.networkId = '';
      MoveNetworkRequest.prototype.destinationFolderId = '';
      MoveNetworkRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        if (m.destinationFolderId != null && m.hasOwnProperty('destinationFolderId')) w.uint32(18).string(m.destinationFolderId);
        return w;
      };
      MoveNetworkRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.MoveNetworkRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
              break;
            case 2:
              m.destinationFolderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MoveNetworkRequest;
    })();
  })(root);
  (function($root) {
    $root.MoveNetworkMetadata = (function() {
      function MoveNetworkMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MoveNetworkMetadata.prototype.networkId = '';
      MoveNetworkMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        return w;
      };
      MoveNetworkMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.MoveNetworkMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MoveNetworkMetadata;
    })();
  })(root);
  (function($root) {
    $root.RouteTable = (function() {
      function RouteTable(p) {
        this.labels = {};
        this.staticRoutes = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RouteTable.prototype.id = '';
      RouteTable.prototype.folderId = '';
      RouteTable.prototype.createdAt = null;
      RouteTable.prototype.name = '';
      RouteTable.prototype.description = '';
      RouteTable.prototype.labels = $util.emptyObject;
      RouteTable.prototype.networkId = '';
      RouteTable.prototype.staticRoutes = $util.emptyArray;
      RouteTable.encode = function encode(m, w) {
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
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(58).string(m.networkId);
        if (m.staticRoutes != null && m.staticRoutes.length) {
          for (let i = 0; i < m.staticRoutes.length; ++i) $root.api.vpc.v1.StaticRoute.encode(m.staticRoutes[i], w.uint32(66).fork()).ldelim();
        }
        return w;
      };
      RouteTable.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.RouteTable(),
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
              m.networkId = r.string();
              break;
            case 8:
              if (!(m.staticRoutes && m.staticRoutes.length)) m.staticRoutes = [];
              m.staticRoutes.push($root.api.vpc.v1.StaticRoute.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RouteTable;
    })();
  })(root);
  (function($root) {
    $root.StaticRoute = (function() {
      function StaticRoute(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StaticRoute.prototype.destinationPrefix = '';
      StaticRoute.prototype.nextHopAddress = '';
      StaticRoute.prototype.labels = $util.emptyObject;
      let $oneOfFields;
      Object.defineProperty(StaticRoute.prototype, 'destination', {
        get: $util.oneOfGetter(($oneOfFields = ['destinationPrefix'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Object.defineProperty(StaticRoute.prototype, 'nextHop', {
        get: $util.oneOfGetter(($oneOfFields = ['nextHopAddress'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      StaticRoute.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.destinationPrefix != null && m.hasOwnProperty('destinationPrefix')) w.uint32(10).string(m.destinationPrefix);
        if (m.nextHopAddress != null && m.hasOwnProperty('nextHopAddress')) w.uint32(18).string(m.nextHopAddress);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(26)
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
      StaticRoute.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.StaticRoute(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.destinationPrefix = r.string();
              break;
            case 2:
              m.nextHopAddress = r.string();
              break;
            case 3:
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
      return StaticRoute;
    })();
  })(root);
  (function($root) {
    $root.RouteTableService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.RouteTableService.makeGrpcConstructor());
    };
    $root.RouteTableService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.vpc.v1.RouteTableService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.GetRouteTableRequest,
          responseType: $root.api.vpc.v1.RouteTable,
          requestSerialize: r => {
            return $root.api.vpc.v1.GetRouteTableRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.GetRouteTableRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.RouteTable.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.RouteTable.decode
        },
        list: {
          path: '/yandex.cloud.vpc.v1.RouteTableService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListRouteTablesRequest,
          responseType: $root.api.vpc.v1.ListRouteTablesResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListRouteTablesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListRouteTablesRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListRouteTablesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListRouteTablesResponse.decode
        },
        create: {
          path: '/yandex.cloud.vpc.v1.RouteTableService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.CreateRouteTableRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.CreateRouteTableRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.CreateRouteTableRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.vpc.v1.RouteTableService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.UpdateRouteTableRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.UpdateRouteTableRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.UpdateRouteTableRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.vpc.v1.RouteTableService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.DeleteRouteTableRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.DeleteRouteTableRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.DeleteRouteTableRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.vpc.v1.RouteTableService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListRouteTableOperationsRequest,
          responseType: $root.api.vpc.v1.ListRouteTableOperationsResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListRouteTableOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListRouteTableOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListRouteTableOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListRouteTableOperationsResponse.decode
        },
        move: {
          path: '/yandex.cloud.vpc.v1.RouteTableService/Move',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.MoveRouteTableRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.MoveRouteTableRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.MoveRouteTableRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        }
      });
      ctor.__endpointId = 'vpc';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetRouteTableRequest = (function() {
      function GetRouteTableRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetRouteTableRequest.prototype.routeTableId = '';
      GetRouteTableRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
        return w;
      };
      GetRouteTableRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.GetRouteTableRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetRouteTableRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRouteTablesRequest = (function() {
      function ListRouteTablesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRouteTablesRequest.prototype.folderId = '';
      ListRouteTablesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListRouteTablesRequest.prototype.pageToken = '';
      ListRouteTablesRequest.prototype.filter = '';
      ListRouteTablesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListRouteTablesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListRouteTablesRequest();
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
      return ListRouteTablesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRouteTablesResponse = (function() {
      function ListRouteTablesResponse(p) {
        this.routeTables = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRouteTablesResponse.prototype.routeTables = $util.emptyArray;
      ListRouteTablesResponse.prototype.nextPageToken = '';
      ListRouteTablesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTables != null && m.routeTables.length) {
          for (let i = 0; i < m.routeTables.length; ++i) $root.api.vpc.v1.RouteTable.encode(m.routeTables[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListRouteTablesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListRouteTablesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.routeTables && m.routeTables.length)) m.routeTables = [];
              m.routeTables.push($root.api.vpc.v1.RouteTable.decode(r, r.uint32()));
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
      return ListRouteTablesResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateRouteTableRequest = (function() {
      function CreateRouteTableRequest(p) {
        this.labels = {};
        this.staticRoutes = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateRouteTableRequest.prototype.folderId = '';
      CreateRouteTableRequest.prototype.name = '';
      CreateRouteTableRequest.prototype.description = '';
      CreateRouteTableRequest.prototype.labels = $util.emptyObject;
      CreateRouteTableRequest.prototype.networkId = '';
      CreateRouteTableRequest.prototype.staticRoutes = $util.emptyArray;
      CreateRouteTableRequest.encode = function encode(m, w) {
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
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(42).string(m.networkId);
        if (m.staticRoutes != null && m.staticRoutes.length) {
          for (let i = 0; i < m.staticRoutes.length; ++i) $root.api.vpc.v1.StaticRoute.encode(m.staticRoutes[i], w.uint32(50).fork()).ldelim();
        }
        return w;
      };
      CreateRouteTableRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CreateRouteTableRequest(),
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
              m.networkId = r.string();
              break;
            case 6:
              if (!(m.staticRoutes && m.staticRoutes.length)) m.staticRoutes = [];
              m.staticRoutes.push($root.api.vpc.v1.StaticRoute.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateRouteTableRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateRouteTableMetadata = (function() {
      function CreateRouteTableMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateRouteTableMetadata.prototype.routeTableId = '';
      CreateRouteTableMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
        return w;
      };
      CreateRouteTableMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CreateRouteTableMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateRouteTableMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateRouteTableRequest = (function() {
      function UpdateRouteTableRequest(p) {
        this.labels = {};
        this.staticRoutes = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateRouteTableRequest.prototype.routeTableId = '';
      UpdateRouteTableRequest.prototype.updateMask = null;
      UpdateRouteTableRequest.prototype.name = '';
      UpdateRouteTableRequest.prototype.description = '';
      UpdateRouteTableRequest.prototype.labels = $util.emptyObject;
      UpdateRouteTableRequest.prototype.staticRoutes = $util.emptyArray;
      UpdateRouteTableRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
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
        if (m.staticRoutes != null && m.staticRoutes.length) {
          for (let i = 0; i < m.staticRoutes.length; ++i) $root.api.vpc.v1.StaticRoute.encode(m.staticRoutes[i], w.uint32(50).fork()).ldelim();
        }
        return w;
      };
      UpdateRouteTableRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateRouteTableRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
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
            case 6:
              if (!(m.staticRoutes && m.staticRoutes.length)) m.staticRoutes = [];
              m.staticRoutes.push($root.api.vpc.v1.StaticRoute.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateRouteTableRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateRouteTableMetadata = (function() {
      function UpdateRouteTableMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateRouteTableMetadata.prototype.routeTableId = '';
      UpdateRouteTableMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
        return w;
      };
      UpdateRouteTableMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateRouteTableMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateRouteTableMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteRouteTableRequest = (function() {
      function DeleteRouteTableRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteRouteTableRequest.prototype.routeTableId = '';
      DeleteRouteTableRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
        return w;
      };
      DeleteRouteTableRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.DeleteRouteTableRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteRouteTableRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteRouteTableMetadata = (function() {
      function DeleteRouteTableMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteRouteTableMetadata.prototype.routeTableId = '';
      DeleteRouteTableMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
        return w;
      };
      DeleteRouteTableMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.DeleteRouteTableMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteRouteTableMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListRouteTableOperationsRequest = (function() {
      function ListRouteTableOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRouteTableOperationsRequest.prototype.routeTableId = '';
      ListRouteTableOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListRouteTableOperationsRequest.prototype.pageToken = '';
      ListRouteTableOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListRouteTableOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListRouteTableOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
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
      return ListRouteTableOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRouteTableOperationsResponse = (function() {
      function ListRouteTableOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRouteTableOperationsResponse.prototype.operations = $util.emptyArray;
      ListRouteTableOperationsResponse.prototype.nextPageToken = '';
      ListRouteTableOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListRouteTableOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListRouteTableOperationsResponse();
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
      return ListRouteTableOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.MoveRouteTableRequest = (function() {
      function MoveRouteTableRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MoveRouteTableRequest.prototype.routeTableId = '';
      MoveRouteTableRequest.prototype.destinationFolderId = '';
      MoveRouteTableRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
        if (m.destinationFolderId != null && m.hasOwnProperty('destinationFolderId')) w.uint32(18).string(m.destinationFolderId);
        return w;
      };
      MoveRouteTableRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.MoveRouteTableRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
              break;
            case 2:
              m.destinationFolderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MoveRouteTableRequest;
    })();
  })(root);
  (function($root) {
    $root.MoveRouteTableMetadata = (function() {
      function MoveRouteTableMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MoveRouteTableMetadata.prototype.routeTableId = '';
      MoveRouteTableMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(10).string(m.routeTableId);
        return w;
      };
      MoveRouteTableMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.MoveRouteTableMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MoveRouteTableMetadata;
    })();
  })(root);
  (function($root) {
    $root.SecurityGroup = (function() {
      function SecurityGroup(p) {
        this.labels = {};
        this.rules = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SecurityGroup.prototype.id = '';
      SecurityGroup.prototype.folderId = '';
      SecurityGroup.prototype.createdAt = null;
      SecurityGroup.prototype.name = '';
      SecurityGroup.prototype.description = '';
      SecurityGroup.prototype.labels = $util.emptyObject;
      SecurityGroup.prototype.networkId = '';
      SecurityGroup.prototype.status = 0;
      SecurityGroup.prototype.rules = $util.emptyArray;
      SecurityGroup.encode = function encode(m, w) {
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
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(58).string(m.networkId);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(64).int32(m.status);
        if (m.rules != null && m.rules.length) {
          for (let i = 0; i < m.rules.length; ++i) $root.api.vpc.v1.SecurityGroupRule.encode(m.rules[i], w.uint32(74).fork()).ldelim();
        }
        return w;
      };
      SecurityGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.SecurityGroup(),
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
              m.networkId = r.string();
              break;
            case 8:
              m.status = r.int32();
              break;
            case 9:
              if (!(m.rules && m.rules.length)) m.rules = [];
              m.rules.push($root.api.vpc.v1.SecurityGroupRule.decode(r, r.uint32()));
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
        values[(valuesById[3] = 'UPDATING')] = 3;
        values[(valuesById[4] = 'DELETING')] = 4;
        return values;
      })();
      SecurityGroup.Status = Status;
      return SecurityGroup;
    })();
  })(root);
  (function($root) {
    $root.SecurityGroupRule = (function() {
      function SecurityGroupRule(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SecurityGroupRule.prototype.id = '';
      SecurityGroupRule.prototype.description = '';
      SecurityGroupRule.prototype.labels = $util.emptyObject;
      SecurityGroupRule.prototype.direction = 0;
      SecurityGroupRule.prototype.ports = null;
      SecurityGroupRule.prototype.protocolName = '';
      SecurityGroupRule.prototype.protocolNumber = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      SecurityGroupRule.prototype.cidrBlocks = null;
      let $oneOfFields;
      Object.defineProperty(SecurityGroupRule.prototype, 'target', {
        get: $util.oneOfGetter(($oneOfFields = ['cidrBlocks'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      SecurityGroupRule.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(26)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.direction != null && m.hasOwnProperty('direction')) w.uint32(32).int32(m.direction);
        if (m.ports != null && m.hasOwnProperty('ports')) $root.api.vpc.v1.PortRange.encode(m.ports, w.uint32(42).fork()).ldelim();
        if (m.protocolName != null && m.hasOwnProperty('protocolName')) w.uint32(50).string(m.protocolName);
        if (m.protocolNumber != null && m.hasOwnProperty('protocolNumber')) w.uint32(56).int64(m.protocolNumber);
        if (m.cidrBlocks != null && m.hasOwnProperty('cidrBlocks')) $root.api.vpc.v1.CidrBlocks.encode(m.cidrBlocks, w.uint32(66).fork()).ldelim();
        return w;
      };
      SecurityGroupRule.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.SecurityGroupRule(),
          k;
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
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 4:
              m.direction = r.int32();
              break;
            case 5:
              m.ports = $root.api.vpc.v1.PortRange.decode(r, r.uint32());
              break;
            case 6:
              m.protocolName = r.string();
              break;
            case 7:
              m.protocolNumber = r.int64();
              break;
            case 8:
              m.cidrBlocks = $root.api.vpc.v1.CidrBlocks.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Direction = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'DIRECTION_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'INGRESS')] = 1;
        values[(valuesById[2] = 'EGRESS')] = 2;
        return values;
      })();
      SecurityGroupRule.Direction = Direction;
      return SecurityGroupRule;
    })();
  })(root);
  (function($root) {
    $root.PortRange = (function() {
      function PortRange(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PortRange.prototype.fromPort = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      PortRange.prototype.toPort = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      PortRange.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.fromPort != null && m.hasOwnProperty('fromPort')) w.uint32(8).int64(m.fromPort);
        if (m.toPort != null && m.hasOwnProperty('toPort')) w.uint32(16).int64(m.toPort);
        return w;
      };
      PortRange.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.PortRange();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.fromPort = r.int64();
              break;
            case 2:
              m.toPort = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return PortRange;
    })();
  })(root);
  (function($root) {
    $root.CidrBlocks = (function() {
      function CidrBlocks(p) {
        this.v4CidrBlocks = [];
        this.v6CidrBlocks = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CidrBlocks.prototype.v4CidrBlocks = $util.emptyArray;
      CidrBlocks.prototype.v6CidrBlocks = $util.emptyArray;
      CidrBlocks.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.v4CidrBlocks != null && m.v4CidrBlocks.length) {
          for (let i = 0; i < m.v4CidrBlocks.length; ++i) w.uint32(10).string(m.v4CidrBlocks[i]);
        }
        if (m.v6CidrBlocks != null && m.v6CidrBlocks.length) {
          for (let i = 0; i < m.v6CidrBlocks.length; ++i) w.uint32(18).string(m.v6CidrBlocks[i]);
        }
        return w;
      };
      CidrBlocks.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CidrBlocks();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.v4CidrBlocks && m.v4CidrBlocks.length)) m.v4CidrBlocks = [];
              m.v4CidrBlocks.push(r.string());
              break;
            case 2:
              if (!(m.v6CidrBlocks && m.v6CidrBlocks.length)) m.v6CidrBlocks = [];
              m.v6CidrBlocks.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CidrBlocks;
    })();
  })(root);
  (function($root) {
    $root.SecurityGroupService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.SecurityGroupService.makeGrpcConstructor());
    };
    $root.SecurityGroupService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.GetSecurityGroupRequest,
          responseType: $root.api.vpc.v1.SecurityGroup,
          requestSerialize: r => {
            return $root.api.vpc.v1.GetSecurityGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.GetSecurityGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.SecurityGroup.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.SecurityGroup.decode
        },
        list: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListSecurityGroupsRequest,
          responseType: $root.api.vpc.v1.ListSecurityGroupsResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListSecurityGroupsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListSecurityGroupsRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListSecurityGroupsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListSecurityGroupsResponse.decode
        },
        create: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.CreateSecurityGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.CreateSecurityGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.CreateSecurityGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.UpdateSecurityGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.UpdateSecurityGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.UpdateSecurityGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        updateRules: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.UpdateSecurityGroupRulesRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.UpdateSecurityGroupRulesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.UpdateSecurityGroupRulesRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        updateRule: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.UpdateSecurityGroupRuleRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.UpdateSecurityGroupRuleRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.UpdateSecurityGroupRuleRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.DeleteSecurityGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.DeleteSecurityGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.DeleteSecurityGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        move: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/Move',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.MoveSecurityGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.MoveSecurityGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.MoveSecurityGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListSecurityGroupOperationsRequest,
          responseType: $root.api.vpc.v1.ListSecurityGroupOperationsResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListSecurityGroupOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListSecurityGroupOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListSecurityGroupOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListSecurityGroupOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'vpc';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetSecurityGroupRequest = (function() {
      function GetSecurityGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetSecurityGroupRequest.prototype.securityGroupId = '';
      GetSecurityGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        return w;
      };
      GetSecurityGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.GetSecurityGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetSecurityGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSecurityGroupsRequest = (function() {
      function ListSecurityGroupsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSecurityGroupsRequest.prototype.folderId = '';
      ListSecurityGroupsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSecurityGroupsRequest.prototype.pageToken = '';
      ListSecurityGroupsRequest.prototype.filter = '';
      ListSecurityGroupsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListSecurityGroupsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListSecurityGroupsRequest();
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
      return ListSecurityGroupsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSecurityGroupsResponse = (function() {
      function ListSecurityGroupsResponse(p) {
        this.securityGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSecurityGroupsResponse.prototype.securityGroups = $util.emptyArray;
      ListSecurityGroupsResponse.prototype.nextPageToken = '';
      ListSecurityGroupsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroups != null && m.securityGroups.length) {
          for (let i = 0; i < m.securityGroups.length; ++i) $root.api.vpc.v1.SecurityGroup.encode(m.securityGroups[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSecurityGroupsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListSecurityGroupsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.securityGroups && m.securityGroups.length)) m.securityGroups = [];
              m.securityGroups.push($root.api.vpc.v1.SecurityGroup.decode(r, r.uint32()));
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
      return ListSecurityGroupsResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateSecurityGroupRequest = (function() {
      function CreateSecurityGroupRequest(p) {
        this.labels = {};
        this.ruleSpecs = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateSecurityGroupRequest.prototype.folderId = '';
      CreateSecurityGroupRequest.prototype.name = '';
      CreateSecurityGroupRequest.prototype.description = '';
      CreateSecurityGroupRequest.prototype.labels = $util.emptyObject;
      CreateSecurityGroupRequest.prototype.networkId = '';
      CreateSecurityGroupRequest.prototype.ruleSpecs = $util.emptyArray;
      CreateSecurityGroupRequest.encode = function encode(m, w) {
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
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(42).string(m.networkId);
        if (m.ruleSpecs != null && m.ruleSpecs.length) {
          for (let i = 0; i < m.ruleSpecs.length; ++i) $root.api.vpc.v1.SecurityGroupRuleSpec.encode(m.ruleSpecs[i], w.uint32(50).fork()).ldelim();
        }
        return w;
      };
      CreateSecurityGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CreateSecurityGroupRequest(),
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
              m.networkId = r.string();
              break;
            case 6:
              if (!(m.ruleSpecs && m.ruleSpecs.length)) m.ruleSpecs = [];
              m.ruleSpecs.push($root.api.vpc.v1.SecurityGroupRuleSpec.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateSecurityGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.SecurityGroupRuleSpec = (function() {
      function SecurityGroupRuleSpec(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SecurityGroupRuleSpec.prototype.description = '';
      SecurityGroupRuleSpec.prototype.labels = $util.emptyObject;
      SecurityGroupRuleSpec.prototype.direction = 0;
      SecurityGroupRuleSpec.prototype.ports = null;
      SecurityGroupRuleSpec.prototype.protocolName = '';
      SecurityGroupRuleSpec.prototype.protocolNumber = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      SecurityGroupRuleSpec.prototype.cidrBlocks = null;
      let $oneOfFields;
      Object.defineProperty(SecurityGroupRuleSpec.prototype, 'protocol', {
        get: $util.oneOfGetter(($oneOfFields = ['protocolName', 'protocolNumber'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Object.defineProperty(SecurityGroupRuleSpec.prototype, 'target', {
        get: $util.oneOfGetter(($oneOfFields = ['cidrBlocks'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      SecurityGroupRuleSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(10).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(18)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.direction != null && m.hasOwnProperty('direction')) w.uint32(24).int32(m.direction);
        if (m.ports != null && m.hasOwnProperty('ports')) $root.api.vpc.v1.PortRange.encode(m.ports, w.uint32(34).fork()).ldelim();
        if (m.protocolName != null && m.hasOwnProperty('protocolName')) w.uint32(42).string(m.protocolName);
        if (m.protocolNumber != null && m.hasOwnProperty('protocolNumber')) w.uint32(48).int64(m.protocolNumber);
        if (m.cidrBlocks != null && m.hasOwnProperty('cidrBlocks')) $root.api.vpc.v1.CidrBlocks.encode(m.cidrBlocks, w.uint32(58).fork()).ldelim();
        return w;
      };
      SecurityGroupRuleSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.SecurityGroupRuleSpec(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.description = r.string();
              break;
            case 2:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 3:
              m.direction = r.int32();
              break;
            case 4:
              m.ports = $root.api.vpc.v1.PortRange.decode(r, r.uint32());
              break;
            case 5:
              m.protocolName = r.string();
              break;
            case 6:
              m.protocolNumber = r.int64();
              break;
            case 7:
              m.cidrBlocks = $root.api.vpc.v1.CidrBlocks.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SecurityGroupRuleSpec;
    })();
  })(root);
  (function($root) {
    $root.CreateSecurityGroupMetadata = (function() {
      function CreateSecurityGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateSecurityGroupMetadata.prototype.securityGroupId = '';
      CreateSecurityGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        return w;
      };
      CreateSecurityGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CreateSecurityGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateSecurityGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateSecurityGroupRequest = (function() {
      function UpdateSecurityGroupRequest(p) {
        this.labels = {};
        this.ruleSpecs = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSecurityGroupRequest.prototype.securityGroupId = '';
      UpdateSecurityGroupRequest.prototype.updateMask = null;
      UpdateSecurityGroupRequest.prototype.name = '';
      UpdateSecurityGroupRequest.prototype.description = '';
      UpdateSecurityGroupRequest.prototype.labels = $util.emptyObject;
      UpdateSecurityGroupRequest.prototype.ruleSpecs = $util.emptyArray;
      UpdateSecurityGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
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
        if (m.ruleSpecs != null && m.ruleSpecs.length) {
          for (let i = 0; i < m.ruleSpecs.length; ++i) $root.api.vpc.v1.SecurityGroupRuleSpec.encode(m.ruleSpecs[i], w.uint32(50).fork()).ldelim();
        }
        return w;
      };
      UpdateSecurityGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateSecurityGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
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
            case 6:
              if (!(m.ruleSpecs && m.ruleSpecs.length)) m.ruleSpecs = [];
              m.ruleSpecs.push($root.api.vpc.v1.SecurityGroupRuleSpec.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSecurityGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateSecurityGroupMetadata = (function() {
      function UpdateSecurityGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSecurityGroupMetadata.prototype.securityGroupId = '';
      UpdateSecurityGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        return w;
      };
      UpdateSecurityGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateSecurityGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSecurityGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateSecurityGroupRulesRequest = (function() {
      function UpdateSecurityGroupRulesRequest(p) {
        this.deletionRuleIds = [];
        this.additionRuleSpecs = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSecurityGroupRulesRequest.prototype.securityGroupId = '';
      UpdateSecurityGroupRulesRequest.prototype.deletionRuleIds = $util.emptyArray;
      UpdateSecurityGroupRulesRequest.prototype.additionRuleSpecs = $util.emptyArray;
      UpdateSecurityGroupRulesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        if (m.deletionRuleIds != null && m.deletionRuleIds.length) {
          for (let i = 0; i < m.deletionRuleIds.length; ++i) w.uint32(18).string(m.deletionRuleIds[i]);
        }
        if (m.additionRuleSpecs != null && m.additionRuleSpecs.length) {
          for (let i = 0; i < m.additionRuleSpecs.length; ++i) $root.api.vpc.v1.SecurityGroupRuleSpec.encode(m.additionRuleSpecs[i], w.uint32(26).fork()).ldelim();
        }
        return w;
      };
      UpdateSecurityGroupRulesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateSecurityGroupRulesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            case 2:
              if (!(m.deletionRuleIds && m.deletionRuleIds.length)) m.deletionRuleIds = [];
              m.deletionRuleIds.push(r.string());
              break;
            case 3:
              if (!(m.additionRuleSpecs && m.additionRuleSpecs.length)) m.additionRuleSpecs = [];
              m.additionRuleSpecs.push($root.api.vpc.v1.SecurityGroupRuleSpec.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSecurityGroupRulesRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateSecurityGroupRuleRequest = (function() {
      function UpdateSecurityGroupRuleRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSecurityGroupRuleRequest.prototype.securityGroupId = '';
      UpdateSecurityGroupRuleRequest.prototype.ruleId = '';
      UpdateSecurityGroupRuleRequest.prototype.updateMask = null;
      UpdateSecurityGroupRuleRequest.prototype.description = '';
      UpdateSecurityGroupRuleRequest.prototype.labels = $util.emptyObject;
      UpdateSecurityGroupRuleRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        if (m.ruleId != null && m.hasOwnProperty('ruleId')) w.uint32(18).string(m.ruleId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(26).fork()).ldelim();
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
      UpdateSecurityGroupRuleRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateSecurityGroupRuleRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            case 2:
              m.ruleId = r.string();
              break;
            case 3:
              m.updateMask = $root.contrib.google.protobuf.FieldMask.decode(r, r.uint32());
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
      return UpdateSecurityGroupRuleRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateSecurityGroupRuleMetadata = (function() {
      function UpdateSecurityGroupRuleMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSecurityGroupRuleMetadata.prototype.securityGroupId = '';
      UpdateSecurityGroupRuleMetadata.prototype.ruleId = '';
      UpdateSecurityGroupRuleMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        if (m.ruleId != null && m.hasOwnProperty('ruleId')) w.uint32(18).string(m.ruleId);
        return w;
      };
      UpdateSecurityGroupRuleMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateSecurityGroupRuleMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            case 2:
              m.ruleId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSecurityGroupRuleMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteSecurityGroupRequest = (function() {
      function DeleteSecurityGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteSecurityGroupRequest.prototype.securityGroupId = '';
      DeleteSecurityGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        return w;
      };
      DeleteSecurityGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.DeleteSecurityGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteSecurityGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteSecurityGroupMetadata = (function() {
      function DeleteSecurityGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteSecurityGroupMetadata.prototype.securityGroupId = '';
      DeleteSecurityGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        return w;
      };
      DeleteSecurityGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.DeleteSecurityGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteSecurityGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListSecurityGroupOperationsRequest = (function() {
      function ListSecurityGroupOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSecurityGroupOperationsRequest.prototype.securityGroupId = '';
      ListSecurityGroupOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSecurityGroupOperationsRequest.prototype.pageToken = '';
      ListSecurityGroupOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListSecurityGroupOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListSecurityGroupOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
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
      return ListSecurityGroupOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSecurityGroupOperationsResponse = (function() {
      function ListSecurityGroupOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSecurityGroupOperationsResponse.prototype.operations = $util.emptyArray;
      ListSecurityGroupOperationsResponse.prototype.nextPageToken = '';
      ListSecurityGroupOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSecurityGroupOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListSecurityGroupOperationsResponse();
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
      return ListSecurityGroupOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.MoveSecurityGroupRequest = (function() {
      function MoveSecurityGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MoveSecurityGroupRequest.prototype.securityGroupId = '';
      MoveSecurityGroupRequest.prototype.destinationFolderId = '';
      MoveSecurityGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        if (m.destinationFolderId != null && m.hasOwnProperty('destinationFolderId')) w.uint32(18).string(m.destinationFolderId);
        return w;
      };
      MoveSecurityGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.MoveSecurityGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            case 2:
              m.destinationFolderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MoveSecurityGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.MoveSecurityGroupMetadata = (function() {
      function MoveSecurityGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MoveSecurityGroupMetadata.prototype.securityGroupId = '';
      MoveSecurityGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.securityGroupId != null && m.hasOwnProperty('securityGroupId')) w.uint32(10).string(m.securityGroupId);
        return w;
      };
      MoveSecurityGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.MoveSecurityGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.securityGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MoveSecurityGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.Subnet = (function() {
      function Subnet(p) {
        this.labels = {};
        this.v4CidrBlocks = [];
        this.v6CidrBlocks = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Subnet.prototype.id = '';
      Subnet.prototype.folderId = '';
      Subnet.prototype.createdAt = null;
      Subnet.prototype.name = '';
      Subnet.prototype.description = '';
      Subnet.prototype.labels = $util.emptyObject;
      Subnet.prototype.networkId = '';
      Subnet.prototype.zoneId = '';
      Subnet.prototype.v4CidrBlocks = $util.emptyArray;
      Subnet.prototype.v6CidrBlocks = $util.emptyArray;
      Subnet.prototype.routeTableId = '';
      Subnet.encode = function encode(m, w) {
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
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(58).string(m.networkId);
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(66).string(m.zoneId);
        if (m.v4CidrBlocks != null && m.v4CidrBlocks.length) {
          for (let i = 0; i < m.v4CidrBlocks.length; ++i) w.uint32(82).string(m.v4CidrBlocks[i]);
        }
        if (m.v6CidrBlocks != null && m.v6CidrBlocks.length) {
          for (let i = 0; i < m.v6CidrBlocks.length; ++i) w.uint32(90).string(m.v6CidrBlocks[i]);
        }
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(98).string(m.routeTableId);
        return w;
      };
      Subnet.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.Subnet(),
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
              m.networkId = r.string();
              break;
            case 8:
              m.zoneId = r.string();
              break;
            case 10:
              if (!(m.v4CidrBlocks && m.v4CidrBlocks.length)) m.v4CidrBlocks = [];
              m.v4CidrBlocks.push(r.string());
              break;
            case 11:
              if (!(m.v6CidrBlocks && m.v6CidrBlocks.length)) m.v6CidrBlocks = [];
              m.v6CidrBlocks.push(r.string());
              break;
            case 12:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Subnet;
    })();
  })(root);
  (function($root) {
    $root.SubnetService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.SubnetService.makeGrpcConstructor());
    };
    $root.SubnetService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.vpc.v1.SubnetService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.GetSubnetRequest,
          responseType: $root.api.vpc.v1.Subnet,
          requestSerialize: r => {
            return $root.api.vpc.v1.GetSubnetRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.GetSubnetRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.Subnet.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.Subnet.decode
        },
        list: {
          path: '/yandex.cloud.vpc.v1.SubnetService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListSubnetsRequest,
          responseType: $root.api.vpc.v1.ListSubnetsResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListSubnetsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListSubnetsRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListSubnetsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListSubnetsResponse.decode
        },
        create: {
          path: '/yandex.cloud.vpc.v1.SubnetService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.CreateSubnetRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.CreateSubnetRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.CreateSubnetRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.vpc.v1.SubnetService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.UpdateSubnetRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.UpdateSubnetRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.UpdateSubnetRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.vpc.v1.SubnetService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.DeleteSubnetRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.DeleteSubnetRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.DeleteSubnetRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.vpc.v1.SubnetService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.ListSubnetOperationsRequest,
          responseType: $root.api.vpc.v1.ListSubnetOperationsResponse,
          requestSerialize: r => {
            return $root.api.vpc.v1.ListSubnetOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.ListSubnetOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.vpc.v1.ListSubnetOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.vpc.v1.ListSubnetOperationsResponse.decode
        },
        move: {
          path: '/yandex.cloud.vpc.v1.SubnetService/Move',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.vpc.v1.MoveSubnetRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.vpc.v1.MoveSubnetRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.vpc.v1.MoveSubnetRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        }
      });
      ctor.__endpointId = 'vpc';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetSubnetRequest = (function() {
      function GetSubnetRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetSubnetRequest.prototype.subnetId = '';
      GetSubnetRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        return w;
      };
      GetSubnetRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.GetSubnetRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetSubnetRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSubnetsRequest = (function() {
      function ListSubnetsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSubnetsRequest.prototype.folderId = '';
      ListSubnetsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSubnetsRequest.prototype.pageToken = '';
      ListSubnetsRequest.prototype.filter = '';
      ListSubnetsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListSubnetsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListSubnetsRequest();
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
      return ListSubnetsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSubnetsResponse = (function() {
      function ListSubnetsResponse(p) {
        this.subnets = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSubnetsResponse.prototype.subnets = $util.emptyArray;
      ListSubnetsResponse.prototype.nextPageToken = '';
      ListSubnetsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnets != null && m.subnets.length) {
          for (let i = 0; i < m.subnets.length; ++i) $root.api.vpc.v1.Subnet.encode(m.subnets[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSubnetsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListSubnetsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.subnets && m.subnets.length)) m.subnets = [];
              m.subnets.push($root.api.vpc.v1.Subnet.decode(r, r.uint32()));
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
      return ListSubnetsResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateSubnetRequest = (function() {
      function CreateSubnetRequest(p) {
        this.labels = {};
        this.v4CidrBlocks = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateSubnetRequest.prototype.folderId = '';
      CreateSubnetRequest.prototype.name = '';
      CreateSubnetRequest.prototype.description = '';
      CreateSubnetRequest.prototype.labels = $util.emptyObject;
      CreateSubnetRequest.prototype.networkId = '';
      CreateSubnetRequest.prototype.zoneId = '';
      CreateSubnetRequest.prototype.v4CidrBlocks = $util.emptyArray;
      CreateSubnetRequest.prototype.routeTableId = '';
      CreateSubnetRequest.encode = function encode(m, w) {
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
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(42).string(m.networkId);
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(50).string(m.zoneId);
        if (m.v4CidrBlocks != null && m.v4CidrBlocks.length) {
          for (let i = 0; i < m.v4CidrBlocks.length; ++i) w.uint32(58).string(m.v4CidrBlocks[i]);
        }
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(74).string(m.routeTableId);
        return w;
      };
      CreateSubnetRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CreateSubnetRequest(),
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
              m.networkId = r.string();
              break;
            case 6:
              m.zoneId = r.string();
              break;
            case 7:
              if (!(m.v4CidrBlocks && m.v4CidrBlocks.length)) m.v4CidrBlocks = [];
              m.v4CidrBlocks.push(r.string());
              break;
            case 9:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateSubnetRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateSubnetMetadata = (function() {
      function CreateSubnetMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateSubnetMetadata.prototype.subnetId = '';
      CreateSubnetMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        return w;
      };
      CreateSubnetMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.CreateSubnetMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateSubnetMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateSubnetRequest = (function() {
      function UpdateSubnetRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSubnetRequest.prototype.subnetId = '';
      UpdateSubnetRequest.prototype.updateMask = null;
      UpdateSubnetRequest.prototype.name = '';
      UpdateSubnetRequest.prototype.description = '';
      UpdateSubnetRequest.prototype.labels = $util.emptyObject;
      UpdateSubnetRequest.prototype.routeTableId = '';
      UpdateSubnetRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
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
        if (m.routeTableId != null && m.hasOwnProperty('routeTableId')) w.uint32(50).string(m.routeTableId);
        return w;
      };
      UpdateSubnetRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateSubnetRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
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
            case 6:
              m.routeTableId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSubnetRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateSubnetMetadata = (function() {
      function UpdateSubnetMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSubnetMetadata.prototype.subnetId = '';
      UpdateSubnetMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        return w;
      };
      UpdateSubnetMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.UpdateSubnetMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSubnetMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteSubnetRequest = (function() {
      function DeleteSubnetRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteSubnetRequest.prototype.subnetId = '';
      DeleteSubnetRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        return w;
      };
      DeleteSubnetRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.DeleteSubnetRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteSubnetRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteSubnetMetadata = (function() {
      function DeleteSubnetMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteSubnetMetadata.prototype.subnetId = '';
      DeleteSubnetMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        return w;
      };
      DeleteSubnetMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.DeleteSubnetMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteSubnetMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListSubnetOperationsRequest = (function() {
      function ListSubnetOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSubnetOperationsRequest.prototype.subnetId = '';
      ListSubnetOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSubnetOperationsRequest.prototype.pageToken = '';
      ListSubnetOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListSubnetOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListSubnetOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
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
      return ListSubnetOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSubnetOperationsResponse = (function() {
      function ListSubnetOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSubnetOperationsResponse.prototype.operations = $util.emptyArray;
      ListSubnetOperationsResponse.prototype.nextPageToken = '';
      ListSubnetOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSubnetOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.ListSubnetOperationsResponse();
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
      return ListSubnetOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.MoveSubnetRequest = (function() {
      function MoveSubnetRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MoveSubnetRequest.prototype.subnetId = '';
      MoveSubnetRequest.prototype.destinationFolderId = '';
      MoveSubnetRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        if (m.destinationFolderId != null && m.hasOwnProperty('destinationFolderId')) w.uint32(18).string(m.destinationFolderId);
        return w;
      };
      MoveSubnetRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.MoveSubnetRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            case 2:
              m.destinationFolderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MoveSubnetRequest;
    })();
  })(root);
  (function($root) {
    $root.MoveSubnetMetadata = (function() {
      function MoveSubnetMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MoveSubnetMetadata.prototype.subnetId = '';
      MoveSubnetMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        return w;
      };
      MoveSubnetMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.vpc.v1.MoveSubnetMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MoveSubnetMetadata;
    })();
  })(root);
  registar.register('api.vpc.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
