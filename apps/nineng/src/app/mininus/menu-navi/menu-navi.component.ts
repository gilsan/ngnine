import { Component, OnInit } from '@angular/core';
import { NavItem } from '../models/nav-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navi',
  templateUrl: './menu-navi.component.html',
  styleUrls: ['./menu-navi.component.scss']
})
export class MenuNaviComponent implements OnInit {
  opened = false;
  menu: NavItem [] = [
    { 
      displayName: 'Home',
      iconName: 'library_books',
      children: [
         {
            displayName:'Home',
            iconName: 'library_books',
            route:'/mininus'
         },
         {
          displayName:'도시추가',
          iconName: 'question_answer',
          route:'add'           
         }
      ]
    },
    {
      displayName: '로그인',
      iconName: 'account_circle',
      route: '/login'     
    },
    {
      displayName: '로그아웃',
      iconName: 'person_add',
      route: '/login'     
    },   
  ];


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goItem(item: NavItem) {
    console.log('[50][][goItem]', item);
   this.sidebartoggle();
  //  this.router.navigateByUrl(item.route);
}
goWeather(route: string) {
  console.log('[55][][goWeather]', route);
    this.sidebartoggle();
  //  this.router.navigate(['/mininus', route])
}

sidebartoggle() {
  this.opened = !this.opened;
}

goSubmenu() {
  console.log('[50][][goItem]');
}



}
