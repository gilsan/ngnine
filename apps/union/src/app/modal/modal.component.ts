import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  @Input() body: TemplateRef<any>;

  ngOnInit(): void {
    console.log(this.body);
  }

  close() {
    this.modalService.close();
  }

}
