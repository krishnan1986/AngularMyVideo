import { Component, OnInit ,Input} from '@angular/core';
import { video } from '../model/video';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'my-video-player',
    template :`<h2> My video player </h2>
                <my-player></my-player>
                <my-controls count="0" (countIncremented)="handleCountIncrement($event)"></my-controls>
                <table>
                <my-playlist *ngFor="let video of videos" [title]="video.title" [url]="video.url" ></my-playlist>
                <!-- <tr>{{video.title}}</tr>
                 <tr>{{video.url}}>/tr>-->
                </table>
                 <!--<my-playlist title="test" url="url1"></my-playlist>
                 <my-playlist title="test1" url="url2"></my-playlist>-->
                
    `
})
export class VideoPlayerComponent implements OnInit {
   
    @Input('url') url: string;
    @Input('title') title: string;
    totalCount : number =0 ;
    videos: Array<video> = []
    
    constructor(private http: HttpClient) { }

    ngOnInit() { 
        this.http.get('http://localhost:3000/videos')
        .subscribe((res: Array<video>)=> {
          console.log(res)
          this.videos = res;
        })

    }

    handleCountIncrement(newCount: number)
    {
        this.totalCount=newCount;
        console.log('new count is '+newCount);
    }

}