 /*************
   * 
   * https://github.com/hamedbaatour/Minimus
   * 
   */

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgCircleModule, SvgEllipseModule, SvgLineModule, SvgPathModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgrectModule } from 'angular-svg';

import { AddCardComponent } from './ui/add-card/add-card.component';
import { AddComponent } from './pages/add/add.component';
import { AdminComponent } from './css/admin/admin.component';
import { AirbnbComponent } from './css/grid/airbnb/airbnb.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './guards/auth.service';
import { BarComponent } from './charts/bar/bar.component';
import { BasicComponent } from './css/grid/basic/basic.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChartService } from './charts/chart.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { CssModule } from './css/css.module';
import { DetailsComponent } from './pages/details/details.component';
import { ErrorComponent } from './ui/error/error.component';
import { FbService } from './services/fb.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FreelancerComponent } from './css/grid/freelancer/freelancer.component';
import { GaugeChartModule } from 'angular-gauge-chart'
import { GaugeComponent } from './charts/gauge/gauge.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LineComponent } from './charts/line/line.component';
import { MaterialModule } from '../material.module';
import { MenuHoverDirective } from './css/directives/menu-hover.directive';
import { MenuNaviComponent } from './menu-navi/menu-navi.component';
import { MininusComponent } from './mininus.component';
// import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { MininusRoutingModule } from './mininus-routing.module';
import { NetflixComponent } from './css/netflix/netflix.component';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxGaugeModule } from 'ngx-gauge';
import { PieComponent } from './charts/pie/pie.component';
import { RackComponent } from './monitor/rack/rack.component';
import { RealComponent } from './css/grid/real/real.component';
import { Service } from './guards/service';
import { TestComponent } from './test/test.component';
import { TestService } from './test/test.service';
import { TopologyComponent } from './monitor/topology/topology.component';
import { VlogComponent } from './css/grid/vlog/vlog.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { WeatherService } from './services/weather.service';
import { WidgetModule } from '../widget-library/widget.module';
import { AuInputComponent } from './ng-advanced-library/au-input/au-input.component';
import { NgTapComponent } from './ng-advanced-library/ng-tap/ng-tap.component';
import { NgModalComponent } from './ng-advanced-library/ng-modal/ng-modal.component';
import { CourseResolver } from './components/ngrx/course/course.resolver';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
 
 
// import { environment } from '../../environments/environment'; 
    
@NgModule({
  declarations: [
    MininusComponent,
    HomeComponent,
    WeatherCardComponent,
    DetailsComponent,
    AddCardComponent,
    ErrorComponent,
    AddComponent,
    TestComponent,
    LineComponent,
    BarComponent,
    PieComponent,
    GaugeComponent,
    TopologyComponent,
    RackComponent,
    MenuHoverDirective,
    NetflixComponent,
    AdminComponent,
    BasicComponent,
    VlogComponent,
    RealComponent,
    FreelancerComponent,
    AirbnbComponent,
    MenuNaviComponent,
    AuInputComponent,
    NgTapComponent,
    NgModalComponent,
 
  ],
  imports: [
   
    CommonModule,
    HttpClientModule,
    MininusRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  //  AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    
    AngularFirestoreModule,
    MaterialModule,
   // NguiAutoCompleteModule,
    NgxEchartsModule,
    NgxGaugeModule,
    GaugeChartModule,
    ComponentsModule,
    CssModule,
   // FontAwesomeModule ,
  // BrowserAnimationsModule,
    SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgrectModule ,SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule,
    WidgetModule,
  ],
  providers: [
    WeatherService,
    FbService,
    ChartService,
    Service,
    TestService,
     AuthService,
     CourseResolver
  ],
  exports: [
   
  ]
})
export class MininusModule { 

}
