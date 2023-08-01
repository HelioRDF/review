import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../interface/word';

@Injectable({
  providedIn: 'root'
})
export class JsonListService implements OnInit {
  data: any; // Objeto para armazenar os dados do arquivo JSON

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  public listaAlfabeto(): Observable<any> {
    return this.http.get<any>('assets/json/alfabeto.json');
  }

  public listaNumeros(): Observable<any> {
    return this.http.get<any>('assets/json/numero.json');
  }

  public listaVerbos(): Observable<any> {
    return this.http.get<any>('assets/json/verbo.json');
  }
  public listaTop3000(): Observable<any> {
    return this.http.get<any>('assets/json/top3000.json');
  }



}
