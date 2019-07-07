module.exports = (function() {
  const $protobuf = require('protobufjs');
  const grpc = require('grpc');
  const registar = require('../../../lib/registar.js');
  const util = require('../../../lib/util.js');
  const $Reader = $protobuf.Reader;
  const $Writer = $protobuf.Writer;
  const $util = $protobuf.util;
  let root = {};
  (function($root) {
    $root.Operation = (function() {
      function Operation(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Operation.prototype.metadata = '';
      Operation.prototype.response = '';
      Operation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.metadata != null && m.hasOwnProperty('metadata')) w.uint32(10).string(m.metadata);
        if (m.response != null && m.hasOwnProperty('response')) w.uint32(18).string(m.response);
        return w;
      };
      Operation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.yandex.api.Operation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.metadata = r.string();
              break;
            case 2:
              m.response = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Operation;
    })();
  })(root);
  registar.register('contrib.yandex.api', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
