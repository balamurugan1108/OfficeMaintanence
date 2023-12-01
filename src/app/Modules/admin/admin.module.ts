import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EmpdatasComponent } from './empdatas/empdatas.component';
import { SystemsComponent } from './systems/systems.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminboardComponent } from './adminboard/adminboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    EmpdatasComponent,
    SystemsComponent,
    AdminboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
