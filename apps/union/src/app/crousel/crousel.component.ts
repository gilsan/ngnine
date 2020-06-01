import { Component, OnInit } from '@angular/core';

import { HttpClient }  from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { throwError } from 'rxjs';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'ngnine-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.scss']
})
export class CrouselComponent implements OnInit {

  apiData: PhotosApi;
  limit: number = 10;

  constructor(
    private readonly http: HttpClient,
  ) { }
  
  customOptions: OwlOptions = {
    // loop: true,
    // autoplay: true,
    // center: true,
    // dots: false,
    // autoHeight: true,
    // autoWidth: true,
    loop: true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    center: true,
    navSpeed: 700,
      
    responsive: {
      0: {
        items: 1 
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      } 
    },
    nav: true
  };

  restaurants1 = [
    {
      id:1,
      src:'../assets/dining/dining1.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:2,
      src:'../assets/dining/dining2.jpg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:3,
      src:'../assets/dining/dining3.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'../assets/dining/dining4.jpg',
      alt:'Image_4',
      title:'Image_4'
    },   
  ];
  restaurants2 = [
    {
      id:1,
      src:'../assets/dining/dining5.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:2,
      src:'../assets/dining/dining6.jpg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:3,
      src:'../assets/dining/dining7.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'../assets/dining/dining8.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
  ];

  
  ngOnInit(): void {
   // this.fetch();
  }

  fetch() {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    const http$ = this.http.get<PhotosApi>(api);

    http$.subscribe( res => {
      console.log('[]',res)
      this.apiData = res;
    }
 
    )
  }

}
