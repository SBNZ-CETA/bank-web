import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './modules/loan/list/list.component';
import { RequestComponent } from './modules/loan/request/request.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login',   component: LoginComponent},
  {path: 'request',   component: RequestComponent},
  {path: 'requests',   component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
