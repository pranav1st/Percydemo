"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadProvider = void 0;
var date_1 = require("@server/helpers/date");
var UploadProvider = /** @class */ (function () {
    function UploadProvider() {
    }
    UploadProvider.prototype.initialise = function () {
        return;
    };
    UploadProvider.prototype.ensureFilename = function (filenameBefore) {
        var filenameClean = filenameBefore.replace(/[^\w\.]/gi, '');
        var timestamp = date_1.DateHelper.getNow().getTime();
        return "".concat(timestamp, "-").concat(filenameClean);
    };
    return UploadProvider;
}());
exports.UploadProvider = UploadProvider;
