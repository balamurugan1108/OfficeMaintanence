import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/helper/Service/auth-service.service';

import { MessageService } from 'primeng/api';
import { jwtDecode } from 'jwt-decode';
import { Users } from 'src/app/helper/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  show_button: Boolean = false;
  show_eye: Boolean = false;
  model: any = {};
  decodeData: any = {};
  loginForm:FormGroup |any;

  constructor(
     public api:AuthServiceService,
      private router: Router,
      private messageService: MessageService,){}
  ngOnInit(){}
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }
  onSubmit(model:any): void {
    var datas = {
      email: model.email,
      password : model.password
    };
    this.api.loginData(datas).subscribe({
      next: (data: any) => {
        if (data.code == 200) {
          switch (data.message.role) {
            case 'Admin':
              this.router.navigateByUrl("/layout/admin");
              break;
            case 'employee':
              this.router.navigateByUrl("/layout/employee");
              break;
            case 'Student':
              this.router.navigateByUrl("/layout/student");
              break;
            default:
              this.messageService.add({
                    severity: 'success',
                    summary: 'Success Message',
                    detail: 'User Not Found',
                  });
              break;
          }
        } else {
        }
      },
    });

    // console.log(JSON.stringify(this.model));
    // f.resetForm();
    // this.router.navigate(['layout'])
  }
}
