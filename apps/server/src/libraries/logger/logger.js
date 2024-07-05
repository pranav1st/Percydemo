"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger(options) {
        this.instance = options.instance;
        this.name = options.name;
    }
    Logger.prototype.log = function (message, data) {
        this.instance.info(this.buildMessage(message), { data: data });
    };
    Logger.prototype.warning = function (message) {
        this.instance.warn(this.buildMessage("[warning] ".concat(message)));
    };
    Logger.prototype.success = function (message) {
        this.instance.info(this.buildMessage("[SUCCESS] ".concat(message)));
    };
    Logger.prototype.error = function (error) {
        var isString = typeof error === 'string';
        var message = isString ? error : error.message;
        this.instance.error(this.buildMessage(message));
    };
    Logger.prototype.buildMessage = function (message) {
        if (this.name) {
            return "".concat(message, " (").concat(this.name, ")");
        }
        return message;
    };
    return Logger;
}());
exports.Logger = Logger;
