import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;
  isValidForm = false;
  user = {
    email: '',
    password: '',

  }


  onLogin() {
    this.isValidForm = false;
    if(this.loginForm.invalid) {
      return;
    }
    else {
      this.isValidForm = true;

    }
  }


  constructor(private router: Router) { }
  goToUserRegister= () => {
    this.router.navigateByUrl('/user-register');
  }
  goToHomePage= () => {
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

}
