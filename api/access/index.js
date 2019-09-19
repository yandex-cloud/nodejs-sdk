module.exports = (function() {
  const $protobuf = require('protobufjs');
  const grpc = require('grpc');
  const registar = require('../../lib/registar.js');
  const util = require('../../lib/util.js');
  const yc = require('../../index.js');
  const $Reader = $protobuf.Reader;
  const $Writer = $protobuf.Writer;
  const $util = $protobuf.util;
  let root = {};
  (function($root) {
    $root.Subject = (function() {
      function Subject(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Subject.prototype.id = '';
      Subject.prototype.type = '';
      Subject.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.type != null && m.hasOwnProperty('type')) w.uint32(18).string(m.type);
        return w;
      };
      Subject.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.Subject();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.type = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Subject;
    })();
  })(root);
  (function($root) {
    $root.AccessBinding = (function() {
      function AccessBinding(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AccessBinding.prototype.roleId = '';
      AccessBinding.prototype.subject = null;
      AccessBinding.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.roleId != null && m.hasOwnProperty('roleId')) w.uint32(10).string(m.roleId);
        if (m.subject != null && m.hasOwnProperty('subject')) $root.api.access.Subject.encode(m.subject, w.uint32(18).fork()).ldelim();
        return w;
      };
      AccessBinding.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.AccessBinding();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.roleId = r.string();
              break;
            case 2:
              m.subject = $root.api.access.Subject.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AccessBinding;
    })();
  })(root);
  (function($root) {
    $root.ListAccessBindingsRequest = (function() {
      function ListAccessBindingsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListAccessBindingsRequest.prototype.resourceId = '';
      ListAccessBindingsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListAccessBindingsRequest.prototype.pageToken = '';
      ListAccessBindingsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.resourceId != null && m.hasOwnProperty('resourceId')) w.uint32(10).string(m.resourceId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        return w;
      };
      ListAccessBindingsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.ListAccessBindingsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.resourceId = r.string();
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
      return ListAccessBindingsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListAccessBindingsResponse = (function() {
      function ListAccessBindingsResponse(p) {
        this.accessBindings = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListAccessBindingsResponse.prototype.accessBindings = $util.emptyArray;
      ListAccessBindingsResponse.prototype.nextPageToken = '';
      ListAccessBindingsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.accessBindings != null && m.accessBindings.length) {
          for (let i = 0; i < m.accessBindings.length; ++i) $root.api.access.AccessBinding.encode(m.accessBindings[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListAccessBindingsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.ListAccessBindingsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.accessBindings && m.accessBindings.length)) m.accessBindings = [];
              m.accessBindings.push($root.api.access.AccessBinding.decode(r, r.uint32()));
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
      return ListAccessBindingsResponse;
    })();
  })(root);
  (function($root) {
    $root.SetAccessBindingsRequest = (function() {
      function SetAccessBindingsRequest(p) {
        this.accessBindings = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SetAccessBindingsRequest.prototype.resourceId = '';
      SetAccessBindingsRequest.prototype.accessBindings = $util.emptyArray;
      SetAccessBindingsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.resourceId != null && m.hasOwnProperty('resourceId')) w.uint32(10).string(m.resourceId);
        if (m.accessBindings != null && m.accessBindings.length) {
          for (let i = 0; i < m.accessBindings.length; ++i) $root.api.access.AccessBinding.encode(m.accessBindings[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      SetAccessBindingsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.SetAccessBindingsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.resourceId = r.string();
              break;
            case 2:
              if (!(m.accessBindings && m.accessBindings.length)) m.accessBindings = [];
              m.accessBindings.push($root.api.access.AccessBinding.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SetAccessBindingsRequest;
    })();
  })(root);
  (function($root) {
    $root.SetAccessBindingsMetadata = (function() {
      function SetAccessBindingsMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SetAccessBindingsMetadata.prototype.resourceId = '';
      SetAccessBindingsMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.resourceId != null && m.hasOwnProperty('resourceId')) w.uint32(10).string(m.resourceId);
        return w;
      };
      SetAccessBindingsMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.SetAccessBindingsMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.resourceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SetAccessBindingsMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateAccessBindingsRequest = (function() {
      function UpdateAccessBindingsRequest(p) {
        this.accessBindingDeltas = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateAccessBindingsRequest.prototype.resourceId = '';
      UpdateAccessBindingsRequest.prototype.accessBindingDeltas = $util.emptyArray;
      UpdateAccessBindingsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.resourceId != null && m.hasOwnProperty('resourceId')) w.uint32(10).string(m.resourceId);
        if (m.accessBindingDeltas != null && m.accessBindingDeltas.length) {
          for (let i = 0; i < m.accessBindingDeltas.length; ++i) $root.api.access.AccessBindingDelta.encode(m.accessBindingDeltas[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      UpdateAccessBindingsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.UpdateAccessBindingsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.resourceId = r.string();
              break;
            case 2:
              if (!(m.accessBindingDeltas && m.accessBindingDeltas.length)) m.accessBindingDeltas = [];
              m.accessBindingDeltas.push($root.api.access.AccessBindingDelta.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateAccessBindingsRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateAccessBindingsMetadata = (function() {
      function UpdateAccessBindingsMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateAccessBindingsMetadata.prototype.resourceId = '';
      UpdateAccessBindingsMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.resourceId != null && m.hasOwnProperty('resourceId')) w.uint32(10).string(m.resourceId);
        return w;
      };
      UpdateAccessBindingsMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.UpdateAccessBindingsMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.resourceId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateAccessBindingsMetadata;
    })();
  })(root);
  (function($root) {
    $root.AccessBindingAction = (function() {
      let AccessBindingAction = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'ACCESS_BINDING_ACTION_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'ADD')] = 1;
        values[(valuesById[2] = 'REMOVE')] = 2;
        return values;
      })();
      return AccessBindingAction;
    })();
  })(root);
  (function($root) {
    $root.AccessBindingDelta = (function() {
      function AccessBindingDelta(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AccessBindingDelta.prototype.action = 0;
      AccessBindingDelta.prototype.accessBinding = null;
      AccessBindingDelta.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.action != null && m.hasOwnProperty('action')) w.uint32(8).int32(m.action);
        if (m.accessBinding != null && m.hasOwnProperty('accessBinding')) $root.api.access.AccessBinding.encode(m.accessBinding, w.uint32(18).fork()).ldelim();
        return w;
      };
      AccessBindingDelta.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.access.AccessBindingDelta();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.action = r.int32();
              break;
            case 2:
              m.accessBinding = $root.api.access.AccessBinding.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AccessBindingDelta;
    })();
  })(root);
  registar.register('api.access', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
