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
    $root.Http = (function() {
      function Http(p) {
        this.rules = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Http.prototype.rules = $util.emptyArray;
      Http.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.rules != null && m.rules.length) {
          for (let i = 0; i < m.rules.length; ++i) $root.contrib.google.api.HttpRule.encode(m.rules[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      Http.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.api.Http();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.rules && m.rules.length)) m.rules = [];
              m.rules.push($root.contrib.google.api.HttpRule.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Http;
    })();
  })(root);
  (function($root) {
    $root.HttpRule = (function() {
      function HttpRule(p) {
        this.additionalBindings = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      HttpRule.prototype.selector = '';
      HttpRule.prototype.get = '';
      HttpRule.prototype.put = '';
      HttpRule.prototype.post = '';
      HttpRule.prototype['delete'] = '';
      HttpRule.prototype.patch = '';
      HttpRule.prototype.custom = null;
      HttpRule.prototype.body = '';
      HttpRule.prototype.additionalBindings = $util.emptyArray;
      let $oneOfFields;
      Object.defineProperty(HttpRule.prototype, 'pattern', {
        get: $util.oneOfGetter(($oneOfFields = ['get', 'put', 'post', 'delete', 'patch', 'custom'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      HttpRule.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.selector != null && m.hasOwnProperty('selector')) w.uint32(10).string(m.selector);
        if (m.get != null && m.hasOwnProperty('get')) w.uint32(18).string(m.get);
        if (m.put != null && m.hasOwnProperty('put')) w.uint32(26).string(m.put);
        if (m.post != null && m.hasOwnProperty('post')) w.uint32(34).string(m.post);
        if (m['delete'] != null && m.hasOwnProperty('delete')) w.uint32(42).string(m['delete']);
        if (m.patch != null && m.hasOwnProperty('patch')) w.uint32(50).string(m.patch);
        if (m.body != null && m.hasOwnProperty('body')) w.uint32(58).string(m.body);
        if (m.custom != null && m.hasOwnProperty('custom')) $root.contrib.google.api.CustomHttpPattern.encode(m.custom, w.uint32(66).fork()).ldelim();
        if (m.additionalBindings != null && m.additionalBindings.length) {
          for (let i = 0; i < m.additionalBindings.length; ++i) $root.contrib.google.api.HttpRule.encode(m.additionalBindings[i], w.uint32(90).fork()).ldelim();
        }
        return w;
      };
      HttpRule.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.api.HttpRule();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.selector = r.string();
              break;
            case 2:
              m.get = r.string();
              break;
            case 3:
              m.put = r.string();
              break;
            case 4:
              m.post = r.string();
              break;
            case 5:
              m['delete'] = r.string();
              break;
            case 6:
              m.patch = r.string();
              break;
            case 8:
              m.custom = $root.contrib.google.api.CustomHttpPattern.decode(r, r.uint32());
              break;
            case 7:
              m.body = r.string();
              break;
            case 11:
              if (!(m.additionalBindings && m.additionalBindings.length)) m.additionalBindings = [];
              m.additionalBindings.push($root.contrib.google.api.HttpRule.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return HttpRule;
    })();
  })(root);
  (function($root) {
    $root.CustomHttpPattern = (function() {
      function CustomHttpPattern(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CustomHttpPattern.prototype.kind = '';
      CustomHttpPattern.prototype.path = '';
      CustomHttpPattern.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.kind != null && m.hasOwnProperty('kind')) w.uint32(10).string(m.kind);
        if (m.path != null && m.hasOwnProperty('path')) w.uint32(18).string(m.path);
        return w;
      };
      CustomHttpPattern.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.api.CustomHttpPattern();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.kind = r.string();
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
      return CustomHttpPattern;
    })();
  })(root);
  registar.register('contrib.google.api', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
