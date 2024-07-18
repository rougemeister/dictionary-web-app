export interface responseData {
    word: string;
    phonetic: string;
    phonetics: {
        text: string;
        audio: string;
        sourceUrl?: string |undefined;
        license?: {
            name: string;
            url: string;
        } | undefined;
    }[];
    meanings: {
        partOfSpeech: string;
        definitions: {
            definition: string;
            synonyms: never[];
            antonyms: never[];
            example?: string;
        }[];
        synonyms?: string[];
        antonyms?: string[];
    }[];
    license: any;
    sourceUrls: string[];
}

export interface Respose404Error {
    title:string,
    resolution:string,
    message:string
}