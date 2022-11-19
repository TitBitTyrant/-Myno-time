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
declare function formatAsPercentage(number?: number): string | Error;
export { formatAsPercentage };
