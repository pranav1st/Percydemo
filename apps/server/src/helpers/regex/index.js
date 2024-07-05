"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regex = void 0;
var Regex;
(function (Regex) {
    function findMatches(content, regexExp) {
        var _a;
        var matches = (_a = content.match(regexExp)) !== null && _a !== void 0 ? _a : [];
        return matches;
    }
    Regex.findMatches = findMatches;
    /**
     * Returns all captured group of each regex matches.
     */
    function findCaptures(content, regexExp) {
        var captures = [];
        var matches = findMatches(content, regexExp);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var regexExpCopy = new RegExp(regexExp);
            var groups = regexExpCopy.exec(match).slice(1);
            captures.push(groups);
        }
        return captures;
    }
    Regex.findCaptures = findCaptures;
})(Regex || (exports.Regex = Regex = {}));
