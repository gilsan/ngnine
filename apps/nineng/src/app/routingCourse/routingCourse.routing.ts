import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main/main.component';
import { CanLoadAuthGuard } from './services/can-load-auth.guard';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'courses',
        //  canLoad: [CanLoadAuthGuard],
        loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule),
      },
      {
        path: 'login', component: LoginComponent,

      },
      { path: 'about', component: AboutComponent },
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutingCourseRouting { }
