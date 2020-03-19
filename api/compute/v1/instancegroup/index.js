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
    $root.InstanceGroup = (function() {
      function InstanceGroup(p) {
        this.labels = {};
        this.variables = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      InstanceGroup.prototype.id = '';
      InstanceGroup.prototype.folderId = '';
      InstanceGroup.prototype.createdAt = null;
      InstanceGroup.prototype.name = '';
      InstanceGroup.prototype.description = '';
      InstanceGroup.prototype.labels = $util.emptyObject;
      InstanceGroup.prototype.instanceTemplate = null;
      InstanceGroup.prototype.scalePolicy = null;
      InstanceGroup.prototype.deployPolicy = null;
      InstanceGroup.prototype.allocationPolicy = null;
      InstanceGroup.prototype.loadBalancerState = null;
      InstanceGroup.prototype.managedInstancesState = null;
      InstanceGroup.prototype.loadBalancerSpec = null;
      InstanceGroup.prototype.healthChecksSpec = null;
      InstanceGroup.prototype.serviceAccountId = '';
      InstanceGroup.prototype.status = 0;
      InstanceGroup.prototype.variables = $util.emptyArray;
      InstanceGroup.encode = function encode(m, w) {
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
        if (m.instanceTemplate != null && m.hasOwnProperty('instanceTemplate')) $root.api.compute.v1.instancegroup.InstanceTemplate.encode(m.instanceTemplate, w.uint32(58).fork()).ldelim();
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.compute.v1.instancegroup.ScalePolicy.encode(m.scalePolicy, w.uint32(66).fork()).ldelim();
        if (m.deployPolicy != null && m.hasOwnProperty('deployPolicy')) $root.api.compute.v1.instancegroup.DeployPolicy.encode(m.deployPolicy, w.uint32(74).fork()).ldelim();
        if (m.allocationPolicy != null && m.hasOwnProperty('allocationPolicy')) $root.api.compute.v1.instancegroup.AllocationPolicy.encode(m.allocationPolicy, w.uint32(82).fork()).ldelim();
        if (m.loadBalancerState != null && m.hasOwnProperty('loadBalancerState')) $root.api.compute.v1.instancegroup.LoadBalancerState.encode(m.loadBalancerState, w.uint32(90).fork()).ldelim();
        if (m.managedInstancesState != null && m.hasOwnProperty('managedInstancesState')) $root.api.compute.v1.instancegroup.ManagedInstancesState.encode(m.managedInstancesState, w.uint32(98).fork()).ldelim();
        if (m.loadBalancerSpec != null && m.hasOwnProperty('loadBalancerSpec')) $root.api.compute.v1.instancegroup.LoadBalancerSpec.encode(m.loadBalancerSpec, w.uint32(114).fork()).ldelim();
        if (m.healthChecksSpec != null && m.hasOwnProperty('healthChecksSpec')) $root.api.compute.v1.instancegroup.HealthChecksSpec.encode(m.healthChecksSpec, w.uint32(122).fork()).ldelim();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(130).string(m.serviceAccountId);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(136).int32(m.status);
        if (m.variables != null && m.variables.length) {
          for (let i = 0; i < m.variables.length; ++i) $root.api.compute.v1.instancegroup.Variable.encode(m.variables[i], w.uint32(146).fork()).ldelim();
        }
        return w;
      };
      InstanceGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.InstanceGroup(),
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
              m.instanceTemplate = $root.api.compute.v1.instancegroup.InstanceTemplate.decode(r, r.uint32());
              break;
            case 8:
              m.scalePolicy = $root.api.compute.v1.instancegroup.ScalePolicy.decode(r, r.uint32());
              break;
            case 9:
              m.deployPolicy = $root.api.compute.v1.instancegroup.DeployPolicy.decode(r, r.uint32());
              break;
            case 10:
              m.allocationPolicy = $root.api.compute.v1.instancegroup.AllocationPolicy.decode(r, r.uint32());
              break;
            case 11:
              m.loadBalancerState = $root.api.compute.v1.instancegroup.LoadBalancerState.decode(r, r.uint32());
              break;
            case 12:
              m.managedInstancesState = $root.api.compute.v1.instancegroup.ManagedInstancesState.decode(r, r.uint32());
              break;
            case 14:
              m.loadBalancerSpec = $root.api.compute.v1.instancegroup.LoadBalancerSpec.decode(r, r.uint32());
              break;
            case 15:
              m.healthChecksSpec = $root.api.compute.v1.instancegroup.HealthChecksSpec.decode(r, r.uint32());
              break;
            case 16:
              m.serviceAccountId = r.string();
              break;
            case 17:
              m.status = r.int32();
              break;
            case 18:
              if (!(m.variables && m.variables.length)) m.variables = [];
              m.variables.push($root.api.compute.v1.instancegroup.Variable.decode(r, r.uint32()));
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
        values[(valuesById[1] = 'STARTING')] = 1;
        values[(valuesById[2] = 'ACTIVE')] = 2;
        values[(valuesById[3] = 'STOPPING')] = 3;
        values[(valuesById[4] = 'STOPPED')] = 4;
        values[(valuesById[5] = 'DELETING')] = 5;
        return values;
      })();
      InstanceGroup.Status = Status;
      return InstanceGroup;
    })();
  })(root);
  (function($root) {
    $root.Variable = (function() {
      function Variable(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Variable.prototype.key = '';
      Variable.prototype.value = '';
      Variable.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.key != null && m.hasOwnProperty('key')) w.uint32(10).string(m.key);
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(18).string(m.value);
        return w;
      };
      Variable.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.Variable();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.key = r.string();
              break;
            case 2:
              m.value = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Variable;
    })();
  })(root);
  (function($root) {
    $root.LoadBalancerState = (function() {
      function LoadBalancerState(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      LoadBalancerState.prototype.targetGroupId = '';
      LoadBalancerState.prototype.statusMessage = '';
      LoadBalancerState.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupId != null && m.hasOwnProperty('targetGroupId')) w.uint32(10).string(m.targetGroupId);
        if (m.statusMessage != null && m.hasOwnProperty('statusMessage')) w.uint32(18).string(m.statusMessage);
        return w;
      };
      LoadBalancerState.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.LoadBalancerState();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupId = r.string();
              break;
            case 2:
              m.statusMessage = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return LoadBalancerState;
    })();
  })(root);
  (function($root) {
    $root.ManagedInstancesState = (function() {
      function ManagedInstancesState(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ManagedInstancesState.prototype.targetSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ManagedInstancesState.prototype.runningActualCount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ManagedInstancesState.prototype.runningOutdatedCount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ManagedInstancesState.prototype.processingCount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ManagedInstancesState.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetSize != null && m.hasOwnProperty('targetSize')) w.uint32(8).int64(m.targetSize);
        if (m.runningActualCount != null && m.hasOwnProperty('runningActualCount')) w.uint32(32).int64(m.runningActualCount);
        if (m.runningOutdatedCount != null && m.hasOwnProperty('runningOutdatedCount')) w.uint32(40).int64(m.runningOutdatedCount);
        if (m.processingCount != null && m.hasOwnProperty('processingCount')) w.uint32(48).int64(m.processingCount);
        return w;
      };
      ManagedInstancesState.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ManagedInstancesState();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetSize = r.int64();
              break;
            case 4:
              m.runningActualCount = r.int64();
              break;
            case 5:
              m.runningOutdatedCount = r.int64();
              break;
            case 6:
              m.processingCount = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      ManagedInstancesState.Statuses = (function() {
        function Statuses(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Statuses.prototype.creating = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.starting = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.opening = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.warming = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.running = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.closing = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.stopping = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.updating = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.deleting = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.prototype.failed = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        Statuses.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.creating != null && m.hasOwnProperty('creating')) w.uint32(8).int64(m.creating);
          if (m.starting != null && m.hasOwnProperty('starting')) w.uint32(16).int64(m.starting);
          if (m.opening != null && m.hasOwnProperty('opening')) w.uint32(24).int64(m.opening);
          if (m.warming != null && m.hasOwnProperty('warming')) w.uint32(32).int64(m.warming);
          if (m.running != null && m.hasOwnProperty('running')) w.uint32(40).int64(m.running);
          if (m.closing != null && m.hasOwnProperty('closing')) w.uint32(48).int64(m.closing);
          if (m.stopping != null && m.hasOwnProperty('stopping')) w.uint32(56).int64(m.stopping);
          if (m.updating != null && m.hasOwnProperty('updating')) w.uint32(64).int64(m.updating);
          if (m.deleting != null && m.hasOwnProperty('deleting')) w.uint32(72).int64(m.deleting);
          if (m.failed != null && m.hasOwnProperty('failed')) w.uint32(80).int64(m.failed);
          return w;
        };
        Statuses.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.compute.v1.instancegroup.ManagedInstancesState.Statuses();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.creating = r.int64();
                break;
              case 2:
                m.starting = r.int64();
                break;
              case 3:
                m.opening = r.int64();
                break;
              case 4:
                m.warming = r.int64();
                break;
              case 5:
                m.running = r.int64();
                break;
              case 6:
                m.closing = r.int64();
                break;
              case 7:
                m.stopping = r.int64();
                break;
              case 8:
                m.updating = r.int64();
                break;
              case 9:
                m.deleting = r.int64();
                break;
              case 10:
                m.failed = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Statuses;
      })();
      return ManagedInstancesState;
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
        if (m.fixedScale != null && m.hasOwnProperty('fixedScale')) $root.api.compute.v1.instancegroup.ScalePolicy.FixedScale.encode(m.fixedScale, w.uint32(10).fork()).ldelim();
        if (m.autoScale != null && m.hasOwnProperty('autoScale')) $root.api.compute.v1.instancegroup.ScalePolicy.AutoScale.encode(m.autoScale, w.uint32(18).fork()).ldelim();
        return w;
      };
      ScalePolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ScalePolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.fixedScale = $root.api.compute.v1.instancegroup.ScalePolicy.FixedScale.decode(r, r.uint32());
              break;
            case 2:
              m.autoScale = $root.api.compute.v1.instancegroup.ScalePolicy.AutoScale.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      ScalePolicy.AutoScale = (function() {
        function AutoScale(p) {
          this.customRules = [];
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        AutoScale.prototype.minZoneSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AutoScale.prototype.maxSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AutoScale.prototype.measurementDuration = null;
        AutoScale.prototype.warmupDuration = null;
        AutoScale.prototype.stabilizationDuration = null;
        AutoScale.prototype.initialSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AutoScale.prototype.cpuUtilizationRule = null;
        AutoScale.prototype.customRules = $util.emptyArray;
        AutoScale.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.minZoneSize != null && m.hasOwnProperty('minZoneSize')) w.uint32(8).int64(m.minZoneSize);
          if (m.maxSize != null && m.hasOwnProperty('maxSize')) w.uint32(16).int64(m.maxSize);
          if (m.measurementDuration != null && m.hasOwnProperty('measurementDuration')) $root.contrib.google.protobuf.Duration.encode(m.measurementDuration, w.uint32(26).fork()).ldelim();
          if (m.warmupDuration != null && m.hasOwnProperty('warmupDuration')) $root.contrib.google.protobuf.Duration.encode(m.warmupDuration, w.uint32(34).fork()).ldelim();
          if (m.stabilizationDuration != null && m.hasOwnProperty('stabilizationDuration')) $root.contrib.google.protobuf.Duration.encode(m.stabilizationDuration, w.uint32(42).fork()).ldelim();
          if (m.initialSize != null && m.hasOwnProperty('initialSize')) w.uint32(48).int64(m.initialSize);
          if (m.cpuUtilizationRule != null && m.hasOwnProperty('cpuUtilizationRule')) $root.api.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.encode(m.cpuUtilizationRule, w.uint32(58).fork()).ldelim();
          if (m.customRules != null && m.customRules.length) {
            for (let i = 0; i < m.customRules.length; ++i) $root.api.compute.v1.instancegroup.ScalePolicy.CustomRule.encode(m.customRules[i], w.uint32(66).fork()).ldelim();
          }
          return w;
        };
        AutoScale.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.compute.v1.instancegroup.ScalePolicy.AutoScale();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.minZoneSize = r.int64();
                break;
              case 2:
                m.maxSize = r.int64();
                break;
              case 3:
                m.measurementDuration = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
                break;
              case 4:
                m.warmupDuration = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
                break;
              case 5:
                m.stabilizationDuration = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
                break;
              case 6:
                m.initialSize = r.int64();
                break;
              case 7:
                m.cpuUtilizationRule = $root.api.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.decode(r, r.uint32());
                break;
              case 8:
                if (!(m.customRules && m.customRules.length)) m.customRules = [];
                m.customRules.push($root.api.compute.v1.instancegroup.ScalePolicy.CustomRule.decode(r, r.uint32()));
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
      ScalePolicy.CpuUtilizationRule = (function() {
        function CpuUtilizationRule(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        CpuUtilizationRule.prototype.utilizationTarget = 0;
        CpuUtilizationRule.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.utilizationTarget != null && m.hasOwnProperty('utilizationTarget')) w.uint32(9).double(m.utilizationTarget);
          return w;
        };
        CpuUtilizationRule.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.utilizationTarget = r.double();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return CpuUtilizationRule;
      })();
      ScalePolicy.CustomRule = (function() {
        function CustomRule(p) {
          this.labels = {};
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        CustomRule.prototype.ruleType = 0;
        CustomRule.prototype.metricType = 0;
        CustomRule.prototype.metricName = '';
        CustomRule.prototype.labels = $util.emptyObject;
        CustomRule.prototype.target = 0;
        CustomRule.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.ruleType != null && m.hasOwnProperty('ruleType')) w.uint32(8).int32(m.ruleType);
          if (m.metricType != null && m.hasOwnProperty('metricType')) w.uint32(16).int32(m.metricType);
          if (m.metricName != null && m.hasOwnProperty('metricName')) w.uint32(26).string(m.metricName);
          if (m.target != null && m.hasOwnProperty('target')) w.uint32(33).double(m.target);
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
        CustomRule.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.compute.v1.instancegroup.ScalePolicy.CustomRule(),
            k;
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.ruleType = r.int32();
                break;
              case 2:
                m.metricType = r.int32();
                break;
              case 3:
                m.metricName = r.string();
                break;
              case 5:
                r.skip().pos++;
                if (m.labels === $util.emptyObject) m.labels = {};
                k = r.string();
                r.pos++;
                m.labels[k] = r.string();
                break;
              case 4:
                m.target = r.double();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        let RuleType = (function() {
          let valuesById = {},
            values = Object.create(valuesById);
          values[(valuesById[0] = 'RULE_TYPE_UNSPECIFIED')] = 0;
          values[(valuesById[1] = 'UTILIZATION')] = 1;
          values[(valuesById[2] = 'WORKLOAD')] = 2;
          return values;
        })();
        CustomRule.RuleType = RuleType;
        let MetricType = (function() {
          let valuesById = {},
            values = Object.create(valuesById);
          values[(valuesById[0] = 'METRIC_TYPE_UNSPECIFIED')] = 0;
          values[(valuesById[1] = 'GAUGE')] = 1;
          values[(valuesById[2] = 'COUNTER')] = 2;
          return values;
        })();
        CustomRule.MetricType = MetricType;
        return CustomRule;
      })();
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
            m = new $root.api.compute.v1.instancegroup.ScalePolicy.FixedScale();
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
      return ScalePolicy;
    })();
  })(root);
  (function($root) {
    $root.DeployPolicy = (function() {
      function DeployPolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeployPolicy.prototype.maxUnavailable = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      DeployPolicy.prototype.maxDeleting = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      DeployPolicy.prototype.maxCreating = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      DeployPolicy.prototype.maxExpansion = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      DeployPolicy.prototype.startupDuration = null;
      DeployPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.maxUnavailable != null && m.hasOwnProperty('maxUnavailable')) w.uint32(8).int64(m.maxUnavailable);
        if (m.maxDeleting != null && m.hasOwnProperty('maxDeleting')) w.uint32(16).int64(m.maxDeleting);
        if (m.maxCreating != null && m.hasOwnProperty('maxCreating')) w.uint32(24).int64(m.maxCreating);
        if (m.maxExpansion != null && m.hasOwnProperty('maxExpansion')) w.uint32(48).int64(m.maxExpansion);
        if (m.startupDuration != null && m.hasOwnProperty('startupDuration')) $root.contrib.google.protobuf.Duration.encode(m.startupDuration, w.uint32(58).fork()).ldelim();
        return w;
      };
      DeployPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.DeployPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.maxUnavailable = r.int64();
              break;
            case 2:
              m.maxDeleting = r.int64();
              break;
            case 3:
              m.maxCreating = r.int64();
              break;
            case 6:
              m.maxExpansion = r.int64();
              break;
            case 7:
              m.startupDuration = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeployPolicy;
    })();
  })(root);
  (function($root) {
    $root.AllocationPolicy = (function() {
      function AllocationPolicy(p) {
        this.zones = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AllocationPolicy.prototype.zones = $util.emptyArray;
      AllocationPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zones != null && m.zones.length) {
          for (let i = 0; i < m.zones.length; ++i) $root.api.compute.v1.instancegroup.AllocationPolicy.Zone.encode(m.zones[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      AllocationPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.AllocationPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.zones && m.zones.length)) m.zones = [];
              m.zones.push($root.api.compute.v1.instancegroup.AllocationPolicy.Zone.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      AllocationPolicy.Zone = (function() {
        function Zone(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Zone.prototype.zoneId = '';
        Zone.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
          return w;
        };
        Zone.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.compute.v1.instancegroup.AllocationPolicy.Zone();
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
        return Zone;
      })();
      return AllocationPolicy;
    })();
  })(root);
  (function($root) {
    $root.InstanceTemplate = (function() {
      function InstanceTemplate(p) {
        this.labels = {};
        this.metadata = {};
        this.secondaryDiskSpecs = [];
        this.networkInterfaceSpecs = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      InstanceTemplate.prototype.description = '';
      InstanceTemplate.prototype.labels = $util.emptyObject;
      InstanceTemplate.prototype.platformId = '';
      InstanceTemplate.prototype.resourcesSpec = null;
      InstanceTemplate.prototype.metadata = $util.emptyObject;
      InstanceTemplate.prototype.bootDiskSpec = null;
      InstanceTemplate.prototype.secondaryDiskSpecs = $util.emptyArray;
      InstanceTemplate.prototype.networkInterfaceSpecs = $util.emptyArray;
      InstanceTemplate.prototype.schedulingPolicy = null;
      InstanceTemplate.prototype.serviceAccountId = '';
      InstanceTemplate.prototype.networkSettings = null;
      InstanceTemplate.prototype.name = '';
      InstanceTemplate.prototype.hostname = '';
      InstanceTemplate.encode = function encode(m, w) {
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
        if (m.platformId != null && m.hasOwnProperty('platformId')) w.uint32(26).string(m.platformId);
        if (m.resourcesSpec != null && m.hasOwnProperty('resourcesSpec')) $root.api.compute.v1.instancegroup.ResourcesSpec.encode(m.resourcesSpec, w.uint32(34).fork()).ldelim();
        if (m.metadata != null && m.hasOwnProperty('metadata')) {
          for (let ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
            w.uint32(42)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.metadata[ks[i]])
              .ldelim();
          }
        }
        if (m.bootDiskSpec != null && m.hasOwnProperty('bootDiskSpec')) $root.api.compute.v1.instancegroup.AttachedDiskSpec.encode(m.bootDiskSpec, w.uint32(50).fork()).ldelim();
        if (m.secondaryDiskSpecs != null && m.secondaryDiskSpecs.length) {
          for (let i = 0; i < m.secondaryDiskSpecs.length; ++i) $root.api.compute.v1.instancegroup.AttachedDiskSpec.encode(m.secondaryDiskSpecs[i], w.uint32(58).fork()).ldelim();
        }
        if (m.networkInterfaceSpecs != null && m.networkInterfaceSpecs.length) {
          for (let i = 0; i < m.networkInterfaceSpecs.length; ++i) $root.api.compute.v1.instancegroup.NetworkInterfaceSpec.encode(m.networkInterfaceSpecs[i], w.uint32(66).fork()).ldelim();
        }
        if (m.schedulingPolicy != null && m.hasOwnProperty('schedulingPolicy')) $root.api.compute.v1.instancegroup.SchedulingPolicy.encode(m.schedulingPolicy, w.uint32(74).fork()).ldelim();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(82).string(m.serviceAccountId);
        if (m.networkSettings != null && m.hasOwnProperty('networkSettings')) $root.api.compute.v1.instancegroup.NetworkSettings.encode(m.networkSettings, w.uint32(90).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(98).string(m.name);
        if (m.hostname != null && m.hasOwnProperty('hostname')) w.uint32(106).string(m.hostname);
        return w;
      };
      InstanceTemplate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.InstanceTemplate(),
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
              m.platformId = r.string();
              break;
            case 4:
              m.resourcesSpec = $root.api.compute.v1.instancegroup.ResourcesSpec.decode(r, r.uint32());
              break;
            case 5:
              r.skip().pos++;
              if (m.metadata === $util.emptyObject) m.metadata = {};
              k = r.string();
              r.pos++;
              m.metadata[k] = r.string();
              break;
            case 6:
              m.bootDiskSpec = $root.api.compute.v1.instancegroup.AttachedDiskSpec.decode(r, r.uint32());
              break;
            case 7:
              if (!(m.secondaryDiskSpecs && m.secondaryDiskSpecs.length)) m.secondaryDiskSpecs = [];
              m.secondaryDiskSpecs.push($root.api.compute.v1.instancegroup.AttachedDiskSpec.decode(r, r.uint32()));
              break;
            case 8:
              if (!(m.networkInterfaceSpecs && m.networkInterfaceSpecs.length)) m.networkInterfaceSpecs = [];
              m.networkInterfaceSpecs.push($root.api.compute.v1.instancegroup.NetworkInterfaceSpec.decode(r, r.uint32()));
              break;
            case 9:
              m.schedulingPolicy = $root.api.compute.v1.instancegroup.SchedulingPolicy.decode(r, r.uint32());
              break;
            case 10:
              m.serviceAccountId = r.string();
              break;
            case 11:
              m.networkSettings = $root.api.compute.v1.instancegroup.NetworkSettings.decode(r, r.uint32());
              break;
            case 12:
              m.name = r.string();
              break;
            case 13:
              m.hostname = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return InstanceTemplate;
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
          m = new $root.api.compute.v1.instancegroup.ResourcesSpec();
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
      AttachedDiskSpec.prototype.diskSpec = null;
      AttachedDiskSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.mode != null && m.hasOwnProperty('mode')) w.uint32(8).int32(m.mode);
        if (m.deviceName != null && m.hasOwnProperty('deviceName')) w.uint32(18).string(m.deviceName);
        if (m.diskSpec != null && m.hasOwnProperty('diskSpec')) $root.api.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.encode(m.diskSpec, w.uint32(26).fork()).ldelim();
        return w;
      };
      AttachedDiskSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.AttachedDiskSpec();
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
              m.diskSpec = $root.api.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.decode(r, r.uint32());
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
        DiskSpec.prototype.description = '';
        DiskSpec.prototype.typeId = '';
        DiskSpec.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        DiskSpec.prototype.imageId = '';
        DiskSpec.prototype.snapshotId = '';
        let $oneOfFields;
        Object.defineProperty(DiskSpec.prototype, 'sourceOneof', {
          get: $util.oneOfGetter(($oneOfFields = ['imageId', 'snapshotId'])),
          set: $util.oneOfSetter($oneOfFields)
        });
        DiskSpec.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.description != null && m.hasOwnProperty('description')) w.uint32(10).string(m.description);
          if (m.typeId != null && m.hasOwnProperty('typeId')) w.uint32(18).string(m.typeId);
          if (m.size != null && m.hasOwnProperty('size')) w.uint32(24).int64(m.size);
          if (m.imageId != null && m.hasOwnProperty('imageId')) w.uint32(34).string(m.imageId);
          if (m.snapshotId != null && m.hasOwnProperty('snapshotId')) w.uint32(42).string(m.snapshotId);
          return w;
        };
        DiskSpec.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.description = r.string();
                break;
              case 2:
                m.typeId = r.string();
                break;
              case 3:
                m.size = r.int64();
                break;
              case 4:
                m.imageId = r.string();
                break;
              case 5:
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
        this.subnetIds = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NetworkInterfaceSpec.prototype.networkId = '';
      NetworkInterfaceSpec.prototype.subnetIds = $util.emptyArray;
      NetworkInterfaceSpec.prototype.primaryV4AddressSpec = null;
      NetworkInterfaceSpec.prototype.primaryV6AddressSpec = null;
      NetworkInterfaceSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(10).string(m.networkId);
        if (m.subnetIds != null && m.subnetIds.length) {
          for (let i = 0; i < m.subnetIds.length; ++i) w.uint32(18).string(m.subnetIds[i]);
        }
        if (m.primaryV4AddressSpec != null && m.hasOwnProperty('primaryV4AddressSpec')) $root.api.compute.v1.instancegroup.PrimaryAddressSpec.encode(m.primaryV4AddressSpec, w.uint32(26).fork()).ldelim();
        if (m.primaryV6AddressSpec != null && m.hasOwnProperty('primaryV6AddressSpec')) $root.api.compute.v1.instancegroup.PrimaryAddressSpec.encode(m.primaryV6AddressSpec, w.uint32(34).fork()).ldelim();
        return w;
      };
      NetworkInterfaceSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.NetworkInterfaceSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.networkId = r.string();
              break;
            case 2:
              if (!(m.subnetIds && m.subnetIds.length)) m.subnetIds = [];
              m.subnetIds.push(r.string());
              break;
            case 3:
              m.primaryV4AddressSpec = $root.api.compute.v1.instancegroup.PrimaryAddressSpec.decode(r, r.uint32());
              break;
            case 4:
              m.primaryV6AddressSpec = $root.api.compute.v1.instancegroup.PrimaryAddressSpec.decode(r, r.uint32());
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
      PrimaryAddressSpec.prototype.oneToOneNatSpec = null;
      PrimaryAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.oneToOneNatSpec != null && m.hasOwnProperty('oneToOneNatSpec')) $root.api.compute.v1.instancegroup.OneToOneNatSpec.encode(m.oneToOneNatSpec, w.uint32(10).fork()).ldelim();
        return w;
      };
      PrimaryAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.PrimaryAddressSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.oneToOneNatSpec = $root.api.compute.v1.instancegroup.OneToOneNatSpec.decode(r, r.uint32());
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
      OneToOneNatSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.ipVersion != null && m.hasOwnProperty('ipVersion')) w.uint32(8).int32(m.ipVersion);
        return w;
      };
      OneToOneNatSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.OneToOneNatSpec();
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
          m = new $root.api.compute.v1.instancegroup.SchedulingPolicy();
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
          m = new $root.api.compute.v1.instancegroup.NetworkSettings();
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
    $root.LoadBalancerSpec = (function() {
      function LoadBalancerSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      LoadBalancerSpec.prototype.targetGroupSpec = null;
      LoadBalancerSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.targetGroupSpec != null && m.hasOwnProperty('targetGroupSpec')) $root.api.compute.v1.instancegroup.TargetGroupSpec.encode(m.targetGroupSpec, w.uint32(10).fork()).ldelim();
        return w;
      };
      LoadBalancerSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.LoadBalancerSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.targetGroupSpec = $root.api.compute.v1.instancegroup.TargetGroupSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return LoadBalancerSpec;
    })();
  })(root);
  (function($root) {
    $root.TargetGroupSpec = (function() {
      function TargetGroupSpec(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TargetGroupSpec.prototype.name = '';
      TargetGroupSpec.prototype.description = '';
      TargetGroupSpec.prototype.labels = $util.emptyObject;
      TargetGroupSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
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
        return w;
      };
      TargetGroupSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.TargetGroupSpec(),
          k;
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
      return TargetGroupSpec;
    })();
  })(root);
  (function($root) {
    $root.HealthChecksSpec = (function() {
      function HealthChecksSpec(p) {
        this.healthCheckSpecs = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      HealthChecksSpec.prototype.healthCheckSpecs = $util.emptyArray;
      HealthChecksSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.healthCheckSpecs != null && m.healthCheckSpecs.length) {
          for (let i = 0; i < m.healthCheckSpecs.length; ++i) $root.api.compute.v1.instancegroup.HealthCheckSpec.encode(m.healthCheckSpecs[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      HealthChecksSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.HealthChecksSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.healthCheckSpecs && m.healthCheckSpecs.length)) m.healthCheckSpecs = [];
              m.healthCheckSpecs.push($root.api.compute.v1.instancegroup.HealthCheckSpec.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return HealthChecksSpec;
    })();
  })(root);
  (function($root) {
    $root.HealthCheckSpec = (function() {
      function HealthCheckSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      HealthCheckSpec.prototype.interval = null;
      HealthCheckSpec.prototype.timeout = null;
      HealthCheckSpec.prototype.unhealthyThreshold = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      HealthCheckSpec.prototype.healthyThreshold = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      HealthCheckSpec.prototype.tcpOptions = null;
      HealthCheckSpec.prototype.httpOptions = null;
      let $oneOfFields;
      Object.defineProperty(HealthCheckSpec.prototype, 'healthCheckOptions', {
        get: $util.oneOfGetter(($oneOfFields = ['tcpOptions', 'httpOptions'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      HealthCheckSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.interval != null && m.hasOwnProperty('interval')) $root.contrib.google.protobuf.Duration.encode(m.interval, w.uint32(10).fork()).ldelim();
        if (m.timeout != null && m.hasOwnProperty('timeout')) $root.contrib.google.protobuf.Duration.encode(m.timeout, w.uint32(18).fork()).ldelim();
        if (m.unhealthyThreshold != null && m.hasOwnProperty('unhealthyThreshold')) w.uint32(24).int64(m.unhealthyThreshold);
        if (m.healthyThreshold != null && m.hasOwnProperty('healthyThreshold')) w.uint32(32).int64(m.healthyThreshold);
        if (m.tcpOptions != null && m.hasOwnProperty('tcpOptions')) $root.api.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.encode(m.tcpOptions, w.uint32(42).fork()).ldelim();
        if (m.httpOptions != null && m.hasOwnProperty('httpOptions')) $root.api.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.encode(m.httpOptions, w.uint32(50).fork()).ldelim();
        return w;
      };
      HealthCheckSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.HealthCheckSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.interval = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            case 2:
              m.timeout = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            case 3:
              m.unhealthyThreshold = r.int64();
              break;
            case 4:
              m.healthyThreshold = r.int64();
              break;
            case 5:
              m.tcpOptions = $root.api.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.decode(r, r.uint32());
              break;
            case 6:
              m.httpOptions = $root.api.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      HealthCheckSpec.TcpOptions = (function() {
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
            m = new $root.api.compute.v1.instancegroup.HealthCheckSpec.TcpOptions();
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
      HealthCheckSpec.HttpOptions = (function() {
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
            m = new $root.api.compute.v1.instancegroup.HealthCheckSpec.HttpOptions();
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
      return HealthCheckSpec;
    })();
  })(root);
  (function($root) {
    $root.ManagedInstance = (function() {
      function ManagedInstance(p) {
        this.networkInterfaces = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ManagedInstance.prototype.id = '';
      ManagedInstance.prototype.status = 0;
      ManagedInstance.prototype.instanceId = '';
      ManagedInstance.prototype.fqdn = '';
      ManagedInstance.prototype.name = '';
      ManagedInstance.prototype.statusMessage = '';
      ManagedInstance.prototype.zoneId = '';
      ManagedInstance.prototype.networkInterfaces = $util.emptyArray;
      ManagedInstance.prototype.statusChangedAt = null;
      ManagedInstance.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(16).int32(m.status);
        if (m.instanceId != null && m.hasOwnProperty('instanceId')) w.uint32(26).string(m.instanceId);
        if (m.fqdn != null && m.hasOwnProperty('fqdn')) w.uint32(34).string(m.fqdn);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(42).string(m.name);
        if (m.statusMessage != null && m.hasOwnProperty('statusMessage')) w.uint32(50).string(m.statusMessage);
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(58).string(m.zoneId);
        if (m.networkInterfaces != null && m.networkInterfaces.length) {
          for (let i = 0; i < m.networkInterfaces.length; ++i) $root.api.compute.v1.instancegroup.NetworkInterface.encode(m.networkInterfaces[i], w.uint32(66).fork()).ldelim();
        }
        if (m.statusChangedAt != null && m.hasOwnProperty('statusChangedAt')) $root.contrib.google.protobuf.Timestamp.encode(m.statusChangedAt, w.uint32(74).fork()).ldelim();
        return w;
      };
      ManagedInstance.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ManagedInstance();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.status = r.int32();
              break;
            case 3:
              m.instanceId = r.string();
              break;
            case 4:
              m.fqdn = r.string();
              break;
            case 5:
              m.name = r.string();
              break;
            case 6:
              m.statusMessage = r.string();
              break;
            case 7:
              m.zoneId = r.string();
              break;
            case 8:
              if (!(m.networkInterfaces && m.networkInterfaces.length)) m.networkInterfaces = [];
              m.networkInterfaces.push($root.api.compute.v1.instancegroup.NetworkInterface.decode(r, r.uint32()));
              break;
            case 9:
              m.statusChangedAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
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
        values[(valuesById[11] = 'CREATING_INSTANCE')] = 11;
        values[(valuesById[12] = 'UPDATING_INSTANCE')] = 12;
        values[(valuesById[13] = 'DELETING_INSTANCE')] = 13;
        values[(valuesById[14] = 'STARTING_INSTANCE')] = 14;
        values[(valuesById[15] = 'STOPPING_INSTANCE')] = 15;
        values[(valuesById[16] = 'AWAITING_STARTUP_DURATION')] = 16;
        values[(valuesById[17] = 'CHECKING_HEALTH')] = 17;
        values[(valuesById[18] = 'OPENING_TRAFFIC')] = 18;
        values[(valuesById[19] = 'AWAITING_WARMUP_DURATION')] = 19;
        values[(valuesById[20] = 'CLOSING_TRAFFIC')] = 20;
        values[(valuesById[21] = 'RUNNING_ACTUAL')] = 21;
        values[(valuesById[22] = 'RUNNING_OUTDATED')] = 22;
        values[(valuesById[23] = 'STOPPED')] = 23;
        values[(valuesById[24] = 'DELETED')] = 24;
        return values;
      })();
      ManagedInstance.Status = Status;
      return ManagedInstance;
    })();
  })(root);
  (function($root) {
    $root.NetworkInterface = (function() {
      function NetworkInterface(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NetworkInterface.prototype.index = '';
      NetworkInterface.prototype.macAddress = '';
      NetworkInterface.prototype.subnetId = '';
      NetworkInterface.prototype.primaryV4Address = null;
      NetworkInterface.prototype.primaryV6Address = null;
      NetworkInterface.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.index != null && m.hasOwnProperty('index')) w.uint32(10).string(m.index);
        if (m.macAddress != null && m.hasOwnProperty('macAddress')) w.uint32(18).string(m.macAddress);
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(26).string(m.subnetId);
        if (m.primaryV4Address != null && m.hasOwnProperty('primaryV4Address')) $root.api.compute.v1.instancegroup.PrimaryAddress.encode(m.primaryV4Address, w.uint32(34).fork()).ldelim();
        if (m.primaryV6Address != null && m.hasOwnProperty('primaryV6Address')) $root.api.compute.v1.instancegroup.PrimaryAddress.encode(m.primaryV6Address, w.uint32(42).fork()).ldelim();
        return w;
      };
      NetworkInterface.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.NetworkInterface();
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
              m.primaryV4Address = $root.api.compute.v1.instancegroup.PrimaryAddress.decode(r, r.uint32());
              break;
            case 5:
              m.primaryV6Address = $root.api.compute.v1.instancegroup.PrimaryAddress.decode(r, r.uint32());
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
        if (m.oneToOneNat != null && m.hasOwnProperty('oneToOneNat')) $root.api.compute.v1.instancegroup.OneToOneNat.encode(m.oneToOneNat, w.uint32(18).fork()).ldelim();
        return w;
      };
      PrimaryAddress.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.PrimaryAddress();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.address = r.string();
              break;
            case 2:
              m.oneToOneNat = $root.api.compute.v1.instancegroup.OneToOneNat.decode(r, r.uint32());
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
          m = new $root.api.compute.v1.instancegroup.OneToOneNat();
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
    $root.LogRecord = (function() {
      function LogRecord(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      LogRecord.prototype.timestamp = null;
      LogRecord.prototype.message = '';
      LogRecord.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.timestamp != null && m.hasOwnProperty('timestamp')) $root.contrib.google.protobuf.Timestamp.encode(m.timestamp, w.uint32(10).fork()).ldelim();
        if (m.message != null && m.hasOwnProperty('message')) w.uint32(18).string(m.message);
        return w;
      };
      LogRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.LogRecord();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.timestamp = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 2:
              m.message = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return LogRecord;
    })();
  })(root);
  (function($root) {
    $root.InstanceGroupService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.InstanceGroupService.makeGrpcConstructor());
    };
    $root.InstanceGroupService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.GetInstanceGroupRequest,
          responseType: $root.api.compute.v1.instancegroup.InstanceGroup,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.GetInstanceGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.GetInstanceGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.instancegroup.InstanceGroup.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.instancegroup.InstanceGroup.decode
        },
        list: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.ListInstanceGroupsRequest,
          responseType: $root.api.compute.v1.instancegroup.ListInstanceGroupsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.ListInstanceGroupsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.ListInstanceGroupsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.instancegroup.ListInstanceGroupsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.instancegroup.ListInstanceGroupsResponse.decode
        },
        create: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.CreateInstanceGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.CreateInstanceGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.CreateInstanceGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        createFromYaml: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.UpdateInstanceGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.UpdateInstanceGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.UpdateInstanceGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        updateFromYaml: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        stop: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.StopInstanceGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.StopInstanceGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.StopInstanceGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        start: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.StartInstanceGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.StartInstanceGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.StartInstanceGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.DeleteInstanceGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.DeleteInstanceGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.DeleteInstanceGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listInstances: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.ListInstanceGroupInstancesRequest,
          responseType: $root.api.compute.v1.instancegroup.ListInstanceGroupInstancesResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.ListInstanceGroupInstancesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.ListInstanceGroupInstancesRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.instancegroup.ListInstanceGroupInstancesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.instancegroup.ListInstanceGroupInstancesResponse.decode
        },
        listOperations: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.ListInstanceGroupOperationsRequest,
          responseType: $root.api.compute.v1.instancegroup.ListInstanceGroupOperationsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.ListInstanceGroupOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.ListInstanceGroupOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.instancegroup.ListInstanceGroupOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.instancegroup.ListInstanceGroupOperationsResponse.decode
        },
        listLogRecords: {
          path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest,
          responseType: $root.api.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse,
          requestSerialize: r => {
            return $root.api.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest.decode,
          responseSerialize: r => {
            return $root.api.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse.decode
        }
      });
      ctor.__endpointId = 'compute';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.InstanceGroupView = (function() {
      let InstanceGroupView = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'BASIC')] = 0;
        values[(valuesById[1] = 'FULL')] = 1;
        return values;
      })();
      return InstanceGroupView;
    })();
  })(root);
  (function($root) {
    $root.GetInstanceGroupRequest = (function() {
      function GetInstanceGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetInstanceGroupRequest.prototype.instanceGroupId = '';
      GetInstanceGroupRequest.prototype.view = 0;
      GetInstanceGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        if (m.view != null && m.hasOwnProperty('view')) w.uint32(16).int32(m.view);
        return w;
      };
      GetInstanceGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.GetInstanceGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
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
      return GetInstanceGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateInstanceGroupRequest = (function() {
      function CreateInstanceGroupRequest(p) {
        this.labels = {};
        this.variables = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateInstanceGroupRequest.prototype.folderId = '';
      CreateInstanceGroupRequest.prototype.name = '';
      CreateInstanceGroupRequest.prototype.description = '';
      CreateInstanceGroupRequest.prototype.labels = $util.emptyObject;
      CreateInstanceGroupRequest.prototype.instanceTemplate = null;
      CreateInstanceGroupRequest.prototype.scalePolicy = null;
      CreateInstanceGroupRequest.prototype.deployPolicy = null;
      CreateInstanceGroupRequest.prototype.allocationPolicy = null;
      CreateInstanceGroupRequest.prototype.loadBalancerSpec = null;
      CreateInstanceGroupRequest.prototype.healthChecksSpec = null;
      CreateInstanceGroupRequest.prototype.serviceAccountId = '';
      CreateInstanceGroupRequest.prototype.variables = $util.emptyArray;
      CreateInstanceGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
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
        if (m.instanceTemplate != null && m.hasOwnProperty('instanceTemplate')) $root.api.compute.v1.instancegroup.InstanceTemplate.encode(m.instanceTemplate, w.uint32(50).fork()).ldelim();
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.compute.v1.instancegroup.ScalePolicy.encode(m.scalePolicy, w.uint32(58).fork()).ldelim();
        if (m.deployPolicy != null && m.hasOwnProperty('deployPolicy')) $root.api.compute.v1.instancegroup.DeployPolicy.encode(m.deployPolicy, w.uint32(66).fork()).ldelim();
        if (m.allocationPolicy != null && m.hasOwnProperty('allocationPolicy')) $root.api.compute.v1.instancegroup.AllocationPolicy.encode(m.allocationPolicy, w.uint32(74).fork()).ldelim();
        if (m.loadBalancerSpec != null && m.hasOwnProperty('loadBalancerSpec')) $root.api.compute.v1.instancegroup.LoadBalancerSpec.encode(m.loadBalancerSpec, w.uint32(82).fork()).ldelim();
        if (m.healthChecksSpec != null && m.hasOwnProperty('healthChecksSpec')) $root.api.compute.v1.instancegroup.HealthChecksSpec.encode(m.healthChecksSpec, w.uint32(90).fork()).ldelim();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(98).string(m.serviceAccountId);
        if (m.variables != null && m.variables.length) {
          for (let i = 0; i < m.variables.length; ++i) $root.api.compute.v1.instancegroup.Variable.encode(m.variables[i], w.uint32(106).fork()).ldelim();
        }
        return w;
      };
      CreateInstanceGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.CreateInstanceGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
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
              m.instanceTemplate = $root.api.compute.v1.instancegroup.InstanceTemplate.decode(r, r.uint32());
              break;
            case 7:
              m.scalePolicy = $root.api.compute.v1.instancegroup.ScalePolicy.decode(r, r.uint32());
              break;
            case 8:
              m.deployPolicy = $root.api.compute.v1.instancegroup.DeployPolicy.decode(r, r.uint32());
              break;
            case 9:
              m.allocationPolicy = $root.api.compute.v1.instancegroup.AllocationPolicy.decode(r, r.uint32());
              break;
            case 10:
              m.loadBalancerSpec = $root.api.compute.v1.instancegroup.LoadBalancerSpec.decode(r, r.uint32());
              break;
            case 11:
              m.healthChecksSpec = $root.api.compute.v1.instancegroup.HealthChecksSpec.decode(r, r.uint32());
              break;
            case 12:
              m.serviceAccountId = r.string();
              break;
            case 13:
              if (!(m.variables && m.variables.length)) m.variables = [];
              m.variables.push($root.api.compute.v1.instancegroup.Variable.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateInstanceGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateInstanceGroupFromYamlRequest = (function() {
      function CreateInstanceGroupFromYamlRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateInstanceGroupFromYamlRequest.prototype.folderId = '';
      CreateInstanceGroupFromYamlRequest.prototype.instanceGroupYaml = '';
      CreateInstanceGroupFromYamlRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.instanceGroupYaml != null && m.hasOwnProperty('instanceGroupYaml')) w.uint32(18).string(m.instanceGroupYaml);
        return w;
      };
      CreateInstanceGroupFromYamlRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.instanceGroupYaml = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateInstanceGroupFromYamlRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateInstanceGroupMetadata = (function() {
      function CreateInstanceGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateInstanceGroupMetadata.prototype.instanceGroupId = '';
      CreateInstanceGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      CreateInstanceGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.CreateInstanceGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateInstanceGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateInstanceGroupRequest = (function() {
      function UpdateInstanceGroupRequest(p) {
        this.labels = {};
        this.variables = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateInstanceGroupRequest.prototype.instanceGroupId = '';
      UpdateInstanceGroupRequest.prototype.updateMask = null;
      UpdateInstanceGroupRequest.prototype.name = '';
      UpdateInstanceGroupRequest.prototype.description = '';
      UpdateInstanceGroupRequest.prototype.labels = $util.emptyObject;
      UpdateInstanceGroupRequest.prototype.instanceTemplate = null;
      UpdateInstanceGroupRequest.prototype.scalePolicy = null;
      UpdateInstanceGroupRequest.prototype.deployPolicy = null;
      UpdateInstanceGroupRequest.prototype.allocationPolicy = null;
      UpdateInstanceGroupRequest.prototype.healthChecksSpec = null;
      UpdateInstanceGroupRequest.prototype.serviceAccountId = '';
      UpdateInstanceGroupRequest.prototype.loadBalancerSpec = null;
      UpdateInstanceGroupRequest.prototype.variables = $util.emptyArray;
      UpdateInstanceGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
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
        if (m.instanceTemplate != null && m.hasOwnProperty('instanceTemplate')) $root.api.compute.v1.instancegroup.InstanceTemplate.encode(m.instanceTemplate, w.uint32(50).fork()).ldelim();
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.compute.v1.instancegroup.ScalePolicy.encode(m.scalePolicy, w.uint32(58).fork()).ldelim();
        if (m.deployPolicy != null && m.hasOwnProperty('deployPolicy')) $root.api.compute.v1.instancegroup.DeployPolicy.encode(m.deployPolicy, w.uint32(66).fork()).ldelim();
        if (m.allocationPolicy != null && m.hasOwnProperty('allocationPolicy')) $root.api.compute.v1.instancegroup.AllocationPolicy.encode(m.allocationPolicy, w.uint32(74).fork()).ldelim();
        if (m.healthChecksSpec != null && m.hasOwnProperty('healthChecksSpec')) $root.api.compute.v1.instancegroup.HealthChecksSpec.encode(m.healthChecksSpec, w.uint32(90).fork()).ldelim();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(98).string(m.serviceAccountId);
        if (m.loadBalancerSpec != null && m.hasOwnProperty('loadBalancerSpec')) $root.api.compute.v1.instancegroup.LoadBalancerSpec.encode(m.loadBalancerSpec, w.uint32(114).fork()).ldelim();
        if (m.variables != null && m.variables.length) {
          for (let i = 0; i < m.variables.length; ++i) $root.api.compute.v1.instancegroup.Variable.encode(m.variables[i], w.uint32(122).fork()).ldelim();
        }
        return w;
      };
      UpdateInstanceGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.UpdateInstanceGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
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
              m.instanceTemplate = $root.api.compute.v1.instancegroup.InstanceTemplate.decode(r, r.uint32());
              break;
            case 7:
              m.scalePolicy = $root.api.compute.v1.instancegroup.ScalePolicy.decode(r, r.uint32());
              break;
            case 8:
              m.deployPolicy = $root.api.compute.v1.instancegroup.DeployPolicy.decode(r, r.uint32());
              break;
            case 9:
              m.allocationPolicy = $root.api.compute.v1.instancegroup.AllocationPolicy.decode(r, r.uint32());
              break;
            case 11:
              m.healthChecksSpec = $root.api.compute.v1.instancegroup.HealthChecksSpec.decode(r, r.uint32());
              break;
            case 12:
              m.serviceAccountId = r.string();
              break;
            case 14:
              m.loadBalancerSpec = $root.api.compute.v1.instancegroup.LoadBalancerSpec.decode(r, r.uint32());
              break;
            case 15:
              if (!(m.variables && m.variables.length)) m.variables = [];
              m.variables.push($root.api.compute.v1.instancegroup.Variable.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateInstanceGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateInstanceGroupFromYamlRequest = (function() {
      function UpdateInstanceGroupFromYamlRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateInstanceGroupFromYamlRequest.prototype.instanceGroupId = '';
      UpdateInstanceGroupFromYamlRequest.prototype.instanceGroupYaml = '';
      UpdateInstanceGroupFromYamlRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        if (m.instanceGroupYaml != null && m.hasOwnProperty('instanceGroupYaml')) w.uint32(18).string(m.instanceGroupYaml);
        return w;
      };
      UpdateInstanceGroupFromYamlRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            case 2:
              m.instanceGroupYaml = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateInstanceGroupFromYamlRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateInstanceGroupMetadata = (function() {
      function UpdateInstanceGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateInstanceGroupMetadata.prototype.instanceGroupId = '';
      UpdateInstanceGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      UpdateInstanceGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.UpdateInstanceGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateInstanceGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.StartInstanceGroupRequest = (function() {
      function StartInstanceGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StartInstanceGroupRequest.prototype.instanceGroupId = '';
      StartInstanceGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      StartInstanceGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.StartInstanceGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StartInstanceGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.StartInstanceGroupMetadata = (function() {
      function StartInstanceGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StartInstanceGroupMetadata.prototype.instanceGroupId = '';
      StartInstanceGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      StartInstanceGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.StartInstanceGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StartInstanceGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.StopInstanceGroupRequest = (function() {
      function StopInstanceGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StopInstanceGroupRequest.prototype.instanceGroupId = '';
      StopInstanceGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      StopInstanceGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.StopInstanceGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StopInstanceGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.StopInstanceGroupMetadata = (function() {
      function StopInstanceGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StopInstanceGroupMetadata.prototype.instanceGroupId = '';
      StopInstanceGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      StopInstanceGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.StopInstanceGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StopInstanceGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteInstanceGroupRequest = (function() {
      function DeleteInstanceGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteInstanceGroupRequest.prototype.instanceGroupId = '';
      DeleteInstanceGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      DeleteInstanceGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.DeleteInstanceGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteInstanceGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteInstanceGroupMetadata = (function() {
      function DeleteInstanceGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteInstanceGroupMetadata.prototype.instanceGroupId = '';
      DeleteInstanceGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      DeleteInstanceGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.DeleteInstanceGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteInstanceGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteInstancesMetadata = (function() {
      function DeleteInstancesMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteInstancesMetadata.prototype.instanceGroupId = '';
      DeleteInstancesMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        return w;
      };
      DeleteInstancesMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.DeleteInstancesMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteInstancesMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceGroupsRequest = (function() {
      function ListInstanceGroupsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceGroupsRequest.prototype.folderId = '';
      ListInstanceGroupsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListInstanceGroupsRequest.prototype.pageToken = '';
      ListInstanceGroupsRequest.prototype.filter = '';
      ListInstanceGroupsRequest.prototype.view = 0;
      ListInstanceGroupsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        if (m.view != null && m.hasOwnProperty('view')) w.uint32(40).int32(m.view);
        return w;
      };
      ListInstanceGroupsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ListInstanceGroupsRequest();
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
            case 5:
              m.view = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListInstanceGroupsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceGroupsResponse = (function() {
      function ListInstanceGroupsResponse(p) {
        this.instanceGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceGroupsResponse.prototype.instanceGroups = $util.emptyArray;
      ListInstanceGroupsResponse.prototype.nextPageToken = '';
      ListInstanceGroupsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroups != null && m.instanceGroups.length) {
          for (let i = 0; i < m.instanceGroups.length; ++i) $root.api.compute.v1.instancegroup.InstanceGroup.encode(m.instanceGroups[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListInstanceGroupsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ListInstanceGroupsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.instanceGroups && m.instanceGroups.length)) m.instanceGroups = [];
              m.instanceGroups.push($root.api.compute.v1.instancegroup.InstanceGroup.decode(r, r.uint32()));
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
      return ListInstanceGroupsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceGroupInstancesRequest = (function() {
      function ListInstanceGroupInstancesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceGroupInstancesRequest.prototype.instanceGroupId = '';
      ListInstanceGroupInstancesRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListInstanceGroupInstancesRequest.prototype.pageToken = '';
      ListInstanceGroupInstancesRequest.prototype.filter = '';
      ListInstanceGroupInstancesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListInstanceGroupInstancesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ListInstanceGroupInstancesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
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
      return ListInstanceGroupInstancesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceGroupInstancesResponse = (function() {
      function ListInstanceGroupInstancesResponse(p) {
        this.instances = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceGroupInstancesResponse.prototype.instances = $util.emptyArray;
      ListInstanceGroupInstancesResponse.prototype.nextPageToken = '';
      ListInstanceGroupInstancesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instances != null && m.instances.length) {
          for (let i = 0; i < m.instances.length; ++i) $root.api.compute.v1.instancegroup.ManagedInstance.encode(m.instances[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListInstanceGroupInstancesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ListInstanceGroupInstancesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.instances && m.instances.length)) m.instances = [];
              m.instances.push($root.api.compute.v1.instancegroup.ManagedInstance.decode(r, r.uint32()));
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
      return ListInstanceGroupInstancesResponse;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceGroupOperationsRequest = (function() {
      function ListInstanceGroupOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceGroupOperationsRequest.prototype.instanceGroupId = '';
      ListInstanceGroupOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListInstanceGroupOperationsRequest.prototype.pageToken = '';
      ListInstanceGroupOperationsRequest.prototype.filter = '';
      ListInstanceGroupOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListInstanceGroupOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ListInstanceGroupOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
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
      return ListInstanceGroupOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceGroupOperationsResponse = (function() {
      function ListInstanceGroupOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceGroupOperationsResponse.prototype.operations = $util.emptyArray;
      ListInstanceGroupOperationsResponse.prototype.nextPageToken = '';
      ListInstanceGroupOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListInstanceGroupOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ListInstanceGroupOperationsResponse();
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
      return ListInstanceGroupOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceGroupLogRecordsRequest = (function() {
      function ListInstanceGroupLogRecordsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceGroupLogRecordsRequest.prototype.instanceGroupId = '';
      ListInstanceGroupLogRecordsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListInstanceGroupLogRecordsRequest.prototype.pageToken = '';
      ListInstanceGroupLogRecordsRequest.prototype.filter = '';
      ListInstanceGroupLogRecordsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(10).string(m.instanceGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListInstanceGroupLogRecordsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.instanceGroupId = r.string();
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
      return ListInstanceGroupLogRecordsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListInstanceGroupLogRecordsResponse = (function() {
      function ListInstanceGroupLogRecordsResponse(p) {
        this.logRecords = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListInstanceGroupLogRecordsResponse.prototype.logRecords = $util.emptyArray;
      ListInstanceGroupLogRecordsResponse.prototype.nextPageToken = '';
      ListInstanceGroupLogRecordsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.logRecords != null && m.logRecords.length) {
          for (let i = 0; i < m.logRecords.length; ++i) $root.api.compute.v1.instancegroup.LogRecord.encode(m.logRecords[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListInstanceGroupLogRecordsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.logRecords && m.logRecords.length)) m.logRecords = [];
              m.logRecords.push($root.api.compute.v1.instancegroup.LogRecord.decode(r, r.uint32()));
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
      return ListInstanceGroupLogRecordsResponse;
    })();
  })(root);
  registar.register('api.compute.v1.instancegroup', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
