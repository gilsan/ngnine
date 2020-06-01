import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

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

    restaurants1 = [
    {
      id:1,
      src:'../../../../assets/hotel/dining/dining1.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:2,
      src:'../../../../assets/hotel/dining/dining2.jpg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:3,
      src:'../../../../assets/hotel/dining/dining3.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'../../../../assets/hotel/dining/dining4.jpg',
      alt:'Image_4',
      title:'Image_4'
    },   
  ];

  restaurants2 = [
    {
      id:1,
      src:'../../../../assets/hotel/dining/dining5.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:2,
      src:'../../../../assets/hotel/dining/dining6.jpg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:3,
      src:'../../../../assets/hotel/dining/dining7.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'../../../../assets/hotel/dining/dining8.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
  ];
  
  
  ngOnInit(): void {
  }

  getData(event) {
   // console.log('[] ', event);
  }

}
