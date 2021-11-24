import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';

const routes: Routes = [
  {
    path: '', component: UserWelcomeComponent,
  },
  {
    path: 'user-login', component: UserLoginComponent,
  },
  {
    path: 'user-register', component: UserRegisterComponent,
  },
  {
    path: 'admin-login', component: AdminLoginComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
