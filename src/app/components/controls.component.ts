import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoService } from '../service/video.service';
import { PlayerComponent } from './player.component';

@Component({
    selector: 'my-controls',
    template: `<button (click)="playVideo()" [style.visibility]="toggleShowHide" class="btn btn-default">Play</button>
    <button (click)="pauseVideo()" class="btn btn-default">Pause </button>
    <button type="button" class="btn btn-default btn-sm" (click)="increaseVolume()">
    <span class="glyphicon glyphicon-plus"></span> Volume Up
  </button>
  <button type="button" class="btn btn-default btn-sm" (click)="decreaseVolume()">
  <span class="glyphicon glyphicon-minus"></span> Volume Down
</button>
<!--<h2>Video progress</h2>
<div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
      70%
    </div>-->
   
    ` 
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