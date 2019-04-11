import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './components/videoplayer.component';
import { PlayerComponent } from './components/player.component';
import { ControlsComponent } from './components/controls.component';
import { VideoService } from './service/video.service';

@NgModule({
  declarations: [
    AppComponent, VideoPlayerComponent, PlayerComponent,ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
