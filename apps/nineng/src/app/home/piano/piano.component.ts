import { ChangeDetectionStrategy, HostListener, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, merge } from 'rxjs';
import { MIDI_MESSAGES, MIDI_SUPPORT, notes, toData, toFrequency } from '@ng-web-apis/midi';
import { catchError, map, scan, startWith, switchMap } from 'rxjs/operators';


import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';


@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {


  readonly octaves = Array.from({ length: 24 }, (_, i) => i + 48);
  map;
  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([160, 38]),
        zoom: 4
      })
    });
  }

  getClass(note: number) {
    //  return {"_active": true};
  }

}
