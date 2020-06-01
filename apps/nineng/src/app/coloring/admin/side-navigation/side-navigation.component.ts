import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavigationItem } from '../domain';
import { NavigationService } from '../services/navigation.service';
// import { NavigationGroup } from '../domain/navigation-group';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  panelOpenState = false;
//  public navigationList: NavigationGroup[];

  constructor(
    public navigationService: NavigationService,
    private router: Router,
  ) { }

  ngOnInit() {
  //  console.log(this.navigationService.navigationList);
    this.updateNavigation(this.router.url);
  }

  updateNavigation(url: string) {
  //  console.log('updateNavigation: ' + url);
    this.navigationService.getNavigationList().forEach((g) => {
      g.items.forEach((i) => {
        if ('/admin/' + i.routerLink === url) {
          this.navigationService.selectedNavigationItem = i;
        }
      });
    });
    // if not found then set first element as active
    if (this.navigationService.selectedNavigationItem == null) {
      console.log('updateNavigation: URL address not mapped to menu selection. Using default');
      this.navigationService.selectedNavigationItem = this.navigationService.getNavigationList()[0].items[0];
    }
    this.navigationService.updateSelectedNavigationGroup();
  }

  onClickNavigationItem(navigationItem) {
    this.navigationService.selectedNavigationItem = navigationItem;
    this.navigationService.updateSelectedNavigationGroup();
  }

  public isSelectedItem(navigationItem: INavigationItem) {
    return navigationItem === this.navigationService.selectedNavigationItem;
  }

}
