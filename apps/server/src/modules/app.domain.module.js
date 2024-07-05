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
exports.AppDomainModule = void 0;
var common_1 = require("@nestjs/common");
var domain_1 = require("./authentication/domain");
var domain_2 = require("./authorization/domain");
var domain_3 = require("./user/domain");
var domain_4 = require("./notification/domain");
var domain_5 = require("./siemSolution/domain");
var domain_6 = require("./deployment/domain");
var domain_7 = require("./incidentResponse/domain");
var domain_8 = require("./training/domain");
var domain_9 = require("./support/domain");
var domain_10 = require("./alert/domain");
var domain_11 = require("./securityEvent/domain");
var domain_12 = require("./complianceReport/domain");
var domain_13 = require("./resourceAllocation/domain");
var AppDomainModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                domain_1.AuthenticationDomainModule,
                domain_2.AuthorizationDomainModule,
                domain_3.UserDomainModule,
                domain_4.NotificationDomainModule,
                domain_5.SiemSolutionDomainModule,
                domain_6.DeploymentDomainModule,
                domain_7.IncidentResponseDomainModule,
                domain_8.TrainingDomainModule,
                domain_9.SupportDomainModule,
                domain_10.AlertDomainModule,
                domain_11.SecurityEventDomainModule,
                domain_12.ComplianceReportDomainModule,
                domain_13.ResourceAllocationDomainModule,
            ],
            controllers: [],
            providers: [],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppDomainModule = _classThis = /** @class */ (function () {
        function AppDomainModule_1() {
        }
        return AppDomainModule_1;
    }());
    __setFunctionName(_classThis, "AppDomainModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppDomainModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppDomainModule = _classThis;
}();
exports.AppDomainModule = AppDomainModule;
