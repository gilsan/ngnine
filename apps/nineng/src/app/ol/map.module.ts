import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './component/map/map.component';
import { MaterialModule } from '../material.module';
import { ClarityModule } from "@clr/angular";

import { MapRoutingModule } from './map.routing.module';
import { HeaderComponent } from './component/header/header.component';
import { BasicComponent } from './component/basic/basic.component';
import { OlProjComponent } from './component/ol-proj/ol-proj.component';
import { MarkersComponent } from './component/markers/markers.component';
import { PopupComponent } from './component/popup/popup.component';
import { ControlComponent } from './component/control/control.component';
import { FeaturesComponent } from './component/features/features.component';
import { TrainingComponent } from './component/training/training.component';
import { CityGuideComponent } from './component/city-guide/city-guide.component';
import { Layer1Module } from './component/layer1/layer1.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MapComponent,
    HeaderComponent,
    BasicComponent,
    OlProjComponent,
    MarkersComponent,
    PopupComponent,
    ControlComponent,
    FeaturesComponent,
    TrainingComponent,
    CityGuideComponent,
  ],
  imports: [

    CommonModule,
    HttpClientModule,
    MapRoutingModule,
    MaterialModule,
    ClarityModule,
    Layer1Module,
  ]
})
export class MapModule { }
