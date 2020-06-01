import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { throwIfEmpty, first } from 'rxjs/operators';
import { FbService } from '../../services/fb.service';
import { Router } from '@angular/router';
 
 

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  citesWeather: Object;
  darkMode: boolean;
  state: string = '';
  climate_state: string;
  temp: number = 0;
  minTemp: number = 0;
  maxTemp: number = 0;
  errorMessage: string;
  cityName;
  cityAdded = false;


  @Input() set city(city: string) {
    this.cityName = city;
    this.weatherService.getWeather(city)
      .pipe(first())
      .subscribe(payload => {
      //  console.log('[19][weather-card][city]',payload);
        this.state = payload.weather[0].main;
        if (this.state === 'Sunny' || this.state === 'clear') {
          this.climate_state ='맑음'
        }
        if (this.state === 'Clouds') {
          this.climate_state ='흐림'
        }
        if (this.state === 'Rain' || this.state === 'Drizzle' || this.state == 'Mist') {
          this.climate_state ='비'
        }
        if (this.state === 'Haze' || this.state === 'Fog' ) {
          this.climate_state ='안개'
        }

        this.temp =  payload.main.temp;
      },
      (err)=> {
          this.errorMessage = err.error.message;
          setTimeout(()=> { this.errorMessage = '';}, 3000)
      });
    this.weatherService.getForecast(city)
        .pipe(first())
        .subscribe(payload => {
         // console.log('[41][weather-card][city]',payload);
          this.maxTemp = Math.round(payload[0].main.temp_max);
          this.minTemp = Math.round(payload[0].main.temp_min);
          for(const res of payload) {
            if (new Date().toLocaleDateString('ko-KR') === new Date(res.dt_txt).toLocaleDateString('ko-KR')) {
              this.maxTemp = res.main.temp_max > this.maxTemp ? Math.round(res.main.temp_max) : this.maxTemp;
              this.minTemp = res.main.temp_min < this.minTemp ? Math.round(res.main.temp) : this.minTemp;
            }
          }
        },
          (err)=> {
              this.errorMessage = err.error.message;
              setTimeout(() => { this.errorMessage='';},3000)
          }
          ) ; 

  }  ;
  @Input() addMode: boolean;
  @Output() cityStored = new EventEmitter();


  
  constructor(
    private weatherService: WeatherService,
    private fbService: FbService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openDetails() {
   // console.log('[86][weather-card][openDetails]',this.addMode);
    if(!this.addMode) {
    //  console.log(this.cityName);
      this.router.navigate(['/weather', 'detail', this.cityName]);
    }
  }

  addCity() {
     this.fbService.addCity(this.cityName)
       .then((data) => {
      //   console.log('[91][weather-card][addCity]', data);
         this.cityName = null;
         this.maxTemp = null;
         this.minTemp = null;
         this.state = null;
         this.temp = null;
         this.cityAdded = true;
         this.cityStored.emit();
         setTimeout(()=> { this.cityAdded = false;}, 3000)
       })
   // this.cityStored.emit();
  }
 

}
