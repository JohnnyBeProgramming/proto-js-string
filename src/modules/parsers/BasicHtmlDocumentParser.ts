/// <reference path="../imports.d.ts" />
/// <reference path="../parsers/IHtmlDocumentParser.ts" />

module proto.parsers {

    export class BasicHtmlDocumentParser implements IHtmlDocumentParser {

        public constructor(private document: HTMLDocument) { }

        public elem(domElem?: HTMLElement): HTMLElement {
            return (domElem || this.document.body);
        }

        public define(type: string): HTMLElement {
            return this.document.createElement(type);
        }

        public createElement(elemType: string, contents?: string, parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void) {
            var node = this.define(elemType);
            if (contents) {
                node.innerText = contents;
            }
            this.elem(parentElem).appendChild(node);
            if (callback) callback(node);
        }

        public appendScript(source: string, parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void) {
            var elem = this.define('script');
            if (source) {
                elem.textContent = source;
            }
            this.elem(parentElem).appendChild(elem);
            if (callback) callback(elem);
        }

        public linkResource(url: string, parentElem?: HTMLElement, async?: boolean, callback?: (elem: HTMLElement) => void) {
            if (/\.js$/.test(url)) {
                var elem = this.define('script');
                if (elem) {
                    elem.onload = function (evt) {
                        if (callback) callback(elem);
                    }
                    if (typeof async !== 'undefined') {
                        elem.setAttribute("async", async ? 'true' : '');
                    }
                    elem.setAttribute('src', url);
                    this.elem(parentElem).appendChild(elem);
                }
            } else if (/\.css$/.test(url)) {
                var link = this.define('link');
                link.setAttribute('type', 'text/css');
                link.setAttribute('rel', 'stylesheet');
                link.setAttribute('href', url);
                link.onload = function (evt) {
                    if (callback) callback(link);
                }
                this.elem(parentElem).appendChild(link);
            }
        }

    }


}