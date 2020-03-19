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
  (function($root) {
    $root.Device = (function() {
      function Device(p) {
        this.topicAliases = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Device.prototype.id = '';
      Device.prototype.registryId = '';
      Device.prototype.createdAt = null;
      Device.prototype.name = '';
      Device.prototype.description = '';
      Device.prototype.topicAliases = $util.emptyObject;
      Device.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(18).string(m.registryId);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(34).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(42).string(m.description);
        if (m.topicAliases != null && m.hasOwnProperty('topicAliases')) {
          for (let ks = Object.keys(m.topicAliases), i = 0; i < ks.length; ++i) {
            w.uint32(50)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.topicAliases[ks[i]])
              .ldelim();
          }
        }
        return w;
      };
      Device.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.Device(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.registryId = r.string();
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
              if (m.topicAliases === $util.emptyObject) m.topicAliases = {};
              k = r.string();
              r.pos++;
              m.topicAliases[k] = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Device;
    })();
  })(root);
  (function($root) {
    $root.DeviceCertificate = (function() {
      function DeviceCertificate(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeviceCertificate.prototype.deviceId = '';
      DeviceCertificate.prototype.fingerprint = '';
      DeviceCertificate.prototype.certificateData = '';
      DeviceCertificate.prototype.createdAt = null;
      DeviceCertificate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.fingerprint != null && m.hasOwnProperty('fingerprint')) w.uint32(18).string(m.fingerprint);
        if (m.certificateData != null && m.hasOwnProperty('certificateData')) w.uint32(26).string(m.certificateData);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(34).fork()).ldelim();
        return w;
      };
      DeviceCertificate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeviceCertificate();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.fingerprint = r.string();
              break;
            case 3:
              m.certificateData = r.string();
              break;
            case 4:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeviceCertificate;
    })();
  })(root);
  (function($root) {
    $root.DevicePassword = (function() {
      function DevicePassword(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DevicePassword.prototype.deviceId = '';
      DevicePassword.prototype.id = '';
      DevicePassword.prototype.createdAt = null;
      DevicePassword.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(18).string(m.id);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        return w;
      };
      DevicePassword.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DevicePassword();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.id = r.string();
              break;
            case 3:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DevicePassword;
    })();
  })(root);
  (function($root) {
    $root.DeviceDataService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.DeviceDataService.makeGrpcConstructor());
    };
    $root.DeviceDataService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        publish: {
          path: '/yandex.cloud.iot.devices.v1.DeviceDataService/Publish',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.PublishDeviceDataRequest,
          responseType: $root.api.iot.devices.v1.PublishDeviceDataResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.PublishDeviceDataRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.PublishDeviceDataRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.PublishDeviceDataResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.PublishDeviceDataResponse.decode
        }
      });
      ctor.__endpointId = 'iot-data';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.PublishDeviceDataRequest = (function() {
      function PublishDeviceDataRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PublishDeviceDataRequest.prototype.deviceId = '';
      PublishDeviceDataRequest.prototype.topic = '';
      PublishDeviceDataRequest.prototype.data = $util.newBuffer([]);
      PublishDeviceDataRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.topic != null && m.hasOwnProperty('topic')) w.uint32(18).string(m.topic);
        if (m.data != null && m.hasOwnProperty('data')) w.uint32(26).bytes(m.data);
        return w;
      };
      PublishDeviceDataRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.PublishDeviceDataRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.topic = r.string();
              break;
            case 3:
              m.data = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return PublishDeviceDataRequest;
    })();
  })(root);
  (function($root) {
    $root.PublishDeviceDataResponse = (function() {
      function PublishDeviceDataResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PublishDeviceDataResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      PublishDeviceDataResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.PublishDeviceDataResponse();
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
      return PublishDeviceDataResponse;
    })();
  })(root);
  (function($root) {
    $root.DeviceService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.DeviceService.makeGrpcConstructor());
    };
    $root.DeviceService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.GetDeviceRequest,
          responseType: $root.api.iot.devices.v1.Device,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.GetDeviceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.GetDeviceRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.Device.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.Device.decode
        },
        list: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListDevicesRequest,
          responseType: $root.api.iot.devices.v1.ListDevicesResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListDevicesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListDevicesRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListDevicesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListDevicesResponse.decode
        },
        create: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.CreateDeviceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.CreateDeviceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.CreateDeviceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.UpdateDeviceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.UpdateDeviceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.UpdateDeviceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.DeleteDeviceRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.DeleteDeviceRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.DeleteDeviceRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listCertificates: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListDeviceCertificatesRequest,
          responseType: $root.api.iot.devices.v1.ListDeviceCertificatesResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListDeviceCertificatesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListDeviceCertificatesRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListDeviceCertificatesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListDeviceCertificatesResponse.decode
        },
        addCertificate: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.AddDeviceCertificateRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.AddDeviceCertificateRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.AddDeviceCertificateRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        deleteCertificate: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.DeleteDeviceCertificateRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.DeleteDeviceCertificateRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.DeleteDeviceCertificateRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listPasswords: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListDevicePasswordsRequest,
          responseType: $root.api.iot.devices.v1.ListDevicePasswordsResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListDevicePasswordsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListDevicePasswordsRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListDevicePasswordsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListDevicePasswordsResponse.decode
        },
        addPassword: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/AddPassword',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.AddDevicePasswordRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.AddDevicePasswordRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.AddDevicePasswordRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        deletePassword: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.DeleteDevicePasswordRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.DeleteDevicePasswordRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.DeleteDevicePasswordRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.iot.devices.v1.DeviceService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListDeviceOperationsRequest,
          responseType: $root.api.iot.devices.v1.ListDeviceOperationsResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListDeviceOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListDeviceOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListDeviceOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListDeviceOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'iot-devices';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetDeviceRequest = (function() {
      function GetDeviceRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetDeviceRequest.prototype.deviceId = '';
      GetDeviceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        return w;
      };
      GetDeviceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.GetDeviceRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetDeviceRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDevicesRequest = (function() {
      function ListDevicesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDevicesRequest.prototype.registryId = '';
      ListDevicesRequest.prototype.folderId = '';
      ListDevicesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListDevicesRequest.prototype.pageToken = '';
      let $oneOfFields;
      Object.defineProperty(ListDevicesRequest.prototype, 'id', {
        get: $util.oneOfGetter(($oneOfFields = ['registryId', 'folderId'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      ListDevicesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(18).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(24).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(34).string(m.pageToken);
        return w;
      };
      ListDevicesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDevicesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.folderId = r.string();
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
      return ListDevicesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDevicesResponse = (function() {
      function ListDevicesResponse(p) {
        this.devices = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDevicesResponse.prototype.devices = $util.emptyArray;
      ListDevicesResponse.prototype.nextPageToken = '';
      ListDevicesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.devices != null && m.devices.length) {
          for (let i = 0; i < m.devices.length; ++i) $root.api.iot.devices.v1.Device.encode(m.devices[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListDevicesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDevicesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.devices && m.devices.length)) m.devices = [];
              m.devices.push($root.api.iot.devices.v1.Device.decode(r, r.uint32()));
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
      return ListDevicesResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateDeviceRequest = (function() {
      function CreateDeviceRequest(p) {
        this.certificates = [];
        this.topicAliases = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateDeviceRequest.prototype.registryId = '';
      CreateDeviceRequest.prototype.name = '';
      CreateDeviceRequest.prototype.description = '';
      CreateDeviceRequest.prototype.certificates = $util.emptyArray;
      CreateDeviceRequest.prototype.topicAliases = $util.emptyObject;
      CreateDeviceRequest.prototype.password = '';
      CreateDeviceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(18).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        if (m.certificates != null && m.certificates.length) {
          for (let i = 0; i < m.certificates.length; ++i) $root.api.iot.devices.v1.CreateDeviceRequest.Certificate.encode(m.certificates[i], w.uint32(34).fork()).ldelim();
        }
        if (m.topicAliases != null && m.hasOwnProperty('topicAliases')) {
          for (let ks = Object.keys(m.topicAliases), i = 0; i < ks.length; ++i) {
            w.uint32(42)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.topicAliases[ks[i]])
              .ldelim();
          }
        }
        if (m.password != null && m.hasOwnProperty('password')) w.uint32(50).string(m.password);
        return w;
      };
      CreateDeviceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.CreateDeviceRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.name = r.string();
              break;
            case 3:
              m.description = r.string();
              break;
            case 4:
              if (!(m.certificates && m.certificates.length)) m.certificates = [];
              m.certificates.push($root.api.iot.devices.v1.CreateDeviceRequest.Certificate.decode(r, r.uint32()));
              break;
            case 5:
              r.skip().pos++;
              if (m.topicAliases === $util.emptyObject) m.topicAliases = {};
              k = r.string();
              r.pos++;
              m.topicAliases[k] = r.string();
              break;
            case 6:
              m.password = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      CreateDeviceRequest.Certificate = (function() {
        function Certificate(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Certificate.prototype.certificateData = '';
        Certificate.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.certificateData != null && m.hasOwnProperty('certificateData')) w.uint32(10).string(m.certificateData);
          return w;
        };
        Certificate.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.iot.devices.v1.CreateDeviceRequest.Certificate();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.certificateData = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Certificate;
      })();
      return CreateDeviceRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateDeviceMetadata = (function() {
      function CreateDeviceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateDeviceMetadata.prototype.deviceId = '';
      CreateDeviceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        return w;
      };
      CreateDeviceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.CreateDeviceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateDeviceMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateDeviceRequest = (function() {
      function UpdateDeviceRequest(p) {
        this.topicAliases = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateDeviceRequest.prototype.deviceId = '';
      UpdateDeviceRequest.prototype.updateMask = null;
      UpdateDeviceRequest.prototype.name = '';
      UpdateDeviceRequest.prototype.description = '';
      UpdateDeviceRequest.prototype.topicAliases = $util.emptyObject;
      UpdateDeviceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        if (m.topicAliases != null && m.hasOwnProperty('topicAliases')) {
          for (let ks = Object.keys(m.topicAliases), i = 0; i < ks.length; ++i) {
            w.uint32(42)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.topicAliases[ks[i]])
              .ldelim();
          }
        }
        return w;
      };
      UpdateDeviceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.UpdateDeviceRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
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
              if (m.topicAliases === $util.emptyObject) m.topicAliases = {};
              k = r.string();
              r.pos++;
              m.topicAliases[k] = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateDeviceRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateDeviceMetadata = (function() {
      function UpdateDeviceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateDeviceMetadata.prototype.deviceId = '';
      UpdateDeviceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        return w;
      };
      UpdateDeviceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.UpdateDeviceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateDeviceMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteDeviceRequest = (function() {
      function DeleteDeviceRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteDeviceRequest.prototype.deviceId = '';
      DeleteDeviceRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        return w;
      };
      DeleteDeviceRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteDeviceRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteDeviceRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteDeviceMetadata = (function() {
      function DeleteDeviceMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteDeviceMetadata.prototype.deviceId = '';
      DeleteDeviceMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        return w;
      };
      DeleteDeviceMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteDeviceMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteDeviceMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListDeviceCertificatesRequest = (function() {
      function ListDeviceCertificatesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDeviceCertificatesRequest.prototype.deviceId = '';
      ListDeviceCertificatesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        return w;
      };
      ListDeviceCertificatesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDeviceCertificatesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListDeviceCertificatesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDeviceCertificatesResponse = (function() {
      function ListDeviceCertificatesResponse(p) {
        this.certificates = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDeviceCertificatesResponse.prototype.certificates = $util.emptyArray;
      ListDeviceCertificatesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.certificates != null && m.certificates.length) {
          for (let i = 0; i < m.certificates.length; ++i) $root.api.iot.devices.v1.DeviceCertificate.encode(m.certificates[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      ListDeviceCertificatesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDeviceCertificatesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.certificates && m.certificates.length)) m.certificates = [];
              m.certificates.push($root.api.iot.devices.v1.DeviceCertificate.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListDeviceCertificatesResponse;
    })();
  })(root);
  (function($root) {
    $root.AddDeviceCertificateRequest = (function() {
      function AddDeviceCertificateRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddDeviceCertificateRequest.prototype.deviceId = '';
      AddDeviceCertificateRequest.prototype.certificateData = '';
      AddDeviceCertificateRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.certificateData != null && m.hasOwnProperty('certificateData')) w.uint32(26).string(m.certificateData);
        return w;
      };
      AddDeviceCertificateRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.AddDeviceCertificateRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 3:
              m.certificateData = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddDeviceCertificateRequest;
    })();
  })(root);
  (function($root) {
    $root.AddDeviceCertificateMetadata = (function() {
      function AddDeviceCertificateMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddDeviceCertificateMetadata.prototype.deviceId = '';
      AddDeviceCertificateMetadata.prototype.fingerprint = '';
      AddDeviceCertificateMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.fingerprint != null && m.hasOwnProperty('fingerprint')) w.uint32(18).string(m.fingerprint);
        return w;
      };
      AddDeviceCertificateMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.AddDeviceCertificateMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.fingerprint = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddDeviceCertificateMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteDeviceCertificateRequest = (function() {
      function DeleteDeviceCertificateRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteDeviceCertificateRequest.prototype.deviceId = '';
      DeleteDeviceCertificateRequest.prototype.fingerprint = '';
      DeleteDeviceCertificateRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.fingerprint != null && m.hasOwnProperty('fingerprint')) w.uint32(18).string(m.fingerprint);
        return w;
      };
      DeleteDeviceCertificateRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteDeviceCertificateRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.fingerprint = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteDeviceCertificateRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteDeviceCertificateMetadata = (function() {
      function DeleteDeviceCertificateMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteDeviceCertificateMetadata.prototype.deviceId = '';
      DeleteDeviceCertificateMetadata.prototype.fingerprint = '';
      DeleteDeviceCertificateMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.fingerprint != null && m.hasOwnProperty('fingerprint')) w.uint32(18).string(m.fingerprint);
        return w;
      };
      DeleteDeviceCertificateMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteDeviceCertificateMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.fingerprint = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteDeviceCertificateMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListDevicePasswordsRequest = (function() {
      function ListDevicePasswordsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDevicePasswordsRequest.prototype.deviceId = '';
      ListDevicePasswordsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        return w;
      };
      ListDevicePasswordsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDevicePasswordsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListDevicePasswordsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDevicePasswordsResponse = (function() {
      function ListDevicePasswordsResponse(p) {
        this.passwords = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDevicePasswordsResponse.prototype.passwords = $util.emptyArray;
      ListDevicePasswordsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.passwords != null && m.passwords.length) {
          for (let i = 0; i < m.passwords.length; ++i) $root.api.iot.devices.v1.DevicePassword.encode(m.passwords[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      ListDevicePasswordsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDevicePasswordsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.passwords && m.passwords.length)) m.passwords = [];
              m.passwords.push($root.api.iot.devices.v1.DevicePassword.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListDevicePasswordsResponse;
    })();
  })(root);
  (function($root) {
    $root.AddDevicePasswordRequest = (function() {
      function AddDevicePasswordRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddDevicePasswordRequest.prototype.deviceId = '';
      AddDevicePasswordRequest.prototype.password = '';
      AddDevicePasswordRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.password != null && m.hasOwnProperty('password')) w.uint32(18).string(m.password);
        return w;
      };
      AddDevicePasswordRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.AddDevicePasswordRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.password = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddDevicePasswordRequest;
    })();
  })(root);
  (function($root) {
    $root.AddDevicePasswordMetadata = (function() {
      function AddDevicePasswordMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddDevicePasswordMetadata.prototype.deviceId = '';
      AddDevicePasswordMetadata.prototype.passwordId = '';
      AddDevicePasswordMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.passwordId != null && m.hasOwnProperty('passwordId')) w.uint32(18).string(m.passwordId);
        return w;
      };
      AddDevicePasswordMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.AddDevicePasswordMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.passwordId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddDevicePasswordMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteDevicePasswordRequest = (function() {
      function DeleteDevicePasswordRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteDevicePasswordRequest.prototype.deviceId = '';
      DeleteDevicePasswordRequest.prototype.passwordId = '';
      DeleteDevicePasswordRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.passwordId != null && m.hasOwnProperty('passwordId')) w.uint32(18).string(m.passwordId);
        return w;
      };
      DeleteDevicePasswordRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteDevicePasswordRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.passwordId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteDevicePasswordRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteDevicePasswordMetadata = (function() {
      function DeleteDevicePasswordMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteDevicePasswordMetadata.prototype.deviceId = '';
      DeleteDevicePasswordMetadata.prototype.passwordId = '';
      DeleteDevicePasswordMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.passwordId != null && m.hasOwnProperty('passwordId')) w.uint32(18).string(m.passwordId);
        return w;
      };
      DeleteDevicePasswordMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteDevicePasswordMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.passwordId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteDevicePasswordMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListDeviceOperationsRequest = (function() {
      function ListDeviceOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDeviceOperationsRequest.prototype.deviceId = '';
      ListDeviceOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListDeviceOperationsRequest.prototype.pageToken = '';
      ListDeviceOperationsRequest.prototype.filter = '';
      ListDeviceOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListDeviceOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDeviceOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
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
      return ListDeviceOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDeviceOperationsResponse = (function() {
      function ListDeviceOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDeviceOperationsResponse.prototype.operations = $util.emptyArray;
      ListDeviceOperationsResponse.prototype.nextPageToken = '';
      ListDeviceOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListDeviceOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDeviceOperationsResponse();
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
      return ListDeviceOperationsResponse;
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
      Registry.prototype.createdAt = null;
      Registry.prototype.name = '';
      Registry.prototype.description = '';
      Registry.prototype.labels = $util.emptyObject;
      Registry.prototype.status = 0;
      Registry.prototype.logGroupId = '';
      Registry.encode = function encode(m, w) {
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
        if (m.logGroupId != null && m.hasOwnProperty('logGroupId')) w.uint32(66).string(m.logGroupId);
        return w;
      };
      Registry.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.Registry(),
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
              m.logGroupId = r.string();
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
    $root.RegistryCertificate = (function() {
      function RegistryCertificate(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RegistryCertificate.prototype.registryId = '';
      RegistryCertificate.prototype.fingerprint = '';
      RegistryCertificate.prototype.certificateData = '';
      RegistryCertificate.prototype.createdAt = null;
      RegistryCertificate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.fingerprint != null && m.hasOwnProperty('fingerprint')) w.uint32(18).string(m.fingerprint);
        if (m.certificateData != null && m.hasOwnProperty('certificateData')) w.uint32(26).string(m.certificateData);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(34).fork()).ldelim();
        return w;
      };
      RegistryCertificate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.RegistryCertificate();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.fingerprint = r.string();
              break;
            case 3:
              m.certificateData = r.string();
              break;
            case 4:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RegistryCertificate;
    })();
  })(root);
  (function($root) {
    $root.DeviceAlias = (function() {
      function DeviceAlias(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeviceAlias.prototype.deviceId = '';
      DeviceAlias.prototype.topicPrefix = '';
      DeviceAlias.prototype.alias = '';
      DeviceAlias.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(10).string(m.deviceId);
        if (m.topicPrefix != null && m.hasOwnProperty('topicPrefix')) w.uint32(18).string(m.topicPrefix);
        if (m.alias != null && m.hasOwnProperty('alias')) w.uint32(26).string(m.alias);
        return w;
      };
      DeviceAlias.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeviceAlias();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deviceId = r.string();
              break;
            case 2:
              m.topicPrefix = r.string();
              break;
            case 3:
              m.alias = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeviceAlias;
    })();
  })(root);
  (function($root) {
    $root.RegistryPassword = (function() {
      function RegistryPassword(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RegistryPassword.prototype.registryId = '';
      RegistryPassword.prototype.id = '';
      RegistryPassword.prototype.createdAt = null;
      RegistryPassword.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(18).string(m.id);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        return w;
      };
      RegistryPassword.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.RegistryPassword();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.id = r.string();
              break;
            case 3:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RegistryPassword;
    })();
  })(root);
  (function($root) {
    $root.RegistryDataService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.RegistryDataService.makeGrpcConstructor());
    };
    $root.RegistryDataService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        publish: {
          path: '/yandex.cloud.iot.devices.v1.RegistryDataService/Publish',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.PublishRegistryDataRequest,
          responseType: $root.api.iot.devices.v1.PublishRegistryDataResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.PublishRegistryDataRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.PublishRegistryDataRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.PublishRegistryDataResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.PublishRegistryDataResponse.decode
        }
      });
      ctor.__endpointId = 'iot-data';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.PublishRegistryDataRequest = (function() {
      function PublishRegistryDataRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PublishRegistryDataRequest.prototype.registryId = '';
      PublishRegistryDataRequest.prototype.topic = '';
      PublishRegistryDataRequest.prototype.data = $util.newBuffer([]);
      PublishRegistryDataRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.topic != null && m.hasOwnProperty('topic')) w.uint32(18).string(m.topic);
        if (m.data != null && m.hasOwnProperty('data')) w.uint32(26).bytes(m.data);
        return w;
      };
      PublishRegistryDataRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.PublishRegistryDataRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.topic = r.string();
              break;
            case 3:
              m.data = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return PublishRegistryDataRequest;
    })();
  })(root);
  (function($root) {
    $root.PublishRegistryDataResponse = (function() {
      function PublishRegistryDataResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PublishRegistryDataResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      PublishRegistryDataResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.PublishRegistryDataResponse();
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
      return PublishRegistryDataResponse;
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
          path: '/yandex.cloud.iot.devices.v1.RegistryService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.GetRegistryRequest,
          responseType: $root.api.iot.devices.v1.Registry,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.GetRegistryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.GetRegistryRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.Registry.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.Registry.decode
        },
        list: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListRegistriesRequest,
          responseType: $root.api.iot.devices.v1.ListRegistriesResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListRegistriesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListRegistriesRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListRegistriesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListRegistriesResponse.decode
        },
        create: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.CreateRegistryRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.CreateRegistryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.CreateRegistryRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.UpdateRegistryRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.UpdateRegistryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.UpdateRegistryRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.DeleteRegistryRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.DeleteRegistryRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.DeleteRegistryRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listCertificates: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/ListCertificates',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListRegistryCertificatesRequest,
          responseType: $root.api.iot.devices.v1.ListRegistryCertificatesResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListRegistryCertificatesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListRegistryCertificatesRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListRegistryCertificatesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListRegistryCertificatesResponse.decode
        },
        addCertificate: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/AddCertificate',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.AddRegistryCertificateRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.AddRegistryCertificateRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.AddRegistryCertificateRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        deleteCertificate: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/DeleteCertificate',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.DeleteRegistryCertificateRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.DeleteRegistryCertificateRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.DeleteRegistryCertificateRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listPasswords: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/ListPasswords',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListRegistryPasswordsRequest,
          responseType: $root.api.iot.devices.v1.ListRegistryPasswordsResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListRegistryPasswordsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListRegistryPasswordsRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListRegistryPasswordsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListRegistryPasswordsResponse.decode
        },
        addPassword: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/AddPassword',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.AddRegistryPasswordRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.AddRegistryPasswordRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.AddRegistryPasswordRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        deletePassword: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/DeletePassword',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.DeleteRegistryPasswordRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.DeleteRegistryPasswordRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.DeleteRegistryPasswordRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listDeviceTopicAliases: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/ListDeviceTopicAliases',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListDeviceTopicAliasesRequest,
          responseType: $root.api.iot.devices.v1.ListDeviceTopicAliasesResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListDeviceTopicAliasesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListDeviceTopicAliasesRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListDeviceTopicAliasesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListDeviceTopicAliasesResponse.decode
        },
        listOperations: {
          path: '/yandex.cloud.iot.devices.v1.RegistryService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.iot.devices.v1.ListRegistryOperationsRequest,
          responseType: $root.api.iot.devices.v1.ListRegistryOperationsResponse,
          requestSerialize: r => {
            return $root.api.iot.devices.v1.ListRegistryOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.iot.devices.v1.ListRegistryOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.iot.devices.v1.ListRegistryOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.iot.devices.v1.ListRegistryOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'iot-devices';
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
          m = new $root.api.iot.devices.v1.GetRegistryRequest();
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
      ListRegistriesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListRegistriesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListRegistriesRequest();
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
          for (let i = 0; i < m.registries.length; ++i) $root.api.iot.devices.v1.Registry.encode(m.registries[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListRegistriesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListRegistriesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.registries && m.registries.length)) m.registries = [];
              m.registries.push($root.api.iot.devices.v1.Registry.decode(r, r.uint32()));
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
        this.certificates = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateRegistryRequest.prototype.folderId = '';
      CreateRegistryRequest.prototype.name = '';
      CreateRegistryRequest.prototype.description = '';
      CreateRegistryRequest.prototype.labels = $util.emptyObject;
      CreateRegistryRequest.prototype.certificates = $util.emptyArray;
      CreateRegistryRequest.prototype.password = '';
      CreateRegistryRequest.encode = function encode(m, w) {
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
        if (m.certificates != null && m.certificates.length) {
          for (let i = 0; i < m.certificates.length; ++i) $root.api.iot.devices.v1.CreateRegistryRequest.Certificate.encode(m.certificates[i], w.uint32(42).fork()).ldelim();
        }
        if (m.password != null && m.hasOwnProperty('password')) w.uint32(50).string(m.password);
        return w;
      };
      CreateRegistryRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.CreateRegistryRequest(),
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
              if (!(m.certificates && m.certificates.length)) m.certificates = [];
              m.certificates.push($root.api.iot.devices.v1.CreateRegistryRequest.Certificate.decode(r, r.uint32()));
              break;
            case 6:
              m.password = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      CreateRegistryRequest.Certificate = (function() {
        function Certificate(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Certificate.prototype.certificateData = '';
        Certificate.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.certificateData != null && m.hasOwnProperty('certificateData')) w.uint32(10).string(m.certificateData);
          return w;
        };
        Certificate.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.iot.devices.v1.CreateRegistryRequest.Certificate();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.certificateData = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Certificate;
      })();
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
          m = new $root.api.iot.devices.v1.CreateRegistryMetadata();
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
      UpdateRegistryRequest.prototype.description = '';
      UpdateRegistryRequest.prototype.labels = $util.emptyObject;
      UpdateRegistryRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
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
      UpdateRegistryRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.UpdateRegistryRequest(),
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
          m = new $root.api.iot.devices.v1.UpdateRegistryMetadata();
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
          m = new $root.api.iot.devices.v1.DeleteRegistryRequest();
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
          m = new $root.api.iot.devices.v1.DeleteRegistryMetadata();
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
    $root.ListRegistryCertificatesRequest = (function() {
      function ListRegistryCertificatesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRegistryCertificatesRequest.prototype.registryId = '';
      ListRegistryCertificatesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        return w;
      };
      ListRegistryCertificatesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListRegistryCertificatesRequest();
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
      return ListRegistryCertificatesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRegistryCertificatesResponse = (function() {
      function ListRegistryCertificatesResponse(p) {
        this.certificates = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRegistryCertificatesResponse.prototype.certificates = $util.emptyArray;
      ListRegistryCertificatesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.certificates != null && m.certificates.length) {
          for (let i = 0; i < m.certificates.length; ++i) $root.api.iot.devices.v1.RegistryCertificate.encode(m.certificates[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      ListRegistryCertificatesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListRegistryCertificatesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.certificates && m.certificates.length)) m.certificates = [];
              m.certificates.push($root.api.iot.devices.v1.RegistryCertificate.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListRegistryCertificatesResponse;
    })();
  })(root);
  (function($root) {
    $root.AddRegistryCertificateRequest = (function() {
      function AddRegistryCertificateRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddRegistryCertificateRequest.prototype.registryId = '';
      AddRegistryCertificateRequest.prototype.certificateData = '';
      AddRegistryCertificateRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.certificateData != null && m.hasOwnProperty('certificateData')) w.uint32(26).string(m.certificateData);
        return w;
      };
      AddRegistryCertificateRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.AddRegistryCertificateRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 3:
              m.certificateData = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddRegistryCertificateRequest;
    })();
  })(root);
  (function($root) {
    $root.AddRegistryCertificateMetadata = (function() {
      function AddRegistryCertificateMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddRegistryCertificateMetadata.prototype.registryId = '';
      AddRegistryCertificateMetadata.prototype.fingerprint = '';
      AddRegistryCertificateMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.fingerprint != null && m.hasOwnProperty('fingerprint')) w.uint32(18).string(m.fingerprint);
        return w;
      };
      AddRegistryCertificateMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.AddRegistryCertificateMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.fingerprint = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddRegistryCertificateMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteRegistryCertificateRequest = (function() {
      function DeleteRegistryCertificateRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteRegistryCertificateRequest.prototype.registryId = '';
      DeleteRegistryCertificateRequest.prototype.fingerprint = '';
      DeleteRegistryCertificateRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.fingerprint != null && m.hasOwnProperty('fingerprint')) w.uint32(18).string(m.fingerprint);
        return w;
      };
      DeleteRegistryCertificateRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteRegistryCertificateRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.fingerprint = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteRegistryCertificateRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteRegistryCertificateMetadata = (function() {
      function DeleteRegistryCertificateMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteRegistryCertificateMetadata.prototype.registryId = '';
      DeleteRegistryCertificateMetadata.prototype.fingerprint = '';
      DeleteRegistryCertificateMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.fingerprint != null && m.hasOwnProperty('fingerprint')) w.uint32(18).string(m.fingerprint);
        return w;
      };
      DeleteRegistryCertificateMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteRegistryCertificateMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.fingerprint = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteRegistryCertificateMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListRegistryPasswordsRequest = (function() {
      function ListRegistryPasswordsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRegistryPasswordsRequest.prototype.registryId = '';
      ListRegistryPasswordsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        return w;
      };
      ListRegistryPasswordsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListRegistryPasswordsRequest();
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
      return ListRegistryPasswordsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRegistryPasswordsResponse = (function() {
      function ListRegistryPasswordsResponse(p) {
        this.passwords = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRegistryPasswordsResponse.prototype.passwords = $util.emptyArray;
      ListRegistryPasswordsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.passwords != null && m.passwords.length) {
          for (let i = 0; i < m.passwords.length; ++i) $root.api.iot.devices.v1.RegistryPassword.encode(m.passwords[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      ListRegistryPasswordsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListRegistryPasswordsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.passwords && m.passwords.length)) m.passwords = [];
              m.passwords.push($root.api.iot.devices.v1.RegistryPassword.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListRegistryPasswordsResponse;
    })();
  })(root);
  (function($root) {
    $root.AddRegistryPasswordRequest = (function() {
      function AddRegistryPasswordRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddRegistryPasswordRequest.prototype.registryId = '';
      AddRegistryPasswordRequest.prototype.password = '';
      AddRegistryPasswordRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.password != null && m.hasOwnProperty('password')) w.uint32(18).string(m.password);
        return w;
      };
      AddRegistryPasswordRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.AddRegistryPasswordRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.password = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddRegistryPasswordRequest;
    })();
  })(root);
  (function($root) {
    $root.AddRegistryPasswordMetadata = (function() {
      function AddRegistryPasswordMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddRegistryPasswordMetadata.prototype.registryId = '';
      AddRegistryPasswordMetadata.prototype.passwordId = '';
      AddRegistryPasswordMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.passwordId != null && m.hasOwnProperty('passwordId')) w.uint32(18).string(m.passwordId);
        return w;
      };
      AddRegistryPasswordMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.AddRegistryPasswordMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.passwordId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddRegistryPasswordMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteRegistryPasswordRequest = (function() {
      function DeleteRegistryPasswordRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteRegistryPasswordRequest.prototype.registryId = '';
      DeleteRegistryPasswordRequest.prototype.passwordId = '';
      DeleteRegistryPasswordRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.passwordId != null && m.hasOwnProperty('passwordId')) w.uint32(18).string(m.passwordId);
        return w;
      };
      DeleteRegistryPasswordRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteRegistryPasswordRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.passwordId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteRegistryPasswordRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteRegistryPasswordMetadata = (function() {
      function DeleteRegistryPasswordMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteRegistryPasswordMetadata.prototype.registryId = '';
      DeleteRegistryPasswordMetadata.prototype.passwordId = '';
      DeleteRegistryPasswordMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.passwordId != null && m.hasOwnProperty('passwordId')) w.uint32(18).string(m.passwordId);
        return w;
      };
      DeleteRegistryPasswordMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.DeleteRegistryPasswordMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
              break;
            case 2:
              m.passwordId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteRegistryPasswordMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListDeviceTopicAliasesRequest = (function() {
      function ListDeviceTopicAliasesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDeviceTopicAliasesRequest.prototype.registryId = '';
      ListDeviceTopicAliasesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListDeviceTopicAliasesRequest.prototype.pageToken = '';
      ListDeviceTopicAliasesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListDeviceTopicAliasesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDeviceTopicAliasesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
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
      return ListDeviceTopicAliasesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListDeviceTopicAliasesResponse = (function() {
      function ListDeviceTopicAliasesResponse(p) {
        this.aliases = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListDeviceTopicAliasesResponse.prototype.aliases = $util.emptyArray;
      ListDeviceTopicAliasesResponse.prototype.nextPageToken = '';
      ListDeviceTopicAliasesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.aliases != null && m.aliases.length) {
          for (let i = 0; i < m.aliases.length; ++i) $root.api.iot.devices.v1.DeviceAlias.encode(m.aliases[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListDeviceTopicAliasesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListDeviceTopicAliasesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.aliases && m.aliases.length)) m.aliases = [];
              m.aliases.push($root.api.iot.devices.v1.DeviceAlias.decode(r, r.uint32()));
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
      return ListDeviceTopicAliasesResponse;
    })();
  })(root);
  (function($root) {
    $root.ListRegistryOperationsRequest = (function() {
      function ListRegistryOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRegistryOperationsRequest.prototype.registryId = '';
      ListRegistryOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListRegistryOperationsRequest.prototype.pageToken = '';
      ListRegistryOperationsRequest.prototype.filter = '';
      ListRegistryOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListRegistryOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListRegistryOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.registryId = r.string();
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
      return ListRegistryOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListRegistryOperationsResponse = (function() {
      function ListRegistryOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListRegistryOperationsResponse.prototype.operations = $util.emptyArray;
      ListRegistryOperationsResponse.prototype.nextPageToken = '';
      ListRegistryOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListRegistryOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.iot.devices.v1.ListRegistryOperationsResponse();
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
      return ListRegistryOperationsResponse;
    })();
  })(root);
  registar.register('api.iot.devices.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
