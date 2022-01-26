const addDays = require("date-fns/addDays");
module.exports = function getDate(num) {
  return addDays(new Date(2020, 7, 22), num);
};
