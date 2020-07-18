import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpaceWalkComponent } from './spacewalk.component';
import { SpaceWalkRoutingModule } from './spacewalk.routing';
import { WelcomComponent } from './welcom/welcom.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ExCenteringComponent } from './ex-centering/ex-centering.component';
import { ExSandboxComponent } from './ex-sandbox/ex-sandbox.component';
import { ExBlocksComponent } from './ex-blocks/ex-blocks.component';
import { ExDebuggingComponent } from './ex-debugging/ex-debugging.component';
import { ExImageGalleryComponent } from './ex-image-gallery/ex-image-gallery.component';
import { ExPlayCardsComponent } from './ex-play-cards/ex-play-cards.component';
import { ExSpanningComponent } from './ex-spanning/ex-spanning.component';
import { ExOverlapComponent } from './ex-overlap/ex-overlap.component';
import { ExFormsComponent } from './ex-forms/ex-forms.component';
import { ExMediaObjectsComponent } from './ex-media-objects/ex-media-objects.component';
import { ExChessboardComponent } from './ex-chessboard/ex-chessboard.component';
import { ExTransformComponent } from './ex-transform/ex-transform.component';
import { ExFullViewportComponent } from './ex-full-viewport/ex-full-viewport.component';
import { ExVideoViewerComponent } from './ex-video-viewer/ex-video-viewer.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    SpaceWalkComponent,
    WelcomComponent,
    MainMenuComponent,
    ExCenteringComponent,
    ExSandboxComponent,
    ExBlocksComponent,
    ExDebuggingComponent,
    ExImageGalleryComponent,
    ExPlayCardsComponent,
    ExSpanningComponent,
    ExOverlapComponent,
    ExFormsComponent,
    ExMediaObjectsComponent,
    ExChessboardComponent,
    ExTransformComponent,
    ExFullViewportComponent,
    ExVideoViewerComponent,
    ResourcesComponent,
  ],
  imports: [
    CommonModule,
    SpaceWalkRoutingModule,
  ],
  exports: [],
})
export class SpaceWalkModule { }
