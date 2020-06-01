import {Component, Input, OnInit, TemplateRef} from '@angular/core';

import { EventManager } from '@angular/platform-browser';
import { ModalsService } from '../../../services/modals.service';

@Component({
  selector: 'modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  @Input()
  body: TemplateRef<any>;

  @Input()
  hideOnEsc = true;

  @Input()
  hideOnClickOutside = true;

 

  constructor(
    private modalService: ModalsService, 
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
    console.log("[50][modals component][close]");
    this.modalService.close();
  }

}
