"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationApplicationEvent = void 0;
var AuthenticationApplicationEvent;
(function (AuthenticationApplicationEvent) {
    var UserPasswordResetRequested;
    (function (UserPasswordResetRequested) {
        UserPasswordResetRequested.key = 'authentication.application.user-password-reset-requested';
    })(UserPasswordResetRequested = AuthenticationApplicationEvent.UserPasswordResetRequested || (AuthenticationApplicationEvent.UserPasswordResetRequested = {}));
    var UserRegistered;
    (function (UserRegistered) {
        UserRegistered.key = 'authentication.application.user-registered';
    })(UserRegistered = AuthenticationApplicationEvent.UserRegistered || (AuthenticationApplicationEvent.UserRegistered = {}));
})(AuthenticationApplicationEvent || (exports.AuthenticationApplicationEvent = AuthenticationApplicationEvent = {}));
