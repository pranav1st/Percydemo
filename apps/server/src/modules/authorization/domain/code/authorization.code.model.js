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
exports.AuthorizationCode = exports.AuthorizationCodeStatus = exports.AuthorizationCodeType = void 0;
var class_validator_1 = require("class-validator");
var domain_1 = require("@server/modules/user/domain");
var typeorm_1 = require("typeorm");
var AuthorizationCodeType;
(function (AuthorizationCodeType) {
    AuthorizationCodeType["USER_VERIFICATION"] = "user.verification";
})(AuthorizationCodeType || (exports.AuthorizationCodeType = AuthorizationCodeType = {}));
var AuthorizationCodeStatus;
(function (AuthorizationCodeStatus) {
    AuthorizationCodeStatus["ACTIVE"] = "ACTIVE";
    AuthorizationCodeStatus["USED"] = "USED";
    AuthorizationCodeStatus["EXPIRED"] = "EXPIRED";
})(AuthorizationCodeStatus || (exports.AuthorizationCodeStatus = AuthorizationCodeStatus = {}));
var AuthorizationCode = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _keyPublic_decorators;
    var _keyPublic_initializers = [];
    var _keyPrivate_decorators;
    var _keyPrivate_initializers = [];
    var _durationMinutes_decorators;
    var _durationMinutes_initializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var AuthorizationCode = _classThis = /** @class */ (function () {
        function AuthorizationCode_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.keyPublic = __runInitializers(this, _keyPublic_initializers, void 0);
            this.keyPrivate = __runInitializers(this, _keyPrivate_initializers, void 0);
            this.durationMinutes = __runInitializers(this, _durationMinutes_initializers, void 0);
            this.type = __runInitializers(this, _type_initializers, void 0);
            this.status = __runInitializers(this, _status_initializers, void 0);
            this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
            this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
            /* -------------------------------- RELATIONS ------------------------------- */
            this.userId = __runInitializers(this, _userId_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
        }
        return AuthorizationCode_1;
    }());
    __setFunctionName(_classThis, "AuthorizationCode");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _keyPublic_decorators = [(0, typeorm_1.Column)()];
        _keyPrivate_decorators = [(0, typeorm_1.Column)()];
        _durationMinutes_decorators = [(0, typeorm_1.Column)({ default: 60 }), (0, class_validator_1.Min)(0)];
        _type_decorators = [(0, typeorm_1.Column)({ enum: AuthorizationCodeType })];
        _status_decorators = [(0, typeorm_1.Column)({
                enum: AuthorizationCodeStatus,
                default: AuthorizationCodeStatus.ACTIVE,
            })];
        _dateCreated_decorators = [(0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' })];
        _dateDeleted_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        _userId_decorators = [(0, typeorm_1.Column)()];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return domain_1.User; }), (0, typeorm_1.JoinColumn)({ name: 'userId' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _keyPublic_decorators, { kind: "field", name: "keyPublic", static: false, private: false, access: { has: function (obj) { return "keyPublic" in obj; }, get: function (obj) { return obj.keyPublic; }, set: function (obj, value) { obj.keyPublic = value; } }, metadata: _metadata }, _keyPublic_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _keyPrivate_decorators, { kind: "field", name: "keyPrivate", static: false, private: false, access: { has: function (obj) { return "keyPrivate" in obj; }, get: function (obj) { return obj.keyPrivate; }, set: function (obj, value) { obj.keyPrivate = value; } }, metadata: _metadata }, _keyPrivate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _durationMinutes_decorators, { kind: "field", name: "durationMinutes", static: false, private: false, access: { has: function (obj) { return "durationMinutes" in obj; }, get: function (obj) { return obj.durationMinutes; }, set: function (obj, value) { obj.durationMinutes = value; } }, metadata: _metadata }, _durationMinutes_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthorizationCode = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthorizationCode = _classThis;
}();
exports.AuthorizationCode = AuthorizationCode;
