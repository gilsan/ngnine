import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';


@Component({
  selector: 'app-ol-proj',
  templateUrl: './ol-proj.component.html',
  styleUrls: ['./ol-proj.component.scss']
})
export class OlProjComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    this.map = new Map({
      target: 'map2',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([127.024612, 37.532600]),
        zoom: 4
      })
    });

  }

}
