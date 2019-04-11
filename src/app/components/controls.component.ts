import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoService } from '../service/video.service';
import { PlayerComponent } from './player.component';

@Component({
    selector: 'my-controls',
    template: `<button (click)="playVideo()">Play</button>
    <button (click)="pauseVideo()">Pause </button>
   
    ` 
})
export class ControlsComponent implements OnInit {
   
    // @ViewChild(PlayerComponent) playerComponent: PlayerComponent;
    constructor(private videoService: VideoService) { 
       
    }

    ngOnInit() { 

    }
     playVideo(event: any)
     {
         console.log('playing')
        // this.videoService.play(this.playerComponent.videoplayer)
        this.videoService.callMyFunction();
        
     }

     pauseVideo(event: any)
     {
         console.log('pausing ')
    //     this.videoService.pause(this.playerComponent.videoplayer)
    this.videoService.pause();
        
     }


}