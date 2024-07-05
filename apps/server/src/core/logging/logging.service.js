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
exports.LoggingService = void 0;
var common_1 = require("@nestjs/common");
var request_1 = require("@server/helpers/request");
var LoggingService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var LoggingService = _classThis = /** @class */ (function () {
        function LoggingService_1(authenticationDomainFacade, loggerService) {
            this.authenticationDomainFacade = authenticationDomainFacade;
            this.loggerService = loggerService;
            this.logger = this.loggerService.create({ name: 'LoggingInterceptor' });
        }
        LoggingService_1.prototype.logOnStart = function (request) {
            var _a, _b, _c, _d, _e, _f;
            var path = request_1.RequestHelper.getPath(request);
            var method = request_1.RequestHelper.getMethod(request);
            var authenticationPayload = this.authenticationDomainFacade.getRequestPayload(request);
            var id = (_b = (_a = authenticationPayload === null || authenticationPayload === void 0 ? void 0 : authenticationPayload.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : '???';
            var email = (_d = (_c = authenticationPayload === null || authenticationPayload === void 0 ? void 0 : authenticationPayload.user) === null || _c === void 0 ? void 0 : _c.email) !== null && _d !== void 0 ? _d : '???@???.com';
            var name = (_f = (_e = authenticationPayload === null || authenticationPayload === void 0 ? void 0 : authenticationPayload.user) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '???';
            var data = {
                path: path,
                authentication: authenticationPayload,
            };
            this.logger.log("[START] ".concat(name, " - ").concat(email, " - ").concat(id, " | ").concat(method, " ").concat(path), data);
        };
        LoggingService_1.prototype.logOnStop = function (request) {
            var _a, _b, _c, _d, _e, _f;
            var path = request_1.RequestHelper.getPath(request);
            var method = request_1.RequestHelper.getMethod(request);
            var authenticationPayload = this.authenticationDomainFacade.getRequestPayload(request);
            var id = (_b = (_a = authenticationPayload === null || authenticationPayload === void 0 ? void 0 : authenticationPayload.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : '???';
            var email = (_d = (_c = authenticationPayload === null || authenticationPayload === void 0 ? void 0 : authenticationPayload.user) === null || _c === void 0 ? void 0 : _c.email) !== null && _d !== void 0 ? _d : '???@???.com';
            var name = (_f = (_e = authenticationPayload === null || authenticationPayload === void 0 ? void 0 : authenticationPayload.user) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '???';
            this.logger.log("[STOP] ".concat(name, " - ").concat(email, " - ").concat(id, " | ").concat(method, " ").concat(path));
        };
        return LoggingService_1;
    }());
    __setFunctionName(_classThis, "LoggingService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoggingService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoggingService = _classThis;
}();
exports.LoggingService = LoggingService;
