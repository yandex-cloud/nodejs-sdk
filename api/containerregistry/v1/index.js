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
    $root.Blob = (function() {
      function Blob(p) {
        this.urls = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Blob.prototype.id = '';
      Blob.prototype.digest = '';
      Blob.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Blob.prototype.urls = $util.emptyArray;
      Blob.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.digest != null && m.hasOwnProperty('digest')) w.uint32(18).string(m.digest);
        if (m.size != null && m.hasOwnProperty('size')) w.uint32(24).int64(m.size);
        if (m.urls != null && m.urls.length) {
          for (let i = 0; i < m.urls.length; ++i) w.uint32(34).string(m.urls[i]);
        }
        return w;
      };
      Blob.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.Blob();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.digest = r.string();
              break;
            case 3:
              m.size = r.int64();
              break;
            case 4:
              if (!(m.urls && m.urls.length)) m.urls = [];
              m.urls.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Blob;
    })();
  })(root);
  (function($root) {
    $root.Image = (function() {
      function Image(p) {
        this.layers = [];
        this.tags = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Image.prototype.id = '';
      Image.prototype.name = '';
      Image.prototype.digest = '';
      Image.prototype.compressedSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Image.prototype.config = null;
      Image.prototype.layers = $util.emptyArray;
      Image.prototype.tags = $util.emptyArray;
      Image.prototype.createdAt = null;
      Image.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(18).string(m.name);
        if (m.digest != null && m.hasOwnProperty('digest')) w.uint32(26).string(m.digest);
        if (m.compressedSize != null && m.hasOwnProperty('compressedSize')) w.uint32(32).int64(m.compressedSize);
        if (m.config != null && m.hasOwnProperty('config')) $root.api.containerregistry.v1.Blob.encode(m.config, w.uint32(42).fork()).ldelim();
        if (m.layers != null && m.layers.length) {
          for (let i = 0; i < m.layers.length; ++i) $root.api.containerregistry.v1.Blob.encode(m.layers[i], w.uint32(50).fork()).ldelim();
        }
        if (m.tags != null && m.tags.length) {
          for (let i = 0; i < m.tags.length; ++i) w.uint32(58).string(m.tags[i]);
        }
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(66).fork()).ldelim();
        return w;
      };
      Image.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.Image();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.name = r.string();
              break;
            case 3:
              m.digest = r.string();
              break;
            case 4:
              m.compressedSize = r.int64();
              break;
            case 5:
              m.config = $root.api.containerregistry.v1.Blob.decode(r, r.uint32());
              break;
            case 6:
              if (!(m.layers && m.layers.length)) m.layers = [];
              m.layers.push($root.api.containerregistry.v1.Blob.decode(r, r.uint32()));
              break;
            case 7:
              if (!(m.tags && m.tags.length)) m.tags = [];
              m.tags.push(r.string());
              break;
            case 8:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Image;
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
        list: {
          path: '/yandex.cloud.containerregistry.v1.ImageService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.ListImagesRequest,
          responseType: $root.api.containerregistry.v1.ListImagesResponse,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.ListImagesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.ListImagesRequest.decode,
          responseSerialize: r => {
            return $root.api.containerregistry.v1.ListImagesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.containerregistry.v1.ListImagesResponse.decode
        },
        get: {
          path: '/yandex.cloud.containerregistry.v1.ImageService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.GetImageRequest,
          responseType: $root.api.containerregistry.v1.Image,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.GetImageRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.GetImageRequest.decode,
          responseSerialize: r => {
            return $root.api.containerregistry.v1.Image.encode(r).finish();
          },
          responseDeserialize: $root.api.containerregistry.v1.Image.decode
        },
        delete: {
          path: '/yandex.cloud.containerregistry.v1.ImageService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.DeleteImageRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.DeleteImageRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.DeleteImageRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        }
      });
      ctor.__endpointId = 'container-registry';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.ListImagesRequest = (function() {
      function ListImagesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListImagesRequest.prototype.registryId = '';
      ListImagesRequest.prototype.repositoryName = '';
      ListImagesRequest.prototype.folderId = '';
      ListImagesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListImagesRequest.prototype.pageToken = '';
      ListImagesRequest.prototype.filter = '';
      ListImagesRequest.prototype.orderBy = '';
      ListImagesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.repositoryName != null && m.hasOwnProperty('repositoryName')) w.uint32(18).string(m.repositoryName);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(24).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(34).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(42).string(m.filter);
        if (m.orderBy != null && m.hasOwnProperty('orderBy')) w.uint32(50).string(m.orderBy);
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(58).string(m.folderId);
        return w;
      };
      ListImagesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.ListImagesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.repositoryName = r.string();
              break;
            case 7:
              m.folderId = r.string();
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
            case 6:
              m.orderBy = r.string();
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
          for (let i = 0; i < m.images.length; ++i) $root.api.containerregistry.v1.Image.encode(m.images[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListImagesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.ListImagesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.images && m.images.length)) m.images = [];
              m.images.push($root.api.containerregistry.v1.Image.decode(r, r.uint32()));
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
          m = new $root.api.containerregistry.v1.GetImageRequest();
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
          m = new $root.api.containerregistry.v1.DeleteImageRequest();
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
          m = new $root.api.containerregistry.v1.DeleteImageMetadata();
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
    $root.Registry = (function() {
      function Registry(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Registry.prototype.id = '';
      Registry.prototype.folderId = '';
      Registry.prototype.name = '';
      Registry.prototype.status = 0;
      Registry.prototype.createdAt = null;
      Registry.prototype.labels = $util.emptyObject;
      Registry.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(18).string(m.folderId);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(32).int32(m.status);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(42).fork()).ldelim();
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
      Registry.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.Registry(),
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
              m.name = r.string();
              break;
            case 4:
              m.status = r.int32();
              break;
            case 5:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
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
      let Status = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'STATUS_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'CREATING')] = 1;
        values[(valuesById[2] = 'ACTIVE')] = 2;
        values[(valuesById[3] = 'DELETING')] = 3;
        return values;
      })();
      Registry.Status = Status;
      return Registry;
    })();
  })(root);
  (function($root) {
    $root.RegistryService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.RegistryService.makeGrpcConstructor());
    };
    $root.RegistryService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.containerregistry.v1.RegistryService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.GetRegistryRequest,
          responseType: $root.api.containerregistry.v1.Registry,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.GetRegistryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.GetRegistryRequest.decode,
          responseSerialize: r => {
            return $root.api.containerregistry.v1.Registry.encode(r).finish();
          },
          responseDeserialize: $root.api.containerregistry.v1.Registry.decode
        },
        list: {
          path: '/yandex.cloud.containerregistry.v1.RegistryService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.ListRegistriesRequest,
          responseType: $root.api.containerregistry.v1.ListRegistriesResponse,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.ListRegistriesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.ListRegistriesRequest.decode,
          responseSerialize: r => {
            return $root.api.containerregistry.v1.ListRegistriesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.containerregistry.v1.ListRegistriesResponse.decode
        },
        create: {
          path: '/yandex.cloud.containerregistry.v1.RegistryService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.CreateRegistryRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.CreateRegistryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.CreateRegistryRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.containerregistry.v1.RegistryService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.UpdateRegistryRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.UpdateRegistryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.UpdateRegistryRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.containerregistry.v1.RegistryService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.DeleteRegistryRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.DeleteRegistryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.DeleteRegistryRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listAccessBindings: {
          path: '/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings',
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
          path: '/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings',
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
          path: '/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings',
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
      ctor.__endpointId = 'container-registry';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetRegistryRequest = (function() {
      function GetRegistryRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetRegistryRequest.prototype.registryId = '';
      GetRegistryRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        return w;
      };
      GetRegistryRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.GetRegistryRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetRegistryRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRegistriesRequest = (function() {
      function ListRegistriesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRegistriesRequest.prototype.folderId = '';
      ListRegistriesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListRegistriesRequest.prototype.pageToken = '';
      ListRegistriesRequest.prototype.filter = '';
      ListRegistriesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListRegistriesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.ListRegistriesRequest();
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
      return ListRegistriesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRegistriesResponse = (function() {
      function ListRegistriesResponse(p) {
        this.registries = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRegistriesResponse.prototype.registries = $util.emptyArray;
      ListRegistriesResponse.prototype.nextPageToken = '';
      ListRegistriesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registries != null && m.registries.length) {
          for (let i = 0; i < m.registries.length; ++i) $root.api.containerregistry.v1.Registry.encode(m.registries[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListRegistriesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.ListRegistriesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.registries && m.registries.length)) m.registries = [];
              m.registries.push($root.api.containerregistry.v1.Registry.decode(r, r.uint32()));
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
      return ListRegistriesResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateRegistryRequest = (function() {
      function CreateRegistryRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateRegistryRequest.prototype.folderId = '';
      CreateRegistryRequest.prototype.name = '';
      CreateRegistryRequest.prototype.labels = $util.emptyObject;
      CreateRegistryRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(18).string(m.name);
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
      CreateRegistryRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.CreateRegistryRequest(),
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
      return CreateRegistryRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateRegistryMetadata = (function() {
      function CreateRegistryMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateRegistryMetadata.prototype.registryId = '';
      CreateRegistryMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        return w;
      };
      CreateRegistryMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.CreateRegistryMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateRegistryMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateRegistryRequest = (function() {
      function UpdateRegistryRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateRegistryRequest.prototype.registryId = '';
      UpdateRegistryRequest.prototype.updateMask = null;
      UpdateRegistryRequest.prototype.name = '';
      UpdateRegistryRequest.prototype.labels = $util.emptyObject;
      UpdateRegistryRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
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
      UpdateRegistryRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.UpdateRegistryRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.updateMask = $root.contrib.google.protobuf.FieldMask.decode(r, r.uint32());
              break;
            case 3:
              m.name = r.string();
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
      return UpdateRegistryRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateRegistryMetadata = (function() {
      function UpdateRegistryMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateRegistryMetadata.prototype.registryId = '';
      UpdateRegistryMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        return w;
      };
      UpdateRegistryMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.UpdateRegistryMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateRegistryMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteRegistryRequest = (function() {
      function DeleteRegistryRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteRegistryRequest.prototype.registryId = '';
      DeleteRegistryRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        return w;
      };
      DeleteRegistryRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.DeleteRegistryRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteRegistryRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteRegistryMetadata = (function() {
      function DeleteRegistryMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteRegistryMetadata.prototype.registryId = '';
      DeleteRegistryMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        return w;
      };
      DeleteRegistryMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.DeleteRegistryMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteRegistryMetadata;
    })();
  })(root);
  (function($root) {
    $root.Repository = (function() {
      function Repository(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Repository.prototype.name = '';
      Repository.prototype.id = '';
      Repository.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(18).string(m.id);
        return w;
      };
      Repository.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.Repository();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.id = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Repository;
    })();
  })(root);
  (function($root) {
    $root.RepositoryService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.RepositoryService.makeGrpcConstructor());
    };
    $root.RepositoryService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.containerregistry.v1.RepositoryService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.GetRepositoryRequest,
          responseType: $root.api.containerregistry.v1.Repository,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.GetRepositoryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.GetRepositoryRequest.decode,
          responseSerialize: r => {
            return $root.api.containerregistry.v1.Repository.encode(r).finish();
          },
          responseDeserialize: $root.api.containerregistry.v1.Repository.decode
        },
        getByName: {
          path: '/yandex.cloud.containerregistry.v1.RepositoryService/GetByName',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.GetRepositoryByNameRequest,
          responseType: $root.api.containerregistry.v1.Repository,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.GetRepositoryByNameRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.GetRepositoryByNameRequest.decode,
          responseSerialize: r => {
            return $root.api.containerregistry.v1.Repository.encode(r).finish();
          },
          responseDeserialize: $root.api.containerregistry.v1.Repository.decode
        },
        list: {
          path: '/yandex.cloud.containerregistry.v1.RepositoryService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.containerregistry.v1.ListRepositoriesRequest,
          responseType: $root.api.containerregistry.v1.ListRepositoriesResponse,
          requestSerialize: r => {
            return $root.api.containerregistry.v1.ListRepositoriesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.containerregistry.v1.ListRepositoriesRequest.decode,
          responseSerialize: r => {
            return $root.api.containerregistry.v1.ListRepositoriesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.containerregistry.v1.ListRepositoriesResponse.decode
        },
        listAccessBindings: {
          path: '/yandex.cloud.containerregistry.v1.RepositoryService/ListAccessBindings',
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
          path: '/yandex.cloud.containerregistry.v1.RepositoryService/SetAccessBindings',
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
          path: '/yandex.cloud.containerregistry.v1.RepositoryService/UpdateAccessBindings',
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
      ctor.__endpointId = 'container-registry';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetRepositoryRequest = (function() {
      function GetRepositoryRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetRepositoryRequest.prototype.repositoryId = '';
      GetRepositoryRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.repositoryId != null && m.hasOwnProperty('repositoryId')) w.uint32(10).string(m.repositoryId);
        return w;
      };
      GetRepositoryRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.GetRepositoryRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.repositoryId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetRepositoryRequest;
    })();
  })(root);
  (function($root) {
    $root.GetRepositoryByNameRequest = (function() {
      function GetRepositoryByNameRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetRepositoryByNameRequest.prototype.repositoryName = '';
      GetRepositoryByNameRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.repositoryName != null && m.hasOwnProperty('repositoryName')) w.uint32(10).string(m.repositoryName);
        return w;
      };
      GetRepositoryByNameRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.GetRepositoryByNameRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.repositoryName = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetRepositoryByNameRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRepositoriesRequest = (function() {
      function ListRepositoriesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRepositoriesRequest.prototype.registryId = '';
      ListRepositoriesRequest.prototype.folderId = '';
      ListRepositoriesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListRepositoriesRequest.prototype.pageToken = '';
      ListRepositoriesRequest.prototype.filter = '';
      ListRepositoriesRequest.prototype.orderBy = '';
      ListRepositoriesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        if (m.orderBy != null && m.hasOwnProperty('orderBy')) w.uint32(42).string(m.orderBy);
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(50).string(m.folderId);
        return w;
      };
      ListRepositoriesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.ListRepositoriesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 6:
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
            case 5:
              m.orderBy = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListRepositoriesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRepositoriesResponse = (function() {
      function ListRepositoriesResponse(p) {
        this.repositories = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRepositoriesResponse.prototype.repositories = $util.emptyArray;
      ListRepositoriesResponse.prototype.nextPageToken = '';
      ListRepositoriesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.repositories != null && m.repositories.length) {
          for (let i = 0; i < m.repositories.length; ++i) $root.api.containerregistry.v1.Repository.encode(m.repositories[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListRepositoriesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.containerregistry.v1.ListRepositoriesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.repositories && m.repositories.length)) m.repositories = [];
              m.repositories.push($root.api.containerregistry.v1.Repository.decode(r, r.uint32()));
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
      return ListRepositoriesResponse;
    })();
  })(root);
  registar.register('api.containerregistry.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
