import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-theme-select',
  templateUrl: './theme-select.component.html',
  styleUrls: ['./theme-select.component.scss'],
})
export class ThemeSelectComponent implements OnInit {

  constructor(
    public themeService: ThemeService,
  ) { }

  ngOnInit() {
    // console.log('[][][theme-select]', this.themeService.theme, this.themeService.themeList);
  }
}
