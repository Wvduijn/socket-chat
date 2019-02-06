const moment = require('moment');

// Jan 1st 1970 00:00:00:00

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMMM YYYY'));