import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

// import GoogleLayer from 'olgm/layer/Google';
// import { defaults } from 'olgm/interaction';
// import OLGoogleMaps from 'olgm/OLGoogleMaps';
import { XYZ } from 'ol/source';
import { VworldService } from '../vworld.service';



@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  map: Map;
  kidsTileMap: Tile;
  kidsTileSat: Tile;

  constructor(
    private service: VworldService
  ) { }

  ngOnInit(): void {
    this.initializeMap();
    this.service.getData().subscribe((data) => {
      console.log('service Result: ', data);
    })
  }



  initializeMap() {

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new XYZ({
            url: 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [14148244.020765709, 4516053.955067737],
        zoom: 17
      })
    });

    this.kidsTileMap = new Tile({
      source: new XYZ({
        url: 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png',
        attributions: '© VWORLD'
      }),
      visible: true,
    });

    // vworld 항공지도
    this.kidsTileSat = new Tile({
      source: new XYZ({
        url: 'http://xdworld.vworld.kr:8080/2d/Satellite/201612/{z}/{x}/{y}.jpeg',
        attributions: '© VWORLD'
      }),
      visible: false,
    });


    this.map.on('click', (e) => {
      console.log(e.coordinate);
    })
  }


}
