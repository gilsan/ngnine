import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlankComponent } from './blank/blank.component';
import { AppResolve } from './_resolvers/app.resolver';


const routes: Routes = [
    { path: 'paymentmethod.htm',
        component: BlankComponent,
        resolve: {
          paymentMethods: AppResolve
        }
      },
  ];


@NgModule({
   imports: [ RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class OtherWebRouting {

}