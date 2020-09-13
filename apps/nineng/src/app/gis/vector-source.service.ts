import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';

import { empty, partition } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VectorSourceService {

  vworld_key = '97888092-664E-36BA-8E0C-E204870C8758';

  constructor(
    private http: HttpClient
  ) { }

  getData(minx: number, miny: number, maxx: number, maxy: number) {

    const url = `http://api.vworld.kr/req/data`;

    const params = new HttpParams()
      .set('service', 'data')
      .set('request', 'GetFeature')
      .set('data', 'LT_P_SMALLLIBRARY')
      .set('geomFilter', `BOX(${minx}, ${miny},${maxx}, ${maxy})`)
      .set('format', 'json')
      .set('crs', 'EPSG:3857')
      .set('size', '1000')
      .set('key', '97888092-664E-36BA-8E0C-E204870C8758')
      .set('domain', 'http://ngsubject.firebaseapp.com');
    return this.http.get(`https://cors-anywhere.herokuapp.com/${url}`, { params })
      .pipe(
        map((data: { response: {} }) => data.response),
        map((data: { page: {}, record: {}, result: {}, service: {} }) => data.result),
        map((data: { featureCollection: {} }) => data.featureCollection),
        //  map((data: { features: {} }) => data.features),
        shareReplay()
      );



  }

  getLayers(minx: number, miny: number, maxx: number, maxy: number) {
    const baseUrl = 'http://221.141.251.58/opensys/layers.php';
    const params = new HttpParams()
      .set('minx', `${minx}`)
      .set('miny', `${miny}`)
      .set('maxx', `${maxx}`)
      .set('maxy', `${maxy}`);

    return this.http.get(`https://cors-anywhere.herokuapp.com/${baseUrl}`, { params })
      .pipe(
        map((data: { response: {} }) => data.response),
        shareReplay()
      );
  }

  getService(minx: number, miny: number, maxx: number, maxy: number, data) {
    const baseUrl = 'http://221.141.251.58/opensys/openlayers.php';
    const params = new HttpParams()
      .set('minx', `${minx}`)
      .set('miny', `${miny}`)
      .set('maxx', `${maxx}`)
      .set('maxy', `${maxy}`)
      .set('data', 'LT_C_DGMAINBIZ');

    return this.http.get(`https://cors-anywhere.herokuapp.com/${baseUrl}`, { params })
      .pipe(
        map((data: { response: {} }) => data.response),
        shareReplay()
      );
  }



}