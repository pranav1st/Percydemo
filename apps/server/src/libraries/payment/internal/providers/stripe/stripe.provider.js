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
exports.StripeProvider = void 0;
var common_1 = require("@nestjs/common");
var stripe_1 = require("stripe");
var payment_type_1 = require("../../payment.type");
var StripeProvider = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var StripeProvider = _classThis = /** @class */ (function () {
        function StripeProvider_1(configurationService, loggerService) {
            this.configurationService = configurationService;
            this.loggerService = loggerService;
            this.logger = this.loggerService.create({ name: 'StripeProvider' });
            this.initialise();
        }
        StripeProvider_1.prototype.isActive = function () {
            if (this.client) {
                return true;
            }
            else {
                return false;
            }
        };
        StripeProvider_1.prototype.initialise = function () {
            this.logger.log('Initialization...');
            try {
                var secretKey = this.configurationService.get('SERVER_PAYMENT_STRIPE_SECRET_KEY');
                this.webhookSecret = this.configurationService.get('SERVER_PAYMENT_STRIPE_WEBHOOK_SECRET');
                if (!this.webhookSecret && !secretKey) {
                    throw new Error('Set SERVER_PAYMENT_STRIPE_SECRET_KEY && SERVER_PAYMENT_STRIPE_WEBHOOK_SECRET in your .env to activate');
                }
                if (!this.webhookSecret) {
                    throw new Error('Set SERVER_PAYMENT_STRIPE_WEBHOOK_SECRET in your .env to activate');
                }
                if (!secretKey) {
                    throw new Error('Set SERVER_PAYMENT_STRIPE_SECRET_KEY in your .env to activate');
                }
                this.client = new stripe_1.Stripe(secretKey, {
                    apiVersion: '2024-04-10',
                });
                this.logger.success("Stripe active");
            }
            catch (error) {
                this.logger.warning("Stripe failed to start");
                this.logger.warning(error);
            }
        };
        StripeProvider_1.prototype.findManySubscriptions = function (customerId) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var response, subscriptions, _i, _d, subscription;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, this.client.subscriptions.list({
                                customer: customerId,
                            })];
                        case 1:
                            response = _e.sent();
                            subscriptions = [];
                            for (_i = 0, _d = response.data; _i < _d.length; _i++) {
                                subscription = _d[_i];
                                subscriptions.push({
                                    productId: (_c = (_b = (_a = subscription.items) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[0].price) === null || _c === void 0 ? void 0 : _c.product,
                                    dateExpired: new Date(subscription.current_period_end * 1000),
                                    status: subscription.status,
                                });
                            }
                            return [2 /*return*/, subscriptions];
                    }
                });
            });
        };
        StripeProvider_1.prototype.findManyPayments = function (customerId) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var response, checkoutSessions, payments, _i, checkoutSessions_1, session, _b, _c, lineItem;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.client.checkout.sessions.list({
                                expand: ['data.line_items'],
                                customer: customerId,
                            })];
                        case 1:
                            response = _d.sent();
                            checkoutSessions = (_a = response.data) === null || _a === void 0 ? void 0 : _a.filter(function (session) { return session.payment_status === 'paid'; });
                            payments = [];
                            for (_i = 0, checkoutSessions_1 = checkoutSessions; _i < checkoutSessions_1.length; _i++) {
                                session = checkoutSessions_1[_i];
                                for (_b = 0, _c = session.line_items.data; _b < _c.length; _b++) {
                                    lineItem = _c[_b];
                                    payments.push({
                                        productId: lineItem.price.product,
                                        amount: lineItem.price.unit_amount / 100,
                                        currency: lineItem.price.currency,
                                        date: new Date(session.created * 1000),
                                    });
                                }
                            }
                            return [2 /*return*/, payments];
                    }
                });
            });
        };
        StripeProvider_1.prototype.findManyProducts = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var response, products, _i, _b, item, product, price;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.client.products.list({
                                expand: ['data.default_price'],
                            })];
                        case 1:
                            response = _c.sent();
                            products = [];
                            for (_i = 0, _b = response.data; _i < _b.length; _i++) {
                                item = _b[_i];
                                product = {
                                    id: item.id,
                                    type: payment_type_1.ProductType.ONE_TIME,
                                    name: item.name,
                                    price: 0,
                                    description: item.description,
                                };
                                price = item.default_price;
                                if (price === null || price === void 0 ? void 0 : price.recurring) {
                                    product.type = payment_type_1.ProductType.SUBSCRIPTION;
                                }
                                product.price = (_a = (price === null || price === void 0 ? void 0 : price.unit_amount) / 100) !== null && _a !== void 0 ? _a : 0;
                                products.push(product);
                            }
                            return [2 /*return*/, products];
                    }
                });
            });
        };
        StripeProvider_1.prototype.onPayment = function (body, sig) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var event_1, data;
                return __generator(this, function (_c) {
                    try {
                        event_1 = this.client.webhooks.constructEvent(body.toString(), sig, this.webhookSecret);
                        data = (_a = event_1.data) === null || _a === void 0 ? void 0 : _a.object;
                        if (event_1.type === 'checkout.session.completed') {
                            this.logger.success("Stripe event \"".concat(event_1.type, "\" received"));
                            return [2 /*return*/, {
                                    userId: data.client_reference_id,
                                    stripeCustomerId: data.customer,
                                    metadata: (_b = data.metadata) !== null && _b !== void 0 ? _b : {},
                                    customerDetails: data.customer_details,
                                }];
                        }
                        this.logger.log("Stripe event \"".concat(event_1.type, "\" is not handled."));
                        return [2 /*return*/, null];
                    }
                    catch (error) {
                        throw new Error("Could not check webhook: ".concat(error.message));
                    }
                    return [2 /*return*/];
                });
            });
        };
        StripeProvider_1.prototype.createPaymentLink = function (_a) {
            var customerId = _a.customerId, productId = _a.productId, urlRedirection = _a.urlRedirection, _b = _a.metadata, metadata = _b === void 0 ? {} : _b;
            return __awaiter(this, void 0, void 0, function () {
                var price, session;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.findOnePriceByIdOrFail(productId)];
                        case 1:
                            price = _c.sent();
                            return [4 /*yield*/, this.client.checkout.sessions.create({
                                    line_items: [
                                        {
                                            price: price.id,
                                            quantity: 1,
                                        },
                                    ],
                                    mode: price.recurring ? 'subscription' : 'payment',
                                    customer: customerId,
                                    ui_mode: 'hosted',
                                    success_url: urlRedirection,
                                    metadata: metadata,
                                })];
                        case 2:
                            session = _c.sent();
                            return [2 /*return*/, session.url];
                    }
                });
            });
        };
        StripeProvider_1.prototype.createCustomer = function (customer) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.customers.create({
                                name: customer.name,
                                email: customer.email,
                            })];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, result.id];
                    }
                });
            });
        };
        StripeProvider_1.prototype.findOnePriceByIdOrFail = function (productId) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var prices, price;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client.prices.list({
                                product: productId,
                                limit: 1,
                            })];
                        case 1:
                            prices = _b.sent();
                            price = (_a = prices.data) === null || _a === void 0 ? void 0 : _a[0];
                            if (!price) {
                                throw new Error("Could not find price for product ".concat(productId));
                            }
                            return [2 /*return*/, price];
                    }
                });
            });
        };
        return StripeProvider_1;
    }());
    __setFunctionName(_classThis, "StripeProvider");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StripeProvider = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StripeProvider = _classThis;
}();
exports.StripeProvider = StripeProvider;
