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
    }

    ngOnInit() { 
            console.log(this.movieURL)
    }
    
    

}