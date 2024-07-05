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
exports.IncidentResponse = void 0;
var typeorm_1 = require("typeorm");
var domain_1 = require("../../../modules/siemSolution/domain");
var IncidentResponse = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _processDetails_decorators;
    var _processDetails_initializers = [];
    var _automationLevel_decorators;
    var _automationLevel_initializers = [];
    var _siemSolutionId_decorators;
    var _siemSolutionId_initializers = [];
    var _siemSolution_decorators;
    var _siemSolution_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var IncidentResponse = _classThis = /** @class */ (function () {
        function IncidentResponse_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.processDetails = __runInitializers(this, _processDetails_initializers, void 0);
            this.automationLevel = __runInitializers(this, _automationLevel_initializers, void 0);
            this.siemSolutionId = __runInitializers(this, _siemSolutionId_initializers, void 0);
            this.siemSolution = __runInitializers(this, _siemSolution_initializers, void 0);
            this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
            this.dateUpdated = __runInitializers(this, _dateUpdated_initializers, void 0);
            this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
        }
        return IncidentResponse_1;
    }());
    __setFunctionName(_classThis, "IncidentResponse");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _processDetails_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _automationLevel_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _siemSolutionId_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _siemSolution_decorators = [(0, typeorm_1.ManyToOne)(function () { return domain_1.SiemSolution; }, function (parent) { return parent.incidentResponses; }), (0, typeorm_1.JoinColumn)({ name: 'siemSolutionId' })];
        _dateCreated_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _dateUpdated_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        _dateDeleted_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _processDetails_decorators, { kind: "field", name: "processDetails", static: false, private: false, access: { has: function (obj) { return "processDetails" in obj; }, get: function (obj) { return obj.processDetails; }, set: function (obj, value) { obj.processDetails = value; } }, metadata: _metadata }, _processDetails_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _automationLevel_decorators, { kind: "field", name: "automationLevel", static: false, private: false, access: { has: function (obj) { return "automationLevel" in obj; }, get: function (obj) { return obj.automationLevel; }, set: function (obj, value) { obj.automationLevel = value; } }, metadata: _metadata }, _automationLevel_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _siemSolutionId_decorators, { kind: "field", name: "siemSolutionId", static: false, private: false, access: { has: function (obj) { return "siemSolutionId" in obj; }, get: function (obj) { return obj.siemSolutionId; }, set: function (obj, value) { obj.siemSolutionId = value; } }, metadata: _metadata }, _siemSolutionId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _siemSolution_decorators, { kind: "field", name: "siemSolution", static: false, private: false, access: { has: function (obj) { return "siemSolution" in obj; }, get: function (obj) { return obj.siemSolution; }, set: function (obj, value) { obj.siemSolution = value; } }, metadata: _metadata }, _siemSolution_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IncidentResponse = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IncidentResponse = _classThis;
}();
exports.IncidentResponse = IncidentResponse;
