import { AnimeComponent } from './anime/anime.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CoffeeComponent } from './coffee/coffee.component';
import { CommonModule } from '@angular/common';
import { CrouselComponent } from './flex/webagency/crousel/crousel.component';
import { FlexComponent } from './flex/flex.component';
import { MaterialModule } from '../../material.module';
import { MusicComponent } from './music/music.component';
import { NgModule } from '@angular/core';
import { PortpolioComponent } from './flex/portpolio/portpolio.component';
import { SideBarDirective } from './directives/sidebar.directive';
import { VideoDirective } from './directives/video.directive';
import { WebDirective } from './directives/web.directive';
import { WebagencyComponent } from './flex/webagency/webagency.component';
import { CodemasterComponent } from './codemaster/codemaster.component';

// import { DomComponent } from './dom/dom.component';


 
// import { AdminComponent } from './admin/admin.component';

@NgModule({
    declarations: [
     //   AdminComponent,,
        CoffeeComponent,
        SideBarDirective,
        VideoDirective,
        FlexComponent,
        AnimeComponent,
        MusicComponent,
       // DomComponent,
        PortpolioComponent,
        WebagencyComponent,
        WebDirective,
        CrouselComponent,
        CodemasterComponent
       
    ],
    imports: [
        CommonModule,
        MaterialModule,
        CarouselModule,
        
    ]
})
export class CssModule {

}