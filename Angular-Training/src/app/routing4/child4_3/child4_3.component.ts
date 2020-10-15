import { Component, OnInit,Input } from '@angular/core';
import {TimeInfo} from '../bean/TimeInfo'
import {  TimerServiceService } from '../timer-service.service'


@Component({
  selector: 'app-child4_3',
  templateUrl: './child4_3.component.html',
  styleUrls: ['./child4_3.component.css']
})
export class Child4_3Component implements OnInit {

  public timeDetail: Array<TimeInfo>;
  constructor(private _timerServiceService : TimerServiceService) {}


 ngOnInit(): void {
  this._timerServiceService.timeDetail.subscribe(data =>{
    this.timeDetail = data;
 })
}
}
