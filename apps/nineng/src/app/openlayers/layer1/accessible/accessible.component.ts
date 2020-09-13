import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-accessible',
  templateUrl: './accessible.component.html',
  styleUrls: ['./accessible.component.scss']
})
export class AccessibleComponent implements OnInit {

  constructor() { }
  map: Map;

  ngOnInit(): void {
    this.initilizeMap();
  }

  initilizeMap() {

    this.map = new Map({
      target: 'map20',
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

}
