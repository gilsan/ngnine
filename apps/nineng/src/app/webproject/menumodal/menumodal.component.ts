import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-menumodal',
  templateUrl: './menumodal.component.html',
  styleUrls: ['./menumodal.component.scss'],
})
export class MenumodalComponent implements OnInit {

  form: FormGroup;
  sideBar = false;
  showmodal = false;
  closemodal = false;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.form = this.fb.group({
      name: [],
      email: [],
      password: [],
      confirm: [],
    });
  }

  toggle() {
    this.sideBar = !this.sideBar;
  }

  navbar() {
    if (this.sideBar) {
      return { 'show-nav': true };
    }
    return { 'show-nav': false, 'hide-nav': true };
  }

  showModal() {
    this.showmodal = !this.showmodal;
  }

  toggleModal() {
    this.showmodal = !this.showmodal;
  }

  modalShowHide() {
    if (this.showmodal) {
      return { 'show-modal': true };
    } else {
      return { 'show-modal': false };
    }
  }

  closeModal() {
    if (this.closemodal) {
      return { 'show-modal': false };
    }
    return { 'show-modal': true };
  }

}
