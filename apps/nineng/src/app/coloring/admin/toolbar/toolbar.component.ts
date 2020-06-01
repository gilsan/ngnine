import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationService } from '../services/navigation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {

  @Input() sidenav: MatDrawer;

  constructor(
     public navigationService: NavigationService,
  ) {

  }

}
