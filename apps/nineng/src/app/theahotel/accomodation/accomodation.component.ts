import { Component, HostListener, OnDestroy, OnInit, Inject,    } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay, startWith, takeUntil, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../services/window.service';
import { RoomsService } from '../services/rooms.service';
import { ModalsService } from '../services/modals.service';
 

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit,  OnDestroy {
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

  items = [
    "None",
    "Govement",
    "Veteran",
    "AAA/CAA Member",
    "Senior",
    "Special Offer Code",
    "Corporate or Group Code"
  ];

  constructor(
    public roomService: RoomsService,
    public modalsService: ModalsService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
  ) { }
  private onDestroy = new Subject<void>();
  btnShowHide = true;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //  console.log('[Scroll]',offset);
  }

  ngOnInit(): void { 
    this.getDate();
    this.modalsService.close$.subscribe(()=> {
        this.btnShowHide = true;
    }); // // Buy Now button 보여줌
    this.modalsService.openAvailability$.subscribe(()=> {
      this.btnShowHide = false;
    }); // Buy Now button 숨김
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }
  onToggle() {
    this.booking_modal = !this.booking_modal;
  }

  getDate() {
    this.today = new Date().toISOString().substring(0, 10);
   // console.log(this.today);  
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
  }

  selectedToggle() {
    this.isSelected = !this.isSelected;
  }

  showCheck(item: string, idx: number) {
    console.log('[]', item, idx);
    this.item = item;
    this.isSelected = !this.isSelected;
  }

  getBtnShowHide() {
      if(this.btnShowHide) {
        return {"booking_btn_show" : true,"booking_btn_hide": false };
      }
      return {"booking_btn_show" : false,"booking_btn_hide": true };
  }

}
