import { Component, Input, OnInit } from '@angular/core';

import { ModalsService } from '../../../services/modals.service';
import { RoomsService } from '../../../services/rooms.service';
import { TITLE } from '../../../models/amenity';

@Component({
  selector: 'app-checkavail',
  templateUrl: './checkavail.component.html',
  styleUrls: ['./checkavail.component.scss']
})
export class CheckavailComponent implements OnInit {

  person = 1;
  guest = 1;
  booking_modal = false;
  today: string;
  room = 1;
  adult = 1;
  child = 0;
  isShow = false;
  item = "None";
  isSelected = false;
  selectedNum = 0;
  inputCheck = false;
  title:string = "";
  items = [
    "None",
    "Govement",
    "Veteran",
    "AAA/CAA Member",
    "Senior",
    "Special Offer Code",
    "Corporate or Group Code"
  ];

  @Input()
  titleNo:number;
  
  constructor(
    public roomService: RoomsService,
     private modalService: ModalsService
  ) { }

  ngOnInit(): void {
    this.title = TITLE[this.titleNo];
   // console.log('[checkavail]: ',TITLE[this.titleNo]);
  }

  close() {
    this.modalService.close();
  }

  increaseRoom() {
    if (this.room >= 1) {
      this.room++;
      this.roomService.setRoomCount(this.room);
    }    
  }

  decreaseRoom() {
    if (this.room > 1) {
      this.room--;
      this.roomService.setRoomCount(this.room);
    }    
  }

  addAdult() {
    if(this.adult >= 1) {
      this.adult++;
      this.roomService.setAdult(this.adult);
    }
 }

 deductAdult() {
   if (this.adult > 1) {
     this.adult--;
     this.roomService.setAdult(this.adult);
   }
 }

 addChild() {
  if(this.child > 0) {
    this.child++;
    this.roomService.setAdult(this.child);
  }    
}
  
deductChild() {
  if (this.child !== 0) {
    this.child--;
    this.roomService.setAdult(this.child);
  }
}

toggle() {
  this.isShow = !this.isShow;
  this.isSelected = false;
}

selectedToggle() {
  this.isSelected = !this.isSelected;
  this.isShow = false;
}

showCheck(item: string, idx: number) {
  console.log('[]', item, idx);
  this.item = item;
  this.isSelected = !this.isSelected;
  this.selectedNum = idx;
}

checked(i:number) {
   if(this.selectedNum === i) {
     return true;
   }
   return false;
}

changeChecked() {
   this.inputCheck = !this.inputCheck;
}





}
