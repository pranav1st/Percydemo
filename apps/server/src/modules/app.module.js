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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var accessControl_1 = require("@server/core/accessControl");
var cookie_1 = require("@server/core/cookie");
var exception_1 = require("@server/core/exception");
var logging_1 = require("@server/core/logging");
var socket_1 = require("@server/libraries/socket");
var upload_module_1 = require("@server/libraries/upload/upload.module");
var configuration_module_1 = require("../core/configuration/configuration.module");
var cors_module_1 = require("../core/cors/cors.module");
var database_1 = require("../core/database");
var email_module_1 = require("../libraries/email/email.module");
var event_1 = require("../libraries/event");
var logger_1 = require("../libraries/logger");
var app_application_module_1 = require("./app.application.module");
var app_domain_module_1 = require("./app.domain.module");
var app_infrastructure_module_1 = require("./app.infrastructure.module");
var app_orchestrator_module_1 = require("./app.orchestrator.module");
var infrastructure_1 = require("./authentication/infrastructure");
var accessControl_2 = require("./authorization/accessControl");
var AppModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                configuration_module_1.ConfigurationModule,
                logger_1.LoggerModule,
                exception_1.ExceptionModule,
                database_1.DatabaseConfigurationModule,
                database_1.DatabaseSetupModule,
                cors_module_1.CorsModule,
                event_1.EventModule,
                email_module_1.EmailModule,
                upload_module_1.UploadModule,
                cookie_1.CookieModule,
                socket_1.SocketModule,
                accessControl_1.AccessControlModule,
                app_domain_module_1.AppDomainModule,
                app_application_module_1.AppApplicationModule,
                app_infrastructure_module_1.AppInfrastructureModule,
                app_orchestrator_module_1.AppOrchestratorModule,
                logging_1.LoggingModule,
            ],
            controllers: [],
            providers: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], logging_1.LoggingModule.getInterceptors(), true), infrastructure_1.AuthenticationInfrastructureModule.getGuards(), true), accessControl_2.AuthorizationAccessControlModule.getGuards(), true), exception_1.ExceptionModule.getFilters(), true),
            exports: [],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppModule = _classThis = /** @class */ (function () {
        function AppModule_1() {
        }
        return AppModule_1;
    }());
    __setFunctionName(_classThis, "AppModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
}();
exports.AppModule = AppModule;
