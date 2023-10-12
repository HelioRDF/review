import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { JsonListService } from 'src/app/services/json-list.service';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-verbos',
  templateUrl: './verbos.component.html',
  styleUrls: ['../table.scss'],
})
export class VerbosComponent {
  constructor(public top3000: JsonListService) {}
  public verbos: Array<Word> = [];
  public emitEvent = new EventEmitter();

  ngOnInit(): void {
    this.top3000.listaVerbos().subscribe({
      next: (res: any) => {
        this.verbos = res.verbo;
      },
      error: (err: any) => err,
    });
  }

  public memorizada(event: number) {
    this.verbos.splice(event, 1);
  }
}
