import { Component, OnInit } from '@angular/core';
import {TimeInfo} from './bean/TimeInfo'

@Component({
  selector: 'app-routing4',
  templateUrl: './routing4.component.html',
  styleUrls: ['./routing4.component.css']
})
export class Routing4Component implements OnInit {

  timerDetailP : TimeInfo[];
  timerP:number;
  constructor() { }

  ngOnInit(): void {
  }

}
