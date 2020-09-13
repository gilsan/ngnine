import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';

import Select from 'ol/interaction/Select';
import DragBox from 'ol/interaction/DragBox';

import { platformModifierKeyOnly } from 'ol/events/condition';

import { OlLayersService } from '../ol-layers.service';

import { defaultControl } from '../controls';

import { vectorSource } from '../ol-vector-source';
import Feature from 'ol/Feature';



@Component({
  selector: 'app-box-selection',
  templateUrl: './box-selection.component.html',
  styleUrls: ['./box-selection.component.scss']
})
export class BoxSelectionComponent implements OnInit {

  map: Map;
  constructor(
    private olLayersService: OlLayersService
  ) { }

  ngOnInit(): void {
    this.initialize();
    this.mainSelect();

  }

  initialize() {
    this.map = new Map({
      view: new View({
        // center: [14148244.020765709, 4516053.955067737],
        center: [0, 0],
        zoom: 2,
        constrainRotation: 16
      }),
      controls: defaultControl,
      target: 'boxSelection'
    });

    this.olLayersService.addTileLayerWithOSM(this.map);
    this.olLayersService.addVectorLayer(this.map);

  }

  mainSelect() {
    const select = new Select();
    this.map.addInteraction(select);

    const selectedFeatures = select.getFeatures();
    // DragBox interaction used to select features by drawing boxes.
    const dragBox = new DragBox({
      condition: platformModifierKeyOnly
    });
    this.map.addInteraction(dragBox);

    dragBox.on('boxend', () => {
      const rotaion = this.map.getView().getRotation();
      const oblique = rotaion % (Math.PI / 2) != 0;
      const candidateFeatures = oblique ? [] : selectedFeatures;

      const extent = dragBox.getGeometry().getExtent();
      vectorSource.forEachFeatureIntersectingExtent(extent, (feature) => {
        candidateFeatures.push(feature);
      });

      // 지도가 회전이 된경우
      if (oblique) {
        const anchor = [0, 0];
        const geometry = dragBox.getGeometry().clone();
        geometry.rotate(-rotaion, anchor);
        const extent$1 = geometry.getExtent();
        candidateFeatures.forEach((feature) => {
          const geometry = feature.getGeometry().clone;
          geometry.rotate(-rotaion, anchor);
          if (geometry.intersectsExtent(extent$1)) {
            selectedFeatures.push(feature);
          }
        })
      }
    });

    dragBox.on('boxstart', () => {
      selectedFeatures.clear();
    });


  }

}
