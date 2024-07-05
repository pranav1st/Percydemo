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
exports.AuthorizationVerifyCodeDto = exports.AuthorizationCreateCodeDto = void 0;
var class_validator_1 = require("class-validator");
var AuthorizationCreateCodeDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    return _a = /** @class */ (function () {
            function AuthorizationCreateCodeDto() {
                this.email = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _email_initializers, void 0));
            }
            return AuthorizationCreateCodeDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _email_decorators = [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AuthorizationCreateCodeDto = AuthorizationCreateCodeDto;
var AuthorizationVerifyCodeDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _keyPrivate_decorators;
    var _keyPrivate_initializers = [];
    var _keyPublic_decorators;
    var _keyPublic_initializers = [];
    return _a = /** @class */ (function () {
            function AuthorizationVerifyCodeDto() {
                this.email = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.keyPrivate = __runInitializers(this, _keyPrivate_initializers, void 0);
                this.keyPublic = __runInitializers(this, _keyPublic_initializers, void 0);
            }
            return AuthorizationVerifyCodeDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _email_decorators = [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsNotEmpty)()];
            _keyPrivate_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _keyPublic_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _keyPrivate_decorators, { kind: "field", name: "keyPrivate", static: false, private: false, access: { has: function (obj) { return "keyPrivate" in obj; }, get: function (obj) { return obj.keyPrivate; }, set: function (obj, value) { obj.keyPrivate = value; } }, metadata: _metadata }, _keyPrivate_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _keyPublic_decorators, { kind: "field", name: "keyPublic", static: false, private: false, access: { has: function (obj) { return "keyPublic" in obj; }, get: function (obj) { return obj.keyPublic; }, set: function (obj, value) { obj.keyPublic = value; } }, metadata: _metadata }, _keyPublic_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AuthorizationVerifyCodeDto = AuthorizationVerifyCodeDto;
