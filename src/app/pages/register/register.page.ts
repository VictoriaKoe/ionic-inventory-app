import { Component, OnInit } from '@angular/core';
// import forms, validator
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
// import navigation 
import { NavController } from '@ionic/angular';

// custom validator 
import { UsernameValidator } from '../../validators/username_validator';
import { PasswordValidator } from '../..//validators/password_validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  register_form: FormGroup;
  matching_password: FormGroup;

  // connect db


  // validation message 
  error_message = {

    'newUsername': [
      {type: 'required', message: 'Username is required. '},
      {type: 'minlength', message: 'Username must be at least 3 characters long. '},
      {type: 'maxlength', message: 'Username must not be more than 10 characters long. '},
      // {type: 'pattern', message: 'Username must contain only letters and numbers. '},
      {type: 'validUsername', message: 'Your username has already been taken. '}
    ],

    'newEmail': [
      {type: 'required', message: 'Email is required. '},
      {type: 'pattern', message: 'Enter a valid email. '}
    ],

    'newPassword': [
      {type: 'required', message: 'Password is required. '},
      {type: 'minlength', message: 'Your password must contain at ' + 
        'least one uppercase, one lowercase and one number. '},
    ],

    'retypePassword': [
      {type: 'required', message: 'Confirm assword is required. '}
    ],

    'matching_passwords': [
      {type: 'areEqual', message: 'Password mismatch. '}
    ],

    'terms': [
      {type: 'pattern', message: 'Your must accept the terms and conditions'},
    ]
  };

  // initialise val
  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) { 
    this.formBuilder = formBuilder;
    this.register_form = this.initialiseRegisterForm();
    this.matching_password = this.initialisePassword();
  }

  ngOnInit() {
  }

  // initialise register form 
  private initialiseRegisterForm() {
    
    // build form group instance +  validation action 
    return this.formBuilder.group(
    {
      // username
      newUsername: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(10),
        Validators.minLength(3),
        // username pattern 
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z]||[0-9]+$'),
        Validators.required
      ])),

      // email 
      newEmail: new FormControl('', Validators.compose([
        Validators.required, // required to fill
        // email pattern 
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      // password
      matching_passwords: this.matching_password,
      
      // terms policy 
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  // initialise password form group 
  private initialisePassword () {
    
    return this.formBuilder.group (
    {
      newPassword: new FormControl('', Validators.compose(
      [
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ])),
      retypePassword: new FormControl('', Validators.required),
    }
    );

  }

  // validation method
  isValid (fieldName: string, validationType: string): Boolean  {
    const usernameControl = this.register_form.get(fieldName);

    // !!- non-null assertion
    return !!usernameControl?.hasError(validationType) && 
          (usernameControl?.dirty || usernameControl?.touched);
  }

  // submit register form 
  onSubmit(){
    console.log(this.register_form.value);

    // todo: save to db

    // todo: navigate to login page
    this.navCtrl.navigateRoot('login');
  }

}
