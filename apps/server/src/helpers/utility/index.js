"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
var uuid_1 = require("uuid");
var Utility;
(function (Utility) {
    function sleep(milliseconds) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, milliseconds);
        });
    }
    Utility.sleep = sleep;
    function getUUID() {
        return (0, uuid_1.v4)();
    }
    Utility.getUUID = getUUID;
    function buildRandomAlphanumericString(length) {
        var alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
            result += alphanumericCharacters.charAt(randomIndex);
        }
        return result;
    }
    Utility.buildRandomAlphanumericString = buildRandomAlphanumericString;
    function isDefined(value) {
        var isEmptyString = typeof value === 'string' && value === '';
        return value !== null && value !== undefined && !isEmptyString;
    }
    Utility.isDefined = isDefined;
    function isNull(value) {
        return !isDefined(value);
    }
    Utility.isNull = isNull;
    function arrayUnique(items) {
        var uniqueSet = new Set(items);
        return Array.from(uniqueSet);
    }
    Utility.arrayUnique = arrayUnique;
    function removeTrailingSlash(content) {
        var REGEX_SLASH = /\/$/g;
        return content.replace(REGEX_SLASH, '');
    }
    Utility.removeTrailingSlash = removeTrailingSlash;
    function isEmpty(value) {
        if (!isDefined(value)) {
            return true;
        }
        var isArray = Array.isArray(value);
        if (isArray) {
            return value.length === 0;
        }
        var isString = typeof value === 'string';
        if (isString) {
            return value.trim() !== '';
        }
        return false;
    }
    Utility.isEmpty = isEmpty;
})(Utility || (exports.Utility = Utility = {}));
