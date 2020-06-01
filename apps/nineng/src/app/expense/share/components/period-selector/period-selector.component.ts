import { Component, OnInit } from '@angular/core';
import { PeriodService } from './../../period.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-period-selector',
  templateUrl: './period-selector.component.html',
  styleUrls: ['./period-selector.component.scss']
})
export class PeriodSelectorComponent implements OnInit {

  month: number;
  year: number;

  constructor(
    periodService: PeriodService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('left',sanitizer.bypassSecurityTrustResourceUrl('assets/left.svg'));
    iconRegistry.addSvgIcon('right',sanitizer.bypassSecurityTrustResourceUrl('assets/right.svg'));

    this.month = periodService.getCurrentPerid().month;
    this.year  = periodService.getCurrentPerid().year;

   }

  ngOnInit(): void {
  }

}
