/// <reference path="modules/imports.d.ts" />
/// <reference path="modules/string/StringPrototyped.ts" />

// Expose as CommonJS module
if (typeof module !== 'undefined') {
    module.exports = proto.string.StringPrototyped;
}

// Expose as an AMD module
if (typeof define === 'function' && define.amd) {
    define(proto.string.StringPrototyped);
}

// Extend the string class with prototype
if (typeof (String) !== 'undefined') {
    String.prototype[''] = function (callback) {
        var input = this;
        var ctx = new proto.string.StringPrototyped(input);
        if (typeof callback === 'function') {
            callback(input);
        }
        return ctx;
    };
}