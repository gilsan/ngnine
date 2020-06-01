import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import  anime from 'animejs';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit , AfterViewInit{

  links= false;
  screenSize:number = 700;
  constructor(
    private router: Router,
  ) { }
  something: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.screenSize = window.innerWidth;
    //  console.log('screen size:', this.screenSize);
  }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
     anime({
      targets: ['.box'],
      translateX: [
        { value: 500, duration: 1000 },
        { value: 0, duration: 1000 }
      ],
      duration: 4000,
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 5000},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      loop: true
  });
  }

  animate() {
    this.something.play(); 
  }

  toggle() {
    this.links = !this.links; 
  //  console.log('[][][toggle]', this.links);
  }

  showHide() {  
    if (this.screenSize > 690) {
      return "show--links" ;    
    } else {
      if (this.links) {
         return "links--show";
      }
      return "links--hide";
    }
       
  }

 

}
