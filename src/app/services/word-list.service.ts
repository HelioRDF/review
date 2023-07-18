import { EventEmitter, Injectable } from '@angular/core';
import { Word } from '../interface/word';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordListService {

  constructor(private http: HttpClient) { }
  public emitEvent = new EventEmitter();
  private list:Array<string> =[]
  private url:string ="http://localhost:3000/"


  public wordList(): Observable<Array<Word>> {
    return this.http.get<Array<Word>>(`${this.url}word-list`)
      .pipe(
        res => res,
        error => error

      )
  }
}
