var proto;
(function (proto) {
    var encoders;
    (function (encoders) {
        var MD5 = (function () {
            function MD5() {
                this.name = 'md5';
            }
            MD5.prototype.encode = function (input) {
                return MD5.calculate(input);
            };
            MD5.prototype.decode = function (encrypted) {
                throw new Error('Permanent: Cannot decrypt one way md5 hash...');
            };
            MD5.calculate = function (input) {
                return this.hex(this.md51(input));
            };
            MD5.hex = function (input) {
                for (var i = 0; i < input.length; i++)
                    input[i] = this.rhex(input[i]);
                return input.join('');
            };
            MD5.md5cycle = function (x, k) {
                var a = x[0], b = x[1], c = x[2], d = x[3];
                a = this.ff(a, b, c, d, k[0], 7, -680876936);
                d = this.ff(d, a, b, c, k[1], 12, -389564586);
                c = this.ff(c, d, a, b, k[2], 17, 606105819);
                b = this.ff(b, c, d, a, k[3], 22, -1044525330);
                a = this.ff(a, b, c, d, k[4], 7, -176418897);
                d = this.ff(d, a, b, c, k[5], 12, 1200080426);
                c = this.ff(c, d, a, b, k[6], 17, -1473231341);
                b = this.ff(b, c, d, a, k[7], 22, -45705983);
                a = this.ff(a, b, c, d, k[8], 7, 1770035416);
                d = this.ff(d, a, b, c, k[9], 12, -1958414417);
                c = this.ff(c, d, a, b, k[10], 17, -42063);
                b = this.ff(b, c, d, a, k[11], 22, -1990404162);
                a = this.ff(a, b, c, d, k[12], 7, 1804603682);
                d = this.ff(d, a, b, c, k[13], 12, -40341101);
                c = this.ff(c, d, a, b, k[14], 17, -1502002290);
                b = this.ff(b, c, d, a, k[15], 22, 1236535329);
                a = this.gg(a, b, c, d, k[1], 5, -165796510);
                d = this.gg(d, a, b, c, k[6], 9, -1069501632);
                c = this.gg(c, d, a, b, k[11], 14, 643717713);
                b = this.gg(b, c, d, a, k[0], 20, -373897302);
                a = this.gg(a, b, c, d, k[5], 5, -701558691);
                d = this.gg(d, a, b, c, k[10], 9, 38016083);
                c = this.gg(c, d, a, b, k[15], 14, -660478335);
                b = this.gg(b, c, d, a, k[4], 20, -405537848);
                a = this.gg(a, b, c, d, k[9], 5, 568446438);
                d = this.gg(d, a, b, c, k[14], 9, -1019803690);
                c = this.gg(c, d, a, b, k[3], 14, -187363961);
                b = this.gg(b, c, d, a, k[8], 20, 1163531501);
                a = this.gg(a, b, c, d, k[13], 5, -1444681467);
                d = this.gg(d, a, b, c, k[2], 9, -51403784);
                c = this.gg(c, d, a, b, k[7], 14, 1735328473);
                b = this.gg(b, c, d, a, k[12], 20, -1926607734);
                a = this.hh(a, b, c, d, k[5], 4, -378558);
                d = this.hh(d, a, b, c, k[8], 11, -2022574463);
                c = this.hh(c, d, a, b, k[11], 16, 1839030562);
                b = this.hh(b, c, d, a, k[14], 23, -35309556);
                a = this.hh(a, b, c, d, k[1], 4, -1530992060);
                d = this.hh(d, a, b, c, k[4], 11, 1272893353);
                c = this.hh(c, d, a, b, k[7], 16, -155497632);
                b = this.hh(b, c, d, a, k[10], 23, -1094730640);
                a = this.hh(a, b, c, d, k[13], 4, 681279174);
                d = this.hh(d, a, b, c, k[0], 11, -358537222);
                c = this.hh(c, d, a, b, k[3], 16, -722521979);
                b = this.hh(b, c, d, a, k[6], 23, 76029189);
                a = this.hh(a, b, c, d, k[9], 4, -640364487);
                d = this.hh(d, a, b, c, k[12], 11, -421815835);
                c = this.hh(c, d, a, b, k[15], 16, 530742520);
                b = this.hh(b, c, d, a, k[2], 23, -995338651);
                a = this.ii(a, b, c, d, k[0], 6, -198630844);
                d = this.ii(d, a, b, c, k[7], 10, 1126891415);
                c = this.ii(c, d, a, b, k[14], 15, -1416354905);
                b = this.ii(b, c, d, a, k[5], 21, -57434055);
                a = this.ii(a, b, c, d, k[12], 6, 1700485571);
                d = this.ii(d, a, b, c, k[3], 10, -1894986606);
                c = this.ii(c, d, a, b, k[10], 15, -1051523);
                b = this.ii(b, c, d, a, k[1], 21, -2054922799);
                a = this.ii(a, b, c, d, k[8], 6, 1873313359);
                d = this.ii(d, a, b, c, k[15], 10, -30611744);
                c = this.ii(c, d, a, b, k[6], 15, -1560198380);
                b = this.ii(b, c, d, a, k[13], 21, 1309151649);
                a = this.ii(a, b, c, d, k[4], 6, -145523070);
                d = this.ii(d, a, b, c, k[11], 10, -1120210379);
                c = this.ii(c, d, a, b, k[2], 15, 718787259);
                b = this.ii(b, c, d, a, k[9], 21, -343485551);
                x[0] = this.add32(a, x[0]);
                x[1] = this.add32(b, x[1]);
                x[2] = this.add32(c, x[2]);
                x[3] = this.add32(d, x[3]);
            };
            MD5.cmn = function (q, a, b, x, s, t) {
                a = this.add32(this.add32(a, q), this.add32(x, t));
                return this.add32((a << s) | (a >>> (32 - s)), b);
            };
            MD5.ff = function (a, b, c, d, x, s, t) {
                return this.cmn((b & c) | ((~b) & d), a, b, x, s, t);
            };
            MD5.gg = function (a, b, c, d, x, s, t) {
                return this.cmn((b & d) | (c & (~d)), a, b, x, s, t);
            };
            MD5.hh = function (a, b, c, d, x, s, t) {
                return this.cmn(b ^ c ^ d, a, b, x, s, t);
            };
            MD5.ii = function (a, b, c, d, x, s, t) {
                return this.cmn(c ^ (b | (~d)), a, b, x, s, t);
            };
            MD5.md51 = function (s) {
                var txt = '';
                var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i;
                for (i = 64; i <= s.length; i += 64) {
                    this.md5cycle(state, this.md5blk(s.substring(i - 64, i)));
                }
                s = s.substring(i - 64);
                var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (i = 0; i < s.length; i++)
                    tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
                tail[i >> 2] |= 0x80 << ((i % 4) << 3);
                if (i > 55) {
                    this.md5cycle(state, tail);
                    for (i = 0; i < 16; i++)
                        tail[i] = 0;
                }
                tail[14] = n * 8;
                this.md5cycle(state, tail);
                return state;
            };
            MD5.md5blk = function (s) {
                var md5blks = [], i;
                for (i = 0; i < 64; i += 4) {
                    md5blks[i >> 2] = s.charCodeAt(i)
                        + (s.charCodeAt(i + 1) << 8)
                        + (s.charCodeAt(i + 2) << 16)
                        + (s.charCodeAt(i + 3) << 24);
                }
                return md5blks;
            };
            MD5.rhex = function (n) {
                var s = '', j = 0;
                for (; j < 4; j++)
                    s += this.hex_chr[(n >> (j * 8 + 4)) & 0x0F]
                        + this.hex_chr[(n >> (j * 8)) & 0x0F];
                return s;
            };
            MD5.add32 = function (a, b) {
                this.add_ext = this.add_ext != null
                    ? this.add_ext
                    : (this.add_ext = this.calculate('hello') != '5d41402abc4b2a76b9719d911017c592');
                if (this.add_ext) {
                    var lsw = (a & 0xFFFF) + (b & 0xFFFF), msw = (a >> 16) + (b >> 16) + (lsw >> 16);
                    return (msw << 16) | (lsw & 0xFFFF);
                }
                return (a + b) & 0xFFFFFFFF;
            };
            MD5.add_ext = null;
            MD5.hex_chr = '0123456789abcdef'.split('');
            return MD5;
        })();
        encoders.MD5 = MD5;
    })(encoders = proto.encoders || (proto.encoders = {}));
})(proto || (proto = {}));
var proto;
(function (proto) {
    var encoders;
    (function (encoders) {
        var LZW = (function () {
            function LZW() {
                this.name = 'lzw';
            }
            LZW.prototype.encode = function (input) {
                var dict = {};
                var data = (input + '').split('');
                var out = [];
                var currChar;
                var phrase = data[0];
                var code = 256;
                for (var i = 1; i < data.length; i++) {
                    currChar = data[i];
                    if (dict[phrase + currChar] != null) {
                        phrase += currChar;
                    }
                    else {
                        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                        dict[phrase + currChar] = code;
                        code++;
                        phrase = currChar;
                    }
                }
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                for (var i = 0; i < out.length; i++) {
                    out[i] = String.fromCharCode(out[i]);
                }
                return out.join('');
            };
            LZW.prototype.decode = function (encrypted) {
                var dict = {};
                var data = (encrypted + '').split('');
                var currChar = data[0];
                var oldPhrase = currChar;
                var out = [currChar];
                var code = 256;
                var phrase;
                for (var i = 1; i < data.length; i++) {
                    var currCode = data[i].charCodeAt(0);
                    if (currCode < 256) {
                        phrase = data[i];
                    }
                    else {
                        phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
                    }
                    out.push(phrase);
                    currChar = phrase.charAt(0);
                    dict[code] = oldPhrase + currChar;
                    code++;
                    oldPhrase = phrase;
                }
                return out.join('');
            };
            return LZW;
        })();
        encoders.LZW = LZW;
    })(encoders = proto.encoders || (proto.encoders = {}));
})(proto || (proto = {}));
var proto;
(function (proto) {
    var encoders;
    (function (encoders) {
        var Base64 = (function () {
            function Base64() {
                this.name = 'base64';
                this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            }
            Base64.prototype.encode = function (input) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                var e = input;
                e = this._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64;
                    }
                    else if (isNaN(i)) {
                        a = 64;
                    }
                    ;
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
                }
                return t;
            };
            Base64.prototype.decode = function (encrypted) {
                var e = encrypted;
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (f < e.length) {
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) {
                        t = t + String.fromCharCode(r);
                    }
                    if (a != 64) {
                        t = t + String.fromCharCode(i);
                    }
                }
                t = this._utf8_decode(t);
                return t;
            };
            Base64.prototype._utf8_encode = function (e) {
                e = e.replace(/\r\n/g, "\n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                    }
                    else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128);
                    }
                    else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128);
                    }
                }
                return t;
            };
            Base64.prototype._utf8_decode = function (e) {
                var t = "";
                var n = 0;
                var r = 0;
                var c1 = 0;
                var c2 = 0;
                var c3 = 0;
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++;
                    }
                    else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2;
                    }
                    else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3;
                    }
                }
                return t;
            };
            return Base64;
        })();
        encoders.Base64 = Base64;
    })(encoders = proto.encoders || (proto.encoders = {}));
})(proto || (proto = {}));
/// <reference path="../imports.d.ts" />
/// <reference path="../encoders/ITextEncoder.ts" />
/// <reference path="../encoders/MD5.ts" />
/// <reference path="../encoders/LZW.ts" />
/// <reference path="../encoders/Base64.ts" />
var proto;
(function (proto) {
    var encoders;
    (function (encoders) {
        var TextEncoders = (function () {
            function TextEncoders() {
                var _this = this;
                this.cache = {};
                // Define standard encoders
                this.encoders = [
                    new encoders.MD5(),
                    new encoders.LZW(),
                    new encoders.Base64(),
                ];
                // Create initial cache map
                this.encoders.forEach(function (item) {
                    _this.cache[item.name] = item;
                });
            }
            TextEncoders.prototype.getEncoder = function (name) {
                var _this = this;
                var found = (name in this.cache) ? this.cache[name] : null;
                if (this.encoders) {
                    this.encoders.forEach(function (item) {
                        if (found)
                            return;
                        if (item.name == name)
                            found = item;
                        _this.cache[name] = item;
                    });
                }
                return found;
            };
            TextEncoders.prototype.setEncoder = function (name, encoder) {
                var curr = this.getEncoder(name);
                var index = this.encoders.indexOf(curr);
                if (index >= 0) {
                    this.encoders[index] = encoder;
                }
                else {
                    this.encoders.push(encoder);
                }
                this.cache[name] = encoder;
            };
            TextEncoders.prototype.hashCode = function (input) {
                var val = input;
                var hash = 0, i, chr, len;
                if (val.length == 0)
                    return hash;
                for (i = 0, len = val.length; i < len; i++) {
                    chr = val.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                return hash;
            };
            return TextEncoders;
        })();
        encoders.TextEncoders = TextEncoders;
    })(encoders = proto.encoders || (proto.encoders = {}));
})(proto || (proto = {}));
/// <reference path="../imports.d.ts" />
/// <reference path="../imports.d.ts" />
/// <reference path="../parsers/IHtmlDocumentParser.ts" />
var proto;
(function (proto) {
    var parsers;
    (function (parsers) {
        var BasicHtmlDocumentParser = (function () {
            function BasicHtmlDocumentParser(document) {
                this.document = document;
            }
            BasicHtmlDocumentParser.prototype.elem = function (domElem) {
                return (domElem || this.document.body);
            };
            BasicHtmlDocumentParser.prototype.define = function (type) {
                return this.document.createElement(type);
            };
            BasicHtmlDocumentParser.prototype.createElement = function (elemType, contents, parentElem, callback) {
                var node = this.define(elemType);
                if (contents) {
                    node.innerText = contents;
                }
                this.elem(parentElem).appendChild(node);
                if (callback)
                    callback(node);
            };
            BasicHtmlDocumentParser.prototype.appendScript = function (source, parentElem, callback) {
                var elem = this.define('script');
                if (source) {
                    elem.textContent = source;
                }
                this.elem(parentElem).appendChild(elem);
                if (callback)
                    callback(elem);
            };
            BasicHtmlDocumentParser.prototype.linkResource = function (url, parentElem, async, callback) {
                if (/\.js$/.test(url)) {
                    var elem = this.define('script');
                    if (elem) {
                        elem.onload = function (evt) {
                            if (callback)
                                callback(elem);
                        };
                        if (typeof async !== 'undefined') {
                            elem.setAttribute("async", async ? 'true' : '');
                        }
                        elem.setAttribute('src', url);
                        this.elem(parentElem).appendChild(elem);
                    }
                }
                else if (/\.css$/.test(url)) {
                    var link = this.define('link');
                    link.setAttribute('type', 'text/css');
                    link.setAttribute('rel', 'stylesheet');
                    link.setAttribute('href', url);
                    link.onload = function (evt) {
                        if (callback)
                            callback(link);
                    };
                    this.elem(parentElem).appendChild(link);
                }
            };
            return BasicHtmlDocumentParser;
        })();
        parsers.BasicHtmlDocumentParser = BasicHtmlDocumentParser;
    })(parsers = proto.parsers || (proto.parsers = {}));
})(proto || (proto = {}));
/// <reference path="../imports.d.ts" />
/// <reference path="../encoders/TextEncoders.ts" />
/// <reference path="../parsers/IHtmlDocumentParser.ts" />
/// <reference path="../parsers/BasicHtmlDocumentParser.ts" />
var proto;
(function (proto) {
    var string;
    (function (string) {
        var StringPrototyped = (function () {
            function StringPrototyped(val) {
                this.val = val;
                // Define text encoders
                this.encoders = new proto.encoders.TextEncoders();
                // Check if the HTML DOM is available
                if (typeof document !== 'unddefined') {
                    this.dom = new proto.parsers.BasicHtmlDocumentParser(document);
                }
            }
            //#region "Encoders and Compression"
            StringPrototyped.prototype.compress = function (callback, encoder) {
                if (!encoder)
                    encoder = 'lzw';
                var worker = this.encoders.getEncoder(encoder);
                if (worker) {
                    var input = this.val;
                    var output = this.val = worker.encode(input);
                    if (typeof callback === 'function') {
                        callback(output);
                    }
                    return this; //new StringPrototyped(output);
                }
                else
                    throw new Error('Compression Failed. Encoder: ' + encoder);
            };
            StringPrototyped.prototype.decompress = function (callback, encoder) {
                if (!encoder)
                    encoder = 'lzw';
                var worker = this.encoders.getEncoder(encoder);
                if (worker) {
                    var input = this.val;
                    var output = this.val = worker.decode(input);
                    if (typeof callback === 'function') {
                        callback(output);
                    }
                    return this; //new StringPrototyped(output);
                }
                else
                    throw new Error('Decompression Failed. Encoder: ' + encoder);
            };
            //#endregion "Encoders and Compression"
            //#region "Helper Functions"
            StringPrototyped.prototype.md5 = function (input) {
                return this.encoders.getEncoder('md5').encode(input || this.val);
            };
            StringPrototyped.prototype.hashCode = function (input) {
                return this.encoders.hashCode(input || this.val);
            };
            StringPrototyped.prototype.eval = function (callback) {
                var input = this.val;
                var val = eval(input);
                if (typeof callback === 'function') {
                    callback(val);
                }
                return this;
            };
            StringPrototyped.prototype.then = function (callback) {
                // Run the callback (if specified)
                if (typeof callback === 'function') {
                    callback(this.val);
                }
                return this;
            };
            //#endregion "Helper Functions"
            //#region "DOM Operations"
            StringPrototyped.prototype.insert = function (type, callback) {
                if (this.dom) {
                    this.dom.createElement(type, this.val, null, callback);
                }
                return this;
            };
            StringPrototyped.prototype.script = function (parentElem, callback) {
                if (this.dom) {
                    this.dom.appendScript(this.val, parentElem, callback);
                }
                return this;
            };
            StringPrototyped.prototype.inject = function (callback, async) {
                if (this.dom) {
                    this.dom.linkResource(this.val, null, async, callback);
                }
                return this;
            };
            return StringPrototyped;
        })();
        string.StringPrototyped = StringPrototyped;
    })(string = proto.string || (proto.string = {}));
})(proto || (proto = {}));
