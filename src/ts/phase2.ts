interface Options {
  /**
   * @this option might be useful when you want to show the outcome in a lengthy way.
   *@throws {RangeError | Error} If you didn't specified a boolean.
   * @default false
   * @return
   */
  verboose?: boolean;
  /**
   * @this option might be useful when you want to add a space in between the numbers & in between the value.
   * @default false
   *@throws {RangeError | Error} If you didn't specified a boolean.
   * @return
   */
  spaceInBetween?: boolean;
}
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

function formatNumbers(number: number | void, options?: Options): string {
  if (options?.verboose) {
    if (number! > 1000) {
      const suffixes = ["", "Thousand", "Million", "Billion", "Trillion"];
      const suffixNumbers = Math.floor(("" + number).length / 3);
      const shortNumberValue = "";
      const normalisedValue = number! / Math?.pow(1000, suffixNumbers);
      let precious = 2;
      if (normalisedValue < 1) precious = 1;
      if (options.spaceInBetween) {
        return `${normalisedValue.toPrecision(precious)} ${
          suffixes[suffixNumbers]
        }`;
      } else {
        return `${normalisedValue.toPrecision(precious)}${
          suffixes[suffixNumbers]
        }`;
      }
    } else {
      return String(number);
    }
  } else {
    if (number! > 1000) {
      const suffixes = ["", "K", "M", "B", "T"];
      const suffixNumbers = Math.floor(("" + number).length / 3);
      const shortNumberValue = "";
      const normalisedValue = number! / Math?.pow(1000, suffixNumbers);
      let precious = 2;
      if (normalisedValue < 1) precious = 1;
      if (options?.spaceInBetween) {
        return `${normalisedValue.toPrecision(precious)} ${
          suffixes[suffixNumbers]
        }`;
      } else {
        return `${normalisedValue.toPrecision(precious)}${
          suffixes[suffixNumbers]
        }`;
      }
    } else return String(number);
  }
}
export { formatNumbers };
