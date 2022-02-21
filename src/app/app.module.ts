import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpFormComponent } from './component/emp-form/emp-form.component';
import { EmpTableComponent } from './component/emp-table/emp-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './component/data.service';
import { TableChildComponent } from './component/table-child/table-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { TableChildService } from './component/table-child/table-child.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    EmpTableComponent,
    TableChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, BrowserAnimationsModule, MatTableModule, HttpClientModule
  ],
  providers: [DataService, TableChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
