import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { OlLayersService } from '../ol-layers.service';

import { defaultControl, attributionControl } from '../controls'

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.scss']
})
export class AttributionComponent implements OnInit {

  map: Map = undefined;
  constructor(
    private olLayersService: OlLayersService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.map = new Map({
      view: new View({
        center: [14148244.020765709, 4516053.955067737],
        zoom: 17
      }),
      controls: defaultControl,
      target: 'attribution'
    });

    this.olLayersService.addTileLayerWithOSM(this.map);


    this.checkSize();
  }

  checkSize() {
    const small = this.map.getSize();
    if (small[0] < 900) {
      attributionControl.setCollapsed(true);
      attributionControl.setCollapsible(true);
    }
  }

}
