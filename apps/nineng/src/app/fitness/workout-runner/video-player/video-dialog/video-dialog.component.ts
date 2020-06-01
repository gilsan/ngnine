import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
// import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';
// import { DialogRef, ModalComponent, CloseGuard } from 'ngx-modialog';

export interface DialogData {
  videoId: string;
}

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent implements OnInit {

  videoId: SafeResourceUrl;
  private youtubeUrlPrefix = '//www.youtube.com/embed/';

  constructor(

    // public dialog: DialogRef<VideoDialogContext>,
    public dialogRef: MatDialogRef<VideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + this.data.videoId);
  }

  ok() {
    this.dialogRef.close();
    // this.dialog.close();
  }

}
