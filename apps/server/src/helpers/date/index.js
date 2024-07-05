"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = void 0;
var DateHelper;
(function (DateHelper) {
    function getNow() {
        return new Date();
    }
    DateHelper.getNow = getNow;
    function addMinutes(date, minutes) {
        var dateUpdated = new Date(date.getTime());
        var seconds = minutes * 60;
        var milliseconds = seconds * 1000;
        dateUpdated.setTime(dateUpdated.getTime() + milliseconds);
        return dateUpdated;
    }
    DateHelper.addMinutes = addMinutes;
    function isBefore(dateBefore, dateAfter) {
        return dateBefore < dateAfter;
    }
    DateHelper.isBefore = isBefore;
})(DateHelper || (exports.DateHelper = DateHelper = {}));
