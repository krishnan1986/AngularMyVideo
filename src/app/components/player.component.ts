import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { VideoService } from '../service/video.service';

@Component({
    selector: 'my-player',
    template: `<div>
    <video #videoPlayer width="320" height="240" >
    <source src="{{movieURL}}"/>
    </video>
    </div>
    
    
    `
})
export class PlayerComponent implements OnInit {
    @ViewChild('videoPlayer') videoplayer: ElementRef;
    volLowControl : number = 0.0;
    volHighControl : number= 0.0;
    
    movieURL = 'https://ia902505.us.archive.org/7/items/Birds021/Birds%2002-1.m4v';
    constructor(private videoService: VideoService) { 
        this.videoService.myFunctionCalled$.subscribe(
            res => this.videoplayer.nativeElement.play(),
            err => console.log('MyService error', err)
        );

        this.videoService.myFunctionCalled1$.subscribe(
            res => this.videoplayer.nativeElement.pause(),
            err => console.log('MyService error', err)
        );
        this.videoService.myFunctionCalled2$.subscribe(
            res => {
                
               if(this.videoplayer.nativeElement.volume <=1.0) {
                    this.videoplayer.nativeElement.volume=this.videoplayer.nativeElement.volume+0.1;
               }
               else{
                this.videoplayer.nativeElement.volume=0.2;
               }  
            },
            err => console.log('MyService error', err)
        );
        this.videoService.myFunctionCalled3$.subscribe(
            res => {
                 if(this.videoplayer.nativeElement.volume>0.0){
                this.videoplayer.nativeElement.volume=this.videoplayer.nativeElement.volume-0.1;
            }
                 }
            ,
            err => console.log('MyService error', err)
        );

        this.videoService.myFunctionCalled4$.subscribe(
            res => {this.videoplayer.nativeElement.pause();
                this.videoplayer.nativeElement.currentTime=0;
                this.videoplayer.nativeElement.play();
            },
            err => console.log('MyService error', err)
        );
        this.videoService.myFunctionCalled5$.subscribe(
            res => {this.videoplayer.nativeElement.muted=!this.videoplayer.nativeElement.muted;
            },
            err => console.log('MyService error', err)
        );

        this.videoService.myFunctionCalled6$.subscribe(
            res => {this.videoService.inc();}
        );

        this.videoService.myFunctionCalled7$.subscribe(

            res =>  {this.videoService.dec();}
        )
    }

    ngOnInit() { 
            console.log(this.movieURL)
    }
    
    

}