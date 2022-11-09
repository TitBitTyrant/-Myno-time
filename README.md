# @Fetch/time

> 💭 Easiest way to do things like formatting-converting with some really unique options.
>
> [![@myno_21/time](https://nodei.co/npm/@myno_21/time.png?downloads=true&downloadRank=true)](http://npmjs.org/package/@myno_21/time)

[![Version](https://img.shields.io/npm/v/@myno_21/time.svg)](https://www.npmjs.com/package/@myno_21/time)
[![Downloads](https://img.shields.io/npm/dt/@myno_21/time.svg)](https://www.npmjs.com/package/@myno_21/time)

[![GitHub Actions](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MYN0/-Myno-time)

## What's new? 🔗

### Added some more features:

- getFormattedMilliseconds _(Formats milliseconds into an object containing days, hours, minutes, seconds and milliseconds)_
- getCurrentFormattedTime _(Formats the current time in a bit cleaner manner)_
- Timer _(Sets a complete timer for you. With events.)_
- Seconds To Duration _(Converts seconds to a duration.)_

## Features 📣

- Converts localized time to Unix-Epoch timestamps.
- Converts a Unix-Epoch timestamp to a human readable time.
- Get a timezone of a country by it's capital city/country name.
- Get the time in a localized format -> "in xyz seconds"/"xyz seconds ago"
- Get a formatted time.
- Get the current in a formatted manner with some cool options.
- Sets a timer for your. With the timer events.
- Converts seconds to a proper formatted duration.

# ❔Installation

```
$ npm install @myno_21/time
```

# Unix-Converter

```js
//CommonJS
const { getUnix } = require("@myno_21/time");

//ECMAScript/ESM
import { getUnix } from "@myno_21/time";

getUnix(`4 days`); // → 1649923729
```

# Timezone

```js
//CommonJS
const { getTimezone } = require("@myno_21/time");

//ECMAScript/ESM
import { getTimezone } from "@myno_21/time";

getTimezone("India" || "New Delhi"); // → Asia/Kolkata 4/10/2022, 1:40:14 PM, India/IN
```

# Formatted Time

```js
// CommonJS
const { getFormattedTime } = require("@myno_21/time");
// ECMAScript
import { getFormattedTime } from "@myno_21/time";

console.log(getFormattedTime("2022-12-01Z00:00:00.000")); // Default ➟ 05:30 AM
console.log(getFormattedTime(`2022-12-01Z00:00:00.000`), { longFormat: true }); // longFormat ➟ Thursday, 05:30 AM
```

# Epoch-Timestamp/MIlliseconds to Date

```js
//CommonJS
const { getHumanReadableTime } = require("@myno_21/time");

//ECMAScript/ESM
import { getHumanReadableTime } from "@myno_21/time";

getHumanReadableTime("1649923729", { Lengthy: true }); // → April 14th 2022, 1:38:49 pm
```

# Time From Now

```js
const { getTimeFromNow } = require("@myno_21/time");

//ECMAScript/ESM
import { getTimeFromNow } from "@myno_21/time";

const agoData = getTimeFromNow(`2020-04-04`);
const inData = getTimeFromNow("2030-04-04");

console.log(agoData); // ➟ 2 years ago
console.log(inData); // ➟ in 8 years
```

# Formatted-Milliseconds

```js
const { getFormattedMilliseconds } = require("@myno_21/time");

//ECMAScript/ESM
import { getFormattedMilliseconds } from "@myno_21/time";

const data = getFormattedMilliseconds(103680000); // The return form is in a object so you can also target a property like: getFormattedMilliseconds(103680000).days || hours || minutes || seconds

console.log(data); // ➟ { days: 2, hours: 18, minutes: 43, seconds: 12, milliseconds: 0 }
```

# ★ CurrentFormattedTime

```js
// CommonJS
const { getCurrentFormattedTime } = require("@myno_21/time");
// ECMAScript
import { getCurrentFormattedTime } from "@myno_21/time";
// Default Option
const _resultDefault = getCurrentFormattedTime();
// Option 1
const _resultshowInShortManner = getCurrentFormattedTime({
  showInShortManner: true,
});
// Option 2
const _resultWithshowTimeOnly = getCurrentFormattedTime({
  showTimeOnly: true,
});
// Default:
console.log(_resultDefault); //--> September 05, Monday 01:11 PM
// With the option "showInShortManner"
console.log(_resultshowInShortManner); //--> Sep 05, Mon 01:11 PM
// With the option "showTimeOnly"
console.log(_resultWithshowTimeOnly); // --> 01:11 PM
```

# ★ Timer

```js
// CommonJS
const { Timer } = require("@myno_21/time");
// ECMAScript
import { Timer } from "@myno_21/time";
const timer = new Timer("2minutes"); //Setting the timer.

timer.on("setTime", (timeObject, remainingTime) => {
  // Do something with it.
  console.log("The timer is now set!"); // Logging when the timer is set.
});
timer.on("timeEnd", (timeObject, setOn) => {
  // Do something with it.
  console.log("The time is now over!"); // Logging when the timer is ended.
});
```

- # ★ Seconds To Duration

```js
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
```

- # ★ Format Number

```js
// CommonJS
const { formatNumbers } = require("@myno_21/time");
// ECMAScript
import { formatNumbers } from "@myno_21/time";

const result = formatNumbers(2234);

print(result);
// Result --> 2.2K
function print(query) {
  console.log(query);
}
```

## ★ Previous Packages

- [@myno_21/password-generator](https://www.npmjs.com/package/@myno_21/password-generator)_(Generates random passwords with some really cool options such as limit,includes etc.)_

  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
