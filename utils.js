

var utils = module.exports = {
    calculateScore: function(password) {
        var result = 0;
        var updatedtext = '';
        //Replace English words

        //Find character types in string
        var types = this.getTypes(updatedtext);
        //Multiply character types by updated length

        return result;
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
