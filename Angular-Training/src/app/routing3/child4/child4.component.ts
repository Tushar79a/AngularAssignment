import { Component, OnInit,Input, DoCheck } from '@angular/core';
import {TimeInfo} from '../bean/TimeInfo'

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit,DoCheck {

  @Input() public timeDetail: Array<TimeInfo>=[];
  started : number=0;
  paused :number=0 ;
  constructor() {
  }

 ngOnInit(): void {
 }
 ngDoCheck() :void {
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
