import { Directive, ElementRef, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { RoomsService } from "../../services/rooms.service";

@Directive({
   selector: '[roomcount]',
   exportAs: 'rd',
})
export class RoomsDirective implements OnInit {

    roomCount$: Observable<number>;
    roomCount  = 0;

    constructor(
        private roomService: RoomsService,
        private el: ElementRef,
    ) {}

    ngOnInit() {
       this.setRoomCount();
    }


    setRoomCount() {
        this.roomCount$ = this.roomService.roomCount$;
        this.roomCount$.subscribe((data) => {
          this.el.nativeElement.value = data;
        });
    }

    getRoomCount() {
        return this.roomCount;
    }

}
