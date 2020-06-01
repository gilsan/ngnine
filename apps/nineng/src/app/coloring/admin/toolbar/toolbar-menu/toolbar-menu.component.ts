import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Logout } from '../../../auth/auth.actions';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss'],
})
export class ToolbarMenuComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {}

  logout() {
     //  this.store.dispatch(Logout);
     //  this.router.navigate(['login']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  convert() {
    this.router.navigate(['/coloring', 'admin', 'convert']);
  }

}
