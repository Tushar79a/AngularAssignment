import { Component, OnInit,OnDestroy,Output,EventEmitter } from '@angular/core';
import {TimeInfo} from '../bean/TimeInfo'
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnDestroy {

  paused : boolean =true;
  timer : number = 0 ;
  isDisabled : boolean = false;
  intTime : number  = 0;
  timeDetail : Array<TimeInfo>;

  @Output() public timeDetailEvent = new EventEmitter<TimeInfo[]>();
  @Output() public timerEvent = new EventEmitter<number>();


  x = setInterval(()=>{
    if(!this.paused && this.timer >0)
    {
      this.timer = this.timer-1;
      this.timerEvent.emit(this.timer);
    }
    if(this.timer <= 0)
    {
      this.paused = true;
    }
  },1000)

  ngOnInit(): void {
    this.timeDetail =  new Array<TimeInfo>();
    this.timerEvent.emit(this.timer);
    this.timeDetailEvent.emit(this.timeDetail);

    this.timer = 0
  }
  ngOnDestroy(): void{
    this.timeDetail = new Array<TimeInfo>();
    this.isDisabled = false;
    this.intTime = 0;
    this.timer = 0;
    this.timerEvent.emit(this.timer);
    this.timeDetailEvent.emit(this.timeDetail);
  }

  action(data:number){
    if(!this.isDisabled)
    {
      this.timer = data;
    }
    this.paused = !this.paused;
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
    this.timeDetailEvent.emit(this.timeDetail);

    this.isDisabled = true;
  }

  reset(){
    this.timeDetail = new Array<TimeInfo>();
    this.isDisabled = false;
    this.intTime = 0;
    this.timer = 0;
    this.timeDetailEvent.emit(this.timeDetail);

    this.timerEvent.emit(this.timer);
  }
}
