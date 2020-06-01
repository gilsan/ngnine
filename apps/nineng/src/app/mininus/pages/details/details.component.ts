import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs/operators';
 
 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  darkMode: boolean;
  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;
  today: string;
  daysForecast: Object;
  cityIllustraionPath: string = '../../../assets/cities/france.svg';
  errorMessage: string;
  tweets$: Observable<any>

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
  ) { }


  private days = [ '일','월','화', '수','목','금','토'];
 // private days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private todayNumberInWeek = new Date().getDay();
  ngOnInit() {
      this.route.paramMap.pipe(
       concatMap( route => {
        this.city = route.get('city');
        return forkJoin(this.weatherService.getWeather(this.city), this.weatherService.getForecast(this.city))            
       })
    ).subscribe(([weather, forecast]) => {
          //  console.log(weather);
            this.state = weather.weather[0].main;
            this.temp = Math.ceil(weather.main.temp);
            this.hum  = weather.main.humidity;
            this.wind = Math.ceil(weather.wind.speed);
            this.today = this.days[this.todayNumberInWeek];
          //  console.log(forecast);
            const dates = {};
          
            for (const res of forecast) {
              const date =  new Date(res.dt_txt).toDateString().split(' ')[0];
              if (dates[date]) {                           
                   dates[date].counter += 1;
                   dates[date].temperature +=  Math.round(res.main.temp);                  
              } else {               
                 dates[date] = {
                   state: res.weather[0].main,
                   temperature:  Math.round(res.main.temp),
                   counter: 1
                 }              
              }                        
            }
           
            Object.keys(dates).forEach( day => {            
                dates[day].temperature = Math.round( dates[day].temperature / dates[day].counter)
             });
             delete dates[ Object.keys(dates)[0]];
             delete dates[ Object.keys(dates)[0]];
            this.daysForecast = Object.values(dates);
             console.log('[][][]', this.daysForecast);
            
    });
  }

}
