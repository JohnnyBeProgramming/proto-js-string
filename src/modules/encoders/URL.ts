module proto.encoders {
    
    export class URL implements ITextEncoder {

        public name: string = 'url';

        public encode(input: string): string {
            return encodeURIComponent(input);
        }

        public decode(encrypted: string): string {
            return decodeURIComponent(encrypted);
        }

    }
    
}