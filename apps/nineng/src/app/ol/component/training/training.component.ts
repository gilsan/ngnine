import { Component, OnInit, OnDestroy } from '@angular/core';

import Geolocation from 'ol/Geolocation';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat, toLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';

import DragRotate from 'ol/interaction/DragRotate';
import Draw from 'ol/interaction/Draw';
import { altKeyOnly, singleClick } from 'ol/events/condition';
import GeometryType from 'ol/geom/GeometryType';
import { GeoJSON, KML } from 'ol/format';
import { Group, VectorTile as VectorTileLayer, Vector as VectorLayer, Heatmap, VectorImage } from 'ol/layer';

import { Stamen, XYZ, TileDebug, TileArcGISRest, TileWMS } from 'ol/source';
import { VectorTile, Vector } from 'ol/source';
import MVT from 'ol/format/MVT';
import Feature from 'ol/Feature';
import { Style, Circle, Fill, Stroke, Icon, Text } from 'ol/style';
import { Select } from 'ol/interaction';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnDestroy {

  map;
  radioSelected: string;
  OSMStandard = true;
  OSMHumanitarian = false;
  openstreetMapStandard: any;
  openstreetMapHumanitarian: any;
  cartoDBBaseLayer: any;

  openstreetMapVectorTile: any;
  name: string = '';
  contact: string = '';

  layerGroup: any;

  tileDebugLayer: any;
  tileArcGISLayer: any;
  NOAAWMSLayer: any;
  AchasanKML: any;
  AchasanHeatmap: any;

  overlay: any;
  description: any;
  content: any;


  long: string = '';
  lat: string = '';
  constructor() { }

  ngOnInit(): void {
    this.initilizeMap();

  }

  initilizeMap() {

    const container = document.getElementById('popup');
    this.content = document.getElementById('popup-content');
    this.description = document.getElementById('description');
    const closer = document.getElementById('popup-closer');

    this.overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: { duration: 250 }
    });
    // map.addOverlay(overlay);

    this.map = new Map({
      target: 'basemap',
      overlays: [this.overlay],
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

    // CartoDB BaseMap Layer
    this.cartoDBBaseLayer = new Tile({
      source: new XYZ({
        url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
        attributions: '© CARTO'
      }),
      visible: false,
    });

    // Base Vector Layers
    // Vector Tile Layer OpenstreetMap
    this.openstreetMapVectorTile = new VectorTileLayer({
      source: new VectorTile({
        url: 'https://api.maptiler.com/tiles/v3-4326/{z}/{x}/{y}.pbf?key=cZhAu4VbrzeHAUmYd3Zy',
        format: new MVT(),
        attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      }),
      visible: false,
    });
    // this.map.addLayer(this.openstreetMapVectorTile);

    // const openstreetMapVectorTileStyles = 'Your Map Tiler STYLE URL';
    // fetch(openstreetMapVectorTileStyles).then(function(response) {    
    //   response.json().then(function(glStyle) {       
    //     olms.applyStyle(openstreetMapVectorTile, glStyle, 'Your Map Tiler ID');
    //   });
    // });     


    // Base Layer Group
    this.layerGroup = new Group({
      layers: [
        this.openstreetMapStandard, this.openstreetMapHumanitarian, this.cartoDBBaseLayer,
        // this.openstreetMapVectorTile
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

    // 아차산 KML
    // Styling of vector features
    // Points Style

    // Icon Marker Style
    const iconMarkerStyle = new Icon({
      src: '../../../../assets/geodata/marker.png',
      size: [100, 100],
      offset: [0, 0],
      opacity: 0.5,
      scale: 1.2,
      color: [10, 98, 240, 1]
    })

    const pointStyle = new Style({
      image: iconMarkerStyle
    })


    const achaSanStyle = function (feature: Feature) {
      //  console.log(feature.getGeometry().getType());
      let geometryType = feature.getGeometry().getType();
      // Text Styles
      let nameType = feature.get('name');
      let contactType = feature.get('contact');

      let textStyles = new Style({
        text: new Text({
          text: nameType,
          textAlign: 'right',
          offsetY: -30,
          scale: 2,
          fill: new Fill({
            color: [0, 255, 0, 1]
          })
        })
      })

      if (geometryType === 'Point') {
        feature.setStyle([pointStyle, textStyles])
      }

    }



    this.AchasanKML = new VectorLayer({
      source: new Vector({
        // url: '../../../../assets/geodata/map.kml',
        // format: new KML()
        url: '../../../../assets/geodata/mapinfo.geojson',
        format: new GeoJSON()
      }),
      visible: true,
      style: achaSanStyle
    });


    // 아차산 히트맵
    // HeatMap
    this.AchasanHeatmap = new Heatmap({
      source: new Vector({
        url: '../../../../assets/geodata/mapinfo.geojson',
        format: new GeoJSON()
      }),
      radius: 20,
      blur: 12,
      gradient: ['#DC143C', '#DC143C', '#000000', '#000000', '#000000'],
      visible: false
    });


    // Raster Tile Layer Group
    const rasterTileLayerGroup = new Group({
      layers: [
        this.tileArcGISLayer, this.NOAAWMSLayer, this.tileDebugLayer,
        this.AchasanKML, this.AchasanHeatmap
      ]
    });
    this.map.addLayer(rasterTileLayerGroup);


    // Vector Feature Popup Logic 
    //
    this.mapPopup();


    this.map.on('singleclick', (evt: any) => {
      // console.log(evt.coordinate);
      // const coordinate = evt.coordinate;

      // const hdms = toStringHDMS(toLonLat(coordinate));
      //  console.log('단독클릭: ', this.name, this.contact);
      // content.innerHTML = `<p>현 위치: </p><code>${hdms}</code>`;
      // overlay.setPosition(coordinate);
    });

    //////

    closer.onclick = () => {
      this.overlay.setPosition(undefined);
      closer.blur();
      return false;
    }

    this.selectInteraction();

  }

  //지도에 표시된 마크 클릭시 정보 출력
  mapPopup() {
    this.map.on('click', (e: any) => {
      this.map.forEachFeatureAtPixel(e.pixel, (feature, layer) => {
        // console.log(evt.coordinate);
        const coordinate = e.coordinate;
        const name = feature.get('name');
        const contact = feature.get('contact');
        this.content.innerHTML = `<p>상호명: ${name} - 전화번호: ${contact}</p>`;
        this.overlay.setPosition(coordinate);
      });
    });
  }

  // Interaction  -- For Style selected Points
  selectInteraction() {
    /*
    const selectedInteraction = new Select({
      condition: singleClick,
      style: new Style({
        image: new Circle({
          displacement: [0, 0],
          fill: new Fill({
            color: [247, 26, 10, 1]
          }),
          radius: 12,
          stroke: new Stroke({
            color: [247, 26, 10, 1],
            width: 3
          }),


        }),
      })
    });
    */
    const selectedInteraction = new Select();
    this.map.addInteraction(selectedInteraction);

    this.geoloacation();
    this.getCurrentLocation();
  }

  // Geoloacation API
  geoloacation() {
    const viewProjection = this.map.getView().getProjection();
    const geolocation = new Geolocation({
      tracking: true,
      trackingOptions: {
        enableHighAccuracy: true
      },
      projection: viewProjection
    });

    geolocation.on('change', (e) => {
      let geolocation = e.target.getPosition();
      let LongLatGeolocation = toLonLat(geolocation, viewProjection);

      this.map.getView().setCenter(geolocation);
      console.log('위치: ', LongLatGeolocation);
      this.long = LongLatGeolocation[0].toString();
      this.lat = LongLatGeolocation[1].toString();
    })

  }

  getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    } else {
      console.log('geolocation not available');
    }
  }



  onChange(val: string) {
    //  this.openstreetMapStandard, this.openstreetMapHumanitarian, this.cartoDBBaseLayer
    console.log('selected', val);
    this.openstreetMapStandard.setVisible(false);
    this.openstreetMapHumanitarian.setVisible(false);
    this.cartoDBBaseLayer.setVisible(false);
    this.AchasanKML.setVisible(false);
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
    } else if (values === 'AchasanKML') {

      this.AchasanKML.setVisible(!this.AchasanKML.getVisible());
    } else if (values === 'AchasanHeatmap') {
      this.AchasanHeatmap.setVisible(!this.AchasanHeatmap.getVisible());
    }
  }

  ngOnDestroy() {
    clearInterval()
  }




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
