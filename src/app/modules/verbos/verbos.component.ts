import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-verbos',
  templateUrl: './verbos.component.html',
  styleUrls: ['../table.scss']
})
export class VerbosComponent {


  constructor(public wordListService: WordListService) { }
  public verbos: Array<Word> = [];
  public emitEvent = new EventEmitter();

  ngOnInit(): void {
    this.wordListService.wordListVerbo().subscribe({
      next: (res: Array<Word>) => {
        this.verbos = res
      },
      error: (err: any) => err
    }
    );

    this.wordListService.emitEvent.subscribe(
      {
        next: (res: any) => {
          alert(`Voce adicionou => ${res}`)
          return this.verbos.push(res)
        },
        error: (err: any) => console.log(err)
      });
  }

  public memorizada(event: number) {
    this.verbos.splice(event, 1)
  }




}


