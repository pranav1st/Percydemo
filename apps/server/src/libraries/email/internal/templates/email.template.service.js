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
exports.EmailTemplateService = void 0;
var common_1 = require("@nestjs/common");
var file_1 = require("@server/helpers/file");
var email_type_1 = require("../email.type");
var components_1 = require("./components");
var EmailTemplateService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var EmailTemplateService = _classThis = /** @class */ (function () {
        function EmailTemplateService_1() {
            var _a;
            this.pathTemplates = "".concat(file_1.FileHelper.getRoot(), "/src/libraries/email/internal/templates");
            this.mapping = (_a = {},
                _a[email_type_1.EmailType.AUTHORIZATION_VERIFICATION_CODE] = 'authorization-verification-code',
                _a[email_type_1.EmailType.AUTHENTICATION_WELCOME] = 'authentication-welcome',
                _a[email_type_1.EmailType.AUTHENTICATION_FORGOT_PASSWORD] = 'authentication-forgot-password',
                _a[email_type_1.EmailType.DEFAULT] = 'default',
                _a);
        }
        EmailTemplateService_1.prototype.get = function (options) {
            var _a;
            var values = (_a = options.variables) !== null && _a !== void 0 ? _a : { content: options.content };
            var pathBase = this.getPathBase();
            var pathCSS = this.getPathCSS();
            var pathTemplate = this.getPathTemplate(options.type);
            var contentBase = file_1.FileHelper.findFileContent(pathBase);
            var contentCSS = file_1.FileHelper.findFileContent(pathCSS);
            var contentTemplate = file_1.FileHelper.findFileContent(pathTemplate);
            var content = this.buildContent(contentTemplate, values);
            content = this.buildContent(contentBase, { style: contentCSS, content: content });
            content = this.buildComponents(content);
            return content;
        };
        EmailTemplateService_1.prototype.getPathTemplate = function (type) {
            var _a;
            var name = (_a = this.mapping[type]) !== null && _a !== void 0 ? _a : this.mapping[email_type_1.EmailType.DEFAULT];
            var path = "".concat(this.pathTemplates, "/").concat(name, ".template.html");
            return path;
        };
        EmailTemplateService_1.prototype.getPathBase = function () {
            var path = "".concat(this.pathTemplates, "/base.html");
            return path;
        };
        EmailTemplateService_1.prototype.getPathCSS = function () {
            var path = "".concat(this.pathTemplates, "/style.css");
            return path;
        };
        EmailTemplateService_1.prototype.buildContent = function (content, values) {
            var contentBuilt = content;
            for (var _i = 0, _a = Object.entries(values); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                var token = new RegExp("{{ ".concat(key, " }}"), 'g');
                contentBuilt = contentBuilt.replace(token, value);
            }
            return contentBuilt;
        };
        EmailTemplateService_1.prototype.buildComponents = function (content) {
            var contentUpdated = content;
            for (var _i = 0, _a = Object.entries(components_1.Components); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                var tag = new RegExp("".concat(key), 'g');
                contentUpdated = contentUpdated.replace(tag, value);
            }
            return contentUpdated;
        };
        return EmailTemplateService_1;
    }());
    __setFunctionName(_classThis, "EmailTemplateService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EmailTemplateService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EmailTemplateService = _classThis;
}();
exports.EmailTemplateService = EmailTemplateService;
