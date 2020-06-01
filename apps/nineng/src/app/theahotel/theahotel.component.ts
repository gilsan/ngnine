// https://github.com/theaworld/theahotel
import { Component, OnInit } from '@angular/core';

import { NavItem } from '../shared/models/nav-item';

@Component({
  selector: 'app-theahotel',
  templateUrl: './theahotel.component.html',
  styleUrls: ['./theahotel.component.scss']
})
export class TheahotelComponent implements OnInit {

  opened = false;
  menu: NavItem[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }

  toggle() {
    this.opened = !this.opened;
  }

}
