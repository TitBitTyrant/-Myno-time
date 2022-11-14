const {
  Timer,
  secondsToDuration,
  getCurrentFormattedTime,
  getFormattedMilliseconds,
  getFormattedTime,
  getHumanReadableTime,
  getTimeFromNow,
  getTimezone,
  getUnix,
} = require("../library/index.js");
const { formatNumbers } = require("../library/phase2.js");
const { isValidDate } = require("../library/functions.js");
const { isValid } = require("../common/index.js");
// exporting all the functions using the commonJS "module.exports"
module.exports = {
  // V1
  Timer,
  secondsToDuration,
  getCurrentFormattedTime,
  getCurrentFormattedTime,
  getFormattedMilliseconds,
  getFormattedTime,
  getHumanReadableTime,
  getTimeFromNow,
  getTimezone,
  getUnix,
  isValidDate,
  isValid, // --> Deprecated
  formatNumbers,
  // V2
};
