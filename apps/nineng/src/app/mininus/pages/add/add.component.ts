import { Component, OnInit } from '@angular/core';
import { Service } from '../../guards/service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  temp: number;
  city = 'Rome';
  state: string = 'Sunny';
  capitals = [];
  selectedCity;
  cardCity;
  showNote = false;
  followedCM = false;
  sub1;


  constructor(
    private service: Service
  ) { }

  ngOnInit() {
     this.service.capitals$.subscribe(data => {      
       this.capitals = data;
     console.log('[31][add.component][ngOnInit][capital]', this.capitals);
       this.capitals.sort();
     })
   }

  selectCity(city) {
    if (this.capitals.includes(city)) {
       this.cardCity = city;
       this.showNote = false;
    } else if(city.length > 0) {
       this.showNote = true;
    }

  }
  addCityOfTheMonth() {}

  savedCity(event) {
    this.cardCity = false;
    // console.log('[47][add][savedCity]', event);
  }

}
