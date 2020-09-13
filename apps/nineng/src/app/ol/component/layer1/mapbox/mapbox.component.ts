import { Component, OnInit } from '@angular/core';

import View from 'ol/View';
import Map from 'ol/Map';

import { OSM } from 'ol/source';
import { Tile } from 'ol/layer';
import { fromLonLat, getUserProjection } from 'ol/proj';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTile from 'ol/source/VectorTile';

import MVT from 'ol/format/MVT';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Extent } from 'ol/interaction';
import { get as getProjection } from 'ol/proj';
import { Fill, Icon, Stroke, Style, Text } from 'ol/style';

function tileUrlFunction(tileCord) { }


@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {

  map: Map;

  constructor() { }

  ngOnInit(): void {
  }

  initialize() {

  }

}
