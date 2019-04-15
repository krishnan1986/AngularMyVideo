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
    private myFunctionCallSource2 = new Subject();
    private myFunctionCallSource3 = new Subject();
    private myFunctionCallSource4 = new Subject();

    myFunctionCalled$ = this.myFunctionCallSource.asObservable();
    myFunctionCalled1$ = this.myFunctionCallSource1.asObservable();
     myFunctionCalled2$ = this.myFunctionCallSource2.asObservable();
    myFunctionCalled3$ = this.myFunctionCallSource3.asObservable();
    myFunctionCalled4$ = this.myFunctionCallSource4.asObservable();

    callMyFunction(){
        this.myFunctionCallSource.next();
    }

    pause()
    {
        this.myFunctionCallSource1.next();
    }

    increaseVol()
    {
        this.myFunctionCallSource2.next();
    }

    decreaseVol()
    {
        this.myFunctionCallSource3.next();
    }

    reload()
    {
        this.myFunctionCallSource4.next();
    }


}