import { TypedEmitter } from "tiny-typed-emitter";

export interface Options {
  /**

         * @throws {RangeError} Throw an error if the specified time isn't valid!
         * @Usage `getUnix(`3 days`)` output → `1649748877`
         */
  time?: string;
}

/**
 *  @Converts Normal time `2 days` → `1649748877` to an Unix-Epoch timestamp!
     * @throws {RangeError} Throws an error if the give time was invalid.
    *  @param {String | Number} time The specified time.
    * 
    * @SampleExample
    * 
```
    // CommonJS
    const { getUnix } = require("@myno_21/time");
    // ECMAScript
    import { getUnix } from "@myno_21/time"
    
```
 */

export function getUnix(time?: string): String | RangeError;

declare namespace DataString {
  interface Options {
    /**
		@Display the time in a lengthy form! as: "April 11th 2022, 12:26:29 pm" instead of "April 11th 2022, 12:26:29 pm"
     
        This might be useful when you want to show the given time in a lengthy form instead of the default short form!

        By setting the "Lengthy" option to 'true' disallows the default option "false"

        @default false

        */
    Lengthy?: boolean;
  }
}

/**
 * @Converts milliseconds/Unix-Epoch timestamps to a HumanReadAble time! `1649660189` - `April 11th 2022, 12:26:29 pm`
* @throws {RangError} Throw a error if the specified value was invalid! 
* @param {String | Number} value The specified value/time.
* @param {options} options Choose the long/short format of the time.
* @param {Examples} usage getHumanReadableTime(Unix-Time); - getHumanReadableTime(1649427190); Make sure the time is in the number format. 
*


@SampleExample
```

    // CommonJS
    const { getHumanReadableTime } = require("@myno_21/time");
    // ECMAScript
    import { getHumanReadableTime } from "@myno_21/time"
    
```
*/

export function getHumanReadableTime(
  time: number,
  options?: DataString.Options
): string | RangeError;

export interface TimeValue {
  /**
   * @value Specify a value.
   * @throws {RangeError} Throw an error if the specified value isn't valid!
   */
  value?: string;
}

/**
 * 
 * @Get the timeZone of a country by a country Name/Capital City
 * @throws {RangeError} throw an error if the following value is invalid.
 * @param {String | Value} zone The specified value.
 * @usage getTimezone(Country Name || Country Capital City Name || Any City Name of the Country);
 * 
 * @SampleExample
 *```

    // CommonJS
    const { getTimezone } = require("@myno_21/time");
    // ECMAScript
    import { getTimezone } from "@myno_21/time"


```
 *
 */
export function getTimezone(value?: string): String | RangeError;

/**
 * @Converts a date to the localize time format like "04/04/2022" ➟ "2 weeks ago"
 * @param value ★ Specify a date.
 * @throws {RangeError} Throw an RangeError if the specified date is invalid!
    @SampleExample
    ```js
    // CommonJS
    const { getTimeFromNow } = require("@myno_21/time");
    // ECMAScript
    import { getTimeFromNow } from "@myno_21/time";

    const agoData = getTimeFromNow(`2020-04-04`);
    const inData = getTimeFromNow("2030-04-04")

    console.log(agoData) // ➟ 2 years ago
    console.log(inData) // ➟ in 8 years
    ```
 */

export function getTimeFromNow(value?: String): String;

declare namespace AllType {
  interface Options {
    /**
		@Displays the day of the formatted date!
     
        This might be useful when you want to also display the day of the formatted date!

        By setting the "longFormat" option to 'true' you're disallowing the default option "false"
        @default false

        */
    longFormat?: boolean;
  }
}

/**
 * ★ Get a formatted time!
 * @param value Specify a date to format!
 * @throws {RangeError} Throw an error if the specified date is invalid!
* @param {options} options Choose the long/short format of the formatted time.
@usage getFormattedTime("Date-here");
  
  @SampleExample
```js
// CommonJS
const { getFormattedTime } = require("@myno_21/time");
// ECMAScript
import { getFormattedTime } from "@myno_21/time";

console.log(getFormattedTime("2022-12-01Z00:00:00.000")) // Default ➟ 05:30 AM
console.log(getFormattedTime(`2022-12-01Z00:00:00.000`), { longFormat: true }) // longFormat ➟ Thursday, 05:30 AM

```



 */

export function getFormattedTime(
  value?: String,
  options?: AllType.Options
): String;

export interface ObjectProtoTypeData {
  /**
   * @default
   * @property ★ Returns the number of days in the specified date!
   * @throws {undefined} Returns 'undefined' if the specified value isn't valid
   * @return {Number}
   */

  days?: Number;

  /**
   * @default
   * @property ★ Returns the number of hours in the specified date!
   * @throws {undefined} Returns 'undefined' if the specified value isn't valid
   * @return {Number}
   */

  hours?: Number;

  /**
   * @default
   * @property ★ Returns the number of minutes in the specified date!
   * @throws {undefined} Returns 'undefined' if the specified value isn't valid
   * @return {Number}
   */

  minutes?: Number;

  /**
   * @default
   * @property ★ Returns the number of seconds in the specified date!
   * @throws {undefined} Returns 'undefined' if the specified value isn't valid
   * @return {Number}
   */

  seconds?: Number;

  /**
   * @default
   * @property ★ Returns the number of milliseconds in the specified date!
   * @throws {undefined} Returns 'undefined' if the specified value isn't valid
   * @return {Number}
   */

  milliseconds?: Number;
}

/**
 * @default
 * @function Parse milliseconds into an object containing days, hours, minutes, seconds and milliseconds
 * @param value ★ Milliseconds to parse.
 * @throws {RangeError} Throw an error if the specified value is invalid!
 * @usage getFormattedMilliseconds(`milliseconds-here`); 
 * @SampleExample
 * ```js
 // CommonJS
const { getFormattedMilliseconds } = require("@myno_21/time");
// ECMAScript
import { getFormattedMilliseconds } from "@myno_21/time";

console.log(getFormattedMilliseconds(103680000));
// Result
// { days: 1, hours: 4, minutes: 48, seconds: 0, milliseconds: 0 }
 * ```
 * @return {Object}
 */

export function getFormattedMilliseconds(value?: Number): ObjectProtoTypeData;

declare namespace FunctionalOptions {
  interface Options {
    /**
     * @default
     * @this option might be useful when you only want the current time to be shown. Instead of the current day. month etc etc.
     * @throws {RangeError | Error} If you didn't specified a boolean.
     * @property showTimeOnly  - By agreeing to this property to "true". You're disallowing in the the default option "false"
     * @default false
     * @return
     */
    showTimeOnly?: boolean;

    /**
     * @default
     * @this option might be useful when you want the response in a short manner instead of the long default manner.,
     * @throws {RangeError | Error} If you didn't specified a boolean.
     * @property showInShortManner  - By agreeing to this property to "true". You're disallowing in the the default option "false"
     * @default false
     * @return
     */
    showInShortManner?: boolean;
  }
}
/**
 * @default
 * @function Formats the current time in a bit cleaner manner.
 * @param options ★ The specified options.
 * @usage getCurrentFormattedTime()
 * @SampleExample
 * ```js
 // CommonJS
const { getCurrentFormattedTime } = require("@myno_21/time");
// ECMAScript
import { getCurrentFormattedTime } from "@myno_21/time";
// Default Option
const _resultDefault = getCurrentFormattedTime();
// Option 1
const _resultshowInShortManner = getCurrentFormattedTime({
    showInShortManner: true
})
// Option 2
const _resultWithshowTimeOnly = getCurrentFormattedTime({
    showTimeOnly: true
})
// Default:
console.log(_resultDefault) //--> September 05, Monday 01:11 PM
// With the option "showInShortManner"
console.log(_resultshowInShortManner) //--> Sep 05, Mon 01:11 PM
// With the option "showTimeOnly"
console.log(_resultWithshowTimeOnly) // --> 01:11 PM
 * ```
 * @return {String}
 */
export function getCurrentFormattedTime(
  options?: FunctionalOptions.Options
): String;
interface EventsOptions {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}
interface mainEvents {
  setTime: (reamainingTime: EventsOptions, _formattedTime?: string) => {};
  timeEnd: (timeEnd: EventsOptions, setOn?: string) => {};
}
/**
 * @default
 * @class ★ Sets a complete timer for you. With events!
 * @event Options This events options.
 * @example
 * ```
  // CommonJS
const { Timer } = require("@myno_21/time");
// ECMAScript
import { Timer } from "@myno_21/time";
const timer = new Timer() //Setting the timer.

timer.on("setTime", (timeObject, remainingTime) => {
    // Do something with it.
  console.log("The timer is now successfully set.") // Logging when the timer is set.
})
timer.on("timeEnd", (timeObject, setOn) => {
  // Do something with it.
    console.log("The time is now over!") // Logging when the timer is ended.
})
 * ```
* @default false
 * @return
 */
export class Timer extends TypedEmitter<mainEvents> {
  /**
   * @default
   * @param time ★ The specified time.
   * @throws {Error} Throws an error if their was no time specified.
   * @return
   */
  constructor(time?: string);
}
declare namespace accumulatedOptions {
  interface Options {
    targetOnSeconds?: boolean;
    targetOnMinutes?: boolean;
    targetOnHours?: boolean;
  }
}

/**
 * @default
 * @function secondsToDuration ★ Coverts seconds to a duration!
 *@throws {RangeError} Throws an range error if their is not seconds specified.
 *  @throws {Error} Throws an error if the specified date is not valid.
 * @example
 * ```
  // CommonJS
const { secondsToDuration } = require("@myno_21/time");
// ECMAScript
import { secondsToDuration } from "@myno_21/time";

const timeInHours = secondsToDuration(3640);
const timeInSeconds = secondsToDuration(20);
const timeinMinutes = secondsToDuration(610);

console.log(timeInHours); // --> 01 : 00 : 40
console.log(timeInSeconds); // --> 00 : 20
console.log(timeinMinutes); // --> 10 : 10
 * ```
* @default false
 * @return
 */
export function secondsToDuration(
  s3conds?: number,
  options?: accumulatedOptions.Options
): string;
