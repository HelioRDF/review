import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { JsonListService } from 'src/app/services/json-list.service';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-aprendidas',
  templateUrl: './aprendidas.component.html',
  styleUrls: ['../table.scss']
})
export class AprendidasComponent {


  constructor(public top3000: JsonListService) { }
  public listaMemorizada: Array<Word> = [];
  public emitEvent = new EventEmitter();

    
  ngOnInit(): void {
    this.top3000.listaTop3000().subscribe({
      next: (res:any) => {
        this.listaMemorizada = res.aprendidas
      },
      error: (err: any) => err
    })
  }
  

  public memorizada(event: number) {
    this.listaMemorizada.splice(event, 1)
  }



}


