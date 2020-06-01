import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { first, map } from 'rxjs/operators';
 
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c3b2174fce3030648302a66bed4b14c5

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
  //  url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c3b2174fce3030648302a66bed4b14c5';
     url= 'https://api.openweathermap.org/data/2.5/weather?q=';
     private forcastUrl='https://api.openweathermap.org/data/2.5/forecast?q=';

    constructor(
        private http: HttpClient
    ) {}


    getWeather(city:string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
        return this.http.get(`${this.url}${city}&units=${metric}&APPID=${environment.appID}`);
    }

    getForecast( city: string, metric:'metric' | 'imperial' = 'metric' ): Observable<any> { 
        return this.http.get(`${this.forcastUrl}${city}&units=${metric}&APPID=${environment.appID}`)
                   .pipe(
                       first(),
                       map((weather) => weather['list'])
                   );
    }

}