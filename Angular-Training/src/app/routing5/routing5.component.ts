import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Student } from './bean/student'


const STUDENT: Student[] = [
  {name: 'ram', class: 'V', section: 'A', sub1: 30,sub2:90,sub3:10},
  {name: 'Rahu', class: 'VI', section: 'D', sub1: 99,sub2:20,sub3:10},
  {name: 'Krishna', class: 'IV', section: 'C', sub1: 50,sub2:20,sub3:88},
  {name: 'Bantu', class: 'V', section: 'A', sub1: 30,sub2:20,sub3:10},
  {name: 'elle', class: 'X', section: 'B', sub1: 50,sub2:50,sub3:50},
  {name: 'Ankit', class: 'V', section: 'A', sub1: 30,sub2:20,sub3:10},
  {name: 'Nidhi', class: 'V', section: 'B', sub1: 70,sub2:20,sub3:10},
  {name: 'Tush', class: 'VII', section: 'A', sub1: 30,sub2:100,sub3:80},
  {name: 'Bindiya', class: 'V', section: 'C', sub1: 30,sub2:20,sub3:55},
  {name: 'Mukta', class: 'V', section: 'E', sub1: 66,sub2:20,sub3:10},

];

@Component({
  selector: 'app-routing5',
  templateUrl: './routing5.component.html',
  styleUrls: ['./routing5.component.css']
})
export class Routing5Component implements  AfterViewInit {
  displayedColumns: string[] = ['name', 'class', 'section', 'sub1','sub2','sub3'];
  dataSource = new MatTableDataSource(STUDENT);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
