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
  // Defina suas propriedades e tipos aqui
  audio: HTMLAudioElement | null = null;
  audioButton: HTMLElement | null = null;

  constructor(public top3000: JsonListService) {
    this.audio = document.getElementById('audio') as HTMLAudioElement;
    this.audioButton = document.getElementById('audio-button');
  }
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


  toggleAudio(): void {
    if (this.audio) {
      if (this.audio.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  }

}
