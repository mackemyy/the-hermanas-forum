import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { AdminLoginComponent } from './admin-login/admin-login.component';
=======
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { UserRegisterComponent } from './user-register/user-register.component';
>>>>>>> Salazar-User-Register

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AdminLoginComponent
=======
    UserWelcomeComponent,
    UserRegisterComponent
>>>>>>> Salazar-User-Register
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
