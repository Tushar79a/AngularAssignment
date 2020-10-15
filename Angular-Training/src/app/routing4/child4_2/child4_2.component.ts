import { Component, OnInit,OnDestroy} from '@angular/core';
import {TimeInfo} from '../bean/TimeInfo'
import {  TimerServiceService } from '../timer-service.service'

@Component({
  selector: 'app-child4_2',
  templateUrl: './child4_2.component.html',
  styleUrls: ['./child4_2.component.css']
})
export class Child4_2Component implements OnInit,OnDestroy {

  paused : boolean =true;
  timer : number = 0 ;
  isDisabled : boolean = false;
  intTime : number  = 0;
  timeDetail : Array<TimeInfo>;

  constructor(private _timerServiceService : TimerServiceService) { }
  x = setInterval(()=>{
    if(!this.paused && this.timer >0)
    {
      this.timer = this.timer-1;
      //this.timerEvent.emit(this.timer);
      this._timerServiceService.timer.next(this.timer);
    }
    if(this.timer <= 0)
    {
      this.paused = true;
    }
  },1000)

  ngOnInit(): void {
    this.timeDetail =  new Array<TimeInfo>();
    this._timerServiceService.timer.next(this.timer);
    this._timerServiceService.timeDetail.next(this.timeDetail);
    this.timer = 0
  }
  ngOnDestroy(): void{
    this.timeDetail = new Array<TimeInfo>();
    this.isDisabled = false;
    this.intTime = 0;
    this.timer = 0;
    this._timerServiceService.timer.next(this.timer);
    this._timerServiceService.timeDetail.next(this.timeDetail);
  }

  action(data:number){
    if(!this.isDisabled)
    {
      this.timer = data;
    }
    this.paused = !this.paused;  debugger
    if( this.isDisabled  )
    {
      let tempPause= new TimeInfo();
        let tempTimer =this.timer;
        let tempTime =  Date.now();
        let status = "";
      if(this.paused)
      {
        status ="Paused";
      }else{
        status ="Started";
      }
      tempPause.curtime = tempTimer;
      tempPause.date = tempTime;
      tempPause.status = status;
      this.timeDetail.push(tempPause);

    }
    this._timerServiceService.timeDetail.next(this.timeDetail);
    this.isDisabled = true;
  }

  reset(){
    this.timeDetail = new Array<TimeInfo>();
    this.isDisabled = false;
    this.intTime = 0;
    this.timer = 0;
    this._timerServiceService.timeDetail.next(this.timeDetail);
    this._timerServiceService.timer.next(this.timer);
  }
}
