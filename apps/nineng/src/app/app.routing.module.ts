import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BackboneComponent } from './backbone/backbone.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: SignupComponent },
   {
      path: 'home', children: [
         {
            path: '',
            loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
         },
      ],
   },
   {
      path: 'map', children: [
         {
            path: '',
            loadChildren: () => import('./ol/map.module').then((m) => m.MapModule),
         }
      ],
   },
   {
      path: 'gis', children: [
         {
            path: '',
            loadChildren: () => import('./gis/gis.module').then((m) => m.GisModule)
         }
      ]
   },
   {
      path: 'maps', children: [
         {
            path: '',
            loadChildren: () => import('./openlayers/openlayers.module').then((m) => m.OpenlayersModule),
         }
      ],
   },
   {
      path: 'mininus', children: [
         {
            path: '',
            loadChildren: () => import('./mininus/mininus.module').then((m) => m.MininusModule),
         },
      ],
   },
   {
      path: 'fitness', children: [
         {
            path: '',
            loadChildren: () => import('./fitness/fitness.module').then((m) => m.FitnessModule),
         },
      ],
   },
   {
      path: 'theahotel', children: [
         { path: '', loadChildren: () => import('./theahotel/theahotel.module').then((m) => m.TheahotelModule) },
      ],
   },
   {
      path: 'expenses', children: [
         { path: '', loadChildren: () => import('./expense/expense.module').then((m) => m.ExpenseModule) },
      ],
   },
   {
      path: 'coloring', children: [
         { path: '', loadChildren: () => import('./coloring/coloring.module').then((m) => m.ColoringModule) },
      ],
   },
   {
      path: 'webproject', children: [
         { path: '', loadChildren: () => import('./webproject/webproject.module').then((m) => m.WebprojectModule) },
      ],
   },
   {
      path: 'ngrouting', children: [
         // tslint:disable-next-line: max-line-length
         { path: '', loadChildren: () => import('./routingcourse/routingCourse.module').then((m) => m.RoutingCourseModule) },
      ],
   },
   {
      path: 'topology', component: BackboneComponent
   },
   { path: '**', redirectTo: '/home' },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes),
   ],
   exports: [
      RouterModule,
   ],
})
export class AppRoutingModule {

}
