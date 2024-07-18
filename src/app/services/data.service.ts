import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { responseData, Respose404Error } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchTerm:string='';
  lightThemeSet:boolean = false;
  currentTheme:string='light-mode';
  selectedFont:string='mono'
  fontFamilies:string[]=['sans serif','serif','mono']
  httpError:Respose404Error={
    message:'',
    title:'',
    resolution:''
  };
  currentWord :responseData=
    {
        word: "keyboard",
        phonetic: "/ˈkiːbɔːd/",
        phonetics: [
            {
                "text": "/ˈkibɔɹd/",
                "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
                "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1755168",
                "license": {
                    "name": "BY-SA 3.0",
                    "url": "https://creativecommons.org/licenses/by-sa/3.0"
                }
            },
            {
                text: "/ˈkiːbɔːd/",
                audio: ""
            },
            {
                "text": "/ˈkiːbɔːd/",
                "audio": ""
            }
        ],
        meanings: [
            {
                partOfSpeech: "noun",
                definitions: [
                    {
                        definition: "(etc.) A set of keys used to operate a typewriter, computer etc.",
                        synonyms: [],
                        antonyms: []
                    },
                    {
                        "definition": "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
                        "synonyms": [],
                        "antonyms": []
                    },
                    {
                        "definition": "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
                        "synonyms": [],
                        "antonyms": []
                    }
                ],
                synonyms: [
                    "electronic keyboard"
                ],
                "antonyms": []
            },
            {
                "partOfSpeech": "verb",
                "definitions": [
                    {
                        "definition": "To type on a computer keyboard.",
                        "synonyms": [],
                        "antonyms": [],
                        "example": "Keyboarding is the part of this job I hate the most."
                    }
                ],
                "synonyms": [],
                "antonyms": []
            }
        ],
        "license": {
            "name": "CC BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
        },
        "sourceUrls": [
            "https://en.wiktionary.org/wiki/keyboard"
        ]
    }

  constructor(private apiService:ApiService) { }
  getNewWord(){
    this.apiService.getWord(this.searchTerm).subscribe(
        (res)=>{
            this.currentWord=res[0]; 
            for (let i = 0; i < this.currentWord.phonetics.length; i++) {
                if (this.currentWord.phonetics[i].audio.length) {
                    this.currentWord.phonetics[0]=this.currentWord.phonetics[i];
                    return;
                }
            }
            console.log(res)
        },
        (err) => {
            this.httpError = err.error;
            // console.log(err)
        }
  )}
  toggleTheme(){
    this.lightThemeSet = !this.lightThemeSet
    this.lightThemeSet ?
    this.currentTheme="dark-mode":
    this.currentTheme="light-mode" 
    console.log('curr theme is :'+this.currentTheme);
  }
}
