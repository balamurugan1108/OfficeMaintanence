import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  show_button: Boolean = false;
  show_eye: Boolean = false;
  model: any = {};
  
  loginForm:FormGroup |any;

  constructor( private router: Router,){}
  ngOnInit(){}
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }
  onSubmit(f:NgForm): void {
    console.log(JSON.stringify(this.model));
    f.resetForm();
    this.router.navigate(['layout'])
  }
}
