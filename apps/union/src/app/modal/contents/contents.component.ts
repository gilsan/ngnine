import { Component, OnInit } from '@angular/core';

import { ModalService } from '../modal.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  isShow = false;
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.close();
  }

}
