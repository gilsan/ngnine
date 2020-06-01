import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.component.html',
  styleUrls: ['./musicplayer.component.scss']
})
export class MusicplayerComponent implements OnInit {
  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app/webproject/expensetracker';
  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }

}
