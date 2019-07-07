module.exports = (function() {
  const $protobuf = require('protobufjs');
  const grpc = require('grpc');
  const registar = require('../../../../lib/registar.js');
  const util = require('../../../../lib/util.js');
  const $Reader = $protobuf.Reader;
  const $Writer = $protobuf.Writer;
  const $util = $protobuf.util;
  let root = {};
  (function($root) {
    $root.FileOptions = (function() {
      function FileOptions(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FileOptions.prototype.lintSkip = null;
      FileOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.lintSkip != null && m.hasOwnProperty('lintSkip')) $root.contrib.yandex.api.tools.CommonLintSkip.encode(m.lintSkip, w.uint32(10).fork()).ldelim();
        return w;
      };
      FileOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.FileOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.lintSkip = $root.contrib.yandex.api.tools.CommonLintSkip.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FileOptions;
    })();
  })(root);
  (function($root) {
    $root.MessageOptions = (function() {
      function MessageOptions(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MessageOptions.prototype.lintSkip = null;
      MessageOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.lintSkip != null && m.hasOwnProperty('lintSkip')) $root.contrib.yandex.api.tools.CommonLintSkip.encode(m.lintSkip, w.uint32(10).fork()).ldelim();
        return w;
      };
      MessageOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.MessageOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.lintSkip = $root.contrib.yandex.api.tools.CommonLintSkip.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MessageOptions;
    })();
  })(root);
  (function($root) {
    $root.FieldOptions = (function() {
      function FieldOptions(p) {
        this.oneOf = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FieldOptions.prototype.oneOf = $util.emptyArray;
      FieldOptions.prototype.lintSkip = null;
      FieldOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.oneOf != null && m.oneOf.length) {
          for (let i = 0; i < m.oneOf.length; ++i) w.uint32(10).string(m.oneOf[i]);
        }
        if (m.lintSkip != null && m.hasOwnProperty('lintSkip')) $root.contrib.yandex.api.tools.CommonLintSkip.encode(m.lintSkip, w.uint32(18).fork()).ldelim();
        return w;
      };
      FieldOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.FieldOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.oneOf && m.oneOf.length)) m.oneOf = [];
              m.oneOf.push(r.string());
              break;
            case 2:
              m.lintSkip = $root.contrib.yandex.api.tools.CommonLintSkip.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FieldOptions;
    })();
  })(root);
  (function($root) {
    $root.EnumOptions = (function() {
      function EnumOptions(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      EnumOptions.prototype.lintSkip = null;
      EnumOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.lintSkip != null && m.hasOwnProperty('lintSkip')) $root.contrib.yandex.api.tools.EnumLintSkip.encode(m.lintSkip, w.uint32(18).fork()).ldelim();
        return w;
      };
      EnumOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.EnumOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 2:
              m.lintSkip = $root.contrib.yandex.api.tools.EnumLintSkip.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return EnumOptions;
    })();
  })(root);
  (function($root) {
    $root.EnumLintSkip = (function() {
      function EnumLintSkip(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      EnumLintSkip.prototype.all = false;
      EnumLintSkip.prototype.valueNamesCase = false;
      EnumLintSkip.prototype.unspecifiedValue = false;
      EnumLintSkip.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.all != null && m.hasOwnProperty('all')) w.uint32(8).bool(m.all);
        if (m.valueNamesCase != null && m.hasOwnProperty('valueNamesCase')) w.uint32(16).bool(m.valueNamesCase);
        if (m.unspecifiedValue != null && m.hasOwnProperty('unspecifiedValue')) w.uint32(24).bool(m.unspecifiedValue);
        return w;
      };
      EnumLintSkip.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.EnumLintSkip();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.all = r.bool();
              break;
            case 2:
              m.valueNamesCase = r.bool();
              break;
            case 3:
              m.unspecifiedValue = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return EnumLintSkip;
    })();
  })(root);
  (function($root) {
    $root.EnumValueOptions = (function() {
      function EnumValueOptions(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      EnumValueOptions.prototype.lintSkip = null;
      EnumValueOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.lintSkip != null && m.hasOwnProperty('lintSkip')) $root.contrib.yandex.api.tools.CommonLintSkip.encode(m.lintSkip, w.uint32(10).fork()).ldelim();
        return w;
      };
      EnumValueOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.EnumValueOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.lintSkip = $root.contrib.yandex.api.tools.CommonLintSkip.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return EnumValueOptions;
    })();
  })(root);
  (function($root) {
    $root.ServiceOptions = (function() {
      function ServiceOptions(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ServiceOptions.prototype.lintSkip = null;
      ServiceOptions.prototype.skipGenerate = false;
      ServiceOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.lintSkip != null && m.hasOwnProperty('lintSkip')) $root.contrib.yandex.api.tools.CommonLintSkip.encode(m.lintSkip, w.uint32(10).fork()).ldelim();
        if (m.skipGenerate != null && m.hasOwnProperty('skipGenerate')) w.uint32(16).bool(m.skipGenerate);
        return w;
      };
      ServiceOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.ServiceOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.lintSkip = $root.contrib.yandex.api.tools.CommonLintSkip.decode(r, r.uint32());
              break;
            case 2:
              m.skipGenerate = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ServiceOptions;
    })();
  })(root);
  (function($root) {
    $root.MethodOptions = (function() {
      function MethodOptions(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MethodOptions.prototype.lintSkip = null;
      MethodOptions.prototype.skipGenerate = false;
      MethodOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.lintSkip != null && m.hasOwnProperty('lintSkip')) $root.contrib.yandex.api.tools.CommonLintSkip.encode(m.lintSkip, w.uint32(10).fork()).ldelim();
        if (m.skipGenerate != null && m.hasOwnProperty('skipGenerate')) w.uint32(16).bool(m.skipGenerate);
        return w;
      };
      MethodOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.MethodOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.lintSkip = $root.contrib.yandex.api.tools.CommonLintSkip.decode(r, r.uint32());
              break;
            case 2:
              m.skipGenerate = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MethodOptions;
    })();
  })(root);
  (function($root) {
    $root.CommonLintSkip = (function() {
      function CommonLintSkip(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CommonLintSkip.prototype.all = false;
      CommonLintSkip.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.all != null && m.hasOwnProperty('all')) w.uint32(8).bool(m.all);
        return w;
      };
      CommonLintSkip.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.tools.CommonLintSkip();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.all = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CommonLintSkip;
    })();
  })(root);
  registar.register('contrib.yandex.api.tools', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
