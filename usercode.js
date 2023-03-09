'use strict';

const str = require('get_jwt');



module.exports = (data) => {
  
  var res1 = str("qqqqq");
  data.res = "Success!" + data.x + res1;
  return data;
}

