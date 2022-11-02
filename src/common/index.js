const isValid = /*** @param {String} dateString*/ (dateString = String) =>
  new Date(dateString).toString() !== "Invalid Date";

module.exports = isValid;
