import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClarityModule } from "@clr/angular";

import { GisRoutingModule } from './gis-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { KidsComponent } from './components/kids/kids.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    KidsComponent,
  ],
  imports: [

    CommonModule,
    GisRoutingModule,
    HttpClientModule,
    ClarityModule
  ]
})
export class GisModule { }
