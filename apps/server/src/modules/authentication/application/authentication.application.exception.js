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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationApplicationException = void 0;
var common_1 = require("@nestjs/common");
var AuthenticationApplicationException = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthenticationApplicationException = _classThis = /** @class */ (function () {
        function AuthenticationApplicationException_1(service) {
            this.service = service;
        }
        AuthenticationApplicationException_1.prototype.invalidAccessToken = function () {
            return this.service.throw({
                status: common_1.HttpStatus.UNAUTHORIZED,
                code: 1,
                publicMessage: 'Access token is invalid',
            });
        };
        AuthenticationApplicationException_1.prototype.userEmailNotFound = function (email) {
            return this.service.throw({
                status: common_1.HttpStatus.UNAUTHORIZED,
                code: 2,
                publicMessage: 'Incorrect email or password',
                privateMessage: "User with email \"".concat(email, "\" was not found"),
            });
        };
        AuthenticationApplicationException_1.prototype.userPasswordNotFound = function (email) {
            return this.service.throw({
                status: common_1.HttpStatus.UNAUTHORIZED,
                code: 2,
                publicMessage: 'Incorrect email or password',
                privateMessage: "Password does not match user with email \"".concat(email, "\""),
            });
        };
        AuthenticationApplicationException_1.prototype.userEmailNotAvailable = function (email) {
            return this.service.throw({
                status: common_1.HttpStatus.CONFLICT,
                code: 3,
                publicMessage: 'Email is not available',
                privateMessage: "User can not register with email \"".concat(email, "\" as it is already taken."),
            });
        };
        AuthenticationApplicationException_1.prototype.invalidResetPasswordToken = function () {
            return this.service.throw({
                status: common_1.HttpStatus.FORBIDDEN,
                code: 4,
                publicMessage: 'Reset password token is invalid',
            });
        };
        AuthenticationApplicationException_1.prototype.invalidGoogleToken = function (error) {
            return this.service.throw({
                status: common_1.HttpStatus.FORBIDDEN,
                code: 1,
                publicMessage: 'Access token is invalid',
                cause: error,
            });
        };
        return AuthenticationApplicationException_1;
    }());
    __setFunctionName(_classThis, "AuthenticationApplicationException");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthenticationApplicationException = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthenticationApplicationException = _classThis;
}();
exports.AuthenticationApplicationException = AuthenticationApplicationException;
