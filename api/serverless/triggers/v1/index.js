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
    $root.Predicate = (function() {
      function Predicate(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Predicate.prototype.andPredicate = null;
      Predicate.prototype.fieldValuePredicate = null;
      let $oneOfFields;
      Object.defineProperty(Predicate.prototype, 'predicate', {
        get: $util.oneOfGetter(($oneOfFields = ['andPredicate', 'fieldValuePredicate'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Predicate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.andPredicate != null && m.hasOwnProperty('andPredicate')) $root.api.serverless.triggers.v1.AndPredicate.encode(m.andPredicate, w.uint32(18).fork()).ldelim();
        if (m.fieldValuePredicate != null && m.hasOwnProperty('fieldValuePredicate')) $root.api.serverless.triggers.v1.FieldValuePredicate.encode(m.fieldValuePredicate, w.uint32(34).fork()).ldelim();
        return w;
      };
      Predicate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.Predicate();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 2:
              m.andPredicate = $root.api.serverless.triggers.v1.AndPredicate.decode(r, r.uint32());
              break;
            case 4:
              m.fieldValuePredicate = $root.api.serverless.triggers.v1.FieldValuePredicate.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Predicate;
    })();
  })(root);
  (function($root) {
    $root.AndPredicate = (function() {
      function AndPredicate(p) {
        this.predicate = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AndPredicate.prototype.predicate = $util.emptyArray;
      AndPredicate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.predicate != null && m.predicate.length) {
          for (let i = 0; i < m.predicate.length; ++i) $root.api.serverless.triggers.v1.Predicate.encode(m.predicate[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      AndPredicate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.AndPredicate();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.predicate && m.predicate.length)) m.predicate = [];
              m.predicate.push($root.api.serverless.triggers.v1.Predicate.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AndPredicate;
    })();
  })(root);
  (function($root) {
    $root.FieldValuePredicate = (function() {
      function FieldValuePredicate(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FieldValuePredicate.prototype.fieldPath = '';
      FieldValuePredicate.prototype.exact = '';
      FieldValuePredicate.prototype.prefix = '';
      FieldValuePredicate.prototype.suffix = '';
      let $oneOfFields;
      Object.defineProperty(FieldValuePredicate.prototype, 'value', {
        get: $util.oneOfGetter(($oneOfFields = ['exact', 'prefix', 'suffix'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      FieldValuePredicate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.fieldPath != null && m.hasOwnProperty('fieldPath')) w.uint32(10).string(m.fieldPath);
        if (m.exact != null && m.hasOwnProperty('exact')) w.uint32(26).string(m.exact);
        if (m.prefix != null && m.hasOwnProperty('prefix')) w.uint32(66).string(m.prefix);
        if (m.suffix != null && m.hasOwnProperty('suffix')) w.uint32(74).string(m.suffix);
        return w;
      };
      FieldValuePredicate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.FieldValuePredicate();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.fieldPath = r.string();
              break;
            case 3:
              m.exact = r.string();
              break;
            case 8:
              m.prefix = r.string();
              break;
            case 9:
              m.suffix = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FieldValuePredicate;
    })();
  })(root);
  (function($root) {
    $root.TriggerType = (function() {
      let TriggerType = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'TRIGGER_TYPE_UNSPECIFIED')] = 0;
        values[(valuesById[2] = 'TIMER')] = 2;
        values[(valuesById[3] = 'MESSAGE_QUEUE')] = 3;
        values[(valuesById[4] = 'IOT_MESSAGE')] = 4;
        values[(valuesById[5] = 'OBJECT_STORAGE')] = 5;
        values[(valuesById[6] = 'CONTAINER_REGISTRY')] = 6;
        return values;
      })();
      return TriggerType;
    })();
  })(root);
  (function($root) {
    $root.Trigger = (function() {
      function Trigger(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Trigger.prototype.id = '';
      Trigger.prototype.folderId = '';
      Trigger.prototype.createdAt = null;
      Trigger.prototype.name = '';
      Trigger.prototype.description = '';
      Trigger.prototype.labels = $util.emptyObject;
      Trigger.prototype.rule = null;
      Trigger.encode = function encode(m, w) {
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
        if (m.rule != null && m.hasOwnProperty('rule')) $root.api.serverless.triggers.v1.Trigger.Rule.encode(m.rule, w.uint32(66).fork()).ldelim();
        return w;
      };
      Trigger.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.Trigger(),
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
            case 8:
              m.rule = $root.api.serverless.triggers.v1.Trigger.Rule.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Trigger.Rule = (function() {
        function Rule(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Rule.prototype.timer = null;
        Rule.prototype.messageQueue = null;
        Rule.prototype.iotMessage = null;
        Rule.prototype.objectStorage = null;
        Rule.prototype.containerRegistry = null;
        let $oneOfFields;
        Object.defineProperty(Rule.prototype, 'rule', {
          get: $util.oneOfGetter(($oneOfFields = ['timer', 'messageQueue', 'iotMessage', 'objectStorage', 'containerRegistry'])),
          set: $util.oneOfSetter($oneOfFields)
        });
        Rule.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.timer != null && m.hasOwnProperty('timer')) $root.api.serverless.triggers.v1.Trigger.Timer.encode(m.timer, w.uint32(18).fork()).ldelim();
          if (m.messageQueue != null && m.hasOwnProperty('messageQueue')) $root.api.serverless.triggers.v1.Trigger.MessageQueue.encode(m.messageQueue, w.uint32(26).fork()).ldelim();
          if (m.iotMessage != null && m.hasOwnProperty('iotMessage')) $root.api.serverless.triggers.v1.Trigger.IoTMessage.encode(m.iotMessage, w.uint32(34).fork()).ldelim();
          if (m.objectStorage != null && m.hasOwnProperty('objectStorage')) $root.api.serverless.triggers.v1.Trigger.ObjectStorage.encode(m.objectStorage, w.uint32(42).fork()).ldelim();
          if (m.containerRegistry != null && m.hasOwnProperty('containerRegistry')) $root.api.serverless.triggers.v1.Trigger.ContainerRegistry.encode(m.containerRegistry, w.uint32(50).fork()).ldelim();
          return w;
        };
        Rule.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.serverless.triggers.v1.Trigger.Rule();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 2:
                m.timer = $root.api.serverless.triggers.v1.Trigger.Timer.decode(r, r.uint32());
                break;
              case 3:
                m.messageQueue = $root.api.serverless.triggers.v1.Trigger.MessageQueue.decode(r, r.uint32());
                break;
              case 4:
                m.iotMessage = $root.api.serverless.triggers.v1.Trigger.IoTMessage.decode(r, r.uint32());
                break;
              case 5:
                m.objectStorage = $root.api.serverless.triggers.v1.Trigger.ObjectStorage.decode(r, r.uint32());
                break;
              case 6:
                m.containerRegistry = $root.api.serverless.triggers.v1.Trigger.ContainerRegistry.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Rule;
      })();
      Trigger.Timer = (function() {
        function Timer(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Timer.prototype.cronExpression = '';
        Timer.prototype.invokeFunction = null;
        Timer.prototype.invokeFunctionWithRetry = null;
        let $oneOfFields;
        Object.defineProperty(Timer.prototype, 'action', {
          get: $util.oneOfGetter(($oneOfFields = ['invokeFunction', 'invokeFunctionWithRetry'])),
          set: $util.oneOfSetter($oneOfFields)
        });
        Timer.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.cronExpression != null && m.hasOwnProperty('cronExpression')) w.uint32(10).string(m.cronExpression);
          if (m.invokeFunction != null && m.hasOwnProperty('invokeFunction')) $root.api.serverless.triggers.v1.InvokeFunctionOnce.encode(m.invokeFunction, w.uint32(810).fork()).ldelim();
          if (m.invokeFunctionWithRetry != null && m.hasOwnProperty('invokeFunctionWithRetry')) $root.api.serverless.triggers.v1.InvokeFunctionWithRetry.encode(m.invokeFunctionWithRetry, w.uint32(826).fork()).ldelim();
          return w;
        };
        Timer.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.serverless.triggers.v1.Trigger.Timer();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.cronExpression = r.string();
                break;
              case 101:
                m.invokeFunction = $root.api.serverless.triggers.v1.InvokeFunctionOnce.decode(r, r.uint32());
                break;
              case 103:
                m.invokeFunctionWithRetry = $root.api.serverless.triggers.v1.InvokeFunctionWithRetry.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Timer;
      })();
      Trigger.MessageQueue = (function() {
        function MessageQueue(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        MessageQueue.prototype.queueId = '';
        MessageQueue.prototype.serviceAccountId = '';
        MessageQueue.prototype.batchSettings = null;
        MessageQueue.prototype.visibilityTimeout = null;
        MessageQueue.prototype.invokeFunction = null;
        let $oneOfFields;
        Object.defineProperty(MessageQueue.prototype, 'action', {
          get: $util.oneOfGetter(($oneOfFields = ['invokeFunction'])),
          set: $util.oneOfSetter($oneOfFields)
        });
        MessageQueue.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(26).string(m.serviceAccountId);
          if (m.batchSettings != null && m.hasOwnProperty('batchSettings')) $root.api.serverless.triggers.v1.BatchSettings.encode(m.batchSettings, w.uint32(34).fork()).ldelim();
          if (m.visibilityTimeout != null && m.hasOwnProperty('visibilityTimeout')) $root.contrib.google.protobuf.Duration.encode(m.visibilityTimeout, w.uint32(42).fork()).ldelim();
          if (m.queueId != null && m.hasOwnProperty('queueId')) w.uint32(90).string(m.queueId);
          if (m.invokeFunction != null && m.hasOwnProperty('invokeFunction')) $root.api.serverless.triggers.v1.InvokeFunctionOnce.encode(m.invokeFunction, w.uint32(810).fork()).ldelim();
          return w;
        };
        MessageQueue.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.serverless.triggers.v1.Trigger.MessageQueue();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 11:
                m.queueId = r.string();
                break;
              case 3:
                m.serviceAccountId = r.string();
                break;
              case 4:
                m.batchSettings = $root.api.serverless.triggers.v1.BatchSettings.decode(r, r.uint32());
                break;
              case 5:
                m.visibilityTimeout = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
                break;
              case 101:
                m.invokeFunction = $root.api.serverless.triggers.v1.InvokeFunctionOnce.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return MessageQueue;
      })();
      Trigger.IoTMessage = (function() {
        function IoTMessage(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        IoTMessage.prototype.registryId = '';
        IoTMessage.prototype.deviceId = '';
        IoTMessage.prototype.mqttTopic = '';
        IoTMessage.prototype.invokeFunction = null;
        let $oneOfFields;
        Object.defineProperty(IoTMessage.prototype, 'action', {
          get: $util.oneOfGetter(($oneOfFields = ['invokeFunction'])),
          set: $util.oneOfSetter($oneOfFields)
        });
        IoTMessage.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(10).string(m.registryId);
          if (m.deviceId != null && m.hasOwnProperty('deviceId')) w.uint32(18).string(m.deviceId);
          if (m.mqttTopic != null && m.hasOwnProperty('mqttTopic')) w.uint32(26).string(m.mqttTopic);
          if (m.invokeFunction != null && m.hasOwnProperty('invokeFunction')) $root.api.serverless.triggers.v1.InvokeFunctionWithRetry.encode(m.invokeFunction, w.uint32(810).fork()).ldelim();
          return w;
        };
        IoTMessage.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.serverless.triggers.v1.Trigger.IoTMessage();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.registryId = r.string();
                break;
              case 2:
                m.deviceId = r.string();
                break;
              case 3:
                m.mqttTopic = r.string();
                break;
              case 101:
                m.invokeFunction = $root.api.serverless.triggers.v1.InvokeFunctionWithRetry.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return IoTMessage;
      })();
      let ObjectStorageEventType = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT')] = 1;
        values[(valuesById[2] = 'OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT')] = 2;
        values[(valuesById[3] = 'OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT')] = 3;
        return values;
      })();
      Trigger.ObjectStorageEventType = ObjectStorageEventType;
      Trigger.ObjectStorage = (function() {
        function ObjectStorage(p) {
          this.eventType = [];
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ObjectStorage.prototype.eventType = $util.emptyArray;
        ObjectStorage.prototype.bucketId = '';
        ObjectStorage.prototype.prefix = '';
        ObjectStorage.prototype.suffix = '';
        ObjectStorage.prototype.invokeFunction = null;
        let $oneOfFields;
        Object.defineProperty(ObjectStorage.prototype, 'action', {
          get: $util.oneOfGetter(($oneOfFields = ['invokeFunction'])),
          set: $util.oneOfSetter($oneOfFields)
        });
        ObjectStorage.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.eventType != null && m.eventType.length) {
            w.uint32(26).fork();
            for (let i = 0; i < m.eventType.length; ++i) w.int32(m.eventType[i]);
            w.ldelim();
          }
          if (m.bucketId != null && m.hasOwnProperty('bucketId')) w.uint32(34).string(m.bucketId);
          if (m.prefix != null && m.hasOwnProperty('prefix')) w.uint32(50).string(m.prefix);
          if (m.suffix != null && m.hasOwnProperty('suffix')) w.uint32(58).string(m.suffix);
          if (m.invokeFunction != null && m.hasOwnProperty('invokeFunction')) $root.api.serverless.triggers.v1.InvokeFunctionWithRetry.encode(m.invokeFunction, w.uint32(810).fork()).ldelim();
          return w;
        };
        ObjectStorage.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.serverless.triggers.v1.Trigger.ObjectStorage();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 3:
                if (!(m.eventType && m.eventType.length)) m.eventType = [];
                if ((t & 7) === 2) {
                  let c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.eventType.push(r.int32());
                } else m.eventType.push(r.int32());
                break;
              case 4:
                m.bucketId = r.string();
                break;
              case 6:
                m.prefix = r.string();
                break;
              case 7:
                m.suffix = r.string();
                break;
              case 101:
                m.invokeFunction = $root.api.serverless.triggers.v1.InvokeFunctionWithRetry.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return ObjectStorage;
      })();
      let ContainerRegistryEventType = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE')] = 1;
        values[(valuesById[2] = 'CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE')] = 2;
        values[(valuesById[3] = 'CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG')] = 3;
        values[(valuesById[4] = 'CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG')] = 4;
        return values;
      })();
      Trigger.ContainerRegistryEventType = ContainerRegistryEventType;
      Trigger.ContainerRegistry = (function() {
        function ContainerRegistry(p) {
          this.eventType = [];
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ContainerRegistry.prototype.eventType = $util.emptyArray;
        ContainerRegistry.prototype.registryId = '';
        ContainerRegistry.prototype.imageName = '';
        ContainerRegistry.prototype.tag = '';
        ContainerRegistry.prototype.invokeFunction = null;
        let $oneOfFields;
        Object.defineProperty(ContainerRegistry.prototype, 'action', {
          get: $util.oneOfGetter(($oneOfFields = ['invokeFunction'])),
          set: $util.oneOfSetter($oneOfFields)
        });
        ContainerRegistry.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.eventType != null && m.eventType.length) {
            w.uint32(26).fork();
            for (let i = 0; i < m.eventType.length; ++i) w.int32(m.eventType[i]);
            w.ldelim();
          }
          if (m.registryId != null && m.hasOwnProperty('registryId')) w.uint32(34).string(m.registryId);
          if (m.imageName != null && m.hasOwnProperty('imageName')) w.uint32(42).string(m.imageName);
          if (m.tag != null && m.hasOwnProperty('tag')) w.uint32(50).string(m.tag);
          if (m.invokeFunction != null && m.hasOwnProperty('invokeFunction')) $root.api.serverless.triggers.v1.InvokeFunctionWithRetry.encode(m.invokeFunction, w.uint32(810).fork()).ldelim();
          return w;
        };
        ContainerRegistry.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.serverless.triggers.v1.Trigger.ContainerRegistry();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 3:
                if (!(m.eventType && m.eventType.length)) m.eventType = [];
                if ((t & 7) === 2) {
                  let c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.eventType.push(r.int32());
                } else m.eventType.push(r.int32());
                break;
              case 4:
                m.registryId = r.string();
                break;
              case 5:
                m.imageName = r.string();
                break;
              case 6:
                m.tag = r.string();
                break;
              case 101:
                m.invokeFunction = $root.api.serverless.triggers.v1.InvokeFunctionWithRetry.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return ContainerRegistry;
      })();
      return Trigger;
    })();
  })(root);
  (function($root) {
    $root.InvokeFunctionOnce = (function() {
      function InvokeFunctionOnce(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      InvokeFunctionOnce.prototype.functionId = '';
      InvokeFunctionOnce.prototype.functionTag = '';
      InvokeFunctionOnce.prototype.serviceAccountId = '';
      InvokeFunctionOnce.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        if (m.functionTag != null && m.hasOwnProperty('functionTag')) w.uint32(18).string(m.functionTag);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(26).string(m.serviceAccountId);
        return w;
      };
      InvokeFunctionOnce.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.InvokeFunctionOnce();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            case 2:
              m.functionTag = r.string();
              break;
            case 3:
              m.serviceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return InvokeFunctionOnce;
    })();
  })(root);
  (function($root) {
    $root.InvokeFunctionWithRetry = (function() {
      function InvokeFunctionWithRetry(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      InvokeFunctionWithRetry.prototype.functionId = '';
      InvokeFunctionWithRetry.prototype.functionTag = '';
      InvokeFunctionWithRetry.prototype.serviceAccountId = '';
      InvokeFunctionWithRetry.prototype.retrySettings = null;
      InvokeFunctionWithRetry.prototype.deadLetterQueue = null;
      InvokeFunctionWithRetry.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.functionId != null && m.hasOwnProperty('functionId')) w.uint32(10).string(m.functionId);
        if (m.functionTag != null && m.hasOwnProperty('functionTag')) w.uint32(18).string(m.functionTag);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(26).string(m.serviceAccountId);
        if (m.retrySettings != null && m.hasOwnProperty('retrySettings')) $root.api.serverless.triggers.v1.RetrySettings.encode(m.retrySettings, w.uint32(34).fork()).ldelim();
        if (m.deadLetterQueue != null && m.hasOwnProperty('deadLetterQueue')) $root.api.serverless.triggers.v1.PutQueueMessage.encode(m.deadLetterQueue, w.uint32(42).fork()).ldelim();
        return w;
      };
      InvokeFunctionWithRetry.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.InvokeFunctionWithRetry();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.functionId = r.string();
              break;
            case 2:
              m.functionTag = r.string();
              break;
            case 3:
              m.serviceAccountId = r.string();
              break;
            case 4:
              m.retrySettings = $root.api.serverless.triggers.v1.RetrySettings.decode(r, r.uint32());
              break;
            case 5:
              m.deadLetterQueue = $root.api.serverless.triggers.v1.PutQueueMessage.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return InvokeFunctionWithRetry;
    })();
  })(root);
  (function($root) {
    $root.PutQueueMessage = (function() {
      function PutQueueMessage(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PutQueueMessage.prototype.queueId = '';
      PutQueueMessage.prototype.serviceAccountId = '';
      PutQueueMessage.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(18).string(m.serviceAccountId);
        if (m.queueId != null && m.hasOwnProperty('queueId')) w.uint32(90).string(m.queueId);
        return w;
      };
      PutQueueMessage.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.PutQueueMessage();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 11:
              m.queueId = r.string();
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
      return PutQueueMessage;
    })();
  })(root);
  (function($root) {
    $root.BatchSettings = (function() {
      function BatchSettings(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      BatchSettings.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      BatchSettings.prototype.cutoff = null;
      BatchSettings.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.size != null && m.hasOwnProperty('size')) w.uint32(8).int64(m.size);
        if (m.cutoff != null && m.hasOwnProperty('cutoff')) $root.contrib.google.protobuf.Duration.encode(m.cutoff, w.uint32(18).fork()).ldelim();
        return w;
      };
      BatchSettings.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.BatchSettings();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.size = r.int64();
              break;
            case 2:
              m.cutoff = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return BatchSettings;
    })();
  })(root);
  (function($root) {
    $root.RetrySettings = (function() {
      function RetrySettings(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RetrySettings.prototype.retryAttempts = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      RetrySettings.prototype.interval = null;
      RetrySettings.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.retryAttempts != null && m.hasOwnProperty('retryAttempts')) w.uint32(8).int64(m.retryAttempts);
        if (m.interval != null && m.hasOwnProperty('interval')) $root.contrib.google.protobuf.Duration.encode(m.interval, w.uint32(18).fork()).ldelim();
        return w;
      };
      RetrySettings.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.RetrySettings();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.retryAttempts = r.int64();
              break;
            case 2:
              m.interval = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RetrySettings;
    })();
  })(root);
  (function($root) {
    $root.TriggerService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.TriggerService.makeGrpcConstructor());
    };
    $root.TriggerService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.triggers.v1.GetTriggerRequest,
          responseType: $root.api.serverless.triggers.v1.Trigger,
          requestSerialize: r => {
            return $root.api.serverless.triggers.v1.GetTriggerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.triggers.v1.GetTriggerRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.triggers.v1.Trigger.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.triggers.v1.Trigger.decode
        },
        list: {
          path: '/yandex.cloud.serverless.triggers.v1.TriggerService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.triggers.v1.ListTriggersRequest,
          responseType: $root.api.serverless.triggers.v1.ListTriggersResponse,
          requestSerialize: r => {
            return $root.api.serverless.triggers.v1.ListTriggersRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.triggers.v1.ListTriggersRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.triggers.v1.ListTriggersResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.triggers.v1.ListTriggersResponse.decode
        },
        create: {
          path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.triggers.v1.CreateTriggerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.triggers.v1.CreateTriggerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.triggers.v1.CreateTriggerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.triggers.v1.UpdateTriggerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.triggers.v1.UpdateTriggerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.triggers.v1.UpdateTriggerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.triggers.v1.DeleteTriggerRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.serverless.triggers.v1.DeleteTriggerRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.triggers.v1.DeleteTriggerRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.serverless.triggers.v1.ListTriggerOperationsRequest,
          responseType: $root.api.serverless.triggers.v1.ListTriggerOperationsResponse,
          requestSerialize: r => {
            return $root.api.serverless.triggers.v1.ListTriggerOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.serverless.triggers.v1.ListTriggerOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.serverless.triggers.v1.ListTriggerOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.serverless.triggers.v1.ListTriggerOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'serverless-triggers';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetTriggerRequest = (function() {
      function GetTriggerRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetTriggerRequest.prototype.triggerId = '';
      GetTriggerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.triggerId != null && m.hasOwnProperty('triggerId')) w.uint32(10).string(m.triggerId);
        return w;
      };
      GetTriggerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.GetTriggerRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.triggerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetTriggerRequest;
    })();
  })(root);
  (function($root) {
    $root.ListTriggersRequest = (function() {
      function ListTriggersRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListTriggersRequest.prototype.folderId = '';
      ListTriggersRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListTriggersRequest.prototype.pageToken = '';
      ListTriggersRequest.prototype.filter = '';
      ListTriggersRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListTriggersRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.ListTriggersRequest();
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
      return ListTriggersRequest;
    })();
  })(root);
  (function($root) {
    $root.ListTriggersResponse = (function() {
      function ListTriggersResponse(p) {
        this.triggers = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListTriggersResponse.prototype.triggers = $util.emptyArray;
      ListTriggersResponse.prototype.nextPageToken = '';
      ListTriggersResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.triggers != null && m.triggers.length) {
          for (let i = 0; i < m.triggers.length; ++i) $root.api.serverless.triggers.v1.Trigger.encode(m.triggers[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListTriggersResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.ListTriggersResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.triggers && m.triggers.length)) m.triggers = [];
              m.triggers.push($root.api.serverless.triggers.v1.Trigger.decode(r, r.uint32()));
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
      return ListTriggersResponse;
    })();
  })(root);
  (function($root) {
    $root.CreateTriggerRequest = (function() {
      function CreateTriggerRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateTriggerRequest.prototype.folderId = '';
      CreateTriggerRequest.prototype.name = '';
      CreateTriggerRequest.prototype.description = '';
      CreateTriggerRequest.prototype.labels = $util.emptyObject;
      CreateTriggerRequest.prototype.rule = null;
      CreateTriggerRequest.encode = function encode(m, w) {
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
        if (m.rule != null && m.hasOwnProperty('rule')) $root.api.serverless.triggers.v1.Trigger.Rule.encode(m.rule, w.uint32(42).fork()).ldelim();
        return w;
      };
      CreateTriggerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.CreateTriggerRequest(),
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
              m.rule = $root.api.serverless.triggers.v1.Trigger.Rule.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateTriggerRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateTriggerMetadata = (function() {
      function CreateTriggerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateTriggerMetadata.prototype.triggerId = '';
      CreateTriggerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.triggerId != null && m.hasOwnProperty('triggerId')) w.uint32(10).string(m.triggerId);
        return w;
      };
      CreateTriggerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.CreateTriggerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.triggerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateTriggerMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateTriggerRequest = (function() {
      function UpdateTriggerRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateTriggerRequest.prototype.triggerId = '';
      UpdateTriggerRequest.prototype.updateMask = null;
      UpdateTriggerRequest.prototype.name = '';
      UpdateTriggerRequest.prototype.description = '';
      UpdateTriggerRequest.prototype.labels = $util.emptyObject;
      UpdateTriggerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.triggerId != null && m.hasOwnProperty('triggerId')) w.uint32(10).string(m.triggerId);
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
      UpdateTriggerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.UpdateTriggerRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.triggerId = r.string();
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
      return UpdateTriggerRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateTriggerMetadata = (function() {
      function UpdateTriggerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateTriggerMetadata.prototype.triggerId = '';
      UpdateTriggerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.triggerId != null && m.hasOwnProperty('triggerId')) w.uint32(10).string(m.triggerId);
        return w;
      };
      UpdateTriggerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.UpdateTriggerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.triggerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateTriggerMetadata;
    })();
  })(root);
  (function($root) {
    $root.DeleteTriggerRequest = (function() {
      function DeleteTriggerRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteTriggerRequest.prototype.triggerId = '';
      DeleteTriggerRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.triggerId != null && m.hasOwnProperty('triggerId')) w.uint32(10).string(m.triggerId);
        return w;
      };
      DeleteTriggerRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.DeleteTriggerRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.triggerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteTriggerRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteTriggerMetadata = (function() {
      function DeleteTriggerMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteTriggerMetadata.prototype.triggerId = '';
      DeleteTriggerMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.triggerId != null && m.hasOwnProperty('triggerId')) w.uint32(10).string(m.triggerId);
        return w;
      };
      DeleteTriggerMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.DeleteTriggerMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.triggerId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteTriggerMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListTriggerOperationsRequest = (function() {
      function ListTriggerOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListTriggerOperationsRequest.prototype.triggerId = '';
      ListTriggerOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListTriggerOperationsRequest.prototype.pageToken = '';
      ListTriggerOperationsRequest.prototype.filter = '';
      ListTriggerOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.triggerId != null && m.hasOwnProperty('triggerId')) w.uint32(10).string(m.triggerId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListTriggerOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.ListTriggerOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.triggerId = r.string();
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
      return ListTriggerOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListTriggerOperationsResponse = (function() {
      function ListTriggerOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListTriggerOperationsResponse.prototype.operations = $util.emptyArray;
      ListTriggerOperationsResponse.prototype.nextPageToken = '';
      ListTriggerOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListTriggerOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.serverless.triggers.v1.ListTriggerOperationsResponse();
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
      return ListTriggerOperationsResponse;
    })();
  })(root);
  registar.register('api.serverless.triggers.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
