/// <reference path="../imports.d.ts" />

module proto.parsers {

    export interface IHtmlDocumentParser {

        createElement(elemType: string, contents?: string, parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void);

        appendScript(source: string, parentElem?: HTMLElement, callback?: (elem: HTMLElement) => void);

        linkResource(url: string, parentElem?: HTMLElement, async?: boolean, callback?: (elem: HTMLElement) => void);

    }

}