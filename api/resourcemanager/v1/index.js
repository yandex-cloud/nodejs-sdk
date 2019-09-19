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
    $root.Cloud = (function() {
      function Cloud(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Cloud.prototype.id = '';
      Cloud.prototype.createdAt = null;
      Cloud.prototype.name = '';
      Cloud.prototype.description = '';
      Cloud.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        return w;
      };
      Cloud.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.Cloud();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
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
      return Cloud;
    })();
  })(root);
  (function($root) {
    $root.CloudService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.CloudService.makeGrpcConstructor());
    };
    $root.CloudService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.resourcemanager.v1.CloudService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.GetCloudRequest,
          responseType: $root.api.resourcemanager.v1.Cloud,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.GetCloudRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.GetCloudRequest.decode,
          responseSerialize: r => {
            return $root.api.resourcemanager.v1.Cloud.encode(r).finish();
          },
          responseDeserialize: $root.api.resourcemanager.v1.Cloud.decode
        },
        list: {
          path: '/yandex.cloud.resourcemanager.v1.CloudService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.ListCloudsRequest,
          responseType: $root.api.resourcemanager.v1.ListCloudsResponse,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.ListCloudsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.ListCloudsRequest.decode,
          responseSerialize: r => {
            return $root.api.resourcemanager.v1.ListCloudsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.resourcemanager.v1.ListCloudsResponse.decode
        },
        update: {
          path: '/yandex.cloud.resourcemanager.v1.CloudService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.UpdateCloudRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.UpdateCloudRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.UpdateCloudRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.resourcemanager.v1.CloudService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.ListCloudOperationsRequest,
          responseType: $root.api.resourcemanager.v1.ListCloudOperationsResponse,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.ListCloudOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.ListCloudOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.resourcemanager.v1.ListCloudOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.resourcemanager.v1.ListCloudOperationsResponse.decode
        },
        listAccessBindings: {
          path: '/yandex.cloud.resourcemanager.v1.CloudService/ListAccessBindings',
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
          path: '/yandex.cloud.resourcemanager.v1.CloudService/SetAccessBindings',
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
          path: '/yandex.cloud.resourcemanager.v1.CloudService/UpdateAccessBindings',
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
      ctor.__endpointId = 'resource-manager';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetCloudRequest = (function() {
      function GetCloudRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetCloudRequest.prototype.cloudId = '';
      GetCloudRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.cloudId != null && m.hasOwnProperty('cloudId')) w.uint32(10).string(m.cloudId);
        return w;
      };
      GetCloudRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.GetCloudRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.cloudId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetCloudRequest;
    })();
  })(root);
  (function($root) {
    $root.ListCloudsRequest = (function() {
      function ListCloudsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListCloudsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListCloudsRequest.prototype.pageToken = '';
      ListCloudsRequest.prototype.filter = '';
      ListCloudsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(8).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(18).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(26).string(m.filter);
        return w;
      };
      ListCloudsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.ListCloudsRequest();
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
      return ListCloudsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListCloudsResponse = (function() {
      function ListCloudsResponse(p) {
        this.clouds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListCloudsResponse.prototype.clouds = $util.emptyArray;
      ListCloudsResponse.prototype.nextPageToken = '';
      ListCloudsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clouds != null && m.clouds.length) {
          for (let i = 0; i < m.clouds.length; ++i) $root.api.resourcemanager.v1.Cloud.encode(m.clouds[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListCloudsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.ListCloudsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.clouds && m.clouds.length)) m.clouds = [];
              m.clouds.push($root.api.resourcemanager.v1.Cloud.decode(r, r.uint32()));
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
      return ListCloudsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListCloudOperationsRequest = (function() {
      function ListCloudOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListCloudOperationsRequest.prototype.cloudId = '';
      ListCloudOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListCloudOperationsRequest.prototype.pageToken = '';
      ListCloudOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.cloudId != null && m.hasOwnProperty('cloudId')) w.uint32(10).string(m.cloudId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListCloudOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.ListCloudOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.cloudId = r.string();
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
      return ListCloudOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListCloudOperationsResponse = (function() {
      function ListCloudOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListCloudOperationsResponse.prototype.operations = $util.emptyArray;
      ListCloudOperationsResponse.prototype.nextPageToken = '';
      ListCloudOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListCloudOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.ListCloudOperationsResponse();
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
      return ListCloudOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.UpdateCloudRequest = (function() {
      function UpdateCloudRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateCloudRequest.prototype.cloudId = '';
      UpdateCloudRequest.prototype.updateMask = null;
      UpdateCloudRequest.prototype.name = '';
      UpdateCloudRequest.prototype.description = '';
      UpdateCloudRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.cloudId != null && m.hasOwnProperty('cloudId')) w.uint32(10).string(m.cloudId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        return w;
      };
      UpdateCloudRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.UpdateCloudRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.cloudId = r.string();
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
      return UpdateCloudRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateCloudMetadata = (function() {
      function UpdateCloudMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateCloudMetadata.prototype.cloudId = '';
      UpdateCloudMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.cloudId != null && m.hasOwnProperty('cloudId')) w.uint32(10).string(m.cloudId);
        return w;
      };
      UpdateCloudMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.UpdateCloudMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.cloudId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateCloudMetadata;
    })();
  })(root);
  (function($root) {
    $root.Folder = (function() {
      function Folder(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Folder.prototype.id = '';
      Folder.prototype.cloudId = '';
      Folder.prototype.createdAt = null;
      Folder.prototype.name = '';
      Folder.prototype.description = '';
      Folder.prototype.labels = $util.emptyObject;
      Folder.prototype.status = 0;
      Folder.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.cloudId != null && m.hasOwnProperty('cloudId')) w.uint32(18).string(m.cloudId);
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
        return w;
      };
      Folder.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.Folder(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.cloudId = r.string();
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
        values[(valuesById[2] = 'DELETING')] = 2;
        return values;
      })();
      Folder.Status = Status;
      return Folder;
    })();
  })(root);
  (function($root) {
    $root.FolderService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.FolderService.makeGrpcConstructor());
    };
    $root.FolderService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.resourcemanager.v1.FolderService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.GetFolderRequest,
          responseType: $root.api.resourcemanager.v1.Folder,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.GetFolderRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.GetFolderRequest.decode,
          responseSerialize: r => {
            return $root.api.resourcemanager.v1.Folder.encode(r).finish();
          },
          responseDeserialize: $root.api.resourcemanager.v1.Folder.decode
        },
        list: {
          path: '/yandex.cloud.resourcemanager.v1.FolderService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.ListFoldersRequest,
          responseType: $root.api.resourcemanager.v1.ListFoldersResponse,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.ListFoldersRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.ListFoldersRequest.decode,
          responseSerialize: r => {
            return $root.api.resourcemanager.v1.ListFoldersResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.resourcemanager.v1.ListFoldersResponse.decode
        },
        create: {
          path: '/yandex.cloud.resourcemanager.v1.FolderService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.CreateFolderRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.CreateFolderRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.CreateFolderRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.resourcemanager.v1.FolderService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.UpdateFolderRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.UpdateFolderRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.UpdateFolderRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.resourcemanager.v1.FolderService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.DeleteFolderRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.DeleteFolderRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.DeleteFolderRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.resourcemanager.v1.FolderService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.resourcemanager.v1.ListFolderOperationsRequest,
          responseType: $root.api.resourcemanager.v1.ListFolderOperationsResponse,
          requestSerialize: r => {
            return $root.api.resourcemanager.v1.ListFolderOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.resourcemanager.v1.ListFolderOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.resourcemanager.v1.ListFolderOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.resourcemanager.v1.ListFolderOperationsResponse.decode
        },
        listAccessBindings: {
          path: '/yandex.cloud.resourcemanager.v1.FolderService/ListAccessBindings',
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
          path: '/yandex.cloud.resourcemanager.v1.FolderService/SetAccessBindings',
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
          path: '/yandex.cloud.resourcemanager.v1.FolderService/UpdateAccessBindings',
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
      ctor.__endpointId = 'resource-manager';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetFolderRequest = (function() {
      function GetFolderRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetFolderRequest.prototype.folderId = '';
      GetFolderRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        return w;
      };
      GetFolderRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.GetFolderRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetFolderRequest;
    })();
  })(root);
  (function($root) {
    $root.ListFoldersRequest = (function() {
      function ListFoldersRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFoldersRequest.prototype.cloudId = '';
      ListFoldersRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListFoldersRequest.prototype.pageToken = '';
      ListFoldersRequest.prototype.filter = '';
      ListFoldersRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.cloudId != null && m.hasOwnProperty('cloudId')) w.uint32(10).string(m.cloudId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListFoldersRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.ListFoldersRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.cloudId = r.string();
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
      return ListFoldersRequest;
    })();
  })(root);
  (function($root) {
    $root.ListFoldersResponse = (function() {
      function ListFoldersResponse(p) {
        this.folders = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFoldersResponse.prototype.folders = $util.emptyArray;
      ListFoldersResponse.prototype.nextPageToken = '';
      ListFoldersResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folders != null && m.folders.length) {
          for (let i = 0; i < m.folders.length; ++i) $root.api.resourcemanager.v1.Folder.encode(m.folders[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListFoldersResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.ListFoldersResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.folders && m.folders.length)) m.folders = [];
              m.folders.push($root.api.resourcemanager.v1.Folder.decode(r, r.uint32()));
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
      return ListFoldersResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateFolderRequest = (function() {
      function CreateFolderRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateFolderRequest.prototype.cloudId = '';
      CreateFolderRequest.prototype.name = '';
      CreateFolderRequest.prototype.description = '';
      CreateFolderRequest.prototype.labels = $util.emptyObject;
      CreateFolderRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.cloudId != null && m.hasOwnProperty('cloudId')) w.uint32(10).string(m.cloudId);
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
      CreateFolderRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.CreateFolderRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.cloudId = r.string();
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
      return CreateFolderRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateFolderMetadata = (function() {
      function CreateFolderMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateFolderMetadata.prototype.folderId = '';
      CreateFolderMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        return w;
      };
      CreateFolderMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.CreateFolderMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateFolderMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateFolderRequest = (function() {
      function UpdateFolderRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateFolderRequest.prototype.folderId = '';
      UpdateFolderRequest.prototype.updateMask = null;
      UpdateFolderRequest.prototype.name = '';
      UpdateFolderRequest.prototype.description = '';
      UpdateFolderRequest.prototype.labels = $util.emptyObject;
      UpdateFolderRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
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
      UpdateFolderRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.UpdateFolderRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
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
      return UpdateFolderRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateFolderMetadata = (function() {
      function UpdateFolderMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateFolderMetadata.prototype.folderId = '';
      UpdateFolderMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        return w;
      };
      UpdateFolderMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.UpdateFolderMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateFolderMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteFolderRequest = (function() {
      function DeleteFolderRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteFolderRequest.prototype.folderId = '';
      DeleteFolderRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        return w;
      };
      DeleteFolderRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.DeleteFolderRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteFolderRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteFolderMetadata = (function() {
      function DeleteFolderMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteFolderMetadata.prototype.folderId = '';
      DeleteFolderMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        return w;
      };
      DeleteFolderMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.DeleteFolderMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteFolderMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListFolderOperationsRequest = (function() {
      function ListFolderOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFolderOperationsRequest.prototype.folderId = '';
      ListFolderOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListFolderOperationsRequest.prototype.pageToken = '';
      ListFolderOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListFolderOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.ListFolderOperationsRequest();
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
      return ListFolderOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListFolderOperationsResponse = (function() {
      function ListFolderOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListFolderOperationsResponse.prototype.operations = $util.emptyArray;
      ListFolderOperationsResponse.prototype.nextPageToken = '';
      ListFolderOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListFolderOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.resourcemanager.v1.ListFolderOperationsResponse();
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
      return ListFolderOperationsResponse;
    })();
  })(root);
  registar.register('api.resourcemanager.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
