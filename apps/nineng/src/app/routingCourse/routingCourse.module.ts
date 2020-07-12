import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { MainComponent } from './main/main.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RoutingCourseRouting } from './routingCourse.routing';
import { CanLoadAuthGuard } from './services/can-load-auth.guard';
import { CustomPreloadingStrategy } from './services/custom-preloading.strategy';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    AboutComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RoutingCourseRouting,
    SharedModule,
  ],
  providers: [
    CanLoadAuthGuard,

  ],
  exports: [],
})
export class RoutingCourseModule { }
