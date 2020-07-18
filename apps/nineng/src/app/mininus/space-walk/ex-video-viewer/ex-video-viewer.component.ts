import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-video-viewer',
  templateUrl: './ex-video-viewer.component.html',
  styleUrls: ['./ex-video-viewer.component.scss']
})
export class ExVideoViewerComponent implements OnInit {
  static label = 'And Yet It Moves';
  constructor() { }

  ngOnInit(): void {
  }

}
