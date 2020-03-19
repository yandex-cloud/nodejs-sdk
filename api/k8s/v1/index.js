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
    $root.Cluster = (function() {
      function Cluster(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Cluster.prototype.id = '';
      Cluster.prototype.folderId = '';
      Cluster.prototype.createdAt = null;
      Cluster.prototype.name = '';
      Cluster.prototype.description = '';
      Cluster.prototype.labels = $util.emptyObject;
      Cluster.prototype.status = 0;
      Cluster.prototype.health = 0;
      Cluster.prototype.networkId = '';
      Cluster.prototype.master = null;
      Cluster.prototype.ipAllocationPolicy = null;
      Cluster.prototype.gatewayIpv4Address = '';
      Cluster.prototype.serviceAccountId = '';
      Cluster.prototype.nodeServiceAccountId = '';
      Cluster.prototype.releaseChannel = 0;
      Cluster.prototype.networkPolicy = null;
      let $oneOfFields;
      Object.defineProperty(Cluster.prototype, 'internetGateway', {
        get: $util.oneOfGetter(($oneOfFields = ['gatewayIpv4Address'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Cluster.encode = function encode(m, w) {
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
        if (m.health != null && m.hasOwnProperty('health')) w.uint32(64).int32(m.health);
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(74).string(m.networkId);
        if (m.master != null && m.hasOwnProperty('master')) $root.api.k8s.v1.Master.encode(m.master, w.uint32(82).fork()).ldelim();
        if (m.ipAllocationPolicy != null && m.hasOwnProperty('ipAllocationPolicy')) $root.api.k8s.v1.IPAllocationPolicy.encode(m.ipAllocationPolicy, w.uint32(90).fork()).ldelim();
        if (m.gatewayIpv4Address != null && m.hasOwnProperty('gatewayIpv4Address')) w.uint32(98).string(m.gatewayIpv4Address);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(106).string(m.serviceAccountId);
        if (m.nodeServiceAccountId != null && m.hasOwnProperty('nodeServiceAccountId')) w.uint32(114).string(m.nodeServiceAccountId);
        if (m.releaseChannel != null && m.hasOwnProperty('releaseChannel')) w.uint32(120).int32(m.releaseChannel);
        if (m.networkPolicy != null && m.hasOwnProperty('networkPolicy')) $root.api.k8s.v1.NetworkPolicy.encode(m.networkPolicy, w.uint32(130).fork()).ldelim();
        return w;
      };
      Cluster.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.Cluster(),
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
              m.health = r.int32();
              break;
            case 9:
              m.networkId = r.string();
              break;
            case 10:
              m.master = $root.api.k8s.v1.Master.decode(r, r.uint32());
              break;
            case 11:
              m.ipAllocationPolicy = $root.api.k8s.v1.IPAllocationPolicy.decode(r, r.uint32());
              break;
            case 12:
              m.gatewayIpv4Address = r.string();
              break;
            case 13:
              m.serviceAccountId = r.string();
              break;
            case 14:
              m.nodeServiceAccountId = r.string();
              break;
            case 15:
              m.releaseChannel = r.int32();
              break;
            case 16:
              m.networkPolicy = $root.api.k8s.v1.NetworkPolicy.decode(r, r.uint32());
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
        values[(valuesById[3] = 'RECONCILING')] = 3;
        values[(valuesById[4] = 'STOPPING')] = 4;
        values[(valuesById[5] = 'STOPPED')] = 5;
        values[(valuesById[6] = 'DELETING')] = 6;
        values[(valuesById[7] = 'STARTING')] = 7;
        return values;
      })();
      Cluster.Status = Status;
      let Health = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'HEALTH_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'HEALTHY')] = 1;
        values[(valuesById[2] = 'UNHEALTHY')] = 2;
        return values;
      })();
      Cluster.Health = Health;
      return Cluster;
    })();
  })(root);
  (function($root) {
    $root.ReleaseChannel = (function() {
      let ReleaseChannel = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'RELEASE_CHANNEL_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'RAPID')] = 1;
        values[(valuesById[2] = 'REGULAR')] = 2;
        values[(valuesById[3] = 'STABLE')] = 3;
        return values;
      })();
      return ReleaseChannel;
    })();
  })(root);
  (function($root) {
    $root.Master = (function() {
      function Master(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Master.prototype.zonalMaster = null;
      Master.prototype.regionalMaster = null;
      Master.prototype.version = '';
      Master.prototype.endpoints = null;
      Master.prototype.masterAuth = null;
      Master.prototype.versionInfo = null;
      Master.prototype.maintenancePolicy = null;
      let $oneOfFields;
      Object.defineProperty(Master.prototype, 'masterType', {
        get: $util.oneOfGetter(($oneOfFields = ['zonalMaster', 'regionalMaster'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Master.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zonalMaster != null && m.hasOwnProperty('zonalMaster')) $root.api.k8s.v1.ZonalMaster.encode(m.zonalMaster, w.uint32(10).fork()).ldelim();
        if (m.version != null && m.hasOwnProperty('version')) w.uint32(18).string(m.version);
        if (m.endpoints != null && m.hasOwnProperty('endpoints')) $root.api.k8s.v1.MasterEndpoints.encode(m.endpoints, w.uint32(26).fork()).ldelim();
        if (m.masterAuth != null && m.hasOwnProperty('masterAuth')) $root.api.k8s.v1.MasterAuth.encode(m.masterAuth, w.uint32(34).fork()).ldelim();
        if (m.versionInfo != null && m.hasOwnProperty('versionInfo')) $root.api.k8s.v1.VersionInfo.encode(m.versionInfo, w.uint32(42).fork()).ldelim();
        if (m.maintenancePolicy != null && m.hasOwnProperty('maintenancePolicy')) $root.api.k8s.v1.MasterMaintenancePolicy.encode(m.maintenancePolicy, w.uint32(50).fork()).ldelim();
        if (m.regionalMaster != null && m.hasOwnProperty('regionalMaster')) $root.api.k8s.v1.RegionalMaster.encode(m.regionalMaster, w.uint32(58).fork()).ldelim();
        return w;
      };
      Master.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.Master();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zonalMaster = $root.api.k8s.v1.ZonalMaster.decode(r, r.uint32());
              break;
            case 7:
              m.regionalMaster = $root.api.k8s.v1.RegionalMaster.decode(r, r.uint32());
              break;
            case 2:
              m.version = r.string();
              break;
            case 3:
              m.endpoints = $root.api.k8s.v1.MasterEndpoints.decode(r, r.uint32());
              break;
            case 4:
              m.masterAuth = $root.api.k8s.v1.MasterAuth.decode(r, r.uint32());
              break;
            case 5:
              m.versionInfo = $root.api.k8s.v1.VersionInfo.decode(r, r.uint32());
              break;
            case 6:
              m.maintenancePolicy = $root.api.k8s.v1.MasterMaintenancePolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Master;
    })();
  })(root);
  (function($root) {
    $root.MasterAuth = (function() {
      function MasterAuth(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterAuth.prototype.clusterCaCertificate = '';
      MasterAuth.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterCaCertificate != null && m.hasOwnProperty('clusterCaCertificate')) w.uint32(10).string(m.clusterCaCertificate);
        return w;
      };
      MasterAuth.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterAuth();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterCaCertificate = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterAuth;
    })();
  })(root);
  (function($root) {
    $root.ZonalMaster = (function() {
      function ZonalMaster(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ZonalMaster.prototype.zoneId = '';
      ZonalMaster.prototype.internalV4Address = '';
      ZonalMaster.prototype.externalV4Address = '';
      ZonalMaster.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
        if (m.internalV4Address != null && m.hasOwnProperty('internalV4Address')) w.uint32(18).string(m.internalV4Address);
        if (m.externalV4Address != null && m.hasOwnProperty('externalV4Address')) w.uint32(26).string(m.externalV4Address);
        return w;
      };
      ZonalMaster.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ZonalMaster();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zoneId = r.string();
              break;
            case 2:
              m.internalV4Address = r.string();
              break;
            case 3:
              m.externalV4Address = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ZonalMaster;
    })();
  })(root);
  (function($root) {
    $root.RegionalMaster = (function() {
      function RegionalMaster(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RegionalMaster.prototype.regionId = '';
      RegionalMaster.prototype.internalV4Address = '';
      RegionalMaster.prototype.externalV4Address = '';
      RegionalMaster.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.regionId != null && m.hasOwnProperty('regionId')) w.uint32(10).string(m.regionId);
        if (m.internalV4Address != null && m.hasOwnProperty('internalV4Address')) w.uint32(18).string(m.internalV4Address);
        if (m.externalV4Address != null && m.hasOwnProperty('externalV4Address')) w.uint32(26).string(m.externalV4Address);
        return w;
      };
      RegionalMaster.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.RegionalMaster();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.regionId = r.string();
              break;
            case 2:
              m.internalV4Address = r.string();
              break;
            case 3:
              m.externalV4Address = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RegionalMaster;
    })();
  })(root);
  (function($root) {
    $root.MasterEndpoints = (function() {
      function MasterEndpoints(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterEndpoints.prototype.internalV4Endpoint = '';
      MasterEndpoints.prototype.externalV4Endpoint = '';
      MasterEndpoints.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.internalV4Endpoint != null && m.hasOwnProperty('internalV4Endpoint')) w.uint32(10).string(m.internalV4Endpoint);
        if (m.externalV4Endpoint != null && m.hasOwnProperty('externalV4Endpoint')) w.uint32(18).string(m.externalV4Endpoint);
        return w;
      };
      MasterEndpoints.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterEndpoints();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.internalV4Endpoint = r.string();
              break;
            case 2:
              m.externalV4Endpoint = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterEndpoints;
    })();
  })(root);
  (function($root) {
    $root.IPAllocationPolicy = (function() {
      function IPAllocationPolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      IPAllocationPolicy.prototype.clusterIpv4CidrBlock = '';
      IPAllocationPolicy.prototype.nodeIpv4CidrMaskSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      IPAllocationPolicy.prototype.serviceIpv4CidrBlock = '';
      IPAllocationPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterIpv4CidrBlock != null && m.hasOwnProperty('clusterIpv4CidrBlock')) w.uint32(10).string(m.clusterIpv4CidrBlock);
        if (m.serviceIpv4CidrBlock != null && m.hasOwnProperty('serviceIpv4CidrBlock')) w.uint32(18).string(m.serviceIpv4CidrBlock);
        if (m.nodeIpv4CidrMaskSize != null && m.hasOwnProperty('nodeIpv4CidrMaskSize')) w.uint32(40).int64(m.nodeIpv4CidrMaskSize);
        return w;
      };
      IPAllocationPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.IPAllocationPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterIpv4CidrBlock = r.string();
              break;
            case 5:
              m.nodeIpv4CidrMaskSize = r.int64();
              break;
            case 2:
              m.serviceIpv4CidrBlock = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return IPAllocationPolicy;
    })();
  })(root);
  (function($root) {
    $root.MasterMaintenancePolicy = (function() {
      function MasterMaintenancePolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterMaintenancePolicy.prototype.autoUpgrade = false;
      MasterMaintenancePolicy.prototype.maintenanceWindow = null;
      MasterMaintenancePolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.autoUpgrade != null && m.hasOwnProperty('autoUpgrade')) w.uint32(8).bool(m.autoUpgrade);
        if (m.maintenanceWindow != null && m.hasOwnProperty('maintenanceWindow')) $root.api.k8s.v1.MaintenanceWindow.encode(m.maintenanceWindow, w.uint32(18).fork()).ldelim();
        return w;
      };
      MasterMaintenancePolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterMaintenancePolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.autoUpgrade = r.bool();
              break;
            case 2:
              m.maintenanceWindow = $root.api.k8s.v1.MaintenanceWindow.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterMaintenancePolicy;
    })();
  })(root);
  (function($root) {
    $root.NetworkPolicy = (function() {
      function NetworkPolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NetworkPolicy.prototype.provider = 0;
      NetworkPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.provider != null && m.hasOwnProperty('provider')) w.uint32(8).int32(m.provider);
        return w;
      };
      NetworkPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NetworkPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.provider = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Provider = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'PROVIDER_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'CALICO')] = 1;
        return values;
      })();
      NetworkPolicy.Provider = Provider;
      return NetworkPolicy;
    })();
  })(root);
  (function($root) {
    $root.ClusterService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.ClusterService.makeGrpcConstructor());
    };
    $root.ClusterService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.GetClusterRequest,
          responseType: $root.api.k8s.v1.Cluster,
          requestSerialize: r => {
            return $root.api.k8s.v1.GetClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.GetClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.Cluster.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.Cluster.decode
        },
        list: {
          path: '/yandex.cloud.k8s.v1.ClusterService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListClustersRequest,
          responseType: $root.api.k8s.v1.ListClustersResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListClustersRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListClustersRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListClustersResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListClustersResponse.decode
        },
        create: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.CreateClusterRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.CreateClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.CreateClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.UpdateClusterRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.UpdateClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.UpdateClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.DeleteClusterRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.DeleteClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.DeleteClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        stop: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Stop',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.StopClusterRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.StopClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.StopClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        start: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Start',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.StartClusterRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.StartClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.StartClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listNodeGroups: {
          path: '/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListClusterNodeGroupsRequest,
          responseType: $root.api.k8s.v1.ListClusterNodeGroupsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListClusterNodeGroupsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListClusterNodeGroupsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListClusterNodeGroupsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListClusterNodeGroupsResponse.decode
        },
        listOperations: {
          path: '/yandex.cloud.k8s.v1.ClusterService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListClusterOperationsRequest,
          responseType: $root.api.k8s.v1.ListClusterOperationsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListClusterOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListClusterOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListClusterOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListClusterOperationsResponse.decode
        },
        listNodes: {
          path: '/yandex.cloud.k8s.v1.ClusterService/ListNodes',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListClusterNodesRequest,
          responseType: $root.api.k8s.v1.ListClusterNodesResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListClusterNodesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListClusterNodesRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListClusterNodesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListClusterNodesResponse.decode
        }
      });
      ctor.__endpointId = 'managed-kubernetes';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetClusterRequest = (function() {
      function GetClusterRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetClusterRequest.prototype.clusterId = '';
      GetClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      GetClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.GetClusterRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClustersRequest = (function() {
      function ListClustersRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClustersRequest.prototype.folderId = '';
      ListClustersRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListClustersRequest.prototype.pageToken = '';
      ListClustersRequest.prototype.filter = '';
      ListClustersRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListClustersRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClustersRequest();
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
      return ListClustersRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClustersResponse = (function() {
      function ListClustersResponse(p) {
        this.clusters = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClustersResponse.prototype.clusters = $util.emptyArray;
      ListClustersResponse.prototype.nextPageToken = '';
      ListClustersResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusters != null && m.clusters.length) {
          for (let i = 0; i < m.clusters.length; ++i) $root.api.k8s.v1.Cluster.encode(m.clusters[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListClustersResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClustersResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.clusters && m.clusters.length)) m.clusters = [];
              m.clusters.push($root.api.k8s.v1.Cluster.decode(r, r.uint32()));
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
      return ListClustersResponse;
    })();
  })(root);
  (function($root) {
    $root.DeleteClusterRequest = (function() {
      function DeleteClusterRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteClusterRequest.prototype.clusterId = '';
      DeleteClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      DeleteClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DeleteClusterRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteClusterMetadata = (function() {
      function DeleteClusterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteClusterMetadata.prototype.clusterId = '';
      DeleteClusterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      DeleteClusterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DeleteClusterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteClusterMetadata;
    })();
  })(root);
  (function($root) {
    $root.StopClusterRequest = (function() {
      function StopClusterRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StopClusterRequest.prototype.clusterId = '';
      StopClusterRequest.prototype.serviceAccountId = '';
      StopClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(18).string(m.serviceAccountId);
        return w;
      };
      StopClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.StopClusterRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            case 2:
              m.serviceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StopClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.StopClusterMetadata = (function() {
      function StopClusterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StopClusterMetadata.prototype.clusterId = '';
      StopClusterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      StopClusterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.StopClusterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StopClusterMetadata;
    })();
  })(root);
  (function($root) {
    $root.StartClusterRequest = (function() {
      function StartClusterRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StartClusterRequest.prototype.clusterId = '';
      StartClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      StartClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.StartClusterRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StartClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.StartClusterMetadata = (function() {
      function StartClusterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StartClusterMetadata.prototype.clusterId = '';
      StartClusterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      StartClusterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.StartClusterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StartClusterMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateClusterRequest = (function() {
      function UpdateClusterRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateClusterRequest.prototype.clusterId = '';
      UpdateClusterRequest.prototype.updateMask = null;
      UpdateClusterRequest.prototype.name = '';
      UpdateClusterRequest.prototype.description = '';
      UpdateClusterRequest.prototype.labels = $util.emptyObject;
      UpdateClusterRequest.prototype.gatewayIpv4Address = '';
      UpdateClusterRequest.prototype.masterSpec = null;
      UpdateClusterRequest.prototype.serviceAccountId = '';
      UpdateClusterRequest.prototype.nodeServiceAccountId = '';
      UpdateClusterRequest.prototype.networkPolicy = null;
      let $oneOfFields;
      Object.defineProperty(UpdateClusterRequest.prototype, 'internetGateway', {
        get: $util.oneOfGetter(($oneOfFields = ['gatewayIpv4Address'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      UpdateClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
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
        if (m.gatewayIpv4Address != null && m.hasOwnProperty('gatewayIpv4Address')) w.uint32(50).string(m.gatewayIpv4Address);
        if (m.masterSpec != null && m.hasOwnProperty('masterSpec')) $root.api.k8s.v1.MasterUpdateSpec.encode(m.masterSpec, w.uint32(58).fork()).ldelim();
        if (m.nodeServiceAccountId != null && m.hasOwnProperty('nodeServiceAccountId')) w.uint32(66).string(m.nodeServiceAccountId);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(74).string(m.serviceAccountId);
        if (m.networkPolicy != null && m.hasOwnProperty('networkPolicy')) $root.api.k8s.v1.NetworkPolicy.encode(m.networkPolicy, w.uint32(82).fork()).ldelim();
        return w;
      };
      UpdateClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateClusterRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
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
              m.gatewayIpv4Address = r.string();
              break;
            case 7:
              m.masterSpec = $root.api.k8s.v1.MasterUpdateSpec.decode(r, r.uint32());
              break;
            case 9:
              m.serviceAccountId = r.string();
              break;
            case 8:
              m.nodeServiceAccountId = r.string();
              break;
            case 10:
              m.networkPolicy = $root.api.k8s.v1.NetworkPolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.MasterUpdateSpec = (function() {
      function MasterUpdateSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterUpdateSpec.prototype.version = null;
      MasterUpdateSpec.prototype.maintenancePolicy = null;
      MasterUpdateSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.version != null && m.hasOwnProperty('version')) $root.api.k8s.v1.UpdateVersionSpec.encode(m.version, w.uint32(10).fork()).ldelim();
        if (m.maintenancePolicy != null && m.hasOwnProperty('maintenancePolicy')) $root.api.k8s.v1.MasterMaintenancePolicy.encode(m.maintenancePolicy, w.uint32(18).fork()).ldelim();
        return w;
      };
      MasterUpdateSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterUpdateSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.version = $root.api.k8s.v1.UpdateVersionSpec.decode(r, r.uint32());
              break;
            case 2:
              m.maintenancePolicy = $root.api.k8s.v1.MasterMaintenancePolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterUpdateSpec;
    })();
  })(root);
  (function($root) {
    $root.UpdateClusterMetadata = (function() {
      function UpdateClusterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateClusterMetadata.prototype.clusterId = '';
      UpdateClusterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      UpdateClusterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateClusterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateClusterMetadata;
    })();
  })(root);
  (function($root) {
    $root.CreateClusterRequest = (function() {
      function CreateClusterRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateClusterRequest.prototype.folderId = '';
      CreateClusterRequest.prototype.name = '';
      CreateClusterRequest.prototype.description = '';
      CreateClusterRequest.prototype.labels = $util.emptyObject;
      CreateClusterRequest.prototype.networkId = '';
      CreateClusterRequest.prototype.masterSpec = null;
      CreateClusterRequest.prototype.ipAllocationPolicy = null;
      CreateClusterRequest.prototype.gatewayIpv4Address = '';
      CreateClusterRequest.prototype.serviceAccountId = '';
      CreateClusterRequest.prototype.nodeServiceAccountId = '';
      CreateClusterRequest.prototype.releaseChannel = 0;
      CreateClusterRequest.prototype.networkPolicy = null;
      let $oneOfFields;
      Object.defineProperty(CreateClusterRequest.prototype, 'internetGateway', {
        get: $util.oneOfGetter(($oneOfFields = ['gatewayIpv4Address'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      CreateClusterRequest.encode = function encode(m, w) {
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
        if (m.masterSpec != null && m.hasOwnProperty('masterSpec')) $root.api.k8s.v1.MasterSpec.encode(m.masterSpec, w.uint32(50).fork()).ldelim();
        if (m.ipAllocationPolicy != null && m.hasOwnProperty('ipAllocationPolicy')) $root.api.k8s.v1.IPAllocationPolicy.encode(m.ipAllocationPolicy, w.uint32(58).fork()).ldelim();
        if (m.gatewayIpv4Address != null && m.hasOwnProperty('gatewayIpv4Address')) w.uint32(66).string(m.gatewayIpv4Address);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(74).string(m.serviceAccountId);
        if (m.nodeServiceAccountId != null && m.hasOwnProperty('nodeServiceAccountId')) w.uint32(82).string(m.nodeServiceAccountId);
        if (m.releaseChannel != null && m.hasOwnProperty('releaseChannel')) w.uint32(88).int32(m.releaseChannel);
        if (m.networkPolicy != null && m.hasOwnProperty('networkPolicy')) $root.api.k8s.v1.NetworkPolicy.encode(m.networkPolicy, w.uint32(98).fork()).ldelim();
        return w;
      };
      CreateClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.CreateClusterRequest(),
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
              m.masterSpec = $root.api.k8s.v1.MasterSpec.decode(r, r.uint32());
              break;
            case 7:
              m.ipAllocationPolicy = $root.api.k8s.v1.IPAllocationPolicy.decode(r, r.uint32());
              break;
            case 8:
              m.gatewayIpv4Address = r.string();
              break;
            case 9:
              m.serviceAccountId = r.string();
              break;
            case 10:
              m.nodeServiceAccountId = r.string();
              break;
            case 11:
              m.releaseChannel = r.int32();
              break;
            case 12:
              m.networkPolicy = $root.api.k8s.v1.NetworkPolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateClusterMetadata = (function() {
      function CreateClusterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateClusterMetadata.prototype.clusterId = '';
      CreateClusterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      CreateClusterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.CreateClusterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateClusterMetadata;
    })();
  })(root);
  (function($root) {
    $root.AutoUpgradeMasterMetadata = (function() {
      function AutoUpgradeMasterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AutoUpgradeMasterMetadata.prototype.clusterId = '';
      AutoUpgradeMasterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      AutoUpgradeMasterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.AutoUpgradeMasterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AutoUpgradeMasterMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListClusterOperationsRequest = (function() {
      function ListClusterOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterOperationsRequest.prototype.clusterId = '';
      ListClusterOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListClusterOperationsRequest.prototype.pageToken = '';
      ListClusterOperationsRequest.prototype.filter = '';
      ListClusterOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListClusterOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
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
      return ListClusterOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClusterOperationsResponse = (function() {
      function ListClusterOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterOperationsResponse.prototype.operations = $util.emptyArray;
      ListClusterOperationsResponse.prototype.nextPageToken = '';
      ListClusterOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListClusterOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterOperationsResponse();
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
      return ListClusterOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListClusterNodeGroupsRequest = (function() {
      function ListClusterNodeGroupsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterNodeGroupsRequest.prototype.clusterId = '';
      ListClusterNodeGroupsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListClusterNodeGroupsRequest.prototype.pageToken = '';
      ListClusterNodeGroupsRequest.prototype.filter = '';
      ListClusterNodeGroupsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListClusterNodeGroupsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterNodeGroupsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
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
      return ListClusterNodeGroupsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClusterNodeGroupsResponse = (function() {
      function ListClusterNodeGroupsResponse(p) {
        this.nodeGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterNodeGroupsResponse.prototype.nodeGroups = $util.emptyArray;
      ListClusterNodeGroupsResponse.prototype.nextPageToken = '';
      ListClusterNodeGroupsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroups != null && m.nodeGroups.length) {
          for (let i = 0; i < m.nodeGroups.length; ++i) $root.api.k8s.v1.NodeGroup.encode(m.nodeGroups[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListClusterNodeGroupsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterNodeGroupsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.nodeGroups && m.nodeGroups.length)) m.nodeGroups = [];
              m.nodeGroups.push($root.api.k8s.v1.NodeGroup.decode(r, r.uint32()));
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
      return ListClusterNodeGroupsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListClusterNodesRequest = (function() {
      function ListClusterNodesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterNodesRequest.prototype.clusterId = '';
      ListClusterNodesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListClusterNodesRequest.prototype.pageToken = '';
      ListClusterNodesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListClusterNodesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterNodesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
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
      return ListClusterNodesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClusterNodesResponse = (function() {
      function ListClusterNodesResponse(p) {
        this.nodes = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterNodesResponse.prototype.nodes = $util.emptyArray;
      ListClusterNodesResponse.prototype.nextPageToken = '';
      ListClusterNodesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodes != null && m.nodes.length) {
          for (let i = 0; i < m.nodes.length; ++i) $root.api.k8s.v1.Node.encode(m.nodes[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListClusterNodesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterNodesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.nodes && m.nodes.length)) m.nodes = [];
              m.nodes.push($root.api.k8s.v1.Node.decode(r, r.uint32()));
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
      return ListClusterNodesResponse;
    })();
  })(root);
  (function($root) {
    $root.MasterSpec = (function() {
      function MasterSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterSpec.prototype.zonalMasterSpec = null;
      MasterSpec.prototype.regionalMasterSpec = null;
      MasterSpec.prototype.version = '';
      MasterSpec.prototype.maintenancePolicy = null;
      let $oneOfFields;
      Object.defineProperty(MasterSpec.prototype, 'masterType', {
        get: $util.oneOfGetter(($oneOfFields = ['zonalMasterSpec', 'regionalMasterSpec'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      MasterSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zonalMasterSpec != null && m.hasOwnProperty('zonalMasterSpec')) $root.api.k8s.v1.ZonalMasterSpec.encode(m.zonalMasterSpec, w.uint32(10).fork()).ldelim();
        if (m.regionalMasterSpec != null && m.hasOwnProperty('regionalMasterSpec')) $root.api.k8s.v1.RegionalMasterSpec.encode(m.regionalMasterSpec, w.uint32(18).fork()).ldelim();
        if (m.version != null && m.hasOwnProperty('version')) w.uint32(26).string(m.version);
        if (m.maintenancePolicy != null && m.hasOwnProperty('maintenancePolicy')) $root.api.k8s.v1.MasterMaintenancePolicy.encode(m.maintenancePolicy, w.uint32(34).fork()).ldelim();
        return w;
      };
      MasterSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zonalMasterSpec = $root.api.k8s.v1.ZonalMasterSpec.decode(r, r.uint32());
              break;
            case 2:
              m.regionalMasterSpec = $root.api.k8s.v1.RegionalMasterSpec.decode(r, r.uint32());
              break;
            case 3:
              m.version = r.string();
              break;
            case 4:
              m.maintenancePolicy = $root.api.k8s.v1.MasterMaintenancePolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterSpec;
    })();
  })(root);
  (function($root) {
    $root.ZonalMasterSpec = (function() {
      function ZonalMasterSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ZonalMasterSpec.prototype.zoneId = '';
      ZonalMasterSpec.prototype.internalV4AddressSpec = null;
      ZonalMasterSpec.prototype.externalV4AddressSpec = null;
      ZonalMasterSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
        if (m.internalV4AddressSpec != null && m.hasOwnProperty('internalV4AddressSpec')) $root.api.k8s.v1.InternalAddressSpec.encode(m.internalV4AddressSpec, w.uint32(18).fork()).ldelim();
        if (m.externalV4AddressSpec != null && m.hasOwnProperty('externalV4AddressSpec')) $root.api.k8s.v1.ExternalAddressSpec.encode(m.externalV4AddressSpec, w.uint32(26).fork()).ldelim();
        return w;
      };
      ZonalMasterSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ZonalMasterSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zoneId = r.string();
              break;
            case 2:
              m.internalV4AddressSpec = $root.api.k8s.v1.InternalAddressSpec.decode(r, r.uint32());
              break;
            case 3:
              m.externalV4AddressSpec = $root.api.k8s.v1.ExternalAddressSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ZonalMasterSpec;
    })();
  })(root);
  (function($root) {
    $root.RegionalMasterSpec = (function() {
      function RegionalMasterSpec(p) {
        this.locations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RegionalMasterSpec.prototype.regionId = '';
      RegionalMasterSpec.prototype.locations = $util.emptyArray;
      RegionalMasterSpec.prototype.externalV4AddressSpec = null;
      RegionalMasterSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.regionId != null && m.hasOwnProperty('regionId')) w.uint32(10).string(m.regionId);
        if (m.locations != null && m.locations.length) {
          for (let i = 0; i < m.locations.length; ++i) $root.api.k8s.v1.MasterLocation.encode(m.locations[i], w.uint32(18).fork()).ldelim();
        }
        if (m.externalV4AddressSpec != null && m.hasOwnProperty('externalV4AddressSpec')) $root.api.k8s.v1.ExternalAddressSpec.encode(m.externalV4AddressSpec, w.uint32(26).fork()).ldelim();
        return w;
      };
      RegionalMasterSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.RegionalMasterSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.regionId = r.string();
              break;
            case 2:
              if (!(m.locations && m.locations.length)) m.locations = [];
              m.locations.push($root.api.k8s.v1.MasterLocation.decode(r, r.uint32()));
              break;
            case 3:
              m.externalV4AddressSpec = $root.api.k8s.v1.ExternalAddressSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RegionalMasterSpec;
    })();
  })(root);
  (function($root) {
    $root.InternalAddressSpec = (function() {
      function InternalAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      InternalAddressSpec.prototype.subnetId = '';
      InternalAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(18).string(m.subnetId);
        return w;
      };
      InternalAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.InternalAddressSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 2:
              m.subnetId = r.string();
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
    $root.ExternalAddressSpec = (function() {
      function ExternalAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ExternalAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      ExternalAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ExternalAddressSpec();
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
      return ExternalAddressSpec;
    })();
  })(root);
  (function($root) {
    $root.MasterLocation = (function() {
      function MasterLocation(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterLocation.prototype.zoneId = '';
      MasterLocation.prototype.internalV4AddressSpec = null;
      MasterLocation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
        if (m.internalV4AddressSpec != null && m.hasOwnProperty('internalV4AddressSpec')) $root.api.k8s.v1.InternalAddressSpec.encode(m.internalV4AddressSpec, w.uint32(18).fork()).ldelim();
        return w;
      };
      MasterLocation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterLocation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zoneId = r.string();
              break;
            case 2:
              m.internalV4AddressSpec = $root.api.k8s.v1.InternalAddressSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterLocation;
    })();
  })(root);
  (function($root) {
    $root.MaintenanceWindow = (function() {
      function MaintenanceWindow(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MaintenanceWindow.prototype.anytime = null;
      MaintenanceWindow.prototype.dailyMaintenanceWindow = null;
      MaintenanceWindow.prototype.weeklyMaintenanceWindow = null;
      let $oneOfFields;
      Object.defineProperty(MaintenanceWindow.prototype, 'policy', {
        get: $util.oneOfGetter(($oneOfFields = ['anytime', 'dailyMaintenanceWindow', 'weeklyMaintenanceWindow'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      MaintenanceWindow.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.anytime != null && m.hasOwnProperty('anytime')) $root.api.k8s.v1.AnytimeMaintenanceWindow.encode(m.anytime, w.uint32(10).fork()).ldelim();
        if (m.dailyMaintenanceWindow != null && m.hasOwnProperty('dailyMaintenanceWindow')) $root.api.k8s.v1.DailyMaintenanceWindow.encode(m.dailyMaintenanceWindow, w.uint32(18).fork()).ldelim();
        if (m.weeklyMaintenanceWindow != null && m.hasOwnProperty('weeklyMaintenanceWindow')) $root.api.k8s.v1.WeeklyMaintenanceWindow.encode(m.weeklyMaintenanceWindow, w.uint32(26).fork()).ldelim();
        return w;
      };
      MaintenanceWindow.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MaintenanceWindow();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.anytime = $root.api.k8s.v1.AnytimeMaintenanceWindow.decode(r, r.uint32());
              break;
            case 2:
              m.dailyMaintenanceWindow = $root.api.k8s.v1.DailyMaintenanceWindow.decode(r, r.uint32());
              break;
            case 3:
              m.weeklyMaintenanceWindow = $root.api.k8s.v1.WeeklyMaintenanceWindow.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MaintenanceWindow;
    })();
  })(root);
  (function($root) {
    $root.AnytimeMaintenanceWindow = (function() {
      function AnytimeMaintenanceWindow(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AnytimeMaintenanceWindow.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      AnytimeMaintenanceWindow.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.AnytimeMaintenanceWindow();
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
      return AnytimeMaintenanceWindow;
    })();
  })(root);
  (function($root) {
    $root.DailyMaintenanceWindow = (function() {
      function DailyMaintenanceWindow(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DailyMaintenanceWindow.prototype.startTime = null;
      DailyMaintenanceWindow.prototype.duration = null;
      DailyMaintenanceWindow.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.startTime != null && m.hasOwnProperty('startTime')) $root.contrib.google.type.TimeOfDay.encode(m.startTime, w.uint32(10).fork()).ldelim();
        if (m.duration != null && m.hasOwnProperty('duration')) $root.contrib.google.protobuf.Duration.encode(m.duration, w.uint32(18).fork()).ldelim();
        return w;
      };
      DailyMaintenanceWindow.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DailyMaintenanceWindow();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.startTime = $root.contrib.google.type.TimeOfDay.decode(r, r.uint32());
              break;
            case 2:
              m.duration = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DailyMaintenanceWindow;
    })();
  })(root);
  (function($root) {
    $root.DaysOfWeekMaintenanceWindow = (function() {
      function DaysOfWeekMaintenanceWindow(p) {
        this.days = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DaysOfWeekMaintenanceWindow.prototype.days = $util.emptyArray;
      DaysOfWeekMaintenanceWindow.prototype.startTime = null;
      DaysOfWeekMaintenanceWindow.prototype.duration = null;
      DaysOfWeekMaintenanceWindow.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.days != null && m.days.length) {
          w.uint32(10).fork();
          for (let i = 0; i < m.days.length; ++i) w.int32(m.days[i]);
          w.ldelim();
        }
        if (m.startTime != null && m.hasOwnProperty('startTime')) $root.contrib.google.type.TimeOfDay.encode(m.startTime, w.uint32(18).fork()).ldelim();
        if (m.duration != null && m.hasOwnProperty('duration')) $root.contrib.google.protobuf.Duration.encode(m.duration, w.uint32(26).fork()).ldelim();
        return w;
      };
      DaysOfWeekMaintenanceWindow.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DaysOfWeekMaintenanceWindow();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.days && m.days.length)) m.days = [];
              if ((t & 7) === 2) {
                let c2 = r.uint32() + r.pos;
                while (r.pos < c2) m.days.push(r.int32());
              } else m.days.push(r.int32());
              break;
            case 2:
              m.startTime = $root.contrib.google.type.TimeOfDay.decode(r, r.uint32());
              break;
            case 3:
              m.duration = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DaysOfWeekMaintenanceWindow;
    })();
  })(root);
  (function($root) {
    $root.WeeklyMaintenanceWindow = (function() {
      function WeeklyMaintenanceWindow(p) {
        this.daysOfWeek = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      WeeklyMaintenanceWindow.prototype.daysOfWeek = $util.emptyArray;
      WeeklyMaintenanceWindow.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.daysOfWeek != null && m.daysOfWeek.length) {
          for (let i = 0; i < m.daysOfWeek.length; ++i) $root.api.k8s.v1.DaysOfWeekMaintenanceWindow.encode(m.daysOfWeek[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      WeeklyMaintenanceWindow.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.WeeklyMaintenanceWindow();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.daysOfWeek && m.daysOfWeek.length)) m.daysOfWeek = [];
              m.daysOfWeek.push($root.api.k8s.v1.DaysOfWeekMaintenanceWindow.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return WeeklyMaintenanceWindow;
    })();
  })(root);
  (function($root) {
    $root.Node = (function() {
      function Node(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Node.prototype.status = 0;
      Node.prototype.spec = null;
      Node.prototype.cloudStatus = null;
      Node.prototype.kubernetesStatus = null;
      Node.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(8).int32(m.status);
        if (m.spec != null && m.hasOwnProperty('spec')) $root.api.k8s.v1.Node.Spec.encode(m.spec, w.uint32(18).fork()).ldelim();
        if (m.cloudStatus != null && m.hasOwnProperty('cloudStatus')) $root.api.k8s.v1.Node.CloudStatus.encode(m.cloudStatus, w.uint32(26).fork()).ldelim();
        if (m.kubernetesStatus != null && m.hasOwnProperty('kubernetesStatus')) $root.api.k8s.v1.Node.KubernetesStatus.encode(m.kubernetesStatus, w.uint32(34).fork()).ldelim();
        return w;
      };
      Node.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.Node();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.status = r.int32();
              break;
            case 2:
              m.spec = $root.api.k8s.v1.Node.Spec.decode(r, r.uint32());
              break;
            case 3:
              m.cloudStatus = $root.api.k8s.v1.Node.CloudStatus.decode(r, r.uint32());
              break;
            case 4:
              m.kubernetesStatus = $root.api.k8s.v1.Node.KubernetesStatus.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Node.KubernetesStatus = (function() {
        function KubernetesStatus(p) {
          this.conditions = [];
          this.taints = [];
          this.attachedVolumes = [];
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        KubernetesStatus.prototype.id = '';
        KubernetesStatus.prototype.conditions = $util.emptyArray;
        KubernetesStatus.prototype.taints = $util.emptyArray;
        KubernetesStatus.prototype.attachedVolumes = $util.emptyArray;
        KubernetesStatus.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
          if (m.conditions != null && m.conditions.length) {
            for (let i = 0; i < m.conditions.length; ++i) $root.api.k8s.v1.Condition.encode(m.conditions[i], w.uint32(18).fork()).ldelim();
          }
          if (m.taints != null && m.taints.length) {
            for (let i = 0; i < m.taints.length; ++i) $root.api.k8s.v1.Taint.encode(m.taints[i], w.uint32(26).fork()).ldelim();
          }
          if (m.attachedVolumes != null && m.attachedVolumes.length) {
            for (let i = 0; i < m.attachedVolumes.length; ++i) $root.api.k8s.v1.AttachedVolume.encode(m.attachedVolumes[i], w.uint32(34).fork()).ldelim();
          }
          return w;
        };
        KubernetesStatus.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.k8s.v1.Node.KubernetesStatus();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.id = r.string();
                break;
              case 2:
                if (!(m.conditions && m.conditions.length)) m.conditions = [];
                m.conditions.push($root.api.k8s.v1.Condition.decode(r, r.uint32()));
                break;
              case 3:
                if (!(m.taints && m.taints.length)) m.taints = [];
                m.taints.push($root.api.k8s.v1.Taint.decode(r, r.uint32()));
                break;
              case 4:
                if (!(m.attachedVolumes && m.attachedVolumes.length)) m.attachedVolumes = [];
                m.attachedVolumes.push($root.api.k8s.v1.AttachedVolume.decode(r, r.uint32()));
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return KubernetesStatus;
      })();
      Node.CloudStatus = (function() {
        function CloudStatus(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        CloudStatus.prototype.id = '';
        CloudStatus.prototype.status = '';
        CloudStatus.prototype.statusMessage = '';
        CloudStatus.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
          if (m.status != null && m.hasOwnProperty('status')) w.uint32(18).string(m.status);
          if (m.statusMessage != null && m.hasOwnProperty('statusMessage')) w.uint32(26).string(m.statusMessage);
          return w;
        };
        CloudStatus.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.k8s.v1.Node.CloudStatus();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.id = r.string();
                break;
              case 2:
                m.status = r.string();
                break;
              case 3:
                m.statusMessage = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return CloudStatus;
      })();
      let Status = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'STATUS_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'PROVISIONING')] = 1;
        values[(valuesById[2] = 'NOT_CONNECTED')] = 2;
        values[(valuesById[3] = 'NOT_READY')] = 3;
        values[(valuesById[4] = 'READY')] = 4;
        values[(valuesById[5] = 'MISSING')] = 5;
        return values;
      })();
      Node.Status = Status;
      Node.Spec = (function() {
        function Spec(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Spec.prototype.resources = null;
        Spec.prototype.disk = null;
        Spec.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.resources != null && m.hasOwnProperty('resources')) $root.api.k8s.v1.ResourcesSpec.encode(m.resources, w.uint32(10).fork()).ldelim();
          if (m.disk != null && m.hasOwnProperty('disk')) $root.api.k8s.v1.DiskSpec.encode(m.disk, w.uint32(18).fork()).ldelim();
          return w;
        };
        Spec.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.k8s.v1.Node.Spec();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.resources = $root.api.k8s.v1.ResourcesSpec.decode(r, r.uint32());
                break;
              case 2:
                m.disk = $root.api.k8s.v1.DiskSpec.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Spec;
      })();
      return Node;
    })();
  })(root);
  (function($root) {
    $root.Condition = (function() {
      function Condition(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Condition.prototype.type = '';
      Condition.prototype.status = '';
      Condition.prototype.message = '';
      Condition.prototype.lastHeartbeatTime = null;
      Condition.prototype.lastTransitionTime = null;
      Condition.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.type != null && m.hasOwnProperty('type')) w.uint32(10).string(m.type);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(18).string(m.status);
        if (m.message != null && m.hasOwnProperty('message')) w.uint32(26).string(m.message);
        if (m.lastHeartbeatTime != null && m.hasOwnProperty('lastHeartbeatTime')) $root.contrib.google.protobuf.Timestamp.encode(m.lastHeartbeatTime, w.uint32(34).fork()).ldelim();
        if (m.lastTransitionTime != null && m.hasOwnProperty('lastTransitionTime')) $root.contrib.google.protobuf.Timestamp.encode(m.lastTransitionTime, w.uint32(42).fork()).ldelim();
        return w;
      };
      Condition.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.Condition();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.type = r.string();
              break;
            case 2:
              m.status = r.string();
              break;
            case 3:
              m.message = r.string();
              break;
            case 4:
              m.lastHeartbeatTime = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 5:
              m.lastTransitionTime = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Condition;
    })();
  })(root);
  (function($root) {
    $root.Taint = (function() {
      function Taint(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Taint.prototype.key = '';
      Taint.prototype.value = '';
      Taint.prototype.effect = 0;
      Taint.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.key != null && m.hasOwnProperty('key')) w.uint32(10).string(m.key);
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(18).string(m.value);
        if (m.effect != null && m.hasOwnProperty('effect')) w.uint32(24).int32(m.effect);
        return w;
      };
      Taint.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.Taint();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.key = r.string();
              break;
            case 2:
              m.value = r.string();
              break;
            case 3:
              m.effect = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Effect = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'EFFECT_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'NO_SCHEDULE')] = 1;
        values[(valuesById[2] = 'PREFER_NO_SCHEDULE')] = 2;
        values[(valuesById[3] = 'NO_EXECUTE')] = 3;
        return values;
      })();
      Taint.Effect = Effect;
      return Taint;
    })();
  })(root);
  (function($root) {
    $root.AttachedVolume = (function() {
      function AttachedVolume(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AttachedVolume.prototype.driverName = '';
      AttachedVolume.prototype.volumeHandle = '';
      AttachedVolume.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.driverName != null && m.hasOwnProperty('driverName')) w.uint32(10).string(m.driverName);
        if (m.volumeHandle != null && m.hasOwnProperty('volumeHandle')) w.uint32(18).string(m.volumeHandle);
        return w;
      };
      AttachedVolume.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.AttachedVolume();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.driverName = r.string();
              break;
            case 2:
              m.volumeHandle = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AttachedVolume;
    })();
  })(root);
  (function($root) {
    $root.NodeTemplate = (function() {
      function NodeTemplate(p) {
        this.metadata = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeTemplate.prototype.platformId = '';
      NodeTemplate.prototype.resourcesSpec = null;
      NodeTemplate.prototype.bootDiskSpec = null;
      NodeTemplate.prototype.metadata = $util.emptyObject;
      NodeTemplate.prototype.v4AddressSpec = null;
      NodeTemplate.prototype.schedulingPolicy = null;
      NodeTemplate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.platformId != null && m.hasOwnProperty('platformId')) w.uint32(10).string(m.platformId);
        if (m.resourcesSpec != null && m.hasOwnProperty('resourcesSpec')) $root.api.k8s.v1.ResourcesSpec.encode(m.resourcesSpec, w.uint32(18).fork()).ldelim();
        if (m.bootDiskSpec != null && m.hasOwnProperty('bootDiskSpec')) $root.api.k8s.v1.DiskSpec.encode(m.bootDiskSpec, w.uint32(26).fork()).ldelim();
        if (m.metadata != null && m.hasOwnProperty('metadata')) {
          for (let ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
            w.uint32(34)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.metadata[ks[i]])
              .ldelim();
          }
        }
        if (m.v4AddressSpec != null && m.hasOwnProperty('v4AddressSpec')) $root.api.k8s.v1.NodeAddressSpec.encode(m.v4AddressSpec, w.uint32(42).fork()).ldelim();
        if (m.schedulingPolicy != null && m.hasOwnProperty('schedulingPolicy')) $root.api.k8s.v1.SchedulingPolicy.encode(m.schedulingPolicy, w.uint32(50).fork()).ldelim();
        return w;
      };
      NodeTemplate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeTemplate(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.platformId = r.string();
              break;
            case 2:
              m.resourcesSpec = $root.api.k8s.v1.ResourcesSpec.decode(r, r.uint32());
              break;
            case 3:
              m.bootDiskSpec = $root.api.k8s.v1.DiskSpec.decode(r, r.uint32());
              break;
            case 4:
              r.skip().pos++;
              if (m.metadata === $util.emptyObject) m.metadata = {};
              k = r.string();
              r.pos++;
              m.metadata[k] = r.string();
              break;
            case 5:
              m.v4AddressSpec = $root.api.k8s.v1.NodeAddressSpec.decode(r, r.uint32());
              break;
            case 6:
              m.schedulingPolicy = $root.api.k8s.v1.SchedulingPolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeTemplate;
    })();
  })(root);
  (function($root) {
    $root.NodeAddressSpec = (function() {
      function NodeAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeAddressSpec.prototype.oneToOneNatSpec = null;
      NodeAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.oneToOneNatSpec != null && m.hasOwnProperty('oneToOneNatSpec')) $root.api.k8s.v1.OneToOneNatSpec.encode(m.oneToOneNatSpec, w.uint32(10).fork()).ldelim();
        return w;
      };
      NodeAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeAddressSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.oneToOneNatSpec = $root.api.k8s.v1.OneToOneNatSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeAddressSpec;
    })();
  })(root);
  (function($root) {
    $root.OneToOneNatSpec = (function() {
      function OneToOneNatSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      OneToOneNatSpec.prototype.ipVersion = 0;
      OneToOneNatSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.ipVersion != null && m.hasOwnProperty('ipVersion')) w.uint32(8).int32(m.ipVersion);
        return w;
      };
      OneToOneNatSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.OneToOneNatSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.ipVersion = r.int32();
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
    $root.ResourcesSpec = (function() {
      function ResourcesSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ResourcesSpec.prototype.memory = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.prototype.cores = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.prototype.coreFraction = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.memory != null && m.hasOwnProperty('memory')) w.uint32(8).int64(m.memory);
        if (m.cores != null && m.hasOwnProperty('cores')) w.uint32(16).int64(m.cores);
        if (m.coreFraction != null && m.hasOwnProperty('coreFraction')) w.uint32(24).int64(m.coreFraction);
        return w;
      };
      ResourcesSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ResourcesSpec();
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
    $root.DiskSpec = (function() {
      function DiskSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DiskSpec.prototype.diskTypeId = '';
      DiskSpec.prototype.diskSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      DiskSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskTypeId != null && m.hasOwnProperty('diskTypeId')) w.uint32(10).string(m.diskTypeId);
        if (m.diskSize != null && m.hasOwnProperty('diskSize')) w.uint32(16).int64(m.diskSize);
        return w;
      };
      DiskSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DiskSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskTypeId = r.string();
              break;
            case 2:
              m.diskSize = r.int64();
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
          m = new $root.api.k8s.v1.SchedulingPolicy();
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
    $root.NodeGroup = (function() {
      function NodeGroup(p) {
        this.labels = {};
        this.allowedUnsafeSysctls = [];
        this.nodeTaints = [];
        this.nodeLabels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeGroup.prototype.id = '';
      NodeGroup.prototype.clusterId = '';
      NodeGroup.prototype.createdAt = null;
      NodeGroup.prototype.name = '';
      NodeGroup.prototype.description = '';
      NodeGroup.prototype.labels = $util.emptyObject;
      NodeGroup.prototype.status = 0;
      NodeGroup.prototype.nodeTemplate = null;
      NodeGroup.prototype.scalePolicy = null;
      NodeGroup.prototype.allocationPolicy = null;
      NodeGroup.prototype.instanceGroupId = '';
      NodeGroup.prototype.nodeVersion = '';
      NodeGroup.prototype.versionInfo = null;
      NodeGroup.prototype.maintenancePolicy = null;
      NodeGroup.prototype.allowedUnsafeSysctls = $util.emptyArray;
      NodeGroup.prototype.nodeTaints = $util.emptyArray;
      NodeGroup.prototype.nodeLabels = $util.emptyObject;
      NodeGroup.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(18).string(m.clusterId);
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
        if (m.nodeTemplate != null && m.hasOwnProperty('nodeTemplate')) $root.api.k8s.v1.NodeTemplate.encode(m.nodeTemplate, w.uint32(66).fork()).ldelim();
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.k8s.v1.ScalePolicy.encode(m.scalePolicy, w.uint32(74).fork()).ldelim();
        if (m.allocationPolicy != null && m.hasOwnProperty('allocationPolicy')) $root.api.k8s.v1.NodeGroupAllocationPolicy.encode(m.allocationPolicy, w.uint32(82).fork()).ldelim();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(90).string(m.instanceGroupId);
        if (m.nodeVersion != null && m.hasOwnProperty('nodeVersion')) w.uint32(98).string(m.nodeVersion);
        if (m.versionInfo != null && m.hasOwnProperty('versionInfo')) $root.api.k8s.v1.VersionInfo.encode(m.versionInfo, w.uint32(106).fork()).ldelim();
        if (m.maintenancePolicy != null && m.hasOwnProperty('maintenancePolicy')) $root.api.k8s.v1.NodeGroupMaintenancePolicy.encode(m.maintenancePolicy, w.uint32(114).fork()).ldelim();
        if (m.allowedUnsafeSysctls != null && m.allowedUnsafeSysctls.length) {
          for (let i = 0; i < m.allowedUnsafeSysctls.length; ++i) w.uint32(122).string(m.allowedUnsafeSysctls[i]);
        }
        if (m.nodeTaints != null && m.nodeTaints.length) {
          for (let i = 0; i < m.nodeTaints.length; ++i) $root.api.k8s.v1.Taint.encode(m.nodeTaints[i], w.uint32(130).fork()).ldelim();
        }
        if (m.nodeLabels != null && m.hasOwnProperty('nodeLabels')) {
          for (let ks = Object.keys(m.nodeLabels), i = 0; i < ks.length; ++i) {
            w.uint32(138)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.nodeLabels[ks[i]])
              .ldelim();
          }
        }
        return w;
      };
      NodeGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeGroup(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.clusterId = r.string();
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
              m.nodeTemplate = $root.api.k8s.v1.NodeTemplate.decode(r, r.uint32());
              break;
            case 9:
              m.scalePolicy = $root.api.k8s.v1.ScalePolicy.decode(r, r.uint32());
              break;
            case 10:
              m.allocationPolicy = $root.api.k8s.v1.NodeGroupAllocationPolicy.decode(r, r.uint32());
              break;
            case 11:
              m.instanceGroupId = r.string();
              break;
            case 12:
              m.nodeVersion = r.string();
              break;
            case 13:
              m.versionInfo = $root.api.k8s.v1.VersionInfo.decode(r, r.uint32());
              break;
            case 14:
              m.maintenancePolicy = $root.api.k8s.v1.NodeGroupMaintenancePolicy.decode(r, r.uint32());
              break;
            case 15:
              if (!(m.allowedUnsafeSysctls && m.allowedUnsafeSysctls.length)) m.allowedUnsafeSysctls = [];
              m.allowedUnsafeSysctls.push(r.string());
              break;
            case 16:
              if (!(m.nodeTaints && m.nodeTaints.length)) m.nodeTaints = [];
              m.nodeTaints.push($root.api.k8s.v1.Taint.decode(r, r.uint32()));
              break;
            case 17:
              r.skip().pos++;
              if (m.nodeLabels === $util.emptyObject) m.nodeLabels = {};
              k = r.string();
              r.pos++;
              m.nodeLabels[k] = r.string();
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
        values[(valuesById[3] = 'RECONCILING')] = 3;
        values[(valuesById[4] = 'STOPPING')] = 4;
        values[(valuesById[5] = 'STOPPED')] = 5;
        values[(valuesById[6] = 'DELETING')] = 6;
        values[(valuesById[7] = 'STARTING')] = 7;
        return values;
      })();
      NodeGroup.Status = Status;
      return NodeGroup;
    })();
  })(root);
  (function($root) {
    $root.ScalePolicy = (function() {
      function ScalePolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ScalePolicy.prototype.fixedScale = null;
      ScalePolicy.prototype.autoScale = null;
      let $oneOfFields;
      Object.defineProperty(ScalePolicy.prototype, 'scaleType', {
        get: $util.oneOfGetter(($oneOfFields = ['fixedScale', 'autoScale'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      ScalePolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.fixedScale != null && m.hasOwnProperty('fixedScale')) $root.api.k8s.v1.ScalePolicy.FixedScale.encode(m.fixedScale, w.uint32(10).fork()).ldelim();
        if (m.autoScale != null && m.hasOwnProperty('autoScale')) $root.api.k8s.v1.ScalePolicy.AutoScale.encode(m.autoScale, w.uint32(18).fork()).ldelim();
        return w;
      };
      ScalePolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ScalePolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.fixedScale = $root.api.k8s.v1.ScalePolicy.FixedScale.decode(r, r.uint32());
              break;
            case 2:
              m.autoScale = $root.api.k8s.v1.ScalePolicy.AutoScale.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      ScalePolicy.FixedScale = (function() {
        function FixedScale(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        FixedScale.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        FixedScale.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.size != null && m.hasOwnProperty('size')) w.uint32(8).int64(m.size);
          return w;
        };
        FixedScale.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.k8s.v1.ScalePolicy.FixedScale();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.size = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return FixedScale;
      })();
      ScalePolicy.AutoScale = (function() {
        function AutoScale(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        AutoScale.prototype.minSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AutoScale.prototype.maxSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AutoScale.prototype.initialSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AutoScale.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.minSize != null && m.hasOwnProperty('minSize')) w.uint32(8).int64(m.minSize);
          if (m.maxSize != null && m.hasOwnProperty('maxSize')) w.uint32(16).int64(m.maxSize);
          if (m.initialSize != null && m.hasOwnProperty('initialSize')) w.uint32(24).int64(m.initialSize);
          return w;
        };
        AutoScale.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.k8s.v1.ScalePolicy.AutoScale();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.minSize = r.int64();
                break;
              case 2:
                m.maxSize = r.int64();
                break;
              case 3:
                m.initialSize = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return AutoScale;
      })();
      return ScalePolicy;
    })();
  })(root);
  (function($root) {
    $root.NodeGroupAllocationPolicy = (function() {
      function NodeGroupAllocationPolicy(p) {
        this.locations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeGroupAllocationPolicy.prototype.locations = $util.emptyArray;
      NodeGroupAllocationPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.locations != null && m.locations.length) {
          for (let i = 0; i < m.locations.length; ++i) $root.api.k8s.v1.NodeGroupLocation.encode(m.locations[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      NodeGroupAllocationPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeGroupAllocationPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.locations && m.locations.length)) m.locations = [];
              m.locations.push($root.api.k8s.v1.NodeGroupLocation.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeGroupAllocationPolicy;
    })();
  })(root);
  (function($root) {
    $root.NodeGroupLocation = (function() {
      function NodeGroupLocation(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeGroupLocation.prototype.zoneId = '';
      NodeGroupLocation.prototype.subnetId = '';
      NodeGroupLocation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(18).string(m.subnetId);
        return w;
      };
      NodeGroupLocation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeGroupLocation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zoneId = r.string();
              break;
            case 2:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeGroupLocation;
    })();
  })(root);
  (function($root) {
    $root.NodeGroupMaintenancePolicy = (function() {
      function NodeGroupMaintenancePolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeGroupMaintenancePolicy.prototype.autoUpgrade = false;
      NodeGroupMaintenancePolicy.prototype.autoRepair = false;
      NodeGroupMaintenancePolicy.prototype.maintenanceWindow = null;
      NodeGroupMaintenancePolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.autoUpgrade != null && m.hasOwnProperty('autoUpgrade')) w.uint32(8).bool(m.autoUpgrade);
        if (m.autoRepair != null && m.hasOwnProperty('autoRepair')) w.uint32(16).bool(m.autoRepair);
        if (m.maintenanceWindow != null && m.hasOwnProperty('maintenanceWindow')) $root.api.k8s.v1.MaintenanceWindow.encode(m.maintenanceWindow, w.uint32(26).fork()).ldelim();
        return w;
      };
      NodeGroupMaintenancePolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeGroupMaintenancePolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.autoUpgrade = r.bool();
              break;
            case 2:
              m.autoRepair = r.bool();
              break;
            case 3:
              m.maintenanceWindow = $root.api.k8s.v1.MaintenanceWindow.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeGroupMaintenancePolicy;
    })();
  })(root);
  (function($root) {
    $root.NodeGroupService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.NodeGroupService.makeGrpcConstructor());
    };
    $root.NodeGroupService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.GetNodeGroupRequest,
          responseType: $root.api.k8s.v1.NodeGroup,
          requestSerialize: r => {
            return $root.api.k8s.v1.GetNodeGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.GetNodeGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.NodeGroup.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.NodeGroup.decode
        },
        list: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListNodeGroupsRequest,
          responseType: $root.api.k8s.v1.ListNodeGroupsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListNodeGroupsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListNodeGroupsResponse.decode
        },
        create: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.CreateNodeGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.CreateNodeGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.CreateNodeGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.UpdateNodeGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.UpdateNodeGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.UpdateNodeGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.DeleteNodeGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.DeleteNodeGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.DeleteNodeGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListNodeGroupOperationsRequest,
          responseType: $root.api.k8s.v1.ListNodeGroupOperationsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListNodeGroupOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListNodeGroupOperationsResponse.decode
        },
        listNodes: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/ListNodes',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListNodeGroupNodesRequest,
          responseType: $root.api.k8s.v1.ListNodeGroupNodesResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupNodesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListNodeGroupNodesRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupNodesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListNodeGroupNodesResponse.decode
        }
      });
      ctor.__endpointId = 'managed-kubernetes';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetNodeGroupRequest = (function() {
      function GetNodeGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetNodeGroupRequest.prototype.nodeGroupId = '';
      GetNodeGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      GetNodeGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.GetNodeGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetNodeGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupsRequest = (function() {
      function ListNodeGroupsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupsRequest.prototype.folderId = '';
      ListNodeGroupsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNodeGroupsRequest.prototype.pageToken = '';
      ListNodeGroupsRequest.prototype.filter = '';
      ListNodeGroupsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListNodeGroupsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupsRequest();
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
      return ListNodeGroupsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupsResponse = (function() {
      function ListNodeGroupsResponse(p) {
        this.nodeGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupsResponse.prototype.nodeGroups = $util.emptyArray;
      ListNodeGroupsResponse.prototype.nextPageToken = '';
      ListNodeGroupsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroups != null && m.nodeGroups.length) {
          for (let i = 0; i < m.nodeGroups.length; ++i) $root.api.k8s.v1.NodeGroup.encode(m.nodeGroups[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNodeGroupsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.nodeGroups && m.nodeGroups.length)) m.nodeGroups = [];
              m.nodeGroups.push($root.api.k8s.v1.NodeGroup.decode(r, r.uint32()));
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
      return ListNodeGroupsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupNodesRequest = (function() {
      function ListNodeGroupNodesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupNodesRequest.prototype.nodeGroupId = '';
      ListNodeGroupNodesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNodeGroupNodesRequest.prototype.pageToken = '';
      ListNodeGroupNodesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListNodeGroupNodesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupNodesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
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
      return ListNodeGroupNodesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupNodesResponse = (function() {
      function ListNodeGroupNodesResponse(p) {
        this.nodes = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupNodesResponse.prototype.nodes = $util.emptyArray;
      ListNodeGroupNodesResponse.prototype.nextPageToken = '';
      ListNodeGroupNodesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodes != null && m.nodes.length) {
          for (let i = 0; i < m.nodes.length; ++i) $root.api.k8s.v1.Node.encode(m.nodes[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNodeGroupNodesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupNodesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.nodes && m.nodes.length)) m.nodes = [];
              m.nodes.push($root.api.k8s.v1.Node.decode(r, r.uint32()));
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
      return ListNodeGroupNodesResponse;
    })();
  })(root);
  (function($root) {
    $root.DeleteNodeGroupRequest = (function() {
      function DeleteNodeGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteNodeGroupRequest.prototype.nodeGroupId = '';
      DeleteNodeGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      DeleteNodeGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DeleteNodeGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteNodeGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteNodeGroupMetadata = (function() {
      function DeleteNodeGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteNodeGroupMetadata.prototype.nodeGroupId = '';
      DeleteNodeGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      DeleteNodeGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DeleteNodeGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteNodeGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateNodeGroupRequest = (function() {
      function UpdateNodeGroupRequest(p) {
        this.labels = {};
        this.allowedUnsafeSysctls = [];
        this.nodeTaints = [];
        this.nodeLabels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNodeGroupRequest.prototype.nodeGroupId = '';
      UpdateNodeGroupRequest.prototype.updateMask = null;
      UpdateNodeGroupRequest.prototype.name = '';
      UpdateNodeGroupRequest.prototype.description = '';
      UpdateNodeGroupRequest.prototype.labels = $util.emptyObject;
      UpdateNodeGroupRequest.prototype.nodeTemplate = null;
      UpdateNodeGroupRequest.prototype.scalePolicy = null;
      UpdateNodeGroupRequest.prototype.allocationPolicy = null;
      UpdateNodeGroupRequest.prototype.version = null;
      UpdateNodeGroupRequest.prototype.maintenancePolicy = null;
      UpdateNodeGroupRequest.prototype.allowedUnsafeSysctls = $util.emptyArray;
      UpdateNodeGroupRequest.prototype.nodeTaints = $util.emptyArray;
      UpdateNodeGroupRequest.prototype.nodeLabels = $util.emptyObject;
      UpdateNodeGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
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
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.k8s.v1.ScalePolicy.encode(m.scalePolicy, w.uint32(50).fork()).ldelim();
        if (m.nodeTemplate != null && m.hasOwnProperty('nodeTemplate')) $root.api.k8s.v1.NodeTemplate.encode(m.nodeTemplate, w.uint32(66).fork()).ldelim();
        if (m.allocationPolicy != null && m.hasOwnProperty('allocationPolicy')) $root.api.k8s.v1.NodeGroupAllocationPolicy.encode(m.allocationPolicy, w.uint32(74).fork()).ldelim();
        if (m.version != null && m.hasOwnProperty('version')) $root.api.k8s.v1.UpdateVersionSpec.encode(m.version, w.uint32(82).fork()).ldelim();
        if (m.maintenancePolicy != null && m.hasOwnProperty('maintenancePolicy')) $root.api.k8s.v1.NodeGroupMaintenancePolicy.encode(m.maintenancePolicy, w.uint32(90).fork()).ldelim();
        if (m.allowedUnsafeSysctls != null && m.allowedUnsafeSysctls.length) {
          for (let i = 0; i < m.allowedUnsafeSysctls.length; ++i) w.uint32(98).string(m.allowedUnsafeSysctls[i]);
        }
        if (m.nodeTaints != null && m.nodeTaints.length) {
          for (let i = 0; i < m.nodeTaints.length; ++i) $root.api.k8s.v1.Taint.encode(m.nodeTaints[i], w.uint32(106).fork()).ldelim();
        }
        if (m.nodeLabels != null && m.hasOwnProperty('nodeLabels')) {
          for (let ks = Object.keys(m.nodeLabels), i = 0; i < ks.length; ++i) {
            w.uint32(114)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.nodeLabels[ks[i]])
              .ldelim();
          }
        }
        return w;
      };
      UpdateNodeGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateNodeGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
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
            case 8:
              m.nodeTemplate = $root.api.k8s.v1.NodeTemplate.decode(r, r.uint32());
              break;
            case 6:
              m.scalePolicy = $root.api.k8s.v1.ScalePolicy.decode(r, r.uint32());
              break;
            case 9:
              m.allocationPolicy = $root.api.k8s.v1.NodeGroupAllocationPolicy.decode(r, r.uint32());
              break;
            case 10:
              m.version = $root.api.k8s.v1.UpdateVersionSpec.decode(r, r.uint32());
              break;
            case 11:
              m.maintenancePolicy = $root.api.k8s.v1.NodeGroupMaintenancePolicy.decode(r, r.uint32());
              break;
            case 12:
              if (!(m.allowedUnsafeSysctls && m.allowedUnsafeSysctls.length)) m.allowedUnsafeSysctls = [];
              m.allowedUnsafeSysctls.push(r.string());
              break;
            case 13:
              if (!(m.nodeTaints && m.nodeTaints.length)) m.nodeTaints = [];
              m.nodeTaints.push($root.api.k8s.v1.Taint.decode(r, r.uint32()));
              break;
            case 14:
              r.skip().pos++;
              if (m.nodeLabels === $util.emptyObject) m.nodeLabels = {};
              k = r.string();
              r.pos++;
              m.nodeLabels[k] = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNodeGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateNodeGroupMetadata = (function() {
      function UpdateNodeGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNodeGroupMetadata.prototype.nodeGroupId = '';
      UpdateNodeGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      UpdateNodeGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateNodeGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNodeGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.CreateNodeGroupRequest = (function() {
      function CreateNodeGroupRequest(p) {
        this.labels = {};
        this.allowedUnsafeSysctls = [];
        this.nodeTaints = [];
        this.nodeLabels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateNodeGroupRequest.prototype.clusterId = '';
      CreateNodeGroupRequest.prototype.name = '';
      CreateNodeGroupRequest.prototype.description = '';
      CreateNodeGroupRequest.prototype.labels = $util.emptyObject;
      CreateNodeGroupRequest.prototype.nodeTemplate = null;
      CreateNodeGroupRequest.prototype.scalePolicy = null;
      CreateNodeGroupRequest.prototype.allocationPolicy = null;
      CreateNodeGroupRequest.prototype.version = '';
      CreateNodeGroupRequest.prototype.maintenancePolicy = null;
      CreateNodeGroupRequest.prototype.allowedUnsafeSysctls = $util.emptyArray;
      CreateNodeGroupRequest.prototype.nodeTaints = $util.emptyArray;
      CreateNodeGroupRequest.prototype.nodeLabels = $util.emptyObject;
      CreateNodeGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
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
        if (m.nodeTemplate != null && m.hasOwnProperty('nodeTemplate')) $root.api.k8s.v1.NodeTemplate.encode(m.nodeTemplate, w.uint32(42).fork()).ldelim();
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.k8s.v1.ScalePolicy.encode(m.scalePolicy, w.uint32(50).fork()).ldelim();
        if (m.allocationPolicy != null && m.hasOwnProperty('allocationPolicy')) $root.api.k8s.v1.NodeGroupAllocationPolicy.encode(m.allocationPolicy, w.uint32(58).fork()).ldelim();
        if (m.version != null && m.hasOwnProperty('version')) w.uint32(66).string(m.version);
        if (m.maintenancePolicy != null && m.hasOwnProperty('maintenancePolicy')) $root.api.k8s.v1.NodeGroupMaintenancePolicy.encode(m.maintenancePolicy, w.uint32(74).fork()).ldelim();
        if (m.allowedUnsafeSysctls != null && m.allowedUnsafeSysctls.length) {
          for (let i = 0; i < m.allowedUnsafeSysctls.length; ++i) w.uint32(82).string(m.allowedUnsafeSysctls[i]);
        }
        if (m.nodeTaints != null && m.nodeTaints.length) {
          for (let i = 0; i < m.nodeTaints.length; ++i) $root.api.k8s.v1.Taint.encode(m.nodeTaints[i], w.uint32(90).fork()).ldelim();
        }
        if (m.nodeLabels != null && m.hasOwnProperty('nodeLabels')) {
          for (let ks = Object.keys(m.nodeLabels), i = 0; i < ks.length; ++i) {
            w.uint32(98)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.nodeLabels[ks[i]])
              .ldelim();
          }
        }
        return w;
      };
      CreateNodeGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.CreateNodeGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
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
              m.nodeTemplate = $root.api.k8s.v1.NodeTemplate.decode(r, r.uint32());
              break;
            case 6:
              m.scalePolicy = $root.api.k8s.v1.ScalePolicy.decode(r, r.uint32());
              break;
            case 7:
              m.allocationPolicy = $root.api.k8s.v1.NodeGroupAllocationPolicy.decode(r, r.uint32());
              break;
            case 8:
              m.version = r.string();
              break;
            case 9:
              m.maintenancePolicy = $root.api.k8s.v1.NodeGroupMaintenancePolicy.decode(r, r.uint32());
              break;
            case 10:
              if (!(m.allowedUnsafeSysctls && m.allowedUnsafeSysctls.length)) m.allowedUnsafeSysctls = [];
              m.allowedUnsafeSysctls.push(r.string());
              break;
            case 11:
              if (!(m.nodeTaints && m.nodeTaints.length)) m.nodeTaints = [];
              m.nodeTaints.push($root.api.k8s.v1.Taint.decode(r, r.uint32()));
              break;
            case 12:
              r.skip().pos++;
              if (m.nodeLabels === $util.emptyObject) m.nodeLabels = {};
              k = r.string();
              r.pos++;
              m.nodeLabels[k] = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateNodeGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateNodeGroupMetadata = (function() {
      function CreateNodeGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateNodeGroupMetadata.prototype.nodeGroupId = '';
      CreateNodeGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      CreateNodeGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.CreateNodeGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateNodeGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.AutoUpgradeNodeGroupMetadata = (function() {
      function AutoUpgradeNodeGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AutoUpgradeNodeGroupMetadata.prototype.nodeGroupId = '';
      AutoUpgradeNodeGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      AutoUpgradeNodeGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.AutoUpgradeNodeGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AutoUpgradeNodeGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupOperationsRequest = (function() {
      function ListNodeGroupOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupOperationsRequest.prototype.nodeGroupId = '';
      ListNodeGroupOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNodeGroupOperationsRequest.prototype.pageToken = '';
      ListNodeGroupOperationsRequest.prototype.filter = '';
      ListNodeGroupOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListNodeGroupOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
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
      return ListNodeGroupOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupOperationsResponse = (function() {
      function ListNodeGroupOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupOperationsResponse.prototype.operations = $util.emptyArray;
      ListNodeGroupOperationsResponse.prototype.nextPageToken = '';
      ListNodeGroupOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNodeGroupOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupOperationsResponse();
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
      return ListNodeGroupOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.VersionInfo = (function() {
      function VersionInfo(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      VersionInfo.prototype.currentVersion = '';
      VersionInfo.prototype.newRevisionAvailable = false;
      VersionInfo.prototype.newRevisionSummary = '';
      VersionInfo.prototype.versionDeprecated = false;
      VersionInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.currentVersion != null && m.hasOwnProperty('currentVersion')) w.uint32(10).string(m.currentVersion);
        if (m.newRevisionAvailable != null && m.hasOwnProperty('newRevisionAvailable')) w.uint32(16).bool(m.newRevisionAvailable);
        if (m.newRevisionSummary != null && m.hasOwnProperty('newRevisionSummary')) w.uint32(26).string(m.newRevisionSummary);
        if (m.versionDeprecated != null && m.hasOwnProperty('versionDeprecated')) w.uint32(32).bool(m.versionDeprecated);
        return w;
      };
      VersionInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.VersionInfo();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.currentVersion = r.string();
              break;
            case 2:
              m.newRevisionAvailable = r.bool();
              break;
            case 3:
              m.newRevisionSummary = r.string();
              break;
            case 4:
              m.versionDeprecated = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return VersionInfo;
    })();
  })(root);
  (function($root) {
    $root.UpdateVersionSpec = (function() {
      function UpdateVersionSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateVersionSpec.prototype.version = '';
      UpdateVersionSpec.prototype.latestRevision = false;
      let $oneOfFields;
      Object.defineProperty(UpdateVersionSpec.prototype, 'specifier', {
        get: $util.oneOfGetter(($oneOfFields = ['version', 'latestRevision'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      UpdateVersionSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.version != null && m.hasOwnProperty('version')) w.uint32(10).string(m.version);
        if (m.latestRevision != null && m.hasOwnProperty('latestRevision')) w.uint32(16).bool(m.latestRevision);
        return w;
      };
      UpdateVersionSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateVersionSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.version = r.string();
              break;
            case 2:
              m.latestRevision = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateVersionSpec;
    })();
  })(root);
  (function($root) {
    $root.VersionService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.VersionService.makeGrpcConstructor());
    };
    $root.VersionService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        list: {
          path: '/yandex.cloud.k8s.v1.VersionService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListVersionsRequest,
          responseType: $root.api.k8s.v1.ListVersionsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListVersionsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListVersionsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListVersionsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListVersionsResponse.decode
        }
      });
      ctor.__endpointId = 'managed-kubernetes';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.ListVersionsRequest = (function() {
      function ListVersionsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListVersionsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      ListVersionsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListVersionsRequest();
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
      return ListVersionsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListVersionsResponse = (function() {
      function ListVersionsResponse(p) {
        this.availableVersions = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListVersionsResponse.prototype.availableVersions = $util.emptyArray;
      ListVersionsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.availableVersions != null && m.availableVersions.length) {
          for (let i = 0; i < m.availableVersions.length; ++i) $root.api.k8s.v1.AvailableVersions.encode(m.availableVersions[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      ListVersionsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListVersionsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.availableVersions && m.availableVersions.length)) m.availableVersions = [];
              m.availableVersions.push($root.api.k8s.v1.AvailableVersions.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListVersionsResponse;
    })();
  })(root);
  (function($root) {
    $root.AvailableVersions = (function() {
      function AvailableVersions(p) {
        this.versions = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AvailableVersions.prototype.releaseChannel = 0;
      AvailableVersions.prototype.versions = $util.emptyArray;
      AvailableVersions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.releaseChannel != null && m.hasOwnProperty('releaseChannel')) w.uint32(8).int32(m.releaseChannel);
        if (m.versions != null && m.versions.length) {
          for (let i = 0; i < m.versions.length; ++i) w.uint32(18).string(m.versions[i]);
        }
        return w;
      };
      AvailableVersions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.AvailableVersions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.releaseChannel = r.int32();
              break;
            case 2:
              if (!(m.versions && m.versions.length)) m.versions = [];
              m.versions.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AvailableVersions;
    })();
  })(root);
  registar.register('api.k8s.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
