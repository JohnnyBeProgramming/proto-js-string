/// <reference path="../imports.d.ts" />
/// <reference path="../encoders/ITextEncoder.ts" />
/// <reference path="../encoders/MD5.ts" />
/// <reference path="../encoders/URL.ts" />
/// <reference path="../encoders/LZW.ts" />
/// <reference path="../encoders/Base64.ts" />

module proto.encoders {

    export class TextEncoders {

        public cache: any = {};
        public encoders: ITextEncoder[];

        constructor() {
            // Define standard encoders
            this.encoders = [
                new MD5(),
                new URL(),
                new LZW(),
                new Base64(),
            ];

            // Create initial cache map
            this.encoders.forEach((item) => {
                this.cache[item.name] = item;
            });
        }

        public getEncoder(name: string): ITextEncoder {
            var found = (name in this.cache) ? this.cache[name] : null;
            if (this.encoders) {
                this.encoders.forEach((item) => {
                    if (found) return;
                    if (item.name == name) found = item;
                    this.cache[name] = item;
                });
            }
            return found;
        }

        public setEncoder(name: string, encoder: ITextEncoder) {
            var curr = this.getEncoder(name);
            var index = this.encoders.indexOf(curr);
            if (index >= 0) {
                this.encoders[index] = encoder;
            } else {
                this.encoders.push(encoder);
            }
            this.cache[name] = encoder;
        }
    
        public hashCode(input: string): number {
        var val = input;
        var hash = 0, i, chr, len;
        if (val.length == 0) return hash;
        for (i = 0, len = val.length; i < len; i++) {
            chr = val.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    }

}