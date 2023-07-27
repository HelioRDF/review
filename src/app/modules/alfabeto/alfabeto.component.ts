import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-alfabeto',
  templateUrl: './alfabeto.component.html',
  styleUrls: ['../table.scss']
})
export class AlfabetoComponent {

  constructor(public wordListService: WordListService) { }
  public listaVogal: Array<Word> = [];
  public listaConsoante: Array<Word> = [];
  public emitEvent = new EventEmitter();

  ngOnInit(): void {
    this.wordListService.wordListVogal().subscribe({
      next: (res: Array<Word>) => {
        this.listaVogal = res
        console.log(res)
      },
      error: (err: any) => err
    }
    );    

    this.wordListService.wordListConsoante().subscribe({
      next: (res: Array<Word>) => {
        this.listaConsoante = res
        console.log(res)
      },
      error: (err: any) => err
    }
    );   

    this.wordListService.emitEvent.subscribe(
      {
        next: (res: any) => {
          alert(`Voce adicionou => ${res}`)
          return this.listaVogal.push(res)
        },
        error: (err: any) => console.log(err)
      });
  }

  

  public vogalMemorizada(event: number) {
    this.listaVogal.splice(event, 1)
  }

  public consoanteMemorizada(event: number) {
    this.listaConsoante.splice(event, 1)
  }



}
