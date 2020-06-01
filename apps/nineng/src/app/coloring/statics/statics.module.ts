import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGaugeModule } from 'ngx-gauge';
import { StaticsRoutingModule } from './statics-routing.module';

import { CallStaticComponent } from './call-static/call-static.component';
import { StaticsComponent } from './statics.component';

@NgModule({
  declarations: [StaticsComponent, CallStaticComponent],
  imports: [
    CommonModule,
    StaticsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxGaugeModule,
  ],
})
export class StaticsModule { }
