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
exports.AppApplicationModule = void 0;
var common_1 = require("@nestjs/common");
var application_1 = require("./authentication/application");
var application_2 = require("./authorization/application");
var application_3 = require("./user/application");
var application_4 = require("./siemSolution/application");
var application_5 = require("./deployment/application");
var application_6 = require("./incidentResponse/application");
var application_7 = require("./training/application");
var application_8 = require("./support/application");
var application_9 = require("./alert/application");
var application_10 = require("./securityEvent/application");
var application_11 = require("./complianceReport/application");
var application_12 = require("./resourceAllocation/application");
var ai_application_module_1 = require("./ai/application/ai.application.module");
var application_13 = require("./billing/application");
var notification_application_module_1 = require("./notification/application/notification.application.module");
var upload_application_module_1 = require("./upload/application/upload.application.module");
var AppApplicationModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                application_1.AuthenticationApplicationModule,
                application_3.UserApplicationModule,
                application_2.AuthorizationApplicationModule,
                notification_application_module_1.NotificationApplicationModule,
                ai_application_module_1.AiApplicationModule,
                upload_application_module_1.UploadApplicationModule,
                application_13.BillingApplicationModule,
                application_4.SiemSolutionApplicationModule,
                application_5.DeploymentApplicationModule,
                application_6.IncidentResponseApplicationModule,
                application_7.TrainingApplicationModule,
                application_8.SupportApplicationModule,
                application_9.AlertApplicationModule,
                application_10.SecurityEventApplicationModule,
                application_11.ComplianceReportApplicationModule,
                application_12.ResourceAllocationApplicationModule,
            ],
            controllers: [],
            providers: [],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppApplicationModule = _classThis = /** @class */ (function () {
        function AppApplicationModule_1() {
        }
        return AppApplicationModule_1;
    }());
    __setFunctionName(_classThis, "AppApplicationModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppApplicationModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppApplicationModule = _classThis;
}();
exports.AppApplicationModule = AppApplicationModule;
