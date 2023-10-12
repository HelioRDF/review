import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { JsonListService } from 'src/app/services/json-list.service';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-alfabeto',
  templateUrl: './alfabeto.component.html',
  styleUrls: ['../table.scss']
})
export class AlfabetoComponent {
  constructor(public top3000: JsonListService) { }
  public listaVogal: Array<Word> = [];
  public listaConsoante: Array<Word> = [];
  public emitEvent = new EventEmitter();

  ngOnInit(): void {
    this.top3000.listaAlfabeto().subscribe({
      next: (res: any) => {
        this.listaVogal = res.vogal
        this.listaConsoante = res.consoante
      },
      error: (err: any) => err
    })
  }



  public vogalMemorizada(event: number) {
    this.listaVogal.splice(event, 1)
  }

  public consoanteMemorizada(event: number) {
    this.listaConsoante.splice(event, 1)
  }




}
