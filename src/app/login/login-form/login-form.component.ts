import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../_services/login.service';
import {UserData} from '../_interfaces/user-data';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService) { }

  loginUser(): void {
    const userData: UserData = this.loginForm.value;
    this.loginService.loginIn(userData).subscribe(resp => {
      console.warn(resp);
    });
  }

}
