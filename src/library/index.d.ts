import { AllowedThreadTypeForNewsChannel } from "discord.js"

    export interface Options{

        /**

         * @throws {RangeError} Throw an error if the specified time isn't valid!
         * @Usage `getUnix(`3 days`)` output → `1649748877`
         */
        time?: string
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
    const { getUnix } = require("@fetch/time");
    // ECMAScript
    import { getUnix } from "@fetch/time"
    
```
 */


export function getUnix(time?: string): Options | RangeError;

declare namespace DataString{
    interface Options {
    /**
		@Display the time in a lengthy form! as: "April 11th 2022, 12:26:29 pm" instead of "April 11th 2022, 12:26:29 pm"
     
        This might be useful when you want to show the given time in a lengthy form instead of the default short form!

        By setting the "Lengthy" option to 'true' disallows the default option "false"

        @default false

        */
        Lengthy?: boolean
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
    const { getHumanReadableTime } = require("@fetch/time");
    // ECMAScript
    import { getHumanReadableTime } from "@fetch/time"
    
```
*/ 

export function getHumanReadableTime(time: number, options?: DataString.Options): string | RangeError;

export interface TimeValue{

           /**
         * @value Specify a value.
         * @throws {RangeError} Throw an error if the specified value isn't valid!
         */
            value?: string

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
    const { getTimezone } = require("@fetch/time");
    // ECMAScript
    import { getTimezone } from "@fetch/time"


```
 *
 */
export function getTimezone(value?: string): TimeValue | RangeError

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

export function getTimeFromNow(value?: String): String


declare namespace AllType{
    interface Options {
    /**
		@Displays the day of the formatted date!
     
        This might be useful when you want to also display the day of the formatted date!

        By setting the "longFormat" option to 'true' you're disallowing the default option "false"
        @default false

        */
        longFormat?: boolean
}
};

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


export function getFormattedTime(value?: String, options: AllType.Options)