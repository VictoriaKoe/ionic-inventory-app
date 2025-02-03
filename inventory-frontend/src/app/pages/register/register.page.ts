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
  // matching_password_group: FormGroup;

  // connect db


  // validation message 
  error_message = {

    'newUsername': [
      {type: 'required', message: 'Username is required. '},
      {type: 'minlength', message: 'Username must be at least 3 characters long. '},
      {type: 'maxlength', message: 'Username must not be more than 10 characters long. '},
      {type: 'pattern', message: 'Username must not contain special characters. '},
      {type: 'validUsername', message: 'Your username has already been taken. '}
    ],

    'newName' : [
      {type: 'required', message: 'Your name is required. '},
      {type: 'pattern', message: 'Name must only contain letters. '},
    ],

    'newEmail': [
      {type: 'required', message: 'Email is required. '},
      {type: 'pattern', message: 'Enter a valid email. '}
    ],

    'newPassword': [
      {type: 'required', message: 'Password is required. '},
      {type: 'pattern', message: 'Your password must contain at ' + 
        'least one uppercase, one lowercase and one number. '},
      {type: 'minlength', message: 'Your password must be at least 5 characters long. '}
    ],

    'retypePassword': [
      {type: 'required', message: 'Confirm password is required. '},
      // {type: 'isPasswordMatched', message: 'Password mismatch. '}
    ],

    // 'matching_passwords': [
    //   {type: 'isPasswordMatched', message: 'Password mismatch. '}
    // ],

    'terms': [
      {type: 'pattern', message: 'Your must accept the terms and conditions'},
    ]
  };

  // initialise val
  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) { 
    this.formBuilder = formBuilder;
    // this.matching_password_group = this.initialisePassword();
    this.register_form = this.initialiseRegisterForm();
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
        Validators.pattern('^[a-zA-Z0-9]+$'),
        Validators.required
      ])),

      // user name
      newName: new FormControl('', Validators.compose([
        // username pattern 
        Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)*$'),
        Validators.required
      ])),

      // email 
      newEmail: new FormControl('', Validators.compose([
        Validators.required, // required to fill
        // email pattern 
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      // password
      newPassword: new FormControl('', Validators.compose([
        Validators.required, // required to fill
        // email pattern 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.minLength(5)
      ])),

      // retype password 
      // retypePassword: ['', Validators.required, {validators: PasswordValidator.isMatched}],
      retypePassword: new FormControl('', {
        validators: [
          Validators.required,
          PasswordValidator.isMatched
        ]
      }),

      // terms policy 
      terms: new FormControl(false, Validators.pattern('true'))
  });
  }

  // initialise password form group 
  // private initialisePassword () {
    
  //   return this.formBuilder.group (
  //   {
  //     newPassword: new FormControl('', 
  //     [
  //       Validators.minLength(5),
  //       Validators.required,
  //       Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
  //     ],
  //   ), 
  //     retypePassword: new FormControl('',Validators.required)
  //   }, 
  //   {
  //     validators: PasswordValidator.isMatched
  //   });
  // }

  // validation method
  isValid (fieldName: string, validationType: string): boolean  {
    const fieldControl = this.register_form.get(fieldName);

    // !!- non-null assertion
    return !!fieldControl?.hasError(validationType) && 
          (fieldControl?.dirty || fieldControl?.touched);
  }

  // get matchingPasswords() {
  //   return this.register_form.get('matching_passwords');
  // }

  // get newPasswordControl() {
  //   return this.register_form.get('newPassword');
  // }

  get retypePasswordControl() {
    return this.register_form.get('retypePassword');
  }

  isPasswordInvalid(): boolean {
    return !!this.retypePasswordControl?.hasError('isPasswordMatched') && 
           (this.retypePasswordControl?.dirty || this.retypePasswordControl?.touched);
  }

  // submit register form 
  onSubmit(){
    console.log(this.register_form.value);

    // todo: save to db

    // todo: navigate to login page
    this.navCtrl.navigateRoot('login');
  }

}
