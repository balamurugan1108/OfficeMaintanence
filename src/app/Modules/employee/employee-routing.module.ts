import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpboardComponent } from './empboard/empboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'empdetails', pathMatch: 'full'  },
  { path: 'empdetails', component: EmpdetailsComponent},
  { path: 'empboard', component: EmpboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
