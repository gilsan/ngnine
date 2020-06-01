/**
 * https://github.com/duluca/local-weather-appmplemented    
 * https://github.com/duluca/lemon-mart.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// https://github.com/duluca/lemon-mart

import { FlexLayoutModule } from '@angular/flex-layout';
import { LemonmartRoutingModule } from './lemonmart.routing';

// import { MaterialModule } from '../../material.module';

import { LemonmartComponent } from './lemonmart.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LemonmartComponent,
    ProfileComponent,   
    NavigationMenuComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
  //  MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LemonmartRoutingModule,
    SharedModule
  ]
})
export class LemonmartModule { }
