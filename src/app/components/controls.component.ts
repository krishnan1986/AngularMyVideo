import { Component, OnInit, ViewChild, ElementRef,Input,Output,EventEmitter } from '@angular/core';
import { VideoService } from '../service/video.service';

@Component({
    selector: 'my-controls',
    templateUrl: '../controls.component.html'
})
export class ControlsComponent implements OnInit {
     @Input('count') count: number = 0
     unliked: number = 0
     @Output('countIncremented') countIncremented: EventEmitter<number> = new EventEmitter();
    // // @ViewChild(PlayerComponent) playerComponent: PlayerComponent;
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

     reloadVideo(event:any)
     {
         console.log('reloading video');
         this.videoService.reload();
     }

     muteUnMuteVideo(event:any)
     {
         console.log(event);
         this.videoService.muteUnMuteVideo();
     }

     increaseLike(event:any)
     {
         console.log('increasing like');
         this.count++;
         this.countIncremented.emit(this.count);
         //this.videoService.inc();
     }

     decreaseLike(event:any)
     {
        console.log('decreasing like');
       // if(this.count>0){
            this.unliked++;
         this.countIncremented.emit(this.unliked);
       // }
       // this.count--;
       //this.videoService.dec();
     }


}