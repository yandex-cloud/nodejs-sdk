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
    $root.HealthCheck = (function() {
      function HealthCheck(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      HealthCheck.prototype.name = '';
      HealthCheck.prototype.interval = null;
      HealthCheck.prototype.timeout = null;
      HealthCheck.prototype.unhealthyThreshold = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      HealthCheck.prototype.healthyThreshold = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      HealthCheck.prototype.tcpOptions = null;
      HealthCheck.prototype.httpOptions = null;
      let $oneOfFields;
      Object.defineProperty(HealthCheck.prototype, 'options', {
        get: $util.oneOfGetter(($oneOfFields = ['tcpOptions', 'httpOptions'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      HealthCheck.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.interval != null && m.hasOwnProperty('interval')) $root.contrib.google.protobuf.Duration.encode(m.interval, w.uint32(18).fork()).ldelim();
        if (m.timeout != null && m.hasOwnProperty('timeout')) $root.contrib.google.protobuf.Duration.encode(m.timeout, w.uint32(26).fork()).ldelim();
        if (m.unhealthyThreshold != null && m.hasOwnProperty('unhealthyThreshold')) w.uint32(32).int64(m.unhealthyThreshold);
        if (m.healthyThreshold != null && m.hasOwnProperty('healthyThreshold')) w.uint32(40).int64(m.healthyThreshold);
        if (m.tcpOptions != null && m.hasOwnProperty('tcpOptions')) $root.api.loadbalancer.v1.HealthCheck.TcpOptions.encode(m.tcpOptions, w.uint32(50).fork()).ldelim();
        if (m.httpOptions != null && m.hasOwnProperty('httpOptions')) $root.api.loadbalancer.v1.HealthCheck.HttpOptions.encode(m.httpOptions, w.uint32(58).fork()).ldelim();
        return w;
      };
      HealthCheck.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.HealthCheck();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.interval = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            case 3:
              m.timeout = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            case 4:
              m.unhealthyThreshold = r.int64();
              break;
            case 5:
              m.healthyThreshold = r.int64();
              break;
            case 6:
              m.tcpOptions = $root.api.loadbalancer.v1.HealthCheck.TcpOptions.decode(r, r.uint32());
              break;
            case 7:
              m.httpOptions = $root.api.loadbalancer.v1.HealthCheck.HttpOptions.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      HealthCheck.TcpOptions = (function() {
        function TcpOptions(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        TcpOptions.prototype.port = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        TcpOptions.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.port != null && m.hasOwnProperty('port')) w.uint32(8).int64(m.port);
          return w;
        };
        TcpOptions.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.loadbalancer.v1.HealthCheck.TcpOptions();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.port = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return TcpOptions;
      })();
      HealthCheck.HttpOptions = (function() {
        function HttpOptions(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        HttpOptions.prototype.port = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        HttpOptions.prototype.path = '';
        HttpOptions.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.port != null && m.hasOwnProperty('port')) w.uint32(8).int64(m.port);
          if (m.path != null && m.hasOwnProperty('path')) w.uint32(18).string(m.path);
          return w;
        };
        HttpOptions.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.loadbalancer.v1.HealthCheck.HttpOptions();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.port = r.int64();
                break;
              case 2:
                m.path = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return HttpOptions;
      })();
      return HealthCheck;
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
    $root.NetworkLoadBalancer = (function() {
      function NetworkLoadBalancer(p) {
        this.labels = {};
        this.listeners = [];
        this.attachedTargetGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NetworkLoadBalancer.prototype.id = '';
      NetworkLoadBalancer.prototype.folderId = '';
      NetworkLoadBalancer.prototype.createdAt = null;
      NetworkLoadBalancer.prototype.name = '';
      NetworkLoadBalancer.prototype.description = '';
      NetworkLoadBalancer.prototype.labels = $util.emptyObject;
      NetworkLoadBalancer.prototype.regionId = '';
      NetworkLoadBalancer.prototype.status = 0;
      NetworkLoadBalancer.prototype.type = 0;
      NetworkLoadBalancer.prototype.sessionAffinity = 0;
      NetworkLoadBalancer.prototype.listeners = $util.emptyArray;
      NetworkLoadBalancer.prototype.attachedTargetGroups = $util.emptyArray;
      NetworkLoadBalancer.encode = function encode(m, w) {
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
        if (m.regionId != null && m.hasOwnProperty('regionId')) w.uint32(58).string(m.regionId);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(72).int32(m.status);
        if (m.type != null && m.hasOwnProperty('type')) w.uint32(80).int32(m.type);
        if (m.sessionAffinity != null && m.hasOwnProperty('sessionAffinity')) w.uint32(88).int32(m.sessionAffinity);
        if (m.listeners != null && m.listeners.length) {
          for (let i = 0; i < m.listeners.length; ++i) $root.api.loadbalancer.v1.Listener.encode(m.listeners[i], w.uint32(98).fork()).ldelim();
        }
        if (m.attachedTargetGroups != null && m.attachedTargetGroups.length) {
          for (let i = 0; i < m.attachedTargetGroups.length; ++i) $root.api.loadbalancer.v1.AttachedTargetGroup.encode(m.attachedTargetGroups[i], w.uint32(106).fork()).ldelim();
        }
        return w;
      };
      NetworkLoadBalancer.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.NetworkLoadBalancer(),
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
              m.regionId = r.string();
              break;
            case 9:
              m.status = r.int32();
              break;
            case 10:
              m.type = r.int32();
              break;
            case 11:
              m.sessionAffinity = r.int32();
              break;
            case 12:
              if (!(m.listeners && m.listeners.length)) m.listeners = [];
              m.listeners.push($root.api.loadbalancer.v1.Listener.decode(r, r.uint32()));
              break;
            case 13:
              if (!(m.attachedTargetGroups && m.attachedTargetGroups.length)) m.attachedTargetGroups = [];
              m.attachedTargetGroups.push($root.api.loadbalancer.v1.AttachedTargetGroup.decode(r, r.uint32()));
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
        values[(valuesById[2] = 'STARTING')] = 2;
        values[(valuesById[3] = 'ACTIVE')] = 3;
        values[(valuesById[4] = 'STOPPING')] = 4;
        values[(valuesById[5] = 'STOPPED')] = 5;
        values[(valuesById[6] = 'DELETING')] = 6;
        values[(valuesById[7] = 'INACTIVE')] = 7;
        return values;
      })();
      NetworkLoadBalancer.Status = Status;
      let Type = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'TYPE_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'EXTERNAL')] = 1;
        values[(valuesById[2] = 'INTERNAL')] = 2;
        return values;
      })();
      NetworkLoadBalancer.Type = Type;
      let SessionAffinity = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'SESSION_AFFINITY_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'CLIENT_IP_PORT_PROTO')] = 1;
        return values;
      })();
      NetworkLoadBalancer.SessionAffinity = SessionAffinity;
      return NetworkLoadBalancer;
    })();
  })(root);
  (function($root) {
    $root.AttachedTargetGroup = (function() {
      function AttachedTargetGroup(p) {
        this.healthChecks = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AttachedTargetGroup.prototype.targetGroupId = '';
      AttachedTargetGroup.prototype.healthChecks = $util.emptyArray;
      AttachedTargetGroup.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        if (m.healthChecks != null && m.healthChecks.length) {
          for (let i = 0; i < m.healthChecks.length; ++i) $root.api.loadbalancer.v1.HealthCheck.encode(m.healthChecks[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      AttachedTargetGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.AttachedTargetGroup();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            case 2:
              if (!(m.healthChecks && m.healthChecks.length)) m.healthChecks = [];
              m.healthChecks.push($root.api.loadbalancer.v1.HealthCheck.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AttachedTargetGroup;
    })();
  })(root);
  (function($root) {
    $root.Listener = (function() {
      function Listener(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Listener.prototype.name = '';
      Listener.prototype.address = '';
      Listener.prototype.port = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Listener.prototype.protocol = 0;
      Listener.prototype.targetPort = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Listener.prototype.subnetId = '';
      Listener.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(18).string(m.address);
        if (m.port != null && m.hasOwnProperty('port')) w.uint32(24).int64(m.port);
        if (m.protocol != null && m.hasOwnProperty('protocol')) w.uint32(32).int32(m.protocol);
        if (m.targetPort != null && m.hasOwnProperty('targetPort')) w.uint32(40).int64(m.targetPort);
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(50).string(m.subnetId);
        return w;
      };
      Listener.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.Listener();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.address = r.string();
              break;
            case 3:
              m.port = r.int64();
              break;
            case 4:
              m.protocol = r.int32();
              break;
            case 5:
              m.targetPort = r.int64();
              break;
            case 6:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Protocol = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'PROTOCOL_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'TCP')] = 1;
        values[(valuesById[2] = 'UDP')] = 2;
        return values;
      })();
      Listener.Protocol = Protocol;
      return Listener;
    })();
  })(root);
  (function($root) {
    $root.TargetState = (function() {
      function TargetState(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TargetState.prototype.subnetId = '';
      TargetState.prototype.address = '';
      TargetState.prototype.status = 0;
      TargetState.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(18).string(m.address);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(24).int32(m.status);
        return w;
      };
      TargetState.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.TargetState();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
              break;
            case 2:
              m.address = r.string();
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
        values[(valuesById[1] = 'INITIAL')] = 1;
        values[(valuesById[2] = 'HEALTHY')] = 2;
        values[(valuesById[3] = 'UNHEALTHY')] = 3;
        values[(valuesById[4] = 'DRAINING')] = 4;
        values[(valuesById[5] = 'INACTIVE')] = 5;
        return values;
      })();
      TargetState.Status = Status;
      return TargetState;
    })();
  })(root);
  (function($root) {
    $root.NetworkLoadBalancerService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.NetworkLoadBalancerService.makeGrpcConstructor());
    };
    $root.NetworkLoadBalancerService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.GetNetworkLoadBalancerRequest,
          responseType: $root.api.loadbalancer.v1.NetworkLoadBalancer,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.GetNetworkLoadBalancerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.GetNetworkLoadBalancerRequest.decode,
          responseSerialize: r => {
            return $root.api.loadbalancer.v1.NetworkLoadBalancer.encode(r).finish();
          },
          responseDeserialize: $root.api.loadbalancer.v1.NetworkLoadBalancer.decode
        },
        list: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.ListNetworkLoadBalancersRequest,
          responseType: $root.api.loadbalancer.v1.ListNetworkLoadBalancersResponse,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.ListNetworkLoadBalancersRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.ListNetworkLoadBalancersRequest.decode,
          responseSerialize: r => {
            return $root.api.loadbalancer.v1.ListNetworkLoadBalancersResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.loadbalancer.v1.ListNetworkLoadBalancersResponse.decode
        },
        create: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.CreateNetworkLoadBalancerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.CreateNetworkLoadBalancerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.CreateNetworkLoadBalancerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.UpdateNetworkLoadBalancerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.DeleteNetworkLoadBalancerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.DeleteNetworkLoadBalancerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.DeleteNetworkLoadBalancerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        start: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.StartNetworkLoadBalancerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.StartNetworkLoadBalancerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.StartNetworkLoadBalancerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        stop: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.StopNetworkLoadBalancerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.StopNetworkLoadBalancerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.StopNetworkLoadBalancerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        attachTargetGroup: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        detachTargetGroup: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        getTargetStates: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.GetTargetStatesRequest,
          responseType: $root.api.loadbalancer.v1.GetTargetStatesResponse,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.GetTargetStatesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.GetTargetStatesRequest.decode,
          responseSerialize: r => {
            return $root.api.loadbalancer.v1.GetTargetStatesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.loadbalancer.v1.GetTargetStatesResponse.decode
        },
        addListener: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        removeListener: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest,
          responseType: $root.api.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'load-balancer';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetNetworkLoadBalancerRequest = (function() {
      function GetNetworkLoadBalancerRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetNetworkLoadBalancerRequest.prototype.networkLoadBalancerId = '';
      GetNetworkLoadBalancerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      GetNetworkLoadBalancerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.GetNetworkLoadBalancerRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetNetworkLoadBalancerRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNetworkLoadBalancersRequest = (function() {
      function ListNetworkLoadBalancersRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworkLoadBalancersRequest.prototype.folderId = '';
      ListNetworkLoadBalancersRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNetworkLoadBalancersRequest.prototype.pageToken = '';
      ListNetworkLoadBalancersRequest.prototype.filter = '';
      ListNetworkLoadBalancersRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListNetworkLoadBalancersRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListNetworkLoadBalancersRequest();
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
      return ListNetworkLoadBalancersRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNetworkLoadBalancersResponse = (function() {
      function ListNetworkLoadBalancersResponse(p) {
        this.networkLoadBalancers = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworkLoadBalancersResponse.prototype.networkLoadBalancers = $util.emptyArray;
      ListNetworkLoadBalancersResponse.prototype.nextPageToken = '';
      ListNetworkLoadBalancersResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancers != null && m.networkLoadBalancers.length) {
          for (let i = 0; i < m.networkLoadBalancers.length; ++i) $root.api.loadbalancer.v1.NetworkLoadBalancer.encode(m.networkLoadBalancers[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNetworkLoadBalancersResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListNetworkLoadBalancersResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.networkLoadBalancers && m.networkLoadBalancers.length)) m.networkLoadBalancers = [];
              m.networkLoadBalancers.push($root.api.loadbalancer.v1.NetworkLoadBalancer.decode(r, r.uint32()));
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
      return ListNetworkLoadBalancersResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateNetworkLoadBalancerRequest = (function() {
      function CreateNetworkLoadBalancerRequest(p) {
        this.labels = {};
        this.listenerSpecs = [];
        this.attachedTargetGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateNetworkLoadBalancerRequest.prototype.folderId = '';
      CreateNetworkLoadBalancerRequest.prototype.name = '';
      CreateNetworkLoadBalancerRequest.prototype.description = '';
      CreateNetworkLoadBalancerRequest.prototype.labels = $util.emptyObject;
      CreateNetworkLoadBalancerRequest.prototype.regionId = '';
      CreateNetworkLoadBalancerRequest.prototype.type = 0;
      CreateNetworkLoadBalancerRequest.prototype.listenerSpecs = $util.emptyArray;
      CreateNetworkLoadBalancerRequest.prototype.attachedTargetGroups = $util.emptyArray;
      CreateNetworkLoadBalancerRequest.encode = function encode(m, w) {
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
        if (m.regionId != null && m.hasOwnProperty('regionId')) w.uint32(42).string(m.regionId);
        if (m.type != null && m.hasOwnProperty('type')) w.uint32(48).int32(m.type);
        if (m.listenerSpecs != null && m.listenerSpecs.length) {
          for (let i = 0; i < m.listenerSpecs.length; ++i) $root.api.loadbalancer.v1.ListenerSpec.encode(m.listenerSpecs[i], w.uint32(58).fork()).ldelim();
        }
        if (m.attachedTargetGroups != null && m.attachedTargetGroups.length) {
          for (let i = 0; i < m.attachedTargetGroups.length; ++i) $root.api.loadbalancer.v1.AttachedTargetGroup.encode(m.attachedTargetGroups[i], w.uint32(66).fork()).ldelim();
        }
        return w;
      };
      CreateNetworkLoadBalancerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.CreateNetworkLoadBalancerRequest(),
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
              m.regionId = r.string();
              break;
            case 6:
              m.type = r.int32();
              break;
            case 7:
              if (!(m.listenerSpecs && m.listenerSpecs.length)) m.listenerSpecs = [];
              m.listenerSpecs.push($root.api.loadbalancer.v1.ListenerSpec.decode(r, r.uint32()));
              break;
            case 8:
              if (!(m.attachedTargetGroups && m.attachedTargetGroups.length)) m.attachedTargetGroups = [];
              m.attachedTargetGroups.push($root.api.loadbalancer.v1.AttachedTargetGroup.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateNetworkLoadBalancerRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateNetworkLoadBalancerMetadata = (function() {
      function CreateNetworkLoadBalancerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateNetworkLoadBalancerMetadata.prototype.networkLoadBalancerId = '';
      CreateNetworkLoadBalancerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      CreateNetworkLoadBalancerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.CreateNetworkLoadBalancerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateNetworkLoadBalancerMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateNetworkLoadBalancerRequest = (function() {
      function UpdateNetworkLoadBalancerRequest(p) {
        this.labels = {};
        this.listenerSpecs = [];
        this.attachedTargetGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNetworkLoadBalancerRequest.prototype.networkLoadBalancerId = '';
      UpdateNetworkLoadBalancerRequest.prototype.updateMask = null;
      UpdateNetworkLoadBalancerRequest.prototype.name = '';
      UpdateNetworkLoadBalancerRequest.prototype.description = '';
      UpdateNetworkLoadBalancerRequest.prototype.labels = $util.emptyObject;
      UpdateNetworkLoadBalancerRequest.prototype.listenerSpecs = $util.emptyArray;
      UpdateNetworkLoadBalancerRequest.prototype.attachedTargetGroups = $util.emptyArray;
      UpdateNetworkLoadBalancerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
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
        if (m.listenerSpecs != null && m.listenerSpecs.length) {
          for (let i = 0; i < m.listenerSpecs.length; ++i) $root.api.loadbalancer.v1.ListenerSpec.encode(m.listenerSpecs[i], w.uint32(50).fork()).ldelim();
        }
        if (m.attachedTargetGroups != null && m.attachedTargetGroups.length) {
          for (let i = 0; i < m.attachedTargetGroups.length; ++i) $root.api.loadbalancer.v1.AttachedTargetGroup.encode(m.attachedTargetGroups[i], w.uint32(58).fork()).ldelim();
        }
        return w;
      };
      UpdateNetworkLoadBalancerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.UpdateNetworkLoadBalancerRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
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
              if (!(m.listenerSpecs && m.listenerSpecs.length)) m.listenerSpecs = [];
              m.listenerSpecs.push($root.api.loadbalancer.v1.ListenerSpec.decode(r, r.uint32()));
              break;
            case 7:
              if (!(m.attachedTargetGroups && m.attachedTargetGroups.length)) m.attachedTargetGroups = [];
              m.attachedTargetGroups.push($root.api.loadbalancer.v1.AttachedTargetGroup.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNetworkLoadBalancerRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateNetworkLoadBalancerMetadata = (function() {
      function UpdateNetworkLoadBalancerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNetworkLoadBalancerMetadata.prototype.networkLoadBalancerId = '';
      UpdateNetworkLoadBalancerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      UpdateNetworkLoadBalancerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNetworkLoadBalancerMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteNetworkLoadBalancerRequest = (function() {
      function DeleteNetworkLoadBalancerRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteNetworkLoadBalancerRequest.prototype.networkLoadBalancerId = '';
      DeleteNetworkLoadBalancerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      DeleteNetworkLoadBalancerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.DeleteNetworkLoadBalancerRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteNetworkLoadBalancerRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteNetworkLoadBalancerMetadata = (function() {
      function DeleteNetworkLoadBalancerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteNetworkLoadBalancerMetadata.prototype.networkLoadBalancerId = '';
      DeleteNetworkLoadBalancerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      DeleteNetworkLoadBalancerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteNetworkLoadBalancerMetadata;
    })();
  })(root);
  (function($root) {
    $root.StartNetworkLoadBalancerRequest = (function() {
      function StartNetworkLoadBalancerRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StartNetworkLoadBalancerRequest.prototype.networkLoadBalancerId = '';
      StartNetworkLoadBalancerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      StartNetworkLoadBalancerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.StartNetworkLoadBalancerRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StartNetworkLoadBalancerRequest;
    })();
  })(root);
  (function($root) {
    $root.StartNetworkLoadBalancerMetadata = (function() {
      function StartNetworkLoadBalancerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StartNetworkLoadBalancerMetadata.prototype.networkLoadBalancerId = '';
      StartNetworkLoadBalancerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      StartNetworkLoadBalancerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.StartNetworkLoadBalancerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StartNetworkLoadBalancerMetadata;
    })();
  })(root);
  (function($root) {
    $root.StopNetworkLoadBalancerRequest = (function() {
      function StopNetworkLoadBalancerRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StopNetworkLoadBalancerRequest.prototype.networkLoadBalancerId = '';
      StopNetworkLoadBalancerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      StopNetworkLoadBalancerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.StopNetworkLoadBalancerRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StopNetworkLoadBalancerRequest;
    })();
  })(root);
  (function($root) {
    $root.StopNetworkLoadBalancerMetadata = (function() {
      function StopNetworkLoadBalancerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StopNetworkLoadBalancerMetadata.prototype.networkLoadBalancerId = '';
      StopNetworkLoadBalancerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      StopNetworkLoadBalancerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.StopNetworkLoadBalancerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StopNetworkLoadBalancerMetadata;
    })();
  })(root);
  (function($root) {
    $root.AttachNetworkLoadBalancerTargetGroupRequest = (function() {
      function AttachNetworkLoadBalancerTargetGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AttachNetworkLoadBalancerTargetGroupRequest.prototype.networkLoadBalancerId = '';
      AttachNetworkLoadBalancerTargetGroupRequest.prototype.attachedTargetGroup = null;
      AttachNetworkLoadBalancerTargetGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        if (m.attachedTargetGroup != null && m.hasOwnProperty('attachedTargetGroup')) $root.api.loadbalancer.v1.AttachedTargetGroup.encode(m.attachedTargetGroup, w.uint32(18).fork()).ldelim();
        return w;
      };
      AttachNetworkLoadBalancerTargetGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            case 2:
              m.attachedTargetGroup = $root.api.loadbalancer.v1.AttachedTargetGroup.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AttachNetworkLoadBalancerTargetGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.AttachNetworkLoadBalancerTargetGroupMetadata = (function() {
      function AttachNetworkLoadBalancerTargetGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AttachNetworkLoadBalancerTargetGroupMetadata.prototype.networkLoadBalancerId = '';
      AttachNetworkLoadBalancerTargetGroupMetadata.prototype.targetGroupId = '';
      AttachNetworkLoadBalancerTargetGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(18).string(m.targetGroupId);
        return w;
      };
      AttachNetworkLoadBalancerTargetGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            case 2:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AttachNetworkLoadBalancerTargetGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.DetachNetworkLoadBalancerTargetGroupRequest = (function() {
      function DetachNetworkLoadBalancerTargetGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DetachNetworkLoadBalancerTargetGroupRequest.prototype.networkLoadBalancerId = '';
      DetachNetworkLoadBalancerTargetGroupRequest.prototype.targetGroupId = '';
      DetachNetworkLoadBalancerTargetGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(18).string(m.targetGroupId);
        return w;
      };
      DetachNetworkLoadBalancerTargetGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            case 2:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DetachNetworkLoadBalancerTargetGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.DetachNetworkLoadBalancerTargetGroupMetadata = (function() {
      function DetachNetworkLoadBalancerTargetGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DetachNetworkLoadBalancerTargetGroupMetadata.prototype.networkLoadBalancerId = '';
      DetachNetworkLoadBalancerTargetGroupMetadata.prototype.targetGroupId = '';
      DetachNetworkLoadBalancerTargetGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(18).string(m.targetGroupId);
        return w;
      };
      DetachNetworkLoadBalancerTargetGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            case 2:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DetachNetworkLoadBalancerTargetGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.AddNetworkLoadBalancerListenerRequest = (function() {
      function AddNetworkLoadBalancerListenerRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddNetworkLoadBalancerListenerRequest.prototype.networkLoadBalancerId = '';
      AddNetworkLoadBalancerListenerRequest.prototype.listenerSpec = null;
      AddNetworkLoadBalancerListenerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        if (m.listenerSpec != null && m.hasOwnProperty('listenerSpec')) $root.api.loadbalancer.v1.ListenerSpec.encode(m.listenerSpec, w.uint32(18).fork()).ldelim();
        return w;
      };
      AddNetworkLoadBalancerListenerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            case 2:
              m.listenerSpec = $root.api.loadbalancer.v1.ListenerSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddNetworkLoadBalancerListenerRequest;
    })();
  })(root);
  (function($root) {
    $root.AddNetworkLoadBalancerListenerMetadata = (function() {
      function AddNetworkLoadBalancerListenerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddNetworkLoadBalancerListenerMetadata.prototype.networkLoadBalancerId = '';
      AddNetworkLoadBalancerListenerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      AddNetworkLoadBalancerListenerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddNetworkLoadBalancerListenerMetadata;
    })();
  })(root);
  (function($root) {
    $root.RemoveNetworkLoadBalancerListenerRequest = (function() {
      function RemoveNetworkLoadBalancerListenerRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RemoveNetworkLoadBalancerListenerRequest.prototype.networkLoadBalancerId = '';
      RemoveNetworkLoadBalancerListenerRequest.prototype.listenerName = '';
      RemoveNetworkLoadBalancerListenerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        if (m.listenerName != null && m.hasOwnProperty('listenerName')) w.uint32(18).string(m.listenerName);
        return w;
      };
      RemoveNetworkLoadBalancerListenerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            case 2:
              m.listenerName = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RemoveNetworkLoadBalancerListenerRequest;
    })();
  })(root);
  (function($root) {
    $root.RemoveNetworkLoadBalancerListenerMetadata = (function() {
      function RemoveNetworkLoadBalancerListenerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RemoveNetworkLoadBalancerListenerMetadata.prototype.networkLoadBalancerId = '';
      RemoveNetworkLoadBalancerListenerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        return w;
      };
      RemoveNetworkLoadBalancerListenerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RemoveNetworkLoadBalancerListenerMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListNetworkLoadBalancerOperationsRequest = (function() {
      function ListNetworkLoadBalancerOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworkLoadBalancerOperationsRequest.prototype.networkLoadBalancerId = '';
      ListNetworkLoadBalancerOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNetworkLoadBalancerOperationsRequest.prototype.pageToken = '';
      ListNetworkLoadBalancerOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListNetworkLoadBalancerOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
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
      return ListNetworkLoadBalancerOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNetworkLoadBalancerOperationsResponse = (function() {
      function ListNetworkLoadBalancerOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNetworkLoadBalancerOperationsResponse.prototype.operations = $util.emptyArray;
      ListNetworkLoadBalancerOperationsResponse.prototype.nextPageToken = '';
      ListNetworkLoadBalancerOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNetworkLoadBalancerOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse();
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
      return ListNetworkLoadBalancerOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.GetTargetStatesRequest = (function() {
      function GetTargetStatesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetTargetStatesRequest.prototype.networkLoadBalancerId = '';
      GetTargetStatesRequest.prototype.targetGroupId = '';
      GetTargetStatesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkLoadBalancerId != null && m.hasOwnProperty('networkLoadBalancerId')) w.uint32(10).string(m.networkLoadBalancerId);
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(18).string(m.targetGroupId);
        return w;
      };
      GetTargetStatesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.GetTargetStatesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkLoadBalancerId = r.string();
              break;
            case 2:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetTargetStatesRequest;
    })();
  })(root);
  (function($root) {
    $root.GetTargetStatesResponse = (function() {
      function GetTargetStatesResponse(p) {
        this.targetStates = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetTargetStatesResponse.prototype.targetStates = $util.emptyArray;
      GetTargetStatesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetStates != null && m.targetStates.length) {
          for (let i = 0; i < m.targetStates.length; ++i) $root.api.loadbalancer.v1.TargetState.encode(m.targetStates[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      GetTargetStatesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.GetTargetStatesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.targetStates && m.targetStates.length)) m.targetStates = [];
              m.targetStates.push($root.api.loadbalancer.v1.TargetState.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetTargetStatesResponse;
    })();
  })(root);
  (function($root) {
    $root.ExternalAddressSpec = (function() {
      function ExternalAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ExternalAddressSpec.prototype.address = '';
      ExternalAddressSpec.prototype.ipVersion = 0;
      ExternalAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(10).string(m.address);
        if (m.ipVersion != null && m.hasOwnProperty('ipVersion')) w.uint32(16).int32(m.ipVersion);
        return w;
      };
      ExternalAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ExternalAddressSpec();
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
      return ExternalAddressSpec;
    })();
  })(root);
  (function($root) {
    $root.InternalAddressSpec = (function() {
      function InternalAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      InternalAddressSpec.prototype.address = '';
      InternalAddressSpec.prototype.subnetId = '';
      InternalAddressSpec.prototype.ipVersion = 0;
      InternalAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(10).string(m.address);
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(18).string(m.subnetId);
        if (m.ipVersion != null && m.hasOwnProperty('ipVersion')) w.uint32(24).int32(m.ipVersion);
        return w;
      };
      InternalAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.InternalAddressSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.address = r.string();
              break;
            case 2:
              m.subnetId = r.string();
              break;
            case 3:
              m.ipVersion = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return InternalAddressSpec;
    })();
  })(root);
  (function($root) {
    $root.ListenerSpec = (function() {
      function ListenerSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListenerSpec.prototype.name = '';
      ListenerSpec.prototype.port = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListenerSpec.prototype.protocol = 0;
      ListenerSpec.prototype.externalAddressSpec = null;
      ListenerSpec.prototype.internalAddressSpec = null;
      ListenerSpec.prototype.targetPort = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      let $oneOfFields;
      Object.defineProperty(ListenerSpec.prototype, 'address', {
        get: $util.oneOfGetter(($oneOfFields = ['externalAddressSpec', 'internalAddressSpec'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      ListenerSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.port != null && m.hasOwnProperty('port')) w.uint32(16).int64(m.port);
        if (m.protocol != null && m.hasOwnProperty('protocol')) w.uint32(24).int32(m.protocol);
        if (m.externalAddressSpec != null && m.hasOwnProperty('externalAddressSpec')) $root.api.loadbalancer.v1.ExternalAddressSpec.encode(m.externalAddressSpec, w.uint32(34).fork()).ldelim();
        if (m.targetPort != null && m.hasOwnProperty('targetPort')) w.uint32(40).int64(m.targetPort);
        if (m.internalAddressSpec != null && m.hasOwnProperty('internalAddressSpec')) $root.api.loadbalancer.v1.InternalAddressSpec.encode(m.internalAddressSpec, w.uint32(50).fork()).ldelim();
        return w;
      };
      ListenerSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListenerSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.port = r.int64();
              break;
            case 3:
              m.protocol = r.int32();
              break;
            case 4:
              m.externalAddressSpec = $root.api.loadbalancer.v1.ExternalAddressSpec.decode(r, r.uint32());
              break;
            case 6:
              m.internalAddressSpec = $root.api.loadbalancer.v1.InternalAddressSpec.decode(r, r.uint32());
              break;
            case 5:
              m.targetPort = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListenerSpec;
    })();
  })(root);
  (function($root) {
    $root.TargetGroup = (function() {
      function TargetGroup(p) {
        this.labels = {};
        this.targets = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TargetGroup.prototype.id = '';
      TargetGroup.prototype.folderId = '';
      TargetGroup.prototype.createdAt = null;
      TargetGroup.prototype.name = '';
      TargetGroup.prototype.description = '';
      TargetGroup.prototype.labels = $util.emptyObject;
      TargetGroup.prototype.regionId = '';
      TargetGroup.prototype.targets = $util.emptyArray;
      TargetGroup.encode = function encode(m, w) {
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
        if (m.regionId != null && m.hasOwnProperty('regionId')) w.uint32(58).string(m.regionId);
        if (m.targets != null && m.targets.length) {
          for (let i = 0; i < m.targets.length; ++i) $root.api.loadbalancer.v1.Target.encode(m.targets[i], w.uint32(74).fork()).ldelim();
        }
        return w;
      };
      TargetGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.TargetGroup(),
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
              m.regionId = r.string();
              break;
            case 9:
              if (!(m.targets && m.targets.length)) m.targets = [];
              m.targets.push($root.api.loadbalancer.v1.Target.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return TargetGroup;
    })();
  })(root);
  (function($root) {
    $root.Target = (function() {
      function Target(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Target.prototype.subnetId = '';
      Target.prototype.address = '';
      Target.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(10).string(m.subnetId);
        if (m.address != null && m.hasOwnProperty('address')) w.uint32(18).string(m.address);
        return w;
      };
      Target.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.Target();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.subnetId = r.string();
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
      return Target;
    })();
  })(root);
  (function($root) {
    $root.TargetGroupService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.TargetGroupService.makeGrpcConstructor());
    };
    $root.TargetGroupService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.GetTargetGroupRequest,
          responseType: $root.api.loadbalancer.v1.TargetGroup,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.GetTargetGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.GetTargetGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.loadbalancer.v1.TargetGroup.encode(r).finish();
          },
          responseDeserialize: $root.api.loadbalancer.v1.TargetGroup.decode
        },
        list: {
          path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.ListTargetGroupsRequest,
          responseType: $root.api.loadbalancer.v1.ListTargetGroupsResponse,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.ListTargetGroupsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.ListTargetGroupsRequest.decode,
          responseSerialize: r => {
            return $root.api.loadbalancer.v1.ListTargetGroupsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.loadbalancer.v1.ListTargetGroupsResponse.decode
        },
        create: {
          path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.CreateTargetGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.CreateTargetGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.CreateTargetGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.UpdateTargetGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.UpdateTargetGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.UpdateTargetGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.DeleteTargetGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.DeleteTargetGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.DeleteTargetGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        addTargets: {
          path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/AddTargets',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.AddTargetsRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.AddTargetsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.AddTargetsRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        removeTargets: {
          path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/RemoveTargets',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.RemoveTargetsRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.RemoveTargetsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.RemoveTargetsRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.loadbalancer.v1.ListTargetGroupOperationsRequest,
          responseType: $root.api.loadbalancer.v1.ListTargetGroupOperationsResponse,
          requestSerialize: r => {
            return $root.api.loadbalancer.v1.ListTargetGroupOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.loadbalancer.v1.ListTargetGroupOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.loadbalancer.v1.ListTargetGroupOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.loadbalancer.v1.ListTargetGroupOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'load-balancer';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetTargetGroupRequest = (function() {
      function GetTargetGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetTargetGroupRequest.prototype.targetGroupId = '';
      GetTargetGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        return w;
      };
      GetTargetGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.GetTargetGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetTargetGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.ListTargetGroupsRequest = (function() {
      function ListTargetGroupsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListTargetGroupsRequest.prototype.folderId = '';
      ListTargetGroupsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListTargetGroupsRequest.prototype.pageToken = '';
      ListTargetGroupsRequest.prototype.filter = '';
      ListTargetGroupsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListTargetGroupsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListTargetGroupsRequest();
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
      return ListTargetGroupsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListTargetGroupsResponse = (function() {
      function ListTargetGroupsResponse(p) {
        this.targetGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListTargetGroupsResponse.prototype.targetGroups = $util.emptyArray;
      ListTargetGroupsResponse.prototype.nextPageToken = '';
      ListTargetGroupsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroups != null && m.targetGroups.length) {
          for (let i = 0; i < m.targetGroups.length; ++i) $root.api.loadbalancer.v1.TargetGroup.encode(m.targetGroups[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListTargetGroupsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListTargetGroupsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.targetGroups && m.targetGroups.length)) m.targetGroups = [];
              m.targetGroups.push($root.api.loadbalancer.v1.TargetGroup.decode(r, r.uint32()));
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
      return ListTargetGroupsResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateTargetGroupRequest = (function() {
      function CreateTargetGroupRequest(p) {
        this.labels = {};
        this.targets = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateTargetGroupRequest.prototype.folderId = '';
      CreateTargetGroupRequest.prototype.name = '';
      CreateTargetGroupRequest.prototype.description = '';
      CreateTargetGroupRequest.prototype.labels = $util.emptyObject;
      CreateTargetGroupRequest.prototype.regionId = '';
      CreateTargetGroupRequest.prototype.targets = $util.emptyArray;
      CreateTargetGroupRequest.encode = function encode(m, w) {
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
        if (m.regionId != null && m.hasOwnProperty('regionId')) w.uint32(42).string(m.regionId);
        if (m.targets != null && m.targets.length) {
          for (let i = 0; i < m.targets.length; ++i) $root.api.loadbalancer.v1.Target.encode(m.targets[i], w.uint32(58).fork()).ldelim();
        }
        return w;
      };
      CreateTargetGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.CreateTargetGroupRequest(),
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
              m.regionId = r.string();
              break;
            case 7:
              if (!(m.targets && m.targets.length)) m.targets = [];
              m.targets.push($root.api.loadbalancer.v1.Target.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateTargetGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateTargetGroupMetadata = (function() {
      function CreateTargetGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateTargetGroupMetadata.prototype.targetGroupId = '';
      CreateTargetGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        return w;
      };
      CreateTargetGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.CreateTargetGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateTargetGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateTargetGroupRequest = (function() {
      function UpdateTargetGroupRequest(p) {
        this.labels = {};
        this.targets = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateTargetGroupRequest.prototype.targetGroupId = '';
      UpdateTargetGroupRequest.prototype.updateMask = null;
      UpdateTargetGroupRequest.prototype.name = '';
      UpdateTargetGroupRequest.prototype.description = '';
      UpdateTargetGroupRequest.prototype.labels = $util.emptyObject;
      UpdateTargetGroupRequest.prototype.targets = $util.emptyArray;
      UpdateTargetGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
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
        if (m.targets != null && m.targets.length) {
          for (let i = 0; i < m.targets.length; ++i) $root.api.loadbalancer.v1.Target.encode(m.targets[i], w.uint32(50).fork()).ldelim();
        }
        return w;
      };
      UpdateTargetGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.UpdateTargetGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
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
              if (!(m.targets && m.targets.length)) m.targets = [];
              m.targets.push($root.api.loadbalancer.v1.Target.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateTargetGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateTargetGroupMetadata = (function() {
      function UpdateTargetGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateTargetGroupMetadata.prototype.targetGroupId = '';
      UpdateTargetGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        return w;
      };
      UpdateTargetGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.UpdateTargetGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateTargetGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteTargetGroupRequest = (function() {
      function DeleteTargetGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteTargetGroupRequest.prototype.targetGroupId = '';
      DeleteTargetGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        return w;
      };
      DeleteTargetGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.DeleteTargetGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteTargetGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteTargetGroupMetadata = (function() {
      function DeleteTargetGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteTargetGroupMetadata.prototype.targetGroupId = '';
      DeleteTargetGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        return w;
      };
      DeleteTargetGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.DeleteTargetGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteTargetGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.AddTargetsRequest = (function() {
      function AddTargetsRequest(p) {
        this.targets = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddTargetsRequest.prototype.targetGroupId = '';
      AddTargetsRequest.prototype.targets = $util.emptyArray;
      AddTargetsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        if (m.targets != null && m.targets.length) {
          for (let i = 0; i < m.targets.length; ++i) $root.api.loadbalancer.v1.Target.encode(m.targets[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      AddTargetsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.AddTargetsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            case 2:
              if (!(m.targets && m.targets.length)) m.targets = [];
              m.targets.push($root.api.loadbalancer.v1.Target.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddTargetsRequest;
    })();
  })(root);
  (function($root) {
    $root.AddTargetsMetadata = (function() {
      function AddTargetsMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AddTargetsMetadata.prototype.targetGroupId = '';
      AddTargetsMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        return w;
      };
      AddTargetsMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.AddTargetsMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AddTargetsMetadata;
    })();
  })(root);
  (function($root) {
    $root.RemoveTargetsRequest = (function() {
      function RemoveTargetsRequest(p) {
        this.targets = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RemoveTargetsRequest.prototype.targetGroupId = '';
      RemoveTargetsRequest.prototype.targets = $util.emptyArray;
      RemoveTargetsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        if (m.targets != null && m.targets.length) {
          for (let i = 0; i < m.targets.length; ++i) $root.api.loadbalancer.v1.Target.encode(m.targets[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      RemoveTargetsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.RemoveTargetsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            case 2:
              if (!(m.targets && m.targets.length)) m.targets = [];
              m.targets.push($root.api.loadbalancer.v1.Target.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RemoveTargetsRequest;
    })();
  })(root);
  (function($root) {
    $root.RemoveTargetsMetadata = (function() {
      function RemoveTargetsMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RemoveTargetsMetadata.prototype.targetGroupId = '';
      RemoveTargetsMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        return w;
      };
      RemoveTargetsMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.RemoveTargetsMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RemoveTargetsMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListTargetGroupOperationsRequest = (function() {
      function ListTargetGroupOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListTargetGroupOperationsRequest.prototype.targetGroupId = '';
      ListTargetGroupOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListTargetGroupOperationsRequest.prototype.pageToken = '';
      ListTargetGroupOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListTargetGroupOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListTargetGroupOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
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
      return ListTargetGroupOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListTargetGroupOperationsResponse = (function() {
      function ListTargetGroupOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListTargetGroupOperationsResponse.prototype.operations = $util.emptyArray;
      ListTargetGroupOperationsResponse.prototype.nextPageToken = '';
      ListTargetGroupOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListTargetGroupOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.loadbalancer.v1.ListTargetGroupOperationsResponse();
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
      return ListTargetGroupOperationsResponse;
    })();
  })(root);
  registar.register('api.loadbalancer.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
