import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../models/nav-item';
import { lemonMenu } from '../models/menu-list';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Input() menu: NavItem[];
  @Input() imageDesc: String;

  // menu: NavItem [] = lemonMenu;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goSubMenu(submenu: string) {
    this.selected.emit(null);
    this.router.navigateByUrl(submenu);
 }

 goItem(item: NavItem) {
    
   this.router.navigateByUrl(item.route);
 }

}
