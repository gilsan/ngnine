import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.scss']
})
export class ManagerHomeComponent implements OnInit {

  long: string = '';
  lat: string = '';
  map: Map;
  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.map = new Map({
      target: 'basemap',
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


  onChange(name: string) { }
  onChangebox(name: string) { }

}
