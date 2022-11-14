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
function isValidDate(date?: string | String): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (date?.match(regex) === null) return false;
  let newDate = new Date(`${date}`);
  const timeStamp = newDate?.getTime();
  if (typeof timeStamp !== "number" || Number?.isNaN(timeStamp)) return false;
  else return newDate?.toISOString()?.startsWith(`${date}`);
}

export { isValidDate };
