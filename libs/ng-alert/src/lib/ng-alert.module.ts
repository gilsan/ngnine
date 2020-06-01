import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAlertComponent } from './ng-alert/ng-alert.component';
import { NgAlertService } from './ng-alaert.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgAlertComponent],
  providers: [
    NgAlertService
  ],
  exports: [NgAlertComponent]
})
export class NgAlertModule {}
