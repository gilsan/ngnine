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
    this.getCoodinate();
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
        //  center: fromLonLat([127.024612, 37.532600]),
        center: [14221908.512961352, 4383249.254145688],
        zoom: 4,
        extent: [13803222.07858921, 3881859.326564235, 14731051.89303118, 4778675.331052711]
      })
    });

  }

  getCoodinate() {
    this.map.on('click', (evt: any) => {
      // console.log(evt.coordinate);

    });
  }

}
