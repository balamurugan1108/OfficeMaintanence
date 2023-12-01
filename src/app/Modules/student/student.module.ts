import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { StudentboardComponent } from './studentboard/studentboard.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentdetailsComponent,
    StudentboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ]
})
export class StudentModule { }
