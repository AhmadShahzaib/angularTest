import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableChildService } from './table-child.service';
import { firstValueFrom, toArray } from 'rxjs';
@Component({
  selector: 'app-table-child',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.scss']
})
export class TableChildComponent implements OnInit {
   countries = ["India", "Italy", "Canada","Finland","Fiji"];
  @Input() childMessage: any;
  constructor( private childService : TableChildService) { }
  child: string = "Hola Mundo!"
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {
    let aar1 = ['1']
    this.distictMpiDetail(aar1);
  }
  async distictMpiDetail(arr : any){
    let resp1 : any =[];
    let resp2 : any =[];
    
    let len = arr.length;
    for(let i=0; i< len; i++){
      let open1=  await firstValueFrom(this.childService.getData1())
      let res =Object.entries(open1);
      res = res[1][1];
        for(let x=0;x< 5;x++ ){

          resp1[x] = res[x];
          resp1[x].country = this.countries[x]
          console.log(resp1[x]);
        }
      // if(resp1 !== null){
      let open2=  await firstValueFrom( this.childService.getData2(this.countries[i]));
      console.log(open2);
      // }
    }
  }
  sendMessage() {
    this.messageEvent.emit(this.child)
  }
}
