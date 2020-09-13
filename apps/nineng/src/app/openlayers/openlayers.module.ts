import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenlayersRoutingModule } from './openlayers-routing.module';
import { OpenlayersComponent } from './openlayers.component';

import { AccessibleComponent } from './layer1/accessible/accessible.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './layer1/maps/map.component';


@NgModule({
  declarations: [
    OpenlayersComponent,
    AccessibleComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    OpenlayersRoutingModule,
    SharedModule
  ]
})
export class OpenlayersModule { }
