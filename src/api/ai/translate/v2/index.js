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
  (function($root) {
    $root.TranslatedText = (function() {
      function TranslatedText(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TranslatedText.prototype.text = '';
      TranslatedText.prototype.detectedLanguageCode = '';
      TranslatedText.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.text != null && m.hasOwnProperty('text')) w.uint32(10).string(m.text);
        if (m.detectedLanguageCode != null && m.hasOwnProperty('detectedLanguageCode')) w.uint32(18).string(m.detectedLanguageCode);
        return w;
      };
      TranslatedText.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.TranslatedText();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.text = r.string();
              break;
            case 2:
              m.detectedLanguageCode = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return TranslatedText;
    })();
  })(root);
  (function($root) {
    $root.Language = (function() {
      function Language(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Language.prototype.code = '';
      Language.prototype.name = '';
      Language.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.code != null && m.hasOwnProperty('code')) w.uint32(10).string(m.code);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(18).string(m.name);
        return w;
      };
      Language.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.Language();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.code = r.string();
              break;
            case 2:
              m.name = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Language;
    })();
  })(root);
  (function($root) {
    $root.TranslationService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.TranslationService.makeGrpcConstructor());
    };
    $root.TranslationService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        translate: {
          path: '/yandex.cloud.ai.translate.v2.TranslationService/Translate',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.ai.translate.v2.TranslateRequest,
          responseType: $root.api.ai.translate.v2.TranslateResponse,
          requestSerialize: r => {
            return $root.api.ai.translate.v2.TranslateRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.ai.translate.v2.TranslateRequest.decode,
          responseSerialize: r => {
            return $root.api.ai.translate.v2.TranslateResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.ai.translate.v2.TranslateResponse.decode
        },
        detectLanguage: {
          path: '/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.ai.translate.v2.DetectLanguageRequest,
          responseType: $root.api.ai.translate.v2.DetectLanguageResponse,
          requestSerialize: r => {
            return $root.api.ai.translate.v2.DetectLanguageRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.ai.translate.v2.DetectLanguageRequest.decode,
          responseSerialize: r => {
            return $root.api.ai.translate.v2.DetectLanguageResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.ai.translate.v2.DetectLanguageResponse.decode
        },
        listLanguages: {
          path: '/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.ai.translate.v2.ListLanguagesRequest,
          responseType: $root.api.ai.translate.v2.ListLanguagesResponse,
          requestSerialize: r => {
            return $root.api.ai.translate.v2.ListLanguagesRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.ai.translate.v2.ListLanguagesRequest.decode,
          responseSerialize: r => {
            return $root.api.ai.translate.v2.ListLanguagesResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.ai.translate.v2.ListLanguagesResponse.decode
        }
      });
      ctor.__endpointId = 'ai-translate';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.TranslateRequest = (function() {
      function TranslateRequest(p) {
        this.texts = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TranslateRequest.prototype.sourceLanguageCode = '';
      TranslateRequest.prototype.targetLanguageCode = '';
      TranslateRequest.prototype.format = 0;
      TranslateRequest.prototype.texts = $util.emptyArray;
      TranslateRequest.prototype.folderId = '';
      TranslateRequest.prototype.model = '';
      TranslateRequest.prototype.glossaryConfig = null;
      TranslateRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.sourceLanguageCode != null && m.hasOwnProperty('sourceLanguageCode')) w.uint32(10).string(m.sourceLanguageCode);
        if (m.targetLanguageCode != null && m.hasOwnProperty('targetLanguageCode')) w.uint32(18).string(m.targetLanguageCode);
        if (m.format != null && m.hasOwnProperty('format')) w.uint32(24).int32(m.format);
        if (m.texts != null && m.texts.length) {
          for (let i = 0; i < m.texts.length; ++i) w.uint32(34).string(m.texts[i]);
        }
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(42).string(m.folderId);
        if (m.model != null && m.hasOwnProperty('model')) w.uint32(50).string(m.model);
        if (m.glossaryConfig != null && m.hasOwnProperty('glossaryConfig')) $root.api.ai.translate.v2.TranslateGlossaryConfig.encode(m.glossaryConfig, w.uint32(58).fork()).ldelim();
        return w;
      };
      TranslateRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.TranslateRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sourceLanguageCode = r.string();
              break;
            case 2:
              m.targetLanguageCode = r.string();
              break;
            case 3:
              m.format = r.int32();
              break;
            case 4:
              if (!(m.texts && m.texts.length)) m.texts = [];
              m.texts.push(r.string());
              break;
            case 5:
              m.folderId = r.string();
              break;
            case 6:
              m.model = r.string();
              break;
            case 7:
              m.glossaryConfig = $root.api.ai.translate.v2.TranslateGlossaryConfig.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Format = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'FORMAT_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'PLAIN_TEXT')] = 1;
        values[(valuesById[2] = 'HTML')] = 2;
        return values;
      })();
      TranslateRequest.Format = Format;
      return TranslateRequest;
    })();
  })(root);
  (function($root) {
    $root.TranslateGlossaryConfig = (function() {
      function TranslateGlossaryConfig(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TranslateGlossaryConfig.prototype.glossaryData = null;
      let $oneOfFields;
      Object.defineProperty(TranslateGlossaryConfig.prototype, 'glossarySource', {
        get: $util.oneOfGetter(($oneOfFields = ['glossaryData'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      TranslateGlossaryConfig.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.glossaryData != null && m.hasOwnProperty('glossaryData')) $root.api.ai.translate.v2.GlossaryData.encode(m.glossaryData, w.uint32(10).fork()).ldelim();
        return w;
      };
      TranslateGlossaryConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.TranslateGlossaryConfig();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.glossaryData = $root.api.ai.translate.v2.GlossaryData.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return TranslateGlossaryConfig;
    })();
  })(root);
  (function($root) {
    $root.GlossaryData = (function() {
      function GlossaryData(p) {
        this.glossaryPairs = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GlossaryData.prototype.glossaryPairs = $util.emptyArray;
      GlossaryData.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.glossaryPairs != null && m.glossaryPairs.length) {
          for (let i = 0; i < m.glossaryPairs.length; ++i) $root.api.ai.translate.v2.GlossaryPair.encode(m.glossaryPairs[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      GlossaryData.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.GlossaryData();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.glossaryPairs && m.glossaryPairs.length)) m.glossaryPairs = [];
              m.glossaryPairs.push($root.api.ai.translate.v2.GlossaryPair.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GlossaryData;
    })();
  })(root);
  (function($root) {
    $root.GlossaryPair = (function() {
      function GlossaryPair(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GlossaryPair.prototype.sourceText = '';
      GlossaryPair.prototype.translatedText = '';
      GlossaryPair.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.sourceText != null && m.hasOwnProperty('sourceText')) w.uint32(10).string(m.sourceText);
        if (m.translatedText != null && m.hasOwnProperty('translatedText')) w.uint32(18).string(m.translatedText);
        return w;
      };
      GlossaryPair.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.GlossaryPair();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.sourceText = r.string();
              break;
            case 2:
              m.translatedText = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GlossaryPair;
    })();
  })(root);
  (function($root) {
    $root.TranslateResponse = (function() {
      function TranslateResponse(p) {
        this.translations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TranslateResponse.prototype.translations = $util.emptyArray;
      TranslateResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.translations != null && m.translations.length) {
          for (let i = 0; i < m.translations.length; ++i) $root.api.ai.translate.v2.TranslatedText.encode(m.translations[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      TranslateResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.TranslateResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.translations && m.translations.length)) m.translations = [];
              m.translations.push($root.api.ai.translate.v2.TranslatedText.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return TranslateResponse;
    })();
  })(root);
  (function($root) {
    $root.DetectLanguageRequest = (function() {
      function DetectLanguageRequest(p) {
        this.languageCodeHints = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DetectLanguageRequest.prototype.text = '';
      DetectLanguageRequest.prototype.languageCodeHints = $util.emptyArray;
      DetectLanguageRequest.prototype.folderId = '';
      DetectLanguageRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.text != null && m.hasOwnProperty('text')) w.uint32(10).string(m.text);
        if (m.languageCodeHints != null && m.languageCodeHints.length) {
          for (let i = 0; i < m.languageCodeHints.length; ++i) w.uint32(18).string(m.languageCodeHints[i]);
        }
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(26).string(m.folderId);
        return w;
      };
      DetectLanguageRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.DetectLanguageRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.text = r.string();
              break;
            case 2:
              if (!(m.languageCodeHints && m.languageCodeHints.length)) m.languageCodeHints = [];
              m.languageCodeHints.push(r.string());
              break;
            case 3:
              m.folderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DetectLanguageRequest;
    })();
  })(root);
  (function($root) {
    $root.DetectLanguageResponse = (function() {
      function DetectLanguageResponse(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DetectLanguageResponse.prototype.languageCode = '';
      DetectLanguageResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.languageCode != null && m.hasOwnProperty('languageCode')) w.uint32(10).string(m.languageCode);
        return w;
      };
      DetectLanguageResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.DetectLanguageResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.languageCode = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DetectLanguageResponse;
    })();
  })(root);
  (function($root) {
    $root.ListLanguagesRequest = (function() {
      function ListLanguagesRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListLanguagesRequest.prototype.folderId = '';
      ListLanguagesRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        return w;
      };
      ListLanguagesRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.ListLanguagesRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListLanguagesRequest;
    })();
  })(root);
  (function($root) {
    $root.ListLanguagesResponse = (function() {
      function ListLanguagesResponse(p) {
        this.languages = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListLanguagesResponse.prototype.languages = $util.emptyArray;
      ListLanguagesResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.languages != null && m.languages.length) {
          for (let i = 0; i < m.languages.length; ++i) $root.api.ai.translate.v2.Language.encode(m.languages[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      ListLanguagesResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.translate.v2.ListLanguagesResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.languages && m.languages.length)) m.languages = [];
              m.languages.push($root.api.ai.translate.v2.Language.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListLanguagesResponse;
    })();
  })(root);
  registar.register('api.ai.translate.v2', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
