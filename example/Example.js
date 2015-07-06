
var StringPrototyped = require('proto-js-string');
if (StringPrototyped) {
    // Extend the string class with override
    String.prototype[''] = function (callback) {
        var input = this;
        var ctx = new StringPrototyped(input);
        if (typeof callback === 'function') {
            callback(input);
        }
        return ctx;
    };

    // Example usage:
    /*
    var enc = "This is a string message example..."['']().compress()
    console.log('Encoded:', enc);
    console.log('Decoded:', enc['']().decompress());
    */
}