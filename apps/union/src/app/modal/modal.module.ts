import { CommonModule } from '@angular/common';
import { ContentsComponent } from './contents/contents.component';
import { ModalComponent } from './modal.component';
import { ModalOpenCloseDirective } from './modal-open-close.directive';
import { ModalService } from './modal.service';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ModalComponent, ContentsComponent,ModalOpenCloseDirective  ],
  imports: [
    CommonModule
  ],
  providers: [
    ModalService
  ],
  exports: [
    ModalComponent, ContentsComponent,
    ModalOpenCloseDirective,
    
  ]
})
export class ModalModule { 
     static forRoot() {
       return {
           ngModule: ModalModule,
           providers: [ ModalService]  
       }
    }
}
