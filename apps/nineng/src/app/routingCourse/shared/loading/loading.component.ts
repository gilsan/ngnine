import { Component, Input, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {

  @Input()
  routing = false;

  @Input()
  detectRoutingOngoing = false;

  constructor(
    public loadingService: LoadingService,
    private router: Router) {

  }

  ngOnInit() {
    this.init();
  }

  init() {
    if (this.detectRoutingOngoing) {
      this.router.events.subscribe((events) => {
        if (events instanceof NavigationStart ||
          events instanceof RouteConfigLoadStart) {
          this.loadingService.loadingOn();
        } else if (events instanceof NavigationEnd ||
          events instanceof NavigationError ||
          events instanceof NavigationCancel ||
          events instanceof RouteConfigLoadEnd) {
          this.loadingService.loadingOff();
        }
      });
    }
  }

}
