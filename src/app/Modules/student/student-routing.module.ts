import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentboardComponent } from './studentboard/studentboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'studentdetails', pathMatch: 'full'  },
  { path: 'studentdetails', component: StudentdetailsComponent},
  { path: 'studentboard', component: StudentboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
