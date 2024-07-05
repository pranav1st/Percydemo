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
exports.AuthorizationCodeFacade = void 0;
var common_1 = require("@nestjs/common");
var utility_1 = require("@server/helpers/utility");
var authorization_domain_event_1 = require("../authorization.domain.event");
var authorization_code_model_1 = require("./authorization.code.model");
var AuthorizationCodeFacade = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthorizationCodeFacade = _classThis = /** @class */ (function () {
        function AuthorizationCodeFacade_1(repository, databaseHelper, exception, eventService) {
            this.repository = repository;
            this.databaseHelper = databaseHelper;
            this.exception = exception;
            this.eventService = eventService;
        }
        AuthorizationCodeFacade_1.prototype.createOrFail = function (values, user) {
            return __awaiter(this, void 0, void 0, function () {
                var keyPublic, keyPrivate, code, codeCreated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.buildKey()];
                        case 1:
                            keyPublic = _a.sent();
                            return [4 /*yield*/, this.buildKey()];
                        case 2:
                            keyPrivate = _a.sent();
                            code = __assign(__assign({}, values), { userId: user.id, keyPublic: keyPublic, keyPrivate: keyPrivate });
                            return [4 /*yield*/, this.repository.save(code)];
                        case 3:
                            codeCreated = _a.sent();
                            return [4 /*yield*/, this.eventService.emit(authorization_domain_event_1.AuthorizationDomainEvent.CodeCreated.key, { authorizationCodeId: code.id })];
                        case 4:
                            _a.sent();
                            return [2 /*return*/, codeCreated];
                    }
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.check = function (code) {
            return __awaiter(this, void 0, void 0, function () {
                var minutes, dateCreated, dateExpiration, dateNow;
                return __generator(this, function (_a) {
                    minutes = code.durationMinutes;
                    dateCreated = new Date(code.dateCreated);
                    dateExpiration = new Date(dateCreated.getTime() + minutes * 60000);
                    dateNow = new Date();
                    if (dateNow > dateExpiration) {
                        throw new Error("Code is expired (".concat(dateNow.getTime(), " > ").concat(dateExpiration.getTime(), ")"));
                    }
                    return [2 /*return*/];
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.setStatusExpired = function (code) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.update(code, {
                            status: authorization_code_model_1.AuthorizationCodeStatus.EXPIRED,
                        })];
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.setStatusUsed = function (code) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.update(code, {
                            status: authorization_code_model_1.AuthorizationCodeStatus.USED,
                        })];
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.create = function (code) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.repository.save(code)];
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.update = function (code, values) {
            return __awaiter(this, void 0, void 0, function () {
                var codeUpdated;
                return __generator(this, function (_a) {
                    codeUpdated = __assign(__assign({}, code), values);
                    return [2 /*return*/, this.repository.save(codeUpdated)];
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.findOneByIdOrFail = function (codeId) {
            return __awaiter(this, void 0, void 0, function () {
                var code;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!codeId) {
                                this.databaseHelper.invalidQueryWhere('codeId');
                            }
                            return [4 /*yield*/, this.repository.findOne({ where: { id: codeId } })];
                        case 1:
                            code = _a.sent();
                            if (!code) {
                                this.exception.codeNotFoundById(codeId);
                            }
                            return [2 /*return*/, code];
                    }
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.findOneActiveOrFail = function (user, keyPrivate, keyPublic) {
            return __awaiter(this, void 0, void 0, function () {
                var code;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findOne({
                                where: {
                                    userId: user.id,
                                    keyPrivate: keyPrivate,
                                    keyPublic: keyPublic,
                                    status: authorization_code_model_1.AuthorizationCodeStatus.ACTIVE,
                                },
                            })];
                        case 1:
                            code = _a.sent();
                            if (!code) {
                                this.exception.codeNotFoundByKeys(user, keyPrivate, keyPublic);
                            }
                            return [2 /*return*/, code];
                    }
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.findManyByUserAndType = function (user, type) {
            return __awaiter(this, void 0, void 0, function () {
                var codes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!type) {
                                this.databaseHelper.invalidQueryWhere('type');
                            }
                            return [4 /*yield*/, this.repository.find({
                                    where: { userId: user.id, type: type },
                                })];
                        case 1:
                            codes = _a.sent();
                            return [2 /*return*/, codes];
                    }
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.delete = function (code) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.softDelete({ id: code.id })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthorizationCodeFacade_1.prototype.getKeyPrivate = function (authorizationCode) {
            return authorizationCode.keyPrivate;
        };
        AuthorizationCodeFacade_1.prototype.buildKey = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, utility_1.Utility.buildRandomAlphanumericString(8)];
                });
            });
        };
        return AuthorizationCodeFacade_1;
    }());
    __setFunctionName(_classThis, "AuthorizationCodeFacade");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthorizationCodeFacade = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthorizationCodeFacade = _classThis;
}();
exports.AuthorizationCodeFacade = AuthorizationCodeFacade;
