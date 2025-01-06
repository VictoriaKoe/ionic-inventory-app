import { Component, OnInit } from '@angular/core';
// import forms
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  // default var
  newUsername: String | undefined
  newEmail: String | undefined
  newPassword: String | undefined
  retypePassword: String | undefined

  // connect db
  

  constructor() { }

  ngOnInit() {

  }

  // submit register form 
  onSubmit(){
    console.log(this.newUsername, this.newEmail, this.newPassword, this.retypePassword);
    // todo: save to db

    // todo: navigate to login page
    
    

  }

}
