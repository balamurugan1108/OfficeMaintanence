import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmpdatasComponent } from './empdatas/empdatas.component';
import { SystemsComponent } from './systems/systems.component';
import { AdminboardComponent } from './adminboard/adminboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'userDetails', pathMatch: 'full' },
  { path: 'userDetails', component: EmpdatasComponent },
  { path: 'systemDetails', component: SystemsComponent },
  { path: 'issues', component: AdminboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
