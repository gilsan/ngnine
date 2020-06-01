import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngtemplateoutlet',
  templateUrl: './ngtemplateoutlet.component.html',
  styleUrls: ['./ngtemplateoutlet.component.scss']
})
export class NgtemplateoutletComponent implements OnInit, AfterViewInit {

  // @ViewChild()
  constructor() { }
  myContext = {$implicit: 'World', localSk: 'Svet'};
  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

}
