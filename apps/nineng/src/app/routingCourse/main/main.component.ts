import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {


  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app/webproject/videoplayer';
  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void { }

}
