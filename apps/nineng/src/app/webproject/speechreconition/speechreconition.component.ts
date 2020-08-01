import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
// import { resultList, RxSpeechRecognitionService, SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-speechreconition',
  templateUrl: './speechreconition.component.html',
  styleUrls: ['./speechreconition.component.scss'],
  providers: [
    // RxSpeechRecognitionService,
    // SpeechRecognitionService,

  ],
})
export class SpeechreconitionComponent implements OnInit {

  @ViewChild('msg') msgEl: ElementRef;
  recognition: SpeechRecognition;
  message = '';

  speechRecognition$: Observable<SpeechRecognitionResultList>;

  constructor(
    // public service: RxSpeechRecognitionService,
    // private service: SpeechRecognitionService,
  ) {
    // console.log('MainComponent', this.service);

    // this.service.onstart = (e) => {
    //   console.log('onstart');
    // };
    // this.service.onresult = (e) => {
    //   this.message = e.results[0].item(0).transcript;
    //   console.log('MainComponent:onresult', this.message);
    // };
  }
  // Observable<SpeechRecognitionServiceEvent>
  ngOnInit(): void {
    //  this.init();
  }

  init() {
    // this.service
    //   .listen()
    //   .pipe(resultList)
    //   .subscribe((list: SpeechRecognitionResultList) => {
    //     this.message = list.item(0).item(0).transcript;
    //     console.log('RxComponent:onresult', this.message);
    //   });
  }





}
