import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './helper/Authguard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Office Maintanece' },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./Modules/admin/admin.module').then((m) => m.AdminModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./Modules/employee/employee.module').then(
            (m) => m.EmployeeModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./Modules/student/student.module').then(
            (m) => m.StudentModule
          ),
          canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
