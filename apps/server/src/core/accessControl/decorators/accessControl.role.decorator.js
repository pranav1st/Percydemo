"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlRoleDecorator = void 0;
var common_1 = require("@nestjs/common");
var AccessControlRoleDecorator;
(function (AccessControlRoleDecorator) {
    var KEY = 'access-control.roles';
    AccessControlRoleDecorator.set = function () {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        return (0, common_1.SetMetadata)(KEY, names);
    };
    function get(context, reflector) {
        var _a;
        return ((_a = reflector.getAllAndOverride(KEY, [
            context.getHandler(),
            context.getClass(),
        ])) !== null && _a !== void 0 ? _a : []);
    }
    AccessControlRoleDecorator.get = get;
})(AccessControlRoleDecorator || (exports.AccessControlRoleDecorator = AccessControlRoleDecorator = {}));
