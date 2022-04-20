# @Fetch/time

Get a unix timestamps, timezone, humanreadable-time without struggling a bit!

[![@myno_21/time](https://nodei.co/npm/@myno_21/time.png?downloads=true&downloadRank=true)](http://npmjs.org/package/@myno_21/time)

[![Version](https://img.shields.io/npm/v/@myno_21/time.svg)](https://www.npmjs.com/package/@myno_21/time)
[![Downloads](https://img.shields.io/npm/dt/@myno_21/time.svg)](https://www.npmjs.com/package/@myno_21/time)

[![GitHub Actions](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MYN0/-Myno-time)

## Features 📣

- Converts localized time to Unix-Epoch timestamps.
- Converts a Unix-Epoch timestamp to a human readable time.
- Get a timezone of a country by it's capital city/country name.
- Get the time in a localized format -> "in xyz seconds"/"xyz seconds ago"
- Get a formatted time.

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

## ★ Previous Packages

- [@myno_21/formatted-duration](https://www.npmjs.com/package/@myno_21/formatted-duration) _(Format seconds/milliseconds to a date/duration without struggling a bit!)_
- [@myno_21/password-generator](https://www.npmjs.com/package/@myno_21/password-generator)_(Generates random passwords with some really cool options such as limit,includes etc.)_
