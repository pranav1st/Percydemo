"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.UploadProviderLocal = void 0;
var common_1 = require("@nestjs/common");
var serve_static_1 = require("@nestjs/serve-static");
var file_1 = require("@server/helpers/file");
var upload_provider_1 = require("@server/libraries/upload/upload.provider");
var path_1 = require("path");
var UploadProviderLocal = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = upload_provider_1.UploadProvider;
    var UploadProviderLocal = _classThis = /** @class */ (function (_super) {
        __extends(UploadProviderLocal_1, _super);
        function UploadProviderLocal_1(loggerService, configurationService) {
            var _this = _super.call(this) || this;
            _this.loggerService = loggerService;
            _this.configurationService = configurationService;
            _this.pathPublic = ".".concat(UploadProviderLocal.path, "/public");
            _this.pathPrivate = ".".concat(UploadProviderLocal.path, "/private");
            _this.logger = _this.loggerService.create({ name: 'UploadProviderLocal' });
            return _this;
        }
        UploadProviderLocal_1.setup = function () {
            return serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(file_1.FileHelper.getRoot(), ".".concat(this.path)),
                serveRoot: this.path,
            });
        };
        UploadProviderLocal_1.prototype.initialise = function () {
            try {
                file_1.FileHelper.writeFolder(this.pathPublic);
                this.staticServerUrl = "".concat(this.configurationService.getBaseUrl());
                this.logger.success("Upload Local is active");
            }
            catch (error) {
                this.logger.error("Upload Local failed to start: ".concat(error.message));
            }
            return;
        };
        UploadProviderLocal_1.prototype.uploadPublic = function (_a) {
            var file = _a.file;
            return __awaiter(this, void 0, void 0, function () {
                var content, filename, path, url;
                return __generator(this, function (_b) {
                    content = file.buffer;
                    filename = this.ensureFilename(file.originalname);
                    path = file_1.FileHelper.joinPaths(this.pathPublic, filename);
                    file_1.FileHelper.writeFile(path, content);
                    url = "".concat(this.staticServerUrl, "/").concat(path);
                    return [2 /*return*/, { url: url }];
                });
            });
        };
        UploadProviderLocal_1.prototype.uploadPrivate = function (_a) {
            var file = _a.file;
            return __awaiter(this, void 0, void 0, function () {
                var content, filename, path, url;
                return __generator(this, function (_b) {
                    content = file.buffer;
                    filename = this.ensureFilename(file.originalname);
                    path = file_1.FileHelper.joinPaths(this.pathPrivate, filename);
                    file_1.FileHelper.writeFile(path, content);
                    url = "".concat(this.staticServerUrl, "/").concat(path);
                    return [2 /*return*/, { url: url }];
                });
            });
        };
        UploadProviderLocal_1.prototype.fromPrivateToPublicUrl = function (_a) {
            var url = _a.url;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, { url: url }];
                });
            });
        };
        return UploadProviderLocal_1;
    }(_classSuper));
    __setFunctionName(_classThis, "UploadProviderLocal");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UploadProviderLocal = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.path = '/api-static';
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UploadProviderLocal = _classThis;
}();
exports.UploadProviderLocal = UploadProviderLocal;
