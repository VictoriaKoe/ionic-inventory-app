import { Component, OnInit } from '@angular/core';
// import router
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage implements OnInit {

  // initialise default val
  userEmail: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private loginAuthService: LoginAuthService,
    private notiService: NotificationService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  // action after clicking sign in button
  async onSubmit(){
    console.log(this.userEmail, this.password);
    // todo: validate from db
    const loading = await this.loadingCtrl.create({
      message: "Loading",
      duration: 1000,
      spinner: "circles"
    });
    await loading.present();

    let message = '';

    const user = await this.loginAuthService.login(this.userEmail, this.password)
    .catch(async (error) => { // fail to login 
        const errorCode = error.code;
        console.log(errorCode);

        switch (errorCode) {
          case 'auth/invalid-credential':
            message = 'Invalid email/password. Please try again.';
            break;
          case 'auth/user-not-found':
            message = 'User not found. Please check your registered email.';
            break;
          case 'auth/invalid-email':
            message = 'Invalid email format/missing email. Please try again';
            break;
          case 'auth/missing-password':
            message = 'Please enter password.';
            break;
          default:
            message = 'Login failed. Please try again.';
        }
        
        await this.notiService.showError(message);
    });
  
    // user valid 
    if (user) {
      loading.dismiss();
      await this.notiService.showSuccess('Login successful');
        // route to main page
        this.router.navigate(['/main']);
    }
  }

  // route to register form
  onRegister(){
    this.router.navigate(['/register']);
  }

  // route to forget password 
  forgetPassword() {
    this.router.navigate(['/forget-password']);
  }

}
