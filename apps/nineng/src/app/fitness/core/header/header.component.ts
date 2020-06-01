import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showHistoryLink = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(

      filter(e => e instanceof NavigationEnd)
    ).subscribe( (e:NavigationEnd) => {

      this.showHistoryLink = !e.url.startsWith('/fitness/workout');
    })
  }

  goHistory() {
   // console.log('go history');
    this.router.navigate(['/fitness','history']);
  }

  goHome() {
    this.router.navigate(['/fitness','start']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
