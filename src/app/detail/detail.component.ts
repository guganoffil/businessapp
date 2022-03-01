import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'gugan',  status: 'active'},
  {position: 2, name: 'gugan',  status: 'inactive'},
  {position: 3, name: 'gugan',  status: 'active'},
  {position: 4, name: 'gugan',  status: 'active'},
  
];
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'status'];
   dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
    
  }

}
