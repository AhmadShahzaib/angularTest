import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableChildService {

  constructor( private httpClient : HttpClient) { }

  getData1(){
    return this.httpClient.get('https://api.publicapis.org/entries') ;
  }
  getData2(country: any){
    return this.httpClient.get('http://universities.hipolabs.com/search?country='+country);
  }
}
