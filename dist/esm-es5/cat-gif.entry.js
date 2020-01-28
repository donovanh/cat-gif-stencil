var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h } from './core-562a4d5e.js';
var CatGif = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Internal state
         */
        this.images = [];
        this.imageUrl = '';
    }
    class_1.prototype.watchHandler = function (newValue, oldValue) {
        if (oldValue === newValue) {
            return;
        }
        this.images = [];
        this.updateImage();
    };
    class_1.prototype.connectedCallback = function () {
        this.updateImage();
    };
    class_1.prototype.handleClick = function () {
        this.updateImage();
    };
    class_1.prototype.fetchGifs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, keywords, url, result, JSONresult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = 'gwWthNT5DFpvrh04kt4PYiakYO12aM3B';
                        keywords = "cat";
                        if (this.keyword) {
                            keywords += " " + this.keyword;
                        }
                        url = window.location.protocol + "//api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + encodeURI(keywords);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        JSONresult = _a.sent();
                        this.images = JSONresult.data.map(function (item) { return item.images.original.url; });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getRandomImageUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.images.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchGifs()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.images[Math.floor(Math.random() * this.images.length)]];
                }
            });
        });
    };
    class_1.prototype.updateImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getRandomImageUrl()];
                    case 1:
                        _a.imageUrl = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        return h("img", { src: this.imageUrl, alt: "Cat" + (this.keyword ? ' ' + this.keyword : '') + " gif" });
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "keyword": ["watchHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "img{border:10px solid purple}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { CatGif as cat_gif };
