import { BehaviorSubject, Subject } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-webagency',
  templateUrl: './webagency.component.html',
  styleUrls: ['./webagency.component.scss'],
  animations: [
     trigger('fade', [
        state('shown', style({ opacity: 1})),
        state('close', style({opacity: 0, zIndex:-10})),
        transition('* => close', animate('3s ease-in')),
     ]),
     trigger('menubar', [
         state('updown', style({})),
         state('donwup', style({})),
         transition('*=>updown', animate(
           '2s ease-out',
           keyframes([
             style({transform: 'scale(1)',offset:0}),
             style({transform:'scale(1.3)', offset: 0.3}),
             style({transform: 'scale(1)',offset: 1 })
           ])
           )),
         transition('* => downup', animate('2s ease-in',keyframes([
            style({transform: 'scale(1)',offset:0}),
            style({transform:'scale(1.3)', offset: 0.3}),
            style({transform: 'scale(1)',offset: 1 })           
         ])))  
     ])
  ],
})
export class WebagencyComponent implements OnInit {
  state='close';
  navbtn='updown';
  show = false;
  video_switch = false;
  content1 = false;
  content2 = false;
  content3 = false;

@ViewChild('MyVideo', {static: false}) myVideo: ElementRef;
  id = 0;
   name:string;
   job:string;
   text:string;
   favorites1:string;
   favorites2:string;
   favorites3:string;
   image: string;
   data:{id:number,name:string,job:string,text:string,favorites:string[],img:string}[] = [
    {
     id: 0,
     name: 'john doe',
     job: 'developer',
     text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
     favorites: ['eat', 'drink', 'sleep'],
     img: '../../../../../assets/minimus/agency/team-1.jpg'
    },
    {
     id: 1,
     name: 'tom orange',
     job: 'designer',
     text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
     favorites: ['paint', 'draw', 'run'],
     img: '../../../../../assets/minimus/agency/team-2.jpg'
    },
    {
     id: 2,
     name: 'albert cupid',
     job: 'accountant',
     text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
     favorites: ['math', 'physics', 'more math'],
     img: '../../../../../assets/minimus/agency/team-3.jpg'
    },
    {
     id: 3,
     name: 'dog hugo',
     job: 'intern',
     text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
     favorites: ['bark', 'run', 'bite'],
     img: '../../../../../assets/minimus/agency/team-4.jpg'
    }];

    //  
  imgNum = [true, false,false,false];
  contentchange$ = new BehaviorSubject(this.imgNum);
  constructor() { }

  ngOnInit(): void {
    this.setContent();
  }

  video_switch_toggle() {
    this.video_switch = !this.video_switch;
       if (this.video_switch) {
         this.myVideo.nativeElement.pause();
      } else {
        this.myVideo.nativeElement.play();
      }
  }

  videoSwitch() {
    return { 'btnSlide': this.video_switch };
  }

  toggle() {
    this.show = !this.show;
  }

  showSidebar() {
    return {'nav--show': this.show};
  }

  onEnd(event) {
    if (event.toState === 'updown') {
      this.navbtn = 'downup';
    } else {
      this.navbtn = 'updown';
    }

  }

  showcontent1() {
    return {"show__content1": this.content1 };
  }

  contenttoggle1() {
    this.content1= !this.content1;
  }

  showcontent2() {
    return {"show__content2": this.content2 };
  }

  contenttoggle2() {
    this.content2= !this.content2;
  }

  showcontent3() {
    return {"show__content3": this.content3 };
  }

  contenttoggle3() {
    this.content3= !this.content3;
  }

  getId(id:number) {
        for (var i=0; i < this.imgNum.length; i++) {         
          if(id === i) {
            this.imgNum = [false,false,false,false];
            this.imgNum[id]= true;
          }
        } 
        this.contentchange$.next(this.imgNum);    
    }

  setContent() {
    // {id:number,name:string,job:string,text:string,favorites:string[],img:string}
      this.contentchange$.subscribe(data => {
        const idx = this.imgNum.findIndex(item => item === true);
     //   console.log('idx: ', idx);
        this.name= this.data[idx].name;
        this.job= this.data[idx].job;
        this.text= this.data[idx].text;
        this.favorites1= this.data[idx].favorites[0];
        this.favorites2= this.data[idx].favorites[1];
        this.favorites3= this.data[idx].favorites[2];
        this.image= this.data[idx].img;
      })

  }






  

   
  
  

 

}
