import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public LoginDto = <LoginUser>{};
  public show: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  public usernameControl = new FormControl<string>('', Validators.required);
  public passwordControl = new FormControl<string>('', Validators.required);

  public validateFields() {
    return this.usernameControl.valid &&
      this.passwordControl.valid;
  }

  password() {
      this.show = !this.show;
  }

  loginUser(){
    this.userService.loginUser(this.LoginDto).subscribe(
      data => {
        console.log(data)
        localStorage.setItem('token', String(data.access_token));
        this.router.navigate(['/']);
      },
      error => {
          alert('Invalid username or password');
      }
    );
  }

}
