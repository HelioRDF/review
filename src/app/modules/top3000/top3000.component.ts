import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-top3000',
  templateUrl: './top3000.component.html',
  styleUrls: ['../table.scss']
})
export class Top3000Component {


  constructor(public wordListService: WordListService) { }
  public listaAprendendo: Array<Word> = [];
  public emitEvent = new EventEmitter();

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

  public memorizada(event: number) {
    this.listaAprendendo.splice(event, 1)
  }




}


