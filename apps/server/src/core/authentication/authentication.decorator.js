"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
var common_1 = require("@nestjs/common");
require("reflect-metadata");
var Authentication;
(function (Authentication) {
    var KEY_PUBLIC = 'authentication.public';
    var KEY_USER_NOT_VERIFIED_ALLOWED = 'authentication.user-not-verified.allowed';
    var KEY_USER_VISITOR_ALLOWED = 'authentication.user-visitor.allowed';
    Authentication.AllowUserNotVerified = function (isAllowed) {
        if (isAllowed === void 0) { isAllowed = true; }
        return (0, common_1.SetMetadata)(KEY_USER_NOT_VERIFIED_ALLOWED, isAllowed);
    };
    function isUserNotVerifiedAllowed(context, reflector) {
        var _a;
        var DEFAULT_VALUE = false;
        return ((_a = getValue(context, reflector, KEY_USER_NOT_VERIFIED_ALLOWED)) !== null && _a !== void 0 ? _a : DEFAULT_VALUE);
    }
    Authentication.isUserNotVerifiedAllowed = isUserNotVerifiedAllowed;
    Authentication.Public = function () { return (0, common_1.SetMetadata)(KEY_PUBLIC, true); };
    function isPublic(context, reflector) {
        return getValue(context, reflector, KEY_PUBLIC);
    }
    Authentication.isPublic = isPublic;
    Authentication.AllowVisitor = function (isAllowed) {
        if (isAllowed === void 0) { isAllowed = true; }
        return (0, common_1.SetMetadata)(KEY_USER_VISITOR_ALLOWED, isAllowed);
    };
    function isVisitorAllowed(context, reflector) {
        var _a;
        var DEFAULT_VALUE = true;
        return ((_a = getValue(context, reflector, KEY_USER_VISITOR_ALLOWED)) !== null && _a !== void 0 ? _a : DEFAULT_VALUE);
    }
    Authentication.isVisitorAllowed = isVisitorAllowed;
    function getValue(context, reflector, key) {
        return reflector.getAllAndOverride(key, [
            context.getHandler(),
            context.getClass(),
        ]);
    }
})(Authentication || (exports.Authentication = Authentication = {}));
