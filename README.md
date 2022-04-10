# @Myno-time

Get a unix timestamp, timezone, humanreadable-time without struggling a bit!
 
 # ❔Installation

 ```
npm install @myno_21/time
 ```

# Example

```js
//CommonJS
const { getUnix, getHumanReadableTime, getTimezone } = require("@myno_21/time");

//ECMAScript/ESM
import { getUnix, getHumanReadableTime, getTimezone } from "@myno_21/time"'

getUnix(`4 days`) // → 1649923729

getHumanReadableTime('1649923729', { Lengthy: true }); // → 839289308

getTimezone('India' || "New Delhi") // → Asia/Kolkata 4/10/2022, 1:40:14 PM, India/IN

```
