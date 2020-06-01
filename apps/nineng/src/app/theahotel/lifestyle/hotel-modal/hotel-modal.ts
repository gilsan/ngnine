import { Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hotelmodal',
    templateUrl: './hotel-modal.component.html',
    styleUrls: ['./hotel-modal.scss']
})
export class HotelModal {

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag:true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        center: true,    
        navSpeed: 700,
        autoplay: true,
        responsive: {
          0: {
            items: 1 
          },      
        },
        nav: true
      }

      hotelImages = [
        {
          id:1,
          src:'../../../../assets/hotel/hotel/Concierge.webp',
          alt:'Image_1',
          title:'Image_1'
        },
        {
          id:2,
          src:'../../../../assets/hotel/hotel/Exterior.webp',
          alt:'Image_2',
          title:'Image_3'
        },
        {
          id:3,
          src:'../../../../assets/hotel/hotel/Lounge-View.webp',
          alt:'Image_3',
          title:'Image_3'
        }    
      ];

      getData(event) {
        // console.log('[] ', event);
       }












}