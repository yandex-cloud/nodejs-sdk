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
  (function($root) {
    $root.Code = (function() {
      let Code = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'OK')] = 0;
        values[(valuesById[1] = 'CANCELLED')] = 1;
        values[(valuesById[2] = 'UNKNOWN')] = 2;
        values[(valuesById[3] = 'INVALID_ARGUMENT')] = 3;
        values[(valuesById[4] = 'DEADLINE_EXCEEDED')] = 4;
        values[(valuesById[5] = 'NOT_FOUND')] = 5;
        values[(valuesById[6] = 'ALREADY_EXISTS')] = 6;
        values[(valuesById[7] = 'PERMISSION_DENIED')] = 7;
        values[(valuesById[16] = 'UNAUTHENTICATED')] = 16;
        values[(valuesById[8] = 'RESOURCE_EXHAUSTED')] = 8;
        values[(valuesById[9] = 'FAILED_PRECONDITION')] = 9;
        values[(valuesById[10] = 'ABORTED')] = 10;
        values[(valuesById[11] = 'OUT_OF_RANGE')] = 11;
        values[(valuesById[12] = 'UNIMPLEMENTED')] = 12;
        values[(valuesById[13] = 'INTERNAL')] = 13;
        values[(valuesById[14] = 'UNAVAILABLE')] = 14;
        values[(valuesById[15] = 'DATA_LOSS')] = 15;
        return values;
      })();
      return Code;
    })();
  })(root);
  (function($root) {
    $root.RetryInfo = (function() {
      function RetryInfo(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RetryInfo.prototype.retryDelay = null;
      RetryInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.retryDelay != null && m.hasOwnProperty('retryDelay')) $root.contrib.google.protobuf.Duration.encode(m.retryDelay, w.uint32(10).fork()).ldelim();
        return w;
      };
      RetryInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.RetryInfo();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.retryDelay = $root.contrib.google.protobuf.Duration.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RetryInfo;
    })();
  })(root);
  (function($root) {
    $root.DebugInfo = (function() {
      function DebugInfo(p) {
        this.stackEntries = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DebugInfo.prototype.stackEntries = $util.emptyArray;
      DebugInfo.prototype.detail = '';
      DebugInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.stackEntries != null && m.stackEntries.length) {
          for (let i = 0; i < m.stackEntries.length; ++i) w.uint32(10).string(m.stackEntries[i]);
        }
        if (m.detail != null && m.hasOwnProperty('detail')) w.uint32(18).string(m.detail);
        return w;
      };
      DebugInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.DebugInfo();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.stackEntries && m.stackEntries.length)) m.stackEntries = [];
              m.stackEntries.push(r.string());
              break;
            case 2:
              m.detail = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DebugInfo;
    })();
  })(root);
  (function($root) {
    $root.QuotaFailure = (function() {
      function QuotaFailure(p) {
        this.violations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      QuotaFailure.prototype.violations = $util.emptyArray;
      QuotaFailure.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.violations != null && m.violations.length) {
          for (let i = 0; i < m.violations.length; ++i) $root.contrib.google.rpc.QuotaFailure.Violation.encode(m.violations[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      QuotaFailure.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.QuotaFailure();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.violations && m.violations.length)) m.violations = [];
              m.violations.push($root.contrib.google.rpc.QuotaFailure.Violation.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      QuotaFailure.Violation = (function() {
        function Violation(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Violation.prototype.subject = '';
        Violation.prototype.description = '';
        Violation.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.subject != null && m.hasOwnProperty('subject')) w.uint32(10).string(m.subject);
          if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
          return w;
        };
        Violation.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.rpc.QuotaFailure.Violation();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.subject = r.string();
                break;
              case 2:
                m.description = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Violation;
      })();
      return QuotaFailure;
    })();
  })(root);
  (function($root) {
    $root.PreconditionFailure = (function() {
      function PreconditionFailure(p) {
        this.violations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      PreconditionFailure.prototype.violations = $util.emptyArray;
      PreconditionFailure.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.violations != null && m.violations.length) {
          for (let i = 0; i < m.violations.length; ++i) $root.contrib.google.rpc.PreconditionFailure.Violation.encode(m.violations[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      PreconditionFailure.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.PreconditionFailure();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.violations && m.violations.length)) m.violations = [];
              m.violations.push($root.contrib.google.rpc.PreconditionFailure.Violation.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      PreconditionFailure.Violation = (function() {
        function Violation(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Violation.prototype.type = '';
        Violation.prototype.subject = '';
        Violation.prototype.description = '';
        Violation.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.type != null && m.hasOwnProperty('type')) w.uint32(10).string(m.type);
          if (m.subject != null && m.hasOwnProperty('subject')) w.uint32(18).string(m.subject);
          if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
          return w;
        };
        Violation.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.rpc.PreconditionFailure.Violation();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.type = r.string();
                break;
              case 2:
                m.subject = r.string();
                break;
              case 3:
                m.description = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Violation;
      })();
      return PreconditionFailure;
    })();
  })(root);
  (function($root) {
    $root.BadRequest = (function() {
      function BadRequest(p) {
        this.fieldViolations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      BadRequest.prototype.fieldViolations = $util.emptyArray;
      BadRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.fieldViolations != null && m.fieldViolations.length) {
          for (let i = 0; i < m.fieldViolations.length; ++i) $root.contrib.google.rpc.BadRequest.FieldViolation.encode(m.fieldViolations[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      BadRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.BadRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.fieldViolations && m.fieldViolations.length)) m.fieldViolations = [];
              m.fieldViolations.push($root.contrib.google.rpc.BadRequest.FieldViolation.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      BadRequest.FieldViolation = (function() {
        function FieldViolation(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        FieldViolation.prototype.field = '';
        FieldViolation.prototype.description = '';
        FieldViolation.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.field != null && m.hasOwnProperty('field')) w.uint32(10).string(m.field);
          if (m.description != null && m.hasOwnProperty('description')) w.uint32(18).string(m.description);
          return w;
        };
        FieldViolation.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.rpc.BadRequest.FieldViolation();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.field = r.string();
                break;
              case 2:
                m.description = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return FieldViolation;
      })();
      return BadRequest;
    })();
  })(root);
  (function($root) {
    $root.RequestInfo = (function() {
      function RequestInfo(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      RequestInfo.prototype.requestId = '';
      RequestInfo.prototype.servingData = '';
      RequestInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.requestId != null && m.hasOwnProperty('requestId')) w.uint32(10).string(m.requestId);
        if (m.servingData != null && m.hasOwnProperty('servingData')) w.uint32(18).string(m.servingData);
        return w;
      };
      RequestInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.RequestInfo();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.requestId = r.string();
              break;
            case 2:
              m.servingData = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return RequestInfo;
    })();
  })(root);
  (function($root) {
    $root.ResourceInfo = (function() {
      function ResourceInfo(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ResourceInfo.prototype.resourceType = '';
      ResourceInfo.prototype.resourceName = '';
      ResourceInfo.prototype.owner = '';
      ResourceInfo.prototype.description = '';
      ResourceInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.resourceType != null && m.hasOwnProperty('resourceType')) w.uint32(10).string(m.resourceType);
        if (m.resourceName != null && m.hasOwnProperty('resourceName')) w.uint32(18).string(m.resourceName);
        if (m.owner != null && m.hasOwnProperty('owner')) w.uint32(26).string(m.owner);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        return w;
      };
      ResourceInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.ResourceInfo();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.resourceType = r.string();
              break;
            case 2:
              m.resourceName = r.string();
              break;
            case 3:
              m.owner = r.string();
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
      return ResourceInfo;
    })();
  })(root);
  (function($root) {
    $root.Help = (function() {
      function Help(p) {
        this.links = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Help.prototype.links = $util.emptyArray;
      Help.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.links != null && m.links.length) {
          for (let i = 0; i < m.links.length; ++i) $root.contrib.google.rpc.Help.Link.encode(m.links[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      Help.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.Help();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.links && m.links.length)) m.links = [];
              m.links.push($root.contrib.google.rpc.Help.Link.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Help.Link = (function() {
        function Link(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Link.prototype.description = '';
        Link.prototype.url = '';
        Link.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.description != null && m.hasOwnProperty('description')) w.uint32(10).string(m.description);
          if (m.url != null && m.hasOwnProperty('url')) w.uint32(18).string(m.url);
          return w;
        };
        Link.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.rpc.Help.Link();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.description = r.string();
                break;
              case 2:
                m.url = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Link;
      })();
      return Help;
    })();
  })(root);
  (function($root) {
    $root.LocalizedMessage = (function() {
      function LocalizedMessage(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      LocalizedMessage.prototype.locale = '';
      LocalizedMessage.prototype.message = '';
      LocalizedMessage.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.locale != null && m.hasOwnProperty('locale')) w.uint32(10).string(m.locale);
        if (m.message != null && m.hasOwnProperty('message')) w.uint32(18).string(m.message);
        return w;
      };
      LocalizedMessage.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.LocalizedMessage();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.locale = r.string();
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
      return LocalizedMessage;
    })();
  })(root);
  (function($root) {
    $root.Status = (function() {
      function Status(p) {
        this.details = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Status.prototype.code = 0;
      Status.prototype.message = '';
      Status.prototype.details = $util.emptyArray;
      Status.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.code != null && m.hasOwnProperty('code')) w.uint32(8).int32(m.code);
        if (m.message != null && m.hasOwnProperty('message')) w.uint32(18).string(m.message);
        if (m.details != null && m.details.length) {
          for (let i = 0; i < m.details.length; ++i) $root.contrib.google.protobuf.Any.encode(m.details[i], w.uint32(26).fork()).ldelim();
        }
        return w;
      };
      Status.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.rpc.Status();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.code = r.int32();
              break;
            case 2:
              m.message = r.string();
              break;
            case 3:
              if (!(m.details && m.details.length)) m.details = [];
              m.details.push($root.contrib.google.protobuf.Any.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Status;
    })();
  })(root);
  registar.register('contrib.google.rpc', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
