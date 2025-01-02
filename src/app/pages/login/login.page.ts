import { Component, OnInit } from '@angular/core';
// import forms
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
// import router
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage implements OnInit {

  // initialise default val
  username: String = '';
  password: String = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  // action after clicking sign in button
  onSubmit(){
    console.log(this.username, this.password);
    // route to main page
    this.router.navigate(['/loader']);
  }

  // route to register form
  onRegister(){
    this.router.navigate(['/loader']);
  }

  // route to forget password 
  forgetPassword() {
    this.router.navigate(['']);
  }

}
