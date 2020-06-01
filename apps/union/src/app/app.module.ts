import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CrouselComponent } from './crousel/crousel.component';
import { ExampleDirective } from './directives/example.directive';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { NgAlertModule } from '@ngnine/ng-alert';
import { NgModule } from '@angular/core';
import { TapComponent } from './tap/tap.component';

@NgModule({
  declarations: [   
    AppComponent,   ExampleDirective, CrouselComponent, TapComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAlertModule,
   // BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
  //
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
   
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /***
   * 
   * 
   */
}
