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
exports.BillingByMeController = exports.BillingController = void 0;
var common_1 = require("@nestjs/common");
var authentication_1 = require("@server/core/authentication");
var request_1 = require("@server/helpers/request");
var utility_1 = require("@server/helpers/utility");
var BillingController = function () {
    var _classDecorators = [(0, common_1.Controller)('/v1/billing')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _products_decorators;
    var _handleStripeWebhook_decorators;
    var BillingController = _classThis = /** @class */ (function () {
        function BillingController_1(exception, userDomainFacade, paymentService, loggerService) {
            this.exception = (__runInitializers(this, _instanceExtraInitializers), exception);
            this.userDomainFacade = userDomainFacade;
            this.paymentService = paymentService;
            this.loggerService = loggerService;
            this.logger = this.loggerService.create({ name: 'BillingController' });
        }
        BillingController_1.prototype.products = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.paymentService.isActive()) {
                        this.exception.paymentNotActivated();
                    }
                    return [2 /*return*/, this.paymentService.findManyProducts()];
                });
            });
        };
        BillingController_1.prototype.handleStripeWebhook = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var body, sig, data, userId, stripeCustomerId, metadata, user, user, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.paymentService.isActive()) {
                                this.exception.paymentNotActivated();
                            }
                            this.logger.log("Stripe webhook received");
                            body = request_1.RequestHelper.getRawBody(request);
                            sig = request.headers['stripe-signature'];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 9, , 10]);
                            return [4 /*yield*/, this.paymentService.onPayment(body, sig)];
                        case 2:
                            data = _a.sent();
                            if (!data) {
                                return [2 /*return*/];
                            }
                            userId = data.userId, stripeCustomerId = data.stripeCustomerId, metadata = data.metadata;
                            if (!utility_1.Utility.isDefined(userId)) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.userDomainFacade.findOneByIdOrFail(userId)];
                        case 3:
                            user = _a.sent();
                            if (!utility_1.Utility.isDefined(stripeCustomerId)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.userDomainFacade.update(user, { stripeCustomerId: stripeCustomerId })];
                        case 4:
                            _a.sent();
                            this.logger.log("Stripe customer id \"".concat(stripeCustomerId, "\" saved on user \"").concat(user.id, "\""));
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                        case 6:
                            if (!utility_1.Utility.isDefined(stripeCustomerId)) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.userDomainFacade.findOneByStripeCustomerIdOrFail(stripeCustomerId)];
                        case 7:
                            user = _a.sent();
                            this.logger.log("Found user \"".concat(user.id, "\" with stripe customer id \"").concat(stripeCustomerId, "\""));
                            return [2 /*return*/];
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            error_1 = _a.sent();
                            this.logger.error("Could not handle Stripe webhook");
                            this.logger.error(error_1);
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        return BillingController_1;
    }());
    __setFunctionName(_classThis, "BillingController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _products_decorators = [(0, common_1.Get)('/products'), authentication_1.Authentication.Public()];
        _handleStripeWebhook_decorators = [authentication_1.Authentication.Public(), (0, common_1.Post)('/stripe/webhook/raw')];
        __esDecorate(_classThis, null, _products_decorators, { kind: "method", name: "products", static: false, private: false, access: { has: function (obj) { return "products" in obj; }, get: function (obj) { return obj.products; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _handleStripeWebhook_decorators, { kind: "method", name: "handleStripeWebhook", static: false, private: false, access: { has: function (obj) { return "handleStripeWebhook" in obj; }, get: function (obj) { return obj.handleStripeWebhook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BillingController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BillingController = _classThis;
}();
exports.BillingController = BillingController;
var BillingByMeController = function () {
    var _classDecorators = [(0, common_1.Controller)('/v1/users/me/billing')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _findManyPayments_decorators;
    var _findManySubscriptions_decorators;
    var _getPaymentLink_decorators;
    var BillingByMeController = _classThis = /** @class */ (function () {
        function BillingByMeController_1(exception, authenticationDomainFacade, configurationService, userDomainFacade, paymentService) {
            this.exception = (__runInitializers(this, _instanceExtraInitializers), exception);
            this.authenticationDomainFacade = authenticationDomainFacade;
            this.configurationService = configurationService;
            this.userDomainFacade = userDomainFacade;
            this.paymentService = paymentService;
        }
        BillingByMeController_1.prototype.findManyPayments = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, user, payments;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.paymentService.isActive()) {
                                this.exception.paymentNotActivated();
                            }
                            payload = this.authenticationDomainFacade.getRequestPayload(request);
                            return [4 /*yield*/, this.findOneUserOrFail(payload.user.id)];
                        case 1:
                            user = _a.sent();
                            if (!this.paymentService.getCustomerId(user)) {
                                this.exception.noCustomerId(user.id);
                            }
                            return [4 /*yield*/, this.paymentService.findManyPayments(user)];
                        case 2:
                            payments = _a.sent();
                            return [2 /*return*/, payments];
                    }
                });
            });
        };
        BillingByMeController_1.prototype.findManySubscriptions = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, user, subscriptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.paymentService.isActive()) {
                                this.exception.paymentNotActivated();
                            }
                            payload = this.authenticationDomainFacade.getRequestPayload(request);
                            return [4 /*yield*/, this.findOneUserOrFail(payload.user.id)];
                        case 1:
                            user = _a.sent();
                            if (!this.paymentService.getCustomerId(user)) {
                                this.exception.noCustomerId(user.id);
                            }
                            return [4 /*yield*/, this.paymentService.findManySubscriptions(user)];
                        case 2:
                            subscriptions = _a.sent();
                            return [2 /*return*/, subscriptions];
                    }
                });
            });
        };
        BillingByMeController_1.prototype.getPaymentLink = function (request, productId) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, user, stripeCustomerId, urlRedirection, url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.paymentService.isActive()) {
                                this.exception.paymentNotActivated();
                            }
                            payload = this.authenticationDomainFacade.getRequestPayload(request);
                            return [4 /*yield*/, this.findOneUserOrFail(payload.user.id)];
                        case 1:
                            user = _a.sent();
                            stripeCustomerId = this.paymentService.getCustomerId(user);
                            if (!utility_1.Utility.isNull(stripeCustomerId)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.paymentService.createCustomer(user)];
                        case 2:
                            stripeCustomerId = _a.sent();
                            return [4 /*yield*/, this.userDomainFacade.update(user, {
                                    stripeCustomerId: stripeCustomerId,
                                })];
                        case 3:
                            user = _a.sent();
                            _a.label = 4;
                        case 4:
                            urlRedirection = this.configurationService.getClientBaseUrl();
                            return [4 /*yield*/, this.paymentService.createPaymentLink({
                                    user: user,
                                    productId: productId,
                                    metadata: {},
                                    urlRedirection: urlRedirection,
                                })];
                        case 5:
                            url = _a.sent();
                            return [2 /*return*/, { url: url }];
                    }
                });
            });
        };
        BillingByMeController_1.prototype.findOneUserOrFail = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userDomainFacade.findOneByIdWithStripeCustomerIdOrFail(userId)];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, user];
                    }
                });
            });
        };
        return BillingByMeController_1;
    }());
    __setFunctionName(_classThis, "BillingByMeController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _findManyPayments_decorators = [(0, common_1.Get)('/payments')];
        _findManySubscriptions_decorators = [(0, common_1.Get)('/subscriptions')];
        _getPaymentLink_decorators = [(0, common_1.Post)('/products/:productId/payment-link')];
        __esDecorate(_classThis, null, _findManyPayments_decorators, { kind: "method", name: "findManyPayments", static: false, private: false, access: { has: function (obj) { return "findManyPayments" in obj; }, get: function (obj) { return obj.findManyPayments; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findManySubscriptions_decorators, { kind: "method", name: "findManySubscriptions", static: false, private: false, access: { has: function (obj) { return "findManySubscriptions" in obj; }, get: function (obj) { return obj.findManySubscriptions; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPaymentLink_decorators, { kind: "method", name: "getPaymentLink", static: false, private: false, access: { has: function (obj) { return "getPaymentLink" in obj; }, get: function (obj) { return obj.getPaymentLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BillingByMeController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BillingByMeController = _classThis;
}();
exports.BillingByMeController = BillingByMeController;
