var spawnSync = require('child_process').spawnSync;

var utils = module.exports = {
    calculateScore: function(password) {
        // Replace English words
        // Word finder found here: http://stackoverflow.com/a/11642687/1166128
        var command = spawnSync('python', ['wordFinder.py', password]);
        var updatedtext = command.stdout.toString();
        console.log(updatedtext);
        var wordArray = updatedtext.split(/\x20+/);
        console.log(wordArray);
        wordArray.map(function(word) {
            return word[0];
        });
        updatedtext = wordArray.join('');
        // Find character types in string
        var types = this.getTypes(password);
        // Multiply character types by updated length
        var passwordLength = wordArray.length + (password.split(/\s/).length-1);
        return types * passwordLength;
    },

    getTypes: function(string) {
        return this.hasLetters(string) + this.hasDigits(string) + this.hasWhitespace(string) + this.hasMisc(string);
    },

    hasWhitespace: function(str) {
        return (/\s+/g.test(str)) ? 1 : 0;
    },

    hasLetters: function(str) {
        return (/[A-Za-z]+/g.test(str)) ? 1 : 0;
    },

    hasDigits: function(str) {
        return (/[0-9]+/g.test(str)) ? 1 : 0;
    },

    hasMisc: function(str) {
        return (/[^A-Za-z0-9\s]+/g.test(str)) ? 1 : 0;
    }
}
