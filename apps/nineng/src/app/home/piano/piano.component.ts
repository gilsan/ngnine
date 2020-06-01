import {ChangeDetectionStrategy, HostListener, Inject} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {EMPTY, Observable, Subject, merge} from 'rxjs';
import {MIDI_MESSAGES, MIDI_SUPPORT, notes, toData, toFrequency} from '@ng-web-apis/midi';
import {catchError, map, scan, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {


  readonly octaves = Array.from({length: 24}, (_, i) => i + 48);
  constructor() { }

  ngOnInit(): void {
  }

  getClass( note: number) {   
    //  return {"_active": true};
  }

}
