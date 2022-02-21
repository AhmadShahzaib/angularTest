import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit {
  public empForm :FormGroup;
  message: any;
  constructor(private data: DataService,
    private fb: FormBuilder
  ) {
    this.empForm = this.createForm();
    
   }
createForm(): FormGroup{
  return this.fb.group({
    First_Name:["",Validators.compose([
      Validators.required,
    ])],
    Last_Name:["",Validators.compose([
      Validators.required,
    ])],
    email:["",Validators.compose([
      Validators.required, Validators.email
    ])],
    Portfolio:["",Validators.compose([
      Validators.required,
    ])],
    
    Position:["",Validators.compose([
      Validators.required,
    ])],
    Phone:["",Validators.compose([
      Validators.required,
    ])],
  })
}
  ngOnInit(): void {
    
    console.log(this.empForm);
    
  }
  
  
  newMessage() {
    if(this.empForm.valid){
      console.log("Check1")
    this.data.changeMessage(this.empForm.value)}
  }
}
