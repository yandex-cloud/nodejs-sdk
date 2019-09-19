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
    $root.DayOfWeek = (function() {
      let DayOfWeek = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'DAY_OF_WEEK_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'MONDAY')] = 1;
        values[(valuesById[2] = 'TUESDAY')] = 2;
        values[(valuesById[3] = 'WEDNESDAY')] = 3;
        values[(valuesById[4] = 'THURSDAY')] = 4;
        values[(valuesById[5] = 'FRIDAY')] = 5;
        values[(valuesById[6] = 'SATURDAY')] = 6;
        values[(valuesById[7] = 'SUNDAY')] = 7;
        return values;
      })();
      return DayOfWeek;
    })();
  })(root);
  (function($root) {
    $root.TimeOfDay = (function() {
      function TimeOfDay(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TimeOfDay.prototype.hours = 0;
      TimeOfDay.prototype.minutes = 0;
      TimeOfDay.prototype.seconds = 0;
      TimeOfDay.prototype.nanos = 0;
      TimeOfDay.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.hours != null && m.hasOwnProperty('hours')) w.uint32(8).int32(m.hours);
        if (m.minutes != null && m.hasOwnProperty('minutes')) w.uint32(16).int32(m.minutes);
        if (m.seconds != null && m.hasOwnProperty('seconds')) w.uint32(24).int32(m.seconds);
        if (m.nanos != null && m.hasOwnProperty('nanos')) w.uint32(32).int32(m.nanos);
        return w;
      };
      TimeOfDay.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.contrib.google.type.TimeOfDay();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.hours = r.int32();
              break;
            case 2:
              m.minutes = r.int32();
              break;
            case 3:
              m.seconds = r.int32();
              break;
            case 4:
              m.nanos = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return TimeOfDay;
    })();
  })(root);
  registar.register('contrib.google.type', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
