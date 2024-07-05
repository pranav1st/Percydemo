"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.AuthenticationController = void 0;
var common_1 = require("@nestjs/common");
var authentication_1 = require("@server/core/authentication");
var authentication_application_event_1 = require("./authentication.application.event");
var AuthenticationController = function () {
    var _classDecorators = [(0, common_1.Controller)('/v1/authentication')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _login_decorators;
    var _register_decorators;
    var _refresh_decorators;
    var _registerVisitor_decorators;
    var _sendEmailResetPassword_decorators;
    var _resetPassword_decorators;
    var _logout_decorators;
    var AuthenticationController = _classThis = /** @class */ (function () {
        function AuthenticationController_1(authenticationDomainFacade, exception, userDomainFacade, loggerService, event, cookieService) {
            this.authenticationDomainFacade = (__runInitializers(this, _instanceExtraInitializers), authenticationDomainFacade);
            this.exception = exception;
            this.userDomainFacade = userDomainFacade;
            this.loggerService = loggerService;
            this.event = event;
            this.cookieService = cookieService;
            this.logger = this.loggerService.create({
                name: 'AuthenticationController',
            });
        }
        AuthenticationController_1.prototype.login = function (body, response) {
            return __awaiter(this, void 0, void 0, function () {
                var email, password, user, token, data;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            email = body.email, password = body.password;
                            return [4 /*yield*/, this.userDomainFacade
                                    .findOneByEmailWithPassword(email)
                                    .catch(function () { return _this.exception.userEmailNotFound(email); })];
                        case 1:
                            user = _a.sent();
                            return [4 /*yield*/, this.userDomainFacade
                                    .verifyPassword(user, password)
                                    .catch(function () { return _this.exception.userPasswordNotFound(email); })];
                        case 2:
                            _a.sent();
                            token = this.authenticationDomainFacade.buildToken(user.id);
                            data = this.authenticationDomainFacade.setAccessToken(response, token);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        AuthenticationController_1.prototype.register = function (request, body, response) {
            return __awaiter(this, void 0, void 0, function () {
                var email, password, userExisting, passwordHashed, user, token_1, payload, candidate, _a, token, data;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            email = body.email, password = body.password;
                            return [4 /*yield*/, this.userDomainFacade
                                    .findOneByEmailOrFail(email)
                                    .catch(function () { })];
                        case 1:
                            userExisting = _b.sent();
                            if (userExisting) {
                                this.exception.userEmailNotAvailable(email);
                            }
                            return [4 /*yield*/, this.userDomainFacade.hashPassword(password)];
                        case 2:
                            passwordHashed = _b.sent();
                            _b.label = 3;
                        case 3:
                            _b.trys.push([3, 5, , 6]);
                            token_1 = this.authenticationDomainFacade.getAccessToken(request);
                            payload = this.authenticationDomainFacade.verifyTokenOrFail(token_1);
                            return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(payload.userId)];
                        case 4:
                            candidate = _b.sent();
                            if (this.userDomainFacade.isVisitor(candidate)) {
                                user = candidate;
                            }
                            return [3 /*break*/, 6];
                        case 5:
                            _a = _b.sent();
                            return [3 /*break*/, 6];
                        case 6:
                            if (!user) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.userDomainFacade.update(user, __assign(__assign({}, body), { password: passwordHashed }))];
                        case 7:
                            user = _b.sent();
                            return [3 /*break*/, 10];
                        case 8: return [4 /*yield*/, this.userDomainFacade.create(__assign(__assign({}, body), { password: passwordHashed }))];
                        case 9:
                            user = _b.sent();
                            _b.label = 10;
                        case 10:
                            token = this.authenticationDomainFacade.buildToken(user.id);
                            return [4 /*yield*/, this.event.emit(authentication_application_event_1.AuthenticationApplicationEvent.UserRegistered.key, { userId: user.id })];
                        case 11:
                            _b.sent();
                            data = this.authenticationDomainFacade.setAccessToken(response, token);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        AuthenticationController_1.prototype.refresh = function (request, response) {
            return __awaiter(this, void 0, void 0, function () {
                var token, userId, payload, user, tokenRefreshed, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            token = this.authenticationDomainFacade.getAccessToken(request);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            userId = void 0;
                            try {
                                payload = this.authenticationDomainFacade.verifyTokenOrFail(token);
                                userId = payload.userId;
                            }
                            catch (error) {
                                this.exception.invalidAccessToken();
                            }
                            return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(userId)];
                        case 2:
                            user = _a.sent();
                            tokenRefreshed = this.authenticationDomainFacade.buildToken(user.id);
                            data = this.authenticationDomainFacade.setAccessToken(response, tokenRefreshed);
                            return [2 /*return*/, data];
                        case 3:
                            error_1 = _a.sent();
                            this.cookieService.deleteAccessToken(response);
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AuthenticationController_1.prototype.registerVisitor = function (request, response) {
            return __awaiter(this, void 0, void 0, function () {
                var user, token_2, payload, userId, _a, token, data;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 4]);
                            token_2 = this.authenticationDomainFacade.getAccessToken(request);
                            payload = this.authenticationDomainFacade.verifyTokenOrFail(token_2);
                            userId = payload.userId;
                            return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(userId)];
                        case 1:
                            user = _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            _a = _b.sent();
                            return [4 /*yield*/, this.userDomainFacade.create({})];
                        case 3:
                            user = _b.sent();
                            return [3 /*break*/, 4];
                        case 4:
                            token = this.authenticationDomainFacade.buildToken(user.id);
                            data = this.authenticationDomainFacade.setAccessToken(response, token);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        AuthenticationController_1.prototype.sendEmailResetPassword = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userDomainFacade
                                .findOneByEmailOrFail(body.email)
                                .catch(function () { return null; })];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                this.logger.log("".concat(body.email, " was not found. Reset password email skipped."));
                                return [2 /*return*/, {}];
                            }
                            return [4 /*yield*/, this.event.emit(authentication_application_event_1.AuthenticationApplicationEvent.UserPasswordResetRequested.key, { userId: user.id })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, {}];
                    }
                });
            });
        };
        AuthenticationController_1.prototype.resetPassword = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var userId, user, passwordHashed;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authenticationDomainFacade
                                .verifyTokenResetPasswordOrFail(body.token)
                                .catch(function () { return _this.exception.invalidResetPasswordToken(); })];
                        case 1:
                            userId = (_a.sent()).userId;
                            return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(userId)];
                        case 2:
                            user = _a.sent();
                            return [4 /*yield*/, this.userDomainFacade.hashPassword(body.password)];
                        case 3:
                            passwordHashed = _a.sent();
                            return [4 /*yield*/, this.userDomainFacade.update(user, {
                                    password: passwordHashed,
                                })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/, {}];
                    }
                });
            });
        };
        AuthenticationController_1.prototype.logout = function (response) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        this.cookieService.deleteAccessToken(response);
                    }
                    catch (error) {
                        console.log(error);
                    }
                    return [2 /*return*/, {}];
                });
            });
        };
        return AuthenticationController_1;
    }());
    __setFunctionName(_classThis, "AuthenticationController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _login_decorators = [(0, common_1.Post)('/login'), authentication_1.Authentication.Public()];
        _register_decorators = [(0, common_1.Post)('/register'), authentication_1.Authentication.Public()];
        _refresh_decorators = [(0, common_1.Post)('/refresh'), authentication_1.Authentication.Public()];
        _registerVisitor_decorators = [(0, common_1.Post)('/register-visitor'), authentication_1.Authentication.Public()];
        _sendEmailResetPassword_decorators = [(0, common_1.Post)('/reset-password-email'), authentication_1.Authentication.Public()];
        _resetPassword_decorators = [(0, common_1.Patch)('/reset-password'), authentication_1.Authentication.Public()];
        _logout_decorators = [(0, common_1.Post)('/logout'), authentication_1.Authentication.Public()];
        __esDecorate(_classThis, null, _login_decorators, { kind: "method", name: "login", static: false, private: false, access: { has: function (obj) { return "login" in obj; }, get: function (obj) { return obj.login; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _register_decorators, { kind: "method", name: "register", static: false, private: false, access: { has: function (obj) { return "register" in obj; }, get: function (obj) { return obj.register; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _refresh_decorators, { kind: "method", name: "refresh", static: false, private: false, access: { has: function (obj) { return "refresh" in obj; }, get: function (obj) { return obj.refresh; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _registerVisitor_decorators, { kind: "method", name: "registerVisitor", static: false, private: false, access: { has: function (obj) { return "registerVisitor" in obj; }, get: function (obj) { return obj.registerVisitor; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _sendEmailResetPassword_decorators, { kind: "method", name: "sendEmailResetPassword", static: false, private: false, access: { has: function (obj) { return "sendEmailResetPassword" in obj; }, get: function (obj) { return obj.sendEmailResetPassword; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _resetPassword_decorators, { kind: "method", name: "resetPassword", static: false, private: false, access: { has: function (obj) { return "resetPassword" in obj; }, get: function (obj) { return obj.resetPassword; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _logout_decorators, { kind: "method", name: "logout", static: false, private: false, access: { has: function (obj) { return "logout" in obj; }, get: function (obj) { return obj.logout; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthenticationController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthenticationController = _classThis;
}();
exports.AuthenticationController = AuthenticationController;
