// sofia profile internal restart reloadxml
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portpolio',
  templateUrl: './portpolio.component.html',
  styleUrls: ['./portpolio.component.scss']
})
export class PortpolioComponent implements OnInit {

  showlinks = false;
  constructor() { }

  ngOnInit(): void {
  }

  linksToggle() {
    console.log('linksToggle()');
     this.showlinks =!this.showlinks;
  }

  showLinks() {
    if (this.showlinks) {
      return {"show__links": true};
    }
    return {"show__links": false};
  }

}
