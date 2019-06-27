import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductmainComponent } from './products/productmain/productmain.component';
import { EmployeesComponent } from './employees/employees.component';
import { UserComponent } from './User/user/user.component';
import { RegistrationComponent } from './User/user/registration/registration.component';
import { LoginComponent } from './User/user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"", redirectTo:'/user/login',pathMatch:'full'},
  {path:'products', component:ProductmainComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path:'employees', component:EmployeesComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path:'home', component:HomeComponent,pathMatch:'full',canActivate:[AuthGuard]},
 {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component:RegistrationComponent},
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
