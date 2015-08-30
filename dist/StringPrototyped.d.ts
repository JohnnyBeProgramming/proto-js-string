/// <reference path="../src/modules/imports.d.ts" />
declare module proto.encoders {
    interface ITextEncoder {
        name: string;
        encode(input: string): string;
        decode(encrypted: string): string;
    }
}
declare module proto.encoders {
    class MD5 implements ITextEncoder {
        name: string;
        encode(input: string): string;
        decode(encrypted: string): string;
        static calculate(input: string): string;
        private static add_ext;
        private static hex_chr;
        private static hex(input);
        private static md5cycle(x, k);
        private static cmn(q, a, b, x, s, t);
        private static ff(a, b, c, d, x, s, t);
        private static gg(a, b, c, d, x, s, t);
        private static hh(a, b, c, d, x, s, t);
        private static ii(a, b, c, d, x, s, t);
        private static md51(s);
        private static md5blk(s);
        private static rhex(n);
        private static add32(a, b);
    }
}
declare module proto.encoders {
    class URL implements ITextEncoder {
        name: string;
        encode(input: string): string;
        decode(encrypted: string): string;
    }
}
declare module proto.encoders {
    class LZW implements ITextEncoder {
        name: string;
        encode(input: string): string;
        decode(encrypted: string): string;
    }
}
declare module proto.encoders {
    class Base64 implements ITextEncoder {
        name: string;
        private _keyStr;
        encode(input: string): string;
        decode(encrypted: string): string;
        private _utf8_encode(e);
        private _utf8_decode(e);
    }
}
declare module proto.encoders {
    class TextEncoders {
        cache: any;
        encoders: ITextEncoder[];
        constructor();
        getEncoder(name: string): ITextEncoder;
        setEncoder(name: string, encoder: ITextEncoder): void;
        hashCode(input: string): number;
    }
}
declare module proto.parsers {
    interface IHtmlDocumentParser {
        createElement(elemType: string, contents?: string, parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void): any;
        appendScript(source: string, parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void): any;
        linkResource(url: string, parentElem?: HTMLElement, async?: boolean, callback?: (elem: HTMLElement) => void): any;
    }
}
declare module proto.parsers {
    class BasicHtmlDocumentParser implements IHtmlDocumentParser {
        private document;
        constructor(document: HTMLDocument);
        elem(domElem?: HTMLElement): HTMLElement;
        define(type: string): HTMLElement;
        createElement(elemType: string, contents?: string, parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void): void;
        appendScript(source: string, parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void): void;
        linkResource(url: string, parentElem?: HTMLElement, async?: boolean, callback?: (elem: HTMLElement) => void): void;
    }
}
declare module proto.string {
    class StringPrototyped {
        val: string;
        dom: proto.parsers.IHtmlDocumentParser;
        encoders: proto.encoders.TextEncoders;
        constructor(val: string);
        encode(type?: string): string;
        decode(type?: string): string;
        compress(callback: (ctx: string) => void, encoder?: string): StringPrototyped;
        decompress(callback: (ctx: string) => void, encoder?: string): StringPrototyped;
        md5(input?: string): string;
        hashCode(input?: string): number;
        eval(callback: (result: any) => void): StringPrototyped;
        then(callback: (ctx: string) => void): StringPrototyped;
        insert(type: string, callback: (elem: HTMLElement) => void): StringPrototyped;
        script(parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void): StringPrototyped;
        inject(callback?: (elem: HTMLElement) => void, async?: boolean): StringPrototyped;
    }
}
