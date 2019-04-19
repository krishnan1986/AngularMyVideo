import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { video } from './model/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-video';
  //videos: Array<video> = []

  constructor (private http : HttpClient){

  }

  ngOnInit(){
    // console.log('Initialization...')
    // this.http.get('http://localhost:3000/videos')
    // .subscribe((res: Array<video>)=> {
    //   console.log(res)
    //   this.videos = res;
      
    //     console.log("title is " + this.videos[0].title);
      
    // })
  }
}
