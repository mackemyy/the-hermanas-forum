import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
<<<<<<< HEAD
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { UserRegisterComponent } from './user-register/user-register.component';
>>>>>>> Salazar-User-Register

@NgModule({
  declarations: [
    AppComponent,
    UserWelcomeComponent,
<<<<<<< HEAD
    UserLoginComponent,
=======
    UserRegisterComponent
>>>>>>> Salazar-User-Register
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
