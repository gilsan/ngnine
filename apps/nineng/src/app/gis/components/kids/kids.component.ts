import { Component, OnInit, OnDestroy } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';

import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorImageLayer from 'ol/layer/VectorImage';
import { Group } from 'ol/layer';

import VectorSource from 'ol/source/Vector';
import { XYZ } from 'ol/source';

import GeoJSON from 'ol/format/GeoJSON';

import Overlay from 'ol/Overlay';

import Attribution from 'ol/control/Attribution';
import { defaults } from 'ol/control';

import Feature from 'ol/Feature';
import { Style, Fill, Text, Icon } from 'ol/style';

import { VectorSourceService } from '../../vector-source.service';
import { IFeature } from '../../models/small-lib';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { pointStyle, polygonStyle, polygonStyleWithEstateGubun } from '../../icon.style';

import { SubSink } from 'subsink';
import { vworldMap, vworldStateMap } from '../../layers';
import { vectorSourceLayerWitholygon } from '../../vector-source';


@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit, OnDestroy {

  map: Map;
  radioSelected: string;
  normalMap = true;
  normalStater = false;

  kidsTileMap: TileLayer;
  kidsTileStaterite: TileLayer;

  KidsGardenData: VectorImageLayer;
  mainMarketLayer: VectorImageLayer;
  estateGubunLayer: VectorImageLayer;

  vectorSource: VectorSource;
  mainMarketSource: VectorSource;
  estateGubunSource: VectorSource;

  overlayLayer: Overlay;
  featureList: IFeature;

  description: any;
  content: any;

  long: string = '';
  lat: string = '';
  private subs = new SubSink();
  extent = [];



  constructor(
    private service: VectorSourceService
  ) { }

  ngOnInit(): void {
    this.initilizeMap();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  initilizeMap() {
    /*********************************************************** */
    const container = document.getElementById('popup');
    this.content = document.getElementById('popup-content');
    this.description = document.getElementById('description');
    const closer = document.getElementById('popup-closer');

    //  const vBase = new vworld.Layers.Base('VBASE');

    this.overlayLayer = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: { duration: 250 }
    });
    // map.addOverlay(overlay);
    const attributionControl = new Attribution({
      collapsible: true
    });

    this.map = new Map({
      target: 'basemap',
      overlays: [this.overlayLayer],
      view: new View({
        center: [14148244.020765709, 4516053.955067737],
        zoom: 17
      }),
      controls: defaults({ attribution: false }).extend([attributionControl]),
    });

    // Base Layers
    // vword 지도
    this.kidsTileMap = vworldMap

    // vworld 항공지도
    this.kidsTileStaterite = vworldStateMap;

    // Base Layer Group
    const layerGroup = new Group({
      layers: [
        this.kidsTileMap, this.kidsTileStaterite,
      ]
    });
    this.map.addLayer(layerGroup);
    /**************************************************************** */
    // 벡터데이타
    this.loadVector();

    // 지도 이벤트
    this.onMapEvent();

    closer.onclick = () => {
      this.overlayLayer.setPosition(undefined);
      closer.blur();
      return false;
    }
  }

  loadVector() {
    // 작은도서관
    this.vectorSource = new VectorSource();
    this.KidsGardenData = new VectorImageLayer({
      source: this.vectorSource,
      visible: true,
      style: pointStyle,
      renderBuffer: 300
    });
    this.KidsGardenData.set('title', 'SMALL_LIB');
    this.map.addLayer(this.KidsGardenData);

    // 주요상권
    this.mainMarketSource = new VectorSource();
    this.mainMarketLayer = new VectorImageLayer({
      source: this.mainMarketSource,
      visible: false,
      style: polygonStyle,
    });
    this.mainMarketLayer.set('title', 'MAIN_MARKET');
    this.map.addLayer(this.mainMarketLayer);

    // this.mainMarketLayer = vectorSourceLayerWitholygon(this.map, this.mainMarketLayer, this.mainMarketSource);
    // this.mainMarketLayer.set('title', 'MAIN_MARKET');
    // this.map.addLayer(this.mainMarketLayer);

    // 지적도
    this.estateGubunSource = new VectorSource();
    this.estateGubunLayer = new VectorImageLayer({
      source: this.estateGubunSource,
      visible: false,
      style: polygonStyleWithEstateGubun,
    });
    this.estateGubunLayer.set('title', 'ESTATE_GUBUN');
    this.map.addLayer(this.estateGubunLayer);
  }

  vectorLoader() {

    this.subs.sink = this.service.getLayers(this.extent[0], this.extent[1], this.extent[2], this.extent[3])
      .subscribe((data: { page: {}, record: {}, result: { featureCollection: {} }, service: {}, status: string }) => {

        if (data.status === 'OK') {
          const features = new GeoJSON().readFeatures(data.result.featureCollection);
          this.vectorSource.addFeatures(features);
        }
      });

    this.subs.sink = this.service.getService(this.extent[0], this.extent[1], this.extent[2], this.extent[3], 'LT_C_DGMAINBIZ')
      .subscribe((data: { page: {}, record: {}, result: { featureCollection: {} }, service: {}, status: string }) => {
        if (data.status === 'OK') {
          const features = new GeoJSON().readFeatures(data.result.featureCollection);
          this.mainMarketSource.addFeatures(features);
        }
      });

    // 지적도
    this.subs.sink = this.service.getService(this.extent[0], this.extent[1], this.extent[2], this.extent[3], 'LP_PA_CBND_BUBUN')
      .subscribe((data: { page: {}, record: {}, result: { featureCollection: {} }, service: {}, status: string }) => {
        if (data.status === 'OK') {
          const features = new GeoJSON().readFeatures(data.result.featureCollection);
          this.estateGubunSource.addFeatures(features);
        }
      });

  }

  onMapEvent() {
    this.map.on('moveend', (e) => {
      this.extent = e.frameState.extent;
      this.vectorLoader();
    });

    this.map.on('click', (e) => {
      this.map.forEachFeatureAtPixel(e.pixel, (feature, layer) => {
        const clickedCoordinate = e.coordinate;
        const lbr_name = feature.get('lbr_name');
        const category = feature.get('category');
        const addr = feature.get('addr');
        const phne = feature.get('phne');

        this.overlayLayer.setPosition(clickedCoordinate);
        this.content.innerHTML = `<p>${lbr_name}<br/>${phne} </p>`;

        /*******
        *  중앙으로 이동
        */
        const coordinate = feature.get('geometry').getCoordinates();
        this.map.getView().animate({ zoom: 17 }, { center: coordinate });
      })
    });

    this.map.on('pointermove', (evt: MapBrowserEvent) => {
      let isFeatureAtPixel = this.map.hasFeatureAtPixel(evt.pixel);
      if (isFeatureAtPixel) {
        const featureAtPixel = this.map.getFeaturesAtPixel(evt.pixel);
        const theHtmlString = featureAtPixel[0].get('lbr_name');
        this.overlayLayer.setPosition(evt.coordinate);
        this.content.innerHTML = `<p> ${theHtmlString}</p>`;
        this.map.getViewport().style.cursor = 'pointer';
        //  console.log(this.theHtmlString);
      } else {
        this.overlayLayer.setPosition(undefined);
        this.map.getViewport().style.cursor = '';
      }
    });
  }


  onChange(name: string) {
    this.kidsTileMap.setVisible(false);
    this.kidsTileStaterite.setVisible(false);

    if (name === 'normalMap') {
      this.kidsTileMap.setVisible(true);
    } else if (name === 'normalStater') {
      this.kidsTileStaterite.setVisible(true);
    }
  }

  onChangebox(values: string) {
    if (values === 'smallLib') {
      this.KidsGardenData.setVisible(!this.KidsGardenData.getVisible());
    } else if (values === 'mainMarket') {
      this.mainMarketLayer.setVisible(!this.mainMarketLayer.getVisible());
    } else if (values === 'estateGubun') {
      this.estateGubunLayer.setVisible(!this.estateGubunLayer.getVisible());
    } // else if (values === 'AchasanKML') {
    //   this.AchasanKML.setVisible(!this.AchasanKML.getVisible());
    // } else if (values === 'AchasanHeatmap') {
    //   this.AchasanHeatmap.setVisible(!this.AchasanHeatmap.getVisible());
    // }
  }


}

