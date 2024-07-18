import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseData } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getWord(keyword:string){
    return this.http.get<responseData[]>('https://api.dictionaryapi.dev/api/v2/entries/en/'+keyword)
  }
}
