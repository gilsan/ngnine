import {AfterContentInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList} from '@angular/core';

import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: [ './tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit, AfterContentInit {

  @Input() title: string;
  @Input() backgroundColor: any;
  constructor() { }

  @ContentChildren(TabComponent)
   tabs: QueryList<TabComponent>;

  ngOnInit() {
  }

  ngAfterContentInit() {
  //  console.log('[tab panel]', this.tabs);
    const selectedTab = this.tabs.find((tab) => tab.selected);
    if (!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  selected(tab: TabComponent) {
    this.tabs.forEach( (tap) => tap.selected = false);
    tab.selected = true;
  }

  panelHeaderColor() {
    if (this.backgroundColor) {
      return {'background-color': this.backgroundColor};
    }
    return false;
  }

}
