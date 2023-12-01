import { Component, Input } from '@angular/core';
import { Users } from './../../helper/users';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() show: boolean = false;
  model!: any[];
  userRole!: string;
  constructor() {}

  ngOnInit(): void {
    debugger;
    const userJson = localStorage.getItem('role');
    switch (String(userJson)) {
      case 'Admin':
        this.model = [
          {
            label: 'Admin',
            items: [
              {
                label: 'User Details',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/layout/admin/userDetails'],
              },
              // {
              //   label: 'System',
              //   icon: 'pi pi-fw pi-users',
              //   routerLink: ['/layout//admin/systemDetails'],
              // },
              {
                label: 'Board',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/layout/admin/issues'],
              },
            ],
          },
        ];
        break;
      case 'employee':
        this.model = [
          {
            label: 'employee',
            items: [
              {
                label: 'Employee Details',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/layout/employee/empdetails'],
              },
              {
                label: 'Board',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/layout/employee/empboard'],
              },
            ],
          },
        ];
        break;
      case 'Student':
        this.model = [
          {
            label: 'Student',
            items: [
              {
                label: 'Student Details',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/layout/student/studentdetails'],
              },
              {
                label: 'Board',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/layout/student/studentboard'],
              },
            ],
          },
        ];
        break;
    }
  }
  onKeydown(event: KeyboardEvent) {
    const nodeElement = <HTMLDivElement>event.target;
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }
}
