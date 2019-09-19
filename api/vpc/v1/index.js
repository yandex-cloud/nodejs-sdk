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
  registar.register('api.vpc.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
