import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-routing6',
  templateUrl: './routing6.component.html',
  styleUrls: ['./routing6.component.css'],
})
export class Routing6Component implements OnInit {
  numbers = [];

  sum = 30;
  throttle = 3;
  scrollDistance = 1;
  constructor(public dialog: MatDialog) {
    this.addItems(1, this.sum);
  }

  ngOnInit(): void {}

  addItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.numbers[i] = i;
    }
  }

  onScroll() {
    const start = this.sum;
    this.sum += 20;
    this.addItems(start, this.sum);
  }

  openDialog(val: number) {
    let dialogRef = this.dialog.open(PopUpComponent, { data: { id: val } });
  }
}
