import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Word } from 'src/app/interface/word';
import { WordListService } from 'src/app/services/word-list.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss']
})
export class WordListComponent {

  constructor(public wordListService: WordListService) { }
  public showWord = true;
  public wordList: Array<Word> = [];
  public emitEvent = new EventEmitter();

  ngOnInit(): void {
    this.wordListService.wordList().subscribe({
      next: (res: any) => {    
        this.wordList = res
        this.wordList.forEach(e => e.mostrar=false);
        console.log(this.wordList)
      },
      error: (err: any) => err
    }
    );

    this.wordListService.emitEvent.subscribe(
      {
        next: (res: any) => {
          alert(`Voce adicionou => ${res}`)
           return this.wordList.push(res)
        },
        error: (err: any) => console.log(err)
      });
  }



  public visibility(mostrar:boolean) {
    console.log(event)

  }

  public memorizada(event: number) {
    this.wordList.splice(event, 1)
  }

  @ViewChild('audioPlayer') audioPlayer: any;
  
  reproduzirAudio() {
    this.audioPlayer.nativeElement.play();
  }


}
