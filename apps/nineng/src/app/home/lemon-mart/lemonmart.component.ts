import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { NavItem } from '../models/nav-item';
import { lemonMenu } from '../../shared/models/menu-list';

@Component({
  selector: 'app-lemonmart',
  templateUrl: './lemonmart.component.html',
  styleUrls: ['./lemonmart.component.scss']
})
export class LemonmartComponent implements OnInit {

  opened = false;
  menu: NavItem[] = lemonMenu;
  imageDesc = '레몬';
  
  @ViewChild('sidenav', {static: true}) sidenav: Observable<any>;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('lemon', sanitizer.bypassSecurityTrustResourceUrl('../../assets/lemon/icons/lemon.svg'));
  }

  ngOnInit(): void {
  }

  closebar() {
    console.log('[][][lemon]');
        
  }
  // sidebarToggle() {
  //   this.opened = !this.opened;
  // }

  toggle() {
    this.opened = !this.opened;
  }

}
