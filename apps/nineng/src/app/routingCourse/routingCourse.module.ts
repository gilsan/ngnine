import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { MainComponent } from './main/main.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RoutingCourseRouting } from './routingCourse.routing';
import { ComponentsModule } from '../mininus/components/components.module';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RoutingCourseRouting,
    ComponentsModule,
  ],
  exports: [],
})
export class RoutingCourseModule { }
