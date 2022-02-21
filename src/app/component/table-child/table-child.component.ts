import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableChildService } from './table-child.service';
@Component({
  selector: 'app-table-child',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.scss']
})
export class TableChildComponent implements OnInit {
  @Input() childMessage: any;
  constructor( private childService : TableChildService) { }
  child: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {
    let aar1 = ['1','2']
    this.distictMpiDetail(aar1);
  }
  async distictMpiDetail(arr : any){

    let len = arr.length;
    for(let i=0; i< len; i++){
    let call1= await this.childService.getData1().subscribe((res : any)=>{
        console.log(res);
      })
      if(call1){
        console.log(call1)
      }
    }
  }
  sendMessage() {
    this.messageEvent.emit(this.child)
  }
}
