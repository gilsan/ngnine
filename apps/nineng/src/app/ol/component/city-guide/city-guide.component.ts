import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import { Vector } from 'ol/source';
import { GeoJSON } from 'ol/format';
import Feature from 'ol/Feature';
import { Style, Circle, Fill, Stroke, Text } from 'ol/style';
import { Layer } from 'ol/layer';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import OverlayPositioning from 'ol/OverlayPositioning';
// import { ausCitiesStyle, changeCitiesLayerColor} from './city-util';

@Component({
  selector: 'app-city-guide',
  templateUrl: './city-guide.component.html',
  styleUrls: ['./city-guide.component.scss']
})
export class CityGuideComponent implements OnInit {

  map: Map;
  theHtmlString: string = '';
  cityImage: string;
  cityName: string;
  cities = ['Perth', 'Adelaide', 'Melbourne', 'Brisbane', 'Darwin', 'Hobart', 'Sydney'];
  currentIndex = 0;

  austCitiesLayers: VectorLayer;
  content: any;
  popoverTextLayer: any;

  constructor() { }

  ngOnInit(): void {
    this.init();
    this.addoverlay();
    this.getMapEvents();

    this.austCitiesLayer();
  }

  init() {

    this.map = new Map({
      view: new View({
        center: [15091875.539375868, -2890099.0297847847],
        zoom: 1,
        extent: [10871730.925139438, -7383855.161194234, 20254914.498867575, 103259.35938291624],
      }),
      layers: [new Tile({
        source: new OSM()
      })
      ],
      target: 'openlayers-map'
    });
  }

  addoverlay() {
    const container = document.getElementById('popup');
    this.content = document.getElementById('popup-content');

    this.popoverTextLayer = new Overlay({
      element: container,
      positioning: OverlayPositioning.BOTTOM_CENTER,
      stopEvent: false
    });
    this.map.addOverlay(this.popoverTextLayer);
  }

  /******
   *  지도에 표식하기
   */
  austCitiesLayer() {
    // Australian Cities GeoJSON
    this.austCitiesLayers = new VectorLayer({
      source: new Vector({
        format: new GeoJSON(),
        url: '../../../../assets/aus/aust_cities.geojson'
      }),
      style: this.ausCitiesStyle(),
    });
    this.map.addLayer(this.austCitiesLayers);
  }

  /*****
   *  지도에 표시된 마크 클릭시 해당 정보 출력
   */
  getMapEvents() {
    this.map.on('click', (evt: any) => {
      this.map.forEachFeatureAtPixel(evt.pixel, (feature: Feature, layer: Layer) => {
        this.mainLogic(feature);
      });
    });


    this.map.on('pointermove', (evt: MapBrowserEvent) => {
      let isFeatureAtPixel = this.map.hasFeatureAtPixel(evt.pixel);
      if (isFeatureAtPixel) {
        const featureAtPixel = this.map.getFeaturesAtPixel(evt.pixel);
        this.theHtmlString = featureAtPixel[0].get('Cityname');
        this.popoverTextLayer.setPosition(evt.coordinate);
        this.content.innerHTML = `<p> ${this.theHtmlString}</p>`;
        this.map.getViewport().style.cursor = 'pointer';
        console.log(this.theHtmlString);
      } else {
        this.popoverTextLayer.setPosition(undefined);
        this.map.getViewport().style.cursor = '';
      }
    });
  }

  mainLogic(feature: Feature) {
    this.currentIndex = parseInt(feature.get('ID'));
    this.cityName = feature.get('Cityname');
    this.cityImage = feature.get('Cityimage');
    this.cityImage = `../../../../assets/aus/${this.cityImage}.jpg`;

    /*******
     *  중앙으로 이동
     */
    const coordinate = feature.get('geometry').getCoordinates();
    this.map.getView().animate({ zoom: 5 }, { center: coordinate });

    /***
     * 지오에 표시된 마크 색 변경
     */
    const ausCityFeatures = this.austCitiesLayers.getSource().getFeatures();
    ausCityFeatures.forEach((feature) => {
      feature.setStyle(this.ausCitiesStyle());
    });
    feature.setStyle(this.changeCitiesLayerColor());
  }

  /******
   *  마크에 대한 스타일 지정
  */

  ausCitiesStyle() {
    const ausCitiesStyle = (feature: Feature) => {
      let cityID = feature.get('ID');
      let cityIDString = cityID.toString();

      const styles = [
        new Style({
          image: new Circle({
            fill: new Fill({
              color: [77, 219, 105, 0.6]
            }),
            radius: 12,
            stroke: new Stroke({
              color: [6, 125, 34, 1],
              width: 2
            })
          }),
          text: new Text({
            text: cityIDString,
            scale: 1.5,
            fill: new Fill({
              color: [232, 26, 26, 1]
            }),
            stroke: new Stroke({
              color: [232, 26, 26, 1],
              width: 0.3
            })
          }),
        })
      ];
      return styles;
    }
    return ausCitiesStyle;
  }

  changeCitiesLayerColor() {
    const ausCitiesStyle = (feature: Feature) => {
      let cityID = feature.get('ID');
      let cityIDString = cityID.toString();

      const styles = [
        new Style({
          image: new Circle({
            fill: new Fill({
              color: [247, 26, 10, 0.5]
            }),
            radius: 12,
            stroke: new Stroke({
              color: [6, 125, 34, 1],
              width: 2
            })
          }),
          text: new Text({
            text: cityIDString,
            scale: 1.5,
            fill: new Fill({
              color: [87, 9, 9, 1]
            }),
            stroke: new Stroke({
              color: [87, 9, 9, 1],
              width: 0.5
            })
          }),
        })
      ];
      return styles;
    }
    return ausCitiesStyle;
  }

  onInputChange(city: string) {
    const ausCityFeatures = this.austCitiesLayers.getSource().getFeatures();

    ausCityFeatures.forEach((feature) => {
      const cityName = feature.get('Cityname');
      if (cityName === city) {
        this.mainLogic(feature);
      }
    })
  }


}
