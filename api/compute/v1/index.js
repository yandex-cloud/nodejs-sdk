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
    $root.Disk = (function() {
      function Disk(p) {
        this.labels = {};
        this.productIds = [];
        this.instanceIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Disk.prototype.id = '';
      Disk.prototype.folderId = '';
      Disk.prototype.createdAt = null;
      Disk.prototype.name = '';
      Disk.prototype.description = '';
      Disk.prototype.labels = $util.emptyObject;
      Disk.prototype.typeId = '';
      Disk.prototype.zoneId = '';
      Disk.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Disk.prototype.productIds = $util.emptyArray;
      Disk.prototype.status = 0;
      Disk.prototype.sourceImageId = '';
      Disk.prototype.sourceSnapshotId = '';
      Disk.prototype.instanceIds = $util.emptyArray;
      let $oneOfFields;
      Object.defineProperty(Disk.prototype, 'source', {
        get: $util.oneOfGetter(($oneOfFields = ['sourceImageId', 'sourceSnapshotId'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Disk.encode = function encode(m, w) {
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
        if (m.typeId != null && m.hasOwnProperty('typeId')) w.uint32(58).string(m.typeId);
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(66).string(m.zoneId);
        if (m.size != null && m.hasOwnProperty('size')) w.uint32(72).int64(m.size);
        if (m.productIds != null && m.productIds.length) {
          for (let i = 0; i < m.productIds.length; ++i) w.uint32(82).string(m.productIds[i]);
        }
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(88).int32(m.status);
        if (m.sourceImageId != null && m.hasOwnProperty('sourceImageId')) w.uint32(98).string(m.sourceImageId);
        if (m.sourceSnapshotId != null && m.hasOwnProperty('sourceSnapshotId')) w.uint32(106).string(m.sourceSnapshotId);
        if (m.instanceIds != null && m.instanceIds.length) {
          for (let i = 0; i < m.instanceIds.length; ++i) w.uint32(114).string(m.instanceIds[i]);
        }
        return w;
      };
      Disk.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.Disk(),
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
              m.typeId = r.string();
              break;
            case 8:
              m.zoneId = r.string();
              break;
            case 9:
              m.size = r.int64();
              break;
            case 10:
              if (!(m.productIds && m.productIds.length)) m.productIds = [];
              m.productIds.push(r.string());
              break;
            case 11:
              m.status = r.int32();
              break;
            case 12:
              m.sourceImageId = r.string();
              break;
            case 13:
              m.sourceSnapshotId = r.string();
              break;
            case 14:
              if (!(m.instanceIds && m.instanceIds.length)) m.instanceIds = [];
              m.instanceIds.push(r.string());
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
        values[(valuesById[2] = 'READY')] = 2;
        values[(valuesById[3] = 'ERROR')] = 3;
        values[(valuesById[4] = 'DELETING')] = 4;
        return values;
      })();
      Disk.Status = Status;
      return Disk;
    })();
  })(root);
  (function($root) {
    $root.DiskService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.DiskService.makeGrpcConstructor());
    };
    $root.DiskService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.compute.v1.DiskService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetDiskRequest,
          responseType: $root.api.compute.v1.Disk,
          requestSerialize: r => {
            return $root.api.compute.v1.GetDiskRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetDiskRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.Disk.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.Disk.decode
        },
        list: {
          path: '/yandex.cloud.compute.v1.DiskService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListDisksRequest,
          responseType: $root.api.compute.v1.ListDisksResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListDisksRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListDisksRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListDisksResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListDisksResponse.decode
        },
        create: {
          path: '/yandex.cloud.compute.v1.DiskService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.CreateDiskRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.CreateDiskRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.CreateDiskRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.compute.v1.DiskService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.UpdateDiskRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.UpdateDiskRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.UpdateDiskRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.compute.v1.DiskService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.DeleteDiskRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.DeleteDiskRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.DeleteDiskRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.compute.v1.DiskService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListDiskOperationsRequest,
          responseType: $root.api.compute.v1.ListDiskOperationsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListDiskOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListDiskOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListDiskOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListDiskOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'compute';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetDiskRequest = (function() {
      function GetDiskRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetDiskRequest.prototype.diskId = '';
      GetDiskRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(10).string(m.diskId);
        return w;
      };
      GetDiskRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetDiskRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetDiskRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDisksRequest = (function() {
      function ListDisksRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDisksRequest.prototype.folderId = '';
      ListDisksRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListDisksRequest.prototype.pageToken = '';
      ListDisksRequest.prototype.filter = '';
      ListDisksRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListDisksRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListDisksRequest();
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
      return ListDisksRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDisksResponse = (function() {
      function ListDisksResponse(p) {
        this.disks = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDisksResponse.prototype.disks = $util.emptyArray;
      ListDisksResponse.prototype.nextPageToken = '';
      ListDisksResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.disks != null && m.disks.length) {
          for (let i = 0; i < m.disks.length; ++i) $root.api.compute.v1.Disk.encode(m.disks[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListDisksResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListDisksResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.disks && m.disks.length)) m.disks = [];
              m.disks.push($root.api.compute.v1.Disk.decode(r, r.uint32()));
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
      return ListDisksResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateDiskRequest = (function() {
      function CreateDiskRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateDiskRequest.prototype.folderId = '';
      CreateDiskRequest.prototype.name = '';
      CreateDiskRequest.prototype.description = '';
      CreateDiskRequest.prototype.labels = $util.emptyObject;
      CreateDiskRequest.prototype.typeId = '';
      CreateDiskRequest.prototype.zoneId = '';
      CreateDiskRequest.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      CreateDiskRequest.prototype.imageId = '';
      CreateDiskRequest.prototype.snapshotId = '';
      let $oneOfFields;
      Object.defineProperty(CreateDiskRequest.prototype, 'source', {
        get: $util.oneOfGetter(($oneOfFields = ['imageId', 'snapshotId'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      CreateDiskRequest.encode = function encode(m, w) {
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
        if (m.typeId != null && m.hasOwnProperty('typeId')) w.uint32(42).string(m.typeId);
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(50).string(m.zoneId);
        if (m.size != null && m.hasOwnProperty('size')) w.uint32(56).int64(m.size);
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(66).string(m.imageId);
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(74).string(m.snapshotId);
        return w;
      };
      CreateDiskRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreateDiskRequest(),
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
              m.typeId = r.string();
              break;
            case 6:
              m.zoneId = r.string();
              break;
            case 7:
              m.size = r.int64();
              break;
            case 8:
              m.imageId = r.string();
              break;
            case 9:
              m.snapshotId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateDiskRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateDiskMetadata = (function() {
      function CreateDiskMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateDiskMetadata.prototype.diskId = '';
      CreateDiskMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(10).string(m.diskId);
        return w;
      };
      CreateDiskMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreateDiskMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateDiskMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateDiskRequest = (function() {
      function UpdateDiskRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateDiskRequest.prototype.diskId = '';
      UpdateDiskRequest.prototype.updateMask = null;
      UpdateDiskRequest.prototype.name = '';
      UpdateDiskRequest.prototype.description = '';
      UpdateDiskRequest.prototype.labels = $util.emptyObject;
      UpdateDiskRequest.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      UpdateDiskRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(10).string(m.diskId);
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
        if (m.size != null && m.hasOwnProperty('size')) w.uint32(48).int64(m.size);
        return w;
      };
      UpdateDiskRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateDiskRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskId = r.string();
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
              m.size = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateDiskRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateDiskMetadata = (function() {
      function UpdateDiskMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateDiskMetadata.prototype.diskId = '';
      UpdateDiskMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(10).string(m.diskId);
        return w;
      };
      UpdateDiskMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateDiskMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateDiskMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteDiskRequest = (function() {
      function DeleteDiskRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteDiskRequest.prototype.diskId = '';
      DeleteDiskRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(10).string(m.diskId);
        return w;
      };
      DeleteDiskRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeleteDiskRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteDiskRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteDiskMetadata = (function() {
      function DeleteDiskMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteDiskMetadata.prototype.diskId = '';
      DeleteDiskMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(10).string(m.diskId);
        return w;
      };
      DeleteDiskMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeleteDiskMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteDiskMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListDiskOperationsRequest = (function() {
      function ListDiskOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDiskOperationsRequest.prototype.diskId = '';
      ListDiskOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListDiskOperationsRequest.prototype.pageToken = '';
      ListDiskOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(10).string(m.diskId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListDiskOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListDiskOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskId = r.string();
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
      return ListDiskOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDiskOperationsResponse = (function() {
      function ListDiskOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDiskOperationsResponse.prototype.operations = $util.emptyArray;
      ListDiskOperationsResponse.prototype.nextPageToken = '';
      ListDiskOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListDiskOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListDiskOperationsResponse();
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
      return ListDiskOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.DiskType = (function() {
      function DiskType(p) {
        this.zoneIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DiskType.prototype.id = '';
      DiskType.prototype.description = '';
      DiskType.prototype.zoneIds = $util.emptyArray;
      DiskType.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
        if (m.zoneIds != null && m.zoneIds.length) {
          for (let i = 0; i < m.zoneIds.length; ++i) w.uint32(26).string(m.zoneIds[i]);
        }
        return w;
      };
      DiskType.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DiskType();
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
              if (!(m.zoneIds && m.zoneIds.length)) m.zoneIds = [];
              m.zoneIds.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DiskType;
    })();
  })(root);
  (function($root) {
    $root.DiskTypeService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.DiskTypeService.makeGrpcConstructor());
    };
    $root.DiskTypeService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.compute.v1.DiskTypeService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetDiskTypeRequest,
          responseType: $root.api.compute.v1.DiskType,
          requestSerialize: r => {
            return $root.api.compute.v1.GetDiskTypeRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetDiskTypeRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.DiskType.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.DiskType.decode
        },
        list: {
          path: '/yandex.cloud.compute.v1.DiskTypeService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListDiskTypesRequest,
          responseType: $root.api.compute.v1.ListDiskTypesResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListDiskTypesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListDiskTypesRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListDiskTypesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListDiskTypesResponse.decode
        }
      });
      ctor.__endpointId = 'compute';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetDiskTypeRequest = (function() {
      function GetDiskTypeRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetDiskTypeRequest.prototype.diskTypeId = '';
      GetDiskTypeRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskTypeId != null && m.hasOwnProperty('diskTypeId')) w.uint32(10).string(m.diskTypeId);
        return w;
      };
      GetDiskTypeRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetDiskTypeRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskTypeId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetDiskTypeRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDiskTypesRequest = (function() {
      function ListDiskTypesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDiskTypesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListDiskTypesRequest.prototype.pageToken = '';
      ListDiskTypesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(8).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(18).string(m.pageToken);
        return w;
      };
      ListDiskTypesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListDiskTypesRequest();
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
      return ListDiskTypesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDiskTypesResponse = (function() {
      function ListDiskTypesResponse(p) {
        this.diskTypes = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDiskTypesResponse.prototype.diskTypes = $util.emptyArray;
      ListDiskTypesResponse.prototype.nextPageToken = '';
      ListDiskTypesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskTypes != null && m.diskTypes.length) {
          for (let i = 0; i < m.diskTypes.length; ++i) $root.api.compute.v1.DiskType.encode(m.diskTypes[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListDiskTypesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListDiskTypesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.diskTypes && m.diskTypes.length)) m.diskTypes = [];
              m.diskTypes.push($root.api.compute.v1.DiskType.decode(r, r.uint32()));
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
      return ListDiskTypesResponse;
    })();
  })(root);
  (function($root) {
    $root.Image = (function() {
      function Image(p) {
        this.labels = {};
        this.productIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Image.prototype.id = '';
      Image.prototype.folderId = '';
      Image.prototype.createdAt = null;
      Image.prototype.name = '';
      Image.prototype.description = '';
      Image.prototype.labels = $util.emptyObject;
      Image.prototype.family = '';
      Image.prototype.storageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Image.prototype.minDiskSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Image.prototype.productIds = $util.emptyArray;
      Image.prototype.status = 0;
      Image.prototype.os = null;
      Image.encode = function encode(m, w) {
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
        if (m.family != null && m.hasOwnProperty('family')) w.uint32(58).string(m.family);
        if (m.storageSize != null && m.hasOwnProperty('storageSize')) w.uint32(64).int64(m.storageSize);
        if (m.minDiskSize != null && m.hasOwnProperty('minDiskSize')) w.uint32(72).int64(m.minDiskSize);
        if (m.productIds != null && m.productIds.length) {
          for (let i = 0; i < m.productIds.length; ++i) w.uint32(82).string(m.productIds[i]);
        }
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(88).int32(m.status);
        if (m.os != null && m.hasOwnProperty('os')) $root.api.compute.v1.Os.encode(m.os, w.uint32(98).fork()).ldelim();
        return w;
      };
      Image.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.Image(),
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
              m.family = r.string();
              break;
            case 8:
              m.storageSize = r.int64();
              break;
            case 9:
              m.minDiskSize = r.int64();
              break;
            case 10:
              if (!(m.productIds && m.productIds.length)) m.productIds = [];
              m.productIds.push(r.string());
              break;
            case 11:
              m.status = r.int32();
              break;
            case 12:
              m.os = $root.api.compute.v1.Os.decode(r, r.uint32());
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
        values[(valuesById[2] = 'READY')] = 2;
        values[(valuesById[3] = 'ERROR')] = 3;
        values[(valuesById[4] = 'DELETING')] = 4;
        return values;
      })();
      Image.Status = Status;
      return Image;
    })();
  })(root);
  (function($root) {
    $root.Os = (function() {
      function Os(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Os.prototype.type = 0;
      Os.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.type != null && m.hasOwnProperty('type')) w.uint32(8).int32(m.type);
        return w;
      };
      Os.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.Os();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.type = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Type = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'TYPE_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'LINUX')] = 1;
        values[(valuesById[2] = 'WINDOWS')] = 2;
        return values;
      })();
      Os.Type = Type;
      return Os;
    })();
  })(root);
  (function($root) {
    $root.ImageService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.ImageService.makeGrpcConstructor());
    };
    $root.ImageService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.compute.v1.ImageService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetImageRequest,
          responseType: $root.api.compute.v1.Image,
          requestSerialize: r => {
            return $root.api.compute.v1.GetImageRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetImageRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.Image.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.Image.decode
        },
        getLatestByFamily: {
          path: '/yandex.cloud.compute.v1.ImageService/GetLatestByFamily',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetImageLatestByFamilyRequest,
          responseType: $root.api.compute.v1.Image,
          requestSerialize: r => {
            return $root.api.compute.v1.GetImageLatestByFamilyRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetImageLatestByFamilyRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.Image.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.Image.decode
        },
        list: {
          path: '/yandex.cloud.compute.v1.ImageService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListImagesRequest,
          responseType: $root.api.compute.v1.ListImagesResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListImagesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListImagesRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListImagesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListImagesResponse.decode
        },
        create: {
          path: '/yandex.cloud.compute.v1.ImageService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.CreateImageRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.CreateImageRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.CreateImageRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.compute.v1.ImageService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.UpdateImageRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.UpdateImageRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.UpdateImageRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.compute.v1.ImageService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.DeleteImageRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.DeleteImageRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.DeleteImageRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.compute.v1.ImageService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListImageOperationsRequest,
          responseType: $root.api.compute.v1.ListImageOperationsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListImageOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListImageOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListImageOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListImageOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'compute';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetImageRequest = (function() {
      function GetImageRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetImageRequest.prototype.imageId = '';
      GetImageRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(10).string(m.imageId);
        return w;
      };
      GetImageRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetImageRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.imageId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetImageRequest;
    })();
  })(root);
  (function($root) {
    $root.GetImageLatestByFamilyRequest = (function() {
      function GetImageLatestByFamilyRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetImageLatestByFamilyRequest.prototype.folderId = '';
      GetImageLatestByFamilyRequest.prototype.family = '';
      GetImageLatestByFamilyRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.family != null && m.hasOwnProperty('family')) w.uint32(18).string(m.family);
        return w;
      };
      GetImageLatestByFamilyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetImageLatestByFamilyRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.family = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetImageLatestByFamilyRequest;
    })();
  })(root);
  (function($root) {
    $root.ListImagesRequest = (function() {
      function ListImagesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListImagesRequest.prototype.folderId = '';
      ListImagesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListImagesRequest.prototype.pageToken = '';
      ListImagesRequest.prototype.filter = '';
      ListImagesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListImagesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListImagesRequest();
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
      return ListImagesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListImagesResponse = (function() {
      function ListImagesResponse(p) {
        this.images = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListImagesResponse.prototype.images = $util.emptyArray;
      ListImagesResponse.prototype.nextPageToken = '';
      ListImagesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.images != null && m.images.length) {
          for (let i = 0; i < m.images.length; ++i) $root.api.compute.v1.Image.encode(m.images[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListImagesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListImagesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.images && m.images.length)) m.images = [];
              m.images.push($root.api.compute.v1.Image.decode(r, r.uint32()));
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
      return ListImagesResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateImageRequest = (function() {
      function CreateImageRequest(p) {
        this.labels = {};
        this.productIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateImageRequest.prototype.folderId = '';
      CreateImageRequest.prototype.name = '';
      CreateImageRequest.prototype.description = '';
      CreateImageRequest.prototype.labels = $util.emptyObject;
      CreateImageRequest.prototype.family = '';
      CreateImageRequest.prototype.minDiskSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      CreateImageRequest.prototype.productIds = $util.emptyArray;
      CreateImageRequest.prototype.imageId = '';
      CreateImageRequest.prototype.diskId = '';
      CreateImageRequest.prototype.snapshotId = '';
      CreateImageRequest.prototype.uri = '';
      CreateImageRequest.prototype.os = null;
      let $oneOfFields;
      Object.defineProperty(CreateImageRequest.prototype, 'source', {
        get: $util.oneOfGetter(($oneOfFields = ['imageId', 'diskId', 'snapshotId', 'uri'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      CreateImageRequest.encode = function encode(m, w) {
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
        if (m.family != null && m.hasOwnProperty('family')) w.uint32(42).string(m.family);
        if (m.minDiskSize != null && m.hasOwnProperty('minDiskSize')) w.uint32(48).int64(m.minDiskSize);
        if (m.productIds != null && m.productIds.length) {
          for (let i = 0; i < m.productIds.length; ++i) w.uint32(58).string(m.productIds[i]);
        }
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(66).string(m.imageId);
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(74).string(m.diskId);
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(82).string(m.snapshotId);
        if (m.uri != null && m.hasOwnProperty('uri')) w.uint32(90).string(m.uri);
        if (m.os != null && m.hasOwnProperty('os')) $root.api.compute.v1.Os.encode(m.os, w.uint32(98).fork()).ldelim();
        return w;
      };
      CreateImageRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreateImageRequest(),
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
              m.family = r.string();
              break;
            case 6:
              m.minDiskSize = r.int64();
              break;
            case 7:
              if (!(m.productIds && m.productIds.length)) m.productIds = [];
              m.productIds.push(r.string());
              break;
            case 8:
              m.imageId = r.string();
              break;
            case 9:
              m.diskId = r.string();
              break;
            case 10:
              m.snapshotId = r.string();
              break;
            case 11:
              m.uri = r.string();
              break;
            case 12:
              m.os = $root.api.compute.v1.Os.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateImageRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateImageMetadata = (function() {
      function CreateImageMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateImageMetadata.prototype.imageId = '';
      CreateImageMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(10).string(m.imageId);
        return w;
      };
      CreateImageMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreateImageMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.imageId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateImageMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateImageRequest = (function() {
      function UpdateImageRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateImageRequest.prototype.imageId = '';
      UpdateImageRequest.prototype.updateMask = null;
      UpdateImageRequest.prototype.name = '';
      UpdateImageRequest.prototype.description = '';
      UpdateImageRequest.prototype.minDiskSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      UpdateImageRequest.prototype.labels = $util.emptyObject;
      UpdateImageRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(10).string(m.imageId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        if (m.minDiskSize != null && m.hasOwnProperty('minDiskSize')) w.uint32(40).int64(m.minDiskSize);
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
      UpdateImageRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateImageRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.imageId = r.string();
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
              m.minDiskSize = r.int64();
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
      return UpdateImageRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateImageMetadata = (function() {
      function UpdateImageMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateImageMetadata.prototype.imageId = '';
      UpdateImageMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(10).string(m.imageId);
        return w;
      };
      UpdateImageMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateImageMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.imageId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateImageMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteImageRequest = (function() {
      function DeleteImageRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteImageRequest.prototype.imageId = '';
      DeleteImageRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(10).string(m.imageId);
        return w;
      };
      DeleteImageRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeleteImageRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.imageId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteImageRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteImageMetadata = (function() {
      function DeleteImageMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteImageMetadata.prototype.imageId = '';
      DeleteImageMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(10).string(m.imageId);
        return w;
      };
      DeleteImageMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeleteImageMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.imageId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteImageMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListImageOperationsRequest = (function() {
      function ListImageOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListImageOperationsRequest.prototype.imageId = '';
      ListImageOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListImageOperationsRequest.prototype.pageToken = '';
      ListImageOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(10).string(m.imageId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListImageOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListImageOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.imageId = r.string();
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
      return ListImageOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListImageOperationsResponse = (function() {
      function ListImageOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListImageOperationsResponse.prototype.operations = $util.emptyArray;
      ListImageOperationsResponse.prototype.nextPageToken = '';
      ListImageOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListImageOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListImageOperationsResponse();
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
      return ListImageOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.Instance = (function() {
      function Instance(p) {
        this.labels = {};
        this.metadata = {};
        this.secondaryDisks = [];
        this.networkInterfaces = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Instance.prototype.id = '';
      Instance.prototype.folderId = '';
      Instance.prototype.createdAt = null;
      Instance.prototype.name = '';
      Instance.prototype.description = '';
      Instance.prototype.labels = $util.emptyObject;
      Instance.prototype.zoneId = '';
      Instance.prototype.platformId = '';
      Instance.prototype.resources = null;
      Instance.prototype.status = 0;
      Instance.prototype.metadata = $util.emptyObject;
      Instance.prototype.bootDisk = null;
      Instance.prototype.secondaryDisks = $util.emptyArray;
      Instance.prototype.networkInterfaces = $util.emptyArray;
      Instance.prototype.fqdn = '';
      Instance.prototype.schedulingPolicy = null;
      Instance.prototype.serviceAccountId = '';
      Instance.prototype.networkSettings = null;
      Instance.prototype.placementPolicy = null;
      Instance.encode = function encode(m, w) {
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
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(58).string(m.zoneId);
        if (m.platformId != null && m.hasOwnProperty('platformId')) w.uint32(66).string(m.platformId);
        if (m.resources != null && m.hasOwnProperty('resources')) $root.api.compute.v1.Resources.encode(m.resources, w.uint32(74).fork()).ldelim();
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(80).int32(m.status);
        if (m.metadata != null && m.hasOwnProperty('metadata')) {
          for (let ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
            w.uint32(90)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.metadata[ks[i]])
              .ldelim();
          }
        }
        if (m.bootDisk != null && m.hasOwnProperty('bootDisk')) $root.api.compute.v1.AttachedDisk.encode(m.bootDisk, w.uint32(98).fork()).ldelim();
        if (m.secondaryDisks != null && m.secondaryDisks.length) {
          for (let i = 0; i < m.secondaryDisks.length; ++i) $root.api.compute.v1.AttachedDisk.encode(m.secondaryDisks[i], w.uint32(106).fork()).ldelim();
        }
        if (m.networkInterfaces != null && m.networkInterfaces.length) {
          for (let i = 0; i < m.networkInterfaces.length; ++i) $root.api.compute.v1.NetworkInterface.encode(m.networkInterfaces[i], w.uint32(114).fork()).ldelim();
        }
        if (m.fqdn != null && m.hasOwnProperty('fqdn')) w.uint32(130).string(m.fqdn);
        if (m.schedulingPolicy != null && m.hasOwnProperty('schedulingPolicy')) $root.api.compute.v1.SchedulingPolicy.encode(m.schedulingPolicy, w.uint32(138).fork()).ldelim();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(146).string(m.serviceAccountId);
        if (m.networkSettings != null && m.hasOwnProperty('networkSettings')) $root.api.compute.v1.NetworkSettings.encode(m.networkSettings, w.uint32(154).fork()).ldelim();
        if (m.placementPolicy != null && m.hasOwnProperty('placementPolicy')) $root.api.compute.v1.PlacementPolicy.encode(m.placementPolicy, w.uint32(162).fork()).ldelim();
        return w;
      };
      Instance.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.Instance(),
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
              m.zoneId = r.string();
              break;
            case 8:
              m.platformId = r.string();
              break;
            case 9:
              m.resources = $root.api.compute.v1.Resources.decode(r, r.uint32());
              break;
            case 10:
              m.status = r.int32();
              break;
            case 11:
              r.skip().pos++;
              if (m.metadata === $util.emptyObject) m.metadata = {};
              k = r.string();
              r.pos++;
              m.metadata[k] = r.string();
              break;
            case 12:
              m.bootDisk = $root.api.compute.v1.AttachedDisk.decode(r, r.uint32());
              break;
            case 13:
              if (!(m.secondaryDisks && m.secondaryDisks.length)) m.secondaryDisks = [];
              m.secondaryDisks.push($root.api.compute.v1.AttachedDisk.decode(r, r.uint32()));
              break;
            case 14:
              if (!(m.networkInterfaces && m.networkInterfaces.length)) m.networkInterfaces = [];
              m.networkInterfaces.push($root.api.compute.v1.NetworkInterface.decode(r, r.uint32()));
              break;
            case 16:
              m.fqdn = r.string();
              break;
            case 17:
              m.schedulingPolicy = $root.api.compute.v1.SchedulingPolicy.decode(r, r.uint32());
              break;
            case 18:
              m.serviceAccountId = r.string();
              break;
            case 19:
              m.networkSettings = $root.api.compute.v1.NetworkSettings.decode(r, r.uint32());
              break;
            case 20:
              m.placementPolicy = $root.api.compute.v1.PlacementPolicy.decode(r, r.uint32());
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
        values[(valuesById[1] = 'PROVISIONING')] = 1;
        values[(valuesById[2] = 'RUNNING')] = 2;
        values[(valuesById[3] = 'STOPPING')] = 3;
        values[(valuesById[4] = 'STOPPED')] = 4;
        values[(valuesById[5] = 'STARTING')] = 5;
        values[(valuesById[6] = 'RESTARTING')] = 6;
        values[(valuesById[7] = 'UPDATING')] = 7;
        values[(valuesById[8] = 'ERROR')] = 8;
        values[(valuesById[9] = 'CRASHED')] = 9;
        values[(valuesById[10] = 'DELETING')] = 10;
        return values;
      })();
      Instance.Status = Status;
      return Instance;
    })();
  })(root);
  (function($root) {
    $root.Resources = (function() {
      function Resources(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Resources.prototype.memory = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Resources.prototype.cores = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Resources.prototype.coreFraction = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Resources.prototype.gpus = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Resources.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.memory != null && m.hasOwnProperty('memory')) w.uint32(8).int64(m.memory);
        if (m.cores != null && m.hasOwnProperty('cores')) w.uint32(16).int64(m.cores);
        if (m.coreFraction != null && m.hasOwnProperty('coreFraction')) w.uint32(24).int64(m.coreFraction);
        if (m.gpus != null && m.hasOwnProperty('gpus')) w.uint32(32).int64(m.gpus);
        return w;
      };
      Resources.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.Resources();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.memory = r.int64();
              break;
            case 2:
              m.cores = r.int64();
              break;
            case 3:
              m.coreFraction = r.int64();
              break;
            case 4:
              m.gpus = r.int64();
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
    $root.AttachedDisk = (function() {
      function AttachedDisk(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AttachedDisk.prototype.mode = 0;
      AttachedDisk.prototype.deviceName = '';
      AttachedDisk.prototype.autoDelete = false;
      AttachedDisk.prototype.diskId = '';
      AttachedDisk.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.mode != null && m.hasOwnProperty('mode')) w.uint32(8).int32(m.mode);
        if (m.deviceName != null && m.hasOwnProperty('deviceName')) w.uint32(18).string(m.deviceName);
        if (m.autoDelete != null && m.hasOwnProperty('autoDelete')) w.uint32(24).bool(m.autoDelete);
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(34).string(m.diskId);
        return w;
      };
      AttachedDisk.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.AttachedDisk();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.mode = r.int32();
              break;
            case 2:
              m.deviceName = r.string();
              break;
            case 3:
              m.autoDelete = r.bool();
              break;
            case 4:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Mode = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'MODE_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'READ_ONLY')] = 1;
        values[(valuesById[2] = 'READ_WRITE')] = 2;
        return values;
      })();
      AttachedDisk.Mode = Mode;
      return AttachedDisk;
    })();
  })(root);
  (function($root) {
    $root.NetworkInterface = (function() {
      function NetworkInterface(p) {
        this.securityGroupIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NetworkInterface.prototype.index = '';
      NetworkInterface.prototype.macAddress = '';
      NetworkInterface.prototype.subnetId = '';
      NetworkInterface.prototype.primaryV4Address = null;
      NetworkInterface.prototype.primaryV6Address = null;
      NetworkInterface.prototype.securityGroupIds = $util.emptyArray;
      NetworkInterface.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.index != null && m.hasOwnProperty('index')) w.uint32(10).string(m.index);
        if (m.macAddress != null && m.hasOwnProperty('macAddress')) w.uint32(18).string(m.macAddress);
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(26).string(m.subnetId);
        if (m.primaryV4Address != null && m.hasOwnProperty('primaryV4Address')) $root.api.compute.v1.PrimaryAddress.encode(m.primaryV4Address, w.uint32(34).fork()).ldelim();
        if (m.primaryV6Address != null && m.hasOwnProperty('primaryV6Address')) $root.api.compute.v1.PrimaryAddress.encode(m.primaryV6Address, w.uint32(42).fork()).ldelim();
        if (m.securityGroupIds != null && m.securityGroupIds.length) {
          for (let i = 0; i < m.securityGroupIds.length; ++i) w.uint32(50).string(m.securityGroupIds[i]);
        }
        return w;
      };
      NetworkInterface.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.NetworkInterface();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.index = r.string();
              break;
            case 2:
              m.macAddress = r.string();
              break;
            case 3:
              m.subnetId = r.string();
              break;
            case 4:
              m.primaryV4Address = $root.api.compute.v1.PrimaryAddress.decode(r, r.uint32());
              break;
            case 5:
              m.primaryV6Address = $root.api.compute.v1.PrimaryAddress.decode(r, r.uint32());
              break;
            case 6:
              if (!(m.securityGroupIds && m.securityGroupIds.length)) m.securityGroupIds = [];
              m.securityGroupIds.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NetworkInterface;
    })();
  })(root);
  (function($root) {
    $root.PrimaryAddress = (function() {
      function PrimaryAddress(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PrimaryAddress.prototype.address = '';
      PrimaryAddress.prototype.oneToOneNat = null;
      PrimaryAddress.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(10).string(m.address);
        if (m.oneToOneNat != null && m.hasOwnProperty('oneToOneNat')) $root.api.compute.v1.OneToOneNat.encode(m.oneToOneNat, w.uint32(18).fork()).ldelim();
        return w;
      };
      PrimaryAddress.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.PrimaryAddress();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.address = r.string();
              break;
            case 2:
              m.oneToOneNat = $root.api.compute.v1.OneToOneNat.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return PrimaryAddress;
    })();
  })(root);
  (function($root) {
    $root.OneToOneNat = (function() {
      function OneToOneNat(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      OneToOneNat.prototype.address = '';
      OneToOneNat.prototype.ipVersion = 0;
      OneToOneNat.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(10).string(m.address);
        if (m.ipVersion != null && m.hasOwnProperty('ipVersion')) w.uint32(16).int32(m.ipVersion);
        return w;
      };
      OneToOneNat.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.OneToOneNat();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.address = r.string();
              break;
            case 2:
              m.ipVersion = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return OneToOneNat;
    })();
  })(root);
  (function($root) {
    $root.IpVersion = (function() {
      let IpVersion = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'IP_VERSION_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'IPV4')] = 1;
        values[(valuesById[2] = 'IPV6')] = 2;
        return values;
      })();
      return IpVersion;
    })();
  })(root);
  (function($root) {
    $root.SchedulingPolicy = (function() {
      function SchedulingPolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SchedulingPolicy.prototype.preemptible = false;
      SchedulingPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.preemptible != null && m.hasOwnProperty('preemptible')) w.uint32(8).bool(m.preemptible);
        return w;
      };
      SchedulingPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.SchedulingPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.preemptible = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SchedulingPolicy;
    })();
  })(root);
  (function($root) {
    $root.NetworkSettings = (function() {
      function NetworkSettings(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NetworkSettings.prototype.type = 0;
      NetworkSettings.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.type != null && m.hasOwnProperty('type')) w.uint32(8).int32(m.type);
        return w;
      };
      NetworkSettings.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.NetworkSettings();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.type = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Type = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'TYPE_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'STANDARD')] = 1;
        values[(valuesById[2] = 'SOFTWARE_ACCELERATED')] = 2;
        values[(valuesById[3] = 'HARDWARE_ACCELERATED')] = 3;
        return values;
      })();
      NetworkSettings.Type = Type;
      return NetworkSettings;
    })();
  })(root);
  (function($root) {
    $root.PlacementPolicy = (function() {
      function PlacementPolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PlacementPolicy.prototype.placementGroupId = '';
      PlacementPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
        return w;
      };
      PlacementPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.PlacementPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return PlacementPolicy;
    })();
  })(root);
  (function($root) {
    $root.InstanceService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.InstanceService.makeGrpcConstructor());
    };
    $root.InstanceService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.compute.v1.InstanceService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetInstanceRequest,
          responseType: $root.api.compute.v1.Instance,
          requestSerialize: r => {
            return $root.api.compute.v1.GetInstanceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetInstanceRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.Instance.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.Instance.decode
        },
        list: {
          path: '/yandex.cloud.compute.v1.InstanceService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListInstancesRequest,
          responseType: $root.api.compute.v1.ListInstancesResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListInstancesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListInstancesRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListInstancesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListInstancesResponse.decode
        },
        create: {
          path: '/yandex.cloud.compute.v1.InstanceService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.CreateInstanceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.CreateInstanceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.CreateInstanceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.compute.v1.InstanceService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.UpdateInstanceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.UpdateInstanceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.UpdateInstanceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.compute.v1.InstanceService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.DeleteInstanceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.DeleteInstanceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.DeleteInstanceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        updateMetadata: {
          path: '/yandex.cloud.compute.v1.InstanceService/UpdateMetadata',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.UpdateInstanceMetadataRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.UpdateInstanceMetadataRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.UpdateInstanceMetadataRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        getSerialPortOutput: {
          path: '/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetInstanceSerialPortOutputRequest,
          responseType: $root.api.compute.v1.GetInstanceSerialPortOutputResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.GetInstanceSerialPortOutputRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetInstanceSerialPortOutputRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.GetInstanceSerialPortOutputResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.GetInstanceSerialPortOutputResponse.decode
        },
        stop: {
          path: '/yandex.cloud.compute.v1.InstanceService/Stop',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.StopInstanceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.StopInstanceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.StopInstanceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        start: {
          path: '/yandex.cloud.compute.v1.InstanceService/Start',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.StartInstanceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.StartInstanceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.StartInstanceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        restart: {
          path: '/yandex.cloud.compute.v1.InstanceService/Restart',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.RestartInstanceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.RestartInstanceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.RestartInstanceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        attachDisk: {
          path: '/yandex.cloud.compute.v1.InstanceService/AttachDisk',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.AttachInstanceDiskRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.AttachInstanceDiskRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.AttachInstanceDiskRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        detachDisk: {
          path: '/yandex.cloud.compute.v1.InstanceService/DetachDisk',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.DetachInstanceDiskRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.DetachInstanceDiskRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.DetachInstanceDiskRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        addOneToOneNat: {
          path: '/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.AddInstanceOneToOneNatRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.AddInstanceOneToOneNatRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.AddInstanceOneToOneNatRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        removeOneToOneNat: {
          path: '/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.RemoveInstanceOneToOneNatRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.RemoveInstanceOneToOneNatRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.RemoveInstanceOneToOneNatRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        updateNetworkInterface: {
          path: '/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.UpdateNetworkInterfaceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.UpdateNetworkInterfaceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.UpdateNetworkInterfaceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.compute.v1.InstanceService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListInstanceOperationsRequest,
          responseType: $root.api.compute.v1.ListInstanceOperationsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListInstanceOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListInstanceOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListInstanceOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListInstanceOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'compute';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.InstanceView = (function() {
      let InstanceView = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'BASIC')] = 0;
        values[(valuesById[1] = 'FULL')] = 1;
        return values;
      })();
      return InstanceView;
    })();
  })(root);
  (function($root) {
    $root.GetInstanceRequest = (function() {
      function GetInstanceRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetInstanceRequest.prototype.instanceId = '';
      GetInstanceRequest.prototype.view = 0;
      GetInstanceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.view != null && m.hasOwnProperty('view')) w.uint32(16).int32(m.view);
        return w;
      };
      GetInstanceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetInstanceRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.view = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetInstanceRequest;
    })();
  })(root);
  (function($root) {
    $root.ListInstancesRequest = (function() {
      function ListInstancesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstancesRequest.prototype.folderId = '';
      ListInstancesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListInstancesRequest.prototype.pageToken = '';
      ListInstancesRequest.prototype.filter = '';
      ListInstancesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListInstancesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListInstancesRequest();
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
      return ListInstancesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListInstancesResponse = (function() {
      function ListInstancesResponse(p) {
        this.instances = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstancesResponse.prototype.instances = $util.emptyArray;
      ListInstancesResponse.prototype.nextPageToken = '';
      ListInstancesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instances != null && m.instances.length) {
          for (let i = 0; i < m.instances.length; ++i) $root.api.compute.v1.Instance.encode(m.instances[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListInstancesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListInstancesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.instances && m.instances.length)) m.instances = [];
              m.instances.push($root.api.compute.v1.Instance.decode(r, r.uint32()));
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
      return ListInstancesResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateInstanceRequest = (function() {
      function CreateInstanceRequest(p) {
        this.labels = {};
        this.metadata = {};
        this.secondaryDiskSpecs = [];
        this.networkInterfaceSpecs = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateInstanceRequest.prototype.folderId = '';
      CreateInstanceRequest.prototype.name = '';
      CreateInstanceRequest.prototype.description = '';
      CreateInstanceRequest.prototype.labels = $util.emptyObject;
      CreateInstanceRequest.prototype.zoneId = '';
      CreateInstanceRequest.prototype.platformId = '';
      CreateInstanceRequest.prototype.resourcesSpec = null;
      CreateInstanceRequest.prototype.metadata = $util.emptyObject;
      CreateInstanceRequest.prototype.bootDiskSpec = null;
      CreateInstanceRequest.prototype.secondaryDiskSpecs = $util.emptyArray;
      CreateInstanceRequest.prototype.networkInterfaceSpecs = $util.emptyArray;
      CreateInstanceRequest.prototype.hostname = '';
      CreateInstanceRequest.prototype.schedulingPolicy = null;
      CreateInstanceRequest.prototype.serviceAccountId = '';
      CreateInstanceRequest.prototype.networkSettings = null;
      CreateInstanceRequest.prototype.placementPolicy = null;
      CreateInstanceRequest.encode = function encode(m, w) {
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
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(42).string(m.zoneId);
        if (m.platformId != null && m.hasOwnProperty('platformId')) w.uint32(50).string(m.platformId);
        if (m.resourcesSpec != null && m.hasOwnProperty('resourcesSpec')) $root.api.compute.v1.ResourcesSpec.encode(m.resourcesSpec, w.uint32(58).fork()).ldelim();
        if (m.metadata != null && m.hasOwnProperty('metadata')) {
          for (let ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
            w.uint32(66)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.metadata[ks[i]])
              .ldelim();
          }
        }
        if (m.bootDiskSpec != null && m.hasOwnProperty('bootDiskSpec')) $root.api.compute.v1.AttachedDiskSpec.encode(m.bootDiskSpec, w.uint32(74).fork()).ldelim();
        if (m.secondaryDiskSpecs != null && m.secondaryDiskSpecs.length) {
          for (let i = 0; i < m.secondaryDiskSpecs.length; ++i) $root.api.compute.v1.AttachedDiskSpec.encode(m.secondaryDiskSpecs[i], w.uint32(82).fork()).ldelim();
        }
        if (m.networkInterfaceSpecs != null && m.networkInterfaceSpecs.length) {
          for (let i = 0; i < m.networkInterfaceSpecs.length; ++i) $root.api.compute.v1.NetworkInterfaceSpec.encode(m.networkInterfaceSpecs[i], w.uint32(90).fork()).ldelim();
        }
        if (m.hostname != null && m.hasOwnProperty('hostname')) w.uint32(98).string(m.hostname);
        if (m.schedulingPolicy != null && m.hasOwnProperty('schedulingPolicy')) $root.api.compute.v1.SchedulingPolicy.encode(m.schedulingPolicy, w.uint32(106).fork()).ldelim();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(114).string(m.serviceAccountId);
        if (m.networkSettings != null && m.hasOwnProperty('networkSettings')) $root.api.compute.v1.NetworkSettings.encode(m.networkSettings, w.uint32(122).fork()).ldelim();
        if (m.placementPolicy != null && m.hasOwnProperty('placementPolicy')) $root.api.compute.v1.PlacementPolicy.encode(m.placementPolicy, w.uint32(130).fork()).ldelim();
        return w;
      };
      CreateInstanceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreateInstanceRequest(),
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
              m.zoneId = r.string();
              break;
            case 6:
              m.platformId = r.string();
              break;
            case 7:
              m.resourcesSpec = $root.api.compute.v1.ResourcesSpec.decode(r, r.uint32());
              break;
            case 8:
              r.skip().pos++;
              if (m.metadata === $util.emptyObject) m.metadata = {};
              k = r.string();
              r.pos++;
              m.metadata[k] = r.string();
              break;
            case 9:
              m.bootDiskSpec = $root.api.compute.v1.AttachedDiskSpec.decode(r, r.uint32());
              break;
            case 10:
              if (!(m.secondaryDiskSpecs && m.secondaryDiskSpecs.length)) m.secondaryDiskSpecs = [];
              m.secondaryDiskSpecs.push($root.api.compute.v1.AttachedDiskSpec.decode(r, r.uint32()));
              break;
            case 11:
              if (!(m.networkInterfaceSpecs && m.networkInterfaceSpecs.length)) m.networkInterfaceSpecs = [];
              m.networkInterfaceSpecs.push($root.api.compute.v1.NetworkInterfaceSpec.decode(r, r.uint32()));
              break;
            case 12:
              m.hostname = r.string();
              break;
            case 13:
              m.schedulingPolicy = $root.api.compute.v1.SchedulingPolicy.decode(r, r.uint32());
              break;
            case 14:
              m.serviceAccountId = r.string();
              break;
            case 15:
              m.networkSettings = $root.api.compute.v1.NetworkSettings.decode(r, r.uint32());
              break;
            case 16:
              m.placementPolicy = $root.api.compute.v1.PlacementPolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateInstanceRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateInstanceMetadata = (function() {
      function CreateInstanceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateInstanceMetadata.prototype.instanceId = '';
      CreateInstanceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      CreateInstanceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreateInstanceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateInstanceMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateInstanceRequest = (function() {
      function UpdateInstanceRequest(p) {
        this.labels = {};
        this.metadata = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateInstanceRequest.prototype.instanceId = '';
      UpdateInstanceRequest.prototype.updateMask = null;
      UpdateInstanceRequest.prototype.name = '';
      UpdateInstanceRequest.prototype.description = '';
      UpdateInstanceRequest.prototype.labels = $util.emptyObject;
      UpdateInstanceRequest.prototype.platformId = '';
      UpdateInstanceRequest.prototype.resourcesSpec = null;
      UpdateInstanceRequest.prototype.metadata = $util.emptyObject;
      UpdateInstanceRequest.prototype.serviceAccountId = '';
      UpdateInstanceRequest.prototype.networkSettings = null;
      UpdateInstanceRequest.prototype.placementPolicy = null;
      UpdateInstanceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
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
        if (m.platformId != null && m.hasOwnProperty('platformId')) w.uint32(50).string(m.platformId);
        if (m.resourcesSpec != null && m.hasOwnProperty('resourcesSpec')) $root.api.compute.v1.ResourcesSpec.encode(m.resourcesSpec, w.uint32(58).fork()).ldelim();
        if (m.metadata != null && m.hasOwnProperty('metadata')) {
          for (let ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
            w.uint32(66)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.metadata[ks[i]])
              .ldelim();
          }
        }
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(74).string(m.serviceAccountId);
        if (m.networkSettings != null && m.hasOwnProperty('networkSettings')) $root.api.compute.v1.NetworkSettings.encode(m.networkSettings, w.uint32(82).fork()).ldelim();
        if (m.placementPolicy != null && m.hasOwnProperty('placementPolicy')) $root.api.compute.v1.PlacementPolicy.encode(m.placementPolicy, w.uint32(90).fork()).ldelim();
        return w;
      };
      UpdateInstanceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateInstanceRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
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
              m.platformId = r.string();
              break;
            case 7:
              m.resourcesSpec = $root.api.compute.v1.ResourcesSpec.decode(r, r.uint32());
              break;
            case 8:
              r.skip().pos++;
              if (m.metadata === $util.emptyObject) m.metadata = {};
              k = r.string();
              r.pos++;
              m.metadata[k] = r.string();
              break;
            case 9:
              m.serviceAccountId = r.string();
              break;
            case 10:
              m.networkSettings = $root.api.compute.v1.NetworkSettings.decode(r, r.uint32());
              break;
            case 11:
              m.placementPolicy = $root.api.compute.v1.PlacementPolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateInstanceRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateInstanceMetadata = (function() {
      function UpdateInstanceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateInstanceMetadata.prototype.instanceId = '';
      UpdateInstanceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      UpdateInstanceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateInstanceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateInstanceMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteInstanceRequest = (function() {
      function DeleteInstanceRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteInstanceRequest.prototype.instanceId = '';
      DeleteInstanceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      DeleteInstanceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeleteInstanceRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteInstanceRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteInstanceMetadata = (function() {
      function DeleteInstanceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteInstanceMetadata.prototype.instanceId = '';
      DeleteInstanceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      DeleteInstanceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeleteInstanceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteInstanceMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateInstanceMetadataRequest = (function() {
      function UpdateInstanceMetadataRequest(p) {
        this['delete'] = [];
        this.upsert = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateInstanceMetadataRequest.prototype.instanceId = '';
      UpdateInstanceMetadataRequest.prototype['delete'] = $util.emptyArray;
      UpdateInstanceMetadataRequest.prototype.upsert = $util.emptyObject;
      UpdateInstanceMetadataRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m['delete'] != null && m['delete'].length) {
          for (let i = 0; i < m['delete'].length; ++i) w.uint32(18).string(m['delete'][i]);
        }
        if (m.upsert != null && m.hasOwnProperty('upsert')) {
          for (let ks = Object.keys(m.upsert), i = 0; i < ks.length; ++i) {
            w.uint32(26)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.upsert[ks[i]])
              .ldelim();
          }
        }
        return w;
      };
      UpdateInstanceMetadataRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateInstanceMetadataRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              if (!(m['delete'] && m['delete'].length)) m['delete'] = [];
              m['delete'].push(r.string());
              break;
            case 3:
              r.skip().pos++;
              if (m.upsert === $util.emptyObject) m.upsert = {};
              k = r.string();
              r.pos++;
              m.upsert[k] = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateInstanceMetadataRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateInstanceMetadataMetadata = (function() {
      function UpdateInstanceMetadataMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateInstanceMetadataMetadata.prototype.instanceId = '';
      UpdateInstanceMetadataMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      UpdateInstanceMetadataMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateInstanceMetadataMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateInstanceMetadataMetadata;
    })();
  })(root);
  (function($root) {
    $root.GetInstanceSerialPortOutputRequest = (function() {
      function GetInstanceSerialPortOutputRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetInstanceSerialPortOutputRequest.prototype.instanceId = '';
      GetInstanceSerialPortOutputRequest.prototype.port = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      GetInstanceSerialPortOutputRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.port != null && m.hasOwnProperty('port')) w.uint32(16).int64(m.port);
        return w;
      };
      GetInstanceSerialPortOutputRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetInstanceSerialPortOutputRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.port = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetInstanceSerialPortOutputRequest;
    })();
  })(root);
  (function($root) {
    $root.GetInstanceSerialPortOutputResponse = (function() {
      function GetInstanceSerialPortOutputResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetInstanceSerialPortOutputResponse.prototype.contents = '';
      GetInstanceSerialPortOutputResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.contents != null && m.hasOwnProperty('contents')) w.uint32(10).string(m.contents);
        return w;
      };
      GetInstanceSerialPortOutputResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetInstanceSerialPortOutputResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.contents = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetInstanceSerialPortOutputResponse;
    })();
  })(root);
  (function($root) {
    $root.StopInstanceRequest = (function() {
      function StopInstanceRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StopInstanceRequest.prototype.instanceId = '';
      StopInstanceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      StopInstanceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.StopInstanceRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StopInstanceRequest;
    })();
  })(root);
  (function($root) {
    $root.StopInstanceMetadata = (function() {
      function StopInstanceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StopInstanceMetadata.prototype.instanceId = '';
      StopInstanceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      StopInstanceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.StopInstanceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StopInstanceMetadata;
    })();
  })(root);
  (function($root) {
    $root.StartInstanceRequest = (function() {
      function StartInstanceRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StartInstanceRequest.prototype.instanceId = '';
      StartInstanceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      StartInstanceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.StartInstanceRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StartInstanceRequest;
    })();
  })(root);
  (function($root) {
    $root.StartInstanceMetadata = (function() {
      function StartInstanceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StartInstanceMetadata.prototype.instanceId = '';
      StartInstanceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      StartInstanceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.StartInstanceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StartInstanceMetadata;
    })();
  })(root);
  (function($root) {
    $root.RestartInstanceRequest = (function() {
      function RestartInstanceRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RestartInstanceRequest.prototype.instanceId = '';
      RestartInstanceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      RestartInstanceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.RestartInstanceRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RestartInstanceRequest;
    })();
  })(root);
  (function($root) {
    $root.RestartInstanceMetadata = (function() {
      function RestartInstanceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RestartInstanceMetadata.prototype.instanceId = '';
      RestartInstanceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      RestartInstanceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.RestartInstanceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RestartInstanceMetadata;
    })();
  })(root);
  (function($root) {
    $root.AttachInstanceDiskRequest = (function() {
      function AttachInstanceDiskRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AttachInstanceDiskRequest.prototype.instanceId = '';
      AttachInstanceDiskRequest.prototype.attachedDiskSpec = null;
      AttachInstanceDiskRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.attachedDiskSpec != null && m.hasOwnProperty('attachedDiskSpec')) $root.api.compute.v1.AttachedDiskSpec.encode(m.attachedDiskSpec, w.uint32(18).fork()).ldelim();
        return w;
      };
      AttachInstanceDiskRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.AttachInstanceDiskRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.attachedDiskSpec = $root.api.compute.v1.AttachedDiskSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AttachInstanceDiskRequest;
    })();
  })(root);
  (function($root) {
    $root.AttachInstanceDiskMetadata = (function() {
      function AttachInstanceDiskMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AttachInstanceDiskMetadata.prototype.instanceId = '';
      AttachInstanceDiskMetadata.prototype.diskId = '';
      AttachInstanceDiskMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(18).string(m.diskId);
        return w;
      };
      AttachInstanceDiskMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.AttachInstanceDiskMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AttachInstanceDiskMetadata;
    })();
  })(root);
  (function($root) {
    $root.DetachInstanceDiskRequest = (function() {
      function DetachInstanceDiskRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DetachInstanceDiskRequest.prototype.instanceId = '';
      DetachInstanceDiskRequest.prototype.diskId = '';
      DetachInstanceDiskRequest.prototype.deviceName = '';
      let $oneOfFields;
      Object.defineProperty(DetachInstanceDiskRequest.prototype, 'disk', {
        get: $util.oneOfGetter(($oneOfFields = ['diskId', 'deviceName'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      DetachInstanceDiskRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(18).string(m.diskId);
        if (m.deviceName != null && m.hasOwnProperty('deviceName')) w.uint32(26).string(m.deviceName);
        return w;
      };
      DetachInstanceDiskRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DetachInstanceDiskRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.diskId = r.string();
              break;
            case 3:
              m.deviceName = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DetachInstanceDiskRequest;
    })();
  })(root);
  (function($root) {
    $root.DetachInstanceDiskMetadata = (function() {
      function DetachInstanceDiskMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DetachInstanceDiskMetadata.prototype.instanceId = '';
      DetachInstanceDiskMetadata.prototype.diskId = '';
      DetachInstanceDiskMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(18).string(m.diskId);
        return w;
      };
      DetachInstanceDiskMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DetachInstanceDiskMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DetachInstanceDiskMetadata;
    })();
  })(root);
  (function($root) {
    $root.AddInstanceOneToOneNatRequest = (function() {
      function AddInstanceOneToOneNatRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddInstanceOneToOneNatRequest.prototype.instanceId = '';
      AddInstanceOneToOneNatRequest.prototype.networkInterfaceIndex = '';
      AddInstanceOneToOneNatRequest.prototype.internalAddress = '';
      AddInstanceOneToOneNatRequest.prototype.oneToOneNatSpec = null;
      AddInstanceOneToOneNatRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.networkInterfaceIndex != null && m.hasOwnProperty('networkInterfaceIndex')) w.uint32(18).string(m.networkInterfaceIndex);
        if (m.internalAddress != null && m.hasOwnProperty('internalAddress')) w.uint32(26).string(m.internalAddress);
        if (m.oneToOneNatSpec != null && m.hasOwnProperty('oneToOneNatSpec')) $root.api.compute.v1.OneToOneNatSpec.encode(m.oneToOneNatSpec, w.uint32(34).fork()).ldelim();
        return w;
      };
      AddInstanceOneToOneNatRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.AddInstanceOneToOneNatRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.networkInterfaceIndex = r.string();
              break;
            case 3:
              m.internalAddress = r.string();
              break;
            case 4:
              m.oneToOneNatSpec = $root.api.compute.v1.OneToOneNatSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddInstanceOneToOneNatRequest;
    })();
  })(root);
  (function($root) {
    $root.AddInstanceOneToOneNatMetadata = (function() {
      function AddInstanceOneToOneNatMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddInstanceOneToOneNatMetadata.prototype.instanceId = '';
      AddInstanceOneToOneNatMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      AddInstanceOneToOneNatMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.AddInstanceOneToOneNatMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddInstanceOneToOneNatMetadata;
    })();
  })(root);
  (function($root) {
    $root.RemoveInstanceOneToOneNatRequest = (function() {
      function RemoveInstanceOneToOneNatRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RemoveInstanceOneToOneNatRequest.prototype.instanceId = '';
      RemoveInstanceOneToOneNatRequest.prototype.networkInterfaceIndex = '';
      RemoveInstanceOneToOneNatRequest.prototype.internalAddress = '';
      RemoveInstanceOneToOneNatRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.networkInterfaceIndex != null && m.hasOwnProperty('networkInterfaceIndex')) w.uint32(18).string(m.networkInterfaceIndex);
        if (m.internalAddress != null && m.hasOwnProperty('internalAddress')) w.uint32(26).string(m.internalAddress);
        return w;
      };
      RemoveInstanceOneToOneNatRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.RemoveInstanceOneToOneNatRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.networkInterfaceIndex = r.string();
              break;
            case 3:
              m.internalAddress = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RemoveInstanceOneToOneNatRequest;
    })();
  })(root);
  (function($root) {
    $root.RemoveInstanceOneToOneNatMetadata = (function() {
      function RemoveInstanceOneToOneNatMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RemoveInstanceOneToOneNatMetadata.prototype.instanceId = '';
      RemoveInstanceOneToOneNatMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        return w;
      };
      RemoveInstanceOneToOneNatMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.RemoveInstanceOneToOneNatMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RemoveInstanceOneToOneNatMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateNetworkInterfaceRequest = (function() {
      function UpdateNetworkInterfaceRequest(p) {
        this.securityGroupIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNetworkInterfaceRequest.prototype.instanceId = '';
      UpdateNetworkInterfaceRequest.prototype.networkInterfaceIndex = '';
      UpdateNetworkInterfaceRequest.prototype.updateMask = null;
      UpdateNetworkInterfaceRequest.prototype.securityGroupIds = $util.emptyArray;
      UpdateNetworkInterfaceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.networkInterfaceIndex != null && m.hasOwnProperty('networkInterfaceIndex')) w.uint32(18).string(m.networkInterfaceIndex);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(26).fork()).ldelim();
        if (m.securityGroupIds != null && m.securityGroupIds.length) {
          for (let i = 0; i < m.securityGroupIds.length; ++i) w.uint32(34).string(m.securityGroupIds[i]);
        }
        return w;
      };
      UpdateNetworkInterfaceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateNetworkInterfaceRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.networkInterfaceIndex = r.string();
              break;
            case 3:
              m.updateMask = $root.contrib.google.protobuf.FieldMask.decode(r, r.uint32());
              break;
            case 4:
              if (!(m.securityGroupIds && m.securityGroupIds.length)) m.securityGroupIds = [];
              m.securityGroupIds.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNetworkInterfaceRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateNetworkInterfaceMetadata = (function() {
      function UpdateNetworkInterfaceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNetworkInterfaceMetadata.prototype.instanceId = '';
      UpdateNetworkInterfaceMetadata.prototype.networkInterfaceIndex = '';
      UpdateNetworkInterfaceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.networkInterfaceIndex != null && m.hasOwnProperty('networkInterfaceIndex')) w.uint32(18).string(m.networkInterfaceIndex);
        return w;
      };
      UpdateNetworkInterfaceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateNetworkInterfaceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
              break;
            case 2:
              m.networkInterfaceIndex = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNetworkInterfaceMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceOperationsRequest = (function() {
      function ListInstanceOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceOperationsRequest.prototype.instanceId = '';
      ListInstanceOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListInstanceOperationsRequest.prototype.pageToken = '';
      ListInstanceOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(10).string(m.instanceId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListInstanceOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListInstanceOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceId = r.string();
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
      return ListInstanceOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceOperationsResponse = (function() {
      function ListInstanceOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceOperationsResponse.prototype.operations = $util.emptyArray;
      ListInstanceOperationsResponse.prototype.nextPageToken = '';
      ListInstanceOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListInstanceOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListInstanceOperationsResponse();
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
      return ListInstanceOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.ResourcesSpec = (function() {
      function ResourcesSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ResourcesSpec.prototype.memory = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.prototype.cores = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.prototype.coreFraction = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.prototype.gpus = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.memory != null && m.hasOwnProperty('memory')) w.uint32(8).int64(m.memory);
        if (m.cores != null && m.hasOwnProperty('cores')) w.uint32(16).int64(m.cores);
        if (m.coreFraction != null && m.hasOwnProperty('coreFraction')) w.uint32(24).int64(m.coreFraction);
        if (m.gpus != null && m.hasOwnProperty('gpus')) w.uint32(32).int64(m.gpus);
        return w;
      };
      ResourcesSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ResourcesSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.memory = r.int64();
              break;
            case 2:
              m.cores = r.int64();
              break;
            case 3:
              m.coreFraction = r.int64();
              break;
            case 4:
              m.gpus = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ResourcesSpec;
    })();
  })(root);
  (function($root) {
    $root.AttachedDiskSpec = (function() {
      function AttachedDiskSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AttachedDiskSpec.prototype.mode = 0;
      AttachedDiskSpec.prototype.deviceName = '';
      AttachedDiskSpec.prototype.autoDelete = false;
      AttachedDiskSpec.prototype.diskSpec = null;
      AttachedDiskSpec.prototype.diskId = '';
      let $oneOfFields;
      Object.defineProperty(AttachedDiskSpec.prototype, 'disk', {
        get: $util.oneOfGetter(($oneOfFields = ['diskSpec', 'diskId'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      AttachedDiskSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.mode != null && m.hasOwnProperty('mode')) w.uint32(8).int32(m.mode);
        if (m.deviceName != null && m.hasOwnProperty('deviceName')) w.uint32(18).string(m.deviceName);
        if (m.autoDelete != null && m.hasOwnProperty('autoDelete')) w.uint32(24).bool(m.autoDelete);
        if (m.diskSpec != null && m.hasOwnProperty('diskSpec')) $root.api.compute.v1.AttachedDiskSpec.DiskSpec.encode(m.diskSpec, w.uint32(34).fork()).ldelim();
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(42).string(m.diskId);
        return w;
      };
      AttachedDiskSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.AttachedDiskSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.mode = r.int32();
              break;
            case 2:
              m.deviceName = r.string();
              break;
            case 3:
              m.autoDelete = r.bool();
              break;
            case 4:
              m.diskSpec = $root.api.compute.v1.AttachedDiskSpec.DiskSpec.decode(r, r.uint32());
              break;
            case 5:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Mode = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'MODE_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'READ_ONLY')] = 1;
        values[(valuesById[2] = 'READ_WRITE')] = 2;
        return values;
      })();
      AttachedDiskSpec.Mode = Mode;
      AttachedDiskSpec.DiskSpec = (function() {
        function DiskSpec(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        DiskSpec.prototype.name = '';
        DiskSpec.prototype.description = '';
        DiskSpec.prototype.typeId = '';
        DiskSpec.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        DiskSpec.prototype.imageId = '';
        DiskSpec.prototype.snapshotId = '';
        let $oneOfFields;
        Object.defineProperty(DiskSpec.prototype, 'source', {
          get: $util.oneOfGetter(($oneOfFields = ['imageId', 'snapshotId'])),
          set: $util.oneOfSetter($oneOfFields)
        });
        DiskSpec.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
          if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
          if (m.typeId != null && m.hasOwnProperty('typeId')) w.uint32(26).string(m.typeId);
          if (m.size != null && m.hasOwnProperty('size')) w.uint32(32).int64(m.size);
          if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(42).string(m.imageId);
          if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(50).string(m.snapshotId);
          return w;
        };
        DiskSpec.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.compute.v1.AttachedDiskSpec.DiskSpec();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.name = r.string();
                break;
              case 2:
                m.description = r.string();
                break;
              case 3:
                m.typeId = r.string();
                break;
              case 4:
                m.size = r.int64();
                break;
              case 5:
                m.imageId = r.string();
                break;
              case 6:
                m.snapshotId = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return DiskSpec;
      })();
      return AttachedDiskSpec;
    })();
  })(root);
  (function($root) {
    $root.NetworkInterfaceSpec = (function() {
      function NetworkInterfaceSpec(p) {
        this.securityGroupIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NetworkInterfaceSpec.prototype.subnetId = '';
      NetworkInterfaceSpec.prototype.primaryV4AddressSpec = null;
      NetworkInterfaceSpec.prototype.primaryV6AddressSpec = null;
      NetworkInterfaceSpec.prototype.securityGroupIds = $util.emptyArray;
      NetworkInterfaceSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        if (m.primaryV4AddressSpec != null && m.hasOwnProperty('primaryV4AddressSpec')) $root.api.compute.v1.PrimaryAddressSpec.encode(m.primaryV4AddressSpec, w.uint32(18).fork()).ldelim();
        if (m.primaryV6AddressSpec != null && m.hasOwnProperty('primaryV6AddressSpec')) $root.api.compute.v1.PrimaryAddressSpec.encode(m.primaryV6AddressSpec, w.uint32(26).fork()).ldelim();
        if (m.securityGroupIds != null && m.securityGroupIds.length) {
          for (let i = 0; i < m.securityGroupIds.length; ++i) w.uint32(50).string(m.securityGroupIds[i]);
        }
        return w;
      };
      NetworkInterfaceSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.NetworkInterfaceSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            case 2:
              m.primaryV4AddressSpec = $root.api.compute.v1.PrimaryAddressSpec.decode(r, r.uint32());
              break;
            case 3:
              m.primaryV6AddressSpec = $root.api.compute.v1.PrimaryAddressSpec.decode(r, r.uint32());
              break;
            case 6:
              if (!(m.securityGroupIds && m.securityGroupIds.length)) m.securityGroupIds = [];
              m.securityGroupIds.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NetworkInterfaceSpec;
    })();
  })(root);
  (function($root) {
    $root.PrimaryAddressSpec = (function() {
      function PrimaryAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PrimaryAddressSpec.prototype.address = '';
      PrimaryAddressSpec.prototype.oneToOneNatSpec = null;
      PrimaryAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(10).string(m.address);
        if (m.oneToOneNatSpec != null && m.hasOwnProperty('oneToOneNatSpec')) $root.api.compute.v1.OneToOneNatSpec.encode(m.oneToOneNatSpec, w.uint32(18).fork()).ldelim();
        return w;
      };
      PrimaryAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.PrimaryAddressSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.address = r.string();
              break;
            case 2:
              m.oneToOneNatSpec = $root.api.compute.v1.OneToOneNatSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return PrimaryAddressSpec;
    })();
  })(root);
  (function($root) {
    $root.OneToOneNatSpec = (function() {
      function OneToOneNatSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      OneToOneNatSpec.prototype.ipVersion = 0;
      OneToOneNatSpec.prototype.address = '';
      OneToOneNatSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.ipVersion != null && m.hasOwnProperty('ipVersion')) w.uint32(8).int32(m.ipVersion);
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(18).string(m.address);
        return w;
      };
      OneToOneNatSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.OneToOneNatSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.ipVersion = r.int32();
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
      return OneToOneNatSpec;
    })();
  })(root);
  (function($root) {
    $root.PlacementGroup = (function() {
      function PlacementGroup(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PlacementGroup.prototype.id = '';
      PlacementGroup.prototype.folderId = '';
      PlacementGroup.prototype.createdAt = null;
      PlacementGroup.prototype.name = '';
      PlacementGroup.prototype.description = '';
      PlacementGroup.prototype.labels = $util.emptyObject;
      PlacementGroup.prototype.spreadPlacementStrategy = null;
      let $oneOfFields;
      Object.defineProperty(PlacementGroup.prototype, 'placementStrategy', {
        get: $util.oneOfGetter(($oneOfFields = ['spreadPlacementStrategy'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      PlacementGroup.encode = function encode(m, w) {
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
        if (m.spreadPlacementStrategy != null && m.hasOwnProperty('spreadPlacementStrategy')) $root.api.compute.v1.SpreadPlacementStrategy.encode(m.spreadPlacementStrategy, w.uint32(58).fork()).ldelim();
        return w;
      };
      PlacementGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.PlacementGroup(),
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
              m.spreadPlacementStrategy = $root.api.compute.v1.SpreadPlacementStrategy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return PlacementGroup;
    })();
  })(root);
  (function($root) {
    $root.SpreadPlacementStrategy = (function() {
      function SpreadPlacementStrategy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SpreadPlacementStrategy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      SpreadPlacementStrategy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.SpreadPlacementStrategy();
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
      return SpreadPlacementStrategy;
    })();
  })(root);
  (function($root) {
    $root.PlacementGroupService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.PlacementGroupService.makeGrpcConstructor());
    };
    $root.PlacementGroupService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.compute.v1.PlacementGroupService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetPlacementGroupRequest,
          responseType: $root.api.compute.v1.PlacementGroup,
          requestSerialize: r => {
            return $root.api.compute.v1.GetPlacementGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetPlacementGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.PlacementGroup.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.PlacementGroup.decode
        },
        list: {
          path: '/yandex.cloud.compute.v1.PlacementGroupService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListPlacementGroupsRequest,
          responseType: $root.api.compute.v1.ListPlacementGroupsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListPlacementGroupsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListPlacementGroupsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListPlacementGroupsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListPlacementGroupsResponse.decode
        },
        create: {
          path: '/yandex.cloud.compute.v1.PlacementGroupService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.CreatePlacementGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.CreatePlacementGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.CreatePlacementGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.compute.v1.PlacementGroupService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.UpdatePlacementGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.UpdatePlacementGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.UpdatePlacementGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.compute.v1.PlacementGroupService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.DeletePlacementGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.DeletePlacementGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.DeletePlacementGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listInstances: {
          path: '/yandex.cloud.compute.v1.PlacementGroupService/ListInstances',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListPlacementGroupInstancesRequest,
          responseType: $root.api.compute.v1.ListPlacementGroupInstancesResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListPlacementGroupInstancesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListPlacementGroupInstancesRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListPlacementGroupInstancesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListPlacementGroupInstancesResponse.decode
        },
        listOperations: {
          path: '/yandex.cloud.compute.v1.PlacementGroupService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListPlacementGroupOperationsRequest,
          responseType: $root.api.compute.v1.ListPlacementGroupOperationsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListPlacementGroupOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListPlacementGroupOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListPlacementGroupOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListPlacementGroupOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'compute';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetPlacementGroupRequest = (function() {
      function GetPlacementGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetPlacementGroupRequest.prototype.placementGroupId = '';
      GetPlacementGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
        return w;
      };
      GetPlacementGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetPlacementGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetPlacementGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.ListPlacementGroupsRequest = (function() {
      function ListPlacementGroupsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListPlacementGroupsRequest.prototype.folderId = '';
      ListPlacementGroupsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListPlacementGroupsRequest.prototype.pageToken = '';
      ListPlacementGroupsRequest.prototype.filter = '';
      ListPlacementGroupsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListPlacementGroupsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListPlacementGroupsRequest();
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
      return ListPlacementGroupsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListPlacementGroupsResponse = (function() {
      function ListPlacementGroupsResponse(p) {
        this.placementGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListPlacementGroupsResponse.prototype.placementGroups = $util.emptyArray;
      ListPlacementGroupsResponse.prototype.nextPageToken = '';
      ListPlacementGroupsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroups != null && m.placementGroups.length) {
          for (let i = 0; i < m.placementGroups.length; ++i) $root.api.compute.v1.PlacementGroup.encode(m.placementGroups[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListPlacementGroupsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListPlacementGroupsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.placementGroups && m.placementGroups.length)) m.placementGroups = [];
              m.placementGroups.push($root.api.compute.v1.PlacementGroup.decode(r, r.uint32()));
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
      return ListPlacementGroupsResponse;
    })();
  })(root);
  (function($root) {
    $root.CreatePlacementGroupRequest = (function() {
      function CreatePlacementGroupRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreatePlacementGroupRequest.prototype.folderId = '';
      CreatePlacementGroupRequest.prototype.name = '';
      CreatePlacementGroupRequest.prototype.description = '';
      CreatePlacementGroupRequest.prototype.labels = $util.emptyObject;
      CreatePlacementGroupRequest.prototype.spreadPlacementStrategy = null;
      let $oneOfFields;
      Object.defineProperty(CreatePlacementGroupRequest.prototype, 'placementStrategy', {
        get: $util.oneOfGetter(($oneOfFields = ['spreadPlacementStrategy'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      CreatePlacementGroupRequest.encode = function encode(m, w) {
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
        if (m.spreadPlacementStrategy != null && m.hasOwnProperty('spreadPlacementStrategy')) $root.api.compute.v1.SpreadPlacementStrategy.encode(m.spreadPlacementStrategy, w.uint32(42).fork()).ldelim();
        return w;
      };
      CreatePlacementGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreatePlacementGroupRequest(),
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
              m.spreadPlacementStrategy = $root.api.compute.v1.SpreadPlacementStrategy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreatePlacementGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.CreatePlacementGroupMetadata = (function() {
      function CreatePlacementGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreatePlacementGroupMetadata.prototype.placementGroupId = '';
      CreatePlacementGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
        return w;
      };
      CreatePlacementGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreatePlacementGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreatePlacementGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdatePlacementGroupRequest = (function() {
      function UpdatePlacementGroupRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdatePlacementGroupRequest.prototype.placementGroupId = '';
      UpdatePlacementGroupRequest.prototype.updateMask = null;
      UpdatePlacementGroupRequest.prototype.name = '';
      UpdatePlacementGroupRequest.prototype.description = '';
      UpdatePlacementGroupRequest.prototype.labels = $util.emptyObject;
      UpdatePlacementGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
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
      UpdatePlacementGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdatePlacementGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
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
      return UpdatePlacementGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdatePlacementGroupMetadata = (function() {
      function UpdatePlacementGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdatePlacementGroupMetadata.prototype.placementGroupId = '';
      UpdatePlacementGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
        return w;
      };
      UpdatePlacementGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdatePlacementGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdatePlacementGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeletePlacementGroupRequest = (function() {
      function DeletePlacementGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeletePlacementGroupRequest.prototype.placementGroupId = '';
      DeletePlacementGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
        return w;
      };
      DeletePlacementGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeletePlacementGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeletePlacementGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.DeletePlacementGroupMetadata = (function() {
      function DeletePlacementGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeletePlacementGroupMetadata.prototype.placementGroupId = '';
      DeletePlacementGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
        return w;
      };
      DeletePlacementGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeletePlacementGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeletePlacementGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListPlacementGroupInstancesRequest = (function() {
      function ListPlacementGroupInstancesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListPlacementGroupInstancesRequest.prototype.placementGroupId = '';
      ListPlacementGroupInstancesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListPlacementGroupInstancesRequest.prototype.pageToken = '';
      ListPlacementGroupInstancesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListPlacementGroupInstancesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListPlacementGroupInstancesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
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
      return ListPlacementGroupInstancesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListPlacementGroupInstancesResponse = (function() {
      function ListPlacementGroupInstancesResponse(p) {
        this.instances = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListPlacementGroupInstancesResponse.prototype.instances = $util.emptyArray;
      ListPlacementGroupInstancesResponse.prototype.nextPageToken = '';
      ListPlacementGroupInstancesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instances != null && m.instances.length) {
          for (let i = 0; i < m.instances.length; ++i) $root.api.compute.v1.Instance.encode(m.instances[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListPlacementGroupInstancesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListPlacementGroupInstancesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.instances && m.instances.length)) m.instances = [];
              m.instances.push($root.api.compute.v1.Instance.decode(r, r.uint32()));
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
      return ListPlacementGroupInstancesResponse;
    })();
  })(root);
  (function($root) {
    $root.ListPlacementGroupOperationsRequest = (function() {
      function ListPlacementGroupOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListPlacementGroupOperationsRequest.prototype.placementGroupId = '';
      ListPlacementGroupOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListPlacementGroupOperationsRequest.prototype.pageToken = '';
      ListPlacementGroupOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.placementGroupId != null && m.hasOwnProperty('placementGroupId')) w.uint32(10).string(m.placementGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListPlacementGroupOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListPlacementGroupOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.placementGroupId = r.string();
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
      return ListPlacementGroupOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListPlacementGroupOperationsResponse = (function() {
      function ListPlacementGroupOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListPlacementGroupOperationsResponse.prototype.operations = $util.emptyArray;
      ListPlacementGroupOperationsResponse.prototype.nextPageToken = '';
      ListPlacementGroupOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListPlacementGroupOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListPlacementGroupOperationsResponse();
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
      return ListPlacementGroupOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.Snapshot = (function() {
      function Snapshot(p) {
        this.labels = {};
        this.productIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Snapshot.prototype.id = '';
      Snapshot.prototype.folderId = '';
      Snapshot.prototype.createdAt = null;
      Snapshot.prototype.name = '';
      Snapshot.prototype.description = '';
      Snapshot.prototype.labels = $util.emptyObject;
      Snapshot.prototype.storageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Snapshot.prototype.diskSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Snapshot.prototype.productIds = $util.emptyArray;
      Snapshot.prototype.status = 0;
      Snapshot.prototype.sourceDiskId = '';
      Snapshot.encode = function encode(m, w) {
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
        if (m.storageSize != null && m.hasOwnProperty('storageSize')) w.uint32(56).int64(m.storageSize);
        if (m.diskSize != null && m.hasOwnProperty('diskSize')) w.uint32(64).int64(m.diskSize);
        if (m.productIds != null && m.productIds.length) {
          for (let i = 0; i < m.productIds.length; ++i) w.uint32(74).string(m.productIds[i]);
        }
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(80).int32(m.status);
        if (m.sourceDiskId != null && m.hasOwnProperty('sourceDiskId')) w.uint32(90).string(m.sourceDiskId);
        return w;
      };
      Snapshot.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.Snapshot(),
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
              m.storageSize = r.int64();
              break;
            case 8:
              m.diskSize = r.int64();
              break;
            case 9:
              if (!(m.productIds && m.productIds.length)) m.productIds = [];
              m.productIds.push(r.string());
              break;
            case 10:
              m.status = r.int32();
              break;
            case 11:
              m.sourceDiskId = r.string();
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
        values[(valuesById[2] = 'READY')] = 2;
        values[(valuesById[3] = 'ERROR')] = 3;
        values[(valuesById[4] = 'DELETING')] = 4;
        return values;
      })();
      Snapshot.Status = Status;
      return Snapshot;
    })();
  })(root);
  (function($root) {
    $root.SnapshotService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.SnapshotService.makeGrpcConstructor());
    };
    $root.SnapshotService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.compute.v1.SnapshotService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetSnapshotRequest,
          responseType: $root.api.compute.v1.Snapshot,
          requestSerialize: r => {
            return $root.api.compute.v1.GetSnapshotRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetSnapshotRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.Snapshot.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.Snapshot.decode
        },
        list: {
          path: '/yandex.cloud.compute.v1.SnapshotService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListSnapshotsRequest,
          responseType: $root.api.compute.v1.ListSnapshotsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListSnapshotsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListSnapshotsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListSnapshotsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListSnapshotsResponse.decode
        },
        create: {
          path: '/yandex.cloud.compute.v1.SnapshotService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.CreateSnapshotRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.CreateSnapshotRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.CreateSnapshotRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.compute.v1.SnapshotService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.UpdateSnapshotRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.UpdateSnapshotRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.UpdateSnapshotRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.compute.v1.SnapshotService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.DeleteSnapshotRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.DeleteSnapshotRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.DeleteSnapshotRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.compute.v1.SnapshotService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListSnapshotOperationsRequest,
          responseType: $root.api.compute.v1.ListSnapshotOperationsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListSnapshotOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListSnapshotOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListSnapshotOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListSnapshotOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'compute';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetSnapshotRequest = (function() {
      function GetSnapshotRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetSnapshotRequest.prototype.snapshotId = '';
      GetSnapshotRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(10).string(m.snapshotId);
        return w;
      };
      GetSnapshotRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetSnapshotRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.snapshotId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetSnapshotRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSnapshotsRequest = (function() {
      function ListSnapshotsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSnapshotsRequest.prototype.folderId = '';
      ListSnapshotsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSnapshotsRequest.prototype.pageToken = '';
      ListSnapshotsRequest.prototype.filter = '';
      ListSnapshotsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListSnapshotsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListSnapshotsRequest();
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
      return ListSnapshotsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSnapshotsResponse = (function() {
      function ListSnapshotsResponse(p) {
        this.snapshots = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSnapshotsResponse.prototype.snapshots = $util.emptyArray;
      ListSnapshotsResponse.prototype.nextPageToken = '';
      ListSnapshotsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.snapshots != null && m.snapshots.length) {
          for (let i = 0; i < m.snapshots.length; ++i) $root.api.compute.v1.Snapshot.encode(m.snapshots[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSnapshotsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListSnapshotsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.snapshots && m.snapshots.length)) m.snapshots = [];
              m.snapshots.push($root.api.compute.v1.Snapshot.decode(r, r.uint32()));
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
      return ListSnapshotsResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateSnapshotRequest = (function() {
      function CreateSnapshotRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateSnapshotRequest.prototype.folderId = '';
      CreateSnapshotRequest.prototype.diskId = '';
      CreateSnapshotRequest.prototype.name = '';
      CreateSnapshotRequest.prototype.description = '';
      CreateSnapshotRequest.prototype.labels = $util.emptyObject;
      CreateSnapshotRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(18).string(m.diskId);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
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
      CreateSnapshotRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreateSnapshotRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.diskId = r.string();
              break;
            case 3:
              m.name = r.string();
              break;
            case 4:
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
      return CreateSnapshotRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateSnapshotMetadata = (function() {
      function CreateSnapshotMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateSnapshotMetadata.prototype.snapshotId = '';
      CreateSnapshotMetadata.prototype.diskId = '';
      CreateSnapshotMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(10).string(m.snapshotId);
        if (m.diskId != null && m.hasOwnProperty('diskId')) w.uint32(18).string(m.diskId);
        return w;
      };
      CreateSnapshotMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.CreateSnapshotMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.snapshotId = r.string();
              break;
            case 2:
              m.diskId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateSnapshotMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateSnapshotRequest = (function() {
      function UpdateSnapshotRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSnapshotRequest.prototype.snapshotId = '';
      UpdateSnapshotRequest.prototype.updateMask = null;
      UpdateSnapshotRequest.prototype.name = '';
      UpdateSnapshotRequest.prototype.description = '';
      UpdateSnapshotRequest.prototype.labels = $util.emptyObject;
      UpdateSnapshotRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(10).string(m.snapshotId);
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
      UpdateSnapshotRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateSnapshotRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.snapshotId = r.string();
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
      return UpdateSnapshotRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateSnapshotMetadata = (function() {
      function UpdateSnapshotMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateSnapshotMetadata.prototype.snapshotId = '';
      UpdateSnapshotMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(10).string(m.snapshotId);
        return w;
      };
      UpdateSnapshotMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.UpdateSnapshotMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.snapshotId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateSnapshotMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteSnapshotRequest = (function() {
      function DeleteSnapshotRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteSnapshotRequest.prototype.snapshotId = '';
      DeleteSnapshotRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(10).string(m.snapshotId);
        return w;
      };
      DeleteSnapshotRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeleteSnapshotRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.snapshotId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteSnapshotRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteSnapshotMetadata = (function() {
      function DeleteSnapshotMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteSnapshotMetadata.prototype.snapshotId = '';
      DeleteSnapshotMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(10).string(m.snapshotId);
        return w;
      };
      DeleteSnapshotMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.DeleteSnapshotMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.snapshotId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteSnapshotMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListSnapshotOperationsRequest = (function() {
      function ListSnapshotOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSnapshotOperationsRequest.prototype.snapshotId = '';
      ListSnapshotOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListSnapshotOperationsRequest.prototype.pageToken = '';
      ListSnapshotOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(10).string(m.snapshotId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListSnapshotOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListSnapshotOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.snapshotId = r.string();
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
      return ListSnapshotOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListSnapshotOperationsResponse = (function() {
      function ListSnapshotOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListSnapshotOperationsResponse.prototype.operations = $util.emptyArray;
      ListSnapshotOperationsResponse.prototype.nextPageToken = '';
      ListSnapshotOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListSnapshotOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListSnapshotOperationsResponse();
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
      return ListSnapshotOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.Zone = (function() {
      function Zone(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Zone.prototype.id = '';
      Zone.prototype.regionId = '';
      Zone.prototype.status = 0;
      Zone.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.regionId != null && m.hasOwnProperty('regionId')) w.uint32(18).string(m.regionId);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(24).int32(m.status);
        return w;
      };
      Zone.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.Zone();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.regionId = r.string();
              break;
            case 3:
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
        values[(valuesById[1] = 'UP')] = 1;
        values[(valuesById[2] = 'DOWN')] = 2;
        return values;
      })();
      Zone.Status = Status;
      return Zone;
    })();
  })(root);
  (function($root) {
    $root.ZoneService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.ZoneService.makeGrpcConstructor());
    };
    $root.ZoneService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.compute.v1.ZoneService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.GetZoneRequest,
          responseType: $root.api.compute.v1.Zone,
          requestSerialize: r => {
            return $root.api.compute.v1.GetZoneRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.GetZoneRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.Zone.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.Zone.decode
        },
        list: {
          path: '/yandex.cloud.compute.v1.ZoneService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.ListZonesRequest,
          responseType: $root.api.compute.v1.ListZonesResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.ListZonesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.ListZonesRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.ListZonesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.ListZonesResponse.decode
        }
      });
      ctor.__endpointId = 'compute';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.ListZonesRequest = (function() {
      function ListZonesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListZonesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListZonesRequest.prototype.pageToken = '';
      ListZonesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(8).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(18).string(m.pageToken);
        return w;
      };
      ListZonesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListZonesRequest();
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
      return ListZonesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListZonesResponse = (function() {
      function ListZonesResponse(p) {
        this.zones = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListZonesResponse.prototype.zones = $util.emptyArray;
      ListZonesResponse.prototype.nextPageToken = '';
      ListZonesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zones != null && m.zones.length) {
          for (let i = 0; i < m.zones.length; ++i) $root.api.compute.v1.Zone.encode(m.zones[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListZonesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.ListZonesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.zones && m.zones.length)) m.zones = [];
              m.zones.push($root.api.compute.v1.Zone.decode(r, r.uint32()));
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
      return ListZonesResponse;
    })();
  })(root);
  (function($root) {
    $root.GetZoneRequest = (function() {
      function GetZoneRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetZoneRequest.prototype.zoneId = '';
      GetZoneRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
        return w;
      };
      GetZoneRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.GetZoneRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zoneId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetZoneRequest;
    })();
  })(root);
  registar.register('api.compute.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
