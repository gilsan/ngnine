import { Component, OnInit, AfterViewInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { XYZ, Source } from 'ol/source';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-accessible',
  templateUrl: './accessible.component.html',
  styleUrls: ['./accessible.component.scss']
})
export class AccessibleComponent implements OnInit, AfterViewInit {

  constructor() { }
  map: Map = undefined;
  source: Source;
  layer: TileLayer;
  view: View;


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.initilizeMap();
  }

  initilizeMap() {
    /*
      this.source = new OlXYZ({
        url: 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png'
      });
  
      this.layer = new OlTileLayer({
        source: this.source
      });
  
      this.view = new OlView({
        center: OlProj.fromLonLat([6.661594, 50.433237]),
        zoom: 3
      });
      */


    this.map = new Map({
      target: 'accessible',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([127.100616, 37.402142]),
        zoom: 4
      })
    });
  }

  zoomin() {
    const view = this.map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom + 1);
  }

  zoomout() {
    const view = this.map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom - 1);
  }

}
