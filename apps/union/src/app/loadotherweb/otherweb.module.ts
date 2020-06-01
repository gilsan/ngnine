import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank/blank.component';
import { AppResolve } from './_resolvers/app.resolver';
import { WithresolverComponent } from './withresolver/withresolver.component';
import { HomeComponent } from './home/home.component';
import { ExternalLinkDirective } from './directives/external-link.directive';
import { OtherWebRouting } from './otherweb.routing';
import { OtherWebComponent } from './otherweb.component';


@NgModule({
   declarations: [
    OtherWebComponent,
    BlankComponent,   
    WithresolverComponent,
    HomeComponent, 
    ExternalLinkDirective  
   ],
   imports: [
       CommonModule,
       OtherWebRouting
   ],
   exports: [],
   providers: [
    AppResolve
   ]
})
export class OtherWebModule {

}