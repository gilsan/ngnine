import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { RoomsService } from '../../../services/rooms.service';

@Component({
  selector: 'app-amenity',
  templateUrl: './amenity.component.html',
  styleUrls: ['./amenity.component.scss']
})
export class AmenityComponent implements OnInit {

  room$:  Observable<any>;
  toggle = false;
  constructor(
    private roomsService : RoomsService
  ) {}

  @Input() roomtype:number;
  @Input() titleNo: number;

  ngOnInit(): void {
   // console.log('[amenity]: ', this.roomtitle);
  }

  showInfo() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.room$ = this.roomsService.getRoomInfo(this.roomtype) ;
    } else {
      this.room$ = undefined;
    }
    
  }

}
