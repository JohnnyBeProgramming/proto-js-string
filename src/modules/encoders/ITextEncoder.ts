module proto.encoders {

    export interface ITextEncoder {
        name: string;
        encode(input: string): string;
        decode(encrypted: string): string;
    }

}