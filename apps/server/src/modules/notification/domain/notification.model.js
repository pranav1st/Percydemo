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
exports.Notification = void 0;
var domain_1 = require("@server/modules/user/domain");
var typeorm_1 = require("typeorm");
var Notification = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _senderName_decorators;
    var _senderName_initializers = [];
    var _senderEmail_decorators;
    var _senderEmail_initializers = [];
    var _senderPictureUrl_decorators;
    var _senderPictureUrl_initializers = [];
    var _redirectUrl_decorators;
    var _redirectUrl_initializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _dateCreated_decorators;
    var _dateCreated_initializers = [];
    var _dateUpdated_decorators;
    var _dateUpdated_initializers = [];
    var _dateDeleted_decorators;
    var _dateDeleted_initializers = [];
    var Notification = _classThis = /** @class */ (function () {
        function Notification_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.message = __runInitializers(this, _message_initializers, void 0);
            this.senderName = __runInitializers(this, _senderName_initializers, void 0);
            this.senderEmail = __runInitializers(this, _senderEmail_initializers, void 0);
            this.senderPictureUrl = __runInitializers(this, _senderPictureUrl_initializers, void 0);
            this.redirectUrl = __runInitializers(this, _redirectUrl_initializers, void 0);
            this.userId = __runInitializers(this, _userId_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
            this.dateCreated = __runInitializers(this, _dateCreated_initializers, void 0);
            this.dateUpdated = __runInitializers(this, _dateUpdated_initializers, void 0);
            this.dateDeleted = __runInitializers(this, _dateDeleted_initializers, void 0);
        }
        return Notification_1;
    }());
    __setFunctionName(_classThis, "Notification");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _title_decorators = [(0, typeorm_1.Column)()];
        _message_decorators = [(0, typeorm_1.Column)()];
        _senderName_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _senderEmail_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _senderPictureUrl_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _redirectUrl_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _userId_decorators = [(0, typeorm_1.Column)()];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return domain_1.User; }), (0, typeorm_1.JoinColumn)({ name: 'userId' })];
        _dateCreated_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _dateUpdated_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        _dateDeleted_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _senderName_decorators, { kind: "field", name: "senderName", static: false, private: false, access: { has: function (obj) { return "senderName" in obj; }, get: function (obj) { return obj.senderName; }, set: function (obj, value) { obj.senderName = value; } }, metadata: _metadata }, _senderName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _senderEmail_decorators, { kind: "field", name: "senderEmail", static: false, private: false, access: { has: function (obj) { return "senderEmail" in obj; }, get: function (obj) { return obj.senderEmail; }, set: function (obj, value) { obj.senderEmail = value; } }, metadata: _metadata }, _senderEmail_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _senderPictureUrl_decorators, { kind: "field", name: "senderPictureUrl", static: false, private: false, access: { has: function (obj) { return "senderPictureUrl" in obj; }, get: function (obj) { return obj.senderPictureUrl; }, set: function (obj, value) { obj.senderPictureUrl = value; } }, metadata: _metadata }, _senderPictureUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _redirectUrl_decorators, { kind: "field", name: "redirectUrl", static: false, private: false, access: { has: function (obj) { return "redirectUrl" in obj; }, get: function (obj) { return obj.redirectUrl; }, set: function (obj, value) { obj.redirectUrl = value; } }, metadata: _metadata }, _redirectUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateCreated_decorators, { kind: "field", name: "dateCreated", static: false, private: false, access: { has: function (obj) { return "dateCreated" in obj; }, get: function (obj) { return obj.dateCreated; }, set: function (obj, value) { obj.dateCreated = value; } }, metadata: _metadata }, _dateCreated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateUpdated_decorators, { kind: "field", name: "dateUpdated", static: false, private: false, access: { has: function (obj) { return "dateUpdated" in obj; }, get: function (obj) { return obj.dateUpdated; }, set: function (obj, value) { obj.dateUpdated = value; } }, metadata: _metadata }, _dateUpdated_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dateDeleted_decorators, { kind: "field", name: "dateDeleted", static: false, private: false, access: { has: function (obj) { return "dateDeleted" in obj; }, get: function (obj) { return obj.dateDeleted; }, set: function (obj, value) { obj.dateDeleted = value; } }, metadata: _metadata }, _dateDeleted_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Notification = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Notification = _classThis;
}();
exports.Notification = Notification;
