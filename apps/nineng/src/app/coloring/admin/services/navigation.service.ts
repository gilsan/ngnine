import { Injectable } from '@angular/core';
import { INavigationGroup, INavigationItem  } from '../domain';
import { NAVIGATION_MENU_DATA } from './../config/navigation-menu-data';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  public navigationList: INavigationGroup[];
  public selectedNavigationItem: INavigationItem;
  private selectedNavigationGroup: INavigationGroup;

  constructor() {
     this.navigationList = NAVIGATION_MENU_DATA;
   }

   public getNavigationList(): INavigationGroup[] {
       return this.navigationList;
   }

   public updateSelectedNavigationGroup() {
     this.navigationList.forEach((g) => {
         g.items.forEach( (i) => {
           if (this.selectedNavigationItem.name === i.name) {
             this.selectedNavigationGroup = g;
           }
         });
     });
   }

}
