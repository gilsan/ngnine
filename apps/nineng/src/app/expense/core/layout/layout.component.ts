import { Component, OnInit, } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  loadingRoute = false;


  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public router: Router,
  ) {
    iconRegistry.addSvgIcon('home',sanitizer.bypassSecurityTrustResourceUrl('assets/expense/home.svg'));
    iconRegistry.addSvgIcon('list',sanitizer.bypassSecurityTrustResourceUrl('assets/expense/list.svg'));
    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/expense/settings.svg'));
    iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/expense/edit.svg'));
    iconRegistry.addSvgIcon('remove',sanitizer.bypassSecurityTrustResourceUrl('assets/expense/remove.svg'));
   }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  changeSelected(evt) {
    //  console.log(evt);
  }
}
