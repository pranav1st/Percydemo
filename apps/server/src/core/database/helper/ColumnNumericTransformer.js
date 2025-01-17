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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnNumeric = exports.ColumnNumericTransformer = void 0;
var typeorm_1 = require("typeorm");
var ColumnNumericTransformer = /** @class */ (function () {
    function ColumnNumericTransformer() {
    }
    ColumnNumericTransformer.prototype.to = function (data) {
        return data;
    };
    ColumnNumericTransformer.prototype.from = function (data) {
        return parseFloat(data);
    };
    return ColumnNumericTransformer;
}());
exports.ColumnNumericTransformer = ColumnNumericTransformer;
function ColumnNumeric(options) {
    return function (target, propertyKey) {
        (0, typeorm_1.Column)(__assign(__assign({}, options), { type: 'numeric', transformer: new ColumnNumericTransformer() }))(target, propertyKey);
    };
}
exports.ColumnNumeric = ColumnNumeric;
