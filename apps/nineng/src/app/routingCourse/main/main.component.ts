import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthStore } from '../services/auth.store';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app/routingCourse';
  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);



  constructor(
    private sanitizer: DomSanitizer,
    public auth: AuthStore,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/ngrouting/login');

  }

}
