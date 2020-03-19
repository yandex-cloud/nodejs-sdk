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
    $root.ClassAnnotation = (function() {
      function ClassAnnotation(p) {
        this.properties = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ClassAnnotation.prototype.properties = $util.emptyArray;
      ClassAnnotation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.properties != null && m.properties.length) {
          for (let i = 0; i < m.properties.length; ++i) $root.api.ai.vision.v1.Property.encode(m.properties[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      ClassAnnotation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.ClassAnnotation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.properties && m.properties.length)) m.properties = [];
              m.properties.push($root.api.ai.vision.v1.Property.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ClassAnnotation;
    })();
  })(root);
  (function($root) {
    $root.Property = (function() {
      function Property(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Property.prototype.name = '';
      Property.prototype.probability = 0;
      Property.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.probability != null && m.hasOwnProperty('probability')) w.uint32(17).double(m.probability);
        return w;
      };
      Property.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Property();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.probability = r.double();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Property;
    })();
  })(root);
  (function($root) {
    $root.FaceAnnotation = (function() {
      function FaceAnnotation(p) {
        this.faces = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FaceAnnotation.prototype.faces = $util.emptyArray;
      FaceAnnotation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.faces != null && m.faces.length) {
          for (let i = 0; i < m.faces.length; ++i) $root.api.ai.vision.v1.Face.encode(m.faces[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      FaceAnnotation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.FaceAnnotation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.faces && m.faces.length)) m.faces = [];
              m.faces.push($root.api.ai.vision.v1.Face.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FaceAnnotation;
    })();
  })(root);
  (function($root) {
    $root.Face = (function() {
      function Face(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Face.prototype.boundingBox = null;
      Face.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.boundingBox != null && m.hasOwnProperty('boundingBox')) $root.api.ai.vision.v1.Polygon.encode(m.boundingBox, w.uint32(10).fork()).ldelim();
        return w;
      };
      Face.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Face();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.boundingBox = $root.api.ai.vision.v1.Polygon.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Face;
    })();
  })(root);
  (function($root) {
    $root.ImageCopySearchAnnotation = (function() {
      function ImageCopySearchAnnotation(p) {
        this.topResults = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ImageCopySearchAnnotation.prototype.copyCount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ImageCopySearchAnnotation.prototype.topResults = $util.emptyArray;
      ImageCopySearchAnnotation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.copyCount != null && m.hasOwnProperty('copyCount')) w.uint32(8).int64(m.copyCount);
        if (m.topResults != null && m.topResults.length) {
          for (let i = 0; i < m.topResults.length; ++i) $root.api.ai.vision.v1.CopyMatch.encode(m.topResults[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      ImageCopySearchAnnotation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.ImageCopySearchAnnotation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.copyCount = r.int64();
              break;
            case 2:
              if (!(m.topResults && m.topResults.length)) m.topResults = [];
              m.topResults.push($root.api.ai.vision.v1.CopyMatch.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ImageCopySearchAnnotation;
    })();
  })(root);
  (function($root) {
    $root.CopyMatch = (function() {
      function CopyMatch(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CopyMatch.prototype.imageUrl = '';
      CopyMatch.prototype.pageUrl = '';
      CopyMatch.prototype.title = '';
      CopyMatch.prototype.description = '';
      CopyMatch.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.imageUrl != null && m.hasOwnProperty('imageUrl')) w.uint32(10).string(m.imageUrl);
        if (m.pageUrl != null && m.hasOwnProperty('pageUrl')) w.uint32(18).string(m.pageUrl);
        if (m.title != null && m.hasOwnProperty('title')) w.uint32(26).string(m.title);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        return w;
      };
      CopyMatch.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.CopyMatch();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.imageUrl = r.string();
              break;
            case 2:
              m.pageUrl = r.string();
              break;
            case 3:
              m.title = r.string();
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
      return CopyMatch;
    })();
  })(root);
  (function($root) {
    $root.Polygon = (function() {
      function Polygon(p) {
        this.vertices = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Polygon.prototype.vertices = $util.emptyArray;
      Polygon.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.vertices != null && m.vertices.length) {
          for (let i = 0; i < m.vertices.length; ++i) $root.api.ai.vision.v1.Vertex.encode(m.vertices[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      Polygon.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Polygon();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.vertices && m.vertices.length)) m.vertices = [];
              m.vertices.push($root.api.ai.vision.v1.Vertex.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Polygon;
    })();
  })(root);
  (function($root) {
    $root.Vertex = (function() {
      function Vertex(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Vertex.prototype.x = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Vertex.prototype.y = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Vertex.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.x != null && m.hasOwnProperty('x')) w.uint32(8).int64(m.x);
        if (m.y != null && m.hasOwnProperty('y')) w.uint32(16).int64(m.y);
        return w;
      };
      Vertex.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Vertex();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.x = r.int64();
              break;
            case 2:
              m.y = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Vertex;
    })();
  })(root);
  (function($root) {
    $root.TextAnnotation = (function() {
      function TextAnnotation(p) {
        this.pages = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      TextAnnotation.prototype.pages = $util.emptyArray;
      TextAnnotation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.pages != null && m.pages.length) {
          for (let i = 0; i < m.pages.length; ++i) $root.api.ai.vision.v1.Page.encode(m.pages[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      TextAnnotation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.TextAnnotation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.pages && m.pages.length)) m.pages = [];
              m.pages.push($root.api.ai.vision.v1.Page.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return TextAnnotation;
    })();
  })(root);
  (function($root) {
    $root.Page = (function() {
      function Page(p) {
        this.blocks = [];
        this.entities = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Page.prototype.width = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Page.prototype.height = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Page.prototype.blocks = $util.emptyArray;
      Page.prototype.entities = $util.emptyArray;
      Page.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.width != null && m.hasOwnProperty('width')) w.uint32(8).int64(m.width);
        if (m.height != null && m.hasOwnProperty('height')) w.uint32(16).int64(m.height);
        if (m.blocks != null && m.blocks.length) {
          for (let i = 0; i < m.blocks.length; ++i) $root.api.ai.vision.v1.Block.encode(m.blocks[i], w.uint32(26).fork()).ldelim();
        }
        if (m.entities != null && m.entities.length) {
          for (let i = 0; i < m.entities.length; ++i) $root.api.ai.vision.v1.Entity.encode(m.entities[i], w.uint32(34).fork()).ldelim();
        }
        return w;
      };
      Page.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Page();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.width = r.int64();
              break;
            case 2:
              m.height = r.int64();
              break;
            case 3:
              if (!(m.blocks && m.blocks.length)) m.blocks = [];
              m.blocks.push($root.api.ai.vision.v1.Block.decode(r, r.uint32()));
              break;
            case 4:
              if (!(m.entities && m.entities.length)) m.entities = [];
              m.entities.push($root.api.ai.vision.v1.Entity.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Page;
    })();
  })(root);
  (function($root) {
    $root.Entity = (function() {
      function Entity(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Entity.prototype.name = '';
      Entity.prototype.text = '';
      Entity.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(10).string(m.name);
        if (m.text != null && m.hasOwnProperty('text')) w.uint32(18).string(m.text);
        return w;
      };
      Entity.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Entity();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.name = r.string();
              break;
            case 2:
              m.text = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Entity;
    })();
  })(root);
  (function($root) {
    $root.Block = (function() {
      function Block(p) {
        this.lines = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Block.prototype.boundingBox = null;
      Block.prototype.lines = $util.emptyArray;
      Block.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.boundingBox != null && m.hasOwnProperty('boundingBox')) $root.api.ai.vision.v1.Polygon.encode(m.boundingBox, w.uint32(10).fork()).ldelim();
        if (m.lines != null && m.lines.length) {
          for (let i = 0; i < m.lines.length; ++i) $root.api.ai.vision.v1.Line.encode(m.lines[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      Block.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Block();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.boundingBox = $root.api.ai.vision.v1.Polygon.decode(r, r.uint32());
              break;
            case 2:
              if (!(m.lines && m.lines.length)) m.lines = [];
              m.lines.push($root.api.ai.vision.v1.Line.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Block;
    })();
  })(root);
  (function($root) {
    $root.Line = (function() {
      function Line(p) {
        this.words = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Line.prototype.boundingBox = null;
      Line.prototype.words = $util.emptyArray;
      Line.prototype.confidence = 0;
      Line.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.boundingBox != null && m.hasOwnProperty('boundingBox')) $root.api.ai.vision.v1.Polygon.encode(m.boundingBox, w.uint32(10).fork()).ldelim();
        if (m.words != null && m.words.length) {
          for (let i = 0; i < m.words.length; ++i) $root.api.ai.vision.v1.Word.encode(m.words[i], w.uint32(18).fork()).ldelim();
        }
        if (m.confidence != null && m.hasOwnProperty('confidence')) w.uint32(25).double(m.confidence);
        return w;
      };
      Line.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Line();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.boundingBox = $root.api.ai.vision.v1.Polygon.decode(r, r.uint32());
              break;
            case 2:
              if (!(m.words && m.words.length)) m.words = [];
              m.words.push($root.api.ai.vision.v1.Word.decode(r, r.uint32()));
              break;
            case 3:
              m.confidence = r.double();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Line;
    })();
  })(root);
  (function($root) {
    $root.Word = (function() {
      function Word(p) {
        this.languages = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Word.prototype.boundingBox = null;
      Word.prototype.text = '';
      Word.prototype.confidence = 0;
      Word.prototype.languages = $util.emptyArray;
      Word.prototype.entityIndex = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Word.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.boundingBox != null && m.hasOwnProperty('boundingBox')) $root.api.ai.vision.v1.Polygon.encode(m.boundingBox, w.uint32(10).fork()).ldelim();
        if (m.text != null && m.hasOwnProperty('text')) w.uint32(18).string(m.text);
        if (m.confidence != null && m.hasOwnProperty('confidence')) w.uint32(25).double(m.confidence);
        if (m.languages != null && m.languages.length) {
          for (let i = 0; i < m.languages.length; ++i) $root.api.ai.vision.v1.Word.DetectedLanguage.encode(m.languages[i], w.uint32(34).fork()).ldelim();
        }
        if (m.entityIndex != null && m.hasOwnProperty('entityIndex')) w.uint32(40).int64(m.entityIndex);
        return w;
      };
      Word.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Word();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.boundingBox = $root.api.ai.vision.v1.Polygon.decode(r, r.uint32());
              break;
            case 2:
              m.text = r.string();
              break;
            case 3:
              m.confidence = r.double();
              break;
            case 4:
              if (!(m.languages && m.languages.length)) m.languages = [];
              m.languages.push($root.api.ai.vision.v1.Word.DetectedLanguage.decode(r, r.uint32()));
              break;
            case 5:
              m.entityIndex = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Word.DetectedLanguage = (function() {
        function DetectedLanguage(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        DetectedLanguage.prototype.languageCode = '';
        DetectedLanguage.prototype.confidence = 0;
        DetectedLanguage.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.languageCode != null && m.hasOwnProperty('languageCode')) w.uint32(10).string(m.languageCode);
          if (m.confidence != null && m.hasOwnProperty('confidence')) w.uint32(17).double(m.confidence);
          return w;
        };
        DetectedLanguage.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.ai.vision.v1.Word.DetectedLanguage();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.languageCode = r.string();
                break;
              case 2:
                m.confidence = r.double();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return DetectedLanguage;
      })();
      return Word;
    })();
  })(root);
  (function($root) {
    $root.VisionService = function(session) {
      if (session === undefined) {
        session = new yc.Session();
      }
      return session.client($root.VisionService.makeGrpcConstructor());
    };
    $root.VisionService.makeGrpcConstructor = () => {
      let ctor = grpc.makeGenericClientConstructor({
        batchAnalyze: {
          path: '/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.ai.vision.v1.BatchAnalyzeRequest,
          responseType: $root.api.ai.vision.v1.BatchAnalyzeResponse,
          requestSerialize: r => {
            return $root.api.ai.vision.v1.BatchAnalyzeRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.ai.vision.v1.BatchAnalyzeRequest.decode,
          responseSerialize: r => {
            return $root.api.ai.vision.v1.BatchAnalyzeResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.ai.vision.v1.BatchAnalyzeResponse.decode
        }
      });
      ctor.__endpointId = 'ai-vision';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.BatchAnalyzeRequest = (function() {
      function BatchAnalyzeRequest(p) {
        this.analyzeSpecs = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      BatchAnalyzeRequest.prototype.analyzeSpecs = $util.emptyArray;
      BatchAnalyzeRequest.prototype.folderId = '';
      BatchAnalyzeRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.analyzeSpecs != null && m.analyzeSpecs.length) {
          for (let i = 0; i < m.analyzeSpecs.length; ++i) $root.api.ai.vision.v1.AnalyzeSpec.encode(m.analyzeSpecs[i], w.uint32(10).fork()).ldelim();
        }
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(18).string(m.folderId);
        return w;
      };
      BatchAnalyzeRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.BatchAnalyzeRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.analyzeSpecs && m.analyzeSpecs.length)) m.analyzeSpecs = [];
              m.analyzeSpecs.push($root.api.ai.vision.v1.AnalyzeSpec.decode(r, r.uint32()));
              break;
            case 2:
              m.folderId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return BatchAnalyzeRequest;
    })();
  })(root);
  (function($root) {
    $root.AnalyzeSpec = (function() {
      function AnalyzeSpec(p) {
        this.features = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AnalyzeSpec.prototype.content = $util.newBuffer([]);
      AnalyzeSpec.prototype.signature = '';
      AnalyzeSpec.prototype.features = $util.emptyArray;
      AnalyzeSpec.prototype.mimeType = '';
      let $oneOfFields;
      Object.defineProperty(AnalyzeSpec.prototype, 'source', {
        get: $util.oneOfGetter(($oneOfFields = ['content', 'signature'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      AnalyzeSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.content != null && m.hasOwnProperty('content')) w.uint32(10).bytes(m.content);
        if (m.features != null && m.features.length) {
          for (let i = 0; i < m.features.length; ++i) $root.api.ai.vision.v1.Feature.encode(m.features[i], w.uint32(26).fork()).ldelim();
        }
        if (m.mimeType != null && m.hasOwnProperty('mimeType')) w.uint32(34).string(m.mimeType);
        if (m.signature != null && m.hasOwnProperty('signature')) w.uint32(42).string(m.signature);
        return w;
      };
      AnalyzeSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.AnalyzeSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.content = r.bytes();
              break;
            case 5:
              m.signature = r.string();
              break;
            case 3:
              if (!(m.features && m.features.length)) m.features = [];
              m.features.push($root.api.ai.vision.v1.Feature.decode(r, r.uint32()));
              break;
            case 4:
              m.mimeType = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AnalyzeSpec;
    })();
  })(root);
  (function($root) {
    $root.Feature = (function() {
      function Feature(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Feature.prototype.type = 0;
      Feature.prototype.classificationConfig = null;
      Feature.prototype.textDetectionConfig = null;
      let $oneOfFields;
      Object.defineProperty(Feature.prototype, 'config', {
        get: $util.oneOfGetter(($oneOfFields = ['classificationConfig', 'textDetectionConfig'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Feature.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.type != null && m.hasOwnProperty('type')) w.uint32(8).int32(m.type);
        if (m.classificationConfig != null && m.hasOwnProperty('classificationConfig')) $root.api.ai.vision.v1.FeatureClassificationConfig.encode(m.classificationConfig, w.uint32(18).fork()).ldelim();
        if (m.textDetectionConfig != null && m.hasOwnProperty('textDetectionConfig')) $root.api.ai.vision.v1.FeatureTextDetectionConfig.encode(m.textDetectionConfig, w.uint32(26).fork()).ldelim();
        return w;
      };
      Feature.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.Feature();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.type = r.int32();
              break;
            case 2:
              m.classificationConfig = $root.api.ai.vision.v1.FeatureClassificationConfig.decode(r, r.uint32());
              break;
            case 3:
              m.textDetectionConfig = $root.api.ai.vision.v1.FeatureTextDetectionConfig.decode(r, r.uint32());
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
        values[(valuesById[1] = 'TEXT_DETECTION')] = 1;
        values[(valuesById[2] = 'CLASSIFICATION')] = 2;
        values[(valuesById[3] = 'FACE_DETECTION')] = 3;
        values[(valuesById[4] = 'IMAGE_COPY_SEARCH')] = 4;
        return values;
      })();
      Feature.Type = Type;
      return Feature;
    })();
  })(root);
  (function($root) {
    $root.FeatureClassificationConfig = (function() {
      function FeatureClassificationConfig(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FeatureClassificationConfig.prototype.model = '';
      FeatureClassificationConfig.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.model != null && m.hasOwnProperty('model')) w.uint32(10).string(m.model);
        return w;
      };
      FeatureClassificationConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.FeatureClassificationConfig();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.model = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FeatureClassificationConfig;
    })();
  })(root);
  (function($root) {
    $root.FeatureTextDetectionConfig = (function() {
      function FeatureTextDetectionConfig(p) {
        this.languageCodes = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FeatureTextDetectionConfig.prototype.languageCodes = $util.emptyArray;
      FeatureTextDetectionConfig.prototype.model = '';
      FeatureTextDetectionConfig.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.languageCodes != null && m.languageCodes.length) {
          for (let i = 0; i < m.languageCodes.length; ++i) w.uint32(10).string(m.languageCodes[i]);
        }
        if (m.model != null && m.hasOwnProperty('model')) w.uint32(18).string(m.model);
        return w;
      };
      FeatureTextDetectionConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.FeatureTextDetectionConfig();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.languageCodes && m.languageCodes.length)) m.languageCodes = [];
              m.languageCodes.push(r.string());
              break;
            case 2:
              m.model = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FeatureTextDetectionConfig;
    })();
  })(root);
  (function($root) {
    $root.BatchAnalyzeResponse = (function() {
      function BatchAnalyzeResponse(p) {
        this.results = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      BatchAnalyzeResponse.prototype.results = $util.emptyArray;
      BatchAnalyzeResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.results != null && m.results.length) {
          for (let i = 0; i < m.results.length; ++i) $root.api.ai.vision.v1.AnalyzeResult.encode(m.results[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      BatchAnalyzeResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.BatchAnalyzeResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.results && m.results.length)) m.results = [];
              m.results.push($root.api.ai.vision.v1.AnalyzeResult.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return BatchAnalyzeResponse;
    })();
  })(root);
  (function($root) {
    $root.AnalyzeResult = (function() {
      function AnalyzeResult(p) {
        this.results = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      AnalyzeResult.prototype.results = $util.emptyArray;
      AnalyzeResult.prototype.error = null;
      AnalyzeResult.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.error != null && m.hasOwnProperty('error')) $root.contrib.google.rpc.Status.encode(m.error, w.uint32(10).fork()).ldelim();
        if (m.results != null && m.results.length) {
          for (let i = 0; i < m.results.length; ++i) $root.api.ai.vision.v1.FeatureResult.encode(m.results[i], w.uint32(18).fork()).ldelim();
        }
        return w;
      };
      AnalyzeResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.AnalyzeResult();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 2:
              if (!(m.results && m.results.length)) m.results = [];
              m.results.push($root.api.ai.vision.v1.FeatureResult.decode(r, r.uint32()));
              break;
            case 1:
              m.error = $root.contrib.google.rpc.Status.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return AnalyzeResult;
    })();
  })(root);
  (function($root) {
    $root.FeatureResult = (function() {
      function FeatureResult(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      FeatureResult.prototype.textDetection = null;
      FeatureResult.prototype.classification = null;
      FeatureResult.prototype.faceDetection = null;
      FeatureResult.prototype.imageCopySearch = null;
      FeatureResult.prototype.error = null;
      let $oneOfFields;
      Object.defineProperty(FeatureResult.prototype, 'feature', {
        get: $util.oneOfGetter(($oneOfFields = ['textDetection', 'classification', 'faceDetection', 'imageCopySearch'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      FeatureResult.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.error != null && m.hasOwnProperty('error')) $root.contrib.google.rpc.Status.encode(m.error, w.uint32(10).fork()).ldelim();
        if (m.textDetection != null && m.hasOwnProperty('textDetection')) $root.api.ai.vision.v1.TextAnnotation.encode(m.textDetection, w.uint32(18).fork()).ldelim();
        if (m.classification != null && m.hasOwnProperty('classification')) $root.api.ai.vision.v1.ClassAnnotation.encode(m.classification, w.uint32(26).fork()).ldelim();
        if (m.faceDetection != null && m.hasOwnProperty('faceDetection')) $root.api.ai.vision.v1.FaceAnnotation.encode(m.faceDetection, w.uint32(34).fork()).ldelim();
        if (m.imageCopySearch != null && m.hasOwnProperty('imageCopySearch')) $root.api.ai.vision.v1.ImageCopySearchAnnotation.encode(m.imageCopySearch, w.uint32(42).fork()).ldelim();
        return w;
      };
      FeatureResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.ai.vision.v1.FeatureResult();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 2:
              m.textDetection = $root.api.ai.vision.v1.TextAnnotation.decode(r, r.uint32());
              break;
            case 3:
              m.classification = $root.api.ai.vision.v1.ClassAnnotation.decode(r, r.uint32());
              break;
            case 4:
              m.faceDetection = $root.api.ai.vision.v1.FaceAnnotation.decode(r, r.uint32());
              break;
            case 5:
              m.imageCopySearch = $root.api.ai.vision.v1.ImageCopySearchAnnotation.decode(r, r.uint32());
              break;
            case 1:
              m.error = $root.contrib.google.rpc.Status.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return FeatureResult;
    })();
  })(root);
  registar.register('api.ai.vision.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();
