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
    $root.Duration = (function() {
      function Duration(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Duration.prototype.nanos = 0;
      Duration.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.seconds != null && m.hasOwnProperty('seconds')) w.uint32(8).int64(m.seconds);
        if (m.nanos != null && m.hasOwnProperty('nanos')) w.uint32(16).int32(m.nanos);
        return w;
      };
      Duration.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Duration();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.seconds = r.int64();
              break;
            case 2:
              m.nanos = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Duration;
    })();
  })(root);
  (function($root) {
    $root.Any = (function() {
      function Any(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Any.prototype.type_url = '';
      Any.prototype.value = $util.newBuffer([]);
      Any.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.type_url != null && m.hasOwnProperty('type_url')) w.uint32(10).string(m.type_url);
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(18).bytes(m.value);
        return w;
      };
      Any.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Any();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.type_url = r.string();
              break;
            case 2:
              m.value = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Any;
    })();
  })(root);
  (function($root) {
    $root.Timestamp = (function() {
      function Timestamp(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Timestamp.prototype.nanos = 0;
      Timestamp.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.seconds != null && m.hasOwnProperty('seconds')) w.uint32(8).int64(m.seconds);
        if (m.nanos != null && m.hasOwnProperty('nanos')) w.uint32(16).int32(m.nanos);
        return w;
      };
      Timestamp.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Timestamp();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.seconds = r.int64();
              break;
            case 2:
              m.nanos = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Timestamp;
    })();
  })(root);
  (function($root) {
    $root.FieldMask = (function() {
      function FieldMask(p) {
        this.paths = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FieldMask.prototype.paths = $util.emptyArray;
      FieldMask.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.paths != null && m.paths.length) {
          for (let i = 0; i < m.paths.length; ++i) w.uint32(10).string(m.paths[i]);
        }
        return w;
      };
      FieldMask.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.FieldMask();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.paths && m.paths.length)) m.paths = [];
              m.paths.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FieldMask;
    })();
  })(root);
  (function($root) {
    $root.DoubleValue = (function() {
      function DoubleValue(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DoubleValue.prototype.value = 0;
      DoubleValue.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(9).double(m.value);
        return w;
      };
      DoubleValue.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.DoubleValue();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.double();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DoubleValue;
    })();
  })(root);
  (function($root) {
    $root.FloatValue = (function() {
      function FloatValue(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FloatValue.prototype.value = 0;
      FloatValue.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(13).float(m.value);
        return w;
      };
      FloatValue.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.FloatValue();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.float();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FloatValue;
    })();
  })(root);
  (function($root) {
    $root.Int64Value = (function() {
      function Int64Value(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Int64Value.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(8).int64(m.value);
        return w;
      };
      Int64Value.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Int64Value();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Int64Value;
    })();
  })(root);
  (function($root) {
    $root.UInt64Value = (function() {
      function UInt64Value(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
      UInt64Value.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(8).uint64(m.value);
        return w;
      };
      UInt64Value.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.UInt64Value();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.uint64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UInt64Value;
    })();
  })(root);
  (function($root) {
    $root.Int32Value = (function() {
      function Int32Value(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Int32Value.prototype.value = 0;
      Int32Value.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(8).int32(m.value);
        return w;
      };
      Int32Value.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Int32Value();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Int32Value;
    })();
  })(root);
  (function($root) {
    $root.UInt32Value = (function() {
      function UInt32Value(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UInt32Value.prototype.value = 0;
      UInt32Value.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(8).uint32(m.value);
        return w;
      };
      UInt32Value.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.UInt32Value();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.uint32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UInt32Value;
    })();
  })(root);
  (function($root) {
    $root.BoolValue = (function() {
      function BoolValue(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      BoolValue.prototype.value = false;
      BoolValue.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(8).bool(m.value);
        return w;
      };
      BoolValue.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.BoolValue();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return BoolValue;
    })();
  })(root);
  (function($root) {
    $root.StringValue = (function() {
      function StringValue(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      StringValue.prototype.value = '';
      StringValue.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(10).string(m.value);
        return w;
      };
      StringValue.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.StringValue();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return StringValue;
    })();
  })(root);
  (function($root) {
    $root.BytesValue = (function() {
      function BytesValue(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      BytesValue.prototype.value = $util.newBuffer([]);
      BytesValue.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.value != null && m.hasOwnProperty('value')) w.uint32(10).bytes(m.value);
        return w;
      };
      BytesValue.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.BytesValue();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.value = r.bytes();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return BytesValue;
    })();
  })(root);
  (function($root) {
    $root.Api = (function() {
      function Api(p) {
        this.methods = [];
        this.options = [];
        this.mixins = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Api.prototype.name = '';
      Api.prototype.methods = $util.emptyArray;
      Api.prototype.options = $util.emptyArray;
      Api.prototype.version = '';
      Api.prototype.sourceContext = null;
      Api.prototype.mixins = $util.emptyArray;
      Api.prototype.syntax = 0;
      Api.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.methods != null && m.methods.length) {
          for (let i = 0; i < m.methods.length; ++i) $root.contrib.google.protobuf.Method.encode(m.methods[i], w.uint32(18).fork()).ldelim();
        }
        if (m.options != null && m.options.length) {
          for (let i = 0; i < m.options.length; ++i) $root.contrib.google.protobuf.Option.encode(m.options[i], w.uint32(26).fork()).ldelim();
        }
        if (m.version != null && m.hasOwnProperty('version')) w.uint32(34).string(m.version);
        if (m.sourceContext != null && m.hasOwnProperty('sourceContext')) $root.contrib.google.protobuf.SourceContext.encode(m.sourceContext, w.uint32(42).fork()).ldelim();
        if (m.mixins != null && m.mixins.length) {
          for (let i = 0; i < m.mixins.length; ++i) $root.contrib.google.protobuf.Mixin.encode(m.mixins[i], w.uint32(50).fork()).ldelim();
        }
        if (m.syntax != null && m.hasOwnProperty('syntax')) w.uint32(56).int32(m.syntax);
        return w;
      };
      Api.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Api();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              if (!(m.methods && m.methods.length)) m.methods = [];
              m.methods.push($root.contrib.google.protobuf.Method.decode(r, r.uint32()));
              break;
            case 3:
              if (!(m.options && m.options.length)) m.options = [];
              m.options.push($root.contrib.google.protobuf.Option.decode(r, r.uint32()));
              break;
            case 4:
              m.version = r.string();
              break;
            case 5:
              m.sourceContext = $root.contrib.google.protobuf.SourceContext.decode(r, r.uint32());
              break;
            case 6:
              if (!(m.mixins && m.mixins.length)) m.mixins = [];
              m.mixins.push($root.contrib.google.protobuf.Mixin.decode(r, r.uint32()));
              break;
            case 7:
              m.syntax = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Api;
    })();
  })(root);
  (function($root) {
    $root.Method = (function() {
      function Method(p) {
        this.options = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Method.prototype.name = '';
      Method.prototype.requestTypeUrl = '';
      Method.prototype.requestStreaming = false;
      Method.prototype.responseTypeUrl = '';
      Method.prototype.responseStreaming = false;
      Method.prototype.options = $util.emptyArray;
      Method.prototype.syntax = 0;
      Method.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.requestTypeUrl != null && m.hasOwnProperty('requestTypeUrl')) w.uint32(18).string(m.requestTypeUrl);
        if (m.requestStreaming != null && m.hasOwnProperty('requestStreaming')) w.uint32(24).bool(m.requestStreaming);
        if (m.responseTypeUrl != null && m.hasOwnProperty('responseTypeUrl')) w.uint32(34).string(m.responseTypeUrl);
        if (m.responseStreaming != null && m.hasOwnProperty('responseStreaming')) w.uint32(40).bool(m.responseStreaming);
        if (m.options != null && m.options.length) {
          for (let i = 0; i < m.options.length; ++i) $root.contrib.google.protobuf.Option.encode(m.options[i], w.uint32(50).fork()).ldelim();
        }
        if (m.syntax != null && m.hasOwnProperty('syntax')) w.uint32(56).int32(m.syntax);
        return w;
      };
      Method.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Method();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.requestTypeUrl = r.string();
              break;
            case 3:
              m.requestStreaming = r.bool();
              break;
            case 4:
              m.responseTypeUrl = r.string();
              break;
            case 5:
              m.responseStreaming = r.bool();
              break;
            case 6:
              if (!(m.options && m.options.length)) m.options = [];
              m.options.push($root.contrib.google.protobuf.Option.decode(r, r.uint32()));
              break;
            case 7:
              m.syntax = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Method;
    })();
  })(root);
  (function($root) {
    $root.Mixin = (function() {
      function Mixin(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Mixin.prototype.name = '';
      Mixin.prototype.root = '';
      Mixin.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.root != null && m.hasOwnProperty('root')) w.uint32(18).string(m.root);
        return w;
      };
      Mixin.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Mixin();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.root = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Mixin;
    })();
  })(root);
  (function($root) {
    $root.FileDescriptorSet = (function() {
      function FileDescriptorSet(p) {
        this.file = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FileDescriptorSet.prototype.file = $util.emptyArray;
      FileDescriptorSet.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.file != null && m.file.length) {
          for (let i = 0; i < m.file.length; ++i) $root.contrib.google.protobuf.FileDescriptorProto.encode(m.file[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      FileDescriptorSet.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.FileDescriptorSet();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.file && m.file.length)) m.file = [];
              m.file.push($root.contrib.google.protobuf.FileDescriptorProto.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FileDescriptorSet;
    })();
  })(root);
  (function($root) {
    $root.FileDescriptorProto = (function() {
      function FileDescriptorProto(p) {
        this.dependency = [];
        this.publicDependency = [];
        this.weakDependency = [];
        this.messageType = [];
        this.enumType = [];
        this.service = [];
        this.extension = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FileDescriptorProto.prototype.name = '';
      FileDescriptorProto.prototype['package'] = '';
      FileDescriptorProto.prototype.dependency = $util.emptyArray;
      FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
      FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
      FileDescriptorProto.prototype.messageType = $util.emptyArray;
      FileDescriptorProto.prototype.enumType = $util.emptyArray;
      FileDescriptorProto.prototype.service = $util.emptyArray;
      FileDescriptorProto.prototype.extension = $util.emptyArray;
      FileDescriptorProto.prototype.options = null;
      FileDescriptorProto.prototype.sourceCodeInfo = null;
      FileDescriptorProto.prototype.syntax = '';
      FileDescriptorProto.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m['package'] != null && m.hasOwnProperty('package')) w.uint32(18).string(m['package']);
        if (m.dependency != null && m.dependency.length) {
          for (let i = 0; i < m.dependency.length; ++i) w.uint32(26).string(m.dependency[i]);
        }
        if (m.messageType != null && m.messageType.length) {
          for (let i = 0; i < m.messageType.length; ++i) $root.contrib.google.protobuf.DescriptorProto.encode(m.messageType[i], w.uint32(34).fork()).ldelim();
        }
        if (m.enumType != null && m.enumType.length) {
          for (let i = 0; i < m.enumType.length; ++i) $root.contrib.google.protobuf.EnumDescriptorProto.encode(m.enumType[i], w.uint32(42).fork()).ldelim();
        }
        if (m.service != null && m.service.length) {
          for (let i = 0; i < m.service.length; ++i) $root.contrib.google.protobuf.ServiceDescriptorProto.encode(m.service[i], w.uint32(50).fork()).ldelim();
        }
        if (m.extension != null && m.extension.length) {
          for (let i = 0; i < m.extension.length; ++i) $root.contrib.google.protobuf.FieldDescriptorProto.encode(m.extension[i], w.uint32(58).fork()).ldelim();
        }
        if (m.options != null && m.hasOwnProperty('options')) $root.contrib.google.protobuf.FileOptions.encode(m.options, w.uint32(66).fork()).ldelim();
        if (m.sourceCodeInfo != null && m.hasOwnProperty('sourceCodeInfo')) $root.contrib.google.protobuf.SourceCodeInfo.encode(m.sourceCodeInfo, w.uint32(74).fork()).ldelim();
        if (m.publicDependency != null && m.publicDependency.length) {
          for (let i = 0; i < m.publicDependency.length; ++i) w.uint32(80).int32(m.publicDependency[i]);
        }
        if (m.weakDependency != null && m.weakDependency.length) {
          for (let i = 0; i < m.weakDependency.length; ++i) w.uint32(88).int32(m.weakDependency[i]);
        }
        if (m.syntax != null && m.hasOwnProperty('syntax')) w.uint32(98).string(m.syntax);
        return w;
      };
      FileDescriptorProto.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.FileDescriptorProto();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m['package'] = r.string();
              break;
            case 3:
              if (!(m.dependency && m.dependency.length)) m.dependency = [];
              m.dependency.push(r.string());
              break;
            case 10:
              if (!(m.publicDependency && m.publicDependency.length)) m.publicDependency = [];
              if ((t & 7) === 2) {
                let c2 = r.uint32() + r.pos;
                while (r.pos < c2) m.publicDependency.push(r.int32());
              } else m.publicDependency.push(r.int32());
              break;
            case 11:
              if (!(m.weakDependency && m.weakDependency.length)) m.weakDependency = [];
              if ((t & 7) === 2) {
                let c2 = r.uint32() + r.pos;
                while (r.pos < c2) m.weakDependency.push(r.int32());
              } else m.weakDependency.push(r.int32());
              break;
            case 4:
              if (!(m.messageType && m.messageType.length)) m.messageType = [];
              m.messageType.push($root.contrib.google.protobuf.DescriptorProto.decode(r, r.uint32()));
              break;
            case 5:
              if (!(m.enumType && m.enumType.length)) m.enumType = [];
              m.enumType.push($root.contrib.google.protobuf.EnumDescriptorProto.decode(r, r.uint32()));
              break;
            case 6:
              if (!(m.service && m.service.length)) m.service = [];
              m.service.push($root.contrib.google.protobuf.ServiceDescriptorProto.decode(r, r.uint32()));
              break;
            case 7:
              if (!(m.extension && m.extension.length)) m.extension = [];
              m.extension.push($root.contrib.google.protobuf.FieldDescriptorProto.decode(r, r.uint32()));
              break;
            case 8:
              m.options = $root.contrib.google.protobuf.FileOptions.decode(r, r.uint32());
              break;
            case 9:
              m.sourceCodeInfo = $root.contrib.google.protobuf.SourceCodeInfo.decode(r, r.uint32());
              break;
            case 12:
              m.syntax = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FileDescriptorProto;
    })();
  })(root);
  (function($root) {
    $root.DescriptorProto = (function() {
      function DescriptorProto(p) {
        this.field = [];
        this.extension = [];
        this.nestedType = [];
        this.enumType = [];
        this.extensionRange = [];
        this.oneofDecl = [];
        this.reservedRange = [];
        this.reservedName = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DescriptorProto.prototype.name = '';
      DescriptorProto.prototype.field = $util.emptyArray;
      DescriptorProto.prototype.extension = $util.emptyArray;
      DescriptorProto.prototype.nestedType = $util.emptyArray;
      DescriptorProto.prototype.enumType = $util.emptyArray;
      DescriptorProto.prototype.extensionRange = $util.emptyArray;
      DescriptorProto.prototype.oneofDecl = $util.emptyArray;
      DescriptorProto.prototype.options = null;
      DescriptorProto.prototype.reservedRange = $util.emptyArray;
      DescriptorProto.prototype.reservedName = $util.emptyArray;
      DescriptorProto.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.field != null && m.field.length) {
          for (let i = 0; i < m.field.length; ++i) $root.contrib.google.protobuf.FieldDescriptorProto.encode(m.field[i], w.uint32(18).fork()).ldelim();
        }
        if (m.nestedType != null && m.nestedType.length) {
          for (let i = 0; i < m.nestedType.length; ++i) $root.contrib.google.protobuf.DescriptorProto.encode(m.nestedType[i], w.uint32(26).fork()).ldelim();
        }
        if (m.enumType != null && m.enumType.length) {
          for (let i = 0; i < m.enumType.length; ++i) $root.contrib.google.protobuf.EnumDescriptorProto.encode(m.enumType[i], w.uint32(34).fork()).ldelim();
        }
        if (m.extensionRange != null && m.extensionRange.length) {
          for (let i = 0; i < m.extensionRange.length; ++i) $root.contrib.google.protobuf.DescriptorProto.ExtensionRange.encode(m.extensionRange[i], w.uint32(42).fork()).ldelim();
        }
        if (m.extension != null && m.extension.length) {
          for (let i = 0; i < m.extension.length; ++i) $root.contrib.google.protobuf.FieldDescriptorProto.encode(m.extension[i], w.uint32(50).fork()).ldelim();
        }
        if (m.options != null && m.hasOwnProperty('options')) $root.contrib.google.protobuf.MessageOptions.encode(m.options, w.uint32(58).fork()).ldelim();
        if (m.oneofDecl != null && m.oneofDecl.length) {
          for (let i = 0; i < m.oneofDecl.length; ++i) $root.contrib.google.protobuf.OneofDescriptorProto.encode(m.oneofDecl[i], w.uint32(66).fork()).ldelim();
        }
        if (m.reservedRange != null && m.reservedRange.length) {
          for (let i = 0; i < m.reservedRange.length; ++i) $root.contrib.google.protobuf.DescriptorProto.ReservedRange.encode(m.reservedRange[i], w.uint32(74).fork()).ldelim();
        }
        if (m.reservedName != null && m.reservedName.length) {
          for (let i = 0; i < m.reservedName.length; ++i) w.uint32(82).string(m.reservedName[i]);
        }
        return w;
      };
      DescriptorProto.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.DescriptorProto();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              if (!(m.field && m.field.length)) m.field = [];
              m.field.push($root.contrib.google.protobuf.FieldDescriptorProto.decode(r, r.uint32()));
              break;
            case 6:
              if (!(m.extension && m.extension.length)) m.extension = [];
              m.extension.push($root.contrib.google.protobuf.FieldDescriptorProto.decode(r, r.uint32()));
              break;
            case 3:
              if (!(m.nestedType && m.nestedType.length)) m.nestedType = [];
              m.nestedType.push($root.contrib.google.protobuf.DescriptorProto.decode(r, r.uint32()));
              break;
            case 4:
              if (!(m.enumType && m.enumType.length)) m.enumType = [];
              m.enumType.push($root.contrib.google.protobuf.EnumDescriptorProto.decode(r, r.uint32()));
              break;
            case 5:
              if (!(m.extensionRange && m.extensionRange.length)) m.extensionRange = [];
              m.extensionRange.push($root.contrib.google.protobuf.DescriptorProto.ExtensionRange.decode(r, r.uint32()));
              break;
            case 8:
              if (!(m.oneofDecl && m.oneofDecl.length)) m.oneofDecl = [];
              m.oneofDecl.push($root.contrib.google.protobuf.OneofDescriptorProto.decode(r, r.uint32()));
              break;
            case 7:
              m.options = $root.contrib.google.protobuf.MessageOptions.decode(r, r.uint32());
              break;
            case 9:
              if (!(m.reservedRange && m.reservedRange.length)) m.reservedRange = [];
              m.reservedRange.push($root.contrib.google.protobuf.DescriptorProto.ReservedRange.decode(r, r.uint32()));
              break;
            case 10:
              if (!(m.reservedName && m.reservedName.length)) m.reservedName = [];
              m.reservedName.push(r.string());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      DescriptorProto.ExtensionRange = (function() {
        function ExtensionRange(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ExtensionRange.prototype.start = 0;
        ExtensionRange.prototype.end = 0;
        ExtensionRange.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.start != null && m.hasOwnProperty('start')) w.uint32(8).int32(m.start);
          if (m.end != null && m.hasOwnProperty('end')) w.uint32(16).int32(m.end);
          return w;
        };
        ExtensionRange.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.protobuf.DescriptorProto.ExtensionRange();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.start = r.int32();
                break;
              case 2:
                m.end = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return ExtensionRange;
      })();
      DescriptorProto.ReservedRange = (function() {
        function ReservedRange(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ReservedRange.prototype.start = 0;
        ReservedRange.prototype.end = 0;
        ReservedRange.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.start != null && m.hasOwnProperty('start')) w.uint32(8).int32(m.start);
          if (m.end != null && m.hasOwnProperty('end')) w.uint32(16).int32(m.end);
          return w;
        };
        ReservedRange.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.protobuf.DescriptorProto.ReservedRange();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.start = r.int32();
                break;
              case 2:
                m.end = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return ReservedRange;
      })();
      return DescriptorProto;
    })();
  })(root);
  (function($root) {
    $root.FieldDescriptorProto = (function() {
      function FieldDescriptorProto(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FieldDescriptorProto.prototype.name = '';
      FieldDescriptorProto.prototype.number = 0;
      FieldDescriptorProto.prototype.label = 1;
      FieldDescriptorProto.prototype.type = 1;
      FieldDescriptorProto.prototype.typeName = '';
      FieldDescriptorProto.prototype.extendee = '';
      FieldDescriptorProto.prototype.defaultValue = '';
      FieldDescriptorProto.prototype.oneofIndex = 0;
      FieldDescriptorProto.prototype.jsonName = '';
      FieldDescriptorProto.prototype.options = null;
      FieldDescriptorProto.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.extendee != null && m.hasOwnProperty('extendee')) w.uint32(18).string(m.extendee);
        if (m.number != null && m.hasOwnProperty('number')) w.uint32(24).int32(m.number);
        if (m.label != null && m.hasOwnProperty('label')) w.uint32(32).int32(m.label);
        if (m.type != null && m.hasOwnProperty('type')) w.uint32(40).int32(m.type);
        if (m.typeName != null && m.hasOwnProperty('typeName')) w.uint32(50).string(m.typeName);
        if (m.defaultValue != null && m.hasOwnProperty('defaultValue')) w.uint32(58).string(m.defaultValue);
        if (m.options != null && m.hasOwnProperty('options')) $root.contrib.google.protobuf.FieldOptions.encode(m.options, w.uint32(66).fork()).ldelim();
        if (m.oneofIndex != null && m.hasOwnProperty('oneofIndex')) w.uint32(72).int32(m.oneofIndex);
        if (m.jsonName != null && m.hasOwnProperty('jsonName')) w.uint32(82).string(m.jsonName);
        return w;
      };
      FieldDescriptorProto.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.FieldDescriptorProto();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 3:
              m.number = r.int32();
              break;
            case 4:
              m.label = r.int32();
              break;
            case 5:
              m.type = r.int32();
              break;
            case 6:
              m.typeName = r.string();
              break;
            case 2:
              m.extendee = r.string();
              break;
            case 7:
              m.defaultValue = r.string();
              break;
            case 9:
              m.oneofIndex = r.int32();
              break;
            case 10:
              m.jsonName = r.string();
              break;
            case 8:
              m.options = $root.contrib.google.protobuf.FieldOptions.decode(r, r.uint32());
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
        values[(valuesById[1] = 'TYPE_DOUBLE')] = 1;
        values[(valuesById[2] = 'TYPE_FLOAT')] = 2;
        values[(valuesById[3] = 'TYPE_INT64')] = 3;
        values[(valuesById[4] = 'TYPE_UINT64')] = 4;
        values[(valuesById[5] = 'TYPE_INT32')] = 5;
        values[(valuesById[6] = 'TYPE_FIXED64')] = 6;
        values[(valuesById[7] = 'TYPE_FIXED32')] = 7;
        values[(valuesById[8] = 'TYPE_BOOL')] = 8;
        values[(valuesById[9] = 'TYPE_STRING')] = 9;
        values[(valuesById[10] = 'TYPE_GROUP')] = 10;
        values[(valuesById[11] = 'TYPE_MESSAGE')] = 11;
        values[(valuesById[12] = 'TYPE_BYTES')] = 12;
        values[(valuesById[13] = 'TYPE_UINT32')] = 13;
        values[(valuesById[14] = 'TYPE_ENUM')] = 14;
        values[(valuesById[15] = 'TYPE_SFIXED32')] = 15;
        values[(valuesById[16] = 'TYPE_SFIXED64')] = 16;
        values[(valuesById[17] = 'TYPE_SINT32')] = 17;
        values[(valuesById[18] = 'TYPE_SINT64')] = 18;
        return values;
      })();
      FieldDescriptorProto.Type = Type;
      let Label = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[1] = 'LABEL_OPTIONAL')] = 1;
        values[(valuesById[2] = 'LABEL_REQUIRED')] = 2;
        values[(valuesById[3] = 'LABEL_REPEATED')] = 3;
        return values;
      })();
      FieldDescriptorProto.Label = Label;
      return FieldDescriptorProto;
    })();
  })(root);
  (function($root) {
    $root.OneofDescriptorProto = (function() {
      function OneofDescriptorProto(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      OneofDescriptorProto.prototype.name = '';
      OneofDescriptorProto.prototype.options = null;
      OneofDescriptorProto.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.options != null && m.hasOwnProperty('options')) $root.contrib.google.protobuf.OneofOptions.encode(m.options, w.uint32(18).fork()).ldelim();
        return w;
      };
      OneofDescriptorProto.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.OneofDescriptorProto();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.options = $root.contrib.google.protobuf.OneofOptions.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return OneofDescriptorProto;
    })();
  })(root);
  (function($root) {
    $root.EnumDescriptorProto = (function() {
      function EnumDescriptorProto(p) {
        this.value = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      EnumDescriptorProto.prototype.name = '';
      EnumDescriptorProto.prototype.value = $util.emptyArray;
      EnumDescriptorProto.prototype.options = null;
      EnumDescriptorProto.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.value != null && m.value.length) {
          for (let i = 0; i < m.value.length; ++i) $root.contrib.google.protobuf.EnumValueDescriptorProto.encode(m.value[i], w.uint32(18).fork()).ldelim();
        }
        if (m.options != null && m.hasOwnProperty('options')) $root.contrib.google.protobuf.EnumOptions.encode(m.options, w.uint32(26).fork()).ldelim();
        return w;
      };
      EnumDescriptorProto.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.EnumDescriptorProto();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              if (!(m.value && m.value.length)) m.value = [];
              m.value.push($root.contrib.google.protobuf.EnumValueDescriptorProto.decode(r, r.uint32()));
              break;
            case 3:
              m.options = $root.contrib.google.protobuf.EnumOptions.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return EnumDescriptorProto;
    })();
  })(root);
  (function($root) {
    $root.EnumValueDescriptorProto = (function() {
      function EnumValueDescriptorProto(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      EnumValueDescriptorProto.prototype.name = '';
      EnumValueDescriptorProto.prototype.number = 0;
      EnumValueDescriptorProto.prototype.options = null;
      EnumValueDescriptorProto.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.number != null && m.hasOwnProperty('number')) w.uint32(16).int32(m.number);
        if (m.options != null && m.hasOwnProperty('options')) $root.contrib.google.protobuf.EnumValueOptions.encode(m.options, w.uint32(26).fork()).ldelim();
        return w;
      };
      EnumValueDescriptorProto.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.EnumValueDescriptorProto();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.number = r.int32();
              break;
            case 3:
              m.options = $root.contrib.google.protobuf.EnumValueOptions.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return EnumValueDescriptorProto;
    })();
  })(root);
  (function($root) {
    $root.ServiceDescriptorProto = (function() {
      function ServiceDescriptorProto(p) {
        this.method = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ServiceDescriptorProto.prototype.name = '';
      ServiceDescriptorProto.prototype.method = $util.emptyArray;
      ServiceDescriptorProto.prototype.options = null;
      ServiceDescriptorProto.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.method != null && m.method.length) {
          for (let i = 0; i < m.method.length; ++i) $root.contrib.google.protobuf.MethodDescriptorProto.encode(m.method[i], w.uint32(18).fork()).ldelim();
        }
        if (m.options != null && m.hasOwnProperty('options')) $root.contrib.google.protobuf.ServiceOptions.encode(m.options, w.uint32(26).fork()).ldelim();
        return w;
      };
      ServiceDescriptorProto.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.ServiceDescriptorProto();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              if (!(m.method && m.method.length)) m.method = [];
              m.method.push($root.contrib.google.protobuf.MethodDescriptorProto.decode(r, r.uint32()));
              break;
            case 3:
              m.options = $root.contrib.google.protobuf.ServiceOptions.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ServiceDescriptorProto;
    })();
  })(root);
  (function($root) {
    $root.MethodDescriptorProto = (function() {
      function MethodDescriptorProto(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MethodDescriptorProto.prototype.name = '';
      MethodDescriptorProto.prototype.inputType = '';
      MethodDescriptorProto.prototype.outputType = '';
      MethodDescriptorProto.prototype.options = null;
      MethodDescriptorProto.prototype.clientStreaming = false;
      MethodDescriptorProto.prototype.serverStreaming = false;
      MethodDescriptorProto.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.inputType != null && m.hasOwnProperty('inputType')) w.uint32(18).string(m.inputType);
        if (m.outputType != null && m.hasOwnProperty('outputType')) w.uint32(26).string(m.outputType);
        if (m.options != null && m.hasOwnProperty('options')) $root.contrib.google.protobuf.MethodOptions.encode(m.options, w.uint32(34).fork()).ldelim();
        if (m.clientStreaming != null && m.hasOwnProperty('clientStreaming')) w.uint32(40).bool(m.clientStreaming);
        if (m.serverStreaming != null && m.hasOwnProperty('serverStreaming')) w.uint32(48).bool(m.serverStreaming);
        return w;
      };
      MethodDescriptorProto.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.MethodDescriptorProto();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.inputType = r.string();
              break;
            case 3:
              m.outputType = r.string();
              break;
            case 4:
              m.options = $root.contrib.google.protobuf.MethodOptions.decode(r, r.uint32());
              break;
            case 5:
              m.clientStreaming = r.bool();
              break;
            case 6:
              m.serverStreaming = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MethodDescriptorProto;
    })();
  })(root);
  (function($root) {
    $root.FileOptions = (function() {
      function FileOptions(p) {
        this.uninterpretedOption = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FileOptions.prototype.javaPackage = '';
      FileOptions.prototype.javaOuterClassname = '';
      FileOptions.prototype.javaMultipleFiles = false;
      FileOptions.prototype.javaGenerateEqualsAndHash = false;
      FileOptions.prototype.javaStringCheckUtf8 = false;
      FileOptions.prototype.optimizeFor = 1;
      FileOptions.prototype.goPackage = '';
      FileOptions.prototype.ccGenericServices = false;
      FileOptions.prototype.javaGenericServices = false;
      FileOptions.prototype.pyGenericServices = false;
      FileOptions.prototype.deprecated = false;
      FileOptions.prototype.ccEnableArenas = false;
      FileOptions.prototype.objcClassPrefix = '';
      FileOptions.prototype.csharpNamespace = '';
      FileOptions.prototype.uninterpretedOption = $util.emptyArray;
      FileOptions.prototype['.yandex.cloud.api.tools.file'] = null;
      FileOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.javaPackage != null && m.hasOwnProperty('javaPackage')) w.uint32(10).string(m.javaPackage);
        if (m.javaOuterClassname != null && m.hasOwnProperty('javaOuterClassname')) w.uint32(66).string(m.javaOuterClassname);
        if (m.optimizeFor != null && m.hasOwnProperty('optimizeFor')) w.uint32(72).int32(m.optimizeFor);
        if (m.javaMultipleFiles != null && m.hasOwnProperty('javaMultipleFiles')) w.uint32(80).bool(m.javaMultipleFiles);
        if (m.goPackage != null && m.hasOwnProperty('goPackage')) w.uint32(90).string(m.goPackage);
        if (m.ccGenericServices != null && m.hasOwnProperty('ccGenericServices')) w.uint32(128).bool(m.ccGenericServices);
        if (m.javaGenericServices != null && m.hasOwnProperty('javaGenericServices')) w.uint32(136).bool(m.javaGenericServices);
        if (m.pyGenericServices != null && m.hasOwnProperty('pyGenericServices')) w.uint32(144).bool(m.pyGenericServices);
        if (m.javaGenerateEqualsAndHash != null && m.hasOwnProperty('javaGenerateEqualsAndHash')) w.uint32(160).bool(m.javaGenerateEqualsAndHash);
        if (m.deprecated != null && m.hasOwnProperty('deprecated')) w.uint32(184).bool(m.deprecated);
        if (m.javaStringCheckUtf8 != null && m.hasOwnProperty('javaStringCheckUtf8')) w.uint32(216).bool(m.javaStringCheckUtf8);
        if (m.ccEnableArenas != null && m.hasOwnProperty('ccEnableArenas')) w.uint32(248).bool(m.ccEnableArenas);
        if (m.objcClassPrefix != null && m.hasOwnProperty('objcClassPrefix')) w.uint32(290).string(m.objcClassPrefix);
        if (m.csharpNamespace != null && m.hasOwnProperty('csharpNamespace')) w.uint32(298).string(m.csharpNamespace);
        if (m.uninterpretedOption != null && m.uninterpretedOption.length) {
          for (let i = 0; i < m.uninterpretedOption.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.encode(m.uninterpretedOption[i], w.uint32(7994).fork()).ldelim();
        }
        if (m['.yandex.cloud.api.tools.file'] != null && m.hasOwnProperty('.yandex.cloud.api.tools.file')) $root.api.api.tools.FileOptions.encode(m['.yandex.cloud.api.tools.file'], w.uint32(538570).fork()).ldelim();
        return w;
      };
      FileOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.FileOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.javaPackage = r.string();
              break;
            case 8:
              m.javaOuterClassname = r.string();
              break;
            case 10:
              m.javaMultipleFiles = r.bool();
              break;
            case 20:
              m.javaGenerateEqualsAndHash = r.bool();
              break;
            case 27:
              m.javaStringCheckUtf8 = r.bool();
              break;
            case 9:
              m.optimizeFor = r.int32();
              break;
            case 11:
              m.goPackage = r.string();
              break;
            case 16:
              m.ccGenericServices = r.bool();
              break;
            case 17:
              m.javaGenericServices = r.bool();
              break;
            case 18:
              m.pyGenericServices = r.bool();
              break;
            case 23:
              m.deprecated = r.bool();
              break;
            case 31:
              m.ccEnableArenas = r.bool();
              break;
            case 36:
              m.objcClassPrefix = r.string();
              break;
            case 37:
              m.csharpNamespace = r.string();
              break;
            case 999:
              if (!(m.uninterpretedOption && m.uninterpretedOption.length)) m.uninterpretedOption = [];
              m.uninterpretedOption.push($root.contrib.google.protobuf.UninterpretedOption.decode(r, r.uint32()));
              break;
            case 67321:
              m['.yandex.cloud.api.tools.file'] = $root.api.api.tools.FileOptions.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let OptimizeMode = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[1] = 'SPEED')] = 1;
        values[(valuesById[2] = 'CODE_SIZE')] = 2;
        values[(valuesById[3] = 'LITE_RUNTIME')] = 3;
        return values;
      })();
      FileOptions.OptimizeMode = OptimizeMode;
      return FileOptions;
    })();
  })(root);
  (function($root) {
    $root.MessageOptions = (function() {
      function MessageOptions(p) {
        this.uninterpretedOption = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MessageOptions.prototype.messageSetWireFormat = false;
      MessageOptions.prototype.noStandardDescriptorAccessor = false;
      MessageOptions.prototype.deprecated = false;
      MessageOptions.prototype.mapEntry = false;
      MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
      MessageOptions.prototype['.yandex.cloud.api.tools.message'] = null;
      MessageOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.messageSetWireFormat != null && m.hasOwnProperty('messageSetWireFormat')) w.uint32(8).bool(m.messageSetWireFormat);
        if (m.noStandardDescriptorAccessor != null && m.hasOwnProperty('noStandardDescriptorAccessor')) w.uint32(16).bool(m.noStandardDescriptorAccessor);
        if (m.deprecated != null && m.hasOwnProperty('deprecated')) w.uint32(24).bool(m.deprecated);
        if (m.mapEntry != null && m.hasOwnProperty('mapEntry')) w.uint32(56).bool(m.mapEntry);
        if (m.uninterpretedOption != null && m.uninterpretedOption.length) {
          for (let i = 0; i < m.uninterpretedOption.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.encode(m.uninterpretedOption[i], w.uint32(7994).fork()).ldelim();
        }
        if (m['.yandex.cloud.api.tools.message'] != null && m.hasOwnProperty('.yandex.cloud.api.tools.message')) $root.api.api.tools.MessageOptions.encode(m['.yandex.cloud.api.tools.message'], w.uint32(538570).fork()).ldelim();
        return w;
      };
      MessageOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.MessageOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.messageSetWireFormat = r.bool();
              break;
            case 2:
              m.noStandardDescriptorAccessor = r.bool();
              break;
            case 3:
              m.deprecated = r.bool();
              break;
            case 7:
              m.mapEntry = r.bool();
              break;
            case 999:
              if (!(m.uninterpretedOption && m.uninterpretedOption.length)) m.uninterpretedOption = [];
              m.uninterpretedOption.push($root.contrib.google.protobuf.UninterpretedOption.decode(r, r.uint32()));
              break;
            case 67321:
              m['.yandex.cloud.api.tools.message'] = $root.api.api.tools.MessageOptions.decode(r, r.uint32());
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
        this.uninterpretedOption = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FieldOptions.prototype.ctype = 0;
      FieldOptions.prototype.packed = false;
      FieldOptions.prototype.jstype = 0;
      FieldOptions.prototype.lazy = false;
      FieldOptions.prototype.deprecated = false;
      FieldOptions.prototype.weak = false;
      FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
      FieldOptions.prototype['.yandex.cloud.api.tools.field'] = null;
      FieldOptions.prototype['.yandex.cloud.required'] = false;
      FieldOptions.prototype['.yandex.cloud.pattern'] = '';
      FieldOptions.prototype['.yandex.cloud.value'] = '';
      FieldOptions.prototype['.yandex.cloud.size'] = '';
      FieldOptions.prototype['.yandex.cloud.length'] = '';
      FieldOptions.prototype['.yandex.cloud.unique'] = false;
      FieldOptions.prototype['.yandex.cloud.mapKey'] = null;
      FieldOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.ctype != null && m.hasOwnProperty('ctype')) w.uint32(8).int32(m.ctype);
        if (m.packed != null && m.hasOwnProperty('packed')) w.uint32(16).bool(m.packed);
        if (m.deprecated != null && m.hasOwnProperty('deprecated')) w.uint32(24).bool(m.deprecated);
        if (m.lazy != null && m.hasOwnProperty('lazy')) w.uint32(40).bool(m.lazy);
        if (m.jstype != null && m.hasOwnProperty('jstype')) w.uint32(48).int32(m.jstype);
        if (m.weak != null && m.hasOwnProperty('weak')) w.uint32(80).bool(m.weak);
        if (m.uninterpretedOption != null && m.uninterpretedOption.length) {
          for (let i = 0; i < m.uninterpretedOption.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.encode(m.uninterpretedOption[i], w.uint32(7994).fork()).ldelim();
        }
        if (m['.yandex.cloud.api.tools.field'] != null && m.hasOwnProperty('.yandex.cloud.api.tools.field')) $root.api.api.tools.FieldOptions.encode(m['.yandex.cloud.api.tools.field'], w.uint32(538570).fork()).ldelim();
        if (m['.yandex.cloud.required'] != null && m.hasOwnProperty('.yandex.cloud.required')) w.uint32(812008).bool(m['.yandex.cloud.required']);
        if (m['.yandex.cloud.pattern'] != null && m.hasOwnProperty('.yandex.cloud.pattern')) w.uint32(812018).string(m['.yandex.cloud.pattern']);
        if (m['.yandex.cloud.value'] != null && m.hasOwnProperty('.yandex.cloud.value')) w.uint32(812026).string(m['.yandex.cloud.value']);
        if (m['.yandex.cloud.size'] != null && m.hasOwnProperty('.yandex.cloud.size')) w.uint32(812034).string(m['.yandex.cloud.size']);
        if (m['.yandex.cloud.length'] != null && m.hasOwnProperty('.yandex.cloud.length')) w.uint32(812042).string(m['.yandex.cloud.length']);
        if (m['.yandex.cloud.unique'] != null && m.hasOwnProperty('.yandex.cloud.unique')) w.uint32(812048).bool(m['.yandex.cloud.unique']);
        if (m['.yandex.cloud.mapKey'] != null && m.hasOwnProperty('.yandex.cloud.mapKey')) $root.api.MapKeySpec.encode(m['.yandex.cloud.mapKey'], w.uint32(812082).fork()).ldelim();
        return w;
      };
      FieldOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.FieldOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.ctype = r.int32();
              break;
            case 2:
              m.packed = r.bool();
              break;
            case 6:
              m.jstype = r.int32();
              break;
            case 5:
              m.lazy = r.bool();
              break;
            case 3:
              m.deprecated = r.bool();
              break;
            case 10:
              m.weak = r.bool();
              break;
            case 999:
              if (!(m.uninterpretedOption && m.uninterpretedOption.length)) m.uninterpretedOption = [];
              m.uninterpretedOption.push($root.contrib.google.protobuf.UninterpretedOption.decode(r, r.uint32()));
              break;
            case 67321:
              m['.yandex.cloud.api.tools.field'] = $root.api.api.tools.FieldOptions.decode(r, r.uint32());
              break;
            case 101501:
              m['.yandex.cloud.required'] = r.bool();
              break;
            case 101502:
              m['.yandex.cloud.pattern'] = r.string();
              break;
            case 101503:
              m['.yandex.cloud.value'] = r.string();
              break;
            case 101504:
              m['.yandex.cloud.size'] = r.string();
              break;
            case 101505:
              m['.yandex.cloud.length'] = r.string();
              break;
            case 101506:
              m['.yandex.cloud.unique'] = r.bool();
              break;
            case 101510:
              m['.yandex.cloud.mapKey'] = $root.api.MapKeySpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let CType = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'STRING')] = 0;
        values[(valuesById[1] = 'CORD')] = 1;
        values[(valuesById[2] = 'STRING_PIECE')] = 2;
        return values;
      })();
      FieldOptions.CType = CType;
      let JSType = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'JS_NORMAL')] = 0;
        values[(valuesById[1] = 'JS_STRING')] = 1;
        values[(valuesById[2] = 'JS_NUMBER')] = 2;
        return values;
      })();
      FieldOptions.JSType = JSType;
      return FieldOptions;
    })();
  })(root);
  (function($root) {
    $root.OneofOptions = (function() {
      function OneofOptions(p) {
        this.uninterpretedOption = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
      OneofOptions.prototype['.yandex.cloud.exactlyOne'] = false;
      OneofOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.uninterpretedOption != null && m.uninterpretedOption.length) {
          for (let i = 0; i < m.uninterpretedOption.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.encode(m.uninterpretedOption[i], w.uint32(7994).fork()).ldelim();
        }
        if (m['.yandex.cloud.exactlyOne'] != null && m.hasOwnProperty('.yandex.cloud.exactlyOne')) w.uint32(811200).bool(m['.yandex.cloud.exactlyOne']);
        return w;
      };
      OneofOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.OneofOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 999:
              if (!(m.uninterpretedOption && m.uninterpretedOption.length)) m.uninterpretedOption = [];
              m.uninterpretedOption.push($root.contrib.google.protobuf.UninterpretedOption.decode(r, r.uint32()));
              break;
            case 101400:
              m['.yandex.cloud.exactlyOne'] = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return OneofOptions;
    })();
  })(root);
  (function($root) {
    $root.EnumOptions = (function() {
      function EnumOptions(p) {
        this.uninterpretedOption = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      EnumOptions.prototype.allowAlias = false;
      EnumOptions.prototype.deprecated = false;
      EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
      EnumOptions.prototype['.yandex.cloud.api.tools.enumeration'] = null;
      EnumOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.allowAlias != null && m.hasOwnProperty('allowAlias')) w.uint32(16).bool(m.allowAlias);
        if (m.deprecated != null && m.hasOwnProperty('deprecated')) w.uint32(24).bool(m.deprecated);
        if (m.uninterpretedOption != null && m.uninterpretedOption.length) {
          for (let i = 0; i < m.uninterpretedOption.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.encode(m.uninterpretedOption[i], w.uint32(7994).fork()).ldelim();
        }
        if (m['.yandex.cloud.api.tools.enumeration'] != null && m.hasOwnProperty('.yandex.cloud.api.tools.enumeration')) $root.api.api.tools.EnumOptions.encode(m['.yandex.cloud.api.tools.enumeration'], w.uint32(538570).fork()).ldelim();
        return w;
      };
      EnumOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.EnumOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 2:
              m.allowAlias = r.bool();
              break;
            case 3:
              m.deprecated = r.bool();
              break;
            case 999:
              if (!(m.uninterpretedOption && m.uninterpretedOption.length)) m.uninterpretedOption = [];
              m.uninterpretedOption.push($root.contrib.google.protobuf.UninterpretedOption.decode(r, r.uint32()));
              break;
            case 67321:
              m['.yandex.cloud.api.tools.enumeration'] = $root.api.api.tools.EnumOptions.decode(r, r.uint32());
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
    $root.EnumValueOptions = (function() {
      function EnumValueOptions(p) {
        this.uninterpretedOption = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      EnumValueOptions.prototype.deprecated = false;
      EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
      EnumValueOptions.prototype['.yandex.cloud.api.tools.value'] = null;
      EnumValueOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deprecated != null && m.hasOwnProperty('deprecated')) w.uint32(8).bool(m.deprecated);
        if (m.uninterpretedOption != null && m.uninterpretedOption.length) {
          for (let i = 0; i < m.uninterpretedOption.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.encode(m.uninterpretedOption[i], w.uint32(7994).fork()).ldelim();
        }
        if (m['.yandex.cloud.api.tools.value'] != null && m.hasOwnProperty('.yandex.cloud.api.tools.value')) $root.api.api.tools.EnumValueOptions.encode(m['.yandex.cloud.api.tools.value'], w.uint32(538570).fork()).ldelim();
        return w;
      };
      EnumValueOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.EnumValueOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.deprecated = r.bool();
              break;
            case 999:
              if (!(m.uninterpretedOption && m.uninterpretedOption.length)) m.uninterpretedOption = [];
              m.uninterpretedOption.push($root.contrib.google.protobuf.UninterpretedOption.decode(r, r.uint32()));
              break;
            case 67321:
              m['.yandex.cloud.api.tools.value'] = $root.api.api.tools.EnumValueOptions.decode(r, r.uint32());
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
        this.uninterpretedOption = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ServiceOptions.prototype.deprecated = false;
      ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
      ServiceOptions.prototype['.yandex.cloud.api.tools.service'] = null;
      ServiceOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deprecated != null && m.hasOwnProperty('deprecated')) w.uint32(264).bool(m.deprecated);
        if (m.uninterpretedOption != null && m.uninterpretedOption.length) {
          for (let i = 0; i < m.uninterpretedOption.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.encode(m.uninterpretedOption[i], w.uint32(7994).fork()).ldelim();
        }
        if (m['.yandex.cloud.api.tools.service'] != null && m.hasOwnProperty('.yandex.cloud.api.tools.service')) $root.api.api.tools.ServiceOptions.encode(m['.yandex.cloud.api.tools.service'], w.uint32(538570).fork()).ldelim();
        return w;
      };
      ServiceOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.ServiceOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 33:
              m.deprecated = r.bool();
              break;
            case 999:
              if (!(m.uninterpretedOption && m.uninterpretedOption.length)) m.uninterpretedOption = [];
              m.uninterpretedOption.push($root.contrib.google.protobuf.UninterpretedOption.decode(r, r.uint32()));
              break;
            case 67321:
              m['.yandex.cloud.api.tools.service'] = $root.api.api.tools.ServiceOptions.decode(r, r.uint32());
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
        this.uninterpretedOption = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MethodOptions.prototype.deprecated = false;
      MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
      MethodOptions.prototype['.yandex.cloud.api.operation'] = null;
      MethodOptions.prototype['.yandex.cloud.api.tools.method'] = null;
      MethodOptions.prototype['.google.api.http'] = null;
      MethodOptions.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.deprecated != null && m.hasOwnProperty('deprecated')) w.uint32(264).bool(m.deprecated);
        if (m.uninterpretedOption != null && m.uninterpretedOption.length) {
          for (let i = 0; i < m.uninterpretedOption.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.encode(m.uninterpretedOption[i], w.uint32(7994).fork()).ldelim();
        }
        if (m['.yandex.cloud.api.tools.method'] != null && m.hasOwnProperty('.yandex.cloud.api.tools.method')) $root.api.api.tools.MethodOptions.encode(m['.yandex.cloud.api.tools.method'], w.uint32(538570).fork()).ldelim();
        if (m['.yandex.cloud.api.operation'] != null && m.hasOwnProperty('.yandex.cloud.api.operation')) $root.api.api.Operation.encode(m['.yandex.cloud.api.operation'], w.uint32(698674).fork()).ldelim();
        if (m['.google.api.http'] != null && m.hasOwnProperty('.google.api.http')) $root.contrib.google.api.HttpRule.encode(m['.google.api.http'], w.uint32(578365826).fork()).ldelim();
        return w;
      };
      MethodOptions.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.MethodOptions();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 33:
              m.deprecated = r.bool();
              break;
            case 999:
              if (!(m.uninterpretedOption && m.uninterpretedOption.length)) m.uninterpretedOption = [];
              m.uninterpretedOption.push($root.contrib.google.protobuf.UninterpretedOption.decode(r, r.uint32()));
              break;
            case 87334:
              m['.yandex.cloud.api.operation'] = $root.api.api.Operation.decode(r, r.uint32());
              break;
            case 67321:
              m['.yandex.cloud.api.tools.method'] = $root.api.api.tools.MethodOptions.decode(r, r.uint32());
              break;
            case 72295728:
              m['.google.api.http'] = $root.contrib.google.api.HttpRule.decode(r, r.uint32());
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
    $root.UninterpretedOption = (function() {
      function UninterpretedOption(p) {
        this.name = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UninterpretedOption.prototype.name = $util.emptyArray;
      UninterpretedOption.prototype.identifierValue = '';
      UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
      UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      UninterpretedOption.prototype.doubleValue = 0;
      UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
      UninterpretedOption.prototype.aggregateValue = '';
      UninterpretedOption.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.name.length) {
          for (let i = 0; i < m.name.length; ++i) $root.contrib.google.protobuf.UninterpretedOption.NamePart.encode(m.name[i], w.uint32(18).fork()).ldelim();
        }
        if (m.identifierValue != null && m.hasOwnProperty('identifierValue')) w.uint32(26).string(m.identifierValue);
        if (m.positiveIntValue != null && m.hasOwnProperty('positiveIntValue')) w.uint32(32).uint64(m.positiveIntValue);
        if (m.negativeIntValue != null && m.hasOwnProperty('negativeIntValue')) w.uint32(40).int64(m.negativeIntValue);
        if (m.doubleValue != null && m.hasOwnProperty('doubleValue')) w.uint32(49).double(m.doubleValue);
        if (m.stringValue != null && m.hasOwnProperty('stringValue')) w.uint32(58).bytes(m.stringValue);
        if (m.aggregateValue != null && m.hasOwnProperty('aggregateValue')) w.uint32(66).string(m.aggregateValue);
        return w;
      };
      UninterpretedOption.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.UninterpretedOption();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 2:
              if (!(m.name && m.name.length)) m.name = [];
              m.name.push($root.contrib.google.protobuf.UninterpretedOption.NamePart.decode(r, r.uint32()));
              break;
            case 3:
              m.identifierValue = r.string();
              break;
            case 4:
              m.positiveIntValue = r.uint64();
              break;
            case 5:
              m.negativeIntValue = r.int64();
              break;
            case 6:
              m.doubleValue = r.double();
              break;
            case 7:
              m.stringValue = r.bytes();
              break;
            case 8:
              m.aggregateValue = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      UninterpretedOption.NamePart = (function() {
        function NamePart(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        NamePart.prototype.namePart = '';
        NamePart.prototype.isExtension = false;
        NamePart.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          w.uint32(10).string(m.namePart);
          w.uint32(16).bool(m.isExtension);
          return w;
        };
        NamePart.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.protobuf.UninterpretedOption.NamePart();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.namePart = r.string();
                break;
              case 2:
                m.isExtension = r.bool();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          if (!m.hasOwnProperty('namePart')) throw $util.ProtocolError("missing required 'namePart'", { instance: m });
          if (!m.hasOwnProperty('isExtension')) throw $util.ProtocolError("missing required 'isExtension'", { instance: m });
          return m;
        };
        return NamePart;
      })();
      return UninterpretedOption;
    })();
  })(root);
  (function($root) {
    $root.SourceCodeInfo = (function() {
      function SourceCodeInfo(p) {
        this.location = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SourceCodeInfo.prototype.location = $util.emptyArray;
      SourceCodeInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.location != null && m.location.length) {
          for (let i = 0; i < m.location.length; ++i) $root.contrib.google.protobuf.SourceCodeInfo.Location.encode(m.location[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      SourceCodeInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.SourceCodeInfo();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.location && m.location.length)) m.location = [];
              m.location.push($root.contrib.google.protobuf.SourceCodeInfo.Location.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      SourceCodeInfo.Location = (function() {
        function Location(p) {
          this.path = [];
          this.span = [];
          this.leadingDetachedComments = [];
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Location.prototype.path = $util.emptyArray;
        Location.prototype.span = $util.emptyArray;
        Location.prototype.leadingComments = '';
        Location.prototype.trailingComments = '';
        Location.prototype.leadingDetachedComments = $util.emptyArray;
        Location.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.path != null && m.path.length) {
            w.uint32(10).fork();
            for (let i = 0; i < m.path.length; ++i) w.int32(m.path[i]);
            w.ldelim();
          }
          if (m.span != null && m.span.length) {
            w.uint32(18).fork();
            for (let i = 0; i < m.span.length; ++i) w.int32(m.span[i]);
            w.ldelim();
          }
          if (m.leadingComments != null && m.hasOwnProperty('leadingComments')) w.uint32(26).string(m.leadingComments);
          if (m.trailingComments != null && m.hasOwnProperty('trailingComments')) w.uint32(34).string(m.trailingComments);
          if (m.leadingDetachedComments != null && m.leadingDetachedComments.length) {
            for (let i = 0; i < m.leadingDetachedComments.length; ++i) w.uint32(50).string(m.leadingDetachedComments[i]);
          }
          return w;
        };
        Location.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.protobuf.SourceCodeInfo.Location();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.path && m.path.length)) m.path = [];
                if ((t & 7) === 2) {
                  let c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.path.push(r.int32());
                } else m.path.push(r.int32());
                break;
              case 2:
                if (!(m.span && m.span.length)) m.span = [];
                if ((t & 7) === 2) {
                  let c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.span.push(r.int32());
                } else m.span.push(r.int32());
                break;
              case 3:
                m.leadingComments = r.string();
                break;
              case 4:
                m.trailingComments = r.string();
                break;
              case 6:
                if (!(m.leadingDetachedComments && m.leadingDetachedComments.length)) m.leadingDetachedComments = [];
                m.leadingDetachedComments.push(r.string());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Location;
      })();
      return SourceCodeInfo;
    })();
  })(root);
  (function($root) {
    $root.GeneratedCodeInfo = (function() {
      function GeneratedCodeInfo(p) {
        this.annotation = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
      GeneratedCodeInfo.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.annotation != null && m.annotation.length) {
          for (let i = 0; i < m.annotation.length; ++i) $root.contrib.google.protobuf.GeneratedCodeInfo.Annotation.encode(m.annotation[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      GeneratedCodeInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.GeneratedCodeInfo();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.annotation && m.annotation.length)) m.annotation = [];
              m.annotation.push($root.contrib.google.protobuf.GeneratedCodeInfo.Annotation.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      GeneratedCodeInfo.Annotation = (function() {
        function Annotation(p) {
          this.path = [];
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Annotation.prototype.path = $util.emptyArray;
        Annotation.prototype.sourceFile = '';
        Annotation.prototype.begin = 0;
        Annotation.prototype.end = 0;
        Annotation.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.path != null && m.path.length) {
            w.uint32(10).fork();
            for (let i = 0; i < m.path.length; ++i) w.int32(m.path[i]);
            w.ldelim();
          }
          if (m.sourceFile != null && m.hasOwnProperty('sourceFile')) w.uint32(18).string(m.sourceFile);
          if (m.begin != null && m.hasOwnProperty('begin')) w.uint32(24).int32(m.begin);
          if (m.end != null && m.hasOwnProperty('end')) w.uint32(32).int32(m.end);
          return w;
        };
        Annotation.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.contrib.google.protobuf.GeneratedCodeInfo.Annotation();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.path && m.path.length)) m.path = [];
                if ((t & 7) === 2) {
                  let c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.path.push(r.int32());
                } else m.path.push(r.int32());
                break;
              case 2:
                m.sourceFile = r.string();
                break;
              case 3:
                m.begin = r.int32();
                break;
              case 4:
                m.end = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return Annotation;
      })();
      return GeneratedCodeInfo;
    })();
  })(root);
  (function($root) {
    $root.Empty = (function() {
      function Empty(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Empty.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      Empty.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Empty();
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
      return Empty;
    })();
  })(root);
  (function($root) {
    $root.SourceContext = (function() {
      function SourceContext(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SourceContext.prototype.fileName = '';
      SourceContext.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.fileName != null && m.hasOwnProperty('fileName')) w.uint32(10).string(m.fileName);
        return w;
      };
      SourceContext.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.SourceContext();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.fileName = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SourceContext;
    })();
  })(root);
  (function($root) {
    $root.Struct = (function() {
      function Struct(p) {
        this.fields = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Struct.prototype.fields = $util.emptyObject;
      Struct.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.fields != null && m.hasOwnProperty('fields')) {
          for (let ks = Object.keys(m.fields), i = 0; i < ks.length; ++i) {
            w.uint32(10)
              .fork()
              .uint32(10)
              .string(ks[i]);
            $root.contrib.google.protobuf.Value.encode(m.fields[ks[i]], w.uint32(18).fork())
              .ldelim()
              .ldelim();
          }
        }
        return w;
      };
      Struct.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Struct(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              r.skip().pos++;
              if (m.fields === $util.emptyObject) m.fields = {};
              k = r.string();
              r.pos++;
              m.fields[k] = $root.contrib.google.protobuf.Value.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Struct;
    })();
  })(root);
  (function($root) {
    $root.Value = (function() {
      function Value(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Value.prototype.nullValue = 0;
      Value.prototype.numberValue = 0;
      Value.prototype.stringValue = '';
      Value.prototype.boolValue = false;
      Value.prototype.structValue = null;
      Value.prototype.listValue = null;
      let $oneOfFields;
      Object.defineProperty(Value.prototype, 'kind', {
        get: $util.oneOfGetter(($oneOfFields = ['nullValue', 'numberValue', 'stringValue', 'boolValue', 'structValue', 'listValue'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Value.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nullValue != null && m.hasOwnProperty('nullValue')) w.uint32(8).int32(m.nullValue);
        if (m.numberValue != null && m.hasOwnProperty('numberValue')) w.uint32(17).double(m.numberValue);
        if (m.stringValue != null && m.hasOwnProperty('stringValue')) w.uint32(26).string(m.stringValue);
        if (m.boolValue != null && m.hasOwnProperty('boolValue')) w.uint32(32).bool(m.boolValue);
        if (m.structValue != null && m.hasOwnProperty('structValue')) $root.contrib.google.protobuf.Struct.encode(m.structValue, w.uint32(42).fork()).ldelim();
        if (m.listValue != null && m.hasOwnProperty('listValue')) $root.contrib.google.protobuf.ListValue.encode(m.listValue, w.uint32(50).fork()).ldelim();
        return w;
      };
      Value.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Value();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nullValue = r.int32();
              break;
            case 2:
              m.numberValue = r.double();
              break;
            case 3:
              m.stringValue = r.string();
              break;
            case 4:
              m.boolValue = r.bool();
              break;
            case 5:
              m.structValue = $root.contrib.google.protobuf.Struct.decode(r, r.uint32());
              break;
            case 6:
              m.listValue = $root.contrib.google.protobuf.ListValue.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Value;
    })();
  })(root);
  (function($root) {
    $root.NullValue = (function() {
      let NullValue = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'NULL_VALUE')] = 0;
        return values;
      })();
      return NullValue;
    })();
  })(root);
  (function($root) {
    $root.ListValue = (function() {
      function ListValue(p) {
        this.values = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListValue.prototype.values = $util.emptyArray;
      ListValue.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.values != null && m.values.length) {
          for (let i = 0; i < m.values.length; ++i) $root.contrib.google.protobuf.Value.encode(m.values[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      ListValue.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.ListValue();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.values && m.values.length)) m.values = [];
              m.values.push($root.contrib.google.protobuf.Value.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListValue;
    })();
  })(root);
  (function($root) {
    $root.Type = (function() {
      function Type(p) {
        this.fields = [];
        this.oneofs = [];
        this.options = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Type.prototype.name = '';
      Type.prototype.fields = $util.emptyArray;
      Type.prototype.oneofs = $util.emptyArray;
      Type.prototype.options = $util.emptyArray;
      Type.prototype.sourceContext = null;
      Type.prototype.syntax = 0;
      Type.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.fields != null && m.fields.length) {
          for (let i = 0; i < m.fields.length; ++i) $root.contrib.google.protobuf.Field.encode(m.fields[i], w.uint32(18).fork()).ldelim();
        }
        if (m.oneofs != null && m.oneofs.length) {
          for (let i = 0; i < m.oneofs.length; ++i) w.uint32(26).string(m.oneofs[i]);
        }
        if (m.options != null && m.options.length) {
          for (let i = 0; i < m.options.length; ++i) $root.contrib.google.protobuf.Option.encode(m.options[i], w.uint32(34).fork()).ldelim();
        }
        if (m.sourceContext != null && m.hasOwnProperty('sourceContext')) $root.contrib.google.protobuf.SourceContext.encode(m.sourceContext, w.uint32(42).fork()).ldelim();
        if (m.syntax != null && m.hasOwnProperty('syntax')) w.uint32(48).int32(m.syntax);
        return w;
      };
      Type.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Type();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              if (!(m.fields && m.fields.length)) m.fields = [];
              m.fields.push($root.contrib.google.protobuf.Field.decode(r, r.uint32()));
              break;
            case 3:
              if (!(m.oneofs && m.oneofs.length)) m.oneofs = [];
              m.oneofs.push(r.string());
              break;
            case 4:
              if (!(m.options && m.options.length)) m.options = [];
              m.options.push($root.contrib.google.protobuf.Option.decode(r, r.uint32()));
              break;
            case 5:
              m.sourceContext = $root.contrib.google.protobuf.SourceContext.decode(r, r.uint32());
              break;
            case 6:
              m.syntax = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Type;
    })();
  })(root);
  (function($root) {
    $root.Field = (function() {
      function Field(p) {
        this.options = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Field.prototype.kind = 0;
      Field.prototype.cardinality = 0;
      Field.prototype.number = 0;
      Field.prototype.name = '';
      Field.prototype.typeUrl = '';
      Field.prototype.oneofIndex = 0;
      Field.prototype.packed = false;
      Field.prototype.options = $util.emptyArray;
      Field.prototype.jsonName = '';
      Field.prototype.defaultValue = '';
      Field.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.kind != null && m.hasOwnProperty('kind')) w.uint32(8).int32(m.kind);
        if (m.cardinality != null && m.hasOwnProperty('cardinality')) w.uint32(16).int32(m.cardinality);
        if (m.number != null && m.hasOwnProperty('number')) w.uint32(24).int32(m.number);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(34).string(m.name);
        if (m.typeUrl != null && m.hasOwnProperty('typeUrl')) w.uint32(50).string(m.typeUrl);
        if (m.oneofIndex != null && m.hasOwnProperty('oneofIndex')) w.uint32(56).int32(m.oneofIndex);
        if (m.packed != null && m.hasOwnProperty('packed')) w.uint32(64).bool(m.packed);
        if (m.options != null && m.options.length) {
          for (let i = 0; i < m.options.length; ++i) $root.contrib.google.protobuf.Option.encode(m.options[i], w.uint32(74).fork()).ldelim();
        }
        if (m.jsonName != null && m.hasOwnProperty('jsonName')) w.uint32(82).string(m.jsonName);
        if (m.defaultValue != null && m.hasOwnProperty('defaultValue')) w.uint32(90).string(m.defaultValue);
        return w;
      };
      Field.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Field();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.kind = r.int32();
              break;
            case 2:
              m.cardinality = r.int32();
              break;
            case 3:
              m.number = r.int32();
              break;
            case 4:
              m.name = r.string();
              break;
            case 6:
              m.typeUrl = r.string();
              break;
            case 7:
              m.oneofIndex = r.int32();
              break;
            case 8:
              m.packed = r.bool();
              break;
            case 9:
              if (!(m.options && m.options.length)) m.options = [];
              m.options.push($root.contrib.google.protobuf.Option.decode(r, r.uint32()));
              break;
            case 10:
              m.jsonName = r.string();
              break;
            case 11:
              m.defaultValue = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Kind = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'TYPE_UNKNOWN')] = 0;
        values[(valuesById[1] = 'TYPE_DOUBLE')] = 1;
        values[(valuesById[2] = 'TYPE_FLOAT')] = 2;
        values[(valuesById[3] = 'TYPE_INT64')] = 3;
        values[(valuesById[4] = 'TYPE_UINT64')] = 4;
        values[(valuesById[5] = 'TYPE_INT32')] = 5;
        values[(valuesById[6] = 'TYPE_FIXED64')] = 6;
        values[(valuesById[7] = 'TYPE_FIXED32')] = 7;
        values[(valuesById[8] = 'TYPE_BOOL')] = 8;
        values[(valuesById[9] = 'TYPE_STRING')] = 9;
        values[(valuesById[10] = 'TYPE_GROUP')] = 10;
        values[(valuesById[11] = 'TYPE_MESSAGE')] = 11;
        values[(valuesById[12] = 'TYPE_BYTES')] = 12;
        values[(valuesById[13] = 'TYPE_UINT32')] = 13;
        values[(valuesById[14] = 'TYPE_ENUM')] = 14;
        values[(valuesById[15] = 'TYPE_SFIXED32')] = 15;
        values[(valuesById[16] = 'TYPE_SFIXED64')] = 16;
        values[(valuesById[17] = 'TYPE_SINT32')] = 17;
        values[(valuesById[18] = 'TYPE_SINT64')] = 18;
        return values;
      })();
      Field.Kind = Kind;
      let Cardinality = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'CARDINALITY_UNKNOWN')] = 0;
        values[(valuesById[1] = 'CARDINALITY_OPTIONAL')] = 1;
        values[(valuesById[2] = 'CARDINALITY_REQUIRED')] = 2;
        values[(valuesById[3] = 'CARDINALITY_REPEATED')] = 3;
        return values;
      })();
      Field.Cardinality = Cardinality;
      return Field;
    })();
  })(root);
  (function($root) {
    $root.Enum = (function() {
      function Enum(p) {
        this.enumvalue = [];
        this.options = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Enum.prototype.name = '';
      Enum.prototype.enumvalue = $util.emptyArray;
      Enum.prototype.options = $util.emptyArray;
      Enum.prototype.sourceContext = null;
      Enum.prototype.syntax = 0;
      Enum.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.enumvalue != null && m.enumvalue.length) {
          for (let i = 0; i < m.enumvalue.length; ++i) $root.contrib.google.protobuf.EnumValue.encode(m.enumvalue[i], w.uint32(18).fork()).ldelim();
        }
        if (m.options != null && m.options.length) {
          for (let i = 0; i < m.options.length; ++i) $root.contrib.google.protobuf.Option.encode(m.options[i], w.uint32(26).fork()).ldelim();
        }
        if (m.sourceContext != null && m.hasOwnProperty('sourceContext')) $root.contrib.google.protobuf.SourceContext.encode(m.sourceContext, w.uint32(34).fork()).ldelim();
        if (m.syntax != null && m.hasOwnProperty('syntax')) w.uint32(40).int32(m.syntax);
        return w;
      };
      Enum.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Enum();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              if (!(m.enumvalue && m.enumvalue.length)) m.enumvalue = [];
              m.enumvalue.push($root.contrib.google.protobuf.EnumValue.decode(r, r.uint32()));
              break;
            case 3:
              if (!(m.options && m.options.length)) m.options = [];
              m.options.push($root.contrib.google.protobuf.Option.decode(r, r.uint32()));
              break;
            case 4:
              m.sourceContext = $root.contrib.google.protobuf.SourceContext.decode(r, r.uint32());
              break;
            case 5:
              m.syntax = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Enum;
    })();
  })(root);
  (function($root) {
    $root.EnumValue = (function() {
      function EnumValue(p) {
        this.options = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      EnumValue.prototype.name = '';
      EnumValue.prototype.number = 0;
      EnumValue.prototype.options = $util.emptyArray;
      EnumValue.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.number != null && m.hasOwnProperty('number')) w.uint32(16).int32(m.number);
        if (m.options != null && m.options.length) {
          for (let i = 0; i < m.options.length; ++i) $root.contrib.google.protobuf.Option.encode(m.options[i], w.uint32(26).fork()).ldelim();
        }
        return w;
      };
      EnumValue.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.EnumValue();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.number = r.int32();
              break;
            case 3:
              if (!(m.options && m.options.length)) m.options = [];
              m.options.push($root.contrib.google.protobuf.Option.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return EnumValue;
    })();
  })(root);
  (function($root) {
    $root.Option = (function() {
      function Option(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Option.prototype.name = '';
      Option.prototype.value = null;
      Option.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.value != null && m.hasOwnProperty('value')) $root.contrib.google.protobuf.Any.encode(m.value, w.uint32(18).fork()).ldelim();
        return w;
      };
      Option.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.protobuf.Option();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.value = $root.contrib.google.protobuf.Any.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Option;
    })();
  })(root);
  (function($root) {
    $root.Syntax = (function() {
      let Syntax = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'SYNTAX_PROTO2')] = 0;
        values[(valuesById[1] = 'SYNTAX_PROTO3')] = 1;
        return values;
      })();
      return Syntax;
    })();
  })(root);
  registar.register('contrib.google.protobuf', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
