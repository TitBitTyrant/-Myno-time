const ms = require("ms");
const pretty = require('pretty-ms');
const moment = require("moment");
const TimeZone = require("country-timezone")
const ct = require("countries-and-timezones");
const { getName } = require('country-list');

/**
     * @Converts the given time to an Unix-Epoch timestamp!
     * @throws {Error} Throws an error if the give time was invalid.
    *  @param {String | Number} time The specified time.
    */

// GetUnixTimeStamps 
function getUnix(time) {
    if (!time) throw new RangeError(`No time specified, You need to specify a time!`)
    try {
        var ForMattedTime = ms(time);
        const prettytime = pretty(ForMattedTime)
    } catch (error) {
        throw new RangeError(`The specified time is invalid!`)
    }
    const bannedDate = Math.floor(Date.now() / 1000)
    var someDate = new Date();
    var numberOfDaysToAdd = ForMattedTime;
    var result = someDate.setMilliseconds(someDate.getMilliseconds() + numberOfDaysToAdd);
    return Math.floor(new Date(result) / 1000)
};

// Human ReadAbleString

/**
 * @Converts milliseconds/Unix-Epoch timestamps to a HumanReadAble time!
 * @throws {Error} Throw an error if the specified value was invalid! 
 * @param {String | Number} value The specified value/time.
 * @param {options} options Choose the long/short format of the time.
 * @param {Examples} example getHumanReadableTime(Unix-Time); - getHumanReadableTime(1649427190);, Make sure the time is in the number format.
 * 
*/
function getHumanReadableTime(time, options) {

    if (!time) throw new RangeError(`No time specified, You need to specified a time!`);
    if (!Number(time)) return new RangeError(`Invalid time specified, The time you specified isn't a number!`)
    if (options?.Lengthy) {
        const bannedDate = Math.floor(Date.now() / 1000)
        var someDate = new Date();
        var numberOfDaysToAdd = time;
        var result = someDate.setMilliseconds(someDate.getMilliseconds() + numberOfDaysToAdd);
        const data = Math.floor(new Date(result) / 1000)
        const gettingMilliseconds = time * 1000
        let DataObject = new Date(gettingMilliseconds)
        return moment(DataObject).format('MMMM Do YYYY, h:mm:ss a')

    } else {

        const bannedDate = Math.floor(Date.now() / 1000)
        var someDate = new Date();
        var numberOfDaysToAdd = time;
        var result = someDate.setMilliseconds(someDate.getMilliseconds() + numberOfDaysToAdd);
        const data = Math.floor(new Date(result) / 1000)
        let GettingMilliSeconds = time * 1000;
        let DataObject = new Date(GettingMilliSeconds)
        return DataObject.toLocaleString();

    }
};

/**
 * @Get the timeZone of a country by a country Name/Capital City
 * @throws {RangeError} throw an error if the following value is invalid.
 * @param {String | Value} zone The specified value.
 * @example ``` getTimezone("New Delhi" || "India"); ```
 */

function getTimezone(zone) {

    if (!zone) return new RangeError('No timeZone specified, The timeZone cannot be an empty string.');


    try {
        const ForMattedTime = TimeZone.getTimezones(zone);
        const ForMattedArray = ForMattedTime[Math.floor(Math.random() * ForMattedTime.length)]
        const variable = new Date().toLocaleString('en-US', {
            timeZone: `${ForMattedArray}`
        });
        const country = ct.getTimezone(ForMattedArray).countries.toLocaleString();
        if (country?.includes(",")) {

            const newDataBasedCountry = ct.getTimezone(ForMattedArray).countries;
            const ForMattedString = newDataBasedCountry[Math.floor(Math.random() * newDataBasedCountry.length)];
            return `${ct.getTimezone(`${ForMattedArray}`).name} ${variable}, ${getName(ForMattedString)}/${ForMattedString}`;
        } else {
            return `${ct.getTimezone(`${ForMattedArray}`).name} ${variable}, ${getName(country)}/${ct.getTimezone(ForMattedArray).countries}`;
        }
    } catch (error) {
        // console.log(error);
        throw new RangeError(`Invalid timeZone specified, The timeZone you just specified is an invalid timeZone.`)
    }

}

module.exports = { getUnix, getHumanReadableTime, getTimezone };