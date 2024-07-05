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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigurationService = void 0;
var common_1 = require("@nestjs/common");
var DatabaseConfigurationService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DatabaseConfigurationService = _classThis = /** @class */ (function () {
        function DatabaseConfigurationService_1(configurationService) {
            this.configurationService = configurationService;
        }
        DatabaseConfigurationService_1.prototype.getOptions = function () {
            var isProduction = this.configurationService.isEnvironmentProduction();
            if (isProduction) {
                return __assign(__assign(__assign({}, this.getOptionsBase()), this.getOptionsCommon()), this.getOptionsProduction());
            }
            else {
                return __assign(__assign(__assign({}, this.getOptionsBase()), this.getOptionsCommon()), this.getOptionsDevelopment());
            }
        };
        DatabaseConfigurationService_1.prototype.getOptionsMigration = function () {
            var isProduction = this.configurationService.isEnvironmentProduction();
            var options = __assign(__assign({}, this.getOptionsBase()), { migrationsTableName: 'typeorm_migrations', migrations: ['src/core/database/migrations/scripts/*.ts'], entities: ['src/modules/**/*.model.ts'] });
            if (isProduction) {
                return __assign(__assign({}, options), { ssl: {
                        rejectUnauthorized: false,
                    } });
            }
            else {
                return __assign({}, options);
            }
        };
        DatabaseConfigurationService_1.prototype.getOptionsBase = function () {
            var _a;
            var url = (_a = this.configurationService.get('DATABASE_URL')) !== null && _a !== void 0 ? _a : this.configurationService.get('SERVER_DATABASE_URL');
            var username = url.split('//')[1].split(':')[0];
            var password = url.split(':')[2].split('@')[0];
            var host = url.split('@')[1].split(':')[0];
            var port = Number(url.split(':')[3].split('/')[0]);
            var database = url.split('/').slice(-1)[0];
            var isAmazon = host.includes('amazonaws.com');
            var options = {
                type: 'postgres',
                host: host,
                username: username,
                password: password,
                port: port,
                database: database,
            };
            if (isAmazon) {
                options['ssl'] = {
                    rejectUnauthorized: false,
                };
            }
            return options;
        };
        DatabaseConfigurationService_1.prototype.isMigrationActive = function () {
            return this.configurationService.getBoolean('DATABASE_MIGRATION_ACTIVE');
        };
        DatabaseConfigurationService_1.prototype.getOptionsCommon = function () {
            return {
                autoLoadEntities: true,
            };
        };
        DatabaseConfigurationService_1.prototype.getOptionsDevelopment = function () {
            return {
                synchronize: !this.isMigrationActive(),
            };
        };
        DatabaseConfigurationService_1.prototype.getOptionsProduction = function () {
            return {
                synchronize: true,
                ssl: {
                    rejectUnauthorized: false,
                },
            };
        };
        return DatabaseConfigurationService_1;
    }());
    __setFunctionName(_classThis, "DatabaseConfigurationService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DatabaseConfigurationService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DatabaseConfigurationService = _classThis;
}();
exports.DatabaseConfigurationService = DatabaseConfigurationService;
