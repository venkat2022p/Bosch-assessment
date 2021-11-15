import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
//import { DialogBoxComponent } from './dialog-box/dialog-box.component';
export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [

];
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
document:any
  checked: any;
  //displayedColumns: string[] = ['id', 'name', 'action'];
  // dataSource = ELEMENT_DATA;

  // @ViewChild(MatTable, { static: true })
  // table!: MatTable<any>;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(){
  
  }

}
  

