import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerDto = <RegisterUser>{};
  public show: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  public nameControl = new FormControl<string>('', Validators.required);
  public surnameControl = new FormControl<string>('', Validators.required);
  public usernameControl = new FormControl<string>('', Validators.required);
  public ageControl = new FormControl<string>('', Validators.required);
  public passwordControl = new FormControl<string>('', Validators.required);
  public emailControl = new FormControl<string>('', [Validators.required,Validators.email]);

  public validateFields() {
    return this.nameControl.valid &&
      this.surnameControl.valid &&
      this.usernameControl.valid &&
      this.passwordControl.valid &&
      this.ageControl.valid &&
      this.emailControl.valid;
  }

  password() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.registerDto)
    this.userService.registerUser(this.registerDto).subscribe(() => {
      alert('Successfully Created');
      this.router.navigate(['/login']);
    });
  }

}
