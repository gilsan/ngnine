import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { AuthService } from '../components/ngrx/services/auth.store';
import { NavItem } from '../models/nav-item';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-menu-navi',
  templateUrl: './menu-navi.component.html',
  styleUrls: ['./menu-navi.component.scss']
})
export class MenuNaviComponent implements OnInit {
  opened = false;
  menu: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'library_books',
      children: [
        {
          displayName: 'Home',
          iconName: 'library_books',
          route: '/mininus'
        },
        {
          displayName: '도시추가',
          iconName: 'question_answer',
          route: 'add',
        },
      ],
    },
    {
      displayName: '로그인',
      iconName: 'account_circle',
      route: 'login',
    },
    {
      displayName: '로그아웃',
      iconName: 'person_add',
      route: 'logout',
    },
  ];

  status = true;
  constructor(
    private router: Router,
    public auth: AuthService,
  ) {
    this.currentStatus();
  }

  ngOnInit(): void {

  }

  goItem(item: string) {
    console.log('[50][][goItem]', item);
    this.sidebartoggle();
    //  this.router.navigateByUrl(item.route);
    if (item === 'login') {
      this.router.navigateByUrl('/mininus/components/login');
    } else if (item === 'logout') {
      this.router.navigateByUrl('/mininus/components/login');
    }
  }
  goWeather(route: string) {
    //  console.log('[55][][goWeather]', route);
    this.sidebartoggle();
  }

  sidebartoggle() {
    this.opened = !this.opened;
  }

  goSubmenu(route: string) {
    //  console.log('[][goSubmenu]', route);
  }

  currentStatus() {
    const user = localStorage.getItem('AUTH_DATA');
    if (user) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  showHide(router: string) {
    if (router === 'login') {
      return !this.status;
    }
    return this.status;

  }

}
