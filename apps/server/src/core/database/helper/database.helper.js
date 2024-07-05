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
exports.DatabaseHelper = void 0;
var common_1 = require("@nestjs/common");
var utility_1 = require("@server/helpers/utility");
var DatabaseHelper = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DatabaseHelper = _classThis = /** @class */ (function () {
        function DatabaseHelper_1(exception) {
            this.exception = exception;
        }
        DatabaseHelper_1.prototype.applyQueryOptions = function (repository, queryOptions) {
            if (queryOptions === void 0) { queryOptions = {}; }
            var query = repository.createQueryBuilder('entity');
            this.applyIncludes(query, queryOptions);
            this.applyFilters(query, queryOptions);
            this.applyOrders(query, queryOptions);
            this.applyPagination(query, queryOptions);
            return query;
        };
        DatabaseHelper_1.prototype.notFoundByQuery = function (where) {
            var keyValues = Object.entries(where)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "\"".concat(key, "\"=\"").concat(value, "\"");
            })
                .join(', ');
            return this.exception.throw({
                status: common_1.HttpStatus.NOT_FOUND,
                code: 101,
                publicMessage: 'Resource was not found',
                privateMessage: "Resource with ".concat(keyValues, " was not found."),
            });
        };
        DatabaseHelper_1.prototype.invalidQueryWhere = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            var keysString = keys.map(function (key) { return "\"".concat(key, "\""); }).join(', ');
            return this.exception.throw({
                status: common_1.HttpStatus.BAD_REQUEST,
                code: 100,
                publicMessage: 'Resource was not found',
                privateMessage: "Resource where conditions for keys ".concat(keysString, " are invalid."),
            });
        };
        /* --------------------------------- PRIVATE -------------------------------- */
        DatabaseHelper_1.prototype.applyPagination = function (query, queryOptions) {
            var _a, _b;
            if (!utility_1.Utility.isDefined(queryOptions.pagination)) {
                return;
            }
            var countItems = (_a = queryOptions.pagination.countItems) !== null && _a !== void 0 ? _a : 50;
            var page = (_b = queryOptions.pagination.page) !== null && _b !== void 0 ? _b : 1;
            query.take(countItems);
            query.skip((page - 1) * countItems);
        };
        DatabaseHelper_1.prototype.applyIncludes = function (query, queryOptions) {
            var _a;
            var includes = ((_a = queryOptions.includes) !== null && _a !== void 0 ? _a : []);
            var store = {};
            includes.forEach(function (relation, relationIndex) {
                var keys = relation.split('.');
                var keysParent = [];
                keys.forEach(function (key, keyIndex) {
                    var keyUnique = "".concat(key, "_").concat(relationIndex, "_").concat(keyIndex);
                    var isRoot = keyIndex === 0;
                    if (isRoot) {
                        var canJoin = utility_1.Utility.isNull(store[key]);
                        if (canJoin) {
                            query.leftJoinAndSelect("entity.".concat(key), "".concat(keyUnique));
                            store[key] = keyUnique;
                        }
                    }
                    else {
                        var keyParent = keysParent.join('.');
                        var keyParentUnique = store[keyParent];
                        query.leftJoinAndSelect("".concat(keyParentUnique, ".").concat(key), "".concat(keyUnique));
                        store["".concat(keyParent, ".").concat(key)] = keyUnique;
                    }
                    keysParent.push(key);
                });
            });
        };
        DatabaseHelper_1.prototype.applyFilters = function (query, queryOptions) {
            var _a;
            var filters = (_a = queryOptions.filters) !== null && _a !== void 0 ? _a : {};
            var conditions = [];
            var values = {};
            for (var _i = 0, _b = Object.entries(filters); _i < _b.length; _i++) {
                var _c = _b[_i], key = _c[0], value = _c[1];
                var isArray = Array.isArray(value);
                if (isArray) {
                    conditions.push("entity.".concat(key, " IN (:...").concat(key, ")"));
                    values[key] = value;
                }
                else if (typeof value === 'object') {
                    var filters_2 = this.buildQueryOptionsFilters(key, value);
                    for (var _d = 0, filters_1 = filters_2; _d < filters_1.length; _d++) {
                        var filter = filters_1[_d];
                        conditions.push(filter.condition);
                        values[filter.key] = filter.value;
                    }
                }
                else {
                    conditions.push("entity.".concat(key, " = :").concat(key));
                    values[key] = value;
                }
            }
            query.where(conditions.join(' AND '), values);
        };
        DatabaseHelper_1.prototype.applyOrders = function (query, queryOptions) {
            var _a;
            var orders = (_a = queryOptions.orders) !== null && _a !== void 0 ? _a : {};
            var isFirst = true;
            for (var _i = 0, _b = Object.entries(orders); _i < _b.length; _i++) {
                var _c = _b[_i], key = _c[0], value = _c[1];
                if (!isFirst) {
                    query.orderBy("entity.".concat(key), value);
                    isFirst = false;
                }
                query.addOrderBy("entity.".concat(key), value);
            }
        };
        DatabaseHelper_1.prototype.buildQueryOptionsFilters = function (key, filter) {
            var conditions = [];
            if (filter === null) {
                conditions.push({
                    condition: "entity.".concat(key, " IS NULL"),
                    key: "".concat(key, "EQ"),
                    value: null,
                });
                return conditions;
            }
            if (utility_1.Utility.isDefined(filter.eq)) {
                conditions.push({
                    condition: "entity.".concat(key, " = :").concat(key, "EQ"),
                    key: "".concat(key, "EQ"),
                    value: filter.eq,
                });
            }
            if (utility_1.Utility.isDefined(filter.neq)) {
                conditions.push({
                    condition: "entity.".concat(key, " != :").concat(key, "NEQ"),
                    key: "".concat(key, "NEQ"),
                    value: filter.neq,
                });
            }
            if (utility_1.Utility.isDefined(filter.gt)) {
                conditions.push({
                    condition: "entity.".concat(key, " > :").concat(key, "GT"),
                    key: "".concat(key, "GT"),
                    value: filter.gt,
                });
            }
            if (utility_1.Utility.isDefined(filter.gte)) {
                conditions.push({
                    condition: "entity.".concat(key, " >= :").concat(key, "GTE"),
                    key: "".concat(key, "GTE"),
                    value: filter.gte,
                });
            }
            if (utility_1.Utility.isDefined(filter.lt)) {
                conditions.push({
                    condition: "entity.".concat(key, " < :").concat(key, "LT"),
                    key: "".concat(key, "LT"),
                    value: filter.lt,
                });
            }
            if (utility_1.Utility.isDefined(filter.lte)) {
                conditions.push({
                    condition: "entity.".concat(key, " <= :").concat(key, "LTE"),
                    key: "".concat(key, "LTE"),
                    value: filter.lte,
                });
            }
            if (utility_1.Utility.isDefined(filter.in)) {
                conditions.push({
                    condition: "entity.".concat(key, " IN (:...").concat(key, "IN)"),
                    key: "".concat(key, "IN"),
                    value: filter.in,
                });
            }
            if (utility_1.Utility.isDefined(filter.nin)) {
                conditions.push({
                    condition: "entity.".concat(key, " NOT IN (:...").concat(key, "NIN)"),
                    key: "".concat(key, "NIN"),
                    value: filter.nin,
                });
            }
            if (utility_1.Utility.isDefined(filter.like)) {
                conditions.push({
                    condition: "entity.".concat(key, " LIKE :").concat(key, "LIKE"),
                    key: "".concat(key, "LIKE"),
                    value: filter.like,
                });
            }
            if (utility_1.Utility.isDefined(filter.ilike)) {
                conditions.push({
                    condition: "entity.".concat(key, " ILIKE :").concat(key, "ILIKE"),
                    key: "".concat(key, "ILIKE"),
                    value: filter.ilike,
                });
            }
            return conditions;
        };
        return DatabaseHelper_1;
    }());
    __setFunctionName(_classThis, "DatabaseHelper");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DatabaseHelper = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DatabaseHelper = _classThis;
}();
exports.DatabaseHelper = DatabaseHelper;
