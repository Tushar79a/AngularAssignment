import { Component, OnInit } from '@angular/core';
import {TimeInfo} from './bean/TimeInfo'

@Component({
  selector: 'app-routing4',
  templateUrl: './routing3.component.html',
  styleUrls: ['./routing3.component.css']
})
export class Routing3Component implements OnInit {

  timerDetailP : TimeInfo[];
  timerP:number;
  constructor() { }

  ngOnInit(): void {
  }

}
