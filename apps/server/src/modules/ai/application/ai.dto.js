"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiFromTextToAudioBody = exports.AiFromAudioToTextBody = exports.AiGenerateImageBody = exports.AiChatBody = void 0;
var class_validator_1 = require("class-validator");
var AiChatBody = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _prompt_decorators;
    var _prompt_initializers = [];
    return _a = /** @class */ (function () {
            function AiChatBody() {
                this.prompt = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _prompt_initializers, void 0));
            }
            return AiChatBody;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _prompt_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _prompt_decorators, { kind: "field", name: "prompt", static: false, private: false, access: { has: function (obj) { return "prompt" in obj; }, get: function (obj) { return obj.prompt; }, set: function (obj, value) { obj.prompt = value; } }, metadata: _metadata }, _prompt_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AiChatBody = AiChatBody;
var AiGenerateImageBody = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _prompt_decorators;
    var _prompt_initializers = [];
    return _a = /** @class */ (function () {
            function AiGenerateImageBody() {
                this.prompt = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _prompt_initializers, void 0));
            }
            return AiGenerateImageBody;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _prompt_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _prompt_decorators, { kind: "field", name: "prompt", static: false, private: false, access: { has: function (obj) { return "prompt" in obj; }, get: function (obj) { return obj.prompt; }, set: function (obj, value) { obj.prompt = value; } }, metadata: _metadata }, _prompt_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AiGenerateImageBody = AiGenerateImageBody;
var AiFromAudioToTextBody = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _url_decorators;
    var _url_initializers = [];
    return _a = /** @class */ (function () {
            function AiFromAudioToTextBody() {
                this.url = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _url_initializers, void 0));
            }
            return AiFromAudioToTextBody;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _url_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AiFromAudioToTextBody = AiFromAudioToTextBody;
var AiFromTextToAudioBody = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _text_decorators;
    var _text_initializers = [];
    return _a = /** @class */ (function () {
            function AiFromTextToAudioBody() {
                this.text = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _text_initializers, void 0));
            }
            return AiFromTextToAudioBody;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _text_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _text_decorators, { kind: "field", name: "text", static: false, private: false, access: { has: function (obj) { return "text" in obj; }, get: function (obj) { return obj.text; }, set: function (obj, value) { obj.text = value; } }, metadata: _metadata }, _text_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AiFromTextToAudioBody = AiFromTextToAudioBody;
