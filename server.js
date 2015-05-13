var Twit = require('twit');

var utils = require('./utils');
var config = require('./config');

var Bot = new Twit(config);
Bot.botname = '@' + config.botUsername;
console.log("Working...");

var stream = Bot.stream('statuses/filter', {
    track: Bot.botname
});

stream.on('tweet', function(tweet) {
    formatTweet(tweet);
});

function formatTweet(tweet) {
    var user = tweet.user.screen_name;
    var password = tweet.text.replace(Bot.botname + ' ', '');
    console.log(password);
}
