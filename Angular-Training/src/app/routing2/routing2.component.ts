import { Component, OnInit } from '@angular/core';
import { ItemInfo } from './model/ItemInfo';

@Component({
  selector: 'app-routing2',
  templateUrl: './routing2.component.html',
  styleUrls: ['./routing2.component.css']
})
export class Routing2Component implements OnInit {

  constructor() { };
  carts = []; 
  buttonName : string;
  ASCENDING : number = 0;
  DESCENDING : number = 1
  ngOnInit(): void {
    this.createItemlist();
    this.buttonName="Grid";
  }
  createItemlist() {
    for(let i= 1;i<41;i++){
      let item = new  ItemInfo( i, `Product_${i}`, 10*i ) ;
      this.carts.push(item);
    }
  }
  toggle() {
    this.buttonName = this.buttonName == "Grid" ? "List" : "Grid";
  }
  
  onChange(data :  number) {
      this.carts.reverse();
  }

}
