"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var authentication_1 = require("@server/core/authentication");
var request_1 = require("@server/helpers/request");
var UserController = function () {
    var _classDecorators = [(0, common_1.Controller)('v1/users')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _findMany_decorators;
    var _me_decorators;
    var _create_decorators;
    var _findOne_decorators;
    var _update_decorators;
    var _delete_decorators;
    var UserController = _classThis = /** @class */ (function () {
        function UserController_1(cookieSevice, userDomainFacade, authenticationDomainFacade) {
            this.cookieSevice = (__runInitializers(this, _instanceExtraInitializers), cookieSevice);
            this.userDomainFacade = userDomainFacade;
            this.authenticationDomainFacade = authenticationDomainFacade;
        }
        UserController_1.prototype.findMany = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var queryOptions, users;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            queryOptions = request_1.RequestHelper.getQueryOptions(request);
                            return [4 /*yield*/, this.userDomainFacade.findMany(queryOptions)];
                        case 1:
                            users = _a.sent();
                            return [2 /*return*/, users];
                    }
                });
            });
        };
        UserController_1.prototype.me = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var token, userId, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            token = this.authenticationDomainFacade.getAccessToken(request);
                            userId = this.authenticationDomainFacade.verifyTokenOrFail(token).userId;
                            return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(userId)];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, user];
                    }
                });
            });
        };
        UserController_1.prototype.create = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var userCreated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userDomainFacade.create(body)];
                        case 1:
                            userCreated = _a.sent();
                            return [2 /*return*/, userCreated];
                    }
                });
            });
        };
        UserController_1.prototype.findOne = function (userId, request) {
            return __awaiter(this, void 0, void 0, function () {
                var queryOptions, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            queryOptions = request_1.RequestHelper.getQueryOptions(request);
                            return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(userId, queryOptions)];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, user];
                    }
                });
            });
        };
        UserController_1.prototype.update = function (userId, body) {
            return __awaiter(this, void 0, void 0, function () {
                var user, userUpdated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(userId)];
                        case 1:
                            user = _a.sent();
                            return [4 /*yield*/, this.userDomainFacade.update(user, body)];
                        case 2:
                            userUpdated = _a.sent();
                            return [2 /*return*/, userUpdated];
                    }
                });
            });
        };
        UserController_1.prototype.delete = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(userId)];
                        case 1:
                            user = _a.sent();
                            return [4 /*yield*/, this.userDomainFacade.delete(user)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, user];
                    }
                });
            });
        };
        return UserController_1;
    }());
    __setFunctionName(_classThis, "UserController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _findMany_decorators = [(0, common_1.Get)()];
        _me_decorators = [(0, common_1.Get)('/me'), authentication_1.Authentication.AllowUserNotVerified()];
        _create_decorators = [(0, common_1.Post)('/')];
        _findOne_decorators = [(0, common_1.Get)('/:userId')];
        _update_decorators = [(0, common_1.Patch)('/:userId')];
        _delete_decorators = [(0, common_1.Delete)('/:userId')];
        __esDecorate(_classThis, null, _findMany_decorators, { kind: "method", name: "findMany", static: false, private: false, access: { has: function (obj) { return "findMany" in obj; }, get: function (obj) { return obj.findMany; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _me_decorators, { kind: "method", name: "me", static: false, private: false, access: { has: function (obj) { return "me" in obj; }, get: function (obj) { return obj.me; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _delete_decorators, { kind: "method", name: "delete", static: false, private: false, access: { has: function (obj) { return "delete" in obj; }, get: function (obj) { return obj.delete; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserController = _classThis;
}();
exports.UserController = UserController;
