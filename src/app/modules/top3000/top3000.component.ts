import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { WordListService } from 'src/app/services/word-list.service';

import { JsonListService } from 'src/app/services/json-list.service';

@Component({
  selector: 'app-top3000',
  templateUrl: './top3000.component.html',
  styleUrls: ['../table.scss']
})
export class Top3000Component {


  constructor(public wordListService: WordListService, public top3000: JsonListService) { }
  public listaAprendendo: any = [];
  public emitEvent = new EventEmitter();


  ngOnInit(): void {
    this.top3000.listaTop3000().subscribe({
      next: (res:any) => {
        this.listaAprendendo = res.aprendendo
      },
      error: (err: any) => err
    })

  }
  /**
   * 
  ngOnInit(): void {
    this.wordListService.wordListAprendendo().subscribe({
      next: (res: Array<Word>) => {
        this.listaAprendendo = res
      },
      error: (err: any) => err
    }
    );
    
    this.wordListService.emitEvent.subscribe(
      {
        next: (res: any) => {
          alert(`Voce adicionou => ${res}`)
          return this.listaAprendendo.push(res)
        },
        error: (err: any) => console.log(err)
      });
    }
    */

  public memorizada(event: number) {
    this.listaAprendendo.splice(event, 1)
  }








}


