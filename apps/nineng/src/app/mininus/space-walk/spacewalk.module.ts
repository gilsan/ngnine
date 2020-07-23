import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CaptionedImageComponent } from './captioned-image/captioned-image.component';
import { ExBlocksComponent } from './ex-blocks/ex-blocks.component';
import { ExCenteringComponent } from './ex-centering/ex-centering.component';
import { ExChessboardComponent } from './ex-chessboard/ex-chessboard.component';
import { ExDebuggingComponent } from './ex-debugging/ex-debugging.component';
import { ExFormsComponent } from './ex-forms/ex-forms.component';
import { ExFullViewportComponent } from './ex-full-viewport/ex-full-viewport.component';
import { ExImageGalleryComponent } from './ex-image-gallery/ex-image-gallery.component';
import { ExMediaObjectsComponent } from './ex-media-objects/ex-media-objects.component';
import { ExOverlapComponent } from './ex-overlap/ex-overlap.component';
import { ExPlayCardsComponent } from './ex-play-cards/ex-play-cards.component';
import { ExSandboxComponent } from './ex-sandbox/ex-sandbox.component';
import { ExSpanningComponent } from './ex-spanning/ex-spanning.component';
import { ExTransformComponent } from './ex-transform/ex-transform.component';
import { ExVideoViewerComponent } from './ex-video-viewer/ex-video-viewer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { ResourcesComponent } from './resources/resources.component';
import { SpaceWalkComponent } from './spacewalk.component';
import { SpaceWalkRoutingModule } from './spacewalk.routing';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { WelcomComponent } from './welcom/welcom.component';

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
    PlayingCardComponent,
    MediaObjectComponent,
    CaptionedImageComponent,
    VideoListComponent,
    VideoThumbnailComponent,
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule,
    SpaceWalkRoutingModule,
  ],
  exports: [],
})
export class SpaceWalkModule { }
