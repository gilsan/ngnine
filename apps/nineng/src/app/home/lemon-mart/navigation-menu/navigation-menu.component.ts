import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  @Output() selected: EventEmitter<any> = new EventEmitter();

  menu: NavItem[] = [
    {
      displayName: 'openlayer예제',
      iconName: 'supervisor_account',
      children: [
        {
          displayName: '사용자12',
          iconName: 'face',
          route: '/home/lemon/users'
        },
        {
          displayName: '레시피',
          iconName: 'restaurant_menu',
          route: '/home/lemon/receipts'
        }
      ]
    },
    {
      displayName: 'Inventory',
      iconName: 'edit',
      children: [
        {
          displayName: 'Stock Entry',
          iconName: 'layers',
          route: '/home/lemon/inventory/stockEntry'
        },
        {
          displayName: 'Products',
          iconName: 'library_books',
          route: '/home/lemon/inventory/products'
        },
        {
          displayName: 'Categories',
          iconName: 'category',
          route: '/home/lemon/inventory/categories'
        },
      ]
    },
    {
      displayName: 'POS',
      iconName: 'person_add',
      children: [
        {
          displayName: 'POS',
          iconName: 'rate_review',
          route: '/home/lemon/pos'
        }
      ]

    },
  ];

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
