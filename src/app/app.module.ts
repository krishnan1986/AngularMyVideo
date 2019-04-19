import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './components/videoplayer.component';
import { PlayerComponent } from './components/player.component';
import { ControlsComponent } from './components/controls.component';
import { VideoService } from './service/video.service';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './components/playlist.component';

@NgModule({
  declarations: [
    AppComponent, VideoPlayerComponent, PlayerComponent,ControlsComponent,PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
