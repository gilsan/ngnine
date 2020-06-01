import { Injectable } from '@angular/core';
import { THEME_LIST_DATA } from '../config';
import { ITheme } from '../domain';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: ITheme;
  themeList: ITheme[];

  constructor() {
    this.themeList = THEME_LIST_DATA;
    this.theme = this.themeList[0];
  }
}
