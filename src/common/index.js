/**
 * @function isValid The function is technically deprecated.
 *Use the package built "isValidDate" function instead.
 @deprecated
 */
const isValid = /*** @param {String} dateString*/ (dateString = String) =>
  new Date(dateString).toString() !== "Invalid Date";

module.exports = isValid;
