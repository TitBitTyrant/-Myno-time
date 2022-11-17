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
function formatAsPercentage(number?: number) {
  if (!number) return new Error(`The value cannot be empty.`);
  if (typeof number !== "number")
    return new RangeError(
      `Not a valid number!\nThe number you just specified is not a valid number. Please specify a valid number.`
    );
  return `${parseFloat(`${number}`)?.toFixed(2)}%`;
}

export { formatAsPercentage };
