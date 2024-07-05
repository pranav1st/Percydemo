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
exports.ConfigurationService = void 0;
var common_1 = require("@nestjs/common");
var utility_1 = require("@server/helpers/utility");
var configuration_service_object_1 = require("./configuration.service.object");
var ConfigurationService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ConfigurationService = _classThis = /** @class */ (function () {
        function ConfigurationService_1(manager) {
            this.manager = manager;
        }
        ConfigurationService_1.prototype.get = function (key, valueDefault) {
            var value = this.manager.get(key);
            if (!utility_1.Utility.isDefined(value)) {
                value = valueDefault;
            }
            return value;
        };
        ConfigurationService_1.prototype.getPort = function () {
            var value = this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.PORT);
            if (!utility_1.Utility.isDefined(value)) {
                value = 3099;
            }
            return value;
        };
        ConfigurationService_1.prototype.getNumber = function (key, valueDefault) {
            var value = this.manager.get(key);
            if (!utility_1.Utility.isDefined(value)) {
                value = valueDefault;
            }
            return value;
        };
        ConfigurationService_1.prototype.getBoolean = function (key, valueDefault) {
            var value = this.manager.get(key);
            if (!utility_1.Utility.isDefined(value)) {
                value = valueDefault;
            }
            return value;
        };
        ConfigurationService_1.prototype.getEnvironment = function () {
            var value = this.get(configuration_service_object_1.ConfigurationServiceObject.Key.ENVIRONMENT, configuration_service_object_1.ConfigurationServiceObject.Environment.DEVELOPMENT);
            return value;
        };
        ConfigurationService_1.prototype.getAuthenticationTokenMethod = function () {
            var value = this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.AUTHENTICATION_TOKEN_METHOD, configuration_service_object_1.ConfigurationServiceObject.AuthenticationTokenMethod.COOKIES);
            return value;
        };
        ConfigurationService_1.prototype.getClientBaseUrl = function () {
            var value = this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.CLIENT_BASE_URL);
            var valueClean = utility_1.Utility.removeTrailingSlash(value);
            return valueClean;
        };
        ConfigurationService_1.prototype.getClientBaseUrlAppSlug = function () {
            var value = this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.SERVER_CLIENT_BASE_URL_APP_SLUG);
            return value;
        };
        ConfigurationService_1.prototype.getBaseUrl = function () {
            var port = this.getPort();
            var value = this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.BASE_URL);
            if (!utility_1.Utility.isDefined(value)) {
                value = "http://localhost:".concat(port);
            }
            var valueClean = utility_1.Utility.removeTrailingSlash(value);
            return valueClean;
        };
        ConfigurationService_1.prototype.getDashboardBaseUrl = function () {
            var valueDefault = "http://localhost:3001/api";
            var valueProduction = "https://api.marblism.com/api";
            if (this.isEnvironmentProduction()) {
                return valueProduction;
            }
            return valueDefault;
        };
        ConfigurationService_1.prototype.isEnvironmentDevelopment = function () {
            return (this.getEnvironment() ===
                configuration_service_object_1.ConfigurationServiceObject.Environment.DEVELOPMENT);
        };
        ConfigurationService_1.prototype.isEnvironmentProduction = function () {
            return (this.getEnvironment() ===
                configuration_service_object_1.ConfigurationServiceObject.Environment.PRODUCTION);
        };
        return ConfigurationService_1;
    }());
    __setFunctionName(_classThis, "ConfigurationService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ConfigurationService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ConfigurationService = _classThis;
}();
exports.ConfigurationService = ConfigurationService;
