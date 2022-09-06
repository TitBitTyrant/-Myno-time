const ms = require("ms");
const pretty = require("pretty-ms");
const moment = require("moment");
const TimeZone = require("country-timezone");
const ct = require("countries-and-timezones");
const { getName } = require("country-list");
var validateDate = require("validate-date");
const events = require("events");
const eventEmitter = events.EventEmitter;
/**
 * @Converts the given time to an Unix-Epoch timestamp!
 * @throws {Error} Throws an error if the give time was invalid.
 *  @param {String | Number} time The specified time.
 */

// GetUnixTimeStamps
function getUnix(time) {
  if (!time)
    throw new RangeError(`No time specified, You need to specify a time!`);
  try {
    var ForMattedTime = ms(time);
    const prettytime = pretty(ForMattedTime);
  } catch (error) {
    throw new RangeError(`The specified time is invalid!`);
  }
  const bannedDate = Math.floor(Date.now() / 1000);
  var someDate = new Date();
  var numberOfDaysToAdd = ForMattedTime;
  var result = someDate.setMilliseconds(
    someDate.getMilliseconds() + numberOfDaysToAdd
  );
  return Math.floor(new Date(result) / 1000);
}

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
  if (!time)
    throw new RangeError(`No time specified, You need to specified a time!`);
  if (!Number(time))
    return new RangeError(
      `Invalid time specified, The time you specified isn't a number!`
    );
  if (options?.Lengthy) {
    const bannedDate = Math.floor(Date.now() / 1000);
    var someDate = new Date();
    var numberOfDaysToAdd = time;
    var result = someDate.setMilliseconds(
      someDate.getMilliseconds() + numberOfDaysToAdd
    );
    const data = Math.floor(new Date(result) / 1000);
    const gettingMilliseconds = time * 1000;
    let DataObject = new Date(gettingMilliseconds);
    return moment(DataObject).format("MMMM Do YYYY, h:mm:ss a");
  } else {
    const bannedDate = Math.floor(Date.now() / 1000);
    var someDate = new Date();
    var numberOfDaysToAdd = time;
    var result = someDate.setMilliseconds(
      someDate.getMilliseconds() + numberOfDaysToAdd
    );
    const data = Math.floor(new Date(result) / 1000);
    let GettingMilliSeconds = time * 1000;
    let DataObject = new Date(GettingMilliSeconds);
    return DataObject.toLocaleString();
  }
}

/**
 * @Get the timeZone of a country by a country Name/Capital City
 * @throws {RangeError} throw an error if the following value is invalid.
 * @param {String | Value} zone The specified value.
 * @example ``` getTimezone("New Delhi" || "India"); ```
 */

function getTimezone(zone) {
  if (!zone)
    return new RangeError(
      "No timeZone specified, The timeZone cannot be an empty string."
    );

  try {
    const ForMattedTime = TimeZone.getTimezones(zone);
    const ForMattedArray =
      ForMattedTime[Math.floor(Math.random() * ForMattedTime.length)];
    const variable = new Date().toLocaleString("en-US", {
      timeZone: `${ForMattedArray}`,
    });
    const country = ct.getTimezone(ForMattedArray).countries.toLocaleString();
    if (country?.includes(",")) {
      const newDataBasedCountry = ct.getTimezone(ForMattedArray).countries;
      const ForMattedString =
        newDataBasedCountry[
          Math.floor(Math.random() * newDataBasedCountry.length)
        ];
      return `${
        ct.getTimezone(`${ForMattedArray}`).name
      } ${variable}, ${getName(ForMattedString)}/${ForMattedString}`;
    } else {
      return `${
        ct.getTimezone(`${ForMattedArray}`).name
      } ${variable}, ${getName(country)}/${
        ct.getTimezone(ForMattedArray).countries
      }`;
    }
  } catch (error) {
    // console.log(error);
    throw new RangeError(
      `Invalid timeZone specified, The timeZone you just specified is an invalid timeZone.`
    );
  }
}

function getTimeFromNow(input) {
  if (!input)
    return new RangeError(
      "No time specified, You need to specify a time to format!"
    );
  const date = input instanceof Date ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat("en");
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  if (!secondsElapsed)
    throw new RangeError(
      "Invalid date specified, The date you specified is invalid!"
    );
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
    if (typeof options.longFormat !== "boolean")
      throw new RangeError(
        `Not a valid choice, The longFormat option in a "Boolean" you need to whether choose between "true" or "false"!`
      );

    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var d = new Date(date);
    var h = d.getHours(),
      m = d.getMinutes(),
      l = "AM";
    if (!h)
      throw new RangeError(
        "Not a valid date, The date you specified is a invalid date!"
      );
    var day = weekday[d.getDay()];
    if (h > 12) {
      h = h - 12;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (d.getHours() >= 12) {
      l = "PM";
    } else {
      l = "AM";
    }
    return `${day}, ${h}:${m} ${l}`;
  } else {
    d = new Date(date);
    var h = d.getHours(),
      m = d.getMinutes(),
      l = "AM";
    if (!h)
      throw new RangeError(
        "Not a valid date, The date you specified is a invalid date!"
      );
    if (h > 12) {
      h = h - 12;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (d.getHours() >= 12) {
      l = "PM";
    } else {
      l = "AM";
    }

    return h + ":" + m + " " + l;
  }
}

/**
 * @param {Object} options
 * @param {Number} ms
 * @returns
 */

function getFormattedMilliseconds(ms) {
  if (!ms)
    throw new Error(
      `No value specified, In order to format the milliseconds you need to specify a value!`
    );
  if (typeof ms !== "number")
    throw new Error(
      `Not a valid choice, The milliseconds you specified is not a valid number!`
    );
  if (ms < 0)
    throw new Error(`The milliseconds value is way to low to format.`);
  if (ms > 9999999999999)
    throw new Error(
      `Not a valid choice, The milliseconds you specified is not a valid number!`
    );

  const totalSeconds = parseInt(Math.floor(ms / 1000));
  const totalMinutes = parseInt(Math.floor(totalSeconds / 60));
  const totalHours = parseInt(Math.floor(totalMinutes / 60));
  const days = parseInt(Math.floor(totalHours / 24));

  const seconds = parseInt(totalSeconds % 60);
  const minutes = parseInt(totalMinutes % 60);
  const hours = parseInt(totalHours % 24);
  const milliseconds = parseInt(ms % 1000);
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}
const getCurrentFormattedTime = (options = {}) => {
  if (options?.showTimeOnly) {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    var month = pad2(date.getMonth() + 1); //months (0-11)
    var day = pad2(date.getDate()); //day (1-31)
    var year = date.getFullYear();
    const formattedTime =
      pad2(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
      ":" +
      pad2(date.getMinutes()) +
      " " +
      (date.getHours() >= 12 ? "PM" : "AM");
    const today = weekday[date.getDay()];
    const formattedMonth = months[date.getMonth()];
    var formattedDate = `${formattedTime}`;
    return formattedDate;
  } else if (options?.showInShortManner) {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var date = new Date();
    var month = pad2(date.getMonth() + 1); //months (0-11)
    var day = pad2(date.getDate()); //day (1-31)
    var year = date.getFullYear();
    const formattedTime =
      pad2(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
      ":" +
      pad2(date.getMinutes()) +
      " " +
      (date.getHours() >= 12 ? "PM" : "AM");
    const today = weekday[date.getDay()];
    const formattedMonth = months[date.getMonth()];
    var formattedDate = `${formattedMonth} ${day}, ${today} ${formattedTime}`;
    return formattedDate;
  } else {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    var month = pad2(date.getMonth() + 1); //months (0-11)
    var day = pad2(date.getDate()); //day (1-31)
    var year = date.getFullYear();
    const formattedTime =
      pad2(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
      ":" +
      pad2(date.getMinutes()) +
      " " +
      (date.getHours() >= 12 ? "PM" : "AM");
    const today = weekday[date.getDay()];
    const formattedMonth = months[date.getMonth()];
    var formattedDate = `${formattedMonth} ${day}, ${today} ${formattedTime}`;
    return formattedDate;
  }
};

class Timer extends eventEmitter {
  /**
   * @param {String} time
   */
  constructor(time) {
    super({
      captureRejections: true,
    });
    if (!time)
      throw new Error(
        "No time specified! You need specify a valid time to set the timer"
      )
        ? RangeError(
            "No time specified! You need specify a valid time to set the timer"
          )
        : Error(
            "No time specified! You need specify a valid time to set the timer."
          );
    var _syncedMilliseconds = ms(time);
    var checkingSyncedTime = pretty(_syncedMilliseconds);
    if (!checkingSyncedTime)
      throw Error("Not a valid time specified.")
        ? RangeError("Not a valid time specified.")
        : Error("Not a valid time specified.");
    var _formattedTime = getUnix(time);
    var _mappedTime = getHumanReadableTime(_formattedTime, {
      Lengthy: true,
    });
    const setTime = getFormattedMilliseconds(_syncedMilliseconds);
    setTimeout(async () => {
      this.emit("setTime", setTime, _mappedTime);
      setTimeout(async () => {
        this.emit("timeEnd", setTime);
      }, _syncedMilliseconds);
    }, ms("0.1ms"));
  }
}
module.exports = {
  getUnix,
  getHumanReadableTime,
  getTimezone,
  getTimeFromNow,
  getFormattedTime,
  Timer,
  getCurrentFormattedTime,
  getFormattedMilliseconds,
};

function print(query) {
  console.log(query);
}

function pad2(n) {
  return (n < 10 ? "0" : "") + n;
}
