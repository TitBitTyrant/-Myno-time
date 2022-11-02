"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumbers = void 0;
/**
 * @default
 * @function formatNumbers Converts a number into a human readable format.
 * @param options The specified options.
 * @usage formatNumbers
 * @sampleExample
 ```
// CommonJS
const { formatNumbers } = require("@myno_21/time");
// ECMAScript
import { formatNumbers } from "@myno_21/time";
const result = formatNumbers(2234);

print(result)
// Result --> 2.2K
function print(query) {
    console.log(query)
}
 ```
 * @param number The specified number.
 * @param options The external options
 * @returns
 */
function formatNumbers(number, options) {
    if (options === null || options === void 0 ? void 0 : options.verboose) {
        if (number > 1000) {
            const suffixes = ["", "Thousand", "Million", "Billion", "Trillion"];
            const suffixNumbers = Math.floor(("" + number).length / 3);
            const shortNumberValue = "";
            const normalisedValue = number / (Math === null || Math === void 0 ? void 0 : Math.pow(1000, suffixNumbers));
            let precious = 2;
            if (normalisedValue < 1)
                precious = 1;
            if (options.spaceInBetween) {
                return `${normalisedValue.toPrecision(precious)} ${suffixes[suffixNumbers]}`;
            }
            else {
                return `${normalisedValue.toPrecision(precious)}${suffixes[suffixNumbers]}`;
            }
        }
        else {
            return String(number);
        }
    }
    else {
        if (number > 1000) {
            const suffixes = ["", "K", "M", "B", "T"];
            const suffixNumbers = Math.floor(("" + number).length / 3);
            const shortNumberValue = "";
            const normalisedValue = number / (Math === null || Math === void 0 ? void 0 : Math.pow(1000, suffixNumbers));
            let precious = 2;
            if (normalisedValue < 1)
                precious = 1;
            if (options === null || options === void 0 ? void 0 : options.spaceInBetween) {
                return `${normalisedValue.toPrecision(precious)} ${suffixes[suffixNumbers]}`;
            }
            else {
                return `${normalisedValue.toPrecision(precious)}${suffixes[suffixNumbers]}`;
            }
        }
        else
            return String(number);
    }
}
exports.formatNumbers = formatNumbers;
