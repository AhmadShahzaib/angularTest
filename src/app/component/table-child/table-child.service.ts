import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableChildService {

  constructor( private httpClient : HttpClient) { }

  getData1(): Observable<any>{
    return this.httpClient.get('http://universities.hipolabs.com/search') as Observable<any>;
  }
}
