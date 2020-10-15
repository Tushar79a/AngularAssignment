
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {TimeInfo} from './bean/TimeInfo'

@Injectable({
  providedIn: 'root'
})
export class TimerServiceService {

  timeDetail = new Subject<TimeInfo[]>();
  timer = new Subject<number>();

  constructor() { }
}
