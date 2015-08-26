## Prototyped Javascript String Utils

This is a library of string encoders and other utility functions written purely for Javascript.

## Getting Started

You can install the library from npm:

    npm install proto-js-string --save-dev

## Example Usage

In NodeJS you can access the library with the require keyword:

    // Example usage:
    var StringPrototyped = require('proto-js-string');
    
    var enc = new StringPrototyped("This is a string message example...").compress()
    console.log('Encoded:', enc);
    
    var dec = new StringPrototyped(enc).decompress();
    console.log('Decoded:', dec);


A handy trick is to bind this to the string prototype object:

    // Extend the string class with override
    String.prototype[''] = function (callback) {
        var input = this;
        var ctx = new StringPrototyped(input);
        if (typeof callback === 'function') {
            callback(input);
        }
        return ctx;
    };

This enables you to do some neat string operations on any string object:

    // Inline prototype examples
    
    "Hello World"[''](alert)
    
    "alert(new Date())"['']().eval()
    
    "https://cdn.vendor/product/v1/lib.min.js"['']().inject()
    
    // Compression examples
    "This is a string message example..."['']().compress(function(enc) {
      console.log(' - Encoded: ', enc) 
    }).decompress(function(dec) {
      console.log(' - Decoded: ', dec) 
    })



## Motivation

This library was written because I needed access to a Lempel–Ziv–Welch (LZW) universal lossless data compression algorithm. After creating the utility, it became a good place to store other string operations (like creating a hash, md5 or base64).

## Tests

No tests have been set up for this project.

## Contributors

This library is provided "as-is" and totally free to use. No support comes with it. If you want to make a contribution or include a new feature, you can create a pull request. I will reserve the right to update this package as new requirements become available.   

## MIT License

Copyright (c) 2014-2015 JohnnyBeProgramming - http://www.prototyped.info

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
