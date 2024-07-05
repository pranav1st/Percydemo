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
exports.SiemSolution = void 0;
var typeorm_1 = require("typeorm");
var domain_1 = require("../../../modules/deployment/domain");
var domain_2 = require("../../../modules/incidentResponse/domain");
var domain_3 = require("../../../modules/training/domain");
var domain_4 = require("../../../modules/support/domain");
var domain_5 = require("../../../modules/alert/domain");
var domain_6 = require("../../../modules/securityEvent/domain");
var domain_7 = require("../../../modules/complianceReport/domain");
var domain_8 = require("../../../modules/resourceAllocation/domain");
var SiemSolution = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _deployments_decorators;
    var _deployments_initializers = [];
    var _incidentResponses_decorators;
    var _incidentResponses_initializers = [];
    var _trainings_decorators;
    var _trainings_initializers = [];
    var _supports_decorators;
    var _supports_initializers = [];
    var _alerts_decorators;
    var _alerts_initializers = [];
    var _securityEvents_decorators;
    var _securityEvents_initializers = [];
    var _complianceReports_decorators;
    var _complianceReports_initializers = [];
    var _resourceAllocations_decorators;
    var _resourceAllocations_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var SiemSolution = _classThis = /** @class */ (function () {
        function SiemSolution_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.status = __runInitializers(this, _status_initializers, void 0);
            this.deployments = __runInitializers(this, _deployments_initializers, void 0);
            this.incidentResponses = __runInitializers(this, _incidentResponses_initializers, void 0);
            this.trainings = __runInitializers(this, _trainings_initializers, void 0);
            this.supports = __runInitializers(this, _supports_initializers, void 0);
            this.alerts = __runInitializers(this, _alerts_initializers, void 0);
            this.securityEvents = __runInitializers(this, _securityEvents_initializers, void 0);
            this.complianceReports = __runInitializers(this, _complianceReports_initializers, void 0);
            this.resourceAllocations = __runInitializers(this, _resourceAllocations_initializers, void 0);
            this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
            this.dateUpdated = __runInitializers(this, _dateUpdated_initializers, void 0);
            this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
        }
        return SiemSolution_1;
    }());
    __setFunctionName(_classThis, "SiemSolution");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _name_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _description_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _status_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _deployments_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_1.Deployment; }, function (child) { return child.siemSolution; })];
        _incidentResponses_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_2.IncidentResponse; }, function (child) { return child.siemSolution; })];
        _trainings_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_3.Training; }, function (child) { return child.siemSolution; })];
        _supports_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_4.Support; }, function (child) { return child.siemSolution; })];
        _alerts_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_5.Alert; }, function (child) { return child.siemSolution; })];
        _securityEvents_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_6.SecurityEvent; }, function (child) { return child.siemSolution; })];
        _complianceReports_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_7.ComplianceReport; }, function (child) { return child.siemSolution; })];
        _resourceAllocations_decorators = [(0, typeorm_1.OneToMany)(function () { return domain_8.ResourceAllocation; }, function (child) { return child.siemSolution; })];
        _dateCreated_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _dateUpdated_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        _dateDeleted_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _deployments_decorators, { kind: "field", name: "deployments", static: false, private: false, access: { has: function (obj) { return "deployments" in obj; }, get: function (obj) { return obj.deployments; }, set: function (obj, value) { obj.deployments = value; } }, metadata: _metadata }, _deployments_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _incidentResponses_decorators, { kind: "field", name: "incidentResponses", static: false, private: false, access: { has: function (obj) { return "incidentResponses" in obj; }, get: function (obj) { return obj.incidentResponses; }, set: function (obj, value) { obj.incidentResponses = value; } }, metadata: _metadata }, _incidentResponses_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _trainings_decorators, { kind: "field", name: "trainings", static: false, private: false, access: { has: function (obj) { return "trainings" in obj; }, get: function (obj) { return obj.trainings; }, set: function (obj, value) { obj.trainings = value; } }, metadata: _metadata }, _trainings_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _supports_decorators, { kind: "field", name: "supports", static: false, private: false, access: { has: function (obj) { return "supports" in obj; }, get: function (obj) { return obj.supports; }, set: function (obj, value) { obj.supports = value; } }, metadata: _metadata }, _supports_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _alerts_decorators, { kind: "field", name: "alerts", static: false, private: false, access: { has: function (obj) { return "alerts" in obj; }, get: function (obj) { return obj.alerts; }, set: function (obj, value) { obj.alerts = value; } }, metadata: _metadata }, _alerts_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _securityEvents_decorators, { kind: "field", name: "securityEvents", static: false, private: false, access: { has: function (obj) { return "securityEvents" in obj; }, get: function (obj) { return obj.securityEvents; }, set: function (obj, value) { obj.securityEvents = value; } }, metadata: _metadata }, _securityEvents_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _complianceReports_decorators, { kind: "field", name: "complianceReports", static: false, private: false, access: { has: function (obj) { return "complianceReports" in obj; }, get: function (obj) { return obj.complianceReports; }, set: function (obj, value) { obj.complianceReports = value; } }, metadata: _metadata }, _complianceReports_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _resourceAllocations_decorators, { kind: "field", name: "resourceAllocations", static: false, private: false, access: { has: function (obj) { return "resourceAllocations" in obj; }, get: function (obj) { return obj.resourceAllocations; }, set: function (obj, value) { obj.resourceAllocations = value; } }, metadata: _metadata }, _resourceAllocations_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SiemSolution = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SiemSolution = _classThis;
}();
exports.SiemSolution = SiemSolution;
