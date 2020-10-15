import { Component, OnInit,Input } from '@angular/core';
import {  TimerServiceService } from '../timer-service.service'
@Component({
  selector: 'app-child4_1',
  templateUrl: './child4_1.component.html',
  styleUrls: ['./child4_1.component.css']
})
export class Child4_1Component implements OnInit {

  public timers:number=0;
  constructor(private _timerServiceService : TimerServiceService) {}
  ngOnInit(): void {
    this._timerServiceService.timer.subscribe(data =>{
      this.timers=data;
    } )
  }

}
