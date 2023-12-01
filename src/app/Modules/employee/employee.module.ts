import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { EmpboardComponent } from './empboard/empboard.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmpdetailsComponent,
    EmpboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
