import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';

@Component({
  selector: "app-welness-and-spa",
  templateUrl: "./welness-and-spa.component.html",
  styleUrls: ["./welness-and-spa.component.scss"]
})
export class WelnessAndSpaComponent implements OnInit {

  isShow = false;
  constructor(
    private modalService: ModalsService,
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  close() {
    this.modalService.close();
  }

}
