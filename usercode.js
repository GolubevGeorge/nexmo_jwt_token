'use strict';

const str = require('get_jwt');

var res1 = str.GET_JWT("qqqqq");

module.exports = (data) => {
  data.res = "Success!" + data.x + res1;
  return data;
}

