import { Component, OnInit, } from '@angular/core';

import { NavItem } from './models/nav-item';
import { Router } from '@angular/router';
import { homeMenu } from '../shared/models/menu-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subMenu3Show= false;
  menuShow:boolean;
  showMenu = false;
  darkModeActive: boolean = true;
  sub_menu10:string;
  subcard4=false;
  color = 'accent'; // slide
  checked = true;
  disabled = false;
  opened = false;
  menu: NavItem [] = homeMenu;
  imageDesc = '홈';
  info = false;
  /*
   [
    { 
      displayName: 'Home',
      iconName: 'library_books',
      children: [
         {
            displayName:'콤포넌트',
            iconName: 'library_books',
            route:'/mininus'
         },
         {
          displayName:'운동',
          iconName: 'question_answer',
          route:'/fitness'           
         }
      ]
    },
    {
      displayName: '로그아웃',
      iconName: 'person_add',
      route: '/login'     
    },   
  ]
  */
 


  constructor(
    private router: Router,
   ) { }

 

  ngOnInit() {
    
  }

  goMininus() {
    this.router.navigate(['/mininus']);
  }

  goFitness() {
    this.router.navigate(['/fitness']);
  }

  logout() {
    console.log('login');
    this.router.navigate(['/login']);
  }
 

  onChange(evt) {
    //  console.log(evt);
      if (evt) {
       this.darkModeActive = true;
      } else {
       this.darkModeActive = false;
      }
  }

  goWeather(route) {
    this.toggle();
    this.router.navigate([route]);
   // console.log('[home][goWeather]',route);
  }

  goItem(item) {
    this.toggle();
    this.router.navigate([item.route]);
   // console.log('[home][goItem]', item);
  }

  toggle() {
    this.opened = !this.opened;
  }

  goTeahotel() {
    this.router.navigate(['/theahotel']);
  }

  versionToggle() {
    this.info = !this.info;
  }

  version() {
    return {"version-show" : this.info};
  }
 
}
