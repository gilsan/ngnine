import { RouterModule, Routes } from '@angular/router';

import { AddCardComponent } from './ui/add-card/add-card.component';
import { AddComponent } from './pages/add/add.component';
import { AdminComponent } from './css/admin/admin.component';
import { AirbnbComponent } from './css/grid/airbnb/airbnb.component';
import { AuInputComponent } from './ng-advanced-library/au-input/au-input.component';
import { BarComponent } from './charts/bar/bar.component';
import { BasicComponent } from './css/grid/basic/basic.component';
import { CanvasComponent } from './components/rxjs/canvas/canvas.component';
import { ClassproComponent } from './components/injector/classpro/classpro.component';
import { CodemasterComponent } from './css/codemaster/codemaster.component';
import { CoffeeComponent } from './css/coffee/coffee.component';
import { ComponentrefComponent } from './components/mgndom/componentref/componentref.component';
import { DetailsComponent } from './pages/details/details.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ElementrefComponent } from './components/mgndom/elementref/elementref.component';
import { FactoryproComponent } from './components/injector/factorypro/factorypro.component';
import { FlexComponent } from './css/flex/flex.component';
import { FreelancerComponent } from './css/grid/freelancer/freelancer.component';
import { GameComponent } from './components/rxjs/game/game.component';
import { GaugeComponent } from './charts/gauge/gauge.component';
import { HomeComponent } from './pages/home/home.component';
import { LazyMainComponent } from './components/lazyload/lazymain.component';
import { LazymoduleComponent } from './components/lazymodule/lazymodule.component';
import { LineComponent } from './charts/line/line.component';
import { MininusComponent } from './mininus.component';
import { MusicComponent } from './css/music/music.component';
import { NetflixComponent } from './css/netflix/netflix.component';
import { NgModalComponent } from './ng-advanced-library/ng-modal/ng-modal.component';
import { NgModule } from '@angular/core';
import { NgTapComponent } from './ng-advanced-library/ng-tap/ng-tap.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { NgtemplateoutletComponent } from './components/mgndom/ngtemplateoutlet/ngtemplateoutlet.component';
import { PieComponent } from './charts/pie/pie.component';
import { PortpolioComponent } from './css/flex/portpolio/portpolio.component';
import { RackComponent } from './monitor/rack/rack.component';
import { RealComponent } from './css/grid/real/real.component';
import { TemplaterefComponent } from './components/mgndom/templateref/templateref.component';
import { TestComponent } from './test/test.component';
import { TetrisComponent } from './components/rxjs/tetris/tetris.component';
import { TopologyComponent } from './monitor/topology/topology.component';
import { ValueproComponent } from './components/injector/valuepro/valuepro.component';
import { ViewContainerrefComponent } from './components/mgndom/view-containerref/view-containerref.component';
import { ViewrefComponent } from './components/mgndom/viewref/viewref.component';
import { VlogComponent } from './css/grid/vlog/vlog.component';
import { WebagencyComponent } from './css/flex/webagency/webagency.component';
import { CourseComponent } from './components/ngrx/course/course.component';
import { CourseResolver } from './components/ngrx/course/course.resolver';
// import { FormarrayComponent } from './components/formarray/formarray.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProgrssbarComponent } from './rxjs-recipe/progrssbar/progrssbar.component';

const routes: Routes = [
  { path: '', component: MininusComponent, children: [
      { path: '', component: HomeComponent},
      { path: 'add', component: AddComponent},
      { path: 'detail/:city', component: DetailsComponent},
      { path: 'charts', children: [
        { path: 'line', component: LineComponent},
        { path: 'bar', component: BarComponent},
        { path: 'pie', component: PieComponent},
        { path: 'gauge', component: GaugeComponent}
      ]},
      { path: 'monitor', children: [
        { path: 'topology', component: TopologyComponent},
        { path: 'hw', component: RackComponent}
      ]},
       { path: 'components', children: [
          { path: 'game',    component: GameComponent},
          { path: 'tetris',  component: TetrisComponent},
          { path: 'canvas',  component: CanvasComponent},
          { path: 'coffee',  component: CoffeeComponent},
          { path: 'flex',    component: FlexComponent},
          { path: 'portpolio', component: PortpolioComponent},
          { path: 'webagency', component: WebagencyComponent},
          { path: 'panel',   component: MusicComponent},
          { path: 'netflix', component: NetflixComponent},
          { path: 'admin',   component: AdminComponent},
          { path: 'basic',   component: BasicComponent},
          { path: 'vlog',   component: VlogComponent },
          { path: 'real',   component: RealComponent },
          { path: 'freelancer',   component: FreelancerComponent },
          { path: 'airbnb',   component: AirbnbComponent },
          { path: 'codemaster', component: CodemasterComponent},
          { path: 'elementref', component: ElementrefComponent},
          { path: 'templateref', component: TemplaterefComponent},
          { path: 'viewref', component: ViewrefComponent},
          { path: 'componentref', component: ComponentrefComponent},
          { path: 'viewcomponentref', component: ViewContainerrefComponent},
          { path: 'ngtemplateoutlet', component: NgtemplateoutletComponent},
          { path: 'valuepro', component:  ValueproComponent},
          { path: 'factorypro', component: FactoryproComponent},
          { path: 'classpro', component: ClassproComponent},
          { path: 'lazycomponent', component: LazyMainComponent},
          { path: 'lazymodule', component: LazymoduleComponent},
          { path: 'directive', component: DirectiveComponent},
          { path: 'ngrx', component: NgrxComponent},
          { path: 'formarray', component: FormsComponent},
          { path: 'ngrx/:courseUrl', component: CourseComponent,  }, //resolve: { course: CourseResolver}
       ]},
       {
        path: 'ngrx', children: [
           { path: 'progressbar',component: ProgrssbarComponent},
        ] },

        { path: 'advanced', children: [
            { path: 'auinput', component: AuInputComponent},
            { path: 'taps', component: NgTapComponent},
            { path: 'modal', component: NgModalComponent},
        ]}
  ] },
 /* { path: 'test', component: TestComponent}, */
  { path: 'test', component: TestComponent }
 
];

@NgModule({
  imports: [
 
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MininusRoutingModule {
 
 }
