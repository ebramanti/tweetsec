var Twit = require('twit');

var utils = require('./utils');
var config = require('./config');

var Bot = new Twit(config);
console.log("Working...");
