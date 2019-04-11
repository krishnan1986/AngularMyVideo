import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-video-player',
    template :`<h2> My video player </h2>
                <my-player></my-player>
                <my-controls></my-controls>
                
    `
})
export class VideoPlayerComponent implements OnInit {
   
    constructor() { }

    ngOnInit() { 

    }

}