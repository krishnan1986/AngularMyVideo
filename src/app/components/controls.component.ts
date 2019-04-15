import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoService } from '../service/video.service';
import { PlayerComponent } from './player.component';

@Component({
    selector: 'my-controls',
    templateUrl:'../controls.component.html'
})
export class ControlsComponent implements OnInit {
   
    // @ViewChild(PlayerComponent) playerComponent: PlayerComponent;
    toggleShowHide: string ="visible"; 
    constructor(private videoService: VideoService) { 
       
    }

    ngOnInit() { 

    }
     playVideo(event: any)
     {
         console.log('playing')
        // this.videoService.play(this.playerComponent.videoplayer)
        this.videoService.callMyFunction();
        this.toggleShowHide="hidden";
        
     }

     pauseVideo(event: any)
     {
         console.log('pausing ')
    //     this.videoService.pause(this.playerComponent.videoplayer)
    
    this.videoService.pause();
    this.toggleShowHide="visible";
        
     }

     increaseVolume(event:any)
     {
         console.log('increasing volume');
         this.videoService.increaseVol();

     }

     decreaseVolume(event:any)
     {
         console.log('decreasing volume');
         this.videoService.decreaseVol();
         
     }


}