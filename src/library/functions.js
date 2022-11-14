"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = void 0;
/**
 * @default
 * @Checks for a date, whether it's a valid date or not.
 * @param {Date | String} date ★ The specified Date.
 * @SampleExample ```
   // CommonJS
const { isValidDate } = require("@myno_21/time");
// ECMAScript
import { isValidDate } from "@myno_21/time";

console?.log(isValidDate("2021-01-24")) //--> true
console?.log(isValidDate("2020-02-24")) //--> true
console?.log(isValidDate("2030-02-90")) //--> false
 * ```
 * @returns
 */
function isValidDate(date) {
    var _a;
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if ((date === null || date === void 0 ? void 0 : date.match(regex)) === null)
        return false;
    let newDate = new Date(`${date}`);
    const timeStamp = newDate === null || newDate === void 0 ? void 0 : newDate.getTime();
    if (typeof timeStamp !== "number" || (Number === null || Number === void 0 ? void 0 : Number.isNaN(timeStamp)))
        return false;
    else
        return (_a = newDate === null || newDate === void 0 ? void 0 : newDate.toISOString()) === null || _a === void 0 ? void 0 : _a.startsWith(`${date}`);
}
exports.isValidDate = isValidDate;
