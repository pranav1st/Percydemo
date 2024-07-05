"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiController = void 0;
var common_1 = require("@nestjs/common");
var date_1 = require("@server/helpers/date");
var file_1 = require("@server/helpers/file");
var AiController = function () {
    var _classDecorators = [(0, common_1.Controller)('/v1/ai')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _chat_decorators;
    var _generateImage_decorators;
    var _fromAudioToText_decorators;
    var _fromTextToAudio_decorators;
    var AiController = _classThis = /** @class */ (function () {
        function AiController_1(openaiService, exception, httpService, uploadService) {
            this.openaiService = (__runInitializers(this, _instanceExtraInitializers), openaiService);
            this.exception = exception;
            this.httpService = httpService;
            this.uploadService = uploadService;
        }
        AiController_1.prototype.chat = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var prompt, answer, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            prompt = body.prompt;
                            if (!this.openaiService.isActive()) {
                                this.exception.openaiNotActivated();
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.openaiService.chat(prompt)];
                        case 2:
                            answer = _a.sent();
                            return [2 /*return*/, { answer: answer }];
                        case 3:
                            error_1 = _a.sent();
                            this.exception.openaiError(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AiController_1.prototype.generateImage = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var prompt, answer, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            prompt = body.prompt;
                            if (!this.openaiService.isActive()) {
                                this.exception.openaiNotActivated();
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.openaiService.generateImage(prompt)];
                        case 2:
                            answer = _a.sent();
                            return [2 /*return*/, { answer: answer }];
                        case 3:
                            error_2 = _a.sent();
                            this.exception.openaiError(error_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AiController_1.prototype.fromAudioToText = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var url, arrayBuffer, readstream, answer, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = body.url;
                            if (!this.openaiService.isActive()) {
                                this.exception.openaiNotActivated();
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, this.httpService.download(url)];
                        case 2:
                            arrayBuffer = _a.sent();
                            return [4 /*yield*/, file_1.FileHelper.createReadStreamFromArrayBuffer(arrayBuffer, 'audio.wav')];
                        case 3:
                            readstream = _a.sent();
                            return [4 /*yield*/, this.openaiService.fromAudioToText(readstream)];
                        case 4:
                            answer = _a.sent();
                            return [2 /*return*/, { answer: answer }];
                        case 5:
                            error_3 = _a.sent();
                            this.exception.openaiError(error_3);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        AiController_1.prototype.fromTextToAudio = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var text, buffer, now, filename, file, urls, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            text = body.text;
                            if (!this.openaiService.isActive()) {
                                this.exception.openaiNotActivated();
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, this.openaiService.fromTextToAudio(text)];
                        case 2:
                            buffer = _a.sent();
                            now = date_1.DateHelper.getNow();
                            filename = "".concat(now.getTime(), ".mp3");
                            file = {
                                originalname: filename,
                                buffer: buffer,
                            };
                            return [4 /*yield*/, this.uploadService.uploadPublic(file)];
                        case 3:
                            urls = _a.sent();
                            return [2 /*return*/, { url: urls[0].url }];
                        case 4:
                            error_4 = _a.sent();
                            this.exception.openaiError(error_4);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        return AiController_1;
    }());
    __setFunctionName(_classThis, "AiController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _chat_decorators = [(0, common_1.Post)('/chat')];
        _generateImage_decorators = [(0, common_1.Post)('/image')];
        _fromAudioToText_decorators = [(0, common_1.Post)('/audio-to-text')];
        _fromTextToAudio_decorators = [(0, common_1.Post)('/text-to-audio')];
        __esDecorate(_classThis, null, _chat_decorators, { kind: "method", name: "chat", static: false, private: false, access: { has: function (obj) { return "chat" in obj; }, get: function (obj) { return obj.chat; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _generateImage_decorators, { kind: "method", name: "generateImage", static: false, private: false, access: { has: function (obj) { return "generateImage" in obj; }, get: function (obj) { return obj.generateImage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _fromAudioToText_decorators, { kind: "method", name: "fromAudioToText", static: false, private: false, access: { has: function (obj) { return "fromAudioToText" in obj; }, get: function (obj) { return obj.fromAudioToText; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _fromTextToAudio_decorators, { kind: "method", name: "fromTextToAudio", static: false, private: false, access: { has: function (obj) { return "fromTextToAudio" in obj; }, get: function (obj) { return obj.fromTextToAudio; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AiController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AiController = _classThis;
}();
exports.AiController = AiController;
