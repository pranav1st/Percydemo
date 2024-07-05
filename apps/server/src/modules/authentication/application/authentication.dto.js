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
exports.GoogleByAuthenticationCallbackDto = exports.AuthenticationSendEmailResetPasswordDto = exports.AuthenticationResetPasswordDto = exports.AuthenticationRegisterDto = exports.AuthenticationLoginDto = void 0;
var class_validator_1 = require("class-validator");
var AuthenticationLoginDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    return _a = /** @class */ (function () {
            function AuthenticationLoginDto() {
                this.email = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.password = __runInitializers(this, _password_initializers, void 0);
            }
            return AuthenticationLoginDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _email_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _password_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AuthenticationLoginDto = AuthenticationLoginDto;
var AuthenticationRegisterDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    return _a = /** @class */ (function () {
            function AuthenticationRegisterDto() {
                this.email = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.password = __runInitializers(this, _password_initializers, void 0);
            }
            return AuthenticationRegisterDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _email_decorators = [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsNotEmpty)()];
            _name_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _password_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MinLength)(8), (0, class_validator_1.MaxLength)(32), (0, class_validator_1.Matches)(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).*$/, {
                    message: 'Password must contain at least one letter, one number, and one special character.',
                })];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AuthenticationRegisterDto = AuthenticationRegisterDto;
var AuthenticationResetPasswordDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _token_decorators;
    var _token_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    return _a = /** @class */ (function () {
            function AuthenticationResetPasswordDto() {
                this.token = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _token_initializers, void 0));
                this.password = __runInitializers(this, _password_initializers, void 0);
            }
            return AuthenticationResetPasswordDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _token_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _password_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Matches)(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).*$/, {
                    message: 'Password must contain at least one letter, one number, and one special character.',
                })];
            __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: function (obj) { return "token" in obj; }, get: function (obj) { return obj.token; }, set: function (obj, value) { obj.token = value; } }, metadata: _metadata }, _token_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AuthenticationResetPasswordDto = AuthenticationResetPasswordDto;
var AuthenticationSendEmailResetPasswordDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    return _a = /** @class */ (function () {
            function AuthenticationSendEmailResetPasswordDto() {
                this.email = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _email_initializers, void 0));
            }
            return AuthenticationSendEmailResetPasswordDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _email_decorators = [(0, class_validator_1.IsEmail)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AuthenticationSendEmailResetPasswordDto = AuthenticationSendEmailResetPasswordDto;
var GoogleByAuthenticationCallbackDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _token_decorators;
    var _token_initializers = [];
    return _a = /** @class */ (function () {
            function GoogleByAuthenticationCallbackDto() {
                this.token = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _token_initializers, void 0));
            }
            return GoogleByAuthenticationCallbackDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _token_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: function (obj) { return "token" in obj; }, get: function (obj) { return obj.token; }, set: function (obj, value) { obj.token = value; } }, metadata: _metadata }, _token_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GoogleByAuthenticationCallbackDto = GoogleByAuthenticationCallbackDto;
