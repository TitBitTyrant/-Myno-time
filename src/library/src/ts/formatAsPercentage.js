"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAsPercentage = void 0;
/**
 * @default
 * @param number ★ The specified number.
 * @since 17th September, 2022
 * @example
```js
        const { formatAsPercentage } = require("@myno_21/time");
    // ECMAScript
    import { formatAsPercentage } from "@myno_21/time";
    const formattedPercentage = formatAsPercentage(31);

    console?.log(formatAsPercentage) // Output --> 31.00%
```
 * @returns
 */
function formatAsPercentage(number) {
    var _a;
    if (!number)
        return new Error(`The value cannot be empty.`);
    if (typeof number !== "number")
        return new RangeError(`Not a valid number!\nThe number you just specified is not a valid number. Please specify a valid number.`);
    return `${(_a = parseFloat(`${number}`)) === null || _a === void 0 ? void 0 : _a.toFixed(2)}%`;
}
exports.formatAsPercentage = formatAsPercentage;
