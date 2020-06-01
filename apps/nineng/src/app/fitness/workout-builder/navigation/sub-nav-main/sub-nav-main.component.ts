import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav-main',
  templateUrl: './sub-nav-main.component.html',
  styleUrls: ['./sub-nav-main.component.scss']
})
export class SubNavMainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('/builder/workouts');
  }

}
