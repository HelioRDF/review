import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-aprendidas',
  templateUrl: './aprendidas.component.html',
  styleUrls: ['../table.scss']
})
export class AprendidasComponent {


  constructor(public wordListService: WordListService) { }
  public listaMemorizada: Array<Word> = [];
  public emitEvent = new EventEmitter();

  ngOnInit(): void {
    this.wordListService.wordListMemorizada().subscribe({
      next: (res: Array<Word>) => {
        this.listaMemorizada = res
        console.log(res)
      },
      error: (err: any) => err
    }
    );    

    this.wordListService.emitEvent.subscribe(
      {
        next: (res: any) => {
          alert(`Voce adicionou => ${res}`)
          return this.listaMemorizada.push(res)
        },
        error: (err: any) => console.log(err)
      });
  }

  public memorizada(event: number) {
    this.listaMemorizada.splice(event, 1)
  }



}


