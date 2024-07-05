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
exports.MailjetProvider = void 0;
var common_1 = require("@nestjs/common");
var node_mailjet_1 = require("node-mailjet");
var email_type_1 = require("../../email.type");
var MailjetProvider = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MailjetProvider = _classThis = /** @class */ (function () {
        function MailjetProvider_1(configurationService, loggerService, templateService) {
            var _a;
            this.configurationService = configurationService;
            this.loggerService = loggerService;
            this.templateService = templateService;
            this.templateIds = (_a = {},
                _a[email_type_1.EmailType.DEFAULT] = null,
                _a[email_type_1.EmailType.AUTHENTICATION_WELCOME] = null,
                _a[email_type_1.EmailType.AUTHENTICATION_FORGOT_PASSWORD] = null,
                _a[email_type_1.EmailType.AUTHORIZATION_VERIFICATION_CODE] = null,
                _a);
            this.logger = this.loggerService.create({ name: 'MailjetProvider' });
            this.initialise();
        }
        MailjetProvider_1.prototype.initialise = function () {
            var isProduction = this.configurationService.isEnvironmentProduction();
            if (!isProduction) {
                this.logger.warning("Mailjet is disabled in development");
                return;
            }
            try {
                var apiKey = this.configurationService.get('SERVER_EMAIL_MAILJET_API_KEY');
                var secretKey = this.configurationService.get('SERVER_EMAIL_MAILJET_SECRET_KEY');
                if (!apiKey || !secretKey) {
                    this.logger.warning("Set EMAIL_MAILJET_API_KEY and EMAIL_MAILJET_SECRET_KEY to activate Mailjet");
                    return;
                }
                this.client = new node_mailjet_1.default({ apiKey: apiKey, apiSecret: secretKey });
                this.logger.success("Mailjet service active");
            }
            catch (error) {
                this.logger.error("Could not start Mailjet service");
                this.logger.error(error);
            }
        };
        MailjetProvider_1.prototype.send = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var message;
                var _this = this;
                return __generator(this, function (_a) {
                    message = this.buildMessage(options);
                    return [2 /*return*/, this.client
                            .post('send', { version: 'v3.1' })
                            .request({
                            Messages: [
                                __assign({}, message),
                            ],
                        })
                            .then(function (result) {
                            _this.logger.log("Emails sent", result);
                        })
                            .catch(function (error) {
                            _this.logger.error("Could not send emails (".concat(error.statusCode, ")"));
                        })];
                });
            });
        };
        MailjetProvider_1.prototype.buildMessage = function (options) {
            var from = {
                Email: email_type_1.EmailSender.default.email,
                Name: email_type_1.EmailSender.default.name,
            };
            var to = options.to.map(function (item) { return ({ Email: item.email, Name: item.name }); });
            var message = {
                From: from,
                To: to,
                Subject: options.subject,
                HTMLPart: undefined,
                Variables: undefined,
                TemplateLanguage: undefined,
                templateId: undefined,
            };
            var templateId = this.templateIds[options.type];
            if (templateId) {
                message.TemplateLanguage = true;
                message.templateId = templateId;
                message.Variables = options.variables;
            }
            else {
                var content = this.templateService.get(options);
                message.HTMLPart = content;
            }
            return message;
        };
        return MailjetProvider_1;
    }());
    __setFunctionName(_classThis, "MailjetProvider");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MailjetProvider = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MailjetProvider = _classThis;
}();
exports.MailjetProvider = MailjetProvider;
