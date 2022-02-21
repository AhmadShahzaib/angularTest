import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpTableComponent } from './component/emp-table/emp-table.component';
import { EmpFormComponent } from './component/emp-form/emp-form.component';

const routes: Routes = [
  {path: "empform",
component: EmpFormComponent},
{
  path: "emptable",
  component: EmpTableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
