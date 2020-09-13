import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VworldService {

  vworld_key = '97888092-664E-36BA-8E0C-E204870C8758';

  constructor(
    private http: HttpClient
  ) { }

  getData() {

    const url = `http://api.vworld.kr/req/data`;

    const coordinate = '14131673.643732041,4504783.091301168,14158464.010035232,4526152.533044476';

    const params = new HttpParams()
      .set('service', 'data')
      .set('request', 'GetFeature')
      .set('data', 'LT_P_SMALLLIBRARY')
      .set('geomFilter', `BOX(${coordinate})`)
      .set('format', 'json')
      .set('crs', 'EPSG:3857')
      .set('size', '1000')
      .set('key', '97888092-664E-36BA-8E0C-E204870C8758')
      .set('domain', 'http://ngsubject.firebaseapp.com');


    // var searchUrl = `?
    //  service=data
    // &request=GetFeature
    // &data=LT_P_SMALLLIBRARY
    // &geomFilter=BOX(${coordinate})
    // &format=json
    // &crs=EPSG:3857
    // &key=${this.vworld_key}
    // &domain=http://ngsubject.firebaseapp.com`;

    return this.http.get(`https://cors-anywhere.herokuapp.com/${url}`, { params });

  }



}