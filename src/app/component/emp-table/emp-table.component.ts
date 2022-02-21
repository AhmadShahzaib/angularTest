import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

export interface PeriodicElement {
  First_Name: string;
  Last_Name: string;
  email: string;
  Position: string;
  Phone: any;
  Portfolio: string;
}
let ELEMENT_DATA: PeriodicElement[]= []
@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.scss']
})
export class EmpTableComponent implements OnInit {
  message: any;
  parent: any; 
  i: number = 0;
  displayedColumns: string[] = ['FirstName', 'LastName', 'Email', 'Position', 'Phone'];
  dataSource = ELEMENT_DATA;
  constructor(private data: DataService, 
    ) { }

  ngOnInit() {
     this.data.currentMessage.subscribe(message => this.message = message)
     console.log();
     ELEMENT_DATA[this.i] = this.message;
     this.i++;
     console.log(ELEMENT_DATA);
  }
  
  receiveMessage($event : any) {
    this.parent = $event
  }

}
