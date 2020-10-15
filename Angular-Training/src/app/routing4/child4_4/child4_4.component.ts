import { Component,Input, DoCheck } from '@angular/core';
import {TimeInfo} from '../bean/TimeInfo'
import {  TimerServiceService } from '../timer-service.service'

@Component({
  selector: 'app-child4_4',
  templateUrl: './child4_4.component.html',
  styleUrls: ['./child4_4.component.css']
})
export class Child4_4Component implements DoCheck {

  public timeDetail: Array<TimeInfo>=[];
  started : number=0;
  paused :number=0 ;
  constructor(private _timerServiceService : TimerServiceService) {}


 ngOnInit(): void {
  this._timerServiceService.timeDetail.subscribe(data =>{
    this.timeDetail = data;
 })
 }
 ngDoCheck() :void {debugger
  this.started = 0;
  this.paused = 0;
  this.timeDetail.forEach(element => {
    if(element.status=='Started')
    {
     this.started=this.started+1;
    } else
    {
     this.paused++;
    }
  });
 }

}
