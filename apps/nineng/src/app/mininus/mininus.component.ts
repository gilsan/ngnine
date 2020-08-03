import { Component, OnInit } from '@angular/core';

import { NavItem } from './models/nav-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mininus',
  templateUrl: './mininus.component.html',
  styleUrls: ['./mininus.component.scss']
})
export class MininusComponent implements OnInit {

  subMenu3Show = false;
  subCssShow = false;
  cssMenuShow: boolean;
  menuShow: boolean;
  showMenu = false;
  darkModeActive: boolean = true;
  sub_menu10: string;
  subcard4 = false;
  color = 'accent'; // slide
  checked = true;
  disabled = false;
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
          route: 'add'
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
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goItem(item: NavItem) {
    //  console.log('[55][][goItem]', item);
    this.sidebartoggle();
    //  this.router.navigateByUrl(item.route);
  }
  goWeather(route: string) {
    // console.log('[59][][goWeather]', route);
    this.sidebartoggle();
    //  this.router.navigate(['/mininus', route])
  }

  onChange(evt) {
    //  console.log(evt);
    if (evt) {
      this.darkModeActive = true;
    } else {
      this.darkModeActive = false;
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  submenuthreeToggle(mousestatus: string = '') {
    if (mousestatus.trim() === 'mouseover') {
      this.subMenu3Show = true;
    } else {
      this.subMenu3Show = !this.subMenu3Show;
    }
    // console.log('[85][][mouseStatus]', mousestatus, this.subMenu3Show);
    if (this.subMenu3Show) {
      this.menuShow = true;
    } else {
      this.menuShow = false;
    }
  }

  submenuthreeToggle2(mousestatus: string = '') {
    if (mousestatus.trim() === 'mouseover') {
      this.subCssShow = true;
    } else {
      this.subCssShow = !this.subCssShow;
    }
    //  console.log('[109][][mouseStatus]', mousestatus, this.subMenu3Show, this.subCssShow);
    if (this.subCssShow) {
      this.cssMenuShow = true;
    } else {
      this.cssMenuShow = false;
    }
  }


  showMenus() {
    if (this.menuShow) {
      return 'card--3__submenu--show';
    }
    return 'card--3__submenu';
  }

  showCssMenus() {
    if (this.cssMenuShow) {
      return 'card--3__submenu--show';
    }
    return 'card--3__submenu';
  }

  submenuFourToggle(status) {
    //  console.log('[101][][mouseStatus]',  status );
    this.subcard4 = !this.subcard4;

    if (this.subcard4 === true) {
      this.sub_menu10 = 'card--4__submenu--show';
    } else if (this.subcard4 === false) {
      this.sub_menu10 = 'card--4__submenu';
    }
  }


  goGame() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'components', 'game']);
  }

  goTetris() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'components', 'tetris']);
  }

  goSelect() {
    this.cssMenuShow = false;
    this.router.navigate(['/mininus', 'cssex', 'select']);
  }

  goGallery() {
    this.cssMenuShow = false;
    this.router.navigate(['/mininus', 'cssex', 'gallery3d']);
  }

  goRotate() {
    this.cssMenuShow = false;
    this.router.navigate(['/mininus', 'cssex', 'rotate']);
  }

  goCube() {
    this.cssMenuShow = false;
    this.router.navigate(['/mininus', 'cssex', 'cube']);
  }

  goScroll() {
    this.cssMenuShow = false;
    this.router.navigate(['/mininus', 'cssex', 'screenscroll']);
  }

  go3Wavy() {
    this.cssMenuShow = false;
    this.router.navigate(['/mininus', 'cssex', 'wavycircle']);
  }

  goTest() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'advanced', 'test']);
  }






  goInline() {
    this.cssMenuShow = false;
    this.router.navigate(['/mininus', 'cssex', 'inline']);
  }

  goCanvas() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'components', 'canvas']);
  }
  goCSS() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'components', 'coffee']);
  }

  goFlex() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'components', 'flex']);
  }

  goMusic() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'components', 'panel']);
  }

  goNetflix() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'components', 'netflix']);
  }

  goAdmin() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'components', 'admin']);
  }

  goAuinput() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'advanced', 'auinput']);
  }
  goTaps() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'advanced', 'taps']);
  }
  goModal() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'advanced', 'modal']);
  }

  hideMenu() {
    this.menuShow = false;
  }

  goBasic() {
    this.router.navigate(['/mininus', 'components', 'basic']);
  }

  goVlog() {
    this.router.navigate(['/mininus', 'components', 'vlog']);
  }
  goReal() {
    this.router.navigate(['/mininus', 'components', 'real']);
  }
  goFreelancer() {
    this.router.navigate(['/mininus', 'components', 'freelancer']);
  }
  goAirbnb() {
    this.router.navigate(['/mininus', 'components', 'airbnb']);
  }

  sidebartoggle() {
    this.opened = !this.opened;
  }

  portpolio() {
    this.router.navigate(['/mininus', 'components', 'portpolio']);
  }

  webagency() {
    this.router.navigate(['/mininus', 'components', 'webagency']);
  }

  goProgressbar() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'ngrx', 'progressbar']);
  }

  goGridEx() {
    this.menuShow = false;
    this.router.navigate(['/mininus', 'grid']);
  }

}
