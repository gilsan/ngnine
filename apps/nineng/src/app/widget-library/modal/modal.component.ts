import {Component, Input, OnInit, TemplateRef} from '@angular/core';

import { EventManager } from '@angular/platform-browser';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  body: TemplateRef<any>;

  @Input()
  hideOnEsc = true;

  @Input()
  hideOnClickOutside = true;

  constructor(
    private modalService: ModalService, 
    private eventManager: EventManager
  ) { }

  ngOnInit() {
     this.eventManager.addGlobalEventListener('window','keyup.esc', () =>{
       if(this.hideOnEsc) {
        this.close();
       }
        
     });
  }

  onClickOutsideModal(){   
     if(this.hideOnClickOutside) {
      this.close();
     }  
  }

  cancelClick(evt: MouseEvent){
    evt.preventDefault();
    evt.stopPropagation();
  }

  close() {
    this.modalService.close();
  }

}
