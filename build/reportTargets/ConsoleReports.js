"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReports = void 0;
var ConsoleReports = /** @class */ (function () {
    function ConsoleReports() {
    }
    //   constructor(public outputTarget: void) {}
    ConsoleReports.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleReports;
}());
exports.ConsoleReports = ConsoleReports;
