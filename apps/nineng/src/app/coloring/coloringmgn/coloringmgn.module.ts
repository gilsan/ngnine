import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// tslint:disable-next-line:ordered-imports
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
// tslint:disable-next-line:ordered-imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MaterialModule } from '../../material.module';
import { ColoringmgnRoutingModule } from './coloringmgn-routing.module';
import { ColoringmgnComponent } from './coloringmgn.component';
import { DepartComponent } from './depart/depart/depart.component';
import { LibComponent } from './depart/lib/lib.component';
import { BasicComponent } from './music/basic/basic.component';
import { DefaultComponent } from './music/default/default.component';
import { LunchComponent } from './music/lunch/lunch.component';
import { RecordComponent } from './music/record/record.component';

@NgModule({
  declarations: [
    ColoringmgnComponent,
    BasicComponent,
    DefaultComponent,
    LunchComponent,
    RecordComponent,
    LibComponent,
    DepartComponent,

  ],
  imports: [
    CommonModule,
    ColoringmgnRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxAudioPlayerModule,
    MaterialModule,
  ],
})
export class ColoringmgnModule { }
