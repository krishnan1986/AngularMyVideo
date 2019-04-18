import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-video-player',
    template :`<h2> My video player </h2>
                <my-player></my-player>
                <my-controls count="0" (countIncremented)="handleCountIncrement($event)"></my-controls>
                
    `
})
export class VideoPlayerComponent implements OnInit {
   
    totalCount : number =0 ;
    constructor() { }

    ngOnInit() { 

    }

    handleCountIncrement(newCount: number)
    {
        this.totalCount=newCount;
        console.log('new count is '+newCount);
    }

}