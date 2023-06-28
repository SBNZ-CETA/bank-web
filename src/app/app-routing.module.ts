import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './modules/loan/request/request.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login',   component: LoginComponent},
  {path: 'request',   component: RequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
