import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat, toLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';

import DragRotate from 'ol/interaction/DragRotate';
import Draw from 'ol/interaction/Draw';
import { altKeyOnly } from 'ol/events/condition';
import GeometryType from 'ol/geom/GeometryType';
import GeoJSON from 'ol/format/GeoJSON';
import { Group } from 'ol/layer';
import { Stamen, XYZ, TileDebug, TileArcGISRest, TileWMS } from 'ol/source';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  map;
  radioSelected: string;
  OSMStandard = true;
  OSMHumanitarian = false;
  openstreetMapStandard: any;
  openstreetMapHumanitarian: any;
  cartoDBBaseLayer: any;
  layerGroup: any;

  tileDebugLayer: any;
  tileArcGISLayer: any;
  NOAAWMSLayer: any;

  constructor() { }

  ngOnInit(): void {
    this.initilizeMap();

  }

  initilizeMap() {

    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');

    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: { duration: 250 }
    });

    this.map = new Map({
      target: 'basemap',
      overlays: [overlay],
      view: new View({
        center: fromLonLat([127.09598491493334, 37.54895310050817]),
        zoom: 17,
      }),
    });

    // Base Layers
    // Openstreet Map Standard
    this.openstreetMapStandard = new Tile({
      source: new OSM(),
      visible: true,
    });

    // Openstreet Map Humanitarian
    this.openstreetMapHumanitarian = new Tile({
      source: new OSM({
        url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      }),
      visible: false,
    })

    // Stamen basemap layer
    // this.StamenTerrain = new Tile({
    //   source: new Stamen({
    //     layer: 'watercolor'
    //   }),
    //   visible: false,
    // })

    // CartoDB BaseMap Layer
    this.cartoDBBaseLayer = new Tile({
      source: new XYZ({
        url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
        attributions: '© CARTO'
      }),
      visible: false,
    })


    // Layer Group
    this.layerGroup = new Group({
      layers: [
        this.openstreetMapStandard, this.openstreetMapHumanitarian, this.cartoDBBaseLayer
      ]
    });
    this.map.addLayer(this.layerGroup);

    // TileDebug
    this.tileDebugLayer = new Tile({
      source: new TileDebug(),
      visible: true,
    });

    // tile ArcGIS REST API Layer
    this.tileArcGISLayer = new Tile({
      source: new TileArcGISRest({
        url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer",
        attributions: 'Copyright© 2008, MSD, PVA, Louisville Water Company, Louisville Metro Government'
      }),
      visible: true,
    });

    // NOAA WMS Layer
    this.NOAAWMSLayer = new Tile({
      source: new TileWMS({
        url: 'https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer?',
        params: {
          LAYERS: 5,
          FORMAT: 'image/png',
          TRANSPARENT: true
        },
        attributions: '<a href=https://nowcoast.noaa.gov/>© NOAA<a/>'
      }),
      visible: true,
    });

    // Raster Tile Layer Group
    const rasterTileLayerGroup = new Group({
      layers: [
        this.tileArcGISLayer, this.NOAAWMSLayer, this.tileDebugLayer
      ]
    });
    this.map.addLayer(rasterTileLayerGroup);


    this.map.on('singleclick', function (evt: any) {
      console.log(evt.coordinate);
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

    //   // DragRotate Interaction
    //   const dragRotateInteraction = new DragRotate({
    //     condition: function (mapBrowserEvent) {
    //       return altKeyOnly(mapBrowserEvent);
    //     }
    //   });
    //   this.map.addInteraction(dragRotateInteraction);

    //   // Drag Interaction
    //   const drawInteraction = new Draw({
    //     type: GeometryType.POLYGON,
    //     freehand: true
    //   });
    //   this.map.addInteraction(drawInteraction);

    //   drawInteraction.on('drawend', (evt) => {
    //     console.log(evt);
    //     let parser = new GeoJSON();
    //     let drawFeatures = parser.writeFeaturesObject([evt.feature]);
    //     console.log(drawFeatures);
    //   })


  }

  onChange(val: string) {
    //  this.openstreetMapStandard, this.openstreetMapHumanitarian, this.cartoDBBaseLayer
    console.log('selected', val);
    this.openstreetMapStandard.setVisible(false);
    this.openstreetMapHumanitarian.setVisible(false);
    this.cartoDBBaseLayer.setVisible(false);
    if (val === 'OSMStandard') {
      this.openstreetMapStandard.setVisible(true);
    } else if (val === 'OSMHumanitarian') {
      this.openstreetMapHumanitarian.setVisible(true);
    } else if (val == 'StamenTerrain') {
      this.cartoDBBaseLayer.setVisible(true);
    }
  }

  onChangebox(values: string) {

    if (values === 'TileArcGISLayer') {
      this.tileArcGISLayer.setVisible(!this.tileArcGISLayer.getVisible());
    } else if (values === 'NOAAWMSLayer') {
      this.NOAAWMSLayer.setVisible(!this.NOAAWMSLayer.getVisible());
    } else if (values === 'TileDebugLayer') {
      this.tileDebugLayer.setVisible(!this.tileDebugLayer.getVisible());
    }
  }




}
