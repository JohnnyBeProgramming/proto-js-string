/// <reference path="../imports.d.ts" />
/// <reference path="../encoders/TextEncoders.ts" />
/// <reference path="../parsers/IHtmlDocumentParser.ts" />
/// <reference path="../parsers/BasicHtmlDocumentParser.ts" />

module proto.string {

    export class StringPrototyped {

        public dom: proto.parsers.IHtmlDocumentParser;
        public encoders: proto.encoders.TextEncoders;

        constructor(public val: string) {
            // Define text encoders
            this.encoders = new proto.encoders.TextEncoders();

            // Check if the HTML DOM is available
            if (typeof document !== 'unddefined') {
                this.dom = new proto.parsers.BasicHtmlDocumentParser(document);
            }
        }

        //#region "Encoders and Compression"

        public encode(type?: string): string {
            var instance = this.encoders.getEncoder(type || 'base64');
            if (instance) {
                this.val = instance.encode(this.val);
                return this.val;
            }
            return null;
        }

        public decode(type?: string): string {
            var instance = this.encoders.getEncoder(type || 'base64');
            if (instance) {
                this.val = instance.decode(this.val);
                return this.val;
            }
            return null;
        }

        public compress(callback: (ctx: string) => void, encoder?: string): StringPrototyped {
            if (!encoder) encoder = 'lzw';
            var worker = this.encoders.getEncoder(encoder);
            if (worker) {
                var input = this.val;
                var output = this.val = worker.encode(input);
                if (typeof callback === 'function') {
                    callback(output);
                }
                return this; //new StringPrototyped(output);
            } else throw new Error('Compression Failed. Encoder: ' + encoder);
        }

        public decompress(callback: (ctx: string) => void, encoder?: string): StringPrototyped {
            if (!encoder) encoder = 'lzw';
            var worker = this.encoders.getEncoder(encoder);
            if (worker) {
                var input = this.val;
                var output = this.val = worker.decode(input);
                if (typeof callback === 'function') {
                    callback(output);
                }
                return this; //new StringPrototyped(output);
            } else throw new Error('Decompression Failed. Encoder: ' + encoder);
        }

        //#endregion "Encoders and Compression"


        //#region "Helper Functions"

        public md5(input?: string): string {
            return this.encoders.getEncoder('md5').encode(input || this.val);
        }

        public hashCode(input?: string): number {
            return this.encoders.hashCode(input || this.val);
        }

        public eval(callback: (result: any) => void): StringPrototyped {
            var input = this.val.toString();
            var val = eval(input);
            if (typeof callback === 'function') {
                callback(val);
            }
            return this;
        }

        public then(callback: (ctx: string) => void): StringPrototyped {
            // Run the callback (if specified)
            if (typeof callback === 'function') {
                callback(this.val);
            }
            return this;
        }

        //#endregion "Helper Functions"


        //#region "DOM Operations"

        public insert(type: string, callback: (elem: HTMLElement) => void): StringPrototyped {
            if (this.dom) {
                this.dom.createElement(type, this.val, null, callback);
            }
            return this;
        }

        public script(parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void): StringPrototyped {
            if (this.dom) {
                this.dom.appendScript(this.val, parentElem, callback);
            }
            return this;
        }

        public inject(callback?: (elem: HTMLElement) => void, async?: boolean): StringPrototyped {
            if (this.dom) {
                this.dom.linkResource(this.val, null, async, callback);
            }
            return this;
        }

        //#endregion "DOM Operations"

    }
        
}

// Register as a global class
if (typeof window !== 'undefined') {
    window['StringPrototyped'] = proto.string.StringPrototyped;
}