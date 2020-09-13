import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './nav-item';
import { olMenu } from '../shared/models/menu-list';

@Component({
  selector: 'app-openlayers',
  templateUrl: './openlayers.component.html',
  styleUrls: ['./openlayers.component.scss']
})
export class OpenlayersComponent implements OnInit {

  opened = false;
  menu: NavItem[] = olMenu;
  imageDesc = '홈';
  constructor(
    private router: Router,
  ) { }


  ngOnInit(): void {
  }

  toggle() {
    this.opened = !this.opened;
  }

  goSubMenu(submenu: string) {
    console.log(submenu);
    this.router.navigateByUrl(submenu);
  }

  goItem(item: NavItem) {

    this.router.navigateByUrl(item.route);
  }




}
