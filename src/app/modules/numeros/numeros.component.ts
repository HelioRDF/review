import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { JsonListService } from 'src/app/services/json-list.service';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['../table.scss']
})
export class NumerosComponent {


  constructor(public top3000: JsonListService) { }
  public numeros: Array<Word> = [];
  public emitEvent = new EventEmitter();

  ngOnInit(): void {
    this.top3000.listaNumeros().subscribe({
      next: (res:any) => {
        this.numeros = res.numero
      },
      error: (err: any) => err
    })
  }

  public memorizada(event: number) {
    this.numeros.splice(event, 1)
  }




}


