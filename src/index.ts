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

// Register as a global class
if (typeof window !== 'undefined') {
    window['StringPrototyped'] = proto.string.StringPrototyped;
}