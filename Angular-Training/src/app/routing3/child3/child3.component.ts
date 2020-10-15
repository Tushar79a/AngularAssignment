import { Component, OnInit,Input } from '@angular/core';
import {TimeInfo} from '../bean/TimeInfo'


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  @Input() public timeDetail: Array<TimeInfo>;
  constructor() {
  }

 ngOnInit(): void {

 }
}
