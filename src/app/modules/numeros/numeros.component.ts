import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['../table.scss']
})
export class NumerosComponent {


  constructor(public wordListService: WordListService) { }
  public numeros: Array<Word> = [];
  public emitEvent = new EventEmitter();

  ngOnInit(): void {
    this.wordListService.wordListNumero().subscribe({
      next: (res: Array<Word>) => {
        this.numeros = res
      },
      error: (err: any) => err
    }
    );

    this.wordListService.emitEvent.subscribe(
      {
        next: (res: any) => {
          alert(`Voce adicionou => ${res}`)
          return this.numeros.push(res)
        },
        error: (err: any) => console.log(err)
      });
  }

  public memorizada(event: number) {
    this.numeros.splice(event, 1)
  }




}


