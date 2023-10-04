import { Component, OnInit, } from '@angular/core';

import { NavItem } from './models/nav-item';
import { Router, ActivatedRoute } from '@angular/router';
import { homeMenu } from '../shared/models/menu-list';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rainShow = true;
  subMenu3Show = false;
  menuShow: boolean;
  showMenu = false;
  darkModeActive: boolean = true;
  sub_menu10: string;
  subcard4 = false;
  color = 'accent'; // slide
  checked = true;
  disabled = false;
  opened = false;
  menu: NavItem[] = homeMenu;
  imageDesc = '홈';
  info = false;



  contents = ['환영합니다.',
    '페이지 개발환경 입니다.', 'Angular 9 RxJS, 웹서버: Node.js 12.0, 디비: MySQL, Firebase',
    'Web Hosting Server: Firebase'];

  completed() {
    console.log('completed .,,,,,,,,,,,,,====');
    this.contents = [];


  };

  init() {
    particlesJS('snow_fall', ParticlesConfig, function () { });
  }

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


  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app';
  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) { }



  ngOnInit() {
    const path = this.route.snapshot.routeConfig.path;
    if (path !== 'home') {
      this.rainShow = true;
    }



  }

  main() {
    this.router.navigate(['/home']);
    this.rainShow = true;
  }

  seoul() {
    this.rainShow = false;
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
    return { "version-show": this.info };
  }

}
