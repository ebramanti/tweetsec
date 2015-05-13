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
    var user = "@" + tweet.user.screen_name;
    if (user === Bot.botname) {
        return;
    }
    var password = tweet.text.replace(Bot.botname + ' ', '');
    calculateValue(user, password);
}

function calculateValue(user, password) {
    var value = utils.calculateScore(password);
    replyTweet(user, password, value);
}

function replyTweet(user, password, value) {
    console.log("value: " + value);
    var userPassString = user + " \"" + password + "\" ";
    if (value >= 50) {
        Bot.post('statuses/update', {
            status: userPassString + "is a strong password!"
        }, function (err, data, res) {
            //callback required
            console.log(data.text);
        });
    } else if (value <= 10) {
        Bot.post('statuses/update', {
            status: userPassString + "is unacceptable! Try again."
        }, function (err, data, res) {
            console.log(data.text);
        });
    } else {
        var revisedPass;
        Bot.post('statuses/update', {
            status: userPassString + "is pretty weak. I recommend this as an alternative:"
        }, function(err, data, res) {
            console.log(data.text);
        });
    }
}
