import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SideBarDirective } from '../directives/sidebar.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit, AfterViewInit {
 preloader = true;
 showNavBar = false;
 videoStatus = 'ON';
 btnSlide ='';
 modalShow = false;
 imageNumber:number;

  constructor(
    private router: Router
  ) { }

  @ViewChild('myVideo', {static: true}) myVideo: ElementRef;

  @ViewChild(SideBarDirective, {static: true})
         sideBar: SideBarDirective;

  ngOnInit() {
    this.preloader = false;
  }

  ngAfterViewInit() {
    // console.log('[][ngAfterViewInit][SideBarDirective] ', this.sideBar);
  }

  toggle() {  
    this.showNavBar = !this.showNavBar;
  }

  getStatus() {
   // console.log('[][][]', this.showNavBar);
    if (this.showNavBar) {
       return true     
    }
      return false;
  }

  videoToggle() {
     if (this.videoStatus === 'ON') {
         this.videoStatus = 'OFF';
         this.btnSlide = 'btnSlide';
         this.myVideo.nativeElement.pause();
     } else {
         this.videoStatus = 'ON';
         this.btnSlide ='';
         this.myVideo.nativeElement.play();
     }
  }

  showModal(num: number) {
    // console.log('[57][][ showModal]', num);
     this.modalShow = true;
     this.imageNumber = num;  

  }

  getClass() {
    if (this.modalShow) {
      return 'work-modal--show';
    }
     return 'work-modal';
  }

  closeModal() {  
    this.modalShow = false;
    console.log('[][][closeModal]',this.modalShow);
  }

  getStyle() {
    const  img =`url(../../../../assets/minimus/img/work-${this.imageNumber}.jpeg)`;
    return {'background-image' : img};
  }

  goWeather() {
      this.router.navigate(['/mininus']);
  }

}
