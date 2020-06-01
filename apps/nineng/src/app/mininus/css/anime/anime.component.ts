import { Component, OnInit, AfterViewInit } from '@angular/core';
import  anime from 'animejs';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit, AfterViewInit {

  cols = Array(4*4).fill(0);
 grid = [ 17, 17];

 anim: anime;
 show = true;
  constructor() { 
    
  }
  
  ngOnInit() { 
    this.anim =  anime({
      targets: [ '.stagger-visualizer .col'],
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [17, 17], from: 'center'})
      // translateX: 100,
      // borderRadius: 50,
      // duration: 2000,
      // easing: 'linear',
      // direction: 'alternate'
    });
   }

   ngAfterViewInit() {}

  play() {
    this.show = true;
    console.log('play:');
    this.anim.play();
  }

  



}
