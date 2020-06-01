import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecordingRoutingModule } from './recording-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { MgnComponent } from './mgn/mgn.component';
import { ReceiveComponent } from './receive/receive.component';
import { RecordingComponent } from './recording.component';
import { RecordingService } from './recording.service';
import { SendComponent } from './send/send.component';

@NgModule({
  declarations: [ReceiveComponent, SendComponent, MgnComponent, RecordingComponent],
  imports: [
    CommonModule,
    RecordingRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxAudioPlayerModule,
  ],
  providers: [RecordingService],
})
export class RecordingModule { }
