import { Component, OnInit, OnDestroy } from '@angular/core';
import { FbService } from '../../services/fb.service';
import { Observable } from 'rxjs';
import { Item } from '../../models/nav-item';
import { SubSink } from 'subsink';
import { FirebaseService } from '../../services/firbase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{

  subs = new SubSink();
  cities: Item[];
  constructor(
    private fbService: FbService
  ) { }

  ngOnInit() {
     this.subs.sink =  this.fbService.getCities().subscribe(cities => {
            //  console.log('[22][home][onInit] ', cities);
              this.cities = cities;
       }); 
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
