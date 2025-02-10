import { Component, inject, OnInit } from '@angular/core';
// import forms, validator
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
// import navigation 
import { NavController } from '@ionic/angular';

// custom validator 
import { UsernameValidator } from '../../validators/username_validator';
import { PasswordValidator } from '../..//validators/password_validator';
import { LoadingController } from '@ionic/angular/standalone';
import { DataServiceService } from 'src/app/services/data-service.service';
import { NotificationService } from 'src/app/services/notification.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { Firestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  register_form: FormGroup;
  private authService = inject(LoginAuthService);
  private fireStore = inject(Firestore);


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
      {type: 'required', message: 'Confirm password is required. '}
    ],

    'terms': [
      {type: 'pattern', message: 'Your must accept the terms and conditions'},
    ]
  };

  // initialise val
  constructor(
    private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private userService: DataServiceService,
    private notiService: NotificationService,
    // private authService: LoginAuthService,
    // private fireStore: AngularFirestore,
  ) { 
    this.formBuilder = formBuilder;
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

  // validation method
  isValid (fieldName: string, validationType: string): boolean  {
    const fieldControl = this.register_form.get(fieldName);

    // !!- non-null assertion
    return !!fieldControl?.hasError(validationType) && 
          (fieldControl?.dirty || fieldControl?.touched);
  }

  get retypePasswordControl() {
    return this.register_form.get('retypePassword');
  }

  isPasswordInvalid(): boolean {
    return !!this.retypePasswordControl?.hasError('isPasswordMatched') && 
           (this.retypePasswordControl?.dirty || this.retypePasswordControl?.touched);
  }

  // submit user register form 
  async onSubmit() {
    console.log(this.register_form.value);

    // check form pass the validation test 
    if (this.register_form.valid) {
      const loading = await this.loadingCtrl.create({
        message: "Creating account",
        duration: 1000,
        spinner: "circles"
      });
      
      await loading.present();
  
      // todo: save to db
      
      // create user
      // save to auth and firestore
      try {
        const user = await this.authService.registerUser(this.register_form.value);

        if (user.user) {
          const userCredential = user.user;
          console.log("new user is successfully registered: " + userCredential);

          console.log("User id " + userCredential.uid);

          // save to firestore
          // create collection
          const userRef = doc(this.fireStore, `users/${userCredential.uid}`)
          
          // add data to firestore
          await setDoc(userRef, {
            uid: userCredential.uid, // user unique id
            username: this.register_form.value.newUsername,
            name: this.register_form.value.newName,
            email: this.register_form.value.newEmail,
            password: this.register_form.value.newPassword,
            terms: this.register_form.value.terms,
            lastLoginAt: serverTimestamp(),
            createdAt: serverTimestamp(),
            pronoun: '',
            avatarURL: ''
          })
        }

        console.log("User data successfully written to Firestore");
        // toast msg when success register
        await this.notiService.showSuccess('Registration successful');
        // todo: navigate to login page
        this.navCtrl.navigateRoot('login');
      }
      catch (error: any) {
          let message = '';
          const errorCode = error.code;
          console.log(errorCode);

          switch (errorCode) {
            case 'auth/email-already-exists':
              message = 'This email is already registered. Please provide a new one.';
              break;
            default:
              message = 'Registration failed. Please try again.';
          }
          
          await this.notiService.showError(message);
        }

        // save to realtime database
        const response = await this.userService.saveUserData(this.register_form.value)
        // observable to wrap req and get access to response
        response.subscribe(
          async responseData => {
            console.log(responseData);
          }
        );

        await loading.dismiss();
        // this.notiService.showSuccess('Registration successful');
      } 
    }
  }    
