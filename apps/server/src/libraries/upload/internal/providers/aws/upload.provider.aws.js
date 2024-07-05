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
exports.UploadProviderAws = void 0;
var client_s3_1 = require("@aws-sdk/client-s3");
var s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
var common_1 = require("@nestjs/common");
var date_1 = require("@server/helpers/date");
var utility_1 = require("@server/helpers/utility");
var upload_provider_1 = require("@server/libraries/upload/upload.provider");
var ONE_HOUR_IN_SECONDS = 60 * 60;
var UploadProviderAws = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = upload_provider_1.UploadProvider;
    var UploadProviderAws = _classThis = /** @class */ (function (_super) {
        __extends(UploadProviderAws_1, _super);
        function UploadProviderAws_1(loggerService, configurationService, httpService) {
            var _this = _super.call(this) || this;
            _this.loggerService = loggerService;
            _this.configurationService = configurationService;
            _this.httpService = httpService;
            _this.logger = _this.loggerService.create({ name: 'UploadProviderAws' });
            return _this;
        }
        UploadProviderAws_1.prototype.initialise = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error_1, accessKey, secretKey, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.region = this.configurationService.get("SERVER_UPLOAD_AWS_REGION", 'us-west-1');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            this.marblismApiKey = this.configurationService.get("SERVER_UPLOAD_MARBLISM_API_KEY");
                            if (!utility_1.Utility.isDefined(this.marblismApiKey)) return [3 /*break*/, 3];
                            if (UploadProviderAws.isMarblismInitialised) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.initializeWithMarblism()];
                        case 2:
                            _a.sent();
                            this.logger.success("AWS library (Marblism) active in region ".concat(this.region));
                            UploadProviderAws.isMarblismInitialised = true;
                            return [2 /*return*/];
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            this.logger.warning("AWS library (Marblism) failed to start");
                            return [3 /*break*/, 5];
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            accessKey = this.configurationService.get("SERVER_UPLOAD_AWS_ACCESS_KEY");
                            secretKey = this.configurationService.get("SERVER_UPLOAD_AWS_SECRET_KEY");
                            if (!accessKey && !secretKey) {
                                throw new Error('Set SERVER_UPLOAD_AWS_ACCESS_KEY && SERVER_UPLOAD_AWS_SECRET_KEY in your .env to activate');
                            }
                            if (!accessKey) {
                                throw new Error('Set SERVER_UPLOAD_AWS_ACCESS_KEY in your .env to activate');
                            }
                            if (!secretKey) {
                                throw new Error('Set SERVER_UPLOAD_AWS_SECRET_KEY in your .env to activate');
                            }
                            this.bucketNamePublic = this.configurationService.get("SERVER_UPLOAD_AWS_BUCKET_PUBLIC_NAME");
                            if (!this.bucketNamePublic) {
                                this.logger.warning("Set SERVER_UPLOAD_AWS_BUCKET_PUBLIC_NAME in your .env to activate a public bucket with infinite urls");
                            }
                            this.bucketNamePrivate = this.configurationService.get("SERVER_UPLOAD_AWS_BUCKET_PRIVATE_NAME");
                            if (!this.bucketNamePrivate) {
                                this.logger.warning("Set SERVER_UPLOAD_AWS_BUCKET_PRIVATE_NAME in your .env to activate a private bucket with signed urls");
                            }
                            this.client = new client_s3_1.S3Client({
                                region: this.region,
                                credentials: {
                                    accessKeyId: accessKey,
                                    secretAccessKey: secretKey,
                                },
                            });
                            return [4 /*yield*/, this.check()];
                        case 6:
                            _a.sent();
                            this.logger.success("AWS library active in region ".concat(this.region));
                            return [3 /*break*/, 8];
                        case 7:
                            error_2 = _a.sent();
                            this.logger.warning("AWS library failed to start");
                            throw new Error(error_2);
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        UploadProviderAws_1.prototype.initializeWithMarblism = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dashboardBaseUrl, url, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dashboardBaseUrl = this.configurationService.getDashboardBaseUrl();
                            url = "".concat(dashboardBaseUrl, "/v1/addons/upload/create-credentials");
                            this.httpService.setApiKey(this.marblismApiKey);
                            return [4 /*yield*/, this.httpService.post(url, {})];
                        case 1:
                            response = _a.sent();
                            this.bucketNamePrivate = response.bucketNamePrivate;
                            this.bucketNamePublic = "".concat(response.bucketNamePublic);
                            this.credentials = {
                                accessKeyId: response.accessKeyId,
                                secretAccessKey: response.secretAccessKey,
                                sessionToken: response.sessionToken,
                                expiration: new Date(response.expiration),
                            };
                            this.bucketKey = response.bucketKey;
                            this.client = new client_s3_1.S3Client({
                                region: this.region,
                                credentials: {
                                    accessKeyId: this.credentials.accessKeyId,
                                    secretAccessKey: this.credentials.secretAccessKey,
                                    sessionToken: this.credentials.sessionToken,
                                },
                            });
                            return [4 /*yield*/, this.check()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UploadProviderAws_1.prototype.ensureCredentials = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dashboardBaseUrl, url, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!UploadProviderAws.isMarblismInitialised) {
                                return [2 /*return*/];
                            }
                            if (this.areCredentialsValid()) {
                                return [2 /*return*/];
                            }
                            dashboardBaseUrl = this.configurationService.getDashboardBaseUrl();
                            url = "".concat(dashboardBaseUrl, "/v1/addons/upload/refresh-credentials");
                            this.httpService.setApiKey(this.marblismApiKey);
                            return [4 /*yield*/, this.httpService.post(url, {})];
                        case 1:
                            response = _a.sent();
                            this.credentials = {
                                accessKeyId: response.accessKeyId,
                                secretAccessKey: response.secretAccessKey,
                                sessionToken: response.sessionToken,
                                expiration: new Date(response.expiration),
                            };
                            this.client = new client_s3_1.S3Client({
                                region: this.region,
                                credentials: {
                                    accessKeyId: this.credentials.accessKeyId,
                                    secretAccessKey: this.credentials.secretAccessKey,
                                    sessionToken: this.credentials.sessionToken,
                                },
                            });
                            return [4 /*yield*/, this.check()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UploadProviderAws_1.prototype.areCredentialsValid = function () {
            var isTokenDefined = utility_1.Utility.isDefined(this.credentials);
            var isTokenValid = isTokenDefined &&
                date_1.DateHelper.isBefore(date_1.DateHelper.getNow(), this.credentials.expiration);
            return isTokenValid;
        };
        UploadProviderAws_1.prototype.check = function () {
            return __awaiter(this, void 0, void 0, function () {
                var buckets, bucket, bucket;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.listBuckets()];
                        case 1:
                            buckets = _a.sent();
                            if (this.bucketNamePrivate) {
                                this.logger.log("Checking bucket \"".concat(this.bucketNamePrivate, "\"..."));
                                bucket = buckets.find(function (bucket) { return bucket.name === _this.bucketNamePrivate; });
                                if (bucket) {
                                    this.logger.success("Bucket \"".concat(this.bucketNamePrivate, "\" is active"));
                                }
                                else {
                                    throw new Error("Bucket \"".concat(this.bucketNamePrivate, "\" was not found"));
                                }
                            }
                            if (this.bucketNamePublic) {
                                this.logger.log("Checking bucket \"".concat(this.bucketNamePublic, "\"..."));
                                bucket = buckets.find(function (bucket) { return bucket.name === _this.bucketNamePublic; });
                                if (bucket) {
                                    this.logger.success("Bucket \"".concat(this.bucketNamePublic, "\" is active"));
                                }
                                else {
                                    throw new Error("Bucket \"".concat(this.bucketNamePublic, "\" was not found"));
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        UploadProviderAws_1.prototype.uploadPublic = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var file, key, command, url, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureCredentials()];
                        case 1:
                            _a.sent();
                            file = options.file;
                            key = this.ensureFilename(file.originalname);
                            key = this.ensureKey(key);
                            command = new client_s3_1.PutObjectCommand({
                                Bucket: "".concat(this.bucketNamePublic),
                                Key: key,
                                Body: file.buffer,
                                ContentType: file.mimetype,
                            });
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.client.send(command)];
                        case 3:
                            _a.sent();
                            this.logger.success("File ".concat(file.originalname, " saved (public)"));
                            url = "".concat(this.getBaseUrlPublic(), "/").concat(key);
                            return [2 /*return*/, { url: url }];
                        case 4:
                            error_3 = _a.sent();
                            this.logger.error("".concat(error_3));
                            throw new Error("Could not upload public file with key \"".concat(key, "\""));
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        UploadProviderAws_1.prototype.uploadPrivate = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var file, key, command, url, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureCredentials()];
                        case 1:
                            _a.sent();
                            file = options.file;
                            key = this.ensureFilename(file.originalname);
                            command = new client_s3_1.PutObjectCommand({
                                Bucket: "".concat(this.bucketNamePrivate),
                                Key: this.ensureKey(key),
                                Body: file.buffer,
                                ContentType: file.mimetype,
                            });
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.client.send(command)];
                        case 3:
                            _a.sent();
                            this.logger.success("File ".concat(file.originalname, " saved (private)"));
                            url = "".concat(this.getBaseUrlPrivate(), "/").concat(key);
                            return [2 /*return*/, { url: url }];
                        case 4:
                            error_4 = _a.sent();
                            this.logger.error("".concat(error_4));
                            throw new Error("Could not upload private file with key \"".concat(key, "\""));
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        UploadProviderAws_1.prototype.fromPrivateToPublicUrl = function (_a) {
            var url = _a.url, _b = _a.expiresInSeconds, expiresInSeconds = _b === void 0 ? ONE_HOUR_IN_SECONDS : _b;
            return __awaiter(this, void 0, void 0, function () {
                var key, params, command, urlPublic;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!this.isUrlPrivate(url)) {
                                throw new Error("".concat(url, " must be a private url"));
                            }
                            return [4 /*yield*/, this.ensureCredentials()];
                        case 1:
                            _c.sent();
                            key = this.extractKeyFromUrlPrivate(url);
                            params = {
                                Bucket: "".concat(this.bucketNamePrivate),
                                Key: this.ensureKey(key),
                            };
                            command = new client_s3_1.GetObjectCommand(params);
                            return [4 /*yield*/, (0, s3_request_presigner_1.getSignedUrl)(this.client, command, {
                                    expiresIn: expiresInSeconds,
                                })];
                        case 2:
                            urlPublic = _c.sent();
                            return [2 /*return*/, { url: urlPublic }];
                    }
                });
            });
        };
        /* -------------------------------------------------------------------------- */
        /*                                   PRIVATE                                  */
        /* -------------------------------------------------------------------------- */
        UploadProviderAws_1.prototype.listBuckets = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, buckets;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.send(new client_s3_1.ListBucketsCommand({}))];
                        case 1:
                            result = _a.sent();
                            buckets = result.Buckets.map(function (item) { return ({
                                name: item.Name,
                                dateCreation: item.CreationDate,
                            }); });
                            return [2 /*return*/, buckets];
                    }
                });
            });
        };
        UploadProviderAws_1.prototype.getBaseUrlPrivate = function () {
            return "https://".concat(this.bucketNamePrivate, ".s3.").concat(this.region, ".amazonaws.com");
        };
        UploadProviderAws_1.prototype.getBaseUrlPublic = function () {
            return "https://".concat(this.bucketNamePublic, ".s3.").concat(this.region, ".amazonaws.com");
        };
        UploadProviderAws_1.prototype.ensureKey = function (key) {
            var keyClean = key;
            var isPrefixedSlash = keyClean.startsWith('/');
            if (isPrefixedSlash) {
                keyClean = keyClean.slice(1);
            }
            var isPrefixedBucketKey = keyClean.startsWith(this.bucketKey);
            if (!isPrefixedBucketKey) {
                keyClean = "".concat(this.bucketKey, "/").concat(keyClean);
            }
            return keyClean;
        };
        UploadProviderAws_1.prototype.isUrlPrivate = function (url) {
            var baseUrlPrivate = this.getBaseUrlPrivate();
            var isPrivate = url.startsWith(baseUrlPrivate);
            return isPrivate;
        };
        UploadProviderAws_1.prototype.extractKeyFromUrlPrivate = function (url) {
            var baseUrlPrivate = this.getBaseUrlPrivate();
            return url.replace(baseUrlPrivate, '');
        };
        return UploadProviderAws_1;
    }(_classSuper));
    __setFunctionName(_classThis, "UploadProviderAws");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UploadProviderAws = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.isMarblismInitialised = false;
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UploadProviderAws = _classThis;
}();
exports.UploadProviderAws = UploadProviderAws;
