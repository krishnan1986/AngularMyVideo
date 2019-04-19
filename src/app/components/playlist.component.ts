import { Component, OnInit ,Input } from '@angular/core';
import { video } from '../model/video';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'my-playlist',
    templateUrl: '../playlist.component.html'
})
export class PlaylistComponent {

    @Input('url') url: string;
    @Input('title') title: string;
   
    constructor(){

        

    }

     ngOnInit() { 
        
       

    
     }

}