import { Component, OnInit } from '@angular/core';
// import forms
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  // default var
  newUsername: String | undefined
  newPassword: String | undefined
  // db
  


  constructor() { }

  ngOnInit() {

  }

  onSubmit(){

  }

}
