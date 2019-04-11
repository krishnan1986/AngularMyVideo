import { Injectable, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class VideoService {
    
    // constructor() { }

    // play(videoplayer :ElementRef)
    // {
    //     videoplayer.nativeElement.play();
    // }
    // pause(videoplayer :ElementRef)
    // {
    //     videoplayer.nativeElement.pause();
    // }
    private myFunctionCallSource = new Subject();
    private myFunctionCallSource1 = new Subject();

    myFunctionCalled$ = this.myFunctionCallSource.asObservable();
    myFunctionCalled1$ = this.myFunctionCallSource1.asObservable();

    callMyFunction(){
        this.myFunctionCallSource.next();
    }

    pause()
    {
        this.myFunctionCallSource1.next();
    }

}