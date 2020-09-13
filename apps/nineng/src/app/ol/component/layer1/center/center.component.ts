import { Component, OnInit, AfterViewInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Fill, Stroke } from 'ol/style';
import CircleStyle from 'ol/style/Circle';
import { Source } from 'ol/source';


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit, AfterViewInit {

  map: Map;
  view: View;
  tile: Tile;
  source: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.init();
  }

  init() {
    this.view = new View({
      center: [0, 0],
      zoom: 1
    });

    this.tile = new Tile({
      source: new OSM()
    });

    this.source = new VectorSource({
      url: '../../../../assets/geodata/switzerland.geojson',
      format: new GeoJSON()
    });

    const style = new Style({
      fill: new Fill({
        color: 'rgba(255,255,255, 0.6)'
      }),
      stroke: new Stroke({
        color: '#319FD3',
        width: 1
      }),
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({
          color: 'rgba(255,255,255,0.6)'
        }),
        stroke: new Stroke({
          color: '#319FD3',
          width: 1,
        })
      })
    });

    const vectorLayer = new VectorLayer({
      source: this.source,
      style: style
    });

    this.map = new Map({
      view: this.view,
      layers: [
        this.tile,
        vectorLayer
      ],
      target: 'map3'
    });
  }


  zoomtoswitzerland() {
    const feature = this.source.getFeatures()[0];
    const polygon = feature.getGeometry().getExtent();
    this.view.fit(polygon, { padding: [170, 50, 30, 150], maxZoom: 12 });
  }

  zoomtolausanne() {
    const feature = this.source.getFeatures()[1];
    const point = feature.getGeometry().getExtent();
    this.view.fit(point, { padding: [170, 50, 30, 150], minResolution: 7 })
  }

  centerlausanne() {
    const feature = this.source.getFeatures()[1];
    const point = feature.getGeometry();
    const size = this.map.getSize()
    this.view.centerOn(point.getExtent(), size, [570, 500]);
  }

}
