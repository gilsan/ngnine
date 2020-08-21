import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import { toStringHDMS } from 'ol/coordinate.js';
import TileLayer from 'ol/layer/Tile';
import { toLonLat } from 'ol/proj.js';
import OSM from 'ol/source/OSM';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }


  initializeMap() {
    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');

    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: { duration: 250 }
    });

    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      overlays: [overlay],
      target: 'map4',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });

    map.on('singleclick', function (evt: any) {
      const coordinate = evt.coordinate;
      const hdms = toStringHDMS(toLonLat(coordinate));

      content.innerHTML = `<p>현 위치: </p><code>${hdms}</code>`;
      overlay.setPosition(coordinate);
    });

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    }










  }

}
