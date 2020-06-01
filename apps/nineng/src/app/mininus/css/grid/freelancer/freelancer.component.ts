import { Component, OnInit } from '@angular/core';
import { portfolios} from './data';
import { Portfolios } from './model';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {

  folios: Portfolios[];
  constructor() { }

  ngOnInit(): void {
    this.folios = portfolios;
    console.log('[17][][]', this.folios);
  }

}
