"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashHelper = void 0;
var Bcrypt = require("bcryptjs");
var saltRounds = 10;
var HashHelper;
(function (HashHelper) {
    function run(content) {
        var salt = Bcrypt.genSaltSync(saltRounds);
        var hash = Bcrypt.hashSync(content, salt);
        return hash;
    }
    HashHelper.run = run;
    function verify(value, valueHash) {
        return Bcrypt.compareSync(value, valueHash);
    }
    HashHelper.verify = verify;
})(HashHelper || (exports.HashHelper = HashHelper = {}));
