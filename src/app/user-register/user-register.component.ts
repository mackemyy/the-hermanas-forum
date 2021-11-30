import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  @ViewChild('f') registerForm!: NgForm;
  isValidForm = false;
  user = {
    email: '',
    password: '',

  }


  onLogin() {
    this.isValidForm = false;
    if(this.registerForm.invalid) {
      return;
    }
    else {
      this.isValidForm = true;

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
