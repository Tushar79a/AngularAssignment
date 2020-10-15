import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';
@Component({
  selector: 'app-routing1',
  templateUrl: './routing1.component.html',
  styleUrls: ['./routing1.component.css'],
  animations:[
    trigger('float',[
      state('min', style({
          transform: ' scale(1)'
      })),
      state('max', style({
        transform: ' scale(0.1)'
      })),
      transition('min <=> max', animate(1000)),

  ]),
  ]
})
export class Routing1Component implements OnInit {

  switch=false;
  constructor() { }
  get stateName(){
    return this.switch ? 'min':'max';
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.switch=!this.switch;
 }, 2000);
  }

}
