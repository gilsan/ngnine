import { Injectable } from '@angular/core';

import View from 'ol/View';
import Map from 'ol/Map';

import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';

import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';

import GeoJSON from 'ol/format/GeoJSON';
import { vectorSource } from './ol-vector-source';

@Injectable({
  providedIn: 'root'
})
export class OlLayersService {

  addTileLayerWithOSM(map: Map) {
    const tailLayer = new TileLayer({
      source: new OSM()
    });

    return map.addLayer(tailLayer)
  }

  addVectorLayer(map: Map) {
    const vectorLayer = new VectorLayer({
      source: vectorSource
    });
    return map.addLayer(vectorLayer);

  }

}