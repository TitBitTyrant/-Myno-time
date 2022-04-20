const ms = require("ms");
const pretty = require('pretty-ms');
const moment = require("moment");
const TimeZone = require("country-timezone")
const ct = require("countries-and-timezones");
const { getName } = require('country-list');
var validateDate = require("validate-date");

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

/**
 * 
 * @param {Date} input 
 * @param {Object} options 
 * @returns 
 */

// function getTimeFromNow(date) {

//     if (!date) throw new RangeError(`No date specified, You need to specify a date to format!`);

//     const checkingDate = validateDate(date, responseType = "boolean");
//     if (!checkingDate) throw new RangeError(`Invalid date specified, The date you specified is invalid!`)

//     const main = new Date(date)
//     var ms = (new Date()).getTime() - main.getTime();
//     var seconds = Math.floor(ms / 1000);
//     var minutes = Math.floor(seconds / 60);
//     var hours = Math.floor(minutes / 60);
//     var days = Math.floor(hours / 24);
//     var months = Math.floor(days / 30);
//     var years = Math.floor(months / 12);
//     var centuries = Math.floor(years / 100);



//     if (ms === 0) {
//         return 'Just now';
//     } if (seconds < 60) {
//         return seconds + ' seconds ago.';
//     } if (minutes < 60) {
//         return minutes + ' minutes ago.';
//     } if (hours < 24) {
//         return hours + ' hours ago.';
//     } if (days < 30) {
//         return days + ' days ago.';
//     } if (months < 12) {
//         return months + ' months ago';
//     }
//     else {
//         return years + ' years ago.'
//     }


// }



function getTimeFromNow(input) {

    if (!input) return new RangeError('No time specified, You need to specify a time to format!');
    const date = (input instanceof Date) ? input : new Date(input);
    const formatter = new Intl.RelativeTimeFormat('en');
    const ranges = {
        years: 3600 * 24 * 365,
        months: 3600 * 24 * 30,
        weeks: 3600 * 24 * 7,
        days: 3600 * 24,
        hours: 3600,
        minutes: 60,
        seconds: 1
    };
    const secondsElapsed = (date.getTime() - Date.now()) / 1000;
    if (!secondsElapsed) throw new RangeError('Invalid date specified, The date you specified is invalid!');
    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key];

            return formatter.format(Math.round(delta), key);
        }
    }
}


/**
 * 
 * @param {String} date 
 * @param {Object} options 
 * @returns 
 */

function getFormattedTime(date, options) {

    if (options?.longFormat) {
        if (typeof options.longFormat !== "boolean") throw new RangeError(`Not a valid choice, The longFormat option in a "Boolean" you need to whether choose between "true" or "false"!`)

        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date(date);
        var h = d.getHours(), m = d.getMinutes(), l = "AM";
        if (!h) throw new RangeError("Not a valid date, The date you specified is a invalid date!");
        var day = weekday[d.getDay()];
        if (h > 12) {
            h = h - 12;
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (d.getHours() >= 12) {
            l = "PM"
        } else {
            l = "AM"
        }
        return `${day}, ${h}:${m} ${l}`;

    } else {

        d = new Date(date);
        var h = d.getHours(), m = d.getMinutes(), l = "AM";
        if (!h) throw new RangeError("Not a valid date, The date you specified is a invalid date!");
        if (h > 12) {
            h = h - 12;
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (d.getHours() >= 12) {
            l = "PM"
        } else {
            l = "AM"
        }

        return h + ':' + m + ' ' + l;

    }


}

module.exports = { getUnix, getHumanReadableTime, getTimezone, getTimeFromNow, getFormattedTime };