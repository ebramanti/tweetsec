TweetSec, Inc. Twitter Bot
==========================
TweetSec is a fictional corporation. It has a Twitter bot designed to take in tweets of passwords and calculate their strength based on their "patented" algorithm. 

I designed the Twitter bot and implemented the algorithm as part of a coding challenge for Philosophie.

# Requirements

* Node.js (0.12.2 at time of writing)
* Python 2.x (for script that parses English words)
* Twit (Node Twitter Bot)
* Mocha (for unit tests)

# Setup

Run `npm install` to download the Node dependencies above.

You are also required to have a `config.js` file in the root directory. You can get the info from whatever Twitter account will act as your bot:

    module.exports = {
        botUsername: 'botuser'
      , consumer_key: 'xxxxxx'
      , consumer_secret: 'xxxxxx'
      , access_token: 'xxxxxx'
      , access_token_secret: 'xxxxxx'
    };

Run `node server` in the root directory to start the bot.

# Complete English Word Parsing

For part of TweetSec's algorithm, complete English words must be found and modified. The algorithm I used was written by StackOverflow user [GenericHuman](http://stackoverflow.com/users/1515832/generic-human). He uses Ziph's law to write an algorithm that makes use of dynamic programming. More information on the program and algorithm can be found [here](http://stackoverflow.com/a/11642687/1166128). The library files I used of his are:
* `wordFinder.py` (algorithm)
* `dict/words-by-frequency.txt` (dictionary)
